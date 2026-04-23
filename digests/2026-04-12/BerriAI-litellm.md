# BerriAI/litellm — 2026-04-12

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-11T23:59:59.000Z → 2026-04-12T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline is the new **v1.83.7.rc.1** release (cut from the 1.83.6→1.83.7 version bump in #25578) plus a meaty batch of security and correctness fixes that landed alongside it.

**Security / hardening.** PR #25592 tightens handling of `os.environ/` references in request parameters: such references coming through `/health/test_connection` request params are now rejected rather than resolved, callback params that carry env references are dropped with a warning, and `oidc/file/` paths must be absolute. A new `LITELLM_OIDC_ALLOWED_CREDENTIAL_DIRS` env var gates allowed credential locations. Two related cache-key correctness fixes also landed: #25549 makes the `model_max_budget` limiter use `model_group` consistently across spend tracking and enforcement, and #25552 routes bulk key updates and key rotation through `_hash_token_if_needed` so cache invalidation works for both hashed and `sk-` tokens. A follow-up commit (4617d23) extends the same `sk-` hashing fix to the `/spend/logs` date-range branch, and #25541 aligns field-level checks across user/key update endpoints.

**Advisor tool (feat).** PR #25579 introduces an `AdvisorOrchestrationHandler` that brings advisor-tool orchestration to non-Anthropic providers via a new `MessagesInterceptor` ABC + registry wired into the `anthropic_messages` handler. Includes `ADVISOR_MAX_USES` / `ADVISOR_NATIVE_PROVIDERS` constants, a max-uses cap that injects an error tool_result rather than raising, and substantial unit + integration test coverage. Worth a read if you care about cross-provider tool loops.

**Other fixes worth noting.** #25440 aligns budget-table reset times for team members and end-users with the standardized calendar schedule (previously a sliding window, diverging from key budgets). #25395 omits null `encoding_format` from OpenAI embedding requests. #25409 adds wandb model offerings (kimi-k2.5, minimax-m2.5).

**UI.** #25406 migrates the Virtual Keys regenerate-key modal to AntD; #25575-follow-up commits add per-team opt-out for specific global guardrails (renamed `opted_out_global_guardrails`) with a grouped multi-select in the team edit form. Blog got a Ramp-style restyle (#25580, #25583) plus a Redis circuit breaker post.

No new issues or open PRs in-window.

## Releases

- **[v1.83.7.rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.83.7.rc.1)** — v1.83.7.rc.1 _by @github-actions[bot] at 2026-04-12T01:05:00Z_
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

- [`d3331f8`](https://github.com/BerriAI/litellm/commit/d3331f855b57e0e22c0000571211cab662d8ba7c) refactor: rename filter var to satisfy mypy — _@yuneng-berri_
- [`4617d23`](https://github.com/BerriAI/litellm/commit/4617d230f8d805e31163933e0d00452214fc692a) fix: hash sk- api_key in /spend/logs date-range path and add filter tests — _@yuneng-berri_
- [`f5ce6cd`](https://github.com/BerriAI/litellm/commit/f5ce6cdd3ba7458f0f2ebbe662ad62502bb9a243) fix: align /spend/logs filter handling with user scoping — _@yuneng-berri_
- [`fee4e71`](https://github.com/BerriAI/litellm/commit/fee4e7190509cf860129fb82969b2d645781a802) Merge pull request #25592 from BerriAI/litellm_tightenEnvReferenceHandling — _@yuneng-berri_
- [`41849a5`](https://github.com/BerriAI/litellm/commit/41849a540d61a7f61a3f8ba0ddb8f5fcdf69c89e) document new env var and fix type hint — _@yuneng-berri_
- [`6baee0d`](https://github.com/BerriAI/litellm/commit/6baee0dfcbe39f4a789a4f09872f321d52414298) address review feedback — _@yuneng-berri_
- [`06a0d44`](https://github.com/BerriAI/litellm/commit/06a0d4498a03c7b0362fa12965edd7307c60648d) fix: tighten handling of environment references in request parameters — _@yuneng-berri_
- [`5544803`](https://github.com/BerriAI/litellm/commit/5544803b35fe0804e054427b50fe501bb120c830) Merge pull request #25406 from BerriAI/litellm_regen_key_modal_antd — _@yuneng-berri_
- [`05e9ca7`](https://github.com/BerriAI/litellm/commit/05e9ca7e75ed74f9b7fde4e190f481285d709b8f) Merge pull request #25541 from BerriAI/litellm_field_level_checks — _@yuneng-berri_
- [`1857be4`](https://github.com/BerriAI/litellm/commit/1857be43a790ddfb4c2195209a08a1a7e022471d) Merge remote-tracking branch 'origin/main' into litellm_regen_key_modal_antd — _@yuneng-berri_
- [`ee06b92`](https://github.com/BerriAI/litellm/commit/ee06b9278a32617b8a66ed5cfe6abc13ea286f90) feat(model):add wandb model offerings to include kimi-k2.5 and minimax-m2.5 (#25409) — _@csoni-cweave_
- [`e1bf114`](https://github.com/BerriAI/litellm/commit/e1bf1145919136ab1d6b6159f8ab735bab13dc0d) fix(budget): align budget table reset times with standardized calendar schedule (#25440) — _@DmitriyAlergant_
- [`e3d160f`](https://github.com/BerriAI/litellm/commit/e3d160f158ac33348699f4196e09d19401bbcc41) fix(embedding): omit null encoding_format for openai requests (#25395) — _@meutsabdahal_
- [`17e145a`](https://github.com/BerriAI/litellm/commit/17e145a083de6e9d94da6e2c7d91a19d37f51264) fix(proxy): use model_group for model_max_budget spend tracking cache key (#25549) — _@dkindlund_
- [`f54e4e6`](https://github.com/BerriAI/litellm/commit/f54e4e664bd4c0bdf2677a162da616db67eb8ea7) fix(proxy): use _hash_token_if_needed for cache invalidation in bulk update and key rotation (#25552) — _@dkindlund_
- [`fdd7500`](https://github.com/BerriAI/litellm/commit/fdd7500904e4b9ccab124ecde5f40c8119646d7c) blog: add back arrow to blog post pages (#25587) — _@ishaan-berri_
- [`1edf41c`](https://github.com/BerriAI/litellm/commit/1edf41c26faa404514750b12c84c3c1b2e03d153) Merge pull request #25585 from BerriAI/litellm_dev_04_11_2026_p1 — _@ishaan-berri_
- [`973986a`](https://github.com/BerriAI/litellm/commit/973986aac2139af0673a06d32955bc199f5708f5) docs: readme tweak — _@krrish-berri-2_
- [`329a526`](https://github.com/BerriAI/litellm/commit/329a526b9dede33a9996fb49ce88885f4f16cf7f) Merge pull request #25579 from BerriAI/feat/anthropic-advisor-tool — _@ishaan-berri_
- [`12c1467`](https://github.com/BerriAI/litellm/commit/12c14672288c5f26869a0c7f1605a0bb61423b52) Merge pull request #25583 from BerriAI/blog/ramp-style-restyle-with-redis-post — _@ishaan-berri_
- [`dd87f3b`](https://github.com/BerriAI/litellm/commit/dd87f3be5bda57fba7a9c07656c59947fa76b7e8) docs(advisor): move supported providers to top, focus how it works on litellm native loop — _@ishaan-berri_
- [`a8bc7bf`](https://github.com/BerriAI/litellm/commit/a8bc7bfcd4a7e73de4e08293a60de646280b0245) docs(advisor): add how it works section with mermaid diagram + non-native provider table — _@ishaan-berri_
- [`9be7b4c`](https://github.com/BerriAI/litellm/commit/9be7b4c07c7d885cf869d639f79233e341ce6f08) test(advisor): add integration tests for full dispatch path, max_uses, provider bypass — _@ishaan-berri_
- [`fa52584`](https://github.com/BerriAI/litellm/commit/fa5258466d226d42c5bf1db5f5fc0a3250effb9d) test(advisor): add unit tests for max_uses=0, missing model, default fallback — _@ishaan-berri_
- [`22f45c6`](https://github.com/BerriAI/litellm/commit/22f45c66668cc39809f05d8908605ded474ede1b) fix(advisor): restore AdvisorMaxIterationsError, raise on cap, fix max_uses=0 falsy — _@ishaan-berri_
- [`35f4b47`](https://github.com/BerriAI/litellm/commit/35f4b47ff850caee5bbf82700b3ee12bc3f23159) apply content guidelines: scale/resilience narrative, FAQ, Key Takeaways, Conclusion CTA — _@ishaan-berri_
- [`f74d626`](https://github.com/BerriAI/litellm/commit/f74d6262534e3a87db5fa0cc20125990e2890c43) Merge pull request #25580 from BerriAI/blog/ramp-style-restyle-with-redis-post — _@ishaan-berri_
- [`d29f40d`](https://github.com/BerriAI/litellm/commit/d29f40d39f62f5cbb3384a48632cbd3a403eae3f) fix(advisor): inject max_uses_exceeded error result instead of raising exception — _@ishaan-berri_
- [`14eed24`](https://github.com/BerriAI/litellm/commit/14eed244711fab63bd353307022edb2a6496549f) add redis circuit breaker blog post with React diagrams — _@ishaan-berri_
- [`8e616ec`](https://github.com/BerriAI/litellm/commit/8e616ecdf4726134c9562bd395355d6e62005583) add BlogPostPage swizzle: hide sidebar, add hiring CTA on every post — _@ishaan-berri_
- [`dac44fb`](https://github.com/BerriAI/litellm/commit/dac44fb443e0f98efeb045bc4e4e450285041210) blog list styles: clean typography, marquee animation, hero layout — _@ishaan-berri_
- [`85cb7db`](https://github.com/BerriAI/litellm/commit/85cb7db8b9ebd832aee25be54a3ace478d36045b) blog list page: Ramp-style flat list with hero, provider marquee, hiring CTA — _@ishaan-berri_
- [`05d5164`](https://github.com/BerriAI/litellm/commit/05d516482f966a0d6b9ba62eac3ae41b546520fa) restyle blog list page to match engineering blog aesthetic — _@ishaan-berri_
- [`7c6bd98`](https://github.com/BerriAI/litellm/commit/7c6bd98fdf5492bece58d4b7b3a2dc3fb23e4794) fix: address PR review comments on RegenerateKeyModal — _@yuneng-berri_
- [`844e34b`](https://github.com/BerriAI/litellm/commit/844e34b68b471a498ad2eacf6de46fd291a11cdd) test(advisor): remove live e2e test file (tests run locally via script) — _@ishaan-berri_
- [`30c2357`](https://github.com/BerriAI/litellm/commit/30c2357fe3c74e6fad1015d6d1e562418b50bbbf) fix(ui/team): annotate effectiveGuardrails as string[] for strict typecheck — _@ryan-crabbe-berri_
- [`3d72e2a`](https://github.com/BerriAI/litellm/commit/3d72e2a6f3cff5e8e6453b7c534df310ba90c8d5) fix(guardrails): address PR #25575 review feedback + sync kill switch with opt-out list — _@ryan-crabbe-berri_
- [`59f66af`](https://github.com/BerriAI/litellm/commit/59f66af0f9f54cd9161e98de844a49c9d67b6461) fix(ui/team): wait for useGuardrails to resolve before rendering edit form — _@ryan-crabbe-berri_
- [`f963965`](https://github.com/BerriAI/litellm/commit/f9639654fac6c1b1f00330b569f760114a9ffab9) feat(ui/team): per-guardrail opt-out for global guardrails — _@ryan-crabbe-berri_
- [`a9d64f8`](https://github.com/BerriAI/litellm/commit/a9d64f8620d76e3ce0e7391c300bd0a37f92575f) refactor(ui/guardrails): expose full data from useGuardrails hook — _@ryan-crabbe-berri_
- [`88beed9`](https://github.com/BerriAI/litellm/commit/88beed905ea9a37d2ae67a021a754936500ff12b) feat(guardrails): per-team opt-out for specific global guardrails — _@ryan-crabbe-berri_
- [`742e2fe`](https://github.com/BerriAI/litellm/commit/742e2fe1aa3a057c0bbda95e29885320e0264d1b) test(advisor): add live e2e tests for advisor orchestration against real proxy — _@ishaan-berri_
- [`ce3d039`](https://github.com/BerriAI/litellm/commit/ce3d039bcdbf540e8472f5ff4b0223b394652b1e) test(advisor): add unit tests for orchestration loop (mocked backends, 8 tests) — _@ishaan-berri_
- [`b92e4c5`](https://github.com/BerriAI/litellm/commit/b92e4c5595cfde3f16b4ed84398ea27c519ae9d6) docs(advisor): add interceptors README explaining when to use vs pre-request hooks — _@ishaan-berri_
- [`c12ebdb`](https://github.com/BerriAI/litellm/commit/c12ebdb2210d259f5bfe72f37167edc7874bc6ad) feat(advisor): add AdvisorOrchestrationHandler for non-Anthropic providers — _@ishaan-berri_
- [`ea765f7`](https://github.com/BerriAI/litellm/commit/ea765f75091079393c06e96d25a1545a58bf7b03) feat(advisor): add MessagesInterceptor ABC and registry — _@ishaan-berri_
- [`ebc57a1`](https://github.com/BerriAI/litellm/commit/ebc57a157dc5c3b7e7f2b1a864de828e164aaba3) feat(advisor): wire MessagesInterceptor registry into anthropic_messages handler — _@ishaan-berri_
- [`a89b067`](https://github.com/BerriAI/litellm/commit/a89b0672c799e6f4c7d70214a806f1f92aefcc97) feat(advisor): add replace_with_text param to strip_advisor_blocks_from_messages — _@ishaan-berri_
- [`23e20fa`](https://github.com/BerriAI/litellm/commit/23e20facb62423d9e4708e516160154912906d76) feat(advisor): add ADVISOR_MAX_USES, ADVISOR_NATIVE_PROVIDERS, ADVISOR_TOOL_DESCRIPTION constants — _@ishaan-berri_
- [`ef38c66`](https://github.com/BerriAI/litellm/commit/ef38c665ca387aa194513ba3ff7bfa9d788a4498) fix(guardrails): use plural key in get_disable_global_guardrail — _@ryan-crabbe-berri_
- [`e08e3bf`](https://github.com/BerriAI/litellm/commit/e08e3bf74860850501e53d3856554054ba4b7b92) docs: clarify how to get benchmarking script — _@krrish-berri-2_
- [`12bca64`](https://github.com/BerriAI/litellm/commit/12bca649fc32d0a9027ea9d0fedb5a81788608ce) docs: refactor benchmarking docs to be clearer — _@krrish-berri-2_
- [`2c786ca`](https://github.com/BerriAI/litellm/commit/2c786ca2e65ab13aeac0212c1a5f6ff0644c2078) Merge pull request #25578 from BerriAI/yj_apr11_bump — _@yuneng-berri_
- [`e162c6d`](https://github.com/BerriAI/litellm/commit/e162c6d5023433dfc6e2737bc10b27876d73bbe1) bump: version 1.83.6 → 1.83.7 — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
