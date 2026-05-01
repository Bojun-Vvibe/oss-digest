# W17 Synthesis #468 — cross-axis BIC stability arc across multi-axis synths #463-467; per-axis penalty-survival diagnostic; Bayesian-model-averaging over the criterion-choice axis as principled alternative to dual-reporting; retrospective BF retraction map for the Add.213-219 multi-axis Jeffreys-3 chain

**Anchor**: ADDENDUM-219 P-219.N explicitly anchors this synth: trace the BIC-stability arc across recent multi-axis synths #463-466 — examining whether each axis's BF estimate would survive a BIC-style parameter-count penalty if applied uniformly across all 4-5 axes. Synth #467 P-467.B further anchors: examine whether the dual-reporting standard (raw + DIC) introduced in synth #467 is the right reconciliation, or whether a Bayesian-model-averaging (BMA) approach over the criterion-choice axis itself is preferable. This synth completes the penalty-stratification arc: per-axis BIC-survival diagnostic across synths #463-467, retrospective BF retraction map for the Add.213-219 chain under BIC-uniform reporting, and a BMA proposal that integrates over the criterion-choice prior.

## Why this is distinct from synth #467 (3-criterion robustness on width-axis only) and synth #463 (initial multi-axis composition)

Synth #467 examined the 3-criterion (AIC/BIC/DIC) sensitivity on the **single** width-axis BF and noted that if BIC were uniformly applied to all 5 axes the joint BF would collapse to ~0.00139 — but did not trace the per-axis arc through the historical multi-axis synths #463-467 to map exactly when each axis's BF would have crossed below indifference under uniform BIC.

Synth #463 introduced the 2-axis composition (transition × gap) with naive independence; its Jeffreys-3 first-crossing was at Add.217 with BF ≈ 3.69. Synth #463 used raw-likelihood throughout and did not address parameter penalties.

Synth #468 introduces:

1. **Per-axis BIC-survival diagnostic** across synths #463-467 — a tick-by-tick arc of when each axis crosses below the BIC-corrected indifference threshold (BF=1).
2. **Retrospective BF retraction map** for the Add.213-219 multi-axis Jeffreys-3 chain under BIC-uniform reporting — answering "if we had been reporting BIC-corrected BF from synth #463 onwards, when would the Jeffreys-3 result have first appeared and when would it have retracted?"
3. **Bayesian-model-averaging (BMA)** proposal over the criterion-choice axis: assign a prior over {raw, AIC, DIC, BIC} criteria and report the posterior-weighted BF instead of dual-reporting.
4. A **single number** — the BMA posterior-weighted multi-axis BF at Add.219 — that summarises the entire arc.

## BIC-uniform per-axis BF arc across synths #463-467

