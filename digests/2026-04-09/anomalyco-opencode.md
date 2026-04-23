# anomalyco/opencode — 2026-04-09

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-08T23:59:59.000Z → 2026-04-09T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two patch releases shipped today: **v1.4.2** (#release) is the headline, fixing subagents that weren't clickable until they finished (TUI) and removing the forced loading delay in the Desktop app. Earlier the same day, **v1.4.1** delivered a clangd root-marker fix for C/C++ workspaces (`9c1c061`), permission prompts for GitLab Duo Workflow tool calls (`cd8e8a9`), an "OpenCode Go" upsell modal when free limits are hit (#21583), simplified provider/model picker labels, and same-origin terminal fixes.

The most user-visible feature merged today is **fast-mode support for Claude and GPT models** that expose it (#21706) — worth a look if you care about latency/cost knobs. MCP gained **OAuth redirect URI configuration** for servers (#21385), and OpenAI OAuth now works for the `agent create` command via a temporary shim (#21749).

Reliability work around interrupted bash and tool-result handling dominated the rest of the day, all from kitlangton: interrupted bash output is now preserved in tool results (#21598) and finalized via the tool-result path (#21724), abort signals propagate into the inline read tool (#21584), text-part timing is preserved in the session processor (#21691), and the agent default layer is suspended during construction to avoid eager init (#21732). A `refactor: fix tool call state handling` (#21709) from thdxr lands in the same area — if you're debugging tool lifecycle issues, start there.

Notable architecture churn: the session run-state was extracted into its own service (#21744), init-route orchestration was inlined (#21754), shell abort signals were dropped from the runner (#21599), and unused runtime facade exports were removed (#21731). A previous **lazy-load of top-level CLI commands was reverted** (#21726, reverting `537160d`) — regressions likely surfaced, so don't reintroduce that pattern blindly.

Electron app shed its bundled CLI entirely (#17803) and dropped the min loading duration (#21655). CI was also tightened so beta-branch builds skip Windows/Linux signing and Winget publish, while finalize always runs (`eac50f9`, `1a902b2`).

No new issues or open PRs were recorded in the window.

## Releases

- **[v1.4.2](https://github.com/anomalyco/opencode/releases/tag/v1.4.2)** — v1.4.2 _by @opencode-agent[bot] at 2026-04-09T16:25:08Z_
  > ## TUI
  > - Fix subagents not being clickable until finished
  > 
  > 
  > ## Desktop
  > 
  > - Removed the forced loading delay while the app connects
- **[v1.4.1](https://github.com/anomalyco/opencode/releases/tag/v1.4.1)** — v1.4.1 _by @opencode-agent[bot] at 2026-04-09T07:12:43Z_
  > ## Core
  > - Fix `clangd` choosing `CMakeLists.txt` or `Makefile` as the project root in C and C++ workspaces. (@nonbanana)
  > - Add permission prompts for GitLab Duo Workflow tool calls instead of auto-running them. (@vglafirov)
  > - Hide unsupported variants for Big Pickle models.
  > 
  > ## TUI
  > - Show an OpenCode Go subscribe prompt when free usage limits are reached.
  > - Simplify provider labels in the model and provider pickers.
  > 
  > ## Desktop
  > - Fix terminal connections in same-origin desktop and web app setups…


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`eac50f9`](https://github.com/anomalyco/opencode/commit/eac50f9151be808c06a36612a69a0e4522988cdd) ci: prevent beta branch builds from triggering production release steps — _@thdxr_
- [`1a902b2`](https://github.com/anomalyco/opencode/commit/1a902b291c5c096b33a5f618721559e03f0a5dab) ci: skip winget publish on beta and ensure finalize always runs — _@thdxr_
- [`bbe4a04`](https://github.com/anomalyco/opencode/commit/bbe4a04f9fcba9e46eb1baf5e7152b22465808d5) chore: generate — _@opencode-agent[bot]_
- [`b2f621b`](https://github.com/anomalyco/opencode/commit/b2f621b897ca636dc720b035072555e03c0da30a) refactor(session): inline init route orchestration (#21754) — _@kitlangton_
- [`7202b3a`](https://github.com/anomalyco/opencode/commit/7202b3a32541c4eb6b39adcc41d2333deb9cd538) fix: ensure that openai oauth works for agent create cmd, use temporary hack (#21749) — _@rekram1-node_
- [`35b44df`](https://github.com/anomalyco/opencode/commit/35b44df94ab50bc4e2c4a18f029e0f52c3bf5be7) chore: generate — _@opencode-agent[bot]_
- [`10441ef`](https://github.com/anomalyco/opencode/commit/10441efad1895cbaa77be3ba5277026b489894a2) refactor(effect): extract session run state service (#21744) — _@kitlangton_
- [`3199383`](https://github.com/anomalyco/opencode/commit/3199383eef4cc2ac4ca086f9485b071061dcff70) fix: finalize interrupted bash via tool result path (#21724) — _@kitlangton_
- [`9f54115`](https://github.com/anomalyco/opencode/commit/9f54115c5dbe98b7a0020875cb2f6035626af19d) refactor: remove unused runtime facade exports (#21731) — _@kitlangton_
- [`2ecc6ae`](https://github.com/anomalyco/opencode/commit/2ecc6ae65ffc7c767d0c288a53ccf8344a53011e) fix(effect): suspend agent default layer construction (#21732) — _@kitlangton_
- [`02b32e1`](https://github.com/anomalyco/opencode/commit/02b32e1ba752fae421def60cd6d6e43fbf42af3a) Revert "opencode: lazy-load top-level CLI commands" (#21726) — _@simonklee_
- [`34b9792`](https://github.com/anomalyco/opencode/commit/34b979265427444d7e311773d6957221bd092a32) delete unused withALS method (#21723) — _@kitlangton_
- [`537160d`](https://github.com/anomalyco/opencode/commit/537160dbc0cfa9e2eb1bc3ea5cf86743a15f8d90) opencode: lazy-load top-level CLI commands — _@simonklee_
- [`b060066`](https://github.com/anomalyco/opencode/commit/b0600664abacabc3b6bd41de88859248bc2a2594) feat: add support for fast modes for claude and gpt models (that support it) (#21706) — _@rekram1-node_
- [`581a769`](https://github.com/anomalyco/opencode/commit/581a7692ffd1a8d675f6f34905db1f6935a2b8c3) fix(tui): restore hidden session scrollbar default (#20947) — _@kitlangton_
- [`f73e4d5`](https://github.com/anomalyco/opencode/commit/f73e4d5d31343a2e975d4213c45d1b5fa1c58e75) chore: generate — _@opencode-agent[bot]_
- [`a7743e6`](https://github.com/anomalyco/opencode/commit/a7743e646736f3fe7ae92c6a54c5ac125ba5ce70) feat(mcp): add OAuth redirect URI configuration for MCP servers (#21385) — _@egze_
- [`5d3dba6`](https://github.com/anomalyco/opencode/commit/5d3dba666ca5346510163881a3943a4608fe886d) release: v1.4.2 — _@opencode_
- [`bd53b65`](https://github.com/anomalyco/opencode/commit/bd53b651a305dd62ffbb5b5a333394df36bb20ab) refactor: fix tool call state handling and clean up imports (#21709) — _@thdxr_
- [`46da801`](https://github.com/anomalyco/opencode/commit/46da801f3066f253ac9ba78229add9931c7b48e1) refactor(effect): drop shell abort signals from runner (#21599) — _@kitlangton_
- [`58a9991`](https://github.com/anomalyco/opencode/commit/58a99916bb96edf5cf605dc03e1be1e4bacf9ff7) fix: preserve text part timing in session processor (#21691) — _@kitlangton_
- [`c29392d`](https://github.com/anomalyco/opencode/commit/c29392d0857f11208753bd95be76c6069c070289) fix: preserve interrupted bash output in tool results (#21598) — _@kitlangton_
- [`46f243f`](https://github.com/anomalyco/opencode/commit/46f243fea71c65464471fcf1f5a807dd860c0f8f) app: remove min loading duration (#21655) — _@Brendonovich_
- [`847fc9d`](https://github.com/anomalyco/opencode/commit/847fc9d2681129c44d432a7df256ac3b77f306f9) release: v1.4.1 — _@opencode_
- [`489f579`](https://github.com/anomalyco/opencode/commit/489f57974d55d6556dfa5ef7e9b94c06c7238908) feat: add opencode go upsell modal when limits are hit (#21583) — _@rekram1-node_
- [`3fc3974`](https://github.com/anomalyco/opencode/commit/3fc3974cbc5dba91e4df7bd64a6c03ae94cbdf41) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`ca57248`](https://github.com/anomalyco/opencode/commit/ca57248246ae90911be71519abb07113fddb8c93) chore: generate — _@opencode-agent[bot]_
- [`ee23043`](https://github.com/anomalyco/opencode/commit/ee23043d644d7b87c2834b09e4d1b372ae820611) Remove CLI from electron app (#17803) — _@Brendonovich_
- [`9c1c061`](https://github.com/anomalyco/opencode/commit/9c1c061b84cfc4b132faa9dc2e0de3a1e34d87dc) fix(lsp): remove CMakeLists.txt and Makefile from clangd root markers (#21466) — _@nonbanana_
- [`d82b163`](https://github.com/anomalyco/opencode/commit/d82b163e563de59b99b426bb58b8eea04cf26202) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`cd8e8a9`](https://github.com/anomalyco/opencode/commit/cd8e8a99281ed083b11cc23a6fa146011027e44e) feat(llm): integrate GitLab DWS tool approval with permission system (#19955) — _@vglafirov_
- [`8bdcc22`](https://github.com/anomalyco/opencode/commit/8bdcc22541e074be668093734fc3bcc4191dc705) refactor(effect): inline session processor interrupt cleanup (#21593) — _@kitlangton_
- [`2bdd279`](https://github.com/anomalyco/opencode/commit/2bdd279467632ab048c39c5dbaadee1ee33dc510) fix: propagate abort signal to inline read tool (#21584) — _@kitlangton_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
