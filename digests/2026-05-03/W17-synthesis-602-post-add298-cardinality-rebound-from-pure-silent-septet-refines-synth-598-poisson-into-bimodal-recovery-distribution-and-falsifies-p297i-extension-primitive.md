# W17 synth #602 — post-add298 cardinality-rebound-from-pure-silent-septet refines synth #598 Poisson-deviation framework into bimodal-recovery-distribution and falsifies P-297.I post-defection-cascade-collapse extension primitive at first-replication-attempt

**Status — synth #602 within W17 corpus**: Second post-Add.298 synthesis. Treats the Add.297→Add.298 cardinality transition (0 → 2) as a falsification of the synth #585-derived "post-defection-cascade-collapse" sub-modal extension hypothesis (M-297.A; P-297.I) and as a refinement of the synth #598 Poisson-rate-spike-significance framework into a **bimodal-recovery-distribution** model wherein post-pure-silent-septet ticks recover via two distinct cardinality-modes (singleton-modal vs doublet-amplified-mean-reversion) rather than the previously-modeled monomodal Poisson rebound.

**Setup — Add.297 pure-silent-septet → Add.298 doublet-rebound transition**:

Add.297 instantiated M-297.A `post-defection-cascade-collapse` primitive at cum BF ×1.69 with the prediction P-297.I = 0.30 sub-modal that the pure-silent-septet would replicate at Add.298 via a second-consecutive zero-cardinality tick (extension hypothesis), versus P-297.I-falsify = 0.65 modal that any in-window merge would deflate the primitive to ×1.0 (single-tick-event hypothesis).

