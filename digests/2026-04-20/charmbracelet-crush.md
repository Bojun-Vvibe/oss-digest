# charmbracelet/crush — 2026-04-20

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-04-19T23:59:59.000Z → 2026-04-20T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## charmbracelet/crush — 2026-04-20

The day's headline is the **v0.61.0 tag** (commit `ea50d10`), which ships two notable user-facing fixes landed earlier in the day.

The most important change is **#2654 (`fix(skills): increase skill load reliability`)** from meowgorithm. Skills were frequently not being loaded when they should have been; A/B tests across 7 cases with GLM-5.1 and Kimi K2.5 reportedly took success from 64% to substantially higher. The PR rewrites builtin skill descriptions to focus on *when* a skill applies (see also refactor commit `0a86d5f`), makes loading the `SKILL.md` mandatory before acting (`e64db33`), and adds activation logging (`2da70c1`) for diagnosing future failures. If you only read one thing today, read this PR plus its three supporting commits.

The other shipped fix is **#2656** (andreynering): the markdown renderer now uses the same chroma formatter as diffview, resolving black-on-black invisible text on light terminal themes and incidental whitespace bugs. Routine dependency bumps also merged (#2660, plus #2659) — catwalk 0.37.0→0.37.3, fantasy 0.18→0.19, lipgloss 2.0.2→2.0.3, go-git 5.17.2→5.18.

On the issue side, two new feature requests are worth tracking: **#2664** proposes making `web_search` engine-pluggable and adding an API-based option, arguing the current DuckDuckGo lite scrape is flaky and token-heavy; and **#2666** reports that on macOS, agent git operations silently hang at a `Username for 'https://github.com':` prompt when GitHub isn't pre-authenticated — a likely-common first-run papercut. **#2657** (auto-retry on z.ai connection resets) was closed without a linked fix.

