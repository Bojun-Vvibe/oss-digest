# W17 synth #177 — bolinfest stack dormancy snap-event is a same-second M+R-coupled cluster, not a pure rebase event; P-171.B FALSIFIED on third confirmation attempt and the synth #166 → #170 → #171 → #176 envelope chain terminates at +175%

**Builds on:** synth #131, #138, #161, #166, #170, #171, #176. **Falsifies:** P-171.B (no rebase#24 within single-window horizon), the implicit "pure-rebase event" framing of the entire synth #131→#176 chain, and synth #176's author-level dormancy bifurcation framing as orthogonal to merge events.

## Observation (Add.66)

After 4h09m11s of bolinfest-stack dormancy (rebase#23 fired 15:34:33Z per Add.62, no #24 through Add.64–65), the dormancy ended at 19:43:44Z via a **45-second-band M+R-coupled cluster**:

1. **#19683 MERGED at 19:43:16Z** (stack-leaf, head-SHA `0b157cc21772` frozen since 16:04:18Z — 3h39m wall-clock between final commit and merge).
2. **#19606 head-roll at 19:43:44Z** (`c966040a` → `04805fb7`) — rebase#24 of permissions stack, 28s after #19683 merge.
3. **#19395 head-roll at 19:43:45Z** (1s after #19606).
4. **#19392 head-roll at 19:43:45Z** (1s after #19606).
5. **#19394 + #19393 metadata cascade 19:43:59-19:44:03Z** (15-19s after #19606).

Total event-cluster span: **47 seconds** (19:43:16Z → 19:44:03Z). Events: 1 merge + 1 root rebase + 2 stack-children rebases + 2 stack-children metadata.

## What this falsifies

### P-171.B: FALSIFIED at exactly 3 confirmation attempts

Synth #171 P-171.B claimed: "no rebase#24 within next single-window horizon (≤55min from each addendum close)." Track record:
- Add.64 (close 18:24Z): no rebase#24 by next-window-close 19:14Z — **CONFIRMED**.
- Add.65 (close 19:14Z): no rebase#24 by next-window-close 19:51Z — **FALSIFIED at 29m28s** (rebase#24 fired 19:43:44Z, inside the 36m48s Add.66 window, 8m32s before window-close).

The two confirmations preceding the falsification establish that **the prediction was directionally correct for the first 2 windows of dormancy extension but failed at the magnitude-+175% breach point**. The magnitude at falsification (4h09m11s) eclipses synth #166's 90m33s envelope by 2.75x — the dormancy did not extend indefinitely, it instead **terminated abruptly via a coupled cluster**.

### Pure-rebase framing falsified

Synth #131 → #138 → #161 → #166 → #170 → #171 → #176 implicitly modeled bolinfest-stack rebase events as **R-only events** (rebase fires, no merge co-located). Across rebases #1–#23 in tracked history, no merge was co-located within sub-30s of any rebase event. Add.66 is the **first observed M+R coupling** in the bolinfest stack: #19683 MERGED 28s before #19606's rebase#24 head-roll. This falsifies the pure-rebase framing and introduces a **new event-class taxonomy**:
- **R-only events** (rebases #1–#23): rebase fires, no co-located merge. Driven by upstream main churn or stack-internal cleanup.
- **M+R coupled events** (rebase #24): a stack-leaf merge fires within sub-30s of a root-stack rebase. Plausibly driven by **post-merge stack-base-update mechanics** (the leaf merge changes what the stack rebases against).

### Synth #176 author-level dormancy bifurcation: REFRAMED

Synth #176 framed bolinfest dormancy as **author-level** (bolinfest-specific within an active codex repo) and orthogonal to merge events. Add.66 shows the dormancy break **co-occurs with a bolinfest-authored merge** (#19683). The author-level dormancy is therefore not orthogonal to merge events — it is **terminated by a same-author merge event**. Synth #176's bifurcation holds (author-vs-repo dormancy levels are distinct) but the **termination condition** is now author-internal merge, not external trigger.

## Predictions

- **P-177.A (M+R coupling generalization):** within next 8 windows of W17, **at least one other multi-PR self-stacked stack** (any author, any tracked repo) will exhibit M+R coupling — defined as a stack-leaf merge within sub-60s of a root-stack rebase. Falsifier: 8 windows close with zero observed M+R couplings outside bolinfest stack. **Confidence: medium-low** — the bolinfest stack is the only sustained multi-PR self-stack in tracked W17 history; the prediction effectively requires a new such stack to emerge.

- **P-177.B (post-coupling rebase tempo recovery):** rebase#25 will fire within 75 minutes of rebase#24 (i.e., before 2026-04-26T20:58:44Z). Reasoning: post-merge stack-base-update mechanics typically trigger immediate stack-rebase cleanup; the 90m33s synth #166 envelope was the **pre-coupling tempo**, post-coupling tempo should compress as the stack reconciles to new main. Falsifier: rebase#25 fires after 20:58:44Z OR fails to fire within 4 windows (matching the falsified pre-coupling envelope). **Confidence: medium**.

- **P-177.C (event-cluster width contraction):** the next bolinfest-stack rebase (#25) will exhibit a head-SHA propagation cluster width of **≤30 seconds** across the same 5 stack-PRs (#19606, #19395, #19392, #19394, #19393). Add.66 cluster width was 47s. Reasoning: M+R coupling and rebase #24 used a fresh main-base; rebase #25 should be a pure-R event from a freshly-aligned base, propagating through the stack faster. Falsifier: rebase#25 head-SHA cluster width ≥45s OR rebase#25 is itself another M+R coupled event (which would extend the cluster). **Confidence: low** — single-observation baseline, no priors on post-M+R rebase shape.

## Cross-references

- Synth #131, #138, #161, #166, #170, #171, #176 (bolinfest stack chain).
- Synth #98 (CI-trigger empty-commit bot pattern — cross-ref for synth #178).
- Synth #50 (post-own-merge cascade same-author adjacent surface) — closest prior to M+R coupling, but framed at author-level, not stack-base-update mechanics.
- Add.62 (rebase#23 baseline 15:34:33Z), Add.66 (rebase#24 fire 19:43:44Z + #19683 merge 19:43:16Z).

## Catalog entry

- Pattern name: **M+R coupled stack-snap-event** (stack-leaf merge within sub-60s of root-stack rebase, terminating extended dormancy)
- Repo: openai/codex
- Author: bolinfest
- First observation: 2026-04-26T19:43:16-19:44:03Z (Add.66)
- Stack: #19606 root + #19392/#19393/#19394/#19395 children + #19683 leaf
- Cluster width: 47 seconds end-to-end
- Pre-coupling dormancy: 4h09m11s (from rebase#23 at 15:34:33Z)
