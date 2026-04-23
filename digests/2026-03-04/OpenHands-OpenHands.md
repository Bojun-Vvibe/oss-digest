# OpenHands/OpenHands — 2026-03-04

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-03-03T23:59:59.000Z → 2026-03-04T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a broad **enterprise type-safety cleanup**: @malhotra5 landed a sweep of mypy fixes across the enterprise codebase — GitHub integration (#13191, #13208), GitLab integration (#13205), storage (#13204), auth and clustered conversation manager (#13210), billing/api_keys routes (#13196), server services and org_service (#13190), and linear job manager (made async, #13189) — capped by #13140 which actually wires enterprise mypy checking into CI so future mismatches are caught. If you read one thing, read #13140 to understand the new type-checking gate.

On the product side, the most user-visible change is **V1 resolver behavior**: #12983 (@enyst) moves PR/issue context into the initial user message, which alters how the resolver sees task context and is worth reviewing if you depend on resolver prompts. Complementing that, #13217 makes the resolver gracefully handle GitHub-deleted issues (HTTP 410) instead of erroring, and #13219 improves budget-exceeded error handling in V1 callback processors.

Notable cleanups and smaller features:

- #13215 (@tofarr) **removes the ExperimentManager concept** entirely from the codebase — check if anything downstream referenced it.
- #13187 refactors `user_store.py` to async DB sessions, continuing the async migration.
- #13202 adds **GLM-4.7** model support in the frontend.

Self-hosted / multi-tenant UX adjustments from @hieptl:

- #13199 hides Users, Billing, and Integration pages for self-hosted customers.
- #13209 hides the "add team members" button when anonymous analytics is disabled.
- #13200 fixes a regression preventing organization deletion after recent changes.

Minor noise: #13216 downgrades a solvability-disabled log from warning to info, #13211 deletes dead test code for a removed `update_common_room_signal` function.

No releases, merged PRs list, new open PRs, or notable issues were reported in the window — activity is entirely commits to `main` (20 commits, 2026-03-04). Net: a quiet day for features, a heavy day for enterprise hygiene; prioritize #13140, #12983, and #13215 for review.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`bf769d1`](https://github.com/OpenHands/OpenHands/commit/bf769d17447aba684ee7aa13f607bcd7d21e9eef) Handle deleted GitHub issues (410 error) gracefully (#13217) — _@malhotra5_
- [`15e9435`](https://github.com/OpenHands/OpenHands/commit/15e9435b3521ff7475691bd827abfb1f0d7a8934) Remove ExperimentManager concept from codebase (#13215) — _@tofarr_
- [`3e15b84`](https://github.com/OpenHands/OpenHands/commit/3e15b849a35e1bf2cbcacad9dbfc9f9198e94719) Downgrade solvability disabled log from warning to info (#13216) — _@malhotra5_
- [`c32934e`](https://github.com/OpenHands/OpenHands/commit/c32934ed2fc3ff0666240ccc82bd95aefdb78990) Improve budget exceeded error handling in V1 callback processors (#13219) — _@malhotra5_
- [`518fb2e`](https://github.com/OpenHands/OpenHands/commit/518fb2ee2434cfb5f2a77294621928d4b415bccd) fix(frontend): hide add team members button when anonymous analytics is disabled (#13209) — _@hieptl_
- [`eeac9f1`](https://github.com/OpenHands/OpenHands/commit/eeac9f14a3ce5447ba27be86d7bd9b680aa06c8d) fix(backend): allow deleting an organization after recent changes (#13200) — _@hieptl_
- [`039e208`](https://github.com/OpenHands/OpenHands/commit/039e208167a7e9102dc3d416828d1b4eebee6810) Fix enterprise mypy type checking to catch type mismatches (#13140) — _@malhotra5_
- [`6f8bf24`](https://github.com/OpenHands/OpenHands/commit/6f8bf24226363b6d0e8545977af914491f6f0c6d) feat: hide the users, billing, and integration pages for self-hosted customers (#13199) — _@hieptl_
- [`6e9e906`](https://github.com/OpenHands/OpenHands/commit/6e9e906946cdc61e6d28a2520372ff67606a528d) Remove dead test code for non-existent update_common_room_signal function (#13211) — _@malhotra5_
- [`30245de`](https://github.com/OpenHands/OpenHands/commit/30245dedef7c7db23dc6942fedea7e848bf6ed26) Fix mypy type errors in enterprise/integrations/github/github_manager.py (#13208) — _@malhotra5_
- [`3bf019b`](https://github.com/OpenHands/OpenHands/commit/3bf019b045be183a6d3f6e290e2f80f43db2f95a) Fix mypy type errors in enterprise/server/auth and clustered_conversation_manager (#13210) — _@malhotra5_
- [`ab02c73`](https://github.com/OpenHands/OpenHands/commit/ab02c73c7cd2c1fbcab6012f8a8674d6c3492b1e) Fix mypy type errors in enterprise/storage/ (#13204) — _@malhotra5_
- [`b8db9ec`](https://github.com/OpenHands/OpenHands/commit/b8db9ecd53e9275cd8d75cf14a42ef2268b47d73) Fix mypy type errors in enterprise GitLab integration (#13205) — _@malhotra5_
- [`b86b2f1`](https://github.com/OpenHands/OpenHands/commit/b86b2f16afb9e0c20025bb44aeffd0d8373393fd) Fix mypy type errors in enterprise/server/routes/billing.py and api_keys.py (#13196) — _@malhotra5_
- [`a11435b`](https://github.com/OpenHands/OpenHands/commit/a11435b06182c7addf4c56118c028a0d5bf341b5) Add GLM-4.7 model support to frontend (#13202) — _@juanmichelini_
- [`f01c8dd`](https://github.com/OpenHands/OpenHands/commit/f01c8dd955b69620724ec81b096a29489af2103c) V1 resolver: move PR/issue context into initial user message (#12983) — _@enyst_
- [`baae378`](https://github.com/OpenHands/OpenHands/commit/baae3780e51318ae602cb2b376cacb07a1daad08) Fix mypy type errors in enterprise/integrations/github/ (#13191) — _@malhotra5_
- [`1fb2860`](https://github.com/OpenHands/OpenHands/commit/1fb28604e68831c6a6c9f321fa8c3381eda6a432) Fix mypy type errors in server/services and storage/org_service (#13190) — _@malhotra5_
- [`8dac109`](https://github.com/OpenHands/OpenHands/commit/8dac1095d73af2f3b8eeb0a77dccb0c2ee1ef8f2) Refactor user_store.py to use async database sessions (#13187) — _@tofarr_
- [`222e8bd`](https://github.com/OpenHands/OpenHands/commit/222e8bd03d176c9699c08b3eb61288fca3cfa97f) Fix linear-related mypy type errors and make Manager.start_job async (#13189) — _@malhotra5_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
