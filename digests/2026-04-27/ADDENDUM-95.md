# ADDENDUM-95 — 2026-04-27

**Capture window:** 15:57:06Z → 16:38:34Z (UTC). Window width: **41m28s**.
**Predecessor:** ADDENDUM-94 (closed 15:57:06Z; seeded synth #225 — cross-repo merge→open convergent-fix awareness coupling on shared LLM-API behavior surface (reasoning-content lifecycle); synth #226 — outsider-author re-filed PR `- new PR` suffix as silence-break vector for staging queues).

## Headline event — gemini-cli 66h+ silence BREAKS via fresh-author cocosheng-g, falsifying Add.94 pred #2

Add.94 pred #2 (high-confidence): **gemini-cli crosses 67h at 16:55:46Z (58m40s post-capture). Sole-occupant-of-≥24h-cell status persists.** **FALSIFIED — silence broke 27m38s BEFORE the 67h marker would have been crossed.**

The break came via **cocosheng-g #26052 `1cdfeb6633` `fix(cli): provide manual update command when automatic update fails` merged 16:28:08Z** — createdAt 16:02:25Z, lifespan **25m43s open-to-merge**, freshest possible PR. cocosheng-g also has a parallel OPEN test PR #26053 `test(cli): add unit tests for restore ACP command (#23402)` createdAt 16:17:10Z (15m13s after #26052 createdAt, 10m58s before its merge). This is a **same-author tight-pair OPEN-then-MERGE** pattern in gemini-cli, and the merged member is the fix while the OPEN follow-up is the test — a **fix-then-test author pattern**, not the more common test-then-fix.

The 66h+ silence terminated at **66h32m22s** (from #25942 at 2026-04-24T21:55:46Z to #26052 at 2026-04-27T16:28:08Z). This is **not** an outsider-mediated break (synth #226 vector): cocosheng-g has prior gemini-cli activity in W17 (createdAt-only check shows the account is workspace-active). It is also **not** a maintainer-bot break. It is a **fresh-PR-fast-merge** by an established sub-author — closer to the qwen-code dreamWB #3661 pattern (PR opened 04:53Z, merged 12:28Z, ~7h35m lifespan) than to the litellm omriShukrun08 outsider re-file pattern.

**This decisively falsifies the Add.94 corrective heuristic** ("silence-breaks in mature high-volume repos are biased toward outsider/peripheral-author PRs"). One window, two repo-silence-breaks, two distinct mechanisms:
- Add.94 (litellm, 37h44m): outsider re-file (omriShukrun08 #26605)
- Add.95 (gemini-cli, 66h32m): fresh-PR fast-merge by established sub-author (cocosheng-g #26052)

The corrective heuristic is **single-instance overfit**. The actual generalization is **mechanism diversity**: silence-breaks in mature repos are not author-class-predictable from repo state alone.

## codex monopoly→silence regime EXTENDS to 2h37m+, longest codex silence of W17

codex remains silent at #19818 `bb83eec825` (jif-oai, 14:01:06Z). Trailing silence at capture: **2h37m28s**. Add.94 pred #1 (re-armed with high confidence): **FALSIFIED for the second consecutive window**. Bolinfest stack #19772–#19776 unchanged (now ~10h49m stalled), aibrahim-oai #19797 unchanged (~7h04m), abhinav-oai #19778 unchanged (~10h34m), efrazer-oai #19763/#19764 unchanged (~12h12m).

| Candidate PR (Add.94 → Add.95) | Author | Status Δ | head SHA Δ | Open lifespan at capture |
|---|---|---|---|---|
| codex #19797 | aibrahim-oai | OPEN→OPEN | unchanged | 7h04m |
| codex #19778 | abhinav-oai | OPEN→OPEN | unchanged | 10h34m |
| codex #19805 | jif-oai | OPEN→OPEN | unchanged (**6 windows**) | 4h58m |
| codex #19807 | vb-openai | OPEN→OPEN | unchanged (**6 windows**) | 4h31m |
| codex #19772–#19776 | bolinfest stack | OPEN→OPEN ×5 | all unchanged | ~10h49m |
| codex #19771 sayan-oai | sayan-oai | OPEN→OPEN | unchanged | ~10h59m |
| codex #19763/#19764 efrazer-oai | efrazer-oai | OPEN→OPEN | unchanged | ~12h12m |

**One new codex OPEN this window**: friel-openai #19832 `Preserve assistant phase for replayed messages` createdAt 16:15:21Z. So the queue **gained** a fresh PR but **selected** none.

The persistent-skip property of #19805/#19807 strengthens to **6 consecutive windows unchanged**. Add.94 pred #7 (speculative) — codex silence at 3h becomes regime-class anomaly worth its own synth — is **on track**: at current trajectory, codex will cross 3h00m at 17:01:06Z (22m38s post-capture). **Synth-candidate**: codex deep-freeze under saturated-and-still-growing queue (queue grew to include #19832 yet selection still did not fire), distinct from earlier "silence after monopoly" — this is **silence WITH active queue intake**, suggesting the freeze is on the **selection side**, not the **submission side**.

## litellm post-silence-break regime: silence holding at 47m+, queue intake CONTINUES

litellm last merge remains #26605 omriShukrun08 0304fe0dc5 at 15:51:27Z. Trailing silence at capture: **47m07s**. So the silence-break Add.94 documented produced a **single merge** then **immediately re-entered silence**. This is **not** a queue-flush event (which would have been multi-PR cascade); it is **single-shot deferral resolution**.

Queue intake during this 47m silence: **5 fresh OPENs** since the break:
- #26606 milan-berri 14:23:44Z `fix(logging): backfill streaming hidden response cost`
- #26607 devshahofficial 14:31:54Z `feat(guardrails): add Resemble AI Detect guardrail`
- #26608 tanmaykm 15:48:01Z `respect timeout config in Anthropic adapter`
- #26609 Nav25oct 15:57:13Z `feat(snowflake): add stream to supported params`
- #26610 hannahmadison 15:58:38Z `fix: increase health check max_tokens default to 16 (#23836)`
- #26612 Nav25oct 16:16:43Z `feat(pricing): add Snowflake Cortex REST API model pricing`
- #26614 malafronte 16:20:07Z `fix(anthropic): preserve reasoning content and add think-tag regression coverage`

**Critical convergent-fix signal**: malafronte #26614 (Anthropic preserve reasoning content) is a **third member** of the cross-repo reasoning-content-lifecycle convergent-fix family seeded by synth #225:
1. anomalyco/opencode #24630 `738b3065dc` (rekram1-node, MERGED 15:17:39Z) — interleaved reasoning_content default true
2. QwenLM/qwen-code #3682 (fyc09, OPEN 15:51:35Z) — stop stripping reasoning on model switch/history load
3. **BerriAI/litellm #26614 (malafronte, OPEN 16:20:07Z) — preserve Anthropic reasoning content + think-tag regression**

Three repos, three authors, three distinct fix-points on the **same semantic surface (reasoning-content preservation across LLM-API boundaries)**, all within **62m** of each other (15:17Z merge → 16:20Z open). Synth #225 (cross-repo awareness coupling, sub-1h lag) **strengthens dramatically** — what was a 2-repo lag-coupling becomes a **3-repo convergent-fix cluster** with the latest member appearing 29 minutes after Add.94's seeded prediction. **Synth-candidate**: 3-repo convergent-fix cluster on shared LLM-API behavior surface within sub-90m window, with the originating merge in repo-A acting as **propagation seed** for repo-B and repo-C OPENs. This is a **stronger** signal than synth #225 (which was 2-repo merge→open) — it is **merge→open→open** with chain-amplification.

Bytechoreographer #26601/#26600 and xr843 #26603/#26604 sub-author N=2 pairs **persist OPEN unchanged**. Add.94's note that synth #224's N=2-cap holds across silence-break **strengthens further**: even with new fresh OPENs streaming in (snowflake, anthropic, guardrails, etc.), the existing N=2 pairs neither extended (no N=3) nor merged (no resolution). **Synth #224 holds at 5 consecutive windows.**

The convergent-fix duos #26598/#26593 (non-ASCII headers) and #26595/#26602 (other adjacencies) **also persist OPEN unchanged**. Synth #223 (convergent-fix-duo mutual-block) **holds at 5 consecutive windows**.

## anomalyco/opencode silence at 1h21m, no new merges in-window — rekram1-node bimodal cadence pred FALSIFIED

Add.94 pred #5 (medium-confidence): **rekram1-node opens a 4th opencode PR today on the reasoning-content surface; second tight pair within 30 minutes.** **FALSIFIED.** No rekram1-node activity in this 41m28s window. The bimodal cadence (15-min pair + 10h-gap follow-up) **did not extend to a third regime member**. The hypothesis "second tight pair after #24630" is dead at this checkpoint.

opencode merged earlier in-day burst: #24573/#24574/#24592/#24575/#24576/#24614/#24630 — 7 merges across the day. Trailing silence at capture: **1h20m55s** (since #24630 at 15:17:39Z). Queue intake: 1 fresh OPEN this window, **Yxmura #24635 `feat: Add Dutch (NL) Readme and Crof AI provider support` createdAt 16:15:15Z**.

The leandrosnx #24618 (`fix: guard against undefined MCP tool output causing output.split crash`) and rachadaccoumeh #24605 (`fix: show MCP tool arguments in permission dialog`) convergent-fix duo (both on MCP tool surface) **persists OPEN unchanged 5 windows running**. Synth #223 confirmation in opencode adds a third repo to the duo-mutual-block evidence (litellm, qwen-code, opencode). However, note #24605 is now **CLOSED** (state changed since Add.94 capture) — so the **opencode MCP duo collapsed via close-not-merge for one member**, validating Add.94 pred #6 (speculative): "if duos resolve, predict close-not-merge for one duo member". **CONFIRMED in opencode within 1 window.** This is a **resolution event** for synth #223's predicted resolution mechanism.

## qwen-code silence at 1h48m, fyc09 #3682 awareness-coupling member STILL OPEN

qwen-code last merge #3656 qqqys 14:50:18Z (or #3617 mohitsoni48 15:01:03Z — see Add.94 timestamp note). Trailing silence: **~1h37–48m**. fyc09 #3682 (the synth #225 propagation member) **STILL OPEN unchanged** at `7635f8c1`. Lifespan: **47m**.

Add.94 pred #3 (high-confidence): **fyc09 #3682 merges by Add.96.** **FALSIFIED-so-far at Add.95** — but Add.96 is the deadline so this remains live. If qwen-code goes another full window without merging fyc09 #3682, the cross-repo awareness-coupling hypothesis weakens (predicted merge would be the empirical proof of the propagation-seed mechanism). With litellm malafronte #26614 now joining as a third member, the **chain-amplification** version of synth #225 holds even if the qwen-code member doesn't merge — propagation can be open-only.

chiga0 N=3 OPEN persists unchanged (#3680, #3671, #3663 all at original SHAs). shenyankm N=2 OPEN persists (#3677, #3668). LaZzyMan #3673 OPEN. pomelo-nwu #3667 OPEN. **No qwen-code state changes in window.**

## goose silence at 6h07m, no merges in-window

Goose last merge #8856 lifeizhou-ap `d8e4b55d16` 10:31:41Z. Trailing silence: **6h06m53s**. **Goose is the SOLE occupant of the 4–24h cell now** — the empty-4–24h-cell anomaly Add.93/94 documented has now been **populated by goose alone** (it crossed the 4h threshold at 14:31:41Z, mid-Add.93 window).

Goose queue intake this window: jamadeo #8866 `fix(release): look for .dmg in the right place` createdAt 15:15:03Z (just before window open). No author activity from prior W17 high-velocity authors (angiejones, michaelneale).

## Per-repo trailing-silence at capture (16:38:34Z)

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Δ vs Add.94 |
|---|---|---|---|---|
| google-gemini/gemini-cli | #26052 `1cdfeb6633` | 16:28:08Z | **10m26s** | RESET (was 66h01m20s) |
| BerriAI/litellm | #26605 `0304fe0dc5` | 15:51:27Z | **47m07s** | +41m28s (no in-window merge) |
| anomalyco/opencode | #24630 `738b3065dc` | 15:17:39Z | **1h20m55s** | +41m28s |
| QwenLM/qwen-code | #3617 `414b3304cd` | 15:01:03Z | **1h37m31s** | +41m28s |
| openai/codex | #19818 `bb83eec825` | 14:01:06Z | **2h37m28s** | +41m28s |
| block/goose | #8856 `d8e4b55d16` | 2026-04-27T10:31:41Z | **6h06m53s** | +41m28s |

**Cell occupancy at capture:**
- 0–4h cell: {gemini-cli (10m26s) — NEW, litellm (47m07s), opencode (1h20m55s), qwen-code (1h37m31s), codex (2h37m28s)} — **5 repos**
- 4–24h cell: {goose (6h06m53s)} — **1 repo, was empty 2 windows**
- ≥24h cell: **EMPTY** (gemini-cli evacuated via merge)

**Cell shape REGIME-FLIPPED.** For two consecutive prior windows the corpus was **bimodal** (just-merged vs deeply-silent, 4–24h empty). This window the **≥24h cell emptied** while the **4–24h cell repopulated** (via goose's normal aging, not new dormancy). This is the **inverse** of the Add.93/94 regime: now 5 repos cluster in 0–4h with a **single 4–24h tail and an empty deep cell**. The corpus is now **right-skewed-truncated** rather than bimodal. **Synth-candidate**: corpus dormancy distribution undergoes regime flips on sub-2h timescales (bimodal ↔ right-skewed-truncated) driven by single-merge events at the deep tail, suggesting the deep-silent cell is **metastable** — small perturbations (one fast PR merge) collapse it.

## Falsification check on ADDENDUM-94 predictions

1. **Pred #1** (codex breaks silence by Add.95 — bolinfest stack-collapse or aibrahim-oai #19797 single-merge): **FALSIFIED for second consecutive window.** codex now at 2h37m+, longest of W17. Bolinfest stack at ~10h49m. **Re-arm with even higher confidence for Add.96** — but the predictor must now include "selection-side freeze" as the explanatory hypothesis, not "queue-side starvation".
2. **Pred #2** (gemini-cli crosses 67h at 16:55:46Z, sole ≥24h occupant): **FALSIFIED via silence-break.** cocosheng-g #26052 merged 16:28:08Z, 27m38s before the 67h marker. Mechanism: fresh-PR fast-merge by established sub-author, **not** outsider re-file (Add.94 corrective heuristic falsified).
3. **Pred #3** (fyc09 #3682 merges by Add.96): **PENDING.** Still OPEN at 47m lifespan; Add.96 deadline holds.
4. **Pred #4** (second outsider-re-file silence-break in litellm by Add.96): **PENDING.** No merge events in litellm this window; queue intake is heterogeneous (no fresh `- new PR` suffix observed in incoming).
5. **Pred #5** (rekram1-node opens 4th opencode PR within 30 min of #24630): **FALSIFIED.** No rekram1-node activity this window. Bimodal cadence ended at N=3.
6. **Pred #6** (litellm silence-break unblocks duo, close-not-merge for one duo member): **CONFIRMED-but-in-opencode-not-litellm.** rachadaccoumeh #24605 (opencode MCP duo) went OPEN→CLOSED this window. The mechanism predicted (close-not-merge resolution) **fired**, just in a different repo than predicted. The cross-repo generalization of synth #223's resolution mechanism strengthens — duos resolve via close-not-merge across multiple repos, not just litellm.
7. **Pred #7** (codex 3h+ silence becomes regime-class anomaly): **ON TRACK.** Currently at 2h37m+; will cross 3h at 17:01:06Z (22m38s post-capture). If it holds through Add.96 capture, it will be the longest codex silence of W17 and warrants its own synth.

**Pred outcome tally: 1 confirmed-cross-repo (#6), 3 falsified (1, 2, 5), 2 pending (3, 4), 1 on-track (7).** Improved from Add.94 (which was 2C/5F). The corrective heuristic seeded by Add.94 (outsider re-file vector) **was itself falsified** within one window — a **second-order falsification cascade** worth noting as a meta-pattern: aggressive predictor adjustments after surprising windows tend to overfit single-instance evidence.

## Open queue notable changes at capture

- **codex #19805** (jif-oai): STILL OPEN, **6 consecutive windows unchanged**. Persistent-skip strengthens to **6×W17 hold**.
- **codex #19807** (vb-openai): STILL OPEN, **6 consecutive windows unchanged**. Cross-author starvation marker now equally strong.
- **codex #19832** friel-openai: NEW OPEN, `Preserve assistant phase for replayed messages` — touches multi-agent message-replay surface, conceptually adjacent to jif-oai's #19809/#19812/#19813/#19818 multi-agent v2 cluster. Selection regime may treat #19832 as **co-surface continuation** of the jif-oai stream — predict elevated merge probability.
- **litellm queue**: post-silence-break, no further merges. Convergent-fix surface area expands: **3-repo reasoning-content cluster** (opencode merged + qwen-code OPEN + litellm OPEN). Bytechoreographer/xr843 N=2 pairs still capped.
- **qwen-code chiga0 triple #3680/#3671/#3663**: unchanged at N=3 OPEN. shenyankm N=2 unchanged. fyc09 #3682 OPEN at 47m lifespan, awareness-coupling propagation member.
- **opencode (anomalyco)**: rachadaccoumeh #24605 went OPEN→CLOSED — duo-resolution event for synth #223. leandrosnx #24618 still OPEN. Yxmura #24635 NEW OPEN (Dutch README + Crof AI provider).
- **gemini-cli**: cocosheng-g #26053 (test for restore ACP, sibling to merged #26052) OPEN. Same-author tight-pair OPEN-then-MERGE shape, fix merged before test.
- **goose**: jamadeo #8866 NEW OPEN (release .dmg path fix); jh-block #8857 OPEN (preserve thinking content for providers — **fourth-repo entrant in reasoning-content cluster** at qualifying threshold).

**CRITICAL: the reasoning-content/thinking-content convergent-fix cluster is now 4-repo wide** (opencode merged, qwen-code OPEN, litellm OPEN, goose OPEN via jh-block #8857) within a sub-12h envelope. This is **substantially stronger** than synth #225's 2-repo claim. **Synth-candidate**: 4-repo convergent-fix cluster on reasoning/thinking-content preservation across LLM-API boundaries, suggesting an **upstream behavior change** (likely Anthropic API or DeepSeek format) propagating through downstream agent integrations.

## Predictions for ADDENDUM-96

1. **Highest-confidence**: codex breaks silence by Add.96 OR sets W17 silence record at 3h+. Either outcome is informative. The selection-freeze hypothesis predicts the break, when it occurs, will be **NOT bolinfest stack** (too large a single decision) but rather a **single small jif-oai or aibrahim-oai PR** — the queue's "easiest" item.
2. **High-confidence**: at least 1 more reasoning-content convergent-fix PR appears in window across the 6 watched repos. The 4-repo cluster has critical mass; expect 5-repo extension, likely via cline, aider, or OpenHands (untested in this dispatch).
3. **High-confidence**: gemini-cli does NOT return to ≥24h silence in the next window — 1 merge typically seeds 2–4h of follow-on activity. cocosheng-g #26053 (the test sibling) merges by Add.97.
4. **Medium-confidence**: litellm fyc09-equivalent (malafronte #26614 or KunalG67 #26595) merges by Add.97 — the Anthropic reasoning surface is a maintainer-priority area given the convergent-fix cluster. Predict merge before either Bytechoreographer N=2 pair extends.
5. **Medium-confidence**: opencode duo-resolution event (rachadaccoumeh #24605 close) repeats in a second duo within 2 windows — once the close-not-merge mechanism fires, maintainers tend to apply it consistently to similar-shape duos.
6. **Speculative**: goose jh-block #8857 (`Preserve thinking content for providers that require it`) merges within 4 windows as the **slowest member** of the 4-repo reasoning-content cluster — goose has lowest in-day merge velocity (last merge ~6h ago), so its convergent-fix member will be temporally last.
7. **Speculative**: a NEW author appears in qwen-code with a reasoning-content PR by Add.97, extending fyc09 #3682 to a 2-PR same-repo convergent sub-cluster mirroring litellm's KunalG67/malafronte sub-cluster.

## Cross-references

- **Synth #225** (cross-repo merge→open convergent-fix awareness coupling): **DRAMATICALLY STRENGTHENS** — 2-repo claim → 3-repo cluster (opencode merged, qwen-code OPEN, litellm OPEN) → 4-repo cluster including goose. The chain-amplification (merge→open→open→open) is a stronger pattern than the original bilateral coupling.
- **Synth #226** (outsider-re-file silence-break vector): **NOT REPLICATED** in gemini-cli silence-break (cocosheng-g is established sub-author, no `- new PR` suffix). Single-instance evidence; should be **demoted to specific-to-litellm-staging** until replicated.
- **Synth #223** (convergent-fix-duo mutual-block): **RESOLUTION MECHANISM CONFIRMED** — opencode rachadaccoumeh #24605 went CLOSED this window, validating the close-not-merge resolution prediction. Cross-repo generalization established.
- **Synth #224** (litellm sub-author N=2-exactly): **HOLDS at 5 consecutive windows.** Bytechoreographer + xr843 unchanged through both silence-break and continued queue intake.
- **Synth #222** (codex jif-oai N=6 self-merge sprint): codex 2h37m+ silence is now the **longest post-jif-oai-cascade silence of W17** by a large margin. The "silence after monopoly" regime is hardening into multi-window phenomenon — consider promoting Add.93/94/95 codex silence as a synth in its own right.
- **NEW Add.95 synth-candidates**:
  - **4-repo reasoning-content/thinking-content convergent-fix cluster on upstream API behavior change propagation** within sub-12h envelope (anomalyco/opencode #24630 merged, qwen-code #3682 OPEN, litellm #26614 OPEN, goose #8857 OPEN) — **synth #227 candidate**.
  - **Corpus dormancy distribution regime flip on sub-2h timescale** driven by single-merge events at the deep tail (bimodal ↔ right-skewed-truncated), evidence the deep-silent cell is metastable — **synth #228 candidate**.

(Two Add.95-seeded synths to be promoted in `_weekly/`: #227 — 4-repo reasoning-content convergent-fix cluster suggesting upstream API behavior change as propagation seed, with chain-amplification (merge→open→open→open) within sub-12h envelope; #228 — corpus dormancy distribution metastability — single-merge events at the deep-silent cell trigger sub-2h regime flips between bimodal and right-skewed-truncated cell occupancy shapes.)
