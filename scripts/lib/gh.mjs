// scripts/lib/gh.mjs
// Thin wrapper around `gh api`. Read-only. JSON in, JSON out.
//
// Why shell out to `gh` instead of using @octokit?
//   - zero npm deps
//   - reuses the user's existing auth (`gh auth status`)
//   - paginate handled by `gh api --paginate`

import { spawn } from "node:child_process";

// ---------- API call counter (process-wide) ----------
// Tracked so backfill / weekly drivers can stop before tripping the 5000/hr
// REST rate limit. Anyone can read/reset via the exports below.

let _apiCallCount = 0;
export function getApiCallCount() { return _apiCallCount; }
export function resetApiCallCount() { _apiCallCount = 0; }

/**
 * Run `gh api <path>` and return parsed JSON.
 *
 * @param {string} path  e.g. "/repos/anomalyco/opencode/pulls?state=all&per_page=100"
 * @param {object} [opts]
 * @param {boolean} [opts.paginate=false]  use `--paginate` (concatenates pages into one JSON array)
 * @returns {Promise<any>}
 */
export async function ghApi(path, opts = {}) {
  _apiCallCount += 1;
  const args = ["api", "-H", "Accept: application/vnd.github+json"];
  if (opts.paginate) args.push("--paginate");
  args.push(path);

  return new Promise((resolve, reject) => {
    const child = spawn("gh", args, { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => (stdout += d.toString()));
    child.stderr.on("data", (d) => (stderr += d.toString()));
    child.on("error", (err) => reject(new Error(`gh spawn failed: ${err.message}`)));
    child.on("close", (code) => {
      if (code !== 0) {
        const trimmed = stderr.trim().split("\n").slice(0, 5).join(" | ");
        return reject(new Error(`gh api ${path} exited ${code}: ${trimmed}`));
      }
      try {
        // `gh api --paginate` concatenates JSON arrays as `][` between pages — handle that.
        if (opts.paginate && stdout.includes("][")) {
          const merged = "[" + stdout.replace(/\]\s*\[/g, ",") + "]";
          // The above wraps everything in a fresh outer [...] which we don't want; strip:
          const reparsed = JSON.parse(merged.slice(1, -1).trim().startsWith("[")
            ? merged.slice(1, -1)
            : merged);
          resolve(reparsed);
          return;
        }
        resolve(JSON.parse(stdout));
      } catch (e) {
        reject(new Error(`gh api ${path} returned non-JSON: ${e.message}`));
      }
    });
  });
}

/**
 * Fetch issues (NOT PRs) updated in the window. GitHub's "issues" endpoint
 * returns PRs too, so we filter them out client-side.
 */
export async function fetchIssues(fullName, sinceIso) {
  const path = `/repos/${fullName}/issues?since=${encodeURIComponent(sinceIso)}&state=all&per_page=100&sort=updated&direction=desc`;
  const data = await ghApi(path);
  return (Array.isArray(data) ? data : []).filter((i) => !i.pull_request);
}

/**
 * Fetch PRs updated in the window. The pulls endpoint doesn't support `since`,
 * so we pull the most recent page sorted by updated and filter client-side.
 */
export async function fetchPulls(fullName, sinceIso) {
  const path = `/repos/${fullName}/pulls?state=all&per_page=100&sort=updated&direction=desc`;
  const data = await ghApi(path);
  const since = new Date(sinceIso).getTime();
  return (Array.isArray(data) ? data : []).filter((p) => {
    const t = new Date(p.updated_at).getTime();
    return t >= since;
  });
}

/**
 * Fetch releases published in the window.
 */
export async function fetchReleases(fullName, sinceIso) {
  const path = `/repos/${fullName}/releases?per_page=30`;
  const data = await ghApi(path);
  const since = new Date(sinceIso).getTime();
  return (Array.isArray(data) ? data : []).filter((r) => {
    const ts = r.published_at || r.created_at;
    return ts && new Date(ts).getTime() >= since;
  });
}

/**
 * Fetch commits on the default branch within the window.
 */
export async function fetchCommits(fullName, branch, sinceIso, untilIso) {
  const params = new URLSearchParams({
    sha: branch,
    since: sinceIso,
    until: untilIso,
    per_page: "100",
  });
  const path = `/repos/${fullName}/commits?${params.toString()}`;
  const data = await ghApi(path);
  return Array.isArray(data) ? data : [];
}

// ---------- bounded variants (used by backfill / weekly) ----------
//
// The pulls / issues / releases endpoints don't all natively accept `until`.
// For historical windows we just fetch and filter client-side using updated_at
// (PRs/issues) or published_at (releases). Pagination is bounded — for any
// single 24h window the volume is well under one page for the repos we track.

/** Issues updated strictly within [sinceIso, untilIso]. Excludes PRs. */
export async function fetchIssuesBounded(fullName, sinceIso, untilIso) {
  const path = `/repos/${fullName}/issues?since=${encodeURIComponent(sinceIso)}&state=all&per_page=100&sort=updated&direction=desc`;
  const data = await ghApi(path);
  const since = new Date(sinceIso).getTime();
  const until = new Date(untilIso).getTime();
  return (Array.isArray(data) ? data : []).filter((i) => {
    if (i.pull_request) return false;
    const t = new Date(i.updated_at).getTime();
    return t >= since && t <= until;
  });
}

/** PRs updated strictly within [sinceIso, untilIso]. */
export async function fetchPullsBounded(fullName, sinceIso, untilIso) {
  // The pulls endpoint sorts by updated desc; we walk pages until older than `since`.
  const since = new Date(sinceIso).getTime();
  const until = new Date(untilIso).getTime();
  const out = [];
  for (let page = 1; page <= 5; page++) {
    const path = `/repos/${fullName}/pulls?state=all&per_page=100&sort=updated&direction=desc&page=${page}`;
    const data = await ghApi(path);
    const arr = Array.isArray(data) ? data : [];
    if (arr.length === 0) break;
    let sawOlder = false;
    for (const p of arr) {
      const t = new Date(p.updated_at).getTime();
      if (t < since) { sawOlder = true; continue; }
      if (t > until) continue; // future of window
      out.push(p);
    }
    if (sawOlder) break; // we've walked past the window
    if (arr.length < 100) break;
  }
  return out;
}

/** Releases published strictly within [sinceIso, untilIso]. */
export async function fetchReleasesBounded(fullName, sinceIso, untilIso) {
  const path = `/repos/${fullName}/releases?per_page=30`;
  const data = await ghApi(path);
  const since = new Date(sinceIso).getTime();
  const until = new Date(untilIso).getTime();
  return (Array.isArray(data) ? data : []).filter((r) => {
    const ts = r.published_at || r.created_at;
    if (!ts) return false;
    const t = new Date(ts).getTime();
    return t >= since && t <= until;
  });
}
