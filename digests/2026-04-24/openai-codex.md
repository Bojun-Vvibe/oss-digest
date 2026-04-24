# openai/codex — 2026-04-24

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-23T23:59:59.000Z → 2026-04-24T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

> _Deterministic template only — no LLM summary for this run._

## Releases

_None in window._


## Merged PRs

- [#18811](https://github.com/openai/codex/pull/18811) **refactor: route Codex auth through AuthProvider** — _by @efrazer-oai, merged 2026-04-24T00:14:03Z_


## Open PRs (new or updated)

- [#18880](https://github.com/openai/codex/pull/18880) **[rollout_trace] Add debug trace reduction command** — _by @cassirer-openai, updated 2026-04-24T01:32:02Z_
- [#18900](https://github.com/openai/codex/pull/18900) **Migrate fork and resume reads to thread store** — _by @wiltzius-openai, updated 2026-04-24T01:29:38Z_
- [#18950](https://github.com/openai/codex/pull/18950) **feat: let model providers own model discovery** — _by @celia-oai, updated 2026-04-24T01:27:41Z_
- [#19048](https://github.com/openai/codex/pull/19048) **feat: expose AWS account state from account/read** — _by @celia-oai, updated 2026-04-24T01:26:46Z_
- [#18897](https://github.com/openai/codex/pull/18897) **Add sticky environment API and thread state** — _by @starr-openai, updated 2026-04-24T01:21:38Z_
- [#19247](https://github.com/openai/codex/pull/19247) **chore: apply truncation policy to unified_exec** — _by @sayan-oai, updated 2026-04-24T01:15:52Z_
- [#19246](https://github.com/openai/codex/pull/19246) **Increase app-server WebSocket outbound buffer** — _by @etraut-openai, updated 2026-04-24T00:56:32Z_
- [#19244](https://github.com/openai/codex/pull/19244) _(draft)_ **Update unix socket transport to use WebSocket upgrade** — _by @willwang-openai, updated 2026-04-24T00:35:37Z_
- [#19231](https://github.com/openai/codex/pull/19231) **permissions: make profiles represent enforcement** — _by @bolinfest, updated 2026-04-24T00:34:33Z_
- [#19218](https://github.com/openai/codex/pull/19218) **cli: add macOS seatbelt debug flags for Mach services and Apple events** — _by @conrad-oai, updated 2026-04-24T00:32:21Z_
- [#19095](https://github.com/openai/codex/pull/19095) **feat: Use short SHA versions for curated plugin cache entries** — _by @xl-openai, updated 2026-04-24T00:27:20Z_
- [#18735](https://github.com/openai/codex/pull/18735) **Update models.json** — _by @github-actions[bot], updated 2026-04-24T00:26:21Z_
- [#19240](https://github.com/openai/codex/pull/19240) _(draft)_ **fix: allow AgentIdentity through Apps MCP gates** — _by @efrazer-oai, updated 2026-04-24T00:21:38Z_
- [#18904](https://github.com/openai/codex/pull/18904) **feat: load AgentIdentity from JWT login/env** — _by @efrazer-oai, updated 2026-04-24T00:14:05Z_
- [#19054](https://github.com/openai/codex/pull/19054) _(draft)_ **feat: add background agent task auth** — _by @adrian-openai, updated 2026-04-24T00:05:46Z_
- [#19051](https://github.com/openai/codex/pull/19051) _(draft)_ **feat: use thread agent task auth for inference** — _by @adrian-openai, updated 2026-04-24T00:05:46Z_
- [#19049](https://github.com/openai/codex/pull/19049) _(draft)_ **feat: opt ChatGPT auth into agent task state** — _by @adrian-openai, updated 2026-04-24T00:05:46Z_
- [#19047](https://github.com/openai/codex/pull/19047) _(draft)_ **feat: add agent identity primitives and opt-in flag** — _by @adrian-openai, updated 2026-04-24T00:05:46Z_
- [#18575](https://github.com/openai/codex/pull/18575) **fix(tui): reflow backlog on terminal resize** — _by @fcoury-oai, updated 2026-04-24T00:03:31Z_
- [#18576](https://github.com/openai/codex/pull/18576) _(draft)_ **feat(tui): render markdown tables responsively** — _by @fcoury-oai, updated 2026-04-24T00:03:30Z_
- [#19236](https://github.com/openai/codex/pull/19236) **Add instruction params to codex-app-server-test-client** — _by @pakrym-oai, updated 2026-04-24T00:03:04Z_


## Closed PRs (not merged)

- [#18265](https://github.com/openai/codex/pull/18265) **Avoid instant remote disconnects under websocket queue pressure** — _by @etraut-openai, closed 2026-04-24T01:14:46Z_
- [#19233](https://github.com/openai/codex/pull/19233) **Make thread archive idempotent for archived threads** — _by @guinness-oai, closed 2026-04-24T00:06:29Z_


## Notable Issues

- [#19243](https://github.com/openai/codex/issues/19243) **Bug: Missing optional dependency @openai/codex-win32-x64 on Windows (v0.124)** _[bug, windows-os, CLI]_ — _by @asdfqwerzxcc_
- [#19252](https://github.com/openai/codex/issues/19252) **Flagged for Cyber after completing KYC** _[bug, CLI, safety-check]_ — _by @Mcrich23_
- [#19251](https://github.com/openai/codex/issues/19251) **Windows app: Browser Use is packaged and feature-flagged but not exposed in UI or plugin marketplace** _[bug, windows-os, app, skills]_ — _by @aralatheai_
- [#3808](https://github.com/openai/codex/issues/3808) **Codex stopped doing Code Reviews in GitHub (just gives eyes/looking emoji but nothing more)** _[bug, code-review]_ — _by @JC1738_ _(closed 2026-01-13T03:49:58Z)_
- [#19242](https://github.com/openai/codex/issues/19242) **2000+ credits just went missing no usage history no what after buying the day before** _[bug, codex-web, rate-limits]_ — _by @MajuriTK_
- [#18692](https://github.com/openai/codex/issues/18692) **GPT-5.4 Fast mode often feels no faster than Standard, but still consumes credits at 2x** _[bug, rate-limits]_ — _by @GGBondBlueWhale_
- [#13555](https://github.com/openai/codex/issues/13555) **Bug: codex fails with "Missing optional dependency @openai/codex-linux-x64" on Ubuntu x86_64** _[bug, CLI, regression]_ — _by @tsugumi-sys_
- [#19142](https://github.com/openai/codex/issues/19142) **Codex Pro GPT-5.4 long context regressed: ~672k worked Apr 22, ~290k fails Apr 23** _[bug, context]_ — _by @markobogoevski-dev_
- [#19250](https://github.com/openai/codex/issues/19250) **Split Diff doesnt work when being in "Large diff detected - showing one file at a time" mode** _[bug, code-review, app]_ — _by @henningpokriefke_
- [#10450](https://github.com/openai/codex/issues/10450) **Remote Development in Codex Desktop App** _[enhancement, app]_ — _by @pocca2048_
- [#16535](https://github.com/openai/codex/issues/16535) **【BUG】Slash commands completely not working in Codex Desktop App (no UI + no parsing)** _[bug, app, regression]_ — _by @Destiny-9527_ _(closed 2026-04-15T05:59:58Z)_
- [#19249](https://github.com/openai/codex/issues/19249) **Codex Desktop regression: slash/local skill chip submission hangs, errors, and duplicates messages on Windows after GPT-5.5 update** _[bug, app, regression, skills]_ — _by @didi-rare_
- [#17390](https://github.com/openai/codex/issues/17390) **Unable to use after update** _[bug, windows-os, CLI, regression]_ — _by @DHJComical_ _(closed 2026-04-16T23:19:04Z)_
- [#19248](https://github.com/openai/codex/issues/19248) **Add groups** _[enhancement, app, session]_ — _by @patchthecode_ _(closed 2026-04-24T01:00:49Z)_
- [#19245](https://github.com/openai/codex/issues/19245) **False positive security-risk flag during local yt-dlp GUI refactor using my own cookies.txt** _[bug, safety-check]_ — _by @tagorr_ _(closed 2026-04-24T00:48:59Z)_
- [#19204](https://github.com/openai/codex/issues/19204) **Flagged while already being verified** _[bug, CLI, safety-check]_ — _by @Acurisu_
- [#17367](https://github.com/openai/codex/issues/17367) **Linux sandbox cannot execute codex itself** _[bug, sandbox, CLI]_ — _by @howardjohn_
- [#19241](https://github.com/openai/codex/issues/19241) **GPT-5.5 Fast mode feels like Standard speed while using increased plan usage** _[bug, rate-limits]_ — _by @GGBondBlueWhale_
- [#19239](https://github.com/openai/codex/issues/19239) **Codex desktop UI does not update language despite localeOverride=zh-CN and --lang=zh-CN** _[bug, app]_ — _by @SeanSeanSo_
- [#19238](https://github.com/openai/codex/issues/19238) **Windows Desktop: switching sandbox from read-only to workspace-write crashes UI after world-writable ACL scan** _[bug, windows-os, sandbox, app]_ — _by @hOpEtRaIn_
- [#18966](https://github.com/openai/codex/issues/18966) **Markdown diff code block does not color deleted lines in Codex Desktop dark theme** _[bug, app]_ — _by @ahnbu_
- [#18341](https://github.com/openai/codex/issues/18341) **Mac app shows persistent blurred/translucent overlay below composer on Intel Mac (macOS 15.0.1, 0.122.0-alpha.1)** _[bug, app]_ — _by @vulcanhelix_
- [#11735](https://github.com/openai/codex/issues/11735) **Stream disconnected before completion** _[bug, connectivity]_ — _by @rtanglestudio_
- [#16669](https://github.com/openai/codex/issues/16669) **Allow adjustable chat content width in Codex App** _[enhancement, windows-os, app]_ — _by @ming-git-001_
- [#19237](https://github.com/openai/codex/issues/19237) **Codex desktop on macOS shows blurred white overlay at certain window widths** _[bug, app]_ — _by @stonezzz_
- [#16996](https://github.com/openai/codex/issues/16996) **Subagent spawn policy conflicts with repo-level workflow instructions** _[bug, subagent]_ — _by @Alek2077_
- [#19235](https://github.com/openai/codex/issues/19235) **New CLI bwrap sandbox fails before shell: RTM_NEWADDR loopback Operation not   permitted** _[bug, sandbox]_ — _by @aiconvergence-collab_
- [#19205](https://github.com/openai/codex/issues/19205) **Undo functionality should never depend on Git repository presence** _[bug, enhancement, extension]_ — _by @Jean-Heng-Huang_


## Commits on `main`

- [`5882f3f`](https://github.com/openai/codex/commit/5882f3f95e1fc727fe46631073c1d5918e4ae3ca) refactor: route Codex auth through AuthProvider (#18811) — _@efrazer-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (deterministic template; no LLM for this run)._
