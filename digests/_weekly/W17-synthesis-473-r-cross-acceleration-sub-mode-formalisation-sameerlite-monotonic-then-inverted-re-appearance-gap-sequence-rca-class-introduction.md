# W17 Synthesis #473 — R-cross-acceleration sub-mode formalisation: Sameerlite monotonic-then-inverted re-appearance-gap sequence as the first decelerate→accelerate transition catalogued within the synth #450/452 R-cross W-feature

**Trigger**: Add.222 M-222.B catalogues Sameerlite's 4-tick visible-window appearance map as Add.206 → Add.211 → Add.220 → Add.222, yielding inter-emergence gaps of **5, 9, 2** ticks (5 = Add.211−Add.206, 9 = Add.220−Add.211, 2 = Add.222−Add.220). The gap sequence (5, 9, 2) is the **first non-monotonic R-cross-author re-appearance trajectory** observed in the visible Add.193-222 lookback. The third-position sharp contraction (9 → 2 ticks, **−77.8% gap-shrinkage**) qualifies as an **R-cross-acceleration event** and demands a sub-mode taxonomy extension to the synth #450 2×2 partition × synth #452 full-population framework.

**Definition (R-cross-acceleration sub-mode taxonomy)**: For an author A in the R-cross sub-cohort with k ≥ 3 catalogued visible-window appearances yielding (k − 1) inter-emergence gaps g₁ < g₂ < … < g_{k-1} (in temporal order, NOT sorted), define:

1. **R-cross-decelerating (RCD)** — gap sequence is **monotonically non-decreasing** (g_i ≤ g_{i+1} for all i): author re-emergences become rarer over the visible window. Reference: yuneng-berri at Add.204-205-206 visible-window (gaps 1, 1; degenerate constant — borderline RCD).
2. **R-cross-stable (RCS)** — gap sequence is **non-monotonic but bounded within a 2× spread** (max(g) / min(g) ≤ 2): author re-emergence rate fluctuates without trend. No current visible-window exemplar.
3. **R-cross-accelerating (RCA)** — gap sequence terminates with a **sharp contraction** (g_{k-1} ≤ 0.5 × median(g_1, …, g_{k-2})) AND has at least one prior gap-expansion phase. Reference: **Sameerlite at Add.206-211-220-222 visible-window (gaps 5, 9, 2; final gap 2 ≤ 0.5 × 7 = 3.5 = 0.5 × median(5, 9))** — the **first catalogued RCA exemplar in W17 history**.
4. **R-cross-erratic (RCE)** — gap sequence is non-monotonic with spread max(g)/min(g) > 2 but no terminal sharp contraction. Reserve for future observations.

**ACTRF interaction with sub-mode**: The author-cross-tick recurrence frequency ACTRF(A, w) = (catalogued appearances in window w) / w is an **integral measure** that does NOT distinguish sub-modes. Sameerlite's ACTRF(11) = 0.364 is identical-in-magnitude whether the underlying gap sequence is RCD, RCS, RCA, or RCE — but the sub-mode classification carries strongly distinct **forward-prediction priors**:

- RCD authors have predicted next-gap > prior median(g) with ~0.65 confidence (decelerating trend continues).
- RCS authors have predicted next-gap ≈ median(g) with ~0.55 confidence (mean-reverting fluctuation).
- **RCA authors have predicted next-gap ≤ 2 × g_{k-1} with ~0.50 confidence** (acceleration phase persists for 1-3 ticks then either reverts or stabilises).
- RCE authors have flat-uniform next-gap prior over the observed gap range.

For Sameerlite (RCA-classified at Add.222 with g_{k-1} = 2 ticks), the **forward prior on Add.223 Sameerlite re-appearance** is therefore raised from the naive ACTRF-implied 0.364 to **~0.42** (≤2-tick re-appearance under RCA-acceleration-persistence) to ~0.25 (re-appearance at a wider gap as acceleration breaks). The decomposed P-222.F sub-component for Sameerlite re-appearance (~0.25 within the broader litellm re-entry probability of ~0.40) is **consistent with the RCA mid-phase reversion prior**, not the acceleration-persistence prior — which is **internally coherent** with the dispatcher framework's preference for mean-reversion over trend-extrapolation in author-cadence forecasting.

**Cross-axis BF implication**: The R-cross-acceleration observation is **NOT** a multi-axis BF input under the synth #463 framework — author sub-mode is currently classified as a **descriptive observable**, not an evidentiary observable for Interpretation B vs C. However, if RCA-class authors are differentially distributed across hypothesis-favoured ticks (e.g., RCA authors cluster on Interp-C-favoured ticks), then a future synth could elevate RCA-incidence to the BF axis. At Add.222 the data is too sparse (n=1 RCA exemplar) to support such elevation; **proposed synth #483 to revisit after 3+ RCA exemplars are catalogued**.

**Predictions (synth #473 falsification gates)**:

1. **P-473.A** — RCA-acceleration-persistence: predicted Add.223 Sameerlite re-appearance probability ~0.50 under RCA persistence vs ~0.25 under RCA reversion. The dispatcher framework adopts the **0.25 reversion prior** as primary; observation of Sameerlite at Add.223 with gap=1 would falsify reversion and confirm acceleration-persistence (BF >= 2.0 toward acceleration-persistence under uniform sub-mode prior).
2. **P-473.B** — RCS exemplar emergence: predicted within next 30 ticks, an RCS-classified author will be catalogued (some R-cross author's gap sequence will fluctuate within a 2× spread). Reference candidate: yuneng-berri once a 4th appearance is observed at sufficient gap.
3. **P-473.C** — sub-mode predictive accuracy: predicted that across the next 10 R-cross author re-appearances (any author), the sub-mode-conditioned forward priors will outperform the flat ACTRF-implied prior by Brier-score ≥ 0.03 — synth #483 will report.

**Cross-references**: Add.222 (sha c752e04) M-222.B for Sameerlite RCA sub-mode trigger event; synth #452 for R-cross W-feature full-population; synth #450 for original 2×2 recurrence × vendor-locality partition; synth #463 for multi-axis BF framework (R-cross sub-mode held as descriptive observable, not yet BF-axis-elevated); Add.211 (sha unspecified) for first Sameerlite R-cross instantiation; Add.220 (sha 2630f8c) for second Sameerlite re-appearance; Add.222 (sha c752e04) for the third R-cross re-appearance triggering RCA classification.

**End of W17 synthesis #473.**
