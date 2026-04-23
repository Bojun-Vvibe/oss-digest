# charmbracelet/crush — 2026-03-23

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-22T23:59:59.000Z → 2026-03-23T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The most consequential change today is a tool-behavior tweak: the max read size for the `view` and `fetch` tools was cut from 5MB to 1MB ([#2447](https://github.com/charmbracelet/crush/pull/2447)) because many models' context windows can't handle 5MB payloads. The `view` tool will now instruct the model to read in pieces, and `fetch` will truncate with a note. If you script around these tools or have prompts that rely on slurping large files/URLs in one shot, this is the change to read.

Two other quality fixes landed from andreynering: long-text detection now also triggers on a single very long line (e.g. a 5,000-char JSON blob pasted as one line), not just on 5+ line blocks ([#2442](https://github.com/charmbracelet/crush/pull/2442)); and a first-time contributor fix from faelis removes a duplicate `ctrl+g` "less" entry that was showing twice in the expanded help on the landing screen when no session is active ([#2465](https://github.com/charmbracelet/crush/pull/2465)).

On the dependency/security front, `google.golang.org/grpc` was bumped to pick up a security fix flagged by Grype ([#2464](https://github.com/charmbracelet/crush/pull/2464), commit [c771cf1](https://github.com/charmbracelet/crush/commit/c771cf119ff7e00fd8fe4b5ad6c8024089bc59c4)), and `ncruces/go-sqlite3` was upgraded to v0.33.0 ([#2461](https://github.com/charmbracelet/crush/pull/2461), superseding the dependabot PR [#2459](https://github.com/charmbracelet/crush/pull/2459)). That sqlite update is notable beyond a routine bump: it migrates from `wazero` to `wasm2go`, which the maintainers expect to improve performance, especially startup time — worth watching for regressions.

Infra/CI: an `avian` label was added to the labeler config ([2bec41e](https://github.com/charmbracelet/crush/commit/2bec41ef233d49602f6b046f1c31f9972b912a9e)), and the CLA GitHub Action was updated to restore PR-number support ([06f5251](https://github.com/charmbracelet/crush/commit/06f52518397f88ca51de06990627ce774ff31ef7)), reverting an earlier workaround.

No releases or new issues today. Two older feature PRs from taoeffect saw activity but remain open and unmerged: LLM/user-controlled compaction via a `new_session` tool ([#2333](https://github.com/charmbracelet/crush/pull/2333)) and switching the `agent` tool to use the small model ([#2365](https://github.com/charmbracelet/crush/pull/2365)) — both still worth tracking for future direction on context management and cost.

## Releases

_None in window._


## Merged PRs

- [#2465](https://github.com/charmbracelet/crush/pull/2465) **fix(tui): remove duplicate ctrl+g help binding in FullHelp** — _by @faelis, merged 2026-03-23T20:41:12Z_
- [#2447](https://github.com/charmbracelet/crush/pull/2447) **fix: reduce max read size from 5mb to 1mb for view and fetch tools** — _by @andreynering, merged 2026-03-23T20:29:20Z_
- [#2442](https://github.com/charmbracelet/crush/pull/2442) **fix: improve long text detection to account for long text in a single line** — _by @andreynering, merged 2026-03-23T20:19:36Z_
- [#2461](https://github.com/charmbracelet/crush/pull/2461) **chore: update ncruces/go-sqlite3 to v0.33.0** — _by @andreynering, merged 2026-03-23T20:18:07Z_
- [#2464](https://github.com/charmbracelet/crush/pull/2464) **chore: update `google.golang.org/grpc` with security fix** — _by @andreynering, merged 2026-03-23T17:58:16Z_


## Open PRs (new or updated)

- [#2333](https://github.com/charmbracelet/crush/pull/2333) **feat: LLM and User-controlled compaction via `new_session` tool** — _by @taoeffect, updated 2026-03-23T20:14:25Z_
- [#2365](https://github.com/charmbracelet/crush/pull/2365) **fix(agent): Change 'agent' tool model to be the small model** — _by @taoeffect, updated 2026-03-23T20:14:23Z_


## Closed PRs (not merged)

- [#2459](https://github.com/charmbracelet/crush/pull/2459) **chore(deps): bump github.com/ncruces/go-sqlite3 from 0.32.0 to 0.33.0 in the all group** — _by @dependabot[bot], closed 2026-03-23T13:36:16Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`96f51ca`](https://github.com/charmbracelet/crush/commit/96f51ca5cf873532a15e7cb149b755f2d5ed03eb) fix(tui): remove duplicate ctrl+g help binding in FullHelp (#2465) — _@faelis_
- [`dfc57d4`](https://github.com/charmbracelet/crush/commit/dfc57d4c1d779da45197d6b5ec6569cf515e4d77) fix: reduce max read size from 5mb to 1mb for view and fetch tools (#2447) — _@andreynering_
- [`0c6fb42`](https://github.com/charmbracelet/crush/commit/0c6fb42a0359d381085e531f4fcec6e0af07c988) fix: improve long text detection to account for long text in a single line (#2442) — _@andreynering_
- [`91bec12`](https://github.com/charmbracelet/crush/commit/91bec12ceb49c9272c3f28ebc27728c7ea63f113) chore: update ncruces/go-sqlite3 to v0.33.0 (#2461) — _@andreynering_
- [`cbf3e5d`](https://github.com/charmbracelet/crush/commit/cbf3e5d875278f3051c780575b8374b8a59e0bf5) chore(legal): @faelis has signed the CLA in $pullRequestNo — _@charmcli_
- [`2bec41e`](https://github.com/charmbracelet/crush/commit/2bec41ef233d49602f6b046f1c31f9972b912a9e) ci(labeler): add avian label — _@andreynering_
- [`c771cf1`](https://github.com/charmbracelet/crush/commit/c771cf119ff7e00fd8fe4b5ad6c8024089bc59c4) chore: update `google.golang.org/grpc` with security fix (#2464) — _@andreynering_
- [`127848a`](https://github.com/charmbracelet/crush/commit/127848afab76da5f01fd010f62113640f8ac71c3) chore(legal): @hongquan has signed the CLA in $pullRequestNo — _@charmcli_
- [`06f5251`](https://github.com/charmbracelet/crush/commit/06f52518397f88ca51de06990627ce774ff31ef7) ci: update cla action and bring back pr number — _@andreynering_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