No new PRs of substance opened today; older open PRs (ACP server #2450, configurable agent model size #2584, configurable banned commands #2511, ask-user-questions tool #2579) only saw metadata churn. Issue **#2661** (Windows viewport scroll lockup) was closed same-day as a likely duplicate.

## Releases

_None in window._


## Merged PRs

- [#2654](https://github.com/charmbracelet/crush/pull/2654) **fix(skills): increase skill load reliability** — _by @meowgorithm, merged 2026-04-20T20:23:36Z_
- [#2656](https://github.com/charmbracelet/crush/pull/2656) **fix: use same chroma formatter as diffview for markdown** — _by @andreynering, merged 2026-04-20T20:06:54Z_
- [#2444](https://github.com/charmbracelet/crush/pull/2444) **fix(fantasy): fix copilot tool calls, fix ollama compatibility** — _by @andreynering, merged 2026-03-20T20:13:40Z_
- [#2615](https://github.com/charmbracelet/crush/pull/2615) **fix(agent): validate tool call/results + strip tags from titles** — _by @meowgorithm, merged 2026-04-13T17:11:36Z_
- [#2629](https://github.com/charmbracelet/crush/pull/2629) **fix(system-prompt): remove "portuguese" as example** — _by @andreynering, merged 2026-04-15T13:32:55Z_
- [#2636](https://github.com/charmbracelet/crush/pull/2636) **test: simplify integration tests, run for a single provider / model** — _by @andreynering, merged 2026-04-16T19:40:25Z_
- [#2624](https://github.com/charmbracelet/crush/pull/2624) **feat: show progress bar on rio terminal** — _by @andreynering, merged 2026-04-16T20:29:28Z_
- [#2384](https://github.com/charmbracelet/crush/pull/2384) **feat(ui): add skills discovery status to sidebar and landing page** — _by @huaiyuWangh, merged 2026-04-16T20:40:03Z_
- [#2521](https://github.com/charmbracelet/crush/pull/2521) **fix(csync): use pointer receiver for JSONSchemaAlias** — _by @huaiyuWangh, merged 2026-03-30T12:43:34Z_
- [#2557](https://github.com/charmbracelet/crush/pull/2557) **docs(readme): mention `AVIAN_API_KEY`** — _by @avianion, merged 2026-04-08T19:53:03Z_
- [#2660](https://github.com/charmbracelet/crush/pull/2660) **chore(deps): bump the all group with 6 updates** — _by @dependabot[bot], merged 2026-04-20T13:54:46Z_
- [#2640](https://github.com/charmbracelet/crush/pull/2640) **feat(hyper): use openai-compatible endpoint for hyper** — _by @andreynering, merged 2026-04-17T16:42:01Z_
- [#2641](https://github.com/charmbracelet/crush/pull/2641) **feat: enable progress bar on iterm2** — _by @andreynering, merged 2026-04-17T18:52:14Z_


## Open PRs (new or updated)

- [#2450](https://github.com/charmbracelet/crush/pull/2450) **feat: run Crush as an ACP server** — _by @whatnick, updated 2026-04-20T16:58:20Z_
- [#2584](https://github.com/charmbracelet/crush/pull/2584) **feat(agent): allow user to configure agent model size** — _by @BrunoKrugel, updated 2026-04-20T16:51:00Z_
- [#2634](https://github.com/charmbracelet/crush/pull/2634) **fix(logs): guard against unsafe type assertions in printLogLine** — _by @taigong12, updated 2026-04-20T16:50:43Z_
- [#2511](https://github.com/charmbracelet/crush/pull/2511) **Feat/configurable banned commands** — _by @srivilliamsai, updated 2026-04-20T14:41:33Z_
- [#2647](https://github.com/charmbracelet/crush/pull/2647) **fix(ui): fix AtBottom() early exit not accounting for offsetLine** — _by @octo-patch, updated 2026-04-20T13:40:05Z_
- [#2646](https://github.com/charmbracelet/crush/pull/2646) **feat(ui): add CamelHumps editing for ctrl word shortcuts** — _by @enrell, updated 2026-04-20T07:07:31Z_
- [#2579](https://github.com/charmbracelet/crush/pull/2579) **feat(tool): add `ask-user-questions` tool** — _by @detro, updated 2026-04-20T07:06:47Z_
- [#2532](https://github.com/charmbracelet/crush/pull/2532) **docs: fix and improve documentation** — _by @afsuyadi, updated 2026-04-20T07:05:17Z_


## Closed PRs (not merged)

- [#1250](https://github.com/charmbracelet/crush/pull/1250) **feat(tui): reduce animations** — _by @caarlos0, closed 2026-01-30T12:53:19Z_


## Notable Issues

- [#2666](https://github.com/charmbracelet/crush/issues/2666) **MacOS - Github actions freeze if Github is not first authenticated** _[os: macos]_ — _by @Tydorius_
- [#2664](https://github.com/charmbracelet/crush/issues/2664) **Improve the web_search tool: Offer multiple search engine options** — _by @taoeffect_
- [#2657](https://github.com/charmbracelet/crush/issues/2657) **Should auto try** — _by @dhrn_ _(closed 2026-04-20T16:44:02Z)_
- [#2661](https://github.com/charmbracelet/crush/issues/2661) **Viewport jumps to top and gets stuck, unable to scroll back to latest content (Windows)** _[os: windows, area: mouse]_ — _by @excess122_ _(closed 2026-04-20T15:39:18Z)_
- [#2413](https://github.com/charmbracelet/crush/issues/2413) **After configuring the language server, it didn't take effect.** — _by @Yakumo-Yukari_
- [#2651](https://github.com/charmbracelet/crush/issues/2651) **Feature request: in-session switching for `reasoning_effort`** _[area: session]_ — _by @Lucky-H6_


## Commits on `main`

- [`ea50d10`](https://github.com/charmbracelet/crush/commit/ea50d105746d913401372e52b758281d53167fac) v0.61.0 — _@andreynering_
- [`0a86d5f`](https://github.com/charmbracelet/crush/commit/0a86d5f781eaa4b251724872a46a4bd15d97cc7d) refactor(skills): strip implementation hints from crush-owned descriptions — _@meowgorithm_
- [`e64db33`](https://github.com/charmbracelet/crush/commit/e64db33eebb97916595596a7860c3713e7ab93f8) feat(prompt): require loading appropriate skills before acting — _@meowgorithm_
- [`2da70c1`](https://github.com/charmbracelet/crush/commit/2da70c19712618b4e0ecd15b99df3a23a7acad8a) feat(skills): log skill activation to help diagnose load failures — _@meowgorithm_
- [`3138c8b`](https://github.com/charmbracelet/crush/commit/3138c8bc656075148b05e893ed2b9498d4cbef39) fix: use same chroma formatter as diffview for markdown (#2656) — _@andreynering_
- [`0e9e0a6`](https://github.com/charmbracelet/crush/commit/0e9e0a6abbff4b5e31482aaf55b87edbec5840ba) chore(deps): bump the all group with 2 updates (#2659) — _@dependabot[bot]_
- [`f15c2d7`](https://github.com/charmbracelet/crush/commit/f15c2d79c69cdc16624990b977cee4e398b4f704) chore(deps): bump the all group with 6 updates (#2660) — _@dependabot[bot]_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
