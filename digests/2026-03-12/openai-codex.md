# openai/codex — 2026-03-12

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-11T23:59:59.000Z → 2026-03-12T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy day on Linux sandboxing and the new "code mode" tool runtime, with a notable behavior change and one regression fix worth reading first.

The most consequential change: bubblewrap is now the default Linux sandbox, with `use_legacy_landlock` left as the only override and `use_linux_sandbox_bwr...` removed (#13996). A compatibility shim restores the legacy `use_linux_sandbox_bwrap` flag as a no-op so older `--enable` callers still parse (#14473), and follow-ups preserve split-filesystem semantics on Linux (#14173), align core approvals with split sandbox policies (#14171), centralize FS permission precedence (#14174), and explicitly block `unified_exec` from bypassing the Windows sandbox (#14398). The "reject" approval policy was renamed to "granular" (#14516) — a user-visible config break.

Regression fix worth flagging: `codex exec --profile` overrides were being dropped on thread start/resume after #14005; #14524 restores them. Also the "Pass more params to compaction" change (#14298) was reapplied as #14521 after an earlier revert.

Code mode / nested tool execution saw a major refactor: a single per-turn worker now pumps nested tool calls through a dedicated queue (#14437), the turn-scoped `ToolCallRuntime` is reused (#14496), exec session IDs were renamed to cell IDs (#14510), code-mode tools are exposed as globals (#14517), `js_repl` now persists `codex.tool/emitImage` references across cells (#14503) and no longer hangs on U+2028/U+2029 in tool responses (#14421), MCP tool name escaping was fixed (#14491), a default 10s yield timeout was added (#14484), and a parallel-nested-tool-call regression test landed (#14494, skipped on Windows in #14505). Files moved under `tools/code_mode` (#14476).

Other notable items: a new Python app-server SDK (#14435); app-server stopped emitting legacy `codex/event/*` notifications (#14392) and trimmed unused v1 RPCs (#14394); MCP OAuth now honors advertised `scopes_supported` (#14419, fixes #8889); `search_tool` migrated to Responses API BYO-tool (#14274) and is gated on a model capability field (#14502); the `spawn_csv` flag was renamed `enable_fanout` (#14475); and curated plugin sync moved to GitHub HTTP with SHA-based versioning (#14427).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`1ea69e8`](https://github.com/openai/codex/commit/1ea69e8d506e3bd3b8e6cf956e3ff8cd04556cf4) feat: add plugin/read. (#14445) — _@xl-openai_
- [`b7dba72`](https://github.com/openai/codex/commit/b7dba72dbdb109789fcd426f09a840a9035fac4b) Rename reject approval policy to granular (#14516) — _@mousseau-oai_
- [`d32820a`](https://github.com/openai/codex/commit/d32820ab07a38b2f8c35835f6ce8a18a149d697c) Fix `codex exec --profile` handling (#14524) — _@etraut-openai_
- [`53d5972`](https://github.com/openai/codex/commit/53d59722268dde82fb93c1f37964ce196c2a86d7) Reapply "Pass more params to compaction" (#14298) (#14521) — _@rasmusrygaard_
- [`6517173`](https://github.com/openai/codex/commit/651717323cd664f5dcb357c090fb8d88c66ebc02) feat(search_tool): gate search_tool on model supports_search_tool field (#14502) — _@apanasenko-oai_
- [`a2546d5`](https://github.com/openai/codex/commit/a2546d5dff12e7f629ff540bb2603e7ae635748d) Expose code-mode tools through globals (#14517) — _@pakrym-oai_
- [`b560494`](https://github.com/openai/codex/commit/b560494c9f997c699f5cc0dec204b18e58e34d78) Persist js_repl codex helpers across cells (#14503) — _@fjord-oai_
- [`a314c7d`](https://github.com/openai/codex/commit/a314c7d3aea10ac399ef8b3fd06dbd444fd25e40) Decouple request permissions feature and tool (#14426) — _@mousseau-oai_
- [`bc48b92`](https://github.com/openai/codex/commit/bc48b9289a332673335adb3fc80bde6721cde27b) Update tool search prompts (#14500) — _@mzeng-openai_
- [`04e14bd`](https://github.com/openai/codex/commit/04e14bdf233839830f2c8cb1ee429f46bdcd1747) Rename exec session IDs to cell IDs (#14510) — _@pakrym-oai_
- [`1181238`](https://github.com/openai/codex/commit/11812383c544e80836a3522a659882ba7bfcc9e1) memories: focus write prompts on user preferences (#14493) — _@andi-oai_
- [`dadffd2`](https://github.com/openai/codex/commit/dadffd27d45dd3b330e7b71094b828ce2c1a2d84) Fix MCP tool calling (#14491) — _@pakrym-oai_
- [`a5a4899`](https://github.com/openai/codex/commit/a5a4899d0c0755400534ca1a15f5a1df394675fb) Skip nested tool call parallel test on Windows (#14505) — _@pakrym-oai_
- [`f35d460`](https://github.com/openai/codex/commit/f35d46002a34759901d395664c00a89ee0c88bc9) Fix js_repl hangs on U+2028/U+2029 dynamic tool responses (#14421) — _@aaronl-openai_
- [`09ba6b4`](https://github.com/openai/codex/commit/09ba6b47ae5c13aef51924a30763415eed70cb67) Reuse tool runtime for code mode worker (#14496) — _@pakrym-oai_
- [`d3e6680`](https://github.com/openai/codex/commit/d3e668053161c3f916fab3b6b611de6acd07af16) fix turn_start_jsonrpc_span_parents_core_turn_spans flakiness (#14490) — _@owenlin0_
- [`4724a2e`](https://github.com/openai/codex/commit/4724a2e9e7919997429a5fb3bf7b721220922f06) chore(app-server): stop exporting EventMsg schemas (#14478) — _@owenlin0_
- [`25e301e`](https://github.com/openai/codex/commit/25e301ed9802415450ae071122cbe338450d7844) Add parallel tool call test (#14494) — _@pakrym-oai_
- [`d1b03f0`](https://github.com/openai/codex/commit/d1b03f0d7f53f74ee35881be49715162d8f06b5f) Add default code-mode yield timeout (#14484) — _@pakrym-oai_
- [`3e96c86`](https://github.com/openai/codex/commit/3e96c867fe91a4ffe9a262d1674bb57efdd8c99f) use scopes_supported for OAuth when present on MCP servers (#14419) — _@jgershen-oai_
- [`fa26597`](https://github.com/openai/codex/commit/fa265976890e996ed6ce78ee94f62ddd81544ddc) Do not allow unified_exec for sandboxed scenarios on Windows (#14398) — _@iceweasel-oai_
- [`4fa7d6f`](https://github.com/openai/codex/commit/4fa7d6f444b919afb6ccec25e49c036aa0180971) Handle malformed agent role definitions nonfatally (#14488) — _@gabec-openai_
- [`cfe3f68`](https://github.com/openai/codex/commit/cfe3f6821ae91f38d6d6f4e86dcbb0c3a29c123f) Cleanup code_mode tool descriptions (#14480) — _@pakrym-oai_
- [`774965f`](https://github.com/openai/codex/commit/774965f1e8691f1a0568fb801f24b15553e5e6cd) fix: preserve split filesystem semantics in linux sandbox (#14173) — _@viyatb-oai_
- [`4e99c0f`](https://github.com/openai/codex/commit/4e99c0f1798856d445624e1c28dcd43c6b6a715f) rename spawn_csv feature flag to enable_fanout (#14475) — _@daveaitel-openai_
- [`c0528b9`](https://github.com/openai/codex/commit/c0528b9bd97dcb0f8d66719fe138a9a244fe6f3d) Move code mode tool files under tools/code_mode and split functionality (#14476) — _@pakrym-oai_
- [`09aa71a`](https://github.com/openai/codex/commit/09aa71adb7a642408f05fe51db82854142e00945) Fix stdio-to-uds peer-close flake (#13882) — _@aibrahim-oai_
- [`a30b807`](https://github.com/openai/codex/commit/a30b807efe0d013d49daf0462f8e1373840a3e4d) fix(cli): support legacy use_linux_sandbox_bwrap flag (#14473) — _@viyatb-oai_
- [`ff6764e`](https://github.com/openai/codex/commit/ff6764e8084348b7945c3445015ad83b98a33187) Add Python app-server SDK (#14435) — _@shaqayeq-oai_
- [`2f03b1a`](https://github.com/openai/codex/commit/2f03b1a3220378426ba1c0894f1551829f4c60e5) Dispatch tools when code mode is not awaited directly (#14437) — _@pakrym-oai_
- [`0c8a366`](https://github.com/openai/codex/commit/0c8a36676ac3e0659f13662de1e8b78e38204e9d) fix: move inline codex-rs/core unit tests into sibling files (#14444) — _@bolinfest_
- [`7f2ca50`](https://github.com/openai/codex/commit/7f2ca502f5da5eaed5b07a212e7c6636632962ad) Updated out-of-date tip about availability on free and go plans (#14471) — _@etraut-openai_
- [`745ed4e`](https://github.com/openai/codex/commit/745ed4e5e0394996a6436892d5e9a58e1c9823ac) Use granted permissions when invoking apply_patch (#14429) — _@mousseau-oai_
- [`23e55d7`](https://github.com/openai/codex/commit/23e55d7668dabf86f8ae80b2ed1947a5192da11a) [elicitation] User-friendly tool call messages. (#14403) — _@mzeng-openai_
- [`19d0949`](https://github.com/openai/codex/commit/19d0949aabbf065cf8859fd6229a0fa1b3eaaa5e) Handle pre-approved permissions in zsh fork (#14431) — _@mousseau-oai_
- [`e99e8e4`](https://github.com/openai/codex/commit/e99e8e4a6bc2959266d4dd34c34e2b84e472ac52) fix: follow up on linux sandbox review nits (#14440) — _@viyatb-oai_
- [`04892b4`](https://github.com/openai/codex/commit/04892b4ceb3ba6516eddd21c3f7ed2920a977442) refactor: make bubblewrap the default Linux sandbox (#13996) — _@viyatb-oai_
- [`b5f927b`](https://github.com/openai/codex/commit/b5f927b97327ab62047dba9eaf0e998bfaa7dab3) feat: refactor on openai-curated plugins. (#14427) — _@xl-openai_
- [`f6c6128`](https://github.com/openai/codex/commit/f6c6128fc705205b9f1f2bff50cc2710046ce8de) Support waiting for code_mode sessions (#14295) — _@pakrym-oai_
- [`367a8a2`](https://github.com/openai/codex/commit/367a8a2210e7b7a8937b39a838d1ba03451c6213) Clarify spawn agent authorization (#14432) — _@aibrahim-oai_
- [`ba5b942`](https://github.com/openai/codex/commit/ba5b94287e21bbe3da565d2f070a14f8d4971328) [apps] Add tool_suggest tool. (#14287) — _@mzeng-openai_
- [`917c2df`](https://github.com/openai/codex/commit/917c2df201ff1b22041217856588074c08c96ca6) chore: use AVAILABLE and ON_INSTALL as default plugin install and auth policies (#14407) — _@sayan-oai_
- [`5bc82c5`](https://github.com/openai/codex/commit/5bc82c5b9383a76fbba616589c45b149028d1f1c) feat(app-server): propagate traces across tasks and core ops (#14387) — _@owenlin0_
- [`bf5e997`](https://github.com/openai/codex/commit/bf5e997b318935732c110f3f8366394d8e1370f3) Include spawn agent model metadata in app-server items (#14410) — _@aibrahim-oai_
- [`c2d5458`](https://github.com/openai/codex/commit/c2d5458d67714b9d92dfe18d8ebbb512001252d9) fix: align core approvals with split sandbox policies (#14171) — _@viyatb-oai_
- [`c1ea3f9`](https://github.com/openai/codex/commit/c1ea3f95d13a851889d78a3d7ca7946162662c99) chore(app-server): delete unused rpc methods from v1.rs (#14394) — _@owenlin0_
- [`f276325`](https://github.com/openai/codex/commit/f276325cdce8bea1d5aaa80dcad81a95554e771d) refactor: centralize filesystem permissions precedence (#14174) — _@viyatb-oai_
- [`77b0c75`](https://github.com/openai/codex/commit/77b0c75267de29deac2dd648057dbf8820e4d35d) feat: search_tool migrate to bring you own tool of Responses API (#14274) — _@apanasenko-oai_
- [`7263175`](https://github.com/openai/codex/commit/72631755e0c89ccee19cab7cd0e7696d093b50f1) chore(app-server): stop emitting codex/event/ notifications (#14392) — _@owenlin0_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
