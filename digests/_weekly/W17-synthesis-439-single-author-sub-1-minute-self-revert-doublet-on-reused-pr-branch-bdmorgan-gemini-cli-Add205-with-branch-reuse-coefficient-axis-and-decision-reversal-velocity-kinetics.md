# W17-Synthesis #439 — Single-Author Sub-1-Minute Self-Revert Doublet on a Reused PR-Branch — bdmorgan gemini-cli #26290 (add) → #26308 (re-add) → #26309 (remove) Triplet on `bdmorgan-patch-1` Within 75 Seconds — First W17 Instance of Intra-Tick Author Decision-Reversal Oscillation Distinct From Synth #408 Self-Merge Metronome (Disjoint Surfaces) and Synth #418 Same-Second Tuplet (Disjoint Surfaces)

**Class**: Single-author intra-tick PR-stream motif (synth #408 / #418 / #422 lineage) + author decision-reversal sub-mode (novel at synth #439) + reused-branch-as-PR-vehicle taxonomy axis.
**Anchor ticks**: synth #408 (single-author self-merge metronome on disjoint surfaces, sub-15-minute cadence), synth #418 (single-author same-second n=4 tuplet on four disjoint surfaces), synth #422 (single-author intra-day cadence dilation with surface jump), **Add.205 (bdmorgan gemini-cli add → re-add → remove triplet on a single shared branch within 75s terminal pair)** — establishes a previously absent corner of the single-author intra-tick taxonomy.
**Status**: Establishes the **single-author add/revert oscillation on reused PR-branch** as a novel sub-mode at gemini-cli (synth #439 sub-mode); refines synth #408 / #418 single-author taxonomy by introducing the **branch-identity axis** (do the PRs in a single-author intra-tick burst share `headRefName` or not?); establishes **decision-reversal velocity** as a measurable maintainer-behavior signal at the docs surface.

## 1. The Add.205 bdmorgan triplet structure

Per ADDENDUM-205 (`ffdf1a2`) M-205.E / M-205.F, the gemini-cli Add.205 cohort consists of exactly 3 PRs, all by the same author `bdmorgan` (Bryan Morgan), all on the same head branch `bdmorgan-patch-1`, all touching the README.md docs surface, with strictly chronological merge order:

| ord | PR# | mergeCommit | mergedAt | title | semantic intent |
|-----|-----|-------------|----------|-------|-----------------|
| 1 | **#26290** | `c427bd442f5aeab726cb6dbb149bf61eb61bf021` | 01:44:44Z | "Add Star History section to README" | ADD (introduce content) |
| 2 | **#26308** | `2e3090b6d97d8e5afc47fc37f9609c1a82f79b5c` | 01:58:45Z | "Add Star History section to README" | RE-ADD (duplicate-or-redo of intent) |
| 3 | **#26309** | `4e81f48646602e3b55d5e0776001e2fa062301a0` | 01:59:34Z | "Remove Star History section from README" | REMOVE (reverse intent of #26290 + #26308) |

**Inter-PR merge gaps**: 14m01s (#26290 → #26308) and **0m49s (#26308 → #26309)**. The terminal pair gap is **sub-1-minute**, placing it inside the synth #422-class same-second-tuplet kinetics regime but with a critical structural difference: **the surfaces are not disjoint, they are identical, and the intent is reversed**.

## 2. Why this is a new motif — three-way contrast with prior single-author lineage

### Synth #408 (single-author self-merge metronome, sub-15-minute cadence, disjoint surfaces)

Synth #408's exemplars show a single author merging multiple PRs at a **regular intra-tick cadence** but each PR touches a **different subsystem**: e.g. an icon update + a config tweak + a test addition. The structural property is **surface-disjointness with cadence-regularity**. The bdmorgan Add.205 triplet **inverts both axes**: surfaces are **strictly identical** (all three touch the same README.md anchor lines) and cadence is **dramatically irregular** (14m01s vs 0m49s; CV ≈ 1.30, far above synth #408's CV-band).

### Synth #418 (single-author same-second n=4 tuplet on four disjoint surfaces)

Synth #418's exemplars exhibit **temporal coincidence (Δt < 1s)** with **spatial disjointness** — a maintainer batching 4 unrelated PRs through CI and merging them with a single click. The bdmorgan Add.205 triplet **inverts spatial disjointness** while **partially matching temporal coincidence** at the terminal pair only — the first → second gap is 14m01s, which is firmly outside the synth #418 same-second regime. The triplet is therefore **temporally heterogeneous** (one mid-band gap, one sub-minute gap) rather than uniformly tight.

### Synth #422 (single-author intra-day cadence dilation with surface jump)

Synth #422's exemplars exhibit **monotonically expanding inter-PR gaps with concurrent surface jumps**. The bdmorgan Add.205 triplet exhibits **monotonically contracting** gaps (14m01s → 0m49s) and **zero surface jumps** — the antithesis on both axes.

### What's new

The novel structural property is the **combination**: (a) surface-identity (all three PRs edit the same README anchor), (b) intent-reversal between the second and third PR, (c) reuse of a single `headRefName` (`bdmorgan-patch-1`) across all three, and (d) a sub-1-minute terminal pair. No prior W17 synth exemplar combines these four properties.

## 3. The reused-PR-branch axis as a new taxonomy dimension

The most under-discussed structural fact in the bdmorgan triplet is that **all three PRs share `headRefName = bdmorgan-patch-1`**. In standard GitHub workflow, merging a PR closes its head branch (or the maintainer deletes it post-merge); a subsequent PR from the same author would normally come from a fresh branch name. The bdmorgan triplet instead **reuses the same branch identifier across three sequential PRs**, which means either:

1. The author did **not delete the branch on merge** and pushed a new commit (with reverse-intent diff) to the same branch and opened a fresh PR three times, or
2. The branch was **resurrected** between PRs with the previous merge commit cherry-picked off and a new diff applied.

Either mechanism produces the same observable signature: **3 distinct merge-commits (`c427bd44`, `2e3090b6`, `4e81f486`) sharing 1 head-branch identifier**. This is itself a measurable property — define the **branch-reuse coefficient** for a single-author intra-tick burst as `1 − (|distinct headRefNames| / |PRs|)`. For the bdmorgan triplet: `1 − (1/3) = 0.667`. For all prior synth #408 / #418 / #422 single-author intra-tick exemplars (per inspection of the W17 synth lineage), the coefficient is **0.0** — each PR comes from a distinct branch. The bdmorgan triplet therefore establishes a **new non-zero band** for branch-reuse coefficient, and the boundary `BRC > 0` is a clean discriminator for the synth #439 sub-mode.

## 4. Decision-reversal velocity as a maintainer-behavior signal

The terminal pair (#26308 add → #26309 remove) at **49 seconds** represents a **decision-reversal velocity of 1 reversal / 49 seconds ≈ 73.5 reversals/hour** if extrapolated, an obviously non-physical extrapolation but useful as a **kinetics anchor**: the upper bound of plausible single-author docs-surface decision-reversal velocity in the watched-repo corpus is now **at least** ~74 / hour. Prior W17 lookback contains no documented sub-1-minute self-reversal at the docs surface. Setting the lower-bound velocity floor at **0** (no-reversal-ever, the modal regime), the synth #439 motif establishes a new **kinetics ceiling** distinct from any prior W17 synth.

## 5. Falsifiable predictions seeded by synth #439

- **P-439.A**: bdmorgan does NOT chain the oscillation at Add.206 — the `bdmorgan-patch-1` branch is now in a terminal removed-state and the README revert closes the micro-cycle. Predicted bdmorgan recurrence-probability at Add.206 = **< 0.05**.
- **P-439.B**: branch-reuse-coefficient `BRC > 0` at any single-author intra-tick burst is a **rare event** at the watched repos. Predicted W17 forward incidence rate ≤ **1 in 30 ticks**.
- **P-439.C**: docs-surface bidirectional edits within sub-2-minute terminal pairs are **strictly limited to docs / non-code surfaces** at the watched repos (no code-surface intent-reversal at sub-2m gap predicted in the next 20 ticks).
- **P-439.D**: when a single-author intra-tick burst exhibits `BRC > 0`, it is **always** at gemini-cli or qwen-code (the docs-heavy / repo-curation-heavy repos), never at codex or litellm (the dense engineering repos). Predicted next 10 W17 ticks: 0 codex/litellm `BRC > 0` events.

**End of synth #439.**
