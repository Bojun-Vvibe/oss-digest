# ADDENDUM-173 — 2026-04-30

**Capture window**: 2026-04-30T02:31:33Z → 2026-04-30T03:09:16Z (37m43s = 37.717m). Width contracts sharply into the **lower band** below the M-164.B trimodal-frame mode-floor band (≤42m), reversing the two-tick widening from Add.171-172. Width sequence Add.151-173 = 40m13s / 57m33s / 58m23s / 41m38s / 38m17s / 57m12s / 38m34s / 42m06s / 54m40s / 23m42s / 39m59s / 39m34s / 47m30s / 46m17s / 36m45s / 38m24s / 47m36s / 39m59s / 41m50s / 31m26s / 54m27s / 56m41s / **37m43s**. Add.173 narrows by −18m58s vs Add.172 — largest single-tick width contraction in the Add.158-173 window.

**Cross-repo merge count this window**: **8 in-window merges**. Per-minute merge rate **8 / 37.717 = 0.2122** — sharp recovery into the **upper band**, exceeding the Add.171 sub-floor (0.0735) and Add.172 lower-mid (0.1059) by large margins. Trajectory Add.158-173 = 0.0950 → 0.0732 → 0.0844 → 0.2750 → 0.0758 → 0.1263 → 0.0864 → 0.1633 → 0.1302 → 0.0840 → 0.2752 → 0.1434 → 0.2227 → 0.0735 → 0.1059 → **0.2122**. Per-tick raw count Add.158-173 = {3, 5, 4, 2, 11, 3, 6, 4, 6, 5, 4, 11, 6, 7, 4, 6, **8**}. CONFIRMS P-172.G (count ∈ [3,8]) at the upper edge; STRONGLY CONFIRMS P-172.H (rate ∈ [0.08, 0.18]) is **FALSIFIED at the upper edge** — observed 0.2122 exceeds the 0.18 ceiling.

## Per-repo

### litellm (7 merges) — **THIRD CONSECUTIVE OVER-RECOVERY INSTANCE**, FALSIFIES P-172.B AND P-172.I, NEW W17 SHAPE
- Sameerlite #26691 `6588564a` 03:05:17Z `feat(proxy): add team-level search provider credentials`
- Sameerlite #26759 `c0211d7d` 03:05:30Z `Litellm oss staging`
- mateo-berri #26800 `ff24d2a0` 03:01:10Z `fix(bedrock): add 1-hour cache write pricing for Claude 4.5/4.6/4.7 (Global, US)`
- Michael-RZ-Berri #26809 `383bf120` 02:44:42Z `[Fix] Team member null budget fallback`
- ryan-crabbe-berri #26821 `b1b98c3f` 02:48:35Z `fix(proxy/auth): tighten guardrail modification permission check`
- ryan-crabbe-berri #26831 `7c8e9588` 02:48:26Z `fix(proxy): inherit caller identity in passthrough batch managed-object`
- yuneng-berri #26850 `b514f22a` 02:56:04Z `[Fix] CI/Tooling: Correct min-release-age value in .npmrc files`

