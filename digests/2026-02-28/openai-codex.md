# openai/codex — 2026-02-28

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-02-27T23:59:59.000Z → 2026-02-28T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

No releases or PRs landed in this window, but a busy commit day pushed several user-visible fixes and a few notable features across the TUI, app-server, and core.

The headline is **TUI sub-agent approvals** (#12995), which adds an in-terminal approval flow for sub-agent actions, paired with **faster sub-agent startup** (#12935) that skips online model refresh and rollout flushes for sub-agent sessions while preserving `/models` refresh for normal sessions. Together these meaningfully reshape the sub-agent UX and are the most worthwhile reads.

On the **memory** front, Codex's read-path was tuned to better handle stale facts and conflicting memory (#13088), the default memory mode was changed (#13125), and a new `codex debug clear-memories` command hard-wipes memory state across disk, sqlite, and other stores (#13085) — useful for anyone debugging memory drift.

**Execpolicy / sandboxing** got a coordinated pair: `host_executable()` rules from #12964 are now adopted in the zsh-fork interceptor (#13046) and resolved during preflight in core (#13065), closing a gap in the new policy primitive.

Notable **bug fixes worth flagging**:
- Suppress duplicate assistant output on stdout in interactive TTY sessions (#13082, fixes #12566).
- Keep large-paste placeholders intact during file completion, fixing a 0.106.0 regression (#13070).
- Handle missing plan info for ChatGPT accounts (#13072, addresses #13007 and #12170).
- Fix the broken `/feedback` link in the CLI (#13086).
- `codex exec` now correctly defaults Otel metrics on, and `codex mcp-server` gained an Otel collector it was missing entirely (#13083).

**App-server** changes: `thread/start` is now non-blocking so slow starts don't stall the request loop (#13033); `Thread` exposes a new `ephemeral` field so non-creating clients can detect ephemeral threads (#13084); and the test client gains a `watch` subcommand for manual event-flow inspection (#13080).

Smaller items: model-availability NUX tooltips with per-model show caps (#13021), `cloud_requirements` made fail-closed for the CLI (#13063), skill-disable now respects config layering (#13027), Bazel test packaging for `models.json` (#13129), plus two Windows/test-stability nits (#13127, #13128).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`6a673e7`](https://github.com/openai/codex/commit/6a673e7339161cf5aa6711324bfe873846234b6b) core: resolve host_executable() rules during preflight (#13065) — _@bolinfest_
- [`74e5150`](https://github.com/openai/codex/commit/74e5150b1e23e69c0c83ae267f88b659fd6f3b1b) fix: package `models.json` for Bazel tests (#13129) — _@jif-oai_
- [`84b662e`](https://github.com/openai/codex/commit/84b662e74f0bdf9deac22a7c4568cfd619159b77) nit: disable on windows (#13127) — _@jif-oai_
- [`eec3b1e`](https://github.com/openai/codex/commit/eec3b1e235ff59582acd1bb37fe3ad7df2adbe3b) Speed up subagent startup (#12935) — _@daveaitel-openai_
- [`3bfee6f`](https://github.com/openai/codex/commit/3bfee6fcb5c5e27a3658a5666a220c145750cb9c) nit: ignore `resume_startup_does_not_consume_model_availability_nux_c… (#13128) — _@jif-oai_
- [`5f7c38b`](https://github.com/openai/codex/commit/5f7c38baa9091b9af362d9a1b24bb6c4fdcd34e2) Tune memory read-path for stale facts (#13088) — _@andi-oai_
- [`bee93ca`](https://github.com/openai/codex/commit/bee93ca2f35b72ea80f94a90890ac37a26fd9cc5) chore: change mem default (#13125) — _@jif-oai_
- [`d33f4b5`](https://github.com/openai/codex/commit/d33f4b54ac4239ca073443bb19c81407b4048403) feat: skill disable respect config layer (#13027) — _@jif-oai_
- [`2b38b4e`](https://github.com/openai/codex/commit/2b38b4e03bcb33fb5e04bb0771714dfd9b759d6d) feat: approval for sub-agent in the TUI (#12995) — _@jif-oai_
- [`83177ed`](https://github.com/openai/codex/commit/83177ed7a81ee355f2eedba783cf980174a363d8) Enable analytics in codex exec and codex mcp-server (#13083) — _@etraut-openai_
- [`e2fef7a`](https://github.com/openai/codex/commit/e2fef7a3d24c8d2b16cee652562c33a6ca95ab8a) Make cloud_requirements fail close (#13063) — _@alexsong-oai_
- [`e6032eb`](https://github.com/openai/codex/commit/e6032eb0b74c8330752d063ac7f9646c9547f3bb) Fix CLI feedback link (#13086) — _@etraut-openai_
- [`033ef9c`](https://github.com/openai/codex/commit/033ef9cb9db1cd89a947ce44e2af425e60f8cf84) feat: add debug clear-memories command to hard-wipe memories state (#13085) — _@sayan-oai_
- [`8c1e3f3`](https://github.com/openai/codex/commit/8c1e3f3e6470a1b4cb5d8283e561ce55705394c5) app-server: Add `ephemeral` field to `Thread` object (#13084) — _@euroelessar_
- [`1a8d930`](https://github.com/openai/codex/commit/1a8d930267689351a5b0e1037dadfd8907f8b473) core: adopt host_executable() rules in zsh-fork (#13046) — _@bolinfest_
- [`8fa7928`](https://github.com/openai/codex/commit/8fa792868c75c7ce7b9b171ff3be9bfa4269f19e) fix(app-server): make thread/start non-blocking (#13033) — _@owenlin0_
- [`6604608`](https://github.com/openai/codex/commit/6604608badca3ef5c90e45ecb3bfb82041f031ae) Suppress duplicate assistant output on stdout in interactive sessions (#13082) — _@etraut-openai_
- [`70ed6cb`](https://github.com/openai/codex/commit/70ed6cbc711de6eeb3fb5ee6fb7d5a0474750520) app-server: Add an ability to watch events in the test client (#13080) — _@euroelessar_
- [`ec6f6aa`](https://github.com/openai/codex/commit/ec6f6aacbf00774b58444498e37268b4dee6c2ac) Add model availability NUX tooltips (#13021) — _@aibrahim-oai_
- [`ff5cbfd`](https://github.com/openai/codex/commit/ff5cbfd7d4a3d650d3f7408655d9a2b3052e43d7) Handle missing plan info for ChatGPT accounts (#13072) — _@etraut-openai_
- [`61c4239`](https://github.com/openai/codex/commit/61c42396abe1c5c406cc28f37a89e8e9214b9193) Keep large-paste placeholders intact during file completion (#13070) — _@etraut-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
