# charmbracelet/crush — 2026-04-21

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-04-20T23:59:59.000Z → 2026-04-21T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v0.61.1 patch release headlines the day

Charm shipped [v0.61.1](https://github.com/charmbracelet/crush/releases/tag/v0.61.1), a small QoL release focused on two things: more reliable skill loading (system prompt tweaks to nudge the model into invoking skills when appropriate), and a fix for the long-standing light-theme bug where markdown content could render as dark text on a dark background and effectively disappear (the WIP investigation lived in #2644). CI was also moved to the stable goreleaser action (commit 3474733) as part of cutting the release.

Beyond the release, two notable commits landed on `main`. `f7beb12` (#2607) makes Crush auto-detect diff-shaped output (e.g. diffs returned by the GitHub MCP server) and render it with proper diff styling instead of raw text — a nice readability win for MCP-heavy workflows. `d3f6d98` mitigates stale LSP diagnostics and adds a warning log when workspace-change notifications fail, which should reduce confusing red squigglies after edits.

On the inbound side, several user-facing regressions in v0.59–v0.60 are worth watching. #2667 reports that model/reasoning-effort switching via ctrl+p / ctrl+l is broken on v0.60.0 against LiteLLM (openai-compat) — the toast appears but the default model is still used. #2669 describes an infinite loop when a model returns a `write` tool call with an empty `input` string, requiring a force-quit. #2668 is a panic in the web UI when rendering Python `try/except` blocks ("Unknown line … 'except Exception as e:'"). #2662 (IPv6→IPv4 downgrades causing connection resets) and #2670 (Go 1.26.2 toolchain requirement breaking nixpkgs builds post-v0.55) round out the friction reports.

Two older issues were closed as resolved: #1216 (disable streaming per provider) and #908 (disable the ASCII waiting animation).

Open PR worth a look: #2663 (draft) replaces `App.events` with a `pubsub.Broker` to fix an SSE multi-consumer bug where clients sharing a workspace each saw only a fraction of events — relevant if you're running multi-client setups. #2620 (skills list with group-by-source, addressing #2608) is also still in review.

## Releases

- **[v0.61.1](https://github.com/charmbracelet/crush/releases/tag/v0.61.1)** — v0.61.1 _by @github-actions[bot] at 2026-04-21T13:36:33Z_
  > # Some small, nice enhancements
  > 
  > This is a small release, but with some small fixed and QoL enhancements.
  > 
  > ## More reliable skills
  > 
  > We made changes, inclusing in the system prompt, to ensure the model will load a skill when it should.
  > 
  > ## Fixes for light theme
  > 
  > If you use your terminal emulator with a light theme, it was possible that some markdown content appeared to be invisible. This happened due to a dark text on dark background issue, but it's now fixed!
  > 
  > <details><summary>Screenshot: Befor…


## Merged PRs

_None in window._


## Open PRs (new or updated)

- [#2663](https://github.com/charmbracelet/crush/pull/2663) _(draft)_ **fix(app): replace single events channel with pubsub.Broker for fan-out** — _by @taigrr, updated 2026-04-21T16:38:03Z_
- [#2620](https://github.com/charmbracelet/crush/pull/2620) **feat(cmd): add `crush skills list` command with group-by-source support** — _by @iceymoss, updated 2026-04-21T09:27:57Z_


## Closed PRs (not merged)

- [#2644](https://github.com/charmbracelet/crush/pull/2644) **WIP fix: attempt to address invisible text with terminal in light mode** — _by @andreynering, closed 2026-04-19T20:47:40Z_
- [#2020](https://github.com/charmbracelet/crush/pull/2020) **feat: add a model semaphore for concurrency control** — _by @AnyCPU, closed 2026-04-21T03:41:53Z_


## Notable Issues

- [#2670](https://github.com/charmbracelet/crush/issues/2670) **Relax golang dependency?** — _by @dbeecham_
- [#2669](https://github.com/charmbracelet/crush/issues/2669) **Trapped in an infinite loop when call `WRITE` tool but `input` is empty str ""** _[area: tools]_ — _by @Zim-Inn_
- [#2662](https://github.com/charmbracelet/crush/issues/2662) **Frequent IPv6 → IPv4 Downgrade Causing Connection Resets** — _by @dhrn_
- [#2668](https://github.com/charmbracelet/crush/issues/2668) **Frontend crashes with "Unknown line 6 'except Exception as e:'" when sending Python code** _[panic / crash]_ — _by @chenichangzi_
- [#2608](https://github.com/charmbracelet/crush/issues/2608) **Feature: Group skills by source package in `npx skills list`** — _by @lsy23_
- [#2667](https://github.com/charmbracelet/crush/issues/2667) **Model switching in cli broken** — _by @tomasnagy_
- [#1216](https://github.com/charmbracelet/crush/issues/1216) **Disable streaming per provider** _[feature]_ — _by @meowgorithm_ _(closed 2026-04-21T04:39:52Z)_
- [#908](https://github.com/charmbracelet/crush/issues/908) **Disable ASCII animation on waiting** — _by @alex-konkov_ _(closed 2026-04-21T04:39:52Z)_
- [#420](https://github.com/charmbracelet/crush/issues/420) **Add rate-limit functionality** _[Migrated]_ — _by @burp_


## Commits on `main`

- [`d3f6d98`](https://github.com/charmbracelet/crush/commit/d3f6d98ab9c02d560c40b34a2899438f04f9cc53) fix(lsp): mitigate stale diagnostics — _@meowgorithm_
- [`f7beb12`](https://github.com/charmbracelet/crush/commit/f7beb12689a337dade9d9c9bef575947188bcab7) feat: generally render output that looks like a diff as a diff (#2607) — _@meowgorithm_
- [`7edf395`](https://github.com/charmbracelet/crush/commit/7edf395786b6844edc2fa2adb838a4cb2338039e) v0.61.1 — _@andreynering_
- [`3474733`](https://github.com/charmbracelet/crush/commit/3474733771ad4537e12d22432ef8e3a1caee961e) ci: use stable goreleaser action — _@andreynering_
- [`82d373d`](https://github.com/charmbracelet/crush/commit/82d373da860cc8ce1f7e292c3b54e34e9fb6726c) chore(legal): @gavmor has signed the CLA — _@charmcli_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
