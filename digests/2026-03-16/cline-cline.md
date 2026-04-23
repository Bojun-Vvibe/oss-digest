# cline/cline — 2026-03-16

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-15T23:59:59.000Z → 2026-03-16T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## cline/cline — 2026-03-16

The headline is the **v3.73.0 release** ([release](https://github.com/cline/cline/releases/tag/v3.73.0), version bump in #9833): it ships **W&B Inference by CoreWeave as a new API provider with 17 models**, improves parallel tool calling for OpenRouter and the Cline provider, and hardens the Claude Code provider plus several tool handlers (`read_file`, `list_files`, `list_code_definition_names`, `search_files`) to return graceful errors instead of crashing.

Provider work dominated the day. #9783 fixes the Claude Code provider against 4.6 models and newer Claude CLI versions — updating `--disallowedTools` (12 tools were previously unblocked, causing models to fall back to native tool_use instead of Cline's XML tools), handling the new top-level `rate_limit_event` shape, and tolerating unknown content/message types. #9810 fills out the Fireworks serverless catalog (adding `glm-5`, `minimax-m2p5`, `deepseek-v3p2`, etc.) with corrected cached/write pricing. #9839 fixes a W&B bug where explicitly configured model IDs outside the static `wandbModels` catalog were silently swapped for the default `meta-llama/Llama-3.3-70B-Instruct` — relevant for anyone using `cline auth -p wandb -m ...` with custom IDs.

Platform/stability fixes: #9743 makes Windows toast notifications more robust and trims command detail in OS-level approval prompts; #9747 stabilizes flaky Windows CLI tests around `/q` and `/exit` by making CLI-only slash commands resolve synchronously in `ChatView`. Commit a46c528 (saoudrizwan) fixes a notification hook being incorrectly triggered by command-output asks, and the CLI was bumped to 2.7.1.

Security: two Aikido bot PRs landed — #9812 (DOMPurify XSS, Preact HTML injection, Lodash prototype pollution) and #9813 (26 CVEs across hono/simple-git/@aws-sdk/xml-builder including 3 criticals: static-file URL decoding bypass, git RCE, XML entity-shadowing XSS). Note #9813 is marked closed-not-merged, so verify whether superseding dep bumps (undici→7.24.3 in #9825, qs→6.15.0 in #9343) actually cover it.

Notable still-open: #9838 adds a `supportsWebP` flag for OpenAI-Compatible/LiteLLM endpoints (fixes llama.cpp rejecting WebP screenshots, closes #8203); #9829 stops swallowing text content emitted before `attempt_completion` (#9719); #9630 migrates MCP settings to `~/.cline/data/settings`.

## Releases

- **[v3.73.0](https://github.com/cline/cline/releases/tag/v3.73.0)** — v3.73.0 _by @github-actions[bot] at 2026-03-16T21:00:53Z_
  > ### Added
  > 
  > - Added W&B Inference by CoreWeave as a new API provider with 17 models
  > - Improved parallel tool calling support for OpenRouter and Cline providers
  > 
  > ### Fixed
  > 
  > - Claude Code Provider: handle rate limit events, empty content arrays, error results, and unknown content types without crashing
  > - Tool handlers (`read_file`, `list_files`, `list_code_definition_names`, `search_files`) now return graceful errors instead of crashing
  > 
  > **Full Changelog**: https://github.com/cline/cline/compare/v2…


## Merged PRs

- [#9839](https://github.com/cline/cline/pull/9839) **fix(wandb): honor explicit model IDs outside static catalog** — _by @arafatkatze, merged 2026-03-16T23:40:29Z_
- [#9810](https://github.com/cline/cline/pull/9810) **fix(fireworks): add missing serverless models and pricing** — _by @arafatkatze, merged 2026-03-16T21:28:24Z_
- [#9833](https://github.com/cline/cline/pull/9833) **bump cline version** — _by @maxpaulus43, merged 2026-03-16T20:36:41Z_
- [#9783](https://github.com/cline/cline/pull/9783) **fix: Claude Code provider failing with 4.6 models and newer CLI versions** — _by @mathis1337, merged 2026-03-16T20:01:56Z_
- [#8803](https://github.com/cline/cline/pull/8803) **chore(deps-dev): bump lodash from 4.17.21 to 4.17.23 in /testing-platform in the npm_and_yarn group across 1 directory** — _by @dependabot[bot], merged 2026-03-16T19:25:47Z_
- [#9343](https://github.com/cline/cline/pull/9343) **chore(deps): bump qs from 6.14.1 to 6.15.0** — _by @dependabot[bot], merged 2026-03-16T19:00:03Z_
- [#9743](https://github.com/cline/cline/pull/9743) **Fix issue with Windows notification** — _by @candieduniverse, merged 2026-03-16T16:44:20Z_
- [#9812](https://github.com/cline/cline/pull/9812) **[Aikido] Fix 3 security issues in dompurify, preact, mermaid and 2 more** — _by @aikido-autofix[bot], merged 2026-03-16T16:15:41Z_
- [#9747](https://github.com/cline/cline/pull/9747) **Fix Windows CLI tests related to `/q` and `/exit`** — _by @candieduniverse, merged 2026-03-16T14:59:27Z_
- [#9825](https://github.com/cline/cline/pull/9825) **chore(deps): bump undici from 7.20.0 to 7.24.3** — _by @dependabot[bot], merged 2026-03-16T14:52:50Z_


## Open PRs (new or updated)

- [#9630](https://github.com/cline/cline/pull/9630) **MCP Settings Migration** — _by @shey-cline, updated 2026-03-16T22:26:11Z_
- [#9838](https://github.com/cline/cline/pull/9838) **fix: add supportsWebP flag to OpenAI Compatible / LiteLLM model config** — _by @ClineXDiego, updated 2026-03-16T22:24:41Z_
- [#9829](https://github.com/cline/cline/pull/9829) **fix: show text content before attempt_completion instead of swallowing it** — _by @CodeForContribute, updated 2026-03-16T19:10:40Z_


## Closed PRs (not merged)

- [#9813](https://github.com/cline/cline/pull/9813) **[Aikido] Fix 26 security issues in hono, simple-git, @aws-sdk/xml-builder and 8 more** — _by @aikido-autofix[bot], closed 2026-03-16T23:35:17Z_
- [#9395](https://github.com/cline/cline/pull/9395) **chore(deps): bump the npm_and_yarn group across 4 directories with 4 updates** — _by @dependabot[bot], closed 2026-03-16T19:28:18Z_
- [#9828](https://github.com/cline/cline/pull/9828) **fix: truncate byte-heavy terminal output summaries** — _by @arafatkatze, closed 2026-03-16T19:11:16Z_
- [#9770](https://github.com/cline/cline/pull/9770) **chore(deps): bump dompurify from 3.2.7 to 3.3.3 in /webview-ui** — _by @dependabot[bot], closed 2026-03-16T16:17:15Z_
- [#9756](https://github.com/cline/cline/pull/9756) **chore(deps): bump preact from 10.27.2 to 10.29.0 in /webview-ui** — _by @dependabot[bot], closed 2026-03-16T16:16:56Z_
- [#9669](https://github.com/cline/cline/pull/9669) **chore(deps): bump dompurify and @types/dompurify in /webview-ui** — _by @dependabot[bot], closed 2026-03-16T16:16:57Z_
- [#9802](https://github.com/cline/cline/pull/9802) **chore(deps): bump undici from 7.20.0 to 7.24.1** — _by @dependabot[bot], closed 2026-03-16T03:37:43Z_
- [#9757](https://github.com/cline/cline/pull/9757) **chore(deps): bump hono from 4.11.7 to 4.12.7** — _by @dependabot[bot], closed 2026-03-16T03:37:12Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`2eab216`](https://github.com/cline/cline/commit/2eab216815ad349ed5ae77e0a9aa33c99c90e113) fix(wandb): honor explicit model IDs outside static catalog (#9839) — _@arafatkatze_
- [`e57174e`](https://github.com/cline/cline/commit/e57174eec8da7b7ef2156ad009938af4e7d062d9) fix(fireworks): add missing serverless models and pricing (#9810) — _@arafatkatze_
- [`ad4631c`](https://github.com/cline/cline/commit/ad4631c682b030487d0fda90c3190301f2d19437) bump cline version (#9833) — _@maxpaulus43_
- [`aae23e8`](https://github.com/cline/cline/commit/aae23e8685473d6a95d4c4f947bea398983ee31e) fix: Claude Code provider failing with 4.6 models and newer CLI versions (#9783) — _@mathis1337_
- [`0ff2759`](https://github.com/cline/cline/commit/0ff27591d538cb52745407411d6c7d71f6b11341) chore(deps-dev): bump lodash (#8803) — _@dependabot[bot]_
- [`23127f2`](https://github.com/cline/cline/commit/23127f22decd13098d42e7a34d130bff9227ff43) chore(deps): bump qs from 6.14.1 to 6.15.0 (#9343) — _@dependabot[bot]_
- [`57ed14d`](https://github.com/cline/cline/commit/57ed14d1b1c2866070886401a67d650187c8a741) Fix issue with Windows notification (#9743) — _@candieduniverse_
- [`a769585`](https://github.com/cline/cline/commit/a769585406f6d9c45a537cf67275578fe69c8821) fix(security): update dependencies (#9812) — _@aikido-autofix[bot]_
- [`c44b29b`](https://github.com/cline/cline/commit/c44b29b002d09b42ceadc40429335d0ab382f318) Fix Windows CLI tests related to `/q` and `/exit` (#9747) — _@candieduniverse_
- [`bb4e397`](https://github.com/cline/cline/commit/bb4e397a5131ecec15fce89da9aab7103fb84b02) chore(deps): bump undici from 7.20.0 to 7.24.3 (#9825) — _@dependabot[bot]_
- [`9824d8d`](https://github.com/cline/cline/commit/9824d8d476872898e40d9815eeead256ee009471) Bump CLI version from 2.7.0 to 2.7.1 — _@saoudrizwan_
- [`a46c528`](https://github.com/cline/cline/commit/a46c5288caaa04ec6fe47bc5e731c68749d8ecef) Fix Notification hook getting called by command output asks — _@saoudrizwan_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
