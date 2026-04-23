# BerriAI/litellm — 2026-03-16

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-15T23:59:59.000Z → 2026-03-16T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a **security fix for a privilege-escalation bug in key management** (#23781, commit bc810f9): non-admin `INTERNAL_USER` accounts could call `/key/block`, `/key/unblock`, and modify `max_budget` on arbitrary keys via `/key/update`. These endpoints are now restricted to admins — operators running multi-tenant proxies should pull this immediately.

Other notable fixes:

- **Model-level guardrails not executing on non-streaming `post_call`** (commit 23b69ee): `litellm_params.guardrails` declared on a deployment were only merged into request metadata on the streaming path, silently bypassing guardrails for non-streaming responses.
- **MCP REST M2M OAuth2 flow** (#23468): `oauth2_flow` is now correctly set when building `MCPServer` in `_execute_with_mcp_client`, with related skip decorators removed from M2M tests.
- **DB migration failure behavior** is now opt-in via `--enforce_prisma_migration_check` (#23675) — a behavior change worth noting for proxy deployments that relied on the prior hard-exit.
- **Centralized logging kwarg updates** (#23659, Krish Dholakia) — root-cause refactor consolidating logging update paths into a single function; touches a lot of surface area.
- **Vertex AI batch output download 500** fixed (#23718), and **gpt-4-0314 pricing entry** restored after being lost in a merge conflict (commit 5acceae).

Features:

- **New video endpoints** for create-character / get-character / edit / extension landed under #23737, with router-first routing, managed-character-ID encoding, MIME handling for MP4 uploads, and docs/blog post. Several follow-ups converted `@abstractmethod` stubs to `NotImplementedError` concretes to avoid breaking provider subclasses.
- **Anthropic beta header** filtering moved to post-transformation (#23715).
- **Streaming**: custom attributes preserved on the final stream chunk (#23530).

UI/infra: DefaultUserSettings buttons migrated from Tremor to antd (#23787); empty filter results on the Logs page no longer show stale data (#23792); blog posts now fetched from docs RSS instead of static JSON (#23791); added unit tests for 5 previously untested dashboard files (#23773). A very large CI optimization pass (#23721) lands — uv for requirements, xdist parallelism increases, right-sized resource classes, and extensive xdist test-isolation fixes across logging, router, caching, and vertex/batch tests.

No releases, issues, or open PRs in window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`0d45b1d`](https://github.com/BerriAI/litellm/commit/0d45b1d35c1a9fb099ec0b73bde67075a35fd3a3) Merge pull request #23791 from BerriAI/litellm_update-blog-posts-rss — _@ryan-crabbe_
- [`2ebea08`](https://github.com/BerriAI/litellm/commit/2ebea084c928ce5c302f39697db9efe9407e1f32) Merge remote-tracking branch 'origin/main' into litellm_internal_dev_03_16_2026 — _@yuneng-jiang_
- [`31a677e`](https://github.com/BerriAI/litellm/commit/31a677e3571d30b7f38749ab58a1df8d5a3b6632) Merge pull request #23792 from BerriAI/litellm_ui_logs_filter_2 — _@yuneng-jiang_
- [`c951b33`](https://github.com/BerriAI/litellm/commit/c951b337e1823010b0a6bbe7848817060f2c91b3) [Fix] Reapply empty filter fix after merge with main — _@yuneng-jiang_
- [`57bba3b`](https://github.com/BerriAI/litellm/commit/57bba3b863f9fcd128b26386348f5050abd862d5) [Fix] UI - Logs: Fix empty filter results showing stale data — _@yuneng-jiang_
- [`12facb2`](https://github.com/BerriAI/litellm/commit/12facb27e143d02880592f863bc913ce06b0b35e) fix: remove unused Any import from get_blog_posts — _@ryan-crabbe_
- [`e4c8f95`](https://github.com/BerriAI/litellm/commit/e4c8f9532830c4937a89a7bf0c522a64b32b11c9) Merge pull request #23468 from joereyna/fix/mcp-rest-m2m-oauth2-flow — _@yuneng-jiang_
- [`67482db`](https://github.com/BerriAI/litellm/commit/67482db49dd7aecfeec2e797f993718db037f2d8) feat: fetch blog posts from docs RSS feed instead of static JSON on GitHub — _@ryan-crabbe_
- [`c37cf23`](https://github.com/BerriAI/litellm/commit/c37cf2340f33c3b7d004f2c5c35e065b5743c59b) Merge remote-tracking branch 'origin' into litellm_ui_logs_filter_2 — _@yuneng-jiang_
- [`8695171`](https://github.com/BerriAI/litellm/commit/869517162cc48eb96238b287adc7388bc7382ed1) Merge pull request #23787 from BerriAI/litellm_migrate-default-user-settings-antd — _@ryan-crabbe_
- [`5befc02`](https://github.com/BerriAI/litellm/commit/5befc025d8ebb41b5a7914e732ab862e8e05b0e4) chore(ui): use antd danger prop instead of tailwind for Remove button — _@ryan-crabbe_
- [`d58b0a9`](https://github.com/BerriAI/litellm/commit/d58b0a9e06be2b5b285a280d1c9f247a8fee472e) fix: clear oauth2_flow when client_credentials set without token_url — _@joereyna_
- [`2d98b49`](https://github.com/BerriAI/litellm/commit/2d98b49f0eda558c6ee33e11a50e5b97d24e31ef) Merge pull request #23781 from BerriAI/litellm_key_admin_privilege_escalation_fix — _@yuneng-jiang_
- [`55c7ba9`](https://github.com/BerriAI/litellm/commit/55c7ba94e617d3dedf75dbbc7bea283054e467ce) Update litellm/proxy/management_endpoints/key_management_endpoints.py — _@yuneng-jiang_
- [`278c9ba`](https://github.com/BerriAI/litellm/commit/278c9babc6ff75d7f0301b5b7f02afc266557d0b) [Infra] Merging RC Branch with Main (#23786) — _@yuneng-jiang_
- [`92f830e`](https://github.com/BerriAI/litellm/commit/92f830ebea028e5157034647dfbb4638f5c6a63e) fix: top navbar issue — _@Arindam200_
- [`bc8eba3`](https://github.com/BerriAI/litellm/commit/bc8eba34091e164acfd73840f08836a9b10c49e6) Update sidebar links for A2A Agent Gateway and Model Context Protocol documentation — _@Arindam200_
- [`7b5a6f3`](https://github.com/BerriAI/litellm/commit/7b5a6f35c4d147755645f6d38e90befda7df3b8d) Update sidebar and documentation for Guardrail Providers — _@Arindam200_
- [`016667b`](https://github.com/BerriAI/litellm/commit/016667b2fab1b15340d6a55c29675fd1b57779da) chore(ui): migrate DefaultUserSettings buttons from Tremor to antd — _@ryan-crabbe_
- [`bc810f9`](https://github.com/BerriAI/litellm/commit/bc810f99e4bf6cdfd6d7831888b7d82744a8663a) [Fix] Privilege escalation: restrict /key/block, /key/unblock, and max_budget updates to admins — _@yuneng-jiang_
- [`eba8df5`](https://github.com/BerriAI/litellm/commit/eba8df523543accdc6f27c75f3a431ad41281f8a) Merge pull request #23773 from BerriAI/litellm_/reverent-panini — _@yuneng-jiang_
- [`9cf8013`](https://github.com/BerriAI/litellm/commit/9cf80132ed28de42d95eeb216ad1a72d8ee466c0) Refactor documentation structure and enhance content — _@Arindam200_
- [`57f2af8`](https://github.com/BerriAI/litellm/commit/57f2af8ea73cac2ff32c259ac989bc4829c0ae43) Included truncation comments for improved readability in markdown files. — _@Arindam200_
- [`b44e130`](https://github.com/BerriAI/litellm/commit/b44e130f8a9770bbd9041a305c14b258d9b9a1b7) Enhance documentation and sidebar structure — _@Arindam200_
- [`9d746f7`](https://github.com/BerriAI/litellm/commit/9d746f7421f296c662e09c5044cd7ed46bf3b5b9) update: ui and layout change — _@Arindam200_
- [`0c17393`](https://github.com/BerriAI/litellm/commit/0c1739390bd5b20928a0830462bd137bed1af126) fix: remove skip decorators from m2m tests now that oauth2_flow is set — _@joereyna_
- [`b0c317e`](https://github.com/BerriAI/litellm/commit/b0c317e6d06d51127ea720d8000ae4a77069c145) test: use __file__-relative sys.path for stable test imports — _@michelligabriele_
- [`23b69ee`](https://github.com/BerriAI/litellm/commit/23b69eea620ea3e605106c235350a140eea29478) fix(proxy): model-level guardrails not executing for non-streaming post_call — _@michelligabriele_
- [`5d33cc6`](https://github.com/BerriAI/litellm/commit/5d33cc66a0ba3327193f85d96b990ee27476b7fb) Add unit tests for 5 previously untested UI dashboard files — _@yuneng-jiang_
- [`4f2fe33`](https://github.com/BerriAI/litellm/commit/4f2fe3378f2a17d93416861c2cdb71cddc7ed409) Merge pull request #23666 from BerriAI/litellm_fix-default-user-perms-not-synced-with-ui — _@ryan-crabbe_
- [`aa744fb`](https://github.com/BerriAI/litellm/commit/aa744fbf80b0ea700e8ae68aa281619dc9de46f5) Merge branch 'main' into fix/mcp-rest-m2m-oauth2-flow — _@joereyna_
- [`5acceae`](https://github.com/BerriAI/litellm/commit/5acceaed32e03c2c44e6c292ebc2fad83f3c0ba9) fix(model-prices): restore gpt-4-0314 entry lost in merge conflict — _@Chesars_
- [`3dccdde`](https://github.com/BerriAI/litellm/commit/3dccdde9c81ef33c2a535aeafa2123fd7af859c0) Merge pull request #23686 from BerriAI/litellm_oss_staging_03_14_2026 — _@Sameerlite_
- [`71dfd01`](https://github.com/BerriAI/litellm/commit/71dfd0115ccb567cd6d8be3f69ef79678aa437e8) Merge pull request #23737 from BerriAI/litellm_create-character-endpoint-fixes — _@Sameerlite_
- [`1a6eb01`](https://github.com/BerriAI/litellm/commit/1a6eb016bfde2cb2db67057279866e01c16ca159) fix(critical): remove @abstractmethod from video character/edit/extension methods — _@Sameerlite_
- [`ee24abe`](https://github.com/BerriAI/litellm/commit/ee24abe86e4305ac11c1f0a8525d0d25c6d4ccfe) fix(test): skip new video character endpoints in Azure SDK initialization test — _@Sameerlite_
- [`1255382`](https://github.com/BerriAI/litellm/commit/1255382fb7f57bacfa678c15a4ec7fd88e0caec9) Fix docs — _@Sameerlite_
- [`32842a5`](https://github.com/BerriAI/litellm/commit/32842a52bc0ef06da1e8b230d8e7dfc15c67e9ce) Fix docs — _@Sameerlite_
- [`c1179b8`](https://github.com/BerriAI/litellm/commit/c1179b835dedeb6c9344c8d47501db241b4ecbf4) docs: add edit/extension curl examples and managed ID explanation — _@Sameerlite_
- [`48e0f59`](https://github.com/BerriAI/litellm/commit/48e0f5952015e82e4356e7c82de89ee6c6962d01) docs: add concise blog post on reusable video characters — _@Sameerlite_
- [`2ec4ce1`](https://github.com/BerriAI/litellm/commit/2ec4ce178c1b21eecf78a6a39a08377d928ca6aa) fix(routing): include avideo_create_character and avideo_get_character in router-first routing — _@Sameerlite_
- [`ddf62e0`](https://github.com/BerriAI/litellm/commit/ddf62e0651d493a6bde3798027dc8feb6eb4ad3e) fix(critical): add HTTP error checks before parsing response bodies in video handlers — _@Sameerlite_
- [`1ccf67d`](https://github.com/BerriAI/litellm/commit/1ccf67dd936e3f87c07ca82cba12bf37fd3a031b) fix(greptile-review): address backward compatibility and code quality issues — _@Sameerlite_
- [`b796ee9`](https://github.com/BerriAI/litellm/commit/b796ee9f03e1f66b9ce8316e6415e6ffa2b99489) Merge pull request #23530 from Sameerlite/litellm_preserve-final-streaming-attributes — _@Sameerlite_
- [`0bbdd2a`](https://github.com/BerriAI/litellm/commit/0bbdd2a249a49f93c045fe7a3397c5aedb8d3dc6) Merge pull request #23715 from BerriAI/litellm_anthropic_beta_header_order — _@Sameerlite_
- [`10d5475`](https://github.com/BerriAI/litellm/commit/10d5475ce88b737286a6f022c0d5384354e80e84) Merge pull request #23547 from Sameerlite/litellm_blog-webrtc — _@Sameerlite_
- [`ab377f3`](https://github.com/BerriAI/litellm/commit/ab377f396e125713264db3b52b2f52bba3db64d2) Merge pull request #23718 from BerriAI/litellm_fix_vertex_ai_batch — _@Sameerlite_
- [`9beec82`](https://github.com/BerriAI/litellm/commit/9beec825d485b7b789b57e5940b3b8b523a7e9ed) Merge branch 'main' into litellm_create-character-endpoint-fixes — _@Sameerlite_
- [`430f3ac`](https://github.com/BerriAI/litellm/commit/430f3ac4292b565373e8c2eb27fd91623cd0a668) Add new videos docs — _@Sameerlite_
- [`14a691f`](https://github.com/BerriAI/litellm/commit/14a691ffd541dc8c1a8b031a5f4bbda4aa0fb227) Add new videos transformation — _@Sameerlite_
- [`8dab5de`](https://github.com/BerriAI/litellm/commit/8dab5dec886fa7b6714d835b04922185c52e7e55) Add new videos endpoints routing and init — _@Sameerlite_
- [`c338892`](https://github.com/BerriAI/litellm/commit/c33889200a68c8e448b07631a00d6a48851de66a) Add new videos endpoints — _@Sameerlite_
- [`79c787b`](https://github.com/BerriAI/litellm/commit/79c787b85d4c123366f89adb8d31c2e5b5a5a529) Add new videos endpoints — _@Sameerlite_
- [`94405b6`](https://github.com/BerriAI/litellm/commit/94405b621812d9c06eaf758ca41b36ecd7b78841) fix(types): use direct FileTypes import in video schemas — _@Sameerlite_
- [`4a7ef7b`](https://github.com/BerriAI/litellm/commit/4a7ef7b1d2b407d3cbb0a8066c908540ea2c2ecc) fix(video): enforce character endpoint video MIME handling — _@Sameerlite_
- [`61519d6`](https://github.com/BerriAI/litellm/commit/61519d6c6505eea7ffdfd262229a8dce61d8afdc) fix(video): decode managed character ids robustly — _@Sameerlite_
- [`58e74a6`](https://github.com/BerriAI/litellm/commit/58e74a631c9d904de29282206af7d68f392b8e12) Merge pull request #23721 from BerriAI/litellm_ci_optimize — _@yuneng-jiang_
- [`8f56ddb`](https://github.com/BerriAI/litellm/commit/8f56ddb9c6914755b92ced83b4b9393087974c97) Merge remote main into litellm_ci_optimize — _@yuneng-jiang_
- [`9cec81a`](https://github.com/BerriAI/litellm/commit/9cec81a08740a37c4417dc0478a7dd5d08ad21f9) [Fix] Revert proxy unit test groupings to prevent xdist state pollution — _@yuneng-jiang_
- [`ccfe4b5`](https://github.com/BerriAI/litellm/commit/ccfe4b57d59640c2ad41ff1ed20f7dcc0b1dd509) [Fix] Restore unconditional importlib.reload for llm_translation conftest — _@yuneng-jiang_
- [`2372427`](https://github.com/BerriAI/litellm/commit/2372427dbc16a9391b493d08ac999263b141f052) [Fix] Remove xdist from caching_unit_tests to fix GCS cache test failures — _@yuneng-jiang_
- [`f434cdb`](https://github.com/BerriAI/litellm/commit/f434cdbdcee7b2f279407a2be2d06a3acc6b683c) [Fix] Remove flush_cache from llm_translation conftest to prevent connection churn — _@yuneng-jiang_
- [`acfaea9`](https://github.com/BerriAI/litellm/commit/acfaea9d259a75945da2e6df623f1603b262c712) [Fix] Reset api_base/api_key in xdist conftest to prevent cross-test leakage — _@yuneng-jiang_
- [`22b333c`](https://github.com/BerriAI/litellm/commit/22b333cae6134babbf53b48a31e9332d1a4905a8) Fix downloading vertex ai files — _@Sameerlite_
- [`5db6aef`](https://github.com/BerriAI/litellm/commit/5db6aef8344dee6a43d2fc3fd3716d82d6471523) [Fix] Restore xdist test isolation: capture true defaults and poll cooldowns — _@yuneng-jiang_
- [`cd37ee1`](https://github.com/BerriAI/litellm/commit/cd37ee1459703ada88f3716f53a6e7cf4f4f4ff6) fix: make db migration failure exit opt-in via --enforce_prisma_migration_check (#23675) — _@Krish Dholakia_
- [`ca4329a`](https://github.com/BerriAI/litellm/commit/ca4329aeb9d0462363a2a6c1e4e951a9d05dfc6a) Root cause fix - migrate all logging update to use 1 function - for centralized kwarg updates (#23659) — _@Krish Dholakia_
- [`96183e8`](https://github.com/BerriAI/litellm/commit/96183e8bdeea042720d39ad9e0126dc24296f841) [Fix] Drop --no-deps from aurelio_sdk in guardrails and enterprise tests — _@yuneng-jiang_
- [`f68a9be`](https://github.com/BerriAI/litellm/commit/f68a9be04d99187bff267947f805aba229a5859a) [Infra] Optimize CI: migrate litellm_security_tests from machine to docker xlarge — _@yuneng-jiang_
- [`eba54ba`](https://github.com/BerriAI/litellm/commit/eba54bae11cc4ae7ecfb2cc1c92e38dc5ce7753b) [Fix] Add aurelio_sdk --no-deps alongside semantic_router in guardrails and enterprise tests — _@yuneng-jiang_
- [`b4f7d11`](https://github.com/BerriAI/litellm/commit/b4f7d11a829c3223f5371a1dccb2fe3272ff5c7a) Revert "Fix xdist test isolation: capture true defaults and poll instead of sleep" — _@yuneng-jiang_
- [`ae1e827`](https://github.com/BerriAI/litellm/commit/ae1e827319d2bb59c51dd7da3af8b3e72428345e) [Infra] Optimize CI: add xdist to caching tests, drop Docker CLI installs, reduce verbosity — _@yuneng-jiang_
- [`f07301a`](https://github.com/BerriAI/litellm/commit/f07301a5184592ed82a3707b34b180417d9d272f) [Infra] Optimize CI: right-size resource classes, drop unused coverage, increase xdist workers — _@yuneng-jiang_
- [`9711e3a`](https://github.com/BerriAI/litellm/commit/9711e3adfe680724312c00aebfdfa32146d9c5d3) Fix xdist test isolation: capture true defaults and poll instead of sleep — _@yuneng-jiang_
- [`65b3335`](https://github.com/BerriAI/litellm/commit/65b3335735db5af63c114c4e164cc7c8f145e70f) [Infra] Use uv for requirements.txt installs across 22 CI jobs — _@yuneng-jiang_
- [`1a8f8c6`](https://github.com/BerriAI/litellm/commit/1a8f8c6d5255b7932da5e4d40ba29f365e8d5b43) Refactor: Filtering beta header after transformation — _@Sameerlite_
- [`379c395`](https://github.com/BerriAI/litellm/commit/379c3952f4846185047d3b72aba6bba7ebbc9107) [Fix] Use uv for requirements.txt only, pip for test deps with conflicting pins — _@yuneng-jiang_
- [`26207bb`](https://github.com/BerriAI/litellm/commit/26207bb7bec02df3c459fe72b20bb863c9601796) [Infra] Speed up mapped test jobs: uv installs, site-packages caching, drop unused coverage — _@yuneng-jiang_
- [`1a00dd4`](https://github.com/BerriAI/litellm/commit/1a00dd4dbbc6f259181b0ee3d08d5aaaeb440bf9) Fix router test isolation for xdist and rebalance proxy unit tests — _@yuneng-jiang_
- [`74e57bd`](https://github.com/BerriAI/litellm/commit/74e57bdd273742cdef6e3e04f271bb4644355520) Optimize CI test jobs: increase xdist workers, drop coverage, add caching — _@yuneng-jiang_
- [`c1efbd3`](https://github.com/BerriAI/litellm/commit/c1efbd3c8a961343c3ca284b53d07a49fe49be60) [Fix] Drop httpx and opentelemetry pins from local_testing batched installs — _@yuneng-jiang_
- [`59f0db0`](https://github.com/BerriAI/litellm/commit/59f0db0538b9241647966d8f5609a7efe6297723) [Fix] Remove anyio==4.2.0 pin from local_testing batched installs — _@yuneng-jiang_
- [`f3cc292`](https://github.com/BerriAI/litellm/commit/f3cc292dafa894a5ade2c0440e632d89fcba3654) [Infra] Speed up CI: batch pip installs and fix pytest -n parallelism — _@yuneng-jiang_
- [`09271a4`](https://github.com/BerriAI/litellm/commit/09271a4dc5e1e8ed8ee3c3e5b12d0ed419301cba) Mark test_redis_cache_completion_stream as flaky with retries — _@yuneng-jiang_
- [`9d06f53`](https://github.com/BerriAI/litellm/commit/9d06f535445a5c87264c3281fe4533e1259b5048) Fix flaky test_claude_agent_sdk_streaming: add retry and stronger prompt — _@yuneng-jiang_
- [`cc027a2`](https://github.com/BerriAI/litellm/commit/cc027a2b904cd83e186d86b4e08eaaa383426d92) Fix flaky test_langsmith_queue_logging: poll instead of fixed sleep — _@yuneng-jiang_
- [`9b77524`](https://github.com/BerriAI/litellm/commit/9b77524354a42824bbc30316a4264c4875369feb) Fix logging_testing: capture true defaults at conftest import time — _@yuneng-jiang_
- [`27d0ffe`](https://github.com/BerriAI/litellm/commit/27d0ffea44a90119715937fa882c662a91df036a) Fix flaky AWS secret manager tests by skipping on ThrottlingException — _@yuneng-jiang_
- [`13a4659`](https://github.com/BerriAI/litellm/commit/13a46598e71fac39cd71f3e34c80c444de634c2f) Fix logging_testing: clear _in_memory_loggers and add missing globals — _@yuneng-jiang_
- [`f2edc52`](https://github.com/BerriAI/litellm/commit/f2edc52cef08c29aceded0d110dd353023b2bb9e) Fix flaky batch tests: mock vertex auth and skip on DNS failure — _@yuneng-jiang_
- [`92ad90d`](https://github.com/BerriAI/litellm/commit/92ad90de2aa404bf978b7e89aee7690fc67896f1) Fix logging_testing: expand save/restore to cover redaction and other globals — _@yuneng-jiang_
- [`19e8a16`](https://github.com/BerriAI/litellm/commit/19e8a16cce5591cc42d908dc0e2a4f960d884dc1) Optimize logging_testing CI: suppress DEBUG logs, fix xdist isolation — _@yuneng-jiang_
- [`4fc0975`](https://github.com/BerriAI/litellm/commit/4fc0975d2292e5c9b29acdc06f2691589c009a34) Fix flaky e2e batch test: set batch_processed=True on completion in retrieve_batch — _@yuneng-jiang_
- [`3d45ba3`](https://github.com/BerriAI/litellm/commit/3d45ba3edf85b4c400041fa05b9fb64f5f5a1398) Fix flaky vertex_ai overhead test by mocking auth and HTTP calls — _@yuneng-jiang_
- [`4030a8b`](https://github.com/BerriAI/litellm/commit/4030a8b2cd8c103269b524baa5ebd6e619ca62d7) Fix flaky tests: anthropic error_msg state leak and vertex llama 404 — _@yuneng-jiang_
- [`beee329`](https://github.com/BerriAI/litellm/commit/beee329b269a740d79e8f82a129ff04995d770fd) Fix flaky test_gemini_image_generation_async by removing non-deterministic content assertion — _@yuneng-jiang_
- [`0b9a242`](https://github.com/BerriAI/litellm/commit/0b9a24202e59db1e23d9f82d958df7e3e3dd20ab) Fix flaky vertex pass-through spend test by polling instead of fixed sleep — _@yuneng-jiang_
- [`40edb16`](https://github.com/BerriAI/litellm/commit/40edb16fb9991b326e6e02ddf7ddfcfd03b21091) Fix test isolation: run eager tiktoken tests in subprocesses — _@yuneng-jiang_
- [`ec537dd`](https://github.com/BerriAI/litellm/commit/ec537dd9737c480db5d5dba83525807887bce4d0) Add -n 2 parallelism to 8 medium jobs running serial tests — _@yuneng-jiang_
- [`670f8a1`](https://github.com/BerriAI/litellm/commit/670f8a1dd1802010ae27d1db536f0bd2b62cf625) Fix flaky test_caching_with_ttl by using distinct mock responses — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
