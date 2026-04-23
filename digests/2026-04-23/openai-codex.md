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
- [#19085](https://github.com/openai/codex/pull/19085) **Persist target default reasoning on model upgrade** — _by @shijie-oai, merged 2026-04-23T06:36:16Z_
- [#19078](https://github.com/openai/codex/pull/19078) **Clarify cloud requirements error messages** — _by @gverma-openai, merged 2026-04-23T06:07:08Z_
- [#19038](https://github.com/openai/codex/pull/19038) **feat: Warn and continue on unknown feature requirements** — _by @xl-openai, merged 2026-04-23T05:50:44Z_
- [#19079](https://github.com/openai/codex/pull/19079) **Use remote plugin IDs for detail reads and enlarge list pages** — _by @xl-openai, merged 2026-04-23T05:50:21Z_
- [#19071](https://github.com/openai/codex/pull/19071) **Add computer_use feature requirement key** — _by @leoshimo-oai, merged 2026-04-23T05:49:26Z_
- [#18924](https://github.com/openai/codex/pull/18924) **TUI: preserve permission state after side conversations** — _by @etraut-openai, merged 2026-04-23T05:40:35Z_
- [#19012](https://github.com/openai/codex/pull/19012) **Mark codex_hooks stable** — _by @abhinav-oai, merged 2026-04-23T05:34:05Z_
- [#18283](https://github.com/openai/codex/pull/18283) **app-server: accept command permission profiles** — _by @bolinfest, merged 2026-04-23T05:33:16Z_
- [#19055](https://github.com/openai/codex/pull/19055) **Add safety check notification and error handling** — _by @etraut-openai, merged 2026-04-23T05:24:12Z_
- [#19053](https://github.com/openai/codex/pull/19053) **Default Fast service tier for eligible ChatGPT plans** — _by @shijie-oai, merged 2026-04-23T04:54:44Z_
- [#18282](https://github.com/openai/codex/pull/18282) **protocol: report session permission profiles** — _by @bolinfest, merged 2026-04-23T04:29:33Z_
- [#18893](https://github.com/openai/codex/pull/18893) **codex: support hooks in config.toml and requirements.toml** — _by @eternal-openai, merged 2026-04-23T04:20:09Z_


## Open PRs (new or updated)

- [#18879](https://github.com/openai/codex/pull/18879) **[rollout_trace] Trace sessions and multi-agent edges** — _by @cassirer-openai, updated 2026-04-23T19:09:33Z_
- [#18077](https://github.com/openai/codex/pull/18077) **Add goal TUI UX (5 / 5)** — _by @etraut-openai, updated 2026-04-23T19:09:20Z_
- [#18076](https://github.com/openai/codex/pull/18076) **Add goal core runtime (4 / 5)** — _by @etraut-openai, updated 2026-04-23T19:09:05Z_
- [#18704](https://github.com/openai/codex/pull/18704) **/plugins: add marketplace install flow** — _by @canvrno-oai, updated 2026-04-23T19:07:24Z_
- [#19161](https://github.com/openai/codex/pull/19161) **ci: compute Windows Bazel PATH in setup action** — _by @bolinfest, updated 2026-04-23T19:06:50Z_
- [#18946](https://github.com/openai/codex/pull/18946) **fix(exec-server): retain output until streams close** — _by @bolinfest, updated 2026-04-23T19:05:17Z_
- [#19170](https://github.com/openai/codex/pull/19170) **Skip disabled rows in selection menu numbering and default focus** — _by @canvrno-oai, updated 2026-04-23T19:03:59Z_
- [#18897](https://github.com/openai/codex/pull/18897) **Add sticky environment API and thread state** — _by @starr-openai, updated 2026-04-23T19:03:06Z_
- [#19182](https://github.com/openai/codex/pull/19182) **Codex/hooks model lifecycle - [OPENCLAW CONTRIBUTOR VINCENT K]** — _by @pash-openai, updated 2026-04-23T18:59:05Z_
- [#18286](https://github.com/openai/codex/pull/18286) **mcp: include permission profiles in sandbox state** — _by @bolinfest, updated 2026-04-23T18:58:20Z_
- [#18288](https://github.com/openai/codex/pull/18288) **tests: isolate approval fixtures from host rules** — _by @bolinfest, updated 2026-04-23T18:54:38Z_
- [#18287](https://github.com/openai/codex/pull/18287) **shell-escalation: carry resolved permission profiles** — _by @bolinfest, updated 2026-04-23T18:54:38Z_
- [#18446](https://github.com/openai/codex/pull/18446) **Reserve missing preserved paths in Linux sandbox policy** — _by @evawong-oai, updated 2026-04-23T18:53:38Z_
- [#19080](https://github.com/openai/codex/pull/19080) **bazel: shard slower Rust test targets** — _by @bolinfest, updated 2026-04-23T18:52:22Z_
- [#19095](https://github.com/openai/codex/pull/19095) **feat: Use short SHA versions for curated plugin cache entries** — _by @xl-openai, updated 2026-04-23T18:51:23Z_
- [#19040](https://github.com/openai/codex/pull/19040) **[codex] Add unsandboxed command exec API** — _by @euroelessar, updated 2026-04-23T18:51:12Z_
- [#19180](https://github.com/openai/codex/pull/19180) **use a version-specific suffix for command runner binary in .sandbox-bin** — _by @iceweasel-oai, updated 2026-04-23T18:50:20Z_
- [#19074](https://github.com/openai/codex/pull/19074) **Add app-server marketplace upgrade RPC** — _by @xli-oai, updated 2026-04-23T18:49:56Z_
- [#18431](https://github.com/openai/codex/pull/18431) **app-server: add macOS device key provider** — _by @euroelessar, updated 2026-04-23T18:49:02Z_
- [#18950](https://github.com/openai/codex/pull/18950) **feat: let model providers own model discovery** — _by @celia-oai, updated 2026-04-23T18:48:54Z_
- [#19178](https://github.com/openai/codex/pull/19178) **Stabilize approvals popup disabled-row test** — _by @etraut-openai, updated 2026-04-23T18:43:29Z_
- [#18575](https://github.com/openai/codex/pull/18575) **fix(tui): reflow backlog on terminal resize** — _by @fcoury-oai, updated 2026-04-23T18:42:21Z_
- [#18880](https://github.com/openai/codex/pull/18880) **[rollout_trace] Add debug trace reduction command** — _by @cassirer-openai, updated 2026-04-23T18:42:16Z_
- [#16221](https://github.com/openai/codex/pull/16221) **build(deps): bump zip from 2.4.2 to 8.4.0 in /codex-rs** — _by @dependabot[bot], updated 2026-04-23T18:33:43Z_
- [#19163](https://github.com/openai/codex/pull/19163) **Harden package-manager install policy** — _by @mcgrew-oai, updated 2026-04-23T18:33:16Z_
- [#19176](https://github.com/openai/codex/pull/19176) _(draft)_ **Add network proxy prompt guidance** — _by @viyatb-oai, updated 2026-04-23T18:32:50Z_
- [#18914](https://github.com/openai/codex/pull/18914) **fix(tui): use shared paste burst interval on Windows** — _by @fcoury-oai, updated 2026-04-23T18:30:34Z_
- [#18899](https://github.com/openai/codex/pull/18899) _(draft)_ **Wire selected environments into tools** — _by @starr-openai, updated 2026-04-23T18:27:07Z_
- [#18898](https://github.com/openai/codex/pull/18898) _(draft)_ **Load named environments from config** — _by @starr-openai, updated 2026-04-23T18:27:07Z_
- [#18584](https://github.com/openai/codex/pull/18584) **[4/4] Honor Streamable HTTP MCP placement** — _by @aibrahim-oai, updated 2026-04-23T18:15:28Z_
- [#19169](https://github.com/openai/codex/pull/19169) **Stabilize plugin MCP tool listing test** — _by @starr-openai, updated 2026-04-23T18:14:21Z_
- [#17245](https://github.com/openai/codex/pull/17245) **feat(tui): configurable keymaps and Vim mode** — _by @fcoury-oai, updated 2026-04-23T18:14:09Z_
- [#17679](https://github.com/openai/codex/pull/17679) **[plugins] Wait for explicit plugin app tools on first turn** — _by @ssetty-oai, updated 2026-04-23T17:52:43Z_
- [#19049](https://github.com/openai/codex/pull/19049) **feat: opt ChatGPT auth into agent task state** — _by @adrian-openai, updated 2026-04-23T17:47:58Z_
- [#18900](https://github.com/openai/codex/pull/18900) **Migrate fork and resume reads to thread store** — _by @wiltzius-openai, updated 2026-04-23T17:27:04Z_
- [#18372](https://github.com/openai/codex/pull/18372) **Show action required in terminal title** — _by @canvrno-oai, updated 2026-04-23T17:00:34Z_
- [#19047](https://github.com/openai/codex/pull/19047) **feat: add agent identity primitives and opt-in flag** — _by @adrian-openai, updated 2026-04-23T17:00:08Z_
- [#19054](https://github.com/openai/codex/pull/19054) **feat: add background agent task auth** — _by @adrian-openai, updated 2026-04-23T16:59:58Z_
- [#19051](https://github.com/openai/codex/pull/19051) **feat: use thread agent task auth for inference** — _by @adrian-openai, updated 2026-04-23T16:59:51Z_
- [#18878](https://github.com/openai/codex/pull/18878) **[rollout_trace] Trace tool and code-mode boundaries** — _by @cassirer-openai, updated 2026-04-23T16:53:21Z_
- [#19124](https://github.com/openai/codex/pull/19124) **Make MultiAgentV2 interruption markers assistant-authored** — _by @jif-oai, updated 2026-04-23T16:38:55Z_
- [#18735](https://github.com/openai/codex/pull/18735) **Update models.json** — _by @github-actions[bot], updated 2026-04-23T16:33:00Z_
- [#18996](https://github.com/openai/codex/pull/18996) **Publish Python SDK with Codex-pinned versioning** — _by @sdcoffey, updated 2026-04-23T16:20:25Z_
- [#19160](https://github.com/openai/codex/pull/19160) _(draft)_ **Make apply_patch streaming parser stateful** — _by @akshaynathan, updated 2026-04-23T15:59:34Z_
- [#18073](https://github.com/openai/codex/pull/18073) **Add goal persistence foundation (1 / 5)** — _by @etraut-openai, updated 2026-04-23T15:46:23Z_
- [#18075](https://github.com/openai/codex/pull/18075) **Add goal model tools (3 / 5)** — _by @etraut-openai, updated 2026-04-23T15:36:21Z_
- [#18074](https://github.com/openai/codex/pull/18074) **Add goal app-server API (2 / 5)** — _by @etraut-openai, updated 2026-04-23T15:36:03Z_
- [#18904](https://github.com/openai/codex/pull/18904) **feat: load AgentIdentity from JWT login/env** — _by @efrazer-oai, updated 2026-04-23T14:50:43Z_
- [#18811](https://github.com/openai/codex/pull/18811) **refactor: route Codex auth through AuthProvider** — _by @efrazer-oai, updated 2026-04-23T14:50:43Z_
- [#18907](https://github.com/openai/codex/pull/18907) **option for disabling plugins** — _by @zamoshchin-openai, updated 2026-04-23T14:48:12Z_
- [#19114](https://github.com/openai/codex/pull/19114) _(draft)_ **Support ChatGPT Library file tools** — _by @lt-oai, updated 2026-04-23T09:03:31Z_
- [#19060](https://github.com/openai/codex/pull/19060) **feat(hooks): add compaction lifecycle hooks -- FROM EXTERNAL CONTRIBUTOR Vincent K** — _by @pash-openai, updated 2026-04-23T08:41:41Z_
- [#19093](https://github.com/openai/codex/pull/19093) **[codex] Omit fork turns from thread started notifications** — _by @euroelessar, updated 2026-04-23T07:15:16Z_
- [#19098](https://github.com/openai/codex/pull/19098) _(draft)_ **feat: Compress skill paths with root aliases** — _by @xl-openai, updated 2026-04-23T07:03:14Z_
- [#19084](https://github.com/openai/codex/pull/19084) **hotfix** — _by @won-openai, updated 2026-04-23T06:40:12Z_
- [#18305](https://github.com/openai/codex/pull/18305) **[tool_suggest] Improve prompting.** — _by @mzeng-openai, updated 2026-04-23T05:34:36Z_
- [#19082](https://github.com/openai/codex/pull/19082) **Drop duplicate contiguous user messages during compaction** — _by @friel-openai, updated 2026-04-23T05:17:46Z_
- [#19028](https://github.com/openai/codex/pull/19028) **[codex] Add CLI usage-limit banner analytics** — _by @jchu-oai, updated 2026-04-23T04:33:14Z_
- [#19058](https://github.com/openai/codex/pull/19058) **Add /auto-review-denials retry approval flow** — _by @won-openai, updated 2026-04-23T04:28:18Z_


## Closed PRs (not merged)

- [#19173](https://github.com/openai/codex/pull/19173) **ci: compute Windows Bazel PATH in setup action** — _by @bolinfest, closed 2026-04-23T18:34:38Z_
- [#19083](https://github.com/openai/codex/pull/19083) **Allow generated messages to opt out of compaction history** — _by @friel-openai, closed 2026-04-23T16:02:16Z_
- [#19089](https://github.com/openai/codex/pull/19089) **fix(tui): update permission sync test helpers** — _by @bolinfest, closed 2026-04-23T06:51:08Z_
- [#17177](https://github.com/openai/codex/pull/17177) **Stabilize legacy thread history turn ids** — _by @daniel-oai, closed 2026-04-23T06:39:41Z_
- [#15240](https://github.com/openai/codex/pull/15240) **Support concurrent Python SDK turns across threads** — _by @shaqayeq-oai, closed 2026-04-23T06:39:39Z_
- [#15246](https://github.com/openai/codex/pull/15246) **Add PR CI for the Python SDK** — _by @shaqayeq-oai, closed 2026-04-23T06:39:38Z_
- [#15245](https://github.com/openai/codex/pull/15245) **Maintain Python SDK artifacts for the pinned runtime** — _by @shaqayeq-oai, closed 2026-04-23T06:39:37Z_
- [#17108](https://github.com/openai/codex/pull/17108) **Add app-server support for spawn_agents_on_csv** — _by @khai-oai, closed 2026-04-23T06:39:35Z_


## Notable Issues

- [#11038](https://github.com/openai/codex/issues/11038) **I can't download the codex extension in vscode on a macbook pro Apple M4 Pro,** _[bug, extension]_ — _by @AnZoro1_
- [#18242](https://github.com/openai/codex/issues/18242) **Worktree creation fails with "invalid sandbox policy" when requirements.toml has `allowed_sandbox_modes`** _[bug, sandbox, app, config]_ — _by @faevourite_ _(closed 2026-04-23T19:09:20Z)_
- [#16231](https://github.com/openai/codex/issues/16231) **High CPU usage on macOS after updating Codex in VS Code extension to 26.325.31654** _[bug, extension, regression]_ — _by @Filly-MinghaoLUO_
- [#16088](https://github.com/openai/codex/issues/16088) **Starting a thread in a project without .codex leaves behind an empty .codex file** _[bug, sandbox, regression]_ — _by @aprendendo-codex_
- [#19183](https://github.com/openai/codex/issues/19183) **TUI runs out of context with gpt-5.5 despite auto-compact config** _[bug, TUI, CLI, context]_ — _by @brandomagnani_
- [#19177](https://github.com/openai/codex/issues/19177) **CLI version 0.124.0 is missing @openai/codex-linux-x64** _[bug, CLI, regression]_ — _by @michalzarsm_ _(closed 2026-04-23T19:00:33Z)_
- [#14593](https://github.com/openai/codex/issues/14593) **Burning tokens very fast** _[bug, rate-limits]_ — _by @cy-ooi88_
- [#18708](https://github.com/openai/codex/issues/18708) **Allow edit on any message, not just the last one** _[enhancement, app, session]_ — _by @sldx_
- [#19181](https://github.com/openai/codex/issues/19181) **Newst VS Code extension just makes codex flash and blink** _[bug, windows-os, extension]_ — _by @visnetwork_
- [#15680](https://github.com/openai/codex/issues/15680) **Codex agent is able to modify it's project-level .codex/config.toml file without asking for permission** _[bug, sandbox]_ — _by @RustyToms_ _(closed 2026-04-23T18:55:15Z)_
- [#19171](https://github.com/openai/codex/issues/19171) **Windows: Codex 0.123.0 injects both PATH and Path into the shell environment, breaking PowerShell Env provider and causing intermittent shell startup failures** _[bug, tool-calls]_ — _by @TiidSizaan_
- [#19151](https://github.com/openai/codex/issues/19151) **Allow queued prompts after queued /new** _[enhancement, TUI]_ — _by @JoeRoddy_
- [#12816](https://github.com/openai/codex/issues/12816) **Please keep brew cask up to date** _[bug, CLI]_ — _by @smileBeda_ _(closed 2026-02-25T22:27:36Z)_
- [#19179](https://github.com/openai/codex/issues/19179) **Allow spaces or more symbols in MCP server names** _[enhancement, mcp, config]_ — _by @oprypkhantt_
- [#19174](https://github.com/openai/codex/issues/19174) **GPT 5.5 Knowledge cut-off June 2024?** _[bug]_ — _by @guidedways_ _(closed 2026-04-23T18:44:43Z)_
- [#19172](https://github.com/openai/codex/issues/19172) **Allow per-file review & manual approval of code changes (like Claude Code)** _[enhancement, extension, TUI]_ — _by @nerdyabhi_
- [#19175](https://github.com/openai/codex/issues/19175) **Codex App built-in image_gen lacks deterministic gpt-image-2 output dimensions for generate and edit workflows** — _by @teamtumnus_
- [#17318](https://github.com/openai/codex/issues/17318) **can't change model and reasoning efforts sometimes** _[bug, app]_ — _by @sairion_
- [#18570](https://github.com/openai/codex/issues/18570) **Permission switch takes too much space** _[enhancement, extension]_ — _by @N1k1tung_ _(closed 2026-04-23T18:28:19Z)_
- [#16605](https://github.com/openai/codex/issues/16605) **Expected a base64-encoded data URL with an image MIME type** _[bug, tool-calls]_ — _by @johnthompson-pco_
- [#19132](https://github.com/openai/codex/issues/19132) **Self-exec via /proc/self/exe breaks when executable deleted** _[bug, tool-calls]_ — _by @dcolascione_ _(closed 2026-04-23T15:41:46Z)_
- [#18475](https://github.com/openai/codex/issues/18475) **-c config override for projects.<path>.trust_level is not ephemeral and can   persist the opposite value to ~/.codex/config.toml** _[bug, CLI, config]_ — _by @vieira_ _(closed 2026-04-23T17:51:19Z)_
- [#19146](https://github.com/openai/codex/issues/19146) **codex cli interactive mode doesn't honor config for domain filtering** _[bug, sandbox, CLI, config]_ — _by @ahornby_ _(closed 2026-04-23T17:32:11Z)_
- [#18918](https://github.com/openai/codex/issues/18918) **Windows sandbox applies DENY ACLs to .git directories in writable_roots, breaking git commits** _[bug, windows-os, sandbox]_ — _by @whyrv_
- [#19142](https://github.com/openai/codex/issues/19142) **Codex Pro GPT-5.4 long context regressed: ~672k worked Apr 22, ~290k fails Apr 23** _[bug, context]_ — _by @markobogoevski-dev_
- [#17054](https://github.com/openai/codex/issues/17054) **Add diff/content field to FileUpdateChange in JSON output** _[enhancement, exec]_ — _by @gadgetman6_
- [#19157](https://github.com/openai/codex/issues/19157) **On Windows, Codex cannot reliably execute rg from standard WinGet PATH location** _[bug, windows-os, sandbox, CLI]_ — _by @RR2DO2_ _(closed 2026-04-23T17:28:38Z)_
- [#18993](https://github.com/openai/codex/issues/18993) **Unable to open past conversation history in VS Code extension** _[bug, extension, session]_ — _by @iamhenryhuang_
- [#19159](https://github.com/openai/codex/issues/19159) **Claude Code stop-review gate returns empty output when finalMessage is missing** _[bug, code-review, CLI, app-server]_ — _by @Dfskid_ _(closed 2026-04-23T17:27:29Z)_
- [#19155](https://github.com/openai/codex/issues/19155) **Stale MCP Tool Schema After Server Restart** _[bug, mcp]_ — _by @abirmingham_
- [#19154](https://github.com/openai/codex/issues/19154) **codex mcp login appears to require dynamic client registration for private OAuth MCP servers; cannot use pre-registered client identity** _[bug, auth, mcp]_ — _by @rickyclegg_
- [#19125](https://github.com/openai/codex/issues/19125) **Private live plan file for Plan Mode** _[enhancement, plan]_ — _by @mstawick_
- [#19162](https://github.com/openai/codex/issues/19162) **"command failed; retry without sandbox" for every command in Codex CLI** _[bug, sandbox, CLI]_ — _by @Datamine_ _(closed 2026-04-23T16:45:40Z)_
- [#13542](https://github.com/openai/codex/issues/13542) **Windows: bundled rg in Codex Desktop resolves on PATH but fails with Access Denied in integrated PowerShell** _[bug, windows-os, app, terminal]_ — _by @neavo_
- [#19166](https://github.com/openai/codex/issues/19166) **macOS 26.4.1: repeated Codex crashes with AppleSystemPolicy provenance errors, dyld child SIGABRT, and Array buffer allocation failures on large threads** _[bug, tool-calls, app, session]_ — _by @fbcwimberley_
- [#17014](https://github.com/openai/codex/issues/17014) **Codex CLI recommends gpt-5.4, then fails with 'Selected model is at capacity' despite available quota** _[bug]_ — _by @debugger-net_ _(closed 2026-04-07T16:37:49Z)_
- [#19148](https://github.com/openai/codex/issues/19148) **babysit-pr watcher ignores Copilot PR reviews from copilot-pull-request-reviewer** _[bug, skills]_ — _by @clairernovotny_
- [#19145](https://github.com/openai/codex/issues/19145) **Integrate NVIDIA NIM as an Inference Provider** _[enhancement, custom-model]_ — _by @HackWidMaddy_ _(closed 2026-04-23T17:01:44Z)_
- [#7744](https://github.com/openai/codex/issues/7744) **Typing next message activates approval shortcuts** _[bug, TUI]_ — _by @grubbymediator_
- [#19143](https://github.com/openai/codex/issues/19143) **Support pasting images directly into Codex CLI** _[bug, TUI]_ — _by @CookGuo_
- [#19103](https://github.com/openai/codex/issues/19103) **055964c2-f6d5-42ff-a2cb-b7dc172a8c32** _[bug, connectivity]_ — _by @sphinxstudios_
- [#19140](https://github.com/openai/codex/issues/19140) **Subagent resume** _[bug, subagent]_ — _by @Yohe-Am_
- [#19165](https://github.com/openai/codex/issues/19165) **Approval accidentally gets dismissed when typing a prompt** _[bug, sandbox, TUI, CLI]_ — _by @themreza_ _(closed 2026-04-23T16:57:56Z)_
- [#19073](https://github.com/openai/codex/issues/19073) **Won't stop prompting a dozen or more times per task** _[bug, windows-os, sandbox]_ — _by @georgeou-1_
- [#19164](https://github.com/openai/codex/issues/19164) **Docs say remote_control, but Connections appears with remote_connections on Codex Desktop (app) 26.417** _[documentation, app, config]_ — _by @golioss1886_
- [#17354](https://github.com/openai/codex/issues/17354) **Recent Thread history wiped in app, present in CLI** _[bug, context, app]_ — _by @charles-waite_
- [#18113](https://github.com/openai/codex/issues/18113) **Codex CLI always uses sandbox** _[bug, sandbox, exec]_ — _by @bogosmer_ _(closed 2026-04-23T16:51:15Z)_


## Commits on `main`

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
