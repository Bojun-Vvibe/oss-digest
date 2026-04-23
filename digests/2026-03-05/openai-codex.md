# openai/codex — 2026-03-05

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-04T23:59:59.000Z → 2026-03-05T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is that **Fast mode is now on by default** (#13450), with supporting TUI changes: a new speed row in the session header toggled via `/fast` (#13446), rotating startup promos that surface Fast mode (#13438), and copy updated from "3X" to "2X plan usage" (#13515). Anyone on paid plans should expect different default behavior.

Sandboxing got meaningful hardening. On Linux, bubblewrap invocations now always pass `--unshare-user` instead of relying on bwrap's auto-userns detection (#13624). On macOS, Seatbelt network and unix-socket handling improved for proxy-managed sessions, including dual-stack local binding (#12702). Relatedly, skill permission profiles are now merged into the turn sandbox for zsh-fork execs (#13496), and unified exec was refactored to prepare for the zsh-fork backend (#13392).

The `js_repl` tool saw three security/UX fixes worth noting: `emitImage` now only accepts `data:` URLs to block untrusted external URL forwarding (#13507); failed cells preserve prior bindings plus current-cell bindings (#13482); and dynamic imports of relative/absolute local ESM `.js`/`.mjs` files are now supported while keeping bare imports on the native resolver (#13437).

On the app-server / plugins front, MCP elicitations are now first-class in the v2 API via `mcpServer/elicitation/request` (#13425); plugin capabilities (mcps/apps) are tracked and surfaced into `user_instructions` (#13433); marketplace.json gains a local source plus install endpoint (#13422); and the Apps-after-resume bug is fixed (#13533). SIGTERM is now treated like ctrl-c for graceful app-server shutdown (#13594), and `thread.resume` reuses persisted `gitInfo` rather than rebuilding from the working tree (#13504).

Other notable items: trace_id is persisted per turn in `RolloutItem::TurnContext` for durable trace linkage (#13602); diagnostics surface earlier in the workflow (#13604); a new "skills for artifacts" feature plus polish/binding/clean for the package manager (#13525, #13573, #13571, #13577); image-gen client-side processing wiring (#13512); a `web_search_tool_type` field on model_info to gate which models can use web_search with images (#13538); and reduced realtime-audio submission log noise with better non-audio event logging (#13539, #13516). Several routine dependabot bumps round out the day.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`9203f17`](https://github.com/openai/codex/commit/9203f17b0e3968a8c0761f869b1f0879a3b302b5) Improve macOS Seatbelt network and unix socket handling (#12702) — _@viyatb-oai_
- [`9950b5e`](https://github.com/openai/codex/commit/9950b5e265dbf94ae8b605c8ceee714875637e9d) fix(linux-sandbox): always unshare bwrap userns (#13624) — _@viyatb-oai_
- [`aa3fe8a`](https://github.com/openai/codex/commit/aa3fe8abf841776d328425ac3d329bc38347fb9d) feat(core): persist trace_id for turns in RolloutItem::TurnContext (#13602) — _@owenlin0_
- [`cfbbbb1`](https://github.com/openai/codex/commit/cfbbbb1ddac35efdd5812196404d3582c2edb115) Harden js_repl emitImage to accept only data: URLs (#13507) — _@fjord-oai_
- [`a63624a`](https://github.com/openai/codex/commit/a63624a61a2fa50d11f8863f9225b9f861062f3f) feat: merge skill permission profiles into the turn sandbox for zsh-fork execs (#13496) — _@celia-oai_
- [`9fcbbeb`](https://github.com/openai/codex/commit/9fcbbeb5aedb87632d0169f5e0c0bd351fb8a2ad) [diagnostics] show diagnostics earlier in workflow (#13604) — _@rhan-oai_
- [`657841e`](https://github.com/openai/codex/commit/657841e7f5054b1b12d245b0d3b8c3e2e5f533fd) Persist initialized js_repl bindings after failed cells (#13482) — _@fjord-oai_
- [`ee2e3c4`](https://github.com/openai/codex/commit/ee2e3c415b93207695fcc0b7eb07c9b3777164e2) Fix codespell warning about pre-selects (#13605) — _@fjord-oai_
- [`1980b6c`](https://github.com/openai/codex/commit/1980b6ce00ff8a03fffb670e01077f5dafd91729) treat SIGTERM like ctrl-c for graceful shutdown (#13594) — _@maxj-oai_
- [`926b2f1`](https://github.com/openai/codex/commit/926b2f19e8c2a4c01b3a87bccd8ef8a1c23b22ab) feat(app-server): support mcp elicitations in v2 api (#13425) — _@owenlin0_
- [`5e92f4a`](https://github.com/openai/codex/commit/5e92f4af12308a8092d9e5e0475fcd756d768505) chore: ultra-clean artifacts (#13577) — _@jif-oai_
- [`0cc6835`](https://github.com/openai/codex/commit/0cc6835416fb77d57b63ca4d02985d4aa2861dc2) feat: ultra polish package manager (#13573) — _@jif-oai_
- [`a246dbf`](https://github.com/openai/codex/commit/a246dbf9d11d06d4a2365e20052eb29a89cb2312) feat: skills for artifacts (#13525) — _@jif-oai_
- [`f304b2e`](https://github.com/openai/codex/commit/f304b2ef62eca75d821c2e88eba7094e3bd31adf) feat: bind package manager (#13571) — _@jif-oai_
- [`b4cb989`](https://github.com/openai/codex/commit/b4cb989563e68639c2bdc748c20c965ba1d830ea) refactor: prepare unified exec for zsh-fork backend (#13392) — _@bolinfest_
- [`1ce1712`](https://github.com/openai/codex/commit/1ce1712aebb457febfe1bbb96b9b33f8a617cec2) [tui] Show speed in session header (#13446) — _@pash-openai_
- [`03d55f0`](https://github.com/openai/codex/commit/03d55f0e6f5a5006270340df7827a91972b1caa4) chore: add web_search_tool_type for image support (#13538) — _@sayan-oai_
- [`8f828f8`](https://github.com/openai/codex/commit/8f828f8a43d8325b83ba8a0ba1fbaa17c44e40d8) Reduce realtime audio submission log noise (#13539) — _@aibrahim-oai_
- [`ff0341d`](https://github.com/openai/codex/commit/ff0341dc94f1c476d7ca525b7dc5c379868aedae) [js_repl] Support local ESM file imports (#13437) — _@aaronl-openai_
- [`3336639`](https://github.com/openai/codex/commit/33366392133a8b1d9026acf528cde493519d6352) [apps] Fix the issue where apps is not enabled after codex resume. (#13533) — _@mzeng-openai_
- [`3eb9115`](https://github.com/openai/codex/commit/3eb9115cefbee2035e0e95ef744e33c3b8aacb51) [tui] Update fast mode plan usage copy (#13515) — _@pash-openai_
- [`3284bde`](https://github.com/openai/codex/commit/3284bde48ec8644f1e3b205c1307964ca406661b) [tui] rotate paid promo tips to include fast mode (#13438) — _@pash-openai_
- [`394e538`](https://github.com/openai/codex/commit/394e53864013a25dc60cc924c62a58385b0a4fe7) [core] Enable fast mode by default (#13450) — _@pash-openai_
- [`d443989`](https://github.com/openai/codex/commit/d44398905bcc89d5b5cf1a5fc1c6410d8c99af80) feat: track plugins mcps/apps and add plugin info to user_instructions (#13433) — _@sayan-oai_
- [`be5e8fb`](https://github.com/openai/codex/commit/be5e8fbd379481275d0b7c3823a57a537dac13ec) chore(deps): bump actions/upload-artifact from 6 to 7 (#13207) — _@dependabot[bot]_
- [`22f4113`](https://github.com/openai/codex/commit/22f4113ac15673fe7e70f9651fa9f19df739d2a1) Preserve persisted thread git info in resume (#13504) — _@joeytrasatti-openai_
- [`95aad87`](https://github.com/openai/codex/commit/95aad8719fa03459a5307ca8fa43df53eca734d8) chore(deps): bump serde_with from 3.16.1 to 3.17.0 in /codex-rs (#13209) — _@dependabot[bot]_
- [`14ac823`](https://github.com/openai/codex/commit/14ac823aefdce8d7bff0033921c4fb46df301827) chore(deps): bump strum_macros from 0.27.2 to 0.28.0 in /codex-rs (#13210) — _@dependabot[bot]_
- [`229e6d0`](https://github.com/openai/codex/commit/229e6d0347b0a8d9aed5a10761a0c6a155f54fe8) image-gen-event/client_processing (#13512) — _@won-openai_
- [`84ba9f8`](https://github.com/openai/codex/commit/84ba9f8e74b42bde7a03e7164ed754ca5b012517) chore(deps): bump actions/download-artifact from 7 to 8 (#13208) — _@dependabot[bot]_
- [`7b08890`](https://github.com/openai/codex/commit/7b088901c256c1f8d9bdc95ee60d8977119e6ba5) Log non-audio realtime events (#13516) — _@aibrahim-oai_
- [`1e877cc`](https://github.com/openai/codex/commit/1e877ccdd2ecf19936398120400bcc813eded06e) plugin: support local-based marketplace.json + install endpoint. (#13422) — _@xl-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
