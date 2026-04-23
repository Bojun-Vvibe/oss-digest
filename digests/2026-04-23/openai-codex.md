# openai/codex — 2026-04-23

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-22T23:59:59.000Z → 2026-04-23T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

> _Deterministic template only — no LLM summary for this run._

## Releases

- **[rust-v0.124.0](https://github.com/openai/codex/releases/tag/rust-v0.124.0)** — 0.124.0 _by @github-actions[bot] at 2026-04-23T18:29:40Z_
  > ## New Features
  > - The TUI now has quick reasoning controls: `Alt+,` lowers reasoning, `Alt+.` raises it, and accepted model upgrades now reset reasoning to the new model’s default instead of carrying over stale settings. (#18866, #19085)
  > - App-server sessions can now manage multiple environments and choose an environment and working directory per turn, which makes multi-workspace and remote setups easier to target precisely. (#18401, #18416)
  > - Added first-class Amazon Bedrock support for OpenAI-…
- **[rust-v0.123.0](https://github.com/openai/codex/releases/tag/rust-v0.123.0)** — 0.123.0 _by @github-actions[bot] at 2026-04-23T01:26:06Z_
  > ## New Features
  > - Added a built-in `amazon-bedrock` model provider with configurable AWS profile support (#18744).
  > - Added `/mcp verbose` for full MCP server diagnostics, resources, and resource templates while keeping plain `/mcp` fast (#18610).
  > - Made plugin MCP loading accept both `mcpServers` and top-level server maps in `.mcp.json` (#18780).
  > - Improved realtime handoffs so background agents receive transcript deltas and can explicitly stay silent when appropriate (#18597, #18761, #18635).
  > -…
- **[rust-v0.124.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.124.0-alpha.3)** _(prerelease)_ — 0.124.0-alpha.3 _by @github-actions[bot] at 2026-04-23T16:20:15Z_
  > Release 0.124.0-alpha.3
- **[rust-v0.124.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.124.0-alpha.2)** _(prerelease)_ — 0.124.0-alpha.2 _by @github-actions[bot] at 2026-04-23T06:06:47Z_
  > Release 0.124.0-alpha.2
- **[rust-v0.124.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.124.0-alpha.1)** _(prerelease)_ — 0.124.0-alpha.1 _by @github-actions[bot] at 2026-04-23T02:43:34Z_
  > Release 0.124.0-alpha.1


## Merged PRs

- [#19044](https://github.com/openai/codex/pull/19044) **guide Windows to use -WindowStyle Hidden for Start-Process calls** — _by @iceweasel-oai, merged 2026-04-23T21:36:17Z_
- [#18288](https://github.com/openai/codex/pull/18288) **tests: isolate approval fixtures from host rules** — _by @bolinfest, merged 2026-04-23T21:12:10Z_
- [#19194](https://github.com/openai/codex/pull/19194) **Mark hooks schema fixtures as generated** — _by @abhinav-oai, merged 2026-04-23T21:11:17Z_
- [#19191](https://github.com/openai/codex/pull/19191) **Stabilize plugin MCP tools test** — _by @etraut-openai, merged 2026-04-23T21:08:41Z_
- [#18921](https://github.com/openai/codex/pull/18921) **Fix /review interrupt and TUI exit wedges** — _by @etraut-openai, merged 2026-04-23T20:28:13Z_
- [#19178](https://github.com/openai/codex/pull/19178) **Stabilize approvals popup disabled-row test** — _by @etraut-openai, merged 2026-04-23T20:21:36Z_
- [#19180](https://github.com/openai/codex/pull/19180) **use a version-specific suffix for command runner binary in .sandbox-bin** — _by @iceweasel-oai, merged 2026-04-23T20:16:27Z_
- [#19074](https://github.com/openai/codex/pull/19074) **Add app-server marketplace upgrade RPC** — _by @xli-oai, merged 2026-04-23T20:00:47Z_
- [#18946](https://github.com/openai/codex/pull/18946) **fix(exec-server): retain output until streams close** — _by @bolinfest, merged 2026-04-23T19:49:59Z_
- [#18287](https://github.com/openai/codex/pull/18287) **shell-escalation: carry resolved permission profiles** — _by @bolinfest, merged 2026-04-23T19:46:20Z_
- [#18878](https://github.com/openai/codex/pull/18878) **[rollout_trace] Trace tool and code-mode boundaries** — _by @cassirer-openai, merged 2026-04-23T19:22:11Z_
- [#18286](https://github.com/openai/codex/pull/18286) **mcp: include permission profiles in sandbox state** — _by @bolinfest, merged 2026-04-23T19:21:26Z_
- [#18285](https://github.com/openai/codex/pull/18285) **tui: carry permission profiles on user turns** — _by @bolinfest, merged 2026-04-23T18:54:18Z_
- [#18908](https://github.com/openai/codex/pull/18908) **Add remote thread config endpoint** — _by @rasmusrygaard, merged 2026-04-23T18:46:07Z_
- [#19168](https://github.com/openai/codex/pull/19168) **Use Auto-review wording for fallback rationale** — _by @maja-openai, merged 2026-04-23T18:42:43Z_
- [#19099](https://github.com/openai/codex/pull/19099) **Move marketplace add/remove and startup sync out of core.** — _by @xl-openai, merged 2026-04-23T18:27:18Z_
- [#19167](https://github.com/openai/codex/pull/19167) **ci: add macOS keychain entitlements** — _by @euroelessar, merged 2026-04-23T18:20:59Z_
- [#18255](https://github.com/openai/codex/pull/18255) **app-server: add Unix socket transport** — _by @euroelessar, merged 2026-04-23T18:09:26Z_
- [#18626](https://github.com/openai/codex/pull/18626) **Respect explicit untrusted project config** — _by @etraut-openai, merged 2026-04-23T17:51:18Z_
- [#19008](https://github.com/openai/codex/pull/19008) **[codex] Implement remote thread store methods** — _by @wiltzius-openai, merged 2026-04-23T17:49:28Z_
- [#18882](https://github.com/openai/codex/pull/18882) **[codex] Route live thread writes through ThreadStore** — _by @wiltzius-openai, merged 2026-04-23T17:17:09Z_
- [#19014](https://github.com/openai/codex/pull/19014) **Add excludeTurns parameter to thread/resume and thread/fork** — _by @ddr-oai, merged 2026-04-23T17:07:59Z_
- [#18892](https://github.com/openai/codex/pull/18892) **Add remote thread config loader protos** — _by @rasmusrygaard, merged 2026-04-23T17:06:06Z_
- [#19127](https://github.com/openai/codex/pull/19127) **feat: drop spawned-agent context instructions** — _by @jif-oai, merged 2026-04-23T16:54:46Z_
- [#18710](https://github.com/openai/codex/pull/18710) **[codex] Fix plugin marketplace help usage** — _by @xli-oai, merged 2026-04-23T16:48:37Z_
- [#18284](https://github.com/openai/codex/pull/18284) **tui: sync session permission profiles** — _by @bolinfest, merged 2026-04-23T16:47:54Z_
- [#19149](https://github.com/openai/codex/pull/19149) **Update safety check wording** — _by @etraut-openai, merged 2026-04-23T15:53:25Z_
- [#19130](https://github.com/openai/codex/pull/19130) **exec-server: wait for close after observed exit** — _by @jif-oai, merged 2026-04-23T14:50:18Z_
- [#19129](https://github.com/openai/codex/pull/19129) **Reject agents.max_threads with multi_agent_v2** — _by @jif-oai, merged 2026-04-23T11:31:54Z_
- [#19113](https://github.com/openai/codex/pull/19113) **Fix auto-review config compatibility across protocol and SDK** — _by @won-openai, merged 2026-04-23T10:12:56Z_
- [#18385](https://github.com/openai/codex/pull/18385) **Support MCP tools in hooks** — _by @abhinav-oai, merged 2026-04-23T07:33:58Z_
- [#19086](https://github.com/openai/codex/pull/19086) **app-server: include filesystem entries in permission requests** — _by @bolinfest, merged 2026-04-23T07:21:59Z_
- [#18070](https://github.com/openai/codex/pull/18070) **Extract plugin loading and marketplace logic into codex-core-plugins** — _by @xl-openai, merged 2026-04-16T06:13:18Z_


## Open PRs (new or updated)

- [#18897](https://github.com/openai/codex/pull/18897) **Add sticky environment API and thread state** — _by @starr-openai, updated 2026-04-23T22:05:18Z_
- [#19218](https://github.com/openai/codex/pull/19218) _(draft)_ **cli: add macOS seatbelt debug flags for Mach services and Apple events** — _by @conrad-oai, updated 2026-04-23T22:05:00Z_
- [#19193](https://github.com/openai/codex/pull/19193) **Support Codex Apps auth elicitations** — _by @mzeng-openai, updated 2026-04-23T22:04:16Z_
- [#18431](https://github.com/openai/codex/pull/18431) **app-server: add macOS device key provider** — _by @euroelessar, updated 2026-04-23T22:02:49Z_
- [#19206](https://github.com/openai/codex/pull/19206) **app-server: persist device key bindings in sqlite** — _by @euroelessar, updated 2026-04-23T22:02:24Z_
- [#18900](https://github.com/openai/codex/pull/18900) **Migrate fork and resume reads to thread store** — _by @wiltzius-openai, updated 2026-04-23T22:01:59Z_
- [#19214](https://github.com/openai/codex/pull/19214) **do not attempt ACLs on installed codex dir** — _by @iceweasel-oai, updated 2026-04-23T22:01:06Z_
- [#19114](https://github.com/openai/codex/pull/19114) _(draft)_ **Support ChatGPT Library file tools** — _by @lt-oai, updated 2026-04-23T22:00:22Z_
- [#18594](https://github.com/openai/codex/pull/18594) **feat(tui): add keymap slash command** — _by @fcoury-oai, updated 2026-04-23T21:58:24Z_
- [#19160](https://github.com/openai/codex/pull/19160) _(draft)_ **Make apply_patch streaming parser stateful** — _by @akshaynathan, updated 2026-04-23T21:58:23Z_
- [#18879](https://github.com/openai/codex/pull/18879) **[rollout_trace] Trace sessions and multi-agent edges** — _by @cassirer-openai, updated 2026-04-23T21:58:21Z_
- [#19216](https://github.com/openai/codex/pull/19216) _(draft)_ **[codex] Allow any granular approval requirement** — _by @abhinav-oai, updated 2026-04-23T21:57:53Z_
- [#17088](https://github.com/openai/codex/pull/17088) **[codex-analytics] ingest server requests and responses** — _by @rhan-oai, updated 2026-04-23T21:52:07Z_
- [#18077](https://github.com/openai/codex/pull/18077) **Add goal TUI UX (5 / 5)** — _by @etraut-openai, updated 2026-04-23T21:49:19Z_
- [#18950](https://github.com/openai/codex/pull/18950) **feat: let model providers own model discovery** — _by @celia-oai, updated 2026-04-23T21:49:09Z_
- [#18595](https://github.com/openai/codex/pull/18595) _(draft)_ **feat(tui): add vim composer mode** — _by @fcoury-oai, updated 2026-04-23T21:47:14Z_
- [#19170](https://github.com/openai/codex/pull/19170) **Skip disabled rows in selection menu numbering and default focus** — _by @canvrno-oai, updated 2026-04-23T21:46:32Z_
- [#18704](https://github.com/openai/codex/pull/18704) **/plugins: add marketplace install flow** — _by @canvrno-oai, updated 2026-04-23T21:46:29Z_
- [#18372](https://github.com/openai/codex/pull/18372) **Show action required in terminal title** — _by @canvrno-oai, updated 2026-04-23T21:46:25Z_
- [#18593](https://github.com/openai/codex/pull/18593) **feat(tui): add configurable keymap support** — _by @fcoury-oai, updated 2026-04-23T21:46:08Z_
- [#18576](https://github.com/openai/codex/pull/18576) _(draft)_ **feat(tui): render markdown tables responsively** — _by @fcoury-oai, updated 2026-04-23T21:41:42Z_
- [#18575](https://github.com/openai/codex/pull/18575) **fix(tui): reflow backlog on terminal resize** — _by @fcoury-oai, updated 2026-04-23T21:41:42Z_
- [#18446](https://github.com/openai/codex/pull/18446) **Reserve missing preserved paths in Linux sandbox policy** — _by @evawong-oai, updated 2026-04-23T21:40:20Z_
- [#19211](https://github.com/openai/codex/pull/19211) _(draft)_ **[codex] Fix Windows process management edge cases** — _by @iceweasel-oai, updated 2026-04-23T21:35:23Z_
- [#18880](https://github.com/openai/codex/pull/18880) **[rollout_trace] Add debug trace reduction command** — _by @cassirer-openai, updated 2026-04-23T21:31:35Z_
- [#19161](https://github.com/openai/codex/pull/19161) **ci: derive cache-stable Windows Bazel PATH** — _by @bolinfest, updated 2026-04-23T21:30:15Z_
- [#19028](https://github.com/openai/codex/pull/19028) **[codex] Add usage-limit banner analytics plumbing** — _by @jchu-oai, updated 2026-04-23T21:23:11Z_
- [#19209](https://github.com/openai/codex/pull/19209) **[codex] Emit usage-limit prompt analytics from TUI** — _by @jchu-oai, updated 2026-04-23T21:23:10Z_
- [#19207](https://github.com/openai/codex/pull/19207) **[codex] Forward Codex Apps tool call IDs to backend metadata** — _by @rreichel3-oai, updated 2026-04-23T21:15:55Z_
- [#19184](https://github.com/openai/codex/pull/19184) **fix: handle deferred network proxy denials** — _by @viyatb-oai, updated 2026-04-23T21:10:27Z_
- [#18907](https://github.com/openai/codex/pull/18907) **respect workspace option for disabling plugins** — _by @zamoshchin-openai, updated 2026-04-23T20:41:51Z_
- [#18919](https://github.com/openai/codex/pull/18919) _(draft)_ **[app-server] type client responses** — _by @rhan-oai, updated 2026-04-23T20:37:15Z_
- [#18735](https://github.com/openai/codex/pull/18735) **Update models.json** — _by @github-actions[bot], updated 2026-04-23T20:19:48Z_
- [#18076](https://github.com/openai/codex/pull/18076) **Add goal core runtime (4 / 5)** — _by @etraut-openai, updated 2026-04-23T20:17:38Z_
- [#19095](https://github.com/openai/codex/pull/19095) **feat: Use short SHA versions for curated plugin cache entries** — _by @xl-openai, updated 2026-04-23T20:02:26Z_
- [#19058](https://github.com/openai/codex/pull/19058) **Add /auto-review-denials retry approval flow** — _by @won-openai, updated 2026-04-23T20:00:09Z_
- [#19163](https://github.com/openai/codex/pull/19163) **Harden package-manager install policy** — _by @mcgrew-oai, updated 2026-04-23T19:35:50Z_
- [#19182](https://github.com/openai/codex/pull/19182) _(draft)_ **Codex/hooks model lifecycle - [OPENCLAW CONTRIBUTOR VINCENT K]** — _by @pash-openai, updated 2026-04-23T19:20:13Z_
- [#19060](https://github.com/openai/codex/pull/19060) _(draft)_ **feat(hooks): add compaction lifecycle hooks -- FROM EXTERNAL CONTRIBUTOR Vincent K** — _by @pash-openai, updated 2026-04-23T19:20:09Z_
- [#19080](https://github.com/openai/codex/pull/19080) **bazel: shard slower Rust test targets** — _by @bolinfest, updated 2026-04-23T18:52:22Z_
- [#19040](https://github.com/openai/codex/pull/19040) **[codex] Add unsandboxed command exec API** — _by @euroelessar, updated 2026-04-23T18:51:12Z_
- [#16221](https://github.com/openai/codex/pull/16221) **build(deps): bump zip from 2.4.2 to 8.4.0 in /codex-rs** — _by @dependabot[bot], updated 2026-04-23T18:33:43Z_
- [#19176](https://github.com/openai/codex/pull/19176) _(draft)_ **Add network proxy prompt guidance** — _by @viyatb-oai, updated 2026-04-23T18:32:50Z_
- [#18914](https://github.com/openai/codex/pull/18914) **fix(tui): use shared paste burst interval on Windows** — _by @fcoury-oai, updated 2026-04-23T18:30:34Z_
- [#18899](https://github.com/openai/codex/pull/18899) _(draft)_ **Wire selected environments into tools** — _by @starr-openai, updated 2026-04-23T18:27:07Z_
- [#18898](https://github.com/openai/codex/pull/18898) _(draft)_ **Load named environments from config** — _by @starr-openai, updated 2026-04-23T18:27:07Z_
- [#18584](https://github.com/openai/codex/pull/18584) **[4/4] Honor Streamable HTTP MCP placement** — _by @aibrahim-oai, updated 2026-04-23T18:15:28Z_
- [#19169](https://github.com/openai/codex/pull/19169) **Stabilize plugin MCP tool listing test** — _by @starr-openai, updated 2026-04-23T18:14:21Z_
- [#17245](https://github.com/openai/codex/pull/17245) **feat(tui): configurable keymaps and Vim mode** — _by @fcoury-oai, updated 2026-04-23T18:14:09Z_
- [#17679](https://github.com/openai/codex/pull/17679) **[plugins] Wait for explicit plugin app tools on first turn** — _by @ssetty-oai, updated 2026-04-23T17:52:43Z_
- [#19049](https://github.com/openai/codex/pull/19049) **feat: opt ChatGPT auth into agent task state** — _by @adrian-openai, updated 2026-04-23T17:47:58Z_
- [#19047](https://github.com/openai/codex/pull/19047) **feat: add agent identity primitives and opt-in flag** — _by @adrian-openai, updated 2026-04-23T17:00:08Z_
- [#19054](https://github.com/openai/codex/pull/19054) **feat: add background agent task auth** — _by @adrian-openai, updated 2026-04-23T16:59:58Z_
- [#19051](https://github.com/openai/codex/pull/19051) **feat: use thread agent task auth for inference** — _by @adrian-openai, updated 2026-04-23T16:59:51Z_
- [#19124](https://github.com/openai/codex/pull/19124) **Make MultiAgentV2 interruption markers assistant-authored** — _by @jif-oai, updated 2026-04-23T16:38:55Z_
- [#18996](https://github.com/openai/codex/pull/18996) **Publish Python SDK with Codex-pinned versioning** — _by @sdcoffey, updated 2026-04-23T16:20:25Z_
- [#18073](https://github.com/openai/codex/pull/18073) **Add goal persistence foundation (1 / 5)** — _by @etraut-openai, updated 2026-04-23T15:46:23Z_
- [#18075](https://github.com/openai/codex/pull/18075) **Add goal model tools (3 / 5)** — _by @etraut-openai, updated 2026-04-23T15:36:21Z_
- [#18074](https://github.com/openai/codex/pull/18074) **Add goal app-server API (2 / 5)** — _by @etraut-openai, updated 2026-04-23T15:36:03Z_
- [#18904](https://github.com/openai/codex/pull/18904) **feat: load AgentIdentity from JWT login/env** — _by @efrazer-oai, updated 2026-04-23T14:50:43Z_
- [#18811](https://github.com/openai/codex/pull/18811) **refactor: route Codex auth through AuthProvider** — _by @efrazer-oai, updated 2026-04-23T14:50:43Z_
- [#19093](https://github.com/openai/codex/pull/19093) **[codex] Omit fork turns from thread started notifications** — _by @euroelessar, updated 2026-04-23T07:15:16Z_
- [#19098](https://github.com/openai/codex/pull/19098) _(draft)_ **feat: Compress skill paths with root aliases** — _by @xl-openai, updated 2026-04-23T07:03:14Z_


## Closed PRs (not merged)

- [#19084](https://github.com/openai/codex/pull/19084) **hotfix** — _by @won-openai, closed 2026-04-23T21:48:46Z_
- [#19173](https://github.com/openai/codex/pull/19173) **ci: compute Windows Bazel PATH in setup action** — _by @bolinfest, closed 2026-04-23T18:34:38Z_
- [#19083](https://github.com/openai/codex/pull/19083) **Allow generated messages to opt out of compaction history** — _by @friel-openai, closed 2026-04-23T16:02:16Z_
- [#19089](https://github.com/openai/codex/pull/19089) **fix(tui): update permission sync test helpers** — _by @bolinfest, closed 2026-04-23T06:51:08Z_


## Notable Issues

- [#19213](https://github.com/openai/codex/issues/19213) **Clicking GPT-5.5 in non-project Codex Desktop chats has no effect** _[bug, codex-web]_ — _by @GGBondBlueWhale_
- [#19217](https://github.com/openai/codex/issues/19217) **Can't create socket: Operation not permitted - Full Access** _[bug, sandbox]_ — _by @AdsQnn_
- [#19215](https://github.com/openai/codex/issues/19215) **Limit hit very early in GPT 5.5** _[bug, rate-limits]_ — _by @SirTyson_
- [#19187](https://github.com/openai/codex/issues/19187) **Windows Codex app: Browser Use external navigation fails because nodeRepl.fetch cannot start codex app-server** _[bug, windows-os, app, app-server]_ — _by @ElScelt_
- [#19212](https://github.com/openai/codex/issues/19212) **Your system prompt is too big** _[bug, extension, rate-limits]_ — _by @alex-jitbit_ _(closed 2026-04-23T21:56:49Z)_
- [#17318](https://github.com/openai/codex/issues/17318) **can't change model and reasoning efforts sometimes** _[bug, app]_ — _by @sairion_
- [#19185](https://github.com/openai/codex/issues/19185) **config.toml context window settings are not respected** _[bug, context, config]_ — _by @kkellyoffical_
- [#19210](https://github.com/openai/codex/issues/19210) **Codex review tool cannot inspect local commits due to bwrap sandbox error and does not request escalation** _[bug, code-review, sandbox]_ — _by @bromdun_
- [#19208](https://github.com/openai/codex/issues/19208) **1m context window gone after Gpt 5.5 Release.** _[bug, context, app, config]_ — _by @Zakisb_ _(closed 2026-04-23T21:39:37Z)_
- [#16231](https://github.com/openai/codex/issues/16231) **High CPU usage on macOS after updating Codex in VS Code extension to 26.325.31654** _[bug, extension, regression]_ — _by @Filly-MinghaoLUO_
- [#19204](https://github.com/openai/codex/issues/19204) **Flagged while already being verified** _[bug, CLI, safety-check]_ — _by @Acurisu_
- [#11023](https://github.com/openai/codex/issues/11023) **Codex App is amazing. Please release for Linux.** _[enhancement, app]_ — _by @Suhaibinator_
- [#14925](https://github.com/openai/codex/issues/14925) **Windows app Settings no longer shows the WSL section, so I can't switch the agent runtime to WSL** _[bug, windows-os, app]_ — _by @lczanna_ _(closed 2026-03-18T12:37:26Z)_
- [#19199](https://github.com/openai/codex/issues/19199) **codex-cli 0.124.0 fails to start when hook config is present and codex_hooks is enabled** _[bug, regression, hooks, config]_ — _by @elmakus_
- [#19205](https://github.com/openai/codex/issues/19205) **Undo functionality should never depend on Git repository presence** _[bug, enhancement, extension]_ — _by @Jean-Heng-Huang_
- [#19202](https://github.com/openai/codex/issues/19202) **Deleting files without permission** _[bug, model-behavior, CLI, tool-calls]_ — _by @siddsach_ _(closed 2026-04-23T20:57:51Z)_
- [#19011](https://github.com/openai/codex/issues/19011) **Windows Codex Desktop creates automation thread but never starts agent turn** _[bug, windows-os, app, session]_ — _by @scottbarbag-ux_
- [#19121](https://github.com/openai/codex/issues/19121) **Codex CLI stream disconnected before completion after reconnect attempts** _[bug, windows-os, CLI, connectivity]_ — _by @ani-musicans_ _(closed 2026-04-23T15:31:56Z)_
- [#19203](https://github.com/openai/codex/issues/19203) **remote connection displays gpt5.5 as custom model** _[bug, app, app-server]_ — _by @winoros_
- [#18528](https://github.com/openai/codex/issues/18528) **iTerm2 cannot scroll up in interactive Codex session, including with --no-alt-screen** _[bug, TUI]_ — _by @hunterlarcuad_
- [#19201](https://github.com/openai/codex/issues/19201) **Codex App enters high CPU loop when project list contains non-git entries** _[bug, app]_ — _by @inevitabledawn_ _(closed 2026-04-23T20:45:36Z)_
- [#18293](https://github.com/openai/codex/issues/18293) **Model Issue** _[bug, agent]_ — _by @Probro-2009_
- [#14064](https://github.com/openai/codex/issues/14064) **Codex desktop shell tool calls do not inherit terminal auth/session environment** _[bug, app, terminal]_ — _by @rungchan2_
- [#19190](https://github.com/openai/codex/issues/19190) **fatal: Unable to create '.git/index.lock': Permission denied, has full permissions** _[bug, windows-os, sandbox]_ — _by @doublemover_
- [#19200](https://github.com/openai/codex/issues/19200) **selecting 5.5 in composer from start does not persist** _[bug, app]_ — _by @georgestander_
- [#14601](https://github.com/openai/codex/issues/14601) **Prevent Configuration Pollution: Separate `projects.xxxx.trusted_level` from `config.toml`** _[enhancement, config]_ — _by @milanglacier_
- [#11061](https://github.com/openai/codex/issues/11061) **Easily share user preferences across machines** _[enhancement]_ — _by @mattmorgis_
- [#19198](https://github.com/openai/codex/issues/19198) **Remote SSH connection falsely reports No `codex` found in PATH when `codex` is installed at a custom path** _[bug, app]_ — _by @yiteng-guo_
- [#11809](https://github.com/openai/codex/issues/11809) **Codex CLI fails on native Termux (Android) - authentication, request, and lock failures** _[bug, auth, CLI]_ — _by @wallentx_
- [#11267](https://github.com/openai/codex/issues/11267) **Ctrl+C can become non-functional during /review and MCP startup (startup/shutdown deadlock)** _[bug, TUI]_ — _by @mingley_ _(closed 2026-04-23T20:28:44Z)_
- [#18335](https://github.com/openai/codex/issues/18335) **Bug: Agent spawn slots leak across turns in persistent sessions (app-server / interactive CLI)** _[bug, subagent]_ — _by @hac425xxx_ _(closed 2026-04-22T13:17:45Z)_
- [#10450](https://github.com/openai/codex/issues/10450) **Remote Development in Codex Desktop App** _[enhancement, app]_ — _by @pocca2048_
- [#19197](https://github.com/openai/codex/issues/19197) **Persistent orphaned subagents, missing lifecycle controls, and eventual session freezes** _[bug, subagent]_ — _by @vzd3v_
- [#19137](https://github.com/openai/codex/issues/19137) **Chat history does not appear** _[bug, extension, session]_ — _by @AndySharez_
- [#19196](https://github.com/openai/codex/issues/19196) **'Full Access' permissions broken -- network calls are still sandboxed** _[bug, sandbox]_ — _by @agjones_
- [#19195](https://github.com/openai/codex/issues/19195) **Make Codex memory writability explicit when `memories = true` is enabled** _[enhancement, agent]_ — _by @sonnyb9_
- [#18981](https://github.com/openai/codex/issues/18981) **New handoff to worktree doesn't use environments** _[bug, app, session]_ — _by @ViaxCo_
- [#18341](https://github.com/openai/codex/issues/18341) **Mac app shows persistent blurred/translucent overlay below composer on Intel Mac (macOS 15.0.1, 0.122.0-alpha.1)** _[bug, app]_ — _by @vulcanhelix_
- [#19100](https://github.com/openai/codex/issues/19100) **Windows: internal PowerShell tool fails with 8009001d while user PowerShell works** _[bug, windows-os, tool-calls, app]_ — _by @aiajecom-cmd_
- [#10571](https://github.com/openai/codex/issues/10571) **"Bad request" error** _[bug, agent]_ — _by @atomical_
- [#14593](https://github.com/openai/codex/issues/14593) **Burning tokens very fast** _[bug, rate-limits]_ — _by @cy-ooi88_
- [#15396](https://github.com/openai/codex/issues/15396) **```Never update memories. You can only read them.```Is this type of instruction part of your future roadmap, or is this simply an error?** _[bug, model-behavior, CLI]_ — _by @Proview-China_ _(closed 2026-03-21T17:59:32Z)_
- [#19192](https://github.com/openai/codex/issues/19192) **Model selector broken on new chat** _[bug, app]_ — _by @lukemorales_
- [#15151](https://github.com/openai/codex/issues/15151) **Bug: OPENAI_API_KEY env var silently overrides OAuth token, causing misleading 401 error** _[bug, auth, CLI]_ — _by @zizhegao_
- [#14390](https://github.com/openai/codex/issues/14390) **Codex App: plan/checklist panel gets stuck on the first step and does not reflect completed tasks** _[bug, app]_ — _by @Afur_
- [#12816](https://github.com/openai/codex/issues/12816) **Please keep brew cask up to date** _[bug, CLI]_ — _by @smileBeda_ _(closed 2026-02-25T22:27:36Z)_
- [#19188](https://github.com/openai/codex/issues/19188) **"Unsupported value: 'low' is not supported with the 'gpt-5.2-codex-2026-01-14' model. Supported values are: 'medium'.** _[bug, azure, app]_ — _by @wiley-sayvant_ _(closed 2026-04-23T19:34:55Z)_
- [#19189](https://github.com/openai/codex/issues/19189) **Windows sandbox cannot spawn shell processes after escalation   disabled** _[bug, windows-os, sandbox, tool-calls]_ — _by @JDLondon7_
- [#16911](https://github.com/openai/codex/issues/16911) **Constant ask for MCP Tool approvals** _[bug, mcp, sandbox]_ — _by @codengine_
- [#19186](https://github.com/openai/codex/issues/19186) **`/subagents` should prioritize user-defined agent names over forced runtime nicknames** _[enhancement, TUI, subagent]_ — _by @zinc1018_


## Commits on `main`

- [`2e22896`](https://github.com/openai/codex/commit/2e228969be104daf2066dc7167e0674d47e8855c) guide Windows to use -WindowStyle Hidden for Start-Process calls (#19044) — _@iceweasel-oai_
- [`040976b`](https://github.com/openai/codex/commit/040976b21896d57bf65873f9eb3e792115e60f42) tests: isolate approval fixtures from host rules (#18288) — _@bolinfest_
- [`dc5cf1f`](https://github.com/openai/codex/commit/dc5cf1ff782d3f1e0c2a6fab4d8e67981c7a3772) Mark hooks schema fixtures as generated (#19194) — _@abhinav-oai_
- [`a50cb20`](https://github.com/openai/codex/commit/a50cb205b731134f5978b777e442fdc2e2cfb65d) Stabilize plugin MCP tools test (#19191) — _@etraut-openai_
- [`3f8c06e`](https://github.com/openai/codex/commit/3f8c06e457e1d2d9faa907738e97c0c5d3ab5bd5) Fix /review interrupt and TUI exit wedges (#18921) — _@etraut-openai_
- [`cccc1b6`](https://github.com/openai/codex/commit/cccc1b618ed2f4ddd2abdb2a22f5c83c7a958376) Stabilize approvals popup disabled-row test (#19178) — _@etraut-openai_
- [`d169bb5`](https://github.com/openai/codex/commit/d169bb541e6ce53e1d0a885afc7f4e79a5882650) use a version-specific suffix for command runner binary in .sandbox-bin (#19180) — _@iceweasel-oai_
- [`0d6a90c`](https://github.com/openai/codex/commit/0d6a90cd6bc27a337c6154fa81b779659bcc97e7) Add app-server marketplace upgrade RPC (#19074) — _@xli-oai_
- [`491a305`](https://github.com/openai/codex/commit/491a3058f6a09f5779937cf5dcc8bf43497cccef) fix(exec-server): retain output until streams close (#18946) — _@bolinfest_
- [`9c0eced`](https://github.com/openai/codex/commit/9c0eced39196671646862e9c918d09535ff7bff6) shell-escalation: carry resolved permission profiles (#18287) — _@bolinfest_
- [`6d09b67`](https://github.com/openai/codex/commit/6d09b6752d6a29994d97543189134c01c5c48a73) [rollout_trace] Trace tool and code-mode boundaries (#18878) — _@cassirer-openai_
- [`ff22982`](https://github.com/openai/codex/commit/ff22982d752fcf70e849c21d96b896b1b88d8988) mcp: include permission profiles in sandbox state (#18286) — _@bolinfest_
- [`f90cc0e`](https://github.com/openai/codex/commit/f90cc0ee648b1053431a92e46ec372b2a937ba44) tui: carry permission profiles on user turns (#18285) — _@bolinfest_
- [`f11583b`](https://github.com/openai/codex/commit/f11583b8f69f97426afc1c2722d84ae040535efc) Add remote thread config endpoint (#18908) — _@rasmusrygaard_
- [`cff337e`](https://github.com/openai/codex/commit/cff337e4e3bd2b84347ddcc26a69775bfc0638fc) Use Auto-review wording for fallback rationale (#19168) — _@maja-openai_
- [`198eddd`](https://github.com/openai/codex/commit/198eddd25dd9d2ccd9579cfa4f2cf3f76b48871b) Move marketplace add/remove and startup sync out of core. (#19099) — _@xl-openai_
- [`e9165b9`](https://github.com/openai/codex/commit/e9165b9f40beccb244464e2c41253ed78b7a5760) ci: add macOS keychain entitlements (#19167) — _@euroelessar_
- [`8a0ab3f`](https://github.com/openai/codex/commit/8a0ab3fc135022db644adec2ef02e2e0624d0d7d) app-server: add Unix socket transport (#18255) — _@euroelessar_
- [`c2423f4`](https://github.com/openai/codex/commit/c2423f42d148f83aff8e119a218885673a1c0e4f) Respect explicit untrusted project config (#18626) — _@etraut-openai_
- [`f1061d9`](https://github.com/openai/codex/commit/f1061d9d076c6dd49a81ccdf827205cac48908a6) [codex] Implement remote thread store methods (#19008) — _@wiltzius-openai_
- [`f1923a3`](https://github.com/openai/codex/commit/f1923a38b1af106eeac46c306670d56e83d3740a) [codex] Route live thread writes through ThreadStore (#18882) — _@wiltzius-openai_
- [`3d3028a`](https://github.com/openai/codex/commit/3d3028a5a95122e65e2ee66bfb1e215e001c003b) Add excludeTurns parameter to thread/resume and thread/fork (#19014) — _@ddr-oai_
- [`0b4f694`](https://github.com/openai/codex/commit/0b4f69434736c3744828553274fe9e45668ebafb) Add remote thread config loader protos (#18892) — _@rasmusrygaard_
- [`a2f868c`](https://github.com/openai/codex/commit/a2f868c9d6a208572992da1ad7a3ea8ed00b84a1) feat: drop spawned-agent context instructions (#19127) — _@jif-oai_
- [`e18bfee`](https://github.com/openai/codex/commit/e18bfeec914c79c397a30a89a32fad1d0dafdb44) [codex] Fix plugin marketplace help usage (#18710) — _@xli-oai_
- [`5c239ad`](https://github.com/openai/codex/commit/5c239ad7483ac58c475d5ff2c183f9e5b229094f) tui: sync session permission profiles (#18284) — _@bolinfest_
- [`1fda843`](https://github.com/openai/codex/commit/1fda843fbcd825d92f41005060a181ebda615ff7) Update safety check wording (#19149) — _@etraut-openai_
- [`45e1742`](https://github.com/openai/codex/commit/45e1742030ea53b519f8c6250464afe84964f6ca) exec-server: wait for close after observed exit (#19130) — _@jif-oai_
- [`d3b0449`](https://github.com/openai/codex/commit/d3b044938d245b519c1a5baefe880ef89e3a30c1) Reject agents.max_threads with multi_agent_v2 (#19129) — _@jif-oai_
- [`17ae906`](https://github.com/openai/codex/commit/17ae906048d1ad9682b6f94f1513ba5f807cd038) Fix auto-review config compatibility across protocol and SDK (#19113) — _@won-openai_
- [`305825a`](https://github.com/openai/codex/commit/305825abd99fc2ff17d5435b2c67b14459963893) Support MCP tools in hooks (#18385) — _@abhinav-oai_
- [`8bc667b`](https://github.com/openai/codex/commit/8bc667b07be22c005769e814bc529e30cff1ea27) app-server: include filesystem entries in permission requests (#19086) — _@bolinfest_
- [`993e3f4`](https://github.com/openai/codex/commit/993e3f407ea8213f7d32cb9367ae7616b7e15b4a) Persist target default reasoning on model upgrade (#19085) — _@shijie-oai_
- [`2ef2d67`](https://github.com/openai/codex/commit/2ef2d675d65aaf03b0d92e568a7dc885c31bc901) Clarify cloud requirements error messages (#19078) — _@gverma-openai_
- [`951be1a`](https://github.com/openai/codex/commit/951be1a8a1331110dc6e5a9d8071dbd045e859d0) feat: Warn and continue on unknown feature requirements (#19038) — _@xl-openai_
- [`fb6308c`](https://github.com/openai/codex/commit/fb6308cf64a02bd7c742c52c11607447522e7e36) Use remote plugin IDs for detail reads and enlarge list pages (#19079) — _@xl-openai_
- [`7730fb3`](https://github.com/openai/codex/commit/7730fb3ab8d784788aa0c495265cbdb28a273ab9) Add computer_use feature requirement key (#19071) — _@leoshimo-oai_
- [`08b5e96`](https://github.com/openai/codex/commit/08b5e96678331cb75a124d552d6e6c2bc5813a3a) TUI: preserve permission state after side conversations (#18924) — _@etraut-openai_
- [`23afa17`](https://github.com/openai/codex/commit/23afa173f4edb981f828b4b3587034ff99f7e223) Mark codex_hooks stable (#19012) — _@abhinav-oai_
- [`9d824cf`](https://github.com/openai/codex/commit/9d824cf4b4ff4f2d9e83162ab32d91b6ae08e0b4) app-server: accept command permission profiles (#18283) — _@bolinfest_
- [`bbff4ee`](https://github.com/openai/codex/commit/bbff4ee61a75917bd3d34ba88974cb5101c6ce27) Add safety check notification and error handling (#19055) — _@etraut-openai_
- [`0217099`](https://github.com/openai/codex/commit/02170996e63aed49dfd95835be8c417a511df869) Default Fast service tier for eligible ChatGPT plans (#19053) — _@shijie-oai_
- [`082fc4f`](https://github.com/openai/codex/commit/082fc4f632800f6aa5b0b3badcfbe3aa300f24a7) protocol: report session permission profiles (#18282) — _@bolinfest_
- [`2b2de3f`](https://github.com/openai/codex/commit/2b2de3f38bcfbd2b20d2ecab650be5aed91608e3) codex: support hooks in config.toml and requirements.toml (#18893) — _@eternal-openai_
- [`9955eac`](https://github.com/openai/codex/commit/9955eacd22e2ddf3e2096e2baa7609c6c93b2f6a) tui: fix approvals popup disabled shortcut test (#19072) — _@bolinfest_
- [`e8ba912`](https://github.com/openai/codex/commit/e8ba912fcc9971d899808870821b83614ced7508) test: set Rust test thread stack size (#19067) — _@bolinfest_
- [`5e71da1`](https://github.com/openai/codex/commit/5e71da14247f4d2dc2de1c0d71f9a1cac9de1a90) feat(request-permissions) approve with strict review (#19050) — _@dylan-hurd-oai_
- [`c6ab601`](https://github.com/openai/codex/commit/c6ab601824bfe8295646b0eef788597504e5bde3) chore(auto-review) feature => stable (#19063) — _@dylan-hurd-oai_
- [`8f0a92c`](https://github.com/openai/codex/commit/8f0a92c1e512aa469debc03ff353720ce7b84216) Fix relative stdio MCP cwd fallback (#19031) — _@mzeng-openai_
- [`3cc3763`](https://github.com/openai/codex/commit/3cc3763e6c0473d6f6666524709528fdcdb7d9c1) core: box multi-agent wrapper futures (#19059) — _@bolinfest_
- [`0e78ce8`](https://github.com/openai/codex/commit/0e78ce80eebbb08856e4a212ecd045ab42d72948) [3/4] Add executor-backed RMCP HTTP client (#18583) — _@aibrahim-oai_
- [`83ec1eb`](https://github.com/openai/codex/commit/83ec1eb5d69daf77c40e8bc3a39195f4cd679d68) Rename approvals reviewer variant to auto-review (#19056) — _@won-openai_
- [`eed0e07`](https://github.com/openai/codex/commit/eed0e07825a5def3ff73ea6c365eb46f8c241910) hooks: emit Bash PostToolUse when exec_command completes via write_stdin (#18888) — _@eternal-openai_
- [`6ca038b`](https://github.com/openai/codex/commit/6ca038bbd121b1a20d8d469ac3e57b3619a3c888) rollout: persist turn permission profiles (#18281) — _@bolinfest_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (deterministic template; no LLM for this run)._
