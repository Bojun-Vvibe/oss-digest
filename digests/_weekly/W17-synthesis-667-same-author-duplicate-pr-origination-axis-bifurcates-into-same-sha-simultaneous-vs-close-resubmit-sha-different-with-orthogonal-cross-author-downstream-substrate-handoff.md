# W17-synthesis-667 — same-author duplicate-PR origination axis bifurcates into two distinct sub-primitives (same-SHA-simultaneous vs. close-resubmit-SHA-different) and a third orthogonal cross-author downstream-substrate-handoff axis instantiates within single-author multi-leg cluster aftermath

## Cross-repo synthesis

**Source**: ADDENDUM-340 (ishaan-berri sub-10s same-SHA DOUBLET on litellm) + ADDENDUM-341 (viyatb-oai close-and-resubmit SHA-different DOUBLET on codex; jlongster cross-author substrate handoff into Hona QUARTET aftermath on opencode).

**Pattern bifurcation**: Two consecutive ticks instantiate same-author DOUBLETs that share cardinality (=2) and intra-author origin but **differ on two orthogonal axes**: (1) SHA equality, (2) state-trajectory of the leading PR. This synthesis fixes a 2-axis sub-primitive taxonomy of same-author duplicate-PR origination and adds an orthogonal third axis (cross-author downstream substrate handoff).

## Axis 1 — SHA-equality of duplicate legs

### Sub-primitive A: same-SHA-simultaneous DOUBLET (ishaan-berri, Add.340 litellm)
- BerriAI/litellm #27154 head `1c31e2ce3db530847d56472faf2352b4a27fab0f` opened 2026-05-05T01:40:45Z.
- BerriAI/litellm #27153 head `1c31e2ce3db530847d56472faf2352b4a27fab0f` opened 2026-05-05T01:40:39Z (6s before #27154).
- Both legs OPEN; identical headRefOid; title-only difference (truncated `model_prices_and_conte…` vs. backticked full title `model_prices_and_context_window.json`).
- Origin signature: **near-simultaneous (sub-10s) accidental double-submission** of the same commit head, both legs survive open.

### Sub-primitive B: close-and-resubmit SHA-different DOUBLET (viyatb-oai, Add.341 codex)
- openai/codex #21126 head `0da22772580d5b0490d6b8622ed9a3f49eef1f0b` opened 2026-05-05T02:17:38Z, **CLOSED** 2026-05-05T02:19:45Z (2m07s open-lifetime).
- openai/codex #21127 head `1ccdef222fffe45f5b881685ff0839a013b77215` opened 2026-05-05T02:20:05Z (20s after #21126 close).
- Same author (viyatb-oai), same title `fix(linux-sandbox): avoid panic on bwrap build failures`, **distinct SHAs**, **leading leg CLOSED before second leg opened**.
- Origin signature: **deliberate close-then-resubmit-with-revised-commit cycle**, leading leg actively reaped before successor opens.

### Comparison

| Sub-primitive | SHA equality | Leading leg state at successor open | Inter-leg gap | Origin interpretation |
|---|---|---|---|---|
| A (ishaan-berri) | identical | OPEN | 6s | accidental near-simultaneous double-submit |
| B (viyatb-oai) | distinct | CLOSED | 20s | deliberate close-resubmit revision cycle |

Both have inter-leg gap <30s; both are same-author; both DOUBLET cardinality. Differentiation by the SHA-equality + state-trajectory pair is necessary AND sufficient.

## Axis 2 — Cross-author downstream substrate handoff (orthogonal to Axis 1)

### Pattern (jlongster → Hona, Add.341 opencode)

- sst/opencode #25797 head `047fdd65f296672937cc03f82f3994b8c8434002` (Hona, Add.340 fresh) — `Fix workspace warp SDK null id`. Closes Hona QUARTET (#25797 + #25795 + #25792 + #25773).
- sst/opencode #25801 head `ee67ee6813d934f9859d34df352d1ee400239526` (jlongster, Add.341 fresh) — `fix(tui): fix type error for calling workspace.warp` opened 2026-05-05T02:05:37Z, MERGED 2026-05-05T02:06:35Z (58s open-to-merge).
- jlongster's substrate (`workspace.warp` type-error in TUI caller) is **directly downstream** of Hona's substrate (`workspace warp SDK null id` in SDK definition); a TUI consumer adapts to the SDK fix.
- Cross-author boundary; ~13m gap from Hona QUARTET cap to jlongster downstream patch open.

