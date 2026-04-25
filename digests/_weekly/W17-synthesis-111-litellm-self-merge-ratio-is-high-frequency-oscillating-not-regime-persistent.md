# W17 Synthesis #111 — litellm self-merge ratio is high-frequency oscillating, not regime-persistent: 100% → 0% → 67% across consecutive ~30-min windows (Add. 31 → 32 → 33)

**Anchored:** 2026-04-25, addenda 31 → 32 → 33, BerriAI/litellm.

**Claim (falsifiable):** Synth **#109**'s "categorical regime flip" between Add. 31 (100% self-merge, 6/6) and Add. 32 (0% self-merge, 0/2) is **not** the start of a sustained regime alternation or persistence; the very next window (Add. 33) returns 67% self-merge (2/3), demonstrating that **litellm's self-merge ratio is oscillating at sub-hour frequency, not phase-locked**. The pairwise flip in #109 is a real *observation* but the framing as a "regime change" overstates persistence — the underlying signal is high-volatility noise around a window-mean of ~55–67%, not a step function.

## Evidence

Per-addendum litellm merge channel (consecutive ~30–40 min windows):

| addendum | window | merges | self-merges | non-self | self-% |
|---|---|---|---|---|---|
| Add. 31 | 2026-04-25T20:39:39Z–21:20:33Z | 6 | 6 | 0 | **100%** |
| Add. 32 | 2026-04-25T21:20:33Z–21:58:14Z | 2 | 0 | 2 | **0%** |
| Add. 33 | 2026-04-25T21:58:14Z–22:34:00Z | 3 | 2 | 1 | **67%** |

**Per-merge actor pairs in Add. 33:**

| PR | author | merger | self? | merge SHA |
|---|---|---|---|---|
| #26525 | yuneng-berri | yuneng-berri | YES | `b021d5c109aa69644cc4db06c3ab81c71aaee9fa` |
| #26520 | ryan-crabbe-berri | ryan-crabbe-berri | YES | `1dee006423b36d56422d008fbf076d3bb199a01c` |
| #26459 | Michael-RZ-Berri | (maintainer) | NO | `3ef16098f2e8c2e209dc7bf197579e5bb9f79233` |

3-window time series of self-%: **{1.00, 0.00, 0.67}**. Mean = 0.56; std-dev = 0.51 (across n=3 windows, total n=11 merges). The standard deviation **exceeds the mean**, which is the textbook definition of a **non-stationary high-volatility signal**, not a regime change.

## Why this falsifies the strong reading of synth #109

Synth #109's title — "categorical regime flip 100pct self-merge to 100pct maintainer-merge in consecutive 37-minute windows" — implies the system has **switched modes**. If true, Add. 33 should have stayed in the maintainer-merge mode (predicting ≈0% self-merge). Instead it returned to 67%. Three options:

1. **Coincidence / small-n artifact.** With n=2 (Add. 32) and n=3 (Add. 33) total merges respectively, the *observed* ratios are 0/2 and 2/3 but the **confidence intervals are enormous** (Wilson 95% CI for 0/2 is [0%, 65.8%]; for 2/3 is [9.4%, 99.2%]). The CIs **overlap heavily**, so the "flip" is statistically indistinguishable from a single underlying Bernoulli with p ≈ 0.55.
2. **Real but rapid oscillation.** The merger-axis is being driven by exogenous events (e.g., who is online at minute granularity), not by a policy change. Sub-hour-period oscillation is then the correct null model — synth #109 captured one half-cycle.
3. **Synth #109 is correct AND Add. 33 is the start of a third regime.** Possible but adds complexity without evidence.

The parsimonious reading is **option 1+2**: small-n oscillation around a moderate self-merge baseline. **Synth #109 should be downgraded from "regime flip" to "extreme-window pair from a high-variance distribution."**

## Why this is sharper than existing synth coverage

- **Synth #109** asserts a *flip*. #111 asserts the *flip is part of an oscillation, not a transition*.
- **Synth #102** ("author monoculture merge stream window") classifies single-author windows. #111 classifies the *merger-identity-distribution* across windows, which is orthogonal.
- **Synth #98** (if it exists in this series) on author cadence focuses on per-author opens; #111 focuses on per-window merge-channel attribution.

## Falsification surface

- If Add. 34 returns ≥80% self-merge or ≤20%, the oscillation hypothesis (option 2) is reinforced.
- If Add. 34 holds at 50–67% AND n≥6, the high-variance-around-stable-mean hypothesis (option 1) wins, and #109 is decisively a small-n artifact.
- If Add. 34 is again 0/n and Add. 35 is again 100%/m, **then #109 plus #111 together reveal a true bimodal distribution** and a different anchor (#113+) would be needed for the periodicity.

## Predicted near-term observations

If oscillation-not-regime is correct:
1. Add. 34's self-merge ratio falls in [0.30, 0.80] with non-trivial probability.
2. No single actor monopolizes the merger column for ≥3 consecutive windows.
3. The author-merger asymmetry (synth #109's distinguishing feature) does not become a stable property of any author other than `ishaan-berri` (whose cross-author merging on Add. 32 was the trigger event).

## Cross-references

- **Downgrades** synth #109 from "categorical regime flip" to "extreme-window pair from a high-variance window-mean".
- Complementary to **synth #102** (single-author merge windows) — #111 generalizes to merger-identity-distribution per window.
- Provides a **Bernoulli-baseline null model** for future per-window self-merge claims; future synth notes citing self-% should report Wilson CIs, not point estimates.

## Citation manifest

- BerriAI/litellm#26525@`b021d5c109aa69644cc4db06c3ab81c71aaee9fa` (yuneng-berri self-merge, Add. 33)
- BerriAI/litellm#26520@`1dee006423b36d56422d008fbf076d3bb199a01c` (ryan-crabbe-berri self-merge, Add. 33)
- BerriAI/litellm#26459@`3ef16098f2e8c2e209dc7bf197579e5bb9f79233` (Michael-RZ-Berri non-self, Add. 33)
- Add. 31 anchors: BerriAI/litellm#26513, #26522 (yuneng-berri self), #26506 (alvinttang self)
- Add. 32 anchors: BerriAI/litellm#26474@`5416a7c86e14ed0a78953a5828f6b46b75468307`, #26466@`7e57b15de2d26691cea556fc8be19ea39b640efe` (both shivamrawat1 author / ishaan-berri merger)
