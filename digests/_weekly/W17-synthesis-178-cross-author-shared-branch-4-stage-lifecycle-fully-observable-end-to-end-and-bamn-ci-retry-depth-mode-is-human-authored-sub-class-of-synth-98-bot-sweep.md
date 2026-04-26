# W17 synth #178 — cross-author shared-branch topology fully observable end-to-end via efrazer-oai #19650 + shijie-oai #19635 pair; synth #175 generalizes from 2-repo dual-channel framing to a 4-stage lifecycle, and B-A-M-N CI-retry depth-mode is a sub-class of synth #98 bot-driven sweep with author-source flip

**Builds on:** synth #98 (bot-driven sweep on stacked-PR series), synth #157 (litellm non-main integration channel), synth #172 (litellm_oss_branch as second non-main channel), synth #175 (non-main integration branch generalizes litellm→codex; cross-author shared-branch vs self-stacked topology), synth #176 (B-A-M-N depth mode with `trigger CI` empty-commit shape). **Refines:** synth #175 from 2-repo + 2-topology framing to a 4-stage lifecycle with end-to-end observation. **Refines:** synth #98 by adding author-source axis (bot vs human) to the empty-commit CI-retry pattern.

## Observation 1 (Add.66) — cross-author shared-branch lifecycle fully observable

The codex efrazer-oai/shijie-oai pair completes its first end-to-end observation in tracked W17 history:

- **Stage 1 (branch creation)**: efrazer creates branch `dev/efrazer/agent-identity-env-jwt` (timestamp prior to Add.65 window, not directly observed).
- **Stage 2 (contributor PR opens)**: shijie-oai opens **#19635** targeting `dev/efrazer/agent-identity-env-jwt` at **2026-04-26T04:48:26Z**.
- **Stage 3 (branch-owner PR opens)**: efrazer-oai opens **#19650** targeting **main** at **2026-04-26T07:43:15Z** (2h54m49s after #19635 opens — branch owner opens integration PR AFTER contributor PR exists).
- **Stage 4a (contributor merge into shared branch)**: #19635 MERGES into `dev/efrazer/agent-identity-env-jwt` at **2026-04-26T19:24:58Z** (Add.66, 14h41m32s after #19635 opened).
- **Stage 4b (branch-owner integration PR head-roll)**: #19650 head-rolls at **2026-04-26T19:36:21Z** — **11m23s** after stage 4a — picking up shijie-oai's contribution into the main-targeted PR. +474/-273 across 29 files final state.

This is the **first end-to-end 4-stage observation of cross-author shared-branch topology** in tracked W17 history. Synth #175 named the topology but lacked the lifecycle decomposition.

## Observation 2 (Add.65 + Add.66) — B-A-M-N CI-retry sub-pattern hardens across 2 windows

B-A-M-N #3645 head-roll sequence on a single PR within a 1h05m52s span:
- **18:26:19Z** `4f7a1aa4` `fix(types): remove unused type annotation from mock` — substantive type-cleanup (Add.65).
- **19:06:34Z** `cfaf5a10` `trigger CI` — empty-commit CI-retry (Add.65, 40m15s after substantive).
- **19:32:11Z** `8a742c5b` `chore: trigger clean CI build` — empty-commit CI-retry (Add.66, 25m37s after first CI-retry).

**2 CI-retry empty commits in 25m37s on a single PR**, both human-authored (B-A-M-N). Synth #98 framed this empty-commit shape as bot-driven sweep on stacked-PR series; here it's **human-driven on a single non-stacked PR**. The pattern shape (empty commit, CI-trigger semantics, head-SHA churn without content delta) is identical to the bot pattern, but the **author-source axis flips** (bot → human) and the **target axis narrows** (stack-wide sweep → single PR).

## Refinement of synth #175

Synth #175 framed:
- Topology axis: cross-author shared-branch (efrazer/shijie-oai) vs self-stacked (bolinfest).
- Channel axis: non-main integration branch generalizes litellm `litellm_oss_branch` → codex `dev/efrazer/agent-identity-env-jwt`.

Synth #178 adds:
- **4-stage lifecycle decomposition** for cross-author shared-branch: (1) branch creation, (2) contributor PR opens, (3) branch-owner integration PR opens, (4) contributor merge → branch-owner head-roll. Time-scale measured: stage 2→3 = 2h54m49s, stage 4a→4b = 11m23s.
- **Stage-4 latency prediction**: stage 4a→4b latency (11m23s) is much shorter than stage 2→3 latency (2h54m49s). The branch-owner is **reactive within minutes** to contributor merges, **lazy within hours** to PR opens.

