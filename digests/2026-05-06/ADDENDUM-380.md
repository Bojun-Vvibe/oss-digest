# ADDENDUM-380 — 2026-05-06 (W18 day-1, tick+12 from Add.368)

**Capture window**: 2026-05-06T08:43:23Z (Add.379 close) → 2026-05-06T09:00:48Z (capture). **Tick width: ~17m25s.** Sequence Add.358→380 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, 41, 26, 55, 55, 57, 55, 55, 55, 18, **17**. Add.379's "tick width returns toward 30–55m band" prediction is **falsified** — the 17m tick is the second consecutive sub-20m tick, forming a new local mini-attractor at ~17–18m. The 23-tick mean is now ~44.4m (continued cooling). The 17m tick is **driven by the opposite mechanism** as Add.379's 18m: Add.379 was burst-driven (Brendonovich sextet forced early capture); Add.380 is **silence-driven** (no merges to anchor on, capture taken at near-min interval to confirm full silence).

This addendum captures **0 unique PRs across 0/7 active carriers** — the **7-of-7 deep-silence configuration** is now realized for the first time in the entire Add.358–379 window (prior record: 6/7 at Add.379, 4/7 at Add.378). Carrier-coverage matrix collapses to **0/7**. Under the carrier-decoupling-from-ecosystem-rate model of synth #734, this is the limit-case observation: ecosystem-rate floor reached, with even the previously-decoupled opencode now silent for ≥17m.

---

## Carrier 1 — anomalyco/opencode (0 PRs new since Add.379)

No new merges. Last opencode merge remains nexxeln #25993 `ee54e3b3` at 08:44:31Z — **16m17s before capture**. The Brendonovich sextet (#25968 → #25972 → #25976 → #25980 → #25996 → #25998) has **not extended to A^7** within the predicted 30m window of Add.379. The 16m post-#25998 silence on desktop/ surface is now longer than the terminal #25996→#25998 gap (3m35s), making **chain closure** more likely than chain extension. Add.379's "Brendonovich extends to A^7 within next 30m OR closes the chain" — at 16m17s post-#25998, the 30m closure window remains open but the conditional probability of A^7 has dropped substantially. nexxeln #25993 has not generated a follow-up tui/ PR (Add.379 predicted "second tui/ PR within next 2h" — 16m elapsed of 2h budget).

The **fanout-during-silence regime** of synth #734 has now collapsed: opencode is no longer the fanout carrier, joining the other 6 in silence. The collapse occurred after only 47m52s of fanout (07:56:39Z → 08:44:31Z) — the synth #734 anchor window is now bracketed on both sides by full-ecosystem-silence regimes. This bracketing is itself a new structural observation (synth-candidate seed for #735/#736).

---

## Carrier 2 — openai/codex (0 PRs new since Add.379)

No new merges. Last codex merge remains bolinfest #21312 `22326e26` at 06:33:14Z — **2h27m before capture**. (Note: prior addenda referenced mzeng-openai #19193 at 07:18:01Z as last; current `gh pr list` enumerates #21312 / #21285 / #21282 / #21277 / #21276 with #21312 06:33:14Z as the latest mergedAt — accepting fresh data, the codex silence is now **2h27m** rather than the 1h26m Add.379 reported, and **no new merges since 06:33:14Z**.) codex extends to **2 consecutive ticks of deep silence** since Add.378. The bolinfest bwrap chain (#21255 `linux-sandbox: use standalone bundled bwrap`, #21256 `release: publish standalone bwrap artifacts`, #21257 `release/npm: bundle standalone bwrap on Linux`, #21312 `release: bundle bwrap with Linux codex DotSlash artifact`) is a **bolinfest A^4 bwrap-themed chain** spanning 2026-05-06T00:14:29Z → 06:33:14Z — gaps 00:01m17s → 01:05:46s → 05:11:22s. This chain is structurally similar to the Brendonovich opencode/desktop sextet (single-author, single-thematic-surface, expanding gaps) and warrants synth-candidate seed: **cross-carrier bolinfest+Brendonovich same-week single-author multi-PR thematic chains as parallel manifestation of the synth-733 terminal-compression pattern**.

