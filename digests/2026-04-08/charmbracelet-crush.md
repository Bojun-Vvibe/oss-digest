# charmbracelet/crush — 2026-04-08

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-04-07T23:59:59.000Z → 2026-04-08T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v0.56.0 ships with self-debugging tools

The headline today is the **v0.56.0 release**, which builds on v0.55.0's self-configuration skill by adding two new tools that let Crush debug itself: `crush_info` (returns the fully-merged live configuration) and `crush_logs` (tails Crush's own log files in compact format). The `crush_info` tool also tracks config-file staleness and auto-reloads when on-disk edits are detected, so the agent never reasons against an outdated in-memory config (commits 2772734, df39b64, 269bc30, 816453b, 6f7762f, 77fcc76). This is a meaningful UX shift: Crush is increasingly equipped to introspect and self-correct rather than relying on the user to relay state.

Several real bug fixes landed alongside the release:

- **#2565** (fuleinist) restores LSP status updates in the UI, which were silently broken in v0.55.0 because the UI was still subscribing to the old `workspace.LSPEvent` after the type moved to the `app` package. Anyone on 0.55.0 who noticed LSP indicators frozen should upgrade.
- **#2574** (BrunoKrugel) fixes `crush.json` schema generation, which had been emitting unresolvable `$defs` refs because `csync.Map`'s `JSONSchemaAlias()` had a pointer receiver that `invopop/jsonschema` was stripping before interface checks. Regression from #2521.
- **#2242** (AnyCPU) fixes shutdown by deriving the shutdown context from `context.Background()` rather than the already-cancelled `globalCtx` — a subtle but important correctness fix.
- A small LSP slice-mutation fix landed directly on main as `baae1b6`.

On the open-PR front, **#2580** ("comprehensive agent kernel and coordination system" by MuX123) is a sprawling drive-by proposal adding a hybrid brain, task scheduler, permission grades, WebSocket server, circuit breakers, guardian, etc. It was opened with no prior discussion and is unlikely to merge as-is — skim only if curious. **#2507** (aisk) continues iterating on a small UX hint for restoring sessions after exit.

Dependency bumps (#2564) and a README mention of `AVIAN_API_KEY` (#2557) round out the day.

## Releases

- **[v0.56.0](https://github.com/charmbracelet/crush/releases/tag/v0.56.0)** — v0.56.0 _by @github-actions[bot] at 2026-04-08T20:17:38Z_
  > # Crush better at Crush
  > 
  > You might have noticed that on [v0.55.0](https://github.com/charmbracelet/crush/releases/tag/v0.55.0) we added a built-in skill to instruct Crush on how to configure itself. Adding a custom provider, LSP or MCP; changing settings, etc. can be easily done with prompts.
  > 
  > In this release, we added two new tools to help Crush debug itself:
  > 
  > * **`crush_info`**: Returns configuration, so Crush can see what is in the final configuration with all config files merged.
  > * **`crush_…


## Merged PRs

- [#2565](https://github.com/charmbracelet/crush/pull/2565) **fix(ui): subscribe to app.LSPEvent instead of workspace.LSPEvent** — _by @fuleinist, merged 2026-04-08T17:17:42Z_
- [#2574](https://github.com/charmbracelet/crush/pull/2574) **Fix crush.json schema generation** — _by @BrunoKrugel, merged 2026-04-08T13:05:47Z_


## Open PRs (new or updated)

- [#2507](https://github.com/charmbracelet/crush/pull/2507) **Add a hint to let user know how to restore a session after exits** — _by @aisk, updated 2026-04-08T13:58:37Z_
- [#2580](https://github.com/charmbracelet/crush/pull/2580) **feat: comprehensive agent kernel and coordination system** — _by @MuX123, updated 2026-04-08T00:42:27Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`56e2ff6`](https://github.com/charmbracelet/crush/commit/56e2ff6b9007933f2191894912bf4aae489068fe) v0.56.0 — _@andreynering_
- [`baae1b6`](https://github.com/charmbracelet/crush/commit/baae1b6d0e03f6db36c13a2915d8ef379bbb0564) fix(lsp): clone slice to avoid mutation — _@andreynering_
- [`6f7762f`](https://github.com/charmbracelet/crush/commit/6f7762fce8aca534b141d977d13c75237220aa63) feat(tools/crush_info): add skill status — _@meowgorithm_
- [`816453b`](https://github.com/charmbracelet/crush/commit/816453b49639ed32efbd5bbf6ea8a286c12167ec) feat(tools/crush_info): staleness detection and auto-reload — _@meowgorithm_
- [`269bc30`](https://github.com/charmbracelet/crush/commit/269bc30e2038750b0dbff76f329d5b07775a13e5) feat(tools/crush_info): handle config staleness — _@meowgorithm_
- [`77fcc76`](https://github.com/charmbracelet/crush/commit/77fcc761173795afb85ef900f427e370c1fcb170) feat(tools): add crush_logs tool for reading application logs — _@meowgorithm_
- [`df39b64`](https://github.com/charmbracelet/crush/commit/df39b6443987ca34ff516efd6b62e54f59b36efa) feat(tools): add crush_info tool implementation files — _@meowgorithm_
- [`2772734`](https://github.com/charmbracelet/crush/commit/27727343e0ce15d0f29d7d575e88d8566ebaf566) feat(tools): crush_info tool for readling live config — _@meowgorithm_
- [`18823f3`](https://github.com/charmbracelet/crush/commit/18823f3556d7d2a9701a75925540cde43cb2f911) docs(readme): mention `AVIAN_API_KEY` (#2557) — _@avianion_
- [`5361da0`](https://github.com/charmbracelet/crush/commit/5361da0a5f0a84d0df0989fa2169ad9884351b62) chore(deps): update catwalk — _@andreynering_
- [`cabcc0e`](https://github.com/charmbracelet/crush/commit/cabcc0eaa05dc4fba713c219e923781cf247aa1d) chore(deps): bump the all group with 3 updates (#2564) — _@dependabot[bot]_
- [`fccf061`](https://github.com/charmbracelet/crush/commit/fccf061d46394c0feb21c8b7743eb57530024653) fix(app): derive shutdown context from `context.Background()` instead of cancelled `globalCtx` (#2242) — _@AnyCPU_
- [`85445d7`](https://github.com/charmbracelet/crush/commit/85445d7f50b004722f568496d61c2d7e2b51fb7a) fix(ui): subscribe to `app.LSPEvent` instead of `workspace.LSPEvent` (#2565) — _@fuleinist_
- [`2e07c0d`](https://github.com/charmbracelet/crush/commit/2e07c0d34de293db26caf49d62bbe5af6c59a46b) style: standardize log capitalization — _@andreynering_
- [`fa15658`](https://github.com/charmbracelet/crush/commit/fa1565813cc109d70c6d5ef2d312b25cf3c657b8) fix(schema): fix `crush.json` schema generation (#2574) — _@BrunoKrugel_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
