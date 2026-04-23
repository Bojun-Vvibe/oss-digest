# BerriAI/litellm — 2026-03-05

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-04T23:59:59.000Z → 2026-03-05T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

High-volume day on the staging branch with no formal releases or merged PRs against `main`, but ~90 commits landed on `litellm_internal_staging` covering new providers, model day-0 support, and several production-affecting fixes.

The headline item is **day-0 support for OpenAI's gpt-5.4 family** (`3b457b5`, merged via #22916), accompanied by a parallel series from vincentkoc adding `gpt-5.4-pro` and `chatgpt-5.4` aliases, model rows, docs, and tests (`f1e4e4a`, `e358e3a`, `9a37fe2`, `ba3ce77`). A separate gpt-5.3 oauth alias track also landed (`32e5e55`, `801e2d6`).

A new first-class provider, **Amazon Bedrock Mantle** (`bedrock_mantle`), was merged from #22866 — adds OpenAI-compatible Bedrock inference, UI dropdown entry, provider registration and docs (`df7e3aa`, `1089945`, `4a4bcce`, `b3f3918`). Also notable: **BYOK MCP servers with OAuth 2.1 PKCE** flow merged via #22850 (`1bb713b`), and **Prisma DB failure detection / self-healing** for the proxy readiness check via #21059 (`725c0c1`).

