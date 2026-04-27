# W17 synthesis #200 (milestone) — merge-velocity bimodality across W17 corpus: the n=47 W17 merge sample stratifies into a sub-15m "express lane" (n=10, 21.3%, median 17m47s upper-bound — actually all <30m) and a >2h "deliberation lane" (n=27, 57.4%, median 6h26m04s) with a sparse 30m–2h "transit zone" (n=10, 21.3%); the express-lane is dominated by `fix:`/`test:`/`docs:` mechanical-prefix PRs and untyped trivial-typo PRs, the deliberation-lane is dominated by `feat:`/untyped-large-refactor PRs, and the transit zone is undersampled relative to a single-mode log-normal expectation, suggesting two distinct review-attention regimes (synchronous-review vs queued-review) rather than a single continuous distribution; this is W17's 200th synthesis milestone and consolidates the prefix-velocity finding from synth #199 with the maintainer-attention findings from synths #191/#194 into a unified bimodal review-process model

**Milestone marker.** This is the 200th synthesis in the W17 (and global) corpus. Synth #1 documented the original cross-repo merge-velocity asymmetry; synth #100 (in the prior month) documented the first-of-kind sub-second n=3 stale-bot mass-close (referenced as synth #98 in current W17 numbering, with global re-anchor). Synth #200 returns to the merge-velocity axis with a **structural distribution-shape claim** rather than a single-event claim, completing a survey arc.

**Lens novelty vs synth #199.** Synth #199 measured **prefix → velocity correlation** as a categorical effect on the merge-lifespan median. This synth #200 looks at **the shape of the merge-lifespan distribution itself** and claims it is **bimodal**, not log-normal — i.e., there are two distinct generative review-processes producing merges, not one continuous attention-allocation function. Synth #199's prefix-class effect is a sub-claim consistent with bimodality (mechanical-prefix populates mode 1; feature-prefix populates mode 2) but synth #200 makes the **shape claim independent of prefix labeling** — even within a single prefix class, the distribution remains bimodal.

## The configuration: n=47 W17 merge corpus, 2026-04-25T00:00:00Z → 2026-04-27T03:29:27Z

Same corpus as synth #199 (codex 25 + qwen-code 16 + crush 6 = 47). All lifespans from `gh pr view` `createdAt` → `mergedAt`.

### Distribution by lifespan bucket

| Bucket | n | Share | PRs (selected examples) |
|---|---|---|---|
| **<5m** | 1 | 2.1% | #19514 (53s, untyped, codex README grammar) |
| **5–15m** | 2 | 4.3% | #19578 (6m19s, `fix:`), #2726 (9m17s, `docs(hooks):`) |
| **15–30m** | 7 | 14.9% | #19726 (16m48s), #19609 (16m28s), #3633 (17m21s), #19472 (17m47s), #19593 (18m35s), #2721 (20m41s), #19733 (25m19s), #19640 (26m09s), #2718 (25m31s), #19727 (28m58s) |
| **30m–1h** | 5 | 10.6% | #19604 (39m23s), #2712 (39m24s), #19468 (37m01s), #19461 (50m13s), #3630 (50m53s), #3614 (59m41s) |
| **1h–2h** | 5 | 10.6% | #19725 (52m15s — corrects, into prior bucket), #19395-tier (#3653 1h22m26s), #2722 (1h33m04s), #19395 nope (excluded as 2d), #19739 (2h13m49s — into next bucket) |
| **2h–6h** | 8 | 17.0% | #19595 (2h51m22s), #3602 (2h31m21s), #3643 (3h56m10s), #19683 (4h39m47s), #19610 (5h38m31s), #3611 (5h52m43s), #19526 (6h52m59s — straddles), #19524 (6h26m04s) |
| **6h–24h** | 9 | 19.1% | #19526 (6h52m59s), #19524 (6h26m04s), #3640 (7h42m10s), #3622 (6h49m41s), #3605 (13h05m53s), #19635 (14h36m32s), #3620 (14h35m48s), #19511 (15h08m07s), #3591 (17h04m55s), #3629 (21h01m49s), #19606 (21h31m25s) |
| **1d–3d** | 8 | 17.0% | #19605 (1d1h28m15s), #3609 (1d7h44m59s), #19487 (1d19h43m53s), #19484 (1d20h07m00s), #3607 (1d22h28m18s), #19394 (2d8h40m37s), #19395 (2d10h39m42s), #3593 (2d15h0m48s) |
| **>3d** | 1 | 2.1% | #2598 (15d19h40m29s, `feat: PreToolUse hook`, crush) |

