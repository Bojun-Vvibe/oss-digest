# anomalyco/opencode — 2026-03-07

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-06T23:59:59.000Z → 2026-03-07T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Release **v1.2.21** shipped (`a52d640`), bundling a busy day of bug fixes across the app, TUI, and core. The most consequential core change is the introduction of channel-aware database paths: the beta channel now shares a database with stable (`2230c3c`), with a test update to verify channel-based filenames (`523f792`). Operators upgrading should also note the new `OPENCODE_SKIP_MIGRATIONS` escape hatch for bypassing automatic DB migrations (`a965a06`), and a sanitization fix for preview database filenames (#16430).

On the app side, several session/model regressions were fixed: new sessions now correctly inherit the agent's model/variant (`490b95e`), models stick to their session (`ba1edea`), task agent titles render (`7dd6369`), file scrolling works again (`99d8aab`), and panel/review transitions were repaired (`73c9b68`, `a32b76d`). Smaller guards landed for `text-shimmer` undefined length (#16475), session-header `current()` against empty options (#16478), file-tree tab persistence on reopen (#16482), and a Storybook build restoration via `useLocation` mocking (#16472).

The TUI got a polish pass from iamdavidhill: rebalanced titlebar columns to protect center content (`1b494e5`), tabular numerals for consistent numeric alignment in tool outputs/diffs (`9c43893`), vertically centered empty states with better messaging for non-VCS projects (`6dfe19b`, #16412), and removal of the project hover popover's close button (#16403). Kit Langton merged a substantial timeline overhaul cheekily titled "STUPID SEXY TIMELINE" (#16420) — worth a look if you touch session UI.

Notable platform fixes: Windows git path resolution across Git Bash/MSYS2/Cygwin (#16422), a PTY session handle leak (#15599), preservation of original line endings in the `edit` tool (#9443), broken `/export` toggling in the TUI (#16443), and pointing the GitHub PR search tool at the current repo (#16441). Desktop now surfaces a "skill issue" message when snapshotting is disabled (#16432). E2E test infrastructure was hardened with a shared workspace-slug wait helper (#16446) and proper session abort/idle-wait during cleanup (#16439). No new issues, PRs, or non-release tags were opened in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`523f792`](https://github.com/anomalyco/opencode/commit/523f792b486fb7c3cbcc15fa882dd953af31428e) core: update database path test to verify correct channel-based filename — _@thdxr_
- [`2230c3c`](https://github.com/anomalyco/opencode/commit/2230c3c40136746c88e781cff613037e6d958d8e) core: allow beta channel to share database with stable channel — _@thdxr_
- [`1b494e5`](https://github.com/anomalyco/opencode/commit/1b494e508714275737417315f09bcf79d25cbc65) tui: balance titlebar columns so center content doesn't get squeezed by long side content — _@iamdavidhill_
- [`9c43893`](https://github.com/anomalyco/opencode/commit/9c43893a0fce1789c4381b28b30366cb60dcca66) tui: align numeric displays consistently across tool outputs and diff counters using tabular numerals — _@iamdavidhill_
- [`6dfe19b`](https://github.com/anomalyco/opencode/commit/6dfe19b44549ed844e233f3321cb23833098cbca) tui: center empty states vertically in session view and improve review panel messaging for projects without version control — _@iamdavidhill_
- [`a965a06`](https://github.com/anomalyco/opencode/commit/a965a062595403a8e0083e85770315d5dc9628ab) core: add OPENCODE_SKIP_MIGRATIONS flag to bypass database migrations — _@thdxr_
- [`0654f28`](https://github.com/anomalyco/opencode/commit/0654f28c7296cf31de10a6399bf82d43ef626202) zen: fix graph legend — _@fwang_
- [`a32b76d`](https://github.com/anomalyco/opencode/commit/a32b76dee0595cdce935e702bb8ede0956e5cc16) fix(app): review panel transition — _@adamdotdevin_
- [`a52d640`](https://github.com/anomalyco/opencode/commit/a52d640c8c56a5d9fb4623a1c601046c3d9a37b7) release: v1.2.21 — _@opencode_
- [`218869c`](https://github.com/anomalyco/opencode/commit/218869cf45b52561ee6980bd2546819c077dd05e) fix(storybook): restore build by mocking useLocation (#16472) — _@ShriKaranHanda_
- [`e99d7a4`](https://github.com/anomalyco/opencode/commit/e99d7a429217a370f0b2451565143cec56c16920) fix(app): text-shimmer undefined length (#16475) — _@Eric-Guo_
- [`f0beb38`](https://github.com/anomalyco/opencode/commit/f0beb38f91842b0147f04f3ab8a4faac326bfac5) fix(app): guard session-header current() against undefined when options is empty (#16478) — _@cyberprophet_
- [`66fcab7`](https://github.com/anomalyco/opencode/commit/66fcab7b0801130c212aa67159415d75d935f555) fix(app): preserve file tree tab on reopen + fix e2e test regressions (#16482) — _@neriousy_
- [`641e178`](https://github.com/anomalyco/opencode/commit/641e1781a25f848a9375a9196e5039c8e65e5551) tui: remove close button from project hover popover (#16403) — _@iamdavidhill_
- [`490b95e`](https://github.com/anomalyco/opencode/commit/490b95efe7f50a7b0d25d9348dd599ce9c817b18) fix(app): new session uses agent model/variant — _@adamdotdevin_
- [`ba1edea`](https://github.com/anomalyco/opencode/commit/ba1edea0ab092a93772f5ad657809279f872f61e) fix(app): model sticks to session — _@adamdotdevin_
- [`73c9b68`](https://github.com/anomalyco/opencode/commit/73c9b685a7aedfecddb07c0fdfaa46914054d4d5) fix(app): all panels transition — _@adamdotdevin_
- [`99d8aab`](https://github.com/anomalyco/opencode/commit/99d8aab0ac98c37a357908ef9c1a9fb8de17eddf) fix(app): can't scroll files — _@adamdotdevin_
- [`7dd6369`](https://github.com/anomalyco/opencode/commit/7dd63699524f2230f4aca663bd852ab44ce69d3f) fix(app): task agent title — _@adamdotdevin_
- [`06f60af`](https://github.com/anomalyco/opencode/commit/06f60af1e9537fcc9a31b199ad6a6d0fe50cce6f) chore: update web stats — _@adamdotdevin_
- [`66d0beb`](https://github.com/anomalyco/opencode/commit/66d0beba6fa6751bd093a95c0288be97b4f36bef) fix(app): fix max-width on timeline — _@adamdotdevin_
- [`6b99dd5`](https://github.com/anomalyco/opencode/commit/6b99dd50b6117061ccc41c491e8b1bf1b63fc9d0) tui: align session empty states (#16412) — _@iamdavidhill_
- [`c53c9d4`](https://github.com/anomalyco/opencode/commit/c53c9d4e4e14f2bce31c083a9244f91a073e5cea) chore: generate — _@opencode-agent[bot]_
- [`bbd0f3a`](https://github.com/anomalyco/opencode/commit/bbd0f3a25283b6f9567a04e79d7f6972950ab0a6) STUPID SEXY TIMELINE (#16420) — _@kitlangton_
- [`b7e208b`](https://github.com/anomalyco/opencode/commit/b7e208b4f1e6641a1cbb1e13f59789c7b7f4c60a) test(app): share workspace slug wait helper across e2e specs (#16446) — _@Hona_
- [`be9b4d1`](https://github.com/anomalyco/opencode/commit/be9b4d1bcde39341c7813b66c5c19150a01bb8c2) fix(opencode): preserve original line endings in 'edit' tool (#9443) — _@ranqn_
- [`5b5b791`](https://github.com/anomalyco/opencode/commit/5b5b791d75669f0df857daa3898325460a6ec66c) fix(tui): fix broken /export toggling (#16443) — _@natewill_
- [`0b7a5b1`](https://github.com/anomalyco/opencode/commit/0b7a5b1e7bc7619c85e7cf4e30a1a0d4885779b6) test(app): abort sessions and wait for idle before e2e cleanup (#16439) — _@Hona_
- [`28bb16c`](https://github.com/anomalyco/opencode/commit/28bb16ca2a374439973d4f3f4b71d72f7fdae9cd) fix(config): point GitHub PR search tool at current repository (#16441) — _@ShriKaranHanda_
- [`8a95be4`](https://github.com/anomalyco/opencode/commit/8a95be492d460050ab53161be7185dc1c1783eef) fix(windows): git path resolution for modified files across Git Bash, MSYS2, and Cygwin (#16422) — _@Hona_
- [`c42c5a0`](https://github.com/anomalyco/opencode/commit/c42c5a0cc6742078bdc7484fdbbba5013d1841d7) chore: generate — _@opencode-agent[bot]_
- [`b2c2478`](https://github.com/anomalyco/opencode/commit/b2c2478d9d0dae704a30bbb80de71ad3d86a16be) fix(pty): pty session handle leak (#15599) — _@kikuchan_
- [`1a9af8a`](https://github.com/anomalyco/opencode/commit/1a9af8acb69e275871cd6f4a72a10d6b5ce55001) feat(desktop): show skill issue when snapshotting is off (#16432) — _@Hona_
- [`4c7fe60`](https://github.com/anomalyco/opencode/commit/4c7fe6049346def59e06c676c6bdec1a72c72470) fix(opencode): sanitize preview database filenames (#16430) — _@Hona_
- [`c108f30`](https://github.com/anomalyco/opencode/commit/c108f304c6e13bd4028ade5a138c38b63d3c49a3) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`2b8acfa`](https://github.com/anomalyco/opencode/commit/2b8acfa0e202b5ed147a118e7253e39d6b92d369) app: fix portal positioning for sidebar menus and tooltips by removing conditional mount logic — _@iamdavidhill_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
