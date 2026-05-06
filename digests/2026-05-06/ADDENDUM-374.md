# ADDENDUM-374 — 2026-05-06 (W18 day-1, tick+6 from Add.368)

**Capture window**: 2026-05-06T03:47:07Z (Add.373 close) → 2026-05-06T04:42:30Z (capture). **Tick width: ~55m23s.** Sequence Add.358→374 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, 41, 26, 55, **55**. The 55–55 doublet at Add.373/374 stabilizes the post-26m-outlier mode at ~55m. The 17-tick mean is now ~46m; the 26m point at Add.372 is firmly singleton; the bimodal shoulder at 37–41m holds at 4 ticks.

---

## NEW OBSERVATION 1 — "P-373.NO1 (pakrym freeze ≥3 ticks unless return; if returns, force-push #21290 first; zero sibling merges) PARTIALLY FALSIFIED on the 'sibling silence' clause: pakrym does NOT return AND a NEW codex maintainer (abhinav-oai) opens #21302 ([codex] support hook input rewrites) at 04:08:07Z, breaking the codex-zero-non-pakrym-author streak after 4 ticks of single-author-dominance"

**Signature**: pakrym-oai cleanup cluster status across the new tick:

| PR | state @ Add.373 | state @ Add.374 | last updatedAt | Δ |
|---|---|---|---|---|
| #21276 | MERGED | MERGED | 01:57:34Z | unchanged |
| #21278 | OPEN | OPEN | 01:57:39Z | unchanged (~165m stale) |
| #21281 | OPEN | OPEN | 02:09:45Z | unchanged (~153m stale) |
| #21282 | MERGED | MERGED | 01:58:28Z | unchanged |
| #21284 | OPEN | OPEN | 01:56:04Z | unchanged (~166m stale) |
| #21287 | OPEN | OPEN | 02:10:08Z | unchanged (~152m stale) |
| #21290 | OPEN | OPEN | 03:31:46Z | unchanged from Add.373 (no further CI tick) |

