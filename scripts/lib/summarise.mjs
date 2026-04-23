// scripts/lib/summarise.mjs
//
// LLM summary integration for oss-digest v0.2.
//
// Detects whichever of `claude` or `codex` is installed locally and shells out
// to it in non-interactive mode. Both CLIs in Bojun's environment route to
// LiteLLM/Hermes; pew tracks usage automatically.
//
// Public API:
//   await summarise(rawJson, opts) -> string
//
// Contract:
//   - Returns markdown body only (no preamble, no header).
//   - Returns "" (empty string) if no CLI is available, or if the call fails,
//     or if the input is "empty" (no activity in window). Caller decides
//     whether to render the section.
//   - Never throws to the caller. Failures are logged to stderr.

import { spawn } from "node:child_process";
import { promisify } from "node:util";
import { execFile } from "node:child_process";

const execFileP = promisify(execFile);

const PROMPT_TEMPLATE = (repo) =>
  `You are summarising one day of activity in the OSS repo ${repo}. ` +
  `Given the raw JSON of releases / merged PRs / new open PRs / notable issues / commits in the last 24h, ` +
  `produce a 200–400 word summary in markdown that a reader can use to decide what to read in detail. ` +
  `Lead with the most important thing. Use bullet points sparingly. Cite PR/issue/commit numbers inline. ` +
  `Do not invent. Output: just the markdown body, no preamble.`;

const WEEKLY_PROMPT = (week, repos) =>
  `You are writing the weekly cross-repo trend summary for the AI-native developer tooling OSS ecosystem ` +
  `for ISO week ${week}. The input is a JSON object keyed by repo full name (${repos.join(", ")}); ` +
  `each value contains the aggregated releases / merged PRs / new open PRs / notable issues / commits ` +
  `for that repo over the 7-day window. Write ~600 words of markdown describing what happened in AI ` +
  `coding agent OSS this week. Lead with the single biggest story. Group related themes across repos ` +
  `(e.g. "MCP server churn", "model routing changes", "TUI polish"). Cite specific PR/release/issue ` +
  `numbers inline as [owner/repo#NNN]. Do not invent. End with a 3-bullet "what to actually read" list. ` +
  `Output: just the markdown body, no preamble, no top-level header.`;

let _detectedCache = null;

/** Detect once which CLI is on PATH. Returns "claude" | "codex" | null. */
export async function detectLlmCli() {
  if (_detectedCache !== null) return _detectedCache;
  for (const name of ["claude", "codex"]) {
    try {
      await execFileP("which", [name]);
      _detectedCache = name;
      return name;
    } catch {
      // not found, try next
    }
  }
  _detectedCache = "";
  return null;
}

/**
 * Run the LLM CLI with the given prompt and JSON-as-stdin.
 * Returns trimmed stdout, or "" on failure.
 */
