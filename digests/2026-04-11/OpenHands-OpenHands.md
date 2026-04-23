# OpenHands/OpenHands — 2026-04-11

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-04-10T23:59:59.000Z → 2026-04-11T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A quiet maintenance day dominated by a frontend/backend migration to V1 API endpoints and routine dependency bumps; no releases or notable issues filed.

The most consequential thread is tofarr's continued push to move the app onto V1 APIs: `git-service` was migrated in #13877, the frontend was switched to the V1 settings endpoints in #13887, and dead frontend exports were pruned in #13889 and #13891 (with a related still-open draft #13831). Anyone working on the frontend or service layer should skim these to understand the new endpoint surface and avoid reintroducing removed utilities (`formatTimestamp`, `getExtension`, `removeApiKey`, `isNumber`).

On the backend, neubig filtered `ConversationStateUpdateEvent` out of the shared-events endpoints (#13888), which trims event-stream noise for clients subscribing to conversation streams. gpothier's #13880 fixes a config fallback so `openhands_provider_base_url` falls back to `LLM_BASE_URL`, removing a footgun for self-hosted LLM users.

Notable new open PRs worth a closer look:
- #13895 (sjathin) introduces a `dependency_repos` frontmatter field for microagents, a real feature addition that begins to address the long-standing single-repo-per-conversation limitation. This is the most strategically interesting PR of the day.
- #13532 (maveilo) adds llama.cpp/OpenAI-compatible support for dynamically switching between main and critic models.
- #13582 (Krishnachaitanyakc) adds a `field_validator` on `LLMConfig.base_url`/`Settings.llm_base_url` that rejects misconfigured endpoint suffixes (`/chat/completions`, `/messages`, etc.) with actionable errors — small but high-leverage UX fix for a common support issue.

Two PRs were closed without merge: the auto SDK bump to v1.16.1 (#13707, presumably superseded) and a security PR #13824 attempting to remove an `exec()` from `action_execution_server.py` — worth checking the discussion to see whether the underlying CRITICAL-severity finding was rejected as a false positive or is being addressed elsewhere.

Housekeeping: dependabot bumped `docker/metadata-action` (5→6, #13702), `actions/upload-artifact` (5→7, #13699), `actions/checkout` (4→6, #13703), and `docker/login-action` (3→4, #13701).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#13895](https://github.com/OpenHands/OpenHands/pull/13895) **feat(microagent): add dependency_repos frontmatter field for multi-repo support** — _by @sjathin, updated 2026-04-11T22:57:58Z_
- [#13831](https://github.com/OpenHands/OpenHands/pull/13831) _(draft)_ **Remove dead frontend exports** — _by @chuckbutkus, updated 2026-04-11T17:30:34Z_
- [#13532](https://github.com/OpenHands/OpenHands/pull/13532) **Add Support for Switching Models via llama.cpp Compatible API** — _by @maveilo, updated 2026-04-11T09:10:27Z_
- [#13582](https://github.com/OpenHands/OpenHands/pull/13582) **fix: validate base_url rejects API endpoint paths with actionable error** — _by @Krishnachaitanyakc, updated 2026-04-11T02:03:21Z_


## Closed PRs (not merged)

- [#13707](https://github.com/OpenHands/OpenHands/pull/13707) **Bump SDK packages to v1.16.1** — _by @all-hands-bot, closed 2026-04-11T18:54:15Z_
- [#13824](https://github.com/OpenHands/OpenHands/pull/13824) **fix: remove unsafe exec() in action_execution_server.py** — _by @orbisai0security, closed 2026-04-11T05:23:59Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`7a6eb7e`](https://github.com/OpenHands/OpenHands/commit/7a6eb7e07c3abf4cd32248af9c6de6baeabece2c) fix: fallback to LLM_BASE_URL for openhands_provider_base_url (#13880) — _@gpothier_
- [`c92178a`](https://github.com/OpenHands/OpenHands/commit/c92178ac6bc55810ddb0eace59687f6f7a9f0326) chore(deps): bump docker/metadata-action from 5 to 6 (#13702) — _@dependabot[bot]_
- [`5400fea`](https://github.com/OpenHands/OpenHands/commit/5400fea1e48aa3b9313081b1449b404bd0639829) chore(deps): bump actions/upload-artifact from 5 to 7 (#13699) — _@dependabot[bot]_
- [`635b090`](https://github.com/OpenHands/OpenHands/commit/635b0900658d8a5b4cd6a71a464864025cceb44e) chore(deps): bump actions/checkout from 4 to 6 (#13703) — _@dependabot[bot]_
- [`f3815a7`](https://github.com/OpenHands/OpenHands/commit/f3815a769f59d1a479f226cf1553975aeab45898) chore(deps): bump docker/login-action from 3 to 4 (#13701) — _@dependabot[bot]_
- [`4f81d2a`](https://github.com/OpenHands/OpenHands/commit/4f81d2ae7a988457017eb6375832508b0e867fc2) Filter out ConversationStateUpdateEvent from shared-events endpoints (#13888) — _@neubig_
- [`a06b9cc`](https://github.com/OpenHands/OpenHands/commit/a06b9ccffa2c33f76e34ad53fd82e8c3ceb670b7) Remove dead frontend exports (#13891) — _@tofarr_
- [`8406dcb`](https://github.com/OpenHands/OpenHands/commit/8406dcb82faf9d23e9e63407199638bead7bfcc0) Remove dead frontend exports (#13889) — _@tofarr_
- [`6c0a92c`](https://github.com/OpenHands/OpenHands/commit/6c0a92c2cdb4c08e751cdfeb75f1943823c0562b) Update frontend to use V1 settings endpoints (#13887) — _@tofarr_
- [`7f25348`](https://github.com/OpenHands/OpenHands/commit/7f253485064750545168739647e082e43475a708) Migrate git-service API to V1 endpoints (#13877) — _@tofarr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
