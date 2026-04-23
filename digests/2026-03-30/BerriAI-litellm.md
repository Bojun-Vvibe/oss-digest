# BerriAI/litellm — 2026-03-30

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-29T23:59:59.000Z → 2026-03-30T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day was dominated by CI/test stabilization work on `main`, with no merged PRs from external contributors, no releases, and no new issues or PRs surfaced in the window. The most consequential change is security-related: the repo adopted the **OpenSSF Scorecard** via PR #24792, adding a `scorecard.yml` workflow (commits 05134fc, c154d56) — worth a quick read if you care about the project's supply-chain posture.

The bulk of activity is a sustained CI cleanup push by `yuneng-berri` and `ishaan-jaff`, mostly merged through small fix PRs:

- **#24820** (c569d1f): corrects a kwarg-name regression from PR #24755 where `azure_api_key_header` → `AZURE_AI_API_KEY_header` was applied to tests but not the actual function signatures in `test_user_api_key_auth` — a real bug, not just a test fix.
- **#24814** (f2deefe): WatsonX tests need `WATSONX_URL`/`WATSONX_PROJECT_ID` in CI even when fully mocked, because provider validation runs before the mock layer.
- **#24817** (bcfa535): bumps `gemini-2.0-flash` → `gemini-2.5-flash` in integration tests since 2.0-flash is no longer available to new users (404s).
- **#24812** (4332a0b): renames a router test file so `router_code_coverage.py` (which only scans files with "router" in the name) actually picks it up — a latent coverage gap.
- **#24803** (1757e1d): mypy fixes across responses transformation, spend tracking, and PagerDuty; notably adds the missing `user_api_key_project_alias` to the failed-response PagerDuty event constructor (sibling to a previously fixed hanging-response path) and adds a typed `reasoning_items` field to `ChatCompletionAssistantMessage`.
- **#24802** (5cec43c): refactors A2A and Anthropic guardrail output handlers to silence PLR0915.
- **#24805** (0ccaff8): mocks DeepInfra completion tests that were hitting the real API and failing auth.

