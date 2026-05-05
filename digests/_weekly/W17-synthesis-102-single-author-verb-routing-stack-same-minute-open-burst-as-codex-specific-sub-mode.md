# W17-synthesis-102 — single-author verb-routing-stack same-minute open burst as a falsifiable codex-specific sub-mode of multi-PR open-tuplets

**Mission**: Distinguish the codex starr-openai 4-PR same-second-band open burst (Δ=2s, arithmetic-progression timestamps) from the prior W17-synth-92 quartet pattern (Δ=0s, non-arithmetic) and from W17-synth-101's n7 same-minute burst by elevating the **stack-shape + verb-routing semantic** as the discriminating axis.

## Pattern statement

A **verb-routing-stack open burst** is an N≥3 open event by a single author within a single carrier where:
1. All N PRs are created within a ≤10s wall-clock band,
2. PR-number progression is monotonically Δ=1 (no number gaps),
3. Inter-PR createdAt deltas are **arithmetic** (constant Δt, ≥1s), distinguishing this from W17-synth-92's same-second tuplet (Δt=0),
4. PR titles follow a **stack-routing semantic**: each PR routes one verb / one config provider / one transport leg through a shared substrate established by the bottom of the stack,
5. Head SHAs are **frozen** across the next ≥1 ticks (introduction event, not iteration).

Compare with W17-synth-92 (same-second n4 open tuplet, **disjoint** sub-surfaces) and W17-synth-101 (n7 same-minute open burst, **stacked subagent-fork-runtime** surfaces). This pattern's discriminator is the **arithmetic-progression Δt + verb-routing semantic** combined.

## Empirical anchor

**codex / starr-openai Burst-1**, captured 2026-05-01T19:10:28Z..19:10:34Z (6s):

| PR | createdAt | Δt from prior | head SHA | verb routed |
|---|---|---|---|---|
| #20664 | 19:10:28Z | — | `d80209b5fa86` | (substrate: stdio exec-server client transport) |
| #20665 | 19:10:30Z | +2s | `5679f3ba6401` | environment provider default-selection |
| #20666 | 19:10:32Z | +2s | `3e3968f5ba45` | CODEX_HOME TOML provider |
| #20667 | 19:10:34Z | +2s | `05148c548520` | environment loader |

**Stack-tip extension Burst-2** (same author, days later):
- #21048 `c46a11561476` (apply_patch routing, draft) created 2026-05-04T17:58:10Z
- #21142 `a78a76d32a90` (shell_command routing, draft) created 2026-05-05T04:23:06Z, Δt=10h25m from #21048
- #21143 `40ad4aa28f66` (view_image routing, draft) created 2026-05-05T04:27:55Z, Δt=4m49s from #21142

**Frozen-SHA test**: At Add.364 capture (2026-05-05T20:45Z) — i.e. **≈4d2h after Burst-1, ≈16h after Burst-2** — all 7 head SHAs are unchanged. The most recent `updated_at` band (20:42:18Z..20:43:38Z, 1m20s) reflects coordinated CI re-evaluation (sub-class I joint-band touch), **not** code mutation.

## Cross-carrier negative evidence (5-15 PR-evidence set)

Pattern is **NOT** observed at sub-10s arithmetic Δt resolution in any other carrier this week. Closest near-instances and why they fail discriminator:

