# W17 synthesis #202 — branch-name-suggested topology vs base-ref-revealed topology divergence: bolinfest codex pr19734/pr19735/pr19736/pr19737 looked like a 4-PR chained stack across synths #189/#192/#197 but baseRefName audit (after the partial clear) reveals 3 flat-on-main siblings + 1 single-link chain (#19737 on #19736) — introducing a new lens for stack classification and falsifying the chained-base assumption used by three prior synths

**Lens novelty.** Synths #189, #192, and #197 all treated bolinfest's `pr19734`/`pr19735`/`pr19736`/`pr19737` cohort as a **4-PR chained-base stack** based on (i) contiguous PR numbers, (ii) all four opened within 4 seconds of each other, (iii) sequential branch names that look stack-encoded, and (iv) prior-W17-corpus precedent of bolinfest using chained-base stacks. The merge-clearance evidence in ADDENDUM-78 (#19734 + #19735 both merged with **baseRefName=main**, NOT chained on each other) **falsifies the chained-stack assumption** for three of the four PRs. The actual topology is **3 flat-on-main siblings + 1 single-link chain** (#19737 has baseRefName=`pr19736`).

This synth introduces a new lens for the W17 multi-PR-shape taxonomy: **branch-name-suggested topology must be verified against `baseRefName` audit**; the two are not the same signal, and the W17 corpus has been over-classifying flat-sibling cohorts as chained stacks because of branch-naming convention.

## The configuration: bolinfest "permissions" cohort, 2026-04-27T00:40:17Z

Source: `gh pr view 19734/19735/19736/19737 --repo openai/codex --json baseRefName,headRefName,createdAt,mergedAt,additions,deletions,changedFiles,mergeCommit,title,state` (executed during ADDENDUM-78 capture).

| PR | Title | **baseRefName** | headRefName | createdAt | mergedAt | State | Diff |
|---|---|---|---|---|---|---|---|
| #19734 | `permissions: centralize legacy sandbox projection` | **main** | `pr19734` | 00:40:17Z | **03:31:24Z** | MERGED | +210/−86, 16 files |
| #19735 | `permissions: store only constrained permission profiles` | **main** | `pr19735` | 00:40:18Z | **03:59:59Z** | MERGED | +242/−215, 32 files |
| #19736 | `permissions: constrain requirements as profiles` | **main** | `pr19736` | 00:40:20Z | — | OPEN | +288/−201, 7 files |
| #19737 | `permissions: derive legacy exec policies at boundaries` | **pr19736** | `pr19737` | 00:40:21Z | — | OPEN | +18/−31, 8 files |

**Observation 1: 3 of 4 PRs are flat-on-main siblings.** #19734, #19735, #19736 all base=`main`. They are not stacked on each other; each one's diff is independently mergeable to `main`. Despite the contiguous numbering and shared `pr1973N`-style branch naming, the underlying git topology is a **flat sibling cohort**, not a chain.

**Observation 2: Only #19737 is a real chain link.** #19737 has baseRefName=`pr19736`. It is **chained on #19736** (the third flat sibling) — so #19736 functions both as a flat sibling to #19734/#19735 AND as the parent of a single-link chain leading to #19737.

**Observation 3: Effective topology is "3-sibling flat cohort with one trailing chain-of-1".** Not a 4-PR stack. Not a 4-PR flat cohort either. A hybrid shape that the W17 taxonomy did not previously have a name for.

## Falsification ledger for prior synths

### Synth #189 (`bolinfest chained-base 4-PR stack bootstrap during sibling foundation flight`)

**Original claim:** 4-PR chained-base stack, with each PR baseRefName-chained on the previous.

