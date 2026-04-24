# BerriAI/litellm — 2026-04-24

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-23T23:59:59.000Z → 2026-04-24T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

> _Deterministic template only — no LLM summary for this run._

## Releases

_None in window._


## Merged PRs

- [#26356](https://github.com/BerriAI/litellm/pull/26356) **[Infra] Remove CCI/GHA test duplication and semantically shard proxy DB tests** — _by @yuneng-berri, merged 2026-04-24T01:17:56Z_
- [#25746](https://github.com/BerriAI/litellm/pull/25746) **  fix(router): restore BYOK key injection for vector store endpoints with team-scoped deployments        ** — _by @shivamrawat1, merged 2026-04-24T01:16:47Z_
- [#26375](https://github.com/BerriAI/litellm/pull/26375) **[Infra] Promote internal staging to main** — _by @yuneng-berri, merged 2026-04-24T00:55:07Z_
- [#26370](https://github.com/BerriAI/litellm/pull/26370) **[Infra] Bump version 1.83.12 → 1.83.13** — _by @yuneng-berri, merged 2026-04-24T00:30:45Z_
- [#26207](https://github.com/BerriAI/litellm/pull/26207) **Surface per-member budget cycle in Teams > Members tab** — _by @ryan-crabbe-berri, merged 2026-04-24T00:24:04Z_


## Open PRs (new or updated)

- [#26202](https://github.com/BerriAI/litellm/pull/26202) **[WIP] Litellm token verification query opt** — _by @harish-berri, updated 2026-04-24T01:33:23Z_
- [#26368](https://github.com/BerriAI/litellm/pull/26368) **fix(team_endpoints): auto-add SSO team members to org on move (proxy admin only)** — _by @ishaan-berri, updated 2026-04-24T01:28:45Z_
- [#26331](https://github.com/BerriAI/litellm/pull/26331) **feat(openai): add gpt-image-2 to model prices** — _by @Kcstring, updated 2026-04-24T01:27:09Z_
- [#26362](https://github.com/BerriAI/litellm/pull/26362) **[Fix] Tests - Proxy: Isolate master_key/prisma_client module globals between tests** — _by @yuneng-berri, updated 2026-04-24T01:21:39Z_
- [#26279](https://github.com/BerriAI/litellm/pull/26279) **fix(auth): centralize common_checks to close authorization bypass** — _by @stuxf, updated 2026-04-24T01:06:27Z_
- [#26374](https://github.com/BerriAI/litellm/pull/26374) _(draft)_ **[WIP] fix(mcp): do not prefix tool names when listing via scoped /mcp/{server_name} endpoint for stdio servers (#22670)** — _by @mateo-berri, updated 2026-04-24T00:47:14Z_
- [#26367](https://github.com/BerriAI/litellm/pull/26367) **Split MCP routes into inference vs management (unblock Admin UI on DISABLE_LLM_API_ENDPOINTS nodes)** — _by @ryan-crabbe-berri, updated 2026-04-24T00:44:32Z_
- [#25534](https://github.com/BerriAI/litellm/pull/25534) **chore(deps): bump pypdf from 6.9.2 to 6.10.0** — _by @dependabot[bot], updated 2026-04-24T00:42:19Z_
- [#26365](https://github.com/BerriAI/litellm/pull/26365) **chore(deps): bump vulnerable dependencies** — _by @stuxf, updated 2026-04-24T00:41:12Z_
- [#26373](https://github.com/BerriAI/litellm/pull/26373) _(draft)_ **[WIP] fix(azure): propagate llm_provider- response headers on Responses API (#15232)** — _by @mateo-berri, updated 2026-04-24T00:37:57Z_
- [#26372](https://github.com/BerriAI/litellm/pull/26372) _(draft)_ **[WIP] test: regression test for completion_tokens_details on Responses API usage (#15377)** — _by @mateo-berri, updated 2026-04-24T00:35:59Z_
- [#25662](https://github.com/BerriAI/litellm/pull/25662) **build(deps): bump aiohttp from 3.13.3 to 3.13.4** — _by @dependabot[bot], updated 2026-04-24T00:35:01Z_
- [#26188](https://github.com/BerriAI/litellm/pull/26188) **build(deps): bump python-dotenv from 1.0.1 to 1.2.2** — _by @dependabot[bot], updated 2026-04-24T00:33:46Z_
- [#26360](https://github.com/BerriAI/litellm/pull/26360) **feat(guardrails): LLM-as-a-Judge guardrail** — _by @ishaan-berri, updated 2026-04-24T00:28:04Z_
- [#26371](https://github.com/BerriAI/litellm/pull/26371) **feat: add Telnyx as OpenAI-compatible provider** — _by @gbattistel, updated 2026-04-24T00:23:33Z_
- [#25177](https://github.com/BerriAI/litellm/pull/25177) **feat(oci): official OCI Generative AI integration — production-ready chat, embeddings & tool use across all model families** — _by @fede-kamel, updated 2026-04-24T00:21:39Z_
- [#19669](https://github.com/BerriAI/litellm/pull/19669) **Fix verbosity parameter** — _by @ahmetzahitak, updated 2026-04-24T00:13:07Z_
- [#19674](https://github.com/BerriAI/litellm/pull/19674) **Add pricing for some OpenRouter provided OpenAI models (gpt-4o-mini, …** — _by @anelosima, updated 2026-04-24T00:13:05Z_
- [#26369](https://github.com/BerriAI/litellm/pull/26369) **chore(packaging): declare MIT license in litellm-proxy-extras metadata** — _by @stuxf, updated 2026-04-24T00:01:18Z_


## Closed PRs (not merged)

- [#25123](https://github.com/BerriAI/litellm/pull/25123) **security: move Gemini API keys from URL to header (v1.81.3 backport)** — _by @stuxf, closed 2026-04-24T00:59:49Z_
- [#24844](https://github.com/BerriAI/litellm/pull/24844) **chore: pin Docker base images to SHA256 digests** — _by @stuxf, closed 2026-04-24T00:59:47Z_
- [#18277](https://github.com/BerriAI/litellm/pull/18277) **[Fix] vertex credentials being logged** — _by @shivamrawat1, closed 2026-04-24T00:13:47Z_
- [#18356](https://github.com/BerriAI/litellm/pull/18356) **[Bug] add auth to unsecured routes in debug utils** — _by @shivamrawat1, closed 2026-04-24T00:13:45Z_
- [#19197](https://github.com/BerriAI/litellm/pull/19197) **Default alerting parameters from config** — _by @danielnyari-seon, closed 2026-04-24T00:13:35Z_


## Notable Issues

- [#22747](https://github.com/BerriAI/litellm/issues/22747) **azure_api_type: responses uses aiohttp transport which has ~60s socket idle timeout, ignoring timeout parameter -GPT-5-PRO** _[llm translation]_ — _by @harshadchha_
- [#26376](https://github.com/BerriAI/litellm/issues/26376) **[Bug]: langfuse_otel callback drops OTEL spans under asyncio.gather() concurrency** — _by @shuttlesworthNEO_
- [#26339](https://github.com/BerriAI/litellm/issues/26339) **gpt 5.5 support?** — _by @cktang88_
- [#23637](https://github.com/BerriAI/litellm/issues/23637) **[Bug]: update the 1M context standard price for Vertex AI claude opus 4.6 and sonnet 4.6** _[bug, llm translation]_ — _by @sridharc-ntap_ _(closed 2026-04-24T00:45:37Z)_
- [#26333](https://github.com/BerriAI/litellm/issues/26333) **[Bug]: Security issue CVE-2026-28684 on python-dotenv cannot be fixed due to pinned versions** _[bug, SDK]_ — _by @bhadrim_
- [#10595](https://github.com/BerriAI/litellm/issues/10595) **[Bug]: Prometheus metrics aren't shared across Uvicorn workers** _[bug, mlops user request, stale]_ — _by @Penagwin_
- [#13961](https://github.com/BerriAI/litellm/issues/13961) **[Bug]: send_invite_email setting is ignored during user creation** _[bug, stale]_ — _by @JonasDev1_ _(closed 2026-04-24T00:13:59Z)_
- [#14067](https://github.com/BerriAI/litellm/issues/14067) **Issue with model function calling** _[llm translation, stale]_ — _by @AimoreRRD_
- [#19001](https://github.com/BerriAI/litellm/issues/19001) **[Bug]: /v1/rag/query endpoint throws 'Router is not JSON serializable' error** _[llm translation, stale]_ — _by @jctux_
- [#19014](https://github.com/BerriAI/litellm/issues/19014) **[REDACTED] Foundry Project Endpoint** _[stale]_ — _by @gfish213-tech_
- [#19194](https://github.com/BerriAI/litellm/issues/19194) **[Bug] Data Protection Issue: Endpoint /user/daily/activity** _[bug, proxy, stale]_ — _by @chandra-potula_ _(closed 2026-04-24T00:13:36Z)_
- [#19499](https://github.com/BerriAI/litellm/issues/19499) **[Bug]: Prompt Injection Detection Issues** _[bug, proxy]_ — _by @ianmuge_
- [#19626](https://github.com/BerriAI/litellm/issues/19626) **[Bug]: Missing wget in Docker container results in LiteLLM container healthcheck to fail** _[bug, stale]_ — _by @roxlukas_
- [#19630](https://github.com/BerriAI/litellm/issues/19630) **[Feature]: Allow teams to manage their own guardrails via JWT tokens** _[enhancement, proxy, stale]_ — _by @shivamrawat1_
- [#19633](https://github.com/BerriAI/litellm/issues/19633) **[Bug]: use_in_pass_through does not apply per model, but by project + location (vertex_ai)** _[bug, proxy, llm translation, stale]_ — _by @stronk7_
- [#19637](https://github.com/BerriAI/litellm/issues/19637) **[Bug]: Content filter guardrails not working.** _[bug, stale]_ — _by @shivamrawat1_
- [#19641](https://github.com/BerriAI/litellm/issues/19641) **[Bug]: Content categories not visible in the UI after creation** _[bug, stale]_ — _by @shivamrawat1_
- [#19651](https://github.com/BerriAI/litellm/issues/19651) **[Bug]: Custom SSO Handler does not get called anymore** _[bug, stale, ui-dashboard]_ — _by @metalshanked_


## Commits on `litellm_internal_staging`

- [`8e652d1`](https://github.com/BerriAI/litellm/commit/8e652d129d6a3536359212e4f0c41319638234ad) Merge pull request #26356 from BerriAI/litellm_cci_gha_dedup_and_shard — _@shin-berri_
- [`654b688`](https://github.com/BerriAI/litellm/commit/654b688c8f6cdeac2020308fd2fa3f669def7e5b) Merge pull request #25746 from BerriAI/litellm_vector-store-team-byok-model-none — _@yuneng-berri_
- [`e982fe8`](https://github.com/BerriAI/litellm/commit/e982fe85e93056d9b4597b236c36c715581d9b68) Merge branch 'litellm_internal_staging' into litellm_vector-store-team-byok-model-none — _@shivamrawat1_
- [`812044a`](https://github.com/BerriAI/litellm/commit/812044a80505f3eb1d8f5d3a5fa8f14efa1276cc) rerun tests — _@shivamrawat1_
- [`b217ad4`](https://github.com/BerriAI/litellm/commit/b217ad44d315cfa046569addac5bf729011f0a98) rerun tests — _@shivamrawat1_
- [`1f6ce45`](https://github.com/BerriAI/litellm/commit/1f6ce457028f067f237e467dff2fc916ff55278b) Merge pull request #26370 from BerriAI/litellm_version_bump — _@yuneng-berri_
- [`08cc1e6`](https://github.com/BerriAI/litellm/commit/08cc1e66cfaa9c5ec5edceeebd89c73419047d83) Merge pull request #26207 from BerriAI/litellm_team_member_total_spend_frontend — _@yuneng-berri_
- [`6b6b8c7`](https://github.com/BerriAI/litellm/commit/6b6b8c74186569c6c2b40b92a3a9db861c7745f0) restore budget_reset_at on TeamMembership type — _@ryan-crabbe-berri_
- [`fbaedc3`](https://github.com/BerriAI/litellm/commit/fbaedc36dcdd72fca9ac2379f53fa015d394b000) revert TeamInfo budget reset display changes — _@ryan-crabbe-berri_
- [`ffaeff5`](https://github.com/BerriAI/litellm/commit/ffaeff54cd8ad8eaf54c797a5af1c456707e6861) add uv — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (deterministic template; no LLM for this run)._
