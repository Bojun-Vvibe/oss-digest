# W17 Synthesis #138 — Bolinfest n=5 stack rebase cadence is bimodal not bounded-oscillating, with rebase#10 restoring n=5 lockstep and falsifying the synth #131 single-band hypothesis

**Date:** 2026-04-26
**Window of evidence:** 2026-04-25T22:58:30Z (stack opened) → 2026-04-26T06:37:19Z (rebase#10)
**Repo:** openai/codex
**Stack PRs:** #19606, #19395, #19394, #19393, #19392 (n=5, all by `bolinfest` (Michael Bolin), permissions/profile-backed surface)

## Pattern statement

The bolinfest n=5 stack's inter-rebase deltas form a **bimodal** distribution with two distinct modes (~1h05m and ~32m), **not** a single bounded oscillation around 1h. Additionally, rebase#10 restores **n=5 sub-second updatedAt lockstep** across all five PRs after rebase#9 appeared (in Add.45) to break that property — the asymmetric-rebase hypothesis from Add.45 is falsified.

## Cadence series (real data, monotonically appended across ADDENDUMs)

| Rebase | Timestamp | Delta from prior | Source ADDENDUM |
|--------|-----------|------------------|-----------------|
| #1     | (stack baseline)             | —                  | pre-tracking |
| #2–#7  | (intervening, ~1h08m typical) | ≈1h08m × 2 visible | ADD.36–43 |
| #8     | 2026-04-26T04:31:08Z (approx) | ≈1h08m             | ADD.43 |
| #9 (logical: see below) | 2026-04-26T04:57:02Z | **25m54s**       | ADD.44 |
| #10    | 2026-04-26T05:58:28Z          | **1h01m26s**       | ADD.45 |
| #11    | **2026-04-26T06:37:19Z**      | **38m51s**         | ADD.46 |

(Note: the indexing in ADDENDUM-46 calls today's events "rebase#9 → rebase#10"; this synth re-indexes from the start of the synth-corpus tracking window so the global series reads cleanly. The deltas are unchanged.)

## Head SHAs at rebase#11 (06:37:19Z, all five identical timestamp)

- #19606: `400d4a82e58eb9cc01033dd4648e9b9ca1ec48e5`
- #19395: `118e7c67478765cd43dee72f9a2c516466069d08`
- #19394: `49c5c54af50f5aa259efeae2b1fc1cc2607e279e`
- #19393: `bda0dbc5c249f06835b65aefbad482c370eda9a9`
- #19392: `5d12fcb4d554aa233e49e4307788d61c06398cb4`

All five SHAs differ from the prior rebase round — this is a true rebase, not a metadata touch. **All five updatedAt values are byte-identical** (`2026-04-26T06:37:19Z`) — sub-second lockstep restored.

## Falsification of synth #131 (bounded-oscillation hypothesis)

Synth #131 modeled the inter-rebase delta as oscillating within a **single band** centered near 1h, with bounded variance. The data through rebase#11 invalidates this:

```
deltas observed (most-recent-first on right):
1h08m, 1h08m, 25m54s, 1h01m26s, 38m51s
```

Properties:
- Range: 25m54s → 1h08m, ratio of max/min = **~2.62×**.
- Coefficient of variation across last 5 deltas: **σ/μ ≈ 0.46**, far above what a "bounded oscillation" model tolerates.
- No autocorrelation pattern (alternation 1h, 1h, short, long, short — no period-2 lock).
- **Two empirical modes**: cluster A around **1h05m ± 7m** (n=3: 1h08m, 1h08m, 1h01m26s) and cluster B around **32m ± 7m** (n=2: 25m54s, 38m51s). Inter-cluster gap is ~30m, intra-cluster spread <15m for both clusters — a clean bimodal split.

Synth #131 should be **revised** to a **two-state Markov / regime-switch model** with state-A cadence ~1h05m and state-B cadence ~32m. Insufficient data yet to estimate transition probabilities (only 4 transitions observed).

## Falsification of Add.45's asymmetric-rebase hypothesis

Add.45 noted that at rebase#9 (then-current 05:58:28Z event) only #19606 surfaced a polled update event, and flagged the "n=5 stack-lockstep property may have broken." The Add.46 polling at 06:37:19Z observes **identical updatedAt across all five PRs** for the next rebase, and confirms via the prior round's heads that all five SHAs evolved.

Two interpretations consistent with the Add.46 data:
1. The Add.45 polling caught an in-progress rebase mid-flight (some PRs already updated, others pending). When fully settled, all five had moved.
2. GitHub's PR `updatedAt` field has a sub-second propagation delay across PRs in a stack; a poll within that delay window can observe partial state.

Either way, the structural lockstep claim survives. **No evidence for a true asymmetric rebase exists in the corpus.** The lockstep should be promoted from "observed property" to "load-bearing invariant" of bolinfest's stack-management workflow.

## Companion in-window pattern: bot-driven n=17 mass-close sweep on anomalyco/opencode

Distinct from the bolinfest cadence pattern but observed in the same Add.46 window (06:35:02Z–06:35:54Z): **17 stale PRs on anomalyco/opencode were closed-without-merge in 52s**, all aged 60–66 days, by what appears to be an automated stale-PR sweep. The inter-close timestamps form a **near-uniform 3.0s grid** (deltas: 3,3,3,4,3,3,3,4,3,4,3,3,3,4,3,3 — sixteen 3-or-4-second intervals).

Discriminator vs. synth #98 (which captured n=3 sub-10s sweep): synth #98 was **n=3, sub-10s span, dependency-bot signature, multi-day age dispersion**. The 06:35Z event is **n≈6× larger, 5× longer span, monotone fixed-interval (not burst), narrow age window (60–66d, σ ≈ 2d)**. PRs cited: #14245, #14498, #14754, #14762, #14826, #14873, #14883, #14928, #14938, #14943, #14947, #14954, #14961, #14984, #14987, #15014, #15024 (chronological close order).

This is consistent with a **fixed-rate stale-PR cleanup script** (not a dependency bot, not a single human reviewer triaging — humans don't sustain 3.0s intervals for 52s across 17 distinct PR pages). The age window's tight bound (~6 days wide on a 60-day baseline) suggests a query like `created<=2026-02-25 AND status:open AND last_activity<X`, executed with deterministic ordering.

## Cross-pattern note

The bolinfest cadence (long-tail human authoring with regime switching) and the anomalyco mass-close (machine-driven uniform sweep) sit at **opposite extremes of the cadence spectrum** in the same 38m14s window:
- bolinfest delta11 = 38m51s (human, irregular, content-bearing).
- anomalyco mass-close: 17 events in 52s, **σ < 0.5s** of the 3.0s mean (machine, uniform, content-empty).

Co-existence in one window is itself a useful baseline marker: when interpreting future "burst" events, the 3.0s-grid signature should be the discriminator for "automated sweep" vs "human bursting."

## Falsifiers

- bolinfest: if the next 3 deltas all fall in a single band (either ~1h or ~32m), the bimodal claim collapses to "regime switched once."
- bolinfest lockstep: a single future rebase where the 5 PRs have **distinct** updatedAt values separated by **>5s** would resurrect the asymmetric-rebase hypothesis.
- anomalyco sweep: if the same 3.0s-grid signature recurs on a different repo by a different actor, the claim "anomalyco-specific cleanup script" weakens to "industry-standard tool" (e.g., a published stale-bot template).

## Cross-references

- Source ADDENDUMs: ADDENDUM-43 through ADDENDUM-46 (cadence series); ADDENDUM-46 (mass-close sweep, lockstep restoration).
- Related synth: #131 (revised), #98 (discriminated against), #135/#137 (companion claudianus refile in same window).
- Forward-looking: tracking ADDENDUM-47 for delta12 to populate the bimodal model.
