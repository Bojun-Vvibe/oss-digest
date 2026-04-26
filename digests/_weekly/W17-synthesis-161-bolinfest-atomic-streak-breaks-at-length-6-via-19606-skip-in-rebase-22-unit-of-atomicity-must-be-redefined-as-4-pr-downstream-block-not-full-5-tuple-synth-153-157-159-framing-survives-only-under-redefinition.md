# W17 Synthesis #161 — bolinfest atomic-streak BREAKS at length 6 via #19606-skip in rebase#22; the unit of atomicity must be redefined as the 4-PR downstream block, not the full 5-tuple — synth #153/#157/#159 atomic-long framing partially survives only under this redefinition

**Window of evidence:** Add.51–Add.58 (rebase#16 through rebase#22 in the bolinfest stack), with primary anchor on rebase#22 (commit wave 14:14:00Z, observed in Add.58).

**Prior threads being resolved:**
- Synth #153's P-153.A (`atomic same-second behavior is the most durable bolinfest stack property and will extend past length 4`) was confirmed at length 5 in synth #157, length 6 in synth #159 (Add.57's rebase#21).
- Synth #155 introduced the "first-negative-content-delta" framing on #19606 at rebase#19; Add.56 declared it a "single-rebase anomaly"; synth #159 resurrected it as recurring (2 of last 3 rebases on #19606 net-negative through #21).
- Synth #160's P-158.B/C trail (B-A-M-N quadruple, AI-coauthor spread) is **adjacent context only**; this synth focuses on the codex stack mechanics.

**Observation that forces this synth:** At rebase#22 (Add.58), **#19606 did not commit at the same second as #19392/19393/19394/19395**. The four downstream PRs all advanced their head SHA at committedDate `14:14:00Z` (same-second), but **#19606's head remained at `897e6b746b10`** — the SHA from rebase#21 (committedDate 13:54:06Z). The PR's updatedAt did move to 14:14:14Z, but only as a **metadata downstream-propagation** (lag = 14s, within the 13–19s band) of the 4-PR commit-wave that touches #19606's downstream consumers; #19606 itself carried zero new commit traffic in window.

**This is the first non-atomic rebase event in #16–#22.** It directly falsifies the "atomic = full 5-tuple" reading that synths #153, #157, and #159 progressively confirmed.

**The redefinition that survives the data.** Two separable atomicity properties exist in the stack and were previously conflated:

1. **Downstream-block atomicity** (#19392 ↔ #19393 ↔ #19394 ↔ #19395): These four PRs always advance same-second. The property has now held across **seven consecutive rebases** (#16–#22), unbroken even at #22 where #19606 was skipped. Inter-PR commit timestamps within the 4-PR block at #22 were **identical to the second** (14:14:00Z), tighter than the 1–2s spread seen in some earlier rebases.

2. **Root-PR coupling to the downstream block** (#19606 ↔ {#19392…#19395}): This property held for #16–#21 (six consecutive rebases) and **broke at #22**. The mechanism is structurally plausible: **#19606's base is `main`; the four downstream PRs' bases are PR-stack-internal**. A rebase that only updates downstream bases (e.g., to absorb a `main`-side change that already landed on #19606 at #21) would naturally produce the observed pattern — #19606 stays put, the four downstream PRs cascade-update.

**Content-side corroboration.** The diff deltas at #22 are minimal on the downstream block: #19393 lost one deletion (+1 net), #19392 lost one addition (−1 net), #19394/#19395 unchanged. **Cumulative net delta across the four-PR downstream block = 0 lines.** Contrast with #21's −7 net pruning on #19606 (Add.57). The downstream-block changes at #22 are **pure positional churn from the new internal base SHAs**, not authored content edits — exactly what a "downstream-only rebase to absorb a #19606-side merge candidate" would produce. **#19606 is the active edit surface; the four downstream PRs are passive consequence-of-rebase**, a structural conclusion that synths #153/#157/#159 could not surface because the 5-tuple atomicity was masking the asymmetry.

**Inter-rebase cadence implications.** The series 51m24s → 56m18s → 46m07s → 31m57s → 44m18s → **19m54s** (#22) places #22 as the **new series minimum**, beating the prior min of 31m57s by 12m. Combined with the atomicity break, this suggests **bolinfest is converging toward landing #19606 first** (separately rebased, content-pruned across #19/#21) and treating the four downstream PRs as a coupled tail to be rebased in batches whenever #19606's base advances. The 19m54s gap is short enough to suggest a *responsive* rebase (triggered by an external `main` movement) rather than a *scheduled* one.

**Status of P-153.A under the redefinition:**
- **As "full 5-tuple atomicity":** FALSIFIED at length 6.
- **As "4-PR downstream block atomicity":** CONFIRMED at length 7, still extending.

**P-161.A:** Next bolinfest stack rebase event will exhibit either (a) all 5 PRs same-second again — restoring 5-tuple atomicity as the dominant mode and treating #22 as a one-off — or (b) another #19606-skip event, confirming the 4-PR-block-only redefinition as the new steady state. **Test horizon: next 4 rebase events.** Falsification mode: 2 of next 4 rebases are 5-tuple-atomic.

**P-161.B:** Inter-rebase cadence will continue to compress (next rebase < 30m) if the responsive-rebase reading holds; will revert toward the 30–50m band if #22 was a one-off externally-triggered event.

**P-161.C:** #19606 will receive the next stack-internal *content* edit (i.e., a non-rebase commit with non-zero net diff) before any of #19392–#19395 do, confirming the "active edit surface = #19606" structural reading.

**Cross-synth note:** Synth #159's "U-shaped tail" framing for the inter-rebase series is now **falsified by #22's 19m54s** (which extends below the U-shape's prior minimum). The series is **erratic, not U-shaped**, with cadence variance increasing through #22.
