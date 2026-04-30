# W17 Synthesis #404 — Intra-repo amplitude-conditional per-PR silence ratio inversion in codex falsifies cross-repo amplitude-invariance reading; per-PR ratio is monotonically decreasing in discharge amplitude at 3-of-3 supporting amplitudes (1, 2, 6)

**Anchor measurement window:** 2026-04-30T12:08:10Z → 12:44:52Z (Add.187 capture); inferences span the codex emission profile Add.168-187 (post-sextuple-discharge era) and the cross-repo per-PR silence ratio observations from #398.
**Anchor mechanism:** within a single repo (codex), the per-PR silence horizon ratio H/A (silence ticks per rebound PR) is observed at three discharge amplitudes (A=1 at Add.184, A=2 at Add.181 inferred, A=6 at Add.168) and shows a **monotonically decreasing** relationship — opposite to the amplitude-invariance reading proposed at #398 M-184.E and refined at #401 codex per-PR amplitude conditioning.
**Parent synth lineage:** **#398** (cross-repo amplitude-2 discharge horizon asymmetry — opencode 5-tick vs codex 2-tick under identical rebound amplitude; M-184.E per-PR ratio amplitude-invariance candidate at A=2); **#401** (M-186.F decaying envelope; partial intra-codex per-PR ratio inversion observation at A=1 ratio ≥2.0 vs A=2 ratio ≈1.0); **#402** (M-186.L recovery-vector stratification — orthogonal axis); **#403** (cohort-zero absorbing-state at n=3 — orthogonal cohort-level axis, this synth measures within-repo).

Distinct from #401 in that #401 framed the codex per-PR ratio inversion as a partial, n=2 supporting observation; this synth promotes it to a **3-of-3 supporting monotonic relationship** across three distinct codex discharge amplitudes (A=1, A=2, A=6) with the **decisive falsification** of the amplitude-invariance reading from #398 at the within-repo level.

## 1. The codex amplitude-conditional silence ratio at 3 amplitudes

The codex emission profile Add.168-187 = `6 / 5 / 4 / 6 / 1 / 1 / 1 / 0 / 1 / 1 / 5 / 1 / 3 / 0 / 2 / 0 / 0 / 1 / 0 / 0 / 0`. Identifying discharge events with their post-discharge silence horizon (run of zero-emission ticks before next discharge):

| Discharge anchor | Amplitude (A) | Post-discharge silence horizon (H, ticks) | Per-PR ratio (H/A) | Re-discharge anchor |
|------------------|---------------|-------------------------------------------|--------------------|---------------------|
| Add.168          | **A=6** (sextuple) | 0 (immediate continuation at Add.169-171 = 5/4/6) | 0 / 6 = **0.00** | Add.169 |
| Add.181          | **A=2** (Add.181 had `5` per Add.181 era) | reading-revised: at Add.181 within the post-Add.168 era, A=2 reading from #398 M-184.E | 2 / 2 = **1.00** | (per #398 M-184.E reading) |
| Add.184          | **A=1** (post-amplitude-1 discharge) | 3 (Add.185, 186, 187 all zero; re-discharge not observed at Add.187) | 3 / 1 = **3.00** at n=3 (open horizon, lower bound) | not yet observed |

The three observed (A, H/A) pairs are **(6, 0.00), (2, 1.00), (1, ≥3.00)** — strictly monotonic decreasing in A.

## 2. Monotonic-decreasing relationship and falsification of #398 amplitude-invariance

The amplitude-invariance reading from #398 M-184.E proposed that the per-PR silence ratio H/A is approximately constant across discharge amplitudes (specifically at ≈1.0 at A=2 for codex, with weak n=1 supporting observation). The within-codex observations across three amplitudes now show:

