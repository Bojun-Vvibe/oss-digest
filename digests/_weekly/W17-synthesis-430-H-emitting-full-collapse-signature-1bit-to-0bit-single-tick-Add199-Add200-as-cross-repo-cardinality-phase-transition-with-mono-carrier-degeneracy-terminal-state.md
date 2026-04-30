# W17 synthesis #430 — H_emitting full-collapse signature 1.000 → 0.000 bits at single-tick boundary (Add.199 → Add.200) as cross-repo carrier-cardinality phase-transition signature with mono-carrier degeneracy as terminal sub-state in the H_emitting trajectory across Add.190-200

**Family**: cross-repo entropy / information-metric trend (sibling of synth #426 meta-taxonomy growth-rate; sibling of synth #428 per-repo merge-rate variance; sibling of synth #412 emitting-cardinality-fraction bound-oscillation — all four are meta-metric synths over the cross-repo carrier-set time-series)

**Trigger ADDENDUM**: ADDENDUM-200 M-200.E (H_emitting collapses from 1.000 bits to 0.000 bits at single-tick boundary, first full-collapse since Add.197 mono-carrier degeneracy) + ADDENDUM-200 M-200.A (carrier-set contracts from cardinality-2 to cardinality-1).

## Motif specification

Define **H_emitting full-collapse signature** at tick t as the joint event:
1. H_emitting(t−1) ≥ log₂(2) = 1.000 bits (prior tick at cardinality-2-or-greater equipartition or near-equipartition; specifically requires multi-carrier active state)
2. H_emitting(t) = 0.000 bits (current tick at mono-carrier degeneracy; equivalently carrier-cardinality 1)
3. Inter-tick H_emitting delta = −1.000 bits or greater magnitude

This signature captures **single-tick phase-transition from multi-carrier to mono-carrier emission state** as a discrete event in the cross-repo carrier-set time-series. It is distinct from the gradual-decay sub-mode (where H_emitting contracts over multiple ticks toward but not reaching 0.000 bits).

## Instantiation at Add.199 → Add.200

**Add.199**:
- Active-emitting amplitude distribution = {codex 2/4, gemini-cli 2/4} = {0.5000, 0.5000}
- H_emitting = −(0.5·log₂(0.5) + 0.5·log₂(0.5)) = 1.000 bits (exact)
- Carrier-cardinality = 2 (per ADDENDUM-199 M-199.E)

**Add.200**:
- Active-emitting amplitude distribution = {codex 1/1} = {1.0000}
- H_emitting = −(1.0·log₂(1.0)) = 0.000 bits (degenerate)
- Carrier-cardinality = 1 (per ADDENDUM-200 M-200.E)

**Inter-tick delta**: ΔH_emitting = 0.000 − 1.000 = **−1.000 bits** (exact full-collapse from cardinality-2-equipartition to cardinality-1-degenerate). This is the **maximal possible single-tick H_emitting collapse from cardinality 2** (since H_emitting at cardinality 2 is bounded by log₂(2) = 1.000 bits, and at cardinality 1 H_emitting is degenerate at 0.000 bits — the collapse from 1.000 to 0.000 saturates the available delta range).

## Comparison to prior H_emitting full-collapse events in Add.190-200 11-tick window

H_emitting trajectory over Add.190-200 (computed from ADDENDUM per-tick active-amplitude distributions):

| Tick | Carrier-cardinality | H_emitting (bits) | ΔH from prior | Full-collapse signature? |
|------|--------------------:|-------------------|---------------|--------------------------|
| Add.190 | 0 | undefined (no carriers) | N/A | N/A |
| Add.191 | 1 | 0.000 | undefined | N/A (prior cardinality 0) |
| Add.192 | 1 | 0.000 | 0.000 | No (mono → mono) |
| Add.193 | 1 | 0.000 | 0.000 | No |
| Add.194 | 3 | log₂(3)·norm ≈ 1.557 (codex 3, litellm 1, gemini-cli 4) → distribution {3/8, 1/8, 4/8} → H = 1.406 | +1.406 | N/A (expansion, not collapse) |
| Add.195 | 2 | distribution {codex 2/7, gemini-cli 5/7} = {0.286, 0.714} → H = 0.863 | −0.543 | No (cardinality preserved at 2 → 2; not collapse) |
| Add.196 | 3 | distribution {codex 8/13, litellm 4/13, gemini-cli 1/13} = {0.615, 0.308, 0.077} → H = 1.336 | +0.473 | N/A (expansion) |
| Add.197 | 3 | distribution {codex 1/8, litellm 5/8, gemini-cli 2/8} = {0.125, 0.625, 0.250} → H = 1.299 | −0.037 | No (cardinality preserved) |
| Add.198 | 2 | distribution {litellm 2/7, gemini-cli 5/7} = {0.286, 0.714} → H = 0.863 | −0.436 | No (cardinality 3 → 2; no full collapse) |
| Add.199 | 2 | distribution {codex 2/4, gemini-cli 2/4} = {0.5, 0.5} → H = 1.000 | +0.137 | N/A (expansion) |
| **Add.200** | **1** | **distribution {codex 1/1} = {1.0} → H = 0.000** | **−1.000** | **YES (cardinality 2 → 1, prior H ≥ 1.0)** |

**Add.200 is the SOLE full-collapse-signature event in the Add.190-200 11-tick window**. Prior cardinality-contraction events (Add.196 → Add.197 cardinality preserved at 3; Add.197 → Add.198 cardinality 3 → 2 with H 1.299 → 0.863 partial-collapse not full; Add.195 → Add.196 cardinality 2 → 3 expansion) all fail at least one signature condition.

The full-collapse signature is therefore **rare-event** at Add.190-200 sample-density (1 event per 11 ticks = base rate ≈ 0.091).

## Generalization: cross-tick H_emitting jump-statistics within Add.190-200

Compute |ΔH_emitting| sequence Add.190-200 (where defined):
{undefined, 0.000, 0.000, 0.000, 1.406, 0.543, 0.473, 0.037, 0.436, 0.137, **1.000**}

|ΔH| ordering (descending): 1.406 (Add.193→194), **1.000** (Add.199→200), 0.543, 0.473, 0.436, 0.137, 0.037, 0.000, 0.000, 0.000.

The Add.199 → Add.200 |ΔH| = 1.000 bits is the **2nd-largest absolute H_emitting jump in Add.190-200**, behind only the Add.193→194 multi-carrier emergence (cardinality 1 → 3, H 0.000 → 1.406). The full-collapse jump magnitude approaches the maximum-possible inter-tick H delta within the observed cardinality range (max possible at cardinality ≤ 3 with watched-set cardinality 6 is log₂(6) = 2.585 bits).

## Phase-transition interpretation

The full-collapse signature at Add.199 → Add.200 admits a **phase-transition reading**: the cross-repo emission state transitions from a **multi-carrier-equipartition phase** (Add.199: 2 active repos at equal amplitude, maximum-entropy state at cardinality 2) to a **mono-carrier-degenerate phase** (Add.200: 1 active repo at sole-emitter, zero-entropy state at cardinality 1). The transition is single-tick (no intermediate cardinality-2-non-equipartition state observed), suggesting the multi-carrier-equipartition state is **not a stable attractor** at small carrier-cardinality — equipartition at cardinality 2 is transient, with full-collapse to mono-carrier as the most-likely n=1 successor (rather than re-equipartition or symmetric-rotation).

This reading is consistent with synth #428's classification of codex/litellm as **bursty Class A** repos (CV ≈ 0.97-0.98) — bursty processes naturally exhibit phase-transition-like emission patterns where active-state and silent-state alternate at tick boundaries. The Add.199 → Add.200 collapse is the **codex burst manifesting at sole-carrier mode** while the gemini-cli moderate-sustained Class B regime undergoes its first cohort-zero in the 7-tick Add.194-200 window (per synth #428 P-428.E confirmation in ADDENDUM-200).

## H_silent counterpart

The H_silent counterpart trajectory over Add.190-200 (silent-set cardinality at each tick is 6 minus carrier-cardinality):

| Tick | Silent-cardinality | H_silent = log₂(silent-card) (bits) |
|------|-------------------:|--------------------------------------|
| Add.190 | 6 | 2.585 |
| Add.191-193 | 5 | 2.322 |
| Add.194 | 3 | 1.585 |
| Add.195 | 4 | 2.000 |
| Add.196-197 | 3 | 1.585 |
| Add.198-199 | 4 | 2.000 |
| **Add.200** | **5** | **2.322** |

H_silent at Add.200 EXPANDS to 2.322 bits (from Add.199 2.000 bits, +0.322 bits) at the same tick H_emitting collapses to 0.000 bits — the **complementary information-content shifts from the active to the silent partition** as carrier-cardinality contracts. The joint H_total = H_emitting + H_silent at Add.199 → Add.200 = (1.000 + 2.000) → (0.000 + 2.322) = 3.000 → 2.322 bits — joint entropy contracts by **−0.678 bits** at the phase-transition (full-collapse is information-destroying at the joint level, not merely information-redistributing).

## Predictions (P-430.X)

- **P-430.A** (>55%): The full-collapse signature does NOT recur at Add.201 — phase-transition events are typically followed by re-equilibration; the next full-collapse is expected at ≥ n=3 horizon based on the Add.190-200 base rate (~1 per 11 ticks). Falsifier = H_emitting collapses from ≥1.000 to 0.000 again at Add.201.
- **P-430.B** (>60%): H_emitting at Add.201 ∈ [0.000, 1.585] — re-expansion bounded by carrier-cardinality at most 3 (per synth #428 active-class size). Falsifier = H_emitting > 1.585 at Add.201 (would require cardinality ≥ 4 active-emitting which is unprecedented in Add.190-200).
- **P-430.C** (>50%): The mono-carrier-degenerate state at Add.200 does NOT sustain at n=1 — H_emitting re-expands to ≥ 0.918 bits within 1-2 ticks (matches ADDENDUM-200 P-200.K confirmation expectation at consistent direction). Falsifier = H_emitting = 0.000 sustained at Add.201 (mono-carrier sustain at n=2).
- **P-430.D** (>50%): The Add.193→194 |ΔH| = 1.406 bits multi-carrier-emergence event is a more-rare class than the Add.199→200 full-collapse (multi-carrier emergence requires draws from multiple silent repos simultaneously; full-collapse requires only that 1 carrier discharge while others rest); long-window base rate of multi-carrier-emergence < base rate of full-collapse. Falsifier = a 2nd multi-carrier-emergence event at Add.201-210 (would equal or exceed the Add.199→200 full-collapse base rate).
- **P-430.E** (>55%): Joint H_total at Add.201 ∈ [2.322, 3.585] — bounded below by Add.200 reading (cardinality cannot decrease without going to silent-floor which is also low-H), bounded above by max joint entropy at cardinality (3,3) = 1.585 + 1.585 = 3.170 + extension to (4,2) = 2.000 + 1.000 = 3.000 — practical upper bound ≈ 3.585 at (3,3) max-equipartition both partitions. Falsifier = H_total < 2.0 at Add.201 (would require both partitions in degenerate or near-degenerate states simultaneously).
- **P-430.F** (>50%): Within W17 close (Add.201 to W17 end), at most 1 additional full-collapse signature occurs — phase-transition events are sparse at the W17 base rate. Falsifier = ≥ 2 additional full-collapse events Add.201 to W17 close.

## Cross-repo trend implication

Synth #430 establishes that **carrier-cardinality phase-transitions are an observable cross-repo emission-process signature** orthogonal to amplitude-based metrics (synth #428 stability-class) and membership-based metrics (synth #424 carrier-rotation 9-mode taxonomy). The H_emitting trajectory captures **emission-state shape** at the information-theoretic level, complementing the amplitude-distribution-shape captured by synth #428. The three meta-metric synths (#412 fraction-bound-oscillation, #428 amplitude-CV, #430 H-trajectory phase-transitions) form a **3-axis cross-repo emission-process characterization framework** at W17:
- Axis 1 (synth #412): emitting-cardinality-fraction at watched-set normalization → bound-oscillation regime
- Axis 2 (synth #428): per-repo-amplitude-distribution variance → stability-class partition
- Axis 3 (synth #430): cross-tick-carrier-cardinality H-trajectory → phase-transition regime

These three axes are each **time-series-derived** (not single-tick-instantaneous), distinguishing them from the per-tick-instantaneous metrics (cross-repo amplitude, mono-vs-multi-carrier indicator, etc.). The W17 cross-repo emission-process is therefore characterized at three orthogonal information-content levels, each sensitive to different sub-classes of process-shape.

## Falsifier conditions (for synth #430 motif validity)

1. If recompute of Add.190-200 cardinality time-series shows any prior full-collapse signature missed → base-rate denominator changes, "sole event in Add.190-200" claim falsifies.
2. If Add.196 → Add.197 cardinality is recomputed and found to be 3 → 1 (rather than 3 → 3) → another full-collapse instantiation in window; "sole event" claim falsifies.
3. If carrier-cardinality at Add.200 is recomputed and found to be 2 (e.g., a missed merge in another repo within the 21:41:02Z – 22:05:25Z window) → full-collapse signature falsifies at the cardinality-1 condition.

(Verified against ADDENDUM-200 per-repo amplitude data — codex=1, all other 5 repos=0; carrier-cardinality = 1 confirmed; signature valid.)

## Cross-citation

- **Trigger source**: ADDENDUM-200 M-200.E (H_emitting trajectory collapse), M-200.A (carrier-set cardinality contraction 2→1), M-200.G (recurrent-author-rest enabling sole-carrier discharge)
- **Sibling synthesis**: synth #412 emitting-cardinality-fraction bound-oscillation (sibling meta-metric on cross-repo carrier-set time-series); synth #428 per-repo merge-rate variance stability-class (sibling meta-metric on per-repo amplitude time-series); synth #426 meta-taxonomy synth-numbering growth-rate (sibling meta-meta-metric on synth-numbering); synth #424 9-mode carrier-set taxonomy (foundation for cardinality-transition modes)
- **Anchor citations**: ADDENDUM-190 through ADDENDUM-200 raw per-repo amplitude data; ADDENDUM-194 codex 3 + litellm 1 + gemini-cli 4 (max-cardinality emergence event); ADDENDUM-196 codex 8 octuplet (max-amplitude reading within window); ADDENDUM-197 mono-carrier-codex precedent (Add.197 was sole-codex amplitude=1 alexsong-oai — prior sole-carrier instantiation at codex); ADDENDUM-200 codex sole-carrier amplitude=1 akshaynathan (current full-collapse-terminal-state)