A separate thread from `krrish-berri-2` includes OIDC JWT token handling in CI (4c00a14) and setup-wizard fixes (5671baa), plus PR #24800 (Vanta announcement docs). The flurry of `ishaan-jaff` test-name commits (Snowflake, Cloudflare, GCS pub/sub, Azure blob, Flux2 image edit, GPT-4-turbo) appears to be incremental test stabilization rather than feature work.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`443566d`](https://github.com/BerriAI/litellm/commit/443566d4f5e31259f74325155e726047b79c4f0d) test fixes — _@ishaan-jaff_
- [`28afbc1`](https://github.com/BerriAI/litellm/commit/28afbc152fb444c934143e5207c42d49aeeda008) test_async_gcs_pub_sub_v1 — _@ishaan-jaff_
- [`42efaa5`](https://github.com/BerriAI/litellm/commit/42efaa597e4265e05617640872fd06ffd47610e3) test fix — _@ishaan-jaff_
- [`a449e32`](https://github.com/BerriAI/litellm/commit/a449e322c0881d589ca1a0720302e8ad0138c1d4) test_completion_cloudflare — _@ishaan-jaff_
- [`3a0ebda`](https://github.com/BerriAI/litellm/commit/3a0ebda867632275cf7bef79eef51cb77d43f063) test snowflake — _@ishaan-jaff_
- [`98de60e`](https://github.com/BerriAI/litellm/commit/98de60e7414f3f391227c65895cfb3cfbabae73d) test_completion_gpt4_turbo — _@ishaan-jaff_
- [`37bcc32`](https://github.com/BerriAI/litellm/commit/37bcc3252ff1bc02e609fb49bd75b6764b0d9ed7) test_completion_gpt4_turbo — _@ishaan-jaff_
- [`c7e2bfc`](https://github.com/BerriAI/litellm/commit/c7e2bfc577ba6dd217248aaab144e3f98441fcb9) fix: cleanup tests — _@krrish-berri-2_
- [`7b532fd`](https://github.com/BerriAI/litellm/commit/7b532fda6685d577d77dba8866176d61126cf548) test: cleanup tests — _@krrish-berri-2_
- [`899b571`](https://github.com/BerriAI/litellm/commit/899b5710d18353166bcbbc3c5e0c456c267ecfa5) TestAzureAIFlux2ImageEdit — _@ishaan-jaff_
- [`4c00a14`](https://github.com/BerriAI/litellm/commit/4c00a14ce08552591ded0248f3bb91dfb4f03113) fix: fix ci/cd + handle oidc jwt tokens — _@krrish-berri-2_
- [`e8c860d`](https://github.com/BerriAI/litellm/commit/e8c860d45060b05ff7ad09e8d5e57a6812e3a7c4) test fix — _@ishaan-jaff_
- [`bae3dcd`](https://github.com/BerriAI/litellm/commit/bae3dcde13577e345bd4a333deb14f59b73a960c) test_get_credentials_from_env — _@ishaan-jaff_
- [`431782c`](https://github.com/BerriAI/litellm/commit/431782c3fed5160b1ab3769864fca9cb9e30b1d8) test azure blob storage — _@ishaan-jaff_
- [`c569d1f`](https://github.com/BerriAI/litellm/commit/c569d1f867fcf1d5025975a27f5313f596b10d12) Merge pull request #24820 from BerriAI/litellm_fix_test_kwarg_name — _@yuneng-berri_
- [`dd75434`](https://github.com/BerriAI/litellm/commit/dd75434bbe2a1fe7b6ba9a5b549abca802a3f48f) remove - outdated test — _@ishaan-jaff_
- [`87debe6`](https://github.com/BerriAI/litellm/commit/87debe6254e300d7b5fcc424f843d135b68e4407) test_litellm_overhead_non_streaming — _@ishaan-jaff_
- [`6522d28`](https://github.com/BerriAI/litellm/commit/6522d282b5329b43e12ff622d425d5959ee875d9) [Fix] Correct kwarg name in test_user_api_key_auth tests — _@yuneng-berri_
- [`f2deefe`](https://github.com/BerriAI/litellm/commit/f2deefe45361c84544d022aa331bad33fc5d6d11) Merge pull request #24814 from BerriAI/litellm_/agitated-montalcini — _@yuneng-berri_
- [`4332a0b`](https://github.com/BerriAI/litellm/commit/4332a0bf0a0267234fea5ac37f7cbf089200be6a) Merge pull request #24812 from BerriAI/litellm_/objective-mendel — _@yuneng-berri_
- [`bcfa535`](https://github.com/BerriAI/litellm/commit/bcfa5355ac7aaab057676601a6da68ba669df234) Merge pull request #24817 from BerriAI/litellm_/strange-jackson — _@yuneng-berri_
- [`b39748d`](https://github.com/BerriAI/litellm/commit/b39748daf2dbbd8db75619934ac31f3172c67aa6) [Fix] Update gemini-2.0-flash to gemini-2.5-flash in test_gemini integration tests — _@yuneng-berri_
- [`123052e`](https://github.com/BerriAI/litellm/commit/123052ecf8665dcd71c9ded6e7c684fe599e2a63) [Fix] WatsonX tests failing on CI due to missing env vars — _@yuneng-berri_
- [`4f03273`](https://github.com/BerriAI/litellm/commit/4f0327328551cc2192441ea83420b70a087b6338) Merge remote-tracking branch 'origin/main' into litellm_/objective-mendel — _@yuneng-berri_
- [`fc32f91`](https://github.com/BerriAI/litellm/commit/fc32f91ffd405bd6b70c8b7ab608e0a74f017cfb) [Fix] Rename test file so router code coverage check detects it — _@yuneng-berri_
- [`1757e1d`](https://github.com/BerriAI/litellm/commit/1757e1dc4a07d62adff327f0dd2223255a9190cb) Merge pull request #24803 from BerriAI/litellm_/affectionate-gauss — _@yuneng-berri_
- [`5cec43c`](https://github.com/BerriAI/litellm/commit/5cec43cbb621dfd3aa3faa63d7c724c8c4fa0aa5) Merge pull request #24802 from BerriAI/litellm_/modest-easley — _@yuneng-berri_
- [`0ccaff8`](https://github.com/BerriAI/litellm/commit/0ccaff8ed9a4ff4cb2937dea7f80377bbd4cda46) Merge pull request #24805 from BerriAI/litellm_/compassionate-kirch — _@yuneng-berri_
- [`310d61b`](https://github.com/BerriAI/litellm/commit/310d61ba70a7310b24064c19da0852519ac4bee4) [Fix] Replace cast with proper typing for reasoning_items — _@yuneng-berri_
- [`868468d`](https://github.com/BerriAI/litellm/commit/868468db1489a51764e7205b0f80802883f81a6b) [Test] Mock DeepInfra completion tests to avoid real API calls — _@yuneng-berri_
- [`0f785f9`](https://github.com/BerriAI/litellm/commit/0f785f988b752afe5044718b8817835a310b8b69) [Fix] Add missing user_api_key_project_alias to failed-response PagerDuty event — _@yuneng-berri_
- [`f08d281`](https://github.com/BerriAI/litellm/commit/f08d281641e21eced9cf146d7f524093c5c2e567) [Fix] Resolve mypy type errors across 3 files — _@yuneng-berri_
- [`92e7aaa`](https://github.com/BerriAI/litellm/commit/92e7aaa0019ef7c9c28131a87ff8c4e2fd715808) [Refactor] Extract helper methods in guardrail handlers to fix PLR0915 — _@yuneng-berri_
- [`a278933`](https://github.com/BerriAI/litellm/commit/a278933f188ae24c7c86054184cde2375d273558) docs: cleanup — _@krrish-berri-2_
- [`c154d56`](https://github.com/BerriAI/litellm/commit/c154d5668b83fb441a2650142f404078d59e5c4c) Merge pull request #24792 from BerriAI/ossf-scorecord — _@krrish-berri-2_
- [`1eaf8ed`](https://github.com/BerriAI/litellm/commit/1eaf8ed2d5ae551f7d47ee9289eee2295b3cd286) Merge pull request #24800 from BerriAI/litellm_vanta_announcement — _@krrish-berri-2_
- [`0128925`](https://github.com/BerriAI/litellm/commit/01289252816d9ca41cab12b07af5265560680e0b) docs: cleanup image — _@krrish-berri-2_
- [`bc89ad2`](https://github.com/BerriAI/litellm/commit/bc89ad28ab7f55517f7d95378150034b3998b4c4) docs: cleanup — _@krrish-berri-2_
- [`5671baa`](https://github.com/BerriAI/litellm/commit/5671baaadf7d1ce3e7f95a7371fe71323d97dea9) fix: fix setup wizard — _@krrish-berri-2_
- [`05134fc`](https://github.com/BerriAI/litellm/commit/05134fc70bb086ea775b5e3bf577f167e4e494fd) Create scorecard.yml — _@krrish-berri-2_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
