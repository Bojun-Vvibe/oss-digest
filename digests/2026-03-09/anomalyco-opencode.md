# anomalyco/opencode — 2026-03-09

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-08T23:59:59.000Z → 2026-03-09T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two releases shipped today — **v1.2.23** (`2712244`) and **v1.2.24** (`c6262f9`) — capping a heavy day of TUI/app fixes and an ongoing push to de-Bun the core runtime.

The headline structural change is a **refactor away from Bun-specific APIs in core flows** (#16286, `2f2856e`), with follow-ups replacing `bun semver` with the npm `semver` package (`37ae0a4`) and switching `pathToFileURL` imports from `bun` to the standard `url` module (`831eb68`). Pair this with `thdxr`'s server refactor extracting a `Server.createApp` initializer and exposing `Server.Default()` for internal access (`89d6f60`) — together these signal preparation for running opencode outside a Bun-only runtime.

Workspaces continues to be the other major theme. Initial **TUI workspace support** landed (#16230, `366b8a8`), but core workspace routing was immediately **gated behind an `OPENCODE_EXPERIMENTAL_WORKSPACES` flag** (#16775, `86cef16`) — worth reading if you're tracking that feature's stability. A Windows-specific fix sanitizes workspace store filenames (#16703).

Notable model/provider additions: GitLab provider now sends the `context-1m-2025-08-07` beta header to **enable the 1M context window** (#16153), and Copilot **gpt-5.4 xhigh** support was added (#16294).

A flurry of app/TUI fixes worth scanning if you hit related bugs:
- terminal state corruption (`7945329`) and scroll jitter/loop (`b749fa9`)
- toast dismissal when permissions prompt (#16758), session-title spinner (#16764), session creation error handling (#16767)
- waiting for model store before auto-submitting `--prompt` (#7476)
- missing auth headers in `run --attach` (#16097)
- multiple jdtls LSPs eating memory in Java monorepos (#12123)

One revert to flag: the "STUPID SEXY TIMELINE" feature (#16420) was rolled back via #16745. Also a quiet but interesting core change — agent access is now restricted from migration files to **prevent accidental edits** (`8a51cbd`). The `oc-1` theme was removed (`6388cba`); a new color-palette generator landed (#16232).

No issues or PRs surfaced in the window data — all activity is via direct commits to `dev`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`89d6f60`](https://github.com/anomalyco/opencode/commit/89d6f60d254028834ba340958d373c0f3199f631) refactor(server): extract createApp function for server initialization — _@thdxr_
- [`ee18c99`](https://github.com/anomalyco/opencode/commit/ee18c9976e00ebf0162fe1dcc47b209e0507b3e5) chore(app): dev stats — _@adamdotdevin_
- [`7945329`](https://github.com/anomalyco/opencode/commit/794532928f76c197181bc80944e8be1f6e5eda9a) fix(app): terminal state corruption — _@adamdotdevin_
- [`7b773c6`](https://github.com/anomalyco/opencode/commit/7b773c65ecc5b9e4796aa320723645d6e7431474) chore: cleanup — _@adamdotdevin_
- [`e53aa79`](https://github.com/anomalyco/opencode/commit/e53aa79dc6836c0d04eecf67f3c08f7b41a3ebf7) chore: cleanup — _@adamdotdevin_
- [`d9a9724`](https://github.com/anomalyco/opencode/commit/d9a97249c0a217999120d6f032e636ebd87d9a59) chore: generate — _@opencode-agent[bot]_
- [`86cef16`](https://github.com/anomalyco/opencode/commit/86cef169404cd52a57c2ce0cec344b0aca5401c3) fix(core): put workspace routing behind OPENCODE_EXPERIMENTAL_WORKSPACES flag (#16775) — _@jlongster_
- [`ce38997`](https://github.com/anomalyco/opencode/commit/ce38997c76c3ebdd0d6b10ec38cb0aa2a57532dd) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`7e10c72`](https://github.com/anomalyco/opencode/commit/7e10c728d4d3c137b44b88fc42e0d192df623f06) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`3627c67`](https://github.com/anomalyco/opencode/commit/3627c67cf25fdfa4e36d2b49b83e3f93c069c286) docs: update opencode-morph-fast-apply to opencode-morph-plugin in ecosystem (#16634) — _@bhaktatejas922_
- [`2518fd8`](https://github.com/anomalyco/opencode/commit/2518fd81f6ec638b3b0a896466d0eb29a1d6cd70) chore: generate — _@opencode-agent[bot]_
- [`39ef7fc`](https://github.com/anomalyco/opencode/commit/39ef7fc90e9c77dcf50d8f79efc492a2a3ae12ec) Merge remote-tracking branch 'origin/dev' into dev — _@thdxr_
- [`37ae0a4`](https://github.com/anomalyco/opencode/commit/37ae0a405136a037b5df63d5d19c133de5d5ad95) refactor: replace bun semver with npm semver package — _@thdxr_
- [`b312928`](https://github.com/anomalyco/opencode/commit/b312928e9f9149aaacf1cbb9af96399c1672c334) fix(tui): wait for model store before auto-submitting --prompt (#7476) — _@altendky_
- [`2f2856e`](https://github.com/anomalyco/opencode/commit/2f2856e20ad3433e6d82ff8d2e51f4ff14f9f098) refactor(opencode): replace Bun shell in core flows (#16286) — _@thdxr_
- [`831eb68`](https://github.com/anomalyco/opencode/commit/831eb6881b98e74a470b04ae292b95040d752ef3) refactor: change pathToFileURL imports from bun to url module — _@thdxr_
- [`f20ee2f`](https://github.com/anomalyco/opencode/commit/f20ee2fad2b7e67568e08c51ab476aee3a31d089) fix(tui): handle error when creating a session (#16767) — _@jlongster_
- [`8b9710e`](https://github.com/anomalyco/opencode/commit/8b9710e56c041cae4bdc0b865dc4d13bc04edebf) fix: Multiple jdtls LSPs eating memory in java monorepos (#12123) — _@stevoland_
- [`c6262f9`](https://github.com/anomalyco/opencode/commit/c6262f9d4002d86a1f1795c306aa329d45361d12) release: v1.2.24 — _@opencode_
- [`b749fa9`](https://github.com/anomalyco/opencode/commit/b749fa90f23d187d5428de1a2d321cc6497b6667) fix(app): scroll jitter/loop — _@adamdotdevin_
- [`8a51cbd`](https://github.com/anomalyco/opencode/commit/8a51cbd25381768be438696d8209eaaef6a6d41e) core: prevent accidental edits to migration files by restricting agent access — _@thdxr_
- [`399b8f0`](https://github.com/anomalyco/opencode/commit/399b8f0701f04ded3114e81cd74e6024bef1a50d) fix(app): session title turn spinner (#16764) — _@iamdavidhill_
- [`3742e42`](https://github.com/anomalyco/opencode/commit/3742e42fdf6e30573153c698572cbdd291df6e6d) fix(app): dismiss toast notifications when questions or permissions a… (#16758) — _@neriousy_
- [`0388ec6`](https://github.com/anomalyco/opencode/commit/0388ec686249b6a6a22b7156d0cc87adfaf423bf) fix(storybook): add ci build workflow (#16760) — _@ShriKaranHanda_
- [`366b8a8`](https://github.com/anomalyco/opencode/commit/366b8a8034ef7f613e8b93cd872f13c71b836721) feat(tui): add initial support for workspaces into the tui (#16230) — _@jlongster_
- [`ef9bc4e`](https://github.com/anomalyco/opencode/commit/ef9bc4ec9ee5101b7f6e584a80600136007ac7a7) feat(gitlab): send context-1m-2025-08-07 beta header to enable 1M context window (#16153) — _@Krule_
- [`5838b58`](https://github.com/anomalyco/opencode/commit/5838b58913ec5e6c694c2f8f9df8009f49bf4018) add copilot gpt-5.4 xhigh support (#16294) — _@MrMushrooooom_
- [`2712244`](https://github.com/anomalyco/opencode/commit/2712244ad3bb6e4bba20952f46a3493e0573dee2) release: v1.2.23 — _@opencode_
- [`6388cba`](https://github.com/anomalyco/opencode/commit/6388cbaf9261a71ec8e5e90d09ccb01450201dff) fix(app): remove oc-1 theme — _@adamdotdevin_
- [`5cc61e1`](https://github.com/anomalyco/opencode/commit/5cc61e1b536c047a9ff2b348d99711807c6c270f) tui: fix sidebar workspace container sizing by adding box-border class to prevent content overflow issues — _@iamdavidhill_
- [`0243be8`](https://github.com/anomalyco/opencode/commit/0243be86a7b548fd6daf421d39bd3c36ca76246b) fix(app): don't animate review panel in/out — _@adamdotdevin_
- [`9154cd6`](https://github.com/anomalyco/opencode/commit/9154cd64e7256cadc50cd10334eee8f193a31527) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`c71d1bd`](https://github.com/anomalyco/opencode/commit/c71d1bde5e8dcc8be49c15697ad2e5d0f2607e5e) revert(app): "STUPID SEXY TIMELINE (#16420)" (#16745) — _@adamdotdevin_
- [`f27ef59`](https://github.com/anomalyco/opencode/commit/f27ef595f65aa719be3f8d08665d683e95083ed3) fix(app): sanitize workspace store filenames on Windows (#16703) — _@Hona_
- [`3432882`](https://github.com/anomalyco/opencode/commit/34328828ae9d28afe28202d8122a6983a6b2dc0f) fix(app): fix issue with scroll jumping when pressing escape in comment text area (#15374) — _@yihuikhuu_
- [`18fb19d`](https://github.com/anomalyco/opencode/commit/18fb19da3b5aad7e05af9ebdfb881704319853a7) fix(opencode): pass missing auth headers in `run --attach` (#16097) — _@ericclemmons_
- [`849e1ac`](https://github.com/anomalyco/opencode/commit/849e1ac54378ec3b6452ca589266b519fa17ba23) docs(i18n): sync locale docs from english changes — _@opencode-agent[bot]_
- [`656a8d8`](https://github.com/anomalyco/opencode/commit/656a8d8f55ad02fd7f849f98dcc4bf09683649b0) docs: add session_child_first keybinding to documentation (#16631) — _@ariane-emory_
- [`b976f33`](https://github.com/anomalyco/opencode/commit/b976f339e857be3fae20f179992aa82fbea24f08) feat(app): generate color palettes (#16232) — _@adamdotdevin_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
