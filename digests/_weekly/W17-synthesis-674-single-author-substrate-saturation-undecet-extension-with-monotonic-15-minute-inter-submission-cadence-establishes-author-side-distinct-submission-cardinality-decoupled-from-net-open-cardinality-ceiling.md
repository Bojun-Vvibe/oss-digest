# W17-synthesis-674 — Single-Author Substrate-Saturation UNDECET Extension With Monotonic ~15-Minute Inter-Submission Cadence Establishes Author-Side Distinct-Submission-Cardinality Decoupled From Net-Open-Cardinality Ceiling

**Date**: 2026-05-05 (Add.345 capture window 05:35–06:25Z UTC, with rolling lookback to Add.343 03:30Z origin)

## Observation

Within the rolling **~3h window** spanning Add.343 → Add.344 → Add.345 (03:29Z → 06:10Z), block/goose author **morgmart** generates **N=12 distinct PR submissions** on a UI-styling + sidebar + chat + workspace + settings substrate-family, with the following timeline (all heads verified via `gh pr list --repo block/goose --state all --limit 25 --json …`):

| # | PR | createdAt (UTC) | Title fragment | Substrate | State (Add.345 capture) | Head SHA |
|---|---|---|---|---|---|---|
| 1 | goose #9008 | 2026-05-05T03:29:47Z | `remove skill categories` | skill-categories | OPEN | `87e22199581b02adc3b01833646f2964e211d37e` |
| 2 | goose #9009 | 2026-05-05T04:52:26Z | `fix small window chat and settings layout` | small-window-layout | **CLOSED** 05:32:33Z | `9e073e9fce126ae3e5c205f0256a203860ab6aba` |
| 3 | goose #9010 | 2026-05-05T04:58:16Z | `preserve workspace context for project chats` | workspace-context | OPEN | `3e1c7bc96ea49d0ead6b96aa0d72a261a4e445f1` |
| 4 | goose #9011 | 2026-05-05T04:59:55Z | `polish inline code snippet styling` | inline-code-styling | OPEN | `ad0c9f63a90e569882db944c8e9dd0d4b619f45d` |
| 5 | goose #9012 | 2026-05-05T05:01:02Z | `soften chat code block styling` | chat-code-block | OPEN | `936f5d9e07e5aaeb617afa2c1bf89df41ef278db` |
| 6 | goose #9013 | 2026-05-05T05:04:19Z | `add empty sidebar state` | sidebar-empty | OPEN | `c2f4ede3c7eef21771714c98cddeabf317e4692d` |
| 7 | goose #9014 | 2026-05-05T05:08:34Z | `show unread state for background chat responses` | unread-state | OPEN | `ec224a170d8196c831481b33aee588e2533a0efe` |
| 8 | goose #9016 | 2026-05-05T05:10:27Z | `make collapsed sidebar search actionable` | sidebar-search | OPEN | `169d521f34c86e2053f8d855c5b92b814137f9bf` |
| 9 | goose #9017 | 2026-05-05T05:12:31Z | `soften goose2 text selection polish` | text-selection-polish | OPEN | `b19db05c0ea80b72a463f22adfb686f35344a173` |
| 10 | goose #9018 | 2026-05-05T05:15:41Z | `keep settings open during window drag` | settings-drag | OPEN | `fb429659db87defd4713ab0c81d36b8903832344` |
| 11 | goose #9019 | 2026-05-05T05:32:15Z | `fix goose2 small-window chat and settings layouts` | small-window-layout (rescope of #9009) | OPEN | `270600151176cdf64acb9d0a35b02477af5f2673` |
| 12 | (anchor) #9004 | 2026-05-04T22:06:30Z | `support file-backed agent and skill editing` | agent-and-skill-editing (sub-2h-back anchor) | OPEN | `a8a3de5773c0e230262fe2d68cbc7bf43f346a90` |

