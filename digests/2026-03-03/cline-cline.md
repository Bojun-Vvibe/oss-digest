# cline/cline — 2026-03-03

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-02T23:59:59.000Z → 2026-03-03T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Release **v3.69.0** shipped ([notes](https://github.com/cline/cline/releases/tag/v3.69.0)) bundling several fixes from the prior day: auto-compaction on OpenRouter context overflow, GPT-OSS native file editing on OpenAI-compatible models, retry of nested git restores in checkpoints, and a fix preventing Chinese filename escaping in diff view. The release also adds a `User-Agent` header for Cline backend requests and surfaces Cline SDK docs on the Cline page.

The most consequential bug fix landed today is #9643 by dominiccooney, which stops an **infinite `getLatestMcpServers` RPC loop** (~1000 calls/sec) triggered just by opening the "Manage MCP Servers" panel — caused by a bad `ServersToggleModal` `useEffect` dependency. Anyone running MCP should pick this up.

Two other substantive task-engine fixes from saoudrizwan:
- #9576 decouples usage-chunk processing from the main stream flow, fixing a long-standing bug where token/usage telemetry and UI metrics were stalled until the user sent the next message (root cause: async-generator consumer was blocked awaiting UI/tool work).
- #9637 stabilizes **subagents** against context-window limit errors by persisting truncation state across retries the same way the main loop does, eliminating a class of "API error, no useful result" failures on longer multi-turn subagent runs.

On the observability side, #9626 (dominiccooney) adds telemetry on state-update message sizes, motivated by the IntelliJ plugin's fixed webview buffer that silently drops updates past a threshold (issue #6696) — useful groundwork rather than a user-visible change.

Docs: #9581 (reneehuang1) restructures the API documentation, adding overview, getting-started, and authentication reference pages.

One PR was rejected: #9648, which proposed an `NvidiaNimHandler` for NVIDIA NIM with reasoning options, was closed unmerged within an hour — likely missing the required prior feature-request discussion.

No new issues or new open PRs in the window; activity was entirely merges and a release cut.

## Releases

- **[v3.69.0](https://github.com/cline/cline/releases/tag/v3.69.0)** — v3.69.0 _by @github-actions[bot] at 2026-03-03T00:25:12Z_
  > ### Added
  > 
  > - Add `User-Agent` header to requests sent to the Cline backend
  > - Add default auto-tag workflow for publish release flow
  > - Show Cline SDK docs on the Cline page
  > 
  > ### Fixed
  > 
  > - Retry nested git restore and prevent silent `.git_disabled` leftovers in checkpoints
  > - Prevent Chinese filename escaping in diff view
  > - Trigger auto-compaction on OpenRouter context overflow errors
  > - Restore GPT-OSS native file editing on OpenAI-compatible models
  > 
  > ### Changed
  > 
  > - Update Cline SDK docs
  > - Improve ho…


## Merged PRs

- [#9643](https://github.com/cline/cline/pull/9643) **fix: stop infinite getLatestMcpServers RPC loop when opening MCP servers panel** — _by @dominiccooney, merged 2026-03-03T17:08:35Z_
- [#9576](https://github.com/cline/cline/pull/9576) **fix(task): process usage chunks even if loop is awaiting an ask** — _by @saoudrizwan, merged 2026-03-03T20:27:21Z_
- [#9637](https://github.com/cline/cline/pull/9637) **fix(subagent): fix subagents erroring out by handling context-window limit errors** — _by @saoudrizwan, merged 2026-03-03T06:13:32Z_
- [#9626](https://github.com/cline/cline/pull/9626) **chore: Collect telemetry on state update message sizes** — _by @dominiccooney, merged 2026-03-03T05:53:30Z_
- [#9581](https://github.com/cline/cline/pull/9581) **[doc] api doc changes** — _by @reneehuang1, merged 2026-03-03T00:22:39Z_


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#9648](https://github.com/cline/cline/pull/9648) **Add support other models with reasoning options** — _by @DushesS01, closed 2026-03-03T21:44:12Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`e484534`](https://github.com/cline/cline/commit/e484534bcb1742f5fbd3e4f03061f4622f12bc08) fix(task): process usage chunks independently from non-usage stream flow (#9576) — _@saoudrizwan_
- [`2822723`](https://github.com/cline/cline/commit/28227234956640c6d44067cb41299b6792619b24) fix: stop infinite getLatestMcpServers RPC loop when opening MCP servers panel (#9643) — _@dominiccooney_
- [`b5c0cc1`](https://github.com/cline/cline/commit/b5c0cc18d8c05b12d8f87b99cb4889e125a18eaa) fix(subagent): fix subagents erroring out by handling context-window limit errors (#9637) — _@saoudrizwan_
- [`fb04a9b`](https://github.com/cline/cline/commit/fb04a9bd1532e3a8edfa7a2b5434fef365589f44) Log RPC size histogram. (#9626) — _@dominiccooney_
- [`6def83a`](https://github.com/cline/cline/commit/6def83a5d972ef0a060011a3bdf76c516b208204) [doc] api doc changes (#9581) — _@reneehuang1_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
