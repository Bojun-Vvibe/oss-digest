# cline/cline — 2026-03-09

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-08T23:59:59.000Z → 2026-03-09T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a pair of CLI fixes from saoudrizwan that address regressions in the new TUI: `cline "prompt"` was replaying the startup task whenever the terminal resized, because `useTerminalSize` remounted on every resize event and `ChatView`'s mount-only auto-submit re-fired with `initialPrompt` still passed in (#9735). A follow-up narrows that remount to width-only changes, since height-only resizes don't affect Ink's wrapping (#9736). Anyone shipping on the CLI should pull both.

The other notable CLI work is a new `cline --continue` flag that reopens the most recent task started from the current directory — deliberately scoped, with no prompt-as-followup behavior and no `task --continue` variant (#9726). Related, maxpaulus43 fixed the CLI persisting session-only flags to global state, switching to `setSessionOverride` (#9707).

On telemetry, alex-lum restored cache token and cost metrics in `captureTokenUsage`, which had been silently dropping `cacheWriteTokens`, `cacheReadTokens`, and `totalCost` from the `task/tokens` event and OTel metrics despite both call sites already having the data (#9741) — worth reading if you depend on Cline's usage analytics.

Housekeeping and small fixes round out the day: a Windows path-normalization fix for the `listFiles` unit test (#9742), a snapshot rebaseline for `vertex_gemini3.tools.snap` after an earlier path-description change broke every PR (#9731), removal of leftover Changesets bot artifacts and contributor docs (#9739), and UI padding around the auto-retry message (#9635).

Several PRs were closed without merging, including two Gemini 3 parallel-tool-calling attempts from arafatkatze (#9727, #9728), a `presentAssistantMessage` streaming timeout (#9452), a CLI `change_directory` tool (#9514), and the long-running command-runner refactor of `Task/index.ts` (#6508) — signaling those directions are on hold.

No releases, no new issues, and the only still-open PRs of note are a dependabot bump of `diff` 5→8 (#9128) and a Linux/Windows Meta→Ctrl shortcut mapping fix (#9614).

## Releases

_None in window._


## Merged PRs

- [#9741](https://github.com/cline/cline/pull/9741) **fix(telemetry): restore cache token and cost metrics in captureTokenUsage** — _by @alex-lum, merged 2026-03-09T22:55:24Z_
- [#9742](https://github.com/cline/cline/pull/9742) **Fix failing `listFiles` unit test on Windows** — _by @candieduniverse, merged 2026-03-09T20:23:47Z_
- [#9739](https://github.com/cline/cline/pull/9739) **chore: remove changesets bot artifacts** — _by @arafatkatze, merged 2026-03-09T19:26:48Z_
- [#9707](https://github.com/cline/cline/pull/9707) **use setSessionOverride instead of setGlobalState** — _by @maxpaulus43, merged 2026-03-09T18:20:57Z_
- [#9635](https://github.com/cline/cline/pull/9635) **Add Padding to Retry Message** — _by @shey-cline, merged 2026-03-09T16:29:28Z_
- [#9731](https://github.com/cline/cline/pull/9731) **test: rebaseline vertex_gemini3.tools.snap** — _by @dominiccooney, merged 2026-03-09T14:57:05Z_
- [#9736](https://github.com/cline/cline/pull/9736) **fix(cli): remount TUI only on width resize** — _by @saoudrizwan, merged 2026-03-09T11:04:00Z_
- [#9735](https://github.com/cline/cline/pull/9735) **fix(cli): prevent startup prompt replay on resize remount** — _by @saoudrizwan, merged 2026-03-09T10:30:01Z_
- [#9726](https://github.com/cline/cline/pull/9726) **feat(cli): add --continue for current directory** — _by @saoudrizwan, merged 2026-03-09T02:54:44Z_


## Open PRs (new or updated)

- [#9128](https://github.com/cline/cline/pull/9128) **chore(deps): bump diff from 5.2.2 to 8.0.3** — _by @dependabot[bot], updated 2026-03-09T22:11:07Z_
- [#9614](https://github.com/cline/cline/pull/9614) **fix: map Meta shortcut to Ctrl on Linux and Windows** — _by @Br1an67, updated 2026-03-09T06:50:26Z_


## Closed PRs (not merged)

- [#9728](https://github.com/cline/cline/pull/9728) **fix: add Gemini 3 parallel tool-calling guidance to RULES** — _by @arafatkatze, closed 2026-03-09T18:59:55Z_
- [#9727](https://github.com/cline/cline/pull/9727) **fix: enable parallel tool calling for Gemini 3 on OpenRouter** — _by @arafatkatze, closed 2026-03-09T18:59:55Z_
- [#6508](https://github.com/cline/cline/pull/6508) **Taking out command runner from Task/index.ts  as a part of the task/index.ts  refactor** — _by @arafatkatze, closed 2026-03-09T18:08:48Z_
- [#9452](https://github.com/cline/cline/pull/9452) **feat: add timeout for presentAssistantMessage during streaming** — _by @arafatkatze, closed 2026-03-09T18:08:20Z_
- [#9514](https://github.com/cline/cline/pull/9514) **Add change_directory tool to cline (for CLI only right now)** — _by @maxpaulus43, closed 2026-03-09T17:54:47Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`ffa4785`](https://github.com/cline/cline/commit/ffa4785f431893afcf7f8b51c2e9ac5fe009409a) fix(telemetry): restore cache token and cost metrics in captureTokenUsage (#9741) — _@alex-lum_
- [`92ec126`](https://github.com/cline/cline/commit/92ec126dca54c4dea25a3ed9c144bc9b6cee6116) Fix Windows unit test path normalization (#9742) — _@candieduniverse_
- [`c4c8b16`](https://github.com/cline/cline/commit/c4c8b16afbe2bb85f6e35c5a5883cea93a6388fd) chore: remove changesets bot artifacts (#9739) — _@arafatkatze_
- [`2eed79d`](https://github.com/cline/cline/commit/2eed79dcd7daa01af73532952d9ac727b6ba0d18) use setSessionOverride instead of setGlobalState (#9707) — _@maxpaulus43_
- [`d39a53f`](https://github.com/cline/cline/commit/d39a53feedba819f9800a316d50c23cbc2fd3761) Add Padding to Retry Message (#9635) — _@shey-cline_
- [`cae9bff`](https://github.com/cline/cline/commit/cae9bff4163dc09c0ebac671e2bffe8ea17c7502) test: rebaseline vertex_gemini3.tools.snap (#9731) — _@dominiccooney_
- [`36618fb`](https://github.com/cline/cline/commit/36618fb327572e8d37ea9ffcec2f89f21bfdddb7) fix(cli): remount TUI only on width resize (#9736) — _@saoudrizwan_
- [`a335b5c`](https://github.com/cline/cline/commit/a335b5cb3e7502efda791d1f2dffc4e5c4d2fd64) fix(cli): prevent startup prompt replay on resize remount (#9735) — _@saoudrizwan_
- [`bce71b4`](https://github.com/cline/cline/commit/bce71b4448815975d9192d60432b694ddcd5fa03) feat(cli): add --continue for current directory (#9726) — _@saoudrizwan_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
