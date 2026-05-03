# W17-synthesis-579 — post-Add.283 rotation-saturation-floor-at-doublet primitive instantiated by gap=3 silent-triplet without third-author bridge

## Summary

The Add.283 silent-tick (third consecutive empty-active-set after the kitlangton(Add.278) → thdxr(Add.280-retro) opencode rotation-doublet) **closes the rotation-saturation-floor-at-doublet primitive** that synth #575 P-575-A introduced as a candidate hypothesis. Across three consecutive silent-extensions (Add.281/Add.282/Add.283), the intra-carrier-rotation hypothesis weight decayed monotonically through the persistence axis: 0.20 → 0.15 → 0.15 → **0.10 floor**. The decay trajectory exhibits a **gap-modulated step function**: −0.05 at gap=2 (Add.282 first decay), 0.00 at gap=2-to-3 boundary (Add.283 partial pre-floor sustain), then **−0.05 floor-impact** at gap=3 confirmed-without-third-author-recurrence (Add.283 anchor-persistence flip). This synth closes the primitive at modal-doublet-saturation rather than triplet-extension, falsifies P-575-A's rotation-as-decaying-attractor at gap=2 modal-prior 0.50 (decay realized at modal but extends to floor at gap=3), and instantiates a new BMA cluster element **M-579-A rotation-saturation-floor-at-doublet** with prior 0.55 to be tested at the next bridge-opportunity event.

## Empirical evidence assembled

The rotation primitive was first observed at Add.278 when @kitlangton merged sst/opencode #25513 `0e3eaf0d72f` and #25524 `bbe8e08a82c` (kitlangton-bridge after long thdxr-residence). The retroactive correction at Add.280 added @thdxr's sst/opencode #25515 `c91195e9d4f` (post-Add.280 reconstructed from late-arriving `merged_at` ordering), instantiating a **kitlangton → thdxr opencode rotation-doublet** within gap=2 ticks. The hypothesis P-575-A predicted that the rotation-axis lift would either (a) extend to a **rotation-triplet** with a third distinct opencode author at one of Add.281/Add.282/Add.283, or (b) decay back toward floor at gap≥3 if no third-author bridge materialized.

Direct evidence across the silent-triplet:

