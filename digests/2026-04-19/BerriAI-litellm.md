# BerriAI/litellm — 2026-04-19

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-18T23:59:59.000Z → 2026-04-19T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is the **v1.83.10-nightly** release (and **v1.83.7-stable**), cut after staging was promoted to main via [#26044](https://github.com/BerriAI/litellm/pull/26044) and the version bump in [#26038](https://github.com/BerriAI/litellm/pull/26038). A new **adaptive routing** feature landed directly on main (commit `924fa6a`) alongside refreshed docs (`70caf5a`) — worth a closer look since it shipped without a discrete PR in this window.

Significant **Docker/infra hardening** dominated commits: a UI Drift Guard CI job now rebuilds the admin UI and fails on drift against `litellm/proxy/_experimental/out/` (`65a60db`), with `Dockerfile.non_root` overhauled to stage the pre-built UI (`004c6b1`), drop npm from runtime (`78485f5`), slim the C toolchain (`ca52e34`), add a BuildKit uv cache mount (`e24c02f`), and remove dead Prisma/migration lines (`4c8cbaf`). Net effect: smaller image, faster builds. Related: [#26033](https://github.com/BerriAI/litellm/pull/26033) built UI and [#26043](https://github.com/BerriAI/litellm/pull/26043) bumped `litellm-proxy-extras` to 0.4.67.

Notable **provider/feature PRs opened** today and worth triaging:

- [#26064](https://github.com/BerriAI/litellm/pull/26064) adds an `OpenAICompatibleImageGenerationConfig` so third-party OpenAI-compatible image endpoints (Volcengine doubao-seedream, OpenRouter, together.ai) stop 400-ing through the proxy.
- [#26063](https://github.com/BerriAI/litellm/pull/26063) / [#26062](https://github.com/BerriAI/litellm/pull/26062) add Anthropic `task_budget` support (Claude Opus 4.7) with auto beta-header injection — closes #25971.
- [#26058](https://github.com/BerriAI/litellm/pull/26058) fixes `ssl_verify=False` being silently ignored on streaming text-completion requests (#26053); a competing fix [#26057](https://github.com/BerriAI/litellm/pull/26057) was closed unmerged.
- [#26045](https://github.com/BerriAI/litellm/pull/26045) fixes semantic tool filtering on the completions API and [#26048](https://github.com/BerriAI/litellm/pull/26048) adds `uv` to the production image to unblock stdio MCP servers (#19361).
- [#26037](https://github.com/BerriAI/litellm/pull/26037) fixes URL construction when base URLs have a trailing `/v1` (#26009); [#26052](https://github.com/BerriAI/litellm/pull/26052) cleans up xAI canonical-name/alias resolution.

Docs-only: [#26072](https://github.com/BerriAI/litellm/pull/26072) adds the AgentSeal observability integration. No new issues filed in the window.

## Releases

- **[v1.83.10-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.83.10-nightly)** — v1.83.10-nightly _by @github-actions[bot] at 2026-04-19T06:31:35Z_
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
- **[v1.83.7-stable](https://github.com/BerriAI/litellm/releases/tag/v1.83.7-stable)** — v1.83.7-stable _by @github-actions[bot] at 2026-04-19T06:43:46Z_
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

- [#22866](https://github.com/BerriAI/litellm/pull/22866) **feat: bedrock mantle provider** — _by @mubashir1osmani, merged 2026-03-05T12:54:00Z_
- [#25915](https://github.com/BerriAI/litellm/pull/25915) **Add capability to override default GitHub Copilot authentication endp…** — _by @steromano87, merged 2026-04-17T04:04:39Z_
- [#26044](https://github.com/BerriAI/litellm/pull/26044) **[Infra] Promote staging to main** — _by @yuneng-berri, merged 2026-04-19T02:33:24Z_
- [#26043](https://github.com/BerriAI/litellm/pull/26043) **bump litellm-proxy-extras to 0.4.67** — _by @ishaan-berri, merged 2026-04-19T02:03:57Z_
- [#26038](https://github.com/BerriAI/litellm/pull/26038) **bump: version 1.83.9 → 1.83.10** — _by @yuneng-berri, merged 2026-04-19T01:54:11Z_
- [#26033](https://github.com/BerriAI/litellm/pull/26033) **[Infra] Build UI** — _by @yuneng-berri, merged 2026-04-19T01:37:01Z_
- [#25735](https://github.com/BerriAI/litellm/pull/25735) **fix(bedrock/anthropic): accurate cache token cost breakdown in UI and SpendLogs** — _by @ishaan-berri, merged 2026-04-15T17:44:38Z_


## Open PRs (new or updated)

- [#26072](https://github.com/BerriAI/litellm/pull/26072) **docs: add AgentSeal observability integration** — _by @JoeyBrar, updated 2026-04-19T23:24:12Z_
- [#26064](https://github.com/BerriAI/litellm/pull/26064) **feat(openai/image_generation): add OpenAICompatibleImageGenerationConfig for community endpoints** — _by @VeechiYip, updated 2026-04-19T16:34:42Z_
- [#24394](https://github.com/BerriAI/litellm/pull/24394) **Akto Logging Integration** — _by @rzeta-10, updated 2026-04-19T16:33:19Z_
- [#24395](https://github.com/BerriAI/litellm/pull/24395) **Update Akto Guardrails to use only pre_call mode, docs and test file** — _by @rzeta-10, updated 2026-04-19T16:29:29Z_
- [#25161](https://github.com/BerriAI/litellm/pull/25161) **fix(scheduler): normalize Redis-deserialized queue items to tuples** — _by @rudra717, updated 2026-04-19T16:10:44Z_
- [#26025](https://github.com/BerriAI/litellm/pull/26025) **fix(cloudflare): handle API errors and missing response keys gracefully** — _by @ronodhirSoumik, updated 2026-04-19T16:03:49Z_
- [#25560](https://github.com/BerriAI/litellm/pull/25560) **fix(proxy) #25509 add support setting budget_duration on individual member budgets** — _by @daanhendrio, updated 2026-04-19T13:56:41Z_
- [#21635](https://github.com/BerriAI/litellm/pull/21635) **fix(anthropic): migrate output_format to output_config.format (GA API)** — _by @ropoctl, updated 2026-04-19T13:36:01Z_
- [#26063](https://github.com/BerriAI/litellm/pull/26063) **feat(anthropic): support task_budget in output_config with auto beta header injection** — _by @Kcstring, updated 2026-04-19T13:19:03Z_
- [#26058](https://github.com/BerriAI/litellm/pull/26058) **fix: apply ssl_verify to streaming text completion requests (#26053)** — _by @nandanadileep, updated 2026-04-19T11:15:55Z_
- [#26013](https://github.com/BerriAI/litellm/pull/26013) **fix noma v2 deepcopy crashing in build scan payload** — _by @omriShukrun08, updated 2026-04-19T08:13:35Z_
- [#25919](https://github.com/BerriAI/litellm/pull/25919) **fix(responses): propagate metadata to callbacks on Responses API path** — _by @tarujg, updated 2026-04-19T07:41:14Z_
- [#26054](https://github.com/BerriAI/litellm/pull/26054) **fix(format): fix the format lint** — _by @geraint0923, updated 2026-04-19T06:11:12Z_
- [#26052](https://github.com/BerriAI/litellm/pull/26052) **fix(xai): correctly resolve the canonical names and alias for xai models** — _by @geraint0923, updated 2026-04-19T05:35:58Z_
- [#26048](https://github.com/BerriAI/litellm/pull/26048) **Add uv to production image to fix stdio MCP servers** — _by @abelfodil, updated 2026-04-19T04:12:56Z_
- [#26045](https://github.com/BerriAI/litellm/pull/26045) **Fix semantic tool filtering on completions API** — _by @abelfodil, updated 2026-04-19T04:00:37Z_
- [#25621](https://github.com/BerriAI/litellm/pull/25621) **fix: include tool_choice (toolConfig) in vertex AI context caching** — _by @flex-myeonghyeon, updated 2026-04-19T02:05:16Z_
- [#26037](https://github.com/BerriAI/litellm/pull/26037) **fix: url construction for trailing v1 base urls** — _by @rohan-shettyy, updated 2026-04-19T00:39:29Z_
- [#18660](https://github.com/BerriAI/litellm/pull/18660) **Add dedicated xai_key and fallback logic for xAI API key** — _by @PeterDaveHello, updated 2026-04-19T00:07:56Z_


## Closed PRs (not merged)

- [#26031](https://github.com/BerriAI/litellm/pull/26031) **fix(fireworks): add glm-5p1 metadata and parallel_tool_calls** — _by @elonazoulay, closed 2026-04-19T19:11:55Z_
- [#26057](https://github.com/BerriAI/litellm/pull/26057) **fix(openai): use ssl-aware http client in text completion streaming** — _by @CodeLine9, closed 2026-04-19T16:13:36Z_
- [#26062](https://github.com/BerriAI/litellm/pull/26062) **feat(anthropic): support task_budget in output_config with auto beta header injection** — _by @Kcstring, closed 2026-04-19T13:13:38Z_
- [#26039](https://github.com/BerriAI/litellm/pull/26039) **bump enterprise version** — _by @yuneng-berri, closed 2026-04-19T01:59:08Z_
- [#26042](https://github.com/BerriAI/litellm/pull/26042) **bump litellm-proxy-extras to 0.4.67** — _by @ishaan-berri, closed 2026-04-19T01:58:37Z_
- [#26041](https://github.com/BerriAI/litellm/pull/26041) **bump litellm-proxy-extras to 0.4.67** — _by @ishaan-berri, closed 2026-04-19T01:55:54Z_
- [#26040](https://github.com/BerriAI/litellm/pull/26040) **bump litellm-proxy-extras to 0.4.67** — _by @ishaan-berri, closed 2026-04-19T01:52:38Z_
- [#24958](https://github.com/BerriAI/litellm/pull/24958) **Litellm oss staging 04 01 2026** — _by @krrish-berri-2, closed 2026-04-16T13:13:25Z_
- [#24863](https://github.com/BerriAI/litellm/pull/24863) **fix(gpt5): exclude all gpt-5*-chat variants from GPT-5 reasoning routing** — _by @BraulioV, closed 2026-04-15T15:39:45Z_


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`4c8cbaf`](https://github.com/BerriAI/litellm/commit/4c8cbaf0a2403dd60fcdb546f7cecabd72b4fc2b) [Refactor] Dockerfile.non_root: drop dead lines and shrink build context — _@cursoragent_
- [`e24c02f`](https://github.com/BerriAI/litellm/commit/e24c02f478e7ef201725d85c34d00a8a446741bc) [Infra] Dockerfile.non_root: add BuildKit uv cache mount — _@cursoragent_
- [`ca52e34`](https://github.com/BerriAI/litellm/commit/ca52e346b0b5a4a647065603324ebc57d532f34e) [Infra] Dockerfile.non_root: slim C toolchain in builder stage — _@cursoragent_
- [`78485f5`](https://github.com/BerriAI/litellm/commit/78485f5a3239dbcd0c12e83ecb0c3bb939b731ec) [Infra] Dockerfile.non_root: remove unused npm from runtime stage — _@cursoragent_
- [`70caf5a`](https://github.com/BerriAI/litellm/commit/70caf5aec0bb4210df3f3c1504d04ed722a5034e) docs: update docs — _@krrish-berri-2_
- [`924fa6a`](https://github.com/BerriAI/litellm/commit/924fa6a3bcbab498252a0a43c0ea50b6b78a847a) feat: commit new adaptive routing — _@krrish-berri-2_
- [`004c6b1`](https://github.com/BerriAI/litellm/commit/004c6b1b3ecc1c87480ec1aa74f8273d1840a151) [Infra] Dockerfile.non_root: stage pre-built UI from _experimental/out — _@cursoragent_
- [`65a60db`](https://github.com/BerriAI/litellm/commit/65a60dbe352a9c67e6d215d7392f02fc18100a06) [Infra] CI: add UI drift guard + regenerate _experimental/out — _@cursoragent_
- [`26fcbc9`](https://github.com/BerriAI/litellm/commit/26fcbc93e52d8f212f818d53c6922a0fdddb4d48) Merge pull request #26044 from BerriAI/litellm_internal_staging — _@yuneng-berri_
- [`2f22a12`](https://github.com/BerriAI/litellm/commit/2f22a1293e7dd30f89de7a56d9a10ca3e9852ad4) bump litellm-proxy-extras to 0.4.67 (#26043) — _@ishaan-berri_
- [`9e77e25`](https://github.com/BerriAI/litellm/commit/9e77e25107cc06e5edcee6ea8a0b05f18e5bf7bc) Merge pull request #26038 from BerriAI/yj_bump_apr18 — _@yuneng-berri_
- [`49ba6b8`](https://github.com/BerriAI/litellm/commit/49ba6b81607c99df0d9dbeaf4f913a70d17dae9a) add uv lock — _@yuneng-berri_
- [`e16bd15`](https://github.com/BerriAI/litellm/commit/e16bd158c3d2b1f214dfd2d4898857c4aa218486) Merge pull request #26033 from BerriAI/yj_ui_build_apr18 — _@yuneng-berri_
- [`4d63a13`](https://github.com/BerriAI/litellm/commit/4d63a1367eeb9d848f87aa1e54df0a8b7e039d9a) bump: version 1.83.9 → 1.83.10 — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
