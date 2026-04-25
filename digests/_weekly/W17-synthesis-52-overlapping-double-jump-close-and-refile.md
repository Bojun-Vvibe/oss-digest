# W17 synthesis #52 — Overlapping double-jump close-and-refile: same author refiles the same title twice within 90 minutes, with the second refile opened *before* the first refile closes (2026-04-25T02:31Z)

**Window observed:** 2026-04-25 00:11Z → 02:31Z (addendums 1 + 2 + 3 combined).

**Anchoring PRs (the triple-refile chain plus comparators):**

- **[BerriAI/litellm#26462]** — *"feat(teams): per-model team member budgets"* (`ishaan-berri`, OPENED prior tick, **CLOSED 00:48:07Z**). The first node of the chain.
- **[BerriAI/litellm#26465]** — *"feat(teams): per-model team member budgets"* (`ishaan-berri`, **OPENED 00:48:19Z**, **CLOSED 02:02:19Z**). Refile #1. Opened **12 seconds after #26462 closed**; lived for **74 minutes**.
- **[BerriAI/litellm#26471]** — *"feat(teams): per-model team member budgets"* (`ishaan-berri`, **OPENED 01:56:47Z**, OPEN at window close 02:31Z). Refile #2. **Opened 5 minutes 32 seconds *before* #26465 closed** — a brief overlap window in which both #26465 and #26471 were simultaneously open with byte-identical titles by the same author on the same feature. Lived ≥34 minutes by window close.
- **[openai/codex#19470]** — *"Add turn start timestamp to turn metadata"* (`mchen-oai`, OPENED 00:26:18Z, **CLOSED 00:35:06Z**) — comparator: a #43-shaped close-and-refile.
- **[openai/codex#19473]** — *"Add turn start timestamp to turn metadata"* (`mchen-oai`, OPENED 00:46:06Z) — refile of #19470 with **δ=11 minutes between close and refile-open** (no overlap). The chain stopped at one refile; this is the **single-jump #43 baseline**.
- **[anomalyco/opencode#24223]** — *"docs: sync env vars with source code"* (`v1truv1us`, **CLOSED 01:00:39Z**) → **[anomalyco/opencode#24238]** — same title, OPENED 01:00:55Z (δ=16s, no overlap). Comparator: another single-jump #43 with near-zero gap but no overlap.
- **[openai/codex#19424]** — CLOSED 01:46:06Z by `neil-oai` with title rewritten to literally *"Superseded by #19449"*. Comparator from a different angle: an *explicit forward-pointer rename on close*, the opposite tactic — instead of refiling under the same title, the closer **rewrites the closed PR to advertise its successor**. The successor (#19449) had already merged 89 minutes earlier (00:17Z), making this a *retroactive* pointer rather than a refile.

**Pattern.** A single author refiles a feature PR under a byte-identical title **twice within 90 minutes**, and the *second refile (#26471) is opened before the first refile (#26465) is closed*. For ~5 minutes both PRs are simultaneously open with the same title by the same author on the same feature. The repository's open-PR list shows the feature **twice live at the same time**.

This is structurally distinct from the synthesis #43 single-jump close-and-refile pattern in three ways:

1. **The chain has length 3, not 2.** #26462 → #26465 → #26471. Synthesis #43 is the *transition* from one node to the next; #52 is the *chain across multiple transitions* by the same author on the same title.
2. **The most recent transition has temporal overlap, not gap.** Single-jump #43 instances always have a gap between close and refile (12s, 16s, 11min — but always positive). The #26465 → #26471 transition has a *negative gap*: refile-open precedes prior-close by 332 seconds. The PR list briefly contains two live PRs with the same title.
3. **The cumulative lifetime makes the feature long-lived under multiple PR numbers.** #26462 + #26465 + #26471 collectively represent ≥3 hours of the feature being "actively under PR review" across three numbers, none of which is the canonical reference. A reviewer arriving cold and searching for "per-model team member budgets" gets three results, two closed and one open, with no PR body explaining the chain — the linkage exists only in `updated_at` adjacency.

**Why the overlap matters operationally.** GitHub's PR-list, search index, notification stream, and webhook payloads treat #26465 and #26471 as independent objects. For the 332-second overlap window:

- **Reviewers who subscribe to the title regex** receive two notifications and may begin reviewing both, splitting attention.
- **CI builds run on both branches** simultaneously, doubling resource usage on the same logical change.
- **Approval state on #26465 does not transfer to #26471.** Any review comments left on #26465 in the overlap window are stranded when #26465 closes.
- **Cross-references from other PRs** ("blocked on #26465") become silently stale at 02:02:19Z without notification to the cross-referencer.

These are not hypothetical. The litellm `/team/*` cluster (synthesis #49) contains a PR — **#26466** (`fix(guardrails): team-level guardrails now auto-apply alongside global policy`) — which references team-budget semantics in its body. If #26466's author wrote that reference at 00:50Z, they referenced #26465's semantics; by 02:02Z that reference is dangling and the live PR is now #26471 with potentially different semantics. The stale-cross-reference window for the cluster is the same as the chain lifetime (~3 hours).

## Why this is *not* synthesis #43 (replacement-PR-after-close-as-scope-narrowing)

#43 names the case of one close → one refile, where the refile *narrows* the scope of the closed PR. **#52 names the case of two consecutive refiles by the same author with the second overlapping the first, where the scope of each successive refile may not narrow at all** — the title is byte-identical at all three points and there is no public diff between refiles to confirm narrowing.

A #43 instance becomes a #52 instance when the *first refile is itself closed and refiled again*. The W17 cohort now has a corpus of single-jump #43 instances (codex #19470→#19473, opencode #24223→#24238, the original #26462→#26465 transition) and exactly one double-jump #52 instance (the full #26462→#26465→#26471 chain). The double-jump may be rare, but the single-jump baseline shows it is reachable from any #43 instance in the corpus.

## Why this is *not* synthesis #45 (concurrent-author scope-split duplicate-feature PR)

#45 names the case of **two PRs from different authors trying to ship the same feature** under different scopes. **#52 names the case of three PRs from the same author shipping the same feature under the same title.**

Both produce a "feature appears multiple times in the PR list" outcome, but the failure modes are opposite. #45's failure mode is *coordination across authors*: each author thinks they own the feature; the merge conflict is social. #52's failure mode is *coordination across PR numbers within one author*: the author owns all three; the merge conflict is *bookkeeping* — which PR is canonical, where do reviews accumulate, what does the author actually want merged?

## Why this is *not* synthesis #20 (patch-PR-graveyard)

#20 names the case of patches that sit in PR graveyards for weeks without merge or close. **#52 names the case of a PR that is *actively cycled through close-and-refile* — the opposite of being abandoned.** A #20 PR is *neglected*; a #52 PR is *over-attended*: the author is touching it constantly, creating new numbers each time, but never landing it.

The two patterns are at opposite ends of the same spectrum (PR longevity without merge). A #20 PR achieves longevity through inactivity; a #52 PR achieves longevity through hyperactivity. The middle of the spectrum (steady review-and-iterate) is the healthy state; both ends are pathological.

## Why this is *not* "the author is just working out scope"

The null hypothesis is that #26462 → #26465 → #26471 is `ishaan-berri` legitimately iterating on the design and using close-and-refile as a "clean restart" mechanism. Two pieces of evidence weigh against the pure-iteration reading.

First, **the title is byte-identical at all three nodes**. A scope-iteration would normally produce a title evolution: `feat(teams): per-model team member budgets` → `feat(teams): per-model team member budgets v2` → `feat(teams): per-model team member budgets (cleaner internals)`. The title repetition suggests the author considers all three PRs to be *the same PR*, which is exactly the bookkeeping failure mode #52 names — the tracker disagrees.

Second, **the second close-and-refile transition (#26465 → #26471) has temporal overlap**. A clean-restart pattern would close #26465 first (at, say, 01:56Z) and *then* open #26471 (at 01:57Z), maintaining single-canonical-PR invariant. The overlap suggests the author opened #26471 first and *forgot to close #26465*, with the close happening reactively at 02:02Z (perhaps prompted by a CI failure, a reviewer comment, or the author's own pass over the PR list). The overlap is not designed; it is *accidental*, and the accident is the synthesis.

## The falsifiable claim

By **end of W18 (2026-05-03)**, at least one of the following will be observable:

1. **A third refile in the same chain** (`#26471 → #26475` or similar), making the chain length 4. The same author. Same title. Probably with another overlap. Once a chain reaches length 3 with overlap, the discipline that would have stopped it has demonstrably failed.
2. **A merge of #26471 (or whichever node is then-current) with no acknowledgment in the PR body of the prior nodes #26462 / #26465** — making the merged PR's history invisible to anyone who didn't read this synthesis or the addendum chain.

A narrower prediction: **at least one #52-shaped chain will appear in a different repo in the cohort within 7 days**. The most likely candidate repo is `openai/codex`, where #19470 → #19473 has already demonstrated the single-jump #43 baseline; the same author (`mchen-oai`) repeating the #19473 close-and-refile would land the cohort's second #52 instance.

## Operational recommendation

1. **For litellm deployments planning to consume per-model team-member budgets**, do not pin to either #26465 (closed) or any specific PR number in the chain. Pin to the *merged commit SHA* once it lands, regardless of which PR number it lands under. The PR-number-to-feature mapping is currently unstable.
2. **For reviewers of the litellm `/team/*` cluster**, when commenting on a PR in this chain, note explicitly which PR number you are commenting on and re-paste the comment if the PR is closed and refiled. Comment continuity is not preserved across the close-and-refile boundary; cross-referenced PRs (#26466 explicitly references team-budget semantics) should be re-validated against the current refile.
3. **For tooling that tracks "open PRs touching surface X"** (security scanners, dependency analyzers, PR-routing bots), implement a deduplication step that collapses byte-identical titles by the same author within a 6-hour window into a single logical change. The current per-PR view double-counts the #52 chain at every observation point.
4. **For any author considering close-and-refile as a clean-restart mechanism**, close the prior PR *first* and confirm the close has propagated before opening the refile. The overlap window in #26465 → #26471 is small (332 seconds) but it is a real bug-attractor — anyone who searched for "team member budgets" between 01:56:47Z and 02:02:19Z saw an inconsistent state.

The #52 pattern will recur whenever single-author iteration discipline drifts toward the close-and-refile substitute. The cure is a per-author convention (close first, refile second) or a tracker enforcement (warn on byte-identical-title-by-same-author within N minutes); neither is currently in place in any cohort repo.
