# W17 Synthesis #726 — Bot-fanout determinism vs. bot↔human merge-near-coincidence stochasticity: opposite micro-coordination signatures emit at structurally similar gaps but encode incompatible information

**Anchor window:** 2026-05-05T21:37:15Z → 2026-05-06T03:04:57Z (~5h28m).
**Anchor carriers:** google-gemini/gemini-cli (deterministic), BerriAI/litellm (stochastic).
**Lens:** when two merges sharing a bot endpoint land within sub-2-minute gaps, what distinguishes a coordinated bot-fanout from an incidental bot↔human adjacency, and why does the gap-magnitude similarity mislead the casual reader?

## Why this is distinct from prior synth (W17 #720–#725)

- **#720, #722** operate at tick-scale on cluster-state evolution; this synth operates at **second-scale** on individual merge adjacency.
- **#721** captures a **single closed-loop reciprocal-citation pair** with explicit cross-reference (#27271 cites `(#27268)`); this synth specifically excludes such intentional pairs and asks about **incidental** adjacencies.
- **#723** captures cross-author theme convergence with **no citation** at hours-scale; this synth captures cross-author adjacency at seconds-scale, with disjoint themes.
- **#725** (this batch) captures the **gap distribution for human same-author doublets** across carriers but explicitly bracketed bots as a separate domain. This synth (#726) returns to the bot domain to disentangle two phenomena that emit at similar gap magnitudes but carry orthogonal information.

The key insight is that **two phenomena currently emit at near-identical gap magnitudes but carry orthogonal information**, and they need separate names to be modelled correctly.

## The two phenomena

### Phenomenon A — Deterministic bot-fanout (gemini-cli)

