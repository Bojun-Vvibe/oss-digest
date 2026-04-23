# charmbracelet/crush — 2026-03-12

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-11T23:59:59.000Z → 2026-03-12T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v0.48.0 ships with notifications and CLI session management

The headline today is the **v0.48.0 release** ([link](https://github.com/charmbracelet/crush/releases/tag/v0.48.0)), a sizable cut featuring desktop notifications (Crush now pings you on permission requests and task completion), CLI-based session management, and a batch of bugfixes. Worth reading the release notes in full.

The marquee feature behind the release is **#2373 (CLI-based session access and management)** from `meowgorithm`, which adds subcommands for inspecting and managing sessions with `--json` output for machine-readable use. It's pitched primarily at evaluations and non-interactive workflows, but has user-facing utility too. Paired with this, **#2402** wires up a command palette entry to toggle the new notifications.

Also notable on the tooling side: **#2183 (configurable auto-background threshold for bash tool)** from `portertech` finally landed after a month in review. LLMs can now pass `auto_background_after` per invocation to override the hardcoded 60-second threshold before long-running commands get backgrounded — useful for tuning agent behavior on slow builds or quick scripts.

Under the hood, there's significant config and workspace plumbing happening:

- A config refactor (commit `5ff8d68`) introduces `ConfigStore` and `Scope`, making `config.Config` immutable — a structural change worth a look if you touch config code.
- `aymanbagabas` is mid-stream on a server/client split for workspace access (commits `e70c8ba`, `99108f0`, plus a fix in `344eb32` adding retry logic and proper resource cleanup for workspace creation), and renamed `Permissions.SkipRequests` to `Overrides().SkipPermissionRequests` (`64f6cdf`) — a minor breaking rename for downstream consumers.

Housekeeping rounds it out: **#2403** updates the user-agent string convention (`Charm Crush` → `Charm-Crush` with a project-link comment) and re-records test fixtures; **#2389** expands `ui/AGENTS.md` to better guide agent-driven UI work. The `fang v2` bump (#2398) was closed unmerged as a draft.

No new issues or open PRs filed in the window.

## Releases

- **[v0.48.0](https://github.com/charmbracelet/crush/releases/tag/v0.48.0)** — v0.48.0 _by @github-actions[bot] at 2026-03-12T17:33:48Z_
  > # Notifications, CLI-based session management, and more
  > 
  > :wave: Hello all! This is a fairly beefy release with a some nice features and a slew of bugfixes.
  > 
  > ## Notifications
  > 
  > Sometimes LLMs take a while to do so things and, naturally, we go and do other things in the meantime. Now, Crush will send a notification when it needs your attention (e.g. permission requests) and when it finishes its work. How thoughtful!
  > 
  > <p><img width="275" src="https://github.com/user-attachments/assets/706221e6-a59c-…


## Merged PRs

- [#2183](https://github.com/charmbracelet/crush/pull/2183) **feat: add configurable auto-background threshold for bash tool** — _by @portertech, merged 2026-03-12T20:53:45Z_
- [#2402](https://github.com/charmbracelet/crush/pull/2402) **chore(ui): add command palette entry for toggling notifications** — _by @meowgorithm, merged 2026-03-12T17:20:28Z_
- [#2403](https://github.com/charmbracelet/crush/pull/2403) **chore: update fantasy + adjust user-agent string + re-record test fixtures** — _by @andreynering, merged 2026-03-12T17:12:01Z_
- [#2389](https://github.com/charmbracelet/crush/pull/2389) **chore: update ui/AGENTS.md** — _by @meowgorithm, merged 2026-03-12T16:38:51Z_
- [#2373](https://github.com/charmbracelet/crush/pull/2373) **feat: CLI-based session access and management** — _by @meowgorithm, merged 2026-03-12T16:09:43Z_


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#2398](https://github.com/charmbracelet/crush/pull/2398) **chore(deps): bump fang to v2** — _by @meowgorithm, closed 2026-03-12T03:28:23Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`f1bdb9c`](https://github.com/charmbracelet/crush/commit/f1bdb9c9b815f884b81e5b6bf810e74b8f5f48a6) feat: add configurable auto-background threshold for bash tool (#2183) — _@portertech_
- [`344eb32`](https://github.com/charmbracelet/crush/commit/344eb3223b01d7d8e4c88e135bc20c5c0b550777) fix: ensure proper resource cleanup and add retry logic for workspace creation — _@aymanbagabas_
- [`85f91c4`](https://github.com/charmbracelet/crush/commit/85f91c4457b2dac74f34e6b17a35b7b5e063ba42) v0.48.0 — _@andreynering_
- [`ca32607`](https://github.com/charmbracelet/crush/commit/ca32607dc23f2b3f93204dcad32c89ef6ebb7e7a) chore(ui): add command palette entry for toggling notifications (#2402) — _@meowgorithm_
- [`d3b4ab2`](https://github.com/charmbracelet/crush/commit/d3b4ab23fe9afb7477e2817727cdd5e424255c95) test: re-record test fixtures — _@andreynering_
- [`cee203d`](https://github.com/charmbracelet/crush/commit/cee203d423aa9a1249fcc40fb7ea06225d27a290) chore: update user-agent string to better follow the convention — _@andreynering_
- [`4d98118`](https://github.com/charmbracelet/crush/commit/4d98118bc11b0d31fe15f14dd1deb919b844b26f) chore(deps): update fantasy and catwalk — _@andreynering_
- [`53ca4dc`](https://github.com/charmbracelet/crush/commit/53ca4dc3e9eb84fffc9d7128a764bddbd5973b2b) chore: update and improve ui/AGENTS.md — _@meowgorithm_
- [`cfcbd69`](https://github.com/charmbracelet/crush/commit/cfcbd69eb24e2d992a74d835384ce9b0426fb4ce) feat: CLI-based session access and management (#2373) — _@meowgorithm_
- [`e70c8ba`](https://github.com/charmbracelet/crush/commit/e70c8ba8f6dedd224ebaa712f374b9a54d10c669) refactor: use client and server for workspace access and management — _@aymanbagabas_
- [`cc1b558`](https://github.com/charmbracelet/crush/commit/cc1b558536a719fd0527c0fcb5f866d4276e560b) chore(legal): @seroperson has signed the CLA — _@charmcli_
- [`64f6cdf`](https://github.com/charmbracelet/crush/commit/64f6cdf5602a75e83aeb521af8db3607b63cf6e7) refactor: rename Permissions.SkipRequests to Overrides().SkipPermissionRequests — _@aymanbagabas_
- [`99108f0`](https://github.com/charmbracelet/crush/commit/99108f0e80e64aff7c56c2de234a291ee94ed1ff) Merge branch 'main' into server-client-2 — _@aymanbagabas_
- [`5ff8d68`](https://github.com/charmbracelet/crush/commit/5ff8d6876005ba48686a58fa71417c3a3f17bebe) refactor(config): introduce ConfigStore and Scope for better config m… (#2395) — _@aymanbagabas_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
