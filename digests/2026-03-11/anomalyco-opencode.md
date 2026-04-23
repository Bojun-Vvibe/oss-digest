# anomalyco/opencode — 2026-03-11

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-10T23:59:59.000Z → 2026-03-11T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a major **"zen" / Go subscription product push** by fwang, alongside a steady stream of ID-branding refactors from kitlangton and a notable user-facing feature: **restore-to-message and session forking** (`#17092`, fbd9b7c).

fwang landed roughly a dozen commits building out Zen's new "Go" plan: a dedicated Go landing page (75cae81), usage section and graph (ed3bb3e, fac23a1), updated header/models/pricing docs (f896965, 8569fc1, aa81c1c), a dashboard design pass (bbc7052), a first-month discount with updated copy (502d6db, 0b0ad5d), and Alipay support for both Go subscriptions and balance top-ups (4a81df1, 9e6c4a0) — clearly aimed at the Chinese market, reinforced by `#16908` switching Chinese community links to Feishu. Two `wip: zen` commits (cc18fa5, 4e73473) suggest more is in flight.

kitlangton continued the typed-ID migration, branding **ProjectID** (`#16948`), **SessionID** (`#16953`), **WorkspaceID** (`#16964`), and **PartID** (`#16966`) through Drizzle and Zod, plus an effect-based account flow refactor (`#17072`) and a resilient orgs fetch (`#16944`). Worth skimming if you touch the data layer.

On the app/core side, adamdotdevin shipped **restore-to-message + fork session** (`#17092`) and simplified the review pane (`#17066`); thdxr restored the plugin `serverUrl` getter so plugins can reach the local server (604ab1b); and `#14918` re-enables snapshots in ACP. Bug fixes worth noting: symlink resolution in the Instance cache to prevent duplicate contexts (`#16651`), IME composition no longer triggers editor reconcile (`#17041`), todos-not-clearing (c37f7b9), `PackageRegistry.info` stdout/stderr deadlock (`#16998`), error tool card respecting settings (`#17005`), Windows background consoles hidden in Electron (`#16842`), and `GOOGLE_VERTEX_LOCATION` env support for Vertex AI (`#16922`).

Performance: nexxeln trimmed session render work (`#16987`). Skills tweaks from rekram1-node aim to make invocations more likely while reducing token overhead (`#17053`, `#17098`). CI: node setup added to the Tauri build (8024166).

