# OpenHands/OpenHands — 2026-04-23

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-22T23:59:59.000Z → 2026-04-23T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day is dominated by **security-hardening fixes** for production log leakage and a notable bug closeout around session resume cost tracking.

Two `all-hands-bot` PRs target plaintext secrets observed in Datadog production runtime logs: [#14083](https://github.com/OpenHands/OpenHands/pull/14083) redacts `session_api_key` query params from uvicorn/WebSocket access logs by repointing `RedactURLParamsFilter` to the canonical SDK redaction utility, and [#14084](https://github.com/OpenHands/OpenHands/pull/14084) redacts API keys (Tavily URL keys, `X-Session-API-Key` headers) from MCP server configuration dicts being logged in runtime pods. Both are small, surgical, and worth reading first if you operate a SaaS deployment.

The most impactful bug closure is [#13843](https://github.com/OpenHands/OpenHands/issues/13843): `LLM.restore_metrics()` was updating `self._metrics` but not `Telemetry.metrics`, so `accumulated_cost` and `costs[]` froze at pre-resume values after any session resume — silently breaking cost accounting. Anyone relying on conversation cost data should verify they're on the fix.

New bug fixes opened today:
- [#14086](https://github.com/OpenHands/OpenHands/pull/14086) stops persisting Gemini's model-specific endpoint as `base_url`, which was causing doubled `/models/gemini-pro:generateContent` paths and 404s for every `gemini/` model (fixes #14028).
- [#14085](https://github.com/OpenHands/OpenHands/pull/14085) guards `BitBucketMixinBase._parse_repository` against null `workspace`/`mainbranch` fields that crash on empty Bitbucket repos with `AttributeError`.

Other active PRs include [#14037](https://github.com/OpenHands/OpenHands/pull/14037) (resilient `openhands.agenthub` import for dev/test envs), [#13917](https://github.com/OpenHands/OpenHands/pull/13917) (backend base-URL normalization to prevent `http://http://...`), [#13193](https://github.com/OpenHands/OpenHands/pull/13193) (new `auto_pause_existing` flag plus sandbox eviction-order fix in the Cloud API), and a routine dependabot bump of lxml to 6.1.0 ([#14071](https://github.com/OpenHands/OpenHands/pull/14071)) which incidentally patches an XXE in `iterparse()`.

Housekeeping: stale draft PRs [#13112](https://github.com/OpenHands/OpenHands/pull/13112) and [#13151](https://github.com/OpenHands/OpenHands/pull/13151) were auto-closed. No releases or direct-to-main commits in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#13193](https://github.com/OpenHands/OpenHands/pull/13193) **feat+fix(app-server): add auto_pause_existing flag and fix sandbox eviction order (#13126)** — _by @daniel-laroz, updated 2026-04-23T08:51:37Z_
- [#13917](https://github.com/OpenHands/OpenHands/pull/13917) **Fix backend base URL normalization + settings stability** — _by @noyahazzan-art, updated 2026-04-23T07:56:09Z_
- [#14086](https://github.com/OpenHands/OpenHands/pull/14086) **fix: don't persist Gemini model-specific endpoint as base_url** — _by @he-yufeng, updated 2026-04-23T05:49:25Z_
- [#14037](https://github.com/OpenHands/OpenHands/pull/14037) **fix: make openhands.server.app resilient to missing optional agenthu #14035** — _by @enjoyandlove, updated 2026-04-23T04:30:49Z_
- [#14071](https://github.com/OpenHands/OpenHands/pull/14071) **chore(deps): bump lxml from 6.0.2 to 6.1.0** — _by @dependabot[bot], updated 2026-04-23T03:58:54Z_
- [#14085](https://github.com/OpenHands/OpenHands/pull/14085) **fix(integrations): guard Bitbucket _parse_repository against null nested fields** — _by @boskodev790, updated 2026-04-23T01:26:43Z_
- [#14084](https://github.com/OpenHands/OpenHands/pull/14084) **fix(security): redact API keys from MCP config logging** — _by @all-hands-bot, updated 2026-04-23T00:58:06Z_
- [#14083](https://github.com/OpenHands/OpenHands/pull/14083) **fix(security): redact session_api_key from WebSocket access logs** — _by @all-hands-bot, updated 2026-04-23T00:51:22Z_


## Closed PRs (not merged)

- [#13112](https://github.com/OpenHands/OpenHands/pull/13112) **fix: use query parameters for V1 git API endpoints to preserve path s…** — _by @chuckbutkus, closed 2026-04-23T02:14:52Z_
- [#13151](https://github.com/OpenHands/OpenHands/pull/13151) **Optimize dockerfile build time** — _by @chuckbutkus, closed 2026-04-23T02:14:50Z_


## Notable Issues

- [#13843](https://github.com/OpenHands/OpenHands/issues/13843) **[Bug]: LLM cost tracking stops after session resume — Telemetry.metrics not updated in restore_metrics** — _by @Hydrapse_ _(closed 2026-04-23T10:19:27Z)_
- [#12268](https://github.com/OpenHands/OpenHands/issues/12268) **[Bug]: Unable to run z.ai (zai) models if you're on a z.ai coding plan, works fine if you used Advanced and enter the right API url manually** _[bug, Stale, settings, llm]_ — _by @Wysie_
- [#12616](https://github.com/OpenHands/OpenHands/issues/12616) **Web (V1): avoid full-history events loading/retention** _[Stale, tech debt, proposal, API]_ — _by @smolpaws_
- [#12684](https://github.com/OpenHands/OpenHands/issues/12684) **[Bug]: Web UI stuck at 'Starting' when opening old conversation with terminated runtime** _[bug, Stale]_ — _by @xingyaoww_
- [#13311](https://github.com/OpenHands/OpenHands/issues/13311) **[Bug]:  event_callback_result.id NOT NULL + set_title ReadTimeout 后写入失败** _[bug, Stale]_ — _by @baojian-zz_
- [#13335](https://github.com/OpenHands/OpenHands/issues/13335) **Bug: EventServiceBase.search_events() loads all events before applying limit/page_id** _[bug, Stale]_ — _by @enyst_
- [#13349](https://github.com/OpenHands/OpenHands/issues/13349) **[Feature]: Graceful conversation resume after container crash/restart (Local/Self-hosted)** _[enhancement, Stale]_ — _by @kbbonawitz-stack_
- [#13366](https://github.com/OpenHands/OpenHands/issues/13366) **[Bug]: 403 Forbidden on /api/refresh-tokens due to missing SESSION_API_KEY in SaaS nested runtime** _[bug, Stale, enterprise, API]_ — _by @aivong-openhands_


## Commits on `main`

_None in window._


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
