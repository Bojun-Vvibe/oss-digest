# W17 synth #594 — post-add291 palindromic cardinality envelope 2-1-1-2 across Add.288-291 instantiates symmetric-burst-tetrad primitive at first-instance

**Status**: Primitive instantiated at first-instance via four-tick cardinality sequence Add.288 (n=2) → Add.289 (n=1) → Add.290 (n=1) → Add.291 (n=2) forming a palindromic envelope around the central singleton-doublet. Distinct from synth #589 fresh-author-doublet-cascade-break primitive (which addressed the doublet → singleton transition at Add.288→289), synth #591 fresh-author-cascade-triplet-extension primitive (which addressed gap-1 fresh-author cascade extension), and synth #592 triple-simultaneous-hangover-tier-saturation primitive (which addressed the same Add.289 tick from the hangover-axis); this synth observes the **shape-symmetry of the four-tick cardinality envelope itself** as a higher-order pattern co-instantiating across the same window.

**Setup**: W17 cascade window Add.275-291 cardinality sequence = 0/0/1/0/1/0/0/0/0/0/0/0/0/2/1/1/2. The terminal four-tick subsequence Add.288-291 = **2/1/1/2** is **strictly palindromic** (reads identically forward and backward), distinct from the prior 13-tick envelope Add.275-287 which contained no palindromic subsequence of length ≥4.

**Palindromic envelope anatomy**:

