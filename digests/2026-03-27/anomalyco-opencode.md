# anomalyco/opencode — 2026-03-27

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-26T23:59:59.000Z → 2026-03-27T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is the landing of **AI SDK v6 support** (#18433) by rekram1-node — a major dependency bump that downstream plugin/integration authors will want to read first. Alongside it, rekram1-node also expanded overflow error pattern matching (#19446) to catch more provider-side context-limit failures.

The day's dominant theme is a sweeping **Effect-ification refactor** of the core services, almost entirely driven by kitlangton: the Session service (#19449), Plugin service internals (#19365), Skill service internals (#19364), tool-registry (#19363) now yields Config/Plugin services and uses `Effect.forEach`, and a broader pattern shift to "yield services instead of promise facades" (#19325). Complementing this, two refactors swap ad-hoc process spawning for a unified `ChildProcessSpawner`: in `format` (#19457) and in `vcs` replacing async `git()` (#19361). Anyone working on core service wiring should skim these together — they change how dependencies are threaded throughout the codebase.

On the **workspace/core architecture** front, jlongster split out the instance concept and routed it through workspaces (#19335), then moved more responsibility into workspace routing (#19455). This is foundational plumbing for multi-workspace behavior.

**Plugins**: kommander shipped TUI plugins (#19347), single-target plugin entrypoints (#19467), fixed flaky plugin tests by removing `mock.module` (incompatible with bun) (#19445), and disabled theme override in dev (#19456).

**UI/UX fixes** are clustered around streaming and layout. nexxeln improved streamed markdown continuity (#19404) and readability of partial markdown mid-stream (#19403), and fixed queued followups persisting across project switches (#19421). kitlangton defaulted the file tree to closed with a minimum width (#19426) and matched the dev dock icon inset on macOS (#19429). BYK fixed mobile keyboard viewport resize (#15841), and adamdotdevin added more spacing controls (no PR#).

Minor housekeeping: ignore generated models snapshot files (#19362). No issues, PRs, or releases were recorded in the window — activity is entirely commit-based on `dev`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`f3997d8`](https://github.com/anomalyco/opencode/commit/f3997d8082413c8b3a506d24fbfb3c58a0c3dedb) Single target plugin entrypoints (#19467) — _@kommander_
- [`02b19bc`](https://github.com/anomalyco/opencode/commit/02b19bc3d733ee2e4220971fa421d4a6f05a9468) chore: generate — _@opencode-agent[bot]_
- [`5cd54ec`](https://github.com/anomalyco/opencode/commit/5cd54ec345f3dd501131f0c255d86ddfc8a90e07) refactor(format): use ChildProcessSpawner instead of Process.spawn (#19457) — _@kitlangton_
- [`c890990`](https://github.com/anomalyco/opencode/commit/c8909908f50afc3622d354cd8fd7a83dc3445706) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`4b9660b`](https://github.com/anomalyco/opencode/commit/4b9660b211aa57477b6baa1848e582d3279f4db7) refactor(core): move more responsibility to workspace routing (#19455) — _@jlongster_
- [`e5f0e81`](https://github.com/anomalyco/opencode/commit/e5f0e813b6e2f9305fc27d432689f95a56beea51) refactor(session): effectify Session service (#19449) — _@kitlangton_
- [`c33d999`](https://github.com/anomalyco/opencode/commit/c33d9996f0e630d15b6e40b9a1feb578e991561a) feat: AI SDK v6 support (#18433) — _@rekram1-node_
- [`7a7643c`](https://github.com/anomalyco/opencode/commit/7a7643c86a69edbd79f99b0c4f613463627f2428) no theme override in dev (#19456) — _@kommander_
- [`6f5b70e`](https://github.com/anomalyco/opencode/commit/6f5b70e681b3a257c01fae1df4dbfe555cd216ef) tweak: add additional overflow error patterns (#19446) — _@rekram1-node_
- [`ff13524`](https://github.com/anomalyco/opencode/commit/ff13524a531ebd196224551199c3cb0833c44c3c) fix flaky plugin tests (no mock.module for bun) (#19445) — _@kommander_
- [`e973bbf`](https://github.com/anomalyco/opencode/commit/e973bbf54a519566bfdccce3474178b26b163a6d) fix(app): default file tree to closed with minimum width (#19426) — _@kitlangton_
- [`d36b38e`](https://github.com/anomalyco/opencode/commit/d36b38e4a6f5b778644669ba281fb5a35cf2f028) fix(desktop-electron): match dev dock icon inset on macOS (#19429) — _@kitlangton_
- [`bdd7829`](https://github.com/anomalyco/opencode/commit/bdd7829c689830668ae9a6026f3187196774797c) fix(app): resize layout viewport when mobile keyboard appears (#15841) — _@BYK_
- [`a93374c`](https://github.com/anomalyco/opencode/commit/a93374c48f724ebbc99886ac5d607a3990090b75) fix(ui): make streamed markdown feel more continuous (#19404) — _@nexxeln_
- [`af2ccc9`](https://github.com/anomalyco/opencode/commit/af2ccc94ebc632d0014f54ea5c5e6c2e26b5dda5) chore(app): more spacing controls — _@adamdotdevin_
- [`a76be69`](https://github.com/anomalyco/opencode/commit/a76be695c7d2e60683fe79c8a6dc2c402ab13349) refactor(core): split out instance and route through workspaces (#19335) — _@jlongster_
- [`e528ed5`](https://github.com/anomalyco/opencode/commit/e528ed5d86dc386044552c9306af0e35baea1b95) effectify Plugin service internals (#19365) — _@kitlangton_
- [`bb8d2cd`](https://github.com/anomalyco/opencode/commit/bb8d2cdd108618c1057a8890ac1e655198db866e) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`decb5e6`](https://github.com/anomalyco/opencode/commit/decb5e68eea8ac3090e870deaba243cf30d203fc) effectify Skill service internals (#19364) — _@kitlangton_
- [`2102333`](https://github.com/anomalyco/opencode/commit/21023337fa8011568b2570a3bd49fffed842ce86) chore: generate — _@opencode-agent[bot]_
- [`6274b06`](https://github.com/anomalyco/opencode/commit/6274b0677c1c65815c525b9b199f1ce5c6fb97fc) tui plugins (#19347) — _@kommander_
- [`d8ad833`](https://github.com/anomalyco/opencode/commit/d8ad8338f5311ac6692ebc362d28389e028f6aad) chore: generate — _@opencode-agent[bot]_
- [`7b44918`](https://github.com/anomalyco/opencode/commit/7b449181498252f64eff7410c39aeebe7d2f1a88) refactor(tool-registry): yield Config/Plugin services, use Effect.forEach (#19363) — _@kitlangton_
- [`d2bfa92`](https://github.com/anomalyco/opencode/commit/d2bfa92e7438eb7ac7c4e2d72fca708f27c52ba3) fix(app): persist queued followups across project switches (#19421) — _@nexxeln_
- [`3fb60d0`](https://github.com/anomalyco/opencode/commit/3fb60d05e555dad020d3354602affe166ef0cc22) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`d341499`](https://github.com/anomalyco/opencode/commit/d3414996845bb05e27059902c2bcca21e8ef6c36) fix(ui): keep partial markdown readable while responses stream (#19403) — _@nexxeln_
- [`7715252`](https://github.com/anomalyco/opencode/commit/771525270a0c4d1394b3117e5842847a51caf72d) fix(opencode): ignore generated models snapshot files (#19362) — _@kitlangton_
- [`e96eead`](https://github.com/anomalyco/opencode/commit/e96eead32eb28c8b78be9def46cb1688d49468ae) refactor(vcs): replace async git() with ChildProcessSpawner (#19361) — _@kitlangton_
- [`b242a8d`](https://github.com/anomalyco/opencode/commit/b242a8d8e42839496c7213d020e8cba19a76e111) chore: generate — _@opencode-agent[bot]_
- [`9c6f1ed`](https://github.com/anomalyco/opencode/commit/9c6f1edfd7cae5c7cefa8af14e124c0547186c6b) refactor(effect): yield services instead of promise facades (#19325) — _@kitlangton_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
