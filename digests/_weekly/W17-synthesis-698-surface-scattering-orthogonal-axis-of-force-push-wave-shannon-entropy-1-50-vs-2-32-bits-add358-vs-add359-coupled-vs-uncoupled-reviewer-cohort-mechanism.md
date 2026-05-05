# W17-synth-698 — surface-scattering signature of force-push echo wave: Add.359 wave-2's 5 force-pushed PRs span 5 disjoint code-surfaces (CI bot workflow, telemetry/OTel, settings layout, local-inference provider, message-queueing) vs Add.358 wave-1's 4 PRs which clustered on 2 surfaces (security/Windows-metadata + UI-feature) — surface-Shannon-entropy of wave-2 = 2.32 bits vs wave-1 = 1.50 bits, a 1.55× increase; surface-scattering is the orthogonal mechanism to synth-697's author-rotation, suggesting wave-2 is "review-comment dispersed across review-pool" rather than "single-feature-area review-burst"

**Captured**: 2026-05-05T16:48:47Z (Add.359 tick).

**Cross-carrier hypothesis**: synth-697 identified author-carrier rotation as the persistence mechanism for force-push waves. **synth-698 identifies the orthogonal axis: code-surface scattering**. Wave-1 (Add.358) was a tight surface-cluster; wave-2 (Add.359) is a wide surface-scatter. The two waves differ on **what is being reviewed**, not just **who is reviewing**. This decomposes "force-push wave" into two independent dimensions: (1) author-pool dynamics (synth-697), (2) surface-coverage dynamics (synth-698).

## Specific PRs cited per surface, per wave

### Add.358 wave-1 surface classification (recap, 4 PRs across 2 surfaces — synth-696/697 data)

| PR | Author | Title-derived surface | Surface-class |
|----|--------|----------------------|---------------|
| codex **#21206** | fcoury-oai | `feat(tui): add ambient terminal pets` | **UI-feature (TUI animation)** |
| qwen-code **#3854** | yiliang114 | `ci: add Qwen Code issue follow-up bot workflow` | **CI/automation** |
| qwen-code **#3852** | qiuqiuwen25 | `fix(core): activate skills from discovered result paths` | **Core/skills-routing** |
| gemini-cli **#26498** | euxaristia | `feat(cli): show acknowledgment when user steering hint is processed` | **UI-feature (CLI acknowledgment)** |

**Surface partition for wave-1**: {UI-feature: 2, CI/automation: 1, Core/skills: 1} = 3 distinct surfaces / 4 PRs. **UI-feature dominates with 50% concentration.**

### Add.359 wave-2 surface classification (this synth's primary, 5 PRs across 5 surfaces)

| PR | Author | Title | Surface-class |
|----|--------|-------|---------------|
| qwen-code **#3849** | B-A-M-N | `feat(models): add cross-authType model resolution to ModelRegistry and ModelsConfig` head `0c2876fb8da31d0ebf8524810d065cf8771ee4bd` | **Models/registry-config** |
| qwen-code **#3847** | doudouOUC | `feat(telemetry): inject traceId/spanId into debug log files for OTel correlation` head `109d9098ef3a40b0bdf1ff7d9b202959aebfed8b` | **Telemetry/observability** |
| goose **#9019** | morgmart | `fix goose2 small-window chat and settings layouts` head `f6d15bd91b7d1eb33baa99582ae1d8ab95d58456` | **UI-layout (chat/settings)** |
| goose **#9015** | monroewilliams | `Local inference provider improvements` head `70e82d7c7690dfed4698b866a3b49663e622a6dc` | **Provider/inference** |
| gemini-cli **#26506** | cocosheng-g | `feat: allow queuing messages during compression (#24071)` head `aebbca488dff75f632df427d667fcaa54dfa3dd8` | **Core/message-queueing** |

**Surface partition for wave-2**: {Models/registry: 1, Telemetry: 1, UI-layout: 1, Provider/inference: 1, Core/message-queue: 1} = **5 distinct surfaces / 5 PRs = 1.0 surface-per-PR**. Maximum-entropy distribution. No surface dominates.

### Control PRs (NOT in either wave, for surface-bias-correction)

- **codex #21184** evawong-oai head `95ef124d6194bd2126c11928cb3973214f9ac63a` (frozen tick-7) — Windows-metadata-deny-sentinel surface; **had clustered surface (security/sandbox) but did NOT join wave** despite N=5 stack of related PRs.
- **codex #21214** jif-oai head `cbd2243458b8f4ad11aece59aff815650931f809` (NEW fresh-open) — MCP/memory surface; did not force-push at Add.359.
- **opencode #25886** johnwaldo head `6b8e9fde087f6c2f36bc1dfb66dac9dd259baab3` (frozen tick-3) — provider-error-handling surface (related to wave-2 #9015 inference-provider surface!) — but in different carrier, did not force-push.
- **litellm #27196** michelligabriele head `c8f6a6c4fe67a442efb7d293a30eeeea8bc1d2c5` (frozen tick-1) — MCP-OAuth-discovery surface; did not force-push.
- **gemini-cli #26504** cynthialong0-0 head `3708f88ea704b1f8218760cf5598f0a86b9e64ad` (frozen tick-2) — CLI-JSON-output surface; force-pushed at Add.357 but NOT at Add.359 (despite same carrier).

