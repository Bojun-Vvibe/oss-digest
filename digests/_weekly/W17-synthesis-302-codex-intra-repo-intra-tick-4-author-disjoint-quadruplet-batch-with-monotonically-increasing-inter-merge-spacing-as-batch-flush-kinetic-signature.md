# W17 synthesis #302 — codex intra-repo intra-tick 4-author disjoint-quadruplet batch as a distinct shape from synth #295 cross-repo triplet, with monotonically increasing inter-merge spacing as a batch-flush kinetic signature

## Hypothesis

When codex emits a multi-merge tick, the merge cluster can take a **disjoint-quadruplet shape** characterized by: (a) 4 distinct authors with no author overlap, (b) 4 distinct conventional/non-conventional title-class profiles with no shared prefix, (c) 4 disjoint subsystems with no cross-coupling, and (d) **monotonically increasing inter-merge inter-arrival spacing** within the batch (NOT Poisson-uniform, NOT sub-minute-clustered). This is a **structurally distinct shape from synth #295's cross-repo 3-author 3-subsystem disjoint triplet** by being intra-repo and quadruplet, and from synth #299's distinct-author single-merge-per-tick metronome by being a single-tick batch rather than a per-tick rotation. The monotonically-increasing inter-merge spacing within the batch is the **kinetic signature** that distinguishes a batch-flush event from a per-merge cadence regime — batch-flushes decelerate, cadence regimes are stationary.

## Evidence (specific PRs/SHAs)

**Add.135 codex 4-merge batch within a 65m29s window (22:11:33Z → 23:17:02Z):**

| Order | PR | SHA | Merged At (UTC) | Author | Title | Subsystem | Title-class |
|---|---|---|---|---|---|---|---|
| 1 | #19995 | `2dbde94aa9e6` | 22:50:00Z | viyatb-oai | `fix(network-proxy): normalize network proxy host matching` | network-proxy / host-matching | conventional `fix(network-proxy):` |
| 2 | #20088 | `3291463ff16c` | 22:45:27Z | abhinav-oai | `Fix flaky plugin hook env test` | plugin-hook-test / env-isolation | bare `Fix` declarative |
| 3 | #20010 | `891722849dc9` | 23:01:40Z | bolinfest | `core tests: submit turns with permission profiles` | core-tests / permission-profiles | non-conventional prefix `core tests:` |
| 4 | #20092 | `5e6cbbadf796` | 23:15:47Z | gpeal | `Return None when auth refresh fails` | auth / refresh-token-failure | bare `Return` declarative |

**Author distinctness:** 4 distinct (viyatb-oai, abhinav-oai, bolinfest, gpeal); 0 author overlap.

**Subsystem disjointness:** 4 disjoint subsystems — network-proxy / plugin-hook-test / core-tests-permission / auth-refresh — zero pairwise file or module overlap inferable from titles.

**Title-class distinctness:** 4 distinct profiles — 1 conventional `fix(network-proxy):`, 1 bare `Fix`, 1 non-conventional `core tests:`, 1 bare `Return`. Zero shared-prefix coupling.

**Inter-merge spacing (sorted by merge time):**

| Pair | t_n | t_{n+1} | Δt |
|---|---|---|---|
| #20088 → #19995 | 22:45:27 | 22:50:00 | 4m33s |
| #19995 → #20010 | 22:50:00 | 23:01:40 | 11m40s |
| #20010 → #20092 | 23:01:40 | 23:15:47 | 14m07s |

**Monotonically increasing:** 4m33s < 11m40s < 14m07s. Ratios: 1.0 → 2.57 → 3.10. Per-step deceleration factor ~1.2-2.6×. Total batch span: 30m20s within a 65m29s window. **Inter-merge inter-arrival is strictly increasing, not Poisson-uniform.**

## Distinguishing features vs prior synth

