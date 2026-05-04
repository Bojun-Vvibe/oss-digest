# W17-synthesis-637 — Stacked-refinement same-author MCP-memory triplet on codex as nested same-tick variant of cross-carrier MCP-extension cohort

**Post**: ADDENDUM-324
**Class**: cross-carrier cohort + intra-author session structure
**Cardinality regime**: TRIPLET (intra-author) nested within QUINTET+ (cross-carrier)

## Pattern

In Add.324 capture window (2026-05-04T14:05:00Z → 14:55:00Z), jif-oai opened **three sequential PRs on openai/codex** within ~64 minutes, all touching the MCP-memory surface or directly enabling it:

1. openai/codex #20997 head `aa6c6ae8e0735efe85654b2b85122d078db6b2c6` — `feat: add context lines to memories MCP search` (13:13:25Z)
2. openai/codex #20998 head `43e52711f8e955f8a12083ec863fbdedf3595378` — `nit: renaming` (13:17:48Z, **+4m23s**)
3. openai/codex #20989 head `5b6e918f6273667133f7f5eecf60bda5d7ea6d72` — `core: share responses request builder with compact requests` (12:26:42Z, anchor-leg pre-staged)

Combined with prior-tick #20986 (`feat: add line offsets to memory read MCP`, head `9ad9d52e31bf0da17e9c015e513fe3f396d48e27`, opened 12:11:18Z in Add.323 window), jif-oai daily-session reaches **N=4** distinct PRs all with MCP/memory/responses-builder co-touch — qualifies as a **stacked-refinement same-author MCP-memory triplet** (P-323.E REALIZED-DOUBLE) with extension to quartet anchored by core-builder leg.

## Why this matters as cross-pattern bridge

The intra-author triplet is **simultaneously a leg** in the broader cross-carrier MCP-extension cohort observed in Add.324:

- BerriAI/litellm #27109 head `0072fb3e200e19dcc933b711a1834c78b1e190f2` — `feat(mcp): split core mcp files into separate PR` (yugborana, MCP-modularization)
- charmbracelet/crush #2788 head `f9134777c941001444eb57ecc81bfcb49c6366f5` — `config: lenient shell expansion default, uniform coverage across MCP, LSP, and providers` (meowgorithm, MCP-tri-surface coverage)
- QwenLM/qwen-code #3819 head `6ab6703a890b339abdabd4960dfe79ad6943ae2b` — `fix(core): prevent duplicate MCP processes from concurrent discovery` (B-A-M-N, MCP-process-correctness)
- QwenLM/qwen-code #3818 head `f2e19a373c99b98aa4b3c64d7c9a75849d4565e0` — `fix(core): coalesce MCP server rediscovery` (cyphercodes, MCP-rediscovery convergent-author DOUBLET with #3819)
- openai/codex #20997 (cohort leg via jif-oai)

That puts the **cross-carrier MCP-extension cohort at N=5+** active in the same window — meaningfully extending the MCP-extension-directory growth-rate sub-pattern noted in W17-synth-632, but with a **sub-pattern shift**: the W17-synth-632 form was **cross-author / cross-carrier** with no same-author stacking; the Add.324 form has **a same-author triplet (jif-oai) embedded as one leg of the cross-carrier cohort**.

This is a structural variant: same-author depth-stacking inside a cross-carrier breadth-cohort. Sibling-class to W17-synth-633 (implicit-stack same-author multi-disjoint-surface quartet) but on **a single product surface (MCP-memory)** rather than disjoint surfaces.

## Falsifiable forward signals

1. **P-637.A**: jif-oai N=4 → N=5 within next tick (Add.325) on memories surface — prior **0.22** (active session, surface has refinement slots).
2. **P-637.B**: Cross-carrier MCP-extension cohort cardinality grows to N=6 in Add.325 via at least one new MCP-touching PR — prior **0.18**.
3. **P-637.C**: A second same-author intra-carrier MCP triplet emerges on a different carrier within W17 — prior **0.10**.
4. **P-637.D (anti-pattern)**: jif-oai stack head-revision wave begins (any of #20986/#20989/#20997 head-revised) within next 2 ticks — prior **0.25** (numbered-stack revision-wave base rate from W17-synth-634).

## Bridges

- W17-synth-632 (MCP-extension-directory growth-rate cross-carrier sub-pattern coupled with protocol-resilience convergence dyad)
- W17-synth-633 (implicit-stack same-author multi-disjoint-surface quartet)
- W17-synth-634 (stack-construction revision-wave-propagating-down-the-stack on explicit-numbered-quartet)
- W17-synth-636 (bottom-half-volatile co-revision 3-tick streak with cross-pattern bridge to implicit-stack sextet)

## Distinguishing feature vs prior synth

W17-synth-633/635/636 documented same-author stacking on **multi-disjoint surfaces** (different files / subsystems within one carrier). W17-synth-637 documents same-author stacking on **a single sub-surface (MCP-memory)** that simultaneously participates in a **cross-carrier cohort on a broader surface (MCP-extension)** — i.e., the depth dimension is single-surface refinement rather than breadth-stacking, and the breadth dimension is supplied externally by the cross-carrier cohort. This is a hybrid topology not previously observed in W17-synth-630 through W17-synth-636.
