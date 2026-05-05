# W17-synthesis-700 — Head-identity collision: same-author-same-head-SHA across two distinct PRs as terminal state of B-A-M-N-style branch-collision

**Date**: 2026-05-05
**Window**: Add.358 → Add.360 (98m wall-clock; 3 ticks)
**Conjecture rank**: novel terminal-state classification within synth-107 historic-anomaly resolution-window regime

## Definition (formal)

A **head-identity collision** is the state in which two distinct open PRs `#A` and `#B` on the same carrier C, by the same author α, have **identical `headRefOid` SHA values** at a single snapshot tick T.

Distinct from **surface-collision** (synth-107: two PRs touching the same files) and from **author-doublet** (synth-93: two PRs by same author opened within 60s):

- Surface-collision can resolve via merge-of-one + rebase-of-other.
- Author-doublet typically diverges into independent head-OIDs within 1–2 ticks.
- **Head-identity collision is a degenerate state**: both PR records point to the same commit-graph node, so any subsequent `git push -f` to one branch propagates to both PRs.

## Empirical instance (Add.360)

- **qwen-code #3848** B-A-M-N `fix(memory): route auto-memory recall selector to fast model` head `a0daf50c065f` updatedAt 14:32:52Z createdAt 10:25:54Z.
- **qwen-code #3856** B-A-M-N `feat(cli): polish --add-dir / --include-directories feature` head `a0daf50c065f` updatedAt 14:36:30Z createdAt 14:36:30Z.

**Same author, same carrier, same head SHA, different titles, different surface intent (memory router vs CLI flag polish).** Inter-PR createdAt gap = 4h11m (10:25 → 14:36). Inter-PR updatedAt gap = 3m38s.

**Hypothesis**: B-A-M-N pushed `#3856` from a local branch that was force-rebased onto `#3848`'s tip without first cherry-picking `#3856`'s feature commit, OR opened `#3856` against `main`'s tip while `#3848`'s branch had been recently rebased to that same tip. The `feat(cli)` commit content for `#3856` exists in the local repo but does not appear at `headRefOid` `a0daf50c065f` — which suggests **`#3856`'s branch HEAD has been stomped** and the title/body remain stale.

## Hypothesis (H700)

**H700-PRIMARY**: Head-identity collisions are **transient terminal-states with mean lifetime ≤3 ticks**, resolving via one of:
- (a) **stomp-victim PR closed** by author within 2 ticks (P ≈ 0.45) — author realizes the push-stomp and closes the orphaned PR.
- (b) **stomp-victim PR force-pushed** to recover its intended HEAD (P ≈ 0.30) — author re-pushes the lost commit.
- (c) **persistent zombie state** through ≥5 ticks (P ≈ 0.15) — both PRs remain open with same head until external review.
- (d) **anchor PR merged** dragging the second PR to mergeable-but-stale state (P ≈ 0.10).

## Falsifiable predictions citing specific PRs across carriers

**P700.1 (B-A-M-N collision resolution)**: Within 3 ticks of Add.360, **either #3848 OR #3856 will be closed/merged**, OR one will receive a force-push to a new SHA. Prior 0.75. **Falsified if**: both `#3848` and `#3856` retain head `a0daf50c065f` through Add.363.

**P700.2 (mode preference)**: Resolution mode will be **(a) stomp-victim closed** with `#3856` (the LATER-created PR) being the victim — because `#3856`'s feature title is incompatible with `#3848`'s memory-router head content. Prior 0.45. **Falsified if**: `#3848` is closed instead, OR `#3856` is force-pushed to a new SHA.

**P700.3 (cross-carrier baseline)**: Within Add.361–Add.380 (20 ticks ≈ 12 hours), at most 1 head-identity collision will be observed across the other 6 carriers (sst/opencode, openai/codex, BerriAI/litellm, google-gemini/gemini-cli, block/goose, charmbracelet/crush). Prior 0.65. **Falsified if**: ≥2 head-identity collisions observed in non-qwen-code carriers within 20 ticks. Candidates to monitor:
- yiliang114 stack on qwen-code: `#3855` head `b1757402fdb3`, `#3854` head `e8b59b89a767`, `#3853` head `16a4af998281`, `#3850` head `09a62b2f2f6e` — currently all distinct, monitor for convergence.
- jif-oai stack on codex: `#21214` head `cbd2243458b8`, `#21187` head `85fe8faa8302`, `#21182` head `07a1254b128d`, `#21180` head `e4f515b331aa` — currently all distinct.
- morgmart stack on goose: `#9019` head `f6d15bd91b7d`, `#9018` head `fb429659db87`, `#9017` head `b19db05c0ea8`, `#9016` head `169d521f34c8`, `#9014` head `ec224a170d81`, `#9013` head `c2f4ede3c7ee` — currently all distinct (6 PRs all distinct heads = strong null).
- evawong-oai stack on codex: `#21184` head `6b31cb3a79f3`, `#21175` head `8f93be5b9e21`, `#21174` head `6e60556d73a9` — currently distinct, but **sub-class F just executed**, raising collision risk if she re-pushes legs to anchor's new SHA.

