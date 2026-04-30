# ADDENDUM-170 — 2026-04-30

**Capture window**: 2026-04-30T00:08:59Z → 2026-04-30T00:40:25Z (31m26s = 31.43m). Width sits **below the M-164.B trimodal-frame mode-floor band (≤42m)** — this is the **shortest tick width in the Add.149-170 series** (prior min was Add.160 at 23m42s; Add.170 at 31m26s is the second-shortest). Width sequence Add.150-170 = 40m27s / 40m13s / 57m33s / 58m23s / 41m38s / 38m17s / 57m12s / 38m34s / 42m06s / 54m40s / 23m42s / 39m59s / 39m34s / 47m30s / 46m17s / 36m45s / 38m24s / 47m36s / 39m59s / 41m50s / **31m26s**. Add.170 falls into a new **sub-mode-floor band (<35m)** previously occupied only by Add.160.

**Cross-repo merge count this window**: **7 in-window merges**. Per-minute merge rate **7 / 31.43 = 0.2227** — sharp jump from Add.169 mid-band (0.1434), well above mid-band but below Add.161/168 envelope-touch (0.27+). Trajectory Add.158-170 = 0.0950 → 0.0732 → 0.0844 → 0.2750 → 0.0758 → 0.1263 → 0.0864 → 0.1633 → 0.1302 → 0.0840 → 0.2752 → 0.1434 → **0.2227**. Per-tick raw count Add.158-170 = {3, 5, 4, 2, 11, 3, 6, 4, 6, 5, 4, 11, 6, **7**}.

## Per-repo

### codex (3 merges) — RETURNING-REGULAR-LED MID-BAND, AUTHOR UNION HOLDS
- pakrym-oai #20149 `fedcefe` 00:22:41Z `Reduce the surface of collaboration modes`
- etraut-openai #20282 `515aa9a` 00:26:12Z `tui: return from side chat on Ctrl-D`
- zamoshchin-openai #20250 `8b07132` 00:40:25Z `update codex_plugins_beta_setting (from workspace settings)`

3 merges over 17m44s span (00:22:41 → 00:40:25). Author novelty: **1-of-3 novel** (zamoshchin-openai NEW; pakrym-oai + etraut-openai both in Add.158-169 union of 21). Author union grows 21 → **22**, just below the P-169.H ≥23 floor at single-tick step (still tracking — 1-of-2 needed). **CONFIRMS P-169.A** (predicted 2-5 merges, novelty <40%; observed 3 merges, 33.3% novelty). Surfaces span **tui (side chat ctrl-D)**, **collaboration-mode surface reduction**, **plugin/workspace-settings ingestion** — 3 disjoint families, NO repeat from Add.169 external-session-import family. Surface-rotation profile contrasts Add.169 single-coherent-family doublet — Add.170 is a **disjoint-triple regime** rather than a thematic doublet. Inter-merge gaps 3m31s / 14m13s — non-metronomic spacing.

### litellm (3 merges) — RECOVERY DOUBLET → TRIPLET, BREAKS n=1 SILENCE WITH N=3
- ishaan-berri #26793 `4a7af1f` 00:12:18Z `feat(proxy): durable agent workflow run tracking via /v1/workflows/runs`
- stuxf #26518 `dedaf74` 00:27:23Z `chore(auth): tighten clientside api_base handling`
- ryan-crabbe-berri #26823 `d7431c9` 00:33:34Z `fix: drop sensitive locals from re-raised error messages`

**CONFIRMS P-169.I** (predicted ≥1 merge breaking n=1 silence, >60%) but **OVER-DELIVERS**: predicted minimum was 1, observed 3 — same magnitude as Add.168 doublet+1, exceeds canonical synth #363 M-167.A shallow-gap-fast-recovery doublet template (n=2). Recovery shape is **TRIPLET** (n=3), not doublet — analogous to codex Add.168 sextuple-recovery vs canonical doublet (synth #365 M-168.A over-recovery template). This is the **second instance of "over-recovery vs M-167.A canonical doublet"** in W17, now at a different repo (litellm) — strengthens M-168.A toward cross-repo regime status rather than Add.168 outlier (synth #367 M-169.A singleton-attractor classification now CHALLENGED). Author novelty: 2-of-3 novel (stuxf, ryan-crabbe-berri NEW; ishaan-berri returning regular). Surfaces span **durable-workflow-run-tracking** (proxy feature), **clientside api_base auth-tightening** (security/correctness), **error-message sensitive-locals scrubbing** (cache/error-correctness). The third surface — sensitive-locals-from-re-raised-errors — is a direct **cache-correctness** family member (extending the W17 cache-correctness theme tracked since Add.165). Inter-merge gaps 15m05s / 6m11s — accelerating.

