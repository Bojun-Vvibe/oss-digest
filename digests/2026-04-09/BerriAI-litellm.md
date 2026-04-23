# BerriAI/litellm — 2026-04-09

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-08T23:59:59.000Z → 2026-04-09T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy infrastructure and security day, headlined by the migration of LiteLLM's packaging, CI, and Docker builds from Poetry to `uv` (#25007, commit `a6c30b3`) — a foundational change that downstream contributors and image consumers should review. Paired with this, a release `v1.82.3.dev.9` was cut and a new Docker Image Security Guide was published covering cosign verification and CI/CD enforcement (#25439, commit `3a6db70`).

Security work was substantial: PR #25442 bumped vulnerable dependencies addressing 22 of 25 dependabot alerts, including cryptography 43.0.3 → 46.0.7 (5 CVEs, notably a CVSS 8.2 ECDH key leak) and hono 4.1.4/4.12.7 → 4.12.12 for prototype pollution and cookie injection (commit `8d1493e`). A separate fix bumped the cookbook's pinned `litellm==1.61.15` to 1.83.5 to clear CVE-2026-35029/35030 and a password-hash exposure (commit `637ff30`). Input validation on proxy management endpoints was also tightened (commit `d910a95`).

New provider/feature work worth a look:
- **PromptGuard** added as a first-class guardrail vendor for prompt injection / PII detection (#24268).
- **Per-team/project credential overrides** via `model_config` metadata (#24438) — meaningful for multi-tenant proxy operators.
- **Per-user OAuth token storage for interactive MCP flows** (commit `ce2add3`).
- **File content streaming** support for OpenAI (`afile_content_streaming` / `file_content_streaming`, commit `7ebc144`).
- **Baseten Model API pricing** entries for Nemotron, GLM, Kimi, GPT OSS, DeepSeek (#25358).
- **Triton embedding usage estimation** for self-hosted responses (#25345).

Notable bug fixes: Bedrock now normalizes Anthropic/Claude Code's `input_schema.type="custom"` to `object` for both Invoke and Converse (#8f4676a, follow-up `83140e7` switched to iterative walk to satisfy recursive_detector CI); Vertex AI Gemini streaming `finish_reason` enum is normalized via `map_finish_reason` (#25337); router now passes `custom_llm_provider` for unprefixed model names to fix "LLM Provider NOT provided" errors (#25334); DashScope preserves `cache_control` for explicit prompt caching (#25331); a leading-space bug in license `public_key.pem` that broke `cryptography.load_pem_public_key` was fixed (#25339). Also note commit `f8243ee` reverts the prior JWT `key_alias=user_id` Prometheus fix (#25438), so anyone who picked up `8d945c8` should re-pull. UI work centered on a new team-scoped Router Settings accordion and an AntD migration of the regenerate-key modal.

## Releases

- **[v1.82.3.dev.9](https://github.com/BerriAI/litellm/releases/tag/v1.82.3.dev.9)** — v1.82.3.dev.9 _by @github-actions[bot] at 2026-04-09T21:58:21Z_
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

- [`6ec9ce7`](https://github.com/BerriAI/litellm/commit/6ec9ce7174076620854f713059b7d47cab4fe154) readme — _@mubashir1osmani_
- [`1310803`](https://github.com/BerriAI/litellm/commit/13108039c85389d2a635c0be3682056c452fd759) remove conftest patch. TODO: make a different PR for this — _@harish876_
- [`afd46e7`](https://github.com/BerriAI/litellm/commit/afd46e7a1685fc1084b14a6a8c541ce7d61a9c99) format vertex test file — _@joereyna_
- [`7ebc144`](https://github.com/BerriAI/litellm/commit/7ebc144c18a9e9fba9500814cd7cd17afccbc433) Add file content streaming support for OpenAI and related utilities — _@harish876_
- [`d910a95`](https://github.com/BerriAI/litellm/commit/d910a95661fce3cdd36f3b06c03ecf9c46c6457c) fix(proxy): improve input validation on management endpoints — _@jaydns_
- [`1571f5e`](https://github.com/BerriAI/litellm/commit/1571f5e45a49e62514a4eebab3ab9ef0e11ad8cb) fix(test): mock headers in test_completion_fine_tuned_model — _@joereyna_
- [`254e7a3`](https://github.com/BerriAI/litellm/commit/254e7a3ec2e545a6aafaba984cd821d12ad18035) Merge pull request #25442 from stuxf/fix/dependabot-alerts — _@yuneng-berri_
- [`ce2add3`](https://github.com/BerriAI/litellm/commit/ce2add3b16267845d8f2351ab76f9c1c832b6f8d) feat(mcp): add per-user OAuth token storage for interactive MCP flows — _@csoni-cweave_
- [`8d1493e`](https://github.com/BerriAI/litellm/commit/8d1493ed08be600f99b58bd3fcaf6e0b264f1c59) fix(security): bump vulnerable dependencies — _@stuxf_
- [`637ff30`](https://github.com/BerriAI/litellm/commit/637ff30f970e6ff1e1a8fdff64c2b33c11050bb8) fix(security): bump litellm in cookbook to 1.83.5 — _@stuxf_
- [`3a6db70`](https://github.com/BerriAI/litellm/commit/3a6db708ce9d7f47a99d3143412100807af3db8b) docs: add Docker Image Security Guide for cosign verification and deployment best practices (#25439) — _@krrish-berri-2_
- [`a6c30b3`](https://github.com/BerriAI/litellm/commit/a6c30b30bfd5508614f3024c866bb22f5485060f) build: migrate packaging, CI, and Docker from Poetry to uv (#25007) — _@stuxf_
- [`f8243ee`](https://github.com/BerriAI/litellm/commit/f8243eee886026c99abb690a103a4de336458f1c) Revert "fix(proxy): set key_alias=user_id in JWT auth for Prometheus metrics …" (#25438) — _@krrish-berri-2_
- [`3ac4333`](https://github.com/BerriAI/litellm/commit/3ac4333be115a134f21cadba709e7d36289b0198) fix(responses-ws): use urllib.parse to append model param, fix test mocking — _@joereyna_
- [`f6dde29`](https://github.com/BerriAI/litellm/commit/f6dde296fa8a9ef4747ff5c6e4df0af808124134) fix(responses-ws): append ?model= to backend WebSocket URL — _@joereyna_
- [`c688d9d`](https://github.com/BerriAI/litellm/commit/c688d9d6bc08c4b0c9fd15362826643d9ef9d1ac) Add PromptGuard guardrail integration (#24268) — _@acebot712_
- [`cd9c511`](https://github.com/BerriAI/litellm/commit/cd9c511df65f89d2ca4c9c62cabe600e87f42e3a) feat(proxy): add credential overrides per team/project via model_config metadata (#24438) — _@michelligabriele_
- [`cb057ad`](https://github.com/BerriAI/litellm/commit/cb057ad44bced6d530bd6092ca3429f046cbb8dc) fix(websearch_interception): ensure spend/cost logging runs when stream=True — _@Sameerlite_
- [`0ba8adf`](https://github.com/BerriAI/litellm/commit/0ba8adffed13f4fc0c97424c251327da068b88fb) fix(ui): use mutation for attachment delete — _@Lucas-Song-Dev_
- [`e42baeb`](https://github.com/BerriAI/litellm/commit/e42baeb5abf2ae37d64117dc70a9dc0138daf4d3) [Refactor] UI - Virtual Keys: migrate regenerate key modal to AntD — _@yuneng-berri_
- [`e8c51ec`](https://github.com/BerriAI/litellm/commit/e8c51ecd7c61f871ed044eb8f22bee98c51821eb) fix: address PR review - allow clearing router settings, remove unused modelData prop — _@yuneng-berri_
- [`4ba9219`](https://github.com/BerriAI/litellm/commit/4ba9219e1dc63c8043cf8c4db6d039d86f7cdc96) fix: exclude defaults from hasValues check to avoid overwriting router settings — _@yuneng-berri_
- [`20ed120`](https://github.com/BerriAI/litellm/commit/20ed120d1a845211b6d854a68f67e6249896d571) [Fix] Let setSecureItem propagate storage errors to callers — _@yuneng-berri_
- [`ec91021`](https://github.com/BerriAI/litellm/commit/ec9102107aa5866136d518adb436892737605541) fix(bedrock): custom tool schemas and missing tool names for Converse — _@Sameerlite_
- [`ce69731`](https://github.com/BerriAI/litellm/commit/ce6973109a5b56894ec8e1ffb470885223031ce1) fix: add getRouterSettingsCall mock to TeamInfo tests — _@yuneng-berri_
- [`f6d5d70`](https://github.com/BerriAI/litellm/commit/f6d5d709037c76553b939961f1cd2a5d6a71c4b9) refactor: simplify router settings integration - use ref-only, no onChange loop — _@yuneng-berri_
- [`7d3c0b1`](https://github.com/BerriAI/litellm/commit/7d3c0b1cacd0d106ea9d69f7ff47d05304173258) fix: prevent internal onChange from re-initializing fallback groups — _@yuneng-berri_
- [`aa93191`](https://github.com/BerriAI/litellm/commit/aa9319128e10b5c70d40e46ef2c27c883e34bde2) Revert "fix: make RouterSettingsAccordion tabs controlled to prevent tab reset" — _@yuneng-berri_
- [`25dd4f3`](https://github.com/BerriAI/litellm/commit/25dd4f3e7a58a7c97548427e3ab1f583827d8acb) fix: make RouterSettingsAccordion tabs controlled to prevent tab reset — _@yuneng-berri_
- [`f93db82`](https://github.com/BerriAI/litellm/commit/f93db822fd15c369f235ac6df9a00bd885c7bcf2) fix: treat empty router settings inputs as null instead of preserving old values — _@yuneng-berri_
- [`7654234`](https://github.com/BerriAI/litellm/commit/7654234f20d76a5c77512a17b029207ff9501309) fix: use ref to read router settings at save time instead of stale state — _@yuneng-berri_
- [`a449cf8`](https://github.com/BerriAI/litellm/commit/a449cf801f6b2976cc3e4a9e29cc01a91e41ac60) fix: reset router settings state on cancel to prevent stale data — _@yuneng-berri_
- [`6fd7a3e`](https://github.com/BerriAI/litellm/commit/6fd7a3ec766278e962f8512694bf1951cf861e37) [Feature] UI - Teams: Add router settings to team Settings tab — _@yuneng-berri_
- [`97f722f`](https://github.com/BerriAI/litellm/commit/97f722f5586ef00787733e09c3631c8fe52ba8c1) feat(cost): add baseten model api pricing entries (#25358) — _@Sameerlite_
- [`f42ffed`](https://github.com/BerriAI/litellm/commit/f42ffed2bd3f5b63c5fbba397093e496472efa6c) Litellm oss staging 04 02 2026 p1 (#25055) — _@krrish-berri-2_
- [`83140e7`](https://github.com/BerriAI/litellm/commit/83140e702deabbe778d6b6e4707f2a294450d53a) fix(bedrock): use iterative walk for custom→object schema normalization — _@Sameerlite_
- [`541e81d`](https://github.com/BerriAI/litellm/commit/541e81de2fefb3581f4f7eef61db5beb58264657) fix: expose reasoning effort fields in get_model_info + add together_ai/gpt-oss-120b (#25263) — _@avarga1_
- [`4e32479`](https://github.com/BerriAI/litellm/commit/4e32479e7d9578864c453578c5f3061ba36cf535) feat(dashscope): preserve cache_control for explicit prompt caching (#25331) — _@silencedoctor_
- [`e0a578f`](https://github.com/BerriAI/litellm/commit/e0a578fbdda772b89d037c9c4a590179e4c3e4d7) fix: remove leading space from license public_key.pem (#25339) — _@milan-berri_
- [`6a0e0ce`](https://github.com/BerriAI/litellm/commit/6a0e0ce0613b388ef88405c1e1e6d16f5ae9f985) fix(router): pass custom_llm_provider to get_llm_provider for unprefixed model names (#25334) — _@Sameerlite_
- [`e674627`](https://github.com/BerriAI/litellm/commit/e6746270af120faa57cd06f938e477b99199eebd) fix(vertex_ai): normalize Gemini finish_reason enum through map_finis… (#25337) — _@abhyudayareddy_
- [`8f4676a`](https://github.com/BerriAI/litellm/commit/8f4676a6a912c191630f2f03e9a7b2fc1fbef0d8) feat(bedrock): normalize custom tool JSON schema for Invoke and Converse — _@Sameerlite_
- [`8d945c8`](https://github.com/BerriAI/litellm/commit/8d945c86b7ea67bfea6c8d556f7f1109b9dd3154) fix(proxy): set key_alias=user_id in JWT auth for Prometheus metrics (#25340) — _@michelligabriele_
- [`6e6f5be`](https://github.com/BerriAI/litellm/commit/6e6f5be3e4b091ed4166c30f3893093c0ca999ae) feat(triton): add embedding usage estimation for self-hosted responses (#25345) — _@Sameerlite_
- [`3a4ed48`](https://github.com/BerriAI/litellm/commit/3a4ed48f54e958ae46373f1b7e419e7f23b216ab) fix(router): don't create litellm_metadata for non-Responses API calls in encrypted_content_affinity_check (#25347) — _@Sameerlite_
- [`233870d`](https://github.com/BerriAI/litellm/commit/233870d7b265f365a6168bb7e9f636385bcf6852) Add Ramp as a built-in generic API callback with docs (#23769) — _@kedarthakkar_
- [`ac29118`](https://github.com/BerriAI/litellm/commit/ac29118942b4f6d57514cf3f2b962372ec0ba662) Update docker/Dockerfile.custom_ui — _@yuneng-berri_
- [`70a5c27`](https://github.com/BerriAI/litellm/commit/70a5c27cbd86b1f34bb2068819f4b3edde3aeb49) [Fix] Address review feedback on storage utility and Dockerfiles — _@yuneng-berri_
- [`36bf337`](https://github.com/BerriAI/litellm/commit/36bf3373964c4a9bb7f46f340a3a6d4773ac6ea6) fix(docker): add non-root USER and HEALTHCHECK to Dockerfile.custom_ui — _@yuneng-berri_
- [`a881ac5`](https://github.com/BerriAI/litellm/commit/a881ac5133c02d5d2d4e7aa663c22e4bf63a9956) [Fix] UI: resolve CodeQL security alerts and Dockerfile.health_check hardening — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
