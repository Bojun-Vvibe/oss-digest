# openai/codex — 2026-04-08

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-07T23:59:59.000Z → 2026-04-08T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is realtime + remote-exec infrastructure landing in force, alongside a large MCP/guardian update. Two new realtime WebRTC pieces ship: a `codex-realtime-webrtc` crate that wires native WebRTC media into the TUI behind `[realtime].transport = "webrtc"` (#17058), with Bazel build integration for macOS native sources (#17145) and sideband WebSocket attachment for realtime call starts (#17057). The default transport remains websocket via new realtime config plumbing (#17097).

Remote execution gets first-class surface area: a new top-level experimental `codex exec-server` subcommand launches an adjacent `codex-exec-server` (#17162), the TUI now tolerates remote (non-local) cwds at startup (#17142), and a `start-codex-exec.sh` SSH helper lands (#17059). Path handling is hardened by threading `AbsolutePathBuf` through exec/sandbox plumbing instead of raw `PathBuf` (#17063).

On MCP and guardian: server-driven elicitations are now supported for arbitrary MCP servers via an RMCP wrapper (#17043), and in Full Access mode those elicitations are auto-approved (#17164). Disabled MCP servers no longer get probed for HTTP auth (#17098, fixes #16971). The guardian output schema is restructured to separate risk/authorization/outcome/rationale, with rationales surfaced in rejection messages (#17061), and `/debug-config` rendering plus guardian display is fixed (#17138). A long sequence of fifteen "codex debug N" PRs (#17117–#17131) incrementally strips the orchestrator agent template down line-range by line-range — likely a bisection or guardian-driven cleanup worth a glance if you own that template.

TUI quality-of-life: startup and new-session latency drops by making account/rate-limit fetches async (#17039); the TUI now boots a single app-server instead of two (#16582); `/resume` no longer crashes when resuming the live thread (#17086, fixes #3793-adjacent); `/status` finally shows the global `$CODEX_HOME/AGENTS.md` (#17091); and Fast Mode status is driven by model metadata rather than a hardcoded name (#16949). Smaller fixes: image-gen gated to SIWC users only (#17046), network proxy refresh on sandbox-mode change (#17040), JsonSchema gains `anyOf`/`enum` support (#16875) with regression tests (#17052), and the obsolete `codex-cli/README.md` is deleted (#17096).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`01537f0`](https://github.com/openai/codex/commit/01537f0bd2c46d4fd6789dba80dd3344e2a00968) Auto-approve MCP server elicitations in Full Access mode (#17164) — _@leoshimo-oai_
- [`dcbc91f`](https://github.com/openai/codex/commit/dcbc91fd39ba4f3d90fbfd96fa7ba6e8cf9a6159) Update guardian output schema (#17061) — _@maja-openai_
- [`49677ec`](https://github.com/openai/codex/commit/49677ec71f3b6ade3839b0c7081b60d2e1c17a4f) Add top-level exec-server subcommand (#17162) — _@starr-openai_
- [`794a024`](https://github.com/openai/codex/commit/794a0240f9fe7508524c68636609a542f90704a3) Attach WebRTC realtime starts to sideband websocket (#17057) — _@aibrahim-oai_
- [`19bd018`](https://github.com/openai/codex/commit/19bd018300f36dcaae4dac1bb3da8598edd85f56) Wire realtime WebRTC native media into Bazel (#17145) — _@aibrahim-oai_
- [`56dfe41`](https://github.com/openai/codex/commit/56dfe41605fd290d9531df97c3d80c3766dff1be) Fix ToolsConfigParams initializer in tool registry test (#17154) — _@won-openai_
- [`58ad79b`](https://github.com/openai/codex/commit/58ad79b60eeb386cda50663cdc0aaff009dd1493) Fix missing fields (#17149) — _@canvrno-oai_
- [`e4d6702`](https://github.com/openai/codex/commit/e4d6702b878e33c1528cc1d3c57fc2d3587bab5e) [codex] Support remote exec cwd in TUI startup (#17142) — _@pakrym-oai_
- [`f383cc9`](https://github.com/openai/codex/commit/f383cc980d141cdb9b208a2b08413f6e62b76b97) Add sandbox support to filesystem APIs (#16751) — _@starr-openai_
- [`e003f84`](https://github.com/openai/codex/commit/e003f84e1eaa8c3ac8fd822dce9232cc35c5b21b) release ready, enabling only for siwc users (#17046) — _@won-openai_
- [`e794457`](https://github.com/openai/codex/commit/e794457a5906106ee13ee6a8328d33b0f6552298) fix(debug-config, guardian): fix /debug-config rendering and guardian… (#17138) — _@owenlin0_
- [`35b5720`](https://github.com/openai/codex/commit/35b5720e8da5d4d5af498d66ac5ee48a14c34a23) Use AbsolutePathBuf for exec cwd plumbing (#17063) — _@pakrym-oai_
- [`d90a348`](https://github.com/openai/codex/commit/d90a3488704c6a2d0a3f50c3a17c9e1a52a7ddd9) Add WebRTC media transport to realtime TUI (#17058) — _@aibrahim-oai_
- [`7b6486a`](https://github.com/openai/codex/commit/7b6486a145ed4c02d878c971bdc8ef92eaa8ab82) [mcp] Support server-driven elicitations (#17043) — _@mzeng-openai_
- [`06d88b7`](https://github.com/openai/codex/commit/06d88b7e8110d724e65a1383be497bbf5f466aaa) Add realtime transport config (#17097) — _@aibrahim-oai_
- [`18171b1`](https://github.com/openai/codex/commit/18171b1931ab7e3f254097d707f41842ef92815f) Skip MCP auth probing for disabled servers (#17098) — _@etraut-openai_
- [`5c95e45`](https://github.com/openai/codex/commit/5c95e4588e229cdda2484d1290ed15c1492ec5c3) Fix TUI crash when resuming the current thread (#17086) — _@etraut-openai_
- [`dc5feb9`](https://github.com/openai/codex/commit/dc5feb916dd1054e6c24ad7c5a5a59fba41a2c44) Show global AGENTS.md in /status (#17091) — _@etraut-openai_
- [`4c07dd4`](https://github.com/openai/codex/commit/4c07dd4d25006a41d35872f520aa2e18bc3200e7) Configure multi_agent_v2 spawn agent hints (#17071) — _@pakrym-oai_
- [`2250fdd`](https://github.com/openai/codex/commit/2250fdd54ac933245411bf884adea8bc8252f925) codex debug 14 (guardian approved) (#17130) — _@jif-oai_
- [`34fd336`](https://github.com/openai/codex/commit/34fd336e7bbf6e5045a99d0ca6b3d536bf4ed912) codex debug 12 (guardian approved) (#17128) — _@jif-oai_
- [`6ee4680`](https://github.com/openai/codex/commit/6ee4680a81ca5ce06948f76039a11089f796127e) codex debug 10 (guardian approved) (#17126) — _@jif-oai_
- [`3442285`](https://github.com/openai/codex/commit/34422855bbcb8e4f7ba2a5fc519e1b2db39061f9) codex debug 8 (guardian approved) (#17124) — _@jif-oai_
- [`9601f2a`](https://github.com/openai/codex/commit/9601f2af4b1ff546fcdac4e6480002b809f2a400) codex debug 6 (guardian approved) (#17122) — _@jif-oai_
- [`99a12b7`](https://github.com/openai/codex/commit/99a12b78c2c65e77bbdc5f5d88da7a4e36afbb84) codex debug 4 (guardian approved) (#17120) — _@jif-oai_
- [`11eff76`](https://github.com/openai/codex/commit/11eff760d167cf73ee1e65be10b703d91f6b70d9) codex debug 2 (guardian approved) (#17118) — _@jif-oai_
- [`2b65f24`](https://github.com/openai/codex/commit/2b65f24de64dae6e65ff5a76f1e59e87425c84dc) codex debug 15 (guardian approved) (#17131) — _@jif-oai_
- [`95d27bf`](https://github.com/openai/codex/commit/95d27bfe8c763fffad8059d18c65cbfd8c381f0c) codex debug 13 (guardian approved) (#17129) — _@jif-oai_
- [`6e9ffa9`](https://github.com/openai/codex/commit/6e9ffa9a1cb361136529378d4c060f5c1805e55f) codex debug 11 (guardian approved) (#17127) — _@jif-oai_
- [`c39477a`](https://github.com/openai/codex/commit/c39477a7d578116b7ad8be9ab5a7f9172ad36c07) codex debug 9 (guardian approved) (#17125) — _@jif-oai_
- [`cb77bbf`](https://github.com/openai/codex/commit/cb77bbfed07fa13c23fd06240637f37cc08ea178) codex debug 7 (guardian approved) (#17123) — _@jif-oai_
- [`5f1363d`](https://github.com/openai/codex/commit/5f1363d6d0a539f78ec5cf8ea482fc442ddff9aa) codex debug 5 (guardian approved) (#17121) — _@jif-oai_
- [`8558e8a`](https://github.com/openai/codex/commit/8558e8aa51b229f5a07a4e2ec1a9bab0554421db) codex debug 3 (guardian approved) (#17119) — _@jif-oai_
- [`22c1fc0`](https://github.com/openai/codex/commit/22c1fc01311afa10d30ce72979cc839a6afda316) codex debug 1 (guardian approved) (#17117) — _@jif-oai_
- [`2bbab7d`](https://github.com/openai/codex/commit/2bbab7d8f9d12a4c399bcd616fb047da81c87eb5) feat: single app-server bootstrap in TUI (#16582) — _@jif-oai_
- [`d47b755`](https://github.com/openai/codex/commit/d47b755aa21484efc849ada5cf614ec80a51aa68) Render namespace description for tools (#16879) — _@vivi_
- [`9091999`](https://github.com/openai/codex/commit/9091999c83d3dae5d0225b400ce77205544fe567) Render function attribute descriptions (#16880) — _@vivi_
- [`ea516f9`](https://github.com/openai/codex/commit/ea516f9a406192db364b51b41d9682512d50a309) Support anyOf and enum in JsonSchema (#16875) — _@vivi_
- [`abc678f`](https://github.com/openai/codex/commit/abc678f9e8a06175bcbd00c98eb72e4aa65d16e8) Remove obsolete codex-cli README (#17096) — _@etraut-openai_
- [`79768dd`](https://github.com/openai/codex/commit/79768dd61cc39add705d210931249881a32265c0) Remove expired April 2nd tooltip copy (#16698) — _@etraut-openai_
- [`3c1adba`](https://github.com/openai/codex/commit/3c1adbabcd0921f848f8c6122e6229689173d063) fix: refresh network proxy settings when sandbox mode changes (#17040) — _@viyatb-oai_
- [`3fe0e02`](https://github.com/openai/codex/commit/3fe0e022be909a27126dd722769a5f697bb14d59) Add project-local codex bug triage skill (#17064) — _@etraut-openai_
- [`2c3be34`](https://github.com/openai/codex/commit/2c3be34bae039e0d015f12a7deff096e25fde5ff) Add remote exec start script (#17059) — _@pakrym-oai_
- [`fa5119a`](https://github.com/openai/codex/commit/fa5119a8a66909ed8d11a79c124d9c78092b4099) Add regression tests for JsonSchema (#17052) — _@vivi_
- [`359e17a`](https://github.com/openai/codex/commit/359e17a852b70eec7108ca25669c6141af2c78c2) fix(tui): reduce startup and new-session latency (#17039) — _@fcoury-oai_
- [`80ebc80`](https://github.com/openai/codex/commit/80ebc80be5dbe61b300279c0123918275fc145a5) Use model metadata for Fast Mode status (#16949) — _@pash-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
