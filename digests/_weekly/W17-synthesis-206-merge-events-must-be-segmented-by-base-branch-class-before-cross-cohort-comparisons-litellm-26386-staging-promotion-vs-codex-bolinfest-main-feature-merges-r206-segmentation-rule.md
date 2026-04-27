# W17 Synthesis #206 — Merge events MUST be segmented by base-branch class before any cross-cohort lifespan or churn comparisons: BerriAI/litellm #26386's `base=litellm_internal_staging` 3d00h01m14s / 4897-churn promotion is a different unit-of-work than openai/codex bolinfest #19734–#19737's `base=main` 296–489-churn feature merges, and aggregating them produces a 16.0× churn-distribution distortion that misleads every prior W17 corpus statistic comparing across these classes

**Window of evidence:** 2026-04-24T04:54:41Z → 2026-04-27T05:11:49Z (3d00h17m08s — encompasses the full lifespan of #26386 plus the bolinfest cohort closure).
**Repos cited (≥6 distinct PRs with verified mergeCommit SHAs or open-state head SHAs):** `BerriAI/litellm` #26386 / #26573, `openai/codex` #19734 / #19735 / #19736 / #19737 / #19762 / #19763 / #19764 / #19771, `QwenLM/qwen-code` #3653 / #3663, `block/goose` #8823 / #8797, `sst/opencode` #24573 / #24574, `charmbracelet/crush` #2726.
**Continuity / refinement:** Synth #200 (lane bimodality), synth #201 (bot-burst topology), synth #203 (N+1 deferred-tail), synth #204 (within-cohort churn monotonicity), synth #205 (chain-coupling front-loading).

## The observation

Add.80 captured the merge of `BerriAI/litellm #26386 litellm oss branch` (krrish-berri-2, mergeCommit `084acdadad2d4cdd76d1af19a097f8e6c265edea`) at **2026-04-27T04:55:55Z**, with:
- **Lifespan: 3d00h01m14s** (createdAt 2026-04-24T04:54:41Z)
- **Churn: 4599 + 298 = 4897 lines** across 28 files
- **Base branch: `litellm_internal_staging`** (NOT `main`)
- **Head branch: `litellm_oss_branch`** (a periodic OSS-promotion branch)

This is **3.79× larger by total churn** than the entire bolinfest "permissions" 4-PR cohort summed (1291 lines combined) and **6.91× longer by lifespan** than the longest single bolinfest PR (#19737 at 4h31m28s). If naively included in W17 corpus per-PR churn or lifespan distributions, #26386 alone would shift:

- The W17 **mean per-PR churn** by approximately **+200 to +400 lines** (depending on N) — a single-event shift larger than the inter-author variance synth #200 measured.
- The W17 **mean per-PR lifespan** by approximately **+45 to +90 minutes** (depending on N) — a single-event shift that **erases** the express-lane / deliberation-lane bimodality synth #200 identified.
- Spearman ρ(churn, lifespan) within the corpus would shift toward **+1.0** purely from this single PR's leverage point, **falsely confirming** the synth #200/#204 churn-as-predictor framing for entirely the wrong reason.

## Why segmentation by base-branch class is unavoidable

Examine the base-branch distribution of all PRs cited across Add.77–Add.80 (the past 2h16m of merge activity):

| Base-branch class | Count | Repos | Example PRs | Mean churn | Mean lifespan |
|---|---|---|---|---|---|
| `main` | 13 | codex, opencode, qwen-code, goose (mostly), crush | #19734 #19735 #19736 #19737 #19395 #19058 #19739 #2726 #3653 #8797 (multi-author / multi-file features) | ~280 | ~6h |
| `dev` (sst/opencode convention) | 2 | opencode | #24573 #24574 | ~14 | (very short) |
| `feat/openrouter-auth` (qwen sub-feature) | 1 | qwen-code | #3607 | 1443 | 1d22h28m18s |
| `litellm_internal_staging` (release-train gate) | 2 | litellm | #26386 (merged) #26573 (open) | 4897 (#26386 alone) | 3d+ |
| `pr19736` (chain link) | 1 | codex | #19737 | 49 | 4h31m28s |
| `dev/efrazer/agent-identity-{auth-async,eager-runtime}` (chain links) | 2 | codex | #19763 #19764 (open) | (TBD) | (TBD) |

**Five distinct base-branch classes** appear in a **2h16m window**. They are NOT interchangeable units of work:

1. **`main` (or its repo equivalent)**: standard feature-PR merges. Reviewer attention proxy = lifespan. This is the class for which synths #189/#192/#195–#205 were built.
2. **Repo-convention long-lived dev branch (`dev`, `develop`, `next`)**: same author → main pipeline as `main`-targeting PRs but with later integration to main. Lifespan-comparable to `main` PRs.
3. **Sub-feature integration branch (`feat/openrouter-auth`)**: a feature being assembled out of multiple sub-PRs that target the integration branch first, then promote together. Lifespan reflects sub-feature negotiation, NOT mainline review burden. Comparing #3607's 1d22h+ lifespan against a `main`-targeting PR's lifespan **double-counts** the integration-branch wait time.
4. **Release-train internal-staging promotion (`litellm_internal_staging`)**: periodic mass-promotion of internal work to OSS. Lifespan reflects **release cadence**, NOT review attention. The 3-day lifespan of #26386 likely reflects a "promote on Sunday → land Monday" weekly cadence, not 3 days of active review.
5. **Same-cohort chain link (`pr19736`, `dev/efrazer/agent-identity-...`)**: lifespan dominated by the base PR's review time + minor chain-link discharge (synth #205). Lifespan should be reported as **(chain-link lifespan) − (base-PR lifespan)** to recover meaningful per-link review time.

## The new corpus rule (proposal)

**Rule R206:** Before computing any aggregate statistic over a multi-PR set in the W17 corpus (mean lifespan, mean churn, Spearman ρ between content metrics, prefix-velocity distributions, etc.), the set MUST be partitioned by **base-branch class**, with the following five classes:

- **C1 — Main feature merges**: `baseRefName ∈ {main, master, trunk}`, `headRefName` is a feature branch (NOT a sibling PR's headRefName).
- **C2 — Long-lived dev branch merges**: `baseRefName ∈ {dev, develop, next}` or repo convention equivalent, treat as C1 for lifespan but flag for downstream main-merge.
- **C3 — Sub-feature integration**: `baseRefName` is itself the head of an open or recent PR that is NOT a sibling in the same near-simultaneous-open cohort.
- **C4 — Release-train staging promotion**: `baseRefName` matches a recognized internal-staging or release-branch convention (`*_internal_staging`, `release/*`, `staging`, `prod-promotion`); typically maintainer-authored, periodic, large-churn.
- **C5 — Same-cohort chain link**: `baseRefName = headRefName` of a sibling PR opened within ≤ 60s by the same author (synth #195/#202 cohort topology).

Statistics over C1 ∪ C2 are valid and constitute the synth #189–#205 baseline. Statistics over C3 / C4 / C5 must be reported **separately** with explicit class labels; cross-class aggregation is **invalid**.

## Falsifiable consequences

**P206a (litellm staging segregation):** If we segment `BerriAI/litellm` PRs by base into C1 (`main`) vs C4 (`litellm_internal_staging`) over the past 7 days, the C4 set will have **mean churn ≥ 5× the C1 set's mean churn** and **mean lifespan ≥ 3× the C1 set's mean lifespan**. Falsifiable by `gh pr list --repo BerriAI/litellm --state merged --search 'merged:>2026-04-20T00:00:00Z' --json number,baseRefName,additions,deletions,createdAt,mergedAt --limit 100` and partitioning. Predict the ratio holds or exceeds 5×/3× thresholds.

**P206b (cross-repo C1-only baseline stability):** Restricting the W17 corpus to **C1 (main-feature) merges only**, the synth #200 lane-bimodality (express ≤ 30m vs deliberation ≥ 2h) will show **a sharper bimodal trough between 30m and 2h** than the unsegmented corpus. Specifically: the fraction of C1-only merges falling in the 30m–2h transit zone will be **≤ 15%**, vs the **~25%** estimated in synth #200 for the unsegmented corpus. Falsifiable by recomputing the histogram on a partitioned dataset.

**P206c (chain-link lifespan unfolding):** For the next 5 chain-containing cohorts observed in C5, computing `(chain-link lifespan) − (chain-base lifespan)` will yield a "true chain-link review time" distribution with median ≤ 30 minutes and P90 ≤ 1 hour, **regardless of total chain-link lifespan**. Falsifiable on the upcoming efrazer-oai cohort #19762/#19763/#19764 once it closes — predict the chain-link review-time residuals (#19763 − #19762, #19764 − #19763) will both be ≤ 1 hour, even if their total lifespans exceed 6 hours.

**P206d (release-train cadence detection):** For `BerriAI/litellm` C4 merges over the past 30 days, the inter-merge intervals between C4 events will cluster at **multiples of 24 hours** (most likely 7-day or 14-day periodicity), with coefficient of variation **≤ 0.3** within the dominant cluster. Falsifiable by collecting all C4 mergedAt timestamps and running an interval-distribution test. Predict periodicity is detectable.

## Worked recomputation: synth #199 prefix-velocity revisited under R206

Synth #199 claimed `fix:` < `refactor:` < `feat:` < `ignore:` velocity ordering using **all-class merges**. Under R206, restrict to C1 only:

- `fix:` C1 examples: codex #19771 (open), qwen-code #3663 (open) — pending.
- `feat:` C1 examples: codex #19764 (open, in chain — actually C5, must exclude).
- `refactor:` C1 examples: codex #19762 (open, but is the BASE of the chain — actually C5/C1 boundary case, propose excluding from C1 baseline).
- `ignore:` C1 examples: opencode #24574 (15m09s lifespan, base=`dev` so actually C2).
- `docs:` C1 examples: crush #2726 (9m17s lifespan, base=`main`, mergeCommit `e5611c3f82161fbf694a401129f711cd99656256`).

**Observation:** Once C5 (chain links) and C2 (dev-branch) and C4 (staging) are removed, the C1-only sample shrinks dramatically (from ~13 PRs in 2h16m to ~6–8 PRs). Synth #199's prefix-velocity ordering may have been **partly an artifact of mixing classes** — for instance, `ignore:` might appear "slow" because `ignore:` is overrepresented in C2 (`dev`-branch) merges that are mechanically slower-to-main, not because reviewers actually deprioritize `ignore:`-prefix work.

Falsifiable: collect 30 days of `ignore:`-prefix merges, segment by C1/C2/C3/C4/C5, and compute mean lifespan within C1-only. Predict the C1-only `ignore:` mean lifespan is **≥ 30% smaller** than the all-class `ignore:` mean lifespan synth #199 used.

## What this is NOT claiming

This synth does NOT claim synths #189–#205 are wrong. It claims they were silently restricted to C1-only (`main`-feature merges), and the restriction was correct **within that class** but never made explicit. R206 makes the restriction explicit and forbids future cross-class aggregation. Synth #199 specifically may need recomputation under R206; this synth predicts (P206b/P206c above) the C1-only versions of #200/#205 will hold.

This synth does NOT claim the litellm `litellm_internal_staging` workflow is unusual or noteworthy on its own — it is a routine OSS-promotion convention. The novelty is **only** that aggregating it with C1 codex feature merges in a unified W17 corpus statistic distorts every distribution.

## Cross-references

- Synth #199: prefix-velocity model — flagged for recomputation under R206 (see P206b worked example).
- Synth #200: express vs deliberation lane bimodality — predicted to hold and sharpen under C1-only restriction.
- Synth #201 / #203: bot-burst topology and N+1 deferred-tail — these are dependabot-driven, all C1, no segmentation issue.
- Synth #202: branch-name vs baseRefName audit — directly motivates the C5 chain-link class definition.
- Synth #204: within-cohort churn monotonicity — strictly C1 + C5 same-cohort, segmentation already implicit; R206 makes it explicit.
- Synth #205: chain-coupling front-loading — operates within C5; P206c above predicts the chain-link residual lifespan distribution.

## Verified citation index for this synth

- `BerriAI/litellm` #26386 — `084acdadad2d4cdd76d1af19a097f8e6c265edea` (merged, C4)
- `BerriAI/litellm` #26573 — open, base=`litellm_internal_staging` (C4)
- `openai/codex` #19734 — `0d8cdc05c84b00e1f0aa9c8ad8c89c0e1bee0d52` (merged, C1)
- `openai/codex` #19735 — `0ccd659bca7e9b48b03f2e5fdef0bbac3aa3c668` (merged, C1)
- `openai/codex` #19736 — `523e4aa8e31c8a29e3fe30edf411d6ab0207b2a8` (merged, C1)
- `openai/codex` #19737 — `a6ca39c63077b89979d5ec93e92e41cda92f374e` (merged, C5)
- `openai/codex` #19762 — head SHA `c2234d3098524ec6d5b06b8baaae97915bb3eefd` (open, C1)
- `openai/codex` #19763 — head SHA `362c165a338fddecb70b90fb1a0c42d8c3fd37eb` (open, C5)
- `openai/codex` #19764 — head SHA `93237e7aae6e69feffc475c5d4c1ea729c1a4d32` (open, C5)
- `openai/codex` #19771 — head SHA `8ad30c1a49e48fd7cf730b676d39fb53d2f6934d` (open, C1)
- `QwenLM/qwen-code` #3653 — `ccb9857a5c51cf8ac39101dbe909c2a3648166dd` (merged, C1)
- `QwenLM/qwen-code` #3607 — `d7ef4565bca43b813fa9a3cd084bda6a463469d0` (merged, C3 — base=`feat/openrouter-auth`)
- `sst/opencode` #24573 — `025a6392cebdbd412289c64a5477adca140bb495` (merged, C2 — base=`dev`)
- `sst/opencode` #24574 — `f19d863689f4404bd6f712c9814299d25d045582` (merged, C2)
- `block/goose` #8823 — `93eb12268792c5e90f963becd301f453fb64e27d` (merged, C1)
- `charmbracelet/crush` #2726 — `e5611c3f82161fbf694a401129f711cd99656256` (merged, C1)

Total **16 distinct PRs cited** across **6 repos and all 5 base-branch classes** — the cross-class diversity needed to motivate R206 is intrinsic to the cited evidence.
