#!/usr/bin/env node
// scripts/backfill.mjs
//
// Backfill historical daily digests for an arbitrary date range.
// One commit per day after all 8 repos render successfully.
//
// Usage:
//   node scripts/backfill.mjs --start 2026-03-25 --end 2026-04-22
//   node scripts/backfill.mjs --start 2026-03-25 --end 2026-04-22 --no-llm
//   node scripts/backfill.mjs --start 2026-03-25 --end 2026-04-22 --no-commit
//   node scripts/backfill.mjs --start 2026-03-25 --end 2026-04-22 --push-every 10
//
// Behaviour:
//   - Resume-safe: any date whose digests/<date>/INDEX.md already exists is skipped.
//   - Throttled: max 5 concurrent gh api operations (per-repo work runs serially
//     within a date; up to 5 repos in parallel).
//   - Stops if API call count exceeds 4500 since process start.
//   - LLM summaries are produced if claude/codex is on PATH (default on; pass
//     --no-llm to suppress).

import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import { dirname, resolve as resolvePath } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

import {
  fetchIssuesBounded, fetchPullsBounded, fetchReleasesBounded, fetchCommits,
  getApiCallCount,
} from "./lib/gh.mjs";
import {
  sanitiseIssue, sanitisePull, sanitiseRelease, sanitiseCommit,
  renderRepoDigest, renderIndex, renderErrorsFile, repoFlat,
} from "./lib/render.mjs";
import { summarise, detectLlmCli } from "./lib/summarise.mjs";

const __filename = fileURLToPath(import.meta.url);
const ROOT = resolvePath(dirname(__filename), "..");

const API_CEILING = 4500;
const REPO_CONCURRENCY = 5;

// ---------- arg parsing ----------

function parseArgs(argv) {
  const args = {
    start: null, end: null,
    llm: true, commit: true,
    pushEvery: 10,
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--start") args.start = argv[++i];
    else if (a === "--end") args.end = argv[++i];
    else if (a === "--no-llm") args.llm = false;
    else if (a === "--llm") args.llm = true;
    else if (a === "--no-commit") args.commit = false;
    else if (a === "--push-every") args.pushEvery = Number(argv[++i]);
    else if (a === "--help" || a === "-h") {
      console.log(`Usage: backfill.mjs --start YYYY-MM-DD --end YYYY-MM-DD [--no-llm] [--no-commit] [--push-every N]`);
      process.exit(0);
    } else {
      console.error(`Unknown arg: ${a}`);
      process.exit(2);
    }
  }
  if (!args.start || !args.end) {
    console.error("Both --start and --end are required.");
    process.exit(2);
  }
  return args;
}

// ---------- date helpers ----------

