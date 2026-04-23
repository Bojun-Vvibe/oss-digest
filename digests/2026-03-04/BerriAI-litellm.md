# BerriAI/litellm — 2026-03-04

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-03T23:59:59.000Z → 2026-03-04T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy day of commit activity (no merged PRs/issues/releases in window) dominated by **new provider integrations and a Responses-API token-counting feature**. Headline change: `feat(openai): add OpenAI token counting API support and public litellm.acount_tokens()` (43d2a19), wiring `POST /v1/responses/input_tokens` plus a public async tokenizer, with follow-ups to fall back to local tokenizer on provider failure and add `ProxyException` handling on the count_tokens endpoint (d33dec8, 28a20c1).

Major new provider work from Chesars:
- **Black Forest Labs**: native image generation and image edit support for Flux/Kontext models, including a handler/transformation refactor, kontext models added to image-gen path, URL/file-path input handling, model registry pricing, and docs (e0af575, cd73181, 88dc0c1, 727fd76, f132f2c, 00cf955).
- **Mistral Voxtral audio transcription** via `MistralAudioTranscriptionConfig` and docs, merged as #22801 (086a58a, 424c433); includes a fix to serialize bool provider params as lowercase (354f44c).
- **Gemini** fixes: detail→media_resolution mapping for Gemini 2.x images merged as #17662 (c1a8bdd), gemini-live endpoint/mode corrections merged as #22814 (028dd3f), and a long-standing fix (#17550) where user-specified async clients were overwritten by `module_level_aclient` during streaming (872554d).

