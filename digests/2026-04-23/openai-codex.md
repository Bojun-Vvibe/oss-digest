# openai/codex — 2026-04-23

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-22T23:59:59.000Z → 2026-04-23T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is the **0.123.0 release** ([rust-v0.123.0](https://github.com/openai/codex/releases/tag/rust-v0.123.0)), which ships a built-in `amazon-bedrock` model provider (#18744), `/mcp verbose` diagnostics (#18610), broader plugin MCP loading in `.mcp.json` (#18780), and richer realtime handoffs to background agents (#18597, #18761, #18635). Two alphas of 0.124.0 also went out the same day.

Two stability/safety pushes graduated to GA: **Auto-Review** (`GuardianApproval`) is now stable and on by default (#19063), and **`codex_hooks`** is marked stable for the next release (#19012). Hooks also got a meaningful expansion — they now support MCP tools, not just Bash (#18385), can be configured inline via `config.toml`/`requirements.toml` for enterprise rollouts (#18893), and emit `PostToolUse` for long-running `exec_command` finishing via `write_stdin` (#18888, fixes #16246). A companion compatibility fix (#19113) keeps the partial Guardian→Auto-review rename safe across mixed Codex installs and SDKs — worth reading if you maintain downstream tooling.

Bolinfest's permission-profile stack continued to land: rollouts now persist per-turn permission profiles (#18281), `SessionConfigured` reports them (#18282), `command/exec` accepts them (#18283), permission requests include filesystem entries (#19086), and TUI side-conversations no longer clobber permission state (#18924). Other notable merges: default Fast service tier for eligible ChatGPT plans (#19053), relative stdio MCP `cwd` fallback fix (#19031), and a strict-review approval flow for `request_permissions` (#19050).

On the open-PR side, watch the **HAI/Agent Identity reintroduction stack** (#19047, #19049, #19051, #19054), goal-mode stack (#18074–#18077), MultiAgentV2 polish (#19124, #19127, #19129), and a TUI scrollback reflow fix touching six issues (#18575).

Issue traffic is dominated by **`stream disconnected before completion`** reports across CLI, app, and Azure (#19121, #19107, #19103, #19102, #19122, #18960), Windows-specific desktop pain (#19128 path-rewriting, #19075 splash-hang, #19100 PowerShell tool 8009001d), high-CPU regressions in the VS Code extension (#19097, #19091), rate-limit/quota complaints around Memories and GPT-5.4 (#19105, #19123), and a notable sandbox bug where `apply_patch` hangs under `workspace-write` but works under full access (#19020).

## Releases

- **[rust-v0.123.0](https://github.com/openai/codex/releases/tag/rust-v0.123.0)** — 0.123.0 _by @github-actions[bot] at 2026-04-23T01:26:06Z_
  > ## New Features
  > - Added a built-in `amazon-bedrock` model provider with configurable AWS profile support (#18744).
  > - Added `/mcp verbose` for full MCP server diagnostics, resources, and resource templates while keeping plain `/mcp` fast (#18610).
  > - Made plugin MCP loading accept both `mcpServers` and top-level server maps in `.mcp.json` (#18780).
  > - Improved realtime handoffs so background agents receive transcript deltas and can explicitly stay silent when appropriate (#18597, #18761, #18635).
  > -…
- **[rust-v0.124.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.124.0-alpha.2)** _(prerelease)_ — 0.124.0-alpha.2 _by @github-actions[bot] at 2026-04-23T06:06:47Z_
  > Release 0.124.0-alpha.2
- **[rust-v0.124.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.124.0-alpha.1)** _(prerelease)_ — 0.124.0-alpha.1 _by @github-actions[bot] at 2026-04-23T02:43:34Z_
  > Release 0.124.0-alpha.1


## Merged PRs

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
- [#19072](https://github.com/openai/codex/pull/19072) **tui: fix approvals popup disabled shortcut test** — _by @bolinfest, merged 2026-04-23T04:01:27Z_
- [#19067](https://github.com/openai/codex/pull/19067) **test: set Rust test thread stack size** — _by @bolinfest, merged 2026-04-23T02:51:50Z_
- [#19050](https://github.com/openai/codex/pull/19050) **feat(request-permissions) approve with strict review** — _by @dylan-hurd-oai, merged 2026-04-23T01:56:33Z_
- [#19063](https://github.com/openai/codex/pull/19063) **chore(auto-review) feature => stable** — _by @dylan-hurd-oai, merged 2026-04-23T01:51:39Z_
- [#19031](https://github.com/openai/codex/pull/19031) **Fix relative stdio MCP cwd fallback** — _by @mzeng-openai, merged 2026-04-23T00:52:17Z_
- [#19059](https://github.com/openai/codex/pull/19059) **core: box multi-agent wrapper futures** — _by @bolinfest, merged 2026-04-23T00:48:14Z_
- [#18583](https://github.com/openai/codex/pull/18583) **[3/4] Add executor-backed RMCP HTTP client** — _by @aibrahim-oai, merged 2026-04-23T00:38:05Z_
- [#19056](https://github.com/openai/codex/pull/19056) **Rename approvals reviewer variant to auto-review** — _by @won-openai, merged 2026-04-23T00:22:35Z_
- [#18888](https://github.com/openai/codex/pull/18888) **hooks: emit Bash PostToolUse when exec_command completes via write_stdin** — _by @eternal-openai, merged 2026-04-23T00:14:23Z_
- [#18281](https://github.com/openai/codex/pull/18281) **rollout: persist turn permission profiles** — _by @bolinfest, merged 2026-04-23T00:00:29Z_


## Open PRs (new or updated)

- [#19129](https://github.com/openai/codex/pull/19129) **Reject agents.max_threads with multi_agent_v2** — _by @jif-oai, updated 2026-04-23T10:31:10Z_
- [#19127](https://github.com/openai/codex/pull/19127) **feat: drop spawned-agent context instructions** — _by @jif-oai, updated 2026-04-23T10:29:43Z_
- [#19124](https://github.com/openai/codex/pull/19124) **Make MultiAgentV2 interruption markers assistant-authored** — _by @jif-oai, updated 2026-04-23T10:25:36Z_
- [#19114](https://github.com/openai/codex/pull/19114) _(draft)_ **Support ChatGPT Library file tools** — _by @lt-oai, updated 2026-04-23T09:03:31Z_
- [#19060](https://github.com/openai/codex/pull/19060) **feat(hooks): add compaction lifecycle hooks -- FROM EXTERNAL CONTRIBUTOR Vincent K** — _by @pash-openai, updated 2026-04-23T08:41:41Z_
- [#18735](https://github.com/openai/codex/pull/18735) **Update models.json** — _by @github-actions[bot], updated 2026-04-23T08:35:16Z_
- [#18288](https://github.com/openai/codex/pull/18288) **tests: isolate approval fixtures from host rules** — _by @bolinfest, updated 2026-04-23T08:10:17Z_
- [#18287](https://github.com/openai/codex/pull/18287) **shell-escalation: carry resolved permission profiles** — _by @bolinfest, updated 2026-04-23T08:10:17Z_
- [#18286](https://github.com/openai/codex/pull/18286) **mcp: include permission profiles in sandbox state** — _by @bolinfest, updated 2026-04-23T08:10:17Z_
- [#18285](https://github.com/openai/codex/pull/18285) **tui: carry permission profiles on user turns** — _by @bolinfest, updated 2026-04-23T08:10:17Z_
- [#18284](https://github.com/openai/codex/pull/18284) **tui: sync session permission profiles** — _by @bolinfest, updated 2026-04-23T08:10:12Z_
- [#19099](https://github.com/openai/codex/pull/19099) **Move marketplace add/remove and startup sync out of core.** — _by @xl-openai, updated 2026-04-23T07:36:52Z_
- [#19083](https://github.com/openai/codex/pull/19083) **Allow generated messages to opt out of compaction history** — _by @friel-openai, updated 2026-04-23T07:32:26Z_
- [#19014](https://github.com/openai/codex/pull/19014) **Add excludeTurns parameter to thread/resume and thread/fork** — _by @ddr-oai, updated 2026-04-23T07:29:00Z_
- [#19093](https://github.com/openai/codex/pull/19093) **[codex] Omit fork turns from thread started notifications** — _by @euroelessar, updated 2026-04-23T07:15:16Z_
- [#19098](https://github.com/openai/codex/pull/19098) _(draft)_ **feat: Compress skill paths with root aliases** — _by @xl-openai, updated 2026-04-23T07:03:14Z_
- [#18076](https://github.com/openai/codex/pull/18076) **Add goal core runtime (4 / 5)** — _by @etraut-openai, updated 2026-04-23T07:02:17Z_
- [#19095](https://github.com/openai/codex/pull/19095) _(draft)_ **feat: Use short SHA versions for curated plugin cache entries** — _by @xl-openai, updated 2026-04-23T06:54:26Z_
- [#17679](https://github.com/openai/codex/pull/17679) **[plugins] Wait for explicit plugin app tools on first turn** — _by @ssetty-oai, updated 2026-04-23T06:48:49Z_
- [#19084](https://github.com/openai/codex/pull/19084) **hotfix** — _by @won-openai, updated 2026-04-23T06:40:12Z_
- [#18255](https://github.com/openai/codex/pull/18255) **app-server: add Unix socket transport** — _by @euroelessar, updated 2026-04-23T06:40:10Z_
- [#18077](https://github.com/openai/codex/pull/18077) **Add goal TUI UX (5 / 5)** — _by @etraut-openai, updated 2026-04-23T06:35:25Z_
- [#18878](https://github.com/openai/codex/pull/18878) **[rollout_trace] Trace tool and code-mode boundaries** — _by @cassirer-openai, updated 2026-04-23T06:35:19Z_
- [#18075](https://github.com/openai/codex/pull/18075) **Add goal model tools (3 / 5)** — _by @etraut-openai, updated 2026-04-23T06:34:37Z_
- [#18074](https://github.com/openai/codex/pull/18074) **Add goal app-server API (2 / 5)** — _by @etraut-openai, updated 2026-04-23T06:34:26Z_
- [#18908](https://github.com/openai/codex/pull/18908) _(draft)_ **Add a new config entry for session config** — _by @rasmusrygaard, updated 2026-04-23T06:01:27Z_
- [#18897](https://github.com/openai/codex/pull/18897) **Add sticky environment API and thread state** — _by @starr-openai, updated 2026-04-23T05:52:36Z_
- [#18899](https://github.com/openai/codex/pull/18899) _(draft)_ **Wire selected environments into tools** — _by @starr-openai, updated 2026-04-23T05:45:56Z_
- [#18898](https://github.com/openai/codex/pull/18898) _(draft)_ **Load named environments from config** — _by @starr-openai, updated 2026-04-23T05:45:56Z_
- [#18305](https://github.com/openai/codex/pull/18305) **[tool_suggest] Improve prompting.** — _by @mzeng-openai, updated 2026-04-23T05:34:36Z_
- [#19082](https://github.com/openai/codex/pull/19082) **Drop duplicate contiguous user messages during compaction** — _by @friel-openai, updated 2026-04-23T05:17:46Z_
- [#19080](https://github.com/openai/codex/pull/19080) **bazel: shard slower Rust test targets** — _by @bolinfest, updated 2026-04-23T04:56:57Z_
- [#19051](https://github.com/openai/codex/pull/19051) **feat: use thread agent task auth for inference** — _by @adrian-openai, updated 2026-04-23T04:34:09Z_
- [#19049](https://github.com/openai/codex/pull/19049) **feat: opt ChatGPT auth into agent task state** — _by @adrian-openai, updated 2026-04-23T04:33:33Z_
- [#19028](https://github.com/openai/codex/pull/19028) **[codex] Add CLI usage-limit banner analytics** — _by @jchu-oai, updated 2026-04-23T04:33:14Z_
- [#19047](https://github.com/openai/codex/pull/19047) **feat: add agent identity primitives and opt-in flag** — _by @adrian-openai, updated 2026-04-23T04:28:55Z_
- [#19054](https://github.com/openai/codex/pull/19054) **feat: add background agent task auth** — _by @adrian-openai, updated 2026-04-23T04:28:54Z_
- [#19058](https://github.com/openai/codex/pull/19058) **Add /auto-review-denials retry approval flow** — _by @won-openai, updated 2026-04-23T04:28:18Z_
- [#19074](https://github.com/openai/codex/pull/19074) _(draft)_ **Add app-server marketplace upgrade RPC** — _by @xli-oai, updated 2026-04-23T03:30:29Z_
- [#19064](https://github.com/openai/codex/pull/19064) **[5/5] Route OAuth bootstrap through HttpClient** — _by @aibrahim-oai, updated 2026-04-23T03:11:17Z_
- [#18882](https://github.com/openai/codex/pull/18882) **[codex] Route live thread writes through ThreadStore** — _by @wiltzius-openai, updated 2026-04-23T02:43:28Z_
- [#19068](https://github.com/openai/codex/pull/19068) _(draft)_ **Unified mentions in TUI** — _by @canvrno-oai, updated 2026-04-23T02:33:42Z_
- [#18584](https://github.com/openai/codex/pull/18584) **[4/4] Honor Streamable HTTP MCP placement** — _by @aibrahim-oai, updated 2026-04-23T02:31:14Z_
- [#18575](https://github.com/openai/codex/pull/18575) **fix(tui): reflow backlog on terminal resize** — _by @fcoury-oai, updated 2026-04-23T02:27:33Z_
- [#18576](https://github.com/openai/codex/pull/18576) _(draft)_ **feat(tui): render markdown tables responsively** — _by @fcoury-oai, updated 2026-04-23T02:19:19Z_
- [#18950](https://github.com/openai/codex/pull/18950) **feat: let model providers own model discovery** — _by @celia-oai, updated 2026-04-23T02:10:23Z_
- [#19048](https://github.com/openai/codex/pull/19048) **feat: expose AWS account state from account/read** — _by @celia-oai, updated 2026-04-23T02:02:00Z_
- [#18372](https://github.com/openai/codex/pull/18372) **Show action required in terminal title** — _by @canvrno-oai, updated 2026-04-23T02:01:29Z_
- [#18900](https://github.com/openai/codex/pull/18900) **Migrate fork and resume reads to thread store** — _by @wiltzius-openai, updated 2026-04-23T01:58:12Z_
- [#18811](https://github.com/openai/codex/pull/18811) **refactor: route Codex auth through AuthProvider** — _by @efrazer-oai, updated 2026-04-23T01:54:25Z_
- [#18904](https://github.com/openai/codex/pull/18904) **feat: load AgentIdentity from JWT login/env** — _by @efrazer-oai, updated 2026-04-23T01:54:24Z_
- [#18919](https://github.com/openai/codex/pull/18919) _(draft)_ **[app-server] type client responses** — _by @rhan-oai, updated 2026-04-23T00:37:30Z_


## Closed PRs (not merged)

- [#19089](https://github.com/openai/codex/pull/19089) **fix(tui): update permission sync test helpers** — _by @bolinfest, closed 2026-04-23T06:51:08Z_
- [#17177](https://github.com/openai/codex/pull/17177) **Stabilize legacy thread history turn ids** — _by @daniel-oai, closed 2026-04-23T06:39:41Z_
- [#15240](https://github.com/openai/codex/pull/15240) **Support concurrent Python SDK turns across threads** — _by @shaqayeq-oai, closed 2026-04-23T06:39:39Z_
- [#15246](https://github.com/openai/codex/pull/15246) **Add PR CI for the Python SDK** — _by @shaqayeq-oai, closed 2026-04-23T06:39:38Z_
- [#15245](https://github.com/openai/codex/pull/15245) **Maintain Python SDK artifacts for the pinned runtime** — _by @shaqayeq-oai, closed 2026-04-23T06:39:37Z_
- [#17108](https://github.com/openai/codex/pull/17108) **Add app-server support for spawn_agents_on_csv** — _by @khai-oai, closed 2026-04-23T06:39:35Z_
- [#17171](https://github.com/openai/codex/pull/17171) **Route Fed API-key logins with existing base-url config** — _by @jackz-oai, closed 2026-04-23T03:30:37Z_
- [#19021](https://github.com/openai/codex/pull/19021) **Update skill truncation warning copy** — _by @sayan-oai, closed 2026-04-23T00:26:17Z_


## Notable Issues

- [#19126](https://github.com/openai/codex/issues/19126) **Codex Chronicle triggers high coreaudiod CPU with Rogue Amoeba ARK / SoundSource** _[bug, app]_ — _by @cyberpapiii_
- [#18977](https://github.com/openai/codex/issues/18977) **macOS: stdio MCP tool calls can fail with raw `Transport closed` even when the underlying operation is healthy** _[bug, mcp]_ — _by @alario-tang_
- [#17014](https://github.com/openai/codex/issues/17014) **Codex CLI recommends gpt-5.4, then fails with 'Selected model is at capacity' despite available quota** _[bug]_ — _by @debugger-net_ _(closed 2026-04-07T16:37:49Z)_
- [#19075](https://github.com/openai/codex/issues/19075) **Windows app hangs on splash when saved auth references a deactivated workspace instead of prompting re-login** _[bug, windows-os, auth, app]_ — _by @Sasha50701_
- [#19128](https://github.com/openai/codex/issues/19128) **Windows Codex Desktop rewrites threads.cwd to \\?\-prefixed paths on startup, splitting one workspace into two and hiding thread history** _[bug, windows-os, app, session]_ — _by @moguuu21_
- [#18755](https://github.com/openai/codex/issues/18755) **macOS packaging error: SkyComputerUseClient built for macOS 15.0 crashes on macOS 14.x** _[bug, app, skills]_ — _by @ianfoo_
- [#19125](https://github.com/openai/codex/issues/19125) **Private live plan file for Plan Mode** _[enhancement, CLI, plan]_ — _by @mstawick_
- [#19037](https://github.com/openai/codex/issues/19037) **Session lost after battery shutdown + update — no rollout persisted for resumable session** _[bug, agent]_ — _by @ildeb_
- [#19123](https://github.com/openai/codex/issues/19123) **Proof that there's a bug depleting all my limits!** _[bug, rate-limits, app]_ — _by @HennieReyneke_
- [#19122](https://github.com/openai/codex/issues/19122) **macOS app: stream disconnected before completion after image_generation_call events** _[bug, app, connectivity]_ — _by @iqqs33i-stack_
- [#19091](https://github.com/openai/codex/issues/19091) **High CPU in second VS Code project window when Codex panel is opened, while first project window is already open** _[bug, extension]_ — _by @MinePacu_
- [#13917](https://github.com/openai/codex/issues/13917) **Codex desktop on Windows cannot start PowerShell host in session (8009001d)** _[bug, windows-os]_ — _by @TaylorAdamCA_
- [#19009](https://github.com/openai/codex/issues/19009) **Compact fails in CLI and Codex VS Code Extension** _[bug, azure, context]_ — _by @douglasware_
- [#18456](https://github.com/openai/codex/issues/18456) **Windows desktop app regression after in-app upgrade: settings/language break, slash commands stop working, Fast Mode missing** _[bug, windows-os, app]_ — _by @weianauto_
- [#14310](https://github.com/openai/codex/issues/14310) **Codex ran out of room in the model's context window. Start a new thread or clear earlier history before retrying.** _[bug, context]_ — _by @xipeng5_
- [#13778](https://github.com/openai/codex/issues/13778) **Codex reading files like .env!** _[bug, app]_ — _by @kriss145_
- [#19121](https://github.com/openai/codex/issues/19121) **Codex CLI stream disconnected before completion after reconnect attempts** _[bug, windows-os, CLI, connectivity]_ — _by @ani-musicans_
- [#14793](https://github.com/openai/codex/issues/14793) **MCP handshake fails with JetBrains idea server: Unexpected content type "missing-content-type"** _[bug, mcp, CLI]_ — _by @small-thanks_ _(closed 2026-03-27T04:33:28Z)_
- [#19120](https://github.com/openai/codex/issues/19120) **Codex left WezTerm Lua config broken after edit instead of validating available config parser** _[bug, model-behavior, windows-os, CLI]_ — _by @ani-musicans_
- [#16849](https://github.com/openai/codex/issues/16849) **VSCode extension: open-in-targets error loop causes high CPU (Code Helper Renderer 100%+)** _[bug, extension]_ — _by @ofrnsb_ _(closed 2026-04-13T23:38:05Z)_
- [#19119](https://github.com/openai/codex/issues/19119) **Add `stdin` field to `exec_command` for reliable multiline script execution** _[enhancement, CLI, tool-calls]_ — _by @morozow_
- [#4003](https://github.com/openai/codex/issues/4003) **Patched files have mixed line endings on Windows** _[bug, windows-os, tool-calls]_ — _by @chausner_
- [#13542](https://github.com/openai/codex/issues/13542) **Windows: bundled rg in Codex Desktop resolves on PATH but fails with Access Denied in integrated PowerShell** _[bug, windows-os, app, terminal]_ — _by @neavo_
- [#18963](https://github.com/openai/codex/issues/18963) **VS Code extension: Existing chat thread gets stuck only in one workspace until thread receives a new response elsewhere** _[bug, extension, session]_ — _by @Shibacov_
- [#19118](https://github.com/openai/codex/issues/19118) **Sandbox denial errors don't tell the agent which paths are writable** _[enhancement, sandbox, CLI]_ — _by @morozow_
- [#19117](https://github.com/openai/codex/issues/19117) **VS Code Codex extension on macOS breaks native Cmd+` window cycling when focus is in the Codex pane** _[bug, extension]_ — _by @filip-franek_
- [#19107](https://github.com/openai/codex/issues/19107) **stream disconnected before completion** _[bug, app, connectivity]_ — _by @shettyakanksha5-ctrl_
- [#19116](https://github.com/openai/codex/issues/19116) **Codex CLI freezes near auto-compaction threshold and drifts with very large context windows** _[bug, windows-os, CLI, context]_ — _by @huanxxxx_
- [#18749](https://github.com/openai/codex/issues/18749) **Bug: Codex macOS app ENOENT when viewing remote repo over SSH** _[bug, app]_ — _by @nvemuri4649_
- [#19103](https://github.com/openai/codex/issues/19103) **055964c2-f6d5-42ff-a2cb-b7dc172a8c32** _[bug, windows-os, CLI, connectivity]_ — _by @sphinxstudios_
- [#16857](https://github.com/openai/codex/issues/16857) **High GPU usage while the app is “thinking” due to tiny useless animation** _[bug, app]_ — _by @homm_
- [#19115](https://github.com/openai/codex/issues/19115) **Codex App: non-git saved workspace roots can trigger renderer high CPU and Git warning loops** _[bug, app]_ — _by @SKYhuangjing_
- [#19057](https://github.com/openai/codex/issues/19057) **Codex Web still shows "Upgrade to Pro" in Rate limits menu for an already-Pro account** _[bug, rate-limits]_ — _by @GGBondBlueWhale_
- [#9544](https://github.com/openai/codex/issues/9544) **Error running remote compact task: stream disconnected before completion** _[bug, context]_ — _by @loop-uh_ _(closed 2026-03-27T04:11:33Z)_
- [#19112](https://github.com/openai/codex/issues/19112) **Codex App: Persistent PR Review Loop (Claude Code parity)** _[enhancement, code-review, app, session]_ — _by @Iydah_
- [#18589](https://github.com/openai/codex/issues/18589) **Abnormally high ram usage in mac app** _[bug, app]_ — _by @lauorbit_
- [#19111](https://github.com/openai/codex/issues/19111) **System prompt does NOT survive compaction** _[bug, CLI, context]_ — _by @Morriz_
- [#18960](https://github.com/openai/codex/issues/18960) **Frequent reconnect loop in Codex App: websocket closed by server before response.completed** _[bug, connectivity]_ — _by @GGBondBlueWhale_
- [#9203](https://github.com/openai/codex/issues/9203) **Please make "/undo" back** _[enhancement, TUI, session]_ — _by @SunRunAway_
- [#19110](https://github.com/openai/codex/issues/19110) **Codex CLI version bug** _[bug, CLI]_ — _by @leon37_
- [#19105](https://github.com/openai/codex/issues/19105) **"Memories" consuming rate limit disproportionately** _[bug, rate-limits, app]_ — _by @amanzoori-hm_
- [#19109](https://github.com/openai/codex/issues/19109) **Codex Desktop on macOS was very slow today and kept reconnecting to the local app-server** _[bug, mcp, app, session]_ — _by @jianzhangg_
- [#13858](https://github.com/openai/codex/issues/13858) **Provide a way to view the content of the background terminal** _[enhancement, TUI]_ — _by @p81sunshine_
- [#19108](https://github.com/openai/codex/issues/19108) **macOS 桌面版今天明显卡顿，并伴随 unknown conversation / Not a git repository / MCP cleanup 异常** _[bug, mcp, app, session]_ — _by @jianzhangg_
- [#17835](https://github.com/openai/codex/issues/17835) **Codex ripped through quota today on my Plus account within 15-20 minutes!** _[bug, rate-limits, app]_ — _by @SirBughunter_ _(closed 2026-04-14T20:33:30Z)_
- [#16537](https://github.com/openai/codex/issues/16537) **Weekly Limit Drops Quickly Compared to 5-Hour Limit** _[bug, rate-limits, app]_ — _by @ychi_ _(closed 2026-04-02T15:09:28Z)_
- [#17507](https://github.com/openai/codex/issues/17507) **weekly usage burned in 1 day** _[bug, rate-limits, CLI]_ — _by @tltrogl_ _(closed 2026-04-12T04:14:16Z)_
- [#18175](https://github.com/openai/codex/issues/18175) **Subagent UI "Open" button not working** _[bug, extension, subagent]_ — _by @justinTM_
- [#10535](https://github.com/openai/codex/issues/10535) **Desktop app: devcontainer-like sandbox environment** _[enhancement, sandbox, app]_ — _by @marco-altran_
- [#19106](https://github.com/openai/codex/issues/19106) **Always show subagents in the left sidebar** _[enhancement, app, subagent]_ — _by @thisIsLoading_ _(closed 2026-04-23T08:20:02Z)_
- [#19101](https://github.com/openai/codex/issues/19101) **remote file search is unreliable to use** _[bug, windows-os, app]_ — _by @winoros_
- [#19102](https://github.com/openai/codex/issues/19102) **[bug] stream disconnected before completion returned when the request is sent** _[bug, CLI, connectivity]_ — _by @stackoverworld_ _(closed 2026-04-23T08:05:21Z)_
- [#19104](https://github.com/openai/codex/issues/19104) **Codex Skills menu not found** _[enhancement, extension, skills]_ — _by @wssf812_
- [#18404](https://github.com/openai/codex/issues/18404) **[Bug] Computer Use plugin remains "unavailable" on macOS Intel (x86_64) despite MCP server showing as enabled and latest Intel build** _[bug, mcp, app, skills]_ — _by @liyuyu0505_
- [#19100](https://github.com/openai/codex/issues/19100) **Windows: internal PowerShell tool fails with 8009001d while user PowerShell works** _[bug, windows-os, tool-calls, app]_ — _by @aiajecom-cmd_
- [#18297](https://github.com/openai/codex/issues/18297) **Add folders in @ search** _[enhancement, app]_ — _by @DiamondNectar_
- [#9419](https://github.com/openai/codex/issues/9419) **Autocompact won't turn off** _[bug, context]_ — _by @pauldonnan_ _(closed 2026-01-17T17:30:05Z)_
- [#14190](https://github.com/openai/codex/issues/14190) **Codex 5.4 / 5.3-codex models fail with “not supported for ChatGPT account” error** _[bug, app]_ — _by @hjkim0015_ _(closed 2026-03-10T06:39:44Z)_
- [#19020](https://github.com/openai/codex/issues/19020) **macOS 0.122.0: apply_patch hangs under workspace-write but succeeds under danger-full-access** _[bug, sandbox, tool-calls]_ — _by @andrewalex_
- [#18958](https://github.com/openai/codex/issues/18958) **Plugin Linear authentication token expired in threads** _[bug, auth, mcp, skills]_ — _by @pederlengquist_
- [#19097](https://github.com/openai/codex/issues/19097) **Renderer process stuck in infinite microtask loop, consuming 100–180% CPU and disconnecting Remote SSH sessions** _[bug, extension]_ — _by @Yixi-Rao_
- [#18967](https://github.com/openai/codex/issues/18967) **Skills not showing for remote(s) in Codex Desktop** _[bug, app, skills]_ — _by @justinTM_
- [#18676](https://github.com/openai/codex/issues/18676) **Resume session: stream disconnected before completion** _[bug, session]_ — _by @Ashwanisr_
- [#19092](https://github.com/openai/codex/issues/19092) **MCP servers started for Codex subagents remain running after the subagent completes and close_agent succeeds** _[bug, mcp, CLI, subagent]_ — _by @lawrenceg4_ _(closed 2026-04-23T07:07:26Z)_
- [#18183](https://github.com/openai/codex/issues/18183) **Remote SSH connection fail if remote default shell use fish** _[bug, app, connectivity]_ — _by @Clouder0_
- [#19090](https://github.com/openai/codex/issues/19090) **Codex App truncates injected Available skills metadata and deterministically drops the same repo-local skills** _[bug, agent, skills]_ — _by @KevinSpringer1_
- [#18549](https://github.com/openai/codex/issues/18549) **SkyComputerUseClient unexpectedly exited** _[bug, tool-calls, app]_ — _by @tangxiaonian_
- [#19094](https://github.com/openai/codex/issues/19094) **Desktop automation UI shows recurring interval for one-shot heartbeat (COUNT=1)** _[bug, app]_ — _by @TorinAsakura_
- [#18318](https://github.com/openai/codex/issues/18318) **Inefficient context compression** _[enhancement, context, app]_ — _by @PMCSummer_ _(closed 2026-04-17T09:36:20Z)_


## Commits on `main`

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
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
