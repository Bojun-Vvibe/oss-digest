# BerriAI/litellm — 2026-03-09

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-08T23:59:59.000Z → 2026-03-09T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline change is a new **audit log export to external callbacks** (S3, Datadog, etc.) via a pluggable callback system, so audit events on keys/teams/users/models are no longer trapped in the Prisma DB (`c1b3640`). Closely related on the auth side, **JWT and OAuth2 auth can now coexist** on the same proxy instance, with token-format-based routing (#23153).

New provider/model coverage landed for **Serper (serper.dev) as a search provider** (#23112), **Qwen3.5 series on OpenRouter** (`9c07325`, plus a max_tokens typo fix `2683fa7`), and **Gemini 3.1 Flash Image Preview pricing** (#22382). The image edit API gained an `input_fidelity` parameter ("high"/"low") to control edit effort (`2ea2660`).

Notable fixes:
- **Cost panel showing 0** in the tag daily activity endpoint — `compute_tag_metadata_totals` was deduping by request_id and has been removed (`7ffaa6f`, by mubashir1osmani).
- **Batch retrieve** wasn't setting `model_id`, leaving `output_file_id` raw (#23194).
- **gpt-5.4-pro** mode set to `responses` instead of `chat` to stop 404s on `/v1/chat/completions` (#23143).
- **Vertex AI Gemini** `extra_body` forwarding was leaking LiteLLM-internal keys (cache, tags) into requests — now stripped (`4dc277e`).
- **Responses API**: parallel `function_call` items now merge into a single assistant message (#23116); `reasoning_effort` summary field preserved when passed as dict (`8cf80a1`).
- **AgentCore**: handle JSON responses from agents using sync return (#23165).
- **FK violation on user delete** fixed (#23115).

Worth flagging: the **Prisma DB pool / engine health Prometheus metrics** feature (#22655) merged earlier was **reverted** the same day (#23190, `8ecac84`) — anyone tracking that should hold off.

Infra/UI: proxy_extras bumped to 0.4.53 (#23188); enterprise bump workflow rewritten to open a PR rather than push to protected main (#23142); usage page gained a timezone picker and input/output + cache token components (`0da56be`, `c3fd70a`); CI fixes for Chocolatey v2.5.1 interactive prompts (#23179) and a flaky watsonx prompt test (#23197). No issues, PRs, or releases were recorded in the window — activity was entirely commit-driven.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`4c3f873`](https://github.com/BerriAI/litellm/commit/4c3f873bde4ed0d3fc2d9fd7fc61617e7cc52b23) Merge pull request #23198 from BerriAI/litellm_fix_nova_pro_max_tokens — _@yuneng-jiang_
- [`4c5659f`](https://github.com/BerriAI/litellm/commit/4c5659ff30566dfda1a30d0d9c364d763817b6f1) Merge pull request #23199 from BerriAI/doc_per_model_input_tokenc_check — _@yuneng-jiang_
- [`dda0146`](https://github.com/BerriAI/litellm/commit/dda0146a6679760013896d2bf65ac6e34079b90a) Merge pull request #23197 from BerriAI/litellm_fix_flaky_watsonx_prompt_test — _@yuneng-jiang_
- [`2ea2660`](https://github.com/BerriAI/litellm/commit/2ea2660ba530013df8d7b57ce0b1d34614a6b40f) feat(images): support input_fidelity parameter for image edit API — _@Chesars_
- [`7ffaa6f`](https://github.com/BerriAI/litellm/commit/7ffaa6f74e531f8fcc50769fdb8100a5f82da44f) fix(tag-usage): remove broken compute_tag_metadata_totals causing cost panel to show 0 — _@mubashir1osmani_
- [`d719c8a`](https://github.com/BerriAI/litellm/commit/d719c8a53c38f3caf5936a2e81d97d3e383d2070) Merge branch 'main' into litellm_fix_nova_pro_max_tokens — _@yuneng-jiang_
- [`2a836c7`](https://github.com/BerriAI/litellm/commit/2a836c710389aac402c714e7131009c422c73a34) Fix Claude Agent SDK E2E test for Nova Pro max_tokens limit — _@yuneng-jiang_
- [`5534f77`](https://github.com/BerriAI/litellm/commit/5534f7731428cd92020c064daba29a6abd352386) doc improvement — _@shivam_
- [`ffd1eb1`](https://github.com/BerriAI/litellm/commit/ffd1eb18e0129f9b5e7899514d777c428846f7ad) Merge remote main and resolve conflicts — _@yuneng-jiang_
- [`74ed6a1`](https://github.com/BerriAI/litellm/commit/74ed6a16acab45271a3d02a0c9822e3405f40de2) Fix flaky test_watsonx_gpt_oss_prompt_transformation — _@yuneng-jiang_
- [`a5ad414`](https://github.com/BerriAI/litellm/commit/a5ad414ae0e1264e947276c9f64e80f3dd25d6fe) Merge pull request #23194 from BerriAI/litellm_/recursing-blackburn — _@yuneng-jiang_
- [`4888a31`](https://github.com/BerriAI/litellm/commit/4888a31e4f13aa42717bb18a6d4ca495264353f4) Fix batch retrieve not setting model_id, causing output_file_id to stay raw — _@yuneng-jiang_
- [`db77976`](https://github.com/BerriAI/litellm/commit/db77976b4ea6c6208916775be049dc49367cc82c) Merge pull request #23192 from BerriAI/litellm_/pedantic-easley — _@yuneng-jiang_
- [`29ca052`](https://github.com/BerriAI/litellm/commit/29ca052064a438665b0c9381994f492410bd6a49) Merge remote main, resolve conflict keeping new unit tests — _@yuneng-jiang_
- [`b7ac688`](https://github.com/BerriAI/litellm/commit/b7ac688b2b5c6ef39aa73e4d9760a31b6aa3488f) Replace SearXNG integration tests with unit tests for request/response transformation — _@yuneng-jiang_
- [`507c772`](https://github.com/BerriAI/litellm/commit/507c77237075a0a1f1a235b9c210ca2b182c8f81) Merge pull request #23190 from BerriAI/revert-22655-feat/prisma-metrics-collector — _@yuneng-jiang_
- [`8ecac84`](https://github.com/BerriAI/litellm/commit/8ecac847896d922d79b5527e296f1be1304ea879) Revert "feat(proxy): add Prisma DB pool and engine health metrics to Promethe…" — _@yuneng-jiang_
- [`c9434a8`](https://github.com/BerriAI/litellm/commit/c9434a80128e072834a57a2b45d1c985621e0d47) chore: regenerate poetry.lock to match pyproject.toml (#23189) — _@github-actions[bot]_
- [`a5e144c`](https://github.com/BerriAI/litellm/commit/a5e144c41939d36e01c3805315a1da5bdad2a501) Merge pull request #23188 from BerriAI/mar9_bump_proxy_extras — _@yuneng-jiang_
- [`a9cc39b`](https://github.com/BerriAI/litellm/commit/a9cc39b79119cc0ec5af28b9db84a260edca5659) build artifacts — _@yuneng-jiang_
- [`bd91428`](https://github.com/BerriAI/litellm/commit/bd914281e5828e37f0b4d254e8e0bf9aeb91a097) bump: version 0.4.52 → 0.4.53 — _@yuneng-jiang_
- [`1a5e215`](https://github.com/BerriAI/litellm/commit/1a5e215f08078c40062600a0f3f9d9d0ff8eb183) Merge pull request #23186 from BerriAI/litellm_doc_max_budget_per_session_ttl — _@yuneng-jiang_
- [`b4e78ac`](https://github.com/BerriAI/litellm/commit/b4e78ac7b46e648029c220f237b65a5cfaa3b141) Merge branch 'main' into litellm_doc_max_budget_per_session_ttl — _@yuneng-jiang_
- [`ea4e2bd`](https://github.com/BerriAI/litellm/commit/ea4e2bda8f420f6138932c0c90d6bb9cc682391c) Document LITELLM_MAX_BUDGET_PER_SESSION_TTL env var — _@yuneng-jiang_
- [`be9d179`](https://github.com/BerriAI/litellm/commit/be9d1798b2b13665df00b16683065e9a57d4675a) Merge pull request #23182 from BerriAI/litellm_/exciting-swanson — _@yuneng-jiang_
- [`379ce1a`](https://github.com/BerriAI/litellm/commit/379ce1aae533929e0f03a26c04da2136fe8274cf) [Fix] Add output_cost_per_image_token_batches to model pricing schema test — _@yuneng-jiang_
- [`729f32d`](https://github.com/BerriAI/litellm/commit/729f32d6d50c231d81f98a2af5c2b1866d2ad873) Merge pull request #23179 from BerriAI/litellm/intelligent-wilbur — _@yuneng-jiang_
- [`af7609d`](https://github.com/BerriAI/litellm/commit/af7609d856d51fe589b3f57764636185bab39d67) fix: putting new cards in the same place as the current ones, fixing spacing — _@ryan-crabbe_
- [`4cc7e76`](https://github.com/BerriAI/litellm/commit/4cc7e76fbe425cd1d426da82be5738c15ad85370) Fix Chocolatey v2.5.1 interactive prompt in Windows CI job — _@yuneng-jiang_
- [`5610945`](https://github.com/BerriAI/litellm/commit/5610945830c9d2aba48995206328d4bc0aaba757) Merge pull request #23177 from BerriAI/litellm_fix_lint_error — _@yuneng-jiang_
- [`169e76c`](https://github.com/BerriAI/litellm/commit/169e76ccf90df98c4cd014b2df10b2a537f99a52) Remove duplicate jwt_key_mapping_router import — _@yuneng-jiang_
- [`c3fd70a`](https://github.com/BerriAI/litellm/commit/c3fd70a4b01b0664b67ce3f087ce82c78ef18ed9) feat: usage page components to view the input/output tokens and cache read/write tokens — _@ryan-crabbe_
- [`1103a8c`](https://github.com/BerriAI/litellm/commit/1103a8c620ea5ff25c0bb06e08c5c1ebef366d58) Merge pull request #23171 from BerriAI/litellm_survey_vitest_tests — _@yuneng-jiang_
- [`f334956`](https://github.com/BerriAI/litellm/commit/f334956fcfaf4c81ea89ee15f14a7846037e5c73) fixes for duplicate value + missing timezones — _@ryan-crabbe_
- [`0da56be`](https://github.com/BerriAI/litellm/commit/0da56beb79c6db56720380e062359e9922939e0f) feat: adding a timezone picker to the usage page, to be able to view by timezone, backend already supports this just ui change — _@ryan-crabbe_
- [`200910f`](https://github.com/BerriAI/litellm/commit/200910f7e612dda1d6dc6ca78e3d4cdc66d5de31) Merge branch 'BerriAI:main' into main — _@mubashir1osmani_
- [`994976c`](https://github.com/BerriAI/litellm/commit/994976ce6f77bb0c51421c687fcab2a906c218c7) [Test] UI - Survey: add Vitest tests for ClaudeCodeModal, ClaudeCodePrompt, SurveyPrompt, and SurveyModal — _@yuneng-jiang_
- [`c47f77a`](https://github.com/BerriAI/litellm/commit/c47f77a34866002d67c11a0d78f0823c0de5b7fe) fix(agentcore): handle JSON responses from agents using sync return (#23165) — _@michelligabriele_
- [`c1b3640`](https://github.com/BerriAI/litellm/commit/c1b36403104224a888b939429921707aced0154c) feat: add audit log export to external callbacks (S3, Datadog, etc.) — _@yuneng-jiang_
- [`9b15f63`](https://github.com/BerriAI/litellm/commit/9b15f639a4a6edc37a6096d258b8e605f94dae4b) fix(responses): merge parallel function_call items into single assistant message (#23116) — _@Varad2001_
- [`e21b062`](https://github.com/BerriAI/litellm/commit/e21b06265a32e5f0bfdd2f7df69c4f1d7de2c61f) fix fkey violation on deleting user (#23115) — _@RheagalFire_
- [`0bb26c3`](https://github.com/BerriAI/litellm/commit/0bb26c3f1b087ed3dde217c129e28377cc115aa1) feat(proxy): add Prisma DB pool and engine health metrics to Prometheus (#22655) — _@ohadgur_
- [`df2e1bc`](https://github.com/BerriAI/litellm/commit/df2e1bca469eddddab46e6ac2d4b21390129c541) feat: allow JWT and OAuth2 auth to coexist on the same instance (#23153) — _@milan-berri_
- [`b1a6ba7`](https://github.com/BerriAI/litellm/commit/b1a6ba77119031937ea6c373607233b02809a5c6) feat(search): add Serper (serper.dev) as search provider (#23112) — _@Isydmr_
- [`36e04b6`](https://github.com/BerriAI/litellm/commit/36e04b6efee9e93abbf7804ef27ea4ed60b76a67) fix(tests): restore litellm_params=None on mock agent in a2a invoke test (#23125) — _@joereyna_
- [`0bc1bd6`](https://github.com/BerriAI/litellm/commit/0bc1bd6871a423677c599ba6a75e9b2f367cd9a6) fix(tests): use AsyncMock for prisma find_unique in agent get-by-id test (#23122) — _@joereyna_
- [`ee3ecb5`](https://github.com/BerriAI/litellm/commit/ee3ecb59941211a36c2adf14850b5add8c8c81f7) fix(openai): preserve reasoning_effort summary + fix xhigh/none guards for dict inputs — _@Sameerlite_
- [`8cf80a1`](https://github.com/BerriAI/litellm/commit/8cf80a14d95f871485130587f5ffffcb6d58d181) fix(openai): preserve reasoning_effort summary field for Responses API — _@Sameerlite_
- [`ca4d4a0`](https://github.com/BerriAI/litellm/commit/ca4d4a01880ddd70179d9454d29905719e6761af) Merge pull request #23143 from giulio-leone/fix/gpt-5-4-pro-support — _@Sameerlite_
- [`20d9115`](https://github.com/BerriAI/litellm/commit/20d911599c356a9813aa3fdab6f4415d78db85ef) Merge pull request #23145 from BerriAI/litellm_publish_enterprise_pr_workflow — _@Sameerlite_
- [`b28d6ec`](https://github.com/BerriAI/litellm/commit/b28d6eca6715f8d6cb3220fefe339fa4a21e6ebb) Merge pull request #23144 from BerriAI/bump/enterprise-0.1.34 — _@Sameerlite_
- [`0ee4d90`](https://github.com/BerriAI/litellm/commit/0ee4d90d7e0d63368cf28d010ac9d864cf1af83a) Fix enterpise bump yml — _@Sameerlite_
- [`6ff6931`](https://github.com/BerriAI/litellm/commit/6ff693149d87481ccb2a3f0dd84cb5c2291653e6) bump: litellm-enterprise 0.1.33 → 0.1.34 — _@github-actions[bot]_
- [`556c648`](https://github.com/BerriAI/litellm/commit/556c64875ec8f27cb7cf87133b51e40b0d470466) fix(models): set gpt-5.4-pro mode to responses instead of chat — _@giulio-leone_
- [`7c668a8`](https://github.com/BerriAI/litellm/commit/7c668a80211342b9816cb54dc6b5aad838e29edc) Merge pull request #23142 from BerriAI/litellm_publish_enterprise_pr_workflow — _@Sameerlite_
- [`4d92c72`](https://github.com/BerriAI/litellm/commit/4d92c720c79d508d58bed1803c9ada27f5ff0b5c) Fix enterpise bump yml — _@Sameerlite_
- [`0d8880a`](https://github.com/BerriAI/litellm/commit/0d8880ab9f09a84e71181855b76cbfa79c26a0f8) chore: fix — _@FacerAin_
- [`a52a4fd`](https://github.com/BerriAI/litellm/commit/a52a4fd28ac949cafd4fb6ad104a229681cd7cca) fix(enterprise): create PR for version bump instead of pushing to protected main — _@Sameerlite_
- [`ba25d65`](https://github.com/BerriAI/litellm/commit/ba25d652e3c15271a2b8a46b3f6e81f493fc4ca0) Merge pull request #23133 from BerriAI/litellm_fix_cicd_090326 — _@Sameerlite_
- [`2683fa7`](https://github.com/BerriAI/litellm/commit/2683fa714c14154d3d8d449da44ea766afe42fb6) fix: typo on max_output_tokens and max_tokens from qwen3.5 series — _@FacerAin_
- [`9c07325`](https://github.com/BerriAI/litellm/commit/9c07325396d4058974b0663968eb1e189a1622da) feat: add qwen3.5 series for openrouter — _@FacerAin_
- [`a8301d5`](https://github.com/BerriAI/litellm/commit/a8301d56142084e9af2be80d07c79672a325d122) Fix: varaitions endpoint geting 401 — _@Sameerlite_
- [`4b1929c`](https://github.com/BerriAI/litellm/commit/4b1929ce9344ea5a2a998266c1025ccb14aed3f0) Fix mistral ocr failing test — _@Sameerlite_
- [`b20c0af`](https://github.com/BerriAI/litellm/commit/b20c0afb64b0e3af82929f20e258c215b37b386f) Fix test_anthropic_messages_openai_model_streaming_cost_injection & openrouter image gen — _@Sameerlite_
- [`4dc277e`](https://github.com/BerriAI/litellm/commit/4dc277e427a14c437a7a23c4db1f59853af6c287) fix(vertex_ai): strip LiteLLM-internal keys from extra_body before merging to Gemini request — _@Sameerlite_
- [`28b312f`](https://github.com/BerriAI/litellm/commit/28b312f87a3f5da94ae4ff0deaf55cefc417083d) Merge pull request #22382 from davidvpe/add-gemini-3.1-flash-image-preview — _@Sameerlite_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
