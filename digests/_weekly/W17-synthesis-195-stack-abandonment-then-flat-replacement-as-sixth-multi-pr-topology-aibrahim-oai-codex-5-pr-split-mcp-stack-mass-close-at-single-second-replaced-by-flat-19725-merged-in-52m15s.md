# W17 synthesis #195 — stack-abandonment-then-flat-replacement as a sixth multi-PR topology: aibrahim-oai openai/codex 5-PR chained `split-mcp-*` stack mass-closes at single 22:31:25Z second and is replaced by flat #19725 (base `main`, +2020/−1878 on 11 files) merged in 52m15s with mergeCommit `0bda8161a2d897ddefe675298cfe24a4854b6c4e`, inverting bolinfest's chained 5-PR `permissions:` stack which remains 0/5 merged at 1h53m43s

**Lens novelty vs synth #180–#194.** The W17 corpus to date catalogues five distinct multi-PR same-author topologies:
- **doublet** (synth #190 — meowgorithm crush #2715/#2718, same-author same-subsystem flat 2-PR shape)
- **triplet** (synth #194 — meowgorithm crush #2724/#2725/#2726, doublet→docs-pivot 3-PR shape)
- **sibling-branch sequential merge with shared-file overlap** (synth #193 — kitlangton sst/opencode #24547/#24548, two `dev`-base sibling PRs sharing two files, sequentially merged)
- **chained stack `pr_n → pr_(n+1)` ladder** (synth #188 — bolinfest openai/codex `permissions:` 5-deep stack)
- **four-PR same-second open-tuplet on disjoint surfaces** (synth #92 — single-author 4-PR open at one UTC second on disjoint surfaces)

This synth introduces **stack-abandonment-then-flat-replacement** as a categorically distinct sixth topology, with the discriminating feature being that the multi-PR shape is **deliberately collapsed** by the author into a single flat PR before any tier of the stack merges. None of synth #180–#194 covers the case where a chained stack is **mass-closed at a single second** as a coordinated abandonment gesture and the same code substance is **immediately replaced** by a flat single-PR submission that **does merge**.

## The configuration

openai/codex, 2026-04-26, all timestamps UTC:

The aibrahim-oai chained 5-PR `split-mcp-*` stack:

| PR | Title | head→base | createdAt | closedAt | State | Diff |
|---|---|---|---|---|---|---|
| #19718 | `Extract MCP Codex Apps support` | `split-mcp-elicitation` → `split-mcp-apps` | 22:11:58Z | 22:31:25Z | CLOSED | +274/−272 on 7 files |
| #19721 | `Extract MCP tool helpers` | `split-mcp-apps` → `split-mcp-tools` | 22:15:43Z | 22:31:25Z | CLOSED | +180/−181 on 7 files |
| #19722 | `Move single-use MCP helpers` | `split-mcp-tools` → `split-mcp-single-use-helpers` | 22:17:53Z | 22:31:25Z | CLOSED | +126/−147 on 4 files |
| #19723 | `Move MCP client constants` | `split-mcp-single-use-helpers` → `split-mcp-client-constants` | 22:20:34Z | 22:31:25Z | CLOSED | +8/−15 on 4 files |
| #19724 | `Rename MCP runtime module` | `split-mcp-runtime` → `split-mcp-client-constants` | 22:22:57Z | 22:31:25Z | CLOSED | +10/−10 on 6 files |

Stack open span: **#19718 22:11:58Z → #19724 22:22:57Z = 10m59s** (5 PRs in 10m59s, mean inter-open gap 2m44s).

Flat replacement and mass-close (interleaved at the same minute):

| Event | PR | Action | Time |
|---|---|---|---|
| Replacement open | #19725 `Split MCP connection modules` (base `main`, +2020/−1878 on 11 files) | OPEN | 22:31:19Z |
| Stack mass-close | #19718, #19721, #19722, #19723, #19724 | CLOSED (all five) | 22:31:25Z |
| Replacement merge | #19725 mergeCommit `0bda8161a2d897ddefe675298cfe24a4854b6c4e` | MERGED | 23:23:34Z |

**Replacement-stages-before-mass-close gap: 6 seconds** (#19725 created 22:31:19Z, the five close at 22:31:25Z). This 6-second ordering is a fingerprint: the author opens the flat replacement, **then** scripts/clicks the close on the five tiers — a "wait-for-replacement-to-be-staged-before-burning-the-stack" gesture. The single 22:31:25Z UTC-second mass-close on five chained PRs is mechanically consistent with `gh pr close 19718 19721 19722 19723 19724` or branch-deletion cascades, not five independent manual closes.

**Replacement merge lifespan: 52m15s** (#19725 22:31:19Z → 23:23:34Z), mergeCommit `0bda8161a2d897ddefe675298cfe24a4854b6c4e`.

## Diff arithmetic — does the flat PR conserve the stack's substance?

Stack total churn (5 PRs): +274+180+126+8+10 = **+598** lines added, −272−181−147−15−10 = **−625** lines deleted = **1223 churn**.

Flat PR #19725: **+2020 / −1878 = 3898 churn**.

The flat PR carries **3.19× the total churn** of the stack. This is consistent with the flat PR including the rebase/conflict-merge work that the stack's tiers were meant to amortize across reviews — the stack was decomposing the change for reviewability, the flat PR collapses the decomposition. The author trades reviewability for merge-velocity: 5 review surfaces → 1 review surface, and that 1 review surface ships in 52m15s self-merge.

File-count compression: stack touched (deduped) ≤7+7+4+4+6 = 28 file-touches but actual unique file count is bounded above by the 11 files the flat PR touches (stack files are necessarily a subset of the flat PR's files since they're the same logical change). The flat PR's 11-file footprint is the **true unique-file cardinality** of the change; the stack was distributing those 11 files across 5 tiers with significant repetition (each tier touched 4–7 files, sum 28, against the actual 11 — i.e., ~2.5× repetition factor across stack tiers, consistent with stacked PRs sharing infrastructural file edits).

## Discrimination from prior multi-PR topologies

**Discrimination from synth #188's chained-stack topology.** Synth #188 covers bolinfest's `permissions:` 5-deep `pr19395 → pr19734 → pr19735 → pr19736 → pr19737` stack as an open shape. Synth #195's stack starts with the **same shape** (chained `split-mcp-*` ladder) but **terminates differently**: bolinfest's stack remains open and 0/5 merged at 1h53m43s; aibrahim-oai's stack is mass-closed at 19m27s after first-tier open and never has any tier merged. The closure decision plus same-second mass-close gesture is the discriminating event.

**Discrimination from synth #98's bot-driven mass-close sweep.** Synth #98 covers a bot-driven sub-10s n=3 mass-close sweep across heterogeneous dependency surfaces. Synth #195's mass-close is **same-author non-bot** and on a **homogeneous chained stack** rather than heterogeneous independent PRs. The mechanism is shared (single-second mass-close) but the actor type and the structural relationship of the closed PRs differ.

**Discrimination from synth #193's sibling-branch sequential merge.** Synth #193 covers kitlangton's two `dev`-base sibling PRs that both merge. Synth #195 covers a 5-PR chained stack where **none merge** and a flat replacement does. The shapes are not on the same axis — sibling-branch sequential is a **2-PR succeeded** shape; stack-abandonment is a **5-PR aborted + 1-PR succeeded** shape.

**Cross-author contrast in single W17 window.** Both aibrahim-oai #19718–#19724 (chained stack abandoned) and bolinfest #19395/#19734/#19735/#19736/#19737 (chained stack still open and 0/5 merged) are **5-deep chained stacks on the same repo (openai/codex) within the same calendar day** with **opposite resolutions**. aibrahim-oai chose abandon-and-flatten at 19m27s into the stack's life; bolinfest is at 1h53m43s on his and showing no signs of abandoning. This is a within-repo within-day **author-temperament discriminator** on identical-topology PRs. The merge-velocity trade-off is explicit: aibrahim-oai got the change shipped in 52m15s by collapsing review surfaces; bolinfest's stack-decomposition has produced 0 merges in 1h53m43s.

## Predictions tied to synth #195

- **P195a (probability ~0.45):** if bolinfest's `permissions:` 5-deep stack remains 0/5 merged at +6h from 00:40:17Z (i.e., past 06:40:17Z), the stack-abandonment-then-flat-replacement topology becomes available as an outcome and the conditional probability of bolinfest collapsing his stack into a flat replacement PR within the following 24h rises to ~0.30. Falsified if any tier of the bolinfest stack merges in the +6h window.
- **P195b (probability ~0.25):** another chained-stack-abandonment event will occur within W17 in one of {opencode, codex, crush, qwen-code, litellm, goose, cline} — i.e., this topology will be observed at least one more time before W17 closes. Falsified if W17 closes with only the aibrahim-oai instance on the books.

## What this synth changes for downstream tracking

- The multi-PR-topology taxonomy now has 6 entries (doublet, triplet, sibling-branch, chained-stack-open, four-PR-same-second open, stack-abandonment-then-flat-replacement). Future addenda should classify multi-PR shapes against this 6-entry taxonomy.
- Mass-close-at-single-second is a **non-bot signal** when the closed PRs are a chained stack from the same author — distinguishing from the synth #98 bot-driven heterogeneous sweep.
- The 6-second replacement-stages-before-mass-close gap is a candidate fingerprint for scripted vs UI-driven stack abandonment; subsequent observations should record this gap to see if it clusters at single-digit seconds (scripted) vs minutes (UI clicks).
