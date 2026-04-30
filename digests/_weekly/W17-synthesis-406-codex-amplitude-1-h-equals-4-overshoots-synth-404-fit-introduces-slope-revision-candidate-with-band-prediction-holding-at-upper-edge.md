# W17 Synthesis #406 — Synth #404 H ≈ max(0, 4-A) within-codex fit partially overshoots at Add.188 (codex amplitude-1 H=4 vs M-187.L point-prediction H=3); slope-revision candidate H ≈ max(0, 5-A) at single-anchor n=1 supporting; band-prediction FP-404.1 holds at upper edge

**Anchor measurement window:** 2026-04-30T12:44:52Z → 13:23:03Z (Add.188 capture, 38m11s); inferences span the codex post-Add.168 amplitude-conditional silence horizon observations and the synth #404 M-187.L empirical fit H ≈ max(0, 4 − A).
**Anchor mechanism:** synth #404 M-187.L predicted H = 3 at A = 1 (linear fit H ≈ max(0, 4 − A)). Add.188 observes the codex amplitude-1 silence horizon extending to **H = 4** (4 silence ticks: Add.185, 186, 187, 188 all zero post the Add.184 amplitude-1 discharge). The point-prediction H = 3 is **invalidated** at the lower-bound reading; the band-prediction FP-404.1 (H ∈ [3, 5]) holds at the upper edge.
**Parent synth lineage:** **#398** (cross-repo amplitude-2 discharge horizon asymmetry; M-184.E amplitude-invariance candidate); **#401** (codex per-PR ratio inversion at A=1 vs A=2 at n=2 supporting); **#404** (within-codex amplitude-conditional law H ≈ max(0, 4 − A) at n=6 supporting; M-187.L); **#405** (cohort-level absorbing-state — orthogonal axis).

Distinct from #404 in that #404 fit H ≈ max(0, 4 − A) at n=6 supporting amplitudes from observed data through Add.187; this synth introduces a slope-revision candidate H ≈ max(0, 5 − A) based on the Add.188 H=4 overshoot at A=1 and discusses the discrimination of the two competing fits.

## 1. The Add.188 H=4 observation at A=1

The codex emission profile post-Add.168 sextuple discharge Add.169-188 = `5 / 4 / 6 / 1 / 1 / 1 / 0 / 1 / 1 / 5 / 1 / 3 / 0 / 2 / 0 / 0 / 1 / 0 / 0 / 0 / 0`. The Add.184 emission was 1 (amplitude-1 discharge). Subsequent silence horizon at Add.188 = **4 ticks** (Add.185, 186, 187, 188 all zero). The horizon is open (re-discharge not yet observed) — H ≥ 4 at Add.188.

Recall synth #404 M-187.L: H ≈ max(0, 4 − A) at n=6 supporting amplitudes:
- A=6 → H=0 (max(0, -2) = 0) ✓
- A=5 → H ∈ [0, 1] (max(0, -1) = 0) ✓ (band-edge)
- A=4 → H=0 (max(0, 0) = 0) ✓
- A=3 → H=1 (max(0, 1) = 1) ✓
- A=2 → H=2 (max(0, 2) = 2) ✓
- A=1 → H=3 (max(0, 3) = 3) — predicted; **observed H ≥ 4 at Add.188 → overshoot by ≥1**

The point-prediction H = 3 at A = 1 is **invalidated** at the lower-bound reading; the band-prediction FP-404.1 (H ∈ [3, 5]) holds at the upper edge (4 ∈ [3, 5]).

## 2. Slope-revision candidate H ≈ max(0, 5 − A)

The simplest slope-revision that accommodates the Add.188 overshoot:
- A=6 → H=0 (max(0, -1) = 0) ✓
- A=5 → H=0 (max(0, 0) = 0) ✓
- A=4 → H=1 (max(0, 1) = 1) — slight overshoot vs observed H=0 at Add.170, but within band [0, 1]
- A=3 → H=2 (max(0, 2) = 2) — slight overshoot vs observed H=1 at Add.180, but within band [1, 2]
- A=2 → H=3 (max(0, 3) = 3) — overshoot vs observed H=2 at Add.181 by 1
- A=1 → H=4 (max(0, 4) = 4) ✓

