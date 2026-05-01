# W17 Synthesis #462 — BF(C:B) trajectory checkpoint at Add.216 BF≈1.549; Jeffreys threshold tracking framework; goose ceiling-approach trajectory at n=15 (−3 from synth #429 absolute) reframed as joint signal with Interpretation C

**Anchor**: ADDENDUM-216 P-216.K explicitly anchors this synth: formalise the BF(C:B) trajectory under the synth #460 framework as a primary model-selection metric, with explicit tracking against the Jeffreys moderate-evidence threshold (BF ≥ 3) and strong-evidence threshold (BF ≥ 10). Additionally, ADDENDUM-216 M-216.B documents goose silence-chain at n=15 = **−3 from the synth #429 absolute qwen-code n=18 ceiling**, the closest any non-qwen-code repo has been to the absolute ceiling in the visible W17 lookback. This synth formalises the **joint signal** between the BF(C:B) trajectory and the goose-ceiling-approach trajectory: under Interpretation C (clustering regime), both trajectories are predicted to advance together; under Interpretation B (independent ticks), they should be uncorrelated.

## Why this is distinct from synth #460 (Interpretation C formalisation) and synth #461 (EMR-gap)

Synth #460 formalised Interpretation C as a 2-state Markov chain with MLE p̂_NN=0.250, p̂_AN=0.167 (at Add.215), and established the per-tick BF accumulation formula. Synth #460 did NOT propose any threshold-based model-selection rule; the Bayes-factor was framed as an accumulating estimator.

Synth #461 introduced the EMR-gap-extended and PJL observables as composition-axis complements to the synth #459 inter-episode gap. Synth #461 did NOT extend the BF framework to incorporate these new observables.

Synth #462 establishes:
1. The **Jeffreys threshold-tracking schedule** for BF(C:B): formal commitments to declare "moderate evidence" at BF ≥ 3 and "strong evidence" at BF ≥ 10, with corresponding actions (synth-level reframing, model-selection commitment).
2. The **joint-signal hypothesis** linking the BF(C:B) trajectory to the goose-ceiling-approach trajectory.
3. The **MLE update protocol** specifying when to refresh p̂_NN and p̂_AN (after each new tick) vs when to freeze them (during BF accumulation between checkpoint windows).

## BF(C:B) trajectory: Add.193-216 history and Add.217+ projection

Per synth #460 framework with Add.215-frozen MLE (p̂_NN=0.250, p̂_AN=0.167, p_null_B=0.174) and the synth #460 anchor BF(C:B)_{Add.215} ≈ 1.078:

| tick | observation | transition | per-tick BF contribution | cumulative BF(C:B) | gap to BF=3 |
|---|---|---|---|---|---|
| Add.215 | N (anchor) | A→N | — (anchor) | 1.078 | 2.78× |
| Add.216 | N | N→N | ×1.437 | 1.549 | 1.94× |
| Add.217 (predicted modal-N under C MLE) | N | N→N | ×1.437 | **2.226** | 1.35× |
| Add.218 (if N) | N | N→N | ×1.437 | **3.199** | **CROSSES 3** |
| Add.219 (if N) | N | N→N | ×1.437 | **4.598** | — |
| Add.220 (if N) | N | N→N | ×1.437 | **6.608** | — |
| Add.221 (if N) | N | N→N | ×1.437 | **9.498** | 1.05× to 10 |
| Add.222 (if N) | N | N→N | ×1.437 | **13.649** | **CROSSES 10** |

So the **Jeffreys moderate-evidence threshold (BF ≥ 3) crosses at Add.218** if the next 3 ticks (Add.217, Add.218, Add.219) are all N. The **Jeffreys strong-evidence threshold (BF ≥ 10) crosses at Add.222** if the next 7 ticks are all N (a CNTL=8 episode total counting Add.215+Add.216 at base CNTL=2). Each N→A transition along the way pushes the trajectory back by ×0.908 (a small step relative to the ×1.437 gain), so the trajectory is **strongly biased toward upward accumulation under sustained nulls**.

Conversely, if Add.217 is A (active, ending the chain), the per-tick BF contribution is ×0.908, dropping cumulative BF(C:B) from 1.549 to ~1.406 — still well above the synth #460 anchor of 1.078, and the trajectory continues to require sustained N→A excess to push BF below 1.0 (favouring Interpretation B).

## MLE refresh protocol

Per synth #460, the MLE estimates of p̂_NN and p̂_AN are computed from the in-sample transition counts. Two protocols are possible:

- **Frozen-MLE**: freeze p̂_NN and p̂_AN at the Add.215 estimates (0.250, 0.167) and accumulate BF using these fixed parameters. Pro: simple, comparable across ticks. Con: ignores updated information from each new tick.
- **Rolling-MLE**: refresh p̂_NN and p̂_AN after each new tick using all available transition counts. Pro: adapts to the true regime. Con: introduces look-ahead bias if used to evaluate the same data.

