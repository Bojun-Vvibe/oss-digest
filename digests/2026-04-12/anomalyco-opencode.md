# anomalyco/opencode — 2026-04-12

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-11T23:59:59.000Z → 2026-04-12T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a **major internal refactor sweep by kitlangton dismantling several "facade" abstractions** in favor of a more Effect-native style, alongside two snapshot/gitignore fixes from thdxr that are worth flagging for anyone tracking file-tracking behavior.

## Refactor wave: facades being torn down

kitlangton landed six back-to-back refactors removing facade layers across the codebase: `SessionRunState` (#22064), `Instruction` (#22089), `FileTime` (#22090), `FileWatcher` (#22091), `Question` (#22092), and a notable one that "destroys the Truncate facade" while effectifying `Tool.define` (#22093). If you maintain anything that imports these modules or extends `Tool.define`, read #22093 first — it changes a public-ish surface. The auto-generated `chore: generate` commits (c1ddc0e, 17b2900, 1eacc3c) are downstream artifacts of these.

## Snapshot / gitignore fixes

thdxr shipped two related fixes for the snapshot system: #22171 makes snapshots respect `.gitignore` for previously tracked files, followed immediately by #22172 marked as the "complete" version of the same fix. Worth grabbing if you've seen previously-tracked-then-ignored files leaking into snapshots. shafdev also cleaned up `package.json` removing spurious scripts and a stray `randomField` (#22160), and rekram1-node removed git-ignored files that had been checked in (#22200).

## Release infra and provider work

thdxr enabled **beta-branch releases with auto-update support** (3c0ad70) and turned on signed Windows builds for the beta channel (8c4d49c) — beta users will now get properly signed CLIs and in-place updates. On the provider side, rekram1-node made the GitHub Copilot integration use the messages API when available (#22106) and fixed a quota-accounting bug so images read by the agent no longer count against the user's quota (#22168). Logger cleanup ordering was also fixed (#22101) and `log.ts` refactored back to glob-with-sort (#22107).

No releases, PRs, or issues recorded in this window — activity was entirely on commits to `dev`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`8ffadde`](https://github.com/anomalyco/opencode/commit/8ffadde85c89230bdca6b26a6e5b957cbfae7281) chore: rm git ignored files (#22200) — _@rekram1-node_
- [`3c0ad70`](https://github.com/anomalyco/opencode/commit/3c0ad706537189c6215d63e88ddba5cdbe00c81b) ci: enable beta branch releases with auto-update support — _@thdxr_
- [`264418c`](https://github.com/anomalyco/opencode/commit/264418c0cdda37e214c01688dca66c0dcfd3e0b0) fix(snapshot): complete gitignore respect for previously tracked files (#22172) — _@thdxr_
- [`fa2c69f`](https://github.com/anomalyco/opencode/commit/fa2c69f09c031c175d0872bd6406e18241ff2d78) fix(opencode): remove spurious scripts and randomField from package.json (#22160) — _@shafdev_
- [`113304a`](https://github.com/anomalyco/opencode/commit/113304a058d569f00f758e0646fa360cf5b052d5) fix(snapshot): respect gitignore for previously tracked files (#22171) — _@thdxr_
- [`8c4d49c`](https://github.com/anomalyco/opencode/commit/8c4d49c2bc7a08248d78552490b6c0ef8b60042b) ci: enable signed Windows builds on beta branch — _@thdxr_
- [`2aa6110`](https://github.com/anomalyco/opencode/commit/2aa6110c6e72a77e0b8c017091ff26487f69fc67) ignore: exploration — _@thdxr_
- [`8b9b9ad`](https://github.com/anomalyco/opencode/commit/8b9b9ad31ee715301613f7254424590f0cc8805b) fix: ensure images read by agent dont count against quota (#22168) — _@rekram1-node_
- [`3729fd5`](https://github.com/anomalyco/opencode/commit/3729fd57068445104ea464a952d41798ed30ea20) chore(github): vouch simonklee (#22127) — _@simonklee_
- [`74b14a2`](https://github.com/anomalyco/opencode/commit/74b14a2d4e3bedb45cafd1145be0b8525163252e) chore: refactor log.ts, go back to glob but add sort (#22107) — _@rekram1-node_
- [`cdb951e`](https://github.com/anomalyco/opencode/commit/cdb951ec2f2db96b08b3579bcf7af75f02d056d2) feat: make gh copilot use msgs api when available (#22106) — _@rekram1-node_
- [`fc01cad`](https://github.com/anomalyco/opencode/commit/fc01cad2b842a4025e7a04dc79130e843b1d56b7) fix: ensure logger cleanup properly orders list before deleting files (#22101) — _@rekram1-node_
- [`c1ddc0e`](https://github.com/anomalyco/opencode/commit/c1ddc0ea2d6733925569a6a8f937ce9aa6b04cdd) chore: generate — _@opencode-agent[bot]_
- [`319b765`](https://github.com/anomalyco/opencode/commit/319b7655b7f6d7b32f1d6a2de4de78617195dcc9) refactor(tool): destroy Truncate facade, effectify Tool.define (#22093) — _@kitlangton_
- [`824c12c`](https://github.com/anomalyco/opencode/commit/824c12c01a9da6b49f16ab8128f29c32595bfdac) refactor(file): destroy FileWatcher facade (#22091) — _@kitlangton_
- [`17b2900`](https://github.com/anomalyco/opencode/commit/17b290088485bd8c1ccdfbf13e8e9c2f3b2c3301) chore: generate — _@opencode-agent[bot]_
- [`003010b`](https://github.com/anomalyco/opencode/commit/003010bdb63210f9f21485b9abc54b35b38035ce) refactor(question): destroy Question facade (#22092) — _@kitlangton_
- [`82a4292`](https://github.com/anomalyco/opencode/commit/82a4292934c4e3db54f55bbbbd94d2464f2ffc47) refactor(file): destroy FileTime facade (#22090) — _@kitlangton_
- [`eea4253`](https://github.com/anomalyco/opencode/commit/eea4253d674a4700dba575d349dde11e424db219) refactor(session): destroy Instruction facade (#22089) — _@kitlangton_
- [`1eacc3c`](https://github.com/anomalyco/opencode/commit/1eacc3c33936916cba93079692149a78e8507882) chore: generate — _@opencode-agent[bot]_
- [`1a509d6`](https://github.com/anomalyco/opencode/commit/1a509d62a0e2d21368d465e666228c26415fb5bd) refactor(session): destroy SessionRunState facade (#22064) — _@kitlangton_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
