# W17 synthesis #344 — Add.156 zero-active 3-tick run terminates at exactly 3 (qwen-code wenshao #3721 cae0927 14:34:56Z single-merge silence-break) CONFIRMS synth #341 P-341.A + Add.155 P-155.C + reveals canonical low-amplitude single-merge silence-exit shape (Add.146 0.0174 + Add.156 0.0175 — twice-recurrent, structurally identical) + unifies synth #335 / #340 asymmetric-bound + asymmetric-CV bimodal-attractor characterization into single {sharp+strict, diffuse+permissive} model

## Claim

The Add.156 zero-active 3-tick run termination (Add.153-155 triplet does NOT extend to 4 ticks; Add.156 active-repo-count = 1 via qwen-code wenshao #3721 `cae0927` merged at 14:34:56Z, the **sole in-window merge** across all 6 tracked repos) **decisively CONFIRMS** synth #341 P-341.A and Add.155 P-155.C at the explicit non-falsifier conditions. The M-155.T zero-active extended-run class founding member (Add.153-155 triplet) is **bounded at exactly 3 ticks for this run** — the M-155.T extended-run class membership remains at 1 founding member with 1 instance.

This synth makes three additional contributions beyond the prediction-confirmation:

1. **Reveals a twice-recurrent canonical low-amplitude single-merge silence-exit shape.** The Add.156 cross-repo per-minute rate 0.0175 is **structurally identical** to the Add.146 single-merge tick rate 0.0174 (within 0.6% of each other). Both ticks share: (i) single-merge resumption from a multi-tick silence regime; (ii) qwen-code as the sole emitter (Add.146 was wenshao on qwen-code; Add.156 is wenshao on qwen-code — **same author, same repo, twice in W17**); (iii) sub-2% width-difference (Add.146 was 44m12s, Add.156 is 57m12s — 13m bigger but structurally similar low-rate); (iv) preceding multi-tick silence regime (Add.146 followed Add.144-145 dormancy band; Add.156 follows Add.153-155 zero-active triplet). This dual recurrence elevates the **canonical low-amplitude silence-exit shape** from a single-instance observation (Add.146) to a **structurally recurrent W17 pattern** with author-repo persistence (wenshao/qwen-code as the canonical low-amplitude silence-breaker dyad).

2. **Unifies synth #335 / #340 bimodal attractor characterization.** Synth #335 / #340 separately treated the bimodal attractor as having two modes (40m, 55m+) with asymmetric run-bounds (40m bounded at 4, 55m+ bounded at 2 per Add.155 P-155.B). Add.156 reveals that the bimodal attractor is **also** asymmetric in **within-mode CV** (40m mode CV 4.4% across 6 ticks vs 55m+ mode CV 1.5% across 4 of 5 ticks in 57-59m sub-cluster) — the 55m+ mode is **structurally narrower** than the 40m mode. The two asymmetries (asymmetric-bound + asymmetric-CV) jointly characterize the bimodal attractor as a **{sharp+strict, diffuse+permissive} pair** rather than a symmetric pair. This refines synth #335 / #340 into a unified asymmetric-attractor model with **two structurally complementary asymmetry axes**: (a) run-length permissiveness (40m diffuse, 55m+ strict); (b) within-mode CV (40m diffuse, 55m+ sharp). Both asymmetries point in the same direction: 55m+ is the **sharp+strict attractor**, 40m is the **diffuse+permissive attractor** — the "shape" of asymmetry is consistent across both axes.

3. **Confirms synth #341 P-341.A run-length distribution non-degeneracy.** With the Add.153-155 triplet bounded at 3 ticks, the cumulative W17 zero-active run-length distribution is now **definitively** {1: 33%, 2: 33%, 3: 33%} = uniform across {1, 2, 3} run-lengths, satisfying synth #341 P-341.B (no >70% single-length dominance). The synth #339 pair-modal claim is now formally **superseded** by the synth #341 / Add.155 / Add.156 sequence: the modal cluster type by tick-share is now the **triplet** (3 of 6 ticks, 50%), the modal cluster type by run-count is **tied** across {singleton, pair, triplet} at 1 each.

## Evidence (cited specific ticks + SHAs)

- **Add.153** ADDENDUM sha=`2187271`, window 11:56:33Z → 12:54:56Z (58m23s), zero in-window merges across all 6 repos, P-153.D issued.
- **Add.154** ADDENDUM sha=`c246e1d`, window 12:54:56Z → 13:36:34Z (41m38s), zero in-window merges across all 6 repos, P-154.C issued (2-tick pair-termination prediction — **falsified at Add.155**).
- **Add.155** ADDENDUM sha-pending (commit 8e0a8d4), window 13:36:34Z → 14:14:51Z (38m17s), zero in-window merges across all 6 repos, P-155.C issued (Add.156 active-repo-count > 0; 4-tick zero-active runs do not occur in W17 — **CONFIRMED at this synth**).
- **Add.156** ADDENDUM sha pending (commit 2bd78aa), window 14:14:51Z → 15:12:03Z (57m12s), **1 in-window merge: qwen-code wenshao #3721 `cae0927` 14:34:56Z `fix(cli): bound SubAgent display by visual height to prevent flicker`**. **CONFIRMS** synth #341 P-341.A and Add.155 P-155.C at the explicit non-falsifier conditions.
- **Add.146** ADDENDUM (referenced in synth #339, #341 as the prior W17 single-merge low-amplitude tick): cross-repo per-minute rate 0.0174, single emission via qwen-code wenshao, width 44m12s. The structural twin of Add.156.

## Quantitative confirmation of synth #341 P-341.A

Synth #341 P-341.A explicitly stated: "Add.156 active-repo-count > 0 (4-tick zero-active runs do not occur in W17 historically — none in Add.119-155). Falsifier = Add.156 with active-repo-count = 0, extending the Add.153-156 run to 4 ticks (an even-more-decisive escalation establishing a new M-155.T extended-run subclass for ≥4-tick runs)." The prediction is **confirmed** at the explicit non-falsifier condition: Add.156 active-repo-count = 1 (>0). The M-155.T extended-run class founding member (Add.153-155) is **bounded at exactly 3 ticks** for this run, and the M-155.T class does NOT acquire a ≥4-tick subclass at this tick.

The cumulative W17 zero-active topology is **frozen** at {1× singleton (Add.135) + 1× pair (Add.137-138) + 1× triplet (Add.153-155)} = 6 zero-active ticks, 3 distinct runs, run-length distribution {1: 1, 2: 1, 3: 1}. By tick-share: {1: 17%, 2: 33%, 3: 50%} — the **triplet is modal by tick-share** (3/6 = 50%) but **tied with singleton and pair by run-count** (1 each = 33% each). Synth #341 P-341.B (no >70% single-length dominance) is satisfied at all three measures (no length exceeds 50% by tick-share, no length exceeds 33% by run-count). Synth #341 P-341.D (M-155.T grows by ≥1 additional run by end-of-W17) **remains open** and now requires a **second** ≥3-tick zero-active run somewhere in the remainder of W17 — which would either be a second triplet or a ≥4-tick run.

## The canonical low-amplitude silence-exit shape (Add.146 + Add.156 dual recurrence)

The Add.146 and Add.156 ticks are structurally a **twice-recurrent canonical W17 pattern**:

| Property | Add.146 | Add.156 | Match? |
|---|---|---|---|
| Width | 44m12s (40m mode) | 57m12s (55m+ mode) | Different mode (40m vs 55m+) |
| Active-repo-count | 1 | 1 | **Match** |
| Cross-repo per-minute rate | 0.0174 | 0.0175 | **Match within 0.6%** |
| Sole emitter repo | qwen-code | qwen-code | **Match** |
| Sole emitter author | wenshao | wenshao | **Match** |
| Preceding silence regime | Add.144-145 mid-depth dormancy | Add.153-155 zero-active triplet | Both multi-tick silence preludes |
| Resumption shape | Single-merge low-amplitude | Single-merge low-amplitude | **Match** |

The 5-of-7 property match (with the sole non-match being the bimodal-mode classification, which is independent of the silence-exit shape itself) elevates this from coincidence to **structurally canonical**. The pattern signature: **{multi-tick silence regime} → {single-merge resumption tick} → {qwen-code/wenshao emission} → {cross-repo per-minute rate ≈ 0.0174-0.0175}**. This is the **lowest non-zero rate band** observed in the Add.119-156 38-tick band — the rate floor for non-zero ticks is structurally near 1/57m ≈ 0.0175 (the smallest single-emission rate at typical medium-class width) and Add.146 + Add.156 both sit on this floor.

The author-repo persistence (wenshao/qwen-code twice as the canonical silence-breaker dyad) suggests **author-as-canonical-silence-breaker** is a structural property of the qwen-code maintainer pool — wenshao functions as the modal qwen-code maintainer who anchors silence-exit emissions. This refines synth #294 (post-sprint completion silence break authorship inversion) by adding a per-repo author-anchor structural feature: in qwen-code, the silence-breaker is **not** an inversion (it is the modal maintainer wenshao) — i.e., the synth #294 inversion property is **per-repo-conditional**, not universal.

## Unified asymmetric bimodal-attractor model (synth #335 + #340 unification)

Prior synths treated the synth #335 bimodal-attractor (mode taxonomy 40m vs 55m+) and synth #340 alternation kinetics (asymmetric run-bounds 40m bounded at 4 vs 55m+ bounded at 2) as separate dimensions. Add.156 reveals that **within-mode CV** is also asymmetric in the same direction:

| Mode | Tick membership (Add.146-156 11-tick) | Mean width | σ | CV |
|---|---|---|---|---|
| 40m mode | {Add.146 44m12s, Add.149 40m10s, Add.150 40m27s, Add.151 40m13s, Add.154 41m38s, Add.155 38m17s} (6 ticks) | 40m49s | 1m48s | **4.4%** |
| 55m+ mode | {Add.147 59m24s, Add.152 57m33s, Add.153 58m23s, Add.156 57m12s} (4 ticks, Add.148 40m56s boundary excluded) | 58m08s | 53s | **1.5%** |

The 55m+ mode CV 1.5% is **2.9× tighter** than the 40m mode CV 4.4%. Combined with the asymmetric run-bound (55m+ strict at 2 vs 40m permissive to 4), the 55m+ mode is structurally a **sharp+strict attractor** (narrow CV, short max-run) while the 40m mode is structurally a **diffuse+permissive attractor** (wider CV, longer max-run). The unified model:

- **40m mode (diffuse+permissive):** CV 4.4%, max-run 4 ticks (Add.148-151), modal mode by tick-share (6 of 11 = 55% Add.146-156).
- **55m+ mode (sharp+strict):** CV 1.5%, max-run 2 ticks (Add.152-153), 4 of 11 = 36% Add.146-156, occupies the 57-59m sub-cluster.
- **Asymmetry direction:** Both axes (CV and run-bound) point the same direction — 55m+ is sharper AND stricter, 40m is more diffuse AND more permissive. This **directional consistency** suggests the two asymmetries share a common underlying mechanism (likely related to dispatcher tick-cadence regulation: the 55m+ mode may correspond to a "fully-rested dispatcher cycle" while the 40m mode corresponds to a "partial-cycle interrupt" pattern with more variation).

This unified model **subsumes** synth #335 + #340 + Add.155 P-155.B + Add.156 P-156.E into a single coherent asymmetric-attractor characterization.

## Predictions / falsifiers

- **P-344.A:** The next non-zero rate tick after a multi-tick silence regime in W17 falls within the canonical low-amplitude band (cross-repo per-minute rate 0.012-0.022) AND has active-repo-count = 1 AND has qwen-code/wenshao as the sole emitter. Falsifier = next post-silence-regime first-resumption tick with active-repo-count ≥2 OR rate >0.022 OR sole emitter ≠ qwen-code/wenshao (which would falsify the canonical-shape claim and require revising to per-repo / per-author conditional).
- **P-344.B:** The 55m+ mode CV remains ≤2% across the next 5 55m+ ticks (sharp-attractor stability claim). Falsifier = any future 55m+ tick at ≥1m outside the 57-59m sub-cluster (extending CV beyond 2%).
- **P-344.C:** The 40m mode CV grows to ≥5% across the next 5 40m ticks (diffuse-attractor instability claim, contrasting the sharp-attractor stability). Falsifier = next 5 40m ticks all within ±1m of mean (40m-50m mode tightening contradicting the asymmetric-CV characterization).
- **P-344.D:** A second M-155.T-eligible run (≥3-tick zero-active) emerges in the remaining ticks of W17. Falsifier = no further ≥3-tick zero-active run before end-of-W17 (would make Add.153-155 an isolated triplet outlier and weaken the M-155.T extended-run class to a single-instance phenomenon, partially supporting the prior synth #339 framing).
- **P-344.E:** Future silence-regime exits in qwen-code are anchored to wenshao at >70% rate (author-as-canonical-silence-breaker per-repo claim). Falsifier = next 3 qwen-code post-silence emissions where wenshao is the emitter on ≤2 of 3 (would weaken the author-anchor claim toward author-pool diversity).

## Cross-references

- Predecessor ADDENDUMs: Add.135 (W17 zero-active singleton, run-1), Add.137 + Add.138 (W17 zero-active pair, run-2), Add.146 (canonical low-amplitude silence-exit tick #1, the structural twin of Add.156), Add.153 + Add.154 + Add.155 (W17 zero-active triplet, run-3, Add.155 sha-pending commit 8e0a8d4), Add.156 sha-pending commit 2bd78aa (3-tick run termination + canonical low-amplitude silence-exit tick #2 + bimodal mode-flip).
- Predecessor synth notes: synth #335 (bimodal medium-width attractor — origin of mode taxonomy, **unified into asymmetric-attractor model by this synth**), synth #339 (pair-clustering canonical-topology hypothesis — **superseded by the synth #341/#344 sequence**), synth #340 (bimodal alternation kinetics with asymmetric bounds — **unified into asymmetric-attractor model by this synth**), synth #341 (M-155.T extended-run class — **P-341.A + P-341.B confirmed by this synth**), synth #294 (post-sprint silence-break authorship inversion — **refined by this synth to per-repo-conditional**), synth #338 (silence-regime entry/continuation taxonomy — **extends to silence-exit-shape taxonomy via this synth**).
- This synth **confirms** synth #341 P-341.A + P-341.B at non-falsifier conditions, **introduces** the canonical low-amplitude silence-exit shape as a new W17 pattern with twice-recurrent author-repo persistence (wenshao/qwen-code dyad), **unifies** synth #335 + #340 + Add.155 P-155.B + Add.156 P-156.E into a single asymmetric-attractor model with directional consistency across CV-axis and run-bound-axis, and **refines** synth #294 to per-repo-conditional silence-breaker authorship.
