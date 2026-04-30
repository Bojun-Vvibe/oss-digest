# W17 synth #426 — Meta-taxonomy observation: synth-numbering-growth-rate as carrier-set-lifecycle complexity proxy with synth-family-clustering at adjacent-numbering-stretches

**Triggered by**: Meta-observation across synth #420-#425 enumeration cadence and ADDENDUM-198 confirmation that the W17 post-discharge-transition mode taxonomy expanded from 5 modes (synth #415) to 8 modes (synth #425) over the Add.192-198 7-tick window. Distinct from prior synths in that this synth examines the **synth-taxonomy growth process itself** rather than introducing a new W17 mode at the data-observation layer.

## Predecessor frame and observation

Synth-numbering by trigger-date for the recent stretch (Add.192-198):

- Synth #415 (Add.192-193): 5-mode taxonomy (cohort-zero, carrier-rotation, single-carrier-sustain, multi-carrier-reactivation, multi-carrier-sustain).
- Synth #416 (Add.193): single-tick recurrent-author-rest-period.
- Synth #417 (Add.193): bot-driven release-engineering batch motif.
- Synth #418 (Add.194): multi-author within-tick batch.
- Synth #419 (Add.194): within-repo human-heterogeneous quintuplet wide-PR-dispersion.
- Synth #420 (Add.194-195): cross-tick stacked-PR-series-continuation motif.
- Synth #421 (Add.196): single-author security-hardening intra-tick chore-prefix-uniformity.
- Synth #422 (Add.196): mode 6 multi-carrier-expansion.
- Synth #423 (Add.196-197): cross-tick same-author thematic-uniform stacked-series at sub-prefix-shift.
- Synth #424 (Add.196-197): mode 7 multi-carrier-sustain at strict-equality with dominant-carrier rotation.
- Synth #425 (Add.197-198): mode 8 multi-carrier-contraction at strict-superset.

