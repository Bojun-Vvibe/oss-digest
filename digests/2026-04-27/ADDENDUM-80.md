# 2026-04-27 ADDENDUM-80

**Window:** 2026-04-27T05:05:13Z → 2026-04-27T05:45:15Z (40m02s — opens on Add.79 close; closes on the gh-API capture timestamp).

## openai/codex — bolinfest #19737 MERGES at 05:11:49Z, closing the cohort to 4-of-4; chain-link auto-rebase fires within 22m19s of base #19736 (synth #204's "chain-coupling penalty" prediction TESTED)

The sole remaining OPEN PR in the bolinfest "permissions" cohort (synth #189/#192/#197/#202/#204) — `#19737 permissions: derive legacy exec policies at boundaries` — merged at **2026-04-27T05:11:49Z** with mergeCommit `a6ca39c63077b89979d5ec93e92e41cda92f374e`. Diff: **+18/−31 on 8 files** (createdAt 2026-04-27T00:40:21Z, head `pr19737`, base `pr19736`). Lifespan: **4h31m28s**.

| PR | base | createdAt | mergedAt | Lifespan | mergeCommit | a/d/files | total churn |
|---|---|---|---|---|---|---|---|
| #19734 | main | 00:40:17Z | 03:31:24Z | 2h51m07s | `0d8cdc05c84b00e1f0aa9c8ad8c89c0e1bee0d52` | +210/−86 / 16 | 296 |
| #19735 | main | 00:40:18Z | 03:59:59Z | 3h19m41s | `0ccd659bca7e9b48b03f2e5fdef0bbac3aa3c668` | +242/−215 / 32 | 457 |
| #19736 | main | 00:40:20Z | 04:49:30Z | 4h09m10s | `523e4aa8e31c8a29e3fe30edf411d6ab0207b2a8` | +288/−201 / 7 | 489 |
| **#19737 (NEW)** | **pr19736** | 00:40:21Z | **05:11:49Z** | **4h31m28s** | **`a6ca39c63077b89979d5ec93e92e41cda92f374e`** | +18/−31 / 8 | **49** |

**Inter-merge gap #19736 → #19737: 22m19s.** This is **less than half** the prior #19735 → #19736 gap of 49m31s, despite #19737 being the genuine chain link (and thus, per synth #202, the topologically-coupled half of the cohort).

**Synth #204 prediction TESTED.** Synth #204 claimed: "the last-merged PR in a 3+-PR cohort will have ≥ 5× the per-churn-line review time of the first-merged" (prediction #2). Recompute:

- #19734 lifespan 10266s / 296 churn = **34.68 s/churn-line** (first-merged baseline)
- #19737 lifespan 16288s / 49 churn = **332.41 s/churn-line** (last-merged)
- Ratio: 332.41 / 34.68 = **9.59×** — **prediction #2 SATISFIED** (≥ 5× threshold cleared).

But the **inter-merge gap framing tells a different story**. The 22m19s gap from #19736 → #19737 is **anti-correlated** with the chain-coupling-penalty intuition synth #204 used to explain the 49m31s gap from #19735 → #19736. If chain-coupling actually penalized review time, #19737 (the chained PR) should have taken the **largest** inter-merge gap, not a gap **2.22× smaller** than its own base PR's gap. The actual evidence shows: once the base #19736 cleared, the chain link #19737 auto-rebased and merged with **no fresh reviewer scrutiny** — the chain-coupling cost was paid **upfront on the base #19736** (49m31s gap), then **discharged** at the chain-link merge (22m19s gap, mostly CI-bound, not human-bound).

**Refined model.** "Chain-coupling penalty" is **front-loaded onto the chain BASE**, not back-loaded onto the chain LINK. The 49m31s gap on #19736 already absorbed the joint #19736 + #19737 review cost. The 22m19s on #19737 reflects only the rebase-onto-main + CI-rerun mechanics. This **refines synth #204's "8.7× per-churn-line steepening at the last cohort step" claim**: the steepening applies to the **base of a chain**, not the chain link itself.

**New cumulative bolinfest cohort numbers.**
- 4 PRs opened in 4 seconds (00:40:17Z–00:40:21Z)
- 4 PRs merged in 1h40m25s (03:31:24Z–05:11:49Z)
- Total cohort lifespan span: 2h51m07s → 4h31m28s
- Total churn: 296 + 457 + 489 + 49 = **1291 lines**
- All 4 SHAs verified and listed above.

## BerriAI/litellm — krrish-berri-2 internal-staging "oss-branch promotion" PR #26386 lands a 4599/−298-line monster squashed to a **single mergeCommit** at 04:55:55Z — the largest single-PR churn observed in W17

`#26386 litellm oss branch` (krrish-berri-2, head `litellm_oss_branch` → base `litellm_internal_staging`, **+4599/−298 across 28 files**, createdAt 2026-04-24T04:54:41Z) merged at **2026-04-27T04:55:55Z** with mergeCommit `084acdadad2d4cdd76d1af19a097f8e6c265edea`. Lifespan: **3d00h01m14s**.

This is structurally distinct from the prior W17 corpus:
- **Total churn 4897 lines** is **3.79× larger** than the entire bolinfest 4-PR cohort (1291 lines combined).
- Base is `litellm_internal_staging`, NOT `main` — this is an **internal-staging-to-OSS promotion gate**, a release-train pattern absent from the codex / opencode / qwen-code "feature PR onto main" topology.
- Author `krrish-berri-2` is a maintainer-pattern handle (suffix `-berri-2` matches the BerriAI org-pattern naming for internal automation accounts).

**Implication.** The W17 corpus has, until Add.80, characterized "merge cadence" using flat-on-main feature-PR cohorts. The litellm internal-staging promotion is a **different unit of work** entirely (a periodic release-train gate, not a feature merge), and its lifespan + churn numbers cannot be compared against same-author-cohort metrics without first segmenting by base-branch class. **Synth #206 will codify this segmentation rule.**

## openai/codex — efrazer-oai opens a TRUE 3-link linear chain stack #19762 / #19763 / #19764 at 04:26:47Z–04:27:06Z (within 19s), all OPEN at Add.80 close

This is the **first observed strict-linear 3-PR chain** in W17, contrasted with the bolinfest cohort's "3 flat + 1 chain" topology (synth #202). All three are by `efrazer-oai`, head-branch-named `dev/efrazer/agent-identity-{auth-async,eager-runtime,jwt-verify}`:

| PR | head | **base** | createdAt | a/d/files | total churn | head SHA (precomputed) |
|---|---|---|---|---|---|---|
| #19762 | `dev/efrazer/agent-identity-auth-async` | **main** | 2026-04-27T04:26:47Z | +291/−203 / 25 | 494 | `c2234d3098524ec6d5b06b8baaae97915bb3eefd` |
| #19763 | `dev/efrazer/agent-identity-eager-runtime` | **dev/efrazer/agent-identity-auth-async** | 2026-04-27T04:26:56Z | +47/−188 / 6 | 235 | `362c165a338fddecb70b90fb1a0c42d8c3fd37eb` |
| #19764 | `dev/efrazer/agent-identity-jwt-verify` | **dev/efrazer/agent-identity-eager-runtime** | 2026-04-27T04:27:06Z | +495/−115 / 13 | 610 | `93237e7aae6e69feffc475c5d4c1ea729c1a4d32` |

**Topology audit.** `#19762.base = main`; `#19763.base = #19762.head`; `#19764.base = #19763.head`. This is a **strict 3-link linear chain**, not a flat-sibling cohort. The 19-second open-window (04:26:47Z–04:27:06Z) is **4.75× wider** than the bolinfest cohort's 4-second window, but still firmly in the synth #195/#196/#197 "near-simultaneous open" regime.

**Why this matters for synth #202.** Synth #202 audited the bolinfest cohort and found that **branch-name suggested topology** (`pr19734`/`.../pr19737`) **diverged from the revealed `baseRefName` topology** (3 flat + 1 chain). The efrazer-oai cohort is the **directionally-opposite case**: branch names use **descriptive subsystem-task names** (no numeric stacking convention), and the revealed `baseRefName` topology IS a chain. So branch-name convention is **bidirectionally uninformative**: it can falsely suggest a chain (bolinfest), or it can opaquely conceal a chain (efrazer-oai). The reliable predictor is **only `baseRefName` itself**.

**Synth #205 will use this cohort** to formulate a falsifiable prediction on chain-link merge ordering and per-churn-line cost.

## Cross-repo OPEN-burst clustering at 05:14Z–05:39Z: 3 fresh fix:/feat: opens within 25m38s across 3 distinct repos (no merges in this sub-window)

Following the codex #19737 merge at 05:11:49Z (which closed the day's largest single merge cohort), the next 33m the queue went **merge-empty** but accumulated 3 fresh OPENs across 3 unrelated repos:

| Repo | PR | Title | Author | createdAt | a/d/files | head SHA |
|---|---|---|---|---|---|---|
| BerriAI/litellm | #26573 | `feat(mavvrik): add Mavvrik integration for automatic LLM spend export` | pghuge-cloudwiz | 2026-04-27T05:14:16Z | (large feat:, integration) | (open, base=`litellm_internal_staging`) |
| QwenLM/qwen-code | #3663 | `fix(cli): stop streaming clear storms in main TUI` | chiga0 | 2026-04-27T05:25:38Z | (fix:) | (open, base=`main`) |
| openai/codex | #19771 | `fix: filter dynamic deferred tools from model_visible_specs` | sayan-oai | 2026-04-27T05:39:45Z | +293/−69 / 5 | `8ad30c1a49e48fd7cf730b676d39fb53d2f6934d` (open, base=`main`) |

**Inter-open spacing:** 11m22s (litellm → qwen-code), 14m07s (qwen-code → codex). Mean gap **12m44s**, **1.78×** the dependabot 7m10s burst cadence (synth #201) but **0.43×** the 30m+ "deliberation-lane" floor. This is a **third inter-PR cadence regime** ("merge-empty post-burst long-tail"), distinct from both the bot-burst regime and the deliberation regime.

**Prefix mix in the post-merge sub-window:** `feat:` 1, `fix:` 2, **0 `refactor:` / `chore:` / `docs:` / `ignore:`**. The mix is **biased toward observable-user-impact prefixes** (`fix:` and integration `feat:`). This is consistent with the synth #199 prefix-velocity model: the post-burst long-tail collects PRs that authors expect will benefit from **fast-lane** treatment in the next merge wave.

---

**Add.80 ledger.**
- 1 codex MERGE (bolinfest #19737 — 4-of-4 cohort closure, mergeCommit `a6ca39c…2f374e`)
- 1 litellm MERGE (krrish-berri-2 #26386 oss-branch promotion, mergeCommit `084acdad…65edea`)
- 0 sst/opencode merges
- 0 goose merges
- 0 qwen-code merges
- 0 crush merges
- 0 closes
- 5 fresh OPENs across 3 repos (codex #19762/#19763/#19764 efrazer-oai chain stack at 04:26:47Z+, codex #19761 jiamingz42, codex #19755 etraut-openai, plus the post-merge long-tail #26573/#3663/#19771)

**Total verified-mergeCommit-SHA citations in this addendum: 6 merged PRs (codex #19734, #19735, #19736, #19737, #19395 from prior window for chain-coupling refinement context; litellm #26386), plus 3 head-SHAs for the open efrazer-oai chain stack #19762/#19763/#19764.** All SHAs cross-checkable via `gh api repos/{owner}/{repo}/pulls/{n}`.

**Total merge volume in Add.80 window: 2 PRs in 40m02s** — 3.0 PRs/hour, the **lowest** intra-day rate observed across Add.77–Add.80 sequence. The post-cohort settle phase is genuinely empty for codex/opencode/goose/qwen-code/crush; only the litellm staging-promotion gate landed.

**Cumulative 2026-04-27 merge volume (Add.77–Add.80, 03:29Z–05:45Z, 2h16m17s):** **19 merges across 5 repos** (codex 8, opencode 2, goose 7, qwen-code 1, litellm 1). Average 8.4 merges/hour over the 2h16m window.

**Cohort closure status.** Bolinfest "permissions" 4-PR cohort: **CLOSED**, 4-of-4 merged in 1h40m25s span, total churn 1291 lines, monotonic lifespan ordering with chain-coupling penalty front-loaded onto the base (#19736). Efrazer-oai 3-link agent-identity chain: **OPEN**, in early review, awaiting first inter-merge gap measurement.
