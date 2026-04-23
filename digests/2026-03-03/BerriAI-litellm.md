# BerriAI/litellm — 2026-03-03

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-02T23:59:59.000Z → 2026-03-03T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heaviest activity centered on **proxy batch/file expiry, virtual-key UX, and a wave of test/lint fixes** — plus day-0 model support for Gemini 3.1 Flash Lite.

The biggest user-visible changes are on the proxy. Team-level enforcement of batch output and file expiry landed via PR #22705, with anchor + key validation (`903ade4`, `d6ad312`) and a new `output_expires_after` passthrough for batches (`43cec8c`). Batch ID handling around `x-litellm-model` routing was hardened across create/retrieve/cancel/list paths and refactored into a shared `encode_batch_response_ids` helper (PR #22653, commits `5ad0d03`, `9fd4c00`, `7506fd0`, `59bde4a`). Custom-auth routes can now opt into `common_checks` via `custom_auth_run_common_checks` (`b44755d`), replacing the earlier skip approach from #22662.

On the UI/admin side, PR #22715 adds a manual "Reset Spend" button on virtual keys to unblock keys hitting limits, with route-auth fixed so team admins can actually call `/key/{key}/reset_spend` (`0a1b263`). Audit-log table polish landed (`326ff42`) along with an AND-semantics fix for combined JSON filters (`657a60e`). PR #22656 adds attaching a knowledge base / vector store to a model from the UI, and PR #22680 fixes MCP server `created_at`/`updated_at` being overwritten on every save.

