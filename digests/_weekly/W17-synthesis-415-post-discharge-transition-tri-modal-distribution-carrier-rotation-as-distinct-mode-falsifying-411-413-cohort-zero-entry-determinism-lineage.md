# W17 Synthesis #415 — Post-Discharge Transition Tri-Modal Distribution: Carrier-Rotation as Distinct Mode Falsifying Synth #411 → #413 Cohort-Zero-Entry-Determinism Lineage at Codex → Opencode Add.192-193 Boundary

**Trigger**: ADDENDUM-193 sha=`ef4d530` M-193.C — first directly observed **carrier-rotation event** in W17 (codex Add.192 sole-emit amplitude=1 → opencode Add.193 sole-emit amplitude=4) **without intermediate cohort-zero state**. The post-discharge transition distribution is revealed as **tri-modal-or-richer** (≥3 discrete modes), not bi-modal as implicitly assumed under synth #411 (sha=`20cad94`) and synth #413 (sha=`b89f50c`).

## Lineage and prior framework

Prior W17 synth lineage on cohort-zero / post-discharge transition:

- **Synth #411** (sha=`20cad94`): Post-rupture cohort-amplitude geometric-decay law `5 → 1 → 0` confirmed at n=2; prediction P-411.B placed sojourn-block-2 ≥ 3 ticks at >50%. **Falsified at Add.192** (M-192.A: sojourn-block-2 = 1).
- **Synth #413** (sha=`b89f50c`): Cohort-zero sojourn-distribution revised from geometric-tail to bimodal-or-heavy-tail at observed sojourn-distribution {4, 1} at sample-n=2.
- **Synth #414** (sha=`db7140f`): Codex right-censored geometric discharge-point validation at H=7 → discharge-amplitude=1 (PR #20260); synth #409 (sha=`4764146`) reframe promoted from overshoot-multiplicity to discharge-point-fit at single-tick supporting.

The implicit framework across #411 → #413 → #414 lineage assumed the post-discharge transition was a **two-state Markov process**: after a single-carrier amplitude-1 discharge (e.g., codex Add.192), the cohort transitions to {cohort-zero (silence-resumption), carrier-sustain (same-carrier next-tick emit)} with cohort-zero as the dominant mode at >50% prior. Add.193 falsifies this framework by introducing a **third discrete mode**: **carrier-rotation** — the cohort transitions from one single-carrier emit-state to a different single-carrier emit-state without intermediate cohort-zero.

## The Add.192 → Add.193 carrier-rotation event

