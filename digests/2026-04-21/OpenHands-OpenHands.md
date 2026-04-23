# OpenHands/OpenHands — 2026-04-21

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-20T23:59:59.000Z → 2026-04-21T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline change is a **security fix requiring RUNNING status for session API key validation** (#14002), which tightens an auth path and is worth reviewing first. Alongside it, a multi-part **enterprise migration to SQLAlchemy 2.0** landed four more chunks — conversation_callback (#13851), org models (#13850), user models (#13852), and auth models (#13853) — pushing the 13-part series to 7/13. Reviewers tracking that migration should read these together.

On the V1 conversation runtime, `tofarr` **removed the V0 Critic** (#14056), `xingyaoww` fixed a stale-cache bug where sandbox and VS Code URLs weren't invalidated on conversation resume (#13988), and `WEB_HOST` is now passed into the agent context (#14050). A frontend fix stops `ThinkAction` from rendering as raw JSON in chat (#13981). Operationally, image publishing changed: git tags now **re-tag existing images instead of rebuilding**, and the v0 runtime image is no longer published (#14005) — anyone consuming those tags should check this.

Other merged work: org-defaults LLM save flow repaired with managed-key sync to members (#14044), GitHub webhook automation event forwarding (#13793), a Keycloak Analytics redirect URI for the allhands client (#14052), and a poetry.lock regeneration on Poetry 2.3.3 (#13911).

Notable open PRs to triage:
- **#13937** adds live critic scoring to V1 conversations via `ExecutionStatusCritic` — the natural successor to the V0 critic removal and worth coordinated review.
- **#14043** auto-prefixes LM Studio custom models with `openai/` to fix LiteLLM provider inference on IDs containing `/`.
- **#14048** allows attachment-only chat submission (closes #14047).
- **#14021** fixes a real dedup bug in `ProviderHandler.search_repositories` where the `seen` set stored `id` but compared on `full_name`.
- **#14046** proposes a .NET SDK install guide for the sandbox (addresses #14008).

Draft/closed-without-merge: the Laminar observability addition to the GitHub resolver (#13915) and a Keycloak `plugin-directory` OIDC client registration (#14045) were both closed unmerged. No releases or new notable issues in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#14021](https://github.com/OpenHands/OpenHands/pull/14021) **fix(integrations): deduplicate merged repositories by full_name** — _by @ChiragArora31, updated 2026-04-21T17:08:37Z_
- [#14048](https://github.com/OpenHands/OpenHands/pull/14048) **fix(chat): allow attachment-only submission** — _by @MukundaKatta, updated 2026-04-21T15:24:53Z_
- [#12806](https://github.com/OpenHands/OpenHands/pull/12806) **chore(deps): bump the version-all group across 1 directory with 14 updates** — _by @dependabot[bot], updated 2026-04-21T14:41:54Z_
- [#14046](https://github.com/OpenHands/OpenHands/pull/14046) **feat(skills): add .NET SDK installation guide for sandbox** — _by @moorsecopers99, updated 2026-04-21T14:05:21Z_
- [#14043](https://github.com/OpenHands/OpenHands/pull/14043) **fix(settings): auto-prefix LM Studio custom models with openai/** — _by @moorsecopers99, updated 2026-04-21T10:36:11Z_
- [#13937](https://github.com/OpenHands/OpenHands/pull/13937) **feat(app_server): add live critic scoring to V1 conversations** — _by @moorsecopers99, updated 2026-04-21T02:25:00Z_


## Closed PRs (not merged)

- [#14045](https://github.com/OpenHands/OpenHands/pull/14045) **feat(keycloak): register plugin-directory OIDC client in allhands realm** — _by @jlav, closed 2026-04-21T16:54:07Z_
- [#13915](https://github.com/OpenHands/OpenHands/pull/13915) **feat(github): add optional Laminar observability to the GitHub resolver ** — _by @juanmichelini, closed 2026-04-21T15:26:28Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`f8a43f9`](https://github.com/OpenHands/OpenHands/commit/f8a43f9937a36d98fcab0bdc4189a0298cdac071) chore: use OPENHANDS_BOT_GITHUB_PAT_PUBLIC (#14041) — _@simonrosenberg_
- [`c49ed64`](https://github.com/OpenHands/OpenHands/commit/c49ed64b6494250d4a8eb5df5dd51efda32af8ee) APP-1366 Removed V0 Critic (#14056) — _@tofarr_
- [`3b17f27`](https://github.com/OpenHands/OpenHands/commit/3b17f27deed7ab98d144d329f2139b0a83f2d8a4) PLTF-139: Add Analytics redirect URI to Keycloak allhands client (#14052) — _@aivong-openhands_
- [`ae2f13e`](https://github.com/OpenHands/OpenHands/commit/ae2f13ecbadd4ec5d57c6615d92f68a4010cf5db) fix(enterprise): migrate auth models to SQLAlchemy 2.0 [7/13] (#13853) — _@malhotra5_
- [`6d1850e`](https://github.com/OpenHands/OpenHands/commit/6d1850e94b60ae4858a0414d2ca94400d667e0bd) fix(enterprise): migrate user models to SQLAlchemy 2.0 [6/13] (#13852) — _@malhotra5_
- [`cf7e88c`](https://github.com/OpenHands/OpenHands/commit/cf7e88c8c359d3d31664f24ecb8942ef3891dbab) security: Require RUNNING status for session API key validation (#14002) — _@chuckbutkus_
- [`6420f1c`](https://github.com/OpenHands/OpenHands/commit/6420f1cd7c4f8aa076f86a3b19e524bac023bd34) fix(enterprise): migrate conversation_callback model to SQLAlchemy 2.0 [5/13] (#13851) — _@malhotra5_
- [`c7de3df`](https://github.com/OpenHands/OpenHands/commit/c7de3dfc917fc1b6b5938557875e960cb1aaa448) fix(enterprise): migrate org models to SQLAlchemy 2.0 [4/13] (#13850) — _@malhotra5_
- [`393a6bb`](https://github.com/OpenHands/OpenHands/commit/393a6bb8f890da4ae01750e9e29eebae14a7e49d) feat: add automation event forwarding for GitHub webhooks (#13793) — _@malhotra5_
- [`d8c67a4`](https://github.com/OpenHands/OpenHands/commit/d8c67a4d3dba6399f3277e4833a713af309aff30) fix(backend): repair org-defaults LLM save flow and sync managed keys to members (#14044) — _@hieptl_
- [`237e9f5`](https://github.com/OpenHands/OpenHands/commit/237e9f530e0850290b97f25d9232536c0de34566) feat: pass WEB_HOST to agent context in V1 conversations (#14050) — _@malhotra5_
- [`93ae8aa`](https://github.com/OpenHands/OpenHands/commit/93ae8aae43421c836364567e61ceea0ec1b7c0c5) Regenerate poetry.lock with Poetry 2.3.3 after rebase (#13911) — _@all-hands-bot_
- [`595bb47`](https://github.com/OpenHands/OpenHands/commit/595bb4749d3d8e35a98d0a308caa869f411016d1) fix: invalidate sandbox and VS Code URL caches on conversation resume (#13988) — _@xingyaoww_
- [`b43d9b1`](https://github.com/OpenHands/OpenHands/commit/b43d9b1929e3e88b5d53f0c49b22d507c1877777) feat: Tag images instead of rebuilding on git tags; stop publishing v0 runtime image (#14005) — _@jlav_
- [`3fa9b84`](https://github.com/OpenHands/OpenHands/commit/3fa9b84aa4955d10bb7ace00315705b2b0b00f4b) fix(frontend): Fix ThinkAction rendering showing raw JSON in chat (#13981) — _@xingyaoww_
- [`db8ab27`](https://github.com/OpenHands/OpenHands/commit/db8ab2715ef3d2be39234fb940e16c79f2cfdcae) chore(deps): bump the security-all group across 1 directory with 3 updates (#13932) — _@dependabot[bot]_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
