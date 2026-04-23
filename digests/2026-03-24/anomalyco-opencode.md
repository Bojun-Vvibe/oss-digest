# anomalyco/opencode — 2026-03-24

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-23T23:59:59.000Z → 2026-03-24T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two releases shipped today — **v1.3.1** (`ec64cea`) and **v1.3.2** (`0dcdf5f`) — but the headline is that both startup-efficiency fixes baked into them were reverted later in the day: `546748a` "fix(app): startup efficiency" (#18854) and `98b3340` "fix(app): more startup efficiency" (#18985) were rolled back in `a379eb3` and `cbe1337` after release, suggesting regressions worth watching for in 1.3.2 follow-ups.

The other major user-visible work clusters around UI/UX in the desktop app and TUI. Adam landed several Svelte/app fixes: session timeline jumping on scroll (#18993), sidebar truncation (`42a7734`) and broader sidebar UX (`9838f56`). BYK pushed a trio of perf/correctness fixes to the session view — eliminating N+1 reactive subscriptions in `SessionTurn` (#18924), guarding `model.current()` in `ProviderIcon` (#18927), and filtering non-renderable part types from the browser store (#18926). Jay tweaked the debug bar to use theme tokens (`afc4c83`), and #18905 adds manual theme-mode lock/unlock. For the TUI, #19028 introduces heap snapshot functionality for both TUI and server — useful for the ongoing memory/startup work.

Notable provider and platform changes: a new **Poe OAuth auth plugin** (#18477) from kamilio, **token caching for any amazon-bedrock provider** (#18959), GitLab Duo Workflow system prompt routed via flowConfig (#18928), and a gitlab-ai-provider bump to 5.3.1 for GPT-5.4 support (#18849). Plugin system robustness got a substantial overhaul in #18280 (agent/command resolution, async errors, hook timing, two-phase init) — worth a careful read for anyone authoring plugins. SIGHUP exit handler was restored in #18527 (re-fixing #16057).

Internals: Kit Langton continued the Effect migration, "effectifying" the Project service (#18808) and agent.ts (#18971), removed flaky cross-spawn spawner tests (#18977), and skipped typechecking the generated models snapshot (#19018); cross-spawn behavior for effect child processes was restored in #18798. Several Nix hash-parsing fixes landed (#18957, #18979, #18989). No new issues or open PRs were recorded in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`a379eb3`](https://github.com/anomalyco/opencode/commit/a379eb38673aad097e1f178307865ec40a5ac3ea) Revert "fix(app): startup efficiency (#18854)" — _@adamdotdevin_
- [`cbe1337`](https://github.com/anomalyco/opencode/commit/cbe1337f2401066cf33eb9009b597eafb49123ba) Revert "fix(app): more startup efficiency (#18985)" — _@adamdotdevin_
- [`50f6aa3`](https://github.com/anomalyco/opencode/commit/50f6aa37638df9cbc37a60a387d0816c40b3ecb2) fix(opencode): skip typechecking generated models snapshot (#19018) — _@kitlangton_
- [`0dcdf5f`](https://github.com/anomalyco/opencode/commit/0dcdf5f529dced23d8452c9aa5f166abb24d8f7c) release: v1.3.2 — _@opencode_
- [`4586b41`](https://github.com/anomalyco/opencode/commit/4586b41ffd00280fd8721cb95d6b6ef852ddedfc) change model for changelog — _@thdxr_
- [`35884de`](https://github.com/anomalyco/opencode/commit/35884defd8940016ee22e02c1dcb343d48446628) ci — _@thdxr_
- [`15dc33d`](https://github.com/anomalyco/opencode/commit/15dc33d1a38f3beb30fdc1a2bd2a0f3dd124a3a8) feat(tui): add heap snapshot functionality for TUI and server (#19028) — _@thdxr_
- [`1398674`](https://github.com/anomalyco/opencode/commit/1398674e531acc845e062b219f718cac1cd89a44) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`afc4c83`](https://github.com/anomalyco/opencode/commit/afc4c831eb239d40614d480ddac601862a6cde6d) tweak: use theme tokens for debug bar surface — _@jayair_
- [`ec64cea`](https://github.com/anomalyco/opencode/commit/ec64ceabecd84231bc228c57fcba13d05a7f7492) release: v1.3.1 — _@opencode_
- [`56644be`](https://github.com/anomalyco/opencode/commit/56644be95aed9c07b9f099c37d085b89bfc8d6c0) fix(core): restore SIGHUP exit handler (#16057) (#18527) — _@thdxr_
- [`00d3b83`](https://github.com/anomalyco/opencode/commit/00d3b831fc74aecde4617a008f0f2292064d72a5) feat: add Poe OAuth auth plugin (#18477) — _@kamilio_
- [`b848b7e`](https://github.com/anomalyco/opencode/commit/b848b7ebae7b783ae5dc121f1c865f17da453543) fix(app): session timeline jumping on scroll (#18993) — _@adamdotdevin_
- [`e837dcc`](https://github.com/anomalyco/opencode/commit/e837dcc1c5d3b44f6adc6f3f9f26eb7f125fbf56) chore: generate — _@opencode-agent[bot]_
- [`024979f`](https://github.com/anomalyco/opencode/commit/024979f3fd7bd570526d69ed56151a8b82530a56) feat(bedrock): Add token caching for any amazon-bedrock provider (#18959) — _@ndhansen_
- [`bc608fb`](https://github.com/anomalyco/opencode/commit/bc608fb081d08850a55409443bef66e86bf36bf7) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`9838f56`](https://github.com/anomalyco/opencode/commit/9838f56a6f8598ae5d9b587067e4de20adfb303d) fix(app): sidebar ux — _@adamdotdevin_
- [`98b3340`](https://github.com/anomalyco/opencode/commit/98b3340ceeb6928d0d57898d02665d763ef1ea9c) fix(app): more startup efficiency (#18985) — _@adamdotdevin_
- [`5e684c6`](https://github.com/anomalyco/opencode/commit/5e684c6e80d30a77ba02db013c61b8ecfe420f7f) chore: effectify agent.ts (#18971) — _@rekram1-node_
- [`2c1d8a9`](https://github.com/anomalyco/opencode/commit/2c1d8a90d567d65ac044b2feaf2ee886318247ec) fix: nix hash update parsing... again (#18989) — _@gigamonster256_
- [`8994cbf`](https://github.com/anomalyco/opencode/commit/8994cbfc0f57aede5a34a202f778d3a4385908af) chore: generate — _@opencode-agent[bot]_
- [`42a7734`](https://github.com/anomalyco/opencode/commit/42a773481e4d50a59784d514d81257330de38ca9) fix(app): sidebar truncation — _@adamdotdevin_
- [`539b01f`](https://github.com/anomalyco/opencode/commit/539b01f20fc3677155b3bdbb428c69423a805578) effectify Project service (#18808) — _@kitlangton_
- [`814a515`](https://github.com/anomalyco/opencode/commit/814a515a8a2f474585ea061a99e1058b2bb8b374) fix: improve plugin system robustness — agent/command resolution, async errors, hook timing, two-phase init (#18280) — _@ryanskidmore_
- [`235a82a`](https://github.com/anomalyco/opencode/commit/235a82aea97cd35c190bc95e916be5bdc0cce04a) chore: update flake.lock (#18976) — _@gigamonster256_
- [`9330bc5`](https://github.com/anomalyco/opencode/commit/9330bc5339b3ca82975f768200450d4c9aabcd35) fix: route GitLab Duo Workflow system prompt via flowConfig (#18928) — _@vglafirov_
- [`1238d1f`](https://github.com/anomalyco/opencode/commit/1238d1f61acccf05330ff8fb59f3e355239b5f82) fix: nix hash update parsing (#18979) — _@gigamonster256_
- [`1d3232b`](https://github.com/anomalyco/opencode/commit/1d3232b3885daa471309abab59e145d8e16f1736) chore: generate — _@opencode-agent[bot]_
- [`5c1bb5d`](https://github.com/anomalyco/opencode/commit/5c1bb5de86d62bd598a89cd1ba0c1c02de103a90) fix: remove flaky cross-spawn spawner tests (#18977) — _@kitlangton_
- [`7c5ed77`](https://github.com/anomalyco/opencode/commit/7c5ed771c36f5acbd47a1070afc1935e8a50650b) fix: update Feishu community links for zh locales (#18975) — _@MrMushrooooom_
- [`31c4a4f`](https://github.com/anomalyco/opencode/commit/31c4a4fb478d765d39ead26f81db9bf5ab54eb6c) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`0370772`](https://github.com/anomalyco/opencode/commit/037077285ac36b8a427aa330d331e099360f1e55) fix: better nix hash detection (#18957) — _@gigamonster256_
- [`41c77cc`](https://github.com/anomalyco/opencode/commit/41c77ccb33b26c09aca2ab96661dc31a5db70264) fix: restore cross-spawn behavior for effect child processes (#18798) — _@kitlangton_
- [`546748a`](https://github.com/anomalyco/opencode/commit/546748a461539ca63e188ee07ab2b143c5ac2c83) fix(app): startup efficiency (#18854) — _@adamdotdevin_
- [`c9c93ea`](https://github.com/anomalyco/opencode/commit/c9c93eac00bda356f4cf2b03e011d0b19e535952) fix(ui): eliminate N+1 reactive subscriptions in SessionTurn (#18924) — _@BYK_
- [`3f1a4ab`](https://github.com/anomalyco/opencode/commit/3f1a4abe6dc72b4d24b916436d3dd95393aeb650) fix(app): use optional chaining for model.current() in ProviderIcon (#18927) — _@BYK_
- [`431e058`](https://github.com/anomalyco/opencode/commit/431e0586add85c108ceadc0366a08ee09b862ecc) fix(app): filter non-renderable part types from browser store (#18926) — _@BYK_
- [`fde201c`](https://github.com/anomalyco/opencode/commit/fde201c286a83ff32dda9b41d61d734a4449fe70) fix(app): stop terminal autofocus on shortcuts (#18931) — _@nexxeln_
- [`d3debc1`](https://github.com/anomalyco/opencode/commit/d3debc191f116f8ed005bf0c3ddc8776546d53cd) manually lock/unlock theme mode (#18905) — _@kommander_
- [`34f43ff`](https://github.com/anomalyco/opencode/commit/34f43fff89d14c72aada06e0dc1d9228ec4d667d) sync — _@fwang_
- [`49623aa`](https://github.com/anomalyco/opencode/commit/49623aa5197ff23f5ea01d0a4befcea1665978fb) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`f134047`](https://github.com/anomalyco/opencode/commit/f1340472ecbbe25bf3c672d24a1d3cb5dfa25c60) chore: bump gitlab-ai-provider to 5.3.1 for GPT-5.4 model support (#18849) — _@vglafirov_
- [`a8b2882`](https://github.com/anomalyco/opencode/commit/a8b28826a0fe450d859baca73a331933096307a4) wip: zen — _@fwang_
- [`a03a2b6`](https://github.com/anomalyco/opencode/commit/a03a2b6eab82725ab380547c08847f016bbf1d8a) Zen: adjust cache tokens — _@fwang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