### Total PR count cited
- 4 wave-1 + 5 wave-2 + 5 controls = **14 PR numbers cited across 5 carriers** (codex, qwen-code, gemini-cli, goose, opencode, litellm — actually 6 carriers with controls).

## Surface-Shannon-entropy quantification

**Define** wave surface-entropy H(W) = − Σᵢ pᵢ · log₂(pᵢ), where pᵢ is the fraction of wave-PRs assigned to surface-class i.

**Wave-1 (Add.358)**:
- p(UI-feature) = 2/4 = 0.50
- p(CI/automation) = 1/4 = 0.25
- p(Core/skills) = 1/4 = 0.25
- H(W₁) = −(0.50·log₂0.50 + 0.25·log₂0.25 + 0.25·log₂0.25) = −(0.50·−1 + 0.25·−2 + 0.25·−2) = 0.50 + 0.50 + 0.50 = **1.50 bits**

**Wave-2 (Add.359)**:
- p(each of 5 surfaces) = 1/5 = 0.20
- H(W₂) = −5 · (0.20·log₂0.20) = −5 · (0.20·−2.322) = **2.322 bits**

**Entropy ratio**: H(W₂)/H(W₁) = 2.322 / 1.50 = **1.55×**.

**Maximum possible entropy** for N PRs = log₂N. Wave-1: log₂4 = 2.0 bits (achieves 75%); Wave-2: log₂5 = 2.322 bits (achieves **100% — maximum-scatter**).

**Interpretation**: Wave-1 surface-distribution is sub-maximal (concentration on UI). Wave-2 surface-distribution is **maximum-entropy** (scatter to disjoint surfaces). The two waves are at **opposite ends of the surface-concentration axis**.

## Hypothesis (H698): Force-push wave surface-entropy correlates inversely with reviewer-cohort coupling

**Mechanism proposed**:

1. **High-coupling reviewer cohort** = a set of reviewers actively focused on a single feature-area (e.g., a security audit, a UI redesign sprint). When this cohort posts review-comments, they cluster on one surface, producing a **low-entropy wave** (Add.358 UI-cluster of fcoury-oai TUI + euxaristia CLI; both UI-feature surface, both maintainer-touched at similar time).

2. **Low-coupling reviewer cohort** = uncoupled reviewers each working on their own surface, posting comments in parallel but on disjoint code areas. The resulting wave is a **high-entropy scatter** (Add.359: 5 different surfaces from 5 different reviewer-author dyads).

3. **Predicted dynamics**: A wave initiated by a coupled cohort (low entropy) is followed by a wave from the un-coupled remainder (high entropy) as the coupled cohort exhausts their review-queue. This generates the **entropy-rising echo** observed: H(W₁) → H(W₂) at ratio 1.55×.

4. **Falsification**: If H(W₃) > H(W₂), the un-coupling continues; if H(W₃) ≤ H(W₁), the wave-3 represents a NEW coupled cohort (e.g., end-of-day release-prep cluster). Either outcome is informative about the reviewer-pool topology.

**Why H698 is orthogonal to H697**:
- H697 (synth-697) measures **WHO** is in the wave: author-carrier rotation, with strict-disjoint authors across waves.
- H698 (this synth) measures **WHAT** is in the wave: surface-class distribution, with rising entropy across waves.
- The two dimensions are **independent**: it would be possible for a wave to have author-disjoint AND surface-clustered (low-entropy echo from new authors) OR author-overlap AND surface-disjoint (high-entropy follow-up from same authors on different surfaces). Add.359 happens to be **author-disjoint AND surface-disjoint** simultaneously, suggesting both mechanisms are active at maximum.

## Confirmation/falsification of prior W17 hypotheses (≥3 hypotheses tested)

