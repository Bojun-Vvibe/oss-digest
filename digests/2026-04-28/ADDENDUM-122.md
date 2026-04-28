# ADDENDUM-122 — 2026-04-28 (capture 2026-04-28T13:55Z)

**Capture window:** 13:08:00Z → 13:55:00Z UTC. Window width: **47m00s** (Add.121 was 55m00s — 0.85× window; mid-band).
**Predecessor:** ADDENDUM-121 (closed 13:08:00Z). Carry preds: ZZZ-A jif-oai #19970 declarative-block (tick 2/6), ZZZ-B opencode self-close trio refile (tick 2/8), ZZZ-C litellm 12h class (tick 2/3), ZZZ-D kitlangton 16-tick silence (tick 2/4), ZZZ-E yiliang114 follow-up (tick 1/4), ZZZ-F codex 3-tick resume (tick 1/3), VVV bolinfest #19900 (tick 3/6), XXX gemini-cli 17h tick 2/2 DEADLINE.

## Headline events — **opencode TRIPLET MERGE-BURST shatters Add.121 silence and FALSIFIES Pred ZZZ-D AT TICK 2/4: kitlangton #24716 13:22:50Z `2a4f2bf5` `fix(httpapi): align sync seq validation` + #24717 13:23:55Z `e57d0c2f` `fix(httpapi): document tui bad request responses` form a 1m05s SAME-AUTHOR ADJACENT-SURFACE DOUBLET on the `httpapi` surface, immediately followed by iamdavidhill #24792 13:24:47Z `3fa78a8b` `docs: bump GitHub stars count to 150K` for a 1m57s 3-PR opencode burst — kitlangton's 13-tick silence (10h44m+) ends with sub-2-minute doublet on identical surface prefix `fix(httpapi):`; gemini-cli STILL silent through 16h37m+ and Pred XXX 17h threshold REMAINS ON FALSIFICATION TRAJECTORY; litellm STILL silent at 12h08m+ — **CROSSES 12h class threshold** = Pred ZZZ-C tick 2/3 RESOLVED PASS; codex STILL silent (jif-oai #19967 last at 11:32:06Z = 2h23m+) — Pred ZZZ-F tick 1/3 NEUTRAL; goose/qwen-code zero-merge post-Add.121-resets. Synth #275 full-disjointness Pred P-275-A FALSIFIED at tick 1 (Add.122 active roster = {opencode}, opencode was in NO prior n=3 active set so disjointness AGAINST Add.119/120/121 holds at n=4 boundary IF and ONLY IF opencode counts as new-roster-entry — opencode WAS in Add.120 roster, therefore P-275-A FALSIFIED).**

