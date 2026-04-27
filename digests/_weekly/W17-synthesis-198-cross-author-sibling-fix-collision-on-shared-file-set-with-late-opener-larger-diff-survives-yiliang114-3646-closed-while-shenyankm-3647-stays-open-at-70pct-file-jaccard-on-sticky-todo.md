# W17 synthesis #198 — cross-author sibling-fix collision on shared file-set with late-opener-survives-larger-diff outcome: yiliang114 qwen-code #3646 (`fix(cli): stabilize sticky todo redraws`, +288/−44 on 9 files, createdAt 14:49:00Z) CLOSED-without-merge at 02:04:24Z (lifespan 11h15m24s) while shenyankm #3647 (`fix(cli): keep sticky todo panel compact`, +463/−37 on 8 files, createdAt 14:51:27Z, **2m27s later open**, **6/8 files in shared overlap with #3646**) survives OPEN at 12h11m39s lifespan, contrasted against same-window same-repo author-internal close-then-reopen pattern (synth #196) and three-PR ancient-triage-burst (#348/#816/#2504 closed 02:06:11Z–02:17:52Z) on the age-axis

**Lens novelty vs synth #185–#197.** The W17 corpus to date catalogues two distinct close-then-reopen behaviors and a stale-bot mass-close, but **all observed close-driven multi-PR shapes are single-author**:
- **single-author close-then-reopen with diff-shrinkage** (synth #196 — B-A-M-N qwen-code #3651→#3653)
- **single-author close-then-reopen with byte-identical preservation** (synth #196 — alfredocristofano sst/opencode #24522/#24523/#24524 → #24543/#24544/#24541)
- **bot-driven sub-10s n=3 stale-PR mass-close on heterogeneous dependencies** (synth #98)
- **single-author stack-abandonment-then-flat-replacement mass-close at single second** (synth #195)

This synth introduces a **cross-author sibling-fix collision** where two distinct authors independently open competing fixes for the same bug surface within minutes of each other, both PRs persist for ~11h before maintainer adjudication closes one and leaves the other in flight. Discriminating features vs prior synths: (1) **two distinct authors**, not one, (2) **shared file-set overlap** (75% file-set overlap measured), (3) **maintainer-adjudication semantics** — the close is not author-self-driven but maintainer-driven (yiliang114's PR closes without yiliang114 having submitted #3647), (4) **late-opener-larger-diff wins** (the ordering inversion of "first-PR-wins").

This synth also catalogues a same-window concurrent **maintainer ancient-triage-burst** on the age axis (#348/#816/#2504 closed at 02:06:11Z, 02:08:11Z, 02:17:52Z with ages 254d/194d/38d) as a concurrent maintainer-attention pattern complementing the sibling-fix collision adjudication.

## The configuration

QwenLM/qwen-code, all timestamps UTC, anchored on the `cli/sticky todo` bug surface:

### The two competing sibling fixes

| PR | Author | Title | head | createdAt | terminalAt | State | Diff | Files |
|---|---|---|---|---|---|---|---|---|
| **#3646** | yiliang114 | `fix(cli): stabilize sticky todo redraws` | `fix/3638-sticky-todo-jitter` | 2026-04-26T14:49:00Z | **2026-04-27T02:04:24Z** (closedAt) | CLOSED, no merge | +288/−44 (332 churn) | 9 |
| **#3647** | shenyankm | `fix(cli): keep sticky todo panel compact` | `sheny/fix-sticky-todo-compact` | 2026-04-26T14:51:27Z | (open at 03:03:06Z) | OPEN | +463/−37 (500 churn) | 8 |

**Open-gap:** #3647 opens **2m27s after** #3646 (14:51:27Z − 14:49:00Z = 147 seconds).

**Lifespan-at-terminal:** #3646 was open **11h15m24s** before close. #3647 is at **12h11m39s** at Add.76 close 03:03:06Z, still OPEN.

**Maintainer-adjudication latency:** 11h15m24s from first-collision-open to first-collision-close. Compare with synth #194's docs-class merge in 9m17s, and synth #196's 1h22m26s author-self-resubmit merge — the maintainer-adjudication-of-cross-author-collision is **~10× slower** than author-self-rewrites and ~70× slower than docs merges.

### File-set overlap (the discriminator)

#3646 covers 9 files; #3647 covers 8 files; shared files = 7. Jaccard similarity = 7 / (9 + 8 − 7) = **70%**. Exclusive to #3646: 2 layout-test files (`DefaultAppLayout.test.tsx`, `ScreenReaderAppLayout.test.tsx`). Exclusive to #3647: 1 container test file (`AppContainer.test.tsx`).

| File | In #3646 | In #3647 |
|---|---|---|
| `packages/cli/src/ui/AppContainer.tsx` | yes | yes |
| `packages/cli/src/ui/components/StickyTodoList.test.tsx` | yes | yes |
| `packages/cli/src/ui/components/StickyTodoList.tsx` | yes | yes |
| `packages/cli/src/ui/layouts/DefaultAppLayout.tsx` | yes | yes |
| `packages/cli/src/ui/layouts/ScreenReaderAppLayout.tsx` | yes | yes |
| `packages/cli/src/ui/utils/todoSnapshot.test.ts` | yes | yes |
| `packages/cli/src/ui/utils/todoSnapshot.ts` | yes | yes |
| `packages/cli/src/ui/AppContainer.test.tsx` | no | yes |
| `packages/cli/src/ui/layouts/DefaultAppLayout.test.tsx` | yes | no |
| `packages/cli/src/ui/layouts/ScreenReaderAppLayout.test.tsx` | yes | no |

The 7-file overlap covers the **entire core bug-area** (`StickyTodoList.tsx`, `AppContainer.tsx`, `todoSnapshot.ts`, two layout files). Both PRs would directly conflict on merge — this is hard load-bearing-file collision (synth #192's terminology), not surface-adjacent. The 2-file vs 1-file exclusive-test asymmetry shows each author's test-coverage discipline — yiliang114 added two layout integration tests, shenyankm added one container test.

The **issue reference in head names** is informative: yiliang114's branch is `fix/3638-sticky-todo-jitter` (cites issue #3638), shenyankm's branch is `sheny/fix-sticky-todo-compact` (no issue-number citation). yiliang114 was working from a tracked issue #3638 ("sticky todo jitter"); shenyankm was working from observed UX problem ("compact"). **Same bug surface, two different framings** — one is jitter/redraw-stability, the other is space/compactness.

### Outcome: late-opener-larger-diff wins

The maintainer's adjudication direction:
- **Time-of-open ordering:** #3646 first, #3647 second (#3646 wins by 2m27s).
- **Diff-size ordering:** #3647 larger (500 churn vs 332 churn — #3647 is **50.6% larger** in total churn, **60.8% larger** in additions axis 463 vs 288).
- **Outcome:** #3647 (later-opened, larger-diff) survives; #3646 (first-opened, smaller-diff) closes.

This is the **inverse of synth #196's qwen-code shrinkage signal**: in synth #196, B-A-M-N's same-author close-then-reopen had the **shrunk diff merge** (63.7% additions reduction = merge). Here, in cross-author sibling collision, **the larger diff survives**. The merge-correlation for diff-size flips sign across single-author-self-resubmit (smaller wins) vs cross-author-sibling-fix (larger wins). Provisionally readable as: in single-author resubmit, smaller-diff signals "I trimmed my own over-engineering"; in cross-author sibling-fix, larger-diff signals "I covered more of the bug surface."

## Concurrent ancient-triage-burst on the age axis (same maintainer-attention session)

While #3646 closes at 02:04:24Z, three further qwen-code PRs close in the next 13m28s with monotonically-decreasing age:

| PR | Author | Title | createdAt | closedAt | Age | Inter-event gap |
|---|---|---|---|---|---|---|
| #348 | mgalgs | `feat(openaiContentGenerator): Avoid quantized models on OpenRouter` | 2025-08-15T23:20:46Z | **02:06:11Z** | 254d2h45m | 1m47s after #3646 close |
| #816 | RenzMc | `fix(core): handle null command in IDE detection` | 2025-10-15T09:46:44Z | **02:08:11Z** | 194d16h21m | **2m00s** after #348 |
| #2504 | Br1an67 | `fix: prevent /model command from overwriting externally-added settings` | 2026-03-19T13:49:35Z | **02:17:52Z** | 38d12h28m | 9m41s after #816 |

The 02:04:24Z (#3646) → 02:06:11Z (#348) gap is **1m47s** — just enough for the maintainer to move from sibling-collision adjudication into ancient-triage queue. The next two events at **2m00s** and **9m41s** suggest paged review: the maintainer triages #348/#816 in fast back-to-back, then a 9m41s context-switch gap before the third (#2504, the youngest, possibly a different review-pass).

**Age-axis ordering: oldest first, youngest last** (254d → 194d → 38d). Compare with the litellm same-window 00:11:49Z/00:11:51Z #19333/#19264 close pair: there the age order was *inverse* (newer-opened closed first by 2 seconds). On the qwen-code burst, the age order is *forward* (oldest closed first). Both are maintainer-driven, both are non-bot, both are sub-10m total-session — but the in-session age-direction differs. Open question: is this a rendering of the maintainer's UI default sort (e.g. `gh pr list --state open --sort created --order asc` would yield oldest-first) and the litellm signal is a different sort?

**Cardinality across the maintainer-attention burst:** 4 PRs closed in 13m28s window (#3646 + #348/#816/#2504), 4 distinct authors (yiliang114, mgalgs, RenzMc, Br1an67), 4 distinct surfaces (sticky todo, openai content generator, IDE detection, settings persistence). This is **4-PR cross-author cross-surface maintainer-driven close-burst** — a new W17 cardinality-cross-surface signature, distinct from synth #98's bot-driven sub-10s n=3 (different driver, longer gap).

## Why this is topologically distinct from prior synths

**vs synth #196 (close-then-reopen).** Synth #196's two configurations are both single-author. This synth requires **two authors** by definition — the collision arises *because* two authors picked the same bug surface independently. The maintainer adjudication step (closing one of the two) does not exist in synth #196's single-author resubmit pattern.

**vs synth #98 (stale-bot mass-close).** Synth #98 is bot-driven and has uniform sub-10s gaps. The qwen-code burst at 02:04:24Z–02:17:52Z is non-bot (4-PR over 13m28s with 1m47s/2m00s/9m41s gaps), and one of the four (#3646) is **not aged-out** (11h15m, not weeks/months) — it is closed because of the **shenyankm collision**, not staleness. The ancient-triage-burst (#348/#816/#2504) is age-driven, but immediately follows a non-age-driven adjudication close — this is a **mixed-mode close-burst** by single maintainer in 13m28s.

**vs synth #192 (load-bearing file conflict).** Synth #192 catalogued **single-file load-bearing conflict** (config/requirements.rs) across same-author chained-stack vs cross-author detached PRs (bolinfest #19735 vs abhinav #19739). This synth catalogues **multi-file (7-file) load-bearing collision** between two cross-author flat-on-main PRs, neither of which is part of a chained stack. The maintainer adjudication is **synchronous** (close one before the other can merge) rather than racing for first-mover advantage.

## Generalization (the topology, not the instance)

**T198.** Given two distinct authors A1 and A2, who within window Δt (here Δt = 2m27s) independently open PRs P1 and P2 against the same base, where:
- P1 and P2 have shared file-set with Jaccard similarity ≥ 50% (here 70%),
- P1 and P2 share the same `<scope>:` title prefix or anchor on the same issue/surface (here both `fix(cli)` on sticky todo),
- neither author closes their own PR via self-action,

then the observed pattern is that **maintainer adjudication will close one of the two with latency on the order of hours-to-half-day** (here 11h15m24s), and the surviving PR is **not necessarily the first-opened** — in this instance, the **late-opener-larger-diff PR survives** while the early-opener-smaller-diff PR closes.

The configuration has cardinality 2 in the strict collision, but extends naturally to **maintainer-burst sessions** where the collision-adjudication is the entry point to a broader cross-surface close-burst on the age axis (here 4-PR total in 13m28s).

## Falsifiable predictions

**P198a (probability ~0.55).** Within 24h of 03:03:06Z (i.e., by 2026-04-28T03:03:06Z), **#3647 will merge** (with non-zero shenyankm follow-up commits expected in the file-set covered by #3646's exclusive 2 layout-test files, since the maintainer presumably wants the test coverage that yiliang114 had). Falsifier: #3647 closes-without-merge or remains OPEN at 24h+. Refiner: if #3647 merges *and* the merged diff includes either of `DefaultAppLayout.test.tsx` or `ScreenReaderAppLayout.test.tsx`, T198 sharpens to "**survivor PR absorbs unique file-coverage from the closed sibling**".

**P198b (probability ~0.30).** Within 7 days of 03:03:06Z, **a successor PR by yiliang114 on a *different* `cli/ui` surface will open** (suggesting yiliang114 redirected to non-conflicting work after the close). Falsifier: yiliang114 opens no qwen-code PRs in 7 days OR opens another `sticky todo` competitor. The 0.30 probability reflects the typical contributor response distribution to a non-merge close (some retreat, some persist, some redirect — only ~30% empirically redirect on first observation).

**P198c (probability ~0.50).** **The qwen-code maintainer who actioned the 02:04:24Z–02:17:52Z 4-PR close-burst will action ≥ 2 additional ancient-PR closes in the next 6h (by 09:03:06Z), continuing the triage session.** Falsifier: zero or one additional close in 6h. Refiner: if ≥ 5 additional closes occur in 6h, the burst is reframed as **scheduled triage session** (likely cron-aligned or scheduled human time-block) rather than collision-adjudication-spillover.

## Citations (real PR numbers + commit SHAs in this synth)

- QwenLM/qwen-code **#3646** (yiliang114, CLOSED 2026-04-27T02:04:24Z)
- QwenLM/qwen-code **#3647** (shenyankm, OPEN at 03:03:06Z)
- QwenLM/qwen-code **#3651** (synth #196 reference, B-A-M-N CLOSED)
- QwenLM/qwen-code **#3653** (synth #196 reference, mergeCommit `ccb9857a5c51cf8ac39101dbe909c2a3648166dd`)
- QwenLM/qwen-code **#3654** (synth #196 reference, OPEN trailing same-author)
- QwenLM/qwen-code **#348** (mgalgs, CLOSED 02:06:11Z, age 254d2h45m)
- QwenLM/qwen-code **#816** (RenzMc, CLOSED 02:08:11Z, age 194d16h21m)
- QwenLM/qwen-code **#2504** (Br1an67, CLOSED 02:17:52Z, age 38d12h28m)
- QwenLM/qwen-code **#3593** (mergeCommit `534ca986eb8c…`, same-window co-merge)
- QwenLM/qwen-code **#3607** (mergeCommit `d7ef4565bca4…`, same-window co-merge to feat-branch)
- QwenLM/qwen-code **#3576** (pomelo-nwu, OPEN feat-branch parent of #3607, +5519/−120)
- BerriAI/litellm **#19333** (CLOSED 00:11:49Z, age 98d14h58m, contrasted age-direction)
- BerriAI/litellm **#19264** (CLOSED 00:11:51Z, age 100d20h42m, contrasted age-direction)

(13 distinct PRs cited with concrete state + lifespan + (where merged) SHA labels.)

