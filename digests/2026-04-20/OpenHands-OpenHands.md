# OpenHands/OpenHands — 2026-04-20

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-19T23:59:59.000Z → 2026-04-20T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Today's activity centers on settings/UX cleanup for the new org-defaults flow and continued V0→V1 refactor work, with no releases cut.

The most user-visible fix is `fa0da8f` (#14042), which stops an infinite redirect loop on org-defaults settings pages — worth reading first if you maintain the settings UI. It lands alongside a cluster of related frontend fixes from `hieptl` and `neubig`: showing an org-wide settings badge on org-defaults pages (`0da1f70`, #14031), hiding/blocking personal LLM/Condenser/Verification settings inside team orgs (`3892ab2`, #14030), removing the agent selector from the LLM settings page (`71ce61a`, #14033), and moving the Tavily search key into MCP settings (`7bbef99`, #14000). Backend-side, `b2df428` (#14032) restores the `git-organizations` endpoint that conversation routing depends on, and `30dc165` (#13849) is step 3/13 of the SQLAlchemy 2.0 telemetry migration.

On the V0→V1 refactor, `tofarr` deleted the deprecated `agenthub` package (`fd014e8`, #14024) and opened a draft #14025 to finish removing the now-SDK-owned `openhands/llm` package (~3,300 LOC, plus stale tests). Reviewers tracking that refactor should also look at #13983, which routes ACP agents through a new `StartACPConversationRequest` path consuming the SDK's discriminated `AgentSettings` union.

Notable new bug fixes opened but not yet merged:
- #14029 fixes a Gemini 404 caused by `litellm.get_api_base()` returning a full `:generateContent` URL that gets path-doubled — a small, targeted patch in `openhands/utils/llm.py`.
- #13954 addresses an infinite loop when LLMs return empty responses; the corrective `MessageAction(source=USER)` nudge resets the stuck-detector boundary so the monologue detector never fires.
- #13945 diagnoses why `accumulated_cost` isn't persisted to `conversation_metadata` — a race between `update_conversation_statistics()` and the `on_conversation_update` webhook's `save_app_conversation_info()`.

Also still open: #13844 (local VSCode SSH into sandboxes) and #13722 (fallback titles for API-triggered conversations on V1 agent-server). Dependabot's 14-package bump #13806 was closed without merging. No new issues filed in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#13945](https://github.com/OpenHands/OpenHands/pull/13945) ** [Bug]: Accumulated Cost data is not being saved in conversation metadata** — _by @lilagrc, updated 2026-04-20T22:55:26Z_
- [#13954](https://github.com/OpenHands/OpenHands/pull/13954) **fix(controller): detect empty LLM response loops in stuck detector** — _by @moorsecopers99, updated 2026-04-20T21:59:10Z_
- [#13844](https://github.com/OpenHands/OpenHands/pull/13844) **feat: Add local VSCode SSH support for sandboxes** — _by @gpothier, updated 2026-04-20T19:17:44Z_
- [#13983](https://github.com/OpenHands/OpenHands/pull/13983) **feat(app-server): route ACP agents to the ACP conversation endpoint** — _by @simonrosenberg, updated 2026-04-20T15:27:50Z_
- [#14025](https://github.com/OpenHands/OpenHands/pull/14025) _(draft)_ **Removing the LLM package as this is now handled by the SDK** — _by @tofarr, updated 2026-04-20T14:18:48Z_
- [#13722](https://github.com/OpenHands/OpenHands/pull/13722) **fix: generate fallback title for API-triggered conversations** — _by @dev-miro26, updated 2026-04-20T12:35:08Z_
- [#14029](https://github.com/OpenHands/OpenHands/pull/14029) **fix(llm): skip Gemini full endpoint URL as base_url to prevent doubled path 404** — _by @StatPan, updated 2026-04-20T07:03:49Z_


## Closed PRs (not merged)

- [#13806](https://github.com/OpenHands/OpenHands/pull/13806) **chore(deps): bump the version-all group across 1 directory with 14 updates** — _by @dependabot[bot], closed 2026-04-20T22:19:31Z_
- [#14038](https://github.com/OpenHands/OpenHands/pull/14038) **chore: rename ALLHANDS_BOT_GITHUB_PAT to PAT_TOKEN** — _by @simonrosenberg, closed 2026-04-20T18:52:49Z_
- [#13953](https://github.com/OpenHands/OpenHands/pull/13953) **fix(runtime): prevent agent from killing sandbox server on port 8000** — _by @moorsecopers99, closed 2026-04-20T01:06:16Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`fa0da8f`](https://github.com/OpenHands/OpenHands/commit/fa0da8f3bd68c98f8948d8f1bab383fd0149dc6e) fix: prevent infinite redirect loop on org-defaults settings pages (#14042) — _@neubig_
- [`0da1f70`](https://github.com/OpenHands/OpenHands/commit/0da1f70b916e8a50981237f186b49686b9f1677d) fix(frontend): show org-wide settings badge beside title on org-defaults pages (#14031) — _@hieptl_
- [`3892ab2`](https://github.com/OpenHands/OpenHands/commit/3892ab2b677c726f5441a9459e98cc531afd9d4f) fix(frontend): hide and block personal LLM/Condenser/Verification settings in team orgs (#14030) — _@hieptl_
- [`30dc165`](https://github.com/OpenHands/OpenHands/commit/30dc1655b147d9d21a42c5956b960fe11f0cc593) fix(enterprise): migrate telemetry models to SQLAlchemy 2.0 [3/13] (#13849) — _@malhotra5_
- [`71ce61a`](https://github.com/OpenHands/OpenHands/commit/71ce61acd274cf518c9dbc301d132bce482823c9) Remove agent from the LLM settings page (#14033) — _@neubig_
- [`b2df428`](https://github.com/OpenHands/OpenHands/commit/b2df428eff8c6ecef90a7dcb53984f3f5aa2b303) fix(backend): restore git-organizations endpoint for git conversation routing (#14032) — _@hieptl_
- [`7bbef99`](https://github.com/OpenHands/OpenHands/commit/7bbef997718cbabc3ad8772d2f540657b24d4d68) Move Tavily search key to MCP settings (#14000) — _@neubig_
- [`fd014e8`](https://github.com/OpenHands/OpenHands/commit/fd014e8e23fa631b1667fe25929a149c85154519) Removing the deprecated agenthub package (#14024) — _@tofarr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
