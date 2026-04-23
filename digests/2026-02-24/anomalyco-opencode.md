# anomalyco/opencode — 2026-02-24

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-02-23T23:59:59.000Z → 2026-02-24T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Release **v1.2.11** shipped (29ddd55), capping a day dominated by a major Windows/cross-platform compatibility push and continued work on the experimental "zen" model tier.

The headline feature is a new experimental `workspace-serve` core command (#14960) from jlongster, plus an ACP streaming improvement that streams bash output and synthetic pending events (#14079, with a follow-up fix in #14916 reconciling live and load share pending status). Brendonovich also tightened file-tab UX by waiting for `loadFile` before opening a tab (eda7137).

The bulk of the day's traffic is a Windows hardening sweep from Hona, worth scanning if you ship on win32:
- Path handling: normalize backslashes in config `rel()` and file ignore (#14903), preserve native separators in path helpers (#14912), CRLF handling in markdown frontmatter (#14886), and a `createRequire` fallback for plugin resolution (#14898).
- Build/CI: bun 1.3.10 canary with forced baseline builds (#14843, #14839) to avoid segfaults, and a `bun` prefix added to console app build scripts (#14884).
- Tests: a string of cross-platform fixes — `path.sep` in discovery (#14905), `path.join` in glob assertions (#14837), Unix-only assumption removal (#14906), `process.env` spread instead of `structuredClone` (#14908), normalized git `excludesFile` (#14893), EBUSY-hardened preload cleanup (#14895), 50ms NTFS mtime tolerance (#14907), and git flags for snapshot ops (#14890).

On the hosted "zen" side, fwang added gpt-5.3-codex (2a87860), restricted alpha models to admin workspaces (f8cfb69), removed alpha models from the public `/models` endpoint (5190589), and continued WIP on a "zen lite" tier (fb6d201, cda2af2). Notable bug fixes: ignoring stale part deltas (68cf011), removing filetree tooltips (e27d3d5), and unhighlighting lines on cancel-comment (#14103). A refactor centralizes error handling via a `serverErrorMessage` utility with `ConfigInvalidError` checks (#14685).

No new issues, PRs, or releases beyond v1.2.11 were recorded in the window — everything landed via direct commits to `dev`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`29ddd55`](https://github.com/anomalyco/opencode/commit/29ddd55088af6f31c24f392c9f5dbf472918114f) release: v1.2.11 — _@opencode_
- [`2c00eb6`](https://github.com/anomalyco/opencode/commit/2c00eb60bdc6e6ff0362e792e731eaa39204bf72) feat(core): add workspace-serve command (experimental) (#14960) — _@jlongster_
- [`2a87860`](https://github.com/anomalyco/opencode/commit/2a87860c06b6aaa0e3d017b5cc464d83983efd1d) zen: gpt 5.3 codex — _@fwang_
- [`68cf011`](https://github.com/anomalyco/opencode/commit/68cf011fd3432ffe5f38848c6ec747702077dfbe) fix(app): ignore stale part deltas — _@adamdotdevin_
- [`f8cfb69`](https://github.com/anomalyco/opencode/commit/f8cfb697bd10a328afab4e6a074148c2e651fcb2) zen: restrict alpha models to admin workspaces — _@fwang_
- [`c6d8e76`](https://github.com/anomalyco/opencode/commit/c6d8e7624deb7470538c1156b73c6f33d2b9935c) fix(app): on cancel comment unhighlight lines (#14103) — _@neriousy_
- [`0d0d057`](https://github.com/anomalyco/opencode/commit/0d0d0578ebcf1b097d97d57e817664322a0740cc) chore: generate — _@opencode-agent[bot]_
- [`cc02476`](https://github.com/anomalyco/opencode/commit/cc02476ea5e02d3c827006dcd0c830f7673556e5) refactor: replace error handling with serverErrorMessage utility and checks for if error is ConfigInvalidError (#14685) — _@OpeOginni_
- [`5190589`](https://github.com/anomalyco/opencode/commit/5190589632c97b570bb6f9035aa5c80c0fe833e7) zen: remove alpha models from models endpoint — _@fwang_
- [`c92913e`](https://github.com/anomalyco/opencode/commit/c92913e9627ae29b0df64e86bd158302c0578c63) chore: cleanup — _@adamdotdevin_
- [`082f0cc`](https://github.com/anomalyco/opencode/commit/082f0cc12734ccc961797ab9a63dd88a2ce3eed5) fix(app): preserve native path separators in file path helpers (#14912) — _@Hona_
- [`2cee947`](https://github.com/anomalyco/opencode/commit/2cee947671fa373098db308b173c859cada0b108) fix: ACP both live and load share synthetic pending status preceeding… (#14916) — _@noamzbr_
- [`e27d3d5`](https://github.com/anomalyco/opencode/commit/e27d3d5d4017b33b73d4278fac561513454b1cae) fix(app): remove filetree tooltips — _@adamdotdevin_
- [`3241777`](https://github.com/anomalyco/opencode/commit/32417774c4baccbcb23820162f0b9c196bbe06de) fix(test): replace structuredClone with spread for process.env (#14908) — _@Hona_
- [`36197f5`](https://github.com/anomalyco/opencode/commit/36197f5ff8d98e582b2ea9da3e851937102d2888) fix(win32): add 50ms tolerance for NTFS mtime fuzziness in FileTime assert (#14907) — _@Hona_
- [`3d379c2`](https://github.com/anomalyco/opencode/commit/3d379c20c4973ef2b1c0305dbd1064ba0f1d8e3f) fix(test): replace Unix-only assumptions with cross-platform alternatives (#14906) — _@Hona_
- [`06f25c7`](https://github.com/anomalyco/opencode/commit/06f25c78f655257819d681b39598bf151837caf6) fix(test): use path.sep in discovery test for cross-platform path matching (#14905) — _@Hona_
- [`1a0639e`](https://github.com/anomalyco/opencode/commit/1a0639e5b89265ac89afd7bcfae835a64744768d) fix(win32): normalize backslash paths in config rel() and file ignore (#14903) — _@Hona_
- [`1af3e9e`](https://github.com/anomalyco/opencode/commit/1af3e9e557a6df4f933a01d0dad2e52e418ebd52) fix(win32): fix plugin resolution with createRequire fallback (#14898) — _@Hona_
- [`a292edd`](https://github.com/anomalyco/opencode/commit/a292eddeb516ebf1774e68640b4c62ad284472b2) fix(test): harden preload cleanup against Windows EBUSY (#14895) — _@Hona_
- [`79254c1`](https://github.com/anomalyco/opencode/commit/79254c10201a3978ac72ef2a047bb4070efdc41d) fix(test): normalize git excludesFile path for Windows (#14893) — _@Hona_
- [`ef7f222`](https://github.com/anomalyco/opencode/commit/ef7f222d80d1b5d2f3c18e86efba99a1f308c1f9) chore: generate — _@opencode-agent[bot]_
- [`888b123`](https://github.com/anomalyco/opencode/commit/888b123387718aa1fc802fbcae7341c7aeef6f73) feat: ACP - stream bash output and synthetic pending events (#14079) — _@noamzbr_
- [`13cabae`](https://github.com/anomalyco/opencode/commit/13cabae29f7ed2bd658037c0c676f7807d63d8b3) fix(win32): add git flags for snapshot operations and fix tests for cross-platform (#14890) — _@Hona_
- [`6590689`](https://github.com/anomalyco/opencode/commit/659068942eda0e48f8453d96b03724cfb1f9698d) fix(win32): handle CRLF line endings in markdown frontmatter parsing (#14886) — _@Hona_
- [`3201a7d`](https://github.com/anomalyco/opencode/commit/3201a7d34b03210f108e6caf49f20260d531a1a6) fix(win32): add bun prefix to console app build scripts (#14884) — _@Hona_
- [`de796d9`](https://github.com/anomalyco/opencode/commit/de796d9a00544001fe196d9a3068ea241165293a) fix(test): use path.join for cross-platform glob test assertions (#14837) — _@Hona_
- [`a592bd9`](https://github.com/anomalyco/opencode/commit/a592bd968454f0b8c55733f7a8df85e38a293de5) fix: update createOpenReviewFile test to match new call order (#14881) — _@Hona_
- [`744059a`](https://github.com/anomalyco/opencode/commit/744059a00f06ab20369cf4ce71072b41302e2f35) chore: generate — _@opencode-agent[bot]_
- [`fb6d201`](https://github.com/anomalyco/opencode/commit/fb6d201ee03d73967c554394742be360e2ff782d) wip: zen lite — _@fwang_
- [`cda2af2`](https://github.com/anomalyco/opencode/commit/cda2af2589ddef9265ca2db379ecd4ab556f6be8) wip: zen lite — _@fwang_
- [`eda7137`](https://github.com/anomalyco/opencode/commit/eda71373b0f37e56ca07921d13b3faf566824d04) app: wait for loadFile before opening file tab — _@Brendonovich_
- [`cf5cfb4`](https://github.com/anomalyco/opencode/commit/cf5cfb48cd756ebd59e6c5005d64c307f76b7424) upgrade to bun 1.3.10 canary and force baseline builds always (#14843) — _@Hona_
- [`ae19003`](https://github.com/anomalyco/opencode/commit/ae190038f89c1fd6267c3e847a182343aa31573f) ci: use bun baseline build to avoid segfaults (#14839) — _@Hona_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
