# W17 synthesis #53 — Simultaneous-author-stack-burst: one author opens 11 PRs against one surface in 32 minutes, with 9 of them inside a 35-second cluster (2026-04-25T03:28Z)

**Window observed:** 2026-04-25 02:31Z → 03:28Z (Addendum 4).

**Anchoring PRs (the burst plus comparators):**

The pakrym-oai burst, all targeting the codex `app-server` handler surface:

- **[openai/codex#19484]** — *"Lift app-server JSON-RPC error handling to request boundary"* — OPENED 03:10:35Z.
- **[openai/codex#19487]** — *"[codex] Move config loading into codex-config"* — OPENED 02:38:58Z (the **earliest** of the burst, 31 min before the cluster).
- **[openai/codex#19490]** — *"Streamline plugin, apps, and skills handlers"* — OPENED 03:10:41Z.
- **[openai/codex#19491]** — *"Streamline account and command handlers"* — OPENED 03:10:45Z.
- **[openai/codex#19492]** — *"Streamline thread start handler"* — OPENED 03:10:49Z.
- **[openai/codex#19493]** — *"Streamline thread mutation handlers"* — OPENED 03:10:53Z.
- **[openai/codex#19494]** — *"Streamline thread read handlers"* — OPENED 03:10:58Z.
- **[openai/codex#19495]** — *"Streamline thread resume and fork handlers"* — OPENED 03:09:21Z.
- **[openai/codex#19496]** — *"Streamline MCP handlers"* — OPENED 03:11:05Z.
- **[openai/codex#19497]** — *"Streamline turn and realtime handlers"* — OPENED 03:11:10Z (the **latest** of the burst).
- **[openai/codex#19498]** — *"Streamline review and feedback handlers"* — OPENED 03:09:21Z.

Comparator (the slow vertical-slice baseline):

- **[openai/codex#19391–#19395]** — `bolinfest` permissions slice. 5 PRs, opened across W16 over multiple days, refreshed atomically across multiple ticks (synthesis #44). Authored cadence: PR creation spaced hours apart; refresh cadence: minutes apart; merge cadence: still pending after ≥3 ticks.

## Pattern

A single author opens **11 PRs against one logical surface (the codex `app-server` handler layer) in a 32-minute window**, with **9 of those 11 PRs opened inside a 35-second cluster** (03:09:21Z → 03:10:35Z). Title shape is **`Streamline X handlers` repeated 9 times** with `X` ranging over `review and feedback`, `turn and realtime`, `MCP`, `thread resume and fork`, `thread read`, `thread mutation`, `thread start`, `account and command`, `plugin, apps, and skills`. The two outliers (`Lift app-server JSON-RPC error handling to request boundary` and `Move config loading into codex-config`) target the same `app-server` package but at the framing layer (error boundary, config loader) rather than at the per-handler layer.

This is structurally distinct from synthesis #44's vertical-slice cadence in three ways:

1. **The PRs are simultaneous, not sequential.** #44's bolinfest slice opens PRs hours apart, refreshes them in lockstep ticks later. #53's pakrym-oai burst opens 9 PRs in 35 seconds, which means the work was done *before* any PR was open — the burst is a *publication event* of pre-existing local commits, not an authoring event.
2. **The PRs are independent, not stacked.** #44's slice has explicit base-chain dependencies (`#19392` based on `#19391`, etc., reviewers must read in order). The burst's 9 `Streamline X handlers` PRs each touch a disjoint handler family — they can review and merge in any order, in parallel.
3. **The blast radius is wider.** #44's slice locks reviewer attention to one queue (read in order). #53's burst floods the queue: a reviewer subscribed to codex `app-server` PRs received 9 notifications within 35 seconds and 11 within 32 minutes. The notification-stream sorting now buries unrelated PRs (e.g., `viyatb-oai` #19467, `dylan-hurd-oai` #19454) below the wall.

## Why the cluster mechanics matter

The 35-second cluster (#19490–#19498 plus #19484, all between 03:09:21Z and 03:11:10Z) cannot have been typed manually. It is the signature of either (a) a `git push` that triggered a script which iterates `gh pr create` over a list of branches, or (b) a multi-branch web-UI batch open. Either way the **PR descriptions, base branches, and labels were prepared offline** and only published in the burst window. This has three operational consequences:

- **Review-window starvation.** The 9 PRs all hit the same reviewer cohort within 35 seconds. There is no way for a human reviewer to read 9 handler-refactor PRs in the order they were opened — the order is essentially arbitrary (sub-second timestamps within the burst).
- **CI capacity contention.** All 11 PRs trigger the codex CI matrix simultaneously. If the matrix has per-PR sandbox or worker-pool ceilings, several PRs will queue behind each other for resources, inverting the parallel-review intent.
- **Bisect ambiguity.** If the 11 PRs land within a short window (likely, given the prep), `git bisect` over the merge sequence cannot distinguish the cause of a regression that touches the handler surface — all 9 `Streamline X handlers` commits land near each other in `main` history.

## Why this is *not* synthesis #44 (vertical-slice-PR-stack-refreshed-in-lockstep)

#44 names the case of a stack of PRs with **explicit base-chain dependencies, opened sequentially over hours/days, refreshed atomically in lockstep ticks later**. **#53 names the case of a stack of PRs with no inter-PR dependencies, opened simultaneously in a sub-minute burst, with each PR independently reviewable and mergeable.**

The two are at opposite ends of the *PR-stack publication-cadence* spectrum. #44 represents a slow, dependency-aware author who wants reviewers to read in order; #53 represents a fast, parallelism-aware author who wants reviewers to fan out. Both produce "many PRs by one author on one surface" outcomes but with opposite review choreography.

## Why this is *not* synthesis #46 (infrastructure-train-as-many-small-PRs)

#46 names the case of a structural change shipped as a **train of small PRs over time** (e.g., codex CI release-artifact reshape #19445 → #19447 → #19436, each PR doing one step of a multi-step migration). **#53 names the case of a refactor shipped as a fan-out of independent small PRs, all in one burst, where the order of merge is irrelevant.**

#46 PRs *must* land in order (the train); #53 PRs *can* land in any order (the fan). #46's risk is that the train derails mid-flight (one car blocks the rest); #53's risk is that the fan gets lost in the queue (no single PR is the "next one to review"). Different topology, different failure mode.

## Why this is *not* synthesis #47 (same-author-rapid-fire-PR-doublet)

#47 names the case of **two PRs by the same author opened minutes apart on adjacent surfaces** (e.g., codex `dylan-hurd-oai` #19454 + #19471 within 14 minutes; opencode `willsarg` #24232 + #24233 within 8 seconds). **#53 is the same shape scaled up by an order of magnitude (11 PRs instead of 2) and compressed by an order of magnitude (35-second cluster instead of 8-second pair).**

#47's two-PR shape can be explained as legitimate parallel iteration (the author had two adjacent fixes ready). The 11-PR burst cannot — that volume requires offline prep. So #53 is **not just #47 at scale**: it is a qualitatively different authoring mode in which the PR-creation step is a publication event divorced from the work-creation step.

## Why this is *not* synthesis #49 (api-surface-gravity-well-multi-author-multi-shape-PR-cluster)

#49 names the case of **multiple authors converging on one API surface** with PRs of different shapes (litellm `/team/*` cluster: hardening + budgets + ACL + auth, multiple authors, multiple weeks). **#53 names the case of one author saturating one surface with PRs of one shape (`Streamline X handlers`).**

#49 is the *gravitational* pattern: the surface attracts contributors. #53 is the *projectile* pattern: one contributor saturates the surface. They produce similar PR-count signals but the authorship distribution is opposite (#49 has an author entropy spike; #53 has author entropy near zero).

## The falsifiable claim

By **end of W18 (2026-05-03)**, at least one of the following will be observable:

1. **At least 7 of the 11 PRs in the pakrym-oai burst will land within the same 24-hour merge window**, confirming that the parallel-fan intent matched the parallel-merge reality. If the merge cadence is instead spread over multiple days, the burst was authoring-fast but reviewing-slow, which would mean the publication mode (35-second fan-out) and the review mode (sequential) are mismatched and the burst was a UX failure.
2. **At least one regression in the codex `app-server` handler layer will be reported within W18** that is bisect-ambiguous between two of the burst PRs. This is the predicted failure mode of the bisect-ambiguity claim above; it is also falsifiable in the negative (no such regression = bisect ambiguity was not load-bearing in this surface).

A narrower prediction: **at least one *other* author in the cohort will adopt the same publication mode within 14 days**. The pakrym-oai burst is visible to every codex contributor as the new top of the PR list. The most likely follower is `bolinfest`, whose existing #44 vertical-slice could be re-pushed in a #53-shape if the slow-cadence pattern is perceived as a review bottleneck.

## Operational recommendation

1. **For codex maintainers**, treat the pakrym-oai burst as a single review unit. Assign one reviewer to the whole 11-PR set rather than one reviewer per PR. The 9 `Streamline X handlers` PRs share enough refactor pattern that one reviewer reading PR #1 has 80% of the context for PR #2; spreading the reviewers loses that context.
2. **For codex CI operators**, watch for resource contention in the 03:09Z–03:11Z burst window. If the CI matrix queues, the burst's parallel intent is being silently serialized. Consider a per-author concurrency cap that allows N PRs from the same author to share a CI pool rather than each consuming a full pool.
3. **For tooling that summarizes PR queues**, add a per-author burst detector: if one author opens ≥5 PRs within 5 minutes against one surface, collapse the burst into a single "stack-burst" entry in the summary. The current per-PR view fragments the burst into 11 unrelated-looking entries.
4. **For other cohort authors considering this publication mode**, recognize that the 35-second cluster is essentially a *batch publication of pre-prepared work*. The decision to batch should be deliberate: it optimizes for the author's publication workflow, not for the reviewer's reading workflow. If the work has any inter-PR dependencies, prefer the #44 vertical-slice cadence (sequential opens, base-chain) instead.

The #53 pattern will recur whenever an author has prepared a multi-PR refactor offline (likely via local branch automation: `git rebase -i` to split commits, then a script to push each branch and `gh pr create`). The cure is not to discourage the publication mode (it is genuinely faster for the author) but to **publish the burst with a single coordinating issue or PR description** that names all 11 PRs and their review order, so reviewers have an entry point. None of the 11 burst PRs in this exhibit links to such a coordinator.
