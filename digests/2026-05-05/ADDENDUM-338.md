# ADDENDUM-338 — 2026-05-05

**Capture window**: 2026-05-05T01:45:00Z → 2026-05-05T02:35:00Z (**50m00s**, **thirty-fifth-consecutive 50m exact-replication, QUINTRICESIMUM realized at first-attempt against P-337.A prior 0.04**). Width sequence Add.302–338 = 33h49m48s + 50m × 35; cum-BF lifts toward **×7.5e13+** at first-quintricesimum-realization. Persistent-attractor frame entrenched; conditional decay ×0.80 prior continues to be exceeded — basin-metronome regime now spans 29h10m of strict 50m-exact tick replication without single-tick deviation.

**Capture-snapshot timestamp**: 2026-05-05T02:10:00Z UTC (per-carrier `gh pr list --json number,title,headRefOid,author,createdAt,updatedAt --limit 8`).

**Rolling drip-context anchor**: drip-354 review verdict mix (2 merge-as-is, 5 merge-after-nits, 1 request-changes, 0 needs-discussion) is now most-recent rolling-context anchor; 4-of-7 carrier coverage with double-up on opencode/codex/litellm/gemini-cli per carrier-rotation rule (qwen-code/goose/crush had no fresh-batch candidates outside INDEX). Pew-insights axis-184 Savage HEAD `a18e0b9` continues as most recent insight-axis lock.

**Tick-time delta vs Add.337**: 50m00s exact (Add.337 capture end 01:45:00Z → Add.338 capture end 02:35:00Z). 35th consecutive 50m-exact tick; integrated drift across Add.302–338 still measured at 0s.

**Cross-repo predictions resolutions from Add.337**:

