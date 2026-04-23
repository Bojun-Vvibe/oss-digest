# OpenHands/OpenHands — 2026-04-07

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-06T23:59:59.000Z → 2026-04-07T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's most consequential thread is a continued migration to a V1 API surface on the backend, paired with org-routing work for issue-tracker resolvers. Three merged commits from `tofarr` advance the V1 cutover: a refactor of the conversation list to consume V1 (#13803), new V1 endpoints for git search and branches (#13794), and deprecation of `/api/options/models` in favor of `/api/v1/config/models/search` (#13799). Frontend cleanup of unused hooks (#13810) accompanies this. Integrators should check call sites against the deprecated models endpoint.

In parallel, `hieptl` shipped two routing features that send Jira (#13805) and Linear (#13804) resolver conversations into claimed org workspaces, and removed the `ENABLE_ORG_CLAIMS_RESOLVER_ROUTING` feature flag (#13809) — meaning the org-claims resolver routing path is now unconditional. Anyone running self-hosted with custom resolver config should review behavior here.

Notable new open PRs worth reading:

- **#13808** (`saurya`) introduces a frontend toggle for **MicroVM isolation** and a runtime tier selector targeting Kata/Firecracker sandboxes, gated behind an `enable_microvm` server flag. This is the visible edge of a larger sandbox-isolation effort.
- **#13797** (`gpothier`) proposes **sysbox runtime support** for Docker-in-Docker inside sandboxes, an alternative to privileged mode or socket mounting — relevant for users running container workloads in agent sessions.
- **#13807** (`jpshackelford`) improves a confusing auth failure mode where a valid `sk-oh-...` API key returned a generic `BearerTokenError` because the underlying Keycloak offline session had expired. Worth a look if you operate the auth stack.
- **#13801** fixes a UI regression from #13451 where `ThinkAction` and `FileEditorAction` rendered raw JSON titles instead of i18n labels — small but user-visible.
- **#13773** hardens `_get_sandbox_status_from_runtime()` against non-string `status` payloads from remote sandboxes.

Closed without merge: dependabot bulk bump #13789 (12 packages including uvicorn 0.42→0.44, starlette, pathspec 0.12→1.0) and the long-stale #12841 (unregistered GitHub user error message). No releases or new issues in the window.

## Releases

_None in window._


## Merged PRs

- [#2726](https://github.com/OpenHands/OpenHands/pull/2726) **fix: improve exit_code processing (ssh_box)** — _by @tobitege, merged 2024-07-01T19:59:32Z_


## Open PRs (new or updated)

- [#13807](https://github.com/OpenHands/OpenHands/pull/13807) **Improve error message for expired Keycloak sessions during API key auth** — _by @jpshackelford, updated 2026-04-07T19:01:48Z_
- [#13808](https://github.com/OpenHands/OpenHands/pull/13808) **feat(frontend): Add MicroVM isolation toggle and runtime tier selector** — _by @saurya, updated 2026-04-07T17:13:44Z_
- [#13801](https://github.com/OpenHands/OpenHands/pull/13801) **fix(frontend): skip raw JSON default summaries for ThinkAction and FileEditorAction** — _by @r266-tech, updated 2026-04-07T16:10:57Z_
- [#13773](https://github.com/OpenHands/OpenHands/pull/13773) **fix(app_server): ignore invalid remote sandbox status values** — _by @suyua9, updated 2026-04-07T07:57:02Z_
- [#13797](https://github.com/OpenHands/OpenHands/pull/13797) **Add sysbox runtime support for Docker-in-Docker in sandboxes** — _by @gpothier, updated 2026-04-07T01:13:07Z_


## Closed PRs (not merged)

- [#13789](https://github.com/OpenHands/OpenHands/pull/13789) **chore(deps): bump the version-all group across 1 directory with 12 updates** — _by @dependabot[bot], closed 2026-04-07T15:18:22Z_
- [#12392](https://github.com/OpenHands/OpenHands/pull/12392) **fix: Refresh button not updating git changes in Changes tab** — _by @nehaaprasad, closed 2026-04-07T11:45:41Z_
- [#12841](https://github.com/OpenHands/OpenHands/pull/12841) **Add clear error message for unregistered GitHub users** — _by @xingyaoww, closed 2026-04-07T02:14:26Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`754a96e`](https://github.com/OpenHands/OpenHands/commit/754a96e7f33c68f55e7323d37f83234846cef519) chore(frontend): remove unused hooks and code (#13810) — _@tofarr_
- [`211b73a`](https://github.com/OpenHands/OpenHands/commit/211b73a088447b17243c54d96f2fa2af0764695f) Refactor conversation list to use V1 API (#13803) — _@tofarr_
- [`54041dd`](https://github.com/OpenHands/OpenHands/commit/54041dd093b81a5c4e2796555825b819a61dd33e) feat: remove ENABLE_ORG_CLAIMS_RESOLVER_ROUTING feature flag (#13809) — _@hieptl_
- [`f271346`](https://github.com/OpenHands/OpenHands/commit/f271346724e5dfa9bac7f3d10d189d6ab0d1f9db) feat(backend): route Jira resolver conversations to claimed org workspaces (#13805) — _@hieptl_
- [`d6a0dd7`](https://github.com/OpenHands/OpenHands/commit/d6a0dd7fe4a7002e77947a23a61656b9dab6eceb) feat(backend): route Linear resolver conversations to claimed org workspaces (#13804) — _@hieptl_
- [`e46bcfa`](https://github.com/OpenHands/OpenHands/commit/e46bcfa82ff82ce6ad21a4349fa2da9b8860f3a4) Add V1 API endpoints for git search and branches (#13794) — _@tofarr_
- [`2eefa5e`](https://github.com/OpenHands/OpenHands/commit/2eefa5edfd76573f39091357f970ebb95d585a1b) Deprecate /api/options/models, add /api/v1/config/models/search endpoint (#13799) — _@tofarr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
