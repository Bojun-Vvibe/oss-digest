# ADDENDUM-110 — 2026-04-28 (capture 2026-04-28T04:00Z)

**Capture window:** 03:20:00Z → 04:00:00Z UTC. Window width: **40m00s** (within ≤45m target carried over from Add.109 operational note).
**Predecessor:** ADDENDUM-109 (closed 03:20:00Z; carry preds A''''' (httpapi-metronome STRESSED), B (gemini-cli structural), DD (CONFIRMED Add.109), EE' (refile-aware), FF' (kitlangton 3-tick rolling band), GG' (litellm #26667 terminal-correction), H (evawong-oai 5-stack), HH (Michael-RZ-Berri stale-stack), I (gemini-cli 7-tick zero-merge), II (qwen-code #3684), II' (doudouOUC sibling-cluster), JJ (kitlangton non-httpapi), KK (jackmhny #24718 close-cause), LL (goose 3-tick zero-OPEN attractor), R (LCubero), S (bolinfest #19899/#19900), T (litellm deferred-batch), V (gemini-cli-robot title-leak), Y (cross-repo deferred-batch), Z' (#24707 foundation-class extended), AA (ishaan-berri triple), CC (deep-pause synchrony), 254-1, 254-2, 254-3, 254-4, 254-5, 254-NEW, 254-NEW2, 255-1 through 255-5, 256-1 through 256-5).

## Headline events — **commit-phase FIRES at codex (2 merges including burst-PR #19917) and litellm (1 merge) breaking the cross-repo zero-merge tick at Add.110; Pred 255-1 partial-confirm (1 of ≥3 burst-PRs merged); Pred 254-NEW2 FALSIFIES (codex shallow-recovery via #19917); Pred LL extends to 3-tick goose zero-OPEN attractor; Pred CC trajectory still toward FALSIFICATION; gemini-cli viethungvili #26090 opens-and-closes in 7m28s — fastest opencode/cli close-cycle in W17 sample**

1. **Cross-repo merge resumption: 3 merges in 40m vs Add.109's 0 merges in 39m.** Per-repo: codex 2 (#19917 canvrno-oai 03:57:21Z, #19773 bolinfest 03:39:07Z); litellm 1 (#26460 milan-berri 03:22:05Z); opencode/gemini-cli/goose/qwen-code 0. **Cross-repo merge count returns from 0 to 3 in 1 tick** — consistent with synth #255's QA-phase / commit-phase oscillation prediction (pause-state followed by commit-state). **Pred 254-NEW (zero-merge ticks ≤2 per 8 ticks)** survives at Add.110: 1/2 of evaluated ticks zero-merge (Add.109 was zero, Add.110 is 3-merge). Carry, on track. **Pred 255-2 (≤2 consecutive zero-merge ticks)** PASSES at Add.110 — Add.109 was the single zero-merge tick, immediately broken by Add.110 commit-phase. The cross-repo merge-pause-merge oscillation is operating exactly as synth #255 predicted; Pred 255-2 falsifier (≥3 consecutive zero-merge ticks) is RETIRED for the Add.109-Add.110 transition.

2. **Pred 255-1 (codex commit-phase ≥3 burst-PR merges within 30m) PARTIAL-CONFIRM at Add.110.** Of the 11-PR codex open-burst spanning Add.107-Add.109, **#19917 canvrno-oai (`Allow /statusline and /title slash commands during active turns`, opened Add.109 02:59:52Z) MERGED at 03:57:21Z** — lifespan 57m29s, **first burst-PR merge**. The other in-window codex merge #19773 bolinfest (`permissions: require profiles in TUI thread state`, opened 04-27 05:49:50Z) is a **NON-burst PR** (predates the Add.107 open-burst by ≈20h). **Pred 255-1 burst-merge count: 1 of expected ≥3 within 30m of each other.** The remaining 10 burst-PRs did NOT merge in this window. **Pred 255-1 status: partial-trajectory; 1 burst-PR merged but the cluster-of-≥3-within-30m criterion is NOT met at Add.110.** Carry to Add.111-Add.113 deadline. **Pred 255-1' (NEW carry-refinement): if Add.111 or Add.112 yields ≥2 additional burst-PR merges (cumulative ≥3), the QA→commit-phase transition is **gradual** rather than **clustered**, requiring a refinement to synth #255's commit-phase definition** (commit-phase may span multiple ticks rather than fitting within a 30m intra-tick window). Falsifier: 0 additional burst-PR merges by Add.113.

3. **Pred 254-NEW2 (all-pause phase: all 6 repos avoid shallow class for 2 consecutive ticks) FALSIFIES at Add.110.** codex merge-silence at 04:00Z = **3 minutes** (since #19917 at 03:57:21Z). codex is now solidly **shallow** (<45m). litellm merge-silence at 04:00Z = **38m** (since #26460 at 03:22:05Z), also **shallow**. **2 of 6 repos in shallow class at Add.110**, falsifying the all-pause-phase hypothesis. The Add.109 all-pause was a **single-tick intersection** rather than a sustained phase, supporting synth #254/255's framing of cross-repo zero-merge as a **probabilistic intersection of independent pause oscillations** rather than a synchronized regime. **Pred 254-NEW2 RESOLVED-FALSIFIED at Add.110 (1 tick).**

4. **Pred LL (goose 3-tick zero-OPEN attractor) EXTENDS at Add.110.** goose has 0 in-window OPENs, 0 merges, 0 closes, 0 metadata-touches in the 40m window — **3rd consecutive Add (Add.108 + Add.109 + Add.110) of complete in-window inactivity**. **Pred LL deadline (Add.110) PASSES — goose is empirically in a structural-inactivity attractor distinct from deferred-batch cycling**, supporting Pred 254-4 outcome (c) for the goose component of the deep cohort. goose merge-silence at capture: **5h48m+** (since #8854 22:11:20Z 04-27). **Pred LL' (NEW carry-promotion): goose's structural-inactivity attractor persists for ≥5 consecutive Adds (Add.108-Add.112) before any in-window activity. Falsifier: any in-window OPEN, merge, close, or metadata-touch at goose by Add.112.** This refines Pred 254-4 outcome (c) for goose specifically.

5. **Pred CC (deep-pause synchrony — both gemini-cli + goose resume by Add.110) trajectory hardens toward FALSIFICATION.** At Add.110, gemini-cli still has 0 merges (silence now **6h42m** since #26079 21:17:32Z 04-27); goose still has 0 merges (silence **5h48m+**). **Neither resumed.** Pred CC was framed at Add.107 with "by Add.110" deadline; this is the deadline tick. Pred CC FALSIFIES at Add.110 — **deep-pause synchronicity is empirically NOT cross-repo coupled**, confirming synth #254/255's "no cross-repo synchronization at the merge-pause level" claim (synth #255 explicitly stays retracted on synth #246's synchronization claim). **Pred CC RESOLVED-FALSIFIED.** This strengthens synth #255's framing: the Add.109 zero-merge tick was independent-oscillation-coincidence, not a coupled-pause regime.

6. **gemini-cli viethungvili #26090 opens-and-closes in 7m28s — fastest opencode/cli close-cycle in W17 sample.** #26090 `fix(cli): support Vietnamese IME input on Windows` (viethungvili, opened 03:51:08Z, closed 03:58:36Z, lifespan **7m28s**). **First viethungvili PR in W17 sample.** Closed without merge in 7m28s — comparable to oss-agent-shin #26646 6s bot diagnostic close (synth #250 sub-pattern f) but at a **different scale class** (7m28s is human-fast, not bot-instant). The fast-close is suggestive of **author-self-close discovery** (likely (b) duplicate-of-existing-fix or (c) self-aware quality issue spotted post-open). **Pred MM (NEW): if viethungvili opens a refile of #26090 within 4 ticks (Add.114), the close was author-driven discovery (likely sub-pattern (b) of synth #244); if no refile appears, the close was a one-shot abandonment.** Falsifier: refile observed but with substantially different scope (not Vietnamese IME on Windows specifically). This adds to the synth #244 close-and-refile catalog evidence base.

In the 40m window 03:20Z→04:00Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 04:00Z |
|------|------------------|----------------|---------------------------|--------------------------|
| anomalyco/opencode | **0** | **2** (#24725 Sleepful 03:22:55Z, #24726 Alchuang22-dev 03:29:08Z) | 0 | **1h36m+** (since #24706 02:33Z) |
| openai/codex | **2** (#19773 bolinfest 03:39:07Z, #19917 canvrno-oai 03:57:21Z) | **2** (#19919 euroelessar 03:28:47Z, #19920 etraut-openai 03:29:49Z) | 0 | **3m** (since #19917 03:57:21Z) — **shallow** |
| BerriAI/litellm | **1** (#26460 milan-berri 03:22:05Z) | 0 | 0 | **38m** (since #26460 03:22:05Z) — **shallow** |
| google-gemini/gemini-cli | **0** | **1** (#26088 Gitanaskhan26 03:33:52Z) | **1** (#26090 viethungvili 03:51:08Z→03:58:36Z, lifespan 7m28s) | **6h42m** (since #26079 21:17:32Z) |
| block/goose | **0** | 0 | 0 | **5h48m+** (since #8854 22:11:20Z) |
| QwenLM/qwen-code | **0** | 0 | 0 | **2h37m+** (since #3682 01:22:18Z) — **deep** (crossed shallow→mid→deep boundaries since Add.109) |

**Cross-repo merge count this window: 3 merges, 5 opens, 1 close-no-merge.** **Open-to-merge ratio at Add.110: 1.67** (returning to the 0.5-3.0 normal-tick band after Add.109's ∞). The PR-flow has **commit-phase resumed** after the Add.109 pause-intersection — exactly as synth #255 predicted.

## opencode in-window — **kitlangton silent for 2nd consecutive tick (1h36m+); 2 new non-kitlangton opens; #24720 isac322 actively iterating with title broadened**

In-window MERGED: **0**. **Pred A''''' (kitlangton httpapi-metronome) STRESSED to FALSIFICATION threshold** — 2 consecutive ticks of kitlangton-silence (Add.109 + Add.110). **Pred A''''' RESOLVED-FALSIFIED at Add.110.** kitlangton's metronome is empirically broken for ≥2 ticks; the "per-tick metronome of httpapi-parity PRs" claim is rejected. **Pred A''''' deferred to Pred 255-5 framing** (deferred-batch special case with τ ≪ 1 tick): kitlangton has 0 merges across Add.109 + Add.110, **on the falsifier-edge of Pred 255-5** (which requires ≥1 merge by Add.111). 1 tick remaining for Pred 255-5; trajectory points toward FALSIFICATION unless kitlangton resumes within Add.111.

In-window NEW OPENs (2 — both non-kitlangton):
- **#24725** Sleepful `fix(tui): sort session picker by full updated timestamp` (03:22:55Z, last update 03:55:58Z). Surface: **tui/session-picker-sort-precision**. **First Sleepful PR in W17 sample.** Bug-class with concrete UX scope (sort-key precision). Lifespan at 04:00Z = **37m**, with 1 in-window iteration update.
- **#24726** Alchuang22-dev `feat(session): add methods to migrate session` (03:29:08Z, last update 03:30:03Z). Surface: **core/session-migration**. **First Alchuang22-dev PR in W17 sample.** Feature-class scope. Lifespan at 04:00Z = **30m52s**, no further iteration.

In-window CLOSED-no-merge (0).

**Active opencode OPENs from prior Adds (carry):**
- **#24720** isac322 — STILL OPEN; **TITLE BROADENED** from `fix: prevent 100% CPU on Wayland by adding exponential backoff to SSE reconnect` (Add.109) to `fix(desktop): prevent 100% CPU usage caused by infinite reconnects and recursive directory traversals` (Add.110). The title now covers **two surfaces** (SSE reconnect + recursive directory traversal) rather than one. **Title-broadening during open is the inverse of #24692 d7pow's title-narrowing** at Add.108-109 (`non-git directories` → `non-git projects`). **Pred NN (NEW): title-edits during open follow author-class signatures — bug-class authors broaden as they discover related bugs (isac322); feature-class authors narrow as they refine framing (d7pow). If of the next 5 in-window title-edits, ≥3 broaden when title-class is fix(...) AND ≥3 narrow when title-class is feat(...), the author-class title-edit asymmetry is empirical.** Falsifier: ≤1 of 5 follow the predicted asymmetry. Lifespan at 04:00Z = **57m+**, last UPDATE 03:57:52Z (in-window iteration ongoing).
- **#24717, #24716** kitlangton httpapi pair — STILL OPEN at lifespan **1h19m+**, no in-window updates. Pred A''''' falsified above.
- **#24712** kitlangton `Add native LLM core foundation` — STILL OPEN at lifespan **1h33m+**, no in-window updates.
- **#24707** kitlangton `Add Effect Drizzle SQLite adapter` — STILL OPEN at lifespan **1h53m+**, no in-window updates. **Pred Z' carry (deadline Add.115).**
- **#24704** jlongster — STILL OPEN at **2h08m+**, no in-window updates.
- **#24702** dixoxib — STILL OPEN at **2h26m+**.
- **#24701** workdocyeye — STILL OPEN at **2h26m+**.
- **#24692** d7pow — STILL OPEN at **4h13m+**, no in-window updates.
- **#24691** LCubero — STILL OPEN at **4h25m+** (Pred R deadline 23:34Z 04-28, **19h34m remaining**). Carry.
- **#24724** KTibow `docs: regenerate go and zen tables from models.dev` — STILL OPEN at **44m**, no in-window updates after open at Add.109.
- **#24718** jackmhny — already closed at Add.109; **Pred KK (refile within 4 ticks) — no jackmhny PR in Add.110 window.** 3 ticks remaining to Pred KK deadline (Add.113). Trajectory neutral so far.

**Trailing merge-silence at capture: 1h36m+** (mid). opencode has crossed **shallow-edge → mid** since Add.109, joining the QA-phase cohort under synth #255.

## codex in-window — **2 merges (commit-phase FIRES); #19917 burst-PR merge partial-confirms Pred 255-1; bolinfest #19773 NON-burst merge concurrent; 2 new opens (#19919, #19920); merge-silence resets to 3m (shallow)**

In-window MERGED: **2** — the **first multi-merge tick at codex since Add.103** in the corpus.
- **#19773** bolinfest `permissions: require profiles in TUI thread state` (opened 04-27 05:49:50Z, MERGED 03:39:07Z, lifespan **21h49m**). **NON-burst PR** (predates the Add.107 open-burst). **bolinfest is also the author of the #19899/#19900 doublet under Pred S** — this merge **does NOT close out Pred S** (the doublet remains OPEN), but it does indicate **bolinfest has commit-phase capacity at Add.110** that did not fire on the doublet. **Sub-observation: the bolinfest merge happened on a DIFFERENT permissions surface (TUI thread state) than the Pred S doublet (built-in default profiles + experimental marking). Bolinfest's commit-phase fired on the older, more-iterated PR rather than the newer doublet** — consistent with synth #244's framing of "older OPENs convert first when commit-phase fires." Lifespan-to-merge: 21h49m.
- **#19917** canvrno-oai `Allow /statusline and /title slash commands during active turns` (opened Add.109 02:59:52Z, MERGED 03:57:21Z, lifespan **57m29s**). **BURST-PR merge — first of the 11-PR Add.107-Add.109 codex open-burst to merge.** Lifespan 57m29s is **fast-class** (under 1h), suggesting the PR was already commit-ready when opened and used the QA-phase only briefly. **This contradicts synth #255's "QA-phase as accumulation period" framing for #19917 specifically** — #19917 had no extended QA cycle. **Refinement implication: not all burst-PRs accumulate in QA-phase; some pass through QA-phase quickly to commit-phase.** Synth #255 applies in aggregate but has per-PR exception cases.

In-window NEW OPENs (2):
- **#19919** euroelessar `app-server: notify clients of remote-control environment changes` (03:28:47Z, last update 03:52:04Z). Surface: **app-server/remote-control-env**. **First euroelessar PR in W17 sample.** Feature-class. Lifespan at 04:00Z = **31m**.
- **#19920** etraut-openai `Allow large remote app-server resume responses` (03:29:49Z, last update 03:38:52Z). Surface: **app-server/large-resume-responses**. **First etraut-openai PR in W17 sample.** Capacity-extension fix-class. Lifespan at 04:00Z = **30m**.

**codex open-burst inventory at Add.110:** 11 PRs opened Add.107-Add.109 (#19895, #19896, #19899, #19900, #19901, #19904, #19905, #19907, #19912, #19914, #19917). **1 of 11 merged** at Add.110 (#19917). **10 of 11 still OPEN at Add.110.** Add Add.110's 2 new opens (#19919, #19920); the **codex extended-burst is now 13 PRs spanning 6 ticks with 1 merge** (success ratio 1/13 = 7.7%). **Pred 254-5 (≥4 of 7-PR Add.107 open-burst merge by Add.111)** — at Add.110 only 1 burst-PR has merged (#19917), and only 1 tick remains to deadline. Trajectory: **Pred 254-5 will FALSIFY at Add.111 unless ≥3 additional burst-PR merges occur in the next ≤30 minutes** (extremely unlikely given the merge cadence in this window). **Pred 254-5 RESOLVED-FALSIFIED imminently (likely confirmed at Add.111 close).**

**Pred S (bolinfest #19899/#19900 doublet):** both STILL OPEN at lifespan **3h13m+** each, both UPDATED **03:41:32Z (in-window, identical timestamp — same-second metadata-touch, 2nd in 2 ticks)**. **The bolinfest doublet is now a 2-tick consecutive same-second-touch series** — strengthens synth #251 paired-PR sub-pattern. **Branch (iii) "both still OPEN ≥4h" of Pred S resolution: 47m remaining to threshold.** Carry; trajectory points to branch (iii) confirmation. **The non-merging of the doublet WHILE bolinfest's other PR (#19773) merged is itself a sub-pattern data point**: same author, multiple OPENs, only one merges per commit-phase tick. **Sub-pattern of Pred S resolution branch (iii)** under synth #251: paired-PRs may be deferred-batch within author-cohort, with author commit-phase firing on older non-paired PRs first.

**Pred H (evawong-oai 5-PR stack):** all 5 still OPEN; lifespan now **9h47m+**. **Pred H continues passing predicted-direction.** #19846 had in-window UPDATE at 03:23:31Z (top of window), but no merges among the stack.

**Pred E aftermath (eternal-openai #19905 lifecycle-hooks):** still OPEN, **2h37m+**, no in-window UPDATE in this window (last update 03:14:00Z just before window open). **Pred EE' carry**, but #19905 has now gone 1 full tick without iteration — first quiet tick for #19905 since open.

**Other codex actives with in-window metadata-touch:**
- **#19895** stefanstokic-oai UPDATE 03:34:50Z (in-window). Lifespan **3h41m+**.
- **#19904** efrazer-oai UPDATE 03:53:29Z (in-window). Lifespan **2h39m+**.
- **#19914** xl-openai (opened Add.109) UPDATE 03:49:13Z (in-window iteration on burst-PR #19914). Lifespan **1h11m+**.
- **#19907** maja-openai UPDATE 03:58:57Z (in-window). Lifespan **2h06m+**.
- **#19840** abhinav-oai UPDATE 03:50:22Z (in-window). Lifespan ~10h+.
- **#19764, #19763** efrazer-oai agent-identity pair — UPDATE 03:56:54Z and 03:40:03Z (in-window). Lifespans ~23h+.
- **#19708, #19509, #19473, #19456, #17689** various — multiple in-window metadata-touches.

**In-window touch rate on codex OPENs: ≥10 distinct PRs touched** in the 40m window. **codex is in active iteration mode** even while commit-phase fires on 2 PRs. This is consistent with synth #255's QA-phase / commit-phase **simultaneity** rather than strict alternation: QA-phase activity continues during commit-phase events.

**Trailing merge-silence at capture: 3m.** codex is **shallow** under synth #254 fluid model — a 2h34m crossing back from deep to shallow in 1 tick. **Pred 254-1 (8-tick rolling crossing-rate in [20%, 40%])** stress test: this Add.110 contributes a deep→shallow codex crossing (1 unit) plus litellm mid→shallow crossing (0.5 unit) plus opencode shallow-edge→mid crossing (0.5 unit) plus qwen-code mid→deep crossing (0.5 unit) = 2.5/6 = **42% per-repo-tick crossing rate**, **above the 40% upper bound**. **3-tick rolling: (33% + 50% + 42%) / 3 = 41.7%** — just over the band. **Pred 254-1 STRESSED at Add.110**; one more high-crossing tick falsifies.

## litellm in-window — **1 merge (#26460 milan-berri); breaks 1h33m mid-pause; commit-phase fires for 1 PR; 0 new opens, 0 closes; merge-silence resets to 38m**

In-window MERGED: **1**.
- **#26460** milan-berri `feat(proxy): Add cleanup job for expired LiteLLM dashboard session keys` (opened 04-24 23:28:58Z, MERGED 03:22:05Z, lifespan **3d3h53m**). **Long-lived feat-class PR** — significantly older than the in-flight ones. **milan-berri is a "berri" suffix author**, fitting the company-staff cohort that includes ishaan-berri, yuneng-berri, Michael-RZ-Berri. **Pred OO (NEW): of the next 5 litellm merges, ≥3 are from "*-berri" suffix authors.** Tests whether litellm's commit-phase preferentially fires on company-staff-authored PRs. Falsifier: ≤1 of next 5 from "*-berri" suffix authors. (This formalizes a long-standing observation across synth #244-#256 that berri-suffix authors dominate litellm commit-phase.)

In-window NEW OPENs (0).
In-window CLOSED-no-merge (0).

**Active litellm OPENs from prior Adds (carry):**
- **#26667** Bytechoreographer (refile of #26665) — STILL OPEN at lifespan **59m+**, last UPDATE 03:53:38Z (in-window iteration). **Pred GG' (terminal-correction within 4 ticks) carry.**
- **#26569** Sameerlite `Litellm oss staging 04 21 2026 2` — STILL OPEN at lifespan ~24h+, UPDATE 03:29:57Z (in-window).
- **#26468** Michael-RZ-Berri (one of the 3-PR stack from Pred HH) — STILL OPEN, UPDATE 03:23:15Z (in-window).
- The other 2 PRs in the Michael-RZ-Berri stack (#26534, #26629) did NOT receive in-window updates in this window. **Pred HH (deadline Add.110)**: at Add.110 close, only 1 of 3 stack PRs received in-window touches (#26468). **Pred HH RESOLVED at Add.110 — partial-touch (1 of 3) is consistent with the "pure presence-signaling" branch** rather than the "active stale-stack maintenance" branch. **Pred HH RESOLVED-PARTIAL.** The 1-of-3 touch ratio is a new data point for synth #244's stale-stack catalog: presence-signaling at the staff-author level is **bursty per-tick** rather than uniform.

**Pred AA (ishaan-berri triple {#26657, #26659, #26664}):** none of the 3 received in-window updates at Add.110 either. Pred AA deadline reached at Add.110: **0 of 3 touched in 2 consecutive ticks (Add.109 + Add.110)**. **Pred AA RESOLVED-FALSIFIED on the "active" branch — ishaan-berri's triple is in pause-state, not an active maintenance cluster.** Aligns with the broader cross-repo QA-phase signature.

**Pred T (litellm deferred-batch literal recurrence):** 1 in-window merge but no doublet (no 2nd merge within 30m). **Pred T STILL pending literal recurrence at Add.110**; carry. The Add.110 single-merge is **commit-phase firing in a single-PR mode** rather than the doublet form predicted by Pred T. This may indicate litellm has **two distinct commit-phase regimes**: doublet-class (synth #249) and single-class (this Add.110). Refinement candidate for future synth.

**Trailing merge-silence at capture: 38m** (shallow). litellm crossed mid → **shallow** in this tick (was 1h33m at Add.109, now 38m at Add.110). Joins codex in shallow-cohort.

## gemini-cli in-window — **0 merges, 1 NEW OPEN (#26088 Gitanaskhan26 F10 fallback), 1 CLOSED-no-merge (#26090 viethungvili 7m28s); deep-pause hits 6h42m**

In-window MERGED: **0**.

In-window NEW OPENs (1):
- **#26088** Gitanaskhan26 `fix(cli): add F10 fallback for approval mode cycling` (03:33:52Z, last update 04:01:37Z). Surface: **cli/approval-mode-key-fallback**. **First Gitanaskhan26 PR in W17 sample.** Bug-class accessibility-adjacent fix. Lifespan at 04:00Z = **27m**, with 1 in-window iteration update.

In-window CLOSED-no-merge (1):
- **#26090** viethungvili `fix(cli): support Vietnamese IME input on Windows` (opened 03:51:08Z, closed 03:58:36Z, lifespan **7m28s**). Headline event 6 above. **Pred MM (NEW)** introduced.

**Pred I (gemini-cli pause extension):** merge-silence now **6h42m**, **8-tick zero-merge** at Add.110. **Pred I extends to 8-tick** — joining the structural-prediction cohort with Pred B.

**Pred V (gemini-cli-robot title-leak persistence by Add.110):** no new gemini-cli-robot PR in window; **Pred V deadline reached at Add.110 with 0 of 3 expected gemini-cli-robot PRs**. **Pred V RESOLVED-FALSIFIED.** The Add.107 title-leak surge was an isolated quality incident, not a persistent issue — supporting synth #244's framing of bot-driven mass-events as transient.

**Pred CC (deep-pause synchrony):** RESOLVED-FALSIFIED — see headline event 5.

## goose in-window — **0 merges, 0 OPENs, 0 closes, 0 metadata-touches; 3rd consecutive zero-activity tick; Pred LL CONFIRMED**

In-window MERGED: **0**. **No in-window activity at all** for the **3rd consecutive tick** (Add.108, Add.109, Add.110).

**Trailing merge-silence: 5h48m+** since #8854 22:11:20Z. goose stays in **deep** class.

**Pred LL CONFIRMED at Add.110** — see headline event 4. **Pred LL' (NEW carry-promotion)** introduced for 5-tick continuation test.

## qwen-code in-window — **0 merges, 0 new opens, 0 metadata-touches; pause crosses to deep at 2h37m+; doudouOUC sibling-cluster (Pred II') not advancing**

In-window MERGED: **0**.

In-window NEW OPENs (0).

**Active in-window updates on prior OPENs:**
- **#3685** doudouOUC sdk-python release-workflow — UPDATE 03:51:13Z (in-window). Lifespan now **52m+**.
- **#3684** doudouOUC event-monitor Phase C — UPDATE 03:40:17Z (in-window). Lifespan now **1h53m+**.
- **#3680** chiga0 — UPDATE 03:49:37Z (in-window). Lifespan **15h00m+**.
- **#3491** BZ-D `feat: add /diff command and git diff statistics utility` — UPDATE 03:54:44Z (in-window). Lifespan **6d21h+**.
- **#2953** tanzhenxin — UPDATE 03:20:12Z (top of window). Lifespan **20d+**.

**Pred II' (doudouOUC sibling-cluster vs serial-iteration):** both #3684 and #3685 STILL OPEN; both received in-window iteration updates. Neither has merged yet. The sibling-cluster vs serial-iteration discrimination requires a merge of either to test; **Pred II' carry, no resolution at Add.110.** Deadline Add.113.

**Trailing merge-silence at capture: 2h37m+.** qwen-code crossed **mid → deep** in this tick (was 1h57m at Add.109, now 2h37m at Add.110). qwen-code joins codex (briefly), gemini-cli, and goose in the deep cohort historically — but codex resumed shallow at Add.110, so qwen-code's deep-crossing replaces codex in the deep-cohort. **Net deep-cohort at Add.110: 3 repos (gemini-cli, goose, qwen-code)** — same count as Add.109's deep-cohort (codex, gemini-cli, goose), but **with composition rotation** (codex out, qwen-code in). **The deep-cohort is composition-rotating rather than monotonically growing/shrinking** — a sub-observation supporting synth #255's independent-oscillation framing.

## Cross-repo merge-pause inventory at capture 04:00Z (synth #255 fluid + QA/commit model)

| Repo | Merge-silence at 04:00Z | In-window merges | Stratification class | Direction since Add.109 |
|------|--------------------------|--------------------|------------------------|---------------------------|
| anomalyco/opencode | **1h36m+** | 0 | **mid** | shallow-edge→mid (kitlangton silent 2nd tick) |
| openai/codex | **3m** | 2 | **shallow** | deep→shallow (commit-phase fires) |
| BerriAI/litellm | **38m** | 1 | **shallow** | mid→shallow (commit-phase fires) |
| google-gemini/gemini-cli | **6h42m** | 0 | **deep** (8-tick zero-merge) | deep→deeper |
| block/goose | **5h48m+** | 0 | **deep** (3-tick zero-OPEN) | deep→deeper |
| QwenLM/qwen-code | **2h37m+** | 0 | **deep** (newly crossed) | mid→deep |

**Stratification distribution at Add.110: 2 shallow + 0 shallow-edge + 1 mid + 3 deep.** **Compared to Add.109: 0 shallow + 1 shallow-edge + 2 mid + 3 deep.** **Net direction: bimodal-polarization — shallow cohort returns (2 from 0), deep cohort holds at 3 (composition-rotated), mid cohort shrinks from 2 to 1.** **Per-repo-tick crossing rate: ~42%** (calculated above) — at the high end of the 3-tick rolling band [33%, 50%, 42%]. **Pred 254-1 STRESSED**; if Add.111 yields ≥35% crossing rate, the rolling average crosses 40%, falsifying.

## Pred-status table for ADDENDUM-110 close

- **Pred A''''' (kitlangton httpapi-metronome)** → **RESOLVED-FALSIFIED at Add.110** (2 ticks of kitlangton-silence). Deferred to Pred 255-5 framing.
- **Pred B** → still falsified across 9 ticks; structural falsification holds.
- **Pred D** → still falsified.
- **Pred E** → boundary-fragile; #19905 still OPEN, no in-window iteration this tick (1st quiet tick).
- **Pred EE'** → carry; #19905 OPEN with reduced iteration cadence.
- **Pred FF'** → 3-tick rolling 0.000 PR/min for kitlangton at Add.110 (Add.108-Add.110: 5+0+0 / 30+39+40 = 0.045 PR/min — **below the 0.04 floor not yet, but trending**). Carry.
- **Pred GG'** → #26667 OPEN, in-window iteration. Carry.
- **Pred H** → carry; 5/5 evawong-oai stack still OPEN, lifespan ≈9h47m+.
- **Pred HH** → **RESOLVED-PARTIAL at Add.110** (1 of 3 in-window touch — pure presence-signaling branch).
- **Pred I** → CONFIRMED, extends to 8-tick at Add.110.
- **Pred II** → carry; #3684 still OPEN, in-window iteration.
- **Pred II'** → carry; both siblings OPEN with in-window iteration; no merge to discriminate yet.
- **Pred JJ** → carry; both #24707 and #24712 OPEN with no in-window updates this tick.
- **Pred KK** → carry; jackmhny no refile in Add.110. 3 ticks remaining.
- **Pred LL** → **CONFIRMED at Add.110** (3-tick goose zero-OPEN). Promoted to Pred LL' (5-tick continuation).
- **Pred LL' (NEW)** → goose 5-tick zero-activity attractor (Add.108-Add.112).
- **Pred MM (NEW)** → viethungvili #26090 close-cause discriminator: refile within 4 ticks signals author-driven discovery.
- **Pred NN (NEW)** → title-edit asymmetry by author-class (fix-broaden, feat-narrow).
- **Pred OO (NEW)** → litellm "*-berri" suffix author dominance in commit-phase (≥3 of next 5 merges).
- **Pred R** → still pending; 19h34m remaining.
- **Pred S** → both bolinfest #19899/#19900 still OPEN at 3h13m+; **2nd consecutive same-second metadata-touch** (03:41:32Z), strengthening synth #251 sub-pattern. Branch (iii) of resolution 47m to threshold.
- **Pred T** → 1 in-window litellm merge but no doublet at Add.110; carry. Refinement candidate for two-regime litellm commit-phase (doublet vs single).
- **Pred V** → **RESOLVED-FALSIFIED at Add.110** (0 of 3 expected gemini-cli-robot PRs).
- **Pred Y** → carry; 0 cross-repo doublets at Add.110.
- **Pred Z'** → carry; #24707 still OPEN. Deadline Add.115.
- **Pred AA** → **RESOLVED-FALSIFIED at Add.110** (0 of 3 touched in 2 consecutive ticks — pause-state, not active cluster).
- **Pred CC** → **RESOLVED-FALSIFIED at Add.110** — see headline 5.
- **Pred DD** → resolved at Add.109; archived.
- **Pred 254-1 (rolling crossing-rate in [20%, 40%])** → STRESSED at Add.110 (3-tick rolling 41.7%, just over band).
- **Pred 254-2 (≥3 of next 5 cross-repo merge events are doublets)** → carry; 0 doublets at Add.110, 3 single-merges instead.
- **Pred 254-3** → carry; 8-tick window evaluation deferred to Add.115.
- **Pred 254-4 (deep cohort resolution by Add.112)** → carry; deep cohort composition rotated (codex out, qwen-code in); outcome (c) for goose increasingly likely under Pred LL/LL'.
- **Pred 254-5 (≥4 of codex 7-PR open-burst merge by Add.111)** → 1 of 11 merged at Add.110 (#19917). Trajectory **strongly hardens toward FALSIFICATION at Add.111**.
- **Pred 254-NEW (zero-merge ticks ≤2 per 8 ticks)** → 1/2 of evaluated ticks zero-merge. On track. Carry.
- **Pred 254-NEW2 (all-pause phase 2 consecutive ticks)** → **RESOLVED-FALSIFIED at Add.110** (codex shallow + litellm shallow break the all-pause).
- **Pred 255-1 (codex commit-phase ≥3 burst-PR merges within 30m)** → **PARTIAL-TRAJECTORY**: 1 of expected ≥3 burst-PRs merged (#19917). Cluster-of-≥3-within-30m criterion NOT met. Carry; introduces Pred 255-1' (gradual vs clustered commit-phase).
- **Pred 255-1' (NEW)** → ≥2 additional burst-PR merges by Add.113 implies gradual commit-phase rather than clustered.
- **Pred 255-2 (≤2 consecutive zero-merge ticks)** → **PASSES at Add.110** (Add.109 single zero-merge tick broken by Add.110 commit-phase). Falsifier retired for this transition.
- **Pred 255-3 (close-and-refile concentrates in pause-state)** → 1 candidate at Add.110 (#26090 viethungvili 7m28s close — but this was during gemini-cli's deep-pause, not during a close-and-refile cycle yet; only 1 of 5 events evaluated). Carry.
- **Pred 255-4** → carry; 7-tick correlation window evaluation deferred to Add.115.
- **Pred 255-5 (kitlangton resumes by Add.111)** → STRESSED; 0 kitlangton merges across Add.109 + Add.110. 1 tick remaining.
- **Pred 256-1 (8-tick rolling PDT in [0.3, 1.5])** → Add.110 PDT count: Pred A''''' falsified, Pred CC falsified, Pred V falsified, Pred AA falsified, Pred LL confirmed, Pred HH partial-resolved, Pred 254-NEW2 falsified, Pred 255-2 passes = **8 resolutions at Add.110, PDT = 8.0** (vs Add.109 PDT = 3). **Add.110 PDT is 2.7× Add.109's PDT and 19× the Add.103-Add.108 baseline** — **even larger spike than Add.109**. **Pred 256-1 STRESSED**: 2-tick rolling PDT mean = (3 + 8)/2 = 5.5, far above the [0.3, 1.5] band. **Pred 256-1 falsifier (≥2 of next 8 ticks PDT ≥2.5)** is now MET in 2 consecutive ticks. **Pred 256-1 RESOLVED-FALSIFIED in 1 tick.** PDT spikes are NOT bounded at the predicted ceiling; the synth #256 metric needs reframing.
- **Pred 256-2 (PDT spikes coincide with state-transitions)** → Add.110's PDT=8 spike coincides with **commit-phase firing** (a state-transition from pause to commit). 2 of 2 PDT-spike ticks observed have coincided with state-transitions (Add.109 = pause-intersection; Add.110 = commit-phase resumption). **Pred 256-2 trajectory: STRONGLY CONFIRMED**. Carry; needs 1 more PDT-spike tick to fully confirm.
- **Pred 256-3 (regime promotion ≥3 confirming ticks)** → reaffirmed; synth #253 stays at downgraded status pending Pred 255-5 outcome at Add.111.
- **Pred 256-4 (close-and-refile on PDT spikes)** → 0 close-and-refile at Add.110 (the viethungvili close was not a refile; the Bytechoreographer #26667 carry from Add.109 refile was opened at Add.109 not Add.110). Carry.
- **Pred 256-5 (codex commit-phase PDT ≥2)** → Add.110 codex commit-phase fires with 2 merges; corpus PDT at Add.110 = 8.0, far above 2. **Pred 256-5 PASSES at Add.110.** The codex commit-phase tick produces a **highly compressed predicate-resolution event** — even larger than predicted.

## New predicates opened by ADDENDUM-110

- **Pred LL' (goose 5-tick zero-activity attractor):** goose has 0 in-window merges, opens, closes, AND metadata-touches across all 5 consecutive Adds (Add.108-Add.112). Falsifier: any in-window event at goose by Add.112 close.
- **Pred MM (viethungvili #26090 close-cause discriminator):** if viethungvili opens a refile of #26090 within 4 ticks (Add.114), the close was author-driven discovery (synth #244 sub-pattern (b) variant); if no refile appears, the close was one-shot abandonment. Falsifier: refile observed but with substantially different scope.
- **Pred NN (title-edit asymmetry by author-class):** of the next 5 in-window title-edits across all 6 repos, ≥3 broaden when title-class is fix(...) AND ≥3 narrow when title-class is feat(...). Falsifier: ≤1 of 5 follow the predicted asymmetry. Tests author-class psychology of title-edit-during-open events.
- **Pred OO (litellm "*-berri" suffix author commit-phase dominance):** of the next 5 litellm merges, ≥3 are from authors with "-berri" suffix or "berri" in login name. Falsifier: ≤1 of next 5 from "*-berri" cohort. Formalizes long-standing observation across W17 corpus.
- **Pred 255-1' (gradual vs clustered codex commit-phase):** if Add.111 or Add.112 yields ≥2 additional codex burst-PR merges (cumulative ≥3), the QA→commit-phase transition is **gradual** (multi-tick) rather than **clustered** (within-30m). Falsifier: 0 additional burst-PR merges by Add.113. Refines synth #255's commit-phase definition.

## Capture close

**04:00:00Z (2026-04-28).** Window width 40m honored; within ≤45m target. **Operational note**: ADDENDUM-110 captures the **commit-phase resumption** predicted by synth #255 — codex fires 2 merges (one burst-PR, one non-burst), litellm fires 1 merge, after the Add.109 cross-repo zero-merge tick. **The PDT at Add.110 = 8.0 is the largest predicate-density spike in the W17 corpus**, falsifying Pred 256-1 in 1 tick (PDT spikes are not bounded at 1.5 ceiling). **5 predicates resolved-falsified in this single tick (A''''', CC, V, AA, 254-NEW2, plus 256-1 itself = 6); 2 confirmed (LL, 256-5); 1 partial (HH); 1 trajectory-confirmed (256-2)**. **The commit-phase tick is empirically a higher-PDT event than the pause-intersection tick** (Add.110 PDT 8 > Add.109 PDT 3) — refining synth #256's claim that PDT spikes coincide with state-transitions: the commit-phase transition is more predicate-rich than the pause-intersection transition. **Recommend Add.111 also target ≤45m window to capture the post-commit-phase aftermath and the Pred 255-5 / Pred 254-5 deadline outcomes.** **The Add.111 outcomes on Pred 255-5 (kitlangton resumption), Pred 254-5 (codex burst-merge cluster), Pred 255-1' (gradual vs clustered commit-phase), and Pred FF' (kitlangton 3-tick rolling band) will be jointly decisive for whether synth #255's QA-phase / commit-phase model holds with refinement (gradual commit-phase) or needs a deeper rework.**
