# OpenHands/OpenHands — 2026-03-30

> Autonomous software engineering agent; bellwether for agentic dev tooling.

**Window:** 2026-03-29T23:59:59.000Z → 2026-03-30T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## OpenHands 1.6.0 ships with hooks support, /clear command, and Catalan i18n

The headline event is the **1.6.0 release** ([release notes](https://github.com/OpenHands/OpenHands/releases/tag/1.6.0), cut by `mamoodi` in #13604). Notable additions include hook support (#12773 by `xingyaoww`), a `/clear` slash command for V1 conversations that starts a fresh chat while preserving sandbox/runtime state (#12786), and Catalan localization (#13299). Anyone running a self-hosted deployment should read the release notes before upgrading.

Alongside the cut, the day's commits are dominated by frontend and conversation-flow bug fixes — useful context for what's already patched on top of 1.6.0:

- **Conversation/runtime fixes:** handling of a new server error event (#13643), prevention of V0 conversation creation due to a settings race condition (#13628), and a fix for git setup failing on remote sandboxes when grouping (#13646). The planning agent also gets an auth fix for a missing `base_url` (#13638).
- **Settings persistence:** `disabled_skills` is now persisted in the SaaS settings store (#13658) — relevant for SaaS operators relying on skill toggles.
- **Frontend polish:** duplicate "payment successful" toast after Stripe checkout suppressed (#13649), right panel now hidden when the active tab is unpinned (#13648), task-tracking spinner replaced with a static icon (#13625), and "Unknown event" no longer surfaces for actions with empty data (#13639).
- **UX addition:** `/new` joins the slash-command menu for V1 conversations (#13599), complementing the new `/clear` from the release.

Docs received a small but practical note in `AGENTS.md` instructing contributors to preserve tool versions when regenerating lockfiles (#13561) — worth a glance for anyone touching dependency files.

No new issues, PRs, or non-release tags were opened in the window; activity was entirely the release plus a tight cluster of follow-up fixes merged directly to `main`. For most readers, skimming the 1.6.0 notes plus #13658 and #13628 will cover the meaningful changes.

## Releases

- **[1.6.0](https://github.com/OpenHands/OpenHands/releases/tag/1.6.0)** — 1.6.0 - 2026-03-30 _by @mamoodi at 2026-03-30T16:01:39Z_
  > ## What's Changed
  > ### Added
  > * Added support for hooks by @xingyaoww in https://github.com/OpenHands/OpenHands/pull/12773
  > * Added Catalan language by @jordimas in https://github.com/OpenHands/OpenHands/pull/13299
  > * Added /clear command for V1 conversations. Typing /clear in the chat creates a new conversation that inherits the current sandbox and configuration, giving you a fresh chat history while keeping your runtime state intact by @MkDev11 in https://github.com/OpenHands/OpenHands/pull/12786…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`9c0f5d7`](https://github.com/OpenHands/OpenHands/commit/9c0f5d785ee71c7d16d157333994245cb242a885) fix(backend): persist disabled_skills in SaaS settings store (#13658) — _@hieptl_
- [`73ba66f`](https://github.com/OpenHands/OpenHands/commit/73ba66faeae1520fc2671b07677db4b5e3e235d3) Handling the new server error event (#13643) — _@tofarr_
- [`a198599`](https://github.com/OpenHands/OpenHands/commit/a198599d917fca47c467715b43858fc30f8082d4) docs(AGENTS.md): add guidance to preserve tool versions when regenerating lockfiles (#13561) — _@aivong-openhands_
- [`7e20bd5`](https://github.com/OpenHands/OpenHands/commit/7e20bd51f918f7bf80bd9c7f44cf236fcdbda855) Release 1.6.0 (#13604) — _@mamoodi_
- [`b75c83d`](https://github.com/OpenHands/OpenHands/commit/b75c83d92abfcbbb63b7b82e0fdd0e981f69a66f) fix(frontend): prevent duplicate payment successful toast after Stripe checkout (#13649) — _@hieptl_
- [`5528b01`](https://github.com/OpenHands/OpenHands/commit/5528b01c186958bf2c92d9adaaa7f7ea0c487185) refactor(frontend): replace loading spinner with static icon for task tracking (#13625) — _@hieptl_
- [`ed5ab11`](https://github.com/OpenHands/OpenHands/commit/ed5ab11fccd75b5b98c9f51ebc536713dc519275) fix: planning agent auth error due to missing base_url (#13638) — _@hieptl_
- [`e1afc95`](https://github.com/OpenHands/OpenHands/commit/e1afc95b6c76b7493deb5d7f7dd4ecc2a8cb719b) fix(frontend): hide right panel when active tab is unpinned (#13648) — _@hieptl_
- [`6dd9046`](https://github.com/OpenHands/OpenHands/commit/6dd9046ba29f5d22b045a28d7a34c9ecfc981eab) Fix issue where git setup fails on remote sandboxed when grouping. (#13646) — _@tofarr_
- [`9ad47bf`](https://github.com/OpenHands/OpenHands/commit/9ad47bf43fe2dc7cdd68c5e61268c3c56937951f) fix: prevent V0 conversation creation due to settings race condition (#13628) — _@xingyaoww_
- [`b0d8244`](https://github.com/OpenHands/OpenHands/commit/b0d8244ad528a85d3b223478855b2a6cf8391d30) fix(frontend): prevent "Unknown event" shown for actions with empty d… (#13639) — _@sjathin_
- [`c210d52`](https://github.com/OpenHands/OpenHands/commit/c210d5294fa82459443e6163b9b1c9c9f55073fc) feat: add /new to slash command menu for V1 conversations (#13599) — _@karanjaxyz_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
