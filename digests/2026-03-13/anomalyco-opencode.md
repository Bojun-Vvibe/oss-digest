# anomalyco/opencode — 2026-03-13

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-12T23:59:59.000Z → 2026-03-13T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headline: **v1.2.26 shipped** (`d954026`), capping a heavy day of desktop/app polish, two notable session-persistence bug fixes, and continued Effect-ification of core services.

The most consequential fixes are around session durability: `michaeldwan` landed two long-standing data-loss bugs — sessions lost across worktrees and orphan branches (#16389) and sessions lost after `git init` in an existing project (#16814). Anyone running opencode in multi-worktree setups should upgrade. `adamdotdevin` also fixed model selection so it now persists per-session (#17348), and made fork copy the prompt into the new session (#17375).

On the desktop/app side, `Brendonovich` added multi-window support in Electron (#17155) — the biggest user-visible feature of the day. The rest of the app churn is UI polish: prompt composer controls (#17388), sidebar sync/spacing/animations (#17384, #17355, plus several un-numbered tweaks from `iamdavidhill` and `adamdotdevin`), tooltip and todo spacing fixes, optimistic prompt submit (#17337), text-attachment support (#17335), theme simplification (#17274) and missing themes (#17275), and removal of the prompt mode toggle (#17216). UI fix #17151 prevents long filenames from overlapping actions, and #17373 forces the wasm highlighter for markdown code blocks.

Performance: `nexxeln` paginated session history on the server (#17134) and switched the app to cursor-based history loading (#17329), and serialized config bun installs (#17342) to avoid contention.

Architectural work from `kitlangton`: scaffolded an effect-to-zod schema bridge (#17273), effectified `ProviderAuthService` (#17227) and `AuthService` (#17212), and added `console account` CLI subcommands (#17265) while hiding the console command from help (#17277). `rekram1-node` cleaned up the migrate-from-global code (#17292) and removed the openrouter warning (#17259). Provider fix #14586 filters empty content blocks for Bedrock. E2E stability got attention via #17267, #17263, and #17280.

Read first: #16389, #16814, #17155, and the v1.2.26 release notes.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`f2d3a4c`](https://github.com/anomalyco/opencode/commit/f2d3a4c70f6e9c5e233e1a47c55bb068639fd821) fix(ui): prevent long filenames from overlapping actions (#17151) — _@marcusschiesser_
- [`4b9b86b`](https://github.com/anomalyco/opencode/commit/4b9b86b54460e85b9a0dd1caf6311564a50faaaa) fix(opencode): lost sessions across worktrees and orphan branches (#16389) — _@michaeldwan_
- [`f54abe5`](https://github.com/anomalyco/opencode/commit/f54abe58cfb5c35cbaaf8497f49435d2180fd0cb) tui: update compaction status message to use Session instead of History across all languages — _@iamdavidhill_
- [`d954026`](https://github.com/anomalyco/opencode/commit/d954026dd855e018302a6c0733a1dd74140931df) release: v1.2.26 — _@opencode_
- [`4ad8116`](https://github.com/anomalyco/opencode/commit/4ad8116ce37a0e77e7f3c0e9e4e1002bba05b15e) fix(app): model selection persist by session (#17348) — _@adamdotdevin_
- [`5c70883`](https://github.com/anomalyco/opencode/commit/5c7088338c07ad632834ebd4a87feb23d255fb8a) fix(app): polish prompt composer controls (#17388) — _@iamdavidhill_
- [`389daa0`](https://github.com/anomalyco/opencode/commit/389daa03df9ba591b4629655e77c9229ec3fa184) fix(app): sidebar sync — _@adamdotdevin_
- [`1cbe7b0`](https://github.com/anomalyco/opencode/commit/1cbe7b08547d0190574e100318b323434eba90f6) tweak(ui): use new-session icon in sidebar buttons — _@iamdavidhill_
- [`050d71b`](https://github.com/anomalyco/opencode/commit/050d71bcf9726cedefad090ba989549fd6e70ef0) fix(app): avoid clipping new session during sidebar anim — _@iamdavidhill_
- [`ffde837`](https://github.com/anomalyco/opencode/commit/ffde837e8318900e92761ca8a7d9a0621143e04b) fix(app): animate titlebar controls on sidebar open — _@iamdavidhill_
- [`536abea`](https://github.com/anomalyco/opencode/commit/536abea2e2ed3bee160cf16a12b23558ed6e3fa3) fix(app): restore sidebar dash and sync session spinner colors (#17384) — _@iamdavidhill_
- [`c7a52b6`](https://github.com/anomalyco/opencode/commit/c7a52b6a2d47c39fc2c3c6311355cd7b9286aac2) feat(schema): scaffold effect-to-zod bridge (#17273) — _@kitlangton_
- [`c4ccb50`](https://github.com/anomalyco/opencode/commit/c4ccb50c37933ee4a0d7a6e37c3a3be9c8322b59) fix(app): fork should copy prompt into new session (#17375) — _@adamdotdevin_
- [`5aaf1dd`](https://github.com/anomalyco/opencode/commit/5aaf1ddfb77ccce50efc4b1070bd38d44e1e91f2) fix(ui): force wasm highlighter for markdown code blocks (#17373) — _@MrMushrooooom_
- [`f5f0731`](https://github.com/anomalyco/opencode/commit/f5f07310e026215b9f6809b196c8eddbdedd77df) fix(app): sidebar spacing + session list spinner transition (#17355) — _@iamdavidhill_
- [`c9e9dbe`](https://github.com/anomalyco/opencode/commit/c9e9dbeee1ceb5af3d1b1ce292317390286fe7a0) fix(app): terminal cloning without retry (#17354) — _@adamdotdevin_
- [`b88b323`](https://github.com/anomalyco/opencode/commit/b88b323049ed7ad7bf41fbec6ce66247ec4047ab) fix(app): scroll falls behind prompt input — _@adamdotdevin_
- [`6653f86`](https://github.com/anomalyco/opencode/commit/6653f868ae3690dfae1cb3384ebd06fdeb189786) fix(app): tooltip quirks — _@adamdotdevin_
- [`af29d91`](https://github.com/anomalyco/opencode/commit/af29d91dca2c82ca9211f3dbd34f59c04eb6fcf7) fix(app): todo spacing — _@adamdotdevin_
- [`1a3735b`](https://github.com/anomalyco/opencode/commit/1a3735b6197a192be10a2576ed21edee93f9da21) fix(app): better optimistic prompt submit (#17337) — _@adamdotdevin_
- [`d4ae13f`](https://github.com/anomalyco/opencode/commit/d4ae13f2a0e7748dd8f3a94ec21ee05050ec2cf7) fix(opencode): serialize config bun installs (#17342) — _@nexxeln_
- [`f4804da`](https://github.com/anomalyco/opencode/commit/f4804dac85b325c7d075384c246ae81ca43bc3a7) fix(app): oc-2 went too dark — _@adamdotdevin_
- [`843f188`](https://github.com/anomalyco/opencode/commit/843f188aaafd3a19272f3867a686644d6a31c325) fix(app): support text attachments (#17335) — _@adamdotdevin_
- [`05cb3c8`](https://github.com/anomalyco/opencode/commit/05cb3c87ca387be41aceb5ccad978c6848a56f70) chore(app): i18n sync (#17283) — _@adamdotdevin_
- [`270cb0b`](https://github.com/anomalyco/opencode/commit/270cb0b8b4265ac0965ac8b94a58a3bca86fa558) chore: cleanup (#17284) — _@adamdotdevin_
- [`46ba9c8`](https://github.com/anomalyco/opencode/commit/46ba9c81703fc6e7db7e623a607eeaab94fcd00f) perf(app): use cursor session history loading (#17329) — _@nexxeln_
- [`80f91d3`](https://github.com/anomalyco/opencode/commit/80f91d3fd912b6fc8d476d1f1ae7d221c08d19e9) Remove prompt mode toggle (#17216) — _@iamdavidhill_
- [`a564231`](https://github.com/anomalyco/opencode/commit/a564231caf0f845eca02a6055d0fb7056b1c598a) chore: generate — _@opencode-agent[bot]_
- [`9457493`](https://github.com/anomalyco/opencode/commit/9457493696b3b7136c743e6de9e50977ae1e6f8c) perf(server): paginate session history (#17134) — _@nexxeln_
- [`ff748b8`](https://github.com/anomalyco/opencode/commit/ff748b82ca55a20aca6881ea72742afec94450ab) fix(app): simplify themes (#17274) — _@adamdotdevin_
- [`9fafa57`](https://github.com/anomalyco/opencode/commit/9fafa5756282ff9f82c185af576e3e1a38f02384) go: upi pay — _@fwang_
- [`f847564`](https://github.com/anomalyco/opencode/commit/f8475649da1cd7a6d49f8f30ee2fad374c2f4fcc) chore: cleanup migrate from global code (#17292) — _@rekram1-node_
- [`b94e110`](https://github.com/anomalyco/opencode/commit/b94e110a4c3d78ee00a81d16fc70faab56eb6e8a) fix(opencode): sessions lost after git init in existing project (#16814) — _@michaeldwan_
- [`f0bba10`](https://github.com/anomalyco/opencode/commit/f0bba10b127a09829b234edcb5fac5fb0a84f5c0) fix(e2e): fail fast on config dependency installs (#17280) — _@Hona_
- [`d961981`](https://github.com/anomalyco/opencode/commit/d961981e25b77e13a2f0afd4dcf3808222ed581b) fix(app): list item background colors — _@adamdotdevin_
- [`5576662`](https://github.com/anomalyco/opencode/commit/55766622001b0c1e048c93c06cb3f7a0a3e9fd94) feat(app): missing themes (#17275) — _@adamdotdevin_
- [`4a2a046`](https://github.com/anomalyco/opencode/commit/4a2a046d79ab8a0f2c152b6af4fd637d33843c9b) fix: filter empty content blocks for Bedrock provider (#14586) — _@Tom-Ryder_
- [`8f8c74c`](https://github.com/anomalyco/opencode/commit/8f8c74cfb862b4fd92914f2137b64fefd544fe33) chore: generate — _@opencode-agent[bot]_
- [`092f654`](https://github.com/anomalyco/opencode/commit/092f654f63e6361a931d5bd30c1f64a063b3ec4a) fix(cli): hide console command from help output (#17277) — _@kitlangton_
- [`96b1d8f`](https://github.com/anomalyco/opencode/commit/96b1d8f639991e896bc8d31afe64d6309bf3ccd2) fix(app): stabilize todo dock e2e with composer probe (#17267) — _@Hona_
- [`dcb17c6`](https://github.com/anomalyco/opencode/commit/dcb17c6a678918ce0786640729fcc8cd8adb1746) chore: generate — _@opencode-agent[bot]_
- [`dd68b85`](https://github.com/anomalyco/opencode/commit/dd68b85f5833212a65c822899f42968a7abba176) refactor(provider): effectify ProviderAuthService (#17227) — _@kitlangton_
- [`84df96e`](https://github.com/anomalyco/opencode/commit/84df96eaefe7a920b48b205501fc849ba027e9ad) desktop: multi-window support in electron (#17155) — _@Brendonovich_
- [`d9dd33a`](https://github.com/anomalyco/opencode/commit/d9dd33aeebad49120ea8204e34520db872c9f553) feat(cli): add console account subcommands (#17265) — _@kitlangton_
- [`0a281c7`](https://github.com/anomalyco/opencode/commit/0a281c7390e6fd5373c3c61426f524b5e5ec6a6f) refactor(auth): effectify AuthService (#17212) — _@kitlangton_
- [`3016efb`](https://github.com/anomalyco/opencode/commit/3016efba47b5e6c46c82f44bb9519b9741a54441) tweak: rm openrouter warning (#17259) — _@rekram1-node_
- [`3998df8`](https://github.com/anomalyco/opencode/commit/3998df8112d398c2c5cd6253d352e4660589927e) fix(app): increase CI e2e workers (#17263) — _@Hona_
- [`7066e2a`](https://github.com/anomalyco/opencode/commit/7066e2a25eb90fc33736075b08d3babd46e41737) reorder provider list in providers login (#17262) — _@kitlangton_
- [`c173988`](https://github.com/anomalyco/opencode/commit/c173988aaa2f84ecdfe7d3c7cdfd7d3a525aee02) feat(app): interruption state — _@adamdotdevin_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
