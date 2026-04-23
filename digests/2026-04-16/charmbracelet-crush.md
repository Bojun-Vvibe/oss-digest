# charmbracelet/crush — 2026-04-16

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-04-15T23:59:59.000Z → 2026-04-16T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v0.59.0 ships with skills sidebar, built-in `jq`, and a critical session-resume fix

The headline is the [v0.59.0 release](https://github.com/charmbracelet/crush/releases/tag/v0.59.0), cut at 21:13 UTC (commit `ce34984`). It bundles three user-visible changes worth noting:

- **Skills discoverability in the UI** (#2384, commit `b37649e`): the sidebar and landing page now display loaded/errored skills, addressing long-standing confusion like issue #1972 where users couldn't tell whether installed skills were actually being picked up. Implemented via a pubsub event so skill state flows directly to the UI.
- **`jq` as a Bash builtin plus a matching skill** (#2632): `jq` is now always available regardless of the user's environment, implemented on top of `github.com/itchyny/gojq` (whose CLI had to be reconstructed since it ships as a library). The PR also introduces two internal "meta-skills" — `builtin-skills` and `shell-builtins` — to streamline future contributions of the same kind.
- **Rio terminal progress bar support** (#2624, commit `e8f5e20`).

The most important bug fix is #2622 by KimBioInfoStudio: when a session was interrupted mid-tool-call (Ctrl-C, network timeout), the assistant message kept an orphaned `tool_use` block with no matching `tool_result`, and the Anthropic API would then reject the resumed conversation with `invalid_request_error`, permanently locking the session. The fix injects a synthetic `tool_result` on resume — the symmetric counterpart to the existing `filterOrphanedToolResults` logic. Anyone hitting unrecoverable sessions should upgrade.

Smaller but worth flagging: #2635 patches the system prompt to remind the coder agent to follow the `<git_commits>` attribution format (Opus was forgetting it), and commit `1e0e816` bumps bubbletea to v2.0.6 to fix a wide-character rendering bug.

The rest of the day is test/CI hygiene from andreynering: integration tests were simplified to run against a single provider/model (re-recording VCRs across many models was too painful and flaky), VCR cassettes were re-recorded multiple times (`8bab8b3`, `fa50f36`, `076cb1c`), a migration-setup race was fixed (`4b3dff3`, `73fec04`), and build/lint workflows now run only once per PR (`52dcef6`).

## Releases

- **[v0.59.0](https://github.com/charmbracelet/crush/releases/tag/v0.59.0)** — v0.59.0 _by @github-actions[bot] at 2026-04-16T21:21:52Z_
  > # Skills in sidebar, built-in `jq`, performance
  > 
  > Hey all! We hope you're having a great week!
  > 
  > Today's release is very cool, with some nice goodies :sparkles:, let's check them out!
  > 
  > ## Skills sidebar
  > 
  > Crush will now show, in the sidebar, which skills are available. Very useful feature contributed by @huaiyuWangh to help discoverability.
  > 
  > <img width="216" height="153" alt="Screenshot 2026-04-16 at 18 20 40" src="https://github.com/user-attachments/assets/315acc40-08e6-4154-9c9d-b6eecc3fd453" />…


## Merged PRs

- [#2635](https://github.com/charmbracelet/crush/pull/2635) **fix(prompt): remind coder to follow `<git_commits>` format on commit** — _by @andreynering, merged 2026-04-16T20:54:19Z_
- [#2632](https://github.com/charmbracelet/crush/pull/2632) **feat(shell): add jq as a bash builtin + a jq skill for it** — _by @meowgorithm, merged 2026-04-16T20:41:31Z_
- [#2622](https://github.com/charmbracelet/crush/pull/2622) **fix: inject synthetic tool_result for orphaned tool_use on session resume** — _by @KimBioInfoStudio, merged 2026-04-16T18:34:02Z_


## Open PRs (new or updated)

_None in window._


## Notable Issues

- [#1972](https://github.com/charmbracelet/crush/issues/1972) **Improvements to the Skills feature (knowing what skills it has)** — _by @taoeffect_ _(closed 2026-03-02T02:58:46Z)_


## Commits on `main`

- [`ce34984`](https://github.com/charmbracelet/crush/commit/ce34984d45b2e81e5314f2dd3e0708a1af3073fa) v0.59.0 — _@andreynering_
- [`73fec04`](https://github.com/charmbracelet/crush/commit/73fec04aeb2fb8dc68184b766e172000fc06695b) ci: fix test race condition — _@andreynering_
- [`52dcef6`](https://github.com/charmbracelet/crush/commit/52dcef66a035fd5321b6c415d9d005089b67c7ba) ci: only run `build` and `lint` workflows once in pull requests — _@andreynering_
- [`8bab8b3`](https://github.com/charmbracelet/crush/commit/8bab8b3f7b9d95921a24fe86d003d3c4d829698e) test: re-record vcr cassettes — _@andreynering_
- [`f546a07`](https://github.com/charmbracelet/crush/commit/f546a071891c4ced02c832ff1789534df2874bda) fix(prompt): remind coder to follow `<git_commits>` format on commit — _@andreynering_
- [`e0a3f4d`](https://github.com/charmbracelet/crush/commit/e0a3f4dbb8f85d2b7ad2e744c86a0dd97b94e39b) chore: `task fmt` — _@andreynering_
- [`fa50f36`](https://github.com/charmbracelet/crush/commit/fa50f36dd1fc331b58cc8b80d1578be13b0a05dc) test: re-record vcr cassettes — _@andreynering_
- [`3773b23`](https://github.com/charmbracelet/crush/commit/3773b23cb44afc4567d892f01c41c8dc62556ca0) feat(shell): add jq as a bash builtin + a jq skill for it — _@meowgorithm_
- [`b37649e`](https://github.com/charmbracelet/crush/commit/b37649e45299d426aeae73a54efc0d1155fb5c91) feat(ui): add skills discovery status to sidebar and landing page (#2384) — _@huaiyuWangh_
- [`e8f5e20`](https://github.com/charmbracelet/crush/commit/e8f5e2025d2401ffe06123c42226f3b7a20abe3a) feat: show progress bar on rio terminal (#2624) — _@andreynering_
- [`4b3dff3`](https://github.com/charmbracelet/crush/commit/4b3dff30f8405f0e4ad64f346fea6fb16eac14d6) test: run migration setup once to avoid race condition — _@andreynering_
- [`076cb1c`](https://github.com/charmbracelet/crush/commit/076cb1c42b3eef69b938dde45b239a8ce69bd150) test: re-record vcr cassettes — _@andreynering_
- [`4e66ada`](https://github.com/charmbracelet/crush/commit/4e66adae437b51ff522d22705ce6fc2fb2ce71f2) test: simplify integration tests, run for a single provider / model — _@andreynering_
- [`53c9774`](https://github.com/charmbracelet/crush/commit/53c9774ca1807e8d7fe9d30d5eb7c484327d7bb8) test: reduce amount of logs print on `go test -v` — _@andreynering_
- [`1528c82`](https://github.com/charmbracelet/crush/commit/1528c82f2e2d03c1ef5eaa56edd469f0f8309baf) fix: inject synthetic tool_result for orphaned tool_use on session resume (#2622) — _@KimBioInfoStudio_
- [`1e0e816`](https://github.com/charmbracelet/crush/commit/1e0e816381f436db7f67211d6a9a2fe9c6d3cd0e) chore: bump bubbletea to v2.0.6 to fix wide char issue — _@aymanbagabas_
- [`f61ae45`](https://github.com/charmbracelet/crush/commit/f61ae4588d6df5ddb25968a698d8ae1f31428b6a) chore(legal): @taigong12 has signed the CLA — _@charmcli_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
