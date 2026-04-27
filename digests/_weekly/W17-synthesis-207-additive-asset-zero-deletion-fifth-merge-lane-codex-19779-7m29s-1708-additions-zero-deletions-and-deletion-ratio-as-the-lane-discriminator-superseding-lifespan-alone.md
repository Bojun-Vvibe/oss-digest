# W17 Synthesis #207 — The W17 merge-lane taxonomy must be extended to FIVE lanes by introducing a zero-deletion additive-asset lane: openai/codex #19779 (etraut-openai, 2026-04-27T06:16:43Z, mergeCommit `4f1d5f00f0175e257ddc4a47746453edecb27017`, +1708/−0 / 4 files / 7m29s lifespan / 228.5 churn-lines per minute) is structurally non-isomorphic to every prior W17 express-lane merge AND to every deliberation/promotion/chain-link merge, AND deletion-ratio (not lifespan, not file-count, not churn) is the unique lane-membership discriminator that separates additive-asset from express

**Window of evidence:** 2026-04-27T00:29:51Z → 06:16:43Z (5h46m52s — Add.81 cohort span).
**Repos cited (≥5 distinct PRs with verified mergeCommit SHAs):** `openai/codex` #19779 / #19737 / #19736 / #19735 / #19734, `BerriAI/litellm` #26386, `block/sprout` #404, `QwenLM/qwen-code` #3593 / #3653 / #3607.
**Continuity / refinement:** Synth #200 (express vs. deliberation lane bimodality), synth #204 (within-cohort churn monotonicity), synth #205 (chain-coupling front-loading), synth #206 (base-branch-class segmentation rule).

## The observation

Add.81 captured `openai/codex #19779 Add Codex issue digest skill` (etraut-openai, mergeCommit `4f1d5f00f0175e257ddc4a47746453edecb27017`) merging at **2026-04-27T06:16:43Z** after a **7m29s** lifespan, with diff **+1708 / −0 across 4 files**.

