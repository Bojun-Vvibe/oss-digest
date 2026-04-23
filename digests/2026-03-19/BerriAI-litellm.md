# BerriAI/litellm — 2026-03-19

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-18T23:59:59.000Z → 2026-03-19T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy infra/refactor day with no releases or new issues — activity is dominated by the daily internal-staging merge into `main` (#24150) bundling dozens of fixes across proxy, router, UI and provider adapters.

**Proxy & key management** got the most attention. A bug where the key-update endpoint returned 401 instead of 404 for nonexistent keys was fixed (#24063), with the refactored `_get_and_validate_existing_key` now using `find_unique` (commits e86ca7f, 05620c8 — note one revert in between). Default Azure API version for `proxy --api_version` now follows `AZURE_DEFAULT_API_VERSION` so `response_format`+`json_schema` works out of the box (#24120). New `default_api_key_tpm_limit`/`default_api_key_rpm_limit` per-deployment proxy-wide rate-limit defaults landed (cac6850, with success-handler perf fixes in 477c541/b90f520). Orphaned Prisma engine subprocess on failed disconnect is now killed (1f04fa2), and a deferred-stream-guardrail path was hardened so logging waits for post-call guardrails (001501f).

**Routing & polling**: per-model-group deployment affinity is now configurable via `router_settings` (528daa8, docs in a14122c). Pre-call rate-limit/guardrail/budget checks now run *before* polling-ID creation in background streaming (4dc645f).

**Provider adapters**: Anthropic gains `ANTHROPIC_AUTH_TOKEN`/`ANTHROPIC_BASE_URL` env support (f415b72, with passthrough fix in f784da4). Bedrock `cache_control_injection_points` now supports `tool_config` location (60c2342). Gemini 3+ can combine built-in tools with custom functions via context circulation (6f4b4d3). MiniMax streaming chunks missing `id` are handled (#23931). A short-circuit websearch fix prevents github_copilot from falling into Anthropic's native agentic loop (6d0763b, 32cb6f0). Thinking blocks no longer dropped when `thinking` is null (#24070). OpenAI strict-mode now correctly emits `additionalProperties:false` + `required` (4bd7bdc, 286b8d1).

**UI**: API Reference migrated from query-param to path-based routing `/ui/api-reference` with legacy redirects (#24155); leftnav external-link icon (#24069); vitest coverage added for 10 components (#24144); copy-to-clipboard on User ID (1d7cff2).

**Docs/CI**: v1.82.3 release notes were heavily expanded (61df747, bba3b1f, d5ef754); `poetry check --lock` added to lint CI (#24159); multiple Black-formatting batches (#24092, #24153).

Highest-signal reads: #24150 (daily merge), #24120 (Azure default), cac6850 (rate-limit defaults), 528daa8 (router affinity).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`0781f68`](https://github.com/BerriAI/litellm/commit/0781f68b8ada6ce022ba963223475eef77223803) Merge pull request #24150 from BerriAI/litellm_yj_march_18_2026 — _@yuneng-jiang_
- [`7b600cd`](https://github.com/BerriAI/litellm/commit/7b600cdbfe333333a3d86ea835f44b8f00ace195) linting — _@yuneng-jiang_
- [`f60e3cf`](https://github.com/BerriAI/litellm/commit/f60e3cfd34f6a4523dbd4ba0d42c97343e0195f1) remove returning key in error message — _@yuneng-jiang_
- [`32cb6f0`](https://github.com/BerriAI/litellm/commit/32cb6f0cd91adfb5554be251490b9b5d5ea60a19) fix: guard short-circuit against providers with native agentic loop — _@johnib_
- [`05620c8`](https://github.com/BerriAI/litellm/commit/05620c87e38b7cc03a9483db7f334c5b8aa2eb0c) [Fix] Update bulk key update tests for find_unique refactor — _@yuneng-jiang_
- [`2d3cff9`](https://github.com/BerriAI/litellm/commit/2d3cff99fe6829f75133e8a29551f6a97049ec18) Merge pull request #24159 from joereyna/fix/add-poetry-lock-check — _@yuneng-jiang_
- [`3565059`](https://github.com/BerriAI/litellm/commit/3565059d325cfabd36b7ebb0ada877d1569caa1f) Merge pull request #24155 from BerriAI/litellm_api_reference_path_routing — _@yuneng-jiang_
- [`d118bf4`](https://github.com/BerriAI/litellm/commit/d118bf48188fb72ebd23f625df5a72189a052114) chore: add poetry check --lock to lint CI to prevent stale lockfile merges — _@joereyna_
- [`e86ca7f`](https://github.com/BerriAI/litellm/commit/e86ca7f34d41d764d885fc64ce86dc97508035f8) Revert "[Fix] Update tests for _get_and_validate_existing_key refactor" — _@yuneng-jiang_
- [`2e70c23`](https://github.com/BerriAI/litellm/commit/2e70c23307d85c7430bdf0523204863865797d79) Gate legacy redirect on authLoading to ensure proxyBaseUrl is resolved — _@yuneng-jiang_
- [`e9e5ed9`](https://github.com/BerriAI/litellm/commit/e9e5ed989c29103ab2af839add0a1e822553820b) Move legacy redirect from render phase to useEffect — _@yuneng-jiang_
- [`8959517`](https://github.com/BerriAI/litellm/commit/895951744ddbf62ef31a78b86d953d7f6eb6cefb) Fix leftnav navigation regression and useProxySettings initial state — _@yuneng-jiang_
- [`519afa4`](https://github.com/BerriAI/litellm/commit/519afa494cd76762e1ea2b24e3961d6477c74cdd) [Refactor] UI - API Reference: Migrate to path-based routing — _@yuneng-jiang_
- [`2df9655`](https://github.com/BerriAI/litellm/commit/2df965513e7cf7586a7ea4b555ddb55e6910549b) Merge pull request #24153 from joereyna/fix/black-format-lint-2 — _@joereyna_
- [`7393566`](https://github.com/BerriAI/litellm/commit/739356640bfce63b8450c6c7a5bdbf7c206e6d4f) Merge pull request #24120 from BerriAI/litellm_proxy-azure-api-version-bump — _@Krish Dholakia_
- [`cf63697`](https://github.com/BerriAI/litellm/commit/cf6369770310844fc5855b8a47820f7f1fabf0bc) [Fix] Update tests for _get_and_validate_existing_key refactor — _@yuneng-jiang_
- [`004d8d0`](https://github.com/BerriAI/litellm/commit/004d8d01f6840ecf0b542b09293cb8c59c665787) chore: apply black formatting to fix lint CI — _@joereyna_
- [`f784da4`](https://github.com/BerriAI/litellm/commit/f784da41af57df1b241b6ea8973a5c69c04105d7) Fix get_complete_url to honour ANTHROPIC_BASE_URL in experimental passthrough — _@devin-petersohn_
- [`c2b8ba8`](https://github.com/BerriAI/litellm/commit/c2b8ba8b1ba0832d34ed7432f3eb870e749e3c54) [Fix] Resolve mypy errors in key_management_endpoints.py — _@yuneng-jiang_
- [`dfcf978`](https://github.com/BerriAI/litellm/commit/dfcf978745e6de0a20b228c9bd7cba4cf7b25e1f) Merge pull request #24092 from joereyna/fix/black-format-lint — _@yuneng-jiang_
- [`b7e2269`](https://github.com/BerriAI/litellm/commit/b7e2269942883d9f26bbf21c2140840514b498a7) Address review feedback: fix OAuth routing in get_auth_header and self-contained validate_environment — _@devin-petersohn_
- [`92b8e1a`](https://github.com/BerriAI/litellm/commit/92b8e1acf8c14863f36050a0bba059b922b8a358) address greptile review: async sleep, SIGKILL Windows guard, trailing newlines — _@michelligabriele_
- [`afb3520`](https://github.com/BerriAI/litellm/commit/afb35204ce26e24d14ad6abbf018d090ba322344) Merge remote-tracking branch 'origin' into litellm_yj_march_18_2026 — _@yuneng-jiang_
- [`1f04fa2`](https://github.com/BerriAI/litellm/commit/1f04fa2461bf254c0511ead531ae4386bcb579aa) fix(proxy): kill orphaned prisma engine subprocess on failed disconnect — _@michelligabriele_
- [`573f6b7`](https://github.com/BerriAI/litellm/commit/573f6b78eac613ad07e88a6f29f3a23a0795c731) fix(proxy): split orphan cleanup into separate try blocks for resilience — _@michelligabriele_
- [`b13ba1d`](https://github.com/BerriAI/litellm/commit/b13ba1ddcc7b7392212fa81c1b18b7321d7e27f5) Merge pull request #24144 from BerriAI/litellm_add_vitest_coverage — _@yuneng-jiang_
- [`ee17ef3`](https://github.com/BerriAI/litellm/commit/ee17ef3029573e5fe9242f466e4129a24efb1f75) fix(proxy): replace sys.exc_info with boolean sentinel for orphan detection — _@michelligabriele_
- [`141ad04`](https://github.com/BerriAI/litellm/commit/141ad04955207874307bc0e6aec8a19dd39f44a1) refactor: reuse get_last_user_message, fix UUID convention, move import — _@johnib_
- [`ead822b`](https://github.com/BerriAI/litellm/commit/ead822b6985443827d3accb7c0d6cfb7fce40df7) Added test cases for the null type handling — _@kothamah_
- [`a5dd01d`](https://github.com/BerriAI/litellm/commit/a5dd01d8aca49a94433d4a430958fe369ac18a2f) added bedrock guardrail API exception — _@kothamah_
- [`3b12926`](https://github.com/BerriAI/litellm/commit/3b129260f557356f0fa621495dab36b659479ef4) fix: use original_stream for short-circuit, propagate derived provider — _@johnib_
- [`97e17fa`](https://github.com/BerriAI/litellm/commit/97e17faa51d74d13c452edc2d3e01702f376b123) fix(proxy): guard lazy imports inside try, clean up orphaned streaming closure — _@michelligabriele_
- [`b5a775d`](https://github.com/BerriAI/litellm/commit/b5a775d54ef6c641860f5a3837c6b8dd06664679) style: fix Black formatting in test file — _@johnib_
- [`41d9ecf`](https://github.com/BerriAI/litellm/commit/41d9ecfebc217dc1359d4d8f56b65ccec618ff7f) Address feedback — _@devin-petersohn_
- [`0b07f62`](https://github.com/BerriAI/litellm/commit/0b07f628ffb2d4fe8d2c271fe578a9a2796382ec) [Test] UI: Add vitest coverage for 10 previously untested components — _@yuneng-jiang_
- [`6d0763b`](https://github.com/BerriAI/litellm/commit/6d0763b8ba30a71ba1cd7fec5643f374be85d72c) fix: short-circuit websearch for non-Anthropic providers (github_copilot) — _@johnib_
- [`b34231d`](https://github.com/BerriAI/litellm/commit/b34231dc95ce686424592d9a063112ef04b103c3) refactor(proxy): reuse unified_guardrail singleton, rename shadowing variable — _@michelligabriele_
- [`81dadb6`](https://github.com/BerriAI/litellm/commit/81dadb698a5984a4bf825903b3384927d12d54bc) Ishaan - March 18th changes  (#24056) — _@ishaan-jaff_
- [`f415b72`](https://github.com/BerriAI/litellm/commit/f415b72bcfa795c3673de5d13b68658fc9a3482e) feat(anthropic): support ANTHROPIC_AUTH_TOKEN and ANTHROPIC_BASE_URL env vars — _@devin-petersohn_
- [`0057452`](https://github.com/BerriAI/litellm/commit/0057452485d2b12a719e5e66262e22ef676a20e3) fix(proxy): guard streaming deferred init with try/finally, fix test imports — _@michelligabriele_
- [`4b8c532`](https://github.com/BerriAI/litellm/commit/4b8c532ba8cbdb9b55fc006c9e218e3dd669d5e3) fix(proxy): pass guardrail_data to hooks in streaming deferred path — _@michelligabriele_
- [`1d7cff2`](https://github.com/BerriAI/litellm/commit/1d7cff22cb80429cd545fa131c970dc7ef6d2862) feat(ui): add click-to-copy icon on User ID in internal users table — _@ryan-crabbe_
- [`001501f`](https://github.com/BerriAI/litellm/commit/001501fb31dd77e6e911fdd565eec6f24a7ae26f) fix(proxy): defer logging until post-call guardrails complete — _@michelligabriele_
- [`ae0769b`](https://github.com/BerriAI/litellm/commit/ae0769b1dfb44b4f4ec9a676e04c2e778b426957) fix: guard empty-dict team limits and malformed int in deployment default limits — _@ephrimstanley_
- [`e562c1d`](https://github.com/BerriAI/litellm/commit/e562c1d0640283e4820deff27ee3933646a29f65) refactor: consolidate duplicate helpers and eliminate success-handler double lookup — _@ephrimstanley_
- [`6146196`](https://github.com/BerriAI/litellm/commit/6146196c6ad938bdfaab41cb20b9c6a90f36b5a4) Fix tests — _@Sameerlite_
- [`1284e4e`](https://github.com/BerriAI/litellm/commit/1284e4ebe599cb1585f634c25ed1b82b2a9f8ab6) Fix cicd fialing tests — _@Sameerlite_
- [`b956483`](https://github.com/BerriAI/litellm/commit/b9564834e6eea59a85666685e78a31febbbbbcca) Fix mypy errors — _@Sameerlite_
- [`067dab4`](https://github.com/BerriAI/litellm/commit/067dab42e6fc8a455434f05926cfae88a6638b47) refactor: reduce statement count in langsmith and anthropic methods — _@Sameerlite_
- [`532e0d1`](https://github.com/BerriAI/litellm/commit/532e0d13df3b3e4532bc805d02083fa7f01980dc) feat(proxy): use AZURE_DEFAULT_API_VERSION for proxy --api_version default — _@Sameerlite_
- [`ecfcf24`](https://github.com/BerriAI/litellm/commit/ecfcf241c6cbbc3d48167b9263bb2909736e1f47) Merge pull request #24119 from BerriAI/main — _@Sameerlite_
- [`e2e4f9e`](https://github.com/BerriAI/litellm/commit/e2e4f9ed33f9c3dea5ca275bf068f0a3d365a1d1) Merge branch 'main' into litellm_oss_staging_03_17_2026 — _@Sameerlite_
- [`a14122c`](https://github.com/BerriAI/litellm/commit/a14122c28e5258d36339813539d084816a215cf0) docs: add per-model-group affinity configuration docs — _@Sameerlite_
- [`6af74f6`](https://github.com/BerriAI/litellm/commit/6af74f6594c9e8607251b11e17859b77ed2dff11) fix(router): restore debug log for missing deployment_model_name; warn on unknown affinity flags — _@Sameerlite_
- [`528daa8`](https://github.com/BerriAI/litellm/commit/528daa8cf43767231531263f35fb6ad5a5ecadbf) feat(router): add per-model-group deployment affinity configuration — _@Sameerlite_
- [`66f97a0`](https://github.com/BerriAI/litellm/commit/66f97a00a44d096c5ee0e54e9fbab59ea8ed9cd7) fix(test): rewrite polling pre-call guard test to call responses_api() directly — _@Sameerlite_
- [`c12717f`](https://github.com/BerriAI/litellm/commit/c12717f494a5f7adbc7e2e0ab5f7cd814cc7c222) fix: address Greptile review comments — _@Sameerlite_
- [`4dc645f`](https://github.com/BerriAI/litellm/commit/4dc645fc334a2bce75e345433990ebaea42b1570) feat(polling): check rate limits before creating polling ID — _@Sameerlite_
- [`e19a717`](https://github.com/BerriAI/litellm/commit/e19a717b53bd6129c350ebf0c7c63a592ec5ad08) Add IF NOT EXISTS to index creation in migration — _@superpoussin22_
- [`b20c448`](https://github.com/BerriAI/litellm/commit/b20c448188acabe3df75597d1c76a65b07d61149) fix(openai): handle missing 'id' field in streaming chunks for MiniMax (#23931) — _@chengyongru_
- [`d5ef754`](https://github.com/BerriAI/litellm/commit/d5ef754950671e2e8a0c17a993bd3837aa008b7c) docs(release-notes): align v1.82.3 notes with release notes guide — _@joereyna_
- [`61df747`](https://github.com/BerriAI/litellm/commit/61df7471bae37e2fa25fcbfe4917b193ff5b1b81) docs(release-notes): complete v1.82.3 changelog with 30+ missing features — _@joereyna_
- [`477c541`](https://github.com/BerriAI/litellm/commit/477c54184bda814745bb06d4fbe4900cfc816bd2) perf: avoid unconditional router lookups in success handler — _@ephrimstanley_
- [`48cb4a8`](https://github.com/BerriAI/litellm/commit/48cb4a83435faa458888b412d408eb06cbca694d) fix: update success-event handler to track tokens for deployment-default limits — _@ephrimstanley_
- [`dab8721`](https://github.com/BerriAI/litellm/commit/dab8721ba316a6b859d8636c80bc36b94f32a767) chore: apply black formatting to fix lint CI — _@joereyna_
- [`b90f520`](https://github.com/BerriAI/litellm/commit/b90f5207488c71ad22acc700c24999862e0e08e9) perf: eliminate redundant router lookups in v1 parallel request limiter — _@ephrimstanley_
- [`36dc893`](https://github.com/BerriAI/litellm/commit/36dc893770fa69cfcc014e5c535b87d58ca12c89) fix: address review feedback on default tpm/rpm limits — _@ephrimstanley_
- [`bba3b1f`](https://github.com/BerriAI/litellm/commit/bba3b1fe4c468576c145affbb08f6a6587eedc2c) docs(release-notes): add missing Helicone and Langfuse entries to v1.82.3 changelog — _@joereyna_
- [`cac6850`](https://github.com/BerriAI/litellm/commit/cac685014ff2ad795c9d21a9e42475e46fdcd4b5) feat: add proxy-wide default tpm/rpm limits per deployment — _@ephrimstanley_
- [`e5baa22`](https://github.com/BerriAI/litellm/commit/e5baa2232fe88174b0fe0f51b7b693b182021aa7) Merge pull request #24082 from joereyna/fix/poetry-lock-content-hash — _@Krish Dholakia_
- [`547a731`](https://github.com/BerriAI/litellm/commit/547a73120e2f0fe7a04aa958014e707fc8d3fe4d) Merge pull request #24083 from BerriAI/cursor/missing-guardrails-docs-143b — _@Krish Dholakia_
- [`df38fbc`](https://github.com/BerriAI/litellm/commit/df38fbcc973b269d70d6c6c6891d444d70e9f04d) docs: add Contributing to Guardrails section to Guardrail Providers sidebar — _@cursoragent_
- [`49443cc`](https://github.com/BerriAI/litellm/commit/49443cc08cd101dcb4bd07cf8e7474dc7c6c1f89) Merge pull request #24080 from BerriAI/litellm_dev_03_18_2026_p1 — _@Krish Dholakia_
- [`11f0f06`](https://github.com/BerriAI/litellm/commit/11f0f061bc6cf724540a6ad7fc2f049e7eb242c3) Merge pull request #18120 from hytromo/improve-llm-repeated-message-detection-performance — _@Krish Dholakia_
- [`08f0cbc`](https://github.com/BerriAI/litellm/commit/08f0cbc2e939c6456feb2f7ef8edf118644748fa) fix: address greptile feedback — _@Krrish Dholakia_
- [`5c93c10`](https://github.com/BerriAI/litellm/commit/5c93c107d953980838769d76594e0aba5dafc903) Merge pull request #24043 from themavik/fix/24001-langsmith-usage-metadata — _@Krish Dholakia_
- [`379ed72`](https://github.com/BerriAI/litellm/commit/379ed723361873e529a14f9246a83e6929c84721) Merge pull request #24050 from alilxxey/fix/proxy-only-failure-call-type — _@Krish Dholakia_
- [`3a878b8`](https://github.com/BerriAI/litellm/commit/3a878b8b6b7f689132677057dcb19f8dd2d65747) Merge branch 'litellm_oss_staging_03_18_2026' into fix/proxy-only-failure-call-type — _@Krish Dholakia_
- [`ab1744f`](https://github.com/BerriAI/litellm/commit/ab1744f9fe197208085483e641c1abd27a30d516) fix(proxy): scope wildcard cleanup to subpath entries and restore registry in test — _@Sameerlite_
- [`6ef440c`](https://github.com/BerriAI/litellm/commit/6ef440c2f5c894a6bbba8a4f39d3d7dd9a2c1f70) Merge pull request #24044 from emerzon/fix-generic-api-model-group-logging — _@Krish Dholakia_
- [`8b4ed36`](https://github.com/BerriAI/litellm/commit/8b4ed363e4567e40a581e0b4463fd94b473fcbdd) Merge pull request #24070 from xr843/fix/24026-thinking-blocks-null — _@Krish Dholakia_
- [`e8e4d9f`](https://github.com/BerriAI/litellm/commit/e8e4d9fa0f4d0f6166ad695a1f4d1894b2e3f6d4) Merge pull request #24069 from BerriAI/litellm_leftnav_external_icon — _@yuneng-jiang_
- [`f7803d2`](https://github.com/BerriAI/litellm/commit/f7803d2d6d337d94faf34bac82d9441b52507c2f) chore: regenerate poetry.lock to unblock CI (pyproject.toml content hash drift) — _@joereyna_
- [`97b7358`](https://github.com/BerriAI/litellm/commit/97b7358791052b4056200002d17c76b88479e8f8) fix(proxy): dedup openai_routes on reload and clean up on endpoint removal — _@Sameerlite_
- [`93e3c81`](https://github.com/BerriAI/litellm/commit/93e3c81772dd204ae3314a199a85e5bb325289c1) fix(schema): align approval_status default in proxy-extras schema — _@vanhtuan0409_
- [`4829de6`](https://github.com/BerriAI/litellm/commit/4829de610278774d360868475316ca144b2c0e27) fix(proxy): allow non-admin users to access pass-through subpath routes with auth — _@Sameerlite_
- [`bd0c3bf`](https://github.com/BerriAI/litellm/commit/bd0c3bfdc4d9cd364c8b68b975ed8398c55b0dc0) fix: fix logging for response incomplete streaming — _@Krrish Dholakia_
- [`4f7e63e`](https://github.com/BerriAI/litellm/commit/4f7e63ed4a260f6e24f49255e25fc4fe7eab6c42) fix(schema): restore MCP server fields dropped by schema_sync migration — _@vanhtuan0409_
- [`0ecced9`](https://github.com/BerriAI/litellm/commit/0ecced9780a1cb7b0d6c5211ddb8ce8966a428da) fix: fix responses cost calc — _@Krrish Dholakia_
- [`60c2342`](https://github.com/BerriAI/litellm/commit/60c234270a4b42cdf20888ac353071b5eae5a378) feat(bedrock): support cache_control_injection_points for tool_config location — _@Chesars_
- [`286b8d1`](https://github.com/BerriAI/litellm/commit/286b8d14604c9ad5f736038fb5bb6146ecaed7bf) fix: also populate required for all properties in strict mode — _@Chesars_
- [`6f4b4d3`](https://github.com/BerriAI/litellm/commit/6f4b4d3c42c73641cb08f78a9587c8328c23afef) feat(gemini): support context circulation for server-side tool combination — _@Chesars_
- [`4bd7bdc`](https://github.com/BerriAI/litellm/commit/4bd7bdcf43da7106bd07240acc2bd0b1c997936c) fix: add additionalProperties: false for OpenAI strict mode in Anthropic adapter — _@Chesars_
- [`8969a3d`](https://github.com/BerriAI/litellm/commit/8969a3d1763e7e2bb3b0c48dbb855780cf992ebe) Fixed thinking blocks dropped when thinking field is null (#24026) — _@xr843_
- [`ef3b05b`](https://github.com/BerriAI/litellm/commit/ef3b05b8c7af11ff9a2069c771b9e89c127dae39) Merge pull request #23784 from andrzej-pomirski-yohana/fix/surface-anthropic-tool-results-responses-api — _@Chesars_
- [`4770b65`](https://github.com/BerriAI/litellm/commit/4770b657e15a25815eccf211f87843db356625e8) refactor: extract duplicated stdout/stderr → logs logic to shared helper — _@Chesars_
- [`d984b29`](https://github.com/BerriAI/litellm/commit/d984b293de36d9b86a20e59ca43bca084930fdf8) [Feature] UI - Leftnav: Add external link icon to Learning Resources — _@yuneng-jiang_
- [`71cdd91`](https://github.com/BerriAI/litellm/commit/71cdd91668b661b430e5b9ae8c398565ae3a6c4b) Merge pull request #24063 from BerriAI/litellm_fix_key_update_404 — _@yuneng-jiang_
- [`bbeec7f`](https://github.com/BerriAI/litellm/commit/bbeec7f6e39e6b1393446bd7af5e543e513beba3) Merge pull request #24062 from BerriAI/litellm_/determined-mirzakhani — _@yuneng-jiang_
- [`0b63979`](https://github.com/BerriAI/litellm/commit/0b63979d4572bfa6225df9bc62f9fbae8d6b3710) Fix build: cast endpointType to EndpointType at call site — _@yuneng-jiang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
