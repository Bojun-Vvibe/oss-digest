# openai/codex — 2026-04-20

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-19T23:59:59.000Z → 2026-04-20T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is the **`rust-v0.122.0` stable release** ([release notes](https://github.com/openai/codex/releases/tag/rust-v0.122.0)), which bundles the recent month of TUI and runtime work: more self-contained standalone installs and a fixed `codex app` launcher on Windows/Intel Macs (#17022, #18500), `/side` conversations with slash/`!`-shell prompts queueable mid-turn (#18190, #18542), and Plan Mode being able to start implementation in a fresh context (#17499, #18573). An alpha (`0.122.0-alpha.13`) also shipped earlier in the day.

Behind the release, the highest-signal merges are around **agent identity and background-task auth**. Adrian landed the downstream rollout (#17980, #18094, #18260) and a fixture fix (#18697) — but then opened an 8-PR reverse-order revert stack (#18727–#18734) that closed unmerged, signalling the rollout is being unwound; worth reading if you depend on `use_agent_identity` or background AgentAssertion auth.

Notable refactors and infra:
- TUI `app.rs` was split into submodules to stay under the 512K source-file CI cap (#18753); legacy_core re-exports continue to be whittled down (#18605, #18631).
- New `codex-uds` async Unix socket crate replaces the stdio-to-uds plumbing (#18254).
- `protocol`: canonicalized filesystem permissions ahead of `PermissionProfile` becoming the runtime abstraction (#18274); `await_holding_lock` cleanup continues via semaphores (#18403).
- App-server `ThreadStore` migration progressed — conversation summaries and unloaded thread name/memory-mode writes now route through it (#18716, #18361), plus an experimental remote thread-store config (#18714).

Realtime/multi-agent: realtime handoffs now ship transcript deltas instead of full snapshots (#18597, #18761), plus a `remain_silent` tool (#18635); spawn-agent now defaults sub-agents to the parent model to stop 5.4 picking 5.2 (#18701); guardian threads disable MCPs/plugins/skills (#18722, #18599).

Quality-of-life fixes: shared root flags now properly inherited by `exec` (#18630), `/copy` stays aligned with rollback (#18739), `/mcp verbose` restores diagnostics (#18610), stale proxy env restoration after shell snapshots (#17271), and new `--ignore-user-config`/`--ignore-rules` exec flags (#18646). Dependabot opened a Rust 1.95.0 toolchain bump (#18617) worth a look.

## Releases

- **[rust-v0.122.0](https://github.com/openai/codex/releases/tag/rust-v0.122.0)** — 0.122.0 _by @github-actions[bot] at 2026-04-20T18:38:40Z_
  > ## New Features
  > - Standalone installs are more self-contained, and `codex app` now opens or installs Desktop correctly on Windows and Intel Macs (#17022, #18500).
  > - The TUI can open `/side` conversations for quick side questions, and queued input now supports slash commands and `!` shell prompts while work is running (#18190, #18542).
  > - Plan Mode can start implementation in a fresh context, with context-usage shown before deciding whether to carry the planning thread forward (#17499, #18573).
  > -…
- **[rust-v0.122.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.13)** _(prerelease)_ — 0.122.0-alpha.13 _by @github-actions[bot] at 2026-04-20T12:30:31Z_
  > Release 0.122.0-alpha.13


## Merged PRs

- [#18761](https://github.com/openai/codex/pull/18761) **[codex] Send realtime transcript deltas on handoff** — _by @guinness-oai, merged 2026-04-20T23:46:16Z_
- [#18602](https://github.com/openai/codex/pull/18602) **Warn when trusting Git subdirectories** — _by @etraut-openai, merged 2026-04-20T23:43:22Z_
- [#17271](https://github.com/openai/codex/pull/17271) **fix: fix stale proxy env restoration after shell snapshots** — _by @viyatb-oai, merged 2026-04-20T23:39:17Z_
- [#18027](https://github.com/openai/codex/pull/18027) **[6/6] Fail exec client operations after disconnect** — _by @aibrahim-oai, merged 2026-04-20T23:24:07Z_
- [#18630](https://github.com/openai/codex/pull/18630) **Fix exec inheritance of root shared flags** — _by @etraut-openai, merged 2026-04-20T23:12:18Z_
- [#18753](https://github.com/openai/codex/pull/18753) **Refactor TUI app module into submodules** — _by @etraut-openai, merged 2026-04-20T23:10:36Z_
- [#18208](https://github.com/openai/codex/pull/18208) **Add session config loader interface** — _by @rasmusrygaard, merged 2026-04-20T23:05:50Z_
- [#18746](https://github.com/openai/codex/pull/18746) **Add Code Review skill** — _by @pakrym-oai, merged 2026-04-20T23:01:16Z_
- [#18254](https://github.com/openai/codex/pull/18254) **uds: add async Unix socket crate** — _by @euroelessar, merged 2026-04-20T22:59:05Z_
- [#18635](https://github.com/openai/codex/pull/18635) **Add realtime silence tool** — _by @guinness-oai, merged 2026-04-20T22:43:21Z_
- [#18716](https://github.com/openai/codex/pull/18716) **Read conversation summaries through thread store** — _by @wiltzius-openai, merged 2026-04-20T22:39:10Z_
- [#18112](https://github.com/openai/codex/pull/18112) **feat: cascade thread archive** — _by @jif-oai, merged 2026-04-20T22:38:19Z_
- [#18632](https://github.com/openai/codex/pull/18632) **Use app server metadata for fork parent titles** — _by @etraut-openai, merged 2026-04-20T22:37:31Z_
- [#18701](https://github.com/openai/codex/pull/18701) **[codex] prefer inherited spawn agent model** — _by @tibo-openai, merged 2026-04-20T22:34:09Z_
- [#18739](https://github.com/openai/codex/pull/18739) **fix(tui): keep /copy aligned with rollback** — _by @fcoury-oai, merged 2026-04-20T22:24:11Z_
- [#18754](https://github.com/openai/codex/pull/18754) **refactor(tui): remove keymap presets** — _by @fcoury-oai, merged 2026-04-20T22:23:21Z_
- [#18714](https://github.com/openai/codex/pull/18714) **Add experimental remote thread store config** — _by @wiltzius-openai, merged 2026-04-20T22:20:40Z_
- [#18719](https://github.com/openai/codex/pull/18719) **Fix stale model test fixtures** — _by @aibrahim-oai, merged 2026-04-20T21:52:31Z_
- [#18627](https://github.com/openai/codex/pull/18627) **Surface TUI skills refresh failures** — _by @etraut-openai, merged 2026-04-20T21:43:04Z_
- [#18597](https://github.com/openai/codex/pull/18597) **Update realtime handoff transcript handling** — _by @guinness-oai, merged 2026-04-20T21:04:09Z_
- [#18722](https://github.com/openai/codex/pull/18722) **chore(guardian) disable mcps and plugins** — _by @dylan-hurd-oai, merged 2026-04-20T20:43:51Z_
- [#17692](https://github.com/openai/codex/pull/17692) **[codex-analytics] guardian review analytics schema polishing** — _by @rhan-oai, merged 2026-04-20T20:08:18Z_
- [#18167](https://github.com/openai/codex/pull/18167) **[codex] Fix high severity dependency alerts** — _by @caseysilver-oai, merged 2026-04-20T18:59:50Z_
- [#18388](https://github.com/openai/codex/pull/18388) **Update models.json** — _by @github-actions[bot], merged 2026-04-20T18:46:52Z_
- [#18697](https://github.com/openai/codex/pull/18697) **[codex] Fix agent identity auth test fixture** — _by @adrian-openai, merged 2026-04-20T18:05:58Z_
- [#18631](https://github.com/openai/codex/pull/18631) **Remove simple TUI legacy_core reexports** — _by @etraut-openai, merged 2026-04-20T17:48:28Z_
- [#18289](https://github.com/openai/codex/pull/18289) **Wire the PatchUpdated events through app_server** — _by @akshaynathan, merged 2026-04-20T17:44:04Z_
- [#18586](https://github.com/openai/codex/pull/18586) **Update models.json** — _by @aibrahim-oai, merged 2026-04-20T17:27:01Z_
- [#18403](https://github.com/openai/codex/pull/18403) **refactor: use semaphores for async serialization gates** — _by @bolinfest, merged 2026-04-20T17:21:30Z_
- [#18274](https://github.com/openai/codex/pull/18274) **protocol: canonicalize file system permissions** — _by @bolinfest, merged 2026-04-20T16:57:04Z_
- [#18361](https://github.com/openai/codex/pull/18361) **codex: move thread/name/set and thread/memoryModeSet into ThreadStore** — _by @wiltzius-openai, merged 2026-04-20T16:50:01Z_
- [#18591](https://github.com/openai/codex/pull/18591) **Surface parent thread status in side conversations** — _by @etraut-openai, merged 2026-04-20T16:00:45Z_
- [#18633](https://github.com/openai/codex/pull/18633) **Use app server thread names in TUI picker** — _by @etraut-openai, merged 2026-04-20T15:16:24Z_
- [#18610](https://github.com/openai/codex/pull/18610) **Add verbose diagnostics for /mcp** — _by @etraut-openai, merged 2026-04-20T15:13:45Z_
- [#18657](https://github.com/openai/codex/pull/18657) **fix: auth.json leak in tests** — _by @jif-oai, merged 2026-04-20T14:35:29Z_
- [#18260](https://github.com/openai/codex/pull/18260) **[codex] Use background task auth for additional backend calls** — _by @adrian-openai, merged 2026-04-20T14:24:29Z_
- [#18441](https://github.com/openai/codex/pull/18441) **Avoid false shell snapshot cleanup warnings** — _by @etraut-openai, merged 2026-04-20T14:15:06Z_
- [#18094](https://github.com/openai/codex/pull/18094) **[codex] Use background agent task auth for backend calls** — _by @adrian-openai, merged 2026-04-20T13:50:29Z_
- [#18661](https://github.com/openai/codex/pull/18661) **feat: log client use min log level** — _by @jif-oai, merged 2026-04-20T13:40:39Z_
- [#18659](https://github.com/openai/codex/pull/18659) **chore: drop review prompt from TUI UX** — _by @jif-oai, merged 2026-04-20T13:31:37Z_
- [#18662](https://github.com/openai/codex/pull/18662) **feat: add metric to track the number of turns with memory usage** — _by @jif-oai, merged 2026-04-20T13:31:23Z_
- [#18651](https://github.com/openai/codex/pull/18651) **feat: chronicle alias** — _by @jif-oai, merged 2026-04-20T10:52:21Z_
- [#18654](https://github.com/openai/codex/pull/18654) **fix: exec policy loading for sub-agents** — _by @jif-oai, merged 2026-04-20T10:51:59Z_
- [#18652](https://github.com/openai/codex/pull/18652) **nit: telepathy to chronicle in tests** — _by @jif-oai, merged 2026-04-20T10:51:56Z_
- [#18646](https://github.com/openai/codex/pull/18646) **feat: add `--ignore-user-config` and `--ignore-rules`** — _by @jif-oai, merged 2026-04-20T10:27:48Z_
- [#18492](https://github.com/openai/codex/pull/18492) **fix: FS watcher when file does not exist yet** — _by @jif-oai, merged 2026-04-20T10:23:00Z_
- [#17721](https://github.com/openai/codex/pull/17721) **Stabilize marketplace/remove installedRoot test** — _by @xli-oai, merged 2026-04-20T10:11:46Z_
- [#18649](https://github.com/openai/codex/pull/18649) **fix: main 2** — _by @jif-oai, merged 2026-04-20T09:53:54Z_
- [#18353](https://github.com/openai/codex/pull/18353) **chore: morpheus to path** — _by @jif-oai, merged 2026-04-20T09:32:21Z_
- [#18644](https://github.com/openai/codex/pull/18644) **feat: add mem 2 agent header** — _by @jif-oai, merged 2026-04-20T08:58:33Z_
- [#17751](https://github.com/openai/codex/pull/17751) **[codex] Add marketplace/remove app-server RPC** — _by @xli-oai, merged 2026-04-20T06:22:50Z_
- [#17980](https://github.com/openai/codex/pull/17980) **[codex] Use AgentAssertion downstream behind use_agent_identity** — _by @adrian-openai, merged 2026-04-20T06:16:43Z_
- [#18221](https://github.com/openai/codex/pull/18221) **[codex] Add workspace owner usage nudge UI** — _by @richardopenai, merged 2026-04-20T05:51:48Z_
- [#18625](https://github.com/openai/codex/pull/18625) **Add `codex debug models` to show model catalog** — _by @andmis, merged 2026-04-20T05:42:23Z_
- [#18605](https://github.com/openai/codex/pull/18605) **TUI: remove simple legacy_core re-exports** — _by @etraut-openai, merged 2026-04-20T05:39:54Z_
- [#18440](https://github.com/openai/codex/pull/18440) **Use thread IDs in TUI resume hints** — _by @etraut-openai, merged 2026-04-20T05:38:48Z_
- [#18612](https://github.com/openai/codex/pull/18612) **Create dev-small build profile** — _by @andmis, merged 2026-04-20T05:05:17Z_
- [#18599](https://github.com/openai/codex/pull/18599) **fix(guardian) disable skills message in guardian thread** — _by @dylan-hurd-oai, merged 2026-04-20T04:42:56Z_
- [#18596](https://github.com/openai/codex/pull/18596) **chore(multiagent) skills instructions toggle** — _by @dylan-hurd-oai, merged 2026-04-20T04:11:52Z_
- [#18601](https://github.com/openai/codex/pull/18601) **Soften Fast mode plan usage copy** — _by @pash-openai, merged 2026-04-20T00:37:41Z_
- [#18604](https://github.com/openai/codex/pull/18604) **Add tldr docs for responses-api-proxy** — _by @andmis, merged 2026-04-20T00:36:18Z_


## Open PRs (new or updated)

- [#18376](https://github.com/openai/codex/pull/18376) **Clarify Windows image paste shortcut** — _by @canvrno-oai, updated 2026-04-20T23:58:22Z_
- [#18595](https://github.com/openai/codex/pull/18595) _(draft)_ **feat(tui): add vim composer mode** — _by @fcoury-oai, updated 2026-04-20T23:03:11Z_
- [#18594](https://github.com/openai/codex/pull/18594) **feat(tui): add keymap slash command** — _by @fcoury-oai, updated 2026-04-20T22:54:01Z_
- [#18759](https://github.com/openai/codex/pull/18759) _(draft)_ **[WIP] [tools-refactor] Add full MCP tool definitions** — _by @sayan-oai, updated 2026-04-20T22:51:51Z_
- [#18593](https://github.com/openai/codex/pull/18593) **feat(tui): add configurable keymap support** — _by @fcoury-oai, updated 2026-04-20T22:48:10Z_
- [#18756](https://github.com/openai/codex/pull/18756) _(draft)_ **[WIP] [tools-refactor] Introduce canonical tool definitions** — _by @sayan-oai, updated 2026-04-20T22:28:37Z_
- [#18752](https://github.com/openai/codex/pull/18752) _(draft)_ **Extract small utility crates from codex-core** — _by @starr-openai, updated 2026-04-20T22:06:27Z_
- [#18743](https://github.com/openai/codex/pull/18743) _(draft)_ **Add sub-agent MCP startup modes** — _by @starr-openai, updated 2026-04-20T20:59:38Z_
- [#18420](https://github.com/openai/codex/pull/18420) _(draft)_ **Update arg0 tests** — _by @starr-openai, updated 2026-04-20T20:47:05Z_
- [#18421](https://github.com/openai/codex/pull/18421) _(draft)_ **Update MCP tools list handling** — _by @starr-openai, updated 2026-04-20T20:47:05Z_
- [#18408](https://github.com/openai/codex/pull/18408) **Add Codex reviewer guidance** — _by @starr-openai, updated 2026-04-20T20:46:39Z_
- [#18180](https://github.com/openai/codex/pull/18180) **Load agent identity from CODEX_AGENT_IDENTITY** — _by @efrazer-oai, updated 2026-04-20T17:03:40Z_
- [#18177](https://github.com/openai/codex/pull/18177) **Enable agent identity for tokenless startup auth** — _by @efrazer-oai, updated 2026-04-20T17:03:39Z_
- [#18176](https://github.com/openai/codex/pull/18176) **Accept JWT agent identity auth input** — _by @efrazer-oai, updated 2026-04-20T17:03:39Z_
- [#18399](https://github.com/openai/codex/pull/18399) _(draft)_ **codex: add app-server ThreadStore adapter** — _by @wiltzius-openai, updated 2026-04-20T16:50:03Z_
- [#17286](https://github.com/openai/codex/pull/17286) **Prefix Compaction** — _by @rka-oai, updated 2026-04-20T09:44:54Z_
- [#18617](https://github.com/openai/codex/pull/18617) **Bump rust-toolchain from 1.93.0 to 1.95.0 in /codex-rs** — _by @dependabot[bot], updated 2026-04-20T03:37:10Z_
- [#18616](https://github.com/openai/codex/pull/18616) **Bump softprops/action-gh-release from 2.6.1 to 3.0.0** — _by @dependabot[bot], updated 2026-04-20T03:36:35Z_
- [#18618](https://github.com/openai/codex/pull/18618) **Bump taiki-e/install-action from 2.62.49 to 2.75.18** — _by @dependabot[bot], updated 2026-04-20T03:34:55Z_
- [#18606](https://github.com/openai/codex/pull/18606) _(draft)_ **WIP - Unified observation layer** — _by @cassirer-openai, updated 2026-04-20T01:18:47Z_


## Closed PRs (not merged)

- [#18725](https://github.com/openai/codex/pull/18725) **Reload app-server OTel from thread config** — _by @etraut-openai, closed 2026-04-20T23:43:10Z_
- [#18717](https://github.com/openai/codex/pull/18717) **[codex] Add tool interceptor support** — _by @cwolff-oai, closed 2026-04-20T23:41:07Z_
- [#18734](https://github.com/openai/codex/pull/18734) **PR1: Revert use_agent_identity flag** — _by @adrian-openai, closed 2026-04-20T23:12:34Z_
- [#18733](https://github.com/openai/codex/pull/18733) **PR2: Revert agent identity registration** — _by @adrian-openai, closed 2026-04-20T23:12:26Z_
- [#18732](https://github.com/openai/codex/pull/18732) **PR3: Revert agent task registration** — _by @adrian-openai, closed 2026-04-20T23:12:26Z_
- [#18731](https://github.com/openai/codex/pull/18731) **PR4: Revert persisted agent task state** — _by @adrian-openai, closed 2026-04-20T23:12:26Z_
- [#18730](https://github.com/openai/codex/pull/18730) **PR5: Revert downstream AgentAssertion auth** — _by @adrian-openai, closed 2026-04-20T23:12:19Z_
- [#18728](https://github.com/openai/codex/pull/18728) **PR7: Revert background auth additional callsites** — _by @adrian-openai, closed 2026-04-20T23:12:13Z_
- [#18729](https://github.com/openai/codex/pull/18729) **PR6: Revert background agent task auth** — _by @adrian-openai, closed 2026-04-20T23:12:12Z_
- [#18727](https://github.com/openai/codex/pull/18727) **PR8: Revert agent identity fixture fix** — _by @adrian-openai, closed 2026-04-20T23:12:12Z_
- [#18724](https://github.com/openai/codex/pull/18724) **[codex] Add remote sandbox requirements override** — _by @abhinav-oai, closed 2026-04-20T22:45:50Z_
- [#18124](https://github.com/openai/codex/pull/18124) **feat: add support for CODEX_AUTH_HOME** — _by @jif-oai, closed 2026-04-20T22:38:27Z_
- [#18751](https://github.com/openai/codex/pull/18751) **Fix stale Windows test expectations** — _by @canvrno-oai, closed 2026-04-20T22:01:09Z_
- [#18387](https://github.com/openai/codex/pull/18387) **Deflake app-server fs watch integration tests** — _by @starr-openai, closed 2026-04-20T20:57:26Z_
- [#18290](https://github.com/openai/codex/pull/18290) **TUI: retry unacknowledged pending steers after turn completion** — _by @etraut-openai, closed 2026-04-20T20:51:23Z_
- [#18213](https://github.com/openai/codex/pull/18213) **Add skill metadata budget handling** — _by @mzeng-openai, closed 2026-04-20T17:22:02Z_
- [#18695](https://github.com/openai/codex/pull/18695) **Test core CODEOWNERS enforcement** — _by @aibrahim-oai, closed 2026-04-20T16:54:15Z_
- [#16712](https://github.com/openai/codex/pull/16712) **feat(tui): add scoped /model targets** — _by @fcoury-oai, closed 2026-04-20T06:46:53Z_
- [#16198](https://github.com/openai/codex/pull/16198) **feat(tui): render watchdog countdown in subagent panel** — _by @friel-openai, closed 2026-04-20T06:46:51Z_
- [#16199](https://github.com/openai/codex/pull/16199) **feat(core): reset watchdog timer on owner input** — _by @friel-openai, closed 2026-04-20T06:46:49Z_
- [#16196](https://github.com/openai/codex/pull/16196) **Fix watchdog close guard no-auto-close behavior** — _by @friel-openai, closed 2026-04-20T06:46:48Z_
- [#17956](https://github.com/openai/codex/pull/17956) **[codex] Match usage-limit TUI copy and owner nudge type** — _by @richardopenai, closed 2026-04-20T05:23:48Z_
- [#18608](https://github.com/openai/codex/pull/18608) **Shorten TUI transcript truncation hint** — _by @etraut-openai, closed 2026-04-20T01:06:49Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`ca3246f`](https://github.com/openai/codex/commit/ca3246f77a5eca14f3424d786ce8855fe8811dbc) [codex] Send realtime transcript deltas on handoff (#18761) — _@guinness-oai_
- [`216e7a0`](https://github.com/openai/codex/commit/216e7a0a567ce128688310a3b12eb40f4dc8f21e) Warn when trusting Git subdirectories (#18602) — _@etraut-openai_
- [`33fa952`](https://github.com/openai/codex/commit/33fa9524261f8c7a9f7b72463188579297b00e61) fix: fix stale proxy env restoration after shell snapshots (#17271) — _@viyatb-oai_
- [`9ef1cab`](https://github.com/openai/codex/commit/9ef1cab6f7dcb968f4fffe2bf445f2a50f71f782) [6/6] Fail exec client operations after disconnect (#18027) — _@aibrahim-oai_
- [`0f1c9b8`](https://github.com/openai/codex/commit/0f1c9b896308d8a8b45ba957f6bbe9f8f50c7b80) Fix exec inheritance of root shared flags (#18630) — _@etraut-openai_
- [`2af4f15`](https://github.com/openai/codex/commit/2af4f154797ab382d79a56c6eb616bcfe3cba1d4) Refactor TUI app module into submodules (#18753) — _@etraut-openai_
- [`7b99410`](https://github.com/openai/codex/commit/7b994100b3fd43eec35cb2bc2300296738a2ee25) Add session config loader interface (#18208) — _@rasmusrygaard_
- [`513dc28`](https://github.com/openai/codex/commit/513dc28717aadc9e2a94c5736d55d4424eb12a27) Add Code Review skill (#18746) — _@pakrym-oai_
- [`97d4b42`](https://github.com/openai/codex/commit/97d4b425831987eebe7a80e0edc6192fb45c59e2) uds: add async Unix socket crate (#18254) — _@euroelessar_
- [`1029742`](https://github.com/openai/codex/commit/1029742cf7747ad2e82fe10d931744372902e2d6) Add realtime silence tool (#18635) — _@guinness-oai_
- [`a718b6f`](https://github.com/openai/codex/commit/a718b6fd47fdc0a7743cef532578c0e4e18f795c) Read conversation summaries through thread store (#18716) — _@wiltzius-openai_
- [`660153b`](https://github.com/openai/codex/commit/660153b6def82341a9c4cb21164ef467e27d3004) feat: cascade thread archive (#18112) — _@jif-oai_
- [`b8e78e8`](https://github.com/openai/codex/commit/b8e78e886934c030e8243cfec5a6f8d3d4393751) Use app server metadata for fork parent titles (#18632) — _@etraut-openai_
- [`54bd07d`](https://github.com/openai/codex/commit/54bd07d28c8c8684217fd5ab83c0e7d943d06d91) [codex] prefer inherited spawn agent model (#18701) — _@tibo-openai_
- [`cebe57b`](https://github.com/openai/codex/commit/cebe57b723e22ffd3f5f46d6c376f90ea3ffb2c5) fix(tui): keep /copy aligned with rollback (#18739) — _@fcoury-oai_
- [`46e5814`](https://github.com/openai/codex/commit/46e5814f77aed16b010b0b5ddae906e57cfef20b) Add experimental remote thread store config (#18714) — _@wiltzius-openai_
- [`cc96a03`](https://github.com/openai/codex/commit/cc96a03f105ae6af03f1593a167dd7dd8c9d7b47) Fix stale model test fixtures (#18719) — _@aibrahim-oai_
- [`baa5dd7`](https://github.com/openai/codex/commit/baa5dd7b29ac03224a04dfb8b71481ae12b8e4c5) Surface TUI skills refresh failures (#18627) — _@etraut-openai_
- [`126bd6e`](https://github.com/openai/codex/commit/126bd6e7a8839a861ee9bb40ec72c72ea1bf7b4d) Update realtime handoff transcript handling (#18597) — _@guinness-oai_
- [`14ebfbc`](https://github.com/openai/codex/commit/14ebfbced9dc502713cf68d457ea78618563b7dc) chore(guardian) disable mcps and plugins (#18722) — _@dylan-hurd-oai_
- [`7f53e47`](https://github.com/openai/codex/commit/7f53e4725062d9bdfef568a63d4c1bfb79998370) [codex-analytics] guardian review analytics schema polishing (#17692) — _@rhan-oai_
- [`fe04d75`](https://github.com/openai/codex/commit/fe04d75e0fdbbff77e02b5355c86108712abd151) [codex] Fix high severity dependency alerts (#18167) — _@caseysilver-oai_
- [`4676cb5`](https://github.com/openai/codex/commit/4676cb5ff85c783daacb81e86f590fe12e013900) Update models.json (#18388) — _@github-actions[bot]_
- [`6b17adc`](https://github.com/openai/codex/commit/6b17adc231e038c35aeb6ac613fdaf6c6d79bb26) [codex] Fix agent identity auth test fixture (#18697) — _@adrian-openai_
- [`164b6a0`](https://github.com/openai/codex/commit/164b6a0c78506c905b7e50cb90fb6ea3695fc7f3) Remove simple TUI legacy_core reexports (#18631) — _@etraut-openai_
- [`34a3e85`](https://github.com/openai/codex/commit/34a3e85fcd2e4c8fa29c55647c67529e5b258346) Wire the PatchUpdated events through app_server (#18289) — _@akshaynathan_
- [`316cf0e`](https://github.com/openai/codex/commit/316cf0e90b2eac4e998af7fa6ae7a5ba85ad96bb) Update models.json (#18586) — _@aibrahim-oai_
- [`5d5d610`](https://github.com/openai/codex/commit/5d5d6107403c92cc0d32a02ae26233e14ac8b714) refactor: use semaphores for async serialization gates (#18403) — _@bolinfest_
- [`dcec516`](https://github.com/openai/codex/commit/dcec516313bd01712b072030ef30715a4f4e9e12) protocol: canonicalize file system permissions (#18274) — _@bolinfest_
- [`ac7c9a6`](https://github.com/openai/codex/commit/ac7c9a685f618b2a08dbeb6c42cfbc44a06f16d1) codex: move unloaded thread writes into store (#18361) — _@wiltzius-openai_
- [`0dc503b`](https://github.com/openai/codex/commit/0dc503ba6e0f82a27fc676bcdc8bec642b20e6fe) Surface parent thread status in side conversations (#18591) — _@etraut-openai_
- [`43a69c5`](https://github.com/openai/codex/commit/43a69c50ebb7b18a9ab14163ad2b5323c69028d8) Use app server thread names in TUI picker (#18633) — _@etraut-openai_
- [`5a8700a`](https://github.com/openai/codex/commit/5a8700abcc6e5b7ca56cea2dc9e56d9a6cc20cbc) Add verbose diagnostics for /mcp (#18610) — _@etraut-openai_
- [`e53e6bc`](https://github.com/openai/codex/commit/e53e6bc48f9b0de5c2b350dad05da923a5cbd37d) fix: auth.json leak in tests (#18657) — _@jif-oai_
- [`19e2f21`](https://github.com/openai/codex/commit/19e2f218271a0795ef490909e978d8ff62bbb3de) [codex] Use background task auth for additional backend calls (#18260) — _@adrian-openai_
- [`fa0e2ba`](https://github.com/openai/codex/commit/fa0e2ba87c87f75c54fca2407944a34a68ced625) Avoid false shell snapshot cleanup warnings (#18441) — _@etraut-openai_
- [`904c751`](https://github.com/openai/codex/commit/904c751a4068e5a4f7005ef165f5d3afa756f420) [codex] Use background agent task auth for backend calls (#18094) — _@adrian-openai_
- [`e1c289e`](https://github.com/openai/codex/commit/e1c289e11b75585485572f984accd34e85804de2) feat: log client use min log level (#18661) — _@jif-oai_
- [`7e55886`](https://github.com/openai/codex/commit/7e5588699da9a89b63f0db988b9209ece31d7fba) chore: drop review prompt from TUI UX (#18659) — _@jif-oai_
- [`2c59806`](https://github.com/openai/codex/commit/2c59806fe04484d312e943aa7c047fe20569686c) feat: add metric to track the number of turns with memory usage (#18662) — _@jif-oai_
- [`1c24347`](https://github.com/openai/codex/commit/1c243477725cbfc9a9e95c7db522e5725b9d697f) feat: chronicle alias (#18651) — _@jif-oai_
- [`fc758af`](https://github.com/openai/codex/commit/fc758af9eb4ba82af629493d4ada6b0f0ac66973) fix: exec policy loading for sub-agents (#18654) — _@jif-oai_
- [`ff6a580`](https://github.com/openai/codex/commit/ff6a5804d2e9f3c13a8cf723527aa4f19ddb4b30) nit: telepathy to chronicle in tests (#18652) — _@jif-oai_
- [`be4fe9f`](https://github.com/openai/codex/commit/be4fe9f9b21a3e3909c641c9c74e08cbaf355cc8) feat: add `--ignore-user-config` and `--ignore-rules` (#18646) — _@jif-oai_
- [`7d8bd69`](https://github.com/openai/codex/commit/7d8bd69283791eefa0ef8d99c1ca523428dce7ef) fix: FS watcher when file does not exist yet (#18492) — _@jif-oai_
- [`2a17b32`](https://github.com/openai/codex/commit/2a17b32dfab4f97624c437fe58264ca3638b3c0d) Stabilize marketplace/remove installedRoot test (#17721) — _@xli-oai_
- [`7171b25`](https://github.com/openai/codex/commit/7171b25b30f8da455998791bcc6d2a987e294629) fix: main 2 (#18649) — _@jif-oai_
- [`b528ff0`](https://github.com/openai/codex/commit/b528ff02b6504e8399a5826900ada9a392e6bb48) chore: morpheus to path (#18353) — _@jif-oai_
- [`e404c4e`](https://github.com/openai/codex/commit/e404c4e9102b67f4136cd0d5018dd484b43eaaf7) feat: add mem 2 agent header (#18644) — _@jif-oai_
- [`1dc3535`](https://github.com/openai/codex/commit/1dc3535e17666884800ada37d7eb94cf974d38fe) [codex] Add marketplace/remove app-server RPC (#17751) — _@xli-oai_
- [`b44d285`](https://github.com/openai/codex/commit/b44d2851cf0e7b728d4a848d4a4f68da3483dfd6) [codex] Use AgentAssertion downstream behind use_agent_identity (#17980) — _@adrian-openai_
- [`3c75f9b`](https://github.com/openai/codex/commit/3c75f9b4ddb1acf72b481f48918cc52fd28fe51f) [codex] Add workspace owner usage nudge UI (#18221) — _@richardopenai_
- [`ab65fbb`](https://github.com/openai/codex/commit/ab65fbbdd691fe1cb1e949ae58b837fe2b1f8f83) Add `codex debug models` to show model catalog (#18625) — _@andmis_
- [`87fc21f`](https://github.com/openai/codex/commit/87fc21ff6060dd71c1a1c501a152fa5caf4ddf11) TUI: remove simple legacy_core re-exports (#18605) — _@etraut-openai_
- [`fa8943f`](https://github.com/openai/codex/commit/fa8943fe7e81ad2316de13ce7da24d5a28318f2d) Use thread IDs in TUI resume hints (#18440) — _@etraut-openai_
- [`80aecc2`](https://github.com/openai/codex/commit/80aecc22cd990273bd55e7bab69435a317ae6d7a) Create dev-small build profile (#18612) — _@andmis_
- [`0500801`](https://github.com/openai/codex/commit/0500801123ada245ba752cf0577ca08cc7fc0065) fix(guardian) disable skills message in guardian thread (#18599) — _@dylan-hurd-oai_
- [`49403e3`](https://github.com/openai/codex/commit/49403e3676f8f3685f0d4ba4a1292b8953d05b42) chore(multiagent) skills instructions toggle (#18596) — _@dylan-hurd-oai_
- [`d58d3cc`](https://github.com/openai/codex/commit/d58d3ccfec02da392e63a89fa8fd87f41c56a8a9) Soften Fast mode plan usage copy (#18601) — _@pash-openai_
- [`fd09021`](https://github.com/openai/codex/commit/fd09021e497b38dc6537f191b6757e68822bf45c) Add tldr docs for responses-api-proxy (#18604) — _@andmis_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