No issues, PRs, or releases were recorded in the window — all activity arrived as direct commits to `dev`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`83f083e`](https://github.com/anomalyco/opencode/commit/83f083ee0d320ab7cd800278cdde3e2eff23ce86) chore: generate — _@opencode-agent[bot]_
- [`090f636`](https://github.com/anomalyco/opencode/commit/090f6363543c426a477fcb706bc2bfac1e0f6140) feat(id): brand PartID through Drizzle and Zod schemas (#16966) — _@kitlangton_
- [`d26c6f8`](https://github.com/anomalyco/opencode/commit/d26c6f80e10dece9a77e589fdaf9fa1709dfe0ed) chore: generate — _@opencode-agent[bot]_
- [`16a6d6f`](https://github.com/anomalyco/opencode/commit/16a6d6febad7b884fe44ac52a50eeeaea2619018) feat(id): brand WorkspaceID through Drizzle and Zod schemas (#16964) — _@kitlangton_
- [`f1c3a44`](https://github.com/anomalyco/opencode/commit/f1c3a4419060c9ddecd70e5599578defaa73de00) fix: resolve symlinks in Instance cache to prevent duplicate contexts (#16651) — _@jmylchreest_
- [`34fa5de`](https://github.com/anomalyco/opencode/commit/34fa5de9c5753bfa32c86756105b1de6588b3111) chore: generate — _@opencode-agent[bot]_
- [`cb67465`](https://github.com/anomalyco/opencode/commit/cb6746567554f6d48a635530a224f94a915bced4) feat(id): brand SessionID through Drizzle and Zod schemas (#16953) — _@kitlangton_
- [`4e73473`](https://github.com/anomalyco/opencode/commit/4e73473119e4f787f485ec859035d7047115cfcc) wip: zen — _@fwang_
- [`cc18fa5`](https://github.com/anomalyco/opencode/commit/cc18fa599ccf3d86abb34b5b069ec29c4dd64ed2) wip: zen — _@fwang_
- [`aa81c1c`](https://github.com/anomalyco/opencode/commit/aa81c1c4cb1f1a89828584e0fba22f35b8bc774b) docs: go pricing — _@fwang_
- [`8569fc1`](https://github.com/anomalyco/opencode/commit/8569fc1f0eff173febf8608e5264be48e8da88dc) docs: zen update models — _@fwang_
- [`78de287`](https://github.com/anomalyco/opencode/commit/78de287bcc3e2695662e043cf70734a36f5caeb3) wip: zen — _@fwang_
- [`bbc7052`](https://github.com/anomalyco/opencode/commit/bbc7052c7a34dc0e71418d04a4425d78bfeb58fc) go: dashboard design — _@fwang_
- [`502d6db`](https://github.com/anomalyco/opencode/commit/502d6db6d0de384a2831d059b974811513937f08) go: first month discount — _@fwang_
- [`0b0ad5d`](https://github.com/anomalyco/opencode/commit/0b0ad5de99096bd531af7878e198d3d28c0e61f8) zen: update discount copy on lander — _@fwang_
- [`9e6c4a0`](https://github.com/anomalyco/opencode/commit/9e6c4a01aab4f774a295d6b9d4f2f30d7bac05a0) zen: add alipay for adding balance — _@fwang_
- [`4a81df1`](https://github.com/anomalyco/opencode/commit/4a81df190c58c29418d8c32e9402cf71afa61bc8) zen: add alipay for go sub — _@fwang_
- [`75cae81`](https://github.com/anomalyco/opencode/commit/75cae81f75ad3058fbace67e0674aef30b9021c7) zen: add Go page — _@fwang_
- [`ed3bb3e`](https://github.com/anomalyco/opencode/commit/ed3bb3ea8f18a3d2818eb17d77e2caad40eb1dee) zen: add usage section — _@fwang_
- [`fac23a1`](https://github.com/anomalyco/opencode/commit/fac23a1afc6cfbb7767eef05bf6ea018837697ad) zen: update usage graph on landing page — _@fwang_
- [`f896965`](https://github.com/anomalyco/opencode/commit/f89696509e1d97599cc041e0d1034c2933374837) zen: update header — _@fwang_
- [`604ab1b`](https://github.com/anomalyco/opencode/commit/604ab1bde11293e9d6fa13f3a08b3cdd2847f186) core: restore plugin serverUrl getter so plugins can connect to local server — _@thdxr_
- [`fbd9b7c`](https://github.com/anomalyco/opencode/commit/fbd9b7cf4fb27433a066a10a197c7edb420336d1) feat(app): restore to message and fork session (#17092) — _@adamdotdevin_
- [`58f45ae`](https://github.com/anomalyco/opencode/commit/58f45ae22b0faeba4a98910b0d3b42146846462b) chore: skip test — _@adamdotdevin_
- [`440405d`](https://github.com/anomalyco/opencode/commit/440405dbddd62c57d983fdcf09d9ed55cc6711a8) fix: re-enable snapshot in acp (#14918) — _@noamzbr_
- [`a1cda29`](https://github.com/anomalyco/opencode/commit/a1cda29012e9521b1453950b5490fe18db1db4d5) chore: fix test — _@adamdotdevin_
- [`f96e2d4`](https://github.com/anomalyco/opencode/commit/f96e2d4222d70849ef8d4992565dc94e64832243) tweak: adjust skill presentation to be a little less token heavy (#17098) — _@rekram1-node_
- [`387ab78`](https://github.com/anomalyco/opencode/commit/387ab78bf69a130b87e8d428e796c1663ba6e745) chore: fix test — _@adamdotdevin_
- [`dbc00aa`](https://github.com/anomalyco/opencode/commit/dbc00aa8e04cd9fbfb0534e24751c38232862244) feat(id): brand ProjectID through Drizzle and Zod schemas (#16948) — _@kitlangton_
- [`c37f7b9`](https://github.com/anomalyco/opencode/commit/c37f7b9d997fcbbf4f331e1965425375e7606ab6) fix(app): todos not clearing — _@adamdotdevin_
- [`cf7ca9b`](https://github.com/anomalyco/opencode/commit/cf7ca9b2f7f13fabd87e2ff41264d12ddd4f85ff) fix(app): skip editor reconcile during IME composition (#17041) — _@ysm-dev_
- [`981c7b9`](https://github.com/anomalyco/opencode/commit/981c7b9e375b7d9ac57d2d6a3179451139b2b99b) refactor(account): tighten effect-based account flows (#17072) — _@kitlangton_
- [`2aae0d3`](https://github.com/anomalyco/opencode/commit/2aae0d3493ac51aa2fd3929c6db0814ab795b04b) fix(core): read stdout and stderr in PackageRegistry.info before waiting for the process to exit (#16998) — _@ghost91-_
- [`bcc0d19`](https://github.com/anomalyco/opencode/commit/bcc0d198678f9e88c1868bda2e7f6e54768117fe) chore(app): simplify review pane (#17066) — _@adamdotdevin_
- [`9c585bb`](https://github.com/anomalyco/opencode/commit/9c585bb58ba98826cd5f7bf596cb65f411d378a4) docs(providers): clarify npm choice for chat vs responses APIs (#16974) — _@andyWang1688_
- [`0f6bc8a`](https://github.com/anomalyco/opencode/commit/0f6bc8ae71d18645212cb954bd210f047b5416d8) tweak: adjust way skills are presented to agent to increase likelyhood of skill invocations. (#17053) — _@rekram1-node_
- [`7291e28`](https://github.com/anomalyco/opencode/commit/7291e282738a3745330e20180371bd7c6fb11e5b) perf(app): trim session render work (#16987) — _@nexxeln_
- [`db57fe6`](https://github.com/anomalyco/opencode/commit/db57fe6193322941f71b11c5b0ccb8f03d085804) fix(app): make error tool card respect settings (#17005) — _@neriousy_
- [`8024166`](https://github.com/anomalyco/opencode/commit/802416639b9ef55220340db2a82dde4ddf7ff837) ci: setup node in tauri build — _@Brendonovich_
- [`7ec398d`](https://github.com/anomalyco/opencode/commit/7ec398d8555ca36afbbe2dea450eb6f57d04f16b) chore: generate — _@opencode-agent[bot]_
- [`4ab35d2`](https://github.com/anomalyco/opencode/commit/4ab35d2c5c92ccbd88dea65e8c2e0f6af748b884) fix(electron): hide Windows background consoles (#16842) — _@Hona_
- [`b4ae030`](https://github.com/anomalyco/opencode/commit/b4ae030fc2395887bac8df072627366c6f2c269c) fix: add GOOGLE_VERTEX_LOCATION env var support for Vertex AI (#16922) — _@SOUMITRO-SAHA_
- [`0843964`](https://github.com/anomalyco/opencode/commit/0843964eb31fc355de5b6132e6d20beadb31a4b4) feat(web): use Feishu for Chinese community links (#16908) — _@MrMushrooooom_
- [`a1b06d6`](https://github.com/anomalyco/opencode/commit/a1b06d63c93e9a7cc5387c8fbaac8ea5621a34b6) fix(account): resilient orgs fetch (#16944) — _@kitlangton_
- [`1b6820b`](https://github.com/anomalyco/opencode/commit/1b6820bab5e12abf695b6283f319c8da92a537d9) sync — _@thdxr_
- [`89bf199`](https://github.com/anomalyco/opencode/commit/89bf199c073cbb428a5a1a7d3600e970ba784e18) chore(app): fix tests — _@adamdotdevin_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
