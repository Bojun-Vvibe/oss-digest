# BerriAI/litellm — 2026-04-10

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-09T23:59:59.000Z → 2026-04-10T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is the new **Anthropic Advisor tool** support (`advisor_20260301`) landing via #25525, which adds an `AnthropicAdvisorTool` type, auto-injects the `advisor-tool-2026-03-01` beta header in both `/chat/completions` and `/messages` paths, registers it in `anthropic_beta_headers_config.json`, and auto-strips `advisor_tool_result` blocks on follow-up turns when the tool is absent (preventing 400 `invalid_request_error`s). A `v1.83.6-nightly` release ships the same day, alongside a stable patch `v1.82.3-stable.patch.4`.

Notable bug fixes:

- **Bedrock streaming usage double-counted cache tokens** in Anthropic Messages — fixed in #25517.
- **Responses WebSocket** had two related fixes: duplicate-kwarg crash when the router injected `custom_llm_provider`/etc. (#25513), and missing `?model=` query param on the backend WS URL (#25437).
- **Web search interception** now correctly runs spend/cost logging when `stream=True` (#25424).
- **A2A client** `create_a2a_client` now defaults to `DEFAULT_A2A_AGENT_TIMEOUT` (60s), matching `aget_agent_card` (#25514).

Security / proxy hardening:

- Parameterized SQL in `combined_view` token lookup, eliminating an injection vector (#25467).
- Hardened input validation on management endpoints (#25445) and aligned field-level checks across user/key update endpoints (commit `e6f18ce`).
- Hardened file-path resolution in skill archive extraction (#25475) to block traversal.
- Auth refactor consolidating UI and API token route authorization through a shared RBAC path, with `ui_routes` enum alias retained for JWT backwards compat (#25473).

Other notable work: v1/v2 guardrail and agent list responses aligned on field handling (#25478); MCP gained per-user OAuth token storage for interactive flows (commit `422b7b3`, with previously-undocumented `MCP_PER_USER_TOKEN_*` env vars now in config docs); Helm chart `extraContainers`/`extraInitContainers` now support `tpl` for value interpolation (commit `87d7e86`); and a new Docker Image Security Guide documents cosign verification (#25439). CI work pinned `pip==26.0.1` / `uv==0.10.9` and replaced bare `prisma` calls to stabilize redis/e2e jobs.

Read first: #25525 (advisor tool), #25517 (Bedrock cache double-count), #25467 (SQL parameterization).

## Releases

- **[v1.83.6-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.83.6-nightly)** — v1.83.6-nightly _by @github-actions[bot] at 2026-04-10T22:00:59Z_
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
- **[v1.82.3-stable.patch.4](https://github.com/BerriAI/litellm/releases/tag/v1.82.3-stable.patch.4)** — v1.82.3-stable.patch.4 _by @github-actions[bot] at 2026-04-10T01:00:59Z_
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

- [`e6f18ce`](https://github.com/BerriAI/litellm/commit/e6f18ce75b111c9b93dc15c72894cbdeb53177ce) fix: align field-level checks in user and key update endpoints — _@yuneng-berri_
- [`02b4934`](https://github.com/BerriAI/litellm/commit/02b4934e870c9233782ba4a1597ec46837a1ba34) Merge pull request #25424 from BerriAI/litellm_fix-websearch-interception-logging — _@ishaan-berri_
- [`b049aad`](https://github.com/BerriAI/litellm/commit/b049aadc96a41e3edf485ba4304ff2759920c829) Merge pull request #25514 from milan-berri/fix/a2a-create-a2a-client-default-timeout — _@ishaan-berri_
- [`9a04875`](https://github.com/BerriAI/litellm/commit/9a0487553d2a645a75eff46c3f7d565c41ba068d) Merge remote-tracking branch 'origin' into litellm_oss_staging_04_09_2026 — _@yuneng-berri_
- [`831083b`](https://github.com/BerriAI/litellm/commit/831083b56549f329cfc2e832c070ce488642a5af) Merge pull request #25525 from BerriAI/feat/anthropic-advisor-tool — _@ishaan-berri_
- [`c5d93e6`](https://github.com/BerriAI/litellm/commit/c5d93e67f4becf4f65ace595265ed9787656f378) Enhance error handling in FileContentStreamingHandler for custom LLM provider routing — _@harish876_
- [`d1dda3d`](https://github.com/BerriAI/litellm/commit/d1dda3d30b3b32e79eddb3df82f6f230164d4d2a) Enhance file content streaming handler to support custom LLM provider routing — _@harish876_
- [`4e12d3c`](https://github.com/BerriAI/litellm/commit/4e12d3c562d77df6fe29e50e7e9b4ed81f80e3fc) docs: document april townhall announcements (#25537) — _@krrish-berri-2_
- [`4e5e739`](https://github.com/BerriAI/litellm/commit/4e5e7395595950355d9f1836ef9dfe92a3b52884) resolve dependency cycle — _@harish876_
- [`bb7ac7c`](https://github.com/BerriAI/litellm/commit/bb7ac7c4cad2d60958ac9b337c5f9279de2cda2a) [Fix] Finish uv migration for redis_caching, e2e_ui, and fix prisma/black in CI — _@yuneng-berri_
- [`9897c6d`](https://github.com/BerriAI/litellm/commit/9897c6d46b7f4155b2577a0b200c2cc0e785c737) refactor(advisor): replace hardcoded "advisor_20260301" with ANTHROPIC_ADVISOR_TOOL_TYPE constant — _@ishaan-berri_
- [`ccf3dc3`](https://github.com/BerriAI/litellm/commit/ccf3dc316133677ece53a7ad0c808508a3bbd48e) Code Comments incorporated. — _@harish876_
- [`d67b5f8`](https://github.com/BerriAI/litellm/commit/d67b5f8b080a061c96ee733b9a1df91e9578b3b4) Merge pull request #25526 from BerriAI/litellm_yj_04_09_2026 — _@yuneng-berri_
- [`f2f2a91`](https://github.com/BerriAI/litellm/commit/f2f2a91a2939d02cf313b2351cf7594e7afaeb80) Merge pull request #25480 from BerriAI/litellm_/eloquent-allen — _@yuneng-berri_
- [`d6e2a74`](https://github.com/BerriAI/litellm/commit/d6e2a74c0ff3b9d993c26734677309252cb59da4) docs: move advisor tool doc to completion/ guides section in sidebar — _@ishaan-berri_
- [`9e4352a`](https://github.com/BerriAI/litellm/commit/9e4352afb42a870a70f572121d6c39a32c48b3f8) Merge pull request #25528 from BerriAI/yj_bump_10 — _@yuneng-berri_
- [`1f148ea`](https://github.com/BerriAI/litellm/commit/1f148ea6a1472871a53cca003b1a34ef5b463650) bump: version 1.83.5 → 1.83.6 — _@yuneng-berri_
- [`ed973c0`](https://github.com/BerriAI/litellm/commit/ed973c049f07047eb820f323ef4f1ede669b36bb) docs: add Advisor Tool documentation page — _@ishaan-berri_
- [`318196f`](https://github.com/BerriAI/litellm/commit/318196f793149257b16019dc5dce1a3dba1c6b9e) test(advisor): add tests for auto-strip advisor_tool_result blocks — _@ishaan-berri_
- [`9742bcd`](https://github.com/BerriAI/litellm/commit/9742bcd3ae4642eb4a9188ce81c63515125416f6) feat(advisor): call strip_advisor_blocks in /messages transform path — _@ishaan-berri_
- [`ab8d92c`](https://github.com/BerriAI/litellm/commit/ab8d92c14c6f0fde8f5469f619f38bf09f495247) feat(advisor): call strip_advisor_blocks in chat/completions transform_request — _@ishaan-berri_
- [`3a89465`](https://github.com/BerriAI/litellm/commit/3a89465d18aacb631d2bab74a798c15ac00d7507) feat(advisor): auto-strip advisor_tool_result blocks when advisor tool absent — _@ishaan-berri_
- [`193a57b`](https://github.com/BerriAI/litellm/commit/193a57b5d244aeb9bec3819f8c48dfdc80aa5945) Merge pull request #25478 from BerriAI/litellm_align_list_response_field_handling — _@yuneng-berri_
- [`576e6a0`](https://github.com/BerriAI/litellm/commit/576e6a06e37474a3d13fbe6e85c0e1717edf544c) Merge pull request #25517 from BerriAI/litellm_bedrock-messages-cache-prompt-double-count — _@yuneng-berri_
- [`ec524a0`](https://github.com/BerriAI/litellm/commit/ec524a0e7a2f9c044062f6e1e58973febc9854fa) Merge pull request #25513 from BerriAI/litellm_fix_ws_duplicate_kwarg — _@yuneng-berri_
- [`91f6d49`](https://github.com/BerriAI/litellm/commit/91f6d49b877790bee944a00f96c26a6edc214276) feat(anthropic): register advisor-tool-2026-03-01 in beta headers config — _@ishaan-berri_
- [`55f0e66`](https://github.com/BerriAI/litellm/commit/55f0e6605b2d3f0a7d328aaea3131fea73b83012) test(anthropic): add advisor tool tests for /messages beta header path — _@ishaan-berri_
- [`ed4aa84`](https://github.com/BerriAI/litellm/commit/ed4aa8423537864a96e81f26d2b8ef7e16ec3d09) feat(anthropic/messages): auto-inject advisor-tool-2026-03-01 beta header in /messages path — _@ishaan-berri_
- [`0f9eba4`](https://github.com/BerriAI/litellm/commit/0f9eba4de0b69165c33bba9e725d5d7aa6ee66ff) test(anthropic): add advisor tool transformation tests — _@ishaan-berri_
- [`a30a538`](https://github.com/BerriAI/litellm/commit/a30a538ae5970da1fc91a0226704a49177277582) feat(anthropic): support advisor_20260301 tool and auto-inject advisor beta header — _@ishaan-berri_
- [`506de45`](https://github.com/BerriAI/litellm/commit/506de4527e9e1d99797eba6ebdba944796a09db0) feat(anthropic): add AnthropicAdvisorTool type and ADVISOR_TOOL_2026_03_01 beta header enum — _@ishaan-berri_
- [`bec448d`](https://github.com/BerriAI/litellm/commit/bec448dd5d3ea7a4b299fe48c4776bd54abd1201) Merge pull request #25524 from BerriAI/main — _@Sameerlite_
- [`1c74e17`](https://github.com/BerriAI/litellm/commit/1c74e17bed3ee52015f0308f4bc2fa472aa819d0) E2E test to assert response headers from the openai files change — _@harish876_
- [`f0d2d26`](https://github.com/BerriAI/litellm/commit/f0d2d263015bb91b8cb4d310f8c2896400805eea) fix(bedrock): avoid double-counting cache tokens in Anthropic Messages streaming usage — _@Sameerlite_
- [`baba3eb`](https://github.com/BerriAI/litellm/commit/baba3ebed896acbf73d6fc50c86f7ae0f9f27d90) Refactor file content streaming implementation — _@harish876_
- [`824269d`](https://github.com/BerriAI/litellm/commit/824269d585c83226187920ee053c2adba6ca740f) test(a2a): assert create_a2a_client default timeout uses DEFAULT_A2A_AGENT_TIMEOUT — _@milan-berri_
- [`2a4e5b5`](https://github.com/BerriAI/litellm/commit/2a4e5b59fda3c5b4826094ad20ead63e4a14d021) fix(responses): prevent duplicate kwargs in WebSocket call — _@yuneng-berri_
- [`2ea6e89`](https://github.com/BerriAI/litellm/commit/2ea6e89b2c17f897a405e0a700ab8a6f2eb3496c) fix(a2a): default create_a2a_client timeout to DEFAULT_A2A_AGENT_TIMEOUT — _@milan-berri_
- [`d0e347a`](https://github.com/BerriAI/litellm/commit/d0e347af32c6495719ae81e13edfeae091357333) Merge pull request #25473 from BerriAI/litellm_auth_rbac_cleanup — _@yuneng-berri_
- [`3af7de4`](https://github.com/BerriAI/litellm/commit/3af7de42225ef4c7c41289259f7a55ab67fa23f4) retain ui_routes enum alias for JWT config backwards compatibility — _@ryan-crabbe-berri_
- [`87d7e86`](https://github.com/BerriAI/litellm/commit/87d7e86479a934cf4f37b2de0723238b4fbb80a8) feat(helm): add tpl support to extraContainers and extraInitContainers — _@jlav_
- [`044d434`](https://github.com/BerriAI/litellm/commit/044d434b502de6bcfd853a21c52efbb034b8f315) remove unused iterator imports — _@harish876_
- [`a771e19`](https://github.com/BerriAI/litellm/commit/a771e1939ce099d90c258ef3c3fae0730d959641) Fix unhandled "window is not defined" error in user_edit_view tests — _@yuneng-berri_
- [`4b6eb02`](https://github.com/BerriAI/litellm/commit/4b6eb02b667a144ba50ec48ba285b93319f5e19a) [Fix] Pin uv/pip versions and fix bare prisma calls in CI — _@yuneng-berri_
- [`28bce0b`](https://github.com/BerriAI/litellm/commit/28bce0b05ef4271b65748ed8f47c7f3ec986622b) fix: align v1 guardrail and agent list responses with v2 field handling — _@yuneng-berri_
- [`a889dea`](https://github.com/BerriAI/litellm/commit/a889dea8ccfbfcef53bbcae077b1cf7d17b9d32e) [Docs] Add missing MCP per-user token env vars to config_settings — _@yuneng-berri_
- [`7ad5d65`](https://github.com/BerriAI/litellm/commit/7ad5d6551d9b03779ebc899d0babb7b62389b15d) fix(responses-ws): use urllib.parse to append model param, fix test mocking — _@joereyna_
- [`7f87c1f`](https://github.com/BerriAI/litellm/commit/7f87c1f7fbf07a5c0cf39b61416ed75b2ab819ca) fix(responses-ws): append ?model= to backend WebSocket URL — _@joereyna_
- [`c42594a`](https://github.com/BerriAI/litellm/commit/c42594ab3ea02356f2b9ae51ac14cb06f117b1c4) address greptile review feedback (greploop iteration 1) — _@yuneng-berri_
- [`92cf642`](https://github.com/BerriAI/litellm/commit/92cf642c2fc30c47054a2b4ddf98c0603974d530) [Test] UI - Unit tests: raise global vitest timeout and remove per-test overrides — _@yuneng-berri_
- [`3ac0d7c`](https://github.com/BerriAI/litellm/commit/3ac0d7c88c18e7f9922e4abb13e27708b07d29ed) [Fix] Let setSecureItem propagate storage errors to callers — _@yuneng-berri_
- [`f9dc5f5`](https://github.com/BerriAI/litellm/commit/f9dc5f5ad3d614134012cc19ab895254d64d1549) Update docker/Dockerfile.custom_ui — _@yuneng-berri_
- [`a29e2ee`](https://github.com/BerriAI/litellm/commit/a29e2eea629a3e3a4d100f1c4303ceb17900a4c3) [Fix] Address review feedback on storage utility and Dockerfiles — _@yuneng-berri_
- [`20bd668`](https://github.com/BerriAI/litellm/commit/20bd668bfa3a07492b1d935166f250ac7cc6a097) fix(docker): add non-root USER and HEALTHCHECK to Dockerfile.custom_ui — _@yuneng-berri_
- [`9baf586`](https://github.com/BerriAI/litellm/commit/9baf586791b782b5b009577e6bcbf38c8c689385) [Fix] UI: resolve CodeQL security alerts and Dockerfile.health_check hardening — _@yuneng-berri_
- [`422b7b3`](https://github.com/BerriAI/litellm/commit/422b7b33570d24532d16d01fd1483c4be9d9e7b0) feat(mcp): add per-user OAuth token storage for interactive MCP flows — _@csoni-cweave_
- [`148dd70`](https://github.com/BerriAI/litellm/commit/148dd7096c1b472ce83fbc64e69ccf438af3b18b) format vertex test file — _@joereyna_
- [`7a482a8`](https://github.com/BerriAI/litellm/commit/7a482a83ab6ddeab7e5300679072cba017f18abf) fix(test): mock headers in test_completion_fine_tuned_model — _@joereyna_
- [`a6d81e1`](https://github.com/BerriAI/litellm/commit/a6d81e15751a3f0113d38f850de7ef3be47a0e7a) docs: add Docker Image Security Guide for cosign verification and deployment best practices (#25439) — _@krrish-berri-2_
- [`af4d4ab`](https://github.com/BerriAI/litellm/commit/af4d4ab2ee4f410cb1d54d9dc5b77b21bad27d72) Introduced Content-Length response headers into the streaming response. This provides a 1:1 behaviour mapping similar to the non streaming behaviour. — _@harish876_
- [`2e0af37`](https://github.com/BerriAI/litellm/commit/2e0af3795afbaef75f541fd5c6123cf043b70fa7) fix(e2e): broaden Copy Key button regex to match both modal versions — _@yuneng-berri_
- [`89320a9`](https://github.com/BerriAI/litellm/commit/89320a955c3211efbdafaf04430db825923710cf) fix(e2e): remove flaky banner check and increase regenerate key timeout — _@yuneng-berri_
- [`5666ed0`](https://github.com/BerriAI/litellm/commit/5666ed04ca461fb5d0fd5bdbb3e7864b3738ad42) Merge pull request #25475 from BerriAI/litellm_harden_skill_file_paths — _@yuneng-berri_
- [`9a4f5d7`](https://github.com/BerriAI/litellm/commit/9a4f5d73169408c44177fca411c80aa628048917) fix: remove unnecessary f-string prefix in SQL query — _@yuneng-berri_
- [`820b457`](https://github.com/BerriAI/litellm/commit/820b45784ca21f1e7d6c6de5d7de91c14cfa36de) Merge remote-tracking branch 'origin/main' into litellm_harden_skill_file_paths — _@yuneng-berri_
- [`6a15adc`](https://github.com/BerriAI/litellm/commit/6a15adcd64137d37f73dee76dfe7481f8c2d9196) fix: harden file path resolution in skill archive extraction — _@yuneng-berri_
- [`e828a91`](https://github.com/BerriAI/litellm/commit/e828a91eeefbc2e6e5fe7a34ddd40a5201216b15) [Docs] Add missing MCP per-user token env vars to config_settings — _@yuneng-berri_
- [`b7d7b93`](https://github.com/BerriAI/litellm/commit/b7d7b93eb9024c2cdec2cd007f3be87974a58e9d) fix(responses-ws): use urllib.parse to append model param, fix test mocking — _@joereyna_
- [`1264bf3`](https://github.com/BerriAI/litellm/commit/1264bf3f8ef145a981c6c1d18da4306ab635e80f) fix(responses-ws): append ?model= to backend WebSocket URL — _@joereyna_
- [`236bb4f`](https://github.com/BerriAI/litellm/commit/236bb4f59fb7892b465661379bf546253e2dba3e) address greptile review feedback (greploop iteration 1) — _@yuneng-berri_
- [`06f3679`](https://github.com/BerriAI/litellm/commit/06f367977820e25f83fec9d8cef61f9fe17b6a45) [Test] UI - Unit tests: raise global vitest timeout and remove per-test overrides — _@yuneng-berri_
- [`df3ddd7`](https://github.com/BerriAI/litellm/commit/df3ddd7a81222ed653c3fb4935e7028181b3e0c8) [Fix] Let setSecureItem propagate storage errors to callers — _@yuneng-berri_
- [`4e06871`](https://github.com/BerriAI/litellm/commit/4e068718c91e0de59d75e752687174ee98c7c944) Update docker/Dockerfile.custom_ui — _@yuneng-berri_
- [`464c988`](https://github.com/BerriAI/litellm/commit/464c98878eefc1e7484433f6950dabd40541354f) [Fix] Address review feedback on storage utility and Dockerfiles — _@yuneng-berri_
- [`4272d80`](https://github.com/BerriAI/litellm/commit/4272d80c8367da8a40ad416ceb43a6d555f3bab8) fix(docker): add non-root USER and HEALTHCHECK to Dockerfile.custom_ui — _@yuneng-berri_
- [`a12ba1f`](https://github.com/BerriAI/litellm/commit/a12ba1f4d1bf146906340b132bcfcccc9a20f9a8) [Fix] UI: resolve CodeQL security alerts and Dockerfile.health_check hardening — _@yuneng-berri_
- [`8dc5ab3`](https://github.com/BerriAI/litellm/commit/8dc5ab39f00beb604ee82cbc91d5e8d6053aaa81) feat(mcp): add per-user OAuth token storage for interactive MCP flows — _@csoni-cweave_
- [`f8ae642`](https://github.com/BerriAI/litellm/commit/f8ae6427363cf3c1c5fd2b1d03d9162ffb68ef00) format vertex test file — _@joereyna_
- [`fb527ae`](https://github.com/BerriAI/litellm/commit/fb527ae25020494eb5ad14e90e8c849c1202751e) fix(test): mock headers in test_completion_fine_tuned_model — _@joereyna_
- [`d4288b4`](https://github.com/BerriAI/litellm/commit/d4288b4ff48d8e134813bd7da5816251f8b3939e) ci: fix LITELLM_LICENSE interpolation in e2e_ui_testing — _@yuneng-berri_
- [`26e99f2`](https://github.com/BerriAI/litellm/commit/26e99f22b341107ee0b26cd4224d2e51101cefa0) refactor: consolidate route auth for UI and API tokens — _@ryan-crabbe-berri_
- [`9e6d2d2`](https://github.com/BerriAI/litellm/commit/9e6d2d206967fb001eb7f82f28f58d5ddfa6507e) Merge pull request #25468 from BerriAI/litellm_/compassionate-shannon — _@yuneng-berri_
- [`9071dbb`](https://github.com/BerriAI/litellm/commit/9071dbba123d66cef07ab579b963cba8f7006ac9) fix(ui): remove leftover setIsOwnKey call after state removal — _@yuneng-berri_
- [`cc43d09`](https://github.com/BerriAI/litellm/commit/cc43d09d79833fc69fbaf4b59ddc2ac5486c2e82) Potential fix for pull request finding 'CodeQL / Unused variable, import, function or class' — _@yuneng-berri_
- [`c7f610c`](https://github.com/BerriAI/litellm/commit/c7f610c57e03323886587e1cc0efa7bc6f2ae415) Merge remote-tracking branch 'origin/main' into litellm_/compassionate-shannon — _@yuneng-berri_
- [`71640f0`](https://github.com/BerriAI/litellm/commit/71640f062ce9fcbab089ef8ce9fed46b79f45981) Merge remote-tracking branch 'origin/main' into litellm_regen_key_modal_antd — _@yuneng-berri_
- [`42e5583`](https://github.com/BerriAI/litellm/commit/42e558378809fbf482e21c6163edb95bdc8191de) Merge pull request #25471 from BerriAI/litellm_doc_mcp_per_user_token_env_vars — _@yuneng-berri_
- [`ee374c4`](https://github.com/BerriAI/litellm/commit/ee374c48848f16bc39ff6c7abc536a6553f6754a) ci: pass LITELLM_LICENSE to e2e_ui_testing proxy — _@yuneng-berri_
- [`ce0b57b`](https://github.com/BerriAI/litellm/commit/ce0b57b4ffc0c56250a97f192188fca2bd5c946f) [Docs] Add missing MCP per-user token env vars to config_settings — _@yuneng-berri_
- [`1214dc9`](https://github.com/BerriAI/litellm/commit/1214dc93b372dda6a68e46d869f9472287562799) Merge pull request #25467 from jaydns/fix/parameterize-combined-view-query — _@yuneng-berri_
- [`9b33d9d`](https://github.com/BerriAI/litellm/commit/9b33d9d4276a27fe96becaaf6b41a4d622385401) Merge pull request #25445 from jaydns/fix/proxy-input-validation — _@yuneng-berri_
- [`d0168bc`](https://github.com/BerriAI/litellm/commit/d0168bcff10e9550fa9fda815db8723e3f603f96) ci: retrigger e2e — _@yuneng-berri_
- [`92dbd2c`](https://github.com/BerriAI/litellm/commit/92dbd2c4919f5a95d841893c761328b80ea43ca0) address greptile review feedback (greploop iteration 1) — _@yuneng-berri_
- [`aa0fa10`](https://github.com/BerriAI/litellm/commit/aa0fa104ba6e6898ec16bba652c31aebd15bbc45) Merge pull request #25437 from joereyna/litellm_fix_responses_websocket_model_query_param — _@yuneng-berri_
- [`3a316b9`](https://github.com/BerriAI/litellm/commit/3a316b913179ade01fe12b42162089c6a80271de) [Test] UI - Unit tests: raise global vitest timeout and remove per-test overrides — _@yuneng-berri_
- [`1d50f77`](https://github.com/BerriAI/litellm/commit/1d50f774e253909fdda1847fa27871e3e6cd5b59) fix(ui): support all duration suffixes in regenerate expiry preview — _@yuneng-berri_
- [`f95ef93`](https://github.com/BerriAI/litellm/commit/f95ef935efd315a659316e7cd0b4232e1479ed5b) fix(ui): prefer form values over API echo in regenerate update payload — _@yuneng-berri_
- [`839d9bd`](https://github.com/BerriAI/litellm/commit/839d9bd5f33ae238567925387dd619b79f4b51f5) refactor(ui): polish regenerate key success view — _@yuneng-berri_
- [`4dc416e`](https://github.com/BerriAI/litellm/commit/4dc416ee749122ca91e3bca095217478663419e7) fix(proxy): use parameterized query for combined_view token lookup — _@jaydns_
- [`ce75598`](https://github.com/BerriAI/litellm/commit/ce75598f97769b9787bda2f678b4ec3343946515) Merge pull request #25384 from BerriAI/litellm_/bold-pare — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
