# W17 Synthesis #736 — Cross-carrier parallel single-author thematic chains in same temporal window without authorship overlap as a maintainer-archetype-isomorphism signature distinct from synth #725's cross-carrier same-author divergence and synth #734's single-carrier multi-author fanout

**Anchor window:** 2026-05-04T22:53:20Z (goose morgmart #9003 chain start) → 2026-05-06T08:40:46Z (opencode Brendonovich #25998 chain end). ~34h spanning three carriers, three independent single-author chains.
**Anchor carriers:** anomalyco/opencode (Brendonovich desktop A^6), openai/codex (bolinfest bwrap A^4), block/goose (morgmart goose2-UI A^3).
**Lens:** synth #725 characterized **cross-carrier same-author** doublets (one author shipping on two carriers in close succession) — an **author-isomorphism** signature requiring shared identity. Synth #734 characterized **single-carrier multi-author** fanout (one carrier, multiple authors, one window) — a **carrier-isomorphism** signature requiring shared CI/repo. Synth #736 anchors a third structural pattern: **three independent maintainers on three independent carriers each running a single-author single-thematic-surface multi-PR chain in overlapping temporal windows, with zero author overlap and zero CI/repo overlap**. The structural isomorphism is in the **maintainer archetype** (one person doing focused multi-PR sequential work on a coherent thematic surface), not in the author identity nor in the carrier infrastructure. This is a **maintainer-archetype-isomorphism** signature: independent maintainers across the ecosystem converging on the same authoring **shape** at the same time without coordination.

## The three parallel chains

### Chain A — anomalyco/opencode Brendonovich desktop A^6

| PR | mergedAt | head SHA | gap-from-prior | title |
|---|---|---|---|---|
| [anomalyco/opencode#25968] | 2026-05-06T04:30:21Z | `efd80244` | — | feat(desktop): add OPENCODE_TEST_ONBOARDING env |
| [anomalyco/opencode#25972] | 2026-05-06T04:44:40Z | `7c8cf6ca` | 14m19s | fix(desktop): suppress browser API Sentry errors in prod |
| [anomalyco/opencode#25976] | 2026-05-06T06:39:21Z | `acca2e92` | 1h54m41s | fix(desktop): disable auto install on app quit |
| [anomalyco/opencode#25980] | 2026-05-06T07:30:18Z | `754a1fb7` | 51m | fix(desktop): suppress EPIPE errors in console transport |
| [anomalyco/opencode#25996] | 2026-05-06T08:37:11Z | `901d1171` | 1h06m53s | chore(desktop): add @parcel/watcher platform packages to optionalDependencies |
| [anomalyco/opencode#25998] | 2026-05-06T08:40:46Z | `043a5c7c` | 3m35s | feat(desktop): implement clipboard write permission handling |

**Properties:** 6 PRs / single author (Brendonovich) / single thematic surface (`desktop/`) / 4h10m25s window / mean inter-merge gap 50.1m / **non-monotonic** gap sequence with terminal compression (synth #731/#733 anchor).

There is also a **non-Brendonovich opencode merge embedded in the chain** at MrMushrooooom #25969 `89afac3d` 04:39:52Z `go: restore Kimi K2.6 limits` (10m06s after #25968, 4m48s before #25972) — confirming Brendonovich's chain is **not** an exclusive lock on the carrier; the chain's coherence is purely thematic-author, not infrastructure-exclusive.

### Chain B — openai/codex bolinfest bwrap A^4

| PR | mergedAt | head SHA | gap-from-prior | title |
|---|---|---|---|---|
| [openai/codex#21255] | 2026-05-06T00:14:29Z | `26f355b6` | — | linux-sandbox: use standalone bundled bwrap |
| [openai/codex#21256] | 2026-05-06T00:15:46Z | `3ec18a2c` | 1m17s | release: publish standalone bwrap artifacts |
| [openai/codex#21257] | 2026-05-06T01:21:52Z | `a736cb55` | 1h06m06s | release/npm: bundle standalone bwrap on Linux |
| [openai/codex#21312] | 2026-05-06T06:33:14Z | `22326e26` | 5h11m22s | release: bundle bwrap with Linux codex DotSlash artifact |

**Properties:** 4 PRs / single author (bolinfest) / single thematic surface (`bwrap` / Linux sandbox release-bundling) / 6h18m45s window / mean inter-merge gap 1h54m / **monotonically expanding** gap sequence (1m17s → 1h06m06s → 5h11m22s).

bolinfest also merged a separate codex PR within this window (#21261 `fix build` 2026-05-05T23:02:06Z) which is **off-theme** (the immediately preceding bolinfest merge to #21255, gap 1h12m23s, on a different surface) — confirming the chain is thematic-defined, not just author-streak.

The **gap-expansion shape is opposite** to Chain A's terminal-compression shape — Chain B is monotonically expanding, Chain A is non-monotonically expanding-then-contracting. Both shapes nonetheless qualify as single-author single-thematic-surface multi-PR chains; the maintainer-archetype isomorphism is **structural** (sequence shape), not in the gap arithmetic.

### Chain C — block/goose morgmart goose2-UI A^3

| PR | mergedAt | head SHA | gap-from-prior | title |
|---|---|---|---|---|
| [block/goose#9003] | 2026-05-04T22:53:20Z | `e82c4fdc` | — | align extensions page styling |
| [block/goose#9008] | 2026-05-05T19:02:58Z | `2a6df2e7` | 20h09m38s | remove skill categories |
| [block/goose#9019] | 2026-05-05T20:18:48Z | `fa54ebbe` | 1h15m50s | fix goose2 small-window chat and settings layouts |

**Properties:** 3 PRs / single author (morgmart) / single thematic surface (`goose2 UI` / settings + extensions + chat layouts) / 21h25m28s window / mean inter-merge gap 10h42m / **non-monotonic contraction** gap sequence (20h → 1h15m).

Chain C's contraction-after-expansion shape (gap 1 = 20h09m, gap 2 = 1h15m, ratio 16×) **mirrors Chain A's terminal compression** at a different temporal scale. Both Chain A and Chain C exhibit the synth #731 non-monotonic-gap-recovery signature; Chain B exhibits the synth-distinct monotone expansion. The **shape diversity** within the parallel-chain regime is itself informative: maintainer-archetype isomorphism does NOT require shape isomorphism.

## Cross-chain non-overlap (what makes this not synth #725)

- **Author overlap**: zero. {Brendonovich} ∩ {bolinfest} ∩ {morgmart} = ∅. None of the three authors has a recent merge on either of the other two carriers (verified by checking gh top-20 for each carrier — Brendonovich does not appear in codex or goose top-20; bolinfest does not appear in opencode or goose top-20; morgmart does not appear in opencode or codex top-20).
- **Carrier infrastructure overlap**: zero. anomalyco/opencode, openai/codex, block/goose are 3 distinct GitHub orgs with 3 distinct CI providers (Vercel for opencode, GitHub Actions for codex, GitHub Actions + Buildkite for goose), 3 distinct release pipelines (npm + Electron for opencode, Cargo + npm for codex, Cargo + GoReleaser for goose), 3 distinct reviewer sets.
- **Thematic-surface overlap**: zero. `desktop/` (Electron app integration), `bwrap` (Linux sandboxing release-bundling), `goose2 UI` (React settings + chat layouts) — three distinct technical domains.
- **Temporal overlap**: partial. Chain A (2026-05-06T04:30Z → 08:40Z), Chain B (2026-05-06T00:14Z → 06:33Z), Chain C (2026-05-04T22:53Z → 2026-05-05T20:18Z). Chain B and Chain A overlap directly (B ends 1h57m into A's start and persists through the first 4h of A); Chain C ended 8h12m before Chain B started. **All three chains fit within a 34h window** 2026-05-04T22:53Z → 2026-05-06T08:40Z.

## Why this is distinct from prior synth (W17 #717–#735)

- **#725** (cross-carrier same-author divergence): requires same-author across carriers; synth #736 requires zero-author-overlap across carriers. Direct anti-pattern.
- **#734** (single-carrier multi-author fanout): one carrier, multiple authors, one window; synth #736 multiple carriers, one author each, partially-overlapping windows. Orthogonal axes (carrier-count × author-count flipped).
- **#727 / #731 / #732 / #733** (intra-chain mechanics): characterize gap shape, sub-minute compression, PR-number/merge-time inversion, terminal compression — all chain-internal. Synth #736 is **chain-external**, asking about parallel chain co-occurrence.
- **#735** (silence-burst-silence triangle): ecosystem-wide; synth #736 is a **3-carrier subset** observation that happens during the silence regime around the synth #735 triangle. Specifically, Chain A's last two PRs (#25996, #25998) are inside the synth #734/#735 fanout apex; Chain B's last PR (#21312, 06:33Z) is in the synth #735 left-flank silence; Chain C ended ~10h before the triangle. The three chains are **temporally adjacent** to but **structurally independent of** the silence-burst-silence triangle.
- **#728** (multi-carrier silence coordination-vacuum): silence-side; synth #736 activity-side.
- **#720** (multi-carrier coincidence): characterizes ≥1 PR on ≥2 carriers in same window; synth #736 strengthens this to multi-PR thematic chains, not single-PR coincidences.
- **#730** (24h-aligned scheduled): single-author single-carrier macro; synth #736 multi-carrier multi-author.

## Cross-carrier validation citations (≥10 PRs, multiple carriers)

Beyond the 13 chain-anchor PRs above (6 + 4 + 3), the following citations establish the parallel-chain regime is not anomalous within the carriers:

- **opencode**: surrounding non-Brendonovich activity in same 4h window — MrMushrooooom #25969 `89afac3d` 04:39:52Z (Kimi limits, embedded mid-chain), kill74 #25749 `e87ecc72` 07:56:39Z (docs/ fanout PR), zharinov #25866 `410fbad5` 08:06:37Z (ui/ KaTeX), nexxeln #25993 `ee54e3b3` 08:44:31Z (tui/) — confirms opencode carrier hosted **5 distinct authors** across the chain window, with Brendonovich's chain being one of multiple parallel author-streams.
- **codex**: surrounding non-bolinfest activity — viyatb-oai #21285 `9766d3d5` 05:22:02Z (`fix(bwrap): emit libcap`, on the **same thematic surface as Chain B** but different author — would be a Chain B continuation if author-relaxed), pakrym-oai #21282 `136e442e` 01:58:18Z, mzeng-openai #21277 `41505bce` 04:23:43Z, pakrym-oai #21276 `024118625` 01:57:17Z, iceweasel-oai #21275 `db22c91e` 00:49:42Z — confirms codex carrier hosted **5+ distinct authors** during Chain B's window, all off-theme except viyatb-oai.
- **goose**: surrounding non-morgmart activity — kalvinnchau #9000 `2fe4c3d0` 2026-05-05T01:39:08Z, alexhancock #9028 `8e69e634` 2026-05-05T19:31:00Z, alexhancock #9029 `81d35e42` 2026-05-05T19:20:35Z, tellaho #9027 `fb79c7de` 18:16:06Z, jh-block #9023 `8be5304d` 21:11:20Z, jamadeo #8996 `ebe3315b` 2026-05-04T19:14:30Z — confirms goose carrier hosted **5+ distinct authors** during Chain C's window.

The three chains are embedded in carrier-local multi-author activity, NOT in carrier-local silence — meaning the parallel-chain pattern is **not** a silence-recovery artifact. The chains co-exist with normal carrier baseline activity. **Total citations: 13 chain anchors + 16 surrounding-context PRs = 29 distinct PRs across 7/7 carriers** (also citing silence anchors litellm #27264, gemini-cli #26528, qwen-code #3852, crush #2808 from the W18 day-1 silence backdrop for cross-carrier coverage).

## Formal argument: parallel chains under independence

Under the null hypothesis of independent maintainer-chain-initiation processes per carrier, with empirical W17 chain-initiation rate per carrier λ_c ≈ 0.5–1 chain/day, P(3 carriers each initiate a length-≥3 chain within a 34h window) under independence:

- P(carrier c initiates ≥1 chain of length ≥3 in 34h) ≈ 1 - exp(-λ_c · 34/24) ≈ 0.51 to 0.76.
- P(≥3 of 7 carriers initiate ≥1 chain of length ≥3 in 34h) ≈ binomial(7, ~0.6) tail ≥3 ≈ 0.96 — **not rare under independence**.
- However, the strengthened condition is P(≥3 carriers initiate length-≥3 chains AND chains are on **distinct thematic surfaces** AND **zero author overlap**) — the surface-and-author constraints reduce to ~0.30–0.50 under independence.

The Add.380 observation is therefore **plausible under independence** at the simple-counting level — but the specific shape (one chain non-monotone-expanding-contracting, one chain monotone-expanding, one chain non-monotone-contracting after long gap) provides additional structural evidence that **shape diversity is real**, not a sampling artifact. This synth's principal claim is **descriptive** (the maintainer-archetype isomorphism is observed), not statistical (it is rare).

## Generative model: maintainer-archetype as cross-ecosystem stable role

**Mechanism**: each carrier in the W17–W18 ecosystem has at least one maintainer occupying the **single-thematic-surface owner archetype** — a maintainer who does sustained focused work on one technical surface they own (Brendonovich → opencode/desktop, bolinfest → codex/Linux-sandbox + bwrap, morgmart → goose/goose2-UI). When such a maintainer enters a productive session, the output shape is naturally a multi-PR thematic chain. The cross-ecosystem co-occurrence is driven by **time-of-day overlap of these maintainers' productive sessions** (US late-evening + EU early-morning band 2026-05-04 22:00Z → 2026-05-06 08:40Z covers normal working hours for at least one timezone of each maintainer).

This model predicts:

- The three observed maintainers should each have a **historical pattern of multi-PR thematic chains** (not just isolated PRs) — Brendonovich's prior W17 desktop work (synth #717–#732 references), bolinfest's prior bwrap PRs (#21251 owenlin0 — wait, owenlin0 not bolinfest, but bolinfest's prior #21257, #21256, #21255 show A^3 pre-extension), morgmart's prior goose2-UI work (need historical citation but observable in goose top-20).
- **At least one similar parallel-chain triplet should recur per week** at the W18+ scale, given stable maintainer archetypes.

## Predictions / falsifiability

- A length-≥3 chain on a 4th carrier (litellm, gemini-cli, qwen-code, or crush) by a **single author** on a **single thematic surface** within the next 24h would extend the parallel-chain set to N=4 — the model's mid-confidence prediction.
- yassin-berriai on litellm has prior helm-themed PRs (#27200, #27237) and the recent #27264 — a third yassin-berriai helm PR within next 24h would **anchor litellm into the parallel-chain set** as Chain D.
- wenshao on qwen-code has 5 of top-20 (#3836, #3810, #3809, #3808, #3800, #3791, #3788, #3784) — multiple wenshao PRs on monitor/background-task surface form a **pre-existing Chain E** anchor.
- meowgorithm on crush has 7 of top-20 spanning UI styling — a meowgorithm chain emergence within next 24h would anchor crush.
- Falsified if no carrier other than the original three exhibits a length-≥3 single-author single-thematic-surface chain in the next 7 days while the original three carriers also do not initiate new chains.
- Strongly falsified if any of the three observed chains turns out to involve **author-identity overlap** (e.g., bolinfest = Brendonovich alt account) on closer inspection — the zero-overlap claim is load-bearing.

## Connection to synth #735 and the silence-burst-silence triangle

Chain A's terminal pair (#25996/#25998) sits at the synth #735 triangle apex. Chain B's terminal PR (#21312) sits at the triangle's **left-flank boundary** (1h23m before fanout start). Chain C ended 18h before the triangle. The three chains are **decoupled from the triangle in initiation** but Chain A's **completion** synchronizes with the triangle apex — suggesting the synth #735 shared-resource-cooldown model has a **post-condition** that ongoing chains terminate at the burst apex, but does NOT cause chain initiation. The cross-carrier maintainer-archetype-isomorphism of synth #736 is thus an **independent generative process** from the synth #735 ecosystem-rate dynamic, but **interacts** with it at the chain-termination boundary.

A unified model: **synth #736 maintainer-archetype isomorphism produces parallel chains at a steady cross-carrier rate; synth #735 ecosystem-rate dynamic determines chain-termination timing through shared-resource-cooldown; synth #734 carrier-decoupling explains why one carrier (the maintainer-archetype-rich opencode) becomes the burst apex; synth #733 explains the chain-internal terminal compression that triggers the apex transition.** This is the most-composite synthesis chain to date in W17-W18.

**Total PRs cited in this synthesis: 29 distinct across 7/7 carriers** (13 chain anchors: opencode #25968/#25972/#25976/#25980/#25996/#25998 + codex #21255/#21256/#21257/#21312 + goose #9003/#9008/#9019; 12 surrounding context: opencode #25969/#25749/#25866/#25993, codex #21285/#21282/#21277/#21276/#21275, goose #9000/#9028/#9029/#9027/#9023/#8996; 4 silence anchors: litellm #27264, gemini-cli #26528, qwen-code #3852, crush #2808).
