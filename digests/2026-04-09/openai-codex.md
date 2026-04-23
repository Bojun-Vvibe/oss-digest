# openai/codex — 2026-04-09

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-08T23:59:59.000Z → 2026-04-09T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is realtime/WebRTC becoming the default experience, alongside a steady stream of TUI quality-of-life fixes and app-server plumbing. No releases, PRs, or issues surfaced in the window — this is a commits-only day (26 merges to `main`).

**Realtime goes WebRTC by default.** `aibrahim-oai` flipped realtime sessions to the v2 WebRTC path with `gpt-realtime-1.5` as the default model (#17188, #17183), moved the default realtime prompt into core so omitted start prompts inherit it (#17165), added voice selection for `realtime/start` with v1/v2 voice lists (#17176), and landed an app-server WebRTC e2e harness covering v1 handoff and v2 codex tool delegation over sideband (#17093). If you only read one cluster, read these.

**TUI polish.** `Ctrl+O` is now a copy hotkey alongside `/copy`, with hardened copy-as-markdown behavior (#16966). The statusline now renders context as a meter rather than an "X% left" value that looked like quota (#17170). Truncated exec output shows an inline `ctrl+t to view transcript` hint (#17076). `/resume <id|name>` is supported from the TUI (#17222), and stale thread-name resume lookups that shadowed older saved threads are fixed (#16646). Source builds (version 0.0.0) no longer get spurious update prompts (#17186, addresses #17166). Warp is recognized for OSC 9 notifications (#17174), and a new config lets terminal/IDE hosts opt into in-focus desktop notifications (#17175).

**App-server / core.** Turn-scoped `clientMetadata` is now forwarded to Responses instead of being dropped (#16009); empty base-instruction overrides are omitted from serialized Responses (#17258); shared receivers replace needless `mut` in message processors (#17256, plus a clippy fix #17262). Codex Apps tools declaring `_meta["openai/fileParams"]` are bridged through the OpenAI file upload flow (#15197). MCP tool search expands to custom MCPs (#16944). Memory extensions land from external contributor `kliu128` (#16276). Unified-exec now skips local shell snapshots for remote exec-server sessions (#17217). Steering is deferred until after post-compaction sampling to avoid losing buffered input (#17163). Announcements gain per-OS/plan targeting with date windows (#17226). Hooks are no longer Windows-gated — they work (#17268).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`a446451`](https://github.com/openai/codex/commit/a44645129a379a4325a16226ee7d233a1f57f897) remove windows gate that disables hooks (#17268) — _@iceweasel-oai_
- [`ecca342`](https://github.com/openai/codex/commit/ecca34209d505b77783b12df336bdcb725d439ae) Omit empty app-server instruction overrides (#17258) — _@aibrahim-oai_
- [`ff1ab61`](https://github.com/openai/codex/commit/ff1ab61e4fa1a8dd8e18ffac854798f579dddd08) app-server: Fix clippy by removing extra `mut` (#17262) — _@euroelessar_
- [`ef330ef`](https://github.com/openai/codex/commit/ef330eff6d52a037e77a7bde042694b2a54492df) feat(tui): Ctrl+O copy hotkey and harden copy-as-markdown behavior (#16966) — _@fcoury-oai_
- [`d7f99b0`](https://github.com/openai/codex/commit/d7f99b0fa6e3e66e1ede70e205aa506ea3122b51) [mcp] Expand tool search to custom MCPs. (#16944) — _@mzeng-openai_
- [`545f3da`](https://github.com/openai/codex/commit/545f3daba062a0c59ddf4ae8a23ed73f3ffea133) app-server: Use shared receivers for app-server message processors (#17256) — _@euroelessar_
- [`a92a508`](https://github.com/openai/codex/commit/a92a5085bd01203737876915d609aac7f64b4638) Forward app-server turn clientMetadata to Responses (#16009) — _@neil-oai_
- [`244b15c`](https://github.com/openai/codex/commit/244b15c95dc922a9a874ccae48fa1465706d0c99) feat: add Codex Apps sediment file remapping (#15197) — _@caseychow-oai_
- [`25a0f67`](https://github.com/openai/codex/commit/25a0f6784d359c2d0308ce98ea3660413431cdf1) [codex] Show ctrl + t hint on truncated exec output in TUI (#17076) — _@mom-oai_
- [`7ab825e`](https://github.com/openai/codex/commit/7ab825e047555be1d7d7d06f41adb66652e40158) refactor(proxy): clarify sandbox block messages (#17168) — _@viyatb-oai_
- [`76de99f`](https://github.com/openai/codex/commit/76de99ff25fcb927571e918dc13861b46cb63d4b) [codex] add memory extensions (#16276) — _@kliu128_
- [`12f0e0b`](https://github.com/openai/codex/commit/12f0e0b0ebcfc745226dbb918d0c55e55f409f0c) chore: merge name and title (#17116) — _@jif-oai_
- [`c0b5d8d`](https://github.com/openai/codex/commit/c0b5d8d24a16d937db2cd9064e24886e0e94960a) Skip local shell snapshots for remote unified exec (#17217) — _@jif-oai_
- [`598d6ff`](https://github.com/openai/codex/commit/598d6ff0561f6372c69227bac719e76f39928e87) Render statusline context as a meter (#17170) — _@etraut-openai_
- [`9f6f2c8`](https://github.com/openai/codex/commit/9f6f2c84c1dc65a1d9cf8378657f27f4cfea002b) feat: advanced announcements per OS and plans (#17226) — _@jif-oai_
- [`6c5471f`](https://github.com/openai/codex/commit/6c5471feb20f8a4b34f2efb9239e4e641149e77a) feat: /resume per ID/name (#17222) — _@jif-oai_
- [`8f705b0`](https://github.com/openai/codex/commit/8f705b070270965eda3347733dd0af8a94c22cf4) [codex] Defer steering until after sampling the model post-compaction (#17163) — _@jgershen-oai_
- [`84a24fe`](https://github.com/openai/codex/commit/84a24fe333714d95d6dfb18ecd2836b241c2dded) make webrtc the default experience (#17188) — _@aibrahim-oai_
- [`23f4cd8`](https://github.com/openai/codex/commit/23f4cd8459bcc254b4f6f10456f5a12a3eb4faaa) Skip update prompts for source builds (#17186) — _@etraut-openai_
- [`1fdb695`](https://github.com/openai/codex/commit/1fdb695e427b08c77e28e12c4d90cb46df49f7c9) Default realtime startup to v2 model (#17183) — _@aibrahim-oai_
- [`6dc5391`](https://github.com/openai/codex/commit/6dc5391c7c38a903139aa2bb8e8e3a5e588f2b39) Add TUI notification condition config (#17175) — _@etraut-openai_
- [`2f9090b`](https://github.com/openai/codex/commit/2f9090be62723ab15e3e8821c846eed1ebf9149c) Add realtime voice selection (#17176) — _@aibrahim-oai_
- [`4c2a1ae`](https://github.com/openai/codex/commit/4c2a1ae31b31c7a2dcb2a3e4e7ecdb64765f9c57) Move default realtime prompt into core (#17165) — _@aibrahim-oai_
- [`36586ea`](https://github.com/openai/codex/commit/36586eafedf31b59306fe288d44ff6b218b38598) Fix stale thread-name resume lookups (#16646) — _@etraut-openai_
- [`4dca906`](https://github.com/openai/codex/commit/4dca906e197b79080a02a55862f1ec58333a400a) Support Warp for OSC 9 notifications (#17174) — _@etraut-openai_
- [`22d07e7`](https://github.com/openai/codex/commit/22d07e7f8f5d7dee4444413c1e5235fe73a4bec1) Add WebRTC realtime app-server e2e tests (#17093) — _@aibrahim-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
