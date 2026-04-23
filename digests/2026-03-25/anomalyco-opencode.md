# anomalyco/opencode — 2026-03-25

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-24T23:59:59.000Z → 2026-03-25T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy commit day on `dev` with two notable feature landings and a broad sweep of stability fixes, but no releases, merged PRs surfaced via the PR feed, or notable issues in the window.

The headline is the initial syncing implementation in core (b0017bf, #17814) from jlongster — a foundational feature worth reading for anyone tracking opencode's multi-device/state-sync direction. Alongside it, nexxeln restored git-backed review modes built on a new effectful git service (73e1072, #18900), and kitlangton continued the Effect-ification push by porting the Worktree service (4647aa8, #18679). Together these three commits signal a continued architectural shift toward Effect-based services.

Stability and correctness fixes dominate the rest. kitlangton landed a substantial Windows e2e hardening pass covering a new CrossSpawnSpawner, snapshot isolation, and session race guards (8864fdc, #19163). thdxr capped snapshotting at 2MB to avoid blowups (0a80ef4, #19043), and rekram1-node narrowed LSP server spawning to files in the current instance/cwd (71693cc, #19058) — both likely to reduce memory and startup cost noticeably. edevil reclassified Bun fetch `ZlibError` as retryable (7123aad, #19104), and ariane-emory fixed `todowrite` to honor agent permission config (66a5655, #19125). adamdotdevin shipped agent normalization (5179b87, #19169).

Beta/conflict-resolution work from Hona moved in three steps: merge context for the resolver (700f571, #19055), typecheck + build smoke (9a64bdb, #19060), and unblocking conflict recovery (aa11fa8, #19068). Brendonovich landed three Electron/app polish commits (#19071, #19082, #19088) including a directory-picker `createDirectory` and pre-warming project sync state on keybind navigation.

Operationally, thdxr replaced the stale-issues workflow with a new `close-issues` script/Action that closes issues after 60 days as `completed`, processed sequentially to dodge rate limits (79e9d19, 958a80c, be142b0, 4f9667c) — worth noting if you triage issues here. There's also a `cmd+arrow` message-navigation rebinding (d1c49ba, #18728) that may affect muscle memory. Two `startup efficiency` reverts were re-applied (0dbfefa, 2b0baf9), suggesting that fix has finally stuck.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`8864fdc`](https://github.com/anomalyco/opencode/commit/8864fdce2f21261909f169a369fa0c3ba44ca85c) fix: Windows e2e stability (CrossSpawnSpawner, snapshot isolation, session race guards) (#19163) — _@kitlangton_
- [`5179b87`](https://github.com/anomalyco/opencode/commit/5179b87aef3d629199f9d63ce73a7acc5618fe9f) fix(app): agent normalization (#19169) — _@adamdotdevin_
- [`66a5655`](https://github.com/anomalyco/opencode/commit/66a56551beb9299b0de694e5070afe22ab6bcad9) fix(task): respect agent permission config for todowrite tool (#19125) — _@ariane-emory_
- [`7123aad`](https://github.com/anomalyco/opencode/commit/7123aad5a8c8957ee5ae34a0d82c9e6800f7109e) fix(opencode): classify ZlibError from Bun fetch as retryable instead of unknown (#19104) — _@edevil_
- [`d6fc5f4`](https://github.com/anomalyco/opencode/commit/d6fc5f414b1f78994fffd550d4104627dbbfac51) chore: storybook tweaks — _@adamdotdevin_
- [`77fc88c`](https://github.com/anomalyco/opencode/commit/77fc88c8ade8e5a620ebbe1197f3a572d29ae91a) chore: remove dead code for todoread tool (#19128) — _@rekram1-node_
- [`cafc2b2`](https://github.com/anomalyco/opencode/commit/cafc2b204b8061b66b4fe010aaa2848d8f9e1bc8) chore: cleanup — _@adamdotdevin_
- [`36709aa`](https://github.com/anomalyco/opencode/commit/36709aae5f6ca567f85ac6fb721db271c5f38f60) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`fac0dd8`](https://github.com/anomalyco/opencode/commit/fac0dd8862a4a76c1b29359c246c8571a4f552f0) chore: generate — _@opencode-agent[bot]_
- [`73e1072`](https://github.com/anomalyco/opencode/commit/73e107250dd44afef244021694a3343d2cc9715a) feat: restore git-backed review modes with effectful git service (#18900) — _@nexxeln_
- [`b746aec`](https://github.com/anomalyco/opencode/commit/b746aec49316d8f83d40aa34fa55bf7cff81c036) chore: storybook tweaks — _@adamdotdevin_
- [`ad40b65`](https://github.com/anomalyco/opencode/commit/ad40b65b0b8546b84f0312925fcec516bfdf4eb3) chore: bump modelcontextprotocol/sdk to 1.27.1 (#19064) — _@rekram1-node_
- [`9713836`](https://github.com/anomalyco/opencode/commit/971383661a5eb1bef1a9348f2db3960449a422b4) chore: generate — _@opencode-agent[bot]_
- [`b0017bf`](https://github.com/anomalyco/opencode/commit/b0017bf1b96ef14fc1ecf91c0b9c4b18e2dfea71) feat(core): initial implementation of syncing (#17814) — _@jlongster_
- [`0c0c6f3`](https://github.com/anomalyco/opencode/commit/0c0c6f3bdb75663837555b07110d7a1b313daeac) chore(app): markdown playground in storyboard — _@adamdotdevin_
- [`b480a38`](https://github.com/anomalyco/opencode/commit/b480a38d313416f7020f61f8bfbe4df920fd90d4) chore(app): markdown playground in storyboard — _@adamdotdevin_
- [`4167e25`](https://github.com/anomalyco/opencode/commit/4167e25c7ec53d066fc81cb15c7ac490569be073) fix(app): opencode web server url — _@adamdotdevin_
- [`1041ae9`](https://github.com/anomalyco/opencode/commit/1041ae91d1a39401fe099747e3bc093bdcdaa079) Reapply "fix(app): startup efficiency" — _@adamdotdevin_
- [`898456a`](https://github.com/anomalyco/opencode/commit/898456a25cf2edbfc4ae4961b37424f633419dd6) Revert "fix(app): startup efficiency" — _@adamdotdevin_
- [`53d0b58`](https://github.com/anomalyco/opencode/commit/53d0b58ebf3468bd161dcfcdc67cd66b6508e9f8) fix(app): hash inline script for csp — _@adamdotdevin_
- [`2b0baf9`](https://github.com/anomalyco/opencode/commit/2b0baf97bd176dfbb9afe81931c90bc6288ada34) Reapply "fix(app): more startup efficiency (#18985)" — _@adamdotdevin_
- [`0dbfefa`](https://github.com/anomalyco/opencode/commit/0dbfefa08088270a000496cfe94e11b5bf3ce821) Reapply "fix(app): startup efficiency (#18854)" — _@adamdotdevin_
- [`d1c49ba`](https://github.com/anomalyco/opencode/commit/d1c49ba210315900b7d21a7d4926b739d8021c6e) fix(app): move message navigation off cmd+arrow (#18728) — _@nexxeln_
- [`3ea72ae`](https://github.com/anomalyco/opencode/commit/3ea72aec21e6266a69cda23b5705c6e8e7e19186) app: pre-warm project globalSync state when navigate project via keybind (#19088) — _@Brendonovich_
- [`9717383`](https://github.com/anomalyco/opencode/commit/9717383823e22f0f081429b55a7c117d4d9aa9c4) electron: remove file extension from electron-store wrapper (#19082) — _@Brendonovich_
- [`5d9e780`](https://github.com/anomalyco/opencode/commit/5d9e780029171df628ce56c0ded3be32bae48d49) electron: add createDirectory to open directory picker (#19071) — _@Brendonovich_
- [`aa11fa8`](https://github.com/anomalyco/opencode/commit/aa11fa865d5a224bb1fea55fe6ea566c05c8befa) fix: unblock beta conflict recovery (#19068) — _@Hona_
- [`9a64bdb`](https://github.com/anomalyco/opencode/commit/9a64bdb5397dc7c75eeb7053f0024e2c89636a2c) fix: beta resolver typecheck + build smoke check (#19060) — _@Hona_
- [`71693cc`](https://github.com/anomalyco/opencode/commit/71693cc24b54fcff8407318f1e076fb20a13ba64) tweak: only spawn lsp servers for files in current instance (or cwd if instance is global) (#19058) — _@rekram1-node_
- [`700f571`](https://github.com/anomalyco/opencode/commit/700f57112ab6d2ced3add2021841e22b16f3b0cb) fix: provide merge context to beta conflict resolver (#19055) — _@Hona_
- [`0a80ef4`](https://github.com/anomalyco/opencode/commit/0a80ef4278c252cb8dca72cae5d5c5748cec7e9a) fix(opencode): avoid snapshotting files over 2MB (#19043) — _@thdxr_
- [`4f9667c`](https://github.com/anomalyco/opencode/commit/4f9667c4bb2fed7fdd87e7eceab3acfd248ccf9f) Change issue close reason from not_planned to completed — _@thdxr_
- [`be142b0`](https://github.com/anomalyco/opencode/commit/be142b00bdca6f2cda069c7ddf315f0c96de84af) Process issues sequentially to avoid rate limits — _@thdxr_
- [`45c2573`](https://github.com/anomalyco/opencode/commit/45c25739793f9154855e492106be2c7420c20f28) Fix close-issues workflow permissions — _@thdxr_
- [`79e9d19`](https://github.com/anomalyco/opencode/commit/79e9d19019e4edd43c6001545a2cbbbd37d8c14f) Add close-issues script and GitHub Action — _@thdxr_
- [`958a80c`](https://github.com/anomalyco/opencode/commit/958a80cc052b9b342dfa2a92c0a4caf1c4418fa9) fix: increase operations-per-run to 1000 and pin stale action to v10.2.0 — _@thdxr_
- [`4647aa8`](https://github.com/anomalyco/opencode/commit/4647aa80ac57f2ec4759afcb7274c566dcfad960) effectify Worktree service (#18679) — _@kitlangton_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
