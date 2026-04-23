# charmbracelet/crush — 2026-03-16

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-15T23:59:59.000Z → 2026-03-16T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

# Crush v0.50.0: resumable non-interactive sessions

The headline today is the **v0.50.0 release**, built around a long-requested feature from @seroperson: you can now continue non-interactive `crush run` sessions via `--continue`/`-C` (last session) or `--session`/`-s <id>` (specific session). This lands via #2401, which closes the older #1982 and #1124 requests and follows up on #2373. It makes scripted/CLI workflows substantially more useful since you no longer lose context when invoking Crush programmatically.

A handful of UX and provider fixes ride along in the same release:

- **Model picker filtering** now preserves the original model order instead of reshuffling results (#2416) — a small but visible quality-of-life fix.
- **Nested tool call rendering** is now consistent across states; previously calls would start blue and finish grey (#2411).
- **Vercel provider** API key validation is fixed (#2415) by including `catwalk.TypeVercel` in `ProviderConfig.TestConnection`, closing the contributor PR #2410 (which had the same fix plus tests) and issue #2409. A CI labeler entry for the new `vercel` label was also added (commit 9a5a510).

On the telemetry/ops side, #2408 wires PostHog events into the `crush session` CLI commands, tagging whether `--json` was used and distinguishing CLI- vs TUI-originated events — worth a look if you care about what's being reported. The earlier #2405 (already merged 03-13) exposing the transparent-background toggle in the command palette is also called out in the release.

Dependency hygiene: dependabot bumps landed for the all-group (#2414, 9 updates including catwalk 0.29.1→0.30.0, lipgloss 2.0.1→2.0.2, mcp go-sdk 1.4.0→1.4.1) and CI actions (#2386). Andrey also pushed two follow-up `catwalk` bumps directly (commits 2c7cccc, c3fa160).

Closed without merging: the Bedrock 1M-context-window PR #2321 (still blocked on upstream fantasy/catwalk changes) and an old WIP hooks prototype #1487. Background work on the `server-client-2` branch continues (merge commits ee13558, e8d2835) but isn't user-visible yet. No new issues were filed.

## Releases

- **[v0.50.0](https://github.com/charmbracelet/crush/releases/tag/v0.50.0)** — v0.50.0 _by @github-actions[bot] at 2026-03-16T20:52:26Z_
  > # Catching up with `crush run`
  > 
  > Did you know that you can Crush in a non-interactive manner? It's easy as `crush run`.
  > 
  > ```bash
  > crush run "what's the best tui framework for go?"
  > ```
  > 
  > That’s been a thing for a while. Starting with this release you can pickup sessions non-interactively thanks to an awesome feature by @seroperson:
  > 
  > * `--continue` (`-C`): continue last session
  > * `--session` (`-s`): continue a specific session
  > 
  > ```bash
  > # Continue a previous session
  > crush run --session {session-id} "u…


## Merged PRs

- [#2401](https://github.com/charmbracelet/crush/pull/2401) **feat: be able to continue non-interactive sessions** — _by @seroperson, merged 2026-03-16T20:40:29Z_
- [#2416](https://github.com/charmbracelet/crush/pull/2416) **fix: keep original order when filtering models** — _by @andreynering, merged 2026-03-16T19:14:29Z_
- [#2411](https://github.com/charmbracelet/crush/pull/2411) **fix(ui): nested tool styling** — _by @meowgorithm, merged 2026-03-16T19:13:02Z_
- [#2408](https://github.com/charmbracelet/crush/pull/2408) **chore(events): add events for the CLI session series of commands** — _by @meowgorithm, merged 2026-03-16T19:12:40Z_
- [#2386](https://github.com/charmbracelet/crush/pull/2386) **chore(deps): bump the all group with 2 updates** — _by @dependabot[bot], merged 2026-03-16T19:08:29Z_
- [#2405](https://github.com/charmbracelet/crush/pull/2405) **chore(ui): add toggle for transparent bg to palette** — _by @meowgorithm, merged 2026-03-13T20:47:06Z_
- [#2415](https://github.com/charmbracelet/crush/pull/2415) **fix(vercel): fix validation of api keys for vercel** — _by @andreynering, merged 2026-03-16T16:02:25Z_
- [#2414](https://github.com/charmbracelet/crush/pull/2414) **chore(deps): bump the all group with 9 updates** — _by @dependabot[bot], merged 2026-03-16T13:57:02Z_


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#2321](https://github.com/charmbracelet/crush/pull/2321) **feat: wire 1M context window support for Bedrock models** — _by @taigrr, closed 2026-03-16T17:12:00Z_
- [#2410](https://github.com/charmbracelet/crush/pull/2410) **fix(config): include vercel in test connection validation** — _by @xulongwu4, closed 2026-03-16T16:02:26Z_
- [#1487](https://github.com/charmbracelet/crush/pull/1487) **wip: initial hook** — _by @kujtimiihoxha, closed 2026-03-16T13:41:19Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`ee13558`](https://github.com/charmbracelet/crush/commit/ee13558119e539ed205d52aaa9d107e0b7a208a5) Merge remote-tracking branch 'origin/main' into server-client-2 — _@aymanbagabas_
- [`a533d78`](https://github.com/charmbracelet/crush/commit/a533d78e242284da5c1c349a3c1dfa390a7cfd9b) v0.50.0 — _@andreynering_
- [`fad58e2`](https://github.com/charmbracelet/crush/commit/fad58e2c269654c052a768191cc7a3ec0af391e5) feat: be able to continue non-interactive sessions (#2401) — _@seroperson_
- [`c9efb20`](https://github.com/charmbracelet/crush/commit/c9efb207ea0575ca837e2d957738452da78b366b) fix: keep original order when filtering models (#2416) — _@andreynering_
- [`6e56a7f`](https://github.com/charmbracelet/crush/commit/6e56a7f45acab2f19463ce69b29d13529ef81f35) lint: modernize new pointer creation (e.g. new(true)) — _@meowgorithm_
- [`b05a4ad`](https://github.com/charmbracelet/crush/commit/b05a4add77941265581e3508ce50429143e6a8fa) fix(ui): render nested tools consistently across states — _@meowgorithm_
- [`a1fc44b`](https://github.com/charmbracelet/crush/commit/a1fc44bb0d851f240a345cf3a1c76d5a9f78a3d2) chore(events): add events for the CLI session series of commands (#2408) — _@meowgorithm_
- [`8247f4c`](https://github.com/charmbracelet/crush/commit/8247f4cc21cec2ae87ca9ddb1049b3a2d5b11bda) chore(deps): bump the all group with 2 updates (#2386) — _@dependabot[bot]_
- [`2c7cccc`](https://github.com/charmbracelet/crush/commit/2c7ccccd403ae381657ad1bcb11c279d408c2df2) chore(deps): update catwalk — _@andreynering_
- [`c3fa160`](https://github.com/charmbracelet/crush/commit/c3fa16014c60e4c41e4eb72535f6b16c88beec4f) chore(deps): update catwalk — _@andreynering_
- [`efb52db`](https://github.com/charmbracelet/crush/commit/efb52db17ed78f68bb7de7c79bd575263292642a) fix(vercel): fix validation of api keys for vercel (#2415) — _@andreynering_
- [`e8d2835`](https://github.com/charmbracelet/crush/commit/e8d2835ddb42e3943078630f96e2097857a511fd) Merge branch 'main' into server-client-2 — _@aymanbagabas_
- [`9a5a510`](https://github.com/charmbracelet/crush/commit/9a5a510e68619bc4cdb4131665306219b1995cb2) ci(labeler): add vercel label — _@andreynering_
- [`580be20`](https://github.com/charmbracelet/crush/commit/580be20b8cae7fd67dc32c0aba63e13888152b23) chore(deps): bump the all group with 9 updates (#2414) — _@dependabot[bot]_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
