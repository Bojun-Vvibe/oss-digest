# anomalyco/opencode — 2026-04-13

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-12T23:59:59.000Z → 2026-04-13T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a sweeping internal refactor toward Effect-based services: roughly a dozen PRs from @kitlangton systematically remove "async facade exports" across nearly every subsystem — auth (#22306), provider (#22320), lsp (#22321), file (#22322), config (#22325), mcp (#22324, #22338), pty (#22305), skill (#22308), agent (#22341), session summary (#22337), session revert (#22339), permission (#22342), and vcs (#22304) — plus removal of the `ToolRegistry` runtime facade (#22307). Complementing this, @Brendonovich converts `InstanceBootstrap` into an Effect (#22274), and the session LLM stream is moved into a layer (#22358). Effect docs were refreshed (#22340). Anyone maintaining downstream code against opencode's internal modules should read these carefully — call sites and exports have shifted broadly.

Alongside the refactors, there's an early signal of a major rewrite: @thdxr opened "2.0 exploration" (#22335) and added a "session entry" plus a `.gitignore` entry for "v2 thoughts" — worth tracking even though no public design exists yet.

Functional changes worth noting:
- File search: a new ripgrep search service (#22295) with streamed parsing (#22303), plus a fix for exact file-path grep searches (#22356).
- Core: sync events are now published to the global event stream (#22347), and workspace adaptors are exposed to plugins (#21927) — relevant for plugin authors.
- Providers: Alibaba package and cache support added (#22248), with a follow-up fix (#22249). Session usage now uses `LanguageModelUsage` instead of `LanguageModelV2Usage` (#22224).
- SDK hardening: throw on `text/html` response content type (#21289); `auth login` now prompts for API key in `handlePluginAuth` (#21641).
- TUI/app polish: interactive burst added to the TUI logo (#22098), shared terminal background detection (#22297), Electron waits until ready before showing the main window (#22262), and small workspace/scroll style fixes (#22251, #22250).
- Tests: project and global instructions load coverage (#22317); e2e app runtime disposal fix (#22316).
- Internals: `parsePatchFiles` replaced by `parseDiffFromFile` (#22270).

No releases, no merged PRs surfaced via the PR feed, and no notable issues in the window — all activity is commits to `dev`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`e847125`](https://github.com/anomalyco/opencode/commit/e8471256f23c022348ff109f95fb84aa599fc230) refactor(session): move llm stream into layer (#22358) — _@kitlangton_
- [`43b3734`](https://github.com/anomalyco/opencode/commit/43b37346b639bcaf6cd74e725bd912c16ce45bb0) feat: add interactive burst to the TUI logo (#22098) — _@kitlangton_
- [`d199648`](https://github.com/anomalyco/opencode/commit/d199648aebd68cbd95b8af0afd59e608c9c18136) refactor(permission): remove async facade exports (#22342) — _@kitlangton_
- [`a06f402`](https://github.com/anomalyco/opencode/commit/a06f40297b06e3ce39c0618f4347db34074003f7) fix grep exact file path searches (#22356) — _@kitlangton_
- [`59c0fc2`](https://github.com/anomalyco/opencode/commit/59c0fc28ee53b9e63381ebd1190bf35bd74353e5) ignore: v2 thoughts — _@thdxr_
- [`b22add2`](https://github.com/anomalyco/opencode/commit/b22add292c194697c1581baf1a323996f966d04b) refactor(core): publish sync events to global event stream (#22347) — _@jlongster_
- [`67aaeca`](https://github.com/anomalyco/opencode/commit/67aaecacaca91fbb1b7671e28d3f88437aa84fad) refactor(session): remove revert async facade exports (#22339) — _@kitlangton_
- [`29c202e`](https://github.com/anomalyco/opencode/commit/29c202e6ab0b84d3884da5f8ab94f4873597084c) refactor(mcp): remove mcp auth async facade exports (#22338) — _@kitlangton_
- [`dcbf11f`](https://github.com/anomalyco/opencode/commit/dcbf11f41a299cf18879a1096584dcaf99fa6b76) refactor(session): remove summary async facades (#22337) — _@kitlangton_
- [`14ccff4`](https://github.com/anomalyco/opencode/commit/14ccff40379b9dabd4e7276881f93939113b8b12) refactor(agent): remove async facade exports (#22341) — _@kitlangton_
- [`5b8b874`](https://github.com/anomalyco/opencode/commit/5b8b874732d7027564e69891561ceb3ebd65b845) update effect docs (#22340) — _@kitlangton_
- [`1d81c02`](https://github.com/anomalyco/opencode/commit/1d81c0266cb731ed42c2ccd89d94873a4398781c) chore: generate — _@opencode-agent[bot]_
- [`9131207`](https://github.com/anomalyco/opencode/commit/913120759afccbfaeefaf12ead0929deb522ffae) session entry — _@thdxr_
- [`7a6ce05`](https://github.com/anomalyco/opencode/commit/7a6ce05d0939826aa6c8e1c481489a713b2d633f) 2.0 exploration (#22335) — _@thdxr_
- [`1dc6935`](https://github.com/anomalyco/opencode/commit/1dc69359d5351c4fb4dfbefef9e87a34c7c15b12) refactor(mcp): remove async facade exports (#22324) — _@kitlangton_
- [`329fcb0`](https://github.com/anomalyco/opencode/commit/329fcb040be17a5779c3b88cab9367127e491638) chore: generate — _@opencode-agent[bot]_
- [`bf50d1c`](https://github.com/anomalyco/opencode/commit/bf50d1c028e973ccc0beffdf568fca417b62f020) feat(core): expose workspace adaptors to plugins (#21927) — _@jlongster_
- [`b8801db`](https://github.com/anomalyco/opencode/commit/b8801dbd22e561e3ddaf83744726d8d98744f255) refactor(file): remove async facade exports (#22322) — _@kitlangton_
- [`f7c6943`](https://github.com/anomalyco/opencode/commit/f7c6943817e91189c44e1dab9271501c02c9e36f) refactor(config): remove async facade exports (#22325) — _@kitlangton_
- [`91fe4db`](https://github.com/anomalyco/opencode/commit/91fe4db27c3ca0f9de8b06e9e508de6b6365956b) Update VOUCHED list — _@github-actions[bot]_
- [`21d7a85`](https://github.com/anomalyco/opencode/commit/21d7a85e76983026bdd131b045f197386ef4c7ab) refactor(lsp): remove async facade exports (#22321) — _@kitlangton_
- [`663e798`](https://github.com/anomalyco/opencode/commit/663e798e7624c345dd302fb316c67c7ce10551b0) refactor(provider): remove async facade exports (#22320) — _@kitlangton_
- [`5bc2d24`](https://github.com/anomalyco/opencode/commit/5bc2d2498d06e50dda17c4daca73df1648ab971b) test: ensure project and global instructions are loaded (#22317) — _@rekram1-node_
- [`c22e348`](https://github.com/anomalyco/opencode/commit/c22e34853df71b4d31825614bea61e7c9184f0ba) refactor(auth): remove async auth facade exports (#22306) — _@kitlangton_
- [`6825b0b`](https://github.com/anomalyco/opencode/commit/6825b0bbc7f6f3863a5159b9153e0f3878ace76e) refactor(pty): remove async facade exports (#22305) — _@kitlangton_
- [`3644581`](https://github.com/anomalyco/opencode/commit/3644581b55c45bd889cc198cdf48744a68a9b612) refactor(file): stream ripgrep search parsing (#22303) — _@kitlangton_
- [`79cc153`](https://github.com/anomalyco/opencode/commit/79cc15335ec63dd04dd99d504250b03927848b3c) fix: dispose e2e app runtime (#22316) — _@kitlangton_
- [`ca62001`](https://github.com/anomalyco/opencode/commit/ca6200121bd370d0335556b2390f230dbe37fd1d) refactor: remove vcs async facade exports (#22304) — _@kitlangton_
- [`7239b38`](https://github.com/anomalyco/opencode/commit/7239b38b7f15ca2a393fa655342e46212b0b6cb9) refactor(skill): remove async facade exports (#22308) — _@kitlangton_
- [`9ae8dc2`](https://github.com/anomalyco/opencode/commit/9ae8dc2d017316c9ff0b9833926719bf088ce873) refactor: remove ToolRegistry runtime facade (#22307) — _@kitlangton_
- [`7164662`](https://github.com/anomalyco/opencode/commit/7164662be2fcf72410e3f895c9dee9b564b750a3) chore: generate — _@opencode-agent[bot]_
- [`94f71f5`](https://github.com/anomalyco/opencode/commit/94f71f59a3eb3a4d376e371c5958a7f0cbf0a27e) core: make InstanceBootstrap into an effect (#22274) — _@Brendonovich_
- [`3eb6508`](https://github.com/anomalyco/opencode/commit/3eb6508a64d33922930d18c8659a9e1a5819e9ea) refactor: share TUI terminal background detection (#22297) — _@kitlangton_
- [`6fdb8ab`](https://github.com/anomalyco/opencode/commit/6fdb8ab90d353819833657a43f16e556eeb42693) refactor(file): add ripgrep search service (#22295) — _@kitlangton_
- [`321bf1f`](https://github.com/anomalyco/opencode/commit/321bf1f8e1477dcca1b35173279d145e5fa5bf5a) refactor: finish small effect service adoption cleanups (#22094) — _@kitlangton_
- [`62bd023`](https://github.com/anomalyco/opencode/commit/62bd0230864910e3f32a3de54ff628a41e1b9ff9) app: replace parsePatchFiles with parseDiffFromFile (#22270) — _@Brendonovich_
- [`cb1a500`](https://github.com/anomalyco/opencode/commit/cb1a50055c9112bf18bec20f64026a3357c0d35b) fix(electron): wait until ready before showing the main window (#22262) — _@Brendonovich_
- [`65e3348`](https://github.com/anomalyco/opencode/commit/65e334823264fb20e4a64181599d6001815813ba) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`a6b9f0d`](https://github.com/anomalyco/opencode/commit/a6b9f0dac1a67ab669543ac946dcaace2031e2ec) app: align workspace load more button (#22251) — _@Brendonovich_
- [`34f5bdb`](https://github.com/anomalyco/opencode/commit/34f5bdbc9967fb67ef75c645443c638ce852aa09) app: fix scroll to bottom light mode style (#22250) — _@Brendonovich_
- [`0b4fe14`](https://github.com/anomalyco/opencode/commit/0b4fe14b0a0ab0b38d890706d4071a407d16674f) fix: forgot to put alibaba case in last commit (#22249) — _@rekram1-node_
- [`7230cd2`](https://github.com/anomalyco/opencode/commit/7230cd26838a133e93699497d2d27eb59ccf8460) feat: add alibaba pkg and cache support (#22248) — _@rekram1-node_
- [`a915fe7`](https://github.com/anomalyco/opencode/commit/a915fe74be24d4df9caf4c5b0e0f60133367b00d) tweak: adjust session getUsage function to use more up to date LanguageModelUsage instead of LanguageModelV2Usage (#22224) — _@rekram1-node_
- [`26d3558`](https://github.com/anomalyco/opencode/commit/26d35583c5b9e75b7986f332cfc68813ea3a6e06) sdk: throw error if response has text/html content type (#21289) — _@Brendonovich_
- [`ae17b41`](https://github.com/anomalyco/opencode/commit/ae17b416b8da910f43b8dca5356de41ef72d2685) fix(cli): auth login now asks for api key in handlePluginAuth (#21641) — _@goniz_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
