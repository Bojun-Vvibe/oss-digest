# openai/codex — 2026-03-07

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-06T23:59:59.000Z → 2026-03-07T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The headline change is the **Guardian approval MVP** landing in #13692, which adds a guardian-reviewer flow for `on-request` approvals across command, patch, sandbox-retry, and managed-network paths (kept behind a flag). It promptly broke CI, prompting a snapshot-test removal (#13910) and an unused-imports cleanup (#13911) — worth reviewing if you're touching approval code today.

Sandboxing/safety is the other major theme. Bolinfest continued the split-policy refactor: runtime now plumbs separate `FileSystemSandboxPolicy` and `NetworkSandboxPolicy` (#13439), the protocol derives effective file access from those policies (#13440), and `apply_patch` now honors filesystem policy carveouts instead of the legacy `SandboxPolicy` projection (#13445) — a real safety fix. Complementing this, #12752 wires `requirements.toml` `allowed_domains`/`denied_domains` into the managed-network proxy as baselines, and #13833 hardens `windowsSandbox/setupStart` by requiring an absolute `cwd`. Skill-script approval semantics also got two fixes: #13791 skips exec approval for permissionless skill scripts, and #13816 distinguishes reject-policy handling for prefix-rule vs sandbox approvals.

On the app-server/protocol side, #13640 is substantial: `command/exec` gains stdin/stdout/stderr streaming plus tty/pty support with a configurable output cap. #13819 fixes a JSON schema exporter bug where two different `WebSearchAction` types collided, and #13675 expands web-search configuration beyond on/off to the full response-tool config. #13796 adds `experimental_realtime_ws_startup_context` to override/disable the realtime WS startup context.

Smaller but useful: a Fast-mode indicator for `/statusline` (#13670, addressing #13660); a curated plugin marketplace with optional `plugin.json` interface metadata (#13712); avoiding `git rev-parse` before project trust is established by inspecting `.git` on disk (#13804); a mechanical `OtelManager` → `SessionTelemetry` rename (#13808); further DB simplification (#13771); and a devcontainer fix adding `libcap-dev` so `cargo clippy --tests` works on Linux (#13814).

No issues, PRs, or releases were recorded in the window — all activity came in as direct commits to `main`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`92f7541`](https://github.com/openai/codex/commit/92f7541624810406d5c3d1c424147bcfa458efce) fix(ci) fix guardian ci (#13911) — _@dylan-hurd-oai_
- [`1c88870`](https://github.com/openai/codex/commit/1c888709b5d718b2452f4bf59ef20f65ff4b5331) fix(core) rm guardian snapshot test (#13910) — _@dylan-hurd-oai_
- [`b9a2e40`](https://github.com/openai/codex/commit/b9a2e400018c219e3010a5a5b8ded8645184da0b) tmp: drop artifact skills (#13851) — _@jif-oai_
- [`e84ee33`](https://github.com/openai/codex/commit/e84ee33cc02e693a3cf66204c72cb37e8dda3ed6) Add guardian approval MVP (#13692) — _@charley-oai_
- [`cf143bf`](https://github.com/openai/codex/commit/cf143bf71e1693c782d5bb942bb1df992b4efede) feat: simplify DB further (#13771) — _@jif-oai_
- [`5ceff65`](https://github.com/openai/codex/commit/5ceff6588ef67aaac34f9461411b90f65e42b4f9) safety: honor filesystem policy carveouts in apply_patch (#13445) — _@bolinfest_
- [`8df4d9b`](https://github.com/openai/codex/commit/8df4d9b3b26b8a33a5a358cc3461d8c55920bda4) Add Fast mode status-line indicator (#13670) — _@etraut-openai_
- [`4b4f61d`](https://github.com/openai/codex/commit/4b4f61d37965b7a37ef1462f7dc5aa927618c9ae) app-server: require absolute cwd for windowsSandbox/setupStart (#13833) — _@iceweasel-oai_
- [`b0ce16c`](https://github.com/openai/codex/commit/b0ce16c47a892a17e9c165aa7333984b3c2995d3) fix(core): respect reject policy by approval source for skill scripts (#13816) — _@celia-oai_
- [`b52c18e`](https://github.com/openai/codex/commit/b52c18e414ce024b31ac15c9f76885371bd52ee7) protocol: derive effective file access from filesystem policies (#13440) — _@bolinfest_
- [`22ac6b9`](https://github.com/openai/codex/commit/22ac6b9aaaa2b796f766845f32681ccfbb33a3b4) sandboxing: plumb split sandbox policies through runtime (#13439) — _@bolinfest_
- [`25fa974`](https://github.com/openai/codex/commit/25fa9741660dfc95fffb23b67e52af4f56e30187) fix: support managed network allowlist controls (#12752) — _@viyatb-oai_
- [`5deaf94`](https://github.com/openai/codex/commit/5deaf9409b3c4d39115d88dbe1aa6c2f9c22868e) fix: avoid invoking git before project trust is established (#13804) — _@viyatb-oai_
- [`90469d0`](https://github.com/openai/codex/commit/90469d0a230a4cbc05fa8e457a4341c322c75feb) feat(app-server-protocol): address naming conflicts in json schema exporter (#13819) — _@owenlin0_
- [`e9bd8b2`](https://github.com/openai/codex/commit/e9bd8b20a11ada9f674a705ebfbac1fb1aacb11e) app-server: Add streaming and tty/pty capabilities to `command/exec` (#13640) — _@euroelessar_
- [`61098c7`](https://github.com/openai/codex/commit/61098c7f5121824331d81513d51d852eda4b1509) Allow full web search tool config (#13675) — _@rm-openai_
- [`8b81284`](https://github.com/openai/codex/commit/8b812849758ea205e31da8979e66bef01d43380e) fix(core): skip exec approval for permissionless skill scripts (#13791) — _@celia-oai_
- [`0243734`](https://github.com/openai/codex/commit/0243734300a9421ac887906d79252deda9b9667a) feat: Add curated plugin marketplace + Metadata Cleanup. (#13712) — _@xl-openai_
- [`289ed54`](https://github.com/openai/codex/commit/289ed549cf4102414fab679d77481d3440368800) chore(otel): rename OtelManager to SessionTelemetry (#13808) — _@owenlin0_
- [`3794363`](https://github.com/openai/codex/commit/3794363cacb13f3df3587de524b1e53fc6803d3f) fix: include libcap-dev dependency when creating a devcontainer for building Codex (#13814) — _@bolinfest_
- [`a11c59f`](https://github.com/openai/codex/commit/a11c59f63426d7d763c5d9f7bdda932ba682e0d4) Add realtime startup context override (#13796) — _@aibrahim-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