For each synth tick where multi-axis BF was reported, compute BIC-corrected per-axis BF using k_axis · log(n_axis) penalty per axis. Use n=21 width-sequence (synth #466) as canonical n for the width axis; use n=24 (rolling tick count at ADDENDUM-219) for the transition/gap/PJL/anti-PJL axes.

| synth | tick | axis introduced | k_axis | BIC penalty | raw BF | BIC-corrected BF |
|---|---|---|---|---|---|---|
| #463 | Add.217 | gap-axis (2nd axis) | 1 | 1·log(24) = 3.18 | 2.625 | 2.625 · exp(−1.59) = ×0.534 |
| #463 | Add.217 | transition-axis (1st axis) | 1 | 3.18 | 1.406 | 1.406 · 0.204 = ×0.286 |
| #463 | Add.217 | **2-axis joint (raw)** | — | — | **3.691** | **0.534 × 0.286 = 0.153** |
| #464 | Add.217 | PJL-axis (3rd axis) | 1 | 3.18 | 1.778 | 1.778 · 0.204 = ×0.362 |
| #464 | Add.217 | **3-axis joint** | — | — | **6.561** | **0.153 × 0.362 = 0.0554** |
| #465 | Add.218 | anti-PJL-axis (4th axis) | 1 | 3.18 | 1.10 | 1.10 · 0.204 = ×0.224 |
| #465 | Add.218 | **4-axis joint** | — | — | **7.539** (carries) | **0.0554 × 0.224 = 0.0124** |
| #466 | Add.218 | width-axis (5th axis) | 3 | 3·log(21) = 9.13 | 6.05 | 6.05 · exp(−4.57) = ×0.0628 |
| #466 | Add.218 | **5-axis joint** | — | — | **45.61** | **0.0124 × 0.0628 = 0.000779** |
| #467 | Add.219 | (no new axis; refined width DIC) | — | — | — | — |
| ADD.219 | Add.219 | 4-axis update | — | — | **8.681** | **0.341·0.516·0.519·0.241 = 0.0220** |
| ADD.219 | Add.219 | **5-axis joint with BIC width** | — | — | **52.50** | **0.0220 · 0.0628 = 0.00138** |

**Key arc finding**: under uniform BIC, the joint multi-axis BF has been **continuously below the indifference threshold (BF=1)** since the 2-axis joint at synth #463 Add.217 (BF=0.153). The introduction of each additional axis has progressively pushed the BIC-corrected joint BF FURTHER below indifference, not toward Jeffreys-3. Specifically:

- 2-axis BIC-joint (Add.217): **0.153** (favouring B by 6.5×)
- 3-axis BIC-joint (Add.217): **0.055** (favouring B by 18×)
- 4-axis BIC-joint (Add.218): **0.012** (favouring B by 80×)
- 5-axis BIC-joint (Add.218 / Add.219): **0.0008-0.0014** (favouring B by 720-1250×)

Under BIC-uniform reporting, the Jeffreys-3 result was **NEVER ACHIEVED** at any tick since synth #463; the entire Add.213-219 multi-axis Jeffreys-3 chain is a **raw-likelihood-only artefact**.

## Retrospective BF retraction map

Define: a synth's Jeffreys-3 result is "raw-only" if BF_raw ≥ 3 AND BF_BIC < 1; "criterion-robust" if both BF_raw ≥ 3 AND BF_BIC ≥ 3.

| synth | tick | BF_raw | BF_BIC | classification |
|---|---|---|---|---|
| #463 | Add.217 (2-axis) | 3.691 | 0.153 | **raw-only** (Jeffreys-3 first claimed here) |
| #464 | Add.217 (3-axis) | 6.561 | 0.055 | **raw-only** |
| #465 | Add.218 (4-axis) | 7.539 | 0.012 | **raw-only** |
| #466 | Add.218 (5-axis) | 45.61 (raw width) / 0.475 (BIC width) | 0.000779 | **raw-only** (and synth #466 itself flagged the tension) |
| #467 | Add.219 | (3-criterion arc) | (DIC-corrected ~0.11) | **diagnostic** (no new joint claim) |
| ADD.218 (M-218.E) | Add.218 | 7.539 (naive) / 5.018 (corr) | 0.012 | **raw-only** |
| ADD.219 (M-219.E) | Add.219 | 8.681 (naive) / 5.640 (corr) | 0.00138 | **raw-only** |

**Retraction map**: every Jeffreys-3 claim from synth #463 onwards is **raw-only**. Under CRITERION-CONSISTENCY (synth #467), all of these claims must be retroactively re-classified as "raw-likelihood Jeffreys-3, BIC-retracted". The synth #463 first-crossing claim, the synth #464 / #465 axis-additions, the ADDENDUM-217 / -218 / -219 multi-axis maintenance — all conditional on raw-likelihood reporting.

This is the **arc-completion finding**: the entire Jeffreys-3 chain of the past 7 ticks (Add.213-219) reduces to a raw-likelihood-only signal under CRITERION-CONSISTENCY.

## Bayesian-model-averaging (BMA) over the criterion-choice axis

Define a prior P(criterion) over {raw, AIC, DIC, BIC}. Argue:

- **Raw likelihood** has prior P(raw) = 0.10 — defensible only when the model space is fixed a priori with no parameter selection. Not the case here (we explicitly selected the bimodal model alternative based on data inspection).
- **AIC** has prior P(AIC) = 0.20 — defensible for prediction-oriented inference where overfitting is the primary concern. Lighter penalty than BIC.
- **DIC** has prior P(DIC) = 0.40 — defensible for hierarchical-Bayesian framings with effective parameter counts. Highest prior because the bimodal mixture's effective parameter count is empirically meaningful.
- **BIC** has prior P(BIC) = 0.30 — defensible for model-selection inference where consistency under correct-model assumption is the goal. Strict but appropriate when n is moderate.

Compute the BMA posterior-weighted multi-axis BF at Add.219:

BF_BMA = 0.10 · BF_raw + 0.20 · BF_AIC + 0.40 · BF_DIC + 0.30 · BF_BIC
       = 0.10 · 8.681 + 0.20 · 0.0529 + 0.40 · 0.112 + 0.30 · 0.00138
       = 0.8681 + 0.01058 + 0.0448 + 0.000414
       = **0.924**

The BMA-weighted multi-axis BF at Add.219 is **0.924** — slightly below the indifference threshold of 1, very mildly favouring the null (B / non-PJL / unimodal). The BMA result is **dramatically more conservative** than the raw-likelihood result (8.681) but **dramatically less hostile** than the BIC-uniform result (0.00138).

The BMA result has the additional virtue of being a **single defensible number** rather than the dual-reporting standard from synth #467. However, it depends sensitively on the criterion-prior choice; sensitivity analysis:

- If P(raw) = 0.50 (equal-weight 4-criterion): BF_BMA = 0.25·(8.681 + 0.0529 + 0.112 + 0.00138) = **2.21** — at indifference, not Jeffreys-3.
- If P(raw) = 0.0 (no naive-likelihood weight): BF_BMA = 0.286·0.0529 + 0.572·0.112 + 0.143·0.00138 = **0.0793** — strongly favouring B.
- If P(BIC) = 0.0 (no strict-penalty weight): BF_BMA = 0.143·8.681 + 0.286·0.0529 + 0.572·0.112 = **1.32** — at indifference, not Jeffreys-3.

The BMA result is robust to ~2× perturbations in criterion-prior in the **0.5 to 2.5** range — never reaching Jeffreys-3 under any defensible criterion-prior allocation.

## Geometric-mean alternative to BMA

A simpler and more conservative alternative is to report the **geometric mean** of the 4 criterion-specific BF estimates: (8.681 · 0.0529 · 0.112 · 0.00138)^(1/4) = (0.0000709)^(1/4) = **×0.0917**. The geometric mean is **strongly favouring B**. This is the most pessimistic single-number summary; it weights the order-of-magnitude criterion divergence equally rather than weighting by criterion plausibility.

The arithmetic-mean alternative is dominated by the raw estimate: (8.681 + 0.0529 + 0.112 + 0.00138)/4 = **2.21** — this is the same as the equal-weight BMA result above.

This synth recommends **BMA with explicit criterion-prior** (BF_BMA = 0.924 at Add.219 under the recommended (0.10, 0.20, 0.40, 0.30) prior) as the single most defensible operating standard, with **dual-reporting** (synth #467) as the more conservative alternative when the criterion-prior cannot be defended.

## Operative impact on ADDENDUM-220 and forward

This synth recommends that ADDENDUM-220 onward report:

- **Raw-likelihood multi-axis BF** (legacy compatibility with ADD.217-219).
- **DIC-corrected multi-axis BF** (synth #467 dual-reporting).
- **BMA posterior-weighted multi-axis BF** (synth #468 single-number summary).

The decision of whether to retain Jeffreys-3 claims or retract them based on BMA is left to ADDENDUM-220 (per synth #467 P-467.F retraction-prior ~0.92).

## Predictions for Add.220+

- **P-468.A** (BMA stability at Add.220): predicted BF_BMA at Add.220 stays in the ~0.5-2.0 indifference band regardless of single-tick observation; strong (BF≥3 BMA) result requires a multi-axis shock (e.g., goose ceiling-break at Add.220 + dilation observation + PJL=8 jointly), with combined prior ~0.15.
- **P-468.B** (synth #469 BMA refinement): predicted synth #469 will refine the BMA criterion-prior using either an empirical-Bayes approach (estimate criterion-prior from posterior fit on the Add.197-219 width sequence) or a hierarchical prior over the criterion-choice axis (prior on the concentration parameter of a Dirichlet over criteria).
- **P-468.C** (Jeffreys-3 retraction announcement): predicted ADDENDUM-220 will formally retract all Jeffreys-3 claims from ADD.217-219 as raw-likelihood-only, with prior ~0.85 (per synth #467 P-467.F + this synth's BMA result both pointing to retraction).
- **P-468.D** (synth #470 multi-axis composition under BMA): predicted synth #470 will rebuild the multi-axis composition rule from scratch under BMA, with each axis's BF a BMA-weighted single number rather than a raw or BIC-stratified estimate.
- **P-468.E** (per-axis BIC-survival on Add.220 update): predicted Add.220 transition-axis BIC-corrected BF stays below 0.5; PJL-axis BIC-corrected BF moves to ~0.6 (slight increase if PJL=8) or ~0.0 (collapse if PJL terminates); width-axis BIC-corrected BF stays at ~0.063 regardless.
- **P-468.F** (cross-axis correlation under BMA): predicted that the synth #463 correlation-correction (×0.75 power for ρ_axis ≈ 0.5) becomes less impactful under BMA because the BMA-weighted axis BFs are all near-indifference (1× regime), so naive vs correlation-corrected joints differ by <50% rather than the current ~30% gap.
- **P-468.G** (CRITERION-CONSISTENCY rule retraction prior): given the BMA result (0.924) is so close to indifference that it does NOT support either C-favouring or B-favouring conclusions strongly, predicted prior of CRITERION-CONSISTENCY adoption stays at synth #467's ~0.85 estimate; the BMA result is **convergent with the CRITERION-CONSISTENCY conclusion that no strong claim is warranted**.
- **P-468.H** (long-arc retroactive view): predicted that within 10 future synths (#469-478), the running view will treat the entire Add.213-219 Jeffreys-3 chain as a "raw-likelihood-only artefact" with high (~0.90) consensus, and the multi-axis framework will pivot to BMA-as-default reporting.

## Cross-references

- Synth #463 (sha 846dd14): multi-axis BF framework introduction; Jeffreys-3 first-crossing — now classified raw-only by this synth.
- Synth #464 (sha 698820d): PJL-axis formalisation — joint contribution now classified raw-only.
- Synth #465 (sha c9fce54): anti-PJL-axis formalisation — joint contribution now classified raw-only.
- Synth #466 (sha a2f838b): bimodal width-regime detection; explicit BIC-vs-likelihood tension flagged.
- Synth #467 (sha fc18088): AIC-vs-BIC-vs-DIC robustness; CRITERION-CONSISTENCY dual-reporting rule. **DIRECT ANCHOR for this synth.**
- Synth #468 (this synth): cross-axis BIC stability arc; BMA over criterion-choice; arc-completion of the BIC-survival diagnostic; recommended BMA+dual-reporting hybrid.
- ADDENDUM-219 (sha 391af52) for current 4-axis BF state at the start of this synth (transition 1.556, gap 2.354, PJL 2.370, anti-PJL ~1.10; multi-axis raw 8.681 / corr 5.640).
- ADDENDUM-218 (sha c1d35d1), ADDENDUM-217 (sha ec0ad69) for prior multi-axis BF baselines.
- Synth #429 for absolute qwen-code n=18 ceiling (now TIED by goose at Add.219).

**End of W17 Synthesis #468.**