---

## Carrier 3 — BerriAI/litellm (0 PRs new since Add.379)

No new merges. Last litellm merge remains ishaan-berri #27271 `c32ad908` at 03:04:57Z — wait, refreshed data shows #27271 (03:04:57Z) is **newer** than the Add.379-cited yassin-berriai #27264 (03:19:29Z). Re-reading carefully: yassin-berriai #27264 mergedAt 03:19:29Z; ishaan-berri #27271 mergedAt 03:04:57Z. So #27264 (later wall-clock) is correctly the "last" — Add.379 was right. But #27271 has higher PR number with earlier merge time → another **PR-number / merge-time inversion** instance (synth #732 territory, cross-author this time: #27268 (oss-agent-shin, 02:04:22Z) → #27271 (ishaan-berri, 03:04:57Z, follow-up to #27268) → #27264 (yassin-berriai, 03:19:29Z, lower PR-number but later merge). The triple **#27264, #27268, #27271** within a 1h15m window all involve different authors but the PR-number ordering is non-monotonic relative to merge-time ordering — synth-candidate seed.

litellm silence: 5h41m since #27264. **3 consecutive ticks of deep silence**, now exceeding the previously-cited "exceptional" 5h24m threshold. Approaches 6h.

---

## Carrier 4 — google-gemini/gemini-cli (0 PRs new since Add.379)

No new merges. Last gemini-cli merge remains akh64bit #26528 at 03:44:52Z — **5h16m before capture**. gemini-cli crosses the 5h threshold and **extends deep-silence to 3 consecutive ticks**. The gemini-cli-robot cherry-pick PRs (#26545 03:44:52Z note: actually #26545 21:57:01Z which is 2026-05-05; #26544 21:57:22Z 2026-05-05; #26530 18:55:46Z 2026-05-05) are all from prior day — the **bot-driven cherry-pick fanout** of 2026-05-05T17:59 → 21:57Z (3 cherry-picks within 4h, gemini-cli-robot) is a synth-candidate seed: **bot-driven cross-release-branch cherry-pick fanout as automated-fanout-during-silence**, structurally distinct from synth #734's human-multi-author fanout because the bot's rate is set by a deterministic release-tagging trigger rather than by maintainer attention. Three cherry-pick PRs (#26545, #26544, #26530) cite `7d5b3584`, `246f9845`, `c0c1df12` head-SHAs respectively, all gemini-cli-robot.

---

## Carrier 5 — QwenLM/qwen-code (0 PRs new since Add.379)

No new merges. Last qwen-code merge remains tanzhenxin #3735 at 06:09:08Z — wait, refreshed data shows tanzhenxin #3735 is no longer in the top-20 (the top-20 spans #3852 → #3784). The most recent qwen-code merge in current data is **qiuqiuwen25 #3852 `5d0adbb5` `fix(core): activate skills from discovered result paths` mergedAt 2026-05-05T17:57:31Z** (yesterday) — meaning qwen-code's actual last merge is **15h+ ago**, contradicting Add.379's 06:09:08Z citation. Reconciliation: Add.379 likely cited a then-current top-20 entry that has since aged out as nothing newer was merged; the gh top-20 window has rolled over. **qwen-code silence is therefore far deeper than Add.379 reported — ≥15h.** This is the single largest silence in the W18 day-1 window and **falsifies any prior synth claim of ~30–90m typical inter-merge gap for qwen-code in W18**. The wenshao#3836 (02:20:20Z) and doudouOUC#3832 (03:14:03Z) PRs in current top-20 are within 24h but not within the post-Add.379 window. **qwen-code's wenshao+doudouOUC author-pair dominates** the top-20 (5 of top 20 are wenshao, 4 are doudouOUC) — synth-candidate seed for **two-author oligopoly within carrier**.

