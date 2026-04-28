# ADDENDUM-113 — 2026-04-28 (capture 2026-04-28T06:30Z)

**Capture window:** 05:52:00Z → 06:30:00Z UTC. Window width: **38m00s** (back inside ≤45m target after Add.112's 57m).
**Predecessor:** ADDENDUM-112 (closed 05:52:00Z; carry preds incl. S branch (iii)/S', SS', TT, UU, VV, WW, XX, YY, PP, KK, OO/OO', 254-1 SUSTAINS, 255-1' RESOLVED-CONFIRMED, 255-1'' STRESSED-FALSIFIED-DIRECTION, H STRESSED).

## Headline events — **commit-phase NARROWS at Add.113: codex 1 merge in 38m (#19899 bolinfest doublet half-merge), opencode 0 merges (mid silence extends to 1h45m+), litellm 0 merges (mid silence to 2h09m+), Pred S branch (iv) PARTIAL-CONFIRMED via #19899 sole merge (#19900 still open), Pred SS' first data point CONFIRMS positive open-merge correlation (1 merge + 3 opens this tick — same direction as Add.112), Pred PP RESOLVED-CONFIRMED (kitlangton 5-tick silence achieved), Pred TT INSTANT-CONFIRMED (Brendonovich opens #24738 while #19899/#19900 doublet split), Pred KK RESOLVED-FALSIFIED (deadline reached, no jackmhny activity)**

1. **Cross-repo merge count this window: 1 merge, 3 opens, 0 closed-no-merge — sole merge is codex.** Per-minute merge rate 0.026 (Add.112 was 0.088 — **3.4× decay**). **Single-repo concentration: 1/1 = 100% codex (4th consecutive tick of codex-only commit-phase).** Per-repo-tick crossing rate this tick: opencode (mid→mid), litellm (mid→mid), codex (shallow→shallow), gemini-cli/goose/qwen-code (deep→deep) = **0/6 = 0%** — **outside [20%, 40%] band (below floor)**. **Pred 254-1 4-tick rolling = (42% + 17% + 33% + 0%) / 4 = 23.0%** — **inside band but at lower edge; trajectory STRESSED-DIRECTION.** **Pred 254-1 SUSTAINS at Add.113 by 3pp margin from band floor.**

2. **Pred S RESOLVED-PARTIAL branch (iv) at Add.113: bolinfest #19899 (`app-server-protocol: mark permission profiles experimental`) MERGED at 06:08:35Z (`0a32c8b3`), lifespan ~5h22m.** **#19900 doublet sibling STILL OPEN at lifespan 5h44m+.** This is an **asymmetric half-merge** of the doublet — exactly the signature catalogued by synth #87 (`asymmetric-half-merge-of-sub-10s-doublet-prune-half-lands-rework-half-iterates`). **Pred S' (12h-merge window for either) CONFIRMED at 5h22m — well inside 12h.** **Pred S branch (iii) RESOLVED-FALSIFIED-DIRECTION** (it predicted "both still OPEN ≥4h"; only one is). **Pred ZZ (NEW): #19900 either merges within 6h of #19899's merge (by ~12:08Z) OR closes-no-merge as a pruned doublet half. Falsifier: #19900 still OPEN at Add.119 (~12h post-#19899-merge).** Tests synth #87 conformance at the rework-half temporal axis.

3. **Pred TT INSTANT-CONFIRMED at Add.113: Brendonovich opens opencode #24738 (`fix(app): preserve per-workspace icon override from localStorage`) at 06:10:05Z while bolinfest #19900 codex doublet-half remains open.** Cross-repo concurrent multi-stack-author state: **bolinfest holds 1 open codex PR (#19900); kitlangton holds 1 open opencode PR (#24717 from Add.111); Brendonovich holds 1 open opencode PR (#24738, NEW); rektide holds 1 open opencode PR (#24728 from Add.111).** **The opencode "debut wave" of Add.111 (Brendonovich + rekram1-node + rektide) now has Brendonovich opening a 2nd PR within ~2h of the wave** — the wave is sustaining as multi-tick rather than 1-tick spike. **Pred AAA (NEW): of {Brendonovich, rekram1-node, rektide}, ≥2 produce a merged opencode PR by Add.116. Falsifier: ≤1 merges.** Tests whether the opencode debut wave converts to commit-phase contribution.

4. **Pred SS' (codex opens AND merges positively correlated within commit-phase ticks) — first data point at Add.113.** Add.113: 1 merge + 1 open (codex #19939 canvrno-oai 06:19:41Z) = co-fire. Add.112: 5 merges + 3 opens = co-fire. Add.111: 3 merges + 5 opens = co-fire. Add.110: 1 merge + 13 opens = co-fire. **Across 4 ticks: opens and merges are ALWAYS BOTH POSITIVE during commit-phase** — Spearman r at this small N is uninterpretable, but the simple co-occurrence count is 4/4 = 100%. **Pred SS' trajectory: PASSING-DIRECTION; needs ≥2 more commit-phase ticks for r computation.**

5. **canvrno-oai #19939 (`Restore TUI working status after pending steer`) opened 06:19:41Z** — canvrno-oai's **3rd W17 PR** in 4 consecutive ticks (Add.110 #19917 merged, Add.112 #19931 still open, Add.113 #19939 NEW). **canvrno-oai active in 3 of 4 ticks** — matches etraut-openai's per-tick cadence from Pred VV. **Pred WW (codex author-triad {etraut-openai, canvrno-oai, bolinfest} accounts for ≥6 of next 12 codex merges post-Add.112) — 1 of 1 codex merges at Add.113 is from triad (bolinfest). Trajectory PASSING-DIRECTION (1/1 = 100% so far).**

6. **Pred PP RESOLVED-CONFIRMED at Add.113: kitlangton has now been silent across Add.109, Add.110, Add.111, Add.112, Add.113 = 5 consecutive ticks.** Last kitlangton merge was opencode #24711 at 02:24:04Z (now ~4h06m ago). **kitlangton's W17 #97 4-PR `specs/effect/http-api.md` rollout series has paused.** Synth #99 prediction (4): "if `specs/effect/http-api.md` accumulates ≥50 net additions across the series, the file itself is a rollout journal" — currently at +29/-7 cumulative; pause halts approach. **Pred BBB (NEW): kitlangton's silence extends to ≥8 consecutive ticks (Add.116). Falsifier: any kitlangton activity by Add.116.** Tests whether the pause is regime-shift vs intra-day rest.

7. **Pred KK RESOLVED-FALSIFIED at Add.113: deadline (4 ticks past Add.109) reached with no jackmhny activity in Add.110-Add.113 window.** jackmhny refile hypothesis falsified.

8. **Pred 255-1'' (codex aged-vs-burst merge ratio ≥2:1) — Add.113's 1 merge (#19899 bolinfest, lifespan 5h22m) is AGED-class (>2h).** Cumulative aged-vs-burst across Add.110-Add.113: **5 aged + 4 burst = 1.25:1**. Recovers from 1:1 boundary. **Pred 255-1'' trajectory: STRESSED but not yet RESOLVED-FALSIFIED — needs Add.114 data.**

9. **Pred VV (etraut-openai sustains ≥1 codex merge per tick across Add.113-Add.115) — Add.113 has 0 etraut-openai merges. FALSIFIED at first observation tick.** etraut-openai contributed 0 merges + 0 opens at Add.113. **Pred VV RESOLVED-FALSIFIED at Add.113.** The etraut-openai metronome hypothesis was an over-extrapolation from a 3-tick sample.

10. **Pred YY (rekram1-node per-tick fast-class fix-class cadence Add.113-Add.115) — Add.113 has 0 rekram1-node activity. FALSIFIED at first observation tick.** rekram1-node hypothesis was 1-tick spike + 1-tick follow-on, not a metronome.

11. **Pred OO (litellm `-berri` author commit-phase dominance) — Add.113 has 0 litellm merges; 1 litellm OPEN (#26671 cy-jhs 06:15:09Z, NON-`-berri`).** **2 consecutive zero-merge litellm ticks.** **Pred OO trajectory: PAUSED-EXTENDED (now 2 ticks).** **Pred OO' (`-berri` cohort cardinality ≥6 by W18 close): cohort still at 5; cy-jhs is non-`-berri`.** Cohort growth STALLED.

12. **Pred XX (deep-cohort {gemini-cli, goose, qwen-code} persists ≥6 consecutive ticks Add.110-Add.115) — Add.113 confirms 4th consecutive tick of identical deep-cohort composition.** All three repos zero-activity again. gemini-cli silence: **9h12m+** (extends record); goose: **8h18m+**; qwen-code: **5h07m+**. **Pred XX trajectory: PASSING (4 of 6 ticks).**

13. **Pred UU (bolinfest 3-PR `permissions:` series anchor-file-co-touch via synth #97) — diff inspection deferred again to Add.114; #19899 itself adds a non-permissions surface (`app-server-protocol`) so the series may NOT be #97-conformant. Trajectory: STRESSED-DIRECTION pending diff fetch.**

In the 38m window 05:52Z → 06:30Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 06:30Z |
|------|------------------|----------------|---------------------------|--------------------------|
| anomalyco/opencode | 0 | **1** (#24738 Brendonovich 06:10:05Z) | 0 | **1h45m+** (since #24730 04:44:21Z) — **mid** (extends) |
| openai/codex | **1** (#19899 bolinfest 06:08:35Z, `0a32c8b3`) | **1** (#19939 canvrno-oai 06:19:41Z) | 0 | **21m25s** (since #19899 06:08:35Z) — **shallow** (4th consecutive tick) |
| BerriAI/litellm | 0 | **1** (#26671 cy-jhs 06:15:09Z) | 0 | **2h09m+** (since #26631 04:21:28Z) — **mid** (extends) |
| google-gemini/gemini-cli | 0 | 0 | 0 | **9h12m+** (since #26079 21:17:32Z 04-27) — **deep** (11-tick zero-merge — record extends) |
| block/goose | 0 | 0 | 0 | **8h18m+** (since #8854 22:11:20Z 04-27) — **deep** (6-tick zero-activity) |
| QwenLM/qwen-code | 0 | 0 | 0 | **5h07m+** (since #3682 01:22:18Z) — **deep** |

**Cross-repo merge count: 1; opens: 3; closed-no-merge: 0.** **Open-to-merge ratio: 3.00** (vs Add.112's 1.00, Add.111's 0.143). Volatility window-over-window remains the dominant variance signal — synth #100 (drafted in tandem) formalizes this as a tracked invariant.

## codex in-window — **1 merge (#19899 bolinfest aged 5h22m); 1 new open (canvrno-oai #19939); merge-silence 21m25s (shallow, 4th consecutive tick)**

In-window MERGED: **1**.

- **#19899** bolinfest `app-server-protocol: mark permission profiles experimental` (lifespan ~5h22m, AGED-class, mergeCommit `0a32c8b3`). Half-merge of the #19899/#19900 doublet that opened ~Add.111.

In-window OPENED: **1** — canvrno-oai #19939 (06:19:41Z, NEW PR for canvrno-oai's 3rd W17 contribution).

In-window CLOSED-no-merge: 0.

**Pred S/S' status update:** doublet half-merge confirms branch (iv) "either-merges" within 6h. #19900 trajectory is now governed by Pred ZZ (synth #87 rework-half axis).

**Pred H (evawong-oai 5-PR stack):** all 5 still OPEN, lifespan now **12h17m+**. **3rd consecutive quiet tick.** **Pred H trajectory: RESOLVED-FALSIFIED-DIRECTION at Add.113** (3-tick quiescence threshold crossed; matches Pred EE' precedent at Add.112).

**Pred E aftermath (eternal-openai #19905):** STILL OPEN, **5h05m+**, **4th consecutive quiet tick**.

**Trailing merge-silence at capture: 21m25s.** codex stays **shallow** for **4th consecutive tick** — extends streak; new W17 codex shallow-streak record.

## Notable absences

- **opencode 0 merges for 2nd consecutive tick** — Add.111 commit-phase entry (Brendonovich+rekram1-node+rektide debut wave) generated 0 follow-on merges across Add.112-Add.113 (~1h45m). Pred AAA tests conversion deadline.
- **litellm 0 merges for 2nd consecutive tick** — `-berri` cohort cardinality stalls at 5.
- **kitlangton 5-tick silence (Pred PP CONFIRMED)** — synth #97/#99 author entirely paused.
- **etraut-openai 0 activity** (Pred VV FALSIFIED instant) — yesterday's 3-tick metronome was retrospective only.
- **gemini-cli 11-tick zero-merge record** — extends synth #258 deep-cohort conservation test.

## Pred carry table (delta from Add.112 only)

| Pred | Status at Add.112 close | Status at Add.113 close | Delta |
|------|-------------------------|-------------------------|-------|
| 254-1 | SUSTAINS (35.5%) | SUSTAINS-STRESSED (23.0%) | crossing rate dropped to band floor |
| 255-1'' | STRESSED-FALSIFIED-DIRECTION (1:1) | STRESSED (1.25:1 recover) | aged merge bumped ratio |
| OO | PAUSED | PAUSED-EXTENDED (2 ticks) | non-`-berri` open only |
| OO' | UNCHANGED | STALLED | cohort still 5 |
| PP | TRACKING (4 of 5) | **RESOLVED-CONFIRMED** | 5-tick silence achieved |
| KK | LEANING-FALSIFIED | **RESOLVED-FALSIFIED** | deadline reached, no activity |
| SS' | NEW | PASSING-DIRECTION (4/4 co-fire) | needs ≥2 more ticks |
| TT | NEW | **INSTANT-CONFIRMED** | Brendonovich opens during doublet open |
| UU | NEW | STRESSED-DIRECTION | #19899 not permissions-surface |
| VV | NEW | **RESOLVED-FALSIFIED** | etraut-openai zero activity |
| WW | NEW | PASSING-DIRECTION (1/1) | bolinfest from triad |
| XX | NEW | PASSING (4 of 6) | identical deep-cohort 4 ticks |
| YY | NEW | **RESOLVED-FALSIFIED** | rekram1-node zero activity |
| S branch (iii) | SUSTAINS | **RESOLVED-FALSIFIED-DIRECTION** | half-merge breaks "both open" |
| S branch (iv) | — | **RESOLVED-PARTIAL-CONFIRMED** | #19899 merged within 12h |
| S' | UNCHANGED | **RESOLVED-CONFIRMED** | merged at 5h22m well inside 12h |
| H | STRESSED | **RESOLVED-FALSIFIED-DIRECTION** | 3-tick quiescence crossed |
| E/EE' | RESOLVED-FALSIFIED | UNCHANGED | 4-tick quiescence |
| ZZ | — | NEW | #19900 6h merge-or-prune deadline |
| AAA | — | NEW | opencode debut-wave conversion |
| BBB | — | NEW | kitlangton 8-tick silence test |
