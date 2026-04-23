#!/usr/bin/env node
// scripts/run-digest.mjs
//
// Daily digest runner for oss-digest.
// Reads targets.json, fetches the last 24h of GitHub activity per repo via `gh api`,
// writes sanitised raw caches and per-repo + index markdown digests.
//
// Usage:
//   node scripts/run-digest.mjs                  # today
//   node scripts/run-digest.mjs --dry            # plan only, no writes
//   node scripts/run-digest.mjs --repo OWNER/REPO
//   node scripts/run-digest.mjs --date YYYY-MM-DD

import { mkdir, writeFile, readFile } from "node:fs/promises";
import { dirname, resolve as resolvePath } from "node:path";
import { fileURLToPath } from "node:url";

import { fetchIssues, fetchPulls, fetchReleases, fetchCommits } from "./lib/gh.mjs";
import {
  sanitiseIssue, sanitisePull, sanitiseRelease, sanitiseCommit,
  renderRepoDigest, renderIndex, renderErrorsFile, repoFlat,
} from "./lib/render.mjs";
import { summarise, detectLlmCli } from "./lib/summarise.mjs";

const __filename = fileURLToPath(import.meta.url);
const ROOT = resolvePath(dirname(__filename), "..");

// ---------- arg parsing ----------

function parseArgs(argv) {
  const args = { dry: false, repo: null, date: null, llm: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry") args.dry = true;
    else if (a === "--llm") args.llm = true;
    else if (a === "--no-llm") args.llm = false;
    else if (a === "--repo") args.repo = argv[++i];
    else if (a === "--date") args.date = argv[++i];
    else if (a === "--help" || a === "-h") {
      console.log(`Usage: run-digest.mjs [--dry] [--llm] [--repo OWNER/REPO] [--date YYYY-MM-DD]`);
      process.exit(0);
    } else {
      console.error(`Unknown arg: ${a}`);
      process.exit(2);
    }
  }
  return args;
}

// ---------- date helpers ----------

function pad(n) { return String(n).padStart(2, "0"); }

