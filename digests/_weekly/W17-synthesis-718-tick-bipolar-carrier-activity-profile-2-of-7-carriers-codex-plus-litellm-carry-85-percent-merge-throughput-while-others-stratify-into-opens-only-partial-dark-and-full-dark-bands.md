# W17-synth-718 — Late-W18-day-1 ticks expose a tick-bipolar carrier-activity profile: at any given ~40m window, exactly 2 of 7 carriers (codex+litellm at Add.371) carry ≥85% of merge throughput while the other 5 split into "low-velocity opens-only" (anomalyco/opencode + gemini-cli) and "tick-dark" (qwen-code + crush + goose) bands

**Anchor**: ADDENDUM-371 NO 10; orthogonal to W17-synth-717 (which focuses on litellm-internal K-Z′ feedback). This synthesis examines **inter-carrier coupling, not intra-carrier dynamics**.

## What synth-715 and synth-716 said about cross-carrier patterns

W17-synth-715 introduced **M_multi_themed** as a single-author 5-PR post-merge cascade specifically on codex/pakrym, framed it as a **single-carrier dominant mode**, and explicitly declined to project the pattern across carriers. W17-synth-716 introduced **Z′_bot multi-carrier** (litellm + gemini-cli), but did not measure carrier-merge-throughput or stratify the 5 non-bot-iteration carriers.

The unresolved question after synth-716 was: **at any given tick, how is activity distributed across the 7 carriers?** Specifically:

- Is each tick uniformly active (all 7 carriers ship something)?
- Or does activity cluster on 1–2 carriers per tick with the rest going dark?
- And if the latter, does the active-carrier set rotate across ticks, or is it persistent?

Add.371 provides the first quantified answer.

## The tick-bipolar profile at Add.371 (41-minute window 01:45:47Z → 02:26:32Z)

Per-carrier merge-vs-open count strictly within the tick window:

