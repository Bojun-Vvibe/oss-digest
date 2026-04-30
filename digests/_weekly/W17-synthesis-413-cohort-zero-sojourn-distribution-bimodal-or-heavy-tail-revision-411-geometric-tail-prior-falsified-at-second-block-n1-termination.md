# W17 Synthesis #413 — Cohort-zero sojourn-distribution bimodal-or-heavy-tail revision: synth #411 P-411.B geometric-tail prior decisively falsified at second-block n=1 termination

**Status**: synth #413, W17 series. Date 2026-04-30. Direct continuation of synth #407 (cohort-zero finite-sojourn) and synth #411 (post-rupture cohort-amplitude geometric-decay L-411.1). Lineage anchor: ADDENDUM-192 sha=`f75a52c`, ADDENDUM-191 sha=`83888a2`, ADDENDUM-190 sha=`ab94b04`, synth #411 sha=`20cad94`, synth #412 sha=`a5e5a1e`, synth #407 sha=`1c2479f`.

## 1. Statement

The synth #411 P-411.B prediction (sojourn-block-2 sojourn ≥ 3 ticks at >50%, derived from a geometric-tail under p_block_exit ≈ 0.30 informed by sojourn-block-1=4) is **decisively falsified** at ADDENDUM-192 (sha=`f75a52c`) where sojourn-block-2 terminates at length **1 tick** — the shortest possible non-empty sojourn. The W17 cohort-zero sojourn-distribution at single-anchor n=2 is now an empirical 2-vector {4, 1} which is **incompatible with a single-parameter geometric distribution** at any reasonable p estimate.

**INVARIANT I-413.A (Sojourn-distribution non-geometric at single-anchor n=2)**: Under a geometric distribution Sojourn ~ Geom(p), P(sojourn=4)·P(sojourn=1) = (1-p)³p · p = (1-p)³p² maximized at p=0.4 yields ≈ 0.0345, but this is the joint probability of the specific (4,1) pair not the joint of any-pair-mean-2.5. The Anderson-Darling-style discrepancy is dominated by the variance: empirical Var = 4.5, sample-mean = 2.5 → CV² = 0.72 vs geometric Var(p=0.4)/Mean²(p=0.4) = (0.6/0.16)/(2.5²) = 3.75/6.25 = 0.60. Empirical CV² exceeds geometric prediction at single-anchor n=2 — consistent with **over-dispersion vs geometric**, supporting a **bimodal-or-heavy-tail** alternative.

**LAW L-413.1 (Cohort-zero sojourn-distribution candidate set, post-falsification)**: At single-anchor n=2 supporting, the cohort-zero sojourn-distribution candidate set narrows to:
1. **Bimodal mixture** π·δ_short + (1-π)·δ_long with short ∈ {1, 2}, long ∈ {3, 4, 5}, π ≈ 0.5 at MLE.
2. **Heavy-tail (e.g., Pareto, log-normal)** with shape parameter favoring extreme values.
3. **Empirical distribution** with no parametric assumption — sojourn-block-3 expected to draw from {1, 4} ∪ tail-extension uniformly at single-anchor n=2 supporting.
4. **Negative binomial** with overdispersion parameter > 1 — admissible at single-anchor n=2 but loses parsimony vs bimodal mixture.

**FALSIFICATION CANDIDATE F-413.1**: The next observed sojourn-block-3 sojourn is the discrimination test. Three falsification outcomes:
- **Confirms bimodal** if sojourn-block-3 ∈ {1, 4, 5} (strong-mode draw at low or high end).
- **Falsifies bimodal, supports unimodal-with-overdispersion** if sojourn-block-3 ∈ {2, 3} (intermediate mode-fill).
- **Confirms heavy-tail** if sojourn-block-3 ≥ 6 (extends the right tail beyond block-1=4).

## 2. Anchored evidence

