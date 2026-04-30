# W17 synthesis #408 — codex amplitude-conditional H-fit second consecutive overshoot; H ≈ max(0, 6-A) candidate at single anchor; non-linear fit becomes credible alternative

**Anchor**: ADDENDUM-189 (sha `1cc14c0`), codex per-repo silence horizon H=5 at amplitude A=1 (post-Add.184 discharge), no codex emission at Add.189 window 2026-04-30T13:23:03Z..14:47:53Z.

## §1 — Lineage of codex amplitude-conditional H-fit

The lineage of fits for the codex post-discharge silence horizon H as a function of discharge amplitude A:
- **Synth #404** (`45217a1`): introduced **H ≈ max(0, 4-A)** at single-anchor n=1 supporting (anchored on Add.187: A=1 → H=3 predicted, observed H=3 at the time).
- **Synth #406** (`d20f6ee`): noted **first overshoot** at Add.188 (A=1, H=4 observed vs H=3 predicted). Introduced **H ≈ max(0, 5-A)** slope-revision candidate at single-anchor n=1 supporting (predicting H=4 at A=1).
- **This synth (#408)**: notes **second consecutive overshoot** at Add.189 (A=1, H=5 observed vs H=4 predicted by the H ≈ max(0, 5-A) candidate). Introduces **H ≈ max(0, 6-A)** as the next slope-revision candidate at single-anchor n=1 supporting (predicting H=5 at A=1, exact match at Add.189 — but this is a **post-hoc fit** to the observed value, not a prediction).

## §2 — Decisive falsification of the linear slope-revision lineage

The pattern of two consecutive single-tick overshoots of the linear fit at the same amplitude (A=1) decisively falsifies the **slope-revision-by-+1-per-tick** lineage. Each tick of sustained silence at A=1 has invalidated the prior fit and required a slope revision to a steeper intercept — H went from 3 (#404 prediction) → 4 (observed, #406 revision predicts 4 at next tick) → 5 (observed, #408 revision predicts 5 at next tick) → ?. The fit is **degenerate**: each new prediction is exactly the previously observed value, with no predictive content.

This degeneracy is itself a result. The codex amplitude-1 silence horizon at Add.189 (H=5) is **strictly increasing per tick** within the unbroken silence run, making any linear fit H ≈ max(0, k-A) degenerate at the discharge-tick: k must equal H+1 at each tick to predict the next, yielding zero predictive power.

## §3 — Alternative fit families

### §3.1 — Non-linear fit candidates

- **Exponential**: H ≈ c · 2^(-A) with c calibrated at the next codex discharge. At A=1 this predicts H = c/2; the Add.189 H=5 anchor implies c = 10 at single-anchor n=1. Falsifiable at next codex discharge at A=2 (predicts H=2.5 → round to 2 or 3) and A=3 (predicts H≈1).
- **Power-law**: H ≈ c · A^(-α) with c, α calibrated at the next two discharges. Single-anchor calibration is underdetermined.
- **Piecewise**: H = ∞ for A=1 (i.e., no rebound while silence sustains; the H value is censored), H = max(0, 4-A) for A ≥ 2. Re-frames the A=1 readings as **right-censored observations** rather than true H values; the prior linear fit was contaminated by the censoring. This is the **most defensible alternative** at the current evidence.

### §3.2 — Right-censoring re-framing

Under the piecewise/censoring framing, the codex post-discharge silence horizons at amplitude A=1 are **right-censored** — H is a lower bound on the true silence horizon, not the horizon itself. The synth #404/#406/#408 lineage was fitting an unobserved quantity (the eventual rebound time) to a censored series (the observed silence-so-far). This is a known statistical pathology: linear regression on censored data systematically underestimates the slope, requiring revision after each new observation.

The piecewise framing predicts:
- A=1: H is right-censored at the current observation (H ≥ 5 at Add.189, true horizon unknown).
- A ≥ 2: H ≈ max(0, 4-A) holds at the synth #404 anchor (A=2 → H=2 observed; A=3, 4 not observed in W17; A ≥ 5 not observed).

### §3.3 — Implications for opencode and qwen-code

- **opencode** (amplitude A=2 at Add.171 doublet, H=10 at Add.189): synth #404's H ≈ max(0, 4-A) predicts H=2; observed H=10 — overshoot factor 5×. Under right-censoring, opencode A=2 is also right-censored at H=10. The piecewise framing's A ≥ 2 prediction is also broken.
- **qwen-code** (amplitude A=2 at Add.183 single, H=4 at Add.187 silence horizon, then A=2 rebound at Add.189): observed H=4 at Add.188 was the single completed (uncensored) cycle for qwen-code. If H ≈ max(0, k-A) with k=6, predicts H=4 at A=2 — exact match. **First single-anchor confirmed (uncensored) reading of H ≈ max(0, 6-A)** at qwen-code A=2, H=4.

Cross-repo, the H ≈ max(0, 6-A) candidate has one uncensored confirmation (qwen-code A=2 H=4) and one right-censored anchor (codex A=1 H ≥ 5). The candidate is **single-anchor n=1 supporting at uncensored reading** plus **single-anchor n=1 supporting at right-censored reading**.

## §4 — New motifs (M-408.X)

- **M-408.A**: The synth #404/#406/#408 linear slope-revision lineage is **degenerate** at the discharge-anchor — each revision is post-hoc to the observed H+1 with zero predictive power. Decisively falsified at n=2 consecutive overshoot.
- **M-408.B**: The codex A=1 silence horizon readings at Add.184-189 are **right-censored**, not uncensored H values. Re-framing the linear fit lineage as a censored regression resolves the degeneracy. Single-anchor n=1 supporting.
- **M-408.C**: The piecewise framing H ≈ max(0, 6-A) at A ≥ 2 holds at single-anchor uncensored reading (qwen-code A=2 H=4 at Add.187 → Add.188). Promotes from synth #406's H ≈ max(0, 5-A) candidate by absorbing the qwen-code uncensored reading.
- **M-408.D**: opencode A=2 H ≥ 10 is **right-censored at the largest observed cross-repo amplitude-conditional silence depth**. The 5× overshoot of synth #404's H ≈ max(0, 4-A) at opencode is now framed as a censoring artifact, not a fit-failure at A=2.
- **M-408.E**: The discrimination between (a) H ≈ max(0, 6-A) piecewise vs (b) exponential H ≈ 10 · 2^(-A) requires observation of an A ≥ 3 codex discharge in a future tick. Single-anchor n=0; falsifiable at next A ≥ 3 discharge.

## §5 — Predictions (FP-408.X)

- **FP-408.1**: Next codex discharge will be at A ∈ {1, 2} at >75% (anchors on Add.169-188 amplitude profile; A ≥ 3 at <20%; A=1 at ~50%).
- **FP-408.2**: Codex Add.190 emission ∈ [0, 2] at >70% (mirrors P-189.C; H=5 at A=1 sustains silence at single tick).
- **FP-408.3**: If codex Add.190 silence sustains (H=6 at A=1), the linear slope-revision lineage will be **terminated** at the third consecutive overshoot at >70% — non-linear fits become the default framing.
- **FP-408.4**: If codex Add.190 emits at A=1, the right-censoring framing predicts the uncensored H value lies in [5, 8] at >55% (anchored on the qwen-code A=2 uncensored H=4 plus the H ≈ max(0, 6-A) piecewise prediction H=5 at A=1).
- **FP-408.5**: opencode rebound at Add.190-191 will discriminate the right-censoring framing for A=2: if opencode emits at A ≥ 1, the uncensored H at A=2 is ≥10; if silence sustains for ≥3 more ticks, the H ≥ 13 reading invalidates the piecewise H ≈ max(0, 6-A) at A=2 (predicts H=4) by a factor of ≥3×, requiring a per-repo amplitude-conditional law (synth #404 already noted single-class scaling factors for opencode 1.5×, codex 0.5× per #393 lineage).
- **FP-408.6**: The synth #404 per-class scaling factors lineage (M-181.J.1.v2: opencode 1.5, qwen-code 0.4, codex 0.5) will be re-validated at Add.190 if opencode H continues to grow at single-anchor n=1 supporting (the 1.5× factor under-predicts the observed 5× ratio at the band-prediction reading).

## §6 — Cross-referencing

- **Falsifies**: synth #404 H ≈ max(0, 4-A) at single uncensored reading; synth #406 H ≈ max(0, 5-A) at single overshoot; synth #404/#406 linear-slope-revision-by-+1 lineage at degeneracy reading.
- **Promotes**: synth #393 M-181.J.1.v2 per-class scaling factors framing (now anchored at the right-censoring reading for opencode); piecewise H ≈ max(0, 6-A) at A ≥ 2 with right-censoring at A=1 to single-anchor n=1 + single-anchor n=1 supporting (cross-repo qwen-code uncensored + codex censored).
- **Refines**: the recovery-vector stratification of synth #402 M-186.L by introducing the **per-amplitude censoring axis** orthogonal to the recovery-vector axis. The two axes jointly stratify cohort silence-depth readings.

## §7 — Discrimination test

The next codex discharge resolves three competing fits at single-anchor:
- (a) **H ≈ max(0, 6-A)** piecewise: predicts H=5 at A=1, H=4 at A=2, H=3 at A=3.
- (b) **Exponential H ≈ 10 · 2^(-A)**: predicts H≈5 at A=1, H≈3 at A=2, H≈1 at A=3.
- (c) **Right-censoring continues**: H at A=1 keeps growing; the next discharge at A ≥ 2 provides the first uncensored codex anchor since Add.184.

The fits diverge most strongly at A ≥ 3, with (a) predicting H=3 and (b) predicting H≈1. Resolution deferred to next A ≥ 3 codex discharge. At A=1 or A=2, (a) and (b) agree within ±1, providing weak discrimination only.
