# anomalyco/opencode — 2026-04-10

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-09T23:59:59.000Z → 2026-04-10T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v1.4.3 ships; sweeping Effect-based tool refactor lands

The day's headline is the **v1.4.3 release** ([877be7e](https://github.com/anomalyco/opencode/commit/877be7e)), which fixes `agent create` for OAuth-authenticated OpenAI accounts, preserves output from interrupted Bash commands instead of marking them aborted, adds fast-mode variants for supported Claude/GPT models, restores the hidden TUI session scrollbar as default, and (via @egze) adds configurable OAuth redirect URIs for remote MCP servers.

The much bigger story underneath is a **wholesale migration of opencode's tool layer to a new `Tool.defineEffect` abstraction**, driven almost entirely by @kitlangton in a single day. Internals were converted for `webfetch` (#21809), `websearch` (#21810), `codesearch` (#21811), `plan` (#21807), `lsp` (#21806), `question` (#21808), `bash` (#21895, now using a `ChildProcessSpawner`), `glob` (#21897), `list` (#21899), `write` (#21901), `edit` (#21904), `grep` (#21937), `apply_patch` (#21938), and `skill` (#21936). Anyone maintaining custom tools or extensions should read these — the tool authoring surface has effectively changed shape. Complementing this, #21953 introduces an `AppRuntime` for unified service composition, #21948 breaks a SessionPrompt/TaskTool cycle via context injection, #21795 moves tool descriptions into a registry, #21796 extracts a `SessionRevert` service, #21759 extracts session sharing orchestration, and #21803 routes file/storage through a Git service. Together these reshape the core service graph.

