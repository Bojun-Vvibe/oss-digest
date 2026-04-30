# ADDENDUM-174 — 2026-04-30

**Capture window**: 2026-04-30T03:09:17Z → 2026-04-30T03:33:28Z (24m11s = 24.183m). Width contracts further into the **deep lower band** below Add.173 (37m43s) and below the M-164.B trimodal-frame mode-floor band — second-narrowest single-tick window in the Add.158-174 sequence (only Add.167 at 23m42s is narrower). Width sequence Add.151-174 = 40m13s / 57m33s / 58m23s / 41m38s / 38m17s / 57m12s / 38m34s / 42m06s / 54m40s / 23m42s / 39m59s / 39m34s / 47m30s / 46m17s / 36m45s / 38m24s / 47m36s / 39m59s / 41m50s / 31m26s / 54m27s / 56m41s / 37m43s / **24m11s**. Add.174 narrows by −13m32s vs Add.173 — second consecutive material width contraction.

**Cross-repo merge count this window**: **2 in-window merges**. Per-minute merge rate **2 / 24.183 = 0.0827** — sharp crash from the Add.173 upper-band 0.2122 (−0.1295, ~−61%), back down through the M-164.B mode-floor band into the **sub-floor band**. Trajectory Add.158-174 = 0.0950 → 0.0732 → 0.0844 → 0.2750 → 0.0758 → 0.1263 → 0.0864 → 0.1633 → 0.1302 → 0.0840 → 0.2752 → 0.1434 → 0.2227 → 0.0735 → 0.1059 → 0.2122 → **0.0827**. Per-tick raw count Add.158-174 = {3, 5, 4, 2, 11, 3, 6, 4, 6, 5, 4, 11, 6, 7, 4, 6, 8, **2**}. CONFIRMS P-173.G (count ∈ [2,7]) at the lower edge — bottom of the predicted band. CONFIRMS P-173.H (rate ∈ [0.05, 0.18]) — observed 0.0827 well inside the predicted post-burst cool-down band. CONFIRMS P-173.I (no repo emits ≥4) — max repo tick is 1.

## Per-repo

### litellm (1 merge) — **POST-AMPLIFICATION CRASH**, CONFIRMS P-173.A, CONFIRMS P-173.K
- sruthi-sixt-26 #26814 `26cb28ef` 03:23:23Z `fix(proxy/batches): forward model to retrieve_batch for bedrock`

**STRONGLY CONFIRMS P-173.A** (predicted 0-2 merges; observed 1). litellm shape Add.169-174 = `3 → 0 → 4 → 7 → 1` — the back-to-back amplification cascade (4 → 7) **terminates** with a sharp crash to sub-floor (1). Drop magnitude Add.173→174 = 7 → 1 = **−6**, the largest single-tick litellm contraction in the Add.158-174 window. The +3 amplification (Add.172→173) is followed by a −6 collapse — the asymmetric crash exceeds the build-up by 2× and produces a **net regression below the pre-amplification baseline** (Add.171=0, Add.174=1). This is structurally analogous to the post-Add.168 codex sextuple collapse (6 → 5 → 4 → 6 → 1 → 1 → 1) but **compressed into a single tick** rather than a multi-tick decay tail.

**CONFIRMS P-173.K** (Sameerlite emits 0 at Add.174; Sameerlite contributed 2-of-7 at Add.173 and 0-of-1 here). Author-anchor saturation parallel to stuxf Add.172→173 = 3→0 holds. Add.174 author sruthi-sixt-26 is **novel to the Add.158-173 litellm author union** (extends litellm author union; Sameerlite/ryan-crabbe-berri/mateo-berri/Michael-RZ-Berri/yuneng-berri/stuxf union now adds sruthi-sixt-26).

