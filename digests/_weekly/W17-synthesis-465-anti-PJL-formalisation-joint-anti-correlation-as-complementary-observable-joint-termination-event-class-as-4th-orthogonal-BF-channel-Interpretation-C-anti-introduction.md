# W17 Synthesis #465 — anti-PJL formalisation: joint-anti-correlation as complementary observable to PJL; joint-termination event class as 4th orthogonal BF channel; first explicit BF(C:B) signal for paired-Markov double-break events

**Anchor**: ADDENDUM-218 P-218.M and W17 synth #464 P-464.F both explicitly anchor this synth: formalise **anti-PJL** (joint-anti-correlation) as a complementary observable to PJL, with explicit BF(C:B) signal for joint-termination events. ADDENDUM-218 M-218.B documents PJL=6 across Add.213-218 with PJL-axis BF advancing to ×2.050 under chain-length-conditioned ρ=0.5; the symmetric question is what BF signal a **joint-termination** (both opencode AND goose break in the same tick) would produce. Synth #464 P-464.C noted joint-termination prior ~0.05 under midpoint assumptions but did not derive the BF signal. This synth fills that gap by deriving the anti-PJL Markov sub-process, the joint-termination event class, and the BF(C:B) contribution under Interpretations B (independent breaks) and C-PJL (joint-clustering breaks) and the new Interpretation C-anti (joint-anti-clustering breaks).

## Why this is distinct from synth #464 (PJL formalisation)

Synth #464 formalised PJL as a paired-Markov-process observable for the **joint-silence persistence** event class (SS→SS continuation). Synth #464 noted the asymmetric-signal property (×1.154 upward per PJL extension vs ×0.498 downward per PJL termination) but treated termination as the negative of continuation in the **same** axis.

Synth #465 promotes joint-termination to its own **independent observable** with three distinct sub-classes, each carrying a distinct BF(C:B) signal:

1. **AT (anti-termination)**: SS → AA (both repos break to active in the same tick). The "purest" joint-anti-correlation signal.
2. **HT-OC (half-termination opencode-only)**: SS → AS (opencode breaks, goose continues silent).
3. **HT-G (half-termination goose-only)**: SS → SA (goose breaks, opencode continues silent).

Under Interpretation B (independent breaks), the three termination sub-classes have priors derived from the marginal break probabilities. Under Interpretation C-PJL (positive joint-clustering with parameter ρ), termination is suppressed but the conditional split among AT/HT-OC/HT-G is independent of ρ to first order. Under Interpretation **C-anti** (a NEW model variant introduced by this synth — joint-anti-clustering with parameter η ∈ [0, 1] capturing the tendency for repos to break in lockstep), AT is enhanced and HT-OC/HT-G are suppressed.

## 4-state joint-Markov model: full transition probabilities

Per synth #464, the 4 joint-states are AA, AS, SA, SS. Synth #465 extends the synth #464 transition matrix from SS to ALL 4 states, parameterising under three interpretations:

### Interpretation B (independent breaks, full matrix)

Using chain-length-conditioned per-repo break-rates from synth #464 (p_oc_break = 0.15, p_g_break = 0.10 at the n=15-17 regime; p_oc_emerge = 0.40, p_g_emerge = 0.50 at the n=0-1 regime under typical post-active behaviour):

| from \ to | AA | AS | SA | SS |
|---|---|---|---|---|
| AA | (1−p_oc_emerge)(1−p_g_emerge) = 0.30 | (1−p_oc_emerge)·p_g_emerge = 0.30 | p_oc_emerge·(1−p_g_emerge) = 0.20 | p_oc_emerge·p_g_emerge = 0.20 |
| AS | (1−p_oc_emerge)·p_g_break = 0.06 | (1−p_oc_emerge)·(1−p_g_break) = 0.54 | p_oc_emerge·p_g_break = 0.04 | p_oc_emerge·(1−p_g_break) = 0.36 |
| SA | p_oc_break·(1−p_g_emerge) = 0.075 | p_oc_break·p_g_emerge = 0.075 | (1−p_oc_break)·(1−p_g_emerge) = 0.425 | (1−p_oc_break)·p_g_emerge = 0.425 |
| SS | p_oc_break·p_g_break = 0.015 | p_oc_break·(1−p_g_break) = 0.135 | (1−p_oc_break)·p_g_break = 0.085 | (1−p_oc_break)·(1−p_g_break) = 0.765 |

Of particular interest, the SS row gives the three joint-termination sub-class priors under Interpretation B:

