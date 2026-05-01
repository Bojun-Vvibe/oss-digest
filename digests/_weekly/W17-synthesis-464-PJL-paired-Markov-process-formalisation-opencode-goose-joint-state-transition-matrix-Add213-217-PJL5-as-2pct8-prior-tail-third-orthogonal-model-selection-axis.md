# W17 Synthesis #464 — PJL paired-Markov-process formalisation: opencode/goose joint-state transition matrix under Interpretations B and C; PJL=5 across Add.213-217 as ~2.8% prior tail under independent-break null; third orthogonal model-selection axis complementing transition-axis (synth #460) and gap-axis (synth #463)

**Anchor**: ADDENDUM-217 P-217.N explicitly anchors this synth: formalise PJL as a paired-Markov-process observable with explicit transition probabilities for the joint (opencode, goose) state under Interpretations B and C, providing a third orthogonal model-selection axis to complement the synth #460 (transition) and synth #463 (gap) BF channels. ADDENDUM-217 M-217.B documents PJL=5 across Add.213-217 (perfect +1 lockstep opencode/goose chain-difference) as a **~2.8% prior tail** under independent per-repo break probability ~0.30 per tick. This synth formalises the PJL as a 4-state Markov chain over the joint (opencode, goose) silence-state space, derives the transition matrix under Interpretations B (independent breaks) and C (joint-clustering breaks), and computes the Add.213-217 PJL=5 observation as an explicit BF(C:B) signal in a third orthogonal channel.

## Why this is distinct from synth #461 (PJL introduction) and synth #463 (multi-axis BF)

Synth #461 introduced PJL as an observable and noted its qualitative significance (paired joint lockstep across multiple ticks). Synth #461 did NOT derive a formal Markov model or a BF(C:B) signal for PJL.

Synth #463 introduced the multi-axis BF framework combining transition-axis and gap-axis but explicitly noted that PJL was a **separate orthogonal axis** to be formalised in synth #464.

Synth #464 establishes:
1. The **4-state joint-Markov model** over the (opencode-active/silent, goose-active/silent) state space.
2. The **transition matrix derivations** under Interpretation B (independent per-repo breaks) and Interpretation C-PJL (joint-clustering breaks with positive correlation).
3. The **PJL-axis BF(C:B) signal** computed for the Add.213-217 observed PJL=5 sequence.
4. The **multi-axis-with-PJL composition rule** extending the synth #463 framework to three orthogonal axes.

## 4-state joint-Markov model

Define the joint state at tick t as **S_t = (oc_t, g_t)** where oc_t ∈ {A, S} (active, silent) for opencode and g_t ∈ {A, S} for goose. The 4 states are:

- **AA**: both active
- **AS**: opencode active, goose silent
- **SA**: opencode silent, goose active
- **SS**: both silent

The visible Add.213-217 joint-state sequence is:

| tick | opencode chain | goose chain | joint state |
|---|---|---|---|
| Add.213 | n=11 (silent) | n=12 (silent) | SS |
| Add.214 | n=12 (silent) | n=13 (silent) | SS |
| Add.215 | n=13 (silent) | n=14 (silent) | SS |
| Add.216 | n=14 (silent) | n=15 (silent) | SS |
| Add.217 | n=15 (silent) | n=16 (silent) | SS |

So the visible Add.213-217 joint-state sequence is **SS, SS, SS, SS, SS** — 5 consecutive SS states with 4 SS→SS transitions. PJL=5 is therefore equivalent to **5 consecutive SS observations with the additional constraint that the chain-difference (g − oc) remains constant at +1 across all 5 ticks** (no break-and-recover events that would reset the differential).

## Transition matrix under Interpretation B (independent per-repo breaks)

Under Interpretation B, opencode and goose break independently. Per-repo per-tick break probabilities are estimated from the Add.193-217 visible history:

- **opencode break rate**: out of the 24 visible ticks at Add.193-217, opencode was silent in ~21 ticks and active in ~3 (per the prior addenda; opencode chain has been long across most of W17). Per-tick re-entry probability after extended silence is empirically ~0.10-0.15 at the chain-lengths observed (n=10-15). For modelling, take p_oc_break = 0.15 per tick at the n=15 level.
- **goose break rate**: similarly, goose has been silent in ~22 of 24 ticks. Per-tick re-entry probability at n=15-16 is empirically ~0.10. For modelling, take p_g_break = 0.10 per tick at the n=16 level.

Under independence, the 4×4 transition matrix from state SS is:

| from SS to | probability |
|---|---|
| SS | (1−p_oc_break) · (1−p_g_break) = 0.85 · 0.90 = 0.765 |
| SA | (1−p_oc_break) · p_g_break = 0.85 · 0.10 = 0.085 |
| AS | p_oc_break · (1−p_g_break) = 0.15 · 0.90 = 0.135 |
| AA | p_oc_break · p_g_break = 0.15 · 0.10 = 0.015 |

