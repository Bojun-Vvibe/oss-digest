# openai/codex — 2026-03-16

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-15T23:59:59.000Z → 2026-03-16T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's biggest theme is the ongoing **TUI-on-app-server migration**: #14717 stands up a parallel `tui_app_server` directory behind a feature flag, replicating the TUI on top of the app server — this is the main thing to read. A follow-up build fix (#14826) lands shortly after, and #14665 wires the request permission profile through the app server.

**Multi-agent / sub-agent reliability** is the other major focus, with several fixes from jif-oai:
- #14816 fixes a TUI freeze caused by a circular `Drop` between the embedded app-server and its listeners when sub-agents are present.
- #13850 makes `interrupted` a non-final agent state so `wait` doesn't return prematurely on interrupted agents.
- #14806 fixes skills cache key to respect config layering (sub-agent `[[skills.config]]` overrides were being ignored — closes #14161).
- #14807 cleans up config layering so agent config takes precedence over project profiles.

On the **realtime/code-mode** front, #14828 begins a 4-PR stack splitting realtime websocket methods by version (unblocks #14830), and #14851 exposes an `exit` helper through the code-mode bridge so scripts can stop mid-flight.

**Sandboxing & infra**: #14139 lands the Windows sandbox runner IPC foundation that future `unified_exec` work will build on. #14652 enforces a repo-local argument-comment lint across `codex-rs` in CI to prevent drift.

**Smaller core fixes worth noting**: #14668 reuses the guardian sub-agent session across approvals to keep a stable prompt-cache key; #14602 preserves background terminals on Ctrl+C/Esc and renames the cleanup command to `/stop`; #14732 bypasses tool-search and inlines tool specs when search is unavailable or tools are few; #14769 preserves `tool_params` keys for elicitations; #14833 normalizes sanitize-name to use `_` everywhere; #14268 excludes injected AGENTS.md and standalone skill payloads from memory stage-1 inputs.

No releases, no new issues, and no open PRs were recorded in the window — activity was entirely commits to `main`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`b77fe8f`](https://github.com/openai/codex/commit/b77fe8fefeffe71c2f221129491b7235af4766d0) Apply argument comment lint across codex-rs (#14652) — _@bolinfest_
- [`6f05d8d`](https://github.com/openai/codex/commit/6f05d8d735392640cd32ec44c2088e0fec9aeaee) [stack 1/4] Split realtime websocket methods by version (#14828) — _@aibrahim-oai_
- [`a3ba10b`](https://github.com/openai/codex/commit/a3ba10b44b3c9a584ad0bccf84b6da072bd96d8f) Add exit helper to code mode scripts (#14851) — _@pakrym-oai_
- [`d0a693e`](https://github.com/openai/codex/commit/d0a693e5419dba6b25537f4c931a49fd0ce14ea7) windows-sandbox: add runner IPC foundation for future unified_exec (#14139) — _@iceweasel-oai_
- [`4c9dbc1`](https://github.com/openai/codex/commit/4c9dbc1f8829d0d0423bc36c6ad59896bc1387f3) memories: exclude AGENTS and skills from stage1 input (#14268) — _@andi-oai_
- [`663dd3f`](https://github.com/openai/codex/commit/663dd3f93500d211409d406fcd0d801e18de6f95) fix(core): fix sanitize name to use '_' everywhere (#14833) — _@apanasenko-oai_
- [`a0e41f4`](https://github.com/openai/codex/commit/a0e41f4ff9b4e68148b76621a3817907a166ff43) Fixed build failures related to PR 14717 (#14826) — _@etraut-openai_
- [`7a6e30b`](https://github.com/openai/codex/commit/7a6e30b55b0aa75d8462058f794f571afa071bac) Use request permission profile in app server (#14665) — _@mousseau-oai_
- [`db89b73`](https://github.com/openai/codex/commit/db89b73a9cd553ac2a2afda93c9f9bdcc223540c) Move TUI on top of app server (parallel code) (#14717) — _@etraut-openai_
- [`c04a0a7`](https://github.com/openai/codex/commit/c04a0a745483066da3e004ec1822a5c0838b6feb) fix: tui freeze when sub-agents are present (#14816) — _@jif-oai_
- [`3f266bc`](https://github.com/openai/codex/commit/3f266bcd68c78ac043969f8a7a916c7ee30df112) feat: make interrupt state not final for multi-agents (#13850) — _@jif-oai_
- [`18ad675`](https://github.com/openai/codex/commit/18ad67549ca30c78b966d0bc9d8bc4a4a828c854) feat: improve skills cache key to take into account config layering (#14806) — _@jif-oai_
- [`33acc1e`](https://github.com/openai/codex/commit/33acc1e65faec89172b80a0a8a4faafe9b65c8c5) fix: sub-agent role when using profiles (#14807) — _@jif-oai_
- [`029aab5`](https://github.com/openai/codex/commit/029aab5563caed2f2bbea8a1815a42cbf22b79a2) fix(core): preserve tool_params for elicitations (#14769) — _@mzeng-openai_
- [`6fdeb1d`](https://github.com/openai/codex/commit/6fdeb1d602842b80088641b941dea174435c01b7) Reuse guardian session across approvals (#14668) — _@charley-oai_
- [`ba463a9`](https://github.com/openai/codex/commit/ba463a9dc78180d9cd61b28ef6562e03342a14be) Preserve background terminals on interrupt and rename cleanup command to /stop (#14602) — _@friel-openai_
- [`d4af605`](https://github.com/openai/codex/commit/d4af6053e212a982e53372a3dff5a627c60af1db) [apps] Improve search tool fallback. (#14732) — _@mzeng-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