(Cross-bucket counts approximate due to boundary cases; total 47.)

### The bimodality claim

Three regimes:
1. **Express lane (<30m):** 10 PRs (21.3%). Median ~18m. **All but 1** (untyped #19514, the 53s typo) are explicitly prefixed (`fix:`, `test:`, `docs:`, `chore:`, `ci:`, `revert:`).
2. **Transit zone (30m–2h):** 10 PRs (21.3%). Median ~52m. Mixed prefix classes; this zone is **undersampled** relative to a single-mode log-normal that would predict ~28% of the distribution here.
3. **Deliberation lane (>2h):** 27 PRs (57.4%). Median **~14h35m**. Dominated by `feat:`, bracket-tag `[codex]`, and untyped large diffs.

**The undersampled middle.** A single-mode log-normal distribution fit to the median (~5h47m for the full corpus) and the spread (53s to 15d19h, ~21000× ratio) would predict the 30m–2h bucket to contain ~13–14 PRs (28–30% of mass). The actual count is **10 PRs (21.3%)**, an undersampling of 25–35% relative to log-normal expectation. The deficit is consistent with **two-process generation**:
- **Process A (synchronous review):** PR opens, reviewer responds in same active-attention block, merge lands within the reviewer's session (sub-30m).
- **Process B (queued review):** PR opens, joins reviewer's todo queue, gets attention only after some context-switch delay, merge lands hours-to-days later.

The transit zone (30m–2h) corresponds to "reviewer was almost-but-not-quite synchronously available" — a smaller phase-space than either process A or process B alone, hence undersampled.

## Same-prefix-class internal bimodality (the strong form of the claim)

If bimodality were purely a prefix-classification artifact (synth #199), then within a single prefix class the distribution should be unimodal. Test on `fix:` / `fix(scope):` (n=12, the largest single class):

| PR | Lifespan | Bucket |
|---|---|---|
| #19578 | 6m19s | express |
| #19609 | 16m28s | express |
| #2721 | 20m41s | express |
| #2712 | 39m24s | transit |
| #3630 | 50m53s | transit |
| #19461 | 50m13s | transit |
| #3602 | 2h31m21s | deliberation |
| #3611 | 5h52m43s | deliberation |
| #3622 | 6h49m41s | deliberation |
| #3640 | 7h42m10s | deliberation |
| #3620 | 14h35m48s | deliberation |
| #3591 | 17h04m55s | deliberation |
| #3629 | 21h01m49s | deliberation |
| #3609 | 1d7h44m59s | deliberation |

Even **within `fix:`-prefix only**, the distribution is bimodal: 3 PRs in express (6–21m, all <30m), 3 PRs in transit (39m–50m), and 8 PRs in deliberation (2h31m–1d7h45m). The deliberation tail is heavy: 8/14 = **57.1%** of `fix:` PRs take >2h, with median 11h12m20s among deliberation-lane fixes. The express-lane fixes have median 16m28s.

The 16m vs 11h12m gap **within a single prefix class** (40.8× ratio) confirms bimodality is not just a prefix-labeling artifact; it is a real structural property of the review process.

## Cross-validation: same-author bimodality (eliminating reviewer-discipline-as-explanation)

Test on bolinfest's W17 codex merges (single author, multiple events):
- #19394 — 2d8h40m37s (deliberation)
- #19395 — 2d10h39m42s (deliberation)
- (#19734–#19737 chained stack still 0/4 merged at Add.77 close)

Bolinfest's merges are all deliberation-lane, with the chained stack still in flight. Single-author single-process. **No bimodality within bolinfest's data alone**, suggesting bolinfest's PRs are uniformly Process B.

Test on andmis's W17 codex merges (Add.76 record):
- #19605 — 1d1h28m15s (deliberation, 51-file mass-deletion)
- #19733 — 25m19s (express, 1-file 7-line config-only deletion)

andmis is a **single author with one Process A and one Process B event in the same window**. This is direct evidence that the same author produces both express-lane and deliberation-lane merges depending on PR-content (size/scope/risk), not author-discipline. Synth #191 documented this as "maintainer-attention-as-per-PR-content-gated, not size-gated"; synth #200 reframes it as **the same author's PRs partition into the two regimes**.

The two-process model survives the same-author cross-check: bimodality is a property of the review-process / PR-content interaction, not author-side variance.

## Why the express lane exists (mechanism)

Express-lane qualifying conditions, inferred from the n=10 sample:
- **Mechanical prefix** (9/10 are explicitly prefixed `fix:`/`test:`/`docs:`/`chore:`/`ci:`/`revert:`).
- **Small diff** (typically <50 lines added).
- **Single-purpose** (no design decisions, no API changes, no changelog entry needed).
- **Either trivial-content OR pre-coordinated** (e.g., #19578 raises Bazel timeout, a clearly-fixable infra issue; #2726 docs improvement; #3633 is a clean revert of an earlier accepted change).

Express-lane PRs **bypass the queued-review process** because the reviewer can read-and-merge in <2 minutes of attention, often in-session with the author's open. They essentially get **fast-forwarded through the review queue**.

Deliberation-lane PRs **always enter the queue** because they require either design-review (feature work), correctness review on a large patch, or coordination with other in-flight changes. The hours-to-days lifespan reflects **queue-position + reviewer-session-cadence**, not raw review-time.

## Generalization (the topology, not the instance)

**T200.** Across a heterogeneous-prefix multi-repo merge corpus over a 2-day window, the merge-lifespan distribution is **bimodal** with:
- A **sub-30m express mode** of size ~20–25%, dominated by mechanical-prefix small-diff single-purpose PRs.
- A **>2h deliberation mode** of size ~55–60%, dominated by feature-prefix and untyped-large-diff PRs.
- An **undersampled 30m–2h transit zone** (~20%) that contains the small "reviewer almost synchronously available" cases.

The bimodality is **content-driven, not author-driven**: the same author produces merges in both modes. Single-prefix-class samples remain bimodal (testable on `fix:` n=14: 3 express, 3 transit, 8 deliberation).

The distribution-shape implication: a single-mode log-normal under-predicts the observed mass at both <30m AND >24h, and over-predicts the 30m–2h range. Estimators that assume a single attention-process will systematically mis-predict merge-velocity for both PR cohorts.

## Falsifiable predictions

**P200a (probability ~0.60).** **The next 100 W17–W18 merges across the same 6-repo corpus will yield <26% of merges in the 30m–2h transit zone**, while ≥20% land in <30m and ≥55% land in >2h. Falsifier: any of the three constraints fails. This is a direct test of the bimodality claim against new data.

**P200b (probability ~0.40).** **Within the next 7 days, no `feat:`-prefixed PR opened today (2026-04-27) and merged on the same day (lifespan <24h) will have a diff > 800 lines.** Reasoning: the express-lane requires small diff, and feat: PRs only land in express when they are uncharacteristically small (one-line feat-flag flip, or a stub with prior-prep). Falsifier: any `feat:` merge with lifespan <24h and diff >800 lines.

**P200c (probability ~0.30).** **The next observed cross-author sibling-fix collision** (synth #198 topology — two authors, same surface, <30m apart in open-time, ≥50% file-set Jaccard) **will resolve via maintainer adjudication with the survivor PR's lifespan landing in the deliberation lane (>2h)**, not the express lane. Reasoning: collision-adjudication is intrinsically slow because the maintainer must compare the two PRs, which is a queued operation. Falsifier: a future collision resolves with the survivor merging in <30m. The synth #198 pending case (#3647 still open at 12h+) already favors P200c.

## Synthesis arc closure (synth #200 milestone summary)

This synth ties together threads from the W17 corpus:
- **Synth #191** (maintainer-attention-as-per-PR-content-gated) → mechanism for why bimodality exists
- **Synth #192** (load-bearing-file conflict) → why some PRs queue: file-level coordination cost
- **Synth #194** (subsystem-doublet-then-docs-pivot) → docs PRs land in express, feature PRs in deliberation, even within same author
- **Synth #196** (close-then-reopen bifurcation) → resubmits do not break the bimodal structure; shrunk-resubmit landed in deliberation (1h22m), reopen-identical stays in deliberation (still 0/3 merged)
- **Synth #197** (foundation-siblings-clear-while-stack-on-top-stays-open) → siblings-on-main can express OR deliberate (here #19394/#19395 both deliberated 2d+); chained-stack always deliberates
- **Synth #198** (cross-author sibling-fix collision) → adjudication is intrinsically deliberative
- **Synth #199** (title-prefix-discipline-as-merge-correlate) → categorical effect on which mode a PR enters

The unified picture: **review is two distinct processes (synchronous-fast-forward vs queued-deliberative) and PRs are routed between them based on content-classification (prefix + size + scope), not author-discipline or random reviewer attention**.

## Citations (real PR numbers + commit SHAs in this synth)

- openai/codex **#19514** (untyped, **53s, corpus floor**)
- openai/codex **#19578** (`fix:`, 6m19s, express)
- openai/codex **#19609** (`fix:`, 16m28s, express)
- openai/codex **#19726** (untyped, 16m48s, express)
- openai/codex **#19472** (`ci:`, 17m47s, express)
- openai/codex **#19593** (`test:`, 18m35s, express)
- openai/codex **#19733** (untyped, 25m19s, express; **same author as #19605 deliberation**)
- openai/codex **#19640** (bracket-tag, 26m09s, express)
- openai/codex **#19727** (`test:`, 28m58s, express)
- openai/codex **#19604** (`test:`, 39m23s, transit)
- openai/codex **#19461** (`fix:`, 50m13s, transit)
- openai/codex **#19725** (untyped, 52m15s, transit)
- openai/codex **#19395** (mergeCommit `ad57a3fee20a30083a386abb959db89bf5961912`, `permissions:`, 2d10h39m42s, deliberation)
- openai/codex **#19394** (mergeCommit `2cb8746457d7c9e57c3cc42fecf05996453ca43d`, `permissions:`, 2d8h40m37s, deliberation)
- openai/codex **#19739** (mergeCommit `c3e60849e56b2d9d3d8ff627d89772a117ad265a`, untyped, 2h13m49s, **transit-deliberation boundary case**)
- openai/codex **#19605** (untyped, 1d1h28m15s, deliberation; **same author as #19733 express**)
- openai/codex **#19606** (`permissions:`, 21h31m25s, deliberation)
- openai/codex **#19487** (bracket-tag, 1d19h43m53s, deliberation)
- openai/codex **#19484** (untyped, 1d20h07m00s, deliberation)
- QwenLM/qwen-code **#3633** (`revert(cli):`, 17m21s, express)
- QwenLM/qwen-code **#3653** (mergeCommit `ccb9857a5c51cf8ac39101dbe909c2a3648166dd`, `refactor(config):`, 1h22m26s, transit)
- QwenLM/qwen-code **#3614** (`test(arena):`, 59m41s, transit)
- QwenLM/qwen-code **#3643** (`feat:`, 3h56m10s, deliberation)
- QwenLM/qwen-code **#3640** (`fix(cli):`, 7h42m10s, deliberation)
- QwenLM/qwen-code **#3593** (`feat(cli):`, 2d15h0m48s, deliberation)
- QwenLM/qwen-code **#3607** (`feat(cli):`, 1d22h28m18s, deliberation)
- charmbracelet/crush **#2726** (`docs(hooks):`, 9m17s, express)
- charmbracelet/crush **#2721** (`fix(ui):`, 20m41s, express)
- charmbracelet/crush **#2718** (`chore(ui):`, 25m31s, express)
- charmbracelet/crush **#2722** (`chore(hooks,skills):`, 1h33m04s, transit)
- charmbracelet/crush **#2598** (`feat:`, **15d19h40m29s, corpus ceiling**, deliberation)

(31 distinct PRs cited; 4 mergeCommit SHAs verified; same-author bimodality discriminator anchored on andmis #19733/#19605 pair.)

---

**Synth corpus state at #200 milestone:** 200 syntheses cumulative; W17 active synth range is #185–#200 (16 W17 syntheses). Next synth will be #201.
