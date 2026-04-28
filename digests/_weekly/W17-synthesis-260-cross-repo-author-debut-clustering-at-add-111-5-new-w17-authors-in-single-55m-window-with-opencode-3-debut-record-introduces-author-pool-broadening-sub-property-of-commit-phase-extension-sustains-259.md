# W17 Synthesis #260 — **Cross-repo author-debut clustering at Add.111**: 5 NEW W17 authors debut in single 55m window across 3 repos (rekram1-node + Brendonovich + rektide on opencode; etraut-openai 2nd-tick on codex; ryan-crabbe-berri on litellm) — opencode 3-author-debut tick is W17 record; introduces **author-pool-broadening sub-property** as a co-signature of commit-phase EXTENSION; PROMOTES synth #258's `-berri` cohort observation to **`-berri` cardinality-growth Pred OO'**; FALSIFIES the implicit assumption that commit-phase ticks recycle prior authors

**Status:** SUSTAINS synth #255 / #258 / #259 (commit-phase + bimodal-polarization framework) by adding a **previously-unmodeled author-pool dimension**: commit-phase EXTENSION ticks (Add.111-class) are simultaneously **author-debut-rich**, NOT author-recycling as one might expect from "the same active contributors close out their backlog." Synth #260 reframes commit-phase as a **dual signal**: backlog-aged-merge-firing (synth #255) + new-author-onboarding (synth #260), with the two operating concurrently rather than sequentially.

## Cross-references
- SUSTAINS synth #255 (QA-phase / commit-phase oscillation).
- SUSTAINS synth #258 (deep-cohort cardinality conservation) — author-pool-broadening is orthogonal to merge-silence stratification.
- SUSTAINS synth #259 (bimodal-polarization sub-property) — author-debut-rich tick coincides with bimodal stratification.
- REFINES synth #244 / synth #251 (paired-PR catalog) — adds author-debut as a top-level state-marker.
- Cross-references Pred OO + Pred OO' (`-berri` cohort cardinality growth from Add.110-Add.111).

## Empirical basis (Add.111 author debuts)

In the 55m Add.111 window (04:00Z → 04:55Z), **5 NEW W17 authors made first appearance** in the corpus:

| Author | Repo | PR | Action | Author cohort |
|--------|------|----|---------|---------------|
| **rekram1-node** | anomalyco/opencode | #24730 | OPEN + MERGE in 12m07s | independent (fast-class debut) |
| **Brendonovich** | anomalyco/opencode | #23792 | MERGE (aged 6d22h) | independent (aged-class debut) |
| **rektide** | anomalyco/opencode | #24728 | OPEN | independent (feature-class debut) |
| **etraut-openai** | openai/codex | #19912 | MERGE (1st W17 merge; debut OPEN at Add.110) | OpenAI staff (`-openai` suffix) |
| **ryan-crabbe-berri** | BerriAI/litellm | #26631 | MERGE (1st W17 appearance) | Berri staff (`-berri` suffix) |

