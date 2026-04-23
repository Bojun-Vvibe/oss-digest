# anomalyco/opencode — 2026-04-15

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-14T23:59:59.000Z → 2026-04-15T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Three patch releases shipped in a single day — **v1.4.4, v1.4.5, and v1.4.6** — capping a heavy day of telemetry, bootstrap, and desktop-stability work. v1.4.6 is the one to install: it fixes snapshot staging that was hitting `ENAMETOOLONG` on long file lists and improves staging perf via stdin pathspecs (#22560), plus repairs OTEL header parsing when values contain `=` (#22564) and prompt-submission state in the desktop app (#22566).

The dominant theme is **observability via OpenTelemetry**. kitlangton landed a chain of changes to register an OTel context manager so AI SDK spans thread into Effect traces (#22645), trace tool execution spans (#22531), improve telemetry tracing and request spans (#22653), and export AI SDK telemetry spans to OTLP backends (#22526). An effect bridge for callback contexts (#22504) and removal of the `makeRuntime` facade from Env (#22523) round out the Effect-runtime cleanup, with an instance-context migration plan documented in #22529.

The second theme is **infrastructure refactoring**. thdxr introduced a new `shared` package (#22626) and migrated flock/hash utilities into it (#22640); kitlangton moved opencode onto `AppFileSystem` path helpers (#22637); Brendonovich relocated plugin initialization to a config-layer override (#22620) and parallelised bootstrap (#22514). jlongster landed a sizable sync/proxy/session-restore refactor (#22518), and an experimental permission HttpApi slice was added (#22385). The question API was also restructured: nexxeln extracted both the HttpApi contract and a reusable handler factory.

Notable fixes: tool_use is now always followed by tool_result (#22646), GitHub Copilot auto-compaction is tracked as agent-initiated (#22567), org lookup is skipped during config startup (#22670), the TUI no longer overrides a CLI-specified agent (#20554), and macOS desktop chdirs to homedir to fix ripgrep (#22537). fwang added Qwen 3.5/3.6 model entries and a zen rate limiter. Dead code for the obsolete list tool was removed (#22672), and all e2e tests were deleted (#22501) — worth a look if you depend on that suite.

## Releases

- **[v1.4.6](https://github.com/anomalyco/opencode/releases/tag/v1.4.6)** — v1.4.6 _by @opencode-agent[bot] at 2026-04-15T07:26:50Z_
  > ## Core
  > 
  > - Fixed snapshot staging for very long file lists and improved staging performance.
  > - Fixed OTEL header parsing when a header value contains `=`.
  > 
  > ## Desktop
  > 
  > - Fixed prompt submission state updates to avoid failed or inconsistent sends.
  > - Improved session title input spacing while editing.
  > 
  > **Thank you to 1 community contributor:**
  > - @github-actions[bot]:
  >   - Update VOUCHED list
- **[v1.4.5](https://github.com/anomalyco/opencode/releases/tag/v1.4.5)** — v1.4.5 _by @opencode-agent[bot] at 2026-04-15T04:25:45Z_
  > ## Core
  > - Export AI SDK telemetry spans to OTLP trace backends.
  > - Expose the experimental question API schema and OpenAPI spec from `@opencode-ai/server`.
  > - Expose a reusable question handler factory for custom question API hosts.
  > 
  > ## Desktop
  > - Start desktop shell commands from the home directory.
  > - Avoid bootstrap error popups while global sync initializes.
- **[v1.4.4](https://github.com/anomalyco/opencode/releases/tag/v1.4.4)** — v1.4.4 _by @opencode-agent[bot] at 2026-04-15T00:04:10Z_
  > ## Core
  > - Restored instance and logger context during prompt runs so prompt-time tools and logging behave correctly.
  > - Kept GitHub Copilot compaction requests valid.
  > - Restored the flat reply shape for question API responses.
  > - Persisted MCP OAuth connections that finish immediately, so authenticated servers stay connected.
  > - Prevented duplicate user messages in ACP clients.
  > - Stopped emitting `user_message_chunk` events during session and prompt turns in ACP clients. (@RAIT-09)
  > - Fixed reasonin…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`a554fad`](https://github.com/anomalyco/opencode/commit/a554fad2327c68b2dc562a19e62a96415028b6d8) fix(tui): Don't overwrite the agent that was specified on the command line (#20554) — _@CarloWood_
- [`4dd0d1f`](https://github.com/anomalyco/opencode/commit/4dd0d1f67e6f600f629617e3b7c7881f4d4a1a6e) refactor(opencode): use AppFileSystem path helpers (#22637) — _@kitlangton_
- [`672ee28`](https://github.com/anomalyco/opencode/commit/672ee28635f471c5fcdc7e77c518d4465678d786) fix(opencode): avoid org lookup during config startup (#22670) — _@kitlangton_
- [`e16589f`](https://github.com/anomalyco/opencode/commit/e16589f8b535c216939d690d721cd1eefc3c1c2a) tweak(ui): session spacing (#20839) — _@iamdavidhill_
- [`83e257b`](https://github.com/anomalyco/opencode/commit/83e257b468d75f6361f9ce50d930f110dfd37365) chore: generate — _@opencode-agent[bot]_
- [`916131b`](https://github.com/anomalyco/opencode/commit/916131be19893b84f17902825a163a0b67274249) core: move plugin intialisation to config layer override (#22620) — _@Brendonovich_
- [`d2ea670`](https://github.com/anomalyco/opencode/commit/d2ea6700aa2e6bdf5d04fe70ba893afbb320adbd) fix(core): Remove dead code and documentation related to the obsolete list tool.  (#22672) — _@ariane-emory_
- [`6bed7d4`](https://github.com/anomalyco/opencode/commit/6bed7d469d8f6a18d5543cc668d951d0d1e09776) feat(opencode): improve telemetry tracing and request spans (#22653) — _@kitlangton_
- [`3b75f16`](https://github.com/anomalyco/opencode/commit/3b75f16119b914fa6eb7dd451a0f3fb20d22d69f) chore: generate — _@opencode-agent[bot]_
- [`250e30b`](https://github.com/anomalyco/opencode/commit/250e30bc7da7afa1c83578108e9af23210dda87a) add experimental permission HttpApi slice (#22385) — _@kitlangton_
- [`e83b221`](https://github.com/anomalyco/opencode/commit/e83b22159d0c6b393acf9b04fdd6798397bb782d) tweak: ensure auto continuing compaction is tracked as agent initiated for github copilot (#22567) — _@rekram1-node_
- [`348a849`](https://github.com/anomalyco/opencode/commit/348a84969de64cc1623d8ddcf73336b449c5b1f5) fix: ensure tool_use is always followed by tool_result (#22646) — _@rekram1-node_
- [`8ba4799`](https://github.com/anomalyco/opencode/commit/8ba4799b3ee67e681ada264702d235522520c570) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`9640d88`](https://github.com/anomalyco/opencode/commit/9640d889baa58fa01ed612a6372ba77462f79d9f) fix: register OTel context manager so AI SDK spans thread into Effect traces (#22645) — _@kitlangton_
- [`4ae7c77`](https://github.com/anomalyco/opencode/commit/4ae7c77f8abda8d51ddf52ee6e07890fa19b6629) migrate: move flock and hash utilities to shared package (#22640) — _@thdxr_
- [`f175140`](https://github.com/anomalyco/opencode/commit/f1751401aa2c53a4a0215c6deddf93df306aac8b) fix(effect): add effect bridge for callback contexts (#22504) — _@kitlangton_
- [`f06d82b`](https://github.com/anomalyco/opencode/commit/f06d82b6e8b98b77b0f8f63d824c800c6b99fa6e) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`5fc656e`](https://github.com/anomalyco/opencode/commit/5fc656e2a0dff7e1cfb8baa40a63418673a1be48) docs(opencode): add instance context migration plan (#22529) — _@kitlangton_
- [`fe01fa7`](https://github.com/anomalyco/opencode/commit/fe01fa7249f84100e97d97f346dcda4647e5bc5b) remove makeRuntime facade from Env (#22523) — _@kitlangton_
- [`685d79e`](https://github.com/anomalyco/opencode/commit/685d79e953a02a3a78b91235c811932105574a66) feat(opencode): trace tool execution spans (#22531) — _@kitlangton_
- [`be9432a`](https://github.com/anomalyco/opencode/commit/be9432a893dd1662c10ff41c7ab552bcba8f3e1b) shared package (#22626) — _@thdxr_
- [`af20191`](https://github.com/anomalyco/opencode/commit/af20191d1cd60a7f4a421ad81eca5053f7deace1) feat(core): sync routes, refactor proxy, session restore, and more syncing (#22518) — _@jlongster_
- [`47af00b`](https://github.com/anomalyco/opencode/commit/47af00b2452ef7374cdda8769910799938d1303c) zen: better error — _@fwang_
- [`004a928`](https://github.com/anomalyco/opencode/commit/004a9284afb09b31105cb2bc26d993af0726585b) sync — _@fwang_
- [`405b0b0`](https://github.com/anomalyco/opencode/commit/405b0b037c7597448e6b36438425042c8b0cf772) handle non-throwing requests (#22604) — _@kommander_
- [`d7718d4`](https://github.com/anomalyco/opencode/commit/d7718d41d465cc1e84bc4d6c2e81af8baf46a23e) refactor(electron): update store configuration (#22597) — _@Brendonovich_
- [`c98f616`](https://github.com/anomalyco/opencode/commit/c98f61638535c9cc57a2b710decc780f7289fc2f) ui: update accordion styles and session review component (#22582) — _@Brendonovich_
- [`5069cd9`](https://github.com/anomalyco/opencode/commit/5069cd97982d5040710f5c442f9670538cb1dc72) fix(ui): disable accordion items for binary files and improve disabled state styling (#22577) — _@Brendonovich_
- [`7659321`](https://github.com/anomalyco/opencode/commit/765932199021cf1dd7a813e37da744f391752bd1) release: v1.4.6 — _@opencode_
- [`a992d8b`](https://github.com/anomalyco/opencode/commit/a992d8b733716148feb392b84b27198141ca5094) fix(snapshot): avoid ENAMETOOLONG and improve staging perf via stdin pathspecs (#22560) — _@Hona_
- [`ccaa12e`](https://github.com/anomalyco/opencode/commit/ccaa12ee799a102390bc9dce6dc76e7d2620c448) sync — _@fwang_
- [`5687d61`](https://github.com/anomalyco/opencode/commit/5687d617a323f072c96fa80dcf5e12073c910403) chore: generate — _@opencode-agent[bot]_
- [`8f1ac2d`](https://github.com/anomalyco/opencode/commit/8f1ac2ddf6223ac6220fd9b3b68374396cf893f0) Go: list model providers — _@fwang_
- [`1bea2a9`](https://github.com/anomalyco/opencode/commit/1bea2a95a8a3ebebc638fe4ab9d374101cb4f4f5) Go: qwen 3.5 & 3.6 plus — _@fwang_
- [`6a7ca45`](https://github.com/anomalyco/opencode/commit/6a7ca45ae6dc9b144f9e86d489fd6abb628a9884) doc: qwen3.5 & 3.6 — _@fwang_
- [`8d89c34`](https://github.com/anomalyco/opencode/commit/8d89c3417bcfb6bb29793a640a37686957e82692) fix: prevent tooltip reopen on trigger click (#22571) — _@Brendonovich_
- [`c48a4cc`](https://github.com/anomalyco/opencode/commit/c48a4cc05b610043d82333d7791be41bcf6c850d) docs: use latest release for downloads instead of pinned version — _@thdxr_
- [`df9eafa`](https://github.com/anomalyco/opencode/commit/df9eafa92cd670c75a9c3cda1b4d1759eb895bec) Update VOUCHED list — _@github-actions[bot]_
- [`e24d104`](https://github.com/anomalyco/opencode/commit/e24d104e943331077c7c775f08c024d9f7960c40) fix: update prompt input submit handler (#22566) — _@Brendonovich_
- [`be3be32`](https://github.com/anomalyco/opencode/commit/be3be32bf12872d536f7b21b0e1b0e98400c3031) fix(observability): handle OTEL headers with '=' in value (#22564) — _@thdxr_
- [`66de7be`](https://github.com/anomalyco/opencode/commit/66de7bef8902557874d8811f657697866cafffec) fix: add left padding to session title input (#22556) — _@Brendonovich_
- [`d06bc3c`](https://github.com/anomalyco/opencode/commit/d06bc3c2ca2b11f8c102c0802bff4c88f0c57fc5) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`dfc7283`](https://github.com/anomalyco/opencode/commit/dfc72838d70bea6df14859e90c6df91507b5f406) release: v1.4.5 — _@opencode_
- [`4246368`](https://github.com/anomalyco/opencode/commit/4246368a881f262c2d548e29977f86e03305cb0c) fix(bootstrap): await plugin initialization — _@Brendonovich_
- [`548d9ac`](https://github.com/anomalyco/opencode/commit/548d9ac7263357b59963318524cbdc697d16565e) core: parallelise bootstrap (#22514) — _@Brendonovich_
- [`a60fd89`](https://github.com/anomalyco/opencode/commit/a60fd89d1eaf5dd0445d2d6dea9bdc8d48534461) ci: ok one more time — _@thdxr_
- [`d25a7fb`](https://github.com/anomalyco/opencode/commit/d25a7fbb2c5316473adac115961ee9b5afea38db) chore: bump ai sdk pkgs (#22539) — _@rekram1-node_
- [`da0f81d`](https://github.com/anomalyco/opencode/commit/da0f81d36fd7af9cee2752bfc29adee50ad83a60) ci: remove Tauri desktop builds from release workflow to simplify distribution — _@thdxr_
- [`627159a`](https://github.com/anomalyco/opencode/commit/627159acac04409d7697a6739e2c572c2a010943) delete all e2e tests (#22501) — _@thdxr_
- [`f44aa02`](https://github.com/anomalyco/opencode/commit/f44aa02e2677b2b89a1a9f517c0ff8990383deaa) fix(desktop): chdir to homedir on macOS to fix ripgrep issues (#22537) — _@Brendonovich_
- [`1ca9804`](https://github.com/anomalyco/opencode/commit/1ca98046045d6c20481e1191927691961979c5c1) fix(desktop): start tauri shell commands from home directory (#22535) — _@Brendonovich_
- [`ddad871`](https://github.com/anomalyco/opencode/commit/ddad871b46ca3dbd373280b70fdeb0f1553bfba4) core: pin downloads to v1.4.3 to ensure users get a tested, stable build instead of potentially unstable latest releases — _@thdxr_
- [`d215188`](https://github.com/anomalyco/opencode/commit/d215188e4c00af6730fffc439158689b3c69eb89) chore: generate — _@opencode-agent[bot]_
- [`f73ff78`](https://github.com/anomalyco/opencode/commit/f73ff781e797aac8beaaaab9a49218ec5d9e0f14) fix(opencode): export AI SDK telemetry spans (#22526) — _@kitlangton_
- [`68a9a47`](https://github.com/anomalyco/opencode/commit/68a9a47976fc0388370d9e3e760181ea67e85e9d) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`fb92bd4`](https://github.com/anomalyco/opencode/commit/fb92bd470cfcc94b224b824817e267331d547dc1) chore: generate — _@opencode-agent[bot]_
- [`02f8a24`](https://github.com/anomalyco/opencode/commit/02f8a24e23cfe7398d30db585dba67f589a5a8e7) Update test.yml — _@Hona_
- [`467e568`](https://github.com/anomalyco/opencode/commit/467e5689ec6187f811afacc337d411863dc9e9ca) feat(server): extract question handler factory — _@nexxeln_
- [`fba752a`](https://github.com/anomalyco/opencode/commit/fba752a5016a93ad7ea54890cf444de02a89a0f8) feat(server): extract question httpapi contract — _@nexxeln_
- [`87b2a9d`](https://github.com/anomalyco/opencode/commit/87b2a9d749ac39f47ea2d9d6806e32f224fe8ba9) chore: generate — _@opencode-agent[bot]_
- [`8df7ccc`](https://github.com/anomalyco/opencode/commit/8df7ccc304273f3642f93543a36c955491be8490) zen: rate limiter — _@fwang_
- [`2c36bf9`](https://github.com/anomalyco/opencode/commit/2c36bf9490ef346d48680bc31fce51e90c52f47c) fix(app): avoid bootstrap error popups during global sync init (#22426) — _@Brendonovich_
- [`bddf830`](https://github.com/anomalyco/opencode/commit/bddf83008360aa6633a4890a89c1b184a0169af3) release: v1.4.4 — _@opencode_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
