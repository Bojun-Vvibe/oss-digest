# ADDENDUM-371 — 2026-05-06 (W18 day-1, tick+3 from Add.368)

**Capture window**: 2026-05-06T01:45:47Z (Add.370 close, codex #21285 open) → 2026-05-06T02:26:32Z (codex #21290 open). **Tick width: ~40m45s.** Sequence Add.358→371 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, **41**. The Add.370 "unimodal ~50–60m centroid CONFIRMED" hypothesis **partly weakens at tick+1**: 41m undershoots the centroid by ~6m and lands closer to the Add.367 39m + Add.366 37m run. Updated 14-tick distribution mean ~47m, but the lower-shoulder (37–41m) population grows to 4/14, suggesting an emerging **second mode at ~38–41m**, distinct from the dominant 50–55m centroid.

---

## NEW OBSERVATION 1 — "P-370.NO1 prediction of pakrym-cascade-decay (≤1 more PR) FALSIFIED hard: cluster extends from n=5 to n=7 with 2 of 5 prior members MERGING in-tick"

**Signature**: Add.370 predicted pakrym-oai cascade decay to ≤1 additional PR. Observed at Add.371:

| PR | author | createdAt | state @ Add.371 | substrate |
|---|---|---|---|---|
| #21276 | pakrym-oai | 00:21:51Z | **MERGED 01:57:34Z** | `[codex] Remove unused ListModels op` |
| #21278 | pakrym-oai | 00:31:04Z | OPEN | `Move message history out of core` |
| #21281 | pakrym-oai | 01:12:40Z | OPEN | `Remove core MCP list tools op` |
| #21282 | pakrym-oai | 01:19:03Z | **MERGED 01:58:28Z** | `[codex] Remove legacy ListSkills op` |
| #21284 | pakrym-oai | 01:36:11Z | OPEN | `[codex] Add response.processed websocket request` |
| **#21287** | **pakrym-oai** | **02:10:08Z** | **OPEN** | **`Move skills watcher to app-server`** |
| **#21290** | **pakrym-oai** | **02:21:09Z** | **OPEN** | **`Move file watcher out of core`** |

**M_multi_themed cardinality: n=7 (from foundation merge #21260 at 00:16:06Z) over 125 minutes**. Add.370's "80m sustained burst at exhaustion" was wrong by direction — the cascade is **accelerating into mid-tick**: gaps between #21281→#21282→#21284→#21287→#21290 are 6m23s, 17m08s, 34m, 11m01s. **Pakrym is also self-merging in-cascade**: #21276 (1h35m post-open) and #21282 (39m25s post-open) — both reasonably fast for a maintainer, but **opening a 6th and 7th PR while two prior members are still pending** is a strong M_multi_themed signal that this isn't decay; it's a multi-day project being staged through serial PRs.

**Substrate analysis update**: 5 of 7 are now "Remove/Move … out of core" cleanup PRs (#21276 ✓, #21278, #21281, #21287, #21290), 1 is the divergent feature member (#21284), 1 is a Remove/legacy (#21282). The cleanup theme **strengthens** rather than diverges — Add.370's "transitions from cleanup to feature at 80m mark" was premature; #21284 was a single sortie back into cleanup mode.

Predict at Add.372: pakrym opens **at most** one more "Move X out of core" PR (n=8 ceiling) AND at least one of the 5 OPEN cleanup members merges in-tick. Cluster termination signal will be a **non-`Move/Remove` title PR** from pakrym.

---

## NEW OBSERVATION 2 — "P-370.NO4 ishaan-berri K-cluster prediction CONFIRMED with extreme amplification: K-cluster extends from n=9 to n=11 in <1h17m, AND ishaan-berri publicly absorbs the bot's #27268 substrate"

**Signature**: Add.370 predicted ishaan-berri opens K-member 10 within 30 minutes. Observed:

| PR | author | createdAt | title | state |
|---|---|---|---|---|
| #27260 | ishaan-berri | 01:09:21Z | `Fix Prometheus model-per-key rate limit gauges` | OPEN |
| **#27271** | **ishaan-berri** | **02:21:34Z** | **`Fix Prometheus custom metadata label counts (#27268)`** | **OPEN** |
| **#27272** | **ishaan-berri** | **02:21:12Z** | **`Cap Prometheus end-user metric cardinality`** | **OPEN** |

K-cluster cardinality **n=11**, envelope 20:26:04Z → 02:21:34Z = **5h55m**. Member 10 (#27272) and member 11 (#27271) opened **22 seconds apart** — same-second-class doublet by ishaan-berri after a 1h12m silence. Add.370 prediction of "K-member 10 within 30 minutes" was timing-off by 42 minutes (slow side) but correct in directional fact.

**Substantive new signal — bot→human reverse theme transfer**: #27271's title is **literally `Fix Prometheus custom metadata label counts (#27268)`** — ishaan-berri is filing a follow-on/replacement to the bot's #27268 (which **MERGED at 02:04:23Z** between ticks). This is the **first reverse theme transfer**: Add.370 NO 3 documented bot oss-agent-shin shadowing ishaan-berri's K-cluster theme. Now ishaan-berri is **picking up where the bot left off** — citing the bot's PR number in a maintainer follow-up. The K-cluster and Z′_bot_themed cluster are now **reciprocally interleaved**, not just one-way shadow.

**Falsification of Add.370 NO 4 prediction subclause**: prefix-style framing ("`Fix Prometheus`" capitalized) holds for #27272 (`Cap Prometheus...`) — variant prefix `Cap` not `Fix`. Sub-cluster B framing softens: ishaan-berri uses 3 distinct prefix verbs across K9–K11 (`Fix`, `Cap`, `Fix`), suggesting the prefix-style sub-classification is **noise, not signal**.

**Predict at Add.372**: K-cluster reaches n≥12 within 60m; oss-agent-shin opens a Prometheus-themed PR within 15m of #27271 close (whether merge or close-no-merge); reciprocal interleaving continues for ≥2 more cycles before either party drops the theme.

---

## NEW OBSERVATION 3 — "P-370.NO3 Z′_bot_themed FIRST-MERGE event: oss-agent-shin's #27268 MERGED at 02:04:23Z — bot Z′_bot_themed cluster crosses from speculative-iteration to landed-contribution mode"

**Signature**: Add.370 cataloged oss-agent-shin Prometheus quadruplet (#27261, #27265, #27267, #27268) all OPEN or CLOSED-no-merge. At Add.371:

| PR | createdAt | resolution @ Add.371 |
|---|---|---|
| #27261 | 01:10:59Z | CLOSED 01:17:50Z (no-merge, 6m51s) |
| #27265 | 01:23:48Z | OPEN |
| #27267 | 01:26:08Z | CLOSED 01:27:09Z (no-merge, 61s) |
| **#27268** | **01:29:38Z** | **MERGED 02:04:23Z (lifespan 34m45s)** |

**First MERGED member of oss-agent-shin's 11-event cluster**. Across the 11 PRs documented at Add.370 (#27251–#27270), prior resolutions were 5 CLOSED-no-merge, 6 OPEN, **0 MERGED**. The merge of #27268 changes the Z′_bot_themed envelope:

- **Z′_bot_themed merge rate**: 1/4 (25%) on Prometheus subset; 1/11 (9%) overall on oss-agent-shin
- **Z′_bot baseline merge rate** (docstring iteration #27251 #27253 #27255 #27258 #27259): 0/5 (0%)
- **Bot merge rate is theme-correlated**: Prometheus-themed PRs from the bot have non-zero merge probability; substrate-native (docstring) PRs have zero

This re-classifies Z′_bot_themed: it is **not just bot iteration on a maintainer theme**; it is **bot iteration with non-trivial maintainer-acceptance probability**. The bot's authoring of #27268 was sufficiently aligned with maintainer intent that the PR landed in 34m45s — substantially faster than ishaan-berri's own typical merge latency on adjacent #27246/#27248 (which are still OPEN per Add.370).

**Sub-class refinement**: Z′_bot_themed splits into:
- **Z′_bot_themed_landed** (bot Prometheus PR that merges; n=1 currently #27268)
- **Z′_bot_themed_culled** (bot Prometheus PR that closes-no-merge; n=2 #27261, #27267)
- **Z′_bot_themed_pending** (bot Prometheus PR still OPEN; n=1 #27265)

Predict at Add.372: #27265 also merges (it cleanly extends the same theme as the now-merged #27268); raising landed rate to 2/4 = 50% on Prometheus subset.

---

## NEW OBSERVATION 4 — "P-370.NO5 viyatb-oai #21285 hot-fix prediction (<30m) FALSIFIED: PR remains OPEN at Add.371 close, lifespan now 40m45s with no head-SHA mutation"

**Signature**: Add.370 predicted #21285 (`fix(bwrap): emit libcap after standalone archive`, viyatb-oai, opened 01:45:47Z) merges as fast hot-fix within 30 minutes. Observed at Add.371:

| field | value |
|---|---|
| state | OPEN |
| head SHA @ Add.370 | `6795cc9f1e6f901706796ba7f9af8ff2a5660b54` |
| head SHA @ Add.371 | `6795cc9f1e6f901706796ba7f9af8ff2a5660b54` |
| lifespan | 40m45s (and counting) |

**Zero head mutation, no merge, no close** — Add.370's hot-fix hypothesis is **falsified**. Possible re-classifications:

1. **bolinfest is offline / EOD** — Add.370 NO 8 cited 01:00–01:50Z UTC = 18:00–18:50 PT as US-EOD envelope; bolinfest may have stopped reviewing post-merge of #21257 at 01:21:52Z and not returned to review viyatb-oai's hot-fix.
2. **Hot-fix is non-trivial** — title says "emit libcap after standalone archive"; if libcap is being added rather than re-ordered, this isn't a one-line ship.
3. **Cross-author review-blocker** — viyatb-oai may not be on bolinfest's auto-merge list, requiring explicit review.

**Re-classification**: J′-class slow-review applies to cross-author hot-fixes too, not just feature PRs. Combine with Add.370 NO 2's wiltzius-J′-triplet still-frozen (head SHAs unchanged across now 3 ticks at Add.371) and the **post-bolinfest-merge codex review queue is empty** — bolinfest merged 3 of his own PRs (#21255, #21256, #21257) but didn't review anyone else's after.

Predict at Add.372: #21285 either merges with bolinfest review (high conditional probability if bolinfest is online) OR receives first comment/force-push from viyatb-oai. If neither happens, classify as J′-frozen-cross-author-hotfix (new sub-class).

---

## NEW OBSERVATION 5 — "Codex review-merge throughput holds: #21271 alfozan + #21275 iceweasel-oai both MERGED in-tick — non-pakrym maintainer review channel is alive even as cross-author hot-fix #21285 stalls"

**Signature**: Add.371 in-tick merges on codex (excluding pakrym-self-merges):

| PR | author | merged-at | substrate |
|---|---|---|---|
| #21271 | alfozan | 02:14:59Z | `Expose plugin manifest keywords in app server` |
| #21275 | iceweasel-oai | 00:49:51Z | `Share Git safe-command logic on Windows` |

Both are non-pakrym, non-bolinfest authors. Mean review-to-merge latency:
- #21271: opened ~Add.370 latter half, merged at 02:14:59Z (ballpark ~2h)
- #21275: opened pre-Add.370, merged at 00:49:51Z (early in this tick window, prior to the anomalyco capture window in Add.370)

**This contradicts the "post-EOD review queue empty" framing of NO 4**. Codex maintainers ARE merging non-self-authored PRs; viyatb-oai's #21285 is selectively stalled. Possible drivers:

1. #21285 is a **regression fix on bolinfest's standalone-bwrap stack** — only bolinfest can authoritatively review libcap emission ordering. The other reviewers don't touch this substrate.
2. The cross-author hot-fix pattern requires the **original author's review** specifically, which creates a dependency lock — when the original author goes EOD, the hot-fix waits for ~12+ hours.

**Sub-class**: J′-frozen-on-substrate-author (cross-author hot-fix waits for the substrate author to be online). Distinct from generic J′ (any reviewer suffices) and substrate-collision Z″ (the PR is closed because someone else's PR landed).

---

## NEW OBSERVATION 6 — "wiltzius-openai J′-triplet HEAD SHAs unchanged for 3rd consecutive tick — frozen-J-burst sub-class extends past 145 minutes; Add.370 prediction of force-push or close FALSIFIED"

**Signature**: Add.370 predicted at least 1 wiltzius PR force-pushes or closes. Observed at Add.371:

| PR | head SHA @ Add.371 | head SHA @ Add.370 | head SHA @ Add.369 | match across 3 ticks |
|---|---|---|---|---|
| #21264 | `074440a1daafed81b090a3feffddac647d875550` | identical | identical | ✓ frozen |
| #21265 | `3a00dd6c7b3dc7cea124400c9c8a8c38e73e99c9` | identical | identical | ✓ frozen |
| #21266 | `a439ec5dc4b657c7510d9f38f991a6298401a515` | identical | identical | ✓ frozen |

**Total frozen window: 23:25:14Z (latest #21266 update at Add.369) → 02:26:32Z (Add.371 close) = 3h01m18s with zero head mutations on all 3 PRs**. Add.370 prediction is falsified.

This frozen window now spans **the entire pakrym M_multi_themed cluster lifecycle (#21260 merge → #21290 open)** without wiltzius reacting. Substrate-collision risk articulated at Add.370 is now **objectively higher**: pakrym has merged 4 PRs (#21260, #21271, #21276, #21282 — well, #21271 is alfozan-authored, so pakrym specifically merged #21260, #21276, #21282, plus #21275 iceweasel-oai by maintainer review) on overlapping core/thread/MCP territory, while wiltzius's 3-PR ThreadStore stack stays at the same SHAs the foundation expected 3 hours ago.

**Re-classification candidate**: this is no longer a J′-burst (which implies recent burst-open with pending review). It's transitioning to **stale-J-burst** — the burst happened at 23:25Z and review never arrived; the cluster is functionally **abandoned-by-reviewer** even though the author isn't withdrawing.

Predict at Add.372: wiltzius J′-triplet stays frozen for 4th consecutive tick OR the author opens a 4th PR rebasing on pakrym's merged work (signaling ack of conflict). Force-push prediction retired pending observation.

---

## NEW OBSERVATION 7 — "litellm reviewer/maintainer activity widens: VANDRANKI 3-PR burst (#27263, #27266, #27269) on streaming/transform substrates — first VANDRANKI cluster of the week"

**Signature**: VANDRANKI (PRABHU KIRAN VANDRANKI) opens 3 PRs on litellm in this tick:

| PR | createdAt | substrate | state |
|---|---|---|---|
| #27263 | 01:24:24Z | `fix(snowflake): update Cortex endpoint from inference:complete to v1/chat/completions` | OPEN |
| #27266 | 01:31:12Z | `fix(responses): handle response.incomplete streaming event in Responses->Chat transform` | OPEN |
| #27269 | 01:42:39Z | `fix(responses): handle response.function_call_arguments.done for models without deltas` | OPEN |

**3-PR same-author cluster, all OPEN, on partially-overlapping substrates** (#27266 and #27269 both touch `Responses->Chat` streaming events). Inter-PR gaps 6m48s, 11m27s — sub-15-minute cadence, characteristic of **K-class maintainer-iteration** but VANDRANKI is **not a Berri-org maintainer** (no `-berri` suffix login), suggesting external-contributor-with-K-cadence — a new sub-class.

**Cross-author surface contention**: while ishaan-berri's K-cluster runs on Prometheus and oss-agent-shin's Z′_bot_themed runs alongside, VANDRANKI is operating on a **different substrate (Responses API streaming events)** with similar burst cadence. This shows litellm tolerates **3 simultaneous maintainer-cadence clusters on disjoint substrates** without obvious bottlenecking.

**Sub-class**: K_external (external contributor exhibiting maintainer-K cadence on a non-overlapping substrate). Distinct from K_human (in-org maintainer like ishaan-berri) by login domain, distinct from B-A-M-N-style external author cluster (qwen-code) by absence of mixed-state resolution.

Predict at Add.372: at least 1 of VANDRANKI's 3 PRs receives first review or merges; if all 3 stay OPEN with zero comments, classify as J′-external-3-burst.

---

## NEW OBSERVATION 8 — "anomalyco/opencode steady-stream pattern continues: 3 OPEN feat/refactor PRs (#25941 Hona, #25942 Flare576, #25944 GK0814) with zero in-tick merges — small-carrier-low-velocity envelope"

**Signature**: anomalyco/opencode in this tick (after the Hona M_single follow-on #25941 noted at Add.370):

| PR | author | substrate | state @ Add.371 |
|---|---|---|---|
| #25941 | Hona | `refactor(app): centralize sync query options` | OPEN (carryover) |
| #25942 | Flare576 | `feat(tui): add width_method config option for ZWJ emoji handling` | OPEN |
| #25944 | GK0814 | `feat: display loaded skills list to save query tokens` | OPEN |

Plus older OPEN PRs #25933, #25924, #25919, #25917, #25915, #25909, #25907, #25905 (some carryover, some recent). **Zero merges in this tick** on anomalyco/opencode — Hona's #25939 merge at 00:09:32Z was in the prior tick, and no new merges follow in 02:26Z window.

**Velocity contrast**: codex has 3 in-tick merges (#21271, #21275, #21276, #21282 — 4 actually) and 1 cross-author hot-fix; litellm has 1 in-tick merge (#27268 bot Z′_bot_themed_landed); anomalyco/opencode has 0 in-tick merges, 3 fresh opens. This positions anomalyco/opencode as **a low-velocity carrier in the late-W18-day-1 close-the-tick window** — distinct from codex/litellm which are in active maintainer-cluster mode.

Possible driver: anomalyco/opencode does not have a single-maintainer-iteration-burst pattern visible in this tick; the opens are 3 distinct authors with no overlap. This is **A-class steady-stream** (multiple-author, non-clustered, low-velocity) — pre-Add.371 framing of A-class as a residual "everything else" category gets a positive instance here.

Predict at Add.372: anomalyco/opencode adds 1–3 more OPEN PRs and merges 1–2 of the carryover OPEN set; cluster pattern does not emerge.

---

## NEW OBSERVATION 9 — "gemini-cli alexandrevarga doublet (#26536 + #26559) on auth/policy substrates: 4h22m gap, both OPEN, distinct topics (ripgrep detection vs OIDC remote agent auth) — first cross-substrate gemini-cli human doublet of W18"

**Signature**: alexandrevarga opens 2 PRs in the Add.370→Add.371 window on disjoint substrates:

| PR | createdAt | substrate | state |
|---|---|---|---|
| #26536 | pre-Add.370 (latest update 01:24:36Z) | `feat(core): add system-wide fallback for ripgrep detection` | OPEN |
| #26559 | 02:25:27Z (within 90s of Add.371 close) | `feat(core): implement OpenID Connect (OIDC) auth provider for remote agents` | OPEN |

**Cross-substrate doublet**: the two PRs share `feat(core)` but no semantic substrate overlap. Inter-open gap >4h with the second member opening **right at tick close**, suggesting alexandrevarga is in **end-of-day push-session**.

This is **distinct from M_multi_themed** (no theme coherence) and **distinct from K-class** (gap is too long; K-cadence is sub-15-minute). Closest match is **A-class steady-stream by single author** — same-author 2-PR low-cadence on disjoint topics.

Combined with #26553 (app/gemini-cli Z′_bot OPEN), #26555 (gemini-cli-robot Z′_bot OPEN), #26551 (tejakusireddy externalize https-proxy-agent), #26554 (sripasg ACP), #26560 (cynthialong0-0 plans-directory), gemini-cli's tick window has **6 distinct OPEN-pending PRs and 0 in-tick merges** — also A-class low-velocity, but with embedded Z′_bot pair from synth-716.

Predict at Add.372: alexandrevarga either opens a 3rd PR (escalating to K-cadence) or stays at 2 (terminating the doublet); gemini-cli adds 0–1 more bot-iteration PR.

---

## NEW OBSERVATION 10 — "Carrier-by-carrier merge-vs-open differential stratifies clearly at Add.371 close: codex 4 merges + 12 opens, litellm 1 merge + 6 opens, others 0 merges + 1–3 opens"

**Signature**: in-tick merge count vs. open count by carrier:

| carrier | merges (in 41m tick) | opens (in 41m tick) | M:O ratio |
|---|---|---|---|
| codex | 4 (#21271, #21275, #21276, #21282) | 5 (#21285, #21287, #21290 + 2 from prior wave) | 0.80 |
| litellm | 1 (#27268) | 5 (#27269, #27270, #27271, #27272, plus carryover) | 0.20 |
| anomalyco/opencode | 0 | 3 (#25941, #25942, #25944) | 0 |
| gemini-cli | 0 | 4 (#26553, #26555, #26559, #26560) | 0 |
| qwen-code | 0 | 0 (window quiet) | n/a |
| crush | 0 | 0 (window quiet) | n/a |
| goose | 0 (#9030 merged 01:50:50Z, just before tick start) | 0 (window quiet) | n/a |

**Codex dominates merge throughput at 0.80 M:O ratio** — a maintainer-led ship-wave on the back of pakrym's cleanup cluster + bolinfest's bwrap-stack tail + 2 incidental merges (alfozan #21271, iceweasel-oai #21275). **Litellm has lower throughput at 0.20** — only the bot Z′_bot_themed_landed event lands; ishaan-berri's K-cluster opens but doesn't close. **Other 5 carriers are dark on merges**.

This is a **bipolar carrier activity profile**: codex+litellm are in close-the-tick maintainer-ship mode; anomalyco/opencode + gemini-cli are in low-velocity steady-stream mode; qwen-code + crush + goose are in **observation gap** (last activity in updated-at fields is pre-01:30Z, suggesting these 3 maintainers are EOD or at quieter substrates).

**Sub-class**: tick-bipolar-carrier-distribution — at any given 40-50m tick, 2 carriers dominate merge throughput, 2 carriers run opens-only, and 3 carriers are dark. If this distribution holds across multiple ticks, it suggests **carrier-coupling-by-timezone or carrier-specific-EOD-envelope** — the maintainer pools for codex (OAI, US/PT) and litellm (Berri, US/distributed) overlap in the 01:00–02:30Z window; the others (anomalyco, gemini-cli, qwen, crush, goose) skew to other timezones or other days.

Predict at Add.372: codex merge count drops to 0–2 (pakrym EOD), litellm picks up 1–2 K-cluster merges (ishaan-berri reviews own #27260, #27271, #27272), anomalyco/opencode adds first merge (Hona #25941 follow-on). Bipolar profile rotates: litellm becomes dominant carrier; codex demotes.

---

## SUMMARY (Add.371)

- **Tick width 41m** — emerging lower-shoulder mode at 37–41m softens Add.370's unimodal centroid claim
- **PRs cited (unique)**: 7 carriers, ~85 unique PR numbers across the window and cross-tick references
- **Confirmations**: P-370.NO4 (ishaan-berri K-member 10 within 30m, off by 42m on slow side but directionally correct); Add.370 NO 8 (end-of-day cross-carrier envelope partially holds — codex+litellm cluster, others quiet)
- **Falsifications**: P-370.NO1 (pakrym cascade decay; n grew 5→7); P-370.NO5 (#21285 hot-fix <30m; still OPEN at 40m+); P-370.NO2 (wiltzius force-push or close; frozen for 3rd tick)
- **New sub-classes**: Z′_bot_themed_landed/_culled/_pending (NO 3); K_external (NO 7, VANDRANKI 3-PR burst); J′-frozen-on-substrate-author (NO 5); stale-J-burst (NO 6, wiltzius); A-class steady-stream-low-velocity (NO 8, NO 9); tick-bipolar-carrier-distribution (NO 10)
- **First reverse theme transfer**: ishaan-berri #27271 cites bot oss-agent-shin's #27268 in the title — bot→human direction (NO 2)
- **First Z′_bot_themed merge**: oss-agent-shin #27268 lands in 34m45s — non-trivial maintainer-acceptance signal (NO 3)
- **Predicts for Add.372**: pakrym n=8 ceiling + ≥1 OPEN merge (NO 1); K-cluster n≥12 + reciprocal Prometheus interleave (NO 2); bot #27265 merges → Z′_bot_themed_landed n=2 (NO 3); #21285 first comment or stays frozen 4th tick (NO 4, NO 6); VANDRANKI receives review or stays J′-external (NO 7); anomalyco/opencode adds 1–2 merges (NO 8); alexandrevarga 3rd PR or doublet termination (NO 9); bipolar carrier profile rotates litellm-dominant (NO 10)
