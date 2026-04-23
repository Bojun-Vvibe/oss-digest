# anomalyco/opencode — 2026-04-18

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-17T23:59:59.000Z → 2026-04-18T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Release **v1.4.11** shipped early in the window, fixing workspace routing so requests reach the correct workspace instance and stopping share-sync attempts for sessions that were never shared. That's the headline user-visible change for the day.

The dominant theme in the 50+ commits is a sustained **Effect Schema migration** of the config layer led by @kitlangton: provider Model+Info (#23197), Server+Layout (#23216), keybinds (#23227), permission (#23231), agent (#23237), and the root config Info (#23241), plus a documentation refresh tracking what's left (#23206, #23242). Alongside it, the `effect-zod` translator gained transform support with walk memoization (#23203), catchall/StructWithRest (#23186), well-known-filter → native Zod methods (#23209), `Schema.withDecodingDefault` → zod `.default()` (#23207), and a new `ZodPreprocess` annotation (#23222). A `PositiveInt` ZodOverride was dropped now that the translator handles it natively (#23215). Reviewers tracking the v2 schema work should start with #23197 and #23241.

A parallel **InstanceState/Effect context** refactor continued: explicit instance context in the File service (#23015), formatter (#23020), small services (#23022), LSP ambient reads removed (#23023), and worktree cleanup (#23019). Session/v2 also got tagged unions with exhaustive event matching (#23201).

Notable fixes and features worth a closer look:
- Bedrock: ensure `display: summarized` is sent by default (#23343), bump `@ai-sdk/amazon-bedrock` (#23341), test fix (#23351).
- GH Copilot + Haiku: drop unsupported `eager_input_streaming` (#23223).
- Skills logic made more token-efficient (#23253).
- TUI: full-session forks from the session dialog (#23339); session ID shown in sidebar on non-prod channels (#23185).
- Attachments: mime detected from file contents instead of extension (#23291).
- Core: track retry attempts with detailed error context on assistant entries (882b8e1); support `OTEL_RESOURCE_ATTRIBUTES` for custom telemetry (078d8a0); session-entry stepping extracted into its own module and immer dropped (11cd4fb).
- Observability: standardized session telemetry attrs (#23213), OTel-aligned route-span attrs (#23198), auto-tagged route spans with route params (#23189).
- Release plumbing: stop rewriting `dev` during publish (#22982) and avoid package.json drift (5eaef6b); deterministic OpenAPI generation (#23228).

No new issues or PRs were opened in the window.

## Releases

- **[v1.4.11](https://github.com/anomalyco/opencode/releases/tag/v1.4.11)** — v1.4.11 _by @opencode-agent[bot] at 2026-04-18T00:29:42Z_
  > ## Core
  > - Fixed workspace routing so requests reach the correct workspace instance.
  > - Stopped share sync attempts for sessions that were never shared.


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`ad05453`](https://github.com/anomalyco/opencode/commit/ad0545335a9ac5c371f4bd51674cd6da2414e2e9) ci — _@thdxr_
- [`cfbbae7`](https://github.com/anomalyco/opencode/commit/cfbbae73236913794c2c63a469849cd6c88470a9) ci — _@thdxr_
- [`940f971`](https://github.com/anomalyco/opencode/commit/940f971ca0368fadd03d654ccab79594672f4c48) ci: fix — _@thdxr_
- [`78ca49a`](https://github.com/anomalyco/opencode/commit/78ca49a1bcdfe42482cb8e902d0e9c3248a50d7a) test: fix bedrock test (#23351) — _@rekram1-node_
- [`1d54b0e`](https://github.com/anomalyco/opencode/commit/1d54b0e54065e3ad09093cff658447d0e2ffde3b) Stefan/enterprise forms waitlist (#23158) — _@R44VC0RP_
- [`7e971d8`](https://github.com/anomalyco/opencode/commit/7e971d8302c3d2c0020bd81e94d3ca039b4fd9a9) chore: generate — _@opencode-agent[bot]_
- [`54b3b3f`](https://github.com/anomalyco/opencode/commit/54b3b3fe05fd66f8f3b479ec438b53d38dbc6d0d) zen: redeem go — _@fwang_
- [`9d012b0`](https://github.com/anomalyco/opencode/commit/9d012b062186ef9900cc2673b77c446d38ebd789) zen: redeem credit — _@fwang_
- [`fbb0a93`](https://github.com/anomalyco/opencode/commit/fbb0a93e12740c7fb3f5f7ff62eee027c157e351) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`e2e7a8d`](https://github.com/anomalyco/opencode/commit/e2e7a8d722cf4b0a387717e9eee6d2f8fd4a81d4) fix: ensure display: summarized is sent by default for bedrock (#23343) — _@rekram1-node_
- [`ce7923a`](https://github.com/anomalyco/opencode/commit/ce7923adafd03e9cea88f42b68a9adc6fece7156) chore: bump @ai-sdk/amazon-bedrock (#23341) — _@rekram1-node_
- [`a26d531`](https://github.com/anomalyco/opencode/commit/a26d53151b11151a5580f11790b768ac334fa6a8) tui: allow full-session forks from the session dialog (#23339) — _@thdxr_
- [`5eaef6b`](https://github.com/anomalyco/opencode/commit/5eaef6b758cbfb683deadb8d440a420c3c1ee1f8) release: avoid package.json drift during publish — _@thdxr_
- [`c5c38ca`](https://github.com/anomalyco/opencode/commit/c5c38cad9c444070fa3b18d569fa75eb2ab40407) chore: generate — _@opencode-agent[bot]_
- [`9918f38`](https://github.com/anomalyco/opencode/commit/9918f389e7ffe0b5b6e6327045ecd6559775f7c6) fix: detect attachment mime from file contents (#23291) — _@kitlangton_
- [`dd8c424`](https://github.com/anomalyco/opencode/commit/dd8c424806dd2c78c35205566824017ffa3a37fa) chore: generate — _@opencode-agent[bot]_
- [`078d8a0`](https://github.com/anomalyco/opencode/commit/078d8a07cf848a7dd8067121d7c21c00d717b9d6) core: support OTEL_RESOURCE_ATTRIBUTES environment variable for custom telemetry attributes — _@thdxr_
- [`1ee712e`](https://github.com/anomalyco/opencode/commit/1ee712e549f8e31e38d70abd600ed48010659f8a) core: fix early return when node_modules is missing during package install — _@thdxr_
- [`55315bd`](https://github.com/anomalyco/opencode/commit/55315bdffaae45d8a983b90836308ad460fc45e4) tui: fix sync loading indicator to properly show loading state on startup — _@thdxr_
- [`882b8e1`](https://github.com/anomalyco/opencode/commit/882b8e1e7587c4b24e5cb7ee9409e93b9455c5b0) core: track retry attempts with detailed error context on assistant entries — _@thdxr_
- [`95edbc0`](https://github.com/anomalyco/opencode/commit/95edbc0ae68a5e4f9a24a5d0249391ef18b168f5) chore: generate — _@opencode-agent[bot]_
- [`11cd4fb`](https://github.com/anomalyco/opencode/commit/11cd4fb63904768da73fad323dc82a83e052f87c) core: extract session entry stepping logic into dedicated module — _@thdxr_
- [`9c16bd1`](https://github.com/anomalyco/opencode/commit/9c16bd1e30d631d482ae696f426bf5f7eb73dbdb) fix: make skills logic more token efficient (#23253) — _@rekram1-node_
- [`5e9d5c7`](https://github.com/anomalyco/opencode/commit/5e9d5c734ea883c00bdb2936e3bd6d786b220db4) chore: generate — _@opencode-agent[bot]_
- [`b382d1a`](https://github.com/anomalyco/opencode/commit/b382d1a4677622f94c9927ef3ccbd38e74bd5799) docs(effect): track schema migration progress with concrete file checklists (#23242) — _@kitlangton_
- [`23f3147`](https://github.com/anomalyco/opencode/commit/23f31475e7e8a5dce16b8095a45e954774ea65ca) refactor(config): migrate config.ts root Info to Effect Schema (#23241) — _@kitlangton_
- [`c0eab9e`](https://github.com/anomalyco/opencode/commit/c0eab9e44285596066555688057335cd58a1f84e) fix(desktop): adjust ui tool diff sticky header offset (#23149) — _@OpeOginni_
- [`8a1e85d`](https://github.com/anomalyco/opencode/commit/8a1e85d0c827b138a3af94f233a343cf8fbcccf2) chore: generate — _@opencode-agent[bot]_
- [`2793502`](https://github.com/anomalyco/opencode/commit/2793502db20ffc88c18fdec91133ac157d470461) refactor(config): migrate agent.ts Info to Effect Schema (#23237) — _@kitlangton_
- [`9f7bd02`](https://github.com/anomalyco/opencode/commit/9f7bd0246c14620758865513ceddfe0a768bec2e) chore: generate — _@opencode-agent[bot]_
- [`a6a4350`](https://github.com/anomalyco/opencode/commit/a6a4350d1032da8b1ae1ae1a51f11b7a0844fcff) refactor(config): migrate permission.ts Info to Effect Schema (#23231) — _@kitlangton_
- [`471b9f4`](https://github.com/anomalyco/opencode/commit/471b9f4dc443869795e0732c668e366150951d36) refactor: use InstanceState context in worktree cleanup paths (#23019) — _@kitlangton_
- [`24fb9b1`](https://github.com/anomalyco/opencode/commit/24fb9b1296d7bb5942ef5690ee3a806856b18dae) fix: stop rewriting dev during release publish (#22982) — _@kitlangton_
- [`3573019`](https://github.com/anomalyco/opencode/commit/357301991624ae6c361350c1c1aca222268a6d5d) fix(generate): make openapi output deterministic by formatting in-place (#23228) — _@kitlangton_
- [`fc5b353`](https://github.com/anomalyco/opencode/commit/fc5b353144b6d370df21e2da3a8c1fad7e63123a) refactor(config): migrate keybinds.ts to Effect Schema (#23227) — _@kitlangton_
- [`1dd257b`](https://github.com/anomalyco/opencode/commit/1dd257b76a98a159f763ec009bf061e6bd4ae718) refactor: use instance state in small services (#23022) — _@kitlangton_
- [`5fa1673`](https://github.com/anomalyco/opencode/commit/5fa1673341f2ebde860cb06799626c6dfbcde2c3) refactor: use InstanceState context in File service (#23015) — _@kitlangton_
- [`daaa1c7`](https://github.com/anomalyco/opencode/commit/daaa1c7e26a06d2239133c857d7f8863b60fb97a) chore: generate — _@opencode-agent[bot]_
- [`1fae784`](https://github.com/anomalyco/opencode/commit/1fae784b81a01fed3dcd6209e26427410158af30) feat(effect-zod): add ZodPreprocess annotation for pre-parse transforms (#23222) — _@kitlangton_
- [`81b7b58`](https://github.com/anomalyco/opencode/commit/81b7b58a5e396fb7d932ac77c7503d6271fa30ea) fix: gh copilot issue w/ haiku (eager_input_streaming not supported) (#23223) — _@rekram1-node_
- [`866188a`](https://github.com/anomalyco/opencode/commit/866188a643271ddfca3c3ae007d6cddad8d0d11c) chore: generate — _@opencode-agent[bot]_
- [`e6fd571`](https://github.com/anomalyco/opencode/commit/e6fd57165e7dad5796de278b4127614e3e08ba4f) refactor: remove ambient instance reads from lsp (#23023) — _@kitlangton_
- [`a5d99e7`](https://github.com/anomalyco/opencode/commit/a5d99e7a3c484fc020ae1f9a466542332b103807) refactor: pass formatter instance context explicitly (#23020) — _@kitlangton_
- [`a92c75e`](https://github.com/anomalyco/opencode/commit/a92c75e5f4286d603c44887e50f7f9adf9e56b40) chore: generate — _@opencode-agent[bot]_
- [`826fd33`](https://github.com/anomalyco/opencode/commit/826fd3350ce8aa1a855956f956038fad7ecffb86) refactor(config): migrate Server + Layout to Effect Schema (#23216) — _@kitlangton_
- [`23a2d01`](https://github.com/anomalyco/opencode/commit/23a2d0128254480e51c630f8cd077af29dc39efa) fix(observability): standardize session telemetry attrs (#23213) — _@kitlangton_
- [`5181f9b`](https://github.com/anomalyco/opencode/commit/5181f9b4e141fc6c0c3c3d26169721af9e63ca51) refactor(config): drop ZodOverride from PositiveInt in provider.ts (#23215) — _@kitlangton_
- [`f52ae28`](https://github.com/anomalyco/opencode/commit/f52ae28432f66eef13ea48203899b23992f89eb9) chore: generate — _@opencode-agent[bot]_
- [`36119ff`](https://github.com/anomalyco/opencode/commit/36119ff1731b3bc94ed0cffcb32b05987a48b088) feat(effect-zod): translate Schema.withDecodingDefault into zod .default() (#23207) — _@kitlangton_
- [`bb90f3b`](https://github.com/anomalyco/opencode/commit/bb90f3bbf99e00c2b5d780b38da318cfa3fd4c72) feat(effect-zod): translate well-known filters into native Zod methods (#23209) — _@kitlangton_
- [`05cdb7c`](https://github.com/anomalyco/opencode/commit/05cdb7c1071a2ba900ba14449085d261755ff3e0) refactor(v2): tag session unions and exhaustively match events (#23201) — _@kitlangton_
- [`b493dab`](https://github.com/anomalyco/opencode/commit/b493dabfe6edac3b671d9c369892a99d24650916) docs(effect): refresh migration status specs (#23206) — _@kitlangton_
- [`c4816f9`](https://github.com/anomalyco/opencode/commit/c4816f944e6cbc1ff4c03484189c11f5fcd45e9c) chore: generate — _@opencode-agent[bot]_
- [`211136e`](https://github.com/anomalyco/opencode/commit/211136e3a8cfdfcca658d97d5b0a1ce7b1b0a940) feat(effect-zod): transform support + walk memoization + flattened checks (#23203) — _@kitlangton_
- [`cf0a53c`](https://github.com/anomalyco/opencode/commit/cf0a53c501d069832be51640d1264cf658f381c9) chore: generate — _@opencode-agent[bot]_
- [`2899984`](https://github.com/anomalyco/opencode/commit/2899984819f49b2e1119021d313f78caa0db0e2f) refactor(config): migrate provider (Model + Info) to Effect Schema (#23197) — _@kitlangton_
- [`eafbe5c`](https://github.com/anomalyco/opencode/commit/eafbe5c57c41528b52974b671793896e1aa98e96) refactor(server): align route-span attrs with OTel semantic conventions (#23198) — _@kitlangton_
- [`7b98f54`](https://github.com/anomalyco/opencode/commit/7b98f544ff6b58f8dde9421bd1e7bf3e8c395d4f) feat(effect-zod): add catchall (StructWithRest) support to the walker (#23186) — _@kitlangton_
- [`b5aba58`](https://github.com/anomalyco/opencode/commit/b5aba5807cfbcafc57ffd488cbcb0148f8f1f4d6) feat(tui): show session ID in sidebar on non-prod channels (#23185) — _@kitlangton_
- [`d5c4c26`](https://github.com/anomalyco/opencode/commit/d5c4c26b4b1a62271c7278ffc81485577a46a8e4) feat(server): auto-tag route spans with route params (session.id, message.id, …) (#23189) — _@kitlangton_
- [`a35b8a9`](https://github.com/anomalyco/opencode/commit/a35b8a95c27d28e979a3826e1289d7ee87f40251) release: v1.4.11 — _@opencode_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
