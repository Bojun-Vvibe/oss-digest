# anomalyco/opencode — 2026-04-23

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-22T23:59:59.000Z → 2026-04-23T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v1.14.21 release dominates the day, but ships with serious regressions

The headline event is the **v1.14.21 release**, which lands C#/Kotlin pull-diagnostics support (#23771), bare-repo project caching (#19054), improved session compaction (#23870), UTF-8 BOM preservation in edit tools (#23797), and a Roslyn-based C# LSP. The release notes are worth reading first.

However, the release is generating a wave of **regression reports worth triaging immediately**:

- **#23968** — Desktop v1.14.21: extreme lag, cannot stop tasks, cannot restart, OpenCode opens many duplicate sessions. Likely the most urgent new bug.
- **#23961**, **#23949** — Windows users cannot launch the CLI / get a pure-white GUI on v1.14.21.
- **#23953** — Avira flags v1.14.21 binary as `tr/w64.evo`.
- **#23937**, **#23939** — LSP stopped working / `oxlint` LSP never starts since 1.14.20+; documentation says LSP is on by default but may actually be treated as disabled when `lsp` key is absent.
- **#23942** — `EUNKNOWN: uv_spawn` hang on Windows in Plan mode with GPT-5.4.

On the merged-PR side the day is quiet — only two land: a Show-component reactivity fix (#23935) and a working-memo cleanup (#23929), plus a small codex model tweak (#23925). Notable open PRs to review: a runtime-aware search service backed by `fff-bun` with ripgrep fallback (#23890), a `/disconnect` provider command (#23965), favorite/recent sections in model pickers (#23671), and a fix for stale TUI status-bar token usage after first prompt and `/compact` (#23963, closing #23962 which was already resolved).

Other noteworthy issues: ACP emits generic tool titles before completion (#23947, fix proposed in #23948); Qwen3.6-Plus streaming fails Zod discriminator validation (#23960); Bedrock EU Anthropic models return "invalid model identifier" (#23936); and the ongoing Memory Megathread (#20695) continues collecting heap snapshots.

## Releases

- **[v1.14.21](https://github.com/anomalyco/opencode/releases/tag/v1.14.21)** — v1.14.21 _by @opencode-agent[bot] at 2026-04-23T05:45:23Z_
  > ## Core
  > - Support pull diagnostics from LSP servers that use them, including C# and Kotlin.
  > - Fix project detection and caching for bare Git repos and worktrees. (@StevenTCramer)
  > - Improve session compaction so long threads keep more useful context when older history is summarized.
  > - Preserve UTF-8 BOMs when files are edited, patched, or rewritten through tools.
  > - Use Roslyn Language Server for C# support instead of `csharp-ls`. (@jmbryan4)
  > - Add the high reasoning variant for supported Mistral…


## Merged PRs

- [#23935](https://github.com/anomalyco/opencode/pull/23935) **fix: add keyed prop to Show components for proper reactivity** — _by @Brendonovich, merged 2026-04-23T09:32:01Z_
- [#23768](https://github.com/anomalyco/opencode/pull/23768) **fix(app): improve icon override handling in project edit dialog** — _by @Brendonovich, merged 2026-04-22T05:36:20Z_
- [#23929](https://github.com/anomalyco/opencode/pull/23929) **refactor: remove redundant pending check from working memo** — _by @Brendonovich, merged 2026-04-23T05:15:02Z_
- [#23925](https://github.com/anomalyco/opencode/pull/23925) **tweak: codex model logic** — _by @rekram1-node, merged 2026-04-23T04:29:56Z_


## Open PRs (new or updated)

- [#23890](https://github.com/anomalyco/opencode/pull/23890) **feat(search): add runtime-aware search service with fff** — _by @nexxeln, updated 2026-04-23T10:34:24Z_
- [#23395](https://github.com/anomalyco/opencode/pull/23395) **fix(tui): update toast duration handling to use default value** — _by @OpeOginni, updated 2026-04-23T10:32:40Z_
- [#23964](https://github.com/anomalyco/opencode/pull/23964) **fix(enterprise): message nav hovercard and active state** — _by @OpeOginni, updated 2026-04-23T10:31:37Z_
- [#23967](https://github.com/anomalyco/opencode/pull/23967) **12** — _by @vepretski, updated 2026-04-23T10:20:52Z_
- [#23671](https://github.com/anomalyco/opencode/pull/23671) **feat(app): add favorite and recent sections to model pickers** — _by @mattiacerutti, updated 2026-04-23T10:16:39Z_
- [#23966](https://github.com/anomalyco/opencode/pull/23966) **feat(desktop-electron): add More Tools menu with Translate options** — _by @youngergerger, updated 2026-04-23T10:12:25Z_
- [#23965](https://github.com/anomalyco/opencode/pull/23965) **feat(tui): add provider disconnect command** — _by @kzekiue, updated 2026-04-23T10:04:40Z_
- [#18767](https://github.com/anomalyco/opencode/pull/18767) **feat(app): Mobile Touch Optimization** — _by @noahbentusi, updated 2026-04-23T09:58:54Z_
- [#13854](https://github.com/anomalyco/opencode/pull/13854) **fix(tui): stop streaming markdown/code after message completes** — _by @mocksoul, updated 2026-04-23T09:58:54Z_
- [#23955](https://github.com/anomalyco/opencode/pull/23955) **feat(project): add icon_url_override field to projects** — _by @Brendonovich, updated 2026-04-23T09:31:27Z_
- [#22587](https://github.com/anomalyco/opencode/pull/22587) **fix: fallback custom model output limit to OUTPUT_TOKEN_MAX instead of 0** — _by @comzip, updated 2026-04-23T09:26:04Z_
- [#21832](https://github.com/anomalyco/opencode/pull/21832) **fix(npm): bypass @npmcli/agent to fix proxy env var crash** — _by @GoldJohnKing, updated 2026-04-23T08:57:24Z_
- [#23950](https://github.com/anomalyco/opencode/pull/23950) **feat: bump appstream.metainfo.xml version in publish script** — _by @razzeee, updated 2026-04-23T08:43:23Z_
- [#23948](https://github.com/anomalyco/opencode/pull/23948) **fix(opencode): prefer semantic ACP tool title and input before completion** — _by @nizheming, updated 2026-04-23T08:31:24Z_
- [#22149](https://github.com/anomalyco/opencode/pull/22149) **fix: reuse OpenAI Responses previous_response_id across turns** — _by @YanzheL, updated 2026-04-23T08:25:38Z_
- [#17618](https://github.com/anomalyco/opencode/pull/17618) **feat(formatters): add stylua, nimpretty, and elm-format formatters** — _by @sahitya-chandra, updated 2026-04-23T08:20:32Z_
- [#18306](https://github.com/anomalyco/opencode/pull/18306) **feat(opencode): add Open WebUI provider** — _by @SamirMoustafa, updated 2026-04-23T08:03:43Z_
- [#20039](https://github.com/anomalyco/opencode/pull/20039) _(draft)_ **refactor: split bash tool into bash/pwsh/powershell** — _by @Hona, updated 2026-04-23T07:35:17Z_
- [#23501](https://github.com/anomalyco/opencode/pull/23501) **fix: OpenAI-compatible provider improvements (system messages, image support, stream interruption)** — _by @jwcrystal, updated 2026-04-23T06:56:44Z_
- [#23848](https://github.com/anomalyco/opencode/pull/23848) **Feat/scroll navigation buttons dev** — _by @SOUMITRO-SAHA, updated 2026-04-23T06:47:50Z_
- [#18761](https://github.com/anomalyco/opencode/pull/18761) **fix(opencode): Use standard resolve function to get proper filePaths for tools** — _by @OpeOginni, updated 2026-04-23T06:26:29Z_
- [#23822](https://github.com/anomalyco/opencode/pull/23822) **ci: add platform-specific bun install flags** — _by @Brendonovich, updated 2026-04-23T06:22:28Z_
- [#23737](https://github.com/anomalyco/opencode/pull/23737) **fix: silently skip tool calls during summary generation (#23709)** — _by @PratikRai0101, updated 2026-04-23T06:21:34Z_
- [#19211](https://github.com/anomalyco/opencode/pull/19211) **feat: let MCP notifications drive TUI interactions** — _by @Shodocan, updated 2026-04-23T06:17:51Z_
- [#16024](https://github.com/anomalyco/opencode/pull/16024) **fix: show streaming progress for large tool inputs instead of stuck Preparing write** — _by @guazi04, updated 2026-04-23T05:45:00Z_
- [#23927](https://github.com/anomalyco/opencode/pull/23927) **fix(provider): preserve Bedrock Claude reasoning replay** — _by @PershingSquare, updated 2026-04-23T04:51:46Z_
- [#20602](https://github.com/anomalyco/opencode/pull/20602) _(draft)_ **shell as config + desktop settings UI for it** — _by @Hona, updated 2026-04-23T04:39:40Z_
- [#7334](https://github.com/anomalyco/opencode/pull/7334) **feat: Implement MCP server instruction fetching and integration** — _by @seuros, updated 2026-04-23T04:27:50Z_
- [#7156](https://github.com/anomalyco/opencode/pull/7156) **feat: add variant support for subagents (#7138) [alt of #7140]** — _by @CasualDeveloper, updated 2026-04-23T04:27:50Z_
- [#7119](https://github.com/anomalyco/opencode/pull/7119) **fix(tui): display dynamically registered MCP servers in status** — _by @altendky, updated 2026-04-23T04:27:50Z_
- [#7049](https://github.com/anomalyco/opencode/pull/7049) **fix: clear tool output and attachments when pruning to prevent memory leak** — _by @hendem, updated 2026-04-23T04:27:50Z_
- [#6629](https://github.com/anomalyco/opencode/pull/6629) _(draft)_ **feat(telemetry): add OpenTelemetry instrumentation with Aspire Dashboard support** — _by @Hona, updated 2026-04-23T04:27:50Z_
- [#6287](https://github.com/anomalyco/opencode/pull/6287) **feat: add Google Vertex AI service account JSON authentication** — _by @sandys, updated 2026-04-23T04:27:50Z_
- [#6233](https://github.com/anomalyco/opencode/pull/6233) **feat(lsp): add restartServer operation** — _by @JackNorris, updated 2026-04-23T04:27:50Z_
- [#6166](https://github.com/anomalyco/opencode/pull/6166) **feat(tui): allow session names to wrap to two lines in dialog (#6165)** — _by @CasualDeveloper, updated 2026-04-23T04:27:50Z_
- [#6130](https://github.com/anomalyco/opencode/pull/6130) **feat(tui): add configurable syntax tokens for XML/HTML tags (#6128)** — _by @CasualDeveloper, updated 2026-04-23T04:27:50Z_
- [#6093](https://github.com/anomalyco/opencode/pull/6093) **feat: add persistent sidebar overlay toggle in command palette (resolves #6086)** — _by @ariane-emory, updated 2026-04-23T04:27:50Z_
- [#5903](https://github.com/anomalyco/opencode/pull/5903) **feat(tui): Allow keybinding of custom slash commands (resolves #5904)** — _by @ariane-emory, updated 2026-04-23T04:27:50Z_
- [#5765](https://github.com/anomalyco/opencode/pull/5765) **fix: sidebar updates for /undo and compacting** — _by @flatsponge, updated 2026-04-23T04:27:50Z_
- [#5657](https://github.com/anomalyco/opencode/pull/5657) **feat: toggle transparent background** — _by @JosXa, updated 2026-04-23T04:27:50Z_
- [#5422](https://github.com/anomalyco/opencode/pull/5422) **feat(provider): add provider-specific cache configuration system (significant token usage reduction)** — _by @ormandj, updated 2026-04-23T04:27:50Z_
- [#5245](https://github.com/anomalyco/opencode/pull/5245) **feat: integrate OpenTelemetry** — _by @tianhuil, updated 2026-04-23T04:27:50Z_
- [#5134](https://github.com/anomalyco/opencode/pull/5134) **feat:  add support for JSONC in user theme files and add test coverage for theme loading functionality (resolves #4927)** — _by @ariane-emory, updated 2026-04-23T04:27:50Z_
- [#5092](https://github.com/anomalyco/opencode/pull/5092) **feat: {env:MY_VAR} support in the frontmatter of agent/command markdown files (resolves #5054, #5082)** — _by @ariane-emory, updated 2026-04-23T04:27:50Z_
- [#5020](https://github.com/anomalyco/opencode/pull/5020) **feat: add layout system for TUI** — _by @michaeldstenner, updated 2026-04-23T04:27:50Z_
- [#4917](https://github.com/anomalyco/opencode/pull/4917) **feat: tool description for the Bash tool now advises model as to what the actual shell in use is (resolves #4866)** — _by @ariane-emory, updated 2026-04-23T04:27:50Z_
- [#4887](https://github.com/anomalyco/opencode/pull/4887) **feat(tui): base16 theme** — _by @snelling-a, updated 2026-04-23T04:27:50Z_
- [#4865](https://github.com/anomalyco/opencode/pull/4865) **feat: add subagents sidebar with clickable navigation and parent keybind** — _by @franlol, updated 2026-04-23T04:27:50Z_
- [#4604](https://github.com/anomalyco/opencode/pull/4604) **feat(formatter): restrict formatting to only the changed range of a file. ** — _by @micuintus, updated 2026-04-23T04:27:50Z_
- [#1589](https://github.com/anomalyco/opencode/pull/1589) **feat: Support images in tool responses** — _by @jgontrum, updated 2026-04-23T04:27:50Z_
- [#418](https://github.com/anomalyco/opencode/pull/418) **feat(Discord): add rich presence support** — _by @enchantednatures, updated 2026-04-23T04:27:50Z_
- [#11297](https://github.com/anomalyco/opencode/pull/11297) **Showcase DeepWiki and DuckDuckGo search MCP servers** — _by @art-shen, updated 2026-04-23T04:27:49Z_
- [#9980](https://github.com/anomalyco/opencode/pull/9980) **feat: Display MCP and tools available in command.** — _by @Eric-Guo, updated 2026-04-23T04:27:49Z_
- [#9871](https://github.com/anomalyco/opencode/pull/9871) **feat: add /reload slash command** — _by @JosXa, updated 2026-04-23T04:27:49Z_
- [#9704](https://github.com/anomalyco/opencode/pull/9704) **fix(opencode): skip ignored messages in undo/redo commands** — _by @Tarquinen, updated 2026-04-23T04:27:49Z_
- [#9545](https://github.com/anomalyco/opencode/pull/9545) **feat(usage): unified usage tracking with auth refresh (#9281)** — _by @CasualDeveloper, updated 2026-04-23T04:27:49Z_
- [#9365](https://github.com/anomalyco/opencode/pull/9365) **feat(session): add support for per-session working directories** — _by @ssmirr, updated 2026-04-23T04:27:49Z_
- [#9289](https://github.com/anomalyco/opencode/pull/9289) **feat(tool): expose session context to child processes via environment variables** — _by @klimkin, updated 2026-04-23T04:27:49Z_
- [#9272](https://github.com/anomalyco/opencode/pull/9272) **feat(hook): session.before.idle** — _by @spoons-and-mirrors, updated 2026-04-23T04:27:49Z_
- [#9261](https://github.com/anomalyco/opencode/pull/9261) **feat(opencode): Added {env:VAR} substitution to markdown-based config parsing** — _by @Eric-Guo, updated 2026-04-23T04:27:49Z_
- [#9164](https://github.com/anomalyco/opencode/pull/9164) **feat: add Kiro provider** — _by @ikeda-tomoya-swx, updated 2026-04-23T04:27:49Z_
- [#9149](https://github.com/anomalyco/opencode/pull/9149) **fix(disposal): Complete Instance disposal chain for plugins and caches** — _by @sauerdaniel, updated 2026-04-23T04:27:49Z_
- [#9141](https://github.com/anomalyco/opencode/pull/9141) **feat(util): Add bounded LRU cache utility** — _by @sauerdaniel, updated 2026-04-23T04:27:49Z_
- [#9139](https://github.com/anomalyco/opencode/pull/9139) **feat(ui): Add thinking/reasoning block visibility toggle** — _by @sauerdaniel, updated 2026-04-23T04:27:49Z_
- [#9097](https://github.com/anomalyco/opencode/pull/9097) **feat(agent): allow pinning messages to keep them after compaction** — _by @Killusions, updated 2026-04-23T04:27:49Z_
- [#9095](https://github.com/anomalyco/opencode/pull/9095) **fix(TUI): complete auth fix for TUI with server password (HTTP mode)** — _by @LeonMueller-OneAndOnly, updated 2026-04-23T04:27:49Z_
- [#9078](https://github.com/anomalyco/opencode/pull/9078) **feat(mcp): support explicit OAuth callback host binding** — _by @chrisolszewski, updated 2026-04-23T04:27:49Z_
- [#9034](https://github.com/anomalyco/opencode/pull/9034) **feat(mcp): add OAuth redirect URI configuration for MCP servers** — _by @christso, updated 2026-04-23T04:27:49Z_


## Closed PRs (not merged)

- [#23963](https://github.com/anomalyco/opencode/pull/23963) **fix(tui): keep status-bar token usage reactive after first prompt and /compact** — _by @nxank4, closed 2026-04-23T10:28:48Z_
- [#23946](https://github.com/anomalyco/opencode/pull/23946) **[codex] Add CodeRabbit Skills to ecosystem** — _by @nehal-a2z, closed 2026-04-23T08:31:33Z_
- [#23945](https://github.com/anomalyco/opencode/pull/23945) **fix(tui): defer CLI --agent flag until agent list loads** — _by @Bojun-Vvibe, closed 2026-04-23T08:19:25Z_
- [#14675](https://github.com/anomalyco/opencode/pull/14675) **feat(session): add /dump-context command for inference context debugging** — _by @ualtinok, closed 2026-04-23T08:07:45Z_
- [#23938](https://github.com/anomalyco/opencode/pull/23938) **fix(tui): apply default duration when toast.show called without duration** — _by @Bojun-Vvibe, closed 2026-04-23T08:07:06Z_
- [#14643](https://github.com/anomalyco/opencode/pull/14643) **fix(opencode): use api.npm to detect Anthropic SDK for cache control** — _by @llc1123, closed 2026-04-23T06:34:10Z_
- [#14641](https://github.com/anomalyco/opencode/pull/14641) **fix(opencode): support interleaved reasoning_content for anthropic protocol non-Claude models** — _by @llc1123, closed 2026-04-23T06:34:06Z_
- [#14637](https://github.com/anomalyco/opencode/pull/14637) **fix(opencode): support interleaved reasoning_content for anthropic protocol non-Claude models** — _by @llc1123, closed 2026-04-23T06:34:02Z_
- [#14629](https://github.com/anomalyco/opencode/pull/14629) **fix: re-check length after trailing newline pop in BlockAnchorReplacer** — _by @kevinWangSheng, closed 2026-04-23T06:33:59Z_
- [#14626](https://github.com/anomalyco/opencode/pull/14626) **fix: sort glob results for deterministic load order across all callers** — _by @kevinWangSheng, closed 2026-04-23T06:33:55Z_
- [#14624](https://github.com/anomalyco/opencode/pull/14624) **fix(config): log warning when plugin path resolution fails** — _by @kevinWangSheng, closed 2026-04-23T06:33:52Z_
- [#14588](https://github.com/anomalyco/opencode/pull/14588) **feat(acp): surface tool metadata in in_progress notifications** — _by @ezynda3, closed 2026-04-23T06:33:49Z_
- [#14581](https://github.com/anomalyco/opencode/pull/14581) **fix(opencode): prevent cross-drive path bypass in Filesystem.contains on Windows** — _by @Nicoo01x, closed 2026-04-23T06:33:45Z_
- [#14578](https://github.com/anomalyco/opencode/pull/14578) **feat(grpc): implement comprehensive gRPC service layer** — _by @dl-alexandre, closed 2026-04-23T06:33:42Z_
- [#14568](https://github.com/anomalyco/opencode/pull/14568) **fix(opencode): remove OPENCODE_SERVER_PASSWORD from the env after read** — _by @judepereira, closed 2026-04-23T06:33:38Z_
- [#14554](https://github.com/anomalyco/opencode/pull/14554) **feat(cli): add --format json option to models command** — _by @kevinWangSheng, closed 2026-04-23T06:33:35Z_
- [#14545](https://github.com/anomalyco/opencode/pull/14545) **fix(config): skip {file:} substitution only when no active lines match** — _by @kevinWangSheng, closed 2026-04-23T06:33:31Z_
- [#14523](https://github.com/anomalyco/opencode/pull/14523) **feat(opencode): Add cost of the models in the model picker** — _by @ak127a, closed 2026-04-23T06:33:28Z_
- [#14518](https://github.com/anomalyco/opencode/pull/14518) **fix: preserve duplicate skills and expose scope in slash autocomplete** — _by @jaried, closed 2026-04-23T06:33:24Z_
- [#14503](https://github.com/anomalyco/opencode/pull/14503) **fix(cli): respect -m flag over agent model config** — _by @DerrickBarra, closed 2026-04-23T06:33:21Z_
- [#14411](https://github.com/anomalyco/opencode/pull/14411) **fix(ui): show bash command in tool trigger during execution** — _by @abrekhov, closed 2026-04-23T06:33:18Z_
- [#13596](https://github.com/anomalyco/opencode/pull/13596) **Kore-dera theme for longer working session in TUI** — _by @mohitSharma74, closed 2026-04-23T06:33:14Z_
- [#13528](https://github.com/anomalyco/opencode/pull/13528) **feat(tui): add worktree support for session creation** — _by @abrekhov, closed 2026-04-23T06:33:11Z_
- [#12544](https://github.com/anomalyco/opencode/pull/12544) **fix(provider): convert thinking.budgetTokens to snake_case for openai-compatible SDK** — _by @Chesars, closed 2026-04-23T06:33:07Z_
- [#12096](https://github.com/anomalyco/opencode/pull/12096) **feat(opencode): load .opencode/AGENTS.md instructions** — _by @skabillium, closed 2026-04-23T06:33:04Z_
- [#23930](https://github.com/anomalyco/opencode/pull/23930) **37 commt** — _by @vaur94, closed 2026-04-23T05:48:30Z_
- [#11414](https://github.com/anomalyco/opencode/pull/11414) **feat: Add native Jupyter notebook (.ipynb) support** — _by @pnpm-aftab, closed 2026-04-12T06:29:26Z_
- [#23916](https://github.com/anomalyco/opencode/pull/23916) **fix(task): accept agent aliases and retry blank text-only subtask output** — _by @coniferconcepts, closed 2026-04-23T04:31:33Z_


## Notable Issues

- [#23968](https://github.com/anomalyco/opencode/issues/23968) **v1.14.21 Desktop: Extreme lag, erratic behaviour, cannot stop task, cannot restart, cannot start new task** _[bug, windows, perf, web]_ — _by @christophbouvier_
- [#23298](https://github.com/anomalyco/opencode/issues/23298) **[FEATURE]: Support Anthropic `defer_loading` passthrough in tool definitions** _[core]_ — _by @M0Rf30_
- [#23962](https://github.com/anomalyco/opencode/issues/23962) **TUI status-bar token usage stale after first prompt and /compact** _[windows]_ — _by @nxank4_ _(closed 2026-04-23T10:28:57Z)_
- [#16878](https://github.com/anomalyco/opencode/issues/16878) **Old sessions cannot be loaded** _[bug, core]_ — _by @Laurenz-Ruzicka_
- [#19191](https://github.com/anomalyco/opencode/issues/19191) **[Bug] History session cannot be viewed in OpenCode Desktop - Session not found error** _[bug, windows, web]_ — _by @nerokingz_
- [#13984](https://github.com/anomalyco/opencode/issues/13984) **can not copy and paste in opencode CLI** _[bug, core]_ — _by @hongyesuifeng_
- [#23961](https://github.com/anomalyco/opencode/issues/23961) **not being able to open opencode** _[bug, windows]_ — _by @Rahban1_
- [#23957](https://github.com/anomalyco/opencode/issues/23957) **Trying to import Markdown session transcript fails with "File not found" instead "Unsupported format"** _[bug, core]_ — _by @sylv-io_
- [#23049](https://github.com/anomalyco/opencode/issues/23049) **Agent names displayed incorrectly with ZWSP characters in TUI (e.g., "Ultraworker" → "ltraworker")** — _by @CoolstrangerFJ_
- [#14794](https://github.com/anomalyco/opencode/issues/14794) **i have a provider poixe,Base URL： https://api.poixe.com/,but i cannot use!** _[core]_ — _by @freewinder-tech_
- [#7624](https://github.com/anomalyco/opencode/issues/7624) **[FEATURE]: Base path / prefix routing support** _[discussion]_ — _by @hsteude_
- [#22861](https://github.com/anomalyco/opencode/issues/22861) **Bug: Big Pickle stops response early** _[bug, core]_ — _by @Minterl_
- [#23960](https://github.com/anomalyco/opencode/issues/23960) **Qwen3.6-Plus streaming fails with Zod invalid_union on content block type discriminator** _[bug, windows, core]_ — _by @sinlalune_
- [#23959](https://github.com/anomalyco/opencode/issues/23959) **Update current task label in sidebar** _[web]_ — _by @henno_ _(closed 2026-04-23T09:41:01Z)_
- [#23958](https://github.com/anomalyco/opencode/issues/23958) **Use of Tooltips for the Messages in Shared sessions doesn't work** _[bug, web]_ — _by @OpeOginni_
- [#11091](https://github.com/anomalyco/opencode/issues/11091) **Bug Report: MiniMax Tool Call Compatibility Issue (Windows Only)** _[bug, windows]_ — _by @menglongyuan_
- [#23956](https://github.com/anomalyco/opencode/issues/23956) **server_error with OpenAI provider in OpenCode CLI, while direct Codex CLI works fine** _[windows, core]_ — _by @reimurashiki_
- [#21155](https://github.com/anomalyco/opencode/issues/21155) **TypeError: undefined is not an object (evaluating 'schema2._zod.def') - zod v3/v4 conflict when plugins bundle zod v4** _[core]_ — _by @hrygo_
- [#23944](https://github.com/anomalyco/opencode/issues/23944) **Very frequent errors when using openai** _[bug, core]_ — _by @berenddeboer_
- [#5444](https://github.com/anomalyco/opencode/issues/5444) **MCP with oauth doesn't work** _[bug]_ — _by @klaudworks_
- [#7583](https://github.com/anomalyco/opencode/issues/7583) **opencode ide: file not get updated after editing outside opencode ide** _[bug, windows, web]_ — _by @circleapps_
- [#23954](https://github.com/anomalyco/opencode/issues/23954) **[FEATURE]: Support / release build without AVX2 for macOS OR ability to use external Bun runtime without AVX2** _[discussion]_ — _by @mjcm-dev_
- [#23953](https://github.com/anomalyco/opencode/issues/23953) **Avira report: tr/w64.evo in v1.14.21** _[bug, windows]_ — _by @bj9421_
- [#11738](https://github.com/anomalyco/opencode/issues/11738) **[FEATURE]: Allow changing cursor style from block to bar/line** _[opentui, discussion]_ — _by @aree6_ _(closed 2026-02-02T06:15:20Z)_
- [#23813](https://github.com/anomalyco/opencode/issues/23813) **列出文件失败** _[bug, core]_ — _by @QFinn-Penguin_
- [#23947](https://github.com/anomalyco/opencode/issues/23947) **ACP tool_call/tool_call_update use generic titles while running** _[core, acp]_ — _by @nizheming_
- [#23952](https://github.com/anomalyco/opencode/issues/23952) **[BUG] The opencode-desktop app cannot be displayed.** _[bug, web]_ — _by @devcxl_
- [#23951](https://github.com/anomalyco/opencode/issues/23951) **`opencode mcp auth` does not print authorize URL to terminal, making it unusable over SSH** _[bug, core]_ — _by @forrust_
- [#23933](https://github.com/anomalyco/opencode/issues/23933) **No model Kimi K2.6** _[bug, windows, core]_ — _by @lebedead_ _(closed 2026-04-23T07:22:18Z)_
- [#23949](https://github.com/anomalyco/opencode/issues/23949) **Windows GUI launches to pure white screen while CLI works normally** _[bug, windows, web]_ — _by @yexiaoxue2000-rgb_
- [#23941](https://github.com/anomalyco/opencode/issues/23941) **[BUG] : not able to /skill-name, even when /skills shows the skill** _[bug, core]_ — _by @m10rten_
- [#3116](https://github.com/anomalyco/opencode/issues/3116) **Kotlin LSP support** _[help-wanted]_ — _by @Melodeiro_ _(closed 2026-04-22T23:24:12Z)_
- [#20695](https://github.com/anomalyco/opencode/issues/20695) **Memory Megathread** _[perf, core]_ — _by @thdxr_
- [#23943](https://github.com/anomalyco/opencode/issues/23943) **[FEATURE]:change prompt of plan/build** _[discussion, core]_ — _by @nameearly_
- [#14674](https://github.com/anomalyco/opencode/issues/14674) **[FEATURE]: Add /dump-context command for inspecting inference context** _[core]_ — _by @ualtinok_ _(closed 2026-04-23T08:08:41Z)_
- [#23942](https://github.com/anomalyco/opencode/issues/23942) **unknown error, uv_spawn** _[bug, windows, core]_ — _by @stele99_
- [#22129](https://github.com/anomalyco/opencode/issues/22129) **Skills don't show up in TUI autocomplete but they do in the web app** _[core]_ — _by @mxaddict_
- [#22472](https://github.com/anomalyco/opencode/issues/22472) **已订阅 OpenCode Go-使用 CCSwitch 配置Claude code 时候，找不到可以用模型？** _[core]_ — _by @hyi1233_ _(closed 2026-04-15T10:44:07Z)_
- [#23940](https://github.com/anomalyco/opencode/issues/23940) **TUI no support chinese, input output allways in 'w;w;w;w;w;w;w;w;w;;w;w'** _[bug, opentui]_ — _by @yuri2223_
- [#23786](https://github.com/anomalyco/opencode/issues/23786) **[FEATURE]: why NO light theme anymore?** _[discussion, core]_ — _by @lumixraku_ _(closed 2026-04-23T01:37:49Z)_
- [#23928](https://github.com/anomalyco/opencode/issues/23928) **Either the < or <= operators are causing responses from the ai to get cut off.** _[bug, opentui, core]_ — _by @blankyblank_
- [#23900](https://github.com/anomalyco/opencode/issues/23900) **Cannot connect to API when LM Host is a remote host** _[bug]_ — _by @drcursor_
- [#23939](https://github.com/anomalyco/opencode/issues/23939) **oxlint LSP doesn't load** _[bug, core]_ — _by @michalkvasnicak_
- [#23613](https://github.com/anomalyco/opencode/issues/23613) **"Copied to clipboard" toast disappears almost immediately on macOS** _[bug]_ — _by @andresjoelv_
- [#23937](https://github.com/anomalyco/opencode/issues/23937) **LSP stopped working** _[bug, core]_ — _by @michalkvasnicak_
- [#13730](https://github.com/anomalyco/opencode/issues/13730) **[FEATURE]: Support light theme (white background with black text)** _[opentui]_ — _by @jwqdjs_ _(closed 2026-04-17T03:03:56Z)_
- [#23921](https://github.com/anomalyco/opencode/issues/23921) **With oh-my-opencode enabled, the TUI dumps long raw tool failure text into the session UI** _[bug, opentui]_ — _by @yangrn-new_ _(closed 2026-04-23T07:02:48Z)_
- [#22852](https://github.com/anomalyco/opencode/issues/22852) **OpenCode does not persist thinking blocks for Claude Opus 4.7** _[bug, core]_ — _by @renbou_ _(closed 2026-04-16T22:35:01Z)_
- [#23936](https://github.com/anomalyco/opencode/issues/23936) **Anthropic models in AWS Bedrock EU region not working** _[bug, core]_ — _by @erazemk_
- [#23651](https://github.com/anomalyco/opencode/issues/23651) **An error from the the project https://github.com/AgriciDaniel/claude-seo** _[bug, windows, core]_ — _by @fangyuchuang_ _(closed 2026-04-23T06:54:05Z)_
- [#15286](https://github.com/anomalyco/opencode/issues/15286) **[Bug]: Process crashes with "setRawMode failed with errno: 5 (EIO)" when terminal disconnects** _[opentui, core]_ — _by @philperron_
- [#21647](https://github.com/anomalyco/opencode/issues/21647) **mcp test，fail when in server mode.** _[bug, core]_ — _by @fangyuchuang_ _(closed 2026-04-23T06:46:15Z)_
- [#16893](https://github.com/anomalyco/opencode/issues/16893) **Remote MCP OAuth: browser never opens for re-authentication after session loss** _[core]_ — _by @Nicogabler_
- [#23934](https://github.com/anomalyco/opencode/issues/23934) **[FEATURE]: Persist OpenCode Web sidebar open-project state outside browser localStorage** _[web, core]_ — _by @sacoscada-rgb_


## Commits on `dev`

- [`785f358`](https://github.com/anomalyco/opencode/commit/785f3589abb5b43d4e7d6d27e308188d961787de) fix: add keyed prop to Show components for proper reactivity (#23935) — _@Brendonovich_
- [`a419f1c`](https://github.com/anomalyco/opencode/commit/a419f1c50f4efaf2119991eee1d9bc2eef78cb8f) zen: hy3 preview — _@fwang_
- [`871789c`](https://github.com/anomalyco/opencode/commit/871789ce64f179d5efa3031afbce3789e27e99b5) sync release versions for v1.14.21 — _@opencode_
- [`df27baa`](https://github.com/anomalyco/opencode/commit/df27baa00d0de032a7213b043d3b04f939362baa) refactor: remove redundant pending check from working memo (#23929) — _@Brendonovich_
- [`9730008`](https://github.com/anomalyco/opencode/commit/97300085437899af8af6c2bbf6ebc6bdab110174) tweak: codex model logic (#23925) — _@rekram1-node_
- [`ac26394`](https://github.com/anomalyco/opencode/commit/ac26394fcb280592a8ecddf903a3a7116c841f39) fix(beta): PR resolvers/smoke check should typecheck all pacakges (#23913) — _@Hona_
- [`6387b35`](https://github.com/anomalyco/opencode/commit/6387b35a2d5b36fc1ac4dd3270fa2da66cca8111) log session sdk errors (#23652) — _@Hona_
- [`1cd4c92`](https://github.com/anomalyco/opencode/commit/1cd4c92242ea75460100a0d69855a90938e07832) chore: generate — _@opencode-agent[bot]_
- [`e383df4`](https://github.com/anomalyco/opencode/commit/e383df4b17eecd6e6718e43c17438aa2eb818ee9) feat: support pull diagnostics in the LSP client (C#, Kotlin, etc) (#23771) — _@Hona_
- [`58db41b`](https://github.com/anomalyco/opencode/commit/58db41b4b9fac2bfcf1f935cc114b3e4a069eade) chore: update nix bun version (#23881) — _@gigamonster256_
- [`5d133f2`](https://github.com/anomalyco/opencode/commit/5d133f2785aada81d65b14e3f86f14063900596c) chore: generate — _@opencode-agent[bot]_
- [`e9b1d3b`](https://github.com/anomalyco/opencode/commit/e9b1d3b940d6369a1c9bd492daf168c933cdfdab) docs: add MiMo V2.5 to Go pages (#23876) — _@MrMushrooooom_
- [`3a082a0`](https://github.com/anomalyco/opencode/commit/3a082a0efd5eaa5296c929241bfe565d460c277b) fix(project): use git common dir for bare repo project cache (#19054) — _@StevenTCramer_
- [`504fd1b`](https://github.com/anomalyco/opencode/commit/504fd1b373d0b35f39ee40b07fdb6957454de6b1) chore: generate — _@opencode-agent[bot]_
- [`574b2c2`](https://github.com/anomalyco/opencode/commit/574b2c21708baf872faa358152c1fa705437aa6c) fix(session): improve session compaction (#23870) — _@nexxeln_
- [`fa8b7bc`](https://github.com/anomalyco/opencode/commit/fa8b7bc4d269ac29310b410b30a9875b33023e66) chore: generate — _@opencode-agent[bot]_
- [`6196b81`](https://github.com/anomalyco/opencode/commit/6196b81e0afb33cdcfb4b44e82f18e857d6c4dc5) fix(tui): fail fast on invalid session startup (#23837) — _@nexxeln_
- [`d884ab7`](https://github.com/anomalyco/opencode/commit/d884ab73d5516d301a740b2bdea174f6b485d6dc) fix: consolidate project avatar source logic (#23819) — _@Brendonovich_
- [`71d196d`](https://github.com/anomalyco/opencode/commit/71d196d3cd06d0efef7a319f43955c7cefc36e09) chore: generate — _@opencode-agent[bot]_
- [`20756e0`](https://github.com/anomalyco/opencode/commit/20756e0ee45885db5614dab1867f16cea70ca1ec) test: fix cross-spawn stderr race on Windows CI (#23808) — _@Hona_
- [`894e638`](https://github.com/anomalyco/opencode/commit/894e63891483cb0d79f7ca28410dcdfa604d35bf) chore: generate — _@opencode-agent[bot]_
- [`8113a43`](https://github.com/anomalyco/opencode/commit/8113a4360e789fb25ac16d5619e732f3152ad3df) fix: preserve BOM in text tool round-trips (#23797) — _@Hona_
- [`c819804`](https://github.com/anomalyco/opencode/commit/c819804638a923c932c3bdd94bd9eadaa4207410) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`06066db`](https://github.com/anomalyco/opencode/commit/06066dbb7bd05a99526f7b6a5eaa499d1cf47f78) fix(app): improve icon override handling in project edit dialog (#23768) — _@Brendonovich_
- [`69b8ea0`](https://github.com/anomalyco/opencode/commit/69b8ea0d66ce9a57e4692278853fb67cc163a67b) chore: bump Bun to 1.3.13 (#23791) — _@Hona_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