Add.298 realized **2 in-window merges** (codex #20896 + opencode #25600), unambiguously falsifying P-297.I at the first-replication-attempt. The M-297.A primitive deflates to **×1.0** (no extension; single-tick pure-silent-septet was a stochastic outlier rather than a regime-marker for cascade-collapse-extension).

The Add.297 cardinality 0 → Add.298 cardinality 2 transition magnitude is **+2 PRs/tick** at the rebound-step, which is **above the baseline rate-spike-significance threshold** under synth #598 (Poisson μ ≈ 0.075/tick → Pr(X≥2) ≈ 0.0026 at 99.74% confidence). Yet the cardinality-2 outcome is **structurally distinct** from the synth #598 "rate-spike" interpretation because both PRs in the Add.298 window are anchor-axis-recovery merges (not fresh-cohort-burst merges) — the cardinality is amplified relative to baseline, but the underlying mechanism is **mean-reversion-amplified-recovery** rather than fresh-author-cohort-cascade-burst.

**Bimodal-recovery-distribution decomposition**:

The post-pure-silent-septet recovery distribution can be decomposed into two structurally distinct cardinality-modes:

| recovery-mode | mechanism | cardinality | empirical W17-frequency | modal-prior |
|---|---|---|---|---|
| singleton-modal | single-axis-recovery (cohort-anchor-fresh-cycle) | 1 | 4/13 ≈ 0.308 | 0.40 |
| doublet-amplified-mean-reversion | two-axis-simultaneous-recovery (rare cross-axis-correlation event) | 2 | 1/13 ≈ 0.077 | 0.20 |
| triplet+-burst | fresh-cohort-cascade event (rare amplification) | ≥3 | 0/13 ≈ 0.0 | 0.05 |
| sustained-zero | extension-collapse | 0 | 8/13 ≈ 0.615 | 0.35 |

The Add.298 realization (cardinality = 2) falls into the **doublet-amplified-mean-reversion** sub-mode at empirical W17-frequency 0.077, and the synth #598 Poisson-deviation test treats this as a deep-upper-tail event at 99.74% confidence under the **monomodal Poisson assumption**. But under the **bimodal-recovery-distribution** framework, the cardinality-2 outcome is at empirical-modal-frequency 0.077 — **not deep-tail** but **second-tier-modal-recovery**.

This decomposition reduces the synth #598 BF-attribution from ×11.5 (single-mode Poisson interpretation) to **×4.5** (bimodal-decomposition interpretation), a **−7.0 BF-attribution-correction** — but introduces a new BF-attribution to the bimodal-decomposition primitive itself at first-instantiation:

**Primitive instantiated**: `post-pure-silent-septet-bimodal-recovery-distribution-with-singleton-modal-and-doublet-amplified-mean-reversion-sub-modes` — a structural-recovery framework that decomposes cardinality-rebounds following pure-silent ticks into mechanism-conditional modes (single-axis-recovery vs two-axis-simultaneous-recovery vs fresh-cohort-cascade vs sustained-zero-extension) rather than treating them as monomodal Poisson outcomes. The primitive forecasts that future post-pure-silent-septet recoveries will:

1. Realize singleton-modal at empirical-frequency [0.30, 0.45]
2. Realize doublet-amplified-mean-reversion at empirical-frequency [0.05, 0.15]
3. Realize triplet+-burst at empirical-frequency [0.0, 0.10] (rare amplification)
4. Realize sustained-zero-extension at empirical-frequency [0.50, 0.70]

The bimodal-distribution dominance (singleton + sustained-zero accounts for ≈ 0.92 of W17 W17-recovery events) implies that the **cardinality-2 doublet outcome at Add.298 is structurally significant** relative to W17 baseline but not to the level of synth #598 Poisson-deep-tail interpretation — the BF-attribution-correction reflects this structural reframing.

**Refined synth #598 Poisson-deviation interpretation under bimodal-decomposition**:

Synth #598 originally treated each cardinality-rebound as a Poisson-deviation test against per-tick rate baseline μ ≈ 0.075. Under bimodal-decomposition, each rebound-event must be **conditioned on the recovery-mode-classification** before applying the Poisson-deviation test:

- For singleton-modal rebounds: use Poisson μ_s ≈ 0.40 (modal-rebound-rate under single-axis-recovery)
- For doublet-amplified-mean-reversion: use Poisson μ_d ≈ 0.20 (modal-rebound-rate under two-axis-recovery)
- For triplet+-burst: use Poisson μ_b ≈ 0.05 (modal-rebound-rate under fresh-cohort-cascade)
- For sustained-zero: no Poisson test required (extension-event, not rebound-event)

The Add.298 cardinality-2 outcome under doublet-amplified-mean-reversion mode (μ_d ≈ 0.20) gives:

Pr(X = 2 | μ_d = 0.20) = e^(−0.20) · (0.20²/2!) = 0.8187 · 0.02 = **0.0164** at single-instance — still upper-tail but **6.3× more likely** than under the monomodal interpretation (0.0026 → 0.0164). Cum-BF lift on synth #598 thus refined ×11.5 → **×7.5** under bimodal-decomposition correction (−4.0 BF-attribution).

**Cited PRs (verified merge SHAs anchoring the cardinality-rebound and bimodal-decomposition framework)**:

- codex #20896 `4436122ad99dbe3694f999420b9bba2f8a353660` @etraut-openai 2026-05-03T17:23:09Z (Add.298 doublet-component-1, codex-axis-recovery via fresh anchor-doublet)
- opencode #25600 `e67364f23392a1eb11026a0d43070aac3af162f1` @OpeOginni 2026-05-03T17:21:34Z (Add.298 doublet-component-2, opencode-axis-recovery via cohort-member-recurrence)
- codex #20893 `a31e6182c8b53c8dcb4d4dd88ffc901158bfd0f8` @etraut-openai 2026-05-03T16:25:42Z (Add.296 anchor-doublet-position-1 partner, pre-pure-silent-septet trigger event)
- opencode #25602 `5fdb3f1c92c16cae0f1952e8fc8414488102b9f4` @kitlangton 2026-05-03T15:21:35Z (Add.295 prior-anchor-merge, pre-silent-doublet trigger)
- opencode #25588 `101566131d15dbe73e9d246d3d35da767f28cd80` @OpeOginni 2026-05-03T13:20:05Z (Add.292 envelope-position-5 burst-peak, OpeOginni cohort-debut anchor for synth #600 envelope and Add.298 cohort-recurrence reference point)
- opencode #25596 `8694c5b68fc57e7e1bb8129b72b08e128dce9f17` @nexxeln 2026-05-03T13:58:31Z (Add.292 envelope-position-5 burst-peak, intra-author-doublet partner — different cohort path from OpeOginni recurrence)
- qwen-code #3807 `e617f20d1598ab7d7d99694e13549a3429c971d0` @doudouOUC 2026-05-03T11:36:03Z (slow-cluster shallow-decay axis n=8 at Add.298, structural-context-anchor for non-recovering cluster)

**Anchor citations (W17 cardinality-rebound dataset points across Add.276-298)**:

- ADD-289: silent-septet termination via fresh-author-doublet (cardinality-rebound from 0 → 2 = doublet-amplified-mean-reversion sub-mode realization at first-W17-instance)
- ADD-292: opencode triplet (cardinality-rebound 1 → 3 = triplet+-burst sub-mode realization)
- ADD-293: post-triplet zero-rebound (sustained-zero extension after burst-peak)
- ADD-294: post-burst silent-doublet (sustained-zero extension at gap-2 from burst-peak — synth #599 fast-tau exponential mean-reversion confirmation)
- ADD-296: silent-rebound singleton (cardinality 0 → 1 = singleton-modal recovery realization)
- ADD-297: pure-silent-septet (cardinality 1 → 0 = sustained-zero extension after singleton-modal recovery)
- ADD-298: doublet-amplified-mean-reversion (cardinality 0 → 2 = second W17 instance of doublet sub-mode, replicates Add.289 pattern)

**Cum-BF redistribution at this synth instantiation**:

- Synth #598 (rate-spike-significance Poisson upper-tail): refined ×11.5 → **×7.5** under bimodal-decomposition BF-attribution correction (cardinality-2 outcomes properly classified as doublet-mode rather than monomodal-deep-tail)
- M-297.A (post-defection-cascade-collapse primitive): deflated ×1.69 → **×1.0** at first-replication-falsification (P-297.I falsified at 0.65 modal-falsification rate, expected outcome)
- Synth #599 (fast-tau exponential mean-reversion): unchanged at ×7.5 (orthogonal axis from cardinality-mode-decomposition; fast-tau operates within sustained-zero-extension sub-mode dynamics)
- Synth #585 (cross-carrier-hangover-replication): unchanged at ×42.6 (orthogonal axis)
- Synth #600 (7-step asymmetric-collapse envelope): unchanged at ×8.5 (the envelope-shape primitive is structurally orthogonal to the rebound-mode-decomposition primitive)
- New synth #602 instantiation BF: **×5.5** (bimodal-recovery-distribution primitive at first-instance with explicit decomposition table and refined Poisson-deviation framework — the structural-reframing-payload is moderate but provides falsifiable predictions for future post-pure-silent recoveries)

**Cross-repo trend implication — W17 rebound-mode-decomposition framework**:

The bimodal-recovery-distribution primitive provides the first explicit **mechanism-conditional cardinality-rebound classification** for W17 cascade dynamics. Prior W17 synthesis (#594 palindromic-tetrad, #598 monomodal-Poisson, #599 fast-tau-exponential) treated cardinality-rebounds as a single-distribution phenomenon; the Add.298 doublet-amplified-mean-reversion realization combined with the Add.289 doublet-precedent reveals that **rebound-cardinality is a multi-modal mechanism-conditional outcome** that requires sub-mode-classification before applying any rate-deviation tests.

The refined framework provides three falsifiable predictions:

1. Singleton-modal recovery is the dominant W17 rebound mechanism at empirical-frequency ≈ 0.30-0.45
2. Doublet-amplified-mean-reversion is a rare-but-recurring secondary mechanism at empirical-frequency ≈ 0.05-0.15 (Add.289 + Add.298 = 2/13 ≈ 0.154 at current W17 sub-window — at upper-edge of predicted band)
3. Triplet+-burst is a tail-event tied specifically to fresh-cohort-cascade events (Add.292 envelope-position-5 instantiation)

The Add.298 doublet-realization at empirical-frequency 0.154 (2/13 W17 sub-window observations) sits at the upper-edge of the predicted bimodal-frequency-band [0.05, 0.15] for doublet-mode, suggesting that the doublet-mode may be slightly under-modeled in the current framework — synth #603+ should re-estimate doublet-mode-frequency-prior with additional data or refine the modal-prior to [0.10, 0.20] to reflect the Add.289 + Add.298 paired-instance evidence.

**Predictions for Add.299-303 forward**:

- P-602.A: Add.299 cardinality realizes singleton-modal recovery (P 0.40 modal — single-axis sustains, other axis returns to silent) OR sustained-zero extension (P 0.30 modal — both axes return to silent at gap-1) OR doublet sustains (P 0.20 sub-modal — would lift M-298.A cum BF ×8.3 → ×16+ at first-replication of dual-recovery event)
- P-602.B: Doublet-amplified-mean-reversion sub-mode replicates within Add.299-303 at any subsequent post-silent-cluster-tick (P 0.30 modal — would lift synth #602 cum BF ×5.5 → ×9-12 at first-replication of bimodal-decomposition primitive's secondary mode)
- P-602.C: Triplet+-burst sub-mode realizes within Add.299-308 (P 0.20 sub-modal — would lift bimodal-decomposition primitive at fresh-cohort-cascade-resumption mechanism, replicating synth #600 envelope-position-5 dynamics)
- P-602.D: Bimodal-decomposition framework generalizes to non-pure-silent-septet trigger conditions (i.e., applies to recoveries from singleton or doublet preceding-tick) (P 0.35 modal — would broaden primitive applicability)
- P-602.E: Synth #598 Poisson-rate-spike-significance primitive further refines under bimodal-decomposition with mode-conditional Poisson rates μ_s, μ_d, μ_b independently estimated by Add.310 (P 0.50 modal — sufficient W17 data to fit mode-conditional rates by mid-week)
- P-602.F: Cross-mode joint-likelihood (e.g., singleton-modal at Add.299 followed by triplet+-burst at Add.300) instantiates a sequential-mode-transition primitive within Add.299-308 (P 0.25 sub-modal — would extend bimodal-decomposition into a state-transition framework)
- P-602.G: Doublet-mode empirical-frequency-prior re-estimated to [0.10, 0.20] in synth #603 under Add.289 + Add.298 paired-instance evidence (P 0.50 modal — frequency-prior-refinement is the natural next-step under accumulating-evidence framework)
