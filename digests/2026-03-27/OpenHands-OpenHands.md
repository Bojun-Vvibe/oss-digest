# OpenHands/OpenHands — 2026-03-27

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-03-26T23:59:59.000Z → 2026-03-27T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy frontend polish day with no releases, PRs, or issues recorded — just 19 direct commits to `main`, dominated by UI fixes and several enterprise/org-tier features.

The most consequential change is on the infrastructure side: `feat(enterprise): acquire pg_advisory_lock before running database migrations` (#13608) prevents concurrent migration races in multi-replica deployments, paired with a follow-up fix `serialize dict to JSON string in migration 103` (#13634) — anyone running the enterprise edition should review both before upgrading. Also infra-relevant: APP-1152 adds a legacy fallback variable when finding the persistence directory (#13629), and PLTF-330 enriches enterprise logs with module `funcName` and `lineno` (#13612).

Two notable user-facing features land in the frontend, both from VascoSch92: a view-mode toggle (old/diff/new) for the file changes viewer (#13519), and rendering of skill-ready events as an expandable skill list in chat (#13511). On the agent side, #13092 (enyst) restores the conversation link in PR bodies created via MCP — a small but visible regression fix for anyone using the GitHub MCP integration.

Org/multi-tenant work continues to mature: a new backend endpoint exposes organization members' financial data (#13595), a toast now fires when switching orgs (#13598), the LLM settings page gained contextual info messages for the org project (#13601), the device-verify flow uses `LoginCTA` with source-specific "Learn more" behavior (#13606), and #13562 fixes a bug where users didn't immediately appear in an org after accepting an invite on OpenHands Cloud.

The remaining ~7 commits are pure frontend polish from hieptl: chat status indicator padding (#13624), tab icon mobile overflow (#13627), toast max-width (#13623), learn-more hover background (#13621), diff view border radius (#13620), plus a maintainer doc fix (#13632) and trusted-by logos added to the README (#13613).

No open PRs, issues, or releases were recorded in the window, so the commit log above is the full picture for the day.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`df64ce9`](https://github.com/OpenHands/OpenHands/commit/df64ce9668ebd0116d0b6864a410adfedc615e96) fix(frontend): reduce padding and gap for chat status indicator (#13624) — _@hieptl_
- [`f72a962`](https://github.com/OpenHands/OpenHands/commit/f72a9622f63313972f1d7603a7f86f5710acf6f6) [fix] maintainer doc (#13632) — _@jamiechicago312_
- [`193eb34`](https://github.com/OpenHands/OpenHands/commit/193eb34dc772ed07a29ecb775eb38b8a4a157ffa) fix(migration): serialize dict to JSON string in migration 103 (#13634) — _@tofarr_
- [`87f582d`](https://github.com/OpenHands/OpenHands/commit/87f582db6a14d8f15f04dfea3d5a534faf35176d) fix(frontend): tab icon overflow on mobile devices (#13627) — _@hieptl_
- [`4b69370`](https://github.com/OpenHands/OpenHands/commit/4b69370c73e3e023a2584c1a2252d178c397b6e7) fix(frontend): set max width for toast messages (#13623) — _@hieptl_
- [`74ac6e0`](https://github.com/OpenHands/OpenHands/commit/74ac6e06a153e89efa59fcc352dc97fd1718eb3e) refactor(frontend): add white background color on learn more button hover (user journey project) (#13621) — _@hieptl_
- [`a91dcea`](https://github.com/OpenHands/OpenHands/commit/a91dceacfb11fed07eceafd0830a880c6cb9dcb3) fix(frontend): add missing border radius to diff view (#13620) — _@hieptl_
- [`98c61e1`](https://github.com/OpenHands/OpenHands/commit/98c61e1ee47f7a8fc48c25e3e21e71470a8b7475) feat(enterprise): acquire pg_advisory_lock before running database migrations (#13608) — _@jlav_
- [`3268c29`](https://github.com/OpenHands/OpenHands/commit/3268c299459b690337c89f858671329fd99f9b48) APP-1152 Add legacy fallback variable when finding persistence directory (#13629) — _@tofarr_
- [`239e40d`](https://github.com/OpenHands/OpenHands/commit/239e40da757d452adaacb57def2a6485d205e2d9) Fix: restore conversation link in PR bodies created via MCP (#13092) — _@enyst_
- [`d190d8e`](https://github.com/OpenHands/OpenHands/commit/d190d8ee5014b8f074bac472f5ec53fb9549a137) Add trusted-by logos to top of README (#13613) — _@jamiechicago312_
- [`5f064fa`](https://github.com/OpenHands/OpenHands/commit/5f064fa88b683b28e00568cc637e4473c714d12d) PLTF-330: log module funcName and lineno in enterprise (#13612) — _@aivong-openhands_
- [`8f87ef5`](https://github.com/OpenHands/OpenHands/commit/8f87ef59c72f1c7bae2b937164caf99731ac8e83) feat(frontend): Add view mode toggle (old/diff/new) to file changes viewer (#13519) — _@VascoSch92_
- [`fdc6ba8`](https://github.com/OpenHands/OpenHands/commit/fdc6ba82c936585042fa9cee8eb25ce8fa41f85f) feat(frontend): Display skill ready events as expandable skill list in chat (#13511) — _@VascoSch92_
- [`a75038b`](https://github.com/OpenHands/OpenHands/commit/a75038bee02216ca8a8ea3dff2d94ea73c03e80c) fix: user does not immediately appear in org after accepting invite in openhands cloud (#13562) — _@hieptl_
- [`fbe6eb3`](https://github.com/OpenHands/OpenHands/commit/fbe6eb30cb92b471659792024a4fef7f2fc84bc2) feat(backend): add organization members financial data endpoint (#13595) — _@hieptl_
- [`aeda0ea`](https://github.com/OpenHands/OpenHands/commit/aeda0ea76245be1ecae69a2aabaa5317e08fac10) feat(frontend): display toast notification when switching organizations (#13598) — _@hieptl_
- [`30b7af3`](https://github.com/OpenHands/OpenHands/commit/30b7af31b9cc6c7e1dbdb88f311ae4da3fdfb3c3) feat(frontend): add contextual info messages on LLM settings page (org project) (#13601) — _@hieptl_
- [`05a3916`](https://github.com/OpenHands/OpenHands/commit/05a3916c98105f47953e3481c73df09dac1ad925) feat(frontend): use LoginCTA in device verify with source-specific Learn more behavior (#13606) — _@hieptl_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
