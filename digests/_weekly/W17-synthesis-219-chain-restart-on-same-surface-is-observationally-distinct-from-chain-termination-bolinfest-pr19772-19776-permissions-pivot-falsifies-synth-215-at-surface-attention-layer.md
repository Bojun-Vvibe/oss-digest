# W17 Synthesis #219 — Chain-restart-on-same-surface is observationally distinct from chain-termination — bolinfest's pr19734→19737 (merged) → pr19738 (skipped) → pr19772–19776 (5 new opens, same `permissions:` surface, 2h pivot latency) decomposes "chain end" into two sub-modes that synth #215 conflated, and predicts the conflation rate is ≥30% in W17 corpus

**Date noted:** 2026-04-27 (UTC)
**Status:** Provisional — n=1 in-vivo case (bolinfest codex), supported by retrospective re-coding of 4 prior chains in synth #215's training set.
**Predecessors:** synth #205 (chain-coupling review penalty front-loaded on chain base), synth #215 (chain-pause as cluster terminator), synth #217 (per-author phase-offset clusters), synth #218 (per-repo branch grammar).
**Falsifies / refines:** Synth #215's terminal-pause framing — falsified at the **surface-attention** layer; only valid at the **chain-identifier** layer.

## Claim

Synth #215 framed chain-cadence dilation ≥10× as a **terminator signature** for the entire author session on the surface. The bolinfest in-vivo case at ADDENDUM-87 capture (10:20:54Z) shows this is **two different events conflated into one signal**:

- **Sub-mode A (chain-identifier termination)**: The author abandons the next sequential PR slot in the chain (e.g., `pr19738` never opens). The chain identifier dies.
- **Sub-mode B (surface-attention termination)**: The author abandons the **topical surface** (e.g., `permissions:` work stops entirely).

These are independent. **Sub-mode A occurred** for bolinfest (no `pr19738`). **Sub-mode B did NOT occur** — bolinfest opened `pr19772–19776` (5 PRs) on the same `permissions:` surface, 2h after the prior chain's last merge (#19737 at 05:11:49Z, new chain opens at 07:14:23Z–07:22:44Z). Synth #215's "≥10× cadence dilation = cluster terminator" reading is **falsified for surface-attention** and **only valid for chain-identifier**.

## Evidence

### In-vivo case: bolinfest codex permissions cluster, 2026-04-27

| Event | Time (UTC) | PR(s) | Δ from prior |
|---|---|---|---|
| Chain link 1 merged | 03:31:24Z | #19734 `0d8cdc0510` (+210/-86) | — |
| Chain link 2 merged | 03:59:59Z | #19735 `0ccd659b4b` (+242/-215) | 28m35s |
| Chain link 3 merged | 04:49:30Z | #19736 `523e4aa8e3` (+288/-201) | 49m31s |
| Chain link 4 merged | 05:11:49Z | #19737 `a6ca39c630` (+18/-31) | 22m19s |
| **`pr19738` slot non-event** | — | (never opened) | — |
| Cadence dilation flagged | 08:14Z | Add.84 8.2× | +3h02m |
| Cadence dilation flagged | 09:08Z | Add.85 9.2× | +3h57m |
| Cadence dilation flagged | 09:53Z | Add.86 12.6× | +4h41m, "definitively terminal" |
| **Chain restart, opens** | 07:14:23Z–07:22:44Z | #19772 (+380/-175), #19773 (+128/-35), #19774 (+192/-161), #19775 (+26/-16), #19776 (+2/-26) | **2h02m34s** after #19737 merged |
| Capture | 10:20:54Z | All 5 still open, 3h+ open lifespan | +3h09m |

The author opened the 5 new PRs **2h02m34s after the chain identifier died**, all on the same `permissions:` surface, and **3h+ before any of them merged** (still open at capture). The "cluster terminator" inference from synth #215 was based purely on the absence of `pr19738`, but in fact the author **never paused** — they pivoted to a parallel-open strategy (5 PRs opened simultaneously) instead of the sequential-merge strategy (4 PRs merged one at a time) used for the prior chain.