Model/provider updates: Gemini 3.1 Flash Lite preview support including streaming + pricing (PR #22674); `zai/glm-5` and `glm-5-code` pricing (PR #22665); 7 missing DashScope and 5 missing OpenRouter pricing entries (#22650, #22649); OpenRouter image-edit support merged with docs (PR #22403). A togetherai Qwen3.5-397B-A17B add (#22654) was reverted same-day (#22657). Cost-estimate base_model resolution for Azure custom deployments was fixed (#22724).

Notably, a large cluster of test/mypy/lint fixes was merged (PRs #22699, #22701, #22716–#22720) addressing Anthropic sync streaming `__next__`, Azure GPT-5.1 logprobs, vertex `function_response` role, JWT OIDC `AsyncMock` flakiness, `video_tokens` in `CompletionTokensDetailsWrapper`, and proxy_utils mock `State`. Version bumped 1.82.0 → 1.82.1 (#22631). If you only read one thing, skim the batch/file expiry + batch-ID encoding changes — they touch proxy request paths.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`474eea5`](https://github.com/BerriAI/litellm/commit/474eea5a1b589ac81ff9b9968592e8575fe27212) Merge branch 'main' into feat/virtual-keys-team-table — _@atapia27_
- [`326ff42`](https://github.com/BerriAI/litellm/commit/326ff422f1faad0a7654289d97824270be6c5686) fix(ui): Audit logs table and drawer polish — _@yuneng-jiang_
- [`0a1b263`](https://github.com/BerriAI/litellm/commit/0a1b2635d7f8c2e17f9c3c5732bb9b8f3dc23c08) fix: allow team admins to access /key/{key}/reset_spend route — _@yuneng-jiang_
- [`98b9bc8`](https://github.com/BerriAI/litellm/commit/98b9bc8b722b3f8d590d4cbe678280f8fa95cca7) fix: resolve base_model in /cost/estimate for Azure custom deployments (#22724) — _@milan-berri_
- [`661f1e1`](https://github.com/BerriAI/litellm/commit/661f1e16cfece6086883886d7bc352f6c8333785) Merge pull request #22715 from BerriAI/litellm_reset_key_spend — _@yuneng-jiang_
- [`1a23ba4`](https://github.com/BerriAI/litellm/commit/1a23ba41fd29823f8f845ddd6de83bf68700f498) Fixed: undefined is not a valid Select option value — _@atapia27_
- [`5b2110d`](https://github.com/BerriAI/litellm/commit/5b2110ddb56492c6b8876c1e5cf3608d754d3820) Polish Reset Spend button and modal — _@yuneng-jiang_
- [`98b9108`](https://github.com/BerriAI/litellm/commit/98b91080ca5b26fec0f15ce0579709695a791eaa) Update Reset Spend button style and modal copy — _@yuneng-jiang_
- [`d9a349f`](https://github.com/BerriAI/litellm/commit/d9a349f7d2c8d798c809fca0a0990d9be7579401) Merge pull request #22720 from BerriAI/fix/proxy-utils-mock-request-state — _@jquinter_
- [`740cdc5`](https://github.com/BerriAI/litellm/commit/740cdc5c20b2844eba47ff1f1e3a9e8a40789866) fix: use real State object in mock_request to fix _safe_get_request_headers — _@jquinter_
- [`2415035`](https://github.com/BerriAI/litellm/commit/2415035fcd39ee49925cc90ccb08e5cb5bb3c873) Merge pull request #22719 from BerriAI/fix/vertex-response-format-test — _@jquinter_
- [`5dfa96f`](https://github.com/BerriAI/litellm/commit/5dfa96f62fcbaaa670c27e20a20b640482eeab13) Merge pull request #22718 from BerriAI/fix/jwt-test-mock-robustness — _@jquinter_
- [`a07d041`](https://github.com/BerriAI/litellm/commit/a07d041881e77c6854c3fbf6fb782ed509d69d29) fix: apply same AsyncMock pattern to remaining OIDC discovery test — _@jquinter_
- [`9b92ea1`](https://github.com/BerriAI/litellm/commit/9b92ea16ab6e94eeb3cab19e5f17008c703ecc0a) fix: update response_format test for vertex_ai's intentional schema diff — _@jquinter_
- [`eb65869`](https://github.com/BerriAI/litellm/commit/eb658693a30d10ff39970a5d358af23bcb7a5369) fix: use direct AsyncMock assignment instead of patch.object in JWT tests — _@jquinter_
- [`e6a1194`](https://github.com/BerriAI/litellm/commit/e6a1194c28011b3156f4043cd6c853dab7eff6f6) Merge pull request #22717 from BerriAI/fix/types-utils-video-tokens-test — _@jquinter_
- [`2943df9`](https://github.com/BerriAI/litellm/commit/2943df96ba5676f6c65b0ae3c59c8bc1825c84e5) fix: add video_tokens to expected completion_tokens_details in test — _@jquinter_
- [`fc9d06c`](https://github.com/BerriAI/litellm/commit/fc9d06cecad04782689c3b0b4b5d81b8bbdb2700) Merge pull request #22716 from BerriAI/fix/vertex-function-response-tests — _@jquinter_
- [`5a0aba9`](https://github.com/BerriAI/litellm/commit/5a0aba9fb7ac00e6bda96893e862240e32d395dd) fix: update vertex AI tests to expect role=user on function_response messages — _@jquinter_
- [`5da7fa9`](https://github.com/BerriAI/litellm/commit/5da7fa9ac18a0b82a1a294389d6cf146fa443dd9) [Feature] UI - Virtual Keys: Add manual spend reset to unblock keys — _@yuneng-jiang_
- [`2c5c383`](https://github.com/BerriAI/litellm/commit/2c5c38333d7f076effa91c6e2461bc3717fbd95a) Merge pull request #22701 from BerriAI/fix/streaming-and-azure-gpt5-test-failures — _@jquinter_
- [`8aa7d53`](https://github.com/BerriAI/litellm/commit/8aa7d538643986b55a0fa268a1122c8885490deb) Merge pull request #22705 from BerriAI/litellm_feat_batch_expiry_setting_teams — _@ryan-crabbe_
- [`c8e6428`](https://github.com/BerriAI/litellm/commit/c8e6428eb77196030d65f68de9e8a09aab6ce72c) Update litellm/proxy/openai_files_endpoints/files_endpoints.py — _@ryan-crabbe_
- [`35d2bc3`](https://github.com/BerriAI/litellm/commit/35d2bc382f0185850fbe6c9e505a69d940fb1619) fix(batches): suppress PLR0915 lint for create_batch dispatch function — _@ryan-crabbe_
- [`657a60e`](https://github.com/BerriAI/litellm/commit/657a60ea5b55fa3497e4222b12ec782fc54f2df8) fix(audit): AND semantics for combined JSON filters; remove unused allTeams prop — _@yuneng-jiang_
- [`903ade4`](https://github.com/BerriAI/litellm/commit/903ade4a1b3d10c83c2b7b91ffdc22322739e55e) fix(proxy): add anchor validation for file expiry, key validation for batch expiry — _@ryan-crabbe_
- [`2d26209`](https://github.com/BerriAI/litellm/commit/2d26209d80cda2b56599d72ce8b05d3204f3b492) Merge pull request #22698 from BerriAI/litellm_test_projects_hooks — _@yuneng-jiang_
- [`d6ad312`](https://github.com/BerriAI/litellm/commit/d6ad312a4c2a2d14625210a9bd6daceb14940f97) fix(proxy): validate enforced_file_expires_after keys before access — _@ryan-crabbe_
- [`ab71844`](https://github.com/BerriAI/litellm/commit/ab718444c57db2bc88f078d82a8821ca7f9ba7d7) Remove dead pending_new_content_block attribute — _@jquinter_
- [`fbf916d`](https://github.com/BerriAI/litellm/commit/fbf916d71ea437198b3b8b84a5d8a64de72c3501) Merge pull request #22699 from BerriAI/fix/mypy-count-tokens-signature — _@jquinter_
- [`6b4bc99`](https://github.com/BerriAI/litellm/commit/6b4bc99202c1fad64920c260f437ca52116966a5) Fix Anthropic streaming sync __next__ and Azure GPT-5.1 logprobs — _@jquinter_
- [`279b4f1`](https://github.com/BerriAI/litellm/commit/279b4f16cb3c5d783294928f1018bf05320dfb50) Fix mypy override errors in count_tokens signatures — _@jquinter_
- [`b62a4be`](https://github.com/BerriAI/litellm/commit/b62a4be6b695030f46dd57337759156593963189) Merge pull request #22676 from BerriAI/litellm_feat_guardrail-list — _@Harshit28j_
- [`4edb1e0`](https://github.com/BerriAI/litellm/commit/4edb1e00c60bf620ec6a179e29224298b000e081) [Test] UI - Add unit tests for project hooks — _@yuneng-jiang_
- [`d661419`](https://github.com/BerriAI/litellm/commit/d6614191096d2a9e06e7d9a36281ce71ad4170ab) fix: support list of modes in Mode.default for tag-based guardrails — _@Harshit28j_
- [`08613b2`](https://github.com/BerriAI/litellm/commit/08613b24cbbf0315249a305b743e43cc5e73411f) feat(proxy): add team-level file expiry enforcement — _@ryan-crabbe_
- [`3d15bcd`](https://github.com/BerriAI/litellm/commit/3d15bcdb115731cd0b4dd93f19be880e2128f1bb) feat(proxy): add team-level batch output expiry enforcement — _@ryan-crabbe_
- [`4b13895`](https://github.com/BerriAI/litellm/commit/4b1389501d3f1418077a63b1fac2151a37c8df89) fix: move _set_usage_and_cost outside try/except in OpenRouter image edit — _@Chesars_
- [`4c1b15d`](https://github.com/BerriAI/litellm/commit/4c1b15d6854c9ccad7e4348ed6f45edc45f8039d) Merge pull request #22687 from BerriAI/litellm_fix_spend_log_cleanup — _@yuneng-jiang_
- [`43cec8c`](https://github.com/BerriAI/litellm/commit/43cec8c980abf699b3664a239393f408b9ca2f90) feat(batches): support output_expires_after passthrough — _@ryan-crabbe_
- [`6f74d38`](https://github.com/BerriAI/litellm/commit/6f74d3881a4b6f459dd2f9e90c8a2f3a132b0602) fix(lint): remove unused imports in batch_utils.py — _@Chesars_
- [`3976514`](https://github.com/BerriAI/litellm/commit/39765149dcf4f1c449982c3dbec309d85507d02e) Merge remote-tracking branch 'upstream/litellm_oss_staging_03_03_2026' into litellm_oss_staging_03_03_2026 — _@Chesars_
- [`a6e18ae`](https://github.com/BerriAI/litellm/commit/a6e18ae31b53014534b7af51bc7b7ef17f870b46) fix: address review feedback — type OpenAICredentials.api_base as str, remove dead vertex_ai block — _@Chesars_
- [`8a1e915`](https://github.com/BerriAI/litellm/commit/8a1e915bb6ab8f0c095f07fce665824eff6ada29) Merge pull request #22403 from shivaaang/fix/openrouter-image-edit — _@Chesars_
- [`d384f7c`](https://github.com/BerriAI/litellm/commit/d384f7c3203aae7de05806ed229e1f5ffc8171f1) Merge pull request #21233 from Chesars/feat/per-request-json-schema-validation — _@Chesars_
- [`a8b5a87`](https://github.com/BerriAI/litellm/commit/a8b5a876bf0b0d75306af9083a9423a4fe750123) Merge pull request #21491 from Chesars/fix/20998-remove-hardcoded-reasoning-summary — _@Chesars_
- [`833c1bc`](https://github.com/BerriAI/litellm/commit/833c1bc45dc374356d1cbd63401b92a7ba70ac0c) merge: resolve conflict with staging, remove hardcoded summary from reasoning test — _@Chesars_
- [`b2c7d2e`](https://github.com/BerriAI/litellm/commit/b2c7d2e049b41d73aca02b0f5778038e805ac3b5) Merge pull request #21577 from Chesars/fix/gemini-streaming-tool-calls-finish-reason — _@Chesars_
- [`bca1964`](https://github.com/BerriAI/litellm/commit/bca1964f7030a2c737f72ee2b3010b012e254a98) Merge pull request #22603 from BerriAI/fix/helicone-vertex-gemini-provider-url — _@Chesars_
- [`a1ba6c9`](https://github.com/BerriAI/litellm/commit/a1ba6c9fa643c04492d274b2a664d2de88ce1603) Fix log levels: info for unconfigured, warning for misconfigured — _@yuneng-jiang_
- [`4a88d85`](https://github.com/BerriAI/litellm/commit/4a88d854462be6cc1b8d7316a9df26ac1e65a487) test: add provider_url routing test for vertex_ai/gemini models — _@Chesars_
- [`da941e4`](https://github.com/BerriAI/litellm/commit/da941e4261c561572f7209add559cf623f2f7a1f) Merge pull request #22589 from Chesars/fix/vertex-preserve-any-type-schema — _@Chesars_
- [`f77f28a`](https://github.com/BerriAI/litellm/commit/f77f28a5f80565b34dd66bb3c159151c7f5f224e) Merge pull request #20920 from Chesars/refactor/files-main-credential-helpers — _@Chesars_
- [`fe8fa3a`](https://github.com/BerriAI/litellm/commit/fe8fa3abe0ef9e0be4134bddbaa7d2f64337b7c0) Merge pull request #17308 from Chesars/fix/python-multipart-version-constraint — _@Chesars_
- [`de415ab`](https://github.com/BerriAI/litellm/commit/de415abd5a6cdc7ed9f7747c957fa2ccc524761c) Merge pull request #22653 from Chesars/fix/batch-encode-ids-x-litellm-model — _@Chesars_
- [`fecb301`](https://github.com/BerriAI/litellm/commit/fecb3016847d1c8faea966c21581242748801118) Update litellm/llms/openrouter/image_edit/transformation.py — _@Chesars_
- [`47f0390`](https://github.com/BerriAI/litellm/commit/47f0390b9b1320a586c9538936ae3a3b072af3b9) fix: remove duplicate Pillow==11.0.0 pin (12.1.1 already on line 8) — _@Chesars_
- [`224c617`](https://github.com/BerriAI/litellm/commit/224c61711948fd1508b59083542f022d1f37b99c) Fix spend log cleanup: lock tracking, integer retention, skip log level — _@yuneng-jiang_
- [`7d65df3`](https://github.com/BerriAI/litellm/commit/7d65df351fd852f7b544e126c763825296c8d7a5) feat(togetherai): add support for TogetherAI Qwen3.5-397B-A17B model — _@Varad2001_
- [`dc9f5a5`](https://github.com/BerriAI/litellm/commit/dc9f5a5cc41fd8b2c95d37e6ca1d501453ec820e) fix(deps): update python-multipart to >=0.0.20 in CI and test configs — _@Chesars_
- [`dad7805`](https://github.com/BerriAI/litellm/commit/dad7805b42beac2e562253a6edd8df46cfb99436) fix(deps): update python-multipart version to 0.0.22 in all files — _@Chesars_
- [`5005773`](https://github.com/BerriAI/litellm/commit/5005773909e65a4ae1c87abcf86928c7052450e2) fix(deps): relax python-multipart version constraint to >=0.0.22 — _@Chesars_
- [`ead74df`](https://github.com/BerriAI/litellm/commit/ead74dff114454ca5eba36c33bd09e36fedc3e4c) refactor: move credential helpers to provider common_utils modules — _@Chesars_
- [`fba19f0`](https://github.com/BerriAI/litellm/commit/fba19f089a1950c957f6b68b8ddf7d7a252af479) refactor: reduce code duplication in files/main.py with credential helpers — _@Chesars_
- [`909e3ce`](https://github.com/BerriAI/litellm/commit/909e3ce6c9c0bcc3bbf0ef320766fd3e5d712726) test: create fresh ModelResponse per test to avoid shared mutable state — _@Chesars_
- [`b498034`](https://github.com/BerriAI/litellm/commit/b4980340fbf0c73016d540b9d6bb7362a3b8117d) Merge pull request #22680 from BerriAI/litellm_fix_mcp_server_dates — _@yuneng-jiang_
- [`8665e92`](https://github.com/BerriAI/litellm/commit/8665e92aa8757de19e5268d9426ca81be12a1aa3) chore: regenerate poetry.lock to match pyproject.toml (#3) — _@github-actions[bot]_
- [`f6264a9`](https://github.com/BerriAI/litellm/commit/f6264a9c0fde055be2cdb2b84a2dee6c32c8885a) docs(openrouter): add image edit documentation — _@Chesars_
- [`76e3dba`](https://github.com/BerriAI/litellm/commit/76e3dba0f88929a82c673b7c586cc4aba8b8f34a) fix mcp server created_at and updated_at timestamps being overwritten with current time — _@yuneng-jiang_
- [`1fe2e92`](https://github.com/BerriAI/litellm/commit/1fe2e92d3272bcf1c7d21f401efd8b8a32bbd475) fix(main): forward enable_json_schema_validation to acompletion_with_mcp — _@Chesars_
- [`b44755d`](https://github.com/BerriAI/litellm/commit/b44755db96fa54c6d2e4c38960ea20cbac0a93fc) fix(proxy): make common_checks opt-in for custom auth via custom_auth_run_common_checks — _@Harshit28j_
- [`22e682b`](https://github.com/BerriAI/litellm/commit/22e682b1e89c1c1795b45910b2cea988f1525124) feat: guardrail-mode-default-list — _@Harshit28j_
- [`afc7b87`](https://github.com/BerriAI/litellm/commit/afc7b87b364e986128fec9d03db5cac27139a9fa) Merge pull request #22656 from BerriAI/litellm_add_vector_store_Ui — _@Sameerlite_
- [`daa0397`](https://github.com/BerriAI/litellm/commit/daa0397f30dde1914b69aac3ed9d249982d29160) Merge pull request #22674 from BerriAI/litellm_gemini-3.1-flash-lite-preview — _@Sameerlite_
- [`9d06106`](https://github.com/BerriAI/litellm/commit/9d06106af077b0996c154c43c014b5db0b509094) Fix gemini-3.1-flash-lite-preview for streaming — _@Sameerlite_
- [`c3fe463`](https://github.com/BerriAI/litellm/commit/c3fe4634b62599cea71856d351571a681f3a8e12) Add correct pricing for gemini 3.1 flash lite — _@Sameerlite_
- [`b83373d`](https://github.com/BerriAI/litellm/commit/b83373d29c43667d108e087b95a5cadc9262dba9) Managed batches - Address PR bot comments from #22464 — _@ephrimstanley_
- [`a0cc550`](https://github.com/BerriAI/litellm/commit/a0cc550f484170940a8e9b78fb61bb1977b4a2fe) Merge pull request #22665 from Chesars/feat/add-zai-glm-5-model-pricing — _@Chesars_
- [`75518c3`](https://github.com/BerriAI/litellm/commit/75518c3ca73626b457a7697fea456a0cabc1a341) feat(models): add zai/glm-5 and zai/glm-5-code to model cost map — _@Chesars_
- [`7d322e0`](https://github.com/BerriAI/litellm/commit/7d322e0d4476c720a10e7227bbecb3a9a4efb0f4) Merge branch 'main' of https://github.com/BerriAI/litellm into litellm_custm_auth — _@Harshit28j_
- [`dfd7203`](https://github.com/BerriAI/litellm/commit/dfd7203d7f32224ddd363bf46372d4b1f6431e13) Merge pull request #22650 from Chesars/fix/add-missing-dashscope-glm5-pricing — _@Chesars_
- [`105a40b`](https://github.com/BerriAI/litellm/commit/105a40ba4f36374db924a2b386ff2f57819aa40e) Merge pull request #22649 from Chesars/fix/add-missing-openrouter-model-pricing — _@Chesars_
- [`6d535e5`](https://github.com/BerriAI/litellm/commit/6d535e56395782de8841497aa228729e16354872) fix(proxy): allow custom auth routes to bypass route authorization checks — _@Harshit28j_
- [`59bde4a`](https://github.com/BerriAI/litellm/commit/59bde4a81a92c9e7b8f48ca2e32311a735a51a7d) refactor(proxy): extract encode_batch_response_ids helper and fix list_batches encoding — _@Chesars_
- [`7506fd0`](https://github.com/BerriAI/litellm/commit/7506fd0426a70c0387fd811d44fdd06c1fc0006b) fix(proxy): re-encode response IDs in cancel_batch for model-based routing — _@Chesars_
- [`c1b39a6`](https://github.com/BerriAI/litellm/commit/c1b39a6425b736d5bcdc1465485e5d5c2cab32c4) Merge pull request #22651 from BerriAI/litellm_encrypted_content_affinity_2 — _@Sameerlite_
- [`a9ee8ff`](https://github.com/BerriAI/litellm/commit/a9ee8ff5d2fbe4fbb9df254eafb89c1f021be666) Merge pull request #22641 from BerriAI/litellm_remove_default_litellm_thinking — _@Sameerlite_
- [`bdfc602`](https://github.com/BerriAI/litellm/commit/bdfc602dbfc5d192fbcd4cfc1f5ff45da293342a) Merge pull request #22625 from BerriAI/litellm_azure_ai_finetune — _@Sameerlite_
- [`9fd4c00`](https://github.com/BerriAI/litellm/commit/9fd4c00b064e6358fdb5202daa417b3cfb482796) fix(proxy): re-encode response IDs in retrieve_batch for model-based routing — _@Chesars_
- [`bb1da70`](https://github.com/BerriAI/litellm/commit/bb1da7091a6fbfa6c520a6e96886a339aad025bc) Merge pull request #22631 from Harshit28j/litellm_bump_litellm_08_03 — _@Harshit28j_
- [`88dd1b5`](https://github.com/BerriAI/litellm/commit/88dd1b580168766e6c37ca614a7d4f101f9d6911) Merge pull request #22657 from BerriAI/revert-22654-litellm_add_Qwen3.5-397B-A17B — _@Sameerlite_
- [`24ec7f8`](https://github.com/BerriAI/litellm/commit/24ec7f882f5e3036d47544f8ef96f899fb4606aa) Revert "feat(togetherai): add support for togetherai/Qwen3.5-397B-A17B model" — _@Sameerlite_
- [`6c0387d`](https://github.com/BerriAI/litellm/commit/6c0387d170a2caab45393222bcc32e769a2c5124) Add support for Attaching knowledge base to model via UI — _@Sameerlite_
- [`9463de0`](https://github.com/BerriAI/litellm/commit/9463de0c6629354dbc616b1a1beb394f27a45b80) fix: correct indentation from commit suggestions and add missing Optional import — _@Chesars_
- [`974c02f`](https://github.com/BerriAI/litellm/commit/974c02fae495675ca5555ca99337680404526029) Merge pull request #22654 from Varad2001/litellm_add_Qwen3.5-397B-A17B — _@Sameerlite_
- [`d66f8bc`](https://github.com/BerriAI/litellm/commit/d66f8bc15d8f22c52d81785ab047ff65208da35f) feat(togetherai): add support for togetherai/Qwen3.5-397B-A17B model — _@Varad2001_
- [`096edfa`](https://github.com/BerriAI/litellm/commit/096edface5b7772eccf398113a57b26941c00457) Update litellm/proxy/batches_endpoints/endpoints.py — _@Chesars_
- [`7d664f0`](https://github.com/BerriAI/litellm/commit/7d664f0c096a7f85befc17b22d80c8cbf9097a93) Update tests/litellm/proxy/test_batch_x_litellm_model_encoding.py — _@Chesars_
- [`3426b90`](https://github.com/BerriAI/litellm/commit/3426b905cedd66d59506174efb04d8c53566b53b) Update tests/litellm/proxy/test_batch_x_litellm_model_encoding.py — _@Chesars_
- [`5ad0d03`](https://github.com/BerriAI/litellm/commit/5ad0d0367181af342e281e11b8b6c3afc9055e08) fix(proxy): encode batch IDs with model info when x-litellm-model header is used — _@Chesars_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
