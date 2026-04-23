# cline/cline — 2026-03-13

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-12T23:59:59.000Z → 2026-03-13T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is a consolidated fix for parallel tool-calling (#9738), which threads the `enableParallelToolCalling` setting through API config into the OpenRouter and Cline handlers and supersedes the earlier #9727/#9728 attempts. A follow-up (#9768) fixes a related Gemini-native bug where multiple `functionCall` parts under a single `responseId` collided on tool-call ID, breaking downstream aggregation. Anyone using Gemini 3 or OpenRouter with parallel tool calls should pull these.

Two CLI stability fixes from dominiccooney land in the same vein: #9730 catches `File not found` in `ReadFileToolHandler` so a hallucinated path no longer terminates the task, and #9732 extends the same try/catch pattern to `ListCodeDefinitionNames`, `ListFiles`, and `SearchFiles` handlers. Together these meaningfully reduce CLI crash-on-bad-path failures (observed in SWE-bench-style runs with gemini-3-flash-preview). A small related CLI fix (commit 7b25a21) adds `-y` to `npx kanban` to auto-confirm install.

On the provider side, W&B Inference by CoreWeave is now a first-class provider (#9800), authenticated by a W&B API key with a static model catalog and UI/CLI integration. Two earlier attempts (#9793, the broader "Wandb Inference Provider" with Kimi-K2.5 in the free list, and #9771 nock recording infra) were closed unmerged in favor of the slimmer landings; the nock HTTP-recording test infra was reopened as #9798 and also closed unmerged — worth tracking if you care about VCR-style tests via `CLINE_VCR`.

Notable open PRs to watch: #9777 fixes truncation of VS Code LM model names for BYOK providers like Copilot/OpenRouter (e.g. `copilot/openai/gpt-4o` losing `gpt-4o`); #9780 makes paste and drag-drop respect the `supportsImages` toggle; #9781 adds an optional API key field to the LM Studio provider; #9794 (draft) introduces workspace-aware task history grouping/filtering; and #7858 fixes env-var propagation when the default terminal profile is "Default". #9520 continues to push Qwen 3.5 model support with 1M context and thinking. No releases or new issues in the window.

## Releases

_None in window._


## Merged PRs

- [#9800](https://github.com/cline/cline/pull/9800) **feat: Add W&B Inference by Coreweave as provider** — _by @MBakirWB, merged 2026-03-13T23:06:35Z_
- [#9738](https://github.com/cline/cline/pull/9738) **fix: consolidate Parallel tool-calling fixes** — _by @arafatkatze, merged 2026-03-13T16:20:23Z_
- [#9768](https://github.com/cline/cline/pull/9768) **fix gemini toolcall id collision** — _by @arafatkatze, merged 2026-03-13T13:35:09Z_
- [#9732](https://github.com/cline/cline/pull/9732) **fix: catch errors in path-based tool handlers instead of crashing** — _by @dominiccooney, merged 2026-03-13T03:58:06Z_
- [#9730](https://github.com/cline/cline/pull/9730) **fix: catch file-not-found in ReadFileToolHandler instead of crashing CLI** — _by @dominiccooney, merged 2026-03-13T01:52:33Z_


## Open PRs (new or updated)

- [#7858](https://github.com/cline/cline/pull/7858) **fix: enhance terminal creation with environment configuration** — _by @Siva-Sai22, updated 2026-03-13T19:08:06Z_
- [#9777](https://github.com/cline/cline/pull/9777) **fix: prevent VS Code LM model name truncation for BYOK providers** — _by @elliotllliu, updated 2026-03-13T18:53:27Z_
- [#9780](https://github.com/cline/cline/pull/9780) **fix: respect supportsImages toggle for paste and drag-drop** — _by @elliotllliu, updated 2026-03-13T18:53:05Z_
- [#9781](https://github.com/cline/cline/pull/9781) **feat: add API key field to LM Studio provider** — _by @elliotllliu, updated 2026-03-13T18:52:40Z_
- [#9794](https://github.com/cline/cline/pull/9794) _(draft)_ **feat: workspace-aware task history with grouping and filtering** — _by @trupix, updated 2026-03-13T17:17:41Z_
- [#9520](https://github.com/cline/cline/pull/9520) **Add Qwen 3.5 models with extended context and thinking support** — _by @wenmengzhou, updated 2026-03-13T08:10:15Z_


## Closed PRs (not merged)

- [#9798](https://github.com/cline/cline/pull/9798) **add nock library to Cline CLI** — _by @maxpaulus43, closed 2026-03-13T18:30:11Z_
- [#9793](https://github.com/cline/cline/pull/9793) **Feat: Wandb Inference Provider** — _by @MBakirWB, closed 2026-03-13T18:04:46Z_
- [#9771](https://github.com/cline/cline/pull/9771) **add nock http recording functionality** — _by @maxpaulus43, closed 2026-03-13T17:46:44Z_
- [#7190](https://github.com/cline/cline/pull/7190) **Handle large context errors for the SAP AI Core provider** — _by @brambar5, closed 2026-03-13T16:26:18Z_
- [#7024](https://github.com/cline/cline/pull/7024) **Allow SAP AI Core configuration in the CLI** — _by @brambar5, closed 2026-03-13T16:25:18Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`91b947d`](https://github.com/cline/cline/commit/91b947de697762592b7f6af20698a88b67d21f06) feat: Add W&B Inference by Coreweave as provider (#9800) — _@MBakirWB_
- [`7b25a21`](https://github.com/cline/cline/commit/7b25a21b26fd4272dfa2854d38382f03f89f2d45) fix(cli): add -y flag to npx kanban to auto-confirm install — _@saoudrizwan_
- [`1d1071d`](https://github.com/cline/cline/commit/1d1071dcf5c05e74ce9b10e02a45679c30ef377b) fix: consolidate Parallel tool-calling fixes (#9738) — _@arafatkatze_
- [`8d07b7d`](https://github.com/cline/cline/commit/8d07b7d6cb4f45dc164f96c017d8164e427aa35b) fix: catch errors in path-based tool handlers instead of crashing (#9732) — _@dominiccooney_
- [`aacc69a`](https://github.com/cline/cline/commit/aacc69a558b87ec1cb1d4f4122d0198adfa2c4ff) fix: catch file-not-found in ReadFileToolHandler instead of crashing CLI (#9730) — _@dominiccooney_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
