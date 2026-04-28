# W17 Synthesis #286 — End-Of-Sprint Cross-Author Surface-Rotation Pattern: Saturation-Author N-Sprint Followed Within Sub-1-Hour By Different-Author Single-Merge On Disjoint Subsystem Observed Simultaneously On Multiple Repos In Same Capture Window Distinct From Synth #94 Same-Author Back-To-Back Pair And Synth #283 Vendor-Internal-Vs-External Cohort Stratification

**Date:** 2026-04-28 (capture window through Add.126 close 16:35Z)
**Repos:** openai/codex (jif-oai n=5 memory sprint → etraut-openai #19929 TUI), sst/opencode (kitlangton n=4 httpapi sprint → jlongster #24704 core)
**Refines:** synth #94 (same-author same-product surface diff disjoint back-to-back merge pair nested in multi-author merge wave), synth #266 (single-author quartet rampage on disjoint surfaces), synth #282 (single-author cross-tick sprint recurrence), synth #283 (author-cohort temporal stratification).
**Distinct from:** synth #94 (which is *same* author back-to-back; synth #286 is *cross-author* hand-off), synth #283 (which is single-repo cohort separation by 11 hours; synth #286 is sub-1-hour rotation across repos).

## Pattern

Synth #94 catalogued same-author back-to-back disjoint-surface merge pairs nested in multi-author waves. Synth #266 catalogued single-author n=4 disjoint-surface rampage. Synth #282 catalogued single-author cross-tick sprint recurrence with inter-sprint dormancy. Synth #283 catalogued author-cohort separation by 11-hour gap on a single repo. None capture the phenomenon where a saturation-author's sprint **closes** and is **immediately followed within sub-1-hour by a single-merge from a different author on a disjoint subsystem** — and this rotation pattern occurs on **n≥2 unrelated repos within the same capture window**.

Synth #286 names this **end-of-sprint cross-author surface-rotation**. Its defining elements:

1. A saturation-author (Author-S) lands a single-author sprint of cardinality n≥4 on a single subsystem within a bounded window (≤2 hours typical).
2. Within sub-1-hour of Author-S's last sprint merge, a different author (Author-R) lands a **single** merge on a **disjoint subsystem** of the same repo.
3. Author-R's merge is NOT part of any prior or subsequent sprint by Author-R within the same window — it is an isolated lateral surface-jump.
4. The pattern recurs on **n≥2 repos within the same capture window** — establishing the rotation as a cross-repo regime, not a single-repo coincidence.

This is structurally distinct from synth #283's cohort stratification (which is intra-repo over 11 hours and statistically interpretable as work-cycle separation). Synth #286 operates on the **sub-hour timescale** and **across repos simultaneously**, suggesting it is **not** explainable by timezone work-cycle effects alone.

## Concrete W17 instances (Add.126 capture window)

### Instance A — openai/codex
- **Author-S:** jif-oai. Sprint cardinality: **n=5** memory-subsystem PRs over 2h50m21s (#19967 11:32:06Z → #20005 16:13:35Z), or n=3 numerical-suffix subset over 1h01m45s (#19998 15:11:50Z → #20005 16:13:35Z).
- **Sprint last merge:** #20005 `5b7d6f5c4f55` 16:13:35Z `feat: house-keeping memories 3`.
- **Author-R:** etraut-openai.
- **Rotation merge:** #19929 `087c9c1f1fff` 16:24:30Z `TUI: use cumulative turn duration for worked-for separator`.
- **Subsystem:** TUI (disjoint from `memory`).
- **Inter-merge gap (sprint-end to rotation):** **10m55s**.
- **Author-R activity check:** etraut-openai's prior W17 day-2026-04-28 codex merges include #19933 `b985768dc114` 06:33:59Z and #19920 `92fb84806521` 05:44:10Z — both >9 hours earlier, not part of any contiguous sprint. #19929 stands alone as an isolated lateral surface-jump.

### Instance B — sst/opencode
- **Author-S:** kitlangton. Sprint cardinality: **n=4** httpapi-subsystem PRs over 1h47m11s (#24716 13:22:50Z → #24809 15:10:01Z).
- **Sprint last merge:** #24809 `ea3c6c34811d` 15:10:01Z `fix(httpapi): document instance query parameters`.
- **Author-R:** jlongster.
- **Rotation merge:** #24704 `2c2fc3499b37` 15:51:25Z `feat(core): store relative path for sessions`.
- **Subsystem:** core (disjoint from `httpapi`).
- **Inter-merge gap (sprint-end to rotation):** **41m24s**.
- **Author-R activity check:** jlongster has no other W17 day-2026-04-28 opencode merges in the cited PR list — #24704 stands alone as an isolated lateral surface-jump.

## Cross-instance properties

| Property | Instance A (codex) | Instance B (opencode) | Pattern |
|----------|---------------------|------------------------|---------|
| Sprint cardinality | n=5 (or n=3 numbered) | n=4 | both ≥4 |
| Sprint subsystem | memory | httpapi | single subsystem each |
| Author-R subsystem | TUI | core | disjoint from sprint subsystem |
| Inter-merge gap | 10m55s | 41m24s | both <1h |
| Author-R cardinality | 1 | 1 | strict singleton lateral jump |
| Capture window containment | yes (Add.126) | partial (sprint-end Add.125, rotation Add.125) | both observable in current 2-tick window |

The **inter-merge gap range is 10m55s – 41m24s**, both well within sub-1-hour. The two repos are unrelated (different orgs: openai vs sst, different package ecosystems, different reviewer pools). The simultaneity of the rotation pattern across repos in the same digest window is the key signal.

## Mechanism (hypotheses)

Why would saturation-author sprints close coincidentally with disjoint-author lateral surface-jumps within sub-1-hour?

- **Reviewer freeing hypothesis:** while Author-S's sprint is in flight, Author-S monopolizes reviewer attention on the sprint subsystem. When the sprint closes, reviewers free up and other authors' queued PRs on disjoint subsystems get reviewed and merged. This predicts the gap is bounded by reviewer-freeing latency, typically <1h.
- **CI capacity hypothesis:** the sprint consumes CI runner capacity; sprint-end frees runners and queued PRs from disjoint authors clear simultaneously. This would predict gap correlates with CI throughput rather than reviewer queue.
- **Calendar coincidence hypothesis:** Author-R's PR was randomly ready at sprint-end-±30m. Synth #286 should be falsifiable by counting Author-R lateral-jumps that occur DURING sprints (not at sprint-end) — if those are equally common, the pattern is null.

## Predicates

- **P-286-A (recurrence):** the pattern recurs on n≥1 of {litellm, gemini-cli, qwen-code, goose} within the next 8 ticks (saturation-author sprint of n≥4 followed by different-author lateral-jump within 1h on disjoint subsystem). Falsified if no recurrence.
- **P-286-B (timing tightness):** all observed instances of synth #286 have inter-merge gap in [10m, 60m] range. Falsified if observed instance has gap >60m or <10m.
- **P-286-C (Author-R isolation):** Author-R remains a single-merge isolated jump and does NOT initiate a follow-up sprint within 4 ticks of the rotation merge. Falsified if Author-R fires a 2nd merge on the same or different subsystem within 4 ticks.
- **P-286-D (cross-repo simultaneity):** in capture windows where one synth #286 instance occurs, a second instance occurs in the same window on a different repo with probability >0.5. Tracks whether the pattern is genuinely synchronous-across-repos or whether single-repo instances are independent.

## Distinguishing from neighbors

| Synth | Authors | Surfaces | Time scale | Cross-repo simultaneity |
|-------|---------|----------|------------|-------------------------|
| #94 | same author | disjoint | back-to-back | no |
| #266 | same author (n=4) | disjoint | 1h41m intra-sprint | no |
| #282 | same author | same subsystem | cross-tick with 7-tick dormancy | no |
| #283 | cohort (multi-author) | (variable) | 11h intra-day | no (single-repo) |
| **#286** | **two authors (S then R)** | **disjoint between S and R** | **sub-1h sprint-end-to-rotation** | **YES (n≥2 repos same window)** |

## Negative cases

Synth #286 does NOT include:
- Mid-sprint cross-author merges (Author-R lands during Author-S's sprint, not at sprint-end).
- Same-subsystem hand-offs (Author-R on same subsystem = synth #94 territory or shared-surface coordination).
- Sprint-end followed by Author-R sprint (Author-R fires multiple merges = different pattern, candidate for new synth).
- Bot-driven rotation merges (e.g. dependabot landing post-sprint = bot-class, not author-coordination).

## Open questions

- Does the rotation gap correlate with sprint cardinality? (Larger sprints → longer gap due to reviewer fatigue, or shorter gap due to bigger reviewer-queue dam-break?) Resolution requires n≥6 instances.
- Does Author-R's identity correlate with Author-S's identity across instances? (Are the same Author-R authors the "lateral-jumpers" repeatedly, or is Author-R drawn uniformly from the contributor pool?) Resolution requires longitudinal tracking across W18+.

**Anchor merges:**
- Instance A: jif-oai #20005 `5b7d6f5c4f55` 16:13:35Z → etraut-openai #19929 `087c9c1f1fff` 16:24:30Z (codex, gap 10m55s).
- Instance B: kitlangton #24809 `ea3c6c34811d` 15:10:01Z → jlongster #24704 `2c2fc3499b37` 15:51:25Z (opencode, gap 41m24s).
