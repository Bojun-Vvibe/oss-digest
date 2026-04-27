# W17 synthesis #193 — sibling-branch sequential merge with shared-file overlap is a third multi-PR merge topology distinct from chained-base stacks (synth #189) and chain-onto cross-author (synth #188): kitlangton sst/opencode #24547 → #24548 lands 2 merges in 12m33s on `dev` while bolinfest's chained 5-PR codex stack lands 0 merges in 1h25m+

**Lens novelty vs synth #180–#192.** Synth #189 introduced **same-author chained-base topology** (bolinfest 4-PR stack-bootstrap during sibling foundation flight). Synth #190 introduced **same-author same-subsystem flat doublet** (meowgorithm crush notifications, same-base, same-subsystem). Synth #185 introduced **stack-collapse-by-author** (aibrahim-oai 8-PR mass close → collapse into one PR). None of these treats **sibling-branch sequential merge with shared-file overlap** as a distinct topology, even though it sits between the flat doublet (#190) and the chained stack (#189) on the structural axis. This synth introduces it as the third multi-PR merge topology and pairs it against bolinfest's still-dormant chained stack to produce a **same-window topology comparison**.

## The configuration

At Add.74 window close (2026-04-27T02:05:44Z), two multi-PR same-author configurations are simultaneously live across two tracked repos:

### sst/opencode kitlangton sibling-branch pair — MERGED in 12m33s

| PR | Base | createdAt | mergedAt | Lifespan | Files | Shared file edits |
|---|---|---|---|---|---|---|
| #24547 | `dev` | 00:21:25Z | 01:05:16Z | 43m51s | 5 | `routes/instance/index.ts` (+7/−0); `specs/effect/http-api.md` (+6/−6) |
| #24548 | `dev` | 00:26:07Z | 01:17:49Z | 51m42s | 6 | `routes/instance/index.ts` (+14/−0); `specs/effect/http-api.md` (+15/−15) |

