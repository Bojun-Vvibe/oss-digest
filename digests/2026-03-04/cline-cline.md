# cline/cline — 2026-03-04

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-03T23:59:59.000Z → 2026-03-04T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v3.70.0 ships with OpenRouter fix and new telemetry

The headline today is the **v3.70.0 release** ([cut in #9664](https://github.com/cline/cline/pull/9664)), which bundles several user-visible fixes worth noting. Most important for users hitting recent OpenRouter 400 errors: #9634 stops sending `max_tokens` in OpenRouter stream requests. In v3.68.0 Cline began passing `model.info.maxTokens` directly, but OpenRouter reports very large `max_completion_tokens` (e.g. 131072) for some models, which pushed `input + requested_output` past the context window. This fixes issue #9592. The release also includes immediate token/cost updates as usage chunks arrive, improved subagent context compaction, longer subagent stream retry delays, and crash-safe state serialization.

Two notable feature additions landed:

- **OTel metrics for AI output** (#9562): tracks lines added/deleted/changed and files created/deleted/moved across `write_to_file`, `replace_in_file`, and `apply_patch` handlers, emitted as both event fields and OTel counters. This is the foundation for measuring acceptance rates of Cline-generated edits.
- **Model metadata in hook payloads** (#9646): every hook payload now carries `model.provider` and `model.slug` (with `"unknown"` fallbacks), motivated by `git-ai` support. Docs in `hooks.mdx` are updated.

Security: #9657 restricts the `/test-jetbrains` GitHub Actions trigger to MEMBER/OWNER/COLLABORATOR via `author_association`, closing GHSA-5fq9-fh5x-w83r (SEC-29) where any user could drain Actions minutes by commenting on an open PR.

A few PRs were **closed without merging** that may resurface: a Hooks feature toggle re-add (#9670), an Avian LLM provider (#9582), and dependabot bumps for `tar` (#9375, #9342) and `hono` 4.12.3 (#9565) — the latter superseded by the merged hono 4.12.4 bump (#9653), which carries SSE Control Field Injection security fixes.

Still open and worth watching: SAP AI Core support for Claude 4.6 Opus (#9649, fixes #9644) and an MCP reconnect-loop fix that skips writes and adds a grace period (#9654).

## Releases

- **[v3.70.0](https://github.com/cline/cline/releases/tag/v3.70.0)** — v3.70.0 _by @github-actions[bot] at 2026-03-04T22:07:35Z_
  > ### Added
  > 
  > - New Cline API docs: Getting Started, Auth, Chat Completions, Models, Errors, and SDK Examples
  > - Hook payloads now include `model.provider` and `model.slug` 
  > - Token/cost updates now happen immediately as usage chunks arrive, not after tool execution
  > 
  > ### Fixed
  > 
  > - Improve subagent context compaction logic
  > - Subagent stream retry delay increased to reduce noise from transient failures
  > - State serialization errors are now caught and logged instead of crashing
  > - Removed incorrect `max_t…


## Merged PRs

- [#9562](https://github.com/cline/cline/pull/9562) **feat: add OTel tracking for AI output line/file metrics (lines added/deleted/changed, files created/deleted/moved)** — _by @alex-lum, merged 2026-03-04T22:45:57Z_
- [#9664](https://github.com/cline/cline/pull/9664) **update changelog and bump version numbers** — _by @maxpaulus43, merged 2026-03-04T21:39:15Z_
- [#9634](https://github.com/cline/cline/pull/9634) **fix(openrouter): stop sending max_tokens in stream requests** — _by @saoudrizwan, merged 2026-03-04T17:48:59Z_
- [#9657](https://github.com/cline/cline/pull/9657) **Restrict /test-jetbrains trigger to authorized users (SEC-29)** — _by @arafatkatze, merged 2026-03-04T17:13:41Z_
- [#9646](https://github.com/cline/cline/pull/9646) **Add model identifier to the JSON payload that hooks receive** — _by @candieduniverse, merged 2026-03-04T03:08:41Z_


## Open PRs (new or updated)

- [#9649](https://github.com/cline/cline/pull/9649) **feat(sapaicore): add Claude 4.6 Opus model support** — _by @ClineXDiego, updated 2026-03-04T15:09:40Z_
- [#9654](https://github.com/cline/cline/pull/9654) **fix(mcp): skip write and add grace period to prevent self-triggered reconnect** — _by @abeatrix, updated 2026-03-04T01:24:00Z_


## Closed PRs (not merged)

- [#9670](https://github.com/cline/cline/pull/9670) **Hooks: Add feature toggle** — _by @candieduniverse, closed 2026-03-04T23:34:03Z_
- [#9375](https://github.com/cline/cline/pull/9375) **chore(deps-dev): bump tar from 7.5.7 to 7.5.9** — _by @dependabot[bot], closed 2026-03-04T20:42:18Z_
- [#9342](https://github.com/cline/cline/pull/9342) **chore(deps-dev): bump tar from 7.4.4 to 7.5.9 in /webview-ui** — _by @dependabot[bot], closed 2026-03-04T20:41:48Z_
- [#9582](https://github.com/cline/cline/pull/9582) **feat: add Avian as a new LLM provider** — _by @avianion, closed 2026-03-04T20:02:15Z_
- [#9653](https://github.com/cline/cline/pull/9653) **chore(deps): bump hono from 4.11.7 to 4.12.4** — _by @dependabot[bot], closed 2026-03-04T17:15:30Z_
- [#9565](https://github.com/cline/cline/pull/9565) **chore(deps): bump hono from 4.11.7 to 4.12.3** — _by @dependabot[bot], closed 2026-03-04T01:18:32Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`152ba67`](https://github.com/cline/cline/commit/152ba674da5c90b745aedd3a70238228e8d57b97) feat: add OTel tracking for AI output line/file metrics (lines added/deleted/changed, files created/deleted/moved) (#9562) — _@alex-lum_
- [`12f5dc2`](https://github.com/cline/cline/commit/12f5dc2e9e0388b8caac9c52ff90497678a4867c) update changelog and bump version numbers (#9664) — _@maxpaulus43_
- [`28d806a`](https://github.com/cline/cline/commit/28d806a4e4e0cc357166e038bb45a4befe6307bf) fix(openrouter): stop sending max_tokens in stream requests (#9634) — _@saoudrizwan_
- [`e92c7de`](https://github.com/cline/cline/commit/e92c7de8c0580487ff3a17f40677761bfdf87af0) Restrict /test-jetbrains workflow trigger to authorized users (#9657) — _@arafatkatze_
- [`718e5b5`](https://github.com/cline/cline/commit/718e5b53f6b24aedfc6186e1d3a4a8e7704a428d) Add model identifier to the JSON payload that hooks receive (#9646) — _@candieduniverse_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
