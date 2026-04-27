# W17 Synthesis #213 — Branch-prefix dominates title-prefix as the lifespan-lane discriminator when the two disagree, with qwen-code #3665 as the n=1 in-vivo dissociation case extending synth #210

**Status:** refinement of synth #210 (headRefName-prefix-class lane discriminator).
**Anchor PR:** QwenLM/qwen-code #3665 `96bc874197` (2026-04-27T06:38:56Z, see ADDENDUM-84).

## The angle

Synth #210 established that `headRefName` leading-segment prefix (`feat` vs `fix` vs `chore`) is an 8× stronger lifespan discriminator than the **title** prefix in qwen-code. That work conflated the two cells where branch-prefix and title-prefix **agree** (the overwhelming majority) with the rare cells where they **disagree**. Until today there was no clean in-vivo case to test which prefix wins under disagreement. PR #3665 supplies it:

- `headRefName`: `feat/add-codex-to-gitignore` → branch-prefix class = `feat`
- `title`: `chore(gitignore): add .codex directory` → title-prefix class = `chore`
- **Observed lifespan:** 5m41s (open 06:33:15Z → merge 06:38:56Z)
- **Diff:** +1/-0, single file (`.gitignore`)

## Comparator population

Drawing on the qwen-code merges enumerated across ADDENDUM-79 through ADDENDUM-84 (cited PRs):

- **Pure `chore` lane** (branch + title both chore): #3622 `72c31d378d` (lifespan 6h49m41s, +6/-7), background-maintenance regime per Add.82.
- **Pure `feat` lane** (branch + title both feat): #3643 `b5c7abd28e` (Catalan i18n, lifespan 3h56m10s, +2154/-2), feature regime per Add.82.
- **Pure `fix` lane** (branch + title both fix): #3640 `310eb88fba` (lifespan 7h42m10s, +98/-9), fix regime.
- **Disagreement cell (branch=feat, title=chore):** #3665, lifespan 5m41s.

The disagreement cell's 5m41s lifespan sits **74× faster than the pure-chore comparator** (#3622 at 6h49m41s) and **42× faster than the pure-feat comparator** (#3643 at 3h56m10s). It is **not** consistent with either pure cell, but it is **closest in churn** to the pure-chore (#3622: 13 lines vs #3665: 1 line) and **closest in lifespan-rank order** to no other comparator in W17 — it is the **fastest qwen-code merge in the entire W17 corpus to date**.

## Claim

When branch-prefix and title-prefix disagree, **branch-prefix dominates** as the lifespan-lane assignor, but with a **velocity amplification** that exceeds the pure branch-prefix cell's expectation. The amplification is plausibly attributable to the **disagreement signal itself** acting as a reviewer-attention shortcut: a `feat/`-branch carrying a `chore:` title reads to a reviewer as "trivially-scoped infrastructure tag" and clears review without the deliberation that a true `feat/` would attract.

## Falsifiability

The claim can be falsified by future qwen-code disagreement-cell PRs (branch=feat, title=chore) that exhibit lifespan **above** the pure-chore comparator (≥6.8h). One such case would invalidate the velocity-amplification interpretation; ≥3 such cases would invalidate the dominance claim and reinstate title-prefix as a contender.

## Distinction from prior synth notes

- Synth #210 measured pure-cell lifespans only; it did not address disagreement cells.
- Synth #212 measured `headRefName` slash-segment **depth × leading segment**; it did not address title↔branch concordance.
- Synth #205's chain-coupling review-penalty is orthogonal — #3665 is not a chain link.
- Synth #207's additive-asset zero-deletion lane is an adjacent zero-deletion case (#3665 is +1/-0), but synth #207's anchor (codex #19779) was 1708 additions; #3665 is 1 addition. The two zero-deletion sub-lanes (large-add vs single-line) need separate treatment in a future note — flagged as **R213 follow-up**.

## R213 rule

> When `headRefName` leading-segment ∈ {feat, fix} and title-prefix ∈ {chore, docs, test}, classify the PR by **branch-prefix** for lifespan-lane assignment, and apply a **velocity-amplification multiplier** of ~0.05× the pure-branch-prefix cell's median lifespan. Pending replication on n≥3.
