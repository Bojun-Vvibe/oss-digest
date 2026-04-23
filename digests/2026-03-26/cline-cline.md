# cline/cline — 2026-03-26

> VS Code-native autonomous coding agent; another adjacent ecosystem signal.

**Window:** 2026-03-25T23:59:59.000Z → 2026-03-26T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/cline/cline](https://github.com/cline/cline)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v3.76.0 ships with Kanban as the default CLI experience

The headline today is the **v3.76.0 release** ([release notes](https://github.com/cline/cline/releases/tag/v3.76.0), version bump in #9986), which makes **Cline Kanban** the default launch surface in the CLI and adds an in-webview launch modal for it. The release also introduces a toggle to disable feature tips in chat and — notably for cost/runaway prevention — **repeated tool-call loop detection** to stop infinite tool loops from burning tokens. A Windows-specific fix enables shell mode for `npx.cmd` so the CLI can spawn Kanban correctly. Several follow-up CLI commits round this out: launching Kanban directly with a package-manager fallback (`d6b7a1a`), removing a noisy install message (`0d437f7`), updating tips copy (`12c85c4`), and replacing a stale `--tui` hint with a Kanban description in the migration view (`a4131e5`). CLI versions 2.10.0 and 2.11.0 were tagged along the way.

Documentation caught up with the launch: #9988 adds a full Kanban docs tab (overview, getting-started, core workflows) between the API and Learn tabs, after several superseded attempts (#9979, #9985, #9987).

Other notable merges:
- **#9958** excludes the `new_task` tool from the system prompt in yolo/headless/ACP modes, fixing tasks that previously hung indefinitely waiting for interactive input.
- **#9909** centralizes and hardens the `Notification` hook path, keeping it observation-only and fail-open.
- **#9997** transcodes the Kanban demo video to VP9/WebM so it actually plays in JetBrains' JCEF webviews (which lack H.264), with a bonus file-size reduction.
- **#9980** plus a wave of Dependabot merges (picomatch, rollup, hono, yaml, tar, minimatch, simple-git, storybook) clear the `npm audit` backlog; sinon was bumped 19→21.
- **#9494** adds unit coverage for the Oracle Code Assist Messages API routing introduced in #9447.

Worth watching in open PRs: **#9957** (CLI Vertex AI provider configuration), **#9955** (EISDIR guard when models pass directories to file-edit tools, fixes #9912), **#9854** (Unicode `\p{L}` fix preserving Korean/Japanese/Arabic filenames in `@`-mentions), and security bump **#9998** for node-forge `modInverse` DoS.

## Releases

- **[v3.76.0](https://github.com/cline/cline/releases/tag/v3.76.0)** — v3.76.0 _by @github-actions[bot] at 2026-03-26T15:17:50Z_
  > ### Added
  > 
  > - Add Cline Kanban launch modal in webview; CLI now launches Kanban by default with a migration view
  > - Add toggle to disable feature tips in chat
  > - Add repeated tool call loop detection to prevent infinite loops wasting tokens
  > 
  > ### Fixed
  > 
  > - Fix CLI Kanban spawn on Windows by enabling shell mode for `npx.cmd`
  > 
  > **Full Changelog**: https://github.com/cline/cline/compare/v2.11.0-cli...v3.76.0


## Merged PRs

- [#9997](https://github.com/cline/cline/pull/9997) **fix: Transcode kanban video to VP9/WebM for JetBrains** — _by @dominiccooney, merged 2026-03-26T22:39:05Z_
- [#9958](https://github.com/cline/cline/pull/9958) **fix: exclude new_task tool from system prompt in yolo/headless mode** — _by @robinnewhouse, merged 2026-03-26T19:10:47Z_
- [#9494](https://github.com/cline/cline/pull/9494) **test(oca): add coverage for messages api routing and stream helpers** — _by @robinnewhouse, merged 2026-03-26T19:02:14Z_
- [#9909](https://github.com/cline/cline/pull/9909) **Hooks: `Notification` hook polish** — _by @candieduniverse, merged 2026-03-26T17:10:15Z_
- [#9988](https://github.com/cline/cline/pull/9988) **Add Kanban docs** — _by @jsimone, merged 2026-03-26T15:12:10Z_
- [#9986](https://github.com/cline/cline/pull/9986) **chore: bump version to 3.76.0** — _by @maxpaulus43, merged 2026-03-26T14:52:28Z_
- [#9980](https://github.com/cline/cline/pull/9980) **chore: update dependencies flagged by npm audit** — _by @dominiccooney, merged 2026-03-26T12:03:35Z_


## Open PRs (new or updated)

- [#9998](https://github.com/cline/cline/pull/9998) **chore(deps): bump node-forge from 1.3.3 to 1.4.0** — _by @dependabot[bot], updated 2026-03-26T22:40:25Z_
- [#9854](https://github.com/cline/cline/pull/9854) **fix: preserve Korean and other non-Latin filenames in @ context menu** — _by @CodeForContribute, updated 2026-03-26T22:04:09Z_
- [#9996](https://github.com/cline/cline/pull/9996) **fix: update broken Getting Started link (for-new-coders → quick-start)** — _by @gatof81, updated 2026-03-26T21:59:38Z_
- [#9957](https://github.com/cline/cline/pull/9957) **feat(cli): add Vertex AI provider configuration support** — _by @robinnewhouse, updated 2026-03-26T18:55:56Z_
- [#9955](https://github.com/cline/cline/pull/9955) **fix: add directory validation to prevent EISDIR error in file tools** — _by @ClineXDiego, updated 2026-03-26T18:16:58Z_


## Closed PRs (not merged)

- [#9894](https://github.com/cline/cline/pull/9894) **[Aikido] Fix 8 security issues in socket.io-parser, lodash, zod and 3 more** — _by @aikido-autofix[bot], closed 2026-03-26T23:46:48Z_
- [#9995](https://github.com/cline/cline/pull/9995) **fix: update broken Getting Started link (for-new-coders → quick-start)** — _by @ClineXDiego, closed 2026-03-26T21:50:03Z_
- [#9953](https://github.com/cline/cline/pull/9953) **feat: add new MiniMax-M2.7 and MiniMax-M2.7-highspeed models with upd…** — _by @svkrclg, closed 2026-03-26T16:57:56Z_
- [#9987](https://github.com/cline/cline/pull/9987) **Add Kanban Docs** — _by @jsimone, closed 2026-03-26T15:04:44Z_
- [#9985](https://github.com/cline/cline/pull/9985) **Add Cline Kanban Documentation** — _by @jsimone, closed 2026-03-26T14:26:29Z_
- [#9979](https://github.com/cline/cline/pull/9979) **docs: add Kanban documentation tab** — _by @jl-codes, closed 2026-03-26T14:15:35Z_
- [#9976](https://github.com/cline/cline/pull/9976) **chore(deps): bump picomatch in /webview-ui** — _by @dependabot[bot], closed 2026-03-26T12:05:03Z_
- [#9978](https://github.com/cline/cline/pull/9978) **chore(deps): bump picomatch** — _by @dependabot[bot], closed 2026-03-26T12:05:09Z_
- [#9966](https://github.com/cline/cline/pull/9966) **chore(deps): bump rollup from 4.52.1 to 4.60.0 in /webview-ui** — _by @dependabot[bot], closed 2026-03-26T12:05:08Z_
- [#9968](https://github.com/cline/cline/pull/9968) **chore(deps): bump rollup from 4.57.1 to 4.60.0** — _by @dependabot[bot], closed 2026-03-26T12:05:06Z_
- [#9965](https://github.com/cline/cline/pull/9965) **chore(deps): bump hono from 4.11.7 to 4.12.9** — _by @dependabot[bot], closed 2026-03-26T12:05:05Z_
- [#9977](https://github.com/cline/cline/pull/9977) **chore(deps): bump yaml from 2.8.2 to 2.8.3** — _by @dependabot[bot], closed 2026-03-26T12:05:02Z_
- [#9967](https://github.com/cline/cline/pull/9967) **chore(deps-dev): bump tar from 7.5.7 to 7.5.13** — _by @dependabot[bot], closed 2026-03-26T12:05:02Z_
- [#9758](https://github.com/cline/cline/pull/9758) **chore(deps): bump simple-git from 3.30.0 to 3.32.3** — _by @dependabot[bot], closed 2026-03-26T12:05:00Z_
- [#9702](https://github.com/cline/cline/pull/9702) **chore(deps-dev): bump storybook from 9.1.17 to 9.1.20 in /webview-ui** — _by @dependabot[bot], closed 2026-03-26T12:04:57Z_
- [#9964](https://github.com/cline/cline/pull/9964) **chore(deps-dev): bump tar from 7.4.4 to 7.5.13 in /webview-ui** — _by @dependabot[bot], closed 2026-03-26T12:04:56Z_
- [#9558](https://github.com/cline/cline/pull/9558) **chore(deps): bump minimatch** — _by @dependabot[bot], closed 2026-03-26T12:04:50Z_
- [#9579](https://github.com/cline/cline/pull/9579) **chore(deps): bump minimatch from 9.0.5 to 9.0.9 in /webview-ui** — _by @dependabot[bot], closed 2026-03-26T12:04:45Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`a915122`](https://github.com/cline/cline/commit/a915122c6d369a2ee17e8105931b88e7a57df37a) fix: Transcode kanban demo video from H.264/MP4 to VP9/WebM (#9997) — _@dominiccooney_
- [`835ed94`](https://github.com/cline/cline/commit/835ed94736468d5bed330cb3d4a81333ce88e02a) fix: exclude new_task tool from system prompt in yolo/headless mode (#9958) — _@robinnewhouse_
- [`00ca3d1`](https://github.com/cline/cline/commit/00ca3d13fad06d905ff4e48ed16eeed083ea4b07) test(oca): add messages api routing and stream helper tests (#9494) — _@robinnewhouse_
- [`3f3a87a`](https://github.com/cline/cline/commit/3f3a87aed93ce51d57100d235e595771040d7904) Hooks: `Notification` hook polish (#9909) — _@candieduniverse_
- [`7a0f118`](https://github.com/cline/cline/commit/7a0f11837e4925fcb93f511bf9bc9599496fe561) Add Kanban docs (#9988) — _@jsimone_
- [`03d2d01`](https://github.com/cline/cline/commit/03d2d01eed82d8d2a19d743d9653d1ed3a896ce5) chore: bump version to 3.76.0 (#9986) — _@maxpaulus43_
- [`db1b1c4`](https://github.com/cline/cline/commit/db1b1c45bd3c9077e71dc98032e87a9af6810475) chore: update dependencies flagged by npm audit (#9980) — _@dominiccooney_
- [`a4131e5`](https://github.com/cline/cline/commit/a4131e57d8f6a9d2251a9ccb7f5a889065057da1) fix(cli): replace --tui hint with kanban description in migration view — _@saoudrizwan_
- [`683dd9a`](https://github.com/cline/cline/commit/683dd9a74132b4237e6270f0e4e2caf8a26b50ba) chore(cli): bump version to 2.11.0 — _@saoudrizwan_
- [`0d437f7`](https://github.com/cline/cline/commit/0d437f71b02e46ac808db1246c5a95501d6410d7) fix(cli): remove noisy install message when launching kanban — _@saoudrizwan_
- [`fc77c0f`](https://github.com/cline/cline/commit/fc77c0faea321be3636d778d1f7a7a60d69cd99b) chore(cli): bump version to 2.10.0 — _@saoudrizwan_
- [`12c85c4`](https://github.com/cline/cline/commit/12c85c42330c290db65e4c06f53d2d46ea2bc530) Update tips about kanban — _@saoudrizwan_
- [`d6b7a1a`](https://github.com/cline/cline/commit/d6b7a1ab41e2bf41a7e30cef46c3f9f9e7648af6) fix(cli): launch kanban directly with package manager fallback — _@saoudrizwan_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
