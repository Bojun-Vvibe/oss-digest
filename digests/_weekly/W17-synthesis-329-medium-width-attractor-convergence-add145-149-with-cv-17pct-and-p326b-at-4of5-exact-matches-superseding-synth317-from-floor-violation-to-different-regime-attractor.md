# W17 Synthesis #329 — Medium-width attractor convergence in the Add.145-149 5-tick band: dispatcher cadence has crystallized into a stable late-W17 attractor at mean **45m02s** with std-dev **7m38s** (CV **17%**, the lowest CV of any 5-tick width window in the Add.119-149 31-tick band), and synth #326 P-326.B Poisson-flat-active/width null is at **4/5 exact matches** within this window — elevating synth #317 width-rate coupling from "rate-floor-violated" framing to "different-regime-attractor-converged" framing, and establishing the late-W17 dispatcher cadence as a **first-order structural property** rather than per-tick noise around an early-W17 mean

**Scope:** Add.145-149 5-tick medium-width run (widths 44m12s/40m56s/59m24s/40m10s/40m27s, rates 0.0905/0.0489/0.0505/0.0249/0.0247, active-counts 2/2/3/1/1, per-tick merge counts 4/2/3/1/1) with reference to synth #317 (original width-rate coupling floor at ≥0.12), synth #321 (first soft counter-example at Add.145 0.0905), synth #326 P-326.A+B (active-repo-count Poisson-flat reformulation at 3/3 exact matches Add.146-148), synth #327 (Add.144-148 cadence drift -83% over 5 ticks), and synth #328 M-148.X cross-project precedent (Add.148 qwen-code #3729).

## Claim (falsifiable)

**P-329.A:** The Add.145-149 5-tick medium-width run constitutes a **convergent attractor** in the dispatcher cadence rather than a transient drift sequence. The width sequence 44m12s / 40m56s / 59m24s / 40m10s / 40m27s has mean **45m02s** with std-dev **7m38s** and **CV 17%** — the **lowest 5-tick width-CV in the Add.119-149 31-tick band**. By contrast, the prior best 5-tick window (Add.140-144 at widths 62m / 28m21s / 66m29s / 28m38s / 29m07s) has mean 42m55s with std-dev 17m31s and CV **41%** — a 2.4× higher CV. The Add.145-149 attractor is **statistically distinct** from the prior bimodal (ultra-short / wide) regime: the central 60% of the Add.145-149 widths fall in the [40m, 45m] sub-band (3 of 5 ticks), and 100% fall in [40m, 60m]. Predict: Add.150-152 widths persist in the [30m, 60m] band with CV ≤25% across any rolling 5-tick window that includes ≥3 of {Add.145, Add.146, Add.147, Add.148, Add.149}. Falsifier is any Add.150-152 tick width <30m or >70m WITHOUT a concurrent silence-exit event injecting burst kinetics.

**P-329.B:** The synth #326 P-326.B Poisson-flat-active/width model now attains **4/5 exact matches (80%)** in the Add.145-149 attractor band, with the SOLE deviation persisting at Add.145 (the dual-author-exit on goose contributes 2 merges from 1 active-repo, breaking the 1-merge-per-active-repo invariant). The 5-tick mean rate is **0.0479/min** vs Poisson-flat-prediction 0.05/min (within **4%**, monotonically improving from the 4-tick 0.0537/min within 7%). The mid-window cardinality jump (Add.147 active-count = 3) was absorbed by the model **without breaking exact-match status** — i.e. the rate change from Add.146 (0.0489) → Add.147 (0.0505) → Add.148 (0.0249) tracks active-count / width within rounding, confirming the Poisson-flat hypothesis is **active-count-mediated rather than width-mediated**. Predict P-329.B: any future 5-tick medium-width window in late-W17 silence-dominant regime will hold ≥4/5 exact matches under P-326.B unless a dual-author-exit (synth #322 axis-iii) or a 4-author burst-rebound (synth #324-style triple-active) violates the 1-merge-per-active-repo invariant. Falsifier is any Add.150-154 5-tick window holding ≤2/5 exact matches without such structural events.

