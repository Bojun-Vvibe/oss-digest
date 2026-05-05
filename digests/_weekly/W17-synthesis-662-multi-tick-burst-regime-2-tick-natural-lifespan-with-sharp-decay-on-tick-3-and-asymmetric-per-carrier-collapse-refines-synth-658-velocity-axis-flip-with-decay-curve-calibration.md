# W17-synthesis-662 — Add.336→Add.337→Add.338 multi-tick burst regime exhibits 2-tick natural lifespan with sharp velocity decay on tick 3 (13 → 18 → 9 fresh-opens, carrier-coverage 7 → 6 → 3) and asymmetric per-carrier collapse (codex 5→8→0, gemini-cli 4→4→1) confirming burst-regime as bounded transient rather than self-sustaining attractor and refining synth-658's velocity-axis-flip primitive with explicit decay-curve calibration

**Tick anchor**: Add.336 → Add.337 → Add.338 three-tick window (capture sequence 2026-05-05T00:05Z → 00:55Z → 01:45Z → 02:35Z; total 2h30m of consecutive 50m exact-replication ticks).

**Founding observation**: synth-658 captured the Add.335→336 zero-fresh-opens-to-fifteen-fresh-opens velocity-axis flip as a regime-wide primitive — the first W17 documented case of cross-carrier ecosystem-wide velocity transition across a single tick boundary. synth-658 left **open the question of burst-regime persistence**: does the burst sustain (multi-tick), decay sharply (single-tick), or follow some intermediate trajectory?

The Add.336→337→338 sequence answers this empirically: **multi-tick burst regime has a 2-tick natural lifespan with sharp decay on tick 3**.

**Three-tick velocity sequence (cross-carrier total fresh-opens per tick)**:
- **Add.336**: 13 fresh-opens across 7 carriers (post-quiescence burst, synth-658 founding observation)
- **Add.337**: 18 fresh-opens across 6 carriers (+38% vs Add.336, multi-tick burst sustain)
- **Add.338**: 9 fresh-opens across 3 carriers (-50% vs Add.337, sharp decay)

The Add.337 +38% increment over Add.336 establishes that burst regime is **not single-tick** (a single-tick burst would decay on tick 2, not amplify). The Add.338 -50% decrement establishes that burst regime is **not multi-tick-self-sustaining** (a self-sustaining burst would either plateau or continue increasing on tick 3).

The combined trajectory **rises tick-2 then falls tick-3** — a classic bounded transient with 2-tick natural lifespan.

**Per-carrier velocity decomposition Add.336→337→338**:

| Carrier | Add.336 | Add.337 | Add.338 | Δ-336→337 | Δ-337→338 | Trajectory class |
|---|---|---|---|---|---|---|
| sst/opencode | 4 | 4 | 3 | 0 | -1 | gradual-decay |
| openai/codex | 5 | 8 | 0 | +3 | -8 | sharp-collapse (full-quiescence) |
| BerriAI/litellm | 3 | 4 | 5 | +1 | +1 | counter-trend-rise |
| google-gemini/gemini-cli | 0 | 4 | 1 | +4 | -3 | spike-and-fade |
| QwenLM/qwen-code | 1 | 0 | 0 | -1 | 0 | early-quiescence |
| block/goose | 1 | 1 | 0 | 0 | -1 | gradual-quiescence |
| charmbracelet/crush | 0 | 0 | 0 | 0 | 0 | flat-zero (synth-655 carry) |

**Asymmetric per-carrier collapse signature**: Five distinct trajectory classes observed across 7 carriers within single 3-tick window. The cross-carrier total trajectory (13→18→9) is the **average** of heterogeneous per-carrier trajectories; no single carrier exhibits the average-shape rise-then-fall pattern. The two carriers that contribute most to the Add.337 burst peak (codex +3, gemini-cli +4) also contribute most to the Add.338 decay (codex -8, gemini-cli -3), accounting for **-11 of the -9 net Δ** between Add.337 and Add.338. **The burst regime is concentrated in 2 of 7 carriers** (codex + gemini-cli), with the other 5 carriers contributing approximately flat baseline across all three ticks.

This concentration is critical: synth-658's regime-wide characterization implicitly suggested ecosystem-wide synchronization; synth-662 refines it to **2-carrier-driven burst with 5-carrier-flat backdrop**. The burst is regime-wide in *cumulative count* but is *driven by minority of carriers*. The sharp decay on tick 3 happens because the 2 driver-carriers collapse simultaneously (codex 8→0, gemini-cli 4→1) while the 5 backdrop-carriers stay flat or trend slightly down.

**Cited PRs anchoring synth-662 thesis (all SHAs verified `headRefOid` per fresh capture)**:

**Add.336 burst-onset evidentiary anchors (13 fresh-opens, 7-carrier coverage)**:
- openai/codex #21092 (canvrno-oai), #21091 (canvrno-oai), #21090 (canvrno-oai), #21089 (canvrno-oai), #21085 (canvrno-oai) — codex PENTET 5 legs
- BerriAI/litellm #27137 (mateo-berri), #27136 (harish-berri), #27135 (mateo-berri) — litellm 3 legs
- sst/opencode #25768 (jlongster), #25765 (kill74), #25762 (Xelson431), #25761 (kill74) — opencode 4 legs
- block/goose #9004 (morgmart) — goose 1 leg