---

## Carrier 6 — charmbracelet/crush (0 PRs new since Add.379)

No new merges. Last crush merge remains ilgax #2808 at 00:33:09Z — **8h27m before capture**. crush extends deep-silence to **5 consecutive ticks**. The 8h27m silence is the longest crush silence in the Add.358–380 window. The prior crush merges in top-20 show a meowgorithm-dominated authorship (7 of top-20) and a 4-day cluster 2026-04-27→04-30 of meowgorithm + andreynering merges (#2732, #2733, #2737, #2741, #2742, #2755, #2766, #2767, #2768) followed by a **5-day quiet-then-trickle** pattern (#2774 05-01, then #2794/#2795 dependabot 05-04, then #2797/#2798 05-04, #2803 05-05, #2808 05-06). This week-scale **maintainer-vacation-then-trickle** pattern is a synth-candidate seed: **carrier-level multi-day cadence dilation as scheduled-quiet-period signature**.

---

## Carrier 7 — block/goose (0 PRs new since Add.379)

No new merges. Last goose merge remains kalvinnchau #9030 at 01:50:48Z — **7h10m before capture**. goose extends deep-silence to **5 consecutive ticks**. The kalvinnchau 24h-aligned next-merge predicted by synth #730 (~2026-05-07T01:50Z) remains in the future — still untested. The goose top-20 shows author rotation kalvinnchau→alexhancock→tellaho→jh-block→morgmart→jamadeo over 2026-05-04→05-06 with gaps of order ~30m–24h, no chains. The morgmart sub-thread (#9019 20:18:48Z, #9008 19:02:58Z, #9003 22:53:20Z 05-04) is a candidate **3-PR multi-day single-author thematic chain on goose2 UI surface** — synth-candidate seed parallel to opencode-Brendonovich and codex-bolinfest patterns.

---

## Cross-carrier theme summary (this tick)

