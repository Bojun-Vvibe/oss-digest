# charmbracelet/crush — 2026-04-13

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-04-12T23:59:59.000Z → 2026-04-13T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v0.57.0 ships with token savings and session hardening

The headline today is the **v0.57.0 release** ([release](https://github.com/charmbracelet/crush/releases/tag/v0.57.0)), which introduces an opt-in flag that shrinks tool call descriptions by ~98% (estimated ~120K tokens/session saved) and lands a batch of session integrity fixes guarding against session corruption.

The most important bug fix backing that release is a hotfix for tool call validation (#2615, commit `c41a1a0`): tool results without a matching tool call were corrupting sessions. The fix validates tool call/result pairing and also strips tags from titles. Pair this with #2611 ("prevent early events from being dropped before init"), which closes a race where events emitted before initialization were silently lost — both are worth reading if you've seen flaky session state.

Two notable feature/refactor merges:
- #2350 reworks SKILL frontmatter parsing to handle UTF-8 BOM, leading blank lines, and trailing-space delimiters; reduces XML rendering overhead in `ToPromptXML`; and stabilizes `Discover` output by sorting on `SkillFilePath`. Useful background if you author skills.
- #2561 (merged Apr 8, surfacing in today's window) adds two new tools, `crush_info` and `crush_logs`, letting the agent inspect its own active config and logs with minimal context cost (~130 tokens always-in-prompt for `crush_info`).

Infrastructure churn: dependabot bumped 11 deps in the `all` group (#2614), catwalk was updated again separately (`ca69095`), and bubbletea was bumped twice — first to v2.03 with layout fixups (`4a1298e`), then to v2.0.5 to fix a stray `tea_debug.log` file (`aea4e99`). CI also pinned to a stable Go version in the security workflow (`e5712f0`).

One open PR to watch: #2549 proposes replacing the stdlib `json` package with bytedance/sonic for JIT-accelerated parsing — a meaningful dependency choice still under discussion, no merge yet.

No new issues were filed in the window.

## Releases

- **[v0.57.0](https://github.com/charmbracelet/crush/releases/tag/v0.57.0)** — v0.57.0 _by @github-actions[bot] at 2026-04-13T20:58:57Z_
  > # Session Hardening, Token Savings and More
  > 
  > There are a bunch of solid housekeeping improvements in this release, including opt-in token savings and some serious work on session integrity and guarding against session corruptions.
  > 
  > ## Fewer Tokens (Preview)
  > 
  > In this release we're introducing a new flag that reduces the size of tool call descriptions by about 98%, which we're estimating will save about 120K tokens/session! The `tl;dr` is that LLMs are a lot better nowadays at tool descriptions an…


## Merged PRs

- [#2350](https://github.com/charmbracelet/crush/pull/2350) **refactor: simplify skills parsing and improve discovery visibility** — _by @huaiyuWangh, merged 2026-04-13T20:22:43Z_
- [#2611](https://github.com/charmbracelet/crush/pull/2611) **fix(events): prevent early events from being dropped before init** — _by @meowgorithm, merged 2026-04-13T15:04:49Z_
- [#2242](https://github.com/charmbracelet/crush/pull/2242) **fix(app): derive shutdown context from context.Background() instead of cancelled globalCtx** — _by @AnyCPU, merged 2026-04-08T19:24:01Z_
- [#2564](https://github.com/charmbracelet/crush/pull/2564) **chore(deps): bump the all group with 3 updates** — _by @dependabot[bot], merged 2026-04-08T19:48:14Z_
- [#2561](https://github.com/charmbracelet/crush/pull/2561) **feat(tools): view active crush config and logs** — _by @meowgorithm, merged 2026-04-08T20:00:10Z_
- [#2614](https://github.com/charmbracelet/crush/pull/2614) **chore(deps): bump the all group with 11 updates** — _by @dependabot[bot], merged 2026-04-13T12:24:38Z_


## Open PRs (new or updated)

- [#2549](https://github.com/charmbracelet/crush/pull/2549) **refactor: improve json parsing performance** — _by @BrunoKrugel, updated 2026-04-13T12:31:48Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`aea4e99`](https://github.com/charmbracelet/crush/commit/aea4e997b170a57a492589a9e88bd6775b42ae6a) chore: bump bubbletea to v2.0.5 to fix tea_debug.log file issue — _@aymanbagabas_
- [`9847be2`](https://github.com/charmbracelet/crush/commit/9847be2652b41d981432b49c0e33a5842995c087) v0.57.0 — _@andreynering_
- [`7a6a179`](https://github.com/charmbracelet/crush/commit/7a6a179ccc0fc1d5744bad3a7ccabd085a6474ca) refactor: simplify skills parsing and improve discovery visibility (#2350) — _@huaiyuWangh_
- [`ca69095`](https://github.com/charmbracelet/crush/commit/ca69095a3a1ac544cfec0c99b0836f8773a1cb23) chore(deps): update catwalk — _@andreynering_
- [`8e3263d`](https://github.com/charmbracelet/crush/commit/8e3263dc1bc023c79b054dd23706b6ca5ace299f) Merge pull request #2615 from charmbracelet/hotfix — _@meowgorithm_
- [`7a358f9`](https://github.com/charmbracelet/crush/commit/7a358f92ae0dccf18fef2334fdab5dd6a36c3223) chore(deps): bump fantasy for tool call integrity fix — _@meowgorithm_
- [`3e8c148`](https://github.com/charmbracelet/crush/commit/3e8c1489e44f5cf34f4702fefe2ec98a81b9e2c6) chore(agent): move filter logic into a function — _@meowgorithm_
- [`c41a1a0`](https://github.com/charmbracelet/crush/commit/c41a1a0e40b90fa2ce20b076a3741cfa6dbdff8a) fix(agent): validate tool call/results + strip tags from titles — _@meowgorithm_
- [`40b7cdd`](https://github.com/charmbracelet/crush/commit/40b7cdd46685c3d4b96b74cdcab48a2181951cb0) fix(ui): format code in ui.go — _@aymanbagabas_
- [`e5712f0`](https://github.com/charmbracelet/crush/commit/e5712f07f08e1a6d81e07ab766dd3528251c3713) fix(ci): use stable Go version in security workflow — _@aymanbagabas_
- [`4a1298e`](https://github.com/charmbracelet/crush/commit/4a1298ecd1dff83e1e704ca6b65b5a18d86e0490) chore: bump bubbletea and ultraviolet to v2.03 and 73592393e1ad and fix — _@aymanbagabas_
- [`d9f857f`](https://github.com/charmbracelet/crush/commit/d9f857fb29317f25d2af8f7104802d88b3417a5b) fix(events): prevent early events from being dropped before init (#2611) — _@meowgorithm_
- [`047cce5`](https://github.com/charmbracelet/crush/commit/047cce5d99f736845a3b0bd9a754f4b1e499316b) chore(deps): bump the all group with 11 updates (#2614) — _@dependabot[bot]_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
