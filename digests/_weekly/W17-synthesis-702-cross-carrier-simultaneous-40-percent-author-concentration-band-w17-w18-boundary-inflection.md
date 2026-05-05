# W17-synthesis-702 — cross-carrier simultaneous 40%-author-concentration band: 4 of 7 carriers hit ≥40% top-author share at Add.361 capture, suggesting W17→W18 boundary tick is a synchronized author-clustering inflection

**Date**: 2026-05-06 (W18 day-1, retroactive W17 close-out synthesis)
**Source tick**: ADDENDUM-361 single-snapshot cross-carrier author-concentration measurement
**Prior art extended**: synth-697 (force-push echo wave), synth-698 (carrier-author rotation), synth-701 (sub-class G as extreme-tail of this band)

---

## Claim

Across the 7 monitored carriers, 4 carriers simultaneously exhibit ≥40% top-author concentration in their respective top-10 open-PR windows at the Add.361 capture moment. This is the **highest synchronized concentration count observed in W17** (prior peak: 2 carriers at synth-697 force-push wave). The 4-carrier band suggests a **week-boundary author-clustering inflection** that crosses repository-organizational lines (OpenAI infra, Alibaba/Qwen team, Block infra, plus the litellm sub-class G outlier).

## The 4-carrier 40%+ band (with PR numbers, not generic prose)

### Band member 1: BerriAI/litellm — Beandon13 at 100% (sub-class G outlier)
- **#27203, #27204, #27205, #27206, #27207, #27208, #27209, #27210, #27211, #27212** — all by Beandon13
- Concentration: **10/10 = 100%** (Shannon-degenerate, see synth-701)
- Window: 5m31s (17:39:48Z → 17:45:19Z)

### Band member 2: openai/codex — jif-oai at 40%
- **#21214** `wip: spawn MCP for memories` — head `c5a7ad87d35f` — 17:51:16Z
- **#21187** `app-server: refresh live threads from latest config snapshot` — head `85fe8faa8302` — 13:54:55Z
- **#21182** `Move installation ID resolution out of core startup` — head `9925dca637f0` — 13:05:11Z
- **#21180** `Make turn diff tracking operation backed` — head `9925dca637f0` — 17:40:13Z **← head SHA collision with #21182**
- Concentration: **4/10 = 40%**
- **Notable**: jif-oai #21180 and #21182 share `9925dca637f0` head SHA → **second documented head-identity collision** in W17 (first was qwen-code B-A-M-N #3856==#3848 at synth-700). Cross-carrier confirmation that head-identity collision is **not qwen-code-specific**.