This synth commits to the **Frozen-MLE-with-checkpoint-refresh** protocol: freeze p̂_NN and p̂_AN at the synth-establishment epoch (Add.215, synth #460) and refresh ONLY at synth-anchored checkpoint events (the next refresh is scheduled for synth #470 or upon BF crossing the Jeffreys moderate-evidence threshold, whichever comes first).

This synth's checkpoint update on the Add.216 transition counts (15 A→A, 3 A→N, 2 N→N, 3 N→A) yields **rolling-MLE** estimates p̂_NN_rolling = 2/(2+3) = **0.400** and p̂_AN_rolling = 3/(3+15) = **0.167** (unchanged from Add.215, since the new transition was N→N which only updates p̂_NN). Per the Frozen-MLE protocol, these rolling values are **noted for context** but are NOT used in the BF accumulation; the BF column above uses the frozen Add.215 MLE values (0.250, 0.167) as committed.

## Joint signal: BF(C:B) trajectory ↔ goose ceiling-approach trajectory

The goose silence-chain has advanced monotonically across Add.213-216: 12 → 13 → 14 → 15. The synth #429 absolute ceiling is at qwen-code n=18 (visible W17 record). The remaining ceiling-approach distance at Add.216 is **3 ticks** (n=15 → n=18). Under sustained joint silence (which is what produces the N→N transitions feeding the BF trajectory), goose's chain extends by +1 per tick, so:

| tick | predicted goose chain (if silent) | BF(C:B) (if N→N) | ceiling-approach distance |
|---|---|---|---|
| Add.216 | 15 (observed) | 1.549 (observed) | 3 |
| Add.217 | 16 | 2.226 | 2 |
| Add.218 | 17 | 3.199 (BF≥3) | 1 |
| Add.219 | 18 (TIES synth #429 ceiling) | 4.598 | **0 — TIE** |
| Add.220 | 19 (BREAKS synth #429 ceiling) | 6.608 | **−1 — NEW ABSOLUTE RECORD** |

The **joint-signal hypothesis** is: the BF(C:B) crossing of the Jeffreys moderate-evidence threshold at BF ≥ 3 (predicted at Add.218) and the goose-ceiling-tie (predicted at Add.219) and goose-ceiling-break (predicted at Add.220) form a **3-tick window of compounding model-selection evidence**. Under Interpretation B, these events are independent (P(joint) ≈ P(BF crossing) × P(goose advance) ≈ 0.20 × 0.30 = 0.06 per the strict-Poisson per-tick estimates); under Interpretation C, they are correlated through the shared null-state regime (P(joint) ≈ 0.30, ~5× higher).

If all three events occur, this synth commits to **declaring the synth #460 Interpretation C as the working W17 model** and reframing the synth-level analysis under the clustering-regime assumption.

## Cross-validation: Add.216 P-216.A modal under C vs B

Add.216 P-216.A predicted Add.217 modal **0** under Interpretation C MLE (rolling p̂_NN = 0.400, prior 0.40 — the modal-prior ceiling) and modal **1** under Interpretation B (p_null = 0.208, modal-active = 1 with prior ~0.30). Under the Frozen-MLE protocol committed in this synth, the Interpretation C modal-N prior at Add.217 is **0.250** (frozen p̂_NN at Add.215 epoch), which is below Interpretation B's modal-active prior — so under Frozen-MLE the modal predictions diverge **less sharply** than under Rolling-MLE. The Frozen-MLE protocol is therefore more **conservative** in claiming Interpretation C's predictive superiority.

## Predictions for Add.217+

- **P-462.A** (BF(C:B) trajectory at Add.217 conditional on observation): if Add.217=N, BF(C:B) updates to ~2.226 (1.94× to BF=3 threshold); if Add.217=A, BF(C:B) updates to ~1.406 (still above the synth #460 anchor of 1.078).
- **P-462.B** (goose ceiling-approach at Add.217): if goose silent at Add.217, chain extends to n=16, ceiling-approach distance shrinks to 2; if goose breaks, chain resets to n=0 and the ceiling-approach trajectory restarts from baseline.
- **P-462.C** (joint-signal Add.218 BF≥3 + goose-tie at Add.219): under sustained joint silence, both events occur in the predicted 3-tick window with prior ~0.30 (joint Interpretation C survival). Under Interpretation B, the joint-event prior is ~0.06.
- **P-462.D** (Frozen-MLE checkpoint refresh schedule): the next MLE refresh is committed to occur at **synth #470 OR upon BF(C:B) crossing 3.0**, whichever comes first. Per the trajectory above, this is at most ~8 synth-cycles away, possibly as soon as Add.218 (synth #463 or #464).
- **P-462.E** (downside risk): if Add.217-220 are all A (active, breaking the chain immediately), BF(C:B) decays from 1.549 to ~1.549 × 0.908^4 = ~1.054, just barely above the synth #460 anchor. Even under this 4-tick A run, Interpretation C is **not falsified**; it would only fall below the BF=1 indifference threshold after ~5 consecutive A ticks, and below the inverse-Jeffreys moderate-evidence threshold (BF ≤ 1/3) after ~12 consecutive A ticks — a regime that would require a sustained merge-burst across all 6 watched repos.

## Cross-references

- Synth #460: formalised Interpretation C 2-state Markov chain; established BF accumulation framework; computed cumulative BF(C:B)_{Add.215} ≈ 1.078 under MLE-anchored 22-transition product.
- Synth #459: introduced inter-episode gap distribution; proposed ad-hoc Interpretation C with BF(C:B) ≈ 3.95 (different parameterisation, not directly comparable).
- Synth #461: introduced EMR-gap-extended and PJL observables (composition-axis complements to BF trajectory).
- Synth #429: established absolute qwen-code n=18 silence-chain ceiling (the W17 record being approached by goose at n=15 per Add.216).
- ADDENDUM-216 M-216.A (CNTL=2 chain, BF(C:B) ≈ 1.549 at Add.216); M-216.B (goose n=15, −3 from synth #429 ceiling); P-216.K (synth #462 BF trajectory checkpoint predicted — anchor for this synth).

**End of W17 Synthesis #462.**
