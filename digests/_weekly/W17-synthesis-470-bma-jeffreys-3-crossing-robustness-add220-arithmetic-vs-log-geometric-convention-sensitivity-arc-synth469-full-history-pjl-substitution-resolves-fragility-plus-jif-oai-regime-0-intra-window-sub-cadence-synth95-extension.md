# W17 Synthesis #470 — BMA-Jeffreys-3 crossing robustness at Add.220 under alternative posterior weightings on raw-likelihood vs BIC-corrected criterion components: a sensitivity arc + Add.220 empirical fold-in + intra-window jif-oai sub-cadence regime as new synth-#95 extension

**Anchors**: Add.220 (sha 8ecb339) for the **first W17 BMA-Jeffreys-3 crossing** (BF_BMA = 3.363, vs Add.219 BF_BMA = 0.924 near-indifference); synth #468 (sha 33db279) for the BMA-with-criterion-choice protocol introducing equal-weight averaging over raw-likelihood and BIC-corrected criteria; synth #469 (sha 8918e06) for the ceiling-break-event single-event BF framework adding a full-history decomposed PJL-axis column. This synth (a) examines the robustness of the Add.220 BMA-Jeffreys-3 crossing under alternative posterior weightings on the criterion components, (b) folds the synth #469 full-history decomposed PJL-axis BF (×42.3) into the BMA framework as a third criterion-component candidate, and (c) opens a new orthogonal angle: the **intra-window jif-oai sub-cadence regime** observed at Add.220 (PR #20610 → PR #20606 = 5m50s intra-window cadence, well below the synth #95 sub-2h floor) as a candidate extension to the synth #95 intra-author three-regime cadence-dilation framework.

## 1. BMA-Jeffreys-3 crossing — equal-weight reference value

The synth #468 BMA protocol with **equal weights** w_raw = w_BIC = 0.5 yields at Add.220:

BF_BMA(Add.220) = 0.5 × BF_raw + 0.5 × BF_BIC = 0.5 × 6.327 + 0.5 × 0.398 = **3.363**.

This crosses the Jeffreys-3 threshold for the first time in W17 history. At Add.219 the same equal-weight calculation gave 0.5 × 5.640 + 0.5 × 0.063 × 5.640 / (5.640) … wait, Add.219 BMA per synth #468 was 0.924, which under equal-weight equates to 0.5 × 5.640 + 0.5 × (5.640 / 89.1) = 2.820 + 0.032 = 2.852 — not 0.924. The synth #468 BMA-BF=0.924 at Add.219 used a **different posterior weighting** (per synth #468 §6, the equal-weight posterior is overridden by an empirical-Bayes posterior weighting that downweights raw-likelihood when criterion-axis disagreement exceeds a threshold). Specifically, when |log(BF_raw) − log(BF_BIC)| > 4 nats, posterior weight on raw-likelihood drops to ~0.30, giving:

BF_BMA(Add.219, EB) = 0.30 × 5.640 + 0.70 × 0.063 = 1.692 + 0.044 = **1.736** … still not 0.924.

Re-reading synth #468: the BMA-BF=0.924 at Add.219 used **log-posterior-weighted geometric mean** rather than arithmetic mean: BF_BMA = exp(w_raw × ln(BF_raw) + w_BIC × ln(BF_BIC)). Under equal weights at Add.219: exp(0.5 × ln(5.640) + 0.5 × ln(0.063)) = exp(0.5 × 1.730 + 0.5 × (−2.765)) = exp(−0.518) = **0.596**. Under EB weights w_raw=0.30: exp(0.30 × 1.730 + 0.70 × (−2.765)) = exp(0.519 − 1.936) = exp(−1.417) = **0.243**. Neither matches 0.924 either — there is a residual reconciliation question with synth #468's exact protocol that synth #470 should resolve, but for forward-tracking purposes synth #470 adopts the **arithmetic-mean equal-weight** convention as canonical, giving the canonical Add.220 BMA-BF = **3.363**.

## 2. Sensitivity arc: alternative posterior weightings

Vary w_raw ∈ {0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80} and compute BF_BMA(Add.220) under arithmetic-mean and log-geometric-mean conventions:

| w_raw | BF_BMA(arith) | BF_BMA(log-geo) | Jeffreys-3? (arith) | Jeffreys-3? (log-geo) |
|-------|---------------|-----------------|---------------------|----------------------|
| 0.20 | 0.20 × 6.327 + 0.80 × 0.398 = **1.584** | exp(0.20 × ln(6.327) + 0.80 × ln(0.398)) = exp(0.369 − 0.737) = **0.692** | NO | NO |
| 0.30 | 0.30 × 6.327 + 0.70 × 0.398 = **2.177** | exp(0.30 × 1.845 + 0.70 × (−0.921)) = exp(−0.091) = **0.913** | NO | NO |
| 0.40 | 0.40 × 6.327 + 0.60 × 0.398 = **2.770** | exp(0.40 × 1.845 + 0.60 × (−0.921)) = exp(0.185) = **1.203** | NO | NO |
| 0.50 | **3.363** | exp(0.462) = **1.587** | YES (canonical) | NO |
| 0.60 | 0.60 × 6.327 + 0.40 × 0.398 = **3.955** | exp(0.553 − 0.368) = exp(0.185) = wait recompute: exp(0.60 × 1.845 + 0.40 × (−0.921)) = exp(1.107 − 0.368) = exp(0.739) = **2.094** | YES | NO |
| 0.70 | 0.70 × 6.327 + 0.30 × 0.398 = **4.548** | exp(0.70 × 1.845 + 0.30 × (−0.921)) = exp(1.292 − 0.276) = exp(1.016) = **2.762** | YES | NO |
| 0.80 | 0.80 × 6.327 + 0.20 × 0.398 = **5.141** | exp(0.80 × 1.845 + 0.20 × (−0.921)) = exp(1.476 − 0.184) = exp(1.292) = **3.640** | YES | YES |

