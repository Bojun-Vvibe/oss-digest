# cline/cline — 2026-04-23

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-04-22T23:59:59.000Z → 2026-04-23T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a security pin: **#10365** lands `protobufjs` at 7.5.5 across all workspaces to remediate **CVE-2026-41242**, a critical arbitrary code execution vuln. `protobufjs` is a transitive dep (via `@grpc/proto-loader`) and was previously resolving to 7.5.4 / 7.5.2; the pin is enforced via npm `overrides`. Worth pulling immediately if you're on a recent Cline build.

Also merged: **#10343** adds periodic memory logging to `cline-core` (a lightweight memory monitor for observability — useful background for anyone debugging long-session leaks), and **#10363** strips the demo gif from the README to reduce page weight.

On the docs/SDK front, **#10350** (open) is significant: Saoud is publishing 27 Mintlify pages documenting the upcoming **Cline SDK** (`@clinebot/core`, `@clinebot/agents`, `@clinebot/llms`, `@clinebot/shared`) under a new top-level "SDK" tab. This is the first public surface area for the modular TypeScript framework that powers the CLI, VS Code extension, and JetBrains plugin — read this if you're tracking Cline's platform direction.

Two notable bug fixes are in flight. **#10369** strips the `data:image/...;base64,` prefix before sending images to Ollama, fixing vision models (`qwen3-vl`, `llava`) that silently ignored images — directly addresses **#10368**. **#10319** fixes stale model pricing metadata when switching models via the "Recommended" or "NEW" chips in Settings (issue #10248), where users were seeing "Free" for paid models.

New issues worth triaging: **#10370** reports Cline corrupting YAML files by truncating `metadata:` to `meta` during edits (3.80.0, VS Code) — looks like a serious diff/replace regression. **#10330** documents repeated empty-stream failures on AWS Bedrock that hit the 6-mistake limit, and **#10352** notes that duplicate `@file` references in a prompt freeze Cline.

