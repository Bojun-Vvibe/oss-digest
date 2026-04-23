# BerriAI/litellm — 2026-04-17

> LLM gateway / proxy that powers most of our local agent stack.

**Window:** 2026-04-16T23:59:59.000Z → 2026-04-17T23:59:59.000Z  
**Default branch:** `litellm_internal_staging`  
**Source:** [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headlining the day: a large internal-staging promotion to `main` (#25924) shipped as **v1.83.9-nightly**, bundling roughly a week of fixes from `litellm_ishaan_april6` (#25256) plus several security hardening PRs from `stuxf`. The release is the most important thing to read.

The security batch is notable: SSRF protection for user-supplied URLs (#25906), org-boundary enforcement in admin operations including `/user/delete`, `/key/update`, and `/organization/member_delete` (#25904, plus follow-up commits c7c3df2/467166f/662d055), and guardrail-config + tag-routing consistency (#25905). Several follow-up commits (132063, b4e98d1) close additional metadata/tag bypass variants surfaced by the audit, suggesting the original fixes were incomplete on merge.

Performance: `harish-berri`'s Prometheus refactor (#25934) lands, cutting `Logging.async_success_handler` CPU time from ~22% → ~12% by amortizing `label_factory` per-request and replacing several Pydantic models with dataclasses. Worth reading if you run Prometheus at scale.

Other merged work: TogetherAI `get_supported_openai_params` recursion fix and mocked Bedrock Moonshot tests to stabilize CI (#25920); Mistral OCR param allowlist (#25858); `grok-4.20-0309-reasoning` model support (#25930); shared PKCE helper extraction (#25878); Redis Sentinel password auth fix (#25625); a latency-routing UI defaults regression fix (#25882); and a docs-site "Copy Page as Markdown" + `llms.txt` rollout (#25975).

Notable open PRs to watch: a sizable ChatGPT/GitHub Copilot OAuth sign-in + token-refresh feature for the proxy UI (#25923, 165 new tests); a Bedrock credential-passing fix for `aws_role_name` via `litellm_params` (#25982); two Google-native GenAI logging fixes (#25960 streaming callbacks, #25955 user attribution); Anthropic pass-through `additional_drop_params` fix (#25963); and a Vertex AI `budget_tokens=0` Gemini 2.5 Pro fix submitted three times (#25970/25977/25979).

Housekeeping noise: ~6 "merge litellm_internal_staging" PRs from Sameerlite churned through in minutes — safe to ignore.

## Releases

- **[v1.83.9-nightly](https://github.com/BerriAI/litellm/releases/tag/v1.83.9-nightly)** — v1.83.9-nightly _by @github-actions[bot] at 2026-04-17T04:06:56Z_
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

- [#25256](https://github.com/BerriAI/litellm/pull/25256) **Litellm ishaan april6** — _by @ishaan-berri, merged 2026-04-17T23:26:45Z_
- [#25972](https://github.com/BerriAI/litellm/pull/25972) **[Infra] Merge dev branch** — _by @yuneng-berri, merged 2026-04-17T21:58:52Z_
- [#25934](https://github.com/BerriAI/litellm/pull/25934) **[WIP][Perf] Litellm prometheus improvements** — _by @harish-berri, merged 2026-04-17T20:28:13Z_
- [#25975](https://github.com/BerriAI/litellm/pull/25975) **docs: add "Copy Page as Markdown" + llms.txt to docs site** — _by @krrish-berri-2, merged 2026-04-17T20:03:13Z_
- [#25930](https://github.com/BerriAI/litellm/pull/25930) **Add support for grok-4.20-0309-reasoning model** — _by @Sameerlite, merged 2026-04-17T19:30:33Z_
- [#25906](https://github.com/BerriAI/litellm/pull/25906) **fix(proxy): add URL validation for user-supplied URLs** — _by @stuxf, merged 2026-04-17T19:19:03Z_
- [#25905](https://github.com/BerriAI/litellm/pull/25905) **fix(proxy): read guardrail config from admin metadata, fix tag routing consistency** — _by @stuxf, merged 2026-04-17T19:16:28Z_
- [#25904](https://github.com/BerriAI/litellm/pull/25904) **fix(proxy): enforce organization boundaries in admin operations** — _by @stuxf, merged 2026-04-17T19:13:57Z_
- [#24905](https://github.com/BerriAI/litellm/pull/24905) **[Infra] Pin All Docker Build Dependencies** — _by @yuneng-berri, merged 2026-04-01T22:05:25Z_
- [#25878](https://github.com/BerriAI/litellm/pull/25878) **Refactor: extract shared PKCE helpers into utils/pkce.ts** — _by @ryan-crabbe-berri, merged 2026-04-17T17:26:23Z_
- [#25882](https://github.com/BerriAI/litellm/pull/25882) **fix: return None for routing_strategy_args when strategy is not latency-based** — _by @ryan-crabbe-berri, merged 2026-04-17T17:25:42Z_
- [#25625](https://github.com/BerriAI/litellm/pull/25625) **fix: Fix Redis Sentinel client handling to solve authentication error with password protected sentinel** — _by @Kontinuation, merged 2026-04-17T16:42:06Z_
- [#25945](https://github.com/BerriAI/litellm/pull/25945) **merge litellm_internal_staging** — _by @Sameerlite, merged 2026-04-17T13:18:03Z_
- [#25938](https://github.com/BerriAI/litellm/pull/25938) **merge internal staging** — _by @Sameerlite, merged 2026-04-17T09:41:01Z_
- [#25946](https://github.com/BerriAI/litellm/pull/25946) **merge litellm_internal_staging** — _by @Sameerlite, merged 2026-04-17T13:18:58Z_
- [#25949](https://github.com/BerriAI/litellm/pull/25949) **merge litellm_internal_staging** — _by @Sameerlite, merged 2026-04-17T13:31:08Z_
- [#25944](https://github.com/BerriAI/litellm/pull/25944) **merge litellm_internal_staging** — _by @Sameerlite, merged 2026-04-17T13:11:59Z_
- [#25942](https://github.com/BerriAI/litellm/pull/25942) **merge litellm_internal_staging** — _by @Sameerlite, merged 2026-04-17T12:48:12Z_
- [#20166](https://github.com/BerriAI/litellm/pull/20166) **litellm_fix: bump litellm-proxy-extras version to 0.4.28** — _by @ghost, merged 2026-01-31T18:23:17Z_
- [#25858](https://github.com/BerriAI/litellm/pull/25858) **fix(ocr): add missing Mistral OCR params to allowlist** — _by @michelligabriele, merged 2026-04-17T04:00:16Z_
- [#25920](https://github.com/BerriAI/litellm/pull/25920) **[Test] Mock Bedrock Moonshot tests + [Fix] TogetherAIConfig recursion** — _by @yuneng-berri, merged 2026-04-17T00:55:58Z_
- [#25924](https://github.com/BerriAI/litellm/pull/25924) **[Infra] Promote Internal Staging to main** — _by @yuneng-berri, merged 2026-04-17T01:21:51Z_
- [#25872](https://github.com/BerriAI/litellm/pull/25872) **bump: version 1.83.8 → 1.83.9** — _by @yuneng-berri, merged 2026-04-17T00:56:45Z_
- [#25873](https://github.com/BerriAI/litellm/pull/25873) **bump: proxy extras version 0.4.65 → 0.4.66** — _by @yuneng-berri, merged 2026-04-17T00:56:33Z_


## Open PRs (new or updated)

- [#24536](https://github.com/BerriAI/litellm/pull/24536) **fix(proxy): return 405 with helpful message for GET /responses** — _by @BillionClaw, updated 2026-04-17T23:43:43Z_
- [#24539](https://github.com/BerriAI/litellm/pull/24539) **fix(proxy): remove x-api-key when OAuth Authorization header is present** — _by @BillionClaw, updated 2026-04-17T23:41:06Z_
- [#25982](https://github.com/BerriAI/litellm/pull/25982) **fix(bedrock): fall back to litellm_params for aws_role_name and related credential fields** — _by @s-zx, updated 2026-04-17T22:32:55Z_
- [#25981](https://github.com/BerriAI/litellm/pull/25981) **docs: update SOC 2 Type II certification status to in progress (Q3 2026)** — _by @krrish-berri-2, updated 2026-04-17T22:10:41Z_
- [#25216](https://github.com/BerriAI/litellm/pull/25216) **fix(anthropic_adapter): preserve first chunk on content-block transitions** — _by @dkssudgo112, updated 2026-04-17T20:49:40Z_
- [#25977](https://github.com/BerriAI/litellm/pull/25977) **fix(vertex_ai): fix API error when setting `budget_tokens=0` on Gemini 2.5 Pro** — _by @chrfla, updated 2026-04-17T20:39:28Z_
- [#25979](https://github.com/BerriAI/litellm/pull/25979) **fix(vertex_ai): fix API error when setting `budget_tokens=0` on Gemini 2.5 Pro** — _by @chrfla, updated 2026-04-17T20:39:18Z_
- [#25967](https://github.com/BerriAI/litellm/pull/25967) **fix(anthropic): default thinking.display="summarized" on Claude Opus 4.7** — _by @minimAluminiumalism, updated 2026-04-17T20:23:01Z_
- [#25755](https://github.com/BerriAI/litellm/pull/25755) **fix(openai): include 'user' in base_params for all OpenAI-compatible endpoints** — _by @Anai-Guo, updated 2026-04-17T19:04:10Z_
- [#25680](https://github.com/BerriAI/litellm/pull/25680) **Add pricing entry for azure/gpt-5.2-chat-latest** — _by @YoshitakaOyama, updated 2026-04-17T19:02:45Z_
- [#23835](https://github.com/BerriAI/litellm/pull/23835) **fix(anthropic): filter empty text content blocks in message conversion** — _by @xandr0s, updated 2026-04-17T19:01:29Z_
- [#23539](https://github.com/BerriAI/litellm/pull/23539) **fix(openrouter): strip model prefix in bridge path (/v1/messages)** — _by @xandr0s, updated 2026-04-17T18:48:21Z_
- [#25963](https://github.com/BerriAI/litellm/pull/25963) **fix(proxy): ensure additional_drop_params are respected in Anthropic pass-through endpoints** — _by @Ryanakml, updated 2026-04-17T16:30:36Z_
- [#25364](https://github.com/BerriAI/litellm/pull/25364) **fix(lemonade): use configured api_key instead of hardcoded value** — _by @Bahtya, updated 2026-04-17T16:22:19Z_
- [#25357](https://github.com/BerriAI/litellm/pull/25357) **fix(gemini): capture thoughtSignature from sibling thought parts** — _by @Bahtya, updated 2026-04-17T16:21:01Z_
- [#25923](https://github.com/BerriAI/litellm/pull/25923) **feat(chatgpt, github_copilot): OAuth sign-in + token refresh in proxy UI** — _by @jmcook, updated 2026-04-17T15:41:00Z_
- [#25961](https://github.com/BerriAI/litellm/pull/25961) **fix(databricks): respect custom User-Agent set via extra_headers** — _by @josemaria-vilaplana, updated 2026-04-17T15:30:06Z_
- [#23987](https://github.com/BerriAI/litellm/pull/23987) **fix: remove noisy Provider List log message causing log flooding** — _by @BillionClaw, updated 2026-04-17T15:10:41Z_
- [#23962](https://github.com/BerriAI/litellm/pull/23962) **fix(key_management): sanitize sensitive callback credentials from key metadata** — _by @BillionClaw, updated 2026-04-17T15:06:58Z_
- [#25960](https://github.com/BerriAI/litellm/pull/25960) **fix(google_genai): route streaming chunks to GeminiPassthroughLoggingHandler so success_callbacks fire (closes #24097, supersedes #24114)** — _by @dkindlund, updated 2026-04-17T15:06:54Z_
- [#23964](https://github.com/BerriAI/litellm/pull/23964) **fix(openrouter): prevent extra_body tools from overwriting processed tools** — _by @BillionClaw, updated 2026-04-17T15:06:54Z_
- [#23972](https://github.com/BerriAI/litellm/pull/23972) **fix(prompts): Prompt Studio fails to load prompts saved via UI** — _by @BillionClaw, updated 2026-04-17T15:06:50Z_
- [#25955](https://github.com/BerriAI/litellm/pull/25955) **fix(google_genai): propagate user from kwargs to logging obj in agenerate_content** — _by @dkindlund, updated 2026-04-17T15:04:28Z_
- [#25952](https://github.com/BerriAI/litellm/pull/25952) **fix(proxy): honor client-supplied x-litellm-call-id in spend log request_id** — _by @dkindlund, updated 2026-04-17T15:02:22Z_
- [#25208](https://github.com/BerriAI/litellm/pull/25208) **fix: preserve assistant text content alongside tool_calls in Responses API conversion** — _by @sohumt123, updated 2026-04-17T14:48:44Z_
- [#23783](https://github.com/BerriAI/litellm/pull/23783) **Litellm oss staging 03 16 2026** — _by @RheagalFire, updated 2026-04-17T13:56:53Z_
- [#25943](https://github.com/BerriAI/litellm/pull/25943) **chore: sync uv.lock with pyproject.toml** — _by @renanpolisciuc, updated 2026-04-17T12:55:29Z_
- [#25399](https://github.com/BerriAI/litellm/pull/25399) **fix: add claude-haiku-4-5 to native structured output allowlist** — _by @Smeet23, updated 2026-04-17T12:55:29Z_
- [#25400](https://github.com/BerriAI/litellm/pull/25400) **fix: rewrite absolute /ui/assets/ paths when SERVER_ROOT_PATH is set** — _by @Smeet23, updated 2026-04-17T12:55:28Z_
- [#25401](https://github.com/BerriAI/litellm/pull/25401) **fix: store hashed password on /user/new when password field is provided** — _by @Smeet23, updated 2026-04-17T12:55:26Z_
- [#25941](https://github.com/BerriAI/litellm/pull/25941) **fix(langfuse): guard against None standard_callback_dynamic_params** — _by @renanpolisciuc, updated 2026-04-17T12:51:45Z_
- [#25645](https://github.com/BerriAI/litellm/pull/25645) **fix: Custom Model pricing / Allow zero‑cost models to stay unblocked when BudgetExceeded is true (#14004)** — _by @suleimanelkhoury, updated 2026-04-17T10:57:26Z_
- [#25886](https://github.com/BerriAI/litellm/pull/25886) **feat(gigachat): add passthrough gigachat route** — _by @KnyazSh, updated 2026-04-17T10:06:17Z_
- [#25713](https://github.com/BerriAI/litellm/pull/25713) **fix(main.py): pass custom_llm_provider to get_litellm_params in embedding/transcription/speech** — _by @runixer, updated 2026-04-17T09:59:32Z_
- [#25896](https://github.com/BerriAI/litellm/pull/25896) **feat(vertex_ai): Add xAI Grok models support as Vertex AI partner models** — _by @Vallabh-1504, updated 2026-04-17T08:38:27Z_
- [#25928](https://github.com/BerriAI/litellm/pull/25928) **fix(vertex_ai): support multi-region endpoints (us/eu) with correct URL scheme** — _by @Anai-Guo, updated 2026-04-17T06:07:17Z_
- [#25885](https://github.com/BerriAI/litellm/pull/25885) **fix(chat-ui): increase message font size** — _by @yashhhhh1, updated 2026-04-17T06:01:33Z_
- [#25888](https://github.com/BerriAI/litellm/pull/25888) **fix(router): propagate `custom cost_per_token` from db `model_info` in fallback path** — _by @Zerohertz, updated 2026-04-17T05:19:04Z_
- [#24531](https://github.com/BerriAI/litellm/pull/24531) **refactor: fix PLR0915 in a2a and anthropic guardrail handlers** — _by @joereyna, updated 2026-04-17T05:03:52Z_
- [#25863](https://github.com/BerriAI/litellm/pull/25863) **docs(proxy): document enable_post_custom_auth_checks for custom auth** — _by @shaun0927, updated 2026-04-17T05:02:56Z_
- [#25932](https://github.com/BerriAI/litellm/pull/25932) **feat(docs): align fenced code block padding on blog and doc pages** — _by @Sameerlite, updated 2026-04-17T04:37:54Z_
- [#24489](https://github.com/BerriAI/litellm/pull/24489) **fix(lint): wire lint-ruff-FULL-dev into lint-dev to catch Ruff violations on changed files** — _by @joereyna, updated 2026-04-17T04:28:35Z_
- [#25927](https://github.com/BerriAI/litellm/pull/25927) **fix(bedrock/cohere): wrap embedding_types as list when encoding_format is string** — _by @Anai-Guo, updated 2026-04-17T02:02:28Z_
- [#23523](https://github.com/BerriAI/litellm/pull/23523) **fix(bedrock/thinking/websearch): body param stripping, thinking fixes, API key loading** — _by @Quentin-M, updated 2026-04-17T01:25:00Z_
- [#18277](https://github.com/BerriAI/litellm/pull/18277) **[Fix] vertex credentials being logged** — _by @shivamrawat1, updated 2026-04-17T00:11:13Z_
- [#19197](https://github.com/BerriAI/litellm/pull/19197) _(draft)_ **Default alerting parameters from config** — _by @danielnyari-seon, updated 2026-04-17T00:10:58Z_


## Closed PRs (not merged)

- [#25976](https://github.com/BerriAI/litellm/pull/25976) **docs: add per-page copy markdown action in Docusaurus** — _by @krrish-berri-2, closed 2026-04-17T22:01:31Z_
- [#25970](https://github.com/BerriAI/litellm/pull/25970) **fix(vertex): fix API error when setting `budget_tokens=0` on Gemini 2.5 Pro** — _by @chrfla, closed 2026-04-17T20:22:42Z_
- [#25974](https://github.com/BerriAI/litellm/pull/25974) **Litellm oss staging 03 23 2026** — _by @krrish-berri-2, closed 2026-04-17T19:28:43Z_
- [#24487](https://github.com/BerriAI/litellm/pull/24487) **Litellm oss staging 03 23 2026** — _by @ghost, closed 2026-04-17T19:29:24Z_
- [#24114](https://github.com/BerriAI/litellm/pull/24114) **fix(google-genai): route streaming chunks to GeminiPassthroughLogging…** — _by @awais786, closed 2026-03-19T11:49:24Z_
- [#25835](https://github.com/BerriAI/litellm/pull/25835) **feat(bedrock): inject thinking for clear_thinking context_management on Messages API** — _by @Sameerlite, closed 2026-04-17T13:34:43Z_
- [#24206](https://github.com/BerriAI/litellm/pull/24206) **feat(spend-tracking): show actual model used by azure_ai/model_router on usage page** — _by @Sameerlite, closed 2026-04-17T12:46:46Z_
- [#23948](https://github.com/BerriAI/litellm/pull/23948) ** fix(proxy): preserve pre-call 429 behavior without fallbacks** — _by @Sameerlite, closed 2026-04-17T12:46:38Z_
- [#24865](https://github.com/BerriAI/litellm/pull/24865) **feat(prometheus): add per-key and per-team rate limit allowed/used metrics** — _by @Sameerlite, closed 2026-04-17T12:46:30Z_
- [#23347](https://github.com/BerriAI/litellm/pull/23347) **Fix: OTEL metrics crash on /v1/messages when LITELLM_OTEL_INTEGRATION_ENABLE_METRICS=true** — _by @DaStru, closed 2026-04-17T09:57:29Z_
- [#24244](https://github.com/BerriAI/litellm/pull/24244) **fix: run prisma migration check on PRs to block schema changes without migrations** — _by @joereyna, closed 2026-04-17T04:09:57Z_
- [#25865](https://github.com/BerriAI/litellm/pull/25865) **[Feat] add `claude-opus-4-7` to model cost map** — _by @Shion1305, closed 2026-04-17T03:58:15Z_
- [#25921](https://github.com/BerriAI/litellm/pull/25921) **feat(chatgpt, github_copilot): OAuth sign-in + token refresh in proxy UI** — _by @jmcook, closed 2026-04-17T00:30:43Z_
- [#24452](https://github.com/BerriAI/litellm/pull/24452) **docs(release-notes): add v1.82.6.rc.1 release notes** — _by @joereyna, closed 2026-04-17T00:40:36Z_
- [#24170](https://github.com/BerriAI/litellm/pull/24170) **chore: trigger CI checks post black formatting fixes** — _by @joereyna, closed 2026-04-17T00:40:34Z_
- [#25918](https://github.com/BerriAI/litellm/pull/25918) **feat(chatgpt, github_copilot): OAuth sign-in + token refresh in proxy UI** — _by @jmcook, closed 2026-04-17T00:22:50Z_
- [#17898](https://github.com/BerriAI/litellm/pull/17898) **adding support for .svg files  in UI logo UI_LOGO param override for admin panel** — _by @justalittleadam, closed 2026-04-17T00:11:15Z_


## Notable Issues

_None in window._


## Commits on `litellm_internal_staging`

- [`1c128a8`](https://github.com/BerriAI/litellm/commit/1c128a86b8119355082f4bc9855afad04f4bc606) Merge pull request #25256 from BerriAI/litellm_ishaan_april6 — _@ishaan-berri_
- [`e6a20af`](https://github.com/BerriAI/litellm/commit/e6a20af6469f5d2ea85979737d3a7a063ba441b6) fix(proxy-extras): skip post-deploy sanity check when no migrations pending — _@ishaan-berri_
- [`e073fee`](https://github.com/BerriAI/litellm/commit/e073feec0af7a14c0b99211f2b5d8bbb6c443d1e) fix(ui): rename claude-code-plugins to skills in page_metadata.ts — _@ishaan-berri_
- [`33175a8`](https://github.com/BerriAI/litellm/commit/33175a8ee73521079f1c64e2f99742f74fc1b9b7) fix(proxy-extras): fall back to prisma db execute when migrate diff fails on pooler URL — _@ishaan-berri_
- [`70456fb`](https://github.com/BerriAI/litellm/commit/70456fb8bb7bd67e90ba144d9d5cc8fad28239a0) fix(ui): update add_plugin_form tests to match rewritten smart URL form — _@ishaan-berri_
- [`33a2cee`](https://github.com/BerriAI/litellm/commit/33a2cee4afa0333f868ce3a3050b66fcfbd18087) fix(proxy-extras): use DIRECT_URL for prisma migrate diff, tempfile for diff dir — _@ishaan-berri_
- [`ee2cf0e`](https://github.com/BerriAI/litellm/commit/ee2cf0e6e89d3b29aa013292d8dd689822cf306b) fix: address three CI failures from recent security PR merges — _@yuneng-berri_
- [`7c47bbd`](https://github.com/BerriAI/litellm/commit/7c47bbd226faf81e0358d899afd727f5d1921c01) fix(migration): run schema sanity check after P3009/P3018 idempotent migration recovery — _@ishaan-berri_
- [`6a9f8f7`](https://github.com/BerriAI/litellm/commit/6a9f8f77726fe7e7ce2029c8c33909436dbf2117) Merge pull request #25972 from BerriAI/litellm_yj_apr16 — _@yuneng-berri_
- [`9281147`](https://github.com/BerriAI/litellm/commit/9281147a1a3c43a1867e2da1e5ca31682e7eb9a5) fix(schema): add budget_limits Json? to LiteLLM_TeamTable and LiteLLM_VerificationToken — _@ishaan-berri_
- [`b91a6f5`](https://github.com/BerriAI/litellm/commit/b91a6f52b7e05539ec5b37402716617cd7d4581e) fix(schema): add budget_limits Json? to LiteLLM_TeamTable and LiteLLM_VerificationToken — _@ishaan-berri_
- [`7239ed6`](https://github.com/BerriAI/litellm/commit/7239ed60e985045d5fa2c66e6d1afcd9cf75b91b) fix(schema): add budget_limits Json? to LiteLLM_TeamTable and LiteLLM_VerificationToken — _@ishaan-berri_
- [`7b3480a`](https://github.com/BerriAI/litellm/commit/7b3480a94ad199396fb8717f381ab8b0168de42e) fix(team_delete): exclude budget_limits and default_team_member_models from deleted team record — _@ishaan-berri_
- [`574633f`](https://github.com/BerriAI/litellm/commit/574633fcf152f17eb56518d6ffae2c4e8252ab06) fix(key_delete): exclude budget_limits from deleted verification token record — _@ishaan-berri_
- [`6636329`](https://github.com/BerriAI/litellm/commit/6636329f69be16d95b63985bb5c66196d05bd296) fix(proxy): revert budget exceeded error code from 429 to 400 — _@ishaan-berri_
- [`b4df07a`](https://github.com/BerriAI/litellm/commit/b4df07a244b5101eaf31c807e1c64e33172c246d) style(prometheus): apply Black formatting to types/integrations/prometheus.py — _@ishaan-berri_
- [`2808cb9`](https://github.com/BerriAI/litellm/commit/2808cb908ceae3ea42149cb15447edf141f7ca09) style(prometheus): apply Black formatting to prometheus.py — _@ishaan-berri_
- [`7867497`](https://github.com/BerriAI/litellm/commit/786749775114856e147291d3ce22185ea75325ea) style(github_copilot): revert authenticator.py to origin/main formatting — _@ishaan-berri_
- [`9de041f`](https://github.com/BerriAI/litellm/commit/9de041f8ee514c0525b44a1e63286011235aa715) style(prometheus): sync types/integrations/prometheus.py formatting with origin/main — _@ishaan-berri_
- [`2395a2d`](https://github.com/BerriAI/litellm/commit/2395a2db4da5b5c0d6bb2c41484ea02e4d3e0f79) style(prometheus): sync prometheus.py formatting with origin/main — _@ishaan-berri_
- [`b7aa045`](https://github.com/BerriAI/litellm/commit/b7aa045de11e1004d3dfab4531b85b12d4c4185d) style(github_copilot): shorten __init__ docstring to avoid Black edge case — _@ishaan-berri_
- [`1e25a00`](https://github.com/BerriAI/litellm/commit/1e25a00e5d85bc2a52e6192c777e1d2f01e8e5a0) [Docs] BYOK tutorial: document the UI-only configuration path — _@yuneng-berri_
- [`7eae18d`](https://github.com/BerriAI/litellm/commit/7eae18d1587959c4f2589bfca599059623356fc6) [Feature] UI - Settings: toggle row for forward_llm_provider_auth_headers — _@yuneng-berri_
- [`9a8aa4f`](https://github.com/BerriAI/litellm/commit/9a8aa4fae4270e83063f688d422ea088e9e4b2f7) [Feature] UI - Models: add api_base field for Anthropic provider form — _@yuneng-berri_
- [`ad48af6`](https://github.com/BerriAI/litellm/commit/ad48af69aafabcbd655b7aaab4f8a63f73e868e2) [Feature] UI - Models: allow empty api_key for Anthropic provider (BYOK) — _@yuneng-berri_
- [`d0f1706`](https://github.com/BerriAI/litellm/commit/d0f17064797970819e48891ec5c8fd7992e57903) [Test] pre-call utils: regression coverage for BYOK x-api-key forwarding — _@yuneng-berri_
- [`66167f5`](https://github.com/BerriAI/litellm/commit/66167f532e24e0fa3322d63c9eb4bfa4b433b5ca) [Feature] UI - Settings: add forward_llm_provider_auth_headers toggle — _@yuneng-berri_
- [`6ed2929`](https://github.com/BerriAI/litellm/commit/6ed292956ebfe7af355fbcde40cc25b0525f7879) Merge pull request #25934 from BerriAI/litellm_prometheus_improvements — _@ishaan-berri_
- [`3aa63d5`](https://github.com/BerriAI/litellm/commit/3aa63d524ec768205f76c93e983c7953f798b11b) style(github_copilot): simplify _get_github_headers return type annotation — _@ishaan-berri_
- [`d369f0a`](https://github.com/BerriAI/litellm/commit/d369f0a1c18b92c4a239265dc0e626fa2414df06) docs(user_management): add budget_limits param to user_update docstring — _@ishaan-berri_
- [`77767f5`](https://github.com/BerriAI/litellm/commit/77767f5787f657a355ea24c11f390026377684eb) docs(org_management): add allowed_models param to new_organization docstring — _@ishaan-berri_
- [`dd76cc5`](https://github.com/BerriAI/litellm/commit/dd76cc5d9d91ba73563552bafe9438154bf23cec) docs: add "Copy Page as Markdown" + llms.txt to docs site (#25975) — _@krrish-berri-2_
- [`e8461b5`](https://github.com/BerriAI/litellm/commit/e8461b5b97756590578ee8ae8304b02a975e5f39) style: run black formatter on files from main merge — _@ishaan-berri_
- [`ab44df2`](https://github.com/BerriAI/litellm/commit/ab44df202b0170de2aa3634de80afcad758deb9f) docs(team_management): add budget_limits and default_team_member_models to update_team docstring — _@ishaan-berri_
- [`375cfb7`](https://github.com/BerriAI/litellm/commit/375cfb7f95cc680c2407b2bce6e64d21511669e0) chore: update uv.lock after merging main — _@ishaan-berri_
- [`2893301`](https://github.com/BerriAI/litellm/commit/2893301a0eecd8862252e2201f5c784f50ef830f) docs(team_management): add budget_limits and default_team_member_models params to new_team docstring — _@ishaan-berri_
- [`09e0137`](https://github.com/BerriAI/litellm/commit/09e0137bb2bc59b7f1806df90ab07f78905571b7) docs(user_management): add budget_limits param to new_user docstring — _@ishaan-berri_
- [`8e77f9e`](https://github.com/BerriAI/litellm/commit/8e77f9ee9425cf17d5754caaacf35c75c5ec08da) resolving code comments to move helper logic to ```prometheus_helper.py``` — _@harish-berri_
- [`4423d09`](https://github.com/BerriAI/litellm/commit/4423d098458a5c4f7101c642f14b2c4ead99b0d8) fix(ui): add missing Accordion imports to TeamInfo.tsx — _@ishaan-berri_
- [`b2aa186`](https://github.com/BerriAI/litellm/commit/b2aa186d56c4c02bd2bacfa80602fe1796e20038) docs(key_management): add budget_limits param to update_key_fn docstring — _@ishaan-berri_
- [`665306b`](https://github.com/BerriAI/litellm/commit/665306b4f022efef0aaa089fccc5a2e28669dfb6) fix(ui): fix TypeScript error - publicPage === true in narrowed false context — _@ishaan-berri_
- [`a508a96`](https://github.com/BerriAI/litellm/commit/a508a9665a0a302bd1b566534958363023f93197) docs(key_management): add budget_limits param to generate_key_fn docstring — _@ishaan-berri_
- [`f31d4fa`](https://github.com/BerriAI/litellm/commit/f31d4faa87afb02ae5759f61873aa189d5ee28bd) Merge origin/main into litellm_ishaan_april6 — _@ishaan-berri_
- [`bd5f560`](https://github.com/BerriAI/litellm/commit/bd5f560f569cab0504f368c425697ff2f79297fb) Merge pull request #25930 from BerriAI/litellm_xai_grok-4.20-0309-reasoning — _@ishaan-berri_
- [`7c66edb`](https://github.com/BerriAI/litellm/commit/7c66edbf4ae20acacbd83caed913c596e41032c4) Merge pull request #25906 from stuxf/fix/ssrf-url-validation — _@yuneng-berri_
- [`32714a4`](https://github.com/BerriAI/litellm/commit/32714a4dc21a8a7957108c6f95f1aa6c03d963be) Merge pull request #25905 from stuxf/fix/metadata-security-controls — _@yuneng-berri_
- [`50a6324`](https://github.com/BerriAI/litellm/commit/50a6324d58005ce71acb7e2cc4e8736a6131ad23) Merge pull request #25904 from stuxf/fix/org-boundary-enforcement — _@yuneng-berri_
- [`246a5bd`](https://github.com/BerriAI/litellm/commit/246a5bd1582207c7e82b343f9a49762b0376cfc5) Merge remote-tracking branch 'origin/litellm_internal_staging' into litellm_yj_apr16 — _@yuneng-berri_
- [`b3ccbb9`](https://github.com/BerriAI/litellm/commit/b3ccbb96ba88d9a106f9f24f202ceb8e0c4812c4) resolve lint errors — _@harish-berri_
- [`9d10ebf`](https://github.com/BerriAI/litellm/commit/9d10ebf49c2e1e9f987c202573b70089a0003f0f) fix(prometheus): restore labeled-counter tests; tolerate UserAPIKeyLabelValues kwargs — _@harish-berri_
- [`5df3287`](https://github.com/BerriAI/litellm/commit/5df328701673ef2364cc385b79c6df238a152c17) fixing backwards compatibility for tests — _@harish-berri_
- [`c23ce91`](https://github.com/BerriAI/litellm/commit/c23ce918cdfdd9a1882a7fe1a75de28ac9bf2430) Merge pull request #25878 from BerriAI/litellm_refactor-pkce-dedup — _@ryan-crabbe-berri_
- [`2b5bf4c`](https://github.com/BerriAI/litellm/commit/2b5bf4cba865bb0b40598e36db20261d45472f59) Merge pull request #25882 from BerriAI/litellm_fix-latency-config-empty-defaults — _@ryan-crabbe-berri_
- [`62a189f`](https://github.com/BerriAI/litellm/commit/62a189f57c8a690b380b61336a32148f332f4a5b) added comments to disable repr — _@harish-berri_
- [`1eb6be9`](https://github.com/BerriAI/litellm/commit/1eb6be9d44d27e7fd39ae1088188a08d8e2821e7) Removed slots attr which was causing test failures in python 3.9. — _@harish-berri_
- [`76c69bb`](https://github.com/BerriAI/litellm/commit/76c69bb933d5709e4007ea8685bb4c8cdadc53f2) fix(proxy): avoid duplicate reasoning capability lookup — _@Sameerlite_
- [`d86c6a5`](https://github.com/BerriAI/litellm/commit/d86c6a5b2fe357f8d03ac1de6292c3de25d0f115) fix(proxy): prioritize reasoning health check token defaults — _@Sameerlite_
- [`95824dd`](https://github.com/BerriAI/litellm/commit/95824ddea6c4a90271efca638c1b161506747e94) removing pydantic base model __repr__, __repr_str__ and __repr_args__ function calls from the hotpath and replacing them with lightweight python native dataclasses. — _@harish-berri_
- [`bcb2ea6`](https://github.com/BerriAI/litellm/commit/bcb2ea63f139b3ff8bcb2164c3a886c9d5314cea) fix: add explicit admin bypass to agent access checks for consistency — _@yuneng-berri_
- [`f69b9d6`](https://github.com/BerriAI/litellm/commit/f69b9d65647e8311967cb09f2048f31db9183364) Add capability to override default GitHub Copilot authentication endp… (#25915) — _@steromano87_
- [`cd92b04`](https://github.com/BerriAI/litellm/commit/cd92b044768a96aa40ac29f2ca2932848e21d0c7) fix(ocr): add missing Mistral OCR params to allowlist (#25858) — _@michelligabriele_
- [`3ef3622`](https://github.com/BerriAI/litellm/commit/3ef362289bb89097c67d5bf7a90c9d92b6de97d0) Add support for grok-4.20-0309-reasoning model — _@Sameerlite_
- [`a84c276`](https://github.com/BerriAI/litellm/commit/a84c27674fe3dcfad9832fe93b0020a53836ec1e) refactor(azure-ocr): move urllib.parse.quote to module imports — _@shivamrawat1_
- [`089ca5f`](https://github.com/BerriAI/litellm/commit/089ca5fc0f00f87a9ecb0420b83f54c0f9b160e1) fix(azure-ocr): reject mixed bool+int in pages list validation — _@shivamrawat1_
- [`b6d5728`](https://github.com/BerriAI/litellm/commit/b6d5728134c2d7f9410139628bae7708cfe62f82) add support for pages param — _@shivamrawat1_
- [`850fe59`](https://github.com/BerriAI/litellm/commit/850fe595ac54fa426bee70c367afdfe865f3b356) Merge pull request #25924 from BerriAI/litellm_internal_staging — _@yuneng-berri_
- [`bf7b7f7`](https://github.com/BerriAI/litellm/commit/bf7b7f7f60247db1c0696f07f8d17a6ea74a1bbe) Merge pull request #25872 from BerriAI/yj_bump_apr16_2 — _@yuneng-berri_
- [`f07aadc`](https://github.com/BerriAI/litellm/commit/f07aadc3f97422c0dcf4ebf53bc5b8058d671944) Merge pull request #25873 from BerriAI/yj_extras_bump_apr16 — _@yuneng-berri_
- [`724926f`](https://github.com/BerriAI/litellm/commit/724926fba9bab35be97c027185d2cee8476e6202) Merge pull request #25920 from BerriAI/litellm_/amazing-almeida — _@yuneng-berri_
- [`e3b5579`](https://github.com/BerriAI/litellm/commit/e3b55794ce14e26c8d39b469a5388be4d2f4bc34) fix(proxy): close /organization member_delete + role-escalation gaps — _@stuxf_
- [`00bac08`](https://github.com/BerriAI/litellm/commit/00bac08e015794ffd18d54844dd79d724a47f7f6) [Test] Mock remaining live Bedrock Moonshot tests — _@yuneng-berri_
- [`c7c3df2`](https://github.com/BerriAI/litellm/commit/c7c3df2b02c0fd7e4544bdf5cf3e3b0f8118b734) fix(proxy): extend /key/update admin check to non-budget fields — _@stuxf_
- [`662d055`](https://github.com/BerriAI/litellm/commit/662d05531d61d8d9e58fcdd1d25080da5d6119fa) fix(proxy): close three more org-boundary escape paths — _@stuxf_
- [`cdb2994`](https://github.com/BerriAI/litellm/commit/cdb29946eb75a792566d8447e1e261387fa38368) fix: align agent endpoint and routing permission checks with existing pattern — _@yuneng-berri_
- [`95e1bab`](https://github.com/BerriAI/litellm/commit/95e1babf67f63ce201c6cd17370213708be95515) [Fix] TogetherAIConfig.get_supported_openai_params recursion — _@yuneng-berri_
- [`1320632`](https://github.com/BerriAI/litellm/commit/132063289fca416c18b55fa99fa44919a2b0b41b) fix(proxy): strip root-level data['tags'] alongside metadata tags — _@stuxf_
- [`8c0668f`](https://github.com/BerriAI/litellm/commit/8c0668f105c00772d785b7981973709edc718c05) perf: batch target membership lookup in delete_user to avoid N+1 — _@stuxf_
- [`69f2bc1`](https://github.com/BerriAI/litellm/commit/69f2bc1d41fd555ae1f24b99bcbc5421bc53187b) amortize label context call, by reducing number of label_factory calls, reduces CPU time by ~5% — _@harish-berri_
- [`467166f`](https://github.com/BerriAI/litellm/commit/467166fdd7c26b89ea73cf418e419881e25fa1fe) fix(proxy): enforce per-target org authorization on /user/delete — _@stuxf_
- [`b4e98d1`](https://github.com/BerriAI/litellm/commit/b4e98d190a42c04c1e7cf3c44abf7524a92826d5) fix(proxy): close 6 more metadata/tag variant bypasses — _@stuxf_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
