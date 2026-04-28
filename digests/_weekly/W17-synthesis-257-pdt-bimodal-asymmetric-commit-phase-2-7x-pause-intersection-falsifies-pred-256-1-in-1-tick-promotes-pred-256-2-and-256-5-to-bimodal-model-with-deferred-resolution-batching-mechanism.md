# W17 Synthesis #257 — **PDT-spike asymmetry**: the commit-phase tick (Add.110, PDT=8.0) is **2.7× larger** than the pause-intersection tick (Add.109, PDT=3.0), demonstrating that synth #256's PDT metric was **introduced too symmetrically** — predicate-resolution clusters concentrate on commit-phase transitions disproportionately, **falsifying Pred 256-1 (PDT bounded in [0.3, 1.5]) in 1 tick** and refining the synth #256 metric into an asymmetric two-mode distribution (low-PDT pause-intersection vs high-PDT commit-resumption); promotes Pred 256-5 in extended form

**Status:** REFINES synth #256 (Add.109) by demonstrating that the PDT metric introduced in synth #256 was **too symmetric in its baseline assumption** — synth #256 implicitly assumed PDT spikes would all be in the same magnitude class as the Add.109 PDT=3.0 founding observation, but Add.110 produced a PDT=8.0 spike (2.7× larger) on a commit-phase transition rather than a pause-intersection. Synth #257 RETRACTS Pred 256-1's symmetric-band framing and PROMOTES Pred 256-2 / 256-5 to a refined **bimodal-PDT model**.

**Anchor addendum:** ADDENDUM-110 (capture 04:00Z 2026-04-28).
**Builds on:** synth #244 (transient bursts), synth #249 (deferred-batch), synth #251 (cross-repo regime), synth #252 (fluid stratification), synth #254 (fluid + deferred-batch), synth #255 (deferred-batch canonical with QA-phase/commit-phase), synth #256 (PDT metric introduction).
**Direct retract:** synth #256's Pred 256-1 (PDT bounded in [0.3, 1.5]).
**Direct promote:** synth #256's Pred 256-2 (PDT spikes coincide with state-transitions) and Pred 256-5 (codex commit-phase produces PDT spike) to bimodal asymmetric form.
**Cited prior synths by # and SHA:** synth #256 (sha=f7b10f0), synth #255 (sha=bef17b9), synth #254 (sha=242b80e), synth #253 (sha=94cc6c5), synth #251 (sha=d6a9548), synth #249 (sha=3a0ef0e).

## The empirical anchor: 2-tick PDT comparison