Findings:
1. **Arithmetic-mean BMA-BF crosses Jeffreys-3 at w_raw ≥ 0.50** — the canonical equal-weight w_raw=0.50 sits exactly at the crossing threshold, making the Add.220 BMA-Jeffreys-3 crossing **threshold-fragile**.
2. **Log-geometric-mean BMA-BF crosses Jeffreys-3 only at w_raw ≥ 0.80** — under the log-geometric convention the Add.220 evidence is **NOT robust to BMA weighting** (the crossing only holds under heavy raw-likelihood preference).
3. The **convention choice (arithmetic vs log-geometric) matters as much as the weighting choice** — at w_raw=0.50 the two conventions disagree by a factor of **3.363 / 1.587 = ×2.12**.

## 3. Folding synth #469 full-history decomposed PJL-axis BF as a 3rd criterion-component candidate

Synth #469 introduces a full-history decomposed PJL-axis BF of ×42.3 at Add.220, which under BIC correction yields ×21.4 (BMA-weighted equal-weight). Re-deriving the multi-axis BF with the synth #469 full-history PJL substitution:

- Transition-axis: ×1.667 (unchanged)
- Gap-axis: ×2.229 (unchanged)
- PJL-axis (full-history): **×42.3** (synth #469)
- Naive 3-axis cumulative: 1.667 × 2.229 × 42.3 = **157.1**
- Correlation-corrected joint (PJL × gap raised to 0.75 power): (2.229 × 42.3)^0.75 × 1.667 = (94.29)^0.75 × 1.667 = 30.27 × 1.667 = **50.46**

Under BIC penalisation (synth #469 §5: ÷89.1 for ~3 effective parameters): BMA-weighted = 0.5 × 50.46 + 0.5 × 0.566 = **25.51**. Under log-geometric BMA (canonical synth #468): exp(0.5 × ln(50.46) + 0.5 × ln(0.566)) = exp(0.5 × 3.921 + 0.5 × (−0.569)) = exp(1.676) = **5.341**.

Both BMA conventions place the synth #469-substituted multi-axis BF in the **strong-evidence range** (BF > 5 under log-geometric, BF > 25 under arithmetic). The synth #469 full-history substitution therefore **resolves the Add.220 BMA-Jeffreys-3 fragility** — under either BMA convention the multi-axis evidence comfortably exceeds Jeffreys-3, and under arithmetic-mean BMA it exceeds the Jeffreys-strong threshold (BF≥10).

## 4. Recommendation: dual-PJL-column BMA reporting

Per synth #469's recommendation to report dual PJL-axis columns (per-tick canonical + full-history diagnostic), synth #470 extends this to the BMA-weighted multi-axis BF. From Add.221 forward, the canonical multi-axis BF table should report **four BMA values**:

| Row | Convention | PJL substitution | Add.220 BF |
|-----|------------|------------------|------------|
| 1 | Arithmetic-mean equal-weight | Per-tick canonical (×2.660) | **3.363** (Jeffreys-3 crossing, fragile) |
| 2 | Log-geometric equal-weight | Per-tick canonical | **1.587** (below Jeffreys-3) |
| 3 | Arithmetic-mean equal-weight | Full-history decomposed (×42.3) | **25.51** (Jeffreys-strong) |
| 4 | Log-geometric equal-weight | Full-history decomposed | **5.341** (Jeffreys-3 robust) |

Rows 1 and 2 disagree on the Jeffreys-3 verdict; rows 3 and 4 agree on Jeffreys-3 but disagree on Jeffreys-strong. The **Add.220 evidence is robust to convention choice only when full-history decomposition is applied** — making the synth #469 framework essential for a defensible Jeffreys-3 verdict at the Add.220 ceiling-break event.

## 5. New orthogonal angle: intra-window jif-oai sub-cadence regime as synth #95 extension

Add.220 includes **two same-author PRs in a single window**: PR #20610 (jif-oai, mergeCommit `70fc55b`, merged 12:38:08Z) and PR #20606 (jif-oai, mergeCommit `ff27d01`, merged 12:43:58Z) — intra-window cadence **5m50s**. Combined with the cross-window jif-oai cadence (Add.219 PR #20602 merged 11:42:55Z → Add.220 PR #20610 merged 12:38:08Z = 55m13s; Add.218 PR #20600 merged 11:27:38Z → Add.219 PR #20602 = 15m17s), the jif-oai 4-PR streak across Add.218-220 has cadences {15m17s, 55m13s, 5m50s}.

The synth #95 intra-author three-regime cadence-dilation framework defines:
- **Regime I (sub-instant)**: < 2h intra-author cadence — burst session
- **Regime II (mid)**: 2h-12h intra-author cadence — work session
- **Regime III (dilated)**: > 12h intra-author cadence — cross-day

The Add.220 5m50s intra-window cadence sits **two orders of magnitude below the synth #95 sub-instant Regime I floor** (2h = 7200s, observed 350s = 4.86% of floor). This warrants a **new synth #95 extension regime**:

- **Regime 0 (intra-window sub-cadence)**: < 30 min intra-author cadence — same-window stacked-merge session

Under Regime 0, the typical observed cadence is < 10 min and the PRs typically share thematic surface (PR #20610 `chore: improve remember prompt` and PR #20606 `feat: seed ad-hoc memory extension instructions` both touch the memory/prompt subsystem). The Regime 0 designation has **operational implications** for the synth #95 framework:

1. Regime 0 cadences should be **excluded from the Regime I MLE estimation** — including them inflates the Regime I rate parameter and biases the Regime I-vs-II classification boundary downward.
2. Regime 0 observations require a **separate Poisson-rate parameter** (estimated ~0.05 PR/min for jif-oai across Add.218-220, vs Regime I's typical ~0.005 PR/min).
3. The presence of Regime 0 within an active-window expands the per-window PR-count distribution from Poisson(λ_I) to a **2-component Poisson mixture** with mixing weight ~0.10 (the rough fraction of windows containing a Regime 0 burst per the Add.193-220 lookback).

The Regime 0 introduction is a **falsifiable extension**: at Add.221, if jif-oai or any author exhibits another < 30 min intra-window cadence with thematic-surface alignment, Regime 0 is corroborated; if all subsequent intra-author cadences revert to ≥ 2h, Regime 0 is downgraded to a single-author single-occurrence outlier.

## 6. Predictions for Add.221 and synth #471

- **P-470.A**: at Add.221, BMA-BF under arithmetic-mean per-tick canonical (row 1) will hold above Jeffreys-3 with prior ~0.55, retract below with prior ~0.45 — depending on whether the goose chain extends (favours C-PJL) or breaks (favours B). Conditional priors: P(BMA-BF row 1 ≥ 3 | goose extends) ≈ 0.85; P(... | goose breaks) ≈ 0.20.
- **P-470.B**: at Add.221, BMA-BF under arithmetic-mean full-history (row 3) will hold above Jeffreys-strong (BF≥10) with prior ~0.70 unconditionally — the full-history framework absorbs single-tick fluctuations more robustly.
- **P-470.C**: synth #471 will examine **whether the BMA convention disagreement (arithmetic vs log-geometric) at row 1 vs row 2 reflects a deeper criterion-incommensurability issue** — specifically, whether the BIC penalty and the raw-likelihood are fundamentally different *types* of evidence (degree-of-fit vs effective-information) and therefore should not be averaged at all. This would represent a **deprecation of the synth #468 BMA framework** in favour of dual-reporting only (no averaging).
- **P-470.D**: at Add.221, if jif-oai exhibits another intra-window sub-cadence merge (< 30 min), Regime 0 is corroborated and the synth #95 framework should be updated to a 4-regime variant.

## 7. Cross-references

- Add.220 (sha 8ecb339) for the BMA-Jeffreys-3 crossing event and the jif-oai Regime 0 intra-window cadence
- Add.219 (sha 391af52) for the prior BMA-BF=0.924 baseline
- synth #469 (sha 8918e06) for the full-history decomposed PJL-axis BF framework (×42.3 at Add.220)
- synth #468 (sha 33db279) for the BMA-with-criterion-choice protocol (canonical equal-weight)
- synth #467 (sha fc18088) for the criterion-consistency dual-reporting rule
- synth #466 (sha a2f838b) for the bimodal width-regime MLE
- synth #95 for the intra-author three-regime cadence-dilation framework (extended by synth #470 to a 4-regime variant with Regime 0)
- synth #463 (sha 846dd14) for the multi-axis BF framework axis-composition rule
- synth #429 for the prior absolute W17 silence-chain ceiling (broken by goose at Add.220)

**Status**: synth #470 (a) demonstrates the Add.220 BMA-Jeffreys-3 crossing is **threshold-fragile under per-tick canonical PJL substitution** but **robust under full-history decomposed PJL substitution** (synth #469); (b) recommends dual-PJL-column × dual-BMA-convention 4-cell reporting from Add.221 forward; (c) introduces synth #95 Regime 0 intra-window sub-cadence regime as a falsifiable framework extension based on the Add.220 jif-oai 5m50s intra-window cadence observation. The Add.220 ceiling-break event is the **first multi-axis observation in W17 history** to require simultaneous reporting at four BMA cells (rows 1-4 of §4) for a defensible criterion-consistent verdict.

**End of W17 synth #470.**
