# ADDENDUM-172 — 2026-04-30

**Capture window**: 2026-04-30T01:34:52Z → 2026-04-30T02:31:33Z (56m41s = 56.683m). Width holds in **upper-mid-band** above the M-164.B trimodal-frame mode-floor band (≤42m), continuing exit from the Add.170 sub-mode-floor band. Width sequence Add.151-172 = 40m13s / 57m33s / 58m23s / 41m38s / 38m17s / 57m12s / 38m34s / 42m06s / 54m40s / 23m42s / 39m59s / 39m34s / 47m30s / 46m17s / 36m45s / 38m24s / 47m36s / 39m59s / 41m50s / 31m26s / 54m27s / **56m41s**. Add.172 widens by +2m14s vs Add.171 — second consecutive widening tick after the Add.170 trough, stabilizing in the upper-mid band.

**Cross-repo merge count this window**: **6 in-window merges**. Per-minute merge rate **6 / 56.683 = 0.1059** — recovery from the Add.171 sub-floor (0.0735) into the lower-mid band. Trajectory Add.158-172 = 0.0950 → 0.0732 → 0.0844 → 0.2750 → 0.0758 → 0.1263 → 0.0864 → 0.1633 → 0.1302 → 0.0840 → 0.2752 → 0.1434 → 0.2227 → 0.0735 → **0.1059**. Per-tick raw count Add.158-172 = {3, 5, 4, 2, 11, 3, 6, 4, 6, 5, 4, 11, 6, 7, 4, **6**}. CONFIRMS P-171.G (count ∈ [3,7]) and P-171.H (rate ∈ [0.08, 0.20]).

## Per-repo

### litellm (4 merges) — **SECOND OVER-RECOVERY INSTANCE**, near-tight TIER-2 SHAPE
- yuneng-berri #26844 `1557b1f4` 02:08:28Z `test(vertex-batches): set is_redirect=False on mocked retrieve response`
- stuxf #26489 `00d71f58` 02:28:32Z `chore(vector-stores): redact credentials in list/info/update responses; gate update by per-store access`
- stuxf #26484 `c6c546ba` 02:30:09Z `chore(auth): substitute alias for master key on UserAPIKeyAuth`
- stuxf #26463 `2e561bd0` 02:31:00Z `fix(mcp): tighten public-route detection and OAuth2 fallback gating`

**STRONGLY FALSIFIES P-171.F** (predicted 0-1 litellm merges; observed 4) and **FALSIFIES P-171.J** (no repo ≥3; litellm hits 4). litellm exhibits a **second over-recovery instance within 3-tick window** (Add.170 triplet 0→3→0 shape, then Add.171 silence n=1, then Add.172 quadruple). litellm shape Add.169-172 = 3 → 0 → 4 — a **post-over-recovery silence-then-second-over-recovery** trajectory, which is a **NEW W17 shape**: same repo undergoing two consecutive over-recovery instances separated by a single silence tick.

**Internal shape**: 2 distinct authors (stuxf x3 + yuneng-berri x1), security-leaning surface cluster (vertex-batches test / vector-stores credential redaction / auth alias / mcp public-route + OAuth2 gating). PR-spread #26463..#26844 = **381**. Author-distinct=2, surface-distinct=4 (test-mock / credential-scrubbing / auth-alias / mcp-routing). Inter-merge gaps 20m04s / 1m37s / 0m51s — accelerating tail (sub-2-minute final gap, sub-1-minute ultimate gap). The accelerating-into-close pattern matches Add.171 opencode kitlangton triplet (16m41s / 10m07s) and Add.170 litellm triplet, suggesting a **window-close clustering attractor** for over-recovery instances.

