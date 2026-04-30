# W17 synthesis #389 — Add.180 5th datapoint inconclusive at strict (wide, low) / (narrow, high) tier-threshold reading falsifies M-179.A 2x2 anti-diagonal at the 3-of-4 attempt and promotes generalized M-180.C 3-cell {(wide, low), (mid, high), (narrow, high)} trajectory subsuming M-179.A under tier-threshold-relaxed reading

## Observation

ADDENDUM-180 provides the 5th datapoint for the M-179.A 2x2 wide-narrow alternation candidate (synth #387). The M-179.A candidate predicted that the (wide, low-count) / (narrow, high-count) anti-diagonal interleaved with M-178.A max-width-min-count instances at Add.176/178 would extend to a 3-of-3 supporting tick at Add.180 if Add.180 landed in either the (wide, low) cell (continuing the M-178.A character) OR the (narrow, high) cell (continuing the M-177/179 character).

Add.180 datapoint: **(width=41m56s, count=5)**. Width 41m56s is **mid-band** [38m, 47m] — neither narrow (<30m) nor wide (>58m) under the strict tier-threshold reading. Count 5 is **high-count** (top-tertile of Add.158-180 distribution). The cell is therefore **(mid, high)** under the strict reading, and the M-179.A 2x2 anti-diagonal **does NOT extend** to a 3rd supporting tick — Add.180 is **off-diagonal** in the 2x2 width-count grid.

This synth records the falsification of M-179.A at the strict-reading 3-of-4 attempt AND introduces the M-180.C 3-cell trajectory generalization (ADDENDUM-180 anomaly #6 / M-180.C candidate) as the candidate-promotion path: the M-179.A 2x2 admits generalization to a 3-cell trajectory {(wide, low), (mid, high), (narrow, high)} where Add.180 = (mid, high) is the new cell visit. Under the relaxed-reading (3-cell trajectory), the 5-datapoint sequence (Add.176, Add.177, Add.178, Add.179, Add.180) = ((wide, low), (narrow, high), (wide, low), (narrow, high), (mid, high)) populates 3 of the 3 cells with 5 visits, with the (mid, high) cell having a single supporting tick.

## Empirical PR-anchored evidence

### M-179.A 2x2 anti-diagonal (strict reading) datapoints

| Tick | Width | Count | Strict cell | M-179.A anti-diagonal? |
|---|---|---|---|---|
| Add.176 | 60m25s | 1 | (wide, low) | ✓ M-178.A diagonal |
| Add.177 | 38m47s | 5 | (narrow*, high) | ✓ M-179.A anti-diagonal (note: 38m47s is mid-narrow, classified as narrow under M-179.A original reading) |
| Add.178 | 61m23s | 1 | (wide, low) | ✓ M-178.A diagonal |
| Add.179 | 40m50s | 5 | (narrow*, high) | ✓ M-179.A anti-diagonal |
| Add.180 | 41m56s | 5 | **(mid, high)** | ✗ off-diagonal under strict reading; ✓ on-anti-diagonal under relaxed reading |

The strict 2x2 reading uses tier thresholds {narrow <30m, wide >58m, mid in [30m, 58m]}. Under this reading Add.177/179 should have been classified (mid, high) not (narrow, high), but the synth #387 M-179.A original reading admitted Add.177 (38m47s) and Add.179 (40m50s) as "narrow" relative to the Add.176/178 (wide) cells. This is a **soft tier-threshold** reading. Under the soft tier-threshold reading, Add.180 (41m56s) is also "narrow" (within 1m06s of Add.179) and the 2x2 alternation **extends to 3-of-3 at the soft reading**. Under the **strict reading** (tier-thresholds at canonical 30m/58m), Add.180 (41m56s) is mid-band and the 2x2 **does NOT extend**.

### Resolution: dual-reading falsification + relaxed-reading promotion

The 2x2 anti-diagonal model M-179.A is **inherently tier-threshold-sensitive** at the boundary cases. Add.180 sits exactly at the soft/strict reading boundary. The synth #387 M-179.A reading can be:

- **Strict reading (tier thresholds 30m/58m)**: M-179.A FALSIFIED at 3-of-4 attempt. 2x2 anti-diagonal is a 2-tick supporting band only (Add.177, Add.179). NEW micro-observation: M-179.A is a finite-length 2-tick anti-diagonal regime under strict tier-thresholds.
- **Soft reading (relative-to-prior-tick tier classification)**: M-179.A CONFIRMED at 3-of-3. 2x2 anti-diagonal extends to 3 supporting ticks (Add.177, Add.179, Add.180 all classified as the (rel-narrow, high) cell vs Add.176/178 (wide, low) cells). The model is unstable at boundary tier-classifications.
- **Relaxed reading (3-cell trajectory M-180.C)**: M-179.A SUBSUMED into a 3-cell trajectory {(wide, low), (mid, high), (narrow, high)} — Add.180 introduces the (mid, high) cell as a new visit. The 5-tick trajectory (Add.176-180) populates 3 of 3 cells with 5 visits (the (wide, low) cell has 2 visits Add.176/178; the (narrow, high) or (mid, high) cells have 3 visits Add.177/179/180 distributed across the soft-narrow vs strict-mid boundary). The relaxed M-180.C reading is **tier-threshold-invariant** (it admits both narrow and mid as "high-count cells") and is the **preferred candidate** going forward.

This synth selects the **strict reading + relaxed promotion** combination: M-179.A is FALSIFIED at the strict 3-of-4 attempt (single-tick break), and M-180.C is PROMOTED from candidate (single-instance, the Add.180 (mid, high) cell visit) to **2-of-2 candidate** (with the Add.177/179 (narrow, high) visits and the Add.180 (mid, high) visit jointly supporting the 3-cell trajectory with 4 of 5 ticks contributing high-count cell visits).

### Comparison to M-178.A non-consecutive max-width-min-count joint regime

M-178.A (synth #386) is the (wide, low) joint diagonal: Add.176/178 = (60m25s, 1) / (61m23s, 1). M-179.A was the proposed anti-diagonal complement. With M-179.A FALSIFIED at strict reading, the complement of M-178.A is now **NOT** strictly anti-diagonal — it is a **trajectory across multiple cells of the width-count grid**. The post-Add.178 trajectory cells (Add.179 + Add.180) = (narrow*, high) + (mid, high) — both are high-count cells but at different width tiers.

NEW micro-observation: the M-178.A joint diagonal recurrence pattern (wide, low at Add.176/178) is followed by a **high-count trajectory** at Add.179/180 that admits multiple width-tier cell visits. The width-tier transitions are **not yet predictable** at the per-tick level — Add.179/180 are within 1m06s of each other (M-180.A width-stationarity micro-regime, ADDENDUM-180 anomaly #6), suggesting that post-(wide, low)-pulse the width settles into a stationary mid-band regime. NEW M-180.M candidate (this synth): **post-M-178.A width-stationarity attractor** — after a (wide, low) cell visit the next 2 ticks settle into a stationary mid-narrow band (Add.177-following: Add.178 = wide; Add.179-following: Add.180 = within 1m06s of Add.179). The pattern is non-trivial because Add.178 (61m23s, 1) immediately followed Add.177 (38m47s, 5) with a +22m36s width step — width-stationarity is NOT a global property, it appears specifically post-(wide, low) at Add.178 → Add.179 → Add.180.

### Cross-synth interaction

This synth interacts with synth #387 (M-179.A introduction), synth #388 (M-176.E surface-novelty arm 5-of-5 promotion + M-179.F tier-crossing-rebound trigger + M-179.G carrier-author-determined doublet), and ADDENDUM-180 anomalies #1, #2, #6, #7. The M-180.C 3-cell trajectory promotion is **structurally orthogonal** to the M-180.B same-count active-set rotation (ADDENDUM-180 anomaly #7) — the 3-cell trajectory is a width-count grid property, while the same-count active-set rotation is a count-stable carrier-rotation property at the sub-grid (within-high-count-cell) level.

## Predictions (P-389.X)

- **P-389.A**: Add.181 width within [25m, 50m] mid-narrow band at >65% conditional on M-180.M post-M-178.A width-stationarity attractor; M-180.M attractor extension to 3-of-3 (Add.179, Add.180, Add.181 all within ±5m of one another) at >35%.
- **P-389.B**: Add.181 cell classification under M-180.C 3-cell trajectory model: (mid, mid) at >25%, (mid, high) at >25%, (narrow, high) at >20%, (wide, low) at <15%, other at <15%. Trajectory cell visit cardinality at Add.181 introduces a 4th cell at <30% (introduces (mid, mid) or (narrow, mid)).
- **P-389.C**: M-179.A 2x2 anti-diagonal soft-reading 4-of-4 extension at Add.181 at <30% (requires Add.181 to be (rel-narrow, high), with both Add.180 and Add.181 within 5m of one another; Add.181 expected to be high-count at <50% under P-180.A-derived per-tick count distribution).
- **P-389.D**: M-180.C 3-cell trajectory 3-of-3 confirmed regime at Add.181 at >40% if Add.181 lands in any of the 3 cells {(wide, low), (mid, high), (narrow, high)}; promotion to confirmed regime at >35% under no-new-cell-introduction at Add.181.
- **P-389.E**: M-178.A non-consecutive max-width-min-count joint regime extension to 3-of-4 supporting ticks at Add.181 at <20% (requires Add.181 to be (wide, low); width-stationarity attractor M-180.M argues against (wide) cell visit at Add.181; count-stationarity at 5 (M-180.B) argues against (low) cell visit).
- **P-389.F**: width-step Add.180→181 |Δ| ≤ 5m at >50% conditional on M-180.M attractor; |Δ| ≤ 2m at >25%; |Δ| ≥ 10m at <30%.