function pad(n) { return String(n).padStart(2, "0"); }
function isoDate(d) {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

/**
 * Build inclusive [start, end] list of YYYY-MM-DD strings.
 */
function dateRange(startStr, endStr) {
  const [sy, sm, sd] = startStr.split("-").map(Number);
  const [ey, em, ed] = endStr.split("-").map(Number);
  const start = Date.UTC(sy, sm - 1, sd);
  const end = Date.UTC(ey, em - 1, ed);
  if (end < start) {
    console.error(`--end must be >= --start`);
    process.exit(2);
  }
  const out = [];
  for (let t = start; t <= end; t += 86400000) {
    out.push(isoDate(new Date(t)));
  }
  return out;
}

/** 24h window ending at end-of-UTC-day for the given date label. */
function windowFor(dateLabel) {
  const [y, m, d] = dateLabel.split("-").map(Number);
  const untilDate = new Date(Date.UTC(y, m - 1, d, 23, 59, 59));
  const sinceDate = new Date(untilDate.getTime() - 24 * 60 * 60 * 1000);
  return {
    sinceIso: sinceDate.toISOString(),
    untilIso: untilDate.toISOString(),
    dateLabel,
  };
}

// ---------- file helpers ----------

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

// ---------- per-target processing (bounded variants) ----------

async function processTargetBounded(target, win, opts) {
  const { full_name, default_branch, why } = target;
  const branch = default_branch || "main";

  const [issuesRaw, pullsRaw, releasesRaw, commitsRaw] = await Promise.all([
    fetchIssuesBounded(full_name, win.sinceIso, win.untilIso),
    fetchPullsBounded(full_name, win.sinceIso, win.untilIso),
    fetchReleasesBounded(full_name, win.sinceIso, win.untilIso),
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

  let summary = "";
  if (opts.llm) {
    try {
      summary = await summarise(sanitised, { cli: opts.llmCli });
    } catch (err) {
      console.error(`    ! ${full_name}: summarise threw: ${err.message}`);
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

  const cacheDir = resolvePath(ROOT, "cache", win.dateLabel, full_name);
  await mkdir(cacheDir, { recursive: true });
  await writeFile(resolvePath(cacheDir, "raw.json"), JSON.stringify(sanitised, null, 2));

  const digestDir = resolvePath(ROOT, "digests", win.dateLabel);
  await mkdir(digestDir, { recursive: true });
  await writeFile(resolvePath(digestDir, `${repoFlat(full_name)}.md`), digestMd + "\n");

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

// ---------- concurrency runner ----------

async function runWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function pump() {
    while (cursor < items.length) {
      const idx = cursor++;
      try {
        results[idx] = { status: "fulfilled", value: await worker(items[idx], idx) };
      } catch (e) {
        results[idx] = { status: "rejected", reason: e };
      }
    }
  }
  const workers = Array.from({ length: Math.min(limit, items.length) }, () => pump());
  await Promise.all(workers);
  return results;
}

// ---------- per-day driver ----------

async function processDate(dateLabel, targets, runOpts) {
  const win = windowFor(dateLabel);

  const results = await runWithConcurrency(targets, REPO_CONCURRENCY, (t) =>
    processTargetBounded(t, win, runOpts)
  );

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
      console.error(`    ✗ ${target.full_name}: ${message}`);
    }
  });

  const digestDir = resolvePath(ROOT, "digests", dateLabel);
  await mkdir(digestDir, { recursive: true });

  const indexMd = renderIndex({
    date: dateLabel,
    sinceIso: win.sinceIso,
    untilIso: win.untilIso,
    entries,
    errorCount: errors.length,
  });
  await writeFile(resolvePath(digestDir, "INDEX.md"), indexMd + "\n");

  if (errors.length > 0) {
    const errMd = renderErrorsFile({ date: dateLabel, errors });
    await writeFile(resolvePath(digestDir, "_errors.md"), errMd + "\n");
  }

  const okCount = entries.filter((e) => e.ok).length;
  const summarisedCount = entries.filter((e) => e.summarised).length;
  return { okCount, total: targets.length, errors: errors.length, summarisedCount };
}

// ---------- git helpers ----------

function git(args) {
  const r = spawnSync("git", args, { cwd: ROOT, encoding: "utf8" });
  if (r.status !== 0) {
    throw new Error(`git ${args.join(" ")} failed: ${r.stderr.trim()}`);
  }
  return r.stdout;
}

function commitDay(dateLabel, repoCount) {
  // cache/ is gitignored; only stage digests/.
  git(["add", `digests/${dateLabel}`]);
  // Allow the commit only if there's something staged
  const status = git(["status", "--porcelain"]);
  if (!status.trim()) return false;
  git(["commit", "-m", `digest: ${dateLabel} (${repoCount} repos)`]);
  return true;
}

function gitPush() {
  const r = spawnSync("git", ["push"], { cwd: ROOT, encoding: "utf8", stdio: "inherit" });
  if (r.status !== 0) throw new Error(`git push failed (status ${r.status})`);
}

// ---------- main ----------

async function main() {
  const args = parseArgs(process.argv);
  const dates = dateRange(args.start, args.end);

  const manifestPath = resolvePath(ROOT, "targets.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const targets = manifest.targets;

  let llmCli = null;
  if (args.llm) {
    llmCli = await detectLlmCli();
  }

  console.log(`oss-digest backfill`);
  console.log(`  range      : ${args.start} → ${args.end}  (${dates.length} day(s))`);
  console.log(`  targets    : ${targets.length} repos`);
  console.log(`  llm        : ${args.llm ? (llmCli || "off (no CLI)") : "off"}`);
  console.log(`  commit     : ${args.commit}`);
  console.log(`  push every : ${args.pushEvery} commit(s)`);
  console.log(`  api ceiling: ${API_CEILING} calls/process`);

  const runOpts = { llm: args.llm && !!llmCli, llmCli };

  let processedDays = 0;
  let skippedDays = 0;
  let commitsThisBatch = 0;
  let totalCommits = 0;
  let totalPushes = 0;
  let totalSummaries = 0;
  let totalErrors = 0;
  const startApi = getApiCallCount();

  for (const dateLabel of dates) {
    const indexPath = resolvePath(ROOT, "digests", dateLabel, "INDEX.md");
    if (await fileExists(indexPath)) {
      console.log(`[skip ] ${dateLabel} — INDEX.md already present`);
      skippedDays++;
      continue;
    }

    if (getApiCallCount() >= API_CEILING) {
      console.error(`[stop ] API ceiling reached (${getApiCallCount()}/${API_CEILING}). Stopping at ${dateLabel}.`);
      break;
    }

    const t0 = Date.now();
    let summary;
    try {
      summary = await processDate(dateLabel, targets, runOpts);
    } catch (err) {
      console.error(`[FAIL] ${dateLabel}: ${err.message}`);
      continue;
    }
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    console.log(`[done ] ${dateLabel}  ok=${summary.okCount}/${summary.total}  llm=${summary.summarisedCount}  err=${summary.errors}  ${elapsed}s  api=${getApiCallCount()}`);
    processedDays++;
    totalSummaries += summary.summarisedCount;
    totalErrors += summary.errors;

    if (args.commit) {
      try {
        const committed = commitDay(dateLabel, summary.okCount);
        if (committed) {
          commitsThisBatch++;
          totalCommits++;
        }
      } catch (e) {
        console.error(`[git  ] commit failed for ${dateLabel}: ${e.message}`);
      }

      if (commitsThisBatch >= args.pushEvery) {
        try {
          console.log(`[push ] pushing ${commitsThisBatch} commit(s)...`);
          gitPush();
          totalPushes++;
          commitsThisBatch = 0;
        } catch (e) {
          console.error(`[git  ] push failed: ${e.message}`);
          // keep going — next push attempt will catch up
        }
      }
    }
  }

  // Final push for any remaining commits
  if (args.commit && commitsThisBatch > 0) {
    try {
      console.log(`[push ] final push of ${commitsThisBatch} commit(s)...`);
      gitPush();
      totalPushes++;
    } catch (e) {
      console.error(`[git  ] final push failed: ${e.message}`);
    }
  }

  console.log(`\nbackfill complete:`);
  console.log(`  processed days : ${processedDays}`);
  console.log(`  skipped days   : ${skippedDays}`);
  console.log(`  llm summaries  : ${totalSummaries}`);
  console.log(`  errors         : ${totalErrors}`);
  console.log(`  commits        : ${totalCommits}`);
  console.log(`  pushes         : ${totalPushes}`);
  console.log(`  api calls      : ${getApiCallCount() - startApi}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
