# oss-digest

> Daily AI-generated digests of fast-moving public OSS repos in the AI-native dev tooling ecosystem. Read 8 repos in 5 minutes.

`oss-digest` watches a curated set of public GitHub repositories — terminal coding agents, the Model Context Protocol ecosystem, and LLM gateways — and emits one short markdown digest per repo per day, plus a daily index. The goal is to stay current on the AI-native developer tooling space without scrolling 8 separate "Releases" tabs every morning.

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

# real run for today's window
npm run digest

# scoped runs
node scripts/run-digest.mjs --repo anomalyco/opencode
node scripts/run-digest.mjs --date 2026-04-23
```

Requires:
- Node >= 20
- [`gh`](https://cli.github.com/) authenticated (`gh auth status` should be green)

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
