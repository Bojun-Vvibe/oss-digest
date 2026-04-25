# W17 Synthesis #109 — Author/merger-asymmetry as a categorical regime feature: consecutive 30-minute windows can flip litellm's merge-channel from 100% self-merge to 100% maintainer-merge

**Anchored:** 2026-04-25, addenda 31 → 32, BerriAI/litellm.

**Claim (falsifiable):** In litellm, the `author == merged_by` ratio in a single sub-1-hour merge window is **not a noisy continuous variable but a categorical regime indicator** — consecutive windows can be 100% self-merge and 100% maintainer-merge with **no intermediate-state windows in between**, and the flip correlates with the merger's identity (`ishaan-berri`) rather than with author-set turnover.

## Evidence

**Add. 31 window** (2026-04-25T20:49:39Z → 21:20:33Z, 30m54s):
| PR | author | merged_by | self-merge? |
|---|---|---|---|
| #26521 | Chesars | Chesars | YES |
| #26513 | yuneng-berri | yuneng-berri | YES |
| #26448 | michelligabriele | michelligabriele | YES |
| #26427 | michelligabriele | michelligabriele | YES |
| #26506 | alvinttang | alvinttang | YES |
| #26522 | yuneng-berri | yuneng-berri | YES |

**Self-merge rate: 6/6 = 100%.** Four distinct authors, all self-merging.

**Add. 32 window** (2026-04-25T21:20:33Z → 21:58:14Z, 37m41s, immediately following):
| PR | author | merged_by | self-merge? |
|---|---|---|---|
| #26474 | shivamrawat1 | ishaan-berri | NO |
| #26466 | shivamrawat1 | ishaan-berri | NO |

**Self-merge rate: 0/2 = 0%.**

The 5-addendum trail of self-merge-rate values: **Add. 28 ≥1 self-merges (mixed), Add. 29 mixed, Add. 30 mixed, Add. 31 = 1.00, Add. 32 = 0.00**. The Add. 31→32 transition is a **2-window swing of 1.0 in self-merge rate** — the maximum possible amplitude — within 37 minutes.

## What this rules out

- **It's not author-set turnover driving the flip.** Add. 31 had 4 authors (Chesars, yuneng-berri, michelligabriele, alvinttang); Add. 32 had 1 author (shivamrawat1). But shivamrawat1's two PRs (#26466, #26474) had been **OPEN for 18–21 hours each** — i.e., available to be self-merged at any point during Add. 28, 29, 30, 31. They were NOT self-merged. The author chose maintainer-merge.
- **It's not branch policy.** Both addenda's merges target `litellm_internal_staging` (the dominant base), `litellm_yj_apr25`, `litellm_staging_03_21_2026`, `litellm-oss-staging-04-25-2026`. shivamrawat1's #26474 and #26466 both target `litellm_internal_staging`, the same branch as 4-of-6 Add. 31 self-merges. Branch is held constant.
- **It's not diff-size-driven.** #26474 (+98/-108) and #26466 (+261/-2) are mid-sized; Add. 31 self-merges spanned +1/-1 (#26521) to +450/-4 (#26506). Diff-size distributions overlap.

## What this implicates

The flip is **author-mediated**: certain authors (shivamrawat1) appear to **wait for `ishaan-berri` to merge** rather than self-merging, even when the PR is approved-and-mergeable for nearly a full day. Add. 32's #26517 inverts the role: `ishaan-berri` is the *author* of an MCP self-service feature PR, opened during the Add. 32 window. **The same actor (`ishaan-berri`) is concurrently the merger-of-others' PRs and an author of his own**, while shivamrawat1 only authors. This is **role specialization within the author pool**, not a stochastic mix.

## Falsification surface

- If a future window contains shivamrawat1-authored merges where merger == shivamrawat1, this synth weakens.
- If `ishaan-berri` is observed merging Chesars / michelligabriele / alvinttang PRs (rather than those authors self-merging their own), the role-specialization pattern would be specific to shivamrawat1, not a general maintainer/contributor divide.
- If a 30-minute window mixes self-merge and maintainer-merge in non-trivial proportions (e.g., 3/5), the categorical-regime claim weakens to a continuous-mixing claim.

## Cross-references

- Supersedes the implicit assumption in synth **#102** (author-monoculture merge stream) that the merger column is uninteresting; this synth identifies the merger column as a *primary* regime indicator.
- Distinct from synth **#71** (vendor self-onboarding sub-hourly self-iteration with zero maintainer interaction) — that pattern was about authors who never receive maintainer attention; this synth is about authors who **only** receive maintainer attention.
- Not addressed by synth **#52** (close-and-refile), **#84** (mechanical co-bump), or **#106/#108** (sync-PR promotion) — those concern open/close/sync mechanics, not the author/merger axis.

## Open question

Does the regime track wall-clock time-of-day (e.g., `ishaan-berri` is online at certain hours) or PR-content (e.g., guardrails-class PRs always go through ishaan-berri)? Add. 32 evidence is consistent with either: both shivamrawat1 merges are guardrails-class. Future windows with non-guardrails shivamrawat1 PRs will discriminate.
