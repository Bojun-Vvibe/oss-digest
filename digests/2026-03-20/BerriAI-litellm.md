# BerriAI/litellm — 2026-03-20

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-19T23:59:59.000Z → 2026-03-20T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is a new **control plane for multi-proxy worker management** ([#24217](https://github.com/BerriAI/litellm/pull/24217), commit [ad43a35](https://github.com/BerriAI/litellm/commit/ad43a35d762d62cd2cb9a18a0f1fbdef4f3fb67c)) — a central admin instance can now manage multiple regional worker proxies from a single UI. Operators running fleets of LiteLLM proxies should read this first. Version was bumped to **1.82.5** ([e5dc912](https://github.com/BerriAI/litellm/commit/e5dc912367721744b835e701118a89d41201ed7a)) alongside an MCP upgrade to 1.26.0 ([#24179](https://github.com/BerriAI/litellm/pull/24179)).

Notable feature work:
- **Team MCP Server Manager Role** ([#24171](https://github.com/BerriAI/litellm/pull/24171)) was merged but then **reverted** the same day in [#24255](https://github.com/BerriAI/litellm/pull/24255) — worth tracking if you depend on team-scoped MCP management.
- **Per-model-group deployment affinity** in the router ([#24110](https://github.com/BerriAI/litellm/pull/24110)) and **proxy-wide default API key TPM/RPM limits** ([#24088](https://github.com/BerriAI/litellm/pull/24088)).
- **Day-0 support for gpt-5.4 mini and nano** ([#23958](https://github.com/BerriAI/litellm/pull/23958)) and **prompt management for the Responses API** ([#23999](https://github.com/BerriAI/litellm/pull/23999)).
- UI: Teams table modernized to AntD with server-side pagination ([#24189](https://github.com/BerriAI/litellm/pull/24189)); ChatUI refactored to extract a `useChatHistory` hook ([#24172](https://github.com/BerriAI/litellm/pull/24172)); AntD message API migrated to context to fix non-rendering toasts ([#24192](https://github.com/BerriAI/litellm/pull/24192)).

Provider/cost fixes worth noting:
- **Whisper pricing correction** — `output_cost_per_second` set to 0.0 (was 0.0001) for `whisper-1`/`azure/whisper-1`; transcription is input-billed ([#23842](https://github.com/BerriAI/litellm/pull/23842)). Anyone tracking Whisper spend should re-check their numbers.
- **Bedrock `count_tokens`** now respects `api_base`/`aws_bedrock_runtime_endpoint` ([#24199](https://github.com/BerriAI/litellm/pull/24199)).
- **Gemini embeddings** now send `taskType` in camelCase ([#24191](https://github.com/BerriAI/litellm/pull/24191)).
- **Moonshot** preserves `reasoning_content` across multi-turn tool calls ([#23828](https://github.com/BerriAI/litellm/pull/23828)); **OVHCloud** recursion in `get_supported_openai_params` fixed ([#24118](https://github.com/BerriAI/litellm/pull/24118)); **Vertex AI batch cancel** added ([#23957](https://github.com/BerriAI/litellm/pull/23957)); **Anthropic** picks up `ANTHROPIC_AUTH_TOKEN`/`ANTHROPIC_BASE_URL` env vars ([#24140](https://github.com/BerriAI/litellm/pull/24140)).
- **Streaming logging** now merges `hidden_params` into metadata, closing a parity gap with non-streaming ([#24220](https://github.com/BerriAI/litellm/pull/24220)).
- Proxy stability: orphaned Prisma engine subprocess killed on failed disconnect ([#24149](https://github.com/BerriAI/litellm/pull/24149)).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`9c47d50`](https://github.com/BerriAI/litellm/commit/9c47d50f7496ede7bd75d5eaa86100e04b3c47b2) add startup messages — _@ryan-crabbe_
- [`1da02b6`](https://github.com/BerriAI/litellm/commit/1da02b66f6d68b4cc957abeaef0a922fcc61029e) Merge branch 'main' into litellm_audit_log_s3_export — _@ryan-crabbe_
- [`e6e3085`](https://github.com/BerriAI/litellm/commit/e6e3085845b66d6a67388ebb73770f5da291c9a0) Merge pull request #24258 from joereyna/fix/anthropic-file-content-test-mock — _@yuneng-jiang_
- [`e678dde`](https://github.com/BerriAI/litellm/commit/e678ddea4310754a001659e66c170439562cf2ae) Fix unreachable special MCP server name guard in add_mcp_server — _@yuneng-jiang_
- [`f0e0d98`](https://github.com/BerriAI/litellm/commit/f0e0d98f861bb5e42a0828618bdd75e2a7fc2514) fix(test): mock get_auth_header instead of get_api_key in anthropic file content test — _@joereyna_
- [`6862930`](https://github.com/BerriAI/litellm/commit/6862930538ed74ecd9411b24b11fd5928af3fa5a) Revert test to match reverted team MCP manager feature — _@yuneng-jiang_
- [`1fad0d5`](https://github.com/BerriAI/litellm/commit/1fad0d557d8e2e83c4c0a326e9e0c41ee1c05776) Merge pull request #24255 from BerriAI/revert-24171-litellm_/awesome-dhawan — _@yuneng-jiang_
- [`c9683c6`](https://github.com/BerriAI/litellm/commit/c9683c6f9751b6877b938a5b2f29937394c8179d) Revert "[Feature] Team MCP Server Manager Role" — _@yuneng-jiang_
- [`72c307d`](https://github.com/BerriAI/litellm/commit/72c307df0e7b8621a3b25133d807c3ccf111bfac) Merge pull request #24217 from BerriAI/litellm_ryan_march_18 — _@ryan-crabbe_
- [`541863a`](https://github.com/BerriAI/litellm/commit/541863a566e830349a006b0526c980cd6b7419a1) Merge branch 'litellm_ryan_march_18' of https://github.com/BerriAI/litellm into litellm_ryan_march_18 — _@ryan-crabbe_
- [`6f81eb0`](https://github.com/BerriAI/litellm/commit/6f81eb01fe1b1efad07b801d21973a30c8aa68b0) fix: apply Black formatting to ui_sso.py — _@ryan-crabbe_
- [`59b4a05`](https://github.com/BerriAI/litellm/commit/59b4a0578219540538c078ae9f10394f1f1df19d) Merge branch 'main' into litellm_ryan_march_18 — _@ryan-crabbe_
- [`ba4aae0`](https://github.com/BerriAI/litellm/commit/ba4aae02c75a4087e8041e6781c0501904ea6f1d) Fix outdated MCP server auth test for team MCP manager flow — _@yuneng-jiang_
- [`5d317c3`](https://github.com/BerriAI/litellm/commit/5d317c3a5c26e44a4980b5b018527a6005cd3a9b) Merge remote-tracking branch 'origin' into litellm_yj_march_19_2026 — _@yuneng-jiang_
- [`50f88c8`](https://github.com/BerriAI/litellm/commit/50f88c86427a3737736d4635449a64caecdac9ef) Merge pull request #24243 from BerriAI/litellm_/gifted-spence — _@yuneng-jiang_
- [`4d19855`](https://github.com/BerriAI/litellm/commit/4d198558c8a6ef420d06e5fd035a17d8ad66bfa6) Merge branch 'main' into litellm_/gifted-spence — _@yuneng-jiang_
- [`404c68c`](https://github.com/BerriAI/litellm/commit/404c68c74b62a220fc935f2510fa649860f58aa4) Add missing team_member_budget_duration param to new_team docstring — _@yuneng-jiang_
- [`3ea69c9`](https://github.com/BerriAI/litellm/commit/3ea69c95396354a99ae22a213dc62ac973b0138c) Merge remote-tracking branch 'origin' into litellm_yj_march_19_2026 — _@yuneng-jiang_
- [`b36269e`](https://github.com/BerriAI/litellm/commit/b36269e2c131b591324532531827db1dbc37efc3) Merge pull request #24171 from BerriAI/litellm_/awesome-dhawan — _@yuneng-jiang_
- [`700fd86`](https://github.com/BerriAI/litellm/commit/700fd86de971f0ca50bafafed129ab17af661f3a) Fix importorskip guard and add LiteLLM_TeamTableCachedObj import — _@yuneng-jiang_
- [`c6ffda9`](https://github.com/BerriAI/litellm/commit/c6ffda96718a790a18eb586faac2f3bcaa197b04) Merge pull request #23484 from michelligabriele/fix/team-member-budget-duration-on-create — _@yuneng-jiang_
- [`5927a77`](https://github.com/BerriAI/litellm/commit/5927a77a1409634be924e138e18c41e5d36add1d) Merge branch 'main' into fix/aggregated-activity-entity-breakdown — _@yuneng-jiang_
- [`f884e4a`](https://github.com/BerriAI/litellm/commit/f884e4ac6658405058f351eaf3314041e8e992cb) Merge branch 'main' into fix/team-member-budget-duration-on-create — _@yuneng-jiang_
- [`d381b58`](https://github.com/BerriAI/litellm/commit/d381b58570864398eba42df09457ba81eaf15c6a) Merge branch 'main' into litellm_ryan_march_18 — _@ryan-crabbe_
- [`a05824d`](https://github.com/BerriAI/litellm/commit/a05824d9bacc56f16cf6985e8ea3e77d946d7b28) Fix code qa — _@Sameerlite_
- [`7813947`](https://github.com/BerriAI/litellm/commit/78139472a166b60d51b2b4298dc829ccde393603) fix(moonshot): preserve reasoning_content on Pydantic Message objects in multi-turn tool calls (#23828) — _@BillionClaw_
- [`00dd984`](https://github.com/BerriAI/litellm/commit/00dd9844158c06da595a863c3c18552612068079) fix(whisper): correct output_cost_per_second pricing and cost calculation (#23842) — _@gvioss_
- [`af7e2e6`](https://github.com/BerriAI/litellm/commit/af7e2e687870f133e4a915f231b56b00572d4b5e) Fix ruff PLR0915 error — _@Sameerlite_
- [`714c1b8`](https://github.com/BerriAI/litellm/commit/714c1b80e10e7ecd73b241a8a37e98dca893a692) docs(pricing): add official source links for Azure DeepSeek & Cohere models (#20181) — _@Jayachander123_
- [`e8ec9eb`](https://github.com/BerriAI/litellm/commit/e8ec9eb44a0cc1c2dfb1a70ec29d36905f06821a) Merge pull request #24220 from milan-berri/fix/streaming-metadata-hidden-params — _@Krish Dholakia_
- [`45f322c`](https://github.com/BerriAI/litellm/commit/45f322caef5483acc3fbc63012e644bf55f7bd5b) Fix ruff PLR0915 error — _@Sameerlite_
- [`8cb3a0f`](https://github.com/BerriAI/litellm/commit/8cb3a0f1d25adb7dd22cd0af881474b24690319e) Fix ruff PLR0915 error — _@Sameerlite_
- [`7c168ab`](https://github.com/BerriAI/litellm/commit/7c168ab173e67c03ad9128adf8343370f1b2d90d) Fix gpt-5.4 using remote model cost map for tests — _@Sameerlite_
- [`92e98a2`](https://github.com/BerriAI/litellm/commit/92e98a2fd5d46a8a7b1c407ecff84e926914768d) Fix test_aaamodel_prices_and_context_window_json_is_valid — _@Sameerlite_
- [`2a69426`](https://github.com/BerriAI/litellm/commit/2a69426e2f8dcca0b283691f9df78ba3df8f6e30) Fix mypy and code qa issues — _@Sameerlite_
- [`0673c57`](https://github.com/BerriAI/litellm/commit/0673c57fefeb03cd16b1df9c0fd022b01090762e) Merge pull request #23939 from Sameerlite/Sameerlite/azure-ai-annotations — _@Sameerlite_
- [`8d843fd`](https://github.com/BerriAI/litellm/commit/8d843fd93bb286ca165c0f0fe77d4eb201a55c4a) Merge pull request #23957 from Sameerlite/litellm_vertex-cancel-batch — _@Sameerlite_
- [`589c6cd`](https://github.com/BerriAI/litellm/commit/589c6cdad00dc4a83fa5adf97cd2d8279739d44f) fix(gemini-embeddings): convert task_type to camelCase taskType for Gemini API (#24191) — _@christopherbaer_
- [`330ef5e`](https://github.com/BerriAI/litellm/commit/330ef5e57998e86bded213ee987c46ecbd74fd73) docs: add Gemini/Vertex AI to prompt caching docs — _@Klaus_
- [`5372334`](https://github.com/BerriAI/litellm/commit/53723342336a24312d5253704f780f12b302ce68) Merge branch 'main' into fix/streaming-metadata-hidden-params — _@milan-berri_
- [`f36a59d`](https://github.com/BerriAI/litellm/commit/f36a59d196e42670007de37b4265b88d96abd953) fix(logging): merge hidden_params into metadata for streaming completions — _@milan-berri_
- [`1cd7a48`](https://github.com/BerriAI/litellm/commit/1cd7a48c33cd72239913ccf73ecd87c3be4d5a30) Add tests for edit and delete MCP server manager paths — _@yuneng-jiang_
- [`523fbed`](https://github.com/BerriAI/litellm/commit/523fbed233d0c6e33e1ef7617e6aef42fb041dd2) Merge pull request #24199 from stias/fix/bedrock-count-tokens-custom-endpoint — _@Krish Dholakia_
- [`b8c9bf7`](https://github.com/BerriAI/litellm/commit/b8c9bf7d256ed90b1f8cfdbe8b57d79f118009f4) refactor: extract _auto_assign and _remove helpers, use team_endpoints helper — _@yuneng-jiang_
- [`d3afaf6`](https://github.com/BerriAI/litellm/commit/d3afaf613dc0865ad92f374f41979cb3bee1c9e7) Update tests/litellm_utils_tests/test_bedrock_token_counter.py — _@stias_
- [`eb73370`](https://github.com/BerriAI/litellm/commit/eb733702fcd5a1c3ddd57ffc2416005f5d51cd8a) Update tests/litellm_utils_tests/test_bedrock_token_counter.py — _@stias_
- [`9272483`](https://github.com/BerriAI/litellm/commit/9272483f77cc59024cf049e489e09b44682ea9e0) Merge pull request #24015 from Sameerlite/litellm_fix_ensure_alternating_roles — _@Sameerlite_
- [`8da3efd`](https://github.com/BerriAI/litellm/commit/8da3efdfbe3251dbaf4ba4f9441122e0f6af6c21) Fix code qa and mypy lint issues — _@Sameerlite_
- [`de21715`](https://github.com/BerriAI/litellm/commit/de217150d10696aa7a4c80483755b0f716e07297) Merge pull request #24110 from BerriAI/Sameerlite/model-level-affinity — _@Sameerlite_
- [`55d815b`](https://github.com/BerriAI/litellm/commit/55d815b84c234c1227826afee342bd8e0f7439d3) Merge pull request #23854 from milan-berri/docs/encrypted-content-affinity-min-version — _@Sameerlite_
- [`8ad2068`](https://github.com/BerriAI/litellm/commit/8ad20687114eaee6715ea17adc79ca686732ff75) Merge pull request #24106 from BerriAI/Sameerlite/pre-ratelimit-bg — _@Sameerlite_
- [`7bf16b2`](https://github.com/BerriAI/litellm/commit/7bf16b25d27bd1bc5f0655476595125a7ab41501) Merge pull request #24079 from Sameerlite/Sameerlite/passthrough-auth-fix — _@Sameerlite_
- [`af036ef`](https://github.com/BerriAI/litellm/commit/af036efe039376b254f1f0cc9ded6d1cf28a93a5) Merge pull request #23969 from Sameerlite/litellm_file-search-emulated-alignment — _@Sameerlite_
- [`1104f92`](https://github.com/BerriAI/litellm/commit/1104f928dff82c61dffbaf0f466a005ae4c3a449) Merge pull request #24009 from Sameerlite/litellm_vertex_paygo_tutorial — _@Sameerlite_
- [`aafe9da`](https://github.com/BerriAI/litellm/commit/aafe9da7fcd8df3f876861a1be32a0ae9ad2318b) Merge pull request #23999 from Sameerlite/litellm_feat_prompt_responses — _@Sameerlite_
- [`4d06b1c`](https://github.com/BerriAI/litellm/commit/4d06b1cf0a3fa3d26f40d729d92ff261de3454f3) fix doc — _@Sameerlite_
- [`ec7c94c`](https://github.com/BerriAI/litellm/commit/ec7c94c61f680b8e769416cd89e7ca2f50d0c6d1) Add about managed ids in the doc — _@Sameerlite_
- [`2634088`](https://github.com/BerriAI/litellm/commit/26340883541e75df7ef8d08566c51b410c8f969b) Merge branch 'litellm_dev_sameer_16_march_week' into litellm_file-search-emulated-alignment — _@Sameerlite_
- [`2d02eaa`](https://github.com/BerriAI/litellm/commit/2d02eaaa4e00e1b50aed518916c2943ba967e4af) Merge pull request #23958 from Sameerlite/litellm_gpt-5.4_mini — _@Sameerlite_
- [`ab8675d`](https://github.com/BerriAI/litellm/commit/ab8675dd12bc7b16217db2376e3e52fd1672ae25) Merge branch 'main' into litellm_oss_staging_03_05_2026 — _@Sameerlite_
- [`4088f2b`](https://github.com/BerriAI/litellm/commit/4088f2b6da3878ef9a77793cd928bf65bac22eaa) Merge branch 'main' into litellm_oss_staging_03_19_2026 — _@Sameerlite_
- [`009cbfa`](https://github.com/BerriAI/litellm/commit/009cbfa7993acf46755e76539287c5a823f66347) Merge pull request #24088 from Point72/ephrimstanley/limits — _@Sameerlite_
- [`72902c3`](https://github.com/BerriAI/litellm/commit/72902c39c511d33fdc1c13310633f46c37eadfc5) Remove extra newline in common_utils.py — _@stias_
- [`bc4608e`](https://github.com/BerriAI/litellm/commit/bc4608e718320c2f3930dcf909514f52d93cd6e9) fix(bedrock): respect api_base and aws_bedrock_runtime_endpoint in count_tokens endpoint — _@stias_
- [`8c396e5`](https://github.com/BerriAI/litellm/commit/8c396e5ca957c04a3e1cde181c220a67fafedd65) Merge pull request #24172 from BerriAI/litellm_extract_useChatHistory_hook — _@yuneng-jiang_
- [`bdf2475`](https://github.com/BerriAI/litellm/commit/bdf24757c029943d55389ac3fad439b108d7b598) Merge pull request #24189 from BerriAI/litellm_teams_table_modernize — _@yuneng-jiang_
- [`9b519c4`](https://github.com/BerriAI/litellm/commit/9b519c4754f3d345c7898f5b99cb2d2c183c22ca) Merge pull request #24192 from BerriAI/litellm_migrate_antd_message_to_context_api — _@yuneng-jiang_
- [`f003c9c`](https://github.com/BerriAI/litellm/commit/f003c9c865248d8cec61c3f07ea2a2e8c426a271) Merge branch 'main' into litellm_oss_staging_03_17_2026 — _@Sameerlite_
- [`be2c679`](https://github.com/BerriAI/litellm/commit/be2c679f2dfd7c112c5879bccf51ddf45d75bfea) fix: resolve recursion in OVHCloud get_supported_openai_params (#24118) — _@themavik_
- [`d7c419b`](https://github.com/BerriAI/litellm/commit/d7c419bfee93b14bbe0a3a7f4ae31a3ba5768185) Merge pull request #24179 from joereyna/fix/upgrade-mcp-1.26.0 — _@joereyna_
- [`34d954f`](https://github.com/BerriAI/litellm/commit/34d954f8cb9d02c5c4176368a9baf0dc0dbb5e8d) [Fix] UI: Migrate AntD message API to use context-based MessageManager — _@yuneng-jiang_
- [`65bfd44`](https://github.com/BerriAI/litellm/commit/65bfd449e980ac08e6339af7a569a69dfa38b192) address greptile review feedback (greploop iteration 2) — _@yuneng-jiang_
- [`e714104`](https://github.com/BerriAI/litellm/commit/e71410470267f64a00f61d7b75094a8628054b0e) fix: address Greptile review feedback — _@yuneng-jiang_
- [`dfc4401`](https://github.com/BerriAI/litellm/commit/dfc4401e1c305f11c898e989991503122668bede) fix: use check_db_only=True in _assert_can_manage_team_mcp_server — _@yuneng-jiang_
- [`6c06e6d`](https://github.com/BerriAI/litellm/commit/6c06e6dc80fd7a2870a3f6fef57a8d651de1a82b) fix: link new object_permission_id back to team on first MCP server create — _@yuneng-jiang_
- [`f4e5fb2`](https://github.com/BerriAI/litellm/commit/f4e5fb2b4ae4d388d62e66eaba64c33a162bf8d6) fix: exclude team_id from Prisma create payload in _prepare_mcp_server_data — _@yuneng-jiang_
- [`ad43a35`](https://github.com/BerriAI/litellm/commit/ad43a35d762d62cd2cb9a18a0f1fbdef4f3fb67c) feat: add control plane for multi-proxy worker management — _@ryan-crabbe_
- [`883611a`](https://github.com/BerriAI/litellm/commit/883611aa918981e70e1dbe122efabe8a32b3af9c) [Feature] UI - Teams: Modernize teams table with AntD, server-side pagination, and v2 API — _@yuneng-jiang_
- [`784f943`](https://github.com/BerriAI/litellm/commit/784f9431ad56846dd2df64787704f1f9390fc755) Merge pull request #24188 from BerriAI/main — _@Sameerlite_
- [`32ada45`](https://github.com/BerriAI/litellm/commit/32ada454a2e6eed5113d28ed74f0bd6f4de22f38) fix: upgrade mcp to 1.26.0 — _@joereyna_
- [`30589b0`](https://github.com/BerriAI/litellm/commit/30589b06ad23dc4883c2548033f5534acade2390) Merge pull request #24187 from joereyna/fix/black-format-lint-cleanup — _@yuneng-jiang_
- [`6f6e23a`](https://github.com/BerriAI/litellm/commit/6f6e23a7b0b634bb5304c2ca2fc35441fba5f905) chore: apply black formatting to experimental_pass_through transformation — _@joereyna_
- [`ff6faac`](https://github.com/BerriAI/litellm/commit/ff6faacc641f1d1568ef649e6dc1438c83d4a36f) fix: resolve mypy union-attr error in anthropic messages transformation — _@joereyna_
- [`f34fe47`](https://github.com/BerriAI/litellm/commit/f34fe4758a88cae5124348f7863a24e93febfc1a) fix: stale closure, simplified session isolation, debounce-race in useChatHistory — _@yuneng-jiang_
- [`c6b5c07`](https://github.com/BerriAI/litellm/commit/c6b5c070056d667db80259cc8503373a712157a1) chore: apply black formatting and enable black pre-commit hook — _@joereyna_
- [`954bfcb`](https://github.com/BerriAI/litellm/commit/954bfcbd421429996db0f71d45908e9ee843203f) chore: remove verbose console.log calls from useChatHistory hook — _@yuneng-jiang_
- [`c545c96`](https://github.com/BerriAI/litellm/commit/c545c969f7599c5b5f65a095788527bd244a856f) Merge branch 'main' into litellm_oss_staging_03_17_2026 — _@Sameerlite_
- [`e5dc912`](https://github.com/BerriAI/litellm/commit/e5dc912367721744b835e701118a89d41201ed7a) bump: version 1.82.4 → 1.82.5 — _@joereyna_
- [`3093ef8`](https://github.com/BerriAI/litellm/commit/3093ef844e8fc6c656777c7ff0b42cbd15c3aa45) fix: document new config_settings.md — _@Krrish Dholakia_
- [`48e9d0b`](https://github.com/BerriAI/litellm/commit/48e9d0b2715bf018f59d1b1515ffa96c73c3d4b7) Merge pull request #24140 from devin-petersohn/feat/anthropic-auth-token-and-base-url — _@Krish Dholakia_
- [`61dde5e`](https://github.com/BerriAI/litellm/commit/61dde5eb0a33ac890060abbdc95280f6c2694c12) Merge pull request #24143 from johnib/fix/websearch-short-circuit-copilot — _@Krish Dholakia_
- [`3a0652c`](https://github.com/BerriAI/litellm/commit/3a0652c445ef7a2c6ebdf1d5ab243a796e1f1def) Merge branch 'main' into feat/anthropic-auth-token-and-base-url — _@Krish Dholakia_
- [`2900e0e`](https://github.com/BerriAI/litellm/commit/2900e0e384f32f6fc7e08e34b1718d33a2cf7377) Merge pull request #24090 from joereyna/fix/release-notes-v1-82-3-helicone-langfuse — _@Krish Dholakia_
- [`2964785`](https://github.com/BerriAI/litellm/commit/29647856b5bbdcda21c361fd2ea29f143eee959f) Merge branch 'main' into fix/release-notes-v1-82-3-helicone-langfuse — _@Krish Dholakia_
- [`d8b2814`](https://github.com/BerriAI/litellm/commit/d8b28141b992783ff4b8354ecd3a9addfaf86dfd) Merge pull request #24173 from joereyna/fix/black-format-batch-3 — _@Krish Dholakia_
- [`75386d4`](https://github.com/BerriAI/litellm/commit/75386d4cb90d3a18a16b27efe40f1c7aa67671ce) Merge pull request #24149 from michelligabriele/fix/kill-orphaned-prisma-engine-on-reconnect — _@Krish Dholakia_
- [`87b5039`](https://github.com/BerriAI/litellm/commit/87b5039aaab7ad5cd2cfa72c160d49e470738a72) chore: apply black formatting to fix lint CI (batch 3) — _@joereyna_
- [`e88425b`](https://github.com/BerriAI/litellm/commit/e88425b88113d6f7f9a67043c4265be6049876ed) refactor: wire ChatUI to use useChatHistory hook — _@yuneng-jiang_
- [`f3c6915`](https://github.com/BerriAI/litellm/commit/f3c6915d617d3e8c7ea44547a2ce42accf51e87f) feat: add useChatHistory hook with tests (extracted from ChatUI) — _@yuneng-jiang_
- [`971cc2a`](https://github.com/BerriAI/litellm/commit/971cc2a9af40fa14b7a50efb428aab9098cc13ec) fix: add team_id field to NewMCPServerRequest — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
