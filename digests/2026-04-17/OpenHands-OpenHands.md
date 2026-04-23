# OpenHands/OpenHands — 2026-04-17

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-16T23:59:59.000Z → 2026-04-17T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a coordinated push to bring **ACP (Agent Communication Protocol) agents into the OpenHands GUI**. Simon Rosenberg landed the GUI groundwork PR #13652 (closed without merge in favor of a split) and reopened it as two smaller, reviewable pieces: backend routing in #14004 (Alembic migration `009`, `agent_kind='acp'` on `AppConversationInfo`, POSTing to `/api/acp/conversations`) and frontend rendering of `ACPToolCallEvent`s in #13994. Until now ACP tool calls were silently dropped in the UI — users only saw the final `MessageEvent` — so #13994 is the more user-visible fix, routing ACP cards through the same `GenericEventMessageWrapper` → `getEventContent` pipeline as native observations. Worth reading if you care about Claude Code / Codex / Gemini CLI integration.

On the merged-and-shipped side, the notable commits are a security fix for **CVE-2026-40347** bumping `python-multipart` to 0.0.26 (commit 5c8d7c4, #13965), an enterprise fix to apply the deployment LLM proxy URL override in `/api/v1/users/me` (commit 2068694, #13980), and a refactor replacing `load_custom_secrets_names` with `search_custom_secrets` (commit 385122e, #13985). #13995 also merged, generalizing `AutomationEventService` away from GitHub-only (renaming `forward_github_event` → `forward_event` with a provider parameter) — a prerequisite for non-GitHub providers.

Other open work to watch:
- #13845 adds **Sign in with ChatGPT** in LLM settings via device OAuth plus a LiteLLM patch for `chatgpt/*` (personal/OSS only; hidden for team orgs).
- #13978 (neubig) refactors the verification settings page to schema-driven SDK rendering, deferring `confirmation_mode` visibility to the next SDK release.
- #13826 adds inline help clarifying provider-prefixed model IDs for OpenAI-compatible providers (addresses #13738).

Closed without merging: #13900 (GitHub API exponential backoff), #13660 (re-enable V1 star feedback), and a dependabot frontend bump of 35 packages including `@heroui/react` 2.8.7 → 3.0.2 (#13920) — likely deferred due to the major bump. No releases or new issues in the window.

## Releases

_None in window._


## Merged PRs

- [#13995](https://github.com/OpenHands/OpenHands/pull/13995) **feat: refactor AutomationEventService to prepare for multiple providers** — _by @chuckbutkus, merged 2026-04-17T05:44:16Z_


## Open PRs (new or updated)

- [#13845](https://github.com/OpenHands/OpenHands/pull/13845) **feat(llm): Sign in with ChatGPT on LLM settings (personal / local)** — _by @nehaaprasad, updated 2026-04-17T22:36:20Z_
- [#13826](https://github.com/OpenHands/OpenHands/pull/13826) **docs(ui): clarify custom model format for OpenAI-compatible providers** — _by @Kl163, updated 2026-04-17T22:30:10Z_
- [#14004](https://github.com/OpenHands/OpenHands/pull/14004) **feat(app-server): route ACP agents to the ACP conversation endpoint** — _by @simonrosenberg, updated 2026-04-17T20:43:40Z_
- [#13994](https://github.com/OpenHands/OpenHands/pull/13994) **feat(frontend): render ACPToolCallEvent in conversation viewer** — _by @simonrosenberg, updated 2026-04-17T20:29:54Z_
- [#13978](https://github.com/OpenHands/OpenHands/pull/13978) **Refactor verification settings to use schema rendering** — _by @neubig, updated 2026-04-17T18:01:51Z_


## Closed PRs (not merged)

- [#13900](https://github.com/OpenHands/OpenHands/pull/13900) **fix(github): add exponential backoff for GitHub API rate limits and webhook retries** — _by @Dev-31, closed 2026-04-17T22:13:30Z_
- [#13920](https://github.com/OpenHands/OpenHands/pull/13920) **chore(deps): bump the version-all group across 1 directory with 37 updates** — _by @dependabot[bot], closed 2026-04-17T21:59:31Z_
- [#14003](https://github.com/OpenHands/OpenHands/pull/14003) **feat(app-server): route ACP agents to the ACP conversation endpoint** — _by @simonrosenberg, closed 2026-04-17T19:52:47Z_
- [#13652](https://github.com/OpenHands/OpenHands/pull/13652) **feat: Add ACP agent support to GUI** — _by @simonrosenberg, closed 2026-04-17T19:47:47Z_
- [#13660](https://github.com/OpenHands/OpenHands/pull/13660) **Re-enable V1 conversation star feedback** — _by @neubig, closed 2026-04-17T14:20:39Z_
- [#13041](https://github.com/OpenHands/OpenHands/pull/13041) **Add minimal integration test framework for V1 GitHub Resolver** — _by @malhotra5, closed 2026-04-17T02:14:58Z_
- [#13962](https://github.com/OpenHands/OpenHands/pull/13962) **chore(ci): use ALLHANDS_BOT_GITHUB_PAT in resolver workflow** — _by @simonrosenberg, closed 2026-04-17T01:22:37Z_
- [#13993](https://github.com/OpenHands/OpenHands/pull/13993) **feat(frontend): render ACPToolCallEvent in conversation viewer** — _by @simonrosenberg, closed 2026-04-17T00:58:35Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`5bb9e4a`](https://github.com/OpenHands/OpenHands/commit/5bb9e4a56724d5f155d77099d708fbf5f20425fe) docs: fix broken React Router test doc links (#13802) — _@buyua9_
- [`a5a7a86`](https://github.com/OpenHands/OpenHands/commit/a5a7a86600dd3e6c01e44abd6f891248949c61b7) chore(deps): bump actions/github-script from 7 to 9 (#13958) — _@dependabot[bot]_
- [`5c8d7c4`](https://github.com/OpenHands/OpenHands/commit/5c8d7c4c2dee994ad3a71fab209b60c02c692624) Fix CVE-2026-40347: Update python-multipart to 0.0.26 (#13965) — _@aivong-openhands_
- [`2068694`](https://github.com/OpenHands/OpenHands/commit/2068694ea0fb353ef641121e390d18e573947e62) fix(enterprise): Apply deployment LLM proxy URL override in /api/v1/users/me (#13980) — _@xingyaoww_
- [`385122e`](https://github.com/OpenHands/OpenHands/commit/385122e2602d04277f39e7816fa0b8889b593ba1) refactor: Replace load_custom_secrets_names with search_custom_secrets (#13985) — _@tofarr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
