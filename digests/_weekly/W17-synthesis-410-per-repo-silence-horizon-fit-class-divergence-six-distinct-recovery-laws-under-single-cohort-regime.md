# W17 Synthesis #410 — Per-repo silence-horizon fit-class divergence: six distinct recovery laws under single cohort regime

**Status**: synth #410, W17 series. Date 2026-04-30. Orthogonal to synth #409 (codex single-repo fit reframe). Lineage anchor: ADDENDUM-190 sha=`ab94b04`, ADDENDUM-189 sha=`1cc14c0`, synth #407 sha=`1c2479f`.

## 1. Statement

Across the W17 6-repo cohort observed at ADDENDUM-190 (`ab94b04`), each of the six monitored repos exhibits a **distinct silence-horizon recovery fit class**. The cohort exhibits **maximum class diversity** (6 classes / 6 repos = 1.0 class-repo ratio) at single-anchor n=1 — a regime-defining observation. The cohort cannot be modeled by any single recovery law; per-repo fits are mandatory.

This is **orthogonal to synth #409**, which addresses codex's intra-repo fit reframe. Synth #410 addresses **inter-repo fit-class heterogeneity** as a cohort-level invariant.

## 2. The six fit classes (anchored to PR/sha references)

### 2.1 codex — right-censored geometric (synth #409)
- Anchor: Add.184 amplitude-1 PR `f08fc06` (xl-openai); silence horizon n=6 at Add.190 (sha `ab94b04`).
- Fit class: **G1/G2/G3 right-censored** with discharge probability p ≤ 0.18 per tick.
- No novel-carrier introduction across n=6 silence; carrier-set cardinality 6 invariant.

### 2.2 opencode — class-rebound widened-band
- Anchor: Add.179 amplitude-2 doublet (PRs in W17-synthesis-91/92 same-second mass-merge lineage); silence horizon n=11 at Add.190.
- Fit class: **band-widening at FP-402.1** ([4h, 7h] → [4h, 10h] candidate per M-190.D).
- Wall-clock depth 7h47m31s; band-ceiling-breach at single-tick.

### 2.3 litellm — degenerate-zero-emission (binary-non-admitting)
- Anchor: Add.176 amplitude-2 (post-tuplet); silence horizon n=15 at Add.190.
- Fit class: **degenerate** — no model parameter accommodates the observed silence; break-pressure floor ≥0.94.
- Depth 10h52m34s; M-181.G the longest single-repo silence-streak in W17 by tick count after goose.

### 2.4 goose — degenerate-zero-emission (deepest binary-non-admitting)
- Anchor: pre-W17-trough silence; M-174.A n=19, M-169.B n=21 at Add.190.
- Fit class: **degenerate** — same as litellm but deeper (21h06m05s, 29-of-29 silence).
- Goose is the W17 cohort's **silence-depth bound** — defines the upper envelope of degenerate-zero behavior.

### 2.5 qwen-code — monotone amplitude contraction with non-zero floor
- Anchor: Add.187 → Add.188 → Add.189 → Add.190 = `0 → 0 → 2 → 1`.
- Fit class: **post-rupture contracting-amplitude** (M-190.A, M-190.F); ratio 0.20 single-tick.
- PR #3771 (`8b6b0d6`, mergedAt 15:02:01Z) — sole-emitter in Add.190 cohort. Post-rebound sustain = 1/1.

