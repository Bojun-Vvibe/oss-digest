#!/usr/bin/env node
// scripts/weekly.mjs
//
// Cross-repo weekly digest. For an ISO week (e.g. 2026-W17), aggregates 7 days
// of activity across all targets and asks the LLM for a ~600-word trend write-up.
//
// Usage:
//   node scripts/weekly.mjs --week 2026-W17
//   node scripts/weekly.mjs --week 2026-W17 --no-llm
//   node scripts/weekly.mjs --week 2026-W17 --no-commit
//
// Output: digests/_weekly/<week>.md
// Commit: "weekly: <week> cross-repo trends"

import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import { dirname, resolve as resolvePath } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

import {
  fetchIssuesBounded, fetchPullsBounded, fetchReleasesBounded, fetchCommits,
  getApiCallCount,
} from "./lib/gh.mjs";
import {
  sanitiseIssue, sanitisePull, sanitiseRelease, sanitiseCommit, repoFlat,
} from "./lib/render.mjs";
import { summariseWeekly, detectLlmCli } from "./lib/summarise.mjs";

const __filename = fileURLToPath(import.meta.url);
const ROOT = resolvePath(dirname(__filename), "..");

const REPO_CONCURRENCY = 5;

// ---------- arg parsing ----------

function parseArgs(argv) {
  const args = { week: null, llm: true, commit: true };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--week") args.week = argv[++i];
    else if (a === "--no-llm") args.llm = false;
    else if (a === "--llm") args.llm = true;
    else if (a === "--no-commit") args.commit = false;
    else if (a === "--help" || a === "-h") {
      console.log(`Usage: weekly.mjs --week YYYY-Www [--no-llm] [--no-commit]`);
      process.exit(0);
    } else {
      console.error(`Unknown arg: ${a}`);
      process.exit(2);
    }
  }
  if (!args.week) {
    console.error("--week is required (e.g. 2026-W17)");
    process.exit(2);
  }
  if (!/^\d{4}-W\d{2}$/.test(args.week)) {
    console.error(`--week must look like YYYY-Www (got ${args.week})`);
    process.exit(2);
  }
  return args;
}

// ---------- ISO week → date window ----------

function isoWeekWindow(weekStr) {
  const [yearStr, wPart] = weekStr.split("-W");
  const year = Number(yearStr);
  const week = Number(wPart);
  // Jan 4 is always in ISO week 1.
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const dayOfWeek = jan4.getUTCDay() || 7; // Sun=0 → 7
  const week1Mon = new Date(jan4.getTime() - (dayOfWeek - 1) * 86400000);
  const monday = new Date(week1Mon.getTime() + (week - 1) * 7 * 86400000);
  const sunday = new Date(monday.getTime() + 7 * 86400000 - 1000); // Sun 23:59:59
  return { sinceIso: monday.toISOString(), untilIso: sunday.toISOString(), week: weekStr };
}

// ---------- per-target aggregation ----------

