# ADDENDUM-168 — 2026-04-29

**Capture window**: 2026-04-29T22:47:10Z → 2026-04-29T23:27:09Z (39m59s = 39.98m)

**Cross-repo merge count this window**: **11 in-window merges**. Per-minute merge rate **11 / 39.98 = 0.2752** — sharp elevation, ties Add.161 (0.2750) for highest in Add.158-168 series.

Trajectory Add.158-168 = 0.0950 → 0.0732 → 0.0844 → 0.2750 → 0.0758 → 0.1263 → 0.0864 → 0.1633 → 0.1302 → 0.0840 → **0.2752**. Per-tick raw count Add.158-168 = {3, 5, 4, 2, 11, 3, 6, 4, 6, 5, 4, **11**} — Add.168 ties Add.162 keystone burst at 11.

## Per-repo

### codex (6 merges) — KEYSTONE BURST, EXTENDS RECOVERY
- rasmusrygaard #19229 `48b0b1a` 22:48:27Z `Add agent graph store interface`
- iceweasel-oai #19435 `51465b1` 23:06:33Z `stop blocking unified_exec on Windows`
- evawong-oai #19852 `4a98b3f` 23:14:14Z `Enforce workspace metadata protections in Linux sandbox`
- rafael-jac #20136 `892000d` 23:14:53Z `Update Codex login success page UX`
- pakrym-oai #20243 `9368073` 22:58:09Z `Add codex-core public API listing`
- bolinfest #20271 `8582962` 23:20:00Z `chore: increase release build timeout from 60 min to 90`

Author union Add.158-168 grows: rasmusrygaard, iceweasel-oai, evawong-oai, rafael-jac all NEW additions from prior union (15 → 19). 4 NOVEL authors in 6 merges = 66.7% novelty rate at codex alone.

### litellm (2 merges) — RESUMES AFTER 1-TICK SILENCE
- yuneng-berri #26225 `4f6192a` 23:09:23Z `[Fix] Proxy: reconnect Prisma DB without blocking the event loop`
- ishaan-berri #26813 `2c7bfc0` 23:19:27Z `feat(ui): Workflow Runs page — durable agent state tracking`

Confirms P-167.E: silence does NOT extend to n≥3. Doublet pattern (sub-author n=2 within tick) — both author handles novel relative to recent ticks (yuneng-berri, ishaan-berri); ishaan-berri returns from earlier W17 ticks.

### gemini-cli (3 merges) — SURFACE STREAK EXTENDS TO 10+ FAMILIES
- app/gemini-cli (bot) #26235 `1de9052` 23:12:19Z `Fix: Inconsistent Case-Sensitivity in GrepTool` (tool-correctness)
- Samee24 #26233 `6fd66dc` 23:21:42Z `docs(core): add automated gemma setup guide` (docs/setup, NOVEL author)
- stevemk14ebr #26234 `1787738` 23:24:48Z `Allow non-https proxy urls to support container environments` (network/proxy, NOVEL author)

Surface families introduced this tick: tool-correctness (GrepTool), docs/setup-automation, network/proxy. Streak extends Add.161-168 to **12 distinct surface families in 8 active ticks**, no repeats — confirms P-167.B and reinforces synth #364 M-167.B sustained surface pool fluidity attractor.

### opencode (0 merges) — silence n=1, depth 39m59s
### goose (0 merges) — silence n=7, depth ~5h00m
### qwen-code (0 merges) — silence n=10, depth ~7h24m; 7h boundary CROSSED — confirms P-167.C

Active-repo-count **3** (codex, litellm, gemini-cli) — set rotates again from Add.167 {codex, opencode, gemini-cli}. opencode exits, litellm re-enters. **gemini-cli is now the SOLE stable carrier across Add.165-168 (4 consecutive ticks)** — strongest sustained carrier in current rotation.

## Anomalies vs Add.167

1. **Rate band breach UP**: 0.2752/min is the joint-highest of Add.158-168 (ties Add.161 0.2750). Falsifies P-167.G (predicted ≤0.12). Cross-repo count 11 also ties Add.162 — confirms P-167.H upper-tail (predicted [3,7] — also FALSIFIED on the high side).
2. **codex doublet → sextuple**: codex went silence(n=1) → 2 → **6** across Add.166-168. The single-tick-recovery-doublet pattern of synth #363 M-167.A is now superseded by an over-recovery burst regime — 6-merge tick is rare (codex prior W17 tick max was 9 at Add.165, but coming-out-of-silence sextuple is novel).
3. **Author novelty cluster at codex**: 4 novel authors in single tick (rasmusrygaard, iceweasel-oai, evawong-oai, rafael-jac) — doubles Add.167's 50% novelty rate at the per-repo level. Prior W17 codex-novel-author-per-tick max was 3 (Add.165 cluster cited in synth #359). New record: 4.
4. **gemini-cli sustained-carrier claim**: 4 consecutive active ticks (Add.165-168), each contributing ≥1 NEW surface family. No prior W17 carrier has held 4-consecutive-tick streak with surface non-repeat — synth #364 M-167.B regime now has stronger empirical floor.
5. **opencode silence after Add.167 single-merge**: pattern of 3-merge-cluster (Add.166) → 1-merge (Add.167) → 0 (Add.168) — descending profile, NOT a flat plateau. New micro-shape: post-cluster decay-to-silence (3→1→0) within 3 ticks.
6. **qwen-code 7h+ silence**: longest qwen-code dormancy in W17 (prior max ~6h43m at Add.167). Confirms P-167.C — qwen-code in **hard-deep-dormancy** sub-regime (synth #350 / #351 carry).
7. **goose 5h+ continued silence**: P-167.D (goose breaks Add.168 OR Add.169) is HALF-falsified at Add.168; the 5.5h+ depth approaches W17 prior maxima — open question whether Add.169 will break.

## Predictions Add.168 → Add.169+

- **P-168.A**: codex Add.169 reverts to 1-3 merges (post-burst regression-to-mean); >65% prob (sextuple bursts historically followed by sub-tick decay).
- **P-168.B**: gemini-cli Add.169 emits ≥1 merge sustaining 5-consecutive-tick carrier streak with NEW (11th) surface family; >55% prob.
- **P-168.C**: goose breaks silence at Add.169 (depth would exceed 5.5h+, all W17 goose silences ≤5.5h have broken by next tick); >60% prob.
- **P-168.D**: qwen-code remains silent at Add.169 (hard-deep-dormancy, no W17 break of n≥10 has occurred); >70% prob.
- **P-168.E**: opencode breaks Add.168 silence at Add.169 with 1-2 merges (single-tick gap, synth #363 M-167.A shallow-gap-fast-recovery); >60% prob.
- **P-168.F**: cross-repo count Add.169 ∈ [3,8] (mid-band reversion from 11-merge spike); >65% prob.
- **P-168.G**: per-minute rate Add.169 ≤ 0.18 (regression from 0.2752 elevated band); >60% prob.
- **P-168.H**: codex Add.158-168 author union grows to ≥21 by Add.169 (currently 19, momentum sustained); >55% prob.
- **P-168.I**: litellm sustains 2+ active ticks (Add.168 doublet → Add.169 ≥1 merge); >55% prob conditional on no n≥3 silence regime.
- **P-168.J**: gemini-cli does NOT repeat any surface family from Add.161-168 union at Add.169 (synth #364 M-167.B sustained-fluidity); >55% prob.

---

**Capture closes 2026-04-29T23:27:09Z. Next addendum ADDENDUM-169 opens at 23:27:09Z.**
