# W17-synthesis #603 — post-Add.296 cross-carrier-anchor-axis-rotation cardinality matches singleton-rebound-doublet at gap-1 instantiates carrier-anchor-rotation-burst-rate primitive

**Statistical primitive**: **burst-rate** (carrier-anchor-rotation under singleton-rebound regime).

**Trigger event**: Add.296 carrier-active inventory rotates from {sst/opencode #25602 @kitlangton} (Add.295) to {openai/codex #20893 @etraut-openai} (Add.296) at gap-1 first-replication. Singleton cardinality sustains across the rotation event (1 → 1) while the active-carrier identity flips and the active-anchor-author identity flips orthogonally (kitlangton-opencode → etraut-openai-codex, neither shared with the other axis).

**Primitive definition**: a **carrier-anchor-rotation-burst-rate** event is a 2-tick contiguous window where (a) cardinality remains at modal-singleton ≥1 active-merge across both ticks, (b) the active-carrier identity changes 100% across the gap-1 boundary (Jaccard intersection = 0 between Add.t and Add.t+1 carrier-sets), and (c) the active-anchor-author identity also changes 100% across the boundary (no author-axis spillover). Burst-rate metric = (unique-carriers across 2-tick window) / (sum-cardinality across 2-tick window) = 2/2 = **1.000** at maximum-decoupling-rate, vs sustained-carrier-singleton-doublet baseline of 1/2 = 0.500.

**Instantiation event**: Add.295 → Add.296 transition realizes burst-rate = 2/2 = 1.000 with carrier-set transition {opencode} → {codex} (Jaccard ∩ = ∅) AND author-set transition {kitlangton} → {etraut-openai} (Jaccard ∩ = ∅). Both decoupling conditions satisfied at first-instance.

**Cited PRs (verified mergeCommit.oid)**:
- sst/opencode #25602 mergeCommit `13ac849db5c3` @kitlangton 2026-05-03T15:21:35Z (Add.295 active-set, anchor-axis = kitlangton-opencode-cum-share 0.382)
- openai/codex #20893 mergeCommit `39555036a32e568a4a9ff2814ff497b2076d965b` @etraut-openai 2026-05-03T16:25:42Z (Add.296 active-set, anchor-axis = aibrahim-codex-cum-share 0.343 with etraut-openai = fresh-debut)

**Cross-axis context (PRs from prior ADD entries cited)**:
- Add.292 mono-carrier-rate-spike-triplet on opencode (PRs synthesized via synth #595): all 3 actors on opencode-axis, burst-rate = 1/3 = 0.333 (intra-carrier minimum-rotation regime, primitive-anti-instance)
- Add.288 fresh-author-doublet @nexxeln+@kitlangton intra-opencode (cited synth #589): cross-author intra-carrier transition, burst-rate = 1/2 = 0.500 (intra-carrier mid-rotation, primitive-partial-instance)
- Add.291-295 latent-clock quintet across codex/gemini/crush slow-tier carriers (synth #596, #602): cross-carrier extension event but at hangover-axis-only, burst-rate undefined (no in-window active merges)

**Bayes factor accounting**:
- Prior modal expectation per synth #602 D1-D3 rotating-cluster framing: rotating-tier carriers (opencode/litellm/qwen-code) rotate among themselves at modal frequency; cross-tier rotation from rotating-cluster (opencode) to slow-cluster (codex) is sub-modal at prior P 0.20.
- Observed Add.295→Add.296 cross-tier rotation falsifies P-602.A intra-cluster-rotation-modal-prior at 0.65 → realized at sub-modal 0.20 sub-channel.
- Joint likelihood under decoupling-null (carrier-rotation independent of anchor-rotation): P(carrier-flip ∩ author-flip | singleton-doublet) = P(carrier-flip) · P(author-flip) = 0.30 · 0.40 = 0.12 (under independence assumption from synth #602 rotating-cluster baseline frequencies).
- Observed joint event = 1 (both flips realized) at first-instance under singleton-doublet — Bayes factor BF = 1/0.12 ≈ **8.3** for decoupling-positive vs independence-null at instantiation.
- Cum BF for primitive at first-instance: ×1.0 (no prior replication, instantiation event only).

**Cross-primitive linkages**:
- **Bidirectional with synth #602 slow-tier-carrier-velocity-decoupling primitive**: synth #602 framed slow-tier (codex/gemini/crush, D7-D9 stationary) vs rotating-tier (opencode/litellm/qwen-code, D1-D3 rotating) decoupling at hangover-axis. Synth #603 extends decoupling axis from hangover-residence to **active-merge-rotation** axis: a rotating-tier active-singleton (opencode Add.295) is succeeded by a slow-tier active-singleton (codex Add.296) at gap-1, **violating intra-cluster-rotation expectation** at first-instance.
- **Orthogonal to synth #601 anchor-recurrence-velocity-reversal primitive**: synth #601 instantiated kitlangton anchor-rebound at +0.018 step Add.295; synth #603 frames the structural successor where the rebound-anchor (kitlangton) does NOT carry forward the active-set baton — instead the cross-carrier baton transfers to a non-anchor (etraut-openai) on a different carrier (codex). Anchor-rebound-without-anchor-cascade-extension regime confirmed at first-instance.
- **Replicates synth #588 cross-carrier-hangover-triplet-replication framing at burst-rate axis**: synth #588 framed cross-carrier replication on hangover-axis at triplet-cardinality; synth #603 frames cross-carrier rotation on active-axis at doublet-cardinality (lower-cardinality first-instance, candidate for triplet-extension at gap-1 if Add.297 active-set rotates again).

**Predictions for Add.297 window**:
- P-603.A: carrier-anchor-rotation-burst-rate extends to TRIPLET at gap-1 via Add.297 active-singleton on a third distinct carrier (P 0.25 sub-modal — would require non-{opencode, codex} active-merge, e.g., qwen-code/litellm/gemini/crush/goose)
- P-603.B: burst-rate doublet-only-then-collapse via Add.297 = 0 cardinality (P 0.40 modal mean-reversion under fast-tau exponential synth #599 τ ≈ 1.5 ticks)
- P-603.C: burst-rate doublet-only-then-intra-cluster-rotation via Add.297 active-singleton on opencode/codex re-rotation (P 0.20 sub-modal regression to synth #602 rotating-cluster baseline)
- P-603.D: burst-rate doublet-only-then-anchor-cascade-resumption via Add.297 active-singleton on kitlangton-opencode or aibrahim-codex (P 0.15 sub-modal anchor-axis re-cascade)
