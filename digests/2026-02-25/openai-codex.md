# openai/codex — 2026-02-25

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-02-24T23:59:59.000Z → 2026-02-25T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The dominant theme today is hardening the **execve/zsh-fork sandbox and skill-approval pipeline**, alongside continued buildout of the **app-server v2 thread API**.

On sandboxing, @bolinfest landed a string of fixes: execve session approvals are now scoped by approved skill metadata (#12814), the zsh-fork path enforces the `WorkspaceWrite` sandbox envelope it previously bypassed (#12800), shell-escalation paths stay absolute (#12750), helper executables are passed via `Arg0DispatchPaths` instead of `PATH` scanning (#12719), and `EscalateServer` is made public so the core-specific adapter can be removed (#12724). Complementing this, zsh-fork now forces `Decision::Prompt` for `scripts/**/*` skill matches (#12730), session approvals record whether a skill script is approved (#12756), and skill permission profiles surface in zsh-fork exec approvals (#12753) — though "Ensure shell command skills trigger approval" (#12697) was reverted in #12721. Read #12814 and #12800 first if you care about the sandbox model.

App-server v2 picked up a new `thread/unsubscribe` RPC (#10954), a `ThreadItem::DynamicToolCall` variant so dynamic tool invocations no longer fall through (#12732), an experimental `thread/realtime/*` surface (#12715), `searchTerm` on `thread/list` (#12578), per-thread service name (#12319), and graceful websocket restart on Ctrl-C (#12517). Network approval persistence plumbing landed in the TUI and v2 payloads (#12358), and `additionalPermissions` is now exposed on v2 command-execution approval requests (#12737), with the older `additional_permissions` shape migrated to a shared `PermissionProfile` (#12731).

Notable product/model changes: `5.3-codex` is now visible to API users via bundled `models.json` (#12808); `request_user_input` is enabled in Default mode (#12735); `js_repl` is promoted to an experimental feature gated on Node (#12712), with several follow-up fixes (#12636, #12725); the `steer` feature flag is removed as the new default (#12026); and realtime preambles were toggled twice ending enabled-only-for-realtime (#12806 → revert #12830 → re-land #12831).

Smaller but worth noting: child-thread approvals now display in the TUI (#12767), compaction requests propagate session ID (#12802), image-byte estimate for compaction was raised ~20× to 7,373 bytes (#12717), OTEL gains `host.name` (#12352) and embedded policy audit logging in `codex-network-proxy` (#12046), and the musl release build is unblocked via `AWS_LC_SYS_NO_JITTER_ENTROPY=1` (#12720).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`e76b1a2`](https://github.com/openai/codex/commit/e76b1a28535e1e1fa9a4776e6f1bd90ba3dcc470) Remove steer feature flag (#12026) — _@aibrahim-oai_
- [`a6a5976`](https://github.com/openai/codex/commit/a6a5976c5acae2ef55bf59828934fc098370aebe) feat: scope execve session approvals by approved skill metadata (#12814) — _@bolinfest_
- [`2f4d6de`](https://github.com/openai/codex/commit/2f4d6ded1dd7a6d6e3c9ed6cded8f2bf41328f05) Enable request_user_input in Default mode (#12735) — _@charley-oai_
- [`2bd87d1`](https://github.com/openai/codex/commit/2bd87d1a7580b2ac7a1727660f2dcb9ab0f7393d) only use preambles for realtime (#12831) — _@aibrahim-oai_
- [`b6d2074`](https://github.com/openai/codex/commit/b6d20748e0b9d240ce7edd10ab87199e35390131) Revert "Ensure shell command skills trigger approval (#12697)" (#12721) — _@celia-oai_
- [`f86087e`](https://github.com/openai/codex/commit/f86087eaa8da9cac9245c87085adc1b7a4065f36) Revert "only use preambles for realtime" (#12830) — _@aibrahim-oai_
- [`c1851be`](https://github.com/openai/codex/commit/c1851be1ed8f6ad4c8786f335e9e65b9b9d910fb) only use preambles for realtime (#12806) — _@aibrahim-oai_
- [`21f7032`](https://github.com/openai/codex/commit/21f7032dbb5ff6b1535abb44642aedca49f7a4fb) feat(app-server): thread/unsubscribe API (#10954) — _@owenlin0_
- [`d45ffd5`](https://github.com/openai/codex/commit/d45ffd5830027978b322c9b88754ded78d1bf339) make 5.3-codex visible in cli for api users (#12808) — _@sayan-oai_
- [`be5bca6`](https://github.com/openai/codex/commit/be5bca6f8d5864d4e82e685cd213649799f66ce0) fix: harden zsh fork tests and keep subcommand approvals deterministic (#12809) — _@bolinfest_
- [`f6fdfbe`](https://github.com/openai/codex/commit/f6fdfbeb98de40bc0d8da7bfe735eebdf1a5d5a4) Update Codex docs success link (#12805) — _@etraut-openai_
- [`3f30746`](https://github.com/openai/codex/commit/3f30746237a6ac3edd104a927ac5e5e9978a6984) Add simple realtime text logs (#12807) — _@aibrahim-oai_
- [`a0fd94b`](https://github.com/openai/codex/commit/a0fd94bde6d7773694b295adb9825a647eaa9b93) feat(app-server): add ThreadItem::DynamicToolCall (#12732) — _@owenlin0_
- [`73eaebb`](https://github.com/openai/codex/commit/73eaebbd1c8b463a4a8f92eacb88e8e76f865414) Propagate session ID when compacting (#12802) — _@rasmusrygaard_
- [`648a420`](https://github.com/openai/codex/commit/648a420cbf183f408f380aaa2da52089744f423f) fix: enforce sandbox envelope for zsh fork execution (#12800) — _@bolinfest_
- [`9d7013e`](https://github.com/openai/codex/commit/9d7013eab084013572069b5d784cb78e78e35691) Handle websocket timeout (#12791) — _@pakrym-oai_
- [`7b39e76`](https://github.com/openai/codex/commit/7b39e76a668b43ceca16941556ca633a3951958b) Revert "fix(bazel): replace askama templates with include_str! in memories" (#12795) — _@jif-oai_
- [`9470922`](https://github.com/openai/codex/commit/947092283ac3680582fe2fee4b246a61f3c87129) Add app-server v2 thread realtime API (#12715) — _@aibrahim-oai_
- [`0543d0a`](https://github.com/openai/codex/commit/0543d0a022376f0440c2ea5b9aab8c2fd0813758) Promote js_repl to experimental with Node requirement (#12712) — _@fjord-oai_
- [`9a393c9`](https://github.com/openai/codex/commit/9a393c9b6fd4e230960f6ebf14a4e62f4420a3aa) feat(network-proxy): add embedded OTEL policy audit logging (#12046) — _@mcgrew-oai_
- [`8362b79`](https://github.com/openai/codex/commit/8362b79cb478401c2027296f0ca3aed62b884122) feat: fix sqlite home (#12787) — _@jif-oai_
- [`01f25a7`](https://github.com/openai/codex/commit/01f25a7b9646bf71672cb3363132ff8f97556c27) chore: unify max depth parameter (#12770) — _@jif-oai_
- [`bccce0d`](https://github.com/openai/codex/commit/bccce0d75f836750c32ce4fc3dde6504fa2f591c) otel: add host.name resource attribute to logs/traces via gethostname (#12352) — _@mcgrew-oai_
- [`8d49e0d`](https://github.com/openai/codex/commit/8d49e0d0c4872e20bc2502a76f6b22450d1f7d65) nit: migration (#12772) — _@jif-oai_
- [`e4bfa76`](https://github.com/openai/codex/commit/e4bfa763f66a31bf5507c5d743da91b3da14f6aa) feat: record memory usage (#12761) — _@jif-oai_
- [`5441130`](https://github.com/openai/codex/commit/5441130e0a217471f88d815fe28702a74db2dfd7) feat: adding stream parser (#12666) — _@jif-oai_
- [`5a9a5b5`](https://github.com/openai/codex/commit/5a9a5b51b273dc11269a91a13c30838e8ce0f8c9) feat: add large stack test macro (#12768) — _@jif-oai_
- [`bcd6e68`](https://github.com/openai/codex/commit/bcd6e68054ef5ac7507733fdb46cb15ec5156773) Display pending child-thread approvals in TUI (#12767) — _@jif-oai_
- [`93efcfd`](https://github.com/openai/codex/commit/93efcfd50df31f2af80b1116d8bf86934347ba61) feat: record whether a skill script is approved for the session (#12756) — _@bolinfest_
- [`6d6570d`](https://github.com/openai/codex/commit/6d6570d89d13d45fe5cea4e653dbe9a4f6c25a84) Support external agent config detect and import (#12660) — _@alexsong-oai_
- [`f46b767`](https://github.com/openai/codex/commit/f46b767b7ea82e6f15b6652373cb84e70cd7dc8d) feat: add search term to thread list (#12578) — _@jif-oai_
- [`a046849`](https://github.com/openai/codex/commit/a046849438c61d989303b8d5549eaae55ed0cf77) fix: flaky test due to second-resolution for thread ordering (#12692) — _@jif-oai_
- [`10c04e1`](https://github.com/openai/codex/commit/10c04e11b8cf5628fa41f8c04839fd04740e958a) feat: add service name to app-server (#12319) — _@jif-oai_
- [`6a3233d`](https://github.com/openai/codex/commit/6a3233da646c62d41a3f0af26880176901f67355) Surface skill permission profiles in zsh-fork exec approvals (#12753) — _@celia-oai_
- [`c4ec6be`](https://github.com/openai/codex/commit/c4ec6be4ab0f65bec14fd55f3bb2b654dcd70275) fix: keep shell escalation exec paths absolute (#12750) — _@bolinfest_
- [`5939812`](https://github.com/openai/codex/commit/59398125f67d570dcac522fc61024b9e278173fa) feat: zsh-fork forces scripts/**/* for skills to trigger a prompt (#12730) — _@bolinfest_
- [`c086b36`](https://github.com/openai/codex/commit/c086b36b58837ca0b8aa5721d84de8b215ab3de1) feat(ui): add network approval persistence plumbing (#12358) — _@viyatb-oai_
- [`9501669`](https://github.com/openai/codex/commit/9501669a2485969a78b8bdea3da4b3b2a626e0d3) tests(js_repl): remove node-related skip paths from js_repl tests (#12185) — _@fjord-oai_
- [`ddfa032`](https://github.com/openai/codex/commit/ddfa032eb8506eeb21b4f00f12f0836f06e8a6b0) fix: chatwidget was not honoring approval_id for an ExecApprovalRequestEvent (#12746) — _@bolinfest_
- [`6cb2f02`](https://github.com/openai/codex/commit/6cb2f02ef8b73aaaa8f01e6aad04f333ce6e2a9a) feat: update Docker image digest to reflect #12205 (#12372) — _@fjord-oai_
- [`1151972`](https://github.com/openai/codex/commit/1151972fb26ef3f8f0e96821b59860c5aae4c60d) feat:  add experimental additionalPermissions to v2 command execution approval requests (#12737) — _@celia-oai_
- [`8f3f2c3`](https://github.com/openai/codex/commit/8f3f2c3c025e06acf9fd5e149810c2d08e224d84) tests(js_repl): stabilize CI runtime test execution (#12407) — _@fjord-oai_
- [`16ca527`](https://github.com/openai/codex/commit/16ca527c80ea3d863be5dcac64ba37b1f8c97e47) chore: migrate additional permissions to PermissionProfile (#12731) — _@celia-oai_
- [`e6bb5d8`](https://github.com/openai/codex/commit/e6bb5d85537ac3ce4264fa8b80e06bad8ab6a12e) chore: change catalog mode to enum (#12656) — _@sayan-oai_
- [`125fbec`](https://github.com/openai/codex/commit/125fbec317c41193c3718e21e479c581614a967a) Fix js_repl view_image attachments in nested tool calls (#12725) — _@fjord-oai_
- [`74e112e`](https://github.com/openai/codex/commit/74e112ea09dc5ac4216ece0d31ecde433f32642b) add AWS_LC_SYS_NO_JITTER_ENTROPY=1 to release musl build step to unblock releases (#12720) — _@sayan-oai_
- [`e88f74d`](https://github.com/openai/codex/commit/e88f74d140722bd787c058dd6ff2fdcda21518eb) feat: pass helper executable paths via Arg0DispatchPaths (#12719) — _@bolinfest_
- [`448fb6a`](https://github.com/openai/codex/commit/448fb6ac22ba580802db3a734ba303b370d6daa1) fix: clarify the value of SkillMetadata.path (#12729) — _@bolinfest_
- [`63c2ac9`](https://github.com/openai/codex/commit/63c2ac96cdc2e2b61bb23813a5cc0276eada0af5) fix(js_repl): surface uncaught kernel errors and reset cleanly (#12636) — _@fjord-oai_
- [`5163850`](https://github.com/openai/codex/commit/5163850025943b3e97dbf9c2d75235013b4f9116) codex-rs/app-server: graceful websocket restart on Ctrl-C (#12517) — _@maxj-oai_
- [`3d35672`](https://github.com/openai/codex/commit/3d356723c409c2681bb18ff8dc280fe8df68618d) fix: make EscalateServer public and remove shell escalation wrappers (#12724) — _@bolinfest_
- [`8da40c9`](https://github.com/openai/codex/commit/8da40c9251c7e61647ef1c15e8b96bd45a15d448) Raise image byte estimate for compaction token accounting (#12717) — _@etraut-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
