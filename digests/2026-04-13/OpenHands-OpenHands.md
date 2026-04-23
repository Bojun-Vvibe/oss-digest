# OpenHands/OpenHands — 2026-04-13

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-12T23:59:59.000Z → 2026-04-13T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a steady drumbeat of security and credential-leak fixes landing on `main`. Two of the five merged commits are explicit security patches: `#13719` suppresses SQLAlchemy DEBUG logging that was leaking credentials, and `#13879` (commit `3cd74d3`) fixes Jira integrations to emit proper wiki markup via `markdown_to_jira_markup`. These follow yesterday's batch of redaction work (MCP config `#13720`, uvicorn WebSocket `session_api_key` `#13839`, MCP server secrets `#13840`) — anyone running OpenHands against Datadog or shared log sinks should pull these.

The other notable merge is a frontend refactor `#13892` moving LLM settings to V1 providers/models endpoints with lazy per-provider model loading, continuing the multi-week V0→V1 migration that has dominated `tofarr`'s output (conversations, git, settings, suggestions, users — see `#13877`, `#13887`, `#13872`, `#13875`). Two small correctness fixes also landed: `#13816` (wrong variable in condenser `max_size` validation error) and `#13817` (logger format args and a `-0` slice bug).

New open PRs worth tracking:

- `#13904` (draft, `hieptl`) — adds an `X-Org-Id` header so multiple browser tabs can hold distinct org context instead of relying on shared server `current_org_id` state. This is a real multi-tenant correctness bug.
- `#13902` (`Prithvi1994`) — adds pagination to `search_branches` across GitHub/GitLab/Azure/Bitbucket/Forgejo, fixing the "paging is not supported when searching branches" error.
- `#13899` (`Yonsun-w`) — prioritizes exact `owner/repo` matches in the repo picker, addressing a long-standing GitHub search ranking annoyance.
- `#13901` consolidates 12 ad-hoc spinner implementations into one component.
- `#13863` dynamically resolves the internal MCP server URL on sandbox restart (fixes `#13861`, stale `web_url` after host IP change).

Closures without merge: `#12544` (archive conversations) was closed as Stale after ~3 months; drafts `#13897` and `#13866` (both deduplicating `/api/v1/web-client/config` requests) were closed, suggesting the dedup approach is being rethought. No releases cut today.

## Releases

_None in window._


## Merged PRs