**5 author-debuts in 1 tick** = the **highest single-tick author-debut count in W17 corpus**. Per-repo:
- **opencode: 3 debuts** (rekram1-node, Brendonovich, rektide) — **opencode single-tick debut record for W17**.
- **codex: 1 debut** (etraut-openai's 1st merge after Add.110 debut OPEN — mixed-debut).
- **litellm: 1 debut** (ryan-crabbe-berri).

**Compare to baseline:** Add.103-Add.110 averaged ≈1.2 author-debuts per tick. Add.111's 5-debut tick is **≈4.2× the baseline**.

## Synth #260 claim — Author-pool-broadening sub-property

**Statement:** During **commit-phase EXTENSION** ticks (defined as ≥3 repos in shallow class with ≥1 merge each, the bimodal-polarization signature from synth #259), the author-debut count is **≥3× the corpus baseline** (i.e., ≥3.6 debuts/tick at the current ≈1.2 baseline). This is the **author-pool-broadening sub-property** of commit-phase EXTENSION.

**Mechanism:** Commit-phase EXTENSION ticks coincide with reviewer/maintainer attention bandwidth (the same merge-fire capacity that closes out backlog also accepts/merges new-author-debut PRs that would otherwise sit in QA-phase). Author-debut PRs benefit from **commit-phase reviewer attention pull-through**.

**This is non-obvious because:** A naive model would predict commit-phase ticks RECYCLE existing active authors (closing out their stacks), so author-debut count should DROP relative to QA-phase ticks. The empirical observation contradicts the naive model.

## Predictions opened by synth #260

### Pred 260-1 — Author-pool-broadening recurs on next commit-phase EXTENSION tick
**Statement:** The next commit-phase EXTENSION tick (next bimodal-polarization tick per synth #259) shows author-debut count ≥3.
**Falsifier:** Next bimodal-polarization tick (within W17+W18) shows ≤2 author debuts.
**Status:** Pending; synth #259 Pred 259-1 predicts bimodal-polarization is short-lived, so the next test could come within ≤2 ticks.

### Pred 260-2 — Author-debut PRs in commit-phase ticks have asymmetric merge-vs-open distribution
**Statement:** Across the next 12 author-debut PRs, ≥60% open during commit-phase ticks merge within the same tick (open-and-merge same-tick), vs ≤30% of author-debut PRs in QA-phase ticks.
**Falsifier:** Difference ≤10pp between commit-phase and QA-phase author-debut merge-rates.
**Empirical seed at Add.111:** 1 of 3 opencode debut PRs (rekram1-node #24730) opened-and-merged same-tick (33%); 2 of 3 (Brendonovich aged, rektide open-only) did not. Sample too small to evaluate yet.

### Pred 260-3 — opencode author-debut surge precedes a kitlangton return
**Statement:** Within ≤4 ticks of an opencode 3+ author-debut tick (Add.111), kitlangton returns with ≥1 in-window merge (breaking the kitlangton-pause-regime under Pred PP).
**Falsifier:** Add.115 close shows kitlangton still in pause (0 merges since Add.108).
**Mechanism hypothesis:** Author-pool-broadening creates **review backlog pressure** that pulls dominant authors (kitlangton) back into merge-fire mode to clear capacity.
**Cross-check:** This Pred CONTRADICTS Pred PP (kitlangton-pause-regime persists ≥5 ticks). Joint outcomes will discriminate.

### Pred 260-4 — `-berri` cohort cardinality growth tracks litellm commit-phase ticks
**Statement:** Pred OO' (`-berri` cohort reaches ≥6 distinct logins by W18 close) is achieved **only via litellm commit-phase ticks** — i.e., new `-berri` debut authors first appear during litellm shallow-class ticks with ≥1 merge.
**Falsifier:** A new `-berri` author debuts during a litellm mid- or deep-class tick.
**Empirical seed:** ryan-crabbe-berri debuted at Add.111 (litellm shallow + 1 merge = commit-phase tick). Sample of 1 supports the claim; need 1 more debut to triangulate.

### Pred 260-5 — Author-debut clustering is repo-specific, not cross-repo synchronized
**Statement:** Across the next 6 multi-debut ticks (≥3 debuts in 1 tick), the debut-distribution shows **per-repo concentration** (≥60% of debuts in 1 repo) rather than **cross-repo even spread** (≤40% in any single repo). I.e., each multi-debut tick has a "leading repo" that accounts for the majority of the debuts.
**Falsifier:** ≥3 of 6 multi-debut ticks have even cross-repo spread (≤40% in any single repo).
**Empirical seed at Add.111:** opencode has 3/5 = 60% of debuts (matches threshold exactly); leading-repo signature CONFIRMED for Add.111.

## Linkage to synth #259 bimodal-polarization

Add.111 is **simultaneously** a bimodal-polarization tick (synth #259) AND a 5-author-debut tick (synth #260). The two sub-properties co-fire. **Open question for synth #261+:** is co-firing causal (bimodal-polarization causes author-pool-broadening via reviewer attention) or coincidental (both effects of the same upstream commit-phase EXTENSION cause)?

Pred 259-1 (bimodal-polarization is short-lived) and Pred 260-1 (author-pool-broadening recurs on next bimodal tick) jointly test the causal hypothesis. If both hold across Add.112-Add.115, the co-firing is robust and causal-direction can be tested; if Pred 259-1 falsifies (bimodal persists) but Pred 260-1 still holds (broadening recurs), the broadening is regime-driven not transient-driven.

## What synth #260 does NOT claim

- Does NOT claim all commit-phase ticks have author-pool-broadening — only commit-phase EXTENSION (3+ shallow repos) ticks. Single-repo commit-phase (e.g., codex-only commit-phase ticks Add.105-Add.108) had ≤1 debut/tick on average.
- Does NOT predict author-pool-broadening is permanent — Pred 260-1 specifically tests recurrence.
- Does NOT retract synth #244's framing of commit-phase as "older OPENs convert first" — the aged-merge sub-pattern co-exists with the author-debut sub-pattern (Add.111 has #17689 14d-aged AND 5 new debuts).

## Capture summary

Add.111 is the **first observation in W17 corpus of co-firing bimodal-polarization (synth #259) + 5-author-debut (synth #260)** — making it a **doubly-anomalous tick** that warrants follow-up at Add.112-Add.115. **The opencode 3-author-debut sub-record** is by itself the most distinctive single-repo signal in Add.111. **Pred OO' (`-berri` cohort cardinality ≥6 by W18 close), Pred 260-3 (opencode debut surge → kitlangton return), and Pred 260-5 (per-repo concentration in multi-debut ticks) are the most decisive joint-tests** for synth #260's framework. **Synth #260 explicitly does not promote to a regime; it remains a sub-property of commit-phase EXTENSION until Pred 260-1 + Pred 259-5 jointly resolve.**
