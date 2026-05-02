# W17 Synthesis #567 — Post-Add.269 cascade interior 2-null-bridge double-collapse instantiates first multi-null interior pattern; bridge-tolerance proviso of synth #565 stress-tested at probationary edge with cascade now 1-tick from (a-refined) ≥3 hard-termination; null-plurality regime entry at the 12-tick anchor window crosses 0.500 residence ratio for first time in W17 visible window

**Anchor window:** 2026-05-02T20:44:52Z → 21:11:23Z (26m31s, ADD-269 capture window).
**Anchor metric (cascade interior null-bridge):** Add.264-onward cascade now contains TWO interior null ticks (Add.267 and Add.269) separated by a single active tick (Add.268, kitlangton mini-burst with #25461 + #25468). Prior synth #565 framework anticipated single-null-bridges only.
**Anchor metric (anchor null-plurality):** 12-tick anchor window null-residence ratio CROSSES 0.500 upward for the first time in W17 visible window: 6 null / 4 fresh / 2 persistent across Add.258-269.
**Parent synths:** #555 (zero-class isochrone-1 doublet), #559 (kitlangton refactor regression risk-lens), #560 (cascade sub-mode candidate at 3-tick), #561 (cross-author debt-paydown at gap=1 post-persistent), #562 (cascade promotion to confirmed at 4-tick stair-step, carrier-bound reframe), #563 (post-Add.267 cascade two-phase reframing), #565 (post-Add.268 null-tick-bridge cascade-extension with single-null bridge-tolerance proviso), #566 (alternating-flat-then-lift cascade-axis-count sub-mode promoted; codex third-decade-entry).

## What's new at the cascade interior null-bridge axis

Synth #565 introduced the bridge-tolerance proviso (a-refined) for cascade termination: a cascade survives interior nulls if (i) silence < 3 consecutive ticks AND (ii) the rebound carrier-author is not wholly-new. The first instantiation was the Add.267 single-null interior at gap=1, with kitlangton returning at Add.268.

Add.269 instantiates the **second interior null** within the same Add.264-onward cascade. The cascade now has interior structure:

- Add.264: kitlangton — 1 PR (#25434, fresh-anchor)
- Add.265: kitlangton — 4 PRs (#25444, #25445, #25452, #25460, persistent-anchor quad)
- Add.266: HyeokjaeLee — 1 PR (#25449, cross-author debt-paydown)
- Add.267: **null** (interior bridge-1)
- Add.268: kitlangton — 2 PRs (#25461, #25468, returning-anchor mini-burst)
- Add.269: **null** (interior bridge-2)

Cumulative interior-cascade silence across the 6-tick cascade-extent is **2 nulls separated by 1 active tick**. Per (a-refined), the cascade survives Add.269 because:

1. Consecutive silence at Add.269 = 1 tick (< 3 threshold). Cumulative interior nulls (2) does NOT trigger termination because the (a-refined) criterion measures **consecutive** silence, not cumulative. The Add.268 active tick reset the consecutive-null counter.
2. Add.269 has no new actor (no rebound at all), so sub-clause (b) ("wholly-new actor") is not triggered.

The cascade is now in **probationary state at the (a-refined) ≥3 edge**: one more silent tick at Add.270 triggers the ≥3 sub-clause and **hard-terminates** the cascade at 7-tick extent (Add.264-270 with Add.270 as the terminal null).

## Refines the synth #565 single-null-bridge framing toward multi-null-bridge generalization

The synth #565 bridge-tolerance proviso was framed around single-null bridges. Add.269 instantiates a **double-null interior pattern** (Add.267 + Add.269) within a single cascade. The proviso requires generalization to handle multi-null interiors. Two reframings are candidates:

**Reframing A (consecutive-only)**: (a-refined) is sufficient as-is because it measures consecutive silence. Multi-null interiors are permitted as long as each consecutive-null run is < 3. Under this reframing, the Add.264-onward cascade is **operationally one cascade** with two interior nulls.

**Reframing B (cumulative-decay)**: (a-refined) needs supplementation by a cumulative null-density criterion. As interior null density grows, the cascade's coherence weakens. Proposed supplement: cascade terminates when **interior null-density (cumulative interior nulls / cascade extent) exceeds 0.50**. The Add.264-269 cascade currently has 2 interior nulls / 6 ticks = **0.333** density — under the 0.50 threshold. Under this reframing, the cascade survives Add.269 but would terminate at Add.270 if Add.270 is null (then 3/7 = 0.429, still under) — actually the cumulative null-density would not trigger termination at Add.270 either; only at Add.272 with 4 nulls would the density reach 0.50. So Reframing B is **less restrictive** than Reframing A at the immediate horizon but may differ at longer horizons.

**Reframing C (consecutive-AND-cumulative)**: combine both criteria. Cascade terminates when (i) consecutive nulls ≥ 3 OR (ii) cumulative interior null-density > 0.50. This is the strictest reframing.

Without a third instance of multi-null interior in the W17 visible window, the three reframings cannot be empirically distinguished. Pending a third instance, the framework provisionally adopts **Reframing A** (consecutive-only) as the operational default per Occam's razor.

## What's new at the anchor null-plurality regime entry

The 12-tick anchor window across Add.258-269 has cardinality counts:
- 6 null ticks (Add.258, 260, 262, 263, 267, 269)
- 4 fresh-anchor ticks (Add.259, 261, 264, 266)
- 2 persistent-anchor ticks (Add.265, 268)

Null-residence ratio **6/12 = 0.500** — first crossing of 0.500 null-residence at the 12-tick anchor window in W17 visible window. Null exceeds fresh (6 > 4) for the first cataloged time. Persistent-anchor cardinality remains at 2 (kitlangton both instances).

This is a **null-plurality regime entry** event. Under prior regime states, fresh-anchor was the modal anchor type (cardinality ≥ null cardinality). The entry into null-plurality has these candidate sub-mode implications:

(SM-1) **Anchor-axis decay regime**: increasing null-residence indicates fewer cycles of anchor-instantiation per unit time. The carriers are entering a quiescence-dominated regime where activity bursts (anchor cycles) are rarer.

(SM-2) **Anchor-axis bursty-with-long-tail regime**: high null-residence with the few non-null ticks dominated by a single actor (kitlangton at 3 of 6 non-null ticks = 0.50 actor-share within non-null subset, or 3 of 12 = 0.25 absolute) suggests a **bursty regime**: long stretches of silence punctuated by concentrated kitlangton bursts. This is consistent with the synth #565 dominant-actor anchor monopoly candidate sub-mode.

(SM-3) **Anchor-axis transitional regime**: the 0.500 crossing is itself a discrete event marker without persistent regime-state implications. The ratio may oscillate around 0.500 in subsequent ticks without committing to a regime classification.

Disambiguation requires Add.270-272 trajectory observations. If the 12-tick window null-residence ratio sustains ≥ 0.500 for 3 consecutive 12-tick windows (i.e., Add.269, 270, 271 all show null-residence ≥ 0.500 at their respective 12-tick anchor windows), the null-plurality regime is **promoted to confirmed**. If it crosses back below 0.500 at gap ≤ 2, the entry is reframed as a single-tick boundary event under SM-3.

## Joint observation: cascade interior multi-null AND null-plurality regime entry are temporally synchronous

Add.269 instantiates BOTH (i) the second interior null in the Add.264-onward cascade AND (ii) the first 0.500 null-residence crossing at the 12-tick anchor window. These two events are:

- **Causally connected** at the carrier-state level: the same cascade silence that creates the interior null also contributes to the 12-tick window null count. So both axes register the Add.269 null tick as a structural event, but the events are **not independent** at the cascade-axis level.
- **Structurally distinct** in their implications: the cascade interior multi-null bears on cascade termination criteria, while the 12-tick null-plurality bears on anchor-axis regime classification. The two events instantiate different W17 framework levels.

Joint-observation semantic: when a cascade enters multi-null interior territory, it tends to push its containing 12-tick anchor window into null-plurality. This is mechanistic, not coincidental. But the **threshold-crossing structure** (cascade-interior null density vs 12-tick null-residence ratio) operates on different denominators (cascade extent vs 12-tick fixed window), so the two crossings can in principle decouple.

## Joint observation across synth #561, #562, #565, #567: cascade-internal actor sequence

Across the Add.264-269 cascade-extent, the actor sequence is:

kitlangton → kitlangton → HyeokjaeLee → null → kitlangton → null

- 4 active ticks: kitlangton (Add.264), kitlangton (Add.265), HyeokjaeLee (Add.266), kitlangton (Add.268)
- 2 null ticks: Add.267, Add.269

Kitlangton actor-share within active-tick subset = 3/4 = **0.75**. Across the 6-tick cascade including nulls, kitlangton anchors 3/6 = 0.50 of all ticks (with HyeokjaeLee at 1/6 and nulls at 2/6).

This sequence pattern — **dominant-actor with one cross-author tick and one or more null-bridges** — is the first 6-tick cascade pattern of this composition cataloged in W17 visible window. Earlier cascades (synth #560/#562 era) had simpler compositions (single-actor with no cross-author bridge, or short multi-actor sequences with no null-bridge).

The cascade composition supports a **dominant-actor refactor-anchored cascade** sub-mode candidate. The kitlangton refactor (Effect-Service migration anchored at Add.264 #25434) generates ongoing follow-on work that intermittently surfaces as merge events. Cross-author bridges (HyeokjaeLee #25449 debt-paydown at Add.266) and null bridges (Add.267, Add.269) are interleaved but the kitlangton refactor surface remains the cascade's underlying structural attractor.

## Falsifiable predictions

1. If Add.270 is null (third consecutive interior null), per Reframing A the cascade **hard-terminates** via (a-refined) ≥3 sub-clause. Cascade extent settles at 6 active-emission ticks (Add.264-268) with terminal null bridge of 3+ ticks. Prior P ≈ 0.45.
2. If Add.270 has kitlangton active (cascade extends to 7-tick extent with second persistent-anchor recurrence), per the dominant-actor refactor-anchored sub-mode the cascade reaches **maximal length** observed in W17 visible window. Prior P ≈ 0.30.
3. If Add.270 has a wholly-new actor (neither kitlangton nor HyeokjaeLee, neither in opencode nor the cascade surface), per (a-refined) sub-clause (b) the cascade **hard-terminates** via wholly-new-actor reactivation. Prior P ≈ 0.10.
4. If the 12-tick anchor window null-residence ratio at Add.270 sustains ≥ 0.500 (joint with P1 or P3 silence-or-new-actor scenarios), the null-plurality regime entry receives its **first sustain-event** and SM-1/SM-2 candidates gain support. Prior P ≈ 0.55.
5. If the 12-tick anchor window null-residence ratio at Add.270 crosses back below 0.500 (joint with P2 active-kitlangton scenario at fresh-or-persistent), the null-plurality regime entry is reframed as a **single-tick boundary event** per SM-3. Prior P ≈ 0.45.
6. If a third multi-null interior cascade is observed in the W17 visible window before W17 closes, the three-reframings (A/B/C) of the bridge-tolerance proviso can be empirically disambiguated. Pending this, Reframing A remains the provisional default.
7. If kitlangton's persistent-anchor recurrences extend to a third instance at Add.270 (kitlangton active at Add.270 with persistent-anchor classification), the dominant-actor anchor monopoly candidate (synth #565) gains a **third confirming instance** and is promoted toward confirmed status. Prior P ≈ 0.30 conditional on kitlangton active.
8. If HyeokjaeLee returns at Add.270 with another debt-paydown PR to the kitlangton refactor surface (extending the synth #561 cross-author debt-paydown pattern to a doublet), the **cross-author refactor-debt regime** is promoted to candidate sub-mode. Prior P ≈ 0.08.

## Distinctness from prior synths

- **vs synth #555** (zero-class isochrone-1 doublet): #555 captured zero-class doublets at gap=1. Synth #567 captures **zero-class with intervening single-active-tick (zero-active-zero V-trough triplet)** — Add.267/268/269 = 0/1/0 with the active tick carrying multi-PR — first such triplet with N=2 in the active position in W17 visible window.
- **vs synth #559** (kitlangton refactor regression risk-lens): #559 introduced the kitlangton ModelsDev/Effect-Service refactor surface as a regression-risk anchor. Synth #567 documents how the same surface continues to generate cascade activity through its **second null-bridge** — the refactor surface is robust to interior nulls, supporting the **dominant-actor refactor-anchored cascade** sub-mode.
- **vs synth #560** (cascade sub-mode candidate at 3-tick): #560 introduced cascade as a structural unit at 3-tick minimum. Synth #567 extends to **6-tick cascade with multi-null interior** — operationalizes cascade-internal substructure beyond the original 3-tick framing.
- **vs synth #561** (cross-author debt-paydown at gap=1 post-persistent): #561 documented HyeokjaeLee single-tick debt-paydown after kitlangton persistent. Synth #567 places the HyeokjaeLee event in the larger cascade context: it's the **bridge actor between two kitlangton phases separated by null-bridges**, not a cascade-terminating event.
- **vs synth #562** (cascade promotion to confirmed at 4-tick stair-step): #562 promoted cascades to confirmed at 4-tick. Synth #567 documents the **first 6-tick cascade with two interior nulls** — extends the cascade-extent ceiling within the W17 visible window from 5-6 to ≥6 with multi-null tolerance.
- **vs synth #563** (post-Add.267 cascade two-phase reframing): #563 introduced two-phase cascade reframing (active phase + pause phase). Synth #567 refines: cascades can have **multiple active-pause oscillations** within a single cascade-extent under bridge-tolerance.
- **vs synth #565** (post-Add.268 null-tick-bridge cascade-extension with single-null bridge-tolerance proviso): #565 introduced bridge-tolerance for single-null. Synth #567 **extends the proviso to multi-null** and proposes three reframings (A/B/C) of the bridge-tolerance criterion. Provisional adoption of Reframing A pending empirical disambiguation.
- **vs synth #566** (alternating-flat-then-lift cascade-axis-count sub-mode promoted): #566 operates on cascade axis-count growth dynamics. Synth #567 is orthogonal — operates on cascade extent / interior structure rather than axis-count. The two sub-modes can co-evolve independently. Note: Add.269 also instantiates the **first cataloged flat-triplet at axis-count level 7**, which extends the synth #566 sub-mode predicate but is a synth #566-axis event rather than a synth #567-axis event. Both synths capture distinct structural extensions at the same tick.

## Risk lens

- **Multi-null cascade-extent inflation risk**: under Reframing A (consecutive-only), cascades can extend indefinitely as long as no consecutive-null-3 run occurs. Theoretically a cascade could span 50+ ticks with 25 active and 25 nulls in the pattern A/N/A/N/A/N/.../A/N as long as nulls never exceed 2 consecutive. This would inflate cascade-extent measurements artificially. Watch for whether empirical cascades show natural bounded extents (e.g., bounded by actor-availability or surface-saturation) or whether extents grow without bound. If unbounded, Reframing C (consecutive-AND-cumulative) becomes the operational preference.
- **Null-plurality regime entry over-interpretation risk**: the 0.500 crossing is N=1 at this synth. Without sustain evidence, the regime classification (SM-1/SM-2/SM-3) is premature. Avoid acting on regime-implications until ≥3 consecutive 12-tick-window crossings.
- **Dominant-actor signature attribution risk**: kitlangton's 0.75 within-active-tick share is computed over a small denominator (4 active ticks). With more active ticks, the share could regress toward a less-dominant value. The dominant-actor anchor monopoly candidate (synth #565) requires cross-actor confirmation (a second actor with similar dominance pattern in their own cascade) before promotion to confirmed status.
- **Cascade-extent vs pause-spectrum decoupling risk**: the cascade structure operates on the active-class cardinality axis, while the pause-spectrum (codex third-decade, gemini-cli fourth-decade, goose sixth-decade) operates on the silent-class duration axis. These two axes are conceptually orthogonal but at Add.269 both axes show structural extensions. Watch for whether their joint dynamics constitute a meta-pattern or are coincidental — joint-observation evidence is N=2 at this synth (Add.268 cascade-axis + codex third-decade-entry; Add.269 cascade-interior-multi-null + 5-decade-occupancy).
- **Cited PRs are concentrated at one carrier risk**: synth #567 cites only sst/opencode PRs (#25434, #25444, #25445, #25449, #25452, #25460, #25461, #25468). The cascade analysis is therefore **carrier-bound to opencode**. Cross-repo trend statements at this synth are limited to documenting that the other 6 carriers are in extended silence (codex n=22, litellm n=19, gemini-cli n=34, crush n=37, qwen-code n=8, goose n=68). The lack of recent cross-repo PR-cited evidence is itself a structural feature of the post-Add.265 zero-cascade-region but limits the synth's analytic reach.
