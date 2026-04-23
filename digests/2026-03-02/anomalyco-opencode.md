# anomalyco/opencode — 2026-03-02

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-01T23:59:59.000Z → 2026-03-02T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A quiet day on `dev` with no PRs, issues, or releases in the window — just 18 commits, dominated by UI polish and a few notable fixes.

The headline is the **Animation Smorgasbord** merge (`9d7852b`, #15637) from kitlangton, a substantial animation pass co-authored with adamdotdevin. Pair this with adamdotdevin's SolidJS refactoring of the app (`8176baf`, #13399) and it's clear the desktop/web app surface saw meaningful churn worth a closer look.

Reliability fixes worth noting:
- `be20f86` (#14707) makes the client recover from **413 Request Entity Too Large** errors via auto-compaction — a real user-facing robustness win.
- `7bfbb1f` (#15596) resolves a **project ID conflict** and fixes updates landing on the same session id.
- `78069369` flips `auto-respond` to default **false** at the app level — a behavior change worth flagging in any release notes.
- `bf2cc3a` (#15587) adds UI to **show which messages are queued**.

Session review UI got a focused cleanup from iamdavidhill across five commits (`51e6000`, `4c2aa4a`, `d60696d`, `633a3ba`, `0a3a321`): widened scroll-thumb hit area (12px target over a 6px visible bar, later slimmed to 4px), moved the review header out of the scroll viewport to stop shadow clipping, and rebalanced padding. Minor but cumulatively noticeable polish.

Desktop got two small fixes from Brendonovich around the auto-updater: `b1bfecb` fixes the `latest.json` finalizer and `a692e6f` corrects the download link used by `finalize-latest-json` — relevant if you're tracking the desktop release pipeline.

Housekeeping: nexxeln reverted the Turkish i18n polish in `cf78855` (#15656), and the opencode-agent bot pushed two `chore: generate` commits plus a Nix `node_modules` hash bump (`98c75be`, `b5dc6e6`, `4b9e19f`). adamdotdevin also corrected docs sync permissions in `1cd77b1`.

Recommended deep-reads: #15637 (animations), #13399 (SolidJS refactor), #14707 (413 recovery).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`98c75be`](https://github.com/anomalyco/opencode/commit/98c75be7e1ab72c48985be033862d96209d4069b) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`b5dc6e6`](https://github.com/anomalyco/opencode/commit/b5dc6e670a02775a744c9ae70ebda7e958edc3c5) chore: generate — _@opencode-agent[bot]_
- [`9d7852b`](https://github.com/anomalyco/opencode/commit/9d7852b5c39b64b96fe1bc14a80a344a0667f0b7) Animation Smorgasbord (#15637) — _@kitlangton_
- [`7806936`](https://github.com/anomalyco/opencode/commit/78069369e2253c9788c09b7a71478d140c9741f2) fix(app): default auto-respond to false — _@adamdotdevin_
- [`1cd77b1`](https://github.com/anomalyco/opencode/commit/1cd77b10724ad87acc96790bec4a524614b20ad6) chore: fix docs sync permissions — _@adamdotdevin_
- [`8176baf`](https://github.com/anomalyco/opencode/commit/8176bafc555e562ade48a675dffa3f38751ed8c9) chore(app): solidjs refactoring (#13399) — _@adamdotdevin_
- [`0a3a321`](https://github.com/anomalyco/opencode/commit/0a3a3216db5974efd3edc9a213054fd97d8dbd34) ui: move session review bottom padding — _@iamdavidhill_
- [`633a3ba`](https://github.com/anomalyco/opencode/commit/633a3ba03adf9983e361efe994f34d405b573cbc) ui: avoid session review header clipping — _@iamdavidhill_
- [`d60696d`](https://github.com/anomalyco/opencode/commit/d60696ded80ac681d944bba5b8a150c8acfdf327) ui: tighten scroll thumb and review padding — _@iamdavidhill_
- [`4c2aa4a`](https://github.com/anomalyco/opencode/commit/4c2aa4ab9071b5fa74e1215aa7595b28546ca575) ui: widen scroll thumb hit area — _@iamdavidhill_
- [`51e6000`](https://github.com/anomalyco/opencode/commit/51e6000194c9bf4859aef204406cca80dbd83e40) core: keep review header buttons visible when scroll thumb shows — _@iamdavidhill_
- [`bf2cc3a`](https://github.com/anomalyco/opencode/commit/bf2cc3aa2f0f0576317d048852d83d45a4724c46) feat(app): show which messages are queued (#15587) — _@neriousy_
- [`4b9e19f`](https://github.com/anomalyco/opencode/commit/4b9e19f72f8ebbf05f6b951fd96cf68ba0b23957) chore: generate — _@opencode-agent[bot]_
- [`be20f86`](https://github.com/anomalyco/opencode/commit/be20f865ace5831ea7c6e79a05a2b4cec3923b27) fix: recover from 413 Request Entity Too Large via auto-compaction (#14707) — _@bentrd_
- [`7bfbb1f`](https://github.com/anomalyco/opencode/commit/7bfbb1fcf84e0b1d5f096ec2caf36f0ff50f7a30) fix: project ID conflict, and update on same session id (#15596) — _@noamzbr_
- [`b1bfecb`](https://github.com/anomalyco/opencode/commit/b1bfecb71d32b8bc86e13c08b8b27d349a935c71) desktop: fix latest.json finalizer — _@Brendonovich_
- [`cf78855`](https://github.com/anomalyco/opencode/commit/cf7885516507a1193016854a823d45762a497585) Revert "fix(i18n): polish turkish translations" (#15656) — _@nexxeln_
- [`a692e6f`](https://github.com/anomalyco/opencode/commit/a692e6fdd48634a046501b8b36c26f7ee5c9aabe) desktop: use correct download link in finalize-latest-json — _@Brendonovich_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
