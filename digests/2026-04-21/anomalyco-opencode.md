# anomalyco/opencode — 2026-04-21

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-20T23:59:59.000Z → 2026-04-21T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v1.14.20 ships with TUI, desktop, and Windows fixes

The day's headline is the **v1.14.20 release**, which bundles a system-theme regression fix in the TUI, a new `GET /config` endpoint on the experimental HTTP API, and a Windows-Node fix for local dynamic imports that should unblock plugin/tool loading. Desktop users get a setting to hide the session progress bar plus a fix so prompt-input fade-ins no longer replay every render. Remote-workspace users also get a notable correctness fix: permission replies are now routed to the right workspace (#23593).

The largest underlying current is **kitlangton's continued Effect Schema migration in core**. In a single afternoon they landed migrations for `Config.Info` (#23716), `ConfigPermission.Info` (#23740, cleanup #23749), `MessageV2.Format` (#23744) and tool-state schemas (#23752), LSP data schemas (#23745), Snapshot schemas (#23747), and a new effect-zod walker to derive provider `.zod` (#23753). Anyone touching core schemas should read these before rebasing. Tests were also consolidated into Effect style (#23710).

Provider/model work:
- Mistral Small reasoning variant support added, closing a long-standing request (#23735, issue #19479).
- C# language support swapped from `csharp-ls` to `roslyn-language-server` (#14463) — worth a look if you use the C# LSP.
- Several "zen" routing tweaks from fwang around kimi k2.6, ling 2.6 free, and tpm routing; kimi k2.6 usage limits were also promoted (#23634), and kimi variants that don't support them are now hidden (#23696).

Desktop/Electron hardening continued: `contextIsolation` and sandbox were enabled (#23523), renderer windows moved to a custom `oc://` protocol (#23516), and CORS headers were added to the main window's webRequest (#23633). Smaller fixes include correct diff render conditions (#23670), proper `produce` wrapping in `setProjects` (#23638), suppressing version-upgrade checks when the user disabled them (#20089), and desktop/MetaInfo file updates (#14933).

No new issues or open PRs landed in the window.

## Releases

- **[v1.14.20](https://github.com/anomalyco/opencode/releases/tag/v1.14.20)** — v1.14.20 _by @opencode-agent[bot] at 2026-04-21T19:07:38Z_
  > ## Core
  > - Fixed a system theme regression in the TUI.
  > - Added `GET /config` to the experimental HTTP API.
  > - Fixed local dynamic imports on Windows when running under Node, improving plugin and tool loading.
  > 
  > ## TUI
  > - Fixed permission replies using remote workspaces so they are sent to the correct workspace.
  > 
  > ## Desktop
  > - Stopped prompt controls from replaying their fade-in animation on every render.
  > - Added a setting to hide the session progress bar while the agent is working.
  > - Fixed the Select…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`8043cfa`](https://github.com/anomalyco/opencode/commit/8043cfa68dcf97547ede3e26a9325af55583e1e4) fix(desktop): update desktop file and MetaInfo file (#14933) — _@NN708_
- [`d2181e9`](https://github.com/anomalyco/opencode/commit/d2181e9273bfcd9727a387527b25aa017ca15410) chore: generate — _@opencode-agent[bot]_
- [`5e9fb3c`](https://github.com/anomalyco/opencode/commit/5e9fb3cc9045f9ef9a5c33ff6c295cf0438da39b) feat: replace csharp-ls with roslyn-language-server (#14463) — _@jmbryan4_
- [`2da6d86`](https://github.com/anomalyco/opencode/commit/2da6d860e0e2c5309a0030a5591c8218fffd6a99) refactor(core): derive provider schema .zod via effect-zod walker (#23753) — _@kitlangton_
- [`df0c1f6`](https://github.com/anomalyco/opencode/commit/df0c1f649c306bd1c125c0b532bd17b76bf888c0) refactor(core): migrate MessageV2 tool state schemas to Effect Schema (#23752) — _@kitlangton_
- [`d6dea3f`](https://github.com/anomalyco/opencode/commit/d6dea3f3e00598a734d2fb61dbc9d74ccbd1781c) chore(core): clean up after ConfigPermission Effect Schema migration (#23749) — _@kitlangton_
- [`0bcf734`](https://github.com/anomalyco/opencode/commit/0bcf734a67e3b46b26f9c68d1800086365ed67e7) migrate Snapshot schemas to Effect Schema (#23747) — _@kitlangton_
- [`b1c3095`](https://github.com/anomalyco/opencode/commit/b1c3095edd901a74aa3ed94b5b6bffe6a4217b24) chore: generate — _@opencode-agent[bot]_
- [`b0f565b`](https://github.com/anomalyco/opencode/commit/b0f565b74a7dd21f1f2aba00718c9130524a4d6a) refactor(core): migrate ConfigPermission.Info to Effect Schema canonical (#23740) — _@kitlangton_
- [`2ae64f4`](https://github.com/anomalyco/opencode/commit/2ae64f426b7d210f64151124a3b7d729f28af7ca) refactor(core): migrate MessageV2.Format to Effect Schema (#23744) — _@kitlangton_
- [`7933657`](https://github.com/anomalyco/opencode/commit/79336571356e392c2fea9379c041bfbaa9bcebcd) migrate LSP data schemas to Effect Schema (#23745) — _@kitlangton_
- [`caaddf0`](https://github.com/anomalyco/opencode/commit/caaddf096424193ef3cba4bf2a8f9ae6876915bc) zen: ling 2.6 free — _@fwang_
- [`1a20703`](https://github.com/anomalyco/opencode/commit/1a20703469e46e4cc3682843d549b0f3235946d1) feat: add Mistral Small reasoning variant support (issue #19479) (#23735) — _@rubdos_
- [`8751f48`](https://github.com/anomalyco/opencode/commit/8751f48a752473ef0684dd1d6856c1571ef5a7da) Update VOUCHED list — _@github-actions[bot]_
- [`58232d8`](https://github.com/anomalyco/opencode/commit/58232d896eb9f358780e224a2bf1b6540fd8bb5a) fix: dont show variants for kimi models that dont support them (#23696) — _@rekram1-node_
- [`cd6415f`](https://github.com/anomalyco/opencode/commit/cd6415f332f53993d25f5371801cc46a123c6ef3) fix(tui): don't check for version upgrades if it's disabled by the user (#20089) — _@rahuliyer95_
- [`c9fb8d0`](https://github.com/anomalyco/opencode/commit/c9fb8d0ce70b632d262bcb594793e5496d16b61a) sync release versions for v1.14.20 — _@opencode_
- [`1e1a500`](https://github.com/anomalyco/opencode/commit/1e1a500603de7891f2f71dcd79b56678288fce20) chore: generate — _@opencode-agent[bot]_
- [`ecc06a3`](https://github.com/anomalyco/opencode/commit/ecc06a3d8f7783d3759061c3404341b0cdc537ec) refactor(core): make Config.Info canonical Effect Schema (#23716) — _@kitlangton_
- [`3205f12`](https://github.com/anomalyco/opencode/commit/3205f122eb7a1c97c63ee18f7069ea2248e2b2b4) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`e95474d`](https://github.com/anomalyco/opencode/commit/e95474df05d7054f905dc9294148e5e425f2e656) fix: revert parts of a824064c4 which caused system theme regression (#23714) — _@rekram1-node_
- [`96a534d`](https://github.com/anomalyco/opencode/commit/96a534d8c639db794012281b5419e727df538e97) feat(core): bridge GET /config through experimental HttpApi (#23712) — _@kitlangton_
- [`9579429`](https://github.com/anomalyco/opencode/commit/95794292762caff2700128388e2672e4a5f5ab07) test(opencode): consolidate session prompt tests into Effect style (#23710) — _@kitlangton_
- [`2486621`](https://github.com/anomalyco/opencode/commit/2486621ca1b9d35ed15ee6c2ff2a04ba46c8e02a) chore: kill unused tool (#23701) — _@rekram1-node_
- [`b5acc22`](https://github.com/anomalyco/opencode/commit/b5acc2203c1aedd2c5a0e356e47392549d1f88b6) fix(core): fix permissions routing when using remote workspace (#23593) — _@jlongster_
- [`8cc2c81`](https://github.com/anomalyco/opencode/commit/8cc2c81d57f7c3ca8942d0e2461bc676bd25e8cc) fix(app): prevent prompt input animations from rerunning on every render (#23676) — _@Brendonovich_
- [`8d2d12d`](https://github.com/anomalyco/opencode/commit/8d2d12d9c643662e7692722d21528b8612cc8139) chore: generate — _@opencode-agent[bot]_
- [`811a7e9`](https://github.com/anomalyco/opencode/commit/811a7e9a8bf04f93eff6b9efdec7c87991aead55) feat(app): allow disabling progress bar in settings (#23674) — _@Brendonovich_
- [`febadc5`](https://github.com/anomalyco/opencode/commit/febadc5589401a3112ba7788e7fb5837fbf95d3e) fix(ui): correct diff render condition logic (#23670) — _@Brendonovich_
- [`92c0058`](https://github.com/anomalyco/opencode/commit/92c005866b99240a63b11602f3ffb541f844c257) fix(core): use file:// URLs for local dynamic import() on Windows+Node (#23639) — _@Hona_
- [`224548d`](https://github.com/anomalyco/opencode/commit/224548d87d9aa9b8fdbcba2a8c1f96d5f2679ffa) fix(desktop): adjust layout properties in DialogSelectServer component (#23589) — _@OpeOginni_
- [`8a7bb7c`](https://github.com/anomalyco/opencode/commit/8a7bb7c6a9fe4fb9b1f85561603cf131278ccf54) zen: tpm routing — _@fwang_
- [`22d33c5`](https://github.com/anomalyco/opencode/commit/22d33c57af94f3bac5022f64ec11c82a06c015c8) fix(app): properly wrap produce calls in setProjects (#23638) — _@Brendonovich_
- [`1e0137f`](https://github.com/anomalyco/opencode/commit/1e0137f624e5b370ae5e1c21b4a512889e83928d) go: promote kimi k2.6 usage limits (#23634) — _@MrMushrooooom_
- [`38e2f4c`](https://github.com/anomalyco/opencode/commit/38e2f4cddafcbc4e3ac5f8ebdcdab9d1f468737b) fix(desktop-electron): add CORS headers to main window webRequest (#23633) — _@Brendonovich_
- [`bd54b68`](https://github.com/anomalyco/opencode/commit/bd54b68c123e1b1ceef22ee6196f879f2a5b9fbc) zen: m2.7 & k2.6 — _@fwang_
- [`a08aa21`](https://github.com/anomalyco/opencode/commit/a08aa21cb35d3c112d93af5abf39237a187265d6) chore: generate — _@opencode-agent[bot]_
- [`eb99064`](https://github.com/anomalyco/opencode/commit/eb9906420fa8def2520b1b4950a9175af9116ea2) refactor(desktop-electron): enable contextIsolation and sandbox (#23523) — _@Brendonovich_
- [`4964ce4`](https://github.com/anomalyco/opencode/commit/4964ce480c566a98b2b4ead4a6e163eb773c2b80) chore: generate — _@opencode-agent[bot]_
- [`e5687d6`](https://github.com/anomalyco/opencode/commit/e5687d646ce33b5c05bb007bf14cf5362676733b) electron: use custom oc:// protocol for renderer windows (#23516) — _@Brendonovich_
- [`a38d53f`](https://github.com/anomalyco/opencode/commit/a38d53fe2f056e55347861b87f349264e7abec48) chore: generate — _@opencode-agent[bot]_
- [`6278ce5`](https://github.com/anomalyco/opencode/commit/6278ce51cec6afd1afa58f8b1c5a1a5372e8804e) zen: tpm routing — _@fwang_
- [`53b0084`](https://github.com/anomalyco/opencode/commit/53b0084ce2ce595f58f1297ebbe3f17e6da1ee5c) chore: generate — _@opencode-agent[bot]_
- [`f74a255`](https://github.com/anomalyco/opencode/commit/f74a255ca9a8f5a8a95c31d05254a5148f78a834) zen: tpm routing — _@fwang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
