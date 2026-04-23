# BerriAI/litellm — 2026-02-24

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-02-23T23:59:59.000Z → 2026-02-24T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy commit-only day on `main` (no merged PRs, issues, or releases in the window) dominated by proxy performance tuning, spend-tracking hardening, and a day-0 model add.

The headline change is **day-0 support for OpenAI's GPT-5.3 Codex** (PR #22035, merged via `5219b1d`), with model added to the cost map (`1c48d8f`) and v1.81.12-stable release notes redirected to `v1.81.12-stable.1` (#22036). Version was bumped 1.81.14 → 1.81.15 (`370dfdc`).

A sustained **proxy perf push** landed several merges worth tracking if you care about latency/throughput:
- `perf: use cached _safe_get_request_headers` (#21430) — replaces repeated `dict(request.headers)` calls across `user_api_key_auth.py` and `litellm_pre_call_utils.py`.
- `perf: optimize is_model_o_series_model with startswith` (#21690) and `skip throwaway Usage() construction in ModelResponse.__init__` (#21611).
- Unmerged but committed: pipelining 7 RPUSH + 7 LPOP into 2 Redis calls in the spend update cycle (`98b4964`), and batching 11 `create_task()` calls into 1 in `update_database()` (`86ec2fb`).

**Spend tracking** got a dedicated infra pass (#22029): warning/error logging throughout the lifecycle replacing silent `except: pass` paths, plus an LPOP pipeline error-check fix and an org-spend `ServiceType` correction (`68a30a3`). Related: aggregation never triggering with default queue presets was fixed (#21963).

Notable bug fixes merged:
- `x-litellm-overhead-duration-ms` header now emitted for streaming via `FallbackStreamWrapper` (#22027).
- Bedrock rerank now respects `timeout` (#22021); OpenAI image generation propagates `extra_headers` (`a1c939b`); aiohttp only sets `enable_cleanup_closed` when needed (#21897); Anthropic `tool_use` IDs sanitized (#21964); Ollama `get_model_info` threads `api_base` (#21970).
- **Revert**: atomic RPM rate-limiting (#21957) was merged then reverted same-day via #22001 — worth watching if you depend on model RPM limits.

New features: opt-in `stream` label on `litellm_proxy_total_requests_metric` Prometheus counter (#22023), realtime voice-transcription guardrail hook (#21976), `health_check_concurrency` to cap concurrent health checks (#20584), and a CI duplicate-issue auto-close bot (`db3d61f`). Security: OS/NPM CVE fixes merged (#22008). UI work centered on extracting/testing onboarding components (#21980, #21985) and an MCP UI transport-type fix (#22005).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`26e5482`](https://github.com/BerriAI/litellm/commit/26e5482abb352b16dd57444705a6e44ef206d3d8) address greptile review feedback (greploop iteration 2) — _@yuneng-jiang_
- [`784af16`](https://github.com/BerriAI/litellm/commit/784af16cb4064fcd27f407a4b8e268045652ba62) address greptile review feedback (greploop iteration 1) — _@yuneng-jiang_
- [`b3bb744`](https://github.com/BerriAI/litellm/commit/b3bb744aa4d0fa026e93f89ad6a11ce75b86dbdb) [Test] Add unit tests for router_settings components — _@yuneng-jiang_
- [`8020276`](https://github.com/BerriAI/litellm/commit/8020276711f6ee97adf68b44121b77b6fe79b3af) Merge pull request #21430 from BerriAI/litellm_perf_headers_caching — _@ryan-crabbe_
- [`9971b67`](https://github.com/BerriAI/litellm/commit/9971b67587f8c376923995ee1260429195458124) fix: convert remaining dict(request.headers) to _safe_get_request_headers — _@ryan-crabbe_
- [`53c10b0`](https://github.com/BerriAI/litellm/commit/53c10b0b643d498c3915750ec63fa453df20734c) Merge origin/main and address Greptile review feedback — _@ryan-crabbe_
- [`e9a45bf`](https://github.com/BerriAI/litellm/commit/e9a45bf75b9f8fde784befaf82c53cf3b09bb1e0) Merge pull request #20032 from ryan-crabbe/fix/mcp-server-unreachable-error-handling — _@ryan-crabbe_
- [`56a5070`](https://github.com/BerriAI/litellm/commit/56a507073bca049bbec178343d9e43f85f1ba389) Merge pull request #21690 from BerriAI/litellm_perf_o_series_short_circuit — _@ryan-crabbe_
- [`253792a`](https://github.com/BerriAI/litellm/commit/253792a1d187bb9df0bbf7253902fb38b58d3246) Merge pull request #21611 from BerriAI/litellm_perf_skip_throwaway_usage — _@ryan-crabbe_
- [`6a0dd0a`](https://github.com/BerriAI/litellm/commit/6a0dd0a45fafd4ea7ae2fffbed286213df99bb26) Merge remote-tracking branch 'origin/main' into litellm_perf_skip_throwaway_usage — _@ryan-crabbe_
- [`68a30a3`](https://github.com/BerriAI/litellm/commit/68a30a39e68d631959920f7c658baaf8bea2df06) fix(proxy): add LPOP pipeline error checking and fix org spend ServiceType — _@ryan-crabbe_
- [`80ebe72`](https://github.com/BerriAI/litellm/commit/80ebe722d9cf3633c90c01087d64606b85af9910) Merge pull request #22029 from BerriAI/litellm_spend_tracking_logging — _@yuneng-jiang_
- [`2cabbcc`](https://github.com/BerriAI/litellm/commit/2cabbccf6f8244348dc908e2a2d0a069b3313001) address greptile review feedback (greploop iteration 3) — _@yuneng-jiang_
- [`98b4964`](https://github.com/BerriAI/litellm/commit/98b496433086b5a56f87e610c0349607b7553f55) perf(proxy): pipeline Redis RPUSH/LPOP in spend update cycle — _@ryan-crabbe_
- [`8b56e1d`](https://github.com/BerriAI/litellm/commit/8b56e1d969385b066f596400e084e754e438fbe5) trigger review — _@yuneng-jiang_
- [`33719e6`](https://github.com/BerriAI/litellm/commit/33719e6b38d830c5f63bf6866fd88bb996eebcca) docs: update v1.81.12-stable release notes to point to v1.81.12-stable.1 (#22036) — _@ishaan-jaff_
- [`70ef4d0`](https://github.com/BerriAI/litellm/commit/70ef4d0d69e3915df64c847582e5b0d60ab1fae3) address greptile review feedback (greploop iteration 2) — _@yuneng-jiang_
- [`5219b1d`](https://github.com/BerriAI/litellm/commit/5219b1d0c3580df37b9f6f4c060110a27e856837) Merge pull request #22035 from BerriAI/litellm_openai_codex_day_0_codex_5.3 — _@Sameerlite_
- [`235d60e`](https://github.com/BerriAI/litellm/commit/235d60eb885210aca0d981a63ccfe708caa8ed81) address greptile review feedback (greploop iteration 1) — _@yuneng-jiang_
- [`c343bff`](https://github.com/BerriAI/litellm/commit/c343bfffdaa3e34e9324733d897a8e4db79ac9ec) fix(router): emit x-litellm-overhead-duration-ms header for streaming requests (#22027) — _@ishaan-jaff_
- [`e44b9b6`](https://github.com/BerriAI/litellm/commit/e44b9b6b3584710a948365268d64676e2177adab) feat(prometheus): add opt-in stream label to litellm_proxy_total_requests_metric (#22023) — _@ishaan-jaff_
- [`5d291c7`](https://github.com/BerriAI/litellm/commit/5d291c739fbc493e3d2dae593add5ba6eb221c0a) Fix phase docs link — _@Sameerlite_
- [`74abf0c`](https://github.com/BerriAI/litellm/commit/74abf0c8e6b6144032dc386972626b2b6ee22a98) Fix phase docs link — _@Sameerlite_
- [`db3d61f`](https://github.com/BerriAI/litellm/commit/db3d61f43372cd7cc18ad8c557321b5e9e59f19d) feat(ci): add duplicate issue detection and auto-close bot — _@jquinter_
- [`aded14a`](https://github.com/BerriAI/litellm/commit/aded14a55ac973c91559e49fcef4d267cbc17229) Fix release version for gpt-5.3-codex — _@Sameerlite_
- [`4c5963f`](https://github.com/BerriAI/litellm/commit/4c5963fdb90fd33b64cb4687a8ce8c41686810e7) test: exercise production deepcopy path in agent payload test — _@ryan-crabbe_
- [`c43a8dc`](https://github.com/BerriAI/litellm/commit/c43a8dc84257f07ebbd2211a9f30e3fa8ddb92e5) feat(proxy): add warning/error level logging throughout spend tracking lifecycle — _@yuneng-jiang_
- [`4321bc9`](https://github.com/BerriAI/litellm/commit/4321bc928594429bf67a903ac5a124dfad8be3ed) Merge pull request #21985 from BerriAI/litellm_ui_testing_coverage_00 — _@yuneng-jiang_
- [`1c48d8f`](https://github.com/BerriAI/litellm/commit/1c48d8fda7512b386558044cec5bfbe18e22ee5c) Add gpt-5.3-codex in model cost map — _@Sameerlite_
- [`86ec2fb`](https://github.com/BerriAI/litellm/commit/86ec2fbf843c8e2bba0704f337e5b26423615bc4) perf(proxy): batch 11 create_task() calls into 1 in update_database() — _@ryan-crabbe_
- [`a5b4dfe`](https://github.com/BerriAI/litellm/commit/a5b4dfe6bee59f49657695d872cd48f007625138) test(image_generation): add tests for extra_headers propagation — _@ZeroClover_
- [`5e9f24f`](https://github.com/BerriAI/litellm/commit/5e9f24f74c59d0272b050a17d0b34ae82646e9fb) fix(bedrock): pass timeout param to bedrock rerank http client (#22021) — _@ishaan-jaff_
- [`a1c939b`](https://github.com/BerriAI/litellm/commit/a1c939b2ef74e72c74981d49e230b35957bbc4a9) fix(image_generation): propagate extra_headers to OpenAI image generation — _@ZeroClover_
- [`4652c73`](https://github.com/BerriAI/litellm/commit/4652c73259e2e3b1d3cadea360f2bc5f4b27d1eb) feat(proxy): limit concurrent health checks with health_check_concurrency (#20584) — _@MarshHawk_
- [`1fa0aad`](https://github.com/BerriAI/litellm/commit/1fa0aad3f2b1ee27d7ba561dd0863b7dcf07c78c) Merge pull request #22008 from BerriAI/litellm_fix_CVE — _@Harshit28j_
- [`132e2ed`](https://github.com/BerriAI/litellm/commit/132e2ed671853e67c778d11dfd5777b4b8bdf3e2) Merge branch 'main' of https://github.com/BerriAI/litellm into litellm_fix_CVE — _@Harshit28j_
- [`3e6c10a`](https://github.com/BerriAI/litellm/commit/3e6c10a0710e7c64f27f5875bbf1a30702b4f143) security: fix critical/high CVEs in OS-level libs and NPM transitive — _@Harshit28j_
- [`a37cd0f`](https://github.com/BerriAI/litellm/commit/a37cd0fe7cc3e1a6ecfc27c708aa22004dd842a9) Merge pull request #22005 from BerriAI/litellm_mcp_server_ui_fix — _@Sameerlite_
- [`c17caf4`](https://github.com/BerriAI/litellm/commit/c17caf4cc732918fa060bd8457217b4d04c19a3f) Merge pull request #21992 from BerriAI/litellm_fix_oauth_mcp — _@Sameerlite_
- [`6531d01`](https://github.com/BerriAI/litellm/commit/6531d01959774c3dcdad9e2eaa27712c586fa8e0) Merge pull request #21982 from BerriAI/litellm_fix_pat_token_mcp — _@Sameerlite_
- [`7a8499e`](https://github.com/BerriAI/litellm/commit/7a8499e89f865e27a305af676c139ef0a127fd0d) Merge pull request #21940 from BerriAI/litellm_oss_staging_02_23_2026 — _@Sameerlite_
- [`b38059b`](https://github.com/BerriAI/litellm/commit/b38059b014910a9b0ed22295d08661ab27c41b1e) Merge branch 'main' into litellm_oss_staging_02_23_2026 — _@Sameerlite_
- [`816f905`](https://github.com/BerriAI/litellm/commit/816f9052ff6444657bf6acf671a2eea49af58d1e) Fix: Transport Type for OpenAPI Spec on UI — _@Sameerlite_
- [`61d35ca`](https://github.com/BerriAI/litellm/commit/61d35cac3476cd59d41a289c9393c9a13424c931) fix: use atomic increment-first pattern for model RPM rate limiting — _@jquinter_
- [`d0330aa`](https://github.com/BerriAI/litellm/commit/d0330aa4e3a6394e21bdc1856e6a70da450658da) Merge pull request #22001 from jquinter/revert/pr-21957 — _@jquinter_
- [`737a04b`](https://github.com/BerriAI/litellm/commit/737a04b3ea6fc709c1421307d593b18c51486b6e) Revert "Merge pull request #21957 from jquinter/fix/flaky-rpm-limit-test" — _@jquinter_
- [`77453ad`](https://github.com/BerriAI/litellm/commit/77453ada2abd8b50cdfea714eeea61c9d9ef8f16) Merge pull request #21957 from jquinter/fix/flaky-rpm-limit-test — _@jquinter_
- [`ac720de`](https://github.com/BerriAI/litellm/commit/ac720defc3d7ae338299833055474dedfe667387) Add documentation related to phase — _@Sameerlite_
- [`ef67b6b`](https://github.com/BerriAI/litellm/commit/ef67b6b53363ea064deba1914568044b54020efa) Add support for phase param — _@Sameerlite_
- [`7622f26`](https://github.com/BerriAI/litellm/commit/7622f26918934e94fca532d716a157211d8dca27) Merge pull request #21997 from BerriAI/doc_fix_remove_harcoded_api_key — _@shivamrawat1_
- [`c86b174`](https://github.com/BerriAI/litellm/commit/c86b1746422b60c6a289abd83a03876973887066) replaced with mock key — _@shivam_
- [`12f37ce`](https://github.com/BerriAI/litellm/commit/12f37cea4329f28c4fb5091848fd5afe16dc9e57) fix: Missing OAuth session state. Please retry — _@Sameerlite_
- [`c119adb`](https://github.com/BerriAI/litellm/commit/c119adb6dccedc1da78b30d91fa552e174e88191) [Fix] UI - Virtual Keys: restrict Edit Settings button to key owners — _@yuneng-jiang_
- [`46ed7fc`](https://github.com/BerriAI/litellm/commit/46ed7fc70640e4874e6a95f456695251f39f5518) Add Additonal header field on UI for testing passthrough — _@Sameerlite_
- [`62d5d96`](https://github.com/BerriAI/litellm/commit/62d5d96e124afda9edfdd86f4ac71583facfba59) Fix: skip health check for MCP integration with passthrough token authentication — _@Sameerlite_
- [`f55fe7a`](https://github.com/BerriAI/litellm/commit/f55fe7afdc65b1d96462cd920a28a0e14748b722) Merge pull request #21980 from BerriAI/litellm_ui_testing_coverage_00 — _@yuneng-jiang_
- [`36f7722`](https://github.com/BerriAI/litellm/commit/36f7722b0fce6fcc18b7a1bb72ad6e0c2a9bdb95) fix: add QueryClientProvider, remove stale file, use should naming in tests — _@yuneng-jiang_
- [`a349149`](https://github.com/BerriAI/litellm/commit/a3491490f9bc3541af11e470ce5929d9cd1fbabb) refactor onboarding — _@yuneng-jiang_
- [`02a5398`](https://github.com/BerriAI/litellm/commit/02a53989cf43c384133b6380f1182a4238b9c20e) fix: narrow onSubmit values and use semantic loading assertion — _@yuneng-jiang_
- [`0873494`](https://github.com/BerriAI/litellm/commit/08734942703550f2903aa6a8efb7b738b2c78d73) feat: extract OnboardingFormBody component with tests — _@yuneng-jiang_
- [`d0bcafa`](https://github.com/BerriAI/litellm/commit/d0bcafacf0c14fa67f3ebf878b627143fce663ad) fix(aiohttp): only set enable_cleanup_closed when required (#21897) — _@SolitudePy_
- [`a347cf0`](https://github.com/BerriAI/litellm/commit/a347cf0a332ceb52ef579084bf0eae15999268e3) feat: extract OnboardingErrorView component with tests — _@yuneng-jiang_
- [`a3d4a87`](https://github.com/BerriAI/litellm/commit/a3d4a8752f2846639e7eeb9687506642cd80f473) feat: extract OnboardingLoadingView component with tests — _@yuneng-jiang_
- [`c79d94f`](https://github.com/BerriAI/litellm/commit/c79d94fd167037f523ad4e70a9b52c08972f6bb3) feat(realtime): guardrail hook for voice transcription (#21976) — _@ishaan-jaff_
- [`22fb39a`](https://github.com/BerriAI/litellm/commit/22fb39ab1e474f12fd204a922cc75fbb19fe73ab) feat(content-filter): add employment discrimination topic blockers for 5 protected classes (#21962) — _@ishaan-jaff_
- [`b8dddab`](https://github.com/BerriAI/litellm/commit/b8dddab3111f1c1648f83e3488b353329cfede4f) feat: add groq/openai/gpt-oss-safeguard-20b model pricing (#21951) — _@nicolopignatelli_
- [`dd5b856`](https://github.com/BerriAI/litellm/commit/dd5b85697a5eddad00a84b221a15a0608bbd5c31) fix(anthropic): sanitize tool_use IDs in convert_to_anthropic_tool_invoke (#21964) — _@Canvinus_
- [`9495f4e`](https://github.com/BerriAI/litellm/commit/9495f4e941bbe8e686b92e2622d657c878e1f916) fix(ollama): thread api_base to get_model_info + graceful fallback (#21970) — _@Chesars_
- [`cd488df`](https://github.com/BerriAI/litellm/commit/cd488df70aaaa0199a47a9839531969ccf7b71aa) Merge pull request #21978 from BerriAI/litellm_cicd_24_02 — _@Sameerlite_
- [`044639f`](https://github.com/BerriAI/litellm/commit/044639fdda3582ed28b811e018a9e0b3fcd0a2d9) Fix replicate to foreign server without PDPA — _@Sameerlite_
- [`4dcec49`](https://github.com/BerriAI/litellm/commit/4dcec49070e205d725e782e94c87f15484c04d62) refactor(policies): update guardrail identifiers for Singapore compliance (#21974) — _@ron-zhong_
- [`470444f`](https://github.com/BerriAI/litellm/commit/470444febc8ba4b2bec7a49d08c374d3a9e81f58) Revert "fix: team assignment fails for keys with special model names (#21919)" (#21977) — _@Krish Dholakia_
- [`c5819b5`](https://github.com/BerriAI/litellm/commit/c5819b5ede0d90abbfc3b7e444a378703c9abce9) fix: team assignment fails for keys with special model names (#21919) — _@AtharvaJaiswal005_
- [`289e603`](https://github.com/BerriAI/litellm/commit/289e6031bce7219975c83cdc984169fa9f846a27) fix: apply custom video pricing from deployment model_info (#21923) — _@AtharvaJaiswal005_
- [`a15c4db`](https://github.com/BerriAI/litellm/commit/a15c4db499662b0b72c6223f019d7810889a69d4) Merge pull request #21949 from BerriAI/fix/presidio-streaming-false-positives — _@Harshit28j_
- [`10a3304`](https://github.com/BerriAI/litellm/commit/10a3304e6a55d4f3b187668aa46127eb0de583c2) refactor: simplify onboarding page to use OnboardingForm component — _@yuneng-jiang_
- [`1696c09`](https://github.com/BerriAI/litellm/commit/1696c094bc015022096213dc93e05730c13f77ee) Merge pull request #21975 from BerriAI/litellm_cicd_24_02 — _@Sameerlite_
- [`842d1cd`](https://github.com/BerriAI/litellm/commit/842d1cddf9badfda5a0e5c28add910f3e4273496) Fix content filter tests — _@Sameerlite_
- [`e486f8a`](https://github.com/BerriAI/litellm/commit/e486f8a4085bb20f0f8f112331c8b84cbd644d6c) Merge pull request #21972 from BerriAI/litellm_cicd_24_02 — _@Sameerlite_
- [`370dfdc`](https://github.com/BerriAI/litellm/commit/370dfdc514fb7cc75f2c775bf05764ecc72934c2) bump: version 1.81.14 → 1.81.15 — _@Sameerlite_
- [`3b2ff5b`](https://github.com/BerriAI/litellm/commit/3b2ff5b06a6829df63a452a4c23ca1ce54698b10) Fix cicd code quality — _@Sameerlite_
- [`8288e35`](https://github.com/BerriAI/litellm/commit/8288e351ef203bb4ea28577aaf7b7374771697e5) Fix: test_sentence[dt_8] — _@Sameerlite_
- [`e5c907d`](https://github.com/BerriAI/litellm/commit/e5c907dc93f32066fa28b9d0845feffca2763634) fix test case and req changes — _@Harshit28j_
- [`0beada9`](https://github.com/BerriAI/litellm/commit/0beada96c141c2ecb9fe0d366674537292709952) Fix code qa — _@Sameerlite_
- [`d599c77`](https://github.com/BerriAI/litellm/commit/d599c77311a24f91f1bbfb285010ffb19ce525bb) Update poetry — _@Sameerlite_
- [`7df02e9`](https://github.com/BerriAI/litellm/commit/7df02e968a343591d467ec9ceaabb1fe9aa0ff23) add package files — _@Sameerlite_
- [`8714b9e`](https://github.com/BerriAI/litellm/commit/8714b9ee8f4f1dd829f69c9cae1e34389ab53258) bump: version 0.4.46 → 0.4.47 — _@Sameerlite_
- [`3204521`](https://github.com/BerriAI/litellm/commit/32045217a660c018f01938d38c5d3bee714fff56) refactor: simplify onboarding page to use OnboardingForm component — _@yuneng-jiang_
- [`1f8d23e`](https://github.com/BerriAI/litellm/commit/1f8d23ec5bffe560f17518ef06837de5c1ed90cd) fix: set cookie path and add error feedback on claim failure — _@yuneng-jiang_
- [`2bc6dc5`](https://github.com/BerriAI/litellm/commit/2bc6dc5cad4c103a8caa93be4c9cf7410a50488e) fix: sync email field value into AntD Form after credentials load — _@yuneng-jiang_
- [`884904c`](https://github.com/BerriAI/litellm/commit/884904c6d1134ecf410b9ffa1087ef3fcf39a943) feat: add OnboardingForm component with variant prop — _@yuneng-jiang_
- [`ba0ed49`](https://github.com/BerriAI/litellm/commit/ba0ed492c40a486bf7cda9af5f7c52441a18a14e) fix: improve type safety and defensive guard in useOnboarding hook — _@yuneng-jiang_
- [`f4303f5`](https://github.com/BerriAI/litellm/commit/f4303f5e22fcc82063f3541fcfdc55c590a20306) feat: add useOnboarding hook with query and mutation — _@yuneng-jiang_
- [`8f46a69`](https://github.com/BerriAI/litellm/commit/8f46a6917b47acf6d5b2f2b93048fcf62174292e) Merge pull request #21968 from BerriAI/litellm_ui_testing_coverage_00 — _@yuneng-jiang_
- [`715e134`](https://github.com/BerriAI/litellm/commit/715e134a662585af8baec21146ae6732c70e6f59) adding testing coverage + fixing flaky tests — _@yuneng-jiang_
- [`a8456a2`](https://github.com/BerriAI/litellm/commit/a8456a2a30f0c782689a98e5891c931387d40066) Merge pull request #21963 from BerriAI/litellm_queue_presets — _@yuneng-jiang_
- [`eed2e4e`](https://github.com/BerriAI/litellm/commit/eed2e4ee5f57db81dc23c41882f375190f51f9db) fix(videos): pass api_key from litellm_params to video remix handlers (#21965) — _@nielei3_
- [`a749598`](https://github.com/BerriAI/litellm/commit/a74959869366cf2c371cf7da5c5b1d60387b574d) Merge pull request #21859 from BerriAI/litellm_blog_dropdown — _@yuneng-jiang_
- [`a9c44d8`](https://github.com/BerriAI/litellm/commit/a9c44d8530b27743d28074883946bcd957581cb6) adjust default aggregation threshold — _@yuneng-jiang_
- [`9f3fc49`](https://github.com/BerriAI/litellm/commit/9f3fc492c22ddd5b17b3973e406bf4775d71ea20) adding tests — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
