# W17 Synthesis #189 — bolinfest #19734/#19735/#19736/#19737 chained-base 4-PR open burst at 00:40:18–21Z (3-second span, depth-4 chain rooted on unmerged #19395) executed 2m12s before sibling-foundation #19394 merges, introducing a stack-bootstrap-during-foundation-flight topology that is the formal inverse of synth #185 stack-collapse-by-author and the chained-base counterpart of synth #92 same-second 4-PR disjoint-surface burst

**Anchor window:** 2026-04-27T00:40:18Z (#19734 open) → 2026-04-27T00:40:21Z (#19737 open) → 2026-04-27T00:43:33Z (#19394 sibling-foundation merge). 3s open span; 5m15s end-to-end episode.

## Event tape (verified via `gh pr list --repo openai/codex`)

| PR | createdAt (Z) | baseRefName | Title | State |
|---|---|---|---|---|
| #19394 | 2026-04-24T16:02:56 | `main` | `permissions: remove core legacy policy round trips` | **MERGED** 2026-04-27T00:43:33Z (mergeCommit `2cb8746457d7c9e57c3cc42fecf05996453ca43d`, merged-by bolinfest) |
| #19395 | 2026-04-24T16:02:58 | `main` | `permissions: finish profile-backed app surfaces` | OPEN (8d2h+) |
| #19734 | 2026-04-27T00:40:18 | `pr19395` | `permissions: centralize legacy sandbox projection` | OPEN |
| #19735 | 2026-04-27T00:40:18 | `pr19734` | `permissions: store only constrained permission profiles` | OPEN |
| #19736 | 2026-04-27T00:40:20 | `pr19735` | `permissions: constrain requirements as profiles` | OPEN |
| #19737 | 2026-04-27T00:40:21 | `pr19736` | `permissions: derive legacy exec policies at boundaries` | OPEN |

All six are bolinfest-authored, all `permissions:`-prefixed, all on the same conceptual surface (codex permission/policy model). The chain after the burst:

```
main ← #19394 (merged 00:43:33Z) [sibling]
main ← #19395 (open) ← #19734 ← #19735 ← #19736 ← #19737
```

## What is novel vs synth #92, #180, #183, #185

- **vs synth #92 (same-second 4-PR open tuplet, B-A-M-N qwen-code, four disjoint surfaces, all `main`-base):** Same cardinality (4), comparable atomicity (3s vs same-second), **same author concentration (n=1)**, but **chained-base topology** instead of disjoint-surface flat topology. Synth #92's 4-tuplet was four independent atoms; here the four PRs form a **5-deep chain** when the unmerged #19395 anchor is included. This is the **first chained-base 4-PR same-second(±3s) open burst** in W17 — a strictly stronger topological constraint than synth #92.
- **vs synth #180 (bolinfest stack-MRM-triple as merge-precursor rebase metronome on existing 3-deep chain):** Synth #180 documented bolinfest **rebasing a depth-3 chain prior to merging**; here bolinfest **bootstraps a fresh 4-tier stack on top of an unmerged base** in a single 3-second burst — i.e., the stack does not pre-exist and get rebased, it is **born in one atomic act**. This is **stack-creation-by-burst** rather than stack-maintenance-by-rebase.
- **vs synth #183 (cross-author stack-collapse + stack-bootstrap pair within 73s on same repo):** Synth #183's bootstrap half was opened by a **different author** than the collapse half, with a 73-second gap — here the bootstrap is **same-author** (bolinfest) and intra-author with **0/2/1 second inter-PR gaps** — atomicity is ~25× tighter and authorship is collapsed to a single actor.
- **vs synth #185 (aibrahim-oai 8-PR chained-base mass-close then collapse into single replacement #19725):** Synth #185 was **stack-disposal** — 8 chained-base PRs **closed** by author followed by a single replacement merge, i.e., **chain → 1**. This synth #189 is the **formal inverse**: a single base (#19395) gets a 4-tier chain **opened** on top in 3 seconds, i.e., **1 → chain**. Together synth #185 + #189 close the **chained-base lifecycle taxonomy** for W17: birth-by-burst (this) and death-by-burst (#185) are now both observed, both by codex maintainers (bolinfest, aibrahim-oai), both on `permissions:`/`MCP` core-architecture surfaces.

## What is novel vs the foundation-flight axis

The decisive new structural fact: the burst is **bracketed by a sibling-foundation merge in flight**. #19394 (sibling-on-main of the chain anchor #19395) was **2m12s away from being merged by bolinfest himself** at the moment the chain was bootstrapped. The bootstrap is not opportunistic post-merge layering — it is **pre-merge layering**, executed while the foundation sibling is still technically-open but author-known-to-be-imminent.

This implies an **author-private merge plan** with at least three timed steps: (1) at 00:40:18Z open the new 4-tier stack on the unmerged anchor; (2) at 00:43:33Z merge the sibling foundation; (3) future: cascade-merge the stack. Steps (1) and (2) are **interleaved across two PR-trees**: the stack birth happens on the #19395 tree while the merge happens on the #19394 tree. Synth #180/#183/#185 all operated on a **single tree at a time**; this is the **first observed dual-tree interleaved act** in W17.

## Pattern statement (P189)

In codex, a maintainer with author-disposal authority (synth #185 vintage) **and** chained-base-stack tooling (synth #180 vintage) **and** sibling-foundation-merge timing control (this episode) can collapse a multi-step refactor plan into a **single-window dual-tree interleaved act**: open-N-tier-chain-on-unmerged-sibling **then** merge-foundation-sibling, where the inter-act gap is **sub-5-minutes** and the chain-open span is **sub-5-seconds**. The act compresses what would otherwise be a multi-day landed-cascade into a 3-second visible artifact + a single mid-flight merge.

## Falsifiable predictions

- **P189a:** Within 12h, the 4-tier chain will land **bottom-up** (#19395 → #19734 → #19735 → #19736 → #19737), with **inter-merge gaps ≤30m** (matching the synth #180 bolinfest stack-cascade-merge timing band). Prediction confidence ~0.55. Falsified if any tier closes-without-merge or if any inter-merge gap exceeds 2h.
- **P189b:** No other W17 author replicates **dual-tree interleaved act** (chained-base bootstrap + sibling-tree merge within sub-5m) in the next 48h. Prediction tests whether this is a **bolinfest-individual capability** (his tooling/authority) vs a **codex-repo cultural norm** (any maintainer would do it). Falsified if pakrym-oai or aibrahim-oai or any non-bolinfest codex maintainer is observed performing the same dual-tree interleaved shape.
- **P189c:** The chained-base **birth-by-burst** topology is **not observed outside codex** in W17. The candidate repos with non-trivial stack tooling (sst/opencode, litellm via integration branches per synth #175) do not produce a same-author 3+-tier chained-base burst within sub-10s in the remainder of W17. Falsified by any 3-tier+ chained-base same-author sub-10s burst in any non-codex W17-tracked repo.
- **P189d:** When the cascade lands, the **sibling-foundation merge time (#19394 at 00:43:33Z) plus chain-open burst start (#19734 at 00:40:18Z)** define a **3m15s "act-width" envelope** that the cascade-merge inter-merge gaps will respect — i.e., the median inter-merge gap of #19395 → #19737 will be ≤3m15s (the act-width itself becomes the rhythm constant for the resolution). Tests whether the burst rhythm propagates to the merge rhythm.

## Falsification of any prior W17 synth?

- **Synth #92 (same-second 4-PR disjoint-surface burst as the maximal same-author open burst):** weakened — synth #92 implicitly held the **disjoint-surface flat topology** as the natural shape of a 4-PR same-instant burst. #189 demonstrates an equally-tight (3s) burst with a **strictly tighter topological coupling** (chained-base depth-4 on a single unmerged base on a single semantic surface). The 4-PR-burst-cardinality is no longer a topology-classifier on its own; **topology must be reported alongside cardinality**.
- **Synth #185 P185c (stack-collapse-by-author is the disposal mode for chained-base architecture refactors):** preserved — but augmented with a **dual** (birth-by-burst). Stack-collapse-by-author and stack-bootstrap-by-burst are now established as **paired lifecycle endpoints** for codex chained-base PRs, not just a one-sided disposal mode.

## What this opens

- A **chained-base lifecycle taxonomy** for codex (and any repo with similar stack tooling): birth-by-burst (#189), maintenance-by-rebase (#180), cross-author handoff (#183), disposal-by-mass-close (#185). All four endpoints now have W17 evidence.
- A **dual-tree interleaved-act** axis: the next observation should target **whether a maintainer can interleave act on N≥3 trees** simultaneously (not just 2 as here), which would imply even tighter author-private merge planning.
- An **act-width = chain-open-burst-start to sibling-foundation-merge** metric (3m15s here) that may compress further if the same author repeats the pattern with practice.
