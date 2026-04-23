# anomalyco/opencode — 2026-02-25

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-02-24T23:59:59.000Z → 2026-02-25T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two patch releases shipped today: **v1.2.13** (`d848c9b`) and **v1.2.14** (`de2bc25`), bracketing a busy day of fixes and a notable config refactor. If you only read one change, make it `split tui/server config` (#13968), which separates TUI and server configuration — likely a breaking shape change for anyone with custom configs.

The other headline item is a new **message delete endpoint** (#14417), expanding the core API surface, alongside `feat: show LSP errors for apply_patch tool` (#14715) which surfaces diagnostics inline when patches are applied. A `refactor: migrate Bun.spawn to Process utility` (#14448) standardises subprocess handling with timeout/cleanup — worth a look if you touch process spawning.

Bug fixes cluster around startup and CLI robustness:
- `fix: consume stdout concurrently with process exit in auth login` (#15058) resolves a hang in auth flows.
- `fix(project): await git id cache write` (#14977) and `fix(opencode): import custom tools via file URL` (#14971) close two correctness gaps from Hona.
- `fix(opencode): disable config bun cache in CI` (#14985) unblocks CI runs.
- `fix(app): keyboard navigation previous/next message` (#15047) and `fix(app): correct Copilot provider description in i18n` (#15071) tidy the UI.

A quieter but interesting thread: tdxr landed several CI changes around the **beta sync bot** — auto-resolving merge conflicts via opencode itself (`a487f11`), pinning `opencode/kimi-k2.5` (`0b3fb5d`), then switching to `gpt-5.3-codex` (`6af7ddf`) for code-gen quality. Also note `core: temporarily disable plan enter tool to prevent unintended mode switches` (`fa559b0`) — a behavioural regression-guard worth knowing if you rely on plan mode.

Heavy WIP activity from fwang on a "**zen go**" track (six commits, `5d5f2cf`…`1172fa4`) and from thdxr on an "opencode go copy" (`561f9f5`), plus a desktop enhancement for Windows resolution and loading states (#13320) co-authored by Brendonovich. No issues, PRs, or releases were opened via the issue/PR feeds in-window — all activity came through direct commits.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`444178e`](https://github.com/anomalyco/opencode/commit/444178e079fb41ba2149a1cdfdd3040593715d70) fix(docs): update schema URL in share configuration examples across multiple languages (#15114) — _@OpeOginni_
- [`4551282`](https://github.com/anomalyco/opencode/commit/4551282a4b95cd3f7e6ea4b6ba6a83dd747bb3a0) chore: generate — _@opencode-agent[bot]_
- [`9d29d69`](https://github.com/anomalyco/opencode/commit/9d29d692c6d93322f5894cca4232d80106e7c81a) split tui/server config (#13968) — _@kommander_
- [`1172fa4`](https://github.com/anomalyco/opencode/commit/1172fa418e9aa5e0fcfccea326c6c9d35e1d57fd) wip: zen go — _@fwang_
- [`b368181`](https://github.com/anomalyco/opencode/commit/b368181ac90b0365af535b3d0bd8284c2032240c) chore: move glossary — _@adamdotdevin_
- [`7afa48b`](https://github.com/anomalyco/opencode/commit/7afa48b4ef2e2039f6f627b7c495f46ce267d267) tweak(ui): keep reasoning inline code subdued in dark mode — _@iamdavidhill_
- [`45191ad`](https://github.com/anomalyco/opencode/commit/45191ad144f6546c051fb3a94f9f3cb1e2c00ed3) fix(app): keyboard navigation previous/next message (#15047) — _@neriousy_
- [`2869922`](https://github.com/anomalyco/opencode/commit/286992269623bcb410f0de89e128ff14361d5e97) fix(app): correct Copilot provider description in i18n files (#15071) — _@Oleksii-Pavliuk_
- [`e48c1cc`](https://github.com/anomalyco/opencode/commit/e48c1ccf0714a2a78a8bbf27e8ade0b8bcbdcf3b) chore(workflows): label vouched users and restrict vouch managers (#15075) — _@R44VC0RP_
- [`5e5823e`](https://github.com/anomalyco/opencode/commit/5e5823ed85ff83e1e3461b861fb582f27cc38969) chore: generate — _@opencode-agent[bot]_
- [`de2bc25`](https://github.com/anomalyco/opencode/commit/de2bc25677b419d2af0da8b6a24a05d3f22b67a8) release: v1.2.14 — _@opencode_
- [`79b5ce5`](https://github.com/anomalyco/opencode/commit/79b5ce58e9d3ad940330c2fd82784a4d8b7e004d) feat(core): add message delete endpoint (#14417) — _@shantur_
- [`088a81c`](https://github.com/anomalyco/opencode/commit/088a81c116f3fda865851292c92754385292b92d) fix: consume stdout concurrently with process exit in auth login (#15058) — _@Ayushlm10_
- [`d848c9b`](https://github.com/anomalyco/opencode/commit/d848c9b6a32f408e8b9bf6448b83af05629454d0) release: v1.2.13 — _@opencode_
- [`561f9f5`](https://github.com/anomalyco/opencode/commit/561f9f5f059ccefdad89ca01e79cc1234b913820) opencode go copy — _@thdxr_
- [`3c6c744`](https://github.com/anomalyco/opencode/commit/3c6c74457d53a01a3f42a758ad1317cd6ed1b963) sync — _@thdxr_
- [`fc6e793`](https://github.com/anomalyco/opencode/commit/fc6e7934bd365ad1665dea68556dbfc80ac3b611) feat(desktop): enhance Windows app resolution and UI loading states (#13320) — _@neriousy_
- [`d7500b2`](https://github.com/anomalyco/opencode/commit/d7500b25b8eb84051e13bd930e234445352cc9a4) zen: go — _@fwang_
- [`5d5f2cf`](https://github.com/anomalyco/opencode/commit/5d5f2cfee608d3c1dc6ec309fd272ec9da4a2e8d) wip: zen go — _@fwang_
- [`1172ebe`](https://github.com/anomalyco/opencode/commit/1172ebe697f9b59c8b1eb64f0a4c3d43e6084bf4) wip: zen go — _@fwang_
- [`d00d98d`](https://github.com/anomalyco/opencode/commit/d00d98d56a9072a5b6e11eadc34f03f86e10b96b) wip: zen go — _@fwang_
- [`6fc5506`](https://github.com/anomalyco/opencode/commit/6fc5506293eba8f7fc8c2c751fa5d9309d6eaea8) zen: go — _@fwang_
- [`76b60f3`](https://github.com/anomalyco/opencode/commit/76b60f3779b2e4d54fa4036759b7064c4649c9ca) desktop: make readme more accurate — _@Brendonovich_
- [`6af7ddf`](https://github.com/anomalyco/opencode/commit/6af7ddf03bd16b1e1d1cd7250e6b60aca87d437b) ci: switch beta script to gpt-5.3-codex for improved code generation quality — _@thdxr_
- [`0b3fb5d`](https://github.com/anomalyco/opencode/commit/0b3fb5d46002745b37eb448115014cb814d49921) ci: specify opencode/kimi-k2.5 model in beta script to ensure consistent PR processing — _@thdxr_
- [`a487f11`](https://github.com/anomalyco/opencode/commit/a487f11a30981f44896ac771f7ade87fba9d6092) ci: auto-resolve merge conflicts in beta sync using opencode — _@thdxr_
- [`637059a`](https://github.com/anomalyco/opencode/commit/637059a515a6afd983a8a615f90650d997a821ce) feat: show LSP errors for apply_patch tool (#14715) — _@thdxr_
- [`fa559b0`](https://github.com/anomalyco/opencode/commit/fa559b0385374222b933ba8f86dc3cd92f53c0de) core: temporarily disable plan enter tool to prevent unintended mode switches during task execution — _@thdxr_
- [`814c1d3`](https://github.com/anomalyco/opencode/commit/814c1d398cc4d8c3a6e321e8f96699d6f1dc10ae) refactor: migrate Bun.spawn to Process utility with timeout and cleanup (#14448) — _@thdxr_
- [`da40ab7`](https://github.com/anomalyco/opencode/commit/da40ab7b3d242208b5c759e55e548c13c658372a) fix(opencode): disable config bun cache in CI (#14985) — _@Hona_
- [`e718263`](https://github.com/anomalyco/opencode/commit/e7182637784b7d558657da5b6aede92f0db1c11f) fix(project): await git id cache write (#14977) — _@Hona_
- [`3af12c5`](https://github.com/anomalyco/opencode/commit/3af12c53c433d1f49abde0874dc02c2e6c018930) fix(opencode): import custom tools via file URL (#14971) — _@Hona_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
