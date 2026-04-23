# BerriAI/litellm — 2026-03-02

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-01T23:59:59.000Z → 2026-03-02T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a large pricing/model-metadata cleanup landed by Chesars, alongside two notable feature merges: Vertex AI VIDEO token tracking and a Bedrock region-in-path parser.

**Pricing & model metadata (the bulk of the day).** Chesars merged a sweep of fixes from multiple staging branches (#22582, #22584): missing cache_read/cache_creation pricing for 24 Bedrock Claude models (#22583, 5c4d3d8), missing dashscope `qwen3.5-plus` and `qwen3-vl-plus` pricing (#22596, fixes #22591), and a Mistral overhaul (#22601) adding 9 new models (mistral-large-2512, medium-3-1-2508, small-3-2-2506, ministral-3 3B/8B/14B-2512, magistral) plus repricing `mistral-small-latest` to Small 3.2 specs ($0.06/$0.18 per 1M). Gemini deprecation dates were corrected against Google's official notifications (#22586): adding `gemini-3-pro-preview` shutdowns (Vertex 2026-03-26, Gemini API 2026-03-09) and revising 2.0-flash/flash-lite dates.

**Features.** Sameerlite merged VIDEO modality support in Vertex AI token usage tracking (#22550, 8b9ffdd) — `video_tokens` now flows through `PromptTokensDetailsWrapper`. A Bedrock path parser (#22546) lets users pass `bedrock/{region}/{model}` (e.g. `bedrock/ap-northeast-1/moonshotai.kimi-k2.5`) and have region extracted properly. shivamrawat1 landed configurable env vars for MCP timeouts (#22287). A substantial WebSocket mode for the Responses API was built up across many commits by Sameerlite (new `_aresponses_websocket` call type, proxy WS endpoint, router registration, in-memory session tracking for `previous_response_id`) — worth reviewing if you use the Responses API.

**Notable fixes & reverts.** The OpenRouter native-model double-strip fix (#22320) was merged then immediately reverted (#22593, 0da565f) — regression suspected. Helicone now picks the correct provider URL for `vertex_ai/gemini-*` models (7d23106). Vertex schema builder preserves `{}` "any-value" semantics instead of coercing to object (e5037cd). ChatGPT streaming utils gained missing Dict/Optional imports fixing a runtime NameError (5495003). Harshit28j shipped a multi-commit Langfuse fix aligning DB `session_id` with Langfuse `trace_id` on failure paths and ensuring async failure handler actually logs (016a4fd, cac041c, 2f927fe, 338a634).

No releases, issues, or PR objects were included in the window payload.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`7d23106`](https://github.com/BerriAI/litellm/commit/7d23106fcfaf304045a3ce976b50d0783f807215) fix(helicone): correct provider URL for Vertex AI Gemini models — _@Chesars_
- [`2525d66`](https://github.com/BerriAI/litellm/commit/2525d66dbee023ae2277ff23214644e6a816bb28) Merge pull request #22584 from BerriAI/litellm_oss_staging_02_27_2026 — _@Chesars_
- [`e559d4d`](https://github.com/BerriAI/litellm/commit/e559d4dd117095b937d390dadea332265ac605e2) Merge pull request #22582 from BerriAI/litellm_oss_staging_02_26_2026 — _@Chesars_
- [`6292c3d`](https://github.com/BerriAI/litellm/commit/6292c3dbdfa7ef412beb7c0cbe3e8ff0741a4224) merge: resolve conflicts with upstream/main — _@Chesars_
- [`835a2c3`](https://github.com/BerriAI/litellm/commit/835a2c3dc608418e91a46e0ccdeeeafc3f479428) Merge pull request #22583 from Chesars/fix/add-bedrock-cache-token-pricing — _@Chesars_
- [`680b9ee`](https://github.com/BerriAI/litellm/commit/680b9ee9f29a393a0deeda6e3b18a44a53e463bf) Merge pull request #22586 from Chesars/fix/update-gemini-deprecation-dates — _@Chesars_
- [`a54a1d2`](https://github.com/BerriAI/litellm/commit/a54a1d27d79f4134bf1d6e306d93a16823f2910b) Merge pull request #22596 from Chesars/fix/add-dashscope-models-pricing — _@Chesars_
- [`229eb52`](https://github.com/BerriAI/litellm/commit/229eb5234deb9bd11d7480cdf33ce9e07ee2be91) Merge pull request #22601 from Chesars/fix/update-mistral-models-pricing — _@Chesars_
- [`884f7c5`](https://github.com/BerriAI/litellm/commit/884f7c5e4e23a8dda17b498a59646db500033776) fix: update mistral-small-latest to match Small 3.2 specs — _@Chesars_
- [`87fe521`](https://github.com/BerriAI/litellm/commit/87fe521f46a6b6ff4c92ea3291065b1d16876365) fix: remove unused OpenAIImageGenerationOptionalParams import — _@Chesars_
- [`abb7eb2`](https://github.com/BerriAI/litellm/commit/abb7eb250af2ac9886b5f263833e5962ed774982) fix: remove retired Saba model from new entries — _@Chesars_
- [`bd822a7`](https://github.com/BerriAI/litellm/commit/bd822a7a680d99904c06c32a834179b5407d9843) fix: add supports_response_schema to Ministral 3 models — _@Chesars_
- [`d535560`](https://github.com/BerriAI/litellm/commit/d5355602d59d8672b5c417be1b8f06897a7bfd4e) added configurable env for mcp timeouts (#22287) — _@shivamrawat1_
- [`ea8d227`](https://github.com/BerriAI/litellm/commit/ea8d22753d6903e4551a82ed631996197e0c0759) docs: add fallback setup for virtual key with Loom video — _@mubashir1osmani_
- [`e96c4fe`](https://github.com/BerriAI/litellm/commit/e96c4fed39056d36a1e74b0c12b74583965a720f) Update docs/my-website/docs/tutorials/fallbacks.md — _@mubashir1osmani_
- [`619f53d`](https://github.com/BerriAI/litellm/commit/619f53d55a94d2313886fe7b29008a3cbc8dbf22) feat: add missing Mistral models and update outdated pricing — _@Chesars_
- [`fac29f1`](https://github.com/BerriAI/litellm/commit/fac29f196351c822a26b970653e82acd93001698) docs: add fallback setup for virtual key with Loom video — _@mubashir1osmani_
- [`bfa611c`](https://github.com/BerriAI/litellm/commit/bfa611cb45ca83a5449e9c2222be33b133fef6f8) docs: clarify why is_model_gpt_5_search_model uses substring matching — _@Chesars_
- [`ec16bd3`](https://github.com/BerriAI/litellm/commit/ec16bd3509dcd4efcdd2c421e03988873ab7a7c9) merge: resolve conflict with upstream/main in presidio.py — _@Chesars_
- [`f0e5714`](https://github.com/BerriAI/litellm/commit/f0e571413d2ab09207fc7d185ee83420b368a434) fix: add missing pricing for dashscope/qwen3.5-plus and dashscope/qwen3-vl-plus — _@Chesars_
- [`5495003`](https://github.com/BerriAI/litellm/commit/5495003e60589c19b55214af0501abe2725e5234) fix: add missing Dict/Optional imports in ChatGPT streaming_utils — _@Chesars_
- [`7ab4610`](https://github.com/BerriAI/litellm/commit/7ab46104e2d7f943d7d8052937980d5117fb7942) Merge pull request #22593 from BerriAI/revert-20516-fix/openrouter-native-model-double-strip — _@Chesars_
- [`0da565f`](https://github.com/BerriAI/litellm/commit/0da565f02313cfe133d073640c0cda968f452b98) Revert "fix(adapter): double-stripping of model names with provider-matching prefixes" — _@Chesars_
- [`0e02422`](https://github.com/BerriAI/litellm/commit/0e024221a81875bb656d050e9f58b33bc39b7d71) refactor: remove no-op pass branch in process_items — _@Chesars_
- [`5d512f6`](https://github.com/BerriAI/litellm/commit/5d512f64fe0b1171d66db6edba9e61a705ca6245) Merge pull request #22320 from tombii/fix/openrouter-native-model-double-stripping — _@Chesars_
- [`09ef5e6`](https://github.com/BerriAI/litellm/commit/09ef5e67e51fbab4aa38cfffb9bc8cf65d2e120e) refactor: move native OpenRouter check to get_llm_provider before strip — _@Chesars_
- [`fb69de9`](https://github.com/BerriAI/litellm/commit/fb69de98e5fe3552fc3d9c53a7a17b4fff781b25) Update litellm/proxy/hooks/proxy_track_cost_callback.py — _@Harshit28j_
- [`ee3475d`](https://github.com/BerriAI/litellm/commit/ee3475d187d77cd49d3d7910723575667ab1b9e5) fix: correct gemini/gemini-2.0-flash-lite-preview-02-05 deprecation_date — _@Chesars_
- [`53dc4ee`](https://github.com/BerriAI/litellm/commit/53dc4ee7efc190596c8b91eb62525ad4268c572d) fix: revert gemini/gemini-2.0-flash-live-001 deprecation_date to 2025-12-09 — _@Chesars_
- [`ad1ab9e`](https://github.com/BerriAI/litellm/commit/ad1ab9e874da6de458199bfc598106c43713d32b) fix: add deprecation_date for gemini/gemini-3-pro-preview (Gemini API) — _@Chesars_
- [`9c8620d`](https://github.com/BerriAI/litellm/commit/9c8620db00641762167307249d6672877730eb7c) fix: update Gemini model deprecation dates per Google notifications — _@Chesars_
- [`e5037cd`](https://github.com/BerriAI/litellm/commit/e5037cd6eac6518dabc864fd7a390f0811a27ed7) fix(vertex): preserve any-type schema semantics for JsonValue/Any fields — _@Chesars_
- [`5c4d3d8`](https://github.com/BerriAI/litellm/commit/5c4d3d85e5de9805ff5be98f9ef05b59414f689c) fix(pricing): add missing cache token pricing for 24 Bedrock Claude models — _@Chesars_
- [`338a634`](https://github.com/BerriAI/litellm/commit/338a634762d7dac2801a169dae7dbe9c7098aa3b) Fix root cause: DB spend log session_id didn't match Langfuse trace_id — _@Harshit28j_
- [`46c4d5b`](https://github.com/BerriAI/litellm/commit/46c4d5b37dac5577a860c434900fd79985e6c3cf) Update litellm/integrations/langfuse/langfuse_prompt_management.py — _@Harshit28j_
- [`2f927fe`](https://github.com/BerriAI/litellm/commit/2f927fef3bcf662e221bb3b9b8cf8147291d4e6e) Fix root cause: model_call_details stored None for litellm_trace_id — _@Harshit28j_
- [`cac041c`](https://github.com/BerriAI/litellm/commit/cac041c9447a798fe611ef4f433142ed90c63cbc) Align Langfuse trace_id fallback with DB session_id for failed requests — _@Harshit28j_
- [`016a4fd`](https://github.com/BerriAI/litellm/commit/016a4fd6089b038e66843c11bd776ef82e7138aa) Fix async failure path not logging to Langfuse (proxy bug) — _@Harshit28j_
- [`92407ec`](https://github.com/BerriAI/litellm/commit/92407ec0d4d30cadb59bc7a6d5883166125b1328) Merge pull request #22340 from BerriAI/litellm_oss_staging_02_28_2026 — _@Sameerlite_
- [`fc41f46`](https://github.com/BerriAI/litellm/commit/fc41f46f0f03ea023698ad5da45731a9ffc9af26) Fix vertex ai function calls — _@Sameerlite_
- [`e40e913`](https://github.com/BerriAI/litellm/commit/e40e9136221169257ad4a20ccc2775f58df0a9bf) Fix vertex ai function calls — _@Sameerlite_
- [`7e2f2a8`](https://github.com/BerriAI/litellm/commit/7e2f2a8ffa0464265e2a50d25562ed3e1e2c80e7) Fix inflight mypy — _@Sameerlite_
- [`3007010`](https://github.com/BerriAI/litellm/commit/3007010f214fe31232ad0f15b9ffdd644bb5ec0a) style: add trailing newline to test file — _@Chesars_
- [`273cf12`](https://github.com/BerriAI/litellm/commit/273cf12afaee14cda2aba6821cb5d9a6e64e6954) fix(gemini): add missing role="user" to function response content blocks — _@Chesars_
- [`f4fbc47`](https://github.com/BerriAI/litellm/commit/f4fbc47a1068bf46c47c45c8a9c1c0a2324446df) fix(anthropic): handle OAuth tokens in count_tokens endpoint (#22366) — _@giulio-leone_
- [`76459b1`](https://github.com/BerriAI/litellm/commit/76459b1323b6fdeb1720fea1b4f6235e76133d9f) fix(azure): forward realtime_protocol from config and relax api_version check for GA path (#22369) — _@giulio-leone_
- [`5f28422`](https://github.com/BerriAI/litellm/commit/5f28422f49906f8f059fe39a2c80b3b86540e6b6) fix(types): filter null fields from reasoning output items (#22370) — _@shivaaang_
- [`ea0464f`](https://github.com/BerriAI/litellm/commit/ea0464f41c6d65789d3d784c0d9ae381f22f26aa) fix: exclude gpt-5.2-chat from temperature passthrough (#22342) — _@giulio-leone_
- [`61042f0`](https://github.com/BerriAI/litellm/commit/61042f0aecbf68ba277c39e4de3ab718a417c2e5) feat: add native Responses API support for hosted_vllm provider (#22298) — _@anencore94_
- [`6407755`](https://github.com/BerriAI/litellm/commit/64077553ec30e63abfef2fdfc47b61de404c1dba) fix: include mcp_tool_permissions server ids in allowed mcp servers (#22311) — _@umut-polat_
- [`fca08e8`](https://github.com/BerriAI/litellm/commit/fca08e8acc4bffc922efd6bd4bee2de5f8151312) fix: escalate to heavy Prisma reconnect after consecutive lightweight failures (#22211) — _@dkindlund_
- [`dc96ade`](https://github.com/BerriAI/litellm/commit/dc96ade95681937dc830cdddc739aad2559b8a5d) fix: preserve interval_hours in model cost map reload config (#22200) — _@dkindlund_
- [`6cb956f`](https://github.com/BerriAI/litellm/commit/6cb956fa7f8f851d12e7255457070a1f1d3a4649) fix: catch exceptions in pass-through streaming logging handler (#21636) — _@dkindlund_
- [`6bd2143`](https://github.com/BerriAI/litellm/commit/6bd2143a3ddd77c73fa09406ca3200eeef5afcd1) fix: guard against str response from Azure before calling model_dump() (#21634) — _@dkindlund_
- [`acf3242`](https://github.com/BerriAI/litellm/commit/acf324279c751d513c680255f67c871e814818da) Merge pull request #22550 from BerriAI/litellm_vertex-video-token-tracking — _@Sameerlite_
- [`d3d8d72`](https://github.com/BerriAI/litellm/commit/d3d8d72b5fe8587917232dd4f0d18f367ca8a7e1) Merge pull request #22546 from BerriAI/litellm_bedrock_region_in_model_path — _@Sameerlite_
- [`cc650f4`](https://github.com/BerriAI/litellm/commit/cc650f4865a692997714fd81b5bc0324d6c17f32) fix(responses): add in-memory session tracking to ManagedResponsesWebSocketHandler for previous_response_id — _@Sameerlite_
- [`c113634`](https://github.com/BerriAI/litellm/commit/c1136348f050170a686399bf0c4bf33027c91171) revert pyrightconfig — _@Sameerlite_
- [`82f5055`](https://github.com/BerriAI/litellm/commit/82f5055d89d31287d1db03b8de0f8148151a012e) test(responses): add end-to-end test for responses API WebSocket mode — _@Sameerlite_
- [`76ddfa1`](https://github.com/BerriAI/litellm/commit/76ddfa184cbaac264af246c23ba44758165b9cba) feat(init): export _aresponses_websocket from litellm package — _@Sameerlite_
- [`0921e26`](https://github.com/BerriAI/litellm/commit/0921e26b8c237e09c2fa607fc782adb77f1d3071) feat(router): register _aresponses_websocket in Router factory functions — _@Sameerlite_
- [`512a438`](https://github.com/BerriAI/litellm/commit/512a4389356e3f0f9bf2c98e9b3566000e5bd606) feat(proxy): add WebSocket endpoint for responses API and route_llm_request support — _@Sameerlite_
- [`eeb2d28`](https://github.com/BerriAI/litellm/commit/eeb2d28621e5c8ed0bacab2934d63249e50eb9c2) feat(proxy): add _aresponses_websocket to common_request_processing route_type Literal — _@Sameerlite_
- [`39748fd`](https://github.com/BerriAI/litellm/commit/39748fd4a3327f6e7e0796fe53a49d9e14ab62b9) feat(responses): add _aresponses_websocket function and HTTP handler support for WebSocket mode — _@Sameerlite_
- [`19ce265`](https://github.com/BerriAI/litellm/commit/19ce26501b30fc97b1be6a83a2848e7c5445c96e) feat(responses): add WebSocket streaming iterator for responses API — _@Sameerlite_
- [`538f11b`](https://github.com/BerriAI/litellm/commit/538f11bdfa8c536424c0a043d73bc64c23d36835) feat(types): add _aresponses_websocket CallType and video_tokens to PromptTokensDetailsWrapper — _@Sameerlite_
- [`a14ef27`](https://github.com/BerriAI/litellm/commit/a14ef270094aaefe28c5cb3374c1cfcdcc1a7f97) test: fix copy-paste print message in multi-tool-call test — _@dsteeley_
- [`a3cdf6c`](https://github.com/BerriAI/litellm/commit/a3cdf6c89540a8b171e119fa38f8b0aeca0ab66a) fix(streaming): don't emit finish_reason on output_item.done for function_call — _@dsteeley_
- [`58cd6f6`](https://github.com/BerriAI/litellm/commit/58cd6f68995130d7a163bca3dcc0af088daf51c3) test: fix misleading precedence test per review feedback — _@openhands-agent_
- [`5655cb8`](https://github.com/BerriAI/litellm/commit/5655cb87fc7e95b68e70f4018fab5ce4b0b5d0a8) fix: pass all custom pricing fields to register_model in completion() and embedding() — _@openhands-agent_
- [`8b9ffdd`](https://github.com/BerriAI/litellm/commit/8b9ffdd93f62721c8f3871265d32ae24a6396b2d) feat(vertex-ai): add VIDEO modality support in token usage tracking — _@Sameerlite_
- [`f7b594e`](https://github.com/BerriAI/litellm/commit/f7b594e7f80dd5d1fb1a9c2d23ccb19b7985f0f5) test(bedrock): add unit tests for region extraction from bedrock/{region}/{model} path — _@Sameerlite_
- [`5864317`](https://github.com/BerriAI/litellm/commit/5864317d929bc6cb11c7518b5ee7081d1a5fb168) fix(bedrock): extract region and model ID from bedrock/{region}/{model} path format — _@Sameerlite_
- [`b518c24`](https://github.com/BerriAI/litellm/commit/b518c24ff47eae2e12d0d97032367b910f8bed90) Merge pull request #22497 from giulio-leone/fix/featherless-ai-api-key — _@Sameerlite_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
