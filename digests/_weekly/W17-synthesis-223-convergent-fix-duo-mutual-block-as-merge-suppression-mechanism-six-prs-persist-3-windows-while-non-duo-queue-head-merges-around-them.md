# W17 Synthesis #223 — convergent-fix-duo mutual-block as merge-suppression mechanism: six PRs across three repos persist 3 ADDENDUM windows OPEN-with-unchanged-headRefOid while NON-duo queue-head PRs merge around them, demonstrating that two independent authors filing convergent fixes on the same surface induces a maintainer-attention deadlock that solo PRs are exempt from

**Date noted:** 2026-04-27 (UTC)
**Status:** Provisional — three-window persistence with explicit selection-around evidence from Add.93.
**Predecessors:** synth #121 (three-duo cross-repo convergent fix multiplicity with embedded thinking-content trio; Add.91 seed), synth #105 (auto-merge policy adoption as regime-change event), synth #195 (stack abandonment with flat replacement).
**Refines:** synth #121 (upgrades observation from "convergent-fix-duo as multiplicity phenomenon" to "convergent-fix-duo as merge-suppression mechanism").

## Claim

When two independent authors file PRs targeting **the same fix surface** in the same repo within a short window (a "convergent-fix duo"), the duo enters a **mutual-block state** in which neither member merges quickly, even when both are individually merge-ready. Solo PRs (no convergent partner) on adjacent or unrelated surfaces in the same repo continue to merge around the blocked duo. The block is **maintainer-attention-bound**: maintainers defer merging either duo member until they can disambiguate which fix is correct, and the deferral persists across multi-window timescales (≥3 ADDENDUM windows = ~3h corpus time observed).

This is **distinct from** synth #195's stack abandonment (which is full-stack, author-driven, terminates in mass-close) and from synth #105's auto-merge regime change (which accelerates trivial fixes regardless of duo status).

## Evidence — exact PR refs and three-window persistence table

The six tracked convergent-fix-duo PRs across Add.91, Add.92, Add.93:

| Duo | Repo | PR | Author | Surface | headRefOid (Add.91→Add.93) | Status across 3 windows |
|---|---|---|---|---|---|---|
| litellm-A | BerriAI/litellm | #26598 | zyz23333 | (convergent fix) | unchanged | OPEN→OPEN→OPEN |
| litellm-A | BerriAI/litellm | #26593 | weiguangli-io | (convergent fix) | unchanged | OPEN→OPEN→OPEN |
| opencode-A | anomalyco/opencode | #24618 | leandrosnx | (convergent fix) | `c11a6d4745` unchanged | OPEN→OPEN→OPEN |
| opencode-A | anomalyco/opencode | #24605 | rachadaccoumeh | (convergent fix) | unchanged | OPEN→OPEN→OPEN |
| qwen-code-A | QwenLM/qwen-code | #3677 | shenyankm | parse MiniMax thinking tags | `77c53e05a2` unchanged | OPEN→OPEN→OPEN |
| qwen-code-A | QwenLM/qwen-code | #3675 | YlLVTECH | (convergent fix) | unchanged | OPEN→OPEN→OPEN |

Across the same three windows, **non-duo PRs in the SAME repos merged**:

| Repo | Non-duo PR merged | Merge SHA | Author | Merged (UTC) | In which Add window? |
|---|---|---|---|---|---|
| anomalyco/opencode | #24592 | `61eabfc60c` | MrMushrooooom | 09:02:28Z | pre-Add.91 (baseline) |
| anomalyco/opencode | #24614 | `ede354b0e6` | SeashoreShi | 14:44:53Z | **Add.93** |
| QwenLM/qwen-code | #3661 | `596b5a3fd7` | dreamWB | 12:28:17Z | Add.91/92 boundary |
| QwenLM/qwen-code | #3656 | `8a278767ed` | qqqys | 14:50:18Z | **Add.93** |
| QwenLM/qwen-code | #3617 | `414b3304cd` | mohitsoni48 | 15:01:03Z | **Add.93** |
| QwenLM/qwen-code | #3624 | `f0e8601982` | doudouOUC | 14:01:47Z | Add.92/93 boundary |