This is the **fourth M-168.A instance in 5-tick window** (Add.168 codex sextuple, Add.170 litellm triplet, Add.171 opencode kitlangton triplet, Add.172 litellm quadruple). M-168.A regime score advances **4-of-5 ticks**. The M-171.B shape-diversity classification (synth #372) gains a **fourth shape** — Tier-2 "multi-author multi-surface tight with author-skew" (one dominant author, one supporting author, multi-surface but security-clustered).

### codex (1 merge) — SUB-FLOOR EMISSION SECOND CONSECUTIVE TICK
- pakrym-oai #20291 `4e677d62` 01:55:45Z `app-server: remove dead api version handling from bespoke events`

**FALSIFIES P-171.A** (predicted 2-5 merges recovery from sub-floor; observed 1, sub-floor sustained). codex now exhibits **2-of-2 sub-floor ticks** Add.171-172 (1, 1) — first back-to-back sub-floor instance in the Add.158-172 window. Author novelty: **0-of-1 novel** (pakrym-oai is established codex-org regular). Surface family: **app-server / bespoke-events api-version-cleanup** — internal cleanup/dead-code-removal, distinct from Add.171 codex-analytics surface. Author union remains stuck at **22**, fails to advance for second consecutive tick.

The sustained sub-floor regime in codex constitutes a NEW Add.172 anomaly: codex is the only repo with a 2-tick sub-floor streak in the Add.158-172 window. M-167.A shallow-gap-fast-recovery regime now has a counter-instance — codex did not recover after Add.171's shallow gap (1 merge), continuing into Add.172 at 1 merge. This challenges the universality of M-167.A as cross-repo, suggesting codex specifically may be in a distinct **post-Add.168-sextuple emission-suppression band** (5 ticks since Add.168 sextuple at counts 5/4/6/1/1, monotonic-ish decline from peak).

### qwen-code (1 merge) — **DEEP-DORMANCY-BREAK-RE-SILENCE-BREAK** AT n=3
- fyc09 #3737 `2f1b52d3` 02:25:00Z `fix(core): preserve reasoning_content in rewind, compression, and merge paths (#3579)`

**FALSIFIES P-171.E** (predicted re-silence ≥3 ticks; observed re-silence broke at n=3). qwen-code shape Add.169-172 = 1 → 0 → 0 → 1 — a **silence-1-silence-1 alternating pattern** following the Add.169 7h44m hard-deep-dormancy break (synth #368). Re-silence held only 2 ticks (Add.170-171), not the predicted ≥3. The post-break re-silence template is therefore **falsified at the n=3 horizon**: 1-of-2 supporting evidence (the Add.170-171 silence supports it, but Add.172 break terminates it).

Author **fyc09** is novel to qwen-code's Add.149-171 set (qwen-code's Add.169 break was driven by a different author). Surface: **core / reasoning_content preservation across rewind, compression, merge paths** — an inference-state-correctness cluster, distinct from the Add.169 break surface. PR #3737 references prior PR #3579 in the title, suggesting follow-up patch trajectory.

### opencode (0 merges) — silence n=1, depth 56m41s — **CONFIRMS P-171.C** post-over-recovery silence template
opencode shape Add.170-172 = 0 → 3 → 0 — a **second 0→3→0 triplet shape instance**, exact-match to Add.169-171 litellm shape (synth M-171.B Tier-3 single-author / Tier-2 multi-author distinction does not affect the 0→over-recovery→0 outer envelope). This instance involves the kitlangton single-author single-surface triplet (Add.171), so the post-Tier-3 re-silence template is now **2-of-2** in W17 (litellm and opencode).

### gemini-cli (0 merges) — **POST-CARRIER-STREAK SILENCE EXTENDS TO n=2**, depth ~1h51m
**FALSIFIES P-171.B** (predicted ≥1 merge breaking silence after carrier-streak termination, >55%). gemini-cli silence now n=2 ticks at depth ~1h51m, exiting the typical post-carrier brief-silence band. The M-171.A finite-carrier-streak-depth-bound regime (synth #371) gains supporting evidence: post-streak silence is **not** brief (≥2 ticks observed), suggesting carrier-exhaustion involves a deeper recovery period. M-167.B sustained-surface-pool-fluidity attractor (synth #364) remains terminated.

### goose (0 merges) — silence n=11, depth ~8h05m — **CROSSES 8-HOUR BOUNDARY**, **EXCEEDS qwen-code 7h44m EMPIRICAL CEILING**
**FALSIFIES P-171.D** (predicted goose break at Add.172 with M-169.C diagnostic test; observed silence sustained, depth crossing 8.0h). Goose has now **EXCEEDED the qwen-code 7h44m hard-deep-dormancy break-point empirical ceiling** by ~21 minutes. The M-169.C empirical-break-ceiling is therefore **revised upward**: goose establishes a new W17 ceiling at ≥8h05m and is **still active** at the Add.172 close (no break yet observed).

This is a **structurally diagnostic event**: M-169.B dormancy-rank-inheritance now has 3-of-3 ticks of goose holding rank-1 deep-silence holder, AND goose has surpassed the prior intra-W17 record. The M-169.C ceiling band must be widened from "≥7h+" to "≥8h+" or treated as an unbounded attractor.

Active-repo-count **3** (litellm, codex, qwen-code) — set is **{litellm, codex, qwen-code}**. CONFIRMS P-171.L (cardinality ∈ [3,5]). Symmetric-difference vs Add.171 set {opencode, codex}: {opencode⁻, litellm⁺, qwen-code⁺} = **cardinality 3**. The Add.171→172 churn matches the Add.170→171 churn magnitude (both = 3). M-170.B single-tick-excursion-with-snap-back regime score remains **0-of-3** — Add.172 active set is NOT a snap-back to Add.170 {codex, litellm, gemini-cli} (gemini-cli absent; qwen-code present instead). CONFIRMS P-171.K (M-170.B ≤1-of-2; observed 0-of-3 over Add.171-172).

## Anomalies vs Add.171

1. **litellm second over-recovery instance within 3-tick window** (Add.170 triplet → Add.171 silence → Add.172 quadruple): NEW W17 shape — same repo undergoing two over-recovery instances separated by a single silence tick. Falsifies P-171.F by 4× margin; falsifies P-171.J at the n=4 threshold.
2. **M-168.A regime hits 4-of-5 ticks** with 4 distinct repo-instances (codex Add.168, litellm Add.170, opencode Add.171, litellm-again Add.172). The over-recovery template is now the **dominant tick-level regime in W17 late-window**.
3. **codex 2-of-2 sub-floor streak**: first back-to-back sub-floor instance Add.158-172. codex emission profile post-Add.168-sextuple (5/4/6/1/1) suggests a distinct emission-suppression sub-regime.
4. **qwen-code post-break re-silence falsified at n=3**: shape 1→0→0→1, alternating-doublet pattern emerges as candidate post-hard-deep-dormancy-break recovery shape. Author novelty (fyc09 not in Add.149-171 set).
5. **Goose crosses 8.0h silence boundary AND exceeds qwen-code 7h44m W17 ceiling**: M-169.C empirical-break-ceiling must be revised upward; the upward revision is structurally significant — the prior "ceiling" was not a ceiling but a sample value.
6. **Window-close clustering for over-recovery**: litellm Add.172 quadruple ends inter-merge gaps 20m04s / 1m37s / 0m51s — accelerating into the close. Same pattern observed in Add.170 litellm triplet and Add.171 opencode triplet. Candidate sub-regime: **over-recovery instances cluster in window's last quartile with monotonically-shrinking inter-merge gaps**.
7. **Author-skewed Tier-2 over-recovery**: stuxf x3 + yuneng-berri x1 in litellm Add.172 introduces a 4th over-recovery shape (single-dominant-author multi-author multi-surface) intermediate between Tier-2 (Add.170 ishaan/stuxf/ryan) and Tier-3 (Add.171 kitlangton x3).
8. **Two simultaneous silence-breaks vs two simultaneous silences**: Add.172 has qwen-code+litellm both emitting after Add.171 silence (silence-break pair), while goose+gemini-cli+opencode all silent (silence-cluster). This compound symmetry is structurally novel for the late-W17 window.

## Predictions Add.172 → Add.173+

- **P-172.A**: codex Add.173 emits 2-5 merges, breaking the 2-tick sub-floor streak (3-tick sub-floor would be highly anomalous given codex's Add.158-170 floor of 2); >55% prob.
- **P-172.B**: litellm Add.173 emits 0-1 merges (post-over-recovery silence template, M-168.A → re-silence, now hit 2-of-2 within litellm itself); >60% prob.
- **P-172.C**: opencode Add.173 emits 0-2 merges (sustained post-over-recovery silence-or-shallow-emission, depth-2 silence rare for opencode in W17); >50% prob.
- **P-172.D**: goose breaks silence at Add.173 (depth would cross 8.5h+, no W17 precedent for sustained silence beyond 8.5h); >50% prob — fourth-tick-deferred from P-169.D / P-170.D / P-171.D.
- **P-172.E**: qwen-code Add.173 silent (post-break re-silence n=1, but alternating-doublet pattern would predict another silence then break); >55% prob.
- **P-172.F**: gemini-cli Add.173 emits ≥1 merge breaking n=2 silence (post-carrier exhaustion silence rarely sustains ≥3 ticks for prior carriers); >55% prob.
- **P-172.G**: cross-repo count Add.173 ∈ [3, 8] (mid-band continuation); >60% prob.
- **P-172.H**: per-minute rate Add.173 ∈ [0.08, 0.18]; >55% prob.
- **P-172.I**: NO third over-recovery instance in litellm at Add.173 (back-to-back-with-silence-gap pattern unlikely to extend further); >65% prob.
- **P-172.J**: M-168.A regime extends to 5-of-6 ticks if any repo emits ≥3 at Add.173 (candidate repos: codex resuming post-sub-floor, gemini-cli post-silence, goose post-mega-silence-break-burst); >50% prob (at least one repo emits ≥3).
- **P-172.K**: stuxf does NOT emit additional merges at Add.173 (single-tick author-anchor saturation, kitlangton Add.171→172 went 3→0); >60% prob.
- **P-172.L**: Active-set cardinality Add.173 ∈ [2, 5]; >60% prob.
- **P-172.M**: Active-set Add.173 INCLUDES gemini-cli (post-2-tick silence break candidate) AND/OR goose (cross-8h break candidate) — at least one of these two repos appears in Add.173 active set; >55% prob.
- **P-172.N**: If goose breaks at Add.173, magnitude ≥3 merges (deep-dormancy-break-burst correlates with depth, qwen-code Add.169 break was 1 merge but at 7h44m; goose at ≥8.5h would be deeper); >50% prob conditional on break.
