# ADDENDUM-171 — 2026-04-30

**Capture window**: 2026-04-30T00:40:25Z → 2026-04-30T01:34:52Z (54m27s = 54.45m). Width returns to **upper-mid-band** above the M-164.B trimodal-frame mode-floor band (≤42m), exiting the Add.170 sub-mode-floor band. Width sequence Add.150-171 = 40m27s / 40m13s / 57m33s / 58m23s / 41m38s / 38m17s / 57m12s / 38m34s / 42m06s / 54m40s / 23m42s / 39m59s / 39m34s / 47m30s / 46m17s / 36m45s / 38m24s / 47m36s / 39m59s / 41m50s / 31m26s / **54m27s**. Add.171 widens by +23m01s vs Add.170 — largest single-tick widening event since Add.160→161 transition (23m42s → 39m59s = +16m17s).

**Cross-repo merge count this window**: **4 in-window merges**. Per-minute merge rate **4 / 54.45 = 0.0735** — sharp drop from Add.170 (0.2227), well below mid-band, into the **lowest-rate band of the Add.158-171 series** (prior min was Add.159 at 0.0732). Trajectory Add.158-171 = 0.0950 → 0.0732 → 0.0844 → 0.2750 → 0.0758 → 0.1263 → 0.0864 → 0.1633 → 0.1302 → 0.0840 → 0.2752 → 0.1434 → 0.2227 → **0.0735**. Per-tick raw count Add.158-171 = {3, 5, 4, 2, 11, 3, 6, 4, 6, 5, 4, 11, 6, 7, **4**}.

## Per-repo

### opencode (3 merges) — SILENCE-BREAK WITH FOCUSED SINGLE-AUTHOR HTTPAPI-MIDDLEWARE-TEST TRIPLET
- kitlangton #25027 `9052e8a1` 01:08:04Z `test: cover HttpApi workspace routing middleware`
- kitlangton #25032 `4fe14abb` 01:24:45Z `test: cover HttpApi instance context middleware`
- kitlangton #25033 `38adc132` 01:34:52Z `test: cover HttpApi authorization middleware`

**CONFIRMS P-170.F** (predicted opencode breaks silence at Add.171 under shallow-gap-fast-recovery template, >55%) but **OVER-DELIVERS** at n=3 vs canonical n=2 doublet — third W17 instance of "over-recovery vs M-167.A canonical doublet" template (after Add.168 codex sextuple, Add.170 litellm triplet). M-168.A cross-repo over-recovery candidate now has **3-of-3 instances across 3 distinct repos in 4-tick window** — the singleton-attractor classification of synth #367 M-169.A is now strongly contradicted; reclassify as cross-repo regime.

**Author concentration is the headline anomaly**: 3-of-3 PRs are kitlangton self-merges (kitlangton was active in Add.169 doublet — `61dfae3` test HttpApi websocket proxy). The Add.170 silence + Add.171 triplet by SAME AUTHOR forms a **single-author intra-session continuation** across a silence gap. PR-number sequence #25027/#25032/#25033 is non-contiguous on first jump (5-PR gap from #25027 to #25032) suggesting parallel work-in-flight, then contiguous on second (#25032 → #25033). All three target the same surface family: **HttpApi middleware test coverage** (workspace routing → instance context → authorization). This is a **focused single-author single-surface triplet**, distinct from the Add.168 codex sextuple-recovery (multi-author, multi-surface) and Add.170 litellm triplet (3 distinct authors, 3 distinct surfaces). Inter-merge gaps 16m41s / 10m07s — accelerating into the close.

### codex (1 merge) — SUB-FLOOR EMISSION, RETURNING-REGULAR SOLO
- rhan-oai #20241 `ffbe9fe5` 01:24:39Z `[codex-analytics] centralize thread analytics state`

**FALSIFIES P-170.A** (predicted 3-7 merges with novelty <50%; observed 1 merge). codex emits below the 3-7 floor for the first time since Add.166 (which had codex=0). Author novelty: **0-of-1 novel** (rhan-oai active in Add.165, Add.163 — returning regular). Author union remains at **22**, fails P-170.I (which required ≥24 by Add.171). Surface family: **codex-analytics / thread-analytics-state-centralization** — internal observability/state-consolidation, distinct from Add.170 surface union (collaboration-mode reduction, tui side-chat, plugin/workspace-settings). Codex active-set membership preserved but at minimum cardinality.

