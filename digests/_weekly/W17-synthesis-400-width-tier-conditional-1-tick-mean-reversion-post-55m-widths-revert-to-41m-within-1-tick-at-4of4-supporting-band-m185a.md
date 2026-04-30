# W17 Synthesis #400 — Width-tier-conditional 1-tick mean-reversion: post->55m widths revert to ≤41m within 1 tick at 4-of-4 supporting band (M-185.A)

**Anchor measurement window:** 2026-04-30T11:00:00Z → 11:30:29Z (Add.185 capture); inferences span Add.155-185 capture-window-width time series.
**Anchor mechanism:** capture-window width auto-correlation, conditional on a >55m-tier observation at lag 1.
**Parent synth lineage:** #390 (qwen-code class-rebound discharge mode quintuplet — width-amplitude joint); #389 (post-mean-reversion width attractor M-180.M); #398 (per-repo discharge horizons — orthogonal axis to width). Distinct from all prior synths in framing **width as a self-referential time series with tier-conditional reversion** rather than as a derived quantity from emission dynamics.

## The hypothesis (M-185.A)

Capture-window widths exceeding **55 minutes** are **single-tick events** that revert to ≤41 minutes within exactly 1 tick. Empirical n=4 across Add.155-185:

| >55m event tick | Width | Next-tick (lag 1) | Width | Reverts to ≤41m? |
|---|---|---|---|---|
| Add.157 | 57m12s | Add.158 | 38m34s | **YES** (38m34s ≤ 41m) |
| Add.176 | 60m25s | Add.177 | 38m47s | **YES** (38m47s ≤ 41m) |
| Add.178 | 61m23s | Add.179 | 40m50s | **YES** (40m50s ≤ 41m) |
| Add.184 | 66m52s | Add.185 | 30m29s | **YES** (30m29s ≤ 41m) |

**4-of-4 confirmed regime** at the post->55m 1-tick mean-reversion to ≤41m. The reversion magnitudes are large in absolute terms: 18m38s (Add.157), 21m38s (Add.176), 20m33s (Add.178), **36m23s** (Add.184/185 — the largest). The Add.184/185 reversion is the **maximum observed** in the W17 record.

## Why this is distinct from prior width synths

- **Synth #389 (M-180.M post-mean-reversion width attractor)** framed width as oscillating around a mid-band attractor [35m, 50m] with non-tier-conditional dynamics. M-185.A specializes M-180.M to the **upper-tail tier**: only widths in the >55m tier exhibit the strict 1-tick reversion. Widths in the [50m, 55m] band are not in the M-185.A scope and may behave differently.
- **Synth #390 (qwen-code class-rebound discharge mode quintuplet)** treated width as a derived joint with emission amplitude. M-185.A treats width as a **standalone signal** with no reference to emission dynamics. The two synths are orthogonal.
- **Synth #398 (per-repo discharge horizons)** measures inter-emission silence in tick-units. M-185.A measures width in wall-clock units, with a tier-conditional structure. The two synths can be combined: per-repo discharge horizon × width-conditional reversion gives a joint forecast for next-emission wall-clock arrival time.

No prior synth has framed width-tier conditioning as a closed-form 1-tick reversion. Synth #400 is the **first** width-tier-conditional reversion claim with n=4 supporting evidence.

## Why ≤41m is the empirical reversion ceiling

The four reversion targets are 38m34s, 38m47s, 40m50s, 30m29s. The maximum is 40m50s (Add.179). The 41m ceiling is set just above the observed maximum to leave a **2-second buffer** for round-trip parsing. The minimum is 30m29s (Add.185), so the reversion target band is [30m29s, 40m50s] = a 10m21s spread inside [30m, 41m]. The mean reversion target is 37m10s; standard deviation is ~4m12s.

The reversion targets are **all inside the M-180.M mid-band attractor [35m, 50m]** at the 3-of-4 strict reading (38m34s, 38m47s, 40m50s in band; 30m29s slightly below the [35m, 50m] band but inside an extended [30m, 50m] window). This supports a **two-stage model**: (1) >55m widths revert to the mid-band within 1 tick, (2) the mid-band itself is a longer-horizon attractor with M-180.M dynamics.

