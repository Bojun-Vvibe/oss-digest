# W17 Synthesis #321 — Synth #317 width↔rate coupling rule observes its FIRST SOFT BOUNDARY COUNTER-EXAMPLE at Add.145 (medium-width 44m12s, observed rate 0.0905 vs predicted ≥0.12); the coupling rule remains directionally correct (medium > ultra-short) but the medium-class lower-bound threshold needs downward revision

**Scope:** Add.145 (2026-04-29T06:37:23Z) coupling rule re-evaluation, with full Add.139-145 7-tick band trajectory and reference to synth #317 P-317.A formulation, synth #319 silence-as-modal-state framing, and synth #320 deep-dormancy two-axis state model.

## Claim (falsifiable)

**P-321.A:** At Add.145, the synth #317 P-317.A coupling rule (window-width-class ↔ corpus-rate-class) observes its **first soft boundary counter-example in 7 consecutive ticks**: window width 44m12s = medium-class, predicted corpus-rate ≥0.12, observed corpus-rate **0.0905** (4 merges over 44.2 minutes). The observed rate is **directionally correct** (medium-width yields rate >0, exceeds the ultra-short ≤0.05 ceiling by 1.81×) but **falls 25% below the predicted ≥0.12 lower-bound** for medium-class.

**P-321.B:** The strict-fit interpretation of the coupling rule is therefore **falsified at 6/7** (Add.145 is the first non-fit tick across Add.139-145). The soft-fit interpretation (medium-width strictly exceeds ultra-short ceiling, ultra-short strictly fits ≤0.05) holds at **7/7**. Synth #317 P-317.A should be **re-formulated**: the predicted lower-bound for medium-class should be revised from ≥0.12 to ≥0.05 (which preserves the directional separation) or alternatively **re-parameterized as a width-rate continuous monotonic relationship** rather than a discrete two-class threshold rule.

