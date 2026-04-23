# cline/cline — 2026-03-20

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-19T23:59:59.000Z → 2026-03-20T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## VSCode extension v3.75.0 / CLI v2.9.0 shipped

A new release went out today ([release notes](https://github.com/cline/cline/releases/tag/v3.75.0), version bump in #9910), headlined by **latency improvements for remote workspaces** (#9858). That PR targets perceived latency in the VSCode extension when working against remote workspaces (e.g. Codespaces), with notably faster generative file writes — worth a look if you use Cline over SSH/Codespaces.

The release also bundles two stability fixes worth understanding:

- **#9905** fixes a deadlock when clicking "New Task" or "Exit" after task completion. The presentation scheduler introduced in ff05ec3 awaited in-flight flushes during `dispose()`, but `ask()` blocked indefinitely on `pWaitFor`; `abortTask()` then hung waiting for the scheduler. The fix adds an abort-flag check to the `pWaitFor` condition.
- **#9908** is an immediate follow-up to #9905: non-resume asks should unblock on abort, but `resume_task` / `resume_completed_task` asks must remain pending so the resume button still works. If you're touching task lifecycle code, read these two together.

Other notable merges:

- **#9871** (arafatkatze) fixes OpenRouter usage accounting by reading `prompt_tokens_details.cache_write_tokens` from the API response instead of hardcoding `0`. Anyone tracking prompt-cache costs on OpenRouter should pull this.
- **#9868** stabilizes flaky hooks fixture tests via per-scenario isolation, and **#9896** removes the example hook files from `.clinerules/hooks/` (they were triggering background errors; docs are now the source of truth).
- **#9856** (jl-codes) corrects several SDK doc inaccuracies: `setPermissionHandler` async signature, removal of the non-existent `PermissionResolver` type, and the missing `hooksDir` option on `ClineAgentOptions`.
- Commit 6308fef switches the CLI to `npx kanban@latest` to avoid stale cached versions.

One new open PR to watch: **#9911** rejects directory paths in `replace_in_file` / `write_to_file`, fixing an `EISDIR` retry loop when the model passes a directory to `fileExistsAtPath`. No new issues filed today.

## Releases

- **[v3.75.0](https://github.com/cline/cline/releases/tag/v3.75.0)** — v3.75.0 _by @github-actions[bot] at 2026-03-20T23:27:16Z_
  > ### Added
  > 
  > - Latency improvements for remote workspaces
  > 
  > ### Fixed
  > 
  > - Stabilize flaky hooks tests
  > 
  > ### Changed
  > 
  > - Remove example hooks in favor of reading the docs
  > 
  > **Full Changelog**: https://github.com/cline/cline/compare/v2.9.0-cli...v3.75.0


## Merged PRs

- [#9871](https://github.com/cline/cline/pull/9871) **fix: read cache_write_tokens from OpenRouter API instead of hardcoding 0** — _by @arafatkatze, merged 2026-03-20T22:46:29Z_
- [#9910](https://github.com/cline/cline/pull/9910) **Changelog and version bump for release** — _by @candieduniverse, merged 2026-03-20T22:29:46Z_
- [#9908](https://github.com/cline/cline/pull/9908) **fix: prevent resume asks from unblocking on abort** — _by @candieduniverse, merged 2026-03-20T17:51:16Z_
- [#9868](https://github.com/cline/cline/pull/9868) **Stabilize hooks fixture tests with per-scenario isolation (fix flaking tests)** — _by @candieduniverse, merged 2026-03-20T16:50:15Z_
- [#9905](https://github.com/cline/cline/pull/9905) **fix: resolve deadlock when clicking New Task/Exit after task completion** — _by @maxpaulus43, merged 2026-03-20T15:53:21Z_
- [#9856](https://github.com/cline/cline/pull/9856) **docs: fix SDK documentation accuracy and completeness** — _by @jl-codes, merged 2026-03-20T04:01:24Z_
- [#9896](https://github.com/cline/cline/pull/9896) **Hooks: Remove example files** — _by @candieduniverse, merged 2026-03-20T01:42:56Z_
- [#9858](https://github.com/cline/cline/pull/9858) **Latency improvements for remote workspaces** — _by @candieduniverse, merged 2026-03-20T00:05:49Z_


## Open PRs (new or updated)

- [#9911](https://github.com/cline/cline/pull/9911) **fix: reject directory paths in replace_in_file / write_to_file** — _by @k-j-kim, updated 2026-03-20T23:09:35Z_
- [#9363](https://github.com/cline/cline/pull/9363) **chore(deps): bump ajv from 8.17.1 to 8.18.0** — _by @dependabot[bot], updated 2026-03-20T02:38:01Z_


## Closed PRs (not merged)

- [#9755](https://github.com/cline/cline/pull/9755) **chore(deps-dev): bump tar from 7.5.7 to 7.5.11** — _by @dependabot[bot], closed 2026-03-20T02:39:36Z_
- [#9754](https://github.com/cline/cline/pull/9754) **chore(deps-dev): bump tar from 7.4.4 to 7.5.11 in /webview-ui** — _by @dependabot[bot], closed 2026-03-20T02:39:28Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`7f3974a`](https://github.com/cline/cline/commit/7f3974a827f8995395d667cd9df88de039fe32e6) fix: read cache_write_tokens from OpenRouter API instead of hardcoding 0 (#9871) — _@arafatkatze_
- [`d40ab56`](https://github.com/cline/cline/commit/d40ab56aff911a49880e5c6fce88f16fcd05b1c8) Changelog and version bump for release (#9910) — _@candieduniverse_
- [`bbdf445`](https://github.com/cline/cline/commit/bbdf445db74dffd1484159ab15399dc65337e37a) fix: prevent resume asks from unblocking on abort (#9908) — _@candieduniverse_
- [`d992a3b`](https://github.com/cline/cline/commit/d992a3bf21ecb131b1720f3ec45866fdd4b33224) Stabilize hooks fixture tests with per-scenario isolation (fix flaking tests) (#9868) — _@candieduniverse_
- [`ace9598`](https://github.com/cline/cline/commit/ace95988f8747fa817e1517ce00aadad99f2b098) fix: resolve deadlock when clicking New Task/Exit after task completion (#9905) — _@maxpaulus43_
- [`54726f1`](https://github.com/cline/cline/commit/54726f1677c654d597aaa525e1b75395b88d6cdb) docs: fix SDK documentation accuracy and completeness (#9856) — _@jl-codes_
- [`6308fef`](https://github.com/cline/cline/commit/6308fef0a9772c23fd533e0d39717d8710c03637) fix(cli): use kanban@latest to always fetch newest version (#9898) — _@saoudrizwan_
- [`b3fc79b`](https://github.com/cline/cline/commit/b3fc79b8ce7df37a3dc4814281089c1866edf49c) Remove example hooks (#9896) — _@candieduniverse_
- [`ff05ec3`](https://github.com/cline/cline/commit/ff05ec3bbe8ae04dd86d1d80447ae00d00aed1d1) Latency improvements for remote workspaces (#9858) — _@candieduniverse_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
