# Changelog

All notable changes to `oss-digest` are documented here. Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); we use semver for the *tooling*, not for the digest content itself.

## 0.1.0 — 2026-04-23 — Initial release; deterministic templates; 8 seed repos.

- Seed manifest of 8 tracked repos in `targets.json` (terminal coding agents, MCP, LLM gateways).
- `scripts/run-digest.mjs` fetches issues / PRs / releases / commits for the last 24h via `gh api`.
- Per-repo deterministic markdown template (no LLM yet) under `digests/YYYY-MM-DD/<repo-flat>.md`.
- Daily `INDEX.md` with one-line stats per repo.
- Sanitised raw cache under `cache/YYYY-MM-DD/<repo>/raw.json`.
- Failed targets logged to `digests/YYYY-MM-DD/_errors.md`; one repo failing does not abort the run.
- CLI flags: `--dry`, `--repo <full_name>`, `--date YYYY-MM-DD`.
