# anomalyco/opencode — 2026-02-26

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-02-25T23:59:59.000Z → 2026-02-26T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Headline today is the **v1.2.15 release** (`799b262`), which ships alongside a notable Windows stability fix that resolves "most segfaults on Windows with Bun v1.3.10 stable" (#15181) — likely the most consequential change for Windows users in weeks.

On the feature side, the desktop/app got a visible refresh: a **new tabs styling** (#15284) plus a companion **auto-accept all permissions mode** (`7e6a007`), both from adamdotdevin. David Hill also landed `opencode go provider list` (#15203), extending the Go CLI's provider discovery surface. A Storybook setup was added under `chore` (#15285), suggesting upcoming UI component work.

Bug fixes dominate the rest of the day and cluster around two areas:

- **Desktop sidecar reliability**: restoring shell PATH env (#15211) and removing the interactive shell flag that was hanging sidecar spawn on macOS (#15136). Combined with the powershell open fix (#15112) and terminal issue fix (`8c484a0`), this is a coordinated push to stabilize cross-platform process launching.
- **TUI/UI polish**: child-session permissions and questions now propagate correctly (#15105) — worth a look if you've hit stuck prompts in nested sessions; review layout simplified (#14953); filename/diff-count overlap fixed in session changes (#14773); workspace paths no longer truncated in assistant text (#14584); middle-click tab close works in the scrollable tab bar (#15081); plus session-tab alignment in compact view (`c95febb`) and a filetree scroll border (`7a74be3`).

A `refactor(desktop)` adds suppress-hover behavior to project tiles (#15214), and zh_CN docs were synced with English (#15228).

Two `wip: zen` commits from fwang (`96ca0de`, `c4ea11f`) landed directly on the branch with no description — worth watching as a likely upcoming feature track, but nothing actionable yet. No PRs opened/merged metadata, no issues, and no releases other than v1.2.15 were captured in the window.

**Read first:** #15181 (Windows segfaults), #15105 (child-session permissions), #15284 + `7e6a007` (new tabs + auto-accept).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`7a74be3`](https://github.com/anomalyco/opencode/commit/7a74be3b478bf32aa844d823561c71799aa2b8d3) tweak(ui): add border to filetree on scroll — _@iamdavidhill_
- [`c95febb`](https://github.com/anomalyco/opencode/commit/c95febb1d5c0a4533810ae94e61bd84c4ac345bc) tui: fix session tab alignment in compact view to prevent vertical overflow — _@iamdavidhill_
- [`9736fce`](https://github.com/anomalyco/opencode/commit/9736fce8fcede6947bc05736b4ff383404e389a2) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`05d77b7`](https://github.com/anomalyco/opencode/commit/05d77b7d473d8828671ede90fec1f4da75106738) chore: storybook (#15285) — _@adamdotdevin_
- [`8c484a0`](https://github.com/anomalyco/opencode/commit/8c484a05b894be0a88c130badb2353d02d1deb23) fix(app): terminal issues — _@adamdotdevin_
- [`a0b3bbf`](https://github.com/anomalyco/opencode/commit/a0b3bbffd5459b81fcb59dbe30f0fd62cc8ec414) fix(ui): prevent filename and diff count overlap in session changes (#14773) — _@nexxeln_
- [`270d084`](https://github.com/anomalyco/opencode/commit/270d084cb114cc16ef15cd6f5bbe10bb768d65de) fix(ui): avoid truncating workspace paths in assistant text (#14584) — _@nexxeln_
- [`9312867`](https://github.com/anomalyco/opencode/commit/9312867565e1de0f51a7ea8d43c5957afa4c90e5) feat(app): new tabs styling (#15284) — _@adamdotdevin_
- [`7e6a007`](https://github.com/anomalyco/opencode/commit/7e6a007c351fa86a3a38973489b47d79ea32c877) feat(app): auto-accept all permissions mode — _@adamdotdevin_
- [`5745ee8`](https://github.com/anomalyco/opencode/commit/5745ee87ba9847e32c07fd364c52a6fad23bb55e) refactor(desktop): enhance project tile interaction with suppress hover functionality (#15214) — _@OpeOginni_
- [`08f056d`](https://github.com/anomalyco/opencode/commit/08f056d412e424eb48842dc99d0955be4e9874ae) docs: Sync zh_CN docs with English Version (#15228) — _@niushuai1991_
- [`96ca0de`](https://github.com/anomalyco/opencode/commit/96ca0de3bc1c22d8ad3ce91b7f068facdaf4851d) wip: zen — _@fwang_
- [`b4d0090`](https://github.com/anomalyco/opencode/commit/b4d0090e005e7355b3e8f2594c0ad8538fffe75b) chore: fix flaky test — _@adamdotdevin_
- [`05ac0a7`](https://github.com/anomalyco/opencode/commit/05ac0a73e15d7a6d230e0a76230104bbe3f5df22) fix(app): simplify review layout (#14953) — _@adamdotdevin_
- [`7453e78`](https://github.com/anomalyco/opencode/commit/7453e78b355da70f731a06853c1027bccb8a3ed3) feat: opencode go provider list (#15203) — _@iamdavidhill_
- [`bb8a171`](https://github.com/anomalyco/opencode/commit/bb8a1718a63c2caae9e40c85dd4bdfe34f8012d7) fix(desktop): restore shell path env for desktop sidecar (#15211) — _@nexxeln_
- [`6b02165`](https://github.com/anomalyco/opencode/commit/6b021658ad514255c7398983b088c1636caaa5e4) fix(app): open in powershell (#15112) — _@neriousy_
- [`799b262`](https://github.com/anomalyco/opencode/commit/799b2623cbb1c0f19e045d87c2c8593e83678bc0) release: v1.2.15 — _@opencode_
- [`fce811b`](https://github.com/anomalyco/opencode/commit/fce811b52f335eb28dc43b49a96f42b2ada751f5) fix: most segfaults on windows with Bun v1.3.10 stable (#15181) — _@Hona_
- [`aae75b3`](https://github.com/anomalyco/opencode/commit/aae75b3cfb10cdff965fb434c487980b152efdec) fix(app): middle-click tab close in scrollable tab bar (#15081) — _@choephix_
- [`392a6d9`](https://github.com/anomalyco/opencode/commit/392a6d993f5cbb233bc0eeab297919cb21099f2c) fix(desktop): remove interactive shell flag from sidecar spawn to prevent hang on macOS (#15136) — _@kilhyeonjun_
- [`c4ea11f`](https://github.com/anomalyco/opencode/commit/c4ea11fef3dc3ac6bd2e3c55d1c8179457eace5d) wip: zen — _@fwang_
- [`b8337cd`](https://github.com/anomalyco/opencode/commit/b8337cddc4269ba6e72f74c1e1f39aae41f56af3) fix(app): permissions and questions from child sessions (#15105) — _@adamdotdevin_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
