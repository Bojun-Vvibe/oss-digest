# W17 synthesis #377 — Add.174 litellm post-amplification asymmetric collapse 7→1 supersedes M-175.A direct-amplifying sub-regime, introduces M-177.A asymmetric-collapse-after-amplification

## Observation

ADDENDUM-174 (window 2026-04-30T03:09:17Z → 03:33:28Z, commit `a7345a1`) records litellm at **1 merge** following the Add.173 septuple (synth #375 M-175.A direct back-to-back amplification 4→7). The shape sequence Add.171-174 = `0 → 4 → 7 → 1` exhibits a **−6 single-tick collapse** that exceeds the preceding +3 amplification by 2× in magnitude.

**Sole Add.174 litellm PR**: sruthi-sixt-26 #26814 `26cb28ef` 03:23:23Z `fix(proxy/batches): forward model to retrieve_batch for bedrock` — author is novel to the Add.158-173 litellm union, surface (proxy/batches/bedrock) recurs vs Add.173 mateo-berri #26800 (bedrock-pricing) under a different author.

## Falsification of M-175.A continuation

Synth #375 introduced M-175.A as a **direct amplifying sub-regime** under M-168.A: back-to-back over-recovery with monotonically-increasing magnitude and no intervening silence. The implicit continuation hypothesis was that the amplification would either (a) extend to a third tick (≥8) or (b) decay through a multi-tick tail analogous to the post-Add.168 codex sextuple (6→5→4→6→1→1→1). 

ADDENDUM-174 falsifies BOTH continuation modes:
- (a) is falsified outright (1 ≪ 8).
- (b) is falsified by **compression**: the entire decay tail is compressed into a single tick. The codex post-sextuple decay took 6 ticks to reach 1 (shape 6→5→4→6→1→1→1); litellm post-septuple reaches 1 in 1 tick (7→1).

## New regime: M-177.A asymmetric-collapse-after-amplification

The M-175.A direct-amplifying sub-regime is **superseded** by M-177.A:

- **Definition**: post-amplification single-tick collapse where the collapse magnitude exceeds the preceding amplification magnitude.
- **Diagnostic signature**: shape `0 → A → B → C` where B − A > 0 (amplification), A − C > B − A (collapse > amplification), C ≤ floor.
- **Add.174 instance**: litellm 0→4→7→1, amplification +3, collapse −6, ratio 2.0.
- **Distinguishing feature vs M-176.A** (post-burst-suppression, codex synth #376): M-177.A is a **single-tick collapse**; M-176.A is a **multi-tick sustained-sub-floor tail**. M-177.A may transition INTO M-176.A if subsequent ticks remain at sub-floor — Add.175+ is the diagnostic test.

## Cross-regime relationship

M-177.A is the **dynamic-collapse counterpart** to M-176.A's static-suppression. Both regimes describe post-burst behavior, but they operate on different timescales:
- M-176.A: post-burst suppression band sustained ≥3 ticks (codex Add.171-174 = 1/1/1/0).
- M-177.A: post-amplification single-tick collapse with magnitude inversion (litellm Add.173-174 = 7→1).

If litellm Add.175 emits 0-2 merges, M-177.A transitions into an M-176.A-class sustained-suppression tail (composite regime M-177.A→M-176.A). If litellm Add.175 emits ≥3 merges, M-177.A is a **standalone single-tick collapse-and-bounce** (bounce hypothesis).

## Falsifications validated by Add.174

- **P-173.A** (litellm 0-2 merges): CONFIRMED — observed 1, mid-band.
- **P-173.K** (Sameerlite emits 0): CONFIRMED — Sameerlite contributed 2-of-7 at Add.173, 0-of-1 here. Author-anchor saturation parallel to stuxf Add.172→173 holds.

## Predictions

- **P-377.A**: litellm Add.175 emits 0-2 merges (M-177.A → M-176.A composite transition); >55% prob.
- **P-377.B**: litellm Add.175-176 cumulative emits ≤4 merges (post-collapse cool-down sustained for 2 ticks); >50% prob.
- **P-377.C**: NO litellm tick in Add.175-178 emits ≥4 merges (M-168.A regime cool-down for litellm specifically extends ≥4 ticks post-collapse); >50% prob.
- **P-377.D**: M-177.A asymmetric-collapse-after-amplification recurs in another repo within Add.175-180 (regime is not litellm-specific); >40% prob.
- **P-377.E**: If litellm Add.175 emits ≥3 merges, the M-177.A bounce hypothesis is validated and M-177.A is reclassified as transient single-tick collapse rather than tail-precursor; <30% prob (low conditional probability).
- **P-377.F**: bedrock surface family does NOT appear in litellm Add.175 (surface-family-recurrence-with-author-rotation, NEW micro-pattern from ADDENDUM-174 anomaly #8, does not extend to a third tick); >55% prob.

## Diagnostic test schedule

- **Add.175**: P-377.A / P-377.B / P-377.E / P-377.F.
- **Add.176**: P-377.B (cumulative).
- **Add.178**: P-377.C (4-tick cool-down boundary).
- **Add.180**: P-377.D (regime recurrence boundary).

## Cross-references

- ADDENDUM-173 `4d2e65f` (litellm septuple), ADDENDUM-174 `a7345a1` (litellm collapse to 1).
- Synth #375 (M-175.A direct-amplifying, superseded by this synth).
- Synth #376 (M-176.A post-burst-suppression, related regime — different timescale).
- Synth #373 (M-173.A intra-repo over-recovery recurrence — distinct silence-tick-separated structure).
- M-168.A regime tracker: instance count unchanged at 5-of-7 (Add.168, 170, 171, 172, 173); Add.174 does NOT advance M-168.A but introduces its first explicit collapse-tail successor regime.
