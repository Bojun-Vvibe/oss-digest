# openai/codex — 2026-03-14

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-13T23:59:59.000Z → 2026-03-14T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Sandbox and config hardening dominate today's activity in `openai/codex`, with no releases, PRs, or issues recorded in the window — only 14 merged commits to `main`.

The most consequential changes cluster around sandbox correctness. `viyatb-oai` landed three fixes: symlinked writable roots are now normalized after special-path resolution so policies apply to canonical paths (#14674); split filesystem/network sandbox policies are reapplied when spawning subagents so children inherit live policy rather than stale config (#14650); and persisted execpolicy network rules are now reapplied when booting the managed network proxy, fixing future host approvals not surviving across sessions (#14619). If you run Codex with non-trivial sandbox configs, these three are worth reading together.

Built-in provider configuration also got stricter. `etraut-openai` now errors when users try to override the built-in `openai`/`ollama`/`lmstudio` providers (#12024) and adds an `openai_base_url` config override that deprecates reliance on the `OPENAI_BASE_URL` environment variable (#12031) — a frequent source of bug reports. Expect breakage for users with custom provider blocks shadowing built-ins.

On reliability, `charley-oai` fixed turn-context reconstruction after backtracking by reusing rollout reconstruction so `reference_context_item` is restored from persisted rollouts (#14616), and `aibrahim-oai` unbroke Windows CI for guardian/Smart Approvals by normalizing path serialization to forward slashes and seeding workspace-write defaults (#14645). `ccy-oai` added 401 observability to client bug reports to help triage auth failures surfacing in Sentry (#14611).

Smaller but notable: `cconger` extended dynamic tool calls with an `exposeToContext` param to let tools participate in generation while being hidden from the model context (#14501); `sayan-oai` made plugin `defaultPrompt` an array (capped at 3×128 chars, with string backcompat, #14649), moved Apps/Skills/Plugins instructions out of the user message into the developer message (#14609), and refreshed the Python SDK generated types (#14646). `bolinfest` added an argument-comment Dylint runner (#14651) and refactored unified-exec to make zsh-fork state explicit (#14633).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`d692b74`](https://github.com/openai/codex/commit/d692b7400786e7bbe9f1366e697fc867bd10b3c1) Add auth 401 observability to client bug reports (#14611) — _@ccy-oai_
- [`9060dc7`](https://github.com/openai/codex/commit/9060dc7557848feb80a0fca612b9b1037c2ec217) fix: fix symlinked writable roots in sandbox policies (#14674) — _@viyatb-oai_
- [`4b31848`](https://github.com/openai/codex/commit/4b31848f5b3adb7f237dd5109f83428fbd2cf343) Add argument-comment Dylint runner (#14651) — _@bolinfest_
- [`70eddad`](https://github.com/openai/codex/commit/70eddad6b075f26f0f93c66f7ec9a4e49cdadc93) dynamic tool calls: add param `exposeToContext` to optionally hide tool (#14501) — _@cconger_
- [`e389091`](https://github.com/openai/codex/commit/e3890910427940c9106ea61d75f82dffbf20c7a6) make defaultPrompt an array, keep backcompat (#14649) — _@sayan-oai_
- [`8ca358a`](https://github.com/openai/codex/commit/8ca358a13cd29bb174bebe1a32cf608e31a6494e) Refresh Python SDK generated types (#14646) — _@sayan-oai_
- [`ae0a651`](https://github.com/openai/codex/commit/ae0a6510e19c1d65aaa1ef1824826832ac9e160a) Enforce errors on overriding built-in model providers (#12024) — _@etraut-openai_
- [`d272f45`](https://github.com/openai/codex/commit/d272f4505874fafef4753830b40d751674e8fd9b) move plugin/skill instructions into dev msg and reorder (#14609) — _@sayan-oai_
- [`7f57139`](https://github.com/openai/codex/commit/7f571396c8819d7f4c4486ed1e967e40a2c9ffae) fix: sync split sandbox policies for spawned subagents (#14650) — _@viyatb-oai_
- [`6dc04df`](https://github.com/openai/codex/commit/6dc04df5e6ffdf7d85c935864c71eede3f214515) fix: persist future network host approvals across sessions (#14619) — _@viyatb-oai_
- [`bbd329a`](https://github.com/openai/codex/commit/bbd329a81233a8bb35f5ced9aacf93b57f2f9999) Fix turn context reconstruction after backtracking (#14616) — _@charley-oai_
- [`69c8a1e`](https://github.com/openai/codex/commit/69c8a1ef9e7c5a3c447ea8b0f01ec5d3a068693d) Fix Windows CI assertions for guardian and Smart Approvals (#14645) — _@aibrahim-oai_
- [`4b9d5c8`](https://github.com/openai/codex/commit/4b9d5c8c1bdb6d9cfd43570e0b8e88c88b54d823) Add openai_base_url config override for built-in provider (#12031) — _@etraut-openai_
- [`b859a98`](https://github.com/openai/codex/commit/b859a98e0f017f374aaff35c9e2e44f849222622) refactor: make unified-exec zsh-fork state explicit (#14633) — _@bolinfest_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
