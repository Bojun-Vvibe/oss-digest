# anomalyco/opencode — 2026-03-17

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-16T23:59:59.000Z → 2026-03-17T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Most of the day's activity centers on **ongoing "zen" work by fwang** — a series of WIP commits adding error logging (`fbabc97`), missing model lab names (`350df0b`), deprecating Gemini 3 Pro (`dadddc9`), and two further WIP checkpoints (`6c04739`, `0772a95`). None of this has landed via a PR yet, so the shape of the feature is still in flux, but it's clearly the largest single thread and worth watching if you track model/provider plumbing.

On the debugging/observability side, kitlangton added prompt schema validation debug logs (`#17812`), which should make misconfigured prompt schemas easier to diagnose.

UI/UX changes worth a look:
- `#17971` (iamdavidhill) adds an empty state to the sidebar when there are no projects — a small but user-visible polish.
- `#17948` (nexxeln) fixes inline review comment submit and layout.
- `#17857` (Hona) avoids a prompt tooltip Switch flashing on startup.

Bug fixes are otherwise small and targeted: `#16779` (altendky) refines the TUI dialog escape handler to check for *selected text* rather than any selection, fixing an over-eager dismiss; and Brendonovich's `0afeaea` makes prompt sessions inherit their owner on creation — a quiet correctness fix in the app layer worth noting if you work on session/permissions code.

Test stability got attention from Hona with two deflake PRs: slash terminal toggle flow (`#17881`) and file/tool timing in opencode (`#17859`).

Docs/housekeeping round things out: `#17951` marks the `tools` config as deprecated (OpeOginni) — a heads-up for config consumers — and `#17861` adds a describe annotation to the snapshot config field. `#17901` is a chore from rekram1-node ("denounce ai spammer"). Two automated `chore: generate` commits and a Nix `node_modules` hash bump (`d7093ab`) round out the bot activity.

There were no releases, merged PRs listed separately, new open PRs, or notable issues in the window — only the commits above on `dev`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`fee3c19`](https://github.com/anomalyco/opencode/commit/fee3c196c51329dec4a93095fc01a85d9e7b5dbb) add prompt schema validation debug logs (#17812) — _@kitlangton_
- [`6c04739`](https://github.com/anomalyco/opencode/commit/6c047391bb4b9cf2bcb1d104a512ecf225e6d6fd) wip: zen — _@fwang_
- [`350df0b`](https://github.com/anomalyco/opencode/commit/350df0b26130bb4873234697e3a9d3bde3bfce44) zen: add missing model lab names — _@fwang_
- [`fbabc97`](https://github.com/anomalyco/opencode/commit/fbabc97c4c320b26f732d8e0b10aea0574c8920a) zen: error logging — _@fwang_
- [`7daea69`](https://github.com/anomalyco/opencode/commit/7daea69e13e5a17278fe244273fdeb141b0369d6) tweak(ui): add an empty state to the sidebar when no projects (#17971) — _@iamdavidhill_
- [`0772a95`](https://github.com/anomalyco/opencode/commit/0772a9591807d15c369c37edc01b9018bdc6e7d1) wip: zen — _@fwang_
- [`dadddc9`](https://github.com/anomalyco/opencode/commit/dadddc9c8c35ecb80b287ab729cfed5869b86d56) zen: deprecate gemini 3 pro — _@fwang_
- [`6708c3f`](https://github.com/anomalyco/opencode/commit/6708c3f6cf2a61d47d7c4b81d1bf6184c70b9b98) docs: mark tools config as deprecated (#17951) — _@OpeOginni_
- [`ba22976`](https://github.com/anomalyco/opencode/commit/ba2297656877f26c50d28977b0e7164868d6868c) fix: inline review comment submit and layout (#17948) — _@nexxeln_
- [`0afeaea`](https://github.com/anomalyco/opencode/commit/0afeaea21fdd85716f843b7688e0fdab712e52bb) app: inherit owner when creating prompt session — _@Brendonovich_
- [`b07b5a9`](https://github.com/anomalyco/opencode/commit/b07b5a9b7fa772971479100f70fd8316c9f320be) chore: generate — _@opencode-agent[bot]_
- [`dbbe931`](https://github.com/anomalyco/opencode/commit/dbbe931a18378215765706ef77750d1ca961d7d4) fix(app): avoid prompt tooltip Switch on startup (#17857) — _@Hona_
- [`e14e874`](https://github.com/anomalyco/opencode/commit/e14e874e513178ac056cec7be5bac4ff5fd842ef) chore: generate — _@opencode-agent[bot]_
- [`544315d`](https://github.com/anomalyco/opencode/commit/544315dff74beef8f854bb1e658e6f429ad7cfdc) docs: add describe annotation to snapshot config field (#17861) — _@altendky_
- [`f13da80`](https://github.com/anomalyco/opencode/commit/f13da808ffb98bc0e582e227f3cf8f74d090b7d8) chore: denounce ai spammer (#17901) — _@rekram1-node_
- [`e416e59`](https://github.com/anomalyco/opencode/commit/e416e59ea69f7600acbdb593ba68ac0fb1ee2633) test(app): deflake slash terminal toggle flow (#17881) — _@Hona_
- [`cb69501`](https://github.com/anomalyco/opencode/commit/cb69501098c603ccd7d3e3dbe6655d401c1d815c) test(opencode): deflake file and tool timing (#17859) — _@Hona_
- [`a64f604`](https://github.com/anomalyco/opencode/commit/a64f604d54264f640807473f153ed95d704dcedf) fix(tui): check for selected text instead of any selection in dialog escape handler (#16779) — _@altendky_
- [`d7093ab`](https://github.com/anomalyco/opencode/commit/d7093abf61853a94a53f979a879dea4822b83b0f) chore: update nix node_modules hashes — _@opencode-agent[bot]_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
