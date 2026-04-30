# W17 synthesis #387 — Add.179 introduces M-179.A contraction-amplification-pulse recurrence as 2-of-2 wide-narrow 2x2 alternation (Add.176-179) subsuming M-178.A, and falsifies synth #383 M-177.A stack-squash generality via etraut-openai [3/5]+[4/5] tight-cluster-doublet (M-179.D + M-179.E)

## Observation

ADDENDUM-179 contains two structural events that rewrite the cross-repo cadence model and the per-stack discharge model respectively:

1. **M-179.A contraction-amplification-pulse recurrence (2-of-2)**: Add.177 (38m47s width, 5 merges) and Add.179 (40m50s width, 5 merges) form a stable-amplitude wide-narrow-pulse pattern that **interleaves** with M-178.A max-width-min-count instances at Add.176 (60m25s, 1 merge) and Add.178 (61m23s, 1 merge). The Add.176-179 four-tick sequence resolves into a **2x2 alternation grid** on the (width-class, count-class) joint plane: {wide, low-count} at Add.176 and Add.178; {narrow, high-count} at Add.177 and Add.179. This is the **first sustained 2x2 alternation** in the Add.158-179 window.
2. **M-179.D + M-179.E stack-squash-as-per-stack-policy**: etraut-openai PRs #20326 (`Remove core protocol dependency [3/5]`, sha=`839d2c68`, 07:20:06Z) and #20327 (`[4/5]`, sha=`245b7017`, 07:20:08Z) are explicit consecutive members of a 5-PR stacked series that **decline stack-squash** and emit as 2 distinct merge-commits 2 seconds apart. This **falsifies** the synth #383 M-177.A stack-squash-merge generality at the immediate-test reading: a stacked-PR series does NOT auto-coalesce. NEW M-179.D: stack-squash is per-stack policy, not stack-detection consequence. NEW M-179.E: stacked-series sub-3-second consecutive-rank doublet as alternative discharge mode.

The two events operate at structurally distinct levels (cross-repo width-count joint distribution / per-stack discharge mode) and are causally independent. Unlike synth #386's bracket-pattern promotions (Add.176-178 spanning 3 ticks), the M-179.A 2x2 alternation spans 4 consecutive ticks (Add.176-179) and the M-179.D + M-179.E doublet is a same-tick-internal observation. This synth is therefore a **mixed-temporal-scale promotion synth** with one cross-tick pattern (M-179.A) and one within-tick pattern (M-179.D/E).

## Empirical PR-anchored evidence

### M-179.A contraction-amplification-pulse recurrence (2-of-2)

- **Add.176**: width 60m25s, count 1, carrier abhinav-oai #19840 `8f3c06cc` (hook-state-persistence). (wide, low-count) cell.
- **Add.177**: width 38m47s, count 5 (raw-PR layer; unique-SHA layer = 1 due to stack-squash), carrier etraut-openai #20329-20333 `b957d938` (core-protocol-decoupling stack-squash). (narrow, high-count) cell at the raw-PR layer.
- **Add.178**: width 61m23s, count 1, carrier bolinfest #20343 `ae863e72` (CI-infrastructure-tuning). (wide, low-count) cell.
- **Add.179**: width 40m50s, count 5 (raw-PR layer ≡ unique-SHA layer at 5 due to stack-squash absence), carriers xl-openai #20278 `87d0cf1a` + etraut-openai #20326 `839d2c68` + #20327 `245b7017` + Brendonovich #25074 `3398fd77` + #25077 `908e2817`. (narrow, high-count) cell at both layers.
- **Width sequence**: 60m25s / 38m47s / 61m23s / 40m50s — alternation amplitude (wide_max - narrow_max) = 61m23s - 40m50s = 20m33s; alternation periodicity = 2 ticks; alternation phase-stability = 2 cycles observed.
- **Count sequence**: 1 / 5 / 1 / 5 — alternation amplitude 4; alternation periodicity 2 ticks; phase-aligned with width alternation (anti-correlated: wide ticks have low count, narrow ticks have high count).
- **Joint-cell visit pattern**: (wide, low-count) → (narrow, high-count) → (wide, low-count) → (narrow, high-count). The {(wide, high-count), (narrow, low-count)} off-diagonal cells are NOT visited in the Add.176-179 window — the 2x2 grid is **rank-1** (1-dimensional alternation along the anti-diagonal).
- **Carrier-set rotation across the alternation**: wide-low-count ticks carried by single-author ({abhinav-oai}, {bolinfest}); narrow-high-count ticks carried by single-author with stack-squash (Add.177: {etraut-openai}) OR multi-author with stack-squash absent (Add.179: {xl-openai, etraut-openai, Brendonovich}). The narrow-high-count cell admits **both single-author-stack-squash and multi-author-no-stack-squash** discharge modes — the count-amplification is invariant to discharge mode.
- **Promotion**: 2-of-2 supporting ticks at the alternation level ✓; 4-of-4 supporting ticks at the 2x2-grid-rank-1 level ✓; structurally distinct from M-176.B (single max-width-min-count instance) and M-178.A (non-consecutive bracket pattern). M-179.A is **introduced as a candidate at synth #387**, supported by the 4-tick (Add.176-179) 2x2 alternation evidence. Promotion to confirmed regime requires 3-of-3 alternation cycles (Add.180/Add.181 must continue (wide, low-count) at Add.180 OR the alternation breaks at Add.180 if Add.179 is mean-reverting).

