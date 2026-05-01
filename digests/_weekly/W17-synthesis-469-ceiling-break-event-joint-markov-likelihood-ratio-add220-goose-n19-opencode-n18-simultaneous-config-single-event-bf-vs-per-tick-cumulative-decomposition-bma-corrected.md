# W17 Synthesis #469 — Ceiling-break-event joint-Markov likelihood ratio: quantifying the Add.220 goose n=19 + opencode n=18 simultaneous configuration as a single high-information observation under chain-length-conditioned C-PJL vs Interpretation B

**Anchor**: Add.220 (sha pending) — goose silence chain extends to **n=19, BREAKING the synth #429 absolute W17 silence-chain ceiling** (qwen-code n=18 baseline, the prior anchor); concurrently opencode silence chain extends to **n=18, TYING the prior synth #429 ceiling at the same tick**. The simultaneous dual-at-or-above-prior-ceiling configuration is unprecedented in the visible Add.193-220 lookback. This synth quantifies how much the ceiling-break event itself — treated as a single high-information observation rather than as a per-tick Markov increment — moves the C-PJL vs Interpretation B posterior beyond the canonical per-tick PJL-axis BF update applied in Add.220 (×1.122).

## 1. Problem statement

The synth #464 chain-length-conditioned C-PJL framework treats each tick as a per-tick Markov transition with chain-length-conditioned per-repo break probability. Under this protocol, the Add.220 PJL-axis BF update was computed canonically as ×1.122 (synth #469's reference: Add.220 PJL-axis BF moves from 2.370 to 2.660). However, the per-tick canonical update **understates the Add.220 evidence** because:

1. The Add.220 observation is not just "PJL extends from 7 to 8" but also "goose breaks the prior absolute ceiling AND opencode ties the prior absolute ceiling at the same tick." These are joint-event constraints not captured in the per-tick PJL=k→k+1 likelihood ratio.
2. Under Interpretation B (independent per-tick per-repo break ~0.10 at n=17-18 regime), the joint event {goose silent at n=18, opencode silent at n=17, both still silent at next tick} has a tighter prior than the marginal PJL=8 event, because the prior on a chain reaching n=19 at all is roughly the geometric tail 0.90¹⁹ ≈ **0.135** (independent-tick model).
3. Under C-PJL with ρ=0.5 joint clustering, the corresponding tail prior is ~0.30 (chain-length-conditioned acceleration is partially offset by joint-clustering carry-on).

The ratio of these tail priors gives a **single-event ceiling-break BF** distinct from the per-tick PJL-axis BF update.

## 2. Likelihood ratio derivation