Several important bug fixes worth pulling into operators' attention:
- Bedrock now strips Claude Code v2.1.69+'s `custom` field from tool definitions to avoid 400s (#22861, `3d027c0`); cache_control `scope` also stripped on Bedrock and Azure AI for Anthropic messages (#22867).
- HTTP/SDK clients are no longer eagerly closed on `LLMClientCache` eviction, fixing connection churn (#22925).
- Azure passthrough now propagates 429/5xx in async streaming instead of returning silent HTTP 200 (#22913).
- Vertex AI: drop unsupported `output_config` (#22884) and prevent Claude streaming truncation when `finish_reason` races content (#22692).
- WebSearch interception fix with thinking enabled + SpendLog dedup (#22679), plus log-level downgrades to stop Slack alert noise.
- Anthropic gains top-level `cache_control` for automatic prompt caching (#22442) and an opt-out flag for default reasoning summary (`607a968`).
- JWT user upsert now includes `user_email` (#22915); `apac.anthropic.claude-sonnet-4-6` region ID corrected to `au.` (#21466).

UI/RBAC: new RBAC toggles for Vector Stores and Agents (`96b75be`), agent auth-headers form + Prisma migration, and 58 new Vitest tests for policies components (#22932). A small fix corrects keys showing "Organization: Not Set" due to `org_id`/`organization_id` mismatch (#22857).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`20ce6dd`](https://github.com/BerriAI/litellm/commit/20ce6ddbefe965218147ee704458a6592ce45c23) Fix apac.anthropic.claude-sonnet-4-6 -> au.anthropic.claude-sonnet-4-6 (#21466) — _@anttttti_
- [`05d2ccd`](https://github.com/BerriAI/litellm/commit/05d2ccdf566ca0b9daf18198cd609060added7fd) [Fix] PATCH /update/ui_settings now merges with existing record instead of overwriting — _@yuneng-jiang_
- [`79817ff`](https://github.com/BerriAI/litellm/commit/79817ff796cd612fbade7d92ec270b810b5acf8f) [Fix] Constrain feature_name to Literal, deduplicate runtime flags, fix silent test swallowing — _@yuneng-jiang_
- [`271e80c`](https://github.com/BerriAI/litellm/commit/271e80cee79afdcc9e0014c621efc91d90271fad) Merge pull request #22932 from BerriAI/litellm_policies_vitest_tests — _@yuneng-jiang_
- [`b3c092f`](https://github.com/BerriAI/litellm/commit/b3c092f489ff0cce2758f3364ede3248cb4196c2) [Fix] Address code review: delegate team admin check to shared helper, fix sidebar team admin exemption — _@yuneng-jiang_
- [`ba3ce77`](https://github.com/BerriAI/litellm/commit/ba3ce77e2967e40e1cbf483cc5dcedf018271f5f) test(openai): cover gpt-5.4-pro parameter behavior — _@vincentkoc_
- [`fb935a6`](https://github.com/BerriAI/litellm/commit/fb935a61ae0c9b1d8e553bd3e7c09eabc3d1f2fa) test(chatgpt): restore gpt-5.2 codex transformation coverage — _@vincentkoc_
- [`4e7b0fc`](https://github.com/BerriAI/litellm/commit/4e7b0fcfdfbbec35843ceae2b52de4599851cc94) [Test] Add Vitest unit tests for policies components — _@yuneng-jiang_
- [`3d027c0`](https://github.com/BerriAI/litellm/commit/3d027c0f7afd0fa1428bc213da6cfa3282cb0b9a) fix(bedrock): filter out `custom` field from tools to prevent 400 errors (#22861) — _@weiguangli-io_
- [`4e3c957`](https://github.com/BerriAI/litellm/commit/4e3c957bce7459d9e14cc86200dd6366cddd48d1) docs(chatgpt): add gpt-5.3-chat-latest proxy example — _@vincentkoc_
- [`9a37fe2`](https://github.com/BerriAI/litellm/commit/9a37fe2821d6bd0a1babe0299069ca498fe11a4c) test(openai): add gpt-5.4 detection and xhigh assertions — _@vincentkoc_
- [`68ab37c`](https://github.com/BerriAI/litellm/commit/68ab37cf34632a14454ac71041e4f9ed12d88c7e) test(chatgpt): add gpt-5.4 alias registration coverage — _@vincentkoc_
- [`ef7be61`](https://github.com/BerriAI/litellm/commit/ef7be611ed7f94aab313c5b102586c18bae1bc57) docs(chatgpt): include gpt-5.4 and gpt-5.4-pro examples — _@vincentkoc_
- [`e358e3a`](https://github.com/BerriAI/litellm/commit/e358e3af4837795b90ec0c82cfc9021d8d8d3af1) docs(openai): add gpt-5.4 and gpt-5.4-pro model rows — _@vincentkoc_
- [`86d04ef`](https://github.com/BerriAI/litellm/commit/86d04ef3a038b585154c6a441fa8911302563f0d) chore(models): sync backup for gpt-5.4-pro and chatgpt 5.4 — _@vincentkoc_
- [`f1e4e4a`](https://github.com/BerriAI/litellm/commit/f1e4e4a0ce0c5adbdf8fe6a87b9f98ac504ba8a4) feat(models): add gpt-5.4-pro and chatgpt 5.4 aliases — _@vincentkoc_
- [`dc19cc2`](https://github.com/BerriAI/litellm/commit/dc19cc241e9b385cc17106a4c057d61472b63e7b) docs(chatgpt): remove gpt-5.3 model ID list block — _@vincentkoc_
- [`801e2d6`](https://github.com/BerriAI/litellm/commit/801e2d615b46858729c6318e48e2a5cc899ee5bc) test(chatgpt): cover gpt-5.3 oauth alias registration — _@vincentkoc_
- [`ffd65d2`](https://github.com/BerriAI/litellm/commit/ffd65d2678f6e8b4fa8fc6f2521233f7db37e133) docs(chatgpt): document gpt-5.3 oauth model variants — _@vincentkoc_
- [`53b3b13`](https://github.com/BerriAI/litellm/commit/53b3b1303e018f413aac19c7122178f39a480427) chore(models): sync backup map for chatgpt gpt-5.3 aliases — _@vincentkoc_
- [`32e5e55`](https://github.com/BerriAI/litellm/commit/32e5e55f8408427a46bbac04cc8404f544b0235c) feat(models): add chatgpt gpt-5.3 oauth aliases — _@vincentkoc_
- [`725c0c1`](https://github.com/BerriAI/litellm/commit/725c0c158ffa39f27cf68dca13ea2ae7eb1e468a) Prisma DB Failure Detection and Self-Healing (#21059) — _@castrapel_
- [`503eb2f`](https://github.com/BerriAI/litellm/commit/503eb2fd4ccafa5034c4e90a368952b7fb44578a) fix: don't close HTTP/SDK clients on LLMClientCache eviction (#22925) — _@ishaan-jaff_
- [`bf9c96b`](https://github.com/BerriAI/litellm/commit/bf9c96b91205d17e13d9c7ea54d396005db5bc63) Merge pull request #22679 from giulio-leone/fix/websearch-thinking-constraint — _@Sameerlite_
- [`728e5b1`](https://github.com/BerriAI/litellm/commit/728e5b13f7da968ce16b233e2b12247ef16c31c7) Merge pull request #22922 from BerriAI/litellm_gpt-4.5_fix — _@Sameerlite_
- [`f06e9e6`](https://github.com/BerriAI/litellm/commit/f06e9e636885370391788730633cf6aa060f0294) Fix doc — _@Sameerlite_
- [`6d4a281`](https://github.com/BerriAI/litellm/commit/6d4a281ba014e39bf126cd3d91d45296880f6979) fix(gemini): handle 'minimal' reasoning_effort param for gemini-3.1-flash-lite-preview — _@Varad2001_
- [`7aff1dc`](https://github.com/BerriAI/litellm/commit/7aff1dc0d3d2d448e01f8e3632e825d87b78e18c) Merge pull request #22919 from BerriAI/litellm_gpt-4.5_fix — _@Sameerlite_
- [`04f3833`](https://github.com/BerriAI/litellm/commit/04f38332de3f705a744abcf38dc34e093a8cf1fb) Fix doc — _@Sameerlite_
- [`c919031`](https://github.com/BerriAI/litellm/commit/c919031ff03efa5cb0594f2fbe3e31b43e31d9bd) feat(proxy): include user_email in jwt upsert user creation (#22915) — _@spencer-burridge_
- [`46fa9a3`](https://github.com/BerriAI/litellm/commit/46fa9a33da3ea5229f37e86a1d4f526662bad145) Merge pull request #22918 from BerriAI/litellm_gpt-4.5_fix — _@Sameerlite_
- [`cae1f5f`](https://github.com/BerriAI/litellm/commit/cae1f5fbaefe1668931e72ad523a971f7a060cbc) Fix doc — _@Sameerlite_
- [`9df686e`](https://github.com/BerriAI/litellm/commit/9df686e044574c3c4f4a3ee2afd0e0efd969c895) Merge pull request #22917 from BerriAI/litellm_gpt-4.5_fix — _@Sameerlite_
- [`cf376d2`](https://github.com/BerriAI/litellm/commit/cf376d2c0e8d3b98b3cba0d2c1c42e9290985569) Fix doc — _@Sameerlite_
- [`a42132f`](https://github.com/BerriAI/litellm/commit/a42132f3299ef051252030acf1fb00922bb6401a) fix(passthrough): propagate Azure 429/5xx errors in async streaming instead of silent HTTP 200 (#22913) — _@ishaan-jaff_
- [`8dca085`](https://github.com/BerriAI/litellm/commit/8dca085640f80cf4bc39a0a209bb37b05df4c118) Merge pull request #22916 from BerriAI/litellm_gpt-5.4_day_0 — _@Sameerlite_
- [`3b457b5`](https://github.com/BerriAI/litellm/commit/3b457b5d8ee1191a9c972cda189470d6c184162b) Add day 0 support for gpt-5.4 — _@Sameerlite_
- [`d6310ff`](https://github.com/BerriAI/litellm/commit/d6310ff36e164749d76341018b45df90997529d0) fix: downgrade WebSearch logs from info to debug to reduce production noise — _@giulio-leone_
- [`b9a8d42`](https://github.com/BerriAI/litellm/commit/b9a8d42882ef014b7479ccc7926c7002b8336b4e) Add day 0 support for gpt-5.4 — _@Sameerlite_
- [`7b0ed0f`](https://github.com/BerriAI/litellm/commit/7b0ed0ff913fb23c9cd1c5c83d6c881823f1f48c) fix: replace sk-fake with safe test key to avoid secret scanner — _@giulio-leone_
- [`6db3f2f`](https://github.com/BerriAI/litellm/commit/6db3f2f668166596bb7bb69174b6146f1e7bcceb) Merge pull request #22892 from BerriAI/fix/greptile-type-safety-improvements — _@jquinter_
- [`023794b`](https://github.com/BerriAI/litellm/commit/023794ba62479694c4dd4d4dc495e6229a34660f) fix(merge): resolve conflict with main in cost_tracking_settings — _@jquinter_
- [`6b7d767`](https://github.com/BerriAI/litellm/commit/6b7d767637b126c162b4238f108139a90dd034da) feat(anthropic): support top-level cache_control for automatic prompt caching (#22442) — _@giulio-leone_
- [`660de94`](https://github.com/BerriAI/litellm/commit/660de94493259dc5d49e07007d6f6c5d64f110b3) fix: change all verbose_logger.warning → info in websearch handler — _@giulio-leone_
- [`5c418d8`](https://github.com/BerriAI/litellm/commit/5c418d8de694e92a2e8c65e22b5ba50d636fb037) Merge pull request #22909 from Chesars/fix/greptile-reasoning-summary-followup — _@Chesars_
- [`5b904f6`](https://github.com/BerriAI/litellm/commit/5b904f6054849640df07d2d4c05284ac0420970a) fix(anthropic): align translate_thinking_for_model with default summary injection + add docs — _@Chesars_
- [`c9e60d9`](https://github.com/BerriAI/litellm/commit/c9e60d9909bb869bdda6b5a1060413de2658dbf6) Merge pull request #22904 from Chesars/claude/add-claude-param-default-M4Yic — _@Chesars_
- [`3e9ea6f`](https://github.com/BerriAI/litellm/commit/3e9ea6f49bf9b552834ba0a21a827fecc131854a) refactor: extract summary_disabled logic into shared helper and add missing env var test — _@Chesars_
- [`607a968`](https://github.com/BerriAI/litellm/commit/607a9683a4a5d3d8cdb1b2f5463eaa875966d68e) feat(anthropic): add opt-out flag for default reasoning summary — _@Chesars_
- [`b04ba60`](https://github.com/BerriAI/litellm/commit/b04ba60e6e24da2216910a51c74b5b43f4002343) fix(websearch): downgrade max_tokens adjustment log level — _@giulio-leone_
- [`5183a6e`](https://github.com/BerriAI/litellm/commit/5183a6e85046962af3ba21740c232042981012b6) Merge pull request #22866 from mubashir1osmani/feat/bedrock-mantle-provider-clean — _@Sameerlite_
- [`a282bf9`](https://github.com/BerriAI/litellm/commit/a282bf97268ca45385b29e7a78e82be36303fd26) Merge pull request #22893 from BerriAI/litellm_messages-to-responses-mapping-docs — _@Sameerlite_
- [`0620f99`](https://github.com/BerriAI/litellm/commit/0620f99fa447f24341cf667f6472956232653e93) Merge pull request #22867 from BerriAI/litellm_bedrock-azure-cache-control-scope — _@Sameerlite_
- [`c04c120`](https://github.com/BerriAI/litellm/commit/c04c120df2d7365ac754818a515585f30a835327) Merge pull request #22884 from BerriAI/litellm_vertex-output-config-drop — _@Sameerlite_
- [`501671a`](https://github.com/BerriAI/litellm/commit/501671aa434c0f185ab91b7cdf7c9227bd3265ad) fix(agents): PUT update_agent_in_db clears static_headers and extra_headers when omitted — _@Sameerlite_
- [`4fda3e8`](https://github.com/BerriAI/litellm/commit/4fda3e8351056ee93c950f355e6a084c317006c6) Merge pull request #22896 from BerriAI/litellm_mistral-document-ai-2512-cost-map — _@Sameerlite_
- [`bb1297f`](https://github.com/BerriAI/litellm/commit/bb1297fe1b859d729fffe7638922133e56bcb50a) feat(cost): add azure_ai/mistral-document-ai-2512 to model cost map — _@Sameerlite_
- [`dd0ccdd`](https://github.com/BerriAI/litellm/commit/dd0ccdd8b2f48130ddeb43a15f0b659fcc52e3f7) fix(o-series): generalize is_model_o_series_model to match any o+digit prefix — _@Sameerlite_
- [`6a8adf8`](https://github.com/BerriAI/litellm/commit/6a8adf8bdf578126f64f2a68396f05f79eade5b8) docs(anthropic): add v1/messages → /responses parameter mapping reference — _@Sameerlite_
- [`b52bd43`](https://github.com/BerriAI/litellm/commit/b52bd437404458e593d9f5885ff836659c5b40c8) Merge pull request #22822 from BerriAI/fix/plr0915-too-many-statements — _@jquinter_
- [`c1076de`](https://github.com/BerriAI/litellm/commit/c1076de5bd0095a2f96d602afebc482cb75b62b1) fix(types): address type-safety issues from mypy PR review — _@jquinter_
- [`ad2969b`](https://github.com/BerriAI/litellm/commit/ad2969badb3db9d088b8407c1a2a0d26df6f6c4f) Merge pull request #22890 from BerriAI/fix/mypy-type-errors — _@jquinter_
- [`44498da`](https://github.com/BerriAI/litellm/commit/44498da62ac4d8137411ccf5aded31e83ec62426) Merge pull request #22887 from BerriAI/fix/schema-add-realtime-mode — _@jquinter_
- [`de18b47`](https://github.com/BerriAI/litellm/commit/de18b47f83e2dd85df3dbbed2803893e85d2ad04) Merge pull request #22891 from BerriAI/fix/prisma-schema-duplicate-spec-path — _@jquinter_
- [`16f415a`](https://github.com/BerriAI/litellm/commit/16f415ad7455972ae3995beb80151617805f0523) fix(schema): remove duplicate spec_path field in LiteLLM_MCPServerTable — _@jquinter_
- [`f45a9df`](https://github.com/BerriAI/litellm/commit/f45a9df52d8e7f894a8f87a343a3ded165d69671) fix(mypy): resolve type errors across 9 files — _@jquinter_
- [`04c904f`](https://github.com/BerriAI/litellm/commit/04c904f4d66de62dffbc36494eac881300f41d25) fix(agents): fix header isolation, streaming trace headers, and patch clearing — _@Sameerlite_
- [`1c7f93f`](https://github.com/BerriAI/litellm/commit/1c7f93f90c6e1e02534f6cb9c9dc5be8881ecd39) Update litellm/fine_tuning/main.py — _@jquinter_
- [`594499e`](https://github.com/BerriAI/litellm/commit/594499e806b41ce6e2982b24e21b3ceab6cad9c4) Add tests — _@Sameerlite_
- [`db8e909`](https://github.com/BerriAI/litellm/commit/db8e909ef2581d5aaf8c45fd461f8ae9528669a2) fix(test): add 'realtime' to model mode enum in schema validation — _@jquinter_
- [`175d090`](https://github.com/BerriAI/litellm/commit/175d0905b7a95a6ed10331724d60f967ec781435) docs(agents): add A2A agent authentication headers guide — _@Sameerlite_
- [`0133d11`](https://github.com/BerriAI/litellm/commit/0133d11eb204ca36f33bcfb2b7209803815f09e0) fix: replace assert with RuntimeError and fix return type annotation — _@jquinter_
- [`9a13c76`](https://github.com/BerriAI/litellm/commit/9a13c76e2fa8a74ff17df959bb37624072951b63) Merge pull request #22553 from dsteeley/fix/streaming-multi-tool-call-premature-finish — _@Sameerlite_
- [`b3bbcd3`](https://github.com/BerriAI/litellm/commit/b3bbcd3955e3f1c9aba83771925504886657410b) fix(lint): remove unreachable None check in _resolve_fine_tuning_timeout — _@jquinter_
- [`36d279a`](https://github.com/BerriAI/litellm/commit/36d279ab42c20185d435d502f18f895487249ab3) feat(ui/agents): add Authentication Headers section to agent create/edit form — _@Sameerlite_
- [`fd53678`](https://github.com/BerriAI/litellm/commit/fd53678898b71f6da4384e5984a4d1308f2ee060) test(agents): add tests for A2A custom header forwarding — _@Sameerlite_
- [`6e9c7c4`](https://github.com/BerriAI/litellm/commit/6e9c7c4a8dd8ddce1b911d77e2009aac3de5f9d3) feat(agents): add Prisma migration for agent header columns — _@Sameerlite_
- [`20a4eea`](https://github.com/BerriAI/litellm/commit/20a4eea27e71cfc5933670b73747fb46d66dd41d) feat(agents): forward custom headers to backend A2A agents — _@Sameerlite_
- [`16a30b5`](https://github.com/BerriAI/litellm/commit/16a30b55f5493bbf0754aac0dc4ea4c54b681804) feat(agents): add merge_agent_headers utility — _@Sameerlite_
- [`07ee1e9`](https://github.com/BerriAI/litellm/commit/07ee1e9886f54b773f4d9de7e3c8181e90d30d6e) feat(agents): persist static_headers and extra_headers in agent registry — _@Sameerlite_
- [`028e687`](https://github.com/BerriAI/litellm/commit/028e6871dd5f8611f84c1e2dc853f44e506e5a92) feat(agents): add static_headers and extra_headers fields to schema and types — _@Sameerlite_
- [`a2c11d4`](https://github.com/BerriAI/litellm/commit/a2c11d431ae916c27065693dbe59c756d971026a) fix(vertex_ai): drop unsupported output_config parameter from all requests — _@Sameerlite_
- [`cdf2d67`](https://github.com/BerriAI/litellm/commit/cdf2d67fc86459f56b2acfb0ce89321cc8c7651e) Merge pull request #22503 from giulio-leone/fix/graceful-tool-args-repair — _@Sameerlite_
- [`f7d5ff9`](https://github.com/BerriAI/litellm/commit/f7d5ff9e2a881d743f6b565a3a9a9925ea4e36b5) Merge pull request #22692 from giulio-leone/fix/vertex-ai-streaming-truncation — _@Sameerlite_
- [`b3f3918`](https://github.com/BerriAI/litellm/commit/b3f3918e98a60b3ed0e665782d3737dfb8a7ea23) fix(provider): register bedrock_mantle in model_list and models_by_provider — _@mubashir1osmani_
- [`f1b8636`](https://github.com/BerriAI/litellm/commit/f1b86366d38d0c090f483db6cd34d98f4452c013) Revert "fix(provider): register bedrock_mantle in model_list and models_by_provider" — _@mubashir1osmani_
- [`7c47609`](https://github.com/BerriAI/litellm/commit/7c47609f7af6f32cc5777e04bfe19763fa8dd1f2) fix(provider): register bedrock_mantle in model_list and models_by_provider — _@mubashir1osmani_
- [`1bf0a3a`](https://github.com/BerriAI/litellm/commit/1bf0a3adc4787b40342d7b130633c2653d954972) Update ui/litellm-dashboard/src/components/provider_info_helpers.tsx — _@mubashir1osmani_
- [`ff7024b`](https://github.com/BerriAI/litellm/commit/ff7024b801a96e8ea8ced994ca29cc0a2d855d20) Update ui/litellm-dashboard/src/components/provider_info_helpers.tsx — _@mubashir1osmani_
- [`482bc93`](https://github.com/BerriAI/litellm/commit/482bc9391009f3a2441f754557c57360cc98ca08) fix(azure_ai): strip scope from cache_control for Anthropic messages — _@Sameerlite_
- [`cc989b1`](https://github.com/BerriAI/litellm/commit/cc989b11716f343d96abbeea2127090286098c5c) fix(bedrock): strip scope from cache_control for Anthropic messages — _@Sameerlite_
- [`1bb713b`](https://github.com/BerriAI/litellm/commit/1bb713bc7ba845137c7fa4da1409f273b9f1b1b4) feat(mcp): BYOK MCP servers with OAuth 2.1 PKCE authorization flow (#22850) — _@ishaan-jaff_
- [`4a4bcce`](https://github.com/BerriAI/litellm/commit/4a4bcced3c0a80a390edd0b8fa1e69cda588a1e5) docs: add Amazon Bedrock Mantle provider page — _@mubashir1osmani_
- [`1089945`](https://github.com/BerriAI/litellm/commit/1089945f0e79732c3c4d3d5fe2ed86efc5b198f9) feat(ui): add Amazon Bedrock Mantle to provider UI — _@mubashir1osmani_
- [`df7e3aa`](https://github.com/BerriAI/litellm/commit/df7e3aa1e5884ea7d3e53a4906efd4d738305102) feat(provider): add Amazon Bedrock Mantle as a first-class provider — _@mubashir1osmani_
- [`3c389ad`](https://github.com/BerriAI/litellm/commit/3c389ad6f7203b930075d91ab0e2c2284336bf18) Merge pull request #22857 from BerriAI/litellm_fix_key_org_id_serialization — _@yuneng-jiang_
- [`7eafac8`](https://github.com/BerriAI/litellm/commit/7eafac8e7f50f491e51e686aee61b73b776549d9) Fix remaining org_id fallbacks in filter_helpers and TeamVirtualKeysTable — _@yuneng-jiang_
- [`96b75be`](https://github.com/BerriAI/litellm/commit/96b75be03d1db6e4957183061fb20e97163318ee) [Feature] RBAC for Vector Stores and Agents — _@yuneng-jiang_
- [`51d876c`](https://github.com/BerriAI/litellm/commit/51d876ce7906b1339fa78eeead0af4086ee3b359) [Fix] UI - Keys: Organization shows Not Set due to org_id/organization_id mismatch — _@yuneng-jiang_
- [`335c4d4`](https://github.com/BerriAI/litellm/commit/335c4d49467f04c5d5655e39877e150984ff35be) Merge pull request #22851 from BerriAI/litellm_v182-messages-routing-note — _@Sameerlite_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
