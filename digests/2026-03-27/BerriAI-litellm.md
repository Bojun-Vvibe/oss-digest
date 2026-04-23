# BerriAI/litellm — 2026-03-27

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-26T23:59:59.000Z → 2026-03-27T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a multi-pod budget-enforcement fix: PR #24682 (commit 846e4b4) makes API key/team/member spend counters Redis-backed so budget limits are actually enforced when LiteLLM proxy runs across multiple pods — previously in-memory counters drifted per pod and limits could be silently exceeded. Operators on horizontally-scaled deployments should read this one.

Auth & SSO get two notable fixes worth reviewing together: `JWTHandler.is_jwt()` now guards against `None` tokens (e36ab04), preventing crashes on unauthenticated health-check/monitoring requests when JWT auth is enabled, with regression tests added (8e37559); and SSO login now passes the decoded JWT access token into role mapping (e24819a) so custom role claims encoded inside bearer tokens survive OAuth response stripping.

Routing changes are heavy. PR #24688 (1b111d2) preserves sibling deployment candidates for team public models, fixing cross-team leakage and stale `model_aliases` interference in team-scoped routing. PR #24611 (d3568ef) adds order-based fallback across deployment priority levels. A new opt-in health-check-driven router (76754886, e4a1e52) excludes unhealthy deployments from candidate filtering behind a flag.

