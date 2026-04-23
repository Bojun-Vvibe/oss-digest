# cline/cline — 2026-03-25

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-24T23:59:59.000Z → 2026-03-25T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change today is **Cline Kanban becoming the default CLI experience**. PR [#9914](https://github.com/cline/cline/pull/9914) rewires a bare `cline` invocation to launch Kanban directly with a migration view, replacing the previously planned `--kanban` flag + in-TUI banner approach (the team found the flag/banner combo buried the migration message). Complementing this, [#9963](https://github.com/cline/cline/pull/9963) adds a dedicated Kanban launch modal in the webview with a bundled MP4 demo, install command handling (terminal exec on VS Code, clipboard copy elsewhere), and a "do not show again" toggle. Operators get a kill switch via [#9959](https://github.com/cline/cline/pull/9959), which exposes Kanban behind remote config (PF-632). Two follow-up fixes landed same-day: commit [3562f54](https://github.com/cline/cline/commit/3562f54dbf033fa587e30db0b6872efde611b4f5) enables `shell: true` for the Windows `npx.cmd` Kanban spawn, and [072e288](https://github.com/cline/cline/commit/072e2887b0384ca0f32ff4456873ff422d356c1f) adds a `--tui` flag to TUI e2e tests that were broken by the Kanban redirect — a sign the rollout is touching CI surface area worth watching.

User-facing chat ergonomics also shifted: [#9973](https://github.com/cline/cline/pull/9973) adds a Settings → Features → Editor toggle to disable the rotating "Feature Tips" shown during thinking/reasoning, responding to feedback that the tips felt unsettling when Cline was idle. Note this lands the same day as [#9874](https://github.com/cline/cline/pull/9874), which *ports* those same feature tips into the CLI — so the on/off toggle arrives just in time.

Model defaults changed: [#9886](https://github.com/cline/cline/pull/9886) promotes **MiniMax-M2.7** to the default MiniMax model (M2.5 and older remain selectable).

Smaller but worth noting: [#9956](https://github.com/cline/cline/pull/9956) replaces a hand-rolled YAML parser in `refreshSkills` with the shared `parseYamlFrontmatter` helper (better quoting/multi-line handling), and [#9974](https://github.com/cline/cline/pull/9974) stabilizes auth e2e tests that were failing when the new Kanban modal was visible. The Aikido security autofix PR [#9921](https://github.com/cline/cline/pull/9921) (20 CVEs incl. simple-git RCE, Hono auth bypass) was **closed without merging** — likely superseded by the individual dependabot bumps for hono, tar, and rollup that were also closed today without merge, suggesting deps were updated through another path. No releases or new issues in the window.

## Releases

_None in window._


## Merged PRs

- [#9974](https://github.com/cline/cline/pull/9974) **Stabilize auth e2e onboarding tests and clean up mock server URL parsing** — _by @candieduniverse, merged 2026-03-25T23:35:09Z_
- [#9973](https://github.com/cline/cline/pull/9973) **feat: add toggle to disable feature tips in chat** — _by @jl-codes, merged 2026-03-25T22:28:09Z_
- [#9956](https://github.com/cline/cline/pull/9956) **refactor: replace hand-rolled YAML parser in refreshSkills with shared helper** — _by @johnwschoi, merged 2026-03-25T16:06:16Z_
- [#9886](https://github.com/cline/cline/pull/9886) **feat: upgrade MiniMax default model to M2.7** — _by @octo-patch, merged 2026-03-25T12:17:14Z_
- [#9963](https://github.com/cline/cline/pull/9963) **feat(webview): add Cline Kanban launch modal and queue announcements** — _by @saoudrizwan, merged 2026-03-25T11:32:10Z_
- [#9914](https://github.com/cline/cline/pull/9914) **feat(cli): launch kanban by default with migration view** — _by @saoudrizwan, merged 2026-03-25T09:01:57Z_
- [#9959](https://github.com/cline/cline/pull/9959) **Add KanBan to remote config [PF-632]** — _by @BarreiroT, merged 2026-03-25T01:33:52Z_
- [#9874](https://github.com/cline/cline/pull/9874) **feat(cli): add rotating feature tips during thinking/acting phases** — _by @jl-codes, merged 2026-03-25T00:57:35Z_


## Open PRs (new or updated)

- [#8333](https://github.com/cline/cline/pull/8333) **chore: update @opentelemetry/sdk-node version to 0.206.0** — _by @floralan, updated 2026-03-25T15:07:38Z_


## Closed PRs (not merged)

- [#9921](https://github.com/cline/cline/pull/9921) **[Aikido] Fix 20 security issues in simple-git, hono, @aws-sdk/xml-builder and 6 more** — _by @aikido-autofix[bot], closed 2026-03-25T23:47:45Z_
- [#9580](https://github.com/cline/cline/pull/9580) **chore(deps): bump rollup from 4.57.1 to 4.59.0** — _by @dependabot[bot], closed 2026-03-25T11:34:49Z_
- [#9900](https://github.com/cline/cline/pull/9900) **chore(deps-dev): bump tar from 7.5.7 to 7.5.12** — _by @dependabot[bot], closed 2026-03-25T11:34:12Z_
- [#9578](https://github.com/cline/cline/pull/9578) **chore(deps): bump rollup from 4.52.1 to 4.59.0 in /webview-ui** — _by @dependabot[bot], closed 2026-03-25T11:33:56Z_
- [#9824](https://github.com/cline/cline/pull/9824) **chore(deps): bump hono from 4.11.7 to 4.12.8** — _by @dependabot[bot], closed 2026-03-25T11:33:45Z_
- [#9899](https://github.com/cline/cline/pull/9899) **chore(deps-dev): bump tar from 7.4.4 to 7.5.12 in /webview-ui** — _by @dependabot[bot], closed 2026-03-25T11:33:29Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`3926e7b`](https://github.com/cline/cline/commit/3926e7b4042b7db7fd16f8c94d5ac2883054e342) Stabilize auth e2e onboarding tests and clean up mock server URL parsing (#9974) — _@candieduniverse_
- [`5ba4314`](https://github.com/cline/cline/commit/5ba4314b9a1ea2997faf9926ed24638f3f7b58d1) feat: add toggle to disable feature tips in chat (#9973) — _@jl-codes_
- [`9ccad7f`](https://github.com/cline/cline/commit/9ccad7f7648a8454d713a43c14b185322cc1fde1) refactor: replace hand-rolled YAML parser in refreshSkills with shared helper (#9956) — _@johnwschoi_
- [`3562f54`](https://github.com/cline/cline/commit/3562f54dbf033fa587e30db0b6872efde611b4f5) fix(cli): enable shell mode for kanban spawn on Windows — _@saoudrizwan_
- [`d427d5d`](https://github.com/cline/cline/commit/d427d5d76aff56dc44369b6d661a6724bfd1e005) feat: upgrade MiniMax default model to M2.7 (#9886) — _@octo-patch_
- [`072e288`](https://github.com/cline/cline/commit/072e2887b0384ca0f32ff4456873ff422d356c1f) fix(cli): add --tui flag to TUI e2e tests to bypass Kanban redirect — _@saoudrizwan_
- [`9c71a6f`](https://github.com/cline/cline/commit/9c71a6f0214e531e72afb9633b458747e0c79a75) feat(webview): add Cline Kanban launch modal and queue announcements (#9963) — _@saoudrizwan_
- [`7627a38`](https://github.com/cline/cline/commit/7627a382aa1159b66098506249bd4ab7d435e489) feat(cli): launch kanban by default with migration view (#9914) — _@saoudrizwan_
- [`978c633`](https://github.com/cline/cline/commit/978c633c9039964e7527b3d19d26c0d5c5475daa) Add KanBan to remote config [PF-632] (#9959) — _@BarreiroT_
- [`e807b52`](https://github.com/cline/cline/commit/e807b520e0cf3e0a5ff01091ea5d86a421e4d749) feat(cli): add rotating feature tips during thinking/acting phases (#9874) — _@jl-codes_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
