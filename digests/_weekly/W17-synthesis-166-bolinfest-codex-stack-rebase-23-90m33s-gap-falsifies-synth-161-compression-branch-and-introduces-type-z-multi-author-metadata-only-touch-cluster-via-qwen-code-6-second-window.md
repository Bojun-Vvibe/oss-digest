# W17 Synthesis #166 — bolinfest codex permissions-stack rebase#23 (5-PR same-second commit-wave at 16:04:33Z) lands at 90m33s after rebase#22, doubling the prior largest inter-rebase gap and definitively falsifying synth #161 P-161.B's compression-trend branch; concurrently a NEW pattern type emerges on QwenLM/qwen-code — a 4-PR same-6-second multi-author touch cluster (#3623 doudouOUC, #3631 B-A-M-N, #3629 B-A-M-N, #3647 shenyankm at 16:11:16–22Z) with no author-driven typing signature, indicating CI/maintainer-batch-driven updatedAt advancement that is structurally distinct from synth #161/#163/#164's author-driven same-second atomicity signatures

**Window of evidence:** Add.60 (2026-04-26T15:33:52Z → 16:13:00Z, 39m08s).

**Prior threads being refined / falsified:**
- Synth #161 P-161.B (responsive-rebase compression branch on bolinfest stack) — **DEFINITIVELY FALSIFIED** by rebase#23's 90m33s gap.
- Synth #161 (atomicity = 4-PR downstream block, redefined from 5-PR full-stack) — **MUST BE EXTENDED** to 5-PR full-stack at rebase#23, since #19606 root participated in the same-second wave.
- Synth #163 P-163.B (same-second atomicity is a general feature of stack-tooling-assisted workflows) — **CONFIRMED again** at the rebase event, AND distinguished from a new non-tooling-driven pattern.
- Synth #164's same-second-event taxonomy (Type-A same-second open-triplet, etc.) — **MUST BE EXTENDED** to include a new "Type-Z" non-author-driven same-second-window touch cluster.

## Part 1: bolinfest codex permissions-stack rebase#23 (5-PR full-stack wave)

### The cadence series, updated

Inter-rebase gaps on the bolinfest codex permissions stack (Add.50 onward):
- rebase#16 → #17: 51m24s
- #17 → #18: 56m18s
- #18 → #19: 46m07s
- #19 → #20: 31m57s
- #20 → #21: 44m18s
- #21 → #22: 19m54s ← compression spike
- **#22 → #23: 90m33s** ← Add.60, single largest gap in series, ~2x next-largest

### The full 5-PR wave at rebase#23

All five PRs in the bolinfest permissions stack receive **identical-second updatedAt = `2026-04-26T16:04:33Z`**:
- **#19606** `permissions: make runtime config profile-backed` — head `c966040a` (root).
- **#19395** `permissions: finish profile-backed app surfaces` — head `94b14898`.
- **#19394** `permissions: remove core legacy policy round trips` — head `7fb24742`.
- **#19393** `permissions: migrate approval and sandbox consumers to profiles` — head `c06be999`.
- **#19392** `permissions: derive compatibility policies from profiles` — head `bbf59969`.

