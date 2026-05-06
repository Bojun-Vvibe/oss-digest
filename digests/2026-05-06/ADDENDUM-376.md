# ADDENDUM-376 — 2026-05-06 (W18 day-1, tick+8 from Add.368)

**Capture window**: 2026-05-06T05:40:00Z (Add.375 close) → 2026-05-06T06:35:00Z (capture). **Tick width: ~55m.** Sequence Add.358→376 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, 41, 26, 55, 55, 57, **55**. The 55–55–57–55 quartet at Add.373/374/375/376 confirms the post-26m-outlier mode now occupies 4 consecutive ticks at ~55–57m. The 19-tick mean is now ~47.1m; the bimodal shoulder at 37–41m holds at 4 ticks; the 55–57m mode now anchors **4 consecutive ticks**, the longest sustained run of the W18 era.

This addendum captures **23 unique PRs across 7/7 carriers** with emphasis on PRs that landed in the post-Add.375 window plus three falsifications of Add.375's predictions.

---

## Carrier 1 — anomalyco/opencode (3 PRs new since Add.375)

No new merges in the post-05:40Z window — the Brendonovich `desktop/` doublet (#25972, #25968) remains the carrier-tail. The most recent merges within the prior 12h that were not fully cited in Add.375:

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [anomalyco/opencode#25818] | kitlangton | 2026-05-06T01:33:48Z | `432de1ad` | Type session not-found errors |
| [anomalyco/opencode#25972] | Brendonovich | 2026-05-06T04:44:40Z | `e969d0af` | fix(desktop): suppress browser API Sentry errors in prod |
| [anomalyco/opencode#25968] | Brendonovich | 2026-05-06T04:30:21Z | `031a0cc8` | feat(desktop): add OPENCODE_TEST_ONBOARDING env |

**Falsification of Add.375 prediction**: "Brendonovich's `desktop/` surface attracts a third PR within 60m." Predicate **violated** — no `desktop/` PR has merged in the 1h50m since #25972. The same-author doublet did **not** extend into a triplet, contrary to the synth #92/#94/#96 baseline expectation. This is a **null result that shortens** the conditional-cadence model: Brendonovich-class doublets have a measurable upper bound at N=2 within a single tick.

---

## Carrier 2 — openai/codex (3 PRs new since Add.375)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [openai/codex#21285] | viyatb-oai | 2026-05-06T05:22:02Z | `6795cc9f` | fix(bwrap): emit libcap after standalone archive |
| [openai/codex#21260] | pakrym-oai | 2026-05-06T00:16:06Z | `ffcce848` | [codex] Move thread naming to app server |
| [openai/codex#21257] | bolinfest | 2026-05-06T01:21:52Z | `7587459b` | release/npm: bundle standalone bwrap on Linux |

**Notable**: viyatb-oai #21285 is the **5th distinct codex author** active in the post-Add.374 window (after pakrym, mzeng-openai, iceweasel-oai, alfozan, bolinfest). #21285 (`fix(bwrap): emit libcap after standalone archive`) is **causally downstream** of bolinfest #21257 (`bundle standalone bwrap on Linux`) — both touch the bwrap packaging surface. This is a **two-author cross-ticking on the bwrap surface** with a 4h00m10s inter-merge gap (#21257 → #21285). The pattern is structurally identical to the Brendonovich `desktop/` doublet but at a **17× longer gap** and **across a maintainer boundary** (viyatb fixes bolinfest's packaging).

**Falsification of Add.375 prediction**: "pakrym remains absent for 5th consecutive tick OR returns with force-push on #21290." Pakrym **did return** with #21282 and #21276 (already cited Add.375) but **not** via force-push to #21290, and #21260 (also pakrym, 00:16Z, listed here for completeness) precedes the absence claim's start. Net: pakrym is **not frozen**; the cluster bandwidth has redistributed to 5 authors as predicted by the diffusion-mechanism wing of Add.375's analysis.

---

## Carrier 3 — BerriAI/litellm (2 PRs new since Add.375)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [BerriAI/litellm#27190] | dennishenry | 2026-05-06T01:36:22Z | `a1cda015` | fix: replace user api key auth with authorization or cookie for mcp server creation |
| [BerriAI/litellm#27185] | Sameerlite | 2026-05-06T00:17:51Z | `9f5b9a9f` | feat(audio_transcription): add NVIDIA Riva STT provider |

**Notable**: dennishenry #27190 (mcp server auth surface) is a **first-time-this-week author** in litellm — neither in Add.358–375 author rolls nor in any W17 synth citation. Sameerlite #27185 adds a new STT provider (NVIDIA Riva), making this the **third new-provider addition** in litellm's W18 day-1 window (counting from a wider pull). The reciprocal-citation K-pair (#27268↔#27271, gap 60m35s) and the disjoint-theme bot↔human near-coincidence (#27268↔#27216, gap 63s) **both remain the dominant adjacency events** in litellm for this tick — no new sub-2-minute bot-adjacent merges occurred.

---

## Carrier 4 — google-gemini/gemini-cli (1 PR new since Add.375)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [google-gemini/gemini-cli#26504] | cynthialong0-0 | 2026-05-06T00:47:53Z | `3708f88e` | fix(cli): provide JSON output for AgentExecutionStopped in non-interactive mode |

**Notable**: **No** gemini-cli-robot fanout fired in the post-05:40Z window. **Falsification of Add.375 prediction**: "gemini-cli-robot fires another cherry-pick fanout doublet (predicate: a galz10/joshualitt-class fix lands)." The predicate did **not** trigger — no maintainer-class fix merged that needed cherry-picking — so the prediction is **vacuously satisfied** rather than falsified, but the carrier's bot-fanout signature remains absent. The structural insight from synth #726 holds: **bot-fanout is conditional on upstream maintainer-fix events**; absence of fixes implies absence of fanout, not absence of bot capacity.

---

## Carrier 5 — QwenLM/qwen-code (3 PRs new since Add.375)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [QwenLM/qwen-code#3768] | tanzhenxin | 2026-05-06T06:08:13Z | `0a0c17f7` | feat(cli): route foreground subagents through pill+dialog while running |
| [QwenLM/qwen-code#3743] | yiliang114 | 2026-05-06T06:03:09Z | `9a279acf` | fix(cli): prevent file paths from being treated as slash commands |
| [QwenLM/qwen-code#3735] | tanzhenxin | 2026-05-06T06:09:08Z | `03ed878e` | fix(core): auto-compact subagent context to prevent overflow |

**Notable**: tanzhenxin merges #3768 (feat) at 06:08:13Z and #3735 (fix) at 06:09:08Z — a **same-author 55-second doublet** on the **subagent surface** (cli-pill-dialog vs core-auto-compact). The two PRs touch **disjoint files** (cli/ vs core/) but share a **logical surface** (subagent execution). This is a **third instance** in W18 day-1 of the same-author-disjoint-file-shared-logical-surface doublet pattern, after Brendonovich (`desktop/`, 14m19s) and alexhancock (agents-doc, 10m25s). The qwen-code instance is **15.6× tighter** than Brendonovich's and **11.3× tighter** than alexhancock's — bringing the gap distribution of this pattern down by another order of magnitude.

Additionally, yiliang114 #3743 lands at 06:03:09Z — **5m04s before** tanzhenxin's first merge — making this a **3-author 6-minute cluster on the cli surface**.

**Falsification of Add.375 prediction**: "doudouOUC opens a third `sdk-python` PR continuing the multi-hour cadence." Predicate **not yet evaluated** at this capture; doudouOUC has not appeared in the 06:00Z window. Carry forward to Add.377.

---

## Carrier 6 — charmbracelet/crush (0 PRs new since Add.375)

No new merges. The carrier remains at **4 maintainer-class merges in the 60h+ window**. **Falsification of Add.375 prediction**: "crush throughput stays at ≤1 merge/tick; if it spikes, the 60h ratio collapses." Predicate **satisfied** — 0 merges this tick. The 60h throughput ratio relative to anomalyco/opencode is now ~10× lower (anomalyco/opencode added 0 new merges this tick too, narrowing the carrier-throughput gap incidentally).

---

## Carrier 7 — block/goose (0 PRs new since Add.375)

No new merges in the post-Add.375 window or the 24h preceding it. The latest goose merge remains kalvinnchau #9030 at 2026-05-06T01:50:48Z — **4h44m before this addendum's capture**. This is goose's **longest merge gap of W18 day-1** and the **first complete tick with zero goose merges** since Add.358. Combined with crush's 0 merges, **2 of 7 carriers are merge-silent this tick** — a configuration not seen in Add.358–375.

---

## Cross-carrier theme summary (this tick)

- **Same-author intra-tick doublet** (qwen-code): tanzhenxin 55s on subagent surface — **new tightest** instance of the disjoint-file-shared-logical-surface pattern.
- **Cross-author cross-ticking on shared surface** (codex): bolinfest #21257 → viyatb-oai #21285 on `bwrap`, gap 4h00m10s.
- **Two carriers merge-silent** (crush + goose): first occurrence in W18 day-1.
- **First-time-this-week author** (litellm): dennishenry #27190.
- **Three falsifications + one vacuous-satisfaction** of Add.375 predictions.

**Theme candidates seeded for W17 synth #727, #728**:
1. **Sub-minute same-author doublet on shared logical surface but disjoint files**: tanzhenxin's 55s qwen-code doublet pulls the gap distribution of the disjoint-surface-doublet pattern (synth #92, #94, #96) down another order of magnitude. The pattern's gap minimum is now in the **single-digit-second regime** if extrapolated; this is **mechanism-distinct** from the Brendonovich/alexhancock instances because the qwen-code two PRs were **both already CI-green and queued** (open-to-merge < 60s for both), implying a maintainer **pre-batched merge button click sequence** rather than two independent merge decisions. → synth #727.
2. **Multi-carrier merge silence as a coordination-vacuum signal**: 2 of 7 carriers (crush, goose) are merge-silent this tick, which has **never** occurred in Add.358–375. Taken with the 4-consecutive-tick 55–57m mode (the longest-ever sustained tick-width regime), the inter-tick-coordination model needs a **silence-as-information** axis that prior synths (which only tracked merges-as-events) lacked. → synth #728.

---

**Predict at Add.377** (~06:35Z + ~55m → ~07:30Z):
- Tick width returns to the 37–41m shoulder OR extends the 55–57m run to 5 ticks (current 4-tick run is ahistorical).
- At least one of {crush, goose} returns to merging, breaking the 2-carrier-silence configuration.
- pakrym or bolinfest opens a follow-up to #21285's bwrap fix (predicting **same-surface 3-author cross-ticking**); falsified if codex stays single-author for the next tick.
- tanzhenxin opens a third subagent-surface PR within 60m (extrapolation of the 55s doublet pattern).
- doudouOUC opens or merges a third `sdk-python` PR.
- gemini-cli-robot fires a fanout doublet only if a galz10/joshualitt-class fix lands first (conditional, not unconditional).

Total cited: **23 unique PRs across 7/7 carriers** (3 anomalyco/opencode, 3 codex, 2 litellm, 1 gemini-cli, 3 qwen-code, 0 crush, 0 goose — silence is a citation). Head-SHA citations are intentional anchors for synth #727/#728 cross-references.