async function runLlm(cli, prompt, stdinPayload, timeoutMs) {
  let args;
  if (cli === "claude") {
    // -p / --print : non-interactive
    // --bare       : skip hooks/plugins/keychain (faster, more deterministic)
    args = ["-p", "--bare", "--append-system-prompt", prompt];
  } else if (cli === "codex") {
    // codex exec : non-interactive
    args = ["exec", "--skip-git-repo-check", prompt];
  } else {
    return "";
  }

  return new Promise((resolve) => {
    const child = spawn(cli, args, { stdio: ["pipe", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      try { child.kill("SIGTERM"); } catch {}
      setTimeout(() => { try { child.kill("SIGKILL"); } catch {} }, 2000);
    }, timeoutMs);

    child.stdout.on("data", (d) => (stdout += d.toString()));
    child.stderr.on("data", (d) => (stderr += d.toString()));
    child.on("error", (err) => {
      clearTimeout(timer);
      console.error(`[summarise] ${cli} spawn error: ${err.message}`);
      resolve("");
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (timedOut) {
        console.error(`[summarise] ${cli} timed out after ${timeoutMs}ms`);
        return resolve("");
      }
      if (code !== 0) {
        const tail = stderr.trim().split("\n").slice(-3).join(" | ");
        console.error(`[summarise] ${cli} exited ${code}: ${tail}`);
        return resolve("");
      }
      resolve(stdout.trim());
    });

    // Send JSON on stdin
    try {
      child.stdin.write(stdinPayload);
      child.stdin.end();
    } catch (e) {
      console.error(`[summarise] stdin write failed: ${e.message}`);
    }
  });
}

/**
 * Summarise one day of one repo.
 *
 * @param {object} rawJson  sanitised raw object (the value written to cache/.../raw.json)
 * @param {object} [opts]
 * @param {string} [opts.cli]            force "claude" | "codex" (else autodetect)
 * @param {number} [opts.timeoutMs=120000]
 * @returns {Promise<string>} markdown body, or "" on failure / no CLI / empty input
 */
export async function summarise(rawJson, opts = {}) {
  const cli = opts.cli ?? (await detectLlmCli());
  if (!cli) return "";

  // Skip empty windows — no point burning a call.
  const r = rawJson || {};
  const total =
    (r.releases?.length || 0) +
    (r.pulls?.length || 0) +
    (r.issues?.length || 0) +
    (r.commits?.length || 0);
  if (total === 0) return "";

  const repo = rawJson.repo || "(unknown)";
  const prompt = PROMPT_TEMPLATE(repo);
  const payload = JSON.stringify(rawJson);
  const out = await runLlm(cli, prompt, payload, opts.timeoutMs ?? 120000);
  return out;
}

/**
 * Cross-repo weekly summary.
 *
 * @param {string} week           ISO week label, e.g. "2026-W17"
 * @param {object} aggregatedJson { "owner/repo": <sanitised aggregate>, ... }
 * @param {object} [opts]
 * @returns {Promise<string>}
 */
export async function summariseWeekly(week, aggregatedJson, opts = {}) {
  const cli = opts.cli ?? (await detectLlmCli());
  if (!cli) return "";

  const repos = Object.keys(aggregatedJson || {});
  if (repos.length === 0) return "";

  // Trim per-repo to keep the prompt under the model's reasonable budget.
  // A full week of 8 high-velocity repos can exceed 1MB of raw JSON, which
  // both inflates cost and risks tripping stdin / context limits.
  const TRIM = opts.trim ?? {
    pulls: 40, issues: 30, releases: 20, commits: 40,
  };
  const trimmed = {};
  for (const [repo, raw] of Object.entries(aggregatedJson)) {
    const merged = (raw.pulls || []).filter((p) => p.merged_at);
    const open = (raw.pulls || []).filter((p) => !p.merged_at);
    // Keep most recent merged + most recent open, capped at TRIM.pulls total
    const halfM = Math.min(merged.length, Math.ceil(TRIM.pulls / 2));
    const halfO = Math.min(open.length, TRIM.pulls - halfM);
    const pulls = [...merged.slice(0, halfM), ...open.slice(0, halfO)];
    trimmed[repo] = {
      repo,
      counts: {
        pulls_total: raw.pulls?.length || 0,
        pulls_merged: merged.length,
        pulls_open: open.length,
        issues_total: raw.issues?.length || 0,
        releases_total: raw.releases?.length || 0,
        commits_total: raw.commits?.length || 0,
      },
      releases: (raw.releases || []).slice(0, TRIM.releases).map((r) => ({
        tag_name: r.tag_name, name: r.name, html_url: r.html_url,
        prerelease: r.prerelease, draft: r.draft,
        published_at: r.published_at, body: (r.body || "").slice(0, 300),
      })),
      pulls: pulls.map((p) => ({
        number: p.number, title: p.title, user: p.user, html_url: p.html_url,
        merged_at: p.merged_at, state: p.state, labels: p.labels,
      })),
      issues: (raw.issues || []).slice(0, TRIM.issues).map((i) => ({
        number: i.number, title: i.title, user: i.user, html_url: i.html_url,
        state: i.state, labels: i.labels,
      })),
      commits: (raw.commits || []).slice(0, TRIM.commits).map((c) => ({
        short_sha: c.short_sha, html_url: c.html_url, user: c.user,
        message: (c.message || "").split("\n")[0],
      })),
    };
  }

  const prompt = WEEKLY_PROMPT(week, repos);
  const payload = JSON.stringify({ week, repos: trimmed });
  const out = await runLlm(cli, prompt, payload, opts.timeoutMs ?? 240000);
  return out;
}