### gemini-cli (1 merge) — CARRIER STREAK EXTENDS TO 6 CONSECUTIVE TICKS
- sripasg #26222 `0ccc5ce` 00:11:33Z `refactor(acp): delegate prompt turn processing logic to GeminiClient`

**CONFIRMS P-169.B** (predicted ≥1 merge sustaining 6-consecutive-tick carrier streak with NEW surface family, >55%). Surface family: **acp-prompt-turn-processing-delegation / GeminiClient-refactor** — internal-architecture refactor surface, distinct from Add.165-169 surface union (PII-redaction, agent-shell-permission, docs/setup, network/proxy, tool-correctness GrepTool, bot-productivity / backlog-optimization). New family count Add.165-170 streak: **14 distinct surface families in 6 active ticks, 0 repeats** — confirms P-169.J (anti-clustering: surface neither bot-meta nor model-provider; observed acp/architecture-refactor). sripasg is RETURNING author (active in Add.158-161 series). M-167.B sustained-surface-pool-fluidity attractor (synth #364) extends to **6-tick depth, still 0 repeats**.

### opencode (0 merges) — SILENCE n=1, depth 31m26s
**FALSIFIES P-169.C** (predicted 1-3 merges sustaining recovery, >50%). Add.169 doublet → Add.170 silence — opencode now matches the litellm Add.168→169 descending profile (2→0 across 2 ticks). The Add.168→170 opencode trajectory is **0→2→0** (silence → doublet → silence) — clean shallow-gap-fast-recovery → re-silence pattern.

### qwen-code (0 merges) — RE-SILENCE n=1, depth 31m26s
**CONFIRMS P-169.E** (predicted re-entry to silence after hard-deep-dormancy break, >65%). Single-merge break at Add.169 followed by immediate silence at Add.170 — canonical post-hard-deep-dormancy-break behavior. tanzhenxin Add.169 break event remains isolated singleton in current data.

### goose (0 merges) — silence n=9, depth ~6h13m
**FALSIFIES P-169.D** (predicted goose break at Add.170, >55%). Goose silence extends **deeper into the M-169.C 7h+ candidate window** — currently at ~6h13m, would cross 7.0h boundary at approximately Add.171 close (~6h13m + 41m43s avg width = 6h55m at Add.171 close, into 7h band by Add.172). **M-169.B dormancy-rank-inheritance ADVANCES**: goose has now extended silence ≥1 tick beyond the qwen-code break (rank-1 inheritor did NOT cascade). 1-of-1 inheritor evidence holds; cumulative score 1-of-1 toward the "≥2 of 3 = advance M-169.B" threshold (synth #368).

Active-repo-count **3** (codex, litellm, gemini-cli) — set is **identical to Add.168** {codex, litellm, gemini-cli} after Add.169's transient {codex, opencode, gemini-cli, qwen-code} excursion. opencode and qwen-code both re-silent in single tick. **gemini-cli sustains sole 6-tick stable-carrier status (Add.165-170)** — extends strongest sustained carrier in W17 history by one tick.

## Anomalies vs Add.169

1. **Sub-mode-floor width (31m26s)**: second-shortest in Add.149-170 series, only Add.160 (23m42s) is shorter. Two sub-35m widths in 11-tick window suggests a **secondary low-width attractor** below the 36-42m mode-floor band. Insufficient to claim a regime (n=2) but worth tracking — call it candidate sub-band M-170.A.
2. **Active-set snap-back**: Add.168 {codex,litellm,gemini-cli} → Add.169 {codex,opencode,gemini-cli,qwen-code} → Add.170 {codex,litellm,gemini-cli}. Single-tick excursion + immediate snap-back to prior set is a NEW phenomenon — Add.169 active-set turnover (churn=3) was the highest in 5-tick window per Add.169 anomaly #7, and it FULLY REVERTS in one tick. Suggests Add.169 churn was a transient excursion, not a regime shift.
3. **litellm triplet-recovery as second over-recovery instance**: M-168.A (synth #365) was reclassified as singleton-attractor M-169.A at Add.169. Add.170 litellm triplet-from-silence is a **second instance of over-recovery from a single-tick gap** at a different repo. M-169.A singleton-attractor classification is now CHALLENGED — the over-recovery shape may be a true cross-repo regime rather than a codex-specific Add.168 outlier. Re-classification needed.
4. **codex author union growth slows**: Add.169 added 2 new authors (alexsong-oai, stefanstokic-oai), Add.170 adds 1 (zamoshchin-openai). Union 19→21→22. P-169.H (≥23 by Add.170) NOT YET MET; deferred to Add.171.
5. **Cache-correctness theme reinforced**: litellm #26823 sensitive-locals-from-re-raised-error-messages is a direct cache/state-correctness family member. Combined with prior W17 cache-correctness PRs (gemini-cli GrepTool tool-correctness, etc), this becomes an emerging **6-tick cache-correctness drumbeat** worth tracking as a cross-repo theme.
6. **gemini-cli 6-tick streak with internal-architecture surface**: surface flips from Add.169 self-referential bot-meta back to **internal architecture (acp prompt turn delegation)**. The streak has now traversed: PII-redaction → agent-shell → docs/setup → network/proxy → tool-correctness → bot-meta → architecture-refactor — a striking **functional-area random walk** with no obvious topical clustering across 6 ticks.
7. **opencode-shape mirrors prior litellm-shape**: opencode trajectory Add.168→170 is 0→2→0 (silence → doublet → silence). litellm trajectory Add.167→169 was 0→2→0. **Same 3-tick silence-doublet-silence shape repeats across two repos one tick apart** — first W17 instance of cross-repo identical 3-tick trajectory pattern.

## Predictions Add.170 → Add.171+

- **P-170.A**: codex Add.171 emits 3-7 merges with author novelty rate <50% (continuing returning-regular-led mid-band); >55% prob.
- **P-170.B**: gemini-cli Add.171 emits ≥1 merge sustaining 7-consecutive-tick carrier streak with NEW (15th) surface family; >50% prob (streak depth grows but with growing tail-risk).
- **P-170.C**: litellm Add.171 emits 1-3 merges sustaining post-triplet activity (no second silence); >55% prob.
- **P-170.D**: goose breaks silence at Add.171 (depth would exceed 6.5h+, approaching qwen-code class break-point); >55% prob — second-tick-deferred from P-169.D, with extended window M-169.C test setup.
- **P-170.E**: qwen-code remains silent at Add.171 (post-break re-silence typically extends ≥2 ticks); >60% prob.
- **P-170.F**: opencode breaks silence at Add.171 (n=1 silence under shallow-gap-fast-recovery template, M-167.A); >55% prob.
- **P-170.G**: cross-repo count Add.171 ∈ [4, 8] (high mid-band sustained); >60% prob.
- **P-170.H**: per-minute rate Add.171 ∈ [0.10, 0.25] (above-mid sustained but not envelope-touch); >55% prob.
- **P-170.I**: codex Add.158-170 author union grows to ≥24 by Add.171 (currently 22, sustained +1-2/tick novelty); >50% prob.
- **P-170.J**: gemini-cli surface family at Add.171 is NOT acp/architecture-refactor or bot-meta (anti-clustering corollary continues); >55% prob.
- **P-170.K**: NO third-tick over-recovery instance in W17 within Add.170-174 window — i.e., no other repo emits ≥3 merges from a single-tick silence; if such occurs, M-169.A singleton-attractor formally rejected and over-recovery promoted to candidate regime; >50% prob (over-recovery does NOT recur).
- **P-170.L**: dormancy-rank-1 slot at Add.171 close is goose (no goose break OR goose break with no other rank inversion); >60% prob.
- **P-170.M**: width Add.171 returns to 36m+ (regression from sub-mode-floor); >65% prob.

---

**Capture closes 2026-04-30T00:40:25Z. Next addendum ADDENDUM-171 opens at 00:40:25Z.**
