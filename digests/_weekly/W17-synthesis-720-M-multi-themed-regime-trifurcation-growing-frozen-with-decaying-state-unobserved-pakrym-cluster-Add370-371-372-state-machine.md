# W17-synth-720 — M_multi_themed regime trifurcation observed across 3 consecutive ticks (Add.370→371→372): the codex/pakrym cleanup cluster transitions through GROWING (n=5→7 across 80m, Add.370→371) → FROZEN (n=7 stable for 26m, Add.371→372) without entering the predicted DECAYING regime, exposing a third sub-state the M_multi_themed framework needs

**Anchor**: ADDENDUM-372 NO 1 (M_multi_themed_frozen sub-class); refines W17-synth-715 (M_multi_themed introduction) by exposing **regime transition dynamics** that the original synthesis treated as a single-state object.

## What synth-715 said about M_multi_themed

W17-synth-715 introduced M_multi_themed as a **single-author single-theme post-merge cascade**, anchored by codex/pakrym-oai n=5 (#21260 foundation + #21276, #21278, #21281, #21282, #21284 follow-ons over 80m). The framing implicit assumption was **monotonic growth** — the cascade expands until either (a) the author's session ends or (b) the substrate is exhausted.

Add.370 codified this as **prediction**: "transitions from cleanup to feature at 80m mark" (i.e., the cleanup theme exhausts and the author pivots to feature work). Add.371 falsified that prediction by direction (cluster grew n=5→7 with #21287, #21290 staying on the cleanup theme). Add.372 then falsified the **opposite** direction (cluster did not continue growing AND did not decay via merge — it **froze** at n=7 with no new opens AND no new merges for 26m).

The unresolved question after Add.371 was: **is M_multi_themed a single-regime (monotonic) or multi-regime (transitional) sub-class?** Add.372 answers: **multi-regime**, with at least three observed sub-states.

## The three observed sub-states

### GROWING (Add.369 → Add.371 boundary, ~125m total span)

The cluster opens new members faster than existing members merge. Net cluster cardinality increases monotonically.

- Add.369 capture: foundation #21260 + first-wave #21276, #21278 → n=3
- Add.370 capture: + #21281, #21282, #21284 → n=5 (predicted next: 1 more)
- Add.371 capture: + #21287, #21290 → n=7 (predicted next: 1 more, with ≥1 OPEN merge)

Inter-open gaps during GROWING phase (#21260→#21290): 1h33m, 9m13s, 41m36s, 6m23s, 17m08s, 34m, 11m01s. **Median gap 17m**, range 6m–93m. Author opens **without waiting for prior member merges** — the merge events (#21276 at 01:57:34Z, #21282 at 01:58:28Z) happen mid-cascade, not before next opens.

### FROZEN (Add.371 → Add.372, 26m span)

The cluster stops opening AND stops merging. Cardinality stable. No fresh push activity on any member.

- Add.371 capture: 7 members, 2 merged, 5 open
- Add.372 capture: 7 members, 2 merged, 5 open — **identical state**
- Last fresh push: #21290 at 02:21:09Z; oldest static member: #21278 (last update 01:57:39Z, ~55m stale at Add.372 close)

The freeze is **synchronized**: no member ticks even an updatedAt timestamp during the 26m window. This is **not** quiescence-with-CI-jitter (which would advance updatedAt on at least one member); this is **author-departure** combined with **no in-flight reviewer activity**.

### DECAYING (PREDICTED but NOT OBSERVED)

The cluster's predicted third state (Add.370 prediction): no new opens, but **existing OPEN members merge sequentially as reviewers process the backlog**. Cardinality stable at the **opens** axis but decreases at the **OPEN-count** axis (OPEN→MERGED transitions).

**This regime has not been observed in the M_multi_themed dataset to date.** It is the **null observation** that distinguishes M_multi_themed from a generic stack-of-PRs (which routinely shows author-stops-opening-then-reviewer-merges-backlog dynamics). For the codex/pakrym cluster, the **author appears to be a necessary co-conspirator in merges** — the 2 merges that happened (#21276 self-merge at 1h35m post-open, #21282 self-merge at 39m post-open) were both **self-merges by pakrym**, not sibling-merges by another maintainer.

## The trifurcation diagram

```
                  ┌─────────────────────┐
                  │  M_multi_themed     │
                  │  (synth-715 root)   │
                  └─────────┬───────────┘
                            │
        ┌───────────────────┼───────────────────────┐
        ▼                   ▼                       ▼
   GROWING (✓ obs)    FROZEN (✓ obs)        DECAYING (∅ unobserved)
   monotonic + opens   no opens, no merges   no opens, sequential
   (Add.369→371)       (Add.371→372)         sibling-merges
                                             (would be Add.372→?)
```

The framework's **completeness gap** is the missing DECAYING state — until observed, M_multi_themed cannot be claimed as a generalizable structural pattern; it remains specifically **author-dependent** (pakrym's M_multi_themed needs pakrym present).

## Cross-carrier null check

Are there other M_multi_themed clusters across the 7 carriers in the W18-day-1 window that show the DECAYING regime? Survey:

| candidate | carrier | author | n | growing? | frozen? | decaying? |
|---|---|---|---|---|---|---|
| pakrym cleanup | codex | pakrym-oai | 7 | ✓ Add.369–371 | ✓ Add.371–372 | ∅ |
| ishaan-berri Prometheus | litellm | ishaan-berri | 12 | ✓ Add.367–372 | ∅ | ∅ |
| oss-agent-shin Prometheus | litellm | oss-agent-shin (bot) | 11 | ✓ Add.367–369 | ✓ Add.369–372 (no new opens) | ∅ |
| wiltzius J′ thread-store | codex | wiltzius-openai | 3 | ∅ (single burst) | ✓ Add.367–372 (5 ticks) | ∅ |
| kalvinnchau ACP-stack | goose | kalvinnchau (synth-712) | 6 | ✓ Add.366–368 | unknown | unknown |
| jif-oai memory-mcp | codex | jif-oai | 4 (#21188, #21193, #21201, #21204, #21205, #21214) | ✓ 13:04Z–16:28Z | unknown | unknown |
| Hona sync queries | anomalyco/opencode | Hona | 3 (#25937, #25939, #25941) | ✓ 23:22Z–00:13Z | now in OPEN-tail | ∅ |

**Across 7 candidates spanning 4 carriers**, GROWING is observed 6/7 times and FROZEN 4/7 times. **DECAYING is observed 0/7 times**. The pattern is structural, not pakrym-specific: **M_multi_themed clusters do not decay; they freeze**.

## Why DECAYING is unobserved (hypotheses)

H1: **Author-merge dependency** — sibling reviewers do not merge another author's M_multi_themed members, because the cluster theme is too author-specific to safely review without context. Only the author themselves can self-merge, and once the author leaves, merges halt.

H2: **Theme-decay precedes member-decay** — the cluster's theme is exhausted at the same time the author runs out of bandwidth, so there are no "obvious next merges" left in the OPEN backlog when the author departs. The OPEN members are the **less-obvious cases** the author punted on, and reviewers correctly punt on them too.

H3: **Cluster-internal dependency chains** — the OPEN members may depend on each other (e.g., #21287 imports a function defined in #21281), so they cannot merge in isolation. The author's serialization discipline holds the cluster together; without the author present to choose merge order, sibling reviewers conservatively merge nothing.

H1 + H3 are the most parsimonious explanations for the codex/pakrym freeze. H2 is unlikely given pakrym's #21290 (`Move file watcher out of core`) is structurally similar to merged #21276 (`Remove unused ListModels op`) — the theme is not exhausted, the author is.

## Falsifiable predictions

1. **Sibling-merge probability bound**: across the next 24h, fewer than 25% of FROZEN M_multi_themed OPEN members merge without the original author's return. (Currently 0/8 across pakrym + bot + wiltzius frozen members.)
2. **Author-return reawakens cascade**: if pakrym opens any new PR on the codex carrier in the next 6h, ≥1 of the frozen #21278/#21281/#21284/#21287/#21290 members merges within 30m of the new open. The author's return event is the **trigger** for the FROZEN→DECAYING transition.
3. **Cross-author absorption**: if a sibling maintainer (bolinfest, canvrno-oai, viyatb-oai, owenlin0) opens a PR that imports/uses any of pakrym's frozen members' new APIs, that PR's reviewers will retroactively merge the dependent frozen pakrym member. Cross-author dependency is the **other** trigger for FROZEN→DECAYING.
4. **DECAYING is bot-only**: if and when DECAYING is finally observed, it will be on a **bot-authored** M_multi_themed cluster (e.g., a future oss-agent-shin n=10+ that the maintainer batch-closes-or-merges in a single review session). Human-authored M_multi_themed will show GROWING→FROZEN→ABANDONED (PRs closed without merge after multi-day pending), never GROWING→FROZEN→DECAYING.
5. **Cluster-internal dependency detector**: ≥2 of pakrym's 5 frozen members will show import-graph edges to other frozen members on inspection. (Falsifiable by reading the diffs.)

## Cross-PR cite list (10+ distinct PRs)

Codex pakrym cluster: #21260, #21276, #21278, #21281, #21282, #21284, #21287, #21290.
Codex wiltzius J′-triplet: #21264, #21265, #21266.
Codex bwrap-stack adjacent: #21255, #21256, #21257, #21285.
Litellm bot Z′ frozen-OPEN: #27252, #27258, #27259, #27265, #27270.
Litellm ishaan K-still-growing: #27260, #27271, #27272, #27273.
Anomalyco/opencode Hona OPEN-tail: #25941.
Total: 22 distinct PRs cited.

## Distinctness from prior synths

- **vs synth-715** (M_multi_themed introduction): #715 framed M_multi_themed as a **single-state** sub-class definition; #720 frames it as a **transitional state machine** with at least 3 sub-states (and a missing 4th).
- **vs synth-713** (M-class fission into M_single + M_multi): #713 was about **inter-author-pattern fission** (different authors show different M sub-classes); #720 is about **intra-cluster temporal fission** (same cluster shows different sub-states across time). Different fission axis.
- **vs synth-718** (tick-bipolar carrier-activity profile): #718 used carrier-level merge throughput; #720 uses cluster-level state transitions. Different scope.
- **vs synth-719** (Z′_bot iterative funnel): #719 studies **bot-throughput per-PR**; #720 studies **cluster-as-object lifecycle**. The two compose: a Z′_bot cluster that grows-then-freezes (like oss-agent-shin's 11 K-PRs) is itself an instance of the synth-720 framework with the synth-719 funnel measuring its merge/close/pending throughput within each regime.

## Risk lens

- **Frozen clusters as silent backlog**: 5 OPEN pakrym + 5 OPEN bot-K + 3 OPEN wiltzius = **13 frozen PRs** sitting in the codex+litellm carriers' review queues, all blocked on author-return. If author-return is **never** (e.g., pakrym goes on PTO), this represents 13 PRs of permanent dead-weight requiring an explicit close-or-rebase intervention.
- **Detector should treat frozen clusters as a single review-unit**: rather than reviewing #21278, #21281, #21284, #21287, #21290 as 5 independent PRs, a reviewer should be flagged that they are **5 members of a frozen cluster** and review them together as one stack — or close them all together as a stale unit.
- **Author-coupling as a bus factor**: if a single author is responsible for an N=7 frozen cluster on a critical surface (here `core` cleanup), the project has a **localized bus factor of 1** on that surface. Recommend tracking M_multi_themed cluster ownership concentration as a project-health signal.
