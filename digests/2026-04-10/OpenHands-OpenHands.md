# OpenHands/OpenHands — 2026-04-10

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-09T23:59:59.000Z → 2026-04-10T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a continued **frontend cleanup toward the V1 API**: tofarr landed a series of refactors removing the V0 conversation creation path ([#13823](https://github.com/OpenHands/OpenHands/pull/13823)), the V1-enabled feature flag and agents shim ([#13871](https://github.com/OpenHands/OpenHands/pull/13871)), and migrated `getUser()` ([#13875](https://github.com/OpenHands/OpenHands/pull/13875)) and the Suggestions service ([#13872](https://github.com/OpenHands/OpenHands/pull/13872)) to V1 endpoints, alongside dead-code removals in `conversation-service.api.ts` ([#13870](https://github.com/OpenHands/OpenHands/pull/13870), [#13865](https://github.com/OpenHands/OpenHands/pull/13865), [#13876](https://github.com/OpenHands/OpenHands/pull/13876)). If you only read one thing, skim [#13823](https://github.com/OpenHands/OpenHands/pull/13823) — V0 conversation creation is gone from the frontend, which is a meaningful behavioral cutover.

A notable security fix also merged: **CVE-2025-64340** patched by bumping `fastmcp` to 3.2.0 ([#13685](https://github.com/OpenHands/OpenHands/commit/e9067237f2a3855a6eb82a56fe68d4a92cf681ba)), and [#13777](https://github.com/OpenHands/OpenHands/pull/13777) moved WebSocket `session_api_key` auth out of URL query params into a first-frame message to stop `sk-oh-*` tokens leaking into reverse-proxy access logs — worth reviewing if you operate OpenHands behind Traefik/Datadog.

On the enterprise side, malhotra5 began a 13-part SQLAlchemy 2.0 migration, landing the type-checking foundation ([#13846](https://github.com/OpenHands/OpenHands/pull/13846)) plus the first two model migrations ([#13847](https://github.com/OpenHands/OpenHands/pull/13847), [#13848](https://github.com/OpenHands/OpenHands/pull/13848)) — expect more churn here over the coming days. Smaller fixes: Docker sandbox status now uses container `StartedAt` for its grace period ([#13841](https://github.com/OpenHands/OpenHands/pull/13841)), and the Slack V1 integration switched to `markdown_text` for proper rendering ([#13869](https://github.com/OpenHands/OpenHands/pull/13869)). The `/microagent-management` UI was also fully removed ([#13830](https://github.com/OpenHands/OpenHands/pull/13830)) since it had no entry points.

New open PRs to watch: [#13881](https://github.com/OpenHands/OpenHands/pull/13881) addresses stale MCP/CORS URLs across sandbox restarts (fixes #13861), and draft [#13882](https://github.com/OpenHands/OpenHands/pull/13882) adds the `notifications` scope to GitHub OAuth so agents can finally hit the Notifications API instead of getting 403s. No releases or new issues in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#13882](https://github.com/OpenHands/OpenHands/pull/13882) _(draft)_ **feat: add `notifications` scope to GitHub OAuth defaultScope** — _by @xingyaoww, updated 2026-04-10T23:44:54Z_
- [#13881](https://github.com/OpenHands/OpenHands/pull/13881) **Fix agent-server config not updating on restart** — _by @Ricardo-M-L, updated 2026-04-10T23:30:58Z_


## Closed PRs (not merged)

- [#13842](https://github.com/OpenHands/OpenHands/pull/13842) **feat(github): add optional Laminar observability for @openhands resolver** — _by @juanmichelini, closed 2026-04-10T17:43:46Z_
- [#13830](https://github.com/OpenHands/OpenHands/pull/13830) **Remove microagent management UI** — _by @dependabot[bot], closed 2026-04-10T15:02:37Z_
- [#13777](https://github.com/OpenHands/OpenHands/pull/13777) **fix(security): first-message WebSocket auth to prevent token leakage** — _by @simonrosenberg, closed 2026-04-10T13:09:38Z_
- [#12389](https://github.com/OpenHands/OpenHands/pull/12389) **feat(git-settings): add Bitbucket API token and username support** — _by @bnainar, closed 2026-04-10T02:14:55Z_
- [#12905](https://github.com/OpenHands/OpenHands/pull/12905) **feat: add release contributor notification system** — _by @saurya, closed 2026-04-10T02:14:49Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`e906723`](https://github.com/OpenHands/OpenHands/commit/e9067237f2a3855a6eb82a56fe68d4a92cf681ba) Fix CVE-2025-64340: Update fastmcp to 3.2.0 (#13685) — _@aivong-openhands_
- [`cae7d36`](https://github.com/OpenHands/OpenHands/commit/cae7d365226567c32ffe876f9e2b9e7a894a6100) Remove unused startConversation method and dead code (#13876) — _@tofarr_
- [`27a2d59`](https://github.com/OpenHands/OpenHands/commit/27a2d59c23a2c6426e3b122ddc56915b90dffe57) Update getUser() to use V1 API endpoint /api/v1/users/git-info (#13875) — _@tofarr_
- [`d3d9167`](https://github.com/OpenHands/OpenHands/commit/d3d916745ab8f127891fbca1bf1d5d04686d45fe) Update Suggestions Service API to use new V1 endpoint with pagination (#13872) — _@tofarr_
- [`50f1d33`](https://github.com/OpenHands/OpenHands/commit/50f1d332ccb4c2b2e3a3cfe26c171ab08d60118a) Remove V1 enabled flag and agents from frontend (#13871) — _@tofarr_
- [`de53245`](https://github.com/OpenHands/OpenHands/commit/de53245d1be8e626e34ae0eb92bf71da4d1899fb) refactor(frontend): Remove unused API methods from conversation-service.api.ts (#13870) — _@tofarr_
- [`8c26616`](https://github.com/OpenHands/OpenHands/commit/8c2661638ea9efe37e411fe71e37570309b13a2f) fix(slack): use markdown_text parameter for proper Markdown rendering in V1 (#13869) — _@VascoSch92_
- [`bdbaba0`](https://github.com/OpenHands/OpenHands/commit/bdbaba0c344732f50aa36b01592585983d4c908d) Remove unused searchEventsV0 method from EventService (#13865) — _@tofarr_
- [`d866d73`](https://github.com/OpenHands/OpenHands/commit/d866d735d94acff8fd8f3bc84b55abcb87c51e9f) refactor(frontend): Remove V0 conversation creation path (#13823) — _@tofarr_
- [`39f3b29`](https://github.com/OpenHands/OpenHands/commit/39f3b293f55c6797bf4c8f966a02e2289ddd51c3) Fix: Use container StartedAt for Docker sandbox status grace period calculation (#13841) — _@tofarr_
- [`fa4afa9`](https://github.com/OpenHands/OpenHands/commit/fa4afa941233897a082a826fa7f3ac1613e0c704) fix(enterprise): migrate device_code model to SQLAlchemy 2.0 [2/13] (#13848) — _@malhotra5_
- [`f274d5e`](https://github.com/OpenHands/OpenHands/commit/f274d5e90f63e21b06a2269c6e262f7b225ad13d) fix(enterprise): migrate simple storage models to SQLAlchemy 2.0 [1/13] (#13847) — _@malhotra5_
- [`dd5eb69`](https://github.com/OpenHands/OpenHands/commit/dd5eb69c655de65a0ef1486c636a9868fb9211b5) fix(enterprise): enable SQLAlchemy 2.0 type checking foundation (#13846) — _@malhotra5_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
