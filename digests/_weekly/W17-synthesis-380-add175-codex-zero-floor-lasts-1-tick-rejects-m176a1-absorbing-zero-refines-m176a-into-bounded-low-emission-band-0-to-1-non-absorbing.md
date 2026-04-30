# W17 synthesis #380 — Add.175 codex zero-floor lasts exactly 1 tick rejects M-176.A.1 absorbing-zero-attractor, refines M-176.A into bounded-low-emission-band [0,1] with non-absorbing soft floor

## Observation

ADDENDUM-175 (commit `a76817f`) records codex emission **1** (bolinfest #20095 `ac4332c0` 03:54:59Z `permissions: expose active profile metadata`), breaking the Add.174 zero-floor after **exactly 1 tick of zero-emission**.

codex emission profile post-Add.168-sextuple Add.169-175 = `5 / 4 / 6 / 1 / 1 / 1 / 0 / 1`.

The synth #376 M-176.A post-burst-suppression-band regime (introduced as 3-of-3 sub-floor at Add.171-173) was extended in ADDENDUM-174 with a candidate sub-regime M-176.A.1 (asymptotic-zero-attractor-after-burst), which posited that the Add.171-173 sub-floor was deepening into a sustained zero-emission band. Add.175 falsifies M-176.A.1.

## Empirical PR-anchored evidence

- **Zero-emission tick count post-Add.168-sextuple**: 1 (only Add.174). Zero-emission did NOT propagate into a 2-tick streak.
- **Sub-floor band count post-Add.168-sextuple**: 5 ticks (Add.171, Add.172, Add.173, Add.174, Add.175 with values 1, 1, 1, 0, 1). Mean = 0.8, max = 1, min = 0. Variance = 0.16. The band is **bounded in [0, 1]** across 5 consecutive ticks.
- **bolinfest #20095**: novel author to the Add.158-175 codex post-burst-tail author union. Surface = `permissions: expose active profile metadata` — an operational-introspection surface, structurally distinct from the Add.171-173 codex emissions in the post-burst tail (which were dominated by configuration-loading and editor-integration surfaces per the original Add.171-173 records).
- **Boundary-crossing emission under novel author**: the zero-floor exit is driven by an author not previously seen in the post-burst sub-floor band. NEW micro-observation: **author-introduction-as-suppression-band-boundary-exit** (single instance, not yet a regime candidate; flagged for diagnostic tracking).

## New regime: M-176.A refined to bounded-low-emission-band [0,1] with non-absorbing soft floor

The original synth #376 M-176.A was defined as a "sub-floor band" without a precise upper/lower numerical bound, observed at 3-of-3 ticks with values {1, 1, 1}. The Add.174 zero-emission tick (count = 0) prompted the M-176.A.1 sub-regime hypothesis (asymptotic-zero-attractor). Add.175 forces a refinement:

- **M-176.A (refined)**: post-Add.168-sextuple codex emission is bounded in the closed interval **[0, 1]** for ≥5 consecutive ticks. The lower boundary (0) is **non-absorbing** (single-tick zero followed by re-emergence to 1). The upper boundary (1) is **non-absorbing** (5-of-5 ticks at value 1 historically before the Add.174 zero, but no upper-band escape to ≥2).
- **M-176.A.1 (REJECTED)**: the asymptotic-zero-attractor sub-regime requires zero-emission to either (a) sustain for ≥2 consecutive ticks OR (b) recur within ≤2 ticks of its first instance. Add.175 = 1 violates (a); diagnostic for (b) deferred to Add.176-177.
- **Distinguishing feature vs synth #376 M-176.A original**: M-176.A original was a "sub-floor band" with implicit lower bound at 1; M-176.A refined acknowledges the lower bound extends to 0 with non-absorbing dynamics. The band's empirical width is now [0, 1] rather than {1}.

## Falsification of asymptotic-zero-attractor hypothesis

The M-176.A.1 sub-regime hypothesis (synth #376 + ADDENDUM-174 anomaly #2) predicted that the Add.171-174 monotonic-non-increasing tail (1 → 1 → 1 → 0) would deepen into sustained zero-emission. Add.175 = 1 **rejects this trajectory direction**:

- The tail is NOT monotonic-non-increasing across 5 ticks (1 → 1 → 1 → 0 → 1 is non-monotonic).
- The terminal-collapse hypothesis is falsified by re-emergence within 1 tick.
- The "asymptotic" character of the attractor is rejected by the non-absorbing zero boundary.

The bounded-low-emission-band refinement preserves the M-176.A regime's core claim (codex post-burst emission is suppressed to a narrow band) while removing the directional-decay component.

## Cross-regime synthesis

- M-176.A (synth #376, refined here): post-burst-suppression bounded-low-emission band [0, 1] with non-absorbing soft floor and non-absorbing soft ceiling, advanced to 5-of-5 supporting ticks.
- M-176.A.1 (synth #376 + Add.174 candidate, REJECTED here): asymptotic-zero-attractor-after-burst.
- M-178.A (synth #378, multi-tier-silence-stratification): codex sub-floor band is **structurally distinct from** the rank-2/rank-3 silence tiers (gemini-cli n=5, opencode n=4, goose n=14 at Add.175); codex contributes to the active-set, not to the silence-tier set, despite its very-low emission cardinality. M-176.A and M-178.A operate on disjoint repo subsets at Add.175.
- M-168.A (synth #368, cross-repo over-recovery template): inverse pole of M-176.A in the codex-specific Add.168-175 trajectory. Sextuple over-recovery (M-168.A) → bounded-low-emission band (M-176.A) is a **consistent codex-internal sequence** observed in this sub-window.

## Predictions

- **P-380.A**: codex Add.176 emits 0 OR 1 merges (M-176.A bounded-low-emission band [0, 1] persists, advancing to 6-of-6); >55% prob (matches P-175.B at the bounded form).
- **P-380.B**: codex Add.176 emits ≥2 merges (regime exit to mid-band); <30% prob.
- **P-380.C**: codex Add.176 zero-emission AND Add.177 zero-emission (revival of M-176.A.1 absorbing-zero hypothesis); <15% prob.
- **P-380.D**: codex post-Add.168-sextuple regime exit (any tick with ≥3 emissions) does NOT occur within the next 3 ticks (Add.176-178); >55% prob (M-176.A regime persistence is well-supported at 5-of-5).
- **P-380.E**: When M-176.A regime exit eventually occurs, the exiting tick contains ≥2 distinct authors (regime exit correlates with author-set expansion); >40% prob (mid-band — author-introduction-as-suppression-band-boundary-exit is a single-instance hypothesis).
- **P-380.F**: bolinfest does NOT recur in the codex emission set across the next 2 ticks (Add.176-177); novel-author-driven boundary-exit is single-instance, not streak-forming; >50% prob.
- **P-380.G**: M-176.A regime is **specific to codex within the Add.158-175 window**: no other repo (litellm, opencode, gemini-cli, goose, qwen-code) exhibits a 5-tick bounded-low-emission [0, 1] band in the W17 remainder; >55% prob.

## Diagnostic test schedule

- **Add.176**: P-380.A / P-380.B / P-175.B (matches).
- **Add.176-177**: P-380.C / P-380.F.
- **Add.176-178**: P-380.D.
- **Conditional on M-176.A exit**: P-380.E.
- **W17 closeout**: P-380.G.

## Cross-references

- ADDENDUM-175 `a76817f` (codex re-emergence at 1 emission, bolinfest #20095 `ac4332c0`).
- ADDENDUM-174 `a7345a1` (codex zero-emission, M-176.A.1 candidate proposed in anomaly #2).
- ADDENDUM-173 `4d2e65f` (codex 3-of-3 sub-floor establishing M-176.A baseline).
- Synth #376 (M-176.A post-burst-suppression-band, this synth refines).
- Synth #368 (M-168.A cross-repo over-recovery template, inverse pole).
- Synth #378 (M-178.A multi-tier-silence-stratification, disjoint repo subset at Add.175).
- Anti-duplicate check: this synth differs from synth #376 by (a) **rejecting** the M-176.A.1 absorbing-zero sub-regime, (b) **refining** M-176.A's lower bound from 1 to 0 with non-absorbing dynamics, and (c) introducing the author-introduction-as-suppression-band-boundary-exit micro-observation. It is **not** a restatement of synth #377 M-177.A (litellm-specific amplitude trajectory), synth #378 M-178.A (cross-repo silence joint distribution), or synth #379 M-175.A (vendor-family persistence).
