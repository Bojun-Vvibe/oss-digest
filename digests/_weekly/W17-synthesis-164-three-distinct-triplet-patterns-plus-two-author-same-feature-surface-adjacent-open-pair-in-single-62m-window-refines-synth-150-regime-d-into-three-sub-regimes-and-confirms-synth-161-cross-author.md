# W17 Synthesis #164 — three structurally-distinct triplet-pattern emissions in single 62m window across two repos: kitlangton same-second open-triplet (sst/opencode #24485/#24486/#24487) + alfredocristofano sequential-typed open-triplet (sst/opencode #24502/#24503/#24504) + B-A-M-N multi-disjoint-surface touch-triplet (qwen-code #3631/#3645/#3648), plus first observed two-author same-feature-surface adjacent open-pair (sticky-todo #3646 yiliang114 / #3647 shenyankm) — REFINES synth #150 regime D and synth #161's same-second atomicity framing

**Window of evidence:** Add.59 (2026-04-26T14:31:28Z → 15:33:52Z, 62m24s).

**Prior threads being refined:**
- Synth #150 regime D (single-author, multi-disjoint-surface, in-window) — confirmed and **enriched** by B-A-M-N's qwen-code triplet, with a structural taxonomy now possible.
- Synth #161 (atomicity = 4-PR downstream block on bolinfest stack) — **generalized**: same-second atomicity is a multi-author phenomenon, not a bolinfest-specific signature (see synth #163 P-163.B).
- Synth #162's two-active-repo regime collapse — provides the **enabling condition** for the triplet density.

## The taxonomy

A single 62m window emitted **three distinct triplet patterns** plus **one adjacent pair**, all within the active-repo set that just expanded from 2 → 6. The triplets fall into three structural categories:

### Type-A: same-second open-triplet (kitlangton, sst/opencode)
- **#24485** `feat(httpapi): bridge session read routes` — head `68d68778`, OPEN, updatedAt `2026-04-26T15:32:01Z`
- **#24486** `feat(httpapi): bridge session lifecycle routes` — head `d0c53755`, OPEN, updatedAt `2026-04-26T15:32:01Z`
- **#24487** `feat(httpapi): bridge session message mutations` — head `a866961e`, OPEN, updatedAt `2026-04-26T15:32:01Z`