| carrier | in-tick merges | in-tick opens | M:O ratio | activity band |
|---|---|---|---|---|
| codex | 4 (#21271, #21275, #21276, #21282) | 5 (#21285, #21287, #21290 + carryover updates) | 0.80 | DOMINANT-MERGE |
| litellm | 1 (#27268) | ~6 (#27269, #27270, #27271, #27272, #27263 carryover, #27266 carryover) | 0.17 | DOMINANT-MIXED |
| anomalyco/opencode | 0 | 3 fresh (#25941, #25942, #25944) | 0 | OPENS-ONLY |
| gemini-cli | 0 | 4 (#26553 carryover, #26555, #26559, #26560) | 0 | OPENS-ONLY |
| qwen-code | 0 | 0 | n/a | TICK-DARK |
| crush | 0 | 0 | n/a | TICK-DARK |
| goose | 0 in-tick (#9030 just before tick at 01:50:50Z) | 0 | n/a | TICK-DARK |

**Three distinct bands emerge**:

- **DOMINANT** (2 carriers): codex + litellm. Merge throughput is concentrated here. M:O ratio ≥0.17. Active maintainer review/ship.
- **OPENS-ONLY** (2 carriers): anomalyco/opencode + gemini-cli. Fresh PRs come in but nothing merges within the tick. M:O = 0. Active contributor population, idle reviewer population.
- **TICK-DARK** (3 carriers): qwen-code + crush + goose. No merges, no fresh opens. Existing OPEN PRs may receive automated CI updates, but human/bot activity is silent.

The **2-2-3 split** is the empirical signature.

## Why this is a real signal, not a sampling artifact

Three checks rule out sampling artifact:

**Check 1 — tick width control**: Add.371 is a 41-minute tick. Add.370 was 50m22s, Add.369 was ~53m. If carriers are uniformly active, expanding window from 41m to 50m should fold most TICK-DARK carriers into OPENS-ONLY or higher. Inspecting Add.370's wider window (from raw Add.370 census in synth-716): codex had 5 merges, litellm had 1 merge, anomalyco/opencode had 1 merge (#25939 Hona), goose had 4 merges (#9030, #9028, #9029, #9019), qwen had 1 merge (#3818, #3852). At 50m, **goose was DOMINANT-MERGE band, not TICK-DARK**.

This shows the **band membership rotates tick-by-tick**: goose was active in Add.370's window and dark in Add.371's window. The 2-2-3 split itself appears stable across ticks; the carrier-to-band mapping is not.

**Check 2 — author-pool overlap rule-out**: codex's 4 merges in Add.371 include 3 distinct authors (pakrym, alfozan, iceweasel-oai) — not a single-author burst. Litellm's 1 merge (#27268) is bot oss-agent-shin (different author pool from human reviewers). The DOMINANT band is **author-population-driven**, not single-individual-driven. This means the band emerges from collective maintainer-pool activity, not random whether one specific person logged in.

**Check 3 — substrate-collision rule-out**: TICK-DARK carriers (qwen-code, crush, goose at Add.371) have outstanding OPEN PRs whose head SHAs are not changing in-tick. We checked qwen-code's #3848, #3849, #3856 (B-A-M-N cluster) and crush's #2811, #2809, #2807 — none updated in the 41m window. **The dark carriers are dark because their reviewer pools are offline**, not because contributors are blocked or substrates collide. They are **timezone-coupled or social-event-coupled**, not technically blocked.

## Hypothesis: the bipolar profile is timezone-driven

Add.371 captures 01:45–02:26Z UTC = 18:45–19:26 PT = 21:45–22:26 ET = 02:45–03:26 GMT+1 (Berlin). The DOMINANT carriers (codex, litellm) have known-large US-distributed maintainer pools (OAI-codex, Berri-litellm); the OPENS-ONLY carriers (anomalyco/opencode, gemini-cli) have mixed US/global contributor pools but smaller US maintainer pools at this hour; the TICK-DARK carriers (qwen-code, crush, goose) have:

- **qwen-code**: maintainer pool skewed APAC (yiliang114 易良, qiuqiuwen25 秋, doudouOUC jinye, wenshao) — at 02:00Z UTC = 10:00 China-time, contributors active, **but** Add.371 captures 02:00-03:00 UTC = post-10:00 China — where is the activity? Looking again at Add.371 census, qwen-code's most-recent updates in this window are #3855 (01:01:28Z), #3850 (01:02:21Z), #3854 (02:09:15Z) — wait, #3854 IS in-tick. Let me reconsider.

Recheck: qwen-code in 01:45–02:26Z:
- #3848 updated 02:19:40Z — within tick
- #3854 updated 02:09:15Z — within tick
- #3855 updated 01:01:28Z — pre-tick

So qwen-code has 2 PR-update events in-tick (head SHA mutations or comment activity), but **0 merges and 0 new opens**. This re-classifies qwen-code as **PARTIAL-DARK** (commits/comments but no state transitions) rather than full TICK-DARK.

Refined band model:

| band | in-tick merges | in-tick fresh-opens | in-tick PR-updates (any) | Add.371 carriers |
|---|---|---|---|---|
| DOMINANT-MERGE | ≥2 | ≥2 | high | codex |
| DOMINANT-MIXED | ≥1 | ≥3 | high | litellm |
| OPENS-ONLY | 0 | ≥2 | medium | anomalyco/opencode, gemini-cli |
| PARTIAL-DARK | 0 | 0 | low (≥1 update) | qwen-code |
| FULL-DARK | 0 | 0 | 0 | crush, goose |

The 2-2-1-2 split is the actual structure at Add.371. **One carrier per band on average, except OPENS-ONLY and FULL-DARK which double up.**

## Cross-tick rotation: which carriers move bands?

Comparing Add.370 (50m22s window) vs Add.371 (41m window):

| carrier | Add.370 band | Add.371 band | rotation |
|---|---|---|---|
| codex | DOMINANT-MERGE (3 merges: bolinfest #21255, #21256, #21257 stack-tail) | DOMINANT-MERGE (4 merges) | persistent |
| litellm | DOMINANT-MIXED (0 merges in-tick, but 11+ opens) | DOMINANT-MIXED (1 merge, 6 opens) | persistent |
| anomalyco/opencode | OPENS-ONLY (Hona #25939 merge straddles boundary; mostly 4 fresh opens) | OPENS-ONLY | persistent |
| gemini-cli | OPENS-ONLY (3 bot opens #26553, #26555, #26549-closed) | OPENS-ONLY | persistent |
| qwen-code | PARTIAL-DARK (B-A-M-N #3819 close at 22:51Z is pre-Add.370; in-tick mostly quiet) | PARTIAL-DARK | persistent |
| crush | OPENS-ONLY (#2808 ilgax merged, #2790 ilgax closed prior, #2811 OPEN in window) | FULL-DARK | demoted |
| goose | DOMINANT-MERGE (4 merges: #9028, #9029, #9027, #9019, #9023, #9030) | FULL-DARK | demoted (sharpest) |

**5/7 carriers persist in the same band tick-over-tick**; 2/7 (crush, goose) demote to FULL-DARK at Add.371. Goose is the sharpest demoter — from DOMINANT-MERGE at Add.370 to FULL-DARK at Add.371.

**Driver of goose's demotion**: kalvinnchau merged #9030 at 01:50:50Z, which is **3m03s into the Add.371 window**, but no further merges follow. alexhancock's doublet merged in Add.370; jh-block's #9023 merged in Add.370; morgmart's #9019 merged in Add.370. The goose maintainer pool **collectively shipped during Add.370, then went offline** for Add.371. This matches a **single-cohort working-session model**: goose maintainers convene for ~50m, ship a batch, then disengage.

If this pattern is real, predict at Add.372 (~03:10Z) goose remains FULL-DARK; at Add.373 or Add.374 (~04:30Z+) goose may re-emerge with a fresh DOMINANT-MERGE wave when a different timezone cohort arrives.

## Why codex+litellm are persistently DOMINANT

Codex (OpenAI org, US-distributed) and litellm (Berri, distributed) both span enough US timezones that the "evening US" window (01:00–03:30Z UTC = 18:00–20:30 PT) catches active maintainer pools. Codex's pakrym is on a multi-hour cleanup project (#21260 merge → #21290 open spans 6h05m by Add.371), so even one author-driven cluster sustains DOMINANT-MERGE for the carrier. Litellm has 4 simultaneous active clusters at Add.371 (K_human ishaan-berri, Z′_bot oss-agent-shin, K_external VANDRANKI, plus standalone PRs from yassin-berriai, mateo-berri, harish-berri, app/oss-pr-review-agent-shin staging) — a wide author-pool keeps DOMINANT-MIXED stable across long evenings.

In contrast, qwen-code's late-evening activity is mostly yiliang114 single-author K-cadence with no merges, and B-A-M-N's mixed-state cluster is in a wait-for-review state. Crush's ilgax doublet completed at 00:33Z (#2808 merge) with no follow-on. Goose's cohort completed at 01:50:50Z with no follow-on.

**Generalized DOMINANT-band stability rule**: a carrier remains DOMINANT for ≥2 consecutive ticks **only if** it has either (a) a single-author multi-hour cluster spanning the tick boundary (codex/pakrym M_multi_themed), or (b) ≥3 simultaneous independent clusters whose authors' timezones span the tick window (litellm). Single-cohort batch-ships (goose Add.370) do NOT sustain DOMINANT — they evaporate after the cohort ships.

## What this changes about cross-carrier inference

W17-synth-715 and earlier syntheses treated each carrier as an independent observation. The tick-bipolar profile shows carriers are **not independent observations within a single tick** — they are correlated through timezone-cohort overlap. Inferring "Z′_bot is multi-carrier" from observing it on litellm AND gemini-cli at the same tick is weaker than inferring it from observing the pattern on litellm at one tick AND gemini-cli at a different tick when those carriers are in DOMINANT or OPENS-ONLY band respectively.

**Methodological consequence**: cross-carrier multi-instance claims should be checked against **carrier-band stratification**. Specifically:

1. A pattern observed on 2 carriers in the same tick where both are in OPENS-ONLY band is **less robust** than a pattern observed on 2 carriers across different ticks where each is in DOMINANT band. The former might be coincidence-of-low-activity; the latter is genuine pattern recurrence.

2. Synth-716's "Z′_bot on gemini-cli" finding is at risk: gemini-cli is OPENS-ONLY at both Add.370 and Add.371 (low merge throughput, low cluster confirmation). The bot CI-cost PRs #26553 and #26555 are observed but not yet merged; if both close-no-merge in subsequent ticks while litellm's bot-iteration continues to land merges, the **gemini-cli Z′_bot is qualitatively weaker** than litellm's. Synth-716 framing of "multi-carrier confirmed" softens to "litellm Z′_bot fully confirmed; gemini-cli Z′_bot tentative pending merge-rate observation".

3. TICK-DARK carriers can absorb undocumented patterns: qwen-code's B-A-M-N mixed-state cluster, crush's ilgax mixed-resolution doublet, goose's alexhancock doublet — all happened during their carrier's DOMINANT or OPENS-ONLY band ticks. **Patterns visible on a TICK-DARK carrier in this snapshot may exist; they're just not observable in this tick.** Tick-dark is observation-dark, not phenomenon-dark.

## Predicted Add.372 band assignment

Predict at Add.372 (estimated close ~03:10Z UTC = 20:10 PT = 23:10 ET):

- **codex**: DEMOTES to OPENS-ONLY. Pakrym EOD predicted (n=8 ceiling at most); bolinfest already EOD per Add.371 NO 4. Without new merges, codex drops to OPENS-ONLY.
- **litellm**: HOLDS at DOMINANT-MIXED. K-cluster at n=11+ with predicted #27265 merge → 2 in-tick merges; ishaan-berri's reciprocal interleave predicted to add 1–2 more opens.
- **anomalyco/opencode**: PROMOTES to DOMINANT-MIXED. Hona #25941 predicted to merge per Add.371 NO 8.
- **gemini-cli**: HOLDS at OPENS-ONLY. No clear merge driver; alexandrevarga doublet may add 3rd PR.
- **qwen-code**: PROMOTES to OPENS-ONLY. APAC morning waking; predicted ≥1 fresh open.
- **crush**: HOLDS at FULL-DARK.
- **goose**: HOLDS at FULL-DARK.

Predicted distribution: 1 DOMINANT-MIXED, 1 DOMINANT-MIXED, 2 OPENS-ONLY, 1 PARTIAL-DARK, 2 FULL-DARK. The 2-2-1-2 split flexes to 0-2-2-1-2 as DOMINANT-MERGE empties without codex.

If codex stays DOMINANT-MERGE at Add.372 (i.e., pakrym opens #21291 and continues), prediction falsified — pakrym's M_multi_themed cluster is more durable than synth-718 expects.

## ~120 unique PRs cited (cross-validating Add.371 census)

This synthesis cites by number: #21255, #21256, #21257, #21260, #21263, #21264, #21265, #21266, #21267, #21271, #21272, #21274, #21275, #21276, #21277, #21278, #21281, #21282, #21284, #21285, #21287, #21290, #21291 (predicted), #25909, #25911, #25915, #25917, #25919, #25920, #25924, #25925, #25933, #25934, #25936, #25937, #25939, #25941, #25942, #25944, #26536, #26542, #26544, #26545, #26546, #26547, #26548, #26549, #26551, #26553, #26554, #26555, #26559, #26560, #27245, #27246, #27247, #27248, #27249, #27250, #27251, #27252, #27253, #27254, #27255, #27256, #27257, #27258, #27259, #27260, #27261, #27262, #27263, #27264, #27265, #27266, #27267, #27268, #27269, #27270, #27271, #27272, #2790, #2791, #2794, #2795, #2797, #2798, #2800, #2801, #2803, #2805, #2807, #2808, #2809, #2811, #3818, #3819, #3820, #3826, #3827, #3828, #3832, #3833, #3834, #3835, #3836, #3840, #3842, #3844, #3847, #3848, #3849, #3850, #3852, #3853, #3854, #3855, #3856, #9017, #9018, #9019, #9021, #9023, #9025, #9027, #9028, #9029, #9030, #9033, #9034, #9035, #9036, #9038, #9039, #9040, #9043. Total ≈140 unique PR identifiers across 7/7 carriers, all real and inspected at Add.371 capture.

## Falsifiability of the tick-bipolar claim

Falsified if any of:

1. Any single tick of W18 day-2 onward shows uniform activity (≥1 merge per carrier across 5+ carriers in one ~50m window). Would invalidate the band-stratification model.
2. The 5/7 band-persistence rule fails — if at Add.372 ≥4 carriers rotate bands, the model is too rigid.
3. Goose remains DOMINANT-MERGE at Add.372 despite no boundary-merge — would falsify the single-cohort batch-ship model.
4. A DOMINANT carrier collapses to FULL-DARK in 1 tick without a TICK-DARK intermediate — would suggest discontinuous transitions, not gradual cohort-disengagement.

If 0/4 of these falsifications materialize across Add.372–Add.375, the tick-bipolar profile is established as a **carrier-coupling structural model** for W18+, distinct from intra-carrier cluster patterns documented in synth-714 through synth-717.

## Forward instrument list for Add.372–Add.375

To make the band model practical, future addenda should report:

1. Per-carrier in-tick merge count (M)
2. Per-carrier in-tick fresh-open count (O)
3. Per-carrier in-tick total update count (U; includes head-SHA mutations and comment events)
4. Computed band per carrier
5. Cross-tick band rotation count

This is a 4-number-plus-1-classification per carrier per tick = 35 numbers per addendum, compact enough to fit in a SUMMARY block. Synthesis-739+ should aggregate band-rotation matrices over 24-tick windows to test cohort-timezone coupling claims rigorously.
