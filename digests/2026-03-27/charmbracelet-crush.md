# charmbracelet/crush — 2026-03-27

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-26T23:59:59.000Z → 2026-03-27T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v0.53.0 ships GLM-5.1 support and a bigger system prompt

The headline today is the **v0.53.0 release**, which adds support for Z.ai's newly-launched **GLM-5.1** open-source coding model (claimed to approach Opus 4.6) and ships a revamped, larger default system prompt ("Mr. Big Prompt"). If you're evaluating model options in Crush, this is the one to read.

Alongside the release, several user-visible bug fixes landed:

- **Diff rendering correctness** (#2510, superseding #2499): fixes a long-standing bug where entire files were shown as changed due to CRLF line endings. The root cause spanned three places — `GenerateDiff` never normalized inputs, edit/multiedit stored CRLF-converted content in metadata while old content stayed LF, and the write tool diffed raw bytes against LF input. Closes #2486 and #2499. Backed by commits e7a4146 (switch to `udiff.Lines`) and 1f9f122 (test fixtures).
- **LSP auto-start config was being ignored** — now respected (#2487).
- **Panic prevention** in telemetry: `pairsToProps` no longer crashes on non-string keys, logging and skipping instead (#2502, labeled `panic / crash`).
- **External editor temp-file leak**: `msg_*.md` files were only cleaned up on the success path; now removed via `defer` on every return path (#2503).

Housekeeping: lint cleanups in `internal/config` plus a bump of `golang.org/x/image` to address vuln **GO-2026-4815** (#2488), and a README Q&A section noting clipboard support (#2509).

No new issues were filed and no PRs remain open from the day — everything merged or closed. The stale Nix flake PR (#1582, opened Dec 2025) saw activity but stayed closed/unmerged.

**Read first:** the v0.53.0 release notes for GLM-5.1 details, then #2510 if you've been seeing noisy diffs on Windows-edited files.

## Releases

- **[v0.53.0](https://github.com/charmbracelet/crush/releases/tag/v0.53.0)** — v0.53.0 _by @github-actions[bot] at 2026-03-27T19:20:53Z_
  > # GLM-5.1 + Mr. Big Prompt
  > 
  > Hey all! Friday is here and we have a few fun goodies for « Le Week-End ». Read on!
  > 
  > ## ⚡️ GLM-5.1
  > 
  > Z.ai's GLM-5.1 was released just today as part of their coding plan, and it's available in Crush now. GLM-5.1 is a hot, new open source model that claims to come close to Opus 4.6. Enjoy and let us know what you think!
  > 
  > <p><img width="600" src="https://github.com/user-attachments/assets/f155ea87-b1e4-46c9-823c-169a80bb504a" /></p>
  > 
  > ## 💬 A Bigger Prompt
  > 
  > When we first r…


## Merged PRs

- [#2487](https://github.com/charmbracelet/crush/pull/2487) **fix(lsp): Respect LSP Auto start config** — _by @BrunoKrugel, merged 2026-03-27T20:28:20Z_
- [#2488](https://github.com/charmbracelet/crush/pull/2488) **chore(lint): fix some small lint warnings** — _by @BrunoKrugel, merged 2026-03-27T20:30:28Z_
- [#2502](https://github.com/charmbracelet/crush/pull/2502) **fix(event): prevent panic on non-string telemetry keys** — _by @iceymoss, merged 2026-03-27T20:02:58Z_
- [#2503](https://github.com/charmbracelet/crush/pull/2503) **fix(ui): always clean up external editor temp file** — _by @iceymoss, merged 2026-03-27T18:16:30Z_
- [#2509](https://github.com/charmbracelet/crush/pull/2509) **docs(readme): add q&a section and note about clipboard support** — _by @andreynering, merged 2026-03-27T18:09:25Z_
- [#2510](https://github.com/charmbracelet/crush/pull/2510) **fix(diffview): address incorrect diffs** — _by @andreynering, merged 2026-03-27T18:08:35Z_


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#1582](https://github.com/charmbracelet/crush/pull/1582) **feat: add Nix flake for development environment** — _by @taciturnaxolotl, closed 2026-01-29T19:56:12Z_
- [#2499](https://github.com/charmbracelet/crush/pull/2499) **fix(diff): normalize line endings to prevent full-file diffs** — _by @meowgorithm, closed 2026-03-27T18:08:36Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`8b30fad`](https://github.com/charmbracelet/crush/commit/8b30fad1066b01df0e9bfbf26ae8a1643be3d656) chore: auto-update files — _@charmcli_
- [`2bcc97b`](https://github.com/charmbracelet/crush/commit/2bcc97bd4b3fa951b87cbf256a043b6cf8dc2cb0) chore(lint): fix some small lint warnings (#2488) — _@BrunoKrugel_
- [`0e640a1`](https://github.com/charmbracelet/crush/commit/0e640a1f32215bd9cac244ca8722febf20591709) fix(lsp): respect lsp auto start config (#2487) — _@BrunoKrugel_
- [`8e743cb`](https://github.com/charmbracelet/crush/commit/8e743cbfeb8e0dbb2b3a605a93c2acc754024d27) fix(event): prevent panic on non-string telemetry keys (#2502) — _@iceymoss_
- [`086d839`](https://github.com/charmbracelet/crush/commit/086d839e7efe841fdb840a9f836b3f625b3075ea) v0.53.0 — _@andreynering_
- [`6efc370`](https://github.com/charmbracelet/crush/commit/6efc370154912db8cc8d25d0a9be41dd7820863d) chore: update catwalk — _@andreynering_
- [`4501438`](https://github.com/charmbracelet/crush/commit/4501438f8125924e549e436a2b8b64608358f29d) fix(ui): always clean up external editor temp file (#2503) — _@iceymoss_
- [`da39f6f`](https://github.com/charmbracelet/crush/commit/da39f6f1a8554ffe9bb6aee6cb7a317dc7ae3296) docs(readme): add q&a section and note about clipboard support (#2509) — _@andreynering_
- [`1f9f122`](https://github.com/charmbracelet/crush/commit/1f9f1223fbb6316b1d341fa33c936f43360048de) test(diffview): update test fixtures — _@andreynering_
- [`e7a4146`](https://github.com/charmbracelet/crush/commit/e7a41461a24eb5bca3463c0c18f9b15f2444871c) fix(diffview): use `udiff.Lines` and not `udiff.Strings` — _@andreynering_
- [`49b6b58`](https://github.com/charmbracelet/crush/commit/49b6b5801623874d501c1941afb8f8c3054447c8) chore(legal): @srivilliamsai has signed the CLA — _@charmcli_
- [`65b9ea5`](https://github.com/charmbracelet/crush/commit/65b9ea53c46466ee862ba760169f32b9740742bb) chore(taskfile): add one more file to dependencies — _@andreynering_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
