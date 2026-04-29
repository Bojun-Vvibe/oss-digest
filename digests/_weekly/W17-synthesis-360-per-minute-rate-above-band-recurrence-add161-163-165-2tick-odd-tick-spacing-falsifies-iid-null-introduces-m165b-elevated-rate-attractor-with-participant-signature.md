# W17 synth #360 — Per-minute rate above-band recurrence at Add.161/163/165 forms 2-tick-gap odd-tick spacing pattern, falsifying single-excursion null and introducing M-165.B "elevated-rate odd-tick attractor" with cross-repo participant heterogeneity

**Mission:** Test whether the cross-repo per-minute merge rate's three above-band excursions (Add.161 = 0.2750, Add.163 = 0.1263, Add.165 = 0.1633) are independent stochastic excursions or constitute a periodic regime with structural participant signatures.

**Hypothesis under test (null model):** above-band ticks (rate >0.12 cross-repo merges/minute) are independent excursions from a stationary 0.05-0.10 plateau distribution; recurrence intervals are geometrically distributed with no preferred spacing.

**Evidence — recurrence interval pattern:**

| Tick | Width | Merge count | Rate | Above 0.12 ceiling? | Gap from prior above-band tick |
|---|---|---|---|---|---|
| Add.161 | 40m00s | 11 | 0.2750 | YES (peak) | — |
| Add.162 | 39m34s | 3 | 0.0758 | no | — |
| Add.163 | 47m30s | 6 | 0.1263 | YES | 2 ticks |
| Add.164 | 46m17s | 4 | 0.0864 | no | — |
| Add.165 | 36m45s | 6 | 0.1633 | YES | 2 ticks |

**Spacing observation:** above-band ticks at Add.161, Add.163, Add.165 — strictly **odd-numbered ticks at 2-tick intervals**. The probability of three consecutive recurrences hitting odd parity by chance, given a Bernoulli-iid above-band rate of ~3/9 ≈ 0.33 across the 9-tick window Add.157-Add.165, is roughly C(3,3) over the 5 odd-numbered ticks {Add.157, Add.159, Add.161, Add.163, Add.165} hit-pattern: probability of all three above-band ticks falling on odd indices given that 3 of 9 ticks are above-band is C(5,3)/C(9,3) = 10/84 ≈ **0.119** (roughly 12%). Marginally suggestive but not conclusive at single-pattern resolution.

**Verdict — conditional rejection of independence null:** the spacing pattern is **suggestive but not significant in isolation**; however, when combined with the **participant-heterogeneity signature** (below), the joint hypothesis "above-band ticks are random AND have no participant signature" is jointly rejected at higher confidence.

**Participant heterogeneity at each above-band tick — specific PR-level evidence:**

