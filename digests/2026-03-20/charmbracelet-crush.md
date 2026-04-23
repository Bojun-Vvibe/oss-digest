# charmbracelet/crush — 2026-03-20

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-19T23:59:59.000Z → 2026-03-20T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v0.51.2 patch: Copilot & Ollama tool calls fixed

The headline today is the **v0.51.2 release** ([notes](https://github.com/charmbracelet/crush/releases/tag/v0.51.2)), a small but meaningful patch landing two long-standing tool-call bugs via a single fantasy-package fix (commit a2d4537, PR #2444):

- **Copilot tool calls with no arguments** (e.g. listing files at the project root) were broken and now work — closing issue #1767.
- **Ollama tool-call compatibility** has been improved to align with how Ollama diverges from the OpenAI-compatible spec — closing issue #714. This also obsoleted the community fix in PR #1774 (add `disable_tools` option), which was closed unmerged the same day.

Release plumbing also got attention: commit 3977e51 attempts to fix dependabot, and two dependency bumps merged cleanly — `modernc.org/sqlite` 1.46.1 → 1.47.0 (#2445, notable for adding a CGO-free `sqlite-vec` vector extension) and the CI `codeql-action` + `anchore/scan-action` group (#2446).

### New / active PRs worth tracking

- **#2435 — `fix(mcp): include resources in startup state + safely cleanup resources`** (meowgorithm, draft). Ensures UI tooling sees the full MCP state on startup and properly tears down resources. Small extra call on boot, but should be negligible.
- **#2443 — `chore(mcp/docker): various improvements and housekeeping`** (meowgorithm, draft, opened today). No description yet; pair it with #2435 if you're following the MCP work.
- **#2246 — `feat(config): add config to not display non configured providers`** (julienrbrt). Quality-of-life flag to hide unconfigured providers from the picker; auto-configured Copilot motivated it. Saw activity today but not yet merged.
- **#2037 — Crush Plugin System MVP** (aleksclark, draft since January). Still ticking along with updates today; worth a skim if you care about extensibility direction, though it remains exploratory.

No new issues were filed in the window.

## Releases

- **[v0.51.2](https://github.com/charmbracelet/crush/releases/tag/v0.51.2)** — v0.51.2 _by @github-actions[bot] at 2026-03-20T20:28:57Z_
  > # Friday patch
  > 
  > Hello coders. We're bringing you a patch with a couple small but yet meaningful fixes.
  > 
  > ## Copilot tool calls
  > 
  > GitHub Copilot tool calls were broken when they had no arguments. An example of a a tool that don't require arguments is listing files when in the project root. This has now been fixed.
  > 
  > ## Ollama tool calls
  > 
  > In a similar manner, Ollama tools can differ a bit compared to OpenAI and other OpenAI-compatible providers. We improved how we handle those so tool calls for Ollam…


## Merged PRs

- [#2446](https://github.com/charmbracelet/crush/pull/2446) **chore(deps): bump the all group with 2 updates** — _by @dependabot[bot], merged 2026-03-20T20:29:37Z_
- [#2445](https://github.com/charmbracelet/crush/pull/2445) **chore(deps): bump modernc.org/sqlite from 1.46.1 to 1.47.0 in the all group** — _by @dependabot[bot], merged 2026-03-20T20:29:13Z_


## Open PRs (new or updated)

- [#2037](https://github.com/charmbracelet/crush/pull/2037) **Crush Plugin System MVP** — _by @aleksclark, updated 2026-03-20T21:48:29Z_
- [#2246](https://github.com/charmbracelet/crush/pull/2246) **feat(config): add config to not display non configured providers** — _by @julienrbrt, updated 2026-03-20T20:38:53Z_
- [#2443](https://github.com/charmbracelet/crush/pull/2443) _(draft)_ **chore(mcp/docker): various improvements and housekeeping** — _by @meowgorithm, updated 2026-03-20T19:40:26Z_
- [#2435](https://github.com/charmbracelet/crush/pull/2435) _(draft)_ **fix(mcp): include resources in startup state + safely cleanup resources** — _by @meowgorithm, updated 2026-03-20T16:33:23Z_


## Closed PRs (not merged)

- [#1774](https://github.com/charmbracelet/crush/pull/1774) **fix:add disable_tools option to fix Ollama streaming** — _by @Gustave-241021, closed 2026-03-20T19:56:38Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`de33ce7`](https://github.com/charmbracelet/crush/commit/de33ce79e5d28ec5b9094b0eff7ffc7aad361069) chore(deps): bump the all group with 2 updates (#2446) — _@dependabot[bot]_
- [`2521cb0`](https://github.com/charmbracelet/crush/commit/2521cb0cf0200142cf8e2ca9d4672763f6bb5c43) chore(deps): bump modernc.org/sqlite in the all group (#2445) — _@dependabot[bot]_
- [`3977e51`](https://github.com/charmbracelet/crush/commit/3977e5132d1809845c4d0933847cebea99284136) ci: attempt to fix dependabot — _@andreynering_
- [`3f288b8`](https://github.com/charmbracelet/crush/commit/3f288b803de4fa01b43b143d659b7b60c4af9907) v0.51.2 — _@andreynering_
- [`a2d4537`](https://github.com/charmbracelet/crush/commit/a2d45378c20e3747b7a0ad73b4f93cc0c2130ff0) fix(fantasy): fix copilot tool calls, fix ollama compatibility (#2444) — _@andreynering_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
