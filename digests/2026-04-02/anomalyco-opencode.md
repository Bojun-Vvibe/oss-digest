# anomalyco/opencode — 2026-04-02

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-01T23:59:59.000Z → 2026-04-02T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## Headlines

A heavy commit-only day on `dev` (no PRs/issues/releases surfaced in the window): the standout is a long-awaited fix to **prevent the agent loop from stopping after tool calls with OpenAI-compatible providers** (#14973), which should unblock users on third-party OpenAI-API endpoints. Also notable: **macOS managed preferences support for enterprise MDM deployments** (#19178) lands, opening the door to org-wide rollouts.

## Agent / Provider work

- ACP gains `messageID` and emits `user_message_chunk` on prompt/command (#18625), and an optional `messageID` is added to `ShellInput` (#20657) — coordinated groundwork for richer client wiring.
- GitHub Copilot model fetch now has an abort-signal timeout to avoid infinite blocking (#20705).
- `models.dev` and config model definitions are split to reduce coupling (#20605); Venice AI is added as a dependency (#20570); MiMo-V2 models are added to the Go UI/docs (#20709, plus `go: add mimo` 92e820f).
- Cloudflare providers now send User-Agent headers (#20538). Console tokens refresh before expiry (#20558) and a token-freshness helper is shared (#20591).

## TUI / App / Web

- TUI: dialog-aware prompt cursor (#20753), prompt traits/refs/plugin slots (#20741), and a first-time share consent dialog (#20525). CLI restores the colored help logo (#20592) then reverts to a simple one (#20585).
- Solid web stack cleanup: unified auto-scroll ref handling (#20716), adoption of `solid-primitives/event-listener` (#20619) and `resize-observer` (#20613), plus broader reactivity simplification (#20497). Electron gets a basic inspect-element context menu (#20723).
- Session compaction agent now replies in the conversation's language (#20581). Model display name shown in message footer/transcript (#20539).

## Refactors, build, tests

- Effect migration continues: `instruction` moved to the Effect service pattern (#20542), session todo "effectified" (#20595), with status docs refreshed (#20665).
- Formatter interface now returns a command from `enabled()` (#20703); biome `format` replaces `check` to stop import removal (#20545). Build fix replaces `require()` with dynamic `import()` in cross-spawn-spawner (#20580); `OPENCODE_CHANNEL` is set during node build (#20616).
- E2E hardening: real LLM calls blocked in prompt tests (#20579), JUnit artifacts emitted for Playwright (#20732), golden path added (#20593), and helpers tidied (#20730, #20729).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`6e1400f`](https://github.com/anomalyco/opencode/commit/6e1400fc455f71203a5c15ad64b8c0bb73211290) dialog aware prompt cursor (#20753) — _@kommander_
- [`bf26c08`](https://github.com/anomalyco/opencode/commit/bf26c08d5197deee510813561445fa364ffc4a9d) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`29f7dc0`](https://github.com/anomalyco/opencode/commit/29f7dc073bc23fddcb517569d8a61ca8bb5e2c1c) Adds TUI prompt traits, refs, and plugin slots (#20741) — _@kommander_
- [`5e1b513`](https://github.com/anomalyco/opencode/commit/5e1b5135276294e3740d4d0ca560b53b5563f582) refactor(todo): effectify session todo (#20595) — _@kitlangton_
- [`f549fde`](https://github.com/anomalyco/opencode/commit/f549fde874749d6c5c298e040064c4dde0b50546) test(app): emit junit artifacts for playwright (#20732) — _@kitlangton_
- [`6dfb304`](https://github.com/anomalyco/opencode/commit/6dfb30448c82725b82b5c88f9ec4390c35c52a7f) refactor(app): unexport internal e2e helpers (#20730) — _@kitlangton_
- [`b5b5f7e`](https://github.com/anomalyco/opencode/commit/b5b5f7e0190cdd5272b6d2aeb3d4589a822675a6) test(opencode): remove temporary e2e url repro (#20729) — _@kitlangton_
- [`ae7b49b`](https://github.com/anomalyco/opencode/commit/ae7b49b034612b0c7eb3621c983f643d071ce58e) docs(effect): refresh migration status (#20665) — _@kitlangton_
- [`f151c66`](https://github.com/anomalyco/opencode/commit/f151c660b193386f07acb76ff46a2402a4c3a3e4) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`c3ef69c`](https://github.com/anomalyco/opencode/commit/c3ef69c8664ab84464d720f75eb9bf35289c1847) test(app): add a golden path for mocked e2e prompts (#20593) — _@kitlangton_
- [`3638911`](https://github.com/anomalyco/opencode/commit/363891126c9b2a909db0e724eb6377bd3d12b38b) chore: generate — _@opencode-agent[bot]_
- [`1989704`](https://github.com/anomalyco/opencode/commit/1989704abe453dbec3b0981ac00dacd3459e271f) feat(acp): Add messageID and emit user_message_chunk on prompt/command (#18625) — _@noamzbr_
- [`f0a9ebf`](https://github.com/anomalyco/opencode/commit/f0a9ebfed40fdc763d3c6a524aa052a7a70b3d77) chore: generate — _@opencode-agent[bot]_
- [`7e32f80`](https://github.com/anomalyco/opencode/commit/7e32f80d82c63f0ea25c0588a333690792737680) feat: add macOS managed preferences support for enterprise MDM deployments (#19178) — _@lennyvaknine43_
- [`966d9cf`](https://github.com/anomalyco/opencode/commit/966d9cfa414e20d26bac0b8b75021c5d6a321496) electron: add basic context menu for inspect element (#20723) — _@Brendonovich_
- [`92e820f`](https://github.com/anomalyco/opencode/commit/92e820fdc8c04579d8e8f9ca3c59b1bf62341e34) go: add mimo — _@fwang_
- [`c4b3971`](https://github.com/anomalyco/opencode/commit/c4b3971548f050a56827b3dada728c05e38e349a) app: unify auto scroll ref handling (#20716) — _@Brendonovich_
- [`3faabda`](https://github.com/anomalyco/opencode/commit/3faabdadb7e23e5f816d0c27d313446e4793b330) refactor(format): update formatter interface to return command from enabled() (#20703) — _@thdxr_
- [`93a1393`](https://github.com/anomalyco/opencode/commit/93a139315c48d4ad526981364e033abf9998b67c) Add MiMo-V2 models to Go UI and docs (#20709) — _@MrMushrooooom_
- [`10ca1ac`](https://github.com/anomalyco/opencode/commit/10ca1ace6be73ee79d932697df3d6c8e2af78260) tweak: add abort signal timeout to the github copilot model fetch to prevent infinite blocking (#20705) — _@rekram1-node_
- [`c3dfd08`](https://github.com/anomalyco/opencode/commit/c3dfd08ba8c0378398b598b676c4664b98dd28de) fix(format): use biome format instead of check to prevent import removal (#20545) — _@BYK_
- [`510a1e8`](https://github.com/anomalyco/opencode/commit/510a1e81403c2438498a5d48b61ce4aa998dfcc9) ignore: fix typecheck in dev (#20702) — _@rekram1-node_
- [`159ede2`](https://github.com/anomalyco/opencode/commit/159ede2d5c68ce0e2c2662cc1f89cc9d01a0299e) chore: generate — _@opencode-agent[bot]_
- [`291a857`](https://github.com/anomalyco/opencode/commit/291a857fb841725e1e34640f8c52b415092943b9) feat: add optional messageID to ShellInput (#20657) — _@noamzbr_
- [`57a5236`](https://github.com/anomalyco/opencode/commit/57a5236e71f983fbeb06834fd4ec7990aa260975) chore: generate — _@opencode-agent[bot]_
- [`23c8656`](https://github.com/anomalyco/opencode/commit/23c865608018a882a99149b7e979f4f6fbcc0600) refactor: split up models.dev and config model definitions to prevent coupling (#20605) — _@rekram1-node_
- [`ec3ae17`](https://github.com/anomalyco/opencode/commit/ec3ae17e4d6abb9685b1d558d5e51416c9bfad60) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`69d047a`](https://github.com/anomalyco/opencode/commit/69d047ae7dd84d4c4de41e09b1ecee88e3fdc3d3) cleanup event listeners with solid-primitives/event-listener (#20619) — _@Brendonovich_
- [`327f625`](https://github.com/anomalyco/opencode/commit/327f62526a7f60c1c67ae017d1b105466bb730e9) use solid-primitives/resize-observer across web code (#20613) — _@Brendonovich_
- [`d540d36`](https://github.com/anomalyco/opencode/commit/d540d363a76909c9c1b1d4e4113a1b8fea62c5a8) refactor: simplify solid reactivity across app and web (#20497) — _@nexxeln_
- [`db93891`](https://github.com/anomalyco/opencode/commit/db938913736600ce3ad68d89a9a3532c4cd517f5) zen: friendly trial ended message — _@fwang_
- [`0f48899`](https://github.com/anomalyco/opencode/commit/0f488996b30780f6fe9ecd08d2b3701024b5eea3) fix(node): set OPENCODE_CHANNEL during build (#20616) — _@Brendonovich_
- [`a6f524c`](https://github.com/anomalyco/opencode/commit/a6f524ca08548e39de15b0d61ae9ef3db1e56b0e) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`811c7e2`](https://github.com/anomalyco/opencode/commit/811c7e2494d307d9fcff8d70262c9de5e1d0eeb2) cli: update usage exceeded error — _@fwang_
- [`ebaa99a`](https://github.com/anomalyco/opencode/commit/ebaa99aba2f98020d2cfb9f0a969c623d0e74f98) chore: generate — _@opencode-agent[bot]_
- [`d66e6dc`](https://github.com/anomalyco/opencode/commit/d66e6dc25f16bf08c99c80bad4b8c5bac4d3a81f) feat(opencode): Add Venice AI package as dependency (#20570) — _@dpuyosa_
- [`336d28f`](https://github.com/anomalyco/opencode/commit/336d28f112212efb970543b9995a853753e7d988) fix(cli): restore colored help logo (#20592) — _@kitlangton_
- [`916afb5`](https://github.com/anomalyco/opencode/commit/916afb5220d064990d846f4080a683762069fa25) refactor(account): share token freshness helper (#20591) — _@kitlangton_
- [`5daf2fa`](https://github.com/anomalyco/opencode/commit/5daf2fa7f028f21ba79fd36ec2eb8b0603032673) fix(session): compaction agent responds in same language as conversation (#20581) — _@aaron-he-zhu_
- [`733a3bd`](https://github.com/anomalyco/opencode/commit/733a3bd031203b9081decae7136d7c9f3ecffdca) fix(core): prevent agent loop from stopping after tool calls with OpenAI-compatible providers (#14973) — _@valenvivaldi_
- [`2e8e278`](https://github.com/anomalyco/opencode/commit/2e8e278441e185d6282352b2fa27e0205406ed46) fix(cli): use simple logo in CLI (#20585) — _@kitlangton_
- [`0bae38c`](https://github.com/anomalyco/opencode/commit/0bae38c0622dca3235ae4f88f0d8af68085c1eb8) refactor(instruction): migrate to Effect service pattern (#20542) — _@kitlangton_
- [`a09b086`](https://github.com/anomalyco/opencode/commit/a09b086729063be9b882bc174cb8eb16d6ecec9b) test(app): block real llm calls in e2e prompts (#20579) — _@kitlangton_
- [`df1c6c9`](https://github.com/anomalyco/opencode/commit/df1c6c9e8da61859329ace94dd53939bd1df1781) tui: add consent dialog when sharing for the first time (#20525) — _@rekram1-node_
- [`789d86f`](https://github.com/anomalyco/opencode/commit/789d86f7b05c8d309e0a3790c97f7a84e0f27719) chore: generate — _@opencode-agent[bot]_
- [`e148b31`](https://github.com/anomalyco/opencode/commit/e148b318b73b748a879d8ef7661c3fea4bb46594) fix(build): replace require() with dynamic import() in cross-spawn-spawner (#20580) — _@kitlangton_
- [`0cad775`](https://github.com/anomalyco/opencode/commit/0cad7754273bef10cfb1d5e6d6bb0cd12d4f6b0d) chore: add User-Agent headers for Cloudflare providers (#20538) — _@mchenco_
- [`00d6841`](https://github.com/anomalyco/opencode/commit/00d6841f8474676052553d6278c1ad52b8ecf182) fix(account): refresh console tokens before expiry (#20558) — _@kitlangton_
- [`8a8f7b3`](https://github.com/anomalyco/opencode/commit/8a8f7b3e90a247295fa89b66b8a854ce14042b32) flock npm.add (#20557) — _@kommander_
- [`c526caa`](https://github.com/anomalyco/opencode/commit/c526caae7b5c1db4c9ed33785b1aa4d05eb97c9f) fix: show model display name in message footer and transcript (#20539) — _@kitlangton_
- [`b1c0748`](https://github.com/anomalyco/opencode/commit/b1c07488bdd77b099e94e37405d3e3f4bd9e7758) refactor(revert): yield SessionSummary.Service directly (#20541) — _@kitlangton_
- [`92f8e03`](https://github.com/anomalyco/opencode/commit/92f8e03160d9bda46facc95055663ce1f0d59760) fix(test): use effect helper in snapshot race test (#20567) — _@kitlangton_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
