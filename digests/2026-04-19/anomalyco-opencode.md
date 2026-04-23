# anomalyco/opencode — 2026-04-19

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-18T23:59:59.000Z → 2026-04-19T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two patch releases shipped today: **v1.14.18** and **v1.14.17**, both bot-cut from a busy day on `dev`. The headline fix in v1.14.18 is the restoration of the **native ripgrep backend** (#22773), which had been degrading file search and listing reliability — worth reading if you've seen flaky `grep`/find behavior recently. v1.14.17 is a grab-bag of stability fixes: preserving executable bits before Docker builds (commit d183568), fewer unnecessary plugin reinstalls (f27eb8f), defaulting Anthropic Bedrock Opus 4.7 to `display: summarized`, content-based attachment type detection (so mislabeled images/PDFs still work), `OTEL_RESOURCE_ATTRIBUTES` support for telemetry, and a GitHub Copilot Anthropic fix.

The most interesting in-flight work is around **session compaction**: thdxr merged the `nxl/improve-compaction-strategy` branch (5ae74aa), flipped tool-call prune defaults (6eddf08), and fixed the related test to actually enable the prune config (b9640fc). If you depend on long sessions, expect behavior changes in how older tool calls get pruned by default — review before upgrading.

Desktop/Electron got several fixes worth noting if you use the GUI: JSON migration now runs before the sidecar spawns (#23396), the config directory bug from lazy `electron-store` loading is fixed (#23373), and there's an Electron bump with a taskbar icon fix (#23368). TUI users get **terminal font settings plus a built-in Nerd Font** (#23391) and stabilized theme persistence / KV writes (#23188).

Smaller items: beta release creation no longer passes a stale `--target` flag (#23403); CI now skips Docker builds during preview releases to save time (48acab4); zen mode is accessible to users with credits but no payment method on file (40834fd); and the `--dangerously-skip-permissions` CLI flag is finally documented (#23371, the sole community contribution called out in the release notes, from @ariane-emory).

No new issues, no open PRs, and no merged PRs surfaced in the window — activity was entirely commit- and release-driven on `dev`.

## Releases

- **[v1.14.18](https://github.com/anomalyco/opencode/releases/tag/v1.14.18)** — v1.14.18 _by @opencode-agent[bot] at 2026-04-19T09:36:58Z_
  > ## Core
  > - Restore the native ripgrep backend so file search and file listing work reliably again.
  > 
  > **Thank you to 1 community contributor:**
  > - @ariane-emory:
  >   - docs: document --dangerously-skip-permissions CLI flag (#23371)
- **[v1.14.17](https://github.com/anomalyco/opencode/releases/tag/v1.14.17)** — v1.14.17 _by @opencode-agent[bot] at 2026-04-19T03:02:16Z_
  > ## Core
  > - Preserve executable permissions before Docker builds when artifacts lose their exec bits.
  > - Fix plugins reinstalling more often than needed.
  > - Use `display: summarized` by default for Anthropic Bedrock Opus 4.7 requests.
  > - Detect attachment types from file contents so images and PDFs still work with incorrect or missing extensions.
  > - Support `OTEL_RESOURCE_ATTRIBUTES` for custom telemetry resource tags.
  > - Fix package installs when `node_modules` is missing.
  > - Fix GitHub Copilot Anthrop…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`b9640fc`](https://github.com/anomalyco/opencode/commit/b9640fc7e472626e9b6806df800a34d48471ebb4) core: fix session compaction test to properly enable prune config option — _@thdxr_
- [`29f05cb`](https://github.com/anomalyco/opencode/commit/29f05cb1ee84b480f8ac862bf79e2864a97ee0f2) chore: generate — _@opencode-agent[bot]_
- [`48acab4`](https://github.com/anomalyco/opencode/commit/48acab48ad08e1d41bb3fe746855fba8d6b9a428) ci: skip Docker builds during preview releases to save time — _@thdxr_
- [`5ae74aa`](https://github.com/anomalyco/opencode/commit/5ae74aa881903308ade2018492769f80dd7a1e13) Merge branch 'nxl/improve-compaction-strategy' into dev — _@thdxr_
- [`6eddf08`](https://github.com/anomalyco/opencode/commit/6eddf0824478461908c166318509eea0af363f09) flip toolcall prune defaults — _@thdxr_
- [`9c7e52b`](https://github.com/anomalyco/opencode/commit/9c7e52b8a17b154d6dc0f1004a70ff8214668c21) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`a824064`](https://github.com/anomalyco/opencode/commit/a824064c4c7c2b43e4b59da0f578932faca7b26a) stabilize TUI theme persistence and KV writes (#23188) — _@kommander_
- [`33b2795`](https://github.com/anomalyco/opencode/commit/33b2795cc84c79e91e15549609713567eb08348a) chore: generate — _@opencode-agent[bot]_
- [`10bd044`](https://github.com/anomalyco/opencode/commit/10bd044c55600408f2bca606bb6ce37c88b459f9) feat: add terminal font settings and built-in Nerd Font (#23391) — _@Hona_
- [`c09bcfe`](https://github.com/anomalyco/opencode/commit/c09bcfe5314ff4d78d169a9a373450d19df9b407) sync release versions for v1.14.18 — _@opencode_
- [`83227be`](https://github.com/anomalyco/opencode/commit/83227be0ca3653063adbea694f640a7f2371fa6d) fix(version): remove --target flag from beta release creation (#23403) — _@Brendonovich_
- [`8ee47a0`](https://github.com/anomalyco/opencode/commit/8ee47a0533e61dc49c896aa2ce295e2e4e949168) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`a546e88`](https://github.com/anomalyco/opencode/commit/a546e88f37d1816adadf1e833a5fb4f39b7d56df) fix(desktop-electron): run JSON migration before spawning sidecar (#23396) — _@Brendonovich_
- [`e998c9e`](https://github.com/anomalyco/opencode/commit/e998c9e9cb9973919468ca49f4962d1b37d3bfc3) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`889087c`](https://github.com/anomalyco/opencode/commit/889087c9662a41438867f2b2b7a974f58dfda245) fix(ripgrep): restore native rg backend (#22773) — _@nexxeln_
- [`7f3b64c`](https://github.com/anomalyco/opencode/commit/7f3b64c7c49147143eb7c544a019c103d70b890f) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`e60a6e3`](https://github.com/anomalyco/opencode/commit/e60a6e3a829f3598aba3707efc843a5364f0dc69) fix: change Free download button text to Download (#23388) — _@thdxr_
- [`135c8f0`](https://github.com/anomalyco/opencode/commit/135c8f0e99814fb2184b9da657914126d4a81115) chore: generate — _@opencode-agent[bot]_
- [`f02504b`](https://github.com/anomalyco/opencode/commit/f02504bb803dbd9de4103c4ea509836a19801e61) chore: generate — _@opencode-agent[bot]_
- [`40834fd`](https://github.com/anomalyco/opencode/commit/40834fdf2feda0ed3eded2a5e4076b7c77204989) core: allow users with credits but no payment method to access zen mode — _@thdxr_
- [`fc05889`](https://github.com/anomalyco/opencode/commit/fc0588954b01ab421bb4833173fa48c422cea4d5) fix (#23385) — _@rekram1-node_
- [`75960e3`](https://github.com/anomalyco/opencode/commit/75960e3bf3db67c4eb763fed2e282ed2ca0e62b1) chore: generate — _@opencode-agent[bot]_
- [`f14ac47`](https://github.com/anomalyco/opencode/commit/f14ac472a3ba96c1cf400223c5957d86ed7a4a2d) docs: document --dangerously-skip-permissions CLI flag (#23371) — _@ariane-emory_
- [`9ed9371`](https://github.com/anomalyco/opencode/commit/9ed93715efde1db921b952448a4bc64f7a48ee1e) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`b34ca44`](https://github.com/anomalyco/opencode/commit/b34ca44abed7eb214cdaff26467ff786d17da523) fix incorrect config directory by lazily loading electron-store (#23373) — _@Hona_
- [`40ba8f3`](https://github.com/anomalyco/opencode/commit/40ba8f357024351c7437d8227e18906a2aadf824) sync release versions for v1.14.17 — _@opencode_
- [`e543acf`](https://github.com/anomalyco/opencode/commit/e543acf9230347f5642dbabffde35a493451748a) chore: bump electron and fix taskbar icon (#23368) — _@Hona_
- [`d183568`](https://github.com/anomalyco/opencode/commit/d1835686440d60686b7b9f66e160d47e747266da) core: ensure executable permissions are set before Docker builds — _@thdxr_
- [`f27eb8f`](https://github.com/anomalyco/opencode/commit/f27eb8f09ef0d9071ebb4d1b11625b27f49a8939) fix plugins reinstalling too often — _@thdxr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