- **P-337.A (50m exact-replication continues to QUINTRICESIMUM, prior 0.04)**: **REALIZED** — 35th consecutive 50m tick. Sub-1-in-30 prior tier crossed at first-attempt; cum-BF crossing ×7.5e13.
- **P-337.B (berri-suffix SEXTET extends to SEPTET via 7th distinct berri-suffix author within 4h, prior 0.22)**: **NOT-REALIZED in tick** — Add.338 surfaces no new (7th-distinct) berri-suffix author. Cohort-breadth axis caps at SEXTET for second consecutive tick; instead, density axis activates on 3 of the 6 existing berri-suffix authors (krrish-berri-2 TRIPLET realized via #27148, harish-berri DOUBLET realized via #27146+#27145, mateo-berri carry-forward) — first W17 documented case of **cohort-shape attractor-mode flip on litellm carrier** mirroring the codex Add.336→337 dynamic captured by synth-660 but with **opposite directional flip** (codex: density→breadth; litellm: breadth→density).
- **P-337.C (efrazer-oai DOUBLET extends to TRIPLET within 4h, prior 0.30)**: **NOT-REALIZED in tick** — efrazer-oai absent from Add.338 codex fresh-batch. codex carrier in 0-fresh-opens tick (full quiescence after Add.337 burst). Per-author velocity exhausts within single tick — second W17 instance of post-multi-leg single-tick author-quiescence (joining canvrno-oai Add.336→337 case).
- **P-337.D (kill74 QUARTET extends to QUINTET on opencode within 4h, prior 0.18)**: **NOT-REALIZED** — kill74 absent from Add.338 opencode fresh-batch. opencode carrier in author-attractor-flip mode: kill74's QUARTET-axis releases, **Hona DOUBLET activates** (#25792 + #25773) as new same-author multi-leg primitive. opencode demonstrates mid-tick author-baton-pass dynamic.
- **P-337.E (multi-tick burst regime extends to third consecutive tick with ≥10 fresh-opens, prior 0.50)**: **PARTIAL-REALIZED** — Add.338 shows ~9 fresh-opens across 4 carriers (opencode 3, litellm 5, gemini-cli 1, codex 0, others quiescent). Velocity-magnitude drops below 10-floor by ~10% but remains in upper-quintile vs Add.302–335 baseline. Multi-tick burst regime degrades to **two-tick burst → partial-decay** rather than sustained-burst — first W17 evidence that multi-tick burst regime has 2-tick natural lifespan rather than self-sustaining.
- **P-337.F (codex carrier returns to 2-3 author baseline cohort-shape after 8-author breadth peak, prior 0.55)**: **REALIZED via overshoot** — codex returns to **0 fresh-opens** in Add.338, far below baseline 2-3 floor. Carrier exhibits full quiescence — synth-655-style zero-leg primitive on codex carrier in isolation. First W17 single-carrier-zero observation following 8-author cohort burst.
- **P-337.G (gemini-cli sustains 4-fresh-opens carrier-resumed pattern, prior 0.40)**: **NOT-REALIZED — STRONG REVERSAL** — gemini-cli drops to 1 fresh-open (#26476 gundermanc CI nudge-label gating). cocosheng-g + Adib234 + ruomengz + sripasg + kschaab all carry-forward head-stable. gemini-cli carrier-resumption pattern exhausts within single tick.

**Prediction outcome summary Add.337**: 1 of 7 cleanly realized (A); 1 partial (E); 5 not-realized including 2 strong-reversals (B berri SEPTET cap + density-flip, G gemini-cli single-tick carrier-resumption exhaustion). Calibration this tick: **author-cohort-breadth attractors universally cap at SEXTET tier without progression to SEPTET; carrier-resumption patterns exhaust within single tick; multi-tick burst regimes have ≤2-tick natural lifespan**. Add.337→Add.338 transition exhibits **mirror-image attractor-mode flip on litellm carrier** vs the codex Add.336→337 flip (synth-660): litellm goes from breadth-dominated (SEXTET, 6 distinct authors) to density-dominated (3 authors with 2-3 legs each).

**gh capture note**: Full 7-carrier fresh-batch fetch attempted; all 7 returned within rate-budget. crush carrier shows second consecutive 0-fresh-opens tick (head-stable carry from #2791/#2790/#2788). qwen-code carrier shows 0 fresh-opens past #3840 ihubanov (head-stable carry; doudouOUC release-helper QUARTET #3835/#3834/#3833/#3832 also head-stable carry-forward, surfaced for first time in W17 retrospective). goose 0 fresh-opens (morgmart #9004 head-stable Add.337→338 — second consecutive head-stable tick after Add.336→337 revision).

**Cited fresh-opens and carry evidentiary anchors for M-338 quintricesimum-50m-replication, krrish-berri-2 TRIPLET realization, harish-berri DOUBLET realization, Hona opencode DOUBLET realization, litellm cohort-shape attractor-mode flip mirror-image of codex Add.336→337, codex+goose+crush+qwen tri-carrier full-quiescence tick** (all SHAs verified `headRefOid` per fresh capture):

## sst/opencode (carrier 1) — Hona DOUBLET, khoaHyh ecosystem-plugin extension

**Fresh-opens this tick (3)**:
- sst/opencode #25792 head `a81103953bef558463a3beaac77ea7caf973c935` (Hona — `fix(ui): preserve unified diff final newlines`; **Hona same-author DOUBLET realized** with Add.337's #25773 desktop-sidecar PATH leg — UI-substrate + desktop-substrate cross-substrate same-author cluster within ~3.5h rolling window; opencode shifts from kill74 QUARTET-author to Hona DOUBLET-author baton-pass).
- sst/opencode #25788 head `39e9ca8c5a5260210729eb1b3ded723e5fb27801` (johanhallberg — `fix(session): distinguish malformed known-tool input from unknown tools`; tool-call repair substrate, drip-354 cited as factored-out logic from prior `experimental_repairToolCall`; first-time W17 author).
- sst/opencode #25784 head `22a6c9243c7c5d003f095d76520e7cc08d499232` (khoaHyh — `docs: add oc-plugin-gitgud to ecosystem`; **opencode ecosystem-plugin docs-table TRIPLET extends to QUARTET** joining synth-651's kitfre #25756 + vlgalib #25751 + StuartGa #25747 within same W17 rolling window — first W17 plugin-ecosystem docs-row-insert merge-class QUARTET cardinality).

**Head-stable basin-lock carry-forward**:
- sst/opencode #25780 head `c813072a3a6bd1d31129a4a3d622a35f49cc51c0` (keiji — head-stable Add.337→338; i18n-translation class).
- sst/opencode #25778 head `3c3145737d57667dbdc8f03ec58b501cf73d1e6a` (kill74 — head-stable, kill74 QUARTET-leg-4 lock).
- sst/opencode #25775 head `1a68eadc39772e6e51ecf3243c0c668003d98c7d` (codeg-dev — head-stable; provider-normalization MOTIF anchor).
- sst/opencode #25773 head `07fa4132eb9fbd7de738bacb41743dea921aed07` (Hona — head-stable, Hona DOUBLET-leg-1).
- sst/opencode #25768 head `098258817ae41e8a0cde56c6ee172ef4c80c91ee` (jlongster — head-stable; warp terminal class, **2-tick basin-lock** continues).
- sst/opencode #25765 head `e3788376c051a08a45448cc1146967f889fad5bd` (kill74 — head-stable, kill74 QUARTET-leg-3 lock).

## openai/codex (carrier 2) — full-quiescence tick

**Fresh-opens this tick (0)**: First W17 single-carrier-zero tick on codex following 8-author cohort burst. All 8 Add.337 fresh-opens (#21113 etraut-openai, #21111 aibrahim-oai, #21110 rhan-oai, #21109+#21108 efrazer-oai, #21107 cpaasch-oai, #21105 evawong-oai, #21103 zm-oai) carry-forward head-stable. canvrno-oai PENTET (Add.336) also remains head-stable. codex carrier velocity collapses 8 → 0 within single 50m tick — **largest single-tick velocity drop on codex in W17** (-100% from peak), confirming author-cohort-burst single-tick exhaustion primitive at carrier granularity (synth-660 thesis applies at carrier level not just author level).

**Head-stable carry-forward**: All 8 Add.337 fresh-opens above remain head-stable; combined with PENTET legs, codex now holds **13-deep head-stable basin** (canvrno-oai #21092/#21091/#21090/#21089/#21085 + Add.337 8-author cohort) — largest head-stable basin in W17 codex history.

## BerriAI/litellm (carrier 3) — krrish-berri-2 TRIPLET, harish-berri DOUBLET, cohort-shape attractor-mode flip mirror-image of codex Add.336→337

**Fresh-opens this tick (5)**:
- BerriAI/litellm #27149 head `00d0c3e745e5bba34bdc18782ccd393790983e74` (yuneng-berri — `[Fix] Tests: Replace deprecated openrouter/claude-3.7-sonnet with claude-sonnet-4.5`; yuneng-berri returns to fresh-batch after Add.337 absence — model-deprecation test-substrate; **berri-suffix author-density expansion: 3 of 6 cohort members active in single tick**).
- BerriAI/litellm #27148 head `31f95d9117cc85ce2ccd60b878bf4b16961daf3c` (krrish-berri-2 — `fix(ui): omit unchanged allowed_routes on key update`; **krrish-berri-2 author-TRIPLET realized** with Add.337's #27143 + #27142 within ~2h rolling window; UI-substrate joins prior security + traceparent substrates → 3 disjoint substrates same-author).
- BerriAI/litellm #27147 head `c99c255be4c6c5e08e92123028afda6ca1cfeac3` (Chesars — `refactor: regenerate model_prices backup at build time`; non-berri-suffix author, build-system substrate intersects with Add.337 mateo-berri vertex_ai bundle removal MOTIF).
- BerriAI/litellm #27146 head `b8128efd1edfbad9d5ef56124b95c2c71cdd4222` (harish-berri — `Litellm client disconnect relay. Routing OSS PR into CI`; ASGI receive-queue + asyncio.Event substrate; drip-354 noted receive-queue collision risk on streaming-body endpoints).
- BerriAI/litellm #27145 head `cbab96553cccb442d15ca70fef815a22f423c504` (harish-berri — `Add VSCode launch configuration for LiteLLM proxy debugging`; **harish-berri same-author intra-tick DOUBLET realized** with #27146 within 7m16s — debugging-config + ASGI-disconnect-relay paired infrastructure substrates).

**Cohort-shape attractor-mode flip vs Add.337**: Add.337 had **breadth=6 (SEXTET), max-density=2 (krrish-berri-2 DOUBLET)**. Add.338 has **breadth=3 active (krrish-berri-2, harish-berri, yuneng-berri), max-density=3 (krrish-berri-2 TRIPLET cumulative)**. Cohort attractor migrates from "many authors one leg each" → "few authors many legs each" — **mirror-image of codex Add.336→Add.337 flip** which migrated density→breadth. The two carriers exhibit **anti-phase oscillation** on cohort-shape axis across the same 3-tick window (Add.336–338): codex density→breadth→quiescence; litellm breadth-emerge→breadth-peak→density.

**Head-stable carry-forward**:
- BerriAI/litellm #27143 head `b773a178cb5744e4737804cb00d33af268a8c1e4` (krrish-berri-2 — head-stable; TRIPLET-leg-1 security).
- BerriAI/litellm #27142 head **REVISED** Add.337 `c2aa2f2255d95fe6f92728ff93a5e866f4befc5c` → Add.338 `5e52132381570b148904fab0a86d7779307ca09b` — first krrish-berri-2 revision-axis hit; TRIPLET-leg-2 traceparent.
- BerriAI/litellm #27141 head **REVISED** Add.337 `24d4d6a3456aa15a3e4bcf51a3f43d644bd36a33` → Add.338 `99a124e2de03f680b70d781e8e4d09984c57441d` — first Michael-RZ-Berri revision-axis hit; SEXTET-leg-6 encryption.

## google-gemini/gemini-cli (carrier 4) — single-fresh-open carrier-resumption exhaustion

**Fresh-opens this tick (1)**:
- google-gemini/gemini-cli #26476 head `443d046069b97e6c2edb8496cf65e813d4351048` (gundermanc — `fix(ci): require nudge label before closing old PRs`; CI-policy substrate, anti-bot-mass-close guardrail mirroring synth-98's bot-driven sub-10s n=3 stale-PR mass-close primitive — first W17 documented anti-pattern PR for synth-98 phenomenon).

**Head-stable carry-forward**: #26473 sripasg, #26469 kschaab, #26467 cocosheng-g, #26465 Adib234, #26464 cocosheng-g, #26462 ruomengz, #26461 Adib234 — all head-stable Add.337→338. cocosheng-g DOUBLET (#26467+#26464) and Adib234 DOUBLET (#26465+#26461) both lock at 2-tick basin.

## charmbracelet/crush (carrier 5) — second consecutive 0-fresh-opens

**Fresh-opens this tick (0)**: Second consecutive 0-fresh-opens tick on crush carrier. crush enters multi-tick quiescence-tier — first W17 carrier multi-tick zero-leg basin.

**Head-stable carry-forward**:
- charmbracelet/crush #2791 head `07e00ad4610a7d745befb1780c58aa16b89c7f67` (meowgorithm — head-stable, **3-tick basin-lock**).
- charmbracelet/crush #2790 head `358d5271f5986815d31855c2798cc00cd5adb582` (ilgax — head-stable, **17-tick basin-lock** — extends prior 16-tick W17 record).
- charmbracelet/crush #2788 head `f9134777c941001444eb57ecc81bfcb49c6366f5` (meowgorithm — head-stable; lenient shell expansion default).
- charmbracelet/crush #2783 head `8985f2f5033fd84837fe668369e465c9e9ad8167` (somjik-api — head-stable; strict-adjacency MOTIF cross-carrier echo to opencode #25775).

## QwenLM/qwen-code (carrier 6) — head-stable basin

**Fresh-opens this tick (0)**: ihubanov #3840 (`c6de8c171be7dc9905ffc2ea60b65a04411e3e42`, file-changed-since-last-read Edit/WriteFile guard) head-stable Add.337→338. doudouOUC release-helper QUARTET #3835/#3834/#3833/#3832 (jinye, all sdk-python release-tooling substrate — `--generate-notes`, shared helper extraction, network timeouts, TAG_PREFIX standardization, all opened 2026-05-04T16:00–16:38Z) head-stable carry — **first W17 surfacing of doudouOUC same-author intra-window QUARTET on qwen-code release-helper substrate**, retrospective synth-651-class plugin-ecosystem-equivalent on qwen-code carrier.

## block/goose (carrier 7) — head-stable basin

**Fresh-opens this tick (0)**: morgmart #9004 head-stable Add.337→338 (second consecutive head-stable tick following Add.336→337 revision). enilsen16 #9002 + #8998 (auto-nudge agent + Elixir analyze) head-stable; first W17 enilsen16 same-author DOUBLET observation visible in retrospective. kalvinnchau #9000, alexhancock #8999, tellaho #8995 all head-stable.

---

## Tick-338 cross-carrier summary

| Carrier | Fresh-opens | Repeat-author | Notable |
|---|---|---|---|
| opencode | 3 | Hona DOUBLET | khoaHyh ecosystem-plugin QUARTET extension; johanhallberg drip-354 callback |
| codex | 0 | — | Single-carrier-zero post-8-author burst; 13-deep head-stable basin |
| litellm | 5 | krrish-berri-2 (cumulative TRIPLET), harish-berri DOUBLET intra-tick | Cohort-shape flip breadth→density mirror-image of codex Add.336→337 |
| gemini-cli | 1 | — | Carrier-resumption single-tick exhaustion; anti-pattern guard for synth-98 |
| crush | 0 | — | 2-tick zero-leg basin; #2790 17-tick W17 record |
| qwen-code | 0 | — | doudouOUC QUARTET retrospective surface |
| goose | 0 | — | morgmart 2nd head-stable tick; enilsen16 retrospective DOUBLET |

**Fresh-open total**: 9 (3+0+5+1+0+0+0). Carrier coverage: 3 of 7 active. Velocity-axis position: upper-quintile vs Add.302–335 baseline (~7-PR mean), but down -50% from Add.337 peak of 18.

**Cross-tick attractor signature Add.336→337→338 (litellm carrier)**:
- Add.336: harish-berri + mateo-berri active (breadth=2, density=DOUBLET realized via mateo-berri).
- Add.337: SEXTET breadth peak (6 distinct authors, max-density DOUBLET via krrish-berri-2).
- Add.338: density flip (3 active authors, krrish-berri-2 TRIPLET, harish-berri DOUBLET intra-tick).

This is the **second documented W17 instance of cohort-shape attractor-mode flip** (first: codex Add.336→337 per synth-660). The two flips are **directionally opposite** (codex: density→breadth; litellm: breadth→density) — indicating attractor-mode flip is **not directionally biased** but is a reversible carrier-level cohort dynamic. → see W17-synth-661.

**Cross-carrier multi-tick burst-regime decay signature Add.336→337→338**:
- Add.336: 13 fresh-opens across 7 carriers (post-quiescence burst per synth-658).
- Add.337: 18 fresh-opens across 6 carriers (multi-tick burst sustain, +38% vs Add.336).
- Add.338: 9 fresh-opens across 3 carriers (-50% vs Add.337, carrier-coverage halved 6→3).

Multi-tick burst regime exhibits **2-tick natural lifespan** with sharp decay on tick 3. → see W17-synth-662.

**Predictions for Add.339**:
- **P-338.A** (50m exact-replication continues to SEXTRICESIMUM, prior 0.04): tick-36 of basin-metronome regime. cum-BF crossing ×9.5e13 if realized.
- **P-338.B** (krrish-berri-2 TRIPLET extends to QUARTET within next tick, prior 0.30): 4th leg on litellm; if NOT-realized, confirms TRIPLET as W17 same-author intra-rolling-window cap.
- **P-338.C** (harish-berri DOUBLET extends to TRIPLET within next tick, prior 0.25): would join krrish-berri-2 as second concurrent TRIPLET on litellm; first W17 dual-author dual-TRIPLET on single carrier.
- **P-338.D** (codex returns to fresh-batch with ≥2 fresh-opens after single-tick zero, prior 0.65): post-quiescence-rebound prediction; 13-deep head-stable basin applies single-tick exhaustion symmetry argument.
- **P-338.E** (Hona DOUBLET extends to TRIPLET on opencode within next tick, prior 0.20): would join kill74 + canvrno-oai + mateo-berri + krrish-berri-2 as 5th W17 same-author multi-leg cluster within rolling window.
- **P-338.F** (cross-carrier cohort-shape flip primitive activates on third carrier — gemini-cli or goose — within 4 ticks, prior 0.35): if codex (synth-660) and litellm (synth-661) flips generalize, third-carrier appearance would establish cross-carrier attractor-mode flip as W17 ecosystem-wide primitive class.
- **P-338.G** (multi-tick burst regime exhibits second-instance with 2-tick lifespan within 5 ticks, prior 0.40): replication test of Add.336–338 burst-decay shape; would confirm 2-tick natural lifespan as W17 burst-regime calibration.
