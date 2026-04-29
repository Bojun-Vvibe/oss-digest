# W17 Synthesis #349 — Post-silence-break trailing-tick exhibits intra-repo author-rotation regimes that are heterogeneous across repos: codex full-rotation (Add.158 etraut-openai → Add.159 {iceweasel-oai + cassirer-openai}, zero overlap), gemini-cli partial-recurrence (Add.157 {adamfweidman + sripasg} → Add.159 adamfweidman solo, 1-of-2 recur), refining synth #294 sustained-emission shape with intra-repo author-broadening sub-class M-159.A (full-rotation) vs M-159.B (partial-recurrence)

**Class:** Post-silence-break trailing-tick author-rotation taxonomy (refines #294, #347; refines synth #346 by adding lag-2 author-overlap dimension; introduces M-159.A full-rotation + M-159.B partial-recurrence sub-classes)

**Hypothesis:** When a tracked repo's silence-break tick (M-158.C codex same-author dual-merge OR M-157.D gemini-cli dual-author same-second pair) is followed by a trailing emission tick within ≤2 ticks, the trailing tick exhibits **intra-repo author-rotation** but the rotation **regime varies by silence-break shape**: M-158.C codex single-author silence-break is followed at trailing tick by **full-rotation** (zero author-overlap with the silence-break emitter), while M-157.D gemini-cli dual-author silence-break is followed at trailing tick by **partial-recurrence** (exactly one of the two silence-break authors recurs, the other drops). This asymmetry refines synth #294 sustained-emission shape: the prior model assumed undifferentiated author-cadence at trailing ticks; the Add.159 evidence shows that the **silence-break author-cardinality structurally constrains the trailing-tick rotation regime** — single-author breaks force full-rotation (the lone author appears once, then the repo "exhausts" them), while dual-author breaks permit partial-recurrence (one author recurs as a "carrier", the other does not). Introduce **M-159.A full-rotation class** (single-author silence-break → trailing tick with zero author-overlap) and **M-159.B partial-recurrence class** (k-author silence-break, k≥2 → trailing tick with exactly 1 recurring author, k−1 dropped).

**Evidence:**
- **Codex M-158.C → Add.159 full-rotation (M-159.A instance)**:
  - Add.158 silence-break: etraut-openai #20082 `91ca551d` 15:56:02Z + #20172 `1c420a90` 16:10:22Z (single-author dual-merge, same-surface TUI/goal, 14m20s gap)
  - Add.159 trailing tick: iceweasel-oai #19211 `cecca5ae` 17:00:01Z (Windows process management) + cassirer-openai #20123 `df966996` 17:22:25Z (rollout-tracer encrypted-id), 22m24s inter-merge gap, **disjoint surfaces**
  - Author-overlap = ∅ (etraut-openai does NOT recur at Add.159; both Add.159 emitters are new in the post-restart codex window)
  - Surface-overlap = ∅ (Add.158 TUI/goal vs Add.159 Windows + rollout-tracer)
  - Inter-merge gap widens +8m04s (14m20s → 22m24s)
- **Gemini-cli M-157.D → Add.159 partial-recurrence (M-159.B instance, lag-2 across re-quiescence)**:
  - Add.157 silence-break: adamfweidman #25974 + sripasg #26143 `c2e5b28e` 15:35:38Z (dual-author same-second pair per synth #345)
  - Add.158 re-quiescence: 0 merges (post-flush re-quiescence, synth #345 confirmed)
  - Add.159 trailing tick (lag-2 across re-quiescence): adamfweidman #26198 `2cf0c75a` 17:23:38Z `fix(core): add explicit empty log guard in A2A pushMessage` (single-merge solo)
  - Author-overlap = {adamfweidman} (1-of-2 recurrence; sripasg drops)
  - Carrier-author identification: adamfweidman is the **carrier** (recurs); sripasg is the **transient** (drops)
- **Litellm cross-tick comparison (control case for non-silence-break consecutive emission)**:
  - Add.158 silence-break: ishaan-berri #26739 `ea275659` 16:28:57Z (synth #344 canonical low-amplitude single-merge)
  - Add.159 trailing tick: yassinkortam #26730 `9b3cd5ca` 17:10:59Z (single-merge mid-tick)
  - Author-overlap = ∅ — also full-rotation, supporting M-159.A applicability to single-author silence-breaks regardless of break-shape (canonical low-amplitude OR same-surface dual-merge both yield full-rotation at trailing)
- Three concurrent post-silence-break trailing-tick observations at Add.159 — first time in W17 the trailing-tick author-rotation regime can be compared across ≥3 repos at a single tick boundary

**Refines/falsifies prior:**
- **Refines #294**: Sustained-emission shape was characterized as "≥1 merge/tick for n ticks post-break"; refined to **author-rotation regime conditional on silence-break author-cardinality**. The M-159.A full-rotation regime applies to single-author silence-breaks (M-158.C, synth #344 canonical low-amplitude); the M-159.B partial-recurrence regime applies to multi-author silence-breaks (M-157.D dual-author same-second).
- **Refines #347**: M-158.C single-author same-surface dual-merge silence-break shape extended with trailing-tick property — M-158.C breaks force M-159.A full-rotation at the trailing tick (the same-surface single-author shape "exhausts" the lone author within the break, leaving the trailing tick to draw from the disjoint author pool).
- **Refines #346**: M-156.R cross-repo silence-exit relay class extended with **author-overlap dimension at lag-2** — within-repo lag-2 author-recurrence (gemini-cli adamfweidman) operates orthogonally to cross-repo lag-2 repo-recurrence (qwen-code at Add.158). The M-156.R relay's lag-2 boundary now has two author-level subcomponents: cross-repo recurrence (via qwen-code) and within-repo recurrence (via gemini-cli/adamfweidman), with distinct emitters in each case.
- **Bridges synth #294 and synth #345**: The post-flush re-quiescence shape of M-157.D (synth #345) is now seen as the **first half of a 2-tick post-break carrier-emergence sequence**: dual-author burst → re-quiescence (carrier-selection interval) → carrier-only re-emission. The carrier-author (adamfweidman in this instance) is selected during the re-quiescence interval; the transient-author (sripasg) is dropped.

**Predictions:**
- **P-349.A** (M-159.A full-rotation generalization): The next 3 single-author silence-breaks (across any tracked repo, any silence-break shape) followed by a trailing emission tick within ≤2 ticks exhibit zero author-overlap at the trailing tick with >70% rate. **Falsifier**: ≥2 of next 3 single-author silence-breaks show ≥1 author-overlap at trailing tick.
- **P-349.B** (M-159.B carrier-emergence persistence): Gemini-cli adamfweidman recurs at Add.160 OR sustains as carrier for ≥1 additional tick within W17. **Falsifier**: gemini-cli Add.160 emission by sripasg or any new author other than adamfweidman, OR gemini-cli enters new ≥3-tick silence after Add.159 without adamfweidman recurrence.
- **P-349.C** (M-159.B carrier-asymmetry): When M-157.D dual-author same-second silence-breaks recur in W17/W18, the carrier-author at trailing tick is the **non-cross-repo-relay-anchor** of the dual-author pair (i.e., the author who is NOT participating in a concurrent cross-repo M-156.R relay). At Add.157, sripasg was the relay-anchor in the M-156.R cross-repo singleton chain (per synth #346 lag-1 disjoint identity rotation), and adamfweidman was the non-anchor — consistent with adamfweidman being the carrier at Add.159. **Falsifier**: next M-157.D shape's trailing tick has carrier = relay-anchor author.
- **P-349.D** (M-159.A surface-disjointness coupling): Within M-159.A full-rotation regime, the trailing-tick surface-overlap with the silence-break surface is also ∅ at >60% rate (codex Add.158 TUI/goal vs Add.159 Windows + rollout-tracer = full surface-disjointness, supporting the conjecture that author-rotation and surface-rotation co-occur at trailing tick). **Falsifier**: next 3 M-159.A trailing ticks all share ≥1 surface with the silence-break surface.

**Cited addenda:** ADDENDUM-159, ADDENDUM-158, ADDENDUM-157, ADDENDUM-156.

**Cited SHAs / PRs:**
- Add.158 codex silence-break (M-158.C): #20082 `91ca551d`, #20172 `1c420a90` (etraut-openai)
- Add.159 codex trailing tick (M-159.A): #19211 `cecca5ae` (iceweasel-oai), #20123 `df966996` (cassirer-openai)
- Add.157 gemini-cli silence-break (M-157.D): #26143 `c2e5b28e` (sripasg), adamfweidman counterpart
- Add.159 gemini-cli trailing tick (M-159.B): #26198 `2cf0c75a` (adamfweidman recurs)
- Add.158 litellm silence-break (synth #344 canonical): #26739 `ea275659` (ishaan-berri)
- Add.159 litellm trailing tick (control M-159.A): #26730 `9b3cd5ca` (yassinkortam)
- Predecessor anchors: Add.156 sha=2bd78aa, Add.157 sha=5c25238, Add.158 sha=968811f
