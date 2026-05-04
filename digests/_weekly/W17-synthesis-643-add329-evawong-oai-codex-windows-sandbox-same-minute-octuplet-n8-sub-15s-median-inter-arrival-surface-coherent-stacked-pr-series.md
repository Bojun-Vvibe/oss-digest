# W17-synthesis-643 — Single-author same-second OCTUPLET (n=8) inside 68s wall-clock window on `openai/codex`, sub-15-second mean inter-arrival, surface-coherent Windows-sandbox legacy-Git stack — exceeds prior maxima for same-second-class clusters

**Anchor**: ADDENDUM-329 (2026-05-04T18:15:00Z capture, snapshot 17:32:00Z UTC).

**Subject PRs (head SHAs verified `headRefOid` from fresh `gh pr list --repo openai/codex --state all --limit 8`)**:

1. `openai/codex#21036` head `83c952f1a0b2f616924fe9129f755fb948e02b2a` — author **evawong-oai**, FRESH-OPEN 2026-05-04T17:25:39Z, title `Deny Windows protected metadata symlink targets`. **Foundation leg**: hardens symlink-target denial in the Windows sandbox metadata layer.
2. `openai/codex#21037` head `7efd618304d6febe475427cee2401c77c47e3854` — FRESH-OPEN 17:25:53Z (Δ +14s), title `Use Windows metadata targets in debug sandbox`. **Wires the foundation into debug.**
3. `openai/codex#21038` head `3e52598b46a141fe2fd9dacf72bd6465a68d2c49` — FRESH-OPEN 17:26:24Z (Δ +31s), title `Allow Windows sandbox Git signal pipes`. **Pipe-permission hardening for Git inside sandbox.**
4. `openai/codex#21039` head `0376e03e532e80f98cc27b6b4be056d148feb7ee` — FRESH-OPEN 17:26:27Z (Δ +3s), title `Add Windows legacy Git read root helpers`. **Helper-tier addition (purely additive).**
5. `openai/codex#21040` head `d2df5e4f64fb4de7f0fa007a07dfc61852bd10f4` — FRESH-OPEN 17:26:30Z (Δ +3s), title `Grant Windows legacy Git read roots`. **Consumer of the just-added helpers.**
6. `openai/codex#21041` head `b4774591d3005ba1309c9f4392583ea0706ba23f` — FRESH-OPEN 17:26:32Z (Δ +2s), title `Inject Git safe directory for Windows legacy sandbox`. **Top-of-stack: safe-directory injection sits atop read-roots.**
7. `openai/codex#21042` head `7e94300a65f36f6d0d0dae29ec1ca1bb7fce93aa` — FRESH-OPEN 17:26:44Z (Δ +12s), title `Test Windows runtime metadata target preparation`. **Test-only leg covering #21036's metadata-target plumbing.**
8. `openai/codex#21043` head `5c7bc48c98a6a0f54314bd1d997f116908b960bc` — FRESH-OPEN 17:26:47Z (Δ +3s), title `Document Windows metadata request boundary`. **Docs-only leg closing the stack with a written boundary contract.**

Wall-clock window: **17:25:39Z → 17:26:47Z = 68 seconds total**. Inter-arrival vector (s): `14, 31, 3, 3, 2, 12, 3`. Mean **9.71s**, median **3s**, max **31s**, min **2s**. The 7 inter-arrivals are bimodal: 5 are sub-15s (3, 3, 2, 12, 3 → median 3s, "mechanical batch-push regime"); 2 are 14s and 31s ("intra-batch local pause regime", probably author-side editor latency). The pattern is consistent with a **scripted `gh pr create` loop** rather than typed creation.

**Why this exceeds prior maxima**:

- Prior largest same-second-class cluster on file (synth-92) was `same-second four-pr open tuplet by single author on four disjoint surfaces` (n=4). This one is **n=8 — twice the cardinality**, *and* sustained beyond the same-second window into a 68-second-window OCTUPLET.
- Surface-disjointness ratio for synth-92 was 4/4 (purely disjoint). This OCTUPLET is **8/8 surface-coherent** (every leg is in `Windows sandbox metadata + legacy-Git permissions`), so it's the **opposite-extreme sub-class** — same observable cardinality regime, opposite coherence regime.
- Synth-93 (`first appearance author debut as four pr introduction with three pr rapid not same second burst`) had n=4 with 3-of-4 sub-second burst. This OCTUPLET has 5-of-7 inter-arrivals sub-15s, but **no two PRs share the exact second** — so it is *not* a same-second cluster, it's a **same-minute** cluster (all 8 land inside 17:25:39Z–17:26:47Z, all share the 17:25–17:26Z minute pair).
- Synth-101 (cocosheng-g quintet-debut with monotonic scope expansion) had n=5 with monotonic *scope expansion* across disjoint surfaces. This OCTUPLET has n=8 with **dependency-stacked coherent surface** — the *opposite* of monotonic scope expansion: it's monotonic scope *contraction* into one stack.

**Distinguishing structural features (vs prior n≥5 single-author clusters)**:

