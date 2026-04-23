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

  const prompt = WEEKLY_PROMPT(week, repos);
  const payload = JSON.stringify({ week, repos: aggregatedJson });
  const out = await runLlm(cli, prompt, payload, opts.timeoutMs ?? 180000);
  return out;
}
