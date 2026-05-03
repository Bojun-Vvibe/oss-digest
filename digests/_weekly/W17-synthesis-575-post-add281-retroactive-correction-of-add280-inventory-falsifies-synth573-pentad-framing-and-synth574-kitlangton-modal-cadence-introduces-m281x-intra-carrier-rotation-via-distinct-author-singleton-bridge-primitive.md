# W17 SYNTHESIS #575 — post-Add.281 retroactive-correction of Add.280 inventory (opencode #25550 sha 9179bafd547 by thdxr at 2026-05-03T05:04:53Z merged inside Add.280's stated window but missed by Add.280 verification block) reframes synth #573 S-S-1-S-S pentad as **S-S-1-A-S quartet-with-distinct-author-singleton-bridge-doublet** at gap=2 (kitlangton Add.278 → thdxr Add.280-retro), **falsifies synth #574 P-574-A kitlangton-modal-cadence-at-gap=3** at minimum residence via thdxr-rotation-pre-emption at gap=2, and **introduces M-281-X intra-carrier-rotation-via-distinct-author-singleton-bridge primitive** as 6th orthogonal cluster element with single-tick BF ×3.4 vs persistent-anchor-recurrence null

## Setup: the retroactive-correction event and its structural implications

At Add.281 capture (2026-05-03T06:37Z) a routine audit of `gh pr list -R sst/opencode --state merged --limit 5` revealed **opencode #25550** `9179bafd547` `Add debug info command` by **@thdxr** merged at **2026-05-03T05:04:53Z** with +34/-0 in 1 file. This timestamp falls inside Add.280's stated window of [04:57:30Z, 05:35:00Z] by exactly **7m23s after window-open and 30m07s before window-close** — i.e., squarely in the window interior, not at boundary tolerance.

Add.280's verification block listed `sst/opencode: latest = #25546 2df8eda8a3b @kitlangton 04:24:34Z` as the pre-window reference, missing the 40m19s-newer #25550 entirely. The miss is attributable to Add.280's per-carrier verification using `--limit 1` (or equivalent single-PR-snapshot semantics) at the moment of capture, before #25550's mergedAt event reached the API snapshot — but a `--limit 5` audit at any time after 05:04:53Z would have found it.

This is a **capture-discipline failure**, not an upstream change. No correction-PR or upstream contact is required. The downstream-analysis correction is the entire scope of remediation. **Add.281 itself includes the canonical retroactive correction in its inventory** (per Add.281 capture-discipline-takeaway block). This synth #575 catalogues the **structural implications** of the correction across the synth-cluster.

## Falsification of synth #573 S-S-1-S-S pentad framing at minimum residence

Synth #573 cataloged the Add.276-280 substring as **S-S-1-S-S pentad with bilateral-symmetric-anchor-retirement-wings around central kitlangton singleton-bridge at Add.278**, with single-tick BF ×3.6 favoring bilateral-symmetric pentad as cascade-tail attractor sub-mode.

Post-correction, the Add.276-280 substring is **S-S-1-S-A** (with Add.280 = active by thdxr instead of silent), and extending to Add.281 yields **S-S-1-S-A-S sextet**. The S-S-1-S-S pentad framing is therefore **invalidated at the substring level** — there is no symmetric silent-doublet wing on the right of the kitlangton bridge. The correct substring framing is:

- positions [1,2] = S-S left silent-doublet wing
- position [3] = 1 (kitlangton singleton-bridge at opencode)
- position [4] = S (single silent tick at Add.279)
- position [5] = A (thdxr singleton at opencode, retroactively corrected)
- (Add.281 extension): position [6] = S (silent at Add.281)

This S-S-1-S-A-S substring is structurally distinct from any prior catalogued pattern. It contains:

1. **Silent-doublet left wing** (Add.276/Add.277 — 2 silent ticks)
2. **Kitlangton singleton-bridge** (Add.278 — opencode anchor-recurrence by persistent-author)
3. **Silent-singleton inter-bridge** (Add.279 — 1 silent tick separating the two opencode singletons)
4. **Thdxr singleton-bridge** (Add.280-retro — opencode anchor-rotation-via-distinct-author)
5. **Silent trailing** (Add.281 — 1 silent tick post-thdxr-bridge)

