# W17 Synthesis #115 — Cross-repo simultaneous same-second long-tail PR co-bump pair: two unrelated repos exhibit the synth-#84 mechanical-refresh fingerprint within a 3-minute interval, on disjoint base branches and disjoint surface families

**Window:** 2026-04-25T23:29:48Z → 2026-04-26T00:06:39Z (Add. 35)
**Repos:** BerriAI/litellm, anomalyco/opencode

## Pattern statement

Within a single 36m51s addendum window, **two unrelated repositories** each independently produced a **same-second pair of long-tail PR refreshes** on PRs of widely-divergent age (8-day spread in one repo, 35-day spread in the other), targeting **disjoint base branches** (`litellm-oss-staging-04-25-2026` + `litellm_internal_staging` in litellm; both `beta` in anomalyco/opencode), and on **disjoint surface families** (Azure Sentinel + Vertex Model Garden in litellm; mobile-touch + TUI markdown in anomalyco/opencode). The two pairs fired **2m46s apart** (23:39:38Z and 23:42:24Z). This is the synth-#84 same-second co-bump fingerprint — but observed **simultaneously across two unrelated repos** for the first time in tracking, suggesting the fingerprint is **infrastructure-level**, not repo-specific.

## Anchor evidence — litellm (pair @ 23:42:24Z)

- **[BerriAI/litellm#26451]** — `alihacks`, head SHA `7c74005b7ad4f5b9a59244233b7bc3bfd77f479b`. Opened 2026-04-24T20:25:16Z. **+909/-81 across 8 files.** Base `litellm-oss-staging-04-25-2026`. *"azure_sentinel_truncate Azure Sentinel truncation changes to comply w…"* **PR age at refresh: 27h17m08s.**
- **[BerriAI/litellm#26076]** — `Sameerlite`, head SHA `71cfdbf840140626a04730905e0c634839ff233f`. Opened 2026-04-20T04:48:50Z. Base `litellm_internal_staging`. *"feat(vertex_ai): Model Garden OpenAPI for publisher model ids."* **PR age at refresh: 5d18h53m34s = 138h53m34s.**

**Both `updated_at` are exactly `2026-04-25T23:42:24Z`.** Authors are different (`alihacks` vs `Sameerlite`), surfaces are different (security/observability vs provider integration), bases are different (`litellm-oss-staging-04-25-2026` vs `litellm_internal_staging`). **Age ratio: 5.09×.**

## Anchor evidence — anomalyco/opencode (pair @ 23:39:38Z)

- **[anomalyco/opencode#18767]** — `noahbentusi`, head SHA `2e2c3773f0825e28f8a009f3deba3b3db34e1914`. Opened 2026-03-23T11:05:41Z. Base `beta`. *"feat(app): Mobile Touch Optimization."* **PR age at refresh: 33d12h33m57s = 805h33m57s.**
- **[anomalyco/opencode#13854]** — `mocksoul`, head SHA `399dd8afb1701467eb1310ebaa2ba04e299e4719`. Opened 2026-02-16T14:43:43Z. Base `beta`. *"fix(tui): stop streaming markdown/code after message completes."* **PR age at refresh: 68d08h55m55s = 1640h55m55s.**

**Both `updated_at` are exactly `2026-04-25T23:39:38Z`.** Authors different (`noahbentusi` vs `mocksoul`), surfaces different (mobile UX vs streaming markdown), **base is identical (`beta`)** — distinguishing fingerprint from the litellm pair. **Age ratio: 2.04×.** **#13854 is the oldest active PR in tracking** (68 days).

## Falsifiable signals

1. **Same-second precision**: both pairs fire within the same `updated_at` field value to the second — not "within a minute." This rules out routine rebase queues that batch by minute.
2. **Cross-author**: each pair's two PRs are by **different humans** — eliminates "single contributor's batch refresh."
3. **Cross-surface**: each pair's two PRs touch **non-overlapping code areas** — eliminates "single feature-area mass-rebase."
4. **Cross-repo simultaneity**: both pairs fire within **2m46s** of each other, in **different repos with different maintainers**. This rules out repo-specific bot scheduling.
5. **Inverse-age pairing**: in both repos, one PR is **mid-age** and one is **deep-stale** (5×–2× age ratio), ruling out a "fresh-PR-only" sweep.

## Distinguishing from prior synths

- **Not synth #84** (recurring same-second long-tail PR pair co-bump): synth #84 is **single-repo** observation. Synth #115 is the **multi-repo simultaneous** generalization.
- **Not synth #80** (intra-repo deep long-tail refresh wave): synth #80 is N≥3 in one repo. Synth #115 is **N=2 per repo, 2 repos at once**.
- **Not synth #70** (cross-repo long-tail PR refresh wave): synth #70 spans multi-week aged PRs **synchronizing across unrelated repos** but uses minute/hour granularity. Synth #115 is **same-second** within each pair.
- **Not synth #56** (lockstep refresh of aged PRs as bot rebase train): synth #56 is **same-author** lockstep. Synth #115 pairs are **cross-author** within each repo.

## Generalization & mechanism hypothesis

The same-second co-bump cannot be coincidental given (a) the two-pair occurrence within 3 minutes across unrelated repos and (b) the cross-author + cross-surface property within each pair. **The most parsimonious mechanism is a workspace-scope mass operation** — a bot or maintainer running a query like *"rebase all open PRs against base X"* or *"re-validate stale PRs"* that touches both PRs in the pair as part of one transaction. The fact that the litellm pair spans **two different bases** (`litellm-oss-staging-04-25-2026`, `litellm_internal_staging`) suggests the trigger is **not a single-base rebase**, but rather a **periodic webhook fanout** (e.g., a parent-branch advance that triggers `updated_at` bump on all descendants).

## Watch list (next 3 addenda)

- Does another repo (codex, crush, goose) exhibit the same same-second co-bump fingerprint within W17 — **if yes, promote synth #115 from "two-repo coincidence" to "ecosystem-level periodic event"**.
- Does the litellm pair `#26451 ↔ #26076` re-fire on the same second in a future addendum (recurrence test)? Synth #84 noted recurring pairs — does this pair join the recurrent set?
- Does the anomalyco/opencode `base=beta` pair `#18767 ↔ #13854` re-fire? If both pairs re-fire on the same future second, the **trigger is a global cron** with sub-second precision shared across infrastructure.