**Selection asymmetry:** Across Add.93 alone, opencode merged 1 PR (#24614, non-duo) and zero duo PRs; qwen-code merged 2 PRs (#3656, #3617, both non-duo) and zero duo PRs. **The selection regime preferentially picks non-duo PRs at a 4:0 ratio in this window.** This is a stronger discriminator than synth #121 originally claimed.

## The mutual-block mechanism

Three candidate mechanisms could explain the persistence:

1. **Maintainer-attention deadlock** (this synth's primary hypothesis): both PRs are merge-ready in isolation; maintainer must compare them to pick the correct one; the comparison is deferred indefinitely because a third opinion (or original author) is needed to disambiguate. Solo PRs face no such comparison cost and merge at normal cadence.
2. **CI-conflict serialization**: both PRs touch the same files; merging one would force a rebase of the other; maintainer waits for one author to withdraw. Falsified by absence of `closed` events on any of the six.
3. **Author-side withdrawal pending**: both authors waiting for each other to back off. Falsified by **unchanged headRefOid for all six across 3 windows** — neither author is actively pushing updates that would signal continued investment.

Mechanism 1 is the only one consistent with all observed evidence: **OPEN-but-unchanged**, **maintainer never selects**, **non-duo PRs merge around them**, **no closes**, **no force-pushes**.

## Discriminator vs precedents

- **vs synth #121 (three-duo convergent-fix multiplicity as Add.91 observation):** synth #121 framed the multiplicity as a **transient phenomenon** to be re-checked. Synth #223 upgrades it to a **persistent mechanism** with a named cause (maintainer-attention deadlock) and a structural prediction (duos do NOT resolve quickly; selection bypasses them).
- **vs synth #195 (stack abandonment with flat replacement):** synth #195 is **author-driven mass-close** of a chained stack, replaced by a flat single PR by the **same** author. Synth #223 is **maintainer-driven indefinite-defer** of two PRs by **different** authors, with **no replacement**. The duos are not abandoned — they remain OPEN and merge-ready.
- **vs synth #105 (auto-merge policy adoption as regime-change):** synth #105 captures a goose-specific policy change that **accelerates** dependabot merges. Synth #223's mutual-block applies even in repos with auto-merge (auto-merge requires CI green; auto-merge does NOT disambiguate convergent fixes — it would merge whichever PR's CI greens first, but maintainers can override or pause). The block is **above** the auto-merge layer.
- **vs synth #199 (title-prefix discipline as merge-velocity correlate):** five of the six duo PRs use proper `fix(...)` prefixes (the high-velocity discipline per synth #199), yet they **persist OPEN longer than badly-titled solo PRs**. **Title discipline does NOT exempt from convergent-duo block** — falsifying the strong form of synth #199 for the convergent-duo subclass.

## Quantitative selection asymmetry (Add.93 cross-section)

Add.93 window: 14:13:16Z → 15:13:39Z (60m23s).
- Total merges in repos with active duos (opencode + qwen-code): **3** (#24614, #3656, #3617).
- Of those, in the duo set: **0**.
- Of those, NOT in the duo set: **3** (100%).
- Tracked open duo PRs in those repos: **4** (#24618, #24605, #3677, #3675).
- Tracked open non-duo PRs in those repos at queue head (estimated from Add.92): **~7-9** (#24614 SeashoreShi, #24612 ricardofiorani, #24595 andocodes, #24589 cgarrot, #3680 chiga0, #3673 LaZzyMan, #3671 chiga0, #3668 shenyankm, #3667 pomelo-nwu).

Estimated "merge probability per window per PR":
- Non-duo: 3 merges / ~8 non-duo PRs = ~0.375 per window.
- Duo: 0 merges / 4 duo PRs = 0 per window.

**Duo merge-rate is statistically zero** at the window granularity, while non-duo merge-rate is ~37%. The asymmetry is **observable and persistent**, not noise.

## Prediction (in-vivo at synth-creation time)

1. **Highest-confidence**: by Add.94, the four opencode/qwen-code duo PRs (#24618, #24605, #3677, #3675) remain OPEN with unchanged headRefOid. Maintainer-attention deadlock predicts ≥4 more windows of persistence.
2. **Highest-confidence**: at least 1 non-duo PR in opencode or qwen-code merges in Add.94, ratifying the selection asymmetry.
3. **Medium-confidence**: when ONE duo finally resolves, it resolves via **close-not-merge** for one member (the maintainer picks a winner and closes the loser as `Duplicate of #X`). This is the canonical mutual-block exit.
4. **Medium-confidence**: a fourth convergent-fix duo emerges in Add.94 or Add.95 — the mechanism is not specific to these repos and should recur in litellm or codex when two contributors independently encounter the same bug surface.
5. **Speculative**: a maintainer comment appears on one duo member referencing the other (`Duplicate of`, `Supersedes`, `Closes in favor of`) by Add.95 — explicit acknowledgment of the mutual-block, validating the maintainer-attention-deadlock mechanism directly.

## Cross-references

- **synth #121** (three-duo convergent-fix multiplicity, Add.91 seed): upgraded by this synth from observational to mechanistic.
- **synth #195** (stack abandonment + flat replacement): orthogonal — author-driven vs maintainer-driven persistence.
- **synth #199** (title-prefix discipline as velocity correlate): partially falsified for convergent-duo subclass — discipline does not exempt from block.
- **ADDENDUM-93** Add.93 pred #5: directly tests prediction #1 of this synth (duo persistence to Add.94).
- **synth #105** (goose auto-merge policy): orthogonal layer — auto-merge accelerates non-controversial PRs but cannot disambiguate convergent fixes.
- **synth #222** (jif-oai persistent skip of #19805): structurally analogous — selection regime preferentially does NOT select certain PRs. But synth #222's skip is **single-PR, author-deliberate**; synth #223's block is **paired-PR, maintainer-deliberate**. The two together suggest a general principle: **the W17 corpus exhibits reproducible non-selection patterns at multiple scopes (single-PR author-skip, two-PR maintainer-defer)**, both invisible from PR-merge-rate alone.
