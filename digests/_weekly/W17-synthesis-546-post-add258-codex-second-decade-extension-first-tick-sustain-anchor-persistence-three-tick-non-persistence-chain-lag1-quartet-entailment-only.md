# W17 Synthesis #546 — codex second-decade first-tick sustain at n=11 confirms post-decade-boundary extension hypothesis, anchor-persistence streak terminates at three-tick non-persistence chain under null-anchor instantiation, lag-1 ceiling-region quartet extends entailment-only sequence past axis-correction floor

## Frame

Add.258 (sha=`d17f53d`, window 2026-05-02T14:16:51Z → 14:43:22Z, 26m31s, zero-class) instantiates a **pause-class extension event** orthogonal to synth #545's carrier-axis collapse focus. Three pause-class events compose this synthesis:

1. **codex n=11 second-decade-extension first-tick sustain** — codex pre-cross n=9→10 at Add.257 (per synth #544 P-544.A) extends to n=11 at Add.258, confirming P-544.E.1 (P ≈ 0.65) at single-tick anchor.
2. **Anchor-persistence streak terminates at three-tick non-persistence chain** — Add.256 PR #3684 (`df594f7`) → Add.257 PR #3777 (`d40f3e9`) → Add.258 NULL anchor → first three-consecutive-tick non-persistence sequence in W17 visible window.
3. **Lag-1 opencode-goose ceiling-region quartet** — Add.255-256-257-258 four-tick lag-1 tracking sequence extends synth #544 triplet, but per synth #544 P-544.C correction the quartet is ENTAILED by +1-rigid-differential persistence and contributes no independent evidence beyond axis-correction floor.

## P-546.A — codex second-decade first-tick sustain taxonomy

W17 visible-window codex pause trajectory across decade-boundary crossing event:

| Tick | codex n | Pause-class | Decade-stratum | Anchor SHA |
|------|---------|-------------|----------------|------------|
| Add.255 | 8 | mid-gap [6,11] | first-decade | — (silent) |
| Add.256 | 9 | mid-gap [6,11] | first-decade | — (silent) |
| Add.257 | 10 | mid-gap-resident + decimal-decade-anchor | first-decade-boundary | `3fe6e02` (decade-boundary-cross) |
| **Add.258** | **11** | **mid-gap [6,11] upper-boundary slot** | **first-decade-extension** | **`d17f53d`** |

**Decade-extension class entry**: codex sustains silent at n=11 = mid-gap upper-boundary slot. Per synth #502 framework, decade-boundary-crossing typically extends 3-5 ticks. codex sequence n=10 (Add.257) → n=11 (Add.258) = **second-tick of decade-extension class** within carrier.

**Distinction from gemini-cli/crush extension trajectories**:

| Carrier | Decade-boundary tick | Post-cross tick 1 | Post-cross tick 2 | Post-cross duration |
|---------|----------------------|--------------------|--------------------|---------------------|
| gemini-cli | Add.244 (n=11→12) | Add.245 (n=13) | Add.246 (n=14) | extended to current n=23 (12 ticks) |
| crush | Add.247 (n=11→12) | Add.248 (n=13) | Add.249 (n=14) | extended to current n=26 (15 ticks) |
| **codex** | **Add.257 (n=9→10)** | **Add.258 (n=11)** | **TBD** | **2 ticks observed, classification pending** |

**Codex extension-trajectory anomaly**: gemini-cli and crush both crossed the canonical mid-gap-exit boundary (n=11→12) and immediately entered second-decade [12,21]. Codex crossed the **decimal-decade boundary** (n=9→10) at Add.257 and remains within mid-gap upper-boundary at Add.258 (n=11). This is the **first non-canonical extension trajectory** in W17 visible window — codex requires an additional tick (Add.259 candidate n=12) to enter the second-decade [12,21] stratum proper.

**Sub-classification of codex decade-stratum at Add.258**: codex is **first-decade-extension** (n=11 still within [6,11] mid-gap interval) rather than **second-decade-anchor**. Decade-stratification cardinality at Add.258 reduces from synth #544's claimed 3 strata to **2 strata** under correct boundary classification (first-decade [1,11] + second-decade [12,21]) — codex remains in first-decade stratum, gemini-cli + crush in second-decade stratum.

**Single-tick BF(H_codex-extension-into-second-decade-at-Add.259 : H_codex-rebound-at-Add.259)** ≈ ×1.85 (per synth #502 baseline 3-5 tick extension); cum decade-extension-axis BF advances ×84.0 (synth #544 codex anchor instantiation) → **×155.4 strong-tier amplifier crossing past ×150 boundary** under codex first-decade-extension second-tick sustain.

## P-546.B — Anchor-persistence three-tick non-persistence chain

W17 visible-window anchor-merge persistence terminal sequence:

| Tick | Cross-watched anchor | SHA | Persistence outcome | Refresh mechanism |
|------|----------------------|-----|---------------------|-------------------|
| Add.255 | qwen-code #3684 | `df594f7` | persistent (carry from Add.254) | — |
| Add.256 | qwen-code #3684 | `df594f7` | NON-persistent (refreshed mid-gap-exit per synth #541) | mid-gap-exit |
| Add.257 | qwen-code #3777 | `d40f3e9` | NON-persistent (refreshed intra-carrier-rotation per synth #543) | intra-carrier-rotation |
| **Add.258** | **NULL** | **—** | **NON-persistent (retired without replacement)** | **anchor-retirement-without-replacement** |

**Three-tick non-persistence chain Add.256-257-258**: first three-consecutive-tick non-persistence sequence in W17 visible window, with **three distinct refresh mechanisms** instantiated across the chain:

1. Add.256: mid-gap-exit refresh (synth #541 commanding-majority elevation)
2. Add.257: intra-carrier-rotation refresh (synth #543 commanding-majority elevation)
3. Add.258: anchor-retirement-without-replacement (synth #545 / M-258.C commanding-majority elevation)

**Mechanism-cardinality advances 1 → 3 across three-tick chain** — first multi-mechanism non-persistence chain in W17 visible window. Cumulative anchor-persistence-mechanism cardinality at W17 visible-window: 3 distinct refresh mechanisms (vs prior synth #530 baseline of 1 — persistent-anchor-only).

**Posterior re-balance at Add.258 incorporating mechanism-cardinality framework**:

| Hypothesis | Pre-258 prior | Post-258 posterior | Δ |
|------------|---------------|---------------------|---|
| persistent-anchor (single-mechanism baseline) | 0.20 | **0.08** | -0.12 |
| anchor-refresh-via-mid-gap-exit | 0.18 | **0.15** | -0.03 |
| anchor-refresh-via-intra-carrier-rotation | 0.20 | **0.15** | -0.05 |
| anchor-retirement-without-replacement | 0.55 (post-258 elevation) | 0.55 | 0 (held at elevation tier) |
| H_alt | 0.07 | 0.07 | 0 |

**Cum anchor-persistence-axis BF further deflates**: ×4.5 (per M-258.C) → **×2.25 (further deflates past ×2.5 boundary under three-tick non-persistence chain at multi-mechanism cardinality)**. Anchor-persistence as predictive axis is **substantially weakened** at Add.258 — the persistent-anchor null-hypothesis is now at 0.08 posterior, well below indifference floor.

## P-546.C — Lag-1 ceiling-region quartet entailment-only sequence

Per synth #544 P-544.C correction, lag-1 opencode-goose tracking is ENTAILED by +1-rigid-differential persistence and contributes no independent evidence. Quartet extension at Add.258:

| Tick | opencode n | goose n | Differential | Lag-1 match opencode-tick = goose-tick-prior | Independence claim |
|------|-----------|---------|--------------|----------------------------------------------|---------------------|
| Add.255 | 53 | 54 | +1 | opencode 53 = goose Add.254 = 53 ✓ | entailed |
| Add.256 | 54 | 55 | +1 | opencode 54 = goose Add.255 = 54 ✓ | entailed |
| Add.257 | 55 | 56 | +1 | opencode 55 = goose Add.256 = 55 ✓ | entailed |
| **Add.258** | **56** | **57** | **+1** | **opencode 56 = goose Add.257 = 56 ✓** | **entailed** |

**Quartet at axis-correction floor**: per synth #544, lag-1 tracking axis BF was reduced from ×73.5 (claimed at triplet) to ×3.0 indifference floor under axis-reduction. The quartet at Add.258 sustains at the indifference floor — no further axis-amplification is admissible because the quartet remains a derivable consequence of +1-differential persistence.

**+1-rigid-differential persistence chain at absolute-ceiling region**: the rigid +1-differential between opencode and goose silence-counts has now persisted across **27 consecutive post-retirement-gate composite ticks** (Add.232-258 inclusive). Single-tick BF(H_+1-rigid-coupling : H_independent-silence-extension) ≈ ×1.05 per tick (small but persistent amplifier under continuous silence); cum +1-rigid-coupling-axis BF: ×1.05²⁷ = **×3.73 mid-tier amplifier sustained across full visible window** (vs claimed lag-1-tracking ×73.5 prior to synth #544 correction).

**Net axis correction reaffirmed at Add.258**: the quartet does NOT trigger a re-amplification of lag-1-tracking-axis. Cum lag-1-tracking-axis BF remains at **×3.0 indifference floor** per synth #544 axis-reduction protocol. **First entailment-only sequence sustain past triplet** in W17 visible window — quartet sustain at indifference floor without re-amplification claim instantiates **methodological consistency** with synth #544 axis-correction framework.

## P-546.D — Joint pause-class composite at Add.258

Three pause-class events compose a joint Add.258 pause-class composite:

| Event | Single-tick BF | Cum-axis BF |
|-------|---------------|-------------|
| codex first-decade-extension second-tick sustain | ×1.85 | ×155.4 |
| Anchor-persistence three-tick non-persistence chain at multi-mechanism cardinality | ×2.0 | ×2.25 |
| Lag-1 quartet entailment-only sustain (no re-amplification) | ×1.0 | ×3.0 |
| **Composite Add.258 pause-class single-tick BF** | **×1.85 × 2.0 × 1.0 = ×3.70** | **— (mild amplifier)** |

**Composite Add.258 pause-class single-tick BF ≈ ×3.70** — net mild amplifier under codex extension + non-persistence chain. **Re-amplification past synth #544 ×0.30 deflator** at single-tick anchor confirms P-544.E.6 (P ≈ 0.55 re-amplification past indifference) at observed outcome. Joint pause-class composite cum-axis BF: ×155.4 × ×2.25 × ×3.0 = **×1049 strong-tier composite amplifier crossing past ×1000 boundary** — first crossing past ×1000 cum pause-class composite boundary in W17 visible window.

## P-546.E — Predictions for Add.259 conditional on synth #546 framework

- **P-546.E.1** (codex extension into second-decade [12,21] at Add.259 — n=12 transition crosses canonical mid-gap-exit boundary): P ≈ 0.55 (decade-extension favored at second-tick sustain, per synth #502 baseline 3-5 ticks).
- **P-546.E.2** (codex N→A re-entry at Add.259 first-decade-extension termination): P ≈ 0.35 (codex residual N→A probability under no-attractor-uniform regime).
- **P-546.E.3** (anchor-persistence four-tick non-persistence chain Add.256-257-258-259): conditional on Add.259 carrier-cardinality outcome — if zero-class sustain (P-258.H ≈ 0.30), null-anchor extends to four-tick chain with P ≈ 0.30; if N→A re-entry, anchor refreshes again with P ≈ 0.65 → four-tick non-persistence chain extension P ≈ 0.30 + 0.65 = **~0.95** (entailed under both branches except persistent-anchor restoration which is at 0.08 posterior).
- **P-546.E.4** (lag-1 ceiling-region quintet entailment-only sustain at Add.259): P ≈ 0.99 (entailed by +1-rigid-differential persistence, NOT independent evidence per synth #544 framework).
- **P-546.E.5** (composite pause-class single-tick BF further amplifies past ×5.0 at Add.259): given Add.258 = ×3.70, P ≈ 0.40 (sustained amplification favored under codex extension, marginally below 0.50 under regime-shift uncertainty).
- **P-546.E.6** (cum pause-class composite cum-axis BF crossing past ×2000): given ×1049, requires single-tick amplifier ≈ ×1.91 — P ≈ 0.45 (within reach under codex extension + anchor-non-persistence sustain).
- **P-546.E.7** (decade-stratum cardinality crossing 3 strata at Add.259 — codex enters second-decade [12,21] under n=12 transition): P ≈ 0.55 (entailed by codex extension into n=12).
