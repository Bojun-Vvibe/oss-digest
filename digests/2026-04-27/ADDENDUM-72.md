# 2026-04-27 ADDENDUM-72

**Window:** 2026-04-26T23:25:00Z → 2026-04-27T00:44:00Z (1h19m — first time the addendum window has crossed 60m since Add.62; explicit widening to capture the bolinfest #19394 merge at 00:43:33Z and the immediately preceding 4-PR chained-base open burst at 00:40:18–21Z, which together form a single causal episode that would have been bisected by a sub-40m window).

## openai/codex — bolinfest 4-PR chained-base stack-bootstrap (#19734/#19735/#19736/#19737) opens in 3 seconds at 00:40:18–21Z, **2m12s before** sibling-base #19394 merges at 00:43:33Z

The dominant event of the window. Sequence:

| PR | createdAt | baseRefName | Title |
|---|---|---|---|
| #19734 | 2026-04-27T00:40:18Z | `pr19395` | `permissions: centralize legacy sandbox projection` |
| #19735 | 2026-04-27T00:40:18Z | `pr19734` | `permissions: store only constrained permission profiles` |
| #19736 | 2026-04-27T00:40:20Z | `pr19735` | `permissions: constrain requirements as profiles` |
| #19737 | 2026-04-27T00:40:21Z | `pr19736` | `permissions: derive legacy exec policies at boundaries` |

Inter-open gaps: **0s, 2s, 1s** — total span 3 seconds, 4 PRs. All four are `pr<N>`-based (chained-base topology), forming the chain `main ← #19395 (open since 2026-04-24T16:02:58Z) ← #19734 ← #19735 ← #19736 ← #19737`. Then **2m12s after the chain bottom (#19737) opens, the chain's grand-foundation #19394** (`permissions: remove core legacy policy round trips`, opened 2026-04-24T16:02:56Z, base `main`, sibling-on-main of #19395) **MERGED at 00:43:33Z** (mergeCommit `2cb8746457d7c9e57c3cc42fecf05996453ca43d`, merged by bolinfest himself; lifespan 2d8h40m37s).

Topology summary: at the close of the window, bolinfest holds **5 open `permissions:`-prefixed PRs** (#19395 + #19734–#19737) **plus** has just self-merged the 6th (#19394). The chained-base 4-PR open burst is **stack-bootstrap-during-foundation-flight**: the new stack tier (#19734…#19737) was opened **before** the foundation sibling (#19394) crossed the merge threshold, despite the author being the same person who would push that merge button 2m12s later. This inverts the synth #180/#183 stack-collapse-by-merge ordering (where stack tiers are landed bottom-up after the foundation merges) and is also distinct from synth #185's stack-collapse-by-author (where 8 chained-base PRs were mass-closed by the author as a disposal act). Here the foundation lands while the new stack already exists above an unmerged sibling.

Cross-cutting note: bolinfest's `pr19395` base for #19734 means **#19395 is now load-bearing for a 4-deep stack while still open** (8d2h since #19395's open, no merge). #19395 is now the most heavily-stacked-upon unmerged PR observed in W17 (prior W17 max was the synth #180 bolinfest triple at depth 3).

## openai/codex — andmis 1-of-1 detached open #19733 at 00:30:47Z, andmis #19605 self-merge at 00:18:10Z (lifespan 1d1h28m15s)

- **#19605** `Delete unused ResponseItem::Message.end_turn` by **andmis** — **MERGED 2026-04-27T00:18:10Z**, lifespan **1d1h28m15s** from 2026-04-25T22:49:55Z. A 25-hour-class same-author self-merge — well outside both the bolinfest sub-30m window and the synth #184 BAMN per-PR-gate-latency 22h regime. New W17 codex-merge lifespan datum in the 24–30h band.
- **#19733** `Allow agents.max_threads to work with multi_agent_v2` by **andmis** — opened 2026-04-27T00:30:47Z, OPEN, base `main`. Detached single-PR open **12m37s after** andmis's #19605 merge → **same-author M-then-O coupling at 12m37s gap** on disjoint surfaces (delete-dead-code → multi-agent-thread-config). Reversed temporal direction of the synth #182 meowgorithm O-then-M precursor pattern (24s) and synth #178/#188 cross-author content-dependency open. New W17 single-author M→O coupling shape with a ~12m gap.

The combined 12m37s + 9m31s + 3s sequence (andmis-merge → andmis-open → bolinfest-stack-burst) consumes 22m11s out of the 1h19m window.

## QwenLM/qwen-code — B-A-M-N opens **6th-of-W17** PR #3654 at 00:09:56Z (48m03s after #3653); DragonnZhang #3593 MERGED at 00:29:51Z (lifespan 2d15h00m48s)

- **#3654** `refactor: unify tool execution logic across Interactive, Non-Interactive, and ACP modes` by **B-A-M-N** — createdAt **2026-04-27T00:09:56Z**, OPEN, base `main`. **6th W17 PR** for B-A-M-N; gap from #3653 (Add.71 §3) is **48m03s**. The two refactor-prefixed back-to-back opens at sub-1h gap on disjoint targets (config-env-dedup → tool-execution-unification) extend the synth #184 per-PR-gate-latency framing: B-A-M-N is now **opening at sub-1h cadence** while the original 4 dormant PRs (#3631/#3645/#3648 plus the now-superseded set) remain unmerged. **P71c provisionally surviving** (no wake of dormant 3 in 48m), but the per-PR-gate-latency interpretation is being stress-tested by accumulating PR-count.
- **#3593** `feat(cli): Add argument-hint support for slash commands` by **DragonnZhang** — **MERGED 2026-04-27T00:29:51Z**, lifespan **2d15h00m48s** from 2026-04-24T09:29:03Z. Cross-author (non-B-A-M-N) merge while B-A-M-N's stack stays dormant — confirms qwen-code merge throughput is not gated globally, only on B-A-M-N's PRs (synth #184 per-PR-gate-latency framing strengthens, author-dormancy framing further weakens).

## charmbracelet/crush — meowgorithm 2-PR same-subsystem flat doublet (#2724/#2725) at 3m43s gap, both `fix(ui):` notifications

- **#2724** `fix(ui): restore 'update available' notification` — opened 2026-04-27T00:16:55Z by **meowgorithm**, base `main`, OPEN.
- **#2725** `fix(ui): notification width and text truncation` — opened 2026-04-27T00:20:38Z by meowgorithm, base `main`, OPEN.

Inter-open gap **3m43s**, both targeting the **notification subsystem** of the crush UI, both `fix(ui):` prefixed, both OPEN at window close. First meowgorithm multi-PR open burst since the synth #182 24s O-precursor-of-M coupling — but this is **O+O flat doublet** (no merge) on the **same subsystem**, not the synth #182 O+M cross-surface coupling. See synth #190.

## BerriAI/litellm — github-actions[bot] 2-PR aged cross-author stale-prune at 00:11:49Z + 00:11:51Z

- **#19333** (Leo-Adrian-Code, opened 2026-01-19T09:12:54Z, `chore: map Vertex IMAGE_PROHIBITED_CONTENT to content_filter`) — **CLOSED 2026-04-27T00:11:49Z** by github-actions[bot] without merge. Lifespan-at-close: **97d14h58m55s**.
- **#19264** (nehaaprasad, opened 2026-01-17T03:29:40Z, `fix: Model Management UI: Filter non-providers and non-functional`) — **CLOSED 2026-04-27T00:11:51Z** by github-actions[bot] without merge. Lifespan-at-close: **99d20h42m11s**.

A **2-second cross-author stale-bot close pair on Jan-2026-aged human PRs**, the first observed in W17. Distinct from synth #98 (3-PR sub-10s aikido bot mass-close on heterogeneous **dependency-bump** PRs in cline) on three axes: (a) actor is `github-actions[bot]` not aikido-autofix, (b) targets are **content/feature** PRs from external human contributors not auto-generated dep bumps, (c) cardinality is 2 not 3. Lifespans-at-close (97d/99d) define a new W17 stale-prune lifespan band ~3.2 months, ~14× the prior W17 close-without-merge lifespan max.

## block/goose — gatof81 #9996 CLOSED-without-merge at 00:15:48Z (lifespan 31d2h17m31s)

- **#9996** `fix: update broken Getting Started link (for-new-coders → quick-start)` by gatof81 — **CLOSED 2026-04-27T00:15:48Z** without merge. Aged 31 days. Single-author single-PR aged close, no replacement opened. Block/goose's only window-event; the fresh3nough 3-PR cluster from Add.71 §4 shows **no further activity** in this window (clock for synth #178 cross-repo BAMN-mode signature on goose continues to run idle).

## sst/opencode, cline/cline — quiet

- **sst/opencode:** zero opens, merges, or closes in window. Add.71's alfredocristofano 3-PR triplet (#24541/#24543/#24544) all remain OPEN; **P71a clock at 1h47m of 6h** with zero merges and zero replacements → **mode (i) ship-now and mode (ii) self-supersession both currently silent**. The triplet is in a no-op holding pattern.
- **cline:** zero events. The aikido-autofix #10425 from Add.71/synth #186 had no further updates in window → P186a's "next aikido self-supersession" clock continues, currently at 1h58m elapsed since #10425 open with no operator activity.

## Cross-repo aggregate (Add.72 window 1h19m, 23:25:00Z → 00:44:00Z)

- **8 strict-new-opens:** codex #19733 (andmis), #19734/#19735/#19736/#19737 (bolinfest, 3-second chained-base 4-burst); qwen-code #3654 (B-A-M-N); crush #2724/#2725 (meowgorithm). Open-rate **6.1/h**, **−27%** vs Add.71's 8.3/h. **5-of-8 opens by bolinfest** (62.5% single-author dominance — exceeds Add.71's 60% alfredocristofano dominance and is the highest single-author dominance ratio recorded since Add.65).
- **3 merges:** codex #19394 (bolinfest, 2d8h40m), #19605 (andmis, 1d1h28m); qwen-code #3593 (DragonnZhang, 2d15h00m). All 3 merges are **24h+ lifespan** — first all-≥24h-lifespan merge cohort in any addendum since Add.58. Sharp regime shift from Add.71's all-sub-1h-lifespan codex merge cohort.
- **3 closes-without-merge:** litellm #19333 + #19264 (github-actions[bot] 2s pair, 97d/99d aged); goose #9996 (gatof81-self/maintainer, 31d aged). **Mean close-age 76 days** vs Add.71's zero closes — first heavy-aged-prune addendum of W17.
- **Notable couplings:** (a) bolinfest 4-PR chained-base 3-second open burst that **brackets** sibling foundation #19394's merge (open burst at 00:40:21Z, foundation merges 3m12s later) — distinct from prior W17 stack patterns (synth #180/#183/#185); (b) andmis self M→O at 12m37s gap (new W17 same-author M→O datum); (c) meowgorithm same-subsystem `fix(ui):` flat doublet at 3m43s (new W17 same-subsystem doublet shape); (d) cross-repo dominance asymmetry — bolinfest 5 opens on codex while three other repos (sst/opencode, cline, sub-bursts elsewhere) are silent → **single-author single-repo concentration** rather than the synth #91 single-author single-repo metronome (which was n=3 at evenly-spaced gaps — this is n=5 at 0/2/1s + 22m sibling-merge orchestration).

## Predictions emitted

- **P72a:** bolinfest's 4-PR chained-base stack (#19734–#19737) on top of #19395 will resolve in one of three modes within 12h: (i) **bottom-up cascade-merge** — #19395 merges first (next, given #19394 just landed), then #19734…#19737 land in order at sub-30m gaps each → matches synth #180 stack-MRM-triple pattern but on depth-5 not depth-3; (ii) **squash-and-collapse** — #19395 alone merges, the 4-PR stack is closed and replaced by a single squashed PR → matches synth #185's stack-collapse-by-author pattern but voluntary not abandoned; (iii) **stall** — #19395 stays open ≥12h, the 4-PR stack ages with it. Mode (i) probability ~0.55 given bolinfest just executed a clean #19394 merge during the window; mode (ii) ~0.25; mode (iii) ~0.20.
- **P72b:** meowgorithm crush doublet #2724/#2725 will resolve as **same-second-or-sub-30s self-merge pair** within 4h (matches the synth #182 crush meowgorithm M+O 24s coupling timescale), with **#2725 merging first** (the topical refinement landing before the restore — inverted creation order) — prediction tests whether same-subsystem flat doublets merge in **content-dependency order rather than creation order**, a refinement of synth #188's merge-order-inversion observation extended from cross-author to same-author same-subsystem.
- **P72c:** B-A-M-N #3654 will be the **last B-A-M-N open within 4h** (cooldown after 6 PRs in W17) AND the original 3 dormant qwen-code B-A-M-N PRs (#3631/#3645/#3648) will remain unmerged ≥24h further — sharpening the synth #184 per-PR-gate-latency frame to a **per-PR-merge-gate-latency that is independent of author open-cadence**, i.e., the author can keep opening but the merge-gate stays stuck regardless of stack-pressure.
- **P72d:** the litellm github-actions[bot] 2-PR aged-prune at 00:11:49–51Z is the **first wave of a multi-day stale sweep**; expect ≥5 additional litellm bot-closes on Jan-2026-aged PRs within next 24h (testing whether this is a one-shot manual `/close-stale` invocation vs an automated cron sweep with batch caps).
