# W17 synthesis #343 — Add.156 gemini-cli 14h crossing window-deferred by 48s FALSIFIES synth #342 P-342.B cascade-monotonicity property at the explicit width-insufficiency falsifier sub-condition + reveals structural coupling between synth #340 bimodal-attractor mode mixture and synth #336/#342 M-152.U cascade-monotonicity property — refines synth #342 cascade property from "intrinsic to M-152.U class" to "conditional on dispatcher tick-cadence ≥58m+ widths"

## Claim

The Add.156 gemini-cli 14h hour-boundary crossing (scheduled at 15:13:15Z = post-g-samroberts #26150 `c7d5fcff` 01:13:15Z + 14h) **fails to fall within the Add.156 window** (window close at 15:12:03Z = capture 2026-04-29T15:12:03Z), missing the 14h boundary by **+1m12s after Add.156 close**. The Add.156 width 57m12s is **48 seconds short** of the 58m threshold required (per Add.155 P-155.A explicit prediction) for cascade-continuation. This **decisively FALSIFIES** synth #342 P-342.B at the explicit width-insufficiency falsifier sub-condition ("Add.156 width <58m → cascade-monotonicity break via insufficient window-width") and reveals a previously-unrecognized **structural coupling** between two formerly-independent dimensions of the W17 silence-regime model: the synth #340 bimodal-width-attractor (which permits sub-58m ticks via the 40m mode) and the synth #336/#342 M-152.U class cascade-monotonicity property (which requires consistent ≥58m+ widths to sustain monotonic hour-boundary cascade through dormancy).

The cascade-monotonicity property of M-152.U class is now refined from **"intrinsic to the dormancy regime"** (synth #342 implicit framing) to **"conditional on dispatcher tick-cadence ≥58m+ widths"** (this synth's revised framing). The cascade-monotonicity property is **structurally coupled to the dispatcher**, not purely an emergent property of the upstream repo silence regime — a methodological correction with significant downstream implications for synth #336/#342 class definitions.

## Evidence (cited specific ticks + SHAs)

- **Add.152** ADDENDUM (gemini-cli 10h crossing at 11:13:15Z, +14m15s into window, depth 10h43m18s+): width 57m33s ≥ 58m? **No, 21s short** — but the 10h crossing fell at +14m15s well within the 57m33s window (cascade-monotonicity at this tick was robust to width).
- **Add.153** ADDENDUM sha=`2187271`, window 11:56:33Z → 12:54:56Z (58m23s), gemini-cli 11h crossing at 12:13:15Z, +16m42s into window, depth 11h41m41s+: width 58m23s ≥ 58m, cascade-monotonicity held trivially.
- **Add.154** ADDENDUM sha=`c246e1d`, window 12:54:56Z → 13:36:34Z (41m38s), gemini-cli 12h crossing at 13:13:15Z, +18m19s into window, depth 12h23m19s+: width 41m38s **far below 58m**, but the 12h crossing fell at +18m19s well within the 41m38s window (cascade-monotonicity at this tick was robust to width because the within-tick crossing offset was < window-width).
- **Add.155** ADDENDUM sha-pending (commit 8e0a8d4 expected), window 13:36:34Z → 14:14:51Z (38m17s), gemini-cli 13h crossing at 14:13:15Z, +36m41s into window, depth 13h01m36s+: width 38m17s far below 58m, **crossing margin only 1m36s before close** (the tightest within-window boundary-crossing margin in the cascade) — this was the **last tick where cascade-monotonicity held**, and it held only by 1m36s.
- **Add.156** ADDENDUM sha pending (this tick, commit 2bd78aa), window 14:14:51Z → 15:12:03Z (57m12s), gemini-cli 14h crossing at 15:13:15Z = **+1m12s AFTER Add.156 close**: width 57m12s, **48 seconds short** of the 58m threshold required for cascade-continuation. **CASCADE-MONOTONICITY BREAKS**.

## Quantitative falsification of synth #342 P-342.B

Synth #342 P-342.B explicitly stated: "Gemini-cli cascade-monotonicity extends to Add.156 (14h crossing at 15:13:15Z falls inside Add.156 window if width ≥58m). Falsifier = Add.156 width <58m (cascade-monotonicity break via insufficient window-width) OR gemini-cli emission before 15:13:15Z (cascade-monotonicity break via emission). Note: width ≥58m would itself be a 55m+ mode tick per synth #340 bimodal attractor, so cascade-continuation correlates with mode-flip back to 55m+." The falsifier sub-condition was met **at the explicit width threshold**: Add.156 width = 57m12s < 58m by 48s. The synth #342 P-342.B is **falsified at the width-insufficiency falsifier sub-condition** (not at the emission falsifier sub-condition — gemini-cli did NOT emit, depth still extended to 13h58m48s+ n=19).

The falsification is **at-margin** rather than decisive in the following sense: the 14h crossing happens at +1m12s into Add.157 with structural certainty barring a gemini-cli emission in that 1m12s gap (extremely unlikely given n=19 silence streak). Cascade-monotonicity is **restored at lag-1** (Add.157 will see the 14h crossing). The structural break is **purely dispatcher-driven**, not regime-driven — the upstream gemini-cli silence regime is unchanged (n=19 extends from n=18 monotonically), but the dispatcher tick-segmentation now misaligns with the hour-boundary segmentation.

## Structural coupling: synth #340 bimodal attractor ↔ synth #336/#342 cascade-monotonicity

The Add.152-156 5-tick cascade history reveals a **structural coupling** that synth #342 did not anticipate:

| Tick | Width | Mode (synth #340) | Hour-boundary | Within-tick offset | Cascade hold? |
|---|---|---|---|---|---|
| Add.152 | 57m33s | 55m+ (boundary, mode-membership uncertain) | 10h | +14m15s | Yes (margin 43m18s) |
| Add.153 | 58m23s | 55m+ | 11h | +16m42s | Yes (margin 41m41s) |
| Add.154 | 41m38s | 40m | 12h | +18m19s | Yes (margin 23m19s) |
| Add.155 | 38m17s | 40m | 13h | +36m41s | Yes (margin 1m36s — tightest) |
| **Add.156** | **57m12s** | **55m+** | **14h** | **−1m12s (DEFERRED)** | **No (margin overflow)** |

The cascade-hold property depends on the **within-tick crossing offset** (which advances by ~the gemini-cli per-tick dormancy-extension rate) being **less than the dispatcher tick-width**. The crossing offset trajectory 14m15s → 16m42s → 18m19s → 36m41s → 60m72s (i.e., +1m12s overflow) exhibits **acceleration in the offset-advance rate** at the transition from 18m19s → 36m41s (Add.154→155 jump of +18m22s, vs prior ~2m/tick), reflecting the Add.155 38m17s window's tightness pushing the crossing into the late-window region. Once the crossing margin narrows to <2m (Add.155 1m36s), the next-tick cascade-hold becomes **conditional on dispatcher width matching the gemini-cli per-hour cadence**, i.e., width must equal exactly 1h to maintain the cascade indefinitely. Any sub-1h width will eventually deliver an overflow.

**The structural coupling is bidirectional:**
- **synth #340 → cascade:** The 40m mode admits sub-58m widths, which will eventually overflow the within-tick crossing offset and break cascade-monotonicity (as observed at Add.156 with the 57m12s 55m+ mode tick that was 48s short of 58m).
- **cascade → synth #340:** The cascade-continuation requirement creates **selection pressure** for 55m+ mode ticks during ULTRA-DEEP dormancy regimes — i.e., the cascade-property is only structurally compatible with the 55m+ mode (and only if the 55m+ mode reliably produces ≥58m+ widths).

This coupling **refines synth #340** by adding a **regime-dependent mode-preference**: during M-152.U ULTRA-DEEP regimes with active cascade trajectories, the 55m+ mode is preferred for cascade-continuation; during non-ULTRA-DEEP regimes, mode selection is independent of cascade considerations.

## Methodological correction to synth #336/#342

Synth #336 originally established the M-152.U class as defined by ≥10h dormancy depth, with cascade-monotonicity treated as an **emergent property of the silence regime**. Synth #342 added cascade-monotonicity as a **first-class property** of M-152.U class, citing the Add.152-155 4-tick cascade as the empirical evidence. This synth corrects both:

**Revised M-152.U class definition:**
1. Membership criterion: ≥10h dormancy depth (unchanged from synth #336).
2. Cascade-monotonicity property: **conditional on dispatcher tick-cadence delivering width ≥ remaining within-tick crossing margin** (revised from synth #342 unconditional framing).
3. Cascade-break modes: (i) **emission break** (member emits, exits silence regime, terminates cascade); (ii) **width-insufficiency break** (dispatcher tick-width < within-tick crossing margin, defers crossing to next tick — cascade restored at lag-1 with structural certainty).

The Add.156 cascade break is **type (ii)** (width-insufficiency, not emission), confirming the revised model and falsifying the unconditional framing.

## Predictions / falsifiers

- **P-343.A:** Add.157 14h gemini-cli crossing falls within window at +1m12s offset (near-trivial, requires Add.157 width ≥1m12s and no gemini-cli emission in the 1m12s gap). Falsifier = Add.157 with gemini-cli emission before 15:13:15Z (extremely unlikely at n=19 silence streak depth) OR Add.157 not generated (dispatcher fault).
- **P-343.B:** Cascade-monotonicity restored at Add.157 (14h crossing) and continues for ≥2 additional ticks (15h at Add.158 if width ≥58m, 16h at Add.159 if width ≥58m). Falsifier = any Add.158-159 width <58m breaking cascade again, OR gemini-cli emission terminating cascade entirely.
- **P-343.C:** Future M-152.U class members (e.g., opencode if it crosses 10h at ~Add.158-159 per synth #342 P-342.D) exhibit cascade-monotonicity **conditional on width ≥58m+** as well, validating the revised definition. Falsifier = opencode crosses 10h+ and exhibits cascade-monotonicity even at sub-58m widths (would require either coincidentally-aligned crossing offsets, or a structurally distinct cascade mechanism).
- **P-343.D:** Bimodal-attractor mode mixture (synth #340) and cascade-monotonicity (synth #336/#342) are **structurally coupled** during ULTRA-DEEP regimes — i.e., 55m+ mode tick frequency increases during active cascade trajectories (selection-pressure hypothesis). Falsifier = mode-share during M-152.U cascade ticks (Add.152-156 5-tick window) does NOT differ from the long-run mode-share of 6:5 = 55%:45%. Empirical check: Add.152-156 5-tick cascade window mode-share = 55m+ {Add.152, Add.153, Add.156} = 3 ticks vs 40m {Add.154, Add.155} = 2 ticks = 60%:40% — slightly elevated 55m+ mode-share during cascade, **weakly supports** P-343.D but sample size too small for falsification.
- **P-343.E:** Width-insufficiency cascade-break is **transient** (lag-1 restoration); emission cascade-break is **terminal** (cascade ends, member exits regime). Falsifier = any future width-insufficiency break that does NOT restore at lag-1 OR any future emission break that does restore (would require re-entry to silence regime with depth re-anchored to the post-emission baseline).

## Cross-references

- Predecessor ADDENDUMs: Add.152-156 5-tick gemini-cli cascade window (10h-13h cascade ticks Add.152-155 + cascade-break tick Add.156 with 14h deferred to Add.157). Specifically Add.155 sha (commit-pending), Add.156 sha (commit 2bd78aa).
- Predecessor synth notes: synth #335 (bimodal medium-width attractor — origin of mode taxonomy), synth #336 (M-152.U ULTRA-DEEP class founding definition), synth #340 (bimodal alternation kinetics with asymmetric bounds — independent dimension prior to this synth's coupling claim), synth #342 (cascade-monotonicity property added to M-152.U — **falsified at P-342.B by this synth**).
- This synth **falsifies** synth #342 P-342.B at the width-insufficiency falsifier sub-condition, **refines** synth #336/#342 M-152.U class definition with cascade-break-mode taxonomy {emission-break terminal, width-insufficiency-break transient}, and **introduces** structural coupling between synth #340 bimodal attractor and synth #336/#342 cascade property as a 4th cross-dimensional model property after synth #317 width-rate coupling, synth #326 active-repo-Poisson, and synth #329 medium-width-attractor convergence.
- Methodological note: This is the **2nd explicit synth #342 prediction falsification** at the same tick (P-342.B falsified here; P-342.A 5-band-occupancy sustainability was tested at Add.156 with active-repo-count=1 and may also be at-risk depending on band-tracking — see synth #344 for the silence-exit-shape analysis that addresses the related 3-tick run termination dimension).
