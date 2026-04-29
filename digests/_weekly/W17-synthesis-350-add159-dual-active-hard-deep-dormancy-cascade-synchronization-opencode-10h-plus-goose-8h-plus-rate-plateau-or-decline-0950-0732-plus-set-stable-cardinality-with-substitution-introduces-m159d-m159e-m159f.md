# W17 Synthesis #350 — Dual-active hard-deep-dormancy class instantiation at opencode (10-11h sub-band, n=17, +17m23s 10h-crossing) and goose (8-9h sub-band, n=8, +31m32s 8h-crossing) at synchronized Add.159 hour-boundary cascade tick across non-coupled repos, plus per-minute rate trajectory {0.0175, 0.0518, 0.0950, 0.0732} terminates 3-tick monotonic uplift at Add.158 peak with 0.77× contraction at Add.159, plus active-set set-stable-cardinality {3,3} with single-element substitution (qwen-code↔gemini-cli around codex+litellm core), introducing M-159.D dual-cascade-synchronization class

**Class:** Dual-active hard-deep-dormancy cascade synchronization + recovery-rate plateau-or-decline regime + active-set substitution topology (refines #336, #342, #345; introduces M-159.D dual-cascade-synchronization class + M-159.E rate-plateau-or-decline class + M-159.F set-stable-cardinality-with-substitution class)

**Hypothesis:** At Add.159, the W17 dormancy landscape exhibits **three structurally novel co-occurring properties**: (i) dual-active hard-deep-dormancy class instantiation with **synchronized hour-boundary cascade ticks** across the non-coupled repos opencode (crosses 10h at +17m23s) and goose (crosses 8h at +31m32s), both within the same 54m40s window — first time in W17 that two distinct repos cross hour-boundaries within a single tick, refining the M-152.U cascade-monotonicity class with a multi-repo concurrency dimension; (ii) the post-zero-triplet recovery per-minute rate trajectory **{0.0175, 0.0518, 0.0950, 0.0732}** terminates the 3-tick monotonic uplift at Add.158 peak (0.0950) and enters a plateau-or-decline regime at Add.159 (factor 0.77×, first sub-1× factor) — refining the synth #344-derived recovery-shape characterization with a finite-uplift-budget property; (iii) the active-repo-count holds at 3 across Add.158→159 but with **full membership rotation** at the third slot (qwen-code drops, gemini-cli enters; codex+litellm core stable) — set-stable-cardinality with single-element substitution, structurally distinct from the +2 broadening at Add.157→158 and from null-substitution stability. Introduce **M-159.D dual-cascade-synchronization class** (≥2 distinct repos cross hour-boundaries within a single tick window without contesting emission), **M-159.E rate-plateau-or-decline class** (post-zero-triplet recovery rate trajectory exhibits factor <1× contraction within ≤4 ticks of the zero-triplet exit), and **M-159.F set-stable-cardinality-with-substitution class** (active-set cardinality stable across consecutive ticks with non-empty symmetric difference).

**Evidence:**
- **Dual-cascade-synchronization (M-159.D instance) at Add.159**:
  - **Opencode 10h crossing**: 16:50:06Z = post-Brendonovich #24908 `65ba1f6c` 06:50:06Z + 10h, falls **+17m23s into Add.159 window** (window opened 16:32:43Z); n=17 silence at depth 10h37m17s+; first ACTIVE M-152.U class member post-gemini-cli structural retirement at Add.157
  - **Goose 8h crossing**: 17:04:15Z = post-jh-block #8901 `37db6dec` 09:04:15Z + 8h, falls **+31m32s into Add.159 window**; n=8 silence at depth 8h23m08s+; second monotonic hour-boundary cascade tick (Add.158 = 7h crossing at +13m32s)
  - Both crossings uncontested by emission (opencode 0 in-window merges, goose 0 in-window merges)
  - Inter-crossing gap within Add.159: 17:04:15Z − 16:50:06Z = **14m09s** (the two hour-boundaries are temporally close but the underlying dormancy depths differ by 2h14m09s — opencode 10h37m17s+ vs goose 8h23m08s+)
  - The two repos have **independent dormancy origins** (opencode anchor 06:50:06Z, goose anchor 09:04:15Z, gap 2h14m09s) — synchronization is at the hour-boundary-tick level, not at the dormancy-anchor level
- **Rate-plateau-or-decline (M-159.E instance)**:
  - Post-zero-triplet rate trajectory Add.155→159 = **{0, 0.0175, 0.0518, 0.0950, 0.0732}** (5-tick sequence including the zero anchor)
  - Rate-uplift factors Add.155→158: undefined (0→0.0175), 2.96× (0.0175→0.0518), 1.83× (0.0518→0.0950)
  - Rate-uplift factor Add.158→159: **0.77×** (0.0950→0.0732) — first sub-1× factor in the recovery sequence
  - Add.158 P-158.E predicted rate ∈ [0.10, 0.20] for Add.159; actual 0.0732 is **−0.027 below the predicted band lower edge** but **+0.023 above the falsification floor 0.05** — predictively-narrowly-missed without falsification
  - 3-tick monotonic uplift run length: Add.156→158 = 3 ticks; terminated at Add.158 peak; current run length of plateau-or-decline = 1 tick (Add.159)
- **Set-stable-cardinality-with-substitution (M-159.F instance)**:
  - Add.158 active-set: {codex, litellm, qwen-code} (|S|=3)
  - Add.159 active-set: {codex, litellm, gemini-cli} (|S|=3)
  - Intersection: {codex, litellm} (|∩|=2 — "core")
  - Symmetric difference: {qwen-code, gemini-cli} (|△|=2 — single-element substitution at third slot)
  - Cardinality-delta: 0; membership-delta: 2 (one drop + one entry)
  - Per-repo emission cardinality stability: codex 2→2 (stable), litellm 1→1 (stable), qwen-code 1→0 (drop), gemini-cli 0→1 (entry)
- **Active-repo-count delta sequence Add.156→159**: {1, 1, 3, 3} — broadening +0/+0/+2/+0, with the +2 broadening at Add.157→158 followed by +0 stability with substitution at Add.158→159
- **Cross-repo activity matrix at Add.159** (silence/cascade/emit per repo):
  - codex: emit (2 merges, post-silence-break trailing tick — synth #349 M-159.A)
  - litellm: emit (1 merge, intra-repo emitter rotation — synth #349 control case)
  - gemini-cli: emit (1 merge, intra-repo author-recurrence — synth #349 M-159.B)
  - opencode: cascade (10h crossing, M-159.D)
  - goose: cascade (8h crossing, M-159.D)
  - qwen-code: silence (n=1, post-Add.158 reset)
- **Zero "neither emit nor cascade" repos** at Add.159 — every tracked repo is in either emission, hour-boundary cascade, or short-reset state

**Refines/falsifies prior:**
- **Refines #336 / #342**: M-152.U cascade-monotonicity property is multi-repo at Add.159 — no longer a single-repo trajectory (gemini-cli was sole instance through Add.157), now opencode (10-11h) + goose (8-9h) + the prior gemini-cli trajectory (retired at Add.157 14h band) form a **multi-instance cascade family** with synchronized hour-boundary ticks. The cascade-monotonicity property generalizes from "one repo per W-window" to "multiple non-coupled repos per W-window with synchronized hour-tick crossings".
- **Refines #345**: The post-flush re-quiescence shape characterized at Add.158 (gemini-cli 0 merges) is now seen as **one tick of carrier-selection interval**, with carrier-emergence at Add.159 (synth #349 M-159.B). Synth #345's "post-flush re-quiescence" framing is sharpened to "carrier-selection re-quiescence" with a 1-tick interval at the gemini-cli instance.
- **Refines synth #344 P-344.B implicit cadence-recovery shape**: The recovery rate trajectory's monotonic uplift is **finite-budget** with a 3-tick uplift maximum followed by plateau-or-decline. Synth #344's canonical low-amplitude shape applies to the **uplift-termination tick** (Add.158 ishaan-berri = first cross-repo canonical low-amplitude instance, also the rate-uplift peak), suggesting the canonical low-amplitude shape may be **structurally coupled to the rate-uplift termination boundary**.
- **Introduces M-159.D class**: Dual-cascade-synchronization — ≥2 distinct repos cross hour-boundaries within a single tick window without contesting emission. The M-159.D class is a multi-repo extension of the M-152.U cascade-monotonicity property, marking ticks where the cross-repo dormancy landscape exhibits coordinated deepening.
- **Introduces M-159.E class**: Rate-plateau-or-decline — post-zero-triplet recovery rate trajectory exhibits factor <1× contraction within ≤4 ticks of the zero-triplet exit, indicating a finite-budget uplift regime distinct from sustained-monotonic recovery.
- **Introduces M-159.F class**: Set-stable-cardinality-with-substitution — active-set cardinality stable across consecutive ticks with non-empty symmetric difference, structurally distinct from null-substitution stability (intersect = full set) and from broadening/contraction (cardinality-delta ≠ 0).

**Predictions:**
- **P-350.A** (M-159.D dual-cascade-synchronization persistence at Add.160): Both opencode and goose cross their next hour-boundaries within Add.160 window without emission — opencode 11h boundary at 17:50:06Z (+22m43s after Add.159 close), goose 9h boundary at 18:04:15Z (+37m08s after Add.159 close). **Falsifier**: opencode emission before 17:50:06Z OR goose emission before 18:04:15Z OR Add.160 width <37m08s (which would defer goose 9h crossing to Add.161, but still allows opencode 11h crossing within Add.160).
- **P-350.B** (M-159.D dual-cascade extends to triple-cascade if qwen-code crosses 2h at 18:03:16Z): If Add.160 width ≥35m53s AND qwen-code does not emit, qwen-code crosses 2h boundary at 18:03:16Z within Add.160 — instantiating a **triple-cascade-synchronization** with opencode 11h + goose 9h + qwen-code 2h all within a single Add.160 window. **Falsifier**: qwen-code emission before 18:03:16Z, OR Add.160 width <35m53s (which would defer the 2h crossing).
- **P-350.C** (M-159.E rate-plateau-or-decline persistence): Add.160 cross-repo per-minute merge rate ≤0.10 (sustains the plateau-or-decline regime), with the {0.0950, 0.0732, x} 3-tick sub-trajectory exhibiting either x ≤0.0732 (continued decline) or 0.0732 < x ≤ 0.10 (plateau). **Falsifier**: Add.160 rate >0.10 (re-uplift, contradicting the finite-budget hypothesis) OR Add.160 rate <0.025 (rapid collapse to silence regime).
- **P-350.D** (M-159.F set-stable-cardinality persistence at Add.160): Add.160 active-set retains the {codex, litellm} core AND active-repo-count ∈ {2, 3, 4}, with at least one symmetric-difference event from Add.159. **Falsifier**: Add.160 active-set drops codex OR litellm from the core (core breaks), OR active-set is identical to Add.159 (zero symmetric-difference, indicating set-frozen stability rather than substitution stability).
- **P-350.E** (rate-uplift-termination ↔ canonical low-amplitude coupling): The next post-zero-triplet recovery sequence in W18+ exhibits a synth #344 canonical low-amplitude silence-exit shape at the rate-uplift termination tick (the tick where the rate-uplift factor first crosses below 1×). **Falsifier**: next 3 post-zero-triplet recoveries in W18+ each have rate-uplift termination tick exhibiting non-canonical-low-amplitude shapes (e.g., M-158.C dual-merge OR M-157.D dual-author).

**Cited addenda:** ADDENDUM-159, ADDENDUM-158, ADDENDUM-157, ADDENDUM-156, ADDENDUM-155, ADDENDUM-152.

**Cited SHAs / PRs:**
- Opencode dormancy anchor: Brendonovich #24908 `65ba1f6c` 06:50:06Z (10h crossing at 16:50:06Z within Add.159)
- Goose dormancy anchor: jh-block #8901 `37db6dec` 09:04:15Z (8h crossing at 17:04:15Z within Add.159)
- Add.159 codex emission: #19211 `cecca5ae` (iceweasel-oai), #20123 `df966996` (cassirer-openai)
- Add.159 litellm emission: #26730 `9b3cd5ca` (yassinkortam)
- Add.159 gemini-cli emission: #26198 `2cf0c75a` (adamfweidman)
- Add.158 active-set instantiation: #20082 `91ca551d`, #20172 `1c420a90` (codex), #3647 `9861114f` (qwen-code), #26739 `ea275659` (litellm)
- Predecessor anchors: Add.156 sha=2bd78aa, Add.157 sha=5c25238, Add.158 sha=968811f
