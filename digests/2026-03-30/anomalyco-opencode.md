# anomalyco/opencode — 2026-03-30

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-29T23:59:59.000Z → 2026-03-30T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Three releases shipped today (`v1.3.7`, `v1.3.8`, `v1.3.9`), with `v1.3.7` carrying most of the user-visible weight and the later two being small follow-ups. The headline in `v1.3.7` is **first-class PowerShell/pwsh support on Windows** (#16069 by @Hona) — a long-standing gap for Windows users that's worth checking if you maintain Windows tooling or shell-integration plugins. `v1.3.7` also fixes `OPENCODE_DISABLE_CLAUDE_CODE_PROMPT` being ignored for project-level `CLAUDE.md`, and makes plugin installs preserve JSONC comments in config files. `v1.3.9` is a targeted fix for plugin entrypoint resolution when the path lacks a leading dot (#20140); `v1.3.8` had no notable changes.

Plugin/extensibility was the day's main theme. Beyond the entrypoint fix, the plugin loader was refactored to no longer enforce loading (#20112), plugin themes now refresh when a plugin updates (#20052), and a new pluggable home-footer extension point landed (#20057) — together these meaningfully expand what third-party plugins can customize.

Notable internals work: @kitlangton continued the Effect-ification push, replacing the `Filesystem` util with an `AppFileSystem` service (#20127) and effectifying `SessionPrompt` (#19483), plus a regression fix restoring busy-route handling in sessions (#20125). Provider/SDK fixes include bumping `ai-sdk/xai` to 3.0.75 to repair tool calls (#20123) and discouraging `_noop` tool calls during LiteLLM compaction (#18539). Smaller fixes: agent value not being stringified for `chat.params`/`chat.headers` hooks (#19996), image attachments being dropped when selecting slash commands (#19771), the variant modal being less intrusive (#19998), and stabilized release changelog generation (#19987). Docs renamed the `patch` tool to `apply_patch` and clarified its behavior (#19979).

Two `wip: zen` commits and several `zen: qwen3.6 plus` commits from @fwang on the dev branch hint at an unannounced "zen" feature in progress — worth watching but nothing shipped yet.

## Releases

- **[v1.3.9](https://github.com/anomalyco/opencode/releases/tag/v1.3.9)** — v1.3.9 _by @opencode-agent[bot] at 2026-03-30T23:44:21Z_
  > ## Core
  > 
  > - Fixed plugin entrypoint resolution for paths without leading dot
- **[v1.3.8](https://github.com/anomalyco/opencode/releases/tag/v1.3.8)** — v1.3.8 _by @opencode-agent[bot] at 2026-03-30T21:35:34Z_
  > No notable changes
- **[v1.3.7](https://github.com/anomalyco/opencode/releases/tag/v1.3.7)** — v1.3.7 _by @opencode-agent[bot] at 2026-03-30T06:06:44Z_
  > ## Core
  > 
  > - Added first-class PowerShell support on Windows
  > - Plugin installs now preserve JSONC comments in configuration files
  > - Fixed `OPENCODE_DISABLE_CLAUDE_CODE_PROMPT` not being respected for project-level CLAUDE.md
  > 
  > ## TUI
  > 
  > - Improved variant modal behavior to be less intrusive
  > - Added theme colors for dialog textarea placeholders
  > 
  > **Thank you to 2 community contributors:**
  > - @KnutZuidema:
  >   - fix: discourage _noop tool call during LiteLLM compaction (#18539)
  > - @yejiming:
  >   - docs: rename…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`057848d`](https://github.com/anomalyco/opencode/commit/057848deb847d59250e7db08ab2402f4a69bfcda) release: v1.3.9 — _@opencode_
- [`1de0645`](https://github.com/anomalyco/opencode/commit/1de06452d39872e980ca3992a1aca9b87b4469ac) fix(plugin): properly resolve entrypoints without leading dot (#20140) — _@Hona_
- [`58f6062`](https://github.com/anomalyco/opencode/commit/58f60629a1975fb67cedcbc5a2e0ca2322da3d68) wip: zen — _@fwang_
- [`39a47c9`](https://github.com/anomalyco/opencode/commit/39a47c9b8c4baebbdb6a45f723ff247527d8c24d) wip: zen — _@fwang_
- [`ea88044`](https://github.com/anomalyco/opencode/commit/ea88044f2ec39e373a03f65650b52e1ac24b34f2) chore: generate — _@opencode-agent[bot]_
- [`e6f6f7a`](https://github.com/anomalyco/opencode/commit/e6f6f7aff14e3d3c6950e1a0a4b8288a65d2e6b1) refactor: replace Filesystem util with AppFileSystem service (#20127) — _@kitlangton_
- [`48e97b4`](https://github.com/anomalyco/opencode/commit/48e97b47afaa201ebd15566cb51ab615a0423f47) release: v1.3.8 — _@opencode_
- [`fe120e3`](https://github.com/anomalyco/opencode/commit/fe120e3cbf19c8811de18eea149191444b7ce2c1) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`f2dd774`](https://github.com/anomalyco/opencode/commit/f2dd77466089a6e8d9f0618ff8c79614fd3d8b62) zen: qwen3.6 plus — _@fwang_
- [`e7ff0f1`](https://github.com/anomalyco/opencode/commit/e7ff0f17c88566222bcb7a2114cec9a51566753a) zen: qwen3.6 plus — _@fwang_
- [`2ed756c`](https://github.com/anomalyco/opencode/commit/2ed756c72cb3c525a540b7f98b6b9f87799178b9) fix(session): restore busy route handling and add regression coverage (#20125) — _@kitlangton_
- [`054f4be`](https://github.com/anomalyco/opencode/commit/054f4be18538531c7e61378ddbba8104f4a0fbb5) zen: add safety identifier — _@fwang_
- [`e3e1e9a`](https://github.com/anomalyco/opencode/commit/e3e1e9af507120cabfcdc31fd20227d67d3906e8) fix(Opencode): Bump ai-sdk/xai to 3.0.75 to fix tool calls (#20123) — _@Jaaneek_
- [`c8389cf`](https://github.com/anomalyco/opencode/commit/c8389cf96d4b03e535991b0de5d56900c7ac1d1b) chore: generate — _@opencode-agent[bot]_
- [`c5442d4`](https://github.com/anomalyco/opencode/commit/c5442d418dd94fdd0d719962e4e3cd9e029e79f5) refactor(session): effectify SessionPrompt service (#19483) — _@kitlangton_
- [`fa95a61`](https://github.com/anomalyco/opencode/commit/fa95a61c4e15d6b55ac2e3a1da0176ceca76d8c2) Refactor into plugin loader and do not enforce (#20112) — _@kommander_
- [`9f3c2bd`](https://github.com/anomalyco/opencode/commit/9f3c2bd861691e2415c027f87e23302b57026a6e) fix: agent value passed to chat.params and chat.headers hooks was not a string (#19996) — _@rekram1-node_
- [`c2f7822`](https://github.com/anomalyco/opencode/commit/c2f78224ae59263eada831051a6ece1c65126b1a) chore(app): cleanup (#20062) — _@adamdotdevin_
- [`14f9e21`](https://github.com/anomalyco/opencode/commit/14f9e21d5c3f4e853dee8ca133693dd3b915b634) pluggable home footer (#20057) — _@kommander_
- [`8e4bab5`](https://github.com/anomalyco/opencode/commit/8e4bab51812fccf3b69713904159a4394b3a29ab) update plugin themes when plugin was updated (#20052) — _@kommander_
- [`3c32013`](https://github.com/anomalyco/opencode/commit/3c32013eb122d794089e011d2ec7077395d6f1c4) fix: preserve image attachments when selecting slash commands (#19771) — _@MrMushrooooom_
- [`47d2ab1`](https://github.com/anomalyco/opencode/commit/47d2ab120a4fbc92e72aca4d5b40d722d0e4d2be) release: v1.3.7 — _@opencode_
- [`186af27`](https://github.com/anomalyco/opencode/commit/186af2723d7dab64453dfd43355fff55336e48b7) make variant modal less annoying (#19998) — _@Hona_
- [`6926fe1`](https://github.com/anomalyco/opencode/commit/6926fe1c7455f4cd075d374b188850c14cda0fb2) fix: stabilize release changelog generation (#19987) — _@Hona_
- [`ee018d5`](https://github.com/anomalyco/opencode/commit/ee018d5c82a593907bae9011bc074766e670d593) docs: rename patch tool to apply_patch and clarify apply_patch behavior (#19979) — _@yejiming_
- [`0465579`](https://github.com/anomalyco/opencode/commit/0465579d6bb6bf5a55febacd6b4b130f5238ac27) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`196a03c`](https://github.com/anomalyco/opencode/commit/196a03caff570d98a116c5c29e9fddda03b7c824) fix: discourage _noop tool call during LiteLLM compaction (#18539) — _@KnutZuidema_
- [`b234370`](https://github.com/anomalyco/opencode/commit/b2343700807e8ab33549a5a2fbd8652d9e1626f2) feat(windows): add first-class pwsh/powershell support (#16069) — _@Hona_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
