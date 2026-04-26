# W17 Synthesis #128 — Codex surface-family fanout broadens during a 4-window merge drought

**Window of evidence:** 2026-04-26 ADDENDUM-37 → ADDENDUM-41 (codex merges in window: 1, 0, 0, 0, 0)

**Source PRs cited:**
- **Family A — `bolinfest` permissions/profile stack** (n=5 stacked, n=6 mass-rebase events): #19606, #19392, #19393, #19394, #19395 (last rebase 03:22:26Z, all SHAs distinct from prior rebases per Add.40).
- **Family B — `etraut-openai` TUI/shell cluster** (n=5 OPEN, all unmerged): #19618 (shell history, opened 00:50:52Z), #19620 (ASCII JSON metadata, 01:51:39Z), #19625 (TUI keyboard reset, 01:56:26Z), #19630 (thread shutdown, 03:13:03Z), #19631 (TUI statusline color, 03:26:03Z).
- **Family C — `andmis` SSE protocol singleton** (NEW in Add.41): #19610 (`Support end_turn in response.completed`, +44/-7, opened 2026-04-25T23:19:11Z, updated 03:51:36Z, head SHA `669e34d553…`).
- Earlier-window contributors: #19624 (`fcoury-oai`, skills), #19626 (`friel-openai`, replayed-message phase preservation).

## Pattern

Across **4 consecutive windows (Add.38–41) codex has zero merges**. Over that same span, the count of **disjoint surface families with active OPEN PRs has grown from n=2 → n=3**:

| Window | Merges | Disjoint surface families | New family added |
|--------|--------|---------------------------|------------------|
| Add.37 | 1 | 1 (bolinfest stack) | — |
| Add.38 | 0 | 1 | — |
| Add.39 | 0 | 2 | etraut TUI cluster (#19618 etc.) |
| Add.40 | 0 | 2 | (etraut stewardship grows to n=5) |
| Add.41 | 0 | 3 | **andmis SSE protocol (#19610)** |

The *width* of pending work grows while the *throughput* stays at zero. Compare to a healthy steady-state, where surface-family count and merge throughput correlate positively (more surfaces in flight → more independent merge paths discharging). Here the correlation is **anti-correlated**: as new surfaces open, throughput remains pinned at zero.

## Why this is non-trivial

The 4-window merge drought (synth #122 cross-pattern: rebase frequency anti-correlated with merge progress) was first read as a **single-cohort blockage** — bolinfest stack rebases without merges. Add.39 added the etraut cluster as a parallel, disjoint stalled cohort; Add.41 adds andmis as a third. The pattern is no longer "one author's stack is stuck" — it is a **repo-level merge gate**. Either:

(a) the merge gate is **review capacity** (reviewers absent or saturated — explains why merges drop while opens continue), or
(b) the merge gate is **CI/main-branch instability** (a flake or red main blocking all merges symmetrically), or
(c) the merge gate is **release-window discipline** (deliberate pre-tag freeze).

Each predicts a different burst-shape on drought-end. (a) → merges arrive in the order of reviewer attention (probably bolinfest stack first, since it's been pending longest). (b) → merges arrive within seconds of each other after a single CI fix lands. (c) → merges arrive in a deliberate batched order (typically the smallest/safest first: andmis #19610 +44/-7 fits this profile).

## Falsifiable prediction

When the codex merge drought ends, the **time-distribution of the first 5 codex merges** discriminates between the three models:

- **(a) review-capacity model**: first 5 merges spread over ≥45 minutes, ordered by PR age (bolinfest stack → etraut earliest → andmis last).
- **(b) CI-instability model**: first 5 merges land within a ≤5-minute band, in arbitrary order, with the same merge-commit timestamp resolution as the CI green event.
- **(c) release-discipline model**: first merge is a small surgical PR (andmis #19610 +44/-7 or one of etraut's smallest), followed by a deliberate gap, followed by larger discharges.

Secondary falsifiable point: **if a 4th disjoint surface family opens in the next window without any merge**, the "merge gate is repo-level" hypothesis strengthens to near-certainty (3 disjoint families failing to merge is suggestive; 4 is structural). Track the next addendum for any new author opening on a surface disjoint from {bolinfest permissions, etraut TUI/shell, andmis SSE protocol}.
