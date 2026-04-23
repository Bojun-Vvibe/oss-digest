# anomalyco/opencode — 2026-03-20

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-19T23:59:59.000Z → 2026-03-20T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline today is a major portability push: opencode is being weaned off Bun-specific APIs. thdxr landed a runtime-conditional `#db` import abstracting SQLite (#18316), replaced Bun shell execution with portable Process utilities (#18318), and added a Node.js entry point plus build script (#18324) — together these clear the path to running opencode on Node, not just Bun. A related fix ensures `which()` lookups include the cache bin directory (#18320).

Architecturally, kitlangton continued an Effect-based refactor: the Installation service was "effectified" and namespaces dropped their `Effect` suffix (#18266), `Layer.fresh` is now applied at the instance service definition site (#18418), and consumers were switched to service imports to break bundle cycles (#18438). Hona's #18292 similarly avoids a truncate/permission import cycle. Expect import-path churn for downstream consumers.

Provider and platform news worth noting:
- vglafirov enabled the GitLab Agent Platform with workflow model discovery (#18014) — a substantial new integration.
- Jaaneek switched the xAI provider to the Responses API (#18175), which may change streaming/tool-call behavior.
- Cloudflare Workers AI is now documented as a provider (#18322).
- rekram1-node tweaked the codex plugin so the codex instruction isn't always injected; oauth plan no longer enforces instruction whitelisting (#18337).

Desktop/app got a stability-focused day from Hona (#18300, plus "deslopity" cleanup #18343) and Brendonovich, who added a desktop file-type filter with multi-file support (#18403) and patched Solid to work around a memo-undefined-under-transition bug (#18338). nexxeln aligned review file comments with diff comments (#18406). kitlangton also fixed stale account url/email on re-login (#18426), and thdxr shipped a grab-bag of small fixes (#18328) plus a question cross-out fix (5c6ec1c).

No releases, PRs, or issues surfaced in the window — activity is all direct-to-`dev` commits.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`129fe1e`](https://github.com/anomalyco/opencode/commit/129fe1e3507f014d5328122d8af875efa89cbbbc) ci — _@thdxr_
- [`214a6c6`](https://github.com/anomalyco/opencode/commit/214a6c6cf13038ae2a6e5a89a3d59fbf23e5be5a) fix: switch consumers to service imports to break bundle cycles (#18438) — _@kitlangton_
- [`3f249ab`](https://github.com/anomalyco/opencode/commit/3f249aba6db022bf0736b73d630d11c548f3e946) commit and push — _@thdxr_
- [`5c6ec1c`](https://github.com/anomalyco/opencode/commit/5c6ec1caac3fafa393521f08c2809ab55ef65b47) fix question cross out — _@thdxr_
- [`24f9df5`](https://github.com/anomalyco/opencode/commit/24f9df5463df3a52a235bb6d9b7929c6764c327d) fix: update stale account url/email on re-login (#18426) — _@kitlangton_
- [`12b8e1c`](https://github.com/anomalyco/opencode/commit/12b8e1c2bef555eeedfde9239ea5564233915bf8) chore: generate — _@opencode-agent[bot]_
- [`d70099b`](https://github.com/anomalyco/opencode/commit/d70099b0596b60450ca3c0d45b01816eca25fb54) fix: apply Layer.fresh at instance service definition site (#18418) — _@kitlangton_
- [`ce845a0`](https://github.com/anomalyco/opencode/commit/ce845a0b1b169c2d8a33a0d2db03c6cd40d7b29f) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`05d3e65`](https://github.com/anomalyco/opencode/commit/05d3e65f767360a38a508ad198df15ca3f8c2bbe) feat: enable GitLab Agent Platform with workflow model discovery (#18014) — _@vglafirov_
- [`51618e9`](https://github.com/anomalyco/opencode/commit/51618e9ceff1c426fa9c5e318789699d2ec24ef2) chore: generate — _@opencode-agent[bot]_
- [`e78944e`](https://github.com/anomalyco/opencode/commit/e78944e9a435ab6121aa12b7857e0b516c9a1b18) effectify Installation service, drop Effect suffix from namespaces (#18266) — _@kitlangton_
- [`bfdc38e`](https://github.com/anomalyco/opencode/commit/bfdc38e421aeeee2f4cfa1ac27d222d848a23323) tweak: adjust codex plugin logic so that codex instruction isn't always added (oauth plan no longer enforces instruction whitelisting) (#18337) — _@rekram1-node_
- [`83023e4`](https://github.com/anomalyco/opencode/commit/83023e4f0f9a6ec3bb376531081b11ae572776f6) docs: add Cloudflare Workers AI provider (#18322) — _@mchenco_
- [`d0a5730`](https://github.com/anomalyco/opencode/commit/d0a57305efcf03f4fd69ca180d97ea85e6cb2f1d) app: file type filter on desktop + multiple files (#18403) — _@Brendonovich_
- [`27a70ad`](https://github.com/anomalyco/opencode/commit/27a70ad70f30faf30d159f56b394c01f9474c7a4) fix(app): align review file comments with diff comments (#18406) — _@nexxeln_
- [`0bbf26a`](https://github.com/anomalyco/opencode/commit/0bbf26a1ce54dc7fb79e2cb098ed593787f20125) deslopity deslopity (#18343) — _@Hona_
- [`83cdb4d`](https://github.com/anomalyco/opencode/commit/83cdb4de6454946e7a8afef41794ee7367dc6f73) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`4989632`](https://github.com/anomalyco/opencode/commit/49896322457eebfe0827052d028545235252d881) patch solid to try fix memo undefined under transition bug (#18338) — _@Brendonovich_
- [`d460614`](https://github.com/anomalyco/opencode/commit/d460614cd7ad9e047a2792139ea67e16caa82ea7) fix: lots of desktop stability, better e2e error logging (#18300) — _@Hona_
- [`7866dbc`](https://github.com/anomalyco/opencode/commit/7866dbcfcc36a60d22ad466eddf54c54b21fabe3) fix: avoid truncate permission import cycle (#18292) — _@Hona_
- [`e71a21e`](https://github.com/anomalyco/opencode/commit/e71a21e0a8ac721677ffdfd67fc0301a6d0a3716) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`1071aca`](https://github.com/anomalyco/opencode/commit/1071aca91fa69044f281c1e54107dfde9dce7c75) fix: miscellaneous small fixes (#18328) — _@thdxr_
- [`b3d0446`](https://github.com/anomalyco/opencode/commit/b3d0446d13504f63c6c26dfd040779a3ccd056cc) feat: switch xai provider to responses API (#18175) — _@Jaaneek_
- [`949191a`](https://github.com/anomalyco/opencode/commit/949191ab74424dc0da8d2c2c180b6c192e8132d9) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`92cd908`](https://github.com/anomalyco/opencode/commit/92cd908fb54de951097efea8ad97ee4dc1b97c37) feat: add Node.js entry point and build script (#18324) — _@thdxr_
- [`6fcc970`](https://github.com/anomalyco/opencode/commit/6fcc970def1434b095a20f5e79820fd3894883bd) fix: include cache bin directory in which() lookups (#18320) — _@thdxr_
- [`52a7a04`](https://github.com/anomalyco/opencode/commit/52a7a04ad807acc577672f379e8e0cb327602e9d) refactor: replace Bun shell execution with portable Process utilities (#18318) — _@thdxr_
- [`37b8662`](https://github.com/anomalyco/opencode/commit/37b8662a9dec85a9c66e9679a34cbd09761a8b35) refactor: abstract SQLite behind runtime-conditional #db import (#18316) — _@thdxr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