Housekeeping: dependabot opened bulk bumps for `uuid` 11→14 (#10367, #10364) and another npm_and_yarn group bump (#10366); the prior batch (#10305, #10299, #10300) was closed in favor of #10365's targeted pin. No releases shipped today.

## Releases

_None in window._


## Merged PRs

- [#10343](https://github.com/cline/cline/pull/10343) **feat(memory-observability): add periodic memory logging to cline-core** — _by @mkondratek, merged 2026-04-23T04:34:52Z_
- [#10365](https://github.com/cline/cline/pull/10365) **fix: pin protobufjs to 7.5.5 to address CVE-2026-41242** — _by @TheRealSpencer, merged 2026-04-23T03:22:32Z_
- [#10363](https://github.com/cline/cline/pull/10363) **docs: remove demo video from README** — _by @saoudrizwan, merged 2026-04-23T01:46:17Z_


## Open PRs (new or updated)

- [#10350](https://github.com/cline/cline/pull/10350) **docs: add SDK documentation** — _by @saoudrizwan, updated 2026-04-23T08:21:17Z_
- [#10319](https://github.com/cline/cline/pull/10319) **fix: Model metadata fails to update when change model (#10248)** — _by @water-in-stone, updated 2026-04-23T07:51:42Z_
- [#10369](https://github.com/cline/cline/pull/10369) **fix(ollama): strip data URI prefix from images for Ollama API compati…** — _by @alkul93123, updated 2026-04-23T07:29:25Z_
- [#10367](https://github.com/cline/cline/pull/10367) **chore(deps): bump uuid from 11.1.0 to 14.0.0** — _by @dependabot[bot], updated 2026-04-23T03:41:22Z_
- [#10366](https://github.com/cline/cline/pull/10366) **chore(deps): bump the npm_and_yarn group across 4 directories with 11 updates** — _by @dependabot[bot], updated 2026-04-23T03:26:51Z_
- [#10160](https://github.com/cline/cline/pull/10160) **chore(deps): bump vite from 7.3.1 to 7.3.2** — _by @dependabot[bot], updated 2026-04-23T03:25:55Z_
- [#10157](https://github.com/cline/cline/pull/10157) **chore(deps-dev): bump vite from 7.2.2 to 7.3.2 in /webview-ui** — _by @dependabot[bot], updated 2026-04-23T03:24:20Z_
- [#10364](https://github.com/cline/cline/pull/10364) **chore(deps): bump uuid from 9.0.1 to 14.0.0 in /webview-ui** — _by @dependabot[bot], updated 2026-04-23T00:18:29Z_


## Closed PRs (not merged)

- [#10258](https://github.com/cline/cline/pull/10258) **WIP not ready for review** — _by @dominiccooney, closed 2026-04-23T04:35:54Z_
- [#10305](https://github.com/cline/cline/pull/10305) **chore(deps): bump the npm_and_yarn group across 5 directories with 12 updates** — _by @dependabot[bot], closed 2026-04-23T03:25:29Z_
- [#10299](https://github.com/cline/cline/pull/10299) **chore(deps): bump protobufjs from 7.5.4 to 7.5.5** — _by @dependabot[bot], closed 2026-04-23T03:24:02Z_
- [#10300](https://github.com/cline/cline/pull/10300) **chore(deps): bump protobufjs from 7.5.4 to 7.5.5 in /webview-ui** — _by @dependabot[bot], closed 2026-04-23T03:24:02Z_


## Notable Issues

- [#7753](https://github.com/cline/cline/issues/7753) **Cline Core fails to start on Android Studio Otter (2025.2.1) – “Healthcheck timed out”** _[JetBrains, Bot Responded]_ — _by @amanjha7096_ _(closed 2026-04-23T10:25:21Z)_
- [#10208](https://github.com/cline/cline/issues/10208) **Stuck thinking for ever.** _[VS Code]_ — _by @Susanoo1337_
- [#10370](https://github.com/cline/cline/issues/10370) **Cline removes "data:" on lines that contain "metadata:" on YAML files** _[VS Code]_ — _by @mperlinesfortes_
- [#9522](https://github.com/cline/cline/issues/9522) **OpenRouter Provider gives me a Error 401** _[CLI]_ — _by @HEIN390_ _(closed 2026-02-26T22:15:10Z)_
- [#10368](https://github.com/cline/cline/issues/10368) **Bug: Ollama vision models fail to process images due to incorrect Base64 format** _[VS Code]_ — _by @alkul93123_
- [#10330](https://github.com/cline/cline/issues/10330) **Model stream repeatedly ends without producing output when using AWS Bedrock — hits consecutive mistake limit** _[VS Code]_ — _by @shubhamgowdaa_
- [#10135](https://github.com/cline/cline/issues/10135) **Claude Code API Provider: Command failed with exit code 1 for all sonnet models** _[JetBrains]_ — _by @emrul_
- [#10035](https://github.com/cline/cline/issues/10035) **Save/Reject buttons become disabled on second file during multi-file edit approval** _[JetBrains, P3]_ — _by @AlexeySa_
- [#9167](https://github.com/cline/cline/issues/9167) **Error using grok-code-fast-1** _[stale, Model Quality, JetBrains, Bot Responded]_ — _by @mjgchase_ _(closed 2026-04-23T02:14:41Z)_
- [#9340](https://github.com/cline/cline/issues/9340) **Add image/vision support for multimodal models** _[Help Wanted, stale, CLI]_ — _by @Daniel-Santiago-Acosta-1013_
- [#10352](https://github.com/cline/cline/issues/10352) **Duplicate references cause cline to freeze** _[VS Code]_ — _by @Andre-Medina_


## Commits on `main`

- [`70f0e8d`](https://github.com/cline/cline/commit/70f0e8d548329f72e4c70378c377847d1f5ce2ed) feat(memory-observability): add periodic memory logging to cline-core (#10343) — _@mkondratek_
- [`5accd88`](https://github.com/cline/cline/commit/5accd88d731c2574660429fdc2fa8751b42d4add) fix: pin protobufjs to 7.5.5 to address CVE-2026-41242 (#10365) — _@TheRealSpencer_
- [`5b29be6`](https://github.com/cline/cline/commit/5b29be63b890b1b83d671c08d8e64b9b3e6c0931) docs: remove demo video from README (#10363) — _@saoudrizwan_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
