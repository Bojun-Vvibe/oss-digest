# Roadmap

## v0.1 — today (2026-04-23)

- Deterministic markdown template, no LLM in the loop.
- 8 seed repos in `targets.json`.
- Daily run via launchd/cron at 06:00 local; commit handled by a separate job.
- Per-repo digest + daily `INDEX.md`.
- Graceful per-target failure handling via `_errors.md`.

## v0.2 — LLM summary step

- Implement `scripts/lib/summarise.mjs` against the local `pew`-tracked LLM stack (LiteLLM → gpt-5 / claude-opus-4.x).
- Inject a `## TL;DR` block above the deterministic sections.
- Cache LLM responses keyed by `(date, repo, hash(rawJson))` so re-runs are free.
- Add a `--no-llm` flag for offline / cost-sensitive runs.

## v0.3 — weekly cross-repo trend digest

- New `scripts/run-weekly.mjs` that aggregates the last 7 daily digests.
- Output: `digests/YYYY-WW/WEEKLY.md` with cross-repo themes ("MCP servers ecosystem grew by N", "litellm shipped 3 releases", etc.).
- Optional: a small chart per repo (PRs merged, releases) rendered as an inline SVG.

## v0.4 — subscribe-by-email via static site

- Static site generated from `digests/` (probably Astro or 11ty).
- One-click email subscription via Buttondown or Listmonk; send the daily INDEX as the email body.
- RSS/Atom feed served from the static site (in addition to the existing GitHub commits Atom).
- Per-repo unsubscribe still routes through "open an issue titled `untrack: <repo>`".
