# openai/codex — 2026-04-21

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-20T23:59:59.000Z → 2026-04-21T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Six alpha prereleases shipped for `rust-v0.123.0` (alpha.2 through alpha.7) over the day, reflecting an unusually heavy merge volume rather than a single themed release.

The most user-visible change is a new built-in **Amazon Bedrock model provider** (#18744) — a partially modifiable provider with Codex-owned defaults so users can switch to Bedrock without hand-rolling a config. TUI users also get **`Alt+,` / `Alt+.` shortcuts to step reasoning effort up/down per-session** (#18866), a clearer **bash mode indicator with a `!` composer prefix** (#18271), and a fix that **disables crossterm enhanced keys under VS Code WSL** to stop dead-key composition from breaking input (#18741, fixes #13638). Follow-up input typed during a `!sleep`-style user shell command is now queued instead of being misrouted as a steer (#18820, fixes #17954).

On the platform/runtime side, **Windows sandbox unified-exec** landed (#15578) along with the long-running **device-key v2 stack** for app-server: protocol (#18428), crate (#18429), and method implementation (#18430), with Linux/Windows TPM/CNG providers still in draft (#18438, #18436). Sandboxing got a security fix where `PermissionProfile` intersection is now semantic (#18275) and `glob_scan_max_depth` is preserved across round-trips so deny-read globs like `**/*.env` keep their bound (#18713). **Cloudflare cookies are now preserved** in a process-local store for ChatGPT HTTP clients (#17783). The previously merged Agent Identity runtime wiring was **fully reverted** to enable a cleaner reintroduction (#18757).

Notable refactors worth skimming: app-server config loading is centralized in `ConfigManager` (#18442, #18870); `DeveloperInstructions` is split into fragments and context fragments reorganized under `core/context` (#18813, #18794); external agent config moved out of `codex-core` (#18850); and a new `codex-rollout-trace` crate landed as PR 1/5 of a tracing stack (#18876, with #18880 and #17982 still open). Clippy `await_holding_*` lints are now enforced workspace-wide (#18698, #18423, #18418).

Open drafts to watch: rich OTel-based tracing (#18773), Statsig integration (#18808), and a context-length regression review probe (#18736).

## Releases

- **[rust-v0.123.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.7)** _(prerelease)_ — 0.123.0-alpha.7 _by @github-actions[bot] at 2026-04-21T21:46:09Z_
  > Release 0.123.0-alpha.7
- **[rust-v0.123.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.6)** _(prerelease)_ — 0.123.0-alpha.6 _by @github-actions[bot] at 2026-04-21T13:12:23Z_
  > Release 0.123.0-alpha.6
- **[rust-v0.123.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.5)** _(prerelease)_ — 0.123.0-alpha.5 _by @github-actions[bot] at 2026-04-21T06:52:30Z_
  > Release 0.123.0-alpha.5
- **[rust-v0.123.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.4)** _(prerelease)_ — 0.123.0-alpha.4 _by @github-actions[bot] at 2026-04-21T05:59:19Z_
  > Release 0.123.0-alpha.4
- **[rust-v0.123.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.3)** _(prerelease)_ — 0.123.0-alpha.3 _by @github-actions[bot] at 2026-04-21T03:38:31Z_
  > Release 0.123.0-alpha.3
- **[rust-v0.123.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.2)** _(prerelease)_ — 0.123.0-alpha.2 _by @github-actions[bot] at 2026-04-21T00:27:08Z_
  > Release 0.123.0-alpha.2


## Merged PRs

- [#18768](https://github.com/openai/codex/pull/18768) **[codex] Tighten external migration prompt tests** — _by @alexsong-oai, merged 2026-04-21T23:20:16Z_
- [#18886](https://github.com/openai/codex/pull/18886) **Normalize /statusline & /title items** — _by @canvrno-oai, merged 2026-04-21T23:13:10Z_
- [#18797](https://github.com/openai/codex/pull/18797) **Allow guardian bare allow output** — _by @maja-openai, merged 2026-04-21T22:37:13Z_
- [#18401](https://github.com/openai/codex/pull/18401) **Support multiple managed environments** — _by @starr-openai, merged 2026-04-21T22:29:35Z_
- [#18876](https://github.com/openai/codex/pull/18876) **[rollout_trace] Add rollout trace crate** — _by @cassirer-openai, merged 2026-04-21T21:54:05Z_
- [#17783](https://github.com/openai/codex/pull/17783) **Preserve Cloudfare HTTP cookies in codex** — _by @shijie-oai, merged 2026-04-21T21:40:15Z_
- [#18757](https://github.com/openai/codex/pull/18757) **fix: fully revert agent identity runtime wiring** — _by @efrazer-oai, merged 2026-04-21T21:30:55Z_
- [#18430](https://github.com/openai/codex/pull/18430) **app-server: implement device key v2 methods** — _by @euroelessar, merged 2026-04-21T21:07:09Z_
- [#18866](https://github.com/openai/codex/pull/18866) **feat(tui): shortcuts to change reasoning level temporarily** — _by @fcoury-oai, merged 2026-04-21T21:04:04Z_
- [#18870](https://github.com/openai/codex/pull/18870) **Load app-server config through ConfigManager** — _by @pakrym-oai, merged 2026-04-21T21:01:03Z_
- [#18873](https://github.com/openai/codex/pull/18873) **chore: default multi-agent v2 fork to all** — _by @jif-oai, merged 2026-04-21T20:54:58Z_
- [#18885](https://github.com/openai/codex/pull/18885) **skip busted tests while I fix them** — _by @iceweasel-oai, merged 2026-04-21T20:40:34Z_
- [#18872](https://github.com/openai/codex/pull/18872) **app-server: fix Bazel clippy in tracing tests** — _by @euroelessar, merged 2026-04-21T20:10:37Z_
- [#18429](https://github.com/openai/codex/pull/18429) **app-server: add codex-device-key crate** — _by @euroelessar, merged 2026-04-21T17:57:01Z_
- [#15578](https://github.com/openai/codex/pull/15578) **Add Windows sandbox unified exec runtime support** — _by @iceweasel-oai, merged 2026-04-21T17:44:49Z_
- [#18862](https://github.com/openai/codex/pull/18862) **Refresh generated Python app-server SDK types** — _by @sdcoffey, merged 2026-04-21T17:23:28Z_
- [#18275](https://github.com/openai/codex/pull/18275) **sandboxing: intersect permission profiles semantically** — _by @bolinfest, merged 2026-04-21T17:23:01Z_
- [#18813](https://github.com/openai/codex/pull/18813) **Split DeveloperInstructions into individual fragments.** — _by @pakrym-oai, merged 2026-04-21T17:22:37Z_
- [#18442](https://github.com/openai/codex/pull/18442) **Refactor app-server config loading into ConfigManager** — _by @pakrym-oai, merged 2026-04-21T17:22:27Z_
- [#18799](https://github.com/openai/codex/pull/18799) **Move TUI app tests to modules they cover** — _by @etraut-openai, merged 2026-04-21T17:16:51Z_
- [#18858](https://github.com/openai/codex/pull/18858) **Stabilize debug clear memories integration test** — _by @jif-oai, merged 2026-04-21T17:15:38Z_
- [#18820](https://github.com/openai/codex/pull/18820) **Queue follow-up input during user shell commands** — _by @etraut-openai, merged 2026-04-21T17:13:14Z_
- [#17836](https://github.com/openai/codex/pull/17836) **[codex] Add tmux-aware OSC 9 notifications** — _by @caseychow-oai, merged 2026-04-21T17:10:37Z_
- [#18093](https://github.com/openai/codex/pull/18093) **Propagate thread id in MCP tool metadata** — _by @rennie-openai, merged 2026-04-21T17:09:47Z_
- [#18428](https://github.com/openai/codex/pull/18428) **app-server: define device key v2 protocol** — _by @euroelessar, merged 2026-04-21T17:08:43Z_
- [#18846](https://github.com/openai/codex/pull/18846) **core: make test-log a dev dependency** — _by @bolinfest, merged 2026-04-21T16:48:32Z_
- [#18848](https://github.com/openai/codex/pull/18848) **feat: baseline lib** — _by @jif-oai, merged 2026-04-21T16:24:31Z_
- [#18844](https://github.com/openai/codex/pull/18844) **build: reduce Rust dev debuginfo** — _by @bolinfest, merged 2026-04-21T16:00:41Z_
- [#18850](https://github.com/openai/codex/pull/18850) **Move external agent config out of core** — _by @pakrym-oai, merged 2026-04-21T15:33:58Z_
- [#18741](https://github.com/openai/codex/pull/18741) **fix(tui): disable enhanced keys for VS Code WSL** — _by @fcoury-oai, merged 2026-04-21T12:57:51Z_
- [#18271](https://github.com/openai/codex/pull/18271) **show bash mode in the TUI** — _by @abhinav-oai, merged 2026-04-21T07:15:49Z_
- [#18818](https://github.com/openai/codex/pull/18818) **[codex] Tighten code review skill wording** — _by @pakrym-oai, merged 2026-04-21T07:04:04Z_
- [#18413](https://github.com/openai/codex/pull/18413) **[tool search] support namespaced deferred dynamic tools** — _by @pash-openai, merged 2026-04-21T06:13:08Z_
- [#18698](https://github.com/openai/codex/pull/18698) **chore: enable await-holding clippy lints** — _by @bolinfest, merged 2026-04-21T06:06:06Z_
- [#18423](https://github.com/openai/codex/pull/18423) **chore: document intentional await-holding cases** — _by @bolinfest, merged 2026-04-21T05:41:55Z_
- [#18794](https://github.com/openai/codex/pull/18794) **Organize context fragments ** — _by @pakrym-oai, merged 2026-04-21T05:39:18Z_
- [#18763](https://github.com/openai/codex/pull/18763) **Add remote_sandbox_config to our config requirements** — _by @abhinav-oai, merged 2026-04-21T05:05:03Z_
- [#18393](https://github.com/openai/codex/pull/18393) **feat(auto-review) Handle request_permissions calls** — _by @dylan-hurd-oai, merged 2026-04-21T04:48:57Z_
- [#18807](https://github.com/openai/codex/pull/18807) **chore(app-server) linguist-generated** — _by @dylan-hurd-oai, merged 2026-04-21T04:42:01Z_
- [#18786](https://github.com/openai/codex/pull/18786) **Fallback display names for TUI skill mentions** — _by @canvrno-oai, merged 2026-04-21T03:46:55Z_
- [#18292](https://github.com/openai/codex/pull/18292) **Make MCP resource read threadless** — _by @mzeng-openai, merged 2026-04-21T02:59:36Z_
- [#18795](https://github.com/openai/codex/pull/18795) **fix(guardian) Dont hard error on feature disable** — _by @dylan-hurd-oai, merged 2026-04-21T02:54:39Z_
- [#18713](https://github.com/openai/codex/pull/18713) **protocol: preserve glob scan depth in permission profiles** — _by @bolinfest, merged 2026-04-21T02:42:45Z_
- [#18780](https://github.com/openai/codex/pull/18780) **feat: Support more plugin MCP file shapes.** — _by @xl-openai, merged 2026-04-21T02:42:02Z_
- [#18418](https://github.com/openai/codex/pull/18418) **refactor: narrow async lock scopes** — _by @bolinfest, merged 2026-04-21T02:23:30Z_
- [#18581](https://github.com/openai/codex/pull/18581) **[1/4] Add executor HTTP request protocol** — _by @aibrahim-oai, merged 2026-04-21T02:21:09Z_
- [#18744](https://github.com/openai/codex/pull/18744) **feat: add a built-in Amazon Bedrock model provider** — _by @celia-oai, merged 2026-04-21T00:54:06Z_
- [#18435](https://github.com/openai/codex/pull/18435) **/statusline & /title - Shared preview values** — _by @canvrno-oai, merged 2026-04-21T00:46:11Z_


## Open PRs (new or updated)

- [#18907](https://github.com/openai/codex/pull/18907) **option for disabling plugins** — _by @zamoshchin-openai, updated 2026-04-21T23:52:58Z_
- [#18889](https://github.com/openai/codex/pull/18889) _(draft)_ **chore(guardian) prefill trunk before approval ** — _by @dylan-hurd-oai, updated 2026-04-21T23:19:35Z_
- [#18883](https://github.com/openai/codex/pull/18883) _(draft)_ **[codex] fix network context removal** — _by @tibo-openai, updated 2026-04-21T22:01:34Z_
- [#18880](https://github.com/openai/codex/pull/18880) **[rollout_trace] Add debug trace reduction command** — _by @cassirer-openai, updated 2026-04-21T21:47:08Z_
- [#17982](https://github.com/openai/codex/pull/17982) _(draft)_ **[rollout-trace] Add rollout trace capture and reducer** — _by @cassirer-openai, updated 2026-04-21T20:22:57Z_
- [#18779](https://github.com/openai/codex/pull/18779) _(draft)_ **Remove legacy TurnContext environment projections** — _by @starr-openai, updated 2026-04-21T20:20:30Z_
- [#18705](https://github.com/openai/codex/pull/18705) **Make hooks an experimental feature** — _by @abhinav-oai, updated 2026-04-21T18:12:12Z_
- [#18773](https://github.com/openai/codex/pull/18773) _(draft)_ **Sketching - Rich tracing based on otel** — _by @cassirer-openai, updated 2026-04-21T18:03:26Z_
- [#18438](https://github.com/openai/codex/pull/18438) _(draft)_ **app-server: add Linux device key provider** — _by @euroelessar, updated 2026-04-21T17:57:04Z_
- [#18436](https://github.com/openai/codex/pull/18436) _(draft)_ **app-server: add Windows device key provider** — _by @euroelessar, updated 2026-04-21T17:57:03Z_
- [#18808](https://github.com/openai/codex/pull/18808) _(draft)_ **Add Codex Statsig integration** — _by @dgoya-oai, updated 2026-04-21T16:52:21Z_
- [#18851](https://github.com/openai/codex/pull/18851) _(draft)_ **Add telemetry for unmatched execpolicy commands** — _by @rreichel3-oai, updated 2026-04-21T15:19:26Z_
- [#18702](https://github.com/openai/codex/pull/18702) _(draft)_ **feat: move phase 2 to a diff based system** — _by @jif-oai, updated 2026-04-21T14:16:46Z_
- [#13096](https://github.com/openai/codex/pull/13096) **Introduce rollout store and in-memory source** — _by @charley-oai, updated 2026-04-21T12:19:21Z_
- [#7887](https://github.com/openai/codex/pull/7887) **reverting model api changes using aliases** — _by @zhao-oai, updated 2026-04-21T12:14:33Z_
- [#12293](https://github.com/openai/codex/pull/12293) **request_user_input: partially submit committed answers on interrupt** — _by @charley-oai, updated 2026-04-21T12:12:35Z_
- [#10360](https://github.com/openai/codex/pull/10360) **chore(deps): bump ratatui-macros from 0.6.0 to 0.7.0 in /codex-rs** — _by @dependabot[bot], updated 2026-04-21T12:04:18Z_
- [#18424](https://github.com/openai/codex/pull/18424) **chore: enable await-holding clippy lints** — _by @bolinfest, updated 2026-04-21T05:41:57Z_
- [#18809](https://github.com/openai/codex/pull/18809) _(draft)_ **WIP Cross-compile hacks for bwrap** — _by @zbarsky-openai, updated 2026-04-21T05:02:05Z_
- [#13898](https://github.com/openai/codex/pull/13898) **stabilize guardian snapshot test lookup** — _by @charley-oai, updated 2026-04-21T04:46:22Z_
- [#13915](https://github.com/openai/codex/pull/13915) **feat(core): allow guardian prompt overrides from model metadata** — _by @charley-oai, updated 2026-04-21T04:31:06Z_
- [#17273](https://github.com/openai/codex/pull/17273) **feat: use scoped remote control server tokens** — _by @viyatb-oai, updated 2026-04-21T03:03:21Z_
- [#18001](https://github.com/openai/codex/pull/18001) _(draft)_ **[codex] tighten shell wrapper detection** — _by @viyatb-oai, updated 2026-04-21T02:50:04Z_
- [#18787](https://github.com/openai/codex/pull/18787) **refactor: move realtime out of codex-core** — _by @aibrahim-oai, updated 2026-04-21T02:34:13Z_
- [#18736](https://github.com/openai/codex/pull/18736) _(draft)_ **[codex] Add context length regression review** — _by @jgershen-oai, updated 2026-04-21T01:17:10Z_
- [#15936](https://github.com/openai/codex/pull/15936) **fix: enforce trusted-before-project ordering for hooks** — _by @viyatb-oai, updated 2026-04-21T01:07:04Z_
- [#18777](https://github.com/openai/codex/pull/18777) _(draft)_ **Deflake timing-dependent tests in core/rmcp/app-server** — _by @starr-openai, updated 2026-04-21T00:34:54Z_
- [#15977](https://github.com/openai/codex/pull/15977) **fix(permissions): preserve deny-read during escalation** — _by @viyatb-oai, updated 2026-04-21T00:32:54Z_
- [#18776](https://github.com/openai/codex/pull/18776) _(draft)_ **Stabilize TUI model catalog migration tests** — _by @starr-openai, updated 2026-04-21T00:31:34Z_


## Closed PRs (not merged)

- [#18824](https://github.com/openai/codex/pull/18824) **Fix interrupt transcript ordering** — _by @jgershen-oai, closed 2026-04-21T22:17:04Z_
- [#18767](https://github.com/openai/codex/pull/18767) **[bazel] Upgrade to 9.1.0** — _by @zbarsky-openai, closed 2026-04-21T20:38:24Z_
- [#18765](https://github.com/openai/codex/pull/18765) **Codex/loadable tool spec shared** — _by @sayan-oai, closed 2026-04-21T20:05:15Z_
- [#17968](https://github.com/openai/codex/pull/17968) **Add a ConfigStore interface** — _by @rasmusrygaard, closed 2026-04-21T19:58:04Z_
- [#18479](https://github.com/openai/codex/pull/18479) **test(tui): align memory settings test sqlite home** — _by @caseychow-oai, closed 2026-04-21T17:49:52Z_
- [#18411](https://github.com/openai/codex/pull/18411) **Code review skills** — _by @pakrym-oai, closed 2026-04-21T17:37:10Z_
- [#17998](https://github.com/openai/codex/pull/17998) **bazel: add explicit rust test shard labels** — _by @bolinfest, closed 2026-04-21T16:35:34Z_
- [#8554](https://github.com/openai/codex/pull/8554) **Cleanup cloud-tasks Cargo.toml** — _by @dzbarsky, closed 2026-04-21T15:00:03Z_
- [#18834](https://github.com/openai/codex/pull/18834) **feat[part 1]: profile v2** — _by @jif-oai, closed 2026-04-21T13:24:34Z_
- [#16934](https://github.com/openai/codex/pull/16934) **[codex] Update Codex app promo date** — _by @vb-openai, closed 2026-04-21T12:46:40Z_
- [#4329](https://github.com/openai/codex/pull/4329) **feat(cli): optional notification sounds (opt-in, system sounds)** — _by @samlouiscohen, closed 2025-10-31T01:16:53Z_
- [#18579](https://github.com/openai/codex/pull/18579) **[codex] Update rate limit nudge model** — _by @vb-openai, closed 2026-04-21T09:14:43Z_
- [#18817](https://github.com/openai/codex/pull/18817) **[codex] Fix interrupt prompt history race** — _by @jgershen-oai, closed 2026-04-21T08:31:46Z_
- [#16986](https://github.com/openai/codex/pull/16986) **[mcp] Support MCP Apps part 3 - Fix tools list.** — _by @mzeng-openai, closed 2026-04-21T06:39:31Z_
- [#16950](https://github.com/openai/codex/pull/16950) **[codex] Preserve accidental /clear recovery via /resume** — _by @ychhabria, closed 2026-04-21T06:39:30Z_
- [#16181](https://github.com/openai/codex/pull/16181) **Add deferred watchdog namespace tools** — _by @friel-openai, closed 2026-04-21T06:39:28Z_
- [#16942](https://github.com/openai/codex/pull/16942) **Forward MCP tool call progress to app-server clients** — _by @jn-openai, closed 2026-04-21T06:39:26Z_
- [#18758](https://github.com/openai/codex/pull/18758) **refactor: simplify agent identity auth** — _by @efrazer-oai, closed 2026-04-21T03:29:48Z_
- [#18781](https://github.com/openai/codex/pull/18781) **tui: colocate app module tests** — _by @etraut-openai, closed 2026-04-21T01:19:30Z_
- [#18173](https://github.com/openai/codex/pull/18173) **Add explicit thread environment selection** — _by @starr-openai, closed 2026-04-21T01:01:25Z_
- [#17828](https://github.com/openai/codex/pull/17828) **Add app-server environment registry for exec-server routing** — _by @starr-openai, closed 2026-04-21T01:01:25Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`6bbd710`](https://github.com/openai/codex/commit/6bbd710496e2465f9004c8f2c1aa3c9f50ea1ff1) [codex] Tighten external migration prompt tests (#18768) — _@alexsong-oai_
- [`2202675`](https://github.com/openai/codex/commit/2202675632c365b5a110bcef3bced72362b8fde2) Normalize /statusline & /title items (#18886) — _@canvrno-oai_
- [`ef00014`](https://github.com/openai/codex/commit/ef00014a46f4311a073252c5c516ab0d35753575) Allow guardian bare allow output (#18797) — _@maja-openai_
- [`ddbe253`](https://github.com/openai/codex/commit/ddbe2536be03af5e9b84f2890efba14543d6e7b5) Support multiple managed environments (#18401) — _@starr-openai_
- [`27d9673`](https://github.com/openai/codex/commit/27d96732736677bfb48493b18847db3aa627caa6) [rollout_trace] Add rollout trace crate (#18876) — _@cassirer-openai_
- [`c5e9c6f`](https://github.com/openai/codex/commit/c5e9c6f71f68a4843494bd8dad5222d6b51b84dd) Preserve Cloudfare HTTP cookies in codex (#17783) — _@shijie-oai_
- [`be75785`](https://github.com/openai/codex/commit/be75785504ff152fa6333e380a2d50642f42fba0) fix: fully revert agent identity runtime wiring (#18757) — _@efrazer-oai_
- [`69c3d12`](https://github.com/openai/codex/commit/69c3d122747c66200bb10314c6067844e2349136) app-server: implement device key v2 methods (#18430) — _@euroelessar_
- [`e502f0b`](https://github.com/openai/codex/commit/e502f0b52d490a0953579b269b1c080d62b8fb0e) feat(tui): shortcuts to change reasoning level temporarily (#18866) — _@fcoury-oai_
- [`ffa6944`](https://github.com/openai/codex/commit/ffa6944587d0f1dedf07b1829e18b68ad792aef3) Load app-server config through ConfigManager (#18870) — _@pakrym-oai_
- [`15b8cde`](https://github.com/openai/codex/commit/15b8cde2a4f63bb510d46c88d3ddd7e286bee203) chore: default multi-agent v2 fork to all (#18873) — _@jif-oai_
- [`6f69977`](https://github.com/openai/codex/commit/6f6997758a6936b522c046191ae3cae4293e23e9) skip busted tests while I fix them (#18885) — _@iceweasel-oai_
- [`5637571`](https://github.com/openai/codex/commit/56375712e3bb482f0d4bf70814f94da197780b0b) app-server: fix Bazel clippy in tracing tests (#18872) — _@euroelessar_
- [`5bab04d`](https://github.com/openai/codex/commit/5bab04dcd7be4820eec4c2ea102646c718fc31e7) app-server: add codex-device-key crate (#18429) — _@euroelessar_
- [`8612714`](https://github.com/openai/codex/commit/8612714aa65c60755dec1983ca9836bf39ef7208) Add Windows sandbox unified exec runtime support (#15578) — _@iceweasel-oai_
- [`38ba876`](https://github.com/openai/codex/commit/38ba876ea973415620e3a1b132f3ad7f78772233) Refresh generated Python app-server SDK types (#18862) — _@sdcoffey_
- [`f8562bd`](https://github.com/openai/codex/commit/f8562bd47bcc6f2327590506890c0c9f1227e646) sandboxing: intersect permission profiles semantically (#18275) — _@bolinfest_
- [`2a22609`](https://github.com/openai/codex/commit/2a226096f60450bb9978d02e030ce29283f00c55) Split DeveloperInstructions into individual fragments. (#18813) — _@pakrym-oai_
- [`5fe767e`](https://github.com/openai/codex/commit/5fe767e8e1398213f77e45e7507be244c5035e6d) Refactor app-server config loading into ConfigManager (#18442) — _@pakrym-oai_
- [`4ed722a`](https://github.com/openai/codex/commit/4ed722ab8d2fd195c652a7cbfcc31844318cd4ea) Move TUI app tests to modules they cover (#18799) — _@etraut-openai_
- [`10e1659`](https://github.com/openai/codex/commit/10e1659d4fcd8960315ceab9da138f94320b4986) Stabilize debug clear memories integration test (#18858) — _@jif-oai_
- [`b7fec54`](https://github.com/openai/codex/commit/b7fec54354096e3c1884de67b8f2ffbdf836f63e) Queue follow-up input during user shell commands (#18820) — _@etraut-openai_
- [`4165266`](https://github.com/openai/codex/commit/41652665f52674e3ad4eeb9570b49b073256a14b) [codex] Add tmux-aware OSC 9 notifications (#17836) — _@caseychow-oai_
- [`3a9df58`](https://github.com/openai/codex/commit/3a9df58d0611e51dc059d2e9175f4b338d8b99a1) Propagate thread id in MCP tool metadata (#18093) — _@rennie-openai_
- [`48f82ca`](https://github.com/openai/codex/commit/48f82ca7c5f9a039b44ccf71765e1b2d4fb190f5) app-server: define device key v2 protocol (#18428) — _@euroelessar_
- [`b06fc8b`](https://github.com/openai/codex/commit/b06fc8bd0d2cf3c090aaaf90420a41d7f2943954) core: make test-log a dev dependency (#18846) — _@bolinfest_
- [`bf2a34b`](https://github.com/openai/codex/commit/bf2a34b4b2bf42fc9bef32f7d56243ba69f47300) feat: baseline lib (#18848) — _@jif-oai_
- [`53cf12c`](https://github.com/openai/codex/commit/53cf12cd529c0dd289731dce3bf1635cb5e48799) build: reduce Rust dev debuginfo (#18844) — _@bolinfest_
- [`8332121`](https://github.com/openai/codex/commit/833212115e18e9eb75b0a75dcecf4034b8bab6ac) Move external agent config out of core (#18850) — _@pakrym-oai_
- [`1101dec`](https://github.com/openai/codex/commit/1101dec9ae6c54e0403ac109f5a0f92108a8d0f8) fix(tui): disable enhanced keys for VS Code WSL (#18741) — _@fcoury-oai_
- [`ef071cf`](https://github.com/openai/codex/commit/ef071cf816950dc416b2a975e7ed023eea639026) show bash mode in the TUI (#18271) — _@abhinav-oai_
- [`a3ed506`](https://github.com/openai/codex/commit/a3ed5068c194d4ce2761c966016272c75f111150) [codex] Tighten code review skill wording (#18818) — _@pakrym-oai_
- [`dc1a8f2`](https://github.com/openai/codex/commit/dc1a8f219075d8c4be28b2a95f335d4b16fb9387) [tool search] support namespaced deferred dynamic tools (#18413) — _@pash-openai_
- [`1dcea72`](https://github.com/openai/codex/commit/1dcea729d33ac936b8207ffccae7a0c4cb6b4ff4) chore: enable await-holding clippy lints (#18698) — _@bolinfest_
- [`d62421d`](https://github.com/openai/codex/commit/d62421d32299aa5fdc30b131471eb06f03f1c91a) chore: document intentional await-holding cases (#18423) — _@bolinfest_
- [`4c2e730`](https://github.com/openai/codex/commit/4c2e730488997145ad9bfa07f193293aeb30c083) Organize context fragments  (#18794) — _@pakrym-oai_
- [`ab26554`](https://github.com/openai/codex/commit/ab26554a3ab944b8a1e06706bc454519006fb25a) Add remote_sandbox_config to our config requirements (#18763) — _@abhinav-oai_
- [`86535c9`](https://github.com/openai/codex/commit/86535c9901f73ed2df9ae38b2a3a245123f9c4a3) feat(auto-review) Handle request_permissions calls (#18393) — _@dylan-hurd-oai_
- [`543a08d`](https://github.com/openai/codex/commit/543a08dac9bea84b820c9c66f3fc7309003d473b) chore(app-server) linguist-generated (#18807) — _@dylan-hurd-oai_
- [`2cc146f`](https://github.com/openai/codex/commit/2cc146f5ea50ab7a39811f38986f2907b97be39f) Fallback display names for TUI skill mentions (#18786) — _@canvrno-oai_
- [`1132ef8`](https://github.com/openai/codex/commit/1132ef887c37a5780d6d541e2913c6c126eeb026) Make MCP resource read threadless (#18292) — _@mzeng-openai_
- [`58e7605`](https://github.com/openai/codex/commit/58e7605efcbbb7b44b392d6fa893d360e208fb3b) fix(guardian) Dont hard error on feature disable (#18795) — _@dylan-hurd-oai_
- [`3d2f123`](https://github.com/openai/codex/commit/3d2f12389511529e6fa3422ba965cdd42131f12a) protocol: preserve glob scan depth in permission profiles (#18713) — _@bolinfest_
- [`6e9e2c2`](https://github.com/openai/codex/commit/6e9e2c2eef2f4a1d282bb024323633a138a17aa8) feat: Support more plugin MCP file shapes. (#18780) — _@xl-openai_
- [`ff05532`](https://github.com/openai/codex/commit/ff05532723004e1e8e3c9f44314a3d7a90ac050c) refactor: narrow async lock scopes (#18418) — _@bolinfest_
- [`d6af7a6`](https://github.com/openai/codex/commit/d6af7a6c038d8fc88e8293ec64071d3ee744f059) [1/4] Add executor HTTP request protocol (#18581) — _@aibrahim-oai_
- [`cefcfe4`](https://github.com/openai/codex/commit/cefcfe43b93719f97cde6901881896ba45b637d0) feat: add a built-in Amazon Bedrock model provider (#18744) — _@celia-oai_
- [`9a2b342`](https://github.com/openai/codex/commit/9a2b34213b5530ab3c616400c1e4d355aa78156d) /statusline & /title - Shared preview values (#18435) — _@canvrno-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
