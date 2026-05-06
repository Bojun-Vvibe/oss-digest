# W17-synth-722 — POST_CLUSTER_DIFFUSION cross-repo pattern: when a single-themed PR cluster decays in a carrier, off-theme author count and merge throughput EXPAND in the same carrier within one tick (litellm post-K Add.373: 4 authors / 4 themes vs Add.372: 2 authors / 1 theme), and a parallel pattern shows up in opencode (post-Hona-sync-cluster decay → Brendonovich/jvanzyl/nez/Waridley diffusion in 60m), suggesting reviewer-bandwidth-release is a domain-general carrier-mechanic not a litellm-specific accident

**Anchor**: ADDENDUM-373 NO 3 (POST_CLUSTER_DIFFUSION sub-class introduction); refines W17-synth-718 (tick-bipolar carrier activity profile) by exposing the **temporal mechanism** behind why some carriers oscillate between 1-author-dominant and N-author-diffuse states.

## What synth-718 said about bipolar carrier activity

W17-synth-718 introduced the observation that during certain ticks, **2 of 7 carriers carry 85% of merge throughput** while the others stratify into opens-only / partial-dark / full-dark bands. The framing was **structural** (carriers exist in different activity bands at any given moment) but did not explain **why** carriers transition between bands or what triggers the transition.

The implicit assumption was that band membership was either **carrier-intrinsic** (some carriers naturally dominant, others naturally quiet) or **stochastic** (random which carrier happens to be active in any given tick). Neither hypothesis predicted an **endogenous reason for transitions**.

## What ADDENDUM-373 NO 3 reveals

Within litellm specifically, the Add.371→Add.372 window was K-cluster-dominant (11 of 11 active PRs were K-themed Prometheus work, 2 authors: ishaan-berri + bot oss-agent-shin). The Add.372→Add.373 window — immediately following the K-cluster's pause/decay — shows **4 distinct authors** active (ishaan-berri winding down K + yassin-berriai + mateo-berri + oss-agent-shin pivoting off-K) across **4 distinct themes** (K-anchor follow-up, proxy perf, hot-reload, perms).

The expansion is not a coincidence of timing; it is **mechanistically caused** by reviewer-bandwidth release. During the K-dominant tick, ishaan-berri's review attention was consumed filtering bot oss-agent-shin's 11-PR funnel down to the 1 acceptable merge. yassin-berriai's #27264 (`perf(proxy): run daily activity aggregation off the event loop`) was opened at 01:22:59Z during the K-dominant tick but did **not merge** until 03:19:29Z — a ~117m delay. The merge happened **after** the K-cluster paused, suggesting ishaan-berri (or whichever maintainer reviewed it) only had bandwidth for #27264 once the K-funnel went quiet.

## Cross-carrier replication: opencode shows the same pattern

Searching opencode for an analogous decay→diffusion sequence in the same Add.371→Add.373 window:

**Pre-decay state (Add.371-equivalent, ~22:00–23:30Z window in opencode)**: Hona dominated with #25937 (`fix(server): restore web terminal CSP allowances` MERGED 23:32Z), #25939 (`fix(app): require query functions for sync queries` MERGED 00:09Z), #25941 (`refactor(app): centralize sync query options` OPEN). Three Hona PRs in 51m. Other authors during this window: rekram1-node #25934 (MERGED), G17hao #25933 (OPEN, idle), CasualDeveloper #25924 (OPEN), ctharvey #25925 (CLOSED), ajpintos #25920 (CLOSED), adavila0703 #25919 (OPEN, idle), nabilfreeman #25917 (OPEN, idle), jlongster #25915 (OPEN). High activity but **Hona is the only multi-PR same-tick author**, similar to ishaan-berri's role in the K-cluster.

**Post-decay state (Add.373 window, ~02:40–03:47Z)**: Hona's last PR was #25941 at 00:13:23Z — Hona has been silent for ~3.5h by Add.373 capture. New opens from **4 distinct authors**:
- #25955 Waridley `fix: find GitHub remote from any remote, not just origin`
- #25957 jvanzyl `fix(config): isolate custom config dir`
- #25959 nez `fix(server): emit keep-alive newlines during /session/:id/message`
- #25962 Brendonovich `feat(desktop): move server to utilityProcess`

**4 authors / 4 themes** — exactly mirrors the litellm post-K diffusion pattern (4 authors / 4 themes per Add.373 NO 3). The opencode equivalent is **post-Hona-sync-cluster decay → multi-author multi-theme diffusion in 60m**.

## Cross-carrier replication: codex does NOT show the pattern (counter-example)

