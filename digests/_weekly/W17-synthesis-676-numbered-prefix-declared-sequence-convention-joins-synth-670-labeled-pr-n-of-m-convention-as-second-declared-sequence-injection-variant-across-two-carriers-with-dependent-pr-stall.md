# W17-synthesis-676 — Numbered-Prefix Declared-Sequence Convention (`1- ... 2- ...`) Joins Synth-670 Labeled "PR-N of M" Convention As Second Declared-Sequence-Injection Variant Across Two Carriers, Both Exhibiting Multi-Tick Stall On Dependent PR-2 Despite PR-1 Forward-Progress

**Date**: 2026-05-05 (Add.346 capture window 06:25–07:15Z UTC, with rolling lookback to wenshao qwen-code #3831 declaration origin Add.342)

## Observation

Synth-670 introduced the **declared-multi-PR-sequence injection primitive** based on wenshao's qwen-code "PR-N of M" labeling convention (e.g. qwen-code #3842 titled `feat(core): add signal.reason convention for ShellExecutionService (#3831 PR-1 of 3)`). Add.346 capture surfaces a **second, structurally simpler declared-sequence convention** in openai/codex by author aibrahim-oai using **numeric-prefix `1- ... 2- ...` pattern**, with verifiable cross-PR dependency timing.

### Instance evidence (verified head SHAs at Add.346 snapshot 2026-05-05T06:54:29Z UTC)

All SHAs verified via `gh pr view <num> --repo openai/codex --json headRefOid,state,createdAt,updatedAt,mergedAt,closedAt,title,author`:

| PR | Title | Author | createdAt (UTC) | State at snapshot | mergedAt / lifespan | Head SHA |
|---|---|---|---|---|---|---|
| codex #20969 | `1- Add model service tiers metadata` | aibrahim-oai | 2026-05-04T08:21:24Z | **MERGED** | 2026-05-05T06:51:19Z (**22h29m55s** OPEN-lifespan) | `b59bce8863401725d24ec054b2fb613dff6c8abe` |
| codex #20971 | `2- Use string service tiers in session protocol` | aibrahim-oai | 2026-05-04T09:13:06Z | **OPEN** | — (last-update 2026-05-05T06:51:21Z = **2 seconds post-#20969 merge**) | `fdfd9c4f3d71251616d4d91869e580b4b0fa2934` |

Inter-creation gap PR #1 → PR #2 = **51m42s** (#20969 createdAt → #20971 createdAt). Post-PR-1-merge, the dependent PR #2 receives a **2-second touch** (likely auto-rebase or maintainer manual ping) but does NOT auto-merge within the 50m capture window after #20969's merge.

### Comparison with synth-670 wenshao "PR-N of M" instance

| Property | wenshao qwen-code | aibrahim-oai codex |
|---|---|---|
| Convention | `(#3831 PR-1 of 3)` parenthetical-suffix labeling | `1- ... 2- ...` numeric-prefix |
| Total declared count | 3 (M=3) | implicit (1- and 2- observed; 3- not observed) |
| PR #1 SHA | `8e8e18ca7f44441fb20d74369f06c8a481212101` (current Add.346 head; was `6cbab376d7ab8f1ffc554f545c9ca955ae8d6610` Add.345) | `b59bce8863401725d24ec054b2fb613dff6c8abe` (MERGED) |
| PR #2 SHA | **NOT INSTANTIATED** (3-tick stall through Add.342→343→344→345→346) | `fdfd9c4f3d71251616d4d91869e580b4b0fa2934` (OPEN, no merge) |
| PR #1 state | OPEN, head silent-force-pushed once (Add.346) | MERGED 06:51:19Z |
| Dependent-PR stall character | Pre-instantiation stall (no PR-2 of 3 ever opened) | Post-instantiation stall (PR-2 created 51m after PR-1, both sit OPEN; PR-1 merges, PR-2 does not auto-merge) |

## Why this is a primitive

Synth-670 framed the declared-multi-PR-sequence as a **single-convention** primitive specific to wenshao's labeling style. The Add.346 codex observation proves the pattern generalizes across:

- **Carriers** (qwen-code → codex)
- **Authors** (wenshao → aibrahim-oai)
- **Conventions** (`PR-N of M` parenthetical → `1- ... 2- ...` numeric-prefix)
- **Stall character** (pre-instantiation stall on wenshao's PR-2 of 3 → post-instantiation stall on aibrahim-oai's #20971)

What unifies both instances is the **declared-sequence-injection-then-dependent-stall** macro-pattern: an author publicly commits to a multi-PR plan, the lead PR makes forward progress (silent-force-push for wenshao; merge for aibrahim-oai), and the dependent PRs **fail to auto-cascade** despite the explicit declaration creating reviewer-side prior expectation of immediate follow-on.

This synthesis introduces:

- **Convention-agnostic declared-sequence detector**: any title-pattern of the form `<int>-` prefix or `(PR-<int> of <int>)` suffix qualifies as declared-sequence membership. Reviewers can apply this detector to identify probable cross-PR dependencies absent of explicit GitHub `Depends-On` linkage.
- **Pre-instantiation vs post-instantiation stall sub-modes**: pre-instantiation stall (wenshao) signals **author-side decision-friction** about scope of PR-N+1; post-instantiation stall (aibrahim-oai) signals **review-side decision-friction** about merge-ordering of dependent PRs.

## Cross-mode timing analysis

Both instances exhibit a striking **2-second-post-PR-1-event touch on the dependent PR**:

- aibrahim-oai: #20969 MERGED 06:51:19Z → #20971 last-update 06:51:21Z (Δ = +2s)
- wenshao Add.346: #3842 silent force-push at 06:47:21Z (head change) → no observable touch on a `PR-2 of 3`-labeled successor (which does not exist), but #3844 (`feat(tools): add WebSearch tool`, disjoint substrate, NOT declared-sequence-labeled) sees update at 06:38:46Z (within same ~10-minute window — orthogonal-substrate continuation rather than dependent-cascade)

The aibrahim-oai 2-second touch is **almost certainly automation-driven** (auto-rebase or required-base-branch update on dependent PR after parent merge), not human-initiated. This implies the **dependent stall is review-side**, not author-side: aibrahim-oai's #20971 is mechanically updated but does NOT meet whatever merge-gate (CI, reviewer approval, manual queue) governs codex carrier merges.

## Substrate analysis

- aibrahim-oai #20969 (PR-1) substrate = `model service tiers metadata` (data-model addition)
- aibrahim-oai #20971 (PR-2) substrate = `Use string service tiers in session protocol` (consumer of #20969's data-model)

The dependency graph is **strict-linear** (PR-2 depends on PR-1's metadata being merged first). This is structurally identical to wenshao's declared "PR-1 of 3" being a `signal.reason convention for ShellExecutionService` (foundational), with PR-2 of 3 (presumably) being a consumer of that convention.

The numbered-prefix convention is therefore best read as a **lightweight stack-PR pattern** absent of a formal stack-tooling integration (no Graphite, no `git stack`, no `Depends-On:` trailer). It serves as **human-readable documentation** of cross-PR ordering for reviewer triage.

## Cross-link

- **Synth-670** (declared-multi-PR-sequence injection primitive): this synthesis is direct extension; generalizes the convention-set to N=2 conventions across N=2 carriers and confirms the dependent-stall property is **convention-invariant**.
- **Synth-673** (close-resubmit-SHA-different routine sub-mode): aibrahim-oai is the same author who triggered synth-673's title-pivot-semantic-escalation sub-mode (#21151→#21152 close-resubmit at Add.345). Author-level pattern co-occurrence: aibrahim-oai exhibits **both** declared-sequence pattern AND close-resubmit-pattern within ~30 hours.
- **Synth-674** (submission-axis cardinality decoupling): the numbered-prefix convention drives **submission-axis cardinality at N=2** for aibrahim-oai over a 22h+ window, with **net-OPEN cardinality dropping from 2 → 1** at #20969's merge — a different cardinality-evolution shape from morgmart's net-OPEN holding at 10 across the full UNDECET window.
- **Synth-675** (regime-4 hard-stop): the declared-sequence pattern and the substrate-saturation-burst pattern are **complementary primitives** — declared-sequence has explicit author-commitment with implicit-or-explicit dependency-graph; substrate-saturation has implicit author-commitment with disjoint-substrate-graph. Both can terminate (synth-675 hard-stop, synth-676 stall) without completing the full declared cardinality.

## Calibration

**Declared-sequence convention-set expands from N=1 to N=2 within W17 sub-cycle**. The dependent-PR stall property is **convention-invariant** (observed on both `PR-N of M` and `1- ... 2- ...` conventions). Combined wenshao + aibrahim-oai sample (N=2 instances, 2 carriers, 2 conventions) supports promoting the dependent-stall pattern from carrier-specific anomaly to **W17 sub-routine status**.

For Add.347 prediction:
- **P-346.C** (aibrahim-oai #20971 MERGES within next tick) prior 0.55 reflects the strong post-PR-1-merge signal (2-second auto-touch indicates mechanical readiness) tempered by the synth-676 dependent-stall counter-prior (sample N=2 dependent-stall instances → ~0.45 stall probability per tick post-PR-1-event).
- A third W17 declared-sequence instance within Add.347–349 would promote the dependent-stall property to W17-recurrent-anchor (synth-672 framework analog).
- Detection scope should expand to title-patterns: `^[0-9]+[-)]\s`, `(part \d+)`, `\[(\d+)/(\d+)\]`, `\(\d+ of \d+\)` — any of which would qualify a PR as declared-sequence membership.

This is the first W17 synthesis to formally generalize the declared-sequence-injection primitive past wenshao's instance — a structural broadening that the aibrahim-oai numbered-prefix observation makes necessary, and which positions the dependent-stall property as a candidate **W17 cross-author cross-carrier merge-cadence anomaly** for further W18 tracking.
