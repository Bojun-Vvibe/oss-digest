# W17 Synthesis #134 — Codex permissions/approval surface family extends to n≥6 via a disjoint-author angle (won-openai #19058); separately, wenshao self-merge pair on qwen-code loosens synth #91's "sub-15-minute" cadence envelope to "≤30 minutes"

**Window of evidence:** 2026-04-26 ADDENDUM-44 (04:51Z–05:18:50Z) with cross-reference to Add.40–43 and synth #126/#91/#94.

## Source PRs cited

**Surface-family escalation evidence (codex permissions/approval, n≥6):**

| # | PR | Author | Title | State |
|---|----|----|----|----|
| 1 | openai/codex#19606 | bolinfest | `permissions: make runtime config profile-backed` | OPEN, +1624/-672 |
| 2 | openai/codex#19395 | bolinfest | `permissions: finish profile-backed app surfaces` | OPEN, +269/-148 |
| 3 | openai/codex#19394 | bolinfest | `permissions: remove core legacy policy round trips` | OPEN, +230/-304 |
| 4 | openai/codex#19393 | bolinfest | `permissions: migrate approval and sandbox consumers to profiles` | OPEN, +367/-165 |
| 5 | openai/codex#19392 | bolinfest | `permissions: derive compatibility policies from profiles` | OPEN, +569/-439 |
| 6 | openai/codex#19058 | **won-openai** | `Add /auto-review-denials retry approval flow` | OPEN, +376/-8, updated 05:15:38Z |

