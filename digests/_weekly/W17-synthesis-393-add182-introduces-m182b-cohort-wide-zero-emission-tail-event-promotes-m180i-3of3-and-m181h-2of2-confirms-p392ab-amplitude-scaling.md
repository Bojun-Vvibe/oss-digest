# W17 Synth #393 — Add.182 introduces M-182.B cohort-wide zero-emission tick as a tail-event regime, promotes M-180.I post-doublet silence horizon to 3-of-3 confirmed, and confirms P-392.A/B from synth #392 amplitude-scaling sub-clause via simultaneous opencode+qwen-code horizon extensions

**Date**: 2026-04-30
**Anchor addendum**: ADDENDUM-182 (window 2026-04-30T08:33:18Z..09:13:12Z, 39m54s, 0 merges, 0.0000/min, active-set ∅)

## M-182.B: cohort-wide zero-emission tick — first occurrence in Add.158-182 corpus

**Background**: The Add.158-182 25-tick window had cardinality-1 minimum at Add.176 ({codex}), Add.178 ({codex}), Add.180 ({qwen-code}), Add.181 ({codex}). Cohort-wide silence (cardinality 0) did not occur in this window prior to Add.182. The per-repo class regime layer (M-181.J taxonomy from synth #392, two-axis discharge-mode + silence-horizon schema) had been established with per-repo discharge horizons that do not synchronize a priori — opencode post-doublet ≥2 (extended to ≥3 at Add.182), qwen-code post-quintuplet ≥1 (extended to ≥2 at Add.182), codex 0-1 ticks post-emission, litellm ≥7 ticks post-emission, gemini-cli ≥12 ticks (M-181.G binary-non-admitting), goose ≥21 ticks (M-174.A unbounded).

**Add.182 observation**: All 6 tracked repos simultaneously emit 0 PRs in the 39m54s window. This is the **first cohort-wide zero-emission tick in Add.158-182** — a 25-tick streak of cardinality ≥1 active-set is broken at tick 26.

**Structural interpretation**: The cohort-wide zero is the **superposition** of all per-repo discharge horizons being simultaneously in their silent phase. Conditional probability under the M-181.J two-axis taxonomy:
- opencode: silent (M-180.I/M-182.D extended horizon ≥3, currently at n=3)
- qwen-code: silent (M-181.H/M-182.D extended horizon ≥2, currently at n=2)
- codex: silent (post-amplitude-2 immediate discharge per M-182.C, n=1)
- litellm: silent (M-181.F/M-182.E zero-tail length 7+; binary-non-admitting per M-181.G)
- gemini-cli: silent (M-181.G binary-non-admitting at depth ~8h53m)
- goose: silent (M-174.A unbounded-deep-dormancy at depth ~14h53m)

**Three-class composition**: of the 6 silent repos at Add.182, 2 are in **active discharge horizons** (opencode, qwen-code), 1 is in **post-amplitude immediate-discharge** (codex), and 3 are in **structural non-emission** (litellm, gemini-cli, goose — the binary-non-admitting cohort per synth #392's M-181.G classification refined by synth-#393 promoting litellm to non-admitting per M-182.E length-7 zero-tail).

**M-182.B sub-regime hypothesis**: cohort-wide zero-emission ticks occur **only when the sum of per-repo discharge horizons aligns** — specifically, when at least 2 of the 3 actively-emitting repos (codex, opencode, qwen-code) are concurrently in their silent-discharge phase AND the 3 binary-non-admitting repos (litellm, gemini-cli, goose) are concurrently silent (which is their default state). Add.182 satisfies this: codex post-amplitude-2 (n=1), opencode post-doublet (n=3), qwen-code post-quintuplet (n=2) all align in the silent phase.

**Falsification ledger**:
- **CONFIRMS** P-392.A (synth #392 predicted opencode post-doublet silence ≥3 at >55%; observed n=3).
- **CONFIRMS** P-392.B (synth #392 predicted qwen-code post-quintuplet silence ≥2 at >65%; observed n=2).
- **FALSIFIES** P-181.A at the cardinality reading (predicted ∈ [1, 3] at >75%; observed 0).
- **PROMOTES** M-180.I from 2-of-2 to **3-of-3 confirmed regime** (post-doublet silence horizon ≥3 ticks for opencode).
- **PROMOTES** M-181.H from single-instance to **2-of-2 confirmed sub-regime** (post-quintuplet silence horizon ≥2 ticks for qwen-code).
- **PROMOTES** M-181.G binary-non-admitting tier-trigger membership to include **litellm** as a third confirmed non-admitter (joining gemini-cli + goose), via M-182.E length-7 zero-tail crossing the equivalent ~4h40m threshold without rebound.

## M-181.J.1 amplitude-scaling sub-clause: empirical update

**Synth #392 introduced** the amplitude-scaling sub-clause: post-rebound silence horizon scales with rebound amplitude, with per-class scaling factor. Initial estimates: opencode ~1 silence tick per rebound PR (2-PR rebound → ≥2 silence; from synth #392 era data); qwen-code <1 silence tick per rebound PR (5-PR rebound → ≥1 silence at synth #392 era).

**Add.182 update**:
- opencode: 2-PR rebound (M-179.G doublet) → **≥3 silence ticks** observed. Per-PR ratio revised upward to **~1.5 silence ticks per rebound PR**.
- qwen-code: 5-PR rebound (M-180.D quintuplet) → **≥2 silence ticks** observed. Per-PR ratio revised upward to **~0.4 silence ticks per rebound PR**.

**Updated sub-clause M-181.J.1.v2**: per-class scaling factor for post-rebound silence horizon:
- opencode (carrier-author-determined disjoint-surface doublet class): **~1.5 silence ticks per rebound PR**
- qwen-code (multi-carrier sub-minute same-author triplet + maximal-surface-dispersion + release-cut signature class): **~0.4 silence ticks per rebound PR**
- codex (mixed novel+recurring surface emission class): **~0.5 silence ticks per rebound PR** (post-amplitude-2 → 1 silence tick observed at Add.182, M-182.C)

**Cross-class observation**: the per-PR silence ratio inversely correlates with **discharge efficiency** — the qwen-code maximal-surface-dispersion class achieves the lowest silence-per-PR ratio (~0.4), suggesting that broadly-dispersed surface emissions discharge more rebound pressure per PR than concentrated carrier-author-determined doublets (~1.5). Codex sits in between (~0.5) with mixed surface emission.

## Specific PR/SHA citations supporting this synth

- **opencode rebound doublet** (M-179.G, basis for M-180.I → 3-of-3 promotion): Brendonovich #25074 + Brendonovich #25077, 4m22s apart at Add.179. Silence horizon at Add.180 (n=1) → Add.181 (n=2) → Add.182 (n=3) confirmed.
- **qwen-code rebound quintuplet** (M-180.D/E/F/G, basis for M-181.H → 2-of-2 promotion): yiliang114 #3615 `49e462c0`, #3618 `23e76ff2`, #3764 `bc322985` (44s sub-minute triplet); tanzhenxin #3727 `6c71b6b0`; qwen-code-ci-bot #3766 `3f0b4717` (release-cut signature) at Add.180. Silence horizon at Add.181 (n=1) → Add.182 (n=2) confirmed.
- **codex post-amplitude-2 immediate discharge** (M-182.C basis): Add.181 etraut-openai #20334 `a73403a8` + jif-oai #20246 `c37f7434` (low-amplitude 2-PR tick) → Add.182 zero. The amplitude-conditional discharge horizon is now empirically established for codex low-amplitude ticks.
- **litellm sustained silence** (M-182.E basis for binary-non-admitting promotion): n=7 ticks Add.176-182, depth equivalent ~4h40m+ with no rebound across P-177.A through P-181.E predictions all falsified (7-of-7 falsification streak).
- **gemini-cli sustained silence** (M-181.G binary-non-admitting reinforcement): n=12 at depth ~8h53m, P-172.F through P-181.F all falsified (10-of-10 falsification streak).
- **goose sustained dormancy** (M-174.A 11-of-11 promotion): n=21 at depth ~14h53m, M-169.B dormancy-rank-inheritance at 13-of-13.

## P-393.X anchor predictions

- **P-393.A**: M-182.B cohort-wide zero-emission tick recurs within next 10 ticks at <25% (tail event; per-repo discharge horizons unlikely to re-align so quickly given codex 0-1 tick discharge horizon).
- **P-393.B**: opencode post-doublet silence horizon extends to ≥4 ticks at Add.183 at >40% (M-180.I/M-181.J.1.v2 trajectory: 1.5 per-PR scaling implies ≥3 lower bound already met; further extension under per-tick decay).
- **P-393.C**: qwen-code post-quintuplet silence horizon extends to ≥3 ticks at Add.183 at >55% (M-181.H/M-181.J.1.v2 trajectory: 0.4 per-PR scaling implies ≥2 lower bound met; further extension expected under M-181.J.1.v2 if 5-PR rebound has remaining discharge horizon).
- **P-393.D**: codex Add.183 emission ∈ [1, 4] at >55% (post-discharge amplitude-restoration; M-182.C amplitude-conditional model implies 1-tick discharge for low-amplitude prior).
- **P-393.E**: litellm rebound first observed by Add.185 at <30% (M-182.E binary-non-admitting promotion; per-tick decay below 25%).
- **P-393.F**: M-181.J.1.v2 per-class scaling factors (opencode 1.5, qwen-code 0.4, codex 0.5) hold within ±50% across next 5 rebound events at >40%.

## Cross-motif cumulative state synthesized at synth #393

- **M-180.I → M-182.D (3-of-3)**: post-doublet silence horizon ≥3 confirmed for opencode.
- **M-181.H → 2-of-2**: post-quintuplet silence horizon ≥2 confirmed for qwen-code.
- **M-181.G → 3-of-3 binary-non-admitting**: litellm joins gemini-cli + goose as tier-trigger-non-admitting cohort (via M-182.E length-7 zero-tail).
- **M-181.I → 3-of-3 monotone-decrease**: disjoint-rotation union-cardinality trajectory Add.179-182 = {3, 2, 1, 0} confirmed (M-182.F).
- **M-181.J.1 → M-181.J.1.v2**: amplitude-scaling sub-clause revised with empirical per-class ratios (opencode 1.5, qwen-code 0.4, codex 0.5).
- **M-182.B**: cohort-wide zero-emission tick introduced as tail-event regime (single-instance candidate, structurally interpretable as superposition of per-repo discharge horizons aligning).

Anchor: ADDENDUM-182 sha (this commit's parent).
