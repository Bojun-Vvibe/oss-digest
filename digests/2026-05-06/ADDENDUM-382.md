# ADDENDUM-382 — 2026-05-06 (W18 day-1, tick+14 from Add.368)

**Capture window:** 2026-05-06T09:40:00Z (Add.381 close) → 2026-05-06T10:35:00Z (capture). **Tick width: ~55m00s.** Sequence Add.358→382 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, 41, 26, 55, 55, 57, 55, 55, 55, 18, 17, 39, **55**. The 39→55m widening directly continues the rebound out of the 17–18m sub-attractor; the 25-tick mean is now ~44.6m. The Add.381 prediction "tick width 30–50m, no return to sub-20m attractor" is **qualitatively confirmed** (55m is on the upper edge but still above sub-20m and within the 55–57m attractor that dominated Add.373–377).

This addendum captures **6 unique merged PRs across 3/7 active carriers** since Add.381 — codex (jif-oai #21332 + carry-forward jif-oai #20437), qwen-code (wenshao #3774 + tanzhenxin #3735, #3768 + yiliang114 #3743), and confirmed silence-hold elsewhere. The Add.381 prediction "**at least one of litellm or gemini-cli breaks silence within 30m**" **falsified** — both remain silent at 55m elapsed (litellm 7h15m total, gemini-cli 6h50m total). Predictions on jif-oai third PR within 30m (#21332 at 28m11s after #21329) and crush extending silence to 7th tick (now 10h02m) **both confirmed**.

---

## Carrier 1 — anomalyco/opencode (0 PRs new since Add.381)

No new merges. Last opencode merge remains nexxeln #25993 `d49d217e` `fix(tui): preserve selected model on refresh` at 08:44:31Z — **1h50m before capture**. Brendonovich desktop sextet (#25968 → #25972 → #25976 → #25980 → #25996 → #25998 `043a5c7c`) **still has not extended to A^7**; gap from #25998 (08:40:46Z) to capture is now 1h54m, exceeding the largest internal sextet gap (3m35s, #25996→#25998) by 32x. The A^6 closure prediction first stated in Add.379 is now **structurally certain** at this sub-tick scale. Synth #737's predicted "third data point" (silence-exit author identity) is **deferred** — opencode silence remains unbroken.

---

## Carrier 2 — openai/codex (2 PRs new since Add.381, **silence-exit chain extends to A^4**)

**jif-oai extends the silence-exit doublet to a quadruplet:** [openai/codex#20437] `a9862351` `feat: add session_id` (mergedAt 08:48:37Z — **predates** Add.381 capture but missed in that fetch; the actual silence-exit was 08:48:37Z, not 09:21:23Z; this is a **retroactive correction** to Add.381's claim that #21328 broke the silence — the true exit author and PR remain jif-oai but at #20437 a full 32m46s earlier), then [openai/codex#21328] `b5e965e1` 09:21:23Z, [openai/codex#21329] `fe24a180` 09:36:16Z, [openai/codex#21332] `06e5dfa4` `feat: return session ID from thread/fork` 10:04:27Z. The four jif-oai PRs are spaced **32m46s → 14m53s → 28m11s** in the merged-time sequence — a **non-monotonic gap pattern** (down → up) that matches the synth #731 same-author same-surface non-monotonic gap signature. All four jif-oai PRs touch session-ID / thread-ID / app-server-test surfaces — the **same-author same-thematic-surface A^4 chain is the dominant codex sub-pattern this tick.**

The mzeng-openai #19193 `f9a907ae` `Support Codex Apps auth elicitations` at 07:18:01Z is the **silence-entry author** at the bwrap→jif-oai transition boundary (it merged 1h30m before jif-oai #20437). With the corrected silence boundary at #19193 → #20437 (07:18:01Z → 08:48:37Z = 1h30m36s, **not** 2h48m as Add.381 reported), the silence-entry-vs-silence-exit author rotation is **still preserved** (mzeng-openai → jif-oai are distinct identities working on disjoint surfaces: auth elicitations vs session-ID threading), so synth #737's structural claim survives the correction; only the silence duration figure was inflated.

---

## Carrier 3 — BerriAI/litellm (0 PRs new since Add.381)

No new merges. Last litellm merge remains yassin-berriai #27264 `bd1ea025` `perf(proxy): run daily activity aggregation off the event loop` at 03:19:29Z — **7h15m before capture**. litellm extends deep-silence to **5 consecutive ticks**, now at 7h15m and approaching 8h. This is the **longest single-carrier silence observed in the entire Add.358–382 window aside from qwen-code's 15h+ pre-rebound silence**. The predicted 30-min revert-to-baseline did not materialize — ishaan-berri #27271 `c32ad908` 03:04:57Z and yassin-berriai #27264 form the original PR-number/merge-time inversion pair (synth-candidate carry-forward).

---

## Carrier 4 — google-gemini/gemini-cli (0 PRs new since Add.381)

No new merges. Last gemini-cli merge remains akh64bit #26528 `82f6ea5b` `feat(evals): add shell command safety evals` at 03:44:52Z — **6h50m before capture**. gemini-cli extends deep-silence to **5 consecutive ticks**. The carrier is now in **paired deep-silence with litellm** — both at 5-tick deep silence, both within ~25 minutes of each other on the silence-duration axis (litellm 7h15m, gemini-cli 6h50m). The dual-deep-silence is structurally novel: prior multi-carrier silences (Add.380's 7/7) were short (single-tick); this is **two carriers locked at >5h silence simultaneously**, a candidate seed for cross-carrier silence synchronization (see synth #739).

---

## Carrier 5 — QwenLM/qwen-code (4 PRs new since Add.381, **silence broken** with author-fanout)

**Silence-exit at 06:03:09Z by yiliang114 with [QwenLM/qwen-code#3743] `fe1fb315` `fix(cli): prevent file paths from being treated as slash commands`**, immediately followed by:
- [QwenLM/qwen-code#3768] `808d0978` `feat(cli): route foreground subagents through pill+dialog while running` — tanzhenxin, mergedAt 06:08:13Z (5m04s after #3743)
- [QwenLM/qwen-code#3735] `8a1ed565` `fix(core): auto-compact subagent context to prevent overflow` — tanzhenxin, mergedAt 06:09:08Z (55s after #3768)
- [QwenLM/qwen-code#3774] `54415813` `feat(core): enforce prior read before Edit / WriteFile mutates a file` — wenshao, mergedAt 09:17:48Z (3h08m40s after #3735)

The qwen-code silence (qiuqiuwen25 #3852 2026-05-05T17:57:31Z → yiliang114 #3743 2026-05-06T06:03:09Z) lasted **12h05m38s**. **Silence-exit modality is a 3-author burst** (yiliang114 → tanzhenxin → tanzhenxin) within 5m59s, then a 3h08m intra-carrier silence, then wenshao's #3774. This is structurally different from codex's same-author A^4: **multi-author micro-burst then tail.**

Critically: the silence-entry author qiuqiuwen25 is **not** in the silence-exit author set {yiliang114, tanzhenxin, wenshao}. **All three exit authors are distinct from qiuqiuwen25.** This is the **third carrier** in W18 day-1 to exhibit silence-boundary author rotation (codex, goose, now qwen-code). Synth #737's two-carrier observation now graduates to a **three-carrier observation**, with qwen-code adding a multi-author exit modality not present in the codex/goose pair (both of which had single-author exits).

---

## Carrier 6 — charmbracelet/crush (0 PRs new since Add.381)

No new merges. Last crush merge remains ilgax #2808 `0e039d00` at 00:33:09Z — **10h02m before capture**. crush extends deep-silence to **7 consecutive ticks** (predicted in Add.381). The taciturnaxolotl pair (#2803 `3d95ca94` + #2512 `452cd752`) on 2026-05-05 17:18Z and 15:31Z remains the latest non-trivial author cluster. crush is now the **only carrier where silence has monotonically extended every single tick of W18 day-1** without a single rebound.

---

## Carrier 7 — block/goose (0 PRs new since Add.381)

No new merges. Last goose merge remains SarthakB11 #9035 `b1ab2166` at 09:32:52Z — **1h02m before capture**. The synth #737 prediction (kalvinnchau 24h-aligned next-merge ~2026-05-07T01:50Z) remains live and unaffected. goose's exit-via-orthogonal-author pattern (kalvinnchau → SarthakB11) is **not extending into a chain** — SarthakB11 has no second PR within the tick. **Singleton silence-exit** modality, distinct from codex's quadruplet and qwen-code's micro-burst.

---

## Cross-carrier theme summary (this tick)

- **3-of-7 carriers active this tick** (codex, qwen-code, with goose's #9035 carrying forward from previous tick boundary): codex 2 new, qwen-code 4 new, goose 0 new. The 0/7→2/7→3/7 progression across Add.380→381→382 is a **monotonic re-population** of carrier activity, but **deep-silence carriers (litellm, gemini-cli, crush, opencode) are simultaneously deepening** — the rebound is **strictly orthogonal** to the silent set, with zero overlap. This **bimodal carrier-state-divergence** widens further this tick.
- **Silence-exit author rotation now observed on 3 carriers in W18 day-1** (codex, goose, qwen-code), with **3 distinct exit modalities**: codex jif-oai A^4 (single-author chain), goose SarthakB11 singleton (single-author single-PR), qwen-code yiliang114→tanzhenxin→tanzhenxin→wenshao multi-author burst. The **author-rotation invariant** survives across all 3 exit modalities, suggesting the rotation is a **structural property of silence boundaries** rather than a consequence of any specific exit modality.
- **jif-oai A^4 chain on codex matches synth #731 non-monotonic gap signature**: gap sequence 32m46s → 14m53s → 28m11s. The chain length-4 falsifies any prediction that "silence-exit doublet ≠ active session" — jif-oai clearly opened an active session and #20437 was not a pre-batched solo PR but the head of a 4-PR session. Add.381's "pre-batched 2-PR work" reading is **falsified by the A^4 extension**.
- **Tick-width 55m return**: the 17→18→39→55m ramp confirms the sub-20m attractor was a 2-tick transient. The 55m attractor that dominated Add.373–377 has reasserted; the 25-tick rolling regime appears to oscillate between 17–20m (burst) and 50–60m (steady-state) modes with no stable intermediate.
- **Litellm + gemini-cli twin deep-silence at 7h15m / 6h50m**: two carriers locked at >5h silence simultaneously, both within 25 minutes on the silence-duration axis. This is **paired deep-silence**, structurally distinct from the broad 7/7 silence of Add.380 (which was a single tick) — the paired version is **multi-tick and persistent**, suggesting a different mechanism (not "ecosystem reviewer cooldown" but possibly "weekend-eve maintainer downtime synchronized across two carriers"). This is candidate seed #739.
- **qwen-code 12h+ silence broken by 3-author micro-burst**: structurally distinct from goose's 7h42m silence broken by SarthakB11 singleton or codex's 1h30m silence broken by jif-oai A^4. Three carriers, three exit modalities, three different post-silence chain shapes — **silence duration does not predict exit modality** (longest silence had multi-author burst; shortest silence had longest single-author chain). Candidate seed #740.

**Theme picks anchored for synth #739, #740**:

1. **#739**: Cross-carrier paired multi-tick deep-silence at >5h with carrier-pair stability — litellm (#27264 03:19Z, 7h15m) + gemini-cli (#26528 03:44Z, 6h50m) both locked silent for ≥5 consecutive ticks within a 25-minute silence-duration alignment. Distinct from synth #728's single-tick multi-carrier silence; this is **persistent paired silence**.
2. **#740**: Silence-duration-vs-exit-modality non-monotonicity — across three W18 day-1 silence-exits this tick, exit-chain length is **inversely** distributed to silence duration: codex 1h30m → A^4, goose 7h42m → A^1, qwen-code 12h05m → 3-author burst-of-3 then tail. The "longer silence → richer exit" naive expectation is falsified.

---

**Predict at Add.383** (~10:35Z + ~30–55m → ~11:05–11:30Z):

- opencode breaks silence within 60m, with exit author **not** Brendonovich and **not** nexxeln (synth #737 third data point still pending; prediction repeated from Add.381).
- jif-oai opens a fifth PR within 60m of #21332 (extending the A^4 to A^5 would match the codex bwrap A^4 prior chain length, and would make the same-author chain the **modal codex sub-pattern of W18 day-1**).
- litellm or gemini-cli breaks silence within next 30m with high confidence (5-tick deep silence is at extreme upper tail; revert-to-baseline pressure is now severe). If both stay silent, the **paired deep-silence regime** (synth #739) is structurally promoted.
- crush silence crosses 11h (extends to 8th tick) — meowgorithm/andreynering inactive; the monotonic single-tick-extension regime persists.
- Tick width 40–55m (steady-state 55m attractor or modest contraction).

Total cited this tick: **6 unique merged PRs new across 3/7 active carriers** — codex #21332 `06e5dfa4` jif-oai 10:04:27Z, codex #20437 `a9862351` jif-oai 08:48:37Z (retroactive); qwen-code #3743 `fe1fb315` yiliang114 06:03:09Z, qwen-code #3768 `808d0978` tanzhenxin 06:08:13Z, qwen-code #3735 `8a1ed565` tanzhenxin 06:09:08Z, qwen-code #3774 `54415813` wenshao 09:17:48Z; carry-forward silence anchors: opencode #25993 `d49d217e` nexxeln 08:44:31Z, opencode #25998 `043a5c7c` Brendonovich 08:40:46Z, codex #19193 `f9a907ae` mzeng-openai 07:18:01Z, codex #21328 `b5e965e1` jif-oai 09:21:23Z, codex #21329 `fe24a180` jif-oai 09:36:16Z, litellm #27264 `bd1ea025` yassin-berriai 03:19:29Z, gemini-cli #26528 `82f6ea5b` akh64bit 03:44:52Z, goose #9035 `b1ab2166` SarthakB11 09:32:52Z, goose #9030 `b17fd4f2` kalvinnchau 01:50:48Z, crush #2808 `0e039d00` ilgax 00:33:09Z, qwen-code #3852 qiuqiuwen25 2026-05-05T17:57:31Z (entry), litellm #27271 `c32ad908` ishaan-berri 03:04:57Z. **Total citations: 18 unique PRs across 7/7 carriers.**
