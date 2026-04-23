# anomalyco/opencode — 2026-04-16

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-15T23:59:59.000Z → 2026-04-16T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Release **v1.4.7** ships today, bundling provider/auth fixes accumulated over the prior week: GitHub Copilot `gpt-5-mini` switches to low reasoning effort (#22824), Cloudflare AI Gateway drops `max_tokens` for OpenAI reasoning models so GPT-5/o-series stop failing (#22864), Azure now defaults `store=true` (#22764) and sets a prompt cache key by default (#22957), and Claude Opus 4.7 gains `xhigh` adaptive reasoning (#22833) on top of bumped AI SDK deps (#22869). Workspaces also now propagate auth context across sessions (#22897).

The dominant theme of the day is a sweeping internal refactor by @kitlangton: roughly 30 PRs that "unwrap" TypeScript namespaces into flat exports with self-reexports and collapse per-module barrels into `index.ts`. This touches provider (#22760), tool (#22762), cli-tui (#22759), lsp (#22748), storage (#22747), config (#22746), effect (#22745), share (#22744), project (#22743), and many smaller modules (file #22901, bus #22902, command #22903, ide #22904, global #22905, worktree #22906, sync #22907, git #22909, installation #22910, npm #22911, skill #22912, mcp #22913, plugin #22914, permission #22915, snapshot #22916, plus Discovery/ConfigPlugin/Pty/BashArity/Identifier/BusEvent/Ripgrep/MDNS/ServerProxy/Server/ConfigMCP/FileTime). Tooling support landed via `collapse-barrel.ts` (#22887). A circular-sibling-import runtime ReferenceError caused by the migration was hotfixed (#22752), and stricter type-aware lints were enabled (`no-misused-spread` #22749, `no-base-to-string` #22750) along with continued `as any` cleanup (#22840, #22877, #22882). Anyone maintaining downstream forks should expect significant import-path churn.

Other notable work: @jlongster reworked TUI workspace management (#22691) and global sync event structure (#22858); @thdxr modularized config parsing/schemas (multiple direct-to-dev commits) and fixed TUI OTel profiling; @Brendonovich began migrating bootstrap data fetching to TanStack Query (#22756) and fixed beta-channel desktop asset names (#22766); CLI startup deps were trimmed (#22652) and VCS init made non-blocking (#22771). A compaction fix budgets the retained tail with media (no PR #, by @nexxeln). No new issues or open PRs in window.

## Releases

- **[v1.4.7](https://github.com/anomalyco/opencode/releases/tag/v1.4.7)** — v1.4.7 _by @opencode-agent[bot] at 2026-04-16T21:55:19Z_
  > ## Core
  > - GitHub Copilot `gpt-5-mini` now uses low reasoning effort for better request compatibility. (@thakrarsagar)
  > - Workspaces now receive your auth context, so provider sign-in carries across workspace sessions.
  > - Cloudflare AI Gateway now drops `max_tokens` for OpenAI reasoning models so GPT-5 and o-series requests stop failing. (@kobicovaldev)
  > - Azure models now default `store=true`, fixing requests that require stored responses.
  > - Claude Opus 4.7 now supports `xhigh` adaptive reasoning.…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`f9aa3d7`](https://github.com/anomalyco/opencode/commit/f9aa3d77cd543ad3a46f86e36a2908f0cc2e652f) chore: generate — _@opencode-agent[bot]_
- [`5d47ea0`](https://github.com/anomalyco/opencode/commit/5d47ea091879b026b8efb9d09af06deb0643e46a) refactor: unwrap ConfigMCP namespace + self-reexport (#22948) — _@kitlangton_
- [`c03fa36`](https://github.com/anomalyco/opencode/commit/c03fa362572d8108d2d76c2a18bbf616a7345dac) refactor: unwrap Server namespace + self-reexport (#22970) — _@kitlangton_
- [`1089fa0`](https://github.com/anomalyco/opencode/commit/1089fa041561d76a58d72e464d95219af682eb8c) refactor: unwrap ServerProxy namespace + self-reexport (#22969) — _@kitlangton_
- [`715786b`](https://github.com/anomalyco/opencode/commit/715786bbf96304f617c5f2a48ed49fe6101c90ef) refactor: unwrap FileTime namespace + self-reexport (#22966) — _@kitlangton_
- [`218eca7`](https://github.com/anomalyco/opencode/commit/218eca7c2bc95355f594c0fe50853326c86c469f) refactor: unwrap MDNS namespace + self-reexport (#22968) — _@kitlangton_
- [`30fc791`](https://github.com/anomalyco/opencode/commit/30fc791480ebdabc9c62c70713e6cb52b44caff2) refactor: unwrap Ripgrep namespace + self-reexport (#22965) — _@kitlangton_
- [`e2d161d`](https://github.com/anomalyco/opencode/commit/e2d161dfdd54fdd30f8e36e8cf4f46e261dab96e) refactor: unwrap Identifier namespace + self-reexport (#22963) — _@kitlangton_
- [`23d48a7`](https://github.com/anomalyco/opencode/commit/23d48a7cf1af47870ef39def684eb8d569c66f4b) refactor: unwrap BusEvent namespace + self-reexport (#22962) — _@kitlangton_
- [`cb18f2e`](https://github.com/anomalyco/opencode/commit/cb18f2ef407c49e7e91e03f0b7c4a72c2d4d05c1) fix: ensure azure sets prompt cache key by default (#22957) — _@rekram1-node_
- [`dbe2ff5`](https://github.com/anomalyco/opencode/commit/dbe2ff52b25abf8cdeb878aa32614be22f28131f) fix tui otel profiling — _@thdxr_
- [`9db4099`](https://github.com/anomalyco/opencode/commit/9db40996cc5ce5877565d99e4199656345e8b80f) fix build script — _@thdxr_
- [`9f201d6`](https://github.com/anomalyco/opencode/commit/9f201d637034ff0a4c1e518481c76ba1a4f0eeb6) release: v1.4.7 — _@opencode_
- [`0e86466`](https://github.com/anomalyco/opencode/commit/0e86466f990edd046867820b9fac97766d11db3f) refactor: unwrap Discovery namespace to flat exports + self-reexport (#22878) — _@kitlangton_
- [`32548bc`](https://github.com/anomalyco/opencode/commit/32548bcb4af7db393d91f315ec2222954326e766) refactor: unwrap ConfigPlugin namespace to flat exports + self-reexport (#22876) — _@kitlangton_
- [`86c54c5`](https://github.com/anomalyco/opencode/commit/86c54c5acc7b3bf4d527cbd9fdfbd5dfc925b4d6) fix(tui): minor logging cleanup (#22924) — _@jlongster_
- [`ae58433`](https://github.com/anomalyco/opencode/commit/ae584332b36668ddfe4faa1b65157f5d276d34ad) fix: uncomment import (#22923) — _@rekram1-node_
- [`1694c5b`](https://github.com/anomalyco/opencode/commit/1694c5bfe1248c4997bbf76849f6e297e31d710d) refactor: collapse file barrel into file/index.ts (#22901) — _@kitlangton_
- [`cdfbb26`](https://github.com/anomalyco/opencode/commit/cdfbb26c003a42d2fd1e2875dd6cce43e5d19678) refactor: collapse bus barrel into bus/index.ts (#22902) — _@kitlangton_
- [`610c036`](https://github.com/anomalyco/opencode/commit/610c036ef1e30d0209dbeb0a815c9b16e03ab1e3) fix(opencode): use low reasoning effort for GitHub Copilot gpt-5 models (#22824) — _@thakrarsagar_
- [`2638e2a`](https://github.com/anomalyco/opencode/commit/2638e2acfa4dc5198dc3454986515022fac6559b) refactor: collapse plugin barrel into plugin/index.ts (#22914) — _@kitlangton_
- [`49bbea5`](https://github.com/anomalyco/opencode/commit/49bbea5aed2c4662c9740745b760817c1a88cd56) refactor: collapse snapshot barrel into snapshot/index.ts (#22916) — _@kitlangton_
- [`5fccdc9`](https://github.com/anomalyco/opencode/commit/5fccdc9fc7979be5f5b04ae9701d550fbec21535) refactor: collapse mcp barrel into mcp/index.ts (#22913) — _@kitlangton_
- [`664b2c3`](https://github.com/anomalyco/opencode/commit/664b2c36e8200c70d4b6a70702aceaf0604cd00a) refactor: collapse git barrel into git/index.ts (#22909) — _@kitlangton_
- [`964474a`](https://github.com/anomalyco/opencode/commit/964474a1b1cb2d864ef982e6ab7280b5b509c26f) refactor: collapse permission barrel into permission/index.ts (#22915) — _@kitlangton_
- [`ab15fc1`](https://github.com/anomalyco/opencode/commit/ab15fc1575fbdc9d9233bf7a130b4ae7b9cf8754) refactor: collapse npm barrel into npm/index.ts (#22911) — _@kitlangton_
- [`99d392a`](https://github.com/anomalyco/opencode/commit/99d392a4fbff2f4203240709221f986c3ffe60a7) refactor: collapse skill barrel into skill/index.ts (#22912) — _@kitlangton_
- [`ae9a696`](https://github.com/anomalyco/opencode/commit/ae9a6966075042863cd061f798c0ce09fea3ff64) refactor: collapse installation barrel into installation/index.ts (#22910) — _@kitlangton_
- [`bd51a0d`](https://github.com/anomalyco/opencode/commit/bd51a0d35bcdec47a980bb3c34c1d5d7ba144866) refactor: collapse worktree barrel into worktree/index.ts (#22906) — _@kitlangton_
- [`8c191b1`](https://github.com/anomalyco/opencode/commit/8c191b10c2bdceee607b0b549f9632f5adb5b511) refactor: collapse ide barrel into ide/index.ts (#22904) — _@kitlangton_
- [`cb6a925`](https://github.com/anomalyco/opencode/commit/cb6a9253fe8c4439bcfeff6c152b22b470de2eda) refactor: collapse sync barrel into sync/index.ts (#22907) — _@kitlangton_
- [`23f97ac`](https://github.com/anomalyco/opencode/commit/23f97ac49d5e39f8b9cd1f269ad3f1c33404a557) refactor: collapse global barrel into global/index.ts (#22905) — _@kitlangton_
- [`021ab50`](https://github.com/anomalyco/opencode/commit/021ab50fb105153de174c664ce90f5c90e4ba840) chore: generate — _@opencode-agent[bot]_
- [`3fe906f`](https://github.com/anomalyco/opencode/commit/3fe906f517eb60aa20fd47c95ec3c131452e8d91) refactor: collapse command barrel into command/index.ts (#22903) — _@kitlangton_
- [`a8d8a35`](https://github.com/anomalyco/opencode/commit/a8d8a35cd3033602befc6648d00ed6be37aed826) feat(core): pass auth data to workspace (#22897) — _@jlongster_
- [`9b77430`](https://github.com/anomalyco/opencode/commit/9b77430d0d3bf84fa7784a093b783fad3d7ca824) refactor: collapse env barrel into env/index.ts (#22900) — _@kitlangton_
- [`1045a43`](https://github.com/anomalyco/opencode/commit/1045a43603436d2328dcdaccc9160bd945e8b765) refactor: collapse format barrel into format/index.ts (#22898) — _@kitlangton_
- [`26af77c`](https://github.com/anomalyco/opencode/commit/26af77cd1e0b34de2bc171a665c2cc7819c15110) fix(core): fix detection of local installation channel (#22899) — _@jlongster_
- [`25a9de3`](https://github.com/anomalyco/opencode/commit/25a9de301ad83ac7f6c8ec5ed67d81ee4d2a0221) core: eager load config on startup for better traces and refactor npm install for improved error reporting — _@thdxr_
- [`e0d71f1`](https://github.com/anomalyco/opencode/commit/e0d71f124ef52f557387753ee19abe0f04f0faeb) tooling: add collapse-barrel.ts for single-namespace barrel migration (#22887) — _@kitlangton_
- [`1c33b86`](https://github.com/anomalyco/opencode/commit/1c33b866ba962ed7a4c147c316ad807886a0045e) fix: remove 10 more unnecessary `as any` casts in opencode core (#22882) — _@kitlangton_
- [`5e650fd`](https://github.com/anomalyco/opencode/commit/5e650fd9e2c8ebaedb49af2ff771af9721782d98) fix(opencode): drop max_tokens for OpenAI reasoning models on Cloudflare AI Gateway (#22864) — _@kobicovaldev_
- [`76275fc`](https://github.com/anomalyco/opencode/commit/76275fc3ab8f39cd02ae7eed87c47679e1f4c28e) refactor: move Pty into pty/index.ts with self-reexport (#22881) — _@kitlangton_
- [`6c3b28d`](https://github.com/anomalyco/opencode/commit/6c3b28db64e47895553949880f296bae74691f4a) fix: ensure that double pasting doesnt happen after tui perf commit was merged (#22880) — _@rekram1-node_
- [`2fe9d94`](https://github.com/anomalyco/opencode/commit/2fe9d9447070f6967d80b0a8f74239e1969d9e1c) fix: remove 8 more unnecessary `as any` casts in opencode core (#22877) — _@kitlangton_
- [`219b473`](https://github.com/anomalyco/opencode/commit/219b473e660994ac69a0c5d753ac65da951f3bf8) refactor: unwrap BashArity namespace to flat exports + self-reexport (#22874) — _@kitlangton_
- [`7c1b302`](https://github.com/anomalyco/opencode/commit/7c1b30291c8f8bde6e3ca7b257259384728a1eef) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`47e0e23`](https://github.com/anomalyco/opencode/commit/47e0e2342cbd9fd335864a403dbac9b3ec9a19af) tweak: set display 'summarized' by default for opus 4.7 thorugh messages api (#22873) — _@rekram1-node_
- [`bf4c107`](https://github.com/anomalyco/opencode/commit/bf4c1078290a5bf7e580141b17e7b37d905de311) fix: remove 7 unnecessary `as any` casts in opencode core (#22840) — _@kitlangton_
- [`9afbdc1`](https://github.com/anomalyco/opencode/commit/9afbdc102c2e7e449c98a08082b382cd2696715e) fix(test): make plugin loader theme source path separator-safe (#22870) — _@thdxr_
- [`3707701`](https://github.com/anomalyco/opencode/commit/370770122c355f50cfc98193a25b1150e0288f31) chore: generate — _@opencode-agent[bot]_
- [`143817d`](https://github.com/anomalyco/opencode/commit/143817d44e1ededeccbaff3e61690dfea4fe4109) chore: bump ai sdk deps for opus 4.7 (#22869) — _@rekram1-node_
- [`c60862f`](https://github.com/anomalyco/opencode/commit/c60862fc9e0a3378fe7be7c5079545c0d5c8d405) fix: add missing glob dependency  (#22851) — _@trbutler4_
- [`bee5f91`](https://github.com/anomalyco/opencode/commit/bee5f919fc5ae915aad0a4b5138e1e7f8274b9de) core: reorganize ConfigPaths module export for cleaner dependency management — _@thdxr_
- [`cefa7f0`](https://github.com/anomalyco/opencode/commit/cefa7f04c66fce1fb586736222a2d6b8a5609ded) core: reorganize ConfigPaths module export for cleaner dependency management — _@thdxr_
- [`03e20e6`](https://github.com/anomalyco/opencode/commit/03e20e6ac125b6a792c567451c2f904c6ed6941c) core: modularize config parsing to improve maintainability — _@thdxr_
- [`c5deeee`](https://github.com/anomalyco/opencode/commit/c5deeee8c7b2e5b3927d28958d2ceb9ebddeb256) fix: ensure azure has store = true by default (#22764) — _@rekram1-node_
- [`8b1f0e2`](https://github.com/anomalyco/opencode/commit/8b1f0e2d90c03fc5de6077f868af1548485cc466) core: add documentation comments to plugin configuration merge logic — _@thdxr_
- [`9bf2dfe`](https://github.com/anomalyco/opencode/commit/9bf2dfea353135874e2ba5d284e6eb0cd1b9e35d) core: refactor config schemas into separate modules for better maintainability — _@thdxr_
- [`33bb847`](https://github.com/anomalyco/opencode/commit/33bb847a1dfb5e79b4815813739671a40afa0e51) config: refactor — _@thdxr_
- [`bfffc3c`](https://github.com/anomalyco/opencode/commit/bfffc3c2c6349d9199dd1a73260612b5ec2da88d) tui: ensure TUI plugins load with proper project context when multiple directories are open — _@thdxr_
- [`b28956f`](https://github.com/anomalyco/opencode/commit/b28956f0dbc22d786fab24b2a34fd07fba6d27ec) fix(core): better global sync event structure (#22858) — _@jlongster_
- [`d82bc3a`](https://github.com/anomalyco/opencode/commit/d82bc3a421c04e3abbade123344dc40d81e03395) chore: generate — _@opencode-agent[bot]_
- [`06afd33`](https://github.com/anomalyco/opencode/commit/06afd332913e1ad4b067a0f1a1c906ca8376bc45) refactor(tui): improve workspace management (#22691) — _@jlongster_
- [`305460b`](https://github.com/anomalyco/opencode/commit/305460b25fc673f707a238f180d93e58d80f1ee9) fix: add a few more tests for sync and session restore (#22837) — _@jlongster_
- [`8c0205a`](https://github.com/anomalyco/opencode/commit/8c0205a84ab225e6901eff92e6a589e8fc88b679) fix: align stale bot message with actual 60-day threshold (#22842) — _@B67687_
- [`378c05f`](https://github.com/anomalyco/opencode/commit/378c05f202b0fda6561451a93639712a11400972) feat: Add support for claude opus 4.7 xhigh adaptive reasoning effort (#22833) — _@GrahamCampbell_
- [`cc7acd9`](https://github.com/anomalyco/opencode/commit/cc7acd90ab2fda54f06ff687a46d7364e479dc32) fix(nix): add shared package to bun install filters (#22665) — _@jerome-benoit_
- [`a200f6f`](https://github.com/anomalyco/opencode/commit/a200f6fb8b5e02aaf50a4f3e6c1a377f66e1c582) zen: opus 4.7 — _@fwang_
- [`2b1696f`](https://github.com/anomalyco/opencode/commit/2b1696f1d174fde75f57abd9f498b53bf00e0d68) Revert "tui: fix path comparison in theme installer to handle different path formats" — _@thdxr_
- [`8ab17f5`](https://github.com/anomalyco/opencode/commit/8ab17f5ce0bb3e74a49aa661fc1beef8314b8e04) tui: fix path comparison in theme installer to handle different path formats — _@thdxr_
- [`6ce481e`](https://github.com/anomalyco/opencode/commit/6ce481e95b7c5da814efcb379b8578552514e43e) move useful scripts to script folder — _@thdxr_
- [`42771c1`](https://github.com/anomalyco/opencode/commit/42771c1db377d190b670ec623a951e2ad7d51c3d) fix(compaction): budget retained tail with media — _@nexxeln_
- [`2e18a60`](https://github.com/anomalyco/opencode/commit/2e18a603f0ea24154908e748493fd4bfaa74fc00) merge dev — _@nexxeln_
- [`7341718`](https://github.com/anomalyco/opencode/commit/7341718f9234b0cf3a8758c87e91d2006b71bff6) chore: generate — _@opencode-agent[bot]_
- [`ef90b93`](https://github.com/anomalyco/opencode/commit/ef90b9320592fbea174d704850855821982f4f76) fix: restore .gitignore logic for config dirs and migrate to shared Npm service (#22772) — _@thdxr_
- [`3f7df08`](https://github.com/anomalyco/opencode/commit/3f7df08be97a0a6f6d224c1c8c93ace80ad97c33) perf: make vcs init non-blocking by forking git branch resolution (#22771) — _@thdxr_
- [`ef6c26c`](https://github.com/anomalyco/opencode/commit/ef6c26c730c7767ec5fc904927f2c5f1628de190) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`8b3b608`](https://github.com/anomalyco/opencode/commit/8b3b608ba9ddfe6ba088639435cf8187d5661a32) chore: generate — _@opencode-agent[bot]_
- [`9791850`](https://github.com/anomalyco/opencode/commit/97918500d4020a7b44f3636f23daabc8c477008b) app: start migrating bootstrap data fetching to TanStack Query (#22756) — _@Brendonovich_
- [`e2c0803`](https://github.com/anomalyco/opencode/commit/e2c08039624ac7c799ea5ba6ce94e3c671a8ed7c) Fix desktop download asset names for beta channel (#22766) — _@Brendonovich_
- [`f418fd5`](https://github.com/anomalyco/opencode/commit/f418fd56323c42f7bf1a0009db966632ca9bbab2) beta badge for desktop app (#14471) — _@adamdotdevin_
- [`675a46e`](https://github.com/anomalyco/opencode/commit/675a46e23e679c294355435584ae662a7c0903c7) CLI perf: reduce deps (#22652) — _@thdxr_
- [`150ab07`](https://github.com/anomalyco/opencode/commit/150ab07a833f0b10f4af17b3dd713cfedb16a6ff) chore: generate — _@opencode-agent[bot]_
- [`6b20838`](https://github.com/anomalyco/opencode/commit/6b2083898120c02413dae806e749872ae407d9d1) feat: unwrap provider namespaces to flat exports + barrel (#22760) — _@kitlangton_
- [`c8af8f9`](https://github.com/anomalyco/opencode/commit/c8af8f96ce2059ebf114a25ec958ab88dc15ff76) chore: generate — _@opencode-agent[bot]_
- [`5011465`](https://github.com/anomalyco/opencode/commit/5011465c8118491fb839e020c78ecc721a377846) feat: unwrap tool namespaces to flat exports + barrel (#22762) — _@kitlangton_
- [`f6cc228`](https://github.com/anomalyco/opencode/commit/f6cc228684ef9022c93a158b3fd1cd69c677ec1a) feat: unwrap cli-tui namespaces to flat exports + barrel (#22759) — _@kitlangton_
- [`9f4b73b`](https://github.com/anomalyco/opencode/commit/9f4b73b6a330dc606faa22e44454638fa45e49ba) fix: clean up final 16 no-unused-vars warnings (#22751) — _@kitlangton_
- [`bd29004`](https://github.com/anomalyco/opencode/commit/bd2900483150d690acdc53acb37e98eda7bb7fe5) feat: enable type-aware no-misused-spread rule, fix 8 violations (#22749) — _@kitlangton_
- [`8aa0f9f`](https://github.com/anomalyco/opencode/commit/8aa0f9fe9515ba0234ab6a0a58c868068913bb05) feat: enable type-aware no-base-to-string rule, fix 56 violations (#22750) — _@kitlangton_
- [`c802695`](https://github.com/anomalyco/opencode/commit/c802695ee9555ccfd8b0a6ae2215f750bccda712) docs: add circular import rules to namespace treeshake spec (#22754) — _@kitlangton_
- [`225a769`](https://github.com/anomalyco/opencode/commit/225a769411f35a0e2dd357589374766dae77ae6a) chore: generate — _@opencode-agent[bot]_
- [`0e20382`](https://github.com/anomalyco/opencode/commit/0e2038239699b430595980be2939c08c5e4cde93) fix: resolve circular sibling imports causing runtime ReferenceError (#22752) — _@kitlangton_
- [`509bc11`](https://github.com/anomalyco/opencode/commit/509bc11f81430575c58887960a02e63fa0107c03) feat: unwrap lsp namespaces to flat exports + barrel (#22748) — _@kitlangton_
- [`f242078`](https://github.com/anomalyco/opencode/commit/f24207844f84d43536b1ac5655e6f3cb80237f9f) feat: unwrap storage namespaces to flat exports + barrel (#22747) — _@kitlangton_
- [`1ca257e`](https://github.com/anomalyco/opencode/commit/1ca257e356e404a659d6ee39d5e26a41e729ca54) feat: unwrap config namespaces to flat exports + barrel (#22746) — _@kitlangton_
- [`d4cfbd0`](https://github.com/anomalyco/opencode/commit/d4cfbd020da730ad8e9d72ffe61d6496d48ccf30) feat: unwrap effect namespaces to flat exports + barrel (#22745) — _@kitlangton_
- [`581d520`](https://github.com/anomalyco/opencode/commit/581d5208ca0317dd0f441bc50eeda8e1ad614529) feat: unwrap share namespaces to flat exports + barrel (#22744) — _@kitlangton_
- [`a427a28`](https://github.com/anomalyco/opencode/commit/a427a28fa9750e5a9bcae3e72cfa582b071c640b) feat: unwrap project namespaces to flat exports + barrel (#22743) — _@kitlangton_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
