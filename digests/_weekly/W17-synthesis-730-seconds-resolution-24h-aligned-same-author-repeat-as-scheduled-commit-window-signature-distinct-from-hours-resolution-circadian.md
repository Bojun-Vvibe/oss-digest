# W17 Synthesis #730 — Seconds-resolution 24h-aligned same-author repeat as a scheduled-commit-window signature, distinct from the hours-resolution circadian clustering of synth #582 and the gap-distribution continuum of synth #725

**Anchor window:** 2026-05-05T01:39:08Z → 2026-05-06T01:50:48Z (24h00m11s, block/goose ACP surface, kalvinnchau).
**Anchor carriers:** block/goose (the seconds-resolution 24h-aligned anchor), with comparison datapoints from openai/codex (pakrym), QwenLM/qwen-code (doudouOUC, wenshao), BerriAI/litellm (yuneng-berri, yassin-berriai), anomalyco/opencode (Hona, rekram1-node, jlongster).
**Lens:** synth #582 captured the **hours-resolution circadian bimodality** of merge timestamps (21–23z and 03–08z UTC modes). Synth #725 captured the **continuum of cross-carrier same-author doublet inter-merge gaps** spanning four orders of magnitude. Neither isolates the limiting case where a single author's same-surface PRs land at **near-exact 24h alignment with sub-minute precision**. This synth (#730) characterizes that case as a **scheduled-commit-window signature** distinct from circadian preference and gap-distribution density.

## Why this is distinct from prior synth (W17 #720–#729)

- **#582** is the right comparison: it shows that authors **prefer** certain UTC hours, but its resolution is hours and its statistic is a population histogram. It does **not** track that a single author returns at **the same minute-second offset** across 24h.
- **#725** treats inter-merge gaps as a continuous distribution; near-24h gaps are a single bin in that distribution and not analyzed for their second-resolution alignment.
- **#727** captures sub-minute doublets at the **opposite end** of the gap scale (intra-tick).
- **#728** uses silence-as-information; this synth uses **alignment-as-information**.
- **#729** characterizes A→B→A surface chains; this synth is intra-author and intra-surface.
- This synth is the **first** to argue that a 24h±60s alignment is mechanism-distinct from a 24h±2h alignment: the former requires a **scheduled action** (cron, calendar block, deliberate end-of-day ship), the latter is consistent with **circadian drift**.

## The kalvinnchau anchor

