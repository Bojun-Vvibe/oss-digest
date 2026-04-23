# BerriAI/litellm — 2026-04-14

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-13T23:59:59.000Z → 2026-04-14T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

# BerriAI/litellm — 2026-04-14

Headline: **`v1.83.3-stable` shipped** ([release](https://github.com/BerriAI/litellm/releases/tag/v1.83.3-stable)), with release notes also staged for the upcoming `v1.83.7.rc.1` (commits `8eec2c6`, `966be29`). A large batch of OSS staging branches landed alongside (#25665, #25589, #25192, #25463), so this is effectively the consolidation day for the next stable cut.

**New features worth a look:**
- `litellm.compress()` — BM25-based prompt compression with retention controls, merged via #25650.
- Hiddenlayer guardrail V2 integration (#22708) and a new `BACKGROUND_HEALTH_CHECK_MAX_TOKENS` env var for health checks (#25344).
- Anthropic `/v1/messages` now retries once after an invalid thinking-signature error by stripping thinking blocks (#25674, hardened in `5670f6c` to require HTTP 400 + signature body match).
- MCP gateway now exposes per-server `InitializeResult.instructions` from upstream or YAML (#25694), reusing existing sessions rather than a separate fetch.
- Bedrock custom tool JSON schema normalization for Invoke and Converse (#25396); Gemini Veo Lite pricing + tiered video-resolution cost (#25348); `NO_OPENAPI` env var to disable `/openapi.json` (#25547).

**Notable security/correctness fixes:**
- **API key leak prevention**: Gemini `?key=` query params were leaking via httpx tracebacks/logs/alerts; new `MaskedHTTPStatusError` plus masking on async streaming error bodies (`25f93be`, `74f55b0`, +50 tests in `b16d0b1`). Worth reviewing if you self-host.
- Proxy: enforce team membership in team-scoped key update/regenerate (#25686) — closes a cross-team auth gap.
- Proxy: team members added before `team_member_budget` was configured had no budget enforcement (#25557, fixes #25506).
- CORS credentials hardening, `create_views` exception handling, spend-log cleanup loop (#25559).
- Gemini batch embeddings: previously hardcoded `index=0` for every result (#25656).
- Router `lowest_latency` now discards oldest entry when trimming (#25548); in-memory cache prunes expired heap entries (#25664); Datadog batches drained safely with 413 preservation (#25663).
- Vertex: drop search tools when mixed with function declarations, except when server-side tool invocations are enabled for Gemini 3+ (`212b249`, `cacc3b3`).
- Streaming: emit `input_json_delta` for tool args bundled in first chunk (xAI/Gemini) (#25533).
- Revert of #25395 (embedding `encoding_format` omission) via #25698 — re-check if you depended on that behavior.

UI fixes dominate the rest: invite-user default role set to least-privilege (#25721), logs team filter state-bleed isolation (#25716), guardrail boolean Select defaults (#25700), policy attachment delete via controlled modal (#25324).

## Releases

- **[v1.83.3-stable](https://github.com/BerriAI/litellm/releases/tag/v1.83.3-stable)** — v1.83.3-stable _by @github-actions[bot] at 2026-04-14T03:19:31Z_
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

- [`b1bc3c1`](https://github.com/BerriAI/litellm/commit/b1bc3c166d21a5da801e8012de04644c828e6009) test(prompts): isolate in-memory version tests — _@stuxf_
- [`6d2b7b7`](https://github.com/BerriAI/litellm/commit/6d2b7b76ad09883d101d0a1014fe5c1d89452893) Merge pull request #25721 from BerriAI/litellm_fix-invite-user-default-role — _@ryan-crabbe-berri_
- [`260d51a`](https://github.com/BerriAI/litellm/commit/260d51ad67aa1aa68644460473677b6033e00af4) Merge pull request #25723 from BerriAI/litellm_release_notes_v1_83_3_v1_83_7rc1 — _@yuneng-berri_
- [`f521e27`](https://github.com/BerriAI/litellm/commit/f521e27371e957313cf75aa79968f1f7203a27be) test(gemini): align API key expectations — _@stuxf_
- [`3aae15f`](https://github.com/BerriAI/litellm/commit/3aae15f5d829eb711988b44ad09866f7c789ec77) [Docs] Use GitHub avatar for Ryan Crabbe in release notes — _@ryan-crabbe-berri_
- [`966be29`](https://github.com/BerriAI/litellm/commit/966be2982a568b8dd1477ca1d4bc2b35f5cbb4f2) [Docs] Add missed content PRs to v1.83.7.rc.1 and update runbook — _@yuneng-berri_
- [`abb8d8d`](https://github.com/BerriAI/litellm/commit/abb8d8d4548e37a3dfadb02c30c0eee0983de601) ci: trigger CI re-run for codecov — _@stuxf_
- [`b16d0b1`](https://github.com/BerriAI/litellm/commit/b16d0b1d5ea5f3419f72a4ebac6d19659ccef1e9) test: add coverage for credential leak prevention changes — _@stuxf_
- [`74f55b0`](https://github.com/BerriAI/litellm/commit/74f55b06715bf340775f1aec67bd27942bcf9478) fix: apply mask_sensitive_info to async streaming error body — _@stuxf_
- [`25f93be`](https://github.com/BerriAI/litellm/commit/25f93bed918fbb35c44207b950632047593c40ed) security: prevent API key leaks in error tracebacks, logs, and alerts — _@stuxf_
- [`4a1da62`](https://github.com/BerriAI/litellm/commit/4a1da629fac72363b6d1a76ceb943b55ca444d15) [Fix] Correct pip install versions for v1.83.3-stable and v1.83.7.rc.1 docs — _@yuneng-berri_
- [`8eec2c6`](https://github.com/BerriAI/litellm/commit/8eec2c69b74952be93190dd40da88156746c3600) [Docs] Add release notes for v1.83.3-stable and v1.83.7.rc.1 — _@yuneng-berri_
- [`a428ae7`](https://github.com/BerriAI/litellm/commit/a428ae75995ba4b01cb9ef77f6dfb2712ca519ac) fix: default invite user modal global role to least-privilege — _@ryan-crabbe-berri_
- [`7b36cfc`](https://github.com/BerriAI/litellm/commit/7b36cfc0de67e8b0ab9d17ae373eb86d13bb7b43) Merge pull request #25719 from BerriAI/litellm_fix-ui-unit-tests-get-cookie — _@yuneng-berri_
- [`bdaaa5c`](https://github.com/BerriAI/litellm/commit/bdaaa5c187255c2f0cfc7ff53f01407f9070c20b) test(ui): add getCookie to cookieUtils mock in user_dashboard test — _@ryan-crabbe-berri_
- [`43efe76`](https://github.com/BerriAI/litellm/commit/43efe76f17005ef226cbb27e59d0c1243e530292) Merge pull request #25716 from BerriAI/litellm_fix-logs-team-filter-state-bleed — _@ryan-crabbe-berri_
- [`ec4ce1c`](https://github.com/BerriAI/litellm/commit/ec4ce1cc4ad0f826d8f143137e9b37c223d4345f) Merge pull request #25700 from BerriAI/litellm_fix-guardrail-bool-select-rendering — _@ryan-crabbe-berri_
- [`1beb803`](https://github.com/BerriAI/litellm/commit/1beb8037d110a4b6b72dca844148a372b2097ba2) fix: isolate logs team filter dropdown from root teams state bleed — _@ryan-crabbe-berri_
- [`6126b47`](https://github.com/BerriAI/litellm/commit/6126b47c8655f04a5f9cde119ac9f464e2eceb8c) fix(mcp): set instructions=None in test_add_update_server_without_alias mock — _@ishaan-berri_
- [`2b5eb79`](https://github.com/BerriAI/litellm/commit/2b5eb794fca2727aff280c18799aec7813f71121) fix(mcp): set instructions=None in test_add_update_server_with_alias mock — _@ishaan-berri_
- [`0e43050`](https://github.com/BerriAI/litellm/commit/0e43050a01933c818c7ea1620a68ebb108450a57) Merge pull request #25650 from BerriAI/litellm_dev_04_13_2026_p1 — _@ishaan-berri_
- [`92a5ed4`](https://github.com/BerriAI/litellm/commit/92a5ed4c3d620d64f90c161ad2b7a9661f870996) fix(mcp): set instructions=None in test_add_update_server_fallback_to_server_id mock — _@ishaan-berri_
- [`db94b4d`](https://github.com/BerriAI/litellm/commit/db94b4d55c0cc1869659c5a988f895bfe2925413) fix(cost-map): add us-south1 to vertex qwen3-235b-a22b-instruct-2507-maas (#25382) — _@ti3x_
- [`1a9a31e`](https://github.com/BerriAI/litellm/commit/1a9a31e4a2607841749a12cc14ea35ec17d43f86) Merge pull request #25665 from BerriAI/litellm_oss_staging_04_13_2026_p1 — _@Sameerlite_
- [`25c444c`](https://github.com/BerriAI/litellm/commit/25c444c8d552d2b6ab3d7d556e53378a22eb9e30) Merge pull request #25686 from milan-berri/fix/key-update-cross-team-auth-check — _@yuneng-berri_
- [`dec630b`](https://github.com/BerriAI/litellm/commit/dec630b36558a7836845b0169b384d1d9a57426c) Fix mypy issues — _@Sameerlite_
- [`085e70c`](https://github.com/BerriAI/litellm/commit/085e70cd3eb4a8e4cadb42030acf0f73fa28fcd2) refactor: extract search tool conflict resolution into _resolve_search_tool_conflict method — _@duan-levan_
- [`cacc3b3`](https://github.com/BerriAI/litellm/commit/cacc3b326d8d0b4b17057ebe52318b0463257f65) fix: skip dropping search tools when server-side tool invocations enabled (Gemini 3+) — _@duan-levan_
- [`1e79ad6`](https://github.com/BerriAI/litellm/commit/1e79ad69abdefe6702301f74104a390972d0a27a) docs: add comment explaining why non-search tools are preserved — _@duan-levan_
- [`212b249`](https://github.com/BerriAI/litellm/commit/212b249e38e407bf9103e6c7de6690f7dcfa1207) fix(vertex_ai): drop search tools when mixed with function declarations (#23337) — _@duan-levan_
- [`924418a`](https://github.com/BerriAI/litellm/commit/924418aeeaad6b5c3f5721abe3adaa61f3b544e2) fix: prune expired in-memory cache heap entries (#25664) — _@emerzon_
- [`a302b53`](https://github.com/BerriAI/litellm/commit/a302b53980da0503e9aaf7cb105285048f2a9d80) fix: drain datadog batches safely (#25663) — _@emerzon_
- [`e724e5e`](https://github.com/BerriAI/litellm/commit/e724e5e07d8a5b940df48134d9359eac4753c364) add NO_OPENAPI env var to disable /openapi.json endpoint (#25547) — _@jonemo_
- [`17bfa42`](https://github.com/BerriAI/litellm/commit/17bfa420e46333083d084c0957c62729deb3f74a) fix(router): discard oldest entry when trimming latency list in lowest_latency strategy (#25548) — _@hatim-ez_
- [`6343148`](https://github.com/BerriAI/litellm/commit/6343148c9524cf2a6a9bb6c983386f8b202f69f5) Hiddenlayer Integration: Add V2 Integration (#22708) — _@Ashton-Sidhu_
- [`1d45cfd`](https://github.com/BerriAI/litellm/commit/1d45cfd1fc0b1a0a265b8fe2c9b32c0fbc6de5b3) fix(proxy) - #25506 Team members added before team_member_budget is configured have no budget enforcement (#25557) — _@daanhendrio_
- [`15245a5`](https://github.com/BerriAI/litellm/commit/15245a5eb7aa590e78e19411d7c6c63fbc6292c3) fix: emit input_json_delta for tool args bundled in first streaming chunk (#25533) — _@krisyang1125_
- [`dd93d26`](https://github.com/BerriAI/litellm/commit/dd93d2698b16fd25fd4b62c0591372d01a335ada) fix(gemini): assign correct indices in batch embedding response (#25656) — _@lucassz_
- [`3f3760b`](https://github.com/BerriAI/litellm/commit/3f3760bdf4e81312c2bbaf99e378ae0e2b53938c) Merge pull request #25324 from Lucas-Song-Dev/fix-ui-policy-attachment-delete — _@yuneng-berri_
- [`8c50563`](https://github.com/BerriAI/litellm/commit/8c505634bd9771b15803ea2fb7fb30edf8cc3aac) chore: sync uv.lock with pyproject.toml (v1.83.6 -> v1.83.7) — _@ishaan-berri_
- [`e20c114`](https://github.com/BerriAI/litellm/commit/e20c1148111fe5eaa5c0e73aafbf88da4896e427) fix(mcp): set instructions=None in SigV4BuildFromTable test mocks — _@ishaan-berri_
- [`b8f7d61`](https://github.com/BerriAI/litellm/commit/b8f7d61400a907d9aeff01174e0e182cf5086c51) Merge pull request #25589 from BerriAI/litellm_oss_staging_04_11_2026 — _@Sameerlite_
- [`b1c77d2`](https://github.com/BerriAI/litellm/commit/b1c77d22f0e9ebfb6a0bd6cefd209a1581a75cb5) Merge pull request #25192 from BerriAI/litellm_oss_staging_04_04_2026 — _@Sameerlite_
- [`6d2b942`](https://github.com/BerriAI/litellm/commit/6d2b94261ade84225b8ea31e16acccb38723d9fe) fix(mypy): resolve type errors in compression/compress.py and __init__.py — _@krrish-berri-2_
- [`4a71583`](https://github.com/BerriAI/litellm/commit/4a7158395169989517d3f8d28cf34680c53e0b87) Merge pull request #25348 from BerriAI/litellm_gemini-veo-video-resolution-pricing2 — _@ishaan-berri_
- [`e2fc7d6`](https://github.com/BerriAI/litellm/commit/e2fc7d64e84c6aeb065fb48bfafb51770a4a0e1a) Merge pull request #25396 from BerriAI/litellm_bedrock-normalize-custom-tool-schema — _@ishaan-berri_
- [`6da4e0b`](https://github.com/BerriAI/litellm/commit/6da4e0b9018fdbb2fc9345e00b518fa8a5c57050) fix(ui): pre-select backend default for boolean guardrail provider fields — _@ryan-crabbe-berri_
- [`693c846`](https://github.com/BerriAI/litellm/commit/693c84661716b2f3a4d15cb9552fc64a46f5d139) Merge pull request #25674 from BerriAI/litellm_anthropic-messages-thinking-signature-retry — _@ishaan-berri_
- [`9c86973`](https://github.com/BerriAI/litellm/commit/9c869732a535befff8e2158a27bb9213fad04221) fix(ui): remove unused useMutation import and add React import to test — _@Lucas-Song-Dev_
- [`977245c`](https://github.com/BerriAI/litellm/commit/977245c30e4916885d24d176774359e20dae3e92) fix(ui): rename test file to tsx and remove unused useMutation import — _@Lucas-Song-Dev_
- [`9810a1b`](https://github.com/BerriAI/litellm/commit/9810a1b3b777e7e983af480a4594def5928c9890) Merge pull request #25344 from BerriAI/litellm_Sameerlite/healthcheck-max-tokens — _@ishaan-berri_
- [`ef774a1`](https://github.com/BerriAI/litellm/commit/ef774a1991445d39786664441c17610077bfce68) Merge remote-tracking branch 'origin/main' into fix-ui-policy-attachment-delete — _@Lucas-Song-Dev_
- [`53828dd`](https://github.com/BerriAI/litellm/commit/53828dda76632474cb11d1538b4d45ebb192ad15) refactor: migrate policy attachment deletion to useMutation hook with tests — _@Lucas-Song-Dev_
- [`f6058bd`](https://github.com/BerriAI/litellm/commit/f6058bd0ca8e0af5baba74019f392fe2e4ae26ea) Merge pull request #25673 from michelligabriele/fix/responses-api-cache-key — _@ishaan-berri_
- [`d479234`](https://github.com/BerriAI/litellm/commit/d479234f0e99df4bda70b48792b8b4dbe7fbd788) Merge pull request #25694 from milan-berri/feat/mcp-initialize-instructions — _@ishaan-berri_
- [`15ef3fa`](https://github.com/BerriAI/litellm/commit/15ef3fa8ca2b0774ed3cd9c0b8a5d073151515af) Merge pull request #25679 from michelligabriele/fix/azure-passthrough-standard-logging-object — _@ishaan-berri_
- [`69bf2bf`](https://github.com/BerriAI/litellm/commit/69bf2bfb9ac785ce2c257ed817ff0a8d5887c6b9) Fix tests — _@Sameerlite_
- [`a0e61a9`](https://github.com/BerriAI/litellm/commit/a0e61a9d495e2f0a14c4ea32bb72cefa8f57c9ba) Fix code qa — _@Sameerlite_
- [`ee40da5`](https://github.com/BerriAI/litellm/commit/ee40da58a2897fe32c6b94b661b0f5e1ce94a491) Merge branch 'main' into litellm_oss_staging_04_11_2026 — _@Sameerlite_
- [`ffb87dc`](https://github.com/BerriAI/litellm/commit/ffb87dcac9a7f064b8c0bac32edfc4f4dad51fbf) Fix failing test and code qa + lint — _@Sameerlite_
- [`ef94f5f`](https://github.com/BerriAI/litellm/commit/ef94f5fc4d98df48ec6678211972268503970619) Fix budget reset test — _@Sameerlite_
- [`f6e526c`](https://github.com/BerriAI/litellm/commit/f6e526c5bedd4b28d3aff387f364a17a7902a10b) Fix bulk update tests — _@Sameerlite_
- [`3d567c3`](https://github.com/BerriAI/litellm/commit/3d567c34dd88135b0720b99e7dd1065041b5e332) Merge pull request #25698 from BerriAI/revert-25395-fix/25388-embedding-encoding-format — _@Sameerlite_
- [`e6771fe`](https://github.com/BerriAI/litellm/commit/e6771feace5e33377cf1896206f082268331a19e) Revert "fix(embedding): omit null encoding_format for openai requests (#25395)" — _@Sameerlite_
- [`972e42c`](https://github.com/BerriAI/litellm/commit/972e42c7fd4124e343107654bbc988fa0ff112fd) Merge branch 'main' into litellm_oss_staging_04_04_2026 — _@Sameerlite_
- [`e7c630e`](https://github.com/BerriAI/litellm/commit/e7c630ed1998174e00e660a104fe96c9829395cc) refactor: inline get_upstream_initialize_instructions — _@milan-berri_
- [`7e656f4`](https://github.com/BerriAI/litellm/commit/7e656f4329becd0164ccedd56bf102f452fdcd72) test: add unit tests for MCP initialize instructions feature — _@milan-berri_
- [`8c2ebee`](https://github.com/BerriAI/litellm/commit/8c2ebee4decd5a9bfe3b8ad5fb46fc8f5ca1e5fb) refactor(mcp): reuse existing sessions for initialize instructions — _@milan-berri_
- [`96ed00e`](https://github.com/BerriAI/litellm/commit/96ed00e1840669accc54c1fbeb19639ce32023a2) feat(mcp): gateway InitializeResult.instructions from upstream or YAML — _@milan-berri_
- [`b9cd32b`](https://github.com/BerriAI/litellm/commit/b9cd32b6d4e8122b98b0a4935ec03e2a494ee626) fix(proxy): enforce team membership in team-scoped key management checks — _@milan-berri_
- [`63281e8`](https://github.com/BerriAI/litellm/commit/63281e8330109004281eac284919e9d56002ba78) fix(azure/passthrough): populate standard_logging_object via logging hook — _@michelligabriele_
- [`5670f6c`](https://github.com/BerriAI/litellm/commit/5670f6c7d49bb2255d9a9460336b74e4ea2157be) fix(anthropic): tighten thinking-signature retry (Greptile) — _@Sameerlite_
- [`0f453cc`](https://github.com/BerriAI/litellm/commit/0f453cc59d928b85ef7223c8bd92c63be9c0b9b8) Fic code qa — _@Sameerlite_
- [`b0a40fd`](https://github.com/BerriAI/litellm/commit/b0a40fde6d8095b8c9855a67ea8f6ed1984917cb) Merge pull request #25559 from shreyescodes/fix/cors-and-db-safety-bugs — _@yuneng-berri_
- [`c7f7708`](https://github.com/BerriAI/litellm/commit/c7f7708d27593a4c5ecf44f9a00c4ec2ffd6a0b1) feat(anthropic): retry /v1/messages after invalid thinking signature — _@Sameerlite_
- [`8549774`](https://github.com/BerriAI/litellm/commit/85497740ff4b88d6a5d8b38fd7b3f29afa156c96) fix(caching): add Responses API params to cache key allow-list — _@michelligabriele_
- [`e64d98f`](https://github.com/BerriAI/litellm/commit/e64d98f725b9115fb206df06e81e343ead006d08) Merge pull request #25590 from BerriAI/litellm_add_model_e2e_tests — _@yuneng-berri_
- [`9b74ff3`](https://github.com/BerriAI/litellm/commit/9b74ff3ef7f9fe924b69e3be6eb961a3e777ed4b) remove unnecessary cleanup helper — _@yuneng-berri_
- [`cce7163`](https://github.com/BerriAI/litellm/commit/cce716334806d0c1f554bf0d206958c739af6872) fix CI: replace data-testid selectors with text/role-based selectors — _@yuneng-berri_
- [`5e07c1c`](https://github.com/BerriAI/litellm/commit/5e07c1cbc9131e25be07a4476ddba7de64d04e1b) address greptile review feedback (greploop iteration 1) — _@yuneng-berri_
- [`4f364a8`](https://github.com/BerriAI/litellm/commit/4f364a8138c2ce991212c534656e3351da407382) [Test] UI - Models: Add E2E tests for Add Model flow — _@yuneng-berri_
- [`8427534`](https://github.com/BerriAI/litellm/commit/8427534f136f7e01c40e1996499efdeeaed225b4) Merge pull request #25647 from BerriAI/litellm_yj_apr_11 — _@yuneng-berri_
- [`c25b4b2`](https://github.com/BerriAI/litellm/commit/c25b4b2ce833db709800994e155592b06b46c52f) Merge pull request #25398 from BerriAI/litellm_team_settings_router — _@yuneng-berri_
- [`a306092`](https://github.com/BerriAI/litellm/commit/a306092d478fec912bd008b80cc5baad47eb6ac3) Merge pull request #25463 from BerriAI/litellm_oss_staging_04_09_2026 — _@yuneng-berri_
- [`87b6b51`](https://github.com/BerriAI/litellm/commit/87b6b5145f34dc7f3ae1cff9eaca6b38a9ffe0b6) Merge pull request #25658 from BerriAI/litellm_e2e-edit-team-model-test — _@ryan-crabbe-berri_
- [`152d689`](https://github.com/BerriAI/litellm/commit/152d6898abaefb7dc055c440d8774fdd8f0453ea) test(e2e): drop cleanup from edit team model test — _@ryan-crabbe-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