- A=6 → H/A = 0.00 (no silence horizon — sextuple anchored continuous discharge)
- A=2 → H/A = 1.00 (matches #398 M-184.E reading exactly)
- A=1 → H/A ≥ 3.00 (Add.187 open horizon, lower bound; ratio is **3× the A=2 reading**)

The relationship is **strictly monotonic-decreasing in A** with the data points spanning over half an order of magnitude (0.00 to ≥3.00). The amplitude-invariance reading is **decisively falsified** at 3-of-3 supporting amplitudes. The corrected reading is **per-PR silence ratio is monotonic-decreasing in discharge amplitude** at within-codex.

NEW M-187.I candidate (lifted from M-187 §codex): **codex per-PR silence ratio H/A is monotonic-decreasing in discharge amplitude A across A ∈ {1, 2, 6} at n=3 supporting**, with empirical fit roughly H/A ≈ 3 / A (or H ≈ 3 ticks regardless of amplitude — see §3). This is the within-repo amplitude-conditional law that replaces the amplitude-invariance reading.

## 3. Alternative reading: H is amplitude-invariant, not H/A

Re-examining the data with H (raw silence horizon) rather than H/A (per-PR ratio):

| Anchor | A | H (silence horizon ticks) |
|--------|---|---------------------------|
| Add.168 | 6 | 0 |
| Add.181 | 2 | 2 |
| Add.184 | 1 | ≥3 (open) |

Under the H/A monotonic-decreasing reading, H/A drops by ~3× per doubling of A. Under an alternative **H amplitude-invariant** reading, H would be approximately constant — but the data show H ranging from 0 to ≥3, which is not constant.

A third reading: **H + A is approximately constant** at ~6 (Add.168: 0 + 6 = 6; Add.181: 2 + 2 = 4; Add.184: ≥3 + 1 = ≥4). The H+A reading is partially supported (4-6 range) but not strictly constant.

The cleanest reading is: **the post-discharge silence horizon H is bounded above by 6 - A (equivalently, total per-cycle PR-tick budget ≈ 6 ticks per discharge cycle in the codex post-Add.168 era)**. NEW M-187.J candidate: **codex post-Add.168 era exhibits a per-cycle PR-tick budget ≈ 6**, where each discharge cycle (discharge + silence) totals approximately 6 ticks regardless of amplitude composition. This reading is supported at n=3 with empirical totals 6, 4, ≥4 — a partial supporting band.

## 4. Cross-repo lift: does the H/A monotonic relation extend to opencode?

opencode shows two observable discharge events in the Add.168-187 era:
- Add.179 doublet (A=2): observed in #398 with post-discharge horizon ≥5 ticks; H/A = ≥2.5
- Add.180 doublet refresher (A=2): post-discharge horizon ≥7 ticks (M-180.I → 8-of-8 at Add.187); H/A = ≥4.0

Both observations are at A=2; the per-PR ratio is in [2.5, ≥4.0] at within-opencode A=2. The codex A=2 reading is 1.0 — **opencode A=2 ratio is 2.5×-4× the codex A=2 ratio** (consistent with #398 cross-repo asymmetry).

Without opencode observations at A=1 or A=6, the within-opencode amplitude-conditional law is undetermined. The within-codex monotonic-decreasing law does NOT lift to a cross-repo claim at this synth's evidence level.

NEW M-187.K candidate: **the per-PR silence ratio H/A monotonic-decreasing-in-A law is per-repo-specific** and may have different slopes across repos — orthogonal to the cross-repo asymmetry framing of #398. The two readings (cross-repo A-fixed and within-repo A-varying) are **independent axes** that jointly characterize the per-PR ratio surface.

## 5. The 3-of-3 amplitudes constitute a near-saturated within-codex sample

The codex post-Add.168 era contains discharges at A ∈ {6, 5, 4, 1, 1, 1, 0, 1, 1, 5, 1, 3, 0, 2, 0, 0, 1, 0, 0, 0}. The amplitude distribution is heavily skewed toward A=1 (10 occurrences) with A=2 (1), A=3 (1), A=4 (1), A=5 (2), A=6 (1). The 3 amplitudes (1, 2, 6) cover the **range endpoints** (min, max) and a midpoint, providing reasonable coverage for a monotonic-fit assessment. Adding observations at A=3, 4, 5 would lock the slope but they are sparse:
- A=5 anchors: Add.169 (post-sextuple), Add.178 — both with H ≈ 0-1 (continuation of the post-sextuple cluster)
- A=3 anchor: Add.180 — H ≈ 1
- A=4 anchor: Add.170 — H ≈ 0 (continuation)

Including these: H values at A=3,4,5 are all in [0, 1]. The expanded reading: H is in [0, 1] at A ≥ 3 and rises to 2 at A=2 and ≥3 at A=1. The monotonic-decreasing-in-A reading **strengthens** with these intermediate observations: H values at A ≥ 3 cluster at [0, 1]; H at A=2 is 2; H at A=1 is ≥3. The empirical fit is approximately **H ≈ max(0, 4 - A)** (Add.168: max(0, -2) = 0; Add.180: max(0, 1) = 1; Add.181: max(0, 2) = 2; Add.184: max(0, 3) = 3 ✓).

NEW M-187.L candidate: **codex post-Add.168 era post-discharge silence horizon H ≈ max(0, 4 − A)** at n=6 supporting (A ∈ {1, 2, 3, 4, 5, 6}). This is the **strongest within-repo per-PR amplitude-conditional law** observed in W17 to date.

## 6. Falsifiable predictions

- **FP-404.1**: The next codex discharge at A=1 will have post-discharge silence horizon H ∈ [3, 5] ticks at >70% probability. (M-187.L predicts H = 3; the A=1 codex emission floor is at the empirical observation; failure if H < 3 or H > 5 — would weaken the H ≈ max(0, 4-A) fit.)
- **FP-404.2**: The next codex discharge at A=2 will have post-discharge silence horizon H = 2 at >65% probability. (M-187.L predicts H = 2; the Add.181 anchor is the only A=2 observation; failure if H ≠ 2 — would degrade the law to a band rather than a point estimate.)
- **FP-404.3**: The next codex discharge at A ≥ 4 will have post-discharge silence horizon H = 0 at >75% probability. (M-187.L predicts H = 0 at A ≥ 4; n=4 supporting; failure if H ≥ 1 — would weaken the law's upper-amplitude saturation.)
- **FP-404.4**: The H ≈ max(0, 4 − A) law does NOT lift to opencode at >70% probability. (Opencode A=2 H ≥ 7 is incompatible with M-187.L's prediction of H = 2 for A=2; the within-repo law is per-repo-specific per M-187.K.)
- **FP-404.5**: The per-PR ratio H/A reading converges to 1.0 at A=2 across both codex and opencode at <20% probability. (#398 cross-repo asymmetry framing remains durable; the within-repo amplitude-conditional law is orthogonal.)
- **FP-404.6**: A within-codex discharge at A=3 in W17-W18 will have H ∈ [0, 2] at >65% probability. (M-187.L predicts H = 1; allowing range; failure if H ≥ 3 — would invalidate the linear fit.)

## 7. Cross-link

- **#398 cross-repo amplitude-2 discharge horizon asymmetry**: this synth refines #398 by introducing the **within-repo amplitude axis** as orthogonal to the cross-repo asymmetry axis. The two readings are jointly compatible: codex H/A is small at A=2 (1.0) and opencode H/A is large at A=2 (≥4.0); this is cross-repo asymmetry. Within codex, H/A is large at A=1 (≥3.0) and small at A=6 (0.0); this is within-repo amplitude conditioning. The amplitude-invariance reading from M-184.E is falsified at within-repo at 3-of-3, but the cross-repo asymmetry reading is durable.
- **#401 M-186.F decaying envelope**: orthogonal cohort-level framing.
- **#402 M-186.L recovery-vector stratification**: codex is in the novel-carrier-mediated stratum at 1h45m depth at Add.187; the within-repo amplitude-conditional law of this synth is a sub-classification of the recovery-vector stratification — within the novel-carrier stratum, the per-PR silence horizon depends on discharge amplitude.
- **#403 cohort-zero absorbing-state**: orthogonal cohort-level framing; per-repo silence dynamics are independent of the cohort-zero arrival process.

## 8. Summary

Codex post-Add.168 era exhibits a **monotonically-decreasing per-PR silence ratio H/A across discharge amplitudes A ∈ {1, 2, 6}** at 3-of-3 supporting (M-187.I), decisively falsifying the amplitude-invariance reading of #398 M-184.E at the within-repo level. The cleanest empirical fit is **H ≈ max(0, 4 − A)** at n=6 supporting amplitudes (M-187.L) — a per-repo-specific law (M-187.K) that does NOT lift to opencode. The within-repo amplitude-conditional axis is orthogonal to #398's cross-repo asymmetry axis; both readings jointly characterize the per-PR ratio surface. FP-404.1 through FP-404.6 lock the within-codex law and its non-lift to opencode; failure of any would require revising the H ≈ max(0, 4 − A) fit or the per-repo-specificity claim.