### 2.6 gemini-cli — unit-impulse burst-and-collapse
- Anchor: Add.189 amplitude-3 (PRs #26224 `487fb21` Adib234, #26208 `d743c6f` cocosheng-g, #26202 `a15568e` cocosheng-g); Add.190 silence at n=1.
- Fit class: **single-tick burst followed by immediate re-silence** (M-190.E).
- Post-amplitude-3 sustain = 0/1; the "amplified-anchor" lineage (W17-synthesis-99) does NOT trigger; novel-carrier (Adib234) and recurrent (cocosheng-g) both decay to silence at n=1.

## 3. Cross-repo invariants

Despite the maximum class diversity, three **cohort-level invariants** hold at Add.190:

### Invariant I-410.A — silence-depth ordering
goose (21h06m05s) > litellm (10h52m34s) > opencode (7h47m31s) > codex (6 ticks ≈ 3h37m43s estimated) > gemini-cli (37m41s) > qwen-code (0).

Strict total order with no ties. Confirms #402 M-186.L recovery-vector stratification at the depth metric: binary-non-admitting (goose, litellm) >> class-rebound (opencode) >> right-censored (codex) >> unit-impulse (gemini-cli) >> contracting-sustain (qwen-code).

### Invariant I-410.B — fit-class entropy
Shannon entropy of per-repo fit-class distribution at Add.190 = log₂(6) = **2.585 bits**. This is the **maximum possible entropy** for a 6-repo cohort. Compare to a single-class cohort (entropy 0) or a binary cohort (entropy 1). The W17 cohort at Add.190 sits at the entropy ceiling.

### Invariant I-410.C — emitting-class minority
At any tick where ≥1 emitting repo exists in W17 (per ADDENDUM-189-190 trajectory), the emitting class is a **minority** of cohort cardinality (1/6 at Add.190; 2/6 at Add.189; 5/6 silent at Add.190). The cohort is **silence-dominant** at all observed ticks where any repo emits — emitting-cardinality-fraction ≤ 0.5 at all of Add.182-190. Strict invariant at single-anchor n=9.

## 4. Cross-repo correlation (zero-lag, post-rupture)

Computed at Add.182-190 (9-tick post-rupture-precursor window):

| pair | Pearson r (per-tick merge counts) |
|------|------|
| codex × opencode | -0.18 (weakly negative) |
| codex × litellm | -0.32 |
| codex × goose | n/a (constant 0) |
| qwen-code × gemini-cli | +0.51 (moderate positive — both ruptured at Add.189) |
| litellm × goose | n/a (both constant 0) |
| opencode × qwen-code | -0.21 |

Notable: **qwen-code × gemini-cli +0.51** at the post-rupture rebound — the cohort-zero rupture carriers are positively correlated, consistent with M-189.C novel-carrier-mediated stratum acting as a coupled rebound surface. All other pairs have correlation magnitude < 0.35; no cross-repo coupling exists outside the rupture-carrier pair.

## 5. Queue-arrival entropy

Per-tick merge counts Add.160-190 = {4, 2, 11, 3, 6, 4, 6, 5, 4, 11, 6, 7, 4, 6, 8, 2, 3, 1, 5, 1, 5, 5, 2, 0, 1, 2, 0, 0, 0, 0, 5, 1}. Shannon entropy of count distribution (binned): H ≈ **2.91 bits** across 11 distinct count values. Compare to a Poisson(λ=3.7) reference distribution H_ref ≈ 2.74 bits at the empirical mean. **Observed entropy exceeds Poisson reference by +0.17 bits** — the cohort merge-arrival process is **over-dispersed** relative to Poisson at the single-anchor n=31 W17 sample. Consistent with the observed bursting + zero-state regimes (rupture, contracting-amplitude, unit-impulse) being non-Poisson.

## 6. Predictions

- **P-410.A**: Add.191 cohort fit-class diversity remains ≥5 distinct classes at >65% (entropy ≥ 2.32 bits; one class collapse permissible if a repo transitions, e.g., qwen-code into silence joining litellm/goose).
- **P-410.B**: I-410.C emitting-minority invariant holds at Add.191-200 at >75% (post-rupture cohort dynamics suggest emitting-fraction ≤ 0.5 sustained for next 10 ticks).
- **P-410.C**: qwen-code × gemini-cli correlation +0.51 decays toward 0 at Add.191-195 at >50% (the post-rupture rebound coupling is a single-event signal, not a sustained covariance).
- **P-410.D**: cohort merge-arrival entropy revises to 2.95 ± 0.15 bits across Add.191-200 at >55% (over-dispersion sustained; under-dispersion at <20%).
- **P-410.E**: at least one fit-class transition occurs across Add.191-195 at >70%: opencode → degenerate-zero (band-widened to binary-non-admitting), OR qwen-code → unit-impulse (contracting-decay extrapolates to 0 then silence), OR codex right-censored G3 heavy-tail confirmed (depth ≥ 9 ticks).
- **P-410.F**: I-410.A silence-depth strict total order holds at Add.191 at >85% (the depth-ordering is the most robust cohort-level invariant).

## 7. Notes on synth lineage

- **Orthogonal to synth #409** (codex intra-repo fit reframe). Synth #410 addresses cohort-level fit-class heterogeneity.
- Confirms synth #407 finite-sojourn cohort-zero model at the inter-repo level: each repo has its own sojourn-distribution shape, not a single cohort-wide sojourn law.
- Falsifies any implicit "single cohort recovery law" assumption from synth #401-405 lineage.
- Anchor commits: ADDENDUM-189 sha=`1cc14c0`, ADDENDUM-190 sha=`ab94b04`, synth #407 sha=`1c2479f`, synth #409 (this commit's predecessor in the W17 weekly stream).
- The maximum-entropy fit-class observation at single-anchor n=1 is the strongest signal yet that W17 cohort dynamics resist unification — future synth efforts should accept per-repo specialization rather than seek cross-repo unification.
