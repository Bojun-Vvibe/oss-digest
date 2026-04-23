# cline/cline — 2026-04-11

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-04-10T23:59:59.000Z → 2026-04-11T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A quiet day in cline/cline: no releases, no commits to `main`, and no new notable issues in the 24h window. All activity consists of housekeeping closures of stale PRs from a single contributor (`bob10042`), none of which were merged.

The maintainers appear to have done a bulk triage sweep, closing roughly a dozen unmerged PRs that had been sitting open for weeks to months. Nothing here ships, but the closed list is a useful inventory of bug reports that someone tried (and failed) to land — worth scanning if you're hunting for unsolved issues to pick up:

- DeepSeek V3.2 emitting XML tool calls inside `reasoning_content` causing infinite loops (#8852, also bundled in #8535); referenced upstream issue #8365.
- Path containment false positives from `string.includes()` in `src/utils/path.ts` — e.g. `/home/user/project` matching `/home/user/project-backup` (#8886, issue #8761).
- MCP tools ignoring per-tool `autoApprove` settings due to `&&` vs `||` in `UseMcpToolHandler` (#8881, also in #8864, related to #8780).
- Terminal exit-code capture from VSCode shell integration's OSC 633;D sequence (#8890).
- Keyboard focus indicators stripped by the Tailwind v4 upgrade — a WCAG 2.4.7 regression fixed by switching `:focus` → `:focus-visible` (#8887).
- `DiffViewProvider` race condition during streamed updates plus a missing `await` in `scrollToFirstDiff()` (#8882, #8885).
- BOM preservation through the edit cycle for UTF-8-with-BOM files (#8883), and accurate line counting in `revertChanges()` (#8884).
- `@`-mention parser breaks on paths with spaces; fix wraps them in quotes (#8888).
- Older closures: Ollama cancel button not aborting in-flight requests (#7484, issue #7468) and double-quote over-escaping in Background Exec terminal mode (#7483, issue #7470).
- One Aikido bot PR bumping Streamlit 1.43.2 → 1.54.0 in `evals/` for an SSRF fix was also closed unmerged (#10001).

If you only read one thing, skim #8886 — the path-containment bug is the kind of latent footgun likely to resurface in another PR.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#8852](https://github.com/cline/cline/pull/8852) **fix: Community bug fixes - DeepSeek XML, decimal input parsing, and path containment** — _by @bob10042, closed 2026-04-11T11:33:18Z_
- [#8890](https://github.com/cline/cline/pull/8890) **fix: add exit code validation for terminal commands** — _by @bob10042, closed 2026-04-11T11:32:54Z_
- [#8886](https://github.com/cline/cline/pull/8886) **fix: use isLocatedInPath() for path containment check** — _by @bob10042, closed 2026-04-11T11:33:06Z_
- [#8881](https://github.com/cline/cline/pull/8881) **fix: MCP tools respect individual autoApprove settings** — _by @bob10042, closed 2026-04-11T11:33:12Z_
- [#8887](https://github.com/cline/cline/pull/8887) **fix: restore keyboard focus indicators on buttons** — _by @bob10042, closed 2026-04-11T11:33:00Z_
- [#8885](https://github.com/cline/cline/pull/8885) **fix: add missing await in scrollToFirstDiff()** — _by @bob10042, closed 2026-04-11T11:35:06Z_
- [#8882](https://github.com/cline/cline/pull/8882) **fix: prevent race conditions in DiffViewProvider update method** — _by @bob10042, closed 2026-04-11T11:35:04Z_
- [#8884](https://github.com/cline/cline/pull/8884) **fix: use accurate line count method in revertChanges()** — _by @bob10042, closed 2026-04-11T11:35:01Z_
- [#8883](https://github.com/cline/cline/pull/8883) **fix: preserve BOM (Byte Order Mark) for files that originally had it** — _by @bob10042, closed 2026-04-11T11:34:59Z_
- [#8888](https://github.com/cline/cline/pull/8888) **fix: wrap file mentions with spaces in quotes** — _by @bob10042, closed 2026-04-11T11:34:54Z_
- [#7483](https://github.com/cline/cline/pull/7483) **Fix: Terminal commands with double quotes broken in Background Exec mode** — _by @bob10042, closed 2025-12-14T22:06:48Z_
- [#7484](https://github.com/cline/cline/pull/7484) **Fix: Ollama API requests not cancelled when user clicks cancel** — _by @bob10042, closed 2025-12-28T20:56:32Z_
- [#8535](https://github.com/cline/cline/pull/8535) **fix: Community-reported bug fixes for API providers and UI** — _by @bob10042, closed 2026-01-24T21:27:26Z_
- [#8864](https://github.com/cline/cline/pull/8864) **fix: implement 5 critical bug fixes** — _by @bob10042, closed 2026-01-26T21:53:06Z_
- [#8450](https://github.com/cline/cline/pull/8450) **feat: Comprehensive Bcline improvements - Voice, Messaging, CLI Integration, Bug Fixes (v3.47)** — _by @bob10042, closed 2026-01-24T21:27:55Z_
- [#10001](https://github.com/cline/cline/pull/10001) **[Aikido] Fix security issue in streamlit via minor version upgrade from 1.43.2 to 1.54.0 in evals** — _by @aikido-autofix[bot], closed 2026-04-11T01:03:58Z_


## Notable Issues

_None in window._


## Commits on `main`

_None in window._


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
