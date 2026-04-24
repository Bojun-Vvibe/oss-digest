# openai/codex — 2026-04-24

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-23T04:39:30.304Z → 2026-04-24T04:39:30.304Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

> _Deterministic template only — no LLM summary for this run._

## Releases

- **[rust-v0.124.0](https://github.com/openai/codex/releases/tag/rust-v0.124.0)** — 0.124.0 _by @github-actions[bot] at 2026-04-23T18:29:40Z_
  > ## New Features
  > - The TUI now has quick reasoning controls: `Alt+,` lowers reasoning, `Alt+.` raises it, and accepted model upgrades now reset reasoning to the new model’s default instead of carrying over stale settings. (#18866, #19085)
  > - App-server sessions can now manage multiple environments and choose an environment and working directory per turn, which makes multi-workspace and remote setups easier to target precisely. (#18401, #18416)
  > - Added first-class Amazon Bedrock support for OpenAI-…
- **[rust-v0.124.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.124.0-alpha.3)** _(prerelease)_ — 0.124.0-alpha.3 _by @github-actions[bot] at 2026-04-23T16:20:15Z_
  > Release 0.124.0-alpha.3
- **[rust-v0.124.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.124.0-alpha.2)** _(prerelease)_ — 0.124.0-alpha.2 _by @github-actions[bot] at 2026-04-23T06:06:47Z_
  > Release 0.124.0-alpha.2


## Merged PRs

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
- [#18255](https://github.com/openai/codex/pull/18255) **app-server: add Unix socket transport** — _by @euroelessar, merged 2026-04-23T18:09:26Z_
- [#18626](https://github.com/openai/codex/pull/18626) **Respect explicit untrusted project config** — _by @etraut-openai, merged 2026-04-23T17:51:18Z_
- [#19008](https://github.com/openai/codex/pull/19008) **[codex] Implement remote thread store methods** — _by @wiltzius-openai, merged 2026-04-23T17:49:28Z_
- [#18882](https://github.com/openai/codex/pull/18882) **[codex] Route live thread writes through ThreadStore** — _by @wiltzius-openai, merged 2026-04-23T17:17:09Z_
- [#19014](https://github.com/openai/codex/pull/19014) **Add excludeTurns parameter to thread/resume and thread/fork** — _by @ddr-oai, merged 2026-04-23T17:07:59Z_
- [#18892](https://github.com/openai/codex/pull/18892) **Add remote thread config loader protos** — _by @rasmusrygaard, merged 2026-04-23T17:06:06Z_
- [#19127](https://github.com/openai/codex/pull/19127) **feat: drop spawned-agent context instructions** — _by @jif-oai, merged 2026-04-23T16:54:46Z_


## Open PRs (new or updated)

- [#19054](https://github.com/openai/codex/pull/19054) _(draft)_ **feat: add hidden background agent auth** — _by @adrian-openai, updated 2026-04-24T04:38:30Z_
- [#19051](https://github.com/openai/codex/pull/19051) _(draft)_ **feat: scope thread agent auth by provider** — _by @adrian-openai, updated 2026-04-24T04:38:30Z_
- [#19049](https://github.com/openai/codex/pull/19049) _(draft)_ **feat: opt ChatGPT auth into agent identity** — _by @adrian-openai, updated 2026-04-24T04:37:57Z_
- [#19280](https://github.com/openai/codex/pull/19280) **[codex] Migrate thread turns list to thread store** — _by @wiltzius-openai, updated 2026-04-24T04:35:45Z_
- [#18917](https://github.com/openai/codex/pull/18917) **[codex] Support remote plugin install writes** — _by @xli-oai, updated 2026-04-24T04:29:24Z_
- [#17088](https://github.com/openai/codex/pull/17088) **[codex-analytics] ingest server requests and responses** — _by @rhan-oai, updated 2026-04-24T04:28:19Z_
- [#18431](https://github.com/openai/codex/pull/18431) **app-server: add macOS device key provider** — _by @euroelessar, updated 2026-04-24T04:16:58Z_
- [#19098](https://github.com/openai/codex/pull/19098) **feat: Compress skill paths with root aliases** — _by @xl-openai, updated 2026-04-24T04:16:07Z_
- [#19206](https://github.com/openai/codex/pull/19206) **app-server: persist device key bindings in sqlite** — _by @euroelessar, updated 2026-04-24T04:14:50Z_
- [#18446](https://github.com/openai/codex/pull/18446) **Reserve missing preserved paths in Linux sandbox policy** — _by @evawong-oai, updated 2026-04-24T04:06:29Z_
- [#19266](https://github.com/openai/codex/pull/19266) **[codex] add non-local thread store regression harness** — _by @wiltzius-openai, updated 2026-04-24T04:03:34Z_
- [#19231](https://github.com/openai/codex/pull/19231) **permissions: make profiles represent enforcement** — _by @bolinfest, updated 2026-04-24T03:59:37Z_
- [#19160](https://github.com/openai/codex/pull/19160) _(draft)_ **Make apply_patch streaming parser stateful** — _by @akshaynathan, updated 2026-04-24T03:50:16Z_
- [#18900](https://github.com/openai/codex/pull/18900) **Migrate fork and resume reads to thread store** — _by @wiltzius-openai, updated 2026-04-24T03:46:27Z_
- [#19211](https://github.com/openai/codex/pull/19211) _(draft)_ **[codex] Fix Windows process management edge cases** — _by @iceweasel-oai, updated 2026-04-24T03:33:11Z_
- [#19047](https://github.com/openai/codex/pull/19047) _(draft)_ **feat: add external task refs and opt-in flag** — _by @adrian-openai, updated 2026-04-24T02:59:12Z_
- [#19261](https://github.com/openai/codex/pull/19261) **Resolve relative agent role config paths from layers** — _by @etraut-openai, updated 2026-04-24T02:43:31Z_
- [#18899](https://github.com/openai/codex/pull/18899) _(draft)_ **Wire selected environments into tools** — _by @starr-openai, updated 2026-04-24T01:57:16Z_
- [#18898](https://github.com/openai/codex/pull/18898) _(draft)_ **Load named environments from config** — _by @starr-openai, updated 2026-04-24T01:57:15Z_
- [#19247](https://github.com/openai/codex/pull/19247) **chore: apply truncation policy to unified_exec** — _by @sayan-oai, updated 2026-04-24T01:15:52Z_
- [#19244](https://github.com/openai/codex/pull/19244) _(draft)_ **Update unix socket transport to use WebSocket upgrade** — _by @willwang-openai, updated 2026-04-24T00:35:37Z_
- [#19218](https://github.com/openai/codex/pull/19218) **cli: add macOS seatbelt debug flags for Mach services and Apple events** — _by @conrad-oai, updated 2026-04-24T00:32:21Z_
- [#18735](https://github.com/openai/codex/pull/18735) **Update models.json** — _by @github-actions[bot], updated 2026-04-24T00:26:21Z_
- [#19240](https://github.com/openai/codex/pull/19240) _(draft)_ **fix: allow AgentIdentity through Apps MCP gates** — _by @efrazer-oai, updated 2026-04-24T00:21:38Z_
- [#18904](https://github.com/openai/codex/pull/18904) **feat: load AgentIdentity from JWT login/env** — _by @efrazer-oai, updated 2026-04-24T00:14:05Z_
- [#18575](https://github.com/openai/codex/pull/18575) **fix(tui): reflow backlog on terminal resize** — _by @fcoury-oai, updated 2026-04-24T00:03:31Z_
- [#18576](https://github.com/openai/codex/pull/18576) _(draft)_ **feat(tui): render markdown tables responsively** — _by @fcoury-oai, updated 2026-04-24T00:03:30Z_
- [#19236](https://github.com/openai/codex/pull/19236) **Add instruction params to codex-app-server-test-client** — _by @pakrym-oai, updated 2026-04-24T00:03:04Z_
- [#19184](https://github.com/openai/codex/pull/19184) **fix: handle deferred network proxy denials** — _by @viyatb-oai, updated 2026-04-23T23:56:05Z_
- [#19234](https://github.com/openai/codex/pull/19234) _(draft)_ **Carve out log DB interfaces for new sinks** — _by @rasmusrygaard, updated 2026-04-23T23:51:49Z_
- [#18907](https://github.com/openai/codex/pull/18907) **respect workspace option for disabling plugins** — _by @zamoshchin-openai, updated 2026-04-23T23:49:52Z_
- [#19229](https://github.com/openai/codex/pull/19229) _(draft)_ **Add agent graph store interface** — _by @rasmusrygaard, updated 2026-04-23T23:49:05Z_
- [#19232](https://github.com/openai/codex/pull/19232) **ci: reuse Bazel CI startup for target-discovery queries** — _by @bolinfest, updated 2026-04-23T23:43:27Z_
- [#19224](https://github.com/openai/codex/pull/19224) **Bump phase-two default model to gpt-5.5** — _by @kliu128, updated 2026-04-23T22:59:31Z_
- [#19216](https://github.com/openai/codex/pull/19216) **Allow any granular approval requirement** — _by @abhinav-oai, updated 2026-04-23T22:42:29Z_
- [#19193](https://github.com/openai/codex/pull/19193) **Support Codex Apps auth elicitations** — _by @mzeng-openai, updated 2026-04-23T22:18:28Z_
- [#18594](https://github.com/openai/codex/pull/18594) **feat(tui): add keymap slash command** — _by @fcoury-oai, updated 2026-04-23T22:08:02Z_
- [#18593](https://github.com/openai/codex/pull/18593) **feat(tui): add configurable keymap support** — _by @fcoury-oai, updated 2026-04-23T22:08:02Z_
- [#19114](https://github.com/openai/codex/pull/19114) _(draft)_ **Support ChatGPT Library file tools** — _by @lt-oai, updated 2026-04-23T22:00:22Z_
- [#18077](https://github.com/openai/codex/pull/18077) **Add goal TUI UX (5 / 5)** — _by @etraut-openai, updated 2026-04-23T21:49:19Z_
- [#18595](https://github.com/openai/codex/pull/18595) _(draft)_ **feat(tui): add vim composer mode** — _by @fcoury-oai, updated 2026-04-23T21:47:14Z_
- [#19170](https://github.com/openai/codex/pull/19170) **Skip disabled rows in selection menu numbering and default focus** — _by @canvrno-oai, updated 2026-04-23T21:46:32Z_
- [#18704](https://github.com/openai/codex/pull/18704) **/plugins: add marketplace install flow** — _by @canvrno-oai, updated 2026-04-23T21:46:29Z_
- [#18372](https://github.com/openai/codex/pull/18372) **Show action required in terminal title** — _by @canvrno-oai, updated 2026-04-23T21:46:25Z_
- [#19028](https://github.com/openai/codex/pull/19028) **[codex] Add usage-limit banner analytics plumbing** — _by @jchu-oai, updated 2026-04-23T21:23:11Z_
- [#19209](https://github.com/openai/codex/pull/19209) **[codex] Emit usage-limit prompt analytics from TUI** — _by @jchu-oai, updated 2026-04-23T21:23:10Z_
- [#19207](https://github.com/openai/codex/pull/19207) **[codex] Forward Codex Apps tool call IDs to backend metadata** — _by @rreichel3-oai, updated 2026-04-23T21:15:55Z_
- [#18919](https://github.com/openai/codex/pull/18919) _(draft)_ **[app-server] type client responses** — _by @rhan-oai, updated 2026-04-23T20:37:15Z_
- [#18076](https://github.com/openai/codex/pull/18076) **Add goal core runtime (4 / 5)** — _by @etraut-openai, updated 2026-04-23T20:17:38Z_
- [#19058](https://github.com/openai/codex/pull/19058) **Add /auto-review-denials retry approval flow** — _by @won-openai, updated 2026-04-23T20:00:09Z_
- [#19163](https://github.com/openai/codex/pull/19163) **Harden package-manager install policy** — _by @mcgrew-oai, updated 2026-04-23T19:35:50Z_
- [#19182](https://github.com/openai/codex/pull/19182) _(draft)_ **Codex/hooks model lifecycle - [OPENCLAW CONTRIBUTOR VINCENT K]** — _by @pash-openai, updated 2026-04-23T19:20:13Z_
- [#19060](https://github.com/openai/codex/pull/19060) _(draft)_ **feat(hooks): add compaction lifecycle hooks -- FROM EXTERNAL CONTRIBUTOR Vincent K** — _by @pash-openai, updated 2026-04-23T19:20:09Z_
- [#19080](https://github.com/openai/codex/pull/19080) **bazel: shard slower Rust test targets** — _by @bolinfest, updated 2026-04-23T18:52:22Z_
- [#19040](https://github.com/openai/codex/pull/19040) **[codex] Add unsandboxed command exec API** — _by @euroelessar, updated 2026-04-23T18:51:12Z_
- [#16221](https://github.com/openai/codex/pull/16221) **build(deps): bump zip from 2.4.2 to 8.4.0 in /codex-rs** — _by @dependabot[bot], updated 2026-04-23T18:33:43Z_
- [#19176](https://github.com/openai/codex/pull/19176) _(draft)_ **Add network proxy prompt guidance** — _by @viyatb-oai, updated 2026-04-23T18:32:50Z_
- [#18914](https://github.com/openai/codex/pull/18914) **fix(tui): use shared paste burst interval on Windows** — _by @fcoury-oai, updated 2026-04-23T18:30:34Z_
- [#18584](https://github.com/openai/codex/pull/18584) **[4/4] Honor Streamable HTTP MCP placement** — _by @aibrahim-oai, updated 2026-04-23T18:15:28Z_
- [#19169](https://github.com/openai/codex/pull/19169) **Stabilize plugin MCP tool listing test** — _by @starr-openai, updated 2026-04-23T18:14:21Z_
- [#17245](https://github.com/openai/codex/pull/17245) **feat(tui): configurable keymaps and Vim mode** — _by @fcoury-oai, updated 2026-04-23T18:14:09Z_
- [#17679](https://github.com/openai/codex/pull/17679) **[plugins] Wait for explicit plugin app tools on first turn** — _by @ssetty-oai, updated 2026-04-23T17:52:43Z_


## Closed PRs (not merged)

- [#18265](https://github.com/openai/codex/pull/18265) **Avoid instant remote disconnects under websocket queue pressure** — _by @etraut-openai, closed 2026-04-24T01:14:46Z_
- [#19233](https://github.com/openai/codex/pull/19233) **Make thread archive idempotent for archived threads** — _by @guinness-oai, closed 2026-04-24T00:06:29Z_
- [#19084](https://github.com/openai/codex/pull/19084) **hotfix** — _by @won-openai, closed 2026-04-23T21:48:46Z_
- [#19173](https://github.com/openai/codex/pull/19173) **ci: compute Windows Bazel PATH in setup action** — _by @bolinfest, closed 2026-04-23T18:34:38Z_


## Notable Issues

- [#19196](https://github.com/openai/codex/issues/19196) **'Full Access' permissions broken -- network calls are still sandboxed** _[bug, sandbox]_ — _by @agjones_
- [#10366](https://github.com/openai/codex/issues/10366) **Cannot run build** _[bug, agent]_ — _by @ybwbqg9379_
- [#19208](https://github.com/openai/codex/issues/19208) **1m context window gone after Gpt 5.5 Release.** _[bug, context, app, config]_ — _by @Zakisb_ _(closed 2026-04-23T21:39:37Z)_
- [#19279](https://github.com/openai/codex/issues/19279) **Experimental feature check disabling app startup** _[bug, app, app-server]_ — _by @jeet-genlift_ _(closed 2026-04-24T04:20:38Z)_
- [#19256](https://github.com/openai/codex/issues/19256) **`/permissions` changes do not propagate to the active session in `codex-cli 0.124.0`** _[bug, sandbox, regression, session]_ — _by @wypong_
- [#19278](https://github.com/openai/codex/issues/19278) **/side, /fork, backtrack in very long sessions are linearly-in-jsonl slow** _[bug, CLI, session]_ — _by @qdbp_ _(closed 2026-04-24T04:12:23Z)_
- [#19276](https://github.com/openai/codex/issues/19276) **Codex App: In app browser to support sign in and authentication flows** _[enhancement, auth, app]_ — _by @toptechie156_
- [#19277](https://github.com/openai/codex/issues/19277) **execution error: Io(Custom { kind: Other, error: "windows sandbox: spawn setup refresh" })** _[bug, windows-os, sandbox, CLI]_ — _by @SunnyDesignor_
- [#19187](https://github.com/openai/codex/issues/19187) **Windows Codex app: Browser Use external navigation fails because nodeRepl.fetch cannot start codex app-server** _[bug, windows-os, app, app-server]_ — _by @ElScelt_
- [#19272](https://github.com/openai/codex/issues/19272) **Flagged for Cyber, while already completed TAC** _[bug, CLI, safety-check]_ — _by @redthing1_ _(closed 2026-04-24T04:00:40Z)_
- [#19274](https://github.com/openai/codex/issues/19274) **Codex Desktop macOS: Plugins page layout renders incorrectly and cards are clipped/cut off** _[bug, app, skills]_ — _by @ganjiuwanshi_
- [#19204](https://github.com/openai/codex/issues/19204) **Flagged while already being verified** _[bug, CLI, safety-check]_ — _by @Acurisu_
- [#19275](https://github.com/openai/codex/issues/19275) **Config schema exposes unsupported MCP `bearer_token` field** _[bug, mcp, CLI, config]_ — _by @chanwooyang1_
- [#19273](https://github.com/openai/codex/issues/19273) **chatgpt.newChat always opens the primary sidebar even when Codex has been moved to the secondary sidebar in Cursor** _[bug, extension]_ — _by @tylr2017_
- [#19223](https://github.com/openai/codex/issues/19223) **Codex Desktop will not boot up on Mac OS Arm** _[bug, app, app-server]_ — _by @cghiurea_
- [#19264](https://github.com/openai/codex/issues/19264) **macOS Codex 26.422.21637: OAuth/ChatGPT auth triggers AppRoutes re-mount loop (regression of #12754)** _[bug, auth, app]_ — _by @jiamo_
- [#18456](https://github.com/openai/codex/issues/18456) **Windows desktop app regression after in-app upgrade: settings/language break, slash commands stop working, Fast Mode missing** _[bug, windows-os, app]_ — _by @weianauto_
- [#19220](https://github.com/openai/codex/issues/19220) **Codex macOS startup failure: unsupported feature enablement `workspace_dependencies`** _[bug, app, app-server]_ — _by @SnowfallHD_
- [#19215](https://github.com/openai/codex/issues/19215) **Limit hit very early in GPT 5.5** _[bug, rate-limits]_ — _by @SirTyson_
- [#19203](https://github.com/openai/codex/issues/19203) **remote connection displays gpt5.5 as custom model** _[bug, app, app-server]_ — _by @winoros_
- [#13267](https://github.com/openai/codex/issues/13267) **Feature request: option to export the entire session** _[enhancement, TUI]_ — _by @abanoub-ashraf_
- [#17241](https://github.com/openai/codex/issues/17241) **Export chat session in the Codex Desktop App as a markdown file** _[enhancement, app]_ — _by @anth0nycodes_
- [#18842](https://github.com/openai/codex/issues/18842) **Codex VS Code extension fails to enable realtime_conversation; new chats cannot switch model and Output is flooded with worker warnings** _[bug, extension, app-server]_ — _by @ranaguir_
- [#10450](https://github.com/openai/codex/issues/10450) **Remote Development in Codex Desktop App** _[enhancement, app]_ — _by @pocca2048_
- [#19271](https://github.com/openai/codex/issues/19271) **Windows Codex app: bundled node.exe fails with Access is denied, breaking Node REPL and Browser Use plugin** _[bug, windows-os, app, skills]_ — _by @debnathaniruddha89-design_
- [#19270](https://github.com/openai/codex/issues/19270) **Browser Use blocks external and custom-host URLs with "cannot determine if ... is allowed" on macOS app** _[bug, app, skills]_ — _by @jianzhangg_
- [#18175](https://github.com/openai/codex/issues/18175) **Subagent UI "Open" button not working** _[bug, extension, subagent]_ — _by @justinTM_
- [#19267](https://github.com/openai/codex/issues/19267) **[VS Code Remote Linux] duplicate same-title history entries, blank thread after reopen, and archived thread corruption** _[bug, extension, session]_ — _by @okjugu_
- [#19269](https://github.com/openai/codex/issues/19269) **Codex ran out of room in the model's context window. Start a new thread or clear earlier history before retrying** _[bug, CLI, context]_ — _by @AhmedAlNeaimy_
- [#19268](https://github.com/openai/codex/issues/19268) **Support per-skill disable for plugin-contributed skills** _[enhancement, CLI, skills, config]_ — _by @qiankunli_
- [#16933](https://github.com/openai/codex/issues/16933) **Codex CLI renders hook additionalContext as visible developer message** _[bug, CLI, hooks]_ — _by @FasterPHP_
- [#18755](https://github.com/openai/codex/issues/18755) **macOS packaging error: SkyComputerUseClient built for macOS 15.0 crashes on macOS 14.x** _[bug, app, skills]_ — _by @ianfoo_
- [#19265](https://github.com/openai/codex/issues/19265) **Codex Desktop background exec intermittently deletes ~/.codex/skills/.system** _[bug, exec, app, skills]_ — _by @markmdev_
- [#19260](https://github.com/openai/codex/issues/19260) **Feature request: add setting to control command/tool output folding** _[enhancement, app]_ — _by @Hutai_
- [#19185](https://github.com/openai/codex/issues/19185) **config.toml context window settings are not respected** _[bug, context, config]_ — _by @kkellyoffical_
- [#19263](https://github.com/openai/codex/issues/19263) **Desktop app model selector briefly shows Custom when opening conversations** _[bug, app, session]_ — _by @GGBondBlueWhale_
- [#19262](https://github.com/openai/codex/issues/19262) **Codex CLI 0.124.0 misreports `gh auth status` as invalid inside Codex session** _[bug, tool-calls]_ — _by @skshim-reco_
- [#9062](https://github.com/openai/codex/issues/9062) **Windows sandbox: command execution fails with `CreateProcessWithLogonW failed: 5`** _[bug, windows-os, sandbox]_ — _by @tagorr_
- [#19023](https://github.com/openai/codex/issues/19023) **Document MCP env_vars for secret-manager session tokens like BW_SESSION** _[documentation, mcp]_ — _by @verickwayne_
- [#19259](https://github.com/openai/codex/issues/19259) **macOS: stray horizontal white overlay appears above Settings in the sideba** _[bug, app]_ — _by @ZHOUKAILIAN_
- [#18993](https://github.com/openai/codex/issues/18993) **Unable to open past conversation history in VS Code extension** _[bug, extension, session]_ — _by @iamhenryhuang_
- [#19255](https://github.com/openai/codex/issues/19255) **Auto compact error** _[bug, context, connectivity]_ — _by @rcj1337_
- [#19148](https://github.com/openai/codex/issues/19148) **babysit-pr watcher ignores [redacted-product] PR reviews from [redacted]-pull-request-reviewer** _[bug, skills]_ — _by @clairernovotny_ _(closed 2026-04-24T02:29:59Z)_
- [#19181](https://github.com/openai/codex/issues/19181) **Newst VS Code extension just makes codex flash and blink** _[bug, windows-os, extension, regression]_ — _by @visnetwork_
- [#19186](https://github.com/openai/codex/issues/19186) **`/subagents` should prioritize user-defined agent names over forced runtime nicknames** _[enhancement, subagent]_ — _by @zinc1018_
- [#13993](https://github.com/openai/codex/issues/13993) **Support standalone Windows installer (`codex-setup.exe`)** _[enhancement, windows-os, app, User Request, Feature]_ — _by @programming-with-ia_
- [#19258](https://github.com/openai/codex/issues/19258) **Windows desktop app crashes on launch with code=3221225477** _[bug, windows-os, sandbox, app]_ — _by @baobaoxiaojingyu-a11y_
- [#18123](https://github.com/openai/codex/issues/18123) **Codex crash when using "/resume" command** _[bug, windows-os, TUI, session]_ — _by @aviy009_ _(closed 2026-04-24T02:22:48Z)_
- [#19257](https://github.com/openai/codex/issues/19257) **`[agents.*].config_file` with relative path fails to deserialize: "AbsolutePathBuf deserialized without a base path in agents"** _[bug, app, config]_ — _by @tackcrypto1031_
- [#19242](https://github.com/openai/codex/issues/19242) **Credits were successfully added and visible (~2300 total), then later disappeared completely, dropping to 0 without any corresponding usage records after April 8, 2026.** _[bug, codex-web, rate-limits]_ — _by @MajuriTK_
- [#19254](https://github.com/openai/codex/issues/19254) **Adb install failed** _[bug, CLI, tool-calls]_ — _by @HongYuATM_ _(closed 2026-04-24T02:00:48Z)_
- [#19243](https://github.com/openai/codex/issues/19243) **Bug: Missing optional dependency @openai/codex-win32-x64 on Windows (v0.124)** _[bug, windows-os, CLI]_ — _by @asdfqwerzxcc_
- [#19142](https://github.com/openai/codex/issues/19142) **Codex Pro GPT-5.4 long context regressed: ~672k worked Apr 22, ~290k fails Apr 23** _[bug, context]_ — _by @markobogoevski-dev_
- [#18655](https://github.com/openai/codex/issues/18655) **Support for running multiple simultaneous profiles in the app** _[enhancement, app, config]_ — _by @PylotLight_
- [#18203](https://github.com/openai/codex/issues/18203) **App-server disconnects remote TUI mid-turn when outbound queue fills (128 messages)** _[bug, TUI, connectivity, app-server]_ — _by @cipher982_ _(closed 2026-04-24T01:47:30Z)_
- [#19252](https://github.com/openai/codex/issues/19252) **Flagged for Cyber after completing KYC** _[bug, safety-check]_ — _by @Mcrich23_
- [#19253](https://github.com/openai/codex/issues/19253) **On macOS 15.7.5, Codex Desktop causes severe overheating when a session is opened in the mini window.** _[bug, app]_ — _by @Zbun_
- [#19251](https://github.com/openai/codex/issues/19251) **Windows app: Browser Use is packaged and feature-flagged but not exposed in UI or plugin marketplace** _[bug, windows-os, app, skills]_ — _by @aralatheai_
- [#3808](https://github.com/openai/codex/issues/3808) **Codex stopped doing Code Reviews in GitHub (just gives eyes/looking emoji but nothing more)** _[bug, code-review]_ — _by @JC1738_ _(closed 2026-01-13T03:49:58Z)_
- [#18692](https://github.com/openai/codex/issues/18692) **GPT-5.4 Fast mode often feels no faster than Standard, but still consumes credits at 2x** _[bug, rate-limits]_ — _by @GGBondBlueWhale_
- [#13555](https://github.com/openai/codex/issues/13555) **Bug: codex fails with "Missing optional dependency @openai/codex-linux-x64" on Ubuntu x86_64** _[bug, CLI, regression]_ — _by @tsugumi-sys_
- [#19250](https://github.com/openai/codex/issues/19250) **Split Diff doesnt work when being in "Large diff detected - showing one file at a time" mode** _[bug, code-review, app]_ — _by @henningpokriefke_
- [#16535](https://github.com/openai/codex/issues/16535) **【BUG】Slash commands completely not working in Codex Desktop App (no UI + no parsing)** _[bug, app, regression]_ — _by @Destiny-9527_ _(closed 2026-04-15T05:59:58Z)_
- [#19249](https://github.com/openai/codex/issues/19249) **Codex Desktop regression: slash/local skill chip submission hangs, errors, and duplicates messages on Windows after GPT-5.5 update** _[bug, app, regression, skills]_ — _by @didi-rare_
- [#17390](https://github.com/openai/codex/issues/17390) **Unable to use after update** _[bug, windows-os, CLI, regression]_ — _by @DHJComical_ _(closed 2026-04-16T23:19:04Z)_
- [#19248](https://github.com/openai/codex/issues/19248) **Add groups** _[enhancement, app, session]_ — _by @patchthecode_ _(closed 2026-04-24T01:00:49Z)_
- [#19245](https://github.com/openai/codex/issues/19245) **False positive security-risk flag during local yt-dlp GUI refactor using my own cookies.txt** _[bug, safety-check]_ — _by @tagorr_ _(closed 2026-04-24T00:48:59Z)_
- [#17367](https://github.com/openai/codex/issues/17367) **Linux sandbox cannot execute codex itself** _[bug, sandbox, CLI]_ — _by @howardjohn_
- [#19241](https://github.com/openai/codex/issues/19241) **GPT-5.5 Fast mode feels like Standard speed while using increased plan usage** _[bug, rate-limits]_ — _by @GGBondBlueWhale_


## Commits on `main`

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


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (deterministic template; no LLM for this run)._
