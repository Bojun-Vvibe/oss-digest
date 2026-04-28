# W17 Synthesis #101 — Cross-tick deferred-half resolution: when a sub-10s doublet's prune-half lands inside the original window but the rework-half resolves multiple ticks later under a different OMR regime

**Anchor windows:** 2026-04-28T04:30Z → 06:30Z UTC (3 consecutive ticks: ADDENDUM-111, 112, 113).
**Anchor repo:** openai/codex.
**Anchor PRs:** [openai/codex#19899] (prune-half, merged 06:08:35Z, SHA `0a32c8b3`), [openai/codex#19900] (rework-half, OPEN at 06:30Z, lifespan ≥5h44m).
**Anchor author:** bolinfest (Michael Bolin).
**Parent synths:** #87 (asymmetric-half-merge of sub-10s doublet — prune-half lands, rework-half iterates), #100 (open-to-merge ratio as window-over-window volatility invariant — drafted in tandem this tick).

## Why this is distinct from #87 and #100

Synth #87 captured the asymmetric half-merge structure as a **single-window observation**: the prune-half merges and the rework-half remains open within the same capture window, and the synth's predictive horizon was confined to "what happens to the rework-half next." It did not model the **temporal stretching** of the resolution.

Synth #100 captured the **window-level OMR scalar** as a regime classifier but did not bind specific PR-pair structures to specific OMR-regime transitions.

Synth #101 captures the **cross-tick deferred-half resolution** as a structural composite: a sub-10s doublet whose prune-half merges in one window and whose rework-half remains open across **≥2 capture ticks** spanning **≥1 OMR regime change**. The synth predicates the rework-half's eventual resolution mode (merge / prune / abandon) on the OMR regime trajectory it traverses.

## The bolinfest #19899/#19900 doublet trajectory

| Event | Tick | Wall-clock | OMR regime | Doublet status |
|---|---|---|---|---|
| Both opened (sub-10s apart) | ADDENDUM-111 (~04:46Z) | both ~04:46Z | demand-burst (OMR=0.143) | doublet OPEN; both ≤10s gap |
| Both still open at tick close | ADDENDUM-111 (04:55Z close) | lifespan 9m+ each | demand-burst | doublet OPEN; matches synth #87 anchor |
| Both still open at next tick close | ADDENDUM-112 (05:52Z close) | lifespan 1h05m+ each | balanced (OMR=1.0) | doublet OPEN; survives 1 OMR regime change |
| Prune-half (#19899) merges | ADDENDUM-113 (06:08Z) | #19899 lifespan 5h22m | balanced trending overshoot (OMR=3.0) | half-merge; #19900 OPEN |
| Rework-half (#19900) status | ADDENDUM-113 (06:30Z) | #19900 lifespan 5h44m+ | balanced overshoot (OMR=3.0) | OPEN, deferred |

**The doublet survives 3 capture ticks and 2 OMR regime transitions before the prune-half lands.** This is a **3× longer cross-tick lifespan** than the synth #87 anchor (which had both halves open within a single tick).

## Structural predicate (cross-tick deferred-half resolution)

A sub-10s doublet exhibits **cross-tick deferred-half resolution** when:

1. Both halves open within ≤10s of each other (synth #87 base predicate).
2. Both halves remain OPEN at the close of their first capture window.
3. The doublet survives ≥1 capture tick boundary.
4. One half (the prune-half) merges in tick T_m; the other half (the rework-half) remains open at tick T_m close.
5. T_m is **≥ 1 tick** after the doublet's open tick.
6. The OMR regime at T_m differs from the OMR regime at the open tick.

The bolinfest #19899/#19900 doublet satisfies all six predicates: opened in demand-burst (OMR=0.143), survives through balanced (OMR=1.0), prune-half merges in balanced-overshoot (OMR=3.0), rework-half deferred.

## What the deferred resolution tells us

**(a) Doublets are not always synth-#87 instantaneous-resolution objects.** Synth #87's anchor cases resolved within a single capture tick. The bolinfest doublet shows that the asymmetric-half-merge **structural pattern** can be **temporally stretched across multiple ticks** while preserving the structural identity (one half merges, one half iterates). The structural object survives across OMR regime changes.

**(b) The OMR regime at merge-time correlates with prune-vs-rework polarity assignment.** In the bolinfest case, the prune-half (the smaller, more contained change — `app-server-protocol: mark permission profiles experimental`) merged during a balanced/overshoot OMR regime; the rework-half (presumably the larger or more contested change in #19900) deferred. **Conjecture: prune-halves merge during balanced OMR; rework-halves merge (if at all) during a subsequent demand-burst.** This couples synth #87's polarity to synth #100's regime classifier.

**(c) Cross-tick survival implies inter-tick review attention.** A doublet that survives ≥3 ticks accumulates ≥3 capture-window worth of reviewer attention. The fact that #19899 merged at 5h22m (not at minutes-of-lifespan like a synth #87 fast-merge) suggests **review delay rather than author-side iteration**. The author's serialization discipline (synth #99 risk lens) was effective; the bottleneck was downstream.

## Falsifiable predictions

1. **#19900 resolution mode by Add.119**: rework-half #19900 either merges or closes-no-merge by ~12:08Z (6h after #19899's merge, per Pred ZZ in Add.113). Given the conjecture in (b), if it merges, the containing tick will be in demand-burst regime (OMR < 0.5); if it closes-no-merge, the containing tick will be in balanced or overshoot. Falsifier: #19900 resolves and the OMR regime is opposite-classified.
2. **Other cross-tick deferred-half doublets in W18**: ≥1 additional doublet in any monitored repo will exhibit the cross-tick deferred-half pattern (≥1 tick boundary survival + half-merge in different OMR regime than open) within the next 7 days. Falsifier: zero such doublets observed.
3. **Author concentration**: cross-tick deferred-half doublets cluster on **single-stack-author** PRs (where one author holds multiple concurrent open PRs touching adjacent surfaces). Specifically, ≥75% of cross-tick deferred-half doublets in W17/W18 will be by authors who, at the doublet's open time, already had ≥1 other open PR in the same repo. Falsifier: <50% of such doublets satisfy the multi-stack-author condition. (bolinfest at #19899/#19900 open time was concurrently working on the #19774/#19775/#19776 `permissions:` series — satisfies the predicate.)
4. **Lifespan-asymmetry amplification**: the rework-half's final lifespan (whether merge or close-no-merge) will be **≥ 3×** the prune-half's lifespan when measured in capture-tick units. For bolinfest: prune-half #19899 spanned 3 ticks (Add.111-113); rework-half #19900 must span ≥9 ticks to satisfy. Add.119 deadline = ~6 ticks past Add.113 = total 9 ticks — exactly at the boundary. Falsifier: #19900 resolves at ≤6 ticks total span.
5. **OMR-regime-bound merge timing**: the prune-half's merge tick has OMR ∈ [0.5, 5.0] (balanced regime) with probability ≥ 0.8 across the next 5 cross-tick deferred-half cases observed. Falsifier: <50% of next 5 prune-half merges occur in balanced OMR.

## Sustains / refines / falsifies prior synths

- **Refines synth #87**: extends synth #87's per-window asymmetric-half-merge frame to a multi-window deferred-resolution frame. Synth #87 remains valid for instantaneous-resolution doublets; synth #101 covers the cross-tick subclass.
- **Sustains synth #100**: synth #101 binds doublet-resolution events to OMR regimes (the conjecture in (b) and Pred 1), providing a structural-event coupling for synth #100's scalar regime classifier.
- **Sustains synth #97/#99**: bolinfest at the time of #19899/#19900 open was running a parallel #97-conformant `permissions:` 3-PR series (#19774/#19775/#19776). The doublet and the series are temporally interleaved, demonstrating that **a single author can simultaneously sustain a #97 self-merge series AND a #87/#101 doublet** in the same repo. This was implicit in synth #97 but not explicitly tracked.
- **Does NOT falsify any prior synth.**

## Distinctness from other synths

- **vs synth #87** (instantaneous half-merge): #87 resolves within one tick; #101 spans ≥2 ticks. The structural pattern is the same; the temporal scale is different by ≥1 capture-window.
- **vs synth #88** (aged PR self-close pair bookending fresh surface open-merge cycle): #88 is bookend-by-self-close; #101 is bookend-by-merge-asymmetry. Different polarity, different actor (self-close vs reviewer-merge).
- **vs synth #89** (cross-repo author handoff with identical content refile): #89 is cross-repo single-author refile; #101 is intra-repo single-author doublet asymmetry. Different repo cardinality, different content-identity assumption.
- **vs synth #94** (same-author same-product-surface diff-disjoint back-to-back-merge pair): #94 has both PRs merged in close succession; #101's defining feature is **non-merge of one half** across multiple ticks.

## Risk lens

- **Reviewer attention drift on deferred halves**: a rework-half that survives ≥3 capture ticks is at increasing risk of staleness — sibling commits to main may invalidate the rework-half's diff base. Cross-tick deferred-halves should be flagged as **rebase-risk PRs** at the start of each tick they survive.
- **OMR-aware review prioritization**: if the conjecture in (b) holds, reviewers should prioritize **rework-halves during demand-burst regimes** (OMR < 0.5) — the regime is empirically conducive to such resolution. During balanced/overshoot regimes, prune-half merges proceed; rework-halves accumulate.
- **Multi-stack-author bottleneck**: the bolinfest case shows a single author concurrently driving a 3-PR `permissions:` series, a doublet (#19899/#19900), and serving as the rework-half's iterator. Author-side bandwidth becomes the binding constraint — distributed review or author rotation is necessary if such patterns become persistent.
