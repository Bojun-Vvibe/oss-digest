# cline/cline — 2026-04-16

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-04-15T23:59:59.000Z → 2026-04-16T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v3.79.0 ships with Claude Opus 4.7 support

The headline today is the **v3.79.0 release** ([#10292](https://github.com/cline/cline/pull/10292), tag published 20:16 UTC). It bundles Claude Opus 4.7 model support, Azure Blob Storage as a storage provider, `globalSkills` in remote config, and inline value reuse in user-level remote-config discovery. Fixes include cache-reflection accounting for Cline/Vercel handlers, a stuck `command_output` ask when terminals exit unexpectedly, `use_subagents` wiring for GLM/Hermes/XS system prompts, and an action-injection security fix. The deprecated evals tool was removed.

The Opus 4.7 plumbing landed earlier in the day via [#10286](https://github.com/cline/cline/pull/10286) (saoudrizwan), which wires the model across provider registries and dynamic discovery layers without yet flipping defaults — also notable because Opus 4.7 rejects some legacy params, which the PR strips. The cache-reflection fix in [#10266](https://github.com/cline/cline/pull/10266) (arafatkatze) is worth a look if you care about token accounting: `cline` and `vercel-ai-gateway` handlers were hardcoding `cacheWriteTokens: 0` even when providers exposed `cache_creation_input_tokens`; non-cached input counts now subtract cache writes, with regression tests added.

CI maintenance: [#10291](https://github.com/cline/cline/pull/10291) hardens flaky Windows test paths (global-hook cwd timeouts, CLI skills panel interactions) — useful context if you've seen Windows job noise recently.

On the security/dep front, two Aikido autofix PRs were closed unmerged ([#10273](https://github.com/cline/cline/pull/10273) covering axios SSRF, node-forge cert/signature issues, basic-ftp DoS and 6 others; [#10191](https://github.com/cline/cline/pull/10191) for langium RCE and lodash-es prototype pollution), and a smaller dependabot bump for basic-ftp 5.2.0→5.2.2 ([#10217](https://github.com/cline/cline/pull/10217)) was superseded by [#10284](https://github.com/cline/cline/pull/10284) (→5.3.0, still open). Worth confirming how the axios/node-forge advisories are being addressed if those autofixes were rejected.

New open PRs to watch: [#10288](https://github.com/cline/cline/pull/10288) fixes a real 404 bug for Vertex AI's `global` region with Claude (the SDK builds a non-existent `global-aiplatform.googleapis.com` host), and [#9961](https://github.com/cline/cline/pull/9961) gates the Kanban TUI behind a `kanbanEnabled` remote-config check. No new issues filed.

## Releases

- **[v3.79.0](https://github.com/cline/cline/releases/tag/v3.79.0)** — v3.79.0 _by @github-actions[bot] at 2026-04-16T20:16:59Z_
  > ### Added
  > 
  > - Add Claude Opus 4.7 model support
  > - Add Azure Blob Storage as a storage provider
  > - Add `globalSkills` to remote config
  > - Inline value reuse in user-level remote-config discovery
  > 
  > ### Fixed
  > 
  > - Fix cache reflection for Cline and Vercel API handlers
  > - Fix stuck `command_output` ask when terminal command ends unexpectedly
  > - Add `use_subagents` to system prompt for GLM, Hermes, and XS models
  > - Fix action injection security risk
  > 
  > ### Changed
  > 
  > - Remove deprecated evals tool
  > 
  > **Full Changel…


## Merged PRs

- [#10292](https://github.com/cline/cline/pull/10292) **v3.79.0 Release Notes** — _by @arafatkatze, merged 2026-04-16T19:26:10Z_
- [#10286](https://github.com/cline/cline/pull/10286) **feat(models): prepare Claude Opus 4.7 provider support** — _by @saoudrizwan, merged 2026-04-16T19:02:28Z_
- [#10291](https://github.com/cline/cline/pull/10291) **fix: Stabilize flaky Windows CI test paths** — _by @candieduniverse, merged 2026-04-16T18:27:57Z_
- [#10266](https://github.com/cline/cline/pull/10266) **Fix cache reflection for Cline and Vercel handlers** — _by @arafatkatze, merged 2026-04-16T00:47:16Z_


## Open PRs (new or updated)

- [#9961](https://github.com/cline/cline/pull/9961) **Verify Kanban is enabled before launching it [PF-632]** — _by @BarreiroT, updated 2026-04-16T19:14:46Z_
- [#10288](https://github.com/cline/cline/pull/10288) **fix: use correct base URL for Vertex AI global endpoint with Claude models** — _by @WandLZhang, updated 2026-04-16T11:15:23Z_
- [#10284](https://github.com/cline/cline/pull/10284) **chore(deps): bump basic-ftp from 5.2.0 to 5.3.0** — _by @dependabot[bot], updated 2026-04-16T02:44:51Z_


## Closed PRs (not merged)

- [#10273](https://github.com/cline/cline/pull/10273) **[Aikido] Fix 20 security issues in axios, node-forge, basic-ftp and 6 more** — _by @aikido-autofix[bot], closed 2026-04-16T22:48:25Z_
- [#10191](https://github.com/cline/cline/pull/10191) **[Aikido] Fix 2 security issues in langium, lodash-es** — _by @aikido-autofix[bot], closed 2026-04-16T22:48:18Z_
- [#10217](https://github.com/cline/cline/pull/10217) **chore(deps): bump basic-ftp from 5.2.0 to 5.2.2** — _by @dependabot[bot], closed 2026-04-16T02:44:50Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`9405419`](https://github.com/cline/cline/commit/9405419efebb76a518c12daedd87a8b6cfb653b9) v3.79.0 Release Notes (#10292) — _@arafatkatze_
- [`f53dcb3`](https://github.com/cline/cline/commit/f53dcb3096ec6086e201e3bbe6b6d23c1f64c61e) feat(models): prepare Claude Opus 4.7 provider support (#10286) — _@saoudrizwan_
- [`afa32bf`](https://github.com/cline/cline/commit/afa32bf80105eaf1ef6ffe95fcfcc738124b07b5) fix: Stabilize flaky Windows CI test paths (#10291) — _@candieduniverse_
- [`2d2d9d8`](https://github.com/cline/cline/commit/2d2d9d829a6073b1b2356bca45c6b3d394050500) fix cache reflection for cline and vercel handlers (#10266) — _@arafatkatze_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
