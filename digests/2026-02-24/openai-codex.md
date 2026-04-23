# openai/codex — 2026-02-24

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-02-23T23:59:59.000Z → 2026-02-24T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy day on `openai/codex` with 34 commits landing (no releases, no tracked PR/issue activity in the window). The dominant themes are **shell/skill permissioning, TUI ergonomics, and multi-agent infrastructure**.

The most consequential change is the new `Feature::RequestPermissions` in core (#11871), which lets the model itself request that a command be run — paired with skill-level approval plumbing (#12633, #12697) and persistence of network allow/deny decisions in execpolicy (#12357). Together these reshape how Codex negotiates trust at runtime. Supporting this, `exec-server` was deleted and the `execve` wrapper moved into `shell-escalation` (#12632), the zsh fork path was rewired through `codex-shell-escalation` (#12649), and shell-escalation was decoupled from `codex-core` (#12638) — a meaningful refactor worth reading if you touch sandboxing.

Multi-agent work continues: `spawn_agents_on_csv` jobs with progress UI and SQLite-backed results landed (#10935), runtime config/`--yolo` propagation across sub-agents was fixed (#12667), and `/agent` replay no longer re-fires decision events (#12663).

TUI gained several user-visible features: a `/copy` command for the latest complete reply (#12613), `Ctrl-L` to clear the screen without starting a new chat (#12628), theme-aware diff backgrounds (#12581), and a hidden `/realtime` voice-conversation mode behind a flag (#12687). A revert of the audio scope (#12700) and a temporary citation removal (#12711) suggest some churn around those areas.

Notable fixes: `project_root_markers` now honored when discovering `AGENTS.md` (#12639, fixes #12128); `@mention` parsing no longer breaks on `@scope/pkg@latest` (#12643, fixes #12175); an `EMFILE`-triggered panic in `AbsolutePathBuf::parent()` is gone (#12647, fixes #12216); PTY kill now uses the process group (#12688); and a websocket `permessage-deflate` connection bug in app-server was fixed by an external contributor (#12629).

Also worth noting: a warmup inference request to cut first-token latency (#11258), app-server event tracing for debugging (#12695), Linux/Windows idle-sleep inhibitors (#11766), and continued memory-prompt tightening (#12635, #12653).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`5571a02`](https://github.com/openai/codex/commit/5571a022ebcc060a0da855028df3374997e498a9) Add app-server event tracing (#12695) — _@pakrym-oai_
- [`ee1520e`](https://github.com/openai/codex/commit/ee1520e79e4fc6fd72565c8f854afc16001a00d7) feat(tui) - /copy (#12613) — _@won-openai_
- [`61cd3a9`](https://github.com/openai/codex/commit/61cd3a9700604d3c971aa60bf9fe725e22357954) fix: temp remove citation (#12711) — _@zuxin-oai_
- [`fefdc03`](https://github.com/openai/codex/commit/fefdc03b25e9586bf390570c1f00cf91a651cc98) revert audio scope (#12700) — _@nornagon-openai_
- [`dcab401`](https://github.com/openai/codex/commit/dcab40123f5e64ba8af962ae27abe6cbcc205344) Agent jobs (spawn_agents_on_csv) + progress UI (#10935) — _@daveaitel-openai_
- [`bd192b5`](https://github.com/openai/codex/commit/bd192b54cd972ccbeac00f54b5691608035dde10) Honor `project_root_markers` when discovering `AGENTS.md` (#12639) — _@etraut-openai_
- [`b6ab221`](https://github.com/openai/codex/commit/b6ab2214e32493ea84cdf5a45bbe481a50c0ab9e) Add TUI realtime conversation mode (#12687) — _@aibrahim-oai_
- [`3b5fc75`](https://github.com/openai/codex/commit/3b5fc7547ed4f66a0b19ae9a63fe488a83a47bb7) refactor: remove unused seatbelt unix socket arg (#12707) — _@bolinfest_
- [`daf0f03`](https://github.com/openai/codex/commit/daf0f03ac80182e500f8731f42ed50daae9400ee) Ensure shell command skills trigger approval (#12697) — _@pakrym-oai_
- [`061d1d3`](https://github.com/openai/codex/commit/061d1d3b5e55bcdf12865625fdde7f9757b6fa46) feat(tui): add theme-aware diff backgrounds with capability-graded palettes (#12581) — _@fcoury_
- [`67d9261`](https://github.com/openai/codex/commit/67d9261e2c05adc175cac6adf1975dcfdc81755d) feat(sleep-inhibitor): add Linux and Windows idle-sleep prevention (#11766) — _@yvolovich-cyber_
- [`0b6c2e5`](https://github.com/openai/codex/commit/0b6c2e5652133f31d7e87de0cad7dad9b089dc19) fix: also try matching namespaced prefix for modelinfo candidate (#12658) — _@sayan-oai_
- [`74cebce`](https://github.com/openai/codex/commit/74cebceed7e4a826d355ff66daea7b635a83aba7) Fix @mention token parsing in chat composer (#12643) — _@etraut-openai_
- [`3ca0e76`](https://github.com/openai/codex/commit/3ca0e7673b77303db6e0d686c1d9d34fc2ed63e0) feat: run zsh fork shell tool via shell-escalation (#12649) — _@bolinfest_
- [`8d3d58f`](https://github.com/openai/codex/commit/8d3d58f992792d62de13f8e3b638ed6626f5fc10) feat(network-proxy): add MITM support and gate limited-mode CONNECT (#9859) — _@viyatb-oai_
- [`ca556fa`](https://github.com/openai/codex/commit/ca556fa3138d15d38ab34df067cb706077242395) ctrl-L (clears terminal but does not start a new chat)  (#12628) — _@won-openai_
- [`f6053fd`](https://github.com/openai/codex/commit/f6053fdfb3da12f53cef173813e7264500ca8c10) feat(core) Introduce Feature::RequestPermissions (#11871) — _@dylan-hurd-oai_
- [`9a8adbf`](https://github.com/openai/codex/commit/9a8adbf6e537893983f4a0583e695ec45298bf7d) feat: use process group to kill the PTY (#12688) — _@jif-oai_
- [`97d0068`](https://github.com/openai/codex/commit/97d0068658a61df999fe545f06c13a69cda19e86) Send warmup request (#11258) — _@pakrym-oai_
- [`0679e70`](https://github.com/openai/codex/commit/0679e70bfce35d589363df24c49abd75ff98b10a) fix: replay after `/agent` (#12663) — _@jif-oai_
- [`3fe365a`](https://github.com/openai/codex/commit/3fe365ad8a915e6a9c6f1b73f57ccc993d5273c6) memories: tighten memory lookup guidance and citation requirements (#12635) — _@zuxin-oai_
- [`8758db5`](https://github.com/openai/codex/commit/8758db5d5bf9f3d98bff595f38f6124d0174a2a8) feat: mutli agents persist config overrides (#12667) — _@jif-oai_
- [`15f6cfb`](https://github.com/openai/codex/commit/15f6cfb04778c6cf242d495c9c88d4b22a5f92a6) memories: tighten consolidation prompt schema and indexing guidance (#12653) — _@zuxin-oai_
- [`68a7d98`](https://github.com/openai/codex/commit/68a7d983631cc80e7e2bf7c847354b19e54eaeab) Simplify skill tracking (#12652) — _@pakrym-oai_
- [`7e46e5b`](https://github.com/openai/codex/commit/7e46e5b9c214554db68fd1f227dd93c7c5b5322f) chore: rm hardcoded PRESETS list (#12650) — _@sayan-oai_
- [`58763af`](https://github.com/openai/codex/commit/58763afa0f5e57f4fc3dd6c8c00853b17d5e599a) Add skill approval event/response (#12633) — _@pakrym-oai_
- [`a4076ab`](https://github.com/openai/codex/commit/a4076ab4b124541d8848f684d468e4fbe75491fd) Avoid `AbsolutePathBuf::parent()` panic under `EMFILE` by skipping re-absolutization (#12647) — _@etraut-openai_
- [`09a82f3`](https://github.com/openai/codex/commit/09a82f364fcb201288c085e59c7b5726c391062c) Support implicit skill invocation analytics events (#12049) — _@alexsong-oai_
- [`fbeda61`](https://github.com/openai/codex/commit/fbeda61cc3bf2dcd8cd438ff0a75753e1de1d9d2) fix(exec) Patch resume test race condition (#12648) — _@dylan-hurd-oai_
- [`c3048ff`](https://github.com/openai/codex/commit/c3048ff90a4c41160d3bfb0186fba969aacb2cef) feat(core): persist network approvals in execpolicy (#12357) — _@viyatb-oai_
- [`af215eb`](https://github.com/openai/codex/commit/af215eb390b5b1fef68a237fa438ba3de8283f00) refactor: decouple shell-escalation from codex-core (#12638) — _@bolinfest_
- [`38f84b6`](https://github.com/openai/codex/commit/38f84b6b292445acbf11d8f68498a07663868c90) refactor: delete exec-server and move execve wrapper into shell-escalation (#12632) — _@bolinfest_
- [`5a3bdcb`](https://github.com/openai/codex/commit/5a3bdcb27b4f5fffa6e3fad038c8f6759c417090) app-server: fix connecting via websockets with `Sec-WebSocket-Extensions: permessage-deflate` (#12629) — _@JaviSoto_
- [`d580995`](https://github.com/openai/codex/commit/d58099595760e28ea19e0652968d9a1a430d30ad) Update models.json (#11408) — _@github-actions[bot]_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
