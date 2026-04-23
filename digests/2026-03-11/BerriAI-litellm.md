# BerriAI/litellm — 2026-03-11

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-10T23:59:59.000Z → 2026-03-11T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A heavy infrastructure and cleanup day, dominated by a major pricing-JSON purge and several provider/proxy fixes — no releases or new issues filed in the window.

The headline change is Chesars's removal of 137 confirmed deprecated/shutdown models from the pricing JSON (commit `fd46d74`), partially walked back across follow-ups that restored still-functional entries like `gpt-4-0613`, `text-embedding-ada-002-v2`, and `gemini-live-2.5-flash-preview-native-audio-09-2025` (`eb30aa3`, `d43683e`, `16de1e3`). If you depend on legacy model names, diff this carefully. Paired with this, Anthropic Files API support landed for the SDK via the BaseFilesConfig pattern (PR #16594), and Vertex AI gained region routing for partner models plus GLM support (PR #19104, with a warning when user regions get overridden).

Notable proxy/auth fixes:
- SCIM now respects default user permissions (PR #23395), with a unit test for user-creation values (`18c0e88`).
- `auto_redirect_ui_login_to_sso` is now configurable via `config.yaml` general_settings, not just env var (PR #23367).
- TypeError in spend tracking when a request has no API key is fixed (PR #23363, `1a08ac6`); audit log callbacks now fire even when the DB is unavailable (`364f5c6`).
- Multipart/form-data boundary is preserved in passthrough endpoints (PR #23338) — fixes file-upload `RequestValidationError`.
- MCP OpenAPI OAuth flow fixes for transport mapping, error messages, and discovery bypass (PR #23315); MCP UI gains AWS SigV4 auth (PR #23282).

Performance: `/tag/list` switched from `find_many(distinct)` to `group_by` to avoid a full table scan (PR #23136), and `list_team` batches key queries to eliminate N+1 (PR #23152). UI `UsagePageView` got memoization (PR #23379).

Reverts/regressions worth noting: the timezone picker on the usage page (PR #23174) was merged then reverted hours later (PR #23399) — don't build on it yet. Proxy startup now exits early with "Database setup failed after multiple retries" if prisma migrate fails (PR #23257), which broke and required a CI test update (PR #23390). Gemini embedding 2 preview support also landed (PR #23322).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`fdfb65c`](https://github.com/BerriAI/litellm/commit/fdfb65c204011adb73fa4b57cb92e4e496dbc89f) Merge pull request #23395 from BerriAI/litellm_fix-default-user-perms-respected-through-SCIM — _@ryan-crabbe_
- [`7e1c860`](https://github.com/BerriAI/litellm/commit/7e1c860ffe509f6ffe190d03e9261ef1c8fd3db3) fix: make token breakdown cards click-to-expand on Total Tokens card — _@ryan-crabbe_
- [`9379cb1`](https://github.com/BerriAI/litellm/commit/9379cb1038bd5d1d077712a324e3d6f0edf29982) [Fix] Replace deprecated models in function calling tests — _@yuneng-jiang_
- [`c239d33`](https://github.com/BerriAI/litellm/commit/c239d3392581f9cebe586b57e6d3ae53283f0cf7) Merge pull request #23393 from BerriAI/litellm_ui_component_tests — _@yuneng-jiang_
- [`e4e5436`](https://github.com/BerriAI/litellm/commit/e4e5436bc283601ecb55cedebc260bea075608bc) Merge pull request #23399 from BerriAI/revert-23174-feat_adding_timezone_to_usage_page — _@ryan-crabbe_
- [`8617ca6`](https://github.com/BerriAI/litellm/commit/8617ca6e1295e0ac2cb07ccf434470c6c829f547) Merge pull request #23390 from BerriAI/litellm_/reverent-kalam — _@yuneng-jiang_
- [`c2c102c`](https://github.com/BerriAI/litellm/commit/c2c102c6e2835cc9b307e066365da9aeb267001c) Revert "feat: adding a timezone picker to the usage page" — _@ryan-crabbe_
- [`28989a1`](https://github.com/BerriAI/litellm/commit/28989a11e7cd54a5c489015555b4bd659ec67d11) [Fix] Update test_bad_database_url to match new startup error message — _@yuneng-jiang_
- [`f5e5d17`](https://github.com/BerriAI/litellm/commit/f5e5d17e4ae7f8d3a33971779c24523e78fb00cf) fix(mcp): fix OpenAPI OAuth flow — transport mapping, error messages, and discovery bypass (#23315) — _@ishaan-jaff_
- [`1f721fd`](https://github.com/BerriAI/litellm/commit/1f721fd1338fc0ec21d40440c1950a0fc2dc561a) Merge pull request #23394 from BerriAI/litellm_internal_dev_staging_branch — _@yuneng-jiang_
- [`202b5b2`](https://github.com/BerriAI/litellm/commit/202b5b29de3b68d56c4d8bfa24a32a2d0d5d3e1e) Add daily internal dev branch creation job — _@yuneng-jiang_
- [`4405837`](https://github.com/BerriAI/litellm/commit/4405837aaa0ba67147c5f796a85a587c6da584da) Add unit tests for 5 untested UI components — _@yuneng-jiang_
- [`18c0e88`](https://github.com/BerriAI/litellm/commit/18c0e8843c01a21bbbedeb361544472f80ba8d2d) test: unit test for mkaing sure that user being created with correct value — _@ryan-crabbe_
- [`56af724`](https://github.com/BerriAI/litellm/commit/56af724943ecddc8f98a9572f8d26d0e861771ae) Merge pull request #23379 from BerriAI/litellm_ui_perf_fixes — _@yuneng-jiang_
- [`52f93ae`](https://github.com/BerriAI/litellm/commit/52f93aedc28bab64a3d858bf30ad62273d4b8838) Merge pull request #23387 from BerriAI/litellm_fix_ruff_lint_errors — _@yuneng-jiang_
- [`79058ad`](https://github.com/BerriAI/litellm/commit/79058ad596814c3c5c65401b1a427d8b8f60fffb) Merge pull request #23174 from BerriAI/feat_adding_timezone_to_usage_page — _@ryan-crabbe_
- [`896e7b7`](https://github.com/BerriAI/litellm/commit/896e7b7623ad647f003951ed3c4efff07a3c7c3d) Merge pull request #23367 from BerriAI/litellm_auto_redirect_sso_config — _@yuneng-jiang_
- [`3968146`](https://github.com/BerriAI/litellm/commit/3968146f67e4244653f662c2d8b9d0eb59f4a73f) Merge pull request #23363 from BerriAI/litellm_fix_is_master_key_none_api_key — _@yuneng-jiang_
- [`9c0cd6e`](https://github.com/BerriAI/litellm/commit/9c0cd6e02e24a48a97215761cb098cb28e7aea7f) Fix ruff lint errors: unused imports, undefined names, and statement counts — _@yuneng-jiang_
- [`f8cf977`](https://github.com/BerriAI/litellm/commit/f8cf97710ec2ed5264db11ad5a2dda3f42783769) Merge pull request #17724 from peterkc/refactor/files-api-type-aliases — _@Chesars_
- [`296dcae`](https://github.com/BerriAI/litellm/commit/296dcae60f4882a0a1740d599dee543cb20d3145) Merge upstream/litellm_oss_staging_03_11_2026 and resolve conflicts — _@Chesars_
- [`6c6585a`](https://github.com/BerriAI/litellm/commit/6c6585af568e648168fe21bcec061820e68297b7) Merge litellm_oss_staging_03_11_2026 into refactor/files-api-type-aliases — _@Chesars_
- [`b5dfde8`](https://github.com/BerriAI/litellm/commit/b5dfde892cc80149703225b4471f34a32952fe76) Merge pull request #23377 from BerriAI/litellm_fix_flaky_mcp_and_agentcore_tests — _@yuneng-jiang_
- [`13c0741`](https://github.com/BerriAI/litellm/commit/13c0741262aaa22b7d6c1fa49cc36f127025ee1d) Memoize expensive computations in UsagePageView to prevent unnecessary recalculations on every render — _@yuneng-jiang_
- [`05fba27`](https://github.com/BerriAI/litellm/commit/05fba27b0c0a3499aed53eaa829aaffadc42773f) Add Retool Assist tutorial with LiteLLM Proxy to docs (#21952) — _@Astrodevil_
- [`8d2432b`](https://github.com/BerriAI/litellm/commit/8d2432b21b4b4de7f5d7306f755c0bcd9a5d2057) Merge pull request #23373 from Chesars/style/black-format-codebase — _@Chesars_
- [`64d3d76`](https://github.com/BerriAI/litellm/commit/64d3d7626f9815fd616017f000e5e88962d48f32) [Fix] Flaky MCP server and AgentCore streaming tests in CI — _@yuneng-jiang_
- [`2e9f057`](https://github.com/BerriAI/litellm/commit/2e9f057fbda5ffed5780788e96f35417e8ad984e) style: run black formatter on entire codebase — _@Chesars_
- [`08bb380`](https://github.com/BerriAI/litellm/commit/08bb3808bced8e828039ebb4424720726af980eb) Merge pull request #23374 from BerriAI/ui_build_fix_mar11 — _@yuneng-jiang_
- [`d415ffc`](https://github.com/BerriAI/litellm/commit/d415ffc70b45013bd6d83d51c2c9e818ec80aeaf) fixing ui build and tests — _@yuneng-jiang_
- [`2773adb`](https://github.com/BerriAI/litellm/commit/2773adba6d72d3235242276409526200928d1d9f) fix(ui): move timezone search icon to the left side in date picker — _@ryan-crabbe_
- [`d398d1f`](https://github.com/BerriAI/litellm/commit/d398d1f9b92d45be35c140cb0351a4c6ce1a062d) fix: use group_by instead of find_many(distinct) in /tag/list to avoid full table scan (#23136) — _@CAFxX_
- [`bc3a54d`](https://github.com/BerriAI/litellm/commit/bc3a54d49d7d3662a2b29ac4519af6fa251ad748) fix: refetching mcp after creating — _@ryan-crabbe_
- [`c7e3b11`](https://github.com/BerriAI/litellm/commit/c7e3b11da8c21c3ff8b8a7f63c5c127ff31e0103) fix: batch key queries in list_team to eliminate N+1 (#23152) — _@CAFxX_
- [`e5245ad`](https://github.com/BerriAI/litellm/commit/e5245adae693ffaf97afd4b0cfd5e0a3b63f2e7b) Support auto_redirect_ui_login_to_sso in config.yaml general_settings — _@yuneng-jiang_
- [`364f5c6`](https://github.com/BerriAI/litellm/commit/364f5c6e03dfe72c2223482d731c81ffd5858b56) fix: ensure audit log callbacks fire even when DB is unavailable — _@yuneng-jiang_
- [`cb24b8b`](https://github.com/BerriAI/litellm/commit/cb24b8b05ea4a14da22bf32c2b5a453816df35a3) Merge pull request #19104 from Chesars/fix/vertex-ai-zai-org-global-region — _@Chesars_
- [`59c24b7`](https://github.com/BerriAI/litellm/commit/59c24b74051cbe5052b4cfce08f6459e0771c754) Merge pull request #17717 from Chesars/docs/responses-api-bridge-clarification — _@Chesars_
- [`57e73c8`](https://github.com/BerriAI/litellm/commit/57e73c8f5e0ea13c92fcab70ca8daf6a18ba7c94) Merge pull request #20795 from Chesars/chore/remove-deprecated-models — _@Chesars_
- [`3948513`](https://github.com/BerriAI/litellm/commit/3948513a4c7f5b9a940ccac33c449c0757af97a4) fix(vertex-ai): warn on region override and remove dead is_global_only_vertex_model — _@Chesars_
- [`1a3fdc7`](https://github.com/BerriAI/litellm/commit/1a3fdc7ae39193c264dcc817250e5a7aa7f9eade) fix: align Vertex AI Claude deprecations with Google's schedule — _@Chesars_
- [`1a08ac6`](https://github.com/BerriAI/litellm/commit/1a08ac66198d3c7d6c585d6a5e7ebb9d30a87312) Fix TypeError in _is_master_key when api_key is None — _@yuneng-jiang_
- [`0c95d41`](https://github.com/BerriAI/litellm/commit/0c95d415e1346bf1a569d923b3aa97511c98e1d8) Add Abilty To Set minReadySeconds From values Files (#23173) — _@rjduffner_
- [`f3ceb69`](https://github.com/BerriAI/litellm/commit/f3ceb69e9f5c131b0d5af1c72e791e3486869ea3) fix(vertex-ai): override unsupported user region for models with supported_regions — _@Chesars_
- [`1d1baa2`](https://github.com/BerriAI/litellm/commit/1d1baa2cd5cbb925b106ddd1aed8ed25f9becffc) Merge pull request #23362 from BerriAI/litellm_ui_model_mcp — _@yuneng-jiang_
- [`d81d751`](https://github.com/BerriAI/litellm/commit/d81d751af0148179019bde294583167f178803ec) fix(tests): update tests to use models still present in pricing JSON — _@Chesars_
- [`8af34ff`](https://github.com/BerriAI/litellm/commit/8af34ffebcd538500947e4ee9f9bcab9c3ee2505) null-safe array checks — _@yuneng-jiang_
- [`689cbaa`](https://github.com/BerriAI/litellm/commit/689cbaa6c1d768d2ef18633d01b422fbc969dab6) fix(vertex-ai): update tests to match new get_vertex_region model_cost lookup — _@Chesars_
- [`45ca8b5`](https://github.com/BerriAI/litellm/commit/45ca8b5b2bb57af44185f7ac4232fe125c9261cd) chore: resolve merge conflicts with upstream/main — _@Chesars_
- [`f9a538b`](https://github.com/BerriAI/litellm/commit/f9a538b5839d7d9c70ea4127775a4ab4e6b91187) fix(docs): close unclosed code block before Examples heading — _@Chesars_
- [`274bf42`](https://github.com/BerriAI/litellm/commit/274bf4249378adc5790f7e508e462c375a020bf5) Update docs/my-website/docs/providers/openai.md — _@Chesars_
- [`9e7a6a7`](https://github.com/BerriAI/litellm/commit/9e7a6a73ed7051c1b09694a294fa36439f7cc6e6) docs: remove duplicate gpt-5.4 tip block — _@Chesars_
- [`01a6c70`](https://github.com/BerriAI/litellm/commit/01a6c707a32f427c3c2b07cce07e6d863d87715f) docs: restore gpt-5.4 reasoning_effort tip lost during rebase — _@Chesars_
- [`d0d09e0`](https://github.com/BerriAI/litellm/commit/d0d09e037efb654ad7060eb16e030c7411d1cf15) docs: clarify when to use openai/responses/ prefix for built-in tools — _@Chesars_
- [`ebe75a1`](https://github.com/BerriAI/litellm/commit/ebe75a1bc62f3ad91d5df7ca0b4bc4f017321a83) Merge pull request #16594 from Chesars/feat/anthropic-files-api — _@Chesars_
- [`24ad510`](https://github.com/BerriAI/litellm/commit/24ad510617a27d8fb34c8e7d257f5fbc910b1eb1) feat(mcp): add AWS SigV4 auth support in UI and fix credential merge on edit (#23282) — _@michelligabriele_
- [`3bbadca`](https://github.com/BerriAI/litellm/commit/3bbadca6e208f5ee6d5e4772bed941792b417e42) Clean up skills test: remove duplicate imports, parameterize mock HTTP method (#23360) — _@RheagalFire_
- [`d7c2532`](https://github.com/BerriAI/litellm/commit/d7c2532137023e4674701382f511622ccc28ef08) fix: remove redundant import os, use Path().name instead — _@Chesars_
- [`ca910a8`](https://github.com/BerriAI/litellm/commit/ca910a8fa09e699c7a50dfa13069421a6e7b97b8) Replace broken Anthropic Skills API integration test with unit tests (#23325) — _@joereyna_
- [`abe0c40`](https://github.com/BerriAI/litellm/commit/abe0c40c1aabc18c4740844213a2e35aff517c14) fix: clarify purpose field docstring in AnthropicFilesConfig — _@Chesars_
- [`8d4e98f`](https://github.com/BerriAI/litellm/commit/8d4e98faa14ac9c4be5237a9bead4ccf31870253) fix(vertex-ai): remove unused import is_global_only_vertex_model — _@Chesars_
- [`bb5d576`](https://github.com/BerriAI/litellm/commit/bb5d57645f8e193991eea4644082a81a06c80001) docs: add VertexAI ZAI (GLM) documentation — _@Chesars_
- [`c723d63`](https://github.com/BerriAI/litellm/commit/c723d63e591a6c4a1fed1b9a276cdc52c874a100) fix(vertex_ai): auto-resolve vertex_location from supported_regions — _@Chesars_
- [`c63b796`](https://github.com/BerriAI/litellm/commit/c63b7965bd8228d6c437806d7be54a0d3bbb088c) fix(vertex_ai): add supported_regions for zai-org/glm-4.7-maas — _@Chesars_
- [`093cca9`](https://github.com/BerriAI/litellm/commit/093cca9f570417efe16889397a5e6ec86ed4a3dd) chore: remove unused AnthropicFilesHandler import and instance — _@Chesars_
- [`b601b53`](https://github.com/BerriAI/litellm/commit/b601b531e7f4e83ce2fb035a9a27370f9dfb81f3) fix: use calendar.timegm for UTC timestamps and reuse AnthropicError — _@Chesars_
- [`9eff611`](https://github.com/BerriAI/litellm/commit/9eff611b1a6e1ba34934ace87aa11108769afe43) feat(anthropic): add Files API support for SDK — _@Chesars_
- [`eb30aa3`](https://github.com/BerriAI/litellm/commit/eb30aa34cf09384f8c040f8bcd362ffd7db555cf) chore: restore gpt-4-0613 (still functional despite deprecation date) — _@Chesars_
- [`16de1e3`](https://github.com/BerriAI/litellm/commit/16de1e300c0bd6d20c3b1cce6eba41fd3e1b490f) chore: restore gemini-live-2.5-flash-preview-native-audio-09-2025 (shutdown Mar 19 2026, not yet) — _@Chesars_
- [`d43683e`](https://github.com/BerriAI/litellm/commit/d43683e875015ac267acafe71d04af6def3641dc) chore: restore text-embedding-ada-002-v2 (not deprecated) — _@Chesars_
- [`3f18cd2`](https://github.com/BerriAI/litellm/commit/3f18cd2fdc43e74eac3cdf750bbfe1a6f3ab02f2) [Docs] Fix "Page Not Found" link for Anthropic endpoint (#23349) — _@PeterDaveHello_
- [`cbbd51a`](https://github.com/BerriAI/litellm/commit/cbbd51a5ce1fdf8546e9424d1d4ed66a3c51c23f) fix(codeql): switch to security-extended to fix OOM failures (#23226) — _@joereyna_
- [`7d2cc4a`](https://github.com/BerriAI/litellm/commit/7d2cc4a3bf3d86b5472ee4ba8fed9df88ce476c6) fix(ui): import MCPEvent type into local scope in chat/types.ts (#23330) — _@joereyna_
- [`7db34e3`](https://github.com/BerriAI/litellm/commit/7db34e31796e6753f150a9571f9074cbccf3873c) Merge pull request #23257 from Harshit28j/litellm_fix-client-close-evict — _@Harshit28j_
- [`e878941`](https://github.com/BerriAI/litellm/commit/e878941da5e037dc615e0a63557176a09dc8e31e) Fix Decimal serialization crash in dry-run endpoint — _@Harshit28j_
- [`d99ddc6`](https://github.com/BerriAI/litellm/commit/d99ddc67d449c99d883833b33f6794e11c0ed311) Merge pull request #23338 from BerriAI/litellm_fix_multipart_passthrough — _@Sameerlite_
- [`8e32919`](https://github.com/BerriAI/litellm/commit/8e32919074bd0a80224a781c0aa80b2a2dd6b1d1) Merge branch 'main' into litellm_fix_multipart_passthrough — _@Sameerlite_
- [`20980f6`](https://github.com/BerriAI/litellm/commit/20980f6c26bcb3781a264c1a3cafd04dcbec7525) Merge pull request #23322 from BerriAI/litellm_gemini_embedding_2_support — _@Sameerlite_
- [`fd46d74`](https://github.com/BerriAI/litellm/commit/fd46d7442456a6debd35381d62fc468d94236f31) chore: remove 137 confirmed deprecated/shutdown models from pricing JSON — _@Chesars_
- [`24d4e5b`](https://github.com/BerriAI/litellm/commit/24d4e5bc60bf54156f7d72ed3b31932e2efddcb7) Deregister VantageLogger on delete and add Decimal cast test — _@Harshit28j_
- [`db4cd87`](https://github.com/BerriAI/litellm/commit/db4cd8797926dc133358b2c4d42c4d298ddef5ef) docs(web_fetch): add newer Claude models to supported models list (#23251) — _@michelligabriele_
- [`5c8e87a`](https://github.com/BerriAI/litellm/commit/5c8e87a9a164b0ad2e2a50e8c1f666f1e61d066b) Merge pull request #17155 from Chesars/fix/xai-streaming-empty-chunk-bug — _@Chesars_
- [`ff2fe96`](https://github.com/BerriAI/litellm/commit/ff2fe967176dbce5eabbf7c7f60e956e023337da) Merge pull request #23276 from BerriAI/litellm_oss_staging_03_10_2026 — _@Sameerlite_
- [`f243e56`](https://github.com/BerriAI/litellm/commit/f243e5615f7e614dc154818e103e5138b6554b10) Merge branch 'main' into litellm_oss_staging_03_10_2026 — _@Sameerlite_
- [`2343149`](https://github.com/BerriAI/litellm/commit/2343149f2dc838fcf5c818c2a0538d9e8abc9799) Merge pull request #23163 from BerriAI/litellm_oss_staging_03_04_2026 — _@Sameerlite_
- [`43217c8`](https://github.com/BerriAI/litellm/commit/43217c8a4ba34462feec1b264d0ce1cf35b15bb3) Merge branch 'main' into litellm_oss_staging_03_10_2026 — _@Sameerlite_
- [`3dab620`](https://github.com/BerriAI/litellm/commit/3dab62023ca830a13eb6fbaa7101b376111c9fe2) Merge branch 'main' into litellm_oss_staging_03_04_2026 — _@Sameerlite_
- [`ce052d0`](https://github.com/BerriAI/litellm/commit/ce052d07be9093b85042db1c33c6bbac9c4488d2) Fix test helper hour=23 bug and add row-count batching test — _@Harshit28j_
- [`358c2fd`](https://github.com/BerriAI/litellm/commit/358c2fd033231c31ebc2416943c240999e80aaab) Add empty-string credential validator to VantageSettingsUpdate — _@Harshit28j_
- [`212cd0e`](https://github.com/BerriAI/litellm/commit/212cd0e4aadae0522392f9550a0ca4c968061eca) Fix pod lock collision, empty credential validation, and interval parsing — _@Harshit28j_
- [`4a9d03f`](https://github.com/BerriAI/litellm/commit/4a9d03f1b11917a82a540c6166cd4d5b4767d185) Fix FocusLogger dedup to use exact type match in litellm_logging.py — _@Harshit28j_
- [`c2fca11`](https://github.com/BerriAI/litellm/commit/c2fca1124bb5f80af16b94f175a4dc5d977c90dd) fix(proxy): preserve multipart/form-data boundary in passthrough endpoints — _@Sameerlite_
- [`3cc2cce`](https://github.com/BerriAI/litellm/commit/3cc2ccec4ae2bd001cb9b30ce00f3c0de52204e3) Fix double-scheduling bug and Decimal CSV serialization — _@Harshit28j_
- [`9200b28`](https://github.com/BerriAI/litellm/commit/9200b2807899a267e3ce5e64dbaa70fca244478c) Fix dry-run summary alignment, token logging, and upload error handling — _@Harshit28j_
- [`d35abfb`](https://github.com/BerriAI/litellm/commit/d35abfb55f926ae784b864356531923d649434ef) Fix data truncation, sub-batch resilience, and env var safety — _@Harshit28j_
- [`25c8658`](https://github.com/BerriAI/litellm/commit/25c865876188959fd141435391ac0c0636a3e50d) Fix oversized-row handling, batch error resilience, and callback registration — _@Harshit28j_
- [`9e623ce`](https://github.com/BerriAI/litellm/commit/9e623ceaff0cb30a261e5241cdd356a37932fe58) Remove redundant empty-frame guard in FocusCsvSerializer — _@Harshit28j_
- [`230c853`](https://github.com/BerriAI/litellm/commit/230c85313b9a424652041f51263bf53b0c78664b) Fix dry-run HTTPException guard and VantageLogger instance detection — _@Harshit28j_
- [`622d5da`](https://github.com/BerriAI/litellm/commit/622d5dabba0dcc676247069f2891f3ef1dc9fb0a) Fix HTTPException swallowed as 500 in /vantage/export endpoint — _@Harshit28j_
- [`9cc6df6`](https://github.com/BerriAI/litellm/commit/9cc6df6b8d1a042ce28d80c1a57d3e2c0c3b3fd4) Fix Greptile round 4: preserve backward compat, add guards, fix defaults — _@Harshit28j_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