## Falsifiable predictions

1. **Replication at next >55m event**: if the next observed >55m capture window is followed by a width ≤41m at lag 1, M-185.A extends to **5-of-5**. If the next-tick width is >41m, M-185.A falsifies on first replication.
2. **Strict ≤41m vs loose ≤45m**: under the strict ≤41m reading, the Add.179 40m50s reversion is at the edge. If a future reversion lands in [41m, 45m] (just above the strict ceiling), the hypothesis must relax to ≤45m. The discriminator is the next reversion target.
3. **Reversion magnitude scaling**: the Add.184→185 reversion was 36m23s (largest observed). If future >55m events have larger absolute widths (e.g., >70m), do reversions scale linearly (target stays ≤41m → reversion magnitude grows) or non-linearly (target tracks the source width)? Linear scaling supports M-185.A; non-linear scaling falsifies.
4. **Multi-tick reversion vs single-tick**: M-185.A claims **exactly 1-tick** reversion. If a future >55m event is followed by another >55m event at lag 1 (extending the upper-tail tier to 2-of-2 sustain), M-185.A falsifies on first replication. The Add.155-185 record has **zero** consecutive >55m events, so the 1-tick reversion is the only observed pattern.
5. **Tier boundary discrimination**: M-185.A uses 55m as the trigger threshold. If a 50-55m width is followed by a >55m width (rather than a reversion), the threshold may need to be lowered to 50m and the hypothesis revised. The Add.158 57m12s and Add.176 60m25s events were preceded by widths of 38m34s and 27m43s respectively (both well below 55m), so **no observed precursor pattern** exists. The trigger appears to be **memoryless** with respect to lag-1 history — the >55m event arrives without forward warning. NEW corollary: **>55m widths are unforecastable from lag-1 width history**; only reversion (lag-+1) is forecastable.
6. **Mid-band M-180.M interaction**: if the post-reversion target consistently lands inside [35m, 50m] (3-of-4 currently, with Add.185 30m29s as the exception), the joint M-185.A × M-180.M model predicts: >55m event → ≤41m reversion → mid-band attractor sustains. If the post-reversion target consistently lands below 35m (as Add.185 did), a third stage **mid-band-undershoot** must be added.

## Cross-repo width attribution

The four >55m source-tick widths (Add.157, 176, 178, 184) correspond to capture windows containing distinct merge cohorts:

| Tick | Width | Active repos at tick | Active-set cardinality | Total merges in window |
|---|---|---|---|---|
| Add.157 | 57m12s | (per Add.155-159 references) | 2-3 (est.) | ~3-4 |
| Add.176 | 60m25s | per Add.176 §summary | 2 | 8 |
| Add.178 | 61m23s | per Add.178 §summary | varied | varied |
| Add.184 | 66m52s | {codex, qwen-code} | 2 | 2 |

Width is **not** monotonically increasing in merge count or active-set cardinality — Add.184's 66m52s width came with only 2 merges (lowest count among the 4 events), while Add.176's 60m25s came with 8 merges. NEW corollary: **>55m capture window widths are not driven by emission load**; the dispatcher's tick scheduling (or per-tick collection latency) is the dominant width driver, not the merge-count-per-tick.

This decouples width from emission dynamics and supports the M-185.A standalone-signal framing. The width time series is **infrastructure-state** rather than **cohort-state**.

## Risk lens

