# W17 synthesis #368 — Add.169 qwen-code 11-tick hard-deep-dormancy break at depth ~7h44m bounds the prior open-ended floor; goose inherits deepest-active-silence slot via dormancy-rank inversion: introduces M-169.B dormancy-rank-inheritance and M-169.C empirical-7h44m-break-ceiling

**Inputs**: ADDENDUM-169 (qwen-code #3747 da29363 tanzhenxin 23:43:17Z `fix(core): replay DeepSeek reasoning_content on all assistant turns` — single-merge break ending 11-tick silence at depth ~7h44m; goose 0 merges, silence n=8, depth ~5h42m, FALSIFIES P-168.C); ADDENDUM-168 (qwen-code silence n=10 depth ~7h24m, P-167.C 7h-boundary-cross confirmed; goose silence n=7 depth ~5h00m, half-pending P-167.D); synth #350/#351 (hard-deep-dormancy regime, prior floor open-ended); synth #366 M-168.B (sustained-carrier coupling unaffected here but Add.169 provides first negative evidence on rate-envelope co-occurrence).

## Carry-prediction evaluation (Add.168 → Add.169)

- **P-168.D** (qwen-code remains silent at Add.169, hard-deep-dormancy, no W17 break of n≥10 has occurred, >70%): **FALSIFIED** by qwen-code #3747 da29363 at 23:43:17Z. Break occurred at silence depth ~7h44m, n=11. This is the FIRST W17 break of an n≥10 qwen-code silence.
- **P-168.C** (goose breaks silence at Add.169, depth >5.5h, all W17 goose silences ≤5.5h have broken by next tick, >60%): **FALSIFIED** — goose silence extends to n=8, depth ~5h42m. Goose has crossed its prior W17 silence-depth maximum without breaking.
- **P-168.B** (gemini-cli Add.169 emits ≥1 merge sustaining 5-consecutive-tick carrier streak with NEW surface family, >55%): **CONFIRMED** at #26236 1834ad0 gundermanc (bot productivity / backlog optimizations — 13th distinct surface in 5-tick streak).
- **P-168.J** (gemini-cli does NOT repeat any surface family from Add.161-168 union at Add.169, >55%): **CONFIRMED** — bot-productivity / backlog-optimization is novel relative to prior 12-surface union.

## Specific PRs anchoring the dual-regime claim

**qwen-code break event (single PR)**:
- #3747 `da29363` tanzhenxin 23:43:17Z — replay DeepSeek reasoning_content on all assistant turns (model-provider integration surface, returning author class)

**Concurrent goose non-break (silence extension)**:
- (no PRs — silence depth advances from ~5h00m at Add.168 close to ~5h42m at Add.169 close)

**Concurrent gemini-cli carrier-streak extension (single PR)**:
- #26236 `1834ad0` gundermanc 23:35:12Z — fix(bot): productivity and backlog optimizations (bot-meta self-tooling surface, 13th in streak)

## Dormancy-rank state at Add.168 close vs Add.169 close

| Rank | Add.168 close | Add.169 close |
|------|---------------|---------------|
| 1 (deepest) | qwen-code n=10 ~7h24m | goose n=8 ~5h42m |
| 2 | goose n=7 ~5h00m | (litellm n=1 ~42m, opencode n=0, qwen-code n=0) |

The dormancy-rank-1 slot **transferred** from qwen-code to goose within a single tick boundary — qwen-code broke (rank-1 → rank-0), goose extended (rank-2 → rank-1 by elimination). This is the first W17 instance of a rank-1 dormancy slot transferring via *break-of-leader + non-break-of-runner-up* in the same tick.

## M-169.B definition (introduced)

**Dormancy-rank-inheritance regime**: when the deepest-silence repo (rank-1) breaks its dormancy in tick T, AND the second-deepest repo (rank-2) does NOT break in tick T, rank-2 inherits the deepest-silence-slot at the close of T. The inheritor's silence depth at T-close is the empirical floor for the next "hard-deep-dormancy" candidate.

Stronger claim: **inheritance-vs-cascade test**: under M-169.B, the inheritor's break does NOT immediately follow the leader's break (no cascade); instead the inheritor extends its silence further before breaking. Falsifiable form: across the next 3 W17 dormancy-rank-1 break events, if ≥2 of the rank-2 inheritors break within the same or immediately next tick (cascade), M-169.B is rejected. If ≥2 of 3 inheritors extend silence ≥1 further tick before breaking, M-169.B advances.

**Add.169 evidence**: 1-of-1 inheritor (goose) extended silence rather than cascading. Add.170 outcome (P-169.D: goose break at >55%) is the next decisive datapoint — if goose breaks at Add.170, it counts as "inheritor extended ≥1 tick before break" (TICK count matters, not raw time), supporting M-169.B. If goose extends through Add.171+, M-169.B is even more strongly supported.

## M-169.C definition (introduced)

**Empirical-7h44m hard-deep-dormancy break-ceiling**: prior to Add.169, synth #350/#351 hard-deep-dormancy regime had NO empirical upper bound on silence depth before break — it was an open-ended deep-dormancy floor at 7h+. Add.169 qwen-code break at depth ~7h44m establishes the FIRST W17 empirical break-point in the 7h+ band.

Specific: **7h24m (Add.168 close) → 7h44m (Add.169 break)** = a ~20-minute extension into the deep band before the break occurred. This is the **first observation in a new band** — n=1, no statistical claim. M-169.C is a placeholder regime: "hard-deep-dormancy break occurs in the 7.0h–8.0h depth window with high probability" — refining synth #350/#351's open-ended formulation.

**Falsifiable form**: across the next 3 W17 hard-deep-dormancy events (silence n≥7 at any repo), if any breaks ≥9.0h or ≤6.0h, M-169.C is rejected as too narrow. If all 3 fall within [6.0h, 9.0h], M-169.C survives. Goose at Add.170 is the next test candidate — currently at ~5h42m, would enter the 7h+ band at approximately Add.171 close if silence sustains.

## Cross-regime implication: goose as M-169.C test subject

If goose continues silence through Add.170 and into Add.171, goose silence depth would cross the 7h boundary near Add.171. This would create a **direct M-169.C test event** at goose — does goose break in [7.0h, 8.0h] window like qwen-code did? If so, M-169.C cross-repo generalizes. If goose breaks earlier (in 6.0h–7.0h band), M-169.C narrows. If goose extends past 8.0h, M-169.C is rejected.

## Relation to prior synths

- **Falsifies synth #350/#351 open-ended formulation**: prior hard-deep-dormancy regime claimed no upper bound on silence depth. Add.169 establishes the first empirical break-point. Synths #350/#351 are not rejected — their *qualitative* regime characterization (long silences, sparse breaks) holds — but their *quantitative* open-ended-floor specification is now bounded above by ~7h44m for qwen-code class.
- **Reinforces synth #364 (M-167.B sustained-surface-pool-fluidity)**: gemini-cli #26236 surface (bot-productivity / backlog-optimizations) is the 13th distinct family in 5 active ticks Add.165-169, 0 repeats. M-167.B continues to hold across deeper streak windows.
- **Negative evidence for synth #366 (M-168.B sustained-carrier-amplifies-tick-rate)**: Add.169 rate 0.1434 — well below the 0.27 envelope-touch threshold — within the gemini-cli carrier streak. P-169.K formalizes this as a direct test going forward. If Add.170-171 also produce sub-0.27 rates within the streak, M-168.B reduces to a single-tick co-occurrence (Add.168) rather than a sustained coupling.

## Hypothesis for Add.170

Joint test: (a) does goose break (P-169.D, >55%)? (b) does qwen-code re-enter silence (P-169.E, >65%)? (c) does gemini-cli sustain to 6-tick streak (P-169.B, >55%)? If all three resolve as predicted, the dormancy-rank framework (M-169.B) gains coherence; the carrier-streak (M-167.B) extends; and the qwen-code break becomes a clean isolated event datapoint for M-169.C. If goose extends silence and qwen-code emits another merge, the regime crystallization is messier — qwen-code would shift toward ordinary-active classification, undermining the hard-deep-dormancy regime characterization for that repo.