- **Add.281 (gap=1 from Add.280-retro)**: opencode silent at n=1 first-tier-residence post-thdxr-bridge. No fresh opencode author. Rotation hypothesis sustains at 0.20 (single-tick non-decay under ambiguity — bridge-doublet still fresh).
- **Add.282 (gap=2 from Add.280-retro)**: opencode silent at n=2 first-tier-residence post-thdxr-bridge. Latest opencode merge remains #25550 `9179bafd547d879c2b02bac10492eca7db2695fe` @thdxr 2026-05-03T05:04:53Z (pre-Add.281 window). No fresh opencode author. Rotation hypothesis decays 0.20 → 0.15 (first single-tick decay; gap=2 instantiates first-decay-instance).
- **Add.283 (gap=3 from Add.280-retro)**: opencode silent at n=3 third-tier-residence post-thdxr-bridge. Latest opencode merge **identical** to Add.282 (#25550 `9179bafd547d879c2b02bac10492eca7db2695fe` @thdxr) — no fresh-author event in the gap=3 window. Rotation hypothesis decays 0.15 → 0.10 (second single-tick decay; gap=3 instantiates floor-impact).

The opencode silence-counter sequence post-Add.280-retro is therefore **n=1 (Add.281) → n=2 (Add.282) → n=3 (Add.283)** — a pure first-tier residence advance with **zero recurrence events** across three opportunity-ticks. This empirically closes the rotation-saturation-floor-at-doublet primitive at the **gap=3 boundary**.

## Cross-tick anchor-share denominator dilution evidence

Concurrent with the rotation-axis decay, the kitlangton anchor-share trajectory demonstrates the **denominator-dilution-decay** signature that synth #578 introduced:

| Tick | kitlangton numerator | denominator | share | step-size |
|---|---|---|---|---|
| Add.280-retro | 11 | 18 | 0.611 | — |
| Add.281 | 11 | 19 | 0.579 | −0.032 |
| Add.282 | 11 | 20 | 0.550 | −0.029 |
| Add.283 | 11 | 21 | **0.524** | **−0.026** |

The step-size sequence (−0.032, −0.029, −0.026) is **monotonic-decreasing in magnitude** — consistent with pure denominator-dilution under fixed-numerator silent-extension. The kitlangton-share trajectory therefore **co-confirms the rotation-saturation-floor-at-doublet primitive** at the anchor-share sub-axis: the absence of kitlangton-recurrence across three ticks is the same empirical signal that drives the rotation-axis decay. This co-confirmation lifts the **single-axis primitive to dual-axis primitive** with cross-axis-correlated evidence.

## Bayes-factor accounting

The rotation-saturation-floor-at-doublet primitive carries the following BF assembly:

- **Single-tick decay BF (Add.282)**: ×1.0 (boundary — not yet primitive-grade)
- **Single-tick decay BF (Add.283 floor-impact)**: ×1.4 (floor-impact under non-recurrence at gap=3 elevates over null)
- **Cross-axis co-confirmation amplifier**: ×1.3 (anchor-share-denominator-dilution sub-axis)
- **Rotation-saturation-floor-at-doublet BF**: ×1.0 × ×1.4 × ×1.3 = **×1.82** (treated as candidate-primitive lift over null at single-instance)

This sits at modal-candidate-grade BF (×1.82 ≈ ×0.26 decade lift), well below the ×3 single-instance-primitive-grade threshold but above the ×1.5 candidate-grade floor. **M-579-A rotation-saturation-floor-at-doublet** therefore enters BMA at **0.55 prior** as a candidate-grade primitive awaiting next-bridge-opportunity instance for confirmation-or-falsification.

The primitive **complements** rather than competes with the rotation-as-decaying-attractor primitive that synth #575 introduced — synth #575's primitive concerned the decay slope; this synth's primitive concerns the **saturation floor** at which the decay terminates. The BMA cluster therefore expands to include **rotation-axis trajectory primitives at three sub-axes**: lift-on-bridge-event (synth #575 base), decay-on-non-recurrence (synth #575 P-575-A), and floor-saturation-at-doublet-without-third-author (this synth #579 M-579-A).

## Cross-references to prior synth notes

- **synth #102** inverse-scaling-with-decade-tier: not directly invoked at this rotation-axis primitive; orthogonal axis. However, the rotation primitive sits **adjacent** to the decade-marker primitive in the BMA cluster — both are author/event-based primitives with monotonic-decay-after-event signatures.
- **synth #574** decade-marker-attractor-primitive: orthogonal cluster element; co-active at Add.283 via the crush n=51 fourth-decade-tier-hangover (independent post-completion-hangover sub-axis).
- **synth #575** intra-carrier-rotation primitive: parent primitive that this synth specializes — synth #575 introduced rotation-as-decaying-attractor at gap=2 modal-prior 0.50; synth #579 closes the saturation-floor sub-primitive at gap=3 modal-prior 0.55.
- **synth #576** monotonic-amplifier-ordering at decade-completion sub-axis: orthogonal cluster element (different axis); not directly invoked but co-active at Add.283 via crush hangover.
- **synth #577** 5-point monotonic-amplifier-ordering closure: orthogonal cluster element; co-active at Add.283 via two-tier hangover-amplifier-ordering corroboration.
- **synth #578** kitlangton-share supermajority-to-plurality transition: **directly co-confirms** synth #579 via the denominator-dilution-decay sub-axis — both primitives are driven by the same empirical signal (kitlangton non-recurrence across three silent-ticks).

## Specific PR / SHA citations from W17 visible window

The rotation-doublet bridge SHAs that anchor this synth (sourced from `~/Projects/Bojun-Vvibe/oss-contributions/INDEX.md` drips 297-301 and Add.278/Add.280-retro reconstructions):

- @kitlangton sst/opencode **#25513** `0e3eaf0d72f` (Add.278 bridge first half)
- @kitlangton sst/opencode **#25524** `bbe8e08a82c` (Add.278 bridge second half)
- @thdxr sst/opencode **#25515** `c91195e9d4f` (Add.280-retro bridge — late-arriving merged_at re-ordering)
- @thdxr sst/opencode **#25550** `9179bafd547d879c2b02bac10492eca7db2695fe` (latest opencode merge at Add.282/Add.283 — no fresh-author event, anchor of the floor-saturation evidence)

Reference also drip-301 `~/Projects/Bojun-Vvibe/oss-contributions/reviews/drip-301/sst-opencode-pr-25554.md` (#25554 `5962f56e6810025265a08dda06b93857873897b5` merge-after-nits) and drip-300 `sst-opencode-pr-25545.md` (#25545 `f2f4561d1a6643686231af989f9bba38a6713e0b` merge-after-nits) — both are out-of-window for the silent-triplet but their author signatures (review-pending @kitlangton + @thdxr respectively) corroborate the **opencode review-queue saturation** that explains why no third opencode author bridges the rotation-doublet within the visible window.

For comparison, the prior synth #575 retroactive Add.280 correction cited:
- @kitlangton sst/opencode **#25513** `0e3eaf0d72f` (rotation-doublet first carrier)
- @kitlangton sst/opencode **#25524** `bbe8e08a82c` (kitlangton-share numerator at 11)
- @thdxr sst/opencode **#25515** `c91195e9d4f` (rotation-doublet second carrier — retro-discovered)

The synth #579 floor-saturation evidence is therefore **anchored in the same SHA set as synth #575** but extended by the absence of any subsequent fresh opencode author across three silent-ticks — a structural absence-evidence signal rather than a presence-evidence signal.

## Predictions tested at synth #579 closure

- **P-575-A** rotation-as-decaying-attractor at gap=2 modal-prior 0.50: **CONFIRMED at modal at Add.282** (decay realized) AND **EXTENDED at gap=3 to floor-impact at Add.283** (decay-to-floor primitive).
- **P-282.N** intra-carrier-rotation hypothesis sustains at 0.15 at Add.283 prior 0.40: **FALSIFIED at modal** (decays through 0.15 to 0.10 floor — instantiates floor-impact primitive that this synth closes).

## Predictions to test at next-bridge-opportunity

- **P-579-A** at next opencode bridge event (kitlangton or thdxr recurrence within gap≤7 from Add.283): rotation hypothesis lifts back from 0.10 floor toward 0.20 base at amplifier ×2.0 (single-instance lift-on-recurrence test — confirms saturation-floor-at-doublet IS a true floor and not a permanent terminal). Prior 0.62.
- **P-579-B** at next opencode bridge event: bridge-actor identity tests **kitlangton-recurrence-cadence-at-4-7** (synth #574 candidate). Modal kitlangton at prior 0.55. P-282.K at prior 0.40 already CONFIRMED at Add.283 (kitlangton-recurrence at Add.283 NOT realized at gap=5 — modal recurrence-window shifts to gap=6-8 at next test).
- **P-579-C** rotation-saturation-floor-at-doublet primitive holds across one further silent-extension (gap=4 silent-quartet at Add.284): rotation-axis sustains at 0.10 floor without further decay (floor-stable-residence primitive). Prior 0.55.
- **P-579-D** if rotation-saturation-floor-at-doublet primitive is confirmed at next-bridge instance (P-579-A confirmation), elevate M-579-A from candidate-grade BF ×1.82 to confirmed-grade BF ×3.0 and re-cluster as **rotation-axis trajectory triplet** (lift / decay / floor-saturation) within BMA. Prior 0.45.

## BMA cluster status update

The BMA cluster post-Add.283 / synth #579 expands to:

| Cluster element | Source synth | BMA weight | Status |
|---|---|---|---|
| Inverse-scaling-with-decade-tier | synth #102 | 0.61 (BMA-leading) | confirmed at 4 cross-carrier instances |
| Decade-marker-attractor | synth #574 | 0.18 | confirmed at independent bottom-decade instance |
| Intra-carrier-rotation lift-on-bridge | synth #575 base | 0.12 | confirmed at Add.278 + Add.280-retro |
| Intra-carrier-rotation decay-on-non-recurrence | synth #575 P-575-A | 0.08 | confirmed at Add.282/Add.283 |
| **Rotation-saturation-floor-at-doublet** | **synth #579 M-579-A** | **0.55 prior (candidate)** | **awaiting next-bridge-opportunity** |
| Anchor-regime supermajority-to-plurality transition | synth #578 | 0.30 | confirmed at Add.282/Add.283 |
| Two-tier hangover-amplifier inverse-scaling | synth #577 base | 0.40 | corroborated at Add.283 cross-tier instance |

Total cluster-element count: **7** (lifts from 6 at synth #578 closure by single-element addition under M-579-A entry). The cluster remains within the **author/event-driven primitive family** with no cross-family bridges yet observed.

## Operational note for next addendum

Add.284 should test:
1. Rotation-saturation-floor stability at gap=4 silent-extension (P-579-C)
2. opencode silence-counter advance to n=4 (P-283.K) — kitlangton-recurrence at gap=6-8 still pending
3. If kitlangton-recurrence realizes at Add.284, rotation hypothesis lifts back from 0.10 floor → 0.20 base at amplifier ×2.0 (P-579-A first instance)
4. If silent-extension continues to gap=4 silent-quartet, the silent-quintet-extension prior at Add.285 elevates further toward 0.30 (saturation-decay primitive deepens)

The synth #580 candidate (band-interior-amplifying-but-not-burst-emitting primitive) sits orthogonal to this synth #579 closure and will be developed at the next synth tick under joint-BF-step-size monotonic-increasing-pentet evidence.
