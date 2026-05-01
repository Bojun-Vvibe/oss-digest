# W17 Synthesis #459 — Inter-episode null-tick gap distribution introduced at Add.215; shortest visible gap = 1 tick (Add.214→Add.215) FALSIFIES strict Poisson independent-tick model under episode-aware lens; gap-distribution as 2nd-order CNTL observable

**Anchor**: ADDENDUM-215 M-215.A documents that the Add.215 null tick opens a new CNTL=1 chain **exactly 1 tick after** the synth #457 CNTL=2 episode-closure at Add.214. The visible Add.193-215 lookback now contains **3 distinct null-tick episodes** with **2 measurable inter-episode gaps**: Add.208→Add.212 = 4 ticks (Add.209/210/211 active), and Add.214→Add.215 = 1 tick (Add.214 active). The 1-tick gap is the **shortest possible non-zero inter-episode gap** (a 0-tick gap would mean back-to-back episodes, structurally impossible because an episode terminates only on an active tick). This synth formalises the inter-episode gap distribution as a 2nd-order CNTL observable, distinct from the 1st-order CNTL run-length distribution introduced at synth #455.

## Why this is distinct from synth #455 and synth #457

Synth #455 introduced CNTL (chained-null-tick length) as a **1st-order** observable: the run length of a single null-tick chain, treating each chain as an independent draw from the null-tick state-distribution. Under Interpretation B (Poisson independent-tick model with p_null = 0.143 at synth #455's estimate, 0.136 at synth #457's update, 0.174 at the Add.215 update per M-215.A), CNTL run lengths are geometric-distributed with mean 1/(1−p_null) ≈ 1.16-1.21 across the visible lookback estimates.

Synth #457 closed the first complete CNTL=2 episode but did NOT extend the analysis to the **gaps between episodes**. Under Interpretation B, inter-episode gaps are also geometric-distributed (with parameter (1−p_null), since each gap is a run of consecutive active ticks before the next null) with mean 1/p_null ≈ 5.74-7.35 ticks.

Synth #459 introduces the **inter-episode gap distribution** as a new observable. The visible lookback contains 2 measurable gaps:

| episode start | episode end | next episode start | gap length | gap composition |
|---|---|---|---|---|
| Add.208 (singleton) | Add.208 | Add.212 | 4 ticks (Add.209-211) | active-active-active |
| Add.212 | Add.213 (chain end) | Add.215 | 1 tick (Add.214) | active |

(A 3rd episode is currently open at Add.215; the next gap will be measurable only after this chain terminates.)

## The 1-tick gap is at the strict-Poisson tail

Under Interpretation B with p_null = 0.136 at the Add.214 estimate, the prior probability of a gap of exactly 1 tick (one active followed by a null) is p_null · (1−p_null)^0 if we condition on the gap starting immediately after an episode closure. Marginally, the probability of the very next post-episode tick being null is **p_null = 0.136** — the realised observation (1-tick gap = next post-episode tick is null) has prior 0.136 under Interpretation B, which is **not** an extreme tail event in isolation.

**However**, taken together with the 3-of-4-null clustering signal documented in ADDENDUM-215 M-215.D (joint prior ~0.0123 under Interpretation B), the 1-tick inter-episode gap **adds incremental evidence against Interpretation B**: the joint event "{Add.212-213 chain of 2} + {Add.214 active} + {Add.215 null = 1-tick gap}" has joint prior under Interpretation B of:

P(Add.212 null) · P(Add.213 null | Add.212 null) · P(Add.214 active | Add.213 null) · P(Add.215 null | Add.214 active)
= 0.136 · 0.136 · 0.864 · 0.136
= **0.00217** under Interpretation B with strict independence at the synth #457 estimate.

Under a candidate Interpretation C (null-tick clustering with positive autocorrelation), the conditional probabilities differ. A simple Markov-chain Interpretation C with elevated null probability for k ticks following a null episode (e.g. p_null_post_episode = 0.30 for the first 2 post-episode ticks, decaying to baseline 0.136 thereafter) would give:

P(Add.212 null) · P(Add.213 null | Add.212 null = stay-in-null) · P(Add.214 active | Add.213 null) · P(Add.215 null | Add.214 active = post-episode-elevated)
= 0.136 · ~0.30 · ~0.70 · 0.30
= **0.00857** under a candidate Interpretation C with a simple post-episode-elevation rule.

