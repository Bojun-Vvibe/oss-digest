# anomalyco/opencode — 2026-04-20

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-19T23:59:59.000Z → 2026-04-20T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headlining the day is the **v1.14.19 release**, which ships a critical fix for compiled binaries that were failing on startup due to a circular `MessageV2.Assistant.shape` schema dependency (#23495), plus a fix for parallel edits to the same file silently overwriting each other (#23483). Both are the kind of correctness bugs worth upgrading for immediately.

On the **provider/routing** front, NVIDIA was added as a built-in popular provider with docs and attribution headers (#22927), and fwang landed multiple "zen: tpm based routing" commits (`ae7a351`, `ad65af2`) — no PR attached, so worth diffing directly if you care about how requests are dispatched across providers. Docs also picked up Kimi K2.6 entries for Go and Zen (#23558).

**Windows / install** got attention: managed installs are fixed and ripgrep bumped to 15.1.0 for ARM64 support (#23477), and an arborist patch works around a Bun bug breaking installs (#23460).

**Config breaking-ish change**: the compaction setting `tail_tokens` was renamed to `preserve_recent_tokens` (#23491) — anyone with custom config files needs to update keys.

**Core / app** changes worth scanning:
- New debug workspace server (#23590) from jlongster — likely useful for plugin/integration developers.
- Plugin API: `WorkspaceAdaptor.create` now takes an `env` parameter (#23235), a typed-API change for plugin authors.
- App shell: better loading UX (#23489) and a refactor moving `QueryProvider` into `AppInterface` (#23484), both from Brendonovich.

**Smaller UI fixes**: assistant message rendering now uses `parentID` matching instead of a positional scan (#23093), fixing ordering bugs in threaded conversations; sidebar avatar falls back to `icon.url` (#18747).

CI note: thdxr temporarily skipped beta smoke fixes (`e4be557`) — keep an eye out for the follow-up. No new issues or open PRs were filed in this 24h window; activity was entirely merges and the release.

## Releases

- **[v1.14.19](https://github.com/anomalyco/opencode/releases/tag/v1.14.19)** — v1.14.19 _by @opencode-agent[bot] at 2026-04-20T07:21:48Z_
  > ## Core
  > 
  > - Prevented compiled binaries from failing on startup because of a circular session schema dependency.
  > - Renamed the compaction setting to `preserve_recent_tokens` for the budget that keeps recent turns verbatim.
  > - Preserved concurrent edits to the same file instead of letting parallel edits overwrite each other.
  > - Fixed managed installs on Windows and added bundled ripgrep support for Windows ARM64.
  > - Added NVIDIA as a built-in provider option, including connection docs and required at…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`3e8abac`](https://github.com/anomalyco/opencode/commit/3e8abac62556854ba65792000a7d878e2df0623b) sync — _@fwang_
- [`65e99fc`](https://github.com/anomalyco/opencode/commit/65e99fcc2e26d3f1f32f4f36938245d5f785d415) chore: generate — _@opencode-agent[bot]_
- [`bad025e`](https://github.com/anomalyco/opencode/commit/bad025eba923d97cd2f0a871080fdbca1ebb584b) sync — _@fwang_
- [`06dde3a`](https://github.com/anomalyco/opencode/commit/06dde3afd3cc2a70545f42554d3e208ac98dd504) chore: generate — _@opencode-agent[bot]_
- [`ad65af2`](https://github.com/anomalyco/opencode/commit/ad65af28e7668c89f392c3779bf81634c0170894) zen: tpm routing — _@fwang_
- [`bd1bdc4`](https://github.com/anomalyco/opencode/commit/bd1bdc4f0421e4f676bb92ea40e4296627fb00d4) chore: generate — _@opencode-agent[bot]_
- [`debcff2`](https://github.com/anomalyco/opencode/commit/debcff2b6b10bd191d68a427f19bcd3d0d6eaf59) feat(core): add debug workspace server (#23590) — _@jlongster_
- [`8b33237`](https://github.com/anomalyco/opencode/commit/8b3323708d14811fa42d5e7626470e0ec041325e) chore: generate — _@opencode-agent[bot]_
- [`3406f18`](https://github.com/anomalyco/opencode/commit/3406f18746f0655281f4304b2bb938273ef0d742) fix(plugin): add env parameter to WorkspaceAdaptor.create type (#23235) — _@jamesmurdza_
- [`7e576ee`](https://github.com/anomalyco/opencode/commit/7e576eea41cb45c7deecdc20f0a962f01a38c8e8) chore: generate — _@opencode-agent[bot]_
- [`d68ebee`](https://github.com/anomalyco/opencode/commit/d68ebee5557d434ff543d60b1a6c1302ae700682) docs(go): add Kimi K2.6 to Go and Zen content (#23558) — _@MrMushrooooom_
- [`ae7a351`](https://github.com/anomalyco/opencode/commit/ae7a3518f789caf9d1f39dfb7848fa44005e36a0) zen: tpm based routing — _@fwang_
- [`16caaa2`](https://github.com/anomalyco/opencode/commit/16caaa222955ae10406d054f2fa84cd78985c09f) fix(app): fall back to icon.url in sidebar avatar (#18747) — _@ysm-dev_
- [`91468fe`](https://github.com/anomalyco/opencode/commit/91468fe4556eeb891f586126243272cf217915f5) fix(ui): use parentID matching instead of positional scan for assistant messages (#23093) — _@heimoshuiyu_
- [`7c6948c`](https://github.com/anomalyco/opencode/commit/7c6948cf6f90b52a74ad56ac7a7eb16863e65f19) sync release versions for v1.14.19 — _@opencode_
- [`7a568a4`](https://github.com/anomalyco/opencode/commit/7a568a457fd7f1e496e11dc377a0c3edfaa17107) fix: defer MessageV2.Assistant.shape access to break circular dep in compiled binary (#23495) — _@Hona_
- [`3ddc69e`](https://github.com/anomalyco/opencode/commit/3ddc69ec2bd7c0f7108160754d4cd472b37e9d24) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`f3d5a71`](https://github.com/anomalyco/opencode/commit/f3d5a71620d0ffe399490cdbb0bb113524debdf8) chore: generate — _@opencode-agent[bot]_
- [`c6c56ac`](https://github.com/anomalyco/opencode/commit/c6c56ac2cfc3683d963ef33be18809165b25ca68) tweak: rename tail_tokens -> preserve_recent_tokens (#23491) — _@rekram1-node_
- [`e539efe`](https://github.com/anomalyco/opencode/commit/e539efe2b9a627927ffcb1420098a69038d042e2) fix: patch arborist to get around bun bug (#23460) — _@rekram1-node_
- [`687b758`](https://github.com/anomalyco/opencode/commit/687b7588820df02dfe7397a399f213f394aa6b09) app: better loading (#23489) — _@Brendonovich_
- [`84e322b`](https://github.com/anomalyco/opencode/commit/84e322b0fdb178ad420f3f6507a22c0da590f524) chore: generate — _@opencode-agent[bot]_
- [`8bc4f91`](https://github.com/anomalyco/opencode/commit/8bc4f91fd9952612bacf1297ca84424937ce9399) fix: parallel edits sometimes would override each other (#23483) — _@rekram1-node_
- [`93e633f`](https://github.com/anomalyco/opencode/commit/93e633fb7d57f5fcc11a00c76286aeed274d5cca) refactor(app): move QueryProvider to AppInterface (#23484) — _@Brendonovich_
- [`cbe702c`](https://github.com/anomalyco/opencode/commit/cbe702c09d13b7d2b6f0e282dd7168dd5e865cba) chore: generate — _@opencode-agent[bot]_
- [`a7a85c9`](https://github.com/anomalyco/opencode/commit/a7a85c94b8705d038fdd5ee35320af453670a47d) fix(core): fix Windows managed install and bump ripgrep to 15.1.0 for ARM64 support (#23477) — _@Hona_
- [`6e01786`](https://github.com/anomalyco/opencode/commit/6e0178655b94813762534b7642ba5174b45f022e) feat(provider): add NVIDIA to popular providers, docs, and attribution headers (#22927) — _@anniesurla_
- [`e4be557`](https://github.com/anomalyco/opencode/commit/e4be55792861504f23d055a37767357ee40b1d83) ci: skip beta smoke fixes for now — _@thdxr_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
