# W17 synthesis #370 — Add.168→170 active-set excursion-and-snap-back ({codex,litellm,gemini-cli} → {codex,opencode,gemini-cli,qwen-code} → {codex,litellm,gemini-cli}) anchored by qwen-code #3747 da29363 + opencode #25019 ea89925/#25017 61dfae3 transient ENTRIES + litellm #26793 4a7af1f/#26518 dedaf74/#26823 d7431c9 RE-ENTRY introduces M-170.B single-tick-active-set-excursion-with-snap-back regime distinct from synth #361 M-166.A keystone-carrier-rotation

**Inputs**: ADDENDUM-168 active set {codex, litellm, gemini-cli}; ADDENDUM-169 active set {codex, opencode, gemini-cli, qwen-code} (churn=3, highest in Add.165-169 window per Add.169 anomaly #7); ADDENDUM-170 active set {codex, litellm, gemini-cli} — IDENTICAL to Add.168 set; synth #361 (M-166.A keystone-carrier-rotation regime defined as multi-tick rotation between repos taking carrier role); synth #366 (M-168.B sustained-carrier coupling); synth #364 (M-167.B sustained-surface-pool-fluidity at gemini-cli).

## Carry-prediction evaluation (Add.169 → Add.170)

- **P-169.B** (gemini-cli ≥1 merge sustaining 6-tick carrier streak with NEW surface): **CONFIRMED** at #26222 0ccc5ce sripasg `refactor(acp): delegate prompt turn processing logic to GeminiClient` (acp-architecture-refactor, 14th distinct surface in 6-tick streak).
- **P-169.C** (opencode 1-3 merges sustaining recovery, >50%): **FALSIFIED** — opencode 0 merges Add.170, immediate re-silence after Add.169 doublet.
- **P-169.D** (goose break at Add.170, >55%): **FALSIFIED** — goose silence extends to n=9 ~6h13m.
- **P-169.J** (gemini-cli surface NOT bot-meta or model-provider, >55%): **CONFIRMED** — surface is acp-architecture-refactor.

## The PRs anchoring the excursion-and-snap-back

**Add.169 transient entries (the "excursion")**:
- opencode #25019 `ea89925` Hona 23:32:27Z `fix: handle invalid mcp urls`
- opencode #25017 `61dfae3` kitlangton 23:37:51Z `test: cover HttpApi websocket proxy`
- qwen-code #3747 `da29363` tanzhenxin 23:43:17Z `fix(core): replay DeepSeek reasoning_content on all assistant turns`

**Add.169 transient exit (litellm leaves)**: 0 merges (silence n=1 from Add.168 doublet).

**Add.170 snap-back entries (litellm RE-ENTERS)**:
- litellm #26793 `4a7af1f` ishaan-berri 00:12:18Z `feat(proxy): durable agent workflow run tracking via /v1/workflows/runs`
- litellm #26518 `dedaf74` stuxf 00:27:23Z `chore(auth): tighten clientside api_base handling`
- litellm #26823 `d7431c9` ryan-crabbe-berri 00:33:34Z `fix: drop sensitive locals from re-raised error messages`

**Add.170 snap-back exits (opencode + qwen-code BOTH re-silent in single tick)**: 0 merges each.

## Active-set transition shape

| Tick | Active set | Cardinality | Symmetric-diff vs Add.168 |
|------|-----------|-------------|--------------------------|
| Add.168 | {codex, litellm, gemini-cli} | 3 | — |
| Add.169 | {codex, opencode, gemini-cli, qwen-code} | 4 | {litellm⁻, opencode⁺, qwen-code⁺} = 3 |
| Add.170 | {codex, litellm, gemini-cli} | 3 | {} = 0 (identical) |

The Add.168 → Add.170 transition is a **null-net active-set change** — the set returns exactly to its starting configuration after one tick of excursion. This is **distinct from M-166.A keystone-carrier-rotation** (synth #361), which describes multi-tick rotation between distinct carrier roles, NOT single-tick excursion-with-perfect-snap-back.

## M-170.B definition (introduced)

**Single-tick-active-set-excursion-with-snap-back regime**: when the active-repo-set at tick T+1 differs from tick T by symmetric-difference cardinality ≥3 AND tick T+2's active-repo-set is exactly equal to tick T's active-repo-set, classify as a single-tick excursion with snap-back. Distinguished from regime drift (where T+2 differs from both T and T+1) and from sustained set change (where T+2 ≈ T+1).

Falsifiable form (4-tick test):
- Across the next 4 W17 windows of size 3 ticks each, count instances of single-tick-excursion-with-snap-back vs regime-drift vs sustained-change.
- If 0 instances of snap-back occur → M-170.B is a one-off Add.169 phenomenon, reject.
- If ≥1 instance occurs → M-170.B advances to candidate regime status.
- If ≥2 instances → M-170.B becomes load-bearing, paired with anti-correlation predictions on excursion entrants vs snap-back exits.

Add.170 evidence: 1-of-1 candidate windows show snap-back. Cumulative score 1-of-1.

## Relation to M-166.A keystone-carrier-rotation (synth #361)

M-166.A (synth #361) describes multi-tick rotation: repo A is sole carrier for ticks 1-3, repo B inherits carrier role for ticks 4-6, etc. The set composition CHANGES across the rotation boundary and persists.

M-170.B is structurally different: the set composition CHANGES in a single tick (Add.169 excursion) and REVERTS in the next single tick (Add.170 snap-back). No carrier rotation occurs — gemini-cli remains sole 6-tick carrier across both Add.169 and Add.170 (carrier role is stable; only the supporting active repos churn).

**Joint regime test**: M-166.A and M-170.B are non-mutually-exclusive — they describe different timescales of active-set dynamics. M-166.A operates on multi-tick (≥3-tick) rotations; M-170.B operates on single-tick excursions. Both can coexist; an instance can satisfy neither, one, or (under specific conditions) both.

## Author/surface analysis of the excursion

The Add.169 excursion entrants (opencode + qwen-code) introduced 3 unique authors (Hona, kitlangton, tanzhenxin) on 3 distinct surfaces (mcp-url-validation, websocket-proxy-test, deepseek-reasoning-content-replay). The Add.170 snap-back exits (opencode + qwen-code re-silent) zero out these surfaces in the next tick — none of the Add.169 excursion surfaces persist as active areas at Add.170.

This is consistent with **release-event-driven excursion**: the 3 excursion PRs were stockpiled merges from independent triggers (probably batched maintenance window + dormancy break) that flushed in a single ~16-minute span (23:32:27 → 23:43:17) and did not generate follow-on PR activity.

## Falsifiable claim P-170.B-test

Specific carry: across Add.171-174, no second active-set excursion-with-snap-back of symmetric-diff ≥3 occurs. If exactly one such excursion occurs, M-170.B advances. If zero such excursions occur, M-170.B is downgraded toward singleton classification (parallel to synth #367 M-169.A singleton fate). If ≥2 such excursions occur, M-170.B becomes load-bearing and warrants its own anti-correlation prediction set.

## Cross-reference: opencode-shape mirrors prior litellm-shape

Per Add.170 anomaly #7: opencode trajectory Add.168→170 = 0→2→0; litellm trajectory Add.167→169 = 0→2→0. Identical 3-tick silence-doublet-silence shape across two repos one tick apart. This is an INDEPENDENT anomaly from M-170.B but **may share generative mechanism**: both sub-shapes (litellm's and opencode's) contributed to the Add.169 active-set excursion bookended by Add.168 and Add.170 snap-back. Specifically, opencode's doublet WAS the excursion entry; litellm's silence WAS the excursion exit. The shape-mirror across litellm and opencode at one-tick offset is the micro-mechanism producing the M-170.B macro-pattern.

This suggests M-170.B may be **decomposable** into pairs of repo-level shallow-doublet shapes (M-167.A) that happen to alternate with one-tick offsets, producing the appearance of a coordinated active-set excursion at the cross-repo aggregate level.

## Hypothesis for Add.171

If P-170.F (opencode break at Add.171, >55%) confirms with doublet shape AND P-170.C (litellm sustained activity at Add.171) confirms, then Add.170→171 active-set transition will be {codex, litellm, gemini-cli} → {codex, litellm, opencode, gemini-cli} — symmetric-diff = 1 (opencode⁺), NOT a snap-back excursion candidate. M-170.B would gain no new evidence in Add.171.

If instead Add.171 active-set deviates with symmetric-diff ≥3 (e.g., {codex, gemini-cli, qwen-code, goose}), then we have a second excursion candidate and Add.172 becomes the snap-back-vs-drift decision point.

Most-likely Add.171 outcome under combined point-predictions P-170.A through P-170.G: active set ≈ {codex, litellm, opencode, gemini-cli} (cardinality 4, symmetric-diff vs Add.170 = 1). This would be a regime-drift outcome, not an excursion — leaving M-170.B at 1-of-1 evidence pending future tests.

## Relation to prior synths

- **Distinguishes from synth #361 (M-166.A keystone-carrier-rotation)**: M-170.B operates at single-tick scale, M-166.A at multi-tick scale; they are not in conflict.
- **Reinforces synth #366 (M-168.B sustained-carrier-amplifies-rate)**: gemini-cli sole carrier role is stable across Add.168→170 despite supporting-set churn — confirms carrier role is decoupled from active-set membership churn.
- **Reinforces synth #364 (M-167.B sustained-surface-pool-fluidity)**: gemini-cli now at 6-tick streak, 14 distinct surfaces, 0 repeats — extends streak depth without compromising fluidity invariant.
- **Independent of synth #368 (M-169.B dormancy-rank-inheritance)**: M-170.B and M-169.B describe distinct phenomena (active-set dynamics vs dormancy-rank dynamics). Both advance independently at Add.170 with 1-of-1 supporting evidence each.