### Comparison to prior W17 substrate-cluster primitives

- **synth-666 (cardinality-stratification, Add.340)**: focused on per-author intra-cluster cardinality and density. synth-667 adds a **post-cluster cross-author propagation axis** orthogonal to per-author cardinality — same substrate-graph, different actors.
- **synth-664 (three-concurrent-TRIPLET+ clusters across three carriers, Add.339)**: three concurrent intra-author clusters but no cross-author handoff dimension. synth-667 adds the **cross-author handoff** dimension to that frame.
- **synth-89 (cross-repo author handoff identical content refile)**: orthogonal — synth-89 is identical-content refile, synth-667 is downstream-substrate-handoff (consumer adapts to producer's API change). Both are cross-author handoffs but at different content-similarity tiers.

## Combined 2-axis × handoff-presence taxonomy for same-author multi-leg DOUBLETs

| Case | Axis 1 SHA equality | Leading leg state | Axis 3 cross-author downstream handoff observed |
|---|---|---|---|
| ishaan-berri (Add.340) | same | OPEN | not observed within 1 tick |
| viyatb-oai (Add.341) | different | CLOSED | not observed within 1 tick |
| Hona QUARTET (Add.340 cap) | n/a (cluster cardinality 4, not DOUBLET) | per-leg varies | YES — jlongster #25801 Add.341 |

Hona QUARTET sits at higher cardinality but exhibits the cross-author downstream handoff axis; ishaan-berri and viyatb-oai DOUBLETs do not (yet, within 1-tick observation). This is **consistent with a cardinality-correlated handoff hypothesis**: higher-cardinality intra-author clusters are more likely to spawn cross-author downstream substrate handoffs, because they more thoroughly modify a substrate graph.

## Cited PRs/SHAs (verified per Add.340 and Add.341 captures)

**Same-SHA-simultaneous DOUBLET** (BerriAI/litellm, Add.340):
- #27154 `1c31e2ce3db530847d56472faf2352b4a27fab0f` (ishaan-berri)
- #27153 `1c31e2ce3db530847d56472faf2352b4a27fab0f` (ishaan-berri)

**Close-resubmit SHA-different DOUBLET** (openai/codex, Add.341):
- #21126 `0da22772580d5b0490d6b8622ed9a3f49eef1f0b` (viyatb-oai, CLOSED)
- #21127 `1ccdef222fffe45f5b881685ff0839a013b77215` (viyatb-oai, OPEN)

**Cross-author downstream substrate handoff** (sst/opencode, Add.340 → Add.341):
- Producer: #25797 `047fdd65f296672937cc03f82f3994b8c8434002` (Hona, workspace-warp-SDK-null-id)
- Consumer: #25801 `ee67ee6813d934f9859d34df352d1ee400239526` (jlongster, TUI workspace.warp type-error)

## Predictions enabled

- **P-667.A**: a third same-author DOUBLET will instantiate within W17 remainder that is **same-SHA + leading-leg-CLOSED** (the unfilled cell in the 2×2 SHA × state-trajectory matrix), prior 0.20. Would complete the taxonomy.
- **P-667.B**: a fourth combination (different-SHA + leading-leg-OPEN) is plausible as iterative-with-original-still-open pattern, prior 0.30 within W17.
- **P-667.C**: cross-author downstream substrate handoff occurs within ≤15m of a QUARTET-or-higher intra-author cluster cap on a second carrier within 5 ticks, prior 0.20 (P-341.E mirror).
- **P-667.D**: handoff-frequency correlates with cardinality — at TRIPLET cardinality (e.g., yuneng-berri TRIPLET on litellm Add.341), cross-author downstream handoff probability ~0.10 within 1 tick; at QUARTET ~0.20 within 1 tick; at PENTET ~0.35 within 1 tick. Tested across W17 remainder.
- **P-667.E**: ishaan-berri same-SHA DOUBLET will eventually have one leg CLOSED-as-duplicate by maintainer review within 10 ticks, prior 0.55. If realized, transitions Axis 1 case-A toward case-B retroactively (one leg CLOSED, sibling OPEN, identical SHA).