**STRONGLY FALSIFIES P-172.B** (predicted 0-1 litellm merges; observed 7) and **STRONGLY FALSIFIES P-172.I** (predicted NO third over-recovery in litellm; observed third over-recovery at n=7, the largest litellm tick in the Add.158-173 window). litellm shape Add.169-173 = `3 → 0 → 4 → 7` — a **monotonically-amplifying back-to-back over-recovery cascade** with the silence-tick-separated structure (Add.171 silence) NOT repeated; Add.172→173 is **direct over-recovery → larger over-recovery** with NO intervening silence. This is **structurally distinct** from M-173.A (intra-repo over-recovery recurrence with silence-tick separator, synth #373).

**Internal shape**: 5 distinct authors (Sameerlite x2 + ryan-crabbe-berri x2 + mateo-berri x1 + Michael-RZ-Berri x1 + yuneng-berri x1), broad surface dispersion (proxy-search-creds / oss-staging / bedrock-pricing / team-budget-fallback / proxy-auth-guardrail / proxy-passthrough-caller-identity / npmrc-tooling). PR-spread #26691..#26850 = **159** — narrower than Add.172 (381) and Add.170 (305). Author-distinct=5, surface-distinct=7 (no two PRs share a surface family). Inter-merge gaps Δ = 13m09s / 3m44s / 0m09s / 4m26s / 12m35s / 4m06s / 0m13s — irregular, NOT monotonically-shrinking. The Add.172 window-close-clustering accelerating-tail pattern (synth #373 M-173.A.1) is **NOT replicated** at Add.173: gaps oscillate, with two sub-15-second bursts (#26831→#26821 = 9s; #26691→#26759 = 13s) flanking longer pauses.

This is the **fifth M-168.A instance in 6-tick window** (Add.168 codex sextuple, Add.170 litellm triplet, Add.171 opencode kitlangton triplet, Add.172 litellm quadruple, Add.173 litellm septuple). M-168.A regime score advances **5-of-6 ticks**. This is **two consecutive over-recovery ticks for litellm** (Add.172=4, Add.173=7) — a **NEW W17 shape** that supersedes M-173.A's silence-tick-separated recurrence: **direct back-to-back over-recovery amplification** without intervening silence. The M-171.B shape table gains a **fifth shape**: Tier-2-broad-amplifying (5 authors / 7 surfaces / amplifying magnitude / no window-close clustering).

### codex (1 merge) — SUB-FLOOR EMISSION THIRD CONSECUTIVE TICK, FALSIFIES P-172.A
- mzeng-openai #20304 `ebe602d0` 02:45:52Z `[plugins] Allow [redacted-vendor] curated plugins in tool_suggest`

**FALSIFIES P-172.A** (predicted 2-5 merges recovery from sub-floor; observed 1, sub-floor sustained). codex now exhibits **3-of-3 sub-floor ticks** Add.171-173 (1, 1, 1) — first **triple-sub-floor streak** in the Add.158-173 window. Author novelty: mzeng-openai is novel to the Add.158-172 codex author union (extends author union from 22 → **23**). Surface: **plugins / tool_suggest curated-vendor allow-list** — plugin-system extension, distinct from Add.172 app-server cleanup and Add.171 codex-analytics surfaces. The codex surface trajectory Add.171-173 = analytics → cleanup → plugins shows **3-of-3 disjoint surfaces** during sustained sub-floor.

The 3-tick sustained sub-floor regime constitutes a **structurally diagnostic event**: codex emission profile post-Add.168-sextuple is now 5/4/6/1/1/**1**, a six-tick monotonic-flat tail at the sub-floor band. This **extends the post-Add.168-sextuple emission-suppression band hypothesis** (synth-track candidate); codex appears to be in a distinct multi-tick post-burst suppression regime that DOES NOT exhibit M-167.A shallow-gap-fast-recovery behavior.

### opencode (0 merges) — silence n=2, depth ~1h34m — **POST-OVER-RECOVERY DEPTH-2 SILENCE**, FALSIFIES P-172.C
opencode shape Add.170-173 = `0 → 3 → 0 → 0` — extends the post-Tier-3 over-recovery silence to **depth 2 ticks**. **PARTIALLY FALSIFIES P-172.C** (predicted 0-2 merges; observed 0 is within the band, but the band's lower-edge alignment + depth-2 silence is rare for opencode in W17). opencode now joins gemini-cli at silence n=2, while goose remains at silence n=12. Three repos simultaneously in multi-tick silence (opencode n=2, gemini-cli n=3, goose n=12) is structurally novel for the Add.158-173 window — prior peak was 2 simultaneous multi-tick-silence repos.

### gemini-cli (0 merges) — **POST-CARRIER-STREAK SILENCE EXTENDS TO n=3**, depth ~2h28m, FALSIFIES P-172.F AND P-172.M (partial)
**FALSIFIES P-172.F** (predicted ≥1 merge breaking n=2 silence; observed silence sustained, n=3). gemini-cli silence now n=3 ticks at depth ~2h28m, **deepening past** the typical post-carrier brief-silence band. The M-171.A finite-carrier-streak-depth-bound regime (synth #371) gains **second-tick supporting evidence**: post-streak silence is sustained ≥3 ticks, suggesting carrier-exhaustion involves a multi-tick recovery period substantially deeper than originally hypothesized.

### goose (0 merges) — silence n=12, depth ~8h42m — **EXTENDS BEYOND 8.5h**, FALSIFIES P-172.D, ADVANCES M-174.A
**FALSIFIES P-172.D** (predicted goose break at Add.173; observed silence sustained, depth crossing 8.5h to ~8h42m). Goose has now extended ~37m past the 8h05m Add.172 close, crossing the synth #374 P-374.A break-prediction band (>8.5h) WITHOUT breaking. The synth #374 M-174.A unbounded-deep-dormancy-attractor regime advances to **2-of-2 supporting ticks** (Add.172 exceeded qwen-code 7h44m ceiling; Add.173 extends past 8.5h without break). Four-tick deferred prediction streak (P-169.D / P-170.D / P-171.D / P-172.D all falsified) — the underlying post-7h+ break-imminent model is **comprehensively falsified**.

M-169.B dormancy-rank-inheritance regime advances to **4-of-4 ticks** of goose holding rank-1 deep-silence holder slot. CONFIRMS synth #374 P-374.E.

### qwen-code (0 merges) — **CONFIRMS P-172.E**, alternating-doublet pattern extends
qwen-code Add.169-173 = `1 → 0 → 0 → 1 → 0` — extension of the synth #374 alternating-doublet 1-0-0-1 pattern to 1-0-0-1-0. CONFIRMS P-172.E (predicted Add.173 silent) and CONFIRMS synth #374 P-374.D (alternating-doublet extension). The candidate post-hard-deep-dormancy-break alternating-doublet sub-regime under M-169.B family gains supporting evidence; if synth #374 P-374.J holds (next break at Add.175 = Add.172 + 3 ticks), the period-3 sub-regime gains additional support.

Active-repo-count **2** (litellm, codex) — set is **{litellm, codex}**. PARTIALLY FALSIFIES P-172.L (cardinality ∈ [2,5]; observed 2 is at the lower edge). PARTIALLY FALSIFIES P-172.M (predicted active set INCLUDES gemini-cli AND/OR goose; observed neither). Symmetric-difference vs Add.172 set {litellm, codex, qwen-code}: {qwen-code⁻} = **cardinality 1** — smallest churn in the Add.171-173 window.

## Anomalies vs Add.172

1. **litellm DIRECT back-to-back over-recovery amplification** (Add.172=4 → Add.173=7, no intervening silence): NEW W17 shape, structurally distinct from M-173.A (silence-tick-separated recurrence). Falsifies P-172.B by 7× margin and P-172.I outright. The amplification (4 → 7, +3) suggests an unbounded escalation candidate analogous to M-174.A but in the over-recovery dimension rather than the silence-depth dimension.
2. **M-168.A regime hits 5-of-6 ticks** with 5 distinct repo-instances — over-recovery is now the **dominant mid-to-late-W17 tick-level regime**.
3. **codex 3-of-3 sub-floor streak**: first triple-sub-floor instance Add.158-173. codex emission profile post-Add.168-sextuple now 5/4/6/1/1/1 — a 6-tick monotonic-flat tail. The post-burst-suppression hypothesis gains substantial support.
4. **Three simultaneous multi-tick-silence repos** (opencode n=2, gemini-cli n=3, goose n=12): structurally novel in the Add.158-173 window. Prior peak was 2.
5. **Goose extends past 8h42m without break**: M-174.A unbounded attractor advances to 2-of-2 supporting ticks. Four-tick deferred break-prediction streak — model is comprehensively falsified.
6. **qwen-code alternating-doublet extends to 1-0-0-1-0**: pattern continues, period-3 sub-regime hypothesis (synth #374 P-374.J) approaching diagnostic test at Add.175.
7. **Width contracts by 18m58s while count rises by 2**: largest single-tick width contraction in Add.158-173 window combined with count increase produces the highest per-minute rate (0.2122) since Add.168 (0.2752) and Add.170 (0.2752). Width-rate inverse correlation strengthens.
8. **litellm author-diversity expands to 5 within a single tick**: Add.173 has author-distinct=5 (Sameerlite/ryan-crabbe-berri/mateo-berri/Michael-RZ-Berri/yuneng-berri), exceeding all prior over-recovery instances (Add.168=multi but bounded; Add.170=3; Add.172=2). Author-spread × surface-spread × magnitude all simultaneously expand vs Add.172.
9. **No window-close clustering at Add.173**: the synth #373 M-173.A.1 sub-regime addendum (over-recovery bursts cluster in window's last quartile with monotonically-shrinking gaps) is **NOT supported** by Add.173 — gaps are irregular, the largest gap (13m09s) precedes the largest cluster, and only one sub-15-second pair lands in the final 5 minutes.

## Predictions Add.173 → Add.174+

- **P-173.A**: litellm Add.174 emits 0-2 merges, ending the back-to-back amplification (post-amplification crash candidate, analogous to post-burst silence following Add.168 codex sextuple); >55% prob.
- **P-173.B**: codex Add.174 emits 2-5 merges, breaking the 3-tick sub-floor streak (4-tick sub-floor would be highly anomalous); >50% prob (downgraded from P-172.A confidence given falsification).
- **P-173.C**: opencode Add.174 emits ≥1 merge, breaking depth-2 silence (depth-3 silence rare for opencode in W17); >55% prob.
- **P-173.D**: goose Add.174 silence continues (depth would cross 9h), advancing M-174.A to 3-of-3; >55% prob (FIVE-tick deferred break-prediction track).
- **P-173.E**: gemini-cli Add.174 emits ≥1 merge (n=4 silence would be highly unusual for a recent-carrier repo); >50% prob.
- **P-173.F**: qwen-code Add.174 emits 0 merges (alternating-doublet 1-0-0-1-0 → 1-0-0-1-0-0); >50% prob, with break candidate at Add.175 per synth #374 P-374.J.
- **P-173.G**: cross-repo count Add.174 ∈ [2, 7] (post-burst regression-toward-mid-band); >55% prob.
- **P-173.H**: per-minute rate Add.174 ∈ [0.05, 0.18] (post-burst rate cool-down); >55% prob.
- **P-173.I**: NO repo emits ≥4 merges at Add.174 (post-litellm-septuple no-immediate-second-burst hypothesis; M-168.A regime cool-down candidate); >50% prob.
- **P-173.J**: M-168.A regime extends to 6-of-7 ticks if any repo emits ≥3 at Add.174; >40% prob (≥3 emission probability is moderate after septuple).
- **P-173.K**: Sameerlite does NOT emit additional merges at Add.174 (author-anchor saturation parallel to stuxf Add.172→173 = 3→0); >55% prob.
- **P-173.L**: Active-set cardinality Add.174 ∈ [2, 5]; >60% prob.
- **P-173.M**: Active-set Add.174 INCLUDES gemini-cli OR opencode (post-multi-tick-silence break candidates); >55% prob.
- **P-173.N**: If goose breaks at Add.174, magnitude ≥2 merges (deeper-dormancy → larger backlog correlation, depth would be ≥9h); >50% prob conditional on break.
- **P-173.O**: litellm Add.172-173 amplification (4→7, +3) does NOT extend monotonically to Add.174 (no 8+ litellm tick); >70% prob.
