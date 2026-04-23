# cline/cline — 2026-02-24

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-02-23T23:59:59.000Z → 2026-02-24T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## cline/cline — 2026-02-24

Two releases shipped today: **v3.67.0** (#9509) in the morning and a same-day patch **v3.67.1** (#9528) in the evening. The headline feature is a new **Cline SDK API** for programmatic access to Cline features and tools (#9259) — the most consequential change to read if you embed or extend Cline. The patch release adds **Codex 5.3** model support and fixes OpenAI Codex by setting `store: false` (#9523), plus replaces fragile string matching with `isLocatedInPath()` for path containment checks (#9519, with tests in #9526).

On the model/provider front, the recommended model was bumped from GPT-5.2 Codex to **GPT-5.3 Codex** (#9533, retagged "NEW"), and the MiniMax provider gained **thinking support for M2.5** plus a new **M2.5-highspeed** variant (#9394). Featured models are now fetched from the backend with a local fallback (#9495).

Subagent infrastructure expanded meaningfully: **skills and optional `modelId` in subagent configs** landed under ENG-1564 (#9502), an `AgentConfigLoader` for file-based agent configs shipped as part of v3.67.0, and the PR skill moved to `.agents/skills` (#9505). Internal `focus_chain` placeholder tools are now filtered from the final native tool list (#9499).

Notable removals and cleanups: **voice mode UI and dictation are gone** (#9511) — worth flagging for anyone relying on them. tsconfig `baseUrl` was replaced with explicit relative paths across the repo (#9508), which may affect downstream tooling.

CLI/UX touch-ups include additional markdown formatting in the CLI (#9392), a `/q` quit command, focus indicators on extension action buttons (#9487), websocket preconnect for lower latency, and a dynamic banner cache flag. Observability got `CLINE_OTEL_EXPORTER_OTLP_HEADERS` parsing with enforced build-constant headers (#9534).

No new issues, open PRs, or community-filed PRs were recorded in the window — activity was entirely maintainer-driven around the 3.67 release train. Start with the SDK (#9259), then the 3.67.1 changelog and #9519/#9523 if you depend on Codex or path handling.

## Releases

- **[v3.67.1](https://github.com/cline/cline/releases/tag/v3.67.1)** — v3.67.1 _by @github-actions[bot] at 2026-02-24T22:33:37Z_
  > ### Added
  > 
  > - Added Cline SDK API interface for programmatic access to Cline features and tools, enabling integration into custom applications.
  > - Added Codex 5.3 model support
  > 
  > ### Fixed
  > 
  > - Fix OpenAI Codex by setting `store` to `false`
  > - Use `isLocatedInPath()` instead of string matching for path containment checks
  > 
  > **Full Changelog**: https://github.com/cline/cline/compare/v2.4.3-cli...v3.67.1
- **[v3.67.0](https://github.com/cline/cline/releases/tag/v3.67.0)** — v3.67.0 _by @github-actions[bot] at 2026-02-24T02:22:27Z_
  > ### Added
  > 
  > - Add support for skills and optional modelId in subagent configuration
  > - Add AgentConfigLoader for file-based agent configs
  > - Add Responses API support for OpenAI native provider
  > - Preconnect websocket to reduce response latency
  > - Fetch featured models from backend with local fallback
  > - Add /q command to quit CLI
  > - Add MCP enterprise configuration details
  > - Pull Cline's recommended models from internal endpoint
  > - Add dynamic flag to adjust banner cache duration
  > 
  > ### Fixed
  > 
  > - Fix reas…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`f10b6f3`](https://github.com/cline/cline/commit/f10b6f39be17f24c3a410ae5780eb7adf15473b8) Add Additional Markdown Formatting in CLI (#9392) — _@shey-cline_
- [`42e6a24`](https://github.com/cline/cline/commit/42e6a24d0fad9eecc8b412687219ecc260efc3e4) Add Focus Indicator on Action Buttons in Extension (#9487) — _@shey-cline_
- [`452733c`](https://github.com/cline/cline/commit/452733c3fddb6fffa9b06fbd4c96a0f5e88400d8) Release changeset PR (#9528) — _@candieduniverse_
- [`7fadcfa`](https://github.com/cline/cline/commit/7fadcfaa3f634cb33a1143c808f0cedbbb37c96f) feat: add thinking to MiniMax M2.5 and add the M2.5-highspeed model to MiniMax provider (#9394) — _@Juan Pablo Flores_
- [`9989225`](https://github.com/cline/cline/commit/9989225b69b9e7152eebefc01edf0c1a9d0d421c) Parse CLINE_OTEL_EXPORTER_OTLP_HEADERS headers and force the build constant ones (#9534) — _@BarreiroT_
- [`8a73f63`](https://github.com/cline/cline/commit/8a73f631893cadd952543783ef932257db557c98) feat: update recommended model from GPT-5.2 Codex to GPT-5.3 Codex (#9533) — _@arafatkatze_
- [`31e8c85`](https://github.com/cline/cline/commit/31e8c85f0a5e038bd02b160fc4cc18c5ba611b00) Remove voice mode UI and disable dictation (#9511) — _@arafatkatze_
- [`5b99168`](https://github.com/cline/cline/commit/5b9916866d41fb72aee2f33e6c96d262a37a45c1) fix: remove placeholder tools from final native tool list (#9499) — _@abeatrix_
- [`f001e73`](https://github.com/cline/cline/commit/f001e735f85b05737306eb25164587fa3e2d6520) Add isLocatedInPath tests (#9526) — _@BarreiroT_
- [`32893ee`](https://github.com/cline/cline/commit/32893ee343d3fbc1905e7ef1a254b770abb23183) Fix OpenAI Codex by setting Store to false (#9523) — _@BarreiroT_
- [`0d4e47e`](https://github.com/cline/cline/commit/0d4e47e5c376724185b8a9491aa970d0646449fd) fix: use isLocatedInPath() instead of string.includes() for path containment check (#9519) — _@CodeForContribute_
- [`c1a4348`](https://github.com/cline/cline/commit/c1a43482e71f4104c858b58216d9eb7ea9998770) sdk lib (#9259) — _@maxpaulus43_
- [`ea65383`](https://github.com/cline/cline/commit/ea65383e1666e80ce9f7521b7532362a61b057cf) chore: replace baseUrl with explicit relative paths in tsconfig files (#9508) — _@abeatrix_
- [`b97d148`](https://github.com/cline/cline/commit/b97d1487a7c02416e64abba2e1c88a3d88e6878f) Release V3.67.0 (#9509) — _@arafatkatze_
- [`091cf94`](https://github.com/cline/cline/commit/091cf945e41966aaadef4b4435f41e15ec413d6d) Move PR skill to .agents/skills (#9505) — _@robinnewhouse_
- [`df4f551`](https://github.com/cline/cline/commit/df4f551ba7200a01777e4d9f20f81e0c0e9e5704) feat: add support for skills and optional modelId in subagent config (ENG-1564) (#9502) — _@abeatrix_
- [`88da4dd`](https://github.com/cline/cline/commit/88da4ddf893eba5e5ef569095bc14a8b3bffbe27) feat: fetch featured models from backend with local fallback (#9495) — _@arafatkatze_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