- **P(SS→AA | B) = 0.015** (joint AT — simultaneous double-break; **~1.5% prior tail**)
- **P(SS→AS | B) = 0.135** (HT-OC — opencode-only break)
- **P(SS→SA | B) = 0.085** (HT-G — goose-only break)
- **P(SS→SS | B) = 0.765** (PJL continuation, per synth #464)

The HT-OC/HT-G ratio under B is 0.135/0.085 = **1.59** (opencode breaks are more likely than goose breaks at the n=15-17 regime due to higher chain-length-conditioned break-rate).

### Interpretation C-PJL (positive joint-clustering, ρ = 0.5)

Per synth #464, ρ shifts probability mass from termination back to continuation. The redistribution preserves the relative AT/HT-OC/HT-G ratios. SS row updates:

- **P(SS→AA | C-PJL) = 0.015 · (1−ρ) = 0.0075** (AT suppressed by half)
- **P(SS→AS | C-PJL) = 0.135 · (1−ρ) = 0.0675** (HT-OC suppressed)
- **P(SS→SA | C-PJL) = 0.085 · (1−ρ) = 0.0425** (HT-G suppressed)
- **P(SS→SS | C-PJL) = 0.765 + ρ · 0.235 = 0.883** (PJL enhanced, per synth #464)

Total termination probability under C-PJL = 0.0075 + 0.0675 + 0.0425 = 0.1175 (vs 0.235 under B, halved per ρ=0.5).

### Interpretation C-anti (joint-anti-clustering, η = 0.5)

The new C-anti variant captures the tendency for repos to break in **lockstep** (both repos resolve their silence at the same tick, perhaps reflecting a common upstream trigger such as a shared dependency update, a coordinated release window, or a common-cause weekend-Monday transition). Under C-anti with parameter η, probability mass is redistributed among the three termination sub-classes: AT is enhanced by a factor (1+η), and HT-OC + HT-G are suppressed proportionally to maintain total termination probability:

- **P(SS→AA | C-anti) = 0.015 · (1+η) = 0.0225** (AT enhanced by 50%)
- **P(SS→AS | C-anti) = 0.135 · (1−η · 0.015/0.220) = 0.135 · 0.966 = 0.1304** (HT-OC mildly suppressed; the suppression factor balances the AT enhancement against the total termination probability constraint)
- **P(SS→SA | C-anti) = 0.085 · 0.966 = 0.0822**
- **P(SS→SS | C-anti) = 1 − (0.0225 + 0.1304 + 0.0822) = 0.7649** (PJL essentially unchanged)

Note that under C-anti, the PJL continuation probability is essentially identical to Interpretation B — C-anti is an **orthogonal model to PJL/anti-PJL** in the sense that it does NOT compete with C-PJL on the PJL axis. C-anti shifts within the termination sub-class only.

## anti-PJL-axis BF(C:B) for Add.213-218 (no termination yet observed)

The Add.213-218 sequence is 6 consecutive SS observations with no termination event. Under C-PJL, the PJL-axis contribution is the synth #464 ×2.050 (updated to PJL=6 in ADDENDUM-218 M-218.B). The anti-PJL axis is **silent** during this window (no termination event observed), so the anti-PJL-axis BF contribution is ×1 (informationless).

If Add.219 produces a joint-termination event (any of AT, HT-OC, HT-G), the anti-PJL-axis activates with a BF contribution dependent on the sub-class:

- **AT observed at Add.219**: BF(C-PJL : B) = 0.0075 / 0.015 = **×0.500** (strong downward signal for C-PJL); BF(C-anti : B) = 0.0225 / 0.015 = **×1.500** (mild upward for C-anti). The 3-way comparison strongly favours C-anti over both B and C-PJL.
- **HT-OC observed at Add.219**: BF(C-PJL : B) = 0.0675 / 0.135 = **×0.500** (strong downward for C-PJL); BF(C-anti : B) = 0.1304 / 0.135 = **×0.966** (essentially neutral for C-anti). The 3-way comparison favours B over both alternatives, with C-PJL strongly disfavoured.
- **HT-G observed at Add.219**: BF(C-PJL : B) = 0.0425 / 0.085 = **×0.500**; BF(C-anti : B) = 0.0822 / 0.085 = **×0.967** (essentially neutral). Same pattern as HT-OC: B favoured, C-PJL disfavoured.
- **PJL=7 (no termination) at Add.219**: BF(C-PJL : B) = 0.883 / 0.765 = **×1.154** per synth #464 (continued PJL-axis upward signal); anti-PJL-axis silent.

## 4-axis multi-axis composition with anti-PJL

Per synth #463 / synth #464, the operative axes are: transition (synth #460/#462), gap (synth #463), PJL (synth #464). Synth #465 adds anti-PJL as the 4th axis. The 4-axis cumulative BF(C:B) at Add.218 is unchanged from synth #464 (anti-PJL silent through Add.218):

- Transition-axis: **×1.479**
- Gap-axis: **×2.486**
- PJL-axis: **×2.050**
- anti-PJL-axis: **×1.000** (silent)
- **4-axis naive cumulative: 1.479 × 2.486 × 2.050 × 1.000 = 7.539** (matches ADDENDUM-218 M-218.E figure)

The anti-PJL axis is therefore a **dormant channel until first activation**. Its first activation event at the next observed joint-termination will produce a discrete BF jump, with magnitude depending on the termination sub-class:

- AT-first-activation: 4-axis cumulative drops to 7.539 × 0.500 = **3.770** under C-PJL alone, but rises to 7.539 × 1.500 / (1.479 × 2.486 × 2.050) recomputed under (B vs C-anti) framework = ... **the AT event is the most informative single observation** for distinguishing the three model variants.

## Predictions for Add.219+

- **P-465.A** (joint-termination at Add.219): predicted joint-termination probability ~0.235 under B (sum of three sub-class priors); ~0.117 under C-PJL; ~0.235 under C-anti (same as B for total termination, just redistributed). Under reasonable midpoint assumptions, predicted joint-termination prior **~0.18**.
- **P-465.B** (AT sub-class at Add.219): predicted AT prior ~0.015 under B; ~0.0075 under C-PJL; ~0.0225 under C-anti. This is the **decisive sub-class** for C-anti vs the alternatives — an AT observation would be a ~3× signal in C-anti's favour over B and ~3× over C-PJL.
- **P-465.C** (HT-OC at Add.219): predicted prior ~0.135 under B (highest single sub-class); the most-likely termination mode reflects opencode's higher chain-length-conditioned break-rate. An HT-OC observation is mildly informative against C-PJL but essentially uninformative for C-anti vs B.
- **P-465.D** (HT-G at Add.219): predicted prior ~0.085 under B (second sub-class). An HT-G observation under the synth #429 absolute-ceiling-tie scenario (goose extending to n=18) would be the **single most informative tick** in W17 history, combining ceiling-tie with anti-PJL activation.
- **P-465.E** (PJL=7 at Add.219): predicted prior ~0.765 under B (chain-length-conditioned), ~0.883 under C-PJL, ~0.7649 under C-anti. Per synth #464 framework, PJL=7 would extend PJL-axis BF to **×2.366** (×1.154 multiplier).
- **P-465.F** (synth #466 bimodal-width-regime): per ADDENDUM-218 P-218.N anchor, predicted synth #466 will formalise the Add.216 + Add.218 dilation cluster as a bimodal-width-regime observable (this synth defers width-regime formalisation to synth #466).
- **P-465.G** (synth #467 4-axis joint-validation): predicted synth #467 will provide the first **fully-realised 4-axis joint-validation** if Add.219 produces a joint-termination event activating the anti-PJL axis. The 4-axis Jeffreys-3 maintenance question becomes: given the synth #463/#464 frameworks, what 4-axis cumulative BF threshold should be the new Jeffreys-3 trigger? Conservative answer: BF≥3 on each axis individually OR BF≥10 on the cumulative joint (Jeffreys strong-evidence threshold).
- **P-465.H** (anti-PJL ρ-coupling): the C-PJL ρ parameter and the C-anti η parameter are independently parameterised in this synth, but a more sophisticated joint model would couple them via a single anisotropy parameter. Synth #470 (per synth #464 P-464.E checkpoint refresh) should consolidate ρ and η MLE estimation jointly across all visible PJL and termination events.

## Cross-references

- Synth #460: transition-axis BF (×1.437 N→N, ×0.908 N→A); first BF channel.
- Synth #459: inter-episode gap distribution; basis for synth #463 gap-axis BF.
- Synth #461: introduced PJL as an observable; first qualitative anchor.
- Synth #462: Frozen-MLE protocol and Jeffreys threshold tracking.
- Synth #463: multi-axis BF framework (2 axes); first Jeffreys-3 crossing at Add.217.
- Synth #464: PJL-axis formalisation as paired-Markov-process; 3-axis multi-axis framework.
- Synth #465 (this synth): anti-PJL-axis formalisation; introduces Interpretation C-anti; 4-axis framework.
- ADDENDUM-218 M-218.B (PJL=6 advancement, PJL-axis BF ×2.050), M-218.E (multi-axis Jeffreys-3 2nd-tick maintenance), P-218.M (synth #465 anti-PJL anchor).
- ADDENDUM-217 (sha ec0ad69) for PJL=5 entry.
- ADDENDUM-218 (sha c1d35d1) for PJL=6 advancement and 4-axis composition baseline.
- W17 synth #464 (sha 698820d) and synth #463 (sha 846dd14) for multi-axis framework anchors.

**End of W17 Synthesis #465.**