PRs 1–5 are the bolinfest n=5 stack (synth #126 named this as the n=5 escalation). PR 6 is the new disjoint-author addition: **won-openai** (Won Park), single PR (not stacked), targeting `main`, surface = denial-retry approval flow. Lifespan-at-Add.44-update: 3d4h54m41s.

**Wenshao self-merge pair evidence (qwen-code):**

| PR | Surface | Created | Merged | mergeCommit |
|----|---------|---------|--------|-------------|
| QwenLM/qwen-code#3630 | `fix(telemetry): use safeJsonStringify in FileExporter` | 2026-04-26T04:04:46Z | **04:55:39Z** | `569cfe10fa…` |
| QwenLM/qwen-code#3620 | `fix(core): match DeepSeek provider by model name for sglang/vllm` | 2026-04-25T14:41:53Z | **05:17:34Z** | `29887ddfef…` |

Inter-merge gap: **21m55s**. Both base `main`. Both `wenshao`. Disjoint surfaces (telemetry serialization vs. provider-name matching).

## Pattern

**Part A: Permissions surface family extends to n≥6, escalating past synth #126's threshold.**

Synth #126 named the bolinfest n=5 stack as a single-author surface-family stewardship escalation past synth #121's n=4 threshold, with the additional flag that all 5 were OPEN with zero merges. Add.44 introduces the **n=6 case with a critical structural change**: the 6th PR is by a *different author* (won-openai), not by bolinfest.

The shape of n=5 (single-author stewardship) and n=6 (multi-author surface-family) are **categorically different** patterns:

- **n=5 (single-author):** explicable as one engineer's coordinated refactor across multiple PRs to keep individual PRs reviewable. The escalation risk is "review attention bottleneck on one author."
- **n=6 (multi-author):** the surface family is now **a contended subsystem**, not a single author's project. Two engineers are independently editing the codex permissions/approval subsystem with different goals (bolinfest: profile-backed config refactor; won-openai: denial-retry runtime flow). Their PRs do not share base branches and were not coordinated by author handoff (no cross-references in PR bodies).

The escalation matters because it implies a **secondary merge-conflict surface**: even if the bolinfest stack clears review (per synth #133's survival prediction), it must merge before or after #19058 in some order, and either ordering imposes a rebase cost on the loser. Under bursty review attention (#133), the loser may end up rebasing repeatedly without ever winning a clean merge window.

**Part B: Wenshao self-merge pair loosens synth #91's "sub-15-minute" envelope.**

Synth #91 originally named **"single-author triplet self-merge metronome on disjoint surfaces with sub-15-minute inter-merge cadence"** as a tight pattern, observed at n=3 with inter-merge gaps under 15 minutes. The Add.44 wenshao pair at 21m55s gap is **above the original 15-minute envelope but within a recognizable family**:

- Same author ✓
- Self-merge ✓
- Disjoint surfaces ✓ (telemetry serialization vs. provider-name matching)
- Same base branch (`main`) ✓
- n=2 (pair, not triplet)
- Inter-merge gap: 21m55s (above synth #91's <15min, within ~30min)

Synth #94 named the cross-PR same-product-surface diff-disjoint back-to-back merge pair as a related pattern. Add.44's wenshao pair sits between #91 (tight cadence triplet) and #94 (looser pair on related product surface). The natural revision is to **deprecate synth #91's specific 15-minute threshold** and replace with **"single-author back-to-back self-merge n≥2 on disjoint surfaces within ~30min"** as the looser, more recurring envelope.

This recalibration matters because it changes detection criteria forward: future addenda should flag any single-author n≥2 self-merge on disjoint same-base surfaces within 30 minutes, not gate on the 15-minute threshold.

## Why this is non-trivial

(i) **The n=5 → n=6 transition is qualitatively different, not just incrementally more.** It changes the surface family from "single-author stewardship" to "multi-author contended subsystem." Synth #126's framing ("escalation past n=4 threshold") implicitly assumed single-author continuation; the actual escalation broke that assumption. The interpretation of #133's survival prediction depends on this: a contended subsystem has lower survival probability of clean merge than a single-author stewardship at equal n.

(ii) **Synth #91's 15-minute threshold was an artifact of the original observation, not a structural feature of the pattern.** The Add.44 wenshao pair at 21m55s is a clear instance of the same phenomenon (single author drains a queue of disjoint fixes in a tight session) at a slightly looser cadence. The original threshold rejected this, which would have caused the digest to under-count the pattern's true frequency. Recalibrating to 30 minutes is a **measurement correction**, not a new pattern.

(iii) **Both findings interact with synth #133.** The bolinfest stack now has both (a) intrinsic stack-depth stall (#133) and (b) extrinsic merge-conflict competition from #19058 (this synth). The combined survival probability of the stack reaching merge within 8h is lower than either factor would predict alone.

## Falsifiable prediction

(P1, primary) **Within the next 8h (through ~13:18Z), at least one of bolinfest stack #19392–#19606 will require a *non-trivial* rebase that touches files also touched by won-openai #19058.** Operationalization: if any rebase of any bolinfest stack PR includes a commit message mentioning "conflict" or includes file changes overlapping with #19058's diff, this fires. If 0 such overlap is observable, the contended-subsystem reading is downgraded — the two PRs would be touching disjoint files within the broad permissions/approval surface and would not actually compete.

(P2, secondary, recalibration validation) **In the next 24h, the qwen-code repo will produce at least one more single-author n≥2 self-merge pair on disjoint surfaces with inter-merge gap < 30min**, by `wenshao`, `B-A-M-N`, or another active qwen-code author. Frequency-of-occurrence test for the recalibrated synth #91 envelope. If the recalibrated envelope yields zero hits in 24h, the looser envelope was over-loose and synth #91's original tighter form should be reinstated.

(P3, tertiary, surface-family ceiling) **The codex permissions/approval surface family will reach n=7 within 48h** via either (a) a third disjoint-author opening a PR on the subsystem, or (b) bolinfest opening a 6th stack PR, or (c) won-openai opening a follow-up. If n stays flat at 6 for 48h, the surface family has reached its current attention ceiling and we expect a merge-or-close event before further n growth.

## Cross-reference

- Surface-family lineage: **#121** (n=4 surface family threshold) → **#126** (bolinfest n=5 single-author stewardship) → **#134 (this synth: n=6 multi-author transition with won-openai #19058)**.
- Cadence-pattern lineage: **#91** (single-author triplet self-merge metronome, sub-15-min envelope) → **#94** (back-to-back merge pair on related surface) → **#134 (this synth: envelope loosened to ~30min via wenshao pair on qwen-code)**.
- Companion: **#133 (bolinfest stack survival prediction)** depends on this synth's contended-subsystem reading. If the merge-conflict overlap predicted in P1 above does NOT materialize, #133's survival probability of <0.3 over 8h becomes too pessimistic and should be revised upward.
- Cross-repo note: this is the first synth in the W17 lineage to apply the synth #91 cadence pattern to **qwen-code**, validating qwen-code's inclusion in the active scan set (added in Add.43). Wenshao is a recurring author whose behavior on qwen-code merits a dedicated tracking lane in future addenda.
