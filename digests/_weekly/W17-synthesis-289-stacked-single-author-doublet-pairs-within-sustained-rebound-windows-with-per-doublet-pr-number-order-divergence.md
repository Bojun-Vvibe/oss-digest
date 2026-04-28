# W17 Synthesis #289 — Stacked Single-Author Doublet Pairs Within Sustained-Rebound Windows With Per-Doublet PR-Number-Order Divergence

## Pattern statement

Within a sustained-rebound window (a tick following a corpus-level silence-break that itself sustains repo-level activity rather than reverts to dormancy), TWO distinct single-author doublets on disjoint sub-surfaces of a shared parent surface CAN stack inside a sub-40-minute interior, and the per-doublet PR-number ordering relative to merge-time ordering can DIVERGE between the two doublets in the same stack. This refines the single-author doublet taxonomy (synth #91 metronome lineage, synth #100 doublet variants) by adding a corpus-condition (sustained-rebound window) under which the doublet pattern reproduces twice in the same window, and identifies PR-number-order-vs-merge-order alignment as a per-doublet rather than per-window property.

## Anchoring evidence (ADDENDUM-129, gemini-cli, 2026-04-28T17:40Z–18:55Z)

The gemini-cli n=4 cluster 17:44:07Z–18:15:17Z (31m10s span) consists of two stacked single-author doublets, each on disjoint CLI sub-surfaces:

- **cocosheng-g doublet, 1m44s gap, REVERSE PR-number order:**
  - #26125 `4b8d5e76243b` 17:44:07Z `fix(cli): prevent ACP stdout pollution from SessionEnd hooks` (CLI/ACP-hooks)
  - #26118 `c841070582c6` 17:45:51Z `feat(cli): support boolean and number casting for env vars in settings.json` (CLI/settings)
  - PR #26125 (higher number) merged FIRST, PR #26118 (lower number) merged 1m44s LATER.

- **Adib234 doublet, 26m06s gap, FORWARD PR-number order:**
  - #26078 `59b2dea0e5dd` 17:49:11Z `fix(cli): preserve Request headers in DevTools activity logger` (CLI/DevTools)
  - #26132 `f8603e990b3b` 18:15:17Z `fix(cli): prevent automatic updates from switching to less stable channels` (CLI/auto-update)
  - PR #26078 (lower number) merged FIRST, PR #26132 (higher number) merged 26m06s LATER.

Inter-doublet gap (cocosheng-g #26118 17:45:51Z → Adib234 #26078 17:49:11Z) = 3m20s. Total stack span 31m10s. Both doublets target the CLI parent surface; all four sub-surfaces (ACP-hooks, settings, DevTools, auto-update) are pairwise disjoint. The window is a sustained-rebound window (it follows ADDENDUM-128's gemini-cli n=5 burst that itself broke ADDENDUM-127's #26066 silence-break framing).

## Why the divergence matters

Prior W17 synthesis lineage (synth #91 metronome triplets, synth #100 doublet variants, synth #101 disjoint-sub-surface non-LIFO doublet) treats single-author doublets as a single class with sub-features (gap-width, sub-surface relationship, LIFO/FIFO selection). The Add.129 evidence shows that within ONE sustained-rebound window, two doublets by two different authors can both satisfy the disjoint-sub-surface-of-shared-parent rule yet exhibit OPPOSITE PR-number-vs-merge-time ordering. This falsifies any synthesis that would predict PR-number ordering as a property of the rebound-window or of the parent-surface; it is a per-doublet (i.e., per-author-session) property only.

Cross-comparison with same-tick codex evidence: viyatb-oai network-proxy doublet (#20002 17:51:44Z + #20001 18:52:50Z, 1h01m gap) is also REVERSE PR-number order. Add.128 fcoury-oai TUI doublet (#19901 + #19986, 1m14s gap) is REVERSE PR-number order. So across the last two ticks, PR-number order in single-author-disjoint-sub-surface doublets is REVERSE in 3 of 4 cases (cocosheng-g, viyatb-oai, fcoury-oai) and FORWARD in 1 of 4 (Adib234) — REVERSE ordering is the modal but not exclusive case.

## Falsifiers

- An n=2 author-session doublet on a shared parent surface that closes inside a sustained-rebound window with FORWARD PR-number order in BOTH the per-doublet and per-window-modal cases would falsify "REVERSE-ordering is the modal property of single-author doublets in rebound windows".
- A sustained-rebound window in which only ONE doublet appears (rather than two stacked) would not falsify the synthesis but would weaken the "stacked-doublet-pair is a recurring pattern" claim; need n≥2 ticks of stacked-doublet-pair occurrence to elevate confidence.
- A stacked doublet pair in which BOTH doublets target disjoint PARENT surfaces (not disjoint sub-surfaces of a shared parent) would split the pattern into a different class.

## Tracking forward

Watch the next 4 ticks for: (a) any sustained-rebound window with stacked doublet pair (anchors n=2 occurrence); (b) PR-number ordering distribution across the next 6 single-author disjoint-sub-surface doublets (test the 3:1 REVERSE:FORWARD ratio); (c) whether the doublet pattern recurs WITHOUT a sustained-rebound window precondition (would indicate the rebound condition is incidental rather than enabling).

## Related synthesis lineage

- synth #91 (single-author triplet self-merge metronome on disjoint surfaces with sub-15-minute inter-merge cadence) — parent class
- synth #100 (debut-author concurrent follow-up doublet on shared infra surface) — sibling variant
- synth #101 (same-author n=2 self-merge inside 70min adjacent semantic surface non-LIFO selection substitution shape second member) — sibling variant
- synth #97 (same-author n=3 self-merge series with shared spec-file co-touch and monotonically contracting lifespans) — adjacent class on shared-anchor axis
- synth #287 (single-author single-day single-subsystem sprint discipline taxonomy) — parent class on the sprint-discipline axis

## Cited PRs

gemini-cli #26125, #26118, #26078, #26132 (Add.129); codex #20002, #20001, #19901, #19986 (Add.128–129); reference to Add.127 #26066 silence-break and Add.128 gemini-cli-robot bracketing pattern.
