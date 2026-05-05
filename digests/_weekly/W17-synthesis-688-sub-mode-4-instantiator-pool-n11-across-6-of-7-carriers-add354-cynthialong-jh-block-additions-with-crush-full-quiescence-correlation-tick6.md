# W17-synth-688 — sub-mode-4 instantiator pool reaches N=11 distinct authors across 6 of 7 carriers in single tick (Add.354 adds cynthialong0-0 gemini-cli + jh-block goose); structural correlation full-carrier-quiescence ⊥ sub-mode-4-instantiation persists 6 consecutive ticks with crush as sole holdout

**Date**: 2026-05-05 (W17 tick post-Add.354)

**Carriers tied**: All 7 carriers (cross-carrier instantiator-pool census + carrier-quiescence correlation analysis).

**Anchor observation**: ADDENDUM-354 captured **two new sub-mode-4 instantiators in single tick** — cynthialong0-0 (google-gemini/gemini-cli #26504 silent force-push within ≤29m43s of fresh-open) and jh-block (block/goose #9023 silent force-push within ≤37m29s of fresh-open). Both PRs entered sub-mode-4 via the canonical fast-iteration entry pattern (sub-40m fresh-to-force-push gap on a single open PR). Sub-mode-4 instantiator pool grows from N=9 (Add.353 census) to **N=11 (Add.354)** — first 2-instantiator-per-tick growth event since Add.347. Pool now spans **6 of 7 carriers**, leaving charmbracelet/crush as **sole carrier with zero W17 sub-mode-4 instantiators**. Crush has simultaneously sustained **full carrier-quiescence for tick-6** (380m of zero head-changes in top-5). The structural correlation **full-quiescence(carrier) ⊥ sub-mode-4-instantiation(carrier)** — already noted in synth-679 saturation analysis — now persists **6 consecutive ticks** without exception, strengthening from observation to near-deterministic carrier-level pattern.

**Anchor PRs (all carriers, sub-mode-4 instantiator-pool N=11 census)**:

1. **BerriAI/litellm — ben-wangz** (#27176 `[Fix] Helm: honor external DB secret in standalone mode`, head `2e102973e65cb072a3da1a89f9c68689399dca07`; Add.349 sub-mode-4 N=1 instantiator).
2. **BerriAI/litellm — Sameerlite** (#27185 NVIDIA Riva STT, head `da06ac5448dcb12504708af391a243134e8a04bd`; Add.351 sub-mode-4 N=2 instantiator + multi-PR-mode first instance per synth-682).
3. **google-gemini/gemini-cli — rushikeshsakharleofficial** (#26489 perf(context) DOUBLET + #26490 mcp/auto-discover, heads `acfe282e48e9ab8f36d3374bb021a21c148411bb` / `2d8284164964dceedb042764c1187e4e1d378afc`; Add.349 sub-mode-4 instantiator with DOUBLET pattern).
4. **google-gemini/gemini-cli — euxaristia** (#26498 cli/acknowledgment, head `e81028ad2d499766b859651a4addd4b8d3e1f826`; Add.353 sub-mode-4 N=9 instantiator via silent force-push).
5. **google-gemini/gemini-cli — cynthialong0-0** (#26500 + #26504 doublet, #26504 silent force-push to `15d3e2e63f240bf6e863388528de0ea27cb0d4b8` Add.354; **N=10 instantiator**).
6. **sst/opencode — Hona** (#25833 web-shell + #25837 MERGED + #25846 + #25853 desktop QUARTET; Add.350–351 sub-mode-4 instantiator).
7. **openai/codex — maxkomarychev** (carry-forward sub-mode-4 instantiator from Add.349 era).
8. **openai/codex — evawong-oai** (#21184 title-rewriting silent force-push Add.353 + 2nd silent force-push Add.354 to `e42868f9af6115cf6ca39cdd27dc86e212940fe3`; sub-mode-4 N=8 instantiator + title-rewriting sub-class anchor).
9. **openai/codex — jif-oai** (#21180 + #21182 + #21187 cross-tick triplet with cumulative force-pushes per Add.354; **multi-iterating-leg N=2 instantiator per synth-687**).
10. **QwenLM/qwen-code — wenshao** (Add.349 sub-mode-4 instantiator carry-forward).
11. **QwenLM/qwen-code — yiliang114** (#3850 + #3853 + #3854 + #3855 N=4 stack with k_iter=3 multi-iterating-leg per synth-686).
12. **block/goose — jh-block** (#9023 ACP race-fix silent force-push at ≤37m29s post-fresh, head `1d61323844d441792bad653c1a06c3f0589692ce` Add.354; **N=11 instantiator**).

(Note: count is N=11 because rushikeshsakharleofficial is single instantiator with multi-PR DOUBLET signature, not 2 separate instantiators.)

**Per-carrier sub-mode-4 instantiator-count census (Add.354)**:

| carrier | instantiator count | instantiators | full-quiescence at Add.354? |
|---|---|---|---|
| BerriAI/litellm | 2 | ben-wangz, Sameerlite | yes (compound-quiescence cardinality 2) |
| google-gemini/gemini-cli | 3 | rushikeshsakharleofficial, euxaristia, cynthialong0-0 | no |
| sst/opencode | 1 | Hona | no |
| openai/codex | 3 | maxkomarychev, evawong-oai, jif-oai | no |
| QwenLM/qwen-code | 2 | wenshao, yiliang114 | no |
| block/goose | 1 | jh-block | no |
| charmbracelet/crush | **0** | — | **yes (tick-6, 380m sustained-zero)** |

**Structural correlation observation**:

- **Crush is the ONLY carrier with both (a) zero sub-mode-4 instantiators and (b) sustained full carrier-quiescence**. Full-quiescent carriers and zero-instantiator carriers are identical sets at this snapshot.
- litellm achieves full-quiescence at Add.354 (tick-1 partial — top-5 head-stable in window) **despite** holding N=2 instantiators. This shows full-quiescence is **not equivalent** to instantiator-absence — but the inverse holds: **zero-instantiator carriers exhibit full-quiescence**. Litellm-quiescence is a transient one-tick state with fresh-open events bracketing it; crush-quiescence is sustained across 6+ ticks with no fresh-opens, no force-pushes, no merges in top-5.
- Implication: sub-mode-4 instantiation **requires non-zero head-change activity** (force-pushes occur on PRs, which is a form of carrier-activity). A carrier with zero head-changes for 6 consecutive ticks cannot generate sub-mode-4 events because sub-mode-4 events ARE head-changes. The correlation is **partially tautological** in this sense (sub-mode-4 implies head-change), but the **6-tick persistence** is non-tautological — it shows crush has not generated **a single head-change** of any kind in 380m.

**Per-carrier head-change tick-counter (across Add.349–354, 6-tick window)**:

| carrier | ticks with ≥1 head-change in top-5 | ticks fully head-stable in top-5 |
|---|---|---|
| BerriAI/litellm | 5 (Add.349-353) | 1 (Add.354) |
| google-gemini/gemini-cli | 6 | 0 |
| sst/opencode | 6 | 0 |
| openai/codex | 6 | 0 |
| QwenLM/qwen-code | 6 | 0 |
| block/goose | 4 | 2 (Add.352, Add.353 — partial; tick-3 broken at Add.354) |
| charmbracelet/crush | **0** | **6** |

Crush is structurally unique: **0 of 6 ticks with any head-change**. Next-most-quiescent carriers (litellm 1/6, goose 2/6) still generated activity in majority of ticks. Crush is in **structurally separate regime** from all other carriers.

**Sub-mode-4 instantiator-pool growth-rate trajectory**:

| tick | pool size N | new instantiators added | cumulative-tick |
|---|---|---|---|
| Add.347 | ~5 (estimated baseline) | — | t=0 |
| Add.348 | ~6 | +1 | t+1 |
| Add.349 | ~7 | +1 | t+2 |
| Add.350 | ~7 | 0 | t+3 |
| Add.351 | 7 | 0 (Sameerlite multi-PR-mode begins) | t+4 |
| Add.352 | 8 (+evawong-oai title-rewriting capture) | +1 | t+5 |
| Add.353 | 9 (+euxaristia silent force-push) | +1 | t+6 |
| Add.354 | **11** (+cynthialong0-0 + jh-block) | **+2** | t+7 |

Pool growth rate is **+1.43 instantiators per tick** average across Add.347→354 (10 cumulative additions across 7 ticks). Add.354's +2 is the **first 2-add tick of the trajectory** — possibly signaling acceleration or just stochastic clustering. Linear extrapolation: pool reaches N=13 by Add.355–356, N=15 by Add.357. Carrier-saturation cap is loose (no theoretical ceiling on author-pool size per carrier), but carrier-set cap is hard at N_carriers=7 (or N_carriers=6 if crush remains uninstantiated).

**Three structural observations on sub-mode-4 pool growth**:

1. **Carrier-coverage diversification**: Add.354 additions span 2 carriers (gemini-cli + goose), continuing the W17 pattern of cross-carrier sub-mode-4 spread (Add.351–353 added authors across litellm, codex, gemini-cli, qwen-code). Pool growth is **not concentrating in single carrier** — instead diffusing across the carrier-set. This is consistent with sub-mode-4 as a **portable mechanism** (synth-682 H2 strengthened to 0.75 in synth-686) rather than a carrier-specific cultural artifact.
2. **Multi-PR-mode subset growth**: Of N=11 instantiators, 4 are multi-PR-mode instantiators (Sameerlite, yiliang114, jif-oai, cynthialong0-0). Multi-PR-mode subset growth rate = +4 across 4 ticks (Add.351→354) = +1/tick. Multi-iterating-leg sub-subset (k_iter ≥ 3): 2 instantiators (yiliang114, jif-oai), both within Add.353–354 — **+2 in 2 ticks** (matches synth-687 H4 carrier-portability at tick-1).
3. **Crush full-quiescence as boundary marker**: Crush's persistent 6-tick zero-activity functions as the **lower bound of carrier-engagement**. As long as crush remains structurally separated, the sub-mode-4 instantiator pool has a **hard maximum carrier-set of 6** within W17. Falsifying this requires either crush exiting full-quiescence with a sub-mode-4-style fresh-open + sub-40m force-push, or pool propagation pattern breaking at carrier-coverage ceiling.

**Update on prior synth hypotheses**:

- **synth-682 H2 (multi-PR-mode is portable sub-mode-4 sub-class, prior 0.55→0.75 in synth-686)**: **STRENGTHENED to 0.85** — Add.354 introduces cynthialong0-0 as 4th multi-PR-mode instantiator across 3 carriers (litellm, qwen-code, codex, gemini-cli). Multi-PR-mode portability is now empirically demonstrated across 4 carriers within 4 ticks.
- **synth-679 (sub-mode-4 saturates 5-of-5 carriers, rate-limited by first-instantiation-gap)**: **EXTENDED-TO-6-OF-7** — Add.354 adds goose as 6th carrier with sub-mode-4 instantiator. Saturation now 6/7 with crush as sole holdout.
- **synth-686 H3' (multi-PR-mode propagates to new instantiator OR extends to new sub-sub-class topology per tick, prior 0.30)**: **REALIZED-VIA-NEW-INSTANTIATOR** — Add.354 adds cynthialong0-0 (new multi-PR-mode instantiator, asymmetric-binary topology mirroring Sameerlite). Posterior strengthens to 0.55 over remaining W17.

**New hypothesis**:

- **H8 (prior 0.30)**: Crush exits full-quiescence within W17 remainder via a sub-mode-4-style fresh-open + sub-40m force-push event (paralleling jh-block goose pattern from Add.354). Predicts that the structural correlation breaks via **mechanism-preserving regime change** (crush converts from quiescent to active in canonical sub-mode-4 manner) rather than via fresh-open-only or merge-only. Falsified if (a) crush exits quiescence via fresh-open without force-push, (b) crush exits quiescence via maintainer-merge-only activity, or (c) crush sustains full-quiescence through Add.360.
- **H9 (prior 0.45)**: Sub-mode-4 instantiator-pool growth rate **decelerates** as carrier-coverage saturates (reaching 6/7 was cheap; reaching 7/7 requires crush regime-change which is structurally barriered). Predicts pool size at Add.360 ≤ N=14 (not the linear extrapolation of N=15+). Falsified if N ≥ 15 by Add.360.

**Predictions**:

- **P-688.A (prior 0.30)**: Crush exits full-quiescence at Add.355 OR Add.356 (sub-40m-iteration sub-mode-4 entry on first activity event). Tests H8. Falsified if crush sustains tick-7 / tick-8 quiescence.
- **P-688.B (prior 0.40)**: Sub-mode-4 pool grows by ≥1 in next tick (continuing N=9→11 trajectory). Most-likely candidates: a 2nd codex evawong-oai-class title-rewriting author, or a 4th gemini-cli instantiator beyond cynthialong0-0/euxaristia/rushikeshsakharleofficial. Falsified if N=11 holds through Add.355.
- **P-688.C (prior 0.55)**: Litellm's full-quiescence at Add.354 is **single-tick** — Add.355 captures ≥1 head-change in top-5 (likely on Sameerlite #27185 OR security-doublet #27189/#27190 OR new fresh-open). Tests whether multi-instantiator carriers can sustain quiescence (vs zero-instantiator crush which sustains 6 ticks). Falsified if litellm extends quiescence to tick-2.
- **P-688.D (prior 0.20)**: A 5th multi-PR-mode instantiator emerges within W17 remainder on a 5th carrier (sst/opencode via Hona-revival OR block/goose via jh-block adding 2nd PR + force-push). Falsified if multi-PR-mode pool stays at N=4 instantiators through Add.360.
- **P-688.E (prior 0.25)**: Add.355 is also a 2-instantiator-add tick, breaking the historical +1/tick mean (suggesting acceleration phase). Falsified if Add.355 adds ≤1 instantiator.
- **P-688.F (prior 0.50)**: Goose drops out of compound-quiescence-list for at least 3 more ticks — jh-block #9023 active iteration regime persists, morgmart hard-stop continues (extending W17 record), and idosavion #9021 either iterates or merges. Falsified if goose returns to full-quiescence (top-5 fully head-stable) by Add.357.
- **P-688.G (prior 0.40)**: The structural correlation full-carrier-quiescence ⊥ sub-mode-4-instantiation persists through Add.360. Tests whether crush regime-change requires sub-mode-4 entry (H8) OR whether some non-instantiator carrier becomes quiescent OR whether some instantiator carrier becomes quiescent (litellm Add.354 already partially demonstrates the latter is transient). Falsified if a zero-instantiator carrier becomes active without sub-mode-4 OR an instantiator carrier becomes sustained-quiescent (≥3 ticks).

**Falsifiers consolidated**:

- If P-688.A REALIZES (crush exits quiescence via sub-mode-4), H8 confirmed; structural correlation preserves via mechanism-preservation.
- If P-688.A FAILS through Add.360 AND P-688.G HOLDS, structural correlation strengthens to **carrier-typological invariant** of W17 — crush is structurally distinct in a sustained way, not just a slow tick.
- If P-688.B and P-688.E both REALIZE, pool growth is in acceleration phase (≥+2/tick sustained), suggesting saturation has not yet rate-limited.
- If P-688.C FAILS (litellm extends quiescence), instantiator-presence does NOT prevent multi-tick quiescence — weakens the "instantiator carriers always show activity" intuition.
- If P-688.D REALIZES (5th multi-PR-mode instantiator on 5th carrier), multi-PR-mode is **near-universal sub-mode-4 sub-class** approaching the carrier-coverage cap.

**Cross-references**: directly extends W17-synth-679 (sub-mode-4 5-of-5-carrier saturation event with first-instantiation-gap as rate-limiter) by extending coverage to 6-of-7 carriers via jh-block goose addition; companion to W17-synth-687 (jif-oai codex multi-iterating-leg second instantiation) — synth-687 is depth-analysis of one new instantiator, synth-688 is breadth-census of full pool; extends W17-synth-680 (carrier-quiescence and per-author hard-stop are independent state variables) by establishing that carrier-quiescence ⊥ sub-mode-4-instantiation correlation is **stronger than independence** — at least at the zero-instantiator end, the correlation is empirically near-deterministic for 6 consecutive ticks; orthogonal to W17-synth-685 (cross-carrier security-cluster — orthogonal mechanism, different sample); contrasts W17-synth-686 (yiliang114 single-author depth) by analyzing the cross-author multi-carrier breadth dimension of the same sub-mode-4 phenomenon.
