# oss-digest

> Daily AI-generated digests of fast-moving public OSS repos in the AI-native dev tooling ecosystem. Read 8 repos in 5 minutes.

`oss-digest` watches a curated set of public GitHub repositories — terminal coding agents, the Model Context Protocol ecosystem, and LLM gateways — and emits one short markdown digest per repo per day, plus a daily index and a weekly cross-repo trend write-up. The goal is to stay current on the AI-native developer tooling space without scrolling 8 separate "Releases" tabs every morning.

## Reading order

If you only have 5 minutes, read in this order:

1. **Latest weekly digest** — [`digests/_weekly/`](./digests/_weekly/) — cross-repo trends synthesized by an LLM.
2. **Today's daily INDEX** — [`digests/<latest>/INDEX.md`](./digests/) — one-line stats per repo + table.
3. **Per-repo dailies** — only click into the ones the index flags as interesting.

## How it works

```
06:00 local (cron / launchd)
        │
        ▼
  scripts/run-digest.mjs
        │
        ▼
   gh api  (read-only metadata: PRs, issues, releases, commits over the last 24h)
        │
        ▼
   cache/YYYY-MM-DD/<repo>/raw.json   (sanitised slice of the API responses)
        │
        ▼
   [v0.2 hook] LLM summarise(rawJson)  →  for v0.1 we use a deterministic template
        │
        ▼
   digests/YYYY-MM-DD/<repo-flat>.md  +  digests/YYYY-MM-DD/INDEX.md
        │
        ▼
   (separate launchd job commits & pushes the digests/ dir)
```

We do **not** clone any tracked repo. Everything is fetched via `gh api` against the GitHub REST API.

As of **v0.2** the daily digest can also call a local LLM (`claude` or `codex`) to write a 200–400-word summary that goes above the deterministic activity tables. A weekly cross-repo trend write-up (~600 words) lands under [`digests/_weekly/`](./digests/_weekly/).

## Tracked repositories

| Repo | Why we track it |
| ---- | --------------- |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | Terminal-native AI coding agent we use daily; high-velocity OSS. |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | LLM gateway / proxy that powers most of our local agent stack. |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Reference MCP server implementations; canonical examples for the protocol. |
| [openai/codex](https://github.com/openai/codex) | OpenAI's terminal coding agent; a direct point of comparison for opencode. |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | Autonomous software engineering agent; bellwether for agentic dev tooling. |
| [cline/cline](https://github.com/cline/cline) | VS Code-native autonomous coding agent; another adjacent ecosystem signal. |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | Pioneer terminal pair-programmer; slow but high-signal when it moves. |
| [charmbracelet/crush](https://github.com/charmbracelet/crush) | Charm's terminal AI coding agent; design-forward TUI patterns worth tracking. |

The canonical manifest lives in [`targets.json`](./targets.json).

## How to subscribe

There is no email list and no separate RSS server. Pick whichever of these you prefer:

- **Star + Watch releases** on [Bojun-Vvibe/oss-digest](https://github.com/Bojun-Vvibe/oss-digest) — we tag a release when the schema or scope changes.
- **GitHub's built-in Atom feed of commits**, which fires once per daily digest commit:

  ```
  https://github.com/Bojun-Vvibe/oss-digest/commits/main.atom
  ```

  Drop that into any feed reader (NetNewsWire, Feedly, Miniflux, Reeder, etc.) and you'll get a new entry every morning.

## Why not just RSS each tracked repo directly?

Because the value here isn't the raw events — GitHub already gives you those. The value is:

1. The **AI-written summary** that turns 40 commit titles into one paragraph of "what actually changed".
2. The **cross-repo daily index** that lets you see, in one place, that `litellm` shipped a release while `opencode` merged 12 PRs while `aider` was quiet.

Subscribing to 8 separate release feeds gives you noise. This gives you signal.

## Running locally

```bash
# dry run: print the plan, write nothing
npm run digest:dry

# real run for today's window (deterministic template only)
npm run digest

# v0.2: include the LLM summary section (uses local `claude` or `codex` CLI)
node scripts/run-digest.mjs --llm

# scoped runs
node scripts/run-digest.mjs --repo anomalyco/opencode
node scripts/run-digest.mjs --date 2026-04-23
node scripts/run-digest.mjs --llm --repo anomalyco/opencode --date 2026-04-23
```

### Backfill historical digests

`scripts/backfill.mjs` regenerates digests for an arbitrary date range. It is
**resume-safe** (skips any date whose `INDEX.md` already exists), throttled
(max 5 concurrent repos), and bounded (stops at 4500 `gh api` calls per
process). It commits one commit per day (`digest: YYYY-MM-DD (N repos)`) and
pushes every N commits.

```bash
# 30-day backfill with LLM summaries, push every 10 commits
node scripts/backfill.mjs --start 2026-03-25 --end 2026-04-23

# without LLM, without committing (just write files)
node scripts/backfill.mjs --start 2026-03-25 --end 2026-04-23 --no-llm --no-commit

# adjust push cadence
node scripts/backfill.mjs --start 2026-03-25 --end 2026-04-23 --push-every 5
```

### Weekly cross-repo digest

`scripts/weekly.mjs` aggregates one ISO week across all targets and asks the
LLM for a ~600-word "what happened in AI coding agent OSS this week" summary
with inline PR/release/issue citations. Output goes to
`digests/_weekly/<YYYY-Www>.md` and is committed as
`weekly: <YYYY-Www> cross-repo trends`.

```bash
node scripts/weekly.mjs --week 2026-W17
node scripts/weekly.mjs --week 2026-W17 --no-llm --no-commit
```

Requires:
- Node >= 20
- [`gh`](https://cli.github.com/) authenticated (`gh auth status` should be green)
- Optional: `claude` or `codex` on `PATH` for LLM summaries (gracefully degrades to deterministic template if absent)

## Disclaimer

This project is **not affiliated** with any of the tracked projects or their maintainers. Summaries are generated from public GitHub metadata and may contain errors, omissions, or misinterpretations. Always click through to the linked source (PR, release, issue, commit) before acting on anything you read here.

## Stop tracking my repo

If your project is in `targets.json` and you'd like it removed, please open an issue with the title:

```
untrack: <owner>/<repo>
```

We'll remove it from the next run within 24 hours, and we won't backfill new digests for it.

## License

- **Code** (`scripts/`, `package.json`, configuration): [MIT](./LICENSE)
- **Digest content** (everything under `digests/`): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — share and adapt with attribution to `Bojun-Vvibe/oss-digest`.
