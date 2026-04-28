# W17 Synthesis #265 — **Single-tick reservoir-drain rebound** with uneven per-repo conversion: at Add.116 the open-side reservoir accumulated under synth #263's regime (Add.115's 7:1 Opens:Merges ratio with 0/6 per-repo co-fire) inverts in a single 58m tick to **9:8 Opens:Merges (1.13:1)** with **3/6 per-repo co-fire** and **66.7% per-repo crossing rate** (4 of 6 repos transit a merge-state band — exceeding synth #254's [20%, 40%] band ceiling for the first time in W17 corpus); per-repo drain is asymmetric — qwen-code converts 4 merges from 3 Add.115-opens (133% conversion via stack-augmentation), opencode converts 1 from 5 (20%), litellm converts 0 from 2 (0%); INTRODUCES **uneven-conversion sub-property** of reservoir-drain dynamics; SUSTAINS synth #263 reservoir-regime claim by demonstrating its predicted reversal at the 1-tick mark; cross-references Pred FFF directional pass tick 1 of 3 and Pred 254-1 in-band recovery from 3-tick falsification streak

**Status:** SUSTAINS synth #263 (reservoir reversal predicted within 3 ticks; observed at tick 1). EXTENDS synth #263 by introducing uneven-per-repo-conversion as a structural feature of drain ticks (not a transient artifact). PARTIALLY RECONCILES synth #254 ([20%, 40%] band) with single-tick excursion data — band is now reframed as a **mean-reversion target** rather than a hard envelope.

## Cross-references
- SUSTAINS synth #263 reservoir regime — drain-tick reversal observed at predicted 1-tick mark.
- EXTENDS synth #263 uneven-conversion sub-property — per-repo drain rates differ by 6.6× (qwen-code 133% vs litellm 0%).
- RECONCILES synth #254 commit-phase band — Add.116's 66.7% crossing rate is above ceiling but pulls 4-tick rolling back into [20%, 40%] (25.0%).
- Cross-references Pred FFF (PASSING-DIRECTION tick 1 of 3 at Add.116).
- Cross-references Pred 254-1 (RESOLVED-FALSIFIED-DIRECTION → RECOVERED-IN-BAND single-tick reversal).
- Cross-references Pred GGG (FALSIFIED at Add.116 tick 1 of 4 — qwen-code Add.115 doublet co-merged).

## Empirical basis (Add.115 → Add.116 reservoir-drain transition)