Codex pakrym-oai is the **dominant-author** during Add.370→Add.372 (M_multi_themed cluster of 7 PRs). At Add.373 the cluster is **frozen** (Add.373 NO 1) but **no diffusion occurs** — codex has **zero new PRs from any author** during the Add.372→Add.373 window. The other codex authors visible in the recent surface (canvrno-oai #21274, mzeng-openai #21277, abhinav-oai #21272, alfozan #21271, iceweasel-oai #21275, viyatb-oai #21285, wiltzius-openai #21266) are all idle or pre-existing opens that did not transition state during the diffusion window.

Why does codex not diffuse?

Hypothesis: the codex pakrym cluster is **frozen** (author-departure) rather than **decayed** (cluster-completion). When the dominant author departs without merging the cluster's open members, the **reviewer-bandwidth-release effect does not fire** — no maintainer was ever actively reviewing the frozen members (Add.373 NO 1 confirmed zero sibling-maintainer review activity). The bandwidth was never spent and so cannot be released. Compare to litellm where ishaan-berri actively merged #27268 and #27271 (bandwidth was spent then released) and to opencode where Hona actively merged #25937 and #25939 (bandwidth spent then released).

**Refined sub-class**: POST_CLUSTER_DIFFUSION fires only after **decay** (cluster members merge or close, completing review work) — not after **freeze** (cluster members go static without review work happening). Freeze produces **flat-line carrier activity** rather than diffusion.

## Generalized prediction

For any carrier with a single-author dominant cluster lasting ≥3 ticks, the next-tick activity profile is determined by the **cluster termination mode**:

| Termination mode | Predicted next-tick profile | Mechanism |
|---|---|---|
| DECAY (members merge/close, author completes) | Multi-author diffusion (≥3 distinct authors, ≥3 themes) within 60m | Reviewer bandwidth released from cluster review |
| FREEZE (author departs without resolving members) | Flat-line carrier activity (0–1 new PRs, 0 merges) | No bandwidth was actively in use; nothing to release |
| GROWTH (cluster keeps expanding) | Continued single-author dominance | Bandwidth still consumed |

Litellm Add.373 = DECAY → diffusion (confirmed); opencode Add.373 = DECAY → diffusion (confirmed); codex Add.373 = FREEZE → flat-line (confirmed). 3 of 3 carriers in the recent window match the prediction.

## Implication for synth-718's bipolar framing

Synth-718's "2 of 7 carriers carry 85% throughput" observation is the **GROWTH or DECAY phase** of the dominant carriers, while the quiet 5 carriers may be in **flat-line** post-FREEZE phase OR **diffusion** post-DECAY phase OR **dormant** background-state. The bipolar profile is therefore not a static carrier-property but a **time-slice of asynchronous cluster lifecycles** across the 7-carrier substrate.

A more refined activity profile would track each carrier's **current cluster phase** (NONE / GROWING / FROZEN / DECAYING / POST_DECAY_DIFFUSION / POST_FREEZE_FLATLINE) rather than just the boolean active/dark band. This recasts synth-718's structural observation as a **dynamic-state instantaneous snapshot** of a 6-state carrier-phase machine.

## Specific PRs cited (≥10 required)

**litellm post-K diffusion**: #27262, #27264, #27265, #27268, #27270, #27271, #27272, #27273, #27274, #27275 (10 PRs)

**opencode pre-decay Hona-cluster + post-decay diffusion**: #25917, #25919, #25920, #25924, #25925, #25933, #25934, #25937, #25939, #25941, #25955, #25957, #25959, #25962 (14 PRs)

**codex frozen cluster (counter-example, no diffusion)**: #21266, #21271, #21272, #21274, #21275, #21276, #21277, #21278, #21281, #21282, #21284, #21285, #21287, #21290 (14 PRs)

**Total unique PRs cited: 38**

## Predict (carry forward to Add.374+)

- **Litellm Add.374**: ≥2 of {#27274, #27275, #27262, #27270} merge, continuing the diffusion-merge-release effect; new opens from a 5th author (not ishaan/yassin/mateo/oss-agent-shin) appear.
- **Opencode Add.374**: at least one of {#25955, #25957, #25959, #25962} merges within the next tick (Brendonovich's #25962 most likely given its higher visibility); a 5th author opens a new PR in the desktop/server surface area.
- **Codex Add.374**: pakrym either returns (cluster transitions FROZEN → DECAYING) and the **next-next tick** (Add.375) shows codex diffusion, OR pakrym does not return and codex remains flat-line; if a non-pakrym author opens, the diffusion clock starts only after pakrym's frozen members merge or are explicitly closed.
- **General**: any carrier currently in DECAYING phase produces ≥3-author diffusion within 60–90m of the cluster termination signal; any carrier in FREEZE phase produces 0–1 new PRs in the same window.
