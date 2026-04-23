# BerriAI/litellm — 2026-03-14

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-13T23:59:59.000Z → 2026-03-14T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a **security/operational hardening pass**: a new `SecretRedactionFilter` now scrubs API keys, tokens, and credentials from all proxy log records (messages, args, tracebacks, extra fields), enabled by default with a `LITELLM_DISABLE_REDACT_SECRETS` escape hatch (#23668, commits `47ddd0d`, `e45c82a`). Alongside this, `tar` was bumped to 7.5.11 and `tornado` to 6.5.5 to patch a HIGH-severity CVE (#23602), and Krish Dholakia fixed Prisma `migrate deploy` failures on pre-existing instances caused by non-idempotent schema changes (#23655) — worth reading if you self-host.

**Provider/model work:**
- New `sagemaker_nova` provider for custom/fine-tuned Amazon Nova models on SageMaker (#21542).
- Azure Model Router cost breakdown surfaced in the UI via `additional_costs` from `hidden_params` (#23550).
- Anthropic Messages API now preserves native tool format when guardrails convert tools (#23526).
- Bedrock batch file uploads now respect `s3_region_name` (GovCloud fix, in #23596); HuggingFace embeddings now forward `extra_headers` (#23525, fixes #23502); Vertex AI gets the `_remove_scope_from_cache_control` treatment previously applied only to Bedrock/Azure (#23183); Moonshot Kimi reasoning models auto-fill `reasoning_content` in multi-turn tool calls (#23580).
- Responses API bridge: fixed a regression where the second `responses_api_bridge_check` overwrote the first call's `responses_api_model_info` (#23665), mapped Chat Completion `file` content type to Responses `input_file` (`0bdfd95`), handled `response.failed/incomplete/cancelled` terminal events in background streaming (#23492), and `_supports_reasoning_effort_level` fix (#23533). Provider `content_filtered` finish_reason is normalized to OpenAI's `content_filter` (#23564).

**Proxy/admin fixes worth noting:** team admins were getting 403 on `/user/filter/ui` when `scope_user_search_to_org` was on (#23671); `/tag/list` 500'd from invalid Prisma `group_by` kwargs (`_min`/`_max` → `min`/`max`, #23606); `DefaultInternalUserParams` Pydantic default realigned to `INTERNAL_USER_VIEW_ONLY` to match runtime SSO/SCIM/JWT fallback (`6970e10`); silent-metrics race condition fixed with metadata isolation (#23542); Langfuse failure-path kwargs inconsistency fixed (#22390).

**UI:** Usage page now auto-paginates daily spend with progressive batched rendering and a fetch banner (#23622); Default Team Settings rewritten from Tremor to antd with defaults actually applied at team creation (#23614); internal-user page gains add/remove team membership (#23638); Keys create/edit gains an Organization dropdown (#23595); 33 new component unit tests added (#23607). Also a new Vantage FOCUS CSV export integration landed (#23333).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`b96f033`](https://github.com/BerriAI/litellm/commit/b96f033c90cd808524e51dcdbf874d37134eabf3) fix: prisma migrate deploy failures on pre-existing instances (#23655) — _@Krish Dholakia_
- [`d28e42d`](https://github.com/BerriAI/litellm/commit/d28e42d7ceeaa01d3a4f59c592c5b97abd54066f) chore: update Next.js build artifacts (2026-03-14 23:50 UTC, node v22.16.0) — _@yuneng-jiang_
- [`cda8fbe`](https://github.com/BerriAI/litellm/commit/cda8fbef5059d4f2d2187cbbb63294b0f674c7c0) Merge pull request #23668 from BerriAI/litellm_fix_redaction_filter_logging_v2 — _@yuneng-jiang_
- [`d4c396d`](https://github.com/BerriAI/litellm/commit/d4c396ddb098239e6000841e7c3dd1dfd067f0d5) Merge pull request #23671 from BerriAI/litellm_team_admin_user_filter_org_scope — _@yuneng-jiang_
- [`1d753c3`](https://github.com/BerriAI/litellm/commit/1d753c3fa62b58aa19e805975e9ef40aa146890d) [Fix] Allow team admins to query /user/filter/ui when scope_user_search_to_org is enabled — _@yuneng-jiang_
- [`e45c82a`](https://github.com/BerriAI/litellm/commit/e45c82aea070fe40f725fbeb40eb83493b80f310) docs: add LITELLM_DISABLE_REDACT_SECRETS to environment variable reference — _@ryan-crabbe_
- [`47ddd0d`](https://github.com/BerriAI/litellm/commit/47ddd0d0bfc04c74c0d4d7ae3884aba4d97c6d6d) fix: redact secrets from proxy log output — _@ryan-crabbe_
- [`c95783e`](https://github.com/BerriAI/litellm/commit/c95783e6411cd3fc4ef23ae45a0e2c4c41dd2c7d) Update tests/test_litellm/proxy/ui_crud_endpoints/test_proxy_setting_endpoints.py — _@ryan-crabbe_
- [`c60f1dd`](https://github.com/BerriAI/litellm/commit/c60f1dd590c23fe5b79699f9f3c4176a541c6b19) test: add regression test for fresh-instance default role sync — _@ryan-crabbe_
- [`6970e10`](https://github.com/BerriAI/litellm/commit/6970e1000c6fc874e9351e06eba79e3a6054e642) fix: align DefaultInternalUserParams Pydantic default with runtime fallback — _@ryan-crabbe_
- [`61d1e33`](https://github.com/BerriAI/litellm/commit/61d1e33d73adf95d4e7bfc1ebe0ae5e869ce5529) Merge pull request #23665 from BerriAI/litellm_fix_responses_bridge_overwrite — _@yuneng-jiang_
- [`e0b3fcb`](https://github.com/BerriAI/litellm/commit/e0b3fcb34cf6e2153e2af88ff745736a109394af) refactor: update pr template to invite users to slack oss — _@Krrish Dholakia_
- [`2bd527e`](https://github.com/BerriAI/litellm/commit/2bd527e62ea2f3d1ba097fdf801988063adc2186) [Fix] Prevent second responses_api_bridge_check from overwriting first — _@yuneng-jiang_
- [`374c345`](https://github.com/BerriAI/litellm/commit/374c3458d51ed6fb5c82400a55d6c38d997e101e) feat: add sagemaker_nova provider for Amazon Nova models on SageMaker (#21542) — _@ryanh-ai_
- [`a2708f3`](https://github.com/BerriAI/litellm/commit/a2708f332fd6e76bfbaa250d251723e778e8f74b) Merge pull request #23658 from BerriAI/litellm_internal_dev_03_13_2026 — _@yuneng-jiang_
- [`e4fa6f5`](https://github.com/BerriAI/litellm/commit/e4fa6f51c9bfbf5120cc0799d44e5fb9a006f863) Merge remote-tracking branch 'origin' into litellm_internal_dev_03_14_2026 — _@yuneng-jiang_
- [`af0c2f6`](https://github.com/BerriAI/litellm/commit/af0c2f67923437e3b280664911bf5dd5d813f657) docs: add Claude Code skills page for litellm-skills (#23642) — _@ishaan-jaff_
- [`47c3840`](https://github.com/BerriAI/litellm/commit/47c38403ffa1f67cd7f491635537f71e08c60bc7) Litellm dev 03 14 2026 p1 (#23653) — _@Krish Dholakia_
- [`94eabff`](https://github.com/BerriAI/litellm/commit/94eabffe01fecf5829e97c03744e8a0a6985c0bc) Merge pull request #22390 from Harshit28j/litellm_langfuse-session-trace-fix — _@yuneng-jiang_
- [`e76c1f2`](https://github.com/BerriAI/litellm/commit/e76c1f2fdef84e28ce01e840ece9a95301c0557f) Merge pull request #23651 from BerriAI/litellm_fix_ci_failures_03_14 — _@yuneng-jiang_
- [`03231f3`](https://github.com/BerriAI/litellm/commit/03231f3b266c8b67799c6fa6785aefd36a767bbe) [Fix] CI failures: mypy type error, ruff lint, and flaky router test — _@yuneng-jiang_
- [`4f04d26`](https://github.com/BerriAI/litellm/commit/4f04d2648e9b0cda053028c714f72a934dbcae1c) Merge branch 'main' into litellm_langfuse-session-trace-fix — _@Harshit28j_
- [`0066ad7`](https://github.com/BerriAI/litellm/commit/0066ad7291b3375470984ce0a54638f554be6864) Merge pull request #23649 from Harshit28j/litellm_tests_leak — _@yuneng-jiang_
- [`8abf2d8`](https://github.com/BerriAI/litellm/commit/8abf2d8e34d3cc37f67ada4feb7e087d6bb93d30) fix: Fixes https://github.com/BerriAI/litellm/issues/23185 (#23647) — _@Krish Dholakia_
- [`d7c9ec6`](https://github.com/BerriAI/litellm/commit/d7c9ec6276ed39184887abab2330799e4f5124be) add tests for fix — _@Harshit28j_
- [`8be5323`](https://github.com/BerriAI/litellm/commit/8be5323e207a17c86570e999350c2934f5bdf163) Merge pull request #23646 from BerriAI/litellm_fix_ci_test_failures_03_14 — _@yuneng-jiang_
- [`d049d35`](https://github.com/BerriAI/litellm/commit/d049d35612636f032f7d7e71f6e16626d44e5aba) [Fix] Drop unnecessary timeout param from get_async_httpx_client call — _@yuneng-jiang_
- [`fbad073`](https://github.com/BerriAI/litellm/commit/fbad073a1fccb739c025a63fa1dfc2208c5a7322) [Fix] Use cached async HTTP client in Vantage destination — _@yuneng-jiang_
- [`8be79c9`](https://github.com/BerriAI/litellm/commit/8be79c965c1c9ddacb07266901bd35445e7287c9) [Docs] Add Vantage environment variables to config_settings reference — _@yuneng-jiang_
- [`6abdf5a`](https://github.com/BerriAI/litellm/commit/6abdf5addefb91131d2a06e85f3be24ff7f8f6ee) [Fix] Responses bridge variable mismatch and outdated CI tests — _@yuneng-jiang_
- [`2c840f1`](https://github.com/BerriAI/litellm/commit/2c840f1e8ca5955baec8dd0dc15f7ad5e4fc977d) Merge pull request #23622 from BerriAI/litellm_usage_page_auto_pagination — _@yuneng-jiang_
- [`d26faeb`](https://github.com/BerriAI/litellm/commit/d26faeb844bfcce465bf84c2b749565cb255a255) [Fix] UI - Usage: Reduce batch size to 3, add loading spinner to fetch banner — _@yuneng-jiang_
- [`26d555f`](https://github.com/BerriAI/litellm/commit/26d555f5042d29ec7c7f0a1b1b863bf8190da4ff) Merge pull request #23606 from BerriAI/litellm_tag_spend_fix — _@yuneng-jiang_
- [`6b783cc`](https://github.com/BerriAI/litellm/commit/6b783cc0c5a8e397eecb664351274537cd76ac2d) Merge pull request #23614 from BerriAI/litellm_team_default_permissions — _@yuneng-jiang_
- [`f72931a`](https://github.com/BerriAI/litellm/commit/f72931a46332d6d53f63605ca584b70e328a9b67) [Feature] UI - Usage: Prominent fetch banner, batched pagination renders — _@yuneng-jiang_
- [`d29287c`](https://github.com/BerriAI/litellm/commit/d29287c1c30f65e2937704e239f4e910e51bca42) fix: normalize content_filtered finish_reason (#23564) — _@milan-berri_
- [`b793eee`](https://github.com/BerriAI/litellm/commit/b793eee245ae12de16b6562b9d2799532e5c9853) fix: tiktoken cache nonroot offline (#23498) — _@milan-berri_
- [`24ae5cc`](https://github.com/BerriAI/litellm/commit/24ae5cc3979438921ac57c49b47a46644e6f8c5e) Merge pull request #23542 from Harshit28j/litellm_silent_metrics_v2 — _@yuneng-jiang_
- [`4897faa`](https://github.com/BerriAI/litellm/commit/4897faafc0dd5eb20b2b5d7a4c76d412b9504ffd) Merge pull request #23333 from Harshit28j/litellm_FOCUS_preserve-summary — _@yuneng-jiang_
- [`e8e46af`](https://github.com/BerriAI/litellm/commit/e8e46af8b06853260d063ebd096264c5ca120875) Merge pull request #23638 from BerriAI/litellm_ui_user_info_teams — _@yuneng-jiang_
- [`db37f31`](https://github.com/BerriAI/litellm/commit/db37f3109943696a2cc9be05e1c81c8d93f0fcc6) [Fix] Address review feedback on paginated daily activity hook — _@yuneng-jiang_
- [`d72a34d`](https://github.com/BerriAI/litellm/commit/d72a34dbe2e167d78e7f7baf79438ceff5f4aa17) add docs and export fixes — _@Harshit28j_
- [`0cd4a68`](https://github.com/BerriAI/litellm/commit/0cd4a681579d21e6497824f91b0c9b789299846b) [Fix] Add missing networking mocks to CreateKeyPage test — _@yuneng-jiang_
- [`b87d1f8`](https://github.com/BerriAI/litellm/commit/b87d1f8dad80ea73b796df2f2f9fbc5b6b9eaf8d) [Feat] - Ishaan main merge branch  (#23596) — _@ishaan-jaff_
- [`36c076d`](https://github.com/BerriAI/litellm/commit/36c076d56cd61daaa74d5ad0aff59255caef9b96) Merge pull request #23550 from Sameerlite/litellm_azure-model-router-cost-breakdown — _@yuneng-jiang_
- [`dd1a3e1`](https://github.com/BerriAI/litellm/commit/dd1a3e15e182baca744ab9e87022aaee838f4c0a) Merge pull request #23526 from Sameerlite/litellm_anthropic-guardrail-tools — _@yuneng-jiang_
- [`fcbfcf7`](https://github.com/BerriAI/litellm/commit/fcbfcf7deaed096576be79e8528e6834fd17356c) Merge pull request #23533 from Sameerlite/litellm_fix_responses_bridge_gpr-5.4 — _@yuneng-jiang_
- [`83e6096`](https://github.com/BerriAI/litellm/commit/83e6096dae150f925f695364f842fa330144292a) [Feature] UI - Internal Users: Add/remove team membership from user info page — _@yuneng-jiang_
- [`6c3e036`](https://github.com/BerriAI/litellm/commit/6c3e03664837089420d33d0a10beefbe1c3de95a) Merge branch 'main' into litellm_fix_responses_bridge_gpr-5.4 — _@Sameerlite_
- [`98890e7`](https://github.com/BerriAI/litellm/commit/98890e771de1d6850dcf9030b8becb99115c0849) style: apply black formatting to test file — _@gambletan_
- [`6658a8f`](https://github.com/BerriAI/litellm/commit/6658a8ffb3216a8af1fc1f2cdfa2bd9feae8b39e) style: apply black formatting to transformation.py — _@gambletan_
- [`dc6f68b`](https://github.com/BerriAI/litellm/commit/dc6f68b43187cbc009f92a6d1e3cb686dd74fbd2) Update tests/test_litellm/test_router_silent_experiment.py — _@Harshit28j_
- [`01ed0e0`](https://github.com/BerriAI/litellm/commit/01ed0e0ebffa233927256d43757975ad5d60488a) fix: ensure metadata isolation for silent model metrics — _@Harshit28j_
- [`3ae9e07`](https://github.com/BerriAI/litellm/commit/3ae9e070d97a41f5ab01da979c33ed1ffda0052b) [Feature] UI - Usage: Auto-paginate daily spend data with progressive rendering — _@yuneng-jiang_
- [`71c9ba0`](https://github.com/BerriAI/litellm/commit/71c9ba0b1b620ce40b5149376e18cf87bd07f000) test: add tests for file type to input_file mapping — _@gambletan_
- [`0bdfd95`](https://github.com/BerriAI/litellm/commit/0bdfd95ad8793e6f62e401a1172d8ae8fbdfdde8) fix: map Chat Completion file type to Responses API input_file — _@gambletan_
- [`f0d283c`](https://github.com/BerriAI/litellm/commit/f0d283cf9f4b59ad732c6b8cfcba252e1c8c9c59) [Feature] UI - Default Team Settings: Modernize page and fix defaults application — _@yuneng-jiang_
- [`957dbf5`](https://github.com/BerriAI/litellm/commit/957dbf506dd849864d447d1ee9544c721266ac1c) Merge pull request #23607 from BerriAI/litellm_ui_component_unit_tests — _@yuneng-jiang_
- [`25ee2fb`](https://github.com/BerriAI/litellm/commit/25ee2fb3f9d8b90f7927b3e8816424f1f3669fbc) fix(security): bump tar to 7.5.11 and tornado to 6.5.5 (#23602) — _@joereyna_
- [`81474c1`](https://github.com/BerriAI/litellm/commit/81474c17fec6578044861ca2c5ff351bc73dbe1e) Handle response.failed, response.incomplete, and response.cancelled (#23492) — _@xianzongxie-stripe_
- [`1b0c4bd`](https://github.com/BerriAI/litellm/commit/1b0c4bdbb7875d965fe51268835722b2a15d4e7a) Add unit tests for 5 previously untested UI components — _@yuneng-jiang_
- [`a94b961`](https://github.com/BerriAI/litellm/commit/a94b961c18995eb51bf07bbfb6386eb7eac91e33) fix: auto-fill reasoning_content for moonshot kimi reasoning models in multi-turn tool calling (#23580) — _@pradyyadav_
- [`c7ba794`](https://github.com/BerriAI/litellm/commit/c7ba7948bc79606f96382f4f334a528ba12ad28a) PR #22867 added _remove_scope_from_cache_control for Bedrock and Azur… (#23183) — _@awais786_
- [`7bb2d78`](https://github.com/BerriAI/litellm/commit/7bb2d78394d395b74363115aa6f33b4f11ed3888) fix: add getPopupContainer to Select components in fallback modal to fix z-index issue (#23516) — _@gambletan_
- [`a0a951b`](https://github.com/BerriAI/litellm/commit/a0a951b34fd023ad4a8d8136f501055175a86997) fix: forward extra_headers to HuggingFace embedding calls (#23525) — _@Jah-yee_
- [`4fb71e4`](https://github.com/BerriAI/litellm/commit/4fb71e4a21192eae092dc25213d6323572dd8fe5) [Fix] Fix tag/list 500 error from invalid Prisma group_by kwargs — _@yuneng-jiang_
- [`550ef1e`](https://github.com/BerriAI/litellm/commit/550ef1eeeabe3548ffb8847899cfcfe11c7d269a) fix: test coverage — _@Harshit28j_
- [`9379f24`](https://github.com/BerriAI/litellm/commit/9379f24ef114d5adf88172aa0a6853b095b3fc2a) fix: req changes by greptile on test coverage — _@Harshit28j_
- [`b745712`](https://github.com/BerriAI/litellm/commit/b74571214fd0c123ca9379232f1519e4751dc001) chore: remove debug scripts and unused import — _@Chesars_
- [`82cdb5b`](https://github.com/BerriAI/litellm/commit/82cdb5b0fb97219aeb0edbf752c6b4ed7b3e218a) Merge pull request #23595 from BerriAI/litellm_ui_keys_org_13 — _@yuneng-jiang_
- [`5c1e5c2`](https://github.com/BerriAI/litellm/commit/5c1e5c2510f78c5cd3ddda9a0c7c58e7114dcb71) Merge main into litellm_oss_staging_03_05_2026 — _@Chesars_
- [`cd7b258`](https://github.com/BerriAI/litellm/commit/cd7b25842b10c5e38a0db820fe9e1a5e07cc7aba) fix: narrow oauth2_flow type to Literal in NewMCPServerRequest — _@joereyna_
- [`377b79a`](https://github.com/BerriAI/litellm/commit/377b79afae88aee52574c41334f8cd1a8b2d9be3) fix: add oauth2_flow to NewMCPServerRequest and guard auto-detect with token_url — _@joereyna_
- [`feee689`](https://github.com/BerriAI/litellm/commit/feee689e878f58b2a10e00346a8c3d53440c3e64) fix: set oauth2_flow when building MCPServer in _execute_with_mcp_client — _@joereyna_
- [`2d33d64`](https://github.com/BerriAI/litellm/commit/2d33d6496bd61fbdc6493153e6fb6432eb86ce71) Merge branch 'upstream/main' into HEAD — _@Chesars_
- [`f6a8087`](https://github.com/BerriAI/litellm/commit/f6a8087375aaa0eb75569aa1179afaa5ccd29ed4) [Test] Add test for all-team-models sentinel skip in team change validation — _@yuneng-jiang_
- [`bce37e2`](https://github.com/BerriAI/litellm/commit/bce37e28c3c03b7113ea6b3246052c0d7de3c5d5) [Test] Add tests for organization dropdown in key create/edit — _@yuneng-jiang_
- [`c637c93`](https://github.com/BerriAI/litellm/commit/c637c93a6ab4b02209523b3f4e6a2e49e8e0a2cb) [Fix] Skip all-team-models sentinel in team change validation — _@yuneng-jiang_
- [`2405e0d`](https://github.com/BerriAI/litellm/commit/2405e0d4004ce3b95c71ce8cfb531c5d91258f93) Merge pull request #23592 from BerriAI/docs_per_model_tpm_rpm_for_teams — _@shivamrawat1_
- [`546ecfb`](https://github.com/BerriAI/litellm/commit/546ecfb0845eaf627fd8aa51e872d6a822d0d734) added doc — _@shivam_
- [`8069829`](https://github.com/BerriAI/litellm/commit/8069829c59b9cd348fe86cac4b5dfdb9154ebf1b) Merge branch 'litellm_internal_dev_03_13_2026' of github.com:BerriAI/litellm into litellm_ui_keys_org_13 — _@yuneng-jiang_
- [`c6da457`](https://github.com/BerriAI/litellm/commit/c6da45795b26f432b74dc6be8b34bcdf68490972) temp commit — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
