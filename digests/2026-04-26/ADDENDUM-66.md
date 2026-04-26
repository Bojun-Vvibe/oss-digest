# 2026-04-26 ADDENDUM-66

**Window:** 2026-04-26T19:14:16Z → 2026-04-26T19:51:04Z (36m48s — narrows back from Add.65's 50m12s by 27%; window-width creep chain breaks at 4 — sequence is now 28m → 30m → 36m → 50m → 36m48s).

## openai/codex — bolinfest stack DORMANCY ENDS at 19:43:44Z; rebase#24 + downstream merge fire same-second-window, P-171.B FALSIFIED on third confirmation attempt

- **#19683** `test: harden app-server integration tests` by **bolinfest** — head `0b157cc21772eff817eab1437dd8ab671f13a2e9` (unchanged from Add.60's 16:04:18Z commit), **MERGED 2026-04-26T19:43:16Z** (28m60s into window). This is the **stack-leaf merge** — bolinfest's app-server hardening PR lands without a final rebase, head-SHA frozen since 16:04:18Z (3h39m wall-clock between final commit and merge).
- **#19606** `permissions: make runtime config profile-backed` by **bolinfest** — head rolled `c966040ae7d1` → **`04805fb788a373be223e37e72c438ec22775830a`** at **19:43:44Z**. **rebase#24** of the permissions stack fires.
- **#19395** `permissions: finish profile-backed app surfaces` — head rolled to `869706f8703a8ae553d79633fe9e7c7dc3a84ce8` at **19:43:45Z** (1s after #19606).
- **#19392** `permissions: derive compatibility policies from profiles` (base `pr19606`) — head rolled to `5d0500420b2fd501d42459db081e5d488865342d` at **19:43:45Z**.
- **#19394**, **#19393** also updated 19:43:59-19:44:03Z (full 4-PR cascade refresh, Type-D2-style same-second metadata wave on the 4-deep child stack).
- **Dormancy duration:** rebase#23 fired 15:34:33Z (per Add.62), rebase#24 fired 19:43:44Z → **4h09m11s** total dormancy, **+175% over synth #166's 90m33s envelope**. This is the **largest single inter-rebase gap observed in W17** (eclipses Add.61's 90m33s by 2.75x).
- **P-171.B status:** the prediction was "no rebase#24 within next single-window horizon (≤55min from each addendum close)." Confirmed in Add.64 (no fire by 18:24Z) and Add.65 (no fire by 19:14Z). Add.66 horizon = window-close 19:51:04Z; rebase#24 fired at 19:43:44Z — **inside** the Add.65→Add.66 horizon at 29m28s. **P-171.B FALSIFIED** after exactly 2 confirmations. The author-specific dormancy snapped via a coordinated event: stack-leaf merge (#19683) + permissions-stack rebase (#19606+#19395+#19392) + child-stack metadata cascade (#19394, #19393) all within a **45-second band** (19:43:16Z–19:44:03Z).
- **Coupling shape:** the merge of #19683 at 19:43:16Z preceded the rebase#24 of #19606 by 28s. This is the **first observed M+R coupling** (merge-then-rebase within sub-30s) in the bolinfest stack — prior rebases #1–#23 were R-only events with no co-located merge. See synth #177 and #178.

## openai/codex — efrazer-oai #19650 surfaces as PARENT of shijie-oai's just-merged #19635 — full collaboration-topology snapshot

- **#19635** `Fix agent identity runtime auth flow` by **shijie-oai** (base `dev/efrazer/agent-identity-env-jwt`) — **MERGED 2026-04-26T19:24:58Z** (10m42s into window). Add.65 documented this PR as OPEN with the cross-author shared-branch topology; it merged into efrazer's branch within 21m of Add.65 close.
- **#19650** `feat: verify agent identity JWTs` by **efrazer-oai** (base **main**) — head `6e797a075d2aa5cb49f6a611ede1e6a5446844d0` rolled at **19:36:21Z** (22m05s into window), **OPEN**, +474/-273, 29 files. createdAt 2026-04-26T07:43:15Z (11h53m old). This is the **parent integration PR** that aggregates `dev/efrazer/agent-identity-env-jwt` (the branch shijie-oai contributed to via #19635) back to main. The surfacing of #19650 makes the **full cross-author shared-branch topology** observable end-to-end:
  - efrazer-oai opens main-targeted #19650 (07:43:15Z)
  - shijie-oai opens branch-targeted #19635 (04:48:26Z, 2h55m before #19650)
  - shijie-oai's #19635 merges into efrazer's branch (19:24:58Z)
  - efrazer's #19650 head rolls 11m23s later (19:36:21Z) — picks up shijie-oai's contribution.
- This **inverts** the bolinfest topology: bolinfest's stack is single-author self-stacked (#19606→pr19606→pr19392→pr19393→pr19394). The efrazer/shijie-oai pair is **multi-author shared-branch with branch-owner integration step**. Both are "non-main integration branch" patterns (synth #175) but with opposite authorship topology.

## QwenLM/qwen-code — B-A-M-N #3645 SECOND in-window CI-trigger empty commit; depth-mode pattern hardens

- **#3645** by **B-A-M-N** — head rolled `cfaf5a10aadc` → **`8a742c5b693bcff7939b9cd38141411b61cd1d39`** at **19:32:11Z** (17m55s into window). Commit message: **`chore: trigger clean CI build`**. This is the **second CI-trigger empty commit in 2 consecutive windows** on the same PR (Add.65 had `cfaf5a10` `trigger CI` at 19:06:34Z; Add.66 has `8a742c5b` `chore: trigger clean CI build` at 19:32:11Z, 25m37s later).
- **2 CI re-rolls in 25m37s on a single PR** with NO substantive head-roll between them. This is a **CI-flake retry sub-pattern** within the depth-mode classification (synth #176) — the depth-mode is now decomposable into (a) substantive deep-edit commits (`4f7a1aa4` type-cleanup in Add.65), and (b) CI-retry empty commits (Add.65 + Add.66). The CI-retry commits are functionally **identical to bot-driven sweep events** (synth #98) but human-authored.
- B-A-M-N has rolled head **3 times in 1h05m** (18:26:19Z `4f7a1aa4` substantive → 19:06:34Z `cfaf5a10` CI-trigger → 19:32:11Z `8a742c5b` clean-CI-build). Sustained-edit-with-CI-retry session continues into 3rd window.

## sst/opencode, BerriAI/litellm, cline/cline, charmbracelet/crush, block/goose, All-Hands-AI/OpenHands, Aider-AI/aider — silent

- **opencode silent 2 consecutive windows** (Add.65–66) after Add.64's 4-event burst. Wake-burst-rest cadence on opencode now extends to 2-window rest, matching synth #167's 3-silent-then-burst priors.
- **litellm silent 1 window** after Add.65's afoninsky #25371 stale-touch. someswar177 #26551 on litellm_oss_branch now **2h22m07s stale** (last update was Add.62/63 era). Synth #172 P-172.A clock at window 2 of 4 (still 0 new litellm_oss_branch PRs).
- **cline silent 3 consecutive windows** (Add.64–66).
- **goose silent 2 consecutive windows**.
- **crush silent 6 consecutive windows**.
- **OpenHands silent 6 consecutive windows**.
- **aider silent 12 consecutive windows** (Add.55–66).

## Cross-repo cardinality: active-repo set at n=2, partial overlap with Add.65

Active-repo set Add.66: **{codex, qwen-code}**.
- Add.65 active set: {codex, qwen-code, litellm} (n=3).
- Add.66: {codex, qwen-code} (n=2) — **partial overlap** (codex+qwen-code retained, litellm dropped). **First non-zero-overlap turnover after the Add.63→64→65 zero-overlap chain**. The 2-consecutive-zero-overlap regime breaks at exactly 2 windows.
- Persistence shape: codex+qwen-code now **persistent for 2 consecutive windows** — this is the **first persistent-pair observation in the post-Add.63 turnover regime**. Synth #171's persistent-core hypothesis was double-falsified through Add.65; Add.66 begins a **micro-recovery** at pair-scale (n=2 persistent core, smaller than synth #171's claimed n=3 core).

## Window summary

- **2 merges** (codex #19683, codex #19635) — first multi-merge window since Add.64.
- **6 PR-state-change/update events** across 2 repos (codex: #19683 merge, #19635 merge, #19606 head-roll, #19395 head-roll, #19392 head-roll, #19394+#19393 metadata, #19650 head-roll; qwen-code: #3645 head-roll). Codex dominates with 7 of 8 events.
- **0 strict-new-opens in window**.
- **bolinfest stack dormancy ENDS** at 4h09m11s — synth #166 envelope breached at +175% then snapped via M+R coupling. P-171.B falsified.
- **B-A-M-N depth-mode CI-retry sub-pattern** confirmed across 2 consecutive windows.
- **efrazer/shijie-oai cross-author shared-branch topology** fully observable end-to-end.

PRs cited: codex #19683 / #19606 / #19635 / #19650 / #19395 / #19392 / #19394 / #19393; qwen-code #3645; cross-ref litellm #26551 / #25371 (silent reference). Cross-ref opencode #24519 / #24518 (Add.64 silent).
