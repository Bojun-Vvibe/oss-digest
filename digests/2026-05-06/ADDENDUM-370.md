# ADDENDUM-370 — 2026-05-06 (W18 day-1, tick+2 from Add.368)

**Capture window**: 2026-05-06T00:55:25Z (Add.369 latest, litellm #27258 open) → 2026-05-06T01:45:47Z (codex #21285 open). **Tick width: ~50m22s.** Sequence Add.358→370 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, **50**. The Add.369 "unimodal ~50–60m centroid" hypothesis **CONFIRMED at tick+1**: 50m22s lands inside the centroid, 13-tick distribution now [49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50] with mean ~47.5m and 8/13 ticks within [37, 64] band. The two outliers (24m at Add.360 and 66m at Add.365) remain isolated; no bimodal signal recovers.

---

## NEW OBSERVATION 1 — "P-369.X CONFIRMED with extreme margin: pakrym M-cascade extends from n=2 (Add.369) to n=5 in tick+1, becoming largest single-author M_multi cluster of W18"

**Signature**: pakrym-oai's M-cascade (post-#21260 merge at 00:16:06Z) had 2 OPEN follow-on PRs in Add.369 (#21276, #21278). Tick+1 adds **3 more PRs** from the same author, all OPEN, all on adjacent substrates:

| PR | author | createdAt | subject | head SHA |
|---|---|---|---|---|
| #21260 | pakrym-oai | 22:48:49Z (merged 00:16:06Z) | `[codex] Move thread naming to app server` | `ffcce8485e35` |
| #21276 | pakrym-oai | 00:21:51Z | `[codex] Remove unused ListModels op` | `4ef3a72bbc41` |
| #21278 | pakrym-oai | 00:31:04Z | `Move message history out of core` | `f4ae2d0e54fc` |
| **#21281** | **pakrym-oai** | **01:12:40Z** | **`Remove core MCP list tools op`** | `90e4ff098bb5` |
| **#21282** | **pakrym-oai** | **01:19:03Z** | **`[codex] Remove legacy ListSkills op`** | `1eab2471c036` |
| **#21284** | **pakrym-oai** | **01:36:11Z** | **`[codex] Add response.processed websocket request`** | `6b2d4868fa13` |

**M_multi cardinality: n=5 follow-on opens within 80 minutes of own foundation merge**. Inter-PR gaps post-merge: 5m45s, 14m58s, 41m36s, 6m23s, 17m08s. Mean gap ~17m, median 14m58s. Pattern is **clearly NOT a same-second burst** (J-class) but a sustained author-iteration session over ~80m.

**Substrate analysis**: 4 of 5 are "Remove/Move … out of core" refactors (`ListModels`, `message history`, `MCP list tools`, `ListSkills`) — **single coherent cleanup theme: remove legacy ops from core**. #21284 is a divergent member (websocket request feature), suggesting author transitions from cleanup-mode to feature-mode at the 80m mark.

**Sub-class promotion**: Add.369 introduced M_multi vs M_single distinction. M_multi at Add.369 was n=2 on codex/pakrym. **M_multi now n=5 single-author single-theme** — promotes to **M_multi_themed** (theme-coherent multi-PR post-merge cascade). Distinct from JM-hybrid (which has merge-anchor temporal direction) by the author writing all members serially without cross-author interleaving.

---

## NEW OBSERVATION 2 — "P-369.A part 2 FALSIFIED: wiltzius J′-triplet head SHAs UNCHANGED for second consecutive tick despite pakrym foundation merging 89 minutes ago"

**Signature**: Add.369 predicted ≥1 force-push on wiltzius cluster (#21264, #21265, #21266) at Add.370. Observed:

| PR | author | head SHA @ Add.370 | head SHA @ Add.369 | match |
|---|---|---|---|---|
| #21264 | wiltzius-openai | `074440a1daafed81b090a3feffddac647d875550` | `074440a1daafed81b090a3feffddac647d875550` | identical |
| #21265 | wiltzius-openai | `3a00dd6c7b3dc7cea124400c9c8a8c38e73e99c9` | `3a00dd6c7b3dc7cea124400c9c8a8c38e73e99c9` | identical |
| #21266 | wiltzius-openai | `a439ec5dc4b657c7510d9f38f991a6298401a515` | `a439ec5dc4b657c7510d9f38f991a6298401a515` | identical |

**Zero head mutations across 2 consecutive ticks (~103 minutes total) on all 3 wiltzius PRs**, despite pakrym's #21260 (the cited foundation/blocker) having merged 89 minutes before tick close. Predict-at-Add.370 is **falsified**.

**Re-classification**: J′-triplet is **not waiting on rebase against foundation**; it is **waiting on review/maintainer**. The "frozen J-burst" sub-class (W17-synth-708-style) reasserts. Combined with pakrym's parallel 5-PR cascade on the same substrate family, the data suggests **wiltzius and pakrym are NOT coordinating**: wiltzius's PRs sit idle while pakrym writes 5 more PRs on overlapping core/thread/MCP territory. This is a **substrate-collision risk** — when wiltzius unfreezes and rebases, conflicts likely against pakrym's 5 OPEN PRs.

Predict at Add.371: at least 1 wiltzius PR closes-no-merge or force-pushes with substantial conflict resolution. Predict pakrym opens at most 1 more PR (cascade decay; 80m sustained burst is at exhaustion).

---

## NEW OBSERVATION 3 — "P-369.D MASSIVE EXTENSION: oss-agent-shin Z′_bot cluster grows to n≈11 events, AND bot picks up the Prometheus theme abandoned by ishaan-berri"

**Signature**: Add.369 cataloged 5 oss-agent-shin events on litellm (#27251 closed, #27252 open, #27253 closed, #27255 closed, #27258 open). Tick+1 adds:

| PR | author | title | createdAt | state |
|---|---|---|---|---|
| #27259 | oss-agent-shin | `Fix render smoke test module docstring` | 00:58:47Z | OPEN |
| #27261 | oss-agent-shin | `Fix Prometheus virtual key rate-limit gauges` | 01:10:59Z | CLOSED 01:17:50Z |
| #27265 | oss-agent-shin | `Fix Prometheus remaining rate limit gauges` | 01:23:48Z | OPEN |
| #27267 | oss-agent-shin | `Fix: add web search request Prometheus metric` | 01:26:08Z | CLOSED 01:27:09Z |
| #27268 | oss-agent-shin | `Fix Prometheus custom metadata label counts` | 01:29:38Z | OPEN |
| #27270 | oss-agent-shin | `Add admin diagnose endpoint` | 01:45:10Z | OPEN |

**Combined oss-agent-shin events Add.369+Add.370 = 11 PRs in ~90 minutes** (#27251, #27252, #27253, #27255, #27258, #27259, #27261, #27265, #27267, #27268, #27270). Of these: 5 CLOSED-no-merge (#27251, #27253, #27255, #27261, #27267 — note #27267 **closed within 61 seconds of opening**, matching W17-synth-98 sub-10s mass-close envelope at the upper edge), 6 OPEN, 0 MERGED.

**Cross-cluster crossover (NEW)**: 4 of these PRs are Prometheus-themed (#27261, #27265, #27267, #27268). At Add.369 we declared the prometheus-K cluster closed at n=8 because **ishaan-berri** stopped opening prometheus PRs. **The bot oss-agent-shin has now picked up the prometheus theme** — the K-cluster theme is alive, just on a different author-channel (bot, not human maintainer). This is **first observed cross-author-class theme transfer** (human-maintainer → bot-iteration on identical substrate).

**Sub-class addition**: Z′_bot_themed (bot iteration on a maintainer-abandoned theme). Distinct from Z′_bot baseline (bot opens speculative docstring PRs) by the substrate matching a recent human-cluster.

---

## NEW OBSERVATION 4 — "Add.369's K-cluster-closed-at-n=8 declaration FALSIFIED: ishaan-berri returns with #27260 in tick+1, K-cluster cardinality n≥9"

**Signature**: Add.369 declared **prometheus-K cluster definitively closed at n=8** based on ishaan-berri silence through #27258. Observed:

- **#27260** ishaan-berri `Fix Prometheus model-per-key rate limit gauges` (01:09:21Z OPEN) — K-cluster member 9, **after a 1h12m silence window** (last ishaan-berri prometheus open was #27248 at 23:57:22Z).

**K-cluster updated cardinality: n=9 (and counting), envelope now 20:26:04Z → 01:09:21Z = 4h43m**. Add.369's "author-fatigue confirmed, prefix-style bifurcation = termination" is **FALSIFIED**: bifurcation was a pause, not termination. The prefix-style framing (#27246/#27248 with `Fix Prometheus` capitalized) **continues at #27260** (also `Fix Prometheus` capitalized) — sub-cluster B is the active mode.

Combining with NO 3: K-cluster active members now span 2 author-channels:
- **K_human** (ishaan-berri): n=9, envelope 4h43m
- **K_bot** (oss-agent-shin Prometheus subset): n=4 (#27261, #27265, #27267, #27268), envelope ~20m, embedded inside Z′_bot

Predict at Add.371: ishaan-berri opens K-cluster member 10 within 30 minutes (cadence has dilated from initial ~6m intra-burst to ~70m+ inter-pause; member 10 either lands or cluster terminates).

---

## NEW OBSERVATION 5 — "codex bwrap-stack ships fully: bolinfest's #21255+#21256+#21257 all merge in-tick, follow-on patch from viyatb-oai opens within 24min — first cross-author bwrap follow-on of W18"

**Signature**: Add.368 noted bolinfest stacked PRs #21255, #21256, #21257 on standalone bwrap. In this tick:

| PR | author | merged-at | substrate |
|---|---|---|---|
| #21255 | bolinfest | 00:14:29Z | linux-sandbox: use standalone bundled bwrap |
| #21256 | bolinfest | 00:15:46Z | release: publish standalone bwrap artifacts |
| #21257 | bolinfest | 01:21:52Z | release/npm: bundle standalone bwrap on Linux |

3-PR stack lands with **inter-merge gaps 1m17s, 65m6s** (NOT same-second; sequential merge with manual gating between #21256 and #21257, possibly CI on artifact publishing). #21255/#21256 form a **same-minute merge doublet** (W17-synth-94-class).

**Cross-author follow-on**: viyatb-oai opens **#21285** `fix(bwrap): emit libcap after standalone archive` at **01:45:47Z** — **23m55s after #21257 merge**. First cross-author bwrap follow-on of W18; viyatb-oai is fixing a regression introduced by bolinfest's stack within the same tick. This is a **stack-incident pattern**: post-merge regression caught by different author within minutes.

Predict at Add.371: #21285 either merges fast (<30m) as a hot-fix, or bolinfest opens a parallel fix.

---

## NEW OBSERVATION 6 — "canvrno-oai recovery: same author who triggered Z′ #21267 (N/A, CLOSED 4m17s) opens clean PR #21274 16m later — Z′-author-recovery pattern (NEW)"

**Signature**: Add.368/369 documented #21267 (canvrno-oai, title `N/A`, CLOSED 23:18:45Z, lifespan 4m17s) as a Z′_human accidental-title event. In this tick:

- **#21274** canvrno-oai `[codex] Deduplicate invalid skill load warnings` opened **00:17:18Z** (16m33s after #21267 closed) — fully formed title, real substrate, OPEN-pending.

This is **first observed Z′-author-recovery within 20 minutes**: same author who fired a Z′ event returns with a clean intentional PR on a real substrate. Distinguishes Z′_human from Z′_bot: human Z′ authors **recover and contribute** within ~20m; bot Z′ authors (oss-agent-shin) keep generating Z′ events without recovery transition.

**Sub-class addition**: Z′_human_recovery (Z′-author opens clean PR within 1h of accidental close).

Predict at Add.371: #21274 either merges or receives a substantive review comment (canvrno-oai is an OAI maintainer, recovery PRs typically merge fast).

---

## NEW OBSERVATION 7 — "qwen B-A-M-N partial-falsification: cluster member #3819 CLOSED-no-merge at 22:51:44Z, splitting cluster into 3 OPEN + 1 CLOSED — first qwen mixed-state cluster"

**Signature**: Add.367/368 framed B-A-M-N as a 3-event same-author burst. Observed at this tick:

| PR | createdAt | state | resolution |
|---|---|---|---|
| #3819 | 2026-05-04T04:35:09Z | CLOSED 2026-05-05T22:51:44Z | no-merge (~42h lifespan) |
| #3848 | 2026-05-05T10:25:54Z | OPEN | — |
| #3849 | 2026-05-05T10:34:50Z | OPEN | — |
| #3856 | 2026-05-05T14:36:30Z | OPEN | — |

**Mixed-state cluster: 3 OPEN, 1 CLOSED-no-merge, 0 MERGED, all single-author over ~36h envelope**. The CLOSED member #3819 (`prevent duplicate MCP processes from concurrent discovery`) is **conceptually superseded** by cyphercodes/#3818 (`fix(core): coalesce MCP server rediscovery`, MERGED 2026-05-05T10:31:26Z) — **B-A-M-N's PR was closed because a different author's PR on the same substrate merged 12h earlier**. Substrate-collision close pattern.

This is **distinct from Z′ (accidental title) and Z (review-rejection)**: Z″ = closed-no-merge due to substrate collision with another author's merged PR. New sub-class.

Predict at Add.371: at least 1 of B-A-M-N's 3 OPEN PRs (#3848, #3849, #3856) merges or closes; cluster does NOT add a 5th member.

---

## NEW OBSERVATION 8 — "cross-carrier same-tick CLOSED-no-merge synchronicity: oss-agent-shin #27267 closed in 61s (litellm) coincides within 4 minutes with viyatb-oai #21285 OPEN (codex bwrap follow-on)"

**Signature**: At 01:26:08Z oss-agent-shin opens #27267 `Fix: add web search request Prometheus metric`; **61 seconds later** (01:27:09Z) it is CLOSED-no-merge. At 01:45:47Z (18m after) viyatb-oai opens #21285 on codex. Cross-carrier 4-minute window holds 2 distinct event-types:

- **litellm**: sub-2-minute Z′_bot mass-close member (matches W17-synth-98 sub-10s tail)
- **codex**: cross-author hot-fix follow-on (NO 5)

Both events are **maintainer-driven within tick close**: litellm's bot is in cleanup-sweep mode; codex has post-merge regression patrol. Different mechanisms, but both are **late-tick maintainer activity**, suggesting a cross-carrier **end-of-day quality-pass envelope** (~01:00-01:50Z UTC = ~18:00-18:50 PT, end of US working day for OAI/Berri maintainers).

This is the first ADDENDUM-level observation of a **maintainer-driven temporal envelope** that cuts across carriers. Predict at Add.371: similar end-of-day cluster on opencode/codex/litellm.

---

## NEW OBSERVATION 9 — "gemini-cli bot doublet on CI cost reduction: #26553 (00:03:39Z) + #26555 (01:00:16Z), 56m37s gap, both OPEN, distinct bot accounts but same theme"

**Signature**: Two gemini-cli bot PRs in this tick, both about CI cost reduction:

- **#26553** app/gemini-cli `# Actions Cost Reduction: CI Matrix and Pulse Optimization` opened 00:03:39Z OPEN
- **#26555** gemini-cli-robot `# Actions Cost Reduction: CI Matrix Optimization` opened 01:00:16Z OPEN

**Gap: 56m37s. Both OPEN, both with `# `-prefixed AI-style titles, distinct bot accounts (`app/gemini-cli` is a GitHub App, `gemini-cli-robot` is a User account)**. This matches the Z′_bot pattern but on **gemini-cli**, not litellm — first observation of the bot-iteration mode on a 2nd carrier.

Reference earlier #26518 `# CI Optimization: Path-Based Triggers to Reduce Action Spend` (gemini-cli-robot, CLOSED 17:57:17Z). **Three CI-cost bot PRs across 9 hours, 1 closed, 2 OPEN** — gemini-cli's bot is doing the same speculative-iteration pattern as litellm's oss-agent-shin, just on CI infrastructure rather than docstrings.

**Cross-carrier Z′_bot meta-pattern: 2/7 carriers (litellm, gemini-cli) now show bot-iteration cluster behavior**. opencode, codex, qwen-code, crush, goose remain bot-iteration-free in this window.

---

## NEW OBSERVATION 10 — "goose alexhancock doublet (#9028+#9029) and crush ilgax doublet (#2790-CLOSED+#2808-MERGED): same-author 2-PR documentation/UI patterns hold across ACP-stack carriers"

**Signature**: Two same-author 2-PR patterns visible in window:

- **goose**: alexhancock #9028 (`docs: improve goose2 AGENTS.md`, MERGED 19:31:00Z) + #9029 (`agents: add CLAUDE.mds to mirror AGENTS.mds`, MERGED 19:20:35Z) — **inter-merge gap 10m25s with #9029 merging FIRST despite being opened later** (#9028 opened 16:58:25Z, #9029 opened 18:46:55Z). Out-of-open-order merge pattern (W17-synth-90-style overlapping doublet).
- **crush**: ilgax #2790 (`fix: hooks silently fail on Windows`, CLOSED 15:14:39Z, no-merge) + #2808 (`fix(ui): prevent duplicate skills from rendering`, MERGED 00:33:09Z) — **mixed-resolution doublet**: same author has one CLOSED-no-merge and one MERGED in 24h.

**Both ACP-stack-adjacent carriers** (goose has explicit ACP layer work in tick — kalvinnchau #9030, #9040, jh-block #9023). The doublet shape recurs across carriers but with different resolution mixes:
- **goose**: 2 MERGED, out-of-open-order
- **crush**: 1 MERGED + 1 CLOSED-no-merge

This is the **same-author 2-PR shape** generalizing across small-carrier ACP-stack work, distinct from large-carrier (codex, litellm) cluster patterns which run n≥3.

Predict at Add.371: at least 1 more same-author 2-PR doublet on goose or crush.

---

## SUMMARY (Add.370)

- **Tick width 50m22s** — confirms unimodal centroid hypothesis from Add.369
- **PRs cited (unique)**: 7 carriers, ~95 unique PRs across the window and cross-tick references
- **Confirmations**: P-369.X (pakrym M_multi extension to n=5)
- **Falsifications**: P-369.A part 2 (wiltzius J′ unfreeze prediction); Add.369 K-cluster-closed-at-n=8 declaration; Add.369 P-368.E was already settled
- **New sub-classes**: M_multi_themed (NO 1), Z′_bot_themed (NO 3), Z″ substrate-collision-close (NO 7), Z′_human_recovery (NO 6), maintainer-end-of-day-envelope (NO 8)
- **Cross-carrier theme transfer (NEW)**: K-cluster (Prometheus) jumps from human ishaan-berri to bot oss-agent-shin within 1 tick (NO 3+4)
- **Predicts for Add.371**: wiltzius force-push or close (NO 2); pakrym cascade decay ≤1 more PR (NO 1); ishaan-berri K-member 10 within 30m (NO 4); #21285 hot-fix merges <30m (NO 5); #21274 canvrno-oai recovery PR merges (NO 6); B-A-M-N stays at 4 members (NO 7); end-of-day cross-carrier envelope recurs (NO 8); gemini-cli bot opens another CI-cost PR (NO 9); ≥1 more doublet on goose/crush (NO 10)
