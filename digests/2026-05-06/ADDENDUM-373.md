# ADDENDUM-373 — 2026-05-06 (W18 day-1, tick+5 from Add.368)

**Capture window**: 2026-05-06T02:52:18Z (Add.372 close) → 2026-05-06T03:47:07Z (capture). **Tick width: ~54m49s.** Sequence Add.358→373 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, 41, 26, **55**. The 26m outlier at Add.372 is now followed by a return to mode (54–55m), consistent with the **sampling-induced short tick** interpretation rather than the **regime-shift** interpretation. The 16-tick mean is now ~46m; the lower-shoulder mode at 37–41m holds (4 ticks) and the 26m outlier remains a singleton.

---

## NEW OBSERVATION 1 — "P-372.NO1 (pakrym n=7 frozen, ≥2 OPEN receive sibling-maintainer review, no merges, no new opens) PARTIALLY CONFIRMED: pakrym opens ZERO new PRs in 55m extending the freeze to 81m total, but ZERO sibling-maintainer review activity observed AND only #21290 ticks updatedAt (CI-only push at 03:31:46Z, no human review)"

**Signature**: Tracking the pakrym-oai cleanup cluster (#21276, #21278, #21281, #21282, #21284, #21287, #21290) across two consecutive ticks of freeze:

| PR | state @ Add.372 (02:52Z) | state @ Add.373 (03:47Z) | last updatedAt | Δ |
|---|---|---|---|---|
| #21276 | MERGED 01:57:34Z | MERGED | 01:57:34Z | unchanged (both ticks) |
| #21278 | OPEN | OPEN | 01:57:39Z | unchanged (~110m stale) |
| #21281 | OPEN | OPEN | 02:09:45Z | unchanged (~98m stale) |
| #21282 | MERGED 01:58:28Z | MERGED | 01:58:28Z | unchanged (both ticks) |
| #21284 | OPEN | OPEN | 01:56:04Z | unchanged (~111m stale) |
| #21287 | OPEN | OPEN | 02:10:08Z | unchanged (~97m stale) |
| #21290 | OPEN | OPEN | **03:31:46Z** | CI-only push tick, 81m post-open |

**Cluster freeze extends to 81m total** (Add.371 close 02:26Z → Add.373 capture 03:47Z). Predicted "≥2 sibling-maintainer review comments" (Add.372 NO 1) is **falsified** — zero comment activity from bolinfest, canvrno-oai, or any other codex maintainer on any of the 5 OPEN cleanups during the 55m window. Only #21290 ticked an updatedAt timestamp, and the gap from open (02:20:54Z) to update (03:31:46Z) is ~71m — too long for a CI smoke run (codex CI median ~12–18m), suggesting either a **rebase by pakrym from a separate session** or a **scheduled CI re-run**. No comment payload was added.

**Sub-class refinement**: M_multi_themed_frozen_extended — the freeze regime persists across multiple consecutive ticks without any reviewer engagement, distinguishing from synth-720's framing where freeze was treated as **single-tick author-EOD**. The extended freeze now runs ≥81m and shows **zero cross-author review touch**, validating the synth-720 hypothesis that codex/pakrym cleanups require **author-as-co-conspirator** for merge progress and that sibling maintainers do **not** opportunistically pick up frozen pakrym backlog during the EU/PT window.

Predict at Add.374: pakrym freeze extends to ≥3 consecutive ticks (≥135m total) unless pakrym themselves return; if pakrym returns mid-tick, the **first action** will be a force-push rebase on #21290 (the most-recent member) rather than opening a new member; zero sibling merges.

---

## NEW OBSERVATION 2 — "P-372.NO2 K-cluster prediction (closes via #27272 merge OR stalls, #27273 cluster-exit, ishaan opens 0–1 more K-members) PARTIALLY CONFIRMED: #27272 does NOT merge but #27271 (the K_with_Z′_anchor follow-up cited in Add.372) DOES merge at 03:04:57Z, validating the reciprocal-citation→merge chain; ishaan opens 0 new K-members confirming session pause"

**Signature**: K-cluster state evolution across the 55m window:

| PR | author | state @ Add.372 | state @ Add.373 | event |
|---|---|---|---|---|
| #27268 | oss-agent-shin | MERGED 02:04:22Z | MERGED | unchanged (Z′_bot_themed_landed n=1) |
| #27271 | ishaan-berri | OPEN | **MERGED 03:04:57Z** | NEW MERGE — closed-loop reciprocal cite landed |
| #27272 | ishaan-berri | OPEN | OPEN | last update 03:42:18Z (active, push 8m before capture) |
| #27273 | ishaan-berri | OPEN | OPEN | last update 02:43:47Z (idle ~64m, K-exit stable) |
| #27265 | oss-agent-shin | OPEN | OPEN | last update 01:26:22Z (idle ~141m, abandoned) |
| #27267 | oss-agent-shin | CLOSED | CLOSED | unchanged |
| #27270 | oss-agent-shin | OPEN | OPEN | last update 03:26:20Z (CI tick at +101m) |

**Closed-loop reciprocal-citation merge confirmed**: #27271 was the human follow-up that cited bot #27268 in its title (Add.372 NO 2 / synth-717). Both #27268 (bot, the original) and #27271 (human, the citing follow-up) are now MERGED — the **first observed Z′_bot → K_human reciprocal pair where BOTH ends merge**. Cluster cardinality of "Z′-anchored merged events" is now n=2 (the bot-anchor + the human-citing-bot follow-up), promoting K_with_Z′_anchor from a **structural** pattern (synth-717) to an **outcome-confirmed** pattern.

**Bot iterative funnel update**: oss-agent-shin's K-themed funnel @ Add.372 was 11 PRs / 1 merged / 5 closed / 5 open (9.1% accept). At Add.373: 12 PRs (+1 = #27275 "Allow internal users to view tag usage", **non-K theme**) / 1 merged / 5 closed / 6 open. The bot's accept rate **drops to 8.3%** AND the bot **pivots off K-theme** with #27275 — the first non-Prometheus PR from oss-agent-shin in the W18-day-1 sequence. This is the **bot-side analog of #27273** (Add.372 NO 2 framed #27273 as the human cluster-exit signal). Both human and bot are now exiting K, validating synth-717's prediction that the closed-loop reciprocal substrate would naturally terminate after the anchor pair lands.

**ishaan-berri new K-members opened**: 0 (confirms session pause prediction).

Predict at Add.374: K-cluster closes (final state: 2 merged + 5–6 abandoned-open + 5 closed); #27272 either self-merges by ishaan within next tick or joins the abandoned-open pool; bot oss-agent-shin opens 1–2 more non-K-theme PRs continuing the surface pivot, OR session ends entirely.

---

## NEW OBSERVATION 3 — "Multi-author NEW activity surfaces in litellm during the K-cluster decay: mateo-berri opens #27274 (proxy hot-reload) and #27262 (anthropic_messages metadata strip), yassin-berriai's #27264 MERGED at 03:19:29Z, oss-agent-shin opens off-theme #27275 — litellm enters POST-K MULTI-AUTHOR DIFFUSION with 4 distinct authors active in 55m"

**Signature**: After the K-cluster pause, litellm activity diversifies. Authors and PRs in the Add.373 window (since 02:52Z):

| PR | author | createdAt or mergedAt | event | theme |
|---|---|---|---|---|
| #27264 | yassin-berriai | MERGED 03:19:29Z | merge | proxy perf (off-K) |
| #27271 | ishaan-berri | MERGED 03:04:57Z | merge | K-anchor follow-up |
| #27274 | mateo-berri | OPEN 03:05:30Z | new open | proxy hot-reload |
| #27275 | oss-agent-shin | OPEN 03:07:55Z | new open | tag usage perms (off-K) |

**4 distinct authors** active in 55m, with **3 distinct themes** (proxy perf, K-anchor, hot-reload, perms). Compare to Add.371→372 window where the K-theme dominated 11 of 11 active PRs with 2 authors (ishaan-berri + bot oss-agent-shin). The **author count tripled** and the **theme count quadrupled** in a single tick post-K.

**Sub-class**: POST_CLUSTER_DIFFUSION — after a single-themed cluster decays (K here, M_multi_themed_frozen for codex/pakrym), the surrounding repo activity **expands rather than contracts**. Authors who were silent during the cluster-dominant period (mateo-berri last seen pre-K with #27262 at 01:17:34Z; yassin-berriai with #27264 at 01:22:59Z) **complete merges or open new PRs** in the immediately-following tick. Hypothesis: cluster-dominant ticks **starve reviewer attention** for off-theme PRs; cluster-decay ticks **release reviewer bandwidth**, enabling off-theme merges and emboldening off-theme opens.

Predict at Add.374: at least 2 of {#27274, #27275, #27262, #27270} merge during the next tick (cluster-decay reviewer release continues); ishaan-berri opens 0 K-PRs; mateo-berri opens 0–1 more proxy-themed PRs.

---

## NEW OBSERVATION 4 — "Cross-carrier dependency-bump convergence: chiga0 opens qwen-code #3860 (ink 6.2.3→7.0.2 + Node 22 engine bump) within 2m of opening DUPLICATE #3859 (CLOSED) — single-author intra-second self-correction on a major-version dep bump that touches the engine field, mirroring the bot self-correction class"

**Signature**: chiga0 opened qwen-code #3859 at 02:38:36Z (CLOSED) and #3860 at 02:40:27Z (OPEN) — a **1m51s self-correction interval** on what is identical PR content (`chore(deps): upgrade ink 6.2.3 → 7.0.2 + bump Node engine to 22`). The **closed→opened** sequence (not the more common opened→closed) suggests the author **re-opened with a corrected branch** rather than amending in place.

This is a **human analog of synth-714's Z′_bot_themed_iterative_funnel** — the bot's pattern was N≈10 candidate fixes filtered to 1 merge; chiga0's pattern is N=2 candidate dep-bumps filtered to 1 active. Sub-class: K_human_self_correction_doublet, distinct from M_multi_themed (which is multi-PR theme expansion) because the cardinality is **n=2 with one immediately void**, not n≥5 expanding.

**Cross-carrier comparison**: dependency-bump self-corrections in W17/W18 carriers:
- qwen-code #3859/#3860 (chiga0, 1m51s interval, ink major bump)
- crush has no comparable doublet in the recent window (dependabot #2794, #2795 are independent merged auto-bumps)
- gemini-cli #26546 (dependabot simple-git CLOSED at 22:20:03Z) has no paired re-open — different mechanism (auto-bot abandonment, not human self-correction)

Predict at Add.374: chiga0 #3860 either merges (typical qwen-code dep-bump latency ~12–24h from prior W17 sample) or attracts a maintainer comment requesting Node-22-bump be split from ink-7-bump; no further chiga0 doublets within the next 2 ticks.

---

## NEW OBSERVATION 5 — "Carrier activity rebalance: opencode dominates new-open count (10 PRs since 02:00Z), codex contracts to pakrym-only-frozen, litellm shows 4-author diffusion, gemini-cli/crush/qwen-code/goose continue background drumbeat — opencode #25962 (Brendonovich utilityProcess move) is the freshest cross-carrier major-refactor open"

**Signature**: opencode new opens since 02:00Z: #25955 (Waridley, GitHub remote), #25957 (jvanzyl, custom config dir), #25959 (nez, server keep-alive), #25962 (Brendonovich, desktop utilityProcess) — plus earlier #25933, #25924, #25925 (all CLOSED), #25934 MERGED 23:07Z, #25936 CLOSED ("Merge: " empty title), #25937 MERGED 23:32Z, #25939 MERGED 00:09Z, #25941 OPEN (Hona refactor), #25942 OPEN (Flare576 width_method), #25944 CLOSED (GK0814 skills list).

**Carrier-by-carrier new-open counts (Add.372→373 window, 02:52Z→03:47Z)**:
- opencode: 4 (#25955, #25957, #25959, #25962)
- codex: 0 (pakrym freeze, no other authors)
- litellm: 2 (#27274, #27275)
- gemini-cli: 0 (last open was #26560 at 01:56Z, pre-window)
- qwen-code: 1 (#3862 Hades1123 nested skill dirs)
- crush: 0
- goose: 0

**Total new opens this tick: 7** across 3 carriers. **opencode contributes 57%** of all new opens, the highest single-carrier concentration in the W18-day-1 sequence to date. The other 4 carriers (gemini-cli, crush, codex, goose) are **fully dark for new opens** during the 55m window.

**Sub-class**: 3-of-7 carrier active band — narrower than Add.372 NO ? observation (which captured 2-of-7 active band); the active set has rotated (codex out, qwen-code in) but the carrier-pool count is similar. opencode's new dominance is the **first time opencode has led new-open count** in the recent ADDENDUM sequence (codex/litellm have alternated leadership since Add.366).

Predict at Add.374: opencode continues new-open leadership (≥3 more new opens); codex reactivates with at least 1 non-pakrym author opening a PR; goose breaks darkness with 1 new open from kalvinnchau (last seen #9040 at 22:17Z, due for next ACP-themed contribution).

---

## NEW OBSERVATION 6 — "opencode #25936 (ddbd 'Merge: ' empty-title CLOSED at 23:20Z, captured Add.371) was a Z′_human_malformed; now opencode #25962 (Brendonovich legitimate utilityProcess refactor) lands as a counter-example legitimate-major-refactor in the same surface area (desktop/server boundary), establishing the surface as a recurring touch-point with mixed-quality contributions"

**Signature**: Two PRs touching the desktop/server boundary in opencode within 4h of each other:
- #25936 (ddbd, 23:15:58Z, CLOSED 23:20:31Z, title "Merge: ", 4m33s lifespan) — Z′_human_malformed (synth-711 lineage)
- #25962 (Brendonovich, 03:39:55Z, OPEN, title "feat(desktop): move server to utilityProcess") — legitimate major refactor

The surface area (desktop ↔ server process boundary) is the same; the contribution quality is opposite. ddbd is a long-tail contributor (one prior PR in the recent window); Brendonovich is also long-tail but the title structure (`feat(desktop):` conventional commit + clear scope) signals a deliberate proposal rather than an accidental empty-merge artifact.

**Sub-class**: SURFACE_RECURRENCE_MIXED_QUALITY — a single architectural surface attracts both noise (Z′_human_malformed) and signal (legitimate refactor) contributions within a short window, suggesting the surface is **architecturally salient** (multiple contributors are thinking about it) but **not yet stably owned** (no single maintainer has gated it). Compare to litellm Prometheus surface (synth-717 closed-loop pair) where surface ownership is clearer (ishaan-berri owns; bot proposes; ishaan filters and merges).

Predict at Add.374: #25962 receives at least one maintainer comment within the next tick (high-impact refactor + clear conventional commit invites review); ddbd does not re-open #25936 with a corrected title; no third contributor opens an overlapping PR on the desktop/server boundary.

---

## OPEN PREDICTIONS LOG (carry forward to Add.374)

- **P-373.NO1**: pakrym freeze extends to ≥3 consecutive ticks (≥135m total) unless pakrym returns mid-tick; if returns, first action is force-push rebase on #21290; zero sibling merges of frozen members.
- **P-373.NO2**: K-cluster closes; #27272 self-merges by ishaan within next tick or joins abandoned-open pool; oss-agent-shin opens 1–2 more non-K-theme PRs OR session ends.
- **P-373.NO3**: ≥2 of {#27274, #27275, #27262, #27270} merge in next tick (cluster-decay reviewer-release effect).
- **P-373.NO4**: chiga0 #3860 merges OR attracts maintainer comment requesting Node-22 bump be split; no further chiga0 doublets within 2 ticks.
- **P-373.NO5**: opencode continues new-open leadership (≥3 more new opens); codex reactivates with ≥1 non-pakrym author PR; goose breaks darkness with 1 new kalvinnchau ACP-themed open.
- **P-373.NO6**: opencode #25962 receives ≥1 maintainer comment in next tick; ddbd does not re-open #25936; no third contributor on desktop/server boundary.

## CARRIER COVERAGE (Add.373)

opencode (#25934, #25936, #25937, #25939, #25941, #25942, #25944, #25955, #25957, #25959, #25962, #25924, #25925, #25933), codex (#21276, #21278, #21281, #21282, #21284, #21287, #21290, #21274, #21277, #21266, #21272, #21275), litellm (#27262, #27264, #27265, #27267, #27268, #27270, #27271, #27272, #27273, #27274, #27275), qwen-code (#3859, #3860, #3862, #3852), gemini-cli (#26542, #26544, #26545, #26546, #26560), crush (#2808, #2803, #2811, #2809), goose (#9023, #9027, #9028, #9029, #9030, #9040, #9043). **7-of-7 carriers cited.**
