# W17 Synthesis #450 — Author cross-tick recurrence frequency (ACTRF) sub-observable introduced at Add.210: yuneng-berri appears at Add.204/205/206 then re-emerges at Add.210 after a 3-tick silence gap (Add.207-209), instantiating an R1-recurring-internal-vendor sub-cohort distinct from the synth #441 F2-fresh-cross-vendor (Sameerlite-class) and the Add.209 M-209.E F2-fresh-internal-vendor (wiltzius-openai-class) cohorts; the three-cohort framework partitions W17 carrier-author space along (recurrence × vendor-locality) axes

## Pattern statement

Across the visible Add.193-210 W17 lookback, three structurally distinct author-classes have emerged at the carrier-author level. Synth #441 introduced the **F2-fresh-cross-vendor sub-cohort** at Add.206 (Sameerlite at litellm contributing Vertex AI Anthropic provider integration — a fresh author at litellm whose work crosses vendor boundaries by integrating a non-litellm-vendor provider). Add.209's M-209.E surfaced the **F2-fresh-internal-vendor sub-cohort** (wiltzius-openai at codex contributing thread-store process-scoping — a fresh author at codex whose handle suffix `-openai` and work surface mark them as a vendor-internal contributor at the codex repo). Add.210's M-210.B/C surfaces the **R1-recurring-internal-vendor sub-cohort** (yuneng-berri / yuneng-jiang at litellm contributing infra cadence pair PR #26961/#26962 — a recurring author at litellm whose handle suffix `-berri` and work surface mark them as a vendor-internal contributor at the litellm parent organisation BerriAI).

The three sub-cohorts partition the W17 carrier-author space along **two orthogonal binary axes**: (a) **recurrence axis** {F=fresh-first-appearance, R=recurring-multi-appearance}, and (b) **vendor-locality axis** {internal=author-vendor-aligned-with-repo-vendor, cross=author-vendor-distinct-from-repo-vendor}. The four cells of the 2×2 partition are: F-cross (Sameerlite-class), F-internal (wiltzius-openai-class), R-internal (yuneng-berri-class), and R-cross (no exemplar yet observed in the visible W17 lookback — predicted W17 W-feature candidate when first observed).

## Definition: ACTRF (Author Cross-Tick Recurrence Frequency)

For any author `a` observed across a sequence of N consecutive addendum ticks, define:

**ACTRF(a, N) := count of addendum ticks in the window where `a` appears as a carrier-author / N**

ACTRF ∈ [1/N, 1.0] when `a` appears at least once in the window; ACTRF = 1.0 indicates `a` is present at every tick in the window (continuous-presence author); ACTRF = 1/N indicates `a` appears at exactly one tick (single-tick / fresh-class author).

For yuneng-berri across the Add.204-210 7-tick window: yuneng-berri appears at Add.204, Add.205, Add.206, and Add.210 (4 of 7 ticks). **ACTRF(yuneng-berri, 7) = 4/7 = 0.571**. This is the **W17 reference ACTRF value** for the R1-recurring-internal-vendor sub-cohort going forward.

For wiltzius-openai across the Add.204-210 7-tick window: wiltzius-openai appears at Add.209 only (1 of 7 ticks). **ACTRF(wiltzius-openai, 7) = 1/7 = 0.143**. This is the W17 reference ACTRF value for the F2-fresh-internal-vendor sub-cohort.

For Sameerlite across the Add.204-210 7-tick window: Sameerlite appears at Add.206 only (1 of 7 ticks). **ACTRF(Sameerlite, 7) = 1/7 = 0.143**. This is the W17 reference ACTRF value for the F2-fresh-cross-vendor sub-cohort.

## Two-axis partition of W17 carrier-author space

| | internal-vendor | cross-vendor |
|---|---|---|
| **fresh (F)** | F-internal: wiltzius-openai @ codex (Add.209), ACTRF=0.143 | F-cross: Sameerlite @ litellm (Add.206), ACTRF=0.143 |
| **recurring (R)** | **R-internal: yuneng-berri @ litellm (Add.204/205/206/210), ACTRF=0.571** | R-cross: NO EXEMPLAR (W-feature candidate) |

