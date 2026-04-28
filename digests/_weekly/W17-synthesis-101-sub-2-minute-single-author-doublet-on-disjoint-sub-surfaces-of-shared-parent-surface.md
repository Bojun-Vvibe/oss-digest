# W17 Synthesis #101 — Sub-2-minute single-author DOUBLET on disjoint sub-surfaces of a shared parent surface, with both members merging on first PR review-cycle pass

**Anchor window:** 2026-04-28T17:34:10Z → 17:35:24Z (1m14s).
**Anchor repo:** openai/codex.
**Anchor actor:** `fcoury-oai`.
**Parent synth:** #91 (single-author triplet self-merge metronome on disjoint surfaces, sub-15-min inter-merge cadence). #85 (sub-10s same-author cross-PR doublet on adjacent surfaces).

## Why this is distinct from #91 and #85

Synth #91 captured **triplet** (N=3) cadence with **inter-merge gaps in the 5–15 minute range** on **fully disjoint top-level surfaces**. Synth #85 captured **doublet** (N=2) at **sub-10-second granularity** on **adjacent surfaces** (typically the same file or directly co-located files in a single subsystem).

Synth #101 carves out a precisely-bounded middle band that neither covers:
- **Cardinality N=2** (doublet, not triplet) — narrower than #91.
- **Inter-merge gap 60–120 seconds** — wider than #85's sub-10s but narrower than #91's 5–15min.
- **Sub-surface disjointness within a shared parent surface** — between #85's "adjacent" and #91's "fully disjoint", the two PRs touch a **shared parent surface** (e.g., `tui`) but **non-overlapping sub-surfaces** (e.g., `composer/drafts.rs` vs. `shell-mode/escape.rs`).
- **Both PRs land on first review-cycle pass** — no rejection-rework loop between members; this distinguishes synth #101 from synth #87 (asymmetric half-merge of sub-10s doublet, prune half lands, rework half iterates).

## The two members

