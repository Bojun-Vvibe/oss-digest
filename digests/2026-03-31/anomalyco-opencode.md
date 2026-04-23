# anomalyco/opencode — 2026-03-31

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-30T23:59:59.000Z → 2026-03-31T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Three patch releases shipped in a single day — **v1.3.10**, **v1.3.11**, and **v1.3.12** — making this the headline activity. The most user-visible fixes land in v1.3.11/v1.3.12: Azure provider options are forwarded correctly again after the AI SDK v6 migration broke the key name (#20326), and Google Vertex Anthropic now supports prompt caching with cache token tracking (#20266). v1.3.10 fixes a storage-migration corruption risk on upgrades and restores clickability for pending subagent tool calls (#20263).

Plugin/extension hardening is the other significant theme. Three commits from @kommander tighten the plugin install path: pinned plugin versions with package install scripts blocked (#20248), warn-and-skip behavior for plugins missing a server/TUI entrypoint plus default options applied from package exports (#20284), and the TUI `replace` slot no longer mounts content multiple times. These changes meaningfully reduce supply-chain and stability risk for plugin users and are worth a closer look if you maintain or consume opencode plugins.

Under the hood, @kitlangton continued a substantial Effect-ification refactor of core services — Storage (#20132), Provider (#20160), SessionSummary (#20142), and SessionRevert (#20143) — and @thdxr simplified the LLM streaming path by replacing the internal queue with `fromAsyncIterable` (#20324). Together these are non-trivial architectural shifts in session/provider plumbing; expect follow-on churn.

Other notable items: a dedicated system prompt for Kimi models (#20259), three opentui upgrades in one day to 0.1.93 → 0.1.94 → 0.1.95 (#19950, #20357, #20369), removal of the hardcoded model definition from the codex plugin (#20294), migration of prompt tests to an HTTP mock LLM server (#20304), darker muted text in Catppuccin themes (#20161), and a "smarter changelog" generator (#20138). No new issues or PRs were opened in the window — activity was entirely commits and releases on `dev`.

**Read first:** the Azure fix (#20326) if you use Azure, the plugin install changes (#20248, #20284) if you ship plugins, and the kitlangton refactor series if you work on session internals.

## Releases

- **[v1.3.12](https://github.com/anomalyco/opencode/releases/tag/v1.3.12)** — v1.3.12 _by @opencode-agent[bot] at 2026-03-31T22:35:25Z_
  > ## Core
  > - Enabled prompt caching and cache token tracking for Google Vertex Anthropic. (@major)
  > - Fixed Azure provider options being forwarded correctly after the AI SDK v6 migration.
  > 
  > ## TUI
  > - Fixed plugin `replace` slots mounting content more than once.
  > 
  > **Thank you to 2 community contributors:**
  > - @major:
  >   - feat: enable prompt caching and cache token tracking for google-vertex-anthropic (#20266)
  > - @github-actions[bot]:
  >   - Update VOUCHED list
- **[v1.3.11](https://github.com/anomalyco/opencode/releases/tag/v1.3.11)** — v1.3.11 _by @opencode-agent[bot] at 2026-03-31T19:56:06Z_
  > ## Core
  > 
  > - Add a dedicated system prompt for Kimi models. (@Yuxin-Dong)
  > 
  > ## TUI
  > 
  > - Improve TUI terminal output passthrough so external command output renders more reliably.
  > 
  > ## Extensions
  > 
  > - Skip plugins that do not expose a matching server or TUI entrypoint, warn instead of failing, and apply default options from package exports on install.
  > - Pin explicit plugin versions during install and block package install scripts from running.
  > 
  > **Thank you to 1 community contributor:**
  > - @Yuxin-Dong:
  >   -…
- **[v1.3.10](https://github.com/anomalyco/opencode/releases/tag/v1.3.10)** — v1.3.10 _by @opencode-agent[bot] at 2026-03-31T13:32:02Z_
  > ## Core
  > - Subagent tool calls stay clickable while they are pending.
  > - Improved storage migration reliability so malformed legacy records or failed migrations do not corrupt upgraded state.
  > 
  > ## TUI
  > - Improved muted text contrast in the Catppuccin themes.


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`4b4b783`](https://github.com/anomalyco/opencode/commit/4b4b7832aaed8417e304e407a9c54259b5cd2b2d) upgrade opentui to 0.1.95 (#20369) — _@kommander_
- [`4280307`](https://github.com/anomalyco/opencode/commit/428030701316c8d0b5b021b500c1c7a439bc4da3) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`9b09a7e`](https://github.com/anomalyco/opencode/commit/9b09a7e7662f6f61d4bafd00b876222365a14d5b) chore: generate — _@opencode-agent[bot]_
- [`3fc0367`](https://github.com/anomalyco/opencode/commit/3fc0367b9377e33d761e93c829350fc33eead503) refactor(session): effectify SessionRevert service (#20143) — _@kitlangton_
- [`954a6ca`](https://github.com/anomalyco/opencode/commit/954a6ca88ecf68b2c636633e00edaae90e0c12c9) refactor(session): effectify SessionSummary service (#20142) — _@kitlangton_
- [`0c03a3e`](https://github.com/anomalyco/opencode/commit/0c03a3ee10f6462a25f67fc847188b74ae76b42b) test: migrate prompt tests to HTTP mock LLM server (#20304) — _@kitlangton_
- [`53330a5`](https://github.com/anomalyco/opencode/commit/53330a518f44ca372e9706e7261d967e18ef2cda) Update VOUCHED list — _@github-actions[bot]_
- [`892bdeb`](https://github.com/anomalyco/opencode/commit/892bdebaacbed3fc76976431c7aa7b81ab639fb6) release: v1.3.12 — _@opencode_
- [`1812130`](https://github.com/anomalyco/opencode/commit/18121300f313a6d81eaad002b9b19771b6815180) upgrade opentui to 0.1.94 (#20357) — _@kommander_
- [`d6d4446`](https://github.com/anomalyco/opencode/commit/d6d4446f46be982e83a6d37b97e203fedfb74ef1) Update VOUCHED list — _@github-actions[bot]_
- [`26cc924`](https://github.com/anomalyco/opencode/commit/26cc924ea223cb27449b432beddb8abcfc36e65b) feat: enable prompt caching and cache token tracking for google-vertex-anthropic (#20266) — _@major_
- [`4dd866d`](https://github.com/anomalyco/opencode/commit/4dd866d5c47f8e4db08796cfbb83bc6d5c0a8ce5) fix: rm exclusion of ai-sdk/azure in transform.ts, when we migrated to v6 the ai sdk changed the key for ai-sdk/azure so the exclusion is no longer needed (#20326) — _@rekram1-node_
- [`beab4cc`](https://github.com/anomalyco/opencode/commit/beab4cc2c2c43edea9e787b8815489681f1febee) release: v1.3.11 — _@opencode_
- [`567a911`](https://github.com/anomalyco/opencode/commit/567a91191aabe14c82eebd541ad8fffe20f8bc8a) refactor(session): simplify LLM stream by replacing queue with fromAsyncIterable (#20324) — _@thdxr_
- [`434d82b`](https://github.com/anomalyco/opencode/commit/434d82bbe2b855650b7e82fcc3539b6e64e44ddf) test: update model test fixture (#20182) — _@rekram1-node_
- [`2929774`](https://github.com/anomalyco/opencode/commit/2929774acb2eb694800bccfc6a9f84ec691eb999) chore: rm harcoded model definition from codex plugin (#20294) — _@rekram1-node_
- [`6e61a46`](https://github.com/anomalyco/opencode/commit/6e61a46a845b6c86c0c4b8af971f196751a4881c) chore: skip 2 tests — _@adamdotdevin_
- [`2daf4b8`](https://github.com/anomalyco/opencode/commit/2daf4b805a76f8b8cbaad43932f8f26bce354f3d) feat: add a dedicated system prompt for Kimi models (#20259) — _@Yuxin-Dong_
- [`7342e65`](https://github.com/anomalyco/opencode/commit/7342e650c035eb337a0b3465d12b0a3c255a237c) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`8c2e2ec`](https://github.com/anomalyco/opencode/commit/8c2e2ecc9585cb91e4fdddeb0bab827346acfb7c) chore: e2e model — _@adamdotdevin_
- [`25a2b73`](https://github.com/anomalyco/opencode/commit/25a2b739e68a98dd027aa3d5cef187ad4242d1ff) warn only and ignore plugins without entrypoints, default config via exports (#20284) — _@kommander_
- [`85c1692`](https://github.com/anomalyco/opencode/commit/85c16926c4d4c1da8f09d4ac497f7dab8d6ae74e) chore: use paid zen model in e2e — _@adamdotdevin_
- [`2e78fde`](https://github.com/anomalyco/opencode/commit/2e78fdec43ecf98123813b4b1f1c45125004f73f) ensure pinned plugin versions and do not run package scripts on install (#20248) — _@kommander_
- [`1fcb920`](https://github.com/anomalyco/opencode/commit/1fcb920eb42f71548c0bfc4259b0464e3f40e1b7) upgrade opentui to 0.1.93 (#19950) — _@kommander_
- [`b1e89c3`](https://github.com/anomalyco/opencode/commit/b1e89c344b6073f1cfc82f0b7286c2ee2503f115) release: v1.3.10 — _@opencode_
- [`befbeda`](https://github.com/anomalyco/opencode/commit/befbedacdc0116f87f8c8e10bfbf892d64b239c2) fix(session): subagents not being clickable (#20263) — _@thdxr_
- [`2cc738f`](https://github.com/anomalyco/opencode/commit/2cc738fb1794470d28b6795f2267b9b756d4be88) wip: zen — _@fwang_
- [`71b2069`](https://github.com/anomalyco/opencode/commit/71b20698bbbbedb72a1bc107af656e7115705fb5) chore: generate — _@opencode-agent[bot]_
- [`3df18dc`](https://github.com/anomalyco/opencode/commit/3df18dcde119150542f8c13487b0378fe8e3a8fe) refactor(provider): effectify Provider service (#20160) — _@kitlangton_
- [`a898c2e`](https://github.com/anomalyco/opencode/commit/a898c2ea3ad404056e015de8f37106cca7b7a4c3) refactor(storage): effectify Storage service (#20132) — _@kitlangton_
- [`bf77729`](https://github.com/anomalyco/opencode/commit/bf777298c8b64997bcbb8e52b016e417e7e62114) fix(theme): darken muted text in catppuccin tui themes (#20161) — _@kitlangton_
- [`93fad99`](https://github.com/anomalyco/opencode/commit/93fad99f7f345173250aeb336e8e3c49d46d524e) smarter changelog (#20138) — _@Hona_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
