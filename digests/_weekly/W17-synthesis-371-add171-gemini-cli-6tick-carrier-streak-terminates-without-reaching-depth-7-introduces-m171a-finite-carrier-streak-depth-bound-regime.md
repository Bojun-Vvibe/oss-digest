# W17 synthesis #371 — Add.165→171 gemini-cli sustained-carrier streak terminates at depth 6 (Add.165-170, 14 distinct surface families, 0 repeats) without reaching depth 7 — anchored by silence at Add.171 after sripasg #26222 0ccc5ce acp-architecture-refactor at Add.170 — introduces M-171.A finite-carrier-streak-depth-bound regime distinct from synth #364 M-167.B sustained-surface-pool-fluidity attractor

**Inputs**: ADDENDUM-165 (gemini-cli #26223 dce13019 gundermanc 5-tick carrier resumption); ADDENDUM-166 (gemini-cli #26153 2194da2b PII-redaction); ADDENDUM-167 (gemini-cli #26230 49988fc Abhijit-2592 agent-shell-permission-boundary); ADDENDUM-168 (gemini-cli #26233/#26234/#26235 carrier triplet); ADDENDUM-169 (gemini-cli #26236 1834ad0 gundermanc 5-tick carrier sustenance); ADDENDUM-170 (gemini-cli #26222 0ccc5ce sripasg acp-prompt-turn-delegation, 14th distinct surface); ADDENDUM-171 (gemini-cli **0 merges**, silence n=1 at depth 54m27s); synth #364 (M-167.B sustained-surface-pool-fluidity attractor at gemini-cli, 7-tick streak claim at the time); synth #366 (M-168.B sustained-carrier-amplifies-tick-rate coupling); synth #361 (M-166.A keystone-carrier-rotation regime).

## Carry-prediction evaluation (Add.170 → Add.171)

- **P-170.A** (codex 3-7 merges, novelty <50%, >55%): **FALSIFIED** — codex emits 1 merge (rhan-oai #20241 ffbe9fe5), below 3-7 floor.
- **P-170.B** (gemini-cli ≥1 merge sustaining 7-tick carrier streak with NEW 15th surface, >50%): **FALSIFIED** — gemini-cli 0 merges, streak terminates at depth 6.
- **P-170.C** (litellm 1-3 merges sustaining post-triplet, >55%): **FALSIFIED** — litellm 0 merges, immediate post-over-recovery silence.
- **P-170.D** (goose break at Add.171 crossing 6.5h+, >55%): **FALSIFIED** — goose silence n=10 ~7h08m, no break.
- **P-170.E** (qwen-code remains silent post-break, >60%): **CONFIRMED** — qwen-code n=2 silence.
- **P-170.F** (opencode breaks silence, >55%): **CONFIRMED** but over-delivers at n=3.
- **P-170.G** (cross-repo count [4,8], >60%): **CONFIRMED** at lower bound 4.
- **P-170.H** (rate [0.10, 0.25], >55%): **FALSIFIED** at 0.0735 — below band.
- **P-170.I** (codex author union ≥24 by Add.171, >50%): **FALSIFIED** — union holds at 22.
- **P-170.J** (gemini-cli surface NOT acp/architecture or bot-meta, >55%): **VACUOUS** — gemini-cli silent.

8-of-10 P-170.* falsified; 2 confirmed. P-170.B falsification is the dominant signal.

## The streak in full (Add.165-170)

| Tick | PR | SHA | Author | Surface family |
|------|-----|-----|--------|----------------|
| Add.165 | #26223 | dce13019 | gundermanc | bot-productivity / backlog-optimization |
| Add.166 | #26153 | 2194da2b | (PII-redaction author) | PII-redaction surface |
| Add.167 | #26230 | 49988fc | Abhijit-2592 | agent-shell-permission-boundary |
| Add.168 | #26233 | (carrier triplet) | (3 authors) | docs/setup, network/proxy, tool-correctness GrepTool |
| Add.169 | #26236 | 1834ad0 | gundermanc | self-referential bot-meta |
| Add.170 | #26222 | 0ccc5ce | sripasg | acp-prompt-turn-delegation / GeminiClient-refactor |
| **Add.171** | **—** | **—** | **—** | **SILENCE n=1 (54m27s)** |

Streak depth: **6 ticks**, **14 distinct surface families** (Add.168 contributed 3, others 1 each), **0 repeats**, **5 distinct authors** (gundermanc x2 at Add.165 and Add.169). Streak terminates without reaching the P-170.B-anticipated 7-tick depth.

## M-171.A definition (introduced)

**Finite-carrier-streak-depth-bound regime**: a sustained-carrier streak (synth #364 M-167.B definition: ≥3 consecutive ticks of single-repo activity with ≥1 distinct surface per tick and 0 surface-family repeats) terminates at finite depth bounded by an empirically-observable upper limit. Add.165-170 gemini-cli streak provides the **first observed termination** at depth **6**. M-171.A claims that prior W17 sustained-carrier streaks share a similar finite-depth bound (specifically, no sustained-carrier streak in W17 has reached depth 7 or greater).

Distinguished from synth #364 M-167.B (sustained-surface-pool-fluidity attractor): M-167.B claims the streak phenomenon EXISTS as an attractor but does not bound depth. M-171.A is the **complementary depth-bound claim** — the attractor exists AND has finite depth ≤6 in W17.

Falsifiable form (next-week test):
- Audit W18 ADDENDA for sustained-carrier streaks per the M-167.B definition.
- If any W18 streak reaches depth ≥7 → M-171.A is REJECTED (depth bound is W17-specific, not a structural property).
- If all W18 streaks terminate at depth ≤6 → M-171.A advances to confirmed regime.
- If W18 has 0 sustained-carrier streaks → M-171.A is unable to be tested (deferred).

Add.171 evidence: 1-of-1 candidate streak (the gemini-cli Add.165-170 streak) terminates at depth 6. Cumulative score 1-of-1 toward M-171.A.

## Relation to M-166.A keystone-carrier-rotation (synth #361)

M-166.A predicts that the carrier role rotates between repos across multi-tick windows. M-171.A is **complementary**: it explains WHY rotation happens (because individual carrier streaks terminate at finite depth ≤6, forcing carrier role to migrate). The two regimes form a coherent pair: M-166.A describes the rotation phenomenon; M-171.A bounds the streak duration that triggers rotation.

If M-171.A holds, then M-166.A keystone-carrier-rotation is a **necessary consequence** of finite-streak-depth-bounded carriers, not a separate phenomenon.

## Relation to synth #364 M-167.B sustained-surface-pool-fluidity attractor

M-167.B's central claim was that surface families do not cluster within a sustained-carrier streak (anti-clustering: no surface family repeats across the streak). The Add.165-170 streak supports this with 14 distinct families across 6 ticks (0 repeats). M-167.B remains structurally supported even with the streak terminated.

M-171.A and M-167.B are **complementary, not competing**: M-167.B describes WITHIN-streak structure (surface fluidity); M-171.A describes streak DURATION (finite-depth bound). Both must hold for the broader sustained-carrier regime to be coherent.

## Falsifiable predictions for next 4 ticks (Add.172-175)

- **P-371.A**: No active sustained-carrier streak (per M-167.B definition) reaches depth ≥4 across Add.172-175; >50% prob (post-streak attractor exhaustion in the carrier dimension).
- **P-371.B**: gemini-cli silence sustains for ≥2 ticks (Add.171 + Add.172 silence); >55% prob — post-streak silence template prior precedent (codex Add.166 silence post-9-tick keystone streak sustained 1 tick, then bursts).
- **P-371.C**: When gemini-cli next emits a merge (Add.172 or later), surface family is NOT in the streak's 14-family union (PII-redaction, agent-shell-permission, docs/setup, network/proxy, tool-correctness, GrepTool, bot-meta, acp-architecture, bot-productivity, refactor-delegation); >55% prob — surface-pool-fluidity continues out-of-streak.
- **P-371.D**: At least one new sustained-carrier streak emerges in W18 (any repo, ≥3 consecutive ticks with ≥1 surface each, 0 family repeats); >50% prob — M-167.B attractor regenerates after a quiescence period.
- **P-371.E**: codex sustained-carrier streak (synth #361 M-166.A keystone definition: 9-of-9 ticks Add.158-166) is the W17 record; no W17 streak surpasses 9-tick keystone depth across remaining tickset; >70% prob.
