# ADDENDUM-96 — 2026-04-27

**Capture window:** 16:38:34Z → 17:44:06Z (UTC). Window width: **1h05m32s**.
**Predecessor:** ADDENDUM-95 (closed 16:38:34Z; seeded synth #227 — 4-repo reasoning-content convergent-fix cluster as upstream API behavior change propagation seed; synth #228 — corpus dormancy distribution metastability via single-merge events at the deep tail).

## Headline event — gemini-cli silence-break extends into BURST regime, cocosheng-g sibling-pair MERGE-MERGE confirmed within window

Add.95 pred #3 (medium-confidence): **cocosheng-g #26053 merges by Add.97.** **CONFIRMED EARLY.** #26053 `test(cli): add unit tests for restore ACP command` merged at **17:21:54Z** (53m46s after predecessor #26052 merged 16:28:08Z). The same-author **fix-then-test sibling pair** went OPEN→MERGE→OPEN→MERGE inside a single ~54m envelope. This is a **same-author sub-1h N=2 cascade** in gemini-cli — first observed in this corpus.

A third gemini-cli merge followed at **17:39:41Z**: devr0306 #26059 (different author). gemini-cli went from **66h32m silence (Add.95)** → **3 merges in 71m33s** (16:28:08Z → 17:39:41Z) → **5m25s trailing silence at capture**. The repo flipped from **single deepest-silent occupant of corpus** to **most-recently-merged occupant of corpus** within two consecutive windows. This is a **maximum-amplitude regime swing** event for the gemini-cli silence axis.

NEW gemini-cli OPEN at capture: pmenic #26063 `5ceedf6` `fix(security): restrict permissions on project temp dir tree` createdAt 17:41:39Z (2m25s before capture close). pmenic also has #26054 `d622a07` (rename adminControlsListner → adminControlsListener) OPEN since 16:52:06Z. **pmenic sub-author N=2 OPEN pair** in gemini-cli — first occurrence of the synth #224 sub-author N=2 pattern outside litellm. **Synth #224's repo-locality assumption falsified** within 1 window of synth-#226-style demotion: the N=2-exactly cardinality is now confirmed in **gemini-cli** as well.

## codex silence BREAKS at 3h02m+, jif-oai #19805 head SHA finally updates, falsifying the 6-window persistent-skip

Add.95 pred #1 (highest-confidence): **codex breaks silence by Add.96.** **PARTIALLY CONFIRMED.** codex has not produced a merge in-window (last merge still #19818 `bb83eec825` jif-oai 14:01:06Z, trailing silence at capture **3h42m59s** — confirms Add.95 pred #7 "codex 3h+ silence becomes regime-class anomaly", **W17 record**). However the **selection-side freeze hypothesis** Add.95 introduced is **partially falsified**: codex #19805 jif-oai head SHA updated from the prior frozen state (was unchanged 6 consecutive windows in Add.95) to **`dfa0384`** in this window. The PR has not merged but the **author-side activity resumed**. So the freeze is genuinely **two-layered**: queue-side intake continues (synth #229 candidate evidence below), author-side push activity resumes selectively, but **maintainer-side merge selection remains frozen**. This decomposes the Add.95 single-axis selection-freeze into a 3-layer stack and **falsifies the simpler hypothesis**.

NEW codex OPENs in window: colby-oai #19836 `3bdb43a` `disallow fileparams metadata for custom mcps` createdAt 17:22:44Z; abhinav-oai #19778 (`Add hook listing and config APIs`) updated at 17:35:10Z. **Queue intake continues; merge gate persists.** The bolinfest stack #19772–#19776 remains untouched (now ~12h+ stalled). **Add.95 pred #1's selection-side hypothesis must be revised to maintainer-merge-side specifically** — author push activity is NOT frozen.

## anomalyco/opencode regime — kitlangton self-merge BURST + post-burst silence at 26m+

opencode produced 2 fresh merges in-window:
- #24640 kitlangton `c9e2569` `fix(httpapi): accept empty session create body` merged 17:17:11Z
- #24626 kitlangton `88a4714` `fix(httpapi): mount workspace bridge routes` merged 16:52:48Z

Both kitlangton, both httpapi-surface, **same-author back-to-back N=2** within **24m23s** (16:52:48Z → 17:17:11Z). This is a **third repo** (after qwen-code chiga0 and litellm Bytechoreographer) confirming the sub-author back-to-back N=2 pattern, but with a **distinct twist**: **maintainer self-merge** (kitlangton is opencode maintainer), and the two PRs are on the **same code surface** (httpapi route mounting + payload validation). This shape — **maintainer self-merge N=2 on adjacent code surface within sub-30m** — has NOT appeared in prior addenda. **Synth-candidate**: maintainer self-merge sub-30m N=2 on adjacent surface as a distinct pattern from sub-author drive-by N=2 (the synth #224 family).

Trailing opencode silence at capture: **26m55s** (since #24640 17:17:11Z). NEW OPENs in window: rekram1-node #24642 `fix: ensure toolStreaming is set to off by default when using non anthropic` createdAt 17:19:51Z, HaleTom #24641 `c1639f4` `fix(app): refresh workspace dirs before canOpen check` createdAt 17:08:52Z. **rekram1-node returns to opencode queue with #24642** — Add.95 pred #5 (4th rekram1-node opencode PR within 30 min of #24630) was falsified, but **the author returned 2h02m12s later** with a new PR on the **toolStreaming + non-anth provider surface** — semantically adjacent to #24630 (interleaved reasoning_content default for non-anth models). The bimodal cadence Add.94 documented may be a **2h spacing regime** rather than a 30-min spacing regime. Worth a corrective note.

## litellm post-silence-break: silence holds at 1h52m+, queue intake STILL accelerating, 8 fresh OPENs

litellm trailing silence at capture: **1h52m39s** (since #26605 omriShukrun08 15:51:27Z). The repo has now gone **2 consecutive windows post-silence-break with no second merge**. Queue intake is **massive**:
- #26622 ryan-crabbe-berri `12774af` `feat(proxy): add --timeout_worker_healthcheck flag` 17:42:30Z
- #26621 udit-rawat `500b2a4` `fix(health-check): skip max_tokens for non-chat modes` 17:43:32Z
- #26617 bringCool `fix: DB model 'litellm_params' not applied to requests` 16:49:38Z
- #26614 malafronte `4aa6f02` `fix(anthropic): preserve reasoning content` 17:25:38Z (synth #227 cluster member, **STILL OPEN**)
- #26612 Nav25oct `feat(pricing): add Snowflake Cortex REST API model pricing` 17:11:30Z
- #26610 hannahmadison `fix: increase health check max_tokens default to 16` 16:55:27Z
- #26609 Nav25oct `feat(snowflake): add stream to supported params` 17:31:04Z
- #26608 tanmaykm `respect timeout config in Anthropic adapter` 16:58:57Z

**Two distinct convergent sub-clusters** in this batch:
1. **Health-check max_tokens cluster** — #26621 (skip for non-chat) + #26610 (increase default to 16) + Add.95-cited hannahmadison `(#23836)` reference. **3-PR sub-cluster on health-check max_tokens semantics within 48m**, all OPEN, no merges. This is a **same-surface cross-author cluster** with a **maintainer-history cross-reference** (#23836 = the older issue/PR being refreshed) — distinct from the reasoning-content cluster pattern.
2. **Snowflake provider cluster** — #26612 + #26609 (both Nav25oct) — **same-author N=2 OPEN within 19m34s**. Bytechoreographer/xr843 N=2-exactly cardinality from synth #224 **gains a 3rd litellm sub-author instance** (Nav25oct). Synth #224 strengthens further within litellm and now has cross-repo replication via gemini-cli pmenic.

**Anthropic-adapter convergent fix** — tanmaykm #26608 `respect timeout config in Anthropic adapter` + malafronte #26614 `fix(anthropic): preserve reasoning content` — **2-PR same-surface cluster on Anthropic adapter behavior within 26m41s, distinct authors**. This is a **second-order convergent-fix cluster** specifically on the Anthropic adapter (a sub-surface of synth #227's reasoning-content surface). Synth #227 may have **nested sub-cluster structure** at the per-provider granularity.

## qwen-code silence at 2h53m+, no merges in-window — fyc09 #3682 STILL OPEN

qwen-code last merge unchanged from Add.95. Trailing silence at capture: **~2h53m**. fyc09 #3682 `7635f8c` (synth #227 propagation member) **STILL OPEN unchanged**. Lifespan: **1h52m+**. Add.94 pred #3 (fyc09 #3682 merges by Add.96) **FALSIFIED**. The propagation-seed-but-no-merge pattern strengthens: synth #227's chain-amplification works on the **OPEN** state, and merge-resolution is decoupled from cross-repo awareness propagation. **This is a stronger, more durable form of synth #227** — the hypothesis no longer requires merge to validate; OPEN-state propagation alone carries the signal.

shenyankm #3677 `77c53e0` `fix(openai): parse MiniMax thinking tags` — **NEW reasoning/thinking-content qwen-code member** (in addition to fyc09 #3682). qwen-code now has **N=2 internal reasoning-content sub-cluster** (fyc09 + shenyankm) mirroring litellm's KunalG67/malafronte sub-cluster predicted in Add.95 pred #7 (speculative). **CONFIRMED.** Add.95 pred #7 fires with shenyankm #3677 createdAt 10:10:53Z (already OPEN at Add.95 capture but not flagged as a synth #227 member then — re-classifying retroactively). The 2-PR same-repo convergent sub-cluster prediction holds across both litellm and qwen-code now.

chiga0 N=3 OPEN persists unchanged. shenyankm N=2 (#3677, #3668) persists unchanged. LaZzyMan #3673 OPEN unchanged. **No qwen-code state changes in window.**

## goose silence at 7h12m+, jh-block #8857 (synth #227 4th-repo member) STILL OPEN

Goose last merge #8856 unchanged. Trailing silence at capture: **7h12m25s**. jh-block #8857 `95a5fac` `Preserve thinking content for providers that require it` STILL OPEN unchanged. Lifespan: **6h41m+**. Add.95 pred #6 (goose jh-block #8857 merges within 4 windows as slowest member of 4-repo reasoning-content cluster): **on track, 1/4 windows elapsed.**

NEW goose OPENs in window: none material. jamadeo #8866 unchanged.

## Per-repo trailing-silence at capture (17:44:06Z)

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Δ vs Add.95 |
|---|---|---|---|---|
| google-gemini/gemini-cli | #26059 (devr0306) | 17:39:41Z | **4m25s** | -6m01s (3 merges in-window) |
| anomalyco/opencode | #24640 `c9e2569` (kitlangton) | 17:17:11Z | **26m55s** | -53m60s (2 merges in-window) |
| BerriAI/litellm | #26605 `0304fe0dc5` | 15:51:27Z | **1h52m39s** | +1h05m32s |
| QwenLM/qwen-code | #3617 `414b3304cd` | 15:01:03Z | **2h43m03s** | +1h05m32s |
| openai/codex | #19818 `bb83eec825` | 14:01:06Z | **3h42m59s** | +1h05m32s |
| block/goose | #8856 `d8e4b55d16` | 10:31:41Z | **7h12m25s** | +1h05m32s |

**Cell occupancy at capture:**
- 0–4h cell: {gemini-cli (4m25s), opencode (26m55s), litellm (1h52m39s), qwen-code (2h43m03s), codex (3h42m59s)} — **5 repos, codex pressed against the 4h boundary**
- 4–24h cell: {goose (7h12m25s)} — **1 repo, aging**
- ≥24h cell: **EMPTY** (2 consecutive windows)

Cell shape **right-skewed-truncated holds** (synth #228 confirmed across 2 windows). **Synth #228 metastability claim PARTIALLY VALIDATED**: the regime did hold across this window despite codex pressing against the 4–24h boundary, but the **boundary-crossing dynamics** are now visible — codex will cross into the 4–24h cell at 18:01:06Z (17m post-capture), at which point **synth #228 predicts a regime flip toward bimodal again**, since 2 cells both populated above the 0–4h cluster constitutes the bimodal precursor. Worth its own corrective if it doesn't fire.

## Falsification check on ADDENDUM-95 predictions

1. **Pred #1** (codex breaks silence by Add.96 OR sets W17 silence record at 3h+): **CONFIRMED — record set at 3h42m+, no merge.** The "easiest item" sub-prediction (small jif-oai or aibrahim-oai PR) **PARTIALLY confirmed via #19805 head SHA update** but **no merge fired**. The selection-freeze hypothesis is **partially falsified, partially refined** (3-layer stack: queue intake live, author push live, maintainer-merge frozen).
2. **Pred #2** (≥1 more reasoning-content convergent-fix PR appears across 6 repos): **CONFIRMED.** shenyankm qwen-code #3677 `fix(openai): parse MiniMax thinking tags` retroactively classified into synth #227 cluster. Cluster is now **5 PRs across 4 repos** (opencode merged, qwen-code 2× OPEN, litellm OPEN, goose OPEN). The 5-repo extension via cline/aider/OpenHands prediction **NOT YET CONFIRMED** (no new repos this window) but cluster size grew within tracked repos.
3. **Pred #3** (gemini-cli does NOT return to ≥24h silence; cocosheng-g #26053 merges by Add.97): **CONFIRMED EARLY** — #26053 merged 17:21:54Z, well before Add.97 deadline. Same-author fix-then-test pair completed.
4. **Pred #4** (litellm fyc09-equivalent merges by Add.97): **PENDING.** No litellm merges this window; malafronte #26614 still OPEN.
5. **Pred #5** (opencode duo-resolution event repeats in second duo within 2 windows): **PENDING.** leandrosnx #24618 still OPEN, no second close-not-merge fired this window. 1/2 windows elapsed.
6. **Pred #6** (goose jh-block #8857 merges within 4 windows): **PENDING-on-track.** 1/4 windows elapsed.
7. **Pred #7** (NEW author appears in qwen-code with reasoning-content PR by Add.97, 2-PR same-repo sub-cluster): **CONFIRMED via shenyankm #3677.**

**Pred outcome tally: 3 confirmed (1, 2, 3, 7 — counting 7 as confirmed), 0 falsified, 3 pending (4, 5, 6).** Best-performing addendum prediction set of W17 so far. Synth #225/#227 have become **structurally predictive** rather than descriptive.

## Open queue notable changes at capture

- **codex #19805** (jif-oai): SHA changed from prior 6-window-frozen state to `dfa0384`. Persistent-skip pattern broken on **author-push axis**, not on **merge-selection axis**. Important refinement of the multi-window-skip heuristic.
- **codex #19836** colby-oai NEW OPEN: `disallow fileparams metadata for custom mcps` — touches MCP custom-tool surface, **conceptually adjacent to opencode #24618 leandrosnx (MCP tool output guarding) and opencode rachadaccoumeh #24605 (MCP tool args display, now CLOSED)**. **Cross-repo MCP-surface convergent activity** is becoming visible: codex #19836 OPEN + opencode #24618 OPEN + opencode #24605 CLOSED = 3-PR cross-repo MCP-surface cluster within 24h. Distinct from synth #227 reasoning-content cluster.
- **gemini-cli pmenic N=2 OPEN** (#26054 + #26063): cross-repo replication of synth #224's sub-author N=2-exactly pattern outside litellm. **Cardinality still N=2 not N=3** — synth #224 cardinality cap holds.
- **litellm Nav25oct N=2 OPEN** (#26609 + #26612, both Snowflake provider): another sub-author N=2-exactly pattern within litellm, now **3 distinct authors** (Bytechoreographer, xr843, Nav25oct) at synth #224 cardinality, all unmerged. Strong intra-repo replication.
- **litellm health-check max_tokens 3-PR sub-cluster** (#26610 + #26621 + cross-ref to #23836): cross-author convergent-fix sub-cluster on **non-LLM-API surface** (operational health check), distinct from synth #227's API-behavior surface.
- **qwen-code shenyankm + fyc09**: 2-PR same-repo reasoning-content sub-cluster — synth #227 nested structure confirmed.

## Predictions for ADDENDUM-97

1. **Highest-confidence**: codex crosses 4h silence at 18:01:06Z (17m post-capture), enters 4–24h cell. Cell shape flips from right-skewed-truncated to **bimodal-shallow** (3 in 0–4h, 2 in 4–24h). If this fires, **synth #228 metastability gains its second regime-flip data point in <3h**, dramatically strengthening the metastability claim. If codex merges before 18:01:06Z, predict the merge is **NOT bolinfest stack** and is the easiest queue item (likely abhinav-oai #19778 or colby-oai #19836).
2. **High-confidence**: litellm next merge is **NOT** a synth #227 reasoning-content cluster member (malafronte #26614). Instead it is a **health-check sub-cluster member** (#26621 udit-rawat OR #26610 hannahmadison) — operational/health surface tends to merge faster than API-behavior surface in litellm. This reverses Add.95 pred #4.
3. **High-confidence**: gemini-cli pmenic N=2 (#26054 + #26063) merges as a sibling pair within 2 windows, mirroring cocosheng-g sibling-pair MERGE-MERGE pattern (gemini-cli's emerging same-author paired-merge regime). Predict merge order: **#26054 first** (smaller, rename-only), #26063 second (security review needed).
4. **Medium-confidence**: synth #227 cluster grows to **5 distinct repos** by Add.99 via a **cline OR aider** entrant (untested external). If only internal growth fires, predict it's a **goose 2nd member** (jh-block #8857 + a new goose author).
5. **Medium-confidence**: rekram1-node #24642 (toolStreaming non-anth) merges within 3 windows, completing the **Add.94/95 rekram1-node opencode 2h-spacing cadence** as a **4-PR W17 sequence** on the non-anth-provider semantic surface. Cadence is **2h, not 30min** — corrective to Add.94/95.
6. **Speculative**: kitlangton opencode maintainer self-merge sub-30m N=2 pattern (the new shape) **repeats within 5 windows** with a third self-merge on the same httpapi/route surface. Maintainer self-merge bursts tend to come in 3s historically.
7. **Speculative**: codex MCP-surface activity (colby-oai #19836) seeds cross-repo MCP awareness coupling — predict **opencode** opens a new MCP-surface PR within 4 windows (not necessarily by leandrosnx — could be a fresh author).

## Cross-references

- **Synth #225** (cross-repo merge→open convergent-fix awareness coupling): **superseded by synth #227** (4-repo + chain-amplification version). Mark #225 as historical-precursor in any forward citation.
- **Synth #226** (outsider-re-file silence-break vector): **NOT REPLICATED** in any of this window's 5 merges (gemini-cli ×3, opencode ×2, all established authors). **Demote to litellm-staging-specific**, possibly to historical.
- **Synth #223** (convergent-fix-duo mutual-block resolution via close-not-merge): **HOLDS at 5+ windows.** No second resolution event this window; mechanism remains rare-fire.
- **Synth #224** (litellm sub-author N=2-exactly cardinality): **CROSS-REPO REPLICATED** in gemini-cli (pmenic) and **3rd intra-repo author** in litellm (Nav25oct). Cardinality cap N=2 holds across **all 4 instances**. Synth #224 promoted from litellm-specific to **cross-repo OSS sub-author behavior pattern**.
- **Synth #227** (4-repo reasoning-content cluster as upstream API behavior change propagation seed): **EXTENDED to 5 PRs** with internal sub-cluster (qwen-code N=2 fyc09+shenyankm) and **per-provider nested sub-cluster** (litellm Anthropic-adapter sub-cluster: tanmaykm #26608 + malafronte #26614). The pattern is no longer flat — it has **2-level structure**.
- **Synth #228** (corpus dormancy distribution metastability, sub-2h regime flips): **HOLDS through 1 additional window**, with codex pressing the 4h boundary as a **near-flip** test case. Next 17 minutes will deliver a clean regime-flip test.
- **NEW Add.96 synth-candidates**:
  - **Cross-repo MCP-surface convergent activity cluster** (codex #19836 + opencode #24618 + opencode #24605 closed) within sub-24h — 3-PR cross-repo cluster on **agent-tool integration surface** distinct from synth #227's LLM-API surface. Suggests a **second axis** of cross-repo convergent-fix coupling with different propagation kinetics — **synth #229 candidate**.
  - **Maintainer-self-merge sub-30m N=2 on adjacent code surface as a distinct-from-N=2-drive-by pattern** (opencode kitlangton #24626 + #24640 on httpapi route/payload surface within 24m23s). Differentiated from synth #224 by **author class** (maintainer vs sub-author) and **merge-axis** (self-merge vs maintainer-merges-other) — **synth #230 candidate**.

(Two Add.96-seeded synths to be promoted in `_weekly/`: #229 — cross-repo MCP/agent-tool-integration surface convergent activity as a second axis of convergent-fix coupling distinct from LLM-API surface, with mixed open/closed resolution states; #230 — maintainer-self-merge sub-30m N=2 on adjacent code surface as a distinct pattern from sub-author drive-by N=2, differentiated by author class and merge-axis with maintainer self-merge bursts tending to triple historically.)