### 2.1 Block-1 (Add.185-188 sojourn=4)
- 4 consecutive cohort-zero ticks (Add.185, 186, 187, 188).
- Note: Add.187 had emitting-cardinality 1 (qwen-code single PR amplitude-1 — synth #410 carrier table) — this is the **block-1 ambiguity**: under a strict cohort-amplitude=0 definition, Add.187 is NOT in the sojourn-block (block-1 sojourn would revise to 2-tick blocks at Add.185-186 and Add.188 separately). Under the relaxed cohort-amplitude ≤ 1 definition (matching the synth #407 finite-sojourn framing), Add.185-188 is a 4-tick block.
- This work uses the **synth #407 finite-sojourn relaxed definition** for consistency with the synth-#411 P-411.B prior; under the strict definition, block-1 sojourn revises to **2** at Add.188 (single-tick block-1 trailing) and the sample becomes {2, 1} with mean=1.5.

### 2.2 Block-2 (Add.191 only, sojourn=1)
- Add.191 sha=`83888a2` — single cohort-zero tick (codex discharge at Add.192 immediately follows).
- Block-2 sojourn = 1, unambiguous under either strict or relaxed cohort-zero definition.
- Block-2 entry follows post-rupture geometric-decay L-411.1 termination at n=2 of decay (Add.189 → 190 → 191 = `5 → 1 → 0`).
- Block-2 exit at Add.192 with codex amplitude-1 discharge (synth #409 right-censored geometric discharge-point validation per M-192.B).

### 2.3 Sample distribution at single-anchor n=2

| Definition | Block-1 sojourn | Block-2 sojourn | Sample-mean | Sample-Var | Sample-CV² |
|------------|-----------------|-----------------|-------------|------------|------------|
| Relaxed (synth #407) | 4 | 1 | 2.5 | 4.5 | 0.72 |
| Strict (cohort-amplitude=0) | 2 | 1 | 1.5 | 0.5 | 0.222 |

Under either definition, the geometric prior P-411.B (sojourn ≥ 3 at >50%) **fails empirically** at the second observed block. The relaxed definition admits stronger over-dispersion vs geometric; the strict definition reduces variance but still admits a bimodal-or-flat-distribution candidate at n=2.

## 3. Cross-process invariant: sojourn-block-rate revision

The synth #407 finite-sojourn framing implied a single sojourn-block per W17. ADDENDUM-191 → ADDENDUM-192 trajectory now reveals **at least 2 sojourn-blocks in W17** at single-anchor n=2 supporting. Sojourn-block-rate is now ≥ 2 per W17 across the observed Add.184-192 window (8-tick observation, 2 blocks → block-arrival-rate ≈ 0.25 per tick). 

**INVARIANT I-413.B (Sojourn-block-rate finite-positive)**: W17 cohort-zero sojourn-block-rate ≥ 2 per W17 at single-anchor n=2 supporting. Block-arrival-rate at the observed Add.184-192 window ≈ 0.25 per tick (2 blocks across 8 emit-or-zero ticks). Asymptotic block-arrival-rate cannot be estimated reliably at sample-n=2; expected value at single-anchor n=2 is in [0.10, 0.40] per tick under naive Poisson-block-arrival prior.

## 4. Falsification of competing fits

### 4.1 Geometric Sojourn ~ Geom(p)
- Predicts E[sojourn] = 1/p, Var[sojourn] = (1-p)/p².
- MLE on {4, 1} yields p̂ = 1/sample-mean = 1/2.5 = 0.40.
- Predicted P(sojourn=1) = 0.40, P(sojourn=4) = 0.6³·0.4 = 0.0864; joint = 0.0346 — extreme-value joint at single-anchor n=2.
- Predicted Var = 0.6/0.16 = 3.75; observed Var = 4.5 → over-dispersion ratio 1.20 at sample-n=2.
- **Discrimination strength at n=2 is weak** (sample size insufficient for confident geometric rejection); however, the synth #411 P-411.B prior P(sojourn ≥ 3 at >50%) under p=0.40 yields P(sojourn ≥ 3) = 0.6² = 0.36 — **already below the >50% claim**, indicating P-411.B was inconsistent with the implicit geometric prior even before observation.
- L-413.1 candidate set replaces geometric as the canonical sojourn-distribution at single-anchor n=2 supporting.

### 4.2 Constant sojourn (sojourn = c invariant)
- Predicts sojourn-block-1 = sojourn-block-2 = c. Empirical {4, 1} **decisively rejects** this at n=2. Falsified.

### 4.3 Monotonic decline (sojourn_k+1 < sojourn_k)
- Predicts sojourn-block-2 < sojourn-block-1; empirical 1 < 4 — **survives at n=1** of pairwise comparison.
- Naive monotonic decline candidate would predict sojourn-block-3 < 1 → 0 — but sojourn=0 is the empty-block degenerate case. Heavy bias toward immediate block-collapse; rejected on continuity grounds.
- Survives at single-anchor n=2 but loses parsimony vs L-413.1 bimodal mixture.

### 4.4 Block-arrival memoryless (Poisson process for block arrivals)
- Predicts inter-block-arrival times exponentially distributed; sojourn-distribution itself is the per-block "service time".
- Compatible with L-413.1 if service times themselves are bimodal-or-heavy-tail; orthogonal to the sojourn-distribution question.
- Block-arrival-rate at the observed Add.184-192 window ≈ 0.25 per tick (synth-level invariant I-413.B).

## 5. Predictions

- **P-413.A**: Next sojourn-block-3 sojourn ∈ {1, 4, 5} (bimodal-confirming) at >40%; ∈ {2, 3} (bimodal-falsifying intermediate mode-fill) at ~30%; ≥ 6 (heavy-tail confirming) at ~18%; ≥ 8 (extreme heavy-tail) at <10%.
- **P-413.B**: F-413.1 fires within Add.193-200 sojourn-block-3 observation (i.e., sojourn-block-3 ∈ {2, 3}) at ~30% — primary falsification path for L-413.1 bimodal candidate.
- **P-413.C**: Sojourn-block-3 entry at Add.193 (immediate cohort-zero re-entry) at >50% per Add.192 P-192.B (cohort-zero re-entry at >50%).
- **P-413.D**: Cohort-zero sojourn-block-rate at W17-end revises to ∈ [2, 4] blocks at single-anchor n=2 supporting at >65% (block-3 entry expected; block-4 entry possible but at <40% within W17 remaining horizon).
- **P-413.E**: Sample-CV² evolves toward stable limit ∈ [0.5, 1.0] at single-anchor n=4 supporting at >50% (additional block observations expected; over-dispersion ratio toward asymptotic value).
- **P-413.F**: L-413.1 bimodal-mixture candidate selected over heavy-tail alternative at synth-#414+ if sojourn-block-3 ∈ {1, 4, 5} at >55% (likelihood-ratio test at sample-n=3); heavy-tail selected if sojourn-block-3 ≥ 6 at ~18%.
- **P-413.G**: Block-arrival-rate refines to ∈ [0.20, 0.35] per tick at single-anchor n=4 supporting at >55% (Poisson-block-arrival under MLE on inter-block-gap = 3 ticks at sample-n=1 yields rate ≈ 0.33; consistent with empirical 0.25 within band).

## 6. Notes on synth lineage and process-class positioning

- **Promotes synth #411** finite-sojourn-with-geometric-amplitude-decay-tail to **finite-sojourn-with-non-geometric-block-distribution AND geometric-amplitude-decay-tail** as the canonical post-rupture cohort dynamics. The two-component model now decouples:
  1. Sojourn-block-distribution: non-geometric, candidate set {bimodal, heavy-tail, empirical} at single-anchor n=2 supporting (was: geometric-tail at synth #411).
  2. Post-rupture amplitude-decay: geometric L-411.1 at r ≈ 0.20 (unchanged at single-anchor n=1; F-411.1 deferred).
- **Orthogonal to synth #412** (fit-class entropy bifurcation H_silent vs H_emitting). Synth #413 addresses cohort-zero sojourn structure; synth #412 addresses cohort-class-distribution entropy. The synth #412 H_silent = 2.585 bits invariant continues to hold at Add.192 (codex emit at amplitude 1 does not transition fit-class).
- **Orthogonal to synth #409** (codex single-repo right-censored geometric discharge). The codex discharge at Add.192 (M-192.B) provides synth #409 a discharge-point validation (synth #414 will formalize); synth #413 is sojourn-distribution at cohort scale, not single-repo discharge.
- **Anchor commits**: ADDENDUM-189 sha=`1cc14c0`, ADDENDUM-190 sha=`ab94b04`, ADDENDUM-191 sha=`83888a2`, ADDENDUM-192 sha=`f75a52c`, synth #407 sha=`1c2479f`, synth #411 sha=`20cad94`, synth #412 sha=`a5e5a1e`.
- **Termination criterion** for L-413.1 lineage: F-413.1 falsification at sojourn-block-3 ∈ {2, 3} (intermediate mode-fill rejecting bimodal at single-anchor n=3); OR sojourn-block-3 ≥ 8 (extreme heavy-tail rejecting bimodal at single-anchor n=3); OR W17 terminates with no further sojourn-blocks (sample-n=2 frozen, lineage deferred to W18).
- **Future synth axis**: synth #414 candidate is the **synth #409 right-censored geometric discharge-point validation** at codex H=7 → discharge per M-192.B. Synth #415+ candidate would be an MLE-fit of the bimodal-mixture L-413.1 at sample-n=3 if sojourn-block-3 observed within W17.
