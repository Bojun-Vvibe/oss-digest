# W17 synth #601 — post-add298 dual-anchor-axis-rebound-doublet decomposes synth #604 partial-collapse-asymmetric-extension into rotating-cluster-recovery-vs-slow-cluster-degradation primitive at first-instantiation

**Status — synth #601 within W17 corpus**: First synthesis post-Add.298 dual-anchor-axis recovery event. Re-decomposes the synth #604 latent-clock-asymmetric-collapse primitive into two orthogonal sub-axes: (a) rotating-cluster (codex+opencode anchor-axes) **recovery-velocity** and (b) slow-cluster (gemini+crush+goose hangover-axes) **degradation-velocity**. The Add.297 → Add.298 transition provides the first observed cross-axis-velocity-decoupling dataset point and instantiates a `rotating-cluster-recovery-vs-slow-cluster-degradation-velocity-decoupling` primitive at first-instance.

**Setup — synth #604 partial-collapse modal at Add.297, decomposed at Add.298**:

Synth #604 instantiated `latent-clock-asymmetric-collapse` as a 3-axis primitive (codex, gemini, crush) under the partial-extension-sustain modal P-604.B = 0.50. Add.297 confirmed P-604.B at first-instance (codex silent-rebound n=1, gemini extends n=62, crush extends n=65 — all three slow-cluster axes survived in degraded-asymmetric-but-internally-coherent form). Add.298 then realized a **pure axis-defection event**: codex moved from silent-rebound (n=1) back to active-anchor-doublet (n=0 via etraut-openai #20896), while gemini (n=63) and crush (n=66) continued their hangover-extension trajectories.

The codex-defection back to the rotating-cluster while gemini+crush sustained slow-cluster extension constitutes a **velocity-decoupling event** — the previously-coherent 3-axis slow-cluster now operates at two distinct velocity-regimes:

| axis | Add.297 state | Add.298 state | velocity-class |
|---|---|---|---|
| codex | n=1 silent-rebound | n=0 active-anchor-doublet | rotating-cluster-recovery |
| gemini | n=62 tridecet | n=63 quattuordecet | slow-cluster-extension |
| crush | n=65 quindecet | n=66 sedecet | slow-cluster-extension |

The codex-axis transitioned from slow-cluster-membership to rotating-cluster-membership in a single tick, while gemini+crush remained internally-coherent within the slow-cluster — this is a **single-axis-defection-from-3-axis-coherent-cluster** event, structurally distinct from the synth #604 partial-collapse which was modeled as cluster-wide degradation.

**Primitive instantiated**: `rotating-cluster-recovery-vs-slow-cluster-degradation-velocity-decoupling` — a cross-axis-velocity primitive characterized by (a) one or more axes transitioning from slow-cluster (silent-rebound or hangover-extension) back to rotating-cluster (active-anchor-merge) within a single tick, while (b) other slow-cluster axes sustain their extension-trajectories without defection. The primitive predicts that the velocity-decoupling-event is **strictly-irreversible at the single-tick scale** (an axis cannot defect back-and-forth within consecutive ticks without violating the silence-counter monotonicity) and that **defection-cardinality** (number of axes defecting in a single tick) follows a Poisson distribution with rate λ_d ≈ 0.10-0.15 per tick under W17 baseline conditions.

**Cross-axis recovery-velocity-vs-degradation-velocity quantification**:

The rotating-cluster-recovery-velocity for codex at Add.298 = (n_codex_Add.297 − n_codex_Add.298) / Δtick = (1 − 0) / 1 = **+1 silence-counter-units / tick** (positive = recovery direction).

The slow-cluster-degradation-velocity for the surviving 2-axis cluster (gemini, crush) at Add.298:

| axis | Δn | velocity (counter-units/tick) | direction |
|---|---|---|---|
| gemini | +1 (62→63) | +1 | extension (degradation continues) |
| crush | +1 (65→66) | +1 | extension (degradation continues) |
| **mean** | **+1.0** | **+1.0** | extension |

