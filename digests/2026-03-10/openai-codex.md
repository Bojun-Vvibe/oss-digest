# openai/codex — 2026-03-10

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-09T23:59:59.000Z → 2026-03-10T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is foundational plumbing rather than user-facing features: two new experimental subsystems landed, and a large flake-fixing/refactor sweep cleared the way for upcoming work. No releases, PRs, or issues were opened/closed in the window — activity was entirely commits to `main`.

## New experimental subsystems

- **Hooks engine MVP** (#13276) introduces a dedicated `codex-rs/hooks` crate with `SessionStart` and `Stop` hooks as the first MVP — worth reading to understand the planned extensibility model.
- **`code_mode` experimental feature** (#13418) lands as a narrower, isolated alternative to `js_repl` (no node features). A follow-up (#14167) wires `code_mode` to receive enabled tools metadata via `tools.js`.

## Tools / output type overhaul

A multi-PR refactor by pakrym-oai is reshaping how tool outputs are typed and rendered, in preparation for per-tool output schemas: outputs were refactored into trait implementations (#14152), handlers now enforce a single output type per tool (#14157), and exec command truncation moved into a new `ExecCommandToolOutput` helper (#14169).

## Permissions & approvals

- New `RejectConfig` lets `request_permissions` calls be allowed under a `Reject` policy (#14118), with a defaulting fix so existing configs still deserialize (#14165).
- Forward-compat fixes for permissions profiles preserve unknown `:special_path` tokens (#14107) and restore legacy workspace-write semantics as a fast-follow to the new `[permissions]` structure (#13957).

## TUI / UX

- `$`-mentions now always clarify category (skill/app/plugin) (#14147) and plugins sort first in the menu (#14163).
- Fast status indicator restricted to gpt-5.4 (#14135). Apps enablement now also requires non-API-key users (#14011). New config `[skills.bundled] enabled = false` to disable bundled system skills (#13792).

## Reliability / correctness

- Realtime transcript now feeds handoff context (#14132); pending-approval cleanup is delayed until tasks abort to avoid races (#14000); thread-level atomic elicitation counter pauses the stopwatch correctly (#12296).
- Test stabilization sweep by aibrahim-oai: app-server notify init (#13939), websocket bind (#14002), unified exec assertion (#14184), and incomplete-SSE retry (#13879).

If you only read one thing, skim the hooks engine PR (#13276) and the tool-output trait refactor chain (#14152 → #14157 → #14169).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`f3f47cf`](https://github.com/openai/codex/commit/f3f47cf455c2bf83465c2a2c14048f11d35c4d9d) Stabilize app-server notify initialize test (#13939) — _@aibrahim-oai_
- [`b39ae95`](https://github.com/openai/codex/commit/b39ae9501f10c7396857335bcb4c8630c8de28a6) Stabilize websocket test server binding (#14002) — _@aibrahim-oai_
- [`6b7253b`](https://github.com/openai/codex/commit/6b7253b123a65038fe215a5252002054ad93744f) Fix unified exec test output assertion (#14184) — _@aibrahim-oai_
- [`aa6a57d`](https://github.com/openai/codex/commit/aa6a57dfa2001ee2a6e6882b3f94406fc2e47179) Stabilize incomplete SSE retry test (#13879) — _@aibrahim-oai_
- [`2e24be2`](https://github.com/openai/codex/commit/2e24be21346c5e2d415ab0ae10cd6dac854014d5) Use realtime transcript for handoff context (#14132) — _@aibrahim-oai_
- [`c6343e0`](https://github.com/openai/codex/commit/c6343e0649676579f174b6cd0da617d42ab1c58f) Implemented thread-level atomic elicitation counter for stopwatch pausing (#12296) — _@cconger_
- [`79307b7`](https://github.com/openai/codex/commit/79307b7933d9607a7f0033dbbf8446b2027279b5) Delay pending cleanup until task aborts (#14000) — _@aibrahim-oai_
- [`566e4ce`](https://github.com/openai/codex/commit/566e4cee4bd067aeae95591430cffb71e8ede228) [apps] Fix apps enablement condition. (#14011) — _@mzeng-openai_
- [`a9ae436`](https://github.com/openai/codex/commit/a9ae43621b6d583d8d0ff9beeee53484a7a1f38b) Move exec command truncation into ExecCommandToolOutput (#14169) — _@pakrym-oai_
- [`0c33af7`](https://github.com/openai/codex/commit/0c33af77461615f32d4c6b94060f5a39e0f5194f) feat: support disabling bundled system skills (#13792) — _@xl-openai_
- [`7106825`](https://github.com/openai/codex/commit/710682598d20c8a51d41b99a4d709b3a7b827115) Export tools module into code mode runner (#14167) — _@pakrym-oai_
- [`772259b`](https://github.com/openai/codex/commit/772259b01f6f3c088ac8b04414206d8cb52e0251) fix(core) default RejectConfig.request_permissions (#14165) — _@dylan-hurd-oai_
- [`d71e042`](https://github.com/openai/codex/commit/d71e0426940b75f7dea0c149f2129f0b86c17f20) Enforce single tool output type in codex handlers (#14157) — _@pakrym-oai_
- [`63597d1`](https://github.com/openai/codex/commit/63597d1b2d11c94dd09e384ac4518176db65020c) tui: only show fast status for gpt-5.4 (#14135) — _@pash-openai_
- [`244b2d5`](https://github.com/openai/codex/commit/244b2d53f40938ffba96acf0ca7a559473b842f1) start of hooks engine (#13276) — _@eternal-openai_
- [`da61613`](https://github.com/openai/codex/commit/da616136ccff31142b159e97da67705bf0ab7555) Add code_mode experimental feature (#13418) — _@pakrym-oai_
- [`a3cd9f1`](https://github.com/openai/codex/commit/a3cd9f16f5b3dfefb928af3fa512b9dac6af9ac7) sort plugins first in  menu (#14163) — _@sayan-oai_
- [`aa04ea6`](https://github.com/openai/codex/commit/aa04ea6bd705d06543c02ebdf1d26b9730b39684) Refactor tool output into trait implementations (#14152) — _@pakrym-oai_
- [`a5af112`](https://github.com/openai/codex/commit/a5af11211a3f000c48b67bf1083e3ee0578c1431) make dollar-mention always clarify item category (skill, app, plugin) (#14147) — _@sayan-oai_
- [`1165a16`](https://github.com/openai/codex/commit/1165a16e6ffad719e8f852900fd7ff438ec88fae) fix: keep permissions profiles forward compatible (#14107) — _@viyatb-oai_
- [`b0cbc25`](https://github.com/openai/codex/commit/b0cbc25a48b11e311f3b1b7ce9998bb54731ea41) fix(protocol): preserve legacy workspace-write semantics (#13957) — _@viyatb-oai_
- [`6da84ef`](https://github.com/openai/codex/commit/6da84efed8f615085212e7aa6207afa43b3733a9) feat(approvals) RejectConfig for request_permissions (#14118) — _@dylan-hurd-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
