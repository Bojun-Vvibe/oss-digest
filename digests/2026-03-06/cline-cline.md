# cline/cline — 2026-03-06

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-05T23:59:59.000Z → 2026-03-06T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Cline shipped **v3.71.0** today, headlined by GPT-5.4 model support for ChatGPT subscription users (#9692), a new `Notification` runtime hook for attention/completion boundaries (#9699), and more reliable streamable-HTTP MCP reconnects. The release commit is #9706.

The most consequential developer-facing change is on the **CLI/orchestration surface**, where Saoud Rizwan landed three flags in a stacked series:
- `--hooks-dir` (#9658) injects a per-session hooks directory at spawn time so orchestrators no longer have to mutate the user's global/workspace hooks dirs (which broke under concurrent sessions).
- `--auto-approve-all` (#9698) gives interactive TUI users a launch-time auto-approve toggle distinct from `-y/--yolo`, which had been forcing plain-text mode.
- A still-open follow-up #9696 fixes the ACP launch path silently dropping `config` and `cwd` before they reached `ClineAgent`.

Several **agent-quality fixes** also merged. #9424 (ClineXDiego) finally handles `thinking` and `redacted_thinking` blocks in Bedrock's Converse API, fixing the "Unsupported content type: thinking" warning that was silently dropping reasoning on Opus 4.6 (#9269). On the reliability side, candieduniverse stabilized flaky Windows hook tests by caching PowerShell launcher resolution (#9690) and gated the broader hooks system behind a default-off feature toggle (#9671). BarreiroT wired up CLI process-level error autocapture plus a React error boundary (#9686).

Robin Newhouse pushed a batch of eval-harness improvements that appear to have been **closed without merge** (worth checking status): chunked `read_file` with `start_line/end_line` pagination (#9655, builds on #9371), a `--auto-condense` flag exposing existing AI context-compaction (#9687), tool-specific error messages for malformed `replace_in_file`/`execute_command` calls (#9685, addressing 6% of SWE-bench failures), and in-generation text-loop detection for runaway Gemini Flash streams (#9682).

Notable still-open: #9675 adds `claude-4.6-opus` to the model list, and #9636 adds `gemini-3.1-pro-preview-customtools` to Gemini/Vertex.

## Releases

- **[v3.71.0](https://github.com/cline/cline/releases/tag/v3.71.0)** — v3.71.0 _by @github-actions[bot] at 2026-03-06T18:32:26Z_
  > ### Added
  > 
  > - Added GPT-5.4 models for ChatGPT subscription users
  > - Hooks: Added a `Notification` hook for attention and completion boundaries
  > 
  > ### Fixed
  > 
  > - Handle streamable HTTP MCP reconnects more reliably after disconnects
  > 
  > **Full Changelog**: https://github.com/cline/cline/compare/v2.6.0-cli...v3.71.0


## Merged PRs

- [#9686](https://github.com/cline/cline/pull/9686) **[ENG-1571] Enable CLI Error autocapture** — _by @BarreiroT, merged 2026-03-06T19:39:44Z_
- [#9690](https://github.com/cline/cline/pull/9690) **Fix flaky hooks tests on Windows** — _by @candieduniverse, merged 2026-03-06T18:46:34Z_
- [#9424](https://github.com/cline/cline/pull/9424) **fix(bedrock): handle thinking and redacted_thinking blocks in message conversion and streaming** — _by @ClineXDiego, merged 2026-03-06T18:41:43Z_
- [#9698](https://github.com/cline/cline/pull/9698) **feat(cli): add --auto-approve-all flag for interactive mode** — _by @saoudrizwan, merged 2026-03-06T10:09:00Z_
- [#9658](https://github.com/cline/cline/pull/9658) **feat(cli): add --hooks-dir flag for runtime hook injection** — _by @saoudrizwan, merged 2026-03-06T07:33:41Z_
- [#9706](https://github.com/cline/cline/pull/9706) **release changelog and version bump** — _by @maxpaulus43, merged 2026-03-06T17:45:20Z_
- [#9699](https://github.com/cline/cline/pull/9699) **feat(hooks): add Notification hook for attention boundaries** — _by @saoudrizwan, merged 2026-03-06T10:07:25Z_
- [#9692](https://github.com/cline/cline/pull/9692) **Adding gpt 5.4 models to chatgpt subscripiton** — _by @arafatkatze, merged 2026-03-06T02:06:17Z_


## Open PRs (new or updated)

- [#9696](https://github.com/cline/cline/pull/9696) **fix(acp): forward cli config and cwd to agent** — _by @saoudrizwan, updated 2026-03-06T17:41:51Z_
- [#9636](https://github.com/cline/cline/pull/9636) **Add gemini-3.1-pro-preview-customtools to Gemini and Vertex providers** — _by @CodeForContribute, updated 2026-03-06T15:10:22Z_
- [#9675](https://github.com/cline/cline/pull/9675) **Add new model 'anthropic--claude-4.6-opus' to list** — _by @shaheerxt, updated 2026-03-06T07:21:05Z_


## Closed PRs (not merged)

- [#9691](https://github.com/cline/cline/pull/9691) **[Aikido] Fix 15 security issues in @aws-sdk/xml-builder, underscore, axios and 5 more** — _by @aikido-autofix[bot], closed 2026-03-06T23:35:52Z_
- [#9368](https://github.com/cline/cline/pull/9368) **[Aikido] Fix 2 security issues in preact, mermaid, chevrotain and 1 more** — _by @aikido-autofix[bot], closed 2026-03-06T23:35:19Z_
- [#9655](https://github.com/cline/cline/pull/9655) **feat(read_file): add chunked reading with start_line/end_line** — _by @robinnewhouse, closed 2026-03-06T02:45:25Z_
- [#9687](https://github.com/cline/cline/pull/9687) **Add --auto-condense CLI flag for AI-powered context compaction** — _by @robinnewhouse, closed 2026-03-06T01:58:16Z_
- [#9566](https://github.com/cline/cline/pull/9566) **chore(deps-dev): bump storybook from 9.1.17 to 9.1.19 in /webview-ui** — _by @dependabot[bot], closed 2026-03-06T12:04:52Z_
- [#9685](https://github.com/cline/cline/pull/9685) **fix: add tool-specific error messages for replace_in_file and execute_command** — _by @robinnewhouse, closed 2026-03-06T01:58:14Z_
- [#9682](https://github.com/cline/cline/pull/9682) **fix: detect and abort in-generation text loops during streaming** — _by @robinnewhouse, closed 2026-03-06T01:51:41Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`6ccd662`](https://github.com/cline/cline/commit/6ccd662a1f60956b67a5030863fdcf92a22421c3) Hooks: Add feature toggle (toggled off by default) (#9671) — _@candieduniverse_
- [`a2fa4d3`](https://github.com/cline/cline/commit/a2fa4d3b923d958bf1d3cf5bb10bc77e07c5ac79) [ENG-1571] Enable CLI Error autocapture (#9686) — _@BarreiroT_
- [`c8f8137`](https://github.com/cline/cline/commit/c8f81374a3c3c5af1d23a4b716e4114d563874c3) Fix flaky hooks tests on Windows (#9690) — _@candieduniverse_
- [`eb25634`](https://github.com/cline/cline/commit/eb25634bd466b829df044ba242cce76f03e07543) fix(bedrock): handle thinking and redacted_thinking blocks in message conversion and streaming (#9424) — _@ClineXDiego_
- [`1753d9d`](https://github.com/cline/cline/commit/1753d9dc15442e262570727c3e3ebf89294ca47a) release changelog and version bump (#9706) — _@maxpaulus43_
- [`a562868`](https://github.com/cline/cline/commit/a562868cb90039afc0b6ac80e82e6554f3c7d90e) feat(cli): add --auto-approve-all flag for interactive mode (#9698) — _@saoudrizwan_
- [`bf52657`](https://github.com/cline/cline/commit/bf5265758f93f5827f765ac300e796f326cf1fd9) feat(hooks): add Notification hook for attention boundaries (#9699) — _@saoudrizwan_
- [`469752a`](https://github.com/cline/cline/commit/469752a20161c61da92d4cda15a2c1ef4ae411f4) feat(cli): add --hooks-dir flag for runtime hook injection (#9658) — _@saoudrizwan_
- [`8fb2e8a`](https://github.com/cline/cline/commit/8fb2e8a3aad74f11dc709bd3293a5d723a9c74f9) Adding gpt 5.4 models to chatgpt subscripiton (#9692) — _@arafatkatze_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