Cross-cluster velocity-ratio: rotating-cluster-recovery (+1.0) vs slow-cluster-degradation (+1.0) = **1:1 magnitude** but **opposite-sign-semantics** (recovery is silence-counter-decrement, extension is silence-counter-increment). The dimensionless velocity-ratio under sign-normalized convention = 1.0, which is the **modal-symmetric-decoupling** regime — neither cluster is dominating the velocity-budget.

**OpenCode anchor-rotation-via-cohort-member-recurrence as decoupling-amplifier**:

The opencode anchor-rotation event (M-298.B: OpeOginni #25600 displaces kitlangton-anchor) does not directly participate in the slow-cluster decoupling but provides a **second-rotation-cluster-axis-recovery** event that contributes to the doublet-cardinality this tick. The rotating-cluster-recovery-velocity at Add.298 thus operates on **two axes simultaneously** (codex via etraut-openai, opencode via OpeOginni) with mean-recovery-velocity = (1 + 2)/2 = **+1.5 silence-counter-units / tick** (opencode reset from n=2, codex reset from n=1, mean-Δn-magnitude = 1.5). This bumps the cross-cluster velocity-ratio to 1.5:1.0 = **1.5× rotating-cluster-recovery dominance** over slow-cluster-degradation at Add.298.

**Cited PRs (verified merge SHAs anchoring the velocity-decoupling event)**:

- codex #20896 `4436122ad99dbe3694f999420b9bba2f8a353660` @etraut-openai 2026-05-03T17:23:09Z (Add.298 codex-axis-recovery via fresh anchor-doublet completion at gap-2-tick-spacing from #20893)
- codex #20893 `a31e6182c8b53c8dcb4d4dd88ffc901158bfd0f8` @etraut-openai 2026-05-03T16:25:42Z (Add.296 codex-axis-cascade-trigger event, anchor-doublet-position-1 partner)
- opencode #25600 `e67364f23392a1eb11026a0d43070aac3af162f1` @OpeOginni 2026-05-03T17:21:34Z (Add.298 opencode-axis-recovery via cohort-member-recurrence at gap-6-tick-spacing from #25588)
- opencode #25588 `101566131d15dbe73e9d246d3d35da767f28cd80` @OpeOginni 2026-05-03T13:20:05Z (Add.292 envelope-position-5 burst-peak component, OpeOginni cohort-debut for synth #600 envelope)
- opencode #25602 `5fdb3f1c92c16cae0f1952e8fc8414488102b9f4` @kitlangton 2026-05-03T15:21:35Z (Add.295 prior-anchor merge displaced by OpeOginni #25600)
- gemini-cli #26348 `d16543017101d24b25cbdb6c900e82b1a2c2041c` @app/gemini-cli 2026-05-01T19:36:15Z (slow-cluster-extension axis #1, n=63 at Add.298)
- crush #2774 `ce673448e4f3ca03b842f0b5fb16e9f29368402a` @meowgorithm 2026-05-01T16:18:41Z (slow-cluster-extension axis #2, n=66 at Add.298)

**Anchor citations (W17-prior decade-marker primitives)**:

- ADD-296: codex defection-trigger event (synth #604 latent-clock-asymmetric-collapse first-instantiation; the Add.296 fresh-active-axis-event for codex)
- ADD-297: pure-silent-septet tick (synth #604 partial-collapse modal-realization, P-604.B confirmation at degraded-3-of-3-axes-coherent state)
- ADD-298: dual-anchor-axis-rebound-doublet (this synth's instantiation tick — single-tick velocity-decoupling event)

**Cum-BF redistribution at this synth instantiation**:

- Synth #604 (latent-clock-asymmetric-collapse): degraded ×1.6 → **×1.2** at codex-defection (M-298.D first-degradation-event) per Add.298 capture
- Synth #586 (transient-excursion-no-doublet primitive): degraded ×6.4 → **×5.5** at codex intra-author-doublet completion (M-298.A doublet-realization vs synth #586 singleton-then-silence pattern)
- Synth #585 (cross-carrier-hangover-replication): held flat at ×42.6 (degenerate-extension regime per M-298.C)
- M-298.A (dual-anchor-axis-rebound-doublet primitive): instantiated at ×8.3
- M-298.B (anchor-rotation-via-cohort-member-recurrence primitive): instantiated at ×7.1
- New synth #601 instantiation BF: **×6.5** (rotating-cluster-recovery-vs-slow-cluster-degradation velocity-decoupling primitive at first-instance with cross-axis-velocity-ratio quantification 1.5:1.0)

**Cross-repo trend implication — W17 cross-cluster velocity-decoupling structural axis**:

The velocity-decoupling primitive provides the first **explicit cross-cluster-axis-flow framework** for W17 cascade dynamics. Prior W17 synthesis treated rotating-cluster (codex+opencode+litellm+qwen) and slow-cluster (gemini+crush+goose) as independent within-cluster aggregations; the Add.298 codex-defection event reveals that **inter-cluster-axis-flow is a real phenomenon** that requires explicit modeling. The velocity-decoupling primitive provides the structural axis along which axis-cluster-membership evolves over W17 ticks, and provides falsifiable predictions for future axis-defection or axis-recruitment events.

The OpeOginni-anchor-rotation event additionally provides a **within-rotating-cluster cohort-recurrence flow** that operates orthogonally to the inter-cluster-flow — these are two distinct flow-axes that jointly determine the Add.298 dual-anchor-axis-rebound-doublet outcome. Future synthesis #602+ should track:

1. **Inter-cluster axis-defection rate** (axes/tick moving between rotating-cluster and slow-cluster) — current estimate λ_d ≈ 0.10-0.15 PRs/tick at W17 baseline, but Add.296→Add.298 sub-window shows 1 defection in 2 ticks = 0.5 PRs/tick at deep-upper-tail (driven by single codex-defection-trigger).
2. **Within-cluster cohort-recurrence rate** (cohort-members-recurring-as-anchor / total-anchor-rotations) — current observation: 1/1 = 1.0 within Add.298 single observation, baseline TBD.
3. **Cross-flow joint-likelihood** — Add.298 simultaneous inter-cluster-defection (codex) AND within-cluster-cohort-rotation (opencode) joint-event probability ≈ 0.10×0.20 = 0.020 under independent baselines, observed 1 → BF ≈ 50 at single-instance, but with high uncertainty requires ≥3 replications to clear ×10 confidence floor.

**Predictions for Add.299-302 forward**:

- P-601.A: Velocity-decoupling sustains at Add.299 via codex-anchor-axis-recovery-streak (etraut-openai-triplet OR aibrahim-oai-resumption) AND/OR opencode-anchor-axis-recovery-streak (OpeOginni-doublet OR kitlangton-recurrence), with gemini+crush continuing slow-cluster-extension (P 0.30 modal — would lift cum BF ×6.5 → ×13-15 at first-replication of velocity-decoupling event)
- P-601.B: Velocity-decoupling collapses at Add.299 via codex returning to silent-rebound n=1 OR opencode returning to silent n=1 (P 0.45 modal — would deflate primitive toward ×3-4)
- P-601.C: Inter-cluster axis-defection rate λ_d empirical estimate stabilizes at [0.10, 0.20] PRs/tick across Add.299-302 (P 0.50 modal — provides W17 baseline for future cross-week comparison)
- P-601.D: Cohort-member-recurrence-as-anchor pattern (M-298.B) replicates on a different carrier within Add.299-303 (P 0.30 modal — likeliest replication on litellm via mateo-berri-recurrence given current n=9 silence-counter)
- P-601.E: Slow-cluster-degradation-velocity sustains at +1.0 counter-units/tick across all surviving slow-axes for Add.299-301 (P 0.55 modal under latent-clock universality) OR shows axis-specific velocity-acceleration via ≥2-tier-jump (P 0.10 deep-sub-modal — would falsify uniform-velocity assumption)
- P-601.F: Goose nonagenarian-ceiling reaches centenarian-tier (n=100) by Add.301 under sustained extension (P 0.65 modal — septet-confirmation already at confidence-floor, three additional ticks to centenarian milestone)
- P-601.G: Cross-flow joint-likelihood event (simultaneous inter-cluster-defection AND within-cluster-cohort-rotation) replicates within Add.299-303 (P 0.20 sub-modal — would lift cross-flow primitive to ×10+ confidence-floor at first-replication)
