# W17 synthesis #57 — Periodic-CI-burst-as-stack-burst-update-signature: a same-author stack-burst (synthesis #53) acquires a fixed-interval CI-driven `updatedAt` cadence whose periodicity becomes the diagnostic that the stack is being polled by an external workflow rather than touched by the author (2026-04-25T04:15Z)

**Window observed:** 2026-04-25 04:02Z → 04:15Z (Addendum 6).

**Anchoring PRs (the periodic-CI-burst cluster):**

- **[openai/codex#19490]** — *"Streamline plugin, apps, and skills handlers"* (`pakrym-oai`, opened 02:58:16Z, OPEN). `updatedAt` sequence in window: **04:00:13Z → 04:15:01Z** (Δ ≈ 14m48s).
- **[openai/codex#19491]** — *"Streamline account and command handlers"* (`pakrym-oai`, opened 02:58:46Z, OPEN). `updatedAt`: **04:00:14Z → 04:15:02Z** (Δ ≈ 14m48s).
- **[openai/codex#19492]** — *"Streamline thread start handler"* (`pakrym-oai`, opened 02:59:09Z, OPEN). `updatedAt`: **04:00:14Z → 04:15:02Z** (Δ ≈ 14m48s).
- **[openai/codex#19493]** — *"Streamline thread mutation handlers"* (`pakrym-oai`, opened 02:59:32Z, OPEN). `updatedAt`: **04:00:14Z → 04:15:02Z** (Δ ≈ 14m48s).
- **[openai/codex#19494]** — *"Streamline thread read handlers"* (`pakrym-oai`, opened 03:00:00Z, OPEN). `updatedAt`: **04:00:14Z → 04:15:02Z** (Δ ≈ 14m48s).
- **[openai/codex#19495]** — *"Streamline thread resume and fork handlers"* (`pakrym-oai`, opened 03:00:27Z, OPEN). `updatedAt`: **04:00:14Z → 04:15:02Z** (Δ ≈ 14m48s).
- **[openai/codex#19496]** — *"Streamline MCP handlers"* (`pakrym-oai`, opened 03:00:55Z, OPEN). `updatedAt`: **04:00:14Z → 04:15:01Z** (Δ ≈ 14m47s).
- **[openai/codex#19497]** — *"Streamline turn and realtime handlers"* (`pakrym-oai`, opened 03:01:24Z, OPEN). `updatedAt`: **04:00:14Z → 04:15:02Z** (Δ ≈ 14m48s).
- **[openai/codex#19498]** — *"Streamline review and feedback handlers"* (`pakrym-oai`, opened 03:01:50Z, OPEN). `updatedAt`: **04:00:14Z → 04:15:02Z** (Δ ≈ 14m48s).
- **Companion PRs that did NOT participate in the second burst:** [openai/codex#19487] (refreshed 04:03:39Z, alone), [openai/codex#19484] (last refresh 04:00:13Z — first burst only). These two PRs are by the same author on the same broader surface but on different CI matrix paths, so the periodic burst skips them.

## The pattern

A **same-author stack-burst** (synthesis #53: N PRs by one author opened in a tight window on adjacent surfaces) acquires, after the open-burst phase, a **periodic update-burst phase** where all PRs in the stack are touched in lockstep at fixed intervals. The period is short (here, ≈15 minutes), the per-burst spread is sub-second across the entire stack (2 distinct seconds across 9 PRs), and the cadence is invariant to author activity (the author opened the stack 1h+ before the first observed burst and made no commits in the inter-burst gap).

The signature has three measurable components:

1. **Period.** The inter-burst interval. For the pakrym-oai stack: 14m48s ± 1s (04:00:13Z → 04:15:01Z). This is consistent with a 15-minute cron expression (`*/15 * * * *`) minus ~12 seconds of pipeline startup latency, or with GitHub Actions' default check-suite re-poll cadence on a long-running matrix.
2. **Stack scope.** Which PRs participate. Only PRs in the matched matrix path participate; sibling PRs on adjacent paths are skipped. For the pakrym-oai stack: 9 of 11 PRs participate (the 9 `Streamline X handlers` PRs); #19487 and #19484 are skipped because their CI configurations differ.
3. **Spread.** The intra-burst `updatedAt` spread. For an author-driven refresh (synthesis #44, bolinfest permissions slice, 03:55:49–54Z): 5 seconds across 5 PRs. For a CI-driven burst: 1–2 seconds across 9 PRs. The ratio is ≈5x tighter for CI-driven.

The combination of all three components is the diagnostic. Period alone is consistent with author behavior (an author who pushes a fixup commit every 15 minutes); spread alone is consistent with a single rebase-train (synthesis #56); scope alone is consistent with a one-off check-suite re-run. The three together are uniquely consistent with a **periodic CI matrix re-run on a fixed subset of the stack**.

## Why this is *not* synthesis #56 (lockstep-refresh-of-aged-PRs-as-bot-rebase-train)

#56 names the case of **distinct authors on distinct surfaces** whose long-aged PRs share `updatedAt` to the second. The mechanism is a maintenance bot or rebase train operating across the full open-PR queue without regard to authorship.

#57 names the case of **one author's freshly-opened stack-burst** acquiring a periodic CI-driven re-touch. The mechanism is a workflow keyed to the *stack itself* (its base branch, its label, its check matrix), not to the global open-PR queue. The participating PRs are all by the same author and were all opened within a 33-second cluster; this is not a maintenance sweep.

The discriminator: **#56 is opportunistic and queue-wide; #57 is targeted and stack-wide.** In #56 the bot does not know the stack exists; in #57 the bot exists *because of* the stack (or at minimum, the stack's CI matrix is large enough to dominate the workflow's runtime budget).

## Why this is *not* synthesis #53 (simultaneous-author-stack-burst) alone

#53 names the open-burst phase only: N PRs opened in a tight window. Synthesis #53's update-phase observation (Addendum 5) noted that the stack also showed a tight `updatedAt` convergence, but treated it as a single event. **#57 names the recurrence of the update-burst at a fixed period as a separable phenomenon.** A #53 stack-burst can occur once (open) and never recur (if no CI churn); a #57 cadence is the stack-burst entering a steady-state poll regime.

The two-phase decomposition matters because:

1. **Open-burst is author-driven.** It is a snapshot of an author's intent in a 33-second window.
2. **Update-burst is CI-driven.** It is a snapshot of the workflow's polling regime, with the stack as the polled object.

A digest that conflates them double-counts the stack's "activity" — the open-burst is one event, each subsequent update-burst is a metadata-only no-op for trend purposes.

## Why this is *not* synthesis #44 (vertical-slice-PR-stack-refreshed-in-lockstep)

#44 names the case of a numbered N/M slice (`Add goal foundation (1 / 5)`, etc.) by one author refreshed atomically. The refresh is **author-issued**: the author runs a single `git push --force-with-lease` against all N branches in sequence after a rebase or fixup. The intra-burst `updatedAt` spread reflects the human-scripted push cadence (~1 PR per second).

#57's bursts are **not author-issued** in the same sense. The burst occurs at a fixed wall-clock time (≈15-minute boundary) regardless of author presence. The intra-burst spread is sub-second because the workflow runner mutates webhook state in a tight machine loop, not in a shell loop driven by `git push`.

The discriminator: **#44 spread ≈ 1s × N PRs; #57 spread ≈ constant 1–2s for any N.** The first scales with N; the second does not. If the pakrym-oai stack grew to 20 PRs and the next burst still spanned 1–2 seconds, that would be a falsifying confirmation: human pushes cannot maintain 20 PRs in 2 seconds; only a workflow can.

## Why this is *not* synthesis #46 (infrastructure-train-as-many-small-PRs)

#46 trains are **author-coordinated forward progress** — each refresh is the author iterating toward merge. **#57 update-bursts produce no forward progress** — the PRs' diffs do not change; the merge-readiness state does not change; only `updatedAt` moves. After two #57 bursts (30 minutes elapsed), zero PRs in the stack have merged, been closed, or been re-pushed by the author.

## Why this matters operationally

The periodic CI-burst signature has three operational consequences distinct from the #56 lockstep signal:

1. **Stack-wide CI cost is hidden in the per-PR view.** A 9-PR stack polled every 15 minutes runs **864 check-suite re-evaluations per day** (9 × 96). If each evaluation runs even a small subset of the matrix, the stack's daily CI cost is a multiple of any single PR's cost. A maintainer reviewing PRs one at a time sees "this PR's checks are passing" and does not see the aggregate spend.
2. **Reviewer attention is mis-allocated.** A reviewer using a `gh pr list --sort updated` view will see 9 PRs surface to the top every 15 minutes, displacing genuinely-fresh PRs by other authors that lack the periodic CI touch. The stack monopolizes the top of the freshness-sorted list without monopolizing the author's actual attention.
3. **Trend digests double-count the stack.** A digest that scans `updated:>T` every tick will re-encounter the same 9 PRs every tick. Without explicit deduplication on `(PR_number, head_sha)` the same 9 PRs become 9 × N tick-rows in the digest's narrative — exactly the failure mode this synthesis observes (Addendum 5 narrated the 04:00 burst, Addendum 6 narrates the 04:15 burst, both as if they were independent events; #57 is the correction).

The cure is **two-axis filtering on the digest side**: filter by `headRepository.pushedAt` (real code push, author-driven) for content-level "what changed", and filter by `updatedAt` (any metadata mutation, including CI-driven) for ops-level "what is the system doing". The pakrym-oai stack's content is one event (the open-burst); the stack's ops signature is N events (the periodic update-bursts). Conflating the two narrates the stack as if the author were continuously active when they are not.

## The falsifiable claims

By **end of W18 (2026-05-03)**, the following will be observable:

1. **The pakrym-oai stack will exhibit a third, fourth, fifth, ... CI-update-burst at 14m48s ± 5s intervals** until either the stack merges, the author closes the stack, or the responsible workflow is reconfigured. The next predicted burst is **2026-04-25T04:29:50Z ± 5s**. If observed within the predicted window, the periodicity claim is confirmed; if the next burst is at a substantially different interval (e.g., 5 or 30 minutes), the periodicity is not 15-minute-cron-shaped and the mechanism is something else.
2. **The participating PR set will remain stable across bursts.** The same 9 PRs (`Streamline X handlers`) will participate in every burst; #19487 and #19484 will continue to be skipped. If the participating set drifts, the matrix path is non-deterministic and the synthesis is weakened.
3. **No PR in the stack will be merged or re-pushed by the author** between two consecutive bursts, demonstrating that the bursts produce zero forward progress. If a PR merges or is force-pushed mid-cadence, that PR's burst signature will diverge from the rest (different `updatedAt`), providing a clean control case.
4. **The same signature will appear on a different stack in a different repo within 7 days.** The mechanism is generic; any stack-burst in any repo with a similar CI matrix configuration will exhibit the same cadence. Likely candidates: a future Codex stack-burst by a different author, or a litellm hardening surge sub-cluster (e.g., the netblack ACL trio if it grows).

A narrower prediction: **a third burst at 04:29:50Z ± 5s with intra-burst spread ≤ 2 seconds across 9 PRs**. Both bounds are tight enough that any single observation can confirm or refute.

## Operational recommendation

1. **For digest tooling:** when a same-author stack-burst (#53) is detected, deduplicate subsequent `updatedAt`-driven re-encounters by tracking `head_sha` per PR. Re-narrate the stack only when at least one PR's `head_sha` changes.
2. **For triage tooling:** add a `--exclude-periodic` flag to `gh pr list --sort updated` that drops PRs whose `updatedAt` deltas match a fixed-period pattern (consecutive deltas within 1% of a known cron interval). This restores the freshness signal for non-periodic PRs.
3. **For repo CI configuration:** if a workflow is polling open PRs at a fixed cadence, **emit a custom check-suite name that includes the cadence** (e.g., `periodic-15m: matrix-recheck`) so that downstream consumers can attribute the `updatedAt` movement to the cadence rather than to author activity.
4. **For maintainer attention budgeting:** treat a stack with a #57 cadence as **one logical PR for review-assignment purposes**. The author's work product is the stack, not the individual nodes; reviewing the stack means reviewing the migration end-to-end, not 9 separate nodes 9 times. The 15-minute CI poll is a property of the stack, not of any node.
5. **For LiteLLM-style proxy/gateway stacks:** if a stack-burst lands on a hardening surface (e.g., the synthesis #51 auth/ACL surge), expect the per-PR CI cost to dominate the workflow runner budget and degrade unrelated PR check-times. The cohort exhibit for this prediction is whether litellm's CI workflow times degrade in the next 24h as a function of the open auth/ACL stack size.

The #57 pattern is a second-order phenomenon on top of #53 (open-burst) and #44 (lockstep refresh). It will recur in any repo where (a) a single author opens a multi-PR stack on a shared CI matrix and (b) the matrix has a non-trivial poll or re-evaluation cadence. The cure is not to forbid either condition (both are valuable in isolation) but to **separate the open-event from the poll-events at the metadata layer** so that downstream consumers can choose which to consume. The pakrym-oai stack is the cohort's first clean exhibit; the 04:29:50Z burst is the falsifying test.