**Cluster freeze extends to ~136m total** (Add.371 close 02:26Z → Add.374 capture 04:42Z). The ≥3-tick prediction is **confirmed for pakrym non-return** but the "zero sibling merges" sub-prediction is **vacuously holding** (no merges happened, but the broader claim that codex stays single-author-dark is **broken** by abhinav-oai #21302 (`[codex] support hook input rewrites`) opening at 04:08:07Z. This is a **brand-new theme** (hook input rewrites) orthogonal to pakrym's core-extraction series, and **abhinav-oai** is a non-pakrym maintainer who has been silent in codex during the entire pakrym cluster window.

**Sub-class refinement of synth-722 framework**: codex transitions from FREEZE → **PARTIAL_DIFFUSION_ORTHOGONAL** — a non-cluster author opens a non-cluster theme PR while the frozen cluster remains untouched. This is **distinct from** post-DECAY diffusion (litellm/opencode pattern in synth-722) because the frozen cluster's review work was never started, so no bandwidth was released; instead, abhinav-oai's open is **independent supply-side activity** that does not depend on cluster-related bandwidth dynamics.

Also notable: viyatb-oai #21285 (`fix(bwrap): emit libcap after standalone archive`) ticked updatedAt at 03:02:44Z (post-Add.372 capture, pre-Add.373 capture — should have been caught in Add.373 but was not) and remains OPEN at Add.374, with no further activity. canvrno-oai #21274 also remains idle.

Predict at Add.375: pakrym either returns (cluster transitions FROZEN → DECAYING with force-push on #21290 first) OR remains absent and the cluster crosses 4-tick freeze (~190m); abhinav-oai #21302 receives at least one CI status tick within next tick; codex sees 1 more non-pakrym new open OR returns to flat-line.

---

## NEW OBSERVATION 2 — "P-373.NO2 K-cluster closure PARTIALLY CONFIRMED: ishaan-berri opens #27273 follow-up sibling and oss-agent-shin pivots to #27275 (off-K) per prediction, BUT ishaan-berri ALSO opens #27272 follow-on (`Cap Prometheus end-user metric cardinality`) which is STILL on-K-theme — K does not cleanly terminate, instead transitions to K_human_residual_iteration with bot exiting first"

**Signature**: K-theme state evolution across the 55m window:

| PR | author | state @ Add.373 | state @ Add.374 | event |
|---|---|---|---|---|
| #27268 | oss-agent-shin | MERGED | MERGED | unchanged |
| #27270 | oss-agent-shin | OPEN (CI tick 03:26Z) | OPEN (no further activity) | bot idle |
| #27271 | ishaan-berri | MERGED 03:04:57Z | MERGED | unchanged |
| #27272 | ishaan-berri | OPEN (push 03:42Z) | OPEN | last update 03:42:18Z, **no further push in this tick** — gone idle ~60m |
| #27273 | ishaan-berri | OPEN | OPEN | last update 02:43:47Z, idle ~119m (cluster-exit confirmed stable) |
| #27275 | oss-agent-shin | OPEN (push 03:11Z) | OPEN | bot idle since Add.373 |
| #27278 | krisxia0506 | n/a | OPEN 03:51:36Z | NEW open, **non-K theme** (`Fix Gemini MIME detection for extensionless GCS URIs`) |

**Bot funnel update**: oss-agent-shin's litellm K-themed funnel is now **closed** at 12 PRs / 1 merged / 5 closed / 6 open with **no new bot opens in this tick**. The bot's pivot to non-K with #27275 was **terminal** for the bot's K-stream. ishaan-berri continues the K-theme on the **human side only** with #27272 still open and unpushed. The "closed-loop reciprocal-citation" pair (#27268 / #27271) remains the **only confirmed Z′_bot ↔ K_human merge pair** in the litellm substrate.

**Refined sub-class**: K_human_residual_iteration_post_bot_exit — after the closed-loop reciprocal pair lands, the bot exits the theme entirely and the human author **continues iterating on adjacent K-members** (here #27272 cardinality cap is a direct sibling of #27271 cardinality patch) without further bot proposals. The Prometheus surface ownership is now **fully human-owned** for the remainder of the W18-day-1 sequence.

Cross-reference to Add.373 NO 3 (POST_CLUSTER_DIFFUSION): the diffusion **continues** with #27278 (krisxia0506, 5th distinct author in litellm during the 110m post-K window — joining ishaan-berri, yassin-berriai, mateo-berri, oss-agent-shin). This **confirms** synth-722's "5th author appears in next tick" prediction.

Predict at Add.375: ishaan-berri pushes a fresh commit on #27272 within next tick OR self-merges; oss-agent-shin opens 0–1 more PRs (likely tag-usage/admin themes, not K); litellm sees 1 more non-K author open continuing diffusion to 6 distinct authors.

---

## NEW OBSERVATION 3 — "Cross-carrier post-decay diffusion timing convergence: opencode (4 authors / 4 themes in Add.373) extends to 5 authors / 5 themes in Add.374 with ctharvey #25971 (`fix(opencode): recover malformed GLM/NVIDIA tool calls`) opening at 04:37:31Z; opencode's diffusion arc (60m, 4→5 authors) tracks litellm's diffusion arc (110m, 4→5 authors) at near-identical author-add cadence (~12–22m per new distinct author)"

**Signature**: opencode new opens since Add.373 capture (03:47Z):

| PR | author | createdAt | theme |
|---|---|---|---|
| #25962 | Brendonovich | 03:39:55Z (Add.373 catch) | desktop utilityProcess refactor |
| #25971 | ctharvey | 04:37:31Z | tool-call recovery (GLM/NVIDIA) |

**Author timeline in opencode post-Hona-decay** (Hona last PR at 00:13Z, decay tick = Add.371 onwards):
- Waridley #25955 02:41Z (T+148m post-decay)
- jvanzyl #25957 02:47Z (T+154m, +6m after Waridley)
- nez #25959 03:23Z (T+190m, +36m after jvanzyl)
- Brendonovich #25962 03:39Z (T+206m, +16m after nez)
- ctharvey #25971 04:37Z (T+264m, +58m after Brendonovich)

**5 distinct authors / 5 distinct themes** in opencode within ~120m of decay. The **author-add gaps** are 6m, 36m, 16m, 58m — non-uniform but all sub-hourly until the most recent. Compare to litellm post-K diffusion: ishaan/yassin/mateo/oss-agent-shin within 55m, krisxia0506 added at +110m. **Both carriers reach 5 distinct authors within ~120m of cluster decay** and both saturate at 5 within the W18-day-1 sample.

**Sub-class refinement**: POST_CLUSTER_DIFFUSION_5_AUTHOR_SATURATION — the diffusion plateau appears to land at 5 distinct authors in 60–120m, suggesting a **carrier-substrate carrying capacity** for parallel non-cluster work given typical maintainer review bandwidth. ctharvey's PR is also notable as a **direct response to a recurring class of issues** (malformed tool calls from GLM/NVIDIA endpoints), distinct from Brendonovich's architectural refactor — quality and theme dispersion both expand together.

Predict at Add.375: opencode adds a 6th distinct author within next tick (testing the 5-author saturation hypothesis); if no 6th appears within 60m, the saturation hypothesis is supported; #25962 receives at least one maintainer comment (per prior P-373.NO6).

---

## NEW OBSERVATION 4 — "qwen-code shows a single-author burst from B-A-M-N (#3856 already in W17 sample, #3861 at 02:57:43Z `fix(cli): preserve comments and formatting in settings.json`, #3863 at 04:32:30Z `feat(cli): add Anthropic model listing support (Option A)`) — single-author triplet within ~110m on three disjoint surfaces (settings serializer, dir polish, vendor model list), with chiga0 #3860 from Add.373 NO 4 still open and updating at 04:25:32Z (push activity, may be addressing maintainer feedback)"

**Signature**: qwen-code author activity Add.373→Add.374 window:

| PR | author | createdAt / updatedAt | event |
|---|---|---|---|
| #3856 | B-A-M-N | (W17, MERGED earlier) → updated 23:55Z 05-05 | reference baseline |
| #3860 | chiga0 | 02:40Z OPEN, **04:25:32Z push** | active iteration on ink-7 + Node-22 dep bump |
| #3861 | B-A-M-N | 02:57:43Z OPEN, last push 04:06:19Z | settings.json comment-preserving migration |
| #3862 | Hades1123 | 03:44:10Z OPEN, last push 03:53:04Z | nested skill directories |
| #3863 | B-A-M-N | 04:32:30Z OPEN | Anthropic model listing support (`Option A`) |

**B-A-M-N triplet pattern**: 3 OPEN PRs by the same author within ~95m on **3 disjoint surfaces** (cli polish prior + settings-serializer here + vendor model list). The "(Option A)" suffix on #3863 is a strong tell that B-A-M-N is **proposing one of N alternatives** to a maintainer-discussed design question — a contributor strategy of "prototype several, let maintainer pick" that mirrors the bot iterative funnel pattern (synth-714/719) but at much smaller cardinality (N≈2–3 vs N≈10).

**chiga0 #3860 push at 04:25:32Z**: 105m after open, well inside the typical maintainer-feedback turnaround. Most likely cause is either (a) maintainer comment requesting Node-22 split from ink-7 (per P-373.NO4 hypothesis) followed by a rework push, or (b) author self-correction on a CI failure. No comments observed via PR list summary, so weight (b) higher; but the prediction stands as "active iteration in progress, no closure yet".

**Sub-class**: K_human_proposing_alternatives_n_eq_2_or_3 — distinct from the bot's K_with_iteration_funnel because the human author **labels alternatives explicitly** (Option A in #3863's title is the explicit signal). Cardinality is small but the structural signature is similar.

Predict at Add.375: B-A-M-N opens "Option B" or "Option C" for the same vendor-model-listing design within next 1–2 ticks; chiga0 #3860 either lands or splits into two PRs (Node bump + ink bump) within 1–2 ticks; Hades1123 #3862 receives no maintainer activity (long-tail solo PRs in qwen-code typically idle 24–72h before review).

---

## NEW OBSERVATION 5 — "goose breaks darkness exactly as P-373.NO5 predicted: kalvinnchau opens #9045 (`feat(acp): expose built-in skills through sources list acp calls`) at 03:58:18Z and #9046 (`feat(goose2): show built-in skills`) at 04:01:44Z — a 3m26s same-author doublet on the ACP/built-in-skills theme, extending kalvinnchau's W17 ACP-stack series (synth-712 lineage)"

**Signature**: kalvinnchau goose ACP-themed PR series across W17→W18:
- (W17 prior): #9023, #9027, #9028, #9029, #9030 — 5 ACP-themed PRs in earlier window
- #9040 (22:17:02Z, Add.371-era, OPEN) `feat(acp): add agent support to sources crud`
- #9045 (03:58:18Z) `feat(acp): expose built-in skills through sources list acp calls`
- #9046 (04:01:44Z) `feat(goose2): show built-in skills`

**Total kalvinnchau ACP-stack contribution**: now **8 PRs across ~6h** in the W18-day-1 sequence alone (and 6+ more in W17 per synth-712 catalog). The 3m26s gap between #9045 and #9046 is the **shortest intra-author doublet observed in goose** during the W18-day-1 sequence. The two PRs are **layered**: #9045 exposes built-in skills via the ACP protocol surface; #9046 wires the same skills into the `goose2` UI surface — a classic **protocol-then-consumer doublet** signature.

**Cross-carrier comparison to ishaan-berri's K-cluster cardinality cap pair (#27271 → #27272)**: both are **same-author sequential refinements on a single substrate** (kalvinnchau on ACP; ishaan-berri on Prometheus cardinality). Both authors are **substrate owners** in their carriers (kalvinnchau is the ACP-protocol implementation lead in goose; ishaan-berri is the litellm Prometheus owner). This validates synth-717's broader claim that **substrate ownership concentrates iteration cadence** — owners produce tight doublets/triplets while non-owners produce isolated single PRs.

**Sub-class**: SUBSTRATE_OWNER_TIGHT_DOUBLET — same-author, ≤10m gap, layered protocol+consumer or refinement+sibling pair on a substrate the author owns. Distinguished from same-second mechanical co-fire signatures (synth-84) because the gap is **deliberate sequencing** (one PR enables the other's review), not parallel publication.

Predict at Add.375: kalvinnchau opens 1 more `feat(goose2)` or `feat(acp)` PR within next tick (typical session continues 3–5 PRs); #9045 and #9046 do NOT merge within next tick (review latency on goose ACP PRs is typically 12–24h); jh-block #9038 (Vulkan) and dan4thewin #9043 (vendor /responses API) remain idle.

---

## NEW OBSERVATION 6 — "gemini-cli sripasg #26554 (`fix(acp): move tool explanation from thought stream to tool call content`) updates at 02:41:27Z (Add.373 catch) and remains OPEN — paired with goose kalvinnchau ACP-themed doublet (#9045/#9046) and codex pakrym `Move skills watcher to app-server` #21287 (still frozen), establishing a CROSS-CARRIER ACP/skills-surface convergence with 4 distinct PRs across 3 carriers in <8h"

**Signature**: ACP-protocol / built-in-skills surface PRs across carriers in the W18-day-1 sequence:

| Carrier | PR | author | theme | state |
|---|---|---|---|---|
| gemini-cli | #26554 | sripasg | acp tool explanation routing | OPEN |
| goose | #9040 | kalvinnchau | acp agent sources crud | OPEN |
| goose | #9045 | kalvinnchau | acp built-in skills sources list | OPEN |
| goose | #9046 | kalvinnchau | goose2 built-in skills UI | OPEN |
| codex | #21287 | pakrym-oai | move skills watcher to app-server | OPEN (frozen) |
| qwen-code | #3862 | Hades1123 | nested skill directories | OPEN |

**6 PRs across 4 carriers** all touching the **ACP-protocol-or-skills-loader surface** within the W18-day-1 ~8h window. None are reciprocal citations (unlike litellm K-cluster), and the authors are **carrier-disjoint** (no author appears in more than one carrier). The convergence is **theme-intrinsic** rather than coordinated: the ACP protocol and skills-loading surface are simultaneously under active design across the agent-CLI ecosystem.

**Sub-class**: CROSS_CARRIER_THEME_CONVERGENCE_NO_CITATION — distinct from synth-79's "cross-repo defensive payload shape convergence" (which was a **defensive-against-bug** convergence) and synth-717's reciprocal-citation closed loop (which had **explicit cross-author awareness**). This convergence is **independent parallel evolution** on the same architectural surface, suggesting the surface is at a **maturity inflection point** where multiple ecosystem participants independently identify the same gaps.

Predict at Add.375: at least one of {#21287, #26554, #9040, #9045, #9046, #3862} merges within next 2 ticks; no new explicit cross-citation between authors emerges (the convergence remains parallel, not coordinated); a 7th ACP/skills-themed PR appears in litellm or crush within next 3 ticks.

---

## OPEN PREDICTIONS LOG (carry forward to Add.375)

- **P-374.NO1**: pakrym either returns (force-push #21290 first) or freeze crosses ~190m / 4 ticks; abhinav-oai #21302 receives ≥1 CI tick; codex 1 more non-pakrym open OR returns to flat-line.
- **P-374.NO2**: ishaan-berri pushes #27272 within next tick or self-merges; oss-agent-shin opens 0–1 more non-K PRs; litellm reaches 6 distinct post-K authors.
- **P-374.NO3**: opencode adds 6th distinct author within next tick (or saturation at 5 supported); #25962 receives ≥1 maintainer comment.
- **P-374.NO4**: B-A-M-N opens "Option B"/"Option C" for vendor-model-listing within 1–2 ticks; chiga0 #3860 lands or splits; Hades1123 #3862 stays idle.
- **P-374.NO5**: kalvinnchau opens 1 more ACP/goose2 PR within next tick; #9045/#9046 do not merge in next tick; jh-block #9038 stays idle.
- **P-374.NO6**: ≥1 of {#21287, #26554, #9040, #9045, #9046, #3862} merges within 2 ticks; no explicit cross-author citation; 7th ACP/skills PR appears in litellm/crush within 3 ticks.

## CARRIER COVERAGE (Add.374)

opencode (#25933, #25941, #25942, #25955, #25957, #25959, #25962, #25971), codex (#21274, #21276, #21278, #21281, #21282, #21284, #21285, #21287, #21290, #21302), litellm (#27268, #27270, #27271, #27272, #27273, #27275, #27278), gemini-cli (#26551, #26553, #26554, #26555, #26559, #26560), qwen-code (#3855, #3856, #3860, #3861, #3862, #3863), crush (#2800, #2801, #2805, #2807, #2809, #2811), goose (#9038, #9039, #9040, #9043, #9045, #9046). **7-of-7 carriers cited.**
