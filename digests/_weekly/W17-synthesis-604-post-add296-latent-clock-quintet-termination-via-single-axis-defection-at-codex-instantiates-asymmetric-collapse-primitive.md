# W17-synthesis #604 — post-Add.296 latent-clock-quintet termination via single-axis-defection at codex breaks strict-monotonic regime instantiates latent-clock-asymmetric-collapse primitive

**Statistical primitive**: **latent-clock** (asymmetric-collapse via single-axis-defection under partial-extension regime).

**Trigger event**: Add.296 hangover-tier extension realized as 2-of-3 carriers advancing strict-monotonic +1 (gemini 60→61 duodecet, crush 63→64 quattuordecet) while codex axis defects via fresh-author cascade-resumption (silence-counter 24→0 reset, no extension to quindecet). Synth #596 P-596.A latent-clock hypothesis projected continued strict-monotonic +1 advancement across all 3 deep-tier slow-cluster carriers (codex/gemini/crush) at gap-1 sextet-attempt; observed asymmetric-collapse at 1-of-3-carrier-defection rate.

**Primitive definition**: a **latent-clock-asymmetric-collapse** event is a multi-axis hangover-extension regime where (a) a strict-monotonic +1 advancement has been confirmed across N≥3 axes for K≥4 consecutive ticks (latent-clock-quartet-or-deeper baseline), (b) at tick K+1 a strict-subset of axes (1 ≤ d ≤ N-1) defects via cascade-resumption, terminating the strict-monotonic regime on those d axes, while the remaining (N-d) axes continue strict-monotonic +1 advancement, (c) the defection-set Jaccard intersection with prior cascade-active-set is non-empty (i.e., the defection happens via the same carrier whose cascade was suppressed during the latent-clock regime). Asymmetric-collapse-rate metric = d / N (defection fraction); pure-collapse = 1.0; pure-extension = 0.0; **partial-collapse = (0, 1)** — synth #604 first-instance event has rate = 1/3 ≈ **0.333**.