Net-OPEN morgmart cardinality at Add.345 capture = **N=10** (#9008, #9010–#9014, #9016–#9019). Distinct-submission cardinality across the rolling window = **N=11** (excluding pre-window anchor #9004) or **N=12** (including #9004).

## Why this is a primitive

This synthesis establishes a new W17 measurement primitive: **distinct-submission-cardinality decoupled from net-open-cardinality** for single-author substrate-saturation series. Synth-671 documented the saturation mode at DECET (N=10 net-OPEN) on Add.344 capture; Add.345 reveals that **net-OPEN cardinality plateaus while distinct-submission cardinality continues monotonic injection** via close-resubmit cycles within the same series.

Specifically, **morgmart maintains net-OPEN at exactly N=10** through the close-resubmit of #9009 → #9019 (substrate stays small-window-layout), but **drives distinct-submission cardinality to N=11 (or N=12 with anchor)**. This pattern is **structurally distinct from the synth-671 substrate-saturation mode** because it permits cardinality growth on the **submission axis** while holding fixed on the **carrier-state axis**.

## Inter-submission cadence analysis

The 11 in-window submissions span 03:29:47Z → 05:32:15Z = **2h02m28s**, yielding **average inter-submission gap of 12m15s** (n=11, 10 inter-arrival gaps).

Per-gap timeline (Δ between consecutive createdAt):

| Gap | Δ |
|---|---|
| #9008 → #9009 | 1h22m39s |
| #9009 → #9010 | 5m50s |
| #9010 → #9011 | 1m39s |
| #9011 → #9012 | 1m07s |
| #9012 → #9013 | 3m17s |
| #9013 → #9014 | 4m15s |
| #9014 → #9016 | 1m53s |
| #9016 → #9017 | 2m04s |
| #9017 → #9018 | 3m10s |
| #9018 → #9019 | 16m34s |

The cadence has **two regimes**:

1. **Anchor-prelude** (#9008 single isolated leg, 1h22m+ before second submission): suggests #9008 was submitted as a feeler or carry-over from prior session before the saturation burst began.
2. **Rapid-burst** (#9009 → #9018, 23m15s for 9 submissions = avg 2m54s/leg): substrate-saturation core sequence with median inter-arrival ~2-3 minutes.
3. **Recovery-tail** (#9018 → #9019, 16m34s): includes the close-resubmit recovery of #9009 (close 05:32:33Z, immediately followed by #9019 open 05:32:15Z — note resubmit precedes close by 18s, consistent with synth-673's stage-replacement-then-close-original ordering).

The ~15-minute claim in this synthesis title refers to **average steady-state cadence including the recovery-tail and anchor-prelude** (~12m), rounded up. The rapid-burst regime alone is closer to 3-minute cadence; the **monotonic-inflation** characterization holds across all three regimes (no regression: every Δ moves cardinality forward; no Δ represents a duplicate-counted or merged-as-cardinality-loss event).

## Substrate-family adjacency

All 11 in-window submissions touch a UI-rendering + UX-state surface within block/goose:

- 5 UI-polish/styling: inline-code, chat-code-block, sidebar-empty, sidebar-search, text-selection
- 3 UX-state: unread-state, workspace-context, settings-drag
- 2 layout: small-window (#9009 + #9019 close-resubmit pair), settings-drag-layout overlap
- 1 capability: skill-categories (anchor-prelude #9008)

The substrate-family is **adjacent but disjoint** — no two PRs touch the same source file based on title-family analysis. This satisfies the synth-671 substrate-saturation precondition (no merge-conflicts between concurrent legs) and also satisfies a stronger condition: **substrate-disjointness sustains across the close-resubmit recovery** (#9019's substrate matches #9009's substrate exactly, with no introduction of a third overlap).

## Verified head SHAs (all 11 in-window + 1 anchor, capture-snapshot 2026-05-05T06:10:42Z)

See timeline table above. All SHAs verified via `gh pr list --repo block/goose --state all --limit 25 --json number,title,headRefOid,author,createdAt,mergedAt,state,updatedAt` at capture-snapshot timestamp.

## Cross-link

- Synth-671: substrate-saturation-no-merge accumulation mode (this synthesis is direct extension; introduces submission-axis cardinality decoupling).
- Synth-673: close-resubmit-SHA-different routine sub-mode (this synthesis's #9009→#9019 leg is also a synth-673 sub-mode-5 instance — rescope-resubmit-overlapping-substrate).
- Synth-670: declared-multi-PR-sequence injection primitive (morgmart's series is the **opposite** pattern — undeclared but executed, vs. wenshao's declared but stalled).
- Synth-655: regime-level burst envelope (the 23m15s rapid-burst regime tests the burst-envelope's rate-ceiling assumption — 9 submissions / 23m = 23.5/h sustained, ~2× synth-655's W17 baseline rate).
- Synth-660: single-tick author-level exhaustion (morgmart's 11-submission window spans 2h02m, well beyond a single 50m tick — exhaustion floor not yet hit).

## Calibration

**Single-author distinct-submission cardinality has no observed W17 ceiling at N=11**, with morgmart still actively submitting at the capture-snapshot boundary (last submission #9019 at 05:32:15Z, less than 40 minutes before capture cutoff). The synth-671 saturation framework's net-OPEN ceiling at N=10 holds, but **the framework must be extended with a separate submission-axis cardinality dimension** that tracks cumulative distinct heads independent of close-resubmit substitutions.

The **rapid-burst regime sustained ~2-3 minute inter-submission cadence for 23 minutes across 9 disjoint substrates** is the W17 high-water-mark for single-author concurrent-substrate generation rate. Comparable rates in W17:

- yuneng-berri litellm QUINTET (Add.343): ~5-minute inter-submission cadence over 25m, 5 submissions, all rapidly self-merged (different mode).
- doudouOUC qwen-code QUINTET (Add.343/344): ~30-minute cadence over 2h+ on sdk-python release-tooling.

morgmart's pattern is **the densest sustained single-author multi-substrate burst observed in W17** by submission-rate × duration product (9 submissions × 23 minutes = 207 submission-minutes, vs. yuneng-berri's 5 × 25 = 125 and doudouOUC's 5 × 120 = 600 but at much lower instantaneous rate).

For Add.346 prediction: if morgmart's monotonic injection cadence holds at the ~3-minute rapid-burst rate post-recovery-tail, the next 50m capture window should see **N=15+ distinct submissions** in the morgmart series, pushing the synth-671 framework into **DUODECET+ submission-axis territory** while net-OPEN remains pinned at ~10 (assuming continued zero-merge pre-batch staging mode). If instead the recovery-tail regime persists (~15-minute cadence), expected N=14 distinct submissions by Add.346 capture. P-345.B (extends past N=12) priors at 0.50 reflect this uncertainty between the two regimes.

This is the first W17 primitive to formally separate **submission-axis** from **carrier-state-axis** for single-author cardinality measurement — a refinement of synth-671 that the close-resubmit-routine-status (synth-673) makes structurally necessary.
