# ADDENDUM-372 — 2026-05-06 (W18 day-1, tick+4 from Add.368)

**Capture window**: 2026-05-06T02:26:32Z (Add.371 close, codex #21290 open) → 2026-05-06T02:52:18Z (capture). **Tick width: ~25m46s.** Sequence Add.358→372 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, 41, **26**. 26m is the **shortest tick in the 15-tick series** and undershoots the Add.371 lower-shoulder mode (37–41m) by ~11m. Updated 15-tick distribution mean ~45m, but the lower-shoulder population now bifurcates: 4 ticks at 37–41m + 1 outlier at 26m. Either Add.372 is a **sampling-induced short tick** (capture trigger fired earlier than usual) or W18-day-1 is genuinely transitioning into a higher-frequency regime as US/PT maintainer pools thin out post-02:00Z. Both interpretations remain viable until tick+5.

---

## NEW OBSERVATION 1 — "P-371.NO1 prediction (pakrym n=8 ceiling + ≥1 OPEN merge) FALSIFIED on both clauses: pakrym opens ZERO new PRs in 26m, AND zero of the 5 OPEN cleanup members merge"

**Signature**: Add.371 closed with pakrym-oai cluster at n=7 (5 OPEN: #21278, #21281, #21284, #21287, #21290; 2 MERGED: #21276, #21282). Add.372 observation:

| PR | state @ Add.371 | state @ Add.372 | Δ |
|---|---|---|---|
| #21276 | MERGED 01:57:34Z | MERGED | unchanged |
| #21278 | OPEN | OPEN | unchanged (last update 01:57:39Z, no fresh push) |
| #21281 | OPEN | OPEN | unchanged (last 02:09:45Z) |
| #21282 | MERGED 01:58:28Z | MERGED | unchanged |
| #21284 | OPEN | OPEN | unchanged (last 01:56:04Z) |
| #21287 | OPEN | OPEN | unchanged (last 02:10:08Z) |
| #21290 | OPEN | OPEN | unchanged (last 02:21:09Z) |

**No new pakrym PR. No member merge.** Cluster is **frozen at n=7** with the exact 2:5 merged:open ratio Add.371 captured. This is the **first tick where pakrym is fully silent during an active in-flight cluster** — the maintainer-end-of-day envelope (Add.370 NO 8) finally bites on codex/pakrym after 6 ticks of sustained activity. Predicted decay (Add.370 P-NO1) and predicted growth (Add.371 P-NO1) **both wrong by direction** — actual is **freeze**, a third regime not in either prediction.

**Sub-class**: M_multi_themed_frozen — a multi-themed cascade enters a **post-burst quiescent state** where the author stops opening new members AND stops merging existing members. Distinct from M_multi_themed_decaying (Add.370 prediction: gradual member exhaustion via merges) and M_multi_themed_growing (Add.371 reality: continued opens). Freeze likely indicates author EOD with 5 PRs left for next-day review by sibling maintainers.

Predict at Add.373: at least 2 of the 5 OPEN pakrym cleanups receive **first sibling-maintainer review comment** (bolinfest or canvrno-oai most likely reviewers given prior co-authorship density), but **no merges** unless pakrym themselves return online; pakrym opens zero new cleanup PRs.

---

## NEW OBSERVATION 2 — "P-371.NO2 K-cluster prediction CONFIRMED with extreme amplification: ishaan-berri opens 3 fresh K-members (#27271, #27272, #27273) in 28m45s, K-cluster reaches n=12 with reciprocal Z′ theme transfer becoming the cluster's primary substrate"

**Signature**: Add.371 closed with K-cluster at n=11 (counting cross-author Prometheus PRs since 20:26:04Z by ishaan-berri + bot oss-agent-shin + Michael-RZ-Berri). Add.372 adds:

| PR | author | createdAt | state | title fragment |
|---|---|---|---|---|
| #27271 | ishaan-berri | 02:04:30Z | OPEN | `Fix Prometheus custom metadata label counts (#27268)` ← cites bot |
| #27272 | ishaan-berri | 02:21:06Z | OPEN | `Cap Prometheus end-user metric cardinality` |
| #27273 | ishaan-berri | 02:33:15Z | OPEN | `Fix team member budget enforcement without user row` ← non-Prometheus |

Plus **#27268 MERGED at 02:04:22Z** (the bot's Prometheus fix), making it the **2nd Z′_bot_themed_landed event** (Add.371 NO 3 predicted "bot #27265 merges → Z′_bot_themed_landed n=2", off by PR-number — landed PR was the same #27268 from Add.371, not #27265 as predicted; **confirmation by member, falsification by specific PR**).

**Cluster cardinality update**: K-cluster now counts ≥12 distinct PRs across the 6h window (since #27226 at 20:26:04Z): #27226, #27229, #27230, #27231, #27232, #27233, #27235, #27236, #27242, #27246, #27248, #27260, #27265, #27268, #27270, #27271, #27272 — **17 if every Prometheus-titled PR counts**, ≥12 if restricted to ishaan-berri or bot-shin authorship. Either count makes K the **largest single-themed cross-author cluster of the W18-day-1 sequence**.

**Reciprocal theme-transfer signal**: ishaan-berri's #27271 explicitly cites the bot's #27268 in its title — **second occurrence of human-cites-bot** (first was Add.371 NO 2). The pattern is now **bidirectional and recurring**: bot lands, human cites bot, human extends bot's surface. The Z′_bot_themed sub-class (synth-714, synth-716) has matured into a **K_with_Z′_anchor** structural pattern where bot-authored PRs serve as **review-anchor checkpoints** that humans then thread their own follow-ups through.

**Cardinality-cap divergence**: #27272 (`Cap Prometheus end-user metric cardinality`) is **distinct from the K-stem theme** — prior K-members all touched `_for_model` or `_for_key` rate-limit gauges; #27272 touches `end_user` metric labels, a separate Prometheus surface. Suggests ishaan-berri is now **broadening from rate-limit telemetry to label-cardinality telemetry**, expanding K's surface coverage. #27273 is fully off-Prometheus (team-budget enforcement) — **first non-K PR in ishaan-berri's 5h+ session**, the predicted cluster-termination signal (analog of Add.371 NO 1 prediction for pakrym).

Predict at Add.373: K-cluster either **closes via #27272 merge** (own fix, fast self-merge under 30m), OR **stalls** if ishaan-berri also goes EOD; #27273 (team-budget) is the cluster-exit and ishaan-berri opens 0–1 more K-members before pause.

---

## NEW OBSERVATION 3 — "Z′_bot_themed_landed n=2 confirmed but with new contamination: bot #27267 was CLOSED (not merged), bot #27265 still OPEN, bot #27270 fresh open at 01:45:10Z — bot's K-themed throughput is 1-merge / 4-open / 2-closed, the 'maintainer accepts bot' rate is ~14%"

**Signature**: Tracking oss-agent-shin's K-themed PRs across the full window:

| PR | created | state @ Add.372 | outcome |
|---|---|---|---|
| #27251 | 00:13:04Z | CLOSED | rejected |
| #27252 | 00:21:36Z | OPEN | pending |
| #27253 | 00:27:02Z | CLOSED | rejected |
| #27255 | 00:43:31Z | CLOSED | rejected |
| #27258 | 00:55:25Z | OPEN | pending |
| #27259 | 00:58:47Z | OPEN | pending |
| #27261 | 01:10:59Z | CLOSED | rejected |
| #27265 | 01:23:48Z | OPEN | pending |
| #27267 | 01:26:08Z | CLOSED | rejected |
| #27268 | 01:29:38Z | **MERGED** | accepted ✓ |
| #27270 | 01:45:10Z | OPEN | pending |

**Throughput accounting**: 11 bot PRs in ~92 min, 1 merged (9.1%), 5 closed (45.5%), 5 open (45.5%). The **merge-acceptance rate is 9.1%** — far below the ~80–90% rate for human maintainer self-merges in the same window. This is the **first quantified asymmetry between bot-Z′ and human-K acceptance** and validates synth-714's framing of Z′_bot as **iterative draft generation** that humans (here ishaan-berri) **selectively absorb**.

**Sub-class refinement**: Z′_bot_themed_iterative_funnel — bot opens N≈10 candidate fixes; human reviewer CLOSES ~50% as redundant/wrong, leaves ~40% pending for later, and ACCEPTS ~10% as the canonical fix that gets merged. The accepted member then becomes a **review-anchor** that the human cites in their own follow-up PRs (NO 2 reciprocal pattern). Funnel ratio 1:5:5 (merge:close:pending).

Predict at Add.373: of the 5 pending bot K-PRs, ≥2 close (continuing 50% rejection rate); 0–1 merge; bot opens 0–2 more if oss-agent-shin's iteration cycle is still active, else session ends.

---

## NEW OBSERVATION 4 — "VANDRANKI external-contributor 3-PR burst (Add.371 NO 7 K_external) freezes: zero new VANDRANKI PRs in 26m, all 3 (#27263, #27266, #27269) remain OPEN with zero review activity — first-tick freeze pattern for new external contributor"

**Signature**: Add.371 NO 7 captured K_external with VANDRANKI at n=3 (#27263, #27266, #27269 across snowflake/responses surfaces). At Add.372:

| PR | state @ Add.371 | state @ Add.372 | last update |
|---|---|---|---|
| #27263 | OPEN | OPEN | 01:24:24Z (stale) |
| #27266 | OPEN | OPEN | 01:31:12Z (stale) |
| #27269 | OPEN | OPEN | 01:42:39Z (stale) |

**No fresh push, no review comment, no maintainer assignment.** The 3-PR burst is a **drive-by external-contributor batch** that lands during peak maintainer activity but doesn't catch a reviewer's attention — even as ishaan-berri (the natural reviewer for `responses` surface) is opening 3 of their own K-members concurrently. This is the **counter-pattern to NO 2/NO 3**: bots' iterative drafts get partially absorbed by humans because they target the human's active substrate; an external human's 3-PR burst on adjacent-but-distinct substrate gets ignored because the maintainer's attention is locked onto the K-cluster.

**Sub-class**: J′_external_eclipsed — a stale-J burst by an external contributor opens during a same-substrate K-cluster led by a maintainer; the K-cluster's gravity well **eclipses** the external burst, leaving it pending without close or merge. Distinct from generic J′ (review-rejected): eclipsed PRs receive **zero review action**, not negative review action.

Predict at Add.373: VANDRANKI's 3 PRs remain frozen for a 2nd consecutive tick; first review activity (if any) waits for ishaan-berri's K-cluster to close (NO 2 prediction) and frees reviewer bandwidth.

---

## NEW OBSERVATION 5 — "Cross-carrier carrier-bipolar profile (Add.371 NO 10) ROTATES as predicted: codex demotes from DOMINANT-MERGE to OPENS-ONLY, litellm stays DOMINANT-MIXED, anomalyco/opencode promotes from OPENS-ONLY to OPENS-ONLY-FRESH (2 fresh opens in 6m), gemini-cli stays OPENS-ONLY, qwen+crush+goose stay TICK-DARK"

**Signature**: Per-carrier tick-372 activity:

| carrier | in-tick merges | in-tick opens | M:O | band @ Add.372 | band @ Add.371 |
|---|---|---|---|---|---|
| codex | 0 | 0 fresh (only carryover-update) | n/a | TICK-DARK→demoted | DOMINANT-MERGE |
| litellm | 1 (#27268) | 3 fresh (#27271, #27272, #27273) + #27270 carryover | 0.25 | DOMINANT-MIXED | DOMINANT-MIXED |
| anomalyco/opencode | 0 (#25939 merged 00:09:32Z, just before tick) | 2 fresh (#25955, #25957) | 0 | OPENS-ONLY-FRESH | OPENS-ONLY |
| gemini-cli | 0 | 1 fresh (#26560 at 01:56:42Z, edge of tick) | 0 | OPENS-ONLY | OPENS-ONLY |
| qwen-code | 0 | 2 (#3859 CLOSED, #3860 OPEN — same author chiga0, 1m51s apart) | 0 | OPENS-ONLY-Z″ | TICK-DARK |
| crush | 0 | 0 | n/a | TICK-DARK | TICK-DARK |
| goose | 0 | 0 | n/a | TICK-DARK | TICK-DARK |

**Three changes**: (a) codex demotes 2 bands (DOMINANT-MERGE → TICK-DARK) — sharpest single-tick demotion in the 15-tick sequence; (b) qwen-code promotes from TICK-DARK to OPENS-ONLY via a Z″ self-supersession event (chiga0 closes #3859 and reopens content as #3860 1m51s later, signature of `git rebase --autosquash` or branch-swap); (c) litellm and gemini-cli hold their bands. **Add.371 prediction "litellm becomes dominant carrier; codex demotes" CONFIRMED** — litellm is now the sole DOMINANT carrier.

**Sub-class**: tick-bipolar-profile-rotation — when the dominant-merge carrier completes its end-of-day burst, the dominant-mixed carrier (one tick earlier in its session phase) becomes the sole DOMINANT carrier in the next tick. Carrier-rotation cycle estimated at 1–2 ticks during W18-day-1 close.

Predict at Add.373: litellm demotes if ishaan-berri goes EOD (NO 2 termination); anomalyco/opencode promotes to DOMINANT-MIXED if the 2 fresh opens (#25955, #25957) pull a maintainer into review; carrier-bipolar profile rotates again with anomalyco taking codex's prior slot.

---

## NEW OBSERVATION 6 — "qwen-code Z″ self-supersession at sub-2-minute interval: chiga0 #3859 CLOSED at 02:39:31Z, #3860 OPEN at 02:40:27Z, both titled `chore(deps): upgrade ink 6.2.3 → 7.0.2 + bump Node engine to 22` — same author replaces own PR with identical title in 56 seconds"

**Signature**: chiga0 opens #3859 at 02:38:36Z, closes it at 02:39:31Z (lifespan 55s, no merge), then opens #3860 at 02:40:27Z with the **identical title**. 56s gap between close and re-open. No merge, no review action on either.

**Distinction from prior Z″** (synth-715, qwen-code B-A-M-N #3819 superseded by cyphercodes #3818): that case was **cross-author substrate collision**; this is **intra-author rapid re-open** — the author themselves closes and re-opens, suggesting a **branch reset / force-push reorganization** (drop a wrong base, push to clean branch, reopen). Lifespan of #3859 (55s) is the **shortest closed-PR lifespan** seen in the W18-day-1 sequence so far.

**Sub-class**: Z″_self_supersession — same author closes own PR within 60s of open and immediately re-opens equivalent content. Indicator of **first-attempt PR-base mistake** (e.g., opened against wrong fork or branch). Distinct from Z″_substrate_collision (cross-author).

Predict at Add.373: #3860 either merges in <1h (clean re-attempt with maintainer ready to review the dep-bump) or stays OPEN as #3859 did with same dependency-CI failure pattern. Most likely outcome is **CI-block** since `ink 6.2.3 → 7.0.2 + Node engine 22` is a coupled major-bump that historically triggers downstream test breakage in this carrier.

---

## NEW OBSERVATION 7 — "Substrate-anchor convergence: 2 fresh anomalyco/opencode PRs (#25955 Waridley, #25957 jvanzyl) both touch git/config-related non-overlapping surfaces within 5m53s of each other and 5–6m before tick close — first synchronized fresh-pair on a TICK-DARK carrier reawakening"

**Signature**:

| PR | author | createdAt | title |
|---|---|---|---|
| #25955 | Waridley | 02:41:57Z | `fix: find GitHub remote from any remote, not just origin` |
| #25957 | jvanzyl | 02:47:50Z | `fix(config): isolate custom config dir` |

5m53s gap. Two **distinct external authors**, **distinct surfaces** (git remote enumeration vs. config dir isolation), both **fix-class non-trivial** (not typo PRs), both opened during the **carrier's quietest window** (no merges in this carrier for the past 2.5h since #25939 at 00:09:32Z).

**Pattern**: when a carrier transitions from OPENS-ONLY-low-velocity to OPENS-ONLY-FRESH, the fresh PRs tend to **cluster in the last 5–10m of the tick window** — possibly because contributors' local time corresponds to their EOD-coding-then-PR sweep. For anomalyco/opencode the cluster is at 02:41–02:48Z, suggesting a **EU-evening contributor band** (UTC+0 to +3 = ~03:00–06:00 local, late-night).

**Sub-class**: fresh-pair-end-of-tick — two distinct-author non-trivial fix PRs opened within <10m, both in the last quintile of a tick, on a previously DARK or low-velocity carrier. Distinct from same-author bursts (which cluster in the first half) and bot bursts (which cluster mid-tick).

Predict at Add.373: at least one of #25955 / #25957 receives a maintainer-review touch (Hona / jlongster / similar are the active maintainer cohort on this carrier in the recent 6h window); zero in-tick merge given the carrier's reviewer cadence.

---

## NEW OBSERVATION 8 — "wiltzius J′-triplet (#21264, #21265, #21266) extends frozen-state to 4th consecutive tick — Add.367, 368, 369, 370, 371, 372 all show zero new pushes, zero review activity, zero close — predicted-rebase falsification compounds"

**Signature**: wiltzius-openai #21264 (`Move thread name edits to ThreadStore`), #21265 (`Route ThreadManager rollout path reads through thread store`), #21266 (`[codex] Fix pathless thread summaries`) all opened 23:03:59Z–23:10:21Z on 2026-05-05. State across ticks:

| tick | state |
|---|---|
| Add.367 (open tick) | 3 OPEN |
| Add.368 | 3 OPEN, last activity 23:25–23:34Z |
| Add.369 | 3 OPEN, no fresh push |
| Add.370 | 3 OPEN, no fresh push |
| Add.371 | 3 OPEN, no fresh push |
| Add.372 | 3 OPEN, last activity #21264 at 02:40:58Z (this tick — first signal of life) |

**Update at Add.372**: #21264 receives an updatedAt of 02:40:58Z — **first wiltzius-PR activity in 5 consecutive ticks of freeze**. The other two (#21265, #21266) remain at 23:25–23:29Z timestamps (still frozen). Possible interpretations: (a) a CI-rerun touch on #21264 that bumps updatedAt without a real push (most likely given the ~3.4h gap); (b) wiltzius returns and pushes to #21264 only, signaling intent to close out the triplet sequentially; (c) external review comment.

**Sub-class refinement**: J′_partially_thawing — a previously fully-frozen triplet shows **first-member-only** updatedAt change after multi-tick freeze. Different from full thaw (all 3 update) and full freeze (all 3 silent). Indicates **author returns and prioritizes one member** rather than the canonical "rebase all 3" thaw.

Predict at Add.373: if (a), all 3 stay OPEN with #21264's CI-touch reverting to silence; if (b), #21264 merges within 1h and #21265/#21266 follow; if (c), a maintainer-review string lands on #21264 by Add.373. Most likely is (a) given wiltzius's silence pattern and the absence of any commit-SHA drift signal.

---

## NEW OBSERVATION 9 — "alexandrevarga gemini-cli A-class steady-stream extends to 3rd PR: #26536 (20:32:24Z, ripgrep fallback), #26559 (01:53:03Z, OIDC auth), now stable at 2 OPEN with #26559 receiving 3 fresh updates between Add.371 and Add.372 — first triplet-candidate on gemini-cli within W18-day-1"

**Signature**: alexandrevarga PRs in window: #26536 OPEN (last update 01:24:36Z, in Add.371), #26559 OPEN (last update 02:48:22Z, in Add.372). The Add.371 NO 9 prediction was "alexandrevarga 3rd PR or doublet termination"; observed at Add.372: **doublet maintained**, 3rd PR not yet opened, but #26559 receives **fresh push activity within Add.372 tick** (updatedAt advances from 01:53:03Z create → 02:48:22Z).

**Cross-carrier note**: alexandrevarga's two open PRs are on **disjoint substrates** (`core` ripgrep vs `core` OIDC auth — same package directory but unrelated subsystems). Pattern is **A-class steady-stream-disjoint** (low velocity, distinct surfaces, single author), distinct from M_multi_themed (high velocity, same theme, single author, codex/pakrym pattern) and K (high velocity, same theme, multi-author, litellm/Prometheus pattern).

**Sub-class**: A_disjoint_doublet_active — single author maintains 2 OPEN PRs on disjoint surfaces with one receiving fresh pushes in current tick. The "active" qualifier distinguishes from frozen-doublet (J′-pattern). Likely indicates author is iterating on one PR while waiting for review on the other.

Predict at Add.373: alexandrevarga opens 0–1 new PR; if 1, it touches a 3rd disjoint surface (transitions A_disjoint_doublet_active → A_disjoint_triplet_active, the gemini-cli analog of pakrym's M_multi_themed); if 0, doublet persists and #26559 most likely merges first (newer, getting active iteration).

---

## NEW OBSERVATION 10 — "Litellm same-second open: #27262 (mateo-berri) at 01:17:34Z and #27263 (VANDRANKI) at 01:17:46Z — 12-second open-gap on same carrier between two distinct authors on disjoint substrates (anthropic_messages vs snowflake) — sub-class S_cross_author_subsecond inverted into S_cross_author_subminute"

**Signature**: 12s open-gap, distinct authors, distinct surfaces. Not a same-second event but a **near-simultaneous cross-author cross-substrate event** on litellm. 

Per W17-synth-92 (same-second four-pr open tuplet single-author), **same-author same-second tuplets** were the canonical signature. This is the **opposite signature**: cross-author (mateo-berri vs VANDRANKI), cross-substrate (anthropic_messages vs snowflake), sub-minute open gap. Suggests **litellm's PR-form bot or webhook** processes incoming PRs in batches, with arrival jitter <15s.

**Sub-class**: S_cross_author_submin — distinct authors open distinct-substrate PRs within 60s on the same carrier. Distinct from S_same_author_subsec (W17-synth-92 quadruple-by-one-author) and Z′_bot_iter (synth-714, single-bot-iteration). Indicates **carrier-level webhook batching** rather than coordinated human action.

Predict at Add.373: at least one more S_cross_author_submin event on litellm given ishaan-berri's K-cluster pace (NO 2) and VANDRANKI's stale presence (NO 4); pattern is structural to high-velocity multi-contributor carriers, not anomalous.

---

## SUMMARY (Add.372)

- **Tick width 26m** — shortest in the 15-tick series, possibly sampling-induced or genuine regime shift to higher-frequency ticks
- **PRs cited (unique)**: 7 carriers, ~75 unique PR numbers across the window and cross-tick references
  - codex: #21260, #21261, #21271, #21275, #21276, #21277, #21278, #21281, #21282, #21284, #21285, #21287, #21290, #21264, #21265, #21266 (~16)
  - litellm: #27226, #27229, #27230, #27231, #27232, #27233, #27235, #27236, #27240, #27242, #27246, #27247, #27248, #27251, #27252, #27253, #27255, #27256, #27258, #27259, #27260, #27261, #27263, #27265, #27266, #27267, #27268, #27269, #27270, #27271, #27272, #27273 (~32)
  - anomalyco/opencode: #25934, #25937, #25939, #25941, #25942, #25944, #25955, #25957 (~8)
  - gemini-cli: #26504, #26506, #26507, #26519, #26527, #26534, #26536, #26542, #26544, #26545, #26553, #26555, #26559, #26560 (~14)
  - qwen-code: #3814, #3815, #3818, #3819, #3852, #3859, #3860 (~7)
  - crush: 0 (TICK-DARK)
  - goose: 0 (TICK-DARK)
- **Confirmations**: P-371.NO2 K-cluster extension (#27271, #27272, #27273); P-371.NO3 Z′_bot_themed n=2 (#27268 merged, by member not by predicted PR); P-371.NO9 alexandrevarga doublet maintained; P-371.NO10 carrier-bipolar rotation (codex demotes, litellm dominates)
- **Falsifications**: P-371.NO1 pakrym n=8 ceiling + ≥1 OPEN merge (cluster freezes at n=7, zero merges); P-371.NO5 #21285 hot-fix (still OPEN >70m); P-371.NO7 VANDRANKI receives review (frozen 2nd tick)
- **New sub-classes**: M_multi_themed_frozen (NO 1); K_with_Z′_anchor (NO 2); Z′_bot_themed_iterative_funnel (NO 3, 9.1% accept rate); J′_external_eclipsed (NO 4); tick-bipolar-profile-rotation (NO 5); Z″_self_supersession (NO 6, 56s); fresh-pair-end-of-tick (NO 7); J′_partially_thawing (NO 8); A_disjoint_doublet_active (NO 9); S_cross_author_submin (NO 10)
- **Predicts for Add.373**: pakrym sibling-review touches 2+ OPEN, zero merges (NO 1); ishaan-berri K-cluster terminates via #27272 self-merge or stalls (NO 2); bot K throughput continues 1:5:5 funnel (NO 3); VANDRANKI 2nd-tick freeze (NO 4); anomalyco/opencode promotes to DOMINANT-MIXED (NO 5); qwen-code #3860 CI-blocks or merges <1h (NO 6); anomalyco maintainer touches #25955 or #25957 (NO 7); wiltzius #21264 most likely (a) CI-only no real change (NO 8); alexandrevarga 0–1 new PR (NO 9); ≥1 more S_cross_author_submin on litellm (NO 10)
