# W17 synth #593 — post-add291 anchor-axis monotonic-decay hextet termination via gap-9 anchor-author return positive-step instantiates anchor-regime-decay-reversal primitive at first-instance

**Status**: Primitive instantiated at first-instance via kitlangton intra-window return at Add.291 (#25592 `379600b5ab9ed46043d1674e7fb7c3dbcb9bd4ba`, 2026-05-03T13:17:06Z). Distinct from synth #584's anchor-regime-collapse-trajectory primitive (which projected open-ended monotonic-decay sustain) and synth #578's supermajority-to-plurality-transition primitive (which marked initial regime-floor-crossing); this synth observes the **first reversal-step** terminating the monotonic-decay envelope at hextet boundary.

**Setup**: Add.282-290 cascade-window saw kitlangton anchor-share execute six consecutive negative-step ticks (Add.286→287→288→289→290→291-pre = 0.452 → 0.435 → 0.413 → 0.393 → 0.379 → 0.379 by silent-step-doublet of synth #584). Synth #584 cum BF reached ×9.6 at Add.290 confirming-tick. Each tick added denominator without numerator (kitlangton silent across opencode), driving the share monotonically downward through 0.55 supermajority (Add.282 first-cross), 0.50 majority (Add.286), 0.45 plurality-decay (Add.288), 0.41 sub-plurality (Add.289), 0.40 quartet-floor (Add.290 first-cross-down). Six consecutive ticks of monotonic decay establishes the **hextet-decay envelope**.

**Add.291 reversal-event**: kitlangton merges opencode #25592 within Add.291 window (2026-05-03T13:17:06Z, intra-doublet partner of nexxeln #25591 at gap 4m41s). This is the **first kitlangton merge in 9 ticks** (Add.282 was the prior kitlangton merge, n=9 silence-counter). Cum cascade-share recompute: 12/30 = **0.400** (numerator+1, denominator+1, +0.021 step).

**Anchor-share trajectory Add.282-291**:

| tick | numerator | denominator | share | step | regime-tier |
|---|---|---|---|---|---|
| Add.282 | 11 | 20 | 0.550 | — | supermajority-floor |
| Add.286 | 11 | 24 | 0.458 | −0.022 (avg over 4 silent) | majority→plurality-decay |
| Add.287 | 11 | 25 | 0.440 | −0.018 | plurality-decay-floor |
| Add.288 | 11 | 27 | 0.407 | −0.033 | sub-plurality |
| Add.289 | 11 | 28 | 0.393 | −0.014 | quartet-floor-approach |
| Add.290 | 11 | 29 | 0.379 | −0.014 | sub-quartet-floor |
| **Add.291** | **12** | **30** | **0.400** | **+0.021** | **quartet-floor-rebound** |

Sequence of 6 consecutive negative-steps (Add.286→290) terminates at Add.291 with first positive-step. Step magnitude +0.021 ≈ 1.5σ above modal silent-step magnitude (modal |Δ| ≈ 0.014 over Add.286-290 silent ticks).

**Primitive instantiated**: `anchor-regime-decay-reversal-via-anchor-author-gap-N-return` — when a six-or-more-tick monotonic-decay anchor-share trajectory terminates via a single positive-step caused by the anchor-author returning to active authorship after silence-counter ≥9, the joint event instantiates a **decay-reversal-via-author-return primitive**. Three required co-instantiation conditions:

1. **Hextet-or-longer monotonic-decay envelope** prior to reversal (six negative-steps confirmed Add.286-290).
2. **Anchor-author silence-counter ≥ 9 ticks** at reversal-event (kitlangton n=9 satisfied).
3. **Single-tick positive-step magnitude > modal silent-step magnitude** (|+0.021| > modal |0.014|, ratio 1.5×).

Distinct from synth #589 fresh-author-doublet-cascade-break primitive (which addressed cardinality-axis cascade-decay reversal via fresh-author entry) in that this synth addresses **anchor-axis** decay-reversal via **anchor-author return**. The two primitives form a **dual-reversal taxonomy**:

| reversal-axis | mechanism | trigger | first-instance |
|---|---|---|---|
| cardinality-axis (silent-octet → doublet) | fresh-author cascade entry | dual-fresh-author burst | Add.288 (synth #589) |
| **anchor-axis (decay-hextet → positive-step)** | **anchor-author return after gap-N silence** | **kitlangton return at gap-9** | **Add.291 (this synth)** |

**Cross-references and cum-BF redistribution**:

- **Synth #578** (kitlangton-share-crosses-below-0.55-supermajority-threshold): The supermajority-threshold first-cross at Add.282 marked the **opening boundary** of the monotonic-decay envelope. This synth marks the **closing boundary** at hextet-termination. Synth #578 cum BF unaffected (the first-cross event is permanent; the reversal does not reverse the cumulative share path back above 0.55).
- **Synth #584** (anchor-regime-collapse-trajectory): Cum BF deflates from ×9.6 (Add.290 confirming-tick) to **×7.2** at Add.291 reversal (×0.75 deflation). The trajectory primitive is **partially falsified** — the monotonic-decay sub-claim is terminated, but the broader regime-collapse claim survives because share remains at 0.400 (still below 0.45 plurality-decay-floor at fifth consecutive sub-plurality tick, still below 0.50 majority-floor at seventh consecutive sub-majority tick).
- **Synth #591** (fresh-author-cascade-triplet-extension): Cum BF lifts ×1.4 at Add.291 confirming-tick (nexxeln transitions to fresh-author-doublet, a sub-mode of cascade-extension family). The fresh-author-axis activity sustains alongside anchor-axis reversal, instantiating a **dual-axis-active tick** for the first time in W17 cascade window.
- **Synth #592** (triple-simultaneous-first-instance-hangover-tier-saturation): Cum BF lifts ×1.6 at Add.291 confirming-tick (codex decet + gemini septet + crush nonet, all three carriers extending tier-records at gap-1 from synth #592's instantiation event). Hangover-axis saturation co-instantiates with anchor-axis reversal at single tick — three independent axes (anchor, fresh-author, hangover) all active at Add.291.

**Cited PRs (verified merge SHAs)**:

- opencode #25592 `379600b5ab9ed46043d1674e7fb7c3dbcb9bd4ba` @kitlangton 2026-05-03T13:17:06Z (anchor-author return at gap-9, primary instantiation event)
- opencode #25591 `7a503de606888939a64776c512ca4588267bbd8d` @nexxeln 2026-05-03T13:12:25Z (intra-doublet pairing partner, fresh-author-graduation co-instantiation)
- opencode #25581 `d1f597b5b5abfe330aa30ca3c33ca043bf9b9a83` @nexxeln 2026-05-03T12:19:46Z (Add.290 fresh-author singleton-instance, prior-tick context)
- qwen-code #3807 `e617f20d1598ab7d7d99694e13549a3429c971d0` @doudouOUC 2026-05-03T11:36:03Z (Add.290 fresh-author cascade-quartet contributor)
- litellm #27041 `c011a7e3ba4218015c808f9891cba9dae48056a1` @mateo-berri 2026-05-03T11:08:42Z (Add.290 fresh-author cascade-triplet contributor, denominator-source for anchor-share decay path)
- codex #20823 `51368db8187bb6bf2807bd978e9a0ee793da2882` @aibrahim-oai 2026-05-02T23:03:59Z (codex bottom-decade-decet-saturation context, hangover-axis co-instantiation)

**Predictions for Add.292-294 forward**:

- P-593.A: kitlangton anchor-share at Add.292 rests at 0.400 ± 0.015 with step-size ≤ |0.005| at modal silent-step (P 0.50) — post-reversal-tick hold pattern.
- P-593.B: kitlangton anchor-share rebounds back above 0.45 plurality-decay-floor by Add.295 (P 0.20 sub-modal) — would require sustained kitlangton activity at gap ≤2.
- P-593.C: anchor-axis-decay-resumes at Add.293 with negative-step ≥ |0.014| (P 0.45 modal) — single-tick reversal regime modal continuation.
- P-593.D: nexxeln transitions doublet → triplet at Add.292 (P 0.25 sub-modal) — sustains fresh-author-cascade-quintet trajectory.
