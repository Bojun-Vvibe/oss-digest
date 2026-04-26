# W17 Synthesis #131 — Bolinfest stack inter-rebase cadence falsifies synth #125's monotonic expansion regime at delta7 by contracting back to ~1h, establishing bounded oscillation as the working model

**Window of evidence:** 2026-04-26 ADDENDUM-40 → ADDENDUM-43 (bolinfest stack rebase events #6 at 03:22:26Z, #7 at 04:31:08Z; delta7 = 1h08m42s)

## Source PRs cited

- **bolinfest n=5 stack** on `openai/codex`:
  - **#19606** `permissions: make runtime config profile-backed` — head SHA `8eff69b41c…` (post-rebase#6) → **`848e51c4c6…`** (post-rebase#7, updated 04:31:08Z)
  - **#19395** `permissions: finish profile-backed app surfaces` — head SHA `ccdc08d0ac…` updated 04:31:08Z
  - **#19394** `permissions: remove core legacy policy round trips` — head SHA `ca9d4094ff…` updated 04:31:09Z
  - **#19393** `permissions: migrate approval and sandbox consumers to profiles` — head SHA `5d4ee413bb…` updated 04:31:05Z
  - **#19392** `permissions: derive compatibility policies from profiles` — head SHA `50366952fe…` updated 04:31:05Z
- **All five SHAs changed** in a 4-second envelope (04:31:05Z → 04:31:09Z) — single coordinated `git push --force-with-lease` across the stack, the same mechanical signature documented in synth #117 / #119 / #122 / #123 / #125.
- **Inter-rebase cadence reconstruction** (per synth lineage #117 → #119 → #122 → #123 → #125):
  - delta_n is the time between rebase n and rebase n+1.
  - Synth #122 reported delta1–delta3 as geometric decay (contraction).
  - Synth #123 reported delta4 as an inversion (expansion).
  - Synth #125 reported delta5–delta6 entering "monotonic expansion regime" and predicted delta7 ∈ **[3.4h, 5.0h]** (= 06:42:26Z–08:22:26Z window for rebase#7).
  - **Actual delta7 = 1h08m42s** (rebase#6 03:22:26Z → rebase#7 04:31:08Z), landing inside ADDENDUM-42's window and **2.0h below the lower bound** of synth #125's prediction.

## Pattern

Synth #125 made an aggressive, falsifiable, range-bounded prediction: that the bolinfest stack's inter-rebase intervals would continue expanding monotonically from delta5 through delta7, with delta7 specifically in the [3.4h, 5.0h] band. The prediction was time-boxed (06:42:26Z–08:22:26Z) and cadence-boxed (lower-bounded at 3.4h).

Both bounds are violated by delta7 = 1h08m42s. The actual cadence is:

| Rebase | Time | delta to next | Regime per prior synth |
|--------|------|---------------|------------------------|
| #1–3 | (per #122) | geometric decay | contraction |
| #4 | (per #123) | inversion | expansion onset |
| #5 | (per #125) | expansion | expansion |
| #6 | 03:22:26Z | **1h08m42s** | (#125 predicted: 3.4h–5.0h **expansion**) |
| #7 | 04:31:08Z | unknown | — |

Two competing models survive:

(A) **Bounded oscillation**: delta_n oscillates within a bounded interval (roughly [40min, 1h10min] across delta1–delta7), with the "monotonic expansion" reading of synth #125 being a 2-sample local trend mistaken for a regime. Under this model, delta8 should land in the same envelope (predicted [40m, 1h15m]).

(B) **Mixed-mode**: rebases are dispatched by *content readiness* (changes accumulated upstream that need integration) overlaid on a bounded human-attention floor. Long deltas occur when no upstream changes accumulate; short deltas occur when they do. Under this model delta8 is unpredictable from delta-history alone.

Model (A) is preferred by parsimony at this depth: it requires no exogenous input (upstream commit rate) and matches all 7 observed deltas without parameter adjustment. Model (B) is preferred only if delta8 falls outside [40m, 1h15m] in either direction.

## Why this is non-trivial

Two reasons synth #125 was wrong are worth naming, because they generalize to other multi-sample cadence claims in this digest:

(i) **Two-sample trends are not regimes.** Synth #125 read delta5 → delta6 (both expanding) as "monotonic expansion regime" and extrapolated. Two samples of an oscillating signal can locally appear monotonic in either direction with probability ~0.5. The minimum sample count to claim "regime" should be ≥3 same-direction deltas, and ideally with a magnitude check (each step ≥X% of prior). This addendum's correction of synth #125 should be treated as a methodological lesson for synths #122, #123, #125, and any future cadence-trend claims.

(ii) **The Add.42 reporting miss masked the falsification by ~16 minutes.** ADDENDUM-42 (window 03:59:53Z → 04:35:00Z) explicitly reported the bolinfest stack as quiescent through window close, with head SHA on #19606 unchanged at `8eff69b41c…`. Rebase#7 actually landed at 04:31:08Z (3m52s before window close). The reporting error was a verification gap — the addendum did not re-fetch SHAs at window close, instead carrying forward the early-window observation. The fix is to make end-of-window SHA verification a hard step in the addendum workflow when a long-tail-prediction is pending. This is actionable: synth #125's prediction was specifically about head SHA changes, so end-of-window SHA verification is a direct test of the prediction itself.

## Falsifiable prediction

(P1, primary) **delta8 ∈ [40m, 1h15m]** (bounded oscillation model). If delta8 lands outside this envelope (rebase#8 before 05:11:08Z OR after 05:46:08Z), bounded oscillation is falsified and model (B) becomes the leading hypothesis.

(P2, secondary) **No bolinfest stack PR in #19392–#19606 will merge before rebase#8.** Across 7 rebases the stack has produced zero merges. If a merge lands before rebase#8, the rebase-frequency model is no longer the right framing for the stack's lifecycle (synth #122's anti-correlation hypothesis breaks).

(P3, tertiary, methodological) **Future cadence-regime claims in this digest should require ≥3 same-direction deltas with each step ≥20% of prior.** This is a meta-rule for synth-writing, not a prediction about codex. It is "falsified" if applying this rule to the next 5 cadence-claims (synths #132+) results in a net-worse error rate than the looser standard. (Track via a coda in W17 weekly summary.)

## Cross-reference

- Lineage: #117 (rebase visibility) → #119 (cadence inception) → #122 (geometric decay) → #123 (decay falsified, expansion onset) → #125 (expansion regime + delta7 prediction) → **#131 (expansion falsified, bounded oscillation hypothesis)**.
- Companion: synth #132 (cross-repo instrumentation theme convergence) covers the same ADDENDUM-43 window from a thematic angle disjoint from cadence.
