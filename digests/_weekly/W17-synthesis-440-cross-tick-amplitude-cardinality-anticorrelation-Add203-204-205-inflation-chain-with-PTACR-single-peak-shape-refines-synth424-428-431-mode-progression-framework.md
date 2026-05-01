# W17-Synthesis #440 — Cross-Tick Amplitude-Cardinality Anticorrelation Across the Add.203 → Add.204 → Add.205 Three-Tick Transition: Carrier-Set Strict-Superset Expansion (1 → 2 → 3) Co-Occurs With Per-Tick Amplitude Trajectory (4 → 11 → 6) Yielding a Provisional **Negative Correlation Between Carrier-Cardinality Growth Rate and Amplitude Sustain Rate**, Distinct From Synth #424 / #428 / #431 Mode-Progression Framework Which Tracks Cardinality Without Amplitude Coupling

**Class**: Cross-tick mode-progression dynamics (synth #424 / #428 / #431 lineage) + amplitude-cardinality coupling axis (novel at synth #440) + 3-tick rolling-window kinetics taxonomy.
**Anchor ticks**: synth #424 (mode-progression framework, cardinality axis only), synth #428 (mode-progression sub-mode taxonomy), synth #431 (mode-progression sustain-vs-expand discriminator), **Add.203 / Add.204 / Add.205 sequential triple** (4 / 11 / 6 amplitude across 1 / 2 / 3 carrier-cardinality) — a clean 3-tick comparative window.
**Status**: Establishes the **amplitude–cardinality anticorrelation hypothesis** as a new sub-mode of the synth #424 / #428 / #431 mode-progression framework; refines the framework by introducing the **(amplitude, cardinality) joint-trajectory** as the analytic unit rather than cardinality alone; establishes a falsifiable prediction surface for the next 3 ticks.

## 1. The 3-tick joint trajectory

Per ADDENDUM-203 (mono-carrier {litellm} amplitude=4), ADDENDUM-204 (`ab62461`, bi-carrier {codex, litellm} amplitude=11), and ADDENDUM-205 (`ffdf1a2`, tri-carrier {codex, litellm, gemini-cli} amplitude=6), the joint trajectory across the three ticks is:

| tick | carrier-set | cardinality | total amplitude | per-carrier mean amplitude |
|------|-------------|-------------|-----------------|----------------------------|
| Add.203 | {litellm} | 1 | 4 | 4.00 |
| Add.204 | {codex, litellm} | 2 | 11 | 5.50 |
| Add.205 | {codex, litellm, gemini-cli} | 3 | 6 | 2.00 |

**Cardinality growth**: +1, +1 (monotonically expanding by 1 per tick — the canonical "inflation chain" predicted by M-204.A).

**Total amplitude trajectory**: 4 → 11 → 6 (non-monotone; +7 then −5; a peaked profile with maximum at the bi-carrier tick).

**Per-carrier mean amplitude**: 4.00 → 5.50 → 2.00 (also non-monotone; +1.50 then −3.50; sharper decline than the total amplitude).

## 2. The novel observation: amplitude does NOT track cardinality monotonically

Synth #424 / #428 / #431 frame the mode-progression framework purely on the cardinality axis: mode-1 sustain, mode-2 mono-exit, mode-3 mono-entry, mode-10 maximal-tri-entry-with-mono-sustain, mode-11 mono-sustain-mono-entry chain, etc. None of these synths couple cardinality to amplitude. The Add.203 → 204 → 205 trajectory exposes a **first-order coupling**: the inflation phase (cardinality 1 → 2 → 3) **peaks in total amplitude at the middle tick** rather than at the maximum-cardinality endpoint.

Define the **per-tick amplitude-cardinality ratio (PTACR)** = total amplitude / cardinality. For the trajectory:

- Add.203: 4 / 1 = **4.00**
- Add.204: 11 / 2 = **5.50**
- Add.205: 6 / 3 = **2.00**

PTACR is also non-monotone with peak at Add.204. The **PTACR-decline at Add.205 (5.50 → 2.00, ratio 0.36)** is the **largest single-tick PTACR contraction in the visible Add.193-205 lookback** (per inspection of Add.193-202 cardinality / amplitude pairs, no prior tick exhibits a >50% PTACR drop alongside cardinality expansion).

## 3. The hypothesized mechanism: cardinality expansion costs per-carrier amplitude

The simplest mechanism consistent with the trajectory is that **carrier re-entries are dominated by low-amplitude tail repos (gemini-cli at Add.205 contributes 3 PRs, all from a single author, all on the docs surface — see synth #439)**, while the **high-amplitude carriers (codex) contract from their burst peak (6 → 2) on the same tick**. The total amplitude therefore shrinks because the **gain from cardinality expansion (one new carrier at modest amplitude) is smaller than the loss from intra-tick decay of the previously bursting carrier**.

This mechanism predicts that the **typical inflation chain** mode-3 → mode-3 → mode-3 (the prediction track from M-204.A / P-205.A) is **NOT amplitude-conserving** — the inflation chain monotonically deflates per-carrier mean amplitude even as it monotonically expands cardinality. If this holds, the **total amplitude trajectory across an inflation chain has a single-peak shape** (rises to bi- or tri-carrier, then declines as the chain extends).

## 4. Comparison to synth #436 stuxf cohort cycle and synth #429 silence-attractor

Synth #436 frames the stuxf-class litellm 7-PR cohort over Add.196-203 as a multi-tick work-batch cycle without an explicit amplitude trajectory model. Synth #429 frames mono-vendor-silence at the carrier-loss boundary. Neither synth predicts the **single-peak total-amplitude shape** observed at Add.203 → 204 → 205. Synth #440 therefore **complements rather than refutes** the prior framework: the carrier-replacement-survivor / mode-progression / silence-attractor models all describe the **cardinality** axis; synth #440 introduces the **amplitude** axis and predicts that amplitude-axis behavior is **not derivable** from cardinality-axis behavior.

## 5. Specific PR-anchor evidence from the 3-tick window

The hypothesis rests on the per-tick PR list, which provides ground truth that cardinality expansion at Add.205 is dominated by tail-amplitude carriers:

- **Add.204 codex sextet**: #18595 (fcoury-oai, vim composer), #20267 (xli-oai, plugin analytics), #20499 (owenlin0, app-server experimental), #20522 (abhinav-oai, hooks alias), #20336 (iceweasel-oai, Windows execpolicy), #20113 (dylan-hurd-oai, exec_policy heredoc) — **6 distinct authors, 6 distinct surfaces** (synth #437 deep-backlog-flush sub-mode).
- **Add.204 litellm 5-PR**: #26946 (AlanWYChen, haiku integration test), #26941 + #26949 (yuneng-berri Responses API doublet), #26914 + #26829 (Michael-RZ-Berri pre_call_hook + Redis TTL doublet) — **3 distinct authors, 5 surfaces, 2 doublets** (synth #438 multi-doublet sub-mode).
- **Add.205 codex doublet**: #20341 (euroelessar, app-server v3) + #20300 (rhan-oai, analytics state) — **2 disjoint authors, 2 disjoint surfaces, 31m35s gap, PR-number dispersion only 41** (synth #437-complementary post-backlog-flush quiescence).
- **Add.205 litellm singleton**: #26826 (shivamrawat1, model health pagination) — **fresh-author singleton, no recurrence with Add.204 litellm pool**.
- **Add.205 gemini-cli triplet**: #26290 / #26308 / #26309 (bdmorgan add → re-add → remove on `bdmorgan-patch-1`) — **single author, single branch, single docs surface** (synth #439 reused-branch self-revert sub-mode).

The Add.205 expansion thus consists of **1 fresh-author singleton + 1 author-pool-turnover doublet + 1 single-author docs-only oscillation triplet** — exactly the **tail-amplitude carrier mix** the hypothesis predicts.

## 6. Falsifiable predictions seeded by synth #440

- **P-440.A** (PTACR continuation): if the inflation chain extends to cardinality 4 at Add.206, predicted PTACR ∈ [1.0, 3.0] (continued decline below the Add.205 value of 2.00). If cardinality contracts back to 2 at Add.206, predicted PTACR ∈ [3.5, 6.5] (rebound).
- **P-440.B** (single-peak total-amplitude shape): predicted Add.206 total amplitude ≤ 6 if cardinality remains ≥ 2; the peak at Add.204 amplitude=11 is a closed local maximum and the next local maximum is **not** at the next tick.
- **P-440.C** (anticorrelation generalization): across the next 10 W17 ticks, predicted Pearson correlation between (Δ cardinality) and (Δ total amplitude) is **negative** (ρ < 0); strong-falsification threshold is ρ ≥ +0.3.
- **P-440.D** (mechanism-specificity): predicted that any future cardinality-expansion tick where a re-entering carrier contributes ≥ 8 PRs in its first re-entry tick is **rare** — predicted incidence rate ≤ 1 in 25 ticks (prior W17 lookback contains 0 such events at re-entry boundary).
- **P-440.E** (synth #424/428/431 framework refinement): predicted that any mode-3 → mode-3 chain extension (cardinality monotone-expand by 1 across 3 consecutive ticks) is **always accompanied by per-carrier mean amplitude decline** in at least 2 of the 3 ticks; strong-falsification = a 3-tick mode-3 chain with monotone amplitude growth.

**End of synth #440.**
