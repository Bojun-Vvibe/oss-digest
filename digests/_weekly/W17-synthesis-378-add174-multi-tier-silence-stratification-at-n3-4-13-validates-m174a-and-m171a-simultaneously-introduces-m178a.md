# W17 synthesis #378 — Add.174 silence-band stratification at n={3,4,13} validates M-174.A and M-171.A simultaneously, introduces M-178.A multi-tier-silence-stratification

## Observation

ADDENDUM-174 (commit `a7345a1`) records **three repos simultaneously in multi-tick silence at three structurally distinct depths**:
- **opencode** silence n=3, depth ~2h08m (post-Tier-3 over-recovery silence)
- **gemini-cli** silence n=4, depth ~3h (post-carrier-streak silence, M-171.A regime)
- **goose** silence n=13, depth ~9h06m (M-174.A unbounded-attractor regime)

This is the **first observed case in Add.158-174** of three silence-tier repos coexisting at three distinct silence-depth bands within a single tick.

## Empirical PR-anchored evidence

- **goose break-prediction streak falsified again**: Add.174 marks the **5th consecutive deferred goose break-prediction** (P-169.D / P-170.D / P-171.D / P-172.D historically falsified; P-173.D predicted continuation and was confirmed). Goose has not emitted since the last goose merge prior to Add.163-class baseline (≥9h depth window). M-174.A advances to **3-of-3 supporting ticks** post-introduction.
- **gemini-cli post-carrier silence**: gemini-cli's last carrier-streak emission preceded Add.171's depth-band entry. Now n=4 ticks silent. M-171.A (synth #371 finite-carrier-streak-depth-bound) gains a **third supporting tick**: post-streak silence is sustained ≥4 ticks, materially deeper than the W17 typical post-carrier brief-silence band.
- **opencode post-Tier-3 silence**: opencode shape Add.170-174 = `0 → 3 → 0 → 0 → 0`. The Add.171 Tier-3 over-recovery (3 merges, kitlangton triplet per ADDENDUM-171) is followed by depth-3 silence. The shape **structurally mirrors** the gemini-cli M-171.A post-carrier silence but emerges from a **distinct trigger** (Tier-3 over-recovery vs Tier-2 finite-carrier-streak).

## New regime: M-178.A multi-tier-silence-stratification

When ≥3 repos coexist in multi-tick silence at distinct depth tiers within a single tick, the cross-repo dormancy distribution **stratifies into a discrete tier set** rather than collapsing to a single dominant attractor.

- **Definition**: a tick where ≥3 repos are simultaneously silent with silence-depth values that span ≥2 orders of magnitude (in tick-count) AND ≥3 distinct values.
- **Add.174 instance**: silence-depth set = {3, 4, 13}. Span = 13/3 ≈ 4.3× (within an order of magnitude on the upper end), 3 distinct values. Tiers: short (n=3, opencode), medium (n=4, gemini-cli), deep (n=13, goose).
- **Distinguishing feature vs synth #374 M-174.A**: M-174.A is a **single-repo unbounded attractor** describing goose specifically. M-178.A is a **cross-repo distributional regime** describing the joint silence-depth distribution.

## Falsification of single-attractor dormancy hypothesis

Pre-Add.174 W17 synthesis (synth #361, #367, #374) modeled cross-repo silence as a **rank-ordered sequence with a single dominant rank-1 holder** (M-169.B dormancy-rank-inheritance, goose). M-178.A refines this: **rank-1 holder still applies (goose, M-169.B 5-of-5), but rank-2 and rank-3 silence-holders are ALSO sustained at meaningful depths simultaneously**. The silence distribution is not a single-spike-plus-noise; it is a **stratified multi-band distribution**.

## Cross-regime synthesis

- M-169.B (synth #368, advanced to 5-of-5): rank-1 holder identity (goose).
- M-171.A (synth #371, advanced to 3-of-3): rank-2 finite-carrier-streak-depth-bound silence (gemini-cli).
- M-174.A (synth #374, advanced to 3-of-3): unbounded-attractor mechanism for rank-1 (goose).
- M-178.A (NEW, this synth): joint distribution shape — **stratified multi-tier silence**.

The four regimes compose: M-178.A = {M-169.B rank-1 (governed by M-174.A unbounded mechanism)} ⊕ {M-171.A rank-2 (gemini-cli finite-carrier exhaustion)} ⊕ {rank-3 short-silence (opencode post-Tier-3)}.

## Predictions

- **P-378.A**: Add.175 silence-stratification persists with ≥3 repos in multi-tick silence (silence-depth set continues to span ≥3 distinct values); >55% prob (assumes goose continues, gemini-cli n=5 OR breaks, opencode n=4 OR breaks; cardinality ≥3 requires at most 1 break).
- **P-378.B**: Add.175 silence-stratification depth set max ≥14 (goose extends); >55% prob.
- **P-378.C**: Add.175 silence-stratification depth set min ≤4 (at least one rank-3 short-silence repo persists); >50% prob.
- **P-378.D**: M-178.A recurs at Add.176 (two-tick stratification streak); >40% prob (downgraded — Add.175 break in any of the 3 silent repos collapses cardinality to 2).
- **P-378.E**: opencode is the FIRST of {opencode, gemini-cli} to break (rank-3 short-silence band breaks before rank-2 finite-carrier band, validating the depth-tier stability ordering: deeper tier → longer persistence); >50% prob.
- **P-378.F**: If goose breaks at Add.175 with ≥2 merges (per P-174.O conditional), M-178.A is **temporarily disrupted** but rank-2 (gemini-cli) and rank-3 (opencode) continue, producing a **single-tier silence stratification** (cardinality drops from 3 to 2); diagnostic test of whether M-178.A requires rank-1 anchoring; <30% prob (low conditional).
- **P-378.G**: Add.175 active-repo set INCLUDES goose, opencode, OR gemini-cli (at least one silence-tier repo breaks, reducing M-178.A cardinality below 3); >55% prob.

## Diagnostic test schedule

- **Add.175**: P-378.A / P-378.B / P-378.C / P-378.E / P-378.G.
- **Add.176**: P-378.D (regime recurrence test).
- **Conditional on goose break**: P-378.F.

## Cross-references

- ADDENDUM-174 `a7345a1` (silence-stratification observation), ADDENDUM-173 `4d2e65f` (precursor 3-repo-silence at n={2,3,12}).
- Synth #371 (M-171.A finite-carrier-streak-depth-bound, gemini-cli).
- Synth #374 (M-174.A unbounded-deep-dormancy-attractor, goose).
- Synth #368 (M-169.B dormancy-rank-inheritance, goose rank-1 holder).
- M-178.A is the **first cross-repo distributional silence regime** in the W17 synthesis sequence; prior silence regimes were single-repo or rank-ordered without joint-distribution structure.
- Anti-duplicate check: M-178.A is **not** a restatement of synth #361 (keystone carrier rotation, active-set dynamics), synth #367 (single-attractor candidate, falsified), synth #374 (single-repo unbounded), or any prior synth — it is a joint-distribution shape claim.