Proxy/UI:
- TTFT column and metric added to request logs UI (#22819, b7f43d4).
- Internal users/team admins can now select guardrails when creating keys (#22816, 09e1a06).
- JWT-to-virtual-key mapping endpoints + docs landing from Harshit28j (63459d6, 2f15686), with token-redaction hardening from Greptile review.
- Responses websocket support across all providers merged (#22771).

Reliability fixes worth noting: streaming reasoning→reasoning_content mapping for gpt-oss/Cerebras (#22803), Vertex AI Claude content truncation when finish_reason races content (fb8bd60), graceful repair of truncated tool-call JSON (4d97818), and WebSearch interception failure with thinking+SpendLimit (12691dc). Also `feat: add missing bedrock models` (#22810) and Azure content enhancement (#22581).

Plus a large CI/lint cleanup wave from jquinter (#22775–#22789): schema migration for `LiteLLM_ToolTable`, openai version pin removal, tenacity guards for Azure batch tests, and several flaky-test fixes. Start with 43d2a19 (token counting) and the BFL/Mistral provider commits.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`92b0585`](https://github.com/BerriAI/litellm/commit/92b0585f2e95623fa1d946c9773247e091b8f2a1) Update litellm/llms/openai/responses/count_tokens/handler.py — _@Chesars_
- [`bbec0f7`](https://github.com/BerriAI/litellm/commit/bbec0f76578fdf64723b3f7f69b7075278c678ca) Update litellm/proxy/response_api_endpoints/endpoints.py — _@Chesars_
- [`13dbcb1`](https://github.com/BerriAI/litellm/commit/13dbcb182cf1a68d49ea7654d06d47cf065e1fdb) Update transformation.py — _@Chesars_
- [`7512f7d`](https://github.com/BerriAI/litellm/commit/7512f7dfc319297b5fc57f39a07cd0f8a4e34f04) fix(lint): resolve PLR0915 too-many-statements in 4 files — _@jquinter_
- [`b7f43d4`](https://github.com/BerriAI/litellm/commit/b7f43d411a3ed9a7dc0f2550dd072f666075a5df) feat(ui): add time to first token (TTFT) to logs (#22819) — _@ishaan-jaff_
- [`063a1a4`](https://github.com/BerriAI/litellm/commit/063a1a437a8afd9c392c386e414accf42500a628) Update litellm/proxy/management_endpoints/jwt_key_mapping_endpoints.py — _@Harshit28j_
- [`0909eee`](https://github.com/BerriAI/litellm/commit/0909eee7444c70c778d3c19f56a9daa2873a9fcb) add missing bedrock models (#22810) — _@marty-sullivan_
- [`1fb38df`](https://github.com/BerriAI/litellm/commit/1fb38dfa311e5aab6c29ada4f43590544624eec4) Update litellm/llms/openai/responses/count_tokens/transformation.py — _@Chesars_
- [`09e1a06`](https://github.com/BerriAI/litellm/commit/09e1a06f47af2f32229254b05c6afcc633b8cf2e) fix(ui): allow internal users/team admins to select guardrails when creating keys (#22816) — _@ishaan-jaff_
- [`028dd3f`](https://github.com/BerriAI/litellm/commit/028dd3fddce9200a8c0b8dcd34b6264ea6865df1) Merge pull request #22814 from Chesars/fix/gemini-live-supported-endpoints — _@Chesars_
- [`d346f5c`](https://github.com/BerriAI/litellm/commit/d346f5cfabc10c0880613289c619e58c964f827b) Merge pull request #17550 from Chesars/fix/gemini-async-streaming-custom-client-17148 — _@Chesars_
- [`59c64cb`](https://github.com/BerriAI/litellm/commit/59c64cb6334b4f0d936c1163689eb4998cb00f31) Update litellm/proxy/response_api_endpoints/endpoints.py — _@Chesars_
- [`91928d9`](https://github.com/BerriAI/litellm/commit/91928d9d674d5746a3de9ee990e5fe6317c90a1b) Update litellm/llms/openai/responses/count_tokens/transformation.py — _@Chesars_
- [`0e1a633`](https://github.com/BerriAI/litellm/commit/0e1a633e30a07886bc5c33d55d98275ef113b087) fix: update mode to realtime for gemini-live models — _@Chesars_
- [`ddf9598`](https://github.com/BerriAI/litellm/commit/ddf9598f30c19d56fefa8702c49c0fb83eec5107) fix: use /v1/realtime for gemini/ provider live model — _@Chesars_
- [`20a41a6`](https://github.com/BerriAI/litellm/commit/20a41a67d605450ee2f0b0caa5656b520661ebe8) fix: update gemini-live model supported_endpoints to /vertex_ai/live — _@Chesars_
- [`bca8730`](https://github.com/BerriAI/litellm/commit/bca8730041d9335c9db4552c26dc0599e073c45b) Merge remote-tracking branch 'upstream/main' — _@Chesars_
- [`36e63bd`](https://github.com/BerriAI/litellm/commit/36e63bd1eebbacbf8a5034536167a8174b7af09a) Update litellm/proxy/management_endpoints/jwt_key_mapping_endpoints.py — _@Harshit28j_
- [`28a20c1`](https://github.com/BerriAI/litellm/commit/28a20c180fca9531879c969ddd4bc656bcf185b8) fix: add ProxyException handling to count_tokens endpoint — _@Chesars_
- [`872554d`](https://github.com/BerriAI/litellm/commit/872554df420d01834563957a7d11da803f7d411d) Fix: User specified async client ignored with Gemini streaming+async — _@Chesars_
- [`c185652`](https://github.com/BerriAI/litellm/commit/c1856525773ed5a7116ab48fcdaac61748edf9aa) fix: avoid chat-format fallback for empty input_items, remove duplicate instructions and elif — _@Chesars_
- [`cb54215`](https://github.com/BerriAI/litellm/commit/cb542159669051579122afcf856598b954b84706) Update litellm/proxy/response_api_endpoints/endpoints.py — _@Chesars_
- [`3976298`](https://github.com/BerriAI/litellm/commit/39762983b10bbe7f2cbcf26384963a66bff24e1f) Update litellm/proxy/response_api_endpoints/endpoints.py — _@Chesars_
- [`018750e`](https://github.com/BerriAI/litellm/commit/018750e0cdce1af28e3113ef78a5984d6c33a961) Update litellm/llms/openai/responses/count_tokens/transformation.py — _@Chesars_
- [`d33dec8`](https://github.com/BerriAI/litellm/commit/d33dec86ad3ceeaade337ad3a3e2a199b22d4895) fix: address Greptile review feedback — _@Chesars_
- [`43d2a19`](https://github.com/BerriAI/litellm/commit/43d2a19f79dddcc410b71e86722f7b3dea4b55ae) feat(openai): add OpenAI token counting API support and public litellm.acount_tokens() — _@Chesars_
- [`63459d6`](https://github.com/BerriAI/litellm/commit/63459d6777245266b835e801bcde5078b29e9bef) docs: add JWT-to-Virtual-Key mapping documentation — _@Harshit28j_
- [`6fa9a0e`](https://github.com/BerriAI/litellm/commit/6fa9a0e52b2c7989830571026ff6d3609aa5fb20) fix(bfl): validate empty image list in edit handler — _@Chesars_
- [`835e4c4`](https://github.com/BerriAI/litellm/commit/835e4c4a75ad8a904e0bcb69aaa3a6421cb6fec4) Update litellm/llms/black_forest_labs/image_generation/transformation.py — _@Chesars_
- [`d9f3701`](https://github.com/BerriAI/litellm/commit/d9f37011a2243a66f04762b96ff90a1493023001) Update litellm/llms/black_forest_labs/image_generation/transformation.py — _@Chesars_
- [`92297df`](https://github.com/BerriAI/litellm/commit/92297df30c2b99450000a910b8e6bafc3939c713) Update docs/my-website/sidebars.js — _@Chesars_
- [`2f15686`](https://github.com/BerriAI/litellm/commit/2f15686ea2cca8faeb2f52ad64b82a1c83314dde) fix: address greptile feedback - redact hashed tokens, proper error codes, add tests — _@Harshit28j_
- [`88dc0c1`](https://github.com/BerriAI/litellm/commit/88dc0c1b1852f747559b18cb5159b08d16e9a89c) feat(bfl): add kontext models to image generation support — _@Chesars_
- [`7ee4a40`](https://github.com/BerriAI/litellm/commit/7ee4a40fc4dfe03a4b2d8848498e7fde0f5e559b) fix(bfl): correct mode and variable shadowing from review feedback — _@Chesars_
- [`6fa74af`](https://github.com/BerriAI/litellm/commit/6fa74af6c3dbc282ad4714623ed563ae1f791d3b) Update litellm/llms/black_forest_labs/image_edit/transformation.py — _@Chesars_
- [`269911d`](https://github.com/BerriAI/litellm/commit/269911d6fef34fd15da6200a66582e052114bbd2) Update litellm/llms/black_forest_labs/image_edit/handler.py — _@Chesars_
- [`cf01ef5`](https://github.com/BerriAI/litellm/commit/cf01ef5949cf4bd7537f9dc48e5f4173c2cd230d) fix(tests): align BFL test assertions with implementation — _@Chesars_
- [`4d97818`](https://github.com/BerriAI/litellm/commit/4d97818f98ec64c3c6075819c740661c996ba7c9) fix(tools): gracefully repair truncated JSON in tool call arguments — _@giulio-leone_
- [`12691dc`](https://github.com/BerriAI/litellm/commit/12691dcce35f4896e5fa8d44e9e534cddfb094a6) fix: WebSearch interception fails with thinking enabled + SpendLimit constraint — _@giulio-leone_
- [`fb8bd60`](https://github.com/BerriAI/litellm/commit/fb8bd60c7d3cb7eaa7f497d69d8cc0e3fc4854b2) fix(streaming): prevent Vertex AI Claude content truncation when finish_reason races content — _@giulio-leone_
- [`4059b4f`](https://github.com/BerriAI/litellm/commit/4059b4f942f74a427065a3202c7f3aa3e7dbf79b) Merge pull request #19280 from Chesars/docs/update-main-page-index — _@Chesars_
- [`52d2ea2`](https://github.com/BerriAI/litellm/commit/52d2ea237fefa0d8e2baf28525e834890c0a6c12) fix(bfl): remove unsupported params and error on unknown models — _@Chesars_
- [`8eb7ca3`](https://github.com/BerriAI/litellm/commit/8eb7ca3726d075b974f7c923fc372b24d7b18b90) Update litellm/llms/black_forest_labs/image_edit/transformation.py — _@Chesars_
- [`00cf955`](https://github.com/BerriAI/litellm/commit/00cf9550afcd3d7b3ea80864f5f9d8047537b47e) fix(bfl): handle URL and file path inputs in image edit — _@Chesars_
- [`d9d39d5`](https://github.com/BerriAI/litellm/commit/d9d39d545aa5e6abb499589128da11f5baa05b66) Update litellm/llms/black_forest_labs/image_edit/transformation.py — _@Chesars_
- [`727fd76`](https://github.com/BerriAI/litellm/commit/727fd7684118c1653e97f48b4cc83b7bc6cf4fc3) refactor(bfl): separate HTTP logic into dedicated handlers — _@Chesars_
- [`a14a796`](https://github.com/BerriAI/litellm/commit/a14a79619a9251db691c5da890ed7661db42f8c4) docs: add Black Forest Labs image generation documentation — _@Chesars_
- [`e0af575`](https://github.com/BerriAI/litellm/commit/e0af575ee8da6a294cebda565eb06d9d1fe24a60) feat(black_forest_labs): add image generation support — _@Chesars_
- [`d180db3`](https://github.com/BerriAI/litellm/commit/d180db31e7c3b9fa959a879273c4376f67d32817) Use _get_httpx_client for HTTP polling in BFL image edit — _@Chesars_
- [`77ca224`](https://github.com/BerriAI/litellm/commit/77ca224a7f2cda88da37ff0bfdf9ea5d3e7a5f19) docs: add Black Forest Labs image edit documentation — _@Chesars_
- [`23bda9c`](https://github.com/BerriAI/litellm/commit/23bda9cc8ee89398d5720547ee8cce8118f37eb1) fix: remove unused Union import — _@Chesars_
- [`f132f2c`](https://github.com/BerriAI/litellm/commit/f132f2c811af30ae448f0e47540c6a566783d139) chore: add Black Forest Labs models to model registry — _@Chesars_
- [`cd73181`](https://github.com/BerriAI/litellm/commit/cd731811d996d51bd6debead779c4a3c1b00aec8) feat(black_forest_labs): add native image edit support for Black Forest Labs — _@Chesars_
- [`bc10274`](https://github.com/BerriAI/litellm/commit/bc1027492816faef2c05f056eae094c1bd972e72) Merge pull request #19518 from Chesars/fix-model-management-ui — _@Chesars_
- [`2e93265`](https://github.com/BerriAI/litellm/commit/2e9326523a7fbb62dcb7f14a3979e1881669be5c) Update ui/litellm-dashboard/src/app/(dashboard)/models-and-endpoints/ModelsAndEndpointsView.test.tsx — _@Chesars_
- [`424c433`](https://github.com/BerriAI/litellm/commit/424c433141e093676780d6ceee81a417adc680e9) Merge pull request #22801 from Chesars/feat/mistral-audio-transcription — _@Chesars_
- [`0c2e6b5`](https://github.com/BerriAI/litellm/commit/0c2e6b5185f3cec6ed0d2a6f03dc13f766fa92bb) Merge pull request #22803 from Chesars/fix/reasoning-to-reasoning-content-delta — _@Chesars_
- [`68cccc8`](https://github.com/BerriAI/litellm/commit/68cccc830d912910a0e412c2359c2e8204d887c4) style(ui): fix indentation on TableRow props in all_models_table — _@Chesars_
- [`35b9ec3`](https://github.com/BerriAI/litellm/commit/35b9ec3a867db19e7887c28577e97f0635269217) Merge pull request #17662 from Chesars/fix/gemini-2x-media-resolution-detail-parameter — _@Chesars_
- [`3a8fdc4`](https://github.com/BerriAI/litellm/commit/3a8fdc4b810f2da0743679b3809e5989ae2e0da8) Update ui/litellm-dashboard/src/app/(dashboard)/models-and-endpoints/components/AllModelsTab.tsx — _@Chesars_
- [`e48b7ae`](https://github.com/BerriAI/litellm/commit/e48b7ae8f987bcc8791a8281e2d0bee93f80b1b6) fix(streaming): map reasoning to reasoning_content in Delta for gpt-oss providers — _@Chesars_
- [`18af581`](https://github.com/BerriAI/litellm/commit/18af5815638a8270bf5e12cde9c58adb6fa9cddf) fix(ui): add missing onRowClick prop to AllModelsDataTable component — _@Chesars_
- [`c1a8bdd`](https://github.com/BerriAI/litellm/commit/c1a8bdd1640f4345b1a37f5b3d03ce8b1daf3ad5) fix(gemini): support detail parameter for image resolution on Gemini 2.x models — _@Chesars_
- [`354f44c`](https://github.com/BerriAI/litellm/commit/354f44c661cf86e72044e78e4e46f437f644e7c8) fix: serialize boolean provider params as lowercase strings — _@Chesars_
- [`2b91978`](https://github.com/BerriAI/litellm/commit/2b91978b99350d6951554e5271b574eea101e956) fix(responses): preserve query params in compact URL construction (#22668) — _@SebLz_
- [`c1d1f72`](https://github.com/BerriAI/litellm/commit/c1d1f72f439063b285a5d609f6eff84935099f18) docs: add Mistral Voxtral audio transcription documentation — _@Chesars_
- [`086a58a`](https://github.com/BerriAI/litellm/commit/086a58a06a3fcdac61d9ede4f6eb4f14b73c7c1f) feat(mistral): add Voxtral audio transcription support — _@Chesars_
- [`750fc4a`](https://github.com/BerriAI/litellm/commit/750fc4a9800f74096fd7b9b1d851464577f7b84c) azure content enhancement... (#22581) — _@ma-armenta_
- [`0df3658`](https://github.com/BerriAI/litellm/commit/0df36582de58e723860d0df3ea2cd39c5dc9e458) Merge pull request #22728 from BerriAI/litellm_batch_expiry_validation_followup — _@ryan-crabbe_
- [`23d312d`](https://github.com/BerriAI/litellm/commit/23d312dbd25b36460d1dffc64e86f93a559ac17c) Merge pull request #22771 from BerriAI/litellm_responses_websocket_2 — _@Sameerlite_
- [`32b3874`](https://github.com/BerriAI/litellm/commit/32b387468470b65561798e8f385eea7106aab051) fix: update Okta SSO docs and custom SSO handler example — _@milan-berri_
- [`edbb8ce`](https://github.com/BerriAI/litellm/commit/edbb8ce3603aa622fd6a40153d9b2a44af2ed507) Merge pull request #22775 from BerriAI/fix/model-prices-schema-new-properties — _@jquinter_
- [`53ea6a2`](https://github.com/BerriAI/litellm/commit/53ea6a280a7d833c5fc92a0978cc01aa8562c941) Merge pull request #22776 from BerriAI/fix/ruff-unused-imports — _@jquinter_
- [`512a5fa`](https://github.com/BerriAI/litellm/commit/512a5fa3c7cc461e1a52cbc89b322d9ce4418fef) Merge pull request #22788 from BerriAI/fix/azure-batches-add-tenacity-ci — _@jquinter_
- [`9f00037`](https://github.com/BerriAI/litellm/commit/9f000373dee4d9959789cd0788c33f387e314ada) Merge pull request #22789 from BerriAI/fix/linting-ci-openai-version — _@jquinter_
- [`75b2e40`](https://github.com/BerriAI/litellm/commit/75b2e40cd36f211d46e05471707f140ad5128c36) Remove incompatible openai==1.100.1 pin from linting CI — _@jquinter_
- [`aa62dda`](https://github.com/BerriAI/litellm/commit/aa62ddaf0a13f8dee5dcc2c8bebe498f0a7db793) Add tenacity to e2e Azure batch CI and revert importorskip — _@jquinter_
- [`4ec92ba`](https://github.com/BerriAI/litellm/commit/4ec92ba924eb2c7311cce077bb37ede22fddd705) fix: add new model_prices properties to validation schema — _@jquinter_
- [`f0cd93a`](https://github.com/BerriAI/litellm/commit/f0cd93aeb229258724a09b4547fdcf3eeb270969) fix: remove unused imports in tool_management_endpoints and streaming_iterator — _@jquinter_
- [`0dc8b08`](https://github.com/BerriAI/litellm/commit/0dc8b08987d25a3ec2ac5b29c63cf5287f3b319d) fix: remove unused top-level EncryptedContentAffinityCheck import — _@jquinter_
- [`317c162`](https://github.com/BerriAI/litellm/commit/317c162dfeb8ece16c44be8cec042c58cc821f72) Merge pull request #22785 from BerriAI/fix/azure-batches-test-tenacity-import — _@jquinter_
- [`a7e2bc3`](https://github.com/BerriAI/litellm/commit/a7e2bc3a92683797eecfb547947720f817857960) Merge pull request #22784 from BerriAI/fix/responses-id-security-test — _@jquinter_
- [`fac622b`](https://github.com/BerriAI/litellm/commit/fac622b5e64fba6ac332cc43e9a0b1e3a8f9690b) Merge pull request #22783 from BerriAI/fix/schema-migration-check — _@jquinter_
- [`f4e8c02`](https://github.com/BerriAI/litellm/commit/f4e8c02ba2fef9dd27471307e32c595868e211c5) Merge pull request #22781 from BerriAI/fix/tool-management-endpoint-tests — _@jquinter_
- [`d3b210f`](https://github.com/BerriAI/litellm/commit/d3b210fdd0c26019c065ff8ba842e44a51652ba9) Merge pull request #22780 from BerriAI/fix/a2a-cost-calculator-test — _@jquinter_
- [`f0c80d2`](https://github.com/BerriAI/litellm/commit/f0c80d2a86e398367c9c3699c8ed9fd9ea248909) Merge pull request #22778 from BerriAI/fix/azure-test-exclude-aresponses-websocket — _@jquinter_
- [`570e886`](https://github.com/BerriAI/litellm/commit/570e8861bdeea08776cb207207fd4cdd58386924) Merge pull request #22777 from BerriAI/fix/mcp-streaming-test-and-iterator — _@jquinter_
- [`8495e05`](https://github.com/BerriAI/litellm/commit/8495e05221eba8893f6ddc4a9aaca0ef8949fb67) Guard tenacity import in e2e Azure batch tests — _@jquinter_
- [`c0ac788`](https://github.com/BerriAI/litellm/commit/c0ac78870933a46d245f3e063c96b7de4f844c42) Fix responses ID security test for new request_cache parameter — _@jquinter_
- [`d8d3375`](https://github.com/BerriAI/litellm/commit/d8d3375a3ccc9b4c0e5bb005ef6ec320861043ed) Add missing migration for LiteLLM_ToolTable policy changes — _@jquinter_
- [`1ec6502`](https://github.com/BerriAI/litellm/commit/1ec6502f8892f4ffa6c69463628d4f1f10fe154a) Fix tool management tests using wrong field name call_policy — _@jquinter_
- [`d6949e5`](https://github.com/BerriAI/litellm/commit/d6949e53234d1b07aa56be5d2ec1bd6d868254a3) Fix A2A message context_id access when message is a dict — _@jquinter_
- [`d22996e`](https://github.com/BerriAI/litellm/commit/d22996ee8785aa3b9530449189b73f8a1e9ea541) Exclude aresponses_websocket from Azure SDK client init test — _@jquinter_
- [`e830182`](https://github.com/BerriAI/litellm/commit/e8301829cdfda2eec5e068e89df7aa61143d80fd) Fix flaky MCP streaming test by properly mocking inner aresponses call — _@jquinter_
- [`c8d3734`](https://github.com/BerriAI/litellm/commit/c8d373424958adce5ddfe593f5a2b4368d384bab) fix: merge main, fix summary in Responses API path, resolve conflicts — _@Chesars_
- [`ba5d32b`](https://github.com/BerriAI/litellm/commit/ba5d32b6b81c8dd707d3949a10f80bbbe14f2885) fix: address review feedback — remove redundant guard, preserve summary in translate_anthropic_to_openai — _@Chesars_
- [`ece0325`](https://github.com/BerriAI/litellm/commit/ece032523498929d7bde4f52368b18ec247a8750) fix(anthropic): make thinking.summary opt-in, don't hardcode default — _@Chesars_
- [`51552ea`](https://github.com/BerriAI/litellm/commit/51552eafe7dab01cafafbaa483300b9f9a3127ca) Merge pull request #22751 from BerriAI/litellm_fix_mcp_edit_tools — _@Sameerlite_
- [`db0d558`](https://github.com/BerriAI/litellm/commit/db0d5588fa30d5d7b24a45a75228d5b1cfe2625c) Merge pull request #22740 from BerriAI/litellm_fix_file_wild_card — _@Sameerlite_
- [`ece7fdb`](https://github.com/BerriAI/litellm/commit/ece7fdb2137744e977d84e336804d53d56ab554a) Merge pull request #22744 from BerriAI/litellm_mcp_streaming_fix — _@Sameerlite_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
