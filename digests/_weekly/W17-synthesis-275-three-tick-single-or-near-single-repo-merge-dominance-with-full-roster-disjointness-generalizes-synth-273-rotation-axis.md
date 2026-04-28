# W17 Synthesis #275 — Three-Tick Single-Or-Near-Single-Repo Merge Dominance With Full-Roster Disjointness Generalizes Synth #273 Rotation Axis Into Disjoint-Membership Sequence

**Date:** 2026-04-28 (capture window through Add.121 close 13:08Z)
**Repos:** openai/codex, sst/opencode, QwenLM/qwen-code, block/goose
**Refines:** synth #271 (single-repo monopoly tick degenerate-bimodal), synth #273 (cross-tick repo-identity rotation), synth #265/#267 (single-tick rebound).

## Pattern

Three consecutive Add.* ticks (Add.119, Add.120, Add.121) each exhibit **single-repo or near-single-repo merge dominance** (≥67% of in-window merge volume on one repo or a tight 2-repo cluster), AND the **active-merge-roster is pairwise disjoint across all three ticks** — no repo appears in more than one tick's active set. This is a stronger property than synth #273's pairwise rotation: synth #273 required only that consecutive ticks have different dominant repos (Add.119→Add.120 was codex→opencode); synth #275 establishes that across n=3 ticks, the dominant-roster sets `R_i` satisfy `R_119 ∩ R_120 = ∅`, `R_120 ∩ R_121 = ∅`, AND `R_119 ∩ R_121 = ∅` (full triangular disjointness, not merely successive disjointness).

## Concrete instances

- **Add.119 active-merge roster:** codex (jif-oai n=4 self-merge sprint 11:06:41Z–11:32:06Z #19961 `b7c0f269109f15331ccd8d4efd23377e5fe69aed`, #19963 `54d14011708bf551a04c6996e4ce10c001185042`, #19967 `fa127be25ff547c950240c4bfe6c100c394880b2`) — single-repo monopoly 100%.
- **Add.120 active-merge roster:** opencode (Brendonovich #24738 11:37:41Z `aa07f38b0708f306a25d55db8d2123498958f578`) — single-repo monopoly 100%, identity rotated from Add.119's codex.
- **Add.121 active-merge roster:** qwen-code (doudouOUC #3705 12:26:42Z `ba8d452ce5a0da09276fe73b4ccb102651ba0077`, yiliang114 #3708 13:04:53Z `8de1bcb2799e3c951968633c68aa56ec077fd128`) + goose (jamadeo #8866 12:56:08Z `e95811966a3b18f4ccb3df752bce7094b8bd7414`) — 2-repo cluster, qwen-code 67% / goose 33%, **zero overlap with codex (Add.119) or opencode (Add.120)**.

Triangular disjointness: {codex} ∩ {opencode} = ∅, {opencode} ∩ {qwen-code, goose} = ∅, {codex} ∩ {qwen-code, goose} = ∅. **All three pairwise intersections empty across n=3 ticks.**

## Why this is not synth #273

Synth #273 (cross-tick repo-identity rotation refining synth #271 monopoly framing) only required successive ticks to have different dominant repos. A sequence A→B→A would satisfy synth #273 (rotation occurs at each step) but VIOLATE synth #275's full-disjointness (R_1 ∩ R_3 = {A} ≠ ∅). Add.119–121 satisfies the stronger property: the merge-share is not merely rotating between two repos, it is **broadcasting across the full corpus** with each tick's dominant-set drawing from a previously-untouched portion of the 6-repo tracked set.

## Author-axis decoupling

The author-axis is also disjoint across ticks: Add.119 jif-oai (codex), Add.120 Brendonovich (opencode), Add.121 doudouOUC + yiliang114 (qwen-code) + jamadeo (goose). **Zero author overlap across all three ticks**, four distinct active authors total. This rules out a "single hot author whose repo-affinity rotates" explanation — the rotation is at the repo-author-pair joint level, not just the repo level.

## Falsifiers

- **Falsifier P-275-A:** Add.122 active-merge roster contains any repo from {codex, opencode, qwen-code, goose} — would break full-disjointness extension to n=4. Falsifier deadline: Add.122 close (~13:50-14:10Z).
- **Falsifier P-275-B:** if any of the four ticks (including Add.119 retroactively) had an additional smaller merge from a repo in another tick's roster that was missed in initial classification — would degrade single-repo-dominance claim. Confirmed clean for Add.119 (codex-only), Add.120 (opencode-only), Add.121 (qwen-code + goose only).
- **Falsifier P-275-C:** litellm or gemini-cli emerges as next tick's active-merge repo — both are in extended deep silence (litellm 10-tick 11h21m+, gemini-cli 20-tick 15h50m+) and entering their roster would establish n=4 disjoint-membership sequence, **extending rather than falsifying** the pattern. P-275-C is therefore a **strengthening prediction** not a falsifier.

## Mechanism candidates (all unconfirmed)

1. **Dispersion-by-exhaustion**: each tick exhausts a repo's pending-merge backlog, forcing the next tick's merge action to a different repo.
2. **Maintainer-rotation channel**: distinct timezone-banded reviewer cohorts active in different ticks (Add.119 jif-oai US, Add.120 Brendonovich AU/NZ, Add.121 doudouOUC + yiliang114 CN, jamadeo US) — UTC time progression coincides with handoff between TZ-banded reviewer cohorts whose repo-affinities differ.
3. **Independent Poisson processes with non-overlapping high-rate windows** — null-hypothesis baseline; testable via cross-tick covariance estimate but n=3 too small to reject formally.

## Predictions for tick 122

- **P-275-D:** Add.122 active-merge roster contains ≥1 repo from {litellm, gemini-cli, opencode, codex} — extends disjoint-membership sequence to n=4 if includes litellm or gemini-cli (full strengthening), partial reset if includes opencode or codex.
- **P-275-E:** synth #275 disjoint-roster regime breaks within 5 ticks (deadline Add.126) by repo-set repetition. Falsifier: Add.122–Add.126 all maintain pairwise-disjoint membership (would establish 8-tick disjoint sequence — extraordinary).
