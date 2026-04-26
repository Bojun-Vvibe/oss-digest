# W17 synth #167: Single-window cross-repo cardinality halving via sst/opencode silent-window debut and dual-track cadence-coupling reveal

**Window of observation:** 2026-04-26T16:13:00Z → 16:50:00Z (Add.61).

## Observation

In a single 37-minute window the active-repo cardinality drops from 6 (Add.60) to 3 (Add.61), with three specific structural events co-firing:

1. **sst/opencode total quiescence.** First W17 sst/opencode silent-window since the regime began at Add.55. The Add.60 closed with kitlangton's tail-cascade triplet fully merged (#24485 / #24486 / #24487 at 15:49:11Z / 15:50:27Z / 16:00:03Z) and alfredocristofano's sextet (#24502 / #24503 / #24504 / #24506 / #24507 / #24508) all open. In the Add.61 window, **none of those six open PRs receive any touch**, mortenfc #24471 silent, no maintainer review, no CI churn. Author-write-rate collapses from ~3 opens / 47 minutes (Add.60 alfredocristofano session) to **0 opens / 37 minutes**.
2. **bolinfest dual-track cadence-coupling.** The codex permissions stack (#19606 / #19395 / #19394 / #19393 / #19392) is silent across the entire 37-minute window post-rebase#23 (last touch 16:04:33Z). bolinfest's parallel non-stack track #19683 is **also silent** across the entire window (last touch 16:04:50Z, 17 seconds after rebase#23). Both tracks dormant, same window.
3. **crush + OpenHands drop-out.** crush #2714 (taigrr) and OpenHands #14135 (tofarr), both touched in Add.60, are silent in Add.61.

## Falsification of synth #160 P-160.A's two-track-independence reading

Synth #160's framing of bolinfest's two parallel codex tracks (stack + #19683 test-hardening) treated them as **structurally independent** — each track having its own author-attention budget, each able to fire while the other rests. Add.59 and Add.60 both showed cross-track activity within window. Add.61 **falsifies the independence reading at the dormancy level**: when the stack rests, #19683 also rests in the same 37-minute window. If the tracks were independent, the joint-dormancy probability would compound; observing joint dormancy in the very first dormant-window post-rebase#23 is direct evidence the tracks **share an author-attention budget** rather than executing independently.

## Novel pattern: single-window cardinality halving with same-second-author cause concentration

The active-repo cardinality halving (6 → 3) is not distributed: it is **concentrated on author-driven repos**. Three of the four dropped repos (sst/opencode, crush, OpenHands) all had their Add.60 activity carried by **single-author touches** (alfredocristofano, taigrr, tofarr respectively). The fourth retained repo, qwen-code, has **multi-author touch activity** (yiliang114, shenyankm, wenshao, B-A-M-N, doudouOUC) and survives. This refines synth #150's regime-D "cross-repo author divergence during shared multi-window merge drought" into a sub-regime: **single-author-anchored repos drop out of cardinality first when authors enter dormancy**, while multi-author-anchored repos retain cardinality even during merge droughts.

## Predictions

- **P-167.A:** If bolinfest stack rebase#24 fires within 45 minutes of Add.61 close, the post-#23 gap collapses to ≤90 minutes total (still bounded above by synth #166's record gap). If rebase#24 fires after 45 minutes, **the post-#23 gap becomes the new record**, fully replacing synth #166.B's "rebase#22 was a one-off compression outlier" reading with a "post-90m regime is sustained" reading.
- **P-167.B:** If alfredocristofano's sextet (#24502 / #24503 / #24504 / #24506 / #24507 / #24508) receives ANY touch in Add.62, the silent-window framing here is window-bounded (transient). If the sextet remains fully untouched across Add.61 and Add.62, the framing escalates to **multi-window post-burst silence**, which would put synth #164 D2 framing under fresh test at the 2-window-silence threshold.
- **P-167.C:** If #19683 receives a touch BEFORE the next stack rebase fires, dual-track cadence-coupling is decoupled. If both tracks remain dormant until rebase#24 and #19683 then receives a touch within 5 minutes of rebase#24, the **shared-author-budget model is structurally confirmed**.

## Candidate falsifiers

- alfredocristofano returns in Add.62 with new opens or touches on existing sextet → pure within-window silence, not multi-window regime.
- bolinfest #19683 fires independent of stack rebase → tracks are independent, joint-dormancy in Add.61 was coincidence.
- crush, OpenHands, sst/opencode all simultaneously re-activate in Add.62 → cardinality halving was a stochastic dip, not a regime.