The 2×2 partition has **3 of 4 cells populated** in the visible Add.193-210 lookback. The empty R-cross cell would require a recurring author at one repo whose work crosses vendor boundaries (e.g. an author who appears at multiple ticks of litellm contributing only non-litellm-vendor provider integrations). **PROPOSES**: track future addenda for first R-cross emergence; when observed, will instantiate the **R-cross-vendor W17 W-feature**.

## Specific evidence

yuneng-berri (yuneng-jiang) timeline across Add.204-210 (per the addendum lineage):

| tick | present | mergeCommit (short) | PR# | surface |
|------|---------|---------------------|-----|---------|
| Add.204 | YES | (per Add.204 manifest) | (per Add.204 manifest) | infra / version bump |
| Add.205 | YES | (per Add.205 manifest) | (per Add.205 manifest) | infra |
| Add.206 | YES | (per Add.206 manifest) | (per Add.206 manifest) | infra |
| Add.207 | NO | — | — | (litellm silent, attribution-corrected per #446) |
| Add.208 | NO | — | — | (universal-silence MODE-X) |
| Add.209 | NO | — | — | (litellm not in recovery carrier-set) |
| Add.210 | YES | 9397409 / 934ecdc | #26961 / #26962 | [Infra] Bump Versions / [Infra] Promote Internal Staging to main |

yuneng-berri's appearance pattern across Add.204-210 is **{1, 1, 1, 0, 0, 0, 1}** — a **3-tick continuous-presence followed by 3-tick silence followed by 1-tick re-appearance**. The silence-gap of 3 ticks aligns exactly with the synth #446-corrected litellm silence chain Add.207-209, demonstrating the author's silence is **driven by repo-level silence, not by author-level disengagement** (yuneng-berri did not deviate to a different repo during the silence-gap; the litellm repo itself was silent).

wiltzius-openai (Tom) timeline across Add.204-210:

| tick | present | mergeCommit (short) | PR# | surface |
|------|---------|---------------------|-----|---------|
| Add.204-208 | NO | — | — | (no prior appearance in visible Add.193-210 codex carrier-history) |
| Add.209 | YES | fe05aca | #19474 | thread-store process-scoping |
| Add.210 | NO | — | — | (codex silent at Add.210) |

wiltzius-openai's appearance pattern across Add.204-210 is **{0, 0, 0, 0, 0, 1, 0}** — a **single-tick first-appearance** with no prior or post recurrence. Whether wiltzius-openai becomes a recurring-internal-vendor author at codex (transitioning F-internal → R-internal sub-cohort) is a Add.211+ open question.

Sameerlite timeline across Add.204-210:

| tick | present | mergeCommit (short) | PR# | surface |
|------|---------|---------------------|-----|---------|
| Add.204-205 | NO | — | — | — |
| Add.206 | YES | (per Add.206 manifest) | (per Add.206 manifest) | Vertex AI Anthropic provider integration |
| Add.207-210 | NO | — | — | — |

Sameerlite's appearance pattern is **{0, 0, 1, 0, 0, 0, 0}** — also single-tick. Per synth #441's framing, the Sameerlite doublet did not chain (0 follow-ups), which is consistent with the F-class sub-cohort definition.

## ACTRF and the synth #447/#449 triphase framework

Cross-referencing ACTRF with the descent-floor-spike-decay arc Add.204-210:

- **R-internal (yuneng-berri)** appears at the **descent phase** (Add.204/205/206) and the **decay phase** (Add.210), bracketing the trough/spike phases. R-internal authors are therefore **descent-and-decay-phase carriers** — they appear at the slow-attenuation phases but not the abrupt-transition phases.
- **F-internal (wiltzius-openai)** appears at the **spike phase** (Add.209) and nowhere else in the arc. F-internal authors are therefore **spike-phase carriers** — they participate in the abrupt single-tick rebound but do not sustain into the decay phase.
- **F-cross (Sameerlite)** appears at the **descent phase** (Add.206) only. F-cross authors in this arc behave like F-internal authors but at a different sub-phase.

This produces a **phase-author correspondence hypothesis**: R-internal authors carry the slow phases (descent, decay); F-class authors (both sub-cohorts) appear in single-tick bursts that may align with abrupt transitions. **PROPOSES** validating this correspondence across additional W17 arcs as they become observable.

## Falsifications and confirmations

- **CONFIRMS the synth #441 F2-fresh-cohort framing as a sub-cohort of a broader F-class** that includes both cross-vendor and internal-vendor variants (the latter introduced by Add.209 M-209.E).
- **CONFIRMS the Add.210 M-210.C R1-recurring-internal-vendor naming** — the R1 designation matches the ACTRF=0.571 high-recurrence observation for yuneng-berri at litellm.
- **PROPOSES the empty R-cross cell as a W17 W-feature candidate** — the absence of a recurring cross-vendor author in the visible Add.193-210 lookback is itself a structural observation: cross-vendor contributions appear to be **single-tick events** in W17, while recurring contributions appear to be **vendor-internal events**.
- **REFINES synth #429 historical maximum framing** by introducing an author-axis observable independent of the silence-chain repo-axis observable. ACTRF measures author-level persistence; silence-chains measure repo-level absence.
- **INDEPENDENT of the synth #447/#449 rate-axis observables**: ACTRF operates on the author membership axis, complementary to the rate, cardinality, and membership-overlap axes.
- **LINKS to synth #446 (EPF / enumeration-pipeline-fidelity)**: ACTRF computation requires accurate author attribution at each tick; the synth #446 attribution-correction at Add.207 affects the Add.207 author-set but does not affect the Add.204-210 ACTRF computation for yuneng-berri (yuneng-berri was not the disputed author at Add.207).

## Predictions

- **P-450.A**: at Add.211, yuneng-berri will re-appear with probability ~0.45 (R-internal authors typically chain 2-3 consecutive ticks per the synth #421 same-author intra-repo cadence framing); a 2-tick yuneng-berri chain Add.210-211 would extend the R-internal recurrence pattern.
- **P-450.B**: the **R-cross W-feature** will be observed within the next 20 addendum ticks with probability ~0.40 — moderate prior; cross-vendor recurring contributions exist in OSS broadly but are rare in the visible W17 lookback.
- **P-450.C**: wiltzius-openai will transition from F-internal to R-internal (≥2 codex appearances within Add.193-220) with probability ~0.50; if observed, the F-to-R transition velocity becomes a meta-observable for tracking author-cohort evolution rate.
- **P-450.D**: ACTRF distribution across all carrier-authors in the visible W17 lookback is right-skewed: ≥70% of authors will exhibit ACTRF ≤ 0.20 (single or double appearance), ≤10% will exhibit ACTRF ≥ 0.50 (high-recurrence backbone-author class). yuneng-berri at ACTRF=0.571 is therefore a **high-recurrence outlier** in the W17 author distribution.
- **P-450.E**: the **phase-author correspondence hypothesis** (R-internal authors carry descent/decay phases; F-class authors carry spike phases) will replicate in ≥2 of the next 3 observed descent-floor-spike-decay arcs.

## Relationship to prior synth notes

- **Extends synth #441** by generalising the F2-fresh-cohort framing into a 2×2 partition with two orthogonal binary axes (recurrence × vendor-locality). The synth #441 F2-fresh-cross-vendor sub-cohort becomes one of four cells.
- **Extends Add.209 M-209.E (wiltzius-openai)** by formalising the F-internal sub-cohort and placing it in the 2×2 partition.
- **Extends Add.210 M-210.C (yuneng-berri)** by formalising the R-internal sub-cohort with the ACTRF observable and the 2×2 partition placement.
- **Pairs with synth #447/#449 (RCRA / PRDC)** via the phase-author correspondence hypothesis — ACTRF on the author axis correlates with rate-trajectory phase on the rate axis.
- **Pairs with synth #448 (RCTC / MOR)** via the carrier-set membership axis — ACTRF tracks individual-author recurrence; MOR tracks set-level overlap. The two are complementary granularities of the same membership-axis structure.
- **Independent of synth #444 (EMR)**: ACTRF is an inter-tick author-axis observable; EMR is an intra-window temporal-density observable.

**End of W17 Synthesis #450.**
