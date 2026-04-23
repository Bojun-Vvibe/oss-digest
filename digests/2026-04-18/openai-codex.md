# openai/codex — 2026-04-18

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-17T23:59:59.000Z → 2026-04-18T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A new prerelease **0.122.0-alpha.10** (rust-v0.122.0-alpha.10) shipped today, bundling the day's merges. The most consequential change is a revert: PR #18325 rolls back #17749 ("drain mailbox only at request boundaries"), so queued inter-agent mail can again preempt after reasoning/commentary item boundaries — worth reading if you depend on multi-agent message ordering.

Model/runtime behavior changes:
- #18382 introduces `max_context_window` model metadata and routes core context-window reads through resolved model info; user `model_context_window` overrides are now clamped to the model max.
- #18386 changes image outputs to default to **high detail** instead of relying on the API default.
- #18298 budgets the model-visible skills section to a small share of the context window, drops implicit skills that don't fit, and emits a non-fatal warning (plus a new app-server warning notification) when skills are trimmed.

Trust, plugins, and config:
- #14718 (long-open since March) lands stricter trust-gating of project `.codex` layers — `hooks.json` and `execpolicy/*.rules` no longer load until a project is trusted, even without a `config.toml`. Likely behavior change for existing repos.
- #18395 adds inline enable/disable toggles for installed plugins in `/plugins` (Space to toggle), with queued-write handling to prevent stale toggles clobbering newer state.
- #17752 moves marketplace-remove logic into shared `codex_core::plugins`, prepping an app-server RPC.
- #18449 populates `PluginDetail.description` for uninstalled cross-repo plugins without cloning the remote.
- #17891 adds a TUI startup prompt to migrate external agent config/skills/AGENTS.md/plugins, gated behind `features.external_migrate`.

App-server / infra: #18220 adds the `account/sendAddCreditsNudgeEmail` v2 API behind a disabled `workspace_owner_usage_nudge` flag; commit a58a0f0 (#18369) renames guardian → auto-review dev-message marker.

Notable in-flight drafts: #18407 splits `codex-core` into smaller crates (agent-runtime, code-mode-runtime, config-loader, file-watcher, js-repl) for compile-time wins; #18437 fixes brokered MCP OAuth discovery via protected-resource metadata; #18383 adds a Linux-sandbox smoke CI lane asserting bwrap/AppArmor/userns posture. A large stack from etraut-openai (#17578–#17581) for persistent thread timers and a `codex queue` CLI was closed unmerged.

## Releases

- **[rust-v0.122.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.10)** _(prerelease)_ — 0.122.0-alpha.10 _by @github-actions[bot] at 2026-04-18T06:26:03Z_
  > Release 0.122.0-alpha.10


## Merged PRs

