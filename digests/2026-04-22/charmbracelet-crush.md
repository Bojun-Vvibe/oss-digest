# charmbracelet/crush — 2026-04-22

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-04-21T23:59:59.000Z → 2026-04-22T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

## v0.62.0 ships with drastically smaller system prompt

The headline today is the **v0.62.0 release**, which makes short tool descriptions the default — saving roughly **120k tokens per session** on average. The flip was landed via [#2679](https://github.com/charmbracelet/crush/pull/2679) (follow-up of #2592), which has been baking for two weeks. The old verbose behavior is still available via `CRUSH_SHORT_TOOL_DESCRIPTIONS=0`. This is especially impactful for local/small models, where system-prompt bloat was eating most of the context window.

Paired with that, [#2671](https://github.com/charmbracelet/crush/pull/2671) cuts the `fetch`/`view` truncation cap from ~1MB down to **100KB**, addressing session breakage on Kimi K2.5 and GLM 5 when large pages or JSON payloads are pulled in. Together these are the two changes most worth knowing about if you run Crush against smaller or budget-constrained models.

Other merged work: [#2619](https://github.com/charmbracelet/crush/pull/2619) mitigates stale LSP diagnostics, [#2680](https://github.com/charmbracelet/crush/pull/2680) updates the catwalk dependency to its new domain, and commit [7437d2b](https://github.com/charmbracelet/crush/commit/7437d2b830477f06cb8a84c12f779d54423ca300) silences a noisy warning about non-existent skill paths. PR [#2347](https://github.com/charmbracelet/crush/pull/2347) (capping the fetch tool at 50K tokens) and [#2639](https://github.com/charmbracelet/crush/pull/2639) (fetch→jq piping) were closed without merging — superseded by the truncation/short-description path.

New PRs worth tracking: [#2681](https://github.com/charmbracelet/crush/pull/2681) fixes "Untitled Session" when reasoning-capable small models burn their entire output budget on hidden reasoning during title generation (fixes #1189). [#2675](https://github.com/charmbracelet/crush/pull/2675) adds an `exit` alias, allows Unicode placeholders in user commands (e.g. `$数据目录`), and normalizes empty tool-call inputs. [#2674](https://github.com/charmbracelet/crush/pull/2674) proposes `APIURL`/`APIKEY` env overrides with `CRUSH_PROVIDER` targeting.

On the issues side, the most notable new report is [#2678](https://github.com/charmbracelet/crush/issues/2678): after upgrading 0.59→0.61, GitHub Copilot Claude Opus 4.7 hits `prompt token count of 288361 exceeds the limit of 168000` — possibly a Copilot-side limit change worth investigating before the next release. Smaller asks: a custom system prompt knob ([#2677](https://github.com/charmbracelet/crush/issues/2677)) and quieter "thinking" output ([#2672](https://github.com/charmbracelet/crush/issues/2672)).

## Releases

- **[v0.62.0](https://github.com/charmbracelet/crush/releases/tag/v0.62.0)** — v0.62.0 _by @github-actions[bot] at 2026-04-22T21:08:45Z_
  > # Crushing the system prompt and more
  > 
  > Hi! The big star of this release is a massively reduced system prompt. Read on for more!
  > 
  > ## Tool descriptions, now with 98% fewer tokens
  > 
  > You read that right. We made changes to our system prompt to vastly reduce how many tokens they use by default. On average, this should save around 120k tokens per session. This was announced on [v0.57.0](https://github.com/charmbracelet/crush/releases/tag/v0.57.0) as a preview feature, and now we're making it the defaul…


## Merged PRs

- [#2680](https://github.com/charmbracelet/crush/pull/2680) **chore: update catwalk to new domain** — _by @andreynering, merged 2026-04-22T19:08:23Z_
- [#2679](https://github.com/charmbracelet/crush/pull/2679) **fix: reduce token usage, use short tool descriptions by default** — _by @andreynering, merged 2026-04-22T13:33:04Z_
- [#2671](https://github.com/charmbracelet/crush/pull/2671) **fix: reduce `fetch` and `view` tools truncation size to 100KB** — _by @andreynering, merged 2026-04-22T13:32:49Z_
- [#2619](https://github.com/charmbracelet/crush/pull/2619) **fix(lsp): mitigate stale diagnostics** — _by @meowgorithm, merged 2026-04-21T21:34:20Z_
- [#2583](https://github.com/charmbracelet/crush/pull/2583) **feat(config): support `HYPER_API_KEY` for hyper auth** — _by @andreynering, merged 2026-04-09T17:59:42Z_
- [#2637](https://github.com/charmbracelet/crush/pull/2637) **ci: only run `build` and `lint` workflows once in pull requests** — _by @andreynering, merged 2026-04-16T21:07:06Z_
- [#2642](https://github.com/charmbracelet/crush/pull/2642) **fix(oauth): fix copy to clipboard on terminals that don't support osc52** — _by @andreynering, merged 2026-04-17T19:55:25Z_
- [#2659](https://github.com/charmbracelet/crush/pull/2659) **chore(deps): bump the all group with 2 updates** — _by @dependabot[bot], merged 2026-04-20T13:55:54Z_
- [#2607](https://github.com/charmbracelet/crush/pull/2607) **feat: generally render output that looks like a diff as a diff** — _by @meowgorithm, merged 2026-04-21T14:00:42Z_


## Open PRs (new or updated)

- [#2681](https://github.com/charmbracelet/crush/pull/2681) **fix(agent): retry title generation with large model on empty output** — _by @iuga, updated 2026-04-22T18:33:39Z_
- [#2598](https://github.com/charmbracelet/crush/pull/2598) _(draft)_ **feat: PreToolUse hook** — _by @meowgorithm, updated 2026-04-22T15:04:02Z_
- [#2652](https://github.com/charmbracelet/crush/pull/2652) **fix(grep): stop regex fallback after cancellation** — _by @lawrence3699, updated 2026-04-22T14:25:23Z_
- [#2590](https://github.com/charmbracelet/crush/pull/2590) **feat(notification): notify using osc sequences for ssh terminal** — _by @nghiant03, updated 2026-04-22T12:42:13Z_
- [#1669](https://github.com/charmbracelet/crush/pull/1669) **feat(config): load user-level context files** — _by @Amolith, updated 2026-04-22T11:47:35Z_
- [#2609](https://github.com/charmbracelet/crush/pull/2609) **feat(session): add `session export` command for markdown/JSON export** — _by @KeWang0622, updated 2026-04-22T11:30:33Z_
- [#2116](https://github.com/charmbracelet/crush/pull/2116) **fix(config): set Z.AI Coding Plan costs to zero** — _by @huaiyuWangh, updated 2026-04-22T11:29:19Z_
- [#2675](https://github.com/charmbracelet/crush/pull/2675) **Fix command aliases/args parsing and empty tool-call input normalization** — _by @axeprpr, updated 2026-04-22T11:27:59Z_
- [#2674](https://github.com/charmbracelet/crush/pull/2674) **config: support APIURL/APIKEY env overrides with CRUSH_PROVIDER targeting** — _by @axeprpr, updated 2026-04-22T10:56:18Z_
- [#2437](https://github.com/charmbracelet/crush/pull/2437) **feat(tui): display git branch** — _by @Gustave-241021, updated 2026-04-22T10:55:49Z_
- [#2613](https://github.com/charmbracelet/crush/pull/2613) **fix(agent): prune excess images from history to prevent session deadlock** — _by @iceymoss, updated 2026-04-22T05:07:04Z_
- [#2612](https://github.com/charmbracelet/crush/pull/2612) **feat(hooks): implement JSON-based compatibility layer and lifecycle hooks** — _by @gavmor, updated 2026-04-22T00:57:29Z_
- [#2449](https://github.com/charmbracelet/crush/pull/2449) **fix: Auto-detect Ollama and available models on startup** — _by @whatnick, updated 2026-04-22T00:26:26Z_


## Closed PRs (not merged)

- [#2347](https://github.com/charmbracelet/crush/pull/2347) **fix(tools/fetch): cap fetch tool at 50K tokens** — _by @meowgorithm, closed 2026-04-22T13:37:07Z_
- [#2639](https://github.com/charmbracelet/crush/pull/2639) **chore(jq,fetch): allow fetch to pass into jq, improve jq skill** — _by @meowgorithm, closed 2026-04-22T13:35:56Z_


## Notable Issues

- [#2676](https://github.com/charmbracelet/crush/issues/2676) **LM Studio somehow connects only to localhost:1234** — _by @BlackScorp_
- [#2677](https://github.com/charmbracelet/crush/issues/2677) **Custom System Prompt** — _by @BlackScorp_
- [#2463](https://github.com/charmbracelet/crush/issues/2463) **Allow ssh and remote-shell commands in --yolo mode** _[area: shell]_ — _by @vladon_
- [#2665](https://github.com/charmbracelet/crush/issues/2665) **404 via yay install** — _by @zigmoo_
- [#2633](https://github.com/charmbracelet/crush/issues/2633) **"invalid_request_error" in Kimi for Coding** _[provider: kimi]_ — _by @g-e-n-v_
- [#2678](https://github.com/charmbracelet/crush/issues/2678) **Github copilot Claude Opus 4.7: exceeded token limit.** _[provider: anthropic claude, provider: github copilot]_ — _by @jzandbergen_
- [#737](https://github.com/charmbracelet/crush/issues/737) **feat: add configurable keybindings to resolve terminal multiplexer conflicts** — _by @theanirudhvyas_
- [#149](https://github.com/charmbracelet/crush/issues/149) **Permission required pop up takes over and i can't read the context anymore** _[area: permissions, Migrated]_ — _by @hems_
- [#1703](https://github.com/charmbracelet/crush/issues/1703) **TUI display abnormal** — _by @jialanhu0915_
- [#241](https://github.com/charmbracelet/crush/issues/241) **Local providers in .crush.json are overridden by fur providers if named the same** _[Migrated]_ — _by @taigrr_ _(closed 2026-04-22T04:43:38Z)_
- [#2673](https://github.com/charmbracelet/crush/issues/2673) **Feature request: please support non-ascii param placeholder in user `COMMANDS`** — _by @Zim-Inn_
- [#2672](https://github.com/charmbracelet/crush/issues/2672) **Feature request: quieter thinking** — _by @tidux_


## Commits on `main`

- [`79e5a6f`](https://github.com/charmbracelet/crush/commit/79e5a6f17d0be8c900e89ee3523e87ce1df1b544) v0.62.0 — _@andreynering_
- [`7437d2b`](https://github.com/charmbracelet/crush/commit/7437d2b830477f06cb8a84c12f779d54423ca300) fix: silence unless warning about non-existent skill paths — _@andreynering_
- [`bbab2bc`](https://github.com/charmbracelet/crush/commit/bbab2bcbd45ead4033d57308d45ebd2b3191f382) chore: auto-update files — _@charmcli_
- [`7cc020b`](https://github.com/charmbracelet/crush/commit/7cc020b7d36eb4669d8f35c8eb857048e6f17775) chore: update catwalk to new domain (#2680) — _@andreynering_
- [`f6a8854`](https://github.com/charmbracelet/crush/commit/f6a885434d8727c35e8dc2331c2bbbfd630c6f82) chore(legal): @iuga has signed the CLA — _@charmcli_
- [`ebf0c1c`](https://github.com/charmbracelet/crush/commit/ebf0c1cfcfb852cd6a4b39a3c225035b018ea30f) chore(deps): update fantasy and catwalk — _@andreynering_
- [`b0b5c14`](https://github.com/charmbracelet/crush/commit/b0b5c140e8262a94b96e65ea98e735c1e8b1b1d2) chore: remove CODEOWNERS — _@andreynering_
- [`da33883`](https://github.com/charmbracelet/crush/commit/da3388385da340dcd94a2c73491e3152e8e4cacf) fix: reduce token usage, use short tool descriptions by default (#2679) — _@andreynering_
- [`4d7c55e`](https://github.com/charmbracelet/crush/commit/4d7c55e298c5bd7ce6733c23738d14b306edba04) test: re-record vcr cassettes — _@andreynering_
- [`9d555a7`](https://github.com/charmbracelet/crush/commit/9d555a70b64e33e1b0051cc237043d28f1f12f7c) fix: reduce `fetch` and `view` tools truncation size to 100KB — _@andreynering_
- [`9a20f78`](https://github.com/charmbracelet/crush/commit/9a20f785057a137a7d4d377fafaccee610180410) chore(legal): @axeprpr has signed the CLA — _@charmcli_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