| PR | author | mergedAt | head SHA | surface | Δt from prior |
|---|---|---|---|---|---|
| [block/goose#9000] | kalvinnchau | 2026-05-05T01:39:08Z | `2fe4c3d0` | acp/config-secret | — |
| [block/goose#9030] | kalvinnchau | 2026-05-06T01:50:48Z | `b17fd4f2` | acp/provider-catalog | **24h00m11s** |

**Properties:**
- Same author, same logical surface (ACP layer), 11-second deviation from exact 24h.
- 11s is **smaller than typical CI variance** for the goose carrier (per Add.358–376 carrier rolls, goose CI runs cluster 6–14 min; ship-button-to-merge latency variance is ~5–15s).
- Both PRs are feature commits (`feat:`), not fixes — consistent with a planned daily ship cadence.
- The 11s deviation is **not zero** because the merge timestamp is dominated by the **CI-completion + reviewer-approval + ship-button-click** sequence, all subject to the carrier's natural latency floor.

The **claim** is not that kalvinnchau merged at 01:39:08Z and **scheduled** a merge for 01:50:48Z exactly — the claim is that kalvinnchau **opens and reviews ACP-surface PRs in a scheduled daily window** centered around 01:30–02:00 UTC, and the 11s alignment is the residual signature of that scheduling.

## Cross-carrier sub-minute 24h-aligned candidate scan

Scanning Add.358–377 for any same-author repeats whose inter-merge gap is in the **24h±5min** band:

1. [block/goose#9000] kalvinnchau 2026-05-05T01:39:08Z → [block/goose#9030] kalvinnchau 2026-05-06T01:50:48Z — **Δ = 24h00m11s** ✓ (anchor)
2. [openai/codex#21276] pakrym-oai 2026-05-06T01:57:17Z → no pakrym PR exists in the prior 24h±5min band (pakrym was absent for ~36h before #21260 at 00:16Z). **Negative**: pakrym does not exhibit the pattern.
3. [BerriAI/litellm#27227] yuneng-berri (`fa6a82ab`) 2026-05-05T20:57:05Z → [BerriAI/litellm#27249] yuneng-berri 2026-05-06T00:21:19Z. **Δ = 3h24m**, not 24h. **Negative**.
4. [BerriAI/litellm#27240] yuneng-berri 2026-05-05T22:51:21Z → look 24h prior: yuneng-berri's W17 cadence shows merges at 22:30z–23:30z UTC across multiple days per Add.371/373 — the **hours-resolution cluster** of synth #582 — but no second-resolution ±5min match within the W18 window.
5. [anomalyco/opencode#25888] rekram1-node 2026-05-05T15:39:26Z → [anomalyco/opencode#25887] rekram1-node 2026-05-05T15:34:20Z (intra-tick doublet, Δ = 5m, synth #727 regime, not #730).
6. [QwenLM/qwen-code#3810] wenshao 2026-05-04T14:42:07Z → [QwenLM/qwen-code#3836] wenshao 2026-05-06T02:20:20Z. Δ = 35h38m, not 24h. **Negative**.
7. [QwenLM/qwen-code#3833] doudouOUC 2026-05-05T11:25:00Z → no doudouOUC PR at 2026-05-06T11:00–11:50Z window (carry forward as testable).
8. [google-gemini/gemini-cli#26542] galz10 2026-05-05T21:37:15Z → no prior galz10 merge in the 2026-05-04T21:30–21:45Z band per Add.358–375 rolls. **Negative**.
9. [anomalyco/opencode#25911] jlongster 2026-05-05T19:53:06Z → [anomalyco/opencode#25894] jlongster 2026-05-05T20:39:37Z (Δ = 46m, intra-tick).
10. [block/goose#9028] alexhancock 2026-05-05T19:31:00Z → [block/goose#9029] alexhancock 2026-05-05T19:20:35Z (Δ = 10m, synth #727 regime — already cited as synth #727 instance).
11. [openai/codex#21261] bolinfest 2026-05-05T23:02:06Z → [openai/codex#21256] bolinfest 2026-05-06T00:15:46Z (Δ = 1h13m, not 24h).
12. [BerriAI/litellm#27215] ishaan-berri 2026-05-05T18:25:07Z → [BerriAI/litellm#27271] ishaan-berri 2026-05-06T03:04:57Z (Δ = 8h39m, not 24h).

**Result**: **1 confirmed instance** (kalvinnchau anchor) and **0 confirmed cross-carrier matches** in the 19-tick W18 window. Base rate **1/N** where N ≈ 200+ same-author repeats observed in the window. This is a **rare signature**.

## Three competing mechanisms

### Mechanism α — Coincidence (null hypothesis)

If same-author repeats are uniformly distributed in the 0–48h gap range, the probability of a single instance falling in any 60s bin is ~60s/172800s ≈ 0.035%. With ~200 same-author pairs observed, the expected number of 24h±60s hits is ~0.07. **Observed: 1.** This is a 14× excess but on a small denominator — **not yet statistically separable from chance** at the 1-instance level. Need 3+ instances to reject α.

### Mechanism β — Circadian preference (synth #582 base case)

If kalvinnchau prefers 01:30–02:00 UTC for ACP-surface merges, then any 24h-aligned pair within that band is consistent with circadian drift. But synth #582's circadian width is **hours**, and the kalvinnchau alignment is at **±11s**. The expected width under β is 30–120 min (the typical circadian preference width); 11s is **3–4 orders of magnitude tighter** than β predicts.

### Mechanism γ — Scheduled commit window (the synth #730 hypothesis)

kalvinnchau operates a daily ACP-surface review/ship cycle: opens PRs during the work-day, reviews them in the evening, and ships during a fixed late-evening / early-morning UTC window (which corresponds to 18:30–19:00 local time in a US-Pacific-anchored schedule, 21:30–22:00 in US-Eastern, or 09:30–10:00 in the Asia-Pacific morning depending on residence). The 11s residual is the carrier's CI/ship-button latency floor.

Mechanism γ predicts the alignment will **persist** across W18: if kalvinnchau ships another ACP feat in the next 24h±5min window, the pattern is confirmed.

## Predictions falsifiable at Add.378–392 (next ~14 ticks ≈ 14 hours forward; the 24h-window prediction tests at next-day capture)

- kalvinnchau opens or merges a goose ACP-surface PR within 2026-05-07T01:45Z–01:55Z (24h±5min from #9030). **Falsified** if no kalvinnchau ACP merge in that band; mechanism γ rejected and the pattern reverts to chance/circadian.
- A second carrier exhibits a same-author 24h±60s aligned same-surface repeat in W18. **Falsified** if 14 days pass with no second instance — would suggest the pattern is kalvinnchau-specific (an individual scheduling habit, not a systemic carrier feature).
- doudouOUC opens a sdk-python PR at 2026-05-06T11:20–11:30Z. **Falsified** if the doudouOUC chain breaks pattern (the chain so far has 3 PRs at 02:15Z, 11:25Z, 03:14Z — no 24h alignment evident, but 11:25Z is testable).
- The kalvinnchau alignment narrows on next observation (becomes <11s) rather than widening. Suggests a **deterministic scheduling mechanism** (cron/CI auto-merge) rather than human routine.

## Cross-references

- Add.376 (deep-silence configuration; goose silence followed kalvinnchau's #9030 merge — consistent with kalvinnchau's daily ship completing the goose tick).
- Add.377 (kalvinnchau #9030 cited in Carrier 7; alignment first noted there).
- Synth #582 (hours-resolution circadian — provides the contrastive baseline).
- Synth #725 (continuous gap distribution — provides the population frame).
- Synth #727 (sub-minute pre-batched intra-tick — opposite end of gap scale; same "tight alignment is mechanism-distinct" reasoning applied at the other extreme).
- Synth #728 (silence-as-information — pairs well with alignment-as-information as the two non-event-occurrence axes).
- Synth #729 (A→B→A rotation — the kalvinnchau→jh-block→kalvinnchau ACP rotation is the **same kalvinnchau** whose 24h alignment is the anchor here; the two synths analyze orthogonal features of the same author's chain).
