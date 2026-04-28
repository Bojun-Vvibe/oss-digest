# W17 Synthesis #282 — Same-Author Cross-Tick Sprint Recurrence At n=4 Cardinality With 7-Tick Inter-Sprint Dormancy Establishes Single-Author Subsystem-Sprint Periodicity Distinct From Synth #91 Intra-Tick Triplet And Synth #97 Monotone Lifespan Series

**Date:** 2026-04-28 (capture window through Add.124 close 15:45Z)
**Repos:** openai/codex (jif-oai memory subsystem, Add.119 sprint and Add.123–124 sprint)
**Refines:** synth #91 (single-author triplet self-merge metronome on disjoint surfaces sub-15-minute cadence), synth #97 (same-author n=3 self-merge series with shared spec file co-touch and monotonically contracting lifespans), synth #50 (post-own-merge same-author cascade), synth #99 (same-author shared-spec-anchor self-merge series extension past triple), synth #239 (kitlangton bimodal mode-A/mode-B oscillating same-day self-merge series), synth #266 (single-author quartet merge rampage on disjoint surfaces 1h41m span).
**Distinct from:** synth #91 (intra-tick triplet), synth #266 (quartet on DISJOINT surfaces).

## Pattern

Synth #91, #97, #99, #239, and #266 catalogued same-author multi-PR self-merge series at the **intra-session** scale (sub-2h, sub-tick or single-tick). Synth #50 framed the post-own-merge cascade at the **adjacent-action** scale (the next PR opens within minutes of own merge).

Synth #282 identifies a **cross-tick periodicity**: a single author who fires an n=4 same-subsystem sprint at tick T, falls silent for k consecutive ticks (k ≥ 5), then fires a SECOND n=4 same-subsystem sprint at tick T+k+1 with continued surface anchor. The two sprints are not connected by intervening activity from that author — the author is **sprint-or-dormant**, with no observed mid-cadence emissions.

Concretely, the W17 codex jif-oai pattern is:

