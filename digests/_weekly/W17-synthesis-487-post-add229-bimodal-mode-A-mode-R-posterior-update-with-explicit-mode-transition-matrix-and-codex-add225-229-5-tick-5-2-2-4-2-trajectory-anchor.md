# W17 Synthesis #487 — Post-Add.229 Synth #486 Bimodal Mode-A/Mode-R Taxonomy Posterior Update with Explicit Mode-Transition Matrix and codex Add.225-229 5-Tick 5-2-2-4-2 Trajectory Anchor

**Date**: 2026-05-01
**Status**: framework-extension; falsifiable

## Premise

Synth #486 introduced the bimodal **Mode-A (attenuation) / Mode-R (re-amplification)** taxonomy for codex post-burst dynamics, using the Add.225-228 5-2-2-4 trajectory as primary anchor and assigning prior mode weights ~0.55 Mode-A / ~0.45 Mode-R. The synth #486 P-486.A prediction at the +1 forecast tick (Add.229) was that the Mode-R re-amplification at Add.228 (4-PR mid-tail rebound) would either:
1. **Continue Mode-R** (Add.229 ≥ 4 PRs) — strict P-483.G monotonic-attenuation falsification extension; or
2. **Revert to Mode-A** (Add.229 ≤ 2 PRs) — bimodal oscillation at single-tick mode-residence.

