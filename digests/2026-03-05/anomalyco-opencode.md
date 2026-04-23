# anomalyco/opencode — 2026-03-05

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-04T23:59:59.000Z → 2026-03-05T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headlining the day: **v1.2.18 shipped** (`2c58964`), bundling a wave of desktop/app polish plus a CI fix from `thdxr` that removes a stale `publishConfig` which had been breaking npm publishing (`bb37e90`).

The bulk of activity is `adamdotdevin` hardening the desktop app: stale-keyed Show errors (`7665b8e`), stale read errors (`152df24`), locale errors (`a3d4ea0`), websearch/codesearch tool rendering (`1a420a1`), provider settings consistency (`4c185c7`), file-icon stability (twice — `6f9e533`, `8cbe7b4`), file path truncation in session turn (`6c9ae5c`), tab loading on file open (`2ba1eca`), `mod+f` always opening search (`3448118`), tooltip close delay (`2bb3dc5`), and an icon jiggle fix (`5f40bd4`). `iamdavidhill` also stripped keyboard-shortcut tooltips from the New Session/Workspace sidebar buttons (`39691e5`).

Notable merged PRs worth a closer look:
- `feat(opencode): auth login flags to skip questions` (#14470) from `dbpolito` — useful for scripted/CI auth flows.
- `desktop: new-session deeplink` (#15322) from `Brendonovich` — enables external apps to spawn sessions; pairs with his Electron update-check fix (`6531cfc`) and a switch to `useLocation` over `window.location` (#15989).
- `feat(tui): onClick handlers on InlineTool and Task` (#16187) from `thdxr` — groundwork for richer TUI interactivity.
- `fix(app): improve agent selection logic` (#16072) from `OpeOginni`, correctly threading configured models and variants — likely fixes long-standing agent-routing confusion. Same author also refactored desktop server-error formatting/translation (#16171).
- `fix(app): preserve question dock state across session switches` (#16173) from `ualtinok`.
- `desktop: remove unnecessary macOS entitlements` (#16161) from `nexxeln` — security/footprint reduction.
- `fix(console): docs/en routing and locale cookie sync` (#13608), follow-up to #13108.

On the model/zen front, `fwang` rolled through three rapid bumps: `gpt5.4` (`0638e49`), `gpt5.3 codex spark` (`80c36c7`), and `gpt 5.4 pro` (`adaee66`), with a CI fix in between (`a697816`). No new issues, PRs, or formal releases beyond v1.2.18 were opened in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`39691e5`](https://github.com/anomalyco/opencode/commit/39691e51741c753852a2ebdc21424075e666671b) tui: remove keyboard shortcut tooltips from new session and new workspace buttons in the sidebar — _@iamdavidhill_
- [`adaee66`](https://github.com/anomalyco/opencode/commit/adaee663641e0a7e4a8f1bc3f0ca1bf1b9439a40) zen: gpt 5.4 pro — _@fwang_
- [`a697816`](https://github.com/anomalyco/opencode/commit/a6978167aef7fdbaa21ac329ec2a2f71ddbcb09d) ci: fix — _@fwang_
- [`80c36c7`](https://github.com/anomalyco/opencode/commit/80c36c788c6c916692f456e62a2ab41cc4668ec0) zen: gpt5.3 codex spark — _@fwang_
- [`76cdc66`](https://github.com/anomalyco/opencode/commit/76cdc668e88415ced30d2f57caeb56d21c080f19) fix(console): follow-up for #13108 docs/en routing and locale cookie sync (#13608) — _@Seungjun0906_
- [`2ba1eca`](https://github.com/anomalyco/opencode/commit/2ba1ecabc925d2a4a83c81d7ceab2f88abb90701) fix(app): load tab on open file — _@adamdotdevin_
- [`e3b6d84`](https://github.com/anomalyco/opencode/commit/e3b6d84b570059030867a5e56fd47999f80243eb) docs(i18n): sync locale docs from english changes — _@opencode-agent[bot]_
- [`0638e49`](https://github.com/anomalyco/opencode/commit/0638e49b02ec288ff28d836d2d651f9efc38d4e7) zen: gpt5.4 — _@fwang_
- [`2c58964`](https://github.com/anomalyco/opencode/commit/2c58964a6b343ebb826de601b39b03cbd0622718) release: v1.2.18 — _@opencode_
- [`9507b0e`](https://github.com/anomalyco/opencode/commit/9507b0eace17522f518963f7d9f651fd6e541137) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`4da1996`](https://github.com/anomalyco/opencode/commit/4da199697b73d29d9704628de4f3b46a89a69596) feat(tui): add onClick handler to InlineTool and Task components (#16187) — _@thdxr_
- [`9cccaa6`](https://github.com/anomalyco/opencode/commit/9cccaa693a796fb5b2fdfa1534b553ce407dc93e) chore(app): ghostty-web fork — _@adamdotdevin_
- [`bb37e90`](https://github.com/anomalyco/opencode/commit/bb37e908ad4a179313564c86bd67e8d31a382493) ci: remove unused publishConfig that was breaking npm publishing — _@thdxr_
- [`d802e28`](https://github.com/anomalyco/opencode/commit/d802e28381cf798d2f59f5740012fa4e9e6c5cdc) update sdk package.json — _@thdxr_
- [`7665b8e`](https://github.com/anomalyco/opencode/commit/7665b8e30def396059516ef6d870830baa1faedd) fix(app): stale keyed show errors — _@adamdotdevin_
- [`a3d4ea0`](https://github.com/anomalyco/opencode/commit/a3d4ea0de17ec208d73d27fdfe2f9a226db902f1) fix(app): locale error — _@adamdotdevin_
- [`152df24`](https://github.com/anomalyco/opencode/commit/152df2428df84a1029be2b472b4a840cd94c966d) fix(app): stale read error — _@adamdotdevin_
- [`1a420a1`](https://github.com/anomalyco/opencode/commit/1a420a1a710e94bedfedbe61946f86265a347790) fix(app): websearch and codesearch tool rendering — _@adamdotdevin_
- [`4c185c7`](https://github.com/anomalyco/opencode/commit/4c185c70f22f93a3a467a4cc4a28934e4384e393) fix(app): provider settings consistency — _@adamdotdevin_
- [`6f9e533`](https://github.com/anomalyco/opencode/commit/6f9e5335dc53339c7bbb3d511867946b8aa535d3) fix(app): file icon stability — _@adamdotdevin_
- [`6c9ae5c`](https://github.com/anomalyco/opencode/commit/6c9ae5ce9fb83ebfe175d763d33df2a778db7f64) fix(app): file path truncation in session turn — _@adamdotdevin_
- [`8cbe7b4`](https://github.com/anomalyco/opencode/commit/8cbe7b4a017fe3087d817e776e46adb0dfce3fa6) fix(app): file icon stability — _@adamdotdevin_
- [`07348d1`](https://github.com/anomalyco/opencode/commit/07348d14a2013b25434b91aecb30a82546bed1c5) fix(app): preserve question dock state across session switches (#16173) — _@ualtinok_
- [`5f40bd4`](https://github.com/anomalyco/opencode/commit/5f40bd42f844c35b8bfb695fbda20a8ec01f127e) fix(app): icon jiggle — _@adamdotdevin_
- [`0e5edef`](https://github.com/anomalyco/opencode/commit/0e5edef51eacc132e8f05d3c12a39bac7ec7855f) chore(console): go page i18n — _@adamdotdevin_
- [`3448118`](https://github.com/anomalyco/opencode/commit/3448118be8c33b30a7153331cf35644d763be620) fix(app): mod+f always opens search — _@adamdotdevin_
- [`2bb3dc5`](https://github.com/anomalyco/opencode/commit/2bb3dc585bf14887796686cd43472238ccef6526) fix(app): no delay on tooltip close — _@adamdotdevin_
- [`27baa2d`](https://github.com/anomalyco/opencode/commit/27baa2d65cfa100283bda334e80244d6d8c440fb) refactor(desktop): improve error handling and translation in server error formatting (#16171) — _@OpeOginni_
- [`62909e9`](https://github.com/anomalyco/opencode/commit/62909e917ada44f64bf46fb38936bc99357cb63c) chore: generate — _@opencode-agent[bot]_
- [`a60e715`](https://github.com/anomalyco/opencode/commit/a60e715fc6b1e90e7bfcf8ee6db6d6d1c30643f6) fix(app): improve agent selection logic passing in configured models and variants correctly (#16072) — _@OpeOginni_
- [`161734f`](https://github.com/anomalyco/opencode/commit/161734fb951541642fd7c6d4e20458542df18ee9) desktop: remove unnecessary macOS entitlements (#16161) — _@nexxeln_
- [`4e26b0a`](https://github.com/anomalyco/opencode/commit/4e26b0aec7052b9daf1f1d26906198775cd3ad66) desktop: new-session deeplink (#15322) — _@Brendonovich_
- [`6531cfc`](https://github.com/anomalyco/opencode/commit/6531cfc521f069ad86eb22990fc42924d161d0d9) desktop-electon: handle latest version update check properly — _@Brendonovich_
- [`6ddd13c`](https://github.com/anomalyco/opencode/commit/6ddd13c6ac9bb918bd8239e5cc2308d8938db747) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`7948de1`](https://github.com/anomalyco/opencode/commit/7948de16129970ab01286fbbd7ba7a5e5dcf7be9) app: prefer using useLocation instead of window.location (#15989) — _@Brendonovich_
- [`f363904`](https://github.com/anomalyco/opencode/commit/f363904febd2134e8c73681e1b02cfb283e075a2) feat(opencode): Adding options to auth login to skip questions (#14470) — _@dbpolito_
- [`85ff056`](https://github.com/anomalyco/opencode/commit/85ff05670a53079066fcbc0abc0271ea355585c1) zen: update go page — _@fwang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
