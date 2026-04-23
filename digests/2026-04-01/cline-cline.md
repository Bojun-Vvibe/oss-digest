# cline/cline — 2026-04-01

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-31T23:59:59.000Z → 2026-04-01T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headline today is the **v3.77.0 release** ([release](https://github.com/cline/cline/releases/tag/v3.77.0)), shipping the VSCode extension at v3.77.0 and CLI at v2.12.0 (#10085). The release is small but has one notable user-facing addition and one quietly useful capability worth knowing about.

The user-facing addition is **"Lazy Teammate Mode"** (#10081), an experimental toggle that makes Cline roleplay as a maximally lazy coworker who refuses to write code and instead generates elaborate excuses arguing the human should do it. Full plumbing is wired through (`lazyTeammateModeEnabled` setting, state-keys, proto, controller, webview context). It's billed as entertainment-only, but anyone reviewing prompt-injection or persona surfaces should glance at it.

More substantively, `read_file` now supports **chunked reading for targeted file access**, and `new_task` is excluded from the system prompt in yolo/headless mode — both are quality-of-life changes that reduce token waste and unwanted tool calls in automated runs.

On the security front, two Aikido autofix PRs (#10036, #10037) covering 18 CVEs across node-forge, path-to-regexp, brace-expansion, socket.io-parser, lodash, yaml, qs, and minimatch were **closed without merging** — worth confirming whether the fixes were applied via another path or genuinely declined.

Notable open PRs to watch:
- **#10088** proposes a dedicated LSP service wrapping VS Code's Language Features API to replace the expensive `search_files` + `read_file` pattern with precise location-based lookups — flagged "critical" severity by the author and potentially a meaningful token-cost reduction if it lands.
- **#10089** fixes a real bug where the "Cline wants to edit this file" collapsible passes the full multi-file diff to every per-file `DiffViewer`, so each file's view shows changes from all files.
- **#10080** moves file-read dedup to run every turn rather than only near context limit (fixes #10077).
- **#10045** adds macOS launchd auto-start for the Kanban service.
- **#10079** stops the CLI from crashing when `xdg-open` is missing (#9991).

Two small commits on `main`: the release commit (2bd21f8) and the lazy-teammate merge (2f33f71). No new issues filed.

## Releases

- **[v3.77.0](https://github.com/cline/cline/releases/tag/v3.77.0)** — v3.77.0 _by @github-actions[bot] at 2026-04-01T17:26:16Z_
  > ### Added
  > 
  > - Add "Lazy Teammate Mode" experimental toggle
  > - `read_file` tool now supports chunked reading for targeted file access
  > 
  > ### Fixed
  > 
  > - Exclude `new_task` tool from system prompt in yolo/headless mode
  > - Fix Kanban demo video formatting
  > 
  > ### Changed
  > 
  > - Polish `Notification` hook functionality
  > 
  > **Full Changelog**: https://github.com/cline/cline/compare/v3.76.0...v3.77.0


## Merged PRs

- [#10085](https://github.com/cline/cline/pull/10085) **Changelog and version bump for release** — _by @candieduniverse, merged 2026-04-01T17:02:59Z_
- [#10081](https://github.com/cline/cline/pull/10081) **Add lazy teammate mode** — _by @jsimone, merged 2026-04-01T15:55:43Z_


## Open PRs (new or updated)

- [#10045](https://github.com/cline/cline/pull/10045) **feat(kanban): add auto-start on login via macOS launchd** — _by @Krzysztof-Dziardziel, updated 2026-04-01T20:12:34Z_
- [#10089](https://github.com/cline/cline/pull/10089) **refactor(webview-ui): filter per-file diff content in individual "cline wants to edit this file" views** — _by @chinhkrb113, updated 2026-04-01T16:51:40Z_
- [#10088](https://github.com/cline/cline/pull/10088) **refactor(integrations): create dedicated lsp service for semantic code navigation** — _by @chinhkrb113, updated 2026-04-01T16:46:15Z_
- [#10080](https://github.com/cline/cline/pull/10080) **fix: run file read optimization every turn** — _by @zerone0x, updated 2026-04-01T02:42:08Z_
- [#10079](https://github.com/cline/cline/pull/10079) **fix(cli): handle openExternal failures when browser open fails** — _by @zerone0x, updated 2026-04-01T02:41:50Z_
- [#10078](https://github.com/cline/cline/pull/10078) **fix(prompt): add task evolution to summarize example** — _by @zerone0x, updated 2026-04-01T02:36:12Z_


## Closed PRs (not merged)

- [#10036](https://github.com/cline/cline/pull/10036) **[Aikido] Fix 7 security issues in node-forge, path-to-regexp, brace-expansion** — _by @aikido-autofix[bot], closed 2026-04-01T22:45:46Z_
- [#10037](https://github.com/cline/cline/pull/10037) **[Aikido] Fix 11 security issues in socket.io-parser, lodash, yaml and 6 more** — _by @aikido-autofix[bot], closed 2026-04-01T22:45:42Z_
- [#8362](https://github.com/cline/cline/pull/8362) **fix: update button text after deleting history item via side icon** — _by @costajohnt, closed 2026-04-01T01:25:36Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`2bd21f8`](https://github.com/cline/cline/commit/2bd21f8a45840f0fd8f6a209960b4af5e7c579b8) Update changelog and release version (#10085) — _@candieduniverse_
- [`2f33f71`](https://github.com/cline/cline/commit/2f33f71ebdc7f979f977c76f1b434f005ca5202d) Add lazy teammate mode (#10081) — _@jsimone_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
