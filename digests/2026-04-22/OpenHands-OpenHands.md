# OpenHands/OpenHands — 2026-04-22

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-21T23:59:59.000Z → 2026-04-22T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's dominant theme is the continued **V0 → V1 migration** and a large **SQLAlchemy 2.0 typing cleanup**, both landing in bulk on `main` in preparation for the `release:cloud-1.23.0` train. A draft Release 1.7.0 PR (#13922) is staged off commit `7bc3300`.

**V0 removals (tofarr):** Four more legacy packages were deleted today — V0 sessions (#14061), security (#14054), linter (#14055), and the `conversation_manager` package (#14034). A follow-up to remove the V0 resolver package entirely is open in #14062, with V0 controller (#14060), memory (#14057), and microagent (#14053) queued as drafts. This is aggressive cleanup; reviewers of any code still touching `openhands/server/session/`, `openhands/security/`, or `openhands/resolver/` should look here first.

**SQLAlchemy 2.0 migration (malhotra5):** A long-running series merged today — core models migrated to `mapped_column()`/`Mapped[T]` (#14065, #14064), enterprise model batches 8–13 (#13854–#13859), plus a string of type-fix PRs adding the missing `sqlalchemy` mypy stub and resolving the errors it surfaces (#13413, #14072, #14073, #14075, #14076, #14078, #14079, #14081). Net effect: SQLAlchemy is now type-checked end-to-end. Closes bug #13412.

**Notable fixes worth reading:**
- `fix(frontend): restore notification sound and browser tab flash on agent completion` (#14049) — regression from #10839; user-visible.
- `security: Invalidate SESSION_API_KEY on pause and require RUNNING status` (#14001) — hardens against leaked session-key reuse on paused sandboxes.
- `Hide All toggle on SaaS LLM settings` (#14013) and `fix: restore org settings payload contract` (#14051) — SaaS settings UX/contract fixes after recent refactors.
- `Make archived conversations read-only` (#14077, open) — stops misleading "starting" spinners on `MISSING` sandboxes.
- CVE bump: `cryptography` → 46.0.7 (#13968).

**New issues:** #14082 reports `SANDBOX_RUNTIME_CONTAINER_IMAGE` being ignored in docker-compose (always pulls `ghcr.io/openhands/agent-server`); #14028 (Gemini 404 from doubled `base_url` via litellm) saw new activity and is worth triaging given Gemini is fully broken in Settings UI.

## Releases

_None in window._


## Merged PRs

- [#13413](https://github.com/OpenHands/OpenHands/pull/13413) **Add missing `SqlAlchemy` type stub to mypy** — _by @malhotra5, merged 2026-04-22T20:52:27Z_
- [#14081](https://github.com/OpenHands/OpenHands/pull/14081) **fix: add return type annotation for ConversationMetadata conversion (SQLAlchemy typing PR7)** — _by @malhotra5, merged 2026-04-22T20:37:18Z_
- [#14079](https://github.com/OpenHands/OpenHands/pull/14079) **fix: correct return types and remove unreachable code (SQLAlchemy typing PR6)** — _by @malhotra5, merged 2026-04-22T20:17:11Z_
- [#14075](https://github.com/OpenHands/OpenHands/pull/14075) **fix: correct SQLAlchemy type annotations in DbSessionInjector** — _by @malhotra5, merged 2026-04-22T20:13:40Z_
- [#14078](https://github.com/OpenHands/OpenHands/pull/14078) **fix: handle nullable arguments in enterprise code** — _by @malhotra5, merged 2026-04-22T20:10:09Z_
- [#14076](https://github.com/OpenHands/OpenHands/pull/14076) **fix: correct SQLAlchemy Result and Table type annotations** — _by @malhotra5, merged 2026-04-22T19:43:14Z_
- [#14073](https://github.com/OpenHands/OpenHands/pull/14073) **fix: handle nullable datetime in _fix_timezone methods** — _by @malhotra5, merged 2026-04-22T19:16:26Z_
- [#14072](https://github.com/OpenHands/OpenHands/pull/14072) **fix: add ColumnElement type annotation for SQLAlchemy filter conditions** — _by @malhotra5, merged 2026-04-22T19:06:08Z_
- [#14065](https://github.com/OpenHands/OpenHands/pull/14065) **fix: migrate core SQLAlchemy models to SQLAlchemy 2.0 mapped_column** — _by @malhotra5, merged 2026-04-22T17:54:08Z_
- [#14064](https://github.com/OpenHands/OpenHands/pull/14064) **fix(enterprise): migrate StoredVerifiedModel to SQLAlchemy 2.0 mapped_column** — _by @malhotra5, merged 2026-04-22T17:53:48Z_
- [#14061](https://github.com/OpenHands/OpenHands/pull/14061) **APP-1374 Removed V0 sessions** — _by @tofarr, merged 2026-04-22T14:47:18Z_
- [#14056](https://github.com/OpenHands/OpenHands/pull/14056) **APP-1366 Removed V0 Critic** — _by @tofarr, merged 2026-04-21T21:35:30Z_
- [#14055](https://github.com/OpenHands/OpenHands/pull/14055) **APP-1362 Remove V0 linter Package** — _by @tofarr, merged 2026-04-22T02:05:21Z_
- [#14054](https://github.com/OpenHands/OpenHands/pull/14054) **APP-1361 Remove V0 security Package** — _by @tofarr, merged 2026-04-22T02:05:10Z_
- [#14052](https://github.com/OpenHands/OpenHands/pull/14052) **PLTF-139: Add Analytics redirect URI to Keycloak allhands client** — _by @aivong-openhands, merged 2026-04-21T20:14:45Z_
- [#14051](https://github.com/OpenHands/OpenHands/pull/14051) **fix: restore org settings payload contract** — _by @neubig, merged 2026-04-22T19:03:41Z_
- [#14050](https://github.com/OpenHands/OpenHands/pull/14050) **feat: pass WEB_HOST to agent context in V1 conversations** — _by @malhotra5, merged 2026-04-21T16:12:15Z_
- [#14049](https://github.com/OpenHands/OpenHands/pull/14049) **fix(frontend): restore notification sound and browser tab flash on agent completion** — _by @xingyaoww, merged 2026-04-22T14:22:34Z_
- [#14044](https://github.com/OpenHands/OpenHands/pull/14044) **fix(backend): repair org-defaults LLM save flow and sync managed keys to members** — _by @hieptl, merged 2026-04-21T17:38:53Z_
- [#14042](https://github.com/OpenHands/OpenHands/pull/14042) **fix: prevent infinite redirect loop on org-defaults settings pages** — _by @neubig, merged 2026-04-20T22:55:49Z_
- [#14041](https://github.com/OpenHands/OpenHands/pull/14041) **chore: use OPENHANDS_BOT_GITHUB_PAT_PUBLIC** — _by @simonrosenberg, merged 2026-04-21T23:19:22Z_
- [#14034](https://github.com/OpenHands/OpenHands/pull/14034) **Remove openhands.server.conversation_manager package (V0 to V1 migration)** — _by @tofarr, merged 2026-04-22T02:17:11Z_
- [#14033](https://github.com/OpenHands/OpenHands/pull/14033) **Remove agent from the LLM settings page** — _by @neubig, merged 2026-04-20T16:16:02Z_
- [#14032](https://github.com/OpenHands/OpenHands/pull/14032) **fix(backend): restore git-organizations endpoint for git conversation routing** — _by @hieptl, merged 2026-04-20T15:48:24Z_
- [#14031](https://github.com/OpenHands/OpenHands/pull/14031) **fix(frontend): show org-wide settings badge beside title on org-defaults pages** — _by @hieptl, merged 2026-04-20T19:18:17Z_
- [#14030](https://github.com/OpenHands/OpenHands/pull/14030) **fix(frontend): hide and block personal LLM/Condenser/Verification settings in team orgs** — _by @hieptl, merged 2026-04-20T17:52:26Z_
- [#14024](https://github.com/OpenHands/OpenHands/pull/14024) **Removing the deprecated agenthub package** — _by @tofarr, merged 2026-04-20T03:42:23Z_
- [#14020](https://github.com/OpenHands/OpenHands/pull/14020) **fix(security): redact API keys from MCP config logging** — _by @all-hands-bot, merged 2026-04-19T16:53:41Z_
- [#14019](https://github.com/OpenHands/OpenHands/pull/14019) **fix(security): redact session_api_key from WebSocket access logs** — _by @all-hands-bot, merged 2026-04-19T16:54:31Z_
- [#14013](https://github.com/OpenHands/OpenHands/pull/14013) **Hide All toggle on SaaS LLM settings** — _by @neubig, merged 2026-04-22T19:13:57Z_
- [#14012](https://github.com/OpenHands/OpenHands/pull/14012) **Allow supported Python interpreters in Makefile setup** — _by @neubig, merged 2026-04-22T12:25:56Z_
- [#14005](https://github.com/OpenHands/OpenHands/pull/14005) **feat: Tag images instead of rebuilding on git tags; stop publishing v0 runtime image** — _by @jlav, merged 2026-04-21T14:58:05Z_
- [#14002](https://github.com/OpenHands/OpenHands/pull/14002) **security: Require RUNNING status for session API key validation** — _by @chuckbutkus, merged 2026-04-21T18:48:23Z_
- [#14001](https://github.com/OpenHands/OpenHands/pull/14001) **security: Invalidate SESSION_API_KEY on pause and require RUNNING status** — _by @chuckbutkus, merged 2026-04-22T18:49:28Z_
- [#14000](https://github.com/OpenHands/OpenHands/pull/14000) **Move Tavily search key to MCP settings** — _by @neubig, merged 2026-04-20T13:45:03Z_
- [#13996](https://github.com/OpenHands/OpenHands/pull/13996) **fix(settings): align MCP settings layout with other settings pages** — _by @octo-patch, merged 2026-04-18T11:19:49Z_
- [#13989](https://github.com/OpenHands/OpenHands/pull/13989) **Fix V1 resumed conversation status sync** — _by @erisfully, merged 2026-04-16T21:49:45Z_
- [#13988](https://github.com/OpenHands/OpenHands/pull/13988) **fix: invalidate sandbox and VS Code URL caches on conversation resume** — _by @xingyaoww, merged 2026-04-21T15:18:01Z_
- [#13985](https://github.com/OpenHands/OpenHands/pull/13985) **refactor: Replace load_custom_secrets_names with search_custom_secrets** — _by @tofarr, merged 2026-04-17T00:50:39Z_
- [#13981](https://github.com/OpenHands/OpenHands/pull/13981) **fix(frontend): Fix ThinkAction rendering showing raw JSON in chat** — _by @xingyaoww, merged 2026-04-21T14:57:47Z_
- [#13980](https://github.com/OpenHands/OpenHands/pull/13980) **fix(enterprise): Apply deployment LLM proxy URL override in /api/v1/users/me** — _by @xingyaoww, merged 2026-04-17T05:23:42Z_
- [#13979](https://github.com/OpenHands/OpenHands/pull/13979) **Refresh git settings after provider updates** — _by @neubig, merged 2026-04-18T11:47:45Z_
- [#13974](https://github.com/OpenHands/OpenHands/pull/13974) **Fix get_latest_token to return str instead of SecretStr** — _by @tofarr, merged 2026-04-16T17:41:44Z_
- [#13968](https://github.com/OpenHands/OpenHands/pull/13968) **Fix CVE-2026-39892: Update cryptography to 46.0.7** — _by @aivong-openhands, merged 2026-04-22T19:07:30Z_
- [#13965](https://github.com/OpenHands/OpenHands/pull/13965) **Fix CVE-2026-40347: Update python-multipart to 0.0.26** — _by @aivong-openhands, merged 2026-04-17T17:32:15Z_
- [#13963](https://github.com/OpenHands/OpenHands/pull/13963) **frontend: Remove deprecated V0 conversation APIs** — _by @tofarr, merged 2026-04-16T14:57:25Z_
- [#13961](https://github.com/OpenHands/OpenHands/pull/13961) **chore(deps): bump docker/build-push-action from 6 to 7** — _by @dependabot[bot], merged 2026-04-18T13:50:00Z_
- [#13960](https://github.com/OpenHands/OpenHands/pull/13960) **chore(deps): bump docker/login-action from 3 to 4** — _by @dependabot[bot], merged 2026-04-18T13:34:16Z_
- [#13959](https://github.com/OpenHands/OpenHands/pull/13959) **chore(deps): bump docker/metadata-action from 5 to 6** — _by @dependabot[bot], merged 2026-04-18T13:34:10Z_
- [#13958](https://github.com/OpenHands/OpenHands/pull/13958) **chore(deps): bump actions/github-script from 7 to 9** — _by @dependabot[bot], merged 2026-04-17T21:06:40Z_
- [#13957](https://github.com/OpenHands/OpenHands/pull/13957) **fix: add flat SDK compat fields to /api/v1/users/me response** — _by @hieptl, merged 2026-04-16T16:11:51Z_
- [#13952](https://github.com/OpenHands/OpenHands/pull/13952) **Remove deprecated V0 FastAPI endpoints** — _by @tofarr, merged 2026-04-19T14:41:16Z_
- [#13951](https://github.com/OpenHands/OpenHands/pull/13951) **Fix merge error in migrations** — _by @tofarr, merged 2026-04-16T00:40:19Z_
- [#13950](https://github.com/OpenHands/OpenHands/pull/13950) **Fix duplicate enterprise migration revision** — _by @neubig, merged 2026-04-16T15:02:09Z_
- [#13947](https://github.com/OpenHands/OpenHands/pull/13947) **feat(frontend): Remove onboarding feature flags** — _by @HeyItsChloe, merged 2026-04-16T05:28:28Z_
- [#13941](https://github.com/OpenHands/OpenHands/pull/13941) **feat(frontend): add automations button to sidebar** — _by @hieptl, merged 2026-04-15T18:34:55Z_
- [#13940](https://github.com/OpenHands/OpenHands/pull/13940) **feat(frontend): removed PROJ_USER_JOURNEY feature flag** — _by @HeyItsChloe, merged 2026-04-15T18:35:19Z_
- [#13935](https://github.com/OpenHands/OpenHands/pull/13935) **chore(deps-dev): bump pytest from 9.0.2 to 9.0.3** — _by @dependabot[bot], merged 2026-04-18T18:29:12Z_
- [#13934](https://github.com/OpenHands/OpenHands/pull/13934) **chore(deps): bump pygments from 2.19.2 to 2.20.0** — _by @dependabot[bot], merged 2026-04-18T18:14:59Z_
- [#13933](https://github.com/OpenHands/OpenHands/pull/13933) **chore(deps): bump pillow from 12.1.1 to 12.2.0** — _by @dependabot[bot], merged 2026-04-16T15:47:35Z_
- [#13932](https://github.com/OpenHands/OpenHands/pull/13932) **chore(deps): bump the security-all group across 1 directory with 3 updates** — _by @dependabot[bot], merged 2026-04-21T14:40:52Z_
- [#13931](https://github.com/OpenHands/OpenHands/pull/13931) **PLTF-1269: add docstrings to mock classes in maintenance runner tests** — _by @aivong-openhands, merged 2026-04-18T13:23:46Z_
- [#13924](https://github.com/OpenHands/OpenHands/pull/13924) **Update LICENSE** — _by @enyst, merged 2026-04-14T19:03:41Z_
- [#13921](https://github.com/OpenHands/OpenHands/pull/13921) **feat(enterprise): Build ARM64 image for enterprise, use native runners for all images** — _by @jlav, merged 2026-04-14T20:28:19Z_
- [#13918](https://github.com/OpenHands/OpenHands/pull/13918) **feat(frontend): add /btw side-channel command for asking the agent mid-task** — _by @VascoSch92, merged 2026-04-15T21:47:44Z_
- [#13914](https://github.com/OpenHands/OpenHands/pull/13914) **fix(security): extend RedactURLParamsFilter to cover all uvicorn log formats** — _by @all-hands-bot, merged 2026-04-15T18:24:25Z_
- [#13913](https://github.com/OpenHands/OpenHands/pull/13913) **fix(security): redact MCP config secrets before logging** — _by @all-hands-bot, merged 2026-04-15T18:22:51Z_
- [#13911](https://github.com/OpenHands/OpenHands/pull/13911) **Regenerate poetry.lock with Poetry 2.3.3 after rebase** — _by @all-hands-bot, merged 2026-04-21T15:29:15Z_
- [#13910](https://github.com/OpenHands/OpenHands/pull/13910) **fix: paginate through backend pages when filtering shared events** — _by @xingyaoww, merged 2026-04-14T13:20:34Z_
- [#13909](https://github.com/OpenHands/OpenHands/pull/13909) **APP-1170: Jira : add V1 conversation support and multiple bug fixes** — _by @tofarr, merged 2026-04-14T20:39:00Z_
- [#13908](https://github.com/OpenHands/OpenHands/pull/13908) **feat: add manage automations permission and broadcast org selection** — _by @hieptl, merged 2026-04-14T11:05:03Z_
- [#13905](https://github.com/OpenHands/OpenHands/pull/13905) **APP-1238 Fix concurrent GET /api/v1/web-client/config calls** — _by @tofarr, merged 2026-04-14T21:02:45Z_
- [#13892](https://github.com/OpenHands/OpenHands/pull/13892) **refactor(llm-settings): Use V1 providers/models endpoints, lazy-load models per provider** — _by @tofarr, merged 2026-04-13T04:42:57Z_
- [#13890](https://github.com/OpenHands/OpenHands/pull/13890) **docs: fix app_server README to reflect actual module structure** — _by @JefferyLiu6, merged 2026-04-18T13:26:24Z_
- [#13879](https://github.com/OpenHands/OpenHands/pull/13879) **fix(jira): use markdown_to_jira_markup for proper wiki markup rendering** — _by @VascoSch92, merged 2026-04-13T21:40:02Z_
- [#13859](https://github.com/OpenHands/OpenHands/pull/13859) **fix(enterprise): migrate storage models to SQLAlchemy 2.0 [13/13]** — _by @malhotra5, merged 2026-04-22T17:41:39Z_
- [#13858](https://github.com/OpenHands/OpenHands/pull/13858) **fix(enterprise): migrate org-related models to SQLAlchemy 2.0 [12/13]** — _by @malhotra5, merged 2026-04-22T17:16:29Z_
- [#13857](https://github.com/OpenHands/OpenHands/pull/13857) **fix(enterprise): migrate Git provider models to SQLAlchemy 2.0 [11/13]** — _by @malhotra5, merged 2026-04-22T16:53:54Z_
- [#13856](https://github.com/OpenHands/OpenHands/pull/13856) **fix(enterprise): migrate Linear models to SQLAlchemy 2.0 [10/13]** — _by @malhotra5, merged 2026-04-22T16:53:45Z_
- [#13855](https://github.com/OpenHands/OpenHands/pull/13855) **fix(enterprise): migrate Jira models to SQLAlchemy 2.0 [9/13]** — _by @malhotra5, merged 2026-04-22T16:57:20Z_
- [#13854](https://github.com/OpenHands/OpenHands/pull/13854) **fix(enterprise): migrate Slack models to SQLAlchemy 2.0 [8/13]** — _by @malhotra5, merged 2026-04-22T16:57:38Z_
- [#13853](https://github.com/OpenHands/OpenHands/pull/13853) **fix(enterprise): migrate auth models to SQLAlchemy 2.0 [7/13]** — _by @malhotra5, merged 2026-04-21T19:07:13Z_
- [#13852](https://github.com/OpenHands/OpenHands/pull/13852) **fix(enterprise): migrate user models to SQLAlchemy 2.0 [6/13]** — _by @malhotra5, merged 2026-04-21T18:49:19Z_
- [#13851](https://github.com/OpenHands/OpenHands/pull/13851) **fix(enterprise): migrate conversation_callback model to SQLAlchemy 2.0 [5/13]** — _by @malhotra5, merged 2026-04-21T18:38:19Z_
- [#13850](https://github.com/OpenHands/OpenHands/pull/13850) **fix(enterprise): migrate org models to SQLAlchemy 2.0 [4/13]** — _by @malhotra5, merged 2026-04-21T18:38:11Z_
- [#13849](https://github.com/OpenHands/OpenHands/pull/13849) **fix(enterprise): migrate telemetry models to SQLAlchemy 2.0 [3/13]** — _by @malhotra5, merged 2026-04-20T17:00:42Z_
- [#13829](https://github.com/OpenHands/OpenHands/pull/13829) **chore(deps): bump node from 25.8-trixie-slim to 25.9-trixie-slim in /containers/app** — _by @dependabot[bot], merged 2026-04-18T18:29:15Z_
- [#13817](https://github.com/OpenHands/OpenHands/pull/13817) **fix: correct logger format args and -0 slice bug** — _by @Ricardo-M-L, merged 2026-04-13T15:43:31Z_
- [#13816](https://github.com/OpenHands/OpenHands/pull/13816) **fix: correct wrong variable in max_size validation error message in condensers** — _by @Ricardo-M-L, merged 2026-04-13T15:44:41Z_
- [#13802](https://github.com/OpenHands/OpenHands/pull/13802) **docs: fix broken React Router test doc links** — _by @buyua9, merged 2026-04-17T22:47:28Z_
- [#13793](https://github.com/OpenHands/OpenHands/pull/13793) **feat: add automation event forwarding for GitHub webhooks** — _by @malhotra5, merged 2026-04-21T17:41:54Z_
- [#13761](https://github.com/OpenHands/OpenHands/pull/13761) **docs: add note about updating enterprise poetry lockfile** — _by @aivong-openhands, merged 2026-04-18T13:24:56Z_
- [#13719](https://github.com/OpenHands/OpenHands/pull/13719) **fix(security): suppress SQLAlchemy DEBUG logging that leaks credentials** — _by @simonrosenberg, merged 2026-04-13T16:49:25Z_
- [#13708](https://github.com/OpenHands/OpenHands/pull/13708) **docs: align AgentHub task tracking references** — _by @xsfX20, merged 2026-04-18T13:40:15Z_
- [#13700](https://github.com/OpenHands/OpenHands/pull/13700) **chore(deps): bump actions/download-artifact from 7 to 8** — _by @dependabot[bot], merged 2026-04-18T13:34:13Z_
- [#13675](https://github.com/OpenHands/OpenHands/pull/13675) **feat: Add DEPLOYMENT_MODE detection for conditional onboarding** — _by @HeyItsChloe, merged 2026-04-15T17:57:57Z_
- [#13402](https://github.com/OpenHands/OpenHands/pull/13402) **Use SDK package public exports where available** — _by @enyst, merged 2026-04-15T20:05:08Z_
- [#13306](https://github.com/OpenHands/OpenHands/pull/13306) **settings: expose SDK settings schema to OpenHands** — _by @neubig, merged 2026-04-15T23:00:35Z_


## Open PRs (new or updated)

- [#14062](https://github.com/OpenHands/OpenHands/pull/14062) **Removed the V0 resolver** — _by @tofarr, updated 2026-04-22T22:59:40Z_
- [#13967](https://github.com/OpenHands/OpenHands/pull/13967) **Fix GHSA-jj6c-8h6c-hppx: Update pypdf to 6.10.1** — _by @aivong-openhands, updated 2026-04-22T22:26:12Z_
- [#13922](https://github.com/OpenHands/OpenHands/pull/13922) _(draft)_ **Release 1.7.0** — _by @mamoodi, updated 2026-04-22T21:41:25Z_
- [#14077](https://github.com/OpenHands/OpenHands/pull/14077) **Make archived conversations read-only without loading states** — _by @malhotra5, updated 2026-04-22T21:08:22Z_
- [#14080](https://github.com/OpenHands/OpenHands/pull/14080) _(draft)_ **Canonicalize bare known LLM models in SaaS settings** — _by @neubig, updated 2026-04-22T20:33:16Z_
- [#14070](https://github.com/OpenHands/OpenHands/pull/14070) **fix(integrations): guard Bitbucket get_user against null links/avatar** — _by @boskodev790, updated 2026-04-22T19:16:39Z_
- [#14068](https://github.com/OpenHands/OpenHands/pull/14068) **fix(app_server): raise HTTPException in update_custom_secret 404 path** — _by @boskodev790, updated 2026-04-22T18:28:18Z_
- [#14027](https://github.com/OpenHands/OpenHands/pull/14027) **chore: update protobufjs for CVE-2026-41242** — _by @aivong-openhands, updated 2026-04-22T18:27:02Z_
- [#13516](https://github.com/OpenHands/OpenHands/pull/13516) **WebSocket Gateway** — _by @kripper, updated 2026-04-22T18:20:29Z_
- [#14006](https://github.com/OpenHands/OpenHands/pull/14006) _(draft)_ **feat: move PostHog server side** — _by @HeyItsChloe, updated 2026-04-22T18:00:16Z_
- [#14066](https://github.com/OpenHands/OpenHands/pull/14066) **fix(integrations): return True on error in Azure DevOps is_pr_open** — _by @boskodev790, updated 2026-04-22T17:55:34Z_
- [#13966](https://github.com/OpenHands/OpenHands/pull/13966) **Fix CVE-2026-34444: Update lupa to 2.8** — _by @aivong-openhands, updated 2026-04-22T16:38:55Z_
- [#14053](https://github.com/OpenHands/OpenHands/pull/14053) _(draft)_ **APP-1359 Removed V0 microagent Package** — _by @tofarr, updated 2026-04-22T15:23:35Z_
- [#14063](https://github.com/OpenHands/OpenHands/pull/14063) **fix: deliver pending messages in self-hosted installs without session_api_key** — _by @octo-patch, updated 2026-04-22T15:22:52Z_
- [#14057](https://github.com/OpenHands/OpenHands/pull/14057) _(draft)_ **APP-1360 Removed V0 memory package** — _by @tofarr, updated 2026-04-22T15:22:22Z_
- [#14060](https://github.com/OpenHands/OpenHands/pull/14060) _(draft)_ **Removed V0 controller** — _by @tofarr, updated 2026-04-22T14:51:06Z_
- [#14059](https://github.com/OpenHands/OpenHands/pull/14059) **fix(backend): persist keycloak email on invitation acceptance** — _by @hieptl, updated 2026-04-22T14:46:49Z_
- [#13938](https://github.com/OpenHands/OpenHands/pull/13938) **chore(deps-dev): bump the eslint group across 1 directory with 3 updates** — _by @dependabot[bot], updated 2026-04-22T14:37:17Z_
- [#14036](https://github.com/OpenHands/OpenHands/pull/14036) **chore(deps): bump the version-all group in /frontend with 37 updates** — _by @dependabot[bot], updated 2026-04-22T14:34:28Z_
- [#14009](https://github.com/OpenHands/OpenHands/pull/14009) **feat: add secrets field to AppConversationStartRequest for direct API secret passing** — _by @jpshackelford, updated 2026-04-22T12:15:57Z_
- [#14026](https://github.com/OpenHands/OpenHands/pull/14026) **refactor(server): extract legacy HTTP routers into legacy_http_routes…** — _by @enjoyandlove, updated 2026-04-22T05:31:11Z_
- [#14022](https://github.com/OpenHands/OpenHands/pull/14022) **feat(app-server): paginate V1 branch search with non-empty query** — _by @ChiragArora31, updated 2026-04-22T00:52:04Z_


## Closed PRs (not merged)

- [#14067](https://github.com/OpenHands/OpenHands/pull/14067) **fix: resolve SQLAlchemy mypy type errors in core OpenHands files** — _by @malhotra5, closed 2026-04-22T18:47:39Z_
- [#14069](https://github.com/OpenHands/OpenHands/pull/14069) **build(deps): bump openhands-aci from 0.3.2 to 0.3.3** — _by @TuringND, closed 2026-04-22T18:38:19Z_
- [#13415](https://github.com/OpenHands/OpenHands/pull/13415) **Add type annotations to SQLAlchemy Column definitions** — _by @malhotra5, closed 2026-04-22T17:44:11Z_
- [#13419](https://github.com/OpenHands/OpenHands/pull/13419) **Feat: enterprise banner for login page** — _by @malhotra5, closed 2026-04-22T17:43:42Z_
- [#13973](https://github.com/OpenHands/OpenHands/pull/13973) **feat: Complete PostHog** — _by @HeyItsChloe, closed 2026-04-22T15:22:51Z_
- [#14058](https://github.com/OpenHands/OpenHands/pull/14058) **feat: add Astraflow (ModelVerse) provider support** — _by @ucloudnb666, closed 2026-04-22T03:31:57Z_


## Notable Issues

- [#14082](https://github.com/OpenHands/OpenHands/issues/14082) **[Bug]: SANDBOX_RUNTIME_CONTAINER_IMAGE not working in docker-compose** _[bug]_ — _by @afonsoft_
- [#13412](https://github.com/OpenHands/OpenHands/issues/13412) **[Bug]: MyPy doesn't check `SQLAlchemy` type stubs** _[bug]_ — _by @malhotra5_ _(closed 2026-04-22T20:52:28Z)_
- [#14028](https://github.com/OpenHands/OpenHands/issues/14028) **[Bug]: Gemini models always 404 (GeminiException) - base_url gets doubled** — _by @StatPan_


## Commits on `main`

- [`7bc3300`](https://github.com/OpenHands/OpenHands/commit/7bc3300981fa1cb4689d6e1b0c0bdd7fd77ac954) Add missing `SqlAlchemy` type stub to mypy (#13413) — _@malhotra5_
- [`3e02837`](https://github.com/OpenHands/OpenHands/commit/3e0283796e4ea45bc500e609010cfdc635ac4383) fix: add return type annotation for ConversationMetadata conversion (SQLAlchemy typing PR7) (#14081) — _@malhotra5_
- [`cd0175d`](https://github.com/OpenHands/OpenHands/commit/cd0175d83ef5a97968c2d8b10343e1f4b0c8786c) fix: correct return types and remove unreachable code (SQLAlchemy typing PR6) (#14079) — _@malhotra5_
- [`f313cfc`](https://github.com/OpenHands/OpenHands/commit/f313cfceb9333f0685d55c7c74eaeb4ddde133f7) fix: correct SQLAlchemy type annotations in DbSessionInjector (#14075) — _@malhotra5_
- [`fb0108f`](https://github.com/OpenHands/OpenHands/commit/fb0108f946be6df1552e8a2b75d5e81572e7a311) fix: handle nullable arguments in enterprise code (#14078) — _@malhotra5_
- [`6b29a82`](https://github.com/OpenHands/OpenHands/commit/6b29a82de39b7babdb20d79a2881cc508a16ac31) fix: correct SQLAlchemy Result and Table type annotations (#14076) — _@malhotra5_
- [`033c620`](https://github.com/OpenHands/OpenHands/commit/033c6202b7bed32e9c09afec92cab021b46d7673) fix: handle nullable datetime in _fix_timezone methods (#14073) — _@malhotra5_
- [`d64d0d6`](https://github.com/OpenHands/OpenHands/commit/d64d0d6bf622ea7069c90a636f2a79786b1a039f) Hide All toggle on SaaS LLM settings (#14013) — _@neubig_
- [`b357c0c`](https://github.com/OpenHands/OpenHands/commit/b357c0c3bb6d0e55c87ecea2262db7efe7c9d896) Fix CVE-2026-39892: Update cryptography to 46.0.7 (#13968) — _@aivong-openhands_
- [`16374dc`](https://github.com/OpenHands/OpenHands/commit/16374dc9c01fcc087f815150040e86234c66cab4) fix: add ColumnElement type annotation for SQLAlchemy filter conditions (#14072) — _@malhotra5_
- [`a892606`](https://github.com/OpenHands/OpenHands/commit/a8926068ff61ca215eb29e706f4e2fbef1deaa6b) fix: restore org settings payload contract (#14051) — _@neubig_
- [`f318792`](https://github.com/OpenHands/OpenHands/commit/f318792a17ea239f1d5ac4037fc07caedb0133d8) security: Invalidate SESSION_API_KEY on pause and require RUNNING status (#14001) — _@chuckbutkus_
- [`505095d`](https://github.com/OpenHands/OpenHands/commit/505095d50afd50d999ab4faf2f4f2679dd02914a) fix: migrate core SQLAlchemy models to SQLAlchemy 2.0 mapped_column (#14065) — _@malhotra5_
- [`51f9266`](https://github.com/OpenHands/OpenHands/commit/51f9266abb6ce25f74354b0af1fdded0dec929d0) fix(enterprise): migrate StoredVerifiedModel to SQLAlchemy 2.0 mapped_column (#14064) — _@malhotra5_
- [`439fa8f`](https://github.com/OpenHands/OpenHands/commit/439fa8fc30fa3e8f5f9ed4f6da93cf988295cb20) fix(enterprise): migrate storage models to SQLAlchemy 2.0 [13/13] (#13859) — _@malhotra5_
- [`c1ae41a`](https://github.com/OpenHands/OpenHands/commit/c1ae41acb9d5a5718c1f21e9209945d2e1254966) fix(enterprise): migrate org-related models to SQLAlchemy 2.0 [12/13] (#13858) — _@malhotra5_
- [`270d9b1`](https://github.com/OpenHands/OpenHands/commit/270d9b1ccebdc52c945fe728d2d0dbf536513224) fix(enterprise): migrate Slack models to SQLAlchemy 2.0 [8/13] (#13854) — _@malhotra5_
- [`3b0e201`](https://github.com/OpenHands/OpenHands/commit/3b0e201a4e90168ffc099f336e7580c1301d8758) fix(enterprise): migrate Jira models to SQLAlchemy 2.0 [9/13] (#13855) — _@malhotra5_
- [`cd24b58`](https://github.com/OpenHands/OpenHands/commit/cd24b5838b889ff2c273ebac5bb9b5c0e120e382) fix(enterprise): migrate Git provider models to SQLAlchemy 2.0 [11/13] (#13857) — _@malhotra5_
- [`1509018`](https://github.com/OpenHands/OpenHands/commit/1509018ee27459b0460a2da788e8fc979a39280f) fix(enterprise): migrate Linear models to SQLAlchemy 2.0 [10/13] (#13856) — _@malhotra5_
- [`1605e97`](https://github.com/OpenHands/OpenHands/commit/1605e97d80c6cfc10f872c51ab5f69adc464b2cf) APP-1374 Removed V0 sessions (#14061) — _@tofarr_
- [`06d0320`](https://github.com/OpenHands/OpenHands/commit/06d0320e5cedc69fab054bc821a4da024411935c) fix(frontend): restore notification sound and browser tab flash on agent completion (#14049) — _@xingyaoww_
- [`f7dce9c`](https://github.com/OpenHands/OpenHands/commit/f7dce9c6c0929a2e74e15499f723d376e1e98238) Allow supported Python interpreters in Makefile setup (#14012) — _@neubig_
- [`13e9d75`](https://github.com/OpenHands/OpenHands/commit/13e9d7584ac1662612b13b89a43f4f4ca3f2cb18) Remove openhands.server.conversation_manager package (V0 to V1 migration) (#14034) — _@tofarr_
- [`e0a4c35`](https://github.com/OpenHands/OpenHands/commit/e0a4c35c9c126c258837d8db5756899c4ab781c6) APP-1362 Remove V0 linter Package (#14055) — _@tofarr_
- [`701231c`](https://github.com/OpenHands/OpenHands/commit/701231cbf3d3af69be2ebb7816227e2833bd37a8) APP-1361 Remove V0 security Package (#14054) — _@tofarr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
