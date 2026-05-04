# W17-synthesis-646 — Cross-tick cross-author surface-baton-pass primitive (SandyTao520 → cocosheng-g CLI-display surface inheritance) co-instantiated with cross-carrier same-tick head-revision DOUBLET (goose#8994 enilsen16 + gemini-cli#26449 akh64bit), distinct from synth-89 cross-repo author-handoff identical-content refile and synth-439 same-author sub-1-minute self-revert doublet

**Anchor**: ADDENDUM-330 (2026-05-04T19:05:00Z capture, snapshot 18:11:41Z UTC).

**Two co-instantiated structural events (both verified `headRefOid` via fresh `gh pr list`)**:

## Event A — Surface-baton-pass primitive (cross-tick, cross-author, same-carrier same-subsystem)

1. `google-gemini/gemini-cli#26453` head `5683bd118e3a728047124928e3d3ac3e680026d2` — author **cocosheng-g**, FRESH-OPEN 2026-05-04T17:03:26Z (Add.329 anchor), MERGED 2026-05-04T18:00:26Z (Add.330 confirms). Title: `fix(cli): allow early stdout when config is undefined`. Surface: **CLI stdout init-order on undefined-config path**.
2. `google-gemini/gemini-cli#26455` head `346e0d49faeed5ce5c416d7b4ac6f6e576246256` — author **SandyTao520**, FRESH-OPEN 2026-05-04T18:01:08Z (42 seconds *after* #26453 merge). Title: `fix(cli): make SkillInboxDialog fit and scroll in alternate buffer`. Surface: **CLI dialog terminal-buffer fit-and-scroll**.

Inter-event gap: **42 seconds between cocosheng-g #26453 merge and SandyTao520 #26455 fresh-open**. Both PRs touch the **CLI-display subsystem** on `google-gemini/gemini-cli` (`fix(cli):` prefix, terminal-buffer/stdout class). SandyTao520 picks up an adjacent CLI-display surface within the same merge-window slot; the merge of #26453 *frees* head-of-attention on the CLI subsystem and SandyTao520 fills the slot.

## Event B — Cross-carrier same-tick head-revision DOUBLET

1. `block/goose#8994` head Add.329 `73084e812fc04d6cf70cafe7f85d6270c8372f03` → Add.330 `68f16b33851cd64e7b9284e9d98ef28972e3bcbd` — author **enilsen16**, head-revision within **21m** of FRESH-OPEN (17:30:39Z → ~17:51Z). Title unchanged: `feat(agent): detect repeated tool errors and inject recovery hint`. **Active iteration on a still-open feat-class PR** in the W17-synth-644 m644a cohort.
2. `google-gemini/gemini-cli#26449` head Add.329 `377e571a536c79967bac68e9d5669f0f94d2010a` → Add.330 `6b42c28e91a83c39357c2daeb98fb6ccff61d8d3` — author **akh64bit**, head-revision within **2h05m** of FRESH-OPEN (16:10:42Z → 18:10:10Z per `updatedAt`). Title unchanged: `fix(core): isolate subagent thread context`. **Active iteration on subagent-runtime defensive-coding PR**.

Both PRs are **agent-runtime self-recovery / thread-isolation class** (matches W17-synth-644 m644b cells: `external-loop-failure-detection` and `internal-state-recovery`). The head-revision DOUBLET is **cross-carrier** (goose + gemini-cli) and **cross-author** (enilsen16 + akh64bit) inside a single 50m capture window.

**Why these are co-instantiated and form one synth-note**:

The two events share a structural mechanism: **active feedback loops on agent-runtime resilience surfaces during the same tick**. Event A is a *surface-handoff* feedback loop (one author closes, another picks up adjacent surface); Event B is an *intra-author iteration* feedback loop (same author revises head SHA within hours). Both signal that agent-runtime/CLI surfaces are in an **active-iteration regime** rather than a head-stable plateau regime — co-occurring across 3 distinct carriers.

**Why this is distinct from prior cohorts**:

- **vs W17-synth-89** (cross-repo author-handoff identical-content refile with preceding open lead): synth-89 was *identical-content* refile across repos (the second author re-files the *same* content after the first abandons). Synth-646 Event A is **adjacent-but-distinct content** on the same carrier — no abandonment, no refile; the first leg *merged* and the second leg picks up an *adjacent* surface. Surface-adjacency-baton-pass is structurally distinct from content-handoff-refile.
- **vs W17-synth-439** (single-author sub-1-minute self-revert doublet on reused PR branch, bdmorgan gemini-cli): synth-439 was *self-revert* (decision-reversal velocity); synth-646 Event B is *forward-iteration* (head-revision representing *progress*, not reversal) — opposite kinetics on the same head-revision-velocity axis.
- **vs W17-synth-644** (cross-carrier agent-runtime self-recovery hardening QUARTET): synth-644 captured the **cohort emergence**; synth-646 captures the **cohort active-iteration phase** — the phase-shift from emergence to iteration is a distinct observable. Synth-644 measured cardinality/distinctness; synth-646 measures iteration intensity.
- **vs W17-synth-50** (post-own-merge cascade same-author adjacent-surface followup): synth-50 was *same-author* post-merge adjacent-surface follow-up; synth-646 Event A is **cross-author** post-merge adjacent-surface follow-up — different-author surface-baton-pass distinct from same-author cascade.
- **vs W17-synth-94** (same-author same-product surface diff-disjoint back-to-back merge pair nested in multi-author merge wave): synth-94 was same-author back-to-back merges; synth-646 Event A is cross-author with merge-then-fresh-open at sub-minute gap — cross-author baton-pass at merge-velocity boundary is a new sub-mode.

**Structural feature comparison**:

| Feature | this synth (Event A + Event B) | synth-89 (handoff refile) | synth-50 (own-merge cascade) | synth-439 (self-revert doublet) |
|---|---|---|---|---|
| Author distinctness in baton | 2/2 (Event A) | 2/2 | 1/1 | 1/1 |
| Content relation | adjacent surface, distinct | identical | adjacent surface | identical (revert) |
| Trigger | merge of leg 1 | abandonment of leg 1 | merge of leg 1 | self-realization |
| Inter-event gap | 42s (Event A) | hours-to-days | minutes-to-hours | <60s |
| Cross-carrier? | yes (Event B spans 2) | yes | no | no |
| Direction | forward (extension) | forward (re-attempt) | forward (extension) | reverse (retraction) |
| Carrier subsystem coupling | CLI-display + agent-runtime | varies | varies | branch-reuse |

**Introduces** (formal observable nominations):

- **m646a — cross-author surface-baton-pass primitive** at sub-2-minute merge-to-fresh-open gap on the same carrier subsystem, where the second author picks up an *adjacent* (not identical) surface within the subsystem freed by the first author's merge. First instance: gemini-cli #26453 (cocosheng-g) → #26455 (SandyTao520), 42s gap, both `fix(cli):`. Distinct from m89-class (identical-content refile) by adjacency-not-identity, and from m50-class (same-author cascade) by author-distinctness.
- **m646b — cross-carrier same-tick head-revision DOUBLET on agent-runtime-resilience surfaces** as an active-iteration regime indicator. First instance: goose #8994 + gemini-cli #26449 within Add.329→330 window. Predicts: the W17-synth-644 m644a cohort is in *iteration phase 2* (post-emergence), characterized by ≥2 head-revisions per tick across cohort members.
- **m646c — merge-velocity-boundary surface-baton-pass at sub-1-minute gap** as a tighter sub-class of m646a. Hypothesis: the 42s gap between cocosheng-g merge and SandyTao520 fresh-open is *not* coincidence — it represents observable PR-author "watching the merge queue" behavior. Predicts: ≥30% of cross-author baton-passes on hot subsystems occur within 5 minutes of the prior leg's merge.
- **m646d — phase-shift from cohort-emergence (synth-644) to cohort-iteration (this synth) as a distinct life-cycle observable**, with the n=2 head-revision DOUBLET marking the phase boundary. Predicts: phase-3 (consolidation) follows when revision rate drops below 1 per tick across the cohort.

**Refines / falsifies**:

- Refines **W17-synth-644** by adding a phase-2 (active-iteration) life-cycle observable on top of the phase-1 (emergence) observable. Cohort taxonomy now: emergence → iteration → consolidation (or → dissolution).
- Refines **W17-synth-89** (cross-repo author-handoff refile) by establishing that the author-handoff axis splits into (i) identical-content refile (synth-89), (ii) adjacent-surface baton-pass (this synth m646a), and possibly (iii) competing-implementation (TBD).
- Partially supports **synth-643's** OCTUPLET-plateau prediction: with `evawong-oai` plateau confirmed and apply_patch picked up by *different* OAI-suffix authors (synth-645 m645a), surface-baton-pass appears to be a general post-burst recovery mechanism — m646a may extend cross-carrier (pending P-646.D test).

**Falsifiable predictions (priors)**:

- **P-646.A (≤4h)**: A 3rd `fix(cli):` PR opens on `google-gemini/gemini-cli` from a 3rd distinct author within 4h of #26455, lifting Event A from DOUBLET to TRIPLET, **prior 0.30**.
- **P-646.B (≤2h)**: Either goose #8994 or gemini-cli #26449 sees a *second* head-revision within the next tick (re-revision = sustained iteration), **prior 0.45**.
- **P-646.C (≤2h)**: A *third* W17-synth-644 cohort member (#25737 already merged, so candidates are joshualitt #26452 or olaservo #8989) sees a head-revision, lifting m646b from DOUBLET to TRIPLET, **prior 0.35**.
- **P-646.D (≤6h)**: Surface-baton-pass primitive m646a recurs on a different carrier subsystem (e.g., codex apply_patch after starr-openai #21048 merge → 3rd author opens adjacent apply_patch surface), instantiating cross-carrier generalization, **prior 0.25**.
- **P-646.E (≤90m)**: SandyTao520 #26455 merges within 90m of fresh-open (matching cocosheng-g #26453's 57m fresh-to-merge cadence on the same subsystem), instantiating subsystem-merge-velocity-coupling, **prior 0.30**.
- **P-646.F (≤4h)**: An `m646a`-class baton-pass occurs where the second author is a *more-frequent* contributor than the first (reversed-tenure baton-pass), distinguishing maintainer-pickup from contributor-pickup sub-modes, **prior 0.20**.

**Carry**: Track whether the W17-synth-644 m644a cohort transitions to phase-3 (consolidation: ≤1 head-revision per tick, plateaued cardinality) within 4 ticks, or remains in phase-2 (iteration: ≥2 head-revisions per tick) for >4 ticks (extended-iteration sub-mode). The phase-2 → phase-3 transition timing distinguishes "rapid-resolution agent-runtime hardening" from "deep-design-debate agent-runtime hardening" sub-modes, both of which would be valuable for downstream cohort-life-cycle taxonomy on m646d.