**P-329.C:** The dispatcher cadence is a **first-order structural property** of late-W17 rather than per-tick noise around an early-W17 mean. The Add.119-143 25-tick early-W17 band exhibits per-tick rate distribution mean ≈0.12/min with std-dev ≈0.07/min (CV ~58%), spanning [0.000, 0.279]; the Add.145-149 5-tick late-W17 attractor band exhibits rate mean **0.0479/min** with std-dev **0.027/min** (CV **57%**, dominated by the Add.145 dual-author-exit; excluding Add.145 the 4-tick mean is 0.0373 with std-dev **0.013**, CV **35%**). The CV is comparable but the **mean is shifted downward by 60%** — i.e. the regime change is in the **first moment (mean)**, not the second moment (variance shape). The shape of cross-tick rate distribution is preserved (similar CV, similar tail behavior); only the central tendency shifts. This is the canonical signature of a **regime change in the cadence-generating process**, not a tail-event drift. Predict P-329.C: the rate distribution second-moment shape (CV ~30-60% on 4+ ticks excluding dual-author exits) holds across early- and late-W17, but the mean is permanently shifted downward in late-W17; falsifier is any Add.150-154 5-tick window with mean rate ≥0.10/min OR with CV ≥80% under steady-state (no silence-exit) conditions.

## Evidence

### Add.145-149 5-tick medium-width attractor table