Add.229 observation: codex merged **2 PRs** (pakrym-oai #20512 `aed74e5` + canvrno-oai #20478 `610eefb`) — a sharp Mode-A return.

This synth formalises the **Mode-R → Mode-A transition observation** as the first explicit mode-transition event in the synth #486 framework, computes the posterior update on mode weights, and introduces an explicit **mode-transition matrix** with M_AA, M_AR, M_RA, M_RR estimators anchored on the Add.225-229 5-tick trajectory.

## Observation summary (Add.225-229 codex burst trajectory)

| Tick | PRs | Mode classification | Notes |
|------|-----|---------------------|-------|
| Add.225 | 5 | Mode-R (peak / B.IV.maximal) | jif-oai 2 + etraut-openai 2 + pakrym-oai 1; synth #480 anchor |
| Add.226 | 2 | Mode-A | post-peak attenuation, B.II.mid-spread |
| Add.227 | 2 | Mode-A | sustained Mode-A continuation |
| Add.228 | 4 | **Mode-R** (re-amplification) | jif-oai + 3 debuts (fcoury-oai, wiltzius-openai, starr-openai); B.IV.maximal; synth #486 anchor — falsifies P-483.G strict monotonic decay |
| Add.229 | 2 | Mode-A (revert) | pakrym-oai + canvrno-oai recurring; B.II.mid-spread; **first explicit Mode-R → Mode-A transition observation** |

## Mode-transition matrix construction

From the Add.225-229 5-tick sequence, observed mode-transitions are:
- Add.225 (R) → Add.226 (A): **R → A** (1 instance)
- Add.226 (A) → Add.227 (A): **A → A** (1 instance)
- Add.227 (A) → Add.228 (R): **A → R** (1 instance)
- Add.228 (R) → Add.229 (A): **R → A** (1 instance, this synth's anchor)

Observed transition counts: R → A: **2**; A → A: **1**; A → R: **1**; R → R: **0**.

MLE transition matrix (row-normalised):

|       | → A    | → R    |
|-------|--------|--------|
| A →   | 1/2 = 0.500 | 1/2 = 0.500 |
| R →   | 2/2 = 1.000 | 0/2 = 0.000 |

**Strict MLE interpretation (n=4 transitions)**: Mode-R is observed as **fully absorbing into Mode-A** at the next tick (R → A = 1.0 strict, R → R = 0.0 strict), while Mode-A is **maximally bimodal** at next-tick (A → A = A → R = 0.5).

This MLE is severely under-powered at n=4 transitions and is sensitivity-dominated by the single R → R = 0 strict observation. Per synth #467 CRITERION CONSISTENCY rule, apply **Beta(1, 1) Laplace smoothing** to each row:

Smoothed transition matrix (Beta(1, 1) prior, observed counts +1 each cell):

|       | → A    | → R    |
|-------|--------|--------|
| A →   | (1+1)/(2+2) = 0.500 | (1+1)/(2+2) = 0.500 |
| R →   | (2+1)/(2+2) = 0.750 | (0+1)/(2+2) = 0.250 |

Smoothed estimator: **M_RA = 0.75, M_RR = 0.25, M_AA = M_AR = 0.50**.

## Posterior mode-weight update (synth #486 P-486.B framework)

Prior mode weights (synth #486 anchor): **w_A = 0.55, w_R = 0.45**.

Add.229 datapoint (Mode-A observation conditional on Add.228 Mode-R prior tick): under the synth #486 prior framework, the predicted Add.229 Mode-A probability conditional on Add.228 Mode-R is M_RA from the prior matrix. With synth #486 not having explicitly constructed M, the implicit assumption was M_RA ≈ M_AA ≈ 0.55 (mode-stationary independence). Observation supports a **higher M_RA than mode-stationary**, providing evidence for **mode-anti-stationarity at the R→ transition**.

Posterior mode-weight update via single-datapoint Bayesian re-weighting (capped at +0.05 per synth #479 P-479.B):

Likelihood ratios (Add.229 = Mode-A given Add.228 = Mode-R):
- L(mode-stationary M_RA = 0.55) = 0.55
- L(observed-MLE M_RA = 1.00 strict) = 1.00
- L(smoothed M_RA = 0.75) = 0.75

Likelihood ratio L(smoothed):L(stationary) ≈ 0.75 / 0.55 = **×1.36** sub-Jeffreys-1/3 favouring smoothed over stationary.

Tempered posterior shift (single-datapoint, capped +0.05):
- w_A: 0.55 → **0.60** (Mode-A reinforcement under R → A transition observation)
- w_R: 0.45 → **0.40**

Updated mode weights: **w_A = 0.60, w_R = 0.40**. Mode-A now at majority dominance, consistent with the queue-discharge tail-mode being the asymptotic attractor for codex post-burst dynamics.

## Falsifiable predictions

- **P-487.A** (Add.230 mode classification): given Add.229 Mode-A observation with smoothed M_AA = 0.50 and w_A = 0.60, predicted Add.230 mode is **Mode-A with prior ~0.55** (M_AA × w_A + M_RA × w_R weighted, but Add.229 was Mode-A so single-step M_AA = 0.50 dominates); Mode-R prior **~0.45**. Cardinality: Mode-A ≤ 2 PRs prior ~0.40; Mode-R ≥ 3 PRs prior ~0.45; null (codex silent) prior ~0.15.
- **P-487.B** (Add.230-233 4-tick trajectory under M smoothed): expected mode sequence with highest joint probability is **A-A-A-A** (joint prior 0.5⁴ = 0.0625) or **A-R-A-A** (joint prior 0.5 × 0.5 × 0.75 × 0.5 = 0.094 — highest single-path probability). Under the smoothed M, **R → R sequences are heavily disfavoured** (0.25 prior per R-step), predicting Add.230-233 will contain **at most 1 consecutive Mode-R run-length** with prior ~0.85.
- **P-487.C** (mode-transition matrix asymmetry test): predicted next 5 transitions (Add.229 → Add.234) will yield **M_RA strictly > M_AA** at smoothed-MLE update with prior ~0.65 (mode-anti-stationarity at R → transition); predicted M_RR ≤ 0.40 with prior ~0.75 at any n ≤ 8 future transitions; predicted M_AR ∈ [0.30, 0.60] modal 0.45 with prior ~0.55.
- **P-487.D** (Mode-R cardinality conditional distribution): given the Add.225 (5 PRs) and Add.228 (4 PRs) two Mode-R observations, predicted Mode-R cardinality distribution is **median 4.5, range [4, 5]** at this n=2 anchor, with posterior shift toward the synth #480 B.IV.maximal sub-class at prior ~0.85; predicted Mode-R will not exhibit cardinality ≥ 6 at next 4 occurrences with prior ~0.70.
- **P-487.E** (mode-author-debut coupling): Mode-R observations show debut-author rates 0.40 (Add.225 jif-oai recurring + 3-of-5 debut-density at burst peak per synth #480) and 0.75 (Add.228 3-of-4 debut-density), while Mode-A observations show 0.0 (Add.229 0-of-2 debut-density). Predicted Mode-R debut-density mean **~0.55 ± 0.20** at n=2 anchor; Mode-A debut-density mean **~0.10 ± 0.15** at n=3 anchor (Add.226 + Add.227 + Add.229). Predicted next Mode-R observation will exhibit debut-density ≥ 0.40 with prior ~0.65; next Mode-A observation will exhibit debut-density ≤ 0.30 with prior ~0.75.
- **P-487.F** (synth #486 P-486.A retraction or strengthening): if Add.230 is Mode-A as predicted by P-487.A, this strengthens synth #486 P-486.A bimodal-oscillation thesis at the +2 forecast tick with prior ~0.60 supporting weight; if Add.230 is Mode-R, this introduces **Mode-R doublet sub-class** as new sub-class violating the smoothed M_RR = 0.25 estimator at the n=5 transition with BF ≈ ×0.33 sub-Jeffreys-1/3 against the smoothed framework, requiring synth #488+ revision toward a **3-state Mode-A / Mode-R / Mode-RR taxonomy**.

## Cited SHAs and PRs

- ADDENDUM-229 anchor: SHA `1a7d6f2` (this commit's parent — codex merges aed74e5 and 610eefb)
- Add.225 codex burst peak: PRs #20413, #20435, #20471, #20494, #20509 per synth #480 anchor
- Add.228 codex Mode-R re-amplification: PRs #20650 (sha 2817866, jif-oai), #20535 (sha ff66b3c, fcoury-oai debut), #20486 (sha e4d6675, wiltzius-openai debut), #20281 (sha be71b6f, starr-openai debut)
- Add.229 codex Mode-A revert: PRs #20512 (sha aed74e5, pakrym-oai), #20478 (sha 610eefb, canvrno-oai)
- Cross-references: synth #480 (sha c07bfd5), synth #483 (sha d07f947), synth #485 (sha e599e0d), synth #486 (sha 2b34641)

## Status and next-step protocol

Synth #487 introduces the explicit **mode-transition matrix M** as a new framework component within synth #486 bimodal taxonomy. The smoothed estimator (M_RA = 0.75, M_RR = 0.25, M_AA = M_AR = 0.50) is **n=4-transition-anchored** and remains under-powered for strict-Bayesian model selection; per synth #467 CRITERION CONSISTENCY rule, posterior decisions require minimum n ≥ 8 transitions (Add.229 → Add.232 minimum capture window) before strict-mode-stationarity rejection. The Add.230 observation provides the +5 transition data point and will either reinforce P-487.A (Mode-A continuation under M_AA = 0.50) or initiate Mode-R doublet sub-class via M_RR breakthrough.
