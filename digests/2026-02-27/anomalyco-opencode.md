# anomalyco/opencode — 2026-02-27

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-02-26T23:59:59.000Z → 2026-02-27T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a basic implementation of **remote workspace support** landing in core ([#15120](https://github.com/anomalyco/opencode/commit/c12ce2ffff38fae11e22762292c56f1e71c387e7) by jlongster), complemented by a related app-side change allowing username/password when connecting to a remote server ([#14872](https://github.com/anomalyco/opencode/commit/7528419172d126d829f43218024edc5626490e57) by Brendonovich). Together these are the most consequential changes to read — they open the door to running opencode against non-local servers.

Several user-facing app features also shipped:

- Recent projects section in the command palette ([#15270](https://github.com/anomalyco/opencode/commit/1f108bc4010c9b6fd28d1640863de9acffb109a1)).
- Better diff/code comments ([#14621](https://github.com/anomalyco/opencode/commit/fc52e4b2d3a41efde772e6de8fb2e01f27821701)), a long-running collaboration between adamdotdevin, adamelmore, and iamdavidhill.
- Warp added to the open menu ([#15368](https://github.com/anomalyco/opencode/commit/e49e781cb88df0030b4ed9408c771e29f02614af)).
- New keybindings to navigate between child sessions ([#14814](https://github.com/anomalyco/opencode/commit/3dc10a1c165e0a8c567718c33ddd8a62814e0c14)).

A burst of fixes from adamdotdevin targets long-standing UX rough edges: scroll jacking (`f2100dc`), additional scroll issues (`a94f564`), auto-accept permissions (`dfa0281`), permission notifications (`e9a7c71`), and the permission indicator (`b0b88f6`). Bash output is also now selectable ([#15378](https://github.com/anomalyco/opencode/commit/1f2348c1ef70e6086478b13d904931c513a30b5e)). Notably, a previous fix preventing filename/diff-count overlap in session changes was reverted (`adabad1`, reverting #14773) — worth watching if you hit that regression.

On the desktop side, Brendonovich moved `open_path` to Rust ([#15323](https://github.com/anomalyco/opencode/commit/0da8af8a28658d155646725a4b1190cb7bd15784)) and added a `latest.json` finalizer script for releases ([#15335](https://github.com/anomalyco/opencode/commit/967313234a7908dca1f4c7bec75bb4af6c0d0935)).

i18n continues to expand: a Turkish locale for the app and ui packages ([#15278](https://github.com/anomalyco/opencode/commit/a325c9af8fbf2c70767af070113332c4ed955c07)), a Greek README translation ([#15281](https://github.com/anomalyco/opencode/commit/dc8c0115101e132666f64c71354e8ba065b9a989)), plus routine i18n syncs (#15360, #15362).

fwang has several `wip: zen` commits and a "fix go plan usage limit" (`8c739b4`) plus "doc: opencode go" updates (`d2a8f44`, `2eb1d4c`), suggesting an in-progress Zen/Go-plan workstream — not yet ready to read but worth tracking. No PRs, issues, or releases were recorded in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`2eb1d4c`](https://github.com/anomalyco/opencode/commit/2eb1d4cb9a7982fc0630caa7b29335458d3870e1) doc: go — _@fwang_
- [`d2a8f44`](https://github.com/anomalyco/opencode/commit/d2a8f44c22b52cd941da06cc4ace44729a3c50c3) doc: opencode go — _@fwang_
- [`1f1f36a`](https://github.com/anomalyco/opencode/commit/1f1f36aac1d25f791482b9ee033e0eb6c460161e) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`7f851da`](https://github.com/anomalyco/opencode/commit/7f851da15ecde7db6535aae1f13009d3d6068daf) chore(console): i18n sync (#15360) — _@adamdotdevin_
- [`a3bdb97`](https://github.com/anomalyco/opencode/commit/a3bdb974b36714ace5e2a41e76da8aa6682eb4c8) chore(app): deps — _@adamdotdevin_
- [`46d678f`](https://github.com/anomalyco/opencode/commit/46d678fce9e846e38dedfa9dbf156dbabe5a579b) chore: generate — _@opencode-agent[bot]_
- [`1f2348c`](https://github.com/anomalyco/opencode/commit/1f2348c1ef70e6086478b13d904931c513a30b5e) fix(app): make bash output selectable (#15378) — _@alexyaroshuk_
- [`f347194`](https://github.com/anomalyco/opencode/commit/f347194e31bda080d7543a2d06b120ed46c6fb96) docs: add missing Bosanski link to Arabic README (#15399) — _@Niraj12chaudhary_
- [`7ff2710`](https://github.com/anomalyco/opencode/commit/7ff2710ce3e9b86bf12575aac68969589525b719) chore: generate — _@opencode-agent[bot]_
- [`c12ce2f`](https://github.com/anomalyco/opencode/commit/c12ce2ffff38fae11e22762292c56f1e71c387e7) feat(core): basic implementation of remote workspace support (#15120) — _@jlongster_
- [`a94f564`](https://github.com/anomalyco/opencode/commit/a94f564ff00cc16cc22503c29fa093d99844ae1a) fix(app): scroll issues — _@adamdotdevin_
- [`6ef3af7`](https://github.com/anomalyco/opencode/commit/6ef3af73dfa1c72bb2001c86d898f2edf8ea4b10) chore(app): i18n sync (#15362) — _@adamdotdevin_
- [`e5ae6c5`](https://github.com/anomalyco/opencode/commit/e5ae6c51b0d2f5dececd16970250aa2ab6c71a2f) chore: update translator model — _@adamdotdevin_
- [`9d76ef6`](https://github.com/anomalyco/opencode/commit/9d76ef6c6618ccd8896abc48cc05299790d56fc0) chore: update docs locale sync workflow — _@adamdotdevin_
- [`e49e781`](https://github.com/anomalyco/opencode/commit/e49e781cb88df0030b4ed9408c771e29f02614af) feat(app): add Warp to the open menu (#15368) — _@kitlangton_
- [`78cea89`](https://github.com/anomalyco/opencode/commit/78cea89e0ef8be6a457f02983366b3acde407adb) chore(script): source team members from TEAM_MEMBERS (#15369) — _@kitlangton_
- [`3dc10a1`](https://github.com/anomalyco/opencode/commit/3dc10a1c165e0a8c567718c33ddd8a62814e0c14) Change keybindings to navigate between child sessions (#14814) — _@jlongster_
- [`157920b`](https://github.com/anomalyco/opencode/commit/157920b2fbfbfb46dae8badb8328a53f6904e510) chore: update test — _@adamdotdevin_
- [`9673132`](https://github.com/anomalyco/opencode/commit/967313234a7908dca1f4c7bec75bb4af6c0d0935) desktop: add latest.json finalizer script (#15335) — _@Brendonovich_
- [`dfa0281`](https://github.com/anomalyco/opencode/commit/dfa02811178af1af602f59f8cdbcb3f3e319f103) fix(app): auto-accept permissions — _@adamdotdevin_
- [`4a94096`](https://github.com/anomalyco/opencode/commit/4a940969947654deca40454503491793ce1b347c) fix(app): update provider sprite — _@adamdotdevin_
- [`3407ded`](https://github.com/anomalyco/opencode/commit/3407ded9d010e3b1d2d6377ae764ccf79b2c4b6a) chore: generate — _@opencode-agent[bot]_
- [`a325c9a`](https://github.com/anomalyco/opencode/commit/a325c9af8fbf2c70767af070113332c4ed955c07) feat(app): add Turkish (tr) locale for app and ui packages (#15278) — _@vaur94_
- [`dc8c011`](https://github.com/anomalyco/opencode/commit/dc8c0115101e132666f64c71354e8ba065b9a989) docs(readme): add Greek translation and update language navigation (#15281) — _@pirrozani_
- [`1f108bc`](https://github.com/anomalyco/opencode/commit/1f108bc4010c9b6fd28d1640863de9acffb109a1) feat(app): recent projects section in command pallette (#15270) — _@neriousy_
- [`6b31188`](https://github.com/anomalyco/opencode/commit/6b3118883c01ea6b1996490610b862964b9488f4) wip: zen — _@fwang_
- [`0da8af8`](https://github.com/anomalyco/opencode/commit/0da8af8a28658d155646725a4b1190cb7bd15784) desktop: move open_path to rust (#15323) — _@Brendonovich_
- [`2a4ed49`](https://github.com/anomalyco/opencode/commit/2a4ed495515ff6470f08e628350d4fe55272f4d3) wip: zen — _@fwang_
- [`7528419`](https://github.com/anomalyco/opencode/commit/7528419172d126d829f43218024edc5626490e57) app: allow providing username and password when connecting to remote server (#14872) — _@Brendonovich_
- [`8c739b4`](https://github.com/anomalyco/opencode/commit/8c739b4a7db455a33fd77b4c997f2a9eaf27648a) zen: fix go plan usage limit — _@fwang_
- [`f2100dc`](https://github.com/anomalyco/opencode/commit/f2100dcfd8ed0786ead6e7ae0b22cec23a79dab5) fix(app): scroll jacking — _@adamdotdevin_
- [`b0b88f6`](https://github.com/anomalyco/opencode/commit/b0b88f679216d1b7e16bb1098cef0d91f911d9dd) fix(app): permission indicator — _@adamdotdevin_
- [`e9a7c71`](https://github.com/anomalyco/opencode/commit/e9a7c7114184d0092c114ce7a7d9446cf0d366cc) fix(app): permission notifications — _@adamdotdevin_
- [`4205fbd`](https://github.com/anomalyco/opencode/commit/4205fbd2aa98c6f62c8caae94e909a6048afbf53) tweak(app): show keybind on context tab close — _@iamdavidhill_
- [`fc52e4b`](https://github.com/anomalyco/opencode/commit/fc52e4b2d3a41efde772e6de8fb2e01f27821701) feat(app): better diff/code comments (#14621) — _@adamdotdevin_
- [`9a6bfeb`](https://github.com/anomalyco/opencode/commit/9a6bfeb782766099d4ce3a98bb9e7b4e79f8bfe6) refactor(app): dedupe filetree scroll state — _@kitlangton_
- [`fa11942`](https://github.com/anomalyco/opencode/commit/fa119423ecd3c56a1f831f9169139303a14aa6fa) tweak(app): align review changes select height — _@iamdavidhill_
- [`bf442a5`](https://github.com/anomalyco/opencode/commit/bf442a50c0b7007b9c4089b8c18e739f94a6c7cf) fix(ui): mute inactive file tab icons — _@iamdavidhill_
- [`09e1b98`](https://github.com/anomalyco/opencode/commit/09e1b98bc6fcd13a3481dd0b54fdc9805a1b8c6c) tweak(ui): max-width on session when the review is closed but the file tree is open — _@iamdavidhill_
- [`37d4259`](https://github.com/anomalyco/opencode/commit/37d42595cff1c63feac254d3169a29b0b0eec3cd) fix: test — _@adamdotdevin_
- [`adabad1`](https://github.com/anomalyco/opencode/commit/adabad19f19505f30e905d80fe4d05c249b43146) Revert "fix(ui): prevent filename and diff count overlap in session changes (#14773)" — _@adamdotdevin_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
