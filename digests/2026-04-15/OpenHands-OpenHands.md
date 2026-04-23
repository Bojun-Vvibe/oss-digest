# OpenHands/OpenHands — 2026-04-15

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-14T23:59:59.000Z → 2026-04-15T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a cluster of security and settings-plumbing work landing on `main`, plus visible new UX surfaces for the agent. Two security fixes from `all-hands-bot` went in back-to-back: redacting MCP config secrets before logging (commit e11faa6, #13913) and extending `RedactURLParamsFilter` to cover all uvicorn log formats (commit d58106b, #13914). Operators upgrading should pick these up. Separately, #13819 closed without merge to bump litellm to 1.83.0 for CVE-2026-35030 — worth tracking whether a replacement lands.

On the architecture side, neubig merged "expose SDK settings schema to OpenHands" (#13306, commit b4da0e1), and enyst landed #13402 (commit eb940ea) switching internal imports to the SDK package's public exports — both move the repo further toward the SDK boundary and may affect downstream forks importing internals.

User-facing additions:
- New `/btw` side-channel command lets users interject mid-task without interrupting the agent (#13918, commit d548665) — likely the most interesting feature for end users today.
- Automations button added to the sidebar (#13941) and the `PROJ_USER_JOURNEY` feature flag removed (#13940), suggesting that journey UI is now default-on.
- `DEPLOYMENT_MODE` detection enables conditional onboarding flows (#13675).

Notable new/active PRs to watch: #13943 fixes a 400 error on branch search pagination (Fixes #13883) via client-side slicing; #13939 fixes the conversation-metrics "Context Window" bar being stuck at 0% when a condenser usage entry is present in V1 — small but visible bug. Draft #13946 ("Test automation") opened by chuckbutkus is too early to evaluate.

Closed-without-merge worth noting: #13944 (accumulated_cost not persisted due to a race between `update_conversation_statistics()` and `save_app_conversation_info()`) — the diagnosis is documented even though the fix didn't land, and the underlying bug presumably remains. Also closed unmerged: #13925 (Linear→V1 conversations migration, following the Jira pattern in #13909) and #13886 (Jira Markdown→Wiki Markup conversion). No releases or new issues in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#13946](https://github.com/OpenHands/OpenHands/pull/13946) _(draft)_ **Test automation** — _by @chuckbutkus, updated 2026-04-15T19:37:48Z_
- [#13943](https://github.com/OpenHands/OpenHands/pull/13943) **fix: support pagination for branch search queries** — _by @Dev-31, updated 2026-04-15T19:31:09Z_
- [#12981](https://github.com/OpenHands/OpenHands/pull/12981) _(draft)_ **Add Credits page and link from logo** — _by @enyst, updated 2026-04-15T19:02:07Z_
- [#12101](https://github.com/OpenHands/OpenHands/pull/12101) _(draft)_ **OHE Telemetry Service M3 - Collection Scheduling and Upload** — _by @jpshackelford, updated 2026-04-15T17:08:16Z_
- [#11475](https://github.com/OpenHands/OpenHands/pull/11475) _(draft)_ **OHE Telemetry Service M2 - Metrics Collection Framework** — _by @jpshackelford, updated 2026-04-15T17:06:34Z_
- [#13258](https://github.com/OpenHands/OpenHands/pull/13258) _(draft)_ **feat: Add E2B and Kata Containers sandbox services for V1 architecture** — _by @saurya, updated 2026-04-15T17:05:32Z_
- [#13285](https://github.com/OpenHands/OpenHands/pull/13285) _(draft)_ **DRAFT: feat: run .openhands/setup.sh via agent's terminal tool in V1** — _by @xingyaoww, updated 2026-04-15T17:04:31Z_
- [#13283](https://github.com/OpenHands/OpenHands/pull/13283) _(draft)_ **feat(enterprise): Add plugin-directory Keycloak client** — _by @jpshackelford, updated 2026-04-15T17:03:27Z_
- [#13322](https://github.com/OpenHands/OpenHands/pull/13322) _(draft)_ **fix(tests): Remove --forked for accurate coverage reporting** — _by @jpshackelford, updated 2026-04-15T16:57:01Z_
- [#13427](https://github.com/OpenHands/OpenHands/pull/13427) _(draft)_ **feat: Add max_tokens setting for condenser in settings menu** — _by @csmith49, updated 2026-04-15T16:56:13Z_
- [#13302](https://github.com/OpenHands/OpenHands/pull/13302) **fix: validate base_url rejects API endpoint paths** — _by @Bortlesboat, updated 2026-04-15T16:53:26Z_
- [#13939](https://github.com/OpenHands/OpenHands/pull/13939) **fix(frontend): context window metric stuck at 0% when multiple LLM usages are tracked ** — _by @VascoSch92, updated 2026-04-15T15:04:47Z_
- [#13232](https://github.com/OpenHands/OpenHands/pull/13232) _(draft)_ **feat: add WarpGrep codebase search tool for CodeAct agent** — _by @bhaktatejas922, updated 2026-04-15T02:14:37Z_
- [#13581](https://github.com/OpenHands/OpenHands/pull/13581) **fix(frontend): stop infinite scroll loop in conversation history** — _by @Krishnachaitanyakc, updated 2026-04-15T01:52:10Z_


## Closed PRs (not merged)

- [#13944](https://github.com/OpenHands/OpenHands/pull/13944) **[Bug]: Accumulated Cost data is not being saved in conversation metadata** — _by @lilagrc, closed 2026-04-15T18:58:37Z_
- [#13417](https://github.com/OpenHands/OpenHands/pull/13417) **Log session api key x session api key header for debugging refresh token 403** — _by @aivong-openhands, closed 2026-04-15T16:55:17Z_
- [#13886](https://github.com/OpenHands/OpenHands/pull/13886) **fix: convert Markdown to Jira Wiki Markup in comment output** — _by @Ricardo-M-L, closed 2026-04-15T15:09:52Z_
- [#12818](https://github.com/OpenHands/OpenHands/pull/12818) **chore(deps-dev): bump the eslint group in /frontend with 2 updates** — _by @dependabot[bot], closed 2026-04-15T14:27:06Z_
- [#13925](https://github.com/OpenHands/OpenHands/pull/13925) **Update Linear integration to use V1 conversations** — _by @tofarr, closed 2026-04-15T14:21:52Z_
- [#13819](https://github.com/OpenHands/OpenHands/pull/13819) **Fix CVE-2026-35030: Update litellm to 1.83.0** — _by @aivong-openhands, closed 2026-04-15T02:39:09Z_
- [#12987](https://github.com/OpenHands/OpenHands/pull/12987) **feat(resolver): add customizable commit message template and trailer** — _by @timon0305, closed 2026-04-15T02:14:53Z_
- [#12988](https://github.com/OpenHands/OpenHands/pull/12988) **Fix resolver to populate cost/token metrics from ConversationStats** — _by @timon0305, closed 2026-04-15T02:14:51Z_
- [#12989](https://github.com/OpenHands/OpenHands/pull/12989) **Include closing issue comments in PR resolver context** — _by @timon0305, closed 2026-04-15T02:14:49Z_
- [#12990](https://github.com/OpenHands/OpenHands/pull/12990) **Fix resolver completion check to diff against merge-base in PR mode** — _by @timon0305, closed 2026-04-15T02:14:47Z_
- [#12997](https://github.com/OpenHands/OpenHands/pull/12997) **Add GLM model family support (zai provider)** — _by @timon0305, closed 2026-04-15T02:14:46Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`b4da0e1`](https://github.com/OpenHands/OpenHands/commit/b4da0e1c69b317a8b288f5ad83406f16b99061a4) settings: expose SDK settings schema to OpenHands (#13306) — _@neubig_
- [`d548665`](https://github.com/OpenHands/OpenHands/commit/d548665bcf3963a9c5d3fb84dc1b3e9f836ac63e) feat(frontend): add /btw side-channel command for asking the agent mid-task (#13918) — _@VascoSch92_
- [`eb940ea`](https://github.com/OpenHands/OpenHands/commit/eb940ea5e76ddc34b389c5e155a25dc035d22f74) Use SDK package public exports where available (#13402) — _@enyst_
- [`22b9197`](https://github.com/OpenHands/OpenHands/commit/22b91976fdf0a108b35e1f388950003913629540) feat(frontend): removed PROJ_USER_JOURNEY feature flag (#13940) — _@HeyItsChloe_
- [`dcf044f`](https://github.com/OpenHands/OpenHands/commit/dcf044f8c378d22565436b45979ccb6fb245e4da) feat(frontend): add automations button to sidebar (#13941) — _@hieptl_
- [`d58106b`](https://github.com/OpenHands/OpenHands/commit/d58106b29b1b141762397a5715db72331bd652cf) fix(security): extend RedactURLParamsFilter to cover all uvicorn log formats (#13914) — _@all-hands-bot_
- [`e11faa6`](https://github.com/OpenHands/OpenHands/commit/e11faa6dd196b5254c076c67c5f327263279a689) fix(security): redact MCP config secrets before logging (#13913) — _@all-hands-bot_
- [`b4b77fb`](https://github.com/OpenHands/OpenHands/commit/b4b77fbc315486fa6d0899e0574492b45228a681) feat: Add DEPLOYMENT_MODE detection for conditional onboarding (#13675) — _@HeyItsChloe_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
