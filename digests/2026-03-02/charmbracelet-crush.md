# charmbracelet/crush — 2026-03-02

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-01T23:59:59.000Z → 2026-03-02T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headline today is the **v0.46.2 patch release** (published 2026-03-02), a small bugfix bundle covering a UI scroll fix and an LSP edge case. Worth pulling if you've been hitting either.

The scroll fix (#2336, by @aymanbagabas) attempts to fully resolve the long-standing agent scroll-follow issue — the view should now stick to the bottom when the follow flag is set, potentially closing #2119. Anyone who reported scroll drift during streaming output should retest.

The LSP fix (#2322, by repeat contributor @huaiyuWangh) corrects `rangesOverlap` to treat LSP ranges as half-open intervals `[start, end)` per spec. Previously, two adjacent edits like `[0,5)` and `[5,10)` were rejected as overlapping, breaking otherwise valid workspace edits. The boundary check moved from `>` to `>=`, with new unit tests covering adjacent/overlapping/contained/empty cases. Small but high-signal for anyone debugging failed multi-edit refactors.

Beyond the release, the notable feature merge is **#2189** (`feat(shell): add blocking wait option to job_output tool`, by @portertech), which adds a `wait bool` parameter to the `job_output` tool. When true, it calls `WaitContext(ctx)` to block until a background shell completes (with proper context cancellation), rather than returning whatever output exists so far. This makes agent workflows that depend on background-job completion considerably more ergonomic — worth reading if you're building tool pipelines.

Dependency hygiene: #2341 bumps four deps in the `all` group, including `charmbracelet/x/powernap` 0.1.0→0.1.1, `go-git/v5`, the MCP `go-sdk`, and `golang.org/x/net`. #2340 bumps `actions/setup-go` to 6.3.0. Recent #2326 (merged 2026-02-28) brought in catwalk v0.25.0, adding `gemini-3.1-*` and `claude-*-4.6` to the vertexai provider definitions.

Three PRs were closed without merging: #2330 (32-bit atomic alignment fix for shell, ref #1449), #2328 (Ctrl+Q quick-quit for shell, ref #2283), and #2342 (a Qiniu Cloud provider addition that skipped the discussion/CONTRIBUTING flow). No new issues or open PRs in window.

## Releases

- **[v0.46.2](https://github.com/charmbracelet/crush/releases/tag/v0.46.2)** — v0.46.2 _by @github-actions[bot] at 2026-03-02T20:22:39Z_
  > # Tiny patch
  > 
  > A very small patch to fix scroll not always following bottom when it should.
  > 
  > Our favorite contributor @huaiyuWangh also continues to deliver good patches, this time a small fix for an edge-case on LSPs integration.
  > 
  > Have a great week!
  > Charm ✨ 
  > 
  > ## Changelog
  > ### Fixed
  > * 4596b02f5617c29fd7e8a3768c49be71fd68098b: fix(lsp): treat adjacent ranges as non-overlapping per LSP spec (#2322) (@huaiyuWangh)
  > * 8762efc8fa0970883f807a5f564b5ef8b6042e4c: fix(ui): follow scroll when at bottom (#23…


## Merged PRs

- [#2189](https://github.com/charmbracelet/crush/pull/2189) **feat(shell): add blocking wait option to job_output tool** — _by @portertech, merged 2026-03-02T20:22:53Z_
- [#2340](https://github.com/charmbracelet/crush/pull/2340) **chore(deps): bump actions/setup-go from 6.2.0 to 6.3.0 in the all group** — _by @dependabot[bot], merged 2026-03-02T20:12:43Z_
- [#2336](https://github.com/charmbracelet/crush/pull/2336) **fix(ui): follow scroll when at bottom** — _by @aymanbagabas, merged 2026-03-02T20:02:40Z_
- [#2322](https://github.com/charmbracelet/crush/pull/2322) **fix(lsp): treat adjacent ranges as non-overlapping per LSP spec** — _by @huaiyuWangh, merged 2026-03-02T17:40:55Z_
- [#2341](https://github.com/charmbracelet/crush/pull/2341) **chore(deps): bump the all group with 4 updates** — _by @dependabot[bot], merged 2026-03-02T13:36:43Z_
- [#2326](https://github.com/charmbracelet/crush/pull/2326) **chore(deps): bump `charm.land/catwalk` from `v0.24.0` to `v0.25.0`** — _by @detro, merged 2026-02-28T10:07:58Z_


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#2330](https://github.com/charmbracelet/crush/pull/2330) **fix(shell): move completedAt field first for 64-bit atomic alignment …** — _by @Iflgit, closed 2026-03-02T17:54:54Z_
- [#2328](https://github.com/charmbracelet/crush/pull/2328) **feat: Quick Quit Options for Shell** — _by @khareyash05, closed 2026-03-02T17:51:24Z_
- [#2342](https://github.com/charmbracelet/crush/pull/2342) **feat:添加QiniuCloud作为provider** — _by @wind-4, closed 2026-03-02T14:05:12Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`9ec46b8`](https://github.com/charmbracelet/crush/commit/9ec46b8d439646a505018576e7197b2daacfb7b3) feat(shell): add blocking wait option to job_output tool (#2189) — _@portertech_
- [`da2eef2`](https://github.com/charmbracelet/crush/commit/da2eef2a60fc26432d3c71d0e6d7c1382f663a23) chore(deps): bump actions/setup-go from 6.2.0 to 6.3.0 in the all group (#2340) — _@dependabot[bot]_
- [`59031cb`](https://github.com/charmbracelet/crush/commit/59031cbabfb9bc7d92a79a0be338b7ba00c66a32) v0.46.2 — _@andreynering_
- [`8762efc`](https://github.com/charmbracelet/crush/commit/8762efc8fa0970883f807a5f564b5ef8b6042e4c) fix(ui): follow scroll when at bottom (#2336) — _@aymanbagabas_
- [`4596b02`](https://github.com/charmbracelet/crush/commit/4596b02f5617c29fd7e8a3768c49be71fd68098b) fix(lsp): treat adjacent ranges as non-overlapping per LSP spec (#2322) — _@huaiyuWangh_
- [`c843441`](https://github.com/charmbracelet/crush/commit/c843441f1e9b66ae4242925f81ccb135074ed0f3) chore(deps): bump the all group with 4 updates (#2341) — _@dependabot[bot]_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