| PR | Author | Merged | SHA | Sub-surface | Title |
|---|---|---|---|---|---|
| [openai/codex#19901] | fcoury-oai | 17:34:10Z | `c6bcd2783298` | `tui` / composer drafts | `feat(tui): suggest plan mode from composer drafts` |
| [openai/codex#19986] | fcoury-oai | 17:35:24Z | `a0365841049f` | `tui` / shell-mode escape | `fix(tui): let esc exit empty shell mode` |

Inter-merge gap: **1 minute 14 seconds**. Both PRs use the `(tui):` scope prefix in conventional-commit style. The first is a `feat:` (new behavior) and the second is a `fix:` (bug-class). Both target the `tui` parent surface but on disjoint sub-areas: composer-mode prompt suggestion vs. shell-mode escape-key handling.

## What the structural shape tells us that #91 and #85 cannot

**(a) The 60–120s band is mechanically distinct.** Sub-10s doublets (synth #85) almost always indicate a **single CI run** that batched two PR merges via a queue or the same-runner round-trip; the merges are de facto simultaneous. 5–15min triplets (synth #91) indicate a **human-paced cadence** where the author waits for each PR's full CI to greenify before queuing the next. The 60–120s band is **neither**: it is too long to be a single CI batch and too short for a full per-PR CI cycle on a multi-stage pipeline. The most plausible mechanism is **CI-fast-path or merge-queue with bypass for low-risk diffs**, where the author has staged both PRs concurrently and they pop off the merge queue as their respective fast-path checks complete.

**(b) Conventional-commit prefix mixing within a doublet (`feat:` then `fix:`) suggests staged authoring.** The first PR is the `feat:` work the author was actively writing; the `fix:` is a tangentially-discovered bug while writing the feat that the author span-tested and submitted as a separate PR rather than folding into the feat. This is **co-discovery doublet** — two PRs with one logical authoring session but two distinct intent classes. Synth #85's sub-10s doublets are usually same-intent (both `chore:` or both `fix:`) because they originate from a single mechanical edit; synth #101's 60–120s doublets diverge in intent because they originate from **discovery during feature work**.

**(c) Shared parent surface is a **directional** signal, not just a co-location signal.** Both PRs touch `tui`, which means the author's mental model is **anchored to a single top-level subsystem** for the session. Compare with synth #91 triplets whose three members typically span **3 distinct top-level subsystems** (e.g., codex Add.127's mchen-oai TUI + colby-oai MCP + efrazer-oai JWT). The narrowness-of-anchor in #101 (single parent surface) is what lets the author produce two PRs in 1m14s — they did not need to context-switch top-level subsystems.

## The synth #101 predicate

A doublet qualifies under synth #101 when:
1. **N=2** consecutive merges by the **same author** on the same repo.
2. **Inter-merge gap 60s ≤ Δt ≤ 120s.**
3. Both PRs declare the **same parent surface** in their conventional-commit scope prefix (e.g., `(tui):`, `(httpapi):`, `(vertex):`).
4. The two PRs touch **non-overlapping files** at the directory level below the parent surface (sub-surface disjointness verifiable via `gh pr view --json files`).
5. **Neither PR has a request-changes review or a rework cycle**; both merge on first review-pass.
6. The two PRs use **different conventional-commit type prefixes** (e.g., `feat:` + `fix:`, or `refactor:` + `test:`), evidencing co-discovery rather than mechanical batch.

The fcoury-oai #19901 + #19986 pair satisfies all six predicates (titles confirm `(tui):` scope shared, prefixes `feat:` vs. `fix:` divergent, sub-surfaces composer vs. shell-mode disjoint, inter-merge gap 1m14s in band).

## Cross-repo prior-art search in W17

- **anomalyco/opencode kitlangton**: Add.127 `(httpapi):` sprint members #24799, #24809, #24811 have inter-merge gaps 7m26s and 1h45m36s respectively — both **outside** the 60–120s band, so kitlangton's `(httpapi):` work is **not** a synth #101 instance, it is a synth #91-style metronome. The synth #101 band is empirically rare in W17 to date.
- **openai/codex jif-oai memories series** (per Add.127 synth #285 reference): jif-oai #20005 and earlier members had inter-merge gaps in the 30–90 minute range — also outside the band.
- **The fcoury-oai doublet is the first observed synth #101 instance in W17 day-2026-04-28**, and possibly the first in the W17 corpus (no scan of #80–#99 reveals a 60–120s same-author doublet with shared scope-prefix).

This rarity is the **point**. Synth #101 is a discriminator for a narrow operational mode (CI-fast-path + co-discovery + single-subsystem anchor), and tracking it lets the digest detect when an author has shifted into that mode.

## Open questions for downstream synth

- Does fcoury-oai produce a synth #101 doublet on a different parent surface within W17? (Pred III-101 in Add.128 tracks 8-tick window.)
- Is the 60–120s inter-merge gap a property of codex's CI fast-path specifically, or does it generalize to other repos with similar CI? (Cross-repo Pred III-101 instance count over 8 ticks will discriminate.)
- Does the **`feat:` + `fix:` prefix asymmetry** correlate with future fcoury-oai PRs that revert one member (i.e., the `fix:` was insufficient and the bug recurs)? (Future surveillance — not predicated yet.)
- Is there an N=3 extension where a synth #101 doublet expands to a triplet within 5 minutes, on the same parent surface? (Tracks intersection of #101 with #91.)

## Distinctiveness from prior W17 synths — summary table

| Aspect | #85 sub-10s doublet | #91 triplet metronome | **#101 sub-2-min doublet** |
|---|---|---|---|
| N | 2 | 3 | **2** |
| Inter-merge gap | <10s | 5–15min | **60–120s** |
| Surface relation | adjacent (same file/dir) | fully disjoint top-level | **shared parent, disjoint sub-surface** |
| Causal mechanism | single CI batch | per-PR CI sequence | **CI fast-path / merge-queue bypass** |
| Intent prefix variety | usually same-intent | usually mixed-intent across 3 | **mixed-intent across 2 (co-discovery)** |
| Author cognitive anchor | one mechanical edit | three subsystems | **one parent subsystem, two sub-areas** |

**Anchor SHAs cited:** `c6bcd2783298` (#19901), `a0365841049f` (#19986).
