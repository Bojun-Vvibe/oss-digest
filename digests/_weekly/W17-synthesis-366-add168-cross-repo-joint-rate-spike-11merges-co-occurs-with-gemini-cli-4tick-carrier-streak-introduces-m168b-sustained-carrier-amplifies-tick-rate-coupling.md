# W17 synthesis #366 — Add.168 cross-repo joint-rate-spike (11 merges, 0.2752/min) co-occurs with gemini-cli 4-tick carrier streak: M-168.B sustained-carrier-amplifies-tick-rate coupling

**Inputs**: ADDENDUM-168 (cross-repo 11 merges, rate 0.2752/min, active set {codex:6, litellm:2, gemini-cli:3}); ADDENDUM-165/166/167/168 gemini-cli active streak (Add.165 PRs not in this tick scope, Add.166 #26153, Add.167 #26230 Abhijit-2592, Add.168 #26233 Samee24 + #26234 stevemk14ebr + #26235 bot); ADDENDUM-161 prior joint-high tick (rate 0.2750, 11 merges).

## Specific PRs anchoring the claim

The two joint-rate-peak ticks of Add.158-168 are:

- **Add.161**: 11 merges, 0.2750/min — characterized by a single-repo keystone burst (codex 11-of-11 cluster per historical synth #335 references in synth #354).
- **Add.168**: 11 merges, 0.2752/min — characterized by **3-repo distributed burst** (codex 6 #19229/#19435/#19852/#20136/#20243/#20271 + litellm 2 #26225/#26813 + gemini-cli 3 #26233/#26234/#26235).

This is a **structural divergence**: Add.161 was concentration; Add.168 is distribution. Yet both produce identical aggregate rate (within 0.0002/min). The aggregate-rate ceiling of ~0.275/min for the Add.158-168 series appears to be a **common envelope** reachable via different underlying compositions.

## Coincidence with sustained-carrier streak

gemini-cli is now in its 4th consecutive active tick (Add.165, Add.166, Add.167, Add.168) with PRs:
- Add.166 #26153 (PII redaction surface, cited in synth #362)
- Add.167 #26230 Abhijit-2592 (agent-shell-permission)
- Add.168 #26233 Samee24 (docs/setup) + #26234 stevemk14ebr (network/proxy) + #26235 bot (tool-correctness GrepTool)

Across these 4 ticks gemini-cli has emitted **6 distinct surface families with 0 repeats**. M-167.B (synth #364 sustained-surface-pool-fluidity) extends with no falsifying evidence.

The Add.168 rate spike (0.2752) is the FIRST in Add.165-168 streak window — i.e., gemini-cli's carrier streak co-occurs with the rate-envelope-touch event. This is a **2-of-N co-occurrence** (Add.161 high-rate had no comparable carrier streak; Add.168 high-rate has gemini-cli 4-tick streak). N too small for inference, but the pattern is worth tracking.

## M-168.B definition (introduced)

**Sustained-carrier-amplifies-tick-rate coupling**: when a single repo holds a ≥4-consecutive-tick active streak with non-repeating surface families, the probability of an aggregate-rate envelope-touch tick (≥0.27/min) within the streak window rises above the W17 base rate of 2/11 = 18.2%.

**Falsifiable form**: If gemini-cli sustains 7+ consecutive active ticks (Add.165-171), AND no second envelope-touch tick (rate ≥0.27/min) occurs within Add.165-171, M-168.B is rejected. If a second envelope-touch tick DOES occur within the streak, M-168.B advances from co-occurrence to candidate-mechanism status.

## Carry-prediction evaluation (Add.167 → Add.168)

- **P-167.B** (gemini-cli Add.168 emits ≥1 NEW surface family extending streak to 10 distinct in 8 ticks, >50%): **CONFIRMED with overshoot** — emitted 3 NEW families, total streak 12 distinct in 8 ticks.
- **P-167.C** (qwen-code crosses 7h boundary, >65%): **CONFIRMED** — qwen-code silence depth ≈7h24m at Add.168 close.
- **P-167.D** (goose breaks Add.168 OR Add.169, >55%): **HALF-PENDING** — Add.168 did NOT break (silence n=7, depth ~5h00m); Add.169 still in window.
- **P-167.F** (opencode does NOT extend model-provider meta-surface at Add.168, >65%): **CONFIRMED VACUOUSLY** — opencode emitted 0 merges at Add.168 (silence), so by definition no surface extension.
- **P-167.I** (rolling Add.149-168 trimodal-conformance ≥90%, >75%): **NOT EVALUATED** here (requires multi-addendum re-tally outside this synth).

## Specific PR-anchored anomaly: bot-author within carrier streak

gemini-cli Add.168 includes #26235 from bot author `app/gemini-cli`. Of the 4 carrier-streak ticks, bots have appeared in: Add.168 only (1-of-4). Bot-author share at gemini-cli is therefore 1/6 surface-family-emissions in the streak ≈ 16.7%. This is below the W17 cross-repo bot-author baseline (uncomputed precisely here, but estimated 5-10% from prior synth references). Slight elevation; insufficient signal for new claim. Tracked as background metric for synth #367+ if elevation persists.

## Hypothesis for Add.169

If M-168.B has any predictive force, Add.169 should NOT see another envelope-touch (the coupling allows but does not require multiple envelope-touches per streak). Test: Add.169 rate is most likely in [0.05, 0.18] (band reversion) — if it lands ≥0.27 again, M-168.B advances strongly. If it lands ≤0.05, the envelope-touch was an Add.168 outlier and the Add.165-168 streak is decoupled from rate dynamics, weakening M-168.B.
