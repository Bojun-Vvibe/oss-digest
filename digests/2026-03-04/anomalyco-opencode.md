# anomalyco/opencode — 2026-03-04

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-03T23:59:59.000Z → 2026-03-04T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headline today is the **v1.2.17 release** (`715b844`) alongside heavy iteration on the new **/go pricing landing page** and a couple of meaningful core/process fixes.

On the core side, `jlongster` landed a workspace overhaul in `feat(core): rework workspace integration and adaptor interface` (#15895) — likely the most important read of the day for anyone tracking architecture. Two related process-lifecycle fixes also merged: `fix(process): prevent orphaned opencode subprocesses on shutdown` (#15924) and `fix(core): handle SIGHUP and kill process` (#16057), which together should make shutdown behavior much more reliable. A separate hardening change keeps `dax` away from the UI (#16060), and `chore: update turborepo` (#16061) bumps build tooling.

The bulk of the day's commit volume (≈20 commits from `iamdavidhill`, plus a `go-page` merge by `fwang` in `218330a`) is the new `/go` subscription landing page. Highlights: replacing the hero video with an interactive request-limits graph (`7c215c0`), iterating that graph into responsive horizontal bars with CSS-variable theming (`0b825ca`, `6cbb1ef`, `cd3a09c`, `67fa790`), spelling out which models are included — GLM-5, Kimi K2.5, MiniMax M2.5 (`744c38c`) — clarifying the free tier covers Big Pickle and promo requests (`f8685a4`), and i18n/locale syncs (`ca5a737`, `b42a63b`, `0a2aa86`, plus bot syncs `22a4c5a`, `0541d75`). `fwang` also has a `wip: zen` commit (`27447ba`) and a Bedrock header fix (`e4f0825`).

Desktop/app work: `Brendonovich` added an Electron version target in `desktop: add electron version` (#15663), then immediately gated it to beta-only publishing (`faf5012`, `1b0d65f`). `adamdotdevin` shipped a cluster of app polish fixes — terminal tab close (`d7569a5`), session loads scrolling to bottom (`2ccf21d`), removing diff lines from sidebar sessions (`e482405`), delayed dock animation (`64b2113`), and todo blur removal (`a69742c`). UI also got `show scrollbar by default` (#15282) and a task-part `href` cleanup (#15978).

Docs: a new `opencode-sentry-monitor` ecosystem entry (#16037), a dead-link fix for opencode-daytona (#15979), and bash output-capture guidance (#15928). No issues, PRs opened, or releases beyond v1.2.17 in-window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`3242308`](https://github.com/anomalyco/opencode/commit/324230806e99d4e5c9cc14fd66ddad0ba0c2b6e6) chore: update turborepo (#16061) — _@akronb_
- [`7f7e622`](https://github.com/anomalyco/opencode/commit/7f7e622426e89650f152401179607d6bf79aa3ae) dont let dax touch the ui (#16060) — _@Hona_
- [`27447ba`](https://github.com/anomalyco/opencode/commit/27447bab2614e1beca999da0b1dfc5fd9e0ecf3b) wip: zen — _@fwang_
- [`45ac20b`](https://github.com/anomalyco/opencode/commit/45ac20b8aa1c96751af6824bf7dd736554ef7938) fix(core): handle SIGHUP and kill process (#16057) — _@jlongster_
- [`218330a`](https://github.com/anomalyco/opencode/commit/218330aec1ee6c1e5482913387c308566235a871) Merge branch 'go-page' into dev — _@fwang_
- [`67fa790`](https://github.com/anomalyco/opencode/commit/67fa7903c3aa3d74f5255691d28e0417ca3ca565) tui: prevent Go pricing graph from overflowing on medium screens by constraining width and moving axis labels outside SVG for sharper rendering — _@iamdavidhill_
- [`cd3a09c`](https://github.com/anomalyco/opencode/commit/cd3a09c6a78579a177d71941220e8d4072f5a57c) tui: clearer graph labels and responsive layout for usage visualization — _@iamdavidhill_
- [`f8685a4`](https://github.com/anomalyco/opencode/commit/f8685a4d532386b7c30112454a89fc5ab884e7d1) tui: clarify free tier includes Big Pickle and promotional requests on Go pricing page — _@iamdavidhill_
- [`6cbb1ef`](https://github.com/anomalyco/opencode/commit/6cbb1ef1c233c6579f94552c796d4239781c620a) wip: Make bar colors in limit graph customizable via CSS variables for consistent theming across the go route visualization — _@iamdavidhill_
- [`0b825ca`](https://github.com/anomalyco/opencode/commit/0b825ca383f12fa6649d48165fb3f5e27cc4b049) docs: redesign Go pricing graph with horizontal bars and inline request labels — _@iamdavidhill_
- [`22a4c5a`](https://github.com/anomalyco/opencode/commit/22a4c5a77e466c6a81f7c461a58a7e63cd91be45) docs(i18n): sync locale docs from english changes — _@opencode-agent[bot]_
- [`29dbfc2`](https://github.com/anomalyco/opencode/commit/29dbfc25e56d3192608290681a2e0d3d22701e1c) docs: Add opencode-sentry-monitor to ecosystem documentation (#16037) — _@stolinski_
- [`40fc406`](https://github.com/anomalyco/opencode/commit/40fc406424c27a00f0841af46f6ec96572c973f7) ci: make tsgo available for pre-push typechecks — _@iamdavidhill_
- [`6f23271`](https://github.com/anomalyco/opencode/commit/6f232717417853df38bbd3b3241354bd2aa08e22) chore(ui): remove quotes — _@iamdavidhill_
- [`b7198c2`](https://github.com/anomalyco/opencode/commit/b7198c28c8cfd9fb01aaf9a6b9bd25619b0ea111) tweak(ui): darker text — _@iamdavidhill_
- [`de6a6af`](https://github.com/anomalyco/opencode/commit/de6a6af5ab6986d05971728848f1ac802ad75f34) tweak(ui): remove section — _@iamdavidhill_
- [`0f1f55a`](https://github.com/anomalyco/opencode/commit/0f1f55a24c18e4460872db96aad5bbb08b0fe5f7) tui: show Go request limits per 5-hour session — _@iamdavidhill_
- [`744c38c`](https://github.com/anomalyco/opencode/commit/744c38cc7cfd4741227b9a1951ccba57668e2184) tui: clarify which models are available in Go subscription — _@iamdavidhill_
- [`e9de250`](https://github.com/anomalyco/opencode/commit/e9de2505f65b65a581a90dbd3b29f21dac6568de) Merge branch 'dev' into go-page — _@fwang_
- [`22fcde9`](https://github.com/anomalyco/opencode/commit/22fcde926fd8a071a213a54d624584372e73822d) tui: reduce excessive spacing in go route layout to improve visual balance — _@iamdavidhill_
- [`b42a63b`](https://github.com/anomalyco/opencode/commit/b42a63b882dbde071b62836b5234a5b197e5b317) docs: make Go hero CTA translatable with pricing emphasis — _@iamdavidhill_
- [`ca5a737`](https://github.com/anomalyco/opencode/commit/ca5a7378deb77ad35a70d7182f750a544a2b7426) docs: localize Go graph and testimonial copy — _@iamdavidhill_
- [`c6187ee`](https://github.com/anomalyco/opencode/commit/c6187ee40f345b55fc3cacf9ff071cc35352e6de) docs: de-link Go testimonials and swap Zen→Go — _@iamdavidhill_
- [`d94c516`](https://github.com/anomalyco/opencode/commit/d94c516402445d39b05a2924ae4dbcf71dedb259) docs: update Go privacy copy for global hosting — _@iamdavidhill_
- [`61795d7`](https://github.com/anomalyco/opencode/commit/61795d794e980f1faa257c4d1e1521286012bc85) docs: clarify Go models in FAQ answer — _@iamdavidhill_
- [`7c215c0`](https://github.com/anomalyco/opencode/commit/7c215c0d02796803cd20602bb4b04a7d3c43760a) docs: replace Go landing page video with interactive limits graph — _@iamdavidhill_
- [`715b844`](https://github.com/anomalyco/opencode/commit/715b844c2a88810b6178d7a2467c7d36ea8fb764) release: v1.2.17 — _@opencode_
- [`1b0d65f`](https://github.com/anomalyco/opencode/commit/1b0d65f80e7b2e283931a519bb31661c5659cfe1) ci: remove electron beta requirement — _@Brendonovich_
- [`faf5012`](https://github.com/anomalyco/opencode/commit/faf501200e1beeb93145a9dbe7fc3df90f5f1c38) ci: only publish electron on beta — _@Brendonovich_
- [`e326741`](https://github.com/anomalyco/opencode/commit/e3267413c262004bf76b573755f1de44a692a970) remove build from typecheck — _@thdxr_
- [`18cad10`](https://github.com/anomalyco/opencode/commit/18cad10647996fc86c867bf6cd3efeb1999b1f63) show scrollbar by default (#15282) — _@kommander_
- [`a69742c`](https://github.com/anomalyco/opencode/commit/a69742ccb26ad70d7442a133d86b69725af1ef06) fix(app): remove blur from todos — _@adamdotdevin_
- [`64b2113`](https://github.com/anomalyco/opencode/commit/64b21135f922e20ced02f9233dbff6aa88e8deaa) fix(app): delay dock animation on session load — _@adamdotdevin_
- [`e482405`](https://github.com/anomalyco/opencode/commit/e482405cdc49654a1b8a5013958d295a89aa4831) fix(app): remove diff lines from sessions in sidebar — _@adamdotdevin_
- [`ad56338`](https://github.com/anomalyco/opencode/commit/ad563381087084de2cd7b88ad25965b52ed162da) chore(console): update copy — _@iamdavidhill_
- [`2ccf21d`](https://github.com/anomalyco/opencode/commit/2ccf21de991e996a3cb1006b513a573a90ddc4dd) fix(app): loading session should be scrolled to the bottom — _@adamdotdevin_
- [`dd4ad5f`](https://github.com/anomalyco/opencode/commit/dd4ad5f2c51be97c1de6526245bab999caaf77f9) chore(console): edit copy — _@iamdavidhill_
- [`eb71856`](https://github.com/anomalyco/opencode/commit/eb718567334d9118497772d20099f6ef90ec318f) docs: send Go landing page links to Go docs — _@iamdavidhill_
- [`d7569a5`](https://github.com/anomalyco/opencode/commit/d7569a5625e4a2287195c27a84330af1d9d2c3df) fix(app): terminal tab close — _@adamdotdevin_
- [`0a2aa86`](https://github.com/anomalyco/opencode/commit/0a2aa8688d048b07e633065122f73bc0d4ec7e4a) chore(console): switch /go page to go.* i18n keys — _@iamdavidhill_
- [`e44cdaf`](https://github.com/anomalyco/opencode/commit/e44cdaf887c9f5d819821b7f97370a20c3c5e54b) chore(console): use Go ornate logo on /go — _@iamdavidhill_
- [`5709561`](https://github.com/anomalyco/opencode/commit/57095619178036f125d62c0b82d4df2cc2d34ee6) chore(console): refine /go hero and pricing copy — _@iamdavidhill_
- [`9909f94`](https://github.com/anomalyco/opencode/commit/9909f94048cf0b1f325f9867d453534a30b088b0) chore(console): hide Go nav item on /go — _@iamdavidhill_
- [`e8f67dd`](https://github.com/anomalyco/opencode/commit/e8f67ddbccc09f7963c0825aa2ead7b31f8884ee) chore(console): update /go hero body — _@iamdavidhill_
- [`0541d75`](https://github.com/anomalyco/opencode/commit/0541d756a60ea8dad1bf74e07627231f3c5532b9) docs(i18n): sync locale docs from english changes — _@opencode-agent[bot]_
- [`a2d3d62`](https://github.com/anomalyco/opencode/commit/a2d3d62db3dcd7bd63d0660d58b4fb0b99b2e603) chore(console): move login to end on zen/go — _@iamdavidhill_
- [`850fd94`](https://github.com/anomalyco/opencode/commit/850fd9419e00b6850b1418124c6cb0d98a49561c) fix(docs): update dead opencode-daytona ecosystem link (#15979) — _@Niraj12chaudhary_
- [`db3eddc`](https://github.com/anomalyco/opencode/commit/db3eddc51f97ab58b20d3230a42591738c4d6a7b) ui: rely on task part href instead of onClick handler (#15978) — _@Brendonovich_
- [`5dcf330`](https://github.com/anomalyco/opencode/commit/5dcf3301e099f5b86b796462f82627e41b4e0188) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`5cf235f`](https://github.com/anomalyco/opencode/commit/5cf235fa6cf7b4c890c68f8ff68a96fcae992abf) desktop: add electron version (#15663) — _@Brendonovich_
- [`e4f0825`](https://github.com/anomalyco/opencode/commit/e4f0825c56300286ec0aa82b1006e4006a17e1e1) zen: fix aws bedrock header — _@fwang_
- [`3ebebe0`](https://github.com/anomalyco/opencode/commit/3ebebe0a96de5ec4757de12a21cb9f933e0fbba0) fix(process): prevent orphaned opencode subprocesses on shutdown (#15924) — _@thdxr_
- [`2a0be83`](https://github.com/anomalyco/opencode/commit/2a0be8316be7ae6ec78f5d221851fc1cc0cdddb2) chore: generate — _@opencode-agent[bot]_
- [`7f37acd`](https://github.com/anomalyco/opencode/commit/7f37acdaaa89b358fb795ccd006d37ed7fa6672e) feat(core): rework workspace integration and adaptor interface (#15895) — _@jlongster_
- [`e79d41c`](https://github.com/anomalyco/opencode/commit/e79d41c70ed3cd01b3a576dcf774c35cad6551c1) docs(bash): clarify output capture guidance (#15928) — _@thdxr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
