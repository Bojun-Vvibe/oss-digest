# anomalyco/opencode — 2026-03-21

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-20T23:59:59.000Z → 2026-03-21T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy internals day for opencode: no releases, PRs, or issues in the window, but a steady stream of commits to `dev` focused on service architecture, the desktop app, and the zen provider.

The most consequential change is a continuation of kitlangton's service refactor: `Move service state into InstanceState, flatten service facades` (38e0dc9, #18483) restructures how service state is held, followed later in the day by `effectify SessionStatus service` (10a3d6c, #18565), which ports SessionStatus onto Effect. If you only read one diff, read #18483 — downstream code touching services will likely need to follow this shape.

On the zen provider, kitlangton landed `fix(zen): emit cost chunk in client-facing format, not upstream format` (6a64177, #16817), correcting a wire-format mismatch that would have affected any client parsing cost telemetry. fwang also pushed a `wip: zen` commit (9b805e1) directly to the branch, so more zen work is in flight. Separately, Protocol-zero-0's `fix(provider): only set thinkingConfig for models with reasoning capability` (cc818f8, #18283) avoids sending `thinkingConfig` to models that don't support it — worth checking if you maintain a custom provider list.

The desktop app got two notable Brendonovich PRs: `manage mutation loading states with tanstack query` (6a16db4, #18501) and `allow navigating projects with keybinds` (9ad6588, #18502). The first changes the mutation/loading pattern app-wide; the second is a UX add.

Smaller items: `Upgrade opentui to 0.1.88` (040f551, #18079) for the TUI; thdxr added DB-location customization (5dc4790) and a small annotation fix (f80343b); rekram1-node added a disavow-list entry (dc00448, #18476); and the bot pushed several `chore: generate` and nix `node_modules` hash updates throughout the day.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`10a3d6c`](https://github.com/anomalyco/opencode/commit/10a3d6c54e403ec68c0ef150c2f109462199df23) effectify SessionStatus service (#18565) — _@kitlangton_
- [`832b8e2`](https://github.com/anomalyco/opencode/commit/832b8e252e8e7d0a2d321e0291f468716a26577c) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`040f551`](https://github.com/anomalyco/opencode/commit/040f551c57ebd39e1d95a7d09bc7dc4cbbb85566) Upgrade opentui to 0.1.88 (#18079) — _@kommander_
- [`cc818f8`](https://github.com/anomalyco/opencode/commit/cc818f803268881ce556fba1b0069d9b92225302) fix(provider): only set thinkingConfig for models with reasoning capability (#18283) — _@Protocol-zero-0_
- [`d5337b4`](https://github.com/anomalyco/opencode/commit/d5337b41f45f1948cbebadfb6714dc90afe62a8c) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`9f7a76d`](https://github.com/anomalyco/opencode/commit/9f7a76d6c06d061663c16e17a65bd635b3091ea4) chore: generate — _@opencode-agent[bot]_
- [`6a16db4`](https://github.com/anomalyco/opencode/commit/6a16db4b929422b6f5ef7072ac889cec41ae1eb2) app: manage mutation loading states with tanstack query (#18501) — _@Brendonovich_
- [`9ad6588`](https://github.com/anomalyco/opencode/commit/9ad6588f3e0066125033810a5e0e4dc08f0c6961) app: allow navigating projects with keybinds (#18502) — _@Brendonovich_
- [`fb6bf0b`](https://github.com/anomalyco/opencode/commit/fb6bf0b35e623113d23d15cc1a12b28fedd31f88) chore: generate — _@opencode-agent[bot]_
- [`f80343b`](https://github.com/anomalyco/opencode/commit/f80343b875124cc96807b47055ecb2e28c6d3ebf) fix annotation — _@thdxr_
- [`9b805e1`](https://github.com/anomalyco/opencode/commit/9b805e1cc4ba4a98419ca13d9d487c4550af8ddf) wip: zen — _@fwang_
- [`2e0d5d2`](https://github.com/anomalyco/opencode/commit/2e0d5d230893dbddcefb35a02f53ff2e7a58e5d0) chore: generate — _@opencode-agent[bot]_
- [`38e0dc9`](https://github.com/anomalyco/opencode/commit/38e0dc9ccd18f791ca9d433e5f2d1c1c7178341a) Move service state into InstanceState, flatten service facades (#18483) — _@kitlangton_
- [`40aeaa1`](https://github.com/anomalyco/opencode/commit/40aeaa120d050a0f3395367cbc2acea052bd8fe6) chore: generate — _@opencode-agent[bot]_
- [`6a64177`](https://github.com/anomalyco/opencode/commit/6a6417758972db9eb08b8534e84f21471899e205) fix(zen): emit cost chunk in client-facing format, not upstream format (#16817) — _@kitlangton_
- [`5dc4790`](https://github.com/anomalyco/opencode/commit/5dc47905a93d01efeaff3de713d9aaea1246dd59) allow customizing DB location — _@thdxr_
- [`dc00448`](https://github.com/anomalyco/opencode/commit/dc0044882c465ce96a2452498fb36313bbe953ab) ignore: add danieljoshuanazareth to disavow list  (#18476) — _@rekram1-node_
- [`45ae7dc`](https://github.com/anomalyco/opencode/commit/45ae7dc6535879a8e42561ceff2c2cedc9b506e3) Update VOUCHED list — _@github-actions[bot]_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