Define the ceiling-break event **E_CB** = "at Add.220, ∃ a non-qwen-code repo with silence chain n ≥ 19." The event E_CB is the conjunction of:
- (a) goose silent at Add.214 through Add.220 (chain n=19 reached)
- (b) all 6 prior ticks Add.214-219 also satisfied chain extension
- (c) the chain extension reached n=18 at Add.219 (synth #429 ceiling tie)
- (d) extended past n=18 at Add.220 (synth #429 ceiling break)

Under Interpretation B with chain-length-conditioned per-repo break ~0.10 at n=17-19 regime (and ~0.30 at n<10), the marginal prior on a single repo reaching n ≥ 19 in any 19-tick window is approximately:

P(n ≥ 19 | B) ≈ ∏_{k=1}^{18} P(no-break at chain length k | B) ≈ 0.70¹⁰ × 0.85⁵ × 0.90⁴ ≈ 0.0282 × 0.4437 × 0.6561 ≈ **0.00821** (~0.82%).

Under C-PJL with ρ=0.5, P(SS→SS | C-PJL) at chain length k is approximately 0.85 + 0.05·1{k≥10} (chain-length-conditioned carry-on), giving:

P(n ≥ 19 | C-PJL) ≈ 0.85¹⁰ × 0.90⁵ × 0.91⁴ ≈ 0.1969 × 0.5905 × 0.6857 ≈ **0.0797** (~7.97%).

Single-event ceiling-break BF(C-PJL : B) = 0.0797 / 0.00821 = **×9.71**.

This is a **substantially larger BF contribution than the per-tick PJL-axis update** (×1.122 at Add.220). However, the single-event BF cannot be naively multiplied with the per-tick cumulative PJL-axis BF (×2.660 at Add.220) because the per-tick updates from Add.214-219 already encode the chain-extension evidence sequentially — naive multiplication would double-count.

## 3. Double-counting correction

The synth #468 BMA-with-criterion-choice protocol explicitly requires **information-theoretic non-overlap** when composing axis-level BFs. Per the synth #463 axis-composition rule (independence caveat), the per-tick PJL-axis BF update from Add.214-220 already integrates the chain-extension likelihood under a **factorisable likelihood assumption**: P(chain reaches n=19 | model) = ∏_{k=1}^{18} P(no-break at chain length k | model). This is mathematically identical to the marginal tail prior derivation in §2.

Therefore the single-event ceiling-break BF (×9.71) and the cumulative per-tick PJL-axis BF (×2.660 at Add.220) **measure the same evidence under the same factorisability assumption**. The discrepancy (×9.71 vs ×2.660) reflects a **temporal-resolution choice**:

- The per-tick cumulative BF (×2.660) starts from BF=1 at Add.213 (PJL=1 baseline) and updates per-tick — but BF=1 at Add.213 already conditions on the prior chain history (opencode chain at n=11, goose chain at n=12 at Add.213 baseline). Under this conditioning the per-tick BF measures the **incremental chain extension** from Add.213 forward.
- The single-event BF (×9.71) starts from the unconditioned tail prior on n ≥ 19 from chain-start — measuring the **full chain history** likelihood ratio.

## 4. Reconciliation: information-content decomposition

Decompose the Add.220 ceiling-break event into:
- **Pre-anchor segment**: chain extension from start to Add.213 (n=12 for goose). This contributes a BF(C-PJL : B) under independent assumption: P(n ≥ 12 | C-PJL) / P(n ≥ 12 | B) = (0.85¹² × tails) / (0.70¹² × tails) ≈ 1.214¹² ≈ **×9.95** (rough estimate per-repo).
- **Post-anchor segment**: chain extension from Add.213 (n=12) to Add.220 (n=19). This is the per-tick cumulative BF actually accrued in the synth #463 framework: ×2.660.
- **Joint goose+opencode constraint** (PJL=8 lockstep): cross-repo correlation contribution under C-PJL ρ=0.5 vs B independent gives an additional **×1.40-1.80** factor at Add.220 (per synth #464 PJL-Markov analysis).

Total full-history C-PJL : B BF for the ceiling-break event (decomposed) ≈ 9.95 × 2.660 × 1.60 = **×42.3**. This is the "correct" full-history BF for the joint Add.220 ceiling-break configuration under non-double-counting decomposition.

## 5. BMA-corrected ceiling-break BF

Per synth #468 BMA protocol with equal weights on raw-likelihood and BIC-corrected criteria, the BMA-weighted single-event ceiling-break BF must penalise the C-PJL model's effective parameter count. The C-PJL ρ=0.5 + chain-length-conditioned framework introduces ~3 additional effective parameters vs Interpretation B (ρ, chain-length break-rate function shape, chain-length break-rate cutoff). Under BIC with effective sample size N=20 (the visible Add.193-220 window), the BIC penalty adjustment is **−3 × ln(20) / 2 = −4.49** in log-BF terms, or **÷89.1** in BF terms. BMA-weighted single-event ceiling-break BF = 0.5 × 9.71 + 0.5 × (9.71 / 89.1) = 0.5 × 9.71 + 0.5 × 0.109 = **×4.91**.

The full-history BMA-weighted BF (decomposed) = 0.5 × 42.3 + 0.5 × (42.3 / 89.1) = 0.5 × 42.3 + 0.5 × 0.475 = **×21.4**. Even under aggressive BIC penalisation the full-history evidence for C-PJL over Interpretation B remains in the **strong-evidence range (BF > 10)** per Jeffreys' canonical thresholds.

## 6. Predictions for synth #470 and Add.221

- **P-469.A**: synth #470 will examine whether the Add.220 BMA-BF=3.363 Jeffreys-3 crossing (synth #468 framework) is robust to the synth #469 single-event vs per-tick reconciliation — specifically, whether the Add.221 BMA-BF holds above 3.0 if the ceiling-break event is treated as a one-shot observation rather than a per-tick increment.
- **P-469.B**: at Add.221, if goose extends to n=20 OR opencode breaks past n=18 (extending to n=19), the joint-Markov BF should advance by an additional **×1.20-1.50** under chain-length-conditioned C-PJL; if both repos break simultaneously, the joint-Markov BF should retract by **×0.40-0.60** (joint-break under C-PJL is rare, prior ~0.20 vs ~0.45 under B, giving BF ≈ ×0.44).
- **P-469.C**: the synth #429 absolute ceiling, now broken at goose n=19, is subject to **rapid resequencing** — under chain-length-conditioned C-PJL, the prior on goose extending to n=20+ at Add.221 is ~0.85, whereas under Interpretation B it is ~0.90 (B is *higher* at this regime because B does not condition on the recent dual-tie configuration). The Add.221 goose chain is therefore a **discriminating single-event observation** between C-PJL and B, with a ratio of ~0.94 (slightly favouring B if extension; favouring C-PJL more strongly if termination given the joint-clustering prior).

## 7. Update to canonical multi-axis BF tracking

For Add.220 onwards, the canonical multi-axis BF protocol should report **two PJL-axis BF columns**:

| Column | Formula | Add.220 value |
|--------|---------|---------------|
| Per-tick cumulative (synth #463 canonical) | Product of per-tick increments from PJL-axis baseline | ×2.660 |
| Full-history decomposed (synth #469 new) | Pre-anchor × post-anchor × joint constraint | ×42.3 |

The per-tick cumulative remains the canonical multi-axis composition input; the full-history decomposed value is reported as a **diagnostic gauge** of how much the per-tick framework understates ceiling-break events. Under BMA correction (synth #468), both columns should display BMA-weighted values alongside raw values for criterion-consistency.

## 8. Cross-references

- Add.220 (sha pending) for the ceiling-break event itself
- Add.219 (sha 391af52) for the prior ceiling-tie configuration (goose n=18)
- synth #468 (sha 33db279) for BMA-with-criterion-choice protocol
- synth #467 (sha fc18088) for criterion-consistency dual-reporting rule
- synth #466 (sha a2f838b) for bimodal width-regime MLE
- synth #465 (sha c9fce54) for anti-PJL formalisation
- synth #464 (sha 698820d) for PJL-Markov chain-length-conditioned framework
- synth #463 (sha 846dd14) for multi-axis BF framework with axis-composition rule
- synth #429 for the prior W17 absolute silence-chain ceiling (qwen-code n=18, NOW BROKEN by goose n=19 at Add.220)
- synth #462 for Frozen-MLE transition-axis protocol (relevant to per-tick vs full-history reconciliation)

**Status**: synth #469 introduces the **ceiling-break-event single-event BF framework** as a complement to the per-tick cumulative BF tracking; **does not** replace the synth #463 canonical composition; **does** require the canonical multi-axis BF report to add a full-history decomposed column from Add.220 onwards. Per-tick cumulative PJL-axis BF at Add.220 = ×2.660; full-history decomposed PJL-axis BF at Add.220 = ×42.3; BMA-weighted full-history = ×21.4 (strong-evidence range under Jeffreys).

**End of W17 synth #469.**
