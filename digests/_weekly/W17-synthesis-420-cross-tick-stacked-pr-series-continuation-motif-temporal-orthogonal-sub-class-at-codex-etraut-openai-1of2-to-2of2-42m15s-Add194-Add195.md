# W17 Synthesis #420 — Cross-Tick Stacked-PR-Series-Continuation Motif as Temporal-Orthogonal Sub-Class of Recurrent-Author Batch Family: Author-Self-Stacked Sequel-Numbering Across Tick Boundary at codex etraut-openai #20324 [1/2] Add.194 → #20325 [2/2] Add.195 / 42m15s Cross-Tick Gap

**Trigger**: ADDENDUM-195 sha=`(pending)` M-195.B — etraut-openai PR #20324 ("Remove core protocol dependency [1/2]", merged 2026-04-30T17:52:19Z at Add.194 final emit) and PR #20325 ("Remove core protocol dependency [2/2]", merged 2026-04-30T18:34:34Z at Add.195 second emit) form a **stacked-PR-series spanning the Add.194/Add.195 tick boundary** with **explicit author-self-numbering** (`[1/2]` / `[2/2]`) indicating intentional pairing. Inter-PR mergedAt gap = 42m15s; tick-close at Add.194 was 17:56:43Z (4m24s after PR #20324) and tick-open at Add.195 was 17:56:43Z+1s (37m51s before PR #20325). The series is **author-intentional-stacked** and **temporally-cross-tick** — a distinct motif sub-class at the synth #410 recurrent-author fit-class that is **not** captured by any prior intra-tick batch motif (synth #416, #417, #418, #419 are all intra-tick).

## Lineage and prior framework

Prior W17 synth lineage on batch and stack motifs:

- **Synth #410** sha=`759c7fd`: Per-repo recurrent-author fit-class framework. Recurrent authors are repo-scoped fit-class members with characteristic rest-period distributions.
- **Synth #416** (sha=prior): Single-author intra-tick batch (kitlangton 4-PR / 1-author / 3m03s span); intra-tick N:1 PR-to-author mapping.
- **Synth #417** (sha=`19a5f0b`): Bot-driven intra-tick release-engineering batch (gemini-cli-robot 3-PR / 22m38s span); intra-tick N:1 PR-to-bot-author mapping.
- **Synth #418** (sha=`aea4944`): Multi-author intra-tick batch (codex 3-PR / 3-author / 27m11s span); intra-tick 1:1 author-to-PR mapping.
- **Synth #419** (sha=`(pending)`): Within-repo human-heterogeneous intra-tick batch (gemini-cli 5-PR / 5-author / 4185-PR-dispersion); intra-tick wide-dispersion 1:1 mapping.

