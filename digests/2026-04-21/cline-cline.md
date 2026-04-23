# cline/cline — 2026-04-21

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-04-20T23:59:59.000Z → 2026-04-21T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is that Cline's VS Code extension has fully removed its foreground terminal path — #10196 (commit 1862f15) completes the migration to a standalone/background-only command runtime, dropping the legacy VS Code terminal execution classes, mode plumbing, and related shell/profile settings. Anyone maintaining terminal-adjacent integrations or custom shell profiles should read this carefully; it touches command execution semantics across the extension.

A second terminal fix landed as well: #10302 unblocks `VscodeTerminalProcess.run()` when VS Code's shell-integration stream never yields (e.g. zsh parse errors on commands like `tail … 2>1& | echo -`), preventing the task from hanging indefinitely. Credit to Taeksu Kim (Samsung) for the investigation.

On the provider/billing side, #10323 (commit c6dbc8b) introduces a dedicated user-facing message for the new `INFERENCE_CAP_ERROR` HTTP 429 returned by the Cline provider when a quota cap is hit — previously these were indistinguishable from generic rate-limit 429s (which are still retried indiscriminately; that's called out as out of scope). #10337 also bumps the SDK migration code to track the latest SDK `main` interface.

Security/deps churn was heavy but mostly unmerged: the Aikido bot's bulk fix #10333 was closed without merging, replaced by a narrower protobufjs-only standalone bump #10346 (CVE-2026-41242, critical code injection). A new `@xmldom/xmldom` 0.8.13 bump #10334 superseded the closed #10082.

Notable new issues worth triaging:
- **Claude Code provider regressions** — #10336 reports the provider forwards Cline's tool vocabulary (`execute_command`, `read_file`) verbatim to the Claude CLI, which only knows `Bash`/`Read`/`Edit`, so every call fails; #10348 notes Enterprise plans aren't tracked for cost (hard-coded assumption at `claude-code.ts:65`).
- **Vertex AI** #10349: the `global` multi-region endpoint returns HTML and breaks claude-opus-4-7 routing.
- **Bedrock + Zscaler** #10339: consistent `ECONNRESET` despite AWS CLI working.
- **Kanban + GitHub Copilot** #10293: Vercel AI SDK can't parse Copilot tool-call responses, while the CLI's direct `openai` package works — useful root-cause writeup.

No releases were cut in the window.

## Releases

_None in window._


## Merged PRs

