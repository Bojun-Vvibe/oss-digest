# anomalyco/opencode — 2026-03-29

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-28T23:59:59.000Z → 2026-03-29T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two patch releases shipped today. **v1.3.6** (#19758) is the more consequential: it fixes token-usage double-counting for Anthropic and Amazon Bedrock providers caused by the recent AI SDK v6 upgrade — anyone tracking session metrics or billing against those providers should upgrade. It also bundles a TUI fix so the variant dialog search actually filters the list (#19917).

Earlier in the day, **v1.3.5** rolled up two core fixes from rekram1-node: plugin hooks now properly handle async operations so plugins can await without errors (#19586, with regression coverage added in #19589 by Hona), and the GPT prompt was trimmed to be more minimal with file-reference annoyances cleaned up (#19585). If you maintain an opencode plugin, the async-hooks fix is worth verifying against your code.

A handful of smaller quality-of-life fixes also landed on `dev`:

- `OPENCODE_DISABLE_CLAUDE_CODE_PROMPT` is now respected for project-level `CLAUDE.md` (#19924) — relevant if you've been seeing the Claude Code prompt leak in despite the flag.
- Plugin installs now preserve JSONC comments in config (#19938).
- Theme colors are applied to dialog textarea placeholders (#19939).
- Docs updated to list the `question` tool under available permissions (#19922).

Notable in-progress work: fwang has a string of `wip: zen` commits (7e9b721, 1037c72, 3a4bfeb, plus an explicit "zen: ZDR policy" in a94ac5a) landing directly on `dev`, suggesting a new "zen" subsystem with a zero-data-retention policy is being scaffolded. Nothing user-facing yet, but worth watching if you care about data-handling guarantees.

CI housekeeping: stale `nix-hashes` runs are now cancelled (#19571), and an internal TODO tracker was removed (#19566). No new issues or external PRs opened in the window — activity was entirely maintainer-driven against `dev`.

## Releases

- **[v1.3.6](https://github.com/anomalyco/opencode/releases/tag/v1.3.6)** — v1.3.6 _by @opencode-agent[bot] at 2026-03-29T18:02:43Z_
  > # Unreleased Changes
  > 
  > ## TUI
  > 
  > - PR #19917: Fixed variant dialog search so typing now properly filters the list of variants
  > 
  > ## Desktop
  > 
  > ## Core
  > 
  > - PR #19758: Fixed token usage double-counting for Anthropic and Amazon Bedrock providers that caused inflated token counts in session metrics
- **[v1.3.5](https://github.com/anomalyco/opencode/releases/tag/v1.3.5)** — v1.3.5 _by @opencode-agent[bot] at 2026-03-29T03:43:15Z_
  > ## Core
  > - Fix plugin hooks to properly handle async operations
  > - Adjust GPT prompt to be more minimal and fix file reference annoyances


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`5d2dc88`](https://github.com/anomalyco/opencode/commit/5d2dc8888cc8e06d34c30ed3a1a9765cb76b0904) theme colors for dialog textarea placeholders (#19939) — _@kommander_
- [`0b1018f`](https://github.com/anomalyco/opencode/commit/0b1018f6dd0cde01ef3313112d2d988cc5080f08) plugins installs should preserve jsonc comments (#19938) — _@kommander_
- [`afb6abf`](https://github.com/anomalyco/opencode/commit/afb6abff73bdc1577f7388d8273e2eba69849e08) fix: ensure OPENCODE_DISABLE_CLAUDE_CODE_PROMPT is respected for project lvl CLAUDE.md (#19924) — _@rekram1-node_
- [`e7f94f9`](https://github.com/anomalyco/opencode/commit/e7f94f9b9a3bd8742330e4a7ba8573ac21042c01) release: v1.3.6 — _@opencode_
- [`72c77d0`](https://github.com/anomalyco/opencode/commit/72c77d0e7b488dd1c0c62287b56623915b469506) fix(session): fix token usage double-counting w/ anthropic & bedrock due to AI SDK v6 upgrade (#19758) — _@ualtinok_
- [`5c15755`](https://github.com/anomalyco/opencode/commit/5c15755a10fecf15630232c478302a766d295012) docs: add question tool to available permissions list (#19922) — _@ariane-emory_
- [`3a4bfeb`](https://github.com/anomalyco/opencode/commit/3a4bfeb5b52efcbc83e8e3ea8739244411dec562) wip: zen — _@fwang_
- [`1037c72`](https://github.com/anomalyco/opencode/commit/1037c72d99529aca668f97de89178e0d7cca692c) wip: zen — _@fwang_
- [`ba00e9a`](https://github.com/anomalyco/opencode/commit/ba00e9a9934dbf351083829bb82bc4e2ee138c2e) Fix variant dialog filtering (#19917) — _@kitlangton_
- [`963dad7`](https://github.com/anomalyco/opencode/commit/963dad75ef0b76bac08376e2cc3741e7f7d06f02) ci: fix — _@fwang_
- [`7e9b721`](https://github.com/anomalyco/opencode/commit/7e9b721e9718c5a2577838719e1c5a938d396fe2) wip: zen — _@fwang_
- [`a5b1dc0`](https://github.com/anomalyco/opencode/commit/a5b1dc081d589598168c0e0d9346a35aeb58548b) test: add regression coverage for sync plugin hooks (#19589) — _@Hona_
- [`0bc2f99`](https://github.com/anomalyco/opencode/commit/0bc2f99f2d314800071426de1e27c1d17c2eff85) release: v1.3.5 — _@opencode_
- [`55895d0`](https://github.com/anomalyco/opencode/commit/55895d0663671759161092adef463414ec98237c) core: fix plugin hooks to properly handle async operations ensuring plugins can execute async code without errors (#19586) — _@rekram1-node_
- [`72cb9df`](https://github.com/anomalyco/opencode/commit/72cb9dfa315c146f21366a0d313435ac35e60d0f) tweak: adjust gpt prompt to be more minimal, fix file reference annoyances (#19585) — _@rekram1-node_
- [`f0a9075`](https://github.com/anomalyco/opencode/commit/f0a9075fdf4d2c93ca3e1b27b953a871b03846ce) release: v1.3.4 — _@opencode_
- [`fee1e25`](https://github.com/anomalyco/opencode/commit/fee1e25ab4b81a15235de2d343df07aa239290c2) ci: cancel stale nix-hashes runs (#19571) — _@Hona_
- [`a94ac5a`](https://github.com/anomalyco/opencode/commit/a94ac5aa2cfc44534b2a2804b65b779974172195) zen: ZDR policy — _@fwang_
- [`62ac45a`](https://github.com/anomalyco/opencode/commit/62ac45a9c93e4e2eaeca48289c3a895fa7db251b) wip: zen — _@fwang_
- [`f7c2ef8`](https://github.com/anomalyco/opencode/commit/f7c2ef876f3ba261380ae37bac7ad5805b61d80b) wip: zen — _@fwang_
- [`6639f92`](https://github.com/anomalyco/opencode/commit/6639f9273967fd5a9929a8dc978c13652bcf2193) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`36aeb32`](https://github.com/anomalyco/opencode/commit/36aeb321595faef546cc05d2da3c6e6f2b854a98) ignore: kill todo (#19566) — _@rekram1-node_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