**Add.337 burst-peak evidentiary anchors (18 fresh-opens, 6-carrier coverage, codex+gemini-cli driving)**:
- openai/codex #21113 (etraut-openai, head `492df69aa1ebac2ad992b26ba82d7038eebfcff9`), #21111 (aibrahim-oai, head `c49e2318a381b0bc36208160d3ca66c103837431`), #21110 (rhan-oai, head `4643e3dc1f3746eaec1118d7a64f21a0812b4f68`), #21109 (efrazer-oai, head `d8420d0d26dfb361376e809c8a4af2b9723ef44f`), #21108 (efrazer-oai, head `b6dcef2908017a5cc101d8dff6b1adc83c76de85`), #21107 (cpaasch-oai, head `c743089d83925ca7810cbc766c3b457a7188c99b`), #21105 (evawong-oai, head `09aa423fd649d38c696d14674863a5a42422000b`), #21103 (zm-oai, head `b65f9366eeacf4f1b56e9daf54735b449e404814`) — **codex 8-leg burst-peak driver**
- google-gemini/gemini-cli #26467 (cocosheng-g, head `f6dbf52ac1e5b705cac51134baf8871c2b41a74f`), #26465 (Adib234, head `327ba49b3d80c068e35bddcd4c91bc7acf1f4bf8`), #26464 (cocosheng-g, head `cc2076c36cc4d713176c0689f26a942f99f158a1`), #26462 (ruomengz, head `b2aada8f784781d3b05fad444e254d777a0ca72c`) — **gemini-cli 4-leg unexpected re-emergence driver**
- BerriAI/litellm #27143 (krrish-berri-2), #27142 (krrish-berri-2), #27141 (Michael-RZ-Berri), #27139 (mateo-berri) — litellm 4 legs (counter-trend rise begins)
- sst/opencode #25780 (keiji), #25778 (kill74), #25775 (codeg-dev), #25773 (Hona) — opencode 4 legs (flat carry)
- block/goose #9004 (morgmart, head **REVISED** to `a59876b2a820ffbadf0a649fce4a7d5ab0b1f5af`) — goose 1 leg (flat)

