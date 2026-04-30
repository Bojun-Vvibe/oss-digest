# ADDENDUM-169 — 2026-04-29/30

**Capture window**: 2026-04-29T23:27:09Z → 2026-04-30T00:08:59Z (41m50s = 41.83m). Width sits in **mode-floor band (≤42m)** under M-164.B trimodal frame (synth #358) — adjacent to the 36m–40m near-mode-shortfall sub-band but slightly above. Width sequence Add.149-169 = 40m10s / 40m27s / 40m13s / 57m33s / 58m23s / 41m38s / 38m17s / 57m12s / 38m34s / 42m06s / 54m40s / 23m42s / 39m59s / 39m34s / 47m30s / 46m17s / 36m45s / 38m24s / 47m36s / 39m59s / **41m50s**. Add.169 falls in the 40-42m secondary mode-floor cluster (Add.154, Add.158, Add.169 all 41m–42m).

**Cross-repo merge count this window**: **6 in-window merges**. Per-minute merge rate **6 / 41.83 = 0.1434** — sharp regression from Add.168 envelope-touch (0.2752). Trajectory Add.158-169 = 0.0950 → 0.0732 → 0.0844 → 0.2750 → 0.0758 → 0.1263 → 0.0864 → 0.1633 → 0.1302 → 0.0840 → 0.2752 → **0.1434**. Per-tick raw count Add.158-169 = {3, 5, 4, 2, 11, 3, 6, 4, 6, 5, 4, 11, **6**} — Add.169 lands at the median of the series.

## Per-repo

### codex (2 merges) — POST-BURST REGRESSION
- alexsong-oai #20261 `7bcd462` 00:00:14Z `Consume ai-title from external sessions and add end marker`
- stefanstokic-oai #20284 `c8abcbf` 00:00:42Z `Import external agent sessions in background`

Sub-second-cousin doublet (28-second inter-merge gap on adjacent surfaces — both touch external-session ingestion). Both authors NOVEL relative to Add.158-168 union (alexsong-oai, stefanstokic-oai) — author union grows 19 → **21**, confirming P-168.H lower bound. Surface is **external-session-import / ai-title-consumption** — single coherent family, contrasts Add.168 codex 6-merge wide-surface flush. Sub-second-cousin pair (28s) sits inside the synth #355 sub-author-doublet invariant band.

### opencode (2 merges) — BREAKS SILENCE n=1, DOUBLET RECOVERY
- Hona #25019 `ea89925` 23:32:27Z `fix: handle invalid mcp urls`
- kitlangton #25017 `61dfae3` 23:37:51Z `test: cover HttpApi websocket proxy`

Confirms P-168.E (predicted 1-2 merges single-tick gap recovery). Recovery shape is **doublet** (n=2) — matches synth #363 M-167.A shallow-gap-fast-recovery template exactly (canonical form, not over-recovery). 5m24s inter-merge gap. Surfaces: mcp-url-validation + websocket-proxy-test — disjoint, 2 distinct families in single recovery tick. Hona NOVEL to Add.158-168 opencode union; kitlangton returning regular.

### gemini-cli (1 merge) — CARRIER STREAK EXTENDS TO 5 CONSECUTIVE TICKS
- gundermanc #26236 `1834ad0` 23:35:12Z `fix(bot): productivity and backlog optimizations`

Confirms P-168.B (≥1 merge sustaining 5-consecutive-tick carrier streak). Surface family: **bot-productivity / backlog-optimization** — meta-tooling self-improvement on the gemini-cli bot itself, distinct from Add.165-168 surface union (PII-redaction, agent-shell-permission, docs/setup, network/proxy, tool-correctness GrepTool). New family count Add.165-169 streak: **13 distinct surface families in 5 active ticks, 0 repeats** — confirms P-168.J and reinforces synth #364 M-167.B sustained-surface-pool-fluidity attractor at 5-tick depth. gundermanc author handle NOVEL to gemini-cli Add.158-168 union.

### qwen-code (1 merge) — BREAKS HARD-DEEP-DORMANCY at n=11
- tanzhenxin #3747 `da29363` 23:43:17Z `fix(core): replay DeepSeek reasoning_content on all assistant turns`

**FALSIFIES P-168.D** (predicted continued silence at >70% confidence — qwen-code silence broke at depth ~7h44m). Single-merge break, surface is **reasoning-content-replay / model-provider-integration** (DeepSeek). Hard-deep-dormancy regime (synth #350/#351) had held through Add.158-168 — Add.169 ends an 11-tick silence streak. tanzhenxin novelty: returning author from earlier W17 ticks. **The 7h+ "hard-deep-dormancy" floor is now empirically bounded at ~7h44m before break occurs.**

### litellm (0 merges) — silence n=1, depth 41m50s
**FALSIFIES P-168.I** (predicted ≥1 merge sustaining 2+ active ticks at >55%). Add.168 doublet → Add.169 silence — matches the opencode Add.166→167→168 descending profile (3→1→0); litellm now at 2→0 across 2 ticks.

### goose (0 merges) — silence n=8, depth ~5h42m
**FALSIFIES P-168.C** (predicted break at Add.169, >60% conf). Goose silence depth now exceeds the W17 prior maximum cited at Add.168. Goose is now in **emerging-deep-dormancy** territory parallel to the qwen-code regime that just broke at Add.169 — a regime cross-over candidate.

Active-repo-count **4** (codex, opencode, gemini-cli, qwen-code) — set rotates significantly from Add.168 {codex, litellm, gemini-cli}. opencode and qwen-code re-enter, litellm exits. **gemini-cli sustains sole 5-tick stable-carrier status (Add.165-169)** — strongest sustained carrier in W17 history.

## Anomalies vs Add.168

1. **Rate band reversion**: 0.2752 → 0.1434 — confirms P-168.G (predicted ≤0.18). The Add.161/168 envelope-touch ceiling is NOT sustained into consecutive ticks; both joint-peak ticks were followed by mid-band reversion. M-168.B (synth #366) **does NOT advance to candidate-mechanism status** — Add.169 rate <0.27 means no second envelope-touch within streak yet (need to track Add.170+).
2. **codex post-burst regression confirms P-168.A**: 6 → 2 merges (66.7% drop). Doublet shape on coherent surface (external-sessions) — opposite of Add.168 wide-surface backlog flush. M-168.A (synth #365 over-recovery) tracking: 0-of-1 next-tick repeat. Pure regression-to-mean shape; M-168.A on track to be classified as Add.168 outlier unless Add.170-174 produces a second backlog-flush event.
3. **qwen-code hard-deep-dormancy break**: 11-tick silence ended at depth ~7h44m. This is the LONGEST W17 silence-then-break event observed in current series. Synth #350/#351 hard-deep-dormancy regime now has an empirical break-point upper bound (~7h44m) where prior bound was open-ended.
4. **opencode canonical doublet recovery**: matches synth #363 M-167.A template exactly (n=1 silence → n=2 recovery). M-167.A continues to hold across opencode-class events (now 2-of-2 instances); contrasts codex Add.168 deviation.
5. **gemini-cli 5-tick streak with bot-meta surface**: surface family is now self-referential (bot productivity optimizations TO the gemini-cli bot). Carrier streak takes on **recursive-tooling** flavor — first instance in W17 of a carrier-streak repo emitting a meta-improvement-on-its-own-automation surface within the streak window.
6. **goose vs qwen-code regime cross-over**: at Add.168 close, qwen-code (≥7h dormancy) was deeper than goose (≥5h). At Add.169 close, qwen-code broke and goose did not — the **dormancy-rank inverted**. Goose now occupies the deepest-active-silence slot it inherited from qwen-code's break.
7. **active-repo-set churn = 3 (litellm out, opencode in, qwen-code in)**: high turnover relative to Add.168 (which had churn = 2 vs Add.167). Add.169 has the highest active-set churn in Add.165-169 5-tick window.

## Predictions Add.169 → Add.170+

- **P-169.A**: codex Add.170 emits 2-5 merges with author novelty rate <40% (post-flush, post-doublet returning-regular regime); >60% prob.
- **P-169.B**: gemini-cli Add.170 emits ≥1 merge sustaining 6-consecutive-tick carrier streak with NEW (14th) surface family; >55% prob (streak momentum sustained but tail-risk grows with depth).
- **P-169.C**: opencode Add.170 emits 1-3 merges sustaining recovery (post-doublet active continuity); >50% prob.
- **P-169.D**: goose breaks silence at Add.170 (depth would exceed 6.5h+, which historically resolves under qwen-code-class regime); >55% prob — DEFERRED prediction from P-168.C with extended window.
- **P-169.E**: qwen-code re-enters silence at Add.170 (single-merge break under hard-deep-dormancy regime typically followed by 1+ silence tick); >65% prob.
- **P-169.F**: cross-repo count Add.170 ∈ [3,7] (mid-band sustained, no envelope-touch); >70% prob.
- **P-169.G**: per-minute rate Add.170 ∈ [0.06, 0.18] (mid-band sustained); >65% prob.
- **P-169.H**: codex Add.158-169 author union grows to ≥23 by Add.170 (currently 21, sustained novelty); >50% prob.
- **P-169.I**: litellm Add.170 emits ≥1 merge breaking n=1 silence (synth #363 M-167.A shallow-gap-fast-recovery default); >60% prob.
- **P-169.J**: gemini-cli surface family at Add.170 does NOT touch bot-meta or model-provider domains (most recent two would saturate the meta-class); >55% prob — refines synth #364 M-167.B with anti-clustering corollary.
- **P-169.K**: NO second rate envelope-touch (≥0.27/min) occurs within the gemini-cli carrier streak window (Add.165-171); >60% prob — direct test of M-168.B (synth #366), strengthening rejection if confirmed.

---

**Capture closes 2026-04-30T00:08:59Z. Next addendum ADDENDUM-170 opens at 00:08:59Z.**
