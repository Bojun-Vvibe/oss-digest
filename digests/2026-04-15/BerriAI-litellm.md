# BerriAI/litellm — 2026-04-15

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-14T23:59:59.000Z → 2026-04-15T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headlining today: a security fix landed to **prevent API key leaks in error tracebacks, logs, and alerts** (#25117), alongside a guardrails hardening fix that **replaces the `custom_code` sandbox with `RestrictedPython`** (#25818) — both worth reading if you run LiteLLM in production. Release `v1.83.8-nightly` was cut (with version bump in #25730).

The other big functional change is around **Bedrock/Anthropic cache token cost accounting** (#25735): cache tokens are now captured as raw `text_tokens` before cache inflation in both Bedrock Converse and Anthropic paths, `cache_read_cost` and `cache_creation_cost` are added to the `CostBreakdown` TypedDict and threaded through `set_cost_breakdown`, the UI cost-breakdown drawer now shows separate Input / Cache Read / Cache Write line items, and the Usage summary card stops double-counting cache tokens against Input. New unit tests cover the Bedrock InvokeModel billing path. A related logging fix (52708300) **preserves all provider response headers in `StandardLoggingPayload`** instead of silently dropping non-typed fields, and adds missing `x_ratelimit_reset_*` typed fields. Bedrock API responses also got null-type handling improvements (#25810).

Router behavior: **order-based fallbacks now work for wildcard model groups** (9ed90d5) — e.g. `openai/gpt-4.1-mini` can now advance through order levels via wildcard-aware deployment lookup. Anthropic message type gained input+output token tracking (277be4c).

Infra/process: a notable governance change — **main branch is now guarded** to only accept PRs from `litellm_internal_staging` or `litellm_hotfix_*` branches, and rejects fork PRs and merge_group events (#25733). CI branch filters were expanded so test workflows actually run on PRs targeting the staging branch (#25819), and unused `publish_proxy_extras`/`prisma_schema_sync` CircleCI jobs were removed in favor of PyPI trusted publishing (#25821). The `test-server-root-path` timeout was bumped to 30m (#25741), and a flaky Bedrock GPT-OSS tool-call streaming test was replaced with a request-body mock (#25739).

UI churn continues: ongoing migration off `@tremor/react` to antd (Guardrails Monitor, GuardrailTestPlayground), an Enterprise notice banner on Deleted Keys/Teams pages (#25814), Invite User now defaults to least-privilege "Internal User Viewer", and the Logs team filter dropdown was isolated from Teams-page state bleed. No new issues or external PRs in the window.

## Releases

- **[v1.83.8-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.83.8-nightly)** — v1.83.8-nightly _by @github-actions[bot] at 2026-04-15T20:07:13Z_
  > ## Verify Docker Image Signature
  > 
  > All LiteLLM Docker images are signed with [cosign](https://docs.sigstore.dev/cosign/overview/). Every release is signed with the same key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).
  > 
  > **Verify using the pinned commit hash (recommended):**
  > 
  > A commit hash is cryptographically immutable, so this is the strongest way to ensure you are using the original signing key:
  > 
  > ```bash
  > cosign verify \
  >   -…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`2f72eb6`](https://github.com/BerriAI/litellm/commit/2f72eb6637fdece915ce53b9e96f6e9f4f4df7c8) Merge pull request #25821 from BerriAI/litellm_/funny-meninsky — _@yuneng-berri_
- [`93faf32`](https://github.com/BerriAI/litellm/commit/93faf321df159b1ef65a98cc29a70958a96d184a) Merge pull request #25818 from jaydns/fix/custom-code-guardrail-restrictedpython — _@yuneng-berri_
- [`3f3bfdb`](https://github.com/BerriAI/litellm/commit/3f3bfdbe33dd5920851b2a25058fe2c915e57643) Merge pull request #25117 from stuxf/fix/credential-leak-prevention — _@yuneng-berri_
- [`55f2a89`](https://github.com/BerriAI/litellm/commit/55f2a898be54e2ed01684ff89899226e360aefa4) [Infra] Remove unused publish_proxy_extras and prisma_schema_sync jobs — _@yuneng-berri_
- [`814fa20`](https://github.com/BerriAI/litellm/commit/814fa203996d2ca26a819ff3e27d6b61b8a31016) Merge pull request #25814 from BerriAI/litellm_/elastic-zhukovsky — _@yuneng-berri_
- [`42ab3f9`](https://github.com/BerriAI/litellm/commit/42ab3f94ce7668cb1e59257cd44b6ef2f0670347) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_yj_apr14 — _@yuneng-berri_
- [`dabf8ea`](https://github.com/BerriAI/litellm/commit/dabf8eaecb076a53009d5b202682bc617e211f59) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_/elastic-zhukovsky — _@yuneng-berri_
- [`5f99e52`](https://github.com/BerriAI/litellm/commit/5f99e52fbc461c5f0d407cffad4c758d6b4cea68) Added concurrent index creation. Added necessary disclaimers to index creation. — _@harish876_
- [`bf1c528`](https://github.com/BerriAI/litellm/commit/bf1c52862ea71a81eb45d5b75c04d1c40492f772) Merge pull request #25819 from BerriAI/litellm_expandCiBranchFilters — _@yuneng-berri_
- [`469045b`](https://github.com/BerriAI/litellm/commit/469045ba91bcae07d8c8c6f6ce74311489226148) fix(guardrails): provide _inplacevar_ to sandbox — _@jaydns_
- [`aff4717`](https://github.com/BerriAI/litellm/commit/aff4717494d1c23f0f45992483a888a3903ec3f4) [Infra] Expand CI branch filters for non-main PR targets — _@yuneng-berri_
- [`fc9852c`](https://github.com/BerriAI/litellm/commit/fc9852cea2f9ff50016e064a3aa573c433eca179) fix(guardrails): move test_custom_code_security.py to correct location — _@jaydns_
- [`0a1b442`](https://github.com/BerriAI/litellm/commit/0a1b4427a6c4ee07add32295e331bd0cf9cac572) fix(guardrails): replace custom_code sandbox with RestrictedPython — _@jaydns_
- [`de7aad9`](https://github.com/BerriAI/litellm/commit/de7aad9def6c05f6f28044400b729472ca087508) [Feature] UI - Deleted Keys/Teams: Add Enterprise notice banner — _@yuneng-berri_
- [`d8ceeb8`](https://github.com/BerriAI/litellm/commit/d8ceeb83b72984ef50be5857d09af500ab2a4635) Merge pull request #25810 from BerriAI/litellm_bedrock_api_response_null_type_handling — _@ishaan-berri_
- [`18afe6a`](https://github.com/BerriAI/litellm/commit/18afe6ab64019eee2bea8a3221a56c2d873019ab) test(ui): update organization_view tests for useOrganization hook — _@ryan-crabbe-berri_
- [`6e9cbba`](https://github.com/BerriAI/litellm/commit/6e9cbbaad3b58c8819d0d6c0825509e10de9051b) refactor(ui): migrate organization view to useOrganization hook — _@ryan-crabbe-berri_
- [`c8496a2`](https://github.com/BerriAI/litellm/commit/c8496a2767e9f19ba24110a77d48e33895daaa75) fix(ui): invalidate organization queries after team mutations — _@ryan-crabbe-berri_
- [`aaf169c`](https://github.com/BerriAI/litellm/commit/aaf169c91b361e1f379192333b15f8a65a2e05b8) resolve merge conflicts: keep null-safety tests + add L3 regression tests from base — _@ishaan-berri_
- [`35559c4`](https://github.com/BerriAI/litellm/commit/35559c4d60f36108c179ec73ae3cdd3858ca865b) fix(ui): use antd Select for MCP ToolTestPanel bool inputs — _@ryan-crabbe-berri_
- [`f9bffbb`](https://github.com/BerriAI/litellm/commit/f9bffbb1b718d68fa9cfbbe7ae16da24b1531b86) Merge pull request #25803 from BerriAI/litellm_guardrails-monitor-antd-layout — _@ryan-crabbe-berri_
- [`98c2d90`](https://github.com/BerriAI/litellm/commit/98c2d90f5c7d0770c183c3340a3517bc218bac77) fix(logging): update test_get_additional_headers to reflect provider header passthrough — _@ishaan-berri_
- [`f04a5e7`](https://github.com/BerriAI/litellm/commit/f04a5e711386b4584fd13948819310587071c031) fix(ui): render guardrail optional_params bool defaults in Select — _@ryan-crabbe-berri_
- [`48aa776`](https://github.com/BerriAI/litellm/commit/48aa776032dae7c4a6d25bfb97f49dc60a86f6d8) refactor(ui): use antd grid for guardrails monitor metrics — _@ryan-crabbe-berri_
- [`cc6a33c`](https://github.com/BerriAI/litellm/commit/cc6a33cce484eb9c3f8df9d6e9952e5a093338f6) test(logging): add tests for get_additional_headers header preservation — _@ishaan-berri_
- [`5270830`](https://github.com/BerriAI/litellm/commit/52708300ecb1ddca43fc20b8ff1363beac173cc9) fix(logging): preserve all provider response headers in StandardLoggingPayload — _@ishaan-berri_
- [`fbd15a0`](https://github.com/BerriAI/litellm/commit/fbd15a05f73542f11dd63e314b7a4275dfd3eb8b) fix(types): add missing x_ratelimit_reset_* fields to StandardLoggingAdditionalHeaders — _@ishaan-berri_
- [`fb245b7`](https://github.com/BerriAI/litellm/commit/fb245b746f6f9ef8166ac18a20866006d4f8c103) Merge pull request #25801 from BerriAI/litellm_rebuild_ui_cache_breakdown — _@ishaan-berri_
- [`31fd681`](https://github.com/BerriAI/litellm/commit/31fd681de0b160d6da46ae7962b4cd2bbaa4a35c) build(ui): rebuild dashboard for cache token cost breakdown changes — _@ishaan-berri_
- [`645e0a7`](https://github.com/BerriAI/litellm/commit/645e0a78312274ff75b9e64f00606e95e5cb6c0d) Merge pull request #25735 from BerriAI/litellm_bedrock_cache_cost_breakdown — _@ishaan-berri_
- [`b599c8b`](https://github.com/BerriAI/litellm/commit/b599c8bfd41a26e4e8f38cd8f0915f2e048188d6) refactor(ui): reduce Tremor usage in Guardrails Monitor layout — _@ryan-crabbe-berri_
- [`922c617`](https://github.com/BerriAI/litellm/commit/922c6174fa96e19b0bb61ad2ff488ce88b647ade) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_bedrock_cache_cost_breakdown — _@yuneng-berri_
- [`ff5bd43`](https://github.com/BerriAI/litellm/commit/ff5bd43b0fbeb17211d1e2fe3e5e6a24b4900d6f) Point contributors toward litellm_oss_branch in guard error messages — _@yuneng-berri_
- [`d9b89bc`](https://github.com/BerriAI/litellm/commit/d9b89bc2cafb678d100eb515675f56a3a72552f4) Also reject PRs from forks, not just non-allowlisted branches — _@yuneng-berri_
- [`a305eb8`](https://github.com/BerriAI/litellm/commit/a305eb866a11f631232c11d59a4ecfc3de49f146) [Infra] Guard main branch with PR source-branch check — _@yuneng-berri_
- [`557accb`](https://github.com/BerriAI/litellm/commit/557accbb2a02f3ee430390843385d8cf271cd2fa) bump: version 1.83.7 → 1.83.8 — _@yuneng-berri_
- [`571faae`](https://github.com/BerriAI/litellm/commit/571faae0edf02f45f19d10e8ca7e38e13a2f500c) fix(ci): increase test-server-root-path timeout to 30m — _@joereyna_
- [`213b1ea`](https://github.com/BerriAI/litellm/commit/213b1ea0b4689a191984f9a723388609515162bd) fix: remove non-existent litellm_mcps_tests_coverage from coverage combine — _@joereyna_
- [`5af74b6`](https://github.com/BerriAI/litellm/commit/5af74b6930df34d7eca9afffbbfce8c876de2a7b) docs update — _@shivamrawat1_
- [`1e50925`](https://github.com/BerriAI/litellm/commit/1e50925d9b454ece8db9944b641dbfb7a95f0707) [Test] add request-body mock test for bedrock gpt-oss tool schema — _@yuneng-berri_
- [`c8a94ff`](https://github.com/BerriAI/litellm/commit/c8a94ff1ec18ebcdf0ac15ddf5ef0878360dcb62) [Test] stub flaky bedrock gpt-oss function-calling stream test — _@yuneng-berri_
- [`be9053d`](https://github.com/BerriAI/litellm/commit/be9053d95763d4ff4e7f9e89d505163b0d42b5fc) [Test] mark bedrock gpt-oss function-calling stream test flaky — _@yuneng-berri_
- [`19070d3`](https://github.com/BerriAI/litellm/commit/19070d326da8e7f548a90619b504a69963f93b80) update — _@shivamrawat1_
- [`2933b21`](https://github.com/BerriAI/litellm/commit/2933b213dbc7902fb50302f694f5ae96bd12d61a) fallbacks image — _@shivamrawat1_
- [`641a377`](https://github.com/BerriAI/litellm/commit/641a377d05b17ccaae632e0f1c89b64da8edd8a8) [Fix] Test - Together AI: replace deprecated Mixtral with serverless Qwen3.5-9B — _@yuneng-berri_
- [`dbe7008`](https://github.com/BerriAI/litellm/commit/dbe70086c69a8da74454086d667ff48cce9e8b0e) Remove Chat UI link from Swagger docs message — _@yuneng-berri_
- [`81e3849`](https://github.com/BerriAI/litellm/commit/81e38491ffcdf1a54e48ea77eb5e24d7690c269e) [Docs] Regenerate v1.83.3-stable release notes from v1.82.3-stable baseline — _@yuneng-berri_
- [`3b8f651`](https://github.com/BerriAI/litellm/commit/3b8f651eaf070640d4f5b467dc1a5f1d2ddc2a2c) fix: default invite user modal global role to least-privilege — _@ryan-crabbe-berri_
- [`8837138`](https://github.com/BerriAI/litellm/commit/8837138c8f156ed9315fd601c11467cd08fa8592) [Docs] Use GitHub avatar for Ryan Crabbe in release notes — _@ryan-crabbe-berri_
- [`c94f5d5`](https://github.com/BerriAI/litellm/commit/c94f5d56a87ce5a8467353204e2e4f16e5ead6c4) [Docs] Add missed content PRs to v1.83.7.rc.1 and update runbook — _@yuneng-berri_
- [`d92e65c`](https://github.com/BerriAI/litellm/commit/d92e65cc6f17be9a4763e897aa3c90ebd187a322) [Fix] Correct pip install versions for v1.83.3-stable and v1.83.7.rc.1 docs — _@yuneng-berri_
- [`719f4ca`](https://github.com/BerriAI/litellm/commit/719f4cafcaa4d975f4da960aeff68443360c6db5) [Docs] Add release notes for v1.83.3-stable and v1.83.7.rc.1 — _@yuneng-berri_
- [`a23408d`](https://github.com/BerriAI/litellm/commit/a23408d9376d56b1890a6f8e60b768f6eebd251f) test(ui): add getCookie to cookieUtils mock in user_dashboard test — _@ryan-crabbe-berri_
- [`27484c4`](https://github.com/BerriAI/litellm/commit/27484c4a417456bc150e30858738be35fe6f2862) fix: isolate logs team filter dropdown from root teams state bleed — _@ryan-crabbe-berri_
- [`f27bf8e`](https://github.com/BerriAI/litellm/commit/f27bf8e711a554c21c6cb7fdd2d7d1cf99e5e702) fix(ui): pre-select backend default for boolean guardrail provider fields — _@ryan-crabbe-berri_
- [`3fdd67f`](https://github.com/BerriAI/litellm/commit/3fdd67ff237f549a97fb13bf1712fe08b7d98330) Delete docs/my-website/blog/debug_cost_discrepancy/index.md — _@Sameerlite_
- [`17568e8`](https://github.com/BerriAI/litellm/commit/17568e81f28befd3215b4f2e98123a1b7b16bd5b) chore(ui): use antd Typography in GuardrailTestPlayground — _@ryan-crabbe-berri_
- [`277be4c`](https://github.com/BerriAI/litellm/commit/277be4c50eafafd3d4b7138757f2a05fa62b777b) Add input + output tokens for anthropic message type — _@Sameerlite_
- [`9ed90d5`](https://github.com/BerriAI/litellm/commit/9ed90d53cda128fe001435d070031ea37b0f0cea) fix(router): enable order fallback for wildcard model groups — _@Sameerlite_
- [`6426bc4`](https://github.com/BerriAI/litellm/commit/6426bc41f5ae966f4ae7bfe402b1d9c1c78669d3) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_yj_apr14 — _@yuneng-berri_
- [`b28b82c`](https://github.com/BerriAI/litellm/commit/b28b82c1057d700eee2d75c6d7cadb744e3deadf) chore(ui): migrate GuardrailTestPlayground off @tremor/react to antd — _@ryan-crabbe-berri_
- [`4a73e94`](https://github.com/BerriAI/litellm/commit/4a73e94618548de950e8cb86a1f3c85d87deefc7) Merge pull request #25747 from BerriAI/main — _@shin-berri_
- [`72a461b`](https://github.com/BerriAI/litellm/commit/72a461ba4ab5be96902380870b4994adbbcf7ad6) Merge pull request #25733 from BerriAI/litellm_guardMainBranch — _@yuneng-berri_
- [`b3c413a`](https://github.com/BerriAI/litellm/commit/b3c413aefea590e20ae2c2b13975a2daa2312f48) add a composite index on the model_name, model_id and checked_at key for lookup. — _@harish876_
- [`9790a46`](https://github.com/BerriAI/litellm/commit/9790a46f696e4c3cbf04fb2716d14a9d7efa8a14) Merge pull request #25730 from BerriAI/yj_bump_apr14_2 — _@yuneng-berri_
- [`bdb4f39`](https://github.com/BerriAI/litellm/commit/bdb4f396bb2c9216dccb2d704a3ac7fc4ebcf8a3) Merge pull request #25741 from joereyna/fix/test-server-root-path-timeout — _@yuneng-berri_
- [`3284dee`](https://github.com/BerriAI/litellm/commit/3284dee73472b28794af81d8d72cbc8a5d9d41be) Merge pull request #25737 from joereyna/fix/remove-missing-mcps-coverage-path — _@yuneng-berri_
- [`5078600`](https://github.com/BerriAI/litellm/commit/50786007fcda651ddf1f702f5d8402e47b5e7aeb) Merge pull request #25736 from BerriAI/docs_visual_guide_for_guardrail_fallbacks — _@yuneng-berri_
- [`ffc3a97`](https://github.com/BerriAI/litellm/commit/ffc3a9736d8e5e4ff9f78030e43dc718164d4cca) Merge pull request #25739 from BerriAI/litellm_flakyBedrockGptOssToolCall — _@yuneng-berri_
- [`ccbdaa9`](https://github.com/BerriAI/litellm/commit/ccbdaa9187acad9cb1e9bd862752191cd46b715d) fix(ci): increase test-server-root-path timeout to 30m — _@joereyna_
- [`e2043e1`](https://github.com/BerriAI/litellm/commit/e2043e11f1466e996c244db08220fd41d7a73e35) [Test] add request-body mock test for bedrock gpt-oss tool schema — _@yuneng-berri_
- [`8e44a02`](https://github.com/BerriAI/litellm/commit/8e44a02a22532cbfad21ab974f5995cae7aeca22) [Test] stub flaky bedrock gpt-oss function-calling stream test — _@yuneng-berri_
- [`d6a69b9`](https://github.com/BerriAI/litellm/commit/d6a69b9c81c38c686c9c23aef20871c7eb565634) [Test] mark bedrock gpt-oss function-calling stream test flaky — _@yuneng-berri_
- [`84c507b`](https://github.com/BerriAI/litellm/commit/84c507bc145a71b377a41807bc888183e91a0609) fix(mypy): use explicit None check for cache rate values to satisfy type checker — _@ishaan-berri_
- [`a01cf44`](https://github.com/BerriAI/litellm/commit/a01cf44c3572bfe7ca075ffa3f87a5f04d8ed6e9) fix: remove non-existent litellm_mcps_tests_coverage from coverage combine — _@joereyna_
- [`38f8d7a`](https://github.com/BerriAI/litellm/commit/38f8d7a008b33addfbc9cee8678149549b4c9d11) Point contributors toward litellm_oss_branch in guard error messages — _@yuneng-berri_
- [`ab71d3d`](https://github.com/BerriAI/litellm/commit/ab71d3d7006b1d0acacdaf6801c2129edeaf38f2) Also reject PRs from forks, not just non-allowlisted branches — _@yuneng-berri_
- [`fd110cd`](https://github.com/BerriAI/litellm/commit/fd110cd5cfaeced074bcca7a73c3237adb2b2856) docs update — _@shivamrawat1_
- [`e20d9df`](https://github.com/BerriAI/litellm/commit/e20d9df1b692ba7eab7efb6247cd3f8e79e962a0) remove test file — _@ishaan-berri_
- [`e0a988e`](https://github.com/BerriAI/litellm/commit/e0a988e39afac7c2a6849bbbdb451949e9666762) feat(ui/log-details): pass rawInputTokens, cacheReadTokens, cacheCreationTokens to CostBreakdownViewer from SpendLogs — _@ishaan-berri_
- [`0148eff`](https://github.com/BerriAI/litellm/commit/0148effd6ef097636609600e321610a4f92b4f87) feat(ui/cost-breakdown): show separate Input / Cache Read / Cache Write line items in cost breakdown drawer — _@ishaan-berri_
- [`6b1dc11`](https://github.com/BerriAI/litellm/commit/6b1dc1156e0dc10b15939c8835f0b6c871a97a00) fix(ui/usage): subtract cache tokens from Input Tokens summary card to avoid double-counting — _@ishaan-berri_
- [`781fc63`](https://github.com/BerriAI/litellm/commit/781fc6311b5aced493b1516d10a348e438659a25) feat(cost-calculator): compute and store per-type cache costs in CostBreakdown (cache_read_cost, cache_creation_cost) — _@ishaan-berri_
- [`b5a4c26`](https://github.com/BerriAI/litellm/commit/b5a4c2624807feece10fd6c4ad366e6a719ff762) feat(logging): pass cache_read_cost and cache_creation_cost through set_cost_breakdown — _@ishaan-berri_
- [`c84597e`](https://github.com/BerriAI/litellm/commit/c84597ecd09672878fe7c6a70dca5af24f158829) fix(bedrock/converse): capture raw input_tokens as text_tokens before cache inflation in PromptTokensDetailsWrapper — _@ishaan-berri_
- [`5c056ca`](https://github.com/BerriAI/litellm/commit/5c056cae9f8f2d0e189167dbe658764f9e55f34b) fix(anthropic): store raw text_tokens in PromptTokensDetailsWrapper before cache inflation — _@ishaan-berri_
- [`c1dcfa7`](https://github.com/BerriAI/litellm/commit/c1dcfa70c97beeb598476579b46473468d7a2019) feat(types): add cache_read_cost and cache_creation_cost fields to CostBreakdown TypedDict — _@ishaan-berri_
- [`d805fe7`](https://github.com/BerriAI/litellm/commit/d805fe7103481c53fd5c9505b2a8662a965d55a9) test(bedrock): add unit tests for cache token billing with prompt caching — _@ishaan-berri_
- [`45d1e1b`](https://github.com/BerriAI/litellm/commit/45d1e1b341c8f34f8ae824ee74034dfd4cef9e20) [Infra] Guard main branch with PR source-branch check — _@yuneng-berri_
- [`5c1f7d9`](https://github.com/BerriAI/litellm/commit/5c1f7d99bf8dbdabb07b6676d8fffe6a4fa734bb) Merge pull request #25731 from BerriAI/docs_guardrail — _@yuneng-berri_
- [`65ce89d`](https://github.com/BerriAI/litellm/commit/65ce89dc6722adf5c32a4b40f0ad9b638158d812) update — _@shivamrawat1_
- [`ec0953f`](https://github.com/BerriAI/litellm/commit/ec0953f7b02622e92cfef43f7f1f4ce1fdda00aa) Merge pull request #25728 from BerriAI/litellm_fix_together_ai_test_model — _@yuneng-berri_
- [`1962900`](https://github.com/BerriAI/litellm/commit/19629004f5f4c71f12d0117c2f9e83025f29551e) fallbacks image — _@shivamrawat1_
- [`d20c70f`](https://github.com/BerriAI/litellm/commit/d20c70f24c38f6d3fbdbec596204829f63f4c549) Optimize database query which fetches latest model_id, model_name pairs and dedupes them in memory. — _@harish876_
- [`045d32a`](https://github.com/BerriAI/litellm/commit/045d32a2424ac3f82debaded122666b1dba3f1cc) bump: version 1.83.7 → 1.83.8 — _@yuneng-berri_
- [`a9c6156`](https://github.com/BerriAI/litellm/commit/a9c6156137f89e45b6572d8bd652f721ce7bd309) [Fix] Test - Together AI: replace deprecated Mixtral with serverless Qwen3.5-9B — _@yuneng-berri_
- [`2af0768`](https://github.com/BerriAI/litellm/commit/2af0768ab910bbd530a44ff7b1c2f66d5abedc19) Merge pull request #25727 from BerriAI/litellm_removeChatUiSwaggerLink — _@yuneng-berri_
- [`bb91f3a`](https://github.com/BerriAI/litellm/commit/bb91f3ace9cee50358c55d8ad7a66fde89b1166f) Merge pull request #25726 from BerriAI/docs_yj_apr14 — _@yuneng-berri_
- [`2911d99`](https://github.com/BerriAI/litellm/commit/2911d99d77ed9da61023489340d87eed403cece4) test(gemini): stub API key for format param tests — _@stuxf_
- [`58ce769`](https://github.com/BerriAI/litellm/commit/58ce769092bedcd5ee1cd9a1e7f563c42a3a6ff2) Remove Chat UI link from Swagger docs message — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
