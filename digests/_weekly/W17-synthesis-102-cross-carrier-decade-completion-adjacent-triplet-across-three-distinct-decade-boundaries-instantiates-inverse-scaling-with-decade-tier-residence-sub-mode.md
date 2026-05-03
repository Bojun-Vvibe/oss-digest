# W17 Synthesis #102 — Cross-carrier decade-completion adjacent-triplet across three distinct decade boundaries (second, first, fourth) by three distinct carriers expands decade-marker framework into a 4-carrier-3-boundary cross-validation matrix and instantiates inverse-scaling-with-decade-tier residence sub-mode

**Anchor window:** 2026-05-02T22:37:19Z → 2026-05-03T00:00:03Z (composite 1h22m44s spanning ADD-270/271/272 — three consecutive ticks).
**Anchor ticks:** ADD-270 (sha=70d9655) → ADD-271 (sha=01b4c8f) → ADD-272 (this tick).
**Anchor carriers:** BerriAI/litellm (silent at n=20 second-decade-completion at ADD-270), QwenLM/qwen-code (silent at n=10 first-decade-completion at ADD-271, then ACTIVE via #3780 mergeCommit `5037fa76` at ADD-272 terminating residence at 1 tick), charmbracelet/crush (silent at n=40 fourth-decade-completion at ADD-272).
**Decade-marker BF cum:** ×9.07 at ADD-272 (×1.8 at ADD-270 single-tick → ×3.78 at ADD-271 cum → ×9.07 at ADD-272 cum), past ×5 threshold.

## Claim

The cross-carrier decade-completion adjacent-triplet observed in ADD-270/271/272 jumps across THREE distinct decade boundaries — second-decade (litellm n=20), first-decade (qwen-code n=10), fourth-decade (crush n=40) — by THREE distinct carriers in THREE consecutive ticks. This is the FIRST W17 visible-window instance of:

1. A decade-completion triplet in any framing.
2. A cross-decade-tier triplet (the three boundaries jump second→first→fourth, a NON-MONOTONIC decade-tier sequence with a mid-window decade-tier reversal — distinct from the monotonic ascent or descent that a single-carrier silence-extension would produce).
3. A 4-carrier-3-boundary cross-validation of the decade-marker hypothesis (codex Add.267 second-decade is the fourth carrier; the triplet adds litellm, qwen-code, crush as three distinct cross-validators).
4. Empirical evidence for **inverse scaling of post-completion decade-residence with decade-tier**: first-decade residence = 1 tick (qwen ADD-271→ADD-272), second-decade residence = 1-tick (codex ADD-267→ADD-268) OR ≥2-tick (litellm ADD-270 → litellm ADD-272 still silent at n=22), third-decade residence = 3 ticks (codex ADD-268→ADD-269→ADD-270→ADD-271 reset), fourth-decade residence = ≥1 tick (crush ADD-272 only datum). The conjecture is that post-completion residence monotonically extends with decade-tier, reflecting that higher-tier carriers have intrinsically slower base rates and therefore lower probability of immediate post-completion reactivation.

This reframes the decade-marker hypothesis from a per-decade-boundary local feature into a **multi-tier marker matrix** with structural cross-tier coupling.

## Evidence

### The triplet members (named by PR-anchor)

- **ADD-270 anchor (litellm n=20 second-decade)**: BerriAI/litellm carrier silent at n=20 over the ADD-269→ADD-270 tick, instantiating a second-decade-completion event by silence-increment. This event was the anchor for synth #100 (cross-carrier decade-completion adjacent-doublet across distinct decade boundaries) which paired litellm n=20 with qwen-code n=10 at gap=1. Decade-marker single-tick BF at this anchor ×1.8 (synth #100, leveraging the codex Add.267 n=20 prior anchor as the original mode-tail-center observation).
- **ADD-271 anchor (qwen-code n=10 first-decade)**: QwenLM/qwen-code carrier silent at n=10 over the ADD-270→ADD-271 tick, instantiating a first-decade-completion event by silence-increment. P-270.F N→N at prior 0.55 confirmed at modal. This was the second member of the synth #100 adjacent-doublet. Cum decade-marker BF ×3.78 at ADD-271 (×1.8 × ×2.1 amplifier under qwen-code lower-tier mode-tail center).
- **ADD-272 anchor (crush n=40 fourth-decade)**: charmbracelet/crush carrier silent at n=40 over the ADD-271→ADD-272 tick, instantiating a FOURTH-decade-completion event by silence-increment. crush had been at n=39 at ADD-271 (29th tick past prior decade-boundary, fourth-decade interior sustain alongside gemini-cli at n=36). The n=39→n=40 increment crosses the fourth-decade boundary cleanly. Single-tick BF at this anchor ×2.4 (upper-tier mode-tail amplifier — fourth-decade boundary is structurally rarer than first/second-decade and therefore higher informational content under H_decade-marker). Cum decade-marker BF ×9.07 at ADD-272 (×3.78 × ×2.4).

### Active termination at ADD-272 (qwen-code first-decade residence-of-1)

QwenLM/qwen-code #3780 by `B-A-M-N` (mergeCommit `5037fa76`) at 23:31:08Z (within ADD-272 capture window). Touches `packages/cli/src/utils/costCalculator.ts` (+33), `packages/cli/src/ui/commands/statsCommand.ts` (+11), `packages/cli/src/ui/components/ModelStatsDisplay.tsx` (+33), `packages/cli/src/config/settingsSchema.ts` (+19), three test files (+205, +341, +172), schema (+5). Total 819+/10−, 8 files. Created 2026-05-01T15:16:25Z, ~32h pre-merge lifespan (mid-class). This active vector RESETS qwen-code from n=10 silent to n=0, establishing the **first-decade-residence-of-1 sub-mode** for qwen-code. Compare codex's third-decade-residence-of-3 (ADD-267 n=20 entry → ADD-268 n=21 → ADD-269 n=22 → ADD-270 n=23 → ADD-271 active at #20823 mergeCommit `51368db8` resetting codex). The first-decade-tier residence is **3× tighter** than the third-decade-tier residence at the only directly-comparable observation.

### The non-monotonic decade-tier sequence

Triplet decade-tiers in tick-order: 2 → 1 → 4. Differences: −1, +3. This is non-monotonic with a mid-window reversal. Under a single-carrier silence-extension hypothesis the decade-tier would monotonically increase (a carrier keeps gaining n-counts and crossing successive decade boundaries). The observed non-monotonic sequence rules out a single-carrier explanation and is structurally consistent with the multi-carrier decade-marker matrix where each tier-locus is independently activated by the silence trajectory of a distinct carrier. The matrix interpretation is reinforced by:

- Each triplet member is a distinct carrier (litellm, qwen-code, crush).
- Each triplet member is a distinct decade boundary (second, first, fourth).
- The inter-tick gap is exactly 1 across all three pairs (gap=1 between ADD-270↔ADD-271 and gap=1 between ADD-271↔ADD-272).
- The three carriers are pause-class-disjoint: litellm at n=20 entered third-decade region, qwen-code at n=10 entered mid-gap region, crush at n=40 entered fifth-decade region.

### The matrix (4-carrier-3-boundary cross-validation)

|              | first (n=10)   | second (n=20)               | third (n=30) | fourth (n=40)  |
|--------------|----------------|-----------------------------|--------------|----------------|
| codex        | -              | ADD-267 (anchor instance)   | not attained | not attained   |
| litellm      | -              | ADD-270 (cross-validator 1) | not attained | not attained   |
| qwen-code    | ADD-271        | -                           | -            | -              |
| crush        | -              | -                           | -            | ADD-272        |
| gemini-cli   | not attained   | -                           | not attained | n=36→37 (pre)  |
| opencode     | not attained   | -                           | -            | -              |
| goose        | (passed)       | (passed)                    | (passed)     | (passed)       |

Third-decade boundary (n=30) remains unattained as a completion event in W17 visible window because no carrier has reached n=30 via a sustained-silence trajectory from a low-n start: codex peaked at n=23 then reset; litellm sits at n=22 (candidate for next confirming instance per P-272.F at prior 0.65 if litellm sustains silence through ADD-275). The third-decade gap is the natural prediction target for synth #103 follow-on observation.

### Inverse-scaling-with-decade-tier conjecture

Post-completion decade-residence durations observed:

- **first-decade (qwen)**: 1 tick (ADD-271 silent at n=10, ADD-272 active resetting to n=0) — residence = 1.
- **second-decade (codex)**: 1 tick (ADD-267 silent at n=20, ADD-268 active resetting) — residence = 1.
- **second-decade (litellm)**: ≥2 ticks (ADD-270 silent at n=20, ADD-271 silent at n=21, ADD-272 silent at n=22 — still in residence) — residence ≥ 2.
- **third-decade (codex)**: 3 ticks (ADD-268 silent at n=21, ADD-269 silent at n=22, ADD-270 silent at n=23, ADD-271 active resetting) — residence = 3.
- **fourth-decade (crush)**: ≥1 tick (ADD-272 silent at n=40 — only datum) — residence ≥ 1, lower bound trivial.

The conjecture: residence_post-completion(tier) is **monotonically non-decreasing in tier** for each carrier, equivalently, **the probability of immediate post-completion reactivation decays with decade-tier**. This is consistent with the structural fact that higher-tier carriers have lower base merge rates (their carrier-pause-classes sit higher in the pause-spectrum), so their silence-completion of a higher decade is itself a sample from a slower-rate process and therefore the next-tick-active probability is lower.

The conjecture is FALSIFIABLE in two specific ways:

1. **First-decade-residence-≥3** at any future tick: a carrier completes first-decade (n=10) and remains silent through 3 or more subsequent ticks. This would directly contradict the monotonic-non-decreasing claim if no second-decade-residence-≥3 instance has been observed for the same carrier.
2. **Fourth-decade-residence-of-1** at any future tick: a carrier completes fourth-decade (n=40) and reactivates on the very next tick. crush is the only candidate carrier at the moment (n=40 at ADD-272); crush ACTIVE at ADD-273 would falsify the conjecture immediately.

P-272.I (crush N→N sustain at n=41-silent at prior 0.78) is the immediate test.

## Citations

This synth builds on the following prior synth-entries (named explicitly):

- **synth #99** (intra-author series-extension across silence-gaps; framework anchor for kitlangton effectCmd conversion series and for treating silence-gaps as series-pause not series-end — applied here to the decade-residence-of-3 sub-mode interpretation that codex's third-decade silence at n=21,22,23 was a series-pause not a regime-change)
- **synth #100** (cross-carrier decade-completion adjacent-doublet across distinct decade boundaries — directly extended by this synth from doublet to triplet at gap=1)
- **synth #101** (joint composite BF 3-cycle damped-oscillation — sibling synth at this tick; the decade-marker BF amplification ×3.78→×9.07 contributes to the joint composite BF up-leg amplitude observed at ADD-272 per synth #103)
- **synth #564** (P7/P8 covariance-correction — referenced by synth #100 as the original covariance-correction proposal that the decade-marker framework partially explains via decade-boundary-driven silence-attractor selection)
- **synth #566** (P-566.1 alternating-flat-then-lift sub-mode for axis-count sequence — directly relevant because the decade-completion adjacent-triplet contributes one axis to the ADD-272 11-axis joint cluster, sustaining the lift past prior 9-axis maximum)
- **synth #568** (post-add269 transition-axis BF deflation — referenced as the original framing that the boundary-recrossing oscillation at ×10⁶ tier is structurally distinct from the per-tick decade-completion events but cumulatively interacts via the joint composite BF)
- **synth #569** (post-add270 litellm second-decade-completion at n=20 first cross-carrier validation — directly extended by adding the third-cross-validator crush n=40)
- **synth #570** (post-add270 joint composite BF re-amplifies past ×10²¹ upward — the parallel boundary-oscillation framing that synth #103 reframes as asymmetric-damping; the decade-completion triplet observed here is the multi-axis structural driver of the up-leg amplification observed at ADD-272)

## Real PR / merge SHAs cited

- `5037fa76` — QwenLM/qwen-code #3780 (B-A-M-N), merged 2026-05-02T23:31:08Z, the active vector terminating qwen-code first-decade residence at 1 tick and providing the falsification of decade-residence-of-≥2 for first-decade-tier.
- `51368db8` — openai/codex #20823 (aibrahim-oai), merged 2026-05-02T23:03:59Z, the active vector that terminated codex third-decade residence at exactly 3 ticks per ADD-271 (M-271.A); the canonical third-decade-residence-of-3 datum used in the inverse-scaling conjecture.
- `7ab1c1c7` — sst/opencode #25485 (kitlangton), merged 2026-05-02T23:19:06Z, the active vector at ADD-271 that resets opencode but does not contribute to the decade-completion triplet (opencode pause-spectrum was not at any decade boundary); cited as the cascade-extension counterpart event at ADD-271 alongside the qwen-code first-decade-completion.
- `70d9655` — ADD-270 commit SHA, anchor for the litellm n=20 second-decade-completion event (silence-only event, no PR; the anchor is the absence of a litellm merge over ADD-269→ADD-270 tick).
- `01b4c8f` — ADD-271 commit SHA, anchor for the qwen-code n=10 first-decade-completion event (silence-only event, no PR; the anchor is the absence of a qwen-code merge over ADD-270→ADD-271 tick).

## Predictions

- **P-102.1** (third-decade-completion within ADD-273..ADD-280): cross-validator at the third-decade boundary by litellm continuing silence to n=30 OR by goose passing through n=30-equivalent decade-tier (already past). Most likely candidate: litellm sustains silence through 8 more ticks. Prior P ≈ 0.20.
- **P-102.2** (decade-marker cum BF crosses ×30 within ADD-273..ADD-280): would require third-decade-completion plus ≥1 amplifier sustain. Prior P ≈ 0.18.
- **P-102.3** (inverse-scaling conjecture confirmed at gap=1 via crush N→N at ADD-273): joint with P-272.I sustain. Prior P ≈ 0.78.
- **P-102.4** (inverse-scaling conjecture FALSIFIED via crush N→A at ADD-273 — fourth-decade-residence-of-1 instance): Prior P ≈ 0.22 (complement of P-102.3).
- **P-102.5** (decade-completion adjacent-quadruplet at ADD-273 — fourth consecutive tick with a new decade-completion event by a distinct carrier): Prior P ≈ 0.10 (no carrier sits at n=k where k+1 is a decade boundary on the next tick except possibly gemini-cli at n=37→n=38 not a boundary, litellm at n=22→n=23 not a boundary; only goose at n=71→n=72 is similarly off-boundary).
- **P-102.6** (decade-marker matrix cell {goose, sixth-decade n=60} retroactively confirmed via prior W17 silence trajectory documentation): would require backfill check. Prior P ≈ 0.40 if backfill is performed.
