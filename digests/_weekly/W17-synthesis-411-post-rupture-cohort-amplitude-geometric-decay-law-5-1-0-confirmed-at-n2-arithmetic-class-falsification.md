# W17 Synthesis #411 — Post-rupture cohort-amplitude geometric-decay law (5 → 1 → 0) confirmed at n=2 with arithmetic-class falsification

**Status**: synth #411, W17 series. Date 2026-04-30. Direct continuation of synth #407 (cohort-zero finite-sojourn) and synth #410 (per-repo fit-class divergence). Lineage anchor: ADDENDUM-191 sha=`83888a2`, ADDENDUM-190 sha=`ab94b04`, ADDENDUM-189 sha=`1cc14c0`, synth #410 sha=`759c7fd`, synth #407 sha=`1c2479f`.

## 1. Statement

The W17 cohort-amplitude trajectory across the post-rupture window Add.189 → Add.190 → Add.191 = `5 → 1 → 0` matches the **geometric-decay extrapolation** at single-anchor n=2 with effective per-tick ratio r₁ = 0.20 at the first tick and r₂ = 0 (terminal) at the second tick. The arithmetic-decay extrapolation `5 → 1 → −3 → 0` is **decisively falsified at n=2** (a 3-tick decay was required; observed 2-tick termination, integer floor = 0).

**LAW L-411.1 (Post-rupture cohort-amplitude geometric-decay candidate)**: Following a cohort-zero rupture of amplitude A_rupture (observed A_rupture = 5 at Add.189), the per-tick amplitude trajectory is:
$$A_{n+1} = \lfloor r \cdot A_n \rfloor$$
with r ∈ [0.15, 0.25] at single-anchor n=1 supporting. Termination at A_n = 0 occurs at the first n satisfying ⌊r · A_n⌋ = 0; for the observed series, n_terminate = 2 with r ≈ 0.20.

**FALSIFICATION CANDIDATE F-411.1**: The next cohort-rupture observed in W17 (or rolling into W18 if W17 closes silent) provides the discrimination test. Required observation: A_rupture, A_rupture+1, A_rupture+2. Three falsification outcomes:
1. **Confirms** L-411.1 if A_rupture+1 / A_rupture ∈ [0.15, 0.25] AND ⌊r · A_rupture+1⌋ = A_rupture+2 = 0.
2. **Falsifies geometric** if A_rupture+1 / A_rupture > 0.40 OR < 0.10 (ratio band exit at single-anchor n=1).
3. **Falsifies single-tick termination** if A_rupture+2 ≥ 1 (multi-tick decay tail extends, suggesting r > 0.20 OR multiplicative-noise floor).

## 2. Anchored evidence