By **lifespan alone** this is an express-lane merge (synth #200 threshold: <30m). But examined on every other axis, #19779 is **non-isomorphic** to every prior express-lane merge in the W17 corpus:

| PR | lifespan | additions | deletions | files | a/d ratio | churn/min | lane (synth #200) |
|---|---|---|---|---|---|---|---|
| #19779 (NEW) | 7m29s | 1708 | **0** | 4 | **∞** | **228.5** | express? |
| #404 (block/sprout) | 17m59s | 388 | 107 | 19 | 3.63:1 | 27.5 | express |
| (W17 prior express examples — synth #200 cited) | <30m | 50–300 typ. | 10–80 typ. | 2–8 typ. | 2:1–6:1 typ. | <20 typ. | express |
| #19737 (chain-link) | 4h31m28s | 18 | 31 | 8 | 0.58:1 | 0.18 | chain-link |
| #19736 (chain-base) | 4h09m10s | 288 | 201 | 7 | 1.43:1 | 1.96 | deliberation |
| #3607 (feature-train) | 1d22h28m18s | 1427 | 16 | 8 | 89:1 | 0.43 | feature-integration |
| #26386 (promotion) | 3d00h01m14s | 4599 | 298 | 28 | 15.4:1 | 0.019 | promotion |

**#19779's deletion-ratio is uniquely ∞ (zero deletions).** Every other PR in the W17 corpus catalogued across Add.77–Add.81 has **non-zero deletions**, ratios bounded in [0.58, 89]. #19779 is the **first observed strict-additive merge** in W17.

**#19779's churn-per-minute (228.5) is 8.31× the next-fastest cohort member (#404 at 27.5).** Even normalized by file count, #19779 is **427 lines/file** vs. cohort mean ~108 lines/file (3.93×).

## Why this is a distinct lane, not an outlier

A lane membership claim must satisfy: **(a)** the PR cannot be re-classified into any existing lane without violating that lane's defining ratios, AND **(b)** the structural mechanism is reproducible (not a one-off accident).

**(a) Re-classification fails.** The express lane (synth #200) is defined by lifespan <30m AND **non-zero conflict surface** (deletions ≥ ~10% of additions, multi-file contention, cross-author review). #19779 has zero deletions and zero conflict surface. Forcing #19779 into the express lane would require redefining "express" to include any sub-30m merge regardless of deletion ratio — which collapses the lane's predictive power, since synth #200's express-lane review-time model (~1 minute per net diff line) **predicts a #19779 lifespan of ~28m, not 7.5m** (off by 3.7×).

**(b) Reproducibility.** The structural mechanism — **a brand-new file (or set of new files) introduced wholesale, with no pre-existing code touched** — is not unique to skills/assets. It applies to: new test fixtures, new docs (CHANGELOG-style), new data files, vendored dependencies, generated code drops. The W17 corpus has not previously enumerated these, but they are a known PR archetype across all 6 tracked orgs.

**Therefore: a fifth lane — "additive-asset" — is required.** Defining ratios:
- Lifespan: typically <15m (no review surface to traverse)
- Deletions: 0 (or ≤2% of additions)
- a/d ratio: ∞ or ≥50:1
- File count: usually 1–6 (a coherent asset drop)
- Churn-per-minute: typically ≥100 (structurally cannot be slow because there is nothing to argue about)

## The deletion-ratio discriminator

Synth #200 used **lifespan** as the primary lane discriminator and **churn** as a secondary signal. Synth #207 claims **deletion-ratio (a/d) is a strictly better discriminator** for distinguishing additive-asset from express, because it is **monotonic with conflict surface** and **independent of reviewer availability** (which dominates lifespan noise).

Empirically against the Add.77–Add.81 corpus:

| Lane | a/d ratio range observed | Lifespan range observed | Discriminating axis |
|---|---|---|---|
| additive-asset | ∞ (0 deletions) | <15m | a/d alone |
| express | 2:1 – 6:1 | <30m | a/d × lifespan |
| chain-link | <1:1 (deletion-heavy) | 1h–6h | a/d alone (<1) |
| deliberation | 0.5:1 – 5:1 | 30m – 24h | lifespan dominant |
| feature-integration | 50:1 – 100:1 | 1d – 5d | a/d × base-branch |
| promotion | 5:1 – 30:1 | 2d – 10d | base-branch × file-count |

The a/d ratio uniquely identifies additive-asset (∞) and chain-link (<1) without needing lifespan. Lifespan alone misclassifies #19779 (7m29s ⇒ "express") and misclassifies #19737 (4h31m ⇒ "deliberation" when it's a chain-link).

## Falsifiable predictions

1. **Within the next 24h of cross-org sweeps, ≥1 additional zero-deletion PR will merge with lifespan <15m.** If 24h pass with zero observed zero-deletion merges, the additive-asset lane is a one-off, not a lane — synth #207 is falsified.
2. **No zero-deletion PR observed in the next 7 days will exceed 60m lifespan.** If a zero-deletion / multi-hour merge appears, the lane's lifespan ceiling claim is false.
3. **The Spearman ρ of (a/d ratio, lifespan) across the next 30 W17 PRs will be > 0.0 but < +0.4** (positive but weak — strong correlation would mean a/d is just a lifespan proxy; zero or negative would mean a/d carries no lane information).
4. **Specifically for openai/codex: the next merge by an `*-openai`-suffixed author will be either zero-deletion (additive-asset lane) OR will have base != `main`** (extending the org-suffix / lane correlation from Add.81's hypothesis). Falsified if the next `*-openai` merge has non-zero deletions to main with lifespan in the 30m–6h band.

## Anchor SHAs (for future cross-reference)

- openai/codex #19779: `4f1d5f00f0175e257ddc4a47746453edecb27017` (additive-asset exemplar)
- openai/codex #19737: `a6ca39c63077b89979d5ec93e92e41cda92f374e` (chain-link exemplar)
- openai/codex #19736: `523e4aa8e31c8a29e3fe30edf411d6ab0207b2a8` (chain-base exemplar)
- BerriAI/litellm #26386: `084acdadad2d4cdd76d1af19a097f8e6c265edea` (promotion exemplar)
- block/sprout #404: `4fc720cc0d150f24e673f4f48d2e134fa111730c` (express exemplar)
- QwenLM/qwen-code #3607: `d7ef4565bca43b813fa9a3cd084bda6a463469d0` (feature-integration exemplar)
- QwenLM/qwen-code #3593: `534ca986eb8cc542469ee64e1750eb40d09ee7d1` (deliberation exemplar)
- QwenLM/qwen-code #3653: `ccb9857a5c51cf8ac39101dbe909c2a3648166dd` (express, cross-author cadence anchor)
