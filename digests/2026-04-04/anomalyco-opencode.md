# anomalyco/opencode — 2026-04-04

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-03T23:59:59.000Z → 2026-04-04T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two patch releases shipped today, with **v1.3.14** being the more substantive of the pair. It restores git-backed review modes (uncommitted and branch diffs), fixes revert chains so restoring an earlier message also restores the correct snapshot state, fixes sessions getting stuck after tool calls with OpenAI-compatible providers, adds macOS managed preferences for MDM-enforced config, keeps compaction summaries in the conversation's language, and adds Venice AI as a new provider. **v1.3.15** is a narrower follow-up that prevents npm installs from failing when Arborist hits the compiled binary's `node-gyp` path (`#21040`), plus a docs cleanup removing a redundant Kimi skill section (`#20393`).

The most consequential bug fix on the commit stream is `#21047` from rekram1-node, which ensures reasoning tokens aren't double-counted when calculating usage — a billing/accounting correctness issue worth reading. It's accompanied by a regression test in `#21053`. If you've been seeing inflated token counts on reasoning models, this is the fix.

On the TUI side, kitlangton landed two related changes: `#20956` surfaces console-managed providers in the TUI, and `#21054` suppresses org-switch affordances when they aren't useful — together they tighten the multi-provider/multi-org UX. The npm install fix in `#21040` (Bun pre-resolves the node-gyp path at build time) is worth a look if you maintain downstream packaging.

Internals: kitlangton continued the Effect refactor by moving the read tool onto `defineEffect` (`#21016`) and stopped custom provider loaders from using facades (`#20776`) — both are structural cleanups with no user-visible behavior change but signal where the provider/tool layer is heading. A perf commit batches snapshot `diffFull` blob reads (`#20752`), which should reduce I/O on large session restores. CI got a small fix to pre-create JUnit output dirs before tests (`#20959`).

No new issues, no new or merged community PRs outside the release notes, and the bot generated two `chore: generate` commits alongside the releases. Net: read the v1.3.14 notes and `#21047` first; everything else is incremental.

## Releases

- **[v1.3.15](https://github.com/anomalyco/opencode/releases/tag/v1.3.15)** — v1.3.15 _by @opencode-agent[bot] at 2026-04-04T20:54:43Z_
  > ## Core
  > - Prevent npm installs from failing when Arborist hits the compiled binary's `node-gyp` path
  > 
  > **Thank you to 1 community contributor:**
  > - @Yuxin-Dong:
  >   - refactor: remove redundant Kimi skill section (#20393)
- **[v1.3.14](https://github.com/anomalyco/opencode/releases/tag/v1.3.14)** — v1.3.14 _by @opencode-agent[bot] at 2026-04-04T18:32:40Z_
  > ## Core
  > - Restored git-backed review modes, including uncommitted and branch diffs.
  > - Fixed revert chains so restoring an earlier message also restores the right snapshot state. (@natewill)
  > - Added macOS managed preferences for MDM-enforced config. (@lennyvaknine43)
  > - Fixed sessions getting stuck after tool calls with OpenAI-compatible providers. (@valenvivaldi)
  > - Kept compaction summaries in the conversation's language. (@aaron-he-zhu)
  > - Added Venice AI as a provider. (@dpuyosa)
  > - Respected mod…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`8b8d4fa`](https://github.com/anomalyco/opencode/commit/8b8d4fa066a1de331f6e478ae4055636a9271707) test: add regression test for double counting bug (#21053) — _@rekram1-node_
- [`6253ef0`](https://github.com/anomalyco/opencode/commit/6253ef0c27bd9f3f6bcf4ab3e57637b689bbc217) chore: generate — _@opencode-agent[bot]_
- [`c6ebc7f`](https://github.com/anomalyco/opencode/commit/c6ebc7ff7c8e2dcbc8d09406e764d31f80d40943) fix(tui): only show org switch affordances when useful (#21054) — _@kitlangton_
- [`9856636`](https://github.com/anomalyco/opencode/commit/985663620f3068d07ebd4dda44cb365cc3db4dd7) chore: generate — _@opencode-agent[bot]_
- [`c796b9a`](https://github.com/anomalyco/opencode/commit/c796b9a19e8698c07d2e03a12a41fa81126b1be9) refactor(effect): move read tool onto defineEffect (#21016) — _@kitlangton_
- [`6ea108a`](https://github.com/anomalyco/opencode/commit/6ea108a03b36dcb532f3a0c9fddf38b098fb2bad) feat(tui): show console-managed providers (#20956) — _@kitlangton_
- [`280eb16`](https://github.com/anomalyco/opencode/commit/280eb16e7704791b031481bc5415fbecfdec0319) fix: ensure reasoning tokens arent double counted when calculating usage (#21047) — _@rekram1-node_
- [`930e94a`](https://github.com/anomalyco/opencode/commit/930e94a3ea098b9d56fcb6d08b545256d2546a82) release: v1.3.15 — _@opencode_
- [`629e866`](https://github.com/anomalyco/opencode/commit/629e866ff06f7470f403b085f9da54d07899a84a) fix(npm): Arborist reify fails on compiled binary — Bun pre-resolves node-gyp path at build time (#21040) — _@thdxr_
- [`c08fa56`](https://github.com/anomalyco/opencode/commit/c08fa5675fd57daad60a6cf9bbb6f593e2c66f7a) refactor: remove redundant Kimi skill section (#20393) — _@Yuxin-Dong_
- [`cc50b77`](https://github.com/anomalyco/opencode/commit/cc50b778eb1dfb909b667af0d08d26ba88e8e529) release: v1.3.14 — _@opencode_
- [`00fa68b`](https://github.com/anomalyco/opencode/commit/00fa68b3a70facfe942523d35e2ecbf8456f0d49) fix(ci): create JUnit output dirs before tests (#20959) — _@kitlangton_
- [`288eb04`](https://github.com/anomalyco/opencode/commit/288eb044cb6f222d06d8e75dc51c9d59c40f86ba) perf(opencode): batch snapshot diffFull blob reads (#20752) — _@kitlangton_
- [`59ca454`](https://github.com/anomalyco/opencode/commit/59ca4543d80148122127666c22a47e0b24180549) refactor(provider): stop custom loaders using facades (#20776) — _@kitlangton_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
