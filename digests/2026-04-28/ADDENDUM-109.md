# ADDENDUM-109 — 2026-04-28 (capture 2026-04-28T03:20Z)

**Capture window:** 02:41:00Z → 03:20:00Z UTC. Window width: **39m00s** (within ≤45m target carried over from Add.108).
**Predecessor:** ADDENDUM-108 (closed 02:41:00Z; carry preds A''''' (httpapi-metronome), B (gemini-cli), DD (codex 2h-cross), EE' (refile-aware), FF (kitlangton sustained-burst-mode), GG (litellm #26665 title-vs-branch), HH (Michael-RZ-Berri stale-stack), II (qwen-code #3684 deferred-feature), JJ (kitlangton non-httpapi), H (evawong-oai 5-stack), I (gemini-cli 6-tick zero-merge), R (LCubero), S (stacked-pair regime — synth #253), T (litellm deferred-batch), Y (cross-repo deferred-batch), Z (#24707), AA (ishaan-berri triple), CC (deep-pause synchrony), Z++ (#24712 native-llm)).

## Headline events — **cross-repo zero-merge tick: 0 merges across all 6 repos in 39m; Pred GG resolves in 1 tick via close-and-refile with title-class realignment; Pred FF FALSIFIES as kitlangton metronome breaks; Pred DD CONFIRMS by codex crossing 2h threshold**

1. **Cross-repo merge drought**: in the 39m window 02:41Z→03:20Z, **0 merges occurred across all 6 tracked repos**. This is the **first complete zero-merge tick in the Add.103-Add.109 sample** (7 ticks). Prior ticks always had ≥1 merge in ≥1 repo; Add.108 had 2 merges (both opencode/kitlangton). Add.109 having zero is a **categorical break** in the cross-repo merge-frequency distribution. **Synth #254's deferred-batch model implies that batch-pause-batch-pause oscillation should produce occasional zero-merge ticks**; Add.109 is the first empirical observation. **Pred 254-NEW (NEW): in an 8-tick rolling window, zero-merge ticks should occur at ≤2 per 8 ticks under deferred-batch model; if Add.110-Add.111 also yield zero-merge ticks, the model needs a second-order correction (clustered-zero-batches).** Falsifier: ≥3 of next 8 ticks are zero-merge.

2. **Pred GG resolves in 1 tick via outcome (a)+(c) hybrid — close-and-refile with title-class realignment.** litellm #26665 `feat(ui): team members tab pagination and search filter` (Bytechoreographer, opened 02:33:45Z Add.108) was **CLOSED 03:00:26Z** (lifespan **26m41s**) WITHOUT merge, and **immediately refiled as #26667 `fix(ui): team members tab — O(1) lookup + client-side pagination & search`** at 03:00:26Z by the same author. **The new title is `fix(ui)` (matching the original branch name `fix/team-members-tab-slow-render`)**, confirming Pred GG outcome (c) "merge with title-edited to `fix(ui)`" — except executed via close-and-refile rather than in-place edit. **Pred GG (introduced Add.108, deadline Add.112) PASSES at Add.109 — 3 ticks early**, with a refinement: title-vs-branch class disagreement was resolved by **author self-correction** rather than maintainer push, and via **close-and-refile** rather than title-edit. The close-and-refile pattern matches **synth #244 sub-pattern (b) (close-and-refile by SAME author) and synth #244 sub-pattern (e) (refile with title rewrite to align with branch)** — a known regime, but with the new addition that the **trigger was internal scope-class consistency** rather than maintainer feedback. **Pred GG' (NEW carry-refinement): #26667 merges within 4 ticks (Add.113) with no further close-refile cycles**, confirming that title-class self-correction is a **terminal correction** rather than a recurring-correction pattern. Falsifier: #26667 itself gets closed-and-refiled.

3. **Pred FF FALSIFIES at Add.109.** kitlangton's per-minute PR throughput at Add.108 was 0.167 PR/min (5 PRs in 30m); the Add.109 window (39m) shows **0 kitlangton PRs (0 merges, 0 opens)**. Per-minute throughput at Add.109 = **0.000 PR/min**, **well below the ≤0.05 PR/min falsifier threshold**. **kitlangton's sustained-burst hypothesis is REJECTED in 1 tick** — the Add.108 burst was a transient burst per synth #244 framing, NOT a sustained burst. **Pred FF deadline was Add.110-Add.111**; the rejection is ≥1 tick early. **Methodological note: Pred FF's quick falsification confirms the per-minute throughput metric is high-variance at the per-tick scale and should be evaluated only on rolling-windows ≥3 ticks.** **Pred FF' (NEW carry-correction): kitlangton's 3-tick rolling per-minute throughput (Add.107-Add.109 inclusive) is (3 + 5 + 0) / (81 + 30 + 39) min = 8 PRs / 150 min = 0.053 PR/min** — **just above the 0.05 floor**, supporting **transient-burst-with-trailing-decay** rather than **sustained-burst**. Falsifier of FF': any 3-tick rolling window dropping below 0.04 PR/min within Add.109-Add.113.

4. **Pred DD CONFIRMS at Add.109.** codex merge-silence at 03:20Z is **2h37m** (since #19892 00:43:16Z), **comfortably above the 2h threshold predicted at Add.107**. Pred DD (codex shallow→mid→2h-deep crossing predicted by Add.109) **PASSES on schedule**. codex now joins {gemini-cli, goose} as a **third deep-class repo** at Add.109 — **the deep cohort expands from 2/6 to 3/6 in 1 tick**. **Stratification at 03:20Z: 0 shallow + 1 shallow-edge (litellm 1h33m+ — but this crosses to mid threshold by definition) + 1 mid (qwen-code 1h57m+ — also imminently crossing to deep) + 3 deep (gemini-cli 6h02m, goose 5h08m+, codex 2h37m).** **Reclassifying with thresholds: 0 shallow + 0 shallow-edge + 2 mid (litellm 1h33m, qwen-code 1h57m) + 3 deep + opencode at mid-edge (56m, just below 1h shallow→shallow-edge boundary).** Final count: **1 shallow-edge (opencode 56m) + 2 mid (litellm 1h33m, qwen-code 1h57m) + 3 deep (codex, gemini-cli, goose)**. **Pred 254-NEW2 (NEW): if all 6 repos avoid shallow class for ≥2 consecutive ticks (Add.109 + Add.110), the cross-repo merge-pause cycle has entered an "all-pause" phase distinct from the steady-mixed-strata observation in Adds 103-108.** Falsifier: any repo crosses to shallow (<45m merge-silence) within Add.110.

5. **doudouOUC opens 2nd PR (#3685) at qwen-code, extending the per-author re-engagement signature.** #3685 `feat(sdk-python): add PyPI release workflow` opened **03:07:41Z** by doudouOUC. This is doudouOUC's **3rd qwen-code PR in 24h** after #3665 (chore gitignore, merged 06:38:56Z 04-27) and #3684 (Phase C event monitor, opened 02:06:28Z Add.108, still OPEN). **Pred II (qwen-code #3684 deferred-feature closed-loop, deadline Add.112) carry, but the new sibling PR #3685 introduces a confound similar to #24712's confound on Pred Z: doudouOUC may be opening sibling PRs as a strategic cluster rather than iterating-then-merging on #3684.** **Pred II' (NEW carry-refinement): if either #3684 or #3685 merges within 4 ticks AND the non-merging sibling stays OPEN ≥48h, doudouOUC's opening pattern is sibling-cluster (multiple-bets) rather than serial-iteration**; if both merge, the closed-loop hypothesis (II) holds in extended form. Falsifier of II': both #3684 and #3685 self-close OR both stay OPEN ≥72h.

In the 39m window 02:41Z→03:20Z:

| Repo | In-window MERGED | In-window OPEN | In-window CLOSED-no-merge | Merge-silence at 03:20Z |
|------|------------------|----------------|---------------------------|--------------------------|
| anomalyco/opencode | **0** | **2** (#24720 isac322 03:03:04Z, #24724 KTibow 03:15:41Z) | **1** (#24718 jackmhny 03:10:43Z, lifespan 17m44s) | **56m** (since #24706 02:33Z) |
| openai/codex | **0** | **2** (#19914 xl-openai 02:48:29Z, #19917 canvrno-oai 02:59:52Z) | 0 | **2h37m** (since #19892 00:43:16Z) |
| BerriAI/litellm | **0** | **1** (#26667 Bytechoreographer 03:00:26Z refile) | **1** (#26665 03:00:26Z, lifespan 26m41s — refile-source) | **1h33m** (since #26661) |
| google-gemini/gemini-cli | **0** | **1** (#26087 Ultron09 02:52:50Z) | 0 | **6h02m** (since #26079 21:17:32Z) |
| block/goose | **0** | 0 | 0 | **5h08m+** (since #8854 22:11:20Z) |
| QwenLM/qwen-code | **0** | **1** (#3685 doudouOUC 03:07:41Z) | 0 | **1h57m+** (since #3682 01:22:18Z) |

**Cross-repo merge count this window: 0 merges, 7 opens, 2 closes-no-merge.** **Open-to-merge ratio at Add.109: ∞** (undefined; categorical break from prior tick ratios of 0.5-3.0 opens-per-merge). The PR-flow is **all-input-no-output** in this tick — consistent with the deferred-batch-pause phase under synth #254.

## opencode in-window — **kitlangton silent for 56m; jackmhny refile-and-close on doc duplicate; isac322 Wayland CPU fix opened; KTibow models.dev table regen**

In-window MERGED: **0** (kitlangton silence breaks the Add.108 metronome).

In-window NEW OPENs (2 — both non-kitlangton):
- **#24720** isac322 `fix: prevent 100% CPU on Wayland by adding exponential backoff to SSE reconnect` (03:03:04Z, last update 03:17:16Z). Surface: **desktop/wayland-sse-reconnect**. **First isac322 PR in W17 sample.** This is a **bug-class PR with concrete repro context (Wayland environment + CPU pegging)** — the kind of PR that typically merges fast (≤2h) under maintainer triage when the fix is small. Lifespan at 03:20Z = **16m56s**.
- **#24724** KTibow `docs: regenerate go and zen tables from models.dev` (03:15:41Z, last update 03:18:24Z). Surface: **docs/models.dev-tables**. **First KTibow PR in W17 sample.** A pure docs regen PR — typically merges trivially or sits as a low-priority maintenance PR. Lifespan at 03:20Z = **4m19s**.

In-window CLOSED-no-merge (1):
- **#24718** jackmhny `remove duplicate in ecosystem.mdx` (opened 02:52:59Z, closed 03:10:43Z, lifespan **17m44s**). Surface: **docs/ecosystem-mdx-dedup**. **First jackmhny PR in W17 sample.** Closed without merge after 17m44s — a **fast-close cycle** characteristic of either (a) maintainer-rejection on quality, (b) duplicate-of-existing-fix, or (c) author-self-close. Need to check #24718's close reason (not visible in PR list metadata). **Pred KK (NEW): if jackmhny opens a refile of #24718 within 4 ticks (Add.113), the close was author-driven (likely (b) or (c)); if no refile appears, the close was maintainer-rejection (a).** Falsifier: refile pattern observed but as a different ecosystem.mdx edit (not specifically a dedup).

**Active opencode OPENs from prior Adds (carry):**
- **#24717** kitlangton `fix(httpapi): document tui bad request responses` — STILL OPEN at lifespan **39m** (opened 02:41:16Z, no metadata-touch in window). **Pred A''''' candidate-merge (within tick under metronome) FAILED** — the kitlangton metronome broke for ≥1 tick, a direct stress test for Pred A'''''. **Pred A''''' is now under load: 1 tick of kitlangton-silence is consistent with the predicate's "per-tick metronome of httpapi-parity PRs" claim only if Add.110 yields ≥1 new httpapi-parity PR by kitlangton (open OR merge). 2 ticks of kitlangton-silence would falsify A'''''.**
- **#24716** kitlangton `fix(httpapi): align sync seq validation` — same as #24717, STILL OPEN at **39m**.
- **#24712** kitlangton `Add native LLM core foundation` — STILL OPEN at lifespan **53m+**, last UPDATE 02:39:36Z (no in-window metadata-touch). **Pred JJ candidate (≥1 of {#24707, #24712} merges by Add.112) carry; neither moved in 39m.**
- **#24707** kitlangton `Add Effect Drizzle SQLite adapter` — STILL OPEN at lifespan **1h13m+**, last UPDATE **02:57:41Z (in-window metadata-touch)** — first sign of in-window kitlangton activity (no SHA change visible at list-level, so it's a metadata-touch not a content commit). **Pred Z carry; Pred Z falsifier (≤1h merge-or-close) NOW EXCEEDED at 1h13m** — interpretation: Pred Z's "binary merge or close by Add.110" frame was the wrong frame as flagged in Add.108; refine to **Pred Z'** (NEW carry-refinement): #24707 resolves by Add.115 (vs Add.110 original), with the extended deadline reflecting that foundation-class PRs (similar to #24712) take longer to converge than micro-fix-class PRs.
- **#24704** jlongster `feat(core): store relative path for sessions` — STILL OPEN at lifespan **1h28m+**, no in-window updates.
- **#24702** dixoxib — STILL OPEN at **1h46m+**.
- **#24701** workdocyeye — STILL OPEN at **1h46m+**.
- **#24692** d7pow `fix(opencode): use directory as worktree for non-git projects` — STILL OPEN at **3h33m+**, last UPDATE **03:01:16Z (in-window metadata-touch)**. The title was edited (was `non-git directories` in Add.108, now `non-git projects` — a noun-class refinement). **Title-edit during open is itself an interesting micro-event; it suggests the author is iterating on framing rather than content.**
- **#24691** LCubero — STILL OPEN at **3h45m+** (Pred R deadline 23:34Z 04-28, 20h14m remaining). Carry.

**Trailing merge-silence at capture: 56m** (under shallow-edge threshold of 1h). opencode is **shallow-edge** at Add.109 — kitlangton's metronome silenced the metronome that kept it shallow at Add.108.

## codex in-window — **0 merges, 2 NEW OPENs (#19914 xl-openai plugin-cache, #19917 canvrno-oai slash-commands-during-turns), pause crosses 2h confirming Pred DD**

In-window MERGED: **0**. Trailing merge-silence: **2h37m08s** at capture.

In-window NEW OPENs (2):
- **#19914** xl-openai `feat: Cache remote plugin bundles on install` (02:48:29Z, last update 03:02:17Z). Surface: **plugin-bundle-caching**. **First xl-openai PR in W17 sample.** Feature-class scope. Lifespan at 03:20Z = **31m**.
- **#19917** canvrno-oai `Allow /statusline and /title slash commands during active turns` (02:59:52Z, last update 03:07:05Z). Surface: **tui/slash-commands**. **First canvrno-oai PR in W17 sample.** Feature-class scope. Lifespan at 03:20Z = **20m**.

**codex open-burst inventory at Add.109:** Add.107 had a 7-PR open-burst (#19895, #19896, #19899, #19900, #19901, #19904, #19905, #19907). Add.108 added #19912. Add.109 adds #19914 + #19917. **Total open-burst since Add.107: 11 PRs across 5 ticks**, with **0 merges in this open-burst sample** (none of the 11 have merged). **Pred 254-5 (≥4 of the 7-PR Add.107 open-burst merge by Add.111)** carry; current count is **0/8 merged** (extending the burst inventory by 4), trajectory points to FALSIFICATION unless Add.110-Add.111 produce a deferred-batch resumption with merges drawn from the burst. **Pred 254-5 is now at risk** — if 0/11 merge by Add.110 close, the open-burst is **author-attention-decoupled** (synth #244 pattern) rather than **prep for deferred-batch** (synth #249 pattern).

**Pred E aftermath (eternal-openai #19905 lifecycle-hooks):** still OPEN at lifespan **1h56m+**, last UPDATE **03:14:00Z (in-window)**. #19905 continues iterating intra-tick. **Pred EE' carry.**

**Pred S (bolinfest #19899/#19900 doublet):** both STILL OPEN at lifespan **2h33m+** each, both UPDATED **03:18:08Z (in-window, identical timestamp — same-second metadata-touch on doublet)**. **Same-second n=2 metadata-touch on doublet PRs by same author** — matches synth #246 sub-pattern of paired-PR maintenance. **Branch (iii) "both still OPEN ≥4h" of Pred S resolution: 1h27m remaining to threshold.** Carry.

**Pred H (evawong-oai 5-PR stack):** all 5 still OPEN; lifespans now ≈9h07m+. **Pred H continues passing predicted-direction.** No in-window updates.

**Other codex actives with in-window metadata-touch:**
- **#19895** stefanstokic-oai `External agent session support` UPDATE 03:18:47Z (in-window). Lifespan **3h01m+**.
- **#19904** efrazer-oai `fix: configure AgentIdentity AuthAPI base URL` UPDATE 03:18:37Z (in-window). Lifespan **1h59m+**.
- **#19907** maja-openai `Clarify network approval auto-review prompts` UPDATE 02:49:34Z. Lifespan **1h26m+**.

**4 of the 11-PR open-burst received in-window metadata-touches** (#19895, #19899, #19900, #19904, #19905) — **5 of 11**, ~45% touch rate. **Open-burst inventory is actively being maintained** but not converging to merge. **Pred 254-5 trajectory hardens toward falsification unless Add.110 produces a deferred-batch.**

**Trailing merge-silence at capture: 2h37m08s.** codex is **deep** under synth #254 fluid model.

## litellm in-window — **0 merges, 1 close-and-refile (#26665→#26667 Pred GG resolution), Pred T mechanism continues to test cross-repo**

In-window MERGED: **0**. Trailing merge-silence: **1h33m54s** at capture (just past the 1h shallow→mid boundary, now solidly **mid**).

In-window CLOSED (1):
- **#26665** Bytechoreographer `feat(ui): team members tab pagination and search filter` (opened 02:33:45Z Add.108, closed 03:00:26Z, lifespan **26m41s**). **Closed without merge.**

In-window NEW OPENs (1):
- **#26667** Bytechoreographer `fix(ui): team members tab — O(1) lookup + client-side pagination & search` (03:00:26Z, last update 03:04:10Z). **Refile of #26665 with title rewritten from `feat(ui)` to `fix(ui)` (matching original branch name `fix/team-members-tab-slow-render`).** Lifespan at 03:20Z = **19m34s**. **Pred GG PASSES** (see headline event 2 above).

**Pred HH (Michael-RZ-Berri 3-PR stack):** at Add.108 the 3 PRs {#26469, #26534, #26629} were all metadata-touched in window. At Add.109, **none of the 3 received in-window metadata-touches** (none appear in fresh PR list within window timestamps). **Pred HH still pending; 1 tick remaining to deadline (Add.110).** Trajectory: if Add.110 also yields no metadata-touch and no merge/close, the Add.108 simultaneous-touch was a **one-off presence-signal** rather than recurring maintenance — would partially confirm Pred HH's "pure presence-signaling" branch. Carry.

**Pred AA (ishaan-berri triple-on-projects):** {#26657, #26659, #26664} — #26664 last UPDATE 01:52:55Z (pre-window); #26659 last UPDATE 00:59:36Z (pre-window); #26657 last UPDATE 00:52:32Z (pre-window). **None of the 3 received in-window updates.** Pred AA carry, 1 tick remaining; trajectory points to ishaan-berri ALSO pausing — consistent with the cross-repo zero-merge pattern (litellm receiving 0 in-window iteration on the projects-axis triple).

**Pred T (litellm deferred-batch literal recurrence):** 0 merges in window; the deferred-batch pattern requires ≥2 merges within ≤30m. **Pred T STILL pending literal recurrence** at Add.109; carry.

**Trailing merge-silence at capture: 1h33m54s.** litellm crossed shallow-edge → **mid** during the 39m window (was 54m at Add.108, now 1h33m at Add.109). **Litellm joins qwen-code and codex in mid-or-deeper class — 5/6 repos are now mid or deep at Add.109**, an unprecedented stratification skew vs the Add.108 distribution (1/6 shallow, 1/6 shallow-edge, 2/6 mid, 2/6 deep).

## gemini-cli in-window — **0 merges, 1 NEW OPEN (#26087 Ultron09 OAuth/config persistence), Pred I extends to 7-tick zero-merge; deep-pause hits 6h02m**

In-window MERGED: **0**.

In-window NEW OPENs (1):
- **#26087** Ultron09 `fix: resolve global configuration persistence and OAuth URL display (#12137)` (02:52:50Z, last update 03:18:59Z). Surface: **core/config-persistence + auth/oauth-url-display**. **Two surfaces in one PR** — title indicates issue #12137 reference. **First Ultron09 PR in W17 sample.** Lifespan at 03:20Z = **27m10s**, with active iteration (3 updates over 26m).

**Pred I (gemini-cli pause extension):** merge-silence now **6h02m**, **7-tick zero-merge** at Add.109. **Pred I extends successfully**, joining Pred B as a multi-tick structural prediction.

**Pred V (gemini-cli-robot title-leak persistence by Add.110):** no new gemini-cli-robot PR in window; **carry, 1 tick remaining to deadline**. Trajectory: Pred V is on track to FALSIFY (no new gemini-cli-robot PR in 2 consecutive ticks Add.108 + Add.109 = 0 of 2 expected), unless Add.110 produces a gemini-cli-robot PR. Falsification of Pred V would suggest **the Add.107 title-leak surge was an isolated incident** rather than a persistent quality issue.

**Pred CC (deep-pause synchrony, both gemini-cli + goose resume by Add.110):** at Add.109, gemini-cli at 6h02m, goose at 5h08m+. **Both deepening, neither resuming.** Pred CC requires resolution by Add.110 (1 tick remaining); current trajectory points to **Pred CC FALSIFICATION imminent** at Add.110. Once Pred CC falsifies, **deep-pause synchronicity is confirmed NOT cross-repo coupled**, supporting synth #254's "no cross-repo synchronization" claim.

## goose in-window — **0 merges, 0 OPENs, 0 closes; deep-pause extends to 5h08m**

In-window MERGED: **0**. **No in-window activity at all** for the 2nd consecutive tick. goose's last activity remains #8872 release-bot at 00:58:13Z (Add.107 close).

**Trailing merge-silence: 5h08m+** since #8854 22:11:20Z. goose stays in **deep** class.

**goose is now the only repo with 0 in-window OPENs in 2 consecutive Adds (Add.108 + Add.109)** — a unique signature among the 6 repos. **Pred LL (NEW): if goose has 0 OPENs for 3 consecutive Adds (Add.108-Add.110), then goose is in a structural-inactivity attractor distinct from deferred-batch cycling, supporting Pred 254-4 outcome (c) for the goose component of the deep cohort.** Falsifier: ≥1 in-window OPEN at goose by Add.110 close.

## qwen-code in-window — **0 merges; #3685 doudouOUC 2nd PR opened; pause climbs to 1h57m**

In-window MERGED: **0**.

In-window NEW OPENs (1):
- **#3685** doudouOUC `feat(sdk-python): add PyPI release workflow` (03:07:41Z). Surface: **sdk-python/release-workflow** (CI/release-pipeline). **3rd doudouOUC qwen-code PR in 24h** after #3665 (merged) and #3684 (still OPEN). Lifespan at 03:20Z = **12m19s**, no further updates yet.

**Active in-window updates on prior OPENs:**
- **#3684** doudouOUC `feat(core): event monitor tool with throttled stdout streaming (Phase C)` UPDATE 03:16:19Z (in-window). Lifespan now **1h13m+**, **continuous iteration**. **Pred II carry.**
- **#3680** chiga0 `feat(cli): expand TUI markdown rendering` UPDATE 03:19:03Z (in-window). Lifespan **14h19m+**.
- **#3673** LaZzyMan `feat(memory): add autoSkill background project skill extraction` UPDATE 03:05:09Z (in-window). Lifespan **17h28m+**.
- **#3677** shenyankm `fix(openai): parse MiniMax thinking tags` UPDATE 02:00:32Z (pre-window).

**Trailing merge-silence at capture: 1h57m+.** qwen-code is **mid (deepening)**, on track to cross to **deep (≥2h)** within the next ≤3 minutes by structural inevitability — making qwen-code the **next imminent shallow→mid→deep class-crosser**.

## Cross-repo merge-pause inventory at capture 03:20Z (synth #254 fluid model)

| Repo | Merge-silence at 03:20Z | In-window merges | Stratification class | Direction since Add.108 |
|------|--------------------------|--------------------|------------------------|---------------------------|
| anomalyco/opencode | **56m** | 0 | **shallow-edge** | shallow→shallow-edge (kitlangton silenced) |
| openai/codex | **2h37m08s** | 0 | **deep** | mid-deepening→deep (Pred DD CONFIRMS) |
| BerriAI/litellm | **1h33m54s** | 0 | **mid** | shallow-edge→mid |
| google-gemini/gemini-cli | **6h02m** | 0 | **deep** (7-tick zero-merge) | deep→deeper |
| block/goose | **5h08m+** | 0 | **deep** | deep→deeper |
| QwenLM/qwen-code | **1h57m+** | 0 | **mid (imminently deep)** | mid→mid-deepening |

**Stratification distribution at Add.109: 0 shallow + 1 shallow-edge (opencode 56m) + 2 mid (litellm 1h33m, qwen-code 1h57m) + 3 deep (codex 2h37m, gemini-cli 6h02m, goose 5h08m).** **Compared to Add.108: 1 shallow + 1 shallow-edge + 2 mid + 2 deep.** **Net direction: dispersion-up — shallow cohort gone, deep cohort grew from 2 to 3.** **Per-repo-tick crossing rate: 3/6 (opencode shallow→shallow-edge counted as 0.5; litellm shallow-edge→mid counted as 1; codex mid→deep counted as 1; qwen-code mid→mid-deepening counted as 0.5)** = (0.5 + 1 + 1 + 0.5) / 6 = **3/6 = 50%**. **3-tick rolling crossing-rate average: (25% + 33% + 50%) / 3 = 36%** — climbing, **above synth #254's 40% upper-bound from Pred 254-1**. **Pred 254-1 is now under load: if Add.110 yields ≥45% crossing rate, the rolling average exceeds 40% over 3 ticks, triggering Pred 254-1's 3-tick falsifier.**

## Pred-status table for ADDENDUM-109 close

- **Pred A''''' (kitlangton httpapi-metronome)** → STRESSED: 1 tick of kitlangton-silence. Predicate survives if Add.110 yields ≥1 new httpapi-parity PR by kitlangton. 2 ticks of silence would FALSIFY.
- **Pred B** → still falsified across 8 ticks; structural falsification holds.
- **Pred D** → still falsified.
- **Pred E** → boundary-fragile; #19905 still OPEN, in-window iteration.
- **Pred EE' (eternal-openai #19905 refile-aware)** → carry; in-window iteration continues.
- **Pred FF (kitlangton sustained-burst-mode)** → **FALSIFIED at Add.109** (0.000 PR/min vs ≤0.05 falsifier threshold). REJECTED.
- **Pred FF' (NEW carry-correction)** → 3-tick rolling 0.053 PR/min, transient-burst-with-trailing-decay framing. Falsifier deferred to Add.113.
- **Pred GG (litellm #26665 title-vs-branch resolution)** → **PASSES at Add.109** (3 ticks early) via close-and-refile with title rewrite to `fix(ui)`. RESOLVED.
- **Pred GG' (NEW carry-refinement)** → #26667 merges within 4 ticks (Add.113) with no further close-refile cycles.
- **Pred HH (Michael-RZ-Berri stale-stack)** → carry; no in-window touches at Add.109; trajectory points to "pure presence-signaling" branch confirmation if Add.110 also has no touches.
- **Pred II (qwen-code #3684 deferred-feature)** → carry; #3684 continues iterating; #3685 sibling introduces confound.
- **Pred II' (NEW carry-refinement)** → if either #3684 or #3685 merges with non-merging sibling staying OPEN ≥48h, sibling-cluster pattern; if both merge, closed-loop extended.
- **Pred JJ (kitlangton non-httpapi: #24707 + #24712)** → carry; both OPEN; #24707 metadata-touched in window.
- **Pred KK (NEW)** → jackmhny #24718 close-cause discriminator: refile-within-4-ticks signals author-driven close.
- **Pred LL (NEW)** → goose 3-tick zero-OPENs signals structural-inactivity attractor.
- **Pred H** → carry; 5/5 evawong-oai stack still OPEN at age ≈9h07m.
- **Pred I** → CONFIRMED, extends to 7-tick at Add.109.
- **Pred R** → still pending; 20h14m remaining.
- **Pred S** → both bolinfest #19899/#19900 still OPEN at 2h33m+; same-second metadata-touch in-window is a sub-pattern of the doublet maintenance signature; branch (iii) of resolution 1h27m to threshold. Carry; synth #253 regime applies.
- **Pred T** → 0 in-window litellm merges, no doublet possible at Add.109; carry.
- **Pred V (gemini-cli-robot title-leak)** → trajectory points to FALSIFICATION at Add.110 (0 of 2 ticks expected gemini-cli-robot PRs).
- **Pred Y (cross-repo deferred-batch normalization)** → carry; no in-window doublets at Add.109; 3 ticks remaining.
- **Pred Z** → falsifier deadline EXCEEDED at 1h13m; refine to Pred Z'.
- **Pred Z' (NEW carry-refinement)** → #24707 resolves by Add.115 (foundation-class extended deadline).
- **Pred AA (ishaan-berri triple)** → carry; no in-window touches at Add.109; 1 tick remaining.
- **Pred CC (deep-pause synchrony)** → trajectory **strongly points to FALSIFICATION at Add.110** (neither gemini-cli nor goose resuming).
- **Pred DD (codex 2h crossing)** → **CONFIRMED at Add.109** (2h37m at capture, comfortably past 2h threshold).
- **Pred 254-1 (8-tick rolling crossing-rate in [20%, 40%])** → STRESSED: 3-tick rolling at 36%, climbing toward 40% ceiling.
- **Pred 254-2 (≥3 of next 5 cross-repo merge events are doublets)** → carry; 0 cross-repo merges at Add.109, no events to evaluate.
- **Pred 254-3 (class membership predictive power |r|<0.20)** → carry; 8-tick window evaluation deferred to Add.115.
- **Pred 254-4 (deep cohort resolution by Add.112)** → carry; deep cohort **expanded to 3** at Add.109 (codex joined); resolution outcome (a)/(b)/(c) increasingly likely to be (c) for goose specifically (consistent with new Pred LL).
- **Pred 254-5 (≥4 of codex 7-PR open-burst merge by Add.111)** → 0/11 merged, trajectory hardens toward falsification.
- **Pred 254-NEW (zero-merge ticks ≤2 per 8 ticks)** → introduced at Add.109; need 8-tick window to evaluate.
- **Pred 254-NEW2 (all 6 repos avoid shallow for 2 consecutive ticks)** → introduced at Add.109; Add.110 outcome decisive.

## New predicates opened by ADDENDUM-109

- **Pred FF' (kitlangton transient-burst-with-trailing-decay):** 3-tick rolling per-minute throughput stays in [0.04, 0.10] PR/min for any 3 consecutive ticks within Add.109-Add.113. Outside this band → either super-burst recurrence (above 0.10) or full-decay (below 0.04). Tests whether the Add.108 burst was a one-shot or a recurring cycle.
- **Pred GG' (litellm #26667 terminal-correction):** #26667 merges within 4 ticks (by Add.113) with NO further close-refile cycles. Falsifier: #26667 itself gets closed-and-refiled within 4 ticks, indicating title-class self-correction is recursive rather than terminal.
- **Pred II' (doudouOUC sibling-cluster vs serial-iteration):** if either of {#3684, #3685} merges within 4 ticks AND the non-merging sibling stays OPEN ≥48h, doudouOUC's pattern is sibling-cluster (multiple-bets); if both merge, closed-loop hypothesis (Pred II) holds in extended form. Falsifier of II': both #3684 and #3685 self-close OR both stay OPEN ≥72h.
- **Pred KK (jackmhny #24718 close-cause discriminator):** if jackmhny opens a refile-of-#24718 within 4 ticks (Add.113), the close was author-driven (likely duplicate-of-existing-fix or self-close); if no refile appears, the close was maintainer-rejection. Falsifier: refile observed but to a different ecosystem.mdx edit not specifically dedup-related.
- **Pred LL (goose structural-inactivity attractor):** if goose has 0 in-window OPENs for 3 consecutive Adds (Add.108-Add.110), then goose is in a structural-inactivity attractor distinct from deferred-batch cycling. Supports Pred 254-4 outcome (c) for goose. Falsifier: ≥1 in-window OPEN at goose by Add.110 close.
- **Pred 254-NEW (zero-merge ticks rate):** in any 8-tick rolling window within Add.109-Add.116, zero-merge ticks should occur at ≤2 per 8 ticks under deferred-batch model. Falsifier: ≥3 of next 8 ticks are zero-merge.
- **Pred 254-NEW2 (all-pause phase):** if all 6 repos avoid shallow class (<45m merge-silence) for 2 consecutive ticks (Add.109 + Add.110), the cross-repo merge-pause cycle has entered an "all-pause" phase distinct from steady-mixed-strata. Falsifier: any repo crosses to shallow within Add.110.

## Capture close

**03:20:00Z (2026-04-28).** Window width 39m honored; within ≤45m target. **Operational note**: ADDENDUM-109 captures the **first complete cross-repo zero-merge tick** in the corpus, the **fastest-resolving Pred GG (1 tick vs predicted 4)**, the **fastest-falsifying Pred FF (1 tick vs predicted 2)**, and the **on-schedule confirmation of Pred DD**. The combined signal supports synth #254's claim that **deferred-batch oscillation produces clustered-zero / clustered-merge tick distributions** rather than uniform per-tick merge rates. **Recommend Add.110 also target ≤45m window to maintain temporal resolution near the cross-repo zero-merge pivot point.** **The Add.110 outcome on Pred CC, Pred V, Pred A''''', and the new Pred 254-NEW/NEW2 will be jointly decisive for whether synth #254's fluid + deferred-batch model needs a clustered-zero-batch correction or holds as-is.**
