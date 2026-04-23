# BerriAI/litellm — 2026-04-21

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-20T23:59:59.000Z → 2026-04-21T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is an **opt-in v2 Prisma migration resolver** for the proxy ([#26194](https://github.com/BerriAI/litellm/pull/26194)), addressing schema thrashing during rolling deploys where `ProxyExtrasDBManager._resolve_all_migrations` was unconditionally diffing live DB against shipped `schema.prisma` and bypassing per-migration SQL. Default behavior is unchanged; users opt in via `--use_v2_migration_resolver`. Paired with [#26185](https://github.com/BerriAI/litellm/pull/26185), which adds freshness and destructive-statement guards to `ci_cd/run_migration.py` after a previous incident merged a stale-branch-generated `DROP COLUMN`. Both worth reading if you operate the proxy against a shared DB.

**New model / provider support:**
- Bedrock `bedrock-mantle` endpoint serving Claude Mythos Preview via Anthropic Messages API ([#26196](https://github.com/BerriAI/litellm/pull/26196)).
- Bedrock Invoke pass-through hardened: allowlist body fields and filter all `anthropic-beta` values, fixing 400s from Claude Code sending `context_management` ([#26148](https://github.com/BerriAI/litellm/pull/26148)).
- Scaleway audio support merged ([#26110](https://github.com/BerriAI/litellm/pull/26110)).

**Correctness / budgets:**
- User and org budget checks now read from atomic Redis counters (`spend:user:{id}`, `spend:org:{id}`) rather than stale DB fields, and use `>=` consistently with key budget enforcement ([#26182](https://github.com/BerriAI/litellm/pull/26182)).
- Pass-through endpoints now propagate `x-litellm-spend-logs-metadata` — previously always `None` for `call_type=pass_through_endpoint` ([#26120](https://github.com/BerriAI/litellm/pull/26120)).
- `litellm_call_id` added to `StandardLoggingPayload` and OTel spans ([#26133](https://github.com/BerriAI/litellm/pull/26133)).
- Prompt Security guardrail: preserve original message roles and prevent `other` role leaking into provider payloads ([#25895](https://github.com/BerriAI/litellm/pull/25895)).
- MCP broker OAuth endpoints (`mcp_authorize`, `mcp_token`) now require bearer auth and validate `redirect_uri` scheme ([#26142](https://github.com/BerriAI/litellm/pull/26142)).

**Infra:** Proxy unit tests sped up by replacing per-test `importlib.reload(litellm)` with a state snapshot, and `test_proxy_utils.py` split into its own matrix entry to unblock the 30-minute job cap ([#26150](https://github.com/BerriAI/litellm/pull/26150)). `Dockerfile.non_root` build streamlined ([#26055](https://github.com/BerriAI/litellm/pull/26055)). E2E UI testing was confirmed to have been running a stale bundle from 2026-04-08 through 2026-04-18 due to `cp -r` merge semantics — now fixed ([#26047](https://github.com/BerriAI/litellm/pull/26047)).

Notable open PR: O(n²) `json.loads` fix in streaming accumulators for Vertex/Anthropic/SageMaker ([#26187](https://github.com/BerriAI/litellm/pull/26187)). No releases or issues in the window.

## Releases

_None in window._


## Merged PRs

- [#26194](https://github.com/BerriAI/litellm/pull/26194) **[Feature] Proxy: opt-in v2 migration resolver** — _by @yuneng-berri, merged 2026-04-21T23:55:55Z_
- [#26197](https://github.com/BerriAI/litellm/pull/26197) **[Infra] Merge dev branch** — _by @yuneng-berri, merged 2026-04-21T23:55:00Z_
- [#26196](https://github.com/BerriAI/litellm/pull/26196) **feat(bedrock): add support for bedrock-mantle endpoint (Claude Mythos Preview)** — _by @ishaan-berri, merged 2026-04-21T22:41:58Z_
- [#26133](https://github.com/BerriAI/litellm/pull/26133) **fix(logging): add litellm_call_id to StandardLoggingPayload and OTel span** — _by @ishaan-berri, merged 2026-04-21T22:24:33Z_
- [#26185](https://github.com/BerriAI/litellm/pull/26185) **[Infra] Add freshness and destructive guards to migration workflow** — _by @yuneng-berri, merged 2026-04-21T21:42:18Z_
- [#26148](https://github.com/BerriAI/litellm/pull/26148) **fix(bedrock): allowlist Bedrock Invoke body fields and filter all anthropic-beta values** — _by @mateo-berri, merged 2026-04-21T20:22:51Z_
- [#26150](https://github.com/BerriAI/litellm/pull/26150) **[Infra] CI: speed up proxy unit tests and split proxy-utils into its own matrix entry** — _by @yuneng-berri, merged 2026-04-21T19:58:23Z_
- [#25854](https://github.com/BerriAI/litellm/pull/25854) **fix(proxy): Bedrock guardrail spend logs - hook mode, match redaction, streaming request_data** — _by @milan-berri, merged 2026-04-21T19:49:08Z_
- [#26182](https://github.com/BerriAI/litellm/pull/26182) **[Fix] Align user and org budget spend checks with atomic counter pattern** — _by @yuneng-berri, merged 2026-04-21T18:46:26Z_
- [#26047](https://github.com/BerriAI/litellm/pull/26047) **[Fix] CI: e2e_ui_testing tests stale bundle on Ubuntu (cp -r merge semantics)** — _by @yuneng-berri, merged 2026-04-21T17:42:33Z_
- [#25895](https://github.com/BerriAI/litellm/pull/25895) **Fix Prompt Security redaction persistence and role writeback** — _by @davida-ps, merged 2026-04-21T14:08:20Z_
- [#10643](https://github.com/BerriAI/litellm/pull/10643) **Team and Key Object Permission table for MCP Servers** — _by @wagnerjt, merged 2025-05-08T01:47:33Z_
- [#26110](https://github.com/BerriAI/litellm/pull/26110) **Feature/add audio support for scaleway** — _by @nhyy244, merged 2026-04-20T21:49:42Z_
- [#26120](https://github.com/BerriAI/litellm/pull/26120) **fix(pass-through): propagate x-litellm-spend-logs-metadata header** — _by @dawidlazinski, merged 2026-04-21T04:02:55Z_
- [#26145](https://github.com/BerriAI/litellm/pull/26145) **merge main** — _by @Sameerlite, merged 2026-04-21T02:49:28Z_
- [#26142](https://github.com/BerriAI/litellm/pull/26142) **[Fix] MCP broker OAuth endpoint access controls** — _by @yuneng-berri, merged 2026-04-21T00:46:59Z_
- [#26055](https://github.com/BerriAI/litellm/pull/26055) **[Infra] Streamline Dockerfile.non_root build time** — _by @yuneng-berri, merged 2026-04-21T00:35:51Z_


## Open PRs (new or updated)

- [#25996](https://github.com/BerriAI/litellm/pull/25996) **Fix bugs that bypass per-team-member budget limit** — _by @MichaelRZ, updated 2026-04-21T23:52:06Z_
- [#26202](https://github.com/BerriAI/litellm/pull/26202) **[WIP] Litellm token verification query opt** — _by @harish-berri, updated 2026-04-21T23:41:03Z_
- [#26198](https://github.com/BerriAI/litellm/pull/26198) **[Fix] Resolve mypy type error and recursive function detector CI failures** — _by @yuneng-berri, updated 2026-04-21T22:55:35Z_
- [#26189](https://github.com/BerriAI/litellm/pull/26189) **fix(xai): register grok-imagine-image for image generation** — _by @iamujjwalsinha, updated 2026-04-21T20:38:24Z_
- [#26187](https://github.com/BerriAI/litellm/pull/26187) **perf(streaming): eliminate O(n²) json.loads in accumulated-JSON paths (Vertex, Anthropic, SageMaker)** — _by @Anai-Guo, updated 2026-04-21T19:37:52Z_
- [#25278](https://github.com/BerriAI/litellm/pull/25278) **fix(copilot): correct X-Initiator header so only the first turn of multi-turn agentic workflows consumes a premium request** — _by @jtstothard, updated 2026-04-21T16:11:42Z_
- [#26178](https://github.com/BerriAI/litellm/pull/26178) **fix: coerce server_tool_use dict to ServerToolUse in stream_chunk_builder** — _by @VANDRANKI, updated 2026-04-21T15:54:09Z_
- [#26146](https://github.com/BerriAI/litellm/pull/26146) **fix(vertex passthrough): log :embedContent and :batchEmbedContents responses** — _by @ishaan-berri, updated 2026-04-21T15:39:04Z_
- [#23742](https://github.com/BerriAI/litellm/pull/23742) **fix(anthropic): strip vector_store_ids from request payload to prevent 400 error** — _by @xykong, updated 2026-04-21T14:35:33Z_
- [#24586](https://github.com/BerriAI/litellm/pull/24586) **fix(proxy_server): remove redundant decryption of already-decrypted env variables** — _by @danielaskdd, updated 2026-04-21T14:32:16Z_
- [#26107](https://github.com/BerriAI/litellm/pull/26107) **fix: web_search tool translation fixes for `/v1/messages` → `/v1/chat/completions` → `/v1/responses` path** — _by @Vigilans, updated 2026-04-21T14:27:37Z_
- [#26088](https://github.com/BerriAI/litellm/pull/26088) **fix(messages): route to Responses API based on model_info.mode** — _by @Vigilans, updated 2026-04-21T14:26:19Z_
- [#26172](https://github.com/BerriAI/litellm/pull/26172) **fix(bedrock): strip client_metadata from additionalModelRequestFields** — _by @FelixLyl, updated 2026-04-21T13:07:11Z_
- [#25414](https://github.com/BerriAI/litellm/pull/25414) **Add deepinfra Qwen/Qwen3.5-397B-A17B model** — _by @mlazzarotto, updated 2026-04-21T12:59:18Z_
- [#26171](https://github.com/BerriAI/litellm/pull/26171) **Fix: ollama provider respects explicit api_base kwarg over global** — _by @aydenious, updated 2026-04-21T12:39:20Z_
- [#25968](https://github.com/BerriAI/litellm/pull/25968) **docs: fixed bedrock prompt caching explanation** — _by @CyrilDesch, updated 2026-04-21T12:04:28Z_
- [#25781](https://github.com/BerriAI/litellm/pull/25781) **fix(guardrails): ContentFilter streaming hook respects event_hook (#25780)** — _by @Benniphx, updated 2026-04-21T09:26:52Z_
- [#26152](https://github.com/BerriAI/litellm/pull/26152) **fix(anthropic): detect invalid thinking signatures from Vertex AI error format** — _by @elvis-cai, updated 2026-04-21T06:30:37Z_
- [#25855](https://github.com/BerriAI/litellm/pull/25855) **fix(bedrock): preserve cache_control TTL on tools for Claude 4.5+** — _by @shubham-arora-clear, updated 2026-04-21T04:24:49Z_
- [#26149](https://github.com/BerriAI/litellm/pull/26149) **fix(pass-through): propagate x-litellm-spend-logs-metadata header (#2…** — _by @ishaan-berri, updated 2026-04-21T04:12:13Z_
- [#25763](https://github.com/BerriAI/litellm/pull/25763) **fix(hosted_vllm): normalize custom tools for chat completions** — _by @Sameerlite, updated 2026-04-21T02:58:45Z_
- [#16488](https://github.com/BerriAI/litellm/pull/16488) **Opik logger upgraded async events support** — _by @yaricom, updated 2026-04-21T00:11:59Z_
- [#19356](https://github.com/BerriAI/litellm/pull/19356) **fix: avoid unknown targets in HPA** — _by @rsicart, updated 2026-04-21T00:11:40Z_
- [#19429](https://github.com/BerriAI/litellm/pull/19429) **Fix: Langfuse OTEL prompt management matching issue (#16976)** — _by @triple4t, updated 2026-04-21T00:11:39Z_
- [#19439](https://github.com/BerriAI/litellm/pull/19439) **Fix duplicate OpenTelemetry traces for aresponses after Gemini calls (#16016)** — _by @triple4t, updated 2026-04-21T00:11:38Z_


## Closed PRs (not merged)

- [#26200](https://github.com/BerriAI/litellm/pull/26200) **add moonshot/kimi-k2.6 to model registry** — _by @ishaan-berri, closed 2026-04-21T23:09:15Z_
- [#26180](https://github.com/BerriAI/litellm/pull/26180) **feat(bedrock): add support for bedrock-mantle endpoint (Claude Mythos Preview)** — _by @ishaan-berri, closed 2026-04-21T22:12:45Z_
- [#23381](https://github.com/BerriAI/litellm/pull/23381) **feat(integrations): add New Relic AI Monitoring integration  ** — _by @bonczj, closed 2026-04-21T14:24:31Z_
- [#25213](https://github.com/BerriAI/litellm/pull/25213) **fix: add missing Dashscope logo asset** — _by @danielaskdd, closed 2026-04-21T14:33:52Z_
- [#26095](https://github.com/BerriAI/litellm/pull/26095) **fix(mcp): resolve client-prefixed MCP tool names in semantic filter** — _by @XyLearningProgramming, closed 2026-04-21T03:21:58Z_
- [#25953](https://github.com/BerriAI/litellm/pull/25953) **docs(readme): preserve hero image aspect ratio** — _by @Chesars, closed 2026-04-21T02:02:48Z_


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`5dc2926`](https://github.com/BerriAI/litellm/commit/5dc2926a1e5fb02c3211edec5a1b9f73f285047a) Merge pull request #26194 from BerriAI/litellm_fix_migration_thrashing — _@yuneng-berri_
- [`93cb065`](https://github.com/BerriAI/litellm/commit/93cb0657d7e65c4c6ea97769e8ba6665ec0fcb3a) Merge pull request #26197 from BerriAI/litellm_yj_apr20 — _@yuneng-berri_
- [`ecd9a83`](https://github.com/BerriAI/litellm/commit/ecd9a83e61d0d1007cb0f5c1b81eca49ace5e62c) fix(adaptive_router): P2 review items — @updatedAt + snapshot samples — _@krrish-berri-2_
- [`c7342bd`](https://github.com/BerriAI/litellm/commit/c7342bdc4fe3b3d7d29713743bed6bbf75f6cf95) Merge branch 'litellm_internal_staging' into litellm_adaptive_routing — _@krrish-berri-2_
- [`220a5ac`](https://github.com/BerriAI/litellm/commit/220a5acbcc98d02d431cd7e43a09aabcef081bbd) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_prismaCacheRuntime — _@yuneng-berri_
- [`8d52b1e`](https://github.com/BerriAI/litellm/commit/8d52b1edd14a440cacda6dc0eeaee37e418d5f17) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_yj_apr20 — _@yuneng-berri_
- [`2b8b950`](https://github.com/BerriAI/litellm/commit/2b8b9502d91af5fa5247f13c0b63b669bb54b329) [Fix] v2 resolver: swallow non-connection DB errors; wrap resolve failures — _@yuneng-berri_
- [`67567d1`](https://github.com/BerriAI/litellm/commit/67567d10f531fa3198ffc421965804ccbee7dee2) Merge branch 'litellm_internal_staging' into litellm_wildcard_order_fallback — _@shivamrawat1_
- [`9a6ddef`](https://github.com/BerriAI/litellm/commit/9a6ddef09fd17659f75cabbba993d7123d6c4a0b) fmt: apply black to _types.py — _@ryan-crabbe-berri_
- [`ce75504`](https://github.com/BerriAI/litellm/commit/ce755048e52077f9690fcb5fc83ecb64efb5df4b) Docker: drop env overrides from builder, COPY /root/.cache to runtime — _@yuneng-berri_
- [`a302613`](https://github.com/BerriAI/litellm/commit/a302613eb5fc9ea7539caafefeb06a23a08c941e) feat(bedrock): add support for bedrock-mantle endpoint (Claude Mythos Preview) (#26196) — _@ishaan-berri_
- [`1a0ac96`](https://github.com/BerriAI/litellm/commit/1a0ac9634cd4bcef0044fc0c6c8aefc870679f7d) Keep budget_reset_at off the user-settable budget allowlist — _@ryan-crabbe-berri_
- [`9049f37`](https://github.com/BerriAI/litellm/commit/9049f3786448e16acbccc8cb5c560c11883c50ea) [Fix] v2 migration resolver: address Greptile review findings — _@yuneng-berri_
- [`731c549`](https://github.com/BerriAI/litellm/commit/731c549876acb95147788e1ee4d397e312ddcb2b) [Fix] Docker: restore pre-uv Prisma cache path for /app/.cache mounts — _@yuneng-berri_
- [`8a4a775`](https://github.com/BerriAI/litellm/commit/8a4a775b1ba9e13353d594005343b612bc7a686b) fix(logging): add litellm_call_id to StandardLoggingPayload and OTel span (#26133) — _@ishaan-berri_
- [`8a9457e`](https://github.com/BerriAI/litellm/commit/8a9457e0c02ad6bd5398871df740316643de3a03) style: apply black to litellm/router.py — _@shivamrawat1_
- [`88b1823`](https://github.com/BerriAI/litellm/commit/88b1823f51128fdc582c411b27fe1d7903bba948) [Test] Fix setup_database call-signature assertions for v2 flag — _@yuneng-berri_
- [`7752683`](https://github.com/BerriAI/litellm/commit/7752683e4b80f58133a322daf61d09544c8d89d7) Merge pull request #26185 from BerriAI/litellm_/interesting-wright-958880 — _@yuneng-berri_
- [`ee550e1`](https://github.com/BerriAI/litellm/commit/ee550e1949495d5e752528c6c57e6ba3506f8836) [Test] CI: add v2 migration resolver coverage with local Postgres — _@yuneng-berri_
- [`a16c00e`](https://github.com/BerriAI/litellm/commit/a16c00e22c51c12b17ecc4658c37cd36258703f6) [Feature] Proxy: opt-in v2 migration resolver (--use_v2_migration_resolver) — _@yuneng-berri_
- [`e5f3e15`](https://github.com/BerriAI/litellm/commit/e5f3e1596902ac2841a0fff2d1caff6c95d79c52) Track per-member total spend on team memberships — _@ryan-crabbe-berri_
- [`df9d6c7`](https://github.com/BerriAI/litellm/commit/df9d6c7da3214fce5316cbff2e863749f11fda20) Merge pull request #26148 from BerriAI/litellm_fix-bedrock-invoke-allowlist — _@mateo-berri_
- [`e0cc158`](https://github.com/BerriAI/litellm/commit/e0cc1588609617b4739b1c9322fa3aa9ce4efa16) Merge remote-tracking branch 'upstream/litellm_internal_staging' into litellm_post_call_non_streaming — _@shivamrawat1_
- [`165c503`](https://github.com/BerriAI/litellm/commit/165c50343484a81f66f7ea199673b85d58b367d6) Merge pull request #26150 from BerriAI/litellm_/serene-bohr-4bb54c — _@shin-berri_
- [`5b007ad`](https://github.com/BerriAI/litellm/commit/5b007add62e2d2bd31eaad6dbf4e988c7e0246ea) [Docs] Fix docstring inaccuracies in run_migration.py — _@yuneng-berri_
- [`b39f210`](https://github.com/BerriAI/litellm/commit/b39f210a6cf5ea0aaa4de86d835b21d12d93590f) [Infra] Add freshness and destructive guards to migration workflow — _@yuneng-berri_
- [`bb46d36`](https://github.com/BerriAI/litellm/commit/bb46d36babbdebada2f430dcdf2e83ce49525504) Merge pull request #26182 from BerriAI/litellm_budget_spend_counter_alignment — _@yuneng-berri_
- [`62c2c55`](https://github.com/BerriAI/litellm/commit/62c2c553d76d49fc204de8439af58bbbff458aef) Merge remote-tracking branch 'upstream/litellm_internal_staging' into litellm_post_call_non_streaming — _@shivamrawat1_
- [`11b7769`](https://github.com/BerriAI/litellm/commit/11b776935d4878b513772ee5b0cde1105c943d0d) chore: make `uv` newer than 0.10 allowable — _@SwiftWinds_
- [`6da9ee9`](https://github.com/BerriAI/litellm/commit/6da9ee95116ec4c9d73c485389f17401f53fa971) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_fix-bedrock-invoke-allowlist — _@SwiftWinds_
- [`583bdd3`](https://github.com/BerriAI/litellm/commit/583bdd34a237c4995d1cce94eb63d7cd5a3d1a52) fix(bedrock): allowlist Bedrock Invoke body fields and filter all anthropic-beta values — _@SwiftWinds_
- [`7cc22db`](https://github.com/BerriAI/litellm/commit/7cc22dbe190597b81b184b745f267273db1b5eb1) Merge pull request #26047 from BerriAI/litellm_ui-api-double-prefix-a8a3 — _@shin-berri_
- [`c2b7c4b`](https://github.com/BerriAI/litellm/commit/c2b7c4bfcd25626d2042ae7595ebe15f0335b5cd) fix: skip personal budget check in MaxBudgetLimiter for team-key requests — _@yuneng-berri_
- [`7656e26`](https://github.com/BerriAI/litellm/commit/7656e26331ce43078c0bd44a0efca62d4b6a090b) fix: align user and org spend checks with atomic counter pattern — _@yuneng-berri_
- [`447502b`](https://github.com/BerriAI/litellm/commit/447502b409ebd68c10f4c46f3dcafa0c8763683d) fix(image_edit): read vertex_project/location from litellm_params in Imagen get_complete_url — _@Sameerlite_
- [`a751276`](https://github.com/BerriAI/litellm/commit/a7512764af462bf2ed95135074df2819be8ca2de) test(image_edit): add regression tests for credentials forwarding — _@Sameerlite_
- [`dff4bfd`](https://github.com/BerriAI/litellm/commit/dff4bfd735946e1006d33adef0286e557b6f0b62) fix(image_edit): forward litellm_params to validate_environment for Vertex AI credentials — _@Sameerlite_
- [`4b3f5d7`](https://github.com/BerriAI/litellm/commit/4b3f5d7f81d38e2019882a63bbe91411b2e31065) [Fix] conftest: flush cache instances and warn on silent skips — _@yuneng-berri_
- [`0f5d503`](https://github.com/BerriAI/litellm/commit/0f5d503169aaad1f8bb3b221978c8030449b669b) fix(ci): make e2e_ui_testing actually test the freshly built UI bundle — _@yuneng-berri_
- [`5411ebe`](https://github.com/BerriAI/litellm/commit/5411ebedae0f77ed0832289ae877a75a1cca836f) [Fix] conftest snapshot: also reset scalar module attributes — _@yuneng-berri_
- [`378d80a`](https://github.com/BerriAI/litellm/commit/378d80a9addd46d9cb41522b0207662235436f67) Merge branch 'litellm_internal_staging' into litellm_wildcard_order_fallback — _@Sameerlite_
- [`6beba97`](https://github.com/BerriAI/litellm/commit/6beba97d2019c35129405e262b75d73d8276a809) test(bedrock_guardrails): assert apply_guardrail maps response to OUTPUT source — _@shivamrawat1_
- [`c770756`](https://github.com/BerriAI/litellm/commit/c770756cf3c82292e2bc561caf27342b6287c9a8) fix(bedrock_guardrails): route apply_guardrail to OUTPUT for response scans — _@shivamrawat1_
- [`ccf9283`](https://github.com/BerriAI/litellm/commit/ccf928361be6c36d8f5e6ac197775067cff442e4) [Infra] Speed up proxy unit tests by replacing litellm reload with state snapshot — _@yuneng-berri_
- [`bd3ee98`](https://github.com/BerriAI/litellm/commit/bd3ee987b318f621047b84bd582fadad903b44d9) fix(adaptive_router): bound owner cache, drop PK from upsert update, redact PII — _@krrish-berri-2_
- [`bcc093d`](https://github.com/BerriAI/litellm/commit/bcc093d8c58f1e5184423b8f841f43ba84add0eb) fix(adaptive_router): enforce satisfaction gate, stop false-flagging empty tool output — _@krrish-berri-2_
- [`1702b51`](https://github.com/BerriAI/litellm/commit/1702b513effef7709f74e7e5f5a4e1bf238f6171) Merge pull request #26142 from BerriAI/litellm_mcp_broker_endpoint_auth — _@yuneng-berri_
- [`b9bedc8`](https://github.com/BerriAI/litellm/commit/b9bedc8153cf6904d37cd40f8133fdd5af8d1e08) Merge pull request #26055 from BerriAI/litellm_non-root-dockerfile-optimization-31b6 — _@yuneng-berri_
- [`b6de470`](https://github.com/BerriAI/litellm/commit/b6de470ce97d0e7c2054d1640535ce86a4393aa8) fix: add access control to register endpoint to match authorize and token — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
