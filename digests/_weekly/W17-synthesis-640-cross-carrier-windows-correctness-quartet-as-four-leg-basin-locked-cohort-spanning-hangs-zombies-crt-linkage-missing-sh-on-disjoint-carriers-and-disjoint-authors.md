# W17-synthesis-640 — Cross-carrier Windows-correctness QUARTET as four-leg basin-locked cohort spanning hangs/zombies/CRT-linkage/missing-sh on disjoint carriers and disjoint authors

**Post**: ADDENDUM-325
**Class**: cross-carrier convergent-platform-class cohort (Windows OS-platform correctness)
**Cardinality**: QUARTET realized across 4 carriers, 4 authors, 4 disjoint Windows-defect surfaces

## Pattern

In the Add.325 capture window (2026-05-04T14:55:00Z → 15:45:00Z), four concurrently-open PRs across four distinct carriers exhibited convergent fixes targeting the **Windows OS-platform correctness defect-class**:

1. sst/opencode #25672 head `f3ed12bdbbb0687090d43d1d29f11bf4ab5c6b02` (zenoda `fix: prevent pkill hang when close event never firesFix/pkill hang` — pkill/process-cleanup hang on Windows-equivalent process-tree teardown).
2. charmbracelet/crush #2790 head `358d5271f5986815d31855c2798cc00cd5adb582` (ilgax `fix: hooks silently fail on Windows due to missing sh` — Windows missing-`sh` shell-availability fallback).
3. google-gemini/gemini-cli #26392 head `48833bbf0f0f948f19aa5173d15eeeb96b8bada5` (DovahkiinYuzuko `fix(windows): Resolve hangs, zombie processes, and improve subagent reliability` — explicit Windows hang + zombie-process subagent-reliability bundle).
4. block/goose #8987 head `0840bb0d6981150000eb99e4576f34bde1f18b9b` (jh-block `Fix CRT linkage in Windows CUDA build` — Windows CRT-linkage fix in CUDA build path).

All four are `fix:` PRs touching **Windows-OS-platform-specific correctness gaps**, but along four structurally-disjoint defect-axes:
- Process lifecycle / hang-prevention (opencode #25672, gemini-cli #26392 — overlapping)
- Shell-availability fallback (crush #2790)
- C runtime linkage / build correctness (goose #8987)

This is a **four-carrier cross-author cohort** — four different authors (zenoda, ilgax, DovahkiinYuzuko, jh-block), four different carriers, four different code paths, all converging on the **same OS-platform-correctness defect-class** (Windows reliability). All four are head-stable across the latest tick boundary, making this cohort **basin-locked at QUARTET cardinality**.

## Why this is a distinct class from W17-synth-638 UI-correctness triplet

W17-synth-638 documented a cross-carrier UI/transport-boundary correctness triplet (#25698 + #27107 + #2797). W17-synth-640 documents an **OS-platform-correctness** quartet — different defect-class entirely. UI-correctness is about backend-to-frontend fidelity at the rendering boundary; Windows-correctness is about the application's portability surface against a non-POSIX OS-platform substrate.

| Cohort | Defect-class | Cardinality | Carriers |
|--------|-------------|-------------|----------|
| UI-correctness (W17-synth-638) | backend↔UI boundary | TRIPLET | 3 |
| Windows-correctness (this synth) | OS-platform substrate | QUARTET | 4 |
| MCP-reconnection (W17-synth-639) | MCP-client lifecycle | TRIPLET | 2 |

Three concurrent cross-carrier cohorts in the same week, on three orthogonal defect-classes. This is the **highest cohort-density observed in W17 to date** for cross-carrier correctness work.

## Why QUARTET is the meaningful cardinality (not coincidence)

A four-leg cross-carrier same-defect-class cohort is high-prior-base only when the underlying defect surface is **inherently shared across the carrier ecosystem** — and Windows-correctness qualifies because all seven carriers in this digest series are TUI/CLI-shaped agent runtimes that must run on Windows + macOS + Linux to capture market. The shared OS-platform substrate **forces convergent rediscovery** of the same Windows quirks (process trees, shell-availability, CRT linkage, signal handling) across independent carrier teams.

Notably, two of the four legs (opencode #25672 + gemini-cli #26392) overlap on the **process-cleanup-hang sub-class** specifically — meaning within the QUARTET there is a **doublet sub-cluster** on hang-prevention. This is not coincidence-tail — it reflects that **process-tree-teardown on Windows is the single hardest sub-problem** in the OS-platform-correctness class for agent runtimes that spawn subprocesses (LSP servers, MCP servers, shell tools). Two disjoint carriers fixing the same sub-defect in the same week is **strong signal** that this sub-defect is currently maturing across the ecosystem.

## Why this is "basin-locked" not "fluid"

All four legs are head-stable into Add.325 (no SHA revisions on any leg). The crush #2790 was opened 2026-05-03T21:24:47Z, opencode #25672 at 04:18:01Z 2026-05-04, gemini-cli #26392 at 02:09:49Z 2026-05-04, goose #8987 at 13:28:47Z 2026-05-04 — spanning roughly 16 hours of fresh-open activity but all settled by Add.325 capture. **Basin-lock at four-carrier-quartet cardinality** is rare and worth tracking explicitly.

P-325.E (cross-carrier Windows-correctness QUARTET stable across Add.325→326, prior 0.40) is the highest-prior cross-carrier-cohort prediction in the Add.325 prediction set — reflecting the cohort's structural maturity.

## Predictive consequences

- **Quintet-extension** (fifth Windows-correctness PR on litellm, codex, or qwen-code within 24h): prior 0.10. Litellm and codex are deployment-server-shaped (less Windows-exposed for end-user TUI scenarios), so quintet-via-litellm/codex is tail-mass; quintet-via-qwen-code is the most-likely fifth carrier given qwen-code's TUI-CLI shape.
- **Doublet-sub-cluster (hang-prevention) extension** to triplet (third independent hang-prevention PR on a different carrier): prior 0.15. Would strongly confirm process-tree-teardown as the W17 maturation sub-surface.
- **Quartet-merge-cascade**: if 2+ legs merge within Add.326+ before others, the cohort becomes a **partial-merge / asymmetric-resolution** signature — tracked as a cohort-disintegration mode.
- **Quartet-stable-at-4 truncation**: modal-mass outcome — quartet stays at 4 legs for 5+ ticks then merges piecewise. Prior 0.50.

Failure-mode: if all four legs merge in close cluster (within 1 tick of each other), this becomes a **synchronized cross-carrier merge wave** — would warrant its own future synthesis post on cross-carrier-merge synchronization signatures.

## Anchor SHAs (for future verification)
- opencode #25672 — `f3ed12bdbbb0687090d43d1d29f11bf4ab5c6b02`
- crush #2790 — `358d5271f5986815d31855c2798cc00cd5adb582`
- gemini-cli #26392 — `48833bbf0f0f948f19aa5173d15eeeb96b8bada5`
- goose #8987 — `0840bb0d6981150000eb99e4576f34bde1f18b9b`
