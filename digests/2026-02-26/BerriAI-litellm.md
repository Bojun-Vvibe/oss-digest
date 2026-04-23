# BerriAI/litellm — 2026-02-26

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-02-25T23:59:59.000Z → 2026-02-26T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a **v1.81.16 release bump** (commit 678200e, PR #22184) shipping a broad batch of proxy, provider and UI fixes — worth scanning the CHANGELOG before pulling.

The most user-visible additions:

- **New `/public/supported_endpoints` API** (PR #22238, commit c20e496) returns every supported endpoint and which providers back it, intended for UI/discovery use. The provider support JSON was also moved into the `litellm` package so it ships via pip (efcc856).
- **Realtime guardrails hardened**: `pre_call`/`post_call` guardrails now actually run on the realtime WebSocket (PR #22161), and a new `end_session_after_n_fails` setting plus an Endpoint Settings wizard step landed in PR #22165.
- **Streaming safety knob**: `LITELLM_MAX_STREAMING_DURATION_SECONDS` lets operators cap chunk-processing time (PR #22209).

Provider/cost fixes worth noting:

- Anthropic Claude 4.6: `reasoning_effort` is now mapped to `output_config` (PR #22220).
- Vertex/Gemini: new `gemini-3.1-flash-image-preview` model entry (f24a418), image-generation cost now derived from token usage when available (702d5e8), and Gemini JSON Schema now preserves `$ref` on 2.0+ (PR #21597).
- Anthropic adapter populates `cache_read_input_tokens` from `prompt_tokens_details` for OpenAI/Azure (PR #22090); transcription `duration` moved to `_hidden_params` so the OpenAI SDK stops choking on it (PR #22208); mistral-small-2503 pricing corrected (PR #22097).

Proxy/UI reliability:

- **Virtual Keys**: paginated key-alias select shipped (PR #22157) and the stale-totals-on-filter pagination bug is fixed (PR #22222); `/key/aliases` got pagination/search to prevent OOMs (PR #22137).
- A `get_config` DB timeout no longer blocks all DB-backed model loading in the router sync loop (commit 8a6a67b) — important for anyone seeing empty model lists after Postgres blips.
- Arize Phoenix now uses its own TracerProvider so nested traces coexist with the OTEL callback (PR #22169).
- Notable revert: structured auth-exception logging from PR #22099 was rolled back (PR #22187).

One concerning commit: `fix: langfuse trace leak key on model params` (43054a2) — check if you log model_params to Langfuse.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`d5ef6c7`](https://github.com/BerriAI/litellm/commit/d5ef6c7f934276e14a13a693c619d4318045d918) Merge pull request #22238 from BerriAI/litellm_supported_endpoints — _@yuneng-jiang_
- [`efcc856`](https://github.com/BerriAI/litellm/commit/efcc856234d8661e43ed93a01158dd93ad6f3aef) Move provider_endpoints_support.json into litellm package — _@yuneng-jiang_
- [`33bb798`](https://github.com/BerriAI/litellm/commit/33bb798997d2a28c83ef97d054016788aa28bb59) Merge pull request #22222 from BerriAI/litellm_key_filter_pagination_fix — _@yuneng-jiang_
- [`c20e496`](https://github.com/BerriAI/litellm/commit/c20e49620f38e8d3da6fb963f6a7dd9492f4ad4d) [Feature] Add /public/supported_endpoints endpoint — _@yuneng-jiang_
- [`3639800`](https://github.com/BerriAI/litellm/commit/3639800892f07b1331e532d543107c50c59e1d00) Merge pull request #22221 from BerriAI/litellm_prometheus_multiproc_cleanup — _@ryan-crabbe_
- [`fcdfc63`](https://github.com/BerriAI/litellm/commit/fcdfc638b01ec2dcb6324e2698fdda02b633c3ad) Remove nit — _@dharamendrak_
- [`840333f`](https://github.com/BerriAI/litellm/commit/840333f32e4006a23029d5df86a10e01d093d98a) Restore — _@dharamendrak_
- [`c651a51`](https://github.com/BerriAI/litellm/commit/c651a511bd5432a6b92afac3d6cba1944daca809) Update test to righ place — _@dharamendrak_
- [`0e01425`](https://github.com/BerriAI/litellm/commit/0e014253d7670df86cba872ffe0b87930a45b0a7) refactor(cost): dedupe image token usage cost helper — _@emerzon_
- [`7df61d4`](https://github.com/BerriAI/litellm/commit/7df61d4b92163f63884b24f6753894364e1810cf) [Fix] Enhance MidStreamFallbackError to preserve original status code and attributes — _@dharamendrak_
- [`702d5e8`](https://github.com/BerriAI/litellm/commit/702d5e88b8616fd1d13082be725612c482073568) fix(cost): use token usage for gemini/vertex image generation when available — _@emerzon_
- [`8a6a67b`](https://github.com/BerriAI/litellm/commit/8a6a67bfcf62db1a2d7769a645452628732b220c) fix(proxy): isolate get_config failures from model loading in sync loop — _@jquinter_
- [`f24a418`](https://github.com/BerriAI/litellm/commit/f24a41898bba81bdb047e84fd66c1c9bc0f09832) feat(vertex): add gemini-3.1-flash-image-preview model DB support — _@emerzon_
- [`518cd3e`](https://github.com/BerriAI/litellm/commit/518cd3ef60e5809947dbf2d262c7edd47782a9ba) feat(ui): add key creation deep-links with SSO return URL support — _@dibyom_
- [`0020e59`](https://github.com/BerriAI/litellm/commit/0020e5929d17abd2d68db3da8d26dd64b5251192) fix: accurate wipe count on partial failure, remove stray blank line — _@ryan-crabbe_
- [`c6b6e29`](https://github.com/BerriAI/litellm/commit/c6b6e29bc28a1424682281da567cc65f3fec7c8e) Merge pull request #22220 from Chesars/fix/reasoning-effort-output-config-claude-46 — _@Chesars_
- [`de556ad`](https://github.com/BerriAI/litellm/commit/de556ad23715976abde3af71bb56c034ef90c5f0) Merge pull request #22202 from BerriAI/fix/realtime-streaming-mypy-attr — _@jquinter_
- [`c3c79b9`](https://github.com/BerriAI/litellm/commit/c3c79b9d80a6ee7f2da9a33eba03b5addf1419d1) [Fix] Virtual Keys pagination displays stale totals when filtering — _@yuneng-jiang_
- [`5aff0e4`](https://github.com/BerriAI/litellm/commit/5aff0e4da6175e1cbfba7a2a3f7b135c065c0c92) refactor: move _is_claude_4_6_model to AnthropicModelInfo, use explicit effort_map — _@Chesars_
- [`a8c9539`](https://github.com/BerriAI/litellm/commit/a8c95392fb801ff4099eef97d86cb23c351d9be3) fix(anthropic): map reasoning_effort to output_config for Claude 4.6 models — _@Chesars_
- [`0ee8cb5`](https://github.com/BerriAI/litellm/commit/0ee8cb5f021cb2d02149c63bdb0274c46462cb47) refactor: remove shutdown cleanup, rely solely on startup wipe — _@ryan-crabbe_
- [`719b7fd`](https://github.com/BerriAI/litellm/commit/719b7fd013cc1cc1e95e7093d84f4ae23a387445) Merge pull request #22157 from BerriAI/litellm_paginated_key_alias — _@yuneng-jiang_
- [`4b75a89`](https://github.com/BerriAI/litellm/commit/4b75a8967353ca71d71d1b179cd21ed652e948eb) Merge remote-tracking branch 'origin' into litellm_paginated_key_alias — _@yuneng-jiang_
- [`ec6a55c`](https://github.com/BerriAI/litellm/commit/ec6a55c6dbed8b0bdcbbf4089a5b1abb54e6956d) Merge pull request #22208 from Chesars/fix/transcription-duration-hidden-params — _@Chesars_
- [`cbdaaae`](https://github.com/BerriAI/litellm/commit/cbdaaaeba4ff5dc555533c74cb08c1f4b9456954) [Feat] Add control for setting upperbound on chunk processing time  (#22209) — _@ishaan-jaff_
- [`b5a0a72`](https://github.com/BerriAI/litellm/commit/b5a0a72acbc442cc58404349f18a5defc9f38011) Merge pull request #21597 from Chesars/fix/gemini-json-schema-keep-refs — _@Chesars_
- [`d3d11fb`](https://github.com/BerriAI/litellm/commit/d3d11fb06ec624b4abc6f3ae2d2e950cc59a6eac) feat: add tags in project — _@Harshit28j_
- [`1216690`](https://github.com/BerriAI/litellm/commit/121669090d6406107f8511e3dcb6317403647a9c) test: use real completion_cost() instead of duplicating inline logic — _@Chesars_
- [`5f957ad`](https://github.com/BerriAI/litellm/commit/5f957add18d0faa128890d861f7997ad9156c181) fix(azure): apply same duration hidden_params fix to Azure transcription handler — _@Chesars_
- [`b6784e7`](https://github.com/BerriAI/litellm/commit/b6784e7d8c2e4e4dd22958a933cd6d624344d119) fix(types): annotate _FINISH_REASON_MAP and map_finish_reason with OpenAIChatCompletionFinishReason — _@Chesars_
- [`7dd4f17`](https://github.com/BerriAI/litellm/commit/7dd4f17021d32cf70a908f6e2e464d8c2cb74baa) fix(transcription): store duration in _hidden_params to avoid OpenAI SDK deserialization issues — _@Chesars_
- [`3196d40`](https://github.com/BerriAI/litellm/commit/3196d40a04645200e4f610e3825a5e216d4c9772) fix(vertex): delegate Gemini finish reason mapping to centralized _FINISH_REASON_MAP — _@Chesars_
- [`947586b`](https://github.com/BerriAI/litellm/commit/947586b62d9fa773506bb20ba56660c374b26e4e) Merge remote-tracking branch 'origin' into litellm_paginated_key_alias — _@yuneng-jiang_
- [`50bf2da`](https://github.com/BerriAI/litellm/commit/50bf2da05e60c3ea538552f314658204aa7c26ef) Merge pull request #22137 from BerriAI/litellm_key_info_crash_fix — _@yuneng-jiang_
- [`4d2fab4`](https://github.com/BerriAI/litellm/commit/4d2fab49a7b947f329288c696101d1a678e49ede) Merge pull request #22164 from Harshit28j/litellm_custom_auth_budget_fix — _@Harshit28j_
- [`857a324`](https://github.com/BerriAI/litellm/commit/857a324f7abce2a82ca38b506183d4cf9a36d56b) Merge remote-tracking branch 'origin' into litellm_key_info_crash_fix — _@yuneng-jiang_
- [`acfb5ad`](https://github.com/BerriAI/litellm/commit/acfb5ade972139d0257a1b15d8d617b25d03d1ba) refactor: remove periodic dead PID cleanup, trim redundant tests — _@ryan-crabbe_
- [`ae13a40`](https://github.com/BerriAI/litellm/commit/ae13a40c0127089a228bfd29e73c9d786de036fe) test(mcp): add e2e test for stateless StreamableHTTP behavior (#22033) — _@michelligabriele_
- [`1790a6b`](https://github.com/BerriAI/litellm/commit/1790a6bf82cef3d9af254cda2cb8a763075760c1) Merge pull request #21604 from michelligabriele/fix/websearch-thinking-blocks — _@Sameerlite_
- [`21d958e`](https://github.com/BerriAI/litellm/commit/21d958e46d61395e72d60d7f420e188b04f388ba) fix(mypy): add union-attr suppression to all backend_ws method calls — _@jquinter_
- [`494d783`](https://github.com/BerriAI/litellm/commit/494d783a8092b4e4ca41a5893fd2d63c0934c275) fix(mypy): suppress attr-defined errors on websocket send/close calls — _@jquinter_
- [`4419c7a`](https://github.com/BerriAI/litellm/commit/4419c7a5f9237bae21e65401989e3b0f9f1f2cce) Merge pull request #22198 from BerriAI/fix/mcp-server-test-mock-mismatch — _@jquinter_
- [`ace49b1`](https://github.com/BerriAI/litellm/commit/ace49b18d3684b74b04291948a29a0c00d8e2935) fix(tests): update MCP server test mocks to match production API — _@jquinter_
- [`1c376af`](https://github.com/BerriAI/litellm/commit/1c376afc855b944565d946614ccbca4b2854a2c3) fix(ci): use secrets context in ggshield step condition — _@jquinter_
- [`05c3a95`](https://github.com/BerriAI/litellm/commit/05c3a95da8c3daf293b5f5df8bafe0f60c6479a6) fix(ci): add permissions block to secret-scan job — _@jquinter_
- [`2fce35a`](https://github.com/BerriAI/litellm/commit/2fce35a1628af8b82275b6625c713213d18c7b0d) test(ci): add secret scan test and CI job to prevent hardcoded credentials — _@jquinter_
- [`43054a2`](https://github.com/BerriAI/litellm/commit/43054a239059cbc695a0f0215aedfa15615750cc) fix: langfuse trace leak key on model params — _@Harshit28j_
- [`6600c86`](https://github.com/BerriAI/litellm/commit/6600c86dbd9aca60d2f4580cb573ee7236bda245) Merge pull request #22170 from BerriAI/litellm_fix_video_veo_vertex — _@Sameerlite_
- [`ec31845`](https://github.com/BerriAI/litellm/commit/ec318454692d41b23203ce204512bfe0eb57db40) Merge pull request #22092 from BerriAI/litellm_fix_tts_vertex_ai — _@Sameerlite_
- [`61d2f28`](https://github.com/BerriAI/litellm/commit/61d2f28545ab059014153c2bb59d494cb0445a4d) Fix based on review — _@Sameerlite_
- [`16d6c27`](https://github.com/BerriAI/litellm/commit/16d6c279da2aebee031f27d272db11e17ba78b03) Merge pull request #22180 from BerriAI/litellm_fix_vllm_test — _@Sameerlite_
- [`dc1e97d`](https://github.com/BerriAI/litellm/commit/dc1e97d3456c78ef3cd32f1733b703755df225cc) Merge pull request #22144 from BerriAI/litellm_allowed_openai_params_embeddings — _@Sameerlite_
- [`2772c88`](https://github.com/BerriAI/litellm/commit/2772c8886479086675111aca55e78c5b323f5840) Merge pull request #22142 from BerriAI/litellm_fix_mcp_server_ip — _@Sameerlite_
- [`e1df85e`](https://github.com/BerriAI/litellm/commit/e1df85ebea683083dd340fa3a8ff2abc79971485) Merge pull request #22166 from BerriAI/litellm_oss_staging_02_26_2026 — _@Sameerlite_
- [`81455db`](https://github.com/BerriAI/litellm/commit/81455dbd57a56bc65618f644ad634e95b6dce26d) Merge pull request #22187 from BerriAI/revert-22099-fix/improve-auth-exception-logging — _@Sameerlite_
- [`95b8fb8`](https://github.com/BerriAI/litellm/commit/95b8fb823b6014c2c91e5993b5b5e259fe2d2225) Revert "fix(proxy): improve auth exception logging levels and add structured …" — _@Sameerlite_
- [`87b4fed`](https://github.com/BerriAI/litellm/commit/87b4fed96774300831be07180755a9df4db88d0f) Merge pull request #22186 from BerriAI/main — _@Sameerlite_
- [`27f9903`](https://github.com/BerriAI/litellm/commit/27f990376502943b654610e6dc63907509cba1e7) Merge pull request #22184 from BerriAI/litellm_bump_litellm_26_02 — _@Sameerlite_
- [`678200e`](https://github.com/BerriAI/litellm/commit/678200ee4887149dff2f470d22f2480778081375) Bump litellm version to 1.81.16 — _@Sameerlite_
- [`6a68e3b`](https://github.com/BerriAI/litellm/commit/6a68e3bba3ab5d5845139c6ae7073a5366bacef1) Add tests for messages to responses transformation: — _@Sameerlite_
- [`ffb438f`](https://github.com/BerriAI/litellm/commit/ffb438f3f2f674090f3346a9879758919d39b667) fix: clarify EXPERIMENTAL_UI_LOGIN ignores LITELLM_UI_SESSION_DURATION, add regression test — _@shivam_
- [`7adaf49`](https://github.com/BerriAI/litellm/commit/7adaf49db7a0fb413704666fca92aaa6b2ad2887) Add tranlation of context_management — _@Sameerlite_
- [`4455726`](https://github.com/BerriAI/litellm/commit/44557261a3d1e62225e0305838b92974393d3792) greptile issue — _@shivam_
- [`d276d27`](https://github.com/BerriAI/litellm/commit/d276d273c62aa8252bda1876cda85bfcf0d739af) Update litellm/constants.py — _@shivamrawat1_
- [`6974b6d`](https://github.com/BerriAI/litellm/commit/6974b6de681814801d838a5d026868c27ba2ceb0) resolved greptile comment — _@shivam_
- [`f4f8344`](https://github.com/BerriAI/litellm/commit/f4f834489c438b3bace30b68306431543d3ef81b) added variable for invitation link — _@shivam_
- [`a7f5163`](https://github.com/BerriAI/litellm/commit/a7f516397687d39bd6b2fc79022880a65dafc518) added the env flag — _@shivam_
- [`d9cd3ea`](https://github.com/BerriAI/litellm/commit/d9cd3ea1853f768e95a35f90596a3ab546de81c6) Merge pull request #22181 from mubashir1osmani/fix/arize-phoenix-nested-traces-test-update — _@Sameerlite_
- [`3c595f6`](https://github.com/BerriAI/litellm/commit/3c595f6fd28afb279f59aba38cf087a5cf82c55a) fix(test): update Phoenix OTEL test for dedicated TracerProvider architecture — _@mubashir1osmani_
- [`1a3d4c8`](https://github.com/BerriAI/litellm/commit/1a3d4c80dbca06a6ea72f88660a76ba650470b36) Add JSON exact match test for vLLM embeddings — _@Sameerlite_
- [`ecbefc0`](https://github.com/BerriAI/litellm/commit/ecbefc073507aaf4dbf57a589df1a5302b2dfbd9) Merge pull request #22169 from mubashir1osmani/fix/arize-phoenix-nested-traces — _@Sameerlite_
- [`96bcee0`](https://github.com/BerriAI/litellm/commit/96bcee0b0af79494ab005754d2b3af5df716cd2c) fix(arize-phoenix): enable nested traces coexistence with otel callback — _@mubashir1osmani_
- [`39af85d`](https://github.com/BerriAI/litellm/commit/39af85da5396b42416c5ae024eb0e06a42c1fc4d) fix: req changes — _@Harshit28j_
- [`aeb7238`](https://github.com/BerriAI/litellm/commit/aeb723816ffbc7e0839337873f05d4ffb9680bc3) Fix: Passing of image and parameters in videos api — _@Sameerlite_
- [`475bb94`](https://github.com/BerriAI/litellm/commit/475bb94f5ae0ca8a2c29df76e7f93a7471d2a71e) fix(adapter): populate cache_read_input_tokens from prompt_tokens_details for OpenAI/Azure (#22090) — _@roni-frantchi_
- [`296a138`](https://github.com/BerriAI/litellm/commit/296a13819545444e36d9500f5d94bb99298d188f) Adjust input and output cost per token for mistral-small-2503 (#22097) — _@jinskjoy_
- [`efeaf65`](https://github.com/BerriAI/litellm/commit/efeaf650aace39e708d35dbdfe161b6a3c610579) fix(proxy): improve auth exception logging levels and add structured context (#22099) — _@bensi94_
- [`f3e31bc`](https://github.com/BerriAI/litellm/commit/f3e31bc8efbd7e5634c612b86285540ca8e0c673) fix(proxy): honor MAX_STRING_LENGTH_PROMPT_IN_DB from config env vars (#22106) — _@gavksingh_
- [`4d68151`](https://github.com/BerriAI/litellm/commit/4d68151d03ef5da8201dd8c5751a9afc384d9fb8) Merge pull request #22151 from BerriAI/litellm_fix_cicd_26_02 — _@Sameerlite_
- [`e8cfe39`](https://github.com/BerriAI/litellm/commit/e8cfe3941829b6abe7dd0005d344af1359f2433d) Fix code qa for agent_id — _@Sameerlite_
- [`965ca11`](https://github.com/BerriAI/litellm/commit/965ca117bc8a9528d32fa98b6bdfc503ac951811) feat(realtime guardrails): end_session_after_n_fails + Endpoint Settings wizard step (#22165) — _@ishaan-jaff_
- [`24fd841`](https://github.com/BerriAI/litellm/commit/24fd841e83cef8f1ae503dc90c578665f1ac2efb) Fix code qa — _@Sameerlite_
- [`819581f`](https://github.com/BerriAI/litellm/commit/819581f6bfbe6a49c65e12be62b0fbd41e82b603) fix(realtime): guardrails with pre_call/post_call mode now work on realtime WebSocket (#22161) — _@ishaan-jaff_
- [`8f8ebbe`](https://github.com/BerriAI/litellm/commit/8f8ebbec8d96e15e73f2aee7f97c2f01358c0625) Fix test_vertex_passthrough_forwards_anthropic_beta_header — _@Sameerlite_
- [`14badde`](https://github.com/BerriAI/litellm/commit/14badde13c89e0e7f1feb761c2e6e791b77ce17a) fix: custom auth budget issue — _@Harshit28j_
- [`8bbbd1e`](https://github.com/BerriAI/litellm/commit/8bbbd1e46571d006ab2a7bdc728f79c11fd76103) Fix gaurdrail code qa — _@Sameerlite_
- [`143e8df`](https://github.com/BerriAI/litellm/commit/143e8dfe276c9db5d55c3b97db1e5e1c5f5c6b66) Fix pass through tests — _@Sameerlite_
- [`3545584`](https://github.com/BerriAI/litellm/commit/3545584a00c951a81d0f82c90fa360a899ccf4a7) Development environment setup (#22160) — _@ishaan-jaff_
- [`82025bf`](https://github.com/BerriAI/litellm/commit/82025bff6e4b57574363ec7999bc9ce9841c28b3) Fix code qa — _@Sameerlite_
- [`0debe92`](https://github.com/BerriAI/litellm/commit/0debe926059c049501b3d33de31dff94a756ef1f) Fix_mapped tests part 2 — _@Sameerlite_
- [`9c7f813`](https://github.com/BerriAI/litellm/commit/9c7f8138e1d2e72b0876a673b3f3c1fda5d43698) FIx : litellm/tests/test_litellm/proxy/management_endpoints/test_key_management_endpoints.py — _@Sameerlite_
- [`7cda0e4`](https://github.com/BerriAI/litellm/commit/7cda0e4edde439ff978ee807d089668bfc0d0ea9) Fix code qa — _@Sameerlite_
- [`9bf369d`](https://github.com/BerriAI/litellm/commit/9bf369d53b54f5fb0df8f378db13c9be34c93994) Fix : enterprise tests — _@Sameerlite_
- [`5e63969`](https://github.com/BerriAI/litellm/commit/5e63969ed756e84f26a327eb5f68be23ba8f047d) Merge branch 'main' into litellm_fix_cicd_26_02 — _@Sameerlite_
- [`a54cf53`](https://github.com/BerriAI/litellm/commit/a54cf53ffb554a0afa5fea2e61e0895c7cecbdfa) Fix test_standard_logging_payload_includes_guardrail_information — _@Sameerlite_
- [`f34b036`](https://github.com/BerriAI/litellm/commit/f34b0366a31d9f8a917000aa5dee64bb5d43291b) Fix: test_gaurdrails* — _@Sameerlite_
- [`af3b6f3`](https://github.com/BerriAI/litellm/commit/af3b6f333442d396cbde10230c010408acf5404b) Fix: litellm/tests/test_litellm/proxy/common_utils/test_http_parsing_utils.py — _@Sameerlite_
- [`2d231c2`](https://github.com/BerriAI/litellm/commit/2d231c2f1af3ac4f322537221804ae8721d19e46) Fix code qa — _@Sameerlite_
- [`ac3cfff`](https://github.com/BerriAI/litellm/commit/ac3cfff93f2f226c4fcce2ad26317199c8e01593) Merge remote-tracking branch 'origin' into litellm_paginated_key_alias — _@yuneng-jiang_
- [`8192819`](https://github.com/BerriAI/litellm/commit/8192819bda20022456d2c27501e8fd420c31fc6b) Merge pull request #22158 from BerriAI/ui_build_fix_51 — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
