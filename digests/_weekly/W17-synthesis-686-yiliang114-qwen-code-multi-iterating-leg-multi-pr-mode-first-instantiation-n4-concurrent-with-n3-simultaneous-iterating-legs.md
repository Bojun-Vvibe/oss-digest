# W17-synth-686 — yiliang114 qwen-code multi-iterating-leg multi-PR-mode first instantiation: N=4 concurrent open PRs with N=3 simultaneous iterating legs (#3850 + #3853 + #3854 silent force-pushes within single tick) + #3855 fresh-open stable-leg, establishing sub-mode-4 sub-sub-class beyond synth-684's 1-iterating + k-stable topology

**Date**: 2026-05-05 (W17 tick post-Add.353)

**Carriers tied**: QwenLM/qwen-code (sole instantiator). Cross-carrier comparator: BerriAI/litellm (Sameerlite asymmetric multi-PR-mode reference).

**Anchor observation**: ADDENDUM-353 captured **yiliang114 (QwenLM/qwen-code) holding N=4 concurrent open PRs** where **3 of 4 received silent force-pushes within the same 56m40s tick window** (#3850, #3853, #3854 all force-pushed) and the 4th (#3855) is a fresh-open stable-leg. This is the **first W17 instantiation of multi-iterating-leg multi-PR-mode** — a structurally distinct sub-sub-class beyond synth-684's "1 iterating + k stable" topology. Synth-684 explicitly noted P-684.B (prior 0.30) as the falsifier predicate for this transition: "yiliang114 #3853 OR #3854 transitions from stable-leg to iterating-leg within next 2 ticks". P-684.B **over-realizes within tick-1**: BOTH #3853 AND #3854 transition simultaneously, AND #3850 receives second force-push, AND #3855 is added as fresh stable-leg.

**Specific anchor PRs (all QwenLM/qwen-code, all yiliang114)**:

1. **#3850** — `refactor(core): classify retry errors` — head trajectory **`f0229bf562d926f905302cfbfb33818867471e24`** (Add.351 fresh-open 11:30:36Z) → **`b044cc1fece2d62264241429ccf18e8996cc5510`** (Add.352, +≤86m33s) → **`09a62b2f2f6e5311b400a2d25fb153cb385e9e44`** (Add.353, +≤56m40s). **Cumulative 3-tick force-push trajectory**: 3 distinct heads across 3 ticks. **Iterating leg, sustained-iteration regime tick-2**. Surface: core/retry-error-classification.
2. **#3853** — `feat(installer): add hosted install release alias` — head **`a205e6ccdc0a7736b18ef92022360afce061f2fa`** (Add.352 fresh-open 11:58:37Z) → **`16a4af99828167806e3f2b7cccb6fa2bb511da51`** (Add.353, +≤56m40s). **First silent force-push** — stable→iterating transition. Surface: installer/hosted-alias.
3. **#3854** — `ci: add Qwen Code issue follow-up bot workflow` (title rewrite from `ci: add Qwen issue follow-up bot workflow`) — head **`87d9ec0100a12ec377ad40285e78a68761335171`** (Add.352 fresh-open 12:53:45Z) → **`53286381fcff3376d4c802c0a9d8502f6f0b0c47`** (Add.353, +≤56m40s). **First silent force-push with title rewrite** — stable→iterating transition with title-mutation sub-class signal (analogous to evawong-oai #21184 title-rewriting sub-mode-4 captured same tick — see Add.353 cross-references). Surface: ci/issue-bot-workflow.
4. **#3855** — `feat(installer): verify installation release assets` — head **`b1757402fdb39f68e3ed6d188d9b57bafa445143`** (Add.353 fresh-open 13:14:47Z). **Fresh-open stable-leg**. Surface: installer/release-asset-verification (adjacent to #3853 installer/hosted-alias surface but functionally orthogonal — verification of release-asset integrity vs alias for hosted-install).

**Topology comparison: Sameerlite vs yiliang114-Add.352 vs yiliang114-Add.353**:

| dimension | Sameerlite (synth-682) | yiliang114-Add.352 (synth-684) | yiliang114-Add.353 (this synth) |
|---|---|---|---|
| total open PRs (N) | 2 | 3 | 4 |
| iterating legs (k_iter) | 1 (#27185) | 1 (#3850) | **3** (#3850, #3853, #3854) |
| stable legs (k_stable) | 1 (#27177) | 2 (#3853, #3854) | **1** (#3855) |
| iterating-leg fraction (k_iter / N) | 0.50 | 0.33 | **0.75** |
| topology label | asymmetric-binary | asymmetric-ternary (1+2) | **multi-iterating-quaternary (3+1)** |
| layer-coherence | both runtime/integration | runtime + installer + ci (cross-layer) | core + installer + ci + installer (cross-layer, partial repeat) |
| thematic linkage | high (AWS-adjacent) | low (orthogonal) | low (orthogonal) |
| max single-leg force-push count | 2 (#27185 ×2) | 1 (#3850 ×1) | 2 (#3850 ×2 cumulative) |
| W17-novel sub-class introduced | yes (multi-PR-mode k=1 stable) | yes (multi-PR-mode k=2 stable) | **yes (multi-iterating-leg k_iter=3)** |

**Three structural distinctions of yiliang114-Add.353 vs prior multi-PR-mode instances**:

1. **Iterating-leg dominance**: k_iter / N = 0.75 inverts prior multi-PR-mode topology where k_iter / N ≤ 0.50. The "stable + iterating" model (1 stable + 1 iterating; 2 stable + 1 iterating) breaks at this instance — yiliang114-Add.353 is **iterating-dominated** with stable-leg as minority. This suggests multi-PR-mode topology is on a continuum from "stable-dominated personal-sprint" (synth-91, single-author triplet on disjoint surfaces, all stable) to "iterating-dominated active-sprint" (this synth, k_iter=3 with single fresh stable leg).
2. **Simultaneous transition**: Both #3853 and #3854 transition from stable to iterating **within the same tick window**. This is a **transition-burst** signature — not gradual one-leg-at-a-time iteration entry. Suggests the author is in a **batch-rebase / batch-rework** mode where multiple PRs get pushed concurrently (likely from a single local working session). Falsifiable: if force-push timestamps on the 3 PRs cluster within sub-minute window, batch-push hypothesis confirmed; if spread across the 56m tick, sequential-iteration confirmed. Add.353 captures show update-timestamps 13:16:39Z (#3850), 13:21:49Z (#3853), 13:44:49Z (#3854) — spread across 28m10s, ruling out same-second batch-push but consistent with **intra-session sequential-rework**.
3. **Title-rewriting sub-mode signal**: #3854 title rewrite (`Qwen issue follow-up bot` → `Qwen Code issue follow-up bot`) is structurally stronger than head-only force-push. Combined with evawong-oai #21184 title-rewrite captured same tick, **title-rewriting silent force-push is now a 2-author 2-carrier W17 phenomenon** (yiliang114 qwen-code + evawong-oai codex within Add.353).

**Cumulative 3-tick force-push trajectory on #3850**:

| tick | snapshot | head | inter-tick gap |
|---|---|---|---|
| Add.351 | 11:35:12Z | `f0229bf562d926f905302cfbfb33818867471e24` | (fresh-open at 11:30:36Z) |
| Add.352 | 12:57:09Z | `b044cc1fece2d62264241429ccf18e8996cc5510` | ≤86m33s |
| Add.353 | 13:53:49Z | `09a62b2f2f6e5311b400a2d25fb153cb385e9e44` | ≤56m40s |

**3-tick cumulative force-push count = 2** (parallels Sameerlite #27185 trajectory: Add.350→351 + Add.351→352 = 2 force-pushes; iteration-3 not yet captured for Sameerlite). yiliang114 #3850 is **second W17 PR** to reach cumulative force-push count = 2 within sub-mode-4 multi-PR-mode iterating-leg. The fact that the inter-force-push gap **contracts** (86m33s → 56m40s) is a **second-order signal**: yiliang114 is in **accelerating-iteration regime** rather than stable-iteration. Compares to Sameerlite #27185 trajectory: 71m45s → ≤90m (decelerating; or stable within bounds-uncertainty).

**Surface-family analysis across 4 yiliang114 PRs**:

| PR | surface family | layer | sub-package |
|---|---|---|---|
| #3850 | core / retry-error-classification | runtime | core |
| #3853 | installer / hosted-install-alias | installer | installer |
| #3854 | ci / issue-bot-workflow | ci | .github/workflows |
| #3855 | installer / release-asset-verification | installer | installer |

**Cross-layer dispersion**: 3 layers (runtime, installer, ci); 4 sub-packages (core, installer ×2, .github/workflows). The **#3853 + #3855 doublet on installer sub-package** is **first W17 multi-PR-mode instance with k=2 PRs on shared sub-package by single author** — synth-91 captured single-author triplet on **disjoint** surfaces; this is a **partial-overlap** variant (2 of 4 share installer sub-package). The 2 installer PRs are functionally orthogonal (alias vs verification) but co-located in installer/ tree — suggests yiliang114 is performing **installer-subsystem-coherent rework** with retry-classification core-fix and ci-workflow as adjacent stack.

**Update on synth-684 hypothesis posteriors**:

- **H1 (Sameerlite-specific personal-sprint, prior 0.20 in synth-684)**: **WEAKENED-FURTHER to prior 0.10**. yiliang114 multi-iterating-leg topology with cumulative 2 force-pushes on iterating-leg is structurally distinct from any "personal-sprint" pattern; multi-PR-mode is **mechanism**, not personal-sprint artifact.
- **H2 (multi-PR-mode is portable sub-mode-4 sub-class, prior 0.55 in synth-684)**: **STRENGTHENED to prior 0.75**. Within 2 ticks: synth-682 (Sameerlite first instance), synth-684 (yiliang114 second instance with k=2 stable), synth-686 (yiliang114 multi-iterating extension). Three distinct topologies established; multi-PR-mode is structurally rich, not single-pattern.
- **H3 (multi-PR-mode propagation rate ≥1 new instantiator per tick going forward, prior 0.20 in synth-684)**: **NOT-RESOLVED-NEUTRAL** — Add.353 did not introduce a new instantiator; existing instantiator (yiliang114) extended into new sub-sub-class. H3 distinguishes between "new authors enter multi-PR-mode" (not realized this tick) vs "existing authors extend multi-PR-mode topology" (realized via yiliang114). H3 needs reformulation: **H3' (prior 0.30)**: multi-PR-mode either propagates to new instantiator OR extends to new sub-sub-class topology per tick. Falsified if neither occurs in any single Add.X tick.
- **New H4 (prior 0.35)**: Multi-iterating-leg sub-sub-class (k_iter ≥ 3 for single author) is **carrier-portable** — instantiates on a non-qwen-code carrier within W17 remainder. Candidate carriers: BerriAI/litellm (Sameerlite if #27177 force-pushes converting to k_iter=2, then a 3rd PR force-pushes), openai/codex (jif-oai now has cross-tick triplet #21178/#21180/#21187 — if 2 of 3 force-push, k_iter=2; needs 3rd force-push for k_iter=3), sst/opencode (Hona desktop QUARTET if extended). Falsified if all next 4 ticks show single-carrier (qwen-code) multi-iterating-leg instances.
- **New H5 (prior 0.20)**: Multi-iterating-leg sub-sub-class **resolves toward MERGE-batch within next 4 ticks** (all 3 iterating PRs merge within ≤2-tick window of each other). Tests whether multi-iterating-leg is a **pre-merge convergence signal** (author iterating final-touches before batch-merge). Falsified if any of the 3 iterating PRs is closed-without-merge OR if merges spread across >2-tick windows.

**Predictions**:

- **P-686.A (prior 0.35)**: yiliang114 #3855 (currently sole stable-leg) transitions stable→iterating within next 2 ticks (silent force-push), bringing topology to **k_iter=4, k_stable=0** — first W17 single-author all-iterating multi-PR-mode. Falsified if #3855 head stable through Add.355.
- **P-686.B (prior 0.45)**: yiliang114 adds N=5 PR within next 2 ticks (extending QUINTET pattern). Surface candidates: another installer-subsystem PR (release-pipeline / version-bump), another ci-workflow PR (release automation), or core-rework PR adjacent to #3850 retry-classification. Falsified if yiliang114 holds at N=4 through Add.355.
- **P-686.C (prior 0.30)**: yiliang114 #3850 receives **third silent force-push within next 2 ticks** (cumulative 3 force-pushes on iterating leg, exceeding Sameerlite #27185 ceiling of 2). Falsified if #3850 head stable through Add.355.
- **P-686.D (prior 0.40)**: At least 1 of {#3850, #3853, #3854, #3855} MERGES within next 4 ticks. yiliang114 is qwen-code maintainer-class author; high MERGE-velocity baseline. #3850 (refactor/core) has highest merge-prior; #3854 (ci/workflow-add) has second-highest. Falsified if 0 merges by Add.357.
- **P-686.E (prior 0.25)**: Multi-iterating-leg sub-sub-class instantiates on a **non-qwen-code carrier** within W17 remainder (H4 test). Falsified if Add.354–360 captures show only qwen-code instances.
- **P-686.F (prior 0.55)**: Title-rewriting sub-mode-4 phenomenon (yiliang114 #3854 + evawong-oai codex #21184 within Add.353) extends to **N=3 author-instances within W17 remainder** (third title-rewriting silent force-push by a different author within next 5 ticks). Falsified if no third title-rewriting force-push captured by Add.358.
- **P-686.G (prior 0.30)**: Inter-force-push gap on #3850 contracts further in next iteration (continuing the 86m → 57m trajectory; next gap predicted ≤45m if linear contraction holds, or ≤30m if exponential contraction). Tests accelerating-iteration regime hypothesis. Falsified if next #3850 force-push gap ≥60m.

**Falsifiers consolidated**:

- If P-686.A and P-686.C both fail (yiliang114 multi-iterating-leg freezes), multi-iterating regime is **single-tick instance** comparable to opencode dispersion-burst single-tick character (synth-683 P-A REALIZED at Add.353 supports such bounded-regime patterns).
- If P-686.D REALIZES (≥1 merge within 4 ticks), multi-iterating-leg is a **pre-merge active-sprint convergence signal** — supports H5.
- If P-686.E REALIZES (carrier-portability), multi-iterating sub-sub-class is structural property of sub-mode-4 rather than yiliang114-specific.
- If P-686.F REALIZES (title-rewriting N=3), title-rewriting deserves its own sub-mode-4 sub-class taxonomy entry.

**Cross-carrier portability snapshot for multi-iterating-leg sub-sub-class**:

- Carriers with multi-iterating-leg instances (k_iter ≥ 2): QwenLM/qwen-code (yiliang114 N=3 iterating). N=1 carrier.
- Carriers with k_iter = 1 multi-PR-mode instances: BerriAI/litellm (Sameerlite k_iter=1, k_stable=1). N=1 carrier.
- Carriers with no multi-PR-mode instances: sst/opencode, openai/codex, google-gemini/gemini-cli, block/goose, charmbracelet/crush. N=5 carriers.
- **Multi-iterating-leg portability rate**: 1 of 7 carriers (14.3%) within W17 to-date. Below sub-mode-4 base-portability (4 of 7 carriers per synth-679 saturation). Multi-iterating-leg is **rarer sub-sub-class** than baseline sub-mode-4.

**Cross-references**: directly extends W17-synth-684 (multi-PR-mode second instantiation by yiliang114 with k_stable=2) by transitioning the 2 stable legs to iterating + adding new stable-leg + sustaining iteration on original iterating-leg; extends W17-synth-682 (multi-PR-mode first instantiation by Sameerlite asymmetric-binary topology); orthogonal to W17-synth-679 (cross-carrier sub-mode-4 saturation — synth-679 is breadth-first, synth-686 is depth-first within single author); contrasts W17-synth-91 (single-author triplet on disjoint surfaces, all stable) by introducing iterating-leg dominance; orthogonal to W17-synth-685 (cross-carrier security-cluster — synth-685 is multi-author multi-carrier single-tick coincidence; synth-686 is single-author single-carrier multi-tick concentration).
