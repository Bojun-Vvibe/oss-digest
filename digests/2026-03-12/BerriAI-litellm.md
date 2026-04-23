# BerriAI/litellm — 2026-03-12

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-11T23:59:59.000Z → 2026-03-12T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A heavy maintenance and stabilization day on `main`, anchored by a patch release **v1.82.2** ([820d63f](https://github.com/BerriAI/litellm/commit/820d63f3a648637bc897eefc86e9ef76723a5863)) and the merge of the `litellm_oss_staging_03_11_2026` branch ([#23440](https://github.com/BerriAI/litellm/pull/23440)). Most user-visible work landed via that staging merge plus a handful of targeted fixes; no new releases or issues were filed in-window.

**Notable features**
- **WebRTC support** for realtime endpoints landed across routing, transformations, HTTP handler, and docs ([#23446](https://github.com/BerriAI/litellm/pull/23446), follow-up doc PRs [#23459](https://github.com/BerriAI/litellm/pull/23459)/[#23460](https://github.com/BerriAI/litellm/pull/23460)), with Azure realtime gaining `api-version` threading and token-expiry handling.
- **Vector store** retrieve/list/update/delete endpoints ([#23435](https://github.com/BerriAI/litellm/pull/23435)).
- **Azure Model Router** now surfaces the actual underlying model in responses ([#23432](https://github.com/BerriAI/litellm/pull/23432)).
- New **`/v2/user/info`** lightweight RBAC endpoint plus UI migration of `user_dashboard`/`user_info_view` to it ([81e3a2e](https://github.com/BerriAI/litellm/commit/81e3a2e42114614a89833aaaae5a9a1221ef4ff2), [7737e9c](https://github.com/BerriAI/litellm/commit/7737e9c31334c2907c7a2a4aee3c138abefea6e6)).
- **Multi-instance SSO**: direct PKCE token exchange with Redis cache wiring ([#22923](https://github.com/BerriAI/litellm/pull/22923)).

**Important fixes**
- `BaseModelResponseIterator` no longer crashes on non-string stream chunks from the Responses API ([#23497](https://github.com/BerriAI/litellm/pull/23497)) — worth a look if you use streaming Responses.
- Restored per-entity breakdown in `/user/daily/activity/aggregated`, regressed by the earlier GROUP BY optimization in #21613 ([9c3fab2](https://github.com/BerriAI/litellm/commit/9c3fab24adb3a36fcfa02dc2dfa4f87d7893d0f4)).
- `team_member_budget_duration` was being silently dropped by `NewTeamRequest` ([78927138](https://github.com/BerriAI/litellm/commit/78927138d288e6a780c83816b05f677b39b9e38e)).
- Windows compatibility for the Prisma engine watchdog ([#23494](https://github.com/BerriAI/litellm/pull/23494)).
- `async_post_call_response_headers_hook` made consistent across all endpoints ([#22985](https://github.com/BerriAI/litellm/pull/22985)).
- Pass-through routes now correctly strip `SERVER_ROOT_PATH` ([#23414](https://github.com/BerriAI/litellm/pull/23414)).
- OpenAI gpt-5.4: drops *all* `reasoning_effort` (incl. `'none'`) when tools are present ([690ad4c](https://github.com/BerriAI/litellm/commit/690ad4c45b01e3e0d406712a9d783a6193b0819f)).

**Infra/CI**: large sweep of mypy, ruff, and flaky-test cleanup; deprecated model names purged from CI; Black now runs in `--check` mode (excluding `enterprise/`) ([#18648](https://github.com/BerriAI/litellm/pull/18648)); `litellm-proxy-extras` added to CI requirements ([#23486](https://github.com/BerriAI/litellm/pull/23486)); proxy-extras bumped to 0.4.56.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`b3a30a1`](https://github.com/BerriAI/litellm/commit/b3a30a15c40fc3d8adad8d3bd185841b76b6defd) fix(mypy): fix llm_http_handler.py type issues (6 errors) — _@cursoragent_
- [`2b5be5c`](https://github.com/BerriAI/litellm/commit/2b5be5c1aba42554ede983bc69e20f474a687b0c) fix(mypy): fix factory.py type narrowing issues (12 errors) — _@cursoragent_
- [`a0f1c8a`](https://github.com/BerriAI/litellm/commit/a0f1c8a18aa9b9c8d8014e9ea556bda79f3d8412) fix(mypy): sync route_type Literals, fix BFL params and signatures — _@cursoragent_
- [`cb77bda`](https://github.com/BerriAI/litellm/commit/cb77bdaeca34f98278d850d798ea303237fc646a) updating poetry lock — _@yuneng-jiang_
- [`976f1a0`](https://github.com/BerriAI/litellm/commit/976f1a0115a40a62b5e804de4b0fef3f0c90d348) Merge pull request #23497 from BerriAI/litellm_/modest-dijkstra — _@yuneng-jiang_
- [`d16c8c5`](https://github.com/BerriAI/litellm/commit/d16c8c5590744cb5b4a53a8b9d796360dafdb367) [Fix] BaseModelResponseIterator crashes on non-string stream chunks — _@yuneng-jiang_
- [`820d63f`](https://github.com/BerriAI/litellm/commit/820d63f3a648637bc897eefc86e9ef76723a5863) bump: version 1.82.1 → 1.82.2 — _@yuneng-jiang_
- [`f5ffc59`](https://github.com/BerriAI/litellm/commit/f5ffc59309214a549767277a3fb1fae0e30a7a30) fix(proxy): Windows compatibility for Prisma engine watchdog (#23494) — _@shivamrawat1_
- [`62c8494`](https://github.com/BerriAI/litellm/commit/62c8494423936659399b2476518f704845f6c09c) Merge pull request #23490 from BerriAI/litellm_add_pkce_env_key_docs — _@yuneng-jiang_
- [`372cc45`](https://github.com/BerriAI/litellm/commit/372cc451645b190ee45fb7ede5b88a80d2fca14f) [Docs] Add PKCE_STRICT_CACHE_MISS to environment variables reference — _@yuneng-jiang_
- [`8c96e43`](https://github.com/BerriAI/litellm/commit/8c96e43aab563bc23708aab5ddd7731c69ef2089) Merge pull request #23489 from BerriAI/litellm_mcp_tools_tests — _@yuneng-jiang_
- [`229d200`](https://github.com/BerriAI/litellm/commit/229d2008a35473cadc365017acffdfeee352ac57) Merge pull request #23488 from BerriAI/litellm_/peaceful-poincare — _@yuneng-jiang_
- [`c557286`](https://github.com/BerriAI/litellm/commit/c557286cac04707ee44a57a2110c5640c89bdf31) Add unit tests for 5 untested MCP tools components — _@yuneng-jiang_
- [`e351521`](https://github.com/BerriAI/litellm/commit/e3515212430867d435fb17e49d3a1841f8294988) [Fix] Fix flaky and outdated router integration tests — _@yuneng-jiang_
- [`8b256d7`](https://github.com/BerriAI/litellm/commit/8b256d748827efa88bbbf5d948281d8d5c91a1f3) Merge pull request #23487 from BerriAI/litellm_fix_ruff_sso_statement_count — _@yuneng-jiang_
- [`c06bdaa`](https://github.com/BerriAI/litellm/commit/c06bdaa68df49d8ff58be82f19415a0d1ad1df64) [Fix] Ruff PLR0915 too-many-statements in ui_sso.py — _@yuneng-jiang_
- [`f1a7e42`](https://github.com/BerriAI/litellm/commit/f1a7e42577e34440b48bbee06378f06ce737e7c2) Merge pull request #23485 from BerriAI/litellm_/sleepy-swirles — _@yuneng-jiang_
- [`79ffcf2`](https://github.com/BerriAI/litellm/commit/79ffcf297d19ad838e67f533442384dbbf18baab) Merge pull request #23486 from BerriAI/litellm_/beautiful-kilby — _@yuneng-jiang_
- [`53d704a`](https://github.com/BerriAI/litellm/commit/53d704a1f147000c51191338710d3c88f9041857) [Fix] Add litellm-proxy-extras to CI requirements for prisma migrations — _@yuneng-jiang_
- [`03a0c37`](https://github.com/BerriAI/litellm/commit/03a0c37608624fb5aced311490e3b739b7952dfe) Merge pull request #23467 from joereyna/fix/mcp-oauth2-token-cache-tests — _@joereyna_
- [`3f0c7b5`](https://github.com/BerriAI/litellm/commit/3f0c7b5552d0d1d02c3c45dcdfdbd551af5e5772) [Fix] Update realtime websocket tests for websockets v15+ API — _@yuneng-jiang_
- [`7892713`](https://github.com/BerriAI/litellm/commit/78927138d288e6a780c83816b05f677b39b9e38e) fix(proxy): add team_member_budget_duration to NewTeamRequest — _@michelligabriele_
- [`89d8401`](https://github.com/BerriAI/litellm/commit/89d8401d7294dedcac0811e727b855417850c57d) Merge pull request #23483 from BerriAI/litellm_update_deprecated_test_models — _@yuneng-jiang_
- [`41b6cb0`](https://github.com/BerriAI/litellm/commit/41b6cb02de8508a0e9df299069a793809e69b5cb) Merge pull request #23482 from BerriAI/litellm_fix_ruff_mcp_rest_endpoints — _@yuneng-jiang_
- [`cc81e3c`](https://github.com/BerriAI/litellm/commit/cc81e3c226b7bedf25b0e2217f0283705ce5258a) Replace deprecated model names in tests that were removed from remote model cost map — _@yuneng-jiang_
- [`515fbca`](https://github.com/BerriAI/litellm/commit/515fbcae99c2a0edd7284d60817e718243b35f85) [Fix] Ruff lint errors in MCP server files — _@yuneng-jiang_
- [`f3e870a`](https://github.com/BerriAI/litellm/commit/f3e870a3a90f554fc04c55b45950c6ab4f22f8e9) Merge pull request #23478 from BerriAI/litellm_fix_o1_preview_outdated_test — _@yuneng-jiang_
- [`fe8660d`](https://github.com/BerriAI/litellm/commit/fe8660da011bff15a16962227337429b85c15343) Merge pull request #23477 from BerriAI/litellm_/unruffled-shaw — _@yuneng-jiang_
- [`a93c069`](https://github.com/BerriAI/litellm/commit/a93c069dd59fd85ef4c40e33400e0f4685f9915b) [Fix] Add max_depth guard to BFL _read_image_bytes recursive function — _@yuneng-jiang_
- [`fb65384`](https://github.com/BerriAI/litellm/commit/fb65384a76adc6bd75a833745da2216349c879aa) [Fix] Remove deprecated o1-preview from O-series test and deduplicate is_o_series check — _@yuneng-jiang_
- [`553cfc6`](https://github.com/BerriAI/litellm/commit/553cfc6d727da54854825598a863a6af59fb6c21) [Fix] Remove recursion in BFL _read_image_bytes to pass CI recursive detector — _@yuneng-jiang_
- [`25e7d33`](https://github.com/BerriAI/litellm/commit/25e7d3372bb4c456cd52a43ab3feea415d31fb8a) Merge pull request #23474 from BerriAI/litellm_litellm-ci-stability-c0eb — _@yuneng-jiang_
- [`ba8fed7`](https://github.com/BerriAI/litellm/commit/ba8fed7fc83d97e481d4e8e5c4e38dea243f41bf) refactor: extract _list_tools_for_single_server helper to fix PLR0915 — _@cursoragent_
- [`e242356`](https://github.com/BerriAI/litellm/commit/e24235657026574aea6717a8e68d84e375fc1a14) fix(ci): fix ruff lint errors and 9 failing unit tests on main — _@cursoragent_
- [`9c3fab2`](https://github.com/BerriAI/litellm/commit/9c3fab24adb3a36fcfa02dc2dfa4f87d7893d0f4) fix(proxy): restore per-entity breakdown in aggregated daily activity endpoint — _@michelligabriele_
- [`7f0ec1e`](https://github.com/BerriAI/litellm/commit/7f0ec1e3d80375458f9f8ea3e148c516e2c5fd1c) Merge pull request #23469 from BerriAI/litellm_extras_mar12 — _@yuneng-jiang_
- [`5ffa6b9`](https://github.com/BerriAI/litellm/commit/5ffa6b955ee657a34a94a9634d597ec95740253a) build — _@yuneng-jiang_
- [`3a3fd64`](https://github.com/BerriAI/litellm/commit/3a3fd64fcba660a81c3bcb6376a29467975719b3) bump: version 0.4.55 → 0.4.56 — _@yuneng-jiang_
- [`cffb267`](https://github.com/BerriAI/litellm/commit/cffb2676a52e65102ad28e9f5272fd3fbf454382) bump: version 0.4.54 → 0.4.55 — _@yuneng-jiang_
- [`7697b1c`](https://github.com/BerriAI/litellm/commit/7697b1c3976c90c09920a8e0c0000dec2328faf0) fix(sso): direct PKCE token exchange + Redis wiring for multi-instance SSO (#22923) — _@ishaan-jaff_
- [`7ec7823`](https://github.com/BerriAI/litellm/commit/7ec78232b2d12c0810f7fcbd2920e7e6c77fed04) Merge pull request #23440 from BerriAI/litellm_oss_staging_03_11_2026 — _@Chesars_
- [`690ad4c`](https://github.com/BerriAI/litellm/commit/690ad4c45b01e3e0d406712a9d783a6193b0819f) fix(openai): drop all reasoning_effort for gpt-5.4 + tools, including 'none' — _@Chesars_
- [`17dbc61`](https://github.com/BerriAI/litellm/commit/17dbc61f3947dd8e920b2b9afdb90a509b2a9045) fix(openai): align gpt-5.4 reasoning_effort drop with main — _@Chesars_
- [`180e72d`](https://github.com/BerriAI/litellm/commit/180e72d15d0afc613c56a4060caea37edc7147ff) fix: add oauth2_flow=client_credentials to MCPServer test helper — _@joereyna_
- [`ec76378`](https://github.com/BerriAI/litellm/commit/ec763784e0e9f3045854bfa344331de272adda3b) Merge branch 'main' into litellm_oss_staging_03_11_2026 — _@Chesars_
- [`f2f8434`](https://github.com/BerriAI/litellm/commit/f2f843448ea35f8c6ca4423411c8d192fedab62c) Merge pull request #23414 from joereyna/fix/pass-through-server-root-path — _@joereyna_
- [`779a231`](https://github.com/BerriAI/litellm/commit/779a231036ac032a04292918804fb2456dcb1c53) Merge pull request #23465 from BerriAI/ui_build_mar12 — _@yuneng-jiang_
- [`d17d205`](https://github.com/BerriAI/litellm/commit/d17d20596333c7df6c6d7dbb764a026ce5f2beec) chore: update Next.js build artifacts (2026-03-12 18:25 UTC, node v22.16.0) — _@yuneng-jiang_
- [`c8ce098`](https://github.com/BerriAI/litellm/commit/c8ce098b65d9e0d804e162c2a29568eec6cc5f1b) fixing tests — _@yuneng-jiang_
- [`68b8b47`](https://github.com/BerriAI/litellm/commit/68b8b47d58b6d2c97217bc9d2e9ef3d66ebdc348) Merge pull request #23463 from BerriAI/ui_build_mar12 — _@yuneng-jiang_
- [`e38edb6`](https://github.com/BerriAI/litellm/commit/e38edb6190dd8ac67abe01a9cc4e97dcb2876832) fixing ui build — _@yuneng-jiang_
- [`0fc407c`](https://github.com/BerriAI/litellm/commit/0fc407cfddb70ff3f9ecf1c0b4213ba33510fc0c) ci: exclude enterprise/ from black --check in linting workflow — _@Chesars_
- [`f79744c`](https://github.com/BerriAI/litellm/commit/f79744cee2217d387b5e69e8a42a6c716482ec24) Merge pull request #18648 from Chesars/fix-black-check-ci — _@Chesars_
- [`0fcc36c`](https://github.com/BerriAI/litellm/commit/0fcc36c3017ede5c49da61ab459776cbdd80cd6e) style: run black formatter on 52 non-enterprise files — _@Chesars_
- [`3c322a8`](https://github.com/BerriAI/litellm/commit/3c322a879f1f4b07ef6e1d5d4488c05aac9da2b4) Merge pull request #23460 from BerriAI/litellm_add_webrtc_support — _@Sameerlite_
- [`8bbebb5`](https://github.com/BerriAI/litellm/commit/8bbebb5d75a44df80270cd206a8e4b2f9ba3ec81) Improve doc for WebRTC — _@Sameerlite_
- [`5ccf1cf`](https://github.com/BerriAI/litellm/commit/5ccf1cf4fec66ac7a5456f4f8f8b511c7babfb59) Merge pull request #23459 from BerriAI/litellm_add_webrtc_support — _@Sameerlite_
- [`cf1d330`](https://github.com/BerriAI/litellm/commit/cf1d330e63454d74d5ff90c6efd8b68f4da49aba) Improve doc for WebRTC — _@Sameerlite_
- [`e01d722`](https://github.com/BerriAI/litellm/commit/e01d7228035973103036772b2f205c643785f72e) Merge branch 'main' into litellm_oss_staging_03_11_2026 — _@Chesars_
- [`d507f84`](https://github.com/BerriAI/litellm/commit/d507f840d376e86df425d802b2489be9c76297ac) Merge pull request #23432 from BerriAI/litellm_azure-model-router-show-actual-model — _@Sameerlite_
- [`d1a99f5`](https://github.com/BerriAI/litellm/commit/d1a99f571eaa829421019354f33849942ee2d1ce) Merge pull request #23446 from BerriAI/litellm_add_webrtc_support — _@Sameerlite_
- [`507bced`](https://github.com/BerriAI/litellm/commit/507bced04f558a6f1ddaad0b6d70f415df61f8a6) Fix the live tester — _@Sameerlite_
- [`33457ab`](https://github.com/BerriAI/litellm/commit/33457ab702303e3a5c56b8c671fbe565f6c601c7) Merge pull request #23457 from Chesars/revert-revert-21601-model-cost-aliases — _@Chesars_
- [`4e6e1d8`](https://github.com/BerriAI/litellm/commit/4e6e1d8de8c8deecb087c39a8edc2753a43dd78f) merge: resolve conflicts with upstream staging (bedrock + mcp tests) — _@Chesars_
- [`feed274`](https://github.com/BerriAI/litellm/commit/feed274aa3d6757f42f56473c06c985f1ccf9413) Reapply "feat: add model_cost aliases expansion support" — _@Chesars_
- [`7c5e2e8`](https://github.com/BerriAI/litellm/commit/7c5e2e83898105d565ef2f2032fb389b3523d77a) fix(proxy): make async_post_call_response_headers_hook consistent across all endpoints (#22985) — _@michelligabriele_
- [`1af7f11`](https://github.com/BerriAI/litellm/commit/1af7f11dae5e313db1fafb2ccdeae662fbc52f17) fix: extract normalize_route_for_root_path to deduplicate root-path stripping; fix mock target — _@joereyna_
- [`938452c`](https://github.com/BerriAI/litellm/commit/938452cc59e13c0978088a2befff143e0562ef57) fix: extract normalize_route_for_root_path to deduplicate root-path stripping — _@joereyna_
- [`6bd7cd7`](https://github.com/BerriAI/litellm/commit/6bd7cd757376e8940dc011f2c51c04a1908fd720) Merge branch 'main' into litellm_oss_staging_03_11_2026 — _@Chesars_
- [`291e6e1`](https://github.com/BerriAI/litellm/commit/291e6e18415b965ea8fad158802d43fce108a5d4) Merge pull request #23435 from BerriAI/litellm_vector-store-retrieve-list-update-delete — _@Sameerlite_
- [`4f5b6ae`](https://github.com/BerriAI/litellm/commit/4f5b6ae5563e9494013fa5c923dd5cad4403c600) Merge pull request #23448 from BerriAI/litellm_cicd_1203126 — _@Sameerlite_
- [`b7cfcdd`](https://github.com/BerriAI/litellm/commit/b7cfcdd35d49597e126a4bdcfb2123e585eea482) Add docs — _@Sameerlite_
- [`fa68d69`](https://github.com/BerriAI/litellm/commit/fa68d69bcfedb04e0d54e32f498069d0c4c32c32) fix: restore _get_effort_level and is_model_gpt_5_4_plus_model (PR #23151) — _@Chesars_
- [`9d1bcc7`](https://github.com/BerriAI/litellm/commit/9d1bcc7d374f168cb485587b13322d25e5e8061f) Merge upstream/main into litellm_oss_staging_03_11_2026 — _@Chesars_
- [`bb451cf`](https://github.com/BerriAI/litellm/commit/bb451cfcb061c58e85180255dcdb7719b2d2e2ec) address greptile review feedback (greploop iteration 2) — _@Sameerlite_
- [`f4103c5`](https://github.com/BerriAI/litellm/commit/f4103c51a6b314855f7bc94759ce2f6401edb68d) address greptile review feedback (greploop iteration 1) — _@Sameerlite_
- [`f5be794`](https://github.com/BerriAI/litellm/commit/f5be79419c7c5e4869d4fb76770c50c782551d6f) Fix test_claude_agent_sdk_streaming — _@Sameerlite_
- [`f6238e7`](https://github.com/BerriAI/litellm/commit/f6238e781eaf5ca19005c06a05bac2f2c548705e) Fix mypy — _@Sameerlite_
- [`982f391`](https://github.com/BerriAI/litellm/commit/982f3917c527d99854981e88507ad4b864a376ea) Fix test_standard_logging_payload — _@Sameerlite_
- [`15d873e`](https://github.com/BerriAI/litellm/commit/15d873e2049795ff2075965600d3c34dba0b2a35) Fix update deprecated model test — _@Sameerlite_
- [`374c35a`](https://github.com/BerriAI/litellm/commit/374c35a6b795de3bd99619641900ac5cccf0ab43) Fix update deprecated model test — _@Sameerlite_
- [`7c70015`](https://github.com/BerriAI/litellm/commit/7c70015a5fc4c3064cb67970835f1b58f23e1667) Fix mcp error — _@Sameerlite_
- [`18df137`](https://github.com/BerriAI/litellm/commit/18df137021ced849957d19dd4762641bcef36a51) Fix mypy error — _@Sameerlite_
- [`0f91a4f`](https://github.com/BerriAI/litellm/commit/0f91a4f9da25e0984e4799dc0d81c3892f005dd3) Fix test_get_tools_for_single_server — _@Sameerlite_
- [`412a283`](https://github.com/BerriAI/litellm/commit/412a283569d575425e5eca3a62eef8dbecdc4b90) Revert "fix(vertex): skip harmful schema transforms for Gemini 2.0+ tool parameters" — _@Sameerlite_
- [`72c9848`](https://github.com/BerriAI/litellm/commit/72c98489d12e9709d6450078a2215d1001c5ae73) Revert "fix(vertex): shallow copy parameters before mutating in _build_vertex_schema_for_gemini_2" — _@Sameerlite_
- [`47e9a0d`](https://github.com/BerriAI/litellm/commit/47e9a0dcf03a5a3b16aa86f94f863ed32775cbbb) Merge branch 'litellm_oss_staging_03_11_2026' of https://github.com/BerriAI/litellm into litellm_oss_staging_03_11_2026 — _@Chesars_
- [`1be6b31`](https://github.com/BerriAI/litellm/commit/1be6b31e2fa8baaaa909bfa5ba2168a910c5781e) merge: resolve conflicts between main and litellm_oss_staging_03_11_2026 — _@Chesars_
- [`7aa5bd3`](https://github.com/BerriAI/litellm/commit/7aa5bd3ff341dc4ae7fe789ac5fafc5fb43e1363) Merge pull request #23429 from BerriAI/litellm_dev_03_10_2026_p1 — _@Sameerlite_
- [`7778af6`](https://github.com/BerriAI/litellm/commit/7778af6c785ea141880ff302b046c21cc3aefb0e) Add tests — _@Sameerlite_
- [`e2be1aa`](https://github.com/BerriAI/litellm/commit/e2be1aabaeb1e82584649a7a3ec97284a4a8e96f) Add webrtc in init — _@Sameerlite_
- [`eb64cd6`](https://github.com/BerriAI/litellm/commit/eb64cd6c46eb7d11289f34f08a79ba61d7060faa) Add webrtc transformations and http handler — _@Sameerlite_
- [`f793d20`](https://github.com/BerriAI/litellm/commit/f793d2043bce7d4078dd9b90906cfa097875c9ca) Add webrtc routing — _@Sameerlite_
- [`edd4463`](https://github.com/BerriAI/litellm/commit/edd4463a283d97573ec096f405d338a4e84280e5) Add webrtc endpoints — _@Sameerlite_
- [`7737e9c`](https://github.com/BerriAI/litellm/commit/7737e9c31334c2907c7a2a4aee3c138abefea6e6) feat(ui): migrate user_dashboard.tsx and user_info_view.tsx to /v2/user/info — _@cursoragent_
- [`d03404d`](https://github.com/BerriAI/litellm/commit/d03404d21e040a4187f850c3e8057596fec93ba6) feat(ui): add userGetInfoV2 networking function and migrate useCurrentUser hook — _@cursoragent_
- [`679b8fd`](https://github.com/BerriAI/litellm/commit/679b8fd52a6e199f77b8af53fad5c8ff7069033c) test: add unit tests for /v2/user/info endpoint and route checks — _@cursoragent_
- [`81e3a2e`](https://github.com/BerriAI/litellm/commit/81e3a2e42114614a89833aaaae5a9a1221ef4ff2) feat: add /v2/user/info endpoint - lightweight user info with RBAC — _@cursoragent_
- [`e37efc4`](https://github.com/BerriAI/litellm/commit/e37efc4218b80a0242e7c69133aa867aa3d06ded) Merge pull request #23431 from BerriAI/litellm_gemini_model_map_update — _@Sameerlite_
- [`116795f`](https://github.com/BerriAI/litellm/commit/116795f7b4c7fb3a49ea389416de1cbac9ea00a3) Fix input_cost_per_video_per_second pricing — _@Sameerlite_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
