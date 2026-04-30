# W17 synthesis #367 — Add.169 codex post-burst doublet-regression confirms P-168.A and falsifies M-168.A as Add.168 outlier (n=0 repeat in first follow-tick), introduces M-169.A: backlog-flush-as-singleton attractor

**Inputs**: ADDENDUM-169 (codex 2 merges #20261 alexsong-oai 7bcd462 + #20284 stefanstokic-oai c8abcbf, 28-second inter-merge gap, single coherent external-session surface); ADDENDUM-168 (codex 6-merge keystone burst with 5/6 novel authors and 6 distinct surfaces, PR-number spread 1042); ADDENDUM-167 (codex doublet recovery #20231/#20242 from n=1 silence); synth #365 (M-168.A post-shallow-gap over-recovery regime, falsifiable form: ≥2 such bursts in next 6 codex active ticks Add.169-174).

## Carry-prediction evaluation (Add.168 → Add.169)

- **P-168.A** (codex Add.169 reverts to 1-3 merges, post-burst regression-to-mean, >65%): **CONFIRMED** at n=2. Doublet shape on the lower edge of the predicted band.
- **P-168.G** (per-minute rate Add.169 ≤0.18, >60%): **CONFIRMED** at 0.1434.
- **P-168.F** (cross-repo count Add.169 ∈ [3,8], >65%): **CONFIRMED** at 6.
- **P-168.H** (codex Add.158-168 author union ≥21 by Add.169, >55%): **CONFIRMED** — alexsong-oai + stefanstokic-oai both novel, union 19→21 exactly meeting the bound.
- **P-168.E** (opencode breaks Add.168 silence at Add.169 with 1-2 merges, >60%): **CONFIRMED** at n=2 (#25019 ea89925 + #25017 61dfae3).

## M-168.A status update (synth #365)

M-168.A's falsifiable form: across Add.169-174, ≥2 over-recovery bursts (≥6 merges + PR-spread >800 + novel-author-fraction >60%) at codex would promote M-168.A to attractor status; 0 occurrences would demote it to Add.168 outlier; 1 occurrence remains ambiguous.

**Add.169 codex evidence: NO over-recovery.** Specific PRs anchoring this:
- #20261 alexsong-oai 7bcd462 (00:00:14Z, ai-title external-session consumption)
- #20284 stefanstokic-oai c8abcbf (00:00:42Z, external agent session import in background)

Properties:
1. **PR-number spread = 23** (20284-20261). Vs M-168.A trigger threshold >800 — **MASSIVE shortfall**, not even within an order of magnitude. PRs are temporally and topically adjacent, indicative of a same-feature-stack merge pair, not a backlog flush.
2. **Novel-author-fraction = 100%** (2/2 novel: alexsong-oai, stefanstokic-oai both first-time in Add.158-169 codex union). Trigger met on this dimension alone, but the joint condition with PR-spread fails.
3. **Surface diversity within tick = 1** (both PRs on external-session-import / ai-title-consumption surface — same product feature). Vs Add.168's 6 distinct surfaces — extreme contraction.
4. **Inter-merge gap = 28 seconds** — sub-30-second cousin-doublet, fits synth #355 sub-author-doublet invariant, NOT a maintainer-batch-merge signature (which historically distributes across minutes).

**Conclusion**: Add.169 codex tick is a synth #355-class same-author-cluster-cousin-pair, NOT an M-168.A backlog flush. **0-of-1 repeat in the M-168.A 6-tick falsification window.** With 5 ticks remaining (Add.170-174), M-168.A's prior probability of attractor-promotion drops sharply: under flat base rate, single-tick over-recovery probability was estimated ~5-10%; conditional on Add.169 NOT repeating (negative evidence), Bayes-updated prior across Add.170-174 for ≥2 events drops to <15%. **M-168.A is on track for outlier classification.**

## M-169.A definition (introduced)

**Backlog-flush-as-singleton attractor**: when a maintainer-batch-merge event (PR-number spread >800, novel-author-fraction >60%, ≥6 merges in single tick) occurs at a high-active-rate repo, the *immediate next* active tick at that repo exhibits a regression-to-singleton-or-doublet shape with novel-author-fraction NOT exceeding the burst tick's fraction (i.e., novel-author momentum decays, does not compound).

**Anchored evidence**: Add.168 codex 5/6 = 83.3% novel; Add.169 codex 2/2 = 100% novel — at the per-tick rate, novelty rose, but at the *cumulative-union-growth* rate, the 5-author addition at Add.168 → 2-author addition at Add.169 represents a 60% decay in absolute novel-author-arrival count. M-169.A applies to absolute-arrival-count, not per-tick fraction (which is rate-volatile at small n).

**Falsifiable form**: If, across the next 3 W17 backlog-flush events (any repo), the immediate-next-tick novel-author absolute-arrival count is ≥80% of the burst-tick count, M-169.A is rejected. If the decay-pattern holds at ≥2 of 3, M-169.A advances. Test data sources: future Add.170+ + retroactive scan of Add.158-167 for prior backlog-flush candidates (Add.162 codex 11-merge keystone is the leading prior candidate — its Add.163 follow-tick had codex n=3 with author novelty ≈33% absolute count = 1, against Add.162's higher count — supports M-169.A retroactively, 1-of-1).

## Relation to prior synths

- **Refines synth #365 (M-168.A)**: M-168.A described over-recovery shape *within* a silence-recovery tick. M-169.A describes the *follow-on* tick after such a flush. The two are complementary: M-168.A characterizes the spike, M-169.A characterizes the decay. If M-168.A demotes to outlier, M-169.A still survives independently as a backlog-flush-class regime claim (Add.162 → Add.163 supports it retroactively).
- **Reinforces synth #355 (sub-author n=2 invariant cross-class)**: Add.169 codex 28-second cousin-doublet (alexsong-oai + stefanstokic-oai) extends synth #355's cross-class generalization to a 5th W17 instance. Inter-merge gap (28s) is the tightest in the synth #355 series.
- **Contrasts synth #361 (M-166.A keystone-carrier-rotation)**: Add.169 sees codex retain partial keystone status (2 merges = 33% of tick total, tied with opencode at 2). Keystone identity at Add.169 is **distributed** (codex + opencode share 4-of-6 merges), not rotated nor concentrated — a third regime not anticipated by M-166.A binary rotation/concentration framing.

## Hypothesis for Add.170

If M-169.A holds, codex Add.170 should sustain the singleton-or-doublet shape with author novelty absolute count ≤2 (decay continues OR plateaus). If codex Add.170 produces another novel-author-cluster (≥3 novel authors), M-169.A is weakened. If codex Add.170 produces ≥6 merges with PR-spread >800, that itself would be a second M-168.A trigger and would re-elevate M-168.A's prior. Most likely: codex Add.170 lands in [2, 4] merges with 1-2 novel authors, returning-regular fraction rising — directly testable with the next addendum.