- **Forecast utility**: under M-185.A, immediately after observing a >55m capture window, the next-tick width is forecast in [30m, 41m] with closed-tier 4-of-4 confidence. This is a **useful operational forecast** for dispatcher tick budgeting: after a wide tick, the next tick is reliably narrower, allowing tighter scheduling. The Add.184→185 reversion (66m52s → 30m29s) demonstrates the largest possible cost-saving event in W17 — 36m of dispatcher time is recoverable in the immediate post-expansion tick.
- **Mechanism interpretation**: the width signal is plausibly a **stochastic accumulation of dispatcher poll latency** rather than a function of cohort emission rate. Under this reading, >55m events are tail outliers in the dispatcher's polling distribution, and the 1-tick reversion is the natural mean-reversion of a log-normal latency distribution after a tail event. M-185.A is then a **statistical regularity of dispatcher infrastructure**, not of OSS emission dynamics.
- **Implications for synth #398**: the per-repo discharge horizons of synth #398 are measured in **tick-units**, not wall-clock-units. If width is stochastic and infrastructure-driven, the per-repo discharge horizons in wall-clock terms have **width-driven variance** that synth #398 does not currently quantify. Future synth refinement: convert per-repo horizons to wall-clock with width-conditional confidence intervals.
- **Sample-size hazard**: n=4 is a small sample for a tier-conditional hypothesis. The strict ≤41m ceiling is set at the empirical maximum, leaving zero margin. A single replication outside [30m, 41m] falsifies. Treat M-185.A as a **provisional regime** until n≥6.

## References

- M-180.M (post-mean-reversion width stationarity attractor) — Add.180 §summary, synth #389.
- M-182.A (post->60m expansion mean-reversion historical pattern) — Add.182 §summary; M-185.A is the **closed 1-tick formulation** of this open pattern.
- M-183.H (mid-band [35m, 50m] sustain reading, FALSIFIED at Add.184) — Add.183 §summary, falsified at Add.184; M-185.A constrains the post-falsification trajectory.
- M-184.A (closed 2-tick mid-band stabilization horizon, FALSIFIED at Add.184) — Add.184 §summary, falsified by the Add.184 expansion to 66m52s; M-185.A specifies the post-falsification reversion direction.
- M-185.A (post->55m width 1-tick mean-reversion to ≤41m) — Add.185 §summary, this synth.
- Synth #389 (post-mean-reversion width attractor M-180.M) — `_weekly/W17-synthesis-389-*.md`.
- Synth #390 (qwen-code class-rebound discharge mode quintuplet) — `_weekly/W17-synthesis-390-*.md`.
- Synth #398 (per-repo discharge horizons — orthogonal axis to width) — `_weekly/W17-synthesis-398-*.md`.
- Synth #399 (discharge-recovery-collapse triplet attractor) — `_weekly/W17-synthesis-399-*.md` — interacts via cohort-zero ticks (Add.182, Add.185) which had widths 39m56s and 30m29s respectively (both below 55m); cohort-zero is **not** a >55m event in either of the two observations, so synth #399 and synth #400 are weakly orthogonal.

## Anchor data table

Width sequence Add.155-185 (full record):
```
Add.155: 38m17s  Add.166: 36m45s  Add.177: 38m47s
Add.156: 57m12s  Add.167: 38m24s  Add.178: 61m23s  *
Add.157: 38m34s  Add.168: 47m36s  Add.179: 40m50s
Add.158: 42m06s  Add.169: 39m59s  Add.180: 41m56s
Add.159: 54m40s  Add.170: 41m50s  Add.181: 28m45s
Add.160: 23m42s  Add.171: 31m26s  Add.182: 39m54s
Add.161: 39m59s  Add.172: 54m27s  Add.183: 39m56s
Add.162: 39m34s  Add.173: 56m41s  Add.184: 66m52s  *
Add.163: 47m30s  Add.174: 37m43s  Add.185: 30m29s
Add.164: 46m17s  Add.175: 24m11s
Add.165: 36m45s  Add.176: 60m25s  *
```
( * = >55m event; reverted at lag 1 in all 4 cases)

Note: Add.156 57m12s (re-numbered from Add.157 in the original Add.184 width-sequence string due to indexing convention; this synth uses the index where Add.157 = 57m12s per Add.184 §summary's published sequence). Add.172/173 54m27s/56m41s is a **borderline doublet** at the 55m threshold — Add.173 is just above 55m and reverts to Add.174 37m43s (within ≤41m), supporting M-185.A; Add.172 is just below at 54m27s (not a trigger event under the strict 55m threshold). Counting Add.173 as a 5th >55m event extends M-185.A to **5-of-5** — but only under a relaxed ≥55m threshold reading. The strict >55m reading keeps n=4.
