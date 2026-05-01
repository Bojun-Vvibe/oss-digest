# W17 Synthesis #480 — Multi-PR burst sub-class B taxonomy refinement: Add.225 codex 5-PR burst (jif-oai/etraut-openai/pakrym-oai 3-author distribution, max-author-fraction 0.40, surface-class-diversity 5/5) anchors maximally-spread sub-class B variant; surface-spread × concentration-ratio × post-burst-silence-chain-length joint distribution thesis

**Trigger**: Add.225 P-225.N flagged synth #480 to formalise the **multi-PR burst sub-class B taxonomy refinement** using the Add.225 codex 5-PR burst as a **maximally-surface-spread anchor** (5 PRs across 5 distinct surface classes: feat-config, refactor-internal, semantic-loop, a11y, build-infra; 3 unique authors with max-author-fraction 2/5 = 0.40). Per synth #93 author-pool framework, multi-PR bursts decompose into sub-classes:
- **Sub-class A (single-author concentration burst)**: All PRs by one author, max-author-fraction = 1.0
- **Sub-class B (multi-author distributed burst)**: ≥2 authors, max-author-fraction < 1.0
- **Sub-class C (mixed first-appearance + recurring burst)**: ≥1 first-appearance debut + ≥1 recurring author

This synth refines sub-class B with a **two-axis taxonomy** (concentration-ratio × surface-spread) and proposes a joint distribution thesis correlating burst structure with post-burst silence chain length.

**Context (Add.225 codex burst as maximally-spread sub-class B anchor)**: Per ADDENDUM-225 M-225.B, the Add.225 codex burst structure:
- PR count: 5
- Author count: 3 (jif-oai 2 PRs, etraut-openai 2 PRs, pakrym-oai 1 PR)
- Max-author-fraction: 2/5 = 0.40 (low-concentration sub-class B variant)
- Surface classes: 5 distinct (feat-config, refactor-internal, semantic-loop, a11y, build-infra) — surface-spread = 5/5 = 1.0 (maximally-spread)
- All authors visible-window-recurring (no first-appearance debut) — pure sub-class B (not B-mixed)

This is the **first observed pure-sub-class-B burst with maximally-spread surface diversity AND low-concentration author distribution** in the visible Add.193-225 window — a corner-case anchor for the sub-class B taxonomy.

**Two-axis sub-class B taxonomy**: The synth #93 sub-class B burst can be decomposed along two orthogonal axes:

**Axis I — Concentration-ratio (max-author-fraction)**:
- B.I.high (high-concentration): max-author-fraction ∈ [0.66, 1.0) — one dominant author with secondary contributors
- B.I.mid (mid-concentration): max-author-fraction ∈ [0.50, 0.66) — two co-dominant authors
- B.I.low (low-concentration): max-author-fraction ∈ [0.33, 0.50) — distributed multi-author burst (Add.225 codex burst lands here at 0.40)

**Axis II — Surface-spread (distinct-surface-classes / total-PRs)**:
- B.II.narrow (narrow-spread): surface-spread ∈ [0.20, 0.40) — most PRs share a surface class (e.g., 5 PRs all in build-infra)
- B.II.mid (mid-spread): surface-spread ∈ [0.40, 0.80) — some surface diversity but with concentration
- B.II.wide (wide-spread): surface-spread ∈ [0.80, 1.0] — maximally-spread (Add.225 codex burst lands here at 1.0)

The Add.225 codex burst sits at the **(B.I.low, B.II.wide) corner cell** — the maximally-distributed, maximally-spread sub-class B variant. This corner is the **least concentration-driven** burst structure: not one author's accumulated PR queue, not one surface area's accumulated changes, but a **broad-spread coincidence** of multiple authors finishing PRs across multiple surfaces in a narrow window.

**Joint distribution thesis (concentration × surface-spread × post-burst-silence)**: The synth #480 thesis is that the **(concentration-ratio, surface-spread)** joint cell predicts the post-burst silence chain length distribution, with three sub-hypotheses:

**T-480.A (queue-discharge thesis)**: Bursts in (B.I.high, B.II.narrow) corner reflect **queued-PR discharge events** — one author finished a backlog of PRs in one surface area. Post-burst silence is **short** (1-2 ticks expected) because the queue is exhausted but the underlying activity continues.