async function aggregateTarget(target, win) {
  const { full_name, default_branch } = target;
  const branch = default_branch || "main";

  const [issuesRaw, pullsRaw, releasesRaw, commitsRaw] = await Promise.all([
    fetchIssuesBounded(full_name, win.sinceIso, win.untilIso),
    fetchPullsBounded(full_name, win.sinceIso, win.untilIso),
    fetchReleasesBounded(full_name, win.sinceIso, win.untilIso),
    fetchCommits(full_name, branch, win.sinceIso, win.untilIso),
  ]);

  return {
    repo: full_name,
    default_branch: branch,
    window: { since: win.sinceIso, until: win.untilIso },
    issues: issuesRaw.map(sanitiseIssue),
    pulls: pullsRaw.map(sanitisePull),
    releases: releasesRaw.map(sanitiseRelease),
    commits: commitsRaw.map(sanitiseCommit),
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

// ---------- render ----------

function renderWeekly({ week, sinceIso, untilIso, perRepo, summary }) {
  const lines = [];
  lines.push(`# Weekly cross-repo digest — ${week}`);
  lines.push("");
  lines.push(`**Window:** ${sinceIso} → ${untilIso}  `);
  lines.push(`**Repos covered:** ${Object.keys(perRepo).length}`);
  lines.push("");

  if (summary && summary.trim()) {
    lines.push("## Trend summary");
    lines.push("");
    lines.push("> _LLM-generated cross-repo synthesis. May contain errors — click through before acting._");
    lines.push("");
    lines.push(summary.trim());
    lines.push("");
  } else {
    lines.push("> _No LLM summary for this week (CLI unavailable or call failed)._");
    lines.push("");
  }

  lines.push("## Activity table");
  lines.push("");
  lines.push("| Repo | Releases | Merged PRs | New open PRs | Issues touched | Commits |");
  lines.push("| ---- | -------- | ---------- | ------------ | -------------- | ------- |");

  for (const [repo, raw] of Object.entries(perRepo)) {
    const merged = raw.pulls.filter((p) => p.merged_at).length;
    const open = raw.pulls.filter((p) => !p.merged_at && p.state === "open").length;
    lines.push(
      `| [${repo}](https://github.com/${repo}) | ${raw.releases.length} | ${merged} | ${open} | ${raw.issues.length} | ${raw.commits.length} |`
    );
  }
  lines.push("");

  lines.push("## Releases this week");
  lines.push("");
  let anyRelease = false;
  for (const [repo, raw] of Object.entries(perRepo)) {
    for (const r of raw.releases) {
      anyRelease = true;
      const tag = r.tag_name || r.name || "(untagged)";
      const flags = [r.draft && "draft", r.prerelease && "prerelease"].filter(Boolean).join(", ");
      const flagStr = flags ? ` _(${flags})_` : "";
      lines.push(`- **${repo}** [${tag}](${r.html_url})${flagStr} — ${r.published_at ?? r.created_at}`);
    }
  }
  if (!anyRelease) lines.push("_No releases in window._");
  lines.push("");

  lines.push("---");
  lines.push(`_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 weekly._`);
  return lines.join("\n");
}

// ---------- git helpers ----------

function git(args) {
  const r = spawnSync("git", args, { cwd: ROOT, encoding: "utf8" });
  if (r.status !== 0) throw new Error(`git ${args.join(" ")} failed: ${r.stderr.trim()}`);
  return r.stdout;
}

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

// ---------- main ----------

async function main() {
  const args = parseArgs(process.argv);
  const win = isoWeekWindow(args.week);

  const manifestPath = resolvePath(ROOT, "targets.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const targets = manifest.targets;

  let llmCli = null;
  if (args.llm) {
    llmCli = await detectLlmCli();
  }

  console.log(`oss-digest weekly`);
  console.log(`  week    : ${win.week}`);
  console.log(`  window  : ${win.sinceIso} → ${win.untilIso}`);
  console.log(`  targets : ${targets.length} repos`);
  console.log(`  llm     : ${args.llm ? (llmCli || "off (no CLI)") : "off"}`);

  const startApi = getApiCallCount();
  const results = await runWithConcurrency(targets, REPO_CONCURRENCY, (t) => aggregateTarget(t, win));

  const perRepo = {};
  let errCount = 0;
  results.forEach((r, idx) => {
    const t = targets[idx];
    if (r.status === "fulfilled") {
      perRepo[t.full_name] = r.value;
    } else {
      errCount++;
      console.error(`  ✗ ${t.full_name}: ${r.reason?.message || r.reason}`);
    }
  });

  let summary = "";
  if (args.llm && llmCli && Object.keys(perRepo).length > 0) {
    try {
      summary = await summariseWeekly(win.week, perRepo, { cli: llmCli });
    } catch (e) {
      console.error(`  ! summariseWeekly threw: ${e.message}`);
    }
  }

  const md = renderWeekly({ week: win.week, sinceIso: win.sinceIso, untilIso: win.untilIso, perRepo, summary });
  const outDir = resolvePath(ROOT, "digests", "_weekly");
  await mkdir(outDir, { recursive: true });
  const outPath = resolvePath(outDir, `${win.week}.md`);
  await writeFile(outPath, md + "\n");

  const summarised = !!(summary && summary.trim());
  console.log(`  wrote   : digests/_weekly/${win.week}.md  (llm=${summarised ? "yes" : "no"}, err=${errCount}, api=${getApiCallCount() - startApi})`);

  if (args.commit) {
    git(["add", `digests/_weekly/${win.week}.md`]);
    const status = git(["status", "--porcelain"]);
    if (status.trim()) {
      git(["commit", "-m", `weekly: ${win.week} cross-repo trends`]);
      console.log(`  commit  : weekly: ${win.week} cross-repo trends`);
    } else {
      console.log(`  commit  : nothing to commit (file unchanged)`);
    }
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