| Feature | this OCTUPLET (#21036–#21043) | synth-92 same-second n4 | synth-101 cocosheng-g quintet | synth-642 doudouOUC quartet |
|---|---|---|---|---|
| Cardinality | 8 | 4 | 5 | 4 |
| Window width | 68s | <1s | ~47m | 38m17s |
| Mean inter-arrival | 9.71s | 0s | ~12m | 12m45s |
| Surface coherence | 8/8 (single Windows-sandbox subsystem) | 4/4 disjoint | 5/5 disjoint | 4/4 single subsystem |
| Stack ordering | foundation→wire→permission→helper→consumer→top→test→docs | none | scope-expansion | fix→feat→refactor→feat |
| Author state | sustained-corp-author | varies | debut | sustained |
| Author email signature | `*-oai` (vendor-internal) | varies | non-corp | non-corp |
| Likely creation mechanism | scripted `gh pr create` loop | scripted | manual | manual |
| Conventional-commit prefix uniformity | none (titles are imperative) | varies | varies | mixed |

**Introduces** (formal observable nominations):

- **m643a — single-author same-minute (not same-second) OCTUPLET (n≥8) inside ≤90s wall-clock window with sub-15s median inter-arrival, surface-coherent stacked-PR series.** First instance: evawong-oai #21036–#21043 on openai/codex. Distinct from m92-class (same-second tuplet) by the bimodal-inter-arrival signature and from m101-class (debut quintet) by surface-coherence and sustained-author state.
- **m643b — vendor-internal `*-oai` author-suffix correlates with scripted-batch creation regime.** Falsifiable: predicts that *all* future evawong-oai / jif-oai / sayan-oai / aibrahim-oai / dylan-hurd-oai n≥3 clusters on `openai/codex` follow same-minute scripted-batch shape rather than spread-across-hours manual shape. Counter-instances would falsify the suffix-as-signature mapping.
- **m643c — explicit dependency-stack semantic ordering `foundation → wire → permission → helper → consumer → top → test → docs` as an 8-tier scripted-stack signature.** Strong constraint: predicts the ordering above is the *modal* ordering for n=8 stacked-PR series in vendor-internal Windows-correctness work.
- **m643d — bimodal inter-arrival distribution as a scripted-batch tell** (5-sub-15s mechanical-pause + 2 intra-batch-pause modes inside one 68s window). Distinct from monotonic-contracting m642b (single-mode, contracting) and from constant-cadence metronome m83 (single-mode, constant) — bimodality itself is the feature.

**Falsifies / refines**:

- Refines **synth-92** (same-second n=4 disjoint) by extending the cardinality envelope to n=8 *only when* surface coherence flips from disjoint to coherent — implying a **surface-coherence × cardinality trade-off** in same-second-class clusters: disjoint clusters cap at n≈4, coherent clusters scale to n≥8.
- Refines **synth-101** (cocosheng-g monotonic *scope expansion* quintet) — at n=8 the analogous cluster shape is monotonic *scope contraction* (one subsystem, deeper stack).
- Refines **synth-642 m642b** (contracting cadence as end-of-session burnout) — at sub-15s median scale, the cadence isn't contracting, it's bimodally-flat — distinct burnout mechanism (or none — it's machine-paced).

**Falsifiable predictions (priors)**:

- **P-643.A (≤30m)**: evawong-oai opens a 9th–10th leg `#21044` / `#21045` on the same Windows-sandbox subsystem with same scripted-batch signature, **prior 0.40**.
- **P-643.B (≤2h)**: At least one of the 8 legs merges first (likely #21036 or #21043 — extremes of the dependency stack tend to clear first), **prior 0.55**.
- **P-643.C (≤6h)**: A sibling `*-oai` author opens a parallel OCTUPLET-or-larger same-minute cluster on a *different* codex subsystem (cross-subsystem same-vendor-author-suffix replication), **prior 0.15**.
- **P-643.D (≤4h)**: A *non-vendor* contributor opens a Windows-sandbox PR on `openai/codex` that conflicts with one of the 8 legs (cohort-response with merge-friction), **prior 0.20**.
- **P-643.E (≤2h)**: The OCTUPLET attracts a parallel Windows-correctness leg on a *different* carrier (m643a generalization to W17-synth-640 Windows-correctness basin), **prior 0.25**. Candidate carriers: `charmbracelet/crush#2790` (already 8-tick basin-lock) revises with related fix, or `block/goose` opens follow-up to merged #8987.
- **P-643.F (≤90m)**: At least one of the 8 legs is force-pushed (head-revision) within 90m as the author corrects a mid-stack typo, **prior 0.50**.

**Carry**: Track whether the `*-oai` suffix correlates with same-minute scripted-batch creation across the next ≥10 codex captures. If m643b holds, it provides a forward-classifier for which codex authors will produce stacked vs spread cluster shapes. Also track whether the n=8 cardinality is a one-off ceiling (synth-643 unique) or whether n=10–15 stacks emerge in vendor-internal Windows-correctness work — relevant to forward sizing of Windows-correctness basin attracted by W17-synth-640.