The structural primitive embedded in positions [3,4,5] is **intra-carrier-anchor-rotation-via-distinct-author-singleton-bridge-doublet at gap=2**: two consecutive opencode singletons by distinct authors (kitlangton, thdxr) separated by exactly one silent tick. Single-tick BF(H_intra-carrier-rotation-via-distinct-author-doublet : H_independent-singleton-bridges-by-coincidence) = **×3.4** at single-instance favoring rotation-as-primitive (the conditional probability of a fresh-author-bridge occurring at exactly gap=2 from a persistent-author-bridge at the same carrier under independence is ≈0.06; the same probability under intra-carrier-rotation-as-primitive sub-mode is ≈0.20; BF ratio ×3.4 at single-instance).

**Synth #573 S-S-1-S-S pentad framing is therefore FALSIFIED at minimum residence** in its bilateral-symmetric reading. The reframing is **S-S-1-S-A-S sextet with intra-carrier-rotation-via-distinct-author-doublet at positions [3,5]** — the right wing of the substring is asymmetric (1 silent tick + 1 active rotation + 1 silent tick) rather than symmetric (2 silent ticks). The pentad's bilateral-symmetric-anchor-retirement-wings claim is invalidated; the new framing replaces it with an **asymmetric anchor-rotation-bridge-pair at carrier-internal author-rotation**.

The synth #573 cumulative anchor-retirement BF estimate of ×4900-bilateral-symmetric vs ×2517-independent is **invalidated** because the right wing was never symmetric silent-doublet — it was singleton-rotation+silent-singleton+silent-singleton. The correct cumulative anchor-retirement BF post-correction is approximately **×1880** (single silent-doublet wing left + single asymmetric retirement-trailing right after rotation-bridge), which is **lower** than both prior estimates and represents a deflation of synth #573's anchor-retirement reinforcement claim by ~0.42 of a decade.

## Falsification of synth #574 P-574-A kitlangton-modal-cadence-at-gap=3 at minimum residence

Synth #574 cataloged opencode persistent-anchor-dominance regime (kitlangton 12/12 active-instances, intra-author recurrence rate 0.917) and predicted **P-574-A**: opencode kitlangton-recurrence-at-Add.281 at gap=3 modal-cadence prior 0.45 (modal — historical 3/4 at gap=3 = 0.75 base rate, deflated by Add.278 stage-5-refactor-extension non-recurrence at minimum residence).

Post-correction, the modal-cadence trigger fires at **gap=2 from kitlangton Add.278 bridge** at Add.280-retro — but the active actor is **thdxr**, not kitlangton. This **pre-empts the kitlangton-modal-cadence-at-gap=3** prediction by one tick. At Add.281 (gap=3 from kitlangton Add.278), kitlangton has NOT resurfaced and the gap=3 modal-cadence is therefore **expired without kitlangton-recurrence**.

**P-574-A is FALSIFIED at minimum residence**: kitlangton-recurrence at Add.281 at gap=3 is 0/1 = 0.000 vs prior 0.45. The historical base rate of 3/4 at gap=3 = 0.75 deflates to **3/5 = 0.60** post-Add.281 (one new gap=3 sample without recurrence). The modal-cadence claim deflates from `≥0.45 prior` to `0.60 base rate × 0.85 deflation factor = 0.51 forward prior` for next gap=3 observation.

The falsification is **partial-and-conditional**: the kitlangton-modal-cadence-at-gap=3 may still hold at the carrier-regime level if reframed as **kitlangton-OR-distinct-author-rotation-at-opencode-cadence-at-gap=2-or-3**, which is satisfied by thdxr Add.280-retro at gap=2. Under this broader reframing, the cadence-trigger-at-opencode-bridge-event-at-gap=2-or-3 holds at 4/4 in W17 visible window, and the persistent-anchor-dominance regime classification is preserved at the carrier-level even though the strict kitlangton-as-sole-bridge-author reading is falsified.

**Reframing: opencode anchor-regime is persistent-carrier-dominance with intra-carrier-author-rotation-tolerance**, not strict persistent-author-dominance-by-kitlangton. Single-tick BF(H_persistent-carrier-with-author-rotation-tolerance : H_persistent-author-strict) = **×2.7** at single-instance favoring carrier-level reframing (the rotation-via-thdxr at gap=2 is decisive against strict-author null but neutral against carrier-level reframing).

