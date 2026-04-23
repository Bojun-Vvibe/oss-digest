# charmbracelet/crush — 2026-03-09

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-08T23:59:59.000Z → 2026-03-09T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy bug-fix day, headlined by a crash fix and a new security-flavored PR still in review.

The most important merge is **#2387** (`fix(events): panic when metrics are disabled`), labeled `panic / crash` — anyone running with telemetry off should pick up this fix. Closely related, **#2371** removes a redundant PostHog exit event that was producing an error on every shutdown (the app had already been shut down via `defer app.Shutdown()` before Cobra's `PostRun` fired the event again).

The most interesting open PR is **#2392** from `aleksclark`, which hardens the Glob and Grep tools against the LLM passing `path: "/"` and triggering a full filesystem walk via `rg`. It adds a `clampToWorkingDir()` helper to both tools, makes `GlobWithDoubleStar`'s fastwalk fallback honor `ctx.Done()` per entry, and fixes agentic fetch to use `filepath.Base` for temp `page-*.md` paths so the sub-agent can resolve them relative to its own working directory. Worth a read for anyone concerned about sandbox escape via tool arguments.

Other merged fixes:
- **#2372** makes non-interactive sessions actually call the model to generate titles (previously the title was just the raw prompt, including piped stdin) and drops the now-pointless `non-interactive:` prefix.
- **#2379** properly truncates the UI info message (before/after screenshots in the PR).
- **#2356** is small agent-package tidying to simplify logic and reduce allocations (see commits `a3bfa19`, `7d50e8f`).
- **#2388** refreshes `AGENTS.md` based on a scan of the current project and commit history — useful onboarding context for contributors.

Notably **closed but not merged**: **#2390** from `ZeitbyteRepo`, a large "Orchestra" multi-agent orchestration proposal (hierarchical managers, GitHub integration, git-worktree isolation, a Crush-instance subprocess tool, a DB-backed dispatch service, YAML spec parser). It was closed within ~20 minutes of opening despite the author signing the CLA (commit `1f1426b`) — a signal the maintainers aren't pursuing in-tree multi-agent orchestration of that scope right now.

No releases, no new issues.

## Releases

_None in window._


## Merged PRs

- [#2388](https://github.com/charmbracelet/crush/pull/2388) **chore: update AGENTS.md** — _by @meowgorithm, merged 2026-03-09T17:45:00Z_
- [#2356](https://github.com/charmbracelet/crush/pull/2356) **chore(agent): miscellaneous tidying up** — _by @meowgorithm, merged 2026-03-09T14:01:15Z_
- [#2371](https://github.com/charmbracelet/crush/pull/2371) **fix(events): remove redundant posthog exit event** — _by @meowgorithm, merged 2026-03-09T14:00:40Z_
- [#2372](https://github.com/charmbracelet/crush/pull/2372) **fix(noninteractive): actually use models to generate titles** — _by @meowgorithm, merged 2026-03-09T14:00:20Z_
- [#2387](https://github.com/charmbracelet/crush/pull/2387) **fix(events): panic when metrics are disabled** — _by @meowgorithm, merged 2026-03-09T13:56:45Z_
- [#2379](https://github.com/charmbracelet/crush/pull/2379) **fix(ui): properly truncate info message** — _by @aymanbagabas, merged 2026-03-09T12:15:47Z_


## Open PRs (new or updated)

- [#2392](https://github.com/charmbracelet/crush/pull/2392) **fix: prevent glob/grep from searching outside working dir and fix agentic fetch file paths** — _by @aleksclark, updated 2026-03-09T18:36:27Z_


## Closed PRs (not merged)

- [#2390](https://github.com/charmbracelet/crush/pull/2390) **feat: add Orchestra multi-agent orchestration and nested agent spawning** — _by @ZeitbyteRepo, closed 2026-03-09T17:13:45Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`45c25b3`](https://github.com/charmbracelet/crush/commit/45c25b34733f5f0b59bb9f7a05b057100eae3632) chore: update AGENTS.md (#2388) — _@meowgorithm_
- [`1f1426b`](https://github.com/charmbracelet/crush/commit/1f1426be8b202c496f88ff80a7ab090315f700d0) chore(legal): @ZeitbyteRepo has signed the CLA — _@charmcli_
- [`a3bfa19`](https://github.com/charmbracelet/crush/commit/a3bfa1975f4a9842e4f52735424145f521e9bab1) chore(agent): allocate errors once, reuse errors — _@meowgorithm_
- [`7d50e8f`](https://github.com/charmbracelet/crush/commit/7d50e8f8e7a8bc9b32000a5c97c43f8fc1b1b8df) chore(agent): cleanup logic — _@meowgorithm_
- [`e0d3141`](https://github.com/charmbracelet/crush/commit/e0d3141af1477da55bf4591a85fe98a8a80a6f28) fix(events): remove redundant posthog exit event (#2371) — _@meowgorithm_
- [`2dacfbd`](https://github.com/charmbracelet/crush/commit/2dacfbd90c237d269d2f42b4cfc9880a54c72857) fix(noninteractive): actually use models to generate titles (#2372) — _@meowgorithm_
- [`ec8c8dd`](https://github.com/charmbracelet/crush/commit/ec8c8dd22b46496729e725387e15a33ddede26c9) fix(events): panic when metrics are disabled — _@meowgorithm_
- [`4fee559`](https://github.com/charmbracelet/crush/commit/4fee559a7e675ff21bb04162d44cca3b89dcdcc5) fix(ui): properly truncate info message (#2379) — _@aymanbagabas_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