**T-480.B (broad-spread coincidence thesis)**: Bursts in (B.I.low, B.II.wide) corner reflect **independent-event coincidence** — multiple authors independently finishing PRs across multiple surfaces. Post-burst silence is **moderate** (2-4 ticks expected) because each author's PR pipeline operates independently and the next-tick activation depends on independent Poisson arrivals.

**T-480.C (campaign-signature thesis)**: Bursts in (B.I.mid, B.II.mid) corner reflect **coordinated-campaign signature** — 2-3 authors coordinating on a multi-surface change (e.g., a feature ship). Post-burst silence is **long** (4-6 ticks expected) because the campaign discharge marks the end of a coordinated push and the team rotates to other priorities.

**Add.225 codex burst classification under T-480**: The Add.225 codex burst at (B.I.low, B.II.wide) corner is classified under **T-480.B (broad-spread coincidence thesis)** with predicted post-burst silence chain length 2-4 ticks. Per Add.225 P-225.E, the predicted Add.226 codex re-activation probability is ~0.45, equivalent to expected silence chain length ~2 ticks before next activation — **consistent with T-480.B prediction at modal**.

**Visible-window cross-validation against prior bursts**: The synth #480 thesis can be partially validated against prior visible-window bursts. Inspecting the visible Add.193-225 window for prior 3+ PR codex/opencode/litellm bursts:

- **Add.204 codex 6-PR burst**: PR count 6, author count not exhaustively known but likely 2-3 (per prior notes etraut-openai and jif-oai recurring), max-author-fraction estimated 0.50-0.67, surface-spread estimated 0.50-0.83. Likely classification (B.I.mid or B.I.high, B.II.mid or B.II.wide). Post-burst silence chain Add.205-208 = 4 ticks before next codex activation (per visible window observations) → **consistent with T-480.C campaign-signature** if mid-mid, or T-480.B if low-wide.
- **Add.215 litellm 3-PR burst (krrish-related)**: PR count 3, max-author-fraction estimated ≥0.66 (single-dominant-author), surface-spread estimated 0.66 (mid). Classification (B.I.high, B.II.mid). Post-burst silence chain estimated 1-2 ticks → **consistent with T-480.A queue-discharge** at the high-concentration end.

The visible-window cross-validation provides **weak corroboration** for the T-480 sub-hypothesis discrimination but n=2-3 prior bursts is insufficient for strong validation; the synth #480 thesis requires multi-week cross-validation to attain Jeffreys-3 BF.

**Bayesian prior weighting on T-480.A vs T-480.B vs T-480.C**: Without sufficient cross-validation data, the prior weighting on the three sub-hypotheses depends on operational intuition about burst-resolution dynamics:
- T-480.A prior ~0.40 (queue-discharge is the most operationally-intuitive sub-hypothesis under team-velocity assumptions)
- T-480.B prior ~0.35 (broad-spread coincidence is plausible under independent-Poisson assumptions for multi-author teams)
- T-480.C prior ~0.25 (campaign-signature is the least operationally-frequent because coordinated multi-surface campaigns are rare)

The Add.225 codex burst falls in the (B.I.low, B.II.wide) corner where T-480.B has the dominant prior; the Add.226 codex behavior (re-activation timing) will provide the first decisive evidence on T-480.B specifically.

**Surface-class taxonomy formalisation**: For consistent surface-spread measurement across bursts, the synth #480 establishes a **canonical surface-class taxonomy**:

- **feat-provider**: Provider feature additions (e.g., new model support, new API parameter)
- **feat-product**: User-facing product feature additions (e.g., new CLI command, new UI element)
- **fix-product**: User-facing bug fixes
- **fix-build**: Build-system or CI fixes (e.g., cargo deny, npm publish)
- **refactor-internal**: Internal refactors with no user-visible behavior change
- **semantic-loop**: Agent-loop or core-semantic changes (e.g., turn-handling, tool semantics)
- **a11y**: Accessibility changes (e.g., screen-reader, keyboard navigation)
- **docs**: Documentation-only changes
- **test**: Test-only changes
- **deps**: Dependency-only updates

