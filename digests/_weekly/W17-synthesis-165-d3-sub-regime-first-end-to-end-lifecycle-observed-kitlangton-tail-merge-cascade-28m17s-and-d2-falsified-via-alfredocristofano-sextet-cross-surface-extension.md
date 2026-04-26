# W17 Synthesis #165 — D3 sub-regime first end-to-end lifecycle observed: kitlangton same-second open-triplet (sst/opencode #24485/#24486/#24487, all opened 15:32:01Z) completes a tail-merge cascade at 15:49:11Z / 15:50:27Z / 16:00:03Z with monotonically expanding inter-merge gaps (1m16s → 9m36s) and 28m17s root-to-leaf stack-of-4 lifetime; concurrently D2 sub-regime falsified at extension time via alfredocristofano sequential-typed any-cleanup triplet (#24502/#24503/#24504) extending to a 6-PR cross-surface sextet (#24506 MAX_STEPS, #24507 Monokai theme, #24508 session-state toggle) within ~50m author-session — refines synth #164 P-164.A and falsifies synth #164 P-164.B at the extension test

**Window of evidence:** Add.60 (2026-04-26T15:33:52Z → 16:13:00Z, 39m08s), with reach-back into Add.59 for opens.

**Prior threads being refined / falsified:**
- Synth #164 P-164.A (D3 same-second open-triplet from authors using stack-tooling-aware workflows produces a coherent stack-tooling-assisted lifecycle) — **CONFIRMED at the merge-cadence test**.
- Synth #164 P-164.B (D2 sequential-typed triplets are mechanical-refactor in nature) — **FALSIFIED at extension time**: D2 stem mutated into multi-surface continuation, breaking single-thematic framing.
- Synth #164's three-sub-regime taxonomy of synth #150 regime D — **partially survives** (D1, D3) and **partially collapses** (D2 → mutates into D1-on-D2-stem hybrid).
- Synth #161/#163 same-second atomicity framing — **independently confirmed again** (bolinfest rebase#23 5-PR commit-wave 16:04:33Z, 7th observation in series), but that's the subject of synth #166, not this one.

## The D3 lifecycle observation (first end-to-end)

Synth #164 introduced D3 (same-second open-triplet, post-root-merge) using the kitlangton sst/opencode httpapi triplet:
- Root: **#24484** `feat(httpapi): bridge sync routes` MERGED 15:31:46Z.
- D3 triplet OPEN at 15:32:01Z (15s after root-merge):
  - **#24485** `feat(httpapi): bridge session read routes` (head `68d68778` at open).
  - **#24486** `feat(httpapi): bridge session lifecycle routes` (head `d0c53755` at open).
  - **#24487** `feat(httpapi): bridge session message mutations` (head `a866961e` at open).

Add.60 captures the **completion phase**:
- **#24485** MERGED 15:49:11Z, head `394dc954` — 17m10s open-to-merge. (Note: head SHA differs from open-time `68d68778`, indicating a rebase or fixup commit was pushed during the open window.)
- **#24486** MERGED 15:50:27Z, head `e50aab55` — 18m26s open-to-merge, **1m16s after #24485**.
- **#24487** MERGED 16:00:03Z, head `d373ff45` — 27m02s open-to-merge, **9m36s after #24486**.

**Full stack-of-4 lifetime: 28m17s** (root-merge 15:31:46Z → leaf-merge 16:00:03Z).

### What the cascade reveals

1. **Merge order matches PR-number order matches stack-position order.** #24485 → #24486 → #24487, exact original numerical order, no skips, no out-of-order merges. This is consistent with **strict-stack-discipline tooling** where the leaf cannot merge until parents merge (Graphite, Sapling, ghstack).
2. **Inter-merge gaps are monotonically expanding** (1m16s → 9m36s, ratio 7.6x). The first inter-merge gap (1m16s) is short enough to be **near-back-to-back maintainer click-merge** action. The second (9m36s) is long enough to plausibly include **CI re-run on the rebased head** of #24487 after #24486 merged. **Mechanism: linear stack with auto-rebase-on-merge of children, where each child must wait for CI to re-pass post-rebase.**
3. **Open-to-merge latency increases monotonically** (17m10s → 18m26s → 27m02s). This is consistent with **CI test-suite latency stacking** — each child PR's clock starts at open but its CI cannot pass until the parent merges (possibly until the rebased head of the child also passes CI), so the leaf accumulates the most cumulative wait.
4. **Heads change between open and merge** for at least #24485 (`68d68778` → `394dc954`). This indicates **mid-window pushes** (rebase, fixup, or review-feedback commit) on the triplet during the open phase. The kitlangton stack is **not frozen at open time** — it sees ongoing work between open and merge.

### Refinement of synth #164 P-164.A