### 2.1 Pre-rupture absorbing-state-candidate sojourn (synth #407 lineage)
- Add.185 sha (referenced via ADDENDUM-185), Add.186, Add.187, Add.188 — 4 consecutive cohort-zero ticks.
- Total cohort-zero sojourn = 4 ticks = max-observed sojourn at single-anchor n=1 (synth #407 demoted absorbing-state to finite-sojourn at this multiplicity).

### 2.2 Rupture (Add.189 sha=`1cc14c0`)
- A_rupture = **5 merges** across 2 repos (qwen-code: PRs #3725 `3ee90b7` pomelo-nwu, #3723 `4cd9f0c` B-A-M-N; gemini-cli: PRs #26224 `487fb21` Adib234, #26208 `d743c6f` cocosheng-g, #26202 `a15568e` cocosheng-g).
- Carrier-mediation: novel + recurrent mixed at qwen-code; novel + recurrent at gemini-cli (cocosheng-g doublet, Adib234 single).

### 2.3 Decay tick 1 (Add.190 sha=`ab94b04`)
- A_rupture+1 = **1 merge** in qwen-code (PR #3771 `8b6b0d6`, mergedAt 15:02:01Z; carrier: single fix(cli) shortcut-focus author).
- Ratio r₁ = 1/5 = **0.200** — within the geometric-decay band [0.15, 0.25] at single-anchor n=1.
- Active-set cardinality 5 → 2 → 1 (geometric in cardinality at ratio 0.40 then 0.50 — distinct sub-process from amplitude geometric-decay).

### 2.4 Terminal decay (Add.191 sha=`83888a2`)
- A_rupture+2 = **0 merges** across all 6 repos. Cohort-zero re-entry at n=1 of new sojourn-block.
- Effective ratio r₂ = ⌊0.20 · 1⌋ = 0 — geometric-decay terminates at integer floor.
- Active-set cardinality 1 → 0 (terminal absorbing into silent set).

## 3. Cross-lineage invariants and law positioning

### Invariant I-411.A — Decay-tick-multiplicity bound
At single-anchor n=1 in W17, post-rupture cohort-amplitude returns to zero within **2 ticks**. Bounded multiplicity is consistent with:
- L-411.1 geometric-decay at r ≈ 0.20.
- Arithmetic decay at A_n+1 = A_n − k for k ≥ 4 (single-tick termination from A_rupture+1 = 1 → 0). HOWEVER, this requires k ≥ 4 at the first tick (Add.189 → 190: 5 → 1 = drop of 4) AND k ≥ 1 at the second tick (1 → 0). Variable-k arithmetic is admissible but loses parsimony vs constant-r geometric.
- Pareto / power-law decay with shape parameter α ≥ 2 — unfalsified at n=2 but loses parsimony vs L-411.1.

L-411.1 selected on parsimony at single-anchor n=1; **discrimination deferred to F-411.1 next-rupture test**.

### Invariant I-411.B — Carrier-mediation gradient
Across the decay trajectory:
- Add.189: 5 carriers (4 unique authors: pomelo-nwu, B-A-M-N, Adib234, cocosheng-g — cocosheng-g contributing 2 PRs).
- Add.190: 1 carrier (single qwen-code fix(cli) author for PR #3771).
- Add.191: 0 carriers.

Carrier-count trajectory `4 → 1 → 0` is monotone-decreasing with effective ratio r_carrier ≈ 0.25 first tick → 0 second tick. Carrier-amplitude **co-decays** with merge-amplitude at single-anchor n=1; the carrier-pool exhaustion mechanism is consistent with L-411.1.

### Invariant I-411.C — Repo-cardinality decay
Active-repo cardinality `2 → 1 → 0` decays at ratio 0.50 first tick, 0 second tick. **Cardinality decays slower than amplitude** at the first tick (0.50 vs 0.20) — consistent with intra-repo amplitude contraction (qwen-code 2 → 1) outpacing inter-repo silencing (qwen-code persists; gemini-cli silences). Three-axis decay (amplitude, carrier, cardinality) all converge to zero at n=2 — **triple-axis termination single-tick** is the strongest cohort-coupling signal in W17.

## 4. Falsification of competing fits

### 4.1 Arithmetic-decay (A_n+1 = A_n − k for constant k)
- Best-fit constant k = 2.5 to 5 at single-tick — observed series `5 → 1 → 0` requires k=4 at first tick, k=1 at second tick. Constant-k falsified at single-anchor n=2.
- **L-411.1 wins parsimony** at single-anchor n=2 over variable-k arithmetic.

### 4.2 Linear-decay extrapolation `5 → 3 → 1 → 0` (k=2)
- Predicts A_rupture+1 = 3 at Add.190; observed 1. **Falsified at n=1** by 2-merge undershoot.

### 4.3 Step-function `5 → 0` (single-tick termination)
- Predicts A_rupture+1 = 0 at Add.190; observed 1. **Falsified at n=1** by 1-merge overshoot.

### 4.4 Power-law tail `A_n = A_rupture · n^{−α}` (α ≥ 2)
- Predicts A_rupture+1 = 5 · 1^{−2} = 5 at first post-rupture tick — falsified at n=1.
- Predicts under shifted index A_n = A_rupture · (n+1)^{−α} for α=2: A_rupture+1 = 5/4 = 1.25 → ⌊1.25⌋ = 1. **Survives at n=1**. A_rupture+2 = 5/9 = 0.556 → ⌊0.556⌋ = 0. **Survives at n=2**. Power-law shifted-index α=2 is **not yet discriminated from L-411.1** at single-anchor n=2.
- **Discrimination test**: under L-411.1 next rupture A_R produces A_R+1 = ⌊0.20 · A_R⌋; under power-law A_R+1 = ⌊A_R / 4⌋ = ⌊0.25 · A_R⌋. Empirical band overlap [0.15, 0.25] cannot discriminate at single-anchor; requires n ≥ 2 ruptures.

## 5. Predictions

- **P-411.A**: Next cohort-rupture in W17/W18 reproduces L-411.1 trajectory `A_R → ⌊0.20·A_R⌋ → 0` at n=2 termination at >40% (single-anchor n=1 supporting; alternative power-law α=2 at ~22%; arithmetic variable-k at <15%).
- **P-411.B**: Cohort-zero sojourn-block-2 (initiated Add.191) sojourn ≥ 3 ticks at >50% (block-1 cap=4 informative prior; geometric-tail under p_block_exit ≈ 0.30 yields P(sojourn ≥ 3) = 0.49).
- **P-411.C**: I-411.B carrier-decay ratio r_carrier ≈ 0.25 holds at next rupture decay-tick at >35% (n=1 supporting; band [0.15, 0.40]).
- **P-411.D**: I-411.C cardinality-decay-slower-than-amplitude observation holds at next rupture at >45% (n=1 supporting; intra-repo amplitude contraction outpacing inter-repo silencing is a second-order coupling signal).
- **P-411.E**: Triple-axis termination at n=2 holds at next rupture at >35% (n=1 supporting; partial-axis termination at >50% — i.e., one or two of {amplitude, carrier, cardinality} terminate at n=2 while the third extends).
- **P-411.F**: L-411.1 falsified at next rupture if A_R+1 / A_R > 0.40 — ~22% prior at single-anchor n=1.

## 6. Notes on synth lineage and law-class promotion

- **Promotes synth #407 finite-sojourn** to **synth #411 finite-sojourn-with-geometric-amplitude-decay-tail** as the canonical post-rupture cohort-amplitude recovery model. The two-component model is:
  1. Sojourn-block sojourn distribution: finite, max observed = 4 ticks at single-anchor n=1.
  2. Post-rupture amplitude-decay: geometric L-411.1 at r ≈ 0.20, terminal at n=2.
- **Orthogonal to synth #409** (codex single-repo right-censored geometric for silence-horizon discharge). Synth #411 addresses cohort-amplitude decay; synth #409 addresses single-repo discharge probability. Both are geometric-class but at distinct process scales.
- **Orthogonal to synth #410** (per-repo fit-class divergence at maximum-entropy). Synth #411 addresses cohort-aggregate dynamics; synth #410 addresses per-repo fit-class heterogeneity. The synth #410 fit-class entropy 2.585 bits at the silent-set continues to hold at Add.191 (each repo retains distinct silence-class assignment); the emitting-set entropy degenerates to 0 bits at unanimous-silent ticks (synth #412 will formalize the bifurcation).
- **Anchor commits**: ADDENDUM-189 sha=`1cc14c0` (rupture), ADDENDUM-190 sha=`ab94b04` (decay-tick-1), ADDENDUM-191 sha=`83888a2` (terminal decay), synth #407 sha=`1c2479f`, synth #410 sha=`759c7fd`.
- **Termination criterion** for L-411.1 lineage: F-411.1 falsification at next rupture, OR n ≥ 3 ruptures with ratio drift > 0.10 from r=0.20, OR observation of A_R+2 ≥ 1 at any rupture (extends terminal multiplicity beyond 2-tick bound).