**P700.4 (cold-start author insulation)**: Cold-start authors entering the W17 instantiator pool (jlongster `#25894`, viyatb-oai `#21220`, mchen-oai `#21219`, yassin-berriai `#27200`, guangzhou `#27199`/`#27198`, alexhancock `#9028`, tellaho `#9027`) will NOT experience head-identity collisions within their first 3 ticks. Prior 0.85. **Falsified if**: any of these 7 authors' PRs share a head SHA with another PR within 3 ticks of the author's debut tick. Specifically: the **guangzhou Staging+Dev doublet** (`#27199` head `fecf510827c5` + `#27198` head `1b1776d946a7`) is the highest-risk pair — they're branch-promotion PRs from the same author opened 2m apart on adjacent branches. They start with **distinct heads**, but if guangzhou re-pushes Dev tip to Staging branch, collision results.

**P700.5 (surface-collision precondition)**: Head-identity collisions require **prior surface-collision** (synth-107). The B-A-M-N pair `#3848`/`#3856` likely shares files. Prior 0.70. **Falsified if**: `gh pr diff #3848` and `gh pr diff #3856` show ZERO file overlap when fetched within 5 ticks of Add.360. (Cannot test in current tick due to time budget — defer to Add.365.)

**P700.6 (mechanism check via review activity)**: Head-identity collision PRs will receive **review comments calling out the duplication** within 5 ticks. Prior 0.55. **Falsified if**: by Add.365, neither `#3848` nor `#3856` has a comment mentioning the other's PR number.

## Specific PRs cited (≥5 across multiple carriers)

1. **qwen-code #3848** B-A-M-N head `a0daf50c065f` — primary instance, "stomp-victim suspected: #3856".
2. **qwen-code #3856** B-A-M-N head `a0daf50c065f` — primary instance, identical head.
3. **qwen-code #3855** yiliang114 head `b1757402fdb3` — collision-monitor candidate (stack-holder).
4. **qwen-code #3854** yiliang114 head `e8b59b89a767` — collision-monitor candidate.
5. **qwen-code #3850** yiliang114 head `09a62b2f2f6e` — collision-monitor candidate.
6. **codex #21184** evawong-oai head `6b31cb3a79f3` — collision-monitor candidate (post-sub-class-F risk).
7. **codex #21175** evawong-oai head `8f93be5b9e21` — collision-monitor candidate.
8. **goose #9019** morgmart head `f6d15bd91b7d` — collision-monitor candidate (largest stack: N=6 distinct).
9. **goose #9013** morgmart head `c2f4ede3c7ee` — collision-monitor candidate.
10. **litellm #27199** guangzhou head `fecf510827c5` — cold-start collision-risk pair (Staging branch).
11. **litellm #27198** guangzhou head `1b1776d946a7` — cold-start collision-risk pair (Dev branch).
12. **codex #21214** jif-oai head `cbd2243458b8` — collision-monitor candidate (jif-oai N=4 stack).
13. **codex #21187** jif-oai head `85fe8faa8302` — collision-monitor candidate.

## Carrier coverage

5 carriers (qwen-code, codex, goose, litellm, gemini-cli implicit via baseline) for predictions; 1 carrier (qwen-code) for primary instance.

## Mechanistic model

Head-identity collisions arise from **author-side branch hygiene errors** in workflows where:
1. Author maintains multiple feature branches against rapidly-moving base.
2. Author uses `git push --force-with-lease` interactively without re-checking which PR's branch is currently checked out.
3. CI/test failures cause author to "fix in another branch" and accidentally push to the wrong PR's branch.

The **B-A-M-N N=3 sub-class D pattern** (3 PRs by same author top-12 simultaneously) is **necessary but not sufficient** for head-identity collision: with N≥3 concurrent PRs the author has ≥3 active feature branches, increasing per-tick collision probability.

**Inverse prediction**: Authors with N=1 PR open will NEVER produce head-identity collision. Cold-start single-PR authors (jlongster `#25894`, mchen-oai `#21219`, viyatb-oai `#21220`, yassin-berriai `#27200`, alexhancock `#9028`, tellaho `#9027`) are insulated. Only **guangzhou** (N=2 immediate) is at risk among cold-starts.

## Falsification status of related synthesis

- **synth-107** (resolution-window historic-anomaly): Head-identity collision is a **specific terminal state** within the surface-collision resolution-space. Does not falsify; refines.
- **synth-93** (cold-start doublet): Cold-start doublets typically have distinct heads — synth-93 is **NOT** the same as head-identity collision. Distinguishable signatures.
- **synth-696/697** (force-push echo wave): Sub-class F event on evawong-oai stack (Add.360) raised theoretical risk of evawong-oai head-identity collision; H700 P700.3 monitors this.
- **synth-699** (sub-class F): Collision-risk is **negatively correlated** with sub-class F mode-(a) realization — when anchor force-pushes and legs only metadata-touch, head-divergence INCREASES not decreases.

## Confidence summary

- H700-PRIMARY (terminal-state ≤3 ticks): **prior 0.75** based on N=1 instance + standard branch-hygiene priors.
- Definition will graduate to **stationary sub-class** if observed N≥2 across ≥2 distinct authors by Add.380.
- If 20 ticks elapse with zero recurrence: **retire as B-A-M-N singleton**, reclassify as author-specific signature rather than carrier-wide phenomenon.

## Linked predictions in Add.360

- P-360.C (B-A-M-N #3848↔#3856 head-identity resolved by close-of-one within 2 ticks, 0.55) ↔ P700.1 + P700.2.
- P-360.F (guangzhou Staging+Dev doublet recurs within 5 ticks, 0.30) ↔ P700.4 (collision insulation test).
