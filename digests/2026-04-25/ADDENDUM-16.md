# 2026-04-25 — Addendum 16

**Window:** 09:38Z → 10:39Z (continuation from Addendum 15, which closed at 09:38Z).

## codex (openai/codex)

- **[openai/codex#17393]** — refreshed 10:39:35Z by `xli-oai`, head SHA `041f6abb2b7d`. *"Unwrap PowerShell commands for exec policy."* Long-tail PR (created 2026-04-10, ~15 days). Exec-policy / Windows-shell surface. **Sole codex activity in window** — codex is otherwise dormant for the full 61-minute window. The cohort of fresh opens that defined the previous tick's codex profile (Addendum 15 had #19470/#19472 by `mchen-oai`/`viyatb-oai`) has fully gone quiet; only a single deep long-tail refresh remains. Codex velocity has effectively rotated *out* during this window.

## litellm (BerriAI/litellm)

- **[BerriAI/litellm#26499]** — OPENED 09:41:02Z, refreshed 09:44:49Z by `kiyeonjeon21`, head SHA `9f1e970a68d7`. *"fix(auth): join team-member budget so rpm/tpm limits are enforced."* **Third consecutive PR by `kiyeonjeon21` on the auth/budget surface** (after #26498 and the long-tail #25609 in Addendum 15). Open → first iteration ~3m47s. Surface family: rpm/tpm budget enforcement at the team-member join point.
- **[BerriAI/litellm#26419]** — refreshed 10:03:48Z by `MackDing` (`Blossom`), head SHA `3bc6dd699878`. *"fix(ui): add missing 'zai' (Z.AI / Zhipu AI) provider to Add-Model dropdown."* Mid-tail PR (created 2026-04-24, ~22h old). UI-dropdown / provider-registry surface. **Distinct surface family from kiyeonjeon21's triplet** — UI-registry vs auth-enforcement.
- **`kiyeonjeon21` author-burst extends to a TRIPLET** (#26498 09:16Z → #25609 09:24Z → #26499 09:41Z). Three PRs in ~25 minutes, all on the *budget enforcement* surface, but spanning three distinct sub-surfaces: cache-hit auth path (#26498), team_member_update write-path (#25609), and team-member rpm/tpm join (#26499). This is a **same-author multi-PR scope-split-across-sub-surfaces burst** — structurally identical to synthesis #61 (single-author multi-PR scope-split inside a multi-author surge cohort), except here `kiyeonjeon21` is *the entire cohort* — there is no surrounding surge. **Anchor for synthesis #77.**
- **`yuneng-berri` cascade**: still silent (~3h58m dormant). Litellm's open-velocity author is now *exclusively* `kiyeonjeon21` for the 2nd consecutive tick. The "litellm velocity baton handoff" pattern noted in Addendum 15 has hardened into single-author dominance.

## opencode (anomalyco/opencode)

**Five fresh opens + three closes in window — opencode's most active tick of the day.**

- **[anomalyco/opencode#24285]** — OPENED 10:09:48Z by `jeevan6996` (`Jeevan Mohan Pawar`), head SHA `8f9a70342e84`. *"fix(tui): add copy action for native question prompts."* TUI / question-prompt surface. **Same author who in this window also closed three long-tail PRs (#24118, #20769, #20773)** — i.e., closed three then opened a fresh fourth.
- **[anomalyco/opencode#24283]** — OPENED 09:51:00Z, refreshed 10:02:56Z by `baranwang` (`Baran`), head SHA `4d565998789f`. *"docs: add opencode-provider-alias to ecosystem."* Docs / ecosystem-registry surface. **Open → first iteration ~12m**. Title shape ("docs: add … to ecosystem") **identical structurally to long-tail #14591** (`manascb1344` *"docs: add new plugin opencode-mermaid-live to ecosystem"*, refreshed 10:09:49Z, ~63 days old).
- **[anomalyco/opencode#24279]** — OPENED 09:42:03Z, refreshed 10:06:43Z by `MrMushrooooom` (`Jack`), head SHA `6177759ca8e9`. *"fix(app): align usage chart with local timezone."* App / chart-rendering surface. Open → first iteration ~24m40s.
- **[anomalyco/opencode#24278]** — OPENED 09:42:02Z, refreshed 09:58:40Z by `aeroxy` (`Aero`), head SHA `6d89813432ac`. *"fix(provider): prevent duplicate OAuth requests to Google when using Vertex AI provider."* Provider / OAuth-deduplication surface. Open → first iteration ~16m38s. **Created within the same UTC second as #24279** (both `09:42:02Z` / `09:42:03Z`) — two distinct authors creating two distinct-surface PRs *within 1 second*.
- **[anomalyco/opencode#24118]** — CLOSED 09:53:01Z by `jeevan6996`. *"fix(config): avoid parseManagedPlist crash on non-object JSON."* Long-tail close (created 2026-04-24, ~26h old). Config-parser hardening surface.
- **[anomalyco/opencode#20769]** — CLOSED 09:54:21Z by `jeevan6996`. *"fix(opencode): tolerate wrapped workflow tool arguments."* Deep long-tail close (created 2026-04-03, ~22 days old). Workflow-tool argument-shape surface.
- **[anomalyco/opencode#20773]** — CLOSED 10:24:40Z by `jeevan6996`. *"fix(opencode): use session cwd for command substitution."* Deep long-tail close (created 2026-04-03, ~22 days old). Session-cwd / command-substitution surface.
- **[anomalyco/opencode#24222]** — refreshed 09:30:11Z by `thdxr` (Addendum 15 boundary); no further activity in this window. The maintainer-class `thdxr` activity has not continued.
- **[anomalyco/opencode#24053]** — refreshed 09:50:05Z by `fernandoenzo` (`Fernando Enzo Guarini`), head SHA `c749c9e3a678`. *"fix(tui): unsubscribe event listeners on component disposal."* Mid-tail PR (created 2026-04-23, ~2 days). TUI lifecycle / event-listener cleanup surface.
- **[anomalyco/opencode#23794]** — refreshed 09:50:39Z by `herjarsa`. *"feat(tool): add interactive terminal tool with persistent PTY sessions."* Mid-tail PR (created 2026-04-22, ~3 days). Tool / PTY-session surface.
- **[anomalyco/opencode#20467]** — refreshed 09:40:39Z by `kkugot`. (Continuation of Addendum 15's mention.)
- **[anomalyco/opencode#18767]** — refreshed 09:45:42Z by `noahbentusi`. *"feat(app): Mobile Touch Optimization."* Deep long-tail (created 2026-03-23, ~33 days).
- **[anomalyco/opencode#13854]** — refreshed 09:45:42Z by `mocksoul` (`Vadim Fint`). *"fix(tui): stop streaming markdown/code after message completes."* Deep long-tail (created 2026-02-16, ~68 days). TUI-streaming surface. **Refreshed in the same UTC second as #18767** — two deep long-tails refreshed simultaneously.
- **[anomalyco/opencode#14591]** — refreshed 10:09:49Z by `manascb1344`. *"docs: add new plugin opencode-mermaid-live to ecosystem."* Deep long-tail (created 2026-02-21, ~63 days). **Refreshed within 1 second of #24285's open by jeevan6996** (10:09:48Z vs 10:09:49Z).
- **opencode jeevan6996 batch-cleanup-then-open shape**: same author closes #24118 (09:53Z), #20769 (09:54Z), then opens #24285 (10:09Z), then closes #20773 (10:24Z). **Three closes + one fresh open by a single author within ~31 minutes**, spanning fresh (#24118, ~26h), deep (#20769, #20773 both ~22d), and net-new (#24285) PRs. This is a **single-author backlog-prune-with-injection pattern** — the author is *clearing their PR queue* and *opening fresh work in the middle of it*. Anchor for **synthesis #78.**
- **opencode multi-author within-second collision**: #24278 (`aeroxy`, OAuth-Vertex) and #24279 (`MrMushrooooom`, usage-chart timezone) both created 09:42:02–03Z — two distinct authors, two distinct surfaces, **single-second open-collision**. Distinct from synthesis #53 (simultaneous author stack burst) because surfaces are unrelated; this is a *coincidence* signal not a *cohort* signal.

## ollama (ollama/ollama)

- **[ollama/ollama#15208]** — refreshed 10:01:07Z by `mahendrarathore1742` (`Mahendra Singh Rathore`), head SHA `f35c1e2ebf43`. *"Add token usage for cloud model streaming (inject stream_options.include_usage)."* Long-tail PR (created 2026-04-02, ~23 days old). Token-usage / streaming-options surface. **Sole ollama activity in window** — `famasoon` Scheduler #15808 and `stationeros` create-blob-prune #15809 remain dormant since tick 14. Ollama leadership-handover to opencode now spans **3 consecutive ticks (14, 15, 16)**.

## cline (cline/cline)

- **[cline/cline#10404]** — OPENED 10:06:32Z, refreshed 10:09:34Z by `gerryqi` (`Gerry Qi`), head SHA `e83203a12b65`. *"feat(deepseek): deepseek-v4-pro supports reasoning effort control."* **First fresh open in cline since the `abliteration-ai` vendor-self-onboarding cluster**. Provider-integration surface (deepseek-v4-pro reasoning-effort knob). Open → first iteration ~3m02s. **`abliteration-ai` #10403 still silent** (~98m+ since last refresh) — the cadence-deceleration finding from Addendum 15 holds and now exceeds 90 minutes.

## continue / OpenHands / crush / browser-use

- **All silent in window.** crush dormancy now ~9h26m. OpenHands ~3h36m. continue + litellm `FuturMix` dual-PR coordination dormancy now ~9h+. browser-use no events in window (multi-day dormancy).

---

### What changed in window 09:38Z → 10:39Z (Addendum 16)

1. **`kiyeonjeon21` author-burst extends to a TRIPLET** (#26498, #25609, #26499 — all auth/budget surface, ~25 minutes). Confirms synthesis #75's "cross-temporal same-author doublet" framing was an *under-count* — the actual shape is a triplet spanning fresh + 13-day-old + fresh. Anchor for **synthesis #77** (single-author scope-split across sub-surfaces with no surrounding cohort).
2. **opencode `jeevan6996` batch-cleanup-with-injection**: same author closes 3 long-tail PRs (#24118, #20769, #20773) and opens 1 fresh PR (#24285) within ~31 minutes. **First observed instance of a single author doing backlog-prune + fresh-open injection in the same tick.** Anchor for **synthesis #78**.
3. **opencode 5-open / 3-close tick** — most active opencode tick of the day. Five fresh opens (#24277 from prior tick, #24278, #24279, #24283, #24285) by 5 distinct authors, plus 3 closes by `jeevan6996`. Sustained leadership now **3 consecutive ticks (14, 15, 16)** — synthesis #74's "post-release-window sustained leadership" framing continues to strengthen, and the "rotation cadence is sub-hourly" framing #74 originally proposed is now firmly **falsified for ≥3 consecutive ticks**.
4. **Codex velocity rotation-out**: codex had 4 fresh opens in Addendum 15 boundary (00:30Z burst) but **only 1 long-tail refresh in this window** (#17393 `xli-oai` PowerShell exec-policy). The codex tick-15 cohort (`mchen-oai`, `viyatb-oai`, `dylan-hurd-oai`, `fjord-oai`) has gone fully silent — no follow-up activity in 61 minutes.
5. **Single-second open-collision in opencode**: #24278 (`aeroxy`, OAuth-Vertex) and #24279 (`MrMushrooooom`, usage-chart timezone) both created at 09:42:02–03Z. Two distinct authors, two unrelated surfaces, sub-second arrival gap. **Coincidence signal**, not cohort signal — notable as a pure-randomness baseline observation against which "cohort" claims must be measured.
6. **Cross-repo author-set still has zero overlap**: tick-16 active authors (`xli-oai`, `kiyeonjeon21`, `MackDing`, `jeevan6996`, `baranwang`, `MrMushrooooom`, `aeroxy`, `fernandoenzo`, `herjarsa`, `kkugot`, `noahbentusi`, `mocksoul`, `manascb1344`, `mahendrarathore1742`, `gerryqi`) — **15 distinct authors across 5 active repos, zero cross-repo author overlap**. The cross-repo coupling-is-timing-only finding (synthesis #70) holds at unprecedented scale this tick.
7. **First non-zero merge attempt is still zero**: across the now 6 consecutive ticks (Addendums 11–16, ~213 continuous minutes), **zero merges** observed in the 9 tracked repos. The 3 closes in this window (#24118, #20769, #20773) were all `jeevan6996` self-closes (his own PRs), not maintainer merges. The open-vs-merge gap is now the longest of the day and growing monotonically.
8. **cline rotation-in begins**: first fresh cline open (#10404 `gerryqi` deepseek-v4-pro) since the `abliteration-ai` vendor-self-onboarding cluster. Cline had been dormant-except-for-one-vendor-self-iteration for ~3 ticks; the arrival of a new author on a new surface (provider-integration) breaks that pattern.