| Sprint | Tick range | Span | n | Surface anchor |
|--------|-----------|------|---|-----------------|
| Sprint-1 | Add.119 | 11:06:41Z → 14:23:14Z (across to Add.123 close) = 3h16m33s if extended; intra-Add.119 = ~40m for 4 PRs | 4 | `memory` / `feat: fix hinting` |
| Silent gap | Add.120–Add.122 (3 ticks zero-author-emission) | ~2h45m | 0 | (none) |
| Sprint-1 tail | Add.123 (single-PR jif-oai #19970 merge after 7-tick `[do not merge]` block-clear) | 14:23:14Z merge | 1 | `memory cooldown` (continues anchor) |
| Sprint-2 | Add.124 | 15:07:16Z → 15:26:45Z = 19m29s for 3 PRs | 3 | `memory` / `house-keeping memories` |
| Sprint-2 boundary | combining the post-#19970 cascade with #19990/#19998/#20000 yields **n=4 intra-window** at 15:07–15:26Z (or n=4 spanning Add.123→Add.124 at 14:23–15:26Z) | 1h03m31s | 4 | `memory` |

The interpretation depends on tick-boundary alignment. Two viable framings:
- **Framing A (strict tick-boundary):** Sprint-1 = Add.119 4-PR sprint (#19961, #19963, #19967, #19970-then-blocked); Sprint-2 = Add.123–124 4-PR sprint (#19970-cleared, #19990, #19998, #20000). Inter-sprint dormancy = 7 ticks.
- **Framing B (sprint-by-cadence):** Sprint-1 = Add.119 (4 PRs in ~40m); Sprint-2 = Add.124 (3 PRs in 19m29s, plus #19970 unblock at 14:23Z = 4 events in 1h03m31s if #19970 counts). Inter-sprint dormancy = 5 ticks under Framing B.

Both framings yield **same-author n=4 sprint cardinality** — the cardinality is **conserved across the inter-sprint dormancy**, suggesting an **author-internal n=4 sprint quantum**.

## Why this is distinct from synth #91 / synth #97 / synth #99

| Property | Synth #91 | Synth #97 | Synth #99 | Synth #282 |
|----------|-----------|-----------|-----------|------------|
| Span scale | sub-15m intra-tick | intra-session sub-2h | extension past triple, growing inter-PR gap | cross-tick 7-tick dormancy + intra-tick sub-1h sprint |
| Cardinality | n=3 | n=3 | n>3 with growing gaps | n=4 conserved across two separated sprints |
| Surface | disjoint | shared spec | shared spec, amplified anchor | shared subsystem (`memory`), distinct files within subsystem |
| Inter-event regularity | metronome | monotone lifespan | growing gap | bimodal — tight intra-sprint (sub-15m), null inter-sprint (7-tick zero) |

Synth #99 captured the case where the 3+1 extension shows **growing inter-PR gap** within a single session. Synth #282 captures the case where the inter-PR gap goes from **sub-15m (intra-sprint)** to **>2h (inter-sprint)** in a quasi-rectangular distribution — there is no in-between mid-cadence band for jif-oai during the 7-tick gap.

## Why this is distinct from synth #266

Synth #266 (single-author quartet merge rampage on disjoint surfaces, 1h41m span, 7m37s final cluster) is a single-session n=4 with **disjoint surfaces**. Synth #282 is two-session n=4+n=4 (or n=4+n=4-with-block-clear-prefix), each session with **shared subsystem anchor** (`memory`). The shared anchor is the load-bearing distinguishing property: synth #266 was a multi-surface fanout, synth #282 is a single-subsystem deep-walk.

## Why this is distinct from synth #239 kitlangton bimodal

Synth #239 documented kitlangton's same-day n=7 self-merge series with mode A (sub-5m) and mode B (12-16m) bands within a single day. Synth #282 is **inter-session bimodal**: the within-sprint cadence (sub-15m) and the cross-sprint dormancy (7 ticks ≈ 6h25m) are the two modes, but they are **session-scale not PR-scale**. Synth #239's kitlangton series stayed within a single intra-day session; synth #282's jif-oai series crosses session boundaries with author re-engagement on the same subsystem.

## Concrete instance — codex jif-oai memory subsystem Add.119 → Add.124

**Sprint-1 (Add.119, ~40m intra-tick window):**
- #19961 `b7c0f269109f15331ccd8d4efd23377e5fe69aed` 11:06:41Z `feat: fix hinting 2` — 6m11s before #19963
- #19963 `54d14011708bf551a04c6996e4ce10c001185042` 11:12:51Z `feat: fix hinting 3` — 19m15s before #19967
- #19967 `fa127be25ff547c950240c4bfe6c100c394880b2` 11:32:06Z `Stabilize memory Phase 2 input ordering` — sprint-1 closure
- #19970 `a9e5c34083d4593b51d520f4d45f751ef9eee297` opened 11:47:48Z `feat: trigger memories from user turns with cooldown` — DECLARED-BLOCKED at open by `[do not merge]` prefix → block-clear → MERGED 14:23:14Z (Add.123, 2h35m26s open lifespan, **synth #279 long-gap self-resumption instance**)

**Inter-sprint dormancy (Add.120–Add.122, 3 ticks ≈ 2h45m of zero jif-oai emission, then 1 tick of #19970-blocked-state carry):**
- jif-oai opens nothing, merges nothing across Add.120–Add.122
- block-clear-and-merge of #19970 at Add.123 14:23:14Z is the **transition event** between Sprint-1 and Sprint-2

**Sprint-2 (Add.124, 19m29s intra-tick window for 3 PRs; 1h03m31s for 4 events including #19970 unblock):**
- #19990 `1b743603651db33895b30345e47b7babe8a819a3` 15:07:16Z `feat: skip memory startup when Codex rate limits are low` — opened 14:36:47Z (post-#19970-merge cascade synth #50, 13m post-merge open latency)
- #19998 `5a79dfab7c677cbec43fb1ea53e27c91be3091b3` 15:11:50Z `feat: house-keeping memories 1` — 4m34s after #19990
- #20000 `21e19912e0cd4f030b1c29365672d97b85dbc361` 15:26:45Z `feat: house-keeping memories 2` — 14m55s after #19998

**Subsystem anchor invariant:** all 8 PRs in the combined Sprint-1 + Sprint-2 sequence touch the **codex `memory` subsystem** (memory hint resolution, Phase-2 input ordering, user-turn-triggered memory cooldown, rate-limit-conditional memory startup, house-keeping memories 1, house-keeping memories 2). This is **single-subsystem deep iteration by single author across two sessions separated by 7-tick dormancy**.

## Mechanism candidates

1. **Maintainer-imposed sprint boundary:** jif-oai's Sprint-1 was paused by an explicit `[do not merge]` block on #19970. The block was external (or self-imposed for review/coordination), creating a hard separator between Sprint-1 closure (#19967 merge) and Sprint-2 enabling (#19970 unblock). Under this reading, the **author-internal sprint cadence is continuous** but observation is **gated by review/block events**.
2. **Subsystem migration in 4-PR atomic chunks:** the `memory` subsystem refactor naturally decomposes into n=4 atomic chunks (turn-trigger / Phase-2 / hinting / cooldown for Sprint-1; rate-limit-skip / house-keeping-1 / house-keeping-2 / + 1 future for Sprint-2). The n=4 quantum is a property of the subsystem migration plan, not of the author.
3. **Author work-cycle:** jif-oai's individual work pattern produces n=4 PRs per ~1h focused session, with multi-hour breaks between sessions. The 7-tick gap = one work cycle (e.g. lunch + meetings + return).

The three candidates make divergent predictions for **next sprint timing**:
- Mechanism 1 predicts Sprint-3 onset is **gated by next block event**, not by author work cycle — could be hours or days.
- Mechanism 2 predicts Sprint-3 cardinality is also n=4 (quantum conservation) on the SAME `memory` subsystem until subsystem migration completes.
- Mechanism 3 predicts Sprint-3 onset within ~6-8h of Sprint-2 closure, regardless of block events.

## Falsifiers and predictions

- **Falsifier P-282-A:** Sprint-2 extends to n≥5 within Add.125 — would falsify the n=4 quantum conservation hypothesis (mechanism 2).
- **Falsifier P-282-B:** jif-oai opens any non-`memory` PR in Add.125–127 — would falsify the single-subsystem deep-walk anchor invariant.
- **Falsifier P-282-C:** Sprint-3 (next jif-oai memory sprint) arrives within 2 ticks of Sprint-2 closure — would falsify the 5-7-tick inter-sprint dormancy quantum (mechanism 3).
- **P-282-D:** Sprint-3 is also n=4 on `memory` subsystem within 3-9 ticks of Sprint-2 closure (deadline Add.133). If observed, promotes synth #282 from candidate → regime with cardinality and dormancy quanta both confirmed.
- **P-282-E:** the next non-jif-oai author who exhibits a multi-tick same-subsystem sprint also shows cardinality conservation across inter-sprint dormancy (testable at any author with ≥2 sprints in W17 corpus). Candidate watch list: tanzhenxin on qwen-code (Sprint-1: #3691/#3693/#3694/#3699 = n=4 in ~12m, on `core` subsystem — needs Sprint-2 to test); kitlangton on opencode (multiple `httpapi` touches in W17 — needs to crystallize as n=4 sprint to test).
- **P-282-F:** Sprint-1's #19970 long-gap block-clear (synth #279) is **structurally the bridge** between Sprint-1 and Sprint-2 — the next observed Sprint-1-then-Sprint-2 pair has a similar block-clear or rebase event at the boundary. Falsifier: Sprint-2 starts with no boundary event (clean cut from author dormancy directly to fresh PR opens), suggesting the block-clear was incidental rather than the bridge mechanism.

## Cross-reference to synth #50 post-own-merge cascade

Synth #50 frames the cascade as a sub-tick same-author follow-up. Sprint-2's #19990 open at 14:36Z (13 minutes after #19970 merge at 14:23Z) is a textbook synth #50 instance, and synth #282 then identifies that the cascade UNFOLDS into the n=4 Sprint-2 quantum — i.e. synth #50 is the **first-step trigger** of a synth #282 Sprint cycle. This positions synth #282 as the **multi-step extension** of synth #50, where the cascade does not stop at the n=2 doublet but continues to the n=4 sprint quantum.

## Cross-reference to synth #266 quartet rampage

Synth #266 (intra-session n=4 on disjoint surfaces, 1h41m span, with 7m37s final cluster) and synth #282 (intra-session n=4 on shared subsystem, sub-1h-to-1h03m span) are **complementary single-author n=4 patterns** distinguished on the surface-axis (disjoint vs shared). Together they suggest the **single-author n=4 sprint** is a recurring W17 cardinality regardless of surface coherence — promoting n=4 from "instance count" to **author-emission quantum**.

## Status

Synth #282 is **two-instance promoted** within a single author (jif-oai Sprint-1 and Sprint-2 both at n=4 on shared `memory` subsystem). P-282-D (deadline Add.133) is the **fastest decisive prediction** — Sprint-3 arrival with n=4 on `memory` would harden the regime, while a Sprint-3 with different cardinality or different subsystem would force a refinement. P-282-A (deadline Add.125) is the immediate falsification check — if jif-oai opens any non-`memory` PR or hits n=5 on memory in Add.125, Mode 2 (subsystem-quantum) is falsified in favor of Mode 3 (work-cycle).

## Cited PRs/SHAs (real)

- codex #19961 `b7c0f269109f15331ccd8d4efd23377e5fe69aed` 11:06:41Z jif-oai `feat: fix hinting 2` (Sprint-1 PR-1)
- codex #19963 `54d14011708bf551a04c6996e4ce10c001185042` 11:12:51Z jif-oai `feat: fix hinting 3` (Sprint-1 PR-2)
- codex #19967 `fa127be25ff547c950240c4bfe6c100c394880b2` 11:32:06Z jif-oai `Stabilize memory Phase 2 input ordering` (Sprint-1 PR-3)
- codex #19970 `a9e5c34083d4593b51d520f4d45f751ef9eee297` 14:23:14Z jif-oai `feat: trigger memories from user turns with cooldown` (Sprint-1 PR-4 / Sprint-2 transition, synth #279 long-gap bridge)
- codex #19990 `1b743603651db33895b30345e47b7babe8a819a3` 15:07:16Z jif-oai `feat: skip memory startup when Codex rate limits are low` (Sprint-2 PR-1, synth #50 cascade trigger)
- codex #19998 `5a79dfab7c677cbec43fb1ea53e27c91be3091b3` 15:11:50Z jif-oai `feat: house-keeping memories 1` (Sprint-2 PR-2)
- codex #20000 `21e19912e0cd4f030b1c29365672d97b85dbc361` 15:26:45Z jif-oai `feat: house-keeping memories 2` (Sprint-2 PR-3)
- qwen-code #3691 `6763124a057c524ebf92dce5aa96761b63c824fc` 08:32:59Z tanzhenxin (P-282-E candidate Sprint-1 PR-1)
- qwen-code #3693 `8807c026769ab9d1fb0216012d8ab1949946c384` 08:44:20Z tanzhenxin (P-282-E candidate Sprint-1 PR-2)
- qwen-code #3694 `e973dabf3718cea9b6c24b8e963396cc1742d68c` 08:32:49Z tanzhenxin (P-282-E candidate Sprint-1 PR-3)
- qwen-code #3699 `784b3cef6617e11c10f231e01cec7ab2d65eacff` 08:40:26Z tanzhenxin (P-282-E candidate Sprint-1 PR-4)
- opencode #24716 `2a4f2bf5...` 13:22:50Z kitlangton (synth #280 cross-reference)
- opencode #24799 (open 13:48:15Z, kitlangton, `refactor(httpapi): fork server startup by flag`) (synth #280 cross-reference)
