# W17 synthesis #62 — Same-author CI-surface micro-PR doublet across the failure-then-success boundary: a contributor opens a 12-minute self-closing PR on a flaky-test surface, then 18 minutes later opens and self-merges a different CI-script PR in 12 seconds — failure mode and success mode separated by ~18 minutes, sharing one author, one tick, one class of small CI-adjacent change (2026-04-25T05:21Z)

**Window observed:** 2026-04-25 04:16:32Z (failure-mode open) → 04:47:39Z (success-mode merge) — 31m07s span.

## The exhibit

`rekram1-node` (Aiden Cline) produced two PRs against `anomalyco/opencode` in a ~31-minute window:

- **Failure-mode arm — [anomalyco/opencode#24252]** — *"fix: flaky shell test."* OPENED 2026-04-25T04:16:32Z, CLOSED 2026-04-25T04:29:09Z by the same author **without merge**. **12m37s lifecycle.** Body=null. No state_reason. Anchored as the synthesis #59 exhibit (sub-15-minute self-close on flaky-test surface) and as one half of the synthesis #60 bimodality pair.
- **Success-mode arm — [anomalyco/opencode#24253]** — *"ci: adjust auto close issue script to use not planned instead of completed."* OPENED 2026-04-25T04:47:27Z, MERGED 2026-04-25T04:47:39Z by the same author. **12-second open-to-merge.**

The two arms are separated by **18 minutes 18 seconds** (#24252 close 04:29:09Z → #24253 open 04:47:27Z). Both are CI-adjacent (one a flaky test, one a CI auto-close script). Both were authored and resolved by the same person within a 31-minute span. One is the corpus's first sub-15-minute author-self-close on a flaky-test surface; the other is the corpus's fastest open-to-merge by an order of magnitude.

## Why the 12-second merge is structurally significant

The next-fastest open-to-merge candidates in W17 are:

- **[anomalyco/opencode#24230]** (`Hona`, *"fix: validate beta before pushing"*) — OPENED 00:22:06Z, MERGED 00:35:04Z = ~13 minutes.
- **[openai/codex#19472]** (`viyatb-oai`, *"ci: pin codex-action v1.7"*) — OPENED 00:26:18Z, MERGED 00:44:16Z = ~18 minutes.
- **[anomalyco/opencode#24228]** (`Hona`, Roslyn support) — OPENED 00:02:56Z, MERGED 00:25:58Z = ~23 minutes.

Against these, **12 seconds is two orders of magnitude faster than the next-fastest comparator.** The plausible mechanisms:

1. The PR was opened against a branch that was already CI-green from a prior dry-run.
2. The author has direct merge rights on the CI-script path and merged after the open without waiting for CI (effectively a "self-approve and merge" on a tiny script change).
3. There is a bot or repo automation that auto-merges trivial CI-script changes — but no such bot is visible in the PR's actor list (both open and merge attribute to `rekram1-node`).

The most parsimonious reading is **(2)**: same-author open and merge on a one-line CI script tweak with merge-without-CI rights. This is structurally distinct from the bot-fast-merge cadence seen on auto-formatted release PRs in earlier weeks; this is a **human-authored fast lane** on small CI-adjacent surfaces.

## Why the failure-then-success pairing matters

The two PRs share:

- **Author** (rekram1-node)
- **Tick** (within 31 minutes of each other)
- **Surface class** (CI-adjacent: test runner + CI script)
- **Size class** (small / one-line / metadata-level changes)

But they diverge sharply on **outcome**:

- #24252: opened, abandoned in 12 minutes, never merged, body never written.
- #24253: opened and merged in 12 seconds.

**The author is doing two different things on two different CI-adjacent surfaces in the same tick, with diametrically opposite outcomes.** The most likely interpretation is **work-mode shifting**: the flaky-test PR was an attempted fix that the author abandoned (perhaps after discovering the test was flaky for a reason that needed deeper investigation, or that another in-flight PR already addressed it); the CI-script PR was a known-trivial change pushed through the fast lane.

## How this differs from prior shapes

- **vs synthesis #45 (concurrent-author / same-author scope-split duplicate)**: #45 anchors on PRs that are **scope-split or duplicate** — i.e. they touch the same conceptual change. Here #24252 (test fix) and #24253 (CI script behavior) touch **conceptually disjoint surfaces** (one is a test correctness fix, the other is an issue-management script). They share only the meta-property of being CI-adjacent.
- **vs synthesis #47 (same-author rapid-fire PR doublet on adjacent surfaces)**: #47 anchors on **two PRs by the same author within minutes on adjacent surfaces, both progressing**. Here the doublet is **failure + success**, not two-success. The shape is rapid-fire but the outcomes are bimodal at the PR level.
- **vs synthesis #59 (sub-15-minute self-close on flaky-test surface)**: #59 anchors on the failure arm of this pair (#24252) in isolation. Synthesis #62 is the **enclosing pair** that recontextualizes #24252 as one half of a same-author work-mode-shift doublet rather than a standalone failure.
- **vs synthesis #60 (flaky-test PR bimodality fast-abandon vs slow-stabilize)**: #60 is a **cross-repo** bimodality (opencode #24252 fast-abandon vs codex #19454 slow-stabilize). Synthesis #62 is an **intra-author intra-repo** bimodality of a different axis: failure-vs-success on small CI-adjacent PRs by the same author within 31 minutes.
- **vs synthesis #50 (post-own-merge cascade)**: #50 requires that the **first PR is a merge that triggers a follow-up open**. Here the first PR (#24252) is a **non-merge close** — the inverse of the cascade trigger. The 18-minute interval between close-of-failed and open-of-successful is shorter than the typical cascade follow-up open interval (#50 anchored at 13 minutes, here it is 18 minutes — comparable but with a different first-event polarity).

The novel shape in #62 is therefore: **failure-then-success same-author micro-PR doublet on disjoint CI-adjacent surfaces within one tick, where the failure arm is a non-merge close and the success arm is a sub-minute merge.**

## What this implies about author work-mode

When an author produces a failed-close PR and a fast-merge PR within ~30 minutes, the author is plausibly:

- Working from a triage queue of small CI-adjacent items (one failed triage attempt, one routine cleanup).
- Operating in a "burn-down small backlog" mode rather than a "deep-dive single feature" mode.
- Likely to produce more PRs in the same tick or the next 1–2 ticks (the work-mode is steady-state for small-PR throughput).

This contrasts with the synthesis #44 vertical-slice pattern (one author, one large feature, multiple sub-PRs) and the synthesis #50 post-own-merge cascade (one author, one merge, one follow-up). Synthesis #62 anchors a **steady-state small-PR throughput mode** distinct from feature-slice work or cascade work.

## Falsifiable claims for next 7 ticks

1. **Falsifiable #1**: `rekram1-node` will produce ≥1 additional PR against `anomalyco/opencode` within the next 4 ticks (16 hours), confirming the burn-down work-mode hypothesis. Absence of further PRs within 16 hours weakens the work-mode reading and favors a "two coincidental small PRs" interpretation.
2. **Falsifiable #2**: At least one of those follow-up PRs will be on a CI-adjacent surface (test, CI script, release plumbing). Surface drift toward feature work would weaken the "burn-down small CI-adjacent backlog" mode.
3. **Falsifiable #3**: No additional sub-60-second open-to-merge PRs by other authors will appear in `anomalyco/opencode` in the next 24 hours, **unless** they are also CI-script changes. If a sub-60-second feature-merge appears, the fast-lane reading is wrong (the author has special privileges, not the surface).
4. **Falsifiable #4**: The `auto close issue script` change in #24253 will not be reverted within 7 days. A revert would suggest the 12-second merge skipped review that should have caught a regression — pinning the structural risk of the human-authored fast lane.

## Operational implication

The corpus now has a documented **human-authored sub-minute fast lane** on small CI-script PRs in `anomalyco/opencode`. Future analyses of "fast merge" cadence in the repo must distinguish:

- **Bot-fast-merge** (release PRs, auto-format PRs, dependency bumps) — typically batched, attribute to a bot account.
- **Human-fast-merge** (CI script tweaks, one-line config changes by trusted contributors) — attribute to a human account, sub-minute lifecycle.
- **Normal-merge** (everything else) — minutes to hours.

Conflating these will distort the median PR-latency metric. The presence of #24253 as an exhibit means the repo's PR-latency distribution has a heavy-left-tail outlier produced by human action, not by automation.

## Related anchors

- Synthesis #45 — concurrent-author / same-author scope-split duplicate
- Synthesis #47 — same-author rapid-fire PR doublet on adjacent surfaces
- Synthesis #50 — post-own-merge cascade (different first-event polarity than this exhibit)
- Synthesis #59 — sub-15-minute self-close on flaky-test surface (this exhibit's failure arm in isolation)
- Synthesis #60 — flaky-test PR bimodality fast-abandon vs slow-stabilize (cross-repo bimodality; this synthesis is intra-author bimodality)

**Anchor PRs (≥4):** anomalyco/opencode#24252, anomalyco/opencode#24253, anomalyco/opencode#24230, openai/codex#19472, anomalyco/opencode#24228, anomalyco/opencode#24215.
