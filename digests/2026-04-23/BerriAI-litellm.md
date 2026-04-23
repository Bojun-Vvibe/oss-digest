# BerriAI/litellm — 2026-04-23

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-22T08:51:15.545Z → 2026-04-23T08:51:15.545Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

> _v0.1: deterministic template, no LLM summary yet (see `docs/ROADMAP.md`)._

## Releases

_None in window._


## Merged PRs

- [#26306](https://github.com/BerriAI/litellm/pull/26306) **merge main** — _by @Sameerlite, merged 2026-04-23T03:09:05Z_
- [#26160](https://github.com/BerriAI/litellm/pull/26160) **fix(image_edit): forward litellm_params to validate_environment for Vertex AI credentials** — _by @Sameerlite, merged 2026-04-23T03:06:01Z_
- [#26298](https://github.com/BerriAI/litellm/pull/26298) **[Infra] Promote interal staging to main** — _by @yuneng-berri, merged 2026-04-23T02:16:24Z_
- [#25672](https://github.com/BerriAI/litellm/pull/25672) **Feat(dashscope): add image generation support for qwen-image-2.0 and qwen-image-2.0-pro** — _by @Alpha-Zark, merged 2026-04-23T03:03:46Z_
- [#26305](https://github.com/BerriAI/litellm/pull/26305) **merge main** — _by @Sameerlite, merged 2026-04-23T03:02:29Z_
- [#26303](https://github.com/BerriAI/litellm/pull/26303) **merge main** — _by @Sameerlite, merged 2026-04-23T03:00:54Z_
- [#26304](https://github.com/BerriAI/litellm/pull/26304) **merge main** — _by @Sameerlite, merged 2026-04-23T03:01:33Z_
- [#26301](https://github.com/BerriAI/litellm/pull/26301) **merge main** — _by @Sameerlite, merged 2026-04-23T03:00:10Z_
- [#25793](https://github.com/BerriAI/litellm/pull/25793) **refactor: replace substring check with startswith in is_model_gpt_5_model** — _by @BraulioV, merged 2026-04-23T02:55:00Z_
- [#24457](https://github.com/BerriAI/litellm/pull/24457) **fix(anthropic): handle tool_choice type 'none' in messages API** — _by @BillionClaw, merged 2026-04-23T02:36:18Z_
- [#25789](https://github.com/BerriAI/litellm/pull/25789) **fix(ui): stale filters applied after sort/page/time change on Request…** — _by @Bytechoreographer, merged 2026-04-23T02:41:34Z_
- [#25788](https://github.com/BerriAI/litellm/pull/25788) **fix(ui): Fetch button ignores active filters on Request Logs page** — _by @Bytechoreographer, merged 2026-04-23T02:39:24Z_
- [#25948](https://github.com/BerriAI/litellm/pull/25948) **fix(ovhcloud): Fix tool calling not working** — _by @eliasto, merged 2026-04-23T02:33:58Z_
- [#25883](https://github.com/BerriAI/litellm/pull/25883) **feat(messages): map reasoning_auto_summary to thinking.display for native /v1/messages** — _by @Vigilans, merged 2026-04-23T02:29:58Z_
- [#26117](https://github.com/BerriAI/litellm/pull/26117) **fix(mcp_semantic_tool_filter): match tools with client-side namespace prefix (#26078)** — _by @sakenuGOD, merged 2026-04-23T02:06:35Z_
- [#26228](https://github.com/BerriAI/litellm/pull/26228) **fix(anthropic): skip non-OpenAI file content blocks in file-id discovery helpers** — _by @anmolg1997, merged 2026-04-23T02:22:38Z_
- [#26111](https://github.com/BerriAI/litellm/pull/26111) **fix(adapter): normalize reasoning effort with graceful degradation** — _by @Vigilans, merged 2026-04-23T02:19:55Z_
- [#26295](https://github.com/BerriAI/litellm/pull/26295) **[Infra] bump versions ** — _by @yuneng-berri, merged 2026-04-23T01:33:03Z_
- [#26290](https://github.com/BerriAI/litellm/pull/26290) **[Fix] Stabilize spend accuracy test transport flakes** — _by @yuneng-berri, merged 2026-04-23T01:30:11Z_
- [#26195](https://github.com/BerriAI/litellm/pull/26195) **Track per-member total spend on team memberships** — _by @ryan-crabbe-berri, merged 2026-04-23T01:20:16Z_
- [#26268](https://github.com/BerriAI/litellm/pull/26268) **fix(docker.non_root): use numeric UID 65534 for K8s runAsNonRoot** — _by @michelligabriele, merged 2026-04-23T01:00:05Z_
- [#26287](https://github.com/BerriAI/litellm/pull/26287) **[Fix] Enforce format constraints on provider URL parameters** — _by @yuneng-berri, merged 2026-04-23T00:30:42Z_
- [#26219](https://github.com/BerriAI/litellm/pull/26219) **fix(chatgpt): preserve responses routing and recover empty output** — _by @krrish-berri-2, merged 2026-04-22T03:46:19Z_
- [#26283](https://github.com/BerriAI/litellm/pull/26283) **Sync litellm_staging_03_22_2026 with litellm_internal_staging** — _by @Chesars, merged 2026-04-22T22:55:27Z_
- [#25772](https://github.com/BerriAI/litellm/pull/25772) **fix(router): wildcard order fallback to higher-order deployments** — _by @Sameerlite, merged 2026-04-22T22:05:15Z_
- [#26270](https://github.com/BerriAI/litellm/pull/26270) **[Fix] Stabilize flaky spend accuracy tests + patch Redis buffer data-loss path** — _by @yuneng-berri, merged 2026-04-22T22:02:25Z_


## Open PRs (new or updated)

- [#21887](https://github.com/BerriAI/litellm/pull/21887) **Feat(guardrail): Adding support for custom Ovalix guardrail** — _by @shalom-ovalix, updated 2026-04-23T08:31:21Z_
- [#26314](https://github.com/BerriAI/litellm/pull/26314) **[Fix] Image edit: reject string values for file parameters** — _by @yuneng-berri, updated 2026-04-23T07:11:05Z_
- [#26278](https://github.com/BerriAI/litellm/pull/26278) **[Fix] Extend request body param controls to cover cloud provider identity fields** — _by @yuneng-berri, updated 2026-04-23T07:08:27Z_
- [#26188](https://github.com/BerriAI/litellm/pull/26188) **chore(deps): bump python-dotenv from 1.0.1 to 1.2.2** — _by @dependabot[bot], updated 2026-04-23T05:41:18Z_
- [#25933](https://github.com/BerriAI/litellm/pull/25933) **fix(utils): avoid pydantic serializer warnings in validate_and_fix_openai_messages** — _by @Christian-Sidak, updated 2026-04-23T05:33:45Z_
- [#26175](https://github.com/BerriAI/litellm/pull/26175) **✨ feat(assets): add dashscope provider logo** — _by @danielaskdd, updated 2026-04-23T05:29:35Z_
- [#26286](https://github.com/BerriAI/litellm/pull/26286) **[Infra] CCI: cache, cleanup, anchors, install-path parity, Python 3.12, Ruby/Node pins** — _by @yuneng-berri, updated 2026-04-23T05:25:03Z_
- [#26310](https://github.com/BerriAI/litellm/pull/26310) **fix(cost_calculator.py): fix AttributeError in _get_usage_object for streaming responses** — _by @EaCognitive, updated 2026-04-23T05:24:45Z_
- [#25712](https://github.com/BerriAI/litellm/pull/25712) **feat(router): expose x-litellm-fallback-model-used header in responses** — _by @ajhalaria-godaddy, updated 2026-04-23T04:59:00Z_
- [#25249](https://github.com/BerriAI/litellm/pull/25249) **refactor(predibase): migrate transform_request and transform_response…** — _by @Jerry-SDE, updated 2026-04-23T04:55:42Z_
- [#26210](https://github.com/BerriAI/litellm/pull/26210) **[WIP] - Update dev_config.yaml and Helm chart dependencies for performance-eks** — _by @harish-berri, updated 2026-04-23T04:49:44Z_
- [#25767](https://github.com/BerriAI/litellm/pull/25767) **feat: Expand VideoMetadata support to all Gemini Models.** — _by @vinhphamhuu-ct, updated 2026-04-23T04:08:48Z_
- [#23971](https://github.com/BerriAI/litellm/pull/23971) **fix(bedrock): preserve output_config.effort for Claude 4.6 on Invoke API** — _by @KevinZhao, updated 2026-04-23T03:54:48Z_
- [#26288](https://github.com/BerriAI/litellm/pull/26288) **Evals [Beta] - LLM-judge evaluations as a first-class feature on the AI Gateway** — _by @ishaan-berri, updated 2026-04-23T03:51:29Z_
- [#26274](https://github.com/BerriAI/litellm/pull/26274) **fix(mcp): harden OAuth authorize/token endpoints (BYOK + discoverable)** — _by @stuxf, updated 2026-04-23T03:47:02Z_
- [#26307](https://github.com/BerriAI/litellm/pull/26307) **cookbook: routing to a custom fine-tuned GGUF model via Ollama** — _by @rudi193-cmd, updated 2026-04-23T03:21:03Z_
- [#25935](https://github.com/BerriAI/litellm/pull/25935) **fix(anthropic): strip Gemini thought suffix from streaming tool_use id** — _by @Sameerlite, updated 2026-04-23T03:18:39Z_
- [#26279](https://github.com/BerriAI/litellm/pull/26279) _(draft)_ **fix(auth): centralize common_checks to close authorization bypass** — _by @stuxf, updated 2026-04-23T03:17:53Z_
- [#26161](https://github.com/BerriAI/litellm/pull/26161) **fix(router): constrain same-name deployment routing by access groups** — _by @Sameerlite, updated 2026-04-23T03:12:16Z_
- [#25359](https://github.com/BerriAI/litellm/pull/25359) **feat(openai): add route_all_chat_openai_to_responses global flag** — _by @Sameerlite, updated 2026-04-23T03:10:31Z_
- [#26300](https://github.com/BerriAI/litellm/pull/26300) **Litellm oss staging 04 22 2026** — _by @krrish-berri-2, updated 2026-04-23T03:08:27Z_
- [#25346](https://github.com/BerriAI/litellm/pull/25346) **feat(responses): add use_chat_completions_api flag for openai/ models with custom api_base** — _by @Sameerlite, updated 2026-04-23T03:06:36Z_
- [#25627](https://github.com/BerriAI/litellm/pull/25627) **feat(vertex-ai): transform batch prediction outputs to OpenAI format** — _by @Sameerlite, updated 2026-04-23T03:06:21Z_
- [#25499](https://github.com/BerriAI/litellm/pull/25499) **feat(vertex_ai): propagate metadata labels to embedding, Imagen, rerank** — _by @Sameerlite, updated 2026-04-23T03:05:57Z_
- [#26302](https://github.com/BerriAI/litellm/pull/26302) **fix: Fix Redis Sentinel client handling to solve authentication error…** — _by @krrish-berri-2, updated 2026-04-23T03:05:12Z_
- [#26299](https://github.com/BerriAI/litellm/pull/26299) _(draft)_ **[Test] Skip provider env/account failures to reduce CCI flakiness (3 flaky tests)** — _by @yuneng-berri, updated 2026-04-23T02:45:54Z_
- [#24086](https://github.com/BerriAI/litellm/pull/24086) **feat(guardrails): add OpenGuardrails integration** — _by @thomas-security, updated 2026-04-23T02:37:21Z_
- [#25964](https://github.com/BerriAI/litellm/pull/25964) **fix: degrade gracefully when RedisSemanticCache init fails instead of crashing proxy** — _by @VANDRANKI, updated 2026-04-23T02:33:00Z_
- [#26269](https://github.com/BerriAI/litellm/pull/26269) **Fix bedrock claude 4.6 effort** — _by @jtsaw, updated 2026-04-23T02:23:56Z_
- [#26297](https://github.com/BerriAI/litellm/pull/26297) **fix: skip personal spend update for team key calls** — _by @octo-patch, updated 2026-04-23T02:04:54Z_
- [#26296](https://github.com/BerriAI/litellm/pull/26296) **[WIP] Litellm bedrock passthrough unified perf** — _by @harish-berri, updated 2026-04-23T01:56:29Z_
- [#26293](https://github.com/BerriAI/litellm/pull/26293) **[Fix] Image edit endpoints: enforce multipart-only file inputs** — _by @yuneng-berri, updated 2026-04-23T01:54:09Z_
- [#25534](https://github.com/BerriAI/litellm/pull/25534) **chore(deps): bump pypdf from 6.9.2 to 6.10.0** — _by @dependabot[bot], updated 2026-04-23T01:44:29Z_
- [#26291](https://github.com/BerriAI/litellm/pull/26291) **Add manual test endpoint for team-submitted guardrails** — _by @shivamrawat1, updated 2026-04-23T01:40:09Z_
- [#25662](https://github.com/BerriAI/litellm/pull/25662) **chore(deps): bump aiohttp from 3.13.3 to 3.13.4** — _by @dependabot[bot], updated 2026-04-23T01:36:25Z_
- [#26207](https://github.com/BerriAI/litellm/pull/26207) **Surface per-member budget cycle in Teams > Members tab** — _by @ryan-crabbe-berri, updated 2026-04-23T01:32:50Z_
- [#26164](https://github.com/BerriAI/litellm/pull/26164) **feat(fireworks_ai, moonshot): add kimi-k2.6 / kimi-k2p6 with tool_choice support** — _by @Anai-Guo, updated 2026-04-23T01:22:41Z_
- [#26292](https://github.com/BerriAI/litellm/pull/26292) **fix(responses_api): add aclose() to streaming iterator to prevent con…** — _by @alighazi288, updated 2026-04-23T01:15:09Z_
- [#26294](https://github.com/BerriAI/litellm/pull/26294) **[WIP] Add flags that remove unneeded imports** — _by @Michael-RZ-Berri, updated 2026-04-23T01:14:23Z_
- [#26263](https://github.com/BerriAI/litellm/pull/26263) _(draft)_ **Fix: Key/Team router_settings routing_strategy not applied on requests** — _by @hiimluck3r, updated 2026-04-23T00:56:24Z_
- [#26284](https://github.com/BerriAI/litellm/pull/26284) **[WIP] Lint url encodings** — _by @Michael-RZ-Berri, updated 2026-04-23T00:40:54Z_
- [#16588](https://github.com/BerriAI/litellm/pull/16588) **feat(opentelemetry): Respect `log_raw_request_response` setting** — _by @AlanPonnachan, updated 2026-04-23T00:14:14Z_
- [#26289](https://github.com/BerriAI/litellm/pull/26289) **[WIP] Reformat request parameters** — _by @Michael-RZ-Berri, updated 2026-04-23T00:14:09Z_
- [#17495](https://github.com/BerriAI/litellm/pull/17495) **Fix: Redis semantic cache v2 with CacheEmbedding support** — _by @fcenedes, updated 2026-04-23T00:14:09Z_
- [#19474](https://github.com/BerriAI/litellm/pull/19474) **fix: [Bug] Support for Amazon Nova Tool Calling - nova_grounding** — _by @juhiechandra, updated 2026-04-23T00:13:39Z_
- [#19547](https://github.com/BerriAI/litellm/pull/19547) **feat: Add Firmware.ai provider** — _by @b3nw, updated 2026-04-23T00:13:34Z_
- [#26285](https://github.com/BerriAI/litellm/pull/26285) **fix(anthropic): preserve reasoning content and add think-tag regression coverage** — _by @malafronte, updated 2026-04-23T00:12:37Z_
- [#26165](https://github.com/BerriAI/litellm/pull/26165) _(draft)_ **chore: ignore experimental UI build output and refresh lockfiles** — _by @dizhaky, updated 2026-04-22T23:22:36Z_
- [#24374](https://github.com/BerriAI/litellm/pull/24374) **Litellm staging 03 22 2026** — _by @Chesars, updated 2026-04-22T23:17:03Z_
- [#26281](https://github.com/BerriAI/litellm/pull/26281) **feat(vertex_ai): multi-region Vertex hosts (aiplatform.*.rep.googleapis.com)** — _by @milan-berri, updated 2026-04-22T22:55:00Z_
- [#26177](https://github.com/BerriAI/litellm/pull/26177) **fix(ollama): prefer explicit api_base** — _by @MukundaKatta, updated 2026-04-22T22:16:08Z_
- [#26277](https://github.com/BerriAI/litellm/pull/26277) **chore(deps): bump uuid from 9.0.1 to 14.0.0 in /docs/my-website** — _by @dependabot[bot], updated 2026-04-22T21:58:30Z_
- [#26262](https://github.com/BerriAI/litellm/pull/26262) **fix(proxy): invoke post-call guardrails on pass-through endpoint responses (#20270)** — _by @tuhinspatra, updated 2026-04-22T21:58:26Z_


## Closed PRs (not merged)

- [#25230](https://github.com/BerriAI/litellm/pull/25230) **fix(proxy/presidio): stabilize output_parse_pii and user_config routing** — _by @shchu, closed 2026-04-23T08:31:53Z_
- [#26313](https://github.com/BerriAI/litellm/pull/26313) **[Fix] Image edit: reject string values for file parameters** — _by @yuneng-berri, closed 2026-04-23T07:08:15Z_
- [#26308](https://github.com/BerriAI/litellm/pull/26308) **fix(cost_calculator.py): fix AttributeError in _get_usage_object for streaming responses** — _by @EaCognitive, closed 2026-04-23T04:05:00Z_
- [#26311](https://github.com/BerriAI/litellm/pull/26311) **[Infra] CCI: remove dead steps accumulated across jobs** — _by @yuneng-berri, closed 2026-04-23T04:18:14Z_
- [#26206](https://github.com/BerriAI/litellm/pull/26206) **fix(cost_calculator.py): fix AttributeError in _get_usage_object for streaming responses (ref: fix-anthropic-streaming-cost-attributeerror)** — _by @EaCognitive, closed 2026-04-22T23:20:59Z_
- [#25574](https://github.com/BerriAI/litellm/pull/25574) **fix(router): support Responses API 'input' field in complexity and au…** — _by @Jerry-SDE, closed 2026-04-23T02:59:59Z_
- [#25120](https://github.com/BerriAI/litellm/pull/25120) **fix(proxy): map output_config.effort to reasoning_effort for non-Anthropic providers** — _by @glaziermag, closed 2026-04-23T02:20:01Z_
- [#26229](https://github.com/BerriAI/litellm/pull/26229) **Fix/streaming cost injection alias resolution test** — _by @positiveblue, closed 2026-04-23T01:56:37Z_
- [#26273](https://github.com/BerriAI/litellm/pull/26273) **fix(responses_api): add aclose() to streaming iterator to prevent conection leaks.** — _by @alighazi288, closed 2026-04-23T00:56:06Z_
- [#17298](https://github.com/BerriAI/litellm/pull/17298) **Add Claude Code provider integration** — _by @mkavinkumar1, closed 2026-04-23T00:14:11Z_
- [#18083](https://github.com/BerriAI/litellm/pull/18083) **[Fix] Redact user API key info in S3 logger metadata** — _by @shivamrawat1, closed 2026-04-23T00:14:05Z_
- [#18304](https://github.com/BerriAI/litellm/pull/18304) **Redact user API key info from standardloggingpayload for all the loggers** — _by @shivamrawat1, closed 2026-04-23T00:14:04Z_
- [#18838](https://github.com/BerriAI/litellm/pull/18838) **[Testing] reverted to python:lastest-dev from Wolfi** — _by @shivamrawat1, closed 2026-04-23T00:14:01Z_
- [#18866](https://github.com/BerriAI/litellm/pull/18866) **fix(rate-limiter): correctly count tokens for /v1/responses endpoint …** — _by @Harshit28j, closed 2026-04-23T00:13:59Z_
- [#18879](https://github.com/BerriAI/litellm/pull/18879) **[Bug] double counting fix to proxy_total-requests metric** — _by @shivamrawat1, closed 2026-04-23T00:13:58Z_
- [#18965](https://github.com/BerriAI/litellm/pull/18965) **Add support for JSON-configured providers** — _by @jerryan999, closed 2026-04-23T00:13:57Z_
- [#19145](https://github.com/BerriAI/litellm/pull/19145) **Feature - Add Gemini Code Assist support to Vertex AI integration** — _by @jutaz, closed 2026-04-23T00:13:52Z_
- [#19161](https://github.com/BerriAI/litellm/pull/19161) **add message helper functions for mixed TypedDict/Pydantic lists** — _by @theonlypal, closed 2026-04-23T00:13:48Z_
- [#26282](https://github.com/BerriAI/litellm/pull/26282) **fix(anthropic): preserve reasoning content and add think-tag regression coverage** — _by @malafronte, closed 2026-04-22T22:57:43Z_
- [#25959](https://github.com/BerriAI/litellm/pull/25959) **feat(vertex_ai): multi-region Vertex hosts (aiplatform.*.rep.googleapis.com)** — _by @milan-berri, closed 2026-04-22T22:49:37Z_
- [#26280](https://github.com/BerriAI/litellm/pull/26280) **[Infra] Add uv dependency caching across CircleCI jobs** — _by @yuneng-berri, closed 2026-04-22T22:33:47Z_


## Notable Issues

- [#26316](https://github.com/BerriAI/litellm/issues/26316) **gpt-image-2 issue** _[llm translation]_ — _by @wenlong-ihoment_
- [#26315](https://github.com/BerriAI/litellm/issues/26315) **Add "saaras:v3" in "model_prices_and_context_window.json"** — _by @AravindhPandiyan_
- [#26232](https://github.com/BerriAI/litellm/issues/26232) **[Bug]: support gpt-image-2** _[bug, proxy, llm translation]_ — _by @superpoussin22_
- [#26312](https://github.com/BerriAI/litellm/issues/26312) **Model alias for team can not be viewed via the UI or the API after creation.** — _by @ensean_
- [#26252](https://github.com/BerriAI/litellm/issues/26252) **websearch_interception does not fire for Claude Code + Bedrock pass-through; PR #25242 would fix the root cause but introduces a new Bedrock skip that re-breaks it** _[llm translation, claude code]_ — _by @jonathan-nicoletti_
- [#26309](https://github.com/BerriAI/litellm/issues/26309) **[Bug]:  `chatgpt/gpt-5.4` throw exception when stream is `false`** _[bug, proxy]_ — _by @KAIYOHUGO_
- [#12685](https://github.com/BerriAI/litellm/issues/12685) **[Bug]: Heavy RAM Usage over time** _[bug]_ — _by @TSJasonH_ _(closed 2026-03-20T18:40:04Z)_
- [#21691](https://github.com/BerriAI/litellm/issues/21691) **[Bug]: Can't authenticate to vertex ai image generation models through v1/images/edits** _[bug, proxy, llm translation]_ — _by @jasper-war_ _(closed 2026-04-23T03:06:02Z)_
- [#20482](https://github.com/BerriAI/litellm/issues/20482) **[Bug]: LiteLLM Proxy {+request log) shows ProxyException instead of unauthenticated when using config-defined models** _[bug, proxy, llm translation]_ — _by @FuxMak_
- [#8448](https://github.com/BerriAI/litellm/issues/8448) **[Bug]: not handling 429's from OpenRouter** _[bug, stale]_ — _by @jamesbraza_
- [#11487](https://github.com/BerriAI/litellm/issues/11487) **[Bug]: FileNotFoundError for custom_callbacks.py when deploying via Helm (works with Docker)** _[bug, stale]_ — _by @luisgfelipeg_ _(closed 2026-04-23T00:14:22Z)_
- [#12680](https://github.com/BerriAI/litellm/issues/12680) **[Bug]: Link to documentation fallback for context doest' not exists** _[bug, stale]_ — _by @Mte90_ _(closed 2026-04-23T00:14:21Z)_
- [#13668](https://github.com/BerriAI/litellm/issues/13668) **[Bug]: Health Check internal key showing high spend** _[bug, mlops user request, stale]_ — _by @anengineerdude_
- [#16465](https://github.com/BerriAI/litellm/issues/16465) **[Feature]: prevent `raw_gen_ai_request` creation in Opentelemtry** _[enhancement, stale]_ — _by @jakob-squadformers_
- [#17327](https://github.com/BerriAI/litellm/issues/17327) **[Bug]: update session events scheme openai realtime** _[bug, llm translation, stale]_ — _by @mubashir1osmani_ _(closed 2026-04-23T00:14:10Z)_
- [#18068](https://github.com/BerriAI/litellm/issues/18068) **[Bug]: Bedrock file/document uploads fail with 'Unsupported image type' error for PDFs and other documents** _[bug, llm translation, stale, SDK]_ — _by @pingu1m_
- [#19028](https://github.com/BerriAI/litellm/issues/19028) **[Bug]: Under open ai style calls, the chunk returned by Anthropic for tool usage is invalid JSON.** _[bug, llm translation, stale, SDK]_ — _by @longxaing_ _(closed 2026-04-23T00:13:56Z)_
- [#19072](https://github.com/BerriAI/litellm/issues/19072) **[Feature]: Make global login session duration configurable via environment variable** _[enhancement, stale]_ — _by @rainiskr7_ _(closed 2026-04-23T00:13:55Z)_


## Commits on `litellm_internal_staging`

- [`63ba912`](https://github.com/BerriAI/litellm/commit/63ba912b47760548a070b8ee225f5054dabf08f0) Merge pull request #26160 from BerriAI/litellm_vertex_image_edit_credentials_fix — _@Sameerlite_
- [`6a25866`](https://github.com/BerriAI/litellm/commit/6a25866f512035bf76e8089a4438125907d957ff) Merge pull request #26295 from BerriAI/yj_bump_apr22 — _@yuneng-berri_
- [`8bc6948`](https://github.com/BerriAI/litellm/commit/8bc6948a5e88c08c989574b1980086ef6236daf7) Merge pull request #26290 from BerriAI/litellm_/bold-goldstine-b86b67 — _@yuneng-berri_
- [`95fa767`](https://github.com/BerriAI/litellm/commit/95fa7678afb9d960d4b134fdf0d655491734f67b) uv lock — _@yuneng-berri_
- [`9f46d83`](https://github.com/BerriAI/litellm/commit/9f46d838fd348146add15ba12dd3d2a68bbb0c13) bump: version 1.83.11 → 1.83.12 — _@yuneng-berri_
- [`3ddb3cb`](https://github.com/BerriAI/litellm/commit/3ddb3cbdf61071506b2289e1604ace38816a632e) bump: version 0.4.67 → 0.4.68 — _@yuneng-berri_
- [`c4c1861`](https://github.com/BerriAI/litellm/commit/c4c18613897300c67e39ce37ae7acbe74c7506de) Merge pull request #26195 from BerriAI/litellm_team_member_total_spend — _@ryan-crabbe-berri_
- [`c67d193`](https://github.com/BerriAI/litellm/commit/c67d193400eb05779384196fd170079372ad0e56) fix(docker.non_root): use numeric UID 65534 for K8s runAsNonRoot (#26268) — _@michelligabriele_
- [`a292845`](https://github.com/BerriAI/litellm/commit/a292845dcf7d4929b5b842171b659ed31a86b4c8) [Fix] Harden spend accuracy test against transient aiohttp connection errors — _@yuneng-berri_
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


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.1 deterministic template._
