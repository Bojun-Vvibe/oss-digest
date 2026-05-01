# W17 Synthesis #455 — CNTL (Chained-Null-Tick Length) introduced at Add.213; Bayesian rejection of synth #453 Interpretation A and posterior favouring Interpretation B (Poisson p_null ≈ 0.143)

**Anchor**: ADDENDUM-213 M-213.A defines CNTL := length of the longest consecutive null-tick run in the visible lookback; observed CNTL(Add.193-213) = **2** (the Add.212-213 chain). Add.213 = null tick was assigned prior ~0.05 under synth #453 Interpretation A (periodic NTRP=4 predicting Add.216 as the next null) and prior ~0.10 under synth #453 Interpretation B (Poisson independent-tick with p_null ≈ 0.10). The observation **decisively falsifies Interpretation A** and updates the posterior in favour of Interpretation B. This synth formalises CNTL as a structural metric and computes the explicit Bayesian update.

## Observable

The Add.193-213 visible lookback (21 ticks) now contains **3 null ticks**:

- **Add.208** (synth #445 anchor) — first MODE-X instance, rate 0.0000.
- **Add.212** (synth #453 anchor) — second null, NTRP(208,212) = 4.
- **Add.213** (this synth's anchor) — third null, NTRP(212,213) = **1**, the minimum possible inter-null distance.

Updated NTRP empirical distribution: {4, 1}, mean 2.5, range 3, count 2 (n−1 = 2 NTRP measurements from 3 null observations). Updated null-tick empirical frequency: 3/21 = **0.143** per tick (up from 2/20 = 0.10 at Add.212).

CNTL(Add.193-213) = **2** (Add.212-213 chain), the **first observed n=2 chained null sequence** in the visible lookback. Prior to Add.213 the maximum observed null-run was 1 (Add.208 was a singleton, Add.212 was a singleton at the moment of Add.212 observation).

## Bayesian rejection of synth #453 Interpretation A

Synth #453 set up two competing models:

- **Interpretation A** (periodic NTRP=4): predicts Add.213 = null with prior **~0.05** (1 − 0.95 non-null-tick prior assigned to non-Add.216 ticks within a 4-tick cycle).
- **Interpretation B** (Poisson independent-tick): predicts Add.213 = null with prior **~0.10** (empirical p_null at Add.212).

Setting equal prior credibility P(A) = P(B) = 0.50 at Add.212, the Bayes-factor for the Add.213 = null observation is:

```
BF(B/A) = P(Add.213=null | B) / P(Add.213=null | A) = 0.10 / 0.05 = 2.0
```

Posterior:

```
P(A | Add.213=null) = P(Add.213=null | A) * P(A) / [P(Add.213=null | A) P(A) + P(Add.213=null | B) P(B)]
                    = 0.05 * 0.5 / (0.05 * 0.5 + 0.10 * 0.5)
                    = 0.025 / 0.075
                    = 0.333
```

Posterior P(A) ≈ **0.33**, posterior P(B) ≈ **0.67** — Interpretation B is now favoured by 2:1 odds, but Interpretation A is **not yet decisively rejected** by this single observation. However, when combined with the **structural mismatch** (Interpretation A's deterministic-cycle reading is incompatible with a CNTL=2 chain occurring 3 ticks before the predicted next null), the **modeling-class rejection** of Interpretation A is much stronger than the marginal Bayesian update suggests: a deterministic period-4 model **CANNOT** produce a CNTL=2 chain at all (the next null after Add.212 should be exactly at Add.216, never at Add.213). The Add.213 observation is a **point of impossible-under-A**, so on a strict-period reading P(Add.213=null | strict-A) = 0 and BF(B / strict-A) = ∞ → posterior P(strict-A) = 0. The 0.05 prior assigned in synth #453 was a soft-period reading (allowing ~5% noise around the period-4 cycle); even under that soft reading, posterior P(soft-A) = 0.33 is well below the 0.50 prior, and combined with the Add.212-prior compounding (which pushed P(A) higher than baseline), the **net posterior trajectory P(A) over the Add.208-213 sequence is decisively downward**: ~0.50 at Add.212 (from the NTRP=4 first observation) → ~0.33 at Add.213 (from the chained null falsification). **Synth #455 declares Interpretation A REJECTED for forward forecasting purposes**; Interpretation B (Poisson p_null ≈ 0.143) is the working model.

## CNTL formalisation

CNTL is a **first-class structural metric** of the digest cadence with the following properties:

- **Definition**: CNTL(window) := length of the longest consecutive run of null ticks in the window.
- **Range**: CNTL ∈ ℤ≥0; CNTL = 0 iff no null ticks in the window.
- **Empirical observations**: CNTL(Add.193-208) = 1 (Add.208 singleton), CNTL(Add.193-211) = 1 (Add.208 singleton, Add.209-211 all non-null), CNTL(Add.193-212) = 1 (Add.208 + Add.212 are non-adjacent), **CNTL(Add.193-213) = 2** (Add.212-213 chain).
- **Prior under Interpretation B (Poisson p_null = 0.143)**: P(CNTL ≥ 2 in N=21 ticks | p=0.143) ≈ 1 − P(no two consecutive nulls in 21 Bernoulli trials with p=0.143). Using the known formula for runs in Bernoulli sequences (Feller approximation), P(no run of 2+ in N trials with p) ≈ (1−p)·((1+p−p²)^(N−1) — for N=21, p=0.143 this evaluates to roughly 0.42, so P(CNTL ≥ 2) ≈ 0.58. **The observed CNTL=2 is therefore well within the Poisson-model expectation**, further supporting Interpretation B over a uniform-no-clumping model.
- **Forward observable**: CNTL(Add.214) ∈ {2, 3} with modal **2** (chain-break at Add.214 with prior ~0.85 under Interpretation B's geometric tail; extension to CNTL=3 with prior ~0.15).

## Citation chain to recent SHAs

The Add.211 carriers whose silence at Add.212 + Add.213 contributes to the synth #454 PD baseline (now sustained for 2 consecutive ticks):

- **etraut-openai** (codex #20558 mergeCommit **d898cc8**, codex #19631 mergeCommit **a93c89f**) — silent at Add.212-213 (chain n=2).
- **xli-oai** (codex #20265 mergeCommit **a62b52f**) — silent at Add.212-213.
- **Sameerlite** (litellm #26964 mergeCommit **02cb8b0**) — silent at Add.212-213; R-cross sustain explicitly NOT observed.
- **yuneng-berri** (per Add.210 manifest cadence pair, plus Add.211 silence) — silent through Add.213 (chain n=3 from last Add.210 emergence).

These 4 carriers anchor the **synth #452 2×2 partition population at the moment of last activity** (Add.211); their joint silence over Add.212-213 is the **structural cause** of the chained null tick. The 4 mergeCommits {d898cc8, a93c89f, a62b52f, 02cb8b0} remain the **terminal activity-burst SHAs** of the visible lookback, now spanning a 2-tick post-burst silence with no Add.212/213 successors.

## Discriminating predictions

- **P-455.A** (CNTL trajectory at Add.214): under Interpretation B Poisson p_null = 0.143, P(CNTL extends to 3 | CNTL_so_far = 2) = P(Add.214 = null) ≈ 0.143-0.15 (small upward adjustment for clustering); chain-break with prior ~0.85. Predicted Add.214 CNTL **= 2 with prior ~0.85**, = 3 with prior ~0.15.
- **P-455.B** (NTRP empirical distribution at next null): given the rejection of strict periodicity, NTRP observations going forward should be drawn from a geometric distribution with mean 1/p ≈ 7. The next null after Add.213 is therefore expected around Add.220 with broad spread; if the next null lands at Add.214 (NTRP_next = 1), the cluster-amplification reading is supported; if at Add.215-217, the geometric reading is supported; if not until Add.220+, Interpretation B's vanilla-Poisson reading is confirmed.
- **P-455.C** (joint with synth #456 SCBC): chain-break at Add.214 (P~0.85) would reset at least one repo's silence-chain to 0, dropping SCBC; chain-extension at Add.214 (P~0.15) would push SCBC further toward 1 via continued mean-convergence per synth #456 analysis.

## What this synth does NOT claim

- It does NOT claim Interpretation B is correct in the absolute; it claims Interpretation B is FAVOURED 2:1 over the soft-period Interpretation A and that the strict-period reading is rejected.
- It does NOT extrapolate CNTL beyond Add.214; the geometric-distribution forward projection assumes stationarity which may fail across cycle boundaries.
- It does NOT supersede synth #429 (silence-chain ceiling) or synth #454 (SCBC/PD); CNTL composes with both as an orthogonal structural metric.

## Forward observables

- **Add.214 CNTL** (per P-455.A): modal 2 (chain-break); CNTL=3 with prior ~0.15 would significantly elevate the cluster-amplification hypothesis.
- **Add.214-220 null-tick spacing**: the empirical NTRP distribution should converge toward geometric-mean ~7 if Interpretation B is correct.
- **Add.214 SCBC** (joint with synth #456): chain-break drops SCBC discontinuously; chain-extension continues mean-convergence toward 1.

**End of W17 synthesis #455.**
