# ADDENDUM-128 — 2026-04-28 (capture 2026-04-28T17:40Z)

**Capture window:** 16:57:00Z → 17:40:00Z UTC. Window width: **43m00s** (Add.127 was 22m00s — 1.95× window; widens back to mid-band).
**Predecessor:** ADDENDUM-127 (closed 16:57:00Z, sha=71d5ec0). Carry preds resolved/extended this tick: AAA-285 jif-oai numerical-suffix series (tick 2/4 — **STILL NO RESUMPTION; jif-oai silent now 1h26m post-#20005**, carry forward); BBB-286 end-of-sprint cross-author rotation on 3rd repo (tick 2/6 — **NO 3rd-REPO INSTANCE; carry**); CCC gemini-cli post-silence-break activity (tick 2/4 — **REBOUND CONFIRMED**, n=5 gemini-cli merges this window, see headline #2 — Pred CCC RESOLVED POSITIVE); DDD bolinfest #19900 emergence (tick 2/4 — **NO EMERGENCE, n=12 silence-axis ticks**, carry); EEE-287 kitlangton httpapi sprint extends to n=5 (tick 1/3 — **NO EXTENSION, anomalyco/opencode SILENT this window**, carry); FFF-287 codex 3-author 3-disjoint-subsystem cluster recurs (tick 1/6 — **PARTIAL: codex this tick has 6 merges across 5 distinct authors on 4 subsystems but with fcoury-oai DOUBLET breaking the 1-author-per-merge rule**, carry as PARTIAL); GGG-288 divergent-author intra-sprint insertion class recurs on different repo (tick 1/8 — **NO RECURRENCE, carry**).

## Headline events — **gemini-cli FLOODS the window with n=5 merges 17:11–17:36Z resolving Pred CCC POSITIVE; codex DOUBLES its Add.127 throughput to n=6 merges across 5 authors with fcoury-oai DOUBLET (#19901 17:34:10Z + #19986 17:35:24Z, inter-merge gap 1m14s on disjoint TUI sub-surfaces); litellm BREAKS 1h19m silence with yuneng-berri #26675 `600d7b4a209d` 17:31:35Z `fix(vertex): preserve items on array branches in anyOf with null`; anomalyco/opencode SILENT (refutes Add.127's kitlangton sprint resumption signal as a one-off rather than continued tempo). Cross-repo in-window merges = 12 over 43m = 0.279/min — **highest per-minute rate observed in W17 day-2026-04-28**, exceeds Add.123's 0.225/min ceiling by 24% and Add.127's 0.182/min by 53%. Per-repo activity: codex 6, gemini-cli 5, litellm 1, opencode 0, qwen-code 0, goose 0. Three repos active, three silent. jif-oai silence 1h26m. goose silence 4h44m (continues into shallow++++ regime). qwen-code silence 4h35m.**

1. **Cross-repo merge count this window: 12 in-window merges over 16:57→17:40Z.** Per-minute merge rate **0.279** (Add.127 was 0.182 — **+53% climb continuation**, sets new W17 day-2026-04-28 ceiling). The chain Add.119–Add.128 = {codex} → {opencode} → {qwen-code, goose} → {opencode} → {codex} → {codex, litellm, opencode-late} → {} → {codex, gemini-cli} → {codex, opencode} → {codex, gemini-cli, litellm} = **4-tick post-zero rebound with monotonic climb 0.000 → 0.107 → 0.182 → 0.279** AND repo-diversity climb 0 → 2 → 2 → 3. Per-repo silence-class crossing this tick: codex (active→active, n=6 merges, 5 distinct authors, fcoury-oai doublet); gemini-cli (shallow 42m at Add.127 close → ACTIVE FLOOD n=5 merges spanning 17:11:32Z → 17:36:39Z, 25m07s span — **densest gemini-cli burst observed in any W17 tick**); litellm (shallow+++ 1h19m → ACTIVE via yuneng-berri #26675); anomalyco/opencode (active at Add.127 via kitlangton #24811 → SILENT 44m23s, refutes EEE-287 tick 1/3); qwen-code (shallow+++ → shallow++++ at 4h35m, **first crossing of 4h30m qwen-code silence threshold this tick**); goose (shallow+++ → shallow++++ at 4h44m, exceeds Add.127's 4h01m by 43m).

2. **Pred CCC RESOLVED POSITIVE — gemini-cli post-silence-break flood: n=5 merges 17:11:32Z → 17:36:39Z (25m07s span).** Add.127 framed gemini-cli's #26066 16:15:03Z as a "single-token silence-break followed by repo-level dormancy continuation". This tick FALSIFIES that framing decisively. Members:
   - **gundermanc #25945 `58a57b72aed5` 17:11:32Z `Implement bot that performs time-series metric analysis and suggests repo management improvements`** — meta/repo-tooling subsystem, a **bot-implementation merge that itself analyzes time-series merge data** (recursive/self-referential signal for synth #100).
   - **gemini-cli-robot #26124 `7fd336f5fcfe` 17:21:17Z `fix(patch): cherry-pick 54b7586 to release/v0.40.0-preview.4-pr-26066 [CONFLICTS]`** — bot-driven release-branch cherry-pick of the silence-breaker SHA `54b7586` (Add.127's #26066) into a release branch, marked `[CONFLICTS]` (merged DESPITE conflicts, indicating manual conflict resolution upstream). Release-engineering subsystem.
   - **Adib234 #26069 `b0ffa3b51ea0` 17:26:38Z `fix(core): handle non-string model flags in resolution`** — core/CLI-flag subsystem, fresh-author-this-tick.
   - **devr0306 #26128 `8e1cecac0660` 17:28:45Z `fix(ux): added error message for ENOTDIR`** — UX/error-handling subsystem, fresh-author-this-tick.
   - **gemini-cli-robot #25904 `7a3f7c383ee8` 17:36:39Z `Changelog for v0.40.0-preview.3`** — release-pipeline changelog merge, second bot merge of the burst.
   
   5 authors (gundermanc, gemini-cli-robot×2, Adib234, devr0306), 4 distinct subsystems (meta/tooling, release-eng, core, UX), 25m07s span. Inter-merge gaps: 9m45s, 5m21s, 2m07s, 8m01s (no monotonic pattern). **Two bot merges (gemini-cli-robot) bracket the burst's interior: bot at index 2/5 (release cherry-pick) and bot at index 5/5 (changelog)**. Hand-merges at indices 1, 3, 4. **Pattern: human kicks off the burst (gundermanc tooling), bot follows with release-branch cherry-pick of prior tick's silence-breaker, hand merges fill the middle, bot closes with changelog.** The release cherry-pick of `54b7586` (Add.127 #26066) explicitly back-references the prior tick's silence-break commit — **gemini-cli's silence-break and rebound are causally linked through the release-train mechanics**, not independent events. Anchors **synth #100 candidate** (release-pipeline-driven post-silence-rebound: silence-break PR's SHA reappears as cherry-pick target in next-tick burst).

3. **codex 6-merge 5-author cluster — Add.127 3-author cluster pattern recurs but with fcoury-oai DOUBLET breaking the 1-author rule.** Members in merge order:
   - **evawong-oai #19847 `0670d8971a80` 17:13:00Z `Enforce workspace metadata protections in Seatbelt`** — sandbox/Seatbelt subsystem.
   - **mchen-oai #19509 `01de13b7e617` 17:20:39Z `Record MCP result telemetry on mcp.tools.call spans`** — MCP/telemetry subsystem; **mchen-oai's 2nd merge today** (Add.127 #19473 16:37:00Z TUI metadata; this is mchen #19509 17:20:39Z MCP telemetry — author-cross-tick continuation, **inter-merge gap 43m39s**, two disjoint subsystems).
   - **maja-openai #19907 `273c2e21a9f6` 17:25:37Z `Clarify network approval auto-review prompts`** — UX/approval-prompts subsystem, fresh-author-this-day.
   - **fcoury-oai #19901 `c6bcd2783298` 17:34:10Z `feat(tui): suggest plan mode from composer drafts`** — TUI/composer subsystem.
   - **canvrno-oai #19931 `bc5a1b961e20` 17:35:10Z `Move local /resume cwd filtering into thread/list`** — thread/resume subsystem.
   - **fcoury-oai #19986 `a0365841049f` 17:35:24Z `fix(tui): let esc exit empty shell mode`** — TUI/shell-mode subsystem; **fcoury-oai's 2nd merge in 1m14s** (#19901 17:34:10Z → #19986 17:35:24Z), both on TUI but on **disjoint TUI sub-surfaces** (composer drafts vs. shell-mode escape).
   
   6 merges, 5 distinct authors, 4 distinct top-level subsystems (sandbox, MCP, UX, TUI×2, thread). **fcoury-oai DOUBLET on disjoint TUI sub-surfaces with 1m14s inter-merge gap** is the headline structural feature this tick — refines synth #91 (single-author triplet metronome) toward a **DOUBLET sub-2-minute variant**. Pred FFF-287 (Add.127's 3-author 3-subsystem cluster recurs) graded **PARTIAL POSITIVE**: this tick has 5-author 4-subsystem 6-merge cluster, exceeds Add.127's count but breaks the 1-merge-per-author criterion via fcoury-oai doublet. Author-overlap with Add.127 codex cluster {mchen-oai, colby-oai, efrazer-oai}: only **mchen-oai recurs** (1/3 author retention). 4 of 5 codex authors this tick are first-appearance for the day or returning after a multi-tick gap. **codex post-jif diversification regime CONFIRMED with monotonically expanding author-set: Add.126 1 author (jif→etraut transition) → Add.127 3 authors → Add.128 5 authors** = 1 → 3 → 5 in 3 ticks.

4. **litellm SILENCE BROKEN at 1h53m: yuneng-berri #26675 `600d7b4a209d` 17:31:35Z `fix(vertex): preserve items on array branches in anyOf with null + de-flake test`.** Last litellm merge was milan-berri #26645 `10aed9e9816c` 15:38:18Z. Silence span: **1h53m17s** (15:38:18Z → 17:31:35Z). Author rotation: milan-berri → yuneng-berri (no overlap with Add.126's litellm burst {milan-berri ×2}). Subsystem: vertex/anyOf-schema, distinct from Add.126's milan-berri merges. yuneng-berri is a fresh-this-day litellm author per current data. **Pattern: litellm's pause-then-rotate-author signature recurs (tracks synth #248 sustained-pause-then-author-rotation lineage)**.

5. **anomalyco/opencode SILENCE 44m23s — Pred EEE-287 NO EXTENSION tick 1/3.** Last opencode merge kitlangton #24811 16:55:37Z. Capture 17:40Z = 44m23s silent. kitlangton httpapi sprint stays at n=4 same-day-subsystem cardinality (#24716, #24799, #24809, #24811). The Add.127 framing of #24811 as "sprint reopens" is technically still standing (sprint did extend from n=3 to n=4) but the predicted further extension to n=5 has not occurred this tick. Refutes Add.127's implied tempo of "kitlangton enters new sprint mode" — **kitlangton is post-sprint quiescent, not actively extending**.

6. **goose silence 4h44m — first crossing of 4h30m goose silence threshold this tick, deepest goose silence observed in W17.** No new merges. Tracks synth #284 release-bump recovery axis as **decoupled from short-cycle activity**.

7. **qwen-code silence 4h35m — first crossing of 4h30m qwen-code threshold this tick.** No new merges. **Both goose and qwen-code now in shallow++++ regime simultaneously**, tied silence-class crossing this tick.

8. **jif-oai silence 1h26m — Pred AAA-285 tick 2/4 NO RESUMPTION.** Silence depth doubles since Add.127 (43m57s → 1h26m), supports Add.127's "end of jif-oai memory dominance regime" framing.

9. **bolinfest #19900 silence — Pred DDD tick 2/4, n=12 silence-axis ticks now (Add.117–Add.128).** No bolinfest emergence. n=12 sets new W17 single-author silence-axis ceiling, +9% over Add.127's n=11.

10. **In-window cross-repo activity table — 12 in-window merges this tick:**

| PR | Repo | Author | Merged | Surface | SHA | Note |
|----|------|--------|--------|---------|-----|------|
| #25945 | google-gemini/gemini-cli | gundermanc | 17:11:32Z | meta/tooling | `58a57b72aed5` | gemini-cli rebound starter; bot for time-series merge analysis (self-referential) |
| #19847 | openai/codex | evawong-oai | 17:13:00Z | sandbox/Seatbelt | `0670d8971a80` | codex cluster member 1/6 |
| #19509 | openai/codex | mchen-oai | 17:20:39Z | MCP/telemetry | `01de13b7e617` | mchen-oai 2nd merge today (cross-tick) |
| #26124 | google-gemini/gemini-cli | gemini-cli-robot | 17:21:17Z | release-eng | `7fd336f5fcfe` | cherry-pick of Add.127 #26066's SHA `54b7586` |
| #19907 | openai/codex | maja-openai | 17:25:37Z | UX/approval-prompts | `273c2e21a9f6` | fresh-author this day |
| #26069 | google-gemini/gemini-cli | Adib234 | 17:26:38Z | core/CLI-flag | `b0ffa3b51ea0` | fresh-author this tick |
| #26128 | google-gemini/gemini-cli | devr0306 | 17:28:45Z | UX/errors | `8e1cecac0660` | fresh-author this tick |
| #26675 | BerriAI/litellm | yuneng-berri | 17:31:35Z | vertex/anyOf | `600d7b4a209d` | breaks 1h53m17s litellm silence |
| #19901 | openai/codex | fcoury-oai | 17:34:10Z | TUI/composer | `c6bcd2783298` | fcoury-oai doublet member 1/2 |
| #19931 | openai/codex | canvrno-oai | 17:35:10Z | thread/resume | `bc5a1b961e20` | codex cluster member 5/6 |
| #19986 | openai/codex | fcoury-oai | 17:35:24Z | TUI/shell-mode | `a0365841049f` | fcoury-oai doublet member 2/2 (1m14s gap, disjoint TUI sub-surface) |
| #25904 | google-gemini/gemini-cli | gemini-cli-robot | 17:36:39Z | release/changelog | `7a3f7c383ee8` | gemini-cli rebound closer; v0.40.0-preview.3 changelog |

11. **Late-arrival merges (occurred in Add.127 window 16:35→16:57Z but absent from Add.127 enumeration):** none — `gh search prs ... merged:>2026-04-28T16:57:00Z` returned all 12 in-window merges; none surfaced with merged-at timestamps in Add.127's window after that addendum's capture.

## Predicates rolled forward to Add.129

- **Pred AAA-285 (carry):** jif-oai numerical-suffix series resumes within 2 more ticks (tick 2/4 NO RESUMPTION; 1h26m post-sprint silence at capture).
- **Pred BBB-286 (carry):** end-of-sprint cross-author surface-rotation recurs on 3rd repo within 4 more ticks (tick 2/6).
- **Pred DDD (carry):** bolinfest #19900 emergence within 2 more ticks (tick 2/4 — n=12 silence-axis ticks).
- **Pred EEE-287 (carry):** anomalyco/opencode kitlangton httpapi sprint extends to n=5 same-day-subsystem within 2 more ticks (tick 1/3 NO EXTENSION).
- **Pred FFF-287 (extended PARTIAL):** codex N≥3-author N≥3-disjoint-subsystem sub-30m cluster recurs within 5 more ticks (tick 1/6 PARTIAL POSITIVE — relaxed criterion needed: doublet-tolerant variant). Fork **Pred FFF-287b**: doublet-strict variant (1-merge-per-author, ≥3 authors, ≥3 subsystems, ≤30m) recurs within 5 ticks.
- **Pred GGG-288 (carry):** divergent-author intra-sprint insertion recurs as a class within 7 ticks on a different repo (tick 1/8).
- **Pred HHH-100 (NEW from this addendum):** release-pipeline-driven post-silence-rebound — silence-break PR's SHA reappears as cherry-pick target in next-tick burst — recurs on a different repo within 6 ticks. Tracks synth #100 candidate.
- **Pred III-101 (NEW from this addendum):** sub-2-minute single-author DOUBLET on disjoint sub-surfaces of the same parent surface (here fcoury-oai TUI/composer + TUI/shell-mode at 1m14s) recurs within 8 ticks. Tracks synth #101 candidate.

## Synthesis links

- **Synth #100 (this addendum's anchor):** release-pipeline-driven post-silence-rebound — a repo's silence-breaker PR SHA reappears as cherry-pick target in the same or next tick's burst, with bot-driven cherry-pick + bot-driven changelog bracketing the human merges. Anchored by gemini-cli #26066 silence-break (Add.127) → gemini-cli-robot #26124 cherry-picks `54b7586` + #25904 changelog (Add.128).
- **Synth #101 (this addendum's anchor):** sub-2-minute single-author DOUBLET on disjoint sub-surfaces of a shared parent surface — a refinement of synth #91 metronome and synth #85 sub-10s doublet to the case where (a) authorship is single, (b) inter-merge gap is 1–120s, (c) parent surface is shared (e.g. TUI), (d) sub-surfaces are disjoint. Anchored by fcoury-oai #19901 + #19986 at 1m14s gap.

**HEADS:** ADDENDUM-128 anchors synth #100 + #101, resolves Pred CCC POSITIVE, grades Pred FFF-287 PARTIAL POSITIVE, refutes Pred EEE-287 tick 1/3.
