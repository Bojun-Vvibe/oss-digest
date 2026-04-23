# openai/codex — 2026-04-12

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-11T23:59:59.000Z → 2026-04-12T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a cluster of TUI and realtime-mode polish landing alongside meaningful sandbox/safety changes — no releases or PRs/issues surfaced in the window, just twelve commits to `main`.

The most user-visible change is the **removal of the context status-line meter** ([#17420](https://github.com/openai/codex/commit/4705101)), which was deemed confusing and gave persistent negative feedback; if you rely on visible context tracking, read this one. Paired with it, instruction sources (`AGENTS.md` paths) are now exposed via the app server so `/status` reflects server-side truth rather than stale client env ([#17506](https://github.com/openai/codex/commit/46ab997)). The composer also gains shell-style **`Ctrl+R` reverse incremental history search** ([#17550](https://github.com/openai/codex/commit/0393a48)).

On the realtime/voice path, two related changes from aibrahim-oai: typed user messages can now submit while realtime is active and are mirrored into the realtime text stream ([#17520](https://github.com/openai/codex/commit/d840b24)), and Current Thread startup context is now budget-selected from newest turns with a 300-token cap per turn ([#17519](https://github.com/openai/codex/commit/4db60d5)).

Sandboxing/safety: Codex now **detects and rejects WSL1 before invoking bubblewrap**, failing fast with a clear message ([#17559](https://github.com/openai/codex/commit/cb870a1)), and bubblewrap is installed in the secure Docker devcontainer setup while the default contributor devcontainer stays lightweight ([#17547](https://github.com/openai/codex/commit/1288bb6)). Two Guardian-timeout commits change semantics so timeouts are no longer treated as explicit denials and return timeout-specific decisions ([#17486](https://github.com/openai/codex/commit/ba839c2)), with corresponding user-facing guidance updated to "permission approval review timed out" ([#17521](https://github.com/openai/codex/commit/3895ddd)) — worth reading together if you've built around approval flow behavior.

MCP gets two fixes: the tool-call timer now pauses during elicitations so user wait time isn't charged against tool budgets ([#17566](https://github.com/openai/codex/commit/68a1d82)), and flattened deferred MCP tool calls (node_repl-shaped) are now supported via handler aliases ([#17556](https://github.com/openai/codex/commit/720932c)). Finally, a build hygiene change enables pnpm's `strictDepBuilds` gate requiring reviewed dependency build scripts ([#17558](https://github.com/openai/codex/commit/a4d5112)).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`68a1d82`](https://github.com/openai/codex/commit/68a1d82a413630892b64258fd3e79786fc419312) fix(mcp) pause timer for elicitations (#17566) — _@dylan-hurd-oai_
- [`46ab997`](https://github.com/openai/codex/commit/46ab9974dc14ae0bc626ba8d48cc3839ecd69995) Expose instruction sources (AGENTS.md) via app server (#17506) — _@etraut-openai_
- [`4705101`](https://github.com/openai/codex/commit/470510174b3862a8e54ce13c874ba53cf9eaab6c) Remove context status-line meter (#17420) — _@etraut-openai_
- [`0393a48`](https://github.com/openai/codex/commit/0393a485ed0b0577938259de3e3e3a0f02b4dcda) feat(tui): add reverse history search to composer (#17550) — _@fcoury-oai_
- [`d840b24`](https://github.com/openai/codex/commit/d840b247d7a7df2fe6d1eed182852beaa066347e) Mirror user text into realtime (#17520) — _@aibrahim-oai_
- [`cb870a1`](https://github.com/openai/codex/commit/cb870a169a07423bb366bb8fd7878190b439da08) fix(sandboxing): reject WSL1 bubblewrap sandboxing (#17559) — _@viyatb-oai_
- [`a4d5112`](https://github.com/openai/codex/commit/a4d5112b37c1b012b761df66286e73b858205482) build(pnpm): require reviewed dependency build scripts (#17558) — _@mcgrew-oai_
- [`720932c`](https://github.com/openai/codex/commit/720932ca3d1a347a8c069ab8602dc201ef337e22) [codex] Support flattened deferred MCP tool calls (#17556) — _@fc-oai_
- [`4db60d5`](https://github.com/openai/codex/commit/4db60d5d8bea956c2624db8ca01566e902fe8a11) Budget realtime current thread context (#17519) — _@aibrahim-oai_
- [`1288bb6`](https://github.com/openai/codex/commit/1288bb60a1c52958da68080761c864b57080a2b0) [codex] Support bubblewrap in secure Docker devcontainer (#17547) — _@viyatb-oai_
- [`3895ddd`](https://github.com/openai/codex/commit/3895ddd6b1caf80cd77d6fd44e3ce55bd290ef18) Clarify guardian timeout guidance (#17521) — _@won-openai_
- [`ba839c2`](https://github.com/openai/codex/commit/ba839c23f3abfb3e413650d29a0e1400434cabf2) changing decision semantics after guardian timeout (#17486) — _@won-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
