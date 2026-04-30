# W17 Synthesis #399 — Discharge-recovery-collapse triplet attractor: cohort-zero recurs at 3-tick inter-arrival, falsifying monotone fan-out (M-184.B) and promoting M-185.F closed-loop regime

**Anchor measurement window:** 2026-04-30T11:00:00Z → 11:30:29Z (Add.185 capture); inferences span Add.182-185 cohort-level active-set trajectory.
**Anchor mechanism:** active-set cardinality time series, conditional on a cohort-zero anchor at Add.182.
**Parent synth lineage:** #397 (dual-novel-author co-recovery from cohort-wide zero with cross-repo simultaneity), #393 (M-182.B cohort-wide zero-emission tail event), #394 (M-182.G discharge cascade exhaustion). Refines and partially falsifies M-184.B (monotone fan-out) introduced inside Add.184 §summary.

## The hypothesis (M-185.F)

The active-set cardinality trajectory **between** two cohort-zero events (Add.182, Add.185) follows a **closed triplet** of length 3 ticks: `{0 → 1 → 2 → 0}` where the leading `0` is the anchor zero, the next two ticks are recovery ticks of monotone-increasing cardinality, and the trailing `0` is a re-collapse to cohort-zero. The triplet is **periodic with period ≈3 ticks**, not a one-shot fan-out cascade.

The Add.182-185 observation:
- Add.182: active-set ∅ (cardinality 0) — anchor cohort-zero, M-182.B / M-182.G.
- Add.183: active-set {qwen-code} (cardinality 1) — recovery tick 1, M-183.F novel-author vector (wenshao).
- Add.184: active-set {codex, qwen-code} (cardinality 2) — recovery tick 2, M-184.B monotone fan-out introduced; dual-novel-author (aibrahim-oai, cyphercodes) per #397.
- Add.185: active-set ∅ (cardinality 0) — re-collapse to cohort-zero, M-185.B / M-185.C / M-185.K.

Cardinality sequence over the 4-tick window: `{0, 1, 2, 0}`. Tick-distance from Add.182 zero to Add.185 zero = **3 ticks**. Wall-clock distance ≈ 39m56s + 66m52s + 30m29s = **2h17m17s** = 137.28 min (M-185.E).

## Why this falsifies (rather than refines) M-184.B

M-184.B was introduced in Add.184 §summary as: **"post-cohort-zero recovery is monotonically non-decreasing in active-set cardinality for ≥2 ticks"** with the open-ended ≥2 formulation. Two readings:

1. **Strict monotone-non-decreasing reading**: the sequence `{0, 1, 2, ?}` predicts `? ≥ 2` for monotone-non-decreasing extension. Observed `? = 0`. **Strictly falsified at Add.185.**
2. **Loose ≥2-tick-of-non-decrease reading**: the sequence already had 2 non-decreasing ticks (Add.182→183, Add.183→184). The third tick is unconstrained under the ≥2-tick floor. **Trivially confirmed but vacuous** — the ≥2 lower bound was already met before the prediction window for Add.185 began.

Under reading (1), M-184.B is falsified at the unique observable extension. Under reading (2), M-184.B makes no prediction at Add.185 and is therefore **non-falsifiable in-window** — a worse outcome than direct falsification, since a non-falsifiable hypothesis carries zero information. Synth #399 promotes the **strict reading (1)** as the operative reading and treats M-184.B as **falsified at length 3**.

The replacement hypothesis M-185.F is **stronger** than the loose reading of M-184.B because it specifies (a) the trajectory shape (`{0, 1, 2, 0}`), (b) the period (3 ticks), (c) the closure point (re-collapse, not extension), and (d) a falsifiable prediction at Add.186-188 (next triplet replication).

## Distinguishing M-185.F from M-182.G discharge-cascade-exhaustion

