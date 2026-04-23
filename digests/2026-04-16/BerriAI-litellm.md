# BerriAI/litellm — 2026-04-16

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-15T23:59:59.000Z → 2026-04-16T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a sweeping **proxy-security hardening sprint**, alongside **day-0 support for Claude Opus 4.7**.

**Security & proxy hardening.** A large series of commits from `stuxf` and `yuneng-berri` close multiple bypass and SSRF classes in the proxy. Two merged fixes tighten credential handling: `check_complete_credentials()` now rejects empty/whitespace `api_key` values that previously let requests skip body validation ([#25917](https://github.com/BerriAI/litellm/pull/25917)), and `x-pass-` header forwarding now refuses to overwrite credential/protocol headers like `authorization`, `api-key`, `host`, `x-goog-api-key` ([#25916](https://github.com/BerriAI/litellm/pull/25916)). Unmerged but landed on staging: SSRF protection via resolve-and-rewrite with a default-deny check based on `ipaddress.is_global` (commits `9363f36`, `0602564`), `safe_get`/`async_safe_get` helpers that validate every redirect hop (`d15196b`), path-traversal guards (`safe_join`/`safe_filename`, [#25834](https://github.com/BerriAI/litellm/pull/25834)), and a VERIA-28 follow-up that gates caller-supplied routing/budget tags behind `allow_client_tags` and strips `user_api_key_metadata` injection slots from user input (`0e62add`, `d060169`). Org-admin operations now enforce boundaries across all requested orgs rather than short-circuiting on first match (`91bfbe6`).

**Opus 4.7 day-0 support** shipped via [#25867](https://github.com/BerriAI/litellm/pull/25867) (Sameerlite), with new effort-level handling and legacy Claude Code support; version bumped to 1.83.9 / UI 0.4.66. Note Opus 4.7 doesn't support tool search (`fb33daa`) and max-tokens support was removed (`07d863b`). Docs got a security announcement bar about the resolved Trivy supply-chain compromise ([#25870](https://github.com/BerriAI/litellm/pull/25870)).

**Bug fixes worth a look.** Bedrock streaming no longer reports negative costs when cache tokens appear only on `message_start` (`3c9bf32`); Vertex `count_tokens` now strips `@version` suffixes (#25800); Ollama propagates `done_reason='length'` as `finish_reason` (#25824); credential updates sync the in-memory `credential_list` (#25758).

**Open PRs to watch.** A cluster from `ianliuy` covers None-guards for `reasoning_effort='none'` on Bedrock Anthropic ([#25909](https://github.com/BerriAI/litellm/pull/25909)) and Azure GPT-5 deployments ([#25911](https://github.com/BerriAI/litellm/pull/25911)), router crash on Ollama rate limits ([#25902](https://github.com/BerriAI/litellm/pull/25902)), and Titan image-embed token counting ([#25907](https://github.com/BerriAI/litellm/pull/25907)). [#25853](https://github.com/BerriAI/litellm/pull/25853) fixes Bedrock Converse failures from Codex CLI conversation compaction (orphaned tool blocks), and [#25899](https://github.com/BerriAI/litellm/pull/25899) chases the long-standing `timedelta is not JSON serializable` leak in the redis-backed latency cache.

**CI/infra.** `llm_translation_testing` workers were OOM-crashing; mitigations bumped resource_class to xlarge ([#25887](https://github.com/BerriAI/litellm/pull/25887)) then reduced parallelism and tolerate worker restarts ([#25898](https://github.com/BerriAI/litellm/pull/25898)). No releases or new issues in window.

## Releases

_None in window._


## Merged PRs

- [#25917](https://github.com/BerriAI/litellm/pull/25917) **[Fix] Tighten api_key value check in credential validation** — _by @yuneng-berri, merged 2026-04-16T23:39:05Z_
- [#25916](https://github.com/BerriAI/litellm/pull/25916) **[Fix] Restrict x-pass- header forwarding for credential and protocol headers** — _by @yuneng-berri, merged 2026-04-16T22:48:27Z_
- [#25913](https://github.com/BerriAI/litellm/pull/25913) **[Test] Remove dead Bedrock clear_thinking interleaved-thinking-beta assertion** — _by @yuneng-berri, merged 2026-04-16T22:38:50Z_
- [#25870](https://github.com/BerriAI/litellm/pull/25870) **Add docs announcement bar for Trivy compromise resolution** — _by @krrish-berri-2, merged 2026-04-16T22:15:52Z_
- [#25898](https://github.com/BerriAI/litellm/pull/25898) **[Infra] Reduce llm_translation_testing parallelism and tolerate worker restarts** — _by @yuneng-berri, merged 2026-04-16T20:31:06Z_


## Open PRs (new or updated)

- [#25912](https://github.com/BerriAI/litellm/pull/25912) **doc update on ```allow_requests_on_db_unavailable``` flag** — _by @harish-berri, updated 2026-04-16T21:27:15Z_
- [#25911](https://github.com/BerriAI/litellm/pull/25911) **fix: add fallback for Azure deployment names in _supports_reasoning_effort_level** — _by @ianliuy, updated 2026-04-16T21:22:50Z_
- [#25909](https://github.com/BerriAI/litellm/pull/25909) **fix: guard against None thinking param for reasoning_effort=none** — _by @ianliuy, updated 2026-04-16T21:20:43Z_
- [#25908](https://github.com/BerriAI/litellm/pull/25908) **fix: restore left nav sidebar on blog post pages** — _by @krrish-berri-2, updated 2026-04-16T21:16:02Z_
- [#25907](https://github.com/BerriAI/litellm/pull/25907) **fix: count image tokens in Titan embed response** — _by @ianliuy, updated 2026-04-16T21:14:43Z_
- [#25902](https://github.com/BerriAI/litellm/pull/25902) **fix: add None guard for num_retries comparison in router** — _by @ianliuy, updated 2026-04-16T21:11:40Z_
- [#25853](https://github.com/BerriAI/litellm/pull/25853) **fix(bedrock): handle orphaned tool blocks caused by conversation compaction** — _by @AlmogBaku, updated 2026-04-16T20:50:24Z_
- [#25899](https://github.com/BerriAI/litellm/pull/25899) **fix(router): keep timedelta out of redis-backed latency cache** — _by @michelligabriele, updated 2026-04-16T20:38:40Z_


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`e1da27d`](https://github.com/BerriAI/litellm/commit/e1da27dc0af37b0b1c1365acb79ad4d1da42c5b8) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_/amazing-almeida — _@yuneng-berri_
- [`35a186a`](https://github.com/BerriAI/litellm/commit/35a186a133efbf4b94ad9eb8fe1345b8115ae637) [Test] Mock live Bedrock Moonshot tests in llm_translation — _@yuneng-berri_
- [`1cd3ea8`](https://github.com/BerriAI/litellm/commit/1cd3ea809a20daf7b3f1a96e66e2b0eac1ce95be) Merge pull request #25917 from BerriAI/litellm_xpass_header_restriction — _@yuneng-berri_
- [`76aa97f`](https://github.com/BerriAI/litellm/commit/76aa97f77b0781b77e4ea248e7245b0bdeefa587) fix(proxy): close three variant metadata/tag injection paths — _@stuxf_
- [`dc8e03b`](https://github.com/BerriAI/litellm/commit/dc8e03b91f8fc71a6322078ad958465c25be3b21) fix(proxy): expand _guardrail_modification_check to cover all bypass keys — _@stuxf_
- [`f8f356f`](https://github.com/BerriAI/litellm/commit/f8f356fac3bdfb8a52b51d4b9aec7a27c3ea5741) test: add parametrized tests for api_key value handling in credential check — _@yuneng-berri_
- [`2ea3faf`](https://github.com/BerriAI/litellm/commit/2ea3fafb68e1424673ea5eaf452016d2a2f8f0e5) fix: tighten api_key value check in credential validation — _@yuneng-berri_
- [`db19f24`](https://github.com/BerriAI/litellm/commit/db19f24d694ec82037f06361e4aa6ae10d194da5) fix(proxy): move metadata strip after JSON-string parse — _@stuxf_
- [`9622864`](https://github.com/BerriAI/litellm/commit/9622864ef20048065c19cd0992e5acb33c97c67e) test: set allow_client_tags on duplicate-tag merge test — _@stuxf_
- [`773ce43`](https://github.com/BerriAI/litellm/commit/773ce4388f3deb1ecf65f2444d68aa23ea58fbb6) Merge pull request #25916 from BerriAI/litellm_xpass_header_restriction — _@yuneng-berri_
- [`af8d479`](https://github.com/BerriAI/litellm/commit/af8d479482d8c41e8abc17e144c68b92e0d82d64) chore(proxy): emit warning when caller-supplied tags are stripped — _@stuxf_
- [`5df7c21`](https://github.com/BerriAI/litellm/commit/5df7c21c9a56529b907e2ddb30a241b288e39bca) fix: extend x-pass- header protection to cover additional credential headers and add tests — _@yuneng-berri_
- [`8526628`](https://github.com/BerriAI/litellm/commit/8526628a8fac6400b75b5bdb78958a656fa3abd4) test: update tag-merge tests for default-deny client tag policy — _@stuxf_
- [`66f0d14`](https://github.com/BerriAI/litellm/commit/66f0d1419d2a33a395a7245d3687b17aeb71d190) Merge pull request #25913 from BerriAI/litellm_dropDeadBedrockThinkingBetaTest — _@yuneng-berri_
- [`f46e995`](https://github.com/BerriAI/litellm/commit/f46e9959db59be9a2079f233038a4c55cdda8be2) fix: restrict x-pass- header forwarding for protected header names — _@yuneng-berri_
- [`0e62add`](https://github.com/BerriAI/litellm/commit/0e62addd947087a9b75307af39d23ee8173a11a2) fix(proxy): gate caller-supplied routing/budget tags behind allow_client_tags — _@stuxf_
- [`aa2f05f`](https://github.com/BerriAI/litellm/commit/aa2f05f8c9663202a0d9e68dc1980bb6134b1d82) style: use 'is not None' for port check (handle port 0 explicitly) — _@stuxf_
- [`13108f3`](https://github.com/BerriAI/litellm/commit/13108f39cb57f8858e821a3b56f98162e4d60378) Add docs announcement bar for Trivy compromise resolution (#25870) — _@krrish-berri-2_
- [`0602564`](https://github.com/BerriAI/litellm/commit/0602564b66bd20147f0e0d9fd3bc9e4c5e4fd221) fix: switch blocklist to RFC 6890 via ipaddress.is_global, block multicast and Azure Wire Server — _@stuxf_
- [`d060169`](https://github.com/BerriAI/litellm/commit/d0601692b8dc5fff8f31714372f65c584a2abf20) fix(proxy): strip user_api_key_metadata injection slots from user input — _@stuxf_
- [`72ff989`](https://github.com/BerriAI/litellm/commit/72ff989c12bce6aa6e46fbd063111eee40e45b96) [Test] Remove dead Bedrock clear_thinking interleaved-thinking-beta assertion — _@yuneng-berri_
- [`1d3dda9`](https://github.com/BerriAI/litellm/commit/1d3dda93429c42e58c2fd9f0db0298cd743000e5) feat: add admin opt-out for user URL validation — _@stuxf_
- [`22572ea`](https://github.com/BerriAI/litellm/commit/22572eafaf3d59caec1da10b8cf9fc073abb5a29) fix: merge admin metadata from both metadata and litellm_metadata — _@stuxf_
- [`1f50c6f`](https://github.com/BerriAI/litellm/commit/1f50c6fa66b0cb6cbe970c442e3ba4130cb8d642) test: mock DNS resolution, hoist httpx import to module level — _@stuxf_
- [`f5a9218`](https://github.com/BerriAI/litellm/commit/f5a9218cb31bd1284a92bcfb70228ad0e51cbd97) chore: remove unused asyncio import — _@stuxf_
- [`30c6556`](https://github.com/BerriAI/litellm/commit/30c6556782103ece93b86a50b5ae64ffa7c887d6) test: bypass SSRF validation in image handling tests — _@stuxf_
- [`1ba2be7`](https://github.com/BerriAI/litellm/commit/1ba2be77aed17a35ebf74d963f67040ec5e03477) refactor: move url_utils to litellm_core_utils to avoid proxy dependency — _@stuxf_
- [`00b25d6`](https://github.com/BerriAI/litellm/commit/00b25d6ca4f55890cc1fb07484c8c37205677bb1) fix: sync redirect bypass, Host header port, redirect loop dead code — _@stuxf_
- [`e2a0c96`](https://github.com/BerriAI/litellm/commit/e2a0c96663548d36ebca5a530e9140da530eb19e) fix: redirect loop was dead code, clean up imports — _@stuxf_
- [`814d03d`](https://github.com/BerriAI/litellm/commit/814d03d1cee07128411c4492a67eb0813c9eb195) fix: fail-closed on unparseable IPs, rewrite HTTPS when SSL verify disabled — _@stuxf_
- [`62ec396`](https://github.com/BerriAI/litellm/commit/62ec39677586ae0588e5dd919d6186e4da010659) test: mock SSRF validation in openapi spec URL test — _@stuxf_
- [`b94aaa7`](https://github.com/BerriAI/litellm/commit/b94aaa72b07ce1b634b3458af620a4554fb90991) fix: skip DNS resolution for base64 data in token counter, add unit tests — _@stuxf_
- [`037fb57`](https://github.com/BerriAI/litellm/commit/037fb573f77e22aa67733ea3b755d515ebcc5904) fix: preserve caller headers across redirect hops in safe_get — _@stuxf_
- [`d15196b`](https://github.com/BerriAI/litellm/commit/d15196b5197d89270469faabaece0dd26cf1f4b6) fix(proxy): add safe_get/async_safe_get with redirect validation — _@stuxf_
- [`9363f36`](https://github.com/BerriAI/litellm/commit/9363f36481b8602e7866398bd054a11dd9842e8e) fix(proxy): add SSRF protection via resolve-and-rewrite for user-supplied URLs — _@stuxf_
- [`413f898`](https://github.com/BerriAI/litellm/commit/413f89892b54c44d626f7c25be0a2546dc1557b3) test: update dynamic callback params test for turn_off_message_logging removal — _@stuxf_
- [`34e9be1`](https://github.com/BerriAI/litellm/commit/34e9be1ba70f8f498a6a5c7c34b3e3663aeb763d) fix: merge team metadata in admin helper, remove turn_off_message_logging from dynamic params — _@stuxf_
- [`3cd5796`](https://github.com/BerriAI/litellm/commit/3cd5796fc7947d0302d27d1ba214c68d0f663007) refactor: extract admin metadata helper, hoist loop-invariant tag resolution — _@stuxf_
- [`74a49b5`](https://github.com/BerriAI/litellm/commit/74a49b527c6db53bb8f89d83cdebec576589b62b) fix(proxy): read guardrail config from admin metadata, fix tag routing consistency — _@stuxf_
- [`815a2be`](https://github.com/BerriAI/litellm/commit/815a2bed1af796a7639a9e72bbb88c9e288da5e5) test: add regression tests for cross-org admin escalation — _@stuxf_
- [`91bfbe6`](https://github.com/BerriAI/litellm/commit/91bfbe6efedf09f099417f1c8ba5c1e452e77e0f) fix(proxy): enforce organization boundaries in admin operations — _@stuxf_
- [`2606796`](https://github.com/BerriAI/litellm/commit/260679679f7881d96cbbf53bbf23b4ffaf7091dc) fix(ui): repair router_settings tests broken by full antd mock — _@ryan-crabbe-berri_
- [`f796036`](https://github.com/BerriAI/litellm/commit/f796036af031f5b340432e8f2f0fb447fafd4aee) feat(proxy): add --reload flag for uvicorn hot reload (dev only) — _@ryan-crabbe-berri_
- [`7279dca`](https://github.com/BerriAI/litellm/commit/7279dca9294875e7ef3934615da60766c9a85be0) Merge pull request #25898 from BerriAI/litellm_llmTranslationOomMitigation_staging — _@shin-berri_
- [`ebac729`](https://github.com/BerriAI/litellm/commit/ebac7291466de88b009844a347ebc19308099913) [Infra] CI: reduce llm_translation_testing parallelism and tolerate worker restarts — _@yuneng-berri_
- [`c0fc4c4`](https://github.com/BerriAI/litellm/commit/c0fc4c423490c15949110777e0137364efc53bca) Merge pull request #25876 from BerriAI/litellm_hotfix_opus_4.7 — _@ishaan-berri_
- [`65717ad`](https://github.com/BerriAI/litellm/commit/65717add14c2bbd67f86b8a12cf544ed24c532f6) Merge pull request #25887 from BerriAI/litellm_/vigilant-cannon — _@shin-berri_
- [`72ba880`](https://github.com/BerriAI/litellm/commit/72ba880905505b5d06bc65fce755af5982f43493) [Infra] Bump llm_translation_testing resource class to xlarge — _@yuneng-berri_
- [`ff982bb`](https://github.com/BerriAI/litellm/commit/ff982bb37610e5fc20c38c594063b78c10584e17) fix: return None for routing_strategy_args when not latency-based — _@ryan-crabbe-berri_
- [`72be35f`](https://github.com/BerriAI/litellm/commit/72be35f9b81da33c34a2c82c37ff69f9d998a3e0) chore(ui): migrate router_settings page from Tremor to antd — _@ryan-crabbe-berri_
- [`5aba184`](https://github.com/BerriAI/litellm/commit/5aba1841cc7b02e5a386243fd7c3bdd2697100e7) Extract shared PKCE helpers into src/utils/pkce.ts — _@ryan-crabbe-berri_
- [`c6c970c`](https://github.com/BerriAI/litellm/commit/c6c970ca4379e5a33725a94e8eb95957b8db4117) Merge pull request #25875 from BerriAI/litellm_docs_opus_4.7 — _@Sameerlite_
- [`fe6fef9`](https://github.com/BerriAI/litellm/commit/fe6fef97d19ac63732c029b606b26a407c650199) Fix version in docs — _@Sameerlite_
- [`6fab790`](https://github.com/BerriAI/litellm/commit/6fab790a6ec5089fb5779f56262dbd18a8044ae6) Merge pull request #25867 from BerriAI/litellm_day_0_opus_4.7_support — _@ishaan-berri_
- [`21c0718`](https://github.com/BerriAI/litellm/commit/21c071885025a17703dd7b67d1b79878cd489896) Merge pull request #25871 from BerriAI/litellm_yj_apr15 — _@yuneng-berri_
- [`13522ff`](https://github.com/BerriAI/litellm/commit/13522ff33a33f3768d9cf4ddb3e6ffca058d6c26) Fix version in docs — _@Sameerlite_
- [`0736851`](https://github.com/BerriAI/litellm/commit/073685136d5a61b23b2bcff3cc21163b600575f8) bump: version 0.4.65 → 0.4.66 — _@yuneng-berri_
- [`b80bd9d`](https://github.com/BerriAI/litellm/commit/b80bd9d52335f90a7eb994f327cdcc8d234e5886) bump: version 1.83.8 → 1.83.9 — _@yuneng-berri_
- [`44c9924`](https://github.com/BerriAI/litellm/commit/44c992416cfab1d911299ed6d57fa6ad974af1a7) Merge pull request #25867 from BerriAI/litellm_day_0_opus_4.7_support — _@ishaan-berri_
- [`b26f858`](https://github.com/BerriAI/litellm/commit/b26f858ab0bc4e424bc0493fa5890751df6692b5) fix(ci): authorize langgraph-prebuilt in liccheck.ini — _@yuneng-berri_
- [`c294bbe`](https://github.com/BerriAI/litellm/commit/c294bbe4f07bff55a774ae5d1e75994b6f4769b6) fix(deps): pin langgraph-prebuilt==1.0.8 to avoid broken 1.0.9 — _@yuneng-berri_
- [`07d863b`](https://github.com/BerriAI/litellm/commit/07d863b8e78b2a42681e47569d6dcb01ff9995d0) Remove max support for opus 4.7 — _@Sameerlite_
- [`f94c8dd`](https://github.com/BerriAI/litellm/commit/f94c8dda82498ac382b5a8eb23aae07ed9244898) Fix model names — _@Sameerlite_
- [`dafa1bf`](https://github.com/BerriAI/litellm/commit/dafa1bf97c41dfd916e296cb9a5bdf0bcb74dfb6) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_yj_apr15 — _@yuneng-berri_
- [`b3d5ff5`](https://github.com/BerriAI/litellm/commit/b3d5ff577461d7a25098815c8fa7bce5735ba5b5) Fix tests + add docs — _@Sameerlite_
- [`a9ff4c6`](https://github.com/BerriAI/litellm/commit/a9ff4c69919731185c297cd17f50fe28f48f16c8) Fix add leagcy support for claude code — _@Sameerlite_
- [`607412d`](https://github.com/BerriAI/litellm/commit/607412defb25cd978b7bfe2930b7e4c02c4cd1dd) feat(bedrock): inject thinking for clear_thinking context_management on Messages API — _@Sameerlite_
- [`fb33daa`](https://github.com/BerriAI/litellm/commit/fb33daa09f00c6de2767736c3794b4b7fa4a5ec3) opus 4.7 doesn't support tool search — _@Sameerlite_
- [`0868a82`](https://github.com/BerriAI/litellm/commit/0868a82c3471322b804ebe6bc1e7e5e02f09dc59) Add support for opus 4.7 with new effort levels — _@Sameerlite_
- [`26937a2`](https://github.com/BerriAI/litellm/commit/26937a21461f6428f1029e2c39f33a785f8f3f19) Merge pull request #25831 from BerriAI/litellm_oss_staging_04_15_2026_p1 — _@Sameerlite_
- [`4b5c86b`](https://github.com/BerriAI/litellm/commit/4b5c86b8a11af474323ce76908cbe0267f40b806) Fix code qa — _@Sameerlite_
- [`baf19b4`](https://github.com/BerriAI/litellm/commit/baf19b4413fd7194f5828821b119e5d362919286) Fix import error — _@Sameerlite_
- [`d9a8a8a`](https://github.com/BerriAI/litellm/commit/d9a8a8a42eb24fe2d3b9205d1bae837fa3b7c3d9) fix(credentials): sync in-memory credential_list after update (#25758) — _@kuun993_
- [`dd4a419`](https://github.com/BerriAI/litellm/commit/dd4a41951fd32aeb5308006832cbaacfdaf627ea) fix(utils): allowed_openai_params must not forward unset params as None (#25777) — _@xr843_
- [`265a960`](https://github.com/BerriAI/litellm/commit/265a96047209aaaee85ea5bebe076edf51d99236) fix(noma-v2): fall back to key_alias for application_id in Noma dashboard (#25795) — _@bse-ai_
- [`3cbb36a`](https://github.com/BerriAI/litellm/commit/3cbb36aa130e3c865b9f04dd7de4fe5c66f295ae) fix(ollama): propagate done_reason='length' as finish_reason for max_tokens truncation (#25824) — _@jarsever_
- [`6b2973b`](https://github.com/BerriAI/litellm/commit/6b2973b29a4c17aec050a212eefd30bfa2984782) fix(vertex): strip version suffix from model name in count_tokens requests (#25800) — _@dkindlund_
- [`3c9bf32`](https://github.com/BerriAI/litellm/commit/3c9bf32611095f9f1e4e92a0cbc724391baae6fb) fix(bedrock): prevent negative streaming costs with start-only cache usage — _@Sameerlite_
- [`ed0138b`](https://github.com/BerriAI/litellm/commit/ed0138b50e0f4751d1c17795da6ba00e332c9c73) Merge pull request #25812 from BerriAI/litellm_fix-invalidate-orgs-on-team-mutation — _@ryan-crabbe-berri_
- [`18c93e0`](https://github.com/BerriAI/litellm/commit/18c93e0ccd51b5ba8d76452a3bc84b2488602d84) Merge pull request #25809 from BerriAI/litellm_fix_tool_test_panel_bool_rendering — _@ryan-crabbe-berri_
- [`cf4f051`](https://github.com/BerriAI/litellm/commit/cf4f0516be45f70e33d87032b4689b47ff0730ad) Merge pull request #25806 from BerriAI/litellm_fix_guardrail_optional_params_bool_rendering — _@ryan-crabbe-berri_
- [`96415a5`](https://github.com/BerriAI/litellm/commit/96415a5ac26272ef82db02f8eecdf47c3b75142c) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_fix-invalidate-orgs-on-team-mutation — _@ryan-crabbe-berri_
- [`83095c2`](https://github.com/BerriAI/litellm/commit/83095c24c6981874a0c7b1d75007531a3cadda68) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_fix_tool_test_panel_bool_rendering — _@ryan-crabbe-berri_
- [`bbf204e`](https://github.com/BerriAI/litellm/commit/bbf204e602a8f04f8785bf2973a535004a2c279a) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_fix_guardrail_optional_params_bool_rendering — _@ryan-crabbe-berri_
- [`2dd060b`](https://github.com/BerriAI/litellm/commit/2dd060b4e4b006344d8f4a51798920922286125c) Merge pull request #25838 from BerriAI/litellm_fix-virtual-key-projected-spend-alert — _@ryan-crabbe-berri_
- [`c8cfc5d`](https://github.com/BerriAI/litellm/commit/c8cfc5de21680f8f564b497254cc0d4c277d9402) fix(httpx): set response.request and strip content-encoding in MaskedHTTPStatusError — _@yuneng-berri_
- [`f639769`](https://github.com/BerriAI/litellm/commit/f639769ca9b112e756c38a1f49797a9392c299d6) fix(proxy): use flat soft_budget field for virtual key projected-spend alerts — _@ryan-crabbe-berri_
- [`070374d`](https://github.com/BerriAI/litellm/commit/070374d03a2ea0a41e5e7d149e30146c8263e127) fix(ci): authorize RestrictedPython in liccheck.ini — _@yuneng-berri_
- [`fdeeed6`](https://github.com/BerriAI/litellm/commit/fdeeed6df8d69dbb91834ea94f4c4f239f995a86) fix(ci): resolve mypy and ruff lint failures — _@yuneng-berri_
- [`be1b802`](https://github.com/BerriAI/litellm/commit/be1b8025014b98673027bcc93918494af8417a54) Merge pull request #25834 from stuxf/fix/path-traversal-guardrail-yaml — _@yuneng-berri_
- [`0c8b83c`](https://github.com/BerriAI/litellm/commit/0c8b83c0a1ff9c75013aa139cb1144c9d50e1bf1) Merge pull request #25827 from stuxf/fix/outbound-host-validation — _@yuneng-berri_
- [`a4faace`](https://github.com/BerriAI/litellm/commit/a4faacecafc3bd5bb9585cbde559739b4567242c) style: move import os to module level, fix import ordering — _@stuxf_
- [`a44c4d0`](https://github.com/BerriAI/litellm/commit/a44c4d0f2700c1811f6e87132efc42ec04262e1f) style: fix import ordering in prompt_endpoints — _@stuxf_
- [`c2b3b62`](https://github.com/BerriAI/litellm/commit/c2b3b62996aef5f396b7e786ec6612da0677d72a) test: add unit tests for path_utils safe_join and safe_filename — _@stuxf_
- [`278e3f4`](https://github.com/BerriAI/litellm/commit/278e3f4a6bb0cbc4afbf179ed1cafbfd2a1bd5ba) refactor: harden path utils, move imports to module level — _@stuxf_
- [`9691649`](https://github.com/BerriAI/litellm/commit/9691649606d4c48eceb98a8fad715ba7a2e59773) fix(proxy): add shared path utilities, prevent directory traversal — _@stuxf_
- [`0b73352`](https://github.com/BerriAI/litellm/commit/0b7335201b22e27e14ea836455444e19a768492e) Merge pull request #25699 from BerriAI/litellm_ishaan_april14 — _@ishaan-berri_
- [`def9c4e`](https://github.com/BerriAI/litellm/commit/def9c4ec4722da9b4ddc77391eca759a097981c1) chore: merge litellm_internal_staging, resolve uv.lock conflict — _@ishaan-berri_
- [`2613670`](https://github.com/BerriAI/litellm/commit/26136708bb1b16eace219542e6ece5595871b981) chore: trigger CI re-evaluation — _@ishaan-berri_
- [`ae2aba0`](https://github.com/BerriAI/litellm/commit/ae2aba0e15f6637d467ff773ee338493f3435e17) Merge pull request #25622 from Sameerlite/litellm_docs_cost_discrepancy_guide — _@ishaan-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