Surface: **proxy/batches bedrock model-forwarding** — distinct from all 7 Add.173 surfaces (proxy-search-creds / oss-staging / bedrock-pricing / team-budget-fallback / proxy-auth-guardrail / proxy-passthrough-caller-identity / npmrc-tooling). Bedrock surface family **recurs** vs Add.173 (mateo-berri #26800 was bedrock-pricing); this is a within-vendor narrow-surface refresh (bedrock pricing → bedrock batch forwarding) under separate authors. Surface-family-recurrence-with-author-rotation is a **NEW W17 micro-pattern candidate** (not yet promoted).

### codex (0 merges) — **SUB-FLOOR TO ZERO-FLOOR**, FALSIFIES P-173.B, EXTENDS POST-BURST SUPPRESSION TO 4-of-4 TICKS
**STRONGLY FALSIFIES P-173.B** (predicted 2-5 merges breaking the 3-tick sub-floor; observed 0 = breaks DOWNWARD into zero-emission). codex now exhibits **4-of-4 floor-or-below ticks** Add.171-174 (1, 1, 1, **0**). This is the **first zero-emission codex tick in the Add.158-174 window** and the first 4-tick sustained suppression streak. codex emission profile post-Add.168-sextuple now 5/4/6/1/1/1/**0** — a 7-tick monotonic-flat-then-collapse tail. The post-burst-suppression hypothesis (synth #376 M-176.A) advances **decisively**: not only is sub-floor sustained, but it **deepens into zero-emission**. The "monotonic-flat tail" descriptor is now superseded by **monotonic-non-increasing tail with terminal collapse**.

This converts the post-Add.168-sextuple sub-regime from "sustained-low-emission" to **"asymptotic-zero-attractor-after-burst"** — a structurally distinct M-176.A.1 sub-regime candidate. The depth-collapse (1→0) following 3 sub-floor ticks suggests the suppression band is **time-extended below the floor**, not just at it.

### opencode (0 merges) — silence n=3, depth ~2h08m — FALSIFIES P-173.C, EXTENDS POST-OVER-RECOVERY SILENCE
**FALSIFIES P-173.C** (predicted ≥1 merge breaking depth-2 silence; observed silence sustained, n=3). opencode shape Add.170-174 = `0 → 3 → 0 → 0 → 0` — extends post-Tier-3 over-recovery silence to **depth 3 ticks**. opencode now matches gemini-cli at silence n=3 (gemini-cli also extends to n=4 — see below). The post-Tier-3-over-recovery silence depth is now diagnostically deeper than originally hypothesized in the Add.171-172 frame; opencode silence after a 3-merge tick has reached n=3, which is structurally aligned with the gemini-cli post-carrier-streak silence regime (M-171.A, synth #371) but emerging in a **distinct repo and shape**.

### gemini-cli (0 merges) — **POST-CARRIER-STREAK SILENCE EXTENDS TO n=4**, depth ~3h, FALSIFIES P-173.E
**FALSIFIES P-173.E** (predicted ≥1 merge; observed silence sustained, n=4). gemini-cli silence now n=4 ticks at depth ~3h. The M-171.A finite-carrier-streak-depth-bound regime (synth #371) gains **third supporting tick**: post-streak silence is **sustained ≥4 ticks**, materially deeper than the W17 typical post-carrier brief-silence band. Two-tick deferred prediction streak for gemini-cli (P-172.F + P-173.E both falsified) — the gemini-cli post-carrier short-silence model is now under sustained falsification pressure.

### goose (0 merges) — silence n=13, depth ~9h06m — **CROSSES 9h, EXTENDS M-174.A TO 3-of-3**, CONFIRMS P-173.D
**CONFIRMS P-173.D** (predicted goose silence sustained, depth >9h; observed depth ~9h06m, silence n=13). The synth #374 M-174.A unbounded-deep-dormancy-attractor regime advances to **3-of-3 supporting ticks** (Add.172 exceeded qwen-code 7h44m ceiling; Add.173 extended past 8.5h; Add.174 extends past 9h without break). Five-tick deferred break-prediction streak (P-169.D / P-170.D / P-171.D / P-172.D all falsified historically; P-173.D would have been falsified-by-prediction but P-173.D **predicted continuation** and was confirmed). The M-174.A regime now has more confirming ticks than any other late-W17 silence regime.

M-169.B dormancy-rank-inheritance regime advances to **5-of-5 ticks** of goose holding rank-1 deep-silence holder slot. CONFIRMS synth #374 P-374.E (extended).

### qwen-code (1 merge) — **FALSIFIES P-173.F**, ALTERNATING-DOUBLET BREAKS EARLIER THAN P-374.J PREDICTED
- cyphercodes #3752 `f771acb3` 03:22:05Z `fix(cli): persist directory add entries`

**FALSIFIES P-173.F** (predicted 0 merges extending alternating-doublet to 1-0-0-1-0-0; observed 1, breaking the alternating-doublet pattern at Add.174 instead of the synth #374 P-374.J period-3 prediction at Add.175). qwen-code Add.169-174 = `1 → 0 → 0 → 1 → 0 → 1` — **NEW shape**, period appears to be 3 in the Add.169-174 window (1-0-0 / 1-0-1?), but the second triplet (1-0-1) is NOT identical to the first (1-0-0). The period-3 sub-regime hypothesis P-374.J is **PARTIALLY FALSIFIED**: emission DID land at Add.174 (one tick earlier than P-374.J predicted Add.175), but the broader **alternating-3-tick activity-cluster** structure may still hold if Add.175 is silent.

Author cyphercodes is novel to the Add.169-174 qwen-code author union (prior emissions were cyphercodes-distinct or single-author from #3742-class). Surface: **cli persist directory-add entries** — operational state-persistence surface, distinct from prior qwen-code emissions in the Add.169-174 window.

Active-repo-count **2** (litellm, qwen-code) — set is **{litellm, qwen-code}**. CONFIRMS P-173.L (cardinality ∈ [2,5]) at the lower edge. PARTIALLY FALSIFIES P-173.M (predicted active set INCLUDES gemini-cli OR opencode; observed neither — qwen-code substituted for the predicted post-silence break candidates). Symmetric-difference vs Add.173 set {litellm, codex}: {codex⁻, qwen-code⁺} = **cardinality 2** — single repo-swap (codex → qwen-code).

## Anomalies vs Add.173

1. **litellm post-amplification crash 7→1 (−6)**: largest single-tick litellm contraction in Add.158-174. Confirms P-173.A. The +3 amplification (Add.172→173) followed by a −6 collapse is a **net-negative escalation cycle** — net change Add.171→174 = 0 → 4 → 7 → 1 = +1 from baseline, but the collapse magnitude exceeds the build-up by 2×. NEW M-174.A.1 sub-regime candidate: **asymmetric-collapse-after-amplification** (collapse > build-up).
2. **codex 4-of-4 floor-or-below streak with terminal zero-emission**: first zero-emission codex tick in Add.158-174. Post-Add.168-sextuple suppression deepens from sub-floor to zero-floor. M-176.A advances; **NEW M-176.A.1 sub-regime candidate**: post-burst monotonic-non-increasing tail with terminal zero-collapse.
3. **Three repos at silence n≥3 simultaneously** (opencode n=3, gemini-cli n=4, goose n=13): multi-tick-silence repo cardinality matches Add.173 (3) but with **deepening individual depths**. NEW shape: silence-depth distribution stratifies into {n=3, n=4, n=13} — three distinct silence-band tiers in a single tick.
4. **goose crosses 9h without break** (M-174.A 3-of-3): unbounded-attractor regime now has stronger evidence than any competing W17 silence model. Five-tick deferred break-prediction track means the post-7h break-imminent model is **conclusively falsified** for the Add.169-174 window.
5. **qwen-code breaks alternating-doublet at Add.174** instead of Add.175: P-374.J period-3 prediction is partially falsified by being **one tick early**, but the broader 3-tick-cluster shape may persist. Diagnostic test moves to Add.175 silence.
6. **Width contracts to 24m11s** — second-narrowest in Add.158-174 (only Add.167 23m42s narrower). Combined with the 2-merge count, Add.174 produces a sub-floor rate (0.0827) that **inverts the Add.173 width-rate inverse-correlation finding**: both width and rate dropped together. NEW observation: post-burst tick combines narrow-width + low-count, suggesting the rate-width inverse correlation breaks at burst-collapse boundaries.
7. **Active-set Tier substitution** (codex→qwen-code): codex falls out of the active set after sustaining 3 sub-floor ticks; qwen-code substitutes via alternating-doublet break. Active-set composition is now structurally Tier-2-litellm + Tier-3-qwen-code, with all Tier-2-codex/Tier-3-opencode/Tier-3-gemini-cli/Tier-3-goose silent.
8. **Bedrock surface-family recurs across litellm authors** (mateo-berri Add.173 + sruthi-sixt-26 Add.174): within-vendor narrow-surface refresh under author rotation. NEW micro-pattern candidate: **surface-family-recurrence-with-author-rotation** (Tier-2 within-vendor surface family persists across the over-recovery → crash boundary).

## Predictions Add.174 → Add.175+

- **P-174.A**: litellm Add.175 emits 0-3 merges (post-crash partial-recovery candidate; full re-amplification highly improbable given Add.172-174 cycle); >55% prob.
- **P-174.B**: codex Add.175 emits 0-2 merges (4-tick suppression streak persists or partially breaks; 3+ would be a sharp regime exit); >55% prob.
- **P-174.C**: opencode Add.175 emits ≥1 merge breaking depth-3 silence (depth-4 silence rare for opencode in W17); >55% prob.
- **P-174.D**: goose Add.175 silence continues, depth crosses 9.5h, M-174.A advances to 4-of-4; >55% prob (six-tick deferred break-prediction track).
- **P-174.E**: gemini-cli Add.175 emits ≥1 merge (n=5 silence highly anomalous for recent-carrier repo); >50% prob (downgraded from P-173.E given sustained falsification).
- **P-174.F**: qwen-code Add.175 emits 0 merges (Add.174 emission completes the 3-tick activity cluster; period-3 broader hypothesis preserved if Add.175 silent); >50% prob.
- **P-174.G**: cross-repo count Add.175 ∈ [2, 6] (continued post-burst regression toward mid-band); >55% prob.
- **P-174.H**: per-minute rate Add.175 ∈ [0.05, 0.16] (post-burst rate cool-down sustained); >55% prob.
- **P-174.I**: NO repo emits ≥4 merges at Add.175 (M-168.A regime in cool-down phase post-litellm-collapse); >55% prob.
- **P-174.J**: M-168.A regime extends to 5-of-7 ticks at Add.175 (i.e., NO ≥3 emission), closing the over-recovery dominance window; >50% prob (downgraded — Tier-2 over-recovery may resurface).
- **P-174.K**: Active-set cardinality Add.175 ∈ [2, 4]; >60% prob.
- **P-174.L**: Active-set Add.175 INCLUDES opencode OR gemini-cli (two-tick deferred break candidates); >55% prob.
- **P-174.M**: codex zero-emission Add.174 does NOT extend to a second zero-emission tick at Add.175 (0-tick cap on zero-emission band); >50% prob.
- **P-174.N**: litellm Add.175 contains NO bedrock-surface-family PR (surface-family-recurrence-with-author-rotation does not extend to a third tick); >55% prob.
- **P-174.O**: If goose breaks at Add.175, magnitude ≥2 merges (deeper-dormancy → larger backlog correlation, depth ≥9.5h); >50% prob conditional on break.