## Refinement of synth #98

Synth #98 framed empty-commit CI-trigger shape as bot-driven sweep on stacked-PR series. Synth #178 adds:
- **Author-source axis**: bot (synth #98 priors) vs human (B-A-M-N #3645 in Add.65–66). Same shape, different author class.
- **Target-scope axis**: stack-wide (synth #98) vs single-PR (B-A-M-N #3645).
- The 4-cell taxonomy (bot/stack, bot/single-PR, human/stack, human/single-PR) has now seen the (bot/stack) and (human/single-PR) cells. The other two cells remain unobserved.

## Predictions

- **P-178.A (cross-author shared-branch stage-4b reactivity bound):** within next 8 windows of W17, **at least one new cross-author shared-branch pair** (any tracked repo, any author) will exhibit stage-4 timing where the branch-owner head-roll lands within **≤30 minutes** of the contributor merge into the shared branch. Falsifier: 8 windows close with zero new cross-author shared-branch stage-4 events OR all observed events have stage-4 latency >30min. **Confidence: medium** — single-data-point baseline (11m23s), but the reactivity-vs-laziness asymmetry has structural plausibility (post-merge mechanics force the integration PR forward).

- **P-178.B (stage-2→3 lazy-open bound):** within next observed cross-author shared-branch lifecycle, the time between contributor PR opening and branch-owner integration PR opening will be **between 1 and 24 hours**. Falsifier: an observed pair has stage 2→3 <1h or >24h. **Confidence: low** — single observation (2h54m49s), wide bound to allow falsification space.

- **P-178.C (human/stack CI-retry cell observation within 5 windows):** the (human-authored, stack-targeted) empty-commit CI-retry cell will be observed within next 5 windows of W17 — defined as a single human author firing 2+ empty-commit CI-trigger events within 60 minutes across 2+ PRs in a self-stack. Falsifier: 5 windows close with zero observed (human/stack) CI-retry events. **Confidence: low** — bolinfest's stack is the only sustained stack candidate, and bolinfest has not exhibited CI-retry empty-commit shape in tracked history.

- **P-178.D (B-A-M-N #3645 CI-retry escalation OR substantive resolution within 3 windows):** B-A-M-N #3645 will either (a) fire a 3rd CI-retry empty commit OR (b) merge OR (c) close OR (d) fire a substantive (non-empty) head-roll within next 3 windows of W17. Falsifier: 3 windows close with #3645 OPEN and no head-roll of any kind. **Confidence: high** — current cadence is 2 CI-retries in 25m37s, sustained-edit-with-CI-retry session is in 3rd window with head-roll in each window so far.

## Cross-references

- Synth #98 (bot-driven empty-commit sweep) — author-source axis added.
- Synth #157, #172, #175 (non-main integration branch chain) — lifecycle decomposed.
- Synth #176 (B-A-M-N depth-mode bifurcation) — CI-retry sub-pattern carved out.
- Synth #165 (D3 lifecycle 28m17s root-to-leaf via kitlangton sst/opencode httpapi triplet) — comparable lifecycle decomposition for self-stacked topology vs synth #178's cross-author shared-branch decomposition.
- Add.65 (B-A-M-N first CI-retry, shijie-oai #19635 OPEN), Add.66 (B-A-M-N second CI-retry, #19635 MERGED, #19650 head-roll).

## Catalog entry

- Pattern name: **cross-author shared-branch 4-stage lifecycle**
- Repo: openai/codex
- Pair: efrazer-oai (#19650 main-targeted) + shijie-oai (#19635 branch-targeted)
- Stages: branch-create → contributor-open → branch-owner-open → contributor-merge → branch-owner-headroll
- Latencies: stage 2→3 = 2h54m49s, stage 4a→4b = 11m23s
- Final integration PR scope: +474/-273, 29 files

- Pattern name: **human-authored single-PR CI-retry empty-commit shape**
- Repo: QwenLM/qwen-code
- Author: B-A-M-N (#3645)
- Window span: 19:06:34Z → 19:32:11Z (25m37s, 2 CI-retries)
- Distinct from synth #98 (bot-authored, stack-wide) on author-source AND target-scope axes
