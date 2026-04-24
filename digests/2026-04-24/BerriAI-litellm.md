# BerriAI/litellm — 2026-04-24

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-23T08:37:51.049Z → 2026-04-24T08:37:51.049Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

> _Deterministic template only — no LLM summary for this run._

## Releases

- **[v1.83.13-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.83.13-nightly)** — v1.83.13-nightly _by @github-actions[bot] at 2026-04-24T05:47:31Z_
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
- **[v1.83.12-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.83.12-nightly)** — v1.83.12-nightly _by @github-actions[bot] at 2026-04-23T23:29:45Z_
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
- **[v1.83.7-stable.patch.1](https://github.com/BerriAI/litellm/releases/tag/v1.83.7-stable.patch.1)** — v1.83.7-stable.patch.1 _by @github-actions[bot] at 2026-04-23T23:36:37Z_
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

- [#26068](https://github.com/BerriAI/litellm/pull/26068) **feat(ocr): add Reducto parse OCR support** — _by @marutilai, merged 2026-04-24T05:16:45Z_
- [#26367](https://github.com/BerriAI/litellm/pull/26367) **Split MCP routes into inference vs management (unblock Admin UI on DISABLE_LLM_API_ENDPOINTS nodes)** — _by @ryan-crabbe-berri, merged 2026-04-24T05:05:49Z_
- [#25855](https://github.com/BerriAI/litellm/pull/25855) **fix(bedrock): preserve cache_control TTL on tools for Claude 4.5+** — _by @shubham-arora-clear, merged 2026-04-24T04:54:27Z_
- [#26381](https://github.com/BerriAI/litellm/pull/26381) **merge main** — _by @Sameerlite, merged 2026-04-24T03:52:28Z_
- [#26379](https://github.com/BerriAI/litellm/pull/26379) **merge main** — _by @Sameerlite, merged 2026-04-24T03:38:46Z_
- [#26356](https://github.com/BerriAI/litellm/pull/26356) **[Infra] Remove CCI/GHA test duplication and semantically shard proxy DB tests** — _by @yuneng-berri, merged 2026-04-24T01:17:56Z_
- [#25746](https://github.com/BerriAI/litellm/pull/25746) **  fix(router): restore BYOK key injection for vector store endpoints with team-scoped deployments        ** — _by @shivamrawat1, merged 2026-04-24T01:16:47Z_
- [#26375](https://github.com/BerriAI/litellm/pull/26375) **[Infra] Promote internal staging to main** — _by @yuneng-berri, merged 2026-04-24T00:55:07Z_
- [#26370](https://github.com/BerriAI/litellm/pull/26370) **[Infra] Bump version 1.83.12 → 1.83.13** — _by @yuneng-berri, merged 2026-04-24T00:30:45Z_
- [#26207](https://github.com/BerriAI/litellm/pull/26207) **Surface per-member budget cycle in Teams > Members tab** — _by @ryan-crabbe-berri, merged 2026-04-24T00:24:04Z_
- [#26346](https://github.com/BerriAI/litellm/pull/26346) **[Fix] Reset budget windows failing due to Prisma Json? null filter** — _by @yuneng-berri, merged 2026-04-23T23:37:10Z_
- [#26318](https://github.com/BerriAI/litellm/pull/26318) **fix(proxy): share temporary MCP OAuth sessions across instances via Redis** — _by @milan-berri, merged 2026-04-23T23:21:28Z_
- [#26349](https://github.com/BerriAI/litellm/pull/26349) **[Fix] Deflake spend tracking tests** — _by @yuneng-berri, merged 2026-04-23T23:12:19Z_
- [#26359](https://github.com/BerriAI/litellm/pull/26359) **[Fix] Infra: grant contents:write to create-release-branch caller job** — _by @yuneng-berri, merged 2026-04-23T22:58:43Z_
- [#26281](https://github.com/BerriAI/litellm/pull/26281) **feat(vertex_ai): multi-region Vertex hosts (aiplatform.*.rep.googleapis.com)** — _by @milan-berri, merged 2026-04-23T22:58:03Z_
- [#26355](https://github.com/BerriAI/litellm/pull/26355) **[Fix] Tests - drain logging worker in test_router_caching_ttl to fix flakiness** — _by @yuneng-berri, merged 2026-04-23T22:45:20Z_
- [#26204](https://github.com/BerriAI/litellm/pull/26204) **Fix bugs that bypasses per-team member budget limit** — _by @Michael-RZ-Berri, merged 2026-04-23T21:59:07Z_
- [#26348](https://github.com/BerriAI/litellm/pull/26348) **feat: add gpt-5.5 to model cost map** — _by @mateo-berri, merged 2026-04-23T21:46:00Z_
- [#26342](https://github.com/BerriAI/litellm/pull/26342) **[Infra] Add standalone create-release-branch workflow** — _by @yuneng-berri, merged 2026-04-23T21:14:01Z_
- [#26345](https://github.com/BerriAI/litellm/pull/26345) **feat: add gpt-5.5 to model cost map** — _by @mateo-berri, merged 2026-04-23T21:05:23Z_
- [#26336](https://github.com/BerriAI/litellm/pull/26336) **[IInfra] Merge dev branch** — _by @yuneng-berri, merged 2026-04-23T19:02:48Z_


## Open PRs (new or updated)

- [#26245](https://github.com/BerriAI/litellm/pull/26245) **fix(proxy): skip redundant tiktoken recount when provider supplies reasoning_tokens** — _by @dschulmeist, updated 2026-04-24T08:29:03Z_
- [#26397](https://github.com/BerriAI/litellm/pull/26397) **fix(proxy): add verbose_logger to LITELLM_LOG=INFO branch** — _by @Anai-Guo, updated 2026-04-24T07:36:52Z_
- [#25369](https://github.com/BerriAI/litellm/pull/25369) **fix(tool_choice): respect GPT-5 and Azure AI models without explicit capability flag** — _by @Hybirdss, updated 2026-04-24T07:28:49Z_
- [#26385](https://github.com/BerriAI/litellm/pull/26385) **fix: remove duplicate MAX_SIZE_PER_ITEM_IN_MEMORY_CACHE_IN_KB definition** — _by @Jah-yee, updated 2026-04-24T07:27:49Z_
- [#26393](https://github.com/BerriAI/litellm/pull/26393) **feat: bedrock guardrail input roles filter** — _by @orolega, updated 2026-04-24T07:20:48Z_
- [#26394](https://github.com/BerriAI/litellm/pull/26394) **docs(guardrails): add during_call mode to Model Armor guardrail docs** — _by @wadhah101, updated 2026-04-24T06:54:20Z_
- [#26391](https://github.com/BerriAI/litellm/pull/26391) **feat(pricing): gemini-embedding-2 GA cost map, blog, and test** — _by @Sameerlite, updated 2026-04-24T06:30:21Z_
- [#26390](https://github.com/BerriAI/litellm/pull/26390) **[Fix] Guardrail param handling in list and submission endpoints** — _by @yuneng-berri, updated 2026-04-24T06:16:31Z_
- [#26388](https://github.com/BerriAI/litellm/pull/26388) **fix: bedrock guardrail sse streaming exception** — _by @orolega, updated 2026-04-24T05:58:24Z_
- [#26218](https://github.com/BerriAI/litellm/pull/26218) **feat(proxy): add /v1/memory CRUD endpoints** — _by @krrish-berri-2, updated 2026-04-24T05:58:04Z_
- [#26216](https://github.com/BerriAI/litellm/pull/26216) **Litellm oss staging 04 21 2026** — _by @krrish-berri-2, updated 2026-04-24T05:29:09Z_
- [#24986](https://github.com/BerriAI/litellm/pull/24986) **fix(mcp): preserve non-MCP tools in semantic filter** — _by @klhq, updated 2026-04-24T05:21:32Z_
- [#26362](https://github.com/BerriAI/litellm/pull/26362) **[Fix] Tests - Proxy: Isolate master_key/prisma_client module globals between tests** — _by @yuneng-berri, updated 2026-04-24T05:11:26Z_
- [#26383](https://github.com/BerriAI/litellm/pull/26383) **fix: prevent Azure output_config leakage** — _by @kime541200, updated 2026-04-24T04:58:20Z_
- [#26386](https://github.com/BerriAI/litellm/pull/26386) **litellm oss branch** — _by @krrish-berri-2, updated 2026-04-24T05:03:26Z_
- [#23586](https://github.com/BerriAI/litellm/pull/23586) **fix: convert datetime to ISO string for PostgreSQL timestamp compatibility** — _by @Jah-yee, updated 2026-04-24T04:47:07Z_
- [#25202](https://github.com/BerriAI/litellm/pull/25202) **fix(bedrock): trigger websearch_interception agentic loop for /chat/completions** — _by @nishchay-veer, updated 2026-04-24T04:23:21Z_
- [#26382](https://github.com/BerriAI/litellm/pull/26382) **Move 'Store Prompts in Spend Logs' toggle to Admin Settings** — _by @ryan-crabbe-berri, updated 2026-04-24T04:06:44Z_
- [#26331](https://github.com/BerriAI/litellm/pull/26331) **feat(openai): add gpt-image-2 to model prices** — _by @Kcstring, updated 2026-04-24T03:59:05Z_
- [#25935](https://github.com/BerriAI/litellm/pull/25935) **fix(anthropic): strip Gemini thought suffix from streaming tool_use id** — _by @Sameerlite, updated 2026-04-24T03:55:33Z_
- [#26076](https://github.com/BerriAI/litellm/pull/26076) **feat(vertex_ai): Model Garden OpenAPI for publisher model ids** — _by @Sameerlite, updated 2026-04-24T03:55:18Z_
- [#26099](https://github.com/BerriAI/litellm/pull/26099) **fix(vertex-ai): reuse anthropic messages config instances** — _by @Sameerlite, updated 2026-04-24T03:52:35Z_
- [#26222](https://github.com/BerriAI/litellm/pull/26222) **fix(anthropic): json response_format + user tools non-streaming** — _by @Sameerlite, updated 2026-04-24T03:50:58Z_
- [#26380](https://github.com/BerriAI/litellm/pull/26380) **feat(deepseek): add DeepSeek V4 Pro and V4 Flash model metadata** — _by @neo1027144-creator, updated 2026-04-24T03:52:33Z_
- [#26221](https://github.com/BerriAI/litellm/pull/26221) **feat(responses): strip custom_tool_call namespace for all providers** — _by @Sameerlite, updated 2026-04-24T03:47:16Z_
- [#26327](https://github.com/BerriAI/litellm/pull/26327) **fix(responses): normalize bridged object field** — _by @Sameerlite, updated 2026-04-24T03:42:17Z_
- [#26188](https://github.com/BerriAI/litellm/pull/26188) **build(deps): bump python-dotenv from 1.0.1 to 1.2.2** — _by @dependabot[bot], updated 2026-04-24T03:10:41Z_
- [#26360](https://github.com/BerriAI/litellm/pull/26360) **feat(guardrails): LLM-as-a-Judge guardrail** — _by @ishaan-berri, updated 2026-04-24T03:09:37Z_
- [#26377](https://github.com/BerriAI/litellm/pull/26377) **fix(team_endpoints): auto-add SSO team members to org on move (proxy admin only)** — _by @ishaan-berri, updated 2026-04-24T03:05:58Z_
- [#26202](https://github.com/BerriAI/litellm/pull/26202) **[WIP] Litellm token verification query opt** — _by @harish-berri, updated 2026-04-24T01:50:49Z_
- [#26279](https://github.com/BerriAI/litellm/pull/26279) **fix(auth): centralize common_checks to close authorization bypass** — _by @stuxf, updated 2026-04-24T01:06:27Z_
- [#26374](https://github.com/BerriAI/litellm/pull/26374) _(draft)_ **[WIP] fix(mcp): do not prefix tool names when listing via scoped /mcp/{server_name} endpoint for stdio servers (#22670)** — _by @mateo-berri, updated 2026-04-24T00:47:14Z_
- [#25534](https://github.com/BerriAI/litellm/pull/25534) **chore(deps): bump pypdf from 6.9.2 to 6.10.0** — _by @dependabot[bot], updated 2026-04-24T00:42:19Z_
- [#26365](https://github.com/BerriAI/litellm/pull/26365) **chore(deps): bump vulnerable dependencies** — _by @stuxf, updated 2026-04-24T00:41:12Z_
- [#26373](https://github.com/BerriAI/litellm/pull/26373) _(draft)_ **[WIP] fix(azure): propagate llm_provider- response headers on Responses API (#15232)** — _by @mateo-berri, updated 2026-04-24T00:37:57Z_
- [#26372](https://github.com/BerriAI/litellm/pull/26372) _(draft)_ **[WIP] test: regression test for completion_tokens_details on Responses API usage (#15377)** — _by @mateo-berri, updated 2026-04-24T00:35:59Z_
- [#25662](https://github.com/BerriAI/litellm/pull/25662) **build(deps): bump aiohttp from 3.13.3 to 3.13.4** — _by @dependabot[bot], updated 2026-04-24T00:35:01Z_
- [#26371](https://github.com/BerriAI/litellm/pull/26371) **feat: add Telnyx as OpenAI-compatible provider** — _by @gbattistel, updated 2026-04-24T00:23:33Z_
- [#25177](https://github.com/BerriAI/litellm/pull/25177) **feat(oci): official OCI Generative AI integration — production-ready chat, embeddings & tool use across all model families** — _by @fede-kamel, updated 2026-04-24T00:21:39Z_
- [#19669](https://github.com/BerriAI/litellm/pull/19669) **Fix verbosity parameter** — _by @ahmetzahitak, updated 2026-04-24T00:13:07Z_
- [#19674](https://github.com/BerriAI/litellm/pull/19674) **Add pricing for some OpenRouter provided OpenAI models (gpt-4o-mini, …** — _by @anelosima, updated 2026-04-24T00:13:05Z_
- [#26369](https://github.com/BerriAI/litellm/pull/26369) **chore(packaging): declare MIT license in litellm-proxy-extras metadata** — _by @stuxf, updated 2026-04-24T00:01:18Z_
- [#26366](https://github.com/BerriAI/litellm/pull/26366) **docs: move enterprise page** — _by @mubashir1osmani, updated 2026-04-23T23:45:17Z_
- [#26294](https://github.com/BerriAI/litellm/pull/26294) **[WIP] Add flags that remove unneeded imports** — _by @Michael-RZ-Berri, updated 2026-04-23T23:30:27Z_
- [#26351](https://github.com/BerriAI/litellm/pull/26351) **fix(proxy): respect object-level permissions for managed vector store endpoints** — _by @shivamrawat1, updated 2026-04-23T23:26:31Z_
- [#26364](https://github.com/BerriAI/litellm/pull/26364) **docs: fix duplicate prisma generate step and typo in backend dev setup** — _by @mervivian, updated 2026-04-23T23:22:39Z_
- [#26338](https://github.com/BerriAI/litellm/pull/26338) **feat(mcp): resolve team/key MCP permissions by name or alias** — _by @ryan-crabbe-berri, updated 2026-04-23T23:16:44Z_
- [#26361](https://github.com/BerriAI/litellm/pull/26361) **feat: add azure/gpt-5.5 to model cost map (mirror openai gpt-5.5 pricing)** — _by @mateo-berri, updated 2026-04-23T22:35:53Z_
- [#25964](https://github.com/BerriAI/litellm/pull/25964) **fix: degrade gracefully when RedisSemanticCache init fails instead of crashing proxy** — _by @VANDRANKI, updated 2026-04-23T21:49:52Z_
- [#26354](https://github.com/BerriAI/litellm/pull/26354) **fix: remove duplicate typing import and apply three bug fixes** — _by @Jah-yee, updated 2026-04-23T21:44:57Z_
- [#26341](https://github.com/BerriAI/litellm/pull/26341) **docs: add NoPII compatible-endpoint provider page** — _by @evdevlead, updated 2026-04-23T20:29:14Z_
- [#26262](https://github.com/BerriAI/litellm/pull/26262) **fix(proxy): invoke post-call guardrails on pass-through endpoint responses (#20270)** — _by @tuhinspatra, updated 2026-04-23T20:12:56Z_
- [#26263](https://github.com/BerriAI/litellm/pull/26263) **Fix: Key/Team router_settings routing_strategy not applied on requests** — _by @hiimluck3r, updated 2026-04-23T19:50:50Z_
- [#26210](https://github.com/BerriAI/litellm/pull/26210) **[WIP] - Update dev_config.yaml and Helm chart dependencies for performance-eks** — _by @harish-berri, updated 2026-04-23T19:47:06Z_
- [#25520](https://github.com/BerriAI/litellm/pull/25520) **fix(together_ai): support reasoning_effort for gpt-oss models** — _by @jeanibarz, updated 2026-04-23T19:33:52Z_
- [#25454](https://github.com/BerriAI/litellm/pull/25454) **fix(router): use correct metadata key in run_async_fallback for Responses API** — _by @jeanibarz, updated 2026-04-23T19:32:14Z_
- [#26344](https://github.com/BerriAI/litellm/pull/26344) **fix(azure_ai): map max_completion_tokens to max_tokens for Model Inference endpoint** — _by @jeanibarz, updated 2026-04-23T19:23:26Z_
- [#25923](https://github.com/BerriAI/litellm/pull/25923) **feat(chatgpt, github_<REDACTED>): OAuth sign-in + token refresh in proxy UI** — _by @jmcook, updated 2026-04-23T19:07:38Z_
- [#26278](https://github.com/BerriAI/litellm/pull/26278) **[Fix] Extend request body param controls to cover cloud provider identity fields** — _by @yuneng-berri, updated 2026-04-23T19:02:50Z_


## Closed PRs (not merged)

- [#26206](https://github.com/BerriAI/litellm/pull/26206) **chore: internal aggregate research (closed)** — _by @EaCognitive, closed 2026-04-22T23:20:59Z_
- [#26089](https://github.com/BerriAI/litellm/pull/26089) **fix(proxy): paginate reset_budget_windows scans** — _by @jibanez-staticduo, closed 2026-04-24T05:03:19Z_
- [#26085](https://github.com/BerriAI/litellm/pull/26085) **fix(proxy): avoid invalid Prisma JsonFilter in reset_budget_windows** — _by @jibanez-staticduo, closed 2026-04-24T05:03:07Z_
- [#26384](https://github.com/BerriAI/litellm/pull/26384) **fix: three bugs in litellm/constants.py** — _by @Jah-yee, closed 2026-04-24T04:45:09Z_
- [#26350](https://github.com/BerriAI/litellm/pull/26350) **fix: three bugs in litellm/constants.py** — _by @Jah-yee, closed 2026-04-24T04:44:19Z_
- [#5068](https://github.com/BerriAI/litellm/pull/5068) **fix: PII output parsing for multiple entities of same type** — _by @kaiwend, closed 2025-07-30T00:04:06Z_
- [#26368](https://github.com/BerriAI/litellm/pull/26368) **fix(team_endpoints): auto-add SSO team members to org on move (proxy admin only)** — _by @ishaan-berri, closed 2026-04-24T01:34:49Z_
- [#25123](https://github.com/BerriAI/litellm/pull/25123) **security: move Gemini API keys from URL to header (v1.81.3 backport)** — _by @stuxf, closed 2026-04-24T00:59:49Z_
- [#24844](https://github.com/BerriAI/litellm/pull/24844) **chore: pin Docker base images to SHA256 digests** — _by @stuxf, closed 2026-04-24T00:59:47Z_
- [#18277](https://github.com/BerriAI/litellm/pull/18277) **[Fix] vertex credentials being logged** — _by @shivamrawat1, closed 2026-04-24T00:13:47Z_
- [#18356](https://github.com/BerriAI/litellm/pull/18356) **[Bug] add auth to unsecured routes in debug utils** — _by @shivamrawat1, closed 2026-04-24T00:13:45Z_
- [#19197](https://github.com/BerriAI/litellm/pull/19197) **Default alerting parameters from config** — _by @danielnyari-seon, closed 2026-04-24T00:13:35Z_
- [#26363](https://github.com/BerriAI/litellm/pull/26363) **fix(team_endpoints): auto-add team members to org when moving team to org (SSO/Entra fix)** — _by @ishaan-berri, closed 2026-04-23T23:56:01Z_
- [#26269](https://github.com/BerriAI/litellm/pull/26269) **Fix bedrock claude 4.6 effort** — _by @jtsaw, closed 2026-04-23T19:01:29Z_
- [#26358](https://github.com/BerriAI/litellm/pull/26358) **feat: add azure/gpt-5.5 to model cost map (mirror openai gpt-5.5 pricing)** — _by @mateo-berri, closed 2026-04-23T22:28:11Z_
- [#26357](https://github.com/BerriAI/litellm/pull/26357) **feat(guardrails): LLM-as-a-Judge guardrail (replaces standalone evals)** — _by @ishaan-berri, closed 2026-04-23T22:19:02Z_
- [#26353](https://github.com/BerriAI/litellm/pull/26353) **feat: add Telnyx as OpenAI-compatible provider** — _by @gbattistel, closed 2026-04-23T21:45:44Z_
- [#26347](https://github.com/BerriAI/litellm/pull/26347) **fix: three bugs in litellm/constants.py** — _by @Jah-yee, closed 2026-04-23T21:22:02Z_
- [#26352](https://github.com/BerriAI/litellm/pull/26352) **feat: add Telnyx as OpenAI-compatible provider** — _by @gbattistel, closed 2026-04-23T21:32:07Z_
- [#26123](https://github.com/BerriAI/litellm/pull/26123) **fix: merge server_side_tool_invocations by id in stream_chunk_builder** — _by @nileshpatil6, closed 2026-04-20T19:26:20Z_


## Notable Issues

- [#26399](https://github.com/BerriAI/litellm/issues/26399) **[Bug]: Bedrock passthrough routes bypass key.models / user.models access control** _[llm translation, claude code]_ — _by @netblack_
- [#26398](https://github.com/BerriAI/litellm/issues/26398) **[Bug]: API Error: "400 String should have at most 64 characters" when calling MCP Tool** _[bug, proxy, claude code]_ — _by @ron-zhong_
- [#24212](https://github.com/BerriAI/litellm/issues/24212) **[Bug]: gpt-realtime-1.5 ( OpenAI)** _[bug, proxy, llm translation]_ — _by @superpoussin22_
- [#22747](https://github.com/BerriAI/litellm/issues/22747) **azure_api_type: responses uses aiohttp transport which has ~60s socket idle timeout, ignoring timeout parameter -GPT-5-PRO** _[llm translation]_ — _by @harshadchha_
- [#26232](https://github.com/BerriAI/litellm/issues/26232) **[Bug]: support gpt-image-2** _[bug, proxy, llm translation]_ — _by @superpoussin22_
- [#16923](https://github.com/BerriAI/litellm/issues/16923) **[Bug]: False alert raised** _[bug, stale]_ — _by @javiergarciapleo_ _(closed 2026-04-14T00:12:45Z)_
- [#26396](https://github.com/BerriAI/litellm/issues/26396) **[Bug]: verbose_logger level not set when LITELLM_LOG=INFO, causing INFO logs to be suppressed** _[bug]_ — _by @yuansheng-wzw_
- [#26395](https://github.com/BerriAI/litellm/issues/26395) **[Bug]: DeepSeek V4 Pro (deepseek-v4-pro) fails in multi-turn conversations - reasoning_content stripped from assistant messages** _[llm translation]_ — _by @anjun_
- [#26392](https://github.com/BerriAI/litellm/issues/26392) **[Feature]:  Add experimental_guardrail_input_roles to BedrockGuardrail to filter messages by role before INPUT validation** _[enhancement, proxy, llm translation]_ — _by @orolega_
- [#26389](https://github.com/BerriAI/litellm/issues/26389) **[Bug]: WebSearch Interception follow-up request ignores custom `api_base` / `api_key`, causing 401 and deployment cooldown cascade** _[bug, proxy, llm translation]_ — _by @jesset_
- [#26387](https://github.com/BerriAI/litellm/issues/26387) **[Bug]: BedrockGuardrail streaming hook drops HTTPException after HTTP 200, producing broken SSE stream** _[bug, proxy, llm translation]_ — _by @orolega_
- [#25191](https://github.com/BerriAI/litellm/issues/25191) **[Bug]: websearch_interception agentic loop not triggered for Bedrock via /chat/completions** _[bug]_ — _by @dtometzki_
- [#26378](https://github.com/BerriAI/litellm/issues/26378) **[Bug]: Team member rpm limit is not enforced** _[bug, proxy]_ — _by @LeeTeng2001_
- [#19174](https://github.com/BerriAI/litellm/issues/19174) **[Bug]: Embedding busted on 1.80.11** _[bug, proxy]_ — _by @frenzybiscuit_ _(closed 2026-01-30T11:31:58Z)_
- [#22821](https://github.com/BerriAI/litellm/issues/22821) **[Bug] Presidio guardrail: end-to-end PII masking broken with Anthropic native API** _[llm translation, claude code]_ — _by @firestaerter3_
- [#6247](https://github.com/BerriAI/litellm/issues/6247) **[Bug]: Problems with output parsing in presidio guardrail** _[bug, stale]_ — _by @taimans-git_ _(closed 2025-06-04T00:02:05Z)_
- [#26376](https://github.com/BerriAI/litellm/issues/26376) **[Bug]: langfuse_otel callback drops OTEL spans under asyncio.gather() concurrency** — _by @shuttlesworthNEO_
- [#26339](https://github.com/BerriAI/litellm/issues/26339) **gpt 5.5 support?** — _by @cktang88_
- [#23637](https://github.com/BerriAI/litellm/issues/23637) **[Bug]: update the 1M context standard price for Vertex AI claude opus 4.6 and sonnet 4.6** _[bug, llm translation]_ — _by @sridharc-ntap_ _(closed 2026-04-24T00:45:37Z)_
- [#26333](https://github.com/BerriAI/litellm/issues/26333) **[Bug]: Security issue CVE-2026-28684 on python-dotenv cannot be fixed due to pinned versions** _[bug, SDK]_ — _by @bhadrim_
- [#10595](https://github.com/BerriAI/litellm/issues/10595) **[Bug]: Prometheus metrics aren't shared across Uvicorn workers** _[bug, mlops user request, stale]_ — _by @Penagwin_
- [#13961](https://github.com/BerriAI/litellm/issues/13961) **[Bug]: send_invite_email setting is ignored during user creation** _[bug, stale]_ — _by @JonasDev1_ _(closed 2026-04-24T00:13:59Z)_
- [#14067](https://github.com/BerriAI/litellm/issues/14067) **Issue with model function calling** _[llm translation, stale]_ — _by @AimoreRRD_
- [#19001](https://github.com/BerriAI/litellm/issues/19001) **[Bug]: /v1/rag/query endpoint throws 'Router is not JSON serializable' error** _[llm translation, stale]_ — _by @jctux_
- [#19014](https://github.com/BerriAI/litellm/issues/19014) **<REDACTED-vendor> Foundry Project Endpoint** _[stale]_ — _by @gfish213-tech_
- [#19194](https://github.com/BerriAI/litellm/issues/19194) **[Bug] Data Protection Issue: Endpoint /user/daily/activity** _[bug, proxy, stale]_ — _by @chandra-potula_ _(closed 2026-04-24T00:13:36Z)_
- [#19499](https://github.com/BerriAI/litellm/issues/19499) **[Bug]: Prompt Injection Detection Issues** _[bug, proxy]_ — _by @ianmuge_
- [#19626](https://github.com/BerriAI/litellm/issues/19626) **[Bug]: Missing wget in Docker container results in LiteLLM container healthcheck to fail** _[bug, stale]_ — _by @roxlukas_
- [#19630](https://github.com/BerriAI/litellm/issues/19630) **[Feature]: Allow teams to manage their own guardrails via JWT tokens** _[enhancement, proxy, stale]_ — _by @shivamrawat1_
- [#19633](https://github.com/BerriAI/litellm/issues/19633) **[Bug]: use_in_pass_through does not apply per model, but by project + location (vertex_ai)** _[bug, proxy, llm translation, stale]_ — _by @stronk7_
- [#19637](https://github.com/BerriAI/litellm/issues/19637) **[Bug]: Content filter guardrails not working.** _[bug, stale]_ — _by @shivamrawat1_
- [#19641](https://github.com/BerriAI/litellm/issues/19641) **[Bug]: Content categories not visible in the UI after creation** _[bug, stale]_ — _by @shivamrawat1_
- [#19651](https://github.com/BerriAI/litellm/issues/19651) **[Bug]: Custom SSO Handler does not get called anymore** _[bug, stale, ui-dashboard]_ — _by @metalshanked_


## Commits on `litellm_internal_staging`

- [`0992bf2`](https://github.com/BerriAI/litellm/commit/0992bf22715cb6aaee8f10b8c8a03bf2f5c4cd17) Merge pull request #26367 from BerriAI/litellm_/split-mcp-routes-management-vs-inference — _@ryan-crabbe-berri_
- [`8e652d1`](https://github.com/BerriAI/litellm/commit/8e652d129d6a3536359212e4f0c41319638234ad) Merge pull request #26356 from BerriAI/litellm_cci_gha_dedup_and_shard — _@shin-berri_
- [`654b688`](https://github.com/BerriAI/litellm/commit/654b688c8f6cdeac2020308fd2fa3f669def7e5b) Merge pull request #25746 from BerriAI/litellm_vector-store-team-byok-model-none — _@yuneng-berri_
- [`e982fe8`](https://github.com/BerriAI/litellm/commit/e982fe85e93056d9b4597b236c36c715581d9b68) Merge branch 'litellm_internal_staging' into litellm_vector-store-team-byok-model-none — _@shivamrawat1_
- [`35eef7d`](https://github.com/BerriAI/litellm/commit/35eef7d92ca244cfa9329d8083da36d9c108945f) chore: apply black formatting to _types.py management_routes block — _@ryan-crabbe-berri_
- [`812044a`](https://github.com/BerriAI/litellm/commit/812044a80505f3eb1d8f5d3a5fa8f14efa1276cc) rerun tests — _@shivamrawat1_
- [`b217ad4`](https://github.com/BerriAI/litellm/commit/b217ad44d315cfa046569addac5bf729011f0a98) rerun tests — _@shivamrawat1_
- [`1f6ce45`](https://github.com/BerriAI/litellm/commit/1f6ce457028f067f237e467dff2fc916ff55278b) Merge pull request #26370 from BerriAI/litellm_version_bump — _@yuneng-berri_
- [`08cc1e6`](https://github.com/BerriAI/litellm/commit/08cc1e66cfaa9c5ec5edceeebd89c73419047d83) Merge pull request #26207 from BerriAI/litellm_team_member_total_spend_frontend — _@yuneng-berri_
- [`6b6b8c7`](https://github.com/BerriAI/litellm/commit/6b6b8c74186569c6c2b40b92a3a9db861c7745f0) restore budget_reset_at on TeamMembership type — _@ryan-crabbe-berri_
- [`fbaedc3`](https://github.com/BerriAI/litellm/commit/fbaedc36dcdd72fca9ac2379f53fa015d394b000) revert TeamInfo budget reset display changes — _@ryan-crabbe-berri_
- [`ffaeff5`](https://github.com/BerriAI/litellm/commit/ffaeff54cd8ad8eaf54c797a5af1c456707e6861) add uv — _@yuneng-berri_
- [`29e30d9`](https://github.com/BerriAI/litellm/commit/29e30d9ddbfbc276b11e23965f9836ecfb7917d0) bump: version 1.83.12 → 1.83.13 — _@yuneng-berri_
- [`4d2acaf`](https://github.com/BerriAI/litellm/commit/4d2acafa43cdb94d07c01fbb1d61b11a076f9dd1) Split MCP routes into inference vs management categories — _@ryan-crabbe-berri_
- [`ea626d9`](https://github.com/BerriAI/litellm/commit/ea626d9fb86c01c3a4aa80fbec810f3d54ed9a9d) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_team_member_total_spend_frontend — _@ryan-crabbe-berri_
- [`87e120d`](https://github.com/BerriAI/litellm/commit/87e120d9589ce3697fefd7520e3e893716a21173) Merge pull request #26346 from BerriAI/litellm_reset_budget_is_not_null — _@yuneng-berri_
- [`66bf890`](https://github.com/BerriAI/litellm/commit/66bf890226e56d14549c43757833b5fd808f28bf) [Infra] Stop attaching push-only postgres workflows to a GHA environment — _@yuneng-berri_
- [`21e08b0`](https://github.com/BerriAI/litellm/commit/21e08b0bb52af44046cce546c4e4a4a86810e375) [Infra] Run schema-migration shard serially (workers: 0) — _@yuneng-berri_
- [`2001d91`](https://github.com/BerriAI/litellm/commit/2001d91b279a64f628320b1fcbdb9f099a6891e4) fix(mcp): share temporary MCP OAuth sessions across instances via Redis (#26162) (#26318) — _@milan-berri_
- [`7c69262`](https://github.com/BerriAI/litellm/commit/7c69262279a44bdcd0d18e9b34a7dd4199741eca) Merge pull request #26349 from BerriAI/litellm_deflakeSpendTests — _@shin-berri_
- [`bb94144`](https://github.com/BerriAI/litellm/commit/bb94144111d429a5f3a01f5b5d09e11ac8882728) Merge pull request #26359 from BerriAI/litellm_fixCreateReleasePerms — _@shin-berri_
- [`b6d0f6b`](https://github.com/BerriAI/litellm/commit/b6d0f6b649bcc36074abb32e59f77d7db84a2511) fix(vertex_ai): use aiplatform.{geo}.rep.googleapis.com for multi-region locations (#26281) — _@milan-berri_
- [`1f6e018`](https://github.com/BerriAI/litellm/commit/1f6e01802de8a9485c5cc9965259865391ec4caf) Show absolute date in Budget Reset column — _@ryan-crabbe-berri_
- [`5df9f39`](https://github.com/BerriAI/litellm/commit/5df9f397e6d97c0f523f12104ef5e4ec901dafef) [Infra] Match xdist workers to runner cores; revert test_proxy_utils -k split — _@yuneng-berri_
- [`9bdd447`](https://github.com/BerriAI/litellm/commit/9bdd4478912f82151e2eb665c1984b17c36148fb) Merge pull request #26355 from BerriAI/litellm_fixFlakyTpmRoutingTest — _@yuneng-berri_
- [`584a7cd`](https://github.com/BerriAI/litellm/commit/584a7cd40fc6e7250df06aaa6c415d10d5329a96) [Infra] Clean up proxy-db matrix job display names — _@yuneng-berri_
- [`e0201ec`](https://github.com/BerriAI/litellm/commit/e0201ece1ed854eb317b88620938a0db63e75ac3) [Infra] Split slow proxy-db shards to hit 7m wall-clock target — _@yuneng-berri_
- [`4a2deae`](https://github.com/BerriAI/litellm/commit/4a2deae92c761af4943ab97780c174ab2dd2e68c) [Fix] Infra: grant contents:write to create-release-branch caller job — _@yuneng-berri_
- [`c14a73f`](https://github.com/BerriAI/litellm/commit/c14a73fa59138eaf86c268c1b1879f57d9c7689c) fix: make LoggingWorker.flush() wait for in-flight callbacks — _@yuneng-berri_
- [`32c390a`](https://github.com/BerriAI/litellm/commit/32c390a0f6afd3acc85aed4492aa154d6a2d401d) fix(tests): restore proxy_server.master_key in realtime fixture; add shard-coverage guard — _@yuneng-berri_
- [`c81342e`](https://github.com/BerriAI/litellm/commit/c81342e3c2f787d852925879489a95ee0c440642) Merge pull request #26204 from BerriAI/litellm_budgetLimitFix — _@Michael-RZ-Berri_
- [`c2f40e8`](https://github.com/BerriAI/litellm/commit/c2f40e89d52346cb3edda4a11adc99eb1541dd07) [Infra] Remove CCI/GHA test duplication and semantically shard proxy DB tests — _@yuneng-berri_
- [`c4ea0e9`](https://github.com/BerriAI/litellm/commit/c4ea0e93c80772d1615e36eb1052b2179465885f) fix: drain logging worker in test_router_caching_ttl to remove flake — _@yuneng-berri_
- [`4af2b67`](https://github.com/BerriAI/litellm/commit/4af2b6735740b703563e78e8651d86149d0956de) [Fix] Drop orphan teardown step from Greptile merge — _@yuneng-berri_
- [`8adb3a6`](https://github.com/BerriAI/litellm/commit/8adb3a6a8ff6bbd727e4d69fc588c3fa68862a61) Apply suggestion from @greptile-apps[bot] — _@yuneng-berri_
- [`9cd1f6a`](https://github.com/BerriAI/litellm/commit/9cd1f6a5992ffc0c62560c572841be51bfb79b8a) Merge pull request #26342 from BerriAI/litellm_create_release_branch_gha — _@shin-berri_
- [`e37d1b0`](https://github.com/BerriAI/litellm/commit/e37d1b0cb63d1a5d7f23918efa4e64c9e93a9166) [Fix] Deflake spend tracking tests — _@yuneng-berri_
- [`3950f5e`](https://github.com/BerriAI/litellm/commit/3950f5ea72ffd176779e5929af138290cc4b7914) feat: add gpt-5.5 to model cost map (#26345) — _@mateo-berri_
- [`c41567e`](https://github.com/BerriAI/litellm/commit/c41567eaa0caaffc6070b2806adc6369b61fe017) fix(budget_reset): use raw SQL for IS NOT NULL filter on Json? columns — _@yuneng-berri_
- [`46336b1`](https://github.com/BerriAI/litellm/commit/46336b1ac34c75292982e787839a0ae8c19e86fc) fix linting — _@Michael Riad Zaky_
- [`2bfbb14`](https://github.com/BerriAI/litellm/commit/2bfbb142b75156cebf61cdf32d8cd9753950c63b) Merge pull request #26336 from BerriAI/litellm_yj_apr22 — _@yuneng-berri_
- [`daf29d6`](https://github.com/BerriAI/litellm/commit/daf29d6a4ad3c7ae1b42c27ee08deb2f6c891a4e) [Infra] Add standalone create-release-branch workflow — _@yuneng-berri_
- [`994e351`](https://github.com/BerriAI/litellm/commit/994e35135dc53badf26455e12d04d87981bc3561) fix: correct image size limit enforcement and vertex_location None passthrough — _@yuneng-berri_
- [`7ebe7cc`](https://github.com/BerriAI/litellm/commit/7ebe7cc99bd0832a16223514e6ac0130169b9231) Merge pull request #26293 from BerriAI/litellm_img_edit_file_input_validation — _@yuneng-berri_
- [`da3b715`](https://github.com/BerriAI/litellm/commit/da3b715c36c4c24e62543246400032d157d5790f) Merge pull request #26286 from BerriAI/litellm_/unify_uv_cache — _@shin-berri_
- [`d5449f5`](https://github.com/BerriAI/litellm/commit/d5449f5b1a7b862b76c4a79754d49f145acca92c) Merge pull request #26300 from BerriAI/litellm_oss_staging_04_22_2026 — _@Sameerlite_
- [`2d1cc68`](https://github.com/BerriAI/litellm/commit/2d1cc68e228cc43264d6e7e21a7f5ffc855ebf5f) fix(dashscope): fail fast on image generation API errors — _@Sameerlite_
- [`2e3a4bb`](https://github.com/BerriAI/litellm/commit/2e3a4bb27a27f875f303b8b66abd26dfad86c155) Fix black — _@Sameerlite_
- [`e3440ba`](https://github.com/BerriAI/litellm/commit/e3440baa0c8bc15b7f79e469e654f4d17b476a1e) Merge pull request #25767 from vinhphamhuu-ct/main — _@Sameerlite_
- [`1385d46`](https://github.com/BerriAI/litellm/commit/1385d46e9974a7ac59843421682268bacde06918) FIx mypy issues — _@Sameerlite_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (deterministic template; no LLM for this run)._
