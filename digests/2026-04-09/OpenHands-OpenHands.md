# OpenHands/OpenHands — 2026-04-09

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-08T23:59:59.000Z → 2026-04-09T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Security and V1-migration cleanup dominated the day. Three back-to-back fixes landed to stop credential leaks in logs: MCP server secrets are now redacted from log output (#13840), `session_api_key` values are stripped from uvicorn WebSocket access logs (#13839), and an earlier sister PR (#13838) switched MCP config logging to `sanitize_config` so secrets embedded in URL query parameters (e.g. `tavilyApiKey=…`, ~6 leaks/hour in prod) and headers are properly redacted. Anyone running OpenHands with Datadog or similar log shipping should pick these up.

On the API side, the V0 → V1 migration took two concrete steps: the V0 conversation-creation path was removed from the API (#13837), and the long-running PR to migrate the frontend conversation list to `GET /api/v1/app-conversations/search` (#12780) was closed — note the scheduled V0 API removal date of April 1, 2026 referenced in that PR's description. Related, #13119 ("V1 Changes to Support Path Based Routing") finally closed after sitting open since early March; it's a breaking change for self-hosted setups using path-based routing and requires the paired Agent SDK update (software-agent-sdk#2249). Also relevant: enyst's open PR #12947 marks remaining Legacy-V0 routes as `deprecated=True` in the OpenAPI spec.

Two notable product/UX changes: the microagent management UI was removed entirely (#13835), and chuckbutkus added organization/authorization info to `/api/v1/users/me` (#13822) — worth a look if you consume that endpoint. The CODEOWNERS file was also deleted (#13833). On the frontend, GFM tables now render with visible borders in chat (#13825), and a large dependabot bump across 31 frontend packages including `@heroui/react` 2.8.7 → 3.0.1 was closed without merging (#13671).

Smaller but useful: a Fedora-host Poetry build failure caused by non-PEP-440 kernel version strings in `poetry.lock` markers was fixed (#13814). No releases were cut in the window, and no new issues were filed.

## Releases

_None in window._


## Merged PRs

- [#12489](https://github.com/OpenHands/OpenHands/pull/12489) **Add CORS origins support to Docker sandbox service for remote browser access** — _by @tofarr, merged 2026-01-18T15:02:30Z_


## Open PRs (new or updated)

- [#12947](https://github.com/OpenHands/OpenHands/pull/12947) **Deprecate Legacy-V0 server routes in OpenAPI** — _by @enyst, updated 2026-04-09T12:25:10Z_


## Closed PRs (not merged)

- [#13811](https://github.com/OpenHands/OpenHands/pull/13811) **Migrate ConversationService.getConversation to V1 API** — _by @tofarr, closed 2026-04-09T21:40:42Z_
- [#13838](https://github.com/OpenHands/OpenHands/pull/13838) **fix: use sanitize_config for MCP config logging to redact URL secrets** — _by @all-hands-bot, closed 2026-04-09T20:38:01Z_
- [#13836](https://github.com/OpenHands/OpenHands/pull/13836) **fix: redact session_api_key from uvicorn access logs** — _by @all-hands-bot, closed 2026-04-09T20:28:20Z_
- [#10002](https://github.com/OpenHands/OpenHands/pull/10002) **Fix conversation not starting on revisited pages by clearing query cache** — _by @tofarr, closed 2025-10-07T02:02:46Z_
- [#8520](https://github.com/OpenHands/OpenHands/pull/8520) **Introduced reusable runtimes for runtime tests** — _by @tofarr, closed 2025-08-13T02:12:29Z_
- [#9395](https://github.com/OpenHands/OpenHands/pull/9395) **Add WarmDockerRuntime implementation with container pooling** — _by @tofarr, closed 2025-08-04T02:13:25Z_
- [#9102](https://github.com/OpenHands/OpenHands/pull/9102) **Enhance AsyncLLM to match LLM functionality** — _by @tofarr, closed 2025-07-31T02:13:25Z_
- [#8090](https://github.com/OpenHands/OpenHands/pull/8090) **OpenHands Cloud patch release** — _by @mamoodi, closed 2025-04-30T14:41:35Z_
- [#7351](https://github.com/OpenHands/OpenHands/pull/7351) **Fix for broken retry** — _by @tofarr, closed 2025-03-19T17:40:48Z_
- [#5836](https://github.com/OpenHands/OpenHands/pull/5836) **Feat extra security for hosts** — _by @tofarr, closed 2025-02-03T16:09:29Z_
- [#10082](https://github.com/OpenHands/OpenHands/pull/10082) **Add warm container functionality to DockerRuntime** — _by @tofarr, closed 2025-10-06T02:04:39Z_
- [#10789](https://github.com/OpenHands/OpenHands/pull/10789) **Added new migrations/Models/Endpoints for BYOK** — _by @tofarr, closed 2025-09-04T18:16:50Z_
- [#10821](https://github.com/OpenHands/OpenHands/pull/10821) **Fix bash session termination caused by problematic set commands** — _by @tofarr, closed 2025-10-26T02:09:52Z_
- [#11835](https://github.com/OpenHands/OpenHands/pull/11835) **fix(backend): switch from own model to saas breaks functionality (staging issue)** — _by @hieptl, closed 2025-12-01T14:10:35Z_
- [#12242](https://github.com/OpenHands/OpenHands/pull/12242) **feat: implement fast Docker conversation deletion with background cleanup** — _by @tofarr, closed 2026-02-23T02:14:29Z_
- [#12346](https://github.com/OpenHands/OpenHands/pull/12346) **patch-release: implement reCAPTCHA enterprise risk-based non-interactive #12288** — _by @raymyers, closed 2026-03-01T02:14:34Z_
- [#12245](https://github.com/OpenHands/OpenHands/pull/12245) **fix: cleanup orphaned localStorage entries when conversation is deleted** — _by @tofarr, closed 2026-02-28T02:13:35Z_
- [#12509](https://github.com/OpenHands/OpenHands/pull/12509) **feat: Add runtime-base image to speed up CI builds** — _by @tofarr, closed 2026-03-13T02:15:56Z_
- [#12538](https://github.com/OpenHands/OpenHands/pull/12538) **Release Candidate 1.2.2 (Do not merge)** — _by @tofarr, closed 2026-01-28T17:14:34Z_
- [#13153](https://github.com/OpenHands/OpenHands/pull/13153) **Make ExperimentManager methods async** — _by @tofarr, closed 2026-03-18T15:47:51Z_
- [#13119](https://github.com/OpenHands/OpenHands/pull/13119) **V1 Changes to Support Path Based Routing** — _by @chuckbutkus, closed 2026-04-09T19:27:05Z_
- [#13485](https://github.com/OpenHands/OpenHands/pull/13485) **Fix when budgets are None** — _by @chuckbutkus, closed 2026-04-09T19:27:28Z_
- [#12604](https://github.com/OpenHands/OpenHands/pull/12604) **fix(backend): resolve database deadlocks in user migration** — _by @tofarr, closed 2026-03-18T02:14:38Z_
- [#12736](https://github.com/OpenHands/OpenHands/pull/12736) **APP-443: Fix key generation (#12726)** — _by @mamoodi, closed 2026-02-05T14:57:51Z_
- [#12816](https://github.com/OpenHands/OpenHands/pull/12816) **1.11.1 - Do not merge** — _by @tofarr, closed 2026-02-11T13:54:58Z_
- [#12844](https://github.com/OpenHands/OpenHands/pull/12844) **Rel 1.11.4** — _by @tofarr, closed 2026-03-10T16:14:09Z_
- [#12831](https://github.com/OpenHands/OpenHands/pull/12831) **Rel 1.11.3 (Do not merge)** — _by @tofarr, closed 2026-02-12T09:44:30Z_
- [#12861](https://github.com/OpenHands/OpenHands/pull/12861) **Revert inappropriate change from Dec 17** — _by @tofarr, closed 2026-02-25T13:06:38Z_
- [#13053](https://github.com/OpenHands/OpenHands/pull/13053) **Add logging** — _by @chuckbutkus, closed 2026-04-09T19:27:05Z_
- [#13617](https://github.com/OpenHands/OpenHands/pull/13617) **TEST ONLY: Force build for PR #13043 testing** — _by @tofarr, closed 2026-04-09T19:26:53Z_
- [#13834](https://github.com/OpenHands/OpenHands/pull/13834) **🔐 Security: Redact MCP URL secrets in logs** — _by @all-hands-bot, closed 2026-04-09T18:15:15Z_
- [#13671](https://github.com/OpenHands/OpenHands/pull/13671) **chore(deps): bump the version-all group across 1 directory with 33 updates** — _by @dependabot[bot], closed 2026-04-09T15:04:22Z_
- [#12780](https://github.com/OpenHands/OpenHands/pull/12780) **Migrate conversation list endpoint from V0 to V1 API** — _by @tofarr, closed 2026-04-09T12:24:02Z_
- [#13814](https://github.com/OpenHands/OpenHands/pull/13814) **Fix Poetry build failure on Fedora hosts (non-PEP-440 kernel versions)** — _by @VascoSch92, closed 2026-04-09T05:02:50Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`21d86b6`](https://github.com/OpenHands/OpenHands/commit/21d86b6b5e29fd4fba3a7e6ff8ef228cb38ab05a) fix: redact MCP server secrets from log output (#13840) — _@all-hands-bot_
- [`2c2e379`](https://github.com/OpenHands/OpenHands/commit/2c2e37902f53969dca256417b4a811a39024db7f) fix: redact session_api_key from uvicorn WebSocket access logs (#13839) — _@all-hands-bot_
- [`f7f029e`](https://github.com/OpenHands/OpenHands/commit/f7f029ec1a09174150d0677541452b765fbd4809) Removed the path for creating V0 conversations in the API. (#13837) — _@tofarr_
- [`3e9017b`](https://github.com/OpenHands/OpenHands/commit/3e9017bb6efbb3793593844dcb9ac40bbc64c423) Remove CODEOWNERS file (#13833) — _@neubig_
- [`78e48ac`](https://github.com/OpenHands/OpenHands/commit/78e48ace2d89b0e7647e7110f87228e0a563a23a) Remove microagent management UI (#13835) — _@tofarr_
- [`60ece6d`](https://github.com/OpenHands/OpenHands/commit/60ece6d7c2e6d762bd3c219c123751c26517f02c) feat: Add organization/authorization info to /api/v1/users/me endpoint (#13822) — _@chuckbutkus_
- [`738e7a9`](https://github.com/OpenHands/OpenHands/commit/738e7a9834173040f6e85483f7d90d2a7e937a41) feat(frontend): render GFM tables with visible borders in chat messages (#13825) — _@VascoSch92_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
