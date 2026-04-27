# ADDENDUM-91 — 2026-04-27

**Capture window:** 12:43:52Z → 13:24:30Z (UTC). Window width: **40m38s**.
**Predecessor:** ADDENDUM-90 (closed 12:43:52Z; seeded synth #100 — qwen-code dreamWB N=3 same-SHA closed-refile prelude — and synth #101 — jif-oai N=2 self-merge inside 61m on adjacent semantic surface, non-LIFO selection).

## Headline event — jif-oai self-merge sprint EXTENDS to N=4 within 102m19s

The Add.90 prediction (#2 medium-confidence: jif-oai #19809 OR #19805 merges by Add.91 extending synth #101 to N=3) **is confirmed AND exceeded — N=4 by capture**:

| # | PR | merge SHA | Branch / surface | Merged (UTC) | Δ from #19792 |
|---|---|---|---|---|---|
| 1 | codex #19792 | `f8c527e529` | `jif/clean-multi-agent-v2-config` (small, +152/-22) | 11:31:57Z | 0 |
| 2 | codex #18982 | `da83ab554a` | `jif/memories-on-file-system` (substitution, +1074/-1053, 21 files) | 12:32:45Z | +60m48s |
| 3 | codex #19809 | `5d314f324c` | `jif/multi-agent-v2-allow-claims-after-retry` (Phase 2 retry exhaustion) | 12:58:12Z | +86m15s |
| 4 | codex #19812 | `79b4f691a6` | `jif/avoid-rewriting-phase2-on-clean-workspace` | 13:14:16Z | +102m19s |

The non-LIFO selection property (Add.90 obs from synth #101 seed) **partially weakens at N=3**: #19809 was the **newest** jif-oai PR opened post-merge (head `01b82885`, opened during Add.90 window). The author returned to LIFO at N=3. But at N=4, #19812 (`2fc7a2bfb4`, "Avoid rewriting Phase 2 selection on clean workspace") is a **net-new branch not visible in Add.90 open-PR snapshot** — i.e., opened-and-merged inside this window, fastest possible cycle. **The selection regime mutates across the sprint:** N=2 non-LIFO (resumed older), N=3 LIFO (newest open), N=4 zero-lifespan (open→merge inside same window). The hypothesis must be revised: synth #101 is not a stable selection regime but a **selection-regime cascade** where each successive merge has progressively smaller open-state evidence available.

Open-tail: jif-oai #19813 (`2225f4fdd5`, "nit: one more fix") is **OPEN at capture**, presumably the N=5 candidate. If it merges by Add.92, the sprint reaches N=5 within ~150m of #19792.

## New merges since ADDENDUM-90 cutoff (12:43:52Z)

| Repo | PR | SHA (short) | Author | Merged (UTC) | Lines | Time-into-window |
|---|---|---|---|---|---|---|
| openai/codex | #19809 | `5d314f324c` | jif-oai | 12:58:12Z | (Phase 2 retry exhaustion) | +14m20s |
| openai/codex | #19812 | `79b4f691a6` | jif-oai | 13:14:16Z | (Phase 2 clean workspace guard) | +30m24s |

Two merges, **both jif-oai, both codex**. No other repo broke silence in-window. **codex's open queue is monopolized by a single author session**, with five other repos contributing zero merges over 40m38s.

## Per-repo trailing-silence at capture (13:24:30Z)

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Δ vs Add.90 |
|---|---|---|---|---|
| openai/codex | #19812 `79b4f691a6` | 13:14:16Z | **10m14s** | RESET (was 11m07s) |
| QwenLM/qwen-code | #3661 `8349b8569e` | 12:28:17Z | 56m13s | +40m38s |
| anomalyco/opencode | #24592 `61eabfc60c` | 09:02:28Z | **4h22m02s** | +40m38s, **CROSSED 4h boundary at 13:02:28Z as Add.90 pred #1 forecast** |
| block/goose | #8856 `d8e4b55d16` | 10:31:41Z | 2h52m49s | +40m38s |
| BerriAI/litellm | #26545 `3d2b8fed32` | 2026-04-26T03:07:01Z | 34h17m29s | +40m38s |
| google-gemini/gemini-cli | #25942 `31bdf112d2` | 2026-04-24T21:55:46Z | **63h28m44s** | +40m38s |

**Cell occupancy at capture:**
- 0–4h cell: {codex (10m14s), qwen-code (56m13s), block/goose (2h52m49s)}
- 4–24h cell: {anomalyco/opencode (4h22m02s)}
- ≥24h cell: {litellm (34h17m), gemini-cli (63h28m)}

Add.90 pred #1 (anomalyco/opencode crosses 4h at 13:02:28Z) **CONFIRMED** — anomalyco/opencode is now the sole 4–24h cell occupant. block/goose did NOT join the 4–24h cell as Add.90 speculated; goose remains in 0–4h.

## Falsification check on ADDENDUM-90 predictions

1. **Pred #1** (anomalyco/opencode crosses 4h silence at 13:02:28Z): **CONFIRMED.** Cell shape at capture: anomalyco/opencode singleton in 4–24h. The "doublet with goose" sub-prediction did NOT materialize because goose silence is only 2h52m.
2. **Pred #2** (jif-oai #19809 OR #19805 merges by Add.91, extending synth #101 to N=3): **CONFIRMED AND EXCEEDED — N=4 reached.** Discriminator outcome: #19809 merged (the newest), then #19812 (a brand-new branch not in Add.90 snapshot) merged. The "non-LIFO" property of synth #101 **mutates across the sprint** — see headline section above. Synth #101 is upgraded from "static selection regime" to **"selection-regime cascade"**.
3. **Pred #3** (bolinfest pr19772–19776 reaches 6h-from-open marker with no force-push and no merge): **CONFIRMED — chain remains 5 PRs OPEN, no merge, no force-push, 6h marker passed at 13:14:28Z–13:22:27Z inside this window.** All five entries unchanged from Add.89 era. **Closure-or-supersession by Add.92** still expected.
4. **Pred #4** (litellm #26598 + #26593 non-ASCII-header convergent fix duo merges in same window): **NOT TRIGGERED.** Neither merged — litellm mainline silence persists at 34h17m. Both PRs remain OPEN; #26598 (`45336b0179`, zyz23333) and #26593 (`c1323e20d9`, weiguangli-io) are **still convergently fixing the same problem on different HTTP clients (httpx vs aiohttp)**, both with `headRefOid` unchanged from Add.90 capture. **Convergent-independent-author fix-duo pattern strengthens via persistence** — both PRs are stable, neither author has abandoned. Re-arm pred for Add.92.
5. **Pred #5** (gemini-cli breaks silence by Add.91 OR persists past 64h at 13:55:46Z): **NEGATIVE-PRED CONFIRMED IN-WINDOW; 64h MARKER STILL OPEN.** Silence at capture 63h28m44s, 27m02s shy of the 64h mark. Will cross during Add.92 window with high probability.
6. **Pred #6** (dreamWB opens or files a follow-up to qwen-code #3661 by Add.91): **FALSIFIED — NO dreamWB ACTIVITY IN WINDOW.** qwen-code's open queue head is shenyankm #3677, LaZzyMan #3673, chiga0 #3680/#3671 — no dreamWB entries. **Synth #100's per-author specificity strengthens**: the N=3-closed-refile pattern was a one-shot resolution event for dreamWB, not a session opener.

## codex monopoly window — six-repo capture, one-author origin

The Add.91 window is structurally degenerate: **2/2 merges in window came from a single author (jif-oai) on a single repo (codex)**. This is a **single-author monopoly window** — distinct from the Add.88 multi-author wave or Add.90's two-repo split (codex + qwen-code).

Cumulative single-author monopoly count for jif-oai across the 11:31:57Z → 13:24:30Z continuous capture (Add.89→90→91): **4/5 merges, 80% authorship concentration over 1h52m33s**. The fifth merge (qwen-code dreamWB #3661) is in a different repo. **Within codex alone, jif-oai accounts for 4/4 merges over 1h42m19s** — a perfect intra-repo single-author wall.

This qualifies for synth-novel territory: same-author N=4 self-merge sprint **exhausting the visible open queue** within 102 minutes. Synth #120 candidate (see synth file).

## Cross-repo open-PR firehose snapshot (top per repo at capture)

- **codex #19813** (jif-oai, "nit: one more fix", `2225f4fdd5`): N=5 candidate. If merges by Add.92, sprint reaches N=5.
- **codex #19807** (vb-openai, `a37adea0`): unchanged from Add.90, **stale 1h+** in a window where another author did 2 merges. Cross-author starvation.
- **codex #19805** (jif-oai, `dfa03848`): **unchanged headRefOid from Add.90.** The "newer #19809 merged before older #19805" outcome **confirms the selection-regime cascade hypothesis**: at the N=3 transition, the author DROPPED #19805 from the active queue rather than resuming it.
- **codex #19797** (aibrahim-oai, `f8e2beea`): also unchanged, unrelated to jif sprint, stale.
- **codex #19778** (abhinav-oai, `d5539f43`): unchanged.
- **codex #19772–19776** (bolinfest 5-PR chain): unchanged at capture, **6h-stalled past 13:14:28Z marker**, prediction confirmed.
- **anomalyco/opencode #24618** (leandrosnx, `c11a6d4745`, "fix: guard against undefined MCP tool output causing output.split crash"): **NEW top of queue** — opened post-Add.90.
- **anomalyco/opencode #24614** (SeashoreShi, `7d35c9abbd`, "docs(it): fix duplicated word in CLI env var table"): NEW i18n docs-only.
- **anomalyco/opencode #24605** (rachadaccoumeh, `bd300d4d78`, "fix: show MCP tool arguments in permission dialog"): **content-overlap with #24618** — both touching MCP tool surface. **Convergent-independent-author MCP-tool fix duo** in opencode, parallel to litellm's #26598/#26593 non-ASCII-header duo.
- **anomalyco/opencode #24595** (andocodes, `a82448915f`): unchanged from Add.90.
- **anomalyco/opencode #24612** (ricardofiorani, `36157b68d4`): unchanged.
- **qwen-code #3680** (chiga0, `5b220a520a`, "feat(cli): expand TUI markdown rendering"): NEW top of queue.
- **qwen-code #3677** (shenyankm, `77c53e05a2`): unchanged from Add.90.
- **qwen-code #3675** (YlLVTECH, `7ea2d3ae67`, "Add support for `<think>` tags in OpenAI-compatible responses"): **content-overlap with #3677** (shenyankm "fix(openai): parse MiniMax thinking tags"). **Third convergent-independent-author fix duo** of the day, all on `<think>`-tag/thinking-content parsing surface. With litellm's non-ASCII-header duo and opencode's MCP-tool duo, **today shows three independent convergent-fix duos across three repos.** This is synth #121 territory.
- **litellm #26601, #26600** (Bytechoreographer, `2d02176c9f` / `cde26af188`): TWO Bytechoreographer PRs back-to-back, both UI-fix-shaped. Sub-author session in litellm staging.
- **litellm #26598** (zyz23333, `45336b0179`): unchanged from Add.90.
- **litellm #26593** (weiguangli-io, `c1323e20d9`): unchanged.
- **block/goose #8857** (jh-block, `95a5facfa1`, "Preserve thinking content for providers that require it"): **fourth `<think>`/thinking-content surface today** — joins qwen-code #3677/#3675. Cross-repo thinking-content trio (qwen-code #3677, qwen-code #3675, goose #8857) on **same semantic surface across 3 repos**. Synth #121 strengthens.
- **gemini-cli #26043, #26042, #26041** (Ultron09 trio): unchanged. Three-PR Ultron09 stale stack, all open, all from Add.88. Author-monopoly without merges (mirror image of codex's jif-oai author-monopoly with merges).

## Predictions for ADDENDUM-92

1. **Highest-confidence**: jif-oai sprint reaches N=5 via #19813 merge (or stalls; #19813 looks tiny, "nit: one more fix" — typical end-of-sprint cleanup PR). If #19813 merges, sprint = N=5 within ~150m. If it stalls, sprint stops at N=4 — author exits sprint via natural end.
2. **Highest-confidence**: gemini-cli crosses 64h silence marker at 13:55:46Z (31m16s post-capture). Negative-pred default: silence persists, 64h crossed, 65h marker challenged.
3. **Medium-confidence**: at least ONE of the three convergent fix-duos resolves in-window via either merge of one half, close of one half, or merge of both. Specifically: litellm #26598/#26593 (non-ASCII headers), opencode #24618/#24605 (MCP tool surface), qwen-code #3677/#3675 (thinking tags) — six PRs total, prediction is ≥1 status change among the six. **Discriminator**: which duo resolves first reveals which repo prefers convergent merge vs convergent close.
4. **Medium-confidence**: bolinfest pr19772–19776 chain undergoes status change (close, supersession, OR force-push) by Add.92 — **prediction-3 deadline extended one window**. The chain is now 6h+ stalled with zero activity; statistically unlikely to merge as-is.
5. **Medium-confidence**: anomalyco/opencode breaks 5h silence boundary at 14:02:28Z (38m post-capture). If it doesn't, opencode joins the 5h+ silence club for first time today.
6. **Speculative**: a fourth convergent-fix-duo emerges by Add.92 on a different surface, OR the cross-repo thinking-content trio (qwen-code #3677/#3675 + goose #8857) becomes a quartet via opencode or codex contribution. This would promote synth #121 from trio to quartet.
7. **Speculative**: litellm Bytechoreographer back-to-back PRs (#26601, #26600) merge or close as a pair — sub-author session resolution test.

## Cross-references

- **Synth #100** (Add.90 seed; qwen-code dreamWB N=3 same-SHA closed-refile prelude): **per-author specificity confirmed by Add.91 negative pred #6** — dreamWB filed nothing further. The pattern is a one-shot resolution event, not a session opener.
- **Synth #101** (Add.90 seed; jif-oai N=2 self-merge inside 70m, non-LIFO, substitution-shape): **upgraded by Add.91 to selection-regime cascade.** N=2 non-LIFO, N=3 LIFO, N=4 zero-lifespan-open-and-merge. Selection mutates monotonically toward shorter-lived candidates as the sprint exhausts visible queue.
- **Synth #120 candidate** (this addendum): same-author N=4 self-merge sprint exhausting visible open queue within ~100min, with selection-regime mutating across N=2/3/4 transitions (codex jif-oai 11:31:57Z–13:14:16Z). Distinct from #101 in that #101 captures only the N=2 step while #120 captures the full cascade.
- **Synth #121 candidate** (this addendum): cross-repo same-day convergent-independent-author fix-duo MULTIPLICITY — three duos (litellm non-ASCII-headers, opencode MCP-tool-surface, qwen-code thinking-tags) plus a cross-repo trio (qwen-code/goose thinking-content) all open simultaneously. Distinct from synth #82 (duplicate-PR convergence) in that #82 is intra-repo and #121 is cross-repo at the duo-multiplicity level.
- **Synth #218** (Grammar inventory): jif-oai's 4 self-merge branches all Grammar B (`jif/<kebab>`); per-author grammar consistency holds at N=4.
- **ADDENDUM-90 pred #6** (litellm main-base merge): persists at **34h17m mainline dormancy**. Internal-staging-only regime now 34h+ sustained. The Bytechoreographer sub-author session in #26601/#26600 is staging-base, not mainline.

(Two Add.91-seeded synths promoted in `_weekly/`: #120 — codex jif-oai N=4 self-merge sprint with selection-regime cascade; #121 — three-duo same-day convergent-fix multiplicity across litellm/opencode/qwen-code with cross-repo thinking-content trio.)
