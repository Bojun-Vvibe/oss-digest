# anomalyco/opencode — 2026-04-07

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-06T23:59:59.000Z → 2026-04-07T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A heavy commit day on `dev` (no PRs/releases/issues surfaced in the window) with several notable refactors and features landing directly.

The headline change is a **tool-system refactor that removes agent context from initialization** (`4633184`, #21052), which is foundational for how tools get instantiated and likely affects plugin/integrator code. Pair this with `jlongster`'s two core refactors: **multiple event streams in the worker plus removal of workspaces from the plugin API** (`5d48e7b`, #21348) and an earlier change adding a **full HTTP proxy and a new workspace adaptor interface** (`37883a9`, #21239). Anyone maintaining plugins or embedding opencode should read these three first.

On observability, `c90fc6a` (#21387) adds **OTLP support to opencode** — a meaningful new integration surface. The snapshot subsystem also got a refactor to **store unified patches in file diffs** (`b7fab49`, #21244), which changes on-disk/diff semantics worth checking before upgrading.

Notable user-facing features:
- **Better subagent experience** (`ec8b981`, #20708) from adamdotdevin.
- **`--dangerously-skip-permissions` flag for `opencode run`** (`885df8e`, #21266) — security-relevant; auto-accept permissions were also moved into settings (`41612b3`, #21308).
- **PDF attachment drag-and-drop** (`3c96bf8`, #16926) and full-name display on composer attachment chips (`3a1ec27`, #21306).
- TUI gains a `variant_list` keybind for the "Switch model variant" command (`e945436`, #21185).

Fixes worth noting: webfetch timeouts are now cleared on failed fetches (`bc1840b`, #21378); Alibaba provider errors are retried (`81bdffc`, #21355); console login transport errors improved (`d83fe4b`, #21350); user message variants stay scoped per model (`1f94c48`, #21332).

Provider/zen churn from `fwang`: GLM 5.1 support and docs (`7afb517`, `c589724`, `9385714`), Mimo added (`f4975ef`), and coupon support in the Go client (`01c5eb6`). The Anthropic AI SDK was bumped and its local patch removed (`3c31d04`, #21247) — verify SDK behavior after pulling.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`0788a53`](https://github.com/anomalyco/opencode/commit/0788a535e2dc8c7aee8c681505b07105cb962578) chore: generate — _@opencode-agent[bot]_
- [`b7fab49`](https://github.com/anomalyco/opencode/commit/b7fab49b64275b83bcec8200d7492fc5d15ffe06) refactor(snapshot): store unified patches in file diffs (#21244) — _@thdxr_
- [`4633184`](https://github.com/anomalyco/opencode/commit/463318486f94fa20e8d864d77708a347fa8423e3) core: refactor tool system to remove agent context from initialization (#21052) — _@thdxr_
- [`7afb517`](https://github.com/anomalyco/opencode/commit/7afb517a1a2271d61ad8e074acbd3b4252e1f682) go: glm5.1 — _@fwang_
- [`c589724`](https://github.com/anomalyco/opencode/commit/c5897247297d37bf483f3a51aa956fc3bd4eda0d) zen: glm5.1 doc — _@fwang_
- [`9385714`](https://github.com/anomalyco/opencode/commit/9385714373a8762851427935e3e8da1199533cee) zen: glm5.1 doc — _@fwang_
- [`c90fc6a`](https://github.com/anomalyco/opencode/commit/c90fc6a486b040ecba168b0612aecf258e0e4820) feat(opencode): add OTLP observability support (#21387) — _@thdxr_
- [`bc1840b`](https://github.com/anomalyco/opencode/commit/bc1840b196dcc9d438861e53301a3dbbeab6974f) fix(opencode): clear webfetch timeouts on failed fetches (#21378) — _@rekram1-node_
- [`095aeba`](https://github.com/anomalyco/opencode/commit/095aeba0a77482f3061e623c7d91c29da76f195e) test: disable GPG signing in test fixtures (#20386) — _@altendky_
- [`e945436`](https://github.com/anomalyco/opencode/commit/e945436b6f71afa4860e68558de17c6fba88a1f7) feat(tui): allow variant_list keybind for the "Switch model variant" command (#21185) — _@ariane-emory_
- [`6bfa82d`](https://github.com/anomalyco/opencode/commit/6bfa82de65a96f2587c73c5a9efd41a471fa1674) chore: generate — _@opencode-agent[bot]_
- [`d83fe4b`](https://github.com/anomalyco/opencode/commit/d83fe4b540c099ad794a4a9cd5242d0622961365) fix(opencode): improve console login transport errors (#21350) — _@kitlangton_
- [`81bdffc`](https://github.com/anomalyco/opencode/commit/81bdffc81cce708f6d10a982148050d42dc095df) fix: ensure the alibaba provider errors are retried (#21355) — _@rekram1-node_
- [`2549a38`](https://github.com/anomalyco/opencode/commit/2549a38a71d1cd01a70427221a9de988d1b3a62b) fix(tui): use sentence case for theme mode command palette items (#21192) — _@ariane-emory_
- [`5d48e7b`](https://github.com/anomalyco/opencode/commit/5d48e7bd44bca653861a9ebde0476ba887d4328b) refactor(core): support multiple event streams in worker and remove workspaces from plugin api (#21348) — _@jlongster_
- [`ec8b981`](https://github.com/anomalyco/opencode/commit/ec8b9810b4231cd6a5c69ccd930b6c50999fc997) feat(app): better subagent experience (#20708) — _@adamdotdevin_
- [`65318a8`](https://github.com/anomalyco/opencode/commit/65318a80f7a3320ba77b749241f8de997dc65c82) chore: update web stats — _@adamdotdevin_
- [`6a5aae9`](https://github.com/anomalyco/opencode/commit/6a5aae9a84bd1aef360a84fc50f41e3a82b7baa4) chore: generate — _@opencode-agent[bot]_
- [`1f94c48`](https://github.com/anomalyco/opencode/commit/1f94c48bdd7ea69f05574ae90f20436a801c9ca2) fix(opencode): keep user message variants scoped to model (#21332) — _@thdxr_
- [`01c5eb6`](https://github.com/anomalyco/opencode/commit/01c5eb679cd0b00cba654b316ef8615d0262c500) go: support coupon — _@fwang_
- [`41612b3`](https://github.com/anomalyco/opencode/commit/41612b3dbea7b4e30a5a83678d2526dbeae9b61a) Move auto-accept permissions to settings (#21308) — _@nexxeln_
- [`c2d2ca3`](https://github.com/anomalyco/opencode/commit/c2d2ca352252a922354c89bfbdb135cf1abfe1b6) style(app): redesign jump-to-bottom button per figma spec (#21313) — _@nexxeln_
- [`3a1ec27`](https://github.com/anomalyco/opencode/commit/3a1ec27feba5129623f2c916f6de31ddb43e535e) feat(app): show full names on composer attachment chips (#21306) — _@nexxeln_
- [`3c96bf8`](https://github.com/anomalyco/opencode/commit/3c96bf84688fa5e56977a1ff95a0b920f1749983) feat(opencode): Add PDF attachment Drag and Drop (#16926) — _@gitpush-gitpaid_
- [`3ea6413`](https://github.com/anomalyco/opencode/commit/3ea641340761818f1ed0394635681bd0e20cc3a5) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`885df8e`](https://github.com/anomalyco/opencode/commit/885df8eb54e268e7720242406228e2de54bf62c6) feat: add --dangerously-skip-permissions flag to opencode run (#21266) — _@rekram1-node_
- [`f4975ef`](https://github.com/anomalyco/opencode/commit/f4975ef32a38fc4b605db7d1a87cd85045b4d958) go: add mimo — _@fwang_
- [`37883a9`](https://github.com/anomalyco/opencode/commit/37883a9f3a8542ab93ccfa85808b51d9b54cfd9f) refactor(core): add full http proxy and change workspace adaptor interface (#21239) — _@jlongster_
- [`3c31d04`](https://github.com/anomalyco/opencode/commit/3c31d046669ca8df09798f690ef5c9cf17021ddd) chore: bump anthropic ai sdk pkg, delete patch (#21247) — _@rekram1-node_
- [`e64548f`](https://github.com/anomalyco/opencode/commit/e64548fb4df1a9e23b13e3ef7ff7a63c84dababb) chore: update nix node_modules hashes — _@opencode-agent[bot]_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