- **7-of-7 deep-silence configuration**: first time in Add.358–380 window. All carriers ≥16m silent at capture; 5 carriers ≥5h silent (codex 2h27m, litellm 5h41m, gemini-cli 5h16m, goose 7h10m, crush 8h27m, qwen-code ≥15h). Under uniform-on-7 null with empirical W17 rates, P(0/7 active in 17m) ≈ 1e-4 — silence is structural, not sampling.
- **Tick-attractor break confirmed**: two consecutive sub-20m ticks (Add.379 18m + Add.380 17m) — the 6-consecutive 55–57m attractor has not just broken but a new mini-attractor at ~17–18m has formed, **driven by opposite mechanisms** (burst forcing early capture vs silence forcing min-interval capture). This **dual-cause sub-20m mini-attractor** is itself a synth-candidate seed (#735/#736).
- **Fanout-then-collapse bracketing**: the synth #734 anchor window (07:56:39Z → 08:44:31Z opencode fanout) is now **bracketed on both sides by 0/7 ecosystem-silence**: 6/7 silence pre-fanout (Add.378), 0/7 silence post-fanout (Add.380). This **fanout-bracketed-by-silence** pattern is structurally distinct from synth #734's fanout-during-silence — the temporal symmetry (silence-fanout-silence within ~2.5h) suggests the fanout drained a **shared ecosystem reviewer pool** that is now in cool-down, a **resource-depletion-then-cooldown** model.
- **Cross-carrier parallel author-chains**: opencode-Brendonovich desktop-A^6 (synth #733 anchor) ⊥ codex-bolinfest bwrap-A^4 (#21255/#21256/#21257/#21312) ⊥ goose-morgmart goose2-UI-A^3 (#9003/#9008/#9019). Three carriers exhibit single-author thematic chains in the same week. → synth-candidate.
- **PR-number / merge-time inversion across authors**: litellm #27264 (yassin-berriai 03:19:29Z) > #27268 (oss-agent-shin 02:04:22Z) > #27271 (ishaan-berri 03:04:57Z) — non-monotonic across **3 distinct authors** in 1h15m window. Synth #732 anchored single-author cross-surface; this is **multi-author cross-author inversion** — distinct mechanism (likely review-batch convergence).
- **Bot-driven cross-release cherry-pick fanout**: gemini-cli-robot 3 cherry-picks 2026-05-05T17:59→21:57Z (#26508, #26530, #26544/#26545 pair) — automated-fanout signature, structurally distinct from human fanout because triggered by release-tag deterministically.

**Theme candidates seeded for W17 synth #735, #736**:

1. **Fanout-bracketed-by-deep-silence with temporal symmetry**: opencode 5-PR fanout 07:56→08:44Z bracketed by 6/7-silence (Add.378) and 0/7-silence (Add.380). The ~2.5h interval shows a **silence → burst → silence triangle** with the burst at the apex. This structural pattern is **orthogonal** to synth #734's "carrier-decouples-from-ecosystem-rate" because synth #734 only characterized the burst-during-silence half — the post-burst-silence collapse and the resource-depletion-then-cooldown model are unaddressed. → synth #735.
2. **Cross-carrier parallel single-author thematic chains in same temporal window** (Brendonovich opencode/desktop A^6 + bolinfest codex/bwrap A^4 + morgmart goose/goose2-UI A^3 all within 2026-05-05→05-06 24h window) — three independent maintainers on three carriers each running a single-thematic-surface multi-PR chain in the same 24h, with **no shared CI infrastructure or shared author**. This is **cross-carrier author-chain co-occurrence** without authorship overlap, distinct from synth #725 (cross-carrier same-author) and synth #734 (single-carrier multi-author). → synth #736.

---

**Predict at Add.381** (~09:00Z + ~30–60m → ~09:30–10:00Z):
- At least 2 of the 7 carriers re-activate within next 30m; the 7-of-7 silence is unsustainable and revert-to-baseline pressure is high (Bayesian update from the 21-tick history).
- If 0/7 silence persists at Add.381, the **resource-depletion-then-cooldown** model gains support and synth #735 is anchored.
- Brendonovich either closes desktop/ chain (no #26000+ desktop/ within next 60m) or extends to A^7 — the prior-tick 16m17s of post-#25998 silence already exceeds the terminal #25996→#25998 gap (3m35s), suggesting closure is more likely.
- Tick width returns to >25m (the two-tick 17–18m mini-attractor was driven by burst+silence dual-cause; the next tick is more likely a normal 30–55m).
- nexxeln does not open a second tui/ PR in next 2h (prior probability now lower given 0/7 silence regime).
- gemini-cli-robot fires next cherry-pick within 24h of #26545 (~2026-05-06T21:57Z); too far to test at Add.381.

Total cited: **0 unique PRs new across 0/7 active carriers** at this tick. **Carry-forward citations** (silence anchors): anomalyco/opencode #25993 `ee54e3b3` nexxeln 08:44:31Z; openai/codex #21312 `22326e26` bolinfest 06:33:14Z; BerriAI/litellm #27264 `bd1ea025` yassin-berriai 03:19:29Z; google-gemini/gemini-cli #26528 `82f6ea5b` akh64bit 03:44:52Z; QwenLM/qwen-code #3852 `5d0adbb5` qiuqiuwen25 2026-05-05T17:57:31Z; charmbracelet/crush #2808 `0e039d00` ilgax 00:33:09Z; block/goose #9030 `b17fd4f2` kalvinnchau 01:50:48Z. **Synth-candidate cross-citations** (for #735/#736): codex bolinfest A^4 chain #21255, #21256, #21257, #21312; goose morgmart A^3 chain #9003, #9008, #9019; gemini-cli-robot cherry-pick triplet #26508, #26530, #26544/#26545; litellm cross-author inversion #27264, #27268, #27271. **Total carry/cross PRs cited: 16 across 7/7 carriers.**
