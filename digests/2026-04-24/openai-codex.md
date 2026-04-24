# openai/codex — 2026-04-24

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-23T08:37:51.049Z → 2026-04-24T08:37:51.049Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

> _Deterministic template only — no LLM summary for this run._

## Releases

- **[rust-v0.125.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.125.0-alpha.1)** _(prerelease)_ — 0.125.0-alpha.1 _by @github-actions[bot] at 2026-04-24T06:35:27Z_
  > Release 0.125.0-alpha.1
- **[rust-v0.124.0](https://github.com/openai/codex/releases/tag/rust-v0.124.0)** — 0.124.0 _by @github-actions[bot] at 2026-04-23T18:29:40Z_
  > ## New Features
  > - The TUI now has quick reasoning controls: `Alt+,` lowers reasoning, `Alt+.` raises it, and accepted model upgrades now reset reasoning to the new model’s default instead of carrying over stale settings. (#18866, #19085)
  > - App-server sessions can now manage multiple environments and choose an environment and working directory per turn, which makes multi-workspace and remote setups easier to target precisely. (#18401, #18416)
  > - Added first-class Amazon Bedrock support for OpenAI-…
- **[rust-v0.124.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.124.0-alpha.3)** _(prerelease)_ — 0.124.0-alpha.3 _by @github-actions[bot] at 2026-04-23T16:20:15Z_
  > Release 0.124.0-alpha.3


## Merged PRs

- [#19294](https://github.com/openai/codex/pull/19294) **Hide unsupported MCP bearer_token from config schema** — _by @etraut-openai, merged 2026-04-24T07:17:44Z_
- [#19247](https://github.com/openai/codex/pull/19247) **chore: apply truncation policy to unified_exec** — _by @sayan-oai, merged 2026-04-24T07:17:39Z_
- [#19292](https://github.com/openai/codex/pull/19292) **Reject unsupported js_repl image MIME types** — _by @etraut-openai, merged 2026-04-24T07:14:52Z_
- [#19232](https://github.com/openai/codex/pull/19232) **ci: reuse Bazel CI startup for target-discovery queries** — _by @bolinfest, merged 2026-04-24T06:26:18Z_
- [#19261](https://github.com/openai/codex/pull/19261) **Resolve relative agent role config paths from layers** — _by @etraut-openai, merged 2026-04-24T06:23:11Z_
- [#19231](https://github.com/openai/codex/pull/19231) **permissions: make profiles represent enforcement** — _by @bolinfest, merged 2026-04-24T06:02:18Z_
- [#18917](https://github.com/openai/codex/pull/18917) **[codex] Support remote plugin install writes** — _by @xli-oai, merged 2026-04-24T05:10:16Z_
- [#19206](https://github.com/openai/codex/pull/19206) **app-server: persist device key bindings in sqlite** — _by @euroelessar, merged 2026-04-24T04:55:56Z_
- [#18950](https://github.com/openai/codex/pull/18950) **feat: let model providers own model discovery** — _by @celia-oai, merged 2026-04-24T04:28:25Z_
- [#19095](https://github.com/openai/codex/pull/19095) **feat: Use short SHA versions for curated plugin cache entries** — _by @xl-openai, merged 2026-04-24T04:15:04Z_
- [#18879](https://github.com/openai/codex/pull/18879) **[rollout_trace] Trace sessions and multi-agent edges** — _by @cassirer-openai, merged 2026-04-24T02:29:46Z_
- [#18897](https://github.com/openai/codex/pull/18897) **Add sticky environment API and thread state** — _by @starr-openai, merged 2026-04-24T01:57:13Z_
- [#18880](https://github.com/openai/codex/pull/18880) **[rollout_trace] Add debug trace reduction command** — _by @cassirer-openai, merged 2026-04-24T01:56:49Z_
- [#19048](https://github.com/openai/codex/pull/19048) **feat: expose AWS account state from account/read** — _by @celia-oai, merged 2026-04-24T01:53:13Z_
- [#19246](https://github.com/openai/codex/pull/19246) **Increase app-server WebSocket outbound buffer** — _by @etraut-openai, merged 2026-04-24T01:47:29Z_
- [#18811](https://github.com/openai/codex/pull/18811) **refactor: route Codex auth through AuthProvider** — _by @efrazer-oai, merged 2026-04-24T00:14:03Z_
- [#19161](https://github.com/openai/codex/pull/19161) **ci: derive cache-stable Windows Bazel PATH** — _by @bolinfest, merged 2026-04-23T22:28:01Z_
- [#19214](https://github.com/openai/codex/pull/19214) **do not attempt ACLs on installed codex dir** — _by @iceweasel-oai, merged 2026-04-23T22:21:49Z_
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


## Open PRs (new or updated)

- [#18735](https://github.com/openai/codex/pull/18735) **Update models.json** — _by @github-actions[bot], updated 2026-04-24T08:32:20Z_
- [#18075](https://github.com/openai/codex/pull/18075) **Add goal model tools (3 / 5)** — _by @etraut-openai, updated 2026-04-24T08:30:06Z_
- [#18077](https://github.com/openai/codex/pull/18077) **Add goal TUI UX (5 / 5)** — _by @etraut-openai, updated 2026-04-24T08:20:02Z_
- [#18076](https://github.com/openai/codex/pull/18076) **Add goal core runtime (4 / 5)** — _by @etraut-openai, updated 2026-04-24T08:19:46Z_
- [#19308](https://github.com/openai/codex/pull/19308) **Surface reasoning tokens in exec JSON usage** — _by @etraut-openai, updated 2026-04-24T07:43:29Z_
- [#18074](https://github.com/openai/codex/pull/18074) **Add goal app-server API (2 / 5)** — _by @etraut-openai, updated 2026-04-24T07:40:47Z_
- [#18073](https://github.com/openai/codex/pull/18073) **Add goal persistence foundation (1 / 5)** — _by @etraut-openai, updated 2026-04-24T07:40:46Z_
- [#19218](https://github.com/openai/codex/pull/19218) **cli: add macOS seatbelt flags for Mach services and Apple events** — _by @conrad-oai, updated 2026-04-24T06:45:29Z_
- [#19049](https://github.com/openai/codex/pull/19049) **feat: opt ChatGPT auth into agent identity** — _by @adrian-openai, updated 2026-04-24T06:13:05Z_
- [#19054](https://github.com/openai/codex/pull/19054) **feat: add hidden background agent auth** — _by @adrian-openai, updated 2026-04-24T06:09:08Z_
- [#19051](https://github.com/openai/codex/pull/19051) **feat: scope thread agent auth by provider** — _by @adrian-openai, updated 2026-04-24T06:09:02Z_
- [#19047](https://github.com/openai/codex/pull/19047) **feat: add external task refs and opt-in flag** — _by @adrian-openai, updated 2026-04-24T06:08:52Z_
- [#19287](https://github.com/openai/codex/pull/19287) **Restore persisted model provider on thread resume** — _by @etraut-openai, updated 2026-04-24T05:54:43Z_
- [#19283](https://github.com/openai/codex/pull/19283) _(draft)_ **check PID of named pipe consumer** — _by @iceweasel-oai, updated 2026-04-24T05:15:31Z_
- [#18431](https://github.com/openai/codex/pull/18431) **app-server: add macOS device key provider** — _by @euroelessar, updated 2026-04-24T04:59:35Z_
- [#19282](https://github.com/openai/codex/pull/19282) _(draft)_ **feat(hooks): add dynamic tool hook payloads [FROM EXTERNAL OPENCLAW MAINTAINER PR VINCENT K]** — _by @pash-openai, updated 2026-04-24T04:48:56Z_
- [#19098](https://github.com/openai/codex/pull/19098) **feat: Compress skill paths with root aliases** — _by @xl-openai, updated 2026-04-24T04:42:19Z_
- [#19280](https://github.com/openai/codex/pull/19280) **[codex] Migrate thread turns list to thread store** — _by @wiltzius-openai, updated 2026-04-24T04:35:45Z_
- [#17088](https://github.com/openai/codex/pull/17088) **[codex-analytics] ingest server requests and responses** — _by @rhan-oai, updated 2026-04-24T04:28:19Z_
- [#18446](https://github.com/openai/codex/pull/18446) **Reserve missing preserved paths in Linux sandbox policy** — _by @evawong-oai, updated 2026-04-24T04:06:29Z_
- [#19266](https://github.com/openai/codex/pull/19266) **[codex] add non-local thread store regression harness** — _by @wiltzius-openai, updated 2026-04-24T04:03:34Z_
- [#19160](https://github.com/openai/codex/pull/19160) _(draft)_ **Make apply_patch streaming parser stateful** — _by @akshaynathan, updated 2026-04-24T03:50:16Z_
- [#18900](https://github.com/openai/codex/pull/18900) **Migrate fork and resume reads to thread store** — _by @wiltzius-openai, updated 2026-04-24T03:46:27Z_
- [#19211](https://github.com/openai/codex/pull/19211) _(draft)_ **[codex] Fix Windows process management edge cases** — _by @iceweasel-oai, updated 2026-04-24T03:33:11Z_
- [#18899](https://github.com/openai/codex/pull/18899) _(draft)_ **Wire selected environments into tools** — _by @starr-openai, updated 2026-04-24T01:57:16Z_
- [#18898](https://github.com/openai/codex/pull/18898) _(draft)_ **Load named environments from config** — _by @starr-openai, updated 2026-04-24T01:57:15Z_
- [#19244](https://github.com/openai/codex/pull/19244) _(draft)_ **Update unix socket transport to use WebSocket upgrade** — _by @willwang-openai, updated 2026-04-24T00:35:37Z_
- [#19240](https://github.com/openai/codex/pull/19240) _(draft)_ **fix: allow AgentIdentity through Apps MCP gates** — _by @efrazer-oai, updated 2026-04-24T00:21:38Z_
- [#18904](https://github.com/openai/codex/pull/18904) **feat: load AgentIdentity from JWT login/env** — _by @efrazer-oai, updated 2026-04-24T00:14:05Z_
- [#18575](https://github.com/openai/codex/pull/18575) **fix(tui): reflow backlog on terminal resize** — _by @fcoury-oai, updated 2026-04-24T00:03:31Z_
- [#18576](https://github.com/openai/codex/pull/18576) _(draft)_ **feat(tui): render markdown tables responsively** — _by @fcoury-oai, updated 2026-04-24T00:03:30Z_
- [#19236](https://github.com/openai/codex/pull/19236) **Add instruction params to codex-app-server-test-client** — _by @pakrym-oai, updated 2026-04-24T00:03:04Z_
- [#19184](https://github.com/openai/codex/pull/19184) **fix: handle deferred network proxy denials** — _by @viyatb-oai, updated 2026-04-23T23:56:05Z_
- [#19234](https://github.com/openai/codex/pull/19234) _(draft)_ **Carve out log DB interfaces for new sinks** — _by @rasmusrygaard, updated 2026-04-23T23:51:49Z_
- [#18907](https://github.com/openai/codex/pull/18907) **respect workspace option for disabling plugins** — _by @zamoshchin-openai, updated 2026-04-23T23:49:52Z_
- [#19229](https://github.com/openai/codex/pull/19229) _(draft)_ **Add agent graph store interface** — _by @rasmusrygaard, updated 2026-04-23T23:49:05Z_
- [#19224](https://github.com/openai/codex/pull/19224) **Bump phase-two default model to gpt-5.5** — _by @kliu128, updated 2026-04-23T22:59:31Z_
- [#19216](https://github.com/openai/codex/pull/19216) **Allow any granular approval requirement** — _by @abhinav-oai, updated 2026-04-23T22:42:29Z_
- [#19193](https://github.com/openai/codex/pull/19193) **Support Codex Apps auth elicitations** — _by @mzeng-openai, updated 2026-04-23T22:18:28Z_
- [#18594](https://github.com/openai/codex/pull/18594) **feat(tui): add keymap slash command** — _by @fcoury-oai, updated 2026-04-23T22:08:02Z_
- [#18593](https://github.com/openai/codex/pull/18593) **feat(tui): add configurable keymap support** — _by @fcoury-oai, updated 2026-04-23T22:08:02Z_
- [#19114](https://github.com/openai/codex/pull/19114) _(draft)_ **Support ChatGPT Library file tools** — _by @lt-oai, updated 2026-04-23T22:00:22Z_
- [#18595](https://github.com/openai/codex/pull/18595) _(draft)_ **feat(tui): add vim composer mode** — _by @fcoury-oai, updated 2026-04-23T21:47:14Z_
- [#19170](https://github.com/openai/codex/pull/19170) **Skip disabled rows in selection menu numbering and default focus** — _by @canvrno-oai, updated 2026-04-23T21:46:32Z_
- [#18704](https://github.com/openai/codex/pull/18704) **/plugins: add marketplace install flow** — _by @canvrno-oai, updated 2026-04-23T21:46:29Z_
- [#18372](https://github.com/openai/codex/pull/18372) **Show action required in terminal title** — _by @canvrno-oai, updated 2026-04-23T21:46:25Z_
- [#19028](https://github.com/openai/codex/pull/19028) **[codex] Add usage-limit banner analytics plumbing** — _by @jchu-oai, updated 2026-04-23T21:23:11Z_
- [#19209](https://github.com/openai/codex/pull/19209) **[codex] Emit usage-limit prompt analytics from TUI** — _by @jchu-oai, updated 2026-04-23T21:23:10Z_
- [#19207](https://github.com/openai/codex/pull/19207) **[codex] Forward Codex Apps tool call IDs to backend metadata** — _by @rreichel3-oai, updated 2026-04-23T21:15:55Z_
- [#18919](https://github.com/openai/codex/pull/18919) _(draft)_ **[app-server] type client responses** — _by @rhan-oai, updated 2026-04-23T20:37:15Z_
- [#19058](https://github.com/openai/codex/pull/19058) **Add /auto-review-denials retry approval flow** — _by @won-openai, updated 2026-04-23T20:00:09Z_
- [#19163](https://github.com/openai/codex/pull/19163) **Harden package-manager install policy** — _by @mcgrew-oai, updated 2026-04-23T19:35:50Z_
- [#19060](https://github.com/openai/codex/pull/19060) _(draft)_ **feat(hooks): add compaction lifecycle hooks -- FROM EXTERNAL CONTRIBUTOR Vincent K** — _by @pash-openai, updated 2026-04-23T19:20:09Z_
- [#19080](https://github.com/openai/codex/pull/19080) **bazel: shard slower Rust test targets** — _by @bolinfest, updated 2026-04-23T18:52:22Z_
- [#19040](https://github.com/openai/codex/pull/19040) **[codex] Add unsandboxed command exec API** — _by @euroelessar, updated 2026-04-23T18:51:12Z_
- [#16221](https://github.com/openai/codex/pull/16221) **build(deps): bump zip from 2.4.2 to 8.4.0 in /codex-rs** — _by @dependabot[bot], updated 2026-04-23T18:33:43Z_
- [#19176](https://github.com/openai/codex/pull/19176) _(draft)_ **Add network proxy prompt guidance** — _by @viyatb-oai, updated 2026-04-23T18:32:50Z_
- [#18914](https://github.com/openai/codex/pull/18914) **fix(tui): use shared paste burst interval on Windows** — _by @fcoury-oai, updated 2026-04-23T18:30:34Z_


## Closed PRs (not merged)

- [#17260](https://github.com/openai/codex/pull/17260) **fix(guardian): clean up guardian config and context** — _by @owenlin0, closed 2026-04-24T06:40:34Z_
- [#17238](https://github.com/openai/codex/pull/17238) **[mcp] Respect `-a never` for  mcp tool call approvals.** — _by @mzeng-openai, closed 2026-04-24T06:40:33Z_
- [#19182](https://github.com/openai/codex/pull/19182) **Codex/hooks model lifecycle - [OPENCLAW CONTRIBUTOR VINCENT K]** — _by @pash-openai, closed 2026-04-24T04:50:05Z_
- [#18265](https://github.com/openai/codex/pull/18265) **Avoid instant remote disconnects under websocket queue pressure** — _by @etraut-openai, closed 2026-04-24T01:14:46Z_
- [#19233](https://github.com/openai/codex/pull/19233) **Make thread archive idempotent for archived threads** — _by @guinness-oai, closed 2026-04-24T00:06:29Z_
- [#19084](https://github.com/openai/codex/pull/19084) **hotfix** — _by @won-openai, closed 2026-04-23T21:48:46Z_
- [#19173](https://github.com/openai/codex/pull/19173) **ci: compute Windows Bazel PATH in setup action** — _by @bolinfest, closed 2026-04-23T18:34:38Z_


## Notable Issues

- [#19318](https://github.com/openai/codex/issues/19318) **codex resume --all still filters by the current model provider** _[bug, TUI, session]_ — _by @guyexin_
- [#19317](https://github.com/openai/codex/issues/19317) **bwrap: Can't create file** _[bug, sandbox]_ — _by @Asentrixx_
- [#19316](https://github.com/openai/codex/issues/19316) **Model selector is stuck on GPT-5.5 with medium intelligence in chats and some projects** _[bug, app]_ — _by @STSNaive_ _(closed 2026-04-24T08:36:29Z)_
- [#19321](https://github.com/openai/codex/issues/19321) **codex app do not read .env proxy conf** _[bug, app, connectivity]_ — _by @fuwu1245_
- [#10450](https://github.com/openai/codex/issues/10450) **Remote Development in Codex Desktop App** _[enhancement, app]_ — _by @pocca2048_
- [#19320](https://github.com/openai/codex/issues/19320) **Hide the Local/Cloud switch in VSCode sidebar extension (UI)** _[enhancement, extension]_ — _by @alex29ua_
- [#14919](https://github.com/openai/codex/issues/14919) **bwrap: Failed RTM_NEWADDR: Operation not permitted** _[bug, sandbox, regression]_ — _by @udayshnk_ _(closed 2026-03-27T03:42:45Z)_
- [#19319](https://github.com/openai/codex/issues/19319) **GPT-5.5 reports 258400 context window in Codex despite published 400K window** _[bug, CLI, context]_ — _by @alanxchen85_
- [#9062](https://github.com/openai/codex/issues/9062) **Windows sandbox: command execution fails with `CreateProcessWithLogonW failed: 5`** _[bug, windows-os, sandbox]_ — _by @tagorr_
- [#19235](https://github.com/openai/codex/issues/19235) **New CLI bwrap sandbox fails before shell: RTM_NEWADDR loopback Operation not   permitted** _[bug, sandbox]_ — _by @aiconvergence-collab_
- [#19315](https://github.com/openai/codex/issues/19315) **Windows elevated sandbox requires repeated approval for git worktree operations because .git is denied** _[bug, windows-os, sandbox]_ — _by @jaried_
- [#17508](https://github.com/openai/codex/issues/17508) **Autocompaction fails** _[bug, context]_ — _by @alanxchen85_
- [#19204](https://github.com/openai/codex/issues/19204) **Flagged while already being verified** _[bug, CLI, safety-check]_ — _by @Acurisu_
- [#19313](https://github.com/openai/codex/issues/19313) **"This chat was flagged for possible cybersecurity risk" even after KYC verification** _[bug, CLI, safety-check]_ — _by @Dz3131_ _(closed 2026-04-24T08:08:44Z)_
- [#19196](https://github.com/openai/codex/issues/19196) **'Full Access' permissions broken -- network calls are still sandboxed** _[bug, sandbox]_ — _by @agjones_
- [#16721](https://github.com/openai/codex/issues/16721) **Codex Web Screenshots Are Not anymore available** _[bug, codex-web, tool-calls, regression]_ — _by @vitoque-git_
- [#19187](https://github.com/openai/codex/issues/19187) **Windows Codex app: Browser Use external navigation fails because nodeRepl.fetch cannot start codex app-server** _[bug, windows-os, app, app-server]_ — _by @ElScelt_
- [#19314](https://github.com/openai/codex/issues/19314) **Browser Use can list in-app tabs, but external navigation fails with failed to start codex app-server** _[bug, windows-os, app, skills, app-server]_ — _by @stjema_
- [#12304](https://github.com/openai/codex/issues/12304) **Final Korean character is inserted into next pending input after option 3 in command approval modal** _[bug, app]_ — _by @fabric0de_ _(closed 2026-04-24T08:04:16Z)_
- [#19164](https://github.com/openai/codex/issues/19164) **Docs say remote_control, but Connections appears with remote_connections on Codex Desktop (app) 26.417** _[documentation, app, config]_ — _by @golioss1886_ _(closed 2026-04-24T08:01:51Z)_
- [#19312](https://github.com/openai/codex/issues/19312) **Regression: pasting files from Finder no longer exposes local filename/path to Codex** _[bug, TUI]_ — _by @bjtaylor1_
- [#19310](https://github.com/openai/codex/issues/19310) **My account was flagged for risk control while I was doing a code audit.** _[bug, windows-os, CLI, safety-check]_ — _by @secyp_ _(closed 2026-04-24T07:56:19Z)_
- [#19252](https://github.com/openai/codex/issues/19252) **Flagged for Cyber after completing KYC** _[bug, safety-check]_ — _by @Mcrich23_ _(closed 2026-04-24T07:55:53Z)_
- [#19311](https://github.com/openai/codex/issues/19311) **Search button X is "behind" main "X" close button** _[bug, app]_ — _by @gnoric_
- [#19001](https://github.com/openai/codex/issues/19001) **Add RTK Directly Into Codex CLI to Reduce Token Usage 60–90% by Filtering Shell Command Output** _[enhancement, context]_ — _by @klondikemarlen_
- [#19309](https://github.com/openai/codex/issues/19309) **Codex CLI exits successfully (exit code 0) but stops execution before performing any actual PR review steps.** _[bug, code-review, exec, regression]_ — _by @nxl2692_
- [#18538](https://github.com/openai/codex/issues/18538) **Windows desktop thread can stop returning local shell command results; even small local file reads hang until manually aborted** _[bug, windows-os, tool-calls]_ — _by @Shrek0519_
- [#8342](https://github.com/openai/codex/issues/8342) **Expose MCP Server Prompts as Slash Commands Like Claude Code** _[enhancement, mcp]_ — _by @baron_
- [#19307](https://github.com/openai/codex/issues/19307) **Codex sync** _[enhancement, skills, config]_ — _by @wintercounter_
- [#19306](https://github.com/openai/codex/issues/19306) **Context window is still 258k** _[bug, context, app]_ — _by @beyond0573_ _(closed 2026-04-24T07:19:56Z)_
- [#19275](https://github.com/openai/codex/issues/19275) **Config schema exposes unsupported MCP `bearer_token` field** _[bug, mcp, CLI, config]_ — _by @chanwooyang1_ _(closed 2026-04-24T07:17:45Z)_
- [#19256](https://github.com/openai/codex/issues/19256) **`/permissions` changes do not propagate to the active session in `codex-cli 0.124.0`** _[bug, sandbox, regression, session]_ — _by @wypong_ _(closed 2026-04-24T05:15:14Z)_
- [#18960](https://github.com/openai/codex/issues/18960) **Frequent reconnect loop in Codex App: websocket closed by server before response.completed** _[bug, connectivity]_ — _by @GGBondBlueWhale_
- [#13785](https://github.com/openai/codex/issues/13785) **Windows App: Not picking WSL thread history** _[bug, windows-os, app, terminal]_ — _by @zg-alexey_
- [#18262](https://github.com/openai/codex/issues/18262) **Codex cannot see symlinked files or directories in workspace** _[bug, app]_ — _by @mingxu1031_
- [#19297](https://github.com/openai/codex/issues/19297) **/permissions Full Access session-only confirmation persists approvals_reviewer to config.toml** _[bug, sandbox, CLI, config]_ — _by @decentralizedblack-maker_ _(closed 2026-04-24T07:06:25Z)_
- [#19301](https://github.com/openai/codex/issues/19301) **Need to update the docs at https://developers.openai.com/codex/remote-connections** _[documentation, app, config]_ — _by @aysuio_ _(closed 2026-04-24T07:05:51Z)_
- [#19220](https://github.com/openai/codex/issues/19220) **Codex macOS startup failure: unsupported feature enablement `workspace_dependencies`** _[bug, app, app-server]_ — _by @SnowfallHD_
- [#19305](https://github.com/openai/codex/issues/19305) **Feature request: Full Computer Use support for Codex Desktop on Windows** _[enhancement, windows-os, app]_ — _by @htazq_
- [#14860](https://github.com/openai/codex/issues/14860) **Error running remote compact task** _[bug, context]_ — _by @Grallen_
- [#19298](https://github.com/openai/codex/issues/19298) **Browser Use IAB backend can see selected tab but cannot control it on Windows** _[bug, windows-os, app, app-server]_ — _by @mfushun-cmyk_
- [#15368](https://github.com/openai/codex/issues/15368) **Increase cap of sessions in VS Code extension** _[enhancement, extension]_ — _by @iqdoctor_
- [#19302](https://github.com/openai/codex/issues/19302) **Remote SSH connection fails when remote login shell is csh/tcsh** _[bug, windows-os, app, app-server]_ — _by @vananth-nv_
- [#19304](https://github.com/openai/codex/issues/19304) **Codex Desktop for Windows does not load local MCP plugin tools** _[bug, windows-os, mcp, app, skills]_ — _by @MCQ2000_
- [#17241](https://github.com/openai/codex/issues/17241) **Export chat session in the Codex Desktop App as a markdown file** _[enhancement, app]_ — _by @anth0nycodes_
- [#19110](https://github.com/openai/codex/issues/19110) **Codex CLI version bug** _[bug, CLI]_ — _by @leon37_ _(closed 2026-04-23T15:14:38Z)_
- [#19208](https://github.com/openai/codex/issues/19208) **1m context window gone after Gpt 5.5 Release.** _[bug, context, app, config]_ — _by @Zakisb_ _(closed 2026-04-23T21:39:37Z)_
- [#19230](https://github.com/openai/codex/issues/19230) **Revert #19053: Fast service tier should not be the default** _[enhancement, config]_ — _by @nwparker_ _(closed 2026-04-23T23:57:11Z)_
- [#14751](https://github.com/openai/codex/issues/14751) **Desktop app sidebar only shows loaded recent subset, not full workspace history** _[bug, app]_ — _by @chenjingdev_ _(closed 2026-04-03T08:23:52Z)_
- [#13566](https://github.com/openai/codex/issues/13566) **Codex Windows app (WSL): non-interactive shell doesn’t load NVM, so node/pnpm are missing from PATH (command not found)** _[bug, windows-os, app, terminal]_ — _by @timurkhakhalev_
- [#19299](https://github.com/openai/codex/issues/19299) **0.124.0 breaks sandbox when default_permissions is present in the config** _[bug, sandbox, CLI, config]_ — _by @zeyugao_ _(closed 2026-04-24T06:31:42Z)_
- [#19295](https://github.com/openai/codex/issues/19295) **[Desktop] White screen infinite loop due to `workspace_dependencies` feature   enablement error on Pro account (v26.422.21637)** _[bug, app, app-server]_ — _by @dbtaiyta_ _(closed 2026-04-24T06:31:25Z)_
- [#17367](https://github.com/openai/codex/issues/17367) **Linux sandbox cannot execute codex itself** _[bug, sandbox, CLI]_ — _by @howardjohn_ _(closed 2026-04-24T06:31:24Z)_
- [#17293](https://github.com/openai/codex/issues/17293) **Codex Diff missing background highlights on Remote-SSH** _[bug, code-review, extension]_ — _by @WeiyiTian_
- [#12661](https://github.com/openai/codex/issues/12661) **Markdown file:// links open in default browser (Edge) instead of VS Code editor** _[bug, windows-os, extension]_ — _by @CT-2026_
- [#19257](https://github.com/openai/codex/issues/19257) **`[agents.*].config_file` with relative path fails to deserialize: "AbsolutePathBuf deserialized without a base path in agents"** _[bug, app, config]_ — _by @tackcrypto1031_ _(closed 2026-04-24T06:23:12Z)_
- [#19105](https://github.com/openai/codex/issues/19105) **"Memories" consuming rate limit disproportionately** _[bug, rate-limits, app]_ — _by @amanzoori-hm_ _(closed 2026-04-23T15:13:45Z)_
- [#19300](https://github.com/openai/codex/issues/19300) **Remote SSH Desktop reuses stale app-server and masks model_not_found as Reconnecting** _[bug, app, app-server]_ — _by @hans43564334-pixel_
- [#19286](https://github.com/openai/codex/issues/19286) **/compcat tool not working properly, Auto-compact works** _[bug, TUI, context, regression]_ — _by @Lyellr88_
- [#19296](https://github.com/openai/codex/issues/19296) **@file path references are not being detected in Codex CLI on Ubuntu WSL** _[bug, windows-os, CLI]_ — _by @mauricio2093_
- [#19267](https://github.com/openai/codex/issues/19267) **[VS Code Remote Linux] duplicate same-title history entries, blank thread after reopen, and archived thread corruption** _[bug, extension, session]_ — _by @okjugu_
- [#19293](https://github.com/openai/codex/issues/19293) **Windows desktop app starts codex-windows-sandbox before login and causes heavy disk I/O / system lag** _[bug, windows-os, sandbox, app]_ — _by @GuoSihan0320_
- [#12029](https://github.com/openai/codex/issues/12029) **Ability to use more than one account** _[enhancement, extension, auth]_ — _by @mahnunchik_
- [#19264](https://github.com/openai/codex/issues/19264) **macOS Codex 26.422.21637: OAuth/ChatGPT auth triggers AppRoutes re-mount loop (regression of #12754)** _[bug, auth, app]_ — _by @jiamo_
- [#15393](https://github.com/openai/codex/issues/15393) **Performance: high CPU utilization with IDE extension** _[bug, extension, regression]_ — _by @scuall8907_
- [#6761](https://github.com/openai/codex/issues/6761) **We're currently experiencing high demand, which may cause temporary errors.** _[bug, connectivity]_ — _by @guidedways_ _(closed 2026-03-29T16:59:09Z)_
- [#18258](https://github.com/openai/codex/issues/18258) **Codex app on macOS shows 'Computer Use plugin unavailable' while bundled plugin files exist** _[bug, app, skills]_ — _by @hhushhas_
- [#19291](https://github.com/openai/codex/issues/19291) **tccutil reset All com.openai.codex** _[bug, app]_ — _by @AndrewDavidBaron_
- [#19288](https://github.com/openai/codex/issues/19288) **Trusted access** _[bug, auth, CLI, safety-check]_ — _by @express1we_ _(closed 2026-04-24T05:46:19Z)_
- [#19290](https://github.com/openai/codex/issues/19290) **Windows Desktop: Sidebar shows No chats and no projects after update, but Search can still find/open existing chats** _[bug, windows-os, app, session]_ — _by @NedMalki-Chief_
- [#19203](https://github.com/openai/codex/issues/19203) **remote connection displays gpt5.5 as custom model** _[bug, app, app-server]_ — _by @winoros_
- [#19289](https://github.com/openai/codex/issues/19289) **Not able to use codex in vs after latest update** _[bug, extension, app]_ — _by @VinayAnne_ _(closed 2026-04-24T05:43:07Z)_
- [#19227](https://github.com/openai/codex/issues/19227) **selecting gpt 5.5 shows error "model metadata not found"** _[bug, CLI]_ — _by @pdeva_
- [#15975](https://github.com/openai/codex/issues/15975) **Codex extension stuck on loading/logo screen after VS Code update on Windows** _[bug, windows-os, extension]_ — _by @PranavAcml_
- [#19284](https://github.com/openai/codex/issues/19284) **Long-lived ChatGPT-auth CLI sessions can stall on codex_apps while fresh sessions load instantly (403 Cloudflare HTML on connectors/apps discovery)** _[bug, auth, connectivity]_ — _by @GigiTiti-Kai_
- [#19281](https://github.com/openai/codex/issues/19281) **Windows: trusted project entry using `\\?\` path is not recognized by project trust lookup** _[bug, windows-os, sandbox, config]_ — _by @albert-zen_
- [#19277](https://github.com/openai/codex/issues/19277) **execution error: Io(Custom { kind: Other, error: "windows sandbox: spawn setup refresh" })** _[bug, windows-os, sandbox]_ — _by @SunnyDesignor_
- [#18450](https://github.com/openai/codex/issues/18450) **Error running remote compact task: stream disconnected before completion: error sending request for url (https://chatgpt.com/backend-api/codex/responses/compact)** _[bug, context]_ — _by @ttllyy111_
- [#9544](https://github.com/openai/codex/issues/9544) **Error running remote compact task: stream disconnected before completion** _[bug, context]_ — _by @loop-uh_ _(closed 2026-03-27T04:11:33Z)_


## Commits on `main`

- [`6f87eb0`](https://github.com/openai/codex/commit/6f87eb0479018f0dd93db3f9f7b89902aebedb50) Hide unsupported MCP bearer_token from config schema (#19294) — _@etraut-openai_
- [`e083b6c`](https://github.com/openai/codex/commit/e083b6c757029140533f22e4722a2f91ecfe6b90) chore: apply truncation policy to unified_exec (#19247) — _@sayan-oai_
- [`ac8c9fc`](https://github.com/openai/codex/commit/ac8c9fc49c5164cdcb185f781c8e8f35b9bccce0) Reject unsupported js_repl image MIME types (#19292) — _@etraut-openai_
- [`b683667`](https://github.com/openai/codex/commit/b68366718b49b57235ddac4b0fdae6b97ff1bc20) ci: reuse Bazel CI startup for target-discovery queries (#19232) — _@bolinfest_
- [`d87d918`](https://github.com/openai/codex/commit/d87d9187162e8db2bcc287e141afea36369a0df6) Resolve relative agent role config paths from layers (#19261) — _@etraut-openai_
- [`4816b89`](https://github.com/openai/codex/commit/4816b892044084de6ab5a55ea0b5854c330843fd) permissions: make profiles represent enforcement (#19231) — _@bolinfest_
- [`33cc135`](https://github.com/openai/codex/commit/33cc135cc367bef9fc06384a89ac6c3beb917d79) [codex] Support remote plugin install writes (#18917) — _@xli-oai_
- [`19badb0`](https://github.com/openai/codex/commit/19badb0be27972b77ab34435acc5c7bf174558b2) app-server: persist device key bindings in sqlite (#19206) — _@euroelessar_
- [`e8d8080`](https://github.com/openai/codex/commit/e8d80808182311d62e9ae91a9a03ddbc09a4b742) feat: let model providers own model discovery (#18950) — _@celia-oai_
- [`53be451`](https://github.com/openai/codex/commit/53be45167395b35ed967e2157fec074886785b38) feat: Use short SHA versions for curated plugin cache entries (#19095) — _@xl-openai_
- [`a9c111d`](https://github.com/openai/codex/commit/a9c111da544c976d591343db5493a7da283b72e5) [rollout_trace] Trace sessions and multi-agent edges (#18879) — _@cassirer-openai_
- [`49fb259`](https://github.com/openai/codex/commit/49fb25997f3c09c25684c2a729cb933939a7f830) Add sticky environment API and thread state (#18897) — _@starr-openai_
- [`e3c8720`](https://github.com/openai/codex/commit/e3c8720a99114154929dbab950fac9fb1e1e0558) [rollout_trace] Add debug trace reduction command (#18880) — _@cassirer-openai_
- [`432771c`](https://github.com/openai/codex/commit/432771c5fdcd63b04f6df398bb336578d1271f63) feat: expose AWS account state from account/read (#19048) — _@celia-oai_
- [`72f757d`](https://github.com/openai/codex/commit/72f757d1447cbff718eb8d213ecff12f9e759578) Increase app-server WebSocket outbound buffer (#19246) — _@etraut-openai_
- [`5882f3f`](https://github.com/openai/codex/commit/5882f3f95e1fc727fe46631073c1d5918e4ae3ca) refactor: route Codex auth through AuthProvider (#18811) — _@efrazer-oai_
- [`a9f75e5`](https://github.com/openai/codex/commit/a9f75e5cda2d6ff469a859baf8d2f50b9b04944a) ci: derive cache-stable Windows Bazel PATH (#19161) — _@bolinfest_
- [`867820a`](https://github.com/openai/codex/commit/867820ac7e80d4e626836a9e4a70335f0a84766f) do not attempt ACLs on installed codex dir (#19214) — _@iceweasel-oai_
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


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (deterministic template; no LLM for this run)._