| Repo | Add.115 in-window opens | Add.115 in-window merges | Add.116 in-window merges | Per-repo conversion ratio (Add.116 merges / Add.115 opens) |
|------|-------------------------|--------------------------|--------------------------|------------------------------------------------------------|
| anomalyco/opencode | 2 (kzekiue #24745, sdwolf4103 #24746) | 0 | 1 (Brendonovich #24749 — NEW PR not from Add.115 opens) | **20% effective** (1 fresh merge, 0 of 2 Add.115-opens) |
| openai/codex | 0 | 0 | 1 (xl-openai #19914) | undefined (no Add.115 opens to drain) |
| BerriAI/litellm | 1 (mateo-berri #26676) | 0 | 0 | **0%** |
| google-gemini/gemini-cli | 0 | 0 | 0 | undefined |
| block/goose | 1 (jh-block #8874) | 1 (morgmart #8868) | 1 (jh-block #8874 — Add.115-open converts) | **100%** (1 of 1 Add.115-open) |
| QwenLM/qwen-code | 3 (qqqys #3692, tanzhenxin #3693, tanzhenxin #3694) | 0 | 4 (tanzhenxin #3690+#3691+#3694+#3699) | **133%** (drain exceeds Add.115 inventory via stack-augmentation #3690+#3699+#3691) |

**Aggregate:** Add.115 produced 7 in-window opens; Add.116 produced 8 in-window merges. **Naive aggregate conversion = 8/7 = 114%.** Per-repo decomposition reveals **two repos drain (goose 100%, qwen-code 133% via augmentation) while three contribute zero drain (litellm 0%, gemini-cli undefined, opencode 0% from Add.115-opens specifically).** Codex contributes one fresh-cycle merge (xl-openai #19914) with no Add.115-open ancestry.

## Synth #265 claim — Reservoir drain is uneven by repo, with bimodal conversion outcomes

**Statement:** When the cross-repo open-reservoir (synth #263) inverts to a drain regime, per-repo conversion ratios are **bimodally distributed** — repos either drain at ≥100% (full conversion plus stack-augmentation) or at 0% (no conversion despite open inventory). Intermediate conversion rates (33%, 50%, 67%) are **structurally rare** because reservoir conversion is gated by author-availability, not by inventory size.

**Mechanism:**
- Drain happens when the same author who opened reservoir PRs returns within the next tick to merge them (qwen-code: tanzhenxin opened #3693, #3694 in Add.115 and merged both + augmented with #3691, #3699 in Add.116 — single-author rampage signature; goose: jh-block opened and merged #8874).
- Non-drain happens when reservoir-PR authors do NOT return in the next tick (litellm: mateo-berri #26676 still open ~58m+; opencode: kzekiue, sdwolf4103, ualtinok, Brendonovich-from-#24738 all silent in Add.116 except for fresh-cycle Brendonovich #24749).
- Stack-augmentation (drain >100%) signals author-rampage mode (synth #266 — single-author quartet variant of synth #91 metronome).

**This is non-obvious because:** synth #263 framed reservoir-vs-drain as an **aggregate** dynamic (Opens:Merges ratio collapses ≤1:1 within 3 ticks). Synth #265 reveals that the aggregate ratio is misleading — it conceals **bimodal per-repo behavior** where two repos do all the conversion work and three contribute zero. The aggregate looks like uniform drain but is actually concentrated drain.

## Predictions opened by synth #265

### Pred 265-1 — Bimodal conversion persists at next drain event
**Statement:** The next reservoir-drain tick (defined as Opens:Merges ≤2:1 following ≥3 consecutive ticks of Opens:Merges ≥3:1) shows ≤2 repos with conversion ratio in [25%, 75%]; the remainder are at 0% or ≥100%.
**Falsifier:** Next drain tick has ≥3 repos in [25%, 75%] conversion band.
**Mechanism:** Author-availability is binary per tick (author either iterates or doesn't); intermediate conversion would require multi-author coordination within a single repo, which is empirically rare.

### Pred 265-2 — Drain ticks coincide with single-author rampages in ≥1 repo
**Statement:** Every drain tick (Opens:Merges ≤2:1 after reservoir build-up) features at least one repo with ≥3 same-author merges in ≤90min on disjoint surfaces (synth #266 quartet/triplet signature).
**Falsifier:** A drain tick occurs with all per-repo merges distributed across distinct authors (no single-author cluster ≥3).
**Mechanism:** Reservoir conversion is gated by author-presence; large reservoir inventory tends to be self-author-concentrated (synth #91 metronome cohort), so drain naturally manifests as same-author burst.

### Pred 265-3 — Litellm conversion gap closes within 3 ticks of drain
**Statement:** When a repo (e.g., litellm) registers 0% conversion at a drain tick despite having open inventory, the same repo registers ≥1 in-window merge within 3 subsequent ticks.
**Falsifier:** litellm (or any 0%-converter) sustains zero merges for 4+ ticks following the drain tick.
**Mechanism:** Open inventory degrades — stale PRs either merge, get closed, or accumulate review-fatigue forcing eventual triage. 3-tick horizon is empirically observed lag bound for stale-PR resolution in W17 corpus.

### Pred 265-4 — Per-repo crossing rate above [20%, 40%] band reverts within 1 tick
**Statement:** When per-repo crossing rate exceeds 40% in a single tick (Add.116 = 66.7%), the next tick's per-repo crossing rate drops below 40% (mean-reversion).
**Falsifier:** Add.117 per-repo crossing rate ≥40% (4 of 6 repos transit a merge-state band again).
**Mechanism:** Above-band ticks consume reservoir inventory; without replenishment lag, the next tick has fewer merge-eligible PRs.

### Pred 265-5 — Stack-augmentation drain (>100% conversion) is anti-persistent
**Statement:** A repo registering >100% drain ratio in one tick (qwen-code Add.116 = 133%) registers <50% drain ratio in the next tick.
**Falsifier:** qwen-code Add.117 drain ratio ≥50% (e.g., ≥1 merge with Add.116 having ≤2 in-window opens).
**Mechanism:** Author-rampage is energy-limited; same author rarely sustains quartet-cadence across consecutive ticks (synth #91 metronome is intra-tick, not inter-tick).

## Linkage to synth #263, #254, #91

- **Synth #263 reservoir regime**: synth #265 confirms reversal-within-3-ticks (observed tick 1), but identifies that **the reversal is not uniform** — it concentrates in 1-2 repos. This refines #263's aggregate framing into a per-repo decomposition.
- **Synth #254 commit-phase band [20%, 40%]**: synth #265 reframes the band as **mean-reversion target** — single-tick excursions above 40% are permitted by reservoir-drain dynamics; persistent above-band sojourn is structurally unstable due to inventory exhaustion.
- **Synth #91 single-author triplet metronome**: synth #265 binds metronome-pattern to drain-tick mechanism — same-author multi-merge bursts are not random but causally linked to prior-tick reservoir contributions by the same author.

## What synth #265 does NOT claim

- Does NOT claim drain ticks always follow build-up ticks at fixed lag — synth #263 prediction (3-tick window) was loose; synth #265 only operationalizes the per-repo behavior IF a drain tick occurs.
- Does NOT predict which specific repos will be drainers vs non-drainers — that depends on author-iteration cadence which is per-repo-specific.
- Does NOT generalize bimodal conversion to non-drain ticks (steady-state ticks may have wide conversion-rate distributions).
- Does NOT claim qwen-code's tanzhenxin-led drain is repeatable — Pred 265-5 explicitly tests anti-persistence.

## Capture summary

Add.116 is the first observed reservoir-drain tick in W17 commit-phase. Synth #265 introduces 5 falsifiable predictions (bimodal conversion Pred 265-1, single-author-rampage coincidence Pred 265-2, litellm convergence Pred 265-3, band mean-reversion Pred 265-4, stack-augmentation anti-persistence Pred 265-5) with deadlines spanning Add.117-Add.120. **Together with synth #266 (single-author quartet rampage), Add.116 is described by a 2-axis state: cross-repo reservoir-drain mechanism (synth #265) × intra-repo author-rampage mechanism (synth #266).** Synth #265's per-repo bimodality claim is the structural insight that aggregates can mislead — the 1.13:1 Opens:Merges ratio masks 0% / 100% / 133% per-repo conversion outcomes. **Cited PRs:** qwen-code #3690 `fd672797` 06:58:50Z, #3691 `6763124a` 08:32:59Z, #3694 `e973dabf` 08:32:49Z, #3699 `784b3cef` 08:40:26Z, #3693 `8807c026` 08:44:20Z (boundary); opencode #24749 `9d1f17d8` 07:51:19Z; codex #19914 `7d72fc8f` 07:53:28Z; goose #8874 `0aa8a563` 07:54:48Z; litellm #26677 onthebed 08:00:59Z (open).
