# anomalyco/opencode — 2026-04-24

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-23T04:39:30.304Z → 2026-04-24T04:39:30.304Z  
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

- [#24063](https://github.com/anomalyco/opencode/pull/24063) **fix: account for additional openai retry case** — _by @rekram1-node, merged 2026-04-23T21:31:44Z_
- [#22098](https://github.com/anomalyco/opencode/pull/22098) **feat: add interactive burst to the TUI logo** — _by @kitlangton, merged 2026-04-13T23:36:28Z_
- [#23460](https://github.com/anomalyco/opencode/pull/23460) **fix: patch arborist to get around bun bug** — _by @rekram1-node, merged 2026-04-20T05:49:46Z_
- [#23770](https://github.com/anomalyco/opencode/pull/23770) **feat(truncate): allow configuring tool output truncation limits** — _by @1rgs, merged 2026-04-23T21:43:33Z_
- [#24062](https://github.com/anomalyco/opencode/pull/24062) **feat(httpapi): bridge workspace read endpoints** — _by @kitlangton, merged 2026-04-23T21:32:02Z_
- [#24057](https://github.com/anomalyco/opencode/pull/24057) **chore: update [redacted] readme to symlink to an agents md to prevent dumbass agents from touching these files** — _by @rekram1-node, merged 2026-04-23T21:08:47Z_
- [#24056](https://github.com/anomalyco/opencode/pull/24056) **refactor(control-plane): migrate workspace DTO schemas** — _by @kitlangton, merged 2026-04-23T20:48:57Z_
- [#24054](https://github.com/anomalyco/opencode/pull/24054) **docs: update effect schema migration tracker** — _by @kitlangton, merged 2026-04-23T20:23:46Z_
- [#24034](https://github.com/anomalyco/opencode/pull/24034) **feat(tui): support builtin protocol for handling context from editors** — _by @jlongster, merged 2026-04-23T20:19:19Z_
- [#23244](https://github.com/anomalyco/opencode/pull/23244) **refactor(tool): migrate tool framework + all 18 built-in tools to Effect Schema** — _by @kitlangton, merged 2026-04-23T20:09:35Z_
- [#24040](https://github.com/anomalyco/opencode/pull/24040) **refactor(bus): migrate BusEvent to Effect Schema** — _by @kitlangton, merged 2026-04-23T19:37:44Z_
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


## Open PRs (new or updated)

- [#23822](https://github.com/anomalyco/opencode/pull/23822) **ci: add platform-specific bun install flags** — _by @Brendonovich, updated 2026-04-24T04:36:30Z_
- [#23381](https://github.com/anomalyco/opencode/pull/23381) **fix(plugin): opencode run waits for plugins to finish before stopping process** — _by @0byte-coding, updated 2026-04-24T04:31:59Z_
- [#21801](https://github.com/anomalyco/opencode/pull/21801) **fix(acp): forward subagent session events to ACP client** — _by @jasonmj, updated 2026-04-24T03:38:07Z_
- [#18767](https://github.com/anomalyco/opencode/pull/18767) **feat(app): Mobile Touch Optimization** — _by @noahbentusi, updated 2026-04-24T03:35:25Z_
- [#13854](https://github.com/anomalyco/opencode/pull/13854) **fix(tui): stop streaming markdown/code after message completes** — _by @mocksoul, updated 2026-04-24T03:35:24Z_
- [#19077](https://github.com/anomalyco/opencode/pull/19077) **fix(write): enforce explicit file mode despite umask** — _by @SeashoreShi, updated 2026-04-24T03:32:56Z_
- [#23365](https://github.com/anomalyco/opencode/pull/23365) **fix: scope nested child-session navigation correctly** — _by @doer-ee, updated 2026-04-24T02:57:24Z_
- [#6093](https://github.com/anomalyco/opencode/pull/6093) **feat: add persistent sidebar overlay toggle in command palette (resolves #6086)** — _by @ariane-emory, updated 2026-04-24T02:37:37Z_
- [#24079](https://github.com/anomalyco/opencode/pull/24079) **fix(app): MEMORY / OOM crash - add experimental flag to disable vcs diff auto-fetch** — _by @jeremyakers, updated 2026-04-24T02:03:26Z_
- [#11710](https://github.com/anomalyco/opencode/pull/11710) **feat: Add the ability to include cleared prompts in the history, toggled by a KV-persisted command palette item (resolves #11489)** — _by @ariane-emory, updated 2026-04-24T01:55:14Z_
- [#12633](https://github.com/anomalyco/opencode/pull/12633) **feat(tui): add auto-accept mode for permission requests** — _by @thdxr, updated 2026-04-24T01:44:28Z_
- [#4917](https://github.com/anomalyco/opencode/pull/4917) **feat: tool description for the Bash tool now advises model as to what the actual shell in use is (resolves #4866)** — _by @ariane-emory, updated 2026-04-24T01:23:46Z_
- [#23269](https://github.com/anomalyco/opencode/pull/23269) **docs: Add contexty plugin to ecosystem documentation** — _by @obtuse-triangle, updated 2026-04-24T01:12:49Z_
- [#16108](https://github.com/anomalyco/opencode/pull/16108) **feat: support .local.md variants for instruction files** — _by @clansty, updated 2026-04-24T00:36:45Z_
- [#23783](https://github.com/anomalyco/opencode/pull/23783) **fix(tui): allow navigation into grandchild sessions from subagent view** — _by @areyouok, updated 2026-04-24T00:30:05Z_
- [#23785](https://github.com/anomalyco/opencode/pull/23785) **feat(tui): add subagent status indicator in prompt footer** — _by @areyouok, updated 2026-04-24T00:27:36Z_
- [#5903](https://github.com/anomalyco/opencode/pull/5903) **feat(tui): Allow keybinding of custom slash commands (resolves #5904)** — _by @ariane-emory, updated 2026-04-23T23:21:24Z_
- [#18306](https://github.com/anomalyco/opencode/pull/18306) **feat(opencode): add Open WebUI provider** — _by @SamirMoustafa, updated 2026-04-23T23:18:46Z_
- [#23890](https://github.com/anomalyco/opencode/pull/23890) **feat(search): add runtime-aware search service with fff** — _by @nexxeln, updated 2026-04-23T23:01:22Z_
- [#23609](https://github.com/anomalyco/opencode/pull/23609) **docs(ecosystem): add opencode-langsmith-tracing plugin** — _by @Dramalf, updated 2026-04-23T22:48:21Z_
- [#20039](https://github.com/anomalyco/opencode/pull/20039) _(draft)_ **refactor: split bash tool into bash/pwsh/powershell** — _by @Hona, updated 2026-04-23T22:23:36Z_
- [#23846](https://github.com/anomalyco/opencode/pull/23846) **Themes aagain** — _by @kommander, updated 2026-04-23T22:22:23Z_
- [#23794](https://github.com/anomalyco/opencode/pull/23794) **feat(tool): add interactive terminal tool with persistent PTY sessions** — _by @herjarsa, updated 2026-04-23T22:22:23Z_
- [#23104](https://github.com/anomalyco/opencode/pull/23104) _(draft)_ **fix(opencode): preserve reasoning providerMetadata across model switches** — _by @bainos, updated 2026-04-23T22:12:48Z_
- [#24066](https://github.com/anomalyco/opencode/pull/24066) **fix(provider): preserve custom User-Agent from provider.options.headers (#22608)** — _by @Lypt1x, updated 2026-04-23T21:58:40Z_
- [#23494](https://github.com/anomalyco/opencode/pull/23494) **feat(tui): add terminal notifications via OSC escape sequences** — _by @dexion, updated 2026-04-23T21:50:24Z_
- [#10713](https://github.com/anomalyco/opencode/pull/10713) **feat: move diff_style from config to kv.json and add toggle menu items in command_list** — _by @ariane-emory, updated 2026-04-23T21:48:23Z_
- [#23557](https://github.com/anomalyco/opencode/pull/23557) **feat(opencode): add interactive split-footer mode to run** — _by @simonklee, updated 2026-04-23T21:39:51Z_
- [#13885](https://github.com/anomalyco/opencode/pull/13885) **feat(tui): add native status line template system** — _by @diegomarino, updated 2026-04-23T21:12:41Z_
- [#23792](https://github.com/anomalyco/opencode/pull/23792) **refactor(app): load sync state through TanStack Query** — _by @Brendonovich, updated 2026-04-23T20:41:51Z_
- [#21537](https://github.com/anomalyco/opencode/pull/21537) **fix(app): remove pierre diff virtualization** — _by @adamdotdevin, updated 2026-04-23T20:37:44Z_
- [#11303](https://github.com/anomalyco/opencode/pull/11303) **feat: let ACP client expose the input/output properly** — _by @validatedev, updated 2026-04-23T20:35:32Z_
- [#23318](https://github.com/anomalyco/opencode/pull/23318) **fix(core): respect OPENCODE_CONFIG and OPENCODE_CONFIG_CONTENT in serve/web** — _by @brian-dlee, updated 2026-04-23T20:32:29Z_
- [#23319](https://github.com/anomalyco/opencode/pull/23319) **refactor(tool): use key defaults in parameter schemas** — _by @kitlangton, updated 2026-04-23T20:19:39Z_
- [#24053](https://github.com/anomalyco/opencode/pull/24053) **fix(tui): unsubscribe event listeners on component disposal** — _by @fernandoenzo, updated 2026-04-23T20:05:43Z_
- [#12822](https://github.com/anomalyco/opencode/pull/12822) **fix(env): proxy directly to process.env instead of snapshotting** — _by @jerome-benoit, updated 2026-04-23T19:40:40Z_
- [#5092](https://github.com/anomalyco/opencode/pull/5092) **feat: {env:MY_VAR} support in the frontmatter of agent/command markdown files (resolves #5054, #5082)** — _by @ariane-emory, updated 2026-04-23T19:32:15Z_
- [#24033](https://github.com/anomalyco/opencode/pull/24033) **tweak: simply retry logic ** — _by @rekram1-node, updated 2026-04-23T19:26:01Z_
- [#24047](https://github.com/anomalyco/opencode/pull/24047) **docs: add agent architecture audit guide** — _by @huangrichao2020, updated 2026-04-23T19:23:11Z_
- [#10436](https://github.com/anomalyco/opencode/pull/10436) **feat: add Maple AI provider integration** — _by @marksftw, updated 2026-04-23T18:48:29Z_
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
- [#24022](https://github.com/anomalyco/opencode/pull/24022) **fix(app): prevent question dock overflow** — _by @aakash2330, updated 2026-04-23T16:14:52Z_
- [#23987](https://github.com/anomalyco/opencode/pull/23987) **fix(tui): show skills in autocomplete dropdown (#22129)** — _by @PratikRai0101, updated 2026-04-23T15:41:32Z_
- [#23246](https://github.com/anomalyco/opencode/pull/23246) **fix(web): make fallback model visible in model selector** — _by @shadowabi, updated 2026-04-23T15:35:19Z_
- [#24014](https://github.com/anomalyco/opencode/pull/24014) **feat(tui): show /connect tip when user has no models configured** — _by @kitlangton, updated 2026-04-23T15:33:15Z_
- [#24008](https://github.com/anomalyco/opencode/pull/24008) **fix: preserve newlines in ACP command argument parsing** — _by @feisuzhu, updated 2026-04-23T15:24:43Z_
- [#13224](https://github.com/anomalyco/opencode/pull/13224) **feat(docs): add copy page markdown action to docs title** — _by @kdcokenny, updated 2026-04-23T15:16:01Z_
- [#24004](https://github.com/anomalyco/opencode/pull/24004) **feat(plan): enhance validation and user prompts in PlanExitTool** — _by @Alexandre200-lab, updated 2026-04-23T14:53:03Z_


## Closed PRs (not merged)

- [#24076](https://github.com/anomalyco/opencode/pull/24076) **fix: handle Bun stream connection errors with automatic retry** — _by @Ryo40, closed 2026-04-24T04:32:45Z_
- [#24070](https://github.com/anomalyco/opencode/pull/24070) **fix(provider): allow remote local-network hosts when proxy env vars are set** — _by @jeevan6996, closed 2026-04-24T01:36:14Z_
- [#24055](https://github.com/anomalyco/opencode/pull/24055) **fix(opencode): allow gpt-5.5 in Codex OAuth model list** — _by @mattyatea, closed 2026-04-23T21:09:06Z_
- [#24068](https://github.com/anomalyco/opencode/pull/24068) **fix(snapshot): avoid E2BIG during batched revert checkout** — _by @jeevan6996, closed 2026-04-24T00:36:19Z_
- [#24058](https://github.com/anomalyco/opencode/pull/24058) **fix(opencode): prevent unbounded memory growth from stuck SSE streams** — _by @autopilotgrowth, closed 2026-04-23T22:46:23Z_
- [#24059](https://github.com/anomalyco/opencode/pull/24059) **fix(opencode): evict gitignored files from shadow snapshot index** — _by @autopilotgrowth, closed 2026-04-23T22:46:20Z_
- [#18336](https://github.com/anomalyco/opencode/pull/18336) **refactor effect runtime** — _by @tim-smart, closed 2026-04-23T22:16:26Z_
- [#22821](https://github.com/anomalyco/opencode/pull/22821) **fix: tidy stale ripgrep references and contradictory advice in tool descriptions** — _by @ariane-emory, closed 2026-04-19T11:46:31Z_
- [#14251](https://github.com/anomalyco/opencode/pull/14251) **feat(tui): show session ID in /status dialog** — _by @ariane-emory, closed 2026-04-17T14:15:54Z_
- [#24051](https://github.com/anomalyco/opencode/pull/24051) **fix(opencode): allow gpt-5.5 in Codex OAuth model list** — _by @mattyatea, closed 2026-04-23T19:50:45Z_
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


## Notable Issues

- [#24095](https://github.com/anomalyco/opencode/issues/24095) **[Bug] mimo-v2.5 model calls non-existent 'websearch' tool (name incompatibility)** _[core]_ — _by @Electricitysheep_
- [#24083](https://github.com/anomalyco/opencode/issues/24083) **The `reasoning_content` in the thinking mode must be passed back to the API.** _[bug, core, needs:compliance]_ — _by @passwa11_
- [#14539](https://github.com/anomalyco/opencode/issues/14539) **Tool usages in [redacted-product] sometimes consumes premium request** _[bug, windows, web]_ — _by @aklajnert_ _(closed 2026-04-24T04:19:01Z)_
- [#24039](https://github.com/anomalyco/opencode/issues/24039) **[FEATURE]: Add GPT-5.5 support for OpenAI provider** _[core]_ — _by @behavio1_ _(closed 2026-04-23T20:26:49Z)_
- [#4489](https://github.com/anomalyco/opencode/issues/4489) **[FEATURE]: Ephemeral one‑off sessions for opencode run (happy to implement)** _[discussion]_ — _by @kamilchm_
- [#24094](https://github.com/anomalyco/opencode/issues/24094) **explicit TOOL_CALL** _[bug, zen]_ — _by @mortalYoung_
- [#21420](https://github.com/anomalyco/opencode/issues/21420) **Claude/Anthropic 500/502/503/504 server errors are not retried** _[core]_ — _by @rich-jojo_ _(closed 2026-04-24T04:04:17Z)_
- [#24093](https://github.com/anomalyco/opencode/issues/24093) **[FEATURE]: Support DeepSeek-V4 models** _[discussion, core]_ — _by @GoodCoder666_
- [#24071](https://github.com/anomalyco/opencode/issues/24071) **GPT 5.5 stopping mid-message** _[bug, core]_ — _by @benkoppe_ _(closed 2026-04-24T01:36:12Z)_
- [#24092](https://github.com/anomalyco/opencode/issues/24092) **Adapting to the New DeepSeek Model** _[core]_ — _by @renshengbushexie_
- [#24091](https://github.com/anomalyco/opencode/issues/24091) **opencode desktop会话重命名不生效** _[bug, web]_ — _by @liufei4552_
- [#17279](https://github.com/anomalyco/opencode/issues/17279) **Renaming one project also renames the other in OpenCode Desktop V1.2.25** _[bug, web]_ — _by @Msg-Lbo_
- [#14740](https://github.com/anomalyco/opencode/issues/14740) **[FEATURE]: Plugin hooks for real-time stream observation and abort control** _[core]_ — _by @marcusquinn_ _(closed 2026-04-24T03:04:40Z)_
- [#8820](https://github.com/anomalyco/opencode/issues/8820) **"Other" provider option not showing up** _[bug, opentui]_ — _by @anand2312_ _(closed 2026-03-26T03:05:50Z)_
- [#24088](https://github.com/anomalyco/opencode/issues/24088) **Qwen 3.6 keep failed with 500 by using with OpenCode GO** _[bug, windows, core]_ — _by @PhoenixNest_
- [#24090](https://github.com/anomalyco/opencode/issues/24090) **Assistant messages in history replay are missing `tool_calls` field, breaking OpenAI-compatible providers** _[bug, core]_ — _by @supernovae_
- [#24089](https://github.com/anomalyco/opencode/issues/24089) **Model output (Markdown text) cannot be rendered.** _[bug, windows]_ — _by @Tide-Breeze_
- [#23887](https://github.com/anomalyco/opencode/issues/23887) **[Bug]: OpenCode Go + Kimi K2.6/K2.5 returns 'Provider returned error' on CLI 1.14.20** _[core]_ — _by @byungsker_
- [#23636](https://github.com/anomalyco/opencode/issues/23636) **fix: PowerShell output encoding for non-ASCII characters on Windows** _[bug, windows, core]_ — _by @l1i1_
- [#24087](https://github.com/anomalyco/opencode/issues/24087) **text content blocks must be non-empty when using Claude models and tools** _[bug, core]_ — _by @yexiaoxue2000-rgb_
- [#13343](https://github.com/anomalyco/opencode/issues/13343) **[FEATURE]: GitHub / Git Worktree & Branch Picker — open branch/worktree from Desktop/Web UI** _[discussion, web]_ — _by @bensheed_ _(closed 2026-04-24T03:04:24Z)_
- [#2944](https://github.com/anomalyco/opencode/issues/2944) **Getting "AI_APICallError: Invalid API parameter, please check the documentation." in opencode with zAI glm 4.6** — _by @moinulmoin_ _(closed 2026-04-24T03:04:39Z)_
- [#14728](https://github.com/anomalyco/opencode/issues/14728) **[FEATURE]: inconsistent pluralization** _[discussion, core]_ — _by @maxstevens-nl_ _(closed 2026-04-24T03:04:38Z)_
- [#4632](https://github.com/anomalyco/opencode/issues/4632) **Gemini 3 pro preview issues** _[bug, model-problem]_ — _by @tiberiuichim_ _(closed 2026-04-24T03:04:37Z)_
- [#14724](https://github.com/anomalyco/opencode/issues/14724) **Opencode Crash because Bun issue.** _[bug, windows, core]_ — _by @Mattymb7080_ _(closed 2026-04-24T03:04:36Z)_
- [#7439](https://github.com/anomalyco/opencode/issues/7439) **AIHubMix provider: streaming completes output but errors near end with ZodError (invalid_union: reason/part/delta)** _[bug, windows]_ — _by @qiyuanhuakai_ _(closed 2026-04-24T03:04:35Z)_
- [#14692](https://github.com/anomalyco/opencode/issues/14692) **`/connect` bypasses plugin auth prompts (can open the wrong OAuth flow)** _[bug, core]_ — _by @garysassano_ _(closed 2026-04-24T03:04:34Z)_
- [#11782](https://github.com/anomalyco/opencode/issues/11782) **[Question/Issue] Excessive request count consumption with Chutes provider during tool use** — _by @jk-chae_ _(closed 2026-04-24T03:04:33Z)_
- [#14697](https://github.com/anomalyco/opencode/issues/14697) **[FEATURE]: Native OpenTelemetry (OTLP) export for OpenCode sessions/tools/events** _[core]_ — _by @cruzanstx_ _(closed 2026-04-24T03:04:32Z)_
- [#14526](https://github.com/anomalyco/opencode/issues/14526) **Last update desktop app viewer crashes, [redacted-vendor] edge webview 2** _[bug, windows, perf, web]_ — _by @Melionka_ _(closed 2026-04-24T03:04:31Z)_
- [#13843](https://github.com/anomalyco/opencode/issues/13843) **[FEATURE]:Opencode Deskptop Workspace icons preferences** _[discussion, web]_ — _by @antonio-ivanovski_ _(closed 2026-04-24T03:04:30Z)_
- [#12113](https://github.com/anomalyco/opencode/issues/12113) **Azure models fail due to reasoning_effort being sent even with --variant none** _[bug]_ — _by @bkocis_ _(closed 2026-04-24T03:04:29Z)_
- [#14708](https://github.com/anomalyco/opencode/issues/14708) **[FEATURE]: VSCode-style search in web command palette (file + chat content)** _[web]_ — _by @wufei-png_ _(closed 2026-04-24T03:04:28Z)_
- [#14704](https://github.com/anomalyco/opencode/issues/14704) **Desktop Dev not running on my machine** _[bug, web]_ — _by @OpeOginni_ _(closed 2026-04-24T03:04:27Z)_
- [#14702](https://github.com/anomalyco/opencode/issues/14702) **[FEATURE]: JSON output for opencode stats CLI command** _[discussion, core]_ — _by @ccmetz_ _(closed 2026-04-24T03:04:26Z)_
- [#14698](https://github.com/anomalyco/opencode/issues/14698) **[FEATURE]:LISP family syntax highlighting support** _[discussion, core]_ — _by @riatzukiza_ _(closed 2026-04-24T03:04:25Z)_
- [#14689](https://github.com/anomalyco/opencode/issues/14689) **Webfetch size limit** _[bug, core]_ — _by @tqcq_ _(closed 2026-04-24T03:04:23Z)_
- [#14688](https://github.com/anomalyco/opencode/issues/14688) **bug: typecheck CI fails on all PRs due to missing SDK v2 dist types** _[bug, core]_ — _by @AJIredale_ _(closed 2026-04-24T03:04:22Z)_
- [#13993](https://github.com/anomalyco/opencode/issues/13993) **[FEATURE]: VSCode Language Model Chat Provider for Opencode Zen Models** _[discussion, zen, extension]_ — _by @dehanjl_ _(closed 2026-04-24T03:04:21Z)_
- [#14546](https://github.com/anomalyco/opencode/issues/14546) **OpenCode sometimes loses the history of open projects and sessions between restarts** _[bug, core]_ — _by @nukeop_ _(closed 2026-04-24T03:04:20Z)_
- [#14676](https://github.com/anomalyco/opencode/issues/14676) **Recurring issue with opencode hanging but immediately restarting after ESC/ESC interruption** _[bug]_ — _by @doberkofler_ _(closed 2026-04-24T03:04:19Z)_
- [#14673](https://github.com/anomalyco/opencode/issues/14673) **[FEATURE]:Pasted images use data: URL instead of file path, breaking MCP tools for non-vision models** _[discussion, core]_ — _by @zhengwh_ _(closed 2026-04-24T03:04:18Z)_
- [#14671](https://github.com/anomalyco/opencode/issues/14671) **[FEATURE]:Prevent workflows from running in fork repositories** _[discussion, core]_ — _by @niushuai1991_ _(closed 2026-04-24T03:04:17Z)_
- [#9536](https://github.com/anomalyco/opencode/issues/9536) **Triggers build mode after switching to plan mode** _[bug, windows]_ — _by @ishechuan_ _(closed 2026-04-24T03:04:16Z)_
- [#3212](https://github.com/anomalyco/opencode/issues/3212) **Agent runs "sudo" and freezes UI when analyzing system configs (e.g. Apache)** — _by @RaphGod_ _(closed 2026-04-24T03:04:15Z)_
- [#14661](https://github.com/anomalyco/opencode/issues/14661) **Windows 11: Unicode / UTF-8 rendering broken across all terminals** _[bug, windows]_ — _by @bymcs_ _(closed 2026-04-24T03:04:14Z)_
- [#14657](https://github.com/anomalyco/opencode/issues/14657) **[FEATURE]: Multi-window/tabs for desktop** _[web, core]_ — _by @merlinkraemer_ _(closed 2026-04-24T03:04:13Z)_
- [#14654](https://github.com/anomalyco/opencode/issues/14654) **[FEATURE]: Add Catalan language translation to the apps** _[discussion, docs]_ — _by @jordimas_ _(closed 2026-04-24T03:04:12Z)_
- [#1341](https://github.com/anomalyco/opencode/issues/1341) **How to setup opencode github action with [redacted] provider?** _[help-wanted]_ — _by @blntrsz_ _(closed 2026-04-24T03:04:11Z)_
- [#14648](https://github.com/anomalyco/opencode/issues/14648) **Worktree bootstrap failures leak orphaned directories causing disk fillup** _[bug, core]_ — _by @alexhraber_ _(closed 2026-04-24T03:04:10Z)_
- [#14645](https://github.com/anomalyco/opencode/issues/14645) **set_line and replace_lines strip leading "- " from text (diff marker auto-strip too aggressive)** _[windows, core]_ — _by @fantomc0der_ _(closed 2026-04-24T03:04:09Z)_
- [#14642](https://github.com/anomalyco/opencode/issues/14642) **Cache control injection uses wrong detection for Anthropic SDK models** _[core]_ — _by @llc1123_ _(closed 2026-04-24T03:04:07Z)_
- [#14560](https://github.com/anomalyco/opencode/issues/14560) **Desktop App: UI renders massively duplicated content when streaming responses with code blocks** _[web]_ — _by @praxstack_ _(closed 2026-04-24T03:04:07Z)_
- [#14425](https://github.com/anomalyco/opencode/issues/14425) **cannot start 2 & more opencode terminal on win wsl1** _[bug, windows, core]_ — _by @HustCoderHu_ _(closed 2026-04-24T03:04:05Z)_
- [#24086](https://github.com/anomalyco/opencode/issues/24086) **Tab key not toggling between plan and code mode** _[bug, opentui]_ — _by @AdrianBinDC_
- [#24082](https://github.com/anomalyco/opencode/issues/24082) **running opencode /serve on windows opencode can't find skills in /** _[bug, windows, core]_ — _by @DanielRomi_
- [#24085](https://github.com/anomalyco/opencode/issues/24085) **opencode  There is a problem with the page layout.** _[bug, needs:compliance]_ — _by @Wangjunling1_ _(closed 2026-04-24T02:55:18Z)_
- [#24084](https://github.com/anomalyco/opencode/issues/24084) **[FEATURE]: Support OAuth 2.0 client_credentials for configured providers** _[core]_ — _by @benjaminwestern_
- [#16685](https://github.com/anomalyco/opencode/issues/16685) **[Bug] "Provider returned error" consistently occurs with Kimi K2.5 via OpenCode Go on Windows** _[bug, windows, web]_ — _by @ChrisWenChen_
- [#24081](https://github.com/anomalyco/opencode/issues/24081) **Can't run 1.14.21 & 1.14.22 in WSL1: cannot execute binary file: Exec format error** _[bug, windows, core]_ — _by @lengran_
- [#24080](https://github.com/anomalyco/opencode/issues/24080) **Windows CJK characters garbled in bash tool output** _[windows, core]_ — _by @fkyah3_ _(closed 2026-04-24T02:23:15Z)_
- [#23924](https://github.com/anomalyco/opencode/issues/23924) **The superpowers plugin was installed, but an error was reported** _[bug, windows]_ — _by @firebat1314_ _(closed 2026-04-24T02:16:42Z)_
- [#24046](https://github.com/anomalyco/opencode/issues/24046) **TUI mouse reporting conflicts with native terminal copy/paste in iTerm2** — _by @fat0_
- [#22683](https://github.com/anomalyco/opencode/issues/22683) **1.4.6 constantly crashing** _[bug, opentui, perf]_ — _by @jeremyakers_
- [#24049](https://github.com/anomalyco/opencode/issues/24049) **`/vcs/diff` can OOM in desktop-layout web UI on umbrella workspaces with many nested git repos** _[bug, perf, core]_ — _by @jeremyakers_
- [#24078](https://github.com/anomalyco/opencode/issues/24078) **Regression: Windows desktop 1.14.19 significantly slower than previous version (same model/workflow)** _[bug, windows, perf, web]_ — _by @csliuchi_
- [#24077](https://github.com/anomalyco/opencode/issues/24077) **opencode (default mode) closes entire terminal window on Linux / i3wm** _[bug, core]_ — _by @brenoassp_
- [#24075](https://github.com/anomalyco/opencode/issues/24075) **bun crash on opencode first start** _[bug, core]_ — _by @cctyl_
- [#24074](https://github.com/anomalyco/opencode/issues/24074) **qwen 3.6 plus,Unable to cancel token billing** _[bug, core]_ — _by @renyiwei-xinyi_
- [#24073](https://github.com/anomalyco/opencode/issues/24073) **Desktop: project color not saved after edit** _[bug, windows, web]_ — _by @MikeSoton_
- [#23903](https://github.com/anomalyco/opencode/issues/23903) **Web UI: Failed to send prompt. Unable to retrieve session.** _[bug, web]_ — _by @jeremyakers_
- [#24061](https://github.com/anomalyco/opencode/issues/24061) **OpenCode ACP Registry agent not working in Zed** _[bug, windows, acp]_ — _by @DanielUgoAli_
- [#24072](https://github.com/anomalyco/opencode/issues/24072) **[FEATURE]: Add the provider https://devin.ai/** _[discussion, core]_ — _by @void0x14_
- [#19515](https://github.com/anomalyco/opencode/issues/19515) **[FEATURE]: workspace folders — explicit multi-directory support** _[core]_ — _by @msangals_
- [#23719](https://github.com/anomalyco/opencode/issues/23719) **Nix flake broken since 1.4.11** _[bug, nix]_ — _by @anthrofract_


## Commits on `dev`

- [`5c5069b`](https://github.com/anomalyco/opencode/commit/5c5069b6227ce6c4cbc1b6daca65da69daf43f84) chore: generate — _@opencode-agent[bot]_
- [`f8c6ddd`](https://github.com/anomalyco/opencode/commit/f8c6ddd4cb08aab493fcaab69d44c5085083152e) feat(truncate): allow configuring tool output truncation limits (#23770) — _@1rgs_
- [`e50a688`](https://github.com/anomalyco/opencode/commit/e50a688ca309ba4c992fd8e47b5b75a11aef025e) feat(httpapi): bridge workspace read endpoints (#24062) — _@kitlangton_
- [`334ab47`](https://github.com/anomalyco/opencode/commit/334ab4707c809172e77619ae7d6b22c5577c7238) fix: account for additional openai retry case (#24063) — _@rekram1-node_
- [`8732194`](https://github.com/anomalyco/opencode/commit/87321942fee25786448f02284ebeaee1caf4e86c) chore: update [redacted] readme to symlink to an agents md to prevent dumbass agents from touching these files (#24057) — _@rekram1-node_
- [`a771859`](https://github.com/anomalyco/opencode/commit/a771859362ab61983671ca9a82ec1ccfa34fc689) chore: generate — _@opencode-agent[bot]_
- [`31d01d4`](https://github.com/anomalyco/opencode/commit/31d01d404afd4f82628b3f388d5c73debf250ffd) refactor(control-plane): migrate workspace DTO schemas (#24056) — _@kitlangton_
- [`814e83f`](https://github.com/anomalyco/opencode/commit/814e83ffecfddeb60cc88bba03b0c00629eecf5e) docs: update effect schema migration tracker (#24054) — _@kitlangton_
- [`4c3e65c`](https://github.com/anomalyco/opencode/commit/4c3e65c87728b04888ccbf3879aca13a3857bb08) chore: generate — _@opencode-agent[bot]_
- [`98ea5b6`](https://github.com/anomalyco/opencode/commit/98ea5b6e7e907b6d4eb52b294b9a7770bbd0f18e) feat(tui): support builtin protocol for handling context from editors (#24034) — _@jlongster_
- [`3f8c659`](https://github.com/anomalyco/opencode/commit/3f8c659056c3ddf3e9074efb8a1ea57018c356ab) chore: generate — _@opencode-agent[bot]_
- [`3910a6e`](https://github.com/anomalyco/opencode/commit/3910a6e527c87f514c479a1c1c3d6d5f4d1aa315) refactor(tool): migrate tool framework + all 18 built-in tools to Effect Schema (#23244) — _@kitlangton_
- [`2489255`](https://github.com/anomalyco/opencode/commit/24892559ae10e8df5bde8211b7e4c7a6851f3de6) chore: generate — _@opencode-agent[bot]_
- [`cd93533`](https://github.com/anomalyco/opencode/commit/cd93533b1f5eae9362a485b0072f98a05d1ca161) refactor(bus): migrate BusEvent to Effect Schema (#24040) — _@kitlangton_
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


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (deterministic template; no LLM for this run)._