- **Add.192 emit-state**: codex amplitude=1 (PR #20260, owenlin0, fix mcp tool truncation in rollouts), all other 5 repos silent. Cardinality-emitting=1, carrier-identity={codex}.
- **Add.193 emit-state**: opencode amplitude=4 (PRs #25115, #25052, #25050, #25049, all kitlangton, testEffect refactor batch), all other 5 repos silent including codex. Cardinality-emitting=1, carrier-identity={opencode}.
- **Transition**: cardinality-trajectory 1 → 1 with **carrier-identity-flip** (codex → opencode). No intermediate cohort-zero observed.

This is the **first directly observed instance** of carrier-rotation in W17 since cohort-zero sojourn-block tracking began at synth #405 (sha — referenced as immediate ancestor of #406 → #408 → #409 H-fit lineage). Prior single-carrier emit ticks were all preceded or followed by cohort-zero ticks, which made the bimodal {cohort-zero, carrier-sustain} framework appear sufficient at n=1 supporting.

## The tri-modal post-discharge transition distribution

Define the post-single-carrier-amplitude-1-discharge transition distribution D_post over a discrete sample space S = {cohort-zero, carrier-sustain, carrier-rotation, multi-carrier-emit}:

- **cohort-zero**: next tick has cohort-amplitude=0 (cardinality-emitting=0).
- **carrier-sustain**: next tick has same single-carrier emitting (cardinality=1, carrier-identity unchanged).
- **carrier-rotation**: next tick has different single-carrier emitting (cardinality=1, carrier-identity flipped).
- **multi-carrier-emit**: next tick has cardinality-emitting ≥ 2 (multiple carriers active simultaneously).

W17 empirical observations at single-anchor n=2 of post-amplitude-1-discharge events:

1. **Add.180 → Add.181** (post-opencode amplitude-1 doublet at Add.180): Add.181 cohort-zero. Mode = cohort-zero.
2. **Add.192 → Add.193** (post-codex amplitude-1 at Add.192): Add.193 carrier-rotation to opencode amplitude-4. Mode = carrier-rotation (with elevated next-tick amplitude).

Empirical sample at n=2: {cohort-zero: 1, carrier-rotation: 1}. Carrier-sustain: 0 observed. Multi-carrier-emit: 0 observed. Two distinct modes at sample-n=2 — falsifies any unimodal prior (cohort-zero-determinism implicit at synth #411 → #413 lineage), confirms tri-modal-or-richer at single-anchor n=2.

## Invariant candidate I-415.A: Post-discharge tri-modal cardinality-conservation

Define I-415.A: at any single-carrier amplitude-1 discharge tick T, the next tick T+1 admits cardinality-emitting ∈ {0, 1, ≥2} with sub-mode distribution at cardinality=1 admitting both carrier-sustain and carrier-rotation as distinct discrete sub-modes.

- **At sample-n=2**: I-415.A holds with empirical mode-fractions {cohort-zero: 0.50, carrier-rotation: 0.50, carrier-sustain: 0.00, multi-carrier: 0.00}.
- **F-415.A falsification rule**: I-415.A falsifies if a post-amplitude-1-discharge tick T+1 violates the cardinality conservation by exhibiting a non-discrete or fractional state (impossible in observed protocol; F-415.A is structurally non-falsifiable at the cardinality-conservation reading; the substantive content is the ≥3-mode distribution at the cardinality-1 sub-band).

## Invariant candidate I-415.B: Carrier-rotation amplitude-asymmetry

Define I-415.B: at any observed carrier-rotation event (single-carrier T → different single-carrier T+1), the amplitude-trajectory admits **asymmetric upward bias** — the post-rotation amplitude tends to exceed the pre-rotation amplitude.

- **Empirical at n=1**: pre-rotation amplitude (codex Add.192) = 1; post-rotation amplitude (opencode Add.193) = 4. Ratio 4/1 = 4.0; difference +3.
- **Sample-n=1 supporting** for upward-asymmetric prior; needs at minimum n=3 to discriminate from sample-noise. Defer to F-415.B falsification rule pending further carrier-rotation observations.

## Invariant candidate I-415.C: Carrier-rotation requires non-overlapping recurrent-author classes

Define I-415.C: carrier-rotation events are gated by **non-overlapping recurrent-author class** between source-carrier and destination-carrier — i.e., the discharging author at T (codex owenlin0) does not contribute to the discharging-author set at T+1 (opencode kitlangton).

- **Empirical at n=1**: owenlin0 ∩ kitlangton = ∅ (disjoint authors); recurrent-author classes per synth #410 (sha=`759c7fd`) are repo-scoped, so cross-repo author overlap at single-tick boundary is structurally rare.
- This invariant is essentially structural (per-repo recurrent-author classes per synth #410 are by construction disjoint at the cross-repo boundary), so I-415.C is **near-tautological** at the synth #410 fit-class level. Promotes to **L-415.1 candidate** at single-anchor n=1 supporting only if a counter-example (cross-repo recurrent-author shared between rotation source and destination) is observed and absent.

## Refined post-discharge transition distribution (revising synth #413)

Synth #413 bimodal-or-heavy-tail framework is extended to a **mixture distribution over post-discharge transition modes**:

P(cohort-zero | post-amplitude-1-discharge) ≈ 0.45 (was implicit ≥0.50 prior at synth #411; revised down at sample-n=2 with one carrier-rotation observation).

P(carrier-rotation | post-amplitude-1-discharge) ≈ 0.30 (new mode introduced; sample-n=1 with single observation; conservative prior).

P(carrier-sustain | post-amplitude-1-discharge) ≈ 0.15 (no W17 observation but theoretically admissible at single-author within-batch continuation).

P(multi-carrier-emit | post-amplitude-1-discharge) ≈ 0.10 (no W17 observation; lowest prior at carrier-rotation regimes; multi-carrier requires cohort-rupture-class amplitudes which are post-rupture-only events).

These are point estimates at single-anchor sample-n=2; large credible intervals on each. The mixture admits all four sub-modes as discrete-positive-probability events at any post-discharge tick.

## Predictions (P-415.X)

- **P-415.A**: Add.194 post-Add.193-quadruplet-discharge transition mode ∈ {cohort-zero, carrier-rotation} at >75% combined (carrier-sustain at <15%, multi-carrier-emit at <10%). Within {cohort-zero, carrier-rotation}: cohort-zero at ~55%, carrier-rotation at ~20%.
- **P-415.B**: I-415.B asymmetric-upward-amplitude-bias at any next observed carrier-rotation event holds at >55% (sample-n=1 supporting; needs second observation to discriminate).
- **P-415.C**: I-415.C non-overlapping recurrent-author class at any next observed carrier-rotation event holds at >85% (near-tautological under synth #410 repo-scoped fit-classes).
- **P-415.D**: First observed **carrier-sustain** event at single-anchor n ≥ 3 of post-amplitude-1-discharge observations triggers W17 synth #418 or later — sample-n threshold for carrier-sustain mode-validation.
- **P-415.E**: Synth #413 cohort-zero sojourn-distribution {4, 1} at sample-n=2 sustains as bimodal-or-heavy-tail prior; sojourn-block-3 entry at next observed cohort-zero event will discriminate at the third sojourn-length observation. P(sojourn-block-3 = 1) > 0.30, P(∈ [2, 4]) > 0.40, P(≥ 5) < 0.20.
- **P-415.F**: M-193.A opencode quadruplet-discharge interpreted under I-415.B asymmetric-upward bias at single-anchor n=1: the **post-rotation amplitude tends to be ≥3 at >40% prior at sample-n=1** (was implicit ≤2 ceiling at synth #410 widened-band [4h, 12h] horizon-prediction; revised upward at the amplitude-band).

## Falsification rules

- **F-415.1**: I-415.A falsifies if observed sample admits a non-tri-modal-or-richer distribution at the cardinality-1 post-discharge sub-band — but this is structurally near-impossible given the existence of carrier-rotation event at Add.192-193.
- **F-415.2**: P-415.A falsifies if Add.194 transitions to neither cohort-zero nor carrier-rotation (i.e., observed carrier-sustain or multi-carrier-emit at single-tick), at single-tick supporting against the >75% combined prior.
- **F-415.3**: I-415.B falsifies if next observed carrier-rotation event has post-rotation amplitude < pre-rotation amplitude — single counter-example terminates the asymmetric-upward bias prior at single-anchor n=2.
- **F-415.4**: I-415.C falsifies if next observed carrier-rotation event admits cross-repo recurrent-author overlap — single counter-example reframes the carrier-rotation gating from author-class-disjoint to author-class-permissive.

## Anchor citations

- **ADDENDUM-193** sha=`ef4d530` (M-193.A opencode quadruplet discharge; M-193.C carrier-rotation; M-193.F single-author batch motif).
- **ADDENDUM-192** sha=`f75a52c` (M-192.A sojourn-block-2 termination at n=1; M-192.B codex H=7 discharge; goose anomaly).
- **W17 synth #414** sha=`db7140f` (codex right-censored geometric discharge-point validation).
- **W17 synth #413** sha=`b89f50c` (cohort-zero sojourn-distribution bimodal-or-heavy-tail revision).
- **W17 synth #412** sha=`a5e5a1e` (fit-class entropy bifurcation; H_emitting bimodal {0, 1.000} bits).
- **W17 synth #411** sha=`20cad94` (post-rupture cohort-amplitude geometric-decay; sojourn-cap-informative-prior, falsified at Add.192).
- **W17 synth #410** sha=`759c7fd` (per-repo silence-horizon fit-class divergence; recurrent-author class definition).
- **W17 synth #409** sha=`4764146` (codex H-fit linear lineage terminally invalidated; right-censored geometric reframe).

## Disposition

Synth #415 **promotes** the carrier-rotation mode from "novel observation at Add.193" to "discrete-mode in tri-modal post-discharge transition distribution at single-anchor n=1 supporting"; **revises** synth #413 cohort-zero entry-prior from implicit ≥0.50 to point estimate ≈0.45 with redistributed mass to carrier-rotation (~0.30); **promotes** I-415.A (tri-modal cardinality-conservation) and I-415.B (carrier-rotation amplitude-asymmetry-upward) and I-415.C (recurrent-author-class-disjoint) as candidate invariants at single-anchor n=1 supporting; **defers** L-415.1 promotion (carrier-rotation as conservation-law-class invariant) pending sample-n ≥ 3 supporting at Add.194 → Add.196 horizon.
