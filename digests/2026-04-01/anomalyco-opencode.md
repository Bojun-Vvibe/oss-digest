# anomalyco/opencode — 2026-04-01

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-31T23:59:59.000Z → 2026-04-01T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## opencode 2026-04-01 digest

A high-volume refactor day dominated by an ongoing migration to **Effect**-based services and a parallel push to harden the e2e test suite. Release **v1.3.13** shipped, but it's a trivial opentui bump ([6314f09](https://github.com/anomalyco/opencode/commit/6314f09)).

The most consequential change is the plugin/config system rework by kommander ([#20556](https://github.com/anomalyco/opencode/pull/20556)), which adds support for **theme-only plugin packages** and is paired with subpath-only package resolution for plugins ([#20555](https://github.com/anomalyco/opencode/pull/20555)). Closely related: rekram1-node landed a **new provider plugin hook** that resolves models from the GitHub Models endpoint with a models.dev fallback ([#20533](https://github.com/anomalyco/opencode/pull/20533)) — worth a read for anyone building custom providers. thdxr also replaced the in-house `BunProc` with a new `Npm` module backed by `@npmcli/arborist` ([#18308](https://github.com/anomalyco/opencode/pull/18308)), a meaningful dependency-management swap.

kitlangton drove the Effect migration across multiple subsystems: provider/auth/file services moved off async facades ([#20480](https://github.com/anomalyco/opencode/pull/20480)), bash and shell execution now go through Effect ChildProcess ([#20496](https://github.com/anomalyco/opencode/pull/20496), [#20494](https://github.com/anomalyco/opencode/pull/20494)), MessageV2 gained Effect-returning variants ([#20374](https://github.com/anomalyco/opencode/pull/20374)), and the prompt layer now consumes the Provider service ([#20167](https://github.com/anomalyco/opencode/pull/20167)). A concurrency fix coalesces console token refreshes ([#20503](https://github.com/anomalyco/opencode/pull/20503)).

Notable bug fixes: snapshot revert no longer reorders batches ([#20564](https://github.com/anomalyco/opencode/pull/20564)); FileTime path normalization fixes a long-standing **Windows path mismatch** ([#20367](https://github.com/anomalyco/opencode/pull/20367)); scroll config is now applied uniformly across scrollboxes ([#14735](https://github.com/anomalyco/opencode/pull/14735)); selection expansion retains focused input selections ([#20205](https://github.com/anomalyco/opencode/pull/20205)). thdxr also added a fallback to the first agent when the last-used agent is unavailable ([d58004a](https://github.com/anomalyco/opencode/commit/d58004a)).

UX additions worth noting: file mentions in comments ([#20447](https://github.com/anomalyco/opencode/pull/20447)) and keyboard support on the question dock ([#20439](https://github.com/anomalyco/opencode/pull/20439)). Test infra saw heavy investment — a mock-LLM e2e fixture ([#20375](https://github.com/anomalyco/opencode/pull/20375)) and several suites migrated to per-worker isolated backends ([#20505](https://github.com/anomalyco/opencode/pull/20505), [#20464](https://github.com/anomalyco/opencode/pull/20464), [#20383](https://github.com/anomalyco/opencode/pull/20383)).

## Releases

- **[v1.3.13](https://github.com/anomalyco/opencode/releases/tag/v1.3.13)** — v1.3.13 _by @opencode-agent[bot] at 2026-04-01T00:44:30Z_
  > - Bump opentui version


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`f6fd43e`](https://github.com/anomalyco/opencode/commit/f6fd43e57423a5d5767bad8894eb7803712f20b1) Refactor plugin/config loading, add theme-only plugin package support (#20556) — _@kommander_
- [`854484b`](https://github.com/anomalyco/opencode/commit/854484babf7a8b60eb01bc7e5f73136f0caf5b18) chore: generate — _@opencode-agent[bot]_
- [`e4ff1ea`](https://github.com/anomalyco/opencode/commit/e4ff1ea7784692d328b8f1510776648c34d87d9b) refactor(bash): use Effect ChildProcess for bash tool execution (#20496) — _@kitlangton_
- [`26fb6b8`](https://github.com/anomalyco/opencode/commit/26fb6b87882fa054b69463be75ffef1cdeda2629) refactor: add Effect-returning versions of MessageV2 functions (#20374) — _@kitlangton_
- [`4214ae2`](https://github.com/anomalyco/opencode/commit/4214ae205d3dbd8d99a6ff67f63fa5670712cad4) chore: generate — _@opencode-agent[bot]_
- [`d9d4f89`](https://github.com/anomalyco/opencode/commit/d9d4f895bcf5f95bd853fe2921de3e6a2798798f) fix(test): auto-acknowledge tool-result follow-ups in mock LLM server (#20528) — _@kitlangton_
- [`48db7cf`](https://github.com/anomalyco/opencode/commit/48db7cf07a651895341e019604d4ad485b97866d) fix(opencode): batch snapshot revert without reordering (#20564) — _@kitlangton_
- [`802d165`](https://github.com/anomalyco/opencode/commit/802d1655726c668978365d47b11cface4719c3bd) chore(tui): clean up scroll config follow-up (#20561) — _@Hona_
- [`f7f41dc`](https://github.com/anomalyco/opencode/commit/f7f41dc3a0ced9ab625cc3665424b7b8a4c571d0) fix(tui): apply scroll configuration uniformly across all scrollboxes (#14735) — _@Hona_
- [`1fcfb69`](https://github.com/anomalyco/opencode/commit/1fcfb69bf772f085289dd22f6898ac5d926226e9) feat: add new provider plugin hook for resolving models and sync models from github models endpoint (falls back to models.dev) (#20533) — _@rekram1-node_
- [`fa96cb9`](https://github.com/anomalyco/opencode/commit/fa96cb9c6e7d0cafad065066c00c2119b94b68d9) Fix selection expansion by retaining focused input selections during global key events (#20205) — _@Hona_
- [`cc30bfc`](https://github.com/anomalyco/opencode/commit/cc30bfc94b07cf98e51d1c6f9e1f84dc00dbb6b4) resolve subpath only packages for plugins (#20555) — _@kommander_
- [`880c0a7`](https://github.com/anomalyco/opencode/commit/880c0a7477f716998db3f25afeab42bc937272e3) fix: normalize filepath in FileTime to prevent Windows path mismatch (#20367) — _@JosXa_
- [`eabf3ca`](https://github.com/anomalyco/opencode/commit/eabf3caeb9ff70bc8a8efcb03210547e3c875a94) zen: sync — _@fwang_
- [`c9326fc`](https://github.com/anomalyco/opencode/commit/c9326fc199447025af13ce26192e3ce21db16980) refactor: replace BunProc with Npm module using @npmcli/arborist (#18308) — _@thdxr_
- [`d7481f4`](https://github.com/anomalyco/opencode/commit/d7481f459363efc11f206d3244b804e6a512c43a) wip: zen — _@fwang_
- [`f3f728e`](https://github.com/anomalyco/opencode/commit/f3f728ec27b2b2fc67470a2acec0072a5f1badd0) test(app): fix isolated backend follow-ups (#20513) — _@kitlangton_
- [`c619cae`](https://github.com/anomalyco/opencode/commit/c619caefdd1d184cae549749240c5f77f63b150a) fix(account): coalesce concurrent console token refreshes (#20503) — _@kitlangton_
- [`c559af5`](https://github.com/anomalyco/opencode/commit/c559af51ced7c47ccb55ece0de1bfee37a74e552) test(app): migrate more e2e suites to isolated backend (#20505) — _@kitlangton_
- [`d1e0a46`](https://github.com/anomalyco/opencode/commit/d1e0a4640c5d10a689f242ad6a811b8c8e7a5fe8) Update VOUCHED list — _@github-actions[bot]_
- [`f9e71ec`](https://github.com/anomalyco/opencode/commit/f9e71ec51569359ddba1c84ef2bdfddfd3b072d1) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`ef538c9`](https://github.com/anomalyco/opencode/commit/ef538c9707827a33e1ba32249349fb4c67130b8f) chore: generate — _@opencode-agent[bot]_
- [`2f405da`](https://github.com/anomalyco/opencode/commit/2f405daa983c950794aa3982584f59411f89bc50) refactor: use Effect services instead of async facades in provider, auth, and file (#20480) — _@kitlangton_
- [`a9c85b7`](https://github.com/anomalyco/opencode/commit/a9c85b7c2789f9363cbfeb9c1adceaddfbdbbdc3) refactor(shell): use Effect ChildProcess for shell command execution (#20494) — _@kitlangton_
- [`897d83c`](https://github.com/anomalyco/opencode/commit/897d83c589528bf56c529179a47ebade89b0a3cc) refactor(init): tighten AGENTS guidance (#20422) — _@nexxeln_
- [`0a125e5`](https://github.com/anomalyco/opencode/commit/0a125e5d4d76f2ea8b015d7bd716b54f30f01d90) chore: generate — _@opencode-agent[bot]_
- [`38d2276`](https://github.com/anomalyco/opencode/commit/38d22765920ef5047db4d9f1bdc0bdf602e6906f) test(e2e): isolate prompt tests with per-worker backend (#20464) — _@kitlangton_
- [`d58004a`](https://github.com/anomalyco/opencode/commit/d58004a864ee04a34a30fbbcdde9336d477fc8fa) fall back to first agent if last used agent is not available — _@thdxr_
- [`5fd833a`](https://github.com/anomalyco/opencode/commit/5fd833aa18d2cc71c977925c0646392a7f78ece2) refactor: standardize InstanceState variable name to state (#20267) — _@kitlangton_
- [`44f8301`](https://github.com/anomalyco/opencode/commit/44f83015cd8b7e4645a1904fe4e10fedea22d7a3) perf(review): defer offscreen diff mounts (#20469) — _@nexxeln_
- [`9a1c9ae`](https://github.com/anomalyco/opencode/commit/9a1c9ae15a07fd0e308d29e2db4411661725a4a7) test(app): route prompt e2e through mock llm (#20383) — _@kitlangton_
- [`a3a6cf1`](https://github.com/anomalyco/opencode/commit/a3a6cf1c075c40c87980dda181d586a1d06ea304) feat(comments): support file mentions (#20447) — _@nexxeln_
- [`47a6761`](https://github.com/anomalyco/opencode/commit/47a676111a3532aebed01110494742e536b7e5b4) fix(session): add keyboard support to question dock (#20439) — _@nexxeln_
- [`1df5ad4`](https://github.com/anomalyco/opencode/commit/1df5ad470a49163ad623460b4e969da1b51cc404) app: try to hide autofill popups in prompt input (#20197) — _@Brendonovich_
- [`506dd75`](https://github.com/anomalyco/opencode/commit/506dd758187c93bae028fbe7bbfd6ed75772ee1b) electron: port mergeShellEnv logic from tauri (#20192) — _@Brendonovich_
- [`c8ecd64`](https://github.com/anomalyco/opencode/commit/c8ecd640220331ce7695d72ea8c618dd8909eab1) test(app): add mock llm e2e fixture (#20375) — _@kitlangton_
- [`ca376a4`](https://github.com/anomalyco/opencode/commit/ca376a4cffc47e1fd629c4073d3cdca27eba9adc) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`7532d99`](https://github.com/anomalyco/opencode/commit/7532d99e5b596ac8a4736154efdda649dcdcd4cb) test: finish HTTP mock processor coverage (#20372) — _@kitlangton_
- [`181b5f6`](https://github.com/anomalyco/opencode/commit/181b5f62361a6ce2d0a6b3e0ba266ed50a6dd1ab) refactor(prompt): use Provider service in effect layers (#20167) — _@kitlangton_
- [`6314f09`](https://github.com/anomalyco/opencode/commit/6314f09c14fdd6a3ab8bedc4f7b7182647551d12) release: v1.3.13 — _@opencode_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
