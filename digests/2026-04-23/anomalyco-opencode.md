# anomalyco/opencode — 2026-04-23

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-22T23:59:59.000Z → 2026-04-23T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

> _Deterministic template only — no LLM summary for this run._

## Releases

- **[v1.14.22](https://github.com/anomalyco/opencode/releases/tag/v1.14.22)** — v1.14.22 _by @opencode-agent[bot] at 2026-04-23T15:56:51Z_
  > ## Core
  > 
  > - Respect `.npmrc` settings during npm installs.
  > - Let projects store a custom icon override so the chosen icon persists correctly.
  > 
  > ## Desktop
  > 
  > - Fix session views and nested session items not getting stuck with stale state when switching between sessions.
- **[v1.14.21](https://github.com/anomalyco/opencode/releases/tag/v1.14.21)** — v1.14.21 _by @opencode-agent[bot] at 2026-04-23T05:45:23Z_
  > ## Core
  > - Support pull diagnostics from LSP servers that use them, including C# and Kotlin.
  > - Fix project detection and caching for bare Git repos and worktrees. (@StevenTCramer)
  > - Improve session compaction so long threads keep more useful context when older history is summarized.
  > - Preserve UTF-8 BOMs when files are edited, patched, or rewritten through tools.
  > - Use Roslyn Language Server for C# support instead of `csharp-ls`. (@jmbryan4)
  > - Add the high reasoning variant for supported Mistral…


## Merged PRs

- [#20192](https://github.com/anomalyco/opencode/pull/20192) **electron: port mergeShellEnv logic from tauri** — _by @Brendonovich, merged 2026-04-01T07:01:45Z_
- [#23870](https://github.com/anomalyco/opencode/pull/23870) **fix(session): improve session compaction** — _by @nexxeln, merged 2026-04-22T15:07:32Z_
- [#24029](https://github.com/anomalyco/opencode/pull/24029) **refactor(schema): use Schema.Int and consolidate PositiveInt/NonNegativeInt** — _by @kitlangton, merged 2026-04-23T17:22:48Z_
- [#24027](https://github.com/anomalyco/opencode/pull/24027) **refactor(provider): migrate provider domain to Effect Schema** — _by @kitlangton, merged 2026-04-23T17:17:34Z_
- [#24024](https://github.com/anomalyco/opencode/pull/24024) **docs(schema): mark sync/index.ts migrated with compat-bridge note** — _by @kitlangton, merged 2026-04-23T16:54:46Z_
- [#24019](https://github.com/anomalyco/opencode/pull/24019) **refactor(sync): make session events schema-first** — _by @kitlangton, merged 2026-04-23T16:43:09Z_
- [#24016](https://github.com/anomalyco/opencode/pull/24016) **fix(npm): respect npmrc for version lookups** — _by @nexxeln, merged 2026-04-23T15:58:54Z_
- [#24005](https://github.com/anomalyco/opencode/pull/24005) **refactor(session): migrate session domain to Effect Schema** — _by @kitlangton, merged 2026-04-23T15:30:03Z_
- [#24009](https://github.com/anomalyco/opencode/pull/24009) **fix(tui): render all non-synthetic text parts of a user message** — _by @jlongster, merged 2026-04-23T15:24:41Z_
- [#24001](https://github.com/anomalyco/opencode/pull/24001) **fix(npm): respect npmrc config** — _by @nexxeln, merged 2026-04-23T14:24:01Z_
- [#23975](https://github.com/anomalyco/opencode/pull/23975) **chore: add to TEAM_MEMBERS** — _by @simonklee, merged 2026-04-23T11:02:41Z_
- [#23955](https://github.com/anomalyco/opencode/pull/23955) **feat(project): add icon_url_override field to projects** — _by @Brendonovich, merged 2026-04-23T10:57:05Z_
- [#23935](https://github.com/anomalyco/opencode/pull/23935) **fix: add keyed prop to Show components for proper reactivity** — _by @Brendonovich, merged 2026-04-23T09:32:01Z_


## Open PRs (new or updated)

- [#18767](https://github.com/anomalyco/opencode/pull/18767) **feat(app): Mobile Touch Optimization** — _by @noahbentusi, updated 2026-04-23T18:54:42Z_
- [#13854](https://github.com/anomalyco/opencode/pull/13854) **fix(tui): stop streaming markdown/code after message completes** — _by @mocksoul, updated 2026-04-23T18:54:42Z_
- [#10436](https://github.com/anomalyco/opencode/pull/10436) **feat: add Maple AI provider integration** — _by @marksftw, updated 2026-04-23T18:48:29Z_
- [#23794](https://github.com/anomalyco/opencode/pull/23794) **feat(tool): add interactive terminal tool with persistent PTY sessions** — _by @herjarsa, updated 2026-04-23T18:28:28Z_
- [#24040](https://github.com/anomalyco/opencode/pull/24040) **refactor(bus): migrate BusEvent to Effect Schema** — _by @kitlangton, updated 2026-04-23T18:24:23Z_
- [#24034](https://github.com/anomalyco/opencode/pull/24034) **feat(tui): support builtin protocol for handling context from editors** — _by @jlongster, updated 2026-04-23T18:08:37Z_
- [#24033](https://github.com/anomalyco/opencode/pull/24033) **feat: adjust retry logic ** — _by @rekram1-node, updated 2026-04-23T17:57:30Z_
- [#23053](https://github.com/anomalyco/opencode/pull/23053) **chore(db): enable auto-vacuum and add periodic maintenance** — _by @BYK, updated 2026-04-23T17:53:25Z_
- [#19937](https://github.com/anomalyco/opencode/pull/19937) **fix(opencode): clarify git amend condition to require verifying commit landed** — _by @altendky, updated 2026-04-23T17:41:55Z_
- [#24013](https://github.com/anomalyco/opencode/pull/24013) **fix(opencode): stop retrying non-transient rate limits** — _by @eeshm, updated 2026-04-23T17:38:36Z_
- [#7119](https://github.com/anomalyco/opencode/pull/7119) **fix(tui): display dynamically registered MCP servers in status** — _by @altendky, updated 2026-04-23T17:31:11Z_
- [#17083](https://github.com/anomalyco/opencode/pull/17083) **fix: flush stdin on POSIX exit to prevent stale bytes leaking to shell** — _by @altendky, updated 2026-04-23T17:30:39Z_
- [#24026](https://github.com/anomalyco/opencode/pull/24026) **fix(provider): coerce numeric tool call IDs for OpenAI-compatible providers** — _by @Qiiks, updated 2026-04-23T17:05:09Z_
- [#16750](https://github.com/anomalyco/opencode/pull/16750) _(draft)_ **fix(provider): skip empty-text filtering for assistant messages in normalizeMessages (#16748)** — _by @altendky, updated 2026-04-23T17:03:19Z_
- [#16751](https://github.com/anomalyco/opencode/pull/16751) _(draft)_ **fix(session): fix root causes and reconstruction of tool_use/tool_result mismatch (#16749)** — _by @altendky, updated 2026-04-23T17:03:18Z_
- [#7137](https://github.com/anomalyco/opencode/pull/7137) **feat: add --dangerously-skip-permissions flag** — _by @surma, updated 2026-04-23T16:54:21Z_
- [#22753](https://github.com/anomalyco/opencode/pull/22753) **core: move plugin intialisation to config layer override** — _by @Brendonovich, updated 2026-04-23T16:51:43Z_
- [#21947](https://github.com/anomalyco/opencode/pull/21947) **wip: node shim signals** — _by @rekram1-node, updated 2026-04-23T16:51:40Z_
- [#15697](https://github.com/anomalyco/opencode/pull/15697) **tweak(ui): make questions popup collapsible** — _by @iamdavidhill, updated 2026-04-23T16:48:49Z_
- [#23846](https://github.com/anomalyco/opencode/pull/23846) **Themes aagain** — _by @kommander, updated 2026-04-23T16:23:45Z_
- [#24022](https://github.com/anomalyco/opencode/pull/24022) **fix(app): prevent question dock overflow** — _by @aakash2330, updated 2026-04-23T16:14:52Z_
- [#23987](https://github.com/anomalyco/opencode/pull/23987) **fix(tui): show skills in autocomplete dropdown (#22129)** — _by @PratikRai0101, updated 2026-04-23T15:41:32Z_
- [#23246](https://github.com/anomalyco/opencode/pull/23246) **fix(web): make fallback model visible in model selector** — _by @shadowabi, updated 2026-04-23T15:35:19Z_
- [#24014](https://github.com/anomalyco/opencode/pull/24014) **feat(tui): show /connect tip when user has no models configured** — _by @kitlangton, updated 2026-04-23T15:33:15Z_
- [#24008](https://github.com/anomalyco/opencode/pull/24008) **fix: preserve newlines in ACP command argument parsing** — _by @feisuzhu, updated 2026-04-23T15:24:43Z_
- [#13224](https://github.com/anomalyco/opencode/pull/13224) **feat(docs): add copy page markdown action to docs title** — _by @kdcokenny, updated 2026-04-23T15:16:01Z_
- [#24004](https://github.com/anomalyco/opencode/pull/24004) **feat(plan): enhance validation and user prompts in PlanExitTool** — _by @Alexandre200-lab, updated 2026-04-23T14:53:03Z_
- [#20491](https://github.com/anomalyco/opencode/pull/20491) **feat(opencode): add Kiro provider** — _by @NachoFLizaur, updated 2026-04-23T14:44:10Z_
- [#23381](https://github.com/anomalyco/opencode/pull/23381) **fix(plugin): opencode run waits for plugins to finish before stopping process** — _by @0byte-coding, updated 2026-04-23T14:42:49Z_
- [#21344](https://github.com/anomalyco/opencode/pull/21344) **feat: /lsps commands** — _by @poelzi, updated 2026-04-23T14:19:53Z_
- [#23104](https://github.com/anomalyco/opencode/pull/23104) **fix(opencode): preserve reasoning providerMetadata across model switches** — _by @bainos, updated 2026-04-23T14:08:31Z_
- [#23902](https://github.com/anomalyco/opencode/pull/23902) **feat(tui): add opencode -c to session exit message for convenience** — _by @WattsInABox, updated 2026-04-23T13:56:02Z_
- [#23992](https://github.com/anomalyco/opencode/pull/23992) **docs: add Uzbek README translation** — _by @uchkunr, updated 2026-04-23T13:55:54Z_
- [#6370](https://github.com/anomalyco/opencode/pull/6370) **fix: enable primary clipboard copy for Wayland/X11 to fix Linux middle-click paste** — _by @mickalpine, updated 2026-04-23T13:51:38Z_
- [#22826](https://github.com/anomalyco/opencode/pull/22826) **feat(opencode): add autotitle config to use git branch name as session title** — _by @slcourchesne, updated 2026-04-23T13:48:16Z_
- [#12856](https://github.com/anomalyco/opencode/pull/12856) **feat: bugfix to snapshot pruning and allow snapshot config to accept positive integer for retention lifespan in days (resolves #10626, #10782, #6845, #3182, #10532, #8577, #17753)** — _by @ariane-emory, updated 2026-04-23T13:42:30Z_
- [#23912](https://github.com/anomalyco/opencode/pull/23912) **feat: make opencode web embeddable in iframes at a subpath** — _by @csillag, updated 2026-04-23T13:42:27Z_
- [#11303](https://github.com/anomalyco/opencode/pull/11303) **feat: let ACP client expose the input/output properly** — _by @validatedev, updated 2026-04-23T13:19:53Z_
- [#23978](https://github.com/anomalyco/opencode/pull/23978) **feat(ui): Copy Relative and Absolute Paths from File Tree** — _by @KonstantinSviridov, updated 2026-04-23T13:19:16Z_
- [#5134](https://github.com/anomalyco/opencode/pull/5134) **feat:  add support for JSONC in user theme files and add test coverage for theme loading functionality (resolves #4927)** — _by @ariane-emory, updated 2026-04-23T13:04:15Z_
- [#23135](https://github.com/anomalyco/opencode/pull/23135) **fix: rewrite inappropriate advice to use ls command in example dialogues in system prompt** — _by @ariane-emory, updated 2026-04-23T13:04:03Z_
- [#12822](https://github.com/anomalyco/opencode/pull/12822) **fix(env): proxy directly to process.env instead of snapshotting** — _by @jerome-benoit, updated 2026-04-23T12:57:53Z_
- [#23582](https://github.com/anomalyco/opencode/pull/23582) **docs: adding Mistral to docs as a provider because it is already a provider** — _by @jenperson, updated 2026-04-23T12:57:07Z_
- [#12520](https://github.com/anomalyco/opencode/pull/12520) **feat: mcp-search tool for lazy loading mcp** — _by @TheOutdoorProgrammer, updated 2026-04-23T12:48:36Z_
- [#14393](https://github.com/anomalyco/opencode/pull/14393) **fix: preserve thinking block signatures and fix compaction headroom asymmetry** — _by @gnadaban, updated 2026-04-23T12:43:56Z_
- [#23989](https://github.com/anomalyco/opencode/pull/23989) **docs(slack): add required message event subscriptions** — _by @1openwindow, updated 2026-04-23T12:41:05Z_
- [#23985](https://github.com/anomalyco/opencode/pull/23985) **feat: allow planning CLI tools (gh, glab) in plan mode** — _by @MattPark, updated 2026-04-23T12:29:32Z_
- [#23111](https://github.com/anomalyco/opencode/pull/23111) **feat(opencode): display cached token count inline in TUI** — _by @bainos, updated 2026-04-23T12:21:55Z_
- [#23108](https://github.com/anomalyco/opencode/pull/23108) **feat(opencode): add cache_point_ttl option for Bedrock provider** — _by @bainos, updated 2026-04-23T12:21:43Z_
- [#23525](https://github.com/anomalyco/opencode/pull/23525) **fix(opencode): handle AWS SSO session expiry with automatic re-login** — _by @bainos, updated 2026-04-23T12:21:27Z_
- [#21905](https://github.com/anomalyco/opencode/pull/21905) **docs(web): add opencode-quota to ecosystem plugins** — _by @slkiser, updated 2026-04-23T12:18:41Z_
- [#23862](https://github.com/anomalyco/opencode/pull/23862) **fix: sessions missing from sidebar on Windows due to path separator mismatch** — _by @Gitar101, updated 2026-04-23T11:48:04Z_
- [#23974](https://github.com/anomalyco/opencode/pull/23974) **fix: keep permission prompt hover separate from selected action** — _by @simonklee, updated 2026-04-23T11:02:54Z_
- [#23970](https://github.com/anomalyco/opencode/pull/23970) **fix(opencode): handle unsupported import formats** — _by @LufyCZ, updated 2026-04-23T10:58:54Z_
- [#23972](https://github.com/anomalyco/opencode/pull/23972) **fix(cli): report unsupported import file format** — _by @kzekiue, updated 2026-04-23T10:54:02Z_
- [#23971](https://github.com/anomalyco/opencode/pull/23971) **fix(plan): don't carry plan model into build agent on plan_exit** — _by @IsaiahPapa, updated 2026-04-23T10:49:25Z_
- [#23948](https://github.com/anomalyco/opencode/pull/23948) **fix(opencode): prefer semantic ACP tool title and input before completion** — _by @nizheming, updated 2026-04-23T10:46:34Z_
- [#23890](https://github.com/anomalyco/opencode/pull/23890) **feat(search): add runtime-aware search service with fff** — _by @nexxeln, updated 2026-04-23T10:34:24Z_
- [#23395](https://github.com/anomalyco/opencode/pull/23395) **fix(tui): update toast duration handling to use default value** — _by @OpeOginni, updated 2026-04-23T10:32:40Z_
- [#23964](https://github.com/anomalyco/opencode/pull/23964) **fix(enterprise): message nav hovercard and active state** — _by @OpeOginni, updated 2026-04-23T10:31:37Z_
- [#23671](https://github.com/anomalyco/opencode/pull/23671) **feat(app): add favorite and recent sections to model pickers** — _by @mattiacerutti, updated 2026-04-23T10:16:39Z_
- [#23965](https://github.com/anomalyco/opencode/pull/23965) **feat(tui): add provider disconnect command** — _by @kzekiue, updated 2026-04-23T10:04:40Z_
- [#22587](https://github.com/anomalyco/opencode/pull/22587) **fix: fallback custom model output limit to OUTPUT_TOKEN_MAX instead of 0** — _by @comzip, updated 2026-04-23T09:26:04Z_
- [#21832](https://github.com/anomalyco/opencode/pull/21832) **fix(npm): bypass @npmcli/agent to fix proxy env var crash** — _by @GoldJohnKing, updated 2026-04-23T08:57:24Z_
- [#22149](https://github.com/anomalyco/opencode/pull/22149) **fix: reuse OpenAI Responses previous_response_id across turns** — _by @YanzheL, updated 2026-04-23T08:25:38Z_
- [#17618](https://github.com/anomalyco/opencode/pull/17618) **feat(formatters): add stylua, nimpretty, and elm-format formatters** — _by @sahitya-chandra, updated 2026-04-23T08:20:32Z_


## Closed PRs (not merged)

- [#24042](https://github.com/anomalyco/opencode/pull/24042) **Merge/upstream v1.14.21 dev ttk** — _by @TTK95, closed 2026-04-23T19:03:03Z_
- [#24043](https://github.com/anomalyco/opencode/pull/24043) **Claude/remote control opencode u ndj9** — _by @TTK95, closed 2026-04-23T19:03:53Z_
- [#24023](https://github.com/anomalyco/opencode/pull/24023) **docs: add agent architecture audit guide** — _by @huangrichao2020, closed 2026-04-23T18:50:26Z_
- [#24037](https://github.com/anomalyco/opencode/pull/24037) **fix(prompt): use display-width coordinates for extmark positions to handle CJK input correctly** — _by @SMARK2022, closed 2026-04-23T18:21:59Z_
- [#23765](https://github.com/anomalyco/opencode/pull/23765) **refactor(core): allow SyncEvent.define and BusEvent.define to accept Effect Schema** — _by @kitlangton, closed 2026-04-23T16:43:31Z_
- [#22025](https://github.com/anomalyco/opencode/pull/22025) **fix(plugin): load npm config before Arborist installs** — _by @ghost91-, closed 2026-04-23T16:34:01Z_
- [#23766](https://github.com/anomalyco/opencode/pull/23766) **fix: disable toolStreaming for all @ai-sdk/anthropic-backed providers** — _by @kevinxinzhao, closed 2026-04-23T16:21:56Z_
- [#24015](https://github.com/anomalyco/opencode/pull/24015) **fix: handle outputSchema compilation errors in MCP tool discovery** — _by @k-i-k-s, closed 2026-04-23T15:50:57Z_
- [#23980](https://github.com/anomalyco/opencode/pull/23980) **fix(tui): make /rename available before session creation** — _by @davidpmclaughlin, closed 2026-04-23T14:47:46Z_
- [#23988](https://github.com/anomalyco/opencode/pull/23988) **fix: increase LSP initialize timeout for JDTLS and KotlinLS** — _by @norbu35, closed 2026-04-23T14:47:39Z_
- [#17664](https://github.com/anomalyco/opencode/pull/17664) **fix(opencode): support auth provider aliases for copilot subscriptions** — _by @raf1hh, closed 2026-03-20T18:30:59Z_
- [#23574](https://github.com/anomalyco/opencode/pull/23574) **fix: preserve thinking/redacted_thinking blocks in Anthropic message transforms** — _by @bbartels, closed 2026-04-20T17:48:30Z_
- [#21788](https://github.com/anomalyco/opencode/pull/21788) **fix(lsp): support typescript-language-server v5** — _by @chriswritescode-dev, closed 2026-04-23T12:44:25Z_
- [#23966](https://github.com/anomalyco/opencode/pull/23966) **feat(desktop-electron): add More Tools menu with Translate options** — _by @youngergerger, closed 2026-04-23T12:24:19Z_
- [#23967](https://github.com/anomalyco/opencode/pull/23967) **12** — _by @vepretski, closed 2026-04-23T12:24:16Z_
- [#23979](https://github.com/anomalyco/opencode/pull/23979) **[codex] fix team worker completion detection** — _by @terisuke, closed 2026-04-23T11:54:53Z_
- [#23950](https://github.com/anomalyco/opencode/pull/23950) **feat: bump appstream.metainfo.xml version in publish script** — _by @razzeee, closed 2026-04-23T11:26:43Z_
- [#23969](https://github.com/anomalyco/opencode/pull/23969) **feat(homelab): add playwright-cli with chromedp sidecar for browser automation** — _by @mrsimpson, closed 2026-04-23T10:50:54Z_
- [#23963](https://github.com/anomalyco/opencode/pull/23963) **fix(tui): keep status-bar token usage reactive after first prompt and /compact** — _by @nxank4, closed 2026-04-23T10:28:48Z_
- [#23946](https://github.com/anomalyco/opencode/pull/23946) **[codex] Add CodeRabbit Skills to ecosystem** — _by @nehal-a2z, closed 2026-04-23T08:31:33Z_
- [#23945](https://github.com/anomalyco/opencode/pull/23945) **fix(tui): defer CLI --agent flag until agent list loads** — _by @Bojun-Vvibe, closed 2026-04-23T08:19:25Z_


## Notable Issues

- [#24044](https://github.com/anomalyco/opencode/issues/24044) **Nvidia Nim support diasappeared** _[bug]_ — _by @justinbal96-collab_
- [#20287](https://github.com/anomalyco/opencode/issues/20287) **@ai-sdk/azure provider does not work with /chat/completions since v1.3.4** _[bug, core]_ — _by @chunglam2525_ _(closed 2026-04-01T01:42:48Z)_
- [#24039](https://github.com/anomalyco/opencode/issues/24039) **[FEATURE]: Add GPT-5.5 support for OpenAI provider** _[core]_ — _by @behavio1_
- [#24036](https://github.com/anomalyco/opencode/issues/24036) **[FEATURE]: GPT 5.5 support** _[discussion, core, needs:compliance]_ — _by @bu4ak_
- [#24035](https://github.com/anomalyco/opencode/issues/24035) **The project should be sync between web and GUI or TUI.** _[bug, windows, web]_ — _by @cropse_
- [#24041](https://github.com/anomalyco/opencode/issues/24041) **feat: support granular (object) syntax for webfetch permission** _[core, needs:compliance]_ — _by @RobWu_ _(closed 2026-04-23T18:41:22Z)_
- [#21625](https://github.com/anomalyco/opencode/issues/21625) **OpenCode 1.4.0 rewrites `package-lock.json` for local plugin dependencies (despite `bun.lock`)** _[bug, core, docs]_ — _by @dkarter_
- [#23449](https://github.com/anomalyco/opencode/issues/23449) **[FEATURE]: Agent should use integrated terminal (PTY) instead of spawning new shell processes** _[core, acp]_ — _by @herjarsa_
- [#5182](https://github.com/anomalyco/opencode/issues/5182) **[FEATURE]: TUI as an ACP Client** _[discussion]_ — _by @Emsu_
- [#24038](https://github.com/anomalyco/opencode/issues/24038) **[FEATURE]: Claude support using ACP protocol** _[discussion, core, acp]_ — _by @jcubic_
- [#22683](https://github.com/anomalyco/opencode/issues/22683) **1.4.6 constantly crashing** _[bug, opentui, perf]_ — _by @jeremyakers_
- [#24011](https://github.com/anomalyco/opencode/issues/24011) **Session retries forever on weekly rate limit errors** _[bug, core]_ — _by @eeshm_
- [#7846](https://github.com/anomalyco/opencode/issues/7846) **[FEATURE]: Add /skills command to list and quick-invoke skills** _[opentui]_ — _by @nguyenngothuong_
- [#24032](https://github.com/anomalyco/opencode/issues/24032) **[FEATURE]: Provider Request - Lemonade** _[discussion, core]_ — _by @korgano_
- [#23900](https://github.com/anomalyco/opencode/issues/23900) **Cannot connect to API when LM Host is a remote host** _[bug]_ — _by @drcursor_
- [#24031](https://github.com/anomalyco/opencode/issues/24031) **[FEATURE]:** _[discussion, core, needs:compliance]_ — _by @jimmy38467_
- [#24030](https://github.com/anomalyco/opencode/issues/24030) **[FEATURE]:setup** _[discussion, core, needs:compliance]_ — _by @jimmy38467_
- [#24028](https://github.com/anomalyco/opencode/issues/24028) **323Feature Request** _[core, needs:compliance]_ — _by @jimmy38467_
- [#21010](https://github.com/anomalyco/opencode/issues/21010) **Provider returned error.** _[bug, core]_ — _by @avinashkanaujiya_
- [#16685](https://github.com/anomalyco/opencode/issues/16685) **[Bug] "Provider returned error" consistently occurs with Kimi K2.5 via OpenCode Go on Windows** _[bug, windows, web]_ — _by @ChrisWenChen_
- [#22408](https://github.com/anomalyco/opencode/issues/22408) **[FEATURE]: kimi k2.6 integration** _[discussion, core]_ — _by @Acters_ _(closed 2026-04-21T20:08:07Z)_
- [#16373](https://github.com/anomalyco/opencode/issues/16373) **Question: Why is the Azure OpenAI GPT-5.4 model not displayed or selectable?** _[core]_ — _by @hueifeng_ _(closed 2026-04-23T16:59:22Z)_
- [#21155](https://github.com/anomalyco/opencode/issues/21155) **TypeError: undefined is not an object (evaluating 'schema2._zod.def') - zod v3/v4 conflict when plugins bundle zod v4** _[core]_ — _by @hrygo_
- [#24025](https://github.com/anomalyco/opencode/issues/24025) **ClawCodex -- A Python production-oriented rebuild of Claude Code -- great learning materials for the OpenCode community** _[docs, needs:compliance]_ — _by @cloudpigg101_
- [#22852](https://github.com/anomalyco/opencode/issues/22852) **OpenCode does not persist thinking blocks for Claude Opus 4.7** _[bug, core]_ — _by @renbou_ _(closed 2026-04-16T22:35:01Z)_
- [#24018](https://github.com/anomalyco/opencode/issues/24018) **Output gets truncated at `<`** _[core]_ — _by @james-tindal_
- [#23887](https://github.com/anomalyco/opencode/issues/23887) **[Bug]: OpenCode Go + Kimi K2.6/K2.5 returns 'Provider returned error' on CLI 1.14.20** _[core]_ — _by @byungsker_
- [#23767](https://github.com/anomalyco/opencode/issues/23767) **eager_input_streaming field breaks custom @ai-sdk/anthropic providers (Bedrock proxies, corporate gateways)** _[core]_ — _by @kevinxinzhao_
- [#14808](https://github.com/anomalyco/opencode/issues/14808) **Plugin event listener for "session.created" not firing** _[bug, core]_ — _by @M4NZEN_
- [#24021](https://github.com/anomalyco/opencode/issues/24021) **Insufficient balance error shows broken URL** _[bug, opentui]_ — _by @zakrzk_
- [#24020](https://github.com/anomalyco/opencode/issues/24020) **overflowing questionare cards** _[bug, web]_ — _by @aakash2330_
- [#11617](https://github.com/anomalyco/opencode/issues/11617) **Clangd LSP set incorrect root and missing arguments** _[bug]_ — _by @wangzw_ _(closed 2026-04-07T05:32:20Z)_
- [#23953](https://github.com/anomalyco/opencode/issues/23953) **Avira report: tr/w64.evo in v1.14.21** _[bug, windows]_ — _by @bj9421_
- [#24010](https://github.com/anomalyco/opencode/issues/24010) **Minmax  and GLM models (Minmax 2.7, GLM 5,5.1 ) no thinking level support via opencode zen provider** _[bug, zen, core]_ — _by @devharshthakur_
- [#10119](https://github.com/anomalyco/opencode/issues/10119) **VSCode extension "OpenCode Beta" - "There is no data provider registered that can provide view data."** _[bug, windows]_ — _by @morpheus9393_
- [#2072](https://github.com/anomalyco/opencode/issues/2072) **Support for Cursor?** — _by @ThallesP_
- [#129](https://github.com/anomalyco/opencode/issues/129) **add Custom Base URL for gemini and anthropic like cline and roocode** — _by @sudip358_ _(closed 2025-06-19T14:13:48Z)_
- [#24017](https://github.com/anomalyco/opencode/issues/24017) **[FEATURE]: Saving prompts and threads, manage them by saving topic  and/or bookmarks** _[discussion, core]_ — _by @pskraemer11_
- [#8785](https://github.com/anomalyco/opencode/issues/8785) **Bun has crashed** _[bug, windows, zen]_ — _by @sunnywuco_
- [#22624](https://github.com/anomalyco/opencode/issues/22624) **LSP do not work with clangd (c++)** _[bug, core]_ — _by @r9614204368-netizen_
- [#23895](https://github.com/anomalyco/opencode/issues/23895) **Invalid string: must match pattern /^#[0-9a-fA-F]{6}$/ color** _[bug, windows, core]_ — _by @im10furry_
- [#5651](https://github.com/anomalyco/opencode/issues/5651) **[FEATURE]: Publish flatpak for desktop app** _[discussion, web]_ — _by @Yach0_ _(closed 2026-04-21T23:19:05Z)_
- [#23153](https://github.com/anomalyco/opencode/issues/23153) **[FEATURE]:Pay Go with crypto** _[discussion, core]_ — _by @suse-coder_
- [#24012](https://github.com/anomalyco/opencode/issues/24012) **Newlines in command should be preserved in ACP mode** _[bug, core, acp]_ — _by @feisuzhu_
- [#24007](https://github.com/anomalyco/opencode/issues/24007) **All models think they have no search capabilities and when they are told to do multi-round searches they pretend to use search and do their task in multiple generations** _[bug, core]_ — _by @midvightmirage_ _(closed 2026-04-23T15:04:11Z)_
- [#16861](https://github.com/anomalyco/opencode/issues/16861) **Copilot CLI  has higher context window than GitHub Copilot extension** _[core]_ — _by @zhzy0077_ _(closed 2026-04-08T03:12:24Z)_
- [#23599](https://github.com/anomalyco/opencode/issues/23599) **System Theme no longer shows through system colors** _[bug, core]_ — _by @ktwbc_ _(closed 2026-04-21T19:13:09Z)_
- [#23434](https://github.com/anomalyco/opencode/issues/23434) **Opencode upgrade bypasses npm auth from .npmrc on corporate/internal registry setups** _[bug, core]_ — _by @kewalpasad_ _(closed 2026-04-23T15:01:59Z)_
- [#21079](https://github.com/anomalyco/opencode/issues/21079) **[Bug] .opencode/package-lock.json generated without respecting ~/.npmrc `registry` configuration** _[bug, core]_ — _by @FurryWolfX_ _(closed 2026-04-23T15:01:54Z)_
- [#24006](https://github.com/anomalyco/opencode/issues/24006) **[FEATURE]:Support runtime model switching via plugin API** _[discussion, core]_ — _by @zhangym1995_
- [#23990](https://github.com/anomalyco/opencode/issues/23990) **Bad request ... input should be image/jpeg ...** _[bug, windows, core]_ — _by @FlominatorTM_
- [#23983](https://github.com/anomalyco/opencode/issues/23983) **Why did this problem occur ：Invalid 'input[101].content[1].image_url'. Expected a base64-encoded data URL with an image MIME type (e.g. 'data:image/png;base64,aW1nIGJ5dGVzIGhlcmU='), but got empty base64-encoded bytes.** _[bug, core]_ — _by @wangchangkui_ _(closed 2026-04-23T14:47:43Z)_
- [#23981](https://github.com/anomalyco/opencode/issues/23981) **terminal stuck after passing non-existent session ID to opencode -s** _[bug, core]_ — _by @salman0ansari_


## Commits on `dev`

- [`0590452`](https://github.com/anomalyco/opencode/commit/0590452456a746457d5255e2ce3ecd9c5a4a621d) refactor(schema): use Schema.Int and consolidate PositiveInt/NonNegativeInt (#24029) — _@kitlangton_
- [`93940a1`](https://github.com/anomalyco/opencode/commit/93940a1859530b8fe46df376e7d7ba74fcd3e0d1) refactor(provider): migrate provider domain to Effect Schema (#24027) — _@kitlangton_
- [`1e439b8`](https://github.com/anomalyco/opencode/commit/1e439b8226a66dcec0d65751f5cdb50a2b7bc979) sync — _@fwang_
- [`8b2f835`](https://github.com/anomalyco/opencode/commit/8b2f8355b22414a768c4a594d7a7101a4f72b00f) docs(schema): mark sync/index.ts migrated with compat-bridge note (#24024) — _@kitlangton_
- [`aed0307`](https://github.com/anomalyco/opencode/commit/aed03078f88af5c28035a28b6edbbf10228a49ed) chore: generate — _@opencode-agent[bot]_
- [`c50d65b`](https://github.com/anomalyco/opencode/commit/c50d65b4d6b956cad44663d9d31b7b5eb01c8e57) refactor(sync): make session events schema-first (#24019) — _@kitlangton_
- [`353532b`](https://github.com/anomalyco/opencode/commit/353532b1c16bd5677efd2c352f502178f0c5094c) chore: generate — _@opencode-agent[bot]_
- [`9df7c78`](https://github.com/anomalyco/opencode/commit/9df7c78ebe051a3e71ec6aa27e38a4baa0bbb4bc) fix(npm): respect npmrc for version lookups (#24016) — _@nexxeln_
- [`eb7555d`](https://github.com/anomalyco/opencode/commit/eb7555d3c62a3b3cb61fc87bc124ee7309e9aaab) sync release versions for v1.14.22 — _@opencode_
- [`2cd89d6`](https://github.com/anomalyco/opencode/commit/2cd89d64e9c392a59cda5871d5b2c1ef0929ff7e) chore: generate — _@opencode-agent[bot]_
- [`0517ab4`](https://github.com/anomalyco/opencode/commit/0517ab4695e6918a379d1e44cc6cd04a9dc80c06) refactor(session): migrate session domain to Effect Schema (#24005) — _@kitlangton_
- [`bbf67d0`](https://github.com/anomalyco/opencode/commit/bbf67d0fff28b8d26d7ffb11c347f519308944b0) fix(tui): render all non-synthetic text parts of a user message (#24009) — _@jlongster_
- [`38deb0f`](https://github.com/anomalyco/opencode/commit/38deb0f3eeedb9da68f80b398a694622602162bb) fix(npm): respect npmrc config (#24001) — _@nexxeln_
- [`9b6db08`](https://github.com/anomalyco/opencode/commit/9b6db08d2144c33ec34cd88026774f847ec79761) chore: add to TEAM_MEMBERS (#23975) — _@simonklee_
- [`3ae74cb`](https://github.com/anomalyco/opencode/commit/3ae74cb0471b0a642c128d88d14649df673297b3) chore: generate — _@opencode-agent[bot]_
- [`6002500`](https://github.com/anomalyco/opencode/commit/6002500bc0a65aab3da7310797b5498ac0dae18c) feat(project): add icon_url_override field to projects (#23955) — _@Brendonovich_
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
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (deterministic template; no LLM for this run)._
