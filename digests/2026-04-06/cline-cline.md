# cline/cline — 2026-04-06

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-04-05T23:59:59.000Z → 2026-04-06T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A quiet day in cline/cline — no releases, no new notable issues, and the merged work is dominated by documentation and copy adjustments rather than functional changes.

The most user-visible change is a CLI copy fix ([#10161](https://github.com/cline/cline/pull/10161), commit [5df470b](https://github.com/cline/cline/commit/5df470bf4883a6ddb9a3016a20d8fdb3b14558cc)) by saoudrizwan, which rewords the Kanban migration view shown to existing CLI users. The previous text ("Cline is moving out of the terminal", "the old CLI") implied the terminal TUI was being deprecated; the new copy reframes Kanban as an addition and explicitly tells users they can keep running `cline --tui` for the terminal experience. Worth a quick read if you're tracking product positioning around the CLI/TUI/Kanban split.

The rest of the day's merges are documentation cleanups from jl-codes:

- [#10155](https://github.com/cline/cline/pull/10155) completes docs for environment-variable-based OpenTelemetry configuration — useful reference if you're wiring Cline into observability stacks.
- [#10153](https://github.com/cline/cline/pull/10153) removes "Teams Plan" references from the managing-members docs, consolidating multi-seat messaging onto Enterprise. Signals a product-strategy shift away from a distinct Teams tier.
- [#10127](https://github.com/cline/cline/pull/10127) expands the Remote Provider Configuration docs to cover all enterprise inference providers (including OpenAI-Compatible and Anthropic).

On the open-PR side, a few things are worth watching but didn't land:

- [#9170](https://github.com/cline/cline/pull/9170) (Prompts Library with community + team prompts, fetched from `github.com/cline/prompts`) saw further activity — a substantive feature that adds a new sidebar view and gRPC plumbing.
- [#10050](https://github.com/cline/cline/pull/10050) proposes adding GLM 5.1 to the Z AI international provider and making it the new default there.
- [#10156](https://github.com/cline/cline/pull/10156) is a small docs PR reflecting that the "Enable notifications" toggle has moved into the Auto Approve menu (fixes #7810).

Also note [#10162](https://github.com/cline/cline/pull/10162) (enterprise license link fix) was opened and closed unmerged within minutes — likely superseded or re-routed.

Skim target: #10161 for the TUI/Kanban messaging, then #9170 if you care about the Prompts Library direction.

## Releases

_None in window._


## Merged PRs

- [#10161](https://github.com/cline/cline/pull/10161) **fix(cli): update kanban migration copy to not imply TUI deprecation** — _by @saoudrizwan, merged 2026-04-06T23:00:12Z_
- [#10155](https://github.com/cline/cline/pull/10155) **Complete documentation for environment variable-based OpenTelemetry configs** — _by @jl-codes, merged 2026-04-06T21:22:57Z_
- [#2399](https://github.com/cline/cline/pull/2399) **Fix gpt-4.5-preview's supportsPromptCache value to true** — _by @PeterDaveHello, merged 2025-03-24T23:11:56Z_
- [#10153](https://github.com/cline/cline/pull/10153) **docs: remove Teams Plan references, focus on Enterprise** — _by @jl-codes, merged 2026-04-06T18:28:51Z_
- [#10127](https://github.com/cline/cline/pull/10127) **docs: add all enterprise inference providers to Remote Provider Configuration** — _by @jl-codes, merged 2026-04-06T03:51:44Z_


## Open PRs (new or updated)

- [#9170](https://github.com/cline/cline/pull/9170) **feat: implement Prompts Library with community and team prompt support** — _by @jl-codes, updated 2026-04-06T21:35:32Z_
- [#10156](https://github.com/cline/cline/pull/10156) **docs: update auto-approve menu with notification toggle location** — _by @chernistry, updated 2026-04-06T19:15:55Z_
- [#10050](https://github.com/cline/cline/pull/10050) **feat: add GLM 5.1 model to Z AI international provider** — _by @jl-codes, updated 2026-04-06T17:24:50Z_


## Closed PRs (not merged)

- [#10162](https://github.com/cline/cline/pull/10162) **docs: fix enterprise license link to point to contact sales** — _by @jl-codes, closed 2026-04-06T22:55:12Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`5df470b`](https://github.com/cline/cline/commit/5df470bf4883a6ddb9a3016a20d8fdb3b14558cc) fix(cli): update kanban migration view copy to not imply TUI deprecation (#10161) — _@saoudrizwan_
- [`034c434`](https://github.com/cline/cline/commit/034c4342d120bb7a41e59fb3c3970ba4084362dc) Complete documentation for environment variable-based OpenTelemetry configs (#10155) — _@jl-codes_
- [`349295a`](https://github.com/cline/cline/commit/349295ab2cac7286b632034c018d82ad461a5d4c) docs: remove Teams Plan references, focus on Enterprise (#10153) — _@jl-codes_
- [`841402c`](https://github.com/cline/cline/commit/841402c1789d7d9017fa5146cec98fcea18363c5) docs: add all enterprise inference providers to Remote Provider Configuration (#10127) — _@jl-codes_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
