# openai/codex — 2026-04-17

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-16T23:59:59.000Z → 2026-04-17T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

High-velocity day on `openai/codex`: four alpha releases shipped (`0.122.0-alpha.6` through `alpha.9`) and ~50 commits landed on `main`, dominated by plugin/marketplace work, sandbox hardening, and a large internal session/config refactor.

The headline is the **plugin/marketplace overhaul**. The plugin API was reshaped around a remote-first model where local and remote plugins are separate sources rather than mirrored state (#17277), git-backed cross-repo sources are now first-class in marketplace manifests (#18017), `/plugins` got a new v2 tabbed menu grouping All / Installed / OpenAI Curated / per-marketplace (#18222), the marketplace CLI moved under `codex plugin marketplace add` (#18116), and alternate manifest path discovery was unified (#18182). A follow-up PR (#18238) is still open to surface "install required" reasons for uninstalled remote plugins.

**Sandbox/security** continues to harden: a real fix for the `apply_patch` fs sandbox helper (#18296), exec-server now preserves a small runtime env allowlist for the helper instead of running with empty env (#18380), glob deny-read enforcement landed for macOS Seatbelt and Linux (#18096), managed deny-read config requirements are now supported (commit dae0608), and `use_legacy_landlock` is deprecated (#17971). Windows deny-read parity is in flight (#18202).

**Refactors worth knowing about**: bolinfest is methodically preparing the codebase for Clippy's `await_holding_lock` lint via cloneable async channels (#18398) and narrower guard lifetimes (#18211); pakrym split the monolithic `codex.rs` into `session/`, `mcp.rs`, and turn-context modules (#18244, commit 71e4c6f); config loading now flows through a `FileSystem` abstraction (#18209); and Bazel picked up native Rust test sharding plus `rules_rs`/`llvm` BCR upgrades (#18082, #18397).

**User-visible TUI/UX**: startup-to-input latency dropped from 307ms→191ms by deferring `skills/list` (#18370), `apply_patch` changes now stream progress events (#17862), Plan Mode gained a clear-context implement handoff (#17499), `/status` shows default reasoning effort (#18373), `/resume` accepts Ctrl+P/N (#18267), iTerm2 title flicker fixed via BEL (#18261), and "Guardian" was renamed to "Auto-Review" (#18021). Logout now revokes ChatGPT tokens server-side (#17825), and rate-limit-reached type is propagated end-to-end (#18227).

## Releases

- **[rust-v0.122.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.9)** _(prerelease)_ — 0.122.0-alpha.9 _by @github-actions[bot] at 2026-04-17T23:17:43Z_
  > Release 0.122.0-alpha.9
- **[rust-v0.122.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.8)** _(prerelease)_ — 0.122.0-alpha.8 _by @github-actions[bot] at 2026-04-17T20:19:59Z_
  > Release 0.122.0-alpha.8
- **[rust-v0.122.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.7)** _(prerelease)_ — 0.122.0-alpha.7 _by @github-actions[bot] at 2026-04-17T16:19:44Z_
  > Release 0.122.0-alpha.7
- **[rust-v0.122.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.6)** _(prerelease)_ — 0.122.0-alpha.6 _by @github-actions[bot] at 2026-04-17T12:36:44Z_
  > Release 0.122.0-alpha.6


## Merged PRs

- [#17277](https://github.com/openai/codex/pull/17277) **feat: Add remote plugin fields to plugin API** — _by @xl-openai, merged 2026-04-17T23:47:59Z_
- [#18384](https://github.com/openai/codex/pull/18384) **Update image resizing to fit 2048 square bounds** — _by @pakrym-oai, merged 2026-04-17T23:31:03Z_
- [#18082](https://github.com/openai/codex/pull/18082) **bazel: use native rust test sharding** — _by @bolinfest, merged 2026-04-17T23:14:11Z_
- [#18397](https://github.com/openai/codex/pull/18397) **[codex] Upgrade rules_rs and llvm to latest BCR versions** — _by @zbarsky-openai, merged 2026-04-17T22:45:32Z_
- [#18296](https://github.com/openai/codex/pull/18296) **fix: fix fs sandbox helper for apply_patch** — _by @viyatb-oai, merged 2026-04-17T22:39:07Z_
- [#18398](https://github.com/openai/codex/pull/18398) **refactor: use cloneable async channels for shared receivers** — _by @bolinfest, merged 2026-04-17T22:20:30Z_
- [#18017](https://github.com/openai/codex/pull/18017) **[codex] Add cross-repo plugin sources to marketplace manifests** — _by @xli-oai, merged 2026-04-17T22:11:42Z_
- [#18211](https://github.com/openai/codex/pull/18211) **refactor: narrow async lock guard lifetimes** — _by @bolinfest, merged 2026-04-17T21:06:51Z_
- [#18381](https://github.com/openai/codex/pull/18381) **Remove the tier constraint from connectors directory requests** — _by @xl-openai, merged 2026-04-17T21:05:09Z_
- [#18380](https://github.com/openai/codex/pull/18380) **exec-server: preserve fs helper runtime env** — _by @starr-openai, merged 2026-04-17T20:44:02Z_
- [#18227](https://github.com/openai/codex/pull/18227) **[codex] Propagate rate limit reached type** — _by @richardopenai, merged 2026-04-17T20:37:25Z_
- [#18222](https://github.com/openai/codex/pull/18222) ** /plugins: Add v2 tabbed marketplace menu** — _by @canvrno-oai, merged 2026-04-17T19:59:18Z_
- [#18370](https://github.com/openai/codex/pull/18370) **perf(tui): defer startup skills refresh** — _by @fcoury-oai, merged 2026-04-17T19:55:01Z_
- [#18087](https://github.com/openai/codex/pull/18087) **[4/6] Abstract MCP stdio server launching** — _by @aibrahim-oai, merged 2026-04-17T19:34:48Z_
- [#18379](https://github.com/openai/codex/pull/18379) **Attribute automated PR Babysitter review replies** — _by @etraut-openai, merged 2026-04-17T19:27:48Z_
- [#18373](https://github.com/openai/codex/pull/18373) **Show default reasoning in /status** — _by @aibrahim-oai, merged 2026-04-17T19:21:09Z_


## Open PRs (new or updated)

- [#18238](https://github.com/openai/codex/pull/18238) _(draft)_ **Surface unavailable remote plugin details** — _by @xli-oai, updated 2026-04-17T22:11:44Z_
- [#18400](https://github.com/openai/codex/pull/18400) _(draft)_ **Add subagent parent mailbox messaging** — _by @starr-openai, updated 2026-04-17T21:56:08Z_
- [#18202](https://github.com/openai/codex/pull/18202) **feat(sandbox): add Windows deny-read parity** — _by @viyatb-oai, updated 2026-04-17T21:12:07Z_


## Closed PRs (not merged)

- [#18426](https://github.com/openai/codex/pull/18426) **refactor: drop data locks before async work** — _by @bolinfest, closed 2026-04-17T23:51:57Z_
- [#18427](https://github.com/openai/codex/pull/18427) **chore: document intentional await-holding cases** — _by @bolinfest, closed 2026-04-17T23:51:51Z_
- [#18417](https://github.com/openai/codex/pull/18417) **Add MCP list-tools review canary** — _by @starr-openai, closed 2026-04-17T23:38:09Z_
- [#18409](https://github.com/openai/codex/pull/18409) **Add arg0 reviewer guidance canary** — _by @starr-openai, closed 2026-04-17T23:38:09Z_
- [#17734](https://github.com/openai/codex/pull/17734) **[Linux] Reserve missing top level .git at runtime** — _by @evawong-oai, closed 2026-04-17T23:33:24Z_
- [#18405](https://github.com/openai/codex/pull/18405) **Fix wasm app-server assistant event emission** — _by @jlewi-openai, closed 2026-04-17T22:34:55Z_
- [#5025](https://github.com/openai/codex/pull/5025) **feat(cli/cloud): Headless Codex Cloud commands (list/show/diff/export/apply/new)** — _by @andreidita22, closed 2025-10-31T22:13:51Z_
- [#17237](https://github.com/openai/codex/pull/17237) **Restore null instruction overrides** — _by @aibrahim-oai, closed 2026-04-17T20:05:50Z_
- [#17762](https://github.com/openai/codex/pull/17762) **Avoid realtime final answer progress echo** — _by @aibrahim-oai, closed 2026-04-17T20:05:41Z_
- [#18347](https://github.com/openai/codex/pull/18347) **[codex-login] Clear refresh token after terminal refresh failures** — _by @cooper-oai, closed 2026-04-17T19:56:52Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`26d9894`](https://github.com/openai/codex/commit/26d9894a27049059c88c8d93a66a6427002c6508) feat: Add remote plugin fields to plugin API (#17277) — _@xl-openai_
- [`120bbf4`](https://github.com/openai/codex/commit/120bbf46c1f659a6009ef80e7426c6b7cb9062af) Update image resizing to fit 2048 square bounds (#18384) — _@pakrym-oai_
- [`96d35dd`](https://github.com/openai/codex/commit/96d35dd640450c9ce3d739a31f489ba985698d0e) bazel: use native rust test sharding (#18082) — _@bolinfest_
- [`680c410`](https://github.com/openai/codex/commit/680c4102ae32c27989683fcb30f80e3104a6bccb) [codex] Upgrade rules_rs and llvm to latest BCR versions (#18397) — _@zbarsky-openai_
- [`f705f42`](https://github.com/openai/codex/commit/f705f42ba8e87c455b028623c27d7f0b173b2f10) fix: fix fs sandbox helper for apply_patch (#18296) — _@viyatb-oai_
- [`c9c4caa`](https://github.com/openai/codex/commit/c9c4caafd831cfc562ac5f0321dd10243547111b) refactor: use cloneable async channels for shared receivers (#18398) — _@bolinfest_
- [`0e111e0`](https://github.com/openai/codex/commit/0e111e08d0dfe58f982eb32a6379807f7dcafcff) [codex] Add cross-repo plugin sources to marketplace manifests (#18017) — _@xli-oai_
- [`1265df0`](https://github.com/openai/codex/commit/1265df0ec27d319c40f2b8c00273b44312183439) refactor: narrow async lock guard lifetimes (#18211) — _@bolinfest_
- [`ecc8599`](https://github.com/openai/codex/commit/ecc8599c5690c209797b04c950f949c80c877fa6) Remove the tier constraint from connectors directory requests (#18381) — _@xl-openai_
- [`63e4a90`](https://github.com/openai/codex/commit/63e4a900c95eb4610ce089d57396f19df854b4f1) exec-server: preserve fs helper runtime env (#18380) — _@starr-openai_
- [`139fa8b`](https://github.com/openai/codex/commit/139fa8b8f25408aeb3edea3ef50e1a8b3e3ff354) [codex] Propagate rate limit reached type (#18227) — _@richardopenai_
- [`f017a23`](https://github.com/openai/codex/commit/f017a23835bce93940e7cc4b04be796f801b0fb3) /plugins: Add v2 tabbed marketplace menu (#18222) — _@canvrno-oai_
- [`48f117d`](https://github.com/openai/codex/commit/48f117d0a2d2b75911029de152819846dae40d76) perf(tui): defer startup skills refresh (#18370) — _@fcoury-oai_
- [`92cf902`](https://github.com/openai/codex/commit/92cf90277d4f3bcdee8457047c710db58d9fc715) [4/6] Abstract MCP stdio server launching (#18087) — _@aibrahim-oai_
- [`d8b91f5`](https://github.com/openai/codex/commit/d8b91f5fa126fbf5fbfb4ae28825c3d9f70c26fc) Attribute automated PR Babysitter review replies (#18379) — _@etraut-openai_
- [`0f0ef09`](https://github.com/openai/codex/commit/0f0ef094b6a42b890168a0fe69daf5965ce00399) Show default reasoning in /status (#18373) — _@aibrahim-oai_
- [`a801b99`](https://github.com/openai/codex/commit/a801b999ffd501f7daac941a2189d2c973599187) Update models.json (#12640) — _@github-actions[bot]_
- [`9d3a5cf`](https://github.com/openai/codex/commit/9d3a5cf05ed13f0b74131b9e024439b33057d142) [3/6] Add pushed exec process events (#18020) — _@aibrahim-oai_
- [`eaf78e4`](https://github.com/openai/codex/commit/eaf78e43f2e95b978622b97c1f656236c7cd8927) Add sorting/backwardsCursor to thread/list and new thread/turns/list api (#17305) — _@ddr-oai_
- [`29bc2ad`](https://github.com/openai/codex/commit/29bc2ad2f41d534f27da981aa0693d343e9d5574) ci: scope Bazel repository cache by job (#18366) — _@bolinfest_
- [`481ba01`](https://github.com/openai/codex/commit/481ba014a71b8a2acb78c6b37fad98ad7582e32a) Add core CODEOWNERS (#18362) — _@aibrahim-oai_
- [`2c2ed51`](https://github.com/openai/codex/commit/2c2ed51876044dd4646aec912d1b4b248836c5bd) ci: make Windows Bazel clippy catch core test imports (#18350) — _@bolinfest_
- [`6991be7`](https://github.com/openai/codex/commit/6991be7eadda6bc37f15723b250709229c2be94b) enable tool search over dynamic tools (#18263) — _@sayan-oai_
- [`fad3d0f`](https://github.com/openai/codex/commit/fad3d0f1d0179253dcab41e05bafb1bb936330d0) codex: route thread/read persistence through thread store (#18352) — _@wiltzius-openai_
- [`d3692b1`](https://github.com/openai/codex/commit/d3692b14c900560c3775e3cdaf2f0d9a9b37902c) feat(tui): add clear-context plan implementation (#17499) — _@fcoury-oai_
- [`ea84537`](https://github.com/openai/codex/commit/ea8453736979af0e158f9935a220d394aa5459b0) Make app tool hint defaults pessimistic for app policies (#17232) — _@colby-oai_
- [`cfc23ee`](https://github.com/openai/codex/commit/cfc23eee3df8ab73fa48fd70138bbad818ecd984) feat: config aliases (#18140) — _@jif-oai_
- [`af7b8d5`](https://github.com/openai/codex/commit/af7b8d551cf8499695cdfcc4d445ffd57ecac9df) Guardian -> Auto-Review  (#18021) — _@won-openai_
- [`d0eff70`](https://github.com/openai/codex/commit/d0eff703837cbc9a6dea5a7f3dedc921aeeab0ab) Fix config-loader tests after filesystem abstraction race (#18351) — _@bolinfest_
- [`71e4c6f`](https://github.com/openai/codex/commit/71e4c6fa17884097fedd5bf2e49c55dfb6ccc70e) Move codex module under session (#18249) — _@pakrym-oai_
- [`dae0608`](https://github.com/openai/codex/commit/dae0608c06bf61a356209fd11243aec1ef816547) feat(config): support managed deny-read requirements (#17740) — _@viyatb-oai_
- [`2dd6734`](https://github.com/openai/codex/commit/2dd6734dd34661235289d55a21d188f8d65aea02) fix(tui): use BEL for terminal title updates (#18261) — _@etraut-openai_
- [`c3ecb55`](https://github.com/openai/codex/commit/c3ecb557d37a3410308ff4ed12ccebbb4d9f0f9b) Support Ctrl+P/Ctrl+N in resume picker (#18267) — _@etraut-openai_
- [`3421a10`](https://github.com/openai/codex/commit/3421a107e03b14a6da56e5a87d9712965eece983) nit: phase 2 ephemeral (#18338) — _@jif-oai_
- [`8494e5b`](https://github.com/openai/codex/commit/8494e5bd7bb9fda5df56e232d7ef890108a3d8d4) Add PermissionRequest hooks support (#17563) — _@abhinav-oai_
- [`d0047de`](https://github.com/openai/codex/commit/d0047de7cbd0d8ffd03804d3736478594f0742c8) add token-based tool deferral behind feature flag (#18097) — _@sayan-oai_
- [`20b4b80`](https://github.com/openai/codex/commit/20b4b80426a84a7a533f76979ecdab81ae20ad7a) Sync local plugin imports, async remote imports, refresh caches after… (#18246) — _@alexsong-oai_
- [`64177aa`](https://github.com/openai/codex/commit/64177aaa222738e2372cdf7f929388883b483094) fix: reduce writable root (#17947) — _@jif-oai_
- [`2e038e6`](https://github.com/openai/codex/commit/2e038e6d383c6a8e06ea8a89d5021d129228690d) Fix Windows exec policy test flake (#18304) — _@etraut-openai_
- [`22f7ef1`](https://github.com/openai/codex/commit/22f7ef1cb77692fcbf2c4af204ef97f1722a8b50) [codex] Revoke ChatGPT tokens on logout (#17825) — _@sashank-oai_
- [`fe7c959`](https://github.com/openai/codex/commit/fe7c959e90d46abb8311e4a0b369e6cb32bf337e) fix(exec-policy) rules parsing (#18126) — _@dylan-hurd-oai_
- [`9d6f4f2`](https://github.com/openai/codex/commit/9d6f4f2e2e15880c754d8292fa0306f197e55a23) codex: split thread/read view loading (#18231) — _@wiltzius-openai_
- [`dd00efe`](https://github.com/openai/codex/commit/dd00efe78178b8c6c78c0ad78c20ec650c9d4cdf) Move Computer Use tool suggestion to core (#18219) — _@leoshimo-oai_
- [`37161bc`](https://github.com/openai/codex/commit/37161bc76e4ba97026076e1fc4002434f247e73a) feat: Handle alternate plugin manifest paths (#18182) — _@xl-openai_
- [`a803790`](https://github.com/openai/codex/commit/a803790a10e6eebfe77586661535392510260565) feat: add opt-in provider runtime abstraction (#17713) — _@celia-oai_
- [`91e8eeb`](https://github.com/openai/codex/commit/91e8eebd03aa13c7b59b9c4aa96bab1cf69da046) Split codex session modules (#18244) — _@pakrym-oai_
- [`7995c66`](https://github.com/openai/codex/commit/7995c660320b213f628ddb549a6fdefc97b0d477) Stream apply_patch changes (#17862) — _@akshaynathan_
- [`9effa05`](https://github.com/openai/codex/commit/9effa0509f90a3f661dfdba9bd92cec571e9e5d9) Refactor config loading to use filesystem abstraction (#18209) — _@pakrym-oai_
- [`2967900`](https://github.com/openai/codex/commit/2967900d810e3f304999e6c51f5a76088759eee1) fix: deprecate use_legacy_landlock feature flag (#17971) — _@viyatb-oai_
- [`0d0abe8`](https://github.com/openai/codex/commit/0d0abe839a3886f8140626fa0028d09de349bac6) feat(sandbox): add glob deny-read platform enforcement (#18096) — _@viyatb-oai_
- [`5818ed6`](https://github.com/openai/codex/commit/5818ed6660e5e79234650538923cc34e01409367) Move marketplace add under plugin command (#18116) — _@xli-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
