# W17 synthesis #385 — Add.178 breaks M-176.E novel-author-per-tick driver at 4-of-4 attempt via founder-as-terminator pattern AND decouples M-176.E author-novelty arm from M-176.E surface-novelty arm, falsifying P-384.A and P-384.F at the author-arm leaf

## Observation

ADDENDUM-178 records the regime-break event for one of the three Add.177 co-promoted regimes from synth #384, plus a structural decoupling that reframes M-176.E itself:

1. **M-176.E novel-author-per-tick driver arm BREAKS at 4-of-4 attempt**: bolinfest recurs as the codex Add.178 carrier (PR #20343 `ae863e72`). The post-Add.174-zero codex carrier-author union {bolinfest, abhinav-oai, etraut-openai} does NOT extend at Add.178 — bolinfest, the original M-176.E founder at Add.175, returns to terminate the streak. The carrier-set is closed at cardinality 3.
2. **M-176.E surface-novelty arm SUSTAINS to 4-of-4**: the bolinfest Add.178 emission surface is `ci: increase Windows release workflow timeouts` — a CI-infrastructure-tuning surface, structurally distinct from {permissions/active-profile-metadata, hook-state-persistence, core-protocol-decoupling}. Per-tick novel-surface introduction extends to 4-of-4 supporting ticks.
3. **M-176.E arm-decoupling**: the author-novelty arm (broken at 4-of-4) and surface-novelty arm (sustained at 4-of-4) **diverge in the same tick**. The synth #384 co-promotion treated both arms as part of a single M-176.E regime; Add.178 forces a structural revision: M-176.E is **two independent regimes that happened to co-reside in the Add.175-177 window**.

The synth #384 P-384.F prediction (≥1 of the 3 Add.177-promoted regimes breaks at Add.178) is CONFIRMED via the M-176.E author-arm break. The synth #384 P-384.A prediction (M-176.E author-arm advances to 4-of-4) is FALSIFIED. P-384.B (surface-arm advances to 4-of-4) is CONFIRMED. The two arm-leaf predictions split — confirming the arm-decoupling thesis empirically.

## Empirical PR-anchored evidence

### M-176.E author-arm break (founder-as-terminator pattern)

- **Add.175 codex carrier**: bolinfest #20095 `ac4332c0` `permissions: expose active profile metadata` — M-176.E founder. Surface = permissions/active-profile-metadata.
- **Add.176 codex carrier**: abhinav-oai #19840 `8f3c06cc` `Add persisted hook enablement state` — M-176.E 2-of-2 instance, novel author. Surface = hook-state-persistence.
- **Add.177 codex carrier**: etraut-openai #20329-20333 `b957d938` `Remove core protocol dependency [6/10]..[10/10]` (stack-squash) — M-176.E 3-of-3 promotion, novel author. Surface = core-protocol-decoupling.
- **Add.178 codex carrier**: bolinfest #20343 `ae863e72` `ci: increase Windows release workflow timeouts` — **founder recurrence**, terminates author-novelty streak at 4-of-4 attempt. Surface = CI-infrastructure-tuning (still novel).
- **Author union closure**: {bolinfest, abhinav-oai, etraut-openai} = cardinality 3, closed at Add.178. Recurrence event source = bolinfest (founder).
- **Inter-tick gap for bolinfest recurrence**: 3 ticks (Add.175 → Add.178). The recurrence pattern is **founder-recurrence-after-3-tick-absence** — single-instance pattern; promote to micro-observation, requires recurrence to elevate to candidate regime.

### M-176.E surface-arm sustenance

- **Surface trajectory Add.175 → Add.178**: permissions/active-profile-metadata → hook-state-persistence → core-protocol-decoupling → CI-infrastructure-tuning.
- **Cumulative surface union**: cardinality 4, zero recurrence across 4 ticks.
- **Layer-invariance** (per synth #383 dual-layer framework): the surface-arm 4-of-4 streak is layer-invariant. Add.175 / Add.176 / Add.178 each had 1 PR / 1 surface (layer-coincident). Add.177 had 5 PRs / 1 SHA / 1 surface (the stack-squash event preserved single-surface property). Surface-arm reads identically under both raw-PR and unique-SHA layers at all 4 ticks.
- **Surface-family analysis**: the 4 surfaces span 4 distinct subsystems (permissions, hook-state, core-protocol, CI). No surface-family repeat. The surface-novelty arm is **structurally robust** across the post-Add.174-zero codex carrier window.

### Arm-decoupling at Add.178

- **Same-tick split**: at Add.178, author-novelty arm = BROKEN (recurrence), surface-novelty arm = EXTENDED (4-of-4 novel). Same carrier event yields opposite arm outcomes.
- **Carrier-author surface-diversity**: bolinfest carries 2 structurally distinct surfaces across 2 non-consecutive carrier-events (Add.175 = permissions; Add.178 = CI-infrastructure-tuning). NEW micro-observation: **single-author multi-surface diversity is feasible within the M-176.A bounded-low-emission band** — the band's surface-novelty is not gated on author-novelty.
- **Independence proof**: the arm-decoupling is empirical at 1-of-1 instance. The arms were modeled as a single regime at synth #382-384 because Add.175-177 had layer-coincident author-and-surface novelty. Add.178 is the **first instance where the arms diverge** — the divergence is the proof of independence.

## Founder-as-terminator pattern

When a regime introduced by author A at tick T (the founder event) is later broken at tick T+k (k ≥ 1) by the recurrence of author A as the carrier of the breaking event, the regime exhibits a **founder-as-terminator pattern**. This is structurally distinct from regime breaks via:

- **Carrier-pool exhaustion** (no novel author available; arbitrary recurrence)
- **External regime intrusion** (a different mechanism overrides the carrier-novelty)
- **Tick-noise** (random author selection happened to recur)

The founder-as-terminator pattern is **structurally signed**: the same author book-ends the carrier-novelty streak. For M-176.E:

- **Founder**: bolinfest at Add.175.
- **Terminator**: bolinfest at Add.178.
- **Streak length**: 3 (Add.175 / Add.176 / Add.177).
- **Inter-event gap for founder**: 3 ticks (no carrier-event by bolinfest at Add.176 or Add.177).
- **Surface-diversity at termination**: founder's terminator-event carries a NEW surface (CI-infrastructure-tuning, not the founder's original permissions surface).

NEW M-178.B candidate: **founder-as-terminator pattern with surface-diversity at terminator-event** — a single-instance regime-break signature where the regime founder returns after k ≥ 2 absences to break the carrier-novelty streak while introducing a structurally distinct surface. Single-instance at Add.178; promote to candidate, requires recurrence to confirm at 2-of-2.

## Falsification ledger

- **P-384.A**: M-176.E author-arm advances to 4-of-4 at Add.178 (>30% prob). **FALSIFIED** — bolinfest recurrence broke the streak.
- **P-384.B**: M-176.E surface-arm advances to 4-of-4 at Add.178 (>35% prob). **CONFIRMED** — CI-infrastructure-tuning is novel.
- **P-384.F**: At least one of {M-176.E author-arm, M-176.E surface-arm, M-176.D synchronized-silence-advance} breaks at Add.178 (>55% prob). **CONFIRMED** — M-176.E author-arm break.
- **P-384.G** (regime-AND coherent configuration): single-arm break tests whether the 5-regime configuration breaks immediately. Add.178 breaks one M-176.E arm but the surface-arm and other regimes (M-176.A, M-176.C/M-177.B, M-176.D, M-178.A) remain resident. The configuration's regime-AND reading is **falsified at the strict reading** — the configuration partially survives a single-arm break. Refined reading: the configuration is regime-AND at the **regime-name level** (M-176.E as a single regime breaks the configuration), but regime-OR at the **arm level** (one arm break does not break the named regime). The arm-decoupling at Add.178 forces re-naming: M-176.E should be split into M-176.E-author and M-176.E-surface as distinct regime names going forward.

## Cross-regime synthesis

- **M-176.A** (synth #380 / #383, unique-SHA-layer bounded-low-emission band [0, 1]): advances to **8-of-8 supporting ticks** at Add.178 under the unique-SHA-layer reading. The Add.177 stack-squash event was a raw-PR-layer disturbance only; the unique-SHA layer holds. M-176.A is now the **most-supported codex regime** in the Add.171-178 window.
- **M-176.E-author** (renamed from M-176.E author-arm): broken at 4-of-4 attempt at Add.178. Streak length 3 (Add.175-177). Founder-as-terminator pattern. Future codex carriers may be drawn from {bolinfest, abhinav-oai, etraut-openai} or from a freer pool — the closed-set hypothesis is at 1-of-1.
- **M-176.E-surface** (renamed from M-176.E surface-arm): sustained at **4-of-4 supporting ticks** at Add.178. Structurally robust; the surface-novelty arm is independent of the author-novelty arm. Promotes from "co-promoted with author-arm" to **standalone 4-of-4 confirmed regime** at Add.178.
- **M-177.A** (synth #383, stack-squash dual-layer cardinality regime): does NOT recur at Add.178 (single-instance event at Add.177; CONFIRMS P-177.O). M-177.A remains a 1-of-1 single-instance regime; not yet promoted.
- **M-176.D** (synth #384, synchronized-silence-advance opencode + gemini-cli): advances to **4-of-4 supporting ticks** at Add.178 (opencode n=6→7, gemini-cli n=7→8, both +1). FALSIFIES P-384.C and P-177.N. M-176.D is structurally entrenched and may carry to 5-of-5 at Add.179 (P-178.N predicts break at >55%).
- **M-177.C** (Add.177 anomaly #2 candidate, codex-singleton active-set persistence): advances to **3-of-3 supporting ticks** at Add.178. Promoted from 2-of-2 candidate to **3-of-3 confirmed regime**. The active-set is at 3-tick maximum stagnation (zero symmetric-difference across 3 ticks).

## Predictions

- **P-385.A**: M-176.E-author broken status holds at Add.179 (no immediate restoration of author-novelty streak; carrier author drawn from {bolinfest, abhinav-oai, etraut-openai} or arbitrary pool); >70% prob.
- **P-385.B**: M-176.E-surface advances to 5-of-5 at Add.179 (codex Add.179 emission surface, if any, is distinct from {permissions/active-profile-metadata, hook-state-persistence, core-protocol-decoupling, CI-infrastructure-tuning}); >40% prob (mid-band — surface-novelty has held 4-of-4 but exhaustion of distinct subsystems is finite).
- **P-385.C**: M-178.B founder-as-terminator pattern does NOT recur at Add.179 (single-instance pattern; specific to bolinfest at this window); >70% prob.
- **P-385.D**: If M-176.E-author re-establishes a novel-author streak at Add.179 (codex carrier is a fourth novel post-Add.174-zero author), the new streak begins at 1-of-1 and the closed-set hypothesis is falsified; mutually exclusive with P-385.A; <30% prob (complement of P-385.A confidence).
- **P-385.E**: The 5-regime coherent configuration of synth #384 reduces to a **6-regime configuration** at Add.178 via the M-176.E split (M-176.A / M-176.C-extended-by-M-177.B / M-176.D / M-176.E-author-broken / M-176.E-surface-active / M-178.A); the configuration's regime-name count grew by 1 due to the arm-decoupling. Meta-prediction (no per-tick falsification test).
- **P-385.F**: Future regime-promotion notes should track M-176.E-author and M-176.E-surface as separate entries in the regime ledger; the synth #384 co-promotion of M-176.E should be retroactively re-classified as a co-promotion of M-176.E-author and M-176.E-surface (two independent regimes promoted in the same tick). Meta-bookkeeping prediction.
- **P-385.G**: When/if codex post-Add.168-sextuple post-burst-tail regime exits (codex emits ≥3 unique merge-commits in a single tick), the exit-tick author has >50% prob of being from {bolinfest, abhinav-oai, etraut-openai} (closed-set retention through regime exit; matches synth #384 P-384.I directionally); >50% prob.

## Diagnostic test schedule

- **Add.179**: P-385.A / P-385.B / P-385.C / P-385.D (per-tick reversion / extension tests).
- **Add.179+**: P-385.E (meta-bookkeeping; no per-tick test).
- **Conditional on codex post-burst-tail regime exit**: P-385.G.

## Cross-references

- ADDENDUM-178 `4b444a9` (codex bolinfest #20343 `ae863e72`, founder-as-terminator at 4-of-4 attempt; window 05:40:23Z..06:41:46Z; opencode n=7, gemini-cli n=8 synchronized-silence-advance to 4-of-4; litellm M-177.B-extended zero-tail length 3; codex-singleton active-set 3-of-3).
- ADDENDUM-177 `3ea9380` (M-176.E 3-of-3 promotion via etraut-openai stack-squash; M-176.D 3-of-3 promotion).
- ADDENDUM-176 `9744292` (M-176.E 2-of-2 candidate via abhinav-oai; M-176.D 2-of-2 candidate).
- ADDENDUM-175 `a76817f` (M-176.E founder bolinfest #20095; M-176.D 1-of-1 single-instance).
- Synth #384 `69f21d4` (3-of-3 co-promotion cluster: M-176.E author-arm + M-176.E surface-arm + M-176.D; M-177.B introduction). This synth retroactively re-classifies the M-176.E co-promotion as a 2-regime co-promotion (M-176.E-author + M-176.E-surface).
- Synth #383 `5c35af0` (M-177.A stack-squash dual-layer; M-177.A does NOT recur at Add.178 per P-177.O).
- Synth #382 `8b8871b` (M-176.E novel-author-per-tick driver introduction at 2-of-2 — broken at 4-of-4 attempt by this synth).
- Synth #381 `1d3a34d` (M-176.B max-width-min-count joint extreme — see synth #386 for the M-178.A non-consecutive-recurrence candidate).
- Anti-duplicate check: this synth introduces M-178.B (founder-as-terminator pattern with surface-diversity at terminator-event) as a NEW candidate. It does NOT collide with M-178.A (synth #386, non-consecutive max-width-min-count joint regime), M-178.C (synth #386, M-177.B-extended length-3+ sub-regime), M-178.D (Add.178 anomaly #9, post-period-3-cluster qwen-code open-silence), or M-178.E (Add.178 anomaly #4, codex-singleton 3-tick persistence — promoted to 3-of-3 confirmed regime under the existing M-177.C name). The renaming of M-176.E into M-176.E-author and M-176.E-surface is a structural revision rather than a new regime introduction.