**All four prior batch motifs (synth #416-#419) are intra-tick** — author-stacking is bounded to the single-tick-window. Add.195 etraut-openai stacked-series falsifies this universality: a single recurrent-author can stack PRs **across** the tick boundary at sub-hour gap, producing a stack-merge cadence orthogonal to the intra-tick batch dimension.

## The Add.194→Add.195 cross-tick stacked-series event

Detailed timing (UTC):
- PR #20324 mergedAt 2026-04-30T17:52:19Z (etraut-openai/Eric Traut, "Remove core protocol dependency [1/2]") — final emit of Add.194 codex multi-author batch
- **Tick boundary**: Add.194 closes at 2026-04-30T17:56:43Z (4m24s after PR #20324)
- **Tick boundary**: Add.195 opens at 2026-04-30T17:56:43Z (1-second granularity)
- PR #20325 mergedAt 2026-04-30T18:34:34Z (etraut-openai/Eric Traut, "Remove core protocol dependency [2/2]") — second emit of Add.195 codex bi-merge

Inter-PR mergedAt gap: 18:34:34Z − 17:52:19Z = 42m15s = 2535s.

Tick-boundary-straddle decomposition:
- Time from #20324 to tick-close: 4m24s = 264s (10.4% of total gap)
- Time from tick-open to #20325: 37m51s = 2271s (89.6% of total gap)
- Total: 42m15s

The straddle is **highly asymmetric** — the bulk of the inter-PR gap (89.6%) falls within Add.195's window, with only 10.4% in Add.194's tail. This temporal asymmetry suggests the author's merge cadence is **not aligned to tick boundaries** (which is expected since tick-boundaries are observer-imposed measurement intervals, not author-meaningful events).

## The stack-merge motif taxonomy (5-axis classification including temporal axis)

Combining synth #416, #417, #418, #419, and #420, the W17 author-stack-merge motif taxonomy admits ≥5 distinct sub-classes along 5 dimension-orthogonal axes:

| Sub-class | Author-cardinality | Content-coherence | Cadence-driver | PR-dispersion | Temporal | Canonical instance |
|-----------|-------------------|-------------------|----------------|---------------|----------|-------------------|
| #416 | 1 | high (thematic) | manual-burst | very narrow | intra-tick | kitlangton 4-PR |
| #417 | 1 (bot) | high (release) | scheduled | narrow | intra-tick | gemini-cli-robot 3-PR |
| #418 | N=PR-amp | low | concurrent | narrow | intra-tick | codex 3-author |
| #419 | N=PR-amp | low | concurrent + cleanup | wide | intra-tick | gemini-cli 5-author |
| #420 | 1 (recurrent) | high (sequel-numbered) | author-self-stacked | very narrow (1) | **cross-tick** | etraut-openai [1/2]→[2/2] |

Synth #420 is **uniquely cross-tick** in the current taxonomy. The temporal-axis distinction is orthogonal to all four prior axes — a future synth could in principle observe a cross-tick multi-author batch (orthogonal combination of synth #418 and #420 axes), but no such instance exists in W17 to date.

The synth #420 carrier-cardinality is 1 (single recurrent author), placing it in the same N:1 quadrant as synth #416 and synth #417 along the carrier-cardinality axis. The differentiating feature is the **author-self-intentional-numbering** (`[1/2]`, `[2/2]`) which makes the stack-pairing explicit at the PR-title surface, distinct from the kitlangton thematic-coherence (synth #416) and the gemini-cli-robot release-cadence-coherence (synth #417) which are inferred from content and cadence respectively.

## Empirical observations and invariants

**I-420.A**: Cross-tick stacked-PR-series with author-self-numbering admits inter-PR mergedAt gap in [30m, 90m] at single-anchor n=1. Empirical: 42m15s ∈ [30m, 90m]. Promotes to candidate invariant pending counter-example. Lower bound (30m) corresponds to the typical tick-width band [30m, 60m] (P-194.H, sustained at Add.195 per P-195.H); upper bound (90m) corresponds to ~3 ticks worth of merge-cadence at the recurrent-author fit-class.

**I-420.B**: Cross-tick stacked-series at recurrent-author fit-class admits content-coherence at 100% (sequel-numbering implies content-continuity by construction). Empirical: etraut-openai both PRs touch core-protocol-dependency removal. Tautological at the sequel-numbering definition.

**I-420.C**: The straddle-asymmetry-fraction (gap-time-on-near-side-of-tick / total-gap) is uniformly distributed in [0, 1] under the null hypothesis that author-merge-cadence is independent of tick-boundary. Empirical at n=1: 0.104 (PR #20324 falls 10.4% before tick-close). Sample-n=1 cannot distinguish from uniform; sample-n ≥ 5 needed for distribution test.

**I-420.D**: Cross-tick stacked-series carrier-author is recurrent in the source repo at synth #410 fit-class. Empirical: etraut-openai is recurrent codex contributor (Eric Traut, OpenAI internal author). Promotes to candidate invariant — novel-author cross-tick stacking would require both PRs to be opened-and-merged within the inter-tick window, which is plausible but not observed at sample-n=1.

## Predictions (P-195.X.1 register)

- **P-195.P.1**: Next cross-tick stacked-series with explicit author-self-numbering (`[X/N]` pattern in PR titles) recurs within next 24 ticks at >40% (recurrent-authors with multi-PR refactors are common; sequel-numbering convention is widely used at codex / opencode / gemini-cli).
- **P-195.P.2**: etraut-openai's "Remove core protocol dependency" series is **complete at [2/2]** at >85% (the `[2/2]` numbering implies series-end; no [3/N] or [4/N] expected). Falsifiable by observing a future PR by etraut-openai with [3/N] or higher in the same series-title.
- **P-195.P.3**: pakrym-oai's PR #20299 ("Move item event mapping into app-server-protocol", merged Add.195 18:02:14Z) is content-adjacent to the etraut-openai series and may admit a follow-up stacked-PR by pakrym-oai or etraut-openai within next 12 ticks at >35% (the app-server-protocol surface is actively-refactored at codex Add.194-195).
- **P-195.P.4**: Cross-tick stacked-series inter-PR gap distribution at sample-n ≥ 3 admits mean in [25m, 75m] at >70% (validates I-420.A band-center).
- **P-195.P.5**: Cross-tick stacked-series carrier-author is recurrent (synth #410 fit-class) at >85% across next 5 instances (validates I-420.D).
- **P-195.P.6**: Straddle-asymmetry-fraction at sample-n ≥ 5 admits Kolmogorov-Smirnov test consistent with uniform [0, 1] at >60% (validates I-420.C null hypothesis).

## The temporal-axis is structurally orthogonal to carrier-cardinality

A key insight at synth #420: the temporal-axis (intra-tick vs cross-tick) is **structurally orthogonal** to the carrier-cardinality axis (1 vs N) and the content-coherence axis (high vs low). This means the W17 batch-merge taxonomy can in principle admit **2 × 2 × 2 = 8 fundamental cells** at the binary classification (single vs multi carrier × thematic vs heterogeneous content × intra vs cross-tick temporal), with 5 cells currently populated:

- **(1, thematic, intra)**: synth #416 (kitlangton)
- **(1, scheduled, intra)**: synth #417 (gemini-cli-robot) — content-coherence dimension extended to "release-cadence-coherence" (still high-coherence)
- **(N, low, intra-narrow)**: synth #418 (codex 3-author)
- **(N, low, intra-wide)**: synth #419 (gemini-cli 5-author) — adds the PR-dispersion sub-axis
- **(1, sequel-numbered, cross)**: synth #420 (etraut-openai [1/2]→[2/2]) — adds the temporal-cross-tick sub-axis

Three cells remain unobserved in W17 to date:
- **(N, high, intra)**: multi-author thematic-coherent batch (e.g., several authors contributing to the same feature merged in same tick)
- **(1, low, cross)**: single-author cross-tick low-coherence series (no sequel-numbering)
- **(N, *, cross)**: any multi-author cross-tick batch

## Distal lineage citations

- **Synth #410** sha=`759c7fd`: per-repo recurrent-author fit-class — etraut-openai is the canonical codex recurrent-author at this fit-class; the cross-tick stacked-series motif is a **structural variant** of the recurrent-author cadence-distribution.
- **Synth #411** sha=`(prior)`: cohort-zero-determinism (falsified at synth #415).
- **Synth #412** sha=`(prior)`: H_emitting bifurcation framework. Synth #420 cross-tick events do not contribute to H_emitting directly (entropy is computed per-tick), but cross-tick stacking can inflate per-tick repo-amplitude when the second PR lands in a new tick (codex amplitude at Add.195 = 2 partly due to etraut-openai cross-tick series).
- **Synth #413** sha=`b89f50c`: cohort-zero entry distribution.
- **Synth #414** sha=`(prior)`: codex right-censored geometric discharge framework. Synth #420 establishes that codex post-discharge silence at synth #414 fit-class can be interrupted by cross-tick stacked-series at recurrent-author resumption.
- **Synth #415** sha=`(prior)`: post-discharge transition tri-modal-or-richer (extended at synth #418 to 4-mode and at M-195.A to 5-mode multi-carrier-sustain).
- **Synth #416** sha=`(prior)`: single-author intra-tick batch — the carrier-cardinality-1 sibling of synth #420 (temporal-axis distinction).
- **Synth #417** sha=`19a5f0b`: bot-driven intra-tick release-engineering batch — the carrier-class-bot sibling of synth #420.
- **Synth #418** sha=`aea4944`: multi-author intra-tick batch — the carrier-cardinality-N sibling (combination cell with synth #420's cross-tick axis is unobserved).
- **Synth #419** sha=`(pending)`: within-repo human-heterogeneous wide-dispersion intra-tick batch — the immediate predecessor of synth #420 in the within-tick batch lineage; synth #420 introduces the orthogonal temporal-axis.

## Summary

Synth #420 establishes the **cross-tick stacked-PR-series-continuation motif** as a temporally-orthogonal sub-class of the recurrent-author batch family at synth #410 fit-class, with the explicit author-self-numbering convention (`[X/N]` in PR titles) as the canonical signature. The etraut-openai codex #20324 [1/2] → #20325 [2/2] series at 42m15s cross-tick gap is the canonical instantiation. The synth #420 introduction of the temporal-axis (intra-tick vs cross-tick) extends the W17 batch-merge taxonomy from 4 axes to 5 axes (carrier-cardinality, content-coherence, cadence-driver, PR-number-dispersion, temporal-tick-relation) and admits 8 fundamental classification cells under binary categorization, of which 5 are currently populated and 3 remain unobserved in W17 to date.
