# charmbracelet/crush — 2026-03-31

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-30T23:59:59.000Z → 2026-03-31T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## Crush v0.54.0 ships with community-driven fixes and small features

The headline today is the **v0.54.0 release** ([tag](https://github.com/charmbracelet/crush/releases/tag/v0.54.0)), cut by @andreynering and notable for the breadth of outside contributors landing changes. The release notes call out a better `AGENTS.md` init prompt and new support for Git's global `core.excludesfile`.

The most user-visible new feature is **skill metadata in session output** (#2541): `crush session show` and `crush session last` now include a `skills` array listing each loaded skill's name, description, and `loaded_at` timestamp — useful for debugging which skills actually got picked up in a run.

On the init/prompt side, two long-pending PRs from @Amolith finally merged: #1786 nudges the init prompt toward "progressive disclosure" (less trivia like tabs-vs-spaces in generated AGENTS.md), and #1790 elicits control/data-flow and architecture descriptions. Both had been open since January and reflect months of dogfooding, so users who rely on `crush init` should see meaningfully different output.

Bug fixes worth noting:

- **`.crush/.gitignore` is no longer committed** (#2531) — fixes an annoying papercut where simply running Crush in a repo dirtied `git diff`.
- **Command dirs no longer auto-created** (#2534, fixes #2526): `~/.crush/commands` and XDG/project equivalents are now stat-checked instead of created on every startup.
- **MCP prompt retrieval gets a 30s timeout** (#2517), preventing indefinite hangs in `GetMCPPrompt`, matching the pattern already used in OAuth flows.
- **Onboarding cursor offset** rewritten to use style-based calculation instead of a hardcoded `cur.Y -= 1` FIXME (#2530), and image keybindings are now conditionally shown based on model support (#2522, commit f416931).

One notable rejection: #2536 ("allow sending image-only messages", fixing #2535) was **closed without merging** despite addressing a real Ctrl+V paste bug across UI/agent/coordinator layers — worth watching whether a maintainer-authored fix follows. The stale docs PR #638 was also closed unmerged after ~8 months.

Contributor breadth is the subtext here: @meowgorithm, @Amolith, @mavaa, @iceymoss, @huaiyuWangh, @majiayu000, and @andreynering all landed code, with three new CLA signers recorded.

## Releases

- **[v0.54.0](https://github.com/charmbracelet/crush/releases/tag/v0.54.0)** — v0.54.0 _by @github-actions[bot] at 2026-03-31T20:38:22Z_
  > # Small feats + more
  > 
  > We have a good number of fixes and enhacements in this release. Note how many contributors helped with this release! It's exciting to see the Crush community grow. :rocket:
  > 
  > ## Better init prompt
  > 
  > @Amolith made some nice improvements on the prompt to generate a `AGENTS.md` file for new projects.
  > 
  > ## Custom Git ignore file support
  > 
  > If you happen to have a custom global ignore file for Git (`core.excludesfile`), Crush will now respect that when listing files. Thanks @mavaa fo…


## Merged PRs

- [#2541](https://github.com/charmbracelet/crush/pull/2541) **feat(cli/session): show skill metadata** — _by @meowgorithm, merged 2026-03-31T20:24:11Z_
- [#1786](https://github.com/charmbracelet/crush/pull/1786) **feat(init): mention progressive disclosure** — _by @Amolith, merged 2026-03-31T19:45:17Z_
- [#1790](https://github.com/charmbracelet/crush/pull/1790) **feat(init): elicit control/data flow, arch descs** — _by @Amolith, merged 2026-03-31T19:46:22Z_
- [#2517](https://github.com/charmbracelet/crush/pull/2517) **fix(commands): add timeout context for MCP prompt retrieval** — _by @iceymoss, merged 2026-03-31T19:33:36Z_
- [#2530](https://github.com/charmbracelet/crush/pull/2530) **fix(ui): replace hardcoded cursor offset with style-based calculation** — _by @huaiyuWangh, merged 2026-03-31T19:26:06Z_
- [#2534](https://github.com/charmbracelet/crush/pull/2534) **fix: skip non-existent command dirs instead of creating them** — _by @majiayu000, merged 2026-03-31T17:25:40Z_
- [#2531](https://github.com/charmbracelet/crush/pull/2531) **fix: do not commit `.crush/.gitignore`** — _by @andreynering, merged 2026-03-31T13:30:44Z_


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#638](https://github.com/charmbracelet/crush/pull/638) **Update README.md** — _by @CyrusZei, closed 2026-03-31T19:43:03Z_
- [#2536](https://github.com/charmbracelet/crush/pull/2536) **fix: allow sending image-only messages** — _by @zwj-3193655211, closed 2026-03-31T13:27:58Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`6054a93`](https://github.com/charmbracelet/crush/commit/6054a93e0a5c31997f9c9ee9b511f6b6a0093a20) v0.54.0 — _@andreynering_
- [`b68823b`](https://github.com/charmbracelet/crush/commit/b68823b0aef7e7b913b461529096d17ad4d36599) feat(cli/session): show skill metadata (#2541) — _@meowgorithm_
- [`480e0f1`](https://github.com/charmbracelet/crush/commit/480e0f152538268977cd437cb7f5841f0e60cd08) chore(deps): update catwalk — _@andreynering_
- [`3412194`](https://github.com/charmbracelet/crush/commit/3412194cc489ff259ee2e46059930830f5c54857) fix(ls): respect git's `core.excludesfile` config if set (#2314) — _@mavaa_
- [`bf21a59`](https://github.com/charmbracelet/crush/commit/bf21a59b9d559f19b720d8325edad73cbeca8d40) feat(init): elicit control/data flow, arch descs (#1790) — _@Amolith_
- [`d161cbc`](https://github.com/charmbracelet/crush/commit/d161cbcf5d5500286b3526951e72fcfeeefeb6d5) feat(init-cmd): mention progressive disclosure (#1786) — _@Amolith_
- [`cda2719`](https://github.com/charmbracelet/crush/commit/cda2719416c1bad7291017db3c5f5e1b93795c2c) fix(commands): add timeout context for MCP prompt retrieval (#2517) — _@iceymoss_
- [`97c9f4b`](https://github.com/charmbracelet/crush/commit/97c9f4b0f555af501fd56f87f5710dbad72cff71) refactor(ui): replace hardcoded cursor offset with style-based calculation (#2530) — _@huaiyuWangh_
- [`f416931`](https://github.com/charmbracelet/crush/commit/f416931307d5b446dfe1e376d9c0ade4a28b6406) fix: conditionally show image keybindings based on model support (#2522) — _@huaiyuWangh_
- [`5cf6e5a`](https://github.com/charmbracelet/crush/commit/5cf6e5ab3c1214d9d0549a418e10bc4ad091f8ca) fix(taskfile): fix syntax error on task `run:onboarding` — _@andreynering_
- [`73c2a9d`](https://github.com/charmbracelet/crush/commit/73c2a9dd82591875b4b9f2ce85310b33d5ef834d) fix: skip non-existent command dirs instead of creating them (#2534) — _@majiayu000_
- [`42c8bcc`](https://github.com/charmbracelet/crush/commit/42c8bcc60cd81fb9d3bc5f5a5545abb3369ca18c) fix: do not commit `.crush/.gitignore` (#2531) — _@andreynering_
- [`5d86c0f`](https://github.com/charmbracelet/crush/commit/5d86c0f286708f1f24c82628a5fb52f55008fd23) chore(legal): @owldev127 has signed the CLA — _@charmcli_
- [`c05e1ea`](https://github.com/charmbracelet/crush/commit/c05e1eab999691a406adaee659038434b63c4f34) chore(legal): @afsuyadi has signed the CLA — _@charmcli_
- [`12da61f`](https://github.com/charmbracelet/crush/commit/12da61f9d4aa7f5a0a216e3aeaf1146e8a5a26ea) chore(legal): @majiayu000 has signed the CLA — _@charmcli_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
