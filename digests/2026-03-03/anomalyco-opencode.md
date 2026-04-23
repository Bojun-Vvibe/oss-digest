# anomalyco/opencode — 2026-03-03

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-02T23:59:59.000Z → 2026-03-03T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v1.2.16 released; TUI polish and several bug fixes land

The day's headline is the **v1.2.16 release** (`e66d829`), cut mid-afternoon after a wave of TUI refinements and bug fixes. In parallel, `fwang` is doing heavy WIP work on a new "zen" surface (`1233ebc`, `6aa4928`, `b985ea3`, `c2091ac`, `1663c11`, plus `6deb27e` zen docs) — not yet user-facing but worth tracking.

**TUI / app UX** got the most attention from `adamdotdevin` and `thdxr`:
- Active tool execution now shows an arrow indicator instead of a generic "Running..." message, with a pending toolcall count (#15887, `c78e7e1`); the curved arrow was then swapped for a straight one for terminal compatibility (`c4ffd93`).
- Multiple "timeline jank" fixes and deferred diff rendering (`5e8742f`, `e4af1bb`, `fd4d309`, `9d427c1`, `502dbb6`), plus tightened header elements (`10c3258`).
- Project close navigation stabilized (#15817).
- opentui upgraded to v0.1.86 with the markdown renderable on by default (#14974) — likely the most impactful rendering change of the day.

**Bug fixes worth noting:**
- `run --attach` agent validation fixed (#11812).
- Auth login URLs now normalize trailing slashes (#15874).
- Session navigation commands disabled when there's no parent session (#15762).
- Gemini combiner schema no longer injects siblings (#15318).
- Cloudflare AI Gateway provider now forwards metadata options (#15619).
- Bus event part data is cloned to preserve token values (#15780).

**Reverts/chores:** the turbo typecheck dependency change from #14828 was reverted (#15902). Turkish translations updated (#15835), Nix flake bumped for bun 1.3.10 (#15648), and several auto-generated locale/codegen commits from the bot.

**Marketing/console:** a new `/go` landing page was added with nav entry and hero copy iterations (`3c8ce4a`, `b1c166e`, `d80334b`, `12f4315`), and Enterprise was reordered after Go (`c2f5abe`).

For reviewers: prioritize #14974 (opentui/markdown default), the v1.2.16 release notes, and #15780 if you depend on Bus event payloads.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`109ea17`](https://github.com/anomalyco/opencode/commit/109ea1709bf5036fb2bc6edc847758bede5467a1) fix: `run --attach` agent validation (#11812) — _@alberti42_
- [`9a42927`](https://github.com/anomalyco/opencode/commit/9a4292726875e89f3614ba70f27d4cac1c153eed) revert: undo turbo typecheck dependency change from #14828 (#15902) — _@Copilot_
- [`e66d829`](https://github.com/anomalyco/opencode/commit/e66d829d1875f5a5fd8b0bfcab69cacb48b11b5d) release: v1.2.16 — _@opencode_
- [`c4ffd93`](https://github.com/anomalyco/opencode/commit/c4ffd93caa864854602f200c5d894fb83bd259ca) tui: replace curved arrow with straight arrow for better terminal compatibility — _@thdxr_
- [`c78e7e1`](https://github.com/anomalyco/opencode/commit/c78e7e1a286968369b6521f4d2a3d78d35659b7e) tui: show pending toolcall count instead of generic 'Running...' message — _@thdxr_
- [`e3a787a`](https://github.com/anomalyco/opencode/commit/e3a787a7a3c093935e7972ba606b3f0e3e7d2890) tui: use arrow indicator for active tool execution (#15887) — _@thdxr_
- [`12f4315`](https://github.com/anomalyco/opencode/commit/12f4315d9d411c8e3d6091876ba41c406d618f01) chore(console): trim /go model logos — _@iamdavidhill_
- [`d80334b`](https://github.com/anomalyco/opencode/commit/d80334b2bcea7a5e82cdc71a8fd1cadb54340edf) chore(console): update /go hero copy — _@iamdavidhill_
- [`c2f5abe`](https://github.com/anomalyco/opencode/commit/c2f5abe7595120843121995df9b6f20d46dbd2f2) chore(console): move Enterprise after Go — _@iamdavidhill_
- [`74ebb41`](https://github.com/anomalyco/opencode/commit/74ebb4147fd4385cc2d37b46799faddcddd8ba9c) fix(auth): normalize trailing slashes in auth login URLs (#15874) — _@elithrar_
- [`1663c11`](https://github.com/anomalyco/opencode/commit/1663c11f40d0c99395e3a10bfb3f250f4d6d2a9e) wip: zen — _@fwang_
- [`b1c166e`](https://github.com/anomalyco/opencode/commit/b1c166edf44faa3cdb2793f24d791e02125eaa50) chore(console): add Go to nav — _@iamdavidhill_
- [`3c8ce4a`](https://github.com/anomalyco/opencode/commit/3c8ce4ab90faf4d8ea62724a73322e6330701e5c) feat(console): add /go landing page — _@iamdavidhill_
- [`502dbb6`](https://github.com/anomalyco/opencode/commit/502dbb65fc82f79bbcbba02b6d7f958eca34f8a2) fix(app): defer diff rendering — _@adamdotdevin_
- [`9d427c1`](https://github.com/anomalyco/opencode/commit/9d427c1ef8b9b4111f2930b474e8aaa792a25a8d) fix(app): defer diff rendering — _@adamdotdevin_
- [`70c6fcf`](https://github.com/anomalyco/opencode/commit/70c6fcfbbfd8d87d46f1a6b2d5d32e522ad8ba54) chore: cleanup — _@adamdotdevin_
- [`6f90c3d`](https://github.com/anomalyco/opencode/commit/6f90c3d73a3ff3a7a7dccfba139f47e5c62bf892) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`3310c25`](https://github.com/anomalyco/opencode/commit/3310c25dd1f603c1f3afbe05924f18408fcf57e0) Upgrade opentui to v0.1.86 and activate markdown renderable by default (#14974) — _@kommander_
- [`b751bd0`](https://github.com/anomalyco/opencode/commit/b751bd0373b9b407ac5c6413fbb54c05644f97a3) docs(i18n): sync locale docs from english changes — _@opencode-agent[bot]_
- [`c2091ac`](https://github.com/anomalyco/opencode/commit/c2091acd8c245526e10f7f4c5819b6f6e9da8de2) wip: zen — _@fwang_
- [`fd4d309`](https://github.com/anomalyco/opencode/commit/fd4d3094bfddc65634dcd369b3680d157d665ed4) fix(app): timeline jank — _@adamdotdevin_
- [`10c3258`](https://github.com/anomalyco/opencode/commit/10c325810b626f1699f4d12de509b6375b7fe78a) fix(app): tighten up header elements — _@adamdotdevin_
- [`fa45422`](https://github.com/anomalyco/opencode/commit/fa45422bf9bfb79acfa5476e951af211d5f4283e) chore: cleanup — _@adamdotdevin_
- [`da82d40`](https://github.com/anomalyco/opencode/commit/da82d4035aeaf64fb945698a4cf17cd106988238) chore: tr glossary — _@adamdotdevin_
- [`70b6a05`](https://github.com/anomalyco/opencode/commit/70b6a052358dd109f17d5de86eb4ba187154b2af) chore: generate — _@opencode-agent[bot]_
- [`cbf0570`](https://github.com/anomalyco/opencode/commit/cbf0570489b30a366d5e93de5640034086f84281) fix: update Turkish translations (#15835) — _@06ergin06_
- [`356b5d4`](https://github.com/anomalyco/opencode/commit/356b5d46013fe374ed1a581f11d1939d222964ac) fix(app): stabilize project close navigation (#15817) — _@MrMushrooooom_
- [`7305fc0`](https://github.com/anomalyco/opencode/commit/7305fc044d3be663147c1461a353956659704a90) chore: cleanup — _@adamdotdevin_
- [`1e2da60`](https://github.com/anomalyco/opencode/commit/1e2da601623efc33759b7f65922cbe801fc85465) chore: fix test — _@adamdotdevin_
- [`e4af1bb`](https://github.com/anomalyco/opencode/commit/e4af1bb42284bc76adf54927f4b224224830f1b5) fix(app): timeline jank — _@adamdotdevin_
- [`5e8742f`](https://github.com/anomalyco/opencode/commit/5e8742f4312a8923f3da92172a7247470ef34516) fix(app): timeline jank — _@adamdotdevin_
- [`18850c4`](https://github.com/anomalyco/opencode/commit/18850c4f911aaeb73846220e1139c1d07113b306) fix(opencode): disable session navigation commands when no parent session (#15762) — _@jerome-benoit_
- [`48412f7`](https://github.com/anomalyco/opencode/commit/48412f75ace87519b6550eea3b0c83e483a55297) chore: nix flake update for bun 1.3.10 (#15648) — _@gigamonster256_
- [`6deb27e`](https://github.com/anomalyco/opencode/commit/6deb27e852871d450ae199dc732353fd92be5957) zen: docs — _@fwang_
- [`b985ea3`](https://github.com/anomalyco/opencode/commit/b985ea344b11ed6172ccdfe311d9d1d69f925c1c) wip: zen — _@fwang_
- [`1233ebc`](https://github.com/anomalyco/opencode/commit/1233ebcce1cd50dfe0d3ecf00b9b2a7163756f41) wip: zen — _@fwang_
- [`881ca86`](https://github.com/anomalyco/opencode/commit/881ca864325aa148feda91afc0ce2758fc8d8bd7) chore: generate — _@opencode-agent[bot]_
- [`6aa4928`](https://github.com/anomalyco/opencode/commit/6aa4928e9e9430f8d1e9b009fd4a64f400fe0da9) wip: zen — _@fwang_
- [`9f150b0`](https://github.com/anomalyco/opencode/commit/9f150b07764c44ab5265d7cc2a3fa4e5909094b2) chore: generate — _@opencode-agent[bot]_
- [`7e3e85b`](https://github.com/anomalyco/opencode/commit/7e3e85ba596b8fd837bc61410b4d224908486918) fix(opencode): avoid gemini combiner schema sibling injection (#15318) — _@nexxeln_
- [`e41b535`](https://github.com/anomalyco/opencode/commit/e41b53504f193de3e6799836e53c7400952a4d2c) chore: generate — _@opencode-agent[bot]_
- [`96d6fb7`](https://github.com/anomalyco/opencode/commit/96d6fb78da2b75806ffd94ec87c913c412db8896) fix(provider): forward metadata options to cloudflare-ai-gateway provider (#15619) — _@ryanskidmore_
- [`fd6f713`](https://github.com/anomalyco/opencode/commit/fd6f7133c556f1b4f2cc9769cc18ddae61ab8de7) fix(opencode): clone part data in Bus event to preserve token values (#15780) — _@ryanskidmore_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