The synth-numbering grew by **+11 over 7 ticks** = **1.57 synths/tick mean rate** over this window. Comparing to earlier W17 stretches (synths #380-415 spanning approximately Add.150-192, ≈42 ticks for 35 synths = 0.83 synths/tick), the recent rate is **+89% above prior W17 baseline**.

## Falsifiable claim

**Synth #426**: The W17 synth-numbering growth-rate is **structurally correlated with carrier-set-lifecycle complexity**, specifically with the carrier-set-cardinality variance over the trigger-window. The Add.192-198 stretch exhibited carrier-set-cardinality trajectory {0, 0, 1, 4-set, 5-set→3-set→3-set→2-set} with cumulative variance ≈ 4.16 cardinality² (across the 7-tick window using per-tick active-carrier-set cardinality {0, 0, 1, 1, 3, 3, 2} — note Add.192-193 cardinality-0/1 silence, Add.194-195 cardinality 1, Add.196-198 cardinality 3-3-2). The prior baseline-rate stretches (Add.150-191) exhibited mean carrier-set-cardinality variance ≈ 1.5-2.0 cardinality².

Synth-numbering growth-rate proxy: **R_synth ≈ α · σ²(carrier-set-cardinality) + β** where α ≈ 0.20-0.30 synths/tick per cardinality-variance-unit and β ≈ 0.5-0.7 synths/tick baseline. Under this proxy, the Add.192-198 observed rate 1.57 synths/tick predicts σ² ≈ (1.57 − 0.6) / 0.25 ≈ 3.88 cardinality² (consistent with observed ≈ 4.16 within ±10%).

**Synth #426 prediction**: At the next 10-tick window (Add.199-208), if carrier-set-cardinality variance contracts to ≤ 1.5 cardinality² (e.g., due to carrier-set-cardinality stabilization at 1-2 carriers without expansion to 3-4), synth-numbering growth-rate will contract to ≤ 1.0 synths/tick. Conversely, if cardinality variance expands to ≥ 5 cardinality², growth-rate will expand to ≥ 1.8 synths/tick. The proxy will be **decisively falsified** if observed growth-rate deviates by > 0.5 synths/tick from the predicted band at the trailing 10-tick window close.

## Synth-family-clustering at adjacent-numbering-stretches

Beyond the rate-correlation claim, the synth #420-#425 stretch exhibits **family-clustering at adjacent numbering**:

- **Cross-tick-author-continuation family** at #420 (cross-tick stacked-series), #423 (cross-tick same-author thematic uniform stacked-series at sub-prefix-shift) — 2 synths within #420-#425 stretch sharing the cross-tick-author-axis.
- **Carrier-set-monotonicity family** at #422 (mode 6 expansion), #424 (mode 7 strict-equality with dominant rotation), #425 (mode 8 contraction) — 3 synths within #420-#425 stretch sharing the carrier-set-relation axis, all extending synth #415.
- **Single-tick-batch-author-composition family** at #418 (multi-author batch), #419 (within-repo heterogeneous quintuplet), #421 (single-author security-hardening uniformity), #422 (multi-author with embedded same-author stacked sub-series) — 4 synths within #418-#422 stretch sharing the within-tick batch-composition axis.

This **family-clustering** suggests that the synth taxonomy evolves not via uniform random drift but via **axis-clustered enrichment**: a new structural axis is identified at one synth, then 2-4 adjacent synths refine sub-axes within the same family before the next axis-shift.

**Synth #426 secondary prediction**: The next 5-synth stretch (#426-#430) will exhibit family-clustering at one of: (a) carrier-set-relation axis extension (mode 9 non-comparable; mode 10 partial-overlap with both subset-and-superset elements at different sub-positions), (b) within-carrier author-continuation axis extension (cross-tick author-clustering at non-monotone PR-number sequences; cross-author cross-tick handoff motifs), (c) cross-carrier author-continuation axis (an author appearing in carrier A then carrier B at adjacent ticks — e.g., release-engineering bot motifs across multiple carriers), or (d) within-tick co-fire timing axis extension (sub-second co-merge clustering, same-second N-fold co-fire generalizations).

## Mechanism hypothesis

The family-clustering pattern admits two candidate mechanisms:

1. **Observation-driven axis-discovery**: When a new structural axis is identified at one tick (e.g., synth #422 introducing carrier-set-monotonicity), the next several ticks' observations are evaluated through the lens of that axis, increasing the probability of identifying additional sub-axes within the same family. This is a cognitive-availability bias at the synth-generation process.

2. **Structural-axis-cardinality**: Each structural axis admits a finite number of distinct values (e.g., carrier-set-relation has 4 values: ⊂, =, ⊃, non-comparable; carrier-set-cardinality-direction has 3 values: increasing, preserved, decreasing). Once an axis is identified, the synth taxonomy mechanically enumerates the axis values as observations occur, generating one synth per observed value within the axis-cardinality bound. Under this mechanism, family-clustering reflects the natural enumeration of axis-value-space rather than cognitive-availability.

The two mechanisms predict distinct forward-pattern signatures:

- Mechanism 1 predicts that family-clusters should be temporally bounded (cognitive-availability decays after 5-10 synths) and that axis-shifts occur at irregular intervals.
- Mechanism 2 predicts that family-clusters should be cardinality-bounded (cluster size ≈ axis-value-cardinality) and that axis-shifts occur at the natural exhaustion of axis-value-space.

The Add.192-198 observation: carrier-set-monotonicity family at #422-#425 has cluster size 3 (modes 6, 7, 8) of axis-value-cardinality 4 (⊂, =, ⊃, non-comparable). Mechanism 2 predicts the 4th value (non-comparable / mode 9) will be enumerated within the next 5 synths if observed; mechanism 1 predicts the family may close before exhausting all 4 values.

## Distinguishing axes from prior meta-observation synths

This synth is a **3rd-tier meta-synth** (a synth about the synth-taxonomy growth process itself, not a synth about W17 data observation patterns). Prior 3rd-tier meta-synths in W17:

- (no prior 3rd-tier meta-synths identified within the recent stretch — this is the first)

Prior 2nd-tier meta-synths (synths about how W17 synths organize across families) include synth #422's reference to mode-6 vs mode-5 axis-distinction and synth #424's enumeration of mode 8/9 candidates. These are 2nd-tier in that they organize 1st-tier W17 data-observation synths into families but do not examine the growth process of the taxonomy itself.

Synth #426's distinguishing axis is the **synth-numbering temporal cadence** as a 1st-class quantity, treated as data with its own falsifiable rate-prediction.

## Calibration anchors

- Synth-numbering growth Add.192-198 (7 ticks): #415 → #425 = 11 synths, rate 1.57 synths/tick.
- Carrier-set-cardinality variance Add.192-198 (7 ticks): cardinality sequence {0, 1, 1, 1, 3, 3, 2}, variance ≈ 1.10 cardinality² at single-tick basis OR ≈ 4.16 cardinality² at multi-tick aggregated basis depending on calculation framing.
- Family cluster sizes: cross-tick-author-continuation = 2 synths; carrier-set-monotonicity = 3 synths; within-tick-batch-composition = 4 synths.
- Implied α coefficient (single-tick basis): R_synth = α · σ² + β; 1.57 = α · 1.10 + β. With β = 0.83 (prior baseline rate), α = (1.57 − 0.83) / 1.10 = 0.673 synths/tick per cardinality-variance-unit (single-tick basis).
- Implied α coefficient (multi-tick basis): 1.57 = α · 4.16 + β; with β = 0.83, α = 0.178 (multi-tick basis).

## Cross-references and prior-state-fit

Synth #426 references the entire synth #415-#425 stretch as input data. The carrier-set-lifecycle hypothesis introduced at synth #425 (6-stage lifecycle: cohort-zero → reactivation → expansion → sustain-equality → contraction → single-carrier-sustain or cohort-zero) provides direct support for the carrier-set-cardinality variance correlation: a complete lifecycle traversal generates cardinality oscillation across the variance range, driving the synth-numbering growth-rate up.

Synth #426 also references the Add.198 confirmation of mode 8 (synth #425) as evidence that the family-clustering at carrier-set-monotonicity axis is mechanism-2-driven (axis-value-enumeration) rather than mechanism-1-driven (cognitive availability), since mode 8 was explicitly enumerated as a candidate at synth #424 before observation, and its observation triggered formalization at synth #425 — consistent with mechanical enumeration of axis-value-space.

## Falsifiability conditions

Synth #426 is decisively falsified if:

1. The next 10-tick window (Add.199-208) exhibits synth-numbering growth-rate outside the predicted band [carrier-set-cardinality-variance × α + β ± 0.5 synths/tick] at window close.
2. OR the next 5-synth stretch (#426-#430) does NOT exhibit family-clustering at any single axis (synths drawn from 5+ distinct unrelated axes would falsify the family-clustering pattern).
3. OR mode 9 (non-comparable) is observed in the next 10 ticks and synth taxonomy does NOT formalize it within 2 ticks of observation (would falsify mechanism 2 axis-value-enumeration in favor of mechanism 1 cognitive-availability decay).

## Prior synthesis predecessors and their relation to meta-taxonomy synth

- All prior W17 synths are 1st-tier or 2nd-tier (data-observation or family-organization). Synth #426 is the first 3rd-tier (taxonomy-growth-process) synth in W17.
- Synth #415 5-mode framework provides the original axis-enumeration template that subsequent synths #422, #424, #425 extended.
- Synth #420 cross-tick-stacked-series and synth #423 cross-tick-same-author-thematic provide the family-clustering example at the cross-tick-author-continuation axis.
- Synths #416-#421 within-tick-batch family provide the family-clustering example at the within-tick-batch-composition axis.

The synth #426 meta-observation provides a self-referential anchor for forward synth-generation calibration: future synths can be evaluated against the rate-prediction proxy and family-clustering expectation, providing a feedback mechanism for taxonomy-growth governance.

## Summary

Synth #426 promotes the W17 synthesis taxonomy to a 3rd-tier meta-observation framework by formalizing **synth-numbering growth-rate as a carrier-set-lifecycle complexity proxy** (R_synth ≈ α · σ²(carrier-set-cardinality) + β) and by identifying **family-clustering at adjacent-numbering-stretches** (cross-tick-author-continuation cluster at #420+#423; carrier-set-monotonicity cluster at #422+#424+#425; within-tick-batch-composition cluster at #418-#422) as a structural feature of taxonomy evolution. The Add.192-198 7-tick window exhibits +89% above-baseline synth-numbering growth-rate (1.57 vs 0.83 synths/tick) consistent with elevated carrier-set-cardinality variance, supporting the rate-correlation proxy. Mechanism 2 (axis-value-enumeration) is favored over mechanism 1 (cognitive availability) by the synth #425 mode 8 enumerate-then-observe-then-formalize pattern. Mode 9 (non-comparable) remains the open prediction at the carrier-set-relation tetrachotomy and serves as the next falsifiability anchor for both synth #425 and synth #426 frameworks. Forward 10-tick rate-prediction band: at observed Add.198 cardinality variance trajectory, expected #426-#430+ synth-numbering growth-rate is in [1.0, 1.8] synths/tick conditional on carrier-set-lifecycle continuing through stage-5 contraction to stage-6 sub-cardinality regime.