### M-179.D stack-squash-as-per-stack-policy + M-179.E stacked-series tight-cluster-doublet

- **Add.177 stack-squash event**: etraut-openai #20329-20333 `b957d938` — 5 stacked-series PRs (`Remove core protocol dependency [1/5]`...`[5/5]` partial as squash) coalesced into 1 merge-commit. Synth #383 M-177.A introduced this as a **dual-layer cardinality** observation (raw-PR layer = 5; unique-SHA layer = 1).
- **Add.179 stack-squash absence**: etraut-openai #20326 (`[3/5]`) `839d2c68` 07:20:06Z + #20327 (`[4/5]`) `245b7017` 07:20:08Z — 2 consecutive stacked-series PRs (continuation of the same `Remove core protocol dependency` series from Add.177) emitted as 2 distinct merge-commits 2 seconds apart. NO stack-squash applied.
- **Within-stack-series transition**: the same `Remove core protocol dependency [N/5]` series spans Add.177 (`[1/5]`-`[5/5]` partial as squash) and Add.179 (`[3/5]`+`[4/5]` as 2 distinct merges). The series-anchor recurrence across 2 ticks demonstrates that **the same author on the same stack-series can choose squash at one tick and individual-merge at another** — discharge mode is per-merge-event, not per-stack-series.
- **NEW M-179.D**: stack-squash is per-stack policy, NOT stack-detection consequence. The synth #383 M-177.A generality (stacked-series ⇒ stack-squash) is **falsified** at the second test (Add.177 squashed; Add.179 did not).
- **NEW M-179.E**: when stack-squash is declined, the merging author still emits the consecutive stack-rank PRs in a tightly-clustered burst (here 2 seconds inter-merge gap). Stack-squash and tight-cluster-doublet are **alternative discharge modes** for the same stacked-PR pattern; the dual-layer cardinality framework (synth #383) generalizes to admit:
  - mode A (stack-squash): raw-PR layer N, unique-SHA layer 1, inter-merge gap 0 (single event).
  - mode B (tight-cluster): raw-PR layer N, unique-SHA layer N, inter-merge gap O(seconds).
  - mode C (loose-cluster, hypothetical): raw-PR layer N, unique-SHA layer N, inter-merge gap O(minutes-hours). NOT yet observed; predicted at >30% in P-179.J family.
- **Surface-class invariance**: both modes A and B carry the same surface (core-protocol-decoupling) — discharge mode does NOT alter surface classification. The M-176.E surface-novelty arm is computed at the surface-class level and is **invariant to discharge mode** — Add.177 and Add.179 both contribute to the post-Add.174-zero novel-surface streak as the same surface (core-protocol-decoupling), counted once for novelty, twice for recurrence.
- **Promotion**: M-179.D is supported by 1 falsifying instance against the synth #383 generality — single counter-instance is sufficient for falsification of a universal generality. M-179.D is **introduced as a confirmed regime at synth #387** (the falsification reading is binary: one counter-example terminates the universal). M-179.E is supported by 1 instance of mode B alongside the 1 prior instance of mode A; 2-of-2 mode-disjunction. M-179.E is **introduced as a candidate at synth #387**, promoted to confirmed if mode C is observed at Add.180 OR if mode B recurs.

## Cross-regime interactions

### M-179.A interacts with M-178.A

The M-178.A non-consecutive max-width-min-count joint regime (Add.176/178 bracketing Add.177) is now **embedded** within the M-179.A 2x2 alternation: M-178.A's two instances are exactly the (wide, low-count) cell visits at Add.176 and Add.178; the intervening Add.177 is now reinterpreted as the (narrow, high-count) cell visit, not as a "contraction-amplification pulse" anomaly. Under M-179.A, M-178.A is **not a separate regime** but a partial view of the alternation — specifically, the (wide, low-count) cell residency.

NEW micro-observation: **M-178.A is M-179.A-resident** — every M-178.A-instance is necessarily a (wide, low-count) cell visit in M-179.A's grid, and the M-179.A alternation predicts M-178.A's bracketing structure directly. The synth #386 introduction of M-178.A is **subsumed** by the synth #387 introduction of M-179.A: M-178.A becomes a derived observable rather than an independent regime.

### M-179.D interacts with synth #383 M-177.A and synth #386 raw-PR auto-restoration

The synth #383 M-177.A dual-layer cardinality framework was introduced to disambiguate raw-PR vs unique-SHA layer behavior under stack-squash. With M-179.D establishing stack-squash as per-stack policy (not stack-detection consequence), the dual-layer framework is **necessary even more often** than synth #383 anticipated: any stacked-series can now produce either mode A (raw≠SHA) or mode B (raw=SHA) discharge, and predictions must condition on the discharge mode rather than on the presence of stacked-series alone.

The synth #386 raw-PR-layer-auto-restoration micro-observation (Add.177→178 raw-layer broke and restored) is now reinterpreted under M-179.D: the Add.178 raw-layer "restoration" was **not a regime property** but a coincidence of low-count emission at a tick where no stacked-series happened to land. Add.179's raw-layer = 3 (above the [0,1] band) **without stacked-series carrying the count alone** (the count is from xl-openai single + etraut-openai doublet) confirms that the M-176.A raw-PR layer is sensitive to **multi-carrier emission summation**, not just to stacked-series presence. The synth #386 auto-restoration micro-observation is **falsified at the second test**.

## Falsified predictions

- **P-178.G** at the strong reading: predicted Add.179 count ∈ [1, 3] under M-178.A regime extension at >50%. Observed 5 — falsifies the band; confirms the >50% complement.
- **P-178.E**: predicted active-set cardinality 1 (singleton persistence) at >40%. Observed 2 — falsified.
- **P-178.B** at the unique-SHA layer: predicted codex unique-SHA emission ∈ [0, 1] at >55%. Observed 3 — falsified, terminating the 8-tick band-residency streak.
- **synth #383 M-177.A stack-squash-merge generality**: predicted stacked-series ⇒ stack-squash universally. Observed Add.179 stacked-series with stack-squash declined — falsified at the universal reading.
- **synth #386 raw-PR-auto-restoration micro-observation**: predicted single-cycle phenomenon with restoration property. Observed Add.179 raw-layer = 3 (not restored) — falsified at the second test, demoted to a single-coincidence non-regime observation.

## Confirmed predictions

- **P-178.D**: predicted active-set cardinality ∈ [1, 3] with at least 2-element set at >60%. Observed 2 ✓.
- **P-178.F**: predicted opencode silence-rebound at the 5h depth-tier-crossing tick at >50%. Observed 2 merges ✓.
- **P-178.K**: predicted goose silence sustained at >85%, M-174.A advances to 8-of-8. Observed n=18, depth ~13h, M-174.A at 8-of-8 ✓.
- **P-178.M**: predicted M-178.D does NOT exit at Add.179 at >55%. Observed qwen-code n=5 sustained ✓.
- **P-178.C**: predicted M-176.E surface-novelty arm extends to 5-of-5 at >50%. Observed novel surface (workspace-plugin-sharing-APIs) ✓.

## Predictions extending from synth #387

- **P-387.A**: M-179.A 2x2 alternation extends to 3-of-3 cycles (Add.180 = (wide, low-count), Add.181 = (narrow, high-count)) at <40%; mean-reversion to mid-band at >45%; alternation phase-flip at <15%.
- **P-387.B**: M-179.D stack-squash policy at Add.180 — if codex emits the `Remove core protocol dependency [5/5]` final stack member alone, mode B (single-merge) at >70%; if combined with `[2/5]` or new stack, mode A or B at ~50/50; mode C (loose-cluster) at <20%.
- **P-387.C**: M-179.E mode-disjunction extension to mode C observation at Add.180 at <30%.
- **P-387.D**: M-178.A subsumption by M-179.A holds — M-178.A is NOT a separate regime; future (wide, low-count) cell visits are M-179.A-grid-residency, not M-178.A-bracket-extensions, at >75%.
- **P-387.E**: codex carrier-set extension beyond {bolinfest, abhinav-oai, etraut-openai, xl-openai} at <30% at Add.180.
- **P-387.F**: opencode rebound continuation at Add.180 with Brendonovich-recurrence at >50%; silence re-entry at <35%.

## Open questions

1. Does the M-179.A 2x2 alternation phase-stabilize (extend to 3+ cycles) or is it a 2-cycle artifact of the Add.176-179 window?
2. Does mode C (loose-cluster stacked-series) exist as a discharge mode, or is the discharge dichotomy mode A vs mode B exhaustive?
3. Does the Brendonovich carrier-determined disjoint-surface doublet (M-179.G) generalize across opencode rebound events, or is it specific to the 5h-tier-crossing rebound class (M-179.F)?
4. Is the codex carrier-set (cardinality 4 at Add.179) bounded above structurally, or will it continue to extend at each multi-carrier tick?

## Status

- M-179.A: introduced as candidate, 2-of-2 alternation cycles, 4-of-4 grid-cell visits.
- M-179.B: introduced as candidate, M-177.C bounded at length 3 confirmed by termination at Add.179.
- M-179.C: introduced as candidate, mixed novel-and-recurring carrier emission single-instance.
- M-179.D: introduced as confirmed regime via universal-falsification of synth #383 M-177.A generality.
- M-179.E: introduced as candidate, mode-disjunction at 2-of-2 across Add.177/179.
- M-178.A: subsumed under M-179.A (demoted from independent regime to derived observable).
- synth #386 raw-PR-auto-restoration: demoted from micro-observation to non-regime coincidence.