**This is the FIRST 5-PR (root + 4 downstream) same-second wave in the observed series.** Prior rebases hit 4-PR downstream blocks (synth #161 reframing); rebase#23 hits the **full-stack 5-PR wave**. The root #19606 was previously updated separately (see Add.59's framing of "post-rebase#22 dormancy on #19606/#19392-19395"); rebase#23 unifies all five into a single same-second commit-wave.

### Why P-161.B is definitively falsified

Synth #161 P-161.B framed two branches for what rebase#22's 19m54s spike meant:
- **Branch A (compression-trend):** continued cadence compression (<30m gaps) is the responsive-rebase signal.
- **Branch B (one-off):** rebase#22 was a one-off compression event in an erratic series.

The 90m33s gap at rebase#23 is **5.5x larger than rebase#22's 19m54s gap**, and **larger than any prior gap in the series**. Branch A is **definitively falsified** — the cadence is not compressing toward sub-30m, it has expanded to 90m+. Branch B is **confirmed** with high confidence — rebase#22 was an outlier.

**P-166.A:** The bolinfest stack rebase cadence is **not converging** to any single rate; it is best modeled as a **noisy random-walk-with-drift** in inter-rebase intervals, with no compression trend. Falsification: 4 of next 6 rebase events fall within a tight band (e.g., 30–60m) suggesting cadence convergence.

### Why synth #161's atomicity definition must be extended

Synth #161 redefined atomicity as 4-PR downstream block (excluding root #19606), because rebases #16–#22 hit only the 4 downstream PRs in the same-second wave. Rebase#23 hits **all 5 PRs same-second**. The atomicity unit must therefore be **mode-dependent**:
- **Downstream-only mode:** root persists at prior head while children rebase together (synth #161's original observation, rebases #16–#22).
- **Full-stack mode:** root and all children rebase together (rebase#23).

**P-166.B:** The full-stack vs downstream-only mode selection correlates with **whether the root PR has accepted maintainer review feedback in the inter-rebase interval**. When the root's content needs to change (e.g., review request), all 5 rebase together; when the root is unchanged but base-main moved, only the 4 downstream rebase. Test: scrape #19606's review-comment timestamps in the rebase#22→#23 interval (90m33s window: 14:14:00Z → 16:04:33Z). If a maintainer review-comment lands in that interval, P-166.B holds. Falsification: rebase#23 occurs with no maintainer review-comment on #19606 in the interval, indicating mode is not review-driven.

### Concurrent author-track expansion

bolinfest's #19683 (`test: harden app-server integration tests`, OPEN at Add.59 15:20:16Z) receives an additional within-window touch at **16:04:50Z** — **17 seconds after** the rebase#23 commit-wave. This is a **non-stack PR by the same author**, touched within seconds of the stack rebase. Mechanism is plausibly **a single bolinfest local push session** where multiple branches got pushed in close succession (stack rebase + non-stack test branch). Synth #160's "single-surface concentration" framing for bolinfest is now **falsified across 2 consecutive windows** AND the parallelism is **synchronized at sub-30s granularity** to the rebase event, suggesting one local push action covers both tracks.

**P-166.C:** Future bolinfest rebase events on the permissions stack will, in 50%+ of next-6 occurrences, be accompanied by within-60s updatedAt advancement on at least one non-stack bolinfest PR. Falsification: 5+ of next 6 rebase events show no non-stack bolinfest PR activity within ±60s.

## Part 2: NEW pattern type — qwen-code 4-PR same-6-second multi-author touch cluster

Add.60 contains a previously-unclassified event: **four PRs on QwenLM/qwen-code receive updatedAt within a 6-second window at 16:11:16–22Z**, by **three distinct authors**, with **no merges, no opens, no closes**:
- **#3647** `fix(cli): keep sticky todo panel compact` by **shenyankm** — updatedAt 16:11:16Z.
- **#3629** `feat(config): support API timeout env override` by **B-A-M-N** — updatedAt 16:11:17Z.
- **#3631** `feat(stats): add model cost estimation` by **B-A-M-N** — updatedAt 16:11:18Z.
- **#3623** `fix(cli): recognize OpenAI-compatible providers in qwen auth status` by **doudouOUC** — updatedAt 16:11:22Z.

### Why this is structurally distinct from prior same-second clusters

All synth #161/#163/#164 same-second/same-window clusters are **author-driven-event clusters** — same author pushes commits or opens PRs in same second. The Add.60 qwen-code 6-second cluster has:
- **3 distinct authors** in 6 seconds.
- **0 commit events** (heads unchanged: `50322c7e`, `5eb2406c`, `4a29d340`, `aecbc6ae` — all match prior heads).
- **0 state transitions** (all 4 remain OPEN).
- **Only updatedAt advancement** — i.e., metadata churn, not content churn.

This is the **signature of CI re-run sweep, label/check-status batch update by a maintainer, or merge-base recomputation triggered by a parent-branch push** — NOT author-driven typing.

### Why this pattern type matters

Synth #161/#163/#164's atomicity framework rests on the assumption that **same-second multi-event signatures encode author intent and tooling choice**. The Add.60 qwen-code cluster shows that **same-second multi-event signatures can also encode infrastructure behavior** (CI, bot, maintainer-batch). Conflating the two would corrupt the atomicity taxonomy.

**Define Type-Z:** a same-window-second multi-PR cluster (≥3 PRs within ≤10 seconds) where:
- **Multiple distinct authors** are involved (rules out single-author stack tooling).
- **Zero commit events** (heads unchanged; rules out content push).
- **Zero state transitions** (rules out merge/close/open events).
- **Only updatedAt advancement** is observed.

Type-Z mechanism is **infrastructure-driven** (CI/bot/maintainer batch), not author-driven.

### Cleanup of prior synths under the new typology

- Synth #161's atomicity signatures (bolinfest 4-PR / 5-PR commit-waves) **survive** — they are commit events with head changes, not Type-Z. They remain author-driven (bolinfest's local push action).
- Synth #163 P-163.B (same-second atomicity is a general feature of stack-tooling-assisted workflows) **survives**, but must be **scoped to commit-event clusters only**, not metadata-only clusters.
- Synth #164's Type-A same-second open-triplet (kitlangton) **survives** — those were genuine open events with state transitions.
- The Add.60 qwen-code cluster is **NOT a synth #163 P-163.B confirmation** at the cross-author scale; it is a separate phenomenon entirely.

**P-166.D:** Type-Z clusters will appear in **3+ of the next 8 windows** across tracked repos, predominantly on repos with active CI bots or maintainer-driven batch operations (qwen-code, OpenHands, litellm). Falsification: <2 Type-Z events in next 8 windows.

**P-166.E:** Type-Z clusters on qwen-code will repeatedly involve the **same 2–3 PRs** within multi-week observation, indicating those PRs are pinned to a CI workflow that runs on a schedule (e.g., daily smoke-test run on stale PRs). Falsification: every observed Type-Z cluster on qwen-code involves a different PR set with no overlap.

## Joint structure

Add.60 contains **two structurally-distinct same-second / same-narrow-window multi-event clusters**:
- (a) bolinfest 5-PR codex stack commit-wave at 16:04:33Z (author-driven, commit-event, full-stack synchronized rebase) — synth #161 atomicity signature, 7th observation, mode-extended to full-stack.
- (b) qwen-code 4-PR multi-author touch cluster at 16:11:16–22Z (infrastructure-driven, metadata-only, multi-author) — Type-Z, NEW pattern.

These two clusters are separated by **6m43s** and occur on different repos. The atomicity framework now has **two parallel tracks** that must be analyzed separately.

---

**Test horizons:**
- P-166.A (no convergence in bolinfest rebase cadence): next 6 rebase events.
- P-166.B (full-stack vs downstream-only rebase mode is review-driven): next bolinfest rebase event after a maintainer comment on #19606.
- P-166.C (rebase ± 60s non-stack accompaniment): next 6 rebase events.
- P-166.D (Type-Z frequency across tracked repos): next 8 windows.
- P-166.E (Type-Z cluster PR-set persistence on qwen-code): next 4 weeks of qwen-code observation.
