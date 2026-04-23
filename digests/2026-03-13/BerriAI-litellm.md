# BerriAI/litellm — 2026-03-13

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-03-12T23:59:59.000Z → 2026-03-13T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy internal-dev day on the proxy: a large `litellm_internal_dev_03_12_2026` branch was merged into main (#23591) along with a release-day merge (#23584) following the 1.82.1 → 1.82.2 version bump (#23496). Most user-visible work centers on key/org management, GPT-5.4 routing, and a wave of CI/test stabilization.

**Key/org management.** A new `/key/update` capability lets callers set `organization_id` on existing keys (#23557, commit `377c12b`). Two related correctness fixes landed alongside it: org/team key-limit checks were double-counting the key being updated (`133471f`), and the org-limit check now only runs when throughput-related fields (`tpm_limit`/`rpm_limit`) actually change (`1038a11`). A self-exclusion bug where raw key strings were compared against SHA-256 hashes — so the key under update was never excluded from the count — was also fixed (`818c097`). The `update_key_fn` was refactored to extract `_validate_update_key_data` for lint compliance (#23590).

**GPT-5.4 routing.** Sameerlite's PR #23577 routes GPT-5.4 requests with both tools and reasoning to the Responses API; an earlier "drop reasoning_effort when tools present" approach was reverted (`3596464`) in favor of preserving reasoning. A separate QA-improvement PR (#23535) was merged then immediately reverted (#23566), so reviewers should track which behavior is actually shipping.

**Other fixes worth noting.** #23472 (ishaan-jaff) caps the managed-object poll size, expires stale rows, and adds a kill-switch to prevent OOM/Prisma connection loss — a meaningful proxy stability fix. The public model hub now correctly shows config-defined models after save (#23501), fixing a stale-DB overwrite in `get_config()`. A V2 user-info endpoint was merged (#23437) with N+1 and double-fetch bugs fixed pre-merge (`cd1b31b`). Gemini native `generate_content` now preserves `toolConfig` (#23493), and Anthropic-native tool formats survive guardrail conversion (`45ba9e1`).

**CI noise.** Roughly 20+ commits update tests for deprecated model names (gpt-3.5-turbo-0301, gemini-1.5-*, o1-mini), replace fixed sleeps with polling, and quarantine OIDC tests dependent on external infra. Mostly mechanical — skim unless chasing a specific flake.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`6549b45`](https://github.com/BerriAI/litellm/commit/6549b4583f87e3d6e49a5ebb1bf4e08db3b7927e) Merge pull request #23591 from BerriAI/litellm_internal_dev_03_12_2026 — _@yuneng-jiang_
- [`811ce13`](https://github.com/BerriAI/litellm/commit/811ce13ad49789ced88513ed985a9dd2d4af4c56) Merge pull request #23590 from BerriAI/litellm_refactor_update_key_fn — _@yuneng-jiang_
- [`1d403e9`](https://github.com/BerriAI/litellm/commit/1d403e9bd8141fb34f6b37bea95a7e6d4d6b30e3) refactor(key_management): extract validation logic from update_key_fn to fix PLR0915 — _@yuneng-jiang_
- [`85e5ef4`](https://github.com/BerriAI/litellm/commit/85e5ef45d35d37e86075c09f25a9e02d3ed5b40b) Merge pull request #23589 from BerriAI/litellm_fix_responses_background_cost_tests — _@yuneng-jiang_
- [`3aeca22`](https://github.com/BerriAI/litellm/commit/3aeca220319125a8616ed1236f4235de84082a38) fix(test): update test_responses_background_cost assertions for pagination and stale cleanup — _@yuneng-jiang_
- [`dca231e`](https://github.com/BerriAI/litellm/commit/dca231e3f62907c44514711900e5f765074a0042) Merge pull request #23557 from BerriAI/litellm_ui_key_org-2 — _@yuneng-jiang_
- [`818c097`](https://github.com/BerriAI/litellm/commit/818c097ca9da96a6be30a489612acdc9593b20bc) Fix self-exclusion hash mismatch and missing throughput field checks — _@yuneng-jiang_
- [`1038a11`](https://github.com/BerriAI/litellm/commit/1038a119ce489a31ba531ceec978ab51d7eecb75) Skip org limit check when non-throughput fields are updated — _@yuneng-jiang_
- [`133471f`](https://github.com/BerriAI/litellm/commit/133471f882de4ab62589363facb0b75d80551cf8) Fix double-counting bug in org/team key limit checks on update — _@yuneng-jiang_
- [`0b3dc00`](https://github.com/BerriAI/litellm/commit/0b3dc0044087add9cc68d8f23afeb8749ac312e4) Merge remote-tracking branch 'origin' into litellm_internal_dev_03_12_2026 — _@yuneng-jiang_
- [`0e44c46`](https://github.com/BerriAI/litellm/commit/0e44c460b597cf6cd7078bdc0bf3c093f85201bb) Merge pull request #23584 from BerriAI/litellm_release_day_03_12_2026 — _@yuneng-jiang_
- [`f351bbd`](https://github.com/BerriAI/litellm/commit/f351bbdb368349e6ff65fff7017182ac13ca28dc) [Fix] Derive SPEND_PER_REQUEST dynamically in spend accuracy tests — _@yuneng-jiang_
- [`f5662ee`](https://github.com/BerriAI/litellm/commit/f5662eeb8a37c27b8e4161119324bc5b0095ab1c) [Fix] Update otel and spend tracking test configs to use gpt-3.5-turbo — _@yuneng-jiang_
- [`3ec7c2a`](https://github.com/BerriAI/litellm/commit/3ec7c2a81efdb2b504a516123c95a335c1fd5bba) [Fix] Fail fast when team member spend not flushed in time — _@yuneng-jiang_
- [`e277963`](https://github.com/BerriAI/litellm/commit/e2779639c03b667c482fae9c0c9a4de41b2022c4) [Fix] Fix test_users_in_team_budget using model with no pricing data — _@yuneng-jiang_
- [`4e70254`](https://github.com/BerriAI/litellm/commit/4e70254d5611bf640a018d661eda057c6f4273fb) [Fix] Increase _delete_file retry budget to reduce flakiness — _@yuneng-jiang_
- [`57865ec`](https://github.com/BerriAI/litellm/commit/57865ec96e9862e2413108daecfbeac50c303d24) Revert "[Fix] Populate _hidden_params.model_id in batch terminal-state shortcut path" — _@yuneng-jiang_
- [`ca20330`](https://github.com/BerriAI/litellm/commit/ca2033036f1797357b9bc0322add2e0039bdb8b0) [Fix] Populate _hidden_params.model_id in batch terminal-state shortcut path — _@yuneng-jiang_
- [`5b755db`](https://github.com/BerriAI/litellm/commit/5b755db329e2bc3debebb6a47bfdadd7bab43b14) [Fix] Correct mypy fixes for realtime_api and presidio — _@yuneng-jiang_
- [`1f71578`](https://github.com/BerriAI/litellm/commit/1f71578de2958b659dc640bc1b208064f2c1af6a) [Fix] Add flaky reruns to test_e2e_managed_batch — _@yuneng-jiang_
- [`e40ebf2`](https://github.com/BerriAI/litellm/commit/e40ebf262adb331554e49520b47d79102efe858c) Revert "[Fix] Populate _hidden_params.model_id in batch terminal-state shortcut path" — _@yuneng-jiang_
- [`25e161a`](https://github.com/BerriAI/litellm/commit/25e161a0fa19cd3f889f70261e7f721f4ff6c87e) fix(tests): remove test_completion_bedrock_claude_sts_oidc_auth and test_completion_bedrock_httpx_command_r_sts_oidc_auth that depend on external infra — _@yuneng-jiang_
- [`efe6ddf`](https://github.com/BerriAI/litellm/commit/efe6ddfc687674d19a8dd34775df3c3c8d6df384) Merge pull request #23577 from Sameerlite/litellm_gpt54-tools-reasoning-routing — _@yuneng-jiang_
- [`7dce61c`](https://github.com/BerriAI/litellm/commit/7dce61ce48c46bca7bae9e2a98d480361f9bfdc7) fix(tests): update TestGPT5ReasoningEffortPreservation for dict normalization — _@Sameerlite_
- [`a6ab172`](https://github.com/BerriAI/litellm/commit/a6ab172db0e3fe5867a9a4f6e67c2effbb1c6065) [Fix] Use type:ignore instead of Union return type for realtime endpoint — _@yuneng-jiang_
- [`57397e0`](https://github.com/BerriAI/litellm/commit/57397e0d269b296b3c8fc8e26f03c42dbe58ba32) Merge pull request #23576 from Sameerlite/litellm_gpt54-tools-reasoning-routing — _@yuneng-jiang_
- [`1642a2f`](https://github.com/BerriAI/litellm/commit/1642a2f7acecbe8ab117583ebcf6ef7918f87e28) [Fix] Populate _hidden_params.model_id in batch terminal-state shortcut path — _@yuneng-jiang_
- [`408b717`](https://github.com/BerriAI/litellm/commit/408b717cb9fee5551cf27a2ba45f17d308cb845a) Fix gpt 5 transformation tests — _@Sameerlite_
- [`30645d6`](https://github.com/BerriAI/litellm/commit/30645d683fad8972675c1f2f881f8f9456427d63) Reserve reasoning for responses via chat completion — _@Sameerlite_
- [`7abbe2d`](https://github.com/BerriAI/litellm/commit/7abbe2dc064bec0717ca1d3c7d981131eb02db43) Fix routing of tool call + reasoning effor for gpt-5.4 — _@Sameerlite_
- [`3596464`](https://github.com/BerriAI/litellm/commit/3596464d11ada2cd4da1b8a097243b1e9502a627) Revert "feat(openai): drop reasoning_effort for gpt-5.4 when tools present" — _@Sameerlite_
- [`e88ee33`](https://github.com/BerriAI/litellm/commit/e88ee338bd06809ebf241834d5be9067012cb2b3) [Fix] Resolve 7 mypy linting errors across 5 files — _@yuneng-jiang_
- [`6a90596`](https://github.com/BerriAI/litellm/commit/6a90596377a9218b350a2318ef149220517e303f) updating Dockerfile to tar 7.5.11 — _@yuneng-jiang_
- [`1b96064`](https://github.com/BerriAI/litellm/commit/1b9606460096138dd10bb52eb46b5f8667a1081a) fix(proxy): prevent OOM/Prisma connection loss from unbounded managed-object poll (#23472) — _@ishaan-jaff_
- [`488a4d2`](https://github.com/BerriAI/litellm/commit/488a4d2b6307dffdc7a558098cd84fac8a567be5) bumping tar for security — _@yuneng-jiang_
- [`0fbfb8e`](https://github.com/BerriAI/litellm/commit/0fbfb8e7725116c627279926191e8b3623372a72) fix(tests): remove test_oidc_circle_v1_with_amazon_fips that depends on external infra — _@yuneng-jiang_
- [`9ad2223`](https://github.com/BerriAI/litellm/commit/9ad2223531145a19841a60006bd5ddb71486e557) [Fix] Convert _has_attribute_error_in_chain from recursive to iterative — _@yuneng-jiang_
- [`4c3a4e6`](https://github.com/BerriAI/litellm/commit/4c3a4e6c38a9e6ac4afb2cf49e2ba86eb238e654) Merge pull request #23566 from BerriAI/revert-23535-litellm_improve_qa-5.4 — _@yuneng-jiang_
- [`2b71b0f`](https://github.com/BerriAI/litellm/commit/2b71b0fb25f77cf632ac4a0627208cbffbf55819) Revert "QA:  improve gpt-5.4 code/bugs" — _@yuneng-jiang_
- [`8dc198e`](https://github.com/BerriAI/litellm/commit/8dc198eccf5180ea102441610afd883758483e6b) Merge pull request #23535 from Sameerlite/litellm_improve_qa-5.4 — _@yuneng-jiang_
- [`6ebd457`](https://github.com/BerriAI/litellm/commit/6ebd457146ee8b829a7ce7d24310e71c1b03fdb2) fix(tests): update remaining PKCE SSO tests to mock get_async_httpx_client — _@yuneng-jiang_
- [`11cf288`](https://github.com/BerriAI/litellm/commit/11cf288f9880e4da8a6335b289c2127ee97f7ed0) fix(tests): fix broken test_router_fallbacks_with_cooldowns_and_model_id — _@yuneng-jiang_
- [`61cee53`](https://github.com/BerriAI/litellm/commit/61cee5320015f6f73429207c8001d17066ac7f8b) fix(tests): fix flaky qwen global endpoint test by mocking AsyncHTTPHandler at class level — _@yuneng-jiang_
- [`b98ecd8`](https://github.com/BerriAI/litellm/commit/b98ecd8c1d3b6ad82045bce43f0fef4dc3004d5f) fix(tests): quarantine flaky test_oidc_circle_v1_with_amazon — _@yuneng-jiang_
- [`2b61f2a`](https://github.com/BerriAI/litellm/commit/2b61f2a41b3f3c24e5e10b22b024c4b4cd0dbeab) ui logo (#23556) — _@ishaan-jaff_
- [`4e42333`](https://github.com/BerriAI/litellm/commit/4e42333925c17ceee5bbf4f34795e3412dad868b) fix claude.md — _@ishaan-jaff_
- [`ac8d6d4`](https://github.com/BerriAI/litellm/commit/ac8d6d4fa8015abf870d99eb7b31c5e73b45b195) fix: ensure metadata isolation in silent experiment to prevent metric collision — _@Harshit28j_
- [`7e662af`](https://github.com/BerriAI/litellm/commit/7e662afe01a094887b63c5ca0fe097a22073b953) feat(azure): Azure Model Router cost breakdown in UI + additional_costs from hidden_params — _@Sameerlite_
- [`8f769ef`](https://github.com/BerriAI/litellm/commit/8f769ef524a5bf95f3517961e85b6a3867c385ae) docs(blog): add WebRTC blog post link — _@Sameerlite_
- [`511cd2b`](https://github.com/BerriAI/litellm/commit/511cd2ba2b31615872dbb2568433e5006a7c4a44) fix: silent metrics race condition — _@Harshit28j_
- [`118d811`](https://github.com/BerriAI/litellm/commit/118d8114f8d606faa40f7802765f53ffce37762c) Include time window in export filename to prevent Vantage overwrites — _@Harshit28j_
- [`9b3ffd0`](https://github.com/BerriAI/litellm/commit/9b3ffd04ef7cbeaeee1074bcd2e47fdaa7b5636b) Reserve reasoning for responses via chat completion — _@Sameerlite_
- [`288b08f`](https://github.com/BerriAI/litellm/commit/288b08fd2517aaebc669ea917bda2f3420e95f22) Fix routing of tool call + reasoning effor for gpt-5.4 — _@Sameerlite_
- [`90b03f6`](https://github.com/BerriAI/litellm/commit/90b03f6c67931846ee901dde4d0b8cebc708db19) Revert "feat(openai): drop reasoning_effort for gpt-5.4 when tools present" — _@Sameerlite_
- [`a5bec49`](https://github.com/BerriAI/litellm/commit/a5bec4911fdd1e44bcae1c661a17424eb7d15aac) Fix _supports_reasoning_effort_level for responses bridge — _@Sameerlite_
- [`b08f464`](https://github.com/BerriAI/litellm/commit/b08f464ee833cb19807c08b4e7e4452afcd168dd) fix(tests): replace deprecated model refs in cost and model_info tests — _@yuneng-jiang_
- [`a012486`](https://github.com/BerriAI/litellm/commit/a01248658e498274ae62d8f3edb191e28c74c2f6) fix(streaming): preserve upstream custom fields on final chunk — _@Sameerlite_
- [`3012c6d`](https://github.com/BerriAI/litellm/commit/3012c6d07099755b66b754ae8642db53fca29376) fix(tests): replace fixed sleeps with polling in spend accuracy tests — _@yuneng-jiang_
- [`377c12b`](https://github.com/BerriAI/litellm/commit/377c12b917652adb98ccaab1ca5558f987756e0c) Allow setting organization_id on key update endpoint — _@yuneng-jiang_
- [`002d64b`](https://github.com/BerriAI/litellm/commit/002d64b321a5c5fabca32b836d869e633ba857f8) fix(tests): increase MAX_CALLS and reduce sleep in flaky e2e budget test — _@yuneng-jiang_
- [`124b44e`](https://github.com/BerriAI/litellm/commit/124b44ec2237197163fe2eedff71bd403005a92f) fix(tests): update PKCE SSO tests to mock get_async_httpx_client — _@yuneng-jiang_
- [`5dab326`](https://github.com/BerriAI/litellm/commit/5dab326d0c24d573e6112313423369d989642635) fix(tests): update deprecated model refs in test_completion_cost — _@yuneng-jiang_
- [`b151ea6`](https://github.com/BerriAI/litellm/commit/b151ea669ba293abbd188ca8be3c01cc85e12850) [Fix] Extract _validate_token_response to fix PLR0915 (51 > 50 statements) — _@yuneng-jiang_
- [`2a99799`](https://github.com/BerriAI/litellm/commit/2a997993d4e8e54d4a734556bbf540312dfc52ba) fix(sso): replace httpx.AsyncClient() with get_async_httpx_client — _@yuneng-jiang_
- [`06681dd`](https://github.com/BerriAI/litellm/commit/06681ddfccb3669768d0dd91e93debf2b3d87466) Fix flaky audio streaming cost assertion in test_standard_logging_payload_audio — _@yuneng-jiang_
- [`98ed295`](https://github.com/BerriAI/litellm/commit/98ed295a2460a9585b1d966188268ebf54c7bb12) fix(tests): fix flaky realtime WebRTC endpoint tests — _@yuneng-jiang_
- [`600bf03`](https://github.com/BerriAI/litellm/commit/600bf031cf65294509fbf392efa3db444001cd6b) fix(router): sync vector store wrapper missing model argument — _@yuneng-jiang_
- [`45ba9e1`](https://github.com/BerriAI/litellm/commit/45ba9e1f7ef08e747b3e16c124ed76b9f709c1f0) fix(anthropic): preserve native tool format when guardrails convert tools for Anthropic Messages API — _@Sameerlite_
- [`8ca7440`](https://github.com/BerriAI/litellm/commit/8ca744036aa7ed18b4e61caecb98ae1213698f1a) [Fix] Malformed messages returning 500 instead of 400 — _@yuneng-jiang_
- [`8882b61`](https://github.com/BerriAI/litellm/commit/8882b61296a849f6665793d17d3521f12bde7a7e) fix(tests): update deprecated gemini-1.5-pro model refs in vertex tests — _@yuneng-jiang_
- [`3e5199d`](https://github.com/BerriAI/litellm/commit/3e5199d3f3f8b80d4e09ef0acb4d1a7958eb1755) fix(tests): stabilize 5 flaky/outdated router integration tests — _@yuneng-jiang_
- [`3489d1d`](https://github.com/BerriAI/litellm/commit/3489d1dbef05648504b0b9feb6a05cd2a723730d) fix(tests): update outdated model names in wildcard model tests — _@yuneng-jiang_
- [`15075ef`](https://github.com/BerriAI/litellm/commit/15075ef9ec881cd51831f9e40423fb2058f701f8) fix(tests): update outdated model names in o1 and gemini tests — _@yuneng-jiang_
- [`0235aaf`](https://github.com/BerriAI/litellm/commit/0235aafb205ef4397a36681ba5fbff8ff940beea) Merge pull request #23500 from BerriAI/litellm_litellm-mypy-errors-28de — _@yuneng-jiang_
- [`2eafe5a`](https://github.com/BerriAI/litellm/commit/2eafe5a2e01975c8ec0fc144d966006e996625af) Merge pull request #23496 from BerriAI/bump_ver_1822 — _@yuneng-jiang_
- [`a9e45e7`](https://github.com/BerriAI/litellm/commit/a9e45e70ea634bbe06d96cb3e145b30072b5f83b) fix: revert presidio streaming type changes (unsafe cast) — _@cursoragent_
- [`9cd7ad2`](https://github.com/BerriAI/litellm/commit/9cd7ad263400c0db1ff70b671cbd1717b6582cf5) chore: regenerate poetry.lock to match pyproject.toml (#23514) — _@github-actions[bot]_
- [`ef78fa7`](https://github.com/BerriAI/litellm/commit/ef78fa70250ab020ed67a65f40b96f93685b4aa1) Merge pull request #23496 from BerriAI/bump_ver_1822 — _@yuneng-jiang_
- [`bfcba21`](https://github.com/BerriAI/litellm/commit/bfcba21564fd993fcc769fe22bdce7674b1ee102) pop litellm_logging_obj from request_data before callback loop — _@michelligabriele_
- [`583bdb2`](https://github.com/BerriAI/litellm/commit/583bdb279b36a6ad1dc1113b2ea63cc0f4c05380) address greptile review: move early return before pre_call, trim comments — _@michelligabriele_
- [`a4f94b2`](https://github.com/BerriAI/litellm/commit/a4f94b241b6f106dbba73ce5244891b426335e63) fix(proxy): prevent duplicate callback logs for pass-through endpoint failures — _@michelligabriele_
- [`ff14539`](https://github.com/BerriAI/litellm/commit/ff145398d5266a1066d0a9d0d50a185b200cb9a2) fix(ci): skip tests requiring openai>=2.x and MCP M2M oauth2_flow — _@cursoragent_
- [`177edb0`](https://github.com/BerriAI/litellm/commit/177edb06ae41a7b096abd02454f6338d157ce56a) fix: stabilize 5 CI test failures — _@cursoragent_
- [`a5b86d3`](https://github.com/BerriAI/litellm/commit/a5b86d3b2fe9383b600930d8de65c0d5a5b813f8) fix: revert realtime endpoint change, replace fragile asserts with fallback — _@cursoragent_
- [`fa3f30c`](https://github.com/BerriAI/litellm/commit/fa3f30c0248b4219b4d0ef03ee7dbbad78502695) Merge pull request #23501 from BerriAI/litellm_public_model_hub_fix — _@yuneng-jiang_
- [`92d39c3`](https://github.com/BerriAI/litellm/commit/92d39c308cd6426943ad7a0a83569cc9647815fb) fix(gemini): preserve toolConfig on native generate_content (#23493) — _@emerzon_
- [`db0819a`](https://github.com/BerriAI/litellm/commit/db0819ad26f6d8ff80e42097843b94e829768fe3) Fix same stale-overwrite bug in update_useful_links — _@yuneng-jiang_
- [`b7c43d9`](https://github.com/BerriAI/litellm/commit/b7c43d948e020703d493b816d848f799a371b5c3) Fix public model hub not showing config-defined models after save — _@yuneng-jiang_
- [`beb521b`](https://github.com/BerriAI/litellm/commit/beb521b241d3e256cecaee5894e899efe35b35da) Merge pull request #23437 from BerriAI/litellm_user-info-endpoint-v2-24cc — _@yuneng-jiang_
- [`2b20698`](https://github.com/BerriAI/litellm/commit/2b2069893faa5a5686164f308aa9ded9890f835e) chore: revert accidental _experimental/out/ changes — _@cursoragent_
- [`9a35664`](https://github.com/BerriAI/litellm/commit/9a356644bfac96ebd3aa6df3d850e2af06ec9ec7) fix(tests): stabilize 3 failing CI tests — _@cursoragent_
- [`003e841`](https://github.com/BerriAI/litellm/commit/003e841737d81fa71f9e4313a46c4130ee061ba4) fix(tests): update BFL image generation tests for new signature — _@cursoragent_
- [`bd9df9a`](https://github.com/BerriAI/litellm/commit/bd9df9a78ce40a8737cf5809746f4db443847e12) fix(mypy): fix remaining type errors after first pass — _@cursoragent_
- [`cd1b31b`](https://github.com/BerriAI/litellm/commit/cd1b31b77f070f53e064df2296523567ba025083) fix: resolve N+1 query, double-fetch, and silent error bugs in _check_user_info_v2_access — _@cursoragent_
- [`8f854a3`](https://github.com/BerriAI/litellm/commit/8f854a35e7967f0a97ad39e5e5c609d2c1a3e761) fix(mypy): fix scattered 1-off type errors across 14 files — _@cursoragent_
- [`d6bb294`](https://github.com/BerriAI/litellm/commit/d6bb2946bcf1dabd11ba6b30295bba0c874b333e) fix(mypy): fix presidio, panw, perplexity, and mcp hook type issues — _@cursoragent_
- [`cc3f9cd`](https://github.com/BerriAI/litellm/commit/cc3f9cd65b71129d108a541906677e24c709be9f) fix(ci): stabilize CI tests - conditional import, mock fixes, timing adjustments — _@cursoragent_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
