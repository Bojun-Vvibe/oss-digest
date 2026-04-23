// scripts/lib/gh.mjs
// Thin wrapper around `gh api`. Read-only. JSON in, JSON out.
//
// Why shell out to `gh` instead of using @octokit?
//   - zero npm deps
//   - reuses the user's existing auth (`gh auth status`)
//   - paginate handled by `gh api --paginate`

import { spawn } from "node:child_process";

/**
 * Run `gh api <path>` and return parsed JSON.
 *
 * @param {string} path  e.g. "/repos/anomalyco/opencode/pulls?state=all&per_page=100"
 * @param {object} [opts]
 * @param {boolean} [opts.paginate=false]  use `--paginate` (concatenates pages into one JSON array)
 * @returns {Promise<any>}
 */
export async function ghApi(path, opts = {}) {
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