function isoDate(d) {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

/**
 * Build the 24h window. `dateOverride` (YYYY-MM-DD) means: window ends at the
 * end of that UTC day, starts 24h before. If unset, window ends "now" UTC.
 */
function computeWindow(dateOverride) {
  let untilDate;
  if (dateOverride) {
    // end-of-day UTC for the given date
    const [y, m, d] = dateOverride.split("-").map(Number);
    untilDate = new Date(Date.UTC(y, m - 1, d, 23, 59, 59));
  } else {
    untilDate = new Date();
  }
  const sinceDate = new Date(untilDate.getTime() - 24 * 60 * 60 * 1000);
  return {
    sinceIso: sinceDate.toISOString(),
    untilIso: untilDate.toISOString(),
    dateLabel: isoDate(untilDate),
  };
}

// ---------- per-target processing ----------

async function processTarget(target, win, opts) {
  const { full_name, default_branch, why } = target;
  const branch = default_branch || "main";

  // Parallelise the four endpoint calls per repo.
  const [issuesRaw, pullsRaw, releasesRaw, commitsRaw] = await Promise.all([
    fetchIssues(full_name, win.sinceIso),
    fetchPulls(full_name, win.sinceIso),
    fetchReleases(full_name, win.sinceIso),
    fetchCommits(full_name, branch, win.sinceIso, win.untilIso),
  ]);

  const sanitised = {
    repo: full_name,
    default_branch: branch,
    window: { since: win.sinceIso, until: win.untilIso },
    issues: issuesRaw.map(sanitiseIssue),
    pulls: pullsRaw.map(sanitisePull),
    releases: releasesRaw.map(sanitiseRelease),
    commits: commitsRaw.map(sanitiseCommit),
  };

  // ---- v0.2 hook: optional LLM summary ----
  let summary = "";
  if (opts.llm) {
    try {
      summary = await summarise(sanitised, { cli: opts.llmCli });
    } catch (err) {
      console.error(`  ! ${full_name}: summarise threw: ${err.message}`);
      summary = "";
    }
  }

  const digestMd = renderRepoDigest({
    repo: full_name,
    date: win.dateLabel,
    sinceIso: win.sinceIso,
    untilIso: win.untilIso,
    raw: sanitised,
    why,
    defaultBranch: branch,
    summary,
  });

  if (!opts.dry) {
    const cacheDir = resolvePath(ROOT, "cache", win.dateLabel, full_name);
    await mkdir(cacheDir, { recursive: true });
    await writeFile(resolvePath(cacheDir, "raw.json"), JSON.stringify(sanitised, null, 2));

    const digestDir = resolvePath(ROOT, "digests", win.dateLabel);
    await mkdir(digestDir, { recursive: true });
    await writeFile(resolvePath(digestDir, `${repoFlat(full_name)}.md`), digestMd + "\n");
  }

  const mergedPulls = sanitised.pulls.filter((p) => p.merged_at).length;
  const openPulls = sanitised.pulls.filter((p) => !p.merged_at && p.state === "open").length;

  return {
    repo: full_name,
    repoFlat: repoFlat(full_name),
    ok: true,
    summarised: !!(summary && summary.trim()),
    stats: {
      releases: sanitised.releases.length,
      mergedPulls,
      openPulls,
      issues: sanitised.issues.length,
      commits: sanitised.commits.length,
    },
    latestReleaseTag: sanitised.releases[0]?.tag_name ?? null,
  };
}

// ---------- main ----------

async function main() {
  const args = parseArgs(process.argv);
  const win = computeWindow(args.date);

  const manifestPath = resolvePath(ROOT, "targets.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));

  let targets = manifest.targets;
  if (args.repo) {
    targets = targets.filter((t) => t.full_name === args.repo);
    if (targets.length === 0) {
      console.error(`No target matches --repo ${args.repo}.`);
      process.exit(2);
    }
  }

  // ---- LLM detection ----
  let llmCli = null;
  if (args.llm) {
    llmCli = await detectLlmCli();
    if (!llmCli) {
      console.log(`  llm        : requested but no claude/codex on PATH — falling back to deterministic only`);
    }
  }

  // ---- Plan ----
  console.log(`oss-digest run`);
  console.log(`  date label : ${win.dateLabel}`);
  console.log(`  window     : ${win.sinceIso} → ${win.untilIso}`);
  console.log(`  targets    : ${targets.length}`);
  console.log(`  llm        : ${args.llm ? (llmCli || "off (no CLI)") : "off"}`);
  console.log(`  dry-run    : ${args.dry}`);
  for (const t of targets) {
    console.log(`    - ${t.full_name}  (branch ${t.default_branch || "main"}, focus: ${t.focus.join(", ")})`);
  }

  if (args.dry) {
    const apiCalls = targets.length * 4;
    console.log(`\n[dry-run] Would make ~${apiCalls} gh api calls (${targets.length} repos × 4 endpoints).`);
    console.log(`[dry-run] Would write digests under digests/${win.dateLabel}/ and cache under cache/${win.dateLabel}/.`);
    return;
  }

  // ---- Run ----
  const runOpts = { dry: false, llm: args.llm && !!llmCli, llmCli };
  const results = await Promise.allSettled(targets.map((t) => processTarget(t, win, runOpts)));

  const entries = [];
  const errors = [];
  results.forEach((r, idx) => {
    const target = targets[idx];
    if (r.status === "fulfilled") {
      entries.push(r.value);
    } else {
      const message = r.reason?.message || String(r.reason);
      errors.push({ repo: target.full_name, message });
      entries.push({ repo: target.full_name, repoFlat: repoFlat(target.full_name), ok: false });
      console.error(`  ✗ ${target.full_name}: ${message}`);
    }
  });

  const digestDir = resolvePath(ROOT, "digests", win.dateLabel);
  await mkdir(digestDir, { recursive: true });

  const indexMd = renderIndex({
    date: win.dateLabel,
    sinceIso: win.sinceIso,
    untilIso: win.untilIso,
    entries,
    errorCount: errors.length,
  });
  await writeFile(resolvePath(digestDir, "INDEX.md"), indexMd + "\n");

  if (errors.length > 0) {
    const errMd = renderErrorsFile({ date: win.dateLabel, errors });
    await writeFile(resolvePath(digestDir, "_errors.md"), errMd + "\n");
  }

  const okCount = entries.filter((e) => e.ok).length;
  const summarisedCount = entries.filter((e) => e.summarised).length;
  console.log(`\nDone. ${okCount}/${targets.length} targets succeeded. ${summarisedCount} LLM summaries. Output: digests/${win.dateLabel}/`);
  if (errors.length > 0) {
    console.log(`${errors.length} target(s) failed — see digests/${win.dateLabel}/_errors.md`);
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