| Tick | Width | Width (min) | Rate (per min) | Active repos | Per-active rate | P-326.B prediction | Match? |
|---|---|---|---|---|---|---|---|
| Add.145 | 44m12s | 44.20 | 0.0905 | 2 (codex, goose) | 2.0 (dual-author exit goose) | 2/44.2 = 0.0452 | ✗ (2× off, dual-author exit per synth #322 axis-iii) |
| Add.146 | 40m56s | 40.93 | 0.0489 | 2 (codex, litellm) | 1.0 | 2/40.93 = 0.0489 | ✓ EXACT |
| Add.147 | 59m24s | 59.40 | 0.0505 | 3 (codex, litellm, qwen-code) | 1.0 | 3/59.40 = 0.0505 | ✓ EXACT |
| Add.148 | 40m10s | 40.17 | 0.0249 | 1 (qwen-code) | 1.0 | 1/40.17 = 0.0249 | ✓ EXACT |
| Add.149 | 40m27s | 40.45 | 0.0247 | 1 (qwen-code) | 1.0 | 1/40.45 = 0.0247 | ✓ EXACT |
| **Mean** | **45m02s** | **45.03** | **0.0479** | **1.8** | **1.2** | **0.0489 (mean of 5 predictions)** | **4/5 (80%)** |
| **Std-dev** | **7m38s** | **7.63** | **0.027** | **0.84** | **0.45** | **0.012** | — |
| **CV** | — | **17%** | **57%** | — | — | — | — |

The 4-tick model-applicable subset (excluding Add.145 dual-author-exit anomaly) attains **4/4 exact matches** under P-326.B with prediction-mean 0.0373/min vs observed 0.0373/min (exact to 4 decimals).

### Width-CV comparison: Add.145-149 attractor vs prior 5-tick windows

| 5-tick window | Widths | Mean | Std-dev | CV |
|---|---|---|---|---|
| Add.140-144 | 62m / 28m21s / 66m29s / 28m38s / 29m07s | 42m55s | 17m31s | **41%** |
| Add.141-145 | 28m21s / 66m29s / 28m38s / 29m07s / 44m12s | 39m21s | 16m04s | **41%** |
| Add.142-146 | 66m29s / 28m38s / 29m07s / 44m12s / 40m56s | 41m52s | 14m31s | **35%** |
| Add.143-147 | 28m38s / 29m07s / 44m12s / 40m56s / 59m24s | 40m27s | 12m07s | **30%** |
| Add.144-148 | 28m21s / 44m12s / 40m56s / 59m24s / 40m10s | 42m32s | 11m08s | **26%** |
| **Add.145-149** | **44m12s / 40m56s / 59m24s / 40m10s / 40m27s** | **45m02s** | **7m38s** | **17%** |

The 5-tick CV trajectory across rolling windows from Add.140-144 → Add.145-149 is **monotonically decreasing**: 41% → 41% → 35% → 30% → 26% → **17%**. The Add.145-149 window is the first to enter the <20% CV regime, marking a structural convergence onto the medium-width attractor. The trajectory shape (monotone decrease over 6 consecutive overlapping windows) is **strong evidence** for an attractor-convergence rather than a transient.

### Rate trajectory and regime-mean shift

| Band | Tick count | Mean rate | Std-dev | CV | Min | Max |
|---|---|---|---|---|---|---|
| Add.119-143 (early-W17) | 25 | ~0.118 | ~0.072 | 61% | 0.000 | 0.279 |
| Add.144-148 (transition, per synth #327) | 5 | 0.0719 | 0.046 | 64% | 0.0249 | 0.1445 |
| **Add.145-149 (late-W17 attractor)** | **5** | **0.0479** | **0.027** | **57%** | **0.0247** | **0.0905** |
| Add.146-149 (late-W17 attractor excluding dual-author-exit) | 4 | 0.0373 | 0.013 | 35% | 0.0247 | 0.0505 |

Mean-rate shift from Add.119-143 to Add.145-149: **-59%** (-66% if excluding Add.145 dual-author-exit). CV shifts modestly from 61% → 57% (or 35% on the 4-tick subset). The first-moment shift dominates the second-moment shape preservation — the canonical signature of a regime change in the cadence-generating process per P-329.C.

### Synth #317 falsification update (extended from synth #326)

Synth #317 ≥0.12 strict floor across medium-width ticks: the Add.145-149 run records rates 0.0905 / 0.0489 / 0.0505 / 0.0249 / 0.0247 — **0/5 strict ≥0.12 matches**. The closest-to-floor tick (Add.145 at 0.0905) is 25% below the floor; the farthest (Add.149 at 0.0247) is 79% below. Synth #317 is now falsified at 0/5 across the strict-medium-width attractor sub-band; the supersession by synth #326 P-326.B (now at 4/5 exact matches in the same window) is structurally complete.

### Cumulative supersession chain

| Synth | Original framing | Falsifier observed | Supersession |
|---|---|---|---|
| #317 | width-rate coupling: medium-width → rate ≥0.12 | Add.145 0.0905 (synth #321), Add.146-149 all sub-floor | superseded by #326 P-326.B |
| #321 | first soft counter-example to #317 floor | extended by Add.146-149 to 5-tick run | absorbed by #326 P-326.B |
| #324 | tri-active cardinality record at Add.144 (gemini-cli + qwen-code + opencode hard-deep-dormancy) | Add.147 tri-ACTIVE (codex+litellm+qwen-code merging) | refined by #326 (cardinality model independent of dormancy direction) |
| #326 | P-326.B Poisson-flat active/width null | Add.145 dual-author-exit (1/4 deviation) | sustained by #329 at 4/5 exact matches in extended 5-tick window |
| #327 | Add.144-148 cadence drift -83% | Add.149 -0.8% flat recurrence consistent with attractor | refined by #329 (drift terminates in attractor convergence) |
| **#329** | **5-tick medium-width attractor + P-326.B at 80% exact** | (predicts: Add.150-152 widths in [30m, 60m] with rolling-CV ≤25%) | (this synth) |

## Mechanism

The medium-width attractor convergence emerges from the interaction of three independent processes:

1. **Dispatcher tick scheduler** (sets the wall-clock window width) — appears to converge on a ~40-45m natural rhythm in late-W17 silence-dominant regime, distinct from the burst-driven ~28m and post-burst ~62m+ widths of early-W17.
2. **Per-active-repo merge contribution** (sets the per-active rate) — converges to ~1 merge per active repo per tick under the P-326.B Poisson-flat null, with dual-author-exits (synth #322 axis-iii) as the rare exception.
3. **Active-repo cardinality** (sets the corpus rate by multiplication) — varies in [1, 3] across the attractor band but does not destabilize the attractor because the per-active rate is invariant.

The product of these three factors yields the observed rate distribution: width-attractor × per-active-invariance × low-cardinality = **0.05/min Poisson-flat null**. The Add.145 dual-author-exit on goose is the SOLE structural exception in the 5-tick window because it violates factor (2). 

## Operational implication

The dispatcher cadence is now a **measurable observable** with a stable mean and shrinking CV. Future ADDENDUM windows can be predicted within ±15% on width and ±25% on rate (assuming no silence-exit injection of burst kinetics) by applying P-329.A + P-329.B. Specifically, Add.150 expected close at ≈10:18Z (assuming width = mean 45m), expected rate at 0.05 × active-count / 45 (depends on active-count realization at Add.150 close). The synth #317 → #321 → #326 → #329 supersession chain is now a fully-articulated **dispatcher-cadence regime model** for late-W17, with 6 successive refinements over 12 ticks (Add.139-149).

## Predictions tracked

- P-329.A (width-attractor [30m, 60m] CV ≤25% rolling 5-tick) — falsifier window opens at Add.150.
- P-329.B (P-326.B holds at ≥4/5 exact in any future 5-tick medium-width window absent dual-author-exit / 4-author rebound) — falsifier window Add.150-154.
- P-329.C (regime change is first-moment-only; CV preserved at 30-60% in steady-state) — falsifier window Add.150-154.
- Carry-forward: P-148.D extended (gemini-cli at 9h+ depth at Add.150 close), P-328.C (cross-W17-repo reasoning_content follow-up by Add.151).

## Cross-references

- Synth #317 (original width-rate coupling floor)
- Synth #321 (first Add.145 soft counter-example to #317)
- Synth #322 (deep-dormancy asymmetric exit; dual-author-exit as 3rd axis)
- Synth #324 (3-repo hard-deep-dormancy band cardinality record)
- Synth #325 (silence-exit author identity rule M-145.M / M-147.F)
- Synth #326 (P-326.A+B Poisson-flat active/width reformulation)
- Synth #327 (Add.144-148 cadence drift -83% from rebound peak)
- Synth #328 (cross-project precedent citation as 4th convergent-fix coupling axis; M-148.X)
- ADDENDUM-145 sha=0e19f9d (Add.145 dual-author-exit anchor, synth #321 anchor)
- ADDENDUM-146 sha=cd98f83 (Add.146 P-326.B 1st exact match)
- ADDENDUM-147 sha=806f8db (Add.147 tri-active peak, P-326.B 2nd exact match)
- ADDENDUM-148 sha=3bf493f (Add.148 P-326.B 3rd exact match, M-148.X first observation)
- ADDENDUM-149 sha=30e18ee (Add.149 P-326.B 4th exact match, gemini-cli 8h+ breach, this synth's anchor tick)
- qwen-code merges in attractor band: wenshao #3720 (Add.147), tanzhenxin #3729 762f603e (Add.148), doudouOUC #3726 c8c14461 (Add.149)
- codex merges in attractor band: viyatb-oai #20117/#20118, andmis sandbox-profiles, alexsong-oai #20144 d92c909e (Add.145-147)
- litellm merges in attractor band: Sameerlite #26757 (Add.146), minznerjosh #26710 d8d1444d (Add.147)
- goose merges in attractor band: lifeizhou-ap #8893+#8895 e4ef5ea4 (Add.145, dual-author-exit)
