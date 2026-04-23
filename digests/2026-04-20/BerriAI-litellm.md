# BerriAI/litellm — 2026-04-20

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-19T23:59:59.000Z → 2026-04-20T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a major routing/feature push merged into staging: **auto/quality-tier routing** (#25987) plus its `/v1/responses` complexity-router support (#26137), bundled into the daily staging cut #26138. Alongside it, **proxy-side Prompt Compression** (#25729) finally landed, letting operators transparently compress 50k–200k token inputs (Claude Code, RAG) without client opt-in — likely the most consequential merge for cost/latency-sensitive deployments.

Other notable merges:
- **Hot-reload dev flag** `litellm --reload` for uvicorn (#25901), opt-in only, no env var so it can't leak into prod.
- **`/health/readiness` 503-loop fix** when DB is unreachable (#26134) — `handle_db_exception` was re-raising and breaking readiness probes.
- **Anthropic model retirement cleanup**: 16 references to `claude-3-haiku-20240307` swapped to `claude-haiku-4-5-20251001` (#26139) after Anthropic's 2026-04-20 deprecation broke CI.
- **CI infra**: auth_ui_unit_tests moved to a per-job Postgres sidecar to stop drift-driven failures (#26141); black formatting restored on 14 files (#26140).
- Docs: prompt-caching doc now lists supported providers and corrects xAI entries (#26124).

Noteworthy new open PRs worth a look:
- **#26143** (Bedrock): proposes removing the `remove_custom_field_from_tools` workaround now that Bedrock natively accepts `custom.defer_loading` — a small but meaningful cleanup of a past hack from #22861.
- **#26027**: adds **Granian** as an alternative ASGI server with measured 337→365 RPS gains over uvicorn at 4 vCPU/16GB.
- **#26090**: preserves Anthropic `tool_use` block boundaries for parallel/interleaved streaming tool calls — fixes a Claude Code issue.
- **#26126 / #26098**: streaming correctness fixes for Gemini (`server_side_tool_invocations` merge by id) and Ollama (thinking+content in same chunk being dropped).
- **#26086**: stops `raw_request` leaking into Anthropic's `metadata` dict via shared-reference mutation.
- **#26109**: post-call guardrail fired twice on streaming, causing spurious 400s.

No releases or new issues in window. Several stale community PRs were auto-closed (#17870, #18244, #18622, #18803).

## Releases

_None in window._


## Merged PRs

- [#26141](https://github.com/BerriAI/litellm/pull/26141) **[Fix] CI - auth_ui_unit_tests: use Postgres sidecar instead of shared DB** — _by @yuneng-berri, merged 2026-04-20T23:32:29Z_
- [#26139](https://github.com/BerriAI/litellm/pull/26139) **chore: update retired claude-3-haiku-20240307 to claude-haiku-4-5-20251001** — _by @ryan-crabbe-berri, merged 2026-04-20T23:30:19Z_
- [#26138](https://github.com/BerriAI/litellm/pull/26138) **Litellm krrish staging 04 20 2026** — _by @krrish-berri-2, merged 2026-04-20T23:22:13Z_
- [#26140](https://github.com/BerriAI/litellm/pull/26140) **[Fix] Apply black formatting to fix CI lint failures** — _by @yuneng-berri, merged 2026-04-20T23:01:17Z_
- [#26137](https://github.com/BerriAI/litellm/pull/26137) **Support /v1/responses in complexity router** — _by @krrish-berri-2, merged 2026-04-20T22:51:13Z_
- [#25987](https://github.com/BerriAI/litellm/pull/25987) **feat(router): add auto_router/quality_router for quality-tier routing** — _by @krrish-berri-2, merged 2026-04-20T22:49:22Z_
- [#25385](https://github.com/BerriAI/litellm/pull/25385) **docs(readme): update Greptile logo to higher quality image** — _by @Chesars, merged 2026-04-20T22:46:56Z_
- [#26134](https://github.com/BerriAI/litellm/pull/26134) **fix: /health/readiness 503 loop when DB is unreachable** — _by @ishaan-berri, merged 2026-04-20T22:29:43Z_
- [#26124](https://github.com/BerriAI/litellm/pull/26124) **Add supported providers to prompt caching doc** — _by @Michael-RZ-Berri, merged 2026-04-20T22:25:22Z_
- [#25729](https://github.com/BerriAI/litellm/pull/25729) **Prompt Compression - add it to the proxy** — _by @krrish-berri-2, merged 2026-04-20T22:08:00Z_
- [#25901](https://github.com/BerriAI/litellm/pull/25901) **feat(proxy): add --reload flag for uvicorn hot reload (dev only)** — _by @ryan-crabbe-berri, merged 2026-04-20T15:48:22Z_
- [#18891](https://github.com/BerriAI/litellm/pull/18891) **fix: models loadbalancing billing issue by filter** — _by @Harshit28j, merged 2026-01-15T22:11:21Z_
- [#24883](https://github.com/BerriAI/litellm/pull/24883) **feat: multiple concurrent budget windows per API key and team** — _by @ishaan-berri, merged 2026-04-03T21:11:29Z_
- [#20300](https://github.com/BerriAI/litellm/pull/20300) **docs: add Prisma migration troubleshooting guide** — _by @ghost, merged 2026-02-02T22:39:18Z_


## Open PRs (new or updated)

- [#26143](https://github.com/BerriAI/litellm/pull/26143) **fix(bedrock): remove remove_custom_field_from_tools — Bedrock now supports custom.defer_loading natively** — _by @Anai-Guo, updated 2026-04-20T23:55:06Z_
- [#26027](https://github.com/BerriAI/litellm/pull/26027) **Add granian as a ASGI compliant web server. Provider better throughput stability,** — _by @harish-berri, updated 2026-04-20T22:24:27Z_
- [#26136](https://github.com/BerriAI/litellm/pull/26136) **[Infra] Widen uv exclude-newer cooldown from 3 to 7 days** — _by @yuneng-berri, updated 2026-04-20T21:58:03Z_
- [#26135](https://github.com/BerriAI/litellm/pull/26135) **fix(ollama): Include provider in model list for ollama** — _by @jamesmyatt, updated 2026-04-20T21:40:11Z_
- [#25847](https://github.com/BerriAI/litellm/pull/25847) **[Refactor] UI - Spend Logs: consolidate filter state and extract components** — _by @ryan-crabbe-berri, updated 2026-04-20T20:50:58Z_
- [#26125](https://github.com/BerriAI/litellm/pull/26125) **Fix "occured" typo in log messages** — _by @FireflySentinel, updated 2026-04-20T20:02:22Z_
- [#26128](https://github.com/BerriAI/litellm/pull/26128) **Add Openrouter Gemini 3 Image Entries** — _by @matt-greathouse, updated 2026-04-20T19:54:08Z_
- [#25722](https://github.com/BerriAI/litellm/pull/25722) **fix(websearch_interception): default enabled_providers to all providers** — _by @ToastyTheBot, updated 2026-04-20T19:49:33Z_
- [#26126](https://github.com/BerriAI/litellm/pull/26126) **fix: merge server_side_tool_invocations by id in stream_chunk_builder** — _by @nileshpatil6, updated 2026-04-20T19:31:16Z_
- [#25980](https://github.com/BerriAI/litellm/pull/25980) **Fix /metrics hang when require_auth_for_metrics_endpoint is true and auth succeeds** — _by @shivamrawat1, updated 2026-04-20T19:23:22Z_
- [#24785](https://github.com/BerriAI/litellm/pull/24785) _(draft)_ **feat: OAuth device code UI flow for GitHub Copilot & ChatGPT** — _by @hwittenborn, updated 2026-04-20T19:01:12Z_
- [#26085](https://github.com/BerriAI/litellm/pull/26085) **fix(proxy): avoid invalid Prisma JsonFilter in reset_budget_windows** — _by @jibanez-staticduo, updated 2026-04-20T18:09:07Z_
- [#26122](https://github.com/BerriAI/litellm/pull/26122) **fix(ollama): forward tool_calls and tool_call_id in transform_request** — _by @mverrilli, updated 2026-04-20T17:54:00Z_
- [#26089](https://github.com/BerriAI/litellm/pull/26089) **fix(proxy): paginate reset_budget_windows scans** — _by @jibanez-staticduo, updated 2026-04-20T17:10:14Z_
- [#26119](https://github.com/BerriAI/litellm/pull/26119) **fix(proxy/auth): stop DD APM false-positive error spans when DB unavailable (#25966)** — _by @sakenuGOD, updated 2026-04-20T16:48:32Z_
- [#26118](https://github.com/BerriAI/litellm/pull/26118) **fix(vector_stores): surface config-declared vector stores in /vector_store/list (#25947)** — _by @sakenuGOD, updated 2026-04-20T16:34:05Z_
- [#26115](https://github.com/BerriAI/litellm/pull/26115) **feat(models): add versioned GPT-5.4 mini/nano snapshots** — _by @Sameerlite, updated 2026-04-20T15:35:23Z_
- [#25500](https://github.com/BerriAI/litellm/pull/25500) **feat(proxy): LiteLLM headers on Google native generateContent routes** — _by @Sameerlite, updated 2026-04-20T14:11:44Z_
- [#25856](https://github.com/BerriAI/litellm/pull/25856) **Litellm clean litellm oss staging 04 01 2026** — _by @Sameerlite, updated 2026-04-20T13:49:05Z_
- [#26109](https://github.com/BerriAI/litellm/pull/26109) **fix: post call guardrail must be called once** — _by @mubashir1osmani, updated 2026-04-20T13:44:54Z_
- [#26105](https://github.com/BerriAI/litellm/pull/26105) **fix(langfuse): send v4 ingestion header for otel callback** — _by @hassiebp, updated 2026-04-20T12:58:06Z_
- [#24218](https://github.com/BerriAI/litellm/pull/24218) **fix: async task leak in SlackAlerting** — _by @FauxFaux, updated 2026-04-20T12:53:34Z_
- [#26103](https://github.com/BerriAI/litellm/pull/26103) **fix(responses): emit per-summary thinking blocks and deduplicate message_start** — _by @Vigilans, updated 2026-04-20T12:24:08Z_
- [#26096](https://github.com/BerriAI/litellm/pull/26096) **feat: add `force_reasoning_effort` litellm_params config** — _by @Vigilans, updated 2026-04-20T12:22:11Z_
- [#26099](https://github.com/BerriAI/litellm/pull/26099) **fix(vertex-ai): reuse anthropic messages config instances** — _by @Sameerlite, updated 2026-04-20T11:01:10Z_
- [#26098](https://github.com/BerriAI/litellm/pull/26098) **fix(ollama): process both thinking and content in same streaming chunk** — _by @vhash0, updated 2026-04-20T10:57:58Z_
- [#26087](https://github.com/BerriAI/litellm/pull/26087) **fix(responses): handle incomplete response with reasoning-only output** — _by @Vigilans, updated 2026-04-20T09:34:08Z_
- [#20346](https://github.com/BerriAI/litellm/pull/20346) **fixes: ci pipeline for load balancing PR** — _by @Harshit28j, updated 2026-04-20T09:25:07Z_
- [#26090](https://github.com/BerriAI/litellm/pull/26090) **fix(anthropic): preserve tool blocks in messages streaming** — _by @Rookie0x80, updated 2026-04-20T09:21:19Z_
- [#25782](https://github.com/BerriAI/litellm/pull/25782) **Enabled invite E-Mail by default** — _by @johannSo, updated 2026-04-20T08:49:33Z_
- [#23924](https://github.com/BerriAI/litellm/pull/23924) **fix(router): fix least-busy routing always picking the same deploymen…** — _by @CJYLZS, updated 2026-04-20T08:41:44Z_
- [#26086](https://github.com/BerriAI/litellm/pull/26086) **fix(messages): copy metadata dict to prevent raw_request leak to Anthropic API** — _by @Vigilans, updated 2026-04-20T08:34:05Z_
- [#26084](https://github.com/BerriAI/litellm/pull/26084) **fix(model-registry): add missing supports_web_search for gpt-5.4** — _by @Vigilans, updated 2026-04-20T08:22:20Z_
- [#25761](https://github.com/BerriAI/litellm/pull/25761) **fix(vertex_ai): append streamRawPredict for custom Anthropic messages api_base** — _by @samrusani, updated 2026-04-20T07:28:35Z_
- [#26011](https://github.com/BerriAI/litellm/pull/26011) **Adding Cycraft XecGuard integration** — _by @clyang, updated 2026-04-20T07:25:33Z_
- [#26082](https://github.com/BerriAI/litellm/pull/26082) **fix(pass-through): pop stale route key directly to prevent unbounded registry growth** — _by @silencedoctor, updated 2026-04-20T07:06:13Z_
- [#26080](https://github.com/BerriAI/litellm/pull/26080) **feat(proxy): add model_group filter to /spend/logs/v2 endpoint** — _by @silencedoctor, updated 2026-04-20T06:48:45Z_
- [#25958](https://github.com/BerriAI/litellm/pull/25958) **fix(anthropic): allow effort="max" on Claude Opus 4.7** — _by @shang309073819, updated 2026-04-20T05:08:06Z_
- [#26076](https://github.com/BerriAI/litellm/pull/26076) **feat(vertex_ai): Model Garden OpenAPI for publisher model ids** — _by @Sameerlite, updated 2026-04-20T04:53:44Z_
- [#26075](https://github.com/BerriAI/litellm/pull/26075) **fix(chatgpt): accumulate response.output_item.done for non-streaming responses** — _by @andafterall, updated 2026-04-20T04:02:08Z_
- [#26000](https://github.com/BerriAI/litellm/pull/26000) **fix(proxy): handle non-standard SSE frames in Anthropic passthrough logging** — _by @leikaiwei, updated 2026-04-20T02:28:45Z_
- [#19264](https://github.com/BerriAI/litellm/pull/19264) **fix: Model Management UI: Filter non-providers and non-functional ** — _by @nehaaprasad, updated 2026-04-20T00:09:05Z_
- [#19333](https://github.com/BerriAI/litellm/pull/19333) **chore: map Vertex IMAGE_PROHIBITED_CONTENT to content_filter** — _by @Leo-Adrian-Code, updated 2026-04-20T00:08:59Z_
- [#26074](https://github.com/BerriAI/litellm/pull/26074) **FIX spend-log-error-content-leak** — _by @J-Byron, updated 2026-04-20T00:06:21Z_


## Closed PRs (not merged)

- [#26132](https://github.com/BerriAI/litellm/pull/26132) **fix: /health/readiness 503 loop when DB is unreachable** — _by @ishaan-berri, closed 2026-04-20T20:40:58Z_
- [#25830](https://github.com/BerriAI/litellm/pull/25830) **Support /v1/responses in complexity router ** — _by @krrish-berri-2, closed 2026-04-20T22:24:42Z_
- [#26127](https://github.com/BerriAI/litellm/pull/26127) **fix: /health/readiness 503 loop when DB is unreachable** — _by @ishaan-berri, closed 2026-04-20T20:32:49Z_
- [#26123](https://github.com/BerriAI/litellm/pull/26123) **fix: merge server_side_tool_invocations by id in stream_chunk_builder** — _by @nileshpatil6, closed 2026-04-20T19:26:20Z_
- [#25201](https://github.com/BerriAI/litellm/pull/25201) **fix(prometheus): use prometheus_label_factory in _set_virtual_key_rate_limit_metrics** — _by @tom-onyx, closed 2026-04-20T18:04:02Z_
- [#26121](https://github.com/BerriAI/litellm/pull/26121) **fix(ollama): forward tool_calls and tool_call_id in transform_request** — _by @mverrilli, closed 2026-04-20T17:45:51Z_
- [#26116](https://github.com/BerriAI/litellm/pull/26116) **fix(mcp_semantic_tool_filter): match tools with client-side namespace prefix (#26078)** — _by @sakenuGOD, closed 2026-04-20T16:00:49Z_
- [#26106](https://github.com/BerriAI/litellm/pull/26106) **Fix/end user budget zero cost bypass 14004** — _by @fabianh-rz, closed 2026-04-20T13:52:44Z_
- [#25352](https://github.com/BerriAI/litellm/pull/25352) **fix: enforce end-user budget and free model availability (#14004)** — _by @fabianh-rz, closed 2026-04-20T13:44:05Z_
- [#26091](https://github.com/BerriAI/litellm/pull/26091) **fix(mcp): resolve client-prefixed MCP tool names in semantic filter** — _by @XyLearningProgramming, closed 2026-04-20T10:06:58Z_
- [#24846](https://github.com/BerriAI/litellm/pull/24846) **fix(pass-through): remove stale routes by key to prevent unbounded registry growth** — _by @silencedoctor, closed 2026-04-20T07:00:05Z_
- [#24782](https://github.com/BerriAI/litellm/pull/24782) **feat: add model_group filter to /spend/logs/v2 endpoint** — _by @silencedoctor, closed 2026-04-20T06:42:48Z_
- [#17870](https://github.com/BerriAI/litellm/pull/17870) **fix: grayswan guardrail post call hook on various endpoints** — _by @Reapor-Yurnero, closed 2026-04-20T00:09:26Z_
- [#18244](https://github.com/BerriAI/litellm/pull/18244) **feat: Preserve context in success_handler function** — _by @smueller18, closed 2026-04-20T00:09:25Z_
- [#18622](https://github.com/BerriAI/litellm/pull/18622) **add new provider Zenmux support to litellm ** — _by @Wang-wanzi, closed 2026-04-20T00:09:19Z_
- [#18803](https://github.com/BerriAI/litellm/pull/18803) **fix: prevent concurrent requests from bypassing TPM rate limits (#18730)** — _by @Harshit28j, closed 2026-04-20T00:09:17Z_
- [#26059](https://github.com/BerriAI/litellm/pull/26059) **fix(anthropic): detect invalid thinking signatures from Vertex AI error format** — _by @CodeLine9, closed 2026-04-19T16:13:39Z_


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`99f007f`](https://github.com/BerriAI/litellm/commit/99f007f51d9961a3818b43ecb2bb74e6d69a2418) refactor: consolidate redirect_uri scheme check into shared handler — _@yuneng-berri_
- [`7b43f59`](https://github.com/BerriAI/litellm/commit/7b43f5981fa60a0eae3218ffe9b2ce907d64900e) [Fix] CI: split test_proxy_utils.py into its own proxy-db matrix entry — _@yuneng-berri_
- [`9deefc0`](https://github.com/BerriAI/litellm/commit/9deefc0f766837822e192154290091d8b57bf5bd) fix: align MCP broker endpoint access controls with existing auth patterns — _@yuneng-berri_
- [`0ecc89c`](https://github.com/BerriAI/litellm/commit/0ecc89c355de4abe1e7771d1116fe10cb3406267) Merge branch 'litellm_internal_staging' into litellm_non-root-dockerfile-optimization-31b6 — _@yuneng-berri_
- [`ba82016`](https://github.com/BerriAI/litellm/commit/ba820160ab82e831530c4fc1659fa14f078cfc60) Merge pull request #26141 from BerriAI/litellm_/relaxed-moser-92f086 — _@yuneng-berri_
- [`60d3796`](https://github.com/BerriAI/litellm/commit/60d37964971250c8e0d78e377a1010253d715f4c) Merge pull request #26139 from BerriAI/litellm_fix-retired-haiku-model — _@ryan-crabbe-berri_
- [`e7bc316`](https://github.com/BerriAI/litellm/commit/e7bc316db01b0fb1695b381aff110fea435b4aab) Litellm krrish staging 04 20 2026 (#26138) — _@krrish-berri-2_
- [`bb62099`](https://github.com/BerriAI/litellm/commit/bb6209932312e4e7438f5133fb09fc8989f5bd82) [Fix] CI - auth_ui_unit_tests: use Postgres sidecar instead of shared DB — _@yuneng-berri_
- [`eee51a9`](https://github.com/BerriAI/litellm/commit/eee51a99ad922a047f2e7fb379d3894a3d173248) replace retired claude-3-haiku-20240307 with claude-haiku-4-5-20251001 in local_testing part1 and router fallback tests — _@ryan-crabbe-berri_
- [`74169b1`](https://github.com/BerriAI/litellm/commit/74169b114a2053a1db96bc42f6e789341dd2da07) replace retired claude-3-haiku-20240307 with claude-haiku-4-5-20251001 in streaming tests — _@ryan-crabbe-berri_
- [`e99955a`](https://github.com/BerriAI/litellm/commit/e99955ac5222633b3207cd8f8c96e15442887fe1) test(adaptive_router/hooks): align stale tests with current hook API — _@krrish-berri-2_
- [`d053355`](https://github.com/BerriAI/litellm/commit/d05335591a58c2f170466d608bf3cd0071dbe2dd) style: apply black formatting — _@krrish-berri-2_
- [`7979044`](https://github.com/BerriAI/litellm/commit/7979044c7661fc5e41e6d3f872c568f33327d095) Merge pull request #26140 from BerriAI/litellm_fix_black_formatting — _@yuneng-berri_
- [`505f6e0`](https://github.com/BerriAI/litellm/commit/505f6e0522eacbf4e4407b5886890805b3a1fea2) [Fix] Apply black formatting to fix CI lint failures — _@yuneng-berri_
- [`353e406`](https://github.com/BerriAI/litellm/commit/353e406229b41c9ecf07a535c0b714073f369c19) [Refactor] remove orphaned _experimental/out build artifacts — _@yuneng-berri_
- [`3745ba2`](https://github.com/BerriAI/litellm/commit/3745ba2ea786d28683da9e4507e84f7656e0e3bf) replace retired claude-3-haiku-20240307 with claude-haiku-4-5-20251001 in anthropic messages passthrough test — _@ryan-crabbe-berri_
- [`3bae051`](https://github.com/BerriAI/litellm/commit/3bae051113a7668856031ae7c38e40e39b3756f9) [Refactor] revert _experimental/out regeneration; leave to release runbook — _@yuneng-berri_
- [`9aee0da`](https://github.com/BerriAI/litellm/commit/9aee0da7d8c3618b6505a83a646ab388bef77745) fix: /health/readiness 503 loop when DB is unreachable (#26134) — _@ishaan-berri_
- [`b6fc75b`](https://github.com/BerriAI/litellm/commit/b6fc75b3ce8fb78aa34c1ac154278b588eb44e50) Merge branch 'litellm_internal_staging' into litellm_adaptive_routing — _@krrish-berri-2_
- [`0cfcec6`](https://github.com/BerriAI/litellm/commit/0cfcec68e9b3b53249a17e13299431bad02adb14) fix(adaptive_router/hooks): populate tool_results so failure signal fires — _@krrish-berri-2_
- [`4f823ce`](https://github.com/BerriAI/litellm/commit/4f823cedac47473ea0dae58ccbe10d0afbb725d2) Add supported providers to prompt caching doc (#26124) — _@Michael-RZ-Berri_
- [`fba736c`](https://github.com/BerriAI/litellm/commit/fba736ca3c72442f90a5368b14cb235bea834a9b) fix(adaptive_router): 3 P1 review defects — _@krrish-berri-2_
- [`386f334`](https://github.com/BerriAI/litellm/commit/386f334feef5808074de4f201d7d511a6f3acabe) Prompt Compression - add it to the proxy (#25729) — _@krrish-berri-2_
- [`24a2e3e`](https://github.com/BerriAI/litellm/commit/24a2e3e89e0667a2a82b7adb7ffa8ed1296a968a) fix: address CI violations for adaptive router — _@krrish-berri-2_
- [`a19bff4`](https://github.com/BerriAI/litellm/commit/a19bff4ca67dcf4e721df9d831c9d073aa26acd2) Feature/add audio support for scaleway (#26110) — _@nhyy244_
- [`995bff0`](https://github.com/BerriAI/litellm/commit/995bff0dec77ec276c819547fc50fc1429d32158) [Fix] Dockerfile.non_root: drop prisma --version sanity call — _@yuneng-berri_
- [`db49885`](https://github.com/BerriAI/litellm/commit/db49885102702ce5a518ed384125c6ce799db287) [Refactor] Dockerfile.non_root: drop UI drift guard approach — _@yuneng-berri_
- [`ea12bae`](https://github.com/BerriAI/litellm/commit/ea12bae9a357d23c922779de2a41ad4216c8345c) Merge pull request #25901 from BerriAI/litellm_feat-add-reload-flag-proxy — _@ryan-crabbe-berri_
- [`f0efc5f`](https://github.com/BerriAI/litellm/commit/f0efc5f670851264b400caaee48ecd503852ed38) test: cover _finalize_adaptive_router_if_configured — _@krrish-berri-2_
- [`3cf0460`](https://github.com/BerriAI/litellm/commit/3cf0460d8c5e7d77b57577e68aa8117abbbf0b8f) chore: revert uv.lock to match main — _@krrish-berri-2_
- [`dedc219`](https://github.com/BerriAI/litellm/commit/dedc219f8ede94239d5dff19ecbbce447e9b46b7) fix: minor improvements — _@krrish-berri-2_
- [`43d23e9`](https://github.com/BerriAI/litellm/commit/43d23e9878609f3755351de25e0091df4b709e4e) chore: revert UI build artifacts — _@krrish-berri-2_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
