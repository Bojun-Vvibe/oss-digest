# openai/codex — 2026-03-09

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-08T23:59:59.000Z → 2026-03-09T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline story today is a major new capability landing in core: a built-in **`request_permissions` tool** (#13092) that lets a running turn ask the client for additional sandbox/approval scope mid-session. It shipped together with a follow-up stack that makes it usable end-to-end: TUI rendering of permission prompts (#14004), persistence of granted permissions across turns within a session (#14009), and a fix ensuring `apply_patch` also honors those additional permissions (#14055). Anyone integrating with the app-server or building UI on top of Codex should read these together.

A second notable theme is **app-server surface expansion**. `da3689f` (#14005) lands an in-process app server and wires `exec` to use it — a subset of the larger architectural change in #13636 and worth reading for anyone tracking the move away from the out-of-process model. Adjacent changes include health endpoints (`/readyz`, `/healthz`) for the `--listen` websocket server (#13782), a new `plugin/uninstall` endpoint (#14111), hot-reload of user config on batched writes (#13839), exec-approval requests now carrying experimental skill metadata (#13929), and improved 401 handling in cloud-requirements fetch (#14049).

Other substantive changes:
- **OTEL cleanup** (#14117) centralizes metric names and shared tag builders in `codex-otel` — a breaking-ish refactor for anyone consuming Codex telemetry.
- **Web search tool config** in core now uses dedicated Responses-API payload structs instead of shared types (#14136).
- **Guardian feedback pass** (#13897) removes model-visible guardian-specific prompt additions so enabling the feature no longer perturbs the main approval prompt.
- **TUI**: clearer separation of pending-steer vs queued follow-ups in the input preview (#13841); image-save info now passed to the model (#14123).
- **Plugins**: curated plugins are now also loaded at TUI startup (#14050).

The remaining ~15 commits from `aibrahim-oai` are a sustained test-stabilization push across app-server, RMCP, PTY, websocket handshake ordering (#13943), resume replay, and shell snapshot tests — low signal individually but useful context if CI flakes have been blocking you. No releases, merged PRs, open PRs, or issues were recorded in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`c1defcc`](https://github.com/openai/codex/commit/c1defcc98cf9c6b9001e86d8d13e5b5ec9488510) fix(core) RequestPermissions + ApplyPatch (#14055) — _@dylan-hurd-oai_
- [`66e71cc`](https://github.com/openai/codex/commit/66e71cce1139ac7045c59f630a40b8b354fac1ce) codex-rs/app-server: add health endpoints for --listen websocket server (#13782) — _@maxj-oai_
- [`d309c10`](https://github.com/openai/codex/commit/d309c102efdb2840605ddac1d911ecb3a9945459) fix(core): use dedicated types for responsesapi web search tool config (#14136) — _@owenlin0_
- [`d241dc5`](https://github.com/openai/codex/commit/d241dc598cb0bbadeefd5eab92c056a36b420624) feat(core) Persist request_permission data across turns (#14009) — _@dylan-hurd-oai_
- [`831ee51`](https://github.com/openai/codex/commit/831ee51c86e715e3e546f8c3342f8c5aa94d736f) Stabilize protocol schema fixture generation (#13886) — _@aibrahim-oai_
- [`42f20a6`](https://github.com/openai/codex/commit/42f20a6845939437b68848df111ccd719c64012d) pass on save info to model + ui tweaks (#14123) — _@won-openai_
- [`44ecc52`](https://github.com/openai/codex/commit/44ecc527cb7697454ad9241e90b2ebd472beccfb) Stabilize RMCP streamable HTTP readiness tests (#13880) — _@aibrahim-oai_
- [`da991bd`](https://github.com/openai/codex/commit/da991bdf3a1925e3fbd11325293f0cd683300131) feat(otel): Centralize OTEL metric names and shared tag builders (#14117) — _@owenlin0_
- [`6ad448b`](https://github.com/openai/codex/commit/6ad448b6585f5a8d504bb9ff990da218bcc336ef) chore: plugin/uninstall endpoint (#14111) — _@sayan-oai_
- [`0334dde`](https://github.com/openai/codex/commit/0334ddeccbef07995561de5b39334dd94ef9e33a) fix(ci) Faster shell_command::unicode_output test (#14114) — _@dylan-hurd-oai_
- [`fefd01b`](https://github.com/openai/codex/commit/fefd01b9e011380a2f081d8337736602e7e87ee0) Stabilize resumed rollout messages (#14060) — _@aibrahim-oai_
- [`e03e9b6`](https://github.com/openai/codex/commit/e03e9b63eac0a7f374fb4387fbd0b4c49371a461) Stabilize guardian approval coverage (#14103) — _@aibrahim-oai_
- [`ad57505`](https://github.com/openai/codex/commit/ad57505ef5ca82a3ba5e182d01b27b572042079f) Stabilize interrupted task approval cleanup (#14102) — _@aibrahim-oai_
- [`203a70a`](https://github.com/openai/codex/commit/203a70a1915d9e2f308f110f90b9790bb53c09f2) Stabilize shell approval MCP test (#14101) — _@aibrahim-oai_
- [`b15cfe9`](https://github.com/openai/codex/commit/b15cfe93291185bd4b5df8f3a572d50fc236e706) fix: properly handle 401 error in clound requirement fetch. (#14049) — _@xl-openai_
- [`c1f3ef1`](https://github.com/openai/codex/commit/c1f3ef16ec57ccf64c32411b3a2927bc57d80465) fix(plugin): Also load curated plugins for TUI. (#14050) — _@xl-openai_
- [`75e6083`](https://github.com/openai/codex/commit/75e608343cfea3f667d5d0001b035af51b009cc7) Stabilize realtime startup context tests (#13876) — _@aibrahim-oai_
- [`4a0e6dc`](https://github.com/openai/codex/commit/4a0e6dc9163eccf8141a5478711ccdf1630f787c) Serialize shell snapshot stdin test (#13878) — _@aibrahim-oai_
- [`10bf600`](https://github.com/openai/codex/commit/10bf6008f4d76c56db86cafb2a45c1fc88024aaf) Stabilize thread resume replay tests (#13885) — _@aibrahim-oai_
- [`0dc242a`](https://github.com/openai/codex/commit/0dc242a67229c99ac1de63dbdd5adc1d17481575) Order websocket initialize after handshake (#13943) — _@aibrahim-oai_
- [`6b68d1e`](https://github.com/openai/codex/commit/6b68d1ef661263b0fa6bf9b1e1badffebfd64ee9) Stabilize plan item app-server tests (#14058) — _@aibrahim-oai_
- [`5d9db0f`](https://github.com/openai/codex/commit/5d9db0f9959a5ee2eec75e6bbd2f6b3a543802d2) Stabilize PTY Python REPL test (#13883) — _@aibrahim-oai_
- [`6052558`](https://github.com/openai/codex/commit/6052558a017b89cc62820b388f2cdd3ad5a3feda) Stabilize RMCP pid file cleanup test (#13881) — _@aibrahim-oai_
- [`615ed0e`](https://github.com/openai/codex/commit/615ed0e437afd9bfe0af4a8a8c9a2254227060e1) Stabilize zsh fork app-server tests (#13872) — _@aibrahim-oai_
- [`3f1280c`](https://github.com/openai/codex/commit/3f1280ce1c3ba33c7be769f3b44c4fb610aef3e7) Reduce app-server test timeout pressure (#13884) — _@aibrahim-oai_
- [`f23fcd6`](https://github.com/openai/codex/commit/f23fcd6ced0035f2aa4e34d4f12da4f04c8a7fa4) guardian initial feedback / tweaks (#13897) — _@charley-oai_
- [`2bc3e52`](https://github.com/openai/codex/commit/2bc3e52a91bb88a0e067a95f8f8559f8711d30e6) Stabilize app list update ordering test (#14052) — _@aibrahim-oai_
- [`06f82c1`](https://github.com/openai/codex/commit/06f82c123c6ed295f0ef19b5cbf49cf78bbc092e) feat(tui) render request_permissions calls (#14004) — _@dylan-hurd-oai_
- [`05332b0`](https://github.com/openai/codex/commit/05332b0e96197573a618b6df9adc41752cc87de9) fix(bazel) add missing app-server-client BUILD.bazel (#14027) — _@dylan-hurd-oai_
- [`e6b9384`](https://github.com/openai/codex/commit/e6b93841c585f8b56b2c9b38cb07708f278ea227) Add request permissions tool (#13092) — _@mousseau-oai_
- [`4ad3b59`](https://github.com/openai/codex/commit/4ad3b59de322dc75c2b257b2eec365309b195ab7) tui: clarify pending steer follow-ups (#13841) — _@charley-oai_
- [`f41b163`](https://github.com/openai/codex/commit/f41b1638c98deddd0d8f89d821999d30f73de599) fix(core) patch otel test (#14014) — _@dylan-hurd-oai_
- [`340f9c9`](https://github.com/openai/codex/commit/340f9c9ecb0b02a89e88c6dc068809007185f645) app-server: include experimental skill metadata in exec approval requests (#13929) — _@celia-oai_
- [`da3689f`](https://github.com/openai/codex/commit/da3689f0ef7422c3857e1156d4b78d3482cc26d6) Add in-process app server and wire up exec to use it (#14005) — _@etraut-openai_
- [`a684a36`](https://github.com/openai/codex/commit/a684a36091d70e1d8720fb99aafecd2a41ea7207) [app-server] Support hot-reload user config when batch writing config. (#13839) — _@mzeng-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
