# openai/codex — 2026-04-13

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-12T23:59:59.000Z → 2026-04-13T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy infrastructure-focused day with no releases, issues, or PR metadata — just 29 merged commits. The headline is continued hardening of the **exec-server** subsystem: filesystem RPCs now route through a sandboxed `codex-fs` arg0 helper ([#17294](https://github.com/openai/codex/pull/17294)), with follow-ups stabilizing flaky CI tests ([#17605](https://github.com/openai/codex/pull/17605), [#17671](https://github.com/openai/codex/pull/17671), [#17640](https://github.com/openai/codex/pull/17640)) and a new `envPolicy` field that builds the remote exec environment from server-side shell policy instead of inheriting client env ([#17216](https://github.com/openai/codex/pull/17216)).

On the app-server / API surface, `pakrym-oai` landed a new `turn/inject_items` v2 request that appends raw Responses API items to a loaded thread without starting a turn ([#17703](https://github.com/openai/codex/pull/17703)), and fixed thread unloading so actively-running threads aren't dropped when the last connection disconnects ([#17398](https://github.com/openai/codex/pull/17398)). MCP gained a `supports_parallel_tool_calls` flag enabling models to emit parallel MCP tool calls ([#17667](https://github.com/openai/codex/pull/17667)) and MCP wall time is now surfaced to the model ([#17406](https://github.com/openai/codex/pull/17406)).

TUI got several fixes worth noting if you're tracking regressions: a compilation break from the recent release was patched ([#17691](https://github.com/openai/codex/pull/17691)); duplicate compaction/terminal-wait events are suppressed ([#17601](https://github.com/openai/codex/pull/17601)) with a follow-up implementing the missing compaction replay handler ([#17657](https://github.com/openai/codex/pull/17657)); `/status` rate-limit timestamps now wrap in narrow layouts ([#17481](https://github.com/openai/codex/pull/17481)); and custom tool output cleanup on stream failure was fixed ([#17470](https://github.com/openai/codex/pull/17470)).

Other notable items: realtime mirrored user turns are now capped at the 300-token budget ([#17685](https://github.com/openai/codex/pull/17685)); forked agent spawns preserve parent model config ([#17247](https://github.com/openai/codex/pull/17247)); plan-mode questionnaires emit dedicated prompt notifications ([#17417](https://github.com/openai/codex/pull/17417)); the memory Phase 2 consolidation model was switched to `gpt-5.4` ([#17384](https://github.com/openai/codex/pull/17384)) and the memory endpoint was disabled ([#17626](https://github.com/openai/codex/pull/17626)); a Windows sandbox fix avoids errors when combining `protocol = ANY` with `SetRemotePorts` ([#17669](https://github.com/openai/codex/pull/17669)); and a regression making `thread/start` fail on trust-persistence errors was reverted ([#17595](https://github.com/openai/codex/pull/17595), addressing #17593).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`280a4a6`](https://github.com/openai/codex/commit/280a4a6d42c150fe5fa5133e7f265fe59aeec781) Stabilize exec-server filesystem tests in CI (#17671) — _@starr-openai_
- [`d4be06a`](https://github.com/openai/codex/commit/d4be06adea2bea0f4ed7b2fa81ad6d8dcb603c7d) Add turn item injection API (#17703) — _@pakrym-oai_
- [`937dd38`](https://github.com/openai/codex/commit/937dd3812dcdf89d9795d1ab8538ec0f1bfdcd07) Add `supports_parallel_tool_calls` flag to included mcps (#17667) — _@josiah-openai_
- [`0e31dc0`](https://github.com/openai/codex/commit/0e31dc0d4a4cd6b81f3181036dcf6395ea8069cb) change realtime tool description (#17699) — _@aibrahim-oai_
- [`ec0133f`](https://github.com/openai/codex/commit/ec0133f5f8b1cf1be347e7d40bf84c8469aa035f) Cap realtime mirrored user turns (#17685) — _@aibrahim-oai_
- [`ecdd733`](https://github.com/openai/codex/commit/ecdd733a480f5d136943a401f7f81555e1be2b86) Remove unnecessary tests (#17395) — _@kliu128_
- [`ec72b1c`](https://github.com/openai/codex/commit/ec72b1ced9f38a7e44c2c3302fad86f8f5081452) Update phase 2 memory model to gpt-5.4 (#17384) — _@kliu128_
- [`7c43f8b`](https://github.com/openai/codex/commit/7c43f8bb5e263c8509905fce2692909d2c15cc20) Fix tui compilation (#17691) — _@davidhao3300_
- [`7b5e1ad`](https://github.com/openai/codex/commit/7b5e1ad3dcd9bf94ad9ac58b8ef18d853aabf21c) only specify remote ports when the rule needs them (#17669) — _@iceweasel-oai_
- [`a5507b5`](https://github.com/openai/codex/commit/a5507b59c494a75fb094dbfc22c66e7b6527f2a9) app-server: Only unload threads which were unused for some time (#17398) — _@euroelessar_
- [`d905376`](https://github.com/openai/codex/commit/d905376628cb0cdf66beaac57063dd09650b2b6e) feat: Avoid reloading curated marketplaces for tool-suggest discovera… (#17638) — _@jif-oai_
- [`0131f99`](https://github.com/openai/codex/commit/0131f99fd5d166cdeb35219474f4e2e65480afd2) Include legacy deny paths in elevated Windows sandbox setup (#17365) — _@iceweasel-oai_
- [`46a266c`](https://github.com/openai/codex/commit/46a266cd6ae16fbc13f193d3e7e589ce7e23969c) feat: disable memory endpoint (#17626) — _@jif-oai_
- [`ac82443`](https://github.com/openai/codex/commit/ac82443d073f7f9a2248bad51bae2fa424ef4946) Use AbsolutePathBuf in skill loading and codex_home (#17407) — _@pakrym-oai_
- [`d25a982`](https://github.com/openai/codex/commit/d25a9822a75a04b9c5552530381cf93f3f768fa5) Do not fail thread start when trust persistence fails (#17595) — _@etraut-openai_
- [`313ad29`](https://github.com/openai/codex/commit/313ad29ad794c1b177f3cf74bbf1461ca88eb0e0) Fix TUI compaction item replay (#17657) — _@etraut-openai_
- [`7c797c6`](https://github.com/openai/codex/commit/7c797c6544ae97d3ebfac52d31a00d72f5dba5a3) Suppress duplicate compaction and terminal wait events (#17601) — _@etraut-openai_
- [`370be36`](https://github.com/openai/codex/commit/370be363f1c7b3c43008d1f5aa49a2ea05b2d4f1) Wrap status reset timestamps in narrow layouts (#17481) — _@etraut-openai_
- [`ce5ad7b`](https://github.com/openai/codex/commit/ce5ad7b295afbaa763b595eef5501ce4c3eb84ab) Emit plan-mode prompt notifications for questionnaires (#17417) — _@etraut-openai_
- [`a5783f9`](https://github.com/openai/codex/commit/a5783f90c936cb2ce51e8a4a98bdc15b1a88dc7c) Fix custom tool output cleanup on stream failure (#17470) — _@etraut-openai_
- [`776246c`](https://github.com/openai/codex/commit/776246c3f5f931a72ebe41f52ef719e3b413371d) Make forked agent spawns keep parent model config (#17247) — _@friel-openai_
- [`3f62b5c`](https://github.com/openai/codex/commit/3f62b5cc6166ee88c3b3994f6a442185c0ab2c8c) fix: dedup compact (#17643) — _@jif-oai_
- [`49ca7c9`](https://github.com/openai/codex/commit/49ca7c9f24ede84ce50de837516070761385c1a9) fix: stability exec server (#17640) — _@jif-oai_
- [`86bd0bc`](https://github.com/openai/codex/commit/86bd0bc95cf4a7835368073ee8f51b0c6ff9ff5f) nit: change consolidation model (#17633) — _@jif-oai_
- [`bacb92b`](https://github.com/openai/codex/commit/bacb92b1d7466dd26510ead04787034d41c1903a) Build remote exec env from exec-server policy (#17216) — _@jif-oai_
- [`4ffe6c2`](https://github.com/openai/codex/commit/4ffe6c2ce63959b860129b3767cddf38e5f2597c) feat: ignore keyring on 0.0.0 (#17221) — _@jif-oai_
- [`6550007`](https://github.com/openai/codex/commit/6550007cca50c6d34408b0d3aa15e9923266aef0) Stabilize exec-server process tests (#17605) — _@etraut-openai_
- [`d626dc3`](https://github.com/openai/codex/commit/d626dc38950fb40a1a5ad0a8ffab2485e3348c53) Run exec-server fs operations through sandbox helper (#17294) — _@starr-openai_
- [`7c1e41c`](https://github.com/openai/codex/commit/7c1e41c8b6dc5dd0068759544ba448c459af4b21) Add MCP tool wall time to model output (#17406) — _@pakrym-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
