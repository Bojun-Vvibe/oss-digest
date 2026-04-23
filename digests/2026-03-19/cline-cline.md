# cline/cline — 2026-03-19

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-18T23:59:59.000Z → 2026-03-19T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v3.74.0 ships with dynamic free-model detection and read deduplication

The headline today is the **v3.74.0 release** ([release notes PR #9879](https://github.com/cline/cline/pull/9879), commit `bde7049`). Notable additions include dynamic free-model detection for the Cline API, a file-read deduplication cache to avoid repeated reads, and a feature-tips tooltip shown during the thinking state. Fixes span login error messaging, modal padding alignment, WebP skipping for GLM/Devstral via llama.cpp, respecting user-configured context windows in LiteLLM `getModel()`, and honoring explicit model IDs outside the static catalog in the W&B provider.

The release is anchored by [#9878](https://github.com/cline/cline/pull/9878) (merged), which replaces the hardcoded free-models list with runtime resolution via `refreshClineRecommendedModels`, falling back to static defaults and normalizing model IDs for consistent comparison — worth a read if you maintain provider integrations.

Two notable PRs were **closed without merging** but still flag important signals:
- [#9876](https://github.com/cline/cline/pull/9876) attempted to fix an infinite loop in MCP tool calls caused by the `task_progress` parameter (the focus-chain system injects it into all tool specs, but MCP servers reject the unknown param, triggering retry loops). Closes #9684 — likely to resurface; worth tracking.
- [#9872](https://github.com/cline/cline/pull/9872) proposed adding xAI's grok-4.20 beta series and removing 16 deprecated models (grok-2.x, grok-3 betas, legacy variants); closed quickly, suggesting an alternative path for catalog updates.

Two Aikido autofix dependency PRs were closed unmerged: [#9875](https://github.com/cline/cline/pull/9875) (20 CVEs across hono, simple-git, @aws-sdk/xml-builder, including 3 critical) and [#9602](https://github.com/cline/cline/pull/9602) (7 CVEs in lodash/zod/ajv). The critical CVEs in #9875 — URL-decoding bypass, RCE in git operations, and XML-entity XSS — likely warrant a manual follow-up.

Open contributions to watch: [#9881](https://github.com/cline/cline/pull/9881) refactors duplicate file-read code in `ReadFileToolHandler`, and [#9882](https://github.com/cline/cline/pull/9882) adds a Simplified Chinese README translation. No new issues or commits beyond the release pair were filed in the window.

## Releases

- **[v3.74.0](https://github.com/cline/cline/releases/tag/v3.74.0)** — v3.74.0 _by @github-actions[bot] at 2026-03-19T02:31:20Z_
  > ### Added
  > - Implement dynamic free model detection for Cline API
  > - Add file read deduplication cache to prevent repeated reads
  > - Add feature tips tooltip during thinking state
  > 
  > ### Fixed
  > - Replace error message when not logged in to Cline
  > - Align ClineRulesToggleModal padding with ServersToggleModal
  > - Skip WebP for GLM and Devstral models running through llama.cpp
  > - Respect user-configured context window in LiteLLM getModel()
  > - Honor explicit model IDs outside static catalog in W&B provider
  > - Ad…


## Merged PRs

- [#9168](https://github.com/cline/cline/pull/9168) **feat: move reasoning effort to model config and settings UX** — _by @saoudrizwan, merged 2026-02-08T00:58:11Z_
- [#9879](https://github.com/cline/cline/pull/9879) **Release v3.74.0 Notes** — _by @arafatkatze, merged 2026-03-19T02:08:50Z_
- [#9878](https://github.com/cline/cline/pull/9878) **feat: implement dynamic free model detection for Cline API** — _by @arafatkatze, merged 2026-03-19T01:55:07Z_


## Open PRs (new or updated)

- [#9881](https://github.com/cline/cline/pull/9881) **refactor: remove duplicate file read code in `ReadFileToolHandler`** — _by @deokjinkim, updated 2026-03-19T04:54:33Z_
- [#9882](https://github.com/cline/cline/pull/9882) **docs: add Simplified Chinese translation (locales/zh-cn/README.md)** — _by @JasonYeYuhe, updated 2026-03-19T04:25:15Z_


## Closed PRs (not merged)

- [#9875](https://github.com/cline/cline/pull/9875) **[Aikido] Fix 20 security issues in hono, simple-git, @aws-sdk/xml-builder and 6 more** — _by @aikido-autofix[bot], closed 2026-03-19T23:48:27Z_
- [#9602](https://github.com/cline/cline/pull/9602) **[Aikido] Fix 7 security issues in lodash, zod, ajv and 2 more** — _by @aikido-autofix[bot], closed 2026-03-19T23:47:54Z_
- [#9872](https://github.com/cline/cline/pull/9872) **feat: update xAI Grok models — add grok-4.20 series, remove deprecated models** — _by @carlesso, closed 2026-03-19T05:17:20Z_
- [#9876](https://github.com/cline/cline/pull/9876) **Fix task_progress parameter causing infinite loop in MCP tool calls** — _by @xr843, closed 2026-03-19T10:43:56Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`bde7049`](https://github.com/cline/cline/commit/bde7049c016352047f033cdfe513743ad0bf6ea9) Release v3.74.0 Notes (#9879) — _@arafatkatze_
- [`7cd0674`](https://github.com/cline/cline/commit/7cd06744adf1a314993eaef4ee89ad2502e3bff3) feat: implement dynamic free model detection for Cline API (#9878) — _@arafatkatze_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
