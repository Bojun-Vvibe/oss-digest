# anomalyco/opencode — 2026-03-23

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-22T23:59:59.000Z → 2026-03-23T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy commits-only day on `dev` (no PR/issue/release metadata in window) dominated by desktop app/TUI polish, plus a notable `opentui` bump and Bun upgrade.

The headline change is the upgrade of `opentui` to 0.1.90 (#18551) alongside a follow-up making the TUI use the renderer theme mode to switch dark/light (#18851) — together these are the most likely sources of any visual regressions worth watching. The toolchain also moves: Bun is bumped to 1.3.11 (#18144), and there are several auto-generated nix `node_modules` hash updates plus a `chore: generate` (`6926dc2`, `eb74e4a`, `8035c34`, `3b35499`, `85d8e14`, `9a006d8`) that are routine but worth noting if you build from source.

Desktop app fixes from Brendonovich and nexxeln cluster around session/project UX: better session busy-state handling (#18758), lifting project hover state to the layout (#18732), preventing stale session hover preview on refocus (#18727), batching multi-file prompt attachments (#18722), only navigating prompt history when the input is empty (#18775), preferring cmd+k for the command palette (#18731), and more robust Electron sidecar kill handling (#18742). Hona restores keyboard project switching in the open sidebar (#18682).

TUI gets syntax highlighting for Kotlin, HCL, Lua, and TOML (#18198) — probably the most user-visible feature today — plus the file tree now stays open at its minimum resized width (#18777), patch-tool counts remain visible with long filenames (#18678), project avatar popover flicker on switch is fixed (#18660), and a context-tab padding tweak (#18680).

Smaller but worth a glance: kitlangton fixes console account URL handling (#18809); user-agent headers are restored on requests (#18795); `jlongster` fixes a flaky file-watcher test (#18698); and the vouch manage action gains a `write` role (#18718, list updated in `fc68c24`). `fwang` lands a CI fix (`b556979`).

No merged PRs, new PRs, issues, or releases were reported in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`ad78b79`](https://github.com/anomalyco/opencode/commit/ad78b79b8aafa25e307c9597dc7a64ab3fcd1792) use renderer theme mode to switch dark/light mode (#18851) — _@kommander_
- [`9a006d8`](https://github.com/anomalyco/opencode/commit/9a006d87004835d1867207def09c9aa4cf7394db) chore: generate — _@opencode-agent[bot]_
- [`3a0bf2f`](https://github.com/anomalyco/opencode/commit/3a0bf2f39f784d1b1f54e9fbe6c4df32a2ab67a7) fix console account URL handling (#18809) — _@kitlangton_
- [`b556979`](https://github.com/anomalyco/opencode/commit/b556979634b038fae2c319811196b58af0faf36b) ci: fix — _@fwang_
- [`691644e`](https://github.com/anomalyco/opencode/commit/691644eeebbb73e622afaed963997a66fa3984a8) tweak: add back setting user agent in requests (#18795) — _@rekram1-node_
- [`4aebaaf`](https://github.com/anomalyco/opencode/commit/4aebaaf067c288917dbb04abce9b4515ef934f5f) feat(tui): add syntax highlighting for kotlin, hcl, lua, toml (#18198) — _@2KAbhishek_
- [`77b3b46`](https://github.com/anomalyco/opencode/commit/77b3b46788623317115ae920cf0072e54aa2643c) tui: keep file tree open at its minimum resized width (#18777) — _@iamdavidhill_
- [`36dfe16`](https://github.com/anomalyco/opencode/commit/36dfe1646b2bb4c329238f765c8100981014022b) fix(app): only navigate prompt history when input is empty (#18775) — _@Brendonovich_
- [`6926dc2`](https://github.com/anomalyco/opencode/commit/6926dc26d159080c506247ca414ec9a305f32c1b) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`eb74e4a`](https://github.com/anomalyco/opencode/commit/eb74e4a6d22775089b376d7a0b777c82a6c2fab7) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`85d8e14`](https://github.com/anomalyco/opencode/commit/85d8e143bfa6db3dd036c2dbbee62bd8c4194066) chore: generate — _@opencode-agent[bot]_
- [`8e1b53b`](https://github.com/anomalyco/opencode/commit/8e1b53b32c2f74c4983e0762cd90f4c2ecc7fda8) fix(app): handle session busy state better (#18758) — _@Brendonovich_
- [`0a7dfc0`](https://github.com/anomalyco/opencode/commit/0a7dfc03ee1dbc29d65605e8ca37ed9d137bd2ec) fix(app): lift up project hover state to layout (#18732) — _@Brendonovich_
- [`4c27e7f`](https://github.com/anomalyco/opencode/commit/4c27e7fc6499dee385e718d523c4f0612bd8a063) electron: more robust sidecar kill handling (#18742) — _@Brendonovich_
- [`0f5626d`](https://github.com/anomalyco/opencode/commit/0f5626d2e46f9f8abfe616a33a4fd4f4d989e396) fix(app): prefer cmd+k for command palette (#18731) — _@nexxeln_
- [`5ea9545`](https://github.com/anomalyco/opencode/commit/5ea95451dd485b15696877a9dd82c30a532b68e0) fix(app): prevent stale session hover preview on refocus (#18727) — _@nexxeln_
- [`9239d87`](https://github.com/anomalyco/opencode/commit/9239d877b9602a5a80e9e69e744abfe011f5f991) fix(app): batch multi-file prompt attachments (#18722) — _@nexxeln_
- [`fc68c24`](https://github.com/anomalyco/opencode/commit/fc68c244333a3829177fd0594aa3d5c018203487) Update VOUCHED list — _@github-actions[bot]_
- [`db9619d`](https://github.com/anomalyco/opencode/commit/db9619dad6a414882b2eab9e472729b9b4ed1a3b) Add 'write' role to vouch manage action (#18718) — _@Hona_
- [`84d9b38`](https://github.com/anomalyco/opencode/commit/84d9b388734166476055bd5c185a09df48d9d1fa) fix(core): fix file watcher test (#18698) — _@jlongster_
- [`8035c34`](https://github.com/anomalyco/opencode/commit/8035c3435b866926169307ec54914b359aa4fbfd) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`71e7603`](https://github.com/anomalyco/opencode/commit/71e7603d7171bfcfd2cbe297cf7b6754e67113fe) Upgrade opentui to 0.1.90 (#18551) — _@kommander_
- [`40e49c5`](https://github.com/anomalyco/opencode/commit/40e49c5b49ad017e3bfcd53f7bc1631d6cdd5c0d) tui: keep patch tool counts visible with long filenames (#18678) — _@iamdavidhill_
- [`afe9b97`](https://github.com/anomalyco/opencode/commit/afe9b9727415ea046dc08990f981e00e27ec4a43) fix(app): restore keyboard project switching in open sidebar (#18682) — _@Hona_
- [`3b35499`](https://github.com/anomalyco/opencode/commit/3b3549902deadf981195da261365af61389da0e1) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`e9a9c75`](https://github.com/anomalyco/opencode/commit/e9a9c75c1f772e4d7fe8aaececddde46a978df9d) tweak(ui): fix padding bottom on the context tab (#18680) — _@iamdavidhill_
- [`2b17182`](https://github.com/anomalyco/opencode/commit/2b171828b0365e8a3cc25cc89de30a740132b947) tui: prevent project avatar popover flicker when switching projects (#18660) — _@iamdavidhill_
- [`8dd8170`](https://github.com/anomalyco/opencode/commit/8dd817023a2e5798fe977f25d18478995380d347) chore: bump Bun to 1.3.11 (#18144) — _@Hona_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