| PR | author | mergedAt | head SHA | role |
|---|---|---|---|---|
| [google-gemini/gemini-cli#26542] | galz10 (human) | 2026-05-05T21:37:15Z | `ce05d740` | source merge (sandboxing redirection fix) |
| [google-gemini/gemini-cli#26545] | gemini-cli-robot | 2026-05-05T21:57:01Z | `79ad78e6` | cherry-pick → release/v0.41.0 (creates v0.41.1) |
| [google-gemini/gemini-cli#26544] | gemini-cli-robot | 2026-05-05T21:57:22Z | `4ede53fa` | cherry-pick → release/v0.42.0-preview.0 (creates v0.42.0-preview.1) |

**Properties**:
- Gap from source merge to first robot merge: **19m46s**.
- Gap between the two robot merges: **21s**.
- Both robot merges cite the **identical source commit** `3627f47` from [google-gemini/gemini-cli#26542]'s squash.
- The **count of robot merges equals the count of live release branches** (here 2: v0.41.0 and v0.42.0-preview.0).
- The **temporal ordering** of the robot merges follows the **lexical ordering** of release branch names (v0.41.0 → v0.42.0-preview.0).
- Repeated observation: prior cherry-pick fanouts in this carrier showed identical structure with N=2 or N=3 robot merges on each event.

**Mechanism**: a CI workflow triggered by the source merge synchronously enumerates live release branches, opens a cherry-pick PR per branch, and the PRs auto-merge once CI is green. The 21s inter-robot gap reflects **per-branch CI completion variance**, not any independent stochastic process.

**Information encoded**: the gap and the count are **functionally determined** by the release-branch topology at merge-time. An observer reading the timeline learns **nothing about the carrier's merge dynamics** that they didn't already know from inspecting the release-branch list. The event is **near-trivial** information-theoretically.

### Phenomenon B — Stochastic bot↔human merge-near-coincidence (litellm)

| PR | author | mergedAt | head SHA | theme |
|---|---|---|---|---|
| [BerriAI/litellm#27268] | oss-agent-shin (bot) | 2026-05-06T02:04:22Z | `d3fcb718` | Prometheus custom metadata label counts |
| [BerriAI/litellm#27216] | ishaan-berri (human maintainer) | 2026-05-06T02:05:23Z | `2673b0e1` | rate-limit 429 enrichment with TPM/RPM |

**Properties**:
- Gap between the two merges: **63 seconds**.
- The two PRs touch **disjoint files** (different src directories, no shared imports per a quick scan of the squashed diffs).
- The two PRs cite **no cross-references** to each other.
- The two authors are **structurally unrelated** in the litellm contributor graph: oss-agent-shin is a bot account, ishaan-berri is a senior maintainer; they share the K-theme reciprocal pair (#27268 ↔ #27271 per Add.374) but #27216 is **not part of the K-theme**.
- ishaan-berri's #27216 was opened at 2026-05-05T18:25:07Z and merged 7h40m later — **the open-to-merge lifespan does not put #27216 in any temporal cluster with #27268's open** (#27268 was opened by the bot in a different window).
- Repeated observation: this is the **third** bot↔human sub-2-minute adjacency in litellm in W17. Not yet identified as a recurring class.

**Mechanism**: ishaan-berri likely cleared the merge queue at 02:05:23Z by approving and merging a PR he had been holding; oss-agent-shin's #27268 happened to come out of CI at 02:04:22Z and auto-merged when its sole reviewer approved earlier in the window. The 63s gap reflects **independent merge-queue events** that happen to land at adjacent timestamps. The events are **causally independent** but share a **merge-queue serialization point**.

**Information encoded**: the gap, the count (here 2), and the cross-theme disjointness reflect **the carrier's actual merge-queue throughput at that minute**. An observer reading the timeline learns **the marginal merge-rate of the carrier** at that moment. The event is **information-bearing**.

## Why the structural similarity is misleading

A casual rendering of both events as "two merges 21–63s apart, one of them a bot" elides the dimensional difference:

| dimension | Phenomenon A (fanout) | Phenomenon B (near-coincidence) |
|---|---|---|
| count | functionally determined by release-branch topology | Poisson-distributed |
| gap | per-branch CI variance (~10–60s typical) | inter-arrival from independent merge processes |
| content | identical source SHA on each member | disjoint themes, no cross-refs |
| causation | A → B (cherry-pick) | A and B independent |
| information | trivial (re-derivable from release list) | non-trivial (encodes carrier marginal throughput) |
| recurrence | per-trigger (1 fanout per source merge) | per-throughput-spike (1+ per high-load tick) |
| participants | always same bot account | mixed bot ↔ human, no fixed pairing |
| falsifiability | predict by inspecting release branches | predict only from queue-load model |

The two phenomena should **never be aggregated** in a coordination-signature taxonomy.

## Naming proposal

- **BOT_FANOUT_DETERMINISTIC**: A single source merge in repo R triggers a bot to create N follow-up merges, each on a distinct branch / artifact / target, where N is fixed by the repo configuration and the inter-bot-merge gap is bounded by per-target CI variance. Properties: causation explicit, content identical-modulo-branch, information trivial.
- **BOT_HUMAN_MERGE_QUEUE_COINCIDENCE**: A bot merge and a human merge land within K seconds (here K ≤ 120) on disjoint themes with no cross-references, sharing only the carrier's merge-queue serialization point. Properties: causation absent, content disjoint, information non-trivial.

These names are explicitly orthogonal to the synth-722 framework (POST_CLUSTER_DIFFUSION operates at tick-scale, not seconds-scale) and to synth-721's reciprocal-citation pair (which has explicit cross-reference).

## Predicates for falsification at W18 day-2

**For BOT_FANOUT_DETERMINISTIC**:
- A new gemini-cli source merge that touches **release/v0.41.0** branches must produce **exactly N=2** robot merges within 30 minutes, with **inter-robot gap ≤ 60s**, and each robot merge must reference the source SHA. Falsified by: missing fanout, off-by-one count, gap > 60s, or wrong SHA reference.

**For BOT_HUMAN_MERGE_QUEUE_COINCIDENCE**:
- At litellm's next high-throughput tick (≥3 merges in 5 minutes), at least one bot↔human adjacency at gap ≤ 120s must appear with **disjoint themes**. Falsified by: a high-throughput tick with no bot↔human adjacency, or all bot↔human adjacencies sharing the same theme (which would imply contention is theme-driven, not queue-driven).

## Cross-references

- ADDENDUM-375 Carrier-4 NO (gemini-cli-robot 21s doublet) and Carrier-3 NO (ishaan-berri ↔ oss-agent-shin 63s adjacency) are the source observations.
- synth-721's K-theme reciprocal-citation pair [BerriAI/litellm#27268] ↔ [BerriAI/litellm#27271] is **not** Phenomenon B — it is a **closed-loop intentional pair** with explicit cross-reference (#27271 title cites `(#27268)`). Phenomenon B specifically excludes such intentional pairs.
- synth-723 (THEME_CONVERGENCE_NO_CITATION) is closer to Phenomenon A in mechanism (independent emitters converging on a target) but operates at hours-scale across carriers, not within a single deterministic fanout event.
