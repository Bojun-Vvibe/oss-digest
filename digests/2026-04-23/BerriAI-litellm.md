# BerriAI/litellm — 2026-04-23

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-22T23:59:59.000Z → 2026-04-23T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

> _Deterministic template only — no LLM summary for this run._

## Releases

_None in window._


## Merged PRs

- [#26336](https://github.com/BerriAI/litellm/pull/26336) **[IInfra] Merge dev branch** — _by @yuneng-berri, merged 2026-04-23T19:02:48Z_
- [#23971](https://github.com/BerriAI/litellm/pull/23971) **fix(bedrock): preserve output_config.effort for Claude 4.6 on Invoke API** — _by @KevinZhao, merged 2026-04-23T18:41:03Z_
- [#26293](https://github.com/BerriAI/litellm/pull/26293) **[Fix] Image edit endpoints: enforce multipart-only file inputs** — _by @yuneng-berri, merged 2026-04-23T16:42:04Z_
- [#26286](https://github.com/BerriAI/litellm/pull/26286) **[Infra] CCI: cache, cleanup, anchors, install-path parity, Python 3.12, Ruby/Node pins** — _by @yuneng-berri, merged 2026-04-23T16:39:06Z_
- [#26300](https://github.com/BerriAI/litellm/pull/26300) **Litellm oss staging 04 22 2026** — _by @krrish-berri-2, merged 2026-04-23T13:23:58Z_
- [#25767](https://github.com/BerriAI/litellm/pull/25767) **feat: Expand VideoMetadata support to all Gemini Models.** — _by @vinhphamhuu-ct, merged 2026-04-23T11:50:01Z_
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


## Open PRs (new or updated)

- [#26342](https://github.com/BerriAI/litellm/pull/26342) **[Infra] Add standalone create-release-branch workflow** — _by @yuneng-berri, updated 2026-04-23T19:09:38Z_
- [#26204](https://github.com/BerriAI/litellm/pull/26204) **Fix bugs that bypasses per-team member budget limit** — _by @Michael-RZ-Berri, updated 2026-04-23T19:08:30Z_
- [#25923](https://github.com/BerriAI/litellm/pull/25923) **feat(chatgpt, github_copilot): OAuth sign-in + token refresh in proxy UI** — _by @jmcook, updated 2026-04-23T19:07:38Z_
- [#26294](https://github.com/BerriAI/litellm/pull/26294) **[WIP] Add flags that remove unneeded imports** — _by @Michael-RZ-Berri, updated 2026-04-23T19:04:56Z_
- [#26278](https://github.com/BerriAI/litellm/pull/26278) **[Fix] Extend request body param controls to cover cloud provider identity fields** — _by @yuneng-berri, updated 2026-04-23T19:02:50Z_
- [#26341](https://github.com/BerriAI/litellm/pull/26341) _(draft)_ **docs: add NoPII compatible-endpoint provider page** — _by @evdevlead, updated 2026-04-23T19:00:14Z_
- [#26340](https://github.com/BerriAI/litellm/pull/26340) **fix(key_management): enforce upperbound_key_generate_params on /key/regenerate** — _by @michelligabriele, updated 2026-04-23T18:57:09Z_
- [#26216](https://github.com/BerriAI/litellm/pull/26216) **Litellm oss staging 04 21 2026** — _by @krrish-berri-2, updated 2026-04-23T18:54:20Z_
- [#25353](https://github.com/BerriAI/litellm/pull/25353) **Add LTX Video API support** — _by @matt-greathouse, updated 2026-04-23T18:26:22Z_
- [#26068](https://github.com/BerriAI/litellm/pull/26068) **feat(ocr): add Reducto parse OCR support** — _by @marutilai, updated 2026-04-23T18:20:42Z_
- [#26338](https://github.com/BerriAI/litellm/pull/26338) **feat(mcp): resolve team/key MCP permissions by name or alias** — _by @ryan-crabbe-berri, updated 2026-04-23T18:20:21Z_
- [#26218](https://github.com/BerriAI/litellm/pull/26218) **feat(proxy): add /v1/memory CRUD endpoints** — _by @krrish-berri-2, updated 2026-04-23T18:19:37Z_
- [#26331](https://github.com/BerriAI/litellm/pull/26331) **feat(openai): add gpt-image-2 to model prices** — _by @Kcstring, updated 2026-04-23T18:17:41Z_
- [#26285](https://github.com/BerriAI/litellm/pull/26285) **fix(anthropic): preserve reasoning content and add think-tag regression coverage** — _by @malafronte, updated 2026-04-23T17:57:14Z_
- [#25177](https://github.com/BerriAI/litellm/pull/25177) **feat(oci): official OCI Generative AI integration — production-ready chat, embeddings & tool use across all model families** — _by @fede-kamel, updated 2026-04-23T17:47:20Z_
- [#25964](https://github.com/BerriAI/litellm/pull/25964) **fix: degrade gracefully when RedisSemanticCache init fails instead of crashing proxy** — _by @VANDRANKI, updated 2026-04-23T17:46:46Z_
- [#26128](https://github.com/BerriAI/litellm/pull/26128) **Add Openrouter Gemini 3 Image Entries** — _by @matt-greathouse, updated 2026-04-23T17:46:15Z_
- [#24986](https://github.com/BerriAI/litellm/pull/24986) **fix(mcp): preserve non-MCP tools in semantic filter** — _by @klhq, updated 2026-04-23T17:42:16Z_
- [#26129](https://github.com/BerriAI/litellm/pull/26129) **Add Openrouter Gemma 4 Entries** — _by @matt-greathouse, updated 2026-04-23T14:05:36Z_
- [#26329](https://github.com/BerriAI/litellm/pull/26329) **fix(proxy): avoid blocking event loop by killing engine instead of disconnecting** — _by @dschulmeist, updated 2026-04-23T13:50:31Z_
- [#26076](https://github.com/BerriAI/litellm/pull/26076) **feat(vertex_ai): Model Garden OpenAPI for publisher model ids** — _by @Sameerlite, updated 2026-04-23T13:19:23Z_
- [#25968](https://github.com/BerriAI/litellm/pull/25968) **docs: fixed bedrock prompt caching explanation** — _by @CyrilDesch, updated 2026-04-23T13:05:31Z_
- [#26319](https://github.com/BerriAI/litellm/pull/26319) **fix(reset_budget_job): use query_raw to filter budget_limits IS NOT NULL** — _by @danielaskdd, updated 2026-04-23T12:40:54Z_
- [#26263](https://github.com/BerriAI/litellm/pull/26263) _(draft)_ **Fix: Key/Team router_settings routing_strategy not applied on requests** — _by @hiimluck3r, updated 2026-04-23T12:39:23Z_
- [#26327](https://github.com/BerriAI/litellm/pull/26327) **fix(responses): normalize bridged object field** — _by @Sameerlite, updated 2026-04-23T11:26:04Z_
- [#21887](https://github.com/BerriAI/litellm/pull/21887) **Feat(guardrail): Adding support for custom Ovalix guardrail** — _by @shalom-ovalix, updated 2026-04-23T10:12:23Z_
- [#26325](https://github.com/BerriAI/litellm/pull/26325) **feat(auth): add scope and wildcard support for JWT routing overrides** — _by @milan-berri, updated 2026-04-23T10:05:46Z_
- [#26321](https://github.com/BerriAI/litellm/pull/26321) **fix(anthropic-messages): apply top-level additional_drop_params on /v1/messages** — _by @Llugaes, updated 2026-04-23T09:43:18Z_
- [#26318](https://github.com/BerriAI/litellm/pull/26318) **fix(proxy): share temporary MCP OAuth sessions across instances via Redis** — _by @milan-berri, updated 2026-04-23T09:11:38Z_
- [#26317](https://github.com/BerriAI/litellm/pull/26317) **fix(redis): cache GCP IAM token to prevent async event loop blocking** — _by @MaximeBOUDIER, updated 2026-04-23T09:09:08Z_
- [#26188](https://github.com/BerriAI/litellm/pull/26188) **chore(deps): bump python-dotenv from 1.0.1 to 1.2.2** — _by @dependabot[bot], updated 2026-04-23T05:41:18Z_
- [#25933](https://github.com/BerriAI/litellm/pull/25933) **fix(utils): avoid pydantic serializer warnings in validate_and_fix_openai_messages** — _by @Christian-Sidak, updated 2026-04-23T05:33:45Z_
- [#26175](https://github.com/BerriAI/litellm/pull/26175) **✨ feat(assets): add dashscope provider logo** — _by @danielaskdd, updated 2026-04-23T05:29:35Z_
- [#26310](https://github.com/BerriAI/litellm/pull/26310) **fix(cost_calculator.py): fix AttributeError in _get_usage_object for streaming responses** — _by @EaCognitive, updated 2026-04-23T05:24:45Z_
- [#25712](https://github.com/BerriAI/litellm/pull/25712) **feat(router): expose x-litellm-fallback-model-used header in responses** — _by @ajhalaria-godaddy, updated 2026-04-23T04:59:00Z_
- [#25249](https://github.com/BerriAI/litellm/pull/25249) **refactor(predibase): migrate transform_request and transform_response…** — _by @Jerry-SDE, updated 2026-04-23T04:55:42Z_
- [#26210](https://github.com/BerriAI/litellm/pull/26210) **[WIP] - Update dev_config.yaml and Helm chart dependencies for performance-eks** — _by @harish-berri, updated 2026-04-23T04:49:44Z_
- [#26288](https://github.com/BerriAI/litellm/pull/26288) **Evals [Beta] - LLM-judge evaluations as a first-class feature on the AI Gateway** — _by @ishaan-berri, updated 2026-04-23T03:51:29Z_
- [#26274](https://github.com/BerriAI/litellm/pull/26274) **fix(mcp): harden OAuth authorize/token endpoints (BYOK + discoverable)** — _by @stuxf, updated 2026-04-23T03:47:02Z_
- [#26307](https://github.com/BerriAI/litellm/pull/26307) **cookbook: routing to a custom fine-tuned GGUF model via Ollama** — _by @rudi193-cmd, updated 2026-04-23T03:21:03Z_
- [#25935](https://github.com/BerriAI/litellm/pull/25935) **fix(anthropic): strip Gemini thought suffix from streaming tool_use id** — _by @Sameerlite, updated 2026-04-23T03:18:39Z_
- [#26279](https://github.com/BerriAI/litellm/pull/26279) _(draft)_ **fix(auth): centralize common_checks to close authorization bypass** — _by @stuxf, updated 2026-04-23T03:17:53Z_
- [#26161](https://github.com/BerriAI/litellm/pull/26161) **fix(router): constrain same-name deployment routing by access groups** — _by @Sameerlite, updated 2026-04-23T03:12:16Z_
- [#25359](https://github.com/BerriAI/litellm/pull/25359) **feat(openai): add route_all_chat_openai_to_responses global flag** — _by @Sameerlite, updated 2026-04-23T03:10:31Z_
- [#25346](https://github.com/BerriAI/litellm/pull/25346) **feat(responses): add use_chat_completions_api flag for openai/ models with custom api_base** — _by @Sameerlite, updated 2026-04-23T03:06:36Z_
- [#25627](https://github.com/BerriAI/litellm/pull/25627) **feat(vertex-ai): transform batch prediction outputs to OpenAI format** — _by @Sameerlite, updated 2026-04-23T03:06:21Z_
- [#25499](https://github.com/BerriAI/litellm/pull/25499) **feat(vertex_ai): propagate metadata labels to embedding, Imagen, rerank** — _by @Sameerlite, updated 2026-04-23T03:05:57Z_
- [#26302](https://github.com/BerriAI/litellm/pull/26302) **fix: Fix Redis Sentinel client handling to solve authentication error…** — _by @krrish-berri-2, updated 2026-04-23T03:05:12Z_
- [#26299](https://github.com/BerriAI/litellm/pull/26299) _(draft)_ **[Test] Skip provider env/account failures to reduce CCI flakiness (3 flaky tests)** — _by @yuneng-berri, updated 2026-04-23T02:45:54Z_
- [#24086](https://github.com/BerriAI/litellm/pull/24086) **feat(guardrails): add OpenGuardrails integration** — _by @thomas-security, updated 2026-04-23T02:37:21Z_
- [#26297](https://github.com/BerriAI/litellm/pull/26297) **fix: skip personal spend update for team key calls** — _by @octo-patch, updated 2026-04-23T02:04:54Z_
- [#26296](https://github.com/BerriAI/litellm/pull/26296) **[WIP] Litellm bedrock passthrough unified perf** — _by @harish-berri, updated 2026-04-23T01:56:29Z_
- [#25534](https://github.com/BerriAI/litellm/pull/25534) **chore(deps): bump pypdf from 6.9.2 to 6.10.0** — _by @dependabot[bot], updated 2026-04-23T01:44:29Z_
- [#26291](https://github.com/BerriAI/litellm/pull/26291) **Add manual test endpoint for team-submitted guardrails** — _by @shivamrawat1, updated 2026-04-23T01:40:09Z_
- [#25662](https://github.com/BerriAI/litellm/pull/25662) **chore(deps): bump aiohttp from 3.13.3 to 3.13.4** — _by @dependabot[bot], updated 2026-04-23T01:36:25Z_
- [#26207](https://github.com/BerriAI/litellm/pull/26207) **Surface per-member budget cycle in Teams > Members tab** — _by @ryan-crabbe-berri, updated 2026-04-23T01:32:50Z_


## Closed PRs (not merged)

- [#26269](https://github.com/BerriAI/litellm/pull/26269) **Fix bedrock claude 4.6 effort** — _by @jtsaw, closed 2026-04-23T19:01:29Z_
- [#26337](https://github.com/BerriAI/litellm/pull/26337) **docs: add NoPII compatible-endpoint provider page** — _by @evdevlead, closed 2026-04-23T18:08:54Z_
- [#17293](https://github.com/BerriAI/litellm/pull/17293) **fix: wildcard model expansion (openai)** — _by @changchiyou, closed 2026-04-23T17:16:49Z_
- [#26215](https://github.com/BerriAI/litellm/pull/26215) **fix(proxy): single-instance _ProxyDBLogger + guard Noma v2 payload build against concurrent mutation** — _by @bse-ai, closed 2026-04-23T16:58:48Z_
- [#25787](https://github.com/BerriAI/litellm/pull/25787) **fix(streaming): replace per-chunk asyncio.to_thread with queue-based wrapper for Bedrock sync streams** — _by @bse-ai, closed 2026-04-23T16:58:27Z_
- [#25786](https://github.com/BerriAI/litellm/pull/25786) **fix(noma-v2): use safe_deep_copy to fix post_call/during_call 500 crash** — _by @bse-ai, closed 2026-04-23T16:58:00Z_
- [#26314](https://github.com/BerriAI/litellm/pull/26314) **[Fix] Image edit: reject string values for file parameters** — _by @yuneng-berri, closed 2026-04-23T16:41:56Z_
- [#26332](https://github.com/BerriAI/litellm/pull/26332) **fix(responses): hardcode "response" object literal in Chat Completions bridge** — _by @truffle-dev, closed 2026-04-23T15:04:38Z_
- [#26162](https://github.com/BerriAI/litellm/pull/26162) **fix(proxy): share temporary MCP OAuth sessions across instances via Redis** — _by @milan-berri, closed 2026-04-23T10:06:58Z_
- [#25939](https://github.com/BerriAI/litellm/pull/25939) **feat(auth): add scope and wildcard support for JWT routing overrides** — _by @milan-berri, closed 2026-04-23T09:54:32Z_
- [#21738](https://github.com/BerriAI/litellm/pull/21738) **fix(proxy/db): honor DISABLE_SCHEMA_UPDATE and improve prisma error logging** — _by @hemhalatha, closed 2026-04-23T09:41:50Z_
- [#25230](https://github.com/BerriAI/litellm/pull/25230) **fix(proxy/presidio): stabilize output_parse_pii and user_config routing** — _by @shchu, closed 2026-04-23T08:31:53Z_
- [#26313](https://github.com/BerriAI/litellm/pull/26313) **[Fix] Image edit: reject string values for file parameters** — _by @yuneng-berri, closed 2026-04-23T07:08:15Z_
- [#26308](https://github.com/BerriAI/litellm/pull/26308) **fix(cost_calculator.py): fix AttributeError in _get_usage_object for streaming responses** — _by @EaCognitive, closed 2026-04-23T04:05:00Z_
- [#26311](https://github.com/BerriAI/litellm/pull/26311) **[Infra] CCI: remove dead steps accumulated across jobs** — _by @yuneng-berri, closed 2026-04-23T04:18:14Z_
- [#26206](https://github.com/BerriAI/litellm/pull/26206) **fix(cost_calculator.py): fix AttributeError in _get_usage_object for streaming responses (ref: fix-anthropic-streaming-cost-attributeerror)** — _by @EaCognitive, closed 2026-04-22T23:20:59Z_
- [#25574](https://github.com/BerriAI/litellm/pull/25574) **fix(router): support Responses API 'input' field in complexity and au…** — _by @Jerry-SDE, closed 2026-04-23T02:59:59Z_
- [#25120](https://github.com/BerriAI/litellm/pull/25120) **fix(proxy): map output_config.effort to reasoning_effort for non-Anthropic providers** — _by @glaziermag, closed 2026-04-23T02:20:01Z_
- [#26229](https://github.com/BerriAI/litellm/pull/26229) **Fix/streaming cost injection alias resolution test** — _by @positiveblue, closed 2026-04-23T01:56:37Z_


## Notable Issues

- [#26343](https://github.com/BerriAI/litellm/issues/26343) **[Feature]: Support Python 3.14** _[enhancement, SDK]_ — _by @Jxlle_
- [#26267](https://github.com/BerriAI/litellm/issues/26267) **[Bug]: `/responses` returns `"object": "chat.completion"` for non-OpenAI providers (Bedrock/Anthropic) — Chat Completions → Responses bridge forwards wrong literal** _[bug, llm translation, SDK]_ — _by @vaghelarahul94_
- [#26322](https://github.com/BerriAI/litellm/issues/26322) **[Bug]: azure_ai/mistral-large-3 does not support max_completion_tokens** _[bug, proxy, llm translation]_ — _by @Slyvred_
- [#26339](https://github.com/BerriAI/litellm/issues/26339) **gpt 5.5 support?** — _by @cktang88_
- [#15230](https://github.com/BerriAI/litellm/issues/15230) **[Bug]: `This feature is only available for LiteLLM Enterprise users` error while trying to update a virtual key** _[bug, mlops user request]_ — _by @LLukas22_
- [#26335](https://github.com/BerriAI/litellm/issues/26335) **File Retrieval always fail for bedrock** _[llm translation]_ — _by @kenny-bti_
- [#26334](https://github.com/BerriAI/litellm/issues/26334) **[Bug]: Vertex Anthropic: response_format + thinking returns 400 on vertex_ai/claude-opus-4-7** _[bug, llm translation, SDK]_ — _by @gabrielafsantos_
- [#26333](https://github.com/BerriAI/litellm/issues/26333) **[Bug]: Security issue CVE-2026-28684 on python-dotenv cannot be fixed due to pinned versions** _[bug, SDK]_ — _by @bhadrim_
- [#25926](https://github.com/BerriAI/litellm/issues/25926) **Vertex AI multi-region endpoints (us/eu) not supported — wrong base URL constructed** _[llm translation]_ — _by @elvis-cai_
- [#26232](https://github.com/BerriAI/litellm/issues/26232) **[Bug]: support gpt-image-2** _[bug, proxy, llm translation]_ — _by @superpoussin22_
- [#17172](https://github.com/BerriAI/litellm/issues/17172) **[Bug]: Guardrails not working when claude code with amazon bedrock** _[bug, llm translation, stale]_ — _by @huhjinsung_ _(closed 2026-04-23T13:33:25Z)_
- [#25474](https://github.com/BerriAI/litellm/issues/25474) **[Feature]: Expand VideoMetadata support to all Gemini Models.** _[enhancement, proxy, llm translation]_ — _by @vinhphamhuu-ct_ _(closed 2026-04-23T13:23:43Z)_
- [#25319](https://github.com/BerriAI/litellm/issues/25319) **[Feature]: qwen-image-2.0-pro is not supported by litellm** _[enhancement, llm translation, SDK]_ — _by @WilliamChen-luckbob_ _(closed 2026-04-23T13:23:37Z)_
- [#24443](https://github.com/BerriAI/litellm/issues/24443) **[Bug]: `tool_choice` of `none` not working with messages API** _[bug, proxy, llm translation]_ — _by @codello_ _(closed 2026-04-23T13:23:17Z)_
- [#8513](https://github.com/BerriAI/litellm/issues/8513) **[Feature]: Set currency by env variable** — _by @Mte90_
- [#26078](https://github.com/BerriAI/litellm/issues/26078) **[Bug]: `mcp_semantic_tool_filter` drops all tools when client sends MCP tool names with its own prefix (e.g. opencode)** _[bug, proxy, llm translation]_ — _by @XyLearningProgramming_ _(closed 2026-04-23T13:22:50Z)_
- [#26330](https://github.com/BerriAI/litellm/issues/26330) **[Feature]: getting virtual info from alias through `/key/info`** _[enhancement, proxy]_ — _by @axel7083_ _(closed 2026-04-23T13:21:39Z)_
- [#26252](https://github.com/BerriAI/litellm/issues/26252) **websearch_interception does not fire for Claude Code + Bedrock pass-through; PR #25242 would fix the root cause but introduces a new Bedrock skip that re-breaks it** _[llm translation, claude code]_ — _by @jonathan-nicoletti_
- [#26056](https://github.com/BerriAI/litellm/issues/26056) **litellm[proxy] Installation Problem** — _by @Clayblockunova_
- [#22305](https://github.com/BerriAI/litellm/issues/22305) **[Feature]: Support image edit for OpenRouter models** _[llm translation, SDK]_ — _by @Chesars_ _(closed 2026-03-03T18:31:26Z)_
- [#25057](https://github.com/BerriAI/litellm/issues/25057) **[Bug]: Invalid min-release-age config in .npmrc file breaks npm install** _[bug]_ — _by @Kontinuation_
- [#25708](https://github.com/BerriAI/litellm/issues/25708) **[Bug]: Request logs should show aggregate cost and duration** _[bug, ui-dashboard]_ — _by @ngbrown_
- [#26326](https://github.com/BerriAI/litellm/issues/26326) **[Bug]: Fireworks AI streaming responses leak `<think>` tags into `content` instead of populating `reasoning_content`** _[bug, proxy, llm translation]_ — _by @anuragrao04_
- [#26227](https://github.com/BerriAI/litellm/issues/26227) **[Bug]: KeyError: 'file' in Anthropic (and Anthropic-via-Vertex) when message carries a non-OpenAI file content block (e.g. LangChain v1)** _[llm translation]_ — _by @anmolg1997_ _(closed 2026-04-23T10:23:36Z)_
- [#19499](https://github.com/BerriAI/litellm/issues/19499) **[Bug]: Prompt Injection Detection Issues** _[bug, proxy, stale]_ — _by @ianmuge_
- [#26324](https://github.com/BerriAI/litellm/issues/26324) **[Bug] acount_tokens: Anthropic count path skips chat-completions → native translation; standard chat-format payloads rejected with 400** _[llm translation]_ — _by @eumemic_
- [#26323](https://github.com/BerriAI/litellm/issues/26323) **[Bug] acount_tokens: api_base silently dropped between public function and Anthropic handler** _[llm translation]_ — _by @eumemic_
- [#26320](https://github.com/BerriAI/litellm/issues/26320) **fix(anthropic): support top-level cache_control in /v1/messages for automatic prompt caching** _[llm translation]_ — _by @irshadbhat_
- [#26316](https://github.com/BerriAI/litellm/issues/26316) **gpt-image-2 issue** _[llm translation]_ — _by @wenlong-ihoment_
- [#26315](https://github.com/BerriAI/litellm/issues/26315) **Add "saaras:v3" in "model_prices_and_context_window.json"** — _by @AravindhPandiyan_
- [#26312](https://github.com/BerriAI/litellm/issues/26312) **Model alias for team can not be viewed via the UI or the API after creation.** — _by @ensean_
- [#26309](https://github.com/BerriAI/litellm/issues/26309) **[Bug]:  `chatgpt/gpt-5.4` throw exception when stream is `false`** _[bug, proxy]_ — _by @KAIYOHUGO_
- [#12685](https://github.com/BerriAI/litellm/issues/12685) **[Bug]: Heavy RAM Usage over time** _[bug]_ — _by @TSJasonH_ _(closed 2026-03-20T18:40:04Z)_


## Commits on `litellm_internal_staging`

- [`2bfbb14`](https://github.com/BerriAI/litellm/commit/2bfbb142b75156cebf61cdf32d8cd9753950c63b) Merge pull request #26336 from BerriAI/litellm_yj_apr22 — _@yuneng-berri_
- [`994e351`](https://github.com/BerriAI/litellm/commit/994e35135dc53badf26455e12d04d87981bc3561) fix: correct image size limit enforcement and vertex_location None passthrough — _@yuneng-berri_
- [`7ebe7cc`](https://github.com/BerriAI/litellm/commit/7ebe7cc99bd0832a16223514e6ac0130169b9231) Merge pull request #26293 from BerriAI/litellm_img_edit_file_input_validation — _@yuneng-berri_
- [`da3b715`](https://github.com/BerriAI/litellm/commit/da3b715c36c4c24e62543246400032d157d5790f) Merge pull request #26286 from BerriAI/litellm_/unify_uv_cache — _@shin-berri_
- [`d5449f5`](https://github.com/BerriAI/litellm/commit/d5449f5b1a7b862b76c4a79754d49f145acca92c) Merge pull request #26300 from BerriAI/litellm_oss_staging_04_22_2026 — _@Sameerlite_
- [`2d1cc68`](https://github.com/BerriAI/litellm/commit/2d1cc68e228cc43264d6e7e21a7f5ffc855ebf5f) fix(dashscope): fail fast on image generation API errors — _@Sameerlite_
- [`2e3a4bb`](https://github.com/BerriAI/litellm/commit/2e3a4bb27a27f875f303b8b66abd26dfad86c155) Fix black — _@Sameerlite_
- [`e3440ba`](https://github.com/BerriAI/litellm/commit/e3440baa0c8bc15b7f79e469e654f4d17b476a1e) Merge pull request #25767 from vinhphamhuu-ct/main — _@Sameerlite_
- [`1385d46`](https://github.com/BerriAI/litellm/commit/1385d46e9974a7ac59843421682268bacde06918) FIx mypy issues — _@Sameerlite_
- [`03a0224`](https://github.com/BerriAI/litellm/commit/03a022436b70d611e6f70abe6e405c5e3f46fbbd) [Infra] CCI: run RVM install from its own checkout dir — _@yuneng-berri_
- [`eb6a2d0`](https://github.com/BerriAI/litellm/commit/eb6a2d043c56c71d628477d1923bee4ca1c5b7ce) [Infra] CCI: pin Ruby and Node.js installs in proxy_pass_through_endpoint_tests — _@yuneng-berri_
- [`a12a219`](https://github.com/BerriAI/litellm/commit/a12a2190d7f91e94db031144f050175ef32dbece) [Infra] Flip remaining CI jobs to Python 3.12 — _@yuneng-berri_
- [`547d60c`](https://github.com/BerriAI/litellm/commit/547d60c64290000488de2273beab3b7d3379951e) [Infra] CCI: match Windows uv install path to Linux verification pattern — _@yuneng-berri_
- [`44362cb`](https://github.com/BerriAI/litellm/commit/44362cb167e562575c31504980735ad8180e1ca0) [Infra] CCI: factor repeated filters and Python docker image to YAML anchors — _@yuneng-berri_
- [`bea872a`](https://github.com/BerriAI/litellm/commit/bea872a0345537d02414ba99a32e33077c8cf58d) [Infra] CCI: remove dead steps accumulated across jobs — _@yuneng-berri_
- [`8fbf0d5`](https://github.com/BerriAI/litellm/commit/8fbf0d5554eee7d5066c81b50282fa6fc19a4191) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_/unify_uv_cache — _@yuneng-berri_
- [`63ba912`](https://github.com/BerriAI/litellm/commit/63ba912b47760548a070b8ee225f5054dabf08f0) Merge pull request #26160 from BerriAI/litellm_vertex_image_edit_credentials_fix — _@Sameerlite_
- [`fcf917d`](https://github.com/BerriAI/litellm/commit/fcf917df6d8c4eb790acfa61963c3a448e56093c) Feat(dashscope): add image generation support for qwen-image-2.0 and qwen-image-2.0-pro (#25672) — _@Alpha-Zark_
- [`d26bcda`](https://github.com/BerriAI/litellm/commit/d26bcda52a034dd0a836395af8c739ac3913d1fd) refactor: replace substring check with startswith in is_model_gpt_5_model (#25793) — _@BraulioV_
- [`c26e304`](https://github.com/BerriAI/litellm/commit/c26e304abc0315606a0577d1f7bcb8b1d9c2def2) fix(ui): stale filters applied after sort/page/time change on Request Logs (#25789) — _@Bytechoreographer_
- [`4b2fd87`](https://github.com/BerriAI/litellm/commit/4b2fd870ca3d2df8dc4e104d10496ece5ce62e10) fix(ui): Fetch button ignores active filters on Request Logs page (#25788) — _@Bytechoreographer_
- [`9479318`](https://github.com/BerriAI/litellm/commit/947931858eb7ba0ce4cc0e952912ddae54b98586) fix(anthropic): handle tool_choice type 'none' in messages API (#24457) — _@BillionClaw_
- [`bd145d1`](https://github.com/BerriAI/litellm/commit/bd145d18e17176b2328ddf18739cfc4bab17058f) fix(ovhcloud): Fix tool calling not working (#25948) — _@eliasto_
- [`c0c7048`](https://github.com/BerriAI/litellm/commit/c0c7048903f98dc16af1167212395113a8f1c982) feat(messages): map reasoning_auto_summary to thinking.display for native /v1/messages (#25883) — _@Vigilans_
- [`0e23aa7`](https://github.com/BerriAI/litellm/commit/0e23aa739097e11ce8c5e5bc5cb79bbba07a3c95) fix(anthropic): tolerate non-OpenAI file content blocks in file-id discovery (#26228) — _@anmolg1997_
- [`b42b86d`](https://github.com/BerriAI/litellm/commit/b42b86df7a428cc6b3d628eaf313a513c0fe4c34) fix(adapter): normalize reasoning effort with graceful degradation (#26111) — _@Vigilans_
- [`034f4fd`](https://github.com/BerriAI/litellm/commit/034f4fdef20fb9b8ab5c63787e2ba764ad4661cc) fix(mcp_semantic_tool_filter): match tools with client-side namespace prefix (#26078) (#26117) — _@sakenuGOD_
- [`6a25866`](https://github.com/BerriAI/litellm/commit/6a25866f512035bf76e8089a4438125907d957ff) Merge pull request #26295 from BerriAI/yj_bump_apr22 — _@yuneng-berri_
- [`8bc6948`](https://github.com/BerriAI/litellm/commit/8bc6948a5e88c08c989574b1980086ef6236daf7) Merge pull request #26290 from BerriAI/litellm_/bold-goldstine-b86b67 — _@yuneng-berri_
- [`95fa767`](https://github.com/BerriAI/litellm/commit/95fa7678afb9d960d4b134fdf0d655491734f67b) uv lock — _@yuneng-berri_
- [`9f46d83`](https://github.com/BerriAI/litellm/commit/9f46d838fd348146add15ba12dd3d2a68bbb0c13) bump: version 1.83.11 → 1.83.12 — _@yuneng-berri_
- [`3ddb3cb`](https://github.com/BerriAI/litellm/commit/3ddb3cbdf61071506b2289e1604ace38816a632e) bump: version 0.4.67 → 0.4.68 — _@yuneng-berri_
- [`c4c1861`](https://github.com/BerriAI/litellm/commit/c4c18613897300c67e39ce37ae7acbe74c7506de) Merge pull request #26195 from BerriAI/litellm_team_member_total_spend — _@ryan-crabbe-berri_
- [`42342d3`](https://github.com/BerriAI/litellm/commit/42342d35fd13814f5a2add22cfe0ebb91589f227) fix: remove extraneous f-prefix in ValueError message — _@yuneng-berri_
- [`375bf4d`](https://github.com/BerriAI/litellm/commit/375bf4d7d67a6f9a1ead0512e90d68c05b12219f) fix: tighten file input handling in image edit endpoints — _@yuneng-berri_
- [`c67d193`](https://github.com/BerriAI/litellm/commit/c67d193400eb05779384196fd170079372ad0e56) fix(docker.non_root): use numeric UID 65534 for K8s runAsNonRoot (#26268) — _@michelligabriele_
- [`a292845`](https://github.com/BerriAI/litellm/commit/a292845dcf7d4929b5b842171b659ed31a86b4c8) [Fix] Harden spend accuracy test against transient aiohttp connection errors — _@yuneng-berri_
- [`5767219`](https://github.com/BerriAI/litellm/commit/5767219e780da3dd49530b3ec73f580b5b26a600) Merge pull request #26287 from BerriAI/litellm_url_param_format_validation — _@yuneng-berri_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (deterministic template; no LLM for this run)._