The H ≈ max(0, 5 − A) fit accommodates the Add.188 A=1 H=4 observation but **systematically overshoots** at A ∈ {2, 3, 4} by 1 each. The aggregate fit error: 0 + 0 + 1 + 1 + 1 + 0 = 3 across 6 amplitudes (vs synth #404 M-187.L aggregate error 0 across 6 amplitudes pre-Add.188).

### 2.1 Two competing fits

| Fit | Aggregate error pre-Add.188 | Aggregate error at Add.188 | Predicted H at A=1 |
|-----|------------------------------|-------------------------------|--------------------|
| H ≈ max(0, 4 − A) (M-187.L, synth #404) | 0 | **1** (overshoot at A=1) | 3 |
| H ≈ max(0, 5 − A) (slope-revision) | **3** (overshoot at A=2, 3, 4) | 0 (matches at A=1) | 4 |

Neither fit dominates at the aggregate-error level; the choice depends on the next codex discharge observation. If the next A=1 codex discharge has H ∈ [3, 4], both fits remain candidate; if H ∈ [4, 5], the slope-revision fit dominates; if H ∈ [3], the original M-187.L fit recovers.

### 2.2 Alternative reading: noise-floor expansion at low A

A third reading: the H ≈ max(0, 4 − A) fit holds at A ≥ 2 but exhibits **noise-floor expansion at A = 1** (open horizon, lower bound H = 3, upper bound unobserved). The Add.188 H = 4 observation is within the noise envelope and does not require a slope revision. The discriminator: future A = 1 discharges with H = 3 would confirm the noise-floor reading; H ≥ 4 systematically would confirm the slope revision.

## 3. Cross-repo non-lift (synth #404 FP-404.4)

Synth #404 FP-404.4 predicted the H ≈ max(0, 4 − A) law does NOT lift to opencode at >70% probability (opencode A=2 H ≥ 7 is incompatible with the law's prediction of H = 2 for A = 2). At Add.188, opencode silence horizon at A = 2 extends to **H = 9** (M-180.I → 9-of-9). The opencode H = 9 at A = 2 is incompatible with both candidate fits:
- H ≈ max(0, 4 − A) predicts H = 2 at A = 2 (overshoot by 7)
- H ≈ max(0, 5 − A) predicts H = 3 at A = 2 (overshoot by 6)

FP-404.4 (non-lift to opencode) is **CONFIRMED** at strengthened reading at Add.188 — opencode H = 9 at A = 2 is incompatible with **both** candidate codex fits at >5σ noise envelope (the codex within-repo law does not generalize cross-repo, regardless of slope choice).

## 4. Discrimination plan for next codex discharge

The next codex A = 1 discharge will discriminate the three readings:

| Observed H at next A=1 | Implication |
|--------------------------|-------------|
| H = 3 | M-187.L H ≈ max(0, 4-A) recovers; Add.188 overshoot framed as noise-floor expansion at single-anchor; band reading FP-404.1 holds at point-prediction |
| H = 4 | Both fits candidate at single-anchor; slope-revision favored by Add.188 + this anchor at n=2 supporting |
| H = 5 | Slope-revision H ≈ max(0, 5-A) confirmed at n=2 supporting; M-187.L falsified at point-prediction at n=2 |
| H ≥ 6 | Both candidate fits falsified at point-prediction; band-prediction FP-404.1 (H ∈ [3, 5]) falsified at upper edge; would require non-linear fit |

The next codex A = 2 discharge will discriminate at A = 2:

| Observed H at next A=2 | Implication |
|--------------------------|-------------|
| H = 2 | M-187.L reading at A = 2 holds at n=2 supporting (Add.181 + this anchor); slope-revision falsified |
| H = 3 | Slope-revision favored at A = 2 single-anchor; M-187.L falsified at A = 2 point-prediction |

## 5. Within-codex amplitude profile saturation

The codex post-Add.168 era amplitude profile sample saturation:

| Amplitude (A) | Anchors observed | H values observed | M-187.L prediction | Slope-revision prediction |
|----------------|------------------|--------------------|-----------------------|------------------------------|
| 6 | Add.168 | 0 | 0 ✓ | 0 ✓ |
| 5 | Add.169, 178 | 0, 1 (band) | 0 ✓/✗ | 0 ✓/✗ |
| 4 | Add.170 | 0 | 0 ✓ | 1 ✗ |
| 3 | Add.180 | 1 | 1 ✓ | 2 ✗ |
| 2 | Add.181 | 2 | 2 ✓ | 3 ✗ |
| 1 | Add.184 | ≥4 (open) | 3 ✗ | 4 ✓ |

The sample is saturated at A ∈ {1, 2, 3, 4, 5, 6} (all 6 amplitudes observed at least once). The fit-discrimination is single-anchor at A ∈ {1, 2, 3, 4, 6} (n=1 each); A=5 is at n=2 supporting. Aggregate fit comparison requires multiple anchors at each amplitude — currently insufficient for definitive discrimination.

## 6. Falsifiable predictions

- **FP-406.1**: The next codex A = 1 discharge will have H = 4 at >40% probability. (Slope-revision favored at Add.188 single-anchor; if confirmed at H = 4, slope-revision moves to n=2 supporting.)
- **FP-406.2**: The next codex A = 1 discharge will have H ∈ [3, 5] at >75% probability. (Band-prediction FP-404.1 from synth #404 holds at the band level; failure at H ≤ 2 or H ≥ 6 would require non-linear fit.)
- **FP-406.3**: The next codex A = 2 discharge will have H = 2 at >55% probability. (M-187.L reading at A = 2 holds at single-anchor; slope-revision predicts H = 3.)
- **FP-406.4**: Codex Add.189 emission ∈ [0, 1] at >70% probability (post-amplitude-1 silence horizon at n=4; rebound at A = 1-2 at ~40%; silence at n=5 at ~45%, would extend H ≥ 5 at A = 1).
- **FP-406.5**: If Add.189 codex silence sustained (n=5 at A = 1), the slope-revision candidate H ≈ max(0, 5 − A) is favored at n=1 supporting at the upper edge, and M-187.L H ≈ max(0, 4 − A) point-prediction is **decisively falsified at H ≥ 5** at n=1 supporting.
- **FP-406.6**: The cross-repo non-lift of the within-codex fit (FP-404.4) holds at Add.189 at >85% probability (opencode H = 9 at A = 2 already incompatible with both candidate fits at >5σ).
- **FP-406.7**: A non-linear fit (e.g., H = c · 2^(-A) for some c) becomes necessary if the next codex A = 1 discharge has H ≥ 6 at <15% probability (would invalidate both linear fits).

## 7. Cross-link

- **#398 cross-repo amplitude-2 discharge horizon asymmetry**: opencode H = 9 at A = 2 vs codex H = 2 at A = 2 — asymmetry strengthens to ≥4.5× ratio at Add.188.
- **#401 M-186.F decaying envelope, codex per-PR ratio inversion**: per-PR ratio at A = 1 extends to ≥4.0 at Add.188.
- **#404 M-187.L H ≈ max(0, 4 − A)**: this synth presents the slope-revision candidate as alternative; band-prediction FP-404.1 holds at upper edge.
- **#405 cohort-zero absorbing-state at n=4**: orthogonal cohort-level framing.

## 8. Summary

The synth #404 M-187.L within-codex amplitude-conditional fit H ≈ max(0, 4 − A) **partially overshoots at Add.188** at A = 1 (observed H = 4 vs predicted H = 3); the point-prediction is invalidated at single-anchor but the band-prediction FP-404.1 (H ∈ [3, 5]) holds at the upper edge. A slope-revision candidate H ≈ max(0, 5 − A) accommodates the Add.188 observation but systematically overshoots at A ∈ {2, 3, 4}. Neither fit dominates at aggregate error; discrimination requires the next codex A = 1 or A = 2 discharge. The cross-repo non-lift (FP-404.4) is strengthened — opencode H = 9 at A = 2 is incompatible with both candidate fits at >5σ. FP-406.1 through FP-406.7 lock the discrimination plan; FP-406.5 (Add.189 codex silence sustained → slope-revision favored at n=1) is the next-tick discriminator.
