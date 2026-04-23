# anomalyco/opencode — 2026-03-18

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-17T23:59:59.000Z → 2026-03-18T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a continued Effect-based refactor of core services by @kitlangton, alongside a new multi-step provider auth flow and several fixes. No releases, PRs, or issues surfaced in the window — only commits to `dev`.

The Effect migration advanced on three fronts: `SnapshotService` was effectified (#17878), `TruncateService` was effectified and the old `Scheduler` deleted (#17957), and service namespaces were unified with aligned naming (#18093). Building on that, a new `AppFileSystem` service was introduced and `Snapshot` migrated onto it (#18138). A follow-up restored test regressions and bumped Effect to a newer beta (#18158), and `Provider.list()` was retyped as `Record<ProviderID, Info>` with dead code removed (#18123) — worth a look if you maintain provider integrations, since the typing change can ripple.

On the product side, @rekram1-node landed support for **multi-step auth flows** for providers that ask follow-up questions (#18035), updated the GPT subscription model list (#18101), and trimmed the fallback system prompt (#18140). @fwang shipped Zen routing/model work across several commits — adding `minimax m2.7` (3f1c96a, 3558deb), `gpt 5.4 mini` and `nano` (37c5295), and a fix for routing non-OC traffic (47cf267) — plus Go model docs updates (1b0096b, 8006c29).

Cross-platform and reliability fixes: `cross-spawn` is now used for shim-backed commands on Windows (#18010); vLLM context-overflow errors are detected in core (#17763); desktop error handling now uses an `errorName` function instead of statusCode to identify `NotFoundError` (#17591); and `apply_patch` was added to the `EDIT_TOOLS` filter (#18009).

App startup got faster — @Brendonovich reports a 30–50% load-time reduction from more efficient command-catalog initialization (a43783a) and replaced autoselect effects with a single resource (4ba7d3b). TUI tweaks landed for the session-header search (3256886), with one churn cycle reverted (d2194f6 reverting bfd4787), plus theme overrides (#17958). On the enterprise side, the contact form now pushes leads to Salesforce (#17964).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`5d2f8d7`](https://github.com/anomalyco/opencode/commit/5d2f8d77f964d7be6b9c9e0602f0eb6bb68993b9) fix: restore recent test regressions and upgrade effect beta (#18158) — _@Hona_
- [`81be544`](https://github.com/anomalyco/opencode/commit/81be544981d04cc48b2aa5193c1b2b7096ec8bc4) feat(filesystem): add AppFileSystem service, migrate Snapshot (#18138) — _@kitlangton_
- [`773c119`](https://github.com/anomalyco/opencode/commit/773c1192dcbb7c6e720e5f1728fb948181e0c272) chore: generate — _@opencode-agent[bot]_
- [`5ddfe4a`](https://github.com/anomalyco/opencode/commit/5ddfe4ada531b40e21af236f35930e2aad0422c5) chore: type Provider.list() as Record<ProviderID, Info>, delete dead code (#18123) — _@kitlangton_
- [`a93d98b`](https://github.com/anomalyco/opencode/commit/a93d98bd942d46ccc1d69e1ec2803f2eae36996e) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`54ed87d`](https://github.com/anomalyco/opencode/commit/54ed87d53c27b9ad2e3186b8dc539eaabbc43197) fix(windows): use cross-spawn for shim-backed commands (#18010) — _@Hona_
- [`8ee939c`](https://github.com/anomalyco/opencode/commit/8ee939c741a3d0df81f62dfd36d6147ac148544e) tweak: remove unnecessary parts from the fallback system prompt (#18140) — _@rekram1-node_
- [`1b0096b`](https://github.com/anomalyco/opencode/commit/1b0096bf61e47d54b8afecb965e553fdc1d1e2ed) docs: update go models — _@fwang_
- [`8006c29`](https://github.com/anomalyco/opencode/commit/8006c29db389793a7e370e51c4149a0ad24b22ba) fix: docs — _@fwang_
- [`3f1c96a`](https://github.com/anomalyco/opencode/commit/3f1c96a0bb1e3aa6058c1cc1ad2b978d087b6d6a) zen: minimax m2.7 — _@fwang_
- [`3558deb`](https://github.com/anomalyco/opencode/commit/3558deba4a619082cf3e2cae42da33f0b50ba68e) zen: minimax m2.7 — _@fwang_
- [`c3ddc85`](https://github.com/anomalyco/opencode/commit/c3ddc85ccad64ecf95ca786be37c63b631ae73d2) chore: generate — _@opencode-agent[bot]_
- [`a800583`](https://github.com/anomalyco/opencode/commit/a800583aeaf6500d7bcd09e69ea6e8c8225600a1) refactor(effect): unify service namespaces and align naming (#18093) — _@kitlangton_
- [`171e69c`](https://github.com/anomalyco/opencode/commit/171e69c2fc148985af7b9506b47f048d3a34a767) feat: integrate support for multi step auth flows for providers that require additional questions (#18035) — _@rekram1-node_
- [`822bb7b`](https://github.com/anomalyco/opencode/commit/822bb7b3366d051a6d74657b7764f7f403a0c9a8) tweak: update gpt subscription model list (#18101) — _@rekram1-node_
- [`47cf267`](https://github.com/anomalyco/opencode/commit/47cf267c232f6e36453eb3c7408c1e4d905a3239) zen: fix routing non OC traffic — _@fwang_
- [`976aae7`](https://github.com/anomalyco/opencode/commit/976aae7e4227cd0f29ac8081744a687743d425ef) fix(desktop): fix error handling by adding errorName function to identify NotFoundError rather than statusCode (#17591) — _@OpeOginni_
- [`0ca51ee`](https://github.com/anomalyco/opencode/commit/0ca51eebcf4c8267384da061aac71444ce1e0b87) tweak(ui): theme overrides (#17958) — _@iamdavidhill_
- [`3256886`](https://github.com/anomalyco/opencode/commit/3256886e25517e2a61bc71aa5f2b019a0fbe7b9f) tui: make the title bar search easier to scan without a redundant icon — _@iamdavidhill_
- [`d2194f6`](https://github.com/anomalyco/opencode/commit/d2194f6ddec67e25028ef377e1c197495052dd61) Revert "tui: clean up search button in session header by removing magnifying glass icon and excess padding" — _@iamdavidhill_
- [`bfd4787`](https://github.com/anomalyco/opencode/commit/bfd4787fcd10cf524843eb5853913d82a1406605) tui: clean up search button in session header by removing magnifying glass icon and excess padding — _@iamdavidhill_
- [`58dce01`](https://github.com/anomalyco/opencode/commit/58dce0148ab42ab764a704448fecd8b88a19bd7e) chore: generate — _@opencode-agent[bot]_
- [`79635b8`](https://github.com/anomalyco/opencode/commit/79635b8b412d7eb1d5e98a5f1ff628fe9b84881e) docs(cli): update experimental TY LSP flag description for clarity across multiple languages (#14770) — _@OpeOginni_
- [`331dacf`](https://github.com/anomalyco/opencode/commit/331dacf9db38f1e4d2e6df64c5565d839e9c2c08) app: remove debug text — _@Brendonovich_
- [`4ba7d3b`](https://github.com/anomalyco/opencode/commit/4ba7d3b4062b090ea41c2674a3141c2a66def561) app: replace autoselect effects with single resource — _@Brendonovich_
- [`a43783a`](https://github.com/anomalyco/opencode/commit/a43783a6d47a069ca2fd187c378b8e9899093b37) app: initialize command catalog more efficiently — _@Brendonovich_
- [`37c5295`](https://github.com/anomalyco/opencode/commit/37c52951116e7529a8325f051e18a6dbe3defb60) zen: gpt 5.4 mini and nano — _@fwang_
- [`56102ff`](https://github.com/anomalyco/opencode/commit/56102ff6422ceafdeb349ba12bb08691660471bb) fix(core): detect vLLM context overflow errors (#17763) — _@ghost91-_
- [`1b86c27`](https://github.com/anomalyco/opencode/commit/1b86c27fb8d5b96e09cab48ad33ce08f381652cb) wip: zen — _@fwang_
- [`fe43bdb`](https://github.com/anomalyco/opencode/commit/fe43bdb699ab065482abd162576f5e6a42199311) wip: zen — _@fwang_
- [`a849a17`](https://github.com/anomalyco/opencode/commit/a849a17e9329f0b4b0dbb85abf1366b51f935f8c) feat(enterprise): contact form now pushes to salesforce 🙄  (#17964) — _@R44VC0RP_
- [`0292f1b`](https://github.com/anomalyco/opencode/commit/0292f1b5596db954e3811f91a9fafcfad650ead1) chore: generate — _@opencode-agent[bot]_
- [`5dfe86d`](https://github.com/anomalyco/opencode/commit/5dfe86dcb17632cd717288500120a61843d1b071) refactor(truncation): effectify TruncateService, delete Scheduler (#17957) — _@kitlangton_
- [`4b4dd2b`](https://github.com/anomalyco/opencode/commit/4b4dd2b882380919609340c404bdcb221cf457a3) fix: Add apply_patch to EDIT_TOOLS filter (#18009) — _@ariane-emory_
- [`bc949af`](https://github.com/anomalyco/opencode/commit/bc949af6235703225161d65b286fa9ecdbe27f1c) chore: generate — _@opencode-agent[bot]_
- [`9e7c136`](https://github.com/anomalyco/opencode/commit/9e7c136de7283fc564dbb213f8a492260bbedac5) refactor(snapshot): effectify SnapshotService (#17878) — _@kitlangton_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
