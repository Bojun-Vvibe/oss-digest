# W17-synthesis-671 — Single-Author DECET (N=10) Concurrent OPEN Self-Open Series Establishes UI-Substrate-Adjacency Saturation Mode Distinct from Rapid Self-Merge Cascade

**Date**: 2026-05-05 (Add.344 capture window 04:50–05:35Z UTC)

## Observation

Within Add.344's 50m capture window, **morgmart (block/goose)** opens 7 fresh PRs concurrently while carrying 3 prior OPEN PRs from earlier in the day, yielding a **DECET (N=10) all-OPEN single-author series** on UI-styling/sidebar/settings/chat substrate-family within a sub-2h temporal envelope. None of the 10 PRs have merged at capture time.

**Verified head SHAs (10 OPEN morgmart legs)**:
- block/goose #9008 — `87e22199581b02adc3b01833646f2964e211d37e` (`remove skill categories`, updated 03:29:47Z)
- block/goose #9009 — `9e073e9fce126ae3e5c205f0256a203860ab6aba` (`fix small window chat and settings layout`, updated 04:54:21Z)
- block/goose #9010 — `3e1c7bc96ea49d0ead6b96aa0d72a261a4e445f1` (`preserve workspace context for project chats`, updated 04:58:16Z)
- block/goose #9011 — `ad0c9f63a90e569882db944c8e9dd0d4b619f45d` (`polish inline code snippet styling`, updated 04:59:55Z)
- block/goose #9012 — `936f5d9e07e5aaeb617afa2c1bf89df41ef278db` (`soften chat code block styling`, updated 05:01:02Z)
- block/goose #9013 — `c2f4ede3c7eef21771714c98cddeabf317e4692d` (`add empty sidebar state`, updated 05:04:19Z)
- block/goose #9014 — `45311cf0975649c86ecd06d67aefad9b557b8046` (`show unread state for background chat responses`, updated 05:11:43Z)
- block/goose #9016 — `169d521f34c86e2053f8d855c5b92b814137f9bf` (`make collapsed sidebar search actionable`, updated 05:10:27Z)
- block/goose #9017 — `b19db05c0ea80b72a463f22adfb686f35344a173` (`soften goose2 text selection polish`, updated 05:12:31Z)
- block/goose #9018 — `fb429659db87defd4713ab0c81d36b8903832344` (`keep settings open during window drag`, updated 05:15:41Z)

**Comparator (verified head SHAs, opposite cluster mode — yuneng-berri litellm QUINTET, all rapid-self-MERGED in Add.343 window)**:
- BerriAI/litellm #27160 — `0976fbc6c40890a2433cfcd4c955f27570634e68` (Proxy import-cycle fix, MERGED 04:11:56Z)
- BerriAI/litellm #27165 — `6a6c79d9922a07eae21e6cfa404e686b3c2571a1` (CI: VCR replay test_azure_o_series, MERGED 03:59:49Z)
- BerriAI/litellm #27169 — `19ad964c4a8b6eba7d30e3de720b5e8391813ba7` (Perf: Skip Playwright Apt Install, MERGED 04:50:53Z)
- BerriAI/litellm #27170 — `4ee586a321098353cc968f0b3336d0cef0f4ede0` (Fix: Docker Prisma Binary Target, MERGED 04:58:04Z)

## Why this is a primitive

Synth-669 documented same-author multi-leg same-substrate-family QUINTET/SEXTET as the W17 cardinality high-water-mark with two empirical instances (yuneng-berri QUINTET MERGED + morgmart SEXTET OPEN). Synth-671 establishes **two distinct sub-modes within the same primitive**:

1. **Mode A — rapid-self-merge cascade (yuneng-berri litellm)**: Author opens N legs and merges them at the same author's hand within a sub-3h window (open→merge lifespan per-leg ≤30m typical). Cluster cardinality is bounded by author-side merge-throughput. Observed N=5 ceiling (Add.343).
2. **Mode B — all-OPEN-no-merge accumulation (morgmart goose)**: Author opens N legs concurrently and lets them queue for review/merge by a different reviewer. Cluster cardinality is bounded by **substrate-family adjacency surface area**, not by author-side merge-throughput. Observed N=10 ceiling (Add.344).

The two modes have **orthogonal cardinality ceilings** because they bind on different scarce resources:
- Mode A scarce resource = author's merge-rights-per-hour (gated by CI runtime, by reviewer queue, by self-review etiquette).
- Mode B scarce resource = author's discoverable adjacent UI surface (gated by product surface area, by code-base geometry).

Mode B's higher observed ceiling (N=10 vs N=5) is consistent with **UI-adjacency-graph diameter > merge-throughput-per-3h** for typical author profiles. This is the first W17 primitive to factor multi-leg cluster geometry along the **leg-state-distribution-at-cluster-instantiation-time** axis (all-MERGED-by-capture vs all-OPEN-by-capture) rather than the leg-content-substrate axis.

## Cross-link

- Synth-655: regime-level burst envelope.
- Synth-657: cross-author cohort cluster (orthogonal axis to single-author cluster).
- Synth-660: single-tick author-level exhaustion.
- Synth-664: three concurrent same-author TRIPLET+ across three carriers.
- Synth-669: single-author QUINTET/SEXTET as cardinality high-water-mark (now superseded at N=10).
- Synth-670: declared-multi-PR-sequence-injection at basin-exit (compare: morgmart's DECET was NOT pre-declared as a sequence — author just opens 10 legs).

## Calibration

Mode-B cardinality ceiling ≥10 is the new W17 high-water-mark. Future single-author all-OPEN cluster observations should be classified as Mode-A (rapid self-merge) or Mode-B (all-OPEN accumulation) at capture time. Mode-B's eventual merge-wave (P-344.B prior 0.55) is the test of whether morgmart-style accumulation eventually converts to a Mode-A-style cascade or persists as a long-stale OPEN cluster (review-bottleneck-bound).
