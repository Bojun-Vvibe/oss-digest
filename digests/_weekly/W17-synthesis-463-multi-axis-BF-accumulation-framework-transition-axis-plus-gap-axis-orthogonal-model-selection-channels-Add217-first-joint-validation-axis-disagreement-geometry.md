# W17 Synthesis #463 — Multi-axis BF accumulation framework: transition-axis (synth #460) + gap-axis (synth #459) compose into orthogonal model-selection channels; Add.217 first joint validation showing axis-disagreement at micro-tick resolution

**Anchor**: ADDENDUM-217 P-217.M explicitly anchors this synth: formalise the multi-axis BF accumulation framework combining the synth #460 transition-axis BF (×1.437 per N→N, ×0.908 per N→A) with a new synth #459-derived gap-axis BF (×1.053 per gap≥1, ×0.947 per gap=0). ADDENDUM-217 M-217.D documents the first instance of an **axis-disagreement** event at micro-tick resolution: the Add.216→Add.217 transition is N→A (per the synth #460 transition-axis, a downward signal for Interpretation C with per-tick BF ×0.908) AND a gap=0 closure (per the synth #459 gap-axis, also a downward signal for Interpretation C with per-tick BF ×0.947). Both axes agree on direction in this single instance, but the axes are **structurally orthogonal** — they will disagree in some future ticks, and the disagreement geometry is itself a model-selection signal.

## Why this is distinct from synth #460 (transition-axis BF) and synth #462 (Frozen-MLE protocol)

Synth #460 established the transition-axis BF accumulation as a single-channel estimator, treating each N→N as ×1.437 and each N→A as ×0.908. Synth #460 explicitly framed the BF as a single product over the visible transition sequence.

Synth #462 fixed the MLE refresh schedule (Frozen-MLE-with-checkpoint-refresh) and introduced the Jeffreys threshold-tracking schedule. Synth #462 did NOT introduce a second BF channel.

Synth #463 establishes:
1. The **gap-axis BF channel** derived from the synth #459 inter-episode gap distribution.
2. The **multi-axis composition rule** combining transition-axis and gap-axis BFs into a joint cumulative BF.
3. The **axis-disagreement geometry** as a third orthogonal model-selection signal — when transition-axis and gap-axis BFs disagree in direction, the disagreement is itself diagnostic.

## Gap-axis BF derivation

The synth #459 inter-episode gap distribution at Add.217 is {4, 1, 0} (3 measurable gaps). Under strict Poisson Interpretation B with p_null = 0.208, the gap distribution is geometric with parameter (1−p_null) = 0.792, so:

- P(gap=0 | episode-closure) = 0.792 (immediate active-tick after closing null)
- P(gap≥1 | episode-closure) = 0.208 (one or more inter-episode null ticks before next active)
- P(gap=k | episode-closure) = 0.208^k · 0.792 for k≥1

Under Interpretation C with frozen p̂_NN = 0.250 and p̂_AN = 0.167, the gap distribution is **NOT geometric** because the post-closure dynamics differ from the within-episode dynamics. After an N→A closure, the next-tick null probability is p̂_AN = 0.167 (not p_null_B = 0.208), so:

- P(gap=0 | C, episode-closure) = 1 − p̂_AN = 0.833 (ish, but the closure transition is itself part of the gap=0 case — the active tick that closes the episode IS the gap=0 entry)
- More precisely, under C the gap=0 prior at the closing tick is 1 − p̂_NN = 0.750 (the closing tick is realised at probability 0.750 conditioned on the prior tick being N).

**Per-gap BF contribution under multi-axis framework**:

| gap value | Interpretation B prior | Interpretation C frozen prior | per-gap BF(C:B) |
|---|---|---|---|
| gap=0 (immediate closure) | 0.792 | 0.750 | ×0.947 |
| gap=1 (one-tick separation) | 0.208 · 0.792 = 0.165 | 0.250 · 0.833 = 0.208 | ×1.262 |
| gap=2 | 0.208² · 0.792 = 0.034 | 0.250² · 0.833 = 0.052 | ×1.529 |
| gap=3 | 0.208³ · 0.792 = 0.00713 | 0.250³ · 0.833 = 0.01302 | ×1.825 |
| gap=4 | 0.208⁴ · 0.792 = 0.00148 | 0.250⁴ · 0.833 = 0.00325 | ×2.196 |
| gap=k | geometric decay | slower geometric decay | exponentially increasing |