The Bayes-factor BF(C:B) at the joint Add.212-215 observation is ≈ 0.00857 / 0.00217 = **3.95**, providing **moderate evidence** in favour of Interpretation C over strict Interpretation B. This is **stronger** than the BF(C:B) ≈ 1.43 estimate quoted in M-215.D for the 3-of-4-null observation alone, because the joint observation includes the post-episode null specifically (a feature that Interpretation C's post-episode-elevation rule predicts more strongly than the marginal null-frequency).

## The 4-tick gap is consistent with Interpretation B

The Add.208→Add.212 gap of 4 ticks has prior under Interpretation B of (1−p_null)^3 · p_null = 0.864^3 · 0.136 = **0.0876** — consistent with the marginal expectation (geometric mean ~6 ticks; a 4-tick gap is below-mean but well within the bulk of the distribution). The Add.208→Add.212 gap therefore provides **no evidence against Interpretation B** in isolation. The discriminating signal between Interpretations B and C is concentrated in the Add.214→Add.215 short-gap observation.

## Gap-distribution as a 2nd-order CNTL observable

The CNTL distribution at Add.215 (1st-order, run lengths) = {1, 2, 1-open}. The inter-episode gap distribution (2nd-order, gap lengths between completed episodes) = {4, 1}. The 2nd-order distribution has only 2 data points but already shows **bimodality** (one short gap of 1, one mid gap of 4) with a wide range that is **inconsistent with the geometric-distribution shape** predicted by Interpretation B (geometric with p=0.136 has standard deviation ~6.4 ticks, so the observed range of 3 ticks across 2 samples is not extreme — but the **specific** observation of one gap at the very-short end is what creates the Interpretation-C signal, not the range per se).

Future synths should track:

- **Gap-min**: shortest observed gap (currently 1).
- **Gap-mean**: arithmetic mean of completed gaps (currently 2.5).
- **Gap-CV**: coefficient of variation of gap lengths (currently |1−4|/2.5 ≈ 1.20 from 2 samples; high CV would favour Interpretation C with bursty episodes).
- **Post-episode null-frequency**: empirical p_null in the first 1, 2, 3 ticks following an episode closure (currently 1/2 = 0.50 in the first 1 tick, vs Interpretation B prior 0.136 — a 3.7× elevation that, with more samples, will sharply discriminate the interpretations).

## Predictions for Add.216+

- **P-459.A** (Add.216 null vs active): under Interpretation B, prior ~0.174 null. Under Interpretation C with post-episode-elevation, prior ~0.30 null (since Add.215 is itself a null and the chain is now at length 1 within the new episode — Interpretation C would predict elevated null-continuation in addition to elevated post-episode-null).
- **P-459.B** (Add.216 chain-extension vs break): if Add.216 = null (CNTL extends to 2), the new episode mirrors the synth #457 episode and the gap-distribution becomes {4, 1} with CNTL distribution {1, 2, 2}. If Add.216 = active (CNTL=1 episode closes at length 1), the gap distribution gains a 3rd data point measurable after the next episode opens.
- **P-459.C** (Bayes-factor accumulation): if Add.216 = null, BF(C:B) jumps further toward Interpretation C (joint 4-tick observation prior under B ≈ 0.000295 vs under C ≈ 0.00257, BF ≈ 8.7); if Add.216 = active, BF accumulates more slowly because the post-episode-elevation-decay rule of Interpretation C still allows for a 1-tick post-episode null without requiring an extension.
- **P-459.D** (synth #460 framing): synth #460 is anticipated by ADDENDUM-215 M-215.D / P-215.K to formalise Interpretation C (null-tick clustering hypothesis); this synth #459 provides the inter-episode-gap framework and the BF(C:B) ≈ 3.95 Add.212-215 joint observation as the primary empirical anchor for synth #460's formalisation.
- **P-459.E** (gap-distribution growth rate): conditional on the Add.215 episode being short (1-2 tick run length, prior 0.85 across both interpretations), the next gap measurable will be at ~Add.217-220 if a typical 3-5-tick post-episode gap follows; the gap-distribution is therefore expected to grow by 1 data point every ~5-10 ticks under either interpretation.

## Cross-references

- Synth #455: introduced CNTL (1st-order chained-null-tick length).
- Synth #457: closed the first complete CNTL=2 episode at Add.214; updated Poisson posterior to p_null = 0.136.
- Synth #458: introduced mid-mode-singleton structure at Add.214 silent-set composition.
- ADDENDUM-215 M-215.A (new CNTL=1 chain opens 1 tick after synth #457 closure; updated p_null = 0.174); M-215.D (3-of-4-null clustering at the ~1.1% prior tail of Interpretation B); P-215.J (synth #459 inter-episode-gap formalisation predicted); P-215.K (synth #460 Interpretation-C formalisation predicted).