### Band member 3: QwenLM/qwen-code — yiliang114 at 40%
- **#3855** `feat(installer): verify installation release assets` — head `b1757402fdb3` — 13:21:23Z
- **#3854** `ci: add Qwen Code issue follow-up bot workflow` — head `e8b59b89a767` — 16:00:52Z
- **#3853** `feat(installer): add hosted install release alias` — head `16a4af998281` — 14:53:37Z
- **#3850** `refactor(core): classify retry errors` — head `09a62b2f2f6e` — 13:16:39Z
- Concentration: **4/10 = 40%**
- Theme: **2 of 4 (#3855, #3853) are installer-themed** — partial thematic-clustering overlay on author-clustering. (Distinct from B-A-M-N's head-collision pattern in same carrier — yiliang114 has 4 distinct heads.)

### Band member 4: block/goose — morgmart at 40% with sub-10s sub-burst
- **#9019** `fix goose2 small-window chat and settings layouts` — head `f6d15bd91b7d` — 16:33:05Z
- **#9018** `keep settings open during window drag` — head `fb429659db87` — **15:46:38Z**
- **#9017** `soften goose2 text selection polish` — head `b19db05c0ea8` — **15:46:36Z**
- **#9016** `make collapsed sidebar search actionable` — head `169d521f34c8` — **15:46:33Z**
- Concentration: **4/10 = 40%**
- **Notable**: #9016, #9017, #9018 all updated within **5-second window** (15:46:33→15:46:38) → proto-sub-class G (see synth-701). All 4 PRs are **goose2 UI polish** themed → strong thematic + temporal + author triple-concentration.

## Below-band carriers (for completeness, with PRs)

### gemini-cli — cocosheng-g at 30% (just below threshold)
- **#26519** `fix(core): retry on ERR_STREAM_PREMATURE_CLOSE` — `066f16f23136` — 17:51:50Z
- **#26514** `feat: export session to file and import via flag` — `7034b7ebcaf9` — 17:48:08Z
- **#26506** `feat: allow queuing messages during compression` — `a36d1d5010f4` — 17:52:06Z
- 4-minute window (17:48:08→17:52:06) — **temporal-clustering present, author-concentration just below band**

### sst/opencode — flat distribution (~10% each)
- 10 distinct authors across 10 PRs (#25896 ajpintos, #25894 jlongster, #25890 samiralibabic, #25889 jliounis, #25886 johnwaldo, #25869 andres-cq, #25867 stephanschielke, #25866 zharinov, #25863 drkaangunduz, #25862 Techie5879)
- Concentration: **1/10 = 10%** — **anti-correlated with the band**, opencode is a structural exception

### crush — 30% thematic (meowgorithm, but not pure author-clustering)
- **#2791, #2788, #2782** all by meowgorithm, all "shell expansion / config" themed
- Pure author concentration: 30%; thematic concentration: 30% — coincident

## Cross-carrier coincidence statistics

- **W17 carriers at ≥40% concentration in this single tick**: 4 (litellm 100%, codex 40%, qwen-code 40%, goose 40%)
- **W17 prior peak from synth-697**: 2 carriers (force-push wave instance)
- **Probability under independence model**: assuming each carrier has ~25% baseline rate of ≥40% top-author concentration in any given tick (estimated from W17 base-rate observation), P(4 of 7 ≥40% simultaneously) ≈ C(7,4) × 0.25^4 × 0.75^3 ≈ 35 × 0.0039 × 0.422 ≈ **0.058 (~6%)** — **low under null**, suggesting non-independence (synchronized inflection)
- **Cross-carrier head-identity collisions observed in single tick**: 2 (qwen #3856==#3848 carrying `a0daf50c065f`; codex #21180==#21182 carrying `9925dca637f0`) — **first time the head-identity collision pattern from synth-700 has appeared on a second carrier in same tick**, falsifying the implicit synth-700 hypothesis that head-collision is qwen-code-specific

## Predictions

- **P-702.A** (0.50 prior): The 4-carrier 40%+ band **decays to ≤2 carriers** within 1 tick (mean-reversion to W17 baseline). If observed, the W17/W18 boundary inflection is **discrete**.
- **P-702.B** (0.45 prior): Cross-carrier head-identity collision count **stays ≥2** at next tick (i.e., regime-shift, not single-tick coincidence).
- **P-702.C** (0.30 prior): A 5th carrier crosses ≥40% within next 2 ticks (gemini-cli is the most likely candidate, currently at 30% with active cocosheng-g 4-minute clustering).
- **P-702.D** (0.60 prior): sst/opencode remains **anti-correlated** (≤20% concentration) for the entire W18 — opencode's distributed-contributor model is structurally distinct from the other 6 carriers.
- **P-702.E** (0.40 prior): The Beandon13 sub-class G outlier (100%) is **not retracted by mass-close** within 2 ticks — i.e., the litellm maintainer **lets the swarm sit** rather than triggering a sweep, leaving the 100% concentration measurable at next tick.

## Cross-references
- ADDENDUM-361: per-carrier capture data backing all percentages above.
- synth-697: prior 2-carrier wave benchmark.
- synth-698: bot-driven mass-close — possible terminal state for litellm Beandon13 sub-class G under P-701.B / P-702.E.
- synth-700: head-identity collision pattern (qwen-only hypothesis falsified here by jif-oai codex #21180==#21182).
- synth-701: sub-class G formal naming (litellm Beandon13 = extreme-tail of this band).
