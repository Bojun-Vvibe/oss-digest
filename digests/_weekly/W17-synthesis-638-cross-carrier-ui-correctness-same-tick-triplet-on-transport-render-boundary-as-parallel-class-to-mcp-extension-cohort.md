# W17-synthesis-638 — Cross-carrier UI-correctness same-tick triplet on transport/render boundary as parallel-class to MCP-extension cohort

**Post**: ADDENDUM-324
**Class**: cross-carrier convergent-surface cohort (UI / rendering / proxy-transport boundary)
**Cardinality**: TRIPLET realized in single 50-minute capture window

## Pattern

In Add.324 capture window (2026-05-04T14:05:00Z → 14:55:00Z), three carriers concurrently exhibited fresh-open or revised PRs converging on the **UI / rendering / proxy-transport boundary**:

1. sst/opencode #25698 head `26ca98b39f09908b01d0e32beac98e6f6491c0dc` — `fix(opencode): strip transfer-encoding in UI proxy and allow public manifest assets` (OpeOginni, **head SHA REVISION** vs Add.323 `bd91afb3...` with title-extension scope-broadening from transport-only to transport+manifest-assets).
2. BerriAI/litellm #27107 head `6a838ec643139006cf158babebf47a22fbe048bf` (smishra2004 `fix: ui chat 404 issue in proxy server` — UI-proxy 404-correctness leg, carry).
3. charmbracelet/crush #2797 head `cb6eae7e702a31e11990c198c56b7f21d1ae1cbb` (meowgorithm `fix(ui): style lockup` — **fresh open** at 13:21:38Z, UI-render-correctness leg).

All three are `fix:` PRs touching the **boundary where backend-emitted bytes are rendered to user UI** — opencode strips a problematic HTTP header that breaks UI proxy rendering, litellm fixes a 404 surfaced via UI chat, crush fixes a UI render lockup. Different layers (HTTP-header / HTTP-status / TUI-render) but **convergent on the same defect-class: backend-to-UI fidelity**.

## Why this is a parallel-class to MCP-extension cohort (W17-synth-637)

W17-synth-637 documented a cross-carrier MCP-extension cohort at N=5+ in the same Add.324 window, with intra-author depth-stacking by jif-oai. W17-synth-638 documents a **separate, concurrent cross-carrier cohort** in the same window — but on a **different defect-class** (correctness-fix on UI/transport boundary, all `fix:` not `feat:`) and **without intra-author depth** (all three legs are different authors on different carriers).

This means the Add.324 window contains **two simultaneously-active cross-carrier cohorts** of different shape:

| Cohort | Mode | Cardinality | Authors | Surface |
|--------|------|-------------|---------|---------|
| MCP-extension (W17-synth-637) | `feat:` heavy | N=5+ | mixed, with jif-oai depth-stack | MCP / memory / providers |
| UI-correctness (W17-synth-638) | `fix:` only | N=3 | all distinct | UI / transport / render |

Two parallel cross-carrier cohorts in one 50-minute window is **not** the modal pattern across W17-synth-630 through W17-synth-636 (which showed at most one dominant cross-carrier cohort per window plus optional intra-author stacking). The Add.324 cohabitation pattern is a **window-density anomaly**: at least two distinct cross-carrier convergent surfaces simultaneously active.

## Coupling with #25698 head-revision micro-event

The opencode #25698 head-revision (`bd91afb3...` → `26ca98b3...`) is **temporally coupled** with the publication of sst/opencode #25714 (kitlangton `test(server): regression reproducers for #25698`, head `fc90986ae61e848f72a3b58af8c9422f34237119`, opened 13:25:18Z). The author of #25698 (OpeOginni) is **not** kitlangton — i.e., a different contributor pushed regression-test scaffolding **for** #25698, and #25698 was force-pushed in the same window with **scope broadening** in title.

This is a **cross-author scaffold-then-revise micro-cycle** within the broader UI-correctness cohort, not previously named in W17-synth-630 through W17-synth-636. It is **not** a same-author stack; it is a cross-author collaborative refinement on a single PR within a cross-carrier cohort window — sub-signature on top of W17-synth-638's primary triplet.

## Falsifiable forward signals

1. **P-638.A**: UI-correctness cohort cardinality grows to N=4 in Add.325 via fourth carrier `fix:` PR on UI/transport surface — prior **0.16** (qwen-code or gemini-cli candidate; gemini-cli #26431 `clear skills consent dialog before reload` already candidate-adjacent on UI-modal-state).
2. **P-638.B**: opencode #25698 head-revised AGAIN in Add.325 (post-scaffold revision streak) — prior **0.30** (force-pushed last tick under cross-author scaffold pressure, return-to-revision base rate elevated).
3. **P-638.C**: A **third concurrent cross-carrier cohort** emerges in Add.325 (in addition to MCP-extension + UI-correctness) — prior **0.08** (window-density triplet would be unprecedented in W17-synth-630..637 series).
4. **P-638.D (anti-pattern)**: UI-correctness cohort dissolves in Add.325 (no additional carrier joins, all three legs head-stable) — prior **0.40** (cross-carrier `fix:` cohorts in W17 typically dissolve within 2 ticks of formation per W17-synth-624 base-rate observation).

## Bridges

- W17-synth-629 (cross-carrier defensive/CWE-tagged security-cohort convergence — a different `fix:`-mode cross-carrier cohort sibling)
- W17-synth-630 (cross-carrier retry/backoff/timeout resilience-policy convergence — `fix:`+`refactor:` mixed cross-carrier cohort sibling)
- W17-synth-632 (MCP-extension-directory growth-rate sub-pattern coupled with protocol-resilience convergence dyad — first explicit DYAD of concurrent cross-carrier cohorts; W17-synth-638 establishes the DYAD form again with different cohort identities)
- W17-synth-637 (paired-cohort companion in same Add.324 window)

## Distinguishing feature vs prior synth

W17-synth-632 first established a **dyad** of concurrent cross-carrier cohorts (MCP-extension growth-rate + protocol-resilience). W17-synth-638 establishes the **second observed instance** of a concurrent-cohort dyad but with **different cohort identities** (MCP-extension + UI-correctness rather than MCP-extension + protocol-resilience). This promotes "concurrent cross-carrier cohort dyads in single 50m window" from a singleton observation (W17-synth-632) to a **repeatable structural feature of the W17 capture series** with at least two distinct realization shapes.
