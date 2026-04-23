# cline/cline — 2026-04-20

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-04-19T23:59:59.000Z → 2026-04-20T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change today is a memory ceiling bump for the cline-core Node process: PR [#10290](https://github.com/cline/cline/pull/10290) (commit [f6a9a02](https://github.com/cline/cline/commit/f6a9a02500dc63dfacb6c5c0a0ac4c9a1f9f11bb)) sets `--max-old-space-size=8192`, which should reduce OOMs on large tasks. It is the only merge of the day — no releases were cut.

The most interesting new work in flight is a chat UX overhaul: PR [#10331](https://github.com/cline/cline/pull/10331) ("redesign chat toolbar with popup panels") removes `AutoApproveBar` from the main `ChatView` footer and consolidates file/image attach plus the auto-approve accordion behind a new `PlusPopup`. Reviewers of the webview should weigh in early — this materially changes the default chat surface.

On the backend, PR [#10329](https://github.com/cline/cline/pull/10329) (draft, `feat(cost-control): enforce third-party API spend limits [PF-672]`) extends the existing Cline-provider spend-limit enforcement to Anthropic/OpenAI/Gemini by checking cached budget status before each request, reusing `SpendLimitError` with zero webview changes — relevant for enterprise deployments.

Security housekeeping continues via Aikido bot: [#10321](https://github.com/cline/cline/pull/10321) (21 critical issues across protobufjs/node-forge/basic-ftp et al.) and [#10310](https://github.com/cline/cline/pull/10310) (follow-redirects) were closed unmerged today, while a fresh [#10332](https://github.com/cline/cline/pull/10332) targets follow-redirects + axios CVEs. Worth confirming whether the closed ones were superseded or rejected. Maintainer `maxpaulus43` also closed three older CLI PRs without merging: [#9797](https://github.com/cline/cline/pull/9797) (TUI VCR/nock e2e fixtures), [#9574](https://github.com/cline/cline/pull/9574), and [#9570](https://github.com/cline/cline/pull/9570) (duplicate `completion_result` fix).

New issues to watch: [#10325](https://github.com/cline/cline/issues/10325) reports `agent.shutdown()` hanging indefinitely in Cline SDK CLI usage (v2.15.0) following the documented example — likely related to the still-open [#10126](https://github.com/cline/cline/pull/10126), which awaits `tearDown()` in `deactivate()` to fix slow extension-host shutdown (#10051). [#10328](https://github.com/cline/cline/issues/10328) and [#10278](https://github.com/cline/cline/issues/10278) appear to be misfiled/spam-ish ("Sixth" extension; CLI on Windows 10) and are lower priority.

## Releases

_None in window._


## Merged PRs

- [#10290](https://github.com/cline/cline/pull/10290) **fix: set --max-old-space-size=8192 for cline-core node process** — _by @mkondratek, merged 2026-04-20T16:42:09Z_


## Open PRs (new or updated)

- [#10331](https://github.com/cline/cline/pull/10331) **feat(ui): redesign chat toolbar with popup panels** — _by @raidengr40, updated 2026-04-20T23:11:45Z_
- [#10332](https://github.com/cline/cline/pull/10332) **[Aikido] Fix 3 security issues in follow-redirects, axios** — _by @aikido-autofix[bot], updated 2026-04-20T22:49:04Z_
- [#10126](https://github.com/cline/cline/pull/10126) **fix: await tearDown() in deactivate() to prevent slow extension host …** — _by @ClineXDiego, updated 2026-04-20T16:52:15Z_
- [#10329](https://github.com/cline/cline/pull/10329) _(draft)_ **feat(cost-control): enforce third-party API spend limits [PF-672]** — _by @RobertoLangarica, updated 2026-04-20T16:24:58Z_


## Closed PRs (not merged)

- [#10321](https://github.com/cline/cline/pull/10321) **[Aikido] Fix 21 critical issues in protobufjs, node-forge, basic-ftp and 8 more** — _by @aikido-autofix[bot], closed 2026-04-20T22:47:57Z_
- [#10310](https://github.com/cline/cline/pull/10310) **[Aikido] Fix security issue in follow-redirects via minor version upgrade from 1.15.11 to 1.16.0 in evals** — _by @aikido-autofix[bot], closed 2026-04-20T22:47:09Z_
- [#9797](https://github.com/cline/cline/pull/9797) **add tui UI tests** — _by @maxpaulus43, closed 2026-04-20T19:22:44Z_
- [#9574](https://github.com/cline/cline/pull/9574) **user can submit message even after getting an api failure** — _by @maxpaulus43, closed 2026-04-20T19:22:44Z_
- [#9570](https://github.com/cline/cline/pull/9570) **fix clineagent logic to prevent duplicate completion_result messages** — _by @maxpaulus43, closed 2026-04-20T19:22:43Z_
- [#10309](https://github.com/cline/cline/pull/10309) **[Aikido] Fix critical issue in protobufjs via minor version upgrade from 7.5.2 to 7.5.5 in standalone** — _by @aikido-autofix[bot], closed 2026-04-20T01:04:44Z_


## Notable Issues

- [#10278](https://github.com/cline/cline/issues/10278) **Cline CLI fails with "cannot access the file claude" error when creating new tasks on Windows 10** _[VS Code]_ — _by @Nils-dev-mertens_
- [#10328](https://github.com/cline/cline/issues/10328) **Unable to switch AI model in Sixth; provider settings are missing in VS Code** _[VS Code]_ — _by @funnyname952-coder_
- [#1146](https://github.com/cline/cline/issues/1146) **Executing terminal commands hangs cline** — _by @incrypto32_ _(closed 2025-01-23T23:57:29Z)_
- [#10325](https://github.com/cline/cline/issues/10325) **Cline SDK: agent.shutdown() may block indefinitely in CLI usage** _[CLI]_ — _by @HAOHANJI_


## Commits on `main`

- [`f6a9a02`](https://github.com/cline/cline/commit/f6a9a02500dc63dfacb6c5c0a0ac4c9a1f9f11bb) fix: set --max-old-space-size=8192 for cline-core node process (#10290) — _@mkondratek_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
