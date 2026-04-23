# openai/codex — 2026-03-02

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-01T23:59:59.000Z → 2026-03-02T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is the multi-agent push: `/agent` is now wired up as a first-class entry point with a `feat: enable ma through /agent` change ([#13246](https://github.com/openai/codex/commit/f8838fd6f3a22f228a1ed551df67789b25c82b12)) plus a `/multiagent` alias and rewording ([#13249](https://github.com/openai/codex/commit/9a42a56d8f0a14298c0e54b1ac6d7dda48ec347b)). Supporting fixes round out the experience: Esc handling inside `/agent` ([#13131](https://github.com/openai/codex/commit/2a5bcc053f2518dea692480e78b709cfe1125c8a)), `/status` correctness when running as a sub-agent ([#13130](https://github.com/openai/codex/commit/b08bdd91e347011cdde1a32cb20bda8e64ccf004)), and reuse of the parent shell snapshot when spawning `ThreadSpawn` sub-agents to avoid redundant environment capture ([#13052](https://github.com/openai/codex/commit/c2e126f92ad560cfbda3a542db4e669680af9c25)). TUI contrast for sub-agent transcript labels and role tags was also raised ([#13197](https://github.com/openai/codex/commit/9685e7d6d1304c0065afe437046275a346b896c1)).

The other thematic thread is **memories**: a feature flag to suppress memory creation for "polluted" sessions ([#13008](https://github.com/openai/codex/commit/b6499538453c28e815dd50120f7518ebe0ddf9ba)) and a rename of memories config keys ([#13237](https://github.com/openai/codex/commit/1905597017f04723bcff979c931d341a932e3cc2)) — worth a look if you have downstream config referencing the old names.

Notable correctness fixes:
- Project-trust / MCP subtable CLI overrides now merge correctly, fixing #13076 ([#13090](https://github.com/openai/codex/commit/7709bf32a34675e2a77ef5074d6d00faced3e5e8)).
- `shell_snapshot` no longer breaks on multiline env var exports ([#12642](https://github.com/openai/codex/commit/e10df4ba10e6f87e1d56230453a035087f4883ff)).
- `app-server`'s `thread/name/set` now works on persisted-but-not-loaded threads ([#13282](https://github.com/openai/codex/commit/14fcb6645c9935fe677ef3a79cbca8e4e2f94c83)).
- TUI restores the `Tab to queue` draft footer hint while the agent is running ([#13202](https://github.com/openai/codex/commit/7979ce453a23f41be27aaeb997b4705429b51345)).

Infra/housekeeping: Bash upstream clone source switched from a GitHub mirror to `git.savannah.gnu.org/git/bash` ([#13057](https://github.com/openai/codex/commit/3241c1c6ccd57db2f25ecf8451a99bebf9672827)); the issue-dedup workflow was split into two jobs with an open-issue fallback ([#13215](https://github.com/openai/codex/commit/d94f0b6ce7119e0f636b9addec7011d37f5c895d)); and a flaky `codex_message_processor_flow` test got its read timeout bumped 20s→45s ([#11814](https://github.com/openai/codex/commit/75e7c804eac4d3fae12d1dda38c726d1f37e17fe)). No releases, PRs, or issues recorded in the window.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`14fcb66`](https://github.com/openai/codex/commit/14fcb6645c9935fe677ef3a79cbca8e4e2f94c83) app-server: Update `thread/name/set` to support not-loaded threads (#13282) — _@euroelessar_
- [`75e7c80`](https://github.com/openai/codex/commit/75e7c804eac4d3fae12d1dda38c726d1f37e17fe) test(app-server): increase flow test timeout to reduce flake (#11814) — _@joshka-oai_
- [`e10df4b`](https://github.com/openai/codex/commit/e10df4ba10e6f87e1d56230453a035087f4883ff) fix(core) shell_snapshot multiline exports (#12642) — _@dylan-hurd-oai_
- [`f8838fd`](https://github.com/openai/codex/commit/f8838fd6f3a22f228a1ed551df67789b25c82b12) feat: enable ma through `/agent` (#13246) — _@jif-oai_
- [`7979ce4`](https://github.com/openai/codex/commit/7979ce453a23f41be27aaeb997b4705429b51345) tui: restore draft footer hints (#13202) — _@charley-oai_
- [`7709bf3`](https://github.com/openai/codex/commit/7709bf32a34675e2a77ef5074d6d00faced3e5e8) Fix project trust config parsing so CLI overrides work (#13090) — _@etraut-openai_
- [`3241c1c`](https://github.com/openai/codex/commit/3241c1c6ccd57db2f25ecf8451a99bebf9672827) fix: use https://git.savannah.gnu.org/git/bash instead of https://github.com/bolinfest/bash (#13057) — _@bolinfest_
- [`9a42a56`](https://github.com/openai/codex/commit/9a42a56d8f0a14298c0e54b1ac6d7dda48ec347b) chore: `/multiagent` alias for `/agent` (#13249) — _@jif-oai_
- [`c2e126f`](https://github.com/openai/codex/commit/c2e126f92ad560cfbda3a542db4e669680af9c25) core: reuse parent shell snapshot for thread-spawn subagents (#13052) — _@daveaitel-openai_
- [`2a5bcc0`](https://github.com/openai/codex/commit/2a5bcc053f2518dea692480e78b709cfe1125c8a) fix: esc in `/agent` (#13131) — _@jif-oai_
- [`1905597`](https://github.com/openai/codex/commit/1905597017f04723bcff979c931d341a932e3cc2) feat: update memories config names (#13237) — _@jif-oai_
- [`b649953`](https://github.com/openai/codex/commit/b6499538453c28e815dd50120f7518ebe0ddf9ba) feat: polluted memories (#13008) — _@jif-oai_
- [`b08bdd9`](https://github.com/openai/codex/commit/b08bdd91e347011cdde1a32cb20bda8e64ccf004) fix: `/status` when sub-agent (#13130) — _@jif-oai_
- [`9685e7d`](https://github.com/openai/codex/commit/9685e7d6d1304c0065afe437046275a346b896c1) Improve subagent contrast in TUI (#13197) — _@gabec-openai_
- [`d94f0b6`](https://github.com/openai/codex/commit/d94f0b6ce7119e0f636b9addec7011d37f5c895d) Fix issue deduplication workflow for Codex issues (#13215) — _@etraut-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
