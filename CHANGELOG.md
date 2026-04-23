# Changelog

All notable changes to `oss-digest` are documented here. Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); we use semver for the *tooling*, not for the digest content itself.

## 0.2.0 — 2026-04-23 — LLM summaries, 30-day backfill, weekly cross-repo digest.

### Added
- `scripts/lib/summarise.mjs` — detects whichever of `claude` or `codex` is on
  `PATH` and shells out non-interactively (`claude -p --bare` or
  `codex exec --skip-git-repo-check`). Returns markdown body or `""` on
  failure / no CLI / empty window. Never throws.
- `--llm` flag on `scripts/run-digest.mjs`. Adds a `## Daily summary` section
  (200–400 words, LLM-generated) ABOVE `## Releases`. v0.1 default (no flag)
  still works unchanged.
- `scripts/backfill.mjs` — historical backfill driver.
  - Resume-safe: skips dates whose `INDEX.md` already exists.
  - Throttled to 5 concurrent repos within a date.
  - Bounded by 4500 `gh api` calls per process.
  - One commit per day (`digest: YYYY-MM-DD (N repos)`); pushes every N commits.
- `scripts/weekly.mjs` — cross-repo weekly digest.
  - 7-day window, all 8 targets in parallel.
  - LLM-generated `## Trend summary` (~600 words) with inline PR/release/issue
    citations as `[owner/repo#NNN]`.
  - Per-repo activity table + releases list rendered deterministically.
  - Output: `digests/_weekly/<YYYY-Www>.md`. Commit: `weekly: <YYYY-Www> cross-repo trends`.
- `scripts/lib/gh.mjs`:
  - Process-wide API call counter (`getApiCallCount` / `resetApiCallCount`).
  - Bounded variants `fetchPullsBounded` / `fetchIssuesBounded` /
    `fetchReleasesBounded` that filter by `[since, until]` for historical day
    reconstruction.

### Backfilled
- Daily digests for **2026-03-25 → 2026-04-23** (30 days × 8 repos = 240
  per-repo files + 30 daily indices, all with LLM summaries where activity
  was non-empty).
- Weekly digests for **2026-W14 → 2026-W17** (the 4 most recent ISO weeks).

### Known limitations
- Weekly LLM payload is trimmed to top 40 PRs / 30 issues / 20 releases / 40
  commits per repo. A full week of 8 high-velocity repos exceeds 1MB of raw
  JSON and OOMs the prompt; counts are preserved so the model still knows
  the volume.
- `fetchIssuesBounded` may under-count issues whose most recent `updated_at`
  has rolled forward past the window; the deterministic counts in the daily
  digests remain correct because each day was rendered close to real-time.

## 0.1.0 — 2026-04-23 — Initial release; deterministic templates; 8 seed repos.

- Seed manifest of 8 tracked repos in `targets.json` (terminal coding agents, MCP, LLM gateways).
- `scripts/run-digest.mjs` fetches issues / PRs / releases / commits for the last 24h via `gh api`.
- Per-repo deterministic markdown template (no LLM yet) under `digests/YYYY-MM-DD/<repo-flat>.md`.
- Daily `INDEX.md` with one-line stats per repo.
- Sanitised raw cache under `cache/YYYY-MM-DD/<repo>/raw.json`.
- Failed targets logged to `digests/YYYY-MM-DD/_errors.md`; one repo failing does not abort the run.
- CLI flags: `--dry`, `--repo <full_name>`, `--date YYYY-MM-DD`.