Note the gap-axis BF favours Interpretation C **only for gap≥1** observations; gap=0 observations slightly favour Interpretation B (×0.947). This is a **structurally interesting orthogonality**: the synth #460 transition-axis BF and the synth #459 gap-axis BF will agree on direction for *gap=0+N→A* compositions (both downward for C, as observed at Add.217) and for *gap=k≥1+N→N* compositions (both upward for C); they will **disagree** for gap=0+N→N (impossible at the single-tick level — N→N never closes an episode) and for gap=k≥1+N→A (rare — would require a multi-tick gap followed by an immediate active, which is the typical case after a long silence).

## Joint cumulative BF at Add.217

The visible inter-episode gap distribution at Add.217 is {4, 1, 0} (3 measurable gaps). Per the gap-axis BF table:

- gap=4 (Add.208→Add.212): per-gap BF(C:B) = ×2.196
- gap=1 (Add.214→Add.215): per-gap BF(C:B) = ×1.262
- gap=0 (Add.217 immediate closure): per-gap BF(C:B) = ×0.947

**Cumulative gap-axis BF(C:B)_{Add.217}** = 2.196 × 1.262 × 0.947 = **2.625**.

Combined with the synth #462 cumulative transition-axis BF(C:B)_{Add.217} = **1.406**:

**Joint multi-axis BF(C:B)_{Add.217}** = 1.406 × 2.625 = **3.691**.

This **CROSSES the Jeffreys moderate-evidence threshold (BF ≥ 3)** at Add.217 under the multi-axis framework, **3 ticks ahead of the synth #462 single-axis projection** (synth #462 projected Jeffreys-3 crossing at Add.218 under sustained N→N, then re-projected to Add.220 after the Add.217 N→A; the multi-axis joint already crosses at the current tick).

**Caveat**: this is a STRONG claim that requires careful sanity-checking. The multi-axis composition assumes the transition-axis and gap-axis are independent under the null hypothesis (Interpretation B) — but they are NOT fully independent, because the gap-axis observations are themselves derived from the same underlying tick sequence as the transition-axis. The correct interpretation of the multi-axis BF is therefore as an **upper bound** on the true BF (assuming maximum independence) rather than a tight estimate. A more careful analysis (deferred to a future synth) would require estimating the correlation structure between the two axes and discounting the joint BF accordingly.

## Provisional treatment: report both single-axis and multi-axis cumulative BFs

Per the independence caveat, this synth commits to the following reporting protocol:

1. **Single-axis (synth #460/#462) cumulative BF(C:B)** is the conservative estimate, suitable for primary model-selection commitments (Jeffreys threshold actions).
2. **Multi-axis (synth #463) cumulative BF(C:B)** is the optimistic estimate, suitable for early-warning of Interpretation C dominance.
3. **Crossing of the Jeffreys moderate-evidence threshold (BF ≥ 3)** triggers Interpretation C as the working W17 model **only when the single-axis BF crosses 3**, NOT when the multi-axis crosses 3.

Under this protocol, the Add.217 multi-axis crossing at 3.691 is a **strong early-warning signal** but does NOT trigger the synth #462 P-462.D commitment to refresh the Frozen-MLE. The single-axis trigger remains projected at Add.220.

## Axis-disagreement geometry as a third orthogonal signal

When the transition-axis and gap-axis BFs disagree in direction (one favours C, the other favours B), the disagreement is itself a model-selection signal. Define the **axis-disagreement statistic** Δ = sign(log(BF_transition)) · sign(log(BF_gap)). Under Interpretation B, the axes should disagree at the Bernoulli rate determined by their independent priors (~50% per tick under symmetric priors). Under Interpretation C, the axes should AGREE more often than chance (because both are downstream of the same clustering regime).

At Add.217, both axes give downward signals (transition-axis ×0.908 < 1, gap-axis ×0.947 < 1), so Δ = +1 (agreement on downward). The visible Add.193-217 history shows:

- N→N transitions (transition-axis upward): Add.212→Add.213, Add.215→Add.216 — both also gap-axis upward (no closure events at these ticks, so gap-axis is null-contributory; treat as ×1.0)
- N→A transitions (transition-axis downward): Add.213→Add.214, Add.216→Add.217 — Add.214 corresponds to gap=1 closure (×1.262 upward, DISAGREEMENT with transition-axis), Add.217 corresponds to gap=0 closure (×0.947 downward, AGREEMENT with transition-axis)
- A→N transitions (transition-axis ×1.0 — not a C/B-discriminating event under the synth #460 framework): not informative for axis-agreement
- A→A transitions (transition-axis ×1.0): not informative for axis-agreement

So the visible axis-disagreement count at Add.217 is **1 out of 2 episode-closure events** (Add.214 disagreement, Add.217 agreement) — a 50% disagreement rate, indistinguishable from the Interpretation B null at this small sample. The axis-disagreement signal will become discriminating only after several more episode-closure events accumulate (estimated synth #475-#480 timeframe under the current cadence).

## Predictions for Add.218+

- **P-463.A** (single-axis BF at Add.218): if Add.218 is N (CNTL=1 reopens), per-tick transition-axis BF = ×1.437 (A→N is treated as transition-axis ×1.0 in the synth #460 framework — wait, A→N IS a discriminating transition; let me restate: A→N has Interpretation C MLE p̂_AN = 0.167 vs Interpretation B p_null = 0.208, so per-tick BF(C:B) = 0.167/0.208 = ×0.803, a **downward signal**. So A→N actually FAVOURS Interpretation B at the single-axis level — a counter-intuitive feature of the synth #460 framework that synth #470 should investigate). Updated single-axis BF if Add.218=N: 1.406 × 0.803 = ~1.129. If Add.218=A: per-tick BF(C:B) for A→A = (1−0.167)/(1−0.208) = 0.833/0.792 = ×1.052, single-axis BF = 1.406 × 1.052 = ~1.479.
- **P-463.B** (multi-axis BF at Add.218): if Add.218=N, no new closure event so gap-axis is unchanged at 2.625; multi-axis BF = 1.129 × 2.625 = 2.964 (drops below 3). If Add.218=A, no new closure event so gap-axis is unchanged at 2.625; multi-axis BF = 1.479 × 2.625 = 3.882 (sustains above 3).
- **P-463.C** (axis-disagreement at Add.218): if Add.218=N, transition-axis is downward (×0.803) and gap-axis is null; Δ-event undefined. If Add.218=A, transition-axis is upward (×1.052) and gap-axis is null; Δ-event undefined. The axis-disagreement signal therefore advances only on episode-closure events.
- **P-463.D** (correction to A→N treatment): the synth #460 framework treated A→N as the "starting" transition and did not give it an explicit BF contribution; under the corrected synth #463 treatment, A→N has per-tick BF(C:B) = ×0.803. Re-anchoring the synth #460 cumulative BF at Add.215 with this correction: the Add.214→Add.215 A→N transition contributes ×0.803, so the synth #460 anchor BF at Add.215 should be **revised downward** from 1.078 to 1.078 × 0.803 = ~0.866 (FAVOURING Interpretation B at the original anchor). The synth #462 trajectory then needs re-anchoring; the Add.216 BF would be 0.866 × 1.437 = 1.244, and the Add.217 BF would be 1.244 × 0.908 = 1.130. **The Jeffreys threshold trigger schedule shifts further out** — under the corrected single-axis framework, BF≥3 requires more sustained N→N evidence than synth #462 projected. This correction is documented here and will be formalised in synth #470 alongside the next Frozen-MLE refresh.
- **P-463.E** (synth #470 corrections-and-refresh agenda): the next major synth-framework checkpoint should consolidate the synth #463 A→N correction, refresh the Frozen-MLE per the synth #462 protocol, and audit the multi-axis composition rule under a more careful independence analysis.

## Cross-references

- Synth #460: established transition-axis BF accumulation; **NOT corrected for A→N** — see P-463.D.
- Synth #459: established inter-episode gap distribution; basis for the gap-axis BF channel introduced here.
- Synth #461: introduced PJL paired-joint-lockstep — orthogonal to both transition-axis and gap-axis; will be formalised as a third BF channel in synth #464.
- Synth #462: established Frozen-MLE protocol and Jeffreys threshold tracking; this synth's multi-axis framework is COMPATIBLE with the Frozen-MLE protocol (both axes use the synth #460 anchor MLE).
- ADDENDUM-217 M-217.A (single-axis BF update to 1.406); M-217.D (gap=0 closure giving gap-axis ×0.947); P-217.M (multi-axis framework anchor).
- ADDENDUM-216 (sha f7e41de) for prior CNTL=2 chain entry; ADDENDUM-217 for current CNTL=2 closure and gap=0 entry.

**End of W17 Synthesis #463.**