- **REINFORCES synth-696 H696 (reviewer-pool concentration as wave trigger)**: H698 specifies that the **type of concentration** (coupled vs un-coupled cohort) controls the wave's surface-signature. synth-696 didn't distinguish these regimes; H698 introduces the distinction.
- **EXTENDS synth-685 (cross-carrier security/auth-surface fresh-open cluster)**: synth-685 noted security-surface clusters as a sub-mode-4 instantiator. H698 generalizes: **any surface-class cluster** can drive a wave; security-surface was just one sub-class. Wave-1 was a **UI-surface analog** of synth-685's security-surface cluster.
- **FALSIFIES strong-form of synth-687 (multi-iterating-leg multi-PR-mode predicts surface-coupling)**: synth-687 claimed jif-oai's multi-iterating-leg PRs were unified by carrier-portability hypothesis at tick-1. H698 observes that **multi-PR force-push waves are NOT coupled by surface** at wave-2 — the multi-PR-mode dispersion is indifferent to surface-class.
- **REFINES synth-694 H694 (power-law freeze model)**: under H698, freeze-survival should correlate with **surface isolation** — PRs on niche surfaces (no overlapping reviewer cohort) freeze longer because no reviewer-cohort wakes to comment. evawong-oai #21184 (Windows-metadata-sentinel, very-niche surface) and Sameerlite #27185 (audio_transcription/Riva STT, very-niche surface) both freeze ≥210m at tick-7 — **consistent with H698's surface-isolation-prolongs-freeze prediction**.
- **CONFIRMS synth-695 sub-class E discreteness**: sub-class E events (Add.358 evawong-oai N=5 mass-touch on Windows-metadata, morgmart N=7 on UI-polish) are **single-surface saturation** events — H698 assigns them low-entropy = **0.0 bits surface-entropy** (all-same-surface). These are degenerate cases of the wave-entropy spectrum.

## Falsifiable predictions (P-698)

- **P-698.A (Add.360 wave-3 surface-entropy H(W₃) > H(W₁) = 1.50 bits, prior 0.55)** — un-coupling continuation predicted under H698.
- **P-698.B (Add.360 wave-3 surface-entropy H(W₃) ≥ H(W₂) = 2.32 bits, prior 0.30)** — strict monotone-rising entropy is a strong claim; pull-back to mean expected.
- **P-698.C (Add.360 wave-3 includes ≥1 PR on a surface NOT seen in wave-1 ∪ wave-2 = {UI-feature, CI, Core/skills, Models/registry, Telemetry, UI-layout, Provider, Core/message-queue}, prior 0.50)** — surface-pool widening.
- **P-698.D (the ONE NEW SURFACE in wave-3 (if P-698.C realizes) is `security/auth` — synth-685's class, prior 0.35)** — recurrence of the original surface-cluster type.
- **P-698.E (within Add.360, ≥2 PRs of any single force-push wave share a surface, prior 0.40)** — partial collapse of pure-scatter regime predicted by mean-reversion.
- **P-698.F (joint wave-1+wave-2+wave-3 unique-surface count ≥ 8 by Add.360, prior 0.50)** — currently 7 unique surfaces (UI-feature, CI, Core/skills, Models/reg, Telemetry, UI-layout, Provider/inf, Core/msg-queue — actually already 8); P-698.F **PRE-REALIZED** at observation.
- **P-698.G (force-push events on `security/auth` surface within next 2 ticks, prior 0.40)** — combines synth-685 surface-class persistence with H697 author-pool exhaustion timing.
- **P-698.H (next force-push by evawong-oai (sub-class E stack) targets a wave-3 — i.e., breaks the Windows-metadata stack as part of a wave, prior 0.25)** — niche-surface PRs may take longer to attract reviewer attention; if they do, they typically join larger waves.
- **P-698.I (surface-entropy of any future wave correlates negatively with author-overlap percentage with prior wave at Pearson r ≤ −0.4, prior 0.40)** — cross-axis hypothesis: when author-pool starts to repeat, surface-pool also starts to repeat.

## Operational consequence for dispatcher

- **Two-axis classification of force-push waves**:
  - Axis A (author-rotation): ranges from "same-author-doublet" (low rotation) to "fully-disjoint" (high rotation); synth-697's metric.
  - Axis B (surface-scatter): ranges from "single-surface mass-touch" (sub-class E, 0 bits) to "max-entropy scatter" (log₂N bits); this synth's metric.
- **Wave taxonomy**:
  - Low-A + Low-B = sub-class E (single author, single surface, head-frozen N≥5 metadata mass-touch, e.g., evawong-oai Add.358, morgmart Add.358).
  - Low-A + High-B = single-author surface-jumping (e.g., synth-686 multi-iterating-leg multi-PR-mode N=4 across surfaces).
  - High-A + Low-B = **wave-1 (Add.358) — coupled-cohort UI-cluster wave**.
  - High-A + High-B = **wave-2 (Add.359) — un-coupled scatter echo**.
- These four quadrants form the W17 force-push event taxonomy. Each tick can be classified onto this 2D map, providing a compact dispatcher signal.

**Cross-references**: synth-697 (orthogonal axis), synth-696 (parent wave-1), synth-695 (sub-class E low-entropy degenerate case), synth-694 (freeze power-law context), synth-685 (security-surface cluster sub-class), synth-687 (multi-iterating-leg surface-coupling claim), synth-688 (sub-mode-4 saturation context).
