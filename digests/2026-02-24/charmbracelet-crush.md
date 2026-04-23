# charmbracelet/crush — 2026-02-24

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-02-23T23:59:59.000Z → 2026-02-24T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v0.45.0 ships GPT 5.3 Codex and Gemini 3+ thinking levels

The headline today is the **v0.45.0 release** ([tag](https://github.com/charmbracelet/crush/releases/tag/v0.45.0)), which lands same-day support for OpenAI's just-announced GPT 5.3 Codex (available via the model picker) and Gemini 3/3.1 thinking levels (#2301). The Gemini work is coordinated across the Charm stack via companion PRs in `fantasy` and `catwalk`, and pulled in here through dependency bumps to catwalk v0.22.0 (`a439237`) and fantasy v0.10.0 (`407ab1f`).

Alongside the model work, the release rolls up several stability fixes worth noting:

- **App lifecycle hardening** (#2298): fixes a goroutine leak in `RunNonInteractive` (missing `return` after error send), restores the full 5-second graceful shutdown window by using `context.WithoutCancel` instead of the already-cancelled `globalCtx`, and makes model name matching case-insensitive.
- **MCP resilience** (`dff955f`, merging #2239): MCP clients no longer fail wholesale when a server advertises the resources capability but doesn't implement `resources/list` — the "Method not found" response is now handled gracefully.
- **UI toolchain bump** (#2299): lip gloss, bubble tea, and bubbles are all moved to v2.0.0. Worth a closer look if you maintain downstream forks or custom TUI components.

On the open-PR side, three changes are in flight and worth tracking:

- #2274 replaces the current diff implementation with Git's Myers algorithm via `sergi/go-diff` to fix overly aggressive diffs where single-line edits were rendered as large add/delete blocks. This is a meaningful UX fix for the diff view.
- #2293 corrects tool-call completion tracking: `Finished` was being set at creation rather than on result, which stalled chat processing and left the UI animation running.
- #2229 adds an opt-in `DisableStandaloneSSE` for `http` MCP servers that don't support the standalone SSE stream (otherwise they hang with `context canceled`).

No new issues were filed in the window. If you only read one thing, read the v0.45.0 notes; if you're debugging non-interactive runs or MCP, #2298 and `dff955f` are the fixes to scan.

## Releases

- **[v0.45.0](https://github.com/charmbracelet/crush/releases/tag/v0.45.0)** — v0.45.0 _by @github-actions[bot] at 2026-02-24T21:06:33Z_
  > # GPT 5.3 Codex + Gemini 3 thinking levels
  > 
  > On this release we're shipping a few model improvements + small fixes.
  > 
  > ## GPT 5.3 Codex
  > 
  > This was just made available via API by OpenAI today, and it's already available in Crush. Just open the model picker and choose it.
  > 
  > <img width="680" height="162" alt="Screenshot 2026-02-24 at 18 02 52" src="https://github.com/user-attachments/assets/c0e20ae9-87c4-4473-a064-62095ff24d5a" />
  > 
  > ## Gemini 3+ thinking levels
  > 
  > Gemini 3 and 3.1 not support thinking leve…


## Merged PRs

- [#2301](https://github.com/charmbracelet/crush/pull/2301) **feat: add support or gemini 3+ thinking levels** — _by @andreynering, merged 2026-02-24T20:51:28Z_
- [#2299](https://github.com/charmbracelet/crush/pull/2299) **chore: update lip gloss, bubble tea and bubbles to v2.0.0** — _by @andreynering, merged 2026-02-24T17:05:38Z_
- [#2298](https://github.com/charmbracelet/crush/pull/2298) **fix(app): fix goroutine leak, shutdown context, and model matching** — _by @huaiyuWangh, merged 2026-02-24T17:02:58Z_


## Open PRs (new or updated)

- [#2274](https://github.com/charmbracelet/crush/pull/2274) **fix: switch to Myers diff algorithm for more accurate change detection** — _by @erikstmartin, updated 2026-02-24T17:46:13Z_
- [#2293](https://github.com/charmbracelet/crush/pull/2293) **fix(agent): properly track tool execution completion state** — _by @Jaylonnet, updated 2026-02-24T16:25:45Z_
- [#2229](https://github.com/charmbracelet/crush/pull/2229) **fix(mcp): allow disabling standalone SSE stream** — _by @maxbrunet, updated 2026-02-24T01:21:07Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`d159984`](https://github.com/charmbracelet/crush/commit/d159984ed22a0c4860be3415c5ae82d61c59d680) v0.45.0 — _@andreynering_
- [`841165e`](https://github.com/charmbracelet/crush/commit/841165eba07a62808453ba68348c7a097f0d2559) feat: add support or gemini 3+ thinking levels — _@andreynering_
- [`a439237`](https://github.com/charmbracelet/crush/commit/a439237bdb5785f16505fe76190136f4db49a12b) chore: update catwalk to v0.22.0 — _@andreynering_
- [`407ab1f`](https://github.com/charmbracelet/crush/commit/407ab1f6e2564c8110c9fdb9dd4034af87e4c25c) chore: update fantasy to v0.10.0 — _@andreynering_
- [`dff955f`](https://github.com/charmbracelet/crush/commit/dff955fcdb3e613eeb35e75c433a54891e5fe6e7) fix(mcp): gracefully handle Method not found for resources/list (#2239) — _@0xarcher_
- [`c046219`](https://github.com/charmbracelet/crush/commit/c0462191b33bc25af6e096092cf57e812d2be129) chore: update lip gloss, bubble tea and bubbles to v2.0.0 (#2299) — _@andreynering_
- [`dcc67b7`](https://github.com/charmbracelet/crush/commit/dcc67b784556c01570fd7cb73020dc7fbd7a884e) fix(app): fix goroutine leak, shutdown context, and model matching (#2298) — _@huaiyuWangh_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
