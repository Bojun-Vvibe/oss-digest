# openai/codex — 2026-04-22

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-21T23:59:59.000Z → 2026-04-22T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The dominant theme today is the **`PermissionProfile` migration stack** from @bolinfest landing end-to-end: core now derives the active profile from constrained runtime settings (#18277), exec-server carries filesystem sandbox profiles (#18276) and requires an explicit sandbox cwd (#19046), app-server exposes thread permission profiles (#18278) and accepts profile overrides (#18279), and first-party clients now send profiles instead of legacy `sandbox`/`sandboxPolicy` shorthands (#18280). A related cleanup materializes cwd-relative permission globs at intersection time so persisted profiles don't drift across turns (#18867). Three alpha releases shipped (`0.123.0-alpha.8/9/10`).

Auto-Review (formerly "approvals reviewer"/Guardian) got a noticeable push: the config value was rebranded to `auto_review` with back-compat (#18504), users can customize the policy (#18959), conversations short-circuit after too many denials (#18890), and there's new app-server plumbing to approve previously-denied Guardian actions (#18955). Guardian network-approval reviews now include the triggering command context (#18197), and analytics gained Guardian review terminal events, TTFT, and truncation flags (#17693, #17696, #17695).

Notable fixes worth a look: MCP permission policy was syncing from a stale config after mid-session permission changes, causing spurious denials (#19033); `wait_agent` could hang to timeout when mailbox mail was already queued (#18968); a remote app-server shutdown race in tests (#18936); `apply_patch` finally emits `PreToolUse`/`PostToolUse` hooks (#18391, fixes #16732); and TUI status surfaces are kept in sync with terminal-title refreshes (#18935). On Windows, `codex sandbox windows` switched to long-lived `unified_exec` sessions (#18953).

Infra/CI: Bazel now actually runs wrapped Rust unit-test shards, which had been hiding TUI snapshot drift vs. Cargo (#18913, with snapshot fixups in #18909/#18915); process-heavy Windows CI suites are serialized to stop cross-suite timeouts (#18943). Python SDK publishing advances with `openai-codex-cli-bin` runtime wheels (#18865).

Open PRs to watch: an explicit unsandboxed `command/exec` v2 API (#19040), remote thread-config loader protos (#18892), and remote thread store gRPC implementation (#19008).

## Releases

- **[rust-v0.123.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.9)** _(prerelease)_ — 0.123.0-alpha.9 _by @github-actions[bot] at 2026-04-22T21:55:37Z_
  > Release 0.123.0-alpha.9
- **[rust-v0.123.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.8)** _(prerelease)_ — 0.123.0-alpha.8 _by @github-actions[bot] at 2026-04-22T12:01:22Z_
  > Release 0.123.0-alpha.8
- **[rust-v0.123.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.10)** _(prerelease)_ — 0.123.0-alpha.10 _by @github-actions[bot] at 2026-04-22T23:08:07Z_
  > Release 0.123.0-alpha.10


## Merged PRs

- [#18280](https://github.com/openai/codex/pull/18280) **clients: send permission profiles to app-server** — _by @bolinfest, merged 2026-04-22T23:34:14Z_
- [#19046](https://github.com/openai/codex/pull/19046) **exec-server: require explicit filesystem sandbox cwd** — _by @bolinfest, merged 2026-04-22T23:05:13Z_
- [#18504](https://github.com/openai/codex/pull/18504) **Rebrand approvals reviewer config to auto-review** — _by @won-openai, merged 2026-04-22T22:45:35Z_
- [#19043](https://github.com/openai/codex/pull/19043) **Update bundled OpenAI Docs skill freshness check** — _by @kkahadze-oai, merged 2026-04-22T22:31:04Z_
- [#18956](https://github.com/openai/codex/pull/18956) **[Codex] Register browser requirements feature keys** — _by @khoi-oai, merged 2026-04-22T22:27:16Z_
- [#19036](https://github.com/openai/codex/pull/19036) **Overlay state DB git metadata for filtered thread lists** — _by @joeytrasatti-openai, merged 2026-04-22T21:59:21Z_
- [#19016](https://github.com/openai/codex/pull/19016) **exec-server: expose arg0 alias root to fs sandbox** — _by @bolinfest, merged 2026-04-22T21:34:23Z_
- [#19033](https://github.com/openai/codex/pull/19033) **Fix MCP permission policy sync** — _by @leoshimo-oai, merged 2026-04-22T21:30:30Z_
- [#18197](https://github.com/openai/codex/pull/18197) **feat: add guardian network approval trigger context** — _by @viyatb-oai, merged 2026-04-22T21:00:54Z_
- [#18582](https://github.com/openai/codex/pull/18582) **[2/4] Implement executor HTTP request runner** — _by @aibrahim-oai, merged 2026-04-22T20:36:34Z_
- [#18279](https://github.com/openai/codex/pull/18279) **app-server: accept permission profile overrides** — _by @bolinfest, merged 2026-04-22T20:34:34Z_
- [#18890](https://github.com/openai/codex/pull/18890) **feat(auto-review) short-circuit** — _by @dylan-hurd-oai, merged 2026-04-22T20:34:16Z_
- [#18925](https://github.com/openai/codex/pull/18925) **feat: Fairly trim skill descriptions within context budget** — _by @xl-openai, merged 2026-04-22T19:33:29Z_
- [#18999](https://github.com/openai/codex/pull/18999) **arg0: keep dispatch aliases alive during async main** — _by @bolinfest, merged 2026-04-22T18:06:35Z_
- [#18955](https://github.com/openai/codex/pull/18955) **Add plumbing to approve stored Auto-Review denials** — _by @won-openai, merged 2026-04-22T17:38:19Z_
- [#18959](https://github.com/openai/codex/pull/18959) **feat(auto-review) policy config** — _by @dylan-hurd-oai, merged 2026-04-22T17:33:02Z_
- [#16009](https://github.com/openai/codex/pull/16009) **Forward app-server turn responsesapiClientMetadata to Responses** — _by @neil-oai, merged 2026-04-09T18:52:37Z_
- [#18877](https://github.com/openai/codex/pull/18877) **[rollout_trace] Record core session rollout traces** — _by @cassirer-openai, merged 2026-04-22T17:00:48Z_
- [#18932](https://github.com/openai/codex/pull/18932) **TUI: Keep remote app-server events draining** — _by @etraut-openai, merged 2026-04-22T16:29:34Z_
- [#18865](https://github.com/openai/codex/pull/18865) **Stage publishable Python runtime wheels** — _by @sdcoffey, merged 2026-04-22T15:14:48Z_
- [#18852](https://github.com/openai/codex/pull/18852) **[codex] Update imagegen system skill** — _by @vb-openai, merged 2026-04-22T15:08:10Z_
- [#18973](https://github.com/openai/codex/pull/18973) **chore: prep memories for AB** — _by @jif-oai, merged 2026-04-22T10:46:16Z_
- [#18971](https://github.com/openai/codex/pull/18971) **fix: cargo deny** — _by @jif-oai, merged 2026-04-22T10:46:12Z_
- [#18968](https://github.com/openai/codex/pull/18968) **fix: wait_agent timeout for queued mailbox mail** — _by @jif-oai, merged 2026-04-22T10:16:18Z_
- [#18502](https://github.com/openai/codex/pull/18502) **Support multiple cwd filters for thread list** — _by @acrognale-oai, merged 2026-04-22T10:10:09Z_
- [#18962](https://github.com/openai/codex/pull/18962) **nit: expose lib** — _by @jif-oai, merged 2026-04-22T09:06:53Z_
- [#17695](https://github.com/openai/codex/pull/17695) **[codex-analytics] guardian review truncation** — _by @rhan-oai, merged 2026-04-22T08:35:30Z_
- [#17696](https://github.com/openai/codex/pull/17696) **[codex-analytics] guardian review TTFT plumbing and emission** — _by @rhan-oai, merged 2026-04-22T08:52:48Z_
- [#17693](https://github.com/openai/codex/pull/17693) **[codex-analytics] guardian review analytics events emission** — _by @rhan-oai, merged 2026-04-22T08:02:47Z_
- [#18278](https://github.com/openai/codex/pull/18278) **app-server: expose thread permission profiles** — _by @bolinfest, merged 2026-04-22T06:52:56Z_
- [#18953](https://github.com/openai/codex/pull/18953) **use long-lived sessions for codex sandbox windows** — _by @iceweasel-oai, merged 2026-04-22T06:39:29Z_
- [#18785](https://github.com/openai/codex/pull/18785) **feat: add explicit AgentIdentity auth mode** — _by @efrazer-oai, merged 2026-04-22T05:33:24Z_
- [#18277](https://github.com/openai/codex/pull/18277) **core: derive active permission profiles** — _by @bolinfest, merged 2026-04-22T05:11:40Z_
- [#18948](https://github.com/openai/codex/pull/18948) **chore: remove unused Bedrock auth lazy loading** — _by @celia-oai, merged 2026-04-22T05:01:23Z_
- [#18934](https://github.com/openai/codex/pull/18934) **[codex] Clean guardian instructions** — _by @dylan-hurd-oai, merged 2026-04-22T04:47:58Z_
- [#18943](https://github.com/openai/codex/pull/18943) **tests: serialize process-heavy Windows CI suites** — _by @bolinfest, merged 2026-04-22T04:14:45Z_
- [#18923](https://github.com/openai/codex/pull/18923) **chore(tui) debug-config guardian_policy_config** — _by @dylan-hurd-oai, merged 2026-04-22T04:00:23Z_
- [#18935](https://github.com/openai/codex/pull/18935) **Keep TUI status surfaces in sync** — _by @etraut-openai, merged 2026-04-22T03:39:23Z_
- [#18926](https://github.com/openai/codex/pull/18926) **ci: keep argument comment lint checks materialized** — _by @bolinfest, merged 2026-04-22T03:36:46Z_
- [#18276](https://github.com/openai/codex/pull/18276) **exec-server: carry filesystem sandbox profiles** — _by @bolinfest, merged 2026-04-22T03:22:28Z_
- [#18871](https://github.com/openai/codex/pull/18871) **refactor: add agent identity crate** — _by @efrazer-oai, merged 2026-04-22T02:57:49Z_
- [#18936](https://github.com/openai/codex/pull/18936) **Fix remote app-server shutdown race** — _by @bolinfest, merged 2026-04-22T02:41:20Z_
- [#18452](https://github.com/openai/codex/pull/18452) **feat: Support remote plugin list/read.** — _by @xl-openai, merged 2026-04-22T01:39:08Z_
- [#18913](https://github.com/openai/codex/pull/18913) **bazel: run wrapped Rust unit test shards** — _by @bolinfest, merged 2026-04-22T01:35:47Z_
- [#17820](https://github.com/openai/codex/pull/17820) **feat: add AWS SigV4 auth for OpenAI-compatible model providers** — _by @celia-oai, merged 2026-04-22T01:11:18Z_
- [#18916](https://github.com/openai/codex/pull/18916) **test(core): move prompt debug coverage to integration suite** — _by @bolinfest, merged 2026-04-22T01:08:26Z_
- [#18391](https://github.com/openai/codex/pull/18391) **fix(core): emit hooks for apply_patch edits** — _by @fcoury-oai, merged 2026-04-22T01:00:40Z_
- [#18416](https://github.com/openai/codex/pull/18416) **Add turn-scoped environment selections** — _by @starr-openai, merged 2026-04-22T00:48:34Z_
- [#18915](https://github.com/openai/codex/pull/18915) **fix: windows snapshot for external_agent_config_migration::tests::prompt_snapshot did not match windows output** — _by @bolinfest, merged 2026-04-22T00:32:46Z_
- [#18867](https://github.com/openai/codex/pull/18867) **sandboxing: materialize cwd-relative permission globs** — _by @bolinfest, merged 2026-04-22T00:28:59Z_
- [#18909](https://github.com/openai/codex/pull/18909) **Update /statusline and /title snapshots** — _by @canvrno-oai, merged 2026-04-22T00:16:50Z_


## Open PRs (new or updated)

- [#18892](https://github.com/openai/codex/pull/18892) **Add remote thread config loader protos** — _by @rasmusrygaard, updated 2026-04-22T23:13:36Z_
- [#18569](https://github.com/openai/codex/pull/18569) **feat(guardian): add review observability and trace propagation** — _by @kevinlin-openai, updated 2026-04-22T22:56:52Z_
- [#19040](https://github.com/openai/codex/pull/19040) **[codex] Add unsandboxed command exec API** — _by @euroelessar, updated 2026-04-22T22:22:50Z_
- [#19008](https://github.com/openai/codex/pull/19008) **[codex] Implement remote thread store methods** — _by @wiltzius-openai, updated 2026-04-22T22:11:36Z_
- [#19044](https://github.com/openai/codex/pull/19044) **guide Windows to use -WindowStyle Hidden for Start-Process calls** — _by @iceweasel-oai, updated 2026-04-22T22:10:07Z_
- [#17897](https://github.com/openai/codex/pull/17897) **Add metadata to turn analytics** — _by @ningyi-oai, updated 2026-04-22T22:00:54Z_
- [#19030](https://github.com/openai/codex/pull/19030) **Support to add prefetched tool result to a user turn** — _by @vasili-openai, updated 2026-04-22T21:51:03Z_
- [#17931](https://github.com/openai/codex/pull/17931) _(draft)_ **[codex] Store keyring auth in encrypted local secrets** — _by @mikhail-oai, updated 2026-04-22T21:45:56Z_
- [#17570](https://github.com/openai/codex/pull/17570) **fix: protect active arg0 helper dirs** — _by @viyatb-oai, updated 2026-04-22T21:36:44Z_
- [#17088](https://github.com/openai/codex/pull/17088) **[codex-analytics] ingest server requests and responses** — _by @rhan-oai, updated 2026-04-22T21:35:37Z_
- [#18982](https://github.com/openai/codex/pull/18982) **feat: use git-backed workspace diffs for memory consolidation** — _by @jif-oai, updated 2026-04-22T21:31:36Z_
- [#19032](https://github.com/openai/codex/pull/19032) _(draft)_ **Remove sandbox policy from command exec RPC** — _by @willwang-openai, updated 2026-04-22T20:45:15Z_
- [#18704](https://github.com/openai/codex/pull/18704) **/plugins: add marketplace install flow** — _by @canvrno-oai, updated 2026-04-22T20:38:13Z_
- [#18390](https://github.com/openai/codex/pull/18390) _(draft)_ **let codex force ChatGPT login by org too** — _by @rreichel3-oai, updated 2026-04-22T19:50:11Z_
- [#18161](https://github.com/openai/codex/pull/18161) _(draft)_ **[codex] Support multiple forced ChatGPT workspaces** — _by @rreichel3-oai, updated 2026-04-22T19:50:11Z_
- [#18446](https://github.com/openai/codex/pull/18446) **Reserve missing preserved paths in Linux sandbox policy** — _by @evawong-oai, updated 2026-04-22T19:47:08Z_
- [#16632](https://github.com/openai/codex/pull/16632) **fix(core): skip default approval for custom MCP tools without usable annotations** — _by @fcoury-oai, updated 2026-04-22T19:32:30Z_
- [#19019](https://github.com/openai/codex/pull/19019) _(draft)_ **feat(core) OverrideActiveTurnContext** — _by @dylan-hurd-oai, updated 2026-04-22T18:53:00Z_
- [#19013](https://github.com/openai/codex/pull/19013) **Allow plugin-declared first-party connectors** — _by @tinocaer, updated 2026-04-22T18:52:25Z_
- [#18910](https://github.com/openai/codex/pull/18910) **Publish standalone installer release archives** — _by @efrazer-oai, updated 2026-04-22T18:43:51Z_
- [#18879](https://github.com/openai/codex/pull/18879) **[rollout_trace] Trace sessions and multi-agent edges** — _by @cassirer-openai, updated 2026-04-22T18:27:48Z_
- [#18946](https://github.com/openai/codex/pull/18946) **fix(exec-server): retain output until streams close** — _by @bolinfest, updated 2026-04-22T18:13:13Z_
- [#18073](https://github.com/openai/codex/pull/18073) **Add goal persistence foundation (1 / 5)** — _by @etraut-openai, updated 2026-04-22T18:04:58Z_
- [#18265](https://github.com/openai/codex/pull/18265) **Avoid instant remote disconnects under websocket queue pressure** — _by @etraut-openai, updated 2026-04-22T17:58:01Z_
- [#17245](https://github.com/openai/codex/pull/17245) **feat(tui): configurable keymaps and Vim mode** — _by @fcoury-oai, updated 2026-04-22T17:00:55Z_
- [#18996](https://github.com/openai/codex/pull/18996) **Publish Python SDK with Codex-pinned versioning** — _by @sdcoffey, updated 2026-04-22T16:35:55Z_
- [#17036](https://github.com/openai/codex/pull/17036) _(draft)_ **feat: allow limited git writes in workspace sandbox** — _by @viyatb-oai, updated 2026-04-22T15:27:51Z_
- [#17282](https://github.com/openai/codex/pull/17282) **Fix agent-job fanout fill and post-completion hangs** — _by @daveaitel-openai, updated 2026-04-22T14:50:14Z_
- [#17141](https://github.com/openai/codex/pull/17141) **feat: add layered profile-v2 config files** — _by @jif-oai, updated 2026-04-22T12:15:51Z_
- [#18976](https://github.com/openai/codex/pull/18976) _(draft)_ **test: loosen seatbelt arg assertions on macOS** — _by @dylan-hurd-oai, updated 2026-04-22T10:47:32Z_
- [#18153](https://github.com/openai/codex/pull/18153) _(draft)_ **[codex] Add OpenAI file support for builtin codex_apps tools** — _by @lt-oai, updated 2026-04-22T10:40:46Z_
- [#18747](https://github.com/openai/codex/pull/18747) _(draft)_ **[codex-analytics] add tool review event schema** — _by @rhan-oai, updated 2026-04-22T07:02:58Z_
- [#17089](https://github.com/openai/codex/pull/17089) _(draft)_ **[codex-analytics] add tool item event schemas** — _by @rhan-oai, updated 2026-04-22T07:02:58Z_
- [#18748](https://github.com/openai/codex/pull/18748) _(draft)_ **[codex-analytics] emit terminal tool review events** — _by @rhan-oai, updated 2026-04-22T07:02:54Z_
- [#17090](https://github.com/openai/codex/pull/17090) _(draft)_ **[codex-analytics] emit tool item events from item lifecycle** — _by @rhan-oai, updated 2026-04-22T07:02:54Z_
- [#18240](https://github.com/openai/codex/pull/18240) **Introduce domain specific clamping in MITM hook config** — _by @evawong-oai, updated 2026-04-22T06:43:21Z_
- [#18868](https://github.com/openai/codex/pull/18868) **Add MITM hooks for host specific HTTPS request clamping** — _by @evawong-oai, updated 2026-04-22T06:41:59Z_
- [#9584](https://github.com/openai/codex/pull/9584) **fix(tui): handle SIGINT in main event loop for graceful shutdown** — _by @zerone0x, updated 2026-04-22T06:26:05Z_
- [#9517](https://github.com/openai/codex/pull/9517) **fix(tui): strip CRLF artifacts in diff view** — _by @conqueror, updated 2026-04-22T06:23:25Z_
- [#8787](https://github.com/openai/codex/pull/8787) **Respect gitignore for @ file completion** — _by @prateek, updated 2026-04-22T06:00:54Z_
- [#18902](https://github.com/openai/codex/pull/18902) **[hooks] clean up SessionStart and queued UserPromptSubmit handling** — _by @eternal-openai, updated 2026-04-22T05:58:35Z_
- [#12780](https://github.com/openai/codex/pull/12780) **feat(tui): quick model toggle with Ctrl+O** — _by @fcoury, updated 2026-04-22T05:49:55Z_
- [#13177](https://github.com/openai/codex/pull/13177) **Allow turn context refreshes between sampling requests** — _by @charley-oai, updated 2026-04-22T05:47:01Z_
- [#16222](https://github.com/openai/codex/pull/16222) **build(deps): bump sha2 from 0.10.9 to 0.11.0 in /codex-rs** — _by @dependabot[bot], updated 2026-04-22T05:36:46Z_
- [#18921](https://github.com/openai/codex/pull/18921) **Fix /review interrupt and TUI exit wedges** — _by @etraut-openai, updated 2026-04-22T05:24:40Z_
- [#18626](https://github.com/openai/codex/pull/18626) **Respect explicit untrusted project config** — _by @etraut-openai, updated 2026-04-22T04:46:11Z_
- [#18917](https://github.com/openai/codex/pull/18917) _(draft)_ **[codex] Support remote plugin install writes** — _by @xli-oai, updated 2026-04-22T04:30:45Z_
- [#18945](https://github.com/openai/codex/pull/18945) **app-server: flush stdio responses** — _by @bolinfest, updated 2026-04-22T03:35:27Z_
- [#18941](https://github.com/openai/codex/pull/18941) _(draft)_ **[codex] Document Bazel local build workflow** — _by @richardopenai, updated 2026-04-22T03:07:27Z_
- [#18030](https://github.com/openai/codex/pull/18030) **core: emit responses api call analytics** — _by @rhan-oai, updated 2026-04-22T01:51:46Z_
- [#18029](https://github.com/openai/codex/pull/18029) **analytics: ingest responses api call events** — _by @rhan-oai, updated 2026-04-22T01:51:46Z_
- [#18028](https://github.com/openai/codex/pull/18028) **analytics: add responses api call schema** — _by @rhan-oai, updated 2026-04-22T01:51:46Z_
- [#16221](https://github.com/openai/codex/pull/16221) **build(deps): bump zip from 2.4.2 to 8.4.0 in /codex-rs** — _by @dependabot[bot], updated 2026-04-22T01:18:10Z_
- [#18901](https://github.com/openai/codex/pull/18901) _(draft)_ **Install standalone archives with checksum verification** — _by @efrazer-oai, updated 2026-04-22T01:08:10Z_
- [#18745](https://github.com/openai/codex/pull/18745) _(draft)_ **Add sticky thread environment selections** — _by @starr-openai, updated 2026-04-22T00:48:35Z_
- [#18431](https://github.com/openai/codex/pull/18431) **app-server: add macOS device key provider** — _by @euroelessar, updated 2026-04-22T00:45:49Z_
- [#18710](https://github.com/openai/codex/pull/18710) **[codex] Fix plugin marketplace help usage** — _by @xli-oai, updated 2026-04-22T00:38:31Z_
- [#18914](https://github.com/openai/codex/pull/18914) **fix(tui): use shared paste burst interval on Windows** — _by @fcoury-oai, updated 2026-04-22T00:22:59Z_


## Closed PRs (not merged)

- [#19035](https://github.com/openai/codex/pull/19035) **type client responses** — _by @rhan-oai, closed 2026-04-22T21:10:08Z_
- [#16927](https://github.com/openai/codex/pull/16927) **[codex] Handle missing ChatGPT id token** — _by @nicholasclark-openai, closed 2026-04-20T23:07:09Z_
- [#19029](https://github.com/openai/codex/pull/19029) **exec-server: expose fs helper alias roots** — _by @starr-openai, closed 2026-04-22T20:24:58Z_
- [#19000](https://github.com/openai/codex/pull/19000) **fix: document cargo deny advisory exceptions** — _by @bolinfest, closed 2026-04-22T16:59:37Z_
- [#19003](https://github.com/openai/codex/pull/19003) **chore: update rand lockfile entries** — _by @bolinfest, closed 2026-04-22T16:59:14Z_
- [#14891](https://github.com/openai/codex/pull/14891) **fix(linux-sandbox): preserve detached children** — _by @viyatb-oai, closed 2026-04-22T06:39:25Z_
- [#16659](https://github.com/openai/codex/pull/16659) **[codex-analytics] add queued submission metadata** — _by @rhan-oai, closed 2026-04-22T06:39:32Z_
- [#17025](https://github.com/openai/codex/pull/17025) **Add role-level fork_context defaults** — _by @friel-openai, closed 2026-04-22T06:39:31Z_
- [#16990](https://github.com/openai/codex/pull/16990) **Improve Bazel failed test output in CI** — _by @aibrahim-oai, closed 2026-04-22T06:39:29Z_
- [#17029](https://github.com/openai/codex/pull/17029) **Preview Bazel failed test log output** — _by @aibrahim-oai, closed 2026-04-22T06:39:28Z_
- [#16750](https://github.com/openai/codex/pull/16750) **ci: restore Linux remote-env PR tests** — _by @starr-openai, closed 2026-04-22T06:39:26Z_
- [#16705](https://github.com/openai/codex/pull/16705) **fix(tui): forward cwd changes through app-server** — _by @fcoury-oai, closed 2026-04-22T06:39:23Z_
- [#17023](https://github.com/openai/codex/pull/17023) **[codex] Expose app tool schemas in app list** — _by @rreichel3-oai, closed 2026-04-22T06:39:22Z_
- [#16932](https://github.com/openai/codex/pull/16932) **Keep request_user_input schema stable for subagents** — _by @friel-openai, closed 2026-04-22T06:39:20Z_
- [#18933](https://github.com/openai/codex/pull/18933) **type client responses** — _by @rhan-oai, closed 2026-04-22T04:35:09Z_
- [#18912](https://github.com/openai/codex/pull/18912) **test(tui): update status surface snapshots** — _by @bolinfest, closed 2026-04-22T00:28:13Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`bc083e4`](https://github.com/openai/codex/commit/bc083e47137431a89d2aab1ff6f21c5b15062b49) clients: send permission profiles to app-server (#18280) — _@bolinfest_
- [`44dbd9e`](https://github.com/openai/codex/commit/44dbd9e48adaff96092ec59385ef3b3aa0508616) exec-server: require explicit filesystem sandbox cwd (#19046) — _@bolinfest_
- [`46142c3`](https://github.com/openai/codex/commit/46142c3cb0f2d5de2b12920bbda84468b3a526b0) Rebrand approvals reviewer config to auto-review (#18504) — _@won-openai_
- [`0e25c5f`](https://github.com/openai/codex/commit/0e25c5ff42d40f18dba4d602b60eaaed1b6a5998) Update bundled OpenAI Docs skill freshness check (#19043) — _@kkahadze-oai_
- [`568cdac`](https://github.com/openai/codex/commit/568cdacc7e540cc9ec490e867127d4cd1ef62437) [Codex] Register browser requirements feature keys (#18956) — _@khoi-oai_
- [`ee70b36`](https://github.com/openai/codex/commit/ee70b365ab2894bdcbb7e1d8c886523732930428) Overlay state DB git metadata for filtered thread lists (#19036) — _@joeytrasatti-openai_
- [`d3dd0d7`](https://github.com/openai/codex/commit/d3dd0d759b23a7a56d789b164c12c103c69935bb) exec-server: expose arg0 alias root to fs sandbox (#19016) — _@bolinfest_
- [`16eeeb5`](https://github.com/openai/codex/commit/16eeeb534a967ea3d6a31293b4cda3c0f490b8ca) Fix MCP permission policy sync (#19033) — _@leoshimo-oai_
- [`2d73bac`](https://github.com/openai/codex/commit/2d73bac45f9b7a5a3304c17a2e67b9a6fc6ff10c) feat: add guardian network approval trigger context (#18197) — _@viyatb-oai_
- [`9360f26`](https://github.com/openai/codex/commit/9360f267f329d80fd9e55e75b3110a38e59a8f9b) [2/4] Implement executor HTTP request runner (#18582) — _@aibrahim-oai_
- [`18a26d7`](https://github.com/openai/codex/commit/18a26d7bbc9dfe7509dc0bac134af604d4f0d145) app-server: accept permission profile overrides (#18279) — _@bolinfest_
- [`ed4def8`](https://github.com/openai/codex/commit/ed4def8286b6c313efb012575909d210f021242b) feat(auto-review) short-circuit (#18890) — _@dylan-hurd-oai_
- [`b77791c`](https://github.com/openai/codex/commit/b77791c228b729a6ea48fae8e963f5dad0cc8ea5) feat: Fairly trim skill descriptions within context budget (#18925) — _@xl-openai_
- [`ddde50c`](https://github.com/openai/codex/commit/ddde50c611e4800cb805f243ed3c50bbafe7d011) arg0: keep dispatch aliases alive during async main (#18999) — _@bolinfest_
- [`11e5af5`](https://github.com/openai/codex/commit/11e5af53c4f8595f968f1b8992e64dab799ae95e) Add plumbing to approve stored Auto-Review denials (#18955) — _@won-openai_
- [`78593d7`](https://github.com/openai/codex/commit/78593d72ea48a53c393020f5e5df1be58b2d326a) feat(auto-review) policy config (#18959) — _@dylan-hurd-oai_
- [`f67383b`](https://github.com/openai/codex/commit/f67383bcbaa2fcc65db98a3c3185adfaffe1f16c) [rollout_trace] Record core session rollout traces (#18877) — _@cassirer-openai_
- [`79ea577`](https://github.com/openai/codex/commit/79ea577156368fb11e4426e2bbc7ed2837276b3d) TUI: Keep remote app-server events draining (#18932) — _@etraut-openai_
- [`0127cef`](https://github.com/openai/codex/commit/0127cef5db1e220c9256606ef5e521ba4320caef) Stage publishable Python runtime wheels (#18865) — _@sdcoffey_
- [`0ebe69a`](https://github.com/openai/codex/commit/0ebe69a8c33ed99d99ffa21c58524824ae4941ba) [codex] Update imagegen system skill (#18852) — _@vb-openai_
- [`6542073`](https://github.com/openai/codex/commit/65420737e80794d361351fb24675a27506ff09ac) chore: prep memories for AB (#18973) — _@jif-oai_
- [`ddf65c9`](https://github.com/openai/codex/commit/ddf65c96479bc9bcad91d69e6ed8febd8753545f) fix: cargo deny (#18971) — _@jif-oai_
- [`6393826`](https://github.com/openai/codex/commit/639382609f8a96b4bf255fa2e735e8fb1aca4531) fix: wait_agent timeout for queued mailbox mail (#18968) — _@jif-oai_
- [`4f8c58f`](https://github.com/openai/codex/commit/4f8c58f73744c6b1cebacb520cde695698745cb8) Support multiple cwd filters for thread list (#18502) — _@acrognale-oai_
- [`b04ffee`](https://github.com/openai/codex/commit/b04ffeee4c806834bc9173455729cf47f874e836) nit: expose lib (#18962) — _@jif-oai_
- [`213b17b`](https://github.com/openai/codex/commit/213b17b7a390f15632e89be889e54fc4ec71aa47) [codex-analytics] guardian review TTFT plumbing and emission (#17696) — _@rhan-oai_
- [`37aadea`](https://github.com/openai/codex/commit/37aadeaa13fc9b8b2f9cd93f56786e236bf9f8d1) [codex-analytics] guardian review truncation (#17695) — _@rhan-oai_
- [`4e7399c`](https://github.com/openai/codex/commit/4e7399c6b9878aa64051aea081278452bb6f8b62) [codex-analytics] guardian review analytics events emission (#17693) — _@rhan-oai_
- [`5eab9ff`](https://github.com/openai/codex/commit/5eab9ff8ca5e994d68a8a9bf26f0700a937bafbc) app-server: expose thread permission profiles (#18278) — _@bolinfest_
- [`3a451b6`](https://github.com/openai/codex/commit/3a451b6321bf1686383cd83a1a40ade6ec12a145) use long-lived sessions for codex sandbox windows (#18953) — _@iceweasel-oai_
- [`69c8913`](https://github.com/openai/codex/commit/69c8913e24f2f455c8f000fa7afe039a38bdd48d) feat: add explicit AgentIdentity auth mode (#18785) — _@efrazer-oai_
- [`0fef35d`](https://github.com/openai/codex/commit/0fef35dc3ad67dce6955c1f9ac5c9667bd237272) core: derive active permission profiles (#18277) — _@bolinfest_
- [`51fdc35`](https://github.com/openai/codex/commit/51fdc35945b124208cabd715d91defe611aec591) chore: remove unused Bedrock auth lazy loading (#18948) — _@celia-oai_
- [`34800d7`](https://github.com/openai/codex/commit/34800d717e9ee13573076f0c3475cbc00c7ed2c7) [codex] Clean guardian instructions (#18934) — _@dylan-hurd-oai_
- [`faed6d5`](https://github.com/openai/codex/commit/faed6d5c070f7b77db3c8f55b86cc2e9ca6f1be1) tests: serialize process-heavy Windows CI suites (#18943) — _@bolinfest_
- [`0e39614`](https://github.com/openai/codex/commit/0e39614d8775c10cc686562dc661f3edfdc5998b) chore(tui) debug-config guardian_policy_config (#18923) — _@dylan-hurd-oai_
- [`c7e5a9d`](https://github.com/openai/codex/commit/c7e5a9d95e259b8b79e3f7f659b3f6d19c4521cc) Keep TUI status surfaces in sync (#18935) — _@etraut-openai_
- [`03ae4db`](https://github.com/openai/codex/commit/03ae4db0f43d78d69a7940fd997319708aed8756) ci: keep argument comment lint checks materialized (#18926) — _@bolinfest_
- [`36f8bb4`](https://github.com/openai/codex/commit/36f8bb4ffacfc0021c455453ad3bec51b9b29c48) exec-server: carry filesystem sandbox profiles (#18276) — _@bolinfest_
- [`564860e`](https://github.com/openai/codex/commit/564860e8bd08c88ed0153ce3eef0563e683b24ee) refactor: add agent identity crate (#18871) — _@efrazer-oai_
- [`8fea372`](https://github.com/openai/codex/commit/8fea372c77cb76887c036f5c43cc8a504e75477d) Fix remote app-server shutdown race (#18936) — _@bolinfest_
- [`a978e41`](https://github.com/openai/codex/commit/a978e411f628529e0f7c4095a5b5389622fca9b4) feat: Support remote plugin list/read. (#18452) — _@xl-openai_
- [`536952e`](https://github.com/openai/codex/commit/536952eeeeb5ee1a67c67224ef7ab24c221d669b) bazel: run wrapped Rust unit test shards (#18913) — _@bolinfest_
- [`1cd3ad1`](https://github.com/openai/codex/commit/1cd3ad1f49859e13fe4d2fa009bf0d11c097d20e) feat: add AWS SigV4 auth for OpenAI-compatible model providers (#17820) — _@celia-oai_
- [`e18fe7a`](https://github.com/openai/codex/commit/e18fe7a07f4a6e255494e2b117581fff2cb55e55) test(core): move prompt debug coverage to integration suite (#18916) — _@bolinfest_
- [`09ebc34`](https://github.com/openai/codex/commit/09ebc34f17b84c4ec7550960b2f9c090f5dde5b7) fix(core): emit hooks for apply_patch edits (#18391) — _@fcoury-oai_
- [`1d4cc49`](https://github.com/openai/codex/commit/1d4cc494c9c0ac94e8a1eda7acf420e5df85e24f) Add turn-scoped environment selections (#18416) — _@starr-openai_
- [`6368f50`](https://github.com/openai/codex/commit/6368f506b70fe43b92208ab796c7207c7a1dfb26) fix: windows snapshot for external_agent_config_migration::tests::prompt_snapshot did not match windows output (#18915) — _@bolinfest_
- [`799e504`](https://github.com/openai/codex/commit/799e50412e6a5af88c77c1e071f3e1245936a6ed) sandboxing: materialize cwd-relative permission globs (#18867) — _@bolinfest_
- [`37701d4`](https://github.com/openai/codex/commit/37701d4654bca0cbf4cdf62c16e3d80206c620ba) Update /statusline and /title snapshots (#18909) — _@canvrno-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
