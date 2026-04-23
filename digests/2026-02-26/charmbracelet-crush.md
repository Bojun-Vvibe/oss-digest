# charmbracelet/crush — 2026-02-26

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-02-25T23:59:59.000Z → 2026-02-26T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v0.46.0 ships with Sonnet 4.6 support and perf wins

The headline today is the **v0.46.0 release**, a "small feats" drop that bundles Anthropic's newly-released Sonnet 4.6 model, another big-repo performance optimization from @acmacalister, and a handful of fixes. The release was cut at 20:04 UTC (commit `2904a36`).

The most user-visible new capability is **Anthropic thinking-effort support** (#2318, by @andreynering), which exposes a configurable reasoning budget for Claude models in Crush and ships alongside coordinated changes in the Catwalk and Fantasy repos. A new **MiniMax China provider** also landed (#2315, by @aisk, first-time contributor per the CLA-signing commit `b726b20`), broadening provider coverage.

On the performance side, @acmacalister's `fix(lsp)` (#2316, commit `24f99f0`) replaces a recursive `fastwalk` with `filepath.Glob` in LSP root-marker detection. The previous code walked the entire working directory with no gitignore filtering, which was painful in large repos — worth a look if you've seen slow LSP startup.

Two bug fixes from @taigrr round out the day: #2320 doubles the `find references` LSP timeout to address flakiness, and #2319 adopts a "new wg pattern" (likely a follow-up to recent goroutine/WaitGroup refactoring). Both merged within an hour of opening.

A larger refactor by @huaiyuWangh also merged (#2267) cleaning up `internal/agent`: a generic `getContextValue` helper, extraction of a shared `runSubAgent` coordinator method (cutting `agent_tool.go` by ~43%), and a params-struct conversion with new unit tests. Mostly internal, but useful context if you're working in that package.

Also worth noting: commit `773efbf` (@meowgorithm) fixes an ordering bug in `tools/view` where a UTF-8 validity check ran before confirming the file read succeeded, and `41a931e` restores graceful handling of MCP servers that advertise `resources/list` but don't implement it (the original fix landed as #2239 from @0xarcher two days earlier).

**Read first:** the v0.46.0 notes, then #2316 if you care about LSP perf, then #2318 for thinking-effort config.

## Releases

- **[v0.46.0](https://github.com/charmbracelet/crush/releases/tag/v0.46.0)** — v0.46.0 _by @github-actions[bot] at 2026-02-26T20:14:51Z_
  > # Small feats
  > 
  > Making your Thursday happier by bringing some small feats to Crush.
  > 
  > ## More perf
  > 
  > Our favorite contributor @acmacalister (actually, every contributor is our favorite) made yet another perf optimization for big repos.
  > 
  > (We’re cooking more performance enhancements for the next release). 
  > 
  > ## New model: Sonnet 4.6
  > 
  > This was recently released by Anthropic and it's already available in Crush (even if you use an old release).
  > 
  > <img width="500" alt="Screenshot 2026-02-26 at 17 26 19" sr…


## Merged PRs

- [#2320](https://github.com/charmbracelet/crush/pull/2320) **bugfix: find references, double timeout** — _by @taigrr, merged 2026-02-26T21:26:48Z_
- [#2267](https://github.com/charmbracelet/crush/pull/2267) **refactor: improve code quality in internal/agent** — _by @huaiyuWangh, merged 2026-02-26T20:28:55Z_
- [#2319](https://github.com/charmbracelet/crush/pull/2319) **use new wg pattern** — _by @taigrr, merged 2026-02-26T19:43:12Z_
- [#2318](https://github.com/charmbracelet/crush/pull/2318) **feat: add support for anthropic thinking effort** — _by @andreynering, merged 2026-02-26T19:41:05Z_
- [#2239](https://github.com/charmbracelet/crush/pull/2239) **fix(mcp): gracefully handle Method not found for resources/list** — _by @0xarcher, merged 2026-02-24T17:09:14Z_


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`41a931e`](https://github.com/charmbracelet/crush/commit/41a931ebc9b3a4a96f7ec799142569fc1022f47d) fix(mcp): restore handling for unsupported resources/list method — _@meowgorithm_
- [`773efbf`](https://github.com/charmbracelet/crush/commit/773efbf84f5bc426633cf7221621ce7af2120f3b) fix(tools/view): perform UTF-8 validity check only if read succeeds — _@meowgorithm_
- [`42aee6d`](https://github.com/charmbracelet/crush/commit/42aee6d2bde0d48d0d752629f5c3e9791c2f2a7c) refactor: use params struct for runSubAgent and add unit tests — _@huaiyuWangh_
- [`6e5bbef`](https://github.com/charmbracelet/crush/commit/6e5bbef78da317dcde97bec412542fcb5a37891e) fix: use typed context keys in tests to satisfy staticcheck — _@huaiyuWangh_
- [`e0d5454`](https://github.com/charmbracelet/crush/commit/e0d545486846749445745269aabb30c73bba628f) refactor: extract common sub-agent execution logic — _@huaiyuWangh_
- [`07d065d`](https://github.com/charmbracelet/crush/commit/07d065d780610a4a37e516733da951888293bf4b) refactor: simplify context value retrieval using generics — _@huaiyuWangh_
- [`2904a36`](https://github.com/charmbracelet/crush/commit/2904a36ef8987287ac4d429c142710f6f00dc9b5) v0.46.0 — _@andreynering_
- [`24f99f0`](https://github.com/charmbracelet/crush/commit/24f99f0d93aa9b71abb72ef8c89bc939cca71b78) fix(lsp): replace recursive fastwalk with filepath.Glob in root marker detection (#2316) — _@acmacalister_
- [`c6f8546`](https://github.com/charmbracelet/crush/commit/c6f854605cd8918932d823363a398c03f7595335) feat: add support for anthropic thinking effort (#2318) — _@andreynering_
- [`cd34bd6`](https://github.com/charmbracelet/crush/commit/cd34bd6f2cb5f22214abb47e8f5741196c140ef0) feat: add minimax china provider (#2315) — _@aisk_
- [`b726b20`](https://github.com/charmbracelet/crush/commit/b726b20aeba20cc68a96649228b14ef8643bd937) chore(legal): @aisk has signed the CLA — _@charmcli_
- [`1dbde3e`](https://github.com/charmbracelet/crush/commit/1dbde3e34f5fa638bf87678a6b0477bfe0c62e96) chore(legal): @mavaa has signed the CLA — _@charmcli_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