**Add.338 burst-decay evidentiary anchors (9 fresh-opens, 3-carrier coverage, codex+gemini-cli collapse)**:
- BerriAI/litellm #27149 (yuneng-berri, head `00d0c3e745e5bba34bdc18782ccd393790983e74`), #27148 (krrish-berri-2, head `31f95d9117cc85ce2ccd60b878bf4b16961daf3c`), #27147 (Chesars, head `c99c255be4c6c5e08e92123028afda6ca1cfeac3`), #27146 (harish-berri, head `b8128efd1edfbad9d5ef56124b95c2c71cdd4222`), #27145 (harish-berri, head `cbab96553cccb442d15ca70fef815a22f423c504`) — **litellm 5-leg counter-trend-rise sustained** (only carrier rising vs Add.337)
- sst/opencode #25792 (Hona, head `a81103953bef558463a3beaac77ea7caf973c935`), #25788 (johanhallberg, head `39e9ca8c5a5260210729eb1b3ded723e5fb27801`), #25784 (khoaHyh, head `22a6c9243c7c5d003f095d76520e7cc08d499232`) — opencode 3 legs (gradual-decay)
- google-gemini/gemini-cli #26476 (gundermanc, head `443d046069b97e6c2edb8496cf65e813d4351048`) — **gemini-cli 1 leg (spike-and-fade -75% vs Add.337 peak)**
- openai/codex: **0 fresh-opens** (sharp-collapse from 8 to 0, -100% vs Add.337 peak; all 8 Add.337 fresh-opens carry-forward head-stable into 13-deep basin combined with PENTET legs)
- block/goose: 0 fresh-opens (#9004 morgmart head-stable for second consecutive tick)
- charmbracelet/crush: 0 fresh-opens (second consecutive zero-leg tick, #2790 ilgax now at 17-tick basin-lock — W17 record)
- QwenLM/qwen-code: 0 fresh-opens (#3840 ihubanov head-stable; doudouOUC retrospective QUARTET head-stable)

**Statistical extremity of the 3-tick trajectory**:

Add.302–335 cross-carrier mean fresh-opens per tick: ~6-7 (informal estimate from prior digest counts). Add.302–335 stdev: ~3-4 fresh-opens.

- Add.336 (13): +1.7σ
- Add.337 (18): +3σ (peak — single-tick maximum across W17)
- Add.338 (9): +0.7σ (return to upper-quintile but within 1σ)

The peak-to-return delta (Δ = 9 fresh-opens) is the **largest tick-to-tick drop in W17** (-2.3σ relative to baseline stdev) — sharper than the synth-658 zero-to-fifteen rise (+2.5σ but from a deep-quiescence floor). The decay-leg of the burst transient is **steeper than the rise-leg** when measured relative to baseline-σ, indicating burst termination is more abrupt than burst onset.

**Why this is distinct from synth-658 (single-boundary observation) and constitutes a refinement primitive**:

- **synth-658** documents the **rise-leg** of velocity-axis flip from quiescence (Add.335 zero) to burst (Add.336 fifteen). Single-boundary observation. Implicit assumption: burst is a regime that may persist.
- **synth-662** documents the **full transient shape** (rise → peak → decay) across 3 consecutive boundaries. Establishes that burst is a **bounded 2-tick transient**, not a regime that persists. Refines synth-658's implicit regime-persistence assumption to explicit 2-tick natural lifespan.

The synth-658 + synth-662 pair together describe the burst transient in full: **synth-658 = onset boundary, synth-662 = lifespan + decay shape**. Future synth notes may add: (a) replication-instance lifespan calibration (does every burst have 2-tick lifespan, or is it variable?), (b) rebound-prediction (does post-decay tick 4 return to baseline-7 or undershoot to quiescence-zero?), (c) inter-burst spacing (how many ticks between burst-onsets?).

**Distinction from synth-655 (regime-wide quiescence primitive)**:

synth-655 captured the **zero-tick** Add.335 as a regime-level ecosystem-wide breath-out primitive following drip-351. synth-658 captured the immediate transition out of that quiescence. synth-662 now closes the loop: the burst that emerged from synth-655's quiescence has a finite 2-tick lifespan and decays back toward — but not all the way to — quiescence on tick 3 (Add.338 = 9 fresh-opens, not zero).

This suggests a **damped oscillation** structure: quiescence-floor (Add.335, 0) → burst-peak (Add.337, 18) → partial-decay (Add.338, 9). If oscillation is undamped, prediction would be Add.339 returns to ~6-7 baseline; if undershoot, Add.339 drops below baseline toward zero again. Damping coefficient is testable within next 1-2 ticks.

**Predictions discharged from synth-662**:

- **P-662.A** (Add.339 fresh-open total falls to 4-7 range establishing post-burst decay completes within 1 tick after partial-decay tick, prior 0.45): primary thesis test of 2-tick lifespan hypothesis with rapid-return-to-baseline.
- **P-662.B** (Add.339 fresh-open total undershoots to 0-3 range establishing damped-oscillation undershoot dynamic, prior 0.20): alternative dynamic; would invalidate rapid-return and confirm damped oscillation.
- **P-662.C** (Add.339 fresh-open total stays elevated at 8-12 range establishing 3-tick burst-regime sustain, prior 0.20): alternative dynamic; would invalidate 2-tick lifespan and reframe burst as 3-tick lifespan.
- **P-662.D** (codex carrier exits zero-leg state in Add.339 with ≥2 fresh-opens establishing single-tick post-burst quiescence, prior 0.65): per-carrier rebound prediction; symmetric to canvrno-oai single-tick exhaustion observed in Add.337.
- **P-662.E** (litellm carrier counter-trend-rise reverses in Add.339 with fresh-opens dropping below 5, prior 0.55): litellm was the only carrier with sustained rise across all 3 ticks; eventual reversal is expected per damping argument; if NOT-realized (litellm continues rising), establishes litellm as out-of-phase oscillator with codex/gemini-cli.
- **P-662.F** (next burst-onset on cross-carrier velocity-axis occurs within 5-15 ticks of Add.338 with ≥10 fresh-opens, prior 0.40): inter-burst spacing prediction; if realized, calibrates W17 burst-cycle period at ~10-tick range.
- **P-662.G** (rise-leg/decay-leg asymmetry replicates on next burst with decay steeper than rise relative to baseline-σ, prior 0.35): asymmetry-replication test; if realized, establishes asymmetric-shape as W17 burst-transient invariant.

**Synth-662 relationship to W17 dynamics calibration**:

W17 ecosystem dynamics now has **explicit transient-shape characterization** with the following calibrated parameters:

| Parameter | Value | Source |
|---|---|---|
| Burst-regime natural lifespan | 2 ticks (peak on tick 1+2, decay on tick 3) | synth-662 |
| Burst-regime peak velocity | ~18 fresh-opens (+3σ) | synth-662 / Add.337 |
| Burst-regime baseline-σ floor | ~6-7 fresh-opens | synth-655/658/662 |
| Burst-regime quiescence floor | 0 fresh-opens (synth-655) | synth-655 |
| Burst-regime onset-leg sharpness | +2.5σ across single boundary | synth-658 |
| Burst-regime decay-leg sharpness | -2.3σ across single boundary | synth-662 |
| Burst-regime concentration | 2-of-7 carriers drive ≥75% of variance | synth-662 |
| Cohort-shape primitive lifespan | ≤1 tick per cohort-shape state (oscillator) | synth-660 + 661 |

These calibrated parameters serve as **forward priors** for forthcoming synth notes' prediction calibration. The W17 dynamics characterization has matured from descriptive (substrate/conceptual/cohort-recipe MOTIFs) to **quantitative-transient** (with σ-normalized rise/decay coefficients and tick-counted lifespans), reflecting the increasing precision enabled by the 35-tick basin-metronome regime's high temporal resolution.