| Tick | Tick character | PDT | Resolutions | Cross-repo merges |
|---|---|---|---|---|
| Add.109 (sha=d9afee9) | Pause-intersection (cross-repo zero-merge) | **3.0** | Pred FF falsified, Pred GG passes, Pred DD confirms | 0 |
| Add.110 | Commit-phase resumption (3 cross-repo merges) | **8.0** | Pred A''''' falsified, Pred CC falsified, Pred V falsified, Pred AA falsified, Pred 254-NEW2 falsified, Pred LL confirmed, Pred HH partial-resolved, Pred 256-5 passes (plus Pred 256-1 falsified, Pred 255-2 passes) | 3 (codex 2 + litellm 1) |

**Add.110's PDT = 8.0 is 2.7× Add.109's PDT = 3.0**, which itself was a 6× spike over the Add.103-Add.108 baseline of ≈0.5. Add.110's PDT is therefore **≈19× the baseline** and **≈5× any prior single-tick observation in the W17 corpus** — a categorically distinct event class.

Synth #256's Pred 256-1 framed PDT as bounded in [0.3, 1.5] over an 8-tick rolling window, with falsifier "≥2 of next 8 ticks PDT ≥2.5". **Add.110 met this falsifier in the first observation tick after synth #256's introduction**, with PDT=8.0 (Add.109) and PDT=8.0 (Add.110) both ≥2.5. **Pred 256-1 is empirically falsified in 1 tick.** This is itself a methodologically interesting failure: synth #256 was introduced at Add.109 close, with PDT=3.0 as the founding data point; the framing of "PDT bounded in [0.3, 1.5]" implicitly extrapolated from the Add.103-Add.108 baseline rather than from the Add.109 founding observation. **Synth #256 set its own predicted ceiling lower than its own anchor data point** — a methodological miscalibration that synth #257 corrects.

## The bimodal PDT model

Synth #257's central claim: **PDT distribution is bimodal**, with two distinct attractors:

1. **Low-PDT mode (baseline ticks):** PDT in [0, 1.5], characterized by 0-1 predicate resolutions per tick during stable QA-phase or commit-phase windows. This is the Add.103-Add.108 baseline distribution.

2. **High-PDT mode (state-transition ticks):** PDT in [3, 10+], characterized by 3-10 simultaneous predicate resolutions during phase-transition events (pause-intersection, commit-phase resumption, deep-cohort composition rotation). This is the Add.109 + Add.110 emerging distribution.

The two modes are **distinguished by the underlying corpus-state event**: stable-state ticks remain in the low-PDT mode; state-transition ticks jump to the high-PDT mode. **There is no observed transition zone** — the W17 corpus shows PDT=0, 1, 1.5 (low mode) or PDT=3, 8 (high mode) with no observations in [1.5, 3]. The bimodal structure is a stronger claim than synth #256's unimodal-with-spikes framing.

**Asymmetry within the high-PDT mode:** the commit-phase transition (Add.110, PDT=8) produces **>2× the PDT of the pause-intersection transition (Add.109, PDT=3)**. The mechanism for this asymmetry under synth #255's QA-phase / commit-phase model:

- **Pause-intersection ticks** resolve predicates whose deadlines happen to coincide with the cross-repo zero-merge intersection event. These are predicates that **test pause-related hypotheses** (e.g., Pred FF testing kitlangton sustained-burst — falsified BY pause; Pred DD testing codex 2h crossing — confirmed BY pause).
- **Commit-phase ticks** resolve predicates whose deadlines happen to coincide with the resumption event AND additional predicates that were **carry-pending during the pause but resolve as commit fires**. These include cross-repo predicates (CC, V, AA), per-repo presence-signaling predicates (HH), and burst-PR cluster predicates (255-1, 256-5). The commit-phase tick acts as a **deferred-resolution batch** — multiple predicates that were waiting for some action (merge, refile, pause-extension) get their action simultaneously when commit-phase fires.

**This is structurally analogous to synth #255's deferred-batch model applied to the predicate-system rather than the merge-system.** Synth #255 framed deferred-batch as the merge-flow regime; synth #257 frames the same dynamics at the **predicate-resolution flow** level, with commit-phase ticks producing **deferred-resolution batches** of predicates whose deadlines accumulated during the QA-phase.

## Replication evidence

The bimodal PDT claim rests on 2 empirical observations (Add.109, Add.110) plus the 6-tick baseline (Add.103-Add.108). **N=2 high-PDT observations is below the synth #256 Pred 256-3 ≥3-tick discipline introduced as a methodological gate.** Synth #257 therefore **explicitly downgrades its bimodal-PDT claim to candidate-status** pending ≥1 additional high-PDT observation in Add.111-Add.116. **This self-application of Pred 256-3's discipline is itself a synth #257 methodological contribution**: regime promotion gating applies even when the regime is being introduced by a synth that benefits from prompt promotion.

The asymmetry-within-high-PDT-mode claim (commit > pause) rests on N=1 paired-comparison (Add.109 pause vs Add.110 commit). **N=1 paired-comparison is sub-threshold for any structural claim** — synth #257 acknowledges this and frames the asymmetry as **observational rather than predictive**. Pred 257-2 (NEW) below provides the operational test that converts the observation into a falsifiable prediction.

## Refining and refuting prior synths

- **Synth #256 (PDT metric introduction)** — REFINED. The PDT metric concept survives; the Pred 256-1 specific framing falsifies. Synth #256's Pred 256-2 (PDT spikes coincide with state-transitions) and Pred 256-5 (commit-phase PDT ≥2) PROMOTE to the bimodal model. Pred 256-3 (regime-promotion ≥3-tick gating) is RAISED to a higher-priority discipline given synth #256's own miscalibration.
- **Synth #255 (deferred-batch canonical)** — STRENGTHENED. Synth #257's bimodal PDT model is the predicate-system analog of synth #255's QA-phase / commit-phase merge-system model. The two models reinforce each other: predicate-resolution batches AND merge-flow batches are both deferred-and-released together at commit-phase transitions.
- **Synth #254 (fluid stratification)** — preserved as the snapshot framing. Synth #257 adds that **state-transition ticks produce both stratification crossings (synth #254 metric) AND PDT spikes (synth #257 metric)**, suggesting the two metrics are coupled. **Sub-prediction: ticks with ≥3 stratification crossings should also have PDT ≥3.** Add.109 had 3 crossings + PDT=3 (consistent); Add.110 had 4 crossings + PDT=8 (consistent with the coupling, asymmetric in magnitude). Carry as Pred 257-3.
- **Synth #251 (cross-repo regime — promoted)** — preserved. Synth #257 notes that cross-repo regime-promotions THEMSELVES contribute to PDT (each promotion is a predicate resolution). Add.110's bolinfest #19899/#19900 doublet receiving a 2nd same-second metadata-touch is a **synth #251 sub-pattern strengthening event** that contributed to neither Add.109's nor Add.110's PDT count (because no specific predicate resolution was tied to the 2nd touch) — a candidate for future predicate framing.
- **Synth #253 (kitlangton metronome)** — STAYS DOWNGRADED at synth #255/256 status. Pred 255-5 (kitlangton resumes by Add.111) is on the falsifier-edge with 0 merges in Add.109 + Add.110. **If Pred 255-5 falsifies at Add.111, synth #253 is fully retracted, contributing to Add.111's PDT.** This is a synth-#257-predicted PDT contribution: **synth #257's bimodal model implies Add.111 is set up to be either another high-PDT tick (Pred 255-5 falsifies, multiple deadline-converging predicates resolve) or a low-PDT tick (Pred 255-5 confirms, kitlangton resumes, no predicate-cascade)**. The Add.111 PDT outcome is a direct test of the bimodal model's predictive value.

## Operational predicates from synth #257

**Pred 257-1 (PDT bimodal distribution: no observations in [1.5, 3.0]):** across Add.109-Add.116 (8 ticks), no tick has PDT in the [1.5, 3.0] gap zone. All ticks fall in either [0, 1.5] (low mode) or [3, 12] (high mode). Falsifier: ≥1 tick in Add.109-Add.116 has PDT in [1.5, 3.0]. Tests whether the bimodal model is empirically supported beyond the founding 2 observations.

**Pred 257-2 (commit-phase ticks have higher PDT than pause-intersection ticks):** across the next 4 paired pause-intersection / commit-phase tick pairs in Add.109-Add.116, the commit-phase PDT is ≥1.5× the immediately-preceding pause-intersection PDT in ≥3 of 4 pairs. Falsifier: commit-phase PDT < 1.5× preceding pause-intersection PDT in ≥2 of 4 pairs. Operationalizes the asymmetry-within-high-mode observation from N=1 to N=4.

**Pred 257-3 (PDT-and-stratification-crossing coupling):** across Add.109-Add.116 (8 ticks), Pearson r between (per-tick stratification-crossing count, per-tick PDT) is ≥+0.50. Tests the synth #257 cross-metric coupling claim. Falsifier: r < +0.20 (essentially uncoupled) or r < 0 (anti-coupled).

**Pred 257-4 (deferred-resolution-batch mechanism replicates):** of the next 5 high-PDT ticks (PDT ≥3), ≥3 are commit-phase ticks (cross-repo merges ≥2 in window) and ≤1 is a pause-intersection tick (cross-repo merges = 0). Tests whether the PDT distribution is structurally biased toward commit-phase. Falsifier: equal split (≥2 of 5 high-PDT ticks are pause-intersection).

**Pred 257-5 (high-PDT mode upper bound 12):** across Add.109-Add.116, no tick exceeds PDT=12. Tests whether the high-PDT mode has a structural upper bound from the carry-active predicate count (currently ~25). Falsifier: ≥1 tick with PDT >12. (At carry-active count ~25, an upper-bound resolution event would resolve all 25 simultaneously, an event so rare it would itself be a regime-event worth synth-promotion. PDT=12 is half of 25, a more plausible upper bound for batch-class events.)

## Distinguishing from prior synths

- **vs synth #244 (transient bursts):** synth #244 modeled bursts as transient phenomena at the merge-rate scale. Synth #257 introduces a parallel concept at the predicate-resolution-rate scale with the additional bimodal claim absent in synth #244.
- **vs synth #246 (cross-repo synchronous merge-pause — retracted):** synth #257 explicitly STAYS RETRACTED on the synchronization claim; the predicate-resolution coupling is **deadline-driven** (multiple predicates' deadlines fall on the same tick by accident-of-history), not **mechanism-coupled** (predicates do not cause each other to resolve).
- **vs synth #251 (cross-repo regime — promoted):** synth #257 contributes the **measurement methodology** for tracking whether cross-repo regime promotions cluster on the same tick (as Add.107's synth #251 promotion did) vs distribute uniformly. The Add.110 synth #251 sub-pattern strengthening (bolinfest doublet 2nd same-second touch) is an example of cross-repo regime-related observation that did not contribute to Add.110 PDT — suggesting future predicate framing should explicitly track regime-strengthening events.
- **vs synth #255 (deferred-batch canonical):** synth #255 is the merge-flow model. Synth #257 is the predicate-flow model. They are mechanistically parallel and mutually reinforcing — both describe deferred-and-released batch-flow dynamics, but at different system levels (merges vs predicate resolutions).
- **vs synth #256 (PDT introduction):** synth #257 directly refines synth #256 by replacing the unimodal-with-spikes framing with a bimodal asymmetric framing. The PDT metric concept is preserved; its distributional model is corrected.

## Methodological consequence

Synth #257 demonstrates a **synth-introduction failure mode**: synth #256 introduced a metric (PDT) and a quantitative prediction (Pred 256-1's [0.3, 1.5] band) **based on a baseline distribution rather than the founding observation**. The Add.109 PDT=3.0 founding observation was **already 2× the upper band** of synth #256's own prediction. **Pred 256-1 was structurally pre-falsified by its own founding data point** but framed without acknowledging this.

**Synth #257 corrects this by:**
1. Treating the founding observations (Add.109 PDT=3, Add.110 PDT=8) as the **anchor for the high-mode**, with the Add.103-Add.108 baseline as the **anchor for the low-mode**.
2. Framing the model as **bimodal** rather than unimodal-with-spikes.
3. Self-applying Pred 256-3's ≥3-tick discipline by downgrading its own bimodal-claim to candidate-status pending Pred 257-1 verification.
4. Providing falsifiable operational predicates (Pred 257-1 through 257-5) that test the bimodal model rather than retroactively justifying it.

**Detector implication:** PDT alerts should be tiered, not uniform. Tier-1 alert on PDT ≥3 (state-transition candidate). Tier-2 alert on PDT ≥6 (commit-phase candidate, with cross-repo merge count expected to be ≥2). Tier-3 alert on PDT ≥10 (anomalous super-batch event, worth manual review). Add.109 would have triggered Tier-1; Add.110 would have triggered Tier-2.

## Capture close

Synth #257 refines synth #256's PDT metric into a **bimodal asymmetric distribution model** with low-mode (baseline ticks, PDT in [0, 1.5]) and high-mode (state-transition ticks, PDT in [3, 12+]). The Add.110 commit-phase tick (PDT=8.0) demonstrates that commit-phase transitions produce **2.7× the PDT of pause-intersection transitions** (Add.109 PDT=3.0), an asymmetry that synth #257 explains as **deferred-resolution batching** parallel to synth #255's deferred-merge batching. Pred 256-1 is empirically falsified in 1 tick; Pred 256-2 and 256-5 promote to the bimodal model. Synth #257 self-downgrades its own bimodal claim to candidate-status pending ≥1 additional high-PDT observation (Pred 257-1), demonstrating the new ≥3-tick gating discipline applies even to synth-introducing observations.

The next decisive observations will be:
- **Add.111:** test of Pred 257-1 (no PDT in [1.5, 3.0] gap), Pred 255-5 (kitlangton resumption) and Pred 254-5 (codex burst-merge cluster). Pred 255-5 falsification would itself be a high-PDT contribution (synth #253 full retraction + multiple deadline convergences); Pred 255-5 confirmation would be a low-PDT tick.
- **Add.112:** test of Pred 254-4 (deep cohort resolution) and Pred LL' (goose 5-tick zero-activity attractor extension).
- **Add.113:** test of Pred FF', GG', II', KK, MM deadlines — multiple resolutions converge here, predicting another high-PDT spike (Pred 257-1 / 257-2 / 257-4 test).
- **Add.116:** Pred 257-1 8-tick rolling-PDT bimodal evaluation; Pred 257-3 stratification-crossing-PDT correlation evaluation.

If Pred 257-1 confirms (no PDT in [1.5, 3.0] across Add.109-Add.116), the bimodal-PDT model graduates from W17 candidate to a **first-class corpus diagnostic** alongside per-repo merge throughput, cross-repo crossing rate (synth #254), and stratification-crossing count (synth #252). If Pred 257-1 falsifies (any tick with PDT in [1.5, 3.0]), the bimodal claim retracts to a **continuous-with-bias model** (PDT distributed continuously but biased toward state-transition ticks), which is a weaker claim than bimodal but still preserves Pred 257-2 and 257-4.