1. **opencode jlongster #25894 / #25911 / #25915** — Δt = 19:53Z → 20:33Z = 40m, **not arithmetic, not sub-10s**. Author concentration but not stack-routing.
2. **crush taciturnaxolotl #2803 / #2805 / #2807** — Δt = 17:18Z → 17:56Z → 20:08Z, **gap-widening**, not arithmetic. Disjoint surfaces (yollo / drain queue / oauth reauth), not stack-routing.
3. **crush BrunoKrugel #2778 / #2800** — Δt=2m41s, n=2 (below N≥3 threshold).
4. **qwen-code chiga0 #3680 / #3710** — Δt=1m37s, n=2 (below threshold). Both `feat(cli)` titles but not verb-routing.
5. **qwen-code B-A-M-N #3799 / #3814 / #3849 / #3815** — n=4 (passes count) but createdAt spans **2026-05-02T22:44:13Z..2026-05-05T10:34:50Z** (≈3 days), failing the ≤10s window. Surfaces are heterogeneous (`feat(cli) normalize`, `fix(core) auto-memory`, `feat(models) cross-authType`, `fix(core) per-model`), not stack-routing.
6. **goose morgmart #9004 / #9008 / #9019** — n=3, all same author, but spread over 24h+ and dispatched as merges/closures, not a single-burst open event.
7. **codex viyatb-oai #21127 / #21234** — Δt=9m30s, n=2 (below threshold), same surface (linux-sandbox), **could be** a stack-doublet but lacks the third PR needed for stack-shape.
8. **codex fcoury-oai #20065 / #21001** — Δt=23m29s on TUI surface, n=2.
9. **gemini-cli joshualitt #22677 / #26534** — Δt > 7 weeks, no arithmetic burst.

**Conclusion**: Across **9 candidate near-instances** in 6 carriers, **0 satisfy** the (≤10s ∧ arithmetic Δt ∧ N≥3 ∧ verb-routing semantic ∧ frozen-SHA-across-ticks) conjunction.

## Falsifiable predictions

- **P102.A**: If any non-codex carrier produces a (≤10s ∧ arithmetic Δt ∧ N≥3) burst within next 7 ticks, the pattern is a **carrier-agnostic** sub-mode and should be re-classed as "single-author rapid stack seed". ETA: 7 ticks. Watch crush (taciturnaxolotl, BrunoKrugel) and qwen-code (B-A-M-N, doudouOUC) — these are the only authors whose recent cadence approaches the band.
- **P102.B**: If starr-openai opens any new "Route X through selected environments" PR for verbs `list_dir` / `glob` / `grep` / `read_file` within next 4 ticks, Burst-2 confirms as **stack-tip iteration** by the same author (verb-by-verb decomposition strategy) rather than maintainer-driven decomposition. Falsified iff the next PR in this stack is opened by a different codex author.
- **P102.C**: If any of the 4 Burst-1 head SHAs (`d80209b5`, `5679f3ba`, `3e3968f5`, `05148c54`) mutates in the next 3 ticks, the **frozen-SHA-introduction-event** discriminator fails and the burst regresses to W17-synth-92's "same-second open tuplet" taxon (which permits subsequent iteration).
- **P102.D**: If Burst-1 is merged as an **atomic 4-PR train** within a single tick (i.e. all 4 PRs reach `merged_at` inside ≤6m of each other), the stack semantic is enforced by maintainer review (review-as-train); if instead they merge over multiple ticks with reorderings, the stack semantic is **author-asserted only** and not enforced downstream.

## Why this matters

Sub-class J carves out a **new dimension** in the open-burst taxonomy: prior synths classified bursts by **timing** (W17-synth-83, -85, -90, -92) and by **author identity** (W17-synth-91, -93, -101). This synth introduces **semantic stack-shape** as an orthogonal third axis. If P102.A holds (carrier-agnostic), the taxonomy should be refactored to a 3-axis grid; if P102.A fails (codex-specific), then verb-routing-stack bursts are a **codex cultural signature** distinct from other carriers' rapid-PR styles, and the discriminator becomes useful for carrier classification rather than open-burst sub-typing.

## Citations

Primary: codex #20664, #20665, #20666, #20667, #21048, #21142, #21143.
Negative-evidence set: opencode #25894 / #25911 / #25915; crush #2803 / #2805 / #2807 / #2778 / #2800; qwen-code #3799 / #3814 / #3849 / #3815 / #3680 / #3710; goose #9004 / #9008 / #9019; codex #21127 / #21234 / #20065 / #21001; gemini-cli #22677 / #26534.

**Total unique PRs cited: 26 across 5 carriers (codex, opencode, crush, qwen-code, goose, gemini-cli).**