- [#10337](https://github.com/cline/cline/pull/10337) **use latest sdk main** — _by @abeatrix, merged 2026-04-21T09:56:23Z_
- [#10323](https://github.com/cline/cline/pull/10323) **Adding cline quota exceeded cap error message** — _by @JicLotus, merged 2026-04-21T09:51:41Z_
- [#10196](https://github.com/cline/cline/pull/10196) **Remove foreground terminal from Cline VSCode extension** — _by @candieduniverse, merged 2026-04-21T01:48:12Z_


## Open PRs (new or updated)

- [#10346](https://github.com/cline/cline/pull/10346) **[Aikido] Fix critical issue in protobufjs via minor version upgrade from 7.5.2 to 7.5.5 in standalone** — _by @aikido-autofix[bot], updated 2026-04-21T22:47:50Z_
- [#10243](https://github.com/cline/cline/pull/10243) **fix: DiffViewProvider — await scroll, accurate line count, BOM preservation** — _by @bob10042, updated 2026-04-21T20:16:54Z_
- [#10308](https://github.com/cline/cline/pull/10308) **docs: add QuickSilver Pro provider configuration page** — _by @raullenchai, updated 2026-04-21T18:48:56Z_
- [#10242](https://github.com/cline/cline/pull/10242) **fix: quote file mention paths containing spaces** — _by @bob10042, updated 2026-04-21T18:43:08Z_
- [#10340](https://github.com/cline/cline/pull/10340) _(draft)_ **Master** — _by @MapiiAI, updated 2026-04-21T15:32:29Z_
- [#10334](https://github.com/cline/cline/pull/10334) **chore(deps): bump @xmldom/xmldom from 0.8.11 to 0.8.13** — _by @dependabot[bot], updated 2026-04-21T01:49:56Z_


## Closed PRs (not merged)

- [#10333](https://github.com/cline/cline/pull/10333) **[Aikido] Fix 22 critical issues in protobufjs, node-forge, basic-ftp and 7 more** — _by @aikido-autofix[bot], closed 2026-04-21T22:48:27Z_
- [#10302](https://github.com/cline/cline/pull/10302) **fix(vscode-terminal): unblock run() when shell integration stream never yields** — _by @robinnewhouse, closed 2026-04-21T21:39:44Z_
- [#10082](https://github.com/cline/cline/pull/10082) **chore(deps): bump @xmldom/xmldom from 0.8.11 to 0.8.12** — _by @dependabot[bot], closed 2026-04-21T01:49:56Z_


## Notable Issues

- [#10349](https://github.com/cline/cline/issues/10349) **vertexAI multi region** _[VS Code]_ — _by @MorioSakumura_
- [#10123](https://github.com/cline/cline/issues/10123) **Cline kanban run_commands one or more tool calls were invalid or missing required parameters** _[CLI, SDK]_ — _by @awodij_ _(closed 2026-04-06T22:28:53Z)_
- [#10046](https://github.com/cline/cline/issues/10046) **Cline Kanban cannot access model name from LiteLLM (but working properly in cline TUI and cline VScode ext)** _[CLI, SDK]_ — _by @tripang1702_ _(closed 2026-04-01T18:42:29Z)_
- [#9683](https://github.com/cline/cline/issues/9683) **Skills not loading anymore when needed or asked.** _[JetBrains, SDK]_ — _by @tomasnagy_ _(closed 2026-03-12T22:23:53Z)_
- [#10348](https://github.com/cline/cline/issues/10348) **Claude Code Provider: Enterprise plan doesn't track costs** _[VS Code]_ — _by @gerardryaneagersautomotive_
- [#9999](https://github.com/cline/cline/issues/9999) **Cline Kanban Claude Code integration not working** _[CLI]_ — _by @souf92i_
- [#10042](https://github.com/cline/cline/issues/10042) **Kanban view shows "No working changes" for tasks that have diffs** _[CLI]_ — _by @leighmcculloch_
- [#10053](https://github.com/cline/cline/issues/10053) **Cline Kanban not using kanban board, no tasks created and no orchestration on board, but execution in chat window** _[CLI]_ — _by @Heavy-A_ _(closed 2026-04-21T21:10:52Z)_
- [#10345](https://github.com/cline/cline/issues/10345) **Cline disappears from VSCode sidebar** _[VS Code]_ — _by @Zueuk_
- [#9017](https://github.com/cline/cline/issues/9017) **Cline editing files in Plan mode** _[Model Quality, VS Code, Bot Responded, Regression]_ — _by @kavo75_
- [#10342](https://github.com/cline/cline/issues/10342) **Feature Request: Option to configure Enter key behavior in chat (send vs newline)** _[VS Code]_ — _by @Sparqzi_
- [#10341](https://github.com/cline/cline/issues/10341) **Installing an empty local skill fails with unclear error** _[VS Code]_ — _by @RodrigoFA216_
- [#10293](https://github.com/cline/cline/issues/10293) **Kanban agents fail with GitHub Copilot API (OpenAI-compatible provider)** — _by @venkat22_
- [#10339](https://github.com/cline/cline/issues/10339) **ECONNRESET error when using Amazon Bedrock with Zscaler CA** _[VS Code]_ — _by @btuenomso_
- [#8256](https://github.com/cline/cline/issues/8256) **task_progress parameter passed to external MCP servers causes tool call failures** _[P2, Investigation Needed, VS Code, Bot Responded]_ — _by @mgd43b_ _(closed 2026-04-21T10:41:22Z)_
- [#5915](https://github.com/cline/cline/issues/5915) **"Cline uses complex prompts and iterative task execution that may be challenging for less capable models. For best results, it's recommended to use Claude 4 Sonnet for its advanced agentic coding capabilities."** _[Model Quality, VS Code, Bot Responded]_ — _by @John-Codes_
- [#9181](https://github.com/cline/cline/issues/9181) **Agressive context compaction with opus-4.6:1m** _[Investigation Needed, VS Code, Bot Responded]_ — _by @khkiley_
- [#10336](https://github.com/cline/cline/issues/10336) **Claude Code provider: model uses Cline tool vocabulary (execute_command) which Claude Code cannot dispatch** _[VS Code]_ — _by @gerardryaneagersautomotive_
- [#9328](https://github.com/cline/cline/issues/9328) **network timeout on response to llama.cpp there is a hardcoded/undocumented network timeout 5m** _[stale, CLI]_ — _by @aliaj00_
- [#9425](https://github.com/cline/cline/issues/9425) **Cline: Cline gets blackout when searching for anything with no history available** _[stale, QA, VS Code, JetBrains]_ — _by @jay-fibi_


## Commits on `main`

- [`c6dbc8b`](https://github.com/cline/cline/commit/c6dbc8bcb0a4cfe0b9f684b746befdf6d062b862) Adding cline quota exceeded cap error message (#10323) — _@JicLotus_
- [`1862f15`](https://github.com/cline/cline/commit/1862f159558ef13bf97bb6615b59f5805a2280f6) Remove foreground terminal from Cline VSCode extension (#10196) — _@candieduniverse_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