1. **Cross-repo merge count this window: 3 merges (opencode #24716 kitlangton 13:22:50Z, #24717 kitlangton 13:23:55Z, #24792 iamdavidhill 13:24:47Z), 0 strict net-new opens visible in-window, 0 closed-no-merge.** Per-minute merge rate **0.064** (Add.121 was 0.055 — 1.16× — third consecutive non-zero tick after the Add.119 4-merge codex sprint). **Cross-repo concentration: opencode 3/3 (100%) — SINGLE-REPO MONOPOLY TICK with ZERO codex/litellm/qwen-code/goose/gemini-cli merges** = synth #271 monopoly recurrence at n=4 in the Add.119–122 sequence. Per-repo silence-class crossing this tick: opencode (shallow→shallow RESET via #24716+#24717+#24792), codex (mid→mid+ — 2h23m+ since #19967), litellm (DEEP++→DEEP-EXTREME — **12h08m+, 11-tick W17 record**, **CROSSES 12h class boundary**), gemini-cli (DEEP-DEEP-EXTREME→DEEP-DEEP-EXTREME — 16h37m+, 21-tick), qwen-code (shallow→shallow — 50m+ since #3708), goose (shallow→shallow — 59m+ since #8866) = **2/6 repos cross threshold this tick (litellm 11h→12h class crossing; opencode RESET DOWN)**.

2. **opencode kitlangton DOUBLET — sub-2-minute SAME-AUTHOR SAME-PREFIX (`fix(httpapi):`) doublet on adjacent httpapi surfaces.** #24716 MERGED 13:22:50Z `2a4f2bf57f...` `fix(httpapi): align sync seq validation` + #24717 MERGED 13:23:55Z `e57d0c2fcc...` `fix(httpapi): document tui bad request responses`. Inter-merge gap **65 seconds**. Both touch `packages/sdk/js` httpapi surface (per kitlangton's prior #24711 `fix(tui): keep Zed context polling responsive` 02:24:04Z, #24706 `fix(httpapi): preserve mcp oauth error parity` 02:33:22Z W17 history). **kitlangton's 13-tick zero-merge silence (Add.109–Add.121, 10h44m+) ENDS at Add.122** — Pred ZZZ-D (16-tick silence by Add.124) FALSIFIED at tick 2/4 by 4-tick MARGIN (kitlangton resumed at tick 2 of 4-tick deadline, 14 ticks short of 16-tick threshold — strong falsification, not a near-miss). Same-author intra-tick doublet on adjacent httpapi surfaces with 65s gap = synth #85 sub-10-second doublet ADJACENT-PREFIX recurrence at sub-90-second band (slightly wider than synth #85's sub-10s but tighter than synth #97's lifespan-monotone series). The 3-PR self-stall (#24717, #24716, #24712) referenced in Add.121 paragraph 10 — **#24717 and #24716 BOTH LANDED in same 65s window** while #24712 status unchanged from W17 history (2h+ open at last check).

3. **opencode iamdavidhill #24792 MERGED 13:24:47Z `3fa78a8bf6...`** — `docs: bump GitHub stars count to 150K`. Inter-merge gap from #24717 = **52 seconds**. Forms a 3-PR triplet with kitlangton's doublet (#24716 → #24717 → #24792 at 13:22:50Z → 13:23:55Z → 13:24:47Z, span **1m57s**). **Mixed-author triplet** (kitlangton + kitlangton + iamdavidhill) — 2 distinct authors, third is docs-class (non-CI, non-code-surface) which is consistent with synth #50 post-own-merge cascade extension to cross-author terminal-docs class. The triplet's 1m57s span = synth #92-class same-second/sub-2-min n=3+ tuplet but with author-axis split (2:1 not 4:0).

4. **litellm zero-merge silence CROSSES 12h class boundary — 11-tick W17 record.** Silence at Add.122 close = 13:55:00Z − 01:46:21Z (krrish-berri-2 #26661) = **12h08m39s**. **Pred ZZZ-C (12h class within 3 ticks Add.123) RESOLVED PASS at tick 2/3** — 12h crossed at Add.122 with 1 tick to spare. **11th consecutive zero-merge tick** in litellm. In-window 0 opens, 0 closes, 0 merges — full dormancy continues. **Pred ZZZ-G**: litellm crosses **13h class within 2 ticks (deadline Add.124)** — falsifier: any litellm merge in next 2 ticks (would also break the consecutive-tick streak at 12 or 13 vs current 11).

5. **gemini-cli zero-merge silence: 16h37m+ at Add.122 close — 21-tick sequence, Pred XXX tick 2/2 DEADLINE THIS TICK.** Last merge devr0306 #26079 at 2026-04-27T21:17:32Z `820a4e3ce7...`. In-window 0 opens, 0 closes, 0 merges. **Pred XXX (17h+ within 2 ticks from Add.120) DEADLINE = Add.122 close**: actual silence at deadline = 16h37m, **23 minutes SHORT of 17h threshold** — **Pred XXX FALSIFIED** (silence advanced linearly with tick width; 17h threshold not reached). **Pred ZZZ-H**: gemini-cli crosses 17h within 1 tick (deadline Add.123) — minimal extension prediction (needs only 23m additional silence on a typical 40-55m tick).

6. **codex zero-merge silence: 2h23m+ at Add.122 close, 6-tick sequence (Add.117–Add.122).** No codex merges in-window. jif-oai #19970 still OPEN with `[do not merge]` — Pred ZZZ-A tick 2/6 NEUTRAL. Pred ZZZ-F (codex resumes within 3 ticks deadline Add.124) tick 1/3 NEUTRAL. codex now at **mid+ silence-class** entry. **Codex 6-tick silence approaches early-tick records** (Add.117 jif-oai n=4 sprint was last codex activity surge — now 6 ticks dormant on the same-author cluster).

7. **qwen-code post-RESET: 50m+ silence at Add.122 close.** No qwen-code activity in-window. doudouOUC #3684 (event monitor, OPEN since 02:06:28Z = 11h48m+) and #3685 (PyPI workflow, OPEN since 03:07:41Z = 10h47m+) both STILL OPEN — 2-PR persistent self-stall continues post-#3705-resolution. **Pred ZZZ-E (yiliang114 follow-up by Add.125) tick 1/4 NEUTRAL** — yiliang114 silent in-window.

8. **goose post-RESET: 59m+ silence at Add.122 close.** No goose activity in-window. jamadeo silent post-#8866 — single-merge-then-dormant pattern continues. github-actions-bot release-bump #8872 at 10:08:54Z still the only bot-class merge of the day on goose. lifeizhou-ap auto-merge enablement (#8856 from prev day) has not yet produced any visible auto-merged dependabot PRs in 13:08–13:55Z window.

9. **bolinfest #19900 — STILL OPEN at Add.122 close, 13h09m+ lifespan.** Pred VVV tick 3/6 still NEUTRAL. bolinfest now at 6-tick consecutive silence (Add.117–Add.122) = **bolinfest streak ties prior synth #157/#159 atomic streak length 5–6 boundary** but on the **silence-axis not the merge-axis**, a categorically distinct property.

10. **kitlangton silence-break details (cross-reference to synth #97):** kitlangton's prior W17 self-merge series (#24711 02:24:04Z `4d74849c`, #24706 02:33:22Z `796b652d`) had monotonically rising lifespans — the new #24716 + #24717 doublet at 13:22:50Z + 13:23:55Z **breaks the lifespan-monotone-rising trend** (these new merges are short-lived rather than long-tail) — refines synth #97's lifespan-contraction framing into a **silence-then-burst** pattern that interleaves long-lifespan series with sub-90s bursts.

11. **Cross-repo lifespans this window (in-window merged):**

| PR | Repo | Author | Action | Surface | SHA |
|----|------|--------|--------|---------|-----|
| #24716 | opencode | kitlangton | MERGED 13:22:50Z | `fix(httpapi):` | `2a4f2bf5` |
| #24717 | opencode | kitlangton | MERGED 13:23:55Z | `fix(httpapi):` | `e57d0c2f` |
| #24792 | opencode | iamdavidhill | MERGED 13:24:47Z | `docs:` | `3fa78a8b` |

12. **Per-repo silence escalation table (Add.122 close 13:55Z):**

| Repo | Silence | Class | Δ from Add.121 |
|------|---------|-------|-----------------|
| gemini-cli | 16h37m+ | DEEP-DEEP-EXTREME (21-tick) | +47m, +1 tick |
| litellm | 12h08m+ | DEEP-EXTREME (11-tick, **12h class crossing**) | +47m, +1 tick (CLASS UP) |
| codex | 2h23m+ | mid+ (entry from mid) | +47m (CLASS UP) |
| opencode | 30s+ | shallow (RESET via triplet) | -1h30m (RESET) |
| qwen-code | 50m+ | shallow | +47m |
| goose | 59m+ | shallow | +47m |

13. In the 47m window 13:08Z → 13:55Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 13:55Z |
|------|------------------|----------------|---------------------------|--------------------------|
| sst/opencode | **3** (#24716 kitlangton 13:22:50Z `2a4f2bf5` httpapi-sync-seq; #24717 kitlangton 13:23:55Z `e57d0c2f` httpapi-tui-bad-request; #24792 iamdavidhill 13:24:47Z `3fa78a8b` docs-stars-150K) | 0 | 0 | **30s+** — shallow (RESET) |
| openai/codex | 0 | 0 | 0 | **2h23m+** — mid+ |
| BerriAI/litellm | 0 | 0 | 0 | **12h08m+** — DEEP-EXTREME (11-tick, 12h class crossing) |
| google-gemini/gemini-cli | 0 | 0 | 0 | **16h37m+** — DEEP-DEEP-EXTREME (21-tick) |
| QwenLM/qwen-code | 0 | 0 | 0 | **50m+** — shallow |
| block/goose | 0 | 0 | 0 | **59m+** — shallow |

14. **Cumulative active prediction roster at Add.122 close** (added: ZZZ-G litellm 13h within 2 ticks, ZZZ-H gemini-cli 17h within 1 tick; resolved: ZZZ-C litellm 12h PASSED, ZZZ-D kitlangton 16-tick silence FALSIFIED at tick 2/4, XXX gemini-cli 17h FALSIFIED at tick 2/2; ongoing: ZZZ-A jif-oai #19970 tick 2/6 NEUTRAL, ZZZ-B opencode self-close-trio refile tick 2/8 NEUTRAL, ZZZ-E yiliang114 follow-up tick 1/4 NEUTRAL, ZZZ-F codex 3-tick resume tick 1/3 NEUTRAL, VVV bolinfest #19900 tick 3/6 NEUTRAL).

15. **Synth #275 P-275-A FALSIFIED at tick 1 (Add.122).** Add.122 active-merge roster = {opencode}. opencode was in Add.120 roster (Brendonovich #24738). Therefore Add.119(codex) ∩ Add.122(opencode) = ∅ holds, but Add.120(opencode) ∩ Add.122(opencode) = {opencode} ≠ ∅ — **n=4 full triangular disjointness FAILS** at the Add.120↔Add.122 edge. Synth #275 demoted from "n=3 disjoint sequence" to "n=3 maximal disjoint window with 1-tick recurrence at lag-2". Synth #277 candidate seed: lag-2 repo-recurrence as the natural ceiling of full-disjointness sequences (testable: does opencode dominate at Add.124 to form A-B-A-B-A pattern?).

16. **Synthesis hooks for tick 277/278:**
   - **Same-author sub-90s adjacent-prefix doublet on `fix(httpapi):` surface following 13-tick silence** (kitlangton #24716/#24717 1m05s gap, identical `fix(httpapi):` prefix) — distinct from synth #85 (sub-10s same-author cross-pr doublet) by 6.5× wider band but with stronger surface-prefix lock; distinct from synth #97 (same-author n=3 self-merge series with monotone-contracting lifespans) by silence-then-burst geometry (lifespan-discontinuous, not monotone). **Synth #277 candidate: silence-break-doublet-on-shared-prefix as falsifier-bearing extension of synth #85/#97.**
   - **Synth #275 full-disjointness ceiling at n=3 with lag-2 recurrence (opencode reappears at Add.122 after Add.120, breaking n=4 extension)** — establishes maximum-disjoint-window length and the lag-structure of repo-recurrence in single-repo-monopoly sequences. **Synth #278 candidate: extends synth #275 into a sequence-ceiling theorem with lag-spectrum.**

**Window close 2026-04-28T13:55:00Z. Next tick: Add.123 ≈ 14:35-14:55Z.**
