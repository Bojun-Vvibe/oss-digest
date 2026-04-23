# openai/codex — 2026-03-04

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-03T23:59:59.000Z → 2026-03-04T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Heavy commit day (35 merges, no releases or new issues/PRs surfaced) dominated by multi-agent/sub-agent plumbing, app-server tracing, and sandbox/permission hardening.

The headline work is on **multi-agent and handoff UX**: handoff messages are now prefixed with their role before forwarding to the agent (#13505), the multi-agent prompt was rewritten (#13404), pending messages in `/agent` are fixed (#13240), input is disabled on sub-agents (#13460), and subagents get role-specific nickname pools (#13218) plus ordinal nicknames (#13412). Notifications gain new `plan-mode-prompt` and `user-input-requested` scopes for the TUI (#13495, addressing #13478).

**App-server / tracing** continues a multi-PR rollout: a per-turn span (#13424), trace-context propagation from app-server RPC handlers into core (#13368), OTEL setup in `app-server-test-client` (#13493), a v2 `skills/changed` notification (#13414), and `flex` tier support alongside `fast` (#13391). New metrics land for per-turn token usage (#13454), per-turn tool count plus a `tmp_mem` flag (#13456), and external config import (#13501).

**Sandbox/permissions** got several pointed changes worth reviewing if you ship enterprise configs: enterprise feature-flag enforcement via `requirements.toml`/MDM (#13388), nesting skill/protocol network perms under `network.enabled` (#13427, a config shape break), preserving network access on read-only sandbox policies (#13409), letting apps specify a cwd for sandbox setup so the Electron app doesn't initialize in its install dir (#13484), and copying the Windows command-runner into `CODEX_HOME` so packaged installs keep working (#13413). Login also picks up new scopes, though refresh scopes are deferred pending an upgrade flow (#12383).

Other notable items: an `image-gen-core` tool-calling implementation against the Response API (#13290); plugin-app loading from `.app.json` gated on `codex_apps` MCP exposure (#13401); `js_repl` image output is now controllable instead of auto-hoisted (#13331); a TUI fix decoding ANSI alpha-channel encoding in `ansi`/`base16` syntax themes (#13382, external contributor); `memories` enabled in workspace-write (#13467); CLI feedback diagnostics with env-var collection (#13292); and a release-engineering switch to thin LTO (#13506) plus boxed wrapper futures to reduce stack pressure (#13429).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`294079b`](https://github.com/openai/codex/commit/294079b0b1a6f6a16982c69d53b7ec44f5f8526b) Prefix handoff messages with role (#13505) — _@aibrahim-oai_
- [`4907096`](https://github.com/openai/codex/commit/4907096d1348b398b7bd7559a6ecc399b1dd7424) [release] temporarily use thin LTO for releases (#13506) — _@bolinfest_
- [`f80e5d9`](https://github.com/openai/codex/commit/f80e5d979d7a1872da11520507ae881860fa4268) Notify TUI about plan mode prompts and user input requests (#13495) — _@etraut-openai_
- [`ce139bb`](https://github.com/openai/codex/commit/ce139bb1afade875eaf8d1fb477b58062be9d896) add metrics for external config import (#13501) — _@alexsong-oai_
- [`8dfd654`](https://github.com/openai/codex/commit/8dfd654196c36b26cd12ac348f5a8a9b688f38ca) feat(app-server-test-client): OTEL setup for tracing (#13493) — _@owenlin0_
- [`2322e49`](https://github.com/openai/codex/commit/2322e49549f477a351308969a15f8e6c622dc1d7) feat: external artifacts builder (#13485) — _@jif-oai_
- [`98923e5`](https://github.com/openai/codex/commit/98923e53ccd0481925cb26f7146e80a6a4c42405) fix(tui): decode ANSI alpha-channel encoding in syntax themes (#13382) — _@fcoury_
- [`b200a5f`](https://github.com/openai/codex/commit/b200a5f45bf6a81b16c7b2e6f04dbe5eb172863c) [tui] Update Fast slash command description (#13458) — _@pash-openai_
- [`26f4b8e`](https://github.com/openai/codex/commit/26f4b8e2f149fec91ffa26f384e6e622a5dc9bb4) remove serviceTier from app-server examples (#13489) — _@kharvd_
- [`27724f6`](https://github.com/openai/codex/commit/27724f6ead1a47720ac14173d84bb4fa0d7812df) feat(core, tracing): add a span representing a turn (#13424) — _@owenlin0_
- [`54a1c81`](https://github.com/openai/codex/commit/54a1c81d73f0060aab97ab8ed5025f813fbe0555) allow apps to specify cwd for sandbox setup. (#13484) — _@iceweasel-oai_
- [`8a59386`](https://github.com/openai/codex/commit/8a593862736e5a3dc701b05838b682299551c36b) add new scopes to login (#12383) — _@adaley-openai_
- [`f72ab43`](https://github.com/openai/codex/commit/f72ab43fd193b31208cd3c306293b1b71a52a709) feat: memories in workspace write (#13467) — _@jif-oai_
- [`df61947`](https://github.com/openai/codex/commit/df619474f56999b5837da97b34df0eef083b1251) nit: citation prompt (#13468) — _@jif-oai_
- [`e07eaff`](https://github.com/openai/codex/commit/e07eaff0d32caaec47cc4b0616d1b32c086e904f) feat: add metric for per-turn tool count and add tmp_mem flag (#13456) — _@jif-oai_
- [`bda3c49`](https://github.com/openai/codex/commit/bda3c49dc4a4ea052ed55faf9c4310e6875ca41e) feat: disable request input on sub agent (#13460) — _@jif-oai_
- [`e6b2e3a`](https://github.com/openai/codex/commit/e6b2e3a9f7ab3e87626db8de34632d3d61c083b8) fix: bad merge (#13461) — _@jif-oai_
- [`e4a202e`](https://github.com/openai/codex/commit/e4a202ea52439fd14f2eddd465c0e9824f8d1fb6) fix: pending messages in `/agent` (#13240) — _@jif-oai_
- [`49634b7`](https://github.com/openai/codex/commit/49634b7f9c0702598bbd5a233ddcb8bad5302e79) add metric for per-turn token usage (#13454) — _@jif-oai_
- [`a4ad101`](https://github.com/openai/codex/commit/a4ad101125cc2166d6675aea8309193f07c6f04c) feat: ordinal nick name (#13412) — _@jif-oai_
- [`932ff28`](https://github.com/openai/codex/commit/932ff2818320e7c5181a28316db75e53620aeabc) feat: better multi-agent prompt (#13404) — _@jif-oai_
- [`fa2306b`](https://github.com/openai/codex/commit/fa2306b303a8c7b1ef2ebb41117051bede08cb09) image-gen-core (#13290) — _@won-openai_
- [`4f6c4bb`](https://github.com/openai/codex/commit/4f6c4bb143a9c53ea762194248c95e85bf0ac9d3) support 'flex' tier in app-server in addition to 'fast' (#13391) — _@kharvd_
- [`7134220`](https://github.com/openai/codex/commit/7134220f3c1a5119cc0ea775b1807fe186b8a614) core: box wrapper futures to reduce stack pressure (#13429) — _@bolinfest_
- [`d622bff`](https://github.com/openai/codex/commit/d622bff384b8781133ba3a30ff9b5c8b15f36fb5) chore: Nest skill and protocol network permissions under `network.enabled` (#13427) — _@celia-oai_
- [`2e154a3`](https://github.com/openai/codex/commit/2e154a35bc6df9239dff23b6552076fc2a8a49b1) Add role-specific subagent nickname overrides (#13218) — _@gabec-openai_
- [`bfff0c7`](https://github.com/openai/codex/commit/bfff0c729f51b84eba5bb423b1ca4eb8317e91fd) config: enforce enterprise feature requirements (#13388) — _@bolinfest_
- [`e6773f8`](https://github.com/openai/codex/commit/e6773f856c97ce766b7f507a99e5447a1e2a306c) Feat: Preserve network access on read-only sandbox policies (#13409) — _@celia-oai_
- [`2d8c157`](https://github.com/openai/codex/commit/2d8c1575b8ba94179923348065062dc70f09deab) [bazel] Bump rules_rs and llvm (#13366) — _@zbarsky-openai_
- [`639a5f6`](https://github.com/openai/codex/commit/639a5f6c48a22fa0b828064518fadcafe8ad31e4) copy command-runner to CODEX_HOME so sandbox users can always execute it (#13413) — _@iceweasel-oai_
- [`52521a5`](https://github.com/openai/codex/commit/52521a5e408c86b22dfe37edab7cec2376854961) feat(app-server): propagate app-server trace context into core (#13368) — _@owenlin0_
- [`0fbd840`](https://github.com/openai/codex/commit/0fbd84081bf11065dfd0cd8d9f31faa6b599877a) feat(app-server): add a skills/changed v2 notification (#13414) — _@owenlin0_
- [`e951ef4`](https://github.com/openai/codex/commit/e951ef43741628a4835dceaf61df297c504b7281) [feedback] diagnostics (#13292) — _@rhan-oai_
- [`082682a`](https://github.com/openai/codex/commit/082682a62871bb14864cfabd54b88368a9830b90) feat: load plugin apps (#13401) — _@sayan-oai_
- [`c4cb594`](https://github.com/openai/codex/commit/c4cb594e73fda4b9247d606fb00eb2c58da26647) Make js_repl image output controllable (#13331) — _@fjord-oai_
- [`1afbbc1`](https://github.com/openai/codex/commit/1afbbc11c3e2452cd61a4b102eb96b60e45f2de0) Ensure the env values of imported shell_environment_policy.set is string (#13402) — _@alexsong-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
