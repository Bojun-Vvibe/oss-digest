# W17 Synthesis #104 — Post-Merge Author Session Expansion: Same-Author Opens/Resumes N≥2 Follow-on PRs Within 30 Minutes of a Self-Merge on Adjacent Semantic Surfaces

**Status:** new anchor. Distinct from synth #93 (debut author N=4 introduction) and synth #103 (anchor-pair self-merge series). Captures the *post*-merge author session topology rather than the debut topology or the serial-merge topology.

**Window of evidence:** 2026-04-27 11:31:57Z (codex#19792 merge) → 2026-04-27 11:47:27Z (codex#18982 update). 15m30s, single repo, single author, three PRs across two semantic surfaces.

## The signature at N=3 (jif-oai @ openai/codex)

| # | PR | event | timestamp (UTC) | branch | diff | semantic surface |
|---|---|---|---|---|---|---|
| 0 | openai/codex#19792 | self-merge | 11:31:57Z | `jif/clean-multi-agent-v2-config` | +152/-22 | multi_agent_v2 config |
| 1 | openai/codex#19805 | new-PR open + update | 11:43:42Z (+11m45s) | `jif/hint-ma-v2` | +289/-4 | multi_agent_v2 hints |
| 2 | openai/codex#18982 | resumption update | 11:47:27Z (+15m30s) | `jif/memories-on-file-system` | +1074/-1053 | memory consolidation |

Anchor merge SHA: `f8c527e5298f2cd047a12624133b24de1bf3829d`. All three branches share the `jif/` author-namespace prefix. PRs #19792 and #19805 share the **multi_agent_v2** surface (`ma-v2` and `multi-agent-v2-config` are the same feature axis). PR #18982 is on the **memory** surface but is part of the same author's work cluster (the workspace-diffs-for-memory-consolidation feature historically depends on multi-agent context isolation).

## The four invariants at N=3

1. **Single-author exclusivity within the session.** All three PR-events authored by `jif-oai`. Zero other-author touches on any of the three branches in the 15m30s window.
2. **Author-namespaced branches (Grammar B per synth #218).** All three branches match `<author-prefix>/<topic>-<kebab>` form. The author-namespace is uniform.
3. **Sub-30-minute span from anchor merge to last follow-on event.** Last follow-on update (#18982) at +15m30s. Both follow-ons fall inside [+10m, +20m] band — tight clustering, not uniformly distributed across the 30-minute window.
4. **Adjacent semantic surfaces.** #19792 + #19805 are **same-surface** (multi_agent_v2 config + multi_agent_v2 hints). #18982 is **adjacent-surface** (memory, but with multi-agent context dependency). No follow-on lands on a fully-disjoint surface. This distinguishes from synth #91 (triplet on disjoint surfaces).

## What this is NOT

- **NOT synth #93** (debut author N=4 introduction). jif-oai is not a debut author in the corpus; #19792 is their nth merge. Synth #93 requires the author's first appearance.
- **NOT synth #91** (triplet on disjoint surfaces). #104 requires *adjacent* surfaces, not disjoint.
- **NOT synth #103** (anchor-pair self-merge serial). #103 requires the SAME file-pair touched in every member; #104 only requires semantic-surface adjacency. #19792 and #18982 do not touch a shared file pair.
- **NOT synth #94** (back-to-back merge pair). #104 has only ONE merge in the window; the follow-ons are open/update events, not merges. The signature is **merge-event followed by open-events**, not a chain of merges.
- **NOT synth #97/#101 (superseded by #103)**. Those tracked monotone trends within a self-merge series. #104 tracks burst topology around a single-merge anchor.

## Falsifiable claim for synth #104

**A self-merge event in a repo with a healthy author cohort is followed within 30 minutes by N≥2 same-author PR-events (open or update) on semantically adjacent surfaces, with the same author-namespace prefix.** The structural invariant is *temporal proximity to anchor-merge* + *author-namespace continuity* + *surface adjacency* (NOT identity, NOT disjointness).

**Implication for predictive use:** When a self-merge by author A occurs in repo R, the next 30 minutes have **elevated probability of additional A-authored PR activity in R**, on surfaces semantically related to the merged PR's surface. This is **the contra-positive of synth #220** (open-queue-freshness-as-predictor): #220 forecasts which PR merges next; #104 forecasts which AUTHOR will produce next *open-events*. Both are needed for cadence forecasting; neither alone suffices.

**Specific contrast with the codex break-event in ADDENDUM-89.** Add.89 documented that codex's silence broke via jif-oai #19792 — **not** via the queue-freshest pash-openai #19707. Synth #104 explains the post-event: the author who merged immediately produced **3 more PR-events**, expanding their own session. The author who would have merged under synth #220's prediction (pash-openai #19707) did not produce ANY post-event activity (their PR remained `updatedAt 10:44:22Z` — stale across the entire post-merge window).

## Test/escalation conditions

Synth #104 is FALSIFIED if any of:
- **(a) N=4+ extension fails the 30-minute envelope.** If jif-oai's session continues past 12:01:57Z (anchor + 30m) without further events, synth #104 still holds for the N=3 sample but cannot be claimed as N≥4.
- **(b) Cross-author intrusion within the 30-min window.** If a non-jif-oai PR opens/updates on the multi_agent_v2 surface at 11:31:57Z–12:01:57Z, the "single-author exclusivity within the session" invariant breaks. (Confirmed not the case in Add.89 capture.)
- **(c) Disjoint-surface intrusion.** If one of the follow-ons turns out to be on a fully unrelated surface (e.g., `jif/fix-typo-readme`), the "adjacent semantic surfaces" invariant degrades.
- **(d) Cross-corpus generalization fails.** If sampling other recent self-merges in the W17 corpus (e.g., wenshao#3538 in qwen-code at 08:54:10Z, kitlangton series in opencode) shows zero post-merge same-author follow-on activity within 30m, synth #104 is **codex-specific**, not corpus-general.

## Cross-corpus probe (preliminary, this synth)

- **wenshao @ qwen-code #3538** merged 08:54:10Z. wenshao's NEXT activity in qwen-code: open PR `feat/bash-bg-pool` (top of fresh queue at Add.88 capture 11:00:26Z, +983/-397). That is +2h06m post-merge — **outside** the 30m window. **Negative cross-repo evidence at N=1.** Synth #104 is *not yet* corpus-general.
- **pomelo-nwu @ qwen-code #3576** merged 06:47:44Z (alongside stacked-child #3607 same-second). pomelo-nwu's next activity: not visible in current open-queue snapshot. **Inconclusive.**
- **kitlangton @ anomalyco/opencode** synth #103 series: each member is followed by the next member within minutes — but those are *merges*, not open-events on adjacent surfaces. The pattern is inside synth #103 (serial self-merge), not synth #104 (post-merge open-burst).

**Provisional conclusion:** synth #104 currently has N=1 strong evidence (jif-oai @ codex) and N=1 weak negative (wenshao @ qwen-code, +2h06m gap). Promote to N=2 if a second instance surfaces in Add.90–92. Demote/restrict to "high-velocity-author" sub-class if cross-corpus generalization fails by Add.95.

## Distinguishing from existing synths (summary)

| Property | #93 (debut) | #91 (triplet disjoint) | #103 (anchor pair) | #94 (back-to-back) | **#104 (this)** |
|---|---|---|---|---|---|
| Single-author | ✓ | ✓ | ✓ | ✓ | ✓ |
| Surface relation | n/a | disjoint required | shared file-pair required | same-surface | **adjacent required** |
| Event types | open burst | merges | merges | merges | **1 merge + N open/update** |
| Window | first appearance | mins-to-hours | hours | mins | **≤30 min from anchor merge** |
| Branch grammar | mixed | mixed | mixed | mixed | **Grammar B uniform** |

## Cross-references

- **ADDENDUM-89** (this date) is the seed observation.
- **Synth #218** Grammar B prevalence — synth #104 reinforces that Grammar B branches cluster within author sessions.
- **Synth #220** (open-queue-freshness-as-predictor) — synth #104 is the complementary predictor for *next-author-activity* vs #220's *next-merge-PR*.
- **Synth #100** (cross-repo merge-rate co-suppression) — synth #104 operates at the per-author scale, orthogonal to the per-corpus scale.