All three updatedAt timestamps **identical to the second**. Naming is **stack-ladder** (`session read` → `session lifecycle` → `session message mutations`). Opens fire **15s after** the root PR (#24484 `bridge sync routes`) merged at 15:31:46Z. Mechanism is almost certainly **stack-tooling-assisted** (Graphite/Sapling-style "after merge of root, push remaining stack as fresh PRs against new main").

### Type-B: sequential-typed open-triplet (alfredocristofano, sst/opencode)
- **#24502** `fix: add logging to silent catch block in workspace restore bootstrap` — head `8dfc9a79`, OPEN at 15:10:59Z
- **#24503** `fix: replace catch (e: any) with proper unknown handling in mcp/index.ts` — head `a5e7081e`, OPEN at 15:08:57Z (NOTE: opened BEFORE #24502, but lower number — clarification: PR numbers reflect creation order, so updatedAt-vs-number ordering is an artifact of post-creation edits)
- **#24504** `fix: remove unnecessary any type from catch clause in github.ts` — head `c462a2ab`, OPEN at 15:12:15Z

Three OPEN events spaced 2m02s and 1m16s apart — **clearly NOT same-second**. Same author, same theme (`any`-type / silent-catch cleanup), three different files (`workspace restore bootstrap`, `mcp/index.ts`, `github.ts`). Mechanism is **manual sequential typing** — author opening one PR at a time, no stack tooling involved. Distinguishable from Type-A by the 1–2 minute inter-open gaps (vs identical-second).

### Type-C: multi-disjoint-surface touch-triplet (B-A-M-N, qwen-code)
- **#3631** `feat(stats): add model cost estimation` — head `4a29d340`, within-window touch, updatedAt 15:16:34Z (PR opened pre-window)
- **#3645** `fix(cli): correct OPENAI_MODEL precedence without breaking /model selection` — head `fd04a01a`, within-window touch, updatedAt 15:10:12Z (PR opened pre-window)
- **#3648** `fix(acp): repair integration against current core API` — head `79a0e123`, OPEN at 15:00:01Z (NEW open in window)

Three disjoint surfaces (`stats`, `cli model-precedence`, `acp integration`), one new open + two within-window touches on existing PRs. Spread across 16m33s. **This is the canonical synth #150 regime D pattern** — single author, multi-disjoint-surface, in-window — but now with a **mixed open/touch composition**, not all-opens.

### Bonus: two-author same-feature-surface adjacent open-pair (sticky-todo)
- **#3646** `fix(cli): stabilize sticky todo redraws` by **yiliang114** — head `8433079e`, OPEN at 15:25:13Z
- **#3647** `fix(cli): keep sticky todo panel compact` by **shenyankm** — head `50322c7e`, OPEN at 15:28:06Z

Two distinct authors, **same feature surface (`sticky todo`)**, adjacent opens 2m53s apart. **First observed instance of this pattern in tracked W17.** This is structurally distinct from any synth #144/#150/#160 regime — the previous regimes all had single-author multi-PR or multi-author multi-surface; this is **multi-author single-surface adjacent**, which suggests **either coordination (pair-programming-style) or competition (independent fixes for the same recently-reported bug)**. The 2m53s gap is short enough that a coincidence-of-issue is unlikely; the more probable mechanisms are (a) both authors saw a maintainer's bug report or feature spec and started in parallel, or (b) one author's PR triggered the other's response. **No issue reference** in either title rules out the obvious coordination signal — this remains an **open puzzle**.

## What the taxonomy refines

**Synth #150 regime D refinement.** Regime D was originally framed as "single author, multiple disjoint surfaces, in-window." The Add.59 data shows three sub-regimes now must be split out:
- **D1 (multi-surface, mixed open/touch):** B-A-M-N qwen-code triplet — the canonical form.
- **D2 (single-surface, sequential-typed opens):** alfredocristofano sst/opencode any-cleanup triplet — single thematic surface (catch-block / any-type cleanup), three files, sequential typing cadence (1–2 min gaps).
- **D3 (single-surface, same-second opens, post-root-merge):** kitlangton sst/opencode httpapi triplet — single API surface (httpapi session routes), three feature splits, identical-second updatedAt, root-PR-merges-first cascade. **D3 is structurally identical to a stack-tooling burst.**

**P-164.A:** The three sub-regimes (D1/D2/D3) will recur in distinguishable form across Add.60–63. Specifically: D3 (same-second open-triplet) will **only** appear from authors using stack-tooling-aware workflows (test: cross-reference with author's other repos for known stack tooling — Graphite is detectable via PR description footer, Sapling via specific commit-message conventions). Falsification: a same-second open-triplet from an author with no stack-tooling footprint anywhere in their public PR history.

**P-164.B:** D2 (single-surface sequential-typed) is associated with **mechanical refactor work** (lint-rule cleanups, type-tightening passes, naming migrations) — alfredocristofano's three PRs are all `any`-type-removal in TypeScript catch blocks, which is exactly the signature of a lint-rule sweep. Falsification: a D2 triplet whose three PRs are NOT mechanical-refactor in nature (e.g., three feature additions sequentially typed).

**P-164.C:** D1 (multi-disjoint-surface) has the **highest within-window variance in net diff size** of the three sub-regimes; D3 has the **lowest** (because stack-tooling tends to produce roughly-equal feature-split PRs). Test: capture additions/deletions at next D1 and next D3 emissions and compare coefficient-of-variation. Falsification: D1 CoV ≤ D3 CoV at any matched emission pair.

## Connection to synth #161/#163

Synth #161 redefined atomicity on bolinfest's codex stack as the **4-PR downstream block** (same-second committedDate). Synth #163 P-163.B generalized this: same-second multi-PR signatures are a **general feature of stack-tooling-assisted workflows**. **Add.59 provides the first cross-author, cross-repo confirmation**: kitlangton's #24485/#24486/#24487 triplet is **same-second updatedAt** (15:32:01Z) on a different repo (sst/opencode), different surface (httpapi), different author (kitlangton). The same-second atomicity signature is now **observed on 2 distinct authors / 2 distinct repos / 2 distinct surfaces**, all consistent with stack-tooling-assisted workflows. Synth #161's atomicity framing is **CONFIRMED at the cross-author scale** — it generalizes cleanly.

**P-164.D (joint with synth #163 P-163.B):** Within the next 8 windows (Add.60–67) we will observe at least one **third** distinct (author, repo) pair producing a same-second multi-PR signature. Falsification: 8 consecutive windows with no such third instance.

---

**Test horizons:**
- P-164.A, P-164.B, P-164.C: Add.60–63 (next 4 windows).
- P-164.D: Add.60–67 (next 8 windows).
