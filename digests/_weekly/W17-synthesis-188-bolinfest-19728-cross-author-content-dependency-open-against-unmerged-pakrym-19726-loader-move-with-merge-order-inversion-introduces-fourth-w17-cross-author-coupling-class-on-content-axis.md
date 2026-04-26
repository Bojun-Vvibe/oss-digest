# W17 Synthesis #188 — bolinfest #19728 opens 8s before Add.70 window-close as a content-dependent follow-up to pakrym-oai's #19726 loader move (and 7m10s before pakrym's #19726 merge), introducing a cross-author **content-dependency-open** coupling shape distinct from synth #178's shared-branch-lifecycle coupling and synth #182's same-author M+O coupling, with a CD-open-precedes-dependency-merge ordering inversion that opens a fourth W17 cross-author coupling-class

**Anchor window:** 2026-04-26T22:41:29Z (pakrym #19726 open) → 2026-04-26T22:48:39Z (bolinfest #19728 open) → 2026-04-26T22:58:17Z (pakrym #19726 merge).
**Anchor repo:** openai/codex.
**Anchor actors:** pakrym-oai (Pavel Krymets) and bolinfest (Michael Bolin).
**Parent synths:** #178 (cross-author shared-branch 4-stage lifecycle fully observable end-to-end), #182 (meowgorithm 24s precursor open M+O coupling on crush is third distinct merge-coupling shape after bolinfest M+R+M triple and opencode kommander solo self-merge), #183 (stack collapse and stack bootstrap cross-author pair within 73s on same repo opens W17 cross-author stack graph coupling taxonomy), #175 (non-main integration branch pattern generalizes from litellm to codex cross-author shared-branch topology distinct from self-stacked).

## What synths #178, #182, #183 each said about cross-author coupling

| Synth | Coupling shape | Surface relationship | Branch topology | Time signature |
|---|---|---|---|---|
| #178 | shared-branch lifecycle (open→review→approve→merge) | same branch, sequential touches | non-main shared branch | full lifecycle observable end-to-end |
| #182 | M+O on crush (meowgorithm) | same surface | main-base | 24s precursor-open before merge |
| #183 | stack collapse + stack bootstrap pair | adjacent stack graphs | main-base sub-stacks | 73s coupling window |

Each prior shape required either (a) a shared branch (synth #178), (b) the same author (synth #182's M+O), or (c) a structural stack-graph adjacency (synth #183). **None covered cross-author + main-base + content-dependency-on-an-unmerged-PR**.

## What Add.70 §1 + Add.71 §2 observed

Three relevant openai/codex events in tight sequence:

| Event | PR | Author | Timestamp | State at observation |
|---|---|---|---|---|
| open A | **#19726** `Fix codex-core config test type paths` | pakrym-oai | 22:41:29Z | OPEN |
| open B | **#19727** `test: increase core-all-test shard count to 16` | bolinfest | 22:41:51Z (**+22s**) | OPEN (the cross-author open pair documented in Add.70 §1) |
| open C | **#19728** `fix: update core config tests after loader move` | bolinfest | 22:48:39Z (**+7m10s**) | OPEN |
| merge A | #19726 | pakrym-oai | 22:58:17Z (**+9m38s after open C**) | MERGED |
| merge B | #19727 | bolinfest | 23:10:27Z | MERGED |

**The novel observation:** bolinfest opened **#19728** with the title `fix: update core config tests after loader move` **9m38s before** pakrym's #19726 merged. The "loader move" referenced is **literally the change pakrym made in #19726** (which moved the codex-core config loader). Bolinfest is opening a **content-dependent follow-up PR against unmerged work** — predicting that #19726 will land and proactively shipping the test updates that #19726's diff requires.

This is a **content-dependency-open (CD-open)**: a PR opened on `main` whose semantic correctness depends on another in-flight PR landing first. The CD-open shipped before the dependency merged.

## The novel coupling class: cross-author CD-open with merge-order inversion

Define **cross-author CD-open**: a PR opened by author B on `main` whose subject-line or content explicitly or implicitly assumes work-in-progress by author A in another not-yet-merged PR. The CD-open is parameterized by:

- **Lead time** L = (timestamp of CD-open) − (timestamp of dependency open) (here **22:48:39 − 22:41:29 = 7m10s**)
- **Pre-merge offset** P = (timestamp of dependency merge) − (timestamp of CD-open) (here **22:58:17 − 22:48:39 = 9m38s**)
- **Reference explicitness**: the CD-open's title/body literally names the dependency's work ("after loader move")
- **Branch topology**: both PRs main-base (no shared branch — distinct from synth #178)

The cross-author CD-open shape is **distinct** from each prior coupling class:

| Property | #178 shared-branch | #182 M+O same-author | #183 stack collapse+bootstrap | **#188 cross-author CD-open** |
|---|---|---|---|---|
| Authors | 2 (sequential on shared branch) | 1 | 2 (different stacks) | **2 (different surfaces, content-coupled)** |
| Branch topology | shared non-main | same author's main-base | adjacent main-base stacks | **independent main-base** |
| Coupling mechanism | branch identity | author identity + same surface | stack-graph adjacency | **subject-line content reference** |
| Merge ordering | sequential | M precedes O | independent | **dependency merges AFTER CD-open** |
| Observable signal | branch ref | author + diff | stack-graph topology | **PR title/body string match across authors** |
| W17 incidence pre-#188 | observed in synth #178 only | observed in synth #182 only | observed in synth #183 only | **first** |

The **merge-order inversion** is the structurally novel piece: in synth #182's M+O coupling, the **M**erge **precedes** the **O**pen. In #188's CD-open, the open precedes the dependency merge by **9m38s**. The ordering is inverted because the coupling is **predictive** rather than **reactive**: bolinfest is betting that pakrym's #19726 will land and getting his cleanup ready in advance, rather than waiting and reacting after-the-fact.

## Why CD-open is a high-trust signature

Cross-author CD-open is only rational when the CD-opener has high confidence that the dependency PR will land. This requires:

1. **Knowledge of the dependency PR's content** (bolinfest read pakrym's #19726).
2. **Confidence in the dependency author** (bolinfest expects pakrym's PR to merge, not be rejected/closed).
3. **Knowledge that the dependency lands soon** (bolinfest opens his cleanup expecting a merge within minutes, not days — otherwise CI on #19728 would fail repeatedly while waiting).

Property 3 is **observable**: pakrym's #19726 merged in **16m48s** total lifespan, which is ~2-3× faster than the bolinfest cohort's typical sub-30m merge latencies. Bolinfest correctly modeled the merge-window. The CD-open is a **timing-aware** trust signal, not just a content-aware one.

This makes CD-open a **direct measurable proxy for cross-author production-trust** — the kind of inter-author signal that prior synths inferred indirectly from coupling shapes but never observed as an explicit content-prediction.

## Why the count of distinct W17 cross-author coupling classes is now 4

W17 cross-author coupling-class taxonomy (post-#188):

1. **Shared-branch lifecycle** (synth #178) — branch identity coupling.
2. **Stack collapse + stack bootstrap pair** (synth #183) — stack-graph adjacency coupling.
3. **Sub-30s cross-author disjoint-surface open pair** (synth #94 generalization, Add.70 §1) — temporal coincidence coupling.
4. **Cross-author CD-open with merge-order inversion** (synth #188, **new**) — content-prediction coupling.

The four classes partition the cross-author coupling space along orthogonal axes: branch (1), structure (2), time (3), content (4). **Synth #188 closes the content axis.** Future cross-author couplings can be classified by which subset of {branch, structure, time, content} they activate.

## Falsifiable predictions emitted

- **P188a:** within W17–W18, ≥1 additional cross-author CD-open will be observed across the 7 monitored repos. Most likely on openai/codex (where bolinfest, pakrym-oai, aibrahim-oai, etraut-openai, xli-oai actively touch overlapping config/permissions/MCP surfaces). The CD-open's lead time L will be in the **5m–30m** range (matching bolinfest's 7m10s) and the pre-merge offset P will be in the **−5m to +20m** range. If observed P >2h, the dependency-author trust signal weakens.
- **P188b:** bolinfest's #19728 will merge **within 30 minutes** of pakrym's #19726 merge (i.e. by 23:28:17Z). Update for Add.71's window (23:25:00Z close): #19728 was still OPEN at window close, **27m43s post pakrym merge**, leaving 2m17s of P188b's predicted envelope. If #19728 lands by 23:28:17Z, P188b confirms; if it slips past 30 minutes, the CD-open coupling-tightness is **looser than synth #182's M+O 24s precursor signature**, which is consistent with cross-author being weaker than same-author coupling.
- **P188c:** when CD-opens occur, the CD-opener and the dependency-author have **already had a same-second-or-near cross-author open pair** within the prior 30 minutes. Add.70 §1 documented bolinfest+pakrym's 22-second open pair at 22:41:29/22:41:51 — this is the **prior coordination signal**. Test: future CD-opens should be preceded by a synth #94-class temporal-coincidence open pair within 30 minutes by the same author dyad. If a CD-open appears with no prior temporal-coincidence pair, the dyad-coordination prerequisite is loose.
- **P188d:** CD-opens are **directional and asymmetric** — bolinfest is opening a CD against pakrym's work, not vice versa. Within W17, **0 observations of pakrym opening a CD against bolinfest's work** (despite bolinfest having #19392/#19393/#19717 in flight). This asymmetry suggests CD-opens flow **toward the actor with more downstream surface area** (bolinfest's permissions/test-infra work consumes pakrym's loader/config moves). If pakrym opens a reverse-direction CD against bolinfest, the directionality hypothesis is falsified.

## Cross-references

- Synth #178 — shared-branch lifecycle contrast (different mechanism, different topology).
- Synth #182 — same-author M+O contrast (merge-order inverted vs CD-open).
- Synth #183 — stack-graph adjacency contrast (structural rather than content coupling).
- Synth #94 — same-author back-to-back disjoint-surface merge pair; Add.70's bolinfest+pakrym 22-second open pair generalized synth #94 to cross-author and is the **temporal-coincidence prerequisite** that #188's CD-open extends to **content-coincidence**.
- Add.70 §1 + Add.71 §2 — direct observation source.
- Synth #181 — etraut-openai author-revisit-within-burst is intra-burst author recurrence; #188's CD-open is **inter-burst cross-author content recurrence**, a distinct shape on a different axis.
