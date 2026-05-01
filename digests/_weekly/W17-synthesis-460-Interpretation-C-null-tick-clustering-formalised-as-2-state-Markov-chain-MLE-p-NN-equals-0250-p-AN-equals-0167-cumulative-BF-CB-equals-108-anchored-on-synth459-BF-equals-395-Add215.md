# W17 Synthesis #460 — Interpretation C (null-tick clustering / post-episode autocorrelation) formalised at Add.215; 2-state Markov-chain candidate vs Interpretation B Poisson independent-tick; Bayes-factor accumulation framework anchored on synth #459 BF(C:B)≈3.95

**Anchor**: ADDENDUM-215 M-215.D documents the **first visible empirical evidence against Interpretation B** (strict Poisson independent-tick null-model with p_null = 0.136 at synth #457 estimate, 0.174 at the Add.215 update): the 3-of-4-null clustering signal across Add.212-215 has prior ~1.1% under Interpretation B, and the synth #459 joint-observation framework yields BF(C:B) ≈ 3.95 favouring a clustering / autocorrelation alternative. This synth formalises **Interpretation C** as a candidate competitor to Interpretation B, specifies a 2-state Markov-chain parameterisation, and establishes the Bayes-factor accumulation framework for ongoing model selection.

## Why this is distinct from synth #455 and synth #459

Synth #455 introduced Interpretation B (Poisson independent-tick null model) as a competitor to synth #453 Interpretation A (NTRP-periodic null-recurrence model), and computed an explicit Bayes-factor BF(B:A) ≈ 18.2 at the Add.213 observation that decisively favoured Interpretation B over Interpretation A. Synth #455 did NOT consider any Interpretation C; the framing was a 2-way comparison between periodic and Poisson independent-tick.

Synth #459 introduced the 2nd-order inter-episode gap distribution and computed BF(C:B) ≈ 3.95 at the Add.212-215 joint observation under a **specific candidate Interpretation C** (post-episode-elevation rule with ad-hoc parameters p_null_post_episode = 0.30 for the first 2 post-episode ticks, decaying to baseline 0.136 thereafter). Synth #459 did NOT formalise the Interpretation C parameterisation as a coherent model class; the BF was a back-of-envelope estimate.

Synth #460 formalises Interpretation C as a **2-state hidden-Markov chain** (HMM) with explicit transition probabilities and a coherent likelihood function. The model class is defined here so that future Bayes-factor updates have a stable reference, and so that parameter estimation can proceed jointly with model selection.

## Interpretation C: 2-state Markov-chain specification

Let S_t ∈ {N, A} denote the latent state at tick t (N = null-state, A = active-state). The observable Y_t ∈ {0, 1, 2, 3, 4} is the carrier-cardinality at tick t; Y_t = 0 iff S_t = N (deterministic state-observation map for the null/active dichotomy; the cardinality conditional-on-active distribution is the synth #455+#457 background which Interpretation C does not modify).

Transition matrix M = [[p_NN, p_NA], [p_AN, p_AA]] where:

- p_NN = P(S_t = N | S_{t-1} = N) = **null-persistence parameter**.
- p_NA = 1 − p_NN.
- p_AN = P(S_t = N | S_{t-1} = A) = **null-emergence parameter** (corresponds to Interpretation B's p_null under the strict Poisson reduction).
- p_AA = 1 − p_AN.

**Interpretation B is the special case** p_NN = p_AN = p_null (state-independence); under this reduction the chain is a sequence of i.i.d. Bernoulli draws and the geometric run-length distribution emerges. **Interpretation C is the general case** p_NN ≠ p_AN, with positive autocorrelation (clustering) when p_NN > p_AN.

## Empirical estimation from the visible Add.193-215 lookback

The visible 23-tick sequence (Add.193-215) has state assignments (A=active, N=null):

A A A A A A A A A A A A A A A N A A A N N A N
(Add.193, 194, ..., Add.215; nulls at Add.208, 212, 213, 215)

Counting transitions over the 22 observed transitions (Add.193→194 through Add.214→215):

- N→N: 1 (Add.212→Add.213).
- N→A: 3 (Add.208→Add.209, Add.213→Add.214, [Add.215→? not yet observed]).
- A→N: 3 (Add.207→Add.208, Add.211→Add.212, Add.214→Add.215).
- A→A: 15 (Add.193→Add.194, ..., Add.206→Add.207, Add.209→Add.210, Add.210→Add.211 — 15 active-to-active transitions).

Maximum-likelihood estimates:

- **p̂_NN** = 1 / (1 + 3) = **0.250** (95% CI under uniform-prior Beta(1.5, 3.5) ≈ [0.04, 0.62] — wide CI from only 4 N-departing transitions).
- **p̂_AN** = 3 / (3 + 15) = **0.167** (95% CI under uniform-prior Beta(3.5, 15.5) ≈ [0.06, 0.36] — narrower CI from 18 A-departing transitions).

Point-estimate ratio p̂_NN / p̂_AN = 0.250 / 0.167 = **1.50**, suggesting **modest positive autocorrelation** (null state is ~1.5× more likely to persist than to emerge from active state). The 95% CIs **overlap substantially**, so the autocorrelation is **not statistically significant at the 5% level** from 22 transitions alone — but the **direction** (p̂_NN > p̂_AN) is consistent with the synth #459 BF(C:B) ≈ 3.95 estimate.

## Bayes-factor accumulation framework

For each new tick observation Y_t with previous state S_{t-1}, the BF(C:B) updates multiplicatively:

BF(C:B)_t = BF(C:B)_{t-1} · [P(Y_t | S_{t-1}, M_C) / P(Y_t | M_B)]

where M_C is Interpretation C's MLE-estimated parameters and M_B is Interpretation B's strict-Poisson p_null = 0.174 (Add.215 update).

For each next tick prediction, the per-tick BF contribution is:

| previous state | next state | likelihood under C (MLE) | likelihood under B | per-tick BF contribution |
|---|---|---|---|---|
| N | N | 0.250 | 0.174 | 1.437 |
| N | A | 0.750 | 0.826 | 0.908 |
| A | N | 0.167 | 0.174 | 0.960 |
| A | A | 0.833 | 0.826 | 1.008 |

So BF(C:B) **increases** per-tick when N→N transitions occur (favouring clustering), and decreases slightly per-tick when N→A transitions occur (favouring independence). The asymmetry favours Interpretation C accumulating evidence faster than Interpretation B given the current MLE; specifically, a single N→N observation pushes BF up by ×1.437, while a single N→A observation only pushes it down by ×0.908. To equalise, ~3.5 N→A observations would need to occur per N→N observation; the observed lookback ratio is 3 N→A : 1 N→N ≈ 3:1, very close to the equalising ratio.

## Add.215-anchored prior on Add.216

Given Add.215 = N (null), the next-tick conditional prior on Add.216 = N is **p̂_NN = 0.250** under Interpretation C (vs **p_null = 0.174** under Interpretation B). The per-tick BF contribution at Add.216 will be:

- If Add.216 = N: BF(C:B) updates by ×(0.250 / 0.174) = **×1.437** (favours C).
- If Add.216 = A: BF(C:B) updates by ×(0.750 / 0.826) = **×0.908** (favours B slightly).

The cumulative BF(C:B) anchored at the synth #459 estimate ≈ 3.95 (which used the Add.212-215 joint observation under specific ad-hoc Interpretation C parameters) is **not directly comparable** to the MLE-anchored BF computed here because the parameterisations differ. To establish a coherent reference, this synth proposes resetting the BF accumulation from the start of the visible lookback at Add.193:

BF(C:B)_{Add.215} = ∏_{t=Add.194}^{Add.215} [P(Y_t | S_{t-1}, M_C^{MLE}) / P(Y_t | M_B)]

For the 22 transitions:

- 15 A→A: each ×(0.833/0.826) = ×1.008, product = 1.008^15 = **1.131**.
- 3 A→N: each ×(0.167/0.174) = ×0.960, product = 0.960^3 = **0.886**.
- 1 N→N: ×(0.250/0.174) = ×1.437, product = **1.437**.
- 3 N→A: each ×(0.750/0.826) = ×0.908, product = 0.908^3 = **0.749**.

Cumulative BF(C:B)_{Add.215} ≈ 1.131 · 0.886 · 1.437 · 0.749 = **1.078** — only **weak evidence** for Interpretation C over Interpretation B from the MLE-anchored 22-transition product. This is **substantially lower** than the synth #459 estimate of 3.95, because the synth #459 estimate used a stronger candidate Interpretation C (p_null_post_episode = 0.30) than the MLE estimate (p̂_NN = 0.250), and because the MLE-anchored BF pays the "cost" of fitting the parameters from the same data being evaluated (no train/test split).

## Predictions for Add.216+

- **P-460.A** (Add.216 state under Interpretation C MLE): predicted Add.216 = N with prior **0.250**; = A with prior 0.750.
- **P-460.B** (BF(C:B) trajectory): each subsequent N→N observation pushes BF(C:B) up by ×1.437; ~5 additional N→N observations (without offsetting N→A excess) would push the cumulative BF above ~3 (moderate evidence). At the current N→N rate (1 per 22 transitions), this would take ~110 ticks; under a stronger autocorrelation regime the rate would be faster.
- **P-460.C** (parameter CI tightening): each new tick tightens the p̂_NN and p̂_AN CIs; after ~50 transitions the p̂_NN CI should narrow to ±0.10, sufficient to distinguish Interpretation C from Interpretation B at the 5% level if the true autocorrelation is ≥0.10 in magnitude.
- **P-460.D** (synth #461 framing): synth #461 may extend Interpretation C to include **higher-order Markov dependencies** (e.g. the state at t conditional on states at both t−1 and t−2), if a 3-of-4-null pattern recurs in the next 10-20 ticks.
- **P-460.E** (model-selection threshold): BF(C:B) > 3 = "moderate evidence" (Jeffreys scale); BF(C:B) > 10 = "strong evidence"; BF(C:B) > 30 = "very strong evidence". Current estimate BF(C:B) ≈ 1.08 (MLE-anchored) is below the moderate-evidence threshold; the synth #459 ad-hoc estimate of ≈3.95 is at the moderate-evidence threshold but is parameter-dependent.

## Cross-references

- Synth #453: introduced Interpretation A (NTRP-periodic).
- Synth #455: introduced Interpretation B (Poisson independent-tick); rejected Interpretation A with BF(B:A) ≈ 18.2.
- Synth #457: closed first CNTL=2 episode; updated p_null = 0.136 → 0.174 (at Add.215).
- Synth #458: introduced mid-mode-singleton structure (orthogonal to Interpretation C; the silent-chain composition framework is independent of the null/active state-model).
- Synth #459: introduced inter-episode gap distribution; proposed ad-hoc Interpretation C with BF(C:B) ≈ 3.95 at Add.212-215 joint observation.
- ADDENDUM-215 M-215.A (CNTL=1 chain opens at Add.215; new N→A=3, N→N=1, A→N=3, A→A=15 transition counts); M-215.D (3-of-4-null clustering at the ~1.1% prior tail of Interpretation B); P-215.K (synth #460 Interpretation-C formalisation predicted — anchor for this synth).
