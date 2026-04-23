# OpenHands/OpenHands — 2026-03-13

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-03-12T23:59:59.000Z → 2026-03-13T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is the merge of **frontend Organizational support (#9496)** by amanape — a long-running, multi-author feature that lays groundwork for team-based usage in the UI. It pairs naturally with two backend/admin pieces from chuckbutkus: a **default initial budget for teams/users (#13389)** and an **Enterprise SSO login button on the V1 login page (#13390)**, plus a feature flag to **route new users to V1 (#13393)**. Together these signal a coordinated push to make V1 the default experience for organizational customers.

On the platform/backend side, tofarr added a **`sandbox_id__eq` filter to AppConversationService search/count (#13387, #13385)**, useful for scoping conversations per sandbox, and reverted `on_conversation_update` to reload the conversation inside the method (#13368) — worth a look if you depend on that hook's semantics. A new **`AwsSharedEventService` for shared conversations (#13141)** also landed, expanding multi-user event sharing infrastructure.

Security and correctness fixes:
- **CVE-2025-67221**: orjson bumped to 3.11.6+ (#13371).
- An async-call-not-awaited bug was fixed (#13395).
- V1 issue-comment template now includes PR-creation instructions and a summary-prompt fix (#13377) by xingyaoww.

Frontend polish from hieptl rounds out the day: auto-scroll in the **Planner tab** when plan content updates (#13355), and responsive-layout fixes on the **integrations page (#13354)** and **home page (#13353)**.

What to read first:
- **#9496** if you care about the org/team UX direction.
- **#13393 / #13389 / #13390** to understand the V1 rollout and SSO/billing defaults.
- **#13371** if you ship orjson — patch promptly.
- **#13368** if your code hooks into `on_conversation_update`.

No releases, issues, or open PRs were reported in the window; activity was entirely merged commits to `main`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`8189d21`](https://github.com/OpenHands/OpenHands/commit/8189d21445c27e260aeb456e5d7e3ba06f0d5da0) Fix async call to await return (#13395) — _@chuckbutkus_
- [`b7e5c9d`](https://github.com/OpenHands/OpenHands/commit/b7e5c9d25bb8998ac4bfbc40bb3293cd1260617b) Use a flag to indicate if new users should use V1 (#13393) — _@chuckbutkus_
- [`873dc66`](https://github.com/OpenHands/OpenHands/commit/873dc6628fdd965fb49539c29ab3b8a43e6f4dc7) Add Enterprise SSO login button to V1 login page (#13390) — _@chuckbutkus_
- [`f5d0af1`](https://github.com/OpenHands/OpenHands/commit/f5d0af15d9aa9ffd78f9ad8dc1df652b2f2d4864) Add default initial budget for teams/users (#13389) — _@chuckbutkus_
- [`922e3a2`](https://github.com/OpenHands/OpenHands/commit/922e3a24310168510dd96d206f16d79d80324595) Add AwsSharedEventService for shared conversations (#13141) — _@chuckbutkus_
- [`0527c46`](https://github.com/OpenHands/OpenHands/commit/0527c46bba98754e32dbff8d2c75eaf4829fe9d1) Add sandbox_id__eq filter to AppConversationService search and count methods (#13387) — _@tofarr_
- [`b4f0037`](https://github.com/OpenHands/OpenHands/commit/b4f00379b822723132961c822d3b3701d33e5be5) fix(frontend): auto-scroll not working in Planner tab when plan content updates (#13355) — _@hieptl_
- [`cd2d0ee`](https://github.com/OpenHands/OpenHands/commit/cd2d0ee9a547cbf9f04d46ea14a9559890007a97) feat(frontend): Organizational support (#9496) — _@amanape_
- [`8e6d05f`](https://github.com/OpenHands/OpenHands/commit/8e6d05fc3a28cf87e0a28448c403798a5300cdb8) Add sandbox_id__eq filter parameter to search/count conversation methods (#13385) — _@tofarr_
- [`9d82f97`](https://github.com/OpenHands/OpenHands/commit/9d82f97a820f6764bfdd3ec4c6f5404457ee335f) fix(frontend): address the responsive issue on the integrations page (#13354) — _@hieptl_
- [`2c7b25a`](https://github.com/OpenHands/OpenHands/commit/2c7b25ab1c6d453ff74b90064a6cbbf9da7ad679) fix(frontend): address the responsive issue on the home page (#13353) — _@hieptl_
- [`e82bf44`](https://github.com/OpenHands/OpenHands/commit/e82bf443240f00eff27472562ea12f93da16418d) Fix CVE-2025-67221: Update orjson to 3.11.6+ (#13371) — _@aivong-openhands_
- [`8799c07`](https://github.com/OpenHands/OpenHands/commit/8799c0702736030130b7ff10ee3ae32f28ecd465) fix: add PR creation instructions to V1 issue comment template and fix summary prompt (#13377) — _@xingyaoww_
- [`8b8ed5b`](https://github.com/OpenHands/OpenHands/commit/8b8ed5be96674f236a4f2028e26491dfa62a2d14) fix: Revert on_conversation_update to load conversation inside method (#13368) — _@tofarr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