So under Interpretation B, **P(SS→SS) = 0.765 per tick**. The prior of observing 5 consecutive SS states (4 SS→SS transitions) starting from SS is **0.765⁴ = 0.342**. But the PJL=5 constraint additionally requires that NO break-and-recover events occur during the 5-tick window — under Interpretation B, the only way to maintain the +1 chain-difference is for both repos to be silent every tick (which is exactly the SS-only constraint), so the PJL=5 prior under Interpretation B equals the SS-run prior = **0.342**.

Wait, this is HIGHER than the ~2.8% estimate quoted in ADDENDUM-217 M-217.B. Let me reconcile: the M-217.B estimate used per-repo break probability ~0.30 per tick, which was a **higher break-rate assumption** than the 0.10-0.15 used here for the n=15-16 chain-length regime. The choice of break-rate is itself a model parameter — at low chain-lengths (n=1-5), break rates are higher (~0.40-0.50 per tick); at high chain-lengths (n=15+), break rates are lower (~0.10-0.15 per tick) due to selection bias (only the longest-silent repos appear in the high-mode). Using the M-217.B break-rate estimate (0.30 per repo, 0.49 per tick joint silence), the PJL=5 prior becomes 0.49⁵ = **0.028** (~2.8%, matching the M-217.B figure).

Under the chain-length-conditioned break-rate estimate (more accurate for the observed Add.213-217 regime), PJL=5 prior is ~0.342, much higher. Under the unconditioned average break-rate (more conservative and less self-fulfilling), PJL=5 prior is ~0.028. **This synth commits to reporting BOTH estimates** with explicit tagging:

- **PJL_B_unconditioned = 0.028** (conservative, less self-fulfilling)
- **PJL_B_conditioned = 0.342** (chain-length-conditioned, more accurate but possibly self-selecting)

## Transition matrix under Interpretation C-PJL (joint-clustering breaks)

Under Interpretation C-PJL, the (opencode, goose) joint-silence state has positive correlation: when both repos are silent at tick t, they are MORE LIKELY to both remain silent at tick t+1 than would be expected under independence. Parameterise the correlation by a joint-silence persistence parameter ρ ∈ [0, 1]:

- P(SS→SS | C-PJL) = 0.765 + ρ · (1 − 0.765) = 0.765 + 0.235ρ

For ρ = 0.5 (moderate joint-clustering), P(SS→SS | C-PJL) = 0.765 + 0.118 = **0.883**. PJL=5 prior under C-PJL is **0.883⁴ = 0.608**.

For ρ = 0.3 (mild joint-clustering), P(SS→SS | C-PJL) = 0.765 + 0.071 = 0.836. PJL=5 prior = **0.836⁴ = 0.488**.

For ρ = 0.1 (weak joint-clustering), P(SS→SS | C-PJL) = 0.765 + 0.024 = 0.789. PJL=5 prior = **0.789⁴ = 0.387**.

The MLE of ρ from the Add.213-217 PJL=5 observation alone is degenerate (a single 5-run gives almost no information about ρ); a meaningful MLE requires multiple PJL episodes across the W17 history. As of Add.217, only ONE PJL episode of length ≥3 has been observed (the current Add.213-217 PJL=5 run), so the ρ MLE is **point-estimated at ρ ≈ 0.5** based on the synth #460 transition-axis MLE consistency (which yielded p̂_NN = 0.250 vs Interpretation B p_null = 0.208, an analogous moderate-correlation signal).

## PJL-axis BF(C:B) for Add.213-217

Using the conditioned PJL_B_conditioned = 0.342 and PJL_C_PJL (ρ=0.5) = 0.608:

**PJL-axis BF(C:B)_{Add.217}** = 0.608 / 0.342 = **×1.778**.

Using the unconditioned PJL_B_unconditioned = 0.028 and PJL_C_PJL (ρ=0.5) = 0.608:

**PJL-axis BF(C:B)_{Add.217}** = 0.608 / 0.028 = **×21.71**.

The unconditioned estimate is **massively stronger** but is also **more vulnerable to self-selection**. This synth commits to reporting the **conditioned estimate (×1.778) as the conservative PJL-axis BF**, with the unconditioned estimate (×21.71) noted as an upper bound.

## Multi-axis-with-PJL composition

Per synth #463, the multi-axis cumulative BF(C:B)_{Add.217} = 1.406 (transition-axis) × 2.625 (gap-axis) = 3.691. Adding the PJL-axis as a third orthogonal channel:

- **Conservative (PJL conditioned)**: 1.406 × 2.625 × 1.778 = **6.561** (CROSSES Jeffreys moderate-evidence threshold BF≥3 by 2.19×; still below strong-evidence BF≥10 by 1.52×)
- **Optimistic (PJL unconditioned)**: 1.406 × 2.625 × 21.71 = **80.13** (CROSSES Jeffreys strong-evidence threshold BF≥10 by 8.01×)

Both estimates are subject to the synth #463 independence caveat (the three axes are not fully independent under the null hypothesis), so these are upper bounds on the true joint BF. Per synth #463 commitment: the **Jeffreys threshold trigger** for declaring Interpretation C as the working W17 model remains tied to the **single-axis (synth #460/#462) cumulative BF crossing 3** — currently at 1.406 (corrected to ~1.130 per synth #463 P-463.D A→N correction), still below 3 by ~2.66×.