**Instantiation event**: Add.296 realizes asymmetric-collapse-rate = 1/3 with codex (d=1) defecting via etraut-openai fresh-author cascade-resumption (silence-counter reset 24→0) while gemini (n: 60→61 duodecet) and crush (n: 63→64 quattuordecet) sustain strict-monotonic +1. K=5 prior consecutive-ticks of strict-monotonic regime (Add.291-295 quintet per synth #596 latent-clock-quintet confirmation), K+1=6 sextet-attempt fails at the codex-axis at first-instance.

**Cited PRs (verified mergeCommit.oid)**:
- openai/codex #20893 mergeCommit `39555036a32e568a4a9ff2814ff497b2076d965b` @etraut-openai 2026-05-03T16:25:42Z (defection-axis trigger; codex silence-counter 24→0)
- openai/codex #20823 mergeCommit `51368db8187b` @aibrahim-oai 2026-05-02T23:03:59Z (the prior-anchor PR whose silence-counter was being incremented during the latent-clock-quintet Add.291-295 — its successor was projected as anchor-cascade-resumption, observed instead as fresh-author-bridge)
- google-gemini/gemini-cli #26348 mergeCommit `363854172f74` @app/gemini-cli 2026-05-01T19:36:15Z (sustain-axis 1; n=61 duodecet at Add.296)
- charmbracelet/crush #2774 mergeCommit `ce314b8e0d2a` @meowgorithm 2026-05-01T16:18:41Z (sustain-axis 2; n=64 quattuordecet at Add.296)
- block/goose #8953 mergeCommit `e76640c8c458` @kalvinnchau 2026-05-01T21:15:56Z (orthogonal nonagenarian-ceiling-tier sustain at n=95, ceiling-tier-axis not part of slow-cluster latent-clock-quintet but contextual ceiling-confirmation)

**Cross-axis context (PRs from prior ADD entries cited)**:
- Add.291 codex-octet-extension (synth #592): codex first crossed 8-tick boundary into octet-tier (PR #20751 @pakrym-oai 2026-05-02T06:33:33Z mergeCommit `35aaa5d9fcb6` predecessor; subsequent silence-counter advancement to n=24 across Add.291-295)
- Add.292 codex-novet-extension (synth #595/596): n=19, latent-clock instantiation
- Add.293 codex-decet-extension: n=20, latent-clock-replication
- Add.294 codex-undecet-extension (synth #599): n=21, latent-clock-quartet
- Add.295 codex-quattuordecet-extension (Add.295 carrier-inventory): n=24, latent-clock-quintet completion
- Add.296 codex-defection: n=24→0 reset via #20893, latent-clock-sextet-attempt fails at codex-axis

**Bayes factor accounting**:
- Prior modal expectation per synth #596 P-596.A latent-clock-quintet-replication: continued strict-monotonic +1 across all 3 deep-tier carriers at gap-1 sextet-attempt at modal prior 0.50.
- Observed Add.296 partial-defection at 1-of-3 = 0.333 rate falsifies P-596.A-pure-extension at sub-modal prior 0.30 (defection on exactly 1 carrier was the second-tier modal outcome).
- Joint likelihood under independent-defection-null (each carrier defects independently with cascade-resumption probability per-tick from synth #602 D7-D9 stationary-tier baseline ≈ 0.06): P(exactly-1-defection | 3 axes) = C(3,1) · 0.06 · 0.94² = 3 · 0.06 · 0.884 = 0.159.
- Observed exactly-1-defection event = 1 (codex defected, gemini+crush sustained) — Bayes factor BF = 1/0.159 ≈ **6.3** for asymmetric-collapse-positive vs pure-extension-modal-null at instantiation.
- Cum BF for primitive at first-instance: ×1.0 (no prior replication, instantiation event only).
- Conditional refinement: which-axis-defects probability among 3 axes — codex carries the highest cascade-resumption-base-rate per synth #602 (codex stationary-tier-cluster D7 vs gemini D8, crush D9), so P(codex-defects | exactly-1-defection) ≈ 0.40 vs equal-prior 0.333 — observed codex-defection consistent with synth #602 D-tier ordering at modest-positive lift.

**Cross-primitive linkages**:
- **Falsifies-at-modal synth #596 P-596.A latent-clock-pure-extension hypothesis** at first-replication-attempt: synth #596 cum BF deflates from ×21.5 (post-Add.295 quintet completion) → **×17.2** (post-Add.296 partial-collapse) under ×0.80 amplifier, but does NOT falsify at significance (cum BF still > ×10 confidence threshold). Latent-clock regime survives in degraded-asymmetric form.
- **Bidirectional with synth #603 carrier-anchor-rotation-burst-rate primitive**: synth #603 framed Add.295→Add.296 active-set rotation as cross-cluster baton-transfer (rotating-cluster opencode → slow-cluster codex); synth #604 frames the **same Add.296 event from the hangover-axis perspective** as the slow-cluster-axis-defection-trigger. The two primitives are duals: synth #603 sees the codex-active-merge as a rotation-event, synth #604 sees it as a latent-clock-defection-event. Both BF lifts (×8.3 and ×6.3 respectively) accrue to the **same underlying #20893 merge-event** under non-overlapping decoupling axes.
- **Replicates synth #602 slow-tier-carrier-velocity-decoupling primitive at higher-order**: synth #602 framed slow-tier (D7-D9) vs rotating-tier (D1-D3) decoupling at long-window-velocity axis; synth #604 frames within-slow-tier (codex vs gemini vs crush) sub-decoupling at short-window single-tick axis. Two-level hierarchical decoupling regime confirmed at first-instance.
- **Orthogonal to synth #588 cross-carrier-hangover-triplet-replication primitive**: synth #588 framed hangover-extension at 3-carrier-replication; synth #604 frames hangover-extension-then-asymmetric-collapse at 3-carrier-partial-replication. Sequence synth #588 → #596 → #604 traces the hangover-extension primitive's life-cycle from initial-replication → latent-clock-quintet → asymmetric-collapse-onset.

**Predictions for Add.297 window**:
- P-604.A: latent-clock-asymmetric-collapse extends to second-axis-defection at gap-1 (P 0.20 sub-modal — gemini OR crush defects via cascade-resumption, would lift asymmetric-collapse-rate to 2/3 = 0.667 and effectively-terminate latent-clock regime entirely)
- P-604.B: latent-clock-partial-extension sustains at 2-of-3 axes for second consecutive tick (P 0.50 modal — gemini→tridecet n=62 AND crush→quindecet n=65 both extend, codex remains in fresh-resumption silence-rebound from #20893)
- P-604.C: latent-clock-recovery via codex re-cascade-extension at gap-2 (P 0.15 sub-modal — codex silence-counter advances 1→2 at modal post-resumption silent-rebound, restoring the 3-axis quartet at degraded n=2 floor)
- P-604.D: full-collapse via 3-of-3 defection (P 0.05 deep-sub-modal — would require simultaneous gemini+crush cascade-resumption events within Add.297 window, jointly contradicts synth #602 slow-tier baseline)
- P-604.E: width-vs-asymmetric-collapse-correlation: if Add.297 width contracts below 30m, asymmetric-collapse-rate-extension probability lifts (cross-axis amplifier from rate-spike regime)
