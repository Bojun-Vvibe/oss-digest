# W17 Synthesis #205 — Chain-coupling review penalty is FRONT-LOADED on the chain BASE, not back-loaded on the chain LINK: bolinfest #19736 → #19737 inter-merge gap of 22m19s (vs 49m31s on the prior #19735 → #19736 step) **falsifies** the synth #204 implicit framing that chain-coupling cost accumulates at the chain-link merge, and refines the within-cohort lifespan-monotonicity claim into a base-vs-link asymmetry

**Window of evidence:** 2026-04-27T00:40:17Z → 05:11:49Z (4h31m32s — open-of-cohort to last-merge in cohort, full closure of the bolinfest "permissions" 4-PR cohort).
**Repos cited:** `openai/codex` (primary, full cohort closure), `BerriAI/litellm` (cross-class control: internal-staging promotion as base-class contrast), forward-cited `openai/codex` efrazer-oai chain (#19762/#19763/#19764, opens at 04:26:47Z–04:27:06Z, will furnish the next falsifiability test).
**Continuity / refinement:** Synth #200 (express vs deliberation lanes), synth #202 (branch-name vs baseRefName audit), synth #204 (within-cohort lifespan monotonic in total churn).

## The observation

Synth #204 framed the within-cohort lifespan ordering of the bolinfest "permissions" cohort (#19734/#19735/#19736, all flat-on-main siblings) as monotonic in total churn, with the **last-merged** PR absorbing **8.7× per-churn-line** more reviewer time than the first-merged. Synth #204 attributed the steepening to **chain-coupling concern**: #19736 is the base of #19737 (the sole genuine chain link, per synth #202's baseRefName audit), so reviewer was assumed to be reading #19736 + #19737 jointly before merging the base, with the joint-review burden manifesting as the 49m31s inter-merge gap from #19735 → #19736 (vs the 28m35s gap from #19734 → #19735).

The implicit prediction inside synth #204 was: when the chain-link #19737 itself merged, it would carry **further** chain-coupling cost — perhaps an even larger gap, perhaps an even higher per-churn-line ratio than the 92.84 s/churn-line measured for #19736.

In Add.80, **#19737 merged at 2026-04-27T05:11:49Z**, mergeCommit `a6ca39c63077b89979d5ec93e92e41cda92f374e`, lifespan **4h31m28s**, +18/−31 on 8 files (total churn 49 lines). The full closed cohort:

| PR | base | mergedAt | Lifespan | total churn (a+d) | s/churn-line | Δ-from-prior gap |
|---|---|---|---|---|---|---|
| #19734 | main | 03:31:24Z | 2h51m07s = 10267s | 296 | **34.69** | (cohort start) |
| #19735 | main | 03:59:59Z | 3h19m41s = 11981s | 457 | 26.21 | +28m35s |
| #19736 | main | 04:49:30Z | 4h09m10s = 14950s | 489 | 30.57 | **+49m31s** |
| **#19737** | **pr19736** | **05:11:49Z** | **4h31m28s = 16288s** | **49** | **332.41** | **+22m19s** |

mergeCommits (verified): `0d8cdc05c84b00e1f0aa9c8ad8c89c0e1bee0d52` / `0ccd659bca7e9b48b03f2e5fdef0bbac3aa3c668` / `523e4aa8e31c8a29e3fe30edf411d6ab0207b2a8` / `a6ca39c63077b89979d5ec93e92e41cda92f374e`.

## What this falsifies

The implicit synth #204 framing was: chain-coupling penalty accumulates monotonically along the cohort's merge sequence, peaking at the chain-link merge.

The **observed** #19736 → #19737 inter-merge gap of **22m19s** is **2.22× SMALLER** than the prior #19735 → #19736 gap of **49m31s**, even though #19737 IS the topologically-coupled chain link. The chain-coupling cost is **NOT** accumulating along the merge sequence — it is **discharging**.

**The 332.41 s/churn-line ratio for #19737 is misleading**, because the denominator (49 churn lines) is artificially small. The chain link contains almost no novel content (it's a mechanical "derive boundaries" diff over a base change). The 22m19s gap reflects:

1. **CI re-run after auto-rebase** onto main (mechanically required once #19736 lands, no human gating).
2. **One last reviewer green-light** to confirm the rebase didn't break anything (≤ 5-10 minutes of human time).
3. **Optional** maintainer click of the merge button (asynchronous, queue-bound).

Total reviewer-attention time for #19737 is approximately the 22m19s gap minus CI time — likely **5-10 human minutes**, not the literal 4h31m28s lifespan. The lifespan denominator overstates human attention by **~30-50×** for chain links.

## The refined model: front-loaded chain-coupling

**Restated claim:** When a same-author cohort contains a chain (one or more PRs based on cohort siblings rather than `main`), the joint-review cost of the chain is **paid upfront on the chain BASE**, not on the chain LINKS. The signal is a **single oversized inter-merge gap immediately preceding the base merge** (here: 49m31s before #19736), followed by **smaller-than-baseline gaps for each chain link** (here: 22m19s for #19737, vs the cohort baseline median of ~28m35s from the #19734 → #19735 transition).

Concretely:
- **#19734 → #19735 gap (no chain coupling):** 28m35s, baseline.
- **#19735 → #19736 gap (chain base, joint-review burden):** 49m31s = **1.73× baseline**.
- **#19736 → #19737 gap (chain link, mechanical discharge):** 22m19s = **0.78× baseline**.

The chain-base gap inflation (+1.73× baseline = +20m56s above baseline) and the chain-link gap deflation (−0.22× baseline = −6m16s below baseline) are **both with respect to the baseline transition** within the same cohort. The **net excess time across the chain (#19736 + #19737) is +14m40s above twice-baseline** — meaningful, but **NOT the +49m31s the chain-base gap alone would suggest**.

## Falsifiable predictions for the next 5 chain-containing cohorts

Define a "chain-containing cohort" as a same-author near-simultaneous-open (≤ 60s) cohort of N PRs where ≥ 1 PR has `baseRefName` matching another PR's `headRefName` in the cohort. For each such cohort:

**P205a (chain-base inflation):** The inter-merge gap immediately preceding the chain-base merge will be **≥ 1.5× the median baseline inter-merge gap** of the same cohort (where baseline excludes the chain-base and chain-link transitions). Predict satisfaction in **≥ 4 of next 5 cohorts** observed.

**P205b (chain-link deflation):** The inter-merge gap immediately following the chain-base merge (i.e., the chain-link merge gap) will be **≤ 1.0× the median baseline inter-merge gap** of the same cohort. Predict satisfaction in **≥ 4 of next 5 cohorts**.

**P205c (per-churn-line inversion):** For chain-link PRs with churn ≤ 100 lines, the lifespan-derived s/churn-line ratio will **exceed 200 s/line in ≥ 4 of next 5 cases**, but this number should NOT be interpreted as reviewer attention — it is denominator-shrinkage noise. The TRUE reviewer attention proxy is **inter-merge gap minus CI baseline** (~10 minutes for codex). Falsifiable by collecting CI-duration metadata from `gh api repos/.../actions/runs` for the head SHA of the chain link and computing `(inter-merge-gap) − (CI duration)`; predict the residual is ≤ 30 minutes in **≥ 4 of next 5 cases**.

**P205d (cross-cohort generalization, qualifying):** The front-loaded pattern holds for **same-author** cohorts. For **multi-author** cohorts (where different authors contribute siblings vs the chain link), the chain-base inflation may be **larger** (because the chain-link author's reputation does not transfer to the chain-base reviewer's pre-loading), and the chain-link deflation may be **smaller** (because reviewer must context-switch). Predict: in multi-author chain cohorts, the chain-link gap will be **≥ 0.6× the chain-base gap**, vs the single-author 0.45× ratio (22m19s / 49m31s) observed here. Falsifiable on the **first multi-author chain cohort** observed in W17 or W18.

## The forward test: efrazer-oai 3-link strict chain (#19762 / #19763 / #19764)

Add.80 records the opening of a TRUE 3-link linear chain by `efrazer-oai`:

- #19762: head `dev/efrazer/agent-identity-auth-async`, base `main`, +291/−203 / 25 files = 494 churn (head SHA `c2234d3098524ec6d5b06b8baaae97915bb3eefd`)
- #19763: head `dev/efrazer/agent-identity-eager-runtime`, base `dev/efrazer/agent-identity-auth-async` (= #19762 head), +47/−188 / 6 files = 235 churn (head SHA `362c165a338fddecb70b90fb1a0c42d8c3fd37eb`)
- #19764: head `dev/efrazer/agent-identity-jwt-verify`, base `dev/efrazer/agent-identity-eager-runtime` (= #19763 head), +495/−115 / 13 files = 610 churn (head SHA `93237e7aae6e69feffc475c5d4c1ea729c1a4d32`)

This cohort has **2 chain transitions** (#19762 → #19763, #19763 → #19764), so the front-loaded model predicts:

- The inter-merge gap **before** #19762 lands will be **abnormally large** (carries joint-review burden of all 3 PRs).
- The inter-merge gap from #19762 → #19763 will be **small** (mechanical chain-link discharge).
- The inter-merge gap from #19763 → #19764 will be **small** (mechanical chain-link discharge).

**If observed:** synth #205's front-loaded model is corroborated for N > 2 chain depth.

**If the gaps are flat or back-loaded:** synth #205 is falsified, and a new model (perhaps "gradual chain-coupling release") is needed.

## What this is NOT claiming

This synth does NOT claim that chain depth has no effect on review time — it claims the effect is **concentrated at the chain base**, not distributed across the chain. For chains of depth ≥ 4, the front-loaded model may break down (reviewer cannot pre-load 4+ PRs in working memory at once; the inflation may then split across the first 2 base merges). Falsifiable on the first depth-4 chain observed in W17 or W18.

This synth also does NOT claim that the litellm #26386 internal-staging promotion (lifespan 3d00h01m14s, churn 4897 lines, mergeCommit `084acdadad2d4cdd76d1af19a097f8e6c265edea`, base `litellm_internal_staging`) is comparable to the bolinfest cohort's per-churn-line numbers. Synth #206 will codify the segmentation of merge events by base-branch class before any cross-cohort comparisons are valid.

## Cross-references

- Synth #189: original "chained-base 4-PR stack bootstrap" framing (now refined: it was 3 flat + 1 chain).
- Synth #192: P192a falsified (recorded in Add.76), this synth's P205a–d are the successors.
- Synth #197: foundation siblings clear while chain stays open — confirmed and extended (chain DID clear, with front-loaded penalty).
- Synth #200: express-lane vs deliberation-lane bimodality — this synth operates strictly within deliberation-lane (all 4 PRs > 2h lifespan).
- Synth #202: branch-name vs baseRefName audit — bidirectional uninformativeness of branch-name convention confirmed in Add.80 by the efrazer-oai counterexample.
- Synth #204: within-cohort lifespan monotonic in total churn — this synth refines #204's "8.7× steepening at last cohort step" by attributing the steepening to the chain-base step, not the cohort-position step per se.