- **vs synth #295** (sub-minute 3-author 3-subsystem disjoint triplet across two repos as merge-queue batch-flush signature): #295 is **cross-repo** triplet at sub-minute spacing. #302 is **intra-repo** quadruplet at multi-minute monotonically-increasing spacing. Cardinality differs (3 vs 4), repo-axis differs (cross vs intra), kinetic profile differs (sub-minute clustered vs decelerating). The two shapes are **orthogonal in three axes** simultaneously — they are not two instances of the same regime.
- **vs synth #299** (codex distinct-author single-merge-per-tick metronome): #299 was a **per-tick** distinct-author rotation observed across Add.133-134 (cassirer-openai, owenlin0). Add.135's batch **falsifies #299 at lag-2** by emitting 4 distinct authors in a single tick rather than 1-per-tick. #302 is the natural **counter-shape** to #299 — both observe author distinctness, but #299 spreads it across ticks at single-merge granularity while #302 packs it into one tick at quadruplet granularity. The two shapes form a **predictability-vs-burst dyad** within the same repo's author-distinctness regime.
- **vs synth #50** (post-own-merge same-author cascade): #50 is same-author cascade at minute-scale within one tick. #302 is cross-author batch at multi-minute scale within one tick. Identical timescale, opposite author-axis.
- **vs synth #157/#159** (bolinfest atomic-streak length 5/6): bolinfest's #20010 in this batch is a single non-stack non-atomic test PR; the streak does NOT extend to length 7. #302 documents bolinfest's re-entry as a **batch-participant**, not a stack-rebase event — bolinfest's role-class shifts from atomic-streak-anchor to batch-quadruplet-member at this tick.
- **vs synth #297** (cross-author sub-minute shared-title-prefix doublet on shared CLI input subsystem as debut-vendor pair signature): #297 is doublet with shared prefix on shared subsystem. #302 is quadruplet with **zero shared prefix** on **disjoint subsystems**. Maximum-divergence quadruplet vs maximum-convergence doublet — opposite ends of a coupling spectrum.

## Falsifiability

The synth #302 disjoint-quadruplet hypothesis falsifies if any one of the following holds in the next 3-5 ticks (Add.136-140): (a) codex emits another 4-merge tick where ≥2 of the 4 PRs share an author (refutes author-distinctness invariant); (b) codex emits another 4-merge tick where ≥2 PRs share a subsystem (refutes disjoint-subsystem invariant); (c) codex emits another 4-merge tick with **decreasing or non-monotonic** inter-merge spacing (refutes the deceleration kinetic signature); or (d) the next 3 codex multi-merge ticks all stay at cardinality ≤3 with no quadruplet recurrence (demotes #302 to a 1-tick coincidence rather than a recurring shape). A second disjoint-quadruplet in Add.136-140 with all four invariants preserved (4 distinct authors, 4 disjoint subsystems, 4 distinct title-classes, monotonically increasing spacing) elevates the shape from "observed" to "regime".

## Why this matters

If the disjoint-quadruplet shape with monotonically-increasing inter-arrival is a genuine codex batch-flush kinetic signature, then it provides a **per-tick discriminator** between batch-flush events and ordinary cadence-regime emissions: any codex tick with cardinality ≥4 and Δt strictly increasing should be classified as batch-flush, while any tick with cardinality ≤2 or Δt clustered should be classified as cadence-regime. This dyad with synth #299 (single-merge metronome) gives a **two-mode codex emission model**: codex either cycles through distinct authors at 1-per-tick (cadence mode, predictable next-author) OR packs 3-4 distinct authors into a decelerating intra-tick batch (flush mode, unpredictable next-tick). The 4-author batch also operationally explains the carry-pred III revival in the same tick (synth #301) — viyatb-oai's network-proxy fix was a member of the batch-flush, not an isolated revival event, suggesting that **batch-flush ticks may be the primary vector for post-retirement carry-pred revivals**. This cross-links #301 and #302 into a compound prediction: future codex batch-flush ticks (cardinality ≥4) should disproportionately contain post-retirement carry-pred revivals relative to single-merge codex ticks.