- [#18386](https://github.com/openai/codex/pull/18386) **Update image outputs to default to high detail** — _by @pakrym-oai, merged 2026-04-18T18:01:12Z_
- [#18325](https://github.com/openai/codex/pull/18325) **Revert "[codex] drain mailbox only at request boundaries"** — _by @jif-oai, merged 2026-04-18T16:53:48Z_
- [#18382](https://github.com/openai/codex/pull/18382) **Add max context window model metadata** — _by @aibrahim-oai, merged 2026-04-18T04:48:14Z_
- [#17752](https://github.com/openai/codex/pull/17752) **[codex] Add marketplace remove command and shared logic** — _by @xli-oai, merged 2026-04-18T04:44:48Z_
- [#18220](https://github.com/openai/codex/pull/18220) **[codex] Add owner nudge app-server API** — _by @richardopenai, merged 2026-04-18T04:41:58Z_
- [#18449](https://github.com/openai/codex/pull/18449) **[codex] Describe uninstalled cross-repo plugin reads** — _by @xli-oai, merged 2026-04-18T03:31:13Z_
- [#18298](https://github.com/openai/codex/pull/18298) **feat: Budget skill metadata and surface trimming as a warning** — _by @xl-openai, merged 2026-04-18T01:11:47Z_
- [#18369](https://github.com/openai/codex/pull/18369) **Feat/auto review dev message marker** — _by @won-openai, merged 2026-04-18T01:05:03Z_
- [#17891](https://github.com/openai/codex/pull/17891) **[TUI] add external config migration prompt when start TUI** — _by @alexsong-oai, merged 2026-04-18T00:58:32Z_
- [#14718](https://github.com/openai/codex/pull/14718) **fix: trust-gate project hooks and exec policies** — _by @viyatb-oai, merged 2026-04-18T00:56:58Z_
- [#18395](https://github.com/openai/codex/pull/18395) **/plugins: Add inline enablement toggles** — _by @canvrno-oai, merged 2026-04-18T00:33:11Z_


## Open PRs (new or updated)

- [#18457](https://github.com/openai/codex/pull/18457) _(draft)_ **[codex] Bound optional fs watch test waits** — _by @euroelessar, updated 2026-04-18T05:59:40Z_
- [#18407](https://github.com/openai/codex/pull/18407) _(draft)_ **Split codex-core into smaller crates** — _by @starr-openai, updated 2026-04-18T03:03:32Z_
- [#15937](https://github.com/openai/codex/pull/15937) **feat(hooks): add managed hooks** — _by @viyatb-oai, updated 2026-04-18T01:51:15Z_
- [#18383](https://github.com/openai/codex/pull/18383) **ci: smoke test codex exec Linux sandbox modes** — _by @viyatb-oai, updated 2026-04-18T00:30:58Z_
- [#18437](https://github.com/openai/codex/pull/18437) _(draft)_ **Fix brokered MCP OAuth discovery** — _by @mzeng-openai, updated 2026-04-18T00:29:24Z_
- [#18434](https://github.com/openai/codex/pull/18434) _(draft)_ **[codex] Materialize codex apps file downloads locally** — _by @lt-oai, updated 2026-04-18T00:16:27Z_
- [#18433](https://github.com/openai/codex/pull/18433) _(draft)_ **[codex] Honor OpenAI file upload config for codex apps** — _by @lt-oai, updated 2026-04-18T00:16:13Z_
- [#18432](https://github.com/openai/codex/pull/18432) _(draft)_ **[codex] Directly expose builtin codex apps tools** — _by @lt-oai, updated 2026-04-18T00:15:57Z_


## Closed PRs (not merged)

- [#17581](https://github.com/openai/codex/pull/17581) **Add timer and queued message state storage (1 of 4)** — _by @etraut-openai, closed 2026-04-18T22:46:05Z_
- [#17580](https://github.com/openai/codex/pull/17580) **Add queued external message delivery (4 of 4)** — _by @etraut-openai, closed 2026-04-18T22:46:02Z_
- [#17579](https://github.com/openai/codex/pull/17579) **Add persistent thread timers (3 of 4)** — _by @etraut-openai, closed 2026-04-18T22:45:57Z_
- [#17578](https://github.com/openai/codex/pull/17578) **Add injected message transcript events (2 of 4)** — _by @etraut-openai, closed 2026-04-18T22:45:41Z_
- [#18459](https://github.com/openai/codex/pull/18459) **Test --add-dir workspace-write shell writes** — _by @etraut-openai, closed 2026-04-18T20:48:57Z_
- [#18425](https://github.com/openai/codex/pull/18425) **refactor: use semaphores for async serialization gates** — _by @bolinfest, closed 2026-04-17T23:52:03Z_
- [#13657](https://github.com/openai/codex/pull/13657) **feat(agents): enable subagent inbox delivery** — _by @friel-openai, closed 2026-04-18T06:27:04Z_
- [#13679](https://github.com/openai/codex/pull/13679) **feat(tui): add subagent runtime behavior** — _by @friel-openai, closed 2026-04-18T06:27:02Z_
- [#13678](https://github.com/openai/codex/pull/13678) **feat(core): add watchdog runtime and prompts** — _by @friel-openai, closed 2026-04-18T06:27:01Z_
- [#13637](https://github.com/openai/codex/pull/13637) **feat(rollout): preserve fork references across replay** — _by @friel-openai, closed 2026-04-18T06:27:00Z_
- [#15930](https://github.com/openai/codex/pull/15930) **fix: harden linux-sandbox mount-order test host variability (#15786)** — _by @mle-foo, closed 2026-04-18T06:26:58Z_
- [#15890](https://github.com/openai/codex/pull/15890) **Fix Windows timed-out shell_command descendant cleanup** — _by @mle-foo, closed 2026-04-18T06:26:57Z_
- [#15816](https://github.com/openai/codex/pull/15816) **Fix markdown local-link path decoding for non-ASCII paths (#15499)** — _by @mle-foo, closed 2026-04-18T06:26:56Z_
- [#16122](https://github.com/openai/codex/pull/16122) **In code mode, rename tools global to functions** — _by @andmis, closed 2026-04-18T06:26:55Z_
- [#17849](https://github.com/openai/codex/pull/17849) **Make deferred dynamic tools searchable** — _by @pash-openai, closed 2026-04-18T01:33:02Z_
- [#18419](https://github.com/openai/codex/pull/18419) **[Linux] Reserve missing top level .git at runtime** — _by @evawong-oai, closed 2026-04-18T01:06:51Z_
- [#18164](https://github.com/openai/codex/pull/18164) **More Bazel build timing mitigations** — _by @ddr-oai, closed 2026-04-18T01:00:44Z_
- [#18415](https://github.com/openai/codex/pull/18415) **Skip SSH config dependency roots in Windows sandbox** — _by @efrazer-oai, closed 2026-04-18T01:00:47Z_
- [#18414](https://github.com/openai/codex/pull/18414) **Skip .tsh in Windows sandbox profile read roots** — _by @efrazer-oai, closed 2026-04-18T01:00:47Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`53b1570`](https://github.com/openai/codex/commit/53b15703678f7cf222d1619c8690145454e576a2) Update image outputs to default to high detail (#18386) — _@pakrym-oai_
- [`e3c2acb`](https://github.com/openai/codex/commit/e3c2acb9cdd37277c334765a30ea2ac6020a2b9f) Revert "[codex] drain mailbox only at request boundaries" (#18325) — _@jif-oai_
- [`5bb193a`](https://github.com/openai/codex/commit/5bb193aa88fef0f5ef3fbbd2c6253ba93d3f6521) Add max context window model metadata (#18382) — _@aibrahim-oai_
- [`e9c70ff`](https://github.com/openai/codex/commit/e9c70fff3f2dac7f3e0fee1abb6abf5b206a4df6) [codex] Add marketplace remove command and shared logic (#17752) — _@xli-oai_
- [`6b39d0c`](https://github.com/openai/codex/commit/6b39d0c657924403b77040186012e911344342c0) [codex] Add owner nudge app-server API (#18220) — _@richardopenai_
- [`def6467`](https://github.com/openai/codex/commit/def6467d2bb7c9ff6333d59b6f64a0acf839817a) [codex] Describe uninstalled cross-repo plugin reads (#18449) — _@xli-oai_
- [`3f7222e`](https://github.com/openai/codex/commit/3f7222ec768f9538d5a0ef8c137ce55e56bef55b) feat: Budget skill metadata and surface trimming as a warning (#18298) — _@xl-openai_
- [`a58a0f0`](https://github.com/openai/codex/commit/a58a0f083dc4d71d82a6fd1d589ed4964459788a) Feat/auto review dev message marker (#18369) — _@won-openai_
- [`93ff798`](https://github.com/openai/codex/commit/93ff798e5b29acdf659935cac6701f8e7dfe0de1) [TUI] add external config migration prompt when start TUI (#17891) — _@alexsong-oai_
- [`370bed4`](https://github.com/openai/codex/commit/370bed4bf4a0f5c5158ade9bfe8c0e13f773e724) fix: trust-gate project hooks and exec policies (#14718) — _@viyatb-oai_
- [`06f8ec5`](https://github.com/openai/codex/commit/06f8ec54db9e12a82656f4a7ebe5e154a83db9e4) /plugins: Add inline enablement toggles (#18395) — _@canvrno-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
