# ADDENDUM-346 — 2026-05-05

**Capture window**: 2026-05-05T06:25:00Z → 2026-05-05T07:15:00Z (**50m00s**, **forty-third-consecutive 50m exact-replication, QUADRAGESIMUM TERTIUS realized at first-attempt against P-345.A prior 0.04**). Width sequence Add.302–346 = 33h49m48s + 50m × 43; cum-BF lifts toward **×9.5e16+**. Persistent-attractor frame holds; basin-metronome regime now spans **35h50m of strict 50m-exact tick replication** without single-tick deviation.

**Capture-snapshot timestamp**: 2026-05-05T06:54:29Z UTC (per-carrier `gh api repos/<C>/pulls?state=all&sort=updated&direction=desc&per_page=20` with verified `headRefOid` via `gh pr view <num> --repo <C> --json headRefOid,state,createdAt,updatedAt,mergedAt,closedAt`).

**Rolling drip-context anchor**: drip-356 carrier coverage holds 4-of-7; pew-insights axis-184 Savage HEAD `a18e0b9` retained.

**Tick-time delta vs Add.345**: 50m00s exact. 43rd consecutive 50m-exact tick; integrated drift across Add.302–346 still 0s.

**Cross-repo predictions resolutions from Add.345**:

- **P-345.A (50m exact-replication continues to QUADRAGESIMUM TERTIUS, prior 0.04)**: **REALIZED** — 43rd consecutive 50m tick; cum-BF crosses ×9.5e16; **QUADRAGESIMUM TERTIUS milestone**.
- **P-345.B (morgmart goose extends past N=12 to DUODECET-class, prior 0.50)**: **NOT-REALIZED — full author-quiescence in this tick** — morgmart's last touch was #9014 update at 05:41:31Z (well before this capture window). Zero fresh-opens, zero head-changes on any of the 11 in-window legs. **Author-side regime transitions from rapid-burst to full-recess in single tick** — distinct from the gradual recovery-tail decay regime predicted by synth-674's three-regime extrapolation. The synth-674 P-345.B prior 0.50 (split between rapid-burst-continuation and recovery-tail-decay) FALSIFIED by **third regime: hard-stop**. See W17-synthesis-675.
- **P-345.C (morgmart DECET-net-OPEN sees first MERGE within 2 ticks, prior 0.55)**: **TICK-1 NOT-INSTANTIATED** — net-OPEN holds at N=10 across full 50m window. All 11 in-window legs still OPEN with original head SHAs unchanged.
- **P-345.D (abhinav-oai codex #21152 revert-deprecation MERGES within next tick, prior 0.60)**: **NOT-REALIZED — TICK-1 NO-MERGE, no head-change** — #21152 head still `503cba1f6a4acc3491fa7a17138ac0385780c066`, last-update 06:11:54Z (24m before this capture's snapshot). Semantic-escalation-resubmit hypothesis (synth-673 sub-mode) does NOT inherit fast-merge prior automatically; abhinav-oai's resubmit enters multi-tick OPEN-stall comparable to the morgmart UNDECET legs.
- **P-345.E (0:11-anchor recurs at 07:11Z within ±90s, prior 0.30)**: **DEFERRED — capture window ends at 07:15Z, but snapshot timestamp 06:54:29Z is pre-07:11Z; 07:09:30Z–07:12:30Z slot not yet observable in this tick's data**. Practical effect: **0:11-anchor primitive enters non-decidable-this-tick state**; defers to Add.347 capture for falsification or revival. Treat P-345.E as **CARRIED-FORWARD UNRESOLVED** rather than miss-counted.
- **P-345.F (Brendonovich opencode self-merge doublet extends to TRIPLET, prior 0.40)**: **NOT-REALIZED — Brendonovich quiescent post-doublet** — no fresh PRs from Brendonovich in window; #25822 + #25825 self-merge doublet (Add.345) treated as bounded sub-2-minute event without cascade. **Self-merge doublet does NOT auto-extend to triplet within 1 tick** — sub-2-minute doublet is a **closed micro-pattern** rather than a bursting-precursor.
- **P-345.G (gemini-cli-robot #26482/#26483 sibling-pair closes within next tick, prior 0.50)**: **NOT-REALIZED — TICK-5 SURVIVAL FLOOR EXTENDED** — both bot PRs hold OPEN; heads unchanged from Add.345 (`f9840e7efaa6` and `b95cadcc1407`); last-updates 03:08–03:22Z (now ~3h35m stale). Survival window extends past **5-tick floor** — synth-668 bot-meta-lifecycle persistence reinforced for fifth consecutive tick.
- **P-345.H (wenshao qwen-code declared PR-2 of 3 instantiates, prior 0.35)**: **NOT-REALIZED — TICK-3 STALL ON LABELED-SEQUENCE** — no PR with "PR-2 of 3" label opened by wenshao. However, **#3842 head changes** from Add.345's `6cbab376d7ab8f1ffc554f545c9ca955ae8d6610` to **`8e8e18ca7f44441fb20d74369f06c8a481212101`** at 06:47:21Z — silent force-push on PR-1 of 3 anchor (close-resubmit-recovery sub-mode-4: silent-force-push-consolidation per Add.345 LifetimeVip parallel). wenshao's labeled-sequence enters **3-tick declared-but-unadvanced stall** while substrate-active on the same anchor.
- **P-345.I (cross-carrier compound-quiescence reduces from 3 to ≤2, prior 0.65)**: **PARTIAL-REALIZED — compound-quiescence holds at 3 carriers but membership rotates** — quiescent set this tick = {block/goose, charmbracelet/crush, BerriAI/litellm} (litellm fresh-opens this tick = 0 within window; mateo-berri #27159 update-only at 06:31:33Z, no fresh-opens). gemini-cli **exits quiescence** via rushikeshsakharleofficial DOUBLET (#26489 + #26490, see below); goose **enters quiescence** (zero new morgmart legs). **Quiescent-set membership rotation without cardinality reduction** is a novel sub-pattern.
- **P-345.J (cross-carrier human velocity ≥7 fresh-opens, prior 0.55)**: **NOT-REALIZED — fresh-open count = 4** (rushikeshsakharleofficial #26489 + #26490 + Hona #25833 + counted-as-update-only abhinav-oai #21152 carry from prior). Strict fresh-open count this tick = **3 humans, 0 bots** — falls below P-345.J floor by 4. Plateau breaks downward; first sub-7 fresh-open tick in W17 sub-cycle since Add.339.

**New cross-carrier event this tick**:

- **rushikeshsakharleofficial gemini-cli SAME-AUTHOR DOUBLET on disjoint substrates** at 06:13:12Z (#26489 head `acfe282e48e9ab8f36d3374bb021a21c148411bb`, `perf(context): skip O(N) calculateTokenBreakdown when tracer is disabled`, OPEN) and 06:41:05Z (#26490 head `9a233d37eaca1330fc3c93611433b6e3c472878d`, `feat(mcp): auto-discover .mcp.json from project root`, OPEN). **Inter-submission gap = 27m53s**; substrates fully disjoint (perf-instrumentation vs mcp-discovery). Both authored at the gemini-cli external-contributor surface (not gemini-cli-robot bot lane). This is a **W17-clean instantiation of synth-671 substrate-saturation precondition at N=2** by an external (non-affiliated-bot) contributor — first such observation on gemini-cli carrier in W17 sub-cycle.

- **aibrahim-oai codex NUMBERED-PREFIX DECLARED-SEQUENCE merge-then-stall pattern** — #20969 (`1- Add model service tiers metadata`, head `b59bce8863401725d24ec054b2fb613dff6c8abe`, MERGED 06:51:19Z after 22h29m55s OPEN-lifespan) and #20971 (`2- Use string service tiers in session protocol`, head `fdfd9c4f3d71251616d4d91869e580b4b0fa2934`, OPEN, last-update 06:51:21Z — **2-second post-merge touch on dependent leg #2**). Pattern: **PR #1 in numbered-prefix sequence merges; PR #2 (dependent) gets immediate touch (likely auto-rebase or manual ping) but does NOT auto-merge**. This is a **declared-sequence variant** distinct from synth-670's wenshao "PR-N of M" labeled-sequence: the numeric-prefix `1-` / `2-` convention is structurally simpler but **has same multi-tick stall property** observed for wenshao's sequence (cf. P-345.H 3-tick stall). See W17-synthesis-676.

- **opencode and litellm OLD-PR REVIVAL TOUCH cluster** — sst/opencode #7239 (rekram1-node, MERGED 2026-01-07T23:25:01Z, age **~118 days**) updated at 06:50:41Z; BerriAI/litellm #25221 (mkkk997750, OPEN since 2026-04-06T12:23:05Z, age **~29 days**) updated at 06:39:48Z. **Cross-carrier ancient-PR re-touch within ~11-minute window** — #7239 is closed/merged so the touch is a comment/notification (no head-change verifiable from `pulls` API alone); #25221 is OPEN with head still `126f4e49161b05ab62148d66a70deadffb56beb2`. Treated as **environmental noise floor** rather than primitive — but flagged for recurrence-watch (synth-672 anchor-recurrence framework).

**Prediction outcome summary Add.345**: 1 realized (A); 1 partial-realized (I — membership rotates, cardinality holds); 1 deferred (E — pre-anchor snapshot); 7 not-realized (B, C, D, F, G, H, J). The **morgmart hard-stop falsification** (B) is the strongest calibration reversal — synth-674's three-regime cadence model under-specified the **regime-4: hard-stop** terminator. The **fresh-open plateau break** (J at 3 vs 7 floor) marks first sub-floor tick in W17 sub-cycle.

**Calibration this tick**: **Substrate-saturation single-author bursts are bounded by hard-stop regime** — synth-674's ~15-minute steady-state cadence does NOT extrapolate past the rapid-burst window; morgmart's 11-leg session terminates abruptly at #9014 (05:41Z) with zero further author-activity through 73 minutes of subsequent observation. **Numbered-prefix declared-sequence pattern (synth-676) joins synth-670 labeled-sequence as second declared-sequence-injection variant**, both exhibiting multi-tick stall on PR-2-of-N. **Silent force-push consolidation sub-mode generalizes across carriers** — observed on opencode (#25823 LifetimeVip Add.345) and now qwen-code (#3842 wenshao Add.346); promotes from carrier-specific to W17-portable close-resubmit-recovery sub-mode-4. **Bot-meta-lifecycle survival floor extends to 5 ticks** for gemini-cli-robot sibling-pair (synth-668 reinforcement). **Cross-carrier human-velocity floor breaks** at 3 fresh-opens — first sub-7 since Add.339; suggests basin-metronome's 50m-exact tick width regime decouples from human-submission-rate regime (independent attractors).

**gh capture note**: Full 7-carrier fetch within rate-budget (`gh api rate_limit` reports 4989+ remaining of 5000). Notable single-author phenomenon: **rushikeshsakharleofficial gemini-cli external-contributor DOUBLET** (first non-bot N=2 substrate-saturation precondition on gemini-cli in W17 sub-cycle). Notable cross-carrier finding: **numbered-prefix declared-sequence merge-then-stall** (aibrahim-oai #20969→#20971) parallel to wenshao "PR-N of M" labeled stall. Notable basin-anchor: **0:11-of-hour test deferred** (07:11Z lies past snapshot 06:54Z); resolution carries forward to Add.347.

---

## sst/opencode (carrier 1) — Hona fresh single-leg; old-PR #7239 revival touch

**Fresh-opens this tick (1 OPEN within window)**:
- sst/opencode #25833 head `94aa4538cccb172085dcced20826e0cba2821d76` (Hona — `fix(app): respect safe area in web shell`; createdAt 06:43:54Z, OPEN, last-update 06:48:00Z).

**Old-PR revival touch**:
- #7239 (rekram1-node, MERGED 2026-01-07T23:25:01Z, head `5730703d1124134526a17f930169ddf18d8bda10` unchanged) — `updated_at` jumps to 06:50:41Z, **~118 days post-merge re-touch**; comment-only or notification-only event (no head delta).

**Carry-forward OPEN**: #25825 carry-merged Add.345 (Brendonovich); #25823 (LifetimeVip i18n; head `210b6037dba5957ae1810b7e845f71d4b8f98934` unchanged from Add.345 silent force-push), #25800, #25821, #25818, #25810, #25805.

**Sub-section read**: opencode sees single-leg fresh-open by Hona at 06:43:54Z (web shell safe area, mobile-UI surface). #7239 ancient-PR touch is environmental noise floor; flagged for recurrence-watch. No fresh activity from Brendonovich post-doublet — P-345.F (triplet extension) NOT-INSTANTIATED. LifetimeVip #25823 silent-force-push state stable (no second force-push within 1 tick).

---

## openai/codex (carrier 2) — aibrahim-oai numbered-prefix sequence merge-then-stall; abhinav-oai #21152 stalls

**Fresh-opens this tick (0 within window)**.

**Merges this tick**:
- #20969 (aibrahim-oai — `1- Add model service tiers metadata`; MERGED 06:51:19Z; head `b59bce8863401725d24ec054b2fb613dff6c8abe`; OPEN-lifespan **22h29m55s** from createdAt 2026-05-04T08:21:24Z).

**Update-only on dependent leg**:
- #20971 (aibrahim-oai — `2- Use string service tiers in session protocol`; head `fdfd9c4f3d71251616d4d91869e580b4b0fa2934` unchanged; updated 06:51:21Z = **2 seconds after #20969 MERGE**; OPEN, no merge).

**Carry-forward OPEN no-change**: #21152 (abhinav-oai revert-deprecation, head `503cba1f6a4acc3491fa7a17138ac0385780c066` unchanged, P-345.D NOT-REALIZED), starr-openai SEXTET (#20530, #20647, #21048, #21101, #21142, #21143) all-OPEN through 5th consecutive tick, evawong-oai #20658, eternal-openai #20319 + #20724, xli-oai #21120, etraut-openai #21113, aibrahim-oai #21111, rhan-oai #21110, viyatb-oai #21127, xl-openai #21124, cconger #21146, cpaasch-oai #21107, efrazer-oai #21108 + #21109.

**Sub-section read**: codex carrier-internal velocity dominated by aibrahim-oai numbered-prefix declared-sequence event — #20969 (PR #1) merges after ~22h half-day OPEN-lifespan; #20971 (PR #2) gets touched within 2 seconds of #20969's merge but does NOT auto-merge. **Numbered-prefix sequence (`1- ... 2- ...`) joins wenshao "PR-N of M" labeled sequence as second observed declared-sequence convention** — both share the multi-tick stall-on-PR-2 property. abhinav-oai's #21152 semantic-escalation-resubmit (Add.345) enters its own multi-tick stall (P-345.D not-realized at tick-1). starr-openai SEXTET extends survival to 5 ticks.

---

## BerriAI/litellm (carrier 3) — fully quiescent on fresh-opens (2nd consecutive tick); mkkk997750 #25221 ancient-PR touch

**Fresh-opens this tick (0 within window — 2nd consecutive carrier-quiescence tick after Add.345)**.

**Old-PR revival touch**:
- #25221 (mkkk997750 — `Fixes three things in litellm/constants.py found during code review (New PR after squash)`; OPEN since 2026-04-06T12:23:05Z, age **~29 days**; head `126f4e49161b05ab62148d66a70deadffb56beb2` unchanged; updated 06:39:48Z — long-stale OPEN re-touch).

**Update-only**:
- #27159 (mateo-berri VCR cache; head `8cd2f92157c79ea25417d045a3720a387b688d2b` unchanged, updated 06:31:33Z).
- #26678 (cdxiaodong DeepSeek V4; updated 06:25:55Z).
- #26867 + #26868 (xr843 budget-coercion + drop_params; updated 06:05Z).

**Carry-forward OPEN**: krrish-berri-2 #27167, mateo-berri #27155 + #27161, yuneng-berri #27157, ishaan-berri #27154, krrish-berri-2 #27148 + #27150, harish-berri #27145 + #27146, Chesars #27147, Sameerlite #27106 + #27110, yassin-berriai #27001, app/oss-pr-review-agent-shin #27162, app/dependabot #27152.

**Sub-section read**: litellm extends carrier-quiescent state to 2nd consecutive tick (Add.345 + Add.346). mkkk997750 #25221 ancient-PR touch (29-day-stale OPEN) parallel to opencode #7239 ancient-merged-PR touch within ~11-minute window — flagged as cross-carrier coincidence in old-PR-revival cluster (environmental noise floor; recurrence-watch). yuneng-berri zero-activity this tick (no QUINTET-cascade follow-on after Add.343/344 burst).

---

## google-gemini/gemini-cli (carrier 4) — rushikeshsakharleofficial DOUBLET; bot sibling-pair extends to 5-tick survival

**Fresh-opens this tick (2 OPEN within window — same-author DOUBLET, disjoint substrates)**:
- gemini-cli #26489 head `acfe282e48e9ab8f36d3374bb021a21c148411bb` (rushikeshsakharleofficial — `perf(context): skip O(N) calculateTokenBreakdown when tracer is disabled`; createdAt 06:13:12Z, OPEN, last-update 06:23:30Z).
- gemini-cli #26490 head `9a233d37eaca1330fc3c93611433b6e3c472878d` (rushikeshsakharleofficial — `feat(mcp): auto-discover .mcp.json from project root`; createdAt 06:41:05Z, OPEN, last-update 06:53:07Z).

**Inter-submission gap**: 27m53s. **Substrates disjoint**: perf-instrumentation (calculateTokenBreakdown) vs MCP discovery — no source-file overlap by title-family analysis.

**Carry-forward OPEN**: #26345 (rushikeshsakharleofficial multi-agent orchestration, carry from Add.343-pre, last-update 06:07:28Z — same author), gemini-cli-robot #26483 + #26482 (sibling-identity bot pair, heads unchanged through 5th consecutive tick — synth-668 5-tick survival floor), dimssu #26487, SAY-5 #26484, aishaneeshah #26480, sripasg #26473, kimjune01 #24736, kaluchi #25900, itzzSPcoder #26432, gundermanc #26303, cocosheng-g #26467, Adib234 #26465.

**Sub-section read**: gemini-cli exits compound-quiescence via **rushikeshsakharleofficial DOUBLET** — first W17 single-author N=2 substrate-saturation-precondition instance on gemini-cli by an external (non-bot) contributor. rushikeshsakharleofficial author-cardinality across W17 = 3 distinct PRs (#26345 + #26489 + #26490) over ~3h54m window, with 27m53s mid-burst inter-submission gap and disjoint substrate selection. Compares against morgmart goose UNDECET as **lower-cardinality, lower-cadence-rate, but same disjoint-substrate-selection signature**. gemini-cli-robot sibling-pair extends survival past **5-tick floor** with zero head-changes — synth-668 bot-meta-lifecycle persistence reinforced.

---

## QwenLM/qwen-code (carrier 5) — wenshao #3842 silent force-push (PR-1 of 3 anchor); declared-sequence stall extends to 3 ticks

**Fresh-opens this tick (0 within window)**.

**Update with head-change (silent force-push)**:
- #3842 head **changes** `6cbab376d7ab8f1ffc554f545c9ca955ae8d6610` → **`8e8e18ca7f44441fb20d74369f06c8a481212101`** (wenshao — declared PR-1 of 3 ShellExecutionService signal.reason convention; updated 06:47:21Z; **silent force-push consolidation sub-mode-4 instance #2 in W17 sub-cycle** — first was opencode #25823 LifetimeVip at Add.345).

**Update-only no-head-change**:
- #3814 (B-A-M-N — auto-memory recall blocking; updated 06:52:28Z; head unchanged).
- #3844 (wenshao WebSearch tool, fresh from Add.345; updated 06:38:46Z; head `6107615eded1` unchanged).
- #3115 (wenshao commit attribution, ancient OPEN; updated 06:36:23Z).
- #3818 (cyphercodes MCP rediscovery; updated 06:16:51Z).
- #3598 (wenshao --json-schema; updated 06:10:50Z).
- #3836 (wenshao auto-memory dream tasks; updated 06:09:12Z).
- #3214 (scrollDynasty fdir→ripgrep; updated 06:08:40Z).

**Carry-forward OPEN**: doudouOUC #3832 + #3833 + #3835 (sdk-python QUINTET residue), tanzhenxin #3768, ihubanov #3840, B-A-M-N #3815 + #3819, shenyankm #3701, Jerry2003826 #3698, wenshao #3774.

**Sub-section read**: qwen-code carrier-internal velocity dominated by **wenshao silent force-push on declared PR-1 of 3 anchor #3842** — second W17 instance of close-resubmit-recovery sub-mode-4 (silent-force-push-consolidation), generalizing the pattern past opencode-only. Declared "PR-N of M" sequence enters **3-tick stall** with no PR-2 of 3 instantiation despite continued head-active substrate work on PR-1. P-345.H NOT-REALIZED. wenshao author-cardinality-OPEN remains high (#3115, #3598, #3774, #3836, #3842, #3844 = 6 OPEN simultaneously — distinct-substrate-disjoint mid-cardinality saturation).

---

## block/goose (carrier 6) — full author-quiescence; morgmart UNDECET frozen post-#9014

**Fresh-opens this tick (0 within window)**.

**Update-only**:
- #8911 (jamadeo goose2 distribution bundling; updated 06:03:35Z; head `e68c8026f346311b2a707db3d79d4c1d8d9b868a` unchanged).

**Carry-forward OPEN, all heads unchanged**: morgmart legs #9008, #9010, #9011, #9012, #9013, #9014, #9016, #9017, #9018, #9019 (DECET net-OPEN holds at N=10 with #9009-CLOSED + #9019-substitute); morgmart anchor #9004; monroewilliams #9015; enilsen16 #9002 + #8994 + #8998; alexhancock #8999; tellaho #8995; natelastname #8925; github-actions[bot] #9006.

**Sub-section read**: goose enters full author-quiescence — morgmart's last touch was #9014 update at 05:41:31Z (73 minutes before this snapshot). **Substrate-saturation rapid-burst regime terminates in hard-stop** rather than gradual recovery-tail decay. P-345.B NOT-REALIZED at tick-1; synth-674's 3-regime cadence model under-specified the regime-4 hard-stop terminator. P-345.C (DECET first MERGE within 2 ticks) NOT-INSTANTIATED at tick-1 — net-OPEN holds at N=10. See W17-synthesis-675.

---

## charmbracelet/crush (carrier 7) — quiescent through 5 consecutive ticks

**Fresh-opens this tick (0 within window)**.

**Carry-forward OPEN**: BrunoKrugel #2800 (MCP allow-list; head `3394b9fb8fd5317058b8abcea967cd7aa28f0ddc` unchanged across 5 ticks), BrunoKrugel #2778 (hook names; updated 02:56:43Z, last-tick), meowgorithm #2791 + #2788 + #2782, ilgax #2790, mkaaad #2786 + #2772, taoeffect #2785, somjik-api #2783, SAY-5 #2691, Gustave-241021 #2436, nghiant03 #2590, pragneshbagary #2773.

**Sub-section read**: crush extends carrier-quiescent state to **5th consecutive tick** (Add.342/343/344/345/346 = ~4h10m sustained zero-fresh-zero-merge). Compound-quiescence cluster this tick = {block/goose, charmbracelet/crush, BerriAI/litellm} = **3 of 7 carriers fully quiescent** — same cardinality as Add.345 but with **membership rotation** (gemini-cli exits via rushikeshsakharleofficial DOUBLET; goose enters via morgmart hard-stop). P-345.I PARTIAL-REALIZED.

---

## Cross-repo predictions for next tick (Add.347)

- **P-346.A**: 50m exact-replication continues to QUADRAGESIMUM QUARTUS (44th consecutive). Prior 0.04.
- **P-346.B**: morgmart goose hard-stop persists ≥2 more ticks (no fresh morgmart leg in Add.347). Prior 0.55 (regime-4 newly recognized; prior reflects bias toward continued recess after sharp termination).
- **P-346.C**: aibrahim-oai codex #20971 (`2- Use string service tiers`) MERGES within next tick (numbered-prefix sequence post-PR-1-merge typical-merge-window). Prior 0.55.
- **P-346.D**: rushikeshsakharleofficial gemini-cli extends DOUBLET to TRIPLET (≥1 fresh substrate-disjoint leg) within next tick. Prior 0.40 (parallel to morgmart's anchor-prelude→rapid-burst transition; lower prior reflects inter-burst-uncertainty for first-W17-instance authors).
- **P-346.E**: 0:11-of-hour merge-anchor recurs at 07:11Z within ±90s (carried-forward from P-345.E unresolved). Prior 0.30.
- **P-346.F**: wenshao qwen-code #3842 second silent-force-push within next 2 ticks (silent-force-push sub-mode shows iteration-prone signature). Prior 0.35.
- **P-346.G**: gemini-cli-robot #26482/#26483 sibling-pair survives 6th consecutive tick (synth-668 bot-meta-lifecycle persistence). Prior 0.55 (raised from 0.50 after each successful tick-survival).
- **P-346.H**: cross-carrier human velocity recovers to ≥6 fresh-opens (regression toward mean from sub-floor 3). Prior 0.60.
- **P-346.I**: ancient-PR-revival cluster (opencode #7239 + litellm #25221) does NOT recur within next tick — environmental noise floor reverts. Prior 0.70.
- **P-346.J**: compound-quiescence cardinality reduces from 3 to ≤2 within next tick (Poisson-arrival regression toward mean — second test of P-345.I after partial-realization). Prior 0.55.