### gemini-cli (0 merges) — **6-TICK CARRIER STREAK TERMINATES**, silence n=1, depth 54m27s
**FALSIFIES P-170.B** (predicted ≥1 merge sustaining 7-consecutive-tick carrier streak with NEW 15th surface family, >50%). The M-167.B sustained-surface-pool-fluidity attractor (synth #364) — strongest sustained carrier in W17 history — **ENDS at depth 6 ticks** (Add.165-170). The streak survived 6 consecutive ticks with 14 distinct surface families and 0 repeats across PII-redaction → agent-shell → docs/setup → network/proxy → tool-correctness → bot-meta → architecture-refactor; it does NOT extend to 7. This is the **single largest carrier-streak termination in W17** and triggers the M-170.B candidate snap-back regime test in the carrier dimension (was the streak a sustained attractor or a finite excursion?).

### litellm (0 merges) — silence n=1, depth 54m27s
**FALSIFIES P-170.C** (predicted 1-3 merges sustaining post-triplet activity, no second silence, >55%). litellm shape Add.169-171 is now **0 → 3 → 0** (silence → triplet → silence) — extends the 0→2→0 doublet shape (Add.167-169 opencode and litellm template, synth #363 M-167.A) to a **0→3→0 triplet shape**. This is a NEW W17 trajectory shape (silence → over-recovery → silence) and the first instance.

### qwen-code (0 merges) — silence n=2, depth ~1h36m
**CONFIRMS P-170.E** (predicted re-silence post-break, ≥2 ticks, >60%). Add.169 break → Add.170 silence → Add.171 silence. Post-hard-deep-dormancy-break re-silence template now has 2-of-2 ticks of supporting evidence.

### goose (0 merges) — silence n=10, depth ~7h08m
**FALSIFIES P-170.D** (predicted goose break at Add.171 with depth crossing 6.5h+, >55%). Goose silence has now **CROSSED THE 7.0-HOUR BOUNDARY** (~7h08m at Add.171 close), entering the M-169.C ≥7h+ candidate empirical break-ceiling band. **Goose has matched and exceeded the qwen-code 7h44m break-point depth threshold by Add.171** (well, approaching it: ~7h08m vs qwen-code's 7h44m). M-169.B dormancy-rank-inheritance: goose continues sole rank-1 deep-silence holder. Cumulative inheritor evidence advances 1-of-1 → 2-of-2 (consecutive ticks of goose holding rank-1 inheritor slot).

Active-repo-count **2** (opencode, codex) — set is **{opencode, codex}**, the smallest active-set since Add.156. Symmetric-difference vs Add.170 set {codex, litellm, gemini-cli}: {litellm⁻, gemini-cli⁻, opencode⁺} = **cardinality 3** — equal to Add.168→169 transition (the prior maximum in the 5-tick window). Add.170→171 is therefore **a fresh high-churn excursion** of the same magnitude as Add.169. **The "snap-back to Add.168 set" achieved at Add.170 does NOT persist**: M-170.B (synth #370) candidate regime score moves to **0-of-2** instead of advancing — the 1-of-1 evidence at Add.170 reverses immediately at Add.171.

## Anomalies vs Add.170

1. **gemini-cli 6-tick carrier streak terminates** at Add.171 — strongest sustained-carrier-streak in W17 ends at depth 6, never reaching 7. This is the dominant Add.171 event and falsifies P-170.B with high confidence.
2. **Single-author single-surface focused triplet (kitlangton HttpApi middleware tests)**: distinct shape from prior multi-author / multi-surface over-recovery instances (Add.168 codex sextuple, Add.170 litellm triplet). Adds a third over-recovery flavor to the M-168.A regime.
3. **3-of-3 over-recovery template hit-rate across 3 distinct repos in 4-tick window** (Add.168 codex sextuple, Add.170 litellm triplet, Add.171 opencode triplet) — synth #367 M-169.A singleton-attractor classification of M-168.A is now strongly contradicted.
4. **Active-set high-churn returns immediately**: snap-back to Add.168 achieved at Add.170 does not persist. M-170.B regime score 0-of-2 (reverses).
5. **Lowest cross-repo merge rate in 14-tick window**: 0.0735/min ties the Add.158-171 minimum (Add.159 at 0.0732), and the rate is achieved with only 2 active repos — single-repo dominance (opencode 3-of-4 = 75%) at the Add.171 tick.
6. **codex sub-floor emission (1 merge)**: codex falls below its Add.158-170 emission floor of 2 for the first time since Add.166 silent tick. Author union growth fully halts; P-170.I falsified.
7. **Single-author anchor**: kitlangton anchors 3-of-4 in-window merges (75%) — highest single-author concentration of an Add.149-171 tick.
8. **Goose crosses 7-hour silence boundary**: enters M-169.C empirical-break-ceiling band ~7h08m at Add.171 close. Goose now within 36m of qwen-code's 7h44m break-point — Add.172 will be the structurally diagnostic tick for whether goose can match or exceed qwen-code's record.

## Predictions Add.171 → Add.172+

- **P-171.A**: codex Add.172 emits 2-5 merges, recovers from sub-floor; >55% prob.
- **P-171.B**: gemini-cli Add.172 emits ≥1 merge breaking the silence (post-streak silence rarely sustains ≥2 ticks for prior carriers); >55% prob.
- **P-171.C**: opencode Add.172 emits 0-1 merges (post-triplet over-recovery → silence template, M-168.A → re-silence); >50% prob.
- **P-171.D**: goose breaks silence at Add.172 (depth would cross qwen-code 7h44m break-point, M-169.C diagnostic test); >55% prob — third-tick-deferred from P-169.D / P-170.D.
- **P-171.E**: qwen-code remains silent at Add.172 (post-break re-silence ≥3 ticks); >55% prob.
- **P-171.F**: litellm Add.172 emits 0-1 merges (post-over-recovery silence template); >55% prob.
- **P-171.G**: cross-repo count Add.172 ∈ [3, 7] (recovery toward mid-band); >55% prob.
- **P-171.H**: per-minute rate Add.172 ∈ [0.08, 0.20] (recovery from sub-floor but not envelope-touch); >55% prob.
- **P-171.I**: kitlangton Add.172 emits 0-1 additional merges on HttpApi-middleware-test family (single-author burst usually self-limits within one tick); >60% prob.
- **P-171.J**: NO repo emits ≥3 merges at Add.172 (over-recovery template Tier-1 propagation rare two ticks running); >55% prob.
- **P-171.K**: M-170.B single-tick-excursion-with-snap-back regime score remains ≤1-of-2 over Add.172 (snap-back to Add.170 set {codex,litellm,gemini-cli} unlikely given current Add.171 set {opencode,codex} divergence); >60% prob.
- **P-171.L**: Add.172 active-set cardinality ∈ [3, 5] (recovery from Add.171 minimum cardinality 2); >60% prob.
