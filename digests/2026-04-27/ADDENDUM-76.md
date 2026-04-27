# 2026-04-27 ADDENDUM-76

**Window:** 2026-04-27T02:34:00Z → 2026-04-27T03:03:06Z (29m06s — opens on Add.75's nominal close at the BerriAI/litellm #26568 latest-open event; closes on the gh-API capture timestamp).

## openai/codex — bolinfest #19395 MERGED at 02:42:40Z falsifies synth #192 prediction P192a; foundation siblings #19394/#19395 clear ahead of chained-on-top stack which remains 0/4 merged

**#19395** `permissions: finish profile-backed app surfaces` (head `pr19395` → base `main`, +295/−148 on 11 files, createdAt **2026-04-24T16:02:58Z**) merged at **2026-04-27T02:42:40Z** with mergeCommit `ad57a3fee20a30083a386abb959db89bf5961912`. Lifespan **2d10h39m42s**.

This **falsifies P192a** (synth #192's stated prediction: "abhinav-oai #19739 merges before #19395 within 24h of 01:26:00Z, probability ~0.55"). At the moment #19395 merges (02:42:40Z, +1h16m40s into the 24h window), abhinav-oai #19739 remains OPEN at lifespan **1h37m31s** (createdAt 01:05:09Z). The prediction's directionality is inverted: **#19395 cleared first while #19739 remains open**. P192a is recorded as falsified at +1h16m40s into the window.

**Companion merge: #19394** `permissions: remove core legacy policy round trips` (head `pr19394` → base `main`, +235/−305 on 13 files, createdAt 2026-04-24T16:02:56Z) merged earlier at **2026-04-27T00:43:33Z** with mergeCommit `2cb8746457d7c9e57c3cc42fecf05996453ca43d`. Lifespan **2d8h40m37s**. Sibling created **2 seconds before** #19395 (16:02:56Z vs 16:02:58Z), but cleared **1h59m07s before** its sibling.

**Stack-on-top still dormant.** The chained stack opened 00:40:17Z–00:40:21Z (#19734 base=`main`, #19735 base=`pr19734`, #19736 base=`pr19735`, #19737 base=`pr19736`) remains 0/4 merged at Add.76 close 03:03:06Z, lifespan **2h22m45s–2h22m49s**. Both **flat foundation siblings** (#19394, #19395 — both head=`pr<num>`, both base=`main`, opened 2 seconds apart **before** the new chained stack) merged in this Add.74→Add.76 lookback, while none of the **chained-on-top tiers** has merged. The author's own merge ordering: foundation-siblings-first, chained-stack-last. See synth #197.

**Falsification context:** P192a's premise was "fast small-PR detached from main beats slow chained PR" — but the test ran against the wrong PR. #19395 is itself a **flat sibling on main** (head=`pr19395`, not chained), not a chained-stack tier. The actual chained stack (#19734–#19737) is still 0/4 merged, so P192a's underlying intuition ("flat-on-main beats chained") still holds — the falsification is that **another flat-on-main PR (#19395) cleared before #19739 did**, not that any chained PR beat #19739.

## openai/codex — andmis sibling-merge pair #19605/#19733 with 37m56s inter-merge gap and inverted size ordering (51-file 222-line-deletion lands 37m before 1-file 7-line-deletion)

Two andmis self-merge events in this lookback window:

- **#19605** `Delete unused ResponseItem::Message.end_turn` (head `andrey/delete-response-item-end-turn` → base `main`, +6/−222 on **51 files**, createdAt 2026-04-25T22:49:55Z) merged **2026-04-27T00:18:10Z** with mergeCommit `35bc6e3d0161bc322d7b36de1a150509ef9764bc`. Lifespan **1d1h28m15s**.
- **#19733** `Allow agents.max_threads to work with multi_agent_v2` (head `andrey/allow-agents-max-threads-for-mult` → base `main`, +0/−7 on **1 file**, createdAt 2026-04-27T00:30:47Z) merged **2026-04-27T00:56:06Z** with mergeCommit `1f304dd1f2c87f907aa56cbf076a846f4d013b9a`. Lifespan **25m19s**.

Inter-merge gap: 00:18:10Z → 00:56:06Z = **37m56s**. The **51-file mass-deletion** (228 churn) lands first, the **1-file 7-line config-only deletion** lands second. The size ordering is inverted relative to typical "small-fast big-slow" expectation — the 51-file PR was open 1d1h28m before merge while the 1-file PR shipped in 25m19s. This is consistent with synth #191 (maintainer-attention-as-per-PR-content-gated, not size-gated) but adds a same-author intra-window data point: andmis's merge attention prioritizes by PR-age-readiness, not file-count.

**#19733 was opened 12m37s after #19605 merged**, suggesting the small follow-up PR was staged after the big-cleanup merge cleared. Same-author **landfall-then-followup** within 38m on the same surface (`agents`/`multi_agent_v2` runtime).

## QwenLM/qwen-code — pomelo-nwu #3607 MERGED to feature-base (`feat/openrouter-auth`, not `main`) at 02:05:09Z; DragonnZhang #3593 MERGED to `main` at 00:29:51Z; sibling-merges to **different bases** in single 1h35m18s window

Two qwen-code merges in the Add.76 lookback against **divergent base branches**:

- **#3593** `feat(cli): Add argument-hint support for slash commands` (DragonnZhang, head `feat/argument-hint` → base **`main`**, +259/−20 on 24 files, createdAt 2026-04-24T09:29:03Z) merged **2026-04-27T00:29:51Z** with mergeCommit `534ca986eb8c…`. Lifespan **2d15h0m48s**.
- **#3607** `feat(cli): Improve custom auth wizard with step indicators…` (pomelo-nwu, head `feat/custom-api-key-auth-wizard` → base **`feat/openrouter-auth`**, +1427/−16 on 8 files, createdAt 2026-04-25T03:36:51Z) merged **2026-04-27T02:05:09Z** with mergeCommit `d7ef4565bca4…`. Lifespan **1d22h28m18s**.

The pomelo-nwu pair (parent `feat/openrouter-auth` is itself **#3576**, an OPEN PR with +5519/−120 on 42 files, createdAt 2026-04-24T04:16:55Z, currently 2d22h46m old) is a **child-PR-merges-into-parent-PR-branch-while-parent-stays-open** topology. The 1427-line auth-wizard child has now been merged INTO an open-but-unmerged feature-branch parent. Compares with synth #188's "chained base" topology: there, each tier's base is the previous tier's head; here, **the child closes (merge) but the parent it was based on stays OPEN against `main`**. Until #3576 itself merges to `main`, the #3607 changes are not on the qwen-code mainline.

**Inter-merge gap:** #3593 (base=main) → #3607 (base=feat-branch) = **1h35m18s**. Two qwen-code feat-class merges in 1h35m18s, **on different bases**, by **different authors**.

## QwenLM/qwen-code — three-PR ancient-close sweep at 02:06:11Z / 02:08:11Z / 02:17:52Z; ages 254/194/38 days; 3-PR signature with non-uniform inter-event gaps (2m00s, 9m41s)

Three CLOSED-without-merge events on aged qwen-code PRs:

| PR | Title | createdAt | closedAt | Age at close |
|---|---|---|---|---|
| #348 | `feat(openaiContentGenerator): Avoid quantized models on OpenRouter` | 2025-08-15T23:20:46Z | **02:06:11Z** | **254d2h45m** |
| #816 | `fix(core): handle null command in IDE detection` | 2025-10-15T09:46:44Z | **02:08:11Z** | **194d16h21m** |
| #2504 | `fix: prevent /model command from overwriting externally-added settings` | 2026-03-19T13:49:35Z | **02:17:52Z** | **38d12h28m** |

Inter-close gaps: 02:06:11Z → 02:08:11Z = **2m00s**, 02:08:11Z → 02:17:52Z = **9m41s**. The first two events are exactly **120 seconds apart** (suggesting paged review-and-close cadence), the third is 9m41s later (likely manual continuation after a context-switch). Cardinality: 3 closes, **3 distinct authors** (mgalgs, RenzMc, Br1an67), **3 distinct surfaces** (`openaiContentGenerator`, IDE detection, settings persistence). Not a stale-bot signature (synth #98 had sub-10s n=3) — this is a **maintainer manual triage burst** on the **age axis**, sweeping from oldest (254d) to youngest (38d) of the three. See synth #198 for ancient-close-as-context for the cross-author sibling-fix collision in the same window.

## QwenLM/qwen-code — yiliang114 #3646 CLOSED at 02:04:24Z while shenyankm #3647 OPEN: cross-author sibling-fix collision on shared 6-of-8 file overlap, sticky-todo bug surface, 2m27s open-gap, late-opener survives

Two cross-author PRs targeting the same `sticky todo` bug:

| PR | Author | Title | createdAt | closedAt | State | Diff | Files |
|---|---|---|---|---|---|---|---|
| #3646 | yiliang114 | `fix(cli): stabilize sticky todo redraws` | 2026-04-26T14:49:00Z | **2026-04-27T02:04:24Z** | CLOSED | +288/−44 | 9 |
| #3647 | shenyankm | `fix(cli): keep sticky todo panel compact` | 2026-04-26T14:51:27Z | (open) | OPEN | +463/−37 | 8 |

Open gap: **2m27s** (#3647 opens 2m27s after #3646). #3646 closes at lifespan **11h15m24s**, never merged. #3647 still open at lifespan **12h11m39s** at Add.76 close.

**File-set overlap (6 of 8 #3647 files appear in #3646):**

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
| `packages/cli/src/ui/utils/todoSnapshot.ts` | yes | yes |

7-file core overlap, with #3646 carrying 2 extra layout-test files and #3647 carrying 1 extra `AppContainer.test.tsx`. Same `packages/cli/src/ui/` subtree. Late-opener (#3647, 463-line diff) survives the cull, early-opener (#3646, 288-line diff) is closed-without-merge after 11h15m of overlap. **Larger-diff later-opener wins** — the inverse of the synth #196 qwen-code shrunk-resubmit signature (where shrinkage ⇒ merge). See synth #198.

## sst/opencode — alfredocristofano triplet resubmits #24541/#24543/#24544 base=`dev` (not `main`); originals #24522/#24523/#24524 also base=`dev`; close-and-reopen preserves base-branch in addition to byte-identical diff

Verifying base-branch on the synth #196 byte-identical reopen triplet (alfredocristofano):

| Closed PR | Closed base | Reopen PR | Reopen base | Closed at | Open at |
|---|---|---|---|---|---|
| #24522 | `dev` | #24543 | `dev` | 2026-04-26T21:13:12Z | 2026-04-26T22:56:19Z |
| #24523 | `dev` | #24544 | `dev` | 2026-04-26T21:13:10Z | 2026-04-26T22:56:27Z |
| #24524 | `dev` | #24541 | `dev` | 2026-04-26T21:13:08Z | 2026-04-26T22:53:31Z |

All six PRs target base `dev`, not `main`. The reopen preserves not only the byte-identical diff (synth #196) and byte-identical title, but **also the exact base branch**. The reopen ordering is **scrambled relative to original-open and original-close**: original-close ordered #24524 (21:13:08) → #24523 (21:13:10) → #24522 (21:13:12) — i.e., original-close is **reverse-of-original-open** at 1-2 second granularity (last-opened closes first). Reopen ordering: #24541 (22:53:31) → #24543 (22:56:19) → #24544 (22:56:27) — restores **original-open ordering of (3rd, 1st, 2nd)** but with non-uniform gaps (2m48s, 0m08s vs original 1m10s, 1m38s). Three PRs, three distinct base→head route preservations across close-and-reopen, all on `dev`.

All three reopens (#24541, #24543, #24544) remain OPEN at Add.76 close 03:03:06Z, lifespans **6m49s–10m37s** (wait — recalculating: createdAt 22:53:31Z → 03:03:06Z = **4h9m35s** for #24541; 22:56:19Z → 03:03:06Z = **4h6m47s** for #24543; 22:56:27Z → 03:03:06Z = **4h6m39s** for #24544). At Add.76 close, the resubmit triplet is at lifespan **~4h6m–4h10m**, 0/3 merged.

## cline/cline — gatof81 #9996 (docs link fix, 31-day age, 3-line trivial diff) CLOSED at 00:15:48Z; only cline/cline event in Add.76 window

**#9996** `fix: update broken Getting Started link (for-new-coders → quick-start)` (createdAt 2026-03-26T21:58:17Z, +3/−3 on 3 files) closed-without-merge at **2026-04-27T00:15:48Z**. Lifespan **31d2h17m31s**.

A **3-line trivial doc-link fix** sits unmerged for 31 days then is closed. The cline/cline repo's only Add.76-window event is this aged-trivial-close — no opens, no merges. Compares with the qwen-code 3-PR ancient-triage-burst on the **age axis** (above), but on cline/cline this is a single PR not a sweep, and the diff is 3 lines (vs qwen-code averaging 84 lines / 5.7 files across the three closed PRs). **Trivial-link-fix-rotted-on-vine** signature: tiny diff + zero conflict risk + still aged out to 31-day close-without-merge.

## BerriAI/litellm — same-second 19264/19333 close pair at 00:11:49Z/00:11:51Z (2-second gap), then 1h33m05s gap before next litellm event (russellbrenner #26566 open at 01:44:54Z)

Two ancient-PR closes in litellm at near-same-second:

| PR | createdAt | closedAt | Age | Title |
|---|---|---|---|---|
| #19333 | 2026-01-19T09:12:54Z | **2026-04-27T00:11:49Z** | **98d14h58m** | `chore: map Vertex IMAGE_PROHIBITED_CONTENT to content_filter` |
| #19264 | 2026-01-17T03:29:40Z | **2026-04-27T00:11:51Z** | **100d20h42m** | `fix: Model Management UI: Filter non-providers and non-functional` |

Inter-close gap: **2 seconds**. Both authors distinct (Leo-Adrian-Code, nehaaprasad). Both base=`main`. Order: #19333 (newer-opened, closed first) → #19264 (older-opened, closed second). **Inverse-age close ordering** at 2-second granularity. Compares with synth #98's bot-driven sub-10s n=3 across heterogeneous dependency surfaces — this is **n=2 across heterogeneous infra surfaces** (Vertex content-filtering vs Model Management UI), not a known stale-bot pattern (no `[Bot]` or auto-close marker visible in titles). Likely manual maintainer page-2-of-staleness sweep. **Adjacent-second sibling close on cross-surface aged PRs** is now the third such observation in the W17 corpus (with #98's sub-10s and the qwen-code 02:06–02:17Z 3-PR burst above).

## Window closure summary

- **Merges in window:** 5 (openai/codex #19394, #19395, #19605, #19733; qwen-code #3593, #3607). Update: 6 merges (re-counting: codex 4 + qwen 2 = 6).
- **Opens in window:** 0 (no new PRs in 02:34:00Z → 03:03:06Z; #26568 opened at 02:33:43Z just before window).
- **Closes-without-merge in window:** 7 (litellm #19333, #19264; cline #9996; qwen-code #3651-implied closed earlier, #3646, #348, #816, #2504; opencode triplet originals closed earlier).
  - Strictly inside Add.76 window 02:34:00Z–03:03:06Z: 0 closes (all closes occurred earlier in lookback).
  - Strictly inside Add.74→Add.76 lookback: 7 closes counted above.
- **Active prediction state:**
  - **P192a (synth #192) FALSIFIED** at 2026-04-27T02:42:40Z, +1h16m40s into 24h window. #19395 merged before #19739 cleared. Recorded.
- **W17 first-of-kind events surfaced:**
  - (a) **Foundation-siblings-merge-while-chained-stack-on-top-stays-open** — bolinfest #19394 (00:43:33Z) and #19395 (02:42:40Z) merged with 1h59m07s sibling-gap, while #19734–#19737 chained stack remains 0/4 merged at 2h22m49s. Same author, same week, same `permissions:` topic. See synth #197.
  - (b) **Cross-author sibling-fix collision with shared file-set on bug surface** — yiliang114 #3646 closed (288 lines, 9 files) while shenyankm #3647 (463 lines, 8 files, 6-file overlap with #3646) survives. Late-opener-wins, larger-diff-wins. See synth #198.
  - (c) **Adjacent-second cross-author cross-surface ancient-close pair** — litellm #19333/#19264 closed 2 seconds apart with inverse-age ordering on heterogeneous surfaces. Third W17 instance of this signature (with synth #98's sub-10s n=3 and the in-window qwen-code 02:06–02:17 3-PR triage-burst).
  - (d) **Child-merges-into-open-feature-parent topology** — qwen-code #3607 merged to base `feat/openrouter-auth` (=`#3576` head, still OPEN) while #3593 merged to `main` in the same 1h35m18s window. Two distinct merge-targets within the same repo, same window.
- **Author cardinality in 02:34:00Z–03:03:06Z strict window:** 1 (bolinfest, who merged #19395 at 02:42:40Z; only event strictly in-window).

