# anomalyco/opencode — 2026-04-08

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-07T23:59:59.000Z → 2026-04-08T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v1.4.0 ships with breaking SDK changes to diff metadata

The headline today is the [v1.4.0 release](https://github.com/anomalyco/opencode/releases/tag/v1.4.0), which introduces **breaking changes to the SDK data model** for performance reasons. Anyone consuming the SDK should read the release notes before upgrading:

- Diff metadata on the `edit` and `patch` tools no longer carries `to`/`from` fields with full file contents — only a `patch` field with the unified diff. The same format now applies to all snapshot diffs in user messages and session diffs.
- `UserMessage.variant` has also changed shape (notes truncated in source, worth reviewing upstream).

Around the release, several diff-related fixes landed that are worth noting in context: `fix(app): patch tool diff rendering` (d98be39) and `fix(app): diff list normalization` (689b1a4) by adamdotdevin clean up rendering against the new schema, and `chore: update nix node_modules hashes` (65cde7f) accompanies the cut.

On the API/schema side, rekram1-node did notable cleanup: `/providers` list and shell endpoints are now correctly typed in both the SDK and OpenAPI schema (#21543), and `ModelsDev.Model` and `Config` model schemas were separated (#21561) — both reduce ambiguity for SDK consumers and likely pair with the v1.4.0 cut. A smaller fix hides invalid variants for BP (#21555).

Internals: kitlangton refactored the task tool to be built from agent services under Effect (#21017), a structural change in how tools are composed; the same author also simplified the TUI's console org display (#21339). Brendonovich fixed the sticky session diffs header in the UI (#21486).

Security/UX nit worth flagging: OpeOginni's #19923 skips URL password setting when the server and web app are same-origin, avoiding a redundant credential prompt.

Test coverage for `webfetch` was refreshed (#21398). No new issues or open PRs were filed in the window — activity was dominated by the release and cleanup commits landing alongside it.

## Releases

- **[v1.4.0](https://github.com/anomalyco/opencode/releases/tag/v1.4.0)** — v1.4.0 _by @opencode-agent[bot] at 2026-04-08T00:32:55Z_
  > ## Breaking Changes in SDK
  > 
  > Due to some performance issues we had to make a few breaking changes in our data model.
  > 
  > ### Diff metadata
  > The diffs contained in the metadata for the edit and patch tool will no longer contain a `to` and `from` field with full file contents. they will only contain a `patch` field with the unified diff
  > 
  > Additionally all snapshot diffs contained in user message and session diff will follow this format
  > 
  > ### `UserMessage.variant`
  > 
  > Before the user message had a `variant`…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`51535d8`](https://github.com/anomalyco/opencode/commit/51535d8ef3df797761fe39cde1e3340d4dd77eb7) fix(app): skip url password setting for same-origin server and web app (#19923) — _@OpeOginni_
- [`38f8714`](https://github.com/anomalyco/opencode/commit/38f8714c09d72993534ce33a998955e40e83c74f) refactor(effect): build task tool from agent services (#21017) — _@kitlangton_
- [`4961d72`](https://github.com/anomalyco/opencode/commit/4961d72c0fa23ee23bca9ea59b86a2b13bcf4427) tweak: separate ModelsDev.Model and Config model schemas (#21561) — _@rekram1-node_
- [`00cb883`](https://github.com/anomalyco/opencode/commit/00cb8839ae71a1aae0a9bac92a1f53c61ef70bf9) fix: dont show invalid variants for BP (#21555) — _@rekram1-node_
- [`689b1a4`](https://github.com/anomalyco/opencode/commit/689b1a4b3ab3c33aecc76b84c579b2efce444d6c) fix(app): diff list normalization — _@adamdotdevin_
- [`d98be39`](https://github.com/anomalyco/opencode/commit/d98be39344b8a39d16b62ce927be71a2c6a61a53) fix(app): patch tool diff rendering — _@adamdotdevin_
- [`039c601`](https://github.com/anomalyco/opencode/commit/039c60170dca165ad3323c3bb39b7e448fe1c7c4) fix: ensure that /providers list and shell endpoints are correctly typed in sdk and openapi schema (#21543) — _@rekram1-node_
- [`cd87d4f`](https://github.com/anomalyco/opencode/commit/cd87d4f9d368e0e90d4809c6a87c02ef62a40636) test: update webfetch test (#21398) — _@rekram1-node_
- [`988c989`](https://github.com/anomalyco/opencode/commit/988c9894f21cf6d9688cad37667b668139be8820) ui: fix sticky session diffs header (#21486) — _@Brendonovich_
- [`ae614d9`](https://github.com/anomalyco/opencode/commit/ae614d919f262c78d3d2feb099f2fe0f42d9cef5) fix(tui): simplify console org display (#21339) — _@kitlangton_
- [`65cde7f`](https://github.com/anomalyco/opencode/commit/65cde7f494e3069f9ee625c357dc17bb899d8961) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`98325dc`](https://github.com/anomalyco/opencode/commit/98325dcdc6a566de6b7ab42cc87af544bed3658d) release: v1.4.0 — _@opencode_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