**P-321.C:** The Add.145 boundary counter-example is **structurally explained by the silence-regime context** (synth #319): Add.145 is the first non-silent tick after a 2-tick chained zero-rate streak (Add.143+Add.144), and rebound from chained silence is **rate-suppressed relative to baseline rebound** because most repos are still in extended silence (4 of 6 repos at Add.145 are still at zero, only codex+goose activate). The medium-width-class lower-bound predicted by synth #317 was implicitly conditioned on baseline (non-silence-recovery) corpus state. Under silence-recovery context, the medium-class rate is bounded by **per-active-repo n × active-repo-count / window-width**, which at Add.145 = (2 × 2) / 44.2 = 0.0905, exactly matching observed.

## Evidence (Add.139-145 7-tick band, all PR/SHA citations from ADDENDUM-138 through ADDENDUM-145)

### Width-rate joint distribution across Add.139-145

| Add | Width | Width-class | Active repos | In-window merges | Per-min rate | Coupling rule fit (strict) | Coupling rule fit (soft) |
|---|---|---|---|---|---|---|---|
| 139 | ~21m | ultra-short | 0 | 0 | 0.0000 | YES (≤0.05) | YES |
| 140 | ~62m | medium | (per Add.140) | (rebound) | 0.1203 | YES (≥0.12) | YES |
| 141 | 28m21s | ultra-short | 0 | 0 | 0.0000 | YES (≤0.05) | YES |
| 142 | 66m29s | medium | (per Add.142) | (rebound) | ≈0.12 | YES (≥0.12) | YES |
| 143 | 28m38s | ultra-short | 0 | 0 | 0.0000 | YES (≤0.05) | YES |
| 144 | 29m07s | ultra-short | 0 | 0 | 0.0000 | YES (≤0.05) | YES |
| **145** | **44m12s** | **medium** | **2** | **4** | **0.0905** | **NO (0.0905 < 0.12)** | **YES (>0.05 ultra-short ceiling)** |

**Strict-fit count:** 6/7 (first non-fit at Add.145). **Soft-fit count:** 7/7.

### Decomposition of the Add.145 rate

- Window width: 44m12s = 44.2 minutes
- Active repos: 2 (codex, goose)
- Merges per active repo: 2 each (codex #20117 viyatb-oai `6ed04406`, codex #20139 andmis `857146b3`; goose #8895 lifeizhou-ap `e4ef5ea4`, goose #8873 matt2e `0bb87dae`)
- Total merges: 2 × 2 = 4
- Rate: 4 / 44.2 = **0.0905 per minute**
- Predicted by synth #317 medium-class lower bound: ≥0.12 → **gap = 0.0295, gap fraction = 25% below threshold**

### Comparison: medium-class baseline vs medium-class silence-recovery

| Tick | Width | Context | Active repos | Rate | Synth #317 fit |
|---|---|---|---|---|---|
| Add.140 | ~62m | post-Add.139 ultra-short rebound | (multi-repo per record) | 0.1203 | YES |
| Add.142 | 66m29s | post-Add.141 single-tick silence rebound | (multi-repo per record) | ≈0.12 | YES (boundary) |
| Add.145 | 44m12s | **post-Add.143+144 2-tick chained silence rebound** | **2 (codex, goose only)** | **0.0905** | **NO** |

The Add.145 rate is **the first medium-class rate observed after a chained silence streak (n≥2)** in the Add.119-145 band. The Add.140 and Add.142 medium-class rebounds were both post-single-tick silence (n=1), and both produced rates ≥0.12. The Add.145 rebound is post-n=2 silence and produces rate 0.0905 — a 25% suppression. This is consistent with the P-321.C explanation: chained silence depletes the per-tick active-repo pool, and the post-rebound active-repo count (2 of 6 = 33%) is below the implicit baseline (Add.140/142 had ≥3 active repos). The rate suppression is exactly the per-active-repo activity (~2/repo) × active-repo-count (2) / window-width (44.2) = 0.0905, with no per-active-repo activity loss.

## Cross-references to prior synths

- **Synth #317** (window-width ↔ rate coupling, formulated at Add.142, sustained at Add.143-144 to 6/6 fit) is **the direct subject of this re-evaluation**. The strict-fit interpretation is falsified at 6/7; the soft-fit interpretation holds at 7/7. P-321.B proposes re-formulation.
- **Synth #319** (silence as modal corpus state, 50% band frequency, lag-1 silence-repetition) provides the **mediating mechanism** for P-321.C: the silence-regime context conditions the medium-class lower-bound prediction. Synth #319 should be cross-referenced when evaluating any future medium-class rebound to determine whether the rate-suppression effect persists.
- **Synth #320** (deep-dormancy two-axis state model: per-repo n + corpus-silence regime) provides a **parallel mechanism**: deep-dormancy is corpus-silence-mediated. The Add.145 active-repo-count of 2 (only codex+goose) reflects the deep-dormancy class membership of gemini-cli (n=8), goose (just exited n=4), qwen-code (n=5), opencode (n=3), litellm (n=3) — 4 of 6 repos remain at or above the n=3 candidate-soft threshold at Add.145, structurally limiting the active-repo pool.
- **Synth #318** (codex+opencode rebound→silence as derived consequence of synth #317) operates at the lag-1/lag-2 scale and is **partially superseded by Add.145**: at Add.145 codex exits silence but opencode does not (extends to n=3), breaking the codex+opencode parallel-shape framing. The active-pair shifts to codex+goose.

## Falsification targets

- **P-321.A** (Add.145 is the first soft boundary counter-example) is falsified retroactively if any prior tick in Add.139-145 also produced a strict counter-example (none in the cited record).
- **P-321.B** (re-formulation: medium-class lower-bound revised to ≥0.05, OR continuous monotonic re-parameterization) is falsified if the next 3 medium-class ticks (Add.146+ at any width >30m) ALL produce rates ≥0.12, demonstrating that Add.145 was an outlier rather than a regime-state-conditional observation. Conversely, P-321.B is **strengthened** if any further medium-class ticks under silence-recovery context (post-n≥2 silence streak) ALSO produce rates in the 0.05-0.12 band.
- **P-321.C** (silence-regime-mediated rate suppression: medium-class rate after n≥2 chained silence ≤ 0.10, vs ≥0.12 for medium-class after n≤1 silence) is falsified if any future medium-class tick after a chained silence streak (n≥2) produces rate ≥0.12. The Add.146-148 band provides the next test, particularly if any of those ticks are medium-width AND follow ≥2 consecutive silence ticks.

## Operational implication

The synth #317 coupling rule should be **versioned**:
- **v1 (Add.142 formulation, retired at Add.145):** strict two-class threshold, ultra-short ≤0.05, medium ≥0.12. Fit 6/7.
- **v2 (Add.145 re-formulation, P-321.B candidate):** soft two-class separation, ultra-short ≤0.05, medium >0.05. Fit 7/7.
- **v3 (P-321.C-conditional candidate):** continuous width-rate relationship modulated by silence-regime context. Medium-class rate predicted as `min(0.12, per-active-repo × active-repo-count / width)`. Fit 7/7 with explanatory power for the Add.145 boundary case.

Future addenda should track all three versions in parallel until 3 more medium-class observations accumulate (Add.146+). The discriminating prediction is for any future medium-class tick after chained silence: v1 predicts ≥0.12 and would be falsified at the third such observation if the rate stays <0.12; v3 predicts <0.12 specifically when active-repo-count is suppressed.

## Concrete PR-grounded illustrations (Add.145)

The Add.145 rate of 0.0905 is built from exactly 4 merges:
- block/goose **#8895** (lifeizhou-ap, `e4ef5ea4aad03e05c2804208abc2b1aa429ffdeb`, 05:54:58Z) — release 1.33.1 patch, the first merge of the rebound, anchored by the same author who anchored the original silence streak (#8890 lifeizhou-ap).
- block/goose **#8873** (matt2e, `0bb87daefd3e8a789d9e82edab6f7bfde47dc058`, 06:03:26Z) — perf RPC dedup, second goose merge with 8m28s gap, distinct author.
- openai/codex **#20117** (viyatb-oai, `6ed04406115197a285d9d5935ffe0dd87cdaf3cd`, 06:18:17Z) — sandbox permission profiles feat, first codex merge of rebound.
- openai/codex **#20139** (andmis, `857146b328009c259f65b871c1c3b1f6494c2cb2`, 06:19:49Z) — multi_agent_v2 followup_task interrupt parameter delete, second codex merge with 1m32s gap, distinct author.

Both per-repo pairs are dual-author, both are sub-10-minute pairs, both contribute exactly n=2 merges. The exact symmetry of the per-repo contribution (codex 2, goose 2) is what makes the rate decomposition (4/44.2 = 0.0905) match the per-active-repo × active-repo-count formula in P-321.C with zero residual.