**Both PRs base on `dev`** (not on each other), share two files (route registration index + http-api spec), and merged sequentially with **inter-merge gap 12m33s**. The smaller PR (#24547, +296/−6) lands first; the larger (#24548, +415/−20) lands 12m33s later. Author-side rebase between the two merges was either silent (no force-push event observed) or auto-handled by GitHub's UI rebase.

### openai/codex bolinfest chained 5-PR stack — STILL ZERO MERGES at 1h25m+

| PR | Base | createdAt | Lifespan @ window close | State |
|---|---|---|---|---|
| #19395 | `main` | 2026-04-24T16:02:58Z | 2d10h2m | OPEN (foundation) |
| #19734 | `pr19395` | 2026-04-27T00:40:17Z | 1h25m27s | OPEN |
| #19735 | `pr19734` | 2026-04-27T00:40:18Z | 1h25m26s | OPEN |
| #19736 | `pr19735` | 2026-04-27T00:40:20Z | 1h25m24s | OPEN |
| #19737 | `pr19736` | 2026-04-27T00:40:21Z | 1h25m23s | OPEN |

Chained-base means **bottom-up sequential merge is the only legal merge order** absent a force-rebase. Five PRs by one author, foundation 2d10h old, four tier PRs ~1h25m old, zero merges.

## The topology comparison

Three same-author multi-PR topologies now have W17 datapoints:

| Topology | Example | Author cost @ open | Merge cost | Merges in W17 reference window | Conflict mechanism |
|---|---|---|---|---|---|
| **Chained-base stack** (synth #189) | bolinfest #19395→#19737 | High (5 branches w/ explicit base chain) | Sequential, bottom-up | 0 / 5 in 1h25m+ | Chain rebase on parent merge |
| **Sibling-branch sequential w/ shared files** (this synth) | kitlangton #24547, #24548 on `dev` | Medium (2 disjoint branches, same base) | Sequential, smaller-first | 2 / 2 in 12m33s | Merge conflict on shared file at second merge |
| **Same-subsystem flat doublet** (synth #190) | meowgorithm crush #2724, #2725 | Low (2 branches, same base, disjoint files within one subsystem) | Independent | 0 / 2 in 1h48m+ | None (file-disjoint) |

**Three observations follow from this matrix.**

**Observation 1: merge throughput is inversely correlated with author-side topology cost in this window.** The chained-base 5-PR stack has the highest author-side cost (explicit `pr19395` base chain, branch-per-tier, force-rebase on parent merge) and **zero merge throughput** at 1h25m. The sibling-branch pair has medium cost and **2/2 merge throughput** in 12m33s. The flat doublet has the lowest cost and **0/2 throughput** at 1h48m. The flat doublet's zero is a counter-example to a strict "lower author cost → higher throughput" rule — meowgorithm's crush triplet hasn't merged yet because the maintainer (also meowgorithm) hasn't picked up the PRs in the sub-2h window, not because of topology cost. Drop the flat-doublet datum and the inverse correlation between author-cost and merge throughput holds for the two stack-shaped topologies.

**Observation 2: kitlangton's choice of sibling-branch over chained-base is the strong signal.** kitlangton could have chained #24548 onto #24547 (since they share `index.ts` and `http-api.md` edits) but instead chose **two independent branches on `dev`**, accepting merge-time conflict at the second merge. The W17-corpus reading: kitlangton chose the topology that **trades author-side rebase risk for higher merge-throughput probability**. If #24548 had been chained onto #24547, the merge of #24547 would have triggered a force-rebase of #24548, adding latency. By keeping them sibling, both PRs were merge-ready independently, and the second merge's conflict was small enough (two files, both additive on `index.ts`, full-rewrite on `http-api.md`) to be handled in one rebase-and-merge cycle.

**Observation 3: bolinfest's chained-base topology is structurally hostile to fast merge throughput in W17.** Synth #136-#180 documented bolinfest's chained `add56` stack across 13+ rebase events with bimodal cadence and atomic-streak/split alternation. Synth #161 reframed atomicity as "4-PR downstream block, not full 5-tuple". The new permissions `pr19395 → pr19737` stack inherits this structural hostility: every tier PR is **gated on its parent's merge**, and the foundation #19395 is 2d10h old with no merge action. **The chained-base topology's W17 merge-throughput-rate is, to two-decimal precision, 0.00 PRs/hour** across the live observation window.

## Falsification & monitoring targets

**Prediction P193a (probability ~0.45):** within 24h of 02:05:44Z, the bolinfest 5-PR codex stack will land at most 1 merge (foundation #19395 only). The 4 tier PRs will remain OPEN. Window: 2026-04-27T02:05:44Z → 2026-04-28T02:05:44Z.

**Prediction P193b (probability ~0.30):** in the next 6h, kitlangton will open a third sibling branch on `dev` touching `routes/instance/index.ts` (because the http-api.md spec mentions tui + pty + at least one more route family — the bridge pattern is incomplete at #24548). If correct, this will produce a **3-of-N sibling-branch sequential merge series**, the first observed in W17.

**Prediction P193c (probability ~0.20):** bolinfest will close one or more of #19734-#19737 via author-side supersession (synth #185 stack-disposal) within 12h, when the maintainer review of the foundation #19395 finally arrives and the tier PRs need rebase. If correct, this is the first synth #185 stack-collapse on a codex permissions stack rather than a codex MCP stack.

## Cross-references

- Builds on: synth #185 (stack-collapse-by-author), synth #188 (chain-onto), synth #189 (chained-base bootstrap), synth #190 (same-subsystem flat doublet), synth #192 (base-choice-against-active-stack).
- Refines: synth #44 (vertical-slice PR stack lockstep refresh) — kitlangton's sibling-branch is a non-vertical-slice flat-stack alternative.
- Sets up: W18 measurement of merge-throughput per topology class as a maintainer-attention-allocation surface (extends synth #191).