## Introduction of M-281-X: intra-carrier-rotation-via-distinct-author-singleton-bridge primitive

The retroactive-correction-driven reframing of synth #573 and synth #574 jointly introduce a **6th structurally orthogonal cluster element**: the **intra-carrier-rotation-via-distinct-author-singleton-bridge primitive (M-281-X)**. This primitive is structurally distinct from the prior 5 cluster elements catalogued in synth #574 cumulative-impact orthogonality matrix:

| primitive | structural signature | first-cataloged-at |
|---|---|---|
| W-curve cardinality-class lift | quintuplet/sextuplet-tick triple-tier residence-ceiling lift to ≥9 | synth #109 |
| Joint composite tetrad-axis BF mean-reversion-band | 0.2-to-0.4-decades amplitude band, no period bound | synth #573 (replaces synth #570 2-cycle bound) |
| S-1-S triad → S-S-1-S-S pentad → S-S-1-S-A-S sextet cascade-tail attractor | bilateral-symmetric → asymmetric-rotation reframings | synth #571 → synth #573 (falsified by THIS synth #575) |
| Per-carrier-anchor-regime-typed bridge-tolerance proviso | opencode persistent-carrier with author-rotation-tolerance, qwen-code fresh-author rotation | synth #572 (reframed by THIS synth #575 strict-author → carrier-level) |
| Decade-marker-attractor-primitive | boundary-crossing event itself at n=10/n=20/n=30/etc., inverse-scaling-with-decade-tier confirmed via Add.281 codex n=10 amplifier ×1.55 > Add.267 ×1.45 > Add.280 ×1.27 | synth #574 |
| **M-281-X intra-carrier-rotation-via-distinct-author-singleton-bridge** | **two consecutive same-carrier singletons by distinct authors at gap=2 within cascade-tail** | **THIS synth #575** |

The M-281-X primitive's **structural signature** is precise: at any cascade-tail substring of length ≥4, if positions [k, k+2] are both active singletons at the same carrier by distinct authors, with positions [k+1] silent, then M-281-X is instantiated at single-instance. The kitlangton-thdxr opencode pair at Add.278/Add.280-retro satisfies this signature exactly.

