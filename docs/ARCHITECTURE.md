# Architecture

`oss-digest` is intentionally tiny: one Node script, one JSON manifest, one CLI dependency (`gh`). No clones, no databases, no servers.

## Pipeline

```
            ┌──────────────────┐
            │  launchd / cron  │   06:00 local, daily
            │  (defined off-   │
            │   repo, in       │
            │   ~/Library/...) │
            └────────┬─────────┘
                     │
                     ▼
        ┌──────────────────────────┐
        │ scripts/run-digest.mjs   │
        │   - reads targets.json   │
        │   - computes 24h window  │
        └────────┬─────────────────┘
                 │  per target, in parallel
                 ▼
        ┌──────────────────────────┐
        │   scripts/lib/gh.mjs     │
        │   wraps `gh api` calls:  │
        │     • issues  (24h)      │
        │     • pulls   (24h)      │
        │     • releases(24h)      │
        │     • commits (24h, def) │
        └────────┬─────────────────┘
                 │
                 ▼
        ┌──────────────────────────┐
        │  cache/YYYY-MM-DD/       │
        │    <owner>/<repo>/       │
        │      raw.json            │  ← sanitised slice only
        └────────┬─────────────────┘
                 │
                 ▼
        ┌──────────────────────────┐
        │  scripts/lib/render.mjs  │
        │  deterministic template  │
        │  (v0.1)                  │
        │                          │
        │  [v0.2 hook]             │
        │  async summarise(raw)    │
        │  → string (LLM call)     │
        └────────┬─────────────────┘
                 │
                 ▼
        ┌──────────────────────────┐
        │  digests/YYYY-MM-DD/     │
        │    <owner>-<repo>.md     │
        │    INDEX.md              │
        │    _errors.md (if any)   │
        └────────┬─────────────────┘
                 │
                 ▼
        ┌──────────────────────────┐
        │  separate launchd job    │
        │  git add / commit / push │
        │  (NOT this repo's job)   │
        └──────────────────────────┘
```

## Why a deterministic template in v0.1?

So we can ship and start *committing* digests immediately, without waiting on the LLM stack. The template is intentionally boring — it lists what happened, with links. Once `summarise(rawJson)` is wired up in v0.2, it slots in *above* the deterministic sections; the deterministic content stays as a fallback / source-of-truth pane.

## Hand-off interface for v0.2

```js
// scripts/lib/summarise.mjs   (does not exist yet)
/**
 * @param {object} rawJson  the sanitised cache payload for one repo, one day
 * @returns {Promise<string>}  a 3–6 sentence prose summary in markdown, no headings
 */
export async function summarise(rawJson) { /* TODO v0.2 */ }
```

The renderer will inject the result above the `## Releases` section under a `## TL;DR` header. If it throws or returns empty, we silently skip and keep the deterministic body.

## Failure model

- One repo failing → its error is appended to `digests/YYYY-MM-DD/_errors.md`; the rest of the run continues.
- Whole run failing (no Node, no `gh`, no network) → the launchd commit job sees no new files and is a no-op. Nothing destructive.
- Rate limits → `gh` already handles auth; if we hit secondary limits we log the error and move on. Backoff/retry is out of scope for v0.1.
