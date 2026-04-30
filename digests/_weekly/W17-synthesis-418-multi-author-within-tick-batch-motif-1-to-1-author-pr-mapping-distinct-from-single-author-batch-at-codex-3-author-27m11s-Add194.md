# W17 Synthesis #418 — Multi-Author Within-Tick Batch Motif as Distinct Sub-Class of Batch-Merge Family: Author-Cardinality = Batch-Amplitude Distinguishes From Single-Author Batch at codex 3-PR / 3-Author / 27m11s Span Add.194

**Trigger**: ADDENDUM-194 sha=`c70e664` M-194.D — codex triplet discharge at Add.194 instantiated as **multi-author within-tick batch motif** with 3 distinct authors (canvrno-oai #19843, teddywyly-oai #20458, etraut-openai #20324) merging within a 27m11s mergedAt window. The 1:1 author-to-PR mapping at this batch instance constitutes a **distinct sub-class** of the batch-merge motif family — distinguishing characteristics include (1) author-cardinality equals batch-amplitude (3 authors / 3 PRs), (2) longer inter-merge gaps (mean 13m36s vs 1m01s at synth #416 single-author batch), (3) heterogeneous PR-content (no thematic coherence — extension allowlist, protocol-dep removal, plugin-marketplace removal).

## Lineage and prior framework

Prior W17 synth lineage on batch-merge motifs:

- **Synth #416** (sha=prior): Single-author batch-merge motif at canonical instantiation (kitlangton 4-PR / 1-author / 3m03s span); the **N:1 PR-to-author mapping** with thematic coherence.
- **Synth #417** (sha=`19a5f0b`): Bot-driven release-engineering batch motif (gemini-cli-robot 3-PR / 1-bot / 22m38s span); the **N:1 PR-to-bot-author mapping** with release-cadence coherence.

Both synth #416 and #417 occupy the **single-carrier-author N:1** quadrant of the batch-motif taxonomy (one author, multiple PRs, content-coherence). Add.194 codex batch falsifies this universality at the 1:1 author-to-PR mapping instance — the codex triplet has author-cardinality = PR-cardinality = 3, with no carrier-author dominating the batch.

## The Add.194 multi-author within-tick batch event

Detailed timing (UTC):
- PR #19843 mergedAt 2026-04-30T17:25:08Z (canvrno-oai, "/plugins: remove marketplace") — first emit
- PR #20458 mergedAt 2026-04-30T17:29:03Z (teddywyly-oai, "[Extension] Allowlist Chrome Extension in the tool_suggest tool") — Δ=3m55s from #19843
- PR #20324 mergedAt 2026-04-30T17:52:19Z (etraut-openai/Eric Traut, "Remove core protocol dependency [1/2]") — Δ=23m16s from #20458

Inter-merge gaps: {3m55s, 23m16s} = {235s, 1396s}. Mean 13m36s = 815s. Min 235s. Max 1396s. CV ≈ 1.01 (very high). The gap-distribution is **bimodal-or-heavy-tail** even at sample-n=2 (one short gap ~4 minutes, one long gap ~23 minutes).

The three PRs are **content-heterogeneous**: PR #19843 removes the plugin marketplace (UI/feature surface), PR #20458 allowlists Chrome Extension in tool_suggest (security/policy surface), PR #20324 removes core protocol dependency [1/2] (architectural refactor — note "[1/2]" suggests a second part is pending). No thematic coherence binds these three PRs except they all merged into codex within the Add.194 capture window.

## The batch-merge motif taxonomy (3-axis classification)

Combining synth #416, #417, and #418, the W17 batch-merge motif taxonomy admits ≥3 distinct sub-classes along 3 dimension-orthogonal axes:

| Sub-class | Author-cardinality | Content-coherence | Cadence-driver | Mean inter-merge gap | CV | Canonical instance |
|-----------|-------------------|-------------------|----------------|---------------------|------|-------------------|
| **#416 single-author thematic** | 1 (N:1 mapping) | Thematic (helper migration) | Manual cognitive context | 61s | 0.43 | kitlangton 4-PR testEffect |
| **#417 bot-author release** | 1 bot (N:1 mapping) | Release-engineering (version stamping) | Algorithmic CI throttling | 679s | 0.054 | gemini-cli-robot 3-PR cherry-pick+changelog |
| **#418 multi-author heterogeneous** | N (1:1 mapping) | None (content-divergent) | Independent author timing | 815s | 1.01 | codex 3-author triplet |

The taxonomy is **dimension-orthogonal**: the three axes (author-cardinality, content-coherence, cadence-driver) admit at least 8 cells in the full classification space, of which 3 are now empirically instantiated. Future synth lineage may instantiate further cells (e.g., multi-author thematic — coordinated rollout; bot-author multi-target — automated migration tooling).

## The author-cardinality vs batch-amplitude relationship

The synth #418 sub-class is characterized by **author-cardinality = batch-amplitude** (1:1 mapping). This contrasts sharply with synth #416 / #417 where author-cardinality = 1 regardless of batch-amplitude (N:1 mapping). The 1:1 mapping has structural implications:

1. **Per-author silence-horizon** is uncorrelated across batch instances (each author at independent post-PR rest-period at synth #410 fit-class).
2. **Inter-merge-gap distribution** is **dispersion-dominated** rather than **batch-coherence-dominated** — the 23m16s gap between #20458 and #20324 reflects the etraut-openai author's independent merge schedule, not a batch-coherence constraint.
3. **Content-heterogeneity is the default** at multi-author batches; content-coherence requires coordinated planning across multiple authors (rare at synth #410 fit-class unless feature-team-driven).

## The "[1/2]" partial-stack signal

PR #20324 title contains the explicit suffix "[1/2]" indicating a planned second-part PR. This is a **stacked-PR signal** at the codex batch — the etraut-openai author has explicitly signaled a follow-up PR in the codex queue. The presence of stacked-PR signals at synth #418 multi-author batches is a **predictive marker** for next-tick emission: if any batch PR contains "[N/M]" or similar partial-stack markers, the host-repo emission distribution at the next tick is **upward-shifted** (P(amplitude ≥1 | next-tick) elevated).

## Predictions (P-418.X)

- **P-418.A**: Within next 6 ticks (Add.194 → Add.200), at least 1 additional multi-author within-tick batch occurs at codex (PR-count ≥3, author-cardinality = PR-cardinality) at >40% (codex multi-author batches recurrent at W17; PR queue dispersion across authors enables 1:1 batches at high prior).
- **P-418.B**: Multi-author batch CV stays above 0.5 at >70% (dispersion-dominated inter-merge-gap; independent author timing yields high variance; CV bounded above CV-floor of single-author batches).
- **P-418.C**: Multi-author batch content-coherence stays "none" (no thematic anchor) at >75% (rare coordination across authors at synth #410 fit-class; content-heterogeneity is the default).
- **P-418.D**: PR #20324 "[1/2]" partial-stack signal predicts at least 1 etraut-openai-authored codex emission within next 8 ticks at >70% (stacked-PR signals are reliable forward-emission predictors at single-anchor n=many).
- **P-418.E**: When multi-author batch occurs, repos with high author-pool size (codex, opencode, gemini-cli) are at >75% prior; repos with low author-pool size (qwen-code, goose) are at <15% prior (multi-author batch requires multiple concurrent authors which scales with author-pool size).
- **P-418.F**: Multi-author batches contribute to author-cardinality = batch-amplitude readings at >85% (the structural definition of synth #418 sub-class); when violated, the instance is reclassified as multi-author non-1:1 (e.g., 3 authors / 5 PRs would be a hybrid sub-class).
- **P-418.G**: Multi-author batches do **not** contribute to I-412.B emitting-majority breaches in the same way bot-author batches do (synth #417): multi-author batches inflate **author-cardinality fraction** (within a single repo) but each author contributes to the **same emitting-repo cardinality fraction** (the I-412.B numerator). Multi-author within-single-repo batches preserve I-412.B at single-repo dimension; cross-repo multi-author batches (Add.194 codex+litellm+gemini-cli) are what breach I-412.B.

## Notes on synth lineage

- **Extends synth #416** at the author-cardinality axis: synth #416 single-author batch motif occupies the N:1 PR-to-author quadrant; synth #418 multi-author batch motif occupies the 1:1 PR-to-author quadrant. Combined coverage of {N:1, 1:1} at canonical instantiation; 1:k and N:k mixed regimes await empirical instantiation.
- **Extends synth #417** at the cadence-driver axis: synth #417 bot-author release-engineering batch is **algorithmically throttled**; synth #418 multi-author batch is **dispersion-driven** (independent author timing). The cadence-driver axis admits {manual cognitive, algorithmic CI, dispersion-independent} at canonical instantiation.
- **Refines synth #415** (post-discharge transition tri-modal distribution) at the multi-carrier-reactivation mode: the codex multi-author batch at Add.194 is a **co-instance** of the synth #415 carrier-rotation extension (M-194.A multi-carrier reactivation as 4th post-discharge transition mode) — the multi-author batch contributes to multi-carrier reactivation by activating multiple distinct authors simultaneously within a single repo, while the cross-repo multi-carrier reactivation activates multiple distinct repos simultaneously.
- ADDENDUM-194 sha=`c70e664` referenced as the immediate trigger; M-194.D multi-author within-tick batch motif at codex with 3 distinct authors / 1:1 mapping / 27m11s span / heterogeneous content as canonical instantiation. The "[1/2]" partial-stack signal at PR #20324 is a forward-emission predictive marker validated at synth #418 sub-class.
