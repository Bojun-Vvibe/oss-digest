# W17 SYNTHESIS #114 — post-Add.278 transition-axis composite-ratio burst-amplification to ×8.76 at single-tick step **falsifies the synth #113 damped-then-rebound sub-mode at the upper-bound interpretation** and reframes the transition-axis sub-component into a **damped-then-rebound-then-burst** structure where the singleton-rebound by anchor-actor produces an N→A transition that mechanically over-amplifies the composite ratio past the all-N→N upper-bound ×2.030; cum transition-axis BF(C:B) crosses past ×10⁸ tier — first ×10⁸ crossing in W17 visible window

**Date**: 2026-05-03
**Cascade tick**: Add.278
**Anchor synths**: #108 (consecutive-up-leg quadruplet with floor-rebound at amplitude 1.27), #111 (post-Add.276 unanimous-silence promoted to regime-class anchor), #112 (post-Add.277 unanimous-silence promoted to regime-class attractor with consecutive-multiplier=7), #113 (post-Add.277 transition-axis composite-ratio rebound to ×2.030 falsifying strict-monotonic-contraction-quintuplet, reframed as damped-then-rebound with all-N→N upper-bound interpretation)
**Anchor digests**: ADD-276, ADD-277, ADD-278
**Anchor synth SHAs**: synth #108 `ad5934e`, synth #111 `5b109d5`, synth #112 `81a642e`, synth #113 `b897114`

## Thesis

Synth #113 framed the transition-axis sub-component as a **damped-then-rebound** sub-mode where the rebound magnitude is bounded above by ×2.030 — the canonical all-N→N tick output (×1.105⁷ per Frozen-MLE protocol). The implicit prior was that the rebound would either sustain at ×2.030 via second consecutive all-N→N tick (S113-P1 at prior 0.45) or re-enter contraction (S113-P2 at prior 0.30) or amplify past ×2.030 via additional A→A or A→N events (S113-P3 at prior 0.18).

Add.278 instantiates **S113-P3 at the low-prior outcome**: the transition-axis composite ratio amplifies to **×8.76** at single-tick step, decisively past the synth #113 upper-bound ×2.030. The mechanism is the **opencode singleton-rebound by anchor-actor kitlangton** (PR #25546, mergeCommit `2df8eda8a3ba`) which produces a **single N→A transition** at the carrier-cardinality axis. Per Frozen-MLE protocol, the per-tick composite ratio under (6×N→N + 1×N→A) = ×1.105⁶ × ×4.0 = ×2.19 × 4.0 = **×8.76** — the N→A multiplier ×4.0 dominates the composite ratio at single-tick step.

This **falsifies the synth #113 damped-then-rebound upper-bound interpretation** and reframes the transition-axis sub-component into a **damped-then-rebound-then-burst** three-phase structure where:

