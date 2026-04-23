# anomalyco/opencode — 2026-03-12

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-11T23:59:59.000Z → 2026-03-12T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Release `v1.2.25` shipped (bfb736e), capping a busy day dominated by desktop/app polish, theming, and a meaningful refactor toward branded ID types.

The headline functional change is a cluster of app/desktop work from adamdotdevin: a new follow-up behavior in the chat UI (#17233), session load performance improvements (#17186), an overhauled theming system (#16889) plus a new AMOLED theme (02c7582), and a string of fixes for sidebar re-rendering (3ea387f, 2eeba53), task error state (9d3c42c), message loading (f2cad04), optimistic revert/restore (f0542fa), message nav (3ba9ab2) and terminal animation (fc678ef). If you only read one diff, make it #16889 — it touches user-visible theming broadly.

On the desktop/Electron side, Brendonovich reworked default server initialization and connection handling (#16965), Hona added Windows arm64 release targets for both CLI and desktop (#16696), fixed the Windows titlebar overlay theming (#16843) and `file://` resource loading under Electron (#17125), and OpeOginni fixed default WebSocket username plus a terminal spawn/close bug (#17061). iamdavidhill cleaned up the titlebar (#17206).

kitlangton landed a notable type-safety push: ProviderID/ModelID are now branded (#17110) and threaded through internal signatures (#17182), PermissionID/PtyID/QuestionID/ToolID got the same treatment (#17042), and import boundaries now use `.parse()` instead of manual `.make()` (#17106). Worth a look if you work on the core APIs.

Provider/server fixes: rekram1-node fixed non-OpenAI Azure models on completions endpoints (#17128) and made the plugin client default to basic auth when a server password exists (#17213); fwang patched a nemotron issue and zen cache key handling (b66222b, df8464f). Web got a mobile sidebar sizing fix (#17055), and an `app` guard for comment accessors in the message timeline landed (#17126).

CI/test infra: Hona stabilized terminal e2e flakiness with a real terminal driver (#17144), fixed bun cache paths cross-platform (#17120), re-focused prompt in a slash-terminal test (#17113), and kept test runs on `dev` (#17260). thdxr also dropped external sourcemap generation to shrink build artifacts (9fb12a9). No issues or PRs were opened/closed in the window beyond those merged above.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`268855d`](https://github.com/anomalyco/opencode/commit/268855dc5a770e9cd6718ea62b935afdea2dda7f) fix(ci): keep test runs on dev (#17260) — _@Hona_
- [`bfb736e`](https://github.com/anomalyco/opencode/commit/bfb736e94ad366b544cb29bf1063269d17d5a62c) release: v1.2.25 — _@opencode_
- [`df8464f`](https://github.com/anomalyco/opencode/commit/df8464f89c1304df0bd3a1a966c2e2aac306ea61) zen: handle cache key — _@fwang_
- [`3ea387f`](https://github.com/anomalyco/opencode/commit/3ea387f364a502b67bf23e6ddcf2f08d9002b814) fix(app): sidebar re-rendering too often — _@adamdotdevin_
- [`9d3c42c`](https://github.com/anomalyco/opencode/commit/9d3c42c8c49ec56ee890dc2af9c47f19494999fc) fix(app): task error state — _@adamdotdevin_
- [`f2cad04`](https://github.com/anomalyco/opencode/commit/f2cad046e6c38885b454d01cb28888152a54b375) fix(app): message loading — _@adamdotdevin_
- [`d722026`](https://github.com/anomalyco/opencode/commit/d722026a8dffe3a9678ffb82cab72bcde0fde720) fix: if server password exists, use basic auth for plugin client by default (#17213) — _@rekram1-node_
- [`42a5af6`](https://github.com/anomalyco/opencode/commit/42a5af6c8f6998277cf69270ad12e2a64edac5d3) feat(app): follow-up behavior (#17233) — _@adamdotdevin_
- [`f0542fa`](https://github.com/anomalyco/opencode/commit/f0542fae7a917fabb9e943c3112a3d0b4b03302d) fix(app): optimistic revert/restore — _@adamdotdevin_
- [`02c7582`](https://github.com/anomalyco/opencode/commit/02c75821a897657a3512ad157e9666a830b76253) feat(app): AMOLED theme — _@adamdotdevin_
- [`3ba9ab2`](https://github.com/anomalyco/opencode/commit/3ba9ab2c0ab695bc56dfbd16d3f85854e504dbb5) fix(app): not loading message nav — _@adamdotdevin_
- [`184732f`](https://github.com/anomalyco/opencode/commit/184732fc2097166921dd46fbb9a8ce433a96b237) fix(app): titlebar cleanup (#17206) — _@iamdavidhill_
- [`b66222b`](https://github.com/anomalyco/opencode/commit/b66222baf7a09af692e8de06179c1c3e51715269) zen: fix nemotron issue — _@fwang_
- [`dce7ece`](https://github.com/anomalyco/opencode/commit/dce7eceb2855bc36a41bc49d9c56d5dcc92a8eb2) chore: cleanup (#17197) — _@adamdotdevin_
- [`0e077f7`](https://github.com/anomalyco/opencode/commit/0e077f748352df6d44c811829baff3c26b3436ac) feat: session load perf (#17186) — _@adamdotdevin_
- [`776e7a9`](https://github.com/anomalyco/opencode/commit/776e7a9c15f3e352c5abf0b0949a5d7b767adfa3) feat(app): better themes (#16889) — _@adamdotdevin_
- [`c455d41`](https://github.com/anomalyco/opencode/commit/c455d418760f1dc1925da4c888bb2923fc4aab8a) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`a776a3e`](https://github.com/anomalyco/opencode/commit/a776a3ee12d317deb79c86066a99c79b13dad815) fix: non openai azure models that use completions endpoints (#17128) — _@rekram1-node_
- [`64fb923`](https://github.com/anomalyco/opencode/commit/64fb9233bfe2571f301561118c867ceb5c1b0b58) refactor(import): use .parse() at boundaries instead of manual .make() (#17106) — _@kitlangton_
- [`3533f33`](https://github.com/anomalyco/opencode/commit/3533f33ecb8ca7cec1185ed4572df13f80b94ccd) chore: generate — _@opencode-agent[bot]_
- [`1cb7df7`](https://github.com/anomalyco/opencode/commit/1cb7df71596ff80bb13e0606da4d42abef02f12f) refactor(provider): flow branded ProviderID/ModelID through internal signatures (#17182) — _@kitlangton_
- [`a4f8d66`](https://github.com/anomalyco/opencode/commit/a4f8d66a9bd8053ae797d129c139363b4fdd1707) docs: clarify subagent session navigation keybinds (#16455) — _@Wangmerlyn_
- [`12efbbf`](https://github.com/anomalyco/opencode/commit/12efbbfa4c49631f8a0201459a0956f78461b355) chore: cleanup (#17184) — _@adamdotdevin_
- [`1340252`](https://github.com/anomalyco/opencode/commit/13402529ce1ffb8aabcd4843d76dae41ba8855d4) fix(web): fix broken mobile sidebar (in workflows mode) sizing issue by adding flex-1 (#17055) — _@5w14_
- [`fc678ef`](https://github.com/anomalyco/opencode/commit/fc678ef36ca411763cfd91a1cc95d5307d48c025) fix(app): terminal animation — _@adamdotdevin_
- [`03cd891`](https://github.com/anomalyco/opencode/commit/03cd891ea97560114696cc84dda734a52e809868) chore: cleanup — _@adamdotdevin_
- [`6314d74`](https://github.com/anomalyco/opencode/commit/6314d741e72057a5d750ece1f9dce67e068f3135) chore: generate — _@opencode-agent[bot]_
- [`c454679`](https://github.com/anomalyco/opencode/commit/c45467964ceec5de229ddab4ff6889b26dbab103) feat(id): brand ProviderID and ModelID (#17110) — _@kitlangton_
- [`2eeba53`](https://github.com/anomalyco/opencode/commit/2eeba53b074f3237ee273eedbcfdbceb77fd6fac) fix(app): sidebar quirks — _@adamdotdevin_
- [`d4107d5`](https://github.com/anomalyco/opencode/commit/d4107d51f163b74c96895b50d653828c698d937e) chore: cleanup (#17115) — _@adamdotdevin_
- [`d8fbe0a`](https://github.com/anomalyco/opencode/commit/d8fbe0af0151c662008d8a2dbbb7c76ff5db88d4) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`b76ead3`](https://github.com/anomalyco/opencode/commit/b76ead3fe80a6159fdbfcc9b82c7c6318be68e7f) refactor(desktop): rework default server initialization and connection handling (#16965) — _@Brendonovich_
- [`51835ec`](https://github.com/anomalyco/opencode/commit/51835ecf90e23b34957f4dde843bbba1134f17fe) chore: generate — _@opencode-agent[bot]_
- [`328c6de`](https://github.com/anomalyco/opencode/commit/328c6de80d51704c09bdd962df2ddf5b9d7c82ea) Fix terminal e2e flakiness with a real terminal driver (#17144) — _@Hona_
- [`c9c0318`](https://github.com/anomalyco/opencode/commit/c9c0318e0e5c2fcd80fc1c32a1ccfe360f182f90) fix(desktop): set default WebSocket username and prevent repeated calling of terminal spawn properly closing the terminal (#17061) — _@OpeOginni_
- [`d481f64`](https://github.com/anomalyco/opencode/commit/d481f64bdeaca91226e66c0e7888c7a10ba631f7) fix(electron): theme Windows titlebar overlay (#16843) — _@Hona_
- [`54e7baa`](https://github.com/anomalyco/opencode/commit/54e7baa6cfff86627e5555842560b4a20e4be424) fix(desktop-electron): fix resource loading under file:// protocol (#17125) — _@Hona_
- [`1d7fcd4`](https://github.com/anomalyco/opencode/commit/1d7fcd40b45548e20b43e29cd16b83899c8f6eb1) chore: generate — _@opencode-agent[bot]_
- [`db7bafe`](https://github.com/anomalyco/opencode/commit/db7bafe9177b40b22060867838d17d53cf29d81b) fix(app): guard comment accessor in message timeline (#17126) — _@Hona_
- [`b1ef501`](https://github.com/anomalyco/opencode/commit/b1ef501207aa9d2c7f7ee70cbd1d9fde360be219) Merge remote-tracking branch 'origin/dev' into dev — _@thdxr_
- [`9fb12a9`](https://github.com/anomalyco/opencode/commit/9fb12a906eb8b1ef5f346623d11bd86689f926b1) core: remove external sourcemap generation to reduce build artifacts — _@thdxr_
- [`fafbc29`](https://github.com/anomalyco/opencode/commit/fafbc29316e7240b348db9e91e7a8e97cd803aef) fix(ci): use dynamic bun cache path for cross-platform support (#17120) — _@Hona_
- [`7b0def4`](https://github.com/anomalyco/opencode/commit/7b0def4b81b2b029a033ac67f64a9c82a3ebec64) chore: generate — _@opencode-agent[bot]_
- [`1d9c83b`](https://github.com/anomalyco/opencode/commit/1d9c83b576c51623f81014c94ce68c85734434fa) fix(e2e): re-focus prompt after terminal opens in slash-terminal test (#17113) — _@Hona_
- [`2c825c3`](https://github.com/anomalyco/opencode/commit/2c825c32234753c1a3c4a165092ddaef904c7f62) chore: generate — _@opencode-agent[bot]_
- [`2a4dedc`](https://github.com/anomalyco/opencode/commit/2a4dedc21075b4913e1c4b575e344e6690a5d9f8) feat(id): brand PermissionID, PtyID, QuestionID, and ToolID (#17042) — _@kitlangton_
- [`b0bca63`](https://github.com/anomalyco/opencode/commit/b0bca6342ece143e53fb07e2c0d7f75625300185) chore: generate — _@opencode-agent[bot]_
- [`547eb76`](https://github.com/anomalyco/opencode/commit/547eb7676df427de6b5195005e2a3b0322a72f1c) feat(windows): add arm64 release targets for cli and desktop (#16696) — _@Hona_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
