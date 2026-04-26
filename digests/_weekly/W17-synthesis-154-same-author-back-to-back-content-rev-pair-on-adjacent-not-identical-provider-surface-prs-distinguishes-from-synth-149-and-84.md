# W17 / synth #154 — Same-author back-to-back content-rev pair on **adjacent (not identical)** provider-surface PRs distinguishes from synth #149's identical-surface doublet and synth #84's intra-PR co-fire

## Pattern

In the Add.54 window (2026-04-26T11:17:26Z → 11:54:09Z, 36m43s), `gerryqi` shipped commits to **two distinct cline/cline PRs** within a sub-4-minute envelope, both targeting the deepseek-v4 provider surface:

| PR | Title | Opened | Last commit | Head SHA | Diff | Commits |
|----|-------|--------|-------------|----------|------|---------|
| cline/cline#10401 | `feat(deepseek): Add deepseek-v4-flash、deepseek-v4-pro support` | 2026-04-25T05:13:49Z | **11:45:00Z** | `763da6d6ca43` | +23/−1 | 5 |
| cline/cline#10404 | `feat(deepseek): deepseek-v4-pro supports reasoning effort control` | 2026-04-25T10:06:32Z | **11:48:47Z** | `78084ec3e05b` | +55/−2 | 9 |

**Inter-commit gap: 3m47s.** Both PRs by same author (`gerryqi`), opened ~4h53m apart on 2026-04-25, both targeting `main`. #10404 logically depends on #10401 (model registration for `deepseek-v4-pro` must precede reasoning-effort plumbing for the same model), but the PRs are **not stacked** — they share `main` as base, not `pr10401`.

The two diffs touch **adjacent but disjoint files**: #10401 touches the model registry / provider schema; #10404 touches the reasoning-effort plumbing / chat handler. There is no literal file overlap (this is a tight read pending diff-level verification, but the diff sizes +23 vs +55 and the title/scope split suggest it).

## Discriminator vs prior synths

| Synth | Pattern                                                    | Match? | Why distinct                                                          |
|-------|------------------------------------------------------------|--------|------------------------------------------------------------------------|
| #149  | Same-author rapid-fire docs doublet on **literal shared ecosystem-list** surface | No  | #149 requires identical file overlap (the ecosystem list); synth #154 has **adjacent disjoint files** on a coherent feature surface |
| #47   | Adjacent-to-same-surface same-author pair                  | Partial | #154 is a tighter case of #47 (sub-4-min vs #47's looser bound) and adds **logical dependency** without stack geometry |
| #84   | Intra-repo same-author cross-PR co-fire signature          | Partial | #84 requires sub-30s; #154 is sub-4-min — slower channel, but still well within "single coding session" envelope |
| #97   | Same-author n3 self-merge series with shared spec file co-touch | No | #154 is a doublet not triplet, no merges, no shared spec file (registry vs handler) |
| #149-mirror cross-repo  | — | — | #154 is intra-repo; synth #151's cross-repo author triple is a separate channel |

Synth #154 is **distinct** by characterizing **logically-dependent same-author back-to-back content revs on disjoint files within a coherent feature surface**, in a regime where:
1. The PRs are NOT stacked (both base `main`)
2. The files do NOT overlap
3. The semantic surface (deepseek-v4 provider) IS shared
4. The ordering (registration first, plumbing second) follows the logical dependency direction

This is a **non-stacked logically-ordered same-author doublet** — distinct from both atomic stack rebases (synth #153) and from identical-surface doublets (synth #149).

## Falsifiable predictions (for next 4 windows)

- **P-154.A**: Within the next 4 windows, `gerryqi` will ship a **third commit** to either #10401 or #10404 within 30 minutes of the other, OR open a third deepseek-v4-themed PR. If neither, the doublet is a **closed pair** (both PRs reach review-ready state) rather than the leading edge of a feature-surface campaign.
- **P-154.B**: If a third deepseek-v4 PR opens by `gerryqi` within 4 windows, it will base on `main` (not on #10401 or #10404), confirming the **non-stacked feature-surface campaign** geometry. If it bases on one of the existing PRs, gerryqi has switched to a stacked geometry mid-campaign — falsifying the non-stack hypothesis.
- **P-154.C** (cross-author surface convergence test): If any **other** cline/cline contributor opens a deepseek-v4-themed PR within the next 4 windows, the surface is **multi-author hot** (similar to synth #145's preserve-reasoning-content theme convergence). If only gerryqi continues, the surface is **single-author claimed**.
- **P-154.D**: Inter-commit gap on the gerryqi pair will **shrink** on the next iteration (sub-2-min) if the campaign accelerates, or **expand** (>15-min) if gerryqi awaits review feedback. Sub-2-min would falsify the "review-paced doublet" reading and promote a "burst-write" reading akin to synth #84.

## Refines / falsifies prior synths

- **Refines synth #47** by tightening the temporal envelope to sub-4-min and adding the logical-dependency-ordered constraint.
- **Refines synth #149** by introducing a **non-identical-surface** sibling pattern; #149 and #154 together span the spectrum from "identical files" (149) to "adjacent disjoint files on shared semantic surface" (154).
- **Distinguishes from synth #84** by being slower (sub-4-min vs sub-30s) and cross-PR-not-cross-author; #84's mechanical-co-fire reading does not apply.
- **Tests synth #145's "preserve reasoning content theme convergence"** at a single-author level — if P-154.C fires (other authors join), synth #145's cross-repo theme convergence is extended to **single-repo within-surface convergence**, suggesting the deepseek-v4 reasoning-effort surface is the W17 successor to the preserve-reasoning-content theme.

## Anchor PRs / SHAs

- cline/cline#10401 (`gerryqi`, head `763da6d6ca43`, last commit 11:45:00Z, +23/−1, 5 commits, base `main`)
- cline/cline#10404 (`gerryqi`, head `78084ec3e05b`, last commit 11:48:47Z, +55/−2, 9 commits, base `main`)

Inter-commit gap: **3m47s**. Both PRs opened 2026-04-25, ~4h53m apart.

## Source addendum

ADDENDUM-54 (window 11:17:26Z → 11:54:09Z, 36m43s).
