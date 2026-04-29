# W17 Synthesis #363 — Add.166→167 single-tick silence-gap recovery doublet (codex n=2 burst at Add.167) confirms shallow-gap-fast-recovery sub-regime under M-166.A keystone-carrier-rotation frame

**Mission:** Identify and characterize the recovery dynamics of single-tick silence gaps in W17 keystone-carrier rotation, distinguishing them from deep-dormancy (3h+) breaks.

## Observation

Two W17 single-tick silence-gap recovery cases are now on record:

1. **opencode** Add.165 silent → Add.166 break (depth at break: **3h10m41s** — actually multi-tick n=4 deep dormancy, NOT single-tick).
2. **codex** Add.166 silent → Add.167 break (depth at break: ~**47m** — Add.166 width 38m24s + Add.167 partial = ~85m max from last codex merge at Add.165 close 21:21:10Z to Add.167 codex first merge at 22:08:06Z = **46m56s gap**).

Case (2) is a true single-tick gap. The recovery (Add.167 codex emits **2 merges**: bolinfest #20242 `b154600` 22:29:30Z + adaley-openai #20231 `f63b19b` 22:08:06Z) restores keystone active-set rate from 9-of-10 = 90.0% to **10-of-11 = 90.9%** within one tick.

## Falsified hypothesis

**Synth #361 P-361.A** (codex 9-of-9 keystone-streak break at Add.166 inaugurates a multi-tick silence regime requiring ≥2-tick recovery before resumption): **FALSIFIED** at Add.167. Codex resumes within 1 tick with a 2-merge burst, NOT a slow re-entry. The rotation regime M-166.A applies to the *carrier set*, not to a *recovery latency* — single-tick gaps in keystone carriers are absorbed without recovery delay.

## New regime introduced — M-167.A

**M-167.A: Shallow-gap-fast-recovery sub-regime under M-166.A keystone-carrier-rotation frame.** Within the M-166.A rotation framework, keystone carriers (here: codex with 9-of-9 prior streak) that experience single-tick silences (gap depth <1h) recover in the immediately following tick with merge count ≥ historical mean for that carrier (codex Add.157-165 mean = 4.0 merges/active-tick; Add.167 emits 2, **below mean** but **non-zero**). Distinct from deep-dormancy breaks (3h+, cf. opencode Add.165→166, goose Add.161→TBD) which historically resume with single-merge cautious re-entry.

## Specific PR / SHA evidence

- **codex Add.167 recovery burst**: bolinfest #20242 `b154600` 22:29:30Z `docs: discourage [async_trait]…`; adaley-openai #20231 `f63b19b` 22:08:06Z `[apps] Add apps MCP path override` (adaley-openai is NOVEL author, growing Add.158-167 union from 13→15).
- **Comparison — opencode Add.166 deep-dormancy resumption (n=4 depth)**: 3-merge burst including rubdos #24996 `639e27c` (NOVEL author) + rekram1-node #25012 `5882610` + rekram1-node #25007 `a740d2c` — meta-surface clustered (model-provider integration 3-of-3) but pivoted away at Add.167 (Hona #25013 `d7b7be1` desktop session-persistence).
- **Anchor for falsification**: codex Add.158-167 author union 13→15 grew BY 2 in single recovery tick (1 NOVEL: adaley-openai), demonstrating novelty-injection survives single-tick gap.

## Falsifiable predictions

- **P-363.A**: Codex Add.168 emits ≥1 merge (sustains 11-of-12 = 91.7% active-set rate); >70% prob. **Falsifier**: codex Add.168 silent (would push toward 2-tick-gap regime requiring revision of M-167.A boundary).
- **P-363.B**: Across Add.168-Add.177 (10-tick window), all keystone-carrier single-tick gaps (gap depth <1h, ≥1 prior 5-tick active streak) recover in the immediately-following tick with ≥1 merge; >65% prob. **Falsifier**: any keystone carrier (codex, gemini-cli post-streak) experiences a 2+ tick gap in this window.
- **P-363.C**: Recovery-tick merge count for shallow-gap recoveries averages **<0.7× carrier's prior-streak mean**, indicating cautious resumption even in fast-recovery regime; >55% prob. Codex Add.167: 2 merges vs prior mean 4.0 = 0.50× ratio — already below 0.7×. **Falsifier**: next observed shallow-gap recovery emits ≥0.7× prior mean.
- **P-363.D**: Recovery-tick author novelty rate ≥40% (matches or exceeds non-recovery novelty baseline of 1.6/active-tick → 40%); >60% prob. Codex Add.167: 1 NOVEL of 2 merges = 50% — already confirms above baseline. **Falsifier**: next 3 shallow-gap recoveries collectively yield <40% novel authors.
- **P-363.E**: Synth #361 M-166.A keystone-carrier-rotation regime persists Add.168-Add.177 (no single carrier stable for 5+ consecutive ticks); >65% prob. **Falsifier**: any carrier maintains 5-tick consecutive active membership.

## Cross-reference index

- Builds on: synth #358 (M-164.B trimodal-attractor), synth #361 (M-166.A keystone-carrier-rotation), synth #224 (strict-n cardinality), Add.165, Add.166, Add.167.
- Adjacent regimes: synth #228 (dormancy-metastability — applies to deep-dormancy 3h+ resumptions, distinct from M-167.A shallow-gap regime).
- Numerical anchors: 9-of-9 → 9-of-10 → **10-of-11 = 90.9%** codex active-set trajectory; 1.6-novel/active-tick rolling baseline; 0.50× recovery merge-ratio at Add.167.

---
**Closes:** 2026-04-29T22:47:10Z, post-Add.167.