M-182.G (synth #394) framed the cohort-zero as the **terminal event of a single-direction discharge cascade**: the cohort accumulates rebound amplitude (Add.180 amplitude=5 qwen-code, Add.181 amplitude=2 codex) and then exhausts at Add.182. The cascade is **one-directional** (charge → discharge → zero) and one-shot.

M-185.F adds the **mirror-image** structure: post-zero is followed by **re-charge** (cardinality 1 → 2) then **re-discharge** (back to zero). The charge-discharge cycle is **bidirectional and self-perpetuating**. M-182.G is now a **half-period** of the M-185.F full-period cycle.

Implication: the M-182.G cascade-exhaustion mechanism predicts cohort-zeros are **rare events**. M-185.F predicts cohort-zeros are **periodic events** with period ~3 ticks (~2h17m). The two predictions diverge sharply at the next cohort-zero observation.

## Anchor SHAs and PR numbers

- Add.182 anchor zero: cohort-wide ∅ (no merge SHAs).
- Add.183 recovery tick 1: qwen-code PR #3717 by wenshao sha `6efcf2b8` (per Add.184 §qwen-code carrier list and Add.183 §qwen-code).
- Add.184 recovery tick 2: codex PR #20361 by aibrahim-oai sha `8a97f3cf`; qwen-code PR #3753 by cyphercodes sha `0b7a569a`.
- Add.185 re-collapse: cohort-wide ∅ (no merge SHAs).

The four data points fully anchor the triplet attractor with two of three points being **cohort-zero (no SHA)** and one of three being **dual-novel-author** at the trough-to-peak transition.

## Refinement of synth #397 dual-novel-author co-recovery

Synth #397 framed the dual-novel-author (aibrahim-oai + cyphercodes) Add.184 event as a **simultaneous cross-repo recovery from a cohort-wide zero**. Synth #399 sharpens this: the dual-novel-author event is the **peak tick** of a closed triplet, not the start of an open-ended recovery. Both novel authors are **single-emission** carriers (P-184.C and P-184.K both confirmed at Add.185 — neither recurs). NEW corollary: **the dual-novel-author co-recovery vector is structurally a one-shot peak event with no observable sustain.**

This supports a stronger reading of #397's mechanism: novel authors are **introduced precisely at cohort-zero recovery peaks** as single-emission discharge agents. They are not building carrier sets; they are providing one-shot carrier rotation under the M-184.K (qwen-code amplitude-5 carrier-set turnover) and the newly-symmetric M-185.K (codex carrier-set rotation under amplitude-2). The novel-author vector and the triplet attractor are **two faces of the same mechanism**: the cohort discharges via novel-carrier rotation, peaks at length 2, and re-collapses.

## Falsifiable predictions

1. **Triplet replication at Add.186-188**: if active-set cardinality follows `{?, ?, 0}` at Add.186/187/188 with the trailing 0 at Add.188, the triplet attractor replicates n=2 and the period locks at 3 ticks. If the trailing tick is non-zero (extends to length 4+), M-185.F falsifies on first replication.
2. **Wall-clock period replication**: if the Add.185-to-next-cohort-zero wall-clock distance is in [1h45m, 2h45m] (within ±20% of 137 min), M-185.E period estimate replicates at n=2.
3. **Peak cardinality replication**: if the next triplet peak cardinality is in {1, 2, 3} (not >3), M-185.C length-3 cap holds. If peak is 4+, the cap falsifies.
4. **Novel-author at peak**: if the peak tick of the next triplet contains ≥1 novel author (not in any prior carrier set), the novel-author-at-peak corollary replicates. If 0 novel authors at peak, the corollary falsifies on first replication.
5. **Per-repo participation**: if the next triplet's peak-tick repo set differs from {codex, qwen-code} (the Add.184 peak set), the cross-repo carrier-rotation reading strengthens. If it repeats {codex, qwen-code}, the rotation reading weakens and a per-repo-fixed-attractor reading gains support.
6. **Discriminator vs M-182.G one-shot reading**: if the next observed cohort-zero (Add.188 expected per period) is followed by another `{0, 1, 2, 0}` triplet, M-185.F dominates M-182.G. If the next cohort-zero is **not** followed by recovery within 4 ticks, M-182.G one-shot reading dominates and M-185.F falsifies.
7. **Asymmetric peak-cardinality**: if the next triplet shows a peak cardinality ≠ 2 (e.g., peak at 1 or peak at 3), M-185.F generalizes from `{0, 1, 2, 0}` to a family of triplets `{0, k1, k2, 0}` with k1 < k2 free parameters. The strict {0, 1, 2, 0} formulation falsifies but the closed-loop structure may still hold.

## Risk lens

- **Forecast utility**: under M-185.F, the next cohort-zero is forecast at Add.188 with closed-period confidence. This is sharper than the M-182.G one-shot prior, which gives no temporal forecast for cohort-zero recurrence. If the forecast holds, the dispatcher can pre-allocate weekly synth slots around predicted cohort-zero events.
- **Mechanism interpretation**: the closed triplet implies the cohort emission rate is **bounded above** by a structural carrier-availability constraint that exhausts at peak cardinality 2 within ~2h17m. Possible drivers: weekend/off-hours review queue thinning (the wall-clock window 11:00-13:30 UTC is mid-Wednesday US-Pacific morning, not off-hours, so this is not the dominant driver); review-pool size constraint; novel-carrier intro rate constraint per the M-184.F ~16.7% per-emission-tick estimate.
- **Overfitting hazard**: with n=1 triplet observation, the {0, 1, 2, 0} shape is a **single data point** and any extrapolation is point estimate with infinite uncertainty. The synth must not be used as a deterministic dispatcher input. Treat as structural prior; update on Add.186/187/188 outcomes.
- **Anti-correlation with M-180.I opencode silence**: the triplet's peak tick (Add.184) included codex but **not** opencode. Opencode is in 6-of-6 silence per M-185.H. If opencode silence breaks, it would re-anchor a different triplet shape (peak set including opencode). The interaction between per-repo silence horizons and the cohort-level triplet is the next major modeling question.

## References

- M-182.B (cohort-wide zero-emission tail event) — Add.182 §summary, synth #393.
- M-182.G (discharge cascade exhaustion) — Add.182 §summary, synth #394.
- M-183.F (novel-author recovery vector) — Add.183 §qwen-code, generalized in synth #397.
- M-184.B (monotone fan-out, NOW FALSIFIED) — Add.184 §summary.
- M-184.C (novel-author vector generalizes across cohort) — Add.184 §summary.
- M-184.K (qwen-code amplitude-5 carrier-set turnover) — Add.184 §qwen-code.
- M-185.B (cohort-zero recurrent attractor with bounded inter-arrival) — Add.185 §summary.
- M-185.C (fan-out cap at length 3) — Add.185 §summary.
- M-185.D/E (dual cohort-zero inter-arrival observation, ~2h17m) — Add.185 §summary.
- M-185.F (discharge-recovery-collapse triplet attractor, period ~3 ticks) — this synth.
- M-185.K (cyclic {0,1,2,0} active-set trajectory) — Add.185 §per-repo.
- Synth #397 (dual-novel-author co-recovery) — `_weekly/W17-synthesis-397-*.md`.
- Synth #398 (cross-repo amplitude-2 discharge horizon asymmetry) — `_weekly/W17-synthesis-398-*.md` — orthogonal to this synth (per-repo silence vs cohort-level cardinality), interacts at the M-185.H opencode horizon expansion.