Provider/model updates: claude-opus-4-6 and claude-sonnet-4-6 lose their `above_200k_tokens` tier (PR #24689) — full 1M context now bills at standard rates, no 2x surcharge; gemini-3.1-flash-live-preview added to cost map (PR #24665); Lyria 3 preview models added (PR #24610); Azure OpenAI fine-tuning job creation fixed by defaulting `trainingType=1` (PR #24687); OpenRouter wildcard deployments now strip the LiteLLM routing prefix (PR #24603); Anthropic metadata is filtered to documented keys only (PR #24661); OpenAI Responses API `reasoning_items` round-trip in chat completions (PR #24690).

Security & infra: proxy `user_id` input is sanitized and a dangerous-env-var blocklist added, with `NO_PROXY` blocked but `HTTP(S)_PROXY` allowed for corporate setups (PR #24624); Prometheus metrics added for managed batch lifecycle (PR #24691); PyPI publishing migrated from CircleCI to GitHub Actions OIDC (ba8455a); zizmor and broader CodeQL scanning added to CI (#24697, ff63df2); a security townhall blog post was published (#24692, 88ed4f9).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`846e4b4`](https://github.com/BerriAI/litellm/commit/846e4b44b6ec2f9e00dda9a966554cd869115579) Merge pull request #24682 from michelligabriele/fix/budget-spend-counters — _@yuneng-berri_
- [`8e37559`](https://github.com/BerriAI/litellm/commit/8e3755931ddbd6aff21f064a424d64bdc0139204) test(auth): add regression tests for JWTHandler.is_jwt(None) — _@ryan-crabbe-berri_
- [`e36ab04`](https://github.com/BerriAI/litellm/commit/e36ab04a1856b072f6403d8b16236cf7cad3d960) fix(auth): guard JWTHandler.is_jwt() against None token — _@ryan-crabbe-berri_
- [`a074d1d`](https://github.com/BerriAI/litellm/commit/a074d1d68b4d088e9b1040a60bf522e89db9b53f) [Infra] Mirror litellm_table_patch source changes (no binaries) — _@yuneng-berri_
- [`46b92da`](https://github.com/BerriAI/litellm/commit/46b92da0bd7d9a1175f5768fee00b58eb3490715) [Infra] Add migration for restored BYOM lifecycle fields — _@yuneng-berri_
- [`e0e0c5e`](https://github.com/BerriAI/litellm/commit/e0e0c5e2937070a608b6bc8bb66c782c03394b7b) [Infra] Fix zizmor artipacked warnings on schema sync workflows — _@yuneng-berri_
- [`08e29e0`](https://github.com/BerriAI/litellm/commit/08e29e0a9abaa8885c87ec2f6757fe305b01fef4) [Infra] Automated schema.prisma sync and drift detection — _@yuneng-berri_
- [`e24819a`](https://github.com/BerriAI/litellm/commit/e24819afefd385fcad4a8468dcbdcf09c628b648) fix(sso): pass decoded JWT access token to role mapping during SSO login — _@ryan-crabbe-berri_
- [`d533b43`](https://github.com/BerriAI/litellm/commit/d533b432fdb2d9dbfd4410c5f30e552611b137ec) fix(proxy): enforce budget limits across multi-pod deployments via Redis-backed spend counters — _@michelligabriele_
- [`d949085`](https://github.com/BerriAI/litellm/commit/d949085310f47f3fd7f89e9c2a4870f7187e1a0e) Merge pull request #24697 from BerriAI/litellm_codeql_gha — _@yuneng-berri_
- [`241c456`](https://github.com/BerriAI/litellm/commit/241c45663b9657ad9646a64c3ac4b7aca47717ce) Merge pull request #24696 from BerriAI/litellm_pin_prisma_node_ci — _@yuneng-berri_
- [`ec4273e`](https://github.com/BerriAI/litellm/commit/ec4273ed8b2c59440019d021671d656740988e1e) [Infra] Improve CodeQL scanning coverage and schedule — _@yuneng-berri_
- [`1b111d2`](https://github.com/BerriAI/litellm/commit/1b111d23f3e1735f7f7869c0c4fab06ab30bb492) Merge pull request #24688 from Sameerlite/litellm_litellm_team-model-group-name-routing-fix — _@yuneng-berri_
- [`fa23218`](https://github.com/BerriAI/litellm/commit/fa23218e756a889e727f0183eef13d133daa0f58) docs: add faq to docs — _@krrish-berri-2_
- [`c4159a2`](https://github.com/BerriAI/litellm/commit/c4159a2ade2a462c33d9e3f142715a18cf702a0e) Fix codeql — _@Sameerlite_
- [`ca3457b`](https://github.com/BerriAI/litellm/commit/ca3457b091c9de8f8bdc05f917e49853ebe27c84) Pin nodejs-wheel-binaries in CI workflows running prisma generate — _@yuneng-berri_
- [`8c2c6a4`](https://github.com/BerriAI/litellm/commit/8c2c6a40a6c4b22dabd43ca829b75f8822c312b6) Merge pull request #24689 from Sameerlite/litellm_litellm_remove-200k-pricing-opus-sonnet-46 — _@yuneng-berri_
- [`b4d0e32`](https://github.com/BerriAI/litellm/commit/b4d0e3213fce8794ad815a3dfb7f943c2c24e8dc) Fix the Pricing changes for claude models — _@Sameerlite_
- [`453fc75`](https://github.com/BerriAI/litellm/commit/453fc75ee940e701afe96f30f665ec23522eacb0) fix(pricing): remove above_200k_tokens price tiers for claude-opus-4-6 and claude-sonnet-4-6 — _@Sameerlite_
- [`2ac1efd`](https://github.com/BerriAI/litellm/commit/2ac1efdc0d72c93c451c43c7e7ce29ff65cb7f90) Merge pull request #24603 from Sameerlite/litellm_openrouter-wildcard-strip-prefix — _@yuneng-berri_
- [`b6506bf`](https://github.com/BerriAI/litellm/commit/b6506bf40f8643835eaa31497c6680a31357b1da) Merge pull request #24610 from Sameerlite/litellm_lyria-3-cost-map-doc — _@yuneng-berri_
- [`4bf5e66`](https://github.com/BerriAI/litellm/commit/4bf5e66dbf2ee6a4b70a14ea998cbe02978d9ad9) Merge pull request #24624 from Sameerlite/litellm_sanitize-proxy-inputs — _@yuneng-berri_
- [`412fd46`](https://github.com/BerriAI/litellm/commit/412fd469e2f5d7a2762cb962780d0d328bc43251) Merge pull request #24692 from BerriAI/litellm_security_townhall_blog — _@krrish-berri-2_
- [`53ac4c5`](https://github.com/BerriAI/litellm/commit/53ac4c5459514ed668cea689bbe7187b910e7d9e) Merge pull request #24661 from Sameerlite/litellm_filter-metadata-user-id — _@yuneng-berri_
- [`695304d`](https://github.com/BerriAI/litellm/commit/695304d758f40c7534c634db0987ade66f278ae6) Merge pull request #24662 from Sameerlite/litellm_gemini-retrieve-file-url-normalize — _@yuneng-berri_
- [`210e30f`](https://github.com/BerriAI/litellm/commit/210e30f05598d0cbb67183b51a67d804ebbe4724) Merge pull request #24665 from Sameerlite/litellm_gemini-3-1-flash-live-preview — _@yuneng-berri_
- [`f3fe6d1`](https://github.com/BerriAI/litellm/commit/f3fe6d1c0af3221940de2375687f8a8d65e6167d) Merge pull request #24687 from Sameerlite/litellm_litellm_azure-finetuning-fixes — _@yuneng-berri_
- [`3e7ee3e`](https://github.com/BerriAI/litellm/commit/3e7ee3e887362ec9f7827acc5ecba9abc1168fba) Merge pull request #24690 from Sameerlite/litellm_litellm_openai-reasoning-items-chat-completions — _@yuneng-berri_
- [`bda8c9d`](https://github.com/BerriAI/litellm/commit/bda8c9d8acb6974dd8095371e583371167a00f2e) Merge pull request #24691 from Sameerlite/litellm_litellm_batch_metrics_4 — _@yuneng-berri_
- [`198a0e8`](https://github.com/BerriAI/litellm/commit/198a0e84380ec010b5d263ce252b3bb42611eccb) docs: cleanup docs — _@krrish-berri-2_
- [`ff63df2`](https://github.com/BerriAI/litellm/commit/ff63df25a240135dfce82a06ddd6c90f866c7516) Merge pull request #24663 from BerriAI/litellm_test_branch_03_26_2026_p1 — _@krrish-berri-2_
- [`931c88f`](https://github.com/BerriAI/litellm/commit/931c88f567b2a86e0b643fb9d77861bd5c6cccce) Fix test — _@Sameerlite_
- [`09675ef`](https://github.com/BerriAI/litellm/commit/09675ef2050309e84928e586cfd5c3b724c50464) Fix test — _@Sameerlite_
- [`e4a1e52`](https://github.com/BerriAI/litellm/commit/e4a1e529c5ddbd4e78f8676a4a3bf2a5a1aef949) Merge pull request #2 from Sameerlite/litellm_litellm_health-check-driven-routing2 — _@Sameerlite_
- [`9c049de`](https://github.com/BerriAI/litellm/commit/9c049ded65c6499e3967c62e54ec6da4616bf1e0) docs: draft townhall doc — _@krrish-berri-2_
- [`8210fd7`](https://github.com/BerriAI/litellm/commit/8210fd7e1d0cd3435ab3a41bcb42b8005548d330) fix: revert accidental _litellm_uuid import back to _uuid — _@Sameerlite_
- [`f784beb`](https://github.com/BerriAI/litellm/commit/f784beb74f3d226ced8eae9b9520a62ebd3f02d2) fix: re-attach model_id after endpoint cleaning, bump log level — _@Sameerlite_
- [`7675488`](https://github.com/BerriAI/litellm/commit/76754886400285c36e6b130cb98524e9a15393d7) feat(router): add health-check-driven routing behind opt-in flag — _@Sameerlite_
- [`b212b34`](https://github.com/BerriAI/litellm/commit/b212b340ab82fe4acaac6c9b54604709115941b4) feat(gemini): normalize AI Studio file retrieve URL and harden tests — _@Sameerlite_
- [`38e8003`](https://github.com/BerriAI/litellm/commit/38e80032976b500f85a8de39a6f0bbaacd1fa653) fix(anthropic): strip undocumented keys from metadata before sending to API — _@Sameerlite_
- [`cdb3037`](https://github.com/BerriAI/litellm/commit/cdb3037c4e54b60687b2b8ec8fff72be145d5290) Saving uncommitted changes before archiving — _@Conductor_
- [`92a07e2`](https://github.com/BerriAI/litellm/commit/92a07e2d6e2850bef28f8c7859d6c7632cfb3c45) fix(proxy): address Greptile review feedback — _@Sameerlite_
- [`8112fbf`](https://github.com/BerriAI/litellm/commit/8112fbf27428dfd2cd2e7c075692966a3b36a563) fix(proxy): sanitize user_id input and block dangerous env var keys — _@Sameerlite_
- [`cdc1dd5`](https://github.com/BerriAI/litellm/commit/cdc1dd5c373bd971fa02b9f6316c38313bf5cf68) Fix the tests — _@Sameerlite_
- [`1aa90f9`](https://github.com/BerriAI/litellm/commit/1aa90f9bd16e624a8a9fa9c9ea26e67a2fc64689) Fix model map — _@Sameerlite_
- [`3bbc694`](https://github.com/BerriAI/litellm/commit/3bbc6944613878597e24a0bd6fc90b1b3a8ccb6a) Fix model map — _@Sameerlite_
- [`cc73ae7`](https://github.com/BerriAI/litellm/commit/cc73ae776a703ba9dd0f7d78ae45e8d82580c656) feat(gemini): add Lyria 3 preview models to cost map and docs — _@Sameerlite_
- [`9d7fc30`](https://github.com/BerriAI/litellm/commit/9d7fc307b80fcb8efeb46fdde408a184c68851e1) fix(openrouter): strip LiteLLM prefix when proxy sets custom_llm_provider — _@Sameerlite_
- [`bbd8ca3`](https://github.com/BerriAI/litellm/commit/bbd8ca3b3dbaf4d5ad536501477984811929ce5d) feat(prometheus): add metrics for managed batch lifecycle — _@Sameerlite_
- [`00a810e`](https://github.com/BerriAI/litellm/commit/00a810e92d61dc0e0072a8588f94bbda3024acd2) feat(openai): round-trip Responses API reasoning_items in chat completions — _@Sameerlite_
- [`d3568ef`](https://github.com/BerriAI/litellm/commit/d3568efad07a65da97f319a572e576c4d9d4e58e) Merge pull request #24611 from Sameerlite/Sameerlite/order-fallback2 — _@yuneng-berri_
- [`15f5dc3`](https://github.com/BerriAI/litellm/commit/15f5dc38c47aaf8c5dc61d3bfeb665495df6769c) Fix tests — _@Sameerlite_
- [`1fac58a`](https://github.com/BerriAI/litellm/commit/1fac58abb370596e88d2048e24116879979450b2) fix(tests): reset module-level cache in stale alias bypass tests — _@Sameerlite_
- [`7436f88`](https://github.com/BerriAI/litellm/commit/7436f889caff61876880217362ddcac5b3773b23) fix(router): address final Greptile P1/P2 comments — _@Sameerlite_
- [`2321d77`](https://github.com/BerriAI/litellm/commit/2321d7759916c321da686ad9e267bd4f645c8d49) fix(router): address remaining Greptile review comments — _@Sameerlite_
- [`592ac98`](https://github.com/BerriAI/litellm/commit/592ac98ddc1154a00115528cada41654a0091cdc) fix(router): address Greptile P1/P2 review comments — _@Sameerlite_
- [`1a0b30a`](https://github.com/BerriAI/litellm/commit/1a0b30aaac029808cd25029837306d7e10f228eb) Fix greptile reviews and mock test — _@Sameerlite_
- [`fb8d9c2`](https://github.com/BerriAI/litellm/commit/fb8d9c2e9a33a2a653335ed095526c29ef7f1417) Fix greptile reviews and mock test — _@Sameerlite_
- [`c6cc034`](https://github.com/BerriAI/litellm/commit/c6cc0341f61836e74ee41a6afba197268e91fe99) Fix greptile reviews and mock test — _@Sameerlite_
- [`9a0a216`](https://github.com/BerriAI/litellm/commit/9a0a21619514ba11a22153ebd5f725cfd5d1fd30) Fix code qa issues — _@Sameerlite_
- [`316a742`](https://github.com/BerriAI/litellm/commit/316a742945494ae9784591d6ecb6f2d314a0428c) Fix greptile comments — _@Sameerlite_
- [`d02a70a`](https://github.com/BerriAI/litellm/commit/d02a70ab4e632f4bec3e7e5ab42c2e6ebf2fa74b) Fix greptile comments — _@Sameerlite_
- [`fc6865c`](https://github.com/BerriAI/litellm/commit/fc6865c3a3c460a3b01ba6ebe84718e5d5f0046f) Fix greptile comments — _@Sameerlite_
- [`303072d`](https://github.com/BerriAI/litellm/commit/303072dc44ed6a1b0d4b0d7decde03cf7af33e63) Fix greptile comments — _@Sameerlite_
- [`173695f`](https://github.com/BerriAI/litellm/commit/173695f5e0ed6e2e8933fbec341cfdc6162843dc) Fix greptile comments — _@Sameerlite_
- [`8db867c`](https://github.com/BerriAI/litellm/commit/8db867c51c2bb4a8995308439ad2a4f2cc474390) fix(routing): address state consistency and type safety issues — _@Sameerlite_
- [`e8fb776`](https://github.com/BerriAI/litellm/commit/e8fb7762b345d643a0431f8e9f5bd7b1a074d8d6) perf(routing): optimize team model checks and improve test coverage — _@Sameerlite_
- [`8aa58bd`](https://github.com/BerriAI/litellm/commit/8aa58bdcaaa3a67000ea0752e7f90c96f92d028d) fix(routing): prevent stale model_aliases from interfering with team routing — _@Sameerlite_
- [`298df75`](https://github.com/BerriAI/litellm/commit/298df75066bb5fda8f5852a5a8aacb127da2815d) fix(router): guard None model_info and deduplicate team index logic — _@Sameerlite_
- [`f5b7298`](https://github.com/BerriAI/litellm/commit/f5b72988540c2e195c1ed2c5abfdda4897e9e792) fix(management): query DB directly for sibling deployments on rename — _@Sameerlite_
- [`4f302f1`](https://github.com/BerriAI/litellm/commit/4f302f10d0522a3eccf458990402b23567509fdd) fix(router): prevent cross-team deployment leakage in fallback path — _@Sameerlite_
- [`ef9ea1f`](https://github.com/BerriAI/litellm/commit/ef9ea1f8f20b53cae0ff8050dee04591b6f053f8) fix(router): address Greptile P1/P2 performance issues — _@Sameerlite_
- [`248fb8b`](https://github.com/BerriAI/litellm/commit/248fb8bc90799de32f793173ff34f40562c3dae4) fix(router): address remaining Greptile P0/P1 issues — _@Sameerlite_
- [`7b5e7e0`](https://github.com/BerriAI/litellm/commit/7b5e7e05b1fb41e55a4f10adbc3082358aa76a84) fix(router): address Greptile review comments — _@Sameerlite_
- [`1835e9a`](https://github.com/BerriAI/litellm/commit/1835e9a25234b7e93cf704e88b2de6feba3e4f76) chore(team-routing): remove temporary candidate pool logs — _@Sameerlite_
- [`aeb932d`](https://github.com/BerriAI/litellm/commit/aeb932d707d2b7d7c2bc345b4a4869472fd2d850) fix(team-routing): keep team model routing on public names — _@Sameerlite_
- [`5534b40`](https://github.com/BerriAI/litellm/commit/5534b40ab3968a6d04da78bb64809b059612c7bc) fix(team-routing): use deterministic team model group names — _@Sameerlite_
- [`e635cee`](https://github.com/BerriAI/litellm/commit/e635cee712f7154c472f03c7ae4149ad167fc0d1) feat(fine-tuning): address greptile review feedback (greploop iteration 5) — _@Sameerlite_
- [`528bac5`](https://github.com/BerriAI/litellm/commit/528bac5a2734693e2a8877a878f77cb36ad559ad) feat(fine-tuning): address greptile review feedback (greploop iteration 4) — _@Sameerlite_
- [`d4d9168`](https://github.com/BerriAI/litellm/commit/d4d91684cf77df72d9d45bfd20d83ae3054c8796) address greptile review feedback (greploop iteration 3) — _@Sameerlite_
- [`a9c7b17`](https://github.com/BerriAI/litellm/commit/a9c7b17bfa47346dcf036e79bfb581551f09f96f) address greptile review feedback (greploop iteration 2) — _@Sameerlite_
- [`2484d20`](https://github.com/BerriAI/litellm/commit/2484d202f827e838b7d2550ae98d92fc5ef9f402) address greptile review feedback (greploop iteration 1) — _@Sameerlite_
- [`265f2eb`](https://github.com/BerriAI/litellm/commit/265f2eb09030a6bde25c86e94860530604c18167) feat(fine-tuning): fix Azure OpenAI fine-tuning job creation — _@Sameerlite_
- [`88ed4f9`](https://github.com/BerriAI/litellm/commit/88ed4f90ab4398f8ee2d6fdc3c390262a873b18c) docs(security_update_march_2026): publish safe versions - confirmed by veria labs — _@krrish-berri-2_
- [`a671275`](https://github.com/BerriAI/litellm/commit/a671275f5c5b0e1fb1adacdf3b6ef779aaa5d56c) ci: add zizmor github action — _@krrish-berri-2_
- [`226e185`](https://github.com/BerriAI/litellm/commit/226e18534e06b78a5e0555ff8d7e01043191ff8b) Add correct pricing — _@Sameerlite_
- [`06c8476`](https://github.com/BerriAI/litellm/commit/06c84765442854286cf8bbc445c46a7243b836bc) feat(gemini): add gemini-3.1-flash-live-preview to model cost map — _@Sameerlite_
- [`dfb5433`](https://github.com/BerriAI/litellm/commit/dfb543369b22880541f322d67f464c9df82c39fa) fix: address zizmor comments — _@krrish-berri-2_
- [`b20cff8`](https://github.com/BerriAI/litellm/commit/b20cff86731e788030972b3892ffb96e954564a6) Merge pull request #24654 from BerriAI/litellm_publish_to_pypi_migrate — _@yuneng-berri_
- [`ba8455a`](https://github.com/BerriAI/litellm/commit/ba8455a3beeb26ebb99fef2c93b72a8f224f3fe9) [Infra] Migrate PyPI publishing from CircleCI to GitHub Actions OIDC — _@yuneng-berri_
- [`92654ba`](https://github.com/BerriAI/litellm/commit/92654bad37d159dc08daf58b75b0bd0586edab44) Refactor _supports_native_structured_outputs to use standard supports_* utility pattern — _@ndgigliotti_
- [`b45ef7f`](https://github.com/BerriAI/litellm/commit/b45ef7f6b9848f669c8bd177b8c047f1b67a9d8a) Keep multimodal gemini-embedding-2-preview entry to align with #23599 — _@ndgigliotti_
- [`0ef8eb6`](https://github.com/BerriAI/litellm/commit/0ef8eb612106f4d20d268a8c585decbd76676b15) Add test assertion for deepseek.v3-v1:0 native structured output — _@ndgigliotti_
- [`d7e55bf`](https://github.com/BerriAI/litellm/commit/d7e55bf105e69cf011175c2f5849f276c58806f2) Fix test state leakage: restore env and model_cost after each test — _@ndgigliotti_
- [`ed06dde`](https://github.com/BerriAI/litellm/commit/ed06dded199fa38fc2d2ef6165c25608020b1fa3) Remove native structured output flag from minimax-m2.1, kimi-k2.5, qwen3-coder-next — _@ndgigliotti_
- [`a7ebc72`](https://github.com/BerriAI/litellm/commit/a7ebc72c26b5937cc8f0f7b3f88b8326333cf784) Add native structured output flag for deepseek.v3-v1:0 — _@ndgigliotti_
- [`aba027b`](https://github.com/BerriAI/litellm/commit/aba027beed9aab1d2923120f7bef8ebc7adc33c3) Remove native structured output flag from models broken on Bedrock — _@ndgigliotti_
- [`cb66672`](https://github.com/BerriAI/litellm/commit/cb66672017e4e091cd05622b00e430425afdfddc) Replace hardcoded Bedrock native structured output model set with cost JSON lookup — _@ndgigliotti_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
