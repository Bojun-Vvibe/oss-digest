# charmbracelet/crush — 2026-02-25

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-02-24T23:59:59.000Z → 2026-02-25T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v0.45.1 patch release ships four crash/UI fixes

Crush cut a stability patch release **v0.45.1** today, bundling the day's merged fixes. It's a "small patch" framed as bridging to larger upcoming work, so most readers can skim unless they're hitting one of the specific crashes below.

The headline fixes are two distinct nil-pointer panics. [#2307](https://github.com/charmbracelet/crush/pull/2307) (andreynering) initializes the LSP manager `callback` field, which was left `nil` when the app returned early before `SetCallback`, causing a segfault in `startServer` — this was reported against issue #2255. [#2310](https://github.com/charmbracelet/crush/pull/2310) (meowgorithm) guards the event logger against a panic that occasionally fired when the error being logged was itself a nil pointer. Both are worth reading if you've seen unexplained crashes.

The other substantive merge is [#2305](https://github.com/charmbracelet/crush/pull/2305) (huaiyuWangh), which fixes three LSP client lifecycle bugs in one go: a dead-client leak where a failed `Initialize` left the client in the map and permanently blocked retries; `openKeyConfigFiles` using `os.Getwd()` instead of the client's own `cwd`; and `HandleServerMessage` logging zero-value struct fields instead of the real unmarshal error. Anyone debugging LSP behavior should read this one — it's the most informative diff of the day.

Rounding out the release: [#2306](https://github.com/charmbracelet/crush/pull/2306) fixes status-bar error messages that were wrapping instead of truncating (padding wasn't accounted for, and truncation happened before wrap was set), and [#2304](https://github.com/charmbracelet/crush/pull/2304) adds telemetry logging when `crush stats` is invoked.

One notable PR remains open: [#2245](https://github.com/charmbracelet/crush/pull/2245) (zhengxiexie) adds a `hide_status` TUI option and a "Toggle Status Bar" command-palette entry, reclaiming the bottom row for content. It saw activity today but hasn't merged — worth tracking if you want a more minimal TUI.

No new issues were filed in the window, and supporting commits were limited to a catwalk dep bump (c9fec16) and a winget-PR CI notification (8d6433b).

## Releases

- **[v0.45.1](https://github.com/charmbracelet/crush/releases/tag/v0.45.1)** — v0.45.1 _by @github-actions[bot] at 2026-02-25T21:14:43Z_
  > # Small patch
  > 
  > Small release with a few bug fixes to make Crush more stable for you. 💪 
  > 
  > We're working on some nice stuff to be released in the near future. Stay tuned!
  > Charm
  > 
  > ## Changelog
  > ### Fixed
  > * 4018154c7aacbc73aae07decd239b71c450b7ed9: fix(event): guard against panic (#2310) (@meowgorithm)
  > * 62b8c0b3def656ebbdb4f2e39e5ea4e97dfbd975: fix(lsp): fix multiple bugs in lsp client lifecycle and handlers (#2305) (@huaiyuWangh)
  > * 655ce65564a2813bae27d6be0a7562b6a28e60e4: fix(ui): truncate status…


## Merged PRs

- [#2310](https://github.com/charmbracelet/crush/pull/2310) **fix(event): guard against panic** — _by @meowgorithm, merged 2026-02-25T20:46:38Z_
- [#2304](https://github.com/charmbracelet/crush/pull/2304) **chore(events): log when crush stats is called** — _by @meowgorithm, merged 2026-02-25T16:38:28Z_
- [#2306](https://github.com/charmbracelet/crush/pull/2306) **fix(ui): truncate status bar error messages that would otherwise wrap** — _by @meowgorithm, merged 2026-02-25T16:38:02Z_
- [#2305](https://github.com/charmbracelet/crush/pull/2305) **fix(lsp): fix multiple bugs in LSP client lifecycle and handlers** — _by @huaiyuWangh, merged 2026-02-25T13:19:44Z_
- [#2307](https://github.com/charmbracelet/crush/pull/2307) **fix: initialize lsp manager callback to prevent nil pointer panic** — _by @andreynering, merged 2026-02-25T13:18:24Z_


## Open PRs (new or updated)

- [#2245](https://github.com/charmbracelet/crush/pull/2245) **feat: add toggle status bar option** — _by @zhengxiexie, updated 2026-02-25T16:39:32Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`234a87c`](https://github.com/charmbracelet/crush/commit/234a87c50f05c1ead87059cf7b8aadde2556df9f) v0.45.1 — _@andreynering_
- [`8d6433b`](https://github.com/charmbracelet/crush/commit/8d6433b3999b1caaa3b7ea667c8f136a16182395) ci: notify me on winget prs — _@andreynering_
- [`c9fec16`](https://github.com/charmbracelet/crush/commit/c9fec16209f049eb1940eed03c0082817d914c24) chore: update catwalk — _@andreynering_
- [`4018154`](https://github.com/charmbracelet/crush/commit/4018154c7aacbc73aae07decd239b71c450b7ed9) fix(event): guard against panic (#2310) — _@meowgorithm_
- [`3994293`](https://github.com/charmbracelet/crush/commit/3994293474aa5b5c60e6f79a82d00e4e68edebd5) chore(events): log when crush stats is called — _@meowgorithm_
- [`655ce65`](https://github.com/charmbracelet/crush/commit/655ce65564a2813bae27d6be0a7562b6a28e60e4) fix(ui): truncate status messages that would otherwise wrap (#2306) — _@meowgorithm_
- [`62b8c0b`](https://github.com/charmbracelet/crush/commit/62b8c0b3def656ebbdb4f2e39e5ea4e97dfbd975) fix(lsp): fix multiple bugs in lsp client lifecycle and handlers (#2305) — _@huaiyuWangh_
- [`643919d`](https://github.com/charmbracelet/crush/commit/643919d24d8e517faeaa81c57241303615db475a) fix: initialize lsp manager callback to prevent nil pointer panic (#2307) — _@andreynering_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