- [#13774](https://github.com/OpenHands/OpenHands/pull/13774) **chore(deps): bump the version-all group across 1 directory with 7 updates** — _by @dependabot[bot], merged 2026-04-06T14:39:09Z_
- [#13720](https://github.com/OpenHands/OpenHands/pull/13720) **fix(security): redact credentials from MCP config logging** — _by @simonrosenberg, merged 2026-04-06T14:46:42Z_
- [#13618](https://github.com/OpenHands/OpenHands/pull/13618) **Add KVM device passthrough support for hardware virtualization** — _by @gpothier, merged 2026-04-06T14:57:58Z_
- [#13637](https://github.com/OpenHands/OpenHands/pull/13637) **chore: Add sdk to mypy checking and fix the resulting errors** — _by @raymyers, merged 2026-04-06T15:43:32Z_
- [#13787](https://github.com/OpenHands/OpenHands/pull/13787) **Added new v1 endpoint for user git info and deprecated old endpoint** — _by @tofarr, merged 2026-04-06T15:54:24Z_
- [#13779](https://github.com/OpenHands/OpenHands/pull/13779) **Succinct pr template** — _by @jamiechicago312, merged 2026-04-06T17:05:24Z_
- [#13790](https://github.com/OpenHands/OpenHands/pull/13790) **Add V1 git routes with pagination for installations and repositories** — _by @tofarr, merged 2026-04-06T18:01:22Z_
- [#13791](https://github.com/OpenHands/OpenHands/pull/13791) **fix(slack): immediately display 'No Repository' option** — _by @malhotra5, merged 2026-04-06T18:21:59Z_
- [#13795](https://github.com/OpenHands/OpenHands/pull/13795) **ci: retire Blacksmith from all GitHub Actions workflows** — _by @raymyers, merged 2026-04-06T21:51:09Z_
- [#13799](https://github.com/OpenHands/OpenHands/pull/13799) **Deprecate /api/options/models, add /api/v1/config/models/search endpoint** — _by @tofarr, merged 2026-04-07T12:51:49Z_
- [#13794](https://github.com/OpenHands/OpenHands/pull/13794) **Add V1 API endpoints for git search and branches** — _by @tofarr, merged 2026-04-07T12:52:57Z_
- [#13804](https://github.com/OpenHands/OpenHands/pull/13804) **feat(backend): route Linear resolver conversations to claimed org workspaces** — _by @hieptl, merged 2026-04-07T16:22:48Z_
- [#13805](https://github.com/OpenHands/OpenHands/pull/13805) **feat(backend): route Jira resolver conversations to claimed org workspaces** — _by @hieptl, merged 2026-04-07T16:58:53Z_
- [#13809](https://github.com/OpenHands/OpenHands/pull/13809) **feat: remove ENABLE_ORG_CLAIMS_RESOLVER_ROUTING feature flag** — _by @hieptl, merged 2026-04-07T17:55:37Z_
- [#13803](https://github.com/OpenHands/OpenHands/pull/13803) **Refactor conversation list to use V1 API** — _by @tofarr, merged 2026-04-07T18:35:11Z_
- [#13810](https://github.com/OpenHands/OpenHands/pull/13810) **chore(frontend): remove unused hooks and code** — _by @tofarr, merged 2026-04-07T19:10:19Z_
- [#13820](https://github.com/OpenHands/OpenHands/pull/13820) **Remove microagent functionality from frontend code** — _by @tofarr, merged 2026-04-08T18:19:45Z_
- [#13821](https://github.com/OpenHands/OpenHands/pull/13821) **Remove V0-only feedback functionality** — _by @tofarr, merged 2026-04-08T19:48:41Z_
- [#13711](https://github.com/OpenHands/OpenHands/pull/13711) **Fix CVE-2026-34591: Update poetry to 2.3.3** — _by @aivong-openhands, merged 2026-04-08T22:07:42Z_
- [#13825](https://github.com/OpenHands/OpenHands/pull/13825) **feat(frontend): render GFM tables with visible borders in chat messages** — _by @VascoSch92, merged 2026-04-09T09:16:13Z_
- [#13822](https://github.com/OpenHands/OpenHands/pull/13822) **feat: Add organization/authorization info to /api/v1/users/me endpoint** — _by @chuckbutkus, merged 2026-04-09T18:37:14Z_
- [#13835](https://github.com/OpenHands/OpenHands/pull/13835) **Remove microagent management UI** — _by @tofarr, merged 2026-04-09T19:18:24Z_
- [#13833](https://github.com/OpenHands/OpenHands/pull/13833) **Remove CODEOWNERS file** — _by @neubig, merged 2026-04-09T20:55:59Z_
- [#13837](https://github.com/OpenHands/OpenHands/pull/13837) **Removed the path for creating V0 conversations in the API.** — _by @tofarr, merged 2026-04-09T21:10:27Z_
- [#13839](https://github.com/OpenHands/OpenHands/pull/13839) **fix: redact session_api_key from uvicorn WebSocket access logs** — _by @all-hands-bot, merged 2026-04-09T22:02:23Z_
- [#13840](https://github.com/OpenHands/OpenHands/pull/13840) **fix: redact MCP server secrets from log output** — _by @all-hands-bot, merged 2026-04-09T22:02:29Z_
- [#13846](https://github.com/OpenHands/OpenHands/pull/13846) **fix(enterprise): enable SQLAlchemy 2.0 type checking foundation** — _by @malhotra5, merged 2026-04-10T04:42:17Z_
- [#13847](https://github.com/OpenHands/OpenHands/pull/13847) **fix(enterprise): migrate simple storage models to SQLAlchemy 2.0 [1/13]** — _by @malhotra5, merged 2026-04-10T05:04:05Z_
- [#13848](https://github.com/OpenHands/OpenHands/pull/13848) **fix(enterprise): migrate device_code model to SQLAlchemy 2.0 [2/13]** — _by @malhotra5, merged 2026-04-10T05:13:31Z_
- [#13841](https://github.com/OpenHands/OpenHands/pull/13841) **Fix: Use container StartedAt for Docker sandbox status grace period calculation** — _by @tofarr, merged 2026-04-10T12:58:27Z_
- [#13823](https://github.com/OpenHands/OpenHands/pull/13823) **refactor(frontend): Remove V0 conversation creation path** — _by @tofarr, merged 2026-04-10T12:58:51Z_
- [#13865](https://github.com/OpenHands/OpenHands/pull/13865) **Remove unused searchEventsV0 method from EventService** — _by @tofarr, merged 2026-04-10T15:20:58Z_
- [#13869](https://github.com/OpenHands/OpenHands/pull/13869) **fix(slack): use markdown_text parameter for proper Markdown rendering in V1** — _by @VascoSch92, merged 2026-04-10T15:37:21Z_
- [#13870](https://github.com/OpenHands/OpenHands/pull/13870) **refactor(frontend): Remove unused API methods from conversation-service.api.ts** — _by @tofarr, merged 2026-04-10T15:43:34Z_
- [#13871](https://github.com/OpenHands/OpenHands/pull/13871) **Remove V1 enabled flag and agents from frontend** — _by @tofarr, merged 2026-04-10T17:14:26Z_
- [#13872](https://github.com/OpenHands/OpenHands/pull/13872) **Update Suggestions Service API to use new V1 endpoint with pagination** — _by @tofarr, merged 2026-04-10T17:36:16Z_
- [#13875](https://github.com/OpenHands/OpenHands/pull/13875) **Update getUser() to use V1 API endpoint /api/v1/users/git-info** — _by @tofarr, merged 2026-04-10T18:23:00Z_
- [#13876](https://github.com/OpenHands/OpenHands/pull/13876) **Remove unused startConversation method and dead code** — _by @tofarr, merged 2026-04-10T19:24:42Z_
- [#13685](https://github.com/OpenHands/OpenHands/pull/13685) **Fix CVE-2025-64340: Update fastmcp to 3.2.0** — _by @aivong-openhands, merged 2026-04-10T20:08:57Z_
- [#13877](https://github.com/OpenHands/OpenHands/pull/13877) **Migrate git-service API to V1 endpoints** — _by @tofarr, merged 2026-04-11T14:11:59Z_
- [#13887](https://github.com/OpenHands/OpenHands/pull/13887) **Update frontend to use V1 settings endpoints** — _by @tofarr, merged 2026-04-11T15:27:54Z_
- [#13889](https://github.com/OpenHands/OpenHands/pull/13889) **Remove dead frontend exports** — _by @tofarr, merged 2026-04-11T17:40:13Z_
- [#13891](https://github.com/OpenHands/OpenHands/pull/13891) **Remove dead frontend exports** — _by @tofarr, merged 2026-04-11T18:13:04Z_
- [#13888](https://github.com/OpenHands/OpenHands/pull/13888) **Filter out ConversationStateUpdateEvent from shared-events endpoints** — _by @neubig, merged 2026-04-11T21:03:03Z_
- [#13701](https://github.com/OpenHands/OpenHands/pull/13701) **chore(deps): bump docker/login-action from 3 to 4** — _by @dependabot[bot], merged 2026-04-11T22:45:14Z_
- [#13703](https://github.com/OpenHands/OpenHands/pull/13703) **chore(deps): bump actions/checkout from 4 to 6** — _by @dependabot[bot], merged 2026-04-11T22:46:37Z_
- [#13699](https://github.com/OpenHands/OpenHands/pull/13699) **chore(deps): bump actions/upload-artifact from 5 to 7** — _by @dependabot[bot], merged 2026-04-11T22:47:48Z_
- [#13702](https://github.com/OpenHands/OpenHands/pull/13702) **chore(deps): bump docker/metadata-action from 5 to 6** — _by @dependabot[bot], merged 2026-04-11T22:48:47Z_


## Open PRs (new or updated)

- [#13874](https://github.com/OpenHands/OpenHands/pull/13874) **fix: pin Docker frontend builder to Node 22 to match project requirements** — _by @Dheeraj-Bhaskaruni, updated 2026-04-13T22:34:05Z_
- [#13067](https://github.com/OpenHands/OpenHands/pull/13067) **feat(server): support external URL config via WEB_HOST env var** — _by @eureka0928, updated 2026-04-13T09:53:00Z_
- [#13691](https://github.com/OpenHands/OpenHands/pull/13691) **feat(frontend): render sub-agent task events in GUI** — _by @eureka0928, updated 2026-04-13T09:37:15Z_
- [#13904](https://github.com/OpenHands/OpenHands/pull/13904) _(draft)_ **feat(frontend): add X-Org-Id header to API requests for per-tab org context** — _by @hieptl, updated 2026-04-13T08:33:09Z_
- [#13901](https://github.com/OpenHands/OpenHands/pull/13901) **Fix/consolidate spinner components** — _by @Prithvi1994, updated 2026-04-13T06:41:26Z_
- [#13902](https://github.com/OpenHands/OpenHands/pull/13902) **feat(git): add pagination support for branch search queries** — _by @Prithvi1994, updated 2026-04-13T06:41:24Z_
- [#13899](https://github.com/OpenHands/OpenHands/pull/13899) **fix(git): prioritize exact repository matches in search** — _by @Yonsun-w, updated 2026-04-13T03:24:32Z_
- [#13863](https://github.com/OpenHands/OpenHands/pull/13863) **fix: dynamically resolve internal MCP server URL on sandbox restart** — _by @Jinhaooo, updated 2026-04-13T03:13:59Z_


## Closed PRs (not merged)

- [#13897](https://github.com/OpenHands/OpenHands/pull/13897) **fix: deduplicate web-client-config API requests** — _by @tofarr, closed 2026-04-13T15:53:34Z_
- [#13884](https://github.com/OpenHands/OpenHands/pull/13884) **fix: use Jira Wiki Markup instead of Markdown in Jira integrations** — _by @Grizouforever, closed 2026-04-13T15:47:13Z_
- [#13866](https://github.com/OpenHands/OpenHands/pull/13866) **fix: prevent duplicate /api/v1/web-client/config requests on hot refresh** — _by @tofarr, closed 2026-04-13T12:57:43Z_
- [#12544](https://github.com/OpenHands/OpenHands/pull/12544) **feat(frontend): add archive conversations feature (#12468)** — _by @timon0305, closed 2026-04-13T02:14:57Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`3cd74d3`](https://github.com/OpenHands/OpenHands/commit/3cd74d3baca96c521ad81524a1063316302e4524) fix(jira): use markdown_to_jira_markup for proper wiki markup rendering (#13879) — _@VascoSch92_
- [`2001884`](https://github.com/OpenHands/OpenHands/commit/20018842a4e3dd9ace73ee707730d12d4478a370) fix(security): suppress SQLAlchemy DEBUG logging that leaks credentials (#13719) — _@simonrosenberg_
- [`cce2080`](https://github.com/OpenHands/OpenHands/commit/cce2080ae0a93638cacc2c81342350b15458222f) fix: correct wrong variable in max_size validation error message in condensers (#13816) — _@Ricardo-M-L_
- [`a0304b9`](https://github.com/OpenHands/OpenHands/commit/a0304b9e4cc947cdd90df30130a86107cc1a1096) fix: correct logger format args and -0 slice bug (#13817) — _@Ricardo-M-L_
- [`de492b7`](https://github.com/OpenHands/OpenHands/commit/de492b792f3ac4ca02cf386421d4dc414931c7cf) refactor(llm-settings): Use V1 providers/models endpoints, lazy-load models per provider (#13892) — _@tofarr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