Under this taxonomy, the Add.225 codex burst surface classification is: feat-config (#20405) → maps to **feat-product** (effective config locks export/replay is a user-facing CLI/library feature); refactor-internal (#20540) → **refactor-internal**; semantic-loop (#20523) → **semantic-loop**; a11y (#20564) → **a11y**; build-infra (#20627) → **fix-build**. The 5 PRs map to 5 distinct canonical surface classes (feat-product, refactor-internal, semantic-loop, a11y, fix-build) — surface-spread = 5/5 = 1.0 confirmed under canonical taxonomy.

**Forward predictions under synth #480**:

- **P-480.A** — Add.226 codex behavior under T-480.B classification: predicted Add.226 codex re-activation probability ~0.45 (consistent with the synth #93 author-pool framework and the T-480.B 2-4 tick silence prediction). Confirmation if Add.226 codex active probability ∈ [0.35, 0.55]; falsification toward T-480.A if Add.226 codex active probability > 0.65 (suggesting queue-discharge pattern); falsification toward T-480.C if Add.226 codex active probability < 0.20 (suggesting campaign-signature long silence).
- **P-480.B** — Add.227-228 codex post-burst silence chain length: predicted modal silence chain length 2-4 ticks under T-480.B; predicted modal silence chain length 1-2 ticks under T-480.A; predicted modal silence chain length 4-6 ticks under T-480.C. The Add.226-228 forward window will provide decisive discrimination among the three sub-hypotheses.
- **P-480.C** — sub-class B taxonomy operational utility: predicted that the (concentration-ratio, surface-spread) joint cell provides BF ~×2-3 over the synth #93 single-axis sub-class B classification at burst-resolution-time prediction; falsification if the two-axis taxonomy provides BF < ×1.5 over single-axis at n=5 cross-validation bursts.
- **P-480.D** — canonical surface-class taxonomy stability: predicted that the 10-class canonical surface taxonomy provides ≥85% inter-rater reliability on burst surface-spread classification at n=10 cross-validation bursts; falsification if reliability < 70%.
- **P-480.E** — codex-specific burst signature: predicted that codex bursts (compared to opencode/litellm bursts) systematically lean toward the (B.I.mid or B.I.low, B.II.wide) cell because codex's multi-author OpenAI-staff team structure produces more independent-Poisson PR arrivals than the single-maintainer-dominant repos (litellm dominated by krrish-* authors, opencode dominated by core team but with narrower author pool). Falsification: codex bursts cluster in (B.I.high, B.II.narrow) cell more than 50% of the time.
- **P-480.F** — synth #481 angle: predicted synth #481 will examine the **codex-specific burst signature** (P-480.E thesis) using a multi-week cross-validation analysis of all visible codex bursts in the W17 window; will calibrate the T-480.A/B/C posterior weights using the cross-validation evidence.

**Cross-axis interaction with synth #93 author-pool framework**: The synth #480 sub-class B taxonomy refinement is **strictly compatible** with the synth #93 author-pool framework — synth #93 establishes the parent sub-class A/B/C taxonomy, synth #480 adds the (concentration-ratio, surface-spread) two-axis sub-decomposition within sub-class B specifically. The synth #480 framework can be extended to sub-classes A and C in future synthesis work if cross-validation supports the two-axis decomposition's operational utility.

**Cross-references**: ADDENDUM-225 (sha 78d52ba) M-225.B, P-225.E, P-225.N for the trigger observation of the codex 5-PR burst with maximally-spread surface diversity and low-concentration author distribution; ADDENDUM-204 for the prior 6-PR codex burst (used as visible-window cross-validation anchor); ADDENDUM-215 (sha approximate, prior litellm 3-PR burst) for the prior queue-discharge classification cross-validation; synth #479 (sha 9ff33d0) for the α₃ posterior calibration protocol (P-479.E flagged synth #480); synth #478 (sha d1f66bc) for the multi-axis BF post-Jeffreys-3-maintenance regime characterisation (parallel framework for ceiling-channel dynamics); synth #477 (sha 6041791) for the third-tier α₃ projection; synth #475 (sha ec33b41) for the two-step ceiling-stickiness BF-decay sub-law; synth #473 for R-cross-acceleration sub-mode; synth #472 for BMA-BF retraction transient-excursion classification; synth #471 for ceiling-stickiness thesis 2nd-tier channel-admission gate; synth #470 for dual-convention BMA framework; synth #468 for BMA-with-criterion-choice protocol; synth #463 for multi-axis BF framework; synth #462 for Frozen-MLE transition-axis; synth #459 for inter-episode gap distribution; synth #93 for first-appearance-author and multi-PR burst sub-class A/B/C parent taxonomy (sub-class B refined with two-axis decomposition here).

**End of W17 synthesis #480.**