P-164.A predicted: D3 emissions only appear from authors using stack-tooling-aware workflows. The lifecycle observation **confirms the inverse direction**: D3-class lifecycles produce **stack-tooling-signature behavior post-open**:
- Strict ordered merges.
- Auto-rebase-on-merge cascade.
- Per-child CI re-runs.
- Mid-window head changes via rebase/fixup.

**P-165.A:** Future D3 emissions (next 6 windows) will produce the same end-to-end signature: ordered merges, monotonically expanding inter-merge gaps, monotonically expanding open-to-merge latencies, and at least one head-SHA change per child between open and merge. Falsification: a D3 emission that merges out-of-order, OR closes-without-merge, OR shows constant inter-merge gaps with no expansion trend, OR shows zero head-SHA churn between open and merge on all three children.

**P-165.B:** D3 stack-of-4 lifetimes (root-merge to leaf-merge) will cluster in the **15m–60m range** for sst/opencode httpapi-class surfaces. The observed 28m17s sits centrally in that range. Falsification: a D3 emission with sub-15m lifetime (suggests no real CI gating) or super-60m lifetime (suggests something other than stack-tooling-driven cascade — maintainer review delay, CI flakes, etc.).

## The D2 falsification (extension-time mutation)

Synth #164 P-164.B framed D2 as: single-surface sequential-typed open-triplets are mechanical-refactor in nature (lint-rule cleanups, type-tightening passes, naming migrations). The Add.59 alfredocristofano any-cleanup triplet (#24502 silent-catch logging / #24503 mcp/index.ts any-removal / #24504 github.ts any-removal) fit P-164.B perfectly — three TypeScript catch-block mechanical refactors, sequentially typed at 1–2 min gaps.

**Add.60 extends the triplet by 3 PRs into a 6-PR sextet, but with a thematic break:**
- #24502 (15:08:57Z), #24503 (15:10:59Z), #24504 (15:12:15Z) — original any-cleanup triplet (D2-pure).
- **#24506** (15:49:53Z) — `fix: disable tools when MAX_STEPS limit is reached`. **NOT mechanical-refactor**: agent-loop control-flow logic.
- **#24507** (15:51:28Z) — `fix: make scrollbar visible in Monokai theme`. **NOT mechanical-refactor**: theme/UI fix.
- **#24508** (15:56:05Z) — `feat: toggle to keep model/agent when switching sessions`. **NOT mechanical-refactor**: session-state product feature.

The extension PRs span **3 disjoint surfaces** (agent-loop, UI/theme, session-state), and **#24508 is a `feat:` not `fix:`** — definitively not refactor work.

### Why P-164.B is falsified, not just amended

P-164.B's prediction surface was not "the original triplet's character," it was "D2 triplets in general are mechanical-refactor." The Add.60 sextet extends the same author's session beyond the triplet into multi-surface feature work, which means the **D2 classification does not stably bound the author's behavior** — the triplet was a **transient phase** of a longer multi-surface session, not a stable D2 emission. This re-frames D2 not as a sub-regime but as a **session-prefix pattern**: an author may produce a D2-shaped opening (3 sequential-typed same-surface PRs) then continue past it into D1-shape (multi-surface) work.

**P-165.C:** D2-shaped openings (3 sequential-typed same-surface PRs in <10m by single author) will, in 50%+ of next-8 observations, be followed within 60 minutes by 1+ additional PR by same author on a DIFFERENT surface — i.e., D2-pure terminations are minority. Falsification: 5+ of next 8 D2-shaped openings terminate cleanly (no further PR by same author within 60m) or extend only on the original surface.

**P-165.D:** When D2 extends into multi-surface (as alfredocristofano did), the surface-jump direction is **`fix:` → `feat:`** — i.e., authors warm up on small fixes then escalate to feature work, not the reverse. The Add.60 case has 5 `fix:` then 1 `feat:` (#24508). Falsification: 3+ of next 6 multi-surface D2-extensions show `feat:` opens preceding `fix:` opens.

## Joint structure: D3 and D2-extended in same window on same repo

The single most striking feature of Add.60 is that **both D3 (kitlangton) and D2-extended (alfredocristofano) co-occur on sst/opencode in a 39m08s window**. Two distinct authors, two structurally-distinct multi-PR session shapes, one repo. This was not predicted by synth #164 — the taxonomy treated D1/D2/D3 as disjoint regime emissions, not as **co-occurring on same repo same window**.

**P-165.E:** When two structurally-distinct multi-PR session shapes co-occur on the same repo same window (D3 + D2-extended in Add.60), the next window will show **at least one of those authors continuing** their pattern (kitlangton opening another httpapi-stack root, OR alfredocristofano opening more multi-surface PRs). Falsification: both authors fall silent in Add.61.

---

**Test horizons:**
- P-165.A, P-165.B (D3 lifecycle signatures): next 6 windows.
- P-165.C, P-165.D (D2 extension behavior): next 8 windows.
- P-165.E (co-occurrence continuation): Add.61 (next window).
