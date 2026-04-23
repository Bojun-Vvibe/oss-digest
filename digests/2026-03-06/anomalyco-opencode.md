# anomalyco/opencode — 2026-03-06

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-05T23:59:59.000Z → 2026-03-06T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a sustained **de-Bun-ification of the core runtime**: thdxr landed a long series of refactors replacing `Bun.sleep` (#15013), `Bun.write`, `Bun.stdin.text`, `Bun.hash`, `Bun.connect`, `Bun.stderr`/`Bun.color`, and `Bun.which` (#15012) with Node.js equivalents (`node:stream/consumers`, `net.createConnection`, npm `which`, internal `Filesystem`/`Hash` utilities). A related fallout fix swaps the unsupported `xxhash3-xxh64` for sha1 (6733a5a), and a stdin regression from the migration was patched in #16300 ("restore Bun stdin reads for prompt input"). Two releases shipped during the churn: **v1.2.19** (cb41124) and **v1.2.20** (6c7d968) — worth diffing if you ship downstream.

The other notable operational fix is from Hona: `fix(git): stop leaking fsmonitor daemons e.g. 60GB+ of committed memory after running tests` (#16249). If you run the test suite locally or in CI, read this one.

On the app/UI side, iamdavidhill landed a sidebar reveal animation with hover peek overlay and weaker dividers (#16374) and improved review/filetree empty states (#16221). There was visible thrash around stale-state bugs: adamdotdevin's `stale keyed show errors` fix (a71b11c) and an earlier `stale read error` were both reverted (2094e8b, eeeb21f), while neriousy's underlying `fix(app): stale show` (#16236) did land — expect more follow-ups here. Composition-key handling in `LineCommentEditor` was also fixed (#16361), and Safari autocorrect now toggles correctly between normal/shell modes (#15563).

New capabilities: a project git-init API (#16383), share-page load speedups (#16165), an auto-accept keybind that works regardless of permission config (#16259), `gpt-5.4` added to the codex allowed-models list (#16274), and a Vietnamese README plus locale-matcher fix for English (#16322, #16280). Smaller but useful: jlongster now logs stack traces on schema validation failures (#16401), and thdxr pushed a drizzle/channel-db storage update (5e699c9) plus a migration fix (7417c86).

No issues, PRs, or releases came through the API window — all activity is commits to `dev`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`b83282b`](https://github.com/anomalyco/opencode/commit/b83282b9405fe3a89d483453c343ee7e4d645379) docs: update legal policies for 2026 terms refresh — _@jayair_
- [`c4fd677`](https://github.com/anomalyco/opencode/commit/c4fd677785392aa27d0bd3e01cc185d24d7bc7fd) tests(app): e2e tests part 67 (#16406) — _@neriousy_
- [`770cb66`](https://github.com/anomalyco/opencode/commit/770cb66628244373305f40915409f6cf3522b43e) chore: generate — _@opencode-agent[bot]_
- [`b0bc3d8`](https://github.com/anomalyco/opencode/commit/b0bc3d87f59fb28340fc4c047131919031890898) feat(app): sidebar reveal animation, hover peek overlay, and weaker dividers (#16374) — _@iamdavidhill_
- [`a263433`](https://github.com/anomalyco/opencode/commit/a2634337b84643c08df5337243e8f82399c85615) fix(core): log stack trace when schema validation fails (#16401) — _@jlongster_
- [`7417c86`](https://github.com/anomalyco/opencode/commit/7417c869fcecb3f0e6989f4f349df07a6b8ede8d) fix issue with migration — _@thdxr_
- [`091cf25`](https://github.com/anomalyco/opencode/commit/091cf25de8d95f0eae460f92b9f9adebc3b0e634) fix(app): better review/filetree empty states (#16221) — _@iamdavidhill_
- [`7a071ef`](https://github.com/anomalyco/opencode/commit/7a071eff5cfc94cc45095d0cee96acbb97317d8c) chore: fix test — _@adamdotdevin_
- [`7da24eb`](https://github.com/anomalyco/opencode/commit/7da24ebf5d87f971f70f5d387582d5d5374777ac) chore: generate — _@opencode-agent[bot]_
- [`d6e0f47`](https://github.com/anomalyco/opencode/commit/d6e0f47361d2a5c38c012618895cbdc7a1af8960) feat: add project git init api (#16383) — _@nexxeln_
- [`95385eb`](https://github.com/anomalyco/opencode/commit/95385eb65249aa6def266968e75061abd0fb0f46) fix(app): enable Safari autocorrect in normal mode, disable in shell mode (#15563) — _@alexandrereyes_
- [`a71b11c`](https://github.com/anomalyco/opencode/commit/a71b11caca88243a9e4399317bcc5234d432976c) fix(app): stale keyed show errors — _@adamdotdevin_
- [`e956899`](https://github.com/anomalyco/opencode/commit/e9568999c385242756c2ea3530560481cf97999d) fix(ui): prevent unwanted key events during composition in LineCommentEditor (#16361) — _@hoshiumiarata_
- [`5e699c9`](https://github.com/anomalyco/opencode/commit/5e699c9426223409bd237174446d3abb88edb8cb) chore(storage): update drizzle and channel db handling — _@thdxr_
- [`e0ca52e`](https://github.com/anomalyco/opencode/commit/e0ca52ed1f77e2ffeaa5a455949c8d7c913b9175) fix(app): part type gate — _@adamdotdevin_
- [`1d9dcd2`](https://github.com/anomalyco/opencode/commit/1d9dcd2a27736b83d20abc0111141fdd6bffde7e) share: speed up share loads (#16165) — _@nexxeln_
- [`eeeb21f`](https://github.com/anomalyco/opencode/commit/eeeb21ff8638eddd960afbd8f522c87d850d6183) Revert "fix(app): stale read error" — _@adamdotdevin_
- [`2094e8b`](https://github.com/anomalyco/opencode/commit/2094e8b255fb5406c7c2af5ce0ae8673c43b5c0b) Revert "fix(app): stale keyed show errors" — _@adamdotdevin_
- [`e1cf761`](https://github.com/anomalyco/opencode/commit/e1cf761d298dd704814312657a25b4130288644d) chore: generate — _@opencode-agent[bot]_
- [`f64bb91`](https://github.com/anomalyco/opencode/commit/f64bb91257c6381e6c2fbd099ca36ef726c46704) fix(app): add english to locale matchers (#16280) — _@KirillTregubov_
- [`eb9eb5e`](https://github.com/anomalyco/opencode/commit/eb9eb5e3349a76489f4779aefd78cffd3a42d262) feat: Add Vietnamese README and update all language navigation links … (#16322) — _@imdzx_
- [`d4d1292`](https://github.com/anomalyco/opencode/commit/d4d1292a0e7c80b3f24d76e7d3bc71aa235967f0) chore: generate — _@opencode-agent[bot]_
- [`b7605ad`](https://github.com/anomalyco/opencode/commit/b7605add5803becb0a1abd9fb5110cb636cc6d01) fix(app): enable auto-accept keybind regardless of permission config (#16259) — _@luisfelipesena_
- [`6c7d968`](https://github.com/anomalyco/opencode/commit/6c7d968c4423a0cd6c85099c9377a6066313fa0a) release: v1.2.20 — _@opencode_
- [`326c701`](https://github.com/anomalyco/opencode/commit/326c70184da31bfb19fec936ec07a27bea461bbe) fix: restore Bun stdin reads for prompt input (#16300) — _@thdxr_
- [`aec6ca7`](https://github.com/anomalyco/opencode/commit/aec6ca71fa544ca8b5e4997f5475abc72e6e924d) fix(git): stop leaking fsmonitor daemons e.g. 60GB+ of commited memory after running tests (#16249) — _@Hona_
- [`c04da45`](https://github.com/anomalyco/opencode/commit/c04da45be51994496f44e4fe238fbffbec89cb37) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`74effa8`](https://github.com/anomalyco/opencode/commit/74effa8eec01b3cb816178a37921333420fe2d82) refactor(opencode): replace Bun.which with npm which (#15012) — _@thdxr_
- [`cb41124`](https://github.com/anomalyco/opencode/commit/cb411248bf0898b351ae282a7c0b8b9b6d6fa340) release: v1.2.19 — _@opencode_
- [`46d7d2f`](https://github.com/anomalyco/opencode/commit/46d7d2fdc06bec2aa08ce17b03fb73a973495764) feat: add "gpt-5.4" to codex allowed models list (#16274) — _@msadiks_
- [`d68afca`](https://github.com/anomalyco/opencode/commit/d68afcaa55e82e0d9d4d093db7988abee7c27752) refactor: replace Bun.stderr and Bun.color with Node.js equivalents — _@thdxr_
- [`bf35a86`](https://github.com/anomalyco/opencode/commit/bf35a865ba78dcae56297270cf0afecf1476e786) refactor: replace Bun.connect with net.createConnection — _@thdxr_
- [`6733a5a`](https://github.com/anomalyco/opencode/commit/6733a5a822f9927081f8bccfc41de3842b29858d) fix: use sha1 for hash instead of unsupported xxhash3-xxh64 — _@thdxr_
- [`7e28098`](https://github.com/anomalyco/opencode/commit/7e280983654f7943086263b2fe352c05d24fdb4e) refactor: use node:stream/consumers for stdin reading — _@thdxr_
- [`ae5c9ed`](https://github.com/anomalyco/opencode/commit/ae5c9ed3dd7a393e540643f3ecc79b9dea793ecc) refactor: replace Bun.stdin.text with Node.js stream reading — _@thdxr_
- [`a9bf1c0`](https://github.com/anomalyco/opencode/commit/a9bf1c050544bbf8e7975e15f1cdcf1dbde23ce0) refactor: replace Bun.hash with Hash.fast using xxhash3-xxh64 — _@thdxr_
- [`dad2488`](https://github.com/anomalyco/opencode/commit/dad248832d31521d978a4ed24d9ade5e19abc160) refactor: replace Bun.write with Filesystem.write in config files — _@thdxr_
- [`6e89d3e`](https://github.com/anomalyco/opencode/commit/6e89d3e597c31fc160306763a37ab368ca2232d1) refactor: replace Bun.write/file with Filesystem utilities in snapshot — _@thdxr_
- [`3ebba02`](https://github.com/anomalyco/opencode/commit/3ebba02d04d17efaa8339d94950d1467ac5c956f) refactor: replace Bun.sleep with node timers (#15013) — _@thdxr_
- [`cf425d1`](https://github.com/anomalyco/opencode/commit/cf425d114ec66b6699240a1c92897d47c7ef1c4f) fix(app): stale show (#16236) — _@neriousy_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
