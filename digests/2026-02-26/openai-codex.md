# openai/codex — 2026-02-26

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-02-25T23:59:59.000Z → 2026-02-26T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A heavy commit day (40 commits, no releases or merged PRs in the window), dominated by multi-agent / memories work from `jif-oai` and security/sandbox tightening. Worth reading first:

**Sub-agents and memories** are the biggest theme. `feat: fork thread multi agent` (#12499) lands the core multi-agent forking primitive, with follow-ups for post-compaction sub-agent infos (#12774), memory-usage-based selection (#12909), Ctrl-C handling for sub-agents (#12911), and skipping `history_metadata` scans on subagent spawn for perf (#12918). On the memories side: rollout paths added to memory files with read-time search (#12684), git info added to memories (#12940), and diff-based "memory forgetting" (#12900).

**Security / sandbox.** `iceweasel-oai` removes sandbox read access to `~/.ssh` and a few other dirs (#12835, fixes the OpenSSH key-perms complaint in #12226) — likely the highest-impact user-visible fix. `bolinfest` extends escalation requests to carry sandbox config so reruns honor the original sandbox (#12839) and includes available decisions in command-approval requests so clients stop inferring from side channels (#12758). `etraut-openai` enforces a user-input length cap to stop multi-MB pastes (#12823).

**Protocol / config changes worth noting.** Summary becomes optional on `UserTurn` so core can pick the level (#12950); `model_reasoning_summary` falls back to the model catalog default when unset (#12873); websocket v2 becomes the model-preferred protocol (#12838); session env context now includes local date/timezone and persists it (#12947); contextual prompt injection is bundled into at most one dev + one user envelope (#12417).

**TUI / UX.** Resume/fork is re-typed around `SessionTarget { path, thread_id }` for cwd resolution (#12727); local file-link destinations are hidden in markdown rendering (#12705) with line numbers restored for hidden file links (#12870); `codex features list` is now sorted alphabetically (#12944).

**Platform / release.** New macOS+Linux direct install script at `scripts/install/install.sh` (#12740); `js_repl` Node minimum lowered to 22.22.0 (#12857) and disabled at startup when Node is incompatible (#12824); several release-pipeline fixes for Windows and macOS CI (#12848, #12856, #12865, #12871).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`90cc4e7`](https://github.com/openai/codex/commit/90cc4e79a25f86e487a701732b7573139c683442) feat: add local date/timezone to turn environment context (#12947) — _@celia-oai_
- [`4cb086d`](https://github.com/openai/codex/commit/4cb086d96fb394b18fbaa1629aea0e44c0521a57) test: move unix_escalation tests into sibling file (#12957) — _@bolinfest_
- [`a0e86c6`](https://github.com/openai/codex/commit/a0e86c69fe35e8ccfbed7ed87f07914d467ec488) Add realtime audio device config (#12849) — _@aibrahim-oai_
- [`fd719d3`](https://github.com/openai/codex/commit/fd719d3828dbf3218d36bf7c9908355367fb0a9e) fix: sort codex features list alphabetically (#12944) — _@bolinfest_
- [`951a389`](https://github.com/openai/codex/commit/951a3896549c89187bdf04c848042d995e9c3f42) Allow clients not to send summary as an option (#12950) — _@pakrym-oai_
- [`c1afb88`](https://github.com/openai/codex/commit/c1afb8815af63c59b67824a73750884aa1a2e363) tui: use thread_id for resume/fork cwd resolution (#12727) — _@charley-oai_
- [`a6065d3`](https://github.com/openai/codex/commit/a6065d30f4446f2f048c596d0f993f3c9d5e8fab) feat: add git info to memories (#12940) — _@jif-oai_
- [`7fa9d9a`](https://github.com/openai/codex/commit/7fa9d9ae351a188ff15f73888362c3d8241ecd59) feat: include sandbox config with escalation request (#12839) — _@bolinfest_
- [`6b879fe`](https://github.com/openai/codex/commit/6b879fe248f89b4da909edd8a9bfd2d2e3eeff3d) don't grant sandbox read access to ~/.ssh and a few other dirs. (#12835) — _@iceweasel-oai_
- [`717cbe3`](https://github.com/openai/codex/commit/717cbe354f7666c8c2dcc4d2921b2d134a8c4440) Remove noisy log (#12929) — _@pakrym-oai_
- [`3404ecf`](https://github.com/openai/codex/commit/3404ecff153241c688fd34307a4049acf92ad561) feat: add post-compaction sub-agent infos (#12774) — _@jif-oai_
- [`eb77db2`](https://github.com/openai/codex/commit/eb77db2957d5f0b9d91417774b2fde285c0c1316) Log js_repl nested tool responses in rollout history (#12837) — _@fjord-oai_
- [`d3603ae`](https://github.com/openai/codex/commit/d3603ae5d38ab3addbf995ee8c51a22ceb068872) feat: fork thread multi agent (#12499) — _@jif-oai_
- [`c53c08f`](https://github.com/openai/codex/commit/c53c08f8f9dfaaaefb27f9a019cc769f8d4f82d7) chore: calm down awaiter (#12925) — _@jif-oai_
- [`ba41e84`](https://github.com/openai/codex/commit/ba41e84a509b5a777002f75d63c6178b534accc8) Use model catalog default for reasoning summary fallback (#12873) — _@pakrym-oai_
- [`f0a85de`](https://github.com/openai/codex/commit/f0a85ded1867072d5b4963b8be3be1ef4f216549) fix: ctrl c sub agent (#12911) — _@jif-oai_
- [`739d4b5`](https://github.com/openai/codex/commit/739d4b52de1de2fc678e71e61b965c26ae456973) fix: do not apply turn cwd to metadata (#12887) — _@jif-oai_
- [`c528f32`](https://github.com/openai/codex/commit/c528f32acb4cb8a91c73fa2b41e6a96fb8a50955) feat: use memory usage for selection (#12909) — _@jif-oai_
- [`1503a8d`](https://github.com/openai/codex/commit/1503a8dad7ca796eada5eb6404af270dd42e308e) split-debuginfo (#12871) — _@pakrym-oai_
- [`79cbca3`](https://github.com/openai/codex/commit/79cbca324ab0f58d9f41b1e0e90bde5adb0aee55) Skip history metadata scan for subagents (#12918) — _@daveaitel-openai_
- [`79d6f80`](https://github.com/openai/codex/commit/79d6f80e41806d61b8a5ce7dbaff4bb1d6e38a91) chore: clean DB runtime (#12905) — _@jif-oai_
- [`382fa33`](https://github.com/openai/codex/commit/382fa338b3f1823711c30b89a790bb6b32f66c8b) feat: memories forgetting (#12900) — _@jif-oai_
- [`81ce645`](https://github.com/openai/codex/commit/81ce645733faf56ff07e5fd6cd9c3137292dd344) chore: better awaiter description (#12901) — _@jif-oai_
- [`52aa49d`](https://github.com/openai/codex/commit/52aa49db1b8af1ef2b090363b08260a026ad853c) Add rollout path to memory files and search for them during read (#12684) — _@wendyjiao-openai_
- [`6acede5`](https://github.com/openai/codex/commit/6acede5a28c05cd313bdc19a9d0330c8552e87b0) tui: restore visible line numbers for hidden file links (#12870) — _@pash-openai_
- [`14a08d6`](https://github.com/openai/codex/commit/14a08d6c14c926cd30f903e31027bdb580478286) nit: captial (#12885) — _@jif-oai_
- [`51cf397`](https://github.com/openai/codex/commit/51cf3977d496825a6d89d8a2326aa7aecde8af9e) chore: new agents name (#12884) — _@jif-oai_
- [`07aefff`](https://github.com/openai/codex/commit/07aefffb1fd344cc89d623a39ed85e276d3afc88) core: bundle settings diff updates into one dev/user envelope (#12417) — _@charley-oai_
- [`28bfbb8`](https://github.com/openai/codex/commit/28bfbb8f2b9c44497bcd0d73f52713fba434cb21) Enforce user input length cap (#12823) — _@etraut-openai_
- [`9a96b6f`](https://github.com/openai/codex/commit/9a96b6f5091be1424f542965c00ae62dd29be991) Hide local file link destinations in TUI markdown (#12705) — _@pash-openai_
- [`cbbf302`](https://github.com/openai/codex/commit/cbbf302f5f7eac9ca38b0310dffb228f084d13a0) Fix release build take (#12865) — _@pakrym-oai_
- [`7326c09`](https://github.com/openai/codex/commit/7326c097e3f66eb38c86b4ac470f7296ca8e277c) Reduce js_repl Node version requirement to 22.22.0 (#12857) — _@fjord-oai_
- [`8cdee98`](https://github.com/openai/codex/commit/8cdee988f99c9caf2b15f39b22e044171cce2486) Skip system skills for extra roots (#12744) — _@xl-openai_
- [`b65205f`](https://github.com/openai/codex/commit/b65205fb3d9ca9d8dbc3bf626a104fbbc7b3ac33) Attempt 2 to fix release (#12856) — _@pakrym-oai_
- [`ea621ae`](https://github.com/openai/codex/commit/ea621ae1520f49901aafca5ddfefbc64785f784e) Try fixing windows pipeline (#12848) — _@pakrym-oai_
- [`2c1f225`](https://github.com/openai/codex/commit/2c1f2254278f61232bb98fb14fe51c113516abe9) Clarify device auth login hint (#12813) — _@xl-openai_
- [`40ab71a`](https://github.com/openai/codex/commit/40ab71a9852d36745542a7c9367cc67af6fb2df9) Disable js_repl when Node is incompatible at startup (#12824) — _@fjord-oai_
- [`14116ad`](https://github.com/openai/codex/commit/14116ade8d8eb8066cb84b65b63f640a3cdd72e7) feat: include available decisions in command approval requests (#12758) — _@bolinfest_
- [`4f45668`](https://github.com/openai/codex/commit/4f456681067d8a8ab1dc1cf5e2a4fec9d3a11227) Revert "Add skill approval event/response (#12633)" (#12811) — _@celia-oai_
- [`4fedef8`](https://github.com/openai/codex/commit/4fedef88e0ae76cab0e2695933d0c6ae3602a802) Use websocket v2 as model-preferred websocket protocol (#12838) — _@pakrym-oai_
- [`a1cd78c`](https://github.com/openai/codex/commit/a1cd78c81813466e8144a4003b38164be4fedf40) Add macOS and Linux direct install script (#12740) — _@efrazer-oai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
