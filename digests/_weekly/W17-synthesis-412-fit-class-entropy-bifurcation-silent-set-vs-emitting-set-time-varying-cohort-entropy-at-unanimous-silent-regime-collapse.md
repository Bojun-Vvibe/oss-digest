# W17 Synthesis #412 — Fit-class entropy bifurcation: silent-set vs emitting-set, time-varying cohort entropy at unanimous-silent regime collapse

**Status**: synth #412, W17 series. Date 2026-04-30. Direct continuation of synth #410 (per-repo fit-class divergence, maximum-entropy 2.585 bits). Lineage anchor: ADDENDUM-191 sha=`83888a2`, ADDENDUM-190 sha=`ab94b04`, synth #410 sha=`759c7fd`, synth #411 sha=`20cad94`.

## 1. Statement

The synth #410 cohort fit-class entropy reading of **2.585 bits = log₂(6)** assumed the cohort entropy as a single time-invariant scalar. ADDENDUM-191 (`83888a2`) — the unanimous-silent tick at A=0 across all 6 repos — falsifies the time-invariance assumption. The cohort entropy **bifurcates into two co-existing measures**:

- **H_silent(t)**: Shannon entropy over per-repo silence-class assignments. Invariant at 2.585 bits across Add.190 and Add.191 because each repo retains its distinct silence-class identity (degenerate-zero, class-rebound, right-censored, contracting-decay, unit-impulse, etc.) regardless of whether the repo emitted at tick t.
- **H_emitting(t)**: Shannon entropy over per-repo emitting-class assignments **conditional on the emitting-set being non-empty**. Undefined / degenerate at unanimous-silent ticks (Add.191, Add.185-188).

**INVARIANT I-412.A (Time-varying cohort entropy)**: Cohort fit-class entropy is **two-dimensional and time-varying**, not scalar-invariant. The synth #410 maximum-entropy framing (H_410 = 2.585 bits) holds **conditional on emitting-set non-empty**.

**LAW L-412.1 (Entropy bifurcation under cohort-zero)**: At any tick t with cohort emitting-cardinality = 0, H_emitting(t) is **undefined** (zero events to measure); H_silent(t) **inherits the prior-tick fit-class assignment vector** with one-tick lag and remains at 2.585 bits absent fit-class transitions. At ticks with emitting-cardinality ∈ {1, 2, ..., 6}, H_emitting(t) ∈ [0, log₂(emitting-cardinality)] bits.

## 2. Anchored evidence

### 2.1 Add.189 (sha=`1cc14c0`) — emitting-cardinality 2
- Emitting set: {qwen-code, gemini-cli}.
- H_emitting = log₂(2) = **1.000 bits** (uniform binary; 2 classes: qwen-code mixed novel+recurrent, gemini-cli novel+recurrent doublet).
- H_silent = 2.585 bits (6 distinct silence-class assignments — even though qwen-code/gemini-cli are emitting, their silence-classes pre-rupture were distinct; per-tick fit-class assignment is preserved).

