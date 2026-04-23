# anomalyco/opencode — 2026-04-14

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-13T23:59:59.000Z → 2026-04-14T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a major architectural push: a new `packages/server` was bootstrapped as part of a documented extraction plan ([#22492](https://github.com/anomalyco/opencode/commit/6706358)), alongside a sweeping `kitlangton`-led refactor that removes async facade exports across `session` ([#22471](https://github.com/anomalyco/opencode/commit/6838461)), `project` ([#22387](https://github.com/anomalyco/opencode/commit/020c47a)), `share` ([#22386](https://github.com/anomalyco/opencode/commit/ad26579)), `snapshot` ([#22370](https://github.com/anomalyco/opencode/commit/f40209b)), `plugin` ([#22367](https://github.com/anomalyco/opencode/commit/a2cb490)), `worktree` ([#22369](https://github.com/anomalyco/opencode/commit/36745ca)) and session compaction ([#22366](https://github.com/anomalyco/opencode/commit/7a05ba4)). Instance state was also reorganized — the TUI config cache moved into `InstanceState` ([#22378](https://github.com/anomalyco/opencode/commit/0a8b629)), a state helper was removed ([#22381](https://github.com/anomalyco/opencode/commit/f954854)), and instance boot now reuses the runtime ([#22470](https://github.com/anomalyco/opencode/commit/ff60859)). Anyone building against opencode internals should review these.

Notable infrastructure: ripgrep migrated to an embedded WASM backend ([#21703](https://github.com/anomalyco/opencode/commit/d684086)), with the external nix ripgrep dropped ([#22482](https://github.com/anomalyco/opencode/commit/bbd5faf)) and a follow-up fix for resolving the ripgrep worker path in builds ([#22436](https://github.com/anomalyco/opencode/commit/5b60e51)). The single-file executable was also shrunk ([#22362](https://github.com/anomalyco/opencode/commit/9b2648d)) and opentui bumped to 0.1.99 ([#22283](https://github.com/anomalyco/opencode/commit/7f9bf91)).

User-visible features: `opencode export` gains a `--sanitize` flag to strip PII/confidential info ([#22489](https://github.com/anomalyco/opencode/commit/3695057)), and a new `experimental.compaction.autocontinue` hook lets you disable auto-continuation after compaction ([#22361](https://github.com/anomalyco/opencode/commit/34e2429)). An experimental "question" HttpApi slice landed ([#22357](https://github.com/anomalyco/opencode/commit/f2525a6)), with a follow-up fix restoring the flat reply SDK shape ([#22487](https://github.com/anomalyco/opencode/commit/3cf7c75)).

Notable fixes worth reviewing if affected: GitHub Copilot compaction request validity ([#22371](https://github.com/anomalyco/opencode/commit/f9d99f0)), MCP immediate OAuth connection persistence ([#22376](https://github.com/anomalyco/opencode/commit/4626458)), ACP duplicate user messages ([#22468](https://github.com/anomalyco/opencode/commit/b1312a3)) and stray `user_message_chunk` emissions ([#21851](https://github.com/anomalyco/opencode/commit/a8f9f6b)), `reasoningSummary` guarding for `@ai-sdk/openai-compatible` providers ([#22352](https://github.com/anomalyco/opencode/commit/c2403d0)), and plugin auth no longer prompting for an API key when no `authorize` method exists ([#22475](https://github.com/anomalyco/opencode/commit/9a5178e)). Zen also picked up Alibaba cache-write support ([60b8041](https://github.com/anomalyco/opencode/commit/60b8041)).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`50c1d0a`](https://github.com/anomalyco/opencode/commit/50c1d0a43ba8d43157b6bbb50feeb04784f2e4cc) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`60b8041`](https://github.com/anomalyco/opencode/commit/60b8041ebbbed0081dc69f3be6abb0d1d2d119dc) zen: support alibaba cache write — _@fwang_
- [`3b2a2c4`](https://github.com/anomalyco/opencode/commit/3b2a2c461debb1afebe65378f978389d06152e1e) sync zen — _@fwang_
- [`6706358`](https://github.com/anomalyco/opencode/commit/6706358a6e93daffcde534d4c23fb934a6be2fad) feat(core): bootstrap packages/server and document extraction plan (#22492) — _@nexxeln_
- [`f640975`](https://github.com/anomalyco/opencode/commit/f6409759e569cb3cf0479f9ba3453ff3b40ed1c2) fix: restore instance context in prompt runs (#22498) — _@nexxeln_
- [`f9d99f0`](https://github.com/anomalyco/opencode/commit/f9d99f044df4d506aac897a1c27d1a0b1f894ae9) fix(session): keep GitHub Copilot compaction requests valid (#22371) — _@Hona_
- [`bbd5faf`](https://github.com/anomalyco/opencode/commit/bbd5faf5cdc702a143f4b1438405131312a63533) chore(nix): remove external ripgrep (#22482) — _@gigamonster256_
- [`aeb7d99`](https://github.com/anomalyco/opencode/commit/aeb7d99d208bdd5e72278d16ed49c17479196a80) fix(effect): preserve logger context in prompt runs (#22496) — _@kitlangton_
- [`3695057`](https://github.com/anomalyco/opencode/commit/3695057bee6a2d6810e4b569632d6e49b7522d6f) feat: add --sanitize flag to opencode export to strip PII or confidential info (#22489) — _@rekram1-node_
- [`4ed3afe`](https://github.com/anomalyco/opencode/commit/4ed3afea84b13b400f8e4304d673ff8bd751e469) chore: generate — _@opencode-agent[bot]_
- [`3cf7c75`](https://github.com/anomalyco/opencode/commit/3cf7c7536b42eadb3dfbe8f20b13a47ec82e3174) fix(question): restore flat reply sdk shape (#22487) — _@kitlangton_
- [`85674f4`](https://github.com/anomalyco/opencode/commit/85674f4bfd15723c6c8afd96d74120ded9b8437b) chore: generate — _@opencode-agent[bot]_
- [`f2525a6`](https://github.com/anomalyco/opencode/commit/f2525a63c92dd46beeefc8741afcb98153abc776) add experimental question HttpApi slice (#22357) — _@kitlangton_
- [`8c42d39`](https://github.com/anomalyco/opencode/commit/8c42d391f5a765212e5b221d8382b3c01835cbe4) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`7f9bf91`](https://github.com/anomalyco/opencode/commit/7f9bf910739dec89da1a032d695437f68677f353) upgrade opentui to 0.1.99 (#22283) — _@kommander_
- [`6ce5c01`](https://github.com/anomalyco/opencode/commit/6ce5c01b1a9f6151da99c620ed8060d0e899ed89) ignore: v2 experiments — _@thdxr_
- [`a53fae1`](https://github.com/anomalyco/opencode/commit/a53fae15110ee87bd19012b167ed800b27f14f9b) Fix diff line number contrast for built-in themes (#22464) — _@kommander_
- [`4626458`](https://github.com/anomalyco/opencode/commit/4626458175704270e294a7deee7e830b27f705d1) fix(mcp): persist immediate oauth connections (#22376) — _@kitlangton_
- [`9a5178e`](https://github.com/anomalyco/opencode/commit/9a5178e4ac0c3fabe4ab07f8f8784f496906748e) fix(cli): handlePluginAuth asks for api key only if authorize method exists (#22475) — _@goniz_
- [`6838461`](https://github.com/anomalyco/opencode/commit/68384613be9b3869760064521ad5d0f3ba30062a) refactor(session): remove async facade exports (#22471) — _@kitlangton_
- [`4f967d5`](https://github.com/anomalyco/opencode/commit/4f967d5bc05d545fde9deccdb632276ec642722e) improve bash timeout retry hint (#22390) — _@kitlangton_
- [`ff60859`](https://github.com/anomalyco/opencode/commit/ff60859e3607c4f270fa50e5d56f8e1cbe763a6e) fix(project): reuse runtime in instance boot (#22470) — _@kitlangton_
- [`020c47a`](https://github.com/anomalyco/opencode/commit/020c47a055532c024eba2089bfea11adea7a545d) refactor(project): remove async facade exports (#22387) — _@kitlangton_
- [`64171db`](https://github.com/anomalyco/opencode/commit/64171db1731b3c54efe7644b0a02c566aa8dcb13) chore: generate — _@opencode-agent[bot]_
- [`ad26579`](https://github.com/anomalyco/opencode/commit/ad265797ab24d4d445fa71e54aeb069fd11cabb0) refactor(share): remove session share async facade exports (#22386) — _@kitlangton_
- [`b1312a3`](https://github.com/anomalyco/opencode/commit/b1312a3181bdd5f93ab2fcefdf4423ed464e33e3) core: prevent duplicate user messages in ACP clients (#22468) — _@rekram1-node_
- [`a8f9f6b`](https://github.com/anomalyco/opencode/commit/a8f9f6b7059bc9edf8184f8ebddf32dd1c6030e8) fix(acp): stop emitting user_message_chunk during session/prompt turn (#21851) — _@RAIT-09_
- [`d312c67`](https://github.com/anomalyco/opencode/commit/d312c677c5883d9b30a2438ea32af586315547ad) fix: rm effect logger from processor.ts, use old logger for now instead (#22460) — _@rekram1-node_
- [`5b60e51`](https://github.com/anomalyco/opencode/commit/5b60e51c9f36fd21036cff3012d90dd52cfa299e) fix(opencode): resolve ripgrep worker path in builds (#22436) — _@nexxeln_
- [`7cbe162`](https://github.com/anomalyco/opencode/commit/7cbe1627ec979e0523ab1a4c2c96def7cb352d06) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`d684086`](https://github.com/anomalyco/opencode/commit/d6840868d49bb3d31ed99bdef8ba874adb6c96a7) refactor(ripgrep): use embedded wasm backend (#21703) — _@nexxeln_
- [`9b2648d`](https://github.com/anomalyco/opencode/commit/9b2648dd57cea6005361bfceb4ee26723c1b6f30) build(opencode): shrink single-file executable size (#22362) — _@Hona_
- [`f954854`](https://github.com/anomalyco/opencode/commit/f954854232231c66546a781507e17ecb51ebab85) refactor(instance): remove state helper (#22381) — _@kitlangton_
- [`6a99079`](https://github.com/anomalyco/opencode/commit/6a99079012f8be6c9bde5a042e4c72f2cd5cd0cc) kit/env instance state (#22383) — _@kitlangton_
- [`0a8b629`](https://github.com/anomalyco/opencode/commit/0a8b6298cd830cd55862814ba333a02c41dd6254) refactor(tui): move config cache to InstanceState (#22378) — _@kitlangton_
- [`f40209b`](https://github.com/anomalyco/opencode/commit/f40209bdfb1f7c5efda65dccb3ae3345dcb5bfee) refactor(snapshot): remove async facade exports (#22370) — _@kitlangton_
- [`a2cb490`](https://github.com/anomalyco/opencode/commit/a2cb4909daac81a297e80c3a5059b9bcff8f6b3e) refactor(plugin): remove async facade exports (#22367) — _@kitlangton_
- [`7a05ba4`](https://github.com/anomalyco/opencode/commit/7a05ba47d11ee19b26389d3af109cf91b49ea43f) refactor(session): remove compaction async facade exports (#22366) — _@kitlangton_
- [`36745ca`](https://github.com/anomalyco/opencode/commit/36745caa2a406bfb817e775c8285efc29d4fba26) refactor(worktree): remove async facade exports (#22369) — _@kitlangton_
- [`c2403d0`](https://github.com/anomalyco/opencode/commit/c2403d0f155b55ad067e742ed6f091312445d24e) fix(provider): guard reasoningSummary injection for @ai-sdk/openai-compatible providers (#22352) — _@nazarhnatyshen_
- [`34e2429`](https://github.com/anomalyco/opencode/commit/34e2429c492495d059cbc63b86d02a58a1b3ca65) feat: add experimental.compaction.autocontinue hook to disable auto continuing after compaction (#22361) — _@rekram1-node_
- [`10ba68c`](https://github.com/anomalyco/opencode/commit/10ba68c772b21947d7b0602b98f54fa2ea769310) chore: update nix node_modules hashes — _@opencode-agent[bot]_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
