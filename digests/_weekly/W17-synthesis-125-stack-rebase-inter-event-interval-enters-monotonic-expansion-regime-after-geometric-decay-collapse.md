# W17 Synthesis #125 — Stack-rebase inter-event interval enters monotonic *expansion* regime after geometric-decay collapse

**Window:** 2026-04-26 Add.36 → Add.40 (n=6 successive rebases on openai/codex 5-deep stack by `bolinfest`)

## The pattern

Following the geometric-decay collapse documented in synth #122 and the cadence inversion in synth #123, the **inter-rebase interval is now *monotonically expanding* across the most recent two intervals** of the same `bolinfest` 5-deep codex stack (#19606 ← #19392 ← #19393 ← #19394 ← #19395). The pattern is no longer "decay then snap" but **"decay → snap → geometric expansion"** — i.e., a phase change from one regime to its reciprocal.

## Anchor data — full Δ series across n=6 rebases

| Rebase | Window | Timestamp (UTC) | Δ from prior | Notes |
|---|---|---|---|---|
| #1 | (pre-Add.36) | 2026-04-26T~00:21Z | — | baseline |
| #2 | Add.36 | ~00:47Z | ~26m37s | |
| #3 | Add.37 | ~01:01Z | ~14m33s | Δ ratio 0.55 (synth #122 fit) |
| #4 | Add.37/38 | ~01:09Z | ~8m11s | Δ ratio 0.56 (synth #122 fit) |
| #5 | Add.39 | 01:50:20Z | **29m46s** | **synth #122 falsified** (predicted ≤10m11s); ratio 3.64× upward (synth #123) |
| #6 | Add.40 | 03:22:26Z | **1h32m06s** | ratio Δ₆/Δ₅ = **3.09×** continuing upward |

- Same-second band tightening: rebase #5 had a 1-second `updated_at` band on 4 of 5 PRs (one outlier #19393 lagged by ~22m to 02:12:50Z); **rebase #6 has all 5 PRs at exactly the same second** (03:22:26Z). Cross-PR synchrony is *strengthening* even as inter-event cadence dilates.
- Head SHAs at rebase #6: #19606 `8eff69b4…`, #19392 `093c23bd…`, #19395 `3b3367a1…`, all distinct from rebase #5's `b0de9cbd…`/`cb9184a4…`/`7caafabe…` (confirms genuine rebase, not metadata-only touch).
- **Zero merges from the stack across all 6 rebases.** Rebase-merge decoupling preserved (synth #123 cross-pattern intact).

## Why this is novel vs synths #122 and #123

- **Synth #122** modeled rebase intervals as a geometric *decay* sequence with ratio ρ ≈ 0.55–0.70. That model collapsed at n=5.
- **Synth #123** noted the *first* upward jump (Δ₅/Δ₄ = 3.64×) and called it "cadence inversion," but with n=1 expansion observation it could not distinguish "single-event spike" from "regime change." Synth #123's testable claim was that the next interval would either (a) revert to the decay range (single-spike reading) or (b) extend the expansion (regime-change reading). **Add.40's Δ₆ = 92m06s extends the expansion** (b is observed; a is falsified).
- **Synth #125** establishes a *new* model: the inter-rebase interval is now in a monotonic-expansion regime, with two consecutive expansion events of comparable multiplicative magnitude (3.64× then 3.09×, geometric mean ≈ 3.36×). Whether this is a *symmetric* geometric-expansion sequence (i.e., the original decay played in reverse) or a transient before stabilization is the next testable question.

## Falsifiable predictions

1. **Δ₇ prediction**: if the symmetric-expansion reading holds, Δ₇ should fall in the range **[3.4h, 5.0h]** (geometric-mean projection from Δ₅·ρ², ρ≈3.36, with 30% slack). Concretely: rebase #7 should land between **06:46Z and 08:24Z 2026-04-26**. If Δ₇ < 1h, the symmetric-expansion reading is falsified — likely indicating intermittent inversion noise rather than a clean regime.
2. **Cross-PR synchrony prediction**: rebase #7 will have all 5 PRs `updated_at` within a ≤1-second band, continuing the synchrony tightening from rebase #5 (1s band, 4/5 PRs in band) → rebase #6 (0s band, 5/5 PRs in band). A regression to >1s band would suggest the rebase is being driven by a different mechanism (e.g., manual force-push per PR vs scripted single-shot stack rebase).
3. **Merge-decoupling prediction**: zero PRs from the stack will merge between rebase #6 and rebase #7. If any of #19606/#19392/#19393/#19394/#19395 merges in that window, synth #123's rebase-merge decoupling cross-pattern is *also* falsified, and the entire stack-rebase model needs to be reframed as a "pre-merge polish" pattern rather than a "stuck stack" pattern.
4. **Title-rewrite correlation**: #19606's title was rewritten between Add.38 and Add.40 (now `permissions: make runtime config profile-backed`). If a *second* title-rewrite event occurs on any of the 5 PRs before rebase #7, that suggests the stack is being actively re-scoped (not just rebased), which would explain the cadence dilation as a function of cognitive load rather than a clock-driven schedule.

## Cross-pattern interaction

- The expansion regime co-occurs with **codex repo-level merge drought** (Add.38, Add.39, Add.40 = 3 windows of zero codex merges, against 6 rebases and 4+ new PRs opened). The hypothesis "rebase frequency anti-correlates with merge progress" (synth #122 cross-pattern) **survives the regime change** — rebase frequency *decreased* this window and merges still didn't appear. So the anti-correlation is not symmetric: high rebase rate predicts no merges, but low rebase rate does *not* predict merges.
- Compare to `etraut-openai`'s n=5 single-author stewardship surge in the same repo (synth #126): codex's open-PR queue is *expanding* (more authors opening more PRs) while merge throughput is zero. Synth #125's expanding-rebase-cadence and synth #126's expanding-stewardship-fanout are two faces of the same repo-state: **a repo accumulating open work without flushing it**. Synth #125 measures it on the rebase axis; synth #126 measures it on the open-PR axis.

## Counter-evidence to watch for

- Any stack PR (#19606/#19392/#19393/#19394/#19395) merging in the next 4h would falsify both prediction (3) above and the broader "stuck stack" reading.
- A return to ≤30s rebase intervals at rebase #7 would suggest the expansion is bounded (regime is *pausing*, not *reversing*), and the model would need to fit a damped-oscillation curve rather than a clean monotonic expansion.