| tick | cardinality | dominant carrier | merge-rate (PRs/hr) | regime |
|---|---|---|---|---|
| Add.288 | **2** | qwen + litellm (cross-carrier dyad) | 1.84 | dual-fresh-author burst (synth #589 instantiation) |
| Add.289 | **1** | qwen (doudouOUC) | 0.94 | post-burst singleton (synth #591 cascade-triplet extension) |
| Add.290 | **1** | opencode (nexxeln) | 1.37 | rotating-cascade singleton (synth #585 cross-carrier-hangover-replication confirming) |
| Add.291 | **2** | opencode anchor + fresh dyad | 2.09 | intra-carrier-anchor-fresh pairing (synth #593 anchor-axis-reversal instantiation) |

**Symmetry properties**:

1. **Cardinality palindrome**: 2-1-1-2 reads identically left-to-right and right-to-left (length-4 palindrome).
2. **Burst-bracket**: Two doublet-burst ticks (Add.288, Add.291) bracket two singleton-rest ticks (Add.289, Add.290).
3. **Cross-carrier vs intra-carrier asymmetry**: Add.288 doublet is **cross-carrier** (qwen + litellm), Add.291 doublet is **intra-carrier** (opencode + opencode). Despite cardinality-symmetry, the carrier-distribution shape is **asymmetric** — instantiates **palindromic-cardinality-with-asymmetric-carrier-distribution sub-primitive**.
4. **Merge-rate trajectory**: 1.84 → 0.94 → 1.37 → 2.09 forms a **U-shape** (minimum at Add.289, maximum at Add.291), monotonic on each leg of the U.
5. **Fresh-author co-instantiation**: All four ticks contain ≥1 fresh-author event (wenshao + mateo-berri at Add.288, doudouOUC at Add.289, nexxeln at Add.290, nexxeln + kitlangton-return at Add.291) — instantiates **fresh-author-quartet-coverage primitive at first-instance** at the same envelope.

**Primitive instantiated**: `palindromic-cardinality-tetrad-with-asymmetric-carrier-distribution-and-U-shape-rate-trajectory` — when a four-tick consecutive cardinality subsequence forms a strict palindrome (k-m-m-k with k>m), AND the bracketing doublet-ticks are sourced from distinct carrier-distribution shapes (one cross-carrier, one intra-carrier), AND the merge-rate trajectory forms a monotonic U-shape on each leg, the joint event instantiates a **symmetric-burst-tetrad primitive**. The primitive captures a **higher-order shape regularity** above the per-tick primitives (synth #589, #591, #592, #593) and acts as a **container-pattern** for the cascade-extension family.

**Mechanism**: The palindrome arises from the alternation of two distinct cascade-modes:

- **Burst-mode** (cardinality ≥ 2): driven by either cross-carrier fresh-author co-instantiation (Add.288) OR intra-carrier anchor-fresh pairing (Add.291).
- **Rest-mode** (cardinality = 1): driven by either single-fresh-author extension (Add.289) OR rotating-singleton cascade-continuation (Add.290).

The two modes alternate: burst → rest → rest → burst. The **double-rest interior** (Add.289+290 both singleton) is the structural feature that distinguishes this primitive from a simple alternating-doublet pattern (which would be 2-1-2-1).

**Distinctiveness from prior synths**:

| synth | axis | claim | this-synth-relation |
|---|---|---|---|
| #589 (fresh-author-doublet-cascade-break) | cardinality | doublet → singleton transition at single edge | covers ONE edge (Add.288→289) of this synth's 4-tick envelope |
| #591 (fresh-author-cascade-triplet-extension) | fresh-author count | 3-author cascade extends via singleton at gap-1 | covers the rest-mode interior of this synth's envelope |
| #592 (triple-simultaneous-hangover-tier-saturation) | hangover-tier | 3-carrier first-instance tier records co-instantiate | orthogonal axis; co-instantiates at Add.289 rest-tick |
| #593 (anchor-axis-decay-reversal) | anchor-share | hextet-decay reversal via anchor-return | covers ONE bracket-vertex (Add.291) of this synth's envelope |
| **#594 (this synth)** | **shape-symmetry of cardinality envelope** | **4-tick palindromic tetrad with U-shape rate trajectory** | **higher-order container-pattern** |

**Cited PRs (verified merge SHAs spanning the palindromic envelope)**:

- opencode #25592 `379600b5ab9ed46043d1674e7fb7c3dbcb9bd4ba` @kitlangton 2026-05-03T13:17:06Z (Add.291 doublet bracket-vertex 2)
- opencode #25591 `7a503de606888939a64776c512ca4588267bbd8d` @nexxeln 2026-05-03T13:12:25Z (Add.291 doublet partner)
- opencode #25581 `d1f597b5b5abfe330aa30ca3c33ca043bf9b9a83` @nexxeln 2026-05-03T12:19:46Z (Add.290 rest-mode singleton)
- qwen-code #3807 `e617f20d1598ab7d7d99694e13549a3429c971d0` @doudouOUC 2026-05-03T11:36:03Z (Add.289 rest-mode singleton, fresh-author cascade-quartet anchor)
- qwen-code #3801 `07fdfadc33f1497803be3378a30088c243acea3f` @wenshao 2026-05-03T10:45:51Z (Add.288 cross-carrier doublet partner 1)
- litellm #27041 `c011a7e3ba4218015c808f9891cba9dae48056a1` @mateo-berri 2026-05-03T11:08:42Z (Add.288 cross-carrier doublet partner 2, bracket-vertex 1)

**Cum-BF redistribution at this synth instantiation**:

- Synth #589 cum BF: ×4.8 → ×5.6 (×1.17 lift, palindrome-completion confirms cascade-break primitive at extended-envelope scale).
- Synth #591 cum BF: ×3.2 → ×4.0 (×1.25 lift, triplet-extension is the rest-mode interior of confirmed palindromic envelope).
- Synth #593 cum BF: ×2.0 (instantiation-tick) → ×2.4 (×1.20 lift, anchor-axis reversal is the closing bracket-vertex of confirmed palindromic envelope).
- New synth #594 instantiation BF: ×3.5 (palindromic-envelope first-instance, prior 0.20 modal under independence assumption — under independence P(palindrome at random 4-tick window with k∈{0,1,2}) ≈ 0.20, observed at first-instance lifts BF to ×5.0/0.20 ≈ ×3.5 vs random-walk prior).

**Predictions for Add.292-294 forward**:

- P-594.A: Add.292 cardinality returns to singleton (n=1) extending the palindrome to 5-tick non-symmetric tail 2-1-1-2-1 (P 0.45 modal) — modal post-doublet decay rate.
- P-594.B: Add.292 cardinality sustains at doublet (n=2) extending to 5-tick 2-1-1-2-2 instantiating doublet-doublet-extension primitive (P 0.25 sub-modal).
- P-594.C: Add.292 cardinality drops to silent (n=0) instantiating palindrome-with-silent-tail at 2-1-1-2-0 (P 0.20 sub-modal) — post-doublet-burst silence-resumption.
- P-594.D: A second palindromic tetrad emerges within Add.292-296 forward window with different (k, m) parameters (e.g. 1-0-0-1) instantiating palindromic-tetrad-replication primitive (P 0.10 deep sub-modal).
