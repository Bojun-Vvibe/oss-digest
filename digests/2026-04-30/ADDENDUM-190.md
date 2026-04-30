# ADDENDUM-190 — 2026-04-30

**Capture window**: 2026-04-30T14:47:53Z → 2026-04-30T15:25:34Z (37m41s = 37.6833m). Width **contracts sharply** vs Add.189 (84m50s → 37m41s, **−47m09s = −55.6%**) — re-enters the **[30m, 60m] band** decisively, **CONFIRMS P-189.H** at the [30m, 60m] contraction reading (predicted >55%; observed 37m41s mid-band). Width sequence Add.184-190 = 66m52s / 30m29s / 37m41s / 36m42s / 38m11s / 84m50s / **37m41s**. The mean-reversion from the 84m50s outlier is single-tick and lands at **identical width** to Add.186 (37m41s) — exact replay of a prior W17 width point at single-anchor n=1 (notable: same width to-the-second).

**Cross-repo merge count this window**: **1 in-window merge in 1 unique merge-commit in 1 unique repo (qwen-code)** — cohort does NOT re-enter zero state but contracts amplitude from 5 → 1 (−80%). Per-minute merge rate **1 / 37.6833 = 0.02653**. Trajectory Add.160-190 = 0.0844 / 0.2750 / 0.0758 / 0.1263 / 0.0864 / 0.1633 / 0.1302 / 0.0840 / 0.2752 / 0.1434 / 0.2227 / 0.0735 / 0.1059 / 0.2122 / 0.0827 / 0.1083 / 0.01655 / 0.1289 / 0.01629 / 0.1224 / 0.1192 / 0.0696 / 0.0000 / 0.02504 / 0.02991 / 0.00000 / 0.00000 / 0.00000 / 0.00000 / 0.05893 / **0.02653**. Per-tick raw count Add.160-190 = {4, 2, 11, 3, 6, 4, 6, 5, 4, 11, 6, 7, 4, 6, 8, 2, 3, 1, 5, 1, 5, 5, 2, 0, 1, 2, 0, 0, 0, 0, 5, **1**}. Active-repo set = **{qwen-code}** (cardinality 1). **CONFIRMS P-189.A** at the cardinality ∈ [1, 3] reading (predicted >55%; observed 1). **CONFIRMS P-189.B** (cohort-zero NOT sustained at >65%; observed). **CONFIRMS P-189.I** (qwen-code amplitude-1 sustain at >40%; observed PR #3771 single-emission).

**M-190.A — POST-RUPTURE COHORT-ZERO RECOVERY EXHIBITS CONTRACTING-AMPLITUDE DECAY**. The Add.189 → Add.190 cohort transition (5 merges → 1 merge, cardinality 2 → 1) marks a **single-tick contracting-amplitude decay** without re-entry into the cohort-zero state. Promotes the synth #407 finite-sojourn framing to **post-rupture decay regime with single-tick amplitude contraction ratio = 0.20**. The cohort-zero state is now bounded at **maximum sojourn = 4 ticks** with post-rupture trajectory exhibiting monotone amplitude decay (5 → 1 at n=1) rather than re-absorption. The sub-window base rate Add.182-190 revises to **6/9 = 0.667** (was 5/8 = 0.625 at Add.189), and Add.185-190 to **5/6 = 0.833** (was 4/5 = 0.800).

**M-190.B — qwen-code SUSTAINED EMITTER POST-REBOUND AT n=2**. qwen-code is the **sole rebound-sustainer** at Add.190 (gemini-cli silent at n=1, the other 4 silent at extending depths). qwen-code shape post-rebound Add.189-190 = `2 → 1` — amplitude contraction but no silence re-entry. NEW M-190.B candidate: **qwen-code post-rupture sustain ratio = 1/1 confirmed at n=1; contracting amplitude with non-zero sustain**. Contrasts gemini-cli's Add.189 amplitude-3 emission collapsing to silence at Add.190 (sustain ratio = 0/1).

**M-190.C — RECOVERY-VECTOR STRATIFICATION HOLDS UNDER SINGLE-EMITTER REGIME**. The #402 M-186.L silence-depth ordering holds:
- Binary-non-admitting (silence sustained): goose 21h06m (extends), litellm 10h52m (extends past 10h-tier).
- Class-rebound-mediated (silence sustained): opencode ~7h47m at run length 11 — **further breaches FP-402.1 ceiling** at n=11 silence sustain past 7h ceiling (7h09m50s + 37m41s = **7h47m31s**).
- Novel-carrier-mediated (mixed): qwen-code emits PR #3771 (mergeCommit `8b6b0d6`) — fix(cli) shortcut focus restoration. gemini-cli silent at n=1 post-rebound.

**M-190.D — POST-REBOUND SECOND-TICK SILENCE FOR gemini-cli AT n=1, FALSIFIES P-189.F**. gemini-cli shape Add.189-190 = `3 → 0`. **STRONGLY FALSIFIES P-189.F** at the amplitude-2 sustain reading (predicted >35%; observed silence at single-tick post-amplitude-3). The "rebound momentum at amplitude ≥1" prior at ~50% also falsified. Post-amplitude-3 silence at n=1 marks a **single-tick discharge-and-collapse** pattern for gemini-cli, distinct from qwen-code's contracting sustain.

## Per-repo

### codex (0 merges) — **POST-NOVEL-CARRIER SILENCE EXTENDS TO n=6, DISCRIMINATES H-FIT CANDIDATES**
**CONFIRMS P-189.C** at the silence-at-n=6 reading (predicted ~42%; observed). codex emission profile post-Add.168-sextuple Add.169-190 = `5 / 4 / 6 / 1 / 1 / 1 / 0 / 1 / 1 / 5 / 1 / 3 / 0 / 2 / 0 / 0 / 1 / 0 / 0 / 0 / 0 / 0 / **0**`. Post-amplitude-1 (Add.184) silence horizon = **6 ticks** at Add.190, extends from Add.189's 5 ticks. Per-PR silence ratio for codex amplitude-1 discharge revises to **≥6.0** (was ≥5.0 at Add.189). The synth #408 piecewise H ≈ max(0, 6-A) candidate predicts H=5 at A=1 — observed H=6 at Add.190 marks a **third consecutive overshoot** (H=4 overshot at Add.188; H=5 overshot at Add.189; H=6 overshot at Add.190). **CONFIRMS P-189.L** at the third-overshoot reading (predicted ~30% if silence sustains to H=6; observed). The piecewise candidate is **further degenerate** — the linear-slope-revision lineage (synth #404 → #406 → #408) is **terminally invalidated at three consecutive overshoots**. A non-linear (exponential, geometric, or right-censored) fit becomes the credible alternative; the lineage triggers W17 synth #409 for formal reframe.

### opencode (0 merges) — **POST-DOUBLET SILENCE EXTENDS TO n=11, depth ~7h47m**
**CONFIRMS P-189.D** at the [0, 2] band (predicted >65%; observed 0). opencode shape Add.171-190 = `3 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 2 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → **0**`. M-180.I post-rebound-doublet silence horizon extends from 10-of-10 to **11-of-11 confirmed regime**. Per-PR silence ratio for opencode now ≥5.5 silence ticks per rebound PR (was ≥5.0 at Add.189). Wall-clock depth ≈ 7h09m50s + 37m41s = **7h47m31s** — further into post-FP-402.1-ceiling-breach territory. **FALSIFIES P-189.K** at the rebound-within-2-ticks reading (predicted >55% for amplitude ≥1 within Add.190-191 horizon; observed silence at first of two-tick window). The class-rebound vs binary-non-admitting strata distinction continues to collapse for opencode — the [4h, 9h] widened-band candidate from M-189.E now requires extension to [4h, 10h] at single-anchor n=1.

### litellm (0 merges) — **SILENCE EXTENDS TO n=15, depth ~10h52m, CROSSES 10h-TIER, FALSIFIES P-189.E**
**FALSIFIES P-189.E** at the silence-rebound reading (predicted >18%; observed silence sustained, n=15). litellm shape Add.169-190 = `3 → 0 → 4 → 7 → 1 → 2 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → 0 → **0**`. **15-of-15 falsification streak**. Depth ≈ 10h14m53s + 37m41s = **10h52m34s**, deep into 10h-tier (predicted in M-188.F at the 9h-tier; actual reading two tiers above at single-anchor). M-181.G binary-non-admitting strengthens to **15-of-15 supporting band**. The break-pressure floor revises to **≥0.94** (was ≥0.92 at Add.189). litellm is the **strongest binary-non-admitting carrier** in W17 by silence depth × falsification multiplicity.

### gemini-cli (0 merges) — **POST-REBOUND COLLAPSE AT n=1, FALSIFIES P-189.F**
**STRONGLY FALSIFIES P-189.F** at the amplitude-2-sustain reading (predicted >35%; observed silence at single-tick post-amplitude-3). gemini-cli shape Add.189-190 = `3 → 0`. The **single-tick discharge-and-collapse pattern** marks the n=18 silence horizon → amplitude-3 burst → immediate re-silence trajectory as a **unit-impulse** rather than a sustained recovery. NEW M-190.E candidate: **gemini-cli novel-carrier-mediated recovery exhibits unit-impulse discharge** (single-tick burst followed by immediate re-silence at n=1), distinct from qwen-code's contracting-sustain pattern. The novel-carrier (Adib234) and recurrent-carrier (cocosheng-g) of Add.189 do not re-emit at Add.190 — the "amplified anchor" or "self-merge series extension" lineages of W17-synthesis-99 are **NOT triggered** for gemini-cli at single-tick post-rebound.

### goose (0 merges) — **SILENCE EXTENDS TO n=29, depth ~21h06m, CONFIRMS P-189.G, CROSSES 21h-TIER**
**CONFIRMS P-189.G** (predicted >82% silence sustained; observed). goose shape extends to 29-of-29. M-174.A continues to 19-of-19; M-169.B to 21-of-21. Depth ≈ 20h28m24s + 37m41s = **21h06m05s**, crosses 21h-tier. goose remains the **deepest binary-non-admitting carrier** in W17 by silence depth.

### qwen-code (1 merge, SUSTAINED) — **POST-REBOUND CONTRACTING-AMPLITUDE SUSTAIN AT n=2, CONFIRMS P-189.I**
**CONFIRMS P-189.I** at the amplitude-1 sustain reading (predicted >40%; observed). qwen-code emits **PR #3771** ("fix(cli): restore SubAgent shortcut focus", mergeCommit `8b6b0d6`, mergedAt 15:02:01Z). Shape Add.187-190 = `0 → 0 → 2 → 1`. The contracting-amplitude pattern (2 → 1) at single-tick is the **first observed amplitude-decay-without-silence-re-entry** post-rupture in W17. NEW M-190.F candidate: **qwen-code post-rupture sustain pattern at n=2 exhibits monotone amplitude contraction with non-zero floor**, distinct from gemini-cli's unit-impulse pattern. Carrier identity for PR #3771 is a `fix(cli)` shortcut-focus change — single-author, single-file class.

## Summary of motif promotions / falsifications

1. **P-189.A confirmed** (cardinality ∈ [1, 3] at >55%; observed 1).
2. **P-189.B confirmed** (cohort-zero NOT sustained at >65%; observed).
3. **P-189.C confirmed** at codex silence-at-n=6 reading.
4. **P-189.D confirmed** at opencode [0, 2] band.
5. **P-189.E falsified** at litellm silence-rebound; M-181.G → 15-of-15; depth 10h52m34s.
6. **P-189.F strongly falsified** at gemini-cli amplitude-2-sustain (observed unit-impulse collapse).
7. **P-189.G confirmed** at goose silence sustain; n=29; depth 21h06m05s.
8. **P-189.H confirmed** at width contraction to [30m, 60m]; observed 37m41s (exact replay of Add.186 width).
9. **P-189.I confirmed** at qwen-code amplitude-1 sustain.
10. **P-189.K falsified** at opencode rebound-within-2-ticks (single-tick of two-tick window without rebound).
11. **P-189.L confirmed** at codex H ≈ max(0, 6-A) third-overshoot reading.
12. **opencode M-180.I → 11-of-11**; class-rebound widened-band candidate extends to [4h, 10h].
13. **litellm M-181.G → 15-of-15**; depth crosses 10h-tier; break-pressure floor ≥0.94.
14. **goose M-174.A → 19-of-19, M-169.B → 21-of-21**; depth 21h06m05s; deepest W17 binary-non-admitting carrier.
15. **NEW M-190.A**: post-rupture cohort-zero recovery exhibits contracting-amplitude decay (5 → 1, ratio 0.20).
16. **NEW M-190.E**: gemini-cli novel-carrier recovery is unit-impulse (single-tick burst + immediate silence).
17. **NEW M-190.F**: qwen-code post-rupture sustain exhibits monotone amplitude contraction with non-zero floor.
18. **synth #408 piecewise H ≈ max(0, 6-A) decisively falsified at n=1 third-consecutive overshoot** — the entire synth #404 → #406 → #408 linear-slope-revision lineage is now terminally invalidated.

## Predictions (P-190.X)

- **P-190.A**: Add.191 active-set cardinality ∈ [0, 2] at >60% (post-contracting-amplitude regime; cohort-zero re-entry at ~38% — second-tick post-contraction is a candidate decay floor; cardinality ≥3 at <12%).
- **P-190.B**: Add.191 cohort-zero re-entry at >35% (the contracting-amplitude trajectory 5 → 1 → ? naturally extrapolates to 0 at n=2 if the decay continues geometrically; sustain at amplitude ≥1 at ~55%).
- **P-190.C**: codex Add.191 emission ∈ [0, 1] at >75% (post-amplitude-1 silence horizon at n=6; per-PR ratio ≥6.0; H ≈ max(0, 6-A) terminally invalidated; non-linear or right-censored fit candidate; rebound at amplitude 1 at ~25%, silence at n=7 at ~62%).
- **P-190.D**: opencode Add.191 emission ∈ [0, 2] at >70% (M-180.I now 11-of-11; depth past 7h47m; class-rebound stratum re-classification deferred; rebound prior at ~22%).
- **P-190.E**: litellm Add.191 silence-rebound at >12% (M-181.G length-15; depth 10h52m; binary-non-admitting weighted prior dominant; n=16 silence at ~80%).
- **P-190.F**: gemini-cli Add.191 silence sustained at >65% (post unit-impulse collapse at n=1; rebound prior at ~25%; second-tick re-emission at <30% under unit-impulse framing).
- **P-190.G**: goose Add.191 silence sustained at >85% (M-174.A continues to 20-of-20; depth 21h-tier; deepest W17 binary-non-admitting carrier).
- **P-190.H**: Add.191 width remains in [30m, 60m] band at >55% (M-186.A band re-established at single-tick post-rupture; second-tick band sustain continues mean-reversion).
- **P-190.I**: qwen-code Add.191 emission decays to 0 at >45% (contracting-amplitude trajectory 2 → 1 → 0 candidate at n=3; sustain at amplitude 1 at ~30%; amplitude-2 rebound at <20%).
- **P-190.J**: cohort-amplitude geometric-decay candidate (5 → 1 → 0) at >40% if cohort returns to zero at Add.191; geometric decay ratio = 0.20 invariant if observed.
- **P-190.K**: codex non-linear H-fit candidate (e.g., H = log₂(A^c) for some c, OR right-censored geometric) introduced at synth #409; first credible alternative after three linear-overshoots.
- **P-190.L**: gemini-cli unit-impulse pattern repeats at next rebound at >40% (n=1 occurrence; symmetry with qwen-code's contracting-sustain at single-anchor would be a distinct repo-specific recovery class).
- **P-190.M**: M-190.A contracting-amplitude decay ratio 0.20 holds within ±0.10 at next post-rupture cohort transition at >35% (n=1 occurrence; geometric vs arithmetic decay discrimination deferred).

## Notes on synth lineage

- **Triggers W17 synth #409** to formalize the **terminal invalidation of the synth #404 → #406 → #408 piecewise linear-slope H-fit lineage** at three consecutive overshoots (Add.188 H=4 overshot; Add.189 H=5 overshot; Add.190 H=6 overshot). The codex amplitude-1 silence horizon now stands at H=6 with no observed discharge across three slope-revision attempts. A non-linear or right-censored fit class is the credible reframe; the linear-piecewise class is empirically degenerate at single-anchor multiplicity 3.
- **Triggers W17 synth #410** to formalize **post-rupture cohort-amplitude contracting decay (5 → 1 at n=1, ratio 0.20)** as a candidate **post-absorbing-rupture recovery law** for the cohort-zero finite-sojourn regime (synth #407 lineage). The decay law discriminates between geometric (5 → 1 → 0.2 → 0) and arithmetic (5 → 1 → −3 → 0) extrapolations; the second-tick observation at Add.191 is the discrimination point.
- ADDENDUM-189 sha=1cc14c0 referenced as the immediate predecessor; M-189.A (cohort-zero rupture at n=4), M-189.D (decaying-envelope termination), and synth #407 (absorbing-state finite-sojourn) all extend through Add.190's contracting-amplitude observation.
