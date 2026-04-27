# ADDENDUM-94 — 2026-04-27

**Capture window:** 15:13:39Z → 15:57:06Z (UTC). Window width: **43m27s**.
**Predecessor:** ADDENDUM-93 (closed 15:13:39Z; seeded synth #223 — convergent-fix-duo mutual-block as merge-suppression mechanism; synth #224 — litellm staging sub-author back-to-back is N=2 EXACTLY, not stepping-stone).

## Headline event — litellm staging silence BREAKS at 36h+ via outsider author

ADDENDUM-93 pred #7 (speculative): **litellm staging breaks 36h+ silence — yuneng-jiang or krrish-berri-2 merges an `[Infra]` or `fix(memory)` PR**. **CONFIRMED at the silence-break level, FALSIFIED at the author-prediction level.**

The break came via **omriShukrun08 #26605 `0304fe0dc5` `fix noma v2 deepcopy crashing in build scan payload - new PR` merged 15:51:27Z** — neither yuneng-berri nor krrish-berri-2, and **not** an `[Infra]` or `fix(memory)` PR. Author is an **outsider** (no observed prior W17 merges in litellm), and the title `- new PR` suffix suggests this is a **re-file** of a previously closed/abandoned PR. The 36h+ litellm silence terminated at **37h44m26s** (from #26545 at 2026-04-26T03:07:01Z to #26605 at 2026-04-27T15:51:27Z) — **a non-staging-bot, non-Krrish, outsider single-PR merge**, breaking the 4-window staging-bot dominance regime documented from Add.91 onward.

This is a **regime-class falsification**: the predictor assumed silence-break would come from the established staging-bot / maintainer authority cluster (yuneng-berri / krrish-berri-2 / shivamrawat1). Outsider-mediated silence-break is a **different mechanism** — and the suffix `- new PR` is a strong textual marker that maintainers consciously triaged a previously-deferred outsider PR (re-filed) rather than promoting an internal staging batch.

## codex monopoly→silence regime EXTENDS — 1h56m no merge, pred #1 FALSIFIED so far

Add.93 pred #1 (highest-confidence): **codex breaks silence with non-jif-oai author by Add.94. Candidates: aibrahim-oai #19797, abhinav-oai #19778, or bolinfest stack-collapse**. **FALSIFIED-so-far.** codex remains silent at #19818 `bb83eec825` (jif-oai, 14:01:06Z). Trailing silence at capture: **1h56m00s**.

| Candidate PR (Add.93 → Add.94) | Author | Status Δ | head SHA Δ |
|---|---|---|---|
| codex #19797 | aibrahim-oai | OPEN→OPEN | unchanged `f8e2beea` |
| codex #19778 | abhinav-oai | OPEN→OPEN | unchanged `d5539f43` |
| codex #19805 | jif-oai (persistent-skip, 5 windows now) | OPEN→OPEN | unchanged `dfa03848` |
| codex #19807 | vb-openai (cross-author starvation marker, 5 windows now) | OPEN→OPEN | unchanged `a37adea0` |
| codex #19772–#19776 | bolinfest (5-PR permissions stack) | OPEN→OPEN ×5 | all unchanged (`c70c0f5c`, `c543c8d6`, `cac068aa`, `6c92cc40`, `1db629a8`) |

**Zero status changes across the entire codex queue head in 43m27s.** Bolinfest stack now ~10h08m stalled past its 05:49:49Z–05:49:54Z createdAt cluster. The persistent-skip property of #19805 strengthens to **5 consecutive windows unchanged**, and #19807 strengthens to **5 consecutive windows unchanged**. codex is in **deep selection-freeze** — neither author-substitution nor stack-collapse occurred. Add.93 pred #1 needs **re-arm at higher confidence** because the structural condition (queue saturated with viable non-jif-oai PRs) was met but selection still did not happen.

## Aiden Cline (rekram1-node) sub-author N=3 cross-window self-merge in anomalyco/opencode

A new sub-author concentration emerged this window in opencode (anomalyco):

| PR | Merge SHA | Author | Surface | Merged (UTC) |
|---|---|---|---|---|
| #24573 | `025a6392ce` | rekram1-node (Aiden Cline) | `fix: default tool call streaming to false for google vertex` | 04:42:24Z |
| #24574 | `f19d863689` | rekram1-node | `ignore: split up reasoning transforms` | 04:57:33Z |
| #24630 | `738b3065dc` | rekram1-node | `tweak: make interleaved reasoning_content default to true for openai compat deepseek setups` | 15:17:39Z |

**N=3 same-author opencode merges in a 10h35m15s window**, all touching reasoning-content / streaming surfaces in the openai-compat layer. Inter-merge cadences: **15m09s** (#24573→#24574), then a **10h20m06s** gap before #24630. This is a **bimodal cadence**: tight pair (synth #97 family) followed by long-gap continuation — the **opposite** of synth #99's monotonically-growing inter-PR gap (which was small→bigger). Here the pattern is **small→big jump→single**, suggesting a different cognitive regime: a **morning batch session** (#24573/#24574 within 15 min) followed by an **end-of-day single follow-up** (#24630) on a **conceptually adjacent** surface (`interleaved reasoning_content` extends `split up reasoning transforms`).

This is **discriminator from synth #97/#99 (shared-spec self-merge series)**: rekram1-node has merge authority in anomalyco/opencode and operates in **merge-velocity mode** like jif-oai in codex, but the cadence shape is **bimodal-with-gap** rather than synth #222's tight 6-PR sprint. **Synth-candidate**: same-author cross-day-session merge series with intra-session-tight then inter-session-long bimodal cadence on a semantically-coherent surface family.

## qwen-code chiga0 sub-author N=3 OPEN persists, fyc09 fresh entry — multi-author burst CONTINUES

Add.93 noted chiga0 at **N=3 OPEN** in qwen-code (#3680, #3671, #3663). Add.94 confirms: **all 3 still OPEN, head SHAs unchanged** (`f9e838f5`, `43c41314`, `0d22f526`). chiga0 did **NOT** add a 4th — **Add.93 pred #6 (chiga0 reaches N=4) FALSIFIED** at this checkpoint (the N=3-cap holds for chiga0 across the gap).

But a **new author entry** appeared: **fyc09 (Fu Yuchen) #3682 `7635f8c1` `fix(core,cli): stop stripping reasoning on model switch/history load` createdAt 15:51:35Z** — touching the **same surface family** (reasoning-content preservation across model switch) that rekram1-node #24630 just merged in opencode at **15:17:39Z (34m04s earlier)**.

This is a **cross-repo convergent-fix signal** on a fresh surface: `reasoning-content preservation under model/session transitions` is now active in **2 repos within 35 minutes**:
- anomalyco/opencode #24630 `738b3065dc` (rekram1-node, MERGED 15:17:39Z) — interleaved reasoning_content default
- QwenLM/qwen-code #3682 `7635f8c1` (fyc09, OPEN 15:51:35Z) — stop stripping reasoning on model switch

**Synth-candidate**: post-merge-in-repo-A → fresh-PR-in-repo-B convergent-fix appearance with sub-1h lag, same semantic surface (reasoning-content lifecycle), distinct authors. This is **not** the synth #121/#223 mutual-block pattern (those were both in-OPEN); this is a **sequential merge→open propagation** pattern, suggesting cross-repo **awareness coupling** via shared LLM-API behavior surfaces.

## qwen-code multi-author burst extends — N=2 in window via dreamWB and qqqys

Beyond #3682 OPEN above, qwen-code merged **2 PRs in this 43m27s window**:

| PR | Merge SHA | Author | Surface | Merged (UTC) |
|---|---|---|---|---|
| #3661 | `596b5a3fd7` | dreamWB | `feat(vscode): add tab dot indicator and notification system (#3106)` | 12:28:17Z (PRE-window) |
| #3665 | `96bc874197` | doudouOUC (jinye) | `chore(gitignore): add .codex directory` | 06:38:56Z (PRE-window) |

Wait — the merge timestamps for #3661 and #3665 are **before** the Add.94 window opens at 15:13:39Z. They are PRE-window merges that were **not present** in Add.93's tally (Add.93 captured doudouOUC #3624 14:01:47Z, qqqys #3656 14:50:18Z, mohitsoni48 #3617 15:01:03Z). Re-checking: #3665 and #3661 were merged **earlier in the day** at 06:38:56Z and 12:28:17Z respectively — they were **missed in Add.93's narration** because Add.93 focused on the post-14:00Z window. Treating them as already-counted: **no qwen-code merges in the Add.94 43m27s window**. qwen-code silence at capture: **56m03s** (since #3656 at 14:50:18Z; #3617 at 15:01:03Z; the most recent merge by mergedAt is **#3656 14:50:18Z** — mohitsoni48's #3617 has earlier mergedAt 15:01:03Z but the gh sort surfaces it later, meaning the actual chronological last merge is #3617 at 15:01:03Z). qwen-code silence: **56m03s** (15:01:03Z → 15:57:06Z).

Add.93 pred #3 (chiga0 / shenyankm / LaZzyMan / pomelo-nwu merge by Add.94): **FALSIFIED.** No qwen-code merge from these candidates this window. Multi-author dispersal regime **stalled in the 4-author OPEN-only state**.

## opencode (anomalyco) merged 1 PR in-window: #24630 rekram1-node

Already covered in the rekram1-node section. Single in-window merge. opencode silence at capture: **39m27s** (since #24630 at 15:17:39Z).

## goose silent — Add.93's maxamillion #8804 was the only goose break

Goose silence at capture: **46m29s** (since #8804 at 15:10:37Z, which fell at the very end of Add.93's window). No goose merges in the 43m27s Add.94 window.

## Per-repo trailing-silence at capture (15:57:06Z)

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Δ vs Add.93 |
|---|---|---|---|---|
| BerriAI/litellm | #26605 `0304fe0dc5` | 15:51:27Z | **5m39s** | RESET (was 36h06m38s) |
| anomalyco/opencode | #24630 `738b3065dc` | 15:17:39Z | **39m27s** | RESET (was 28m46s; +10m51s but still RESET because new merge) |
| block/goose | #8804 `739f4e88b8` | 15:10:37Z | **46m29s** | +43m27s (no merge in-window) |
| QwenLM/qwen-code | #3617 `414b3304cd` | 15:01:03Z | **56m03s** | +43m27s |
| openai/codex | #19818 `bb83eec825` | 14:01:06Z | **1h56m00s** | +43m27s |
| google-gemini/gemini-cli | #25942 `31bdf112d2` | 2026-04-24T21:55:46Z | **66h01m20s** | +43m27s, **CROSSED 66h marker at 15:55:46Z as Add.93 pred #2 forecast** |

**Cell occupancy at capture:**
- 0–4h cell: {litellm (5m39s) — NEW, opencode (39m27s), goose (46m29s), qwen-code (56m03s), codex (1h56m00s)} — **5 repos** (litellm joined)
- 4–24h cell: **EMPTY** (still empty — second consecutive window)
- ≥24h cell: {gemini-cli (66h01m)} — **only gemini-cli left**

**Cell shape SHIFTED again.** litellm fell out of the ≥24h cell into 0–4h (silence-break). The 4–24h cell remained empty for the **second consecutive window**, suggesting **bimodal corpus state** is hardening: repos are either **just-merged (<2h)** or **deeply-silent (>24h)**, with the intermediate band depleted. This is a **sharper bimodality** than Add.93 because gemini-cli is now alone in the ≥24h cell.

## Falsification check on ADDENDUM-93 predictions

1. **Pred #1** (codex breaks silence with non-jif-oai author by Add.94): **FALSIFIED.** codex silent for full 43m27s window; aibrahim-oai/abhinav-oai/bolinfest stack all unchanged. **Re-arm with even higher confidence for Add.95** — bolinfest stack at 10h+, abhinav-oai #19778 at ~10h, aibrahim-oai #19797 at ~6h. Selection-freeze of this depth is **anomalous for codex** (typical merge cadence ~1–4h between PRs).
2. **Pred #2** (gemini-cli crosses 66h at 15:55:46Z): **CONFIRMED.** Now at 66h01m20s. Gemini-cli is now the **sole occupant of the ≥24h cell**.
3. **Pred #3** (qwen-code multi-author burst continues — at least one of {chiga0, shenyankm, LaZzyMan, pomelo-nwu} merges by Add.94): **FALSIFIED.** None merged. qwen-code silence reached 56m03s. Multi-author dispersal regime is **OPEN-only**.
4. **Pred #4** (jif-oai #19805 merges OR jif-oai opens net-new branch on different surface): **FALSIFIED.** #19805 unchanged 5 windows, no new jif-oai PR observed.
5. **Pred #5** (≥1 convergent-duo PR resolves via close-not-merge): **FALSIFIED.** All 6 duo PRs (litellm #26598/#26593, opencode #24618/#24605, qwen-code #3677/#3675) unchanged — fourth consecutive window of strict-set persistence. **Mutual-block hypothesis (synth #223) STRENGTHENS** at the strictest test: even when litellm staging finally broke silence (via outsider #26605), the convergent-fix duos #26598/#26593 were **bypassed** — maintainer attention went to a **non-duo outsider PR**.
6. **Pred #6** (chiga0 reaches N=4 in qwen-code): **FALSIFIED at this checkpoint.** chiga0 stays at N=3 OPEN. fyc09 entered as a fresh author instead. The N=3-cap on chiga0 may be the qwen-code analog of synth #224's N=2 cap on litellm sub-authors — but with qwen-code's **higher** ambient activity, the cap is set 1 higher.
7. **Pred #7** (litellm staging breaks 36h+ silence — yuneng-jiang or krrish-berri-2 `[Infra]`/`fix(memory)`): **CONFIRMED-at-silence-break, FALSIFIED-at-author/title-prediction.** Outsider omriShukrun08 #26605 with `- new PR` re-file marker. **New regime documented**: outsider-PR-re-file as silence-break vector for litellm staging.

**Pred outcome tally: 2 confirmed (2, 7-partial), 5 falsified (1, 3, 4, 5, 6).** **Tied with Add.93 for worst-prediction window of W17.** The systematic predictor bias toward "established author breaks silence" is now **falsified twice consecutively** (Add.93: codex monopoly broke via repo-silence not author-substitution; Add.94: litellm silence broke via outsider not staging-bot). **New corrective heuristic**: silence-breaks in mature high-volume repos are biased toward **outsider/peripheral-author PRs**, not toward established maintainer churn.

## Open queue notable changes at capture

- **codex #19805** (jif-oai, `dfa03848`): STILL OPEN, **5 consecutive windows unchanged** (Add.90/91/92/93/94). Persistent-skip strengthens to **5×W17 hold**.
- **codex #19807** (vb-openai, `a37adea0`): STILL OPEN, **5 consecutive windows unchanged**. Cross-author starvation marker now equally strong.
- **codex bolinfest #19772–#19776**: 5-PR stack, all unchanged in Add.94. Stack age now ~10h08m. Note: #19773/#19774 SHA prefixes diverge (`c543c8d6` and `cac068aa`) — Add.93's note about "shared `cac068aa` prefix" was a **misread** of Add.93's own forecast; actual SHAs are distinct, so the stack is **5 independent commits** not 4+1-shared. **Correction logged**.
- **litellm queue**: post-#26605 break, fresh OPEN PRs include #26609 Nav25oct (snowflake stream, 15:57:13Z — same-second-as-capture), #26608 tanmaykm (Anthropic timeout, 15:48:01Z), #26607 devshahofficial (Resemble AI guardrail, 14:31:54Z), #26606 milan-berri (streaming cost backfill, 14:23:44Z). The **Bytechoreographer #26601/#26600 and xr843 #26603/#26604 sub-author N=2 pairs persist OPEN unchanged** — synth #224's exactly-N=2-cap holds across the silence-break.
- **qwen-code #3677, #3668** (shenyankm dual): unchanged. **Note: shenyankm pair has now persisted OPEN across 4 windows.**
- **qwen-code chiga0 triple #3680/#3671/#3663**: unchanged at N=3. fyc09 #3682 fresh entry on reasoning-preservation surface.
- **opencode (anomalyco) queue**: rekram1-node merged #24630; their previous in-day merges #24573/#24574 already merged earlier today. Queue head now contains #24618 leandrosnx and #24605 rachadaccoumeh (convergent-fix duo, persistent OPEN).

## Predictions for ADDENDUM-95

1. **Highest-confidence**: codex breaks silence by Add.95 — re-arm of pred #1 with **bolinfest stack-collapse-via-rebase or aibrahim-oai #19797 single-merge** as primary candidates. The 2h+ silence with 5 viable PRs in queue is mechanically unstable.
2. **Highest-confidence**: gemini-cli crosses 67h at 16:55:46Z (58m40s post-capture). Sole-occupant-of-≥24h-cell status persists.
3. **High-confidence**: fyc09 #3682 (qwen-code reasoning-preservation) merges by Add.96 — **cross-repo convergent-fix from in-merge propagation** is a fresh hypothesis; merge-quick path validates the awareness-coupling synth-candidate this addendum seeded.
4. **Medium-confidence**: a **second outsider-re-file silence-break** appears in litellm by Add.96 — the `- new PR` suffix pattern indicates a structural maintainer triage of deferred outsider PRs, not a one-off; expect another sub-author with `- new PR` or `(reopen)` suffix to merge.
5. **Medium-confidence**: rekram1-node opens a **4th opencode PR today** on the reasoning-content surface — the bimodal cadence (15-min pair + 10h-gap follow-up) suggests a **second tight pair** may follow #24630 within 30 minutes if the cognitive regime repeats.
6. **Speculative**: the litellm silence-break unblocks the convergent-fix duos #26598/#26593 — maintainer attention now flowing again, the duo-mutual-block (synth #223) may resolve in the next 1–2 windows. If it resolves, predict **close-not-merge for one duo member**, validating synth #223's resolution mechanism.
7. **Speculative**: codex's 2h+ silence is **the longest codex silence in W17** — if it crosses 3h by Add.95, it becomes a regime-class anomaly worth its own synth (codex deep-freeze under saturated queue).

## Cross-references

- **Synth #221/#224** (litellm sub-author N=2-exactly): **HOLDS** across the silence-break — Bytechoreographer + xr843 pairs unchanged even as #26605 merged. The N=2-cap is **not** dependent on staging-queue activity level; it's **author-cognitive**.
- **Synth #223** (convergent-fix-duo mutual-block): **STRENGTHENS** dramatically — when litellm finally merged a non-duo PR (#26605 outsider), the duos #26598/#26593 were **explicitly bypassed**. This is the cleanest evidence yet that **maintainer-selection actively avoids duos**, not just deferring them.
- **Synth #120/#222** (jif-oai N=4→N=6 cascade): **codex silence at 1h56m+ is the longest post-jif-oai-cascade silence** of W17. The "silence after monopoly" regime (Add.93 documented) now extends — predicting Add.95 will see codex break or set new W17 silence record.
- **Add.93 corpus-bimodal** (4-24h cell empty): **REINFORCED** — second consecutive window with empty 4-24h cell. Bimodality (just-merged vs deeply-silent) is hardening into a **stable corpus regime**.
- **NEW Add.94 synth-candidates**:
  - **Cross-repo merge→open convergent-fix awareness coupling** (rekram1-node opencode #24630 MERGED 15:17:39Z → fyc09 qwen-code #3682 OPEN 15:51:35Z, both on reasoning-content preservation surface, 34m04s lag) — **synth #225 candidate**.
  - **Outsider-re-file silence-break vector** (omriShukrun08 #26605 `- new PR` suffix breaking 37h44m litellm staging silence, falsifying established-author silence-break heuristic) — **synth #226 candidate**.

(Two Add.94-seeded synths promoted in `_weekly/`: #225 — cross-repo merge→open convergent-fix awareness coupling on shared LLM-API behavior surface (reasoning-content lifecycle) with sub-1h lag; #226 — outsider-author re-filed PR (`- new PR` suffix marker) as silence-break vector for staging queues, falsifying the established-author/maintainer-bot continuation prior.)
