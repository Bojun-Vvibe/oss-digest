# BerriAI/litellm — 2026-02-23

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-02-22T23:59:59.000Z → 2026-02-23T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a new **Guardrail Monitor** feature (#21944) that lets operators measure guardrail reliability in production, with fixes to the log viewer and per-guardrail log rendering. Alongside it, two new guardrail integrations landed: **Singapore PDPA + MAS AI Risk Management policy templates** (#21948) and a **Noma guardrails v2** custom-guardrail integration (#21400). A Presidio streaming false-positive fix (commit af9ad68) rounds out guardrail work.

Reliability and correctness got serious attention. A racy check-then-increment in model RPM rate limiting was replaced with an **atomic increment-first pattern** (commit 75d9f4d) — worth reading if you rely on RPM caps under concurrency. The proxy now **recovers from prisma-query-engine zombie processes** (#21899), and the spendlog deletion cron job was optimized (commit c6f60be). A v1.81.14 release-notes update adds a performance & reliability section (#21950).

Provider/model coverage expanded: **Priority PayGo cost tracking for Gemini/Vertex AI** (#21909), **Bedrock optional regional STS endpoint for role assumption** (#21640), a **Bedrock fix to encode model ARNs for OpenAI-compatible imported models** (#21701), an **OpenAI videos `variant` parameter for content download** (#21955), and a Perplexity Responses-API refactor renaming "Agentic Research" → "Agent API" with broader parameter support (commit 5899e90). Two model-cost-map fixes also merged: an **Anthropic wildcard access bug** (#21917) and corrections for `fast` / `inference_geo` entries (#21904).

UI work in progress (not yet merged) covers a virtual-keys team table with working filters and an `accessToken` queryKey/pagination fix (commits 6d98622, bc99e38, f44c36f) — useful context if you're tracking the admin UI.

Infrastructure: the **Claude Code-powered duplicate PR detection workflow was reverted** back to text-based matching (#21961), and a new **network-mock benchmarking harness** landed (#21942) with docs. Test stability fixes include sequential RPM-limit test (#21937), prisma self-heal cooldown (#21938), model_prices absolute-path validation (#21939), and an INCOMPLETE status enum addition for the Interactions API (#21943). Docs added an **OpenAI Agents SDK tutorial** (#21221) and a **Google GenAI SDK (JS+Python) tutorial** (#21885).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`09cc3b8`](https://github.com/BerriAI/litellm/commit/09cc3b8bbc0bb8d41dcc12b5ff711cff139a592e) ui changes — _@yuneng-jiang_
- [`bc99e38`](https://github.com/BerriAI/litellm/commit/bc99e38e55348aaab5db5fcef3adb1f9ba44faa3) Fix: accessToken not included in queryKey — _@atapia27_
- [`f44c36f`](https://github.com/BerriAI/litellm/commit/f44c36f9802bc46bbd4b646924aed8ddeea82f2a) Fix Unbounded pagination — _@atapia27_
- [`3faf5e5`](https://github.com/BerriAI/litellm/commit/3faf5e59124b6e13200b0b82dedcb719d9110e00) Merge pull request #21961 from BerriAI/litellm_revert_duplicate_workflows — _@ryan-crabbe_
- [`079ff24`](https://github.com/BerriAI/litellm/commit/079ff24d780d067ad9a21a1e910116aa4d9fb9d1) Revert duplicate issue checker to text-based matching, remove duplicate PR workflow — _@ryan-crabbe_
- [`6d98622`](https://github.com/BerriAI/litellm/commit/6d98622923f95c6e047c910637cdf92b3f055f77) filters working properly for team virtual keys — _@atapia27_
- [`54b7e1a`](https://github.com/BerriAI/litellm/commit/54b7e1af993e88e2f3f2f7583e74ac58dd697094) adjust blog post path — _@yuneng-jiang_
- [`08f4a27`](https://github.com/BerriAI/litellm/commit/08f4a27e32322caff05c27cc8247ea017952518a) Merge remote-tracking branch 'origin' into litellm_blog_dropdown — _@yuneng-jiang_
- [`94425df`](https://github.com/BerriAI/litellm/commit/94425dff1ee1501dd49df04045df254367b42107) fixing path — _@yuneng-jiang_
- [`34d09a3`](https://github.com/BerriAI/litellm/commit/34d09a314ca5a60d7cd64a7f1e531213c01c5d90) virtual-keys-team-table — _@atapia27_
- [`4ff2cfd`](https://github.com/BerriAI/litellm/commit/4ff2cfd8d6a4d4473597f504af4e9979d230d78c) feat(videos): add variant parameter to video content download (#21955) — _@nielei3_
- [`1ecfbad`](https://github.com/BerriAI/litellm/commit/1ecfbad46e8d0814a1aecf78c538a4d05b99697a) adjust blog posts to fetch from github first — _@yuneng-jiang_
- [`75d9f4d`](https://github.com/BerriAI/litellm/commit/75d9f4d84f2abf32b58838243f4383d5b01b2323) fix: use atomic increment-first pattern for model RPM rate limiting — _@jquinter_
- [`0ca9869`](https://github.com/BerriAI/litellm/commit/0ca9869b99445839232c5cd27ce72fc7b245eacb) Merge pull request #21950 from ryan-crabbe/docs/v1-81-14-perf-section — _@ryan-crabbe_
- [`6574d8d`](https://github.com/BerriAI/litellm/commit/6574d8d39539c4770b5253e98dcd8f88b8738a60) Merge pull request #21937 from jquinter/fix/flaky-rpm-limit-test — _@jquinter_
- [`71b4bd1`](https://github.com/BerriAI/litellm/commit/71b4bd12a77ae66b39ad5716be783d8badb57e8d) Add OpenAI Agents SDK tutorial with LiteLLM Proxy to docs  (#21221) — _@Arindam200_
- [`73fd5a4`](https://github.com/BerriAI/litellm/commit/73fd5a41e48acb76952bb76bccafb166bd30dca2) feat: Singapore guardrail policies (PDPA + MAS AI Risk Management) (#21948) — _@ron-zhong_
- [`bb63de2`](https://github.com/BerriAI/litellm/commit/bb63de2f82edf1a3cb65f6a9f54c47de6e72618f) fix(tests): make RPM limit test sequential to avoid race condition — _@jquinter_
- [`3681319`](https://github.com/BerriAI/litellm/commit/36813199b6f741da5b6a4b019d542b07ea12d20b) Merge pull request #21943 from jquinter/fix/interactions-incomplete-status — _@jquinter_
- [`67ceade`](https://github.com/BerriAI/litellm/commit/67ceade162f6ca671434bcb95487068ab7ae3290) docs: add performance & reliability section to v1.81.14 release notes — _@ryan-crabbe_
- [`af9ad68`](https://github.com/BerriAI/litellm/commit/af9ad68a43228ff368196d2e10198bd79d650a63) fix: presidio streaming, false positives — _@Harshit28j_
- [`4dfec46`](https://github.com/BerriAI/litellm/commit/4dfec4661b988e4bc491affc2030c626e0a19add) Guardrail Monitor - measure guardrail reliability in prod  (#21944) — _@Krish Dholakia_
- [`f94d0fe`](https://github.com/BerriAI/litellm/commit/f94d0fe0b6bde9776b64ef3668c05cd96ece3b98) fix: add INCOMPLETE status to Interactions API enum and test — _@jquinter_
- [`c4c48fe`](https://github.com/BerriAI/litellm/commit/c4c48fe977e75e837c0bc37213779669c7e297a1) Merge pull request #21942 from BerriAI/litellm_network_mock — _@ryan-crabbe_
- [`e0ddb2a`](https://github.com/BerriAI/litellm/commit/e0ddb2a525292f75e2c365f8caa8d5a4bc837317) fix: guard print_aggregate against empty latencies — _@ryan-crabbe_
- [`058852a`](https://github.com/BerriAI/litellm/commit/058852ac5b213f1e4e22f0bcf602c2dca15782e4) lint — _@kesku_
- [`e468d10`](https://github.com/BerriAI/litellm/commit/e468d108a60fa4c7c8e7f08186c60f4f6d1d00f4) format — _@kesku_
- [`5899e90`](https://github.com/BerriAI/litellm/commit/5899e909fd161ff2959de883c657231d896dbe57) feat(perplexity): update Responses API integration to match Agent API — _@kesku_
- [`fb123ec`](https://github.com/BerriAI/litellm/commit/fb123ec52b76ce52a8d060efd127cb10c5c54136) refactor: use method-level import for MockOpenAITransport — _@ryan-crabbe_
- [`95d9514`](https://github.com/BerriAI/litellm/commit/95d9514054657d39481d8b374e379cfdb9aca748) fix: add auth headers and empty latencies guard to benchmark script — _@ryan-crabbe_
- [`bba98c2`](https://github.com/BerriAI/litellm/commit/bba98c2f151f6afcb830dba0fa352a08866fc259) Merge pull request #21886 from Chesars/docs/ui-contributing-pre-pr-checklist — _@yuneng-jiang_
- [`8244ad1`](https://github.com/BerriAI/litellm/commit/8244ad1f0e5568fefda9467dc3e77db28d0e94c5) docs: tweak benchmarks wording — _@ryan-crabbe_
- [`5b41b00`](https://github.com/BerriAI/litellm/commit/5b41b009f6af5b3ea33d6504272de1ea7ab95850) docs: add network mock benchmarking section — _@ryan-crabbe_
- [`64d1de0`](https://github.com/BerriAI/litellm/commit/64d1de0552c9ec475f68b1ceac74f01675d755ff) docs: add Google GenAI SDK tutorial (JS & Python) (#21885) — _@Chesars_
- [`d99d87f`](https://github.com/BerriAI/litellm/commit/d99d87f6144ad05bf9c90281910d2cbd605da446) clean up mock transport: remove streaming, add defensive parsing — _@ryan-crabbe_
- [`17d97f2`](https://github.com/BerriAI/litellm/commit/17d97f26f61a2821c19fbb0c78af46f778e7c128) Merge pull request #21939 from jquinter/fix/model-prices-test-relative-path — _@jquinter_
- [`7ae1571`](https://github.com/BerriAI/litellm/commit/7ae157198bad05bb4df2a5573517cd6e75a120c9) fix(proxy): recover from prisma-query-engine zombie process (#21899) — _@hcavarsan_
- [`bf8c219`](https://github.com/BerriAI/litellm/commit/bf8c21986092813af1ab721bff837196b80e563c) fix(tests): use os.path instead of Path to avoid NameError — _@jquinter_
- [`a74b6ee`](https://github.com/BerriAI/litellm/commit/a74b6eee23490518a5b6c9ff7a06618af198926a) Update tests/test_litellm/test_utils.py — _@jquinter_
- [`11a774e`](https://github.com/BerriAI/litellm/commit/11a774e1103ede483dac4ed37d2cdf270cc5cfeb) fix(tests): use absolute path for model_prices JSON in validation test — _@jquinter_
- [`ac6f2f3`](https://github.com/BerriAI/litellm/commit/ac6f2f3c5294d9ded6fb724b31e25953b8be4c04) Merge pull request #21938 from jquinter/fix/flaky-prisma-self-heal-test — _@jquinter_
- [`fb8b11c`](https://github.com/BerriAI/litellm/commit/fb8b11cc0a477f456e73bc4d96aeddf6c83c19fe) fix(tests): use counter-based mock for time.time in prisma self-heal test — _@jquinter_
- [`c6f60be`](https://github.com/BerriAI/litellm/commit/c6f60bed71f9198ed697c698bce533dbb9149106) perf(spendlogs): optimize old spendlog deletion cron job — _@Harshit28j_
- [`a26f83f`](https://github.com/BerriAI/litellm/commit/a26f83fd3c2f0f50e7d05ec5d6c7da117962755c) fix: update calendly on repo — _@Krrish Dholakia_
- [`f97ee62`](https://github.com/BerriAI/litellm/commit/f97ee62fb086b88ca46db0faf9eb71600faeb96d) Merge pull request #21909 from BerriAI/litellm_cost_tracking_gemini — _@Sameerlite_
- [`61e63b6`](https://github.com/BerriAI/litellm/commit/61e63b65531eb9a1e7bf0b3de8f68d86cc926e71) Merge pull request #21904 from BerriAI/litellm_fix_model_cost_map — _@Sameerlite_
- [`2f8d36b`](https://github.com/BerriAI/litellm/commit/2f8d36be1b3069e126ff52bad89888763f63b80f) Fix test_aaamodel_prices_and_context_window_json_is_valid — _@Sameerlite_
- [`9b5bbee`](https://github.com/BerriAI/litellm/commit/9b5bbee906980d1554f4b949eb9dacde3c27fae4) Merge pull request #21786 from BerriAI/litellm_oss_staging_02_21_2026 — _@Sameerlite_
- [`8decf04`](https://github.com/BerriAI/litellm/commit/8decf04d8a89f98b3f90a797b769134bae08cb0d) Merge pull request #21877 from BerriAI/litellm_oss_staging_02_22_2026 — _@Sameerlite_
- [`f6f46ae`](https://github.com/BerriAI/litellm/commit/f6f46ae5ae4c40b6de76394d99f1cc7a7f584ddb) Fix mypy issues — _@Sameerlite_
- [`37d4513`](https://github.com/BerriAI/litellm/commit/37d45139f2e0182f8835a5271c6f84779b2bfb80) Merge pull request #21917 from BerriAI/litellm_fix_model_cost_map_wildcard — _@Sameerlite_
- [`16b25bd`](https://github.com/BerriAI/litellm/commit/16b25bd4575ea1b9d405d6758597779803ecffdb) Merge pull request #21921 from Point72/ephrimstanley/batch-fixes-feb23 — _@Sameerlite_
- [`351921d`](https://github.com/BerriAI/litellm/commit/351921d5db3eb5aae2258b1cbdb15058c2a16574) Fix mypy issues — _@Sameerlite_
- [`a3c01b7`](https://github.com/BerriAI/litellm/commit/a3c01b725930fc07670b73f1dc8093ca65a89919) Fix code qa issues — _@Sameerlite_
- [`4934d89`](https://github.com/BerriAI/litellm/commit/4934d89cc7a7cb0654fede7b7f7041fd62b590fb) Merge pull request #21872 from BerriAI/litellm_dev_02_21_2026_p4 — _@Sameerlite_
- [`99184c4`](https://github.com/BerriAI/litellm/commit/99184c48d9512f743a54e1552df6cb0cc18651a3) Add Noma guardrails v2 based on custom guardrails (#21400) — _@TomAlon_
- [`88cd0d3`](https://github.com/BerriAI/litellm/commit/88cd0d31edeefc323faeb77a53f58a7c57fb8515) fix mypy issues: — _@Sameerlite_
- [`27a3356`](https://github.com/BerriAI/litellm/commit/27a33565e78ec86d0ef3143ac3a2174c56599b2b) State management fixes for CheckBatchCost - Address greptile comments — _@ephrimstanley_
- [`c7aafdf`](https://github.com/BerriAI/litellm/commit/c7aafdf794b0a63dfd85043623936178cb44760c) Merge pull request #21926 from BerriAI/main — _@Sameerlite_
- [`57af8e6`](https://github.com/BerriAI/litellm/commit/57af8e6a93c54cb17b26fbdf5cf670929200a88a) Merge pull request #21924 from BerriAI/main — _@Sameerlite_
- [`f23e549`](https://github.com/BerriAI/litellm/commit/f23e549cce94f84c5adc3825d41db91e9ca7e8cc) Fix PR review comments — _@Sameerlite_
- [`7b5dc3f`](https://github.com/BerriAI/litellm/commit/7b5dc3fb9c656e71d2754396a5494be8b7e23120) State management fixes for CheckBatchCost — _@ephrimstanley_
- [`4c487ac`](https://github.com/BerriAI/litellm/commit/4c487acdf074e6f9793f5075a51a78ea31e6f174) Merge pull request #21918 from Harshit28j/litellm_arrival_time_fix — _@Harshit28j_
- [`164cde9`](https://github.com/BerriAI/litellm/commit/164cde9bf61b962c382f1c9a91a044211da834e6) Readd tpm limit — _@Sameerlite_
- [`eaf3900`](https://github.com/BerriAI/litellm/commit/eaf39002003287e96c1e7efc29c0b317d6a663c1) Fix name of title — _@Sameerlite_
- [`262235f`](https://github.com/BerriAI/litellm/commit/262235f2667afe53c3f590c5019f3b8f0441bc5d) Add ability to see which model cost map is getting used — _@Sameerlite_
- [`9b27cd8`](https://github.com/BerriAI/litellm/commit/9b27cd8c0ea37f5c96acfa61525c8d82cd948919) Add incident report — _@Sameerlite_
- [`4ff1651`](https://github.com/BerriAI/litellm/commit/4ff1651699a4f43602c9148acc49e3ad25985583) Fix: Anthropic model wildcard access issue — _@Sameerlite_
- [`9fc3c77`](https://github.com/BerriAI/litellm/commit/9fc3c77c426f400e199ac4efe21e342be2a1dcc4) fix: ensure arrival_time is set before calculating queue time — _@Harshit28j_
- [`3561bfb`](https://github.com/BerriAI/litellm/commit/3561bfb96cabd924f3daf61f5b11cb804c634c70) Merge pull request #21640 from ta-stripe/feat/regional-sts-endpoint-for-auth_with_role_name — _@Sameerlite_
- [`55ee8cd`](https://github.com/BerriAI/litellm/commit/55ee8cdd5655ccf34b71ef25e89fc4fe4db5123c) Merge pull request #21701 from ta-stripe/fix/bedrock-openai-imported-model-name-encoding — _@Sameerlite_
- [`4d8f509`](https://github.com/BerriAI/litellm/commit/4d8f5097fb0626e788a63e4dfa6f007b3f02aa5b) Add model pricing — _@Sameerlite_
- [`20023bd`](https://github.com/BerriAI/litellm/commit/20023bdcfbe88d5de46ba0eac18f9613291c752a) Add support for Priority PayGo for vertex ai and gemini — _@Sameerlite_
- [`f54fb9a`](https://github.com/BerriAI/litellm/commit/f54fb9aeb168b701d78b3e5fd0208eaa17f645cb) Add tests for fast and us — _@Sameerlite_
- [`22bccc4`](https://github.com/BerriAI/litellm/commit/22bccc4f61cda0d1cd3ca6b7cd4b0db93bb57854) Fix entries with fast and us/ — _@Sameerlite_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
