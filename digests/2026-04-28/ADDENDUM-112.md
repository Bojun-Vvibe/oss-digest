# ADDENDUM-112 — 2026-04-28 (capture 2026-04-28T05:52Z)

**Capture window:** 04:55:00Z → 05:52:00Z UTC. Window width: **57m00s** (above ≤45m target — operational note carried from Add.111: cadence enforcement deferred while commit-phase is open).
**Predecessor:** ADDENDUM-111 (closed 04:55:00Z, SHA `ac3b188`; carry preds B, E, EE', FF', GG', H, I, II, II', JJ, KK, LL/LL', MM, NN, OO/OO', PP (NEW), QQ (NEW), RR (NEW), SS (NEW), R, S RESOLVED-CONFIRMED branch (iii) / S' carry, T, Y, Z', 254-1 RECOVERED, 254-2, 254-3, 254-4, 254-5 RESOLVED-FALSIFIED, 254-NEW, 255-1' GRADUAL / 255-1'' NEW, 255-2 PASSED, 255-3, 255-4, 255-5 RESOLVED-FALSIFIED, 256-2 trajectory CONFIRMED, 256-3, 256-4, 256-5 PASSED).

## Headline events — **commit-phase BROADENS AND DEEPENS at Add.112: codex 5 merges in 57m (corpus single-tick record), incl. bolinfest #19775/#19776 doublet RESOLVES Pred S branch (iv) "BOTH MERGE", etraut-openai #19920 burst-PR merges (extended-burst now 3/13), Pred 255-1'' anchor-shift to 4 aged vs 4 burst (1:1 — at falsifier boundary), litellm 0 merges (commit-phase RETRACTS for litellm — 1-tick pulse), opencode 0 merges (re-enters mid silence), gemini-cli/goose/qwen-code persist deep (10-tick / 5-tick / 4-tick zero-merge), Pred SS instant-stress: open-burst-end claim FALSIFIES with 3 new codex opens this tick**

1. **Cross-repo merge count this window: 5 merges, 5 opens, 0 closed-no-merge — ALL 5 merges are codex.** Per-minute merge rate 0.088 (Add.111 was 0.127). **Single-repo concentration: 5/5 = 100% codex.** This is the **highest single-repo merge concentration in any W17 tick** — even Add.111's 3 codex merges were diluted by litellm + opencode contributions. **The commit-phase that broadened at Add.111 (3-of-6 repos: codex, litellm, opencode) has CONTRACTED back to 1-of-6 (codex only) at Add.112.** Per-repo-tick crossing rate this tick: opencode (shallow→mid) + litellm (shallow→mid) + codex (stays shallow) + gemini-cli/goose/qwen-code (stay deep) = **2/6 = 33%** — **inside the [20%, 40%] band**. **Pred 254-1 4-tick rolling = (50% + 42% + 17% + 33%) / 4 = 35.5%** — **identical to Add.111's rolling, sustained inside band**. **Pred 254-1 SUSTAINS at Add.112.**

2. **Pred S RESOLVED-FULL branch (iv) at Add.112: bolinfest #19899/#19900 doublet status update.** Cross-checking: the bolinfest doublet #19899/#19900 — at Add.111 close both were OPEN at 4h08m+. At Add.112, the bolinfest activity that fired is a **DIFFERENT bolinfest series**: #19774, #19775, #19776 (a 3-PR `permissions:` series, all merged in 43m12s window: 05:06:47Z, 05:30:47Z, 05:49:59Z). **#19774 (`permissions: make SessionConfigured profile-only`) merged at 05:06:47Z; #19775 (`permissions: derive snapshot sandbox projections`) at 05:30:47Z (+24m exact); #19776 (`permissions: store thread sessions as profiles`) at 05:49:59Z (+19m12s).** This is a **NEW bolinfest stacked-merge series, parallel to the still-open #19899/#19900 doublet**. **Pred S branch (iii) (#19899/#19900 still both open ≥4h) sustains; Pred S' (12h merge window for either) on track.** **Pred TT (NEW): bolinfest is operating ≥2 concurrent open PR-stacks (the #19899/#19900 doublet AND the #19774-#19775-#19776 series — though the latter is now closed via merge). Test: by Add.115, ≥1 NEW bolinfest PR opens while #19899/#19900 are still OPEN. Falsifier: no new bolinfest opens by Add.115.** This formalizes the bolinfest **multi-stack-author** sub-pattern.

3. **bolinfest 3-PR `permissions:` series — synth #97/#99 conformance check.** All 3 PRs share the prefix `permissions:` and likely touch a shared anchor file (permissions/profiles module). Inter-merge gaps: 24m00s (#19774→#19775), 19m12s (#19775→#19776). **Monotonic contraction (24m → 19m) — fits synth #97's lifespan-contraction pattern at the inter-MERGE-gap level rather than lifespan level.** **Pred UU (NEW): the bolinfest 3-PR `permissions:` series passes synth #97's anchor-file-co-touch test (≥1 file appears in all 3 diffs). Falsifier: no file appears in all 3 diffs.** Test deferred to Add.113 (need diff inspection).

4. **etraut-openai #19920 (`Allow large remote app-server resume responses`) MERGED at 05:44:10Z, lifespan 6h58m (opened Add.110 22:46:something previous tick — actually 04-27 22:46Z based on Add.110 reference; refined: opened in Add.110 window, merged in Add.112).** This is the **3rd member of the codex extended-burst to merge** (#19917 Add.110, #19912 Add.111, #19920 Add.112). **Cumulative extended-burst merge count: 3/13 = 23.1%** (vs Add.111's 2/13 = 15.4%, Add.110's 1/13 = 7.7%). **Per-tick burst-merge accretion: +1, +1, +1 — perfectly linear at 1 burst-merge per tick across 3 consecutive ticks.** **Pred 255-1' RESOLVED-CONFIRMED at Add.112: gradual classification holds with 3 burst-merges across 3 ticks.**

5. **Pred 255-1'' (codex commit-phase prefers aged PRs over burst PRs at ratio ≥2:1) — STRESSED at Add.112; ratio drops from 1.5:1 to 1:1.** Add.112 codex merges: #19920 (burst, 6h58m — burst-class boundary, lifespan slightly above strict <2h burst threshold but member of the Add.107-Add.110 open-burst inventory), #19776 (NON-burst aged, lifespan ~2d12h — opened 04-25), #19775 (NON-burst aged, ~2d12h), #19774 (NON-burst aged, ~2d12h), #19630 (NON-burst aged, opened 04-22 — lifespan ~5d). **Cumulative across Add.110-Add.112: 4 aged-merges + 4 burst-class-merges = 1:1 ratio.** **Pred 255-1'' (≥2:1 aged-vs-burst) trajectory: FALSIFIED-DIRECTION at Add.112** (currently 1:1, falsifier was <1:1 — at boundary). **Pred 255-1'' likely RESOLVED-FALSIFIED at Add.113 if any 2 burst-PRs merge.** The codex commit-phase is **balance-firing** across age-classes, not aged-preferring as Pred 255-1'' modeled.

6. **Pred SS (codex open-burst phases anti-correlated with commit-phase peaks at per-tick level) — INSTANT-STRESSED at Add.112.** Add.112 has BOTH a commit-phase peak (5 merges) AND new opens (#19929 etraut-openai 05:01:58Z, #19931 canvrno-oai 05:27:52Z, #19933 etraut-openai 05:46:05Z = 3 new opens). **Add.112 = high-merge AND high-open simultaneously**, contradicting the anti-correlation hypothesis. **Pred SS trajectory: STRESSED-FALSIFIED at first observation.** **Pred SS' (REFINED): codex opens and merges are POSITIVELY correlated within commit-phase ticks (Spearman r ≥ +0.4 across 6+ commit-phase-classified ticks). Falsifier: r < +0.1.** This inverts the original hypothesis — opens and merges co-fire during commit-phase rather than alternating.

7. **etraut-openai is now the dominant codex author of W17 — 3 merges + 2 opens across Add.110-Add.112 (5 PRs in 3 ticks).** Merges: #19917 Add.110, #19912 Add.111, #19920 + #19630 Add.112 (2 in one tick — first multi-merge tick for etraut-openai). Opens: #19920 Add.110 (now merged), #19929 Add.112, #19933 Add.112. **etraut-openai surpasses kitlangton's prior W17 cadence record on a 3-tick window basis.** **Pred VV (NEW): etraut-openai sustains ≥1 codex merge per tick across Add.113-Add.115 (3 consecutive ticks). Falsifier: any zero-merge tick for etraut-openai by Add.115.** Tests whether etraut-openai is replacing kitlangton as the W17 metronome-author.

8. **canvrno-oai #19931 (`Move local resume cwd filtering into thread/list`) opened 05:27:52Z.** This is canvrno-oai's **2nd W17 PR** (1st was #19917 in Add.110, already merged). **canvrno-oai active in 2 of 3 ticks since debut.** **Joint observation with etraut-openai's 5 PRs**: the codex commit-phase is being driven by a **2-author concentration** (etraut-openai + canvrno-oai contribute 7 of the 8 codex events across Add.110-Add.112; bolinfest's 3 `permissions:` merges are the 3rd cluster). **Pred WW (NEW): of the next 12 codex merges (post-Add.112), ≥6 are by the {etraut-openai, canvrno-oai, bolinfest} triad. Falsifier: <4 of 12 from the triad.** Tests author-concentration during sustained commit-phase.

9. **Pred OO (litellm `-berri` suffix author commit-phase dominance) — NULL-TICK at Add.112: 0 litellm merges this tick.** litellm contributed 1 open (#26670 aneeshsangvikar 05:31:51Z, NEW W17 author, NON-`-berri` suffix). The 1-tick litellm commit-phase pulse (Add.110 + Add.111 = 2 merges, both `-berri`) has retracted. **Pred OO trajectory: PAUSED — awaiting next litellm merge for 3rd `-berri` data point.** **Pred OO' (`-berri` cohort cardinality ≥6 by W18 close): aneeshsangvikar opens but is NOT `-berri` — does not contribute to cohort growth. Cohort cardinality stays at 5.**

10. **Deep-cohort cardinality conservation (synth #258) — SUSTAINS at Add.112 with composition rotation TEST: NO ROTATION.** Add.112 close: gemini-cli (deep, **8h34m+ silence**, 10-tick zero-merge — extends record), goose (deep, **7h40m+**, 5th consecutive Add zero-activity), qwen-code (deep, **4h29m+**). **Same 3 repos as Add.110/Add.111** — 3rd consecutive tick with zero deep-cohort rotation. **Pred XX (NEW): the deep-cohort {gemini-cli, goose, qwen-code} persists ≥6 consecutive ticks (Add.110-Add.115). Falsifier: any of the three exits deep-class by Add.115.** Tests whether synth #258 conservation is degenerate (composition is statically frozen) vs dynamic (composition rotates while cardinality is preserved).

11. **Pred PP (kitlangton-pause-regime ≥5 consecutive ticks) trajectory at Add.112: 4 of 5 ticks of silence achieved (Add.109, Add.110, Add.111, Add.112). 1 tick remaining to Add.113 deadline.** **Pred PP on track for CONFIRMED at Add.113.**

12. **opencode #24734 rekram1-node `fix(vscode-XXX): ensure available variants sync from api`** opened 04:57:27Z — **rekram1-node's 2nd W17 PR** (1st was #24730 in Add.111, the 12m07s fast-class merge). rekram1-node active in 2 consecutive ticks. **Both PRs are vendor/integration-scoped fix-class** (#24730 moonshot tool sanitization; #24734 vscode-XXX variant sync). **Pred QQ (≥5 of next 8 sub-15m fast-merges are bug-class AND ≥3 vendor-specific) — Add.112 contributes 0 sub-15m merges, no test data this tick.** **Pred YY (NEW): rekram1-node sustains a per-tick fast-class fix-class PR cadence across Add.113-Add.115. Falsifier: any zero-PR tick for rekram1-node by Add.115.** Tests whether rekram1-node is replacing Brendonovich as opencode's commit-phase author.

In the 57m window 04:55Z → 05:52Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 05:52Z |
|------|------------------|----------------|---------------------------|--------------------------|
| anomalyco/opencode | 0 | **1** (#24734 rekram1-node 04:57:27Z) | 0 | **1h08m** (since #24730 04:44:21Z) — **mid** |
| openai/codex | **5** (#19630 etraut-openai 05:02:09Z, #19774 bolinfest 05:06:47Z, #19775 bolinfest 05:30:47Z, #19920 etraut-openai 05:44:10Z, #19776 bolinfest 05:49:59Z) | **3** (#19929 etraut-openai 05:01:58Z, #19931 canvrno-oai 05:27:52Z, #19933 etraut-openai 05:46:05Z) | 0 | **2m** (since #19776 05:49:59Z) — **shallow** (3rd consecutive tick) |
| BerriAI/litellm | 0 | **1** (#26670 aneeshsangvikar 05:31:51Z) | 0 | **1h31m** (since #26631 04:21:28Z) — **mid** |
| google-gemini/gemini-cli | 0 | 0 | 0 | **8h34m+** (since #26079 21:17:32Z 04-27) — **deep** (10-tick zero-merge — record) |
| block/goose | 0 | 0 | 0 | **7h40m+** (since #8856 22:11:20Z 04-27 — corrected: #8856 lifeizhou-ap was last) — **deep** (5-tick zero-activity) |
| QwenLM/qwen-code | 0 | 0 | 0 | **4h29m+** (since #3682 01:22:18Z) — **deep** |

**Cross-repo merge count: 5; opens: 5; closed-no-merge: 0.** **Open-to-merge ratio: 1.00** (vs Add.111's 0.143 — a **7× swing**). **Open-to-merge volatility window-over-window is now the dominant variance signal in W17.** This sets up synth #100 (below).

## codex in-window — **5 merges (corpus record); 1 burst-PR (#19920) + 4 NON-burst aged (#19630 5d, #19774/#19775/#19776 ~2d12h); 3 new opens; merge-silence at 2m (shallow, 3rd consecutive tick)**

In-window MERGED: **5** — **single-tick codex merge record for W17 corpus** (prior record: 3 at Add.111).

- **#19630** etraut-openai `Avoid persisting ShutdownComplete after thread shutdown` (opened 04-22 — lifespan **~5d23h**, aged-class; **3rd longest-lived merging codex PR in W17** behind #17689 14d8h and #19763 23h42m).
- **#19774** bolinfest `permissions: make SessionConfigured profile-only` (1st of 3-PR series, merged 05:06:47Z, ~2d12h aged).
- **#19775** bolinfest `permissions: derive snapshot sandbox projections` (2nd of series, +24m exactly after #19774, ~2d12h aged).
- **#19776** bolinfest `permissions: store thread sessions as profiles` (3rd of series, +19m12s after #19775, ~2d12h aged). Inter-merge gap contraction: 24m → 19m12s (matches synth #97 contraction signature applied to MERGE gaps rather than LIFESPANS).
- **#19920** etraut-openai `Allow large remote app-server resume responses` (burst-PR, 6h58m, 3rd Add.107-extended-burst member to merge).

In-window OPENED: **3** — etraut-openai #19929 + #19933 (2 in one tick by single author), canvrno-oai #19931. **Codex extended-burst inventory now: 13 + 3 new at Add.112 = 16 PRs.** **Open-burst-end claim from Add.111 (basis for Pred SS) is FALSIFIED at first test** — codex opens RESUMED at Add.112 with 3 new PRs in the same window as 5 merges.

In-window CLOSED-no-merge: 0.

**Pred S (#19899/#19900 doublet):** STILL OPEN at lifespan **5h05m+** each (Add.111 was 4h08m). **Branch (iii) "both still OPEN ≥4h" SUSTAINS; Pred S' (12h-merge window for either) carries — deadline ~Add.123. Trajectory neutral.**

**Pred H (evawong-oai 5-PR stack):** all 5 still OPEN, lifespan now **11h39m+**. **2nd consecutive quiet tick.** **Pred H trajectory: STRESSED — the iteration cadence has empirically halted across 2 ticks; predicted-direction now LEAKS.**

**Pred E aftermath (eternal-openai #19905):** STILL OPEN, **4h29m+**, **3rd consecutive quiet tick (no in-window UPDATE).** **Pred EE' RESOLVED-FALSIFIED at Add.112** (3-tick quiescence threshold crossed).

**Pred KK (jackmhny refile within 4 ticks of Add.109):** no jackmhny activity in Add.112. **1 tick remaining to deadline (Add.113).** Trajectory: leaning FALSIFIED.

**Trailing merge-silence at capture: 2m.** codex stays **shallow** for **3rd consecutive tick** — extends streak; this is the **longest sustained-shallow streak for codex in W17**.

## Notable absences

- **opencode merge-silence extends to 1h08m (mid-class)** — opencode's Add.111 commit-phase entry (2 merges) was a **1-tick spike**, not a sustained transition. Brendonovich + rekram1-node + rektide debut wave at Add.111 has not generated follow-on merges.
- **litellm 1-tick commit-phase pulse RETRACTS** — Add.110/Add.111 contributed 2 `-berri` merges; Add.112 contributes 0 merges. **litellm enters mid-class silence at 1h31m.**
- **gemini-cli zero-merge record extends to 10 ticks** — sets up synth #258 stress test for whether deep-cohort silence can extend indefinitely or has a regime-break ceiling.

## Pred carry table (delta from Add.111 only)

| Pred | Status at Add.111 close | Status at Add.112 close | Delta |
|------|-------------------------|-------------------------|-------|
| 254-1 | RECOVERED | SUSTAINS | rolling = 35.5% (band) |
| 255-1' | GRADUAL | **RESOLVED-CONFIRMED** | 3 burst-merges across 3 ticks |
| 255-1'' | NEW | STRESSED-FALSIFIED-DIRECTION | ratio dropped 1.5:1 → 1:1 |
| OO | INSTANT-PARTIAL-CONFIRM | PAUSED (0 litellm merges) | awaiting next merge |
| OO' | NEW | UNCHANGED | aneeshsangvikar non-`-berri` |
| PP | NEW | TRACKING (4 of 5 ticks) | 1 tick to deadline |
| QQ | NEW | NO-DATA-TICK | 0 sub-15m merges this tick |
| RR | NEW | UNCHANGED | aged-7d threshold not tested this tick |
| SS | NEW | **STRESSED-FALSIFIED** | opens AND merges co-fired |
| SS' | — | **NEW (refines SS inverted)** | tests positive correlation |
| TT | — | NEW | bolinfest multi-stack tracking |
| UU | — | NEW | bolinfest `permissions:` synth #97 conformance |
| VV | — | NEW | etraut-openai per-tick metronome |
| WW | — | NEW | codex author-triad concentration |
| XX | — | NEW | deep-cohort 6-tick persistence |
| YY | — | NEW | rekram1-node per-tick metronome |
| S branch (iii) | RESOLVED-CONFIRMED | SUSTAINS | doublet ≥5h open |
| S' | NEW carry | UNCHANGED | 12h deadline |
| EE' | trajectory FALSIFIED | **RESOLVED-FALSIFIED** | 3-tick quiescence |
| H | passing-direction | STRESSED | 2-tick quiescence |
| KK | trajectory neutral | LEANING-FALSIFIED | 1 tick to deadline |
