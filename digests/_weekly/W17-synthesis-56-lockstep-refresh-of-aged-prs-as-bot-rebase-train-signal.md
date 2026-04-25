# W17 synthesis #56 — Lockstep-refresh-of-aged-PRs-as-bot-rebase-train-signal: long-aged unmerged PRs whose `updatedAt` converges to the same second indicate non-author refresh activity (bot, rebase train, or repo-shape change), distinct from author-driven refresh cadence (2026-04-25T04:02Z)

**Window observed:** 2026-04-25 03:28Z → 04:02Z (Addendum 5).

**Anchoring PRs (the lockstep-aged-refresh cluster plus comparators):**

- **[anomalyco/opencode#18767]** — *"feat(app): Mobile Touch Optimization"* (`noahbentusi`, opened 2026-03-23, **age 33 days**, refreshed **03:29:01Z**, OPEN).
- **[anomalyco/opencode#13854]** — *"fix(tui): stop streaming markdown/code after message completes"* (`mocksoul`, opened 2026-02-16, **age 68 days**, refreshed **03:29:01Z**, OPEN). **Same second as #18767.**
- **[anomalyco/opencode#13224]** — *"feat(docs): add copy page markdown action to docs title"* (`kdcokenny`, opened 2026-02-11, **age 74 days**, refreshed **03:47:07Z**, OPEN). 18 minutes after the #18767/#13854 pair.
- **Comparator — author-driven refresh cadence:** **[openai/codex#19391–#19395]** (`bolinfest`, permissions slice). Refreshed 03:55:49–54Z — `updatedAt` spans **5 distinct seconds**, one PR per second, in numbered order. Even within a tightly-coordinated same-author atomic refresh, timestamps spread by 1–2 seconds across the slice. The refresh is not literally simultaneous; it is sequential at human-scripted speed.
- **Comparator — CI-update-burst (synthesis #53 update phase):** **[openai/codex#19484, #19487, #19490–#19498]** (`pakrym-oai`, handler stack). Updated 04:00:13–14Z — `updatedAt` spans **2 distinct seconds** across 11 PRs. Same-author CI-driven refresh fanout produces tighter convergence than human-driven refresh but **still spans 2 seconds**.
- **Comparator — multi-author independent refresh:** **[BerriAI/litellm#26471]** refreshed 03:32:36Z (ishaan-berri), **[BerriAI/litellm#26442]** refreshed 03:47:30Z (ryan-crabbe-berri), **[BerriAI/litellm#26331]** refreshed 03:35:28Z (Kcstring) — three different authors on three different surfaces, refresh times spread across 14 minutes. No second-level coincidence.

## Pattern

Two or more long-aged (≥30 days unmerged) PRs by **different authors on different surfaces** in the same repo show **byte-identical `updatedAt` to the second**. The probability of this happening by independent author action is vanishingly small (the per-author refresh rate on a 30+ day old PR is sub-daily; the probability of two such authors hitting the same second is on the order of $10^{-9}$ per pair-second).

The mechanism producing the coincidence is therefore **not the authors**. Candidate mechanisms:

1. **Repo-wide rebase train.** A maintainer or CI job runs `git rebase` against every open PR's branch in sequence, pushing all of them in a tight loop. Each push triggers a webhook that updates `updatedAt`. The loop's iteration time is sub-second per PR, so a 2-PR pair can land on the same second.
2. **Mass label / status update by a bot.** A workflow that adds or removes a label across a query result (e.g., `gh pr list --search "is:open updated:<2026-04-01" | xargs gh pr edit --add-label stale`) mutates each PR's `updatedAt` in a tight loop. Same coincidence shape, different cause.
3. **Repo-shape change pushed to a base branch.** When a base branch (e.g., `dev` for opencode) advances, every open PR targeting that base is "behind" by one commit and may be shown as updated in some `gh` API surfaces if the API includes mergeability recomputation in the timestamp. (This depends on opencode's specific API behavior; the empirical signal is the second-level coincidence regardless of cause.)
4. **Merge-queue or required-check re-run.** A maintainer triggering `Re-run all checks` against multiple PRs in quick succession produces the same fanout shape.

For the #18767 / #13854 lockstep-second-coincidence specifically:

- **Authors are distinct.** `noahbentusi` (#18767, mobile touch) and `mocksoul` (#13854, TUI streaming markdown) have no apparent collaboration relationship and are working on disjoint surfaces (mobile UI vs terminal markdown rendering).
- **Surfaces are disjoint.** Mobile touch optimization touches touch-event handling; TUI streaming-markdown touches the markdown rendering pipeline. There is no plausible code-level reason for both to be touched in the same commit by the same actor.
- **Ages are dissimilar.** 33 days vs 68 days. They are not part of the same train; they are independent stale PRs caught by a single sweep.
- **The third PR (#13224, 18 minutes later) breaks the sub-second coincidence** but extends the cluster: 3 PRs, all 30+ days old, all refreshed in a 19-minute window where independent refresh would expect refresh times spread across days.

## Why this is *not* synthesis #20 (patch-PR-graveyard)

#20 names the case of patches sitting unmerged for weeks. **#56 names the case of those same graveyard PRs showing coordinated refresh activity that is not author-driven.** A pure-#20 PR has zero recent activity; a #56 PR is a #20 PR being touched by an actor that is *not its author*.

This matters because **the refresh signal misleads downstream consumers**. A `gh pr list --sort updated` view will surface #18767 and #13854 to the top as if they were freshly worked on; a reviewer scanning that list will assume the authors are active. They are not. The bot or rebase train is.

## Why this is *not* synthesis #44 (vertical-slice-PR-stack-refreshed-in-lockstep)

#44 names the case of a numbered N/M slice by **one author** refreshed atomically. **#56 names the case of N PRs by N different authors on N different surfaces refreshed within the same second.** The authorship discriminator is the whole point: #44's lockstep is intentional same-author atomic-update; #56's lockstep is incidental cross-author coincidence driven by an external actor.

The bolinfest permissions slice (#19391–#19395) and the etraut-openai goal slice (#18073–#18077) are #44/#55-shaped: same author, sequenced, intentional. The opencode trio (#18767, #13854, #13224) is #56-shaped: distinct authors, distinct surfaces, externally coordinated.

## Why this is *not* synthesis #46 (infrastructure-train-as-many-small-PRs)

#46 trains are **author-coordinated forward progress**. **#56 lockstep is non-author maintenance touching that does not advance the PRs toward merge.** A #46 train member's refresh is the author iterating; a #56 PR's refresh is someone else nudging the PR's `updatedAt` for housekeeping reasons.

## Why this is *not* synthesis #43 (replacement-PR-after-close-as-scope-narrowing-tactic)

#43 requires a close-and-refile by the author. **#56 PRs are still open, unrefiled, and unrescoped.** The refresh signal is metadata-only.

## Why this matters operationally

The lockstep refresh signal is **destructive to downstream PR-prioritization tooling** that uses `updatedAt` as a freshness proxy. Specifically:

1. **`gh pr list --sort updated` becomes useless for triage.** The bot-touched PRs surface above genuinely-fresh PRs by authors who are actively iterating. A reviewer who triages "the most recently updated PRs first" gets routed to graveyard PRs whose authors have not engaged with them in over a month.
2. **Stale-PR closing bots that key off `updatedAt` will not fire.** A bot that closes PRs idle for 30+ days will reset its clock every time the rebase train touches them. The PRs sit at age 30+ days indefinitely without ever being eligible for stale-close. The repo's open-PR backlog grows monotonically because the cleanup mechanism is being neutralized by the maintenance mechanism.
3. **Cohort-level "what changed in the last hour" digests** (precisely this digest's job) include #56-shaped PRs as if they were window-relevant events. They are not. The author has done nothing; the surface has not changed; only `updatedAt` has moved. The digest's `updated:>T` GitHub-search filter cannot distinguish bot-touch from author-touch, so the noise floor of the digest rises in lockstep with the rebase-train cadence.
4. **Cross-PR correlation analysis sees ghost relationships.** Two PRs that share `updatedAt` to the second look correlated in any timestamp-clustering pipeline; #56 manufactures these ghosts in bulk.

## The falsifiable claim

By **end of W18 (2026-05-03)**, at least one of the following will be observable:

1. **The opencode trio (#18767, #13854, #13224) will continue to refresh at sub-daily cadence without any author-driven activity** (no new commits authored by `noahbentusi`, `mocksoul`, `kdcokenny` on those branches, no body edits, no comments). The refresh signal is empty; the PRs are being kept "fresh" by an external actor.
2. **The lockstep-second coincidence will recur in opencode within 7 days** for a different pair of long-aged PRs by distinct authors. If the coincidence recurs, the cause is structural (a periodic bot or rebase-train) rather than incidental. The most likely repeat is on the next W17/W18 boundary or at a release-cut moment.
3. **At least one repo in the cohort will publish or expose the bot/automation responsible.** The most plausible candidate is opencode's CI configuration in the repo's `.github/workflows/` — a scheduled rebase-against-default-branch workflow keyed to a cron expression would produce exactly this signal. If discoverable, the synthesis converts from inference-from-timestamps to direct-mechanism-attribution.

A narrower prediction: **of the three #56-cluster PRs (#18767, #13854, #13224), zero will merge within 7 days.** The lockstep refresh activity is not advancing them toward merge; it is preserving their open status against a stale-close sweep. If any of the three merges, the synthesis is weakened — author engagement was apparently still happening, just not visible to this digest.

## Operational recommendation

1. **For digest tooling**, distinguish `updatedAt` (any metadata change) from `headRepository.pushedAt` (an actual code push to the PR's head branch). The latter is author-driven (or merge-train-driven, which is also author-relevant); the former includes bot mutations. Filter on the latter for "what authors did this hour".
2. **For triage tooling**, key freshness on `latest commit author timestamp` (`git log -1 --format=%aI`) rather than on PR `updatedAt`. The commit author timestamp does not move when a bot touches the PR.
3. **For repo maintainers**, if a rebase-train or label-sweep bot is in use, **document its existence in `CONTRIBUTING.md` or the repo's automation README**. Reviewers and digest tools currently have no way to attribute the lockstep signal to its cause; documentation closes the inference gap.
4. **For stale-close bots**, key the staleness clock on `comments[-1].author != bot && commits[-1].author != bot` rather than on `updatedAt`. A PR that has had only bot activity for 30 days is still stale by every meaningful definition.
5. **For cohort-level digests**, when a window contains a sub-second coincidence between two PRs by distinct authors on distinct surfaces, **flag the pair as suspected non-author refresh** and downweight in the trend signal. The current digest narrates #18767 / #13854 as if both authors were active in the window; this synthesis is the correction.

The #56 pattern will recur in any repo where automation periodically touches the open-PR queue. The cure is not to forbid the automation (the maintenance value is real) but to **separate author signal from automation signal at the metadata layer** so that downstream consumers can choose which to consume. The opencode trio is the cohort's first clean exhibit; the recurrence cadence is the diagnostic for whether the mechanism is structural.
