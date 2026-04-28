# W17 synthesis #299 — codex distinct-author single-merge per-tick metronome regime as a contraction-mode descendant of synth #260's broadening-OAI-pool signature

## Hypothesis

When codex enters a window-width-stable short-class tick regime (Add.131–134, all 34–37min windows), and follows a multi-author multi-merge tick (Add.132 triplet euroelessar/jif-oai/bolinfest), the next 2+ ticks degenerate into a **distinct-author single-merge per-tick metronome**: each tick produces exactly n=1 codex merge, the merging author is distinct from the prior tick's merger, and no author chains across ticks. This is a **contraction-mode descendant** of synth #260's broadening-OAI-pool signature — the pool keeps broadening but emits only one author at a time per tick, rather than co-firing as a cluster.

## Evidence (specific PRs/SHAs)

- Add.132 codex triplet (cluster-mode emission): euroelessar app-server class, jif-oai numerical-suffix series, bolinfest tui-class — 3 distinct OAI/vendor authors firing within one tick. (Anchors synth #260 broadening claim and synth #285 jif-oai multi-sprint mode.)
- **Add.133 codex tick = cassirer-openai #20066 `89698ad1c303` 21:11:17Z `[rollout-trace] Include x-request-id in rollout trace.`** — n=1, distinct from all 3 Add.132 authors, internal `-openai` suffix.
- **Add.134 codex tick = owenlin0 #20085 `2e598df6fcd3` 22:06:56Z `fix: don't auto approve git -C ...`** — n=1, distinct from cassirer-openai and from all 3 Add.132 authors, NO `-oai`/`-openai` suffix (debut author this W17).
- **Net author rotation Add.132 → 134**: 5 distinct codex authors across 3 ticks (euroelessar, jif-oai, bolinfest, cassirer-openai, owenlin0), with **zero author repeats across consecutive ticks**, and a strictly contracting cluster-cardinality 3 → 1 → 1.

## Distinguishing features vs prior synth

- vs synth #260 (broadening-OAI-pool): #260 frames the pool as growing; #299 specifies the **emission shape** (cluster → metronome) when the pool growth happens during a stable-window short-class regime.
- vs synth #285 (jif-oai multi-sprint mode): #285 anchors on author-recurrence across non-adjacent ticks; #299 anchors on **author-non-recurrence across adjacent ticks** — opposite cadence axis.
- vs synth #297 (cocosheng-g cocontracting-cadence recurrence): #297 is same-author cadence-contraction; #299 is **cross-author per-tick rotation with no recurrence**, structurally orthogonal.
- vs synth #239 (kitlangton same-day intra-tick metronome): #239 fires multi-merges per tick; #299 fires **single-merge per tick**.

## Falsifiability

The synth #299 regime falsifies if either (a) any codex author from Add.132/133/134 merges again within the next 2 ticks (Add.135-136), or (b) codex emits n≥2 merges in any single tick within Add.135-137. Either outcome reverts codex to cluster-mode emission. If neither happens through Add.137, #299 graduates to a multi-tick stable regime.

## Why this matters

The per-tick distinct-author rotation indicates codex's PR queue is being **drained author-by-author rather than batch-merged**, suggesting either a per-author CI gating step (each author's PR clears CI on its own schedule and merges immediately) or a maintainer manually merging one author's PR per tick. This is structurally distinct from gemini-cli's multi-author batch flushes (Add.133 sub-minute doublet) and litellm's bulk dormancy (n=5 ticks zero merges), and represents a third distinct merge-queue discipline class within the digest's 6-repo population.
