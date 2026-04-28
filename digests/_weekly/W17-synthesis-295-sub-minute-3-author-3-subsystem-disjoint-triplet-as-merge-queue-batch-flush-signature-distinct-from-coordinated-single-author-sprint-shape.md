# W17 Synthesis #295 — Sub-Minute 3-Author 3-Subsystem Disjoint Triplet as Merge-Queue-Batch-Flush Signature Distinct from Coordinated Single-Author Sprint Shape

## Pattern statement

A **sub-minute multi-author multi-subsystem disjoint merge triplet** — defined as: n=3 merges into a single host repo, by 3 distinct authors, on 3 disjoint subsystems, all landing within a ≤60-second window — represents a structurally distinct merge-clustering class from any of W17's previously characterized single-author sprint shapes (synth #285 numerical-suffix series, synth #287 sprint-discipline-taxonomy, synth #289 fix-doublet-then-refactor-triplet, synth #293 descending-PR-number scoped-fix sub-cluster). The triplet shape suggests a **CI / merge-queue batch-flush mechanism** rather than a coordinated authorship behavior, and is observed for the first time in W17 at openai/codex Add.132 capture (2026-04-28T20:36:12Z–20:36:48Z, 36-second total span).

## Anchoring evidence — Instance 1: openai/codex 36-second 3-author 3-subsystem triplet

- openai/codex#20047 / `1de7a9bf6935984062b665e93a5fdf29a7853fbf` / 20:36:12Z / **euroelessar** (Ruslan Nigmatullin) / `app-server: allow remote_control runtime feature override` / subsystem: app-server runtime-feature-override
- openai/codex#20052 / `34d71d43eb87e16429a3945ec3de5799ea2153c0` / 20:36:44Z / **jif-oai** / `Make MultiAgentV2 wait minimum configurable` / subsystem: MultiAgentV2 wait-config
- openai/codex#20008 / `3b74a4d3b1afeeb1d70e4a63f62f7497aa6b9818` / 20:36:48Z / **bolinfest** (Michael Bolin) / `tui: use permission profiles for sandbox state` / subsystem: TUI permission-profile / sandbox

