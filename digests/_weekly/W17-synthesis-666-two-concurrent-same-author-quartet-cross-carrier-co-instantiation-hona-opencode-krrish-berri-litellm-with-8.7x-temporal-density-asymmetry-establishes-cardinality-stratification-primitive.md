# W17-synthesis-666 — two-concurrent-same-author-QUARTET cross-carrier co-instantiation (Hona opencode + krrish-berri-2 litellm) with 8.7× temporal-density asymmetry establishes cardinality-stratification primitive (1×PENTET + 2×QUARTET concurrent across 3 carriers)

## Cross-repo synthesis

**Source**: ADDENDUM-340 (P-339.D realization — Hona #25797 closes Hona same-author intra-rolling-window QUARTET on opencode; krrish-berri-2 QUARTET on litellm carries over from Add.339 → first W17 documented case of two concurrent same-author QUARTET clusters across two carriers within single rolling window).

**Pattern observed across two carriers**:

### Carrier 1 — sst/opencode — Hona QUARTET
- #25797 head `047fdd65f296672937cc03f82f3994b8c8434002` opened 2026-05-05T01:52:44Z (`Fix workspace warp SDK null id`) — workspace-warp-SDK substrate.
- #25795 head `99c2382dc541719c1e676b0f590ee3d6232f5a41` opened 2026-05-05T01:09:56Z (`devex: Enable Electron MCP servers with DevTools debug port`) — devex-Electron-MCP substrate.
- #25792 head (Add.338 anchor) opened 2026-05-04 (~22h prior to QUARTET cap) — UI-unified-diff-newlines substrate.
- #25773 head (Add.337 anchor) opened 2026-05-04 (~26h prior to QUARTET cap) — desktop-sidecar-PATH substrate.

**Hona QUARTET temporal envelope**: ~26h rolling window, 4 disjoint substrates, mean inter-leg gap ~8.7h.

### Carrier 2 — BerriAI/litellm — krrish-berri-2 QUARTET
- #27150 head `4464035291f82afe213e996898b0425a4172ab4c` opened 2026-05-05T01:13:51Z (`fix: test commit`) — CI-test-commit substrate.
- #27148 head `31f95d9117cc85ce2ccd60b878bf4b16961daf3c` opened 2026-05-05T00:45:04Z (`fix(ui): omit unchanged allowed_routes on key update`) — UI-allowed-routes substrate.
- #27143 head `b773a178cb5744e4737804cb00d33af268a8c1e4` (Add.338 anchor) — security-secret_fields substrate.
- #27142 head `5e52132381570b148904fab0a86d7779307ca09b` (Add.338 anchor) — W3C-traceparent-session_id substrate.

**krrish QUARTET temporal envelope**: ~3h rolling window, 4 disjoint substrates, mean inter-leg gap ~1h.

### Asymmetry: 8.7× density differential

| QUARTET | Carrier | Substrate count | Temporal envelope | Mean inter-leg gap | Density (legs/h) |
|---|---|---|---|---|---|
| Hona | opencode | 4 disjoint | ~26h | ~8.7h | 0.154 |
| krrish-berri-2 | litellm | 4 disjoint | ~3h | ~1h | 1.333 |

**Density differential**: krrish QUARTET density / Hona QUARTET density = **~8.7×** — same-cardinality QUARTETs exhibit nearly an order-of-magnitude density differential across carriers within single rolling window. Both legitimately classify as same-cardinality (QUARTET=4) but represent **distinct authorial-cadence regimes**.

## Cardinality-stratification primitive (W17)

Add.340 instantiates a 3-tier cardinality stratification active simultaneously across 3 carriers:

| Tier | Author | Carrier | Cardinality | Temporal envelope |
|---|---|---|---|---|
| 1 (PENTET) | canvrno-oai | openai/codex | 5 | ~3h burst, then 4-tick head-stable basin |
| 2 (QUARTET-fast) | krrish-berri-2 | BerriAI/litellm | 4 | ~3h |
| 2 (QUARTET-slow) | Hona | sst/opencode | 4 | ~26h |
| (3+ TRIPLET candidates carry-stable) | various | various | 3 | various |

**First W17 documented case of explicit same-window cardinality-stratification across ≥3 carriers**, where:
- 1 author × PENTET (5) × 1 carrier
- 2 authors × QUARTET (4) × 2 carriers (with 8.7× density asymmetry)
- N authors × TRIPLET (3) × multiple carriers

Cardinality decreases by 1 as carrier count grows by 1 — preliminary inverse-cardinality scaling, single-instance datapoint.

## Differentiation from prior W17 same-author multi-leg primitives

- **synth-657** (cross-carrier same-author multi-leg primitive, 2-cluster instance): proposed cross-carrier same-author multi-leg pattern. synth-666 extends to 3-cluster concurrent (PENTET + QUARTET + QUARTET) on 3 distinct carriers.
- **synth-643** (single-author octuplet): cardinality-8 single-author burst on a single carrier within a single rolling window. synth-666 differs by spreading across 3 authors and 3 carriers, lower per-author cardinality but ecosystem-wide.
- **synth-664** (three-concurrent-TRIPLET+ clusters across three carriers, Add.339): predecessor cardinality stratification was PENTET + QUARTET + TRIPLET at Add.339 (canvrno-oai + krrish-berri-2 + Hona). synth-666 records the **TRIPLET → QUARTET cardinality bump on opencode/Hona** within single tick — same authors, same carriers, +1 cardinality on the lowest-tier instance, raising the 3-tier stratification floor from 3 → 4.
- **synth-91** (single-author triplet self-merge metronome): orthogonal — focused on self-merge cadence within single carrier, no cross-carrier dimension.

## Quantitative density asymmetry as a sub-primitive

The 8.7× density differential between Hona QUARTET (0.154 legs/h) and krrish QUARTET (1.333 legs/h) suggests **same-cardinality clusters are NOT cadence-equivalent across carriers/authors**. Cardinality is necessary but not sufficient for characterizing same-author multi-leg dynamics; **temporal density** is an orthogonal axis that can vary by ~order-of-magnitude even at fixed cardinality.

This is a candidate **2-axis classification scheme** for same-author multi-leg clusters:
- Axis 1: cardinality (TRIPLET, QUARTET, PENTET, ...)
- Axis 2: temporal density (legs/h, log-scaled across observed range)

W17 evidence so far places observed same-author multi-leg clusters in the density range [0.1, 2.0] legs/h, spanning ~1.3 orders of magnitude.

## Cited PRs/SHAs (verified per Add.340 capture)

**Hona QUARTET** (sst/opencode, all SHAs verified `headRefOid` per Add.340 fresh capture):
- #25797 `047fdd65f296672937cc03f82f3994b8c8434002` (workspace-warp-SDK)
- #25795 `99c2382dc541719c1e676b0f590ee3d6232f5a41` (devex-Electron-MCP)
- #25792 (UI-unified-diff-newlines, head-stable from Add.338)
- #25773 (desktop-sidecar-PATH, head-stable from Add.337)

**krrish-berri-2 QUARTET** (BerriAI/litellm, all SHAs verified `headRefOid` per Add.340 fresh capture):
- #27150 `4464035291f82afe213e996898b0425a4172ab4c` (CI-test-commit) — note: head differs from Add.339 anchor `22f280c264510ef0e5370d4e8cdc5d54943ea5ef`, indicating revision between Add.339 → Add.340.
- #27148 `31f95d9117cc85ce2ccd60b878bf4b16961daf3c` (UI-allowed-routes)
- #27143 `b773a178cb5744e4737804cb00d33af268a8c1e4` (security-secret_fields)
- #27142 `5e52132381570b148904fab0a86d7779307ca09b` (W3C-traceparent-session_id)

**canvrno-oai PENTET** (openai/codex, head-stable across Add.336–340):
- #21092, #21091, #21090, #21089, #21085 — 4-tick rolling lifespan, all head-stable.

## Predictions enabled

- **P-666.A**: third concurrent QUARTET on a third carrier within 5 ticks (extending stratification to PENTET + 3×QUARTET), prior 0.18. If realized, suggests QUARTET cardinality is approaching ecosystem-wide saturation under W17 dynamics.
- **P-666.B**: density differential between any two same-cardinality concurrent clusters will exceed 5× in ≥40% of cluster-pair observations within W17, prior 0.35. Tests whether 8.7× Hona/krrish ratio is typical or extreme.
- **P-666.C**: a new author-author pairing will produce a same-cardinality QUARTET pair with density ratio <2× within next 10 ticks, prior 0.20. Tests density-clustering vs. density-spread hypothesis.
- **P-666.D**: cardinality-stratification primitive will be observed in a different generation (e.g., 1×SEXTET + 2×PENTET + N×QUARTET) within W17 remainder, prior 0.10. Tests whether the cardinality-floor moves up over time.
- **P-666.E**: Hona QUARTET extends to PENTET within next tick (prior 0.20, mirrors Add.340 P-340.C); krrish QUARTET extends to PENTET within next tick (prior 0.15, mirrors Add.340 P-340.D). Either realization would create second-carrier PENTET, breaking canvrno-oai PENTET singleton-status.