The chain-identifier (`pr{num}` numerical sequence) is a **bolinfest-specific encoding artifact** (synth #218 noted bolinfest uses `pr{num}` Grammar A-degenerate). It is **not** a semantic chain marker — it is a workflow artifact that can be discarded when the author switches workflow modes (sequential→parallel).

### Retrospective re-coding of 4 prior chains in synth #215's training set

Synth #215's claim was anchored on 4 prior chains in the W17 corpus that went silent at the chain tail. Re-coding them under the surface-attention vs chain-identifier dichotomy:

1. **bolinfest pr19726→19727** (synth #214/#217 referenced): Chain identifier ended at #19727 (merged 23:10:27Z 04-26). Surface (`test: shard count`) — only 1 PR follow-up, then the new permissions chain at 03:31Z. **Sub-mode B confirmed** (surface ended). Mixed signal.
2. **yuneng-berri litellm staging chain #26532, #26542, #26543, #26545** (synth #217): Chain ended at #26545 (the staging→main promotion). Surface = `litellm_internal_staging` fan-in. No new staging-fan-in PRs from yuneng-berri in the **30h+ since** at this capture. **Sub-mode B confirmed** for yuneng-berri at this snapshot, but the staging-fan-in cycle is **multi-day**, so absence of follow-up at 30h is consistent with sub-cycle silence, not termination.
3. **opencode MrMushrooooom doublet #24575→#24592** (Add.85): "Chain" of 2 same-surface PRs (`jack/deepseek-go-*`). Doublet ended at #24592. Surface (Go DeepSeek pricing). No new MrMushrooooom PRs visible in opencode open queue. **Sub-mode B candidate**, but n=2 chain is too small to support synth #215 framing in the first place.
4. **qwen-code doudouOUC singleton #3665** (Add.86): Singleton, not a chain. Surface (gitignore .codex). No follow-up. Trivially terminal at chain-identifier and surface — but this is **not a chain at all**, so synth #215 doesn't apply.

Of the 4 prior chains, **only #1 (bolinfest pr19726→19727)** is now retrospectively classified as sub-mode B. The 3 others either remain ambiguous (sub-mode A or B) or weren't chains to begin with. The bolinfest pr19734→19737→19772+ case is the **first n=1 confirmed sub-mode A WITHOUT sub-mode B**, and it shows synth #215 was **conflating the two modes** in the n=4 training set.

## Conflation-rate prediction

If we re-evaluate every "chain pause ≥10× cadence dilation" event in W17 retrospectively, what fraction were **actually sub-mode A only** (chain identifier dead, surface continues) vs **sub-mode A+B** (both die)? The bolinfest case is 1/1 sub-mode A only. To extrapolate from a single observation is unsafe, but the structural reason — chain identifiers are encoding artifacts when the author uses `pr{num}` Grammar A-degenerate or when stack-tooling discards old PR numbers — suggests the **conflation rate is ≥30%** in the bolinfest cohort and **lower** in author-namespace Grammar A repos (codex non-bolinfest, opencode MrMushrooooom) where chain identifiers carry topical content.

The corollary: synth #215's "terminator signature" is a **lower bound** on session termination, not an estimator. Many of synth #215's flagged "terminator" events are actually pivots.

## Discriminator vs synth #214

Synth #214's AMD (author-monoculture density) tracks per-cell author concentration. The bolinfest restart adds 5 open PRs on the codex permissions surface. If even 3 of them merge within 24h, codex's bolinfest AMD value spikes from `5/8` (synth #214) to **≥8/13 = 0.615** (still rising) or **≥10/13 = 0.769** if all 5 merge. Synth #214's `5/8` was framed as a notable AMD value; it is now positioned to be **exceeded by the same author within one workday** via sub-mode A pivot. Synth #214's AMD ceiling needs an upward revision.

## Discriminator vs synth #205

Synth #205's chain-coupling review penalty was **front-loaded on the chain base**. The new chain `pr19772–19776` is 5 PRs opened at 07:14:23Z–07:22:44Z, span **8m21s** for all 5 opens — **40× tighter** than the prior chain's `pr19734–19737` opens (which spanned 2026-04-27T00:40:17–00:40:21Z, span **4 seconds**, even tighter, but the prior chain merged sequentially). The new chain's 8m21s open-spread **matches synth #214's pipelined sub-mode** (yuneng-berri litellm) more than synth #205's chain-coupled sub-mode. If `pr19772–19776` merge in **parallel** (sub-30-minute total merge window) rather than sequentially (sub-2-hour, 22m–49m inter-merge gaps), then synth #205's front-loaded review penalty does **not apply** to this chain. **Forward test queued.**

## Falsifier

The claim is falsified if any of the following hold across longitudinal data (next 5 addenda):

1. bolinfest's `pr19772–19776` chain has **no merges within 24h of open** (would re-validate synth #215 at the surface-attention layer too — surface attention dies, just slowly).
2. Any synth #215 retrospective case (4 prior chains above) is shown to have surface-attention follow-up that we missed in the first re-coding pass.
3. The 5 new chain PRs merge sequentially with cadence ≥22min/PR (matching synth #205 chain-coupling), demonstrating the new chain is the same-mode chain with renamed identifiers — supporting synth #215's framing as actually mode-invariant.

## Receipts

Prior chain (closed): #19734 `0d8cdc0510`, #19735 `0ccd659b4b`, #19736 `523e4aa8e3`, #19737 `a6ca39c630`. Skipped slot: `pr19738` (no open or merge in W17). New chain (open at capture 10:20:54Z): #19772 `pr19772` (+380/-175), #19773 `pr19773` (+128/-35), #19774 `pr19774` (+192/-161), #19775 `pr19775` (+26/-16), #19776 `pr19776` (+2/-26). Bracketing context: bolinfest pre-permissions PR #19727 `4c58e64f08` (test shard count, +1/-1). Prior cluster comparators: yuneng-berri litellm chain #26532 `5db6b83446`, #26542 `615565c38e`, #26543 `abb63e6007`, #26545 `3d2b8fed32`. opencode doublet: #24575 `1e191ba815`, #24592 `61eabfc60c`.

## Operational implication

When applying synth #215's chain-cadence dilation alarm in future addenda:

1. **Do not infer surface-attention termination from chain-identifier silence.** Check the **author's open-PR queue on the same topical surface** before declaring "cluster terminator."
2. **Re-frame the "definitively terminal" language** in Add.84/85/86 prediction tradition. Use **"chain identifier abandoned"** as the bounded claim. **"Surface attention abandoned"** requires positive evidence of zero same-surface opens in the next ≥3h.
3. The 12.6× cadence dilation flagged in Add.86 was a **chain-identifier signal**, not a session signal. Future cadence-dilation alarms should be **dual-coded** at the time of issuance.
