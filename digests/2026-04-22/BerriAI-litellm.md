# BerriAI/litellm — 2026-04-22

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-21T23:59:59.000Z → 2026-04-22T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

# LiteLLM — 2026-04-22

The headline ship is the new **adaptive routing** strategy ([#26049](https://github.com/BerriAI/litellm/pull/26049)): a beta `adaptive_router/` that picks per-request among a model list using a quality/cost weight and learns from real traffic. Proxies can declare per-model `adaptive_router_preferences` (quality_tier, strengths) in `model_list`. Follow-up commits (e50f945, f1da202) moved the update queue out of `litellm.proxy` so SDK-only consumers aren't broken, and made the flusher start unconditionally at boot. Version bumped to **v1.83.11-nightly** ([#26209](https://github.com/BerriAI/litellm/pull/26209)).

Other notable merges:

- **Router**: wildcard model groups (e.g. `openai/*`) now correctly advance through `order=` fallbacks ([#25772](https://github.com/BerriAI/litellm/pull/25772)).
- **ChatGPT/Responses**: rebased fix preserves `responses` routing when shared backend keys are reused and recovers empty `response.output_item.done` output ([#26219](https://github.com/BerriAI/litellm/pull/26219), re-landing #25403).
- **Security/proxy hardening**: `is_request_body_safe()` now also bans `aws_sts_endpoint`, `aws_web_identity_token`, `aws_role_name`, `vertex_credentials` ([#26264](https://github.com/BerriAI/litellm/pull/26264)); Bedrock + token-counter image fetches routed through validated `safe_get` to defend against SSRF on redirects ([#26272](https://github.com/BerriAI/litellm/pull/26272)).
- **Guardrails**: Bedrock guardrail spend logs fixed for hook-mode labels, match redaction, and streaming `request_data` ([#26266](https://github.com/BerriAI/litellm/pull/26266)); post-call now correctly uses Bedrock `OUTPUT` source ([#26144](https://github.com/BerriAI/litellm/pull/26144)); Rubrik added as a first-class guardrail ([#25305](https://github.com/BerriAI/litellm/pull/25305)).
- **Team budgets**: each member now gets an independent budget instead of sharing the team default ([#26208](https://github.com/BerriAI/litellm/pull/26208)).
- **Vertex AI**: cached credentials reused across `VertexAIPartnerModels`/Gemma/Model Garden ([#26065](https://github.com/BerriAI/litellm/pull/26065)) and a single-flight credential refresh prevents thundering-herd stalls under concurrency ([#26024](https://github.com/BerriAI/litellm/pull/26024)).
- **Models**: `moonshot/kimi-k2.6` added to registry ([#26203](https://github.com/BerriAI/litellm/pull/26203)); OpenRouter Opus 4.7 entry ([#26130](https://github.com/BerriAI/litellm/pull/26130)).
- **Infra**: large CircleCI consolidation (3,601 → much smaller, dedup `uv` install + Postgres setup, [#26226](https://github.com/BerriAI/litellm/pull/26226)), uv dependency caching across CI ([#26280](https://github.com/BerriAI/litellm/pull/26280)), more jobs migrated to GitHub Actions ([#26261](https://github.com/BerriAI/litellm/pull/26261)), Docker Prisma cache path restored for read-only-rootfs deployments ([#26201](https://github.com/BerriAI/litellm/pull/26201)), and flaky spend-accuracy tests stabilized while patching a Redis buffer data-loss path ([#26270](https://github.com/BerriAI/litellm/pull/26270)).

Notable open PRs to watch: `/v1/memory` CRUD endpoints ([#26218](https://github.com/BerriAI/litellm/pull/26218)), multi-region Vertex hosts ([#26281](https://github.com/BerriAI/litellm/pull/26281)), pass-through post-call guardrails ([#26262](https://github.com/BerriAI/litellm/pull/26262)), and a non-blocking Prisma reconnect ([#26225](https://github.com/BerriAI/litellm/pull/26225)).

## Releases

- **[v1.83.11-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.83.11-nightly)** — v1.83.11-nightly _by @github-actions[bot] at 2026-04-22T06:47:13Z_
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

- [#26219](https://github.com/BerriAI/litellm/pull/26219) **fix(chatgpt): preserve responses routing and recover empty output** — _by @krrish-berri-2, merged 2026-04-22T03:46:19Z_
- [#26283](https://github.com/BerriAI/litellm/pull/26283) **Sync litellm_staging_03_22_2026 with litellm_internal_staging** — _by @Chesars, merged 2026-04-22T22:55:27Z_
- [#25772](https://github.com/BerriAI/litellm/pull/25772) **fix(router): wildcard order fallback to higher-order deployments** — _by @Sameerlite, merged 2026-04-22T22:05:15Z_
- [#26270](https://github.com/BerriAI/litellm/pull/26270) **[Fix] Stabilize flaky spend accuracy tests + patch Redis buffer data-loss path** — _by @yuneng-berri, merged 2026-04-22T22:02:25Z_
- [#26264](https://github.com/BerriAI/litellm/pull/26264) **[Fix] Extend request body parameter restrictions to cloud provider auth fields** — _by @yuneng-berri, merged 2026-04-22T21:56:37Z_
- [#26272](https://github.com/BerriAI/litellm/pull/26272) **[Fix] Align image URL fetch with validated HTTP client in Bedrock and token counter paths** — _by @yuneng-berri, merged 2026-04-22T21:45:30Z_
- [#26261](https://github.com/BerriAI/litellm/pull/26261) **[Infra] Migrate more CI jobs from CircleCI to GitHub Actions** — _by @yuneng-berri, merged 2026-04-22T21:37:25Z_
- [#26266](https://github.com/BerriAI/litellm/pull/26266) **fix(proxy): Bedrock guardrail spend logs - hook mode, match redaction, streaming request_data** — _by @milan-berri, merged 2026-04-22T21:32:10Z_
- [#25305](https://github.com/BerriAI/litellm/pull/25305) **Add Rubrik as officially-supported guardrail plugin** — _by @seph-barker, merged 2026-04-22T20:51:29Z_
- [#26226](https://github.com/BerriAI/litellm/pull/26226) **[Infra] CircleCI config cleanup and consolidation** — _by @yuneng-berri, merged 2026-04-22T19:07:00Z_
- [#26201](https://github.com/BerriAI/litellm/pull/26201) **[Fix] Docker: restore pre-uv Prisma cache path** — _by @yuneng-berri, merged 2026-04-22T18:33:27Z_
- [#24738](https://github.com/BerriAI/litellm/pull/24738) **Update sidebar configuration and add Akto Guardrail API settings** — _by @rzeta-10, merged 2026-04-22T18:01:28Z_
- [#26260](https://github.com/BerriAI/litellm/pull/26260) **merge main** — _by @Sameerlite, merged 2026-04-22T16:47:14Z_
- [#26258](https://github.com/BerriAI/litellm/pull/26258) **merge main** — _by @Sameerlite, merged 2026-04-22T16:09:51Z_
- [#26049](https://github.com/BerriAI/litellm/pull/26049) **Litellm adaptive routing** — _by @krrish-berri-2, merged 2026-04-22T15:52:51Z_
- [#26092](https://github.com/BerriAI/litellm/pull/26092) **docs: add Claude Code any-advisor tutorial and fix streaming logging** — _by @Sameerlite, merged 2026-04-22T12:00:23Z_
- [#26242](https://github.com/BerriAI/litellm/pull/26242) **merge main** — _by @Sameerlite, merged 2026-04-22T11:54:30Z_
- [#26157](https://github.com/BerriAI/litellm/pull/26157) **fix(deps): relax core runtime dependency pins from exact == to ranges** — _by @Anai-Guo, merged 2026-04-22T04:59:22Z_
- [#26069](https://github.com/BerriAI/litellm/pull/26069) **fix(fireworks): add glm-5p1 metadata and parallel_tool_calls** — _by @elonazoulay, merged 2026-04-22T03:20:10Z_
- [#26213](https://github.com/BerriAI/litellm/pull/26213) **April 21st Ishaan Branch ** — _by @ishaan-berri, merged 2026-04-22T03:18:57Z_
- [#26065](https://github.com/BerriAI/litellm/pull/26065) **fix: reuse cached credentials in VertexAIPartnerModels** — _by @6matt, merged 2026-04-22T03:09:59Z_
- [#26024](https://github.com/BerriAI/litellm/pull/26024) **fix(vertex_ai): single-flight credential refresh to prevent thundering herd** — _by @6matt, merged 2026-04-22T03:09:08Z_
- [#26203](https://github.com/BerriAI/litellm/pull/26203) **add moonshot/kimi-k2.6 to model registry** — _by @ishaan-berri, merged 2026-04-22T02:58:44Z_
- [#26130](https://github.com/BerriAI/litellm/pull/26130) **Add Openrouter Opus 4.7 Entry** — _by @matt-greathouse, merged 2026-04-22T02:28:51Z_
- [#26183](https://github.com/BerriAI/litellm/pull/26183) **fix(otel): preserve Splunk Observability Cloud trace OTLP endpoint** — _by @milan-berri, merged 2026-04-22T02:24:09Z_
- [#26211](https://github.com/BerriAI/litellm/pull/26211) **[Infra] Promote internal staging to main** — _by @yuneng-berri, merged 2026-04-22T01:57:59Z_
- [#26208](https://github.com/BerriAI/litellm/pull/26208) **Litellm individual team member budgets** — _by @shivamrawat1, merged 2026-04-22T01:38:00Z_
- [#26209](https://github.com/BerriAI/litellm/pull/26209) **[Infra] Bump version** — _by @yuneng-berri, merged 2026-04-22T01:29:41Z_
- [#26144](https://github.com/BerriAI/litellm/pull/26144) **fix(bedrock_guardrails): use Bedrock OUTPUT source for apply_guardrail when scanning model responses** — _by @shivamrawat1, merged 2026-04-22T00:50:16Z_


## Open PRs (new or updated)

- [#26165](https://github.com/BerriAI/litellm/pull/26165) _(draft)_ **chore: ignore experimental UI build output and refresh lockfiles** — _by @dizhaky, updated 2026-04-22T23:22:36Z_
- [#24374](https://github.com/BerriAI/litellm/pull/24374) **Litellm staging 03 22 2026** — _by @Chesars, updated 2026-04-22T23:17:03Z_
- [#26281](https://github.com/BerriAI/litellm/pull/26281) **feat(vertex_ai): multi-region Vertex hosts (aiplatform.*.rep.googleapis.com)** — _by @milan-berri, updated 2026-04-22T22:55:00Z_
- [#26177](https://github.com/BerriAI/litellm/pull/26177) **fix(ollama): prefer explicit api_base** — _by @MukundaKatta, updated 2026-04-22T22:16:08Z_
- [#26277](https://github.com/BerriAI/litellm/pull/26277) **chore(deps): bump uuid from 9.0.1 to 14.0.0 in /docs/my-website** — _by @dependabot[bot], updated 2026-04-22T21:58:30Z_
- [#26262](https://github.com/BerriAI/litellm/pull/26262) **fix(proxy): invoke post-call guardrails on pass-through endpoint responses (#20270)** — _by @tuhinspatra, updated 2026-04-22T21:58:26Z_
- [#26276](https://github.com/BerriAI/litellm/pull/26276) **chore(deps): bump uuid from 11.1.0 to 14.0.0 in /ui/litellm-dashboard** — _by @dependabot[bot], updated 2026-04-22T21:42:27Z_
- [#26275](https://github.com/BerriAI/litellm/pull/26275) **fix: honor key access_group_ids when team restricts models** — _by @ryan-crabbe-berri, updated 2026-04-22T21:32:41Z_
- [#25497](https://github.com/BerriAI/litellm/pull/25497) **docs(proxy): clarify x-litellm-model-group vs provider model id** — _by @Sameerlite, updated 2026-04-22T21:07:44Z_
- [#26216](https://github.com/BerriAI/litellm/pull/26216) **Litellm oss staging 04 21 2026** — _by @krrish-berri-2, updated 2026-04-22T20:55:24Z_
- [#25244](https://github.com/BerriAI/litellm/pull/25244) **fix(guardrails): improve CrowdStrike AIDR input handling** — _by @kenany, updated 2026-04-22T19:15:35Z_
- [#25353](https://github.com/BerriAI/litellm/pull/25353) **Add LTX Video API support** — _by @matt-greathouse, updated 2026-04-22T18:50:59Z_
- [#26204](https://github.com/BerriAI/litellm/pull/26204) **Fix bugs that bypasses per-team member budget limit** — _by @Michael-RZ-Berri, updated 2026-04-22T17:45:59Z_
- [#26221](https://github.com/BerriAI/litellm/pull/26221) **feat(responses): strip custom_tool_call namespace for all providers** — _by @Sameerlite, updated 2026-04-22T17:02:30Z_
- [#26077](https://github.com/BerriAI/litellm/pull/26077) **fix(vertex_ai): omit system_instruction/tools/toolConfig when cachedContent set** — _by @Sameerlite, updated 2026-04-22T16:55:27Z_
- [#26101](https://github.com/BerriAI/litellm/pull/26101) **fix(anthropic): allow max output effort via model metadata** — _by @Sameerlite, updated 2026-04-22T16:44:13Z_
- [#26248](https://github.com/BerriAI/litellm/pull/26248) **fix(proxy): preserve anthropic_messages call type for /v1/messages logging** — _by @Sameerlite, updated 2026-04-22T16:41:27Z_
- [#24325](https://github.com/BerriAI/litellm/pull/24325) **feat(provider): add Rapid-MLX as named provider** — _by @raullenchai, updated 2026-04-22T16:22:12Z_
- [#26259](https://github.com/BerriAI/litellm/pull/26259) **docs: remove misleading Step 1 from Docker Compose quickstart** — _by @ayushh0110, updated 2026-04-22T16:16:04Z_
- [#26255](https://github.com/BerriAI/litellm/pull/26255) _(draft)_ **[stripe] Opus 4.7 tool search header for bedrock** — _by @colinlin-stripe, updated 2026-04-22T15:13:36Z_
- [#26254](https://github.com/BerriAI/litellm/pull/26254) **fix(cost): do not bill url_context as web_search grounding** — _by @junan-n1, updated 2026-04-22T15:08:00Z_
- [#26251](https://github.com/BerriAI/litellm/pull/26251) **fix(proxy): restore deprecated key auth cache lookups** — _by @imleooooo, updated 2026-04-22T14:41:06Z_
- [#26247](https://github.com/BerriAI/litellm/pull/26247) **fix(mcp): preserve native tools in semantic filter hook** — _by @ayushh0110, updated 2026-04-22T14:20:46Z_
- [#26246](https://github.com/BerriAI/litellm/pull/26246) **fix(anthropic): drop temperature/top_p for claude-opus-4-7** — _by @aortmann, updated 2026-04-22T14:13:03Z_
- [#26068](https://github.com/BerriAI/litellm/pull/26068) **feat(ocr): add Reducto parse OCR support** — _by @marutilai, updated 2026-04-22T13:57:53Z_
- [#26249](https://github.com/BerriAI/litellm/pull/26249) **fix(proxy): replay consumed ASGI receive messages to downstream /metrics app** — _by @42tg, updated 2026-04-22T13:16:04Z_
- [#25771](https://github.com/BerriAI/litellm/pull/25771) **feat(advisor): cross-provider orchestration + docs refresh** — _by @Sameerlite, updated 2026-04-22T12:59:58Z_
- [#26245](https://github.com/BerriAI/litellm/pull/26245) **fix(proxy): skip redundant tiktoken recount when provider supplies reasoning_tokens** — _by @dschulmeist, updated 2026-04-22T12:45:06Z_
- [#26244](https://github.com/BerriAI/litellm/pull/26244) **fix(proxy): load REDIS_* env vars when cache_params has non-connection keys** — _by @dschulmeist, updated 2026-04-22T12:26:25Z_
- [#26243](https://github.com/BerriAI/litellm/pull/26243) **fix: respect drop_params when mapping metadata.user_id to user in Responses adapter** — _by @Kcstring, updated 2026-04-22T12:13:33Z_
- [#25764](https://github.com/BerriAI/litellm/pull/25764) **fix(gemini): follow provider defaults for Gemini 3 thinking** — _by @Sameerlite, updated 2026-04-22T11:57:29Z_
- [#26236](https://github.com/BerriAI/litellm/pull/26236) **docs: remove redundant docker pull step from Docker Compose tutorial** — _by @Anai-Guo, updated 2026-04-22T10:15:46Z_
- [#26234](https://github.com/BerriAI/litellm/pull/26234) **fix(license): derive offline signature length from RSA public key** — _by @int-tt, updated 2026-04-22T10:01:10Z_
- [#26114](https://github.com/BerriAI/litellm/pull/26114) **fix(logging): create spend logs for native /v1/messages handler** — _by @Vigilans, updated 2026-04-22T10:00:57Z_
- [#26225](https://github.com/BerriAI/litellm/pull/26225) **[Fix] Proxy: reconnect Prisma DB without blocking the event loop** — _by @yuneng-berri, updated 2026-04-22T06:32:56Z_
- [#24979](https://github.com/BerriAI/litellm/pull/24979) **feat: Add Gateway API support to Helm chart (HTTPRoute)** — _by @dtherhtun, updated 2026-04-22T04:29:11Z_
- [#26222](https://github.com/BerriAI/litellm/pull/26222) **fix(anthropic): json response_format + user tools non-streaming** — _by @Sameerlite, updated 2026-04-22T04:18:26Z_
- [#26218](https://github.com/BerriAI/litellm/pull/26218) **feat(proxy): add /v1/memory CRUD endpoints** — _by @krrish-berri-2, updated 2026-04-22T03:45:50Z_
- [#26217](https://github.com/BerriAI/litellm/pull/26217) **fix: increase health check max_tokens from 1 to 16 (#23836)** — _by @hannahmadison, updated 2026-04-22T03:42:45Z_
- [#26205](https://github.com/BerriAI/litellm/pull/26205) **fix(proxy): auto-send user invitation emails when email is configured** — _by @HammerZhaoTuro, updated 2026-04-22T03:23:42Z_
- [#26174](https://github.com/BerriAI/litellm/pull/26174) **fix: coerce server_tool_use dict to ServerToolUse in stream_chunk_builder** — _by @Anai-Guo, updated 2026-04-22T03:18:22Z_
- [#26215](https://github.com/BerriAI/litellm/pull/26215) **fix(proxy): single-instance _ProxyDBLogger + guard Noma v2 payload build against concurrent mutation** — _by @bse-ai, updated 2026-04-22T03:15:47Z_
- [#24183](https://github.com/BerriAI/litellm/pull/24183) **fix: use async Redis write for cooldown on async call paths** — _by @ishaan-jaff, updated 2026-04-22T03:13:01Z_
- [#26176](https://github.com/BerriAI/litellm/pull/26176) **feat(messages): add web search response translation for /v1/messages → /v1/responses path** — _by @Vigilans, updated 2026-04-22T03:12:25Z_
- [#26129](https://github.com/BerriAI/litellm/pull/26129) **Add Openrouter Gemma 4 Entries** — _by @matt-greathouse, updated 2026-04-22T02:29:19Z_
- [#25903](https://github.com/BerriAI/litellm/pull/25903) **fix: cache list_all_params() to prevent RecursionError** — _by @ianliuy, updated 2026-04-22T01:16:34Z_
- [#19412](https://github.com/BerriAI/litellm/pull/19412) **Feature/qwen.ai OAuth provider** — _by @msexxeta, updated 2026-04-22T00:09:06Z_
- [#19435](https://github.com/BerriAI/litellm/pull/19435) **Fix duplicate root traces with langfuse_otel streaming** — _by @triple4t, updated 2026-04-22T00:09:03Z_
- [#19471](https://github.com/BerriAI/litellm/pull/19471) **fix(mcp): Add session caching to MCPClient for improved performance** — _by @ryan-crabbe, updated 2026-04-22T00:08:59Z_
- [#19487](https://github.com/BerriAI/litellm/pull/19487) **fix(ui): Fix Virtual Keys table sorting and page size issues** — _by @michelligabriele, updated 2026-04-22T00:08:58Z_


## Closed PRs (not merged)

- [#26282](https://github.com/BerriAI/litellm/pull/26282) **fix(anthropic): preserve reasoning content and add think-tag regression coverage** — _by @malafronte, closed 2026-04-22T22:57:43Z_
- [#25959](https://github.com/BerriAI/litellm/pull/25959) **feat(vertex_ai): multi-region Vertex hosts (aiplatform.*.rep.googleapis.com)** — _by @milan-berri, closed 2026-04-22T22:49:37Z_
- [#26280](https://github.com/BerriAI/litellm/pull/26280) **[Infra] Add uv dependency caching across CircleCI jobs** — _by @yuneng-berri, closed 2026-04-22T22:33:47Z_
- [#26271](https://github.com/BerriAI/litellm/pull/26271) **[Fix] Align image URL fetch with validated HTTP client in Bedrock and token counter paths** — _by @yuneng-berri, closed 2026-04-22T20:46:37Z_
- [#26265](https://github.com/BerriAI/litellm/pull/26265) **docs(release_notes): fix Skills Marketplace 404 link in v1.83.3** — _by @MukundaKatta, closed 2026-04-22T20:05:39Z_
- [#25403](https://github.com/BerriAI/litellm/pull/25403) **fix(chatgpt): preserve responses routing and recover empty output** — _by @afoninsky, closed 2026-04-22T16:27:23Z_
- [#24685](https://github.com/BerriAI/litellm/pull/24685) **feat: support Azure OpenAI container API** — _by @zooneon, closed 2026-04-22T15:57:28Z_
- [#26256](https://github.com/BerriAI/litellm/pull/26256) **Liam/usage cache control and claude code fixes 1.83.0** — _by @lrkrr, closed 2026-04-22T15:33:03Z_
- [#24731](https://github.com/BerriAI/litellm/pull/24731) **fix(proxy): restore deprecated key auth cache lookups** — _by @imleooooo, closed 2026-04-22T14:45:45Z_
- [#26238](https://github.com/BerriAI/litellm/pull/26238) **fix(azure/responses): strip non-'ctc' id from custom_tool_call input items** — _by @AleksandrLiadov, closed 2026-04-22T14:38:37Z_
- [#26223](https://github.com/BerriAI/litellm/pull/26223) **refactor(mavvrik): SRP refactor — Client, Uploader, Orchestrator, Exporter** — _by @pghuge-cloudwiz, closed 2026-04-22T05:05:15Z_
- [#24893](https://github.com/BerriAI/litellm/pull/24893) **fix: [Bug]: Health checks use max_completion_tokens=1, causing failures for GPT-5 models (#23836)** — _by @hannahmadison, closed 2026-04-22T03:36:46Z_
- [#26166](https://github.com/BerriAI/litellm/pull/26166) **fix(websearch_interception): dedupe follow-up kwargs against optional params** — _by @flobo3, closed 2026-04-22T03:16:55Z_


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`fb39683`](https://github.com/BerriAI/litellm/commit/fb39683521702145833a502c90127b0600886a9e) Merge pull request #25772 from BerriAI/litellm_wildcard_order_fallback — _@yuneng-berri_
- [`b6fdd46`](https://github.com/BerriAI/litellm/commit/b6fdd46636dcd459486fe9818ff72dfd3ca7d5ef) Merge pull request #26270 from BerriAI/litellm_/lucid-kowalevski-de832f — _@shin-berri_
- [`8340f6f`](https://github.com/BerriAI/litellm/commit/8340f6fc47ce8b06a3f1c0ece73277be8338d945) Merge pull request #26261 from BerriAI/litellm_code_quality_to_gha — _@shin-berri_
- [`41145e2`](https://github.com/BerriAI/litellm/commit/41145e22057a3d70710593fda36c48d8aa8215ee) Merge pull request #26266 from BerriAI/litellm_bedrock_guardrail_spend_logging_reapply — _@yuneng-berri_
- [`3f42295`](https://github.com/BerriAI/litellm/commit/3f42295d93ce322e45907415b53a660d06792337) [Fix] Satisfy mypy on spend buffer restore helper — _@yuneng-berri_
- [`3df9780`](https://github.com/BerriAI/litellm/commit/3df9780c0286ff89a5d94be078b62db0b15cf895) fix(core_helpers): make redact_nested_match_and_regex_keys iterative — _@milan-berri_
- [`288d403`](https://github.com/BerriAI/litellm/commit/288d4035293d8a4ed6ccff9a55376b2550e83c3c) [Fix] Preserve in-memory spend updates when Redis rpush fails — _@yuneng-berri_
- [`5445297`](https://github.com/BerriAI/litellm/commit/5445297da9fe17fafef99ff0bb118174a3d92eae) [Fix] Stabilize flaky spend accuracy tests with local ground truth — _@yuneng-berri_
- [`1b74c35`](https://github.com/BerriAI/litellm/commit/1b74c35b89ae3e537654ca67cdeeafe53e7bd449) [Infra] Move non-API-key CCI jobs to GitHub Actions — _@yuneng-berri_
- [`9577d87`](https://github.com/BerriAI/litellm/commit/9577d87158d7d3969a50e8daf0e1d1adbff6aab9) fix(proxy): guardrail header dedupe, mypy during_call, test mock kwargs — _@milan-berri_
- [`ec73507`](https://github.com/BerriAI/litellm/commit/ec735074a28502e9235773dfb3c835857233c601) fix(proxy): reapply Bedrock guardrail spend logging (#25854) — _@milan-berri_
- [`c95cac5`](https://github.com/BerriAI/litellm/commit/c95cac5d4670c3dfc31a2666546273a2169c234a) Merge pull request #26226 from BerriAI/litellm_/stoic-shamir-0ab13f — _@shin-berri_
- [`fc4fe34`](https://github.com/BerriAI/litellm/commit/fc4fe3451295e88b8254c6fb14df7bee494fce10) Merge pull request #26201 from BerriAI/litellm_prismaCacheRuntime — _@yuneng-berri_
- [`221dc2f`](https://github.com/BerriAI/litellm/commit/221dc2fb480333d6b764f4499ee5c84d8c62a400) Merge pull request #26258 from BerriAI/litellm_internal_staging — _@Sameerlite_
- [`24aec61`](https://github.com/BerriAI/litellm/commit/24aec61e4b907018c87165e2c7433235c94ef47d) Merge pull request #26049 from BerriAI/litellm_adaptive_routing — _@yuneng-berri_
- [`61fd4e9`](https://github.com/BerriAI/litellm/commit/61fd4e985e77e7e1b1937149ccb9d94361506e1d) [Infra] CCI config cleanup — dead step, filter dupe, cache keys, machine image — _@yuneng-berri_
- [`0a65d2c`](https://github.com/BerriAI/litellm/commit/0a65d2c53535d052f5350d994fdf74ee3ed09ea7) [Infra] Standardize default Python to 3.12 and remove miniconda setup — _@yuneng-berri_
- [`344be27`](https://github.com/BerriAI/litellm/commit/344be27e831aa98159e5cfaeef9b129278d90b07) [Refactor] Add start_postgres reusable command and migrate call sites — _@yuneng-berri_
- [`f490340`](https://github.com/BerriAI/litellm/commit/f490340a525fbe04ceb43c56643783a5d542cc6a) [Refactor] Add install_uv reusable command and migrate all call sites — _@yuneng-berri_
- [`439bbd2`](https://github.com/BerriAI/litellm/commit/439bbd223ba0d35270862b8b319c4c86e8c9ca11) [Infra] Clean up unused CCI jobs and pin docker images by digest — _@yuneng-berri_
- [`0e42d4c`](https://github.com/BerriAI/litellm/commit/0e42d4cb08573466374d3a8a19efa716cf9d3616) April 21st Ishaan Branch  (#26213) — _@ishaan-berri_
- [`e6897f5`](https://github.com/BerriAI/litellm/commit/e6897f55102b138d58f8bf559f3a65caeffb9dcd) add moonshot/kimi-k2.6 to model registry (#26203) — _@ishaan-berri_
- [`09cd7e3`](https://github.com/BerriAI/litellm/commit/09cd7e383eacefc62acda96857ed77e68fedeaec) Merge pull request #26211 from BerriAI/litellm_internal_staging — _@shin-berri_
- [`eebb80f`](https://github.com/BerriAI/litellm/commit/eebb80fbef988137e5a586e36a6b505b81e5e872) Merge pull request #26208 from BerriAI/litellm_individual-team-member-budgets — _@yuneng-berri_
- [`e3ed136`](https://github.com/BerriAI/litellm/commit/e3ed136f52d7d4e0d915abb4cf932f4995867945) Merge pull request #26209 from BerriAI/yj_bump_apr21_2 — _@yuneng-berri_
- [`e65d547`](https://github.com/BerriAI/litellm/commit/e65d547c4d2cea94634aac6bedd308545226c450) adding uv lock — _@yuneng-berri_
- [`5837d4a`](https://github.com/BerriAI/litellm/commit/5837d4a9acfecfbab2a4d3e5ed6ffb507989fe78) bump: version 1.83.10 → 1.83.11 — _@yuneng-berri_
- [`e50f945`](https://github.com/BerriAI/litellm/commit/e50f945ef78588b2c35b10969e65df865a539620) refactor(adaptive_router): move update_queue out of litellm.proxy — _@krrish-berri-2_
- [`5770af0`](https://github.com/BerriAI/litellm/commit/5770af00682ba4f98b5bd0c04e18937a5de1c64a) Merge branch 'litellm_internal_staging' into litellm_individual-team-member-budgets — _@shivamrawat1_
- [`27a105b`](https://github.com/BerriAI/litellm/commit/27a105bcf91aeaec7686bc6a92766465df397777) fix: give each team member an independent budget instead of sharing the team default — _@shivamrawat1_
- [`1965c67`](https://github.com/BerriAI/litellm/commit/1965c67e8fcc1b37a07f8927d838b2e300c5de22) style: black format signals.py — _@krrish-berri-2_
- [`37fc6f6`](https://github.com/BerriAI/litellm/commit/37fc6f623bb96994cd3e79ddeff6a6a6e9f0f712) fix(adaptive_router/signals): rename 'args' to 'call_args' in _signature — _@krrish-berri-2_
- [`d9494b6`](https://github.com/BerriAI/litellm/commit/d9494b69904d25b667ea1cdf0159ef5be5aab437) Merge pull request #26144 from BerriAI/litellm_post_call_non_streaming — _@yuneng-berri_
- [`f1da202`](https://github.com/BerriAI/litellm/commit/f1da202d9e971553127237e31028d592bc18ab5e) fix(adaptive_router): P1 flusher hot-reload + P2 hook accumulation + CI — _@krrish-berri-2_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