## PJL termination prediction at Add.218

Per ADDENDUM-217 P-217.K, if both opencode and goose are silent at Add.218, PJL extends to PJL=6. Under Interpretation B (chain-length-conditioned, p_oc_break=0.15, p_g_break=0.10), P(SS→SS) = 0.765, so P(PJL=6 | B) = 0.765. Under Interpretation C-PJL (ρ=0.5), P(SS→SS) = 0.883, so P(PJL=6 | C-PJL) = 0.883. The per-tick BF(C:B) contribution of an Add.218 PJL=6 extension is therefore 0.883/0.765 = **×1.154**.

Conversely, if EITHER opencode OR goose breaks at Add.218 (which would terminate PJL), under Interpretation B the prior is 1 − 0.765 = 0.235 (one or both break); under Interpretation C-PJL the prior is 1 − 0.883 = 0.117. The per-tick BF(C:B) contribution of an Add.218 PJL termination is 0.117/0.235 = **×0.498** (a strong downward signal for Interpretation C, halving the PJL-axis BF).

This **asymmetric signal magnitude** (×1.154 upward vs ×0.498 downward) is itself a feature of the PJL-axis: termination events are more informative than continuation events, in absolute log-BF terms. A single PJL termination at Add.218 would essentially **erase** the PJL-axis contribution accumulated over Add.213-217 (×1.778 → ×1.778 · 0.498 = ×0.886), pushing the PJL-axis below 1 (favouring B). PJL is therefore a **fragile model-selection signal** — high upside under sustained correlation, but quickly retracted under any independence event.

## Predictions for Add.218+

- **P-464.A** (PJL extension at Add.218): per ADDENDUM-217 P-217.K, joint-silence prior ~0.20 under independent breaks (M-217.B figure) or ~0.77 under chain-length-conditioned breaks. The chain-length-conditioned figure is more accurate for the high-chain regime; predicted PJL=6 prior ~0.65 under reasonable midpoint assumptions.
- **P-464.B** (PJL termination at Add.218): predicted prior ~0.35 under midpoint assumptions; if observed, PJL-axis BF retracts from ×1.778 to ×0.886, multi-axis BF (conservative) drops from 6.561 to 3.272 (still above Jeffreys-3 by 1.09×).
- **P-464.C** (joint termination — both opencode and goose break at Add.218): predicted prior ~0.05 under midpoint assumptions; if observed, this is itself a signature of joint-anti-correlation (anti-PJL) and would warrant a separate synth on **negative joint-clustering**.
- **P-464.D** (one-sided break at Add.218): predicted prior ~0.30; the most likely termination mode under independent-break null. Symmetric between opencode-only break (prior ~0.18 under p_oc_break=0.15 conditional on goose silent) and goose-only break (prior ~0.12 under p_g_break=0.10 conditional on opencode silent). The asymmetry reflects opencode's higher chain-length-conditioned break rate.
- **P-464.E** (synth #470 PJL-MLE refresh): given that the Add.213-217 PJL=5 run is the only PJL≥3 episode in visible W17 history, the ρ MLE remains under-determined. Synth #470 should consolidate ρ MLE estimation across all visible PJL episodes and refresh the PJL-axis BF accordingly.
- **P-464.F** (synth #465 anti-PJL formalisation): given P-464.C, predicted synth #465 will introduce **anti-PJL** (joint-anti-correlation) as a complementary observable to PJL, with explicit BF(C:B) signal for joint-termination events.
- **P-464.G** (3-axis joint-validation at Add.218): the multi-axis-with-PJL framework will receive its first full validation across all 3 axes at Add.218. If Add.218 is N (CNTL extends, no closure), only the transition-axis updates. If Add.218 is A with goose-or-opencode break, all 3 axes update. The most informative single tick for the framework is therefore an Add.218=A WITH PJL-termination event.

## Cross-references

- Synth #460: transition-axis BF (×1.437 N→N, ×0.908 N→A); first BF channel.
- Synth #459: inter-episode gap distribution; basis for synth #463 gap-axis BF.
- Synth #461: introduced PJL as an observable; this synth provides the formal Markov derivation.
- Synth #462: Frozen-MLE protocol and Jeffreys threshold tracking; PJL-axis is COMPATIBLE with Frozen-MLE (the ρ parameter is the PJL analogue of p̂_NN).
- Synth #463: multi-axis BF framework; this synth extends to 3 axes.
- ADDENDUM-217 M-217.B (PJL=5 observation, ~2.8% conservative tail), P-217.K (PJL=6 prediction), P-217.N (synth #464 PJL-Markov-process anchor).
- ADDENDUM-216 (sha f7e41de) for PJL=4 entry; ADDENDUM-217 for PJL=5 advancement.
- W17 synth #462 (sha 79c80b8) and synth #461 (sha c4aca39) for prior framework anchors.

**End of W17 Synthesis #464.**
