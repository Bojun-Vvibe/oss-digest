# W17 synthesis #340 — synth #335 bimodal medium-width attractor first mode-flip evidence at Add.153→154 transition (55m+ → 40m mode after 2-tick upper-mode cluster) refines model with alternation-not-streak kinetics + bounds single-mode runs at 2 ticks + 40m-mode dominance 5:3 across Add.146-154 9-tick window

## Claim

The Add.153→154 width transition (58m23s → 41m38s, sha 2187271 → c246e1d) is the **first mode-flip out of the 55m+ upper mode** of the synth #335 bimodal medium-width attractor after a 2-tick same-mode cluster. This **refines** synth #335 P-335.A bimodal restructure model with **alternation-not-streak** kinetics: single-mode runs across the Add.146-154 9-tick observation window are **bounded at 2 ticks**, and the 40m mode is **dominant by 5:3 ratio** (5 ticks at 40m vs 3 ticks at 55m+). The Add.152-153 2-tick upper-mode cluster (synth #335 P-335.A first within-mode cluster evidence) does NOT extend to a 3-tick run, terminating exactly at the 2-tick boundary predicted by the alternation-not-streak refinement.

## Evidence (cited specific ticks + width measurements)

Width sequence Add.146-154 (9 ticks):

| Tick | ADDENDUM sha | Width | Mode | Single-mode run length |
|---|---|---|---|---|
| Add.146 | (per Add.153 sequence) | 44m12s | 40m | run-1 (start) |
| Add.147 | — | 59m24s | 55m+ | run-1 (1 tick) |
| Add.148 | — | 40m56s | 40m (boundary) | run-1 (1 tick) |
| Add.149 | — | 40m10s | 40m | run extends to 2 |
| Add.150 | — | 40m27s | 40m | run extends to 3 (40m mode 3-tick) |
| Add.151 | — | 40m13s | 40m | run extends to 4 (40m mode 4-tick) |
| Add.152 | a47a77c | 57m33s | 55m+ | mode-flip to 55m+, run-1 |
| Add.153 | 2187271 | 58m23s | 55m+ | run extends to 2 (synth #335 first within-mode cluster) |
| Add.154 | c246e1d | 41m38s | 40m | mode-flip to 40m, run-1 (terminates 55m+ run at 2 ticks) |

Cumulative mode-membership tally Add.146-154:
- **40m mode:** 5 ticks {Add.146 44m12s, Add.149 40m10s, Add.150 40m27s, Add.151 40m13s, Add.154 41m38s}, mean **41m20s**, σ=**1m24s**, CV=**3.4%**
- **55m+ mode:** 3 ticks {Add.147 59m24s, Add.152 57m33s, Add.153 58m23s}, mean **58m27s**, σ=**45s**, CV=**1.3%** (Add.148 40m56s sits at boundary, classified to 40m by closer fit)
- **Inter-mode gap:** 41m20s ↔ 58m27s = **17m07s gap**
- **Mode-conditional CV** (3.4% + 1.3%) is **5-15× tighter** than unified CV (~17%) across the same 9 ticks, confirming bimodality.

## Single-mode run-length analysis

| Run | Mode | Tick range | Length |
|---|---|---|---|
| Run-A | 40m | Add.146 (single) | 1 tick |
| Run-B | 55m+ | Add.147 (single) | 1 tick |
| Run-C | 40m | Add.148-151 | 4 ticks (longest 40m run; includes Add.148 boundary tick) |
| Run-D | 55m+ | Add.152-153 | 2 ticks |
| Run-E | 40m | Add.154 (current) | 1 tick (in progress) |

The longest 40m run (Run-C, 4 ticks) was sustained from Add.148-151 before the Add.152 mode-flip. The longest 55m+ run (Run-D, 2 ticks Add.152-153) terminated immediately at 2 ticks. **Asymmetry:** 40m mode supports longer single-mode runs (up to 4 ticks observed) than 55m+ mode (capped at 2 ticks observed). This refinement is consistent with **40m-mode being the attractor-baseline** and **55m+ mode being the perturbation-band** that systems return-to-baseline from.

## Refined model

Synth #335 P-335.A originally posited bimodal attractor with two stable cluster-modes. Synth #340 refines:

1. **Alternation-not-streak kinetics:** Within-mode runs are bounded; the 55m+ mode is bounded at 2 ticks observed, the 40m mode at 4 ticks observed. No 3-tick 55m+ run has occurred; no 5-tick 40m run has occurred.
2. **40m-mode dominance:** 40m mode appears in 5 of 9 ticks (55.6%) vs 55m+ mode in 3 of 9 (33.3%, excluding Add.148 boundary). The 40m mode is the **statistical attractor-baseline**.
3. **55m+ mode is perturbation-class:** 55m+ ticks consistently align with **complex emission events** or **integration-branch-channel events** (per synth #335 original P-335.A) — Add.147 (synth #330 multi-class continuation laboratory tick), Add.152 (litellm Sameerlite #26772 M-152.I integration-branch emission), Add.153 (gemini-cli 11h boundary crossing + opencode 6h boundary crossing, complex dormancy boundary tick).
4. **Mode-flip return-to-baseline:** Both observed 55m+ → 40m mode-flips (Add.147→148 and Add.153→154) returned the width to the 40m attractor-baseline within 1 tick of the perturbation-class run terminating.

## Predictions / falsifiers

- **P-340.A:** Add.155-160 6-tick window has no 3-tick 55m+ run. Falsifier = any 3 consecutive ticks all landing in 55m+ mode.
- **P-340.B:** Add.155-160 6-tick window has no 5-tick 40m run. Falsifier = any 5 consecutive ticks all landing in 40m mode.
- **P-340.C:** 40m-mode dominance sustains at ≥50% mode-share across any 10-tick rolling window through Add.164. Falsifier = any 10-tick rolling window with 40m-mode share <40%.
- **P-340.D:** Each 55m+ mode tick correlates with a complex-emission OR integration-branch-channel OR ULTRA-DEEP-dormancy-boundary event. Falsifier = any 55m+ mode tick with no such concurrent structural event.

## Cross-references

- Predecessor synth notes: synth #329 (medium-width attractor unimodal model), synth #335 (bimodal restructure with 40m + 55m modes, P-335.A), synth #336 (M-152.U ULTRA-DEEP class — anchors P-340.D upper-mode correlation).
- ADDENDUM anchors: Add.146-154 width sequence, with sha anchors at Add.152 (`a47a77c`), Add.153 (`2187271`), Add.154 (`c246e1d`).
- This synth refines synth #335 P-335.A by adding **bounded-run kinetics** that synth #335 did not specify; the alternation-not-streak property is a stronger structural claim than the original within-mode-cluster claim.