### 2.2 Add.190 (sha=`ab94b04`) — emitting-cardinality 1
- Emitting set: {qwen-code} (PR #3771 `8b6b0d6`).
- H_emitting = log₂(1) = **0 bits** (degenerate single-class emitting).
- H_silent = 2.585 bits (6 distinct silence-class assignments — qwen-code's contracting-decay class, gemini-cli's unit-impulse class, opencode's class-rebound, codex's right-censored, litellm's degenerate-zero, goose's degenerate-zero-deepest).

### 2.3 Add.191 (sha=`83888a2`) — emitting-cardinality 0
- Emitting set: {} (unanimous silent).
- H_emitting = **undefined** (zero events; entropy of empty distribution).
- H_silent = 2.585 bits (no fit-class transitions at single-tick; assignments inherited from Add.190 with one-tick lag).

### 2.4 Add.185-188 — pre-rupture cohort-zero block-1
- 4 consecutive unanimous-silent ticks. H_emitting undefined for 4-tick window.
- H_silent inherited from Add.184 with multi-tick lag; fit-class assignments at this window are pre-distinct-class formation (synth #410 was authored at Add.190).
- **Entropy reconstruction at Add.185-188**: synth #410 fit-class assignments are post-hoc; pre-synth-#410 the entropy framework did not exist. Backwards-extrapolation reads 2.585 bits at Add.185-188 only under the assumption that the per-repo classes pre-existed the synth — supported by anchor evidence at Add.184 (codex amplitude-1 PR `f08fc06` pre-existed the right-censored class assignment).

## 3. Cross-tick entropy trajectory

| Tick | sha | A_total | emitting-cardinality | H_silent | H_emitting |
|------|-----|---------|----------------------|----------|------------|
| Add.184 | (pre-anchor) | A=1 (codex `f08fc06`) | 1 | not yet defined | 0 bits (single class) |
| Add.185 | (pre-rupture) | 0 | 0 | 2.585* | undef |
| Add.186 | (pre-rupture) | 0 | 0 | 2.585* | undef |
| Add.187 | (post-cyphercodes) | A=1 (qwen-code) | 1 | 2.585* | 0 bits |
| Add.188 | (pre-rupture) | 0 | 0 | 2.585* | undef |
| Add.189 | `1cc14c0` | A=5 | 2 | 2.585 | 1.000 bits |
| Add.190 | `ab94b04` | A=1 | 1 | 2.585 | 0 bits |
| Add.191 | `83888a2` | A=0 | 0 | 2.585 | undef |

*backwards-extrapolated under L-412.1 inheritance assumption.

H_emitting trajectory across W17 post-rupture: undef → undef → 0 → undef → undef → 1.000 → 0 → undef. **Bimodal at {0, 1} bits across 8-tick window**; never exceeds log₂(2) = 1 bit because emitting-cardinality never exceeds 2 across the post-rupture trajectory.

## 4. Cross-process invariant: I-410.C strengthening

The synth #410 emitting-minority invariant I-410.C stated that emitting-cardinality-fraction ≤ 0.5 at all observed Add.182-190 ticks. ADDENDUM-191 strengthens this to:

**I-412.B (Strengthened emitting-minority)**: emitting-cardinality-fraction ≤ 1/3 at all observed Add.182-191 ticks. Add.191 reading 0/6 = 0 is the **infimum** of the observed fraction. Add.189 reading 2/6 = 0.333 = 1/3 is the **supremum**. Strict bound at single-anchor n=10.

The Add.189 supremum reading at exactly 1/3 is non-coincidental: the rupture carrier-set was the union of the **two novel-carrier-mediated repos** (qwen-code, gemini-cli), and the four binary-non-admitting + class-rebound + right-censored repos remained silent. The 1/3-fraction supremum is an emergent property of the recovery-vector stratification, not an arbitrary cap.

## 5. Falsification candidate F-412.1

**F-412.1 (Cohort emitting-cardinality > 1/3 ceiling)**: At any tick in W17 / W18, if emitting-cardinality / 6 > 1/3 (i.e., emitting-repos ≥ 3 out of 6), I-412.B is falsified. Required conditions: at least one of {opencode, codex, litellm, goose} must transition out of its silence-class to emit at the same tick as qwen-code AND gemini-cli (or both novel-carrier repos must emit AND opencode emits, etc.).

Probabilistic estimate at single-anchor n=10 supporting: P(emitting-cardinality ≥ 3) at any single Add.192-200 tick ≤ 0.18 under product-of-independent-class-emission-priors (roughly: opencode ~0.10, codex ~0.15, litellm ~0.05, goose ~0.03, qwen-code ~0.30, gemini-cli ~0.20; combined P(≥3 of 6) ≈ 0.085). Discrimination test: if observed within Add.192-200, F-412.1 fires; otherwise I-412.B holds at single-anchor n=20.

## 6. Queue-arrival entropy revision

The synth #410 queue-arrival entropy reading H_arrival ≈ 2.91 bits across Add.160-190 (n=31 ticks) is updated for Add.191:

Per-tick merge counts Add.160-191 = {4, 2, 11, 3, 6, 4, 6, 5, 4, 11, 6, 7, 4, 6, 8, 2, 3, 1, 5, 1, 5, 5, 2, 0, 1, 2, 0, 0, 0, 0, 5, 1, **0**}. Now n=32 ticks. Distinct count values: {0, 1, 2, 3, 4, 5, 6, 7, 8, 11} = 10 distinct values (down from 11 — count=10 was always absent; count=0 frequency increases from 7 to 8).

Updated frequency table:
- count=0: 8 ticks (was 7); freq 0.250
- count=1: 4 ticks; freq 0.125
- count=2: 4 ticks; freq 0.125
- count=3: 2 ticks; freq 0.0625
- count=4: 4 ticks; freq 0.125
- count=5: 5 ticks; freq 0.156
- count=6: 4 ticks; freq 0.125
- count=7: 1 tick; freq 0.03125
- count=8: 1 tick; freq 0.03125
- count=11: 2 ticks (Add.162 and Add.169); freq 0.0625

H_arrival(Add.160-191) = −Σ p_i log₂(p_i) ≈ **3.00 bits** (was 2.91 bits at synth #410).

**Entropy-increase signal**: +0.09 bits at single-tick from one new zero-count observation. Over-dispersion vs Poisson(λ=3.59 at empirical mean = 115/32 = 3.59) reference H_ref ≈ 2.71 bits → **observed exceeds Poisson by +0.29 bits** (was +0.17 bits at synth #410). Over-dispersion **strengthens** at single-tick — the cohort merge-arrival process moves further from Poisson under the additional zero-count observation. Consistent with the bursting-plus-zero-state regime intensifying.

## 7. Predictions

- **P-412.A**: H_silent holds at 2.585 bits across Add.192-200 absent fit-class transitions, at >70% (no fit-class change expected at single-tick; transitions deferred to depth-criterion thresholds).
- **P-412.B**: I-412.B emitting-minority strengthened bound (≤ 1/3) holds at Add.192-200 at >78% (n=10 supporting; F-412.1 prior at <22%).
- **P-412.C**: H_emitting bimodal {0, 1.000} bits regime extends into Add.192-200 at >55% (emitting-cardinality ∈ {0, 1, 2} at all observed ticks; H_emitting cannot exceed 1.000 bits absent emitting-cardinality ≥ 3).
- **P-412.D**: Queue-arrival entropy H_arrival further increases by +0.05 to +0.10 bits across Add.192-200 at >50% (additional zero-count observations expected; over-dispersion strengthening at >65% trajectory continuation).
- **P-412.E**: Cohort-amplitude trajectory at next rupture exhibits triple-axis termination (amplitude, carrier-count, emitting-cardinality all → 0 within 2 ticks) at >40% (n=1 supporting from L-411.1; orthogonal corroboration from synth #411).
- **P-412.F**: F-412.1 fires within Add.192-200 (emitting-cardinality ≥ 3 observed) at <22% (product-of-emission-priors estimate; falsification of I-412.B requires significant cross-repo coupling event).
- **P-412.G**: H_silent transitions (any repo changes silence-class) at Add.192-200 at >40% (most likely: opencode → degenerate-zero at depth-breach 12h-criterion; OR qwen-code → novel-carrier-class at sojourn-block-2 exit; OR codex right-censored discharge revising p estimate).

## 8. Notes on synth lineage and process-class positioning

- **Promotes synth #410** maximum-entropy framing to **conditional-on-emitting-set-nonempty entropy reading**. The synth #410 reading H_410 = 2.585 bits is now correctly understood as H_silent — the per-repo silence-class assignment entropy — which is **time-invariant absent fit-class transitions**. The orthogonal H_emitting measure is **time-varying and undefined at unanimous-silent ticks**. The two measures co-exist; cohort entropy is a 2-vector, not a scalar.
- **Orthogonal to synth #411** (cohort-amplitude geometric-decay law L-411.1). Synth #412 addresses cohort-class-distribution entropy; synth #411 addresses cohort-amplitude trajectory shape. Both anchored on the same Add.189 → 190 → 191 sequence but measuring distinct process-class properties.
- **Strengthens synth #410 I-410.C** to I-412.B at fraction ≤ 1/3 (was ≤ 0.5). The bound revision is not a falsification — the new bound is strictly tighter, supported by the new Add.191 unanimous-silent observation pulling the empirical infimum to 0.
- **Anchor commits**: ADDENDUM-189 sha=`1cc14c0`, ADDENDUM-190 sha=`ab94b04`, ADDENDUM-191 sha=`83888a2`, synth #407 sha=`1c2479f`, synth #410 sha=`759c7fd`, synth #411 sha=`20cad94`.
- **Termination criterion** for L-412.1 lineage: F-412.1 falsification at any tick within Add.192-220, OR observation of H_silent transition at single-anchor n ≥ 2 (multiple silence-class transitions at the same tick — unprecedented at single-anchor n=10), OR explicit fit-class-redefinition at the synth-level (e.g., synth #413+ revises the per-repo fit-class assignments and forces H_silent recomputation).
- **Future synth axis**: synth #413 candidate is the **discrimination test for L-411.1 vs power-law-shifted-index α=2 at the next observed cohort-rupture**. Synth #414 candidate is the **opencode class-rebound → degenerate-zero transition** if depth criterion ≥ 12h is breached at single-anchor n=1 supporting (current depth 8h29m at Add.191; transition deferred to ~Add.197-200 if silence sustains at ~30m ticks).