On the TUI/workspace side, @jlongster moved workspace state into project context with status reporting and UI improvements (#21896) and switched the TUI to global events while threading a workspace param (#21719).

Smaller but worth noting: a fix for the TypeScript LSP (#21827), a tweak so disabling uv or ruff formatters disables both (#21921), session compaction now keeps recent turns (6f5a3d3, refactored in aa86fb7), and the prod channel now uses the shared production database to prevent data fragmentation across channels (04074d3). CI was bumped to Node 24 to fix random ECONNRESETs (#21782), and a Windows e2e backend SIGTERM hang was fixed (#21781).

## Releases

- **[v1.4.3](https://github.com/anomalyco/opencode/releases/tag/v1.4.3)** — v1.4.3 _by @opencode-agent[bot] at 2026-04-10T01:00:36Z_
  > ## Core
  > 
  > - Fixed `agent create` for OpenAI accounts authenticated with OAuth.
  > - Interrupted Bash commands now keep their final output and truncation details instead of ending as aborted.
  > - Added fast mode variants for supported Claude and GPT models.
  > 
  > ## TUI
  > 
  > - Restored the hidden session scrollbar as the default.
  > 
  > ## Extensions
  > 
  > - Added configurable OAuth redirect URIs for remote MCP servers. (@egze)
  > 
  > **Thank you to 2 community contributors:**
  > - @egze:
  >   - feat(mcp): add OAuth redirect URI conf…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`5d6fe01`](https://github.com/anomalyco/opencode/commit/5d6fe014653dac2c0efb4497e4c8bbcd81936174) convert skill tool to Tool.defineEffect (#21936) — _@kitlangton_
- [`cf27a73`](https://github.com/anomalyco/opencode/commit/cf27a733971ebde73d3c986dfc8ace0336b0234b) feat: add AppRuntime for unified service composition (#21953) — _@kitlangton_
- [`f2c492a`](https://github.com/anomalyco/opencode/commit/f2c492a8e6efd3fb20d8d494345cd41d72aa4351) chore: generate — _@opencode-agent[bot]_
- [`0556774`](https://github.com/anomalyco/opencode/commit/0556774097b0223b1e547260d2b7f46640c6e884) refactor(tool): convert apply_patch to Tool.defineEffect (#21938) — _@kitlangton_
- [`d9d5a06`](https://github.com/anomalyco/opencode/commit/d9d5a0615e2fbfc702bbb8eca2557868b053a3aa) refactor: break SessionPrompt/TaskTool cycle via ctx injection (#21948) — _@kitlangton_
- [`d72ddd7`](https://github.com/anomalyco/opencode/commit/d72ddd71faf144864c985cd6372eeea7f2d4ba6f) refactor(tool): convert grep tool to Tool.defineEffect (#21937) — _@kitlangton_
- [`fb26308`](https://github.com/anomalyco/opencode/commit/fb26308bc70a3d515480edf435994e43752c72c8) chore: generate — _@opencode-agent[bot]_
- [`b41fa8e`](https://github.com/anomalyco/opencode/commit/b41fa8e318a6d67acd52dc746500d415f923afc6) refactor: convert edit tool to Tool.defineEffect (#21904) — _@kitlangton_
- [`57b2e64`](https://github.com/anomalyco/opencode/commit/57b2e64345c81fdbc9ea22cbba3889de994d2d53) chore: generate — _@opencode-agent[bot]_
- [`346b3e1`](https://github.com/anomalyco/opencode/commit/346b3e1b8d1925970e451583d6bb84e491eb9a99) zen: nemotron doc — _@fwang_
- [`b139bc2`](https://github.com/anomalyco/opencode/commit/b139bc2ef3de411ca0487817fc71958fba12b315) refactor(tool): convert write tool to Tool.defineEffect (#21901) — _@kitlangton_
- [`378b8ca`](https://github.com/anomalyco/opencode/commit/378b8ca241a1ddf7f902bf6271280d8b2e59af68) chore: generate — _@opencode-agent[bot]_
- [`f63bdc8`](https://github.com/anomalyco/opencode/commit/f63bdc8e08a179960fcfd1fe982354dfdf84b8fb) convert list tool to Tool.defineEffect (#21899) — _@kitlangton_
- [`ce26120`](https://github.com/anomalyco/opencode/commit/ce2612020564ace2bfe95a36f139a07ba237f563) tweak: make it so disabling uv or ruff fmters disables both (#21921) — _@rekram1-node_
- [`d2d5d84`](https://github.com/anomalyco/opencode/commit/d2d5d84d1e54159389aa5770254c0efa7bf88ba5) chore: generate — _@opencode-agent[bot]_
- [`847f1d9`](https://github.com/anomalyco/opencode/commit/847f1d99c9d4f8a55cff59d1d895ccd6895f927b) convert glob tool to Tool.defineEffect (#21897) — _@kitlangton_
- [`59d0868`](https://github.com/anomalyco/opencode/commit/59d08683eaa7dce988641c53dbaea3c64f24f58e) chore: generate — _@opencode-agent[bot]_
- [`f7514d9`](https://github.com/anomalyco/opencode/commit/f7514d9ecaaac58663fe8e3ee94536de80cc2fc9) refactor(tool): convert bash to defineEffect with ChildProcessSpawner (#21895) — _@kitlangton_
- [`180ded6`](https://github.com/anomalyco/opencode/commit/180ded6a27c49c0f95c8af5ff17ccacaa54eceab) rector(core,tui): handle workspace state in project context, add workspace status, improve ui (#21896) — _@jlongster_
- [`bf60162`](https://github.com/anomalyco/opencode/commit/bf601628db3c187478ff853fe33b91cec652355e) refactor(tool): convert codesearch tool internals to Effect (#21811) — _@kitlangton_
- [`00e39d2`](https://github.com/anomalyco/opencode/commit/00e39d211482115245149b2b036625faa7f4d973) chore: generate — _@opencode-agent[bot]_
- [`46b74e0`](https://github.com/anomalyco/opencode/commit/46b74e0873de310ef66c894012e19ac498cae4ac) refactor(tool): convert websearch tool internals to Effect (#21810) — _@kitlangton_
- [`aedc4e9`](https://github.com/anomalyco/opencode/commit/aedc4e964fce0be8dd15ed1a19836827b43acfab) chore: generate — _@opencode-agent[bot]_
- [`e834043`](https://github.com/anomalyco/opencode/commit/e83404367c31cca12dd828203741690c1890f16d) refactor(tool): convert webfetch tool internals to Effect (#21809) — _@kitlangton_
- [`42206da`](https://github.com/anomalyco/opencode/commit/42206da1f8f42add18b6a107f5df9b96a3bd59f9) refactor(tui): switch to global events and start passing workspace param (#21719) — _@jlongster_
- [`44f3819`](https://github.com/anomalyco/opencode/commit/44f38193c0ea4ffeb5bd9faa13598ffaca7c29e9) refactor(tool): convert plan tool internals to Effect (#21807) — _@kitlangton_
- [`9a6b455`](https://github.com/anomalyco/opencode/commit/9a6b455bfe0a4ad4ab45382e4cfb1be1e797723f) chore: generate — _@opencode-agent[bot]_
- [`8063e0b`](https://github.com/anomalyco/opencode/commit/8063e0b5c67de4622c3c77867c84734260f220fe) refactor(tool): convert lsp tool internals to Effect (#21806) — _@kitlangton_
- [`157c5d7`](https://github.com/anomalyco/opencode/commit/157c5d77f80571906ad3b5ac5527fa62b84adf23) refactor(tool): convert question tool internals to Effect (#21808) — _@kitlangton_
- [`ce19c05`](https://github.com/anomalyco/opencode/commit/ce19c051be86b5d0fff458bf4d74803c40c06350) fix: ts lsp (#21827) — _@rekram1-node_
- [`9819eb0`](https://github.com/anomalyco/opencode/commit/9819eb04614fd607cacb07d754052f1531a82331) tweak: disable — _@rekram1-node_
- [`aa86fb7`](https://github.com/anomalyco/opencode/commit/aa86fb75adb61cec725d3b2b26b574eb701008d7) refactor compaction tail selection — _@nexxeln_
- [`6f5a3d3`](https://github.com/anomalyco/opencode/commit/6f5a3d30fddbe09e555fb1c27b6a63551a73de36) keep recent turns during session compaction — _@nexxeln_
- [`91786d2`](https://github.com/anomalyco/opencode/commit/91786d2fc18c09a4b08846396e4d7f21b03e0c5c) refactor(effect): use Git service in file and storage (#21803) — _@kitlangton_
- [`eca11ca`](https://github.com/anomalyco/opencode/commit/eca11ca71ab34d5818a18754981c97bc03b62bc1) refactor(effect): use SessionRevert service in prompt (#21796) — _@kitlangton_
- [`17bd166`](https://github.com/anomalyco/opencode/commit/17bd16667c9706c1f210bb36e01a0d23bcdddb02) refactor(effect): move tool descriptions into registry (#21795) — _@kitlangton_
- [`16c60c9`](https://github.com/anomalyco/opencode/commit/16c60c9ee782285530ce88f5f36ea5eb7898d1c2) refactor(session): extract sharing orchestration (#21759) — _@kitlangton_
- [`0970b10`](https://github.com/anomalyco/opencode/commit/0970b102e1bcea4b02b736edb30c85d33acaef3f) Merge remote-tracking branch 'origin/dev' into dev — _@thdxr_
- [`04074d3`](https://github.com/anomalyco/opencode/commit/04074d3f4a62e039e11ff73e73b1a2be6f651439) core: enable prod channel to use shared production database — _@thdxr_
- [`b16ee08`](https://github.com/anomalyco/opencode/commit/b16ee08fd5c867fa1402237d53bb43d62a61cff2) ci use node 24 in test workflow fixing random ECONNRESET (#21782) — _@Hona_
- [`98874a0`](https://github.com/anomalyco/opencode/commit/98874a09f76402e9bdc5df197faab24f4e477c2f) fix windows e2e backend not stopping on sigterm waiting 10s for no reason (#21781) — _@Hona_
- [`877be7e`](https://github.com/anomalyco/opencode/commit/877be7e8e04142cd8fbebcb5e6c4b9617bf28cce) release: v1.4.3 — _@opencode_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
