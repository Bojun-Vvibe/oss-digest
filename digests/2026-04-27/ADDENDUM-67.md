# 2026-04-27 ADDENDUM-67

**Window:** 2026-04-26T19:51:04Z → 2026-04-26T20:30:28Z (39m24s — re-narrows from Add.66's 36m48s by +7%; window-width walk 28m → 30m → 36m → 50m → 36m48s → 39m24s remains in the 35–40m basin, no creep resumption). First addendum filed under date `2026-04-27/` (UTC date roll).

## openai/codex — bolinfest permissions stack-LEAF #19606 MERGES 20:29:55Z; M+R becomes M+R+M triple within 46m11s

- **#19606** `permissions: make runtime config profile-backed` by **bolinfest** — head `04805fb788a373be223e37e72c438ec22775830a` (the same SHA produced by rebase#24 at 19:43:44Z, per Add.66), **MERGED 2026-04-26T20:29:55Z** (38m51s into window, 33s before window close). **No further head-rolls between rebase#24 and merge** — the rebase#24 SHA lands as-is. Time from rebase#24 to merge: **46m11s**.
- **Coupling shape evolves M+R → M+R+M:** Add.66 documented the unprecedented M+R coupling (#19683 merge at 19:43:16Z + #19606 rebase#24 at 19:43:44Z, 28s gap). Add.67 closes the loop with **M(#19606) at 20:29:55Z** — the rebased PR itself merges 46m11s after its rebase. Full triple sequence:
  - 19:43:16Z M (#19683 stack-leaf merge)
  - 19:43:44Z R (#19606 rebase#24)
  - 20:29:55Z M (#19606 merge) — **+46m11s from R, +46m39s from first M**
- This is the **first complete M+R+M cluster** in the bolinfest stack. Synth #166's "rebase-only metronome" framing of inter-rebase-gaps is now superseded: the bolinfest stack alternates between (a) pure-rebase intervals and (b) **action-triggered rebase-followed-by-merge sequences** where rebase#N is the precursor for merge of the rebased PR within ≤1 hour.
- **Stack residual:** the four child PRs (#19395, #19392, #19394, #19393) all rolled at 19:43:45–19:44:03Z (Add.66) tracking #19606. With #19606 now merged into main, the child stack has lost its `pr19606` base and **must rebase** in the next window — this is the first stack-collapse trigger observed for this stack family.

## openai/codex — strict-new-open BURST: 3 PRs in 8m10s window (20:14–20:22Z) by 3 distinct authors, all main-targeted

- **#19705** `Discover hooks bundled with plugins` by **abhinav-oai** — head `b2f2c98a7cf7ded3337971cb9176022e7384356f`, base `main`, createdAt **2026-04-26T20:14:06Z** (22m02s into window), updatedAt 20:23:14Z. Single-author, branch `dev/abhinav/plugin-hooks-discovery`.
- **#19706** `Preserve TUI markdown list spacing after code blocks` by **etraut-openai** — head `a63f48f94325e024339ab29147587b89f8ad771b`, base `main`, createdAt **2026-04-26T20:19:52Z** (28m48s into window). 5m46s after #19705. etraut-openai's **6th main-targeted single-author open in <22 hours** (#19618, #19620, #19625, #19630, #19631 all from 2026-04-25T19–04-26T03 era — see Add.66 surrounding context).
- **#19707** `Fix remote compaction with deferred dynamic tools` by **pash-openai** — head `211efa66c21d59159368acf8c614377e2cc2867b`, base `main`, createdAt **2026-04-26T20:22:16Z** (31m12s into window). 2m24s after #19706, 8m10s after #19705. **First pash-openai surface observation in W17.**
- **3-author 8m10s burst** is the densest cross-author strict-new-open cluster in W17 since synth #92's same-second four-PR open tuplet (which was single-author). This **inverts** the synth #92 shape: same-second/single-author → 8-minute-band/three-author. See synth #179.

## sst/opencode — wakes from 2-window silence with 4 strict-new-opens (19:57–20:30Z); kitlangton stack DORMANT (no merges since 16:24Z)

- **#24528** `fix(tui): startup rejection handling` by **simonklee** — head `029ab835852c42eb5a1eee1f4ba4e60552c3c271`, createdAt 19:57:19Z (6m15s into window). First wake event.
- **#24531** `upgrade opentui to 0.1.104` by **kommander** — head `69dda83c2bd62fcce3fbf1b33051b5a3fa11a579`, updatedAt 20:26:26Z. Dependency-bump sub-class.
- **#24532** `feat(tui): show background task status in sidebar and fix 0ms duration label` by **darianstlex** — head `b79d5ee037fa15bf6d0a9935285d1b6bf0b00393`, updatedAt 20:28:35Z.
- **#24533** `docs: add comprehensive architecture documentation suite` by **jarek108** — head `6a78509a5cf1f16472a36a87e5db7e8273784a5f`, updatedAt 20:30:38Z (window-close +10s; counted in next window if strict).
- **kitlangton 8-PR `feat(httpapi)` series** (#24478, #24483, #24484, #24485, #24486, #24487, #24500-docs, #24510) all merged in a **15:12:05Z–16:24:20Z 1h12m15s ladder** during Add.63-era window. **No new kitlangton activity in 4h06m** (since #24510 merge at 16:24:20Z) — kitlangton stack now in **dormancy** matching the bolinfest pre-rebase#24 shape but without the precursor-rebase signal.

## QwenLM/qwen-code — B-A-M-N #3645 SILENT; 4-PR open backlog stable (no head-rolls in window)

- **#3645** B-A-M-N — head `8a742c5b693bcff7939b9cd38141411b61cd1d39` unchanged since 19:32:11Z (Add.66). The 3-rolls-in-65m sustained-edit session has **paused at the 58m mark** post Add.66 close.
- Open backlog: #3636 (JahanzaibTayyab, 07:43Z), #3637 (wenshao, 13:44Z), #3642 (wenshao, 16:59Z), #3645 (B-A-M-N, 19:32Z), #3646/#3647 (yiliang114/shenyankm, 15:25Z/16:38Z), #3648 (B-A-M-N, 17:28Z), #3649 (yiliang114, 16:49Z). No window activity.
- B-A-M-N now author of **2 open qwen-code PRs** (#3645, #3648) — first multi-PR concurrent-author observation for B-A-M-N.

## BerriAI/litellm — silent 2 consecutive windows; #26551 stale clock advances

- **#26551** someswar177 (litellm_oss_branch base) — last touch 17:28:36Z, now **3h01m52s stale** (was 2h22m07s in Add.66). Synth #172 P-172.A clock at **window 3 of 4** (still 0 new litellm_oss_branch PRs since #26551).
- **#26550** zyz23333 (litellm_oss_branch) — also stale since 13:47Z (6h43m).
- litellm now silent for both Add.66 and Add.67 — matches the synth #141 codex+litellm drought-lock pattern but **codex is currently the most active repo**, breaking the symmetric drought-lock.

## cline, charmbracelet/crush, block/goose, All-Hands-AI/OpenHands, Aider-AI/aider — silent

- cline: 4 consecutive silent windows (Add.64–67).
- goose: 3 consecutive.
- crush: 7 consecutive.
- OpenHands: 7 consecutive.
- aider: 13 consecutive (Add.55–67) — **longest single-repo silence streak in W17**.

## Cross-repo cardinality: active-repo set jumps to n=3, kitlangton-bolinfest dormancy inversion

Active-repo set Add.67: **{codex, opencode}** strictly (qwen-code had 0 in-window head-rolls; #3648/#3645 backlog only). Counting opencode-wake as activity:
- Add.66 active set: {codex, qwen-code} (n=2).
- Add.67 active set: **{codex, opencode}** (n=2) — **codex retained, qwen-code dropped, opencode wakes**. This is the **third consecutive 1-overlap turnover** (Add.65→66 was 2-overlap; Add.66→67 returns to 1-overlap).
- Codex now **persistent for 3 consecutive windows** — first 3-window-persistent repo in the post-Add.63 turnover regime. Falsifies any reading of synth #163's "two-active-repo regime collapse" as a permanent state; codex is forming a single-repo gravity well.

## Window summary

- **2 merges** (codex #19606, #19683 already counted Add.66 — strictly Add.67 has 1: #19606). **Last-second merge** (38m51s of 39m24s window).
- **3 strict-new-opens in codex** (#19705, #19706, #19707) — densest cross-author burst in W17.
- **3-4 strict-new-opens in opencode** (#24528, #24531, #24532, #24533).
- **Total ≥6 strict-new-opens in window** — highest open-rate window since synth #92.
- **bolinfest M+R+M triple** completes; child stack now needs rebase (collapse trigger armed).
- **kitlangton dormancy at 4h06m** — first dormancy observation for opencode top-ladder author.
- **codex 3-window persistence** establishes single-repo gravity well.

PRs cited: codex #19606 / #19683 / #19395 / #19392 / #19394 / #19393 / #19705 / #19706 / #19707; opencode #24510 / #24500 / #24487 / #24486 / #24485 / #24484 / #24483 / #24478 / #24528 / #24531 / #24532 / #24533; qwen-code #3645 / #3648 / #3636 / #3637 / #3642 / #3646 / #3647 / #3649; litellm #26551 / #26550 (silent reference).