**Evidence against:** baseRefName audit shows only 1 of 3 prospective chain links is actually present (#19737→#19736). The "stack bootstrap" framing is wrong; it should have been called a **"flat sibling cohort with trailing single-link chain bootstrap"** or simply **"3-sibling flight + 1-link chain extension"**.

**What the synth got right:** the same-second open (4 PRs in 4 seconds), the single-author identity, the shared subsystem (`permissions`), the foundation-bootstrap semantic. These are all unaffected by the topology revelation.

**What the synth got wrong:** the structural prediction of "stack-merge-from-bottom-up ordering" implicit in the chained-stack framing. Bottom-up doesn't apply to flat siblings; they can merge in any order. Empirically, #19734 (lowest-numbered) merged first and #19735 (second-lowest) second — which **looks** bottom-up but is just open-order, since with 4-second open-spacing PR-number monotonicity ≈ open-order monotonicity ≈ any-order monotonicity.

### Synth #192 (`load-bearing file conflict in flight … bolinfest 5-deep permissions stack holds config-requirements-rs`)

**Original claim:** "5-deep permissions stack" — counts #19734–#19737 plus an additional anchor PR as a 5-deep chain.

**Evidence against:** the cohort is 4 PRs, not 5, and only 1 chain link exists. The "5-deep" depth count is a count of nominal PRs, not chain depth; actual chain depth is **1** (just #19737→#19736).

**What the synth got right:** the load-bearing-file observation (`config_requirements.rs` was touched by the cohort, in flight against a separate abhinav-oai PR) — the file-conflict analysis is independent of chain topology and stands.

### Synth #197 (`foundation siblings clear while chained stack on top stays open … falsifying P192a`)

**Original claim:** sets up a foundation-siblings-clear / chained-stack-stays-open dichotomy where the bolinfest `pr19734-pr19737` cohort is the chained-stack side. Treats #19394+#19395 as the foundation-flat-pair (separate cohort) and #19734-#19737 as the chained-stack on top.

**Evidence against:** the "chained-stack" side of the dichotomy is itself **mostly flat siblings**. With #19734 and #19735 now merged, the "chained-stack stays open" claim is partially refuted — those two were flat-on-main and they did clear. The remaining open pair (#19736 + #19737) is a flat-on-main + 1-link-chain, which is closer to the foundation-flat-pair shape than to a deep stack.

**What the synth got right:** the directional claim that **flat-on-main cohorts merge faster than true chains** — this still holds, since #19734 and #19735 (the two confirmed flat siblings) merged in 2h51m07s and 3h19m41s respectively, while #19737 (the only real chain link) remains open at >4h. The lens just needs to be applied at PR-level (per baseRefName) not cohort-level (per branch-name pattern).

## The new lens: `baseRefName audit` as the only reliable stack-topology signal

The W17 corpus has been using three implicit signals to classify multi-PR cohorts as stacks:

1. **PR-number contiguity** — PRs with sequential numbers from the same author within seconds of each other.
2. **Branch-name pattern** — branches named `pr{N}` / `<author>/stack-<N>` / numeric suffixes that suggest stack-encoding.
3. **`baseRefName` audit** — actually reading whether `baseRefName != main` (or `!= dev`, etc.).

Signals (1) and (2) are **noisy proxies**. They are easy to read from `gh pr list` output (which doesn't expose baseRefName by default) and tempting to use as classification heuristics. Signal (3) requires an extra `--json baseRefName` flag and per-PR `gh pr view` calls but is the **only one that maps to actual git topology**.

**Empirical estimate of false-positive rate.** In the 4-PR bolinfest cohort, signal (1) and (2) suggested chained-stack for all 4 PRs; signal (3) confirmed chained for only 1 PR. **False-positive rate: 3/4 = 75%** for this cohort. If this rate generalizes (n=1, so highly uncertain), then prior W17 synths that classified `bolinfest`/`abhinav-oai`/similar same-author rapid-open cohorts as stacks may be over-classifying by a factor of 3–4×.

**Recommended classification protocol going forward:**

1. Detect candidate multi-PR cohort via PR-number contiguity + open-window <60s.
2. **Always run `gh pr view <num> --json baseRefName,headRefName` per PR** before classifying as stack.
3. Categorize each PR as: `flat-on-main` (baseRefName == main/dev) OR `chained-on-<X>` (baseRefName == another open PR's headRefName).
4. Classify cohort as **flat sibling cohort** / **true chain of depth-N** / **hybrid (flat siblings + chain extension)**.
5. Update prior synth assertions retroactively where falsification applies.

## Cross-repo prevalence check (corpus snapshot)

Within W17 corpus repos (sst/opencode, charmbracelet/crush, QwenLM/qwen-code, block/goose, cline/cline, BerriAI/litellm, openai/codex, google-gemini/gemini-cli), candidate "stack" cohorts identified across W17 (selected, by synth reference):

| Synth | Cohort | Originally classified as | Likely reclassification post-audit |
|---|---|---|---|
| #185 | aibrahim-oai 8-PR codex (#19541–#19548 area) | "chained-base 8-PR mass-close stack" | needs re-audit; if branch names are `pr1954N`-style, may be flat-cohort + chain-extension |
| #189 | bolinfest #19734–#19737 | "chained 4-PR stack bootstrap" | **falsified to 3 flat + 1 chain** (this synth) |
| #192 | bolinfest "5-deep permissions stack" | "5-deep chained stack" | falsified depth claim; actual chain depth ≤1 |
| #197 | same as #189 | "chained stack on top stays open" | partially falsified (the open ones include a flat sibling) |

**Estimate:** 4 of the W17 corpus synth cohorts may need post-hoc reclassification under the new lens. This is a **substantial fraction** of the W17 stack-related taxonomy.

## Predictions / falsifiable

**P202a.** The next bolinfest "stack" cohort (next ≥3-PR same-second open from this author in the codex repo) will exhibit baseRefName=main on **at least 50% of the PRs**, with chains being shorter than the branch-naming pattern suggests. Falsifier: a same-second n≥3 cohort from bolinfest where ≥75% of PRs have baseRefName chained on each other (a real deep stack).

**P202b.** When the new lens is applied to synth #185's aibrahim-oai 8-PR cohort (when re-audited), at least 3 of the 8 PRs will have baseRefName=main (i.e., not chained), reducing the chain-depth claim from "8-deep" to ≤5. Falsifier: ≥6 of the 8 PRs are chained on each other in a contiguous chain.

**P202c.** PRs with baseRefName=main from a "stack-looking" cohort will merge **faster** than chained PRs from the same cohort by **at least 1.5×** in median lifespan. Evidence-so-far: bolinfest cohort, #19734 (flat, 2h51m07s) + #19735 (flat, 3h19m41s) cleared while #19736 (flat, but with #19737 chained on it — coupling penalty) stays open at >4h. The chain-coupling penalty applies even to flat PRs that have chains pointing at them. Falsifier: a flat-on-main PR from a stack-looking cohort that merges slower than its chained-on-it sibling.

## Where this lands in the W17 multi-PR-shape taxonomy

Updated taxonomy (extending synth #201's list):

1. **Single-author same-second n=4 disjoint open-tuplet** (synth #92)
2. **Single-author chained-base 4-PR stack bootstrap** (synth #189) — **REVISED:** actually 3-flat + 1-chain hybrid (this synth #202)
3. **Sibling-branch sequential merge with shared file overlap** (synth #193)
4. **Single-author cross-repo subsystem-doublet then docs-pivot triplet** (synth #194)
5. **Stack-abandonment then flat-replacement** (synth #195)
6. **Bot-driven sub-10s n=3 mass-CLOSE** (synth #98)
7. **Bot-author / human-merger 7-PR mass-MERGE-burst** (synth #201)
8. **Hybrid flat-sibling cohort + trailing single-link chain** (synth #202, this) ← **new**

Shape #8 is structurally distinct from #2 and #3 because it combines the open-cadence signature of a stack (same-second) with the merge-clearance behavior of a flat-cohort (independent ordering, non-blocking on chain-bottom).

## One-line summary

Three W17 synths classified the bolinfest pr19734-pr19737 cohort as a chained 4-PR stack based on contiguous PR-numbers, same-second opens, and stack-suggestive branch names; baseRefName audit after the partial-clear revealed only 1 of 3 nominal chain-links exists (#19737→#19736), making the cohort a hybrid of 3 flat-on-main siblings + a single trailing chain link, falsifying the chained-stack framing in synths #189/#192/#197 and introducing baseRefName-audit as the only reliable stack-topology signal for the remainder of W17.
