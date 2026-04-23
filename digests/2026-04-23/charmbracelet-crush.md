# charmbracelet/crush — 2026-04-23

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-04-22T08:51:15.545Z → 2026-04-23T08:51:15.545Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

> _v0.1: deterministic template, no LLM summary yet (see `docs/ROADMAP.md`)._

## Releases

- **[v0.62.0](https://github.com/charmbracelet/crush/releases/tag/v0.62.0)** — v0.62.0 _by @github-actions[bot] at 2026-04-22T21:08:45Z_
  > # Crushing the system prompt and more
  > 
  > Hi! The big star of this release is a massively reduced system prompt. Read on for more!
  > 
  > ## Tool descriptions, now with 98% fewer tokens
  > 
  > You read that right. We made changes to our system prompt to vastly reduce how many tokens they use by default. On average, this should save around 120k tokens per session. This was announced on [v0.57.0](https://github.com/charmbracelet/crush/releases/tag/v0.57.0) as a preview feature, and now we're making it the defaul…
- **[nightly](https://github.com/charmbracelet/crush/releases/tag/nightly)** _(prerelease)_ —  _by @github-actions[bot] at 2026-04-23T01:01:55Z_
  > ---
  > 
  > <details>
  > <summary>Verifying the artifacts</summary>
  > 
  > First, download the [`checksums.txt` file](https://github.com/charmbracelet/crush/releases/download//checksums.txt) and the [`checksums.txt.sigstore.json` file](https://github.com/charmbracelet/crush/releases/download//checksums.txt.sigstore.json) files, for example, with `wget`:
  > 
  > ```bash
  > wget 'https://github.com/charmbracelet/crush/releases/download//checksums.txt'
  > wget 'https://github.com/charmbracelet/crush/releases/download//checksum…


## Merged PRs

- [#2680](https://github.com/charmbracelet/crush/pull/2680) **chore: update catwalk to new domain** — _by @andreynering, merged 2026-04-22T19:08:23Z_
- [#2679](https://github.com/charmbracelet/crush/pull/2679) **fix: reduce token usage, use short tool descriptions by default** — _by @andreynering, merged 2026-04-22T13:33:04Z_
- [#2671](https://github.com/charmbracelet/crush/pull/2671) **fix: reduce `fetch` and `view` tools truncation size to 100KB** — _by @andreynering, merged 2026-04-22T13:32:49Z_
- [#2619](https://github.com/charmbracelet/crush/pull/2619) **fix(lsp): mitigate stale diagnostics** — _by @meowgorithm, merged 2026-04-21T21:34:20Z_
- [#2583](https://github.com/charmbracelet/crush/pull/2583) **feat(config): support `HYPER_API_KEY` for hyper auth** — _by @andreynering, merged 2026-04-09T17:59:42Z_
- [#2637](https://github.com/charmbracelet/crush/pull/2637) **ci: only run `build` and `lint` workflows once in pull requests** — _by @andreynering, merged 2026-04-16T21:07:06Z_


## Open PRs (new or updated)

- [#2681](https://github.com/charmbracelet/crush/pull/2681) **fix(agent): retry title generation with large model on empty output** — _by @iuga, updated 2026-04-22T18:33:39Z_
- [#2598](https://github.com/charmbracelet/crush/pull/2598) _(draft)_ **feat: PreToolUse hook** — _by @meowgorithm, updated 2026-04-22T15:04:02Z_
- [#2652](https://github.com/charmbracelet/crush/pull/2652) **fix(grep): stop regex fallback after cancellation** — _by @lawrence3699, updated 2026-04-22T14:25:23Z_
- [#2590](https://github.com/charmbracelet/crush/pull/2590) **feat(notification): notify using osc sequences for ssh terminal** — _by @nghiant03, updated 2026-04-22T12:42:13Z_
- [#1669](https://github.com/charmbracelet/crush/pull/1669) **feat(config): load user-level context files** — _by @Amolith, updated 2026-04-22T11:47:35Z_
- [#2609](https://github.com/charmbracelet/crush/pull/2609) **feat(session): add `session export` command for markdown/JSON export** — _by @KeWang0622, updated 2026-04-22T11:30:33Z_
- [#2116](https://github.com/charmbracelet/crush/pull/2116) **fix(config): set Z.AI Coding Plan costs to zero** — _by @huaiyuWangh, updated 2026-04-22T11:29:19Z_
- [#2675](https://github.com/charmbracelet/crush/pull/2675) **Fix command aliases/args parsing and empty tool-call input normalization** — _by @axeprpr, updated 2026-04-22T11:27:59Z_
- [#2674](https://github.com/charmbracelet/crush/pull/2674) **config: support APIURL/APIKEY env overrides with CRUSH_PROVIDER targeting** — _by @axeprpr, updated 2026-04-22T10:56:18Z_
- [#2437](https://github.com/charmbracelet/crush/pull/2437) **feat(tui): display git branch** — _by @Gustave-241021, updated 2026-04-22T10:55:49Z_


## Closed PRs (not merged)

- [#2347](https://github.com/charmbracelet/crush/pull/2347) **fix(tools/fetch): cap fetch tool at 50K tokens** — _by @meowgorithm, closed 2026-04-22T13:37:07Z_
- [#2639](https://github.com/charmbracelet/crush/pull/2639) **chore(jq,fetch): allow fetch to pass into jq, improve jq skill** — _by @meowgorithm, closed 2026-04-22T13:35:56Z_


## Notable Issues

- [#2684](https://github.com/charmbracelet/crush/issues/2684) **Env vars do not expand with MCP args** _[area: mcp]_ — _by @Jelloeater_
- [#1282](https://github.com/charmbracelet/crush/issues/1282) **Support edit diff manually** _[area: diff]_ — _by @zhaob1n_ _(closed 2026-04-23T04:20:44Z)_
- [#1262](https://github.com/charmbracelet/crush/issues/1262) **Copying text doesn't handle backticks well** — _by @taoeffect_ _(closed 2026-04-23T04:20:44Z)_
- [#493](https://github.com/charmbracelet/crush/issues/493) **Support For OpenRouter Sorting** _[provider: openrouter, Migrated]_ — _by @kesile_ _(closed 2026-04-23T04:20:44Z)_
- [#2683](https://github.com/charmbracelet/crush/issues/2683) **Sidebar lists the same skill twice when project and user skill directories resolve to the same files (symlink)** — _by @maxispossible_
- [#2682](https://github.com/charmbracelet/crush/issues/2682) **Prevent SQLite corruption (`SQLITE_NOTADB`/code 26) under concurrent sub-agents** — _by @taoeffect_
- [#2676](https://github.com/charmbracelet/crush/issues/2676) **LM Studio somehow connects only to localhost:1234** — _by @BlackScorp_
- [#2677](https://github.com/charmbracelet/crush/issues/2677) **Custom System Prompt** — _by @BlackScorp_
- [#2463](https://github.com/charmbracelet/crush/issues/2463) **Allow ssh and remote-shell commands in --yolo mode** _[area: shell]_ — _by @vladon_
- [#2665](https://github.com/charmbracelet/crush/issues/2665) **404 via yay install** — _by @zigmoo_
- [#2633](https://github.com/charmbracelet/crush/issues/2633) **"invalid_request_error" in Kimi for Coding** _[provider: kimi]_ — _by @g-e-n-v_


## Commits on `main`

- [`79e5a6f`](https://github.com/charmbracelet/crush/commit/79e5a6f17d0be8c900e89ee3523e87ce1df1b544) v0.62.0 — _@andreynering_
- [`7437d2b`](https://github.com/charmbracelet/crush/commit/7437d2b830477f06cb8a84c12f779d54423ca300) fix: silence unless warning about non-existent skill paths — _@andreynering_
- [`bbab2bc`](https://github.com/charmbracelet/crush/commit/bbab2bcbd45ead4033d57308d45ebd2b3191f382) chore: auto-update files — _@charmcli_
- [`7cc020b`](https://github.com/charmbracelet/crush/commit/7cc020b7d36eb4669d8f35c8eb857048e6f17775) chore: update catwalk to new domain (#2680) — _@andreynering_
- [`f6a8854`](https://github.com/charmbracelet/crush/commit/f6a885434d8727c35e8dc2331c2bbbfd630c6f82) chore(legal): @iuga has signed the CLA — _@charmcli_
- [`ebf0c1c`](https://github.com/charmbracelet/crush/commit/ebf0c1cfcfb852cd6a4b39a3c225035b018ea30f) chore(deps): update fantasy and catwalk — _@andreynering_
- [`b0b5c14`](https://github.com/charmbracelet/crush/commit/b0b5c140e8262a94b96e65ea98e735c1e8b1b1d2) chore: remove CODEOWNERS — _@andreynering_
- [`da33883`](https://github.com/charmbracelet/crush/commit/da3388385da340dcd94a2c73491e3152e8e4cacf) fix: reduce token usage, use short tool descriptions by default (#2679) — _@andreynering_
- [`4d7c55e`](https://github.com/charmbracelet/crush/commit/4d7c55e298c5bd7ce6733c23738d14b306edba04) test: re-record vcr cassettes — _@andreynering_
- [`9d555a7`](https://github.com/charmbracelet/crush/commit/9d555a70b64e33e1b0051cc237043d28f1f12f7c) fix: reduce `fetch` and `view` tools truncation size to 100KB — _@andreynering_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.1 deterministic template._
