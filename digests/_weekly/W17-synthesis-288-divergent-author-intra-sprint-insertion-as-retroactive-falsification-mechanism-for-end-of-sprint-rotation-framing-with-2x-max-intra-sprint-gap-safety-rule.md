# W17 Synthesis #288 — Divergent-Author Intra-Sprint Insertion As Retroactive Falsification Mechanism For End-Of-Sprint Rotation Framing: Mid-Capture Sprint-Closure Inference Becomes Sprint-Pause Inference After Author Resumption Distinct From Synth #286 End-Of-Sprint Rotation And Synth #169 Post-Merge Long-Tail Bulk-Rebase Fan-Out

**Date:** 2026-04-28 (capture window through Add.127 close 16:57Z)
**Repos:** sst/opencode (kitlangton n=4 httpapi sprint with jlongster #24704 inserted at offset +41m24s into the 1h45m36s gap between #24809 and #24811).
**Refines:** synth #286 (end-of-sprint cross-author surface-rotation), synth #169 (post-merge long-tail bulk-rebase fan-out band), synth #205 (chain coupling review-penalty front-loaded on chain-base).
**Distinct from:** synth #286 (which assumes the saturation-author's last sprint merge is **terminal**; synth #288 names the case where the apparent terminal merge is **mid-sprint** and the divergent-author appearance is intra-sprint not post-sprint), synth #169 (which is same-author post-merge fan-out, not cross-author insertion).

## Pattern

Synth #286 (Add.126 anchor) framed jlongster #24704 `2c2fc3499b37` 15:51:25Z `feat(core): store relative path for sessions` as an **end-of-sprint cross-author surface-rotation** — Author-S kitlangton's httpapi sprint had landed its "last" merge at #24809 `ea3c6c34811d` 15:10:01Z, and Author-R jlongster's single-merge appearance on disjoint subsystem `core` at +41m24s satisfied the "isolated lateral surface-jump" criterion at the moment of capture.

Add.127 (16:55:37Z) merged kitlangton #24811 `c00058ed7a423d1b993362fa2d23a072c5967555` `fix(httpapi): align request body openapi shape`, extending the kitlangton httpapi sprint **past** jlongster #24704. The sprint structure is now:

```
kitlangton #24716 13:22:50Z (httpapi)
kitlangton #24799 7739cc53b4c4 15:02:35Z (httpapi)
kitlangton #24809 ea3c6c34811d 15:10:01Z (httpapi)  ← Add.126 framed as sprint-end
jlongster   #24704 2c2fc3499b37 15:51:25Z (core)    ← Add.126 framed as Author-R rotation
kitlangton #24811 c00058ed7a42 16:55:37Z (httpapi)  ← Add.127: sprint resumes, falsifies framing
```

The **synth #286 Instance B reading is now falsified** on the criterion "Author-R's merge is NOT part of any prior or subsequent sprint by Author-R within the same window" — the criterion was vacuously true at Add.126 capture (because #24811 had not yet merged), but the kitlangton sprint's resumption at #24811 means jlongster #24704 sits **inside** the kitlangton sprint, between #24809 (T+0) and #24811 (T+1h45m36s) at offset T+41m24s.

Synth #288 names this **divergent-author intra-sprint insertion** pattern and treats it as a **retroactive falsification mechanism** for end-of-sprint rotation framing. Defining elements:

1. A saturation-author Author-S has merged k consecutive same-subsystem PRs (k≥3) within a bounded sub-3h window.
2. A divergent-author Author-R merges a **single** PR on a **disjoint** subsystem within sub-1h of Author-S's last visible merge.
3. **At capture time**, the configuration is observationally indistinguishable from synth #286 end-of-sprint rotation.
4. **After capture time** (in the next 1–4 ticks), Author-S resumes the same-subsystem sprint with PR k+1, satisfying intra-sprint cadence (within 1.5× the prior intra-sprint inter-merge gap median).
5. The original synth #286 framing is then **falsified** and the configuration is **reframed** as intra-sprint insertion.

## Concrete W17 instance (Add.126→Add.127)

### Sole observed instance — sst/opencode kitlangton/jlongster
- **Author-S:** kitlangton.
- **Author-R:** jlongster.
- **Subsystems:** httpapi (S) vs. core (R) — disjoint.
- **Capture-time framing (Add.126):** end-of-sprint rotation per synth #286 Instance B.
- **Resumption merge:** kitlangton #24811 `c00058ed7a42` 16:55:37Z, **+1h04m12s after** jlongster #24704 and **+1h45m36s after** kitlangton #24809.
- **Cadence check:** inter-merge gap #24809→#24811 is 1h45m36s; the kitlangton sprint's prior largest enumerated intra-sprint gap was ~1h40m (#24716 13:22:50Z → #24799 15:02:35Z) — the resumption gap is within 1.06× the prior largest intra-sprint gap, satisfying element (4) cadence criterion.
- **Subsystem coherence:** all 4 kitlangton PRs share scope-prefix `(httpapi):` (synth #287 Class S discipline); jlongster #24704 uses `(core):` — disjoint scope.
- **Author-R activity check (refined):** jlongster has no other W17 day-2026-04-28 opencode merges in current data. jlongster's #24704 stands alone as a single-merge insertion.

## Cross-instance observations and predictions

Synth #288 is currently anchored on **n=1** instance with **n=1 falsification** of synth #286. This is a single-instance retroactive reframing, not a regime claim. Predictions that would promote synth #288 from instance-class to regime-class:

- **Pred 288-A:** within 12 ticks, a second instance of divergent-author intra-sprint insertion is observed on a different repo. If 0 second instances appear in 12 ticks, synth #288 stays at instance-status and synth #286 Instance A (codex jif-oai → etraut-openai #19929) becomes the only standing instance of synth #286.
- **Pred 288-B:** the time window during which a synth #286-class framing is **safe from synth #288 falsification** has a lower bound of approximately **2× the saturation-author's largest enumerated intra-sprint inter-merge gap**. Operationalize: at capture time T, synth #286 framing is "safe" only if the observed Author-R merge is at offset > 2 × max(intra-sprint gaps). For kitlangton sprint: max intra-sprint gap pre-jlongster was ~1h40m, jlongster offset was 41m24s = 0.41× — synth #286 framing was **always unsafe** at Add.126 capture.
- **Pred 288-C:** synth #288 falsifications are **asymmetric**: Class S sprints (synth #287) are more likely to host intra-sprint insertions than Class N sprints, because Class N's numerical-suffix discipline implies an explicit committed sprint length, while Class S's scope-prefix discipline does not. jif-oai's Class N "memories 1/2/3" sprint has been silent 43m57s post-#20005 with no insertion observed — consistent.
- **Pred 288-D:** synth #286 Instance A (codex jif-oai → etraut-openai #19929 +10m55s after jif-oai's last merge #20005 16:13:35Z) is **at risk** of synth #288 falsification if jif-oai resumes the memory sprint within ~3h of #20005 (i.e. before ~19:13Z). Pred AAA-285 (Add.126 carry, currently tick 1/4 NO RESUMPTION) tracks this. The 10m55s offset is far below 2× the jif-oai max intra-sprint gap of ~46m50s, so synth #286 Instance A is also formally **unsafe** at Add.126 capture under Pred 288-B.

## Methodological consequence — confidence in capture-time inferences

Synth #288 implies that **any synth #286-class end-of-sprint rotation inference made at capture time is provisional** until the Author-S sprint has been silent for at least **2× max(intra-sprint inter-merge gap)** post the apparent sprint-end merge. Until that silence threshold is crossed, the configuration remains synth #288-eligible (intra-sprint insertion) rather than synth #286-confirmed (end-of-sprint rotation).

For Add.127 carry-forward purposes:
- **synth #286 Instance A (codex)** requires jif-oai silence ≥ 2 × 46m50s = ~1h33m40s post-#20005 (i.e. silence through ~17:47Z) before it can be confirmed as synth #286 vs. synth #288. At Add.127 close 16:57Z, jif-oai silence = 43m57s = 47% of threshold — **provisional, not yet confirmed**.
- **synth #286 Instance B (opencode)** is now confirmed-falsified as synth #288 by kitlangton #24811.

## Cross-author within-week appearance check

Cross-checking authors appearing in ≥2 repos this W17 day:
- **kitlangton:** opencode only.
- **jif-oai:** codex only.
- **jlongster:** opencode only.
- **etraut-openai:** codex only (#19929 Add.126, #19920/#19933 earlier Add.124-class).
- **mchen-oai/colby-oai/efrazer-oai (Add.127 codex cluster):** codex only this day.
- **DavidAPierce (gemini-cli #26066 Add.126 silence-break):** gemini-cli only.

**No author appears in ≥2 of the 6 tracked repos on 2026-04-28** in current capture data. Synth #288's intra-sprint insertion is therefore **strictly intra-repo cross-author**, not cross-repo cross-author. This further constrains the falsification surface: synth #288 cannot be triggered by an Author-R appearing on a different repo than Author-S.

## Naming

The synth #288 phenomenon is operationally captured by the question: **"how long must Author-S be silent post their apparent last merge before a divergent Author-R single-merge can be safely framed as end-of-sprint rotation rather than intra-sprint insertion?"** This question has a tractable answer (Pred 288-B's 2× max-intra-sprint-gap rule) and gives the synth its falsifiable structure.
