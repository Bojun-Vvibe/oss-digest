# openai/codex — 2026-04-01

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-31T23:59:59.000Z → 2026-04-01T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a sustained refactor by `bolinfest` to extract the tool stack out of `codex-core` into a new `codex-tools` crate, paired with a workspace-wide push to eliminate Cargo crate features. Tool config moved first (#16379), followed by tool spec helpers (#16471), discovery helpers (#16477), and finally the `update_plan` tool definition (#16481) — leaving handlers in core but definitions reusable. In parallel, the last workspace crate features were removed from `codex-otel` (#16469) and `codex-tui` (voice-input #16467, debug/test-only `vt100-tests` and `debug-logs` #16457), CI now hard-bans new workspace crate features (#16455), and Rust CI stops running with `--all-features` since there are none left to gate (#16473). If you only read one thread today, read this one — it changes where new tool code should live.

The second major thread is `jif-oai`'s MultiAgent v2 API cleanup: `spawn_agent` (#16406), `send_message` (#16409), and `assign_task` (#16419) all switch from item arrays to a single message string, tasks can no longer be assigned to the root agent (#16424), and the `wait` v2 description and a `deny` field were tidied (#16425, #16427). On the persistence side, the log table was dropped from the state DB (#16433) and auto-vacuum was added (#16434, full vacuum once then incremental) — worth flagging if you depend on local DB layout. `interrupted` is now a first-class state (#16426).

Smaller but user-visible changes: fuzzy file search in `codex-file-search` is now case-insensitive instead of smart-case (#15772), and `GuardianAssessmentEvent.action` is now strongly typed rather than a free-form string (#16448) — a breaking shape change for event consumers. Auth got a fix where `refresh_interval_ms=0` now correctly means "no auto-refresh" (#16480, follow-up to #16288). Internals: `execute_exec_request` no longer takes a separate `sandbox_policy`, consolidating on `ExecRequest.sandbox_policy` (#16422), and the cloud-tasks mock client was split out of `codex-cloud-tasks-client` (#16456). No releases, PRs, or issues surfaced in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`6cf832f`](https://github.com/openai/codex/commit/6cf832fc63b7453fa8f4be3c295191cab03c1c8a) Extract update_plan tool spec into codex-tools (#16481) — _@bolinfest_
- [`30f6786`](https://github.com/openai/codex/commit/30f6786d62e54a2a5a35520b0e4701f364d8f112) fix(guardian): make GuardianAssessmentEvent.action strongly typed (#16448) — _@owenlin0_
- [`f83f3fa`](https://github.com/openai/codex/commit/f83f3fa2a6bbac036c0ee41846c526fa50aeae3d) login: treat provider auth refresh_interval_ms=0 as no auto-refresh (#16480) — _@bolinfest_
- [`1b711a5`](https://github.com/openai/codex/commit/1b711a550100a4f45472da753a8a8550ed2863ae) Extract tool discovery helpers into codex-tools (#16477) — _@bolinfest_
- [`148dbb2`](https://github.com/openai/codex/commit/148dbb25f02a9f55c6afb0bb80202cd51d5201f6) ci: stop running rust CI with --all-features (#16473) — _@bolinfest_
- [`e6f5451`](https://github.com/openai/codex/commit/e6f5451a2c57264e50d081c62421e6269d1f0135) Extract tool spec helpers into codex-tools (#16471) — _@bolinfest_
- [`323aa96`](https://github.com/openai/codex/commit/323aa968c3f9b23856df93074a3000de7ba8030e) otel: remove the last workspace crate feature (#16469) — _@bolinfest_
- [`a99d484`](https://github.com/openai/codex/commit/a99d4845e368dec8944cb0ae0b68ca6fe4f59e70) Extract tool config into codex-tools (#16379) — _@bolinfest_
- [`4d4767f`](https://github.com/openai/codex/commit/4d4767f7979ae7da6f64595c80d2bb8d6fdd0c49) tui: remove the voice-input crate feature (#16467) — _@bolinfest_
- [`d1043ef`](https://github.com/openai/codex/commit/d1043ef90e406686e32664732ba3b2e91894731f) tui: remove debug/test-only crate features (#16457) — _@bolinfest_
- [`9f0be14`](https://github.com/openai/codex/commit/9f0be146dbb4f6f45b632a469ca0eda3357ce52f) cloud-tasks: split the mock client out of cloud-tasks-client (#16456) — _@bolinfest_
- [`dc263f5`](https://github.com/openai/codex/commit/dc263f5926f9457513d2508a4d1fc47bafe88137) ci: block new workspace crate features (#16455) — _@bolinfest_
- [`e8d5c6b`](https://github.com/openai/codex/commit/e8d5c6b44642e6749ef1a05bd6aa7a75e9276241) Make fuzzy file search case insensitive (#15772) — _@meyers-oai_
- [`75365bf`](https://github.com/openai/codex/commit/75365bf718db0fb40ae02cf162d07d984cfe4556) fix: remove unused import (#16449) — _@bolinfest_
- [`5cca5c0`](https://github.com/openai/codex/commit/5cca5c0093045051b400d2215bba2fb13e7c7443) docs: update argument_comment_lint instructions in AGENTS.md (#16375) — _@bolinfest_
- [`d3b99ef`](https://github.com/openai/codex/commit/d3b99ef110e93a1da23a1d50a4dcfc2d01a806b3) fix(core) rm execute_exec_request sandbox_policy (#16422) — _@dylan-hurd-oai_
- [`f839f3f`](https://github.com/openai/codex/commit/f839f3ff2ed9c4bf648a9a11708c2501fbc92d31) feat: auto vaccum state DB (#16434) — _@jif-oai_
- [`c846a57`](https://github.com/openai/codex/commit/c846a57d032b977dbeab8b9f95e2b84fc692cb88) chore: drop log DB (#16433) — _@jif-oai_
- [`5bbfee6`](https://github.com/openai/codex/commit/5bbfee69b6e7fbd519b7aa1d344304e26a647092) nit: deny field v2 (#16427) — _@jif-oai_
- [`609ac0c`](https://github.com/openai/codex/commit/609ac0c7ab3fade92f79e595e6e09d26a5397b5b) chore: interrupted as state (#16426) — _@jif-oai_
- [`df5f79d`](https://github.com/openai/codex/commit/df5f79da36e2c116b56607564fcb3c149e952307) nit: update wait v2 desc (#16425) — _@jif-oai_
- [`0c776c4`](https://github.com/openai/codex/commit/0c776c433b02ae4e07efc2db9eac0e55455630a3) feat: tasks can't be assigned to root agent (#16424) — _@jif-oai_
- [`3152d1a`](https://github.com/openai/codex/commit/3152d1a5579e95c9a0521d7902a4cd71f38bbd7e) Use message string in v2 assign_task (#16419) — _@jif-oai_
- [`23d638a`](https://github.com/openai/codex/commit/23d638a573ab0775c8e8c7f54db8e19ddbb10332) Use message string in v2 send_message (#16409) — _@jif-oai_
- [`d0474f2`](https://github.com/openai/codex/commit/d0474f2bc1eb246c206c1e9c02338f52bf8d992e) Use message string in v2 spawn_agent (#16406) — _@jif-oai_
- [`dedd1c3`](https://github.com/openai/codex/commit/dedd1c386a9bb2b4031d26b0494217a20868fb7a) fix: suppress status card expect_used warnings after #16351 (#16378) — _@bolinfest_
- [`2e942ce`](https://github.com/openai/codex/commit/2e942ce830bd4b3023a036728d8be0e432976ddd) ci: sync Bazel clippy lints and fix uncovered violations (#16351) — _@bolinfest_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
