# OpenHands/OpenHands — 2026-04-16

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-15T23:59:59.000Z → 2026-04-16T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The most notable item today is a security fix in enterprise: PR #13976 removes the unauthenticated `GET /api/shared-conversations/search` and `/count` endpoints, which previously allowed anyone to enumerate or count every shared conversation in the system. Public share links via `/shared/conversations/<id>` continue to work — only the enumeration surface is gone. Anyone running an enterprise deployment with shared conversations should pull this immediately.

Close behind are several V1/SDK migration cleanups. Commit #13989 fixes resumed-conversation status sync under V1, and #13963 removes the deprecated V0 conversation APIs from the frontend — together a clear signal that the V1 conversation stack is now the only supported path. PR #13957 patches the `/api/v1/users/me` response to include flat SDK-compat fields, and #13974 fixes `get_latest_token` to return `str` instead of `SecretStr`, both small but likely to unblock SDK consumers hitting type/shape mismatches.

Database/migration hygiene also got attention: #13950 resolves a duplicate enterprise migration revision and #13951 fixes a related migration merge error — worth noting if you maintain a fork with custom Alembic revisions.

On the open-PR front, nothing landed but a few are worth tracking:
- #13990 (frontend) makes the user-avatar popup scrollable so off-screen items are reachable.
- #13735 fixes CJK UTF-8 files being misidentified as binary by `binaryornot`, restoring `OHEditor.view()`/`read()` for Chinese/Japanese/Korean source and markdown.
- #13955 (draft) hardens the Slack repo selector against double-submission via a Redis `SET NX` guard, preventing duplicate OpenHands jobs.
- #13860 adds GLM-5.1 and GLM-5-Turbo to the model selector via `EXTRA_LITELLM_MODELS`.

Housekeeping: #13956 (CI secret rename `ALLHANDS_BOT_GITHUB_PAT` → `PAT_TOKEN`) was closed without merging, so the org-wide rename is still pending here. Dependabot bumped pillow to 12.2.0 (#13933). No releases or new notable issues in the window.

## Releases

_None in window._


## Merged PRs

- [#13880](https://github.com/OpenHands/OpenHands/pull/13880) **fix: fallback to LLM_BASE_URL for openhands_provider_base_url** — _by @gpothier, merged 2026-04-11T22:49:13Z_
- [#13976](https://github.com/OpenHands/OpenHands/pull/13976) **bugfix(enterprise): Remove shared conversation enumerator endpoints** — _by @jlav, merged 2026-04-16T18:11:44Z_


## Open PRs (new or updated)

- [#13990](https://github.com/OpenHands/OpenHands/pull/13990) **fix(frontend): add scrolling support to user avatar popup** — _by @chuckbutkus, updated 2026-04-16T22:55:44Z_
- [#13735](https://github.com/OpenHands/OpenHands/pull/13735) **fix(runtime): fix CJK UTF-8 files misidentified as binary by binaryornot** — _by @Prithvi1994, updated 2026-04-16T16:40:14Z_
- [#13955](https://github.com/OpenHands/OpenHands/pull/13955) _(draft)_ **Disable Slack repo selector after submission** — _by @neubig, updated 2026-04-16T11:42:11Z_
- [#13540](https://github.com/OpenHands/OpenHands/pull/13540) _(draft)_ **fix(ui): show 'Loading conversation...' during event history replay** — _by @nehaaprasad, updated 2026-04-16T11:12:41Z_
- [#13860](https://github.com/OpenHands/OpenHands/pull/13860) **feat: add GLM-5.1 and GLM-5-Turbo to LLM provider model list** — _by @doanbactam, updated 2026-04-16T01:39:38Z_
- [#13798](https://github.com/OpenHands/OpenHands/pull/13798) _(draft)_ **chore: Add sdk to mypy checking in enterprise folder and fix the resulting errors** — _by @raymyers, updated 2026-04-16T00:59:57Z_
- [#13662](https://github.com/OpenHands/OpenHands/pull/13662) **Add Persian (Farsi) language support and QADR deployment config** — _by @danialsamiei, updated 2026-04-16T00:06:01Z_


## Closed PRs (not merged)

- [#13956](https://github.com/OpenHands/OpenHands/pull/13956) **chore(ci): rename ALLHANDS_BOT_GITHUB_PAT to PAT_TOKEN** — _by @simonrosenberg, closed 2026-04-16T14:11:24Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`97343eb`](https://github.com/OpenHands/OpenHands/commit/97343ebe9aaf4004c5f752e514dd5d223d9ffee2) Fix V1 resumed conversation status sync (#13989) — _@erisfully_
- [`926f25a`](https://github.com/OpenHands/OpenHands/commit/926f25a74bd73bd7ba2b1ac49fad6e013ebf3299) bugfix(enterprise): Remove shared conversation enumerator endpoints (#13976) — _@jlav_
- [`52c4d0d`](https://github.com/OpenHands/OpenHands/commit/52c4d0d9d93808f421ad5844a4deb470a8c1b3bc) Fix get_latest_token to return str instead of SecretStr (#13974) — _@tofarr_
- [`f1ff98b`](https://github.com/OpenHands/OpenHands/commit/f1ff98b2fc3aee40646a771cdf1073dd0d9e3deb) fix: add flat SDK compat fields to /api/v1/users/me response (#13957) — _@hieptl_
- [`26c43d1`](https://github.com/OpenHands/OpenHands/commit/26c43d1955da61da4a7ba7ead5bdc75a74ac810f) chore(deps): bump pillow from 12.1.1 to 12.2.0 (#13933) — _@dependabot[bot]_
- [`d81c2bc`](https://github.com/OpenHands/OpenHands/commit/d81c2bc0a647bbae399b2b79442cd9a27be78768) Fix duplicate enterprise migration revision (#13950) — _@neubig_
- [`fdf5c39`](https://github.com/OpenHands/OpenHands/commit/fdf5c398fd9596540dcb57721188ef14fdb21555) frontend: Remove deprecated V0 conversation APIs (#13963) — _@tofarr_
- [`c78b923`](https://github.com/OpenHands/OpenHands/commit/c78b92346830e1c83d090de4042f2d85b996bf02) feat(frontend): Remove onboarding feature flags (#13947) — _@HeyItsChloe_
- [`db78925`](https://github.com/OpenHands/OpenHands/commit/db78925d77de09b25e9b7143c1221fcb1ef02d7e) Fix merge error in migrations (#13951) — _@tofarr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