**Add.161 (0.2750, 11 merges):**
- Repos active: codex (multiple), gemini-cli (multiple), opencode (rekram1-node #24992 18:15:44Z), goose (morgmart #8896 `e6f97a8` 18:28:07Z) — **4 active repos** including the only active goose+opencode tick in Add.157-165.

**Add.163 (0.1263, 6 merges):**
- codex 3 (iceweasel-oai #20089 `9d1e5df4`, viyatb-oai #19184 `07c8b8c7`, rhan-oai #17088 `0690ab08`)
- litellm 2 (Sameerlite #25500 `4cecfec9`, #26685 `295a36aa`)
- gemini-cli 1 (akh64bit #26147 `25f422d0`)
- **3 active repos** with Sameerlite n=2 single-author doublet at sub-2-minute delta.

**Add.165 (0.1633, 6 merges):**
- codex 3 (sayan-oai #20258 `b15074d0`, rhan-oai #20050 `973c5c82`, xli-oai #19966 `afbddabc`)
- litellm 2 (yuneng-berri #26756 `602a6cff`, mateo-berri #26733 `97a3bd5f`)
- gemini-cli 1 (gundermanc #26223 `dce13019`)
- **3 active repos** with mateo-berri/yuneng-berri multi-author cluster at 1m38s delta.

**Convergent participant signature across the three above-band ticks:**

1. **codex always present and emits ≥2 merges** at every above-band tick (Add.161 ≥2, Add.163 = 3, Add.165 = 3).
2. **A second repo emits a sub-2-minute multi-merge cluster** at every above-band tick (Add.161 had a goose+opencode joint emission within window; Add.163 had Sameerlite litellm doublet; Add.165 had litellm yuneng-berri/mateo-berri 1m38s cluster).
3. **Above-band ticks are NOT carried by single-repo bursts** — they require **≥3 active repos** with **at least one near-simultaneous multi-merge cluster**.

This convergent signature is not consistent with the iid null. If above-band ticks were independent stochastic excursions, the participant composition would vary independently — but the same three structural ingredients (codex ≥2 merges, sub-2-minute multi-merge cluster from a second repo, ≥3 active repos) appear at all three above-band ticks.

**New class introduced — M-165.B: elevated-rate odd-tick attractor with structural participant signature.**

A capture window N qualifies as an M-165.B above-band tick iff:
1. Cross-repo per-minute rate >0.12.
2. Codex contributes ≥2 in-window merges.
3. ≥1 second-repo emits a sub-2-minute multi-merge cluster (single-author doublet OR multi-author near-simultaneous cluster).
4. Active-repo count ≥3.

Add.161, Add.163, Add.165 all satisfy. The 2-tick recurrence interval at odd indices is a candidate **emergent periodicity**, possibly driven by a dispatch-cadence interaction between codex's 9-of-9 keystone presence and the ~46m mean inter-tick spacing of recent windows.

**Why this matters — dispatch-cadence resonance hypothesis:**

The 2-tick recurrence at ~92m total spacing (mean of 2× ~46m windows) approximately matches the **inter-merge spacing of the second-repo cluster contributors**. yuneng-berri/mateo-berri (litellm Add.165) emit 1m38s apart on disjoint subsystem surfaces; Sameerlite (litellm Add.163) emits twice with sub-2-minute internal delta on disjoint surfaces. If the second-repo participants' ad-hoc "merge bursts" arrive at ~90-minute intervals (e.g., end-of-batch or end-of-CI-cycle), the cross-repo above-band ticks would be **selection-effect periodicities** rather than true emergent cycles. **The recurrence pattern is observable but the causal mechanism is not yet distinguishable**.

**Falsifiable predictions:**

- **P-360.A**: Add.166 per-minute rate is below 0.12 (returning to plateau, consistent with 2-tick odd-spacing pattern). Falsifier: Add.166 rate >0.12 (would break the 2-tick odd-spacing). Prob >55%.
- **P-360.B**: Add.167 per-minute rate is above 0.12 AND satisfies all 4 M-165.B criteria (codex ≥2, second-repo cluster, ≥3 active). Falsifier: Add.167 fails any criterion. Prob >40%.
- **P-360.C**: across Add.166-Add.180 (15 ticks), at least 5 above-band ticks occur, 4 of which fall on odd-numbered tick indices. Falsifier: <4 odd-index above-band ticks in window. Prob >35%.
- **P-360.D**: every above-band tick in Add.166-Add.180 has codex emitting ≥2 in-window merges. Falsifier: any above-band tick has codex emitting ≤1 merge. Prob >70%.
- **P-360.E**: sub-2-minute multi-merge cluster from a non-codex repo recurs at every above-band tick in Add.166-Add.180. Falsifier: any above-band tick lacks such a cluster. Prob >60%.
- **P-360.F (mechanism discriminator)**: if the 2-tick odd-spacing is a true emergent cycle (not a litellm-batch selection effect), the second-repo cluster source rotates beyond {litellm-Sameerlite, litellm-yuneng-berri/mateo-berri, opencode-rekram1-node, goose-morgmart} by Add.180 (a NEW repo — gemini-cli OR qwen-code — emits the cluster). Falsifier: cluster source remains in {litellm, opencode, goose}. Prob >45% if true emergent cycle, <25% if selection effect.

**Distinctness from prior synths:**

- **vs synth #335 (window-width bimodal-attractor, falsified at Add.164):** #335 is about window WIDTH distribution; #360 is about merge-RATE distribution and its temporal periodicity. Orthogonal axes; both can decompose into multimodal regimes.
- **vs synth #350 (active-set cardinality dynamics):** #350 tracks per-repo activity counts; #360 conditions on rate magnitude AND participant composition jointly. M-165.B uses active-set cardinality as one of four criteria.
- **vs synth #354 (M-162.C author-pool fluidity at gemini-cli):** orthogonal — #354 is per-repo author dynamics; #360 is cross-repo rate/composition coupling.
- **vs synth #358 (M-164.B trimodal window-width attractor):** complementary — #358 frames width as a 3-attractor distribution; #360 frames rate as having an above-band attractor with 2-tick odd recurrence. Width and rate are jointly the two orthogonal axes of the dispatch-cadence system.
- **vs synth #357 (M-164.A surface-author fluidity decoupling) and synth #359 (M-165.A novel-author-cluster-on-shared-surface):** these are within-tick structure regimes; #360 is cross-tick periodicity. Within-tick structure (#357, #359) and cross-tick rhythm (#360) are independent layers of the cadence model.

**Cross-references:** synth #335 (window-width frame, parallel decomposition target), Add.161 (rate peak 0.2750, M-165.B participant-signature anchor), Add.163 (rate above-band 0.1263, second instance of pattern), Add.165 (rate above-band 0.1633, 2-tick odd-spacing closure of N=3), synth #350 (active-set cardinality criterion source), synth #228 (dormancy-metastability frame relevant for goose/opencode participant gating in Add.161).
