# anomalyco/opencode — 2026-03-10

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-09T23:59:59.000Z → 2026-03-10T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is a core auth refactor: multi-account workspace auth landed via #15487, with safeguards to keep existing account login upgrades safe. Anyone running opencode with a single account should test login flows after pulling — this touches account state on disk.

Security and safety also got attention. `fix(core): don't permit access to system directories` (#16891) tightens path access in the core, and an MCP OAuth bug where auto-connect failed on the first connection was fixed in #15547. CI was hardened too: workflow concurrency now cancels duplicate runs and adds `contents: read` (556703f), draft PRs are excluded from beta labeling (1fe8d4d), and `setuptools` is installed to dodge Python distutils errors (e443209).

Several core fixes are worth noting for anyone hitting flaky behavior: a chunk-timeout bug while processing the LLM stream is fixed (#16366), worktrees now read the project ID from the local workspace (#16795), and the session create endpoint accepts a `workspaceID` parameter (#16798) — useful if you're driving opencode programmatically across workspaces. ESM imports for `@opencode-ai/plugin` were also fixed (#16916), and an outdated Copilot 403 message left over from the old plugin migration was removed (#16904).

Provider coverage expands with thinking-variant support for the SAP AI provider (#14958).

On the UI/app side, the Card component was restyled and tool error cards improved (#16888), terminal focus issues and "jank" got two fixes (835a27c, 85afaaa), and opentui was bumped to v0.1.87 (#16772) — expect visible TUI changes. A debug window was added to the app (5ec5d1d).

Docs: the `opencode-morph-plugin` references were refreshed across all language ecosystem pages (#16869).

No releases, no new issues, and no open PRs were recorded in the window — activity was entirely commits to `dev`. Recommended reads in order: #15487 (auth), #16891 (security), #16366 (stream timeout), #16772 (TUI upgrade).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`5acfdd1`](https://github.com/anomalyco/opencode/commit/5acfdd1c5d6ff631e708b2fc35d4ece3fe8ab7de) chore: kill old copilot 403 message that was used for old plugin migration (#16904) — _@rekram1-node_
- [`556703f`](https://github.com/anomalyco/opencode/commit/556703f8ab593f391508a75603aed54dc065e3b5) ci: cancel duplicate workflow runs and add read permissions — _@thdxr_
- [`6b9f8fb`](https://github.com/anomalyco/opencode/commit/6b9f8fb9b3ec48859c2db0c230d0cab69f6ae727) zen: raise limit — _@fwang_
- [`f77e5cf`](https://github.com/anomalyco/opencode/commit/f77e5cf8fb9d9babcfc1b3ba046c0ba571489647) feat(ui): restyle Card and improve tool error cards (#16888) — _@iamdavidhill_
- [`e6cdc21`](https://github.com/anomalyco/opencode/commit/e6cdc21f2ddd7264a75eb389693d4d62367ae38c) zen: raise limit — _@fwang_
- [`1fe8d4d`](https://github.com/anomalyco/opencode/commit/1fe8d4d7ad32fecd40609140c0c7ff53016d8ddd) ci: exclude draft PRs from beta labeling process to prevent unfinished work from being included in releases — _@thdxr_
- [`e443209`](https://github.com/anomalyco/opencode/commit/e44320980d6ede1313fce74d6ff8d8b439f61fb1) ci: install setuptools to prevent Python distutils errors during dependency installation — _@thdxr_
- [`f5d7fe3`](https://github.com/anomalyco/opencode/commit/f5d7fe3072a38d0378b59c9f163f980033dbd430) chore: cleanup — _@adamdotdevin_
- [`835a27c`](https://github.com/anomalyco/opencode/commit/835a27cf517fae5d9952c30989de8be8f760d7a5) fix(app): terminal jank — _@adamdotdevin_
- [`85afaaa`](https://github.com/anomalyco/opencode/commit/85afaaa13d693f400d8ec8e257fec086a58b68c1) fix(app): terminal focus issues and jank — _@adamdotdevin_
- [`4906151`](https://github.com/anomalyco/opencode/commit/490615169e6717daab641fed827c21b11ef84a85) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`bb23224`](https://github.com/anomalyco/opencode/commit/bb232247d094b22d497a036c21d4c4a722700a38) Fix ESM imports for @opencode-ai/plugin (#16916) — _@thdxr_
- [`94c128f`](https://github.com/anomalyco/opencode/commit/94c128f73b05bb4b14134974d9db8eb7eb671b92) chore: generate — _@opencode-agent[bot]_
- [`613562f`](https://github.com/anomalyco/opencode/commit/613562f5047aa0bad934da401146a04ed8adce84) core: make account login upgrades safe while adding multi-account workspace auth (#15487) — _@thdxr_
- [`9c4325b`](https://github.com/anomalyco/opencode/commit/9c4325bcf8070d84a6911ae78b898c116ebad2ac) fix(core): don't permit access to system directories (#16891) — _@adamdotdevin_
- [`ad08fd5`](https://github.com/anomalyco/opencode/commit/ad08fd57df450d4371eddfdf8a693ff378c2259c) chore: rekram1-node is no longer on vacation (#16905) — _@rekram1-node_
- [`54ba59d`](https://github.com/anomalyco/opencode/commit/54ba59d3e17c7734f86a967bf52a5aefd76f0eba) chore: generate — _@opencode-agent[bot]_
- [`a4330a2`](https://github.com/anomalyco/opencode/commit/a4330a225dda8aa088423ce3be88f7fad30fb862) feat(core): allow passing `workspaceID` into session create endpoint (#16798) — _@jlongster_
- [`69ddc91`](https://github.com/anomalyco/opencode/commit/69ddc91c35ef04e173cde6f8627773c1116fcd39) fix(core): a chunk timeout when processing llm stream (#16366) — _@jlongster_
- [`4c4aed5`](https://github.com/anomalyco/opencode/commit/4c4aed5a875e44aec2856c117fa05e861fa62bb5) fix(core): make worktrees read the project id from local workspace (#16795) — _@jlongster_
- [`5a40158`](https://github.com/anomalyco/opencode/commit/5a40158abf02268e4f8fb47870fdc39272f7f697) chore: generate — _@opencode-agent[bot]_
- [`4dce485`](https://github.com/anomalyco/opencode/commit/4dce485854df0719800c51a1182270ee21c075f9) fix(opencode): add thinking variants support for SAP AI provider (#14958) — _@jerome-benoit_
- [`5ec5d1d`](https://github.com/anomalyco/opencode/commit/5ec5d1daceaab23c8ffa9ae32b40f53120f4609e) chore(app): debug window — _@adamdotdevin_
- [`d2c765e`](https://github.com/anomalyco/opencode/commit/d2c765e2b30e6cd455cc6c8781fd60ac806e66b8) chore: generate — _@opencode-agent[bot]_
- [`d036c57`](https://github.com/anomalyco/opencode/commit/d036c57d592331c1a2643b5d56457be033f3c927) docs: update opencode-morph-plugin in all language ecosystem pages (#16869) — _@bhaktatejas922_
- [`e7493e2`](https://github.com/anomalyco/opencode/commit/e7493e220494619f23e73774065b4e556743adae) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`3500bf6`](https://github.com/anomalyco/opencode/commit/3500bf64b8e0a7f338c365832bfed4189c3e64cf) upgrade opentui to v0.1.87 (#16772) — _@kommander_
- [`4f982dd`](https://github.com/anomalyco/opencode/commit/4f982ddb94fc5ec4ed508f53b73ea0451095f107) chore: generate — _@opencode-agent[bot]_
- [`ff3bb74`](https://github.com/anomalyco/opencode/commit/ff3bb7424dcf3f3996f61ae63554f59c32f4a2ad) fix(mcp): fix OAuth auto-connect failing on first connection (#15547) — _@domdomegg_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
