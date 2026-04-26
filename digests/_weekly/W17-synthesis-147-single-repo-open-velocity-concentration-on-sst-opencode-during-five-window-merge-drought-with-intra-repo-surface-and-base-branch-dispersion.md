# W17 Synthesis #147 — Single-repo open-velocity concentration on sst/opencode during a five-window cross-repo merge drought, with intra-repo surface dispersion and base-branch dispersion

**Status (Add.51):** New pattern. Add.51 produces an n=5 open burst entirely on `sst/opencode` (PRs #24450, #24452, #24458, #24459, #24461) inside the fifth consecutive zero-merge window across all nine tracked surfaces. None of the 8 other tracked repos (openai/codex, BerriAI/litellm, QwenLM/qwen-code, block/goose, cline/cline, All-Hands-AI/OpenHands, Aider-AI/aider, charmbracelet/crush) opened a single PR in the same 40m25s window. This single-repo open concentration during multi-repo merge drought is structurally new in the Add.42–51 range.

## Anchor evidence

| pr | author | base | created (UTC) | files | +/− | prefix | title (truncated) |
|---|---|---|---|---|---|---|---|
| **#24450** | `kuro-toji` | `2.0` | 09:27:33Z | 3 | +86/−0 | `feat(agent):` | add orchestrate subagent for task decomposition |
| **#24452** | `MrRobotoGit` | `dev` | 09:31:21Z | 5 | +398/−17 | `feat(tui):` | pinned session tabs in the right sidebar |
| **#24458** | `ian-pascoe` | `dev` | 09:50:04Z | 1 | +1/−0 | `docs:` | add opencode-adaptive-thinking to ecosystem |
| **#24459** | `qz1543706741` | `dev` | 09:53:35Z | 4 | +154/−4 | `feat(opencode):` | add async command endpoint |
| **#24461** | `CloudedQuartz` | `dev` | 10:01:52Z | 1 | +0/−143 | `chore(session):` | remove unused [ide-assistant-A]-gpt-5 system prompt |

Cross-repo open velocity in the same window:
- `openai/codex`: 0 opens (1 stack-rebase metadata-bump on bolinfest stack only)
- `BerriAI/litellm`: 0 opens (also 0 closes, 0 metadata-bumps — fully silent window)
- `QwenLM/qwen-code`: 0 opens (1 metadata bump on #3637 with content churn, 1 on #3640)
- `block/goose`, `cline/cline`, `All-Hands-AI/OpenHands`, `Aider-AI/aider`, `charmbracelet/crush`: all 0 updates ≥09:25:13Z

So the **opens-per-repo distribution** in window is (5, 0, 0, 0, 0, 0, 0, 0, 0). One repo absorbs the entire open volume of the cohort.

## Why this is structurally new

In the Add.42–50 tracked range, opens were typically scattered across at least 2 repos per window. Examples from the immediate prior windows:
- Add.50 (39m36s): 2 opens, on `sst/opencode` (#24448) and `QwenLM/qwen-code` (#3640) — 2 repos.
- Add.49 (56m41s): 1 open, on `QwenLM/qwen-code` (#3637) — 1 repo, but only 1 PR total.
- Add.48 (35m25s): 2 opens, on `QwenLM/qwen-code` (#3636) and `BerriAI/litellm` (open noted in Add.48) — 2 repos.
- Add.47 (1h+): 3+ opens spread across `qwen-code`, `sst/opencode`, `litellm`.

The Add.51 pattern (n=5 opens, 1 repo, 0 opens elsewhere) is the **first n≥3 open-burst with single-repo concentration** in the Add.42–51 range. Synth #126 (single-author surface-family stewardship escalation past synth #121's n=4 to n=5) was about *one author* concentrating PRs on *one surface family*; Add.51's n=5 burst has **5 distinct authors** (`kuro-toji`, `MrRobotoGit`, `ian-pascoe`, `qz1543706741`, `CloudedQuartz`) and **5 distinct surface families** (`agent/`, `tui/`, ecosystem `docs/`, `opencode/` command-endpoint, `session/` prompts). The convergence is on the **repo** axis, not the author or surface axis.

## Intra-repo dispersion vs cross-repo concentration

The within-burst structure shows **strong dispersion**:

- **Author dispersion**: 5 PRs / 5 authors, no repeat author. Synth #92 (same-second 4-PR open tuplet by single author) and synth #93 (debut author 4-PR introduction) both have author-cardinality 1; this burst has author-cardinality 5.
- **Surface dispersion**: 5 distinct subsystem prefixes (`agent`, `tui`, `docs`, `opencode`, `session`). No two PRs share a subsystem prefix. The closest two are #24459 `feat(opencode):` and #24461 `chore(session):` (both touch top-level session-adjacent areas) but they are not the same surface.
- **Base-branch dispersion**: 4 PRs target `dev`, 1 targets `2.0`. The `2.0` base is the first non-`dev` base on `sst/opencode` opens in the Add.42–51 range. Two-base-branch dispersion in a single small window is itself structurally novel.
- **Title-prefix dispersion**: 3 `feat(...)`, 1 `docs:`, 1 `chore(session):`, **0 `fix(...)`**. The Add.49–50 windows were dominated by `fix(...)` opens (#3637, #3640, #24448 all `fix(...)`). The complete absence of `fix:` in a 5-open burst is itself a regime-shift signal.
- **Diff-size dispersion**: range from +1/−0 (trivial docs) to +398/−17 (5-file feat); 4 orders of magnitude. No clustering.

The **only** axis of concentration is the repository. The **only** axis of correlation across the burst is "happens to be on `sst/opencode/dev`-or-`2.0`."

## Why the drought matters

The cross-repo merge drought (5 consecutive zero-merge windows, 2h52m07s span) is the contextual frame. Two readings are consistent with the data:

1. **Drought-driven push-back**. Authors who would normally have their PRs merged within hours (and therefore not appear in successive windows) are queueing up against an unresponsive merge surface. Under this reading, the Add.51 burst on `sst/opencode` is a **backlog accumulation signal** — `sst/opencode` happens to have an active contributor cohort that keeps opening regardless of merge throughput, while other repos' contributors slow their open rate when they observe slow merge. This predicts: (a) the next merge wave on `sst/opencode` will be larger than typical (clearing accumulated PRs); (b) the open-rate ratio between `sst/opencode` and other tracked repos should *normalize* once merges resume.

2. **Repo-population timezone effect**. The Add.51 window (09:25:13Z–10:05:38Z) corresponds to ~17:25–18:05 in CST/Beijing, ~10:25–11:05 in CET, ~05:25–06:05 in EDT. `sst/opencode`'s contributor base (per Add.42–50 author lists) skews CST-active. The 5 burst authors are not all CST-located, but the timing-of-day fits a "European-morning + Asian-late-afternoon" overlap window. Under this reading, the single-repo concentration is **timezone-driven coincidence with the merge drought**, not caused by it. This predicts: (a) the next equivalent timezone overlap window on a different UTC day will produce a similar `sst/opencode` open burst regardless of drought state; (b) the cross-repo open-distribution returns to multi-repo within the next 1–2 windows as US-EDT contributors come online.

The two readings make different predictions and are distinguishable within W17.

## Falsifiable predictions

- **P-147.A**: When the cross-repo merge drought breaks (first merge in any tracked repo), `sst/opencode` will be the repo that breaks it, AND the breaking merge will be one of the 5 Add.51-burst PRs. **Strong form**: the breaking merge is one of {#24450, #24452, #24458, #24459, #24461}. **Weak form**: the breaking merge is on `sst/opencode` regardless of which PR. If the drought breaks on a non-`sst/opencode` repo, the backlog-push-back reading (#1) is weakened. If it breaks on `sst/opencode` but on a *different* PR (e.g., one of the long-tail PRs from prior addenda), the burst-PR-specific reading is falsified but the repo-level prediction holds.

- **P-147.B**: Within the next 3 tracked windows (≈Add.52–54), at least one other tracked repo (codex, litellm, qwen-code, goose, cline, OpenHands, aider, crush) will produce an n≥2 open burst in a single window. If `sst/opencode` continues to absorb 100% of opens for 3 more windows, the timezone-effect reading is falsified (no tracked repo has 3-consecutive-window timezone-overlap-only contributor structure) and the repo-cohort-effect reading hardens.

- **P-147.C**: The Add.51 burst will produce **at least one duplicate-of-existing-PR** signal — either by file-overlap with a prior `sst/opencode` PR in the Add.42–51 range, or by title-keyword overlap (e.g., another `tui session tabs` PR exists or appears). Backlog accumulation under merge drought tends to produce duplicate-feature opens (synth #45 and #82 both characterize this). If the 5 burst PRs all touch entirely disjoint files from all prior `sst/opencode` open PRs, the backlog-push-back reading is again weakened (the burst is greenfield, not backlog-driven re-do).

- **P-147.D**: The base-branch dispersion (4 `dev` + 1 `2.0`) is **incidental** — `kuro-toji`'s targeting of `2.0` is unique to that author's release-channel intent, not part of a cross-author `2.0`-targeting wave. Falsifier: if any of the next 3 `sst/opencode` opens (Add.52+) also target `2.0`, then a `2.0`-channel author cohort is forming and Add.51 #24450 is its leading edge.

## What this synth does *not* claim

- It does **not** claim `sst/opencode` is "more popular" or has a higher *baseline* open rate than the cohort. The structurally novel observation is the **distribution shape** in window (5,0,0,0,0,0,0,0,0), not the absolute count.
- It does **not** claim the merge drought is *caused* by the open burst (or vice versa). The two are temporally co-located; causal direction is unspecified.
- It does **not** claim the 5 burst authors are coordinating. Author-cardinality 5 with surface-cardinality 5 is *anti-coordination* evidence within the burst itself.
- It does **not** generalize beyond the Add.42–51 tracked range. Pre-Add.42 baselines (where similar single-repo bursts may have occurred) are not consulted.

## Provenance

- Add.51 evidence for the 5-open burst: `digests/2026-04-26/ADDENDUM-51.md`, "Opens in window" section.
- Cross-repo silence in same window: same addendum, "Notable updates" + per-repo absence in opens list.
- Drought context: synth #143 lineage (Add.49–51), 5-window zero-merge streak, 2h52m07s cumulative dry span.
- Distinguishes from: synth #92 (same-second 4-PR by single author), synth #93 (debut-author 4-PR), synth #126 (single-author n=5 stewardship), synth #45/#82 (duplicate-feature convergence — predicted by P-147.C as candidate refinement).
- Cross-checked via `gh pr list -R sst/opencode --state open --limit 15 --json number,createdAt,updatedAt,headRefOid,title,author,additions,deletions,changedFiles,baseRefName` at 2026-04-26T10:05:38Z.