**Triplet metrics.**
- Total span: 36 seconds (20:36:12Z → 20:36:48Z).
- Inter-merge intervals: 32 seconds (#20047 → #20052), 4 seconds (#20052 → #20008).
- Author count: 3 (zero overlap).
- Subsystem count: 3 (zero overlap; app-server vs. MultiAgentV2 vs. TUI/sandbox).
- Title-class count: 3 (typed-prefix `app-server:` vs. declarative `Make X configurable` vs. typed-prefix `tui:`).
- PR-number range: #20008 to #20052 (44-PR-number span — does not exhibit numerical-suffix or descending-/ascending-monotonic ordering).
- Author-class span: vendor-recurring-external (euroelessar) + vendor-internal-OAI-suffix (jif-oai) + vendor-internal-non-suffix (bolinfest) — covers 3 of W17's 4 observed author-class buckets within 36 seconds.

## Structural distinctness from prior W17 sprint shapes

The 36-second 3-author 3-subsystem disjoint triplet differs from each prior sprint shape on at least 2 axes:

**vs. Synth #285 (jif-oai numerical-suffix ascending-feat sprint, n=4 across 1h06m).**
- Author-count axis: #285 single-author (jif-oai n=4); #295 multi-author (n=3 distinct).
- Subsystem-coupling axis: #285 single-subsystem (memories/house-keeping); #295 disjoint (app-server / MultiAgentV2 / TUI).
- Cadence axis: #285 sub-50m irregular spacing across n=4; #295 sub-60-second uniform spacing across n=3.

**vs. Synth #287 (kitlangton n=6 mixed httpapi/tui ladder, n=6 across ~1h30m).**
- Author-count axis: #287 single-author (kitlangton n=6); #295 multi-author.
- Subsystem-coupling axis: #287 partial-overlap (httpapi + tui, 2 subsystems); #295 fully-disjoint (3 subsystems, zero overlap).
- Cadence axis: #287 multi-tens-of-minutes spacing; #295 sub-60-second total span.

**vs. Synth #289 (single-author fix doublet then refactor surface axis triplet, single-author 35m compressed).**
- Author-count axis: #289 single-author; #295 multi-author.
- Span axis: #289 35-minute total span; #295 36-second total span (~58× tighter compression).

**vs. Synth #293 (descending-PR-number uniform-cadence intra-author scoped-fix sub-cluster, viyatb-oai n=3 across 1h59m).**
- Author-count axis: #293 single-author (viyatb-oai); #295 multi-author.
- PR-number-monotonicity axis: #293 descending-monotonic; #295 non-monotonic (#20047, #20052, #20008 = mixed-direction).

**Conclusion.** The 36-second 3-author 3-subsystem disjoint triplet is structurally distinct from every prior W17 sprint shape on at least 2 of the 4 axes (author-count, subsystem-coupling, cadence, PR-number-monotonicity). It deserves its own pattern-class label.

## Mechanism hypothesis: merge-queue batch-flush

The 4-second inter-merge gap between openai/codex#20052 and openai/codex#20008 (32 seconds vs. 4 seconds = 8× tighter) suggests that #20052 and #20008 were already approved and waiting in a merge-queue, and were flushed together by a single CI-queue-process tick. The 32-second leading gap (#20047 → #20052) is consistent with #20047 having triggered the queue-flush by completing its CI run, after which the next-in-queue #20052 and #20008 were flushed in rapid succession.

Alternative mechanisms considered and rejected:
- **Coordinated authorship.** Three distinct authors with disjoint subsystems and no shared title-class are very unlikely to be coordinating real-time merges across a 36-second window.
- **Race conditions in merge-button presses.** Three independent reviewers approving and merging within 36 seconds without queue-batching would require ~simultaneous human attention, which is implausible for distinct subsystem reviewers.
- **Single-author rebase-and-merge cascade.** Excluded because the 3 authors are distinct.

The merge-queue-batch-flush mechanism predicts that **the 4-second inter-merge gap between the 2nd and 3rd triplet members will be observable as a recurring sub-class signature** (i.e., when openai/codex flushes its merge-queue, ≥2 already-approved PRs will tend to land within ≤10 seconds of each other, and the leading gap will be longer because it represents the queue-trigger event).

## Predictive implications

- **Future triplet detection.** Future Add.NNN captures should look for ≤60-second windows containing n≥3 merges with multi-author multi-subsystem composition. If observed, anchor as additional instances of synth #295.
- **Repo-class signature.** Synth #295 is currently observed only at openai/codex; the prediction is that other repos with merge-queue-batch processes (sst/opencode possibly, BerriAI/litellm possibly) will exhibit the same triplet shape during their batch-flush events. block/goose and QwenLM/qwen-code (which have shown ≤2-author merge clusters in W17) are predicted NOT to exhibit triplet shape, consistent with absence of merge-queue-batching at those repos.
- **Falsifiability.** The synthesis is falsified if a future ≤60-second multi-author multi-subsystem triplet exhibits coordinated authorship signals (shared title-class, shared subsystem, monotonic PR-numbers) — which would suggest the triplet is sprint-coordination rather than queue-batch-flush.

## Linkage to prior synthesis lineage

- **Synth #285 / #287 / #289 / #293.** All four prior single-author sprint shapes are anti-instances of #295. Together with #295 they partition W17's observed merge-clustering shapes into single-author (#285/#287/#289/#293) and multi-author (#295) classes, with #295 being the first multi-author class.
- **Synth #292 (per-repo silence-break-follow-through divergence).** #292 characterized post-silence-break behavior at repo-aggregate granularity. #295 operates at sub-minute intra-tick granularity, complementary to #292's tick-aggregate granularity. The two synths jointly cover both intra-tick and inter-tick merge-clustering dynamics.
- **Synth #294 (post-sprint-completion silence-break authorship inversion).** #294 addressed sprint TERMINATION events. #295 is orthogonal — it addresses non-sprint, non-termination, queue-flush-driven events. Future synth could investigate whether queue-flush-driven triplets (synth #295) tend to occur near sprint termination boundaries (synth #294), suggesting a shared mechanism.

n=1 evidence instance so far (openai/codex Add.132 36-second 3-author 3-subsystem triplet). Synthesis stands at n=1 instance with a distinctive ≤60-second sub-minute 3-author 3-subsystem disjoint shape, awaiting n≥1 additional instance for confirmed elevation from candidate to confirmed pattern class.