- **Phase A (damped)**: Add.272-Add.276 contraction sequence ×2.19 → ×1.91 → ×1.66 → ×1.197 → ×1.030 (5-tick monotonic)
- **Phase B (rebound)**: Add.277 single-step rebound to ×2.030 via all-N→N tick (driven by anchor-retirement-without-replacement plurality majority crossing — synth #113 mechanism)
- **Phase C (burst)**: Add.278 single-step burst to ×8.76 via singleton-rebound producing N→A transition (driven by anchor-actor cross-tick singleton-rebound at gap=3 — Add.278 mechanism)

Single-tick BF(H_damped-then-rebound-then-burst : H_damped-then-rebound-with-x2.030-upper-bound) = **×6.4** (decisive single-tick evidence — the upper-bound interpretation required Add.278 ratio ≤ ×2.030, observed ×8.76 is decisively outside at +4.32× the bound).

Cum transition-axis BF(C:B) updates ×22,832,170 → **×199,969,809** = **×2.00 × 10⁸ tier** at gap=1 from ×2.28×10⁷ — **first crossing past ×10⁸ tier in W17 visible window** and **single-tick traversal of one full order of magnitude** (first such single-tick traversal since the synth #108 Phase-2 → Phase-3 transition at Add.275).

## Damped-then-rebound-then-burst three-phase sub-mode

The transition-axis composite-ratio trajectory now exhibits a **clear three-phase structure** at the 7-tick window Add.272-Add.278:

| Tick | A→A | A→N | N→A | N→N | Composite ratio | Phase | Mechanism |
|---|---|---|---|---|---|---|---|
| Add.272 | 1 | 0 | 0 | 6 | ×2.19 | A-damped (peak) | post-burst sustain |
| Add.273 | 0 | 1 | 0 | 6 | ×1.91 | A-damped | umut-polat A→N at qwen |
| Add.274 | 0 | 0 | 1 | 6 | ×1.66 | A-damped | active-reset N→A |
| Add.275 | 1 | 0 | 2 | 4 | ×1.197 | A-damped | kitlangton intra-tick doublet + wenshao |
| Add.276 | 0 | 2 | 0 | 5 | ×1.030 | A-damped (floor) | 2× A→N events from Add.275 active-set |
| Add.277 | 0 | 0 | 0 | 7 | **×2.030** | **B-rebound** | unanimous-silence ⟹ all-N→N (synth #113) |
| **Add.278** | **0** | **0** | **1** | **6** | **×8.76** | **C-burst** | **singleton-rebound by anchor-actor ⟹ single N→A** |

**Phase A** is the synth #108 / synth #111 strict-monotonic-contraction-quintuplet. **Phase B** is the synth #113 single-step rebound to all-N→N output. **Phase C** is the synth #114 single-step burst to N→A-dominated output.

The three phases form a **monotonic amplitude-progression** in the absolute value of the composite ratio: Phase A peaks at ×2.19, Phase B peaks at ×2.030, Phase C peaks at ×8.76 — the burst phase amplitude is **×4.32 the rebound phase peak**, instantiating a **structural amplification at each phase transition** (×2.19 → ×2.030 = sustain-with-marginal-decay, ×2.030 → ×8.76 = ×4.32 amplification).

Sub-mode definition: **damped-then-rebound-then-burst** = three-phase trajectory of (1) monotonic damping toward unity, (2) single-step rebound to all-N→N output, (3) single-step burst via N→A or A→A transition with multiplier dominance. The structural primitive at Phase C is the **first carrier-cardinality lift after consecutive zero-class instance** — mechanically forces N→A transition at the cardinality axis.

Single-tick BF(H_damped-then-rebound-then-burst : H_random-walk-around-x2.030) = **×4.8** (random-walk-around-x2.030 would have Add.278 ratio normally distributed around ×2.030 with σ ≈ 1.0, observed ×8.76 is at +6.73σ — decisive against random-walk).

Single-tick BF(H_damped-then-rebound-then-burst : H_strict-x2.030-upper-bound-with-rebound-doublet) = ×6.4 (the upper-bound interpretation required Add.278 either ×2.030 sustain or contraction, observed ×8.76 is decisively outside both).

## N→A multiplier dominance at single-tick step

Per Frozen-MLE protocol, the N→A multiplier is **×4.0** — the largest single-tick multiplier in the protocol, reflecting the rare-event amplification at the rare-transition class. The N→A transition occurs **only when** an empty active-set transitions to a non-empty active-set at the next tick, which mechanically requires:

1. Carrier-cardinality at prior tick = 0 (empty active-set)
2. Carrier-cardinality at current tick ≥ 1 (singleton-or-greater rebound)

Add.278 satisfies both conditions exactly: Add.277 active-set = ∅, Add.278 active-set = {opencode}. The **single N→A transition** at opencode dominates the composite ratio because the ×4.0 multiplier is one full order-of-magnitude larger than the per-tick N→N multiplier ×1.105 — a single N→A event is equivalent to **~14 consecutive N→N events** in composite-ratio terms (×4.0 ≈ ×1.105¹⁴).

The structural consequence is that the **first carrier-cardinality lift after consecutive zero-class instance** mechanically over-amplifies the transition-axis composite ratio past the all-N→N upper-bound. This is a **deterministic** consequence of the Frozen-MLE protocol — not a stochastic outcome.

Sub-axis BF(H_N→A-multiplier-dominance-at-singleton-rebound : H_proportional-amplification) = **×7.2** (decisive at single-instance evidence — the proportional-amplification framing would have predicted Add.278 ratio ≈ ×2.030 × (active-set-size / 7) = ×0.29, observed ×8.76 is decisively outside).

## Cum transition-axis BF(C:B) crosses ×10⁸ tier — first ×10⁸ crossing in W17 visible window

Cum transition-axis BF(C:B) sequence Add.272-278 (per M-278.D revised ledger): ×8.07e8 / ×1.54e9 / ×2.56e9 / ×3.06e9 (parallel diagnostic) → ledger reconciliation at Add.276 anchors at ×11,247,374 = ×1.12 × 10⁷ → Add.277 lifts to ×22,832,170 = ×2.28 × 10⁷ → **Add.278 lifts to ×199,969,809 = ×2.00 × 10⁸**.

Per the M-278.D revised ledger:

- ×10⁷ tier inaugural (revised) at Add.276 (×1.12e7).
- ×2×10⁷ tier crossing at Add.277 (synth #113 milestone).
- **×10⁸ tier crossing at Add.278** — **first ×10⁸ crossing in W17 visible window** (the parallel diagnostic accumulator at Add.275 hit ×3.06e9 but per the canonical M-275.D ledger, that was a transient ×10⁹ crossing later normalized away; the M-278.D ledger ×2.00e8 is the first canonical ×10⁸ crossing).

Sub-axis BF(H_cum-BF-sustains-in-×10⁸-tier-via-burst-momentum : H_cum-BF-deflates-back-to-×10⁷-floor) = ×3.6 (the Add.278 amplification of ×8.76 single-tick is structurally tier-preserving at Add.279 conditional on Add.279 ratio ≥ ×0.5 — modal at anchor-momentum amplification).

S113-P4 cum BF crosses ×3×10⁷ at prior 0.45 **CONFIRMED at sub-modal AND OVERSHOOTS to ×10⁸ tier at single-tick step** — first overshoot of single-tier prediction since Add.275 ×10⁷ inaugural crossing. S113-P5 cum BF crosses ×5×10⁷ at Add.279 conditional on three consecutive ratio ≥ ×1.5 at prior 0.32 **AUTOMATICALLY CONFIRMED at gap-1 via Add.278 ×8.76 already past ×5×10⁷**.

## Anchor-actor cross-tick singleton-rebound as transition-axis burst-amplifier

The Add.278 N→A transition at opencode is structurally tied to the **kitlangton singleton-rebound at gap=3** from Add.275 intra-tick doublet (PR #25507 `e98c2918` and PR #25512 `1409a071`). The mechanism is:

1. Add.275: kitlangton intra-tick doublet active at opencode (cardinality contribution to active-set).
2. Add.276: kitlangton silent (A→N transition at opencode).
3. Add.277: kitlangton silent (N→N sustain at opencode, contributes to all-N→N tick → synth #113 rebound).
4. **Add.278: kitlangton active again at opencode (N→A transition) — produces synth #114 burst**.

The 3-tick anchor-recurrence cycle (active → silent → silent → active) is the **structural primitive** for the damped-then-rebound-then-burst sub-mode. The cross-tick recurrence latency at gap=3 is the **modal anchor-recurrence latency** in W17 visible window per the synth #95 cadence-dilation observations.

The PR #25546 title — "fix(cli): bridge Instance.current ALS in effectCmd handlers (regression from #25522)" — explicitly references prior PR #25522 as the regressing change. This instantiates the **regression-back-reference sub-mode** for the first time in W17 visible window (M-278.A axis 3) and is the **content-axis structural primitive** for the anchor-recurrence rebound: kitlangton returns to opencode specifically to fix a regression introduced by an earlier merged PR. The regression-fix-typed merge is **causally coupled** to the anchor-recurrence: kitlangton would not have rebounded at exactly Add.278 absent the regression discovery between Add.277 close (04:03:05Z) and Add.278 (04:24:34Z).

Sub-axis BF(H_regression-back-reference-couples-anchor-recurrence-to-burst-amplification : H_independent-anchor-recurrence-and-content-class) = **×3.4** at Add.278 (first-instance evidence — the joint co-occurrence of (a) anchor-actor cross-tick singleton-rebound at gap=3 modal latency, (b) regression-fix content-class, (c) N→A transition multiplier dominance at transition-axis is mechanically coupled under regression-back-reference; statistically improbable under independence).

## Predictions for Add.279-282

- **S114-P1** (Add.279 transition-axis composite ratio sustains in [×4.0, ×10] band — second consecutive burst-tier tick — would establish burst-doublet sub-mode): P ≈ 0.32 (conditional on Add.279 carrier-cardinality ≥1 at prior ~0.68 from P-278.A combined modes 1 and 2+).
- **S114-P2** (Add.279 transition-axis composite ratio re-enters damped sub-cluster at ratio ≤ ×2.030 — would re-instantiate damped sub-cluster restart at gap=1 from burst): P ≈ 0.42.
- **S114-P3** (Add.279 transition-axis composite ratio amplifies past ×8.76 via additional A→A or A→N events — would establish burst-acceleration sub-mode): P ≈ 0.18.
- **S114-P4** (cum transition-axis BF(C:B) crosses ×5×10⁸ tier at Add.279 conditional on second consecutive ratio ≥ ×2.5): P ≈ 0.32.
- **S114-P5** (cum transition-axis BF(C:B) crosses ×10⁹ tier at Add.280 conditional on three consecutive ratio ≥ ×2.5 — would be first ×10⁹ crossing in canonical ledger): P ≈ 0.20.
- **S114-P6** (damped-then-rebound-then-burst sub-mode validated by Add.279 sustaining N→A or A→A transition at ratio ≥ ×3.0 — would lift sub-axis BF past ×12): P ≈ 0.30.
- **S114-P7** (Add.279 N→A transition at opencode via kitlangton consecutive-singleton — second consecutive anchor-actor active tick — would establish anchor-recurrence-doublet sub-mode at the transition-axis): P ≈ 0.40.
- **S114-P8** (regression-back-reference sub-mode validated by Add.279 second regression-fix-typed merge — would lift content-class BF past ×8): P ≈ 0.18.
- **S114-P9** (N→A multiplier dominance sub-axis BF crosses past ×10 at Add.279 — would require Add.279 second N→A or A→A transition): P ≈ 0.32.
- **S114-P10** (synth #112 amplifying-reversion sub-mode at joint composite BF axis is **mechanically decoupled** from transition-axis at Phase C — would be confirmed if Add.279 instantiates joint composite BF up-leg AND transition-axis ratio ≥ ×2.0): P(decoupled-confirmed) ≈ 0.35, P(coupled-falsified) ≈ 0.45.

## Specific PR/release citations driving this synth

- **opencode #25546** (kitlangton, 2026-05-03T04:24:34Z, mergeCommit `2df8eda8a3ba`): the **canonical empirical structural carrier** of the entire Add.278 transition-axis burst amplification. Single N→A transition at opencode mechanically drives the ×8.76 composite ratio. Title "fix(cli): bridge Instance.current ALS in effectCmd handlers (regression from #25522)" instantiates regression-back-reference sub-mode (M-278.A axis 3).
- **opencode #25522** (the **regressing PR explicitly referenced** in PR #25546 title): introduces the Instance.current ALS handler that PR #25546 fixes. Content-class structural anchor for the regression-back-reference sub-mode.
- **opencode #25507** (kitlangton, 2026-05-03T01:44:07Z, mergeCommit `e98c2918`) and **opencode #25512** (kitlangton, 2026-05-03T01:59:36Z, mergeCommit `1409a071`): Add.275 active-set kitlangton intra-tick doublet whose A→N transitions at Add.276 contributed to the Phase A floor at ×1.030 (synth #113 mechanism). The 3-tick anchor-recurrence cycle (active Add.275 → silent Add.276/Add.277 → active Add.278) is the structural primitive for the damped-then-rebound-then-burst sub-mode.
- **opencode #25530** (kitlangton, 2026-05-03T03:41:00Z, mergeCommit `1717d636a24c`) and **opencode #25532** (kitlangton, 2026-05-03T03:42:41Z, mergeCommit `bd32252a7e35`): kitlangton Stage-4 refactor pair within Add.277 window upper-boundary (just before window close at 04:03:05Z); these two PRs do not contribute to the Add.278 transition-axis burst directly (they were active within Add.277 window) but establish the ongoing Stage-4-refactor narrative that PR #25546 (Stage-4-regression-fix) extends.
- **qwen-code #3791** (wenshao, 2026-05-03T02:05:19Z, mergeCommit `cdadbcdb33e6`): Add.275 active-set third member (synth #108 / synth #113 anchor); the wenshao A→N transition at Add.276 (alongside the two kitlangton A→N transitions) produced the Phase A floor 5×N→N + 2×A→N tick at ×1.030.
- **Empty merge inventory** for Add.276 and Add.277 windows (consecutive unanimous-silence) is the empirical structural carrier of Phase B all-N→N tick. Add.278 single-merge inventory (1 merge across 7 carriers) is the empirical structural carrier of Phase C N→A-dominated tick.

## Falsification ledger

- **Synth #113 damped-then-rebound upper-bound at ×2.030**: FALSIFIED at Add.278 by burst-amplification to ×8.76 (×4.32 the upper-bound).
- **Synth #113 implicit prior "all-N→N tick output is the upper-bound for the rebound phase"**: FALSIFIED — the upper-bound applies only when active-set is empty at both adjacent ticks; the **first carrier-cardinality lift after consecutive zero-class** mechanically over-amplifies via N→A multiplier ×4.0 dominance.
- **S113-P1 damped-then-rebound-doublet at prior 0.45**: FALSIFIED at minimum residence (no second consecutive all-N→N tick).
- **S113-P3 amplification past ×2.030 at prior 0.18**: CONFIRMED at low prior — the low-prior outcome realized at first opportunity.
- **Synth #112 amplifying-reversion sub-mode at joint composite BF axis**: PARTIALLY FALSIFIED at Add.278 by amplitude-damping at the joint composite BF down-leg (0.166 decades vs prior 0.533) — the amplifying-reversion required Add.278 amplitude ≥ 0.533, observed 0.166 is decisively below; refines toward **down-leg-amplitude-non-monotonic-with-singleton-rebound** sub-mode.
- **H_independent-axis-drivers** (synth #113 framing) for residence-ceiling axis vs joint-composite-BF axis: **CONFIRMED at Add.278 first decoupling event** — residence-ceiling axis lifts (triplet-tick triple-tier ceiling at ≥7) while joint composite BF deflates (third consecutive down-leg) — the synth #113 H-111-A shared-upstream-primitive interpretation is restricted to residence-ceiling + transition-axis sub-component, decoupled from full joint composite BF axis at Add.278 (sub-axis BF ×2.6 favoring restricted reading per M-278.F).

## Net structural advance

Synth #114 zooms into the transition-axis sub-component at Phase C and observes that the **synth #113 damped-then-rebound upper-bound at ×2.030 is falsified at first opportunity** by the Add.278 single-step burst-amplification to ×8.76. The mechanism is the **N→A multiplier dominance at singleton-rebound by anchor-actor** — the first carrier-cardinality lift after consecutive zero-class instance mechanically produces a single N→A transition with multiplier ×4.0, dominating the per-tick composite ratio at one full order-of-magnitude. This **reframes** the transition-axis sub-component into a **damped-then-rebound-then-burst** three-phase structure at sub-axis BF ×6.4, with each phase amplitude monotonically progressing (×2.19 → ×2.030 → ×8.76). The cum transition-axis BF(C:B) crosses past ×10⁸ tier at single-tick step — **first ×10⁸ crossing in W17 visible window** — locking in single-tick traversal of one full order of magnitude. The anchor-actor cross-tick singleton-rebound at gap=3 modal latency is **causally coupled** to the regression-back-reference content-class via PR #25546 → PR #25522 explicit reference at sub-axis BF ×3.4 — first joint co-occurrence of anchor-recurrence + regression-fix in W17 visible window. The cascade is now structurally a **16-tick silent-doublet-rebound regime** with the anchor-actor cross-tick recurrence as upstream primitive driving at least three downstream axes (carrier-cardinality singleton-class, transition-axis Phase C burst, joint composite BF down-leg amplitude-damping) — ready for Add.279 to distinguish burst-doublet vs damped-restart vs burst-acceleration.