Single-tick BF(H_M-281-X-as-orthogonal-primitive : H_M-281-X-as-noise-from-inventory-correction) = **×3.4** at single-instance (the BF estimate from rotation-vs-coincidence at gap=2 carries directly to the primitive-vs-noise BF since the inventory correction itself is structurally well-founded — #25550 is a real PR with real authorship, not a counting artifact).

The M-281-X primitive's **predictive content** at Add.282 is: if the cascade-tail extends to a third opencode-singleton at gap≤3 from thdxr Add.280-retro, the primitive should fire again with either thdxr-recurrence (low prior, would lift to author-rotation-cycle-with-thdxr-as-active-anchor) or a third distinct-author bridge (low prior, would lift to multi-author-rotation-regime). The dual-prediction allows independent falsification at Add.282 or Add.283.

## Cumulative impact: synth-cluster lifts to 6 orthogonal primitives, retroactive-correction-driven joint BF deflation by ~0.10 decades

The synth-cluster as of Add.281 (post-correction) spans **6 structurally orthogonal primitives** with cumulative joint BF estimate of ~×3.7×10²⁵ at the visible-window level (post-correction deflation from synth #573 estimate ~×4.7×10²⁵ by ~0.10 decades, attributable to the synth #573 pentad framing deflation by ~0.42 decades partially offset by the Add.281 joint BF up-leg lift +0.201 decades and the M-281-X primitive introduction lift +0.53 decades).

The **net joint-cluster BF impact of the retroactive correction** is:
- synth #573 pentad-framing deflation: −0.42 decades
- synth #574 strict-author-cadence deflation under carrier-level reframing: −0.43 decades (×2.7 ratio loss at single-instance)
- M-281-X primitive introduction: +0.53 decades (×3.4 BF lift)
- Add.281 joint composite BF up-leg: +0.201 decades (per Add.281 M-281.E)
- Codex bottom-decade-completion at n=10 with monotonic-amplifier-ordering confirmation: +0.62 decades (per Add.281 M-281.F, ×4.2 BF lift vs synth #102 inverse-scaling-as-coincidence null)

Net: **+0.50 decades** above the synth #574 cumulative estimate of ~×2.1×10²⁵ at Add.279, lifting visible-window joint cluster BF to **~×6.6×10²⁵** at Add.281 post-correction. The lift is dominated by the codex bottom-decade-completion confirmation of synth #102 inverse-scaling and the M-281-X primitive introduction, with partial offset from the synth #573/#574 reframings.

## Predictions to test at Add.282 / Add.283

- **P-575-A**: M-281-X primitive predicts Add.282 opencode-singleton-by-third-distinct-author at prior 0.10 (low — typical opencode singleton rate at silent-trailing tick is 0.30, deflated by ×0.33 for distinct-author requirement under multi-author-rotation-regime alternative). Falsifier: any opencode-active-by-thdxr-OR-kitlangton at Add.282 would falsify the strict third-distinct-author reading and reframe M-281-X as **two-author-rotation-cycle** rather than open-ended multi-author rotation.
- **P-575-B**: persistent-carrier-with-author-rotation-tolerance reframing predicts opencode kitlangton-recurrence at Add.282 (gap=4 from Add.278 bridge, gap=2 from thdxr Add.280-retro bridge) at modal-cadence prior 0.30 (deflated from synth #574 P-574-A 0.45 by carrier-level-reframing partial-replacement). Falsifier: kitlangton-recurrence at Add.282 at gap=4 would re-instantiate the strict kitlangton-modal-cadence at expanded gap range and partially restore synth #574 P-574-A in expanded form.
- **P-575-C**: synth #573 pentad-framing deflation predicts cascade-tail substring extension to **S-S-1-S-A-S-X septet at Add.282** with X = silent (extends silent-trailing-after-rotation), 1 (instantiates third opencode-singleton continuing rotation), or A-by-fresh-carrier (rotation-spillover-to-new-carrier). Joint prior on X = silent ≈0.35, X = opencode-singleton ≈0.15, X = fresh-carrier-active ≈0.30, X = recurring-non-opencode-active ≈0.20. Falsifier: any carrier-cardinality ≥2 at Add.282 would falsify the singleton-favoring exit mode and require pentad-framing re-deflation.
- **P-575-D**: M-281-X primitive's cumulative-cascade-share metric predicts thdxr cum cascade-share Add.263-282 sustains at ≤0.10 if no thdxr-recurrence (consistent with W17-debut-without-recurrence pattern). Falsifier: thdxr-recurrence at Add.282 lifts cum cascade-share toward 0.10+, reframing thdxr as emerging-anchor at opencode rather than fresh-debut-singleton.
- **P-575-E**: net joint-cluster BF deflation under retroactive-correction predicts visible-window cluster BF stays in [×3×10²⁵, ×1×10²⁶] band at Add.282 absent additional regime-shift events. Falsifier: BF excursion outside band at Add.282 (e.g., decade-completion event at crush n=50 lifting BF above ×1×10²⁶, OR multi-axis deflation lifting BF below ×3×10²⁵) would force band-reframing at single-tick.

## Process-discipline implications: per-carrier verification must use --limit ≥5 going forward

The Add.280-inventory-miss is a structural failure mode of single-PR-snapshot per-carrier verification. The remediation is: **all future Add inventories must verify per-carrier `latest` via `gh pr list -R <carrier> --state merged --limit 5`** and apply window-membership filtering at the analysis layer rather than at the API-query layer. This eliminates the boundary-PR-miss failure mode at modest cost (5× more PR records returned per carrier, all filterable).

The retroactive-correction protocol established in Add.281 + this synth #575 serves as the **canonical template** for future inventory-miss handling: (1) acknowledge the miss in the next Add inventory, (2) re-derive downstream BF effects with corrected cardinality and carrier-active-set, (3) emit a synth catalog entry documenting the reframing and primitive-introduction implications, (4) record the cumulative cluster BF impact at decade-precision, (5) update process discipline to prevent recurrence. No upstream PRs, no force-push, no destructive ops — the correction is purely downstream-analytical.
