# anomalyco/opencode — 2026-04-11

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-10T23:59:59.000Z → 2026-04-11T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The dominant story today is a sweeping **Effect migration** by `kitlangton`, who landed ~20 refactors collapsing legacy facade wrappers across the codebase in favor of direct Effect Services. This is largely internal plumbing but touches nearly every subsystem and is worth scanning if you maintain plugins or call internal APIs.

The headline architectural change is the upgrade to **Effect beta.46 context APIs** (#21977), which underpins most of the day's other refactors. On top of that, several long-standing facades were destroyed outright: `Account` (#22068), `ProviderAuth` (#21983), `Todo` (#21962), `ShareNext` (#21965), `Storage` (#21956), `SessionStatus` (#21968), `Format` (#21980), `command` (#21981), `git` runtime wrappers (#21982), and `installation` facade wrappers (#21984). Tool authors should note that `Tool.Def.execute` now returns an Effect and `defineEffect` was renamed to `define` (#21961); `Tool.Context.metadata` (#21972) and `ToolContext.ask` (#21986) likewise return Effects now — these are breaking for any out-of-tree tool code. `SystemPrompt` is now a proper Effect Service (#21992), and `TaskTool` consumes `Session.Service` directly (#21975). Observability got an Effect logger for motel (#21954), and a fix disables the default Effect console logger (#21963) plus wires `EffectLogger.layer` into bare `runPromise`/`runFork` calls (#21974).

Beyond the Effect work, two user-visible changes stand out:

- **Session permission updates** are now allowed at runtime (#22070 by `remorses`) — relevant if you're building UIs around session auth.
- **zhipuai-coding-plan** gets thinking enabled, and a Korean IME truncation bug is fixed (#22041).

Smaller items: server router middleware simplified with `next()` (#21720), AI SDK deps bumped (#22005), `Config.containsPath` now takes instance context (#21882), a flaky processor test was removed (#21959), and `.trim` calls were stripped from the processor (#21958). `thdxr` also hid the download button (029e713) — likely a UI polish on the website.

No releases, issues, or new PRs in the window; activity is all merged commits to `dev`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`4c4eef4`](https://github.com/anomalyco/opencode/commit/4c4eef46f1c404a4ad2b205ae954bf4a17ef33a5) chore: generate — _@opencode-agent[bot]_
- [`d62ec77`](https://github.com/anomalyco/opencode/commit/d62ec7776ea90097dd292a5660c1db602fe0aa3e) feat: allow session permission updates (#22070) — _@remorses_
- [`cb1e5d9`](https://github.com/anomalyco/opencode/commit/cb1e5d9e41b451dbf44ee565d61c6bd426f9175a) chore: generate — _@opencode-agent[bot]_
- [`ca5f086`](https://github.com/anomalyco/opencode/commit/ca5f08675955ac5d10129f44afda36e006ae8d44) refactor(server): simplify router middleware with next() (#21720) — _@thdxr_
- [`57c40eb`](https://github.com/anomalyco/opencode/commit/57c40eb7c29c33308ab7fce5384ea141a538bce6) chore: generate — _@opencode-agent[bot]_
- [`63035f9`](https://github.com/anomalyco/opencode/commit/63035f977ff3f733a7602da6f65346203f6cee55) fix: enable thinking for zhipuai-coding-plan & prevent Korean IME truncation (#22041) — _@claudianus_
- [`514d2a3`](https://github.com/anomalyco/opencode/commit/514d2a36bc44f34be62df8aa744117de01c72809) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`0b6fd5f`](https://github.com/anomalyco/opencode/commit/0b6fd5f6123e51387d2f9fc5d04a1295f820d561) chore: bump ai sdk deps (#22005) — _@rekram1-node_
- [`029e713`](https://github.com/anomalyco/opencode/commit/029e7135b7bc63999c2ea345a4107fac21b53bea) hide download button — _@thdxr_
- [`c43591f`](https://github.com/anomalyco/opencode/commit/c43591f8a2bf41a9e7990eaae5be0b9945f02048) chore: generate — _@opencode-agent[bot]_
- [`a2c2271`](https://github.com/anomalyco/opencode/commit/a2c22714cbcbefc180a0bd56073c78f12b62600e) ignore: exploration — _@thdxr_
- [`312f10f`](https://github.com/anomalyco/opencode/commit/312f10f79750294042713cabdfa7e8b78561888c) refactor(account): destroy Account facade (#22068) — _@kitlangton_
- [`d1f05b0`](https://github.com/anomalyco/opencode/commit/d1f05b0f3a80880c498c97f8bc2f01e4a61a3e94) chore: generate — _@opencode-agent[bot]_
- [`ccb0b32`](https://github.com/anomalyco/opencode/commit/ccb0b320e1dab8418f20358e7301bf0c3c21e024) refactor(session): make SystemPrompt a proper Effect Service (#21992) — _@kitlangton_
- [`5ee7eda`](https://github.com/anomalyco/opencode/commit/5ee7edaf9eae2badb138e0d4ee6e1972096dae80) refactor(tool): make Tool.Info init effectful (#21989) — _@kitlangton_
- [`2719063`](https://github.com/anomalyco/opencode/commit/27190635ea0497766a16ebddab8c4ca0b31f94a7) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`2e340d9`](https://github.com/anomalyco/opencode/commit/2e340d976f1d06e803c743e32e0c950f9ba643fb) chore: generate — _@opencode-agent[bot]_
- [`fe4dfb9`](https://github.com/anomalyco/opencode/commit/fe4dfb9f6f3051c78599636bcc1dcc036c9ed518) refactor(git): remove runtime facade wrappers (#21982) — _@kitlangton_
- [`5e3dc80`](https://github.com/anomalyco/opencode/commit/5e3dc8099921952925b6a70853cb06f5e4bebcdc) refactor: collapse command facade (#21981) — _@kitlangton_
- [`d84cc33`](https://github.com/anomalyco/opencode/commit/d84cc337428d3825caba14f97ec463c7781b5c77) refactor(plugin): return Effect from ToolContext.ask (#21986) — _@kitlangton_
- [`c92c462`](https://github.com/anomalyco/opencode/commit/c92c462148a48a9e9496735f7754a69e4a695b31) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`9ca06e0`](https://github.com/anomalyco/opencode/commit/9ca06e033605d3670f1e61b5f31ff0a975f569dc) docs(effect): mark SessionTodo migrated (#21987) — _@kitlangton_
- [`3b523b3`](https://github.com/anomalyco/opencode/commit/3b523b32f5c88141ba50a76e4e6ccab22cee8e5c) chore: generate — _@opencode-agent[bot]_
- [`ba3600a`](https://github.com/anomalyco/opencode/commit/ba3600a5156c382c3fde73ec029b26f318b7391d) refactor(session): remove dead updatePartDelta facade (#21985) — _@kitlangton_
- [`03ce2e5`](https://github.com/anomalyco/opencode/commit/03ce2e5288c8d2ef58e1197f6200b6be8f2797d7) refactor(installation): drop facade runtime wrappers (#21984) — _@kitlangton_
- [`87e23ab`](https://github.com/anomalyco/opencode/commit/87e23abb10625bae4194406545e41beebb1b5a06) refactor: remove ProviderAuth facade (#21983) — _@kitlangton_
- [`2868000`](https://github.com/anomalyco/opencode/commit/2868000c2030a2b6474947778265c6b008f2c536) chore: generate — _@opencode-agent[bot]_
- [`f38f415`](https://github.com/anomalyco/opencode/commit/f38f415bf0af3fb8baf211b83996d3a58a1fd010) refactor: collapse Format facade (#21980) — _@kitlangton_
- [`4341ab8`](https://github.com/anomalyco/opencode/commit/4341ab838e3494b5d640780b1c59d6305aa59e95) refactor(tool): use Session.Service directly in TaskTool (#21975) — _@kitlangton_
- [`cd004cf`](https://github.com/anomalyco/opencode/commit/cd004cf0b28aa49344da2d5947a78703d30bcaf1) refactor(session): eliminate Effect.promise roundtrips for sync MessageV2.stream (#21973) — _@kitlangton_
- [`19ae8c8`](https://github.com/anomalyco/opencode/commit/19ae8c88b0bfdbd66b81c96c1ca142b19463287c) chore: generate — _@opencode-agent[bot]_
- [`3dd0914`](https://github.com/anomalyco/opencode/commit/3dd09147c2958cbb16bbe6ada43107a3c00ed8b6) refactor(tool): Tool.Context.metadata returns Effect (#21972) — _@kitlangton_
- [`9581bf0`](https://github.com/anomalyco/opencode/commit/9581bf06709195368bc3220294c36f3527dbc5c6) refactor(effect): upgrade opencode to beta.46 context APIs (#21977) — _@kitlangton_
- [`af8aff3`](https://github.com/anomalyco/opencode/commit/af8aff37889c059e38ccf2e18e10ee156bf0eea1) refactor: make TaskPromptOps effectful (#21971) — _@kitlangton_
- [`2a8a59d`](https://github.com/anomalyco/opencode/commit/2a8a59ded981fd5ef542836dfe610c1ecf32ac7f) chore: generate — _@opencode-agent[bot]_
- [`5917ac2`](https://github.com/anomalyco/opencode/commit/5917ac2162865c4057ddefdd2a4bb8a7dcff0f2c) fix: provide EffectLogger.layer to bare Effect.runPromise/runFork calls (#21974) — _@kitlangton_
- [`b6af4d0`](https://github.com/anomalyco/opencode/commit/b6af4d0dc6fb37ffb2b4fb621e53593b12aa32a1) refactor(config): pass instance context to containsPath (#21882) — _@Brendonovich_
- [`577139c`](https://github.com/anomalyco/opencode/commit/577139c62606630fee8e82ec2021f71e66d54b1f) chore: generate — _@opencode-agent[bot]_
- [`c5fb628`](https://github.com/anomalyco/opencode/commit/c5fb6281f05949f9928673d0045de411d24e0e20) refactor(tool): Tool.Def.execute returns Effect, rename defineEffect → define (#21961) — _@kitlangton_
- [`f998124`](https://github.com/anomalyco/opencode/commit/f99812443c97022d88957bf67cf98be3e790bb7d) refactor: destroy SessionStatus facade (#21968) — _@kitlangton_
- [`b898c6d`](https://github.com/anomalyco/opencode/commit/b898c6d0ea2fcd83b6c23da52f811c082b329771) chore: generate — _@opencode-agent[bot]_
- [`9e7045e`](https://github.com/anomalyco/opencode/commit/9e7045eaec4a28aee20bd889981932f73b1edd79) refactor: destroy ShareNext facade (#21965) — _@kitlangton_
- [`a17ac02`](https://github.com/anomalyco/opencode/commit/a17ac02061a20c022bb2e733185c122d77e473ad) refactor: extract LSP diagnostic report formatter (#21964) — _@kitlangton_
- [`57f9397`](https://github.com/anomalyco/opencode/commit/57f939767729a7cc6d127674528732e0d9beb24e) chore: generate — _@opencode-agent[bot]_
- [`a4c6860`](https://github.com/anomalyco/opencode/commit/a4c686025cf5b09e8091810705c88264a839ba37) refactor: destroy Todo facade (#21962) — _@kitlangton_
- [`face879`](https://github.com/anomalyco/opencode/commit/face8791001a06dbf598006022925e8bd5b5f0c5) fix: disable default Effect console logger (#21963) — _@kitlangton_
- [`605559b`](https://github.com/anomalyco/opencode/commit/605559b1653640187f01a99389248e918016195e) chore: generate — _@opencode-agent[bot]_
- [`5cd4c6e`](https://github.com/anomalyco/opencode/commit/5cd4c6eb22ce6a5557d17d105c37ab32dda4c287) refactor: destroy Storage facades (#21956) — _@kitlangton_
- [`40358d6`](https://github.com/anomalyco/opencode/commit/40358d60a025ad50d8a55443cbd48b1102c5d488) refactor: add Effect logger for motel observability (#21954) — _@kitlangton_
- [`96c1c03`](https://github.com/anomalyco/opencode/commit/96c1c0363d5c3ab5d5ef23bdd880b533f42fba14) chore: rm unnecessary test (now we use effect) and the test is flaky (#21959) — _@rekram1-node_
- [`3381993`](https://github.com/anomalyco/opencode/commit/33819932ec347c365d3a6c0636264020cc39b5c1) tweak: rm processor .trim calls (#21958) — _@rekram1-node_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
