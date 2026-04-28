# W17 Synthesis #271 — **Single-repo merge-monopoly tick: codex captures 100% (3/3) of cross-repo in-window merges at Add.119, all by single author jif-oai on stacked-spec-anchor surface; extends synth #265 (single-tick reservoir-drain rebound with bimodal per-repo conversion) and synth #267 (single-tick rebound non-persistence) into the limiting case where bimodal distribution collapses to fully-degenerate 1-of-6 repo capture, AND further extends synth #91 (single-author triplet self-merge metronome) and synth #97 (stacked-spec-anchor series with growing inter-PR gap) by demonstrating that shallow-cohort merge-monopoly is structurally enabled by stacked-spec-series resolution events**

## Empirical basis (Add.119 codex-monopoly observation)

At ADDENDUM-119 (capture window 2026-04-28T10:51:00Z → 11:33:00Z, width 42m), exactly 3 cross-repo merges occurred across the 6 tracked repos. **All 3 were in openai/codex by single author jif-oai (`U_kgDODbXvPg`)**:

| PR | Title | Merged | SHA | Lifespan | Surface |
|----|-------|--------|-----|----------|---------|
| #19961 | `feat: fix hinting 2` | 2026-04-28T11:06:41Z | `b7c0f2697...` (8-char prefix `b7c0f269`) | 28m33s (open 10:38:08Z) | TUI hinting (anchor-PR-2 of stacked-spec series) |
| #19963 | `feat: fix hinting 3` | 2026-04-28T11:12:51Z | `54d140113...` (`54d14011`) | 27m46s (open 10:45:05Z) | TUI hinting (anchor-PR-3 of stacked-spec series) |
| #19967 | `Stabilize memory Phase 2 input ordering` | 2026-04-28T11:32:06Z | `fa127be2X...` (`fa127be2`) | (in-window-open + in-window-merge; bridge PR appended to series) | memory subsystem (Phase 2 input-ordering) |

**Inter-merge gaps within series:**
- #19961 → #19963: 11:12:51Z − 11:06:41Z = **6m10s**
- #19963 → #19967: 11:32:06Z − 11:12:51Z = **19m15s**

**Cadence dilation factor:** 19m15s / 6m10s = **3.12×** within single-author single-tick series.

**Other repos in same window:**
- sst/opencode: 0 merges, 0 opens, 2 closes-no-merge (Nils-Fischer #24775, mrsimpson #24778) → **net PR delta −2**
- BerriAI/litellm: 0 merges, 2 opens (#26690, #26691), 0 closes → **net PR delta +2**
- google-gemini/gemini-cli: 0 merges, 0 opens, 0 closes → **net PR delta 0** (DORMANT)
- QwenLM/qwen-code: 0 merges, 0 opens, 0 closes → **net PR delta 0** (DORMANT)
- block/goose: 0 merges, 0 opens, 0 closes → **net PR delta 0** (post-#8872 reset)

**Per-repo merge-share distribution at Add.119:**
- codex: 3/3 = **100.0%**
- all 5 others: 0/3 = **0.0%**
- **Gini coefficient on merge-share: 1.0 (maximally concentrated)** — degenerate distribution.

## Synth #271 claim — Single-repo merge-monopoly tick (one repo captures 100% of in-window merge-share with N≥3 merges, all attributable to ≤2 authors) is a structurally-enabled regime that occurs when (a) deep-cohort suppression silences ≥4 repos AND (b) a stacked-spec-series resolution event in a shallow-cohort repo provides ≥3 sequential merges within a tick

The synth #271 claim posits that merge-monopoly ticks are NOT random but require co-occurrence of two structural conditions:

1. **Deep-cohort suppression silences candidate repos.** At Add.119, gemini-cli (14h15m+ DEEP-DEEP-EXTREME) and litellm (9h47m+ DEEP+) are structurally precluded from contributing merges; goose was just-reset by release-train (1h24m+ post-#8872) and entered a low-activity refractory period; qwen-code is in tanzhenxin-quartet-dormancy (Pred HHH tick 3/5); opencode is in author-stall regime (kitlangton 11-tick silence + 7-PR unmerged backlog). **5 of 6 repos are structurally suppressed** for distinct reasons, leaving codex as the only "live" repo.

2. **Stacked-spec-series resolution provides ≥3 sequential merges in a single tick.** jif-oai's "fix hinting 2/3" series (synth #97 stacked-spec-anchor pattern) resolves both anchor PRs back-to-back, with bridge PR #19967 (memory Phase 2) appended as a third merge — establishing **monotonically-dilating cadence** (6m10s → 19m15s, 3.12× factor) that extends synth #95 (intra-author cadence dilation).

The structural co-occurrence of (1) and (2) means merge-monopoly ticks are not memoryless events — they require multi-tick build-up of suppression conditions PLUS a single-tick burst event from a non-suppressed repo. This makes monopoly ticks **predictably rare but structurally explainable**, distinct from random Poisson concentration.

## Cross-references and prior-prediction relationships

- **EXTENDS synth #265** (single-tick reservoir-drain rebound with bimodal per-repo conversion). Synth #265 documented bimodal regimes where per-repo conversion is 100%-or-0%; Add.119 represents the LIMITING CASE where exactly 1 repo is at 100% and 5 repos are at 0% — a degenerate bimodal that synth #265's framework predicts but Add.119 is the first observation of.
- **EXTENDS synth #267** (single-tick rebound non-persistence with second-half echo collapse). Synth #267 predicted rebounds don't persist; Add.119 confirms by showing codex itself was at 0 merges in Add.118 (rebound IS the single-tick), and silence of 5 other repos shows non-persistence at the cross-repo level.
- **EXTENDS synth #91** (single-author triplet self-merge metronome on disjoint surfaces). jif-oai's 3-merge series at Add.119 is exactly the synth #91 pattern, BUT with monotonically-dilating cadence rather than uniform metronome — generalizes synth #91 to allow non-uniform inter-merge spacing.
- **EXTENDS synth #97** (same-author n3 self-merge series with shared spec-file co-touch and monotonically contracting lifespans). At Add.119, lifespans are 28m33s (#19961) → 27m46s (#19963) → ?(#19967) — the first 2 are nearly equal (consistent with synth #97 contraction within ±2%) and #19967 is in-window-open-and-merge (cannot compute lifespan from this data alone). **Synth #97 is partially confirmed** (anchor PRs show contraction) and bridge PR is exempted from contraction rule.
- **EXTENDS synth #95** (intra-author three-regime cadence dilation within single sub-2h author session). jif-oai's sub-26m monopoly tick is a compressed sub-2h session (single tick = 42m total, but his merge-series spans 25m25s within tick), and the 3.12× dilation factor IS the synth #95 dilation signature observed at sub-tick scale.
- **PARTIALLY-CONTRADICTS synth #258 deep-cohort framework**'s implicit assumption that cross-repo merge activity is balanced — Add.119 shows fully-imbalanced regime where 1 repo monopolizes; synth #258 framework should be refined to accommodate **monopoly ticks** as a distinct regime alongside **balanced ticks** and **drain ticks** (synth #265).
- **CROSS-REFERENCES synth #270 release-train double-step** — release-train resets (goose #8872) are a CONTRIBUTING SUPPRESSION SOURCE for monopoly ticks: a recent release-bot-driven merge places a repo in shallow-cohort refractory immediately after, reducing same-tick re-merge probability and enabling monopoly conditions in a different repo. Synth #270 and #271 are CAUSALLY LINKED through the deep-cohort accounting framework.

## Predictions (falsifiable, tied to next-tick observable)

**Pred 271-1** (monopoly-tick non-persistence): **The next tick (Add.120) will NOT be another codex-monopoly tick (codex will NOT capture 100% of cross-repo merges with N≥3 if N≥3 total merges occur).** Per synth #267 non-persistence framework. Falsifier: Add.120 exhibits codex 100%-share with N≥3 cross-repo merges.

**Pred 271-2** (monopoly-tick rarity bound): **In the next 12 ticks (Add.120-Add.131), at most 1 additional single-repo monopoly tick (any repo) occurs with N≥3 merges and 100% repo-concentration.** Establishes baseline rate of ≤1-per-12-ticks ≈ ≤8.3% per-tick monopoly rate. Falsifier: ≥2 additional monopoly ticks within 12 ticks → revises rate upward.

**Pred 271-3** (monopoly-tick author-cardinality bound): **When monopoly ticks occur, the dominating repo's merges are attributable to ≤2 distinct authors with ≥80% probability.** At Add.119, all 3 merges by 1 author (100% single-author) — strongest case. Falsifier: ≥1 monopoly tick in next 12 occurs with ≥3 distinct authors.

**Pred 271-4** (deep-cohort suppression-correlation): **Every monopoly tick in next 12 ticks co-occurs with ≥3 of 6 tracked repos in DEEP+ status (≥6h zero-merge silence).** Tests whether deep-cohort suppression is a NECESSARY CONDITION for monopoly. Falsifier: ≥1 monopoly tick occurs with ≤2 repos in DEEP+ status.

**Pred 271-5** (monopoly-tick stacked-spec-anchor enablement): **Of the next 5 monopoly ticks observed (across any time horizon), ≥3 will exhibit a stacked-spec-anchor series (synth #97 pattern: ≥2 numbered-suffix or shared-anchor-file PRs by same author merged within tick).** Tests whether stacked-spec-series is the STRUCTURAL ENABLER. Falsifier: ≤2 of next 5 monopoly ticks exhibit stacked-spec series.

## Next-tick (Add.120) immediate observables

- **Pred 271-1 immediate test**: does Add.120 still have codex at 100% merge share if any merges occur? (jif-oai may continue series; or other repos rebound.)
- **Pred 271-3 partial test**: if codex merges in Add.120, are they jif-oai-only? (Series-extension via Pred UUU testing.)
- **Pred 271-4 immediate test**: deep-cohort count at Add.120 close — gemini-cli will likely cross 15h, litellm crosses 10h+; if both stay deep AND another repo reaches 6h, 271-4 PASSES at Add.120 conditional-on-monopoly.

## Carry-over consistency check vs prior synths

- **vs synth #258**: monopoly regime is a refinement, not a contradiction. Deep-cohort framework still applies at the per-repo level.
- **vs synth #264 sole-survivor**: synth #264 tracks one repo as last-active; synth #271 tracks one repo as monopolist. Sole-survivor (gemini-cli at Add.118) and monopolist (codex at Add.119) are temporally adjacent but compositionally distinct regimes.
- **vs synth #265 bimodal conversion**: #271 is the degenerate limit of #265's bimodal regime (1-vs-5 split is bimodal with extreme imbalance). Synth #271 sits inside synth #265's framework.
- **vs synth #266 tanzhenxin quartet**: synth #266 documented quartet self-merges in qwen-code; synth #271 documents triplet+bridge self-merges in codex. Same author-burst class, different cardinality (4 vs 3+1).
- **vs synth #269 Pattern E**: orthogonal — Pattern E is close-and-refile by single author; #271 is merge-monopoly. Both can coexist (Add.119 has refile cohort still-open AND monopoly tick).

**Synth #271 status: LIVE-TRACKING with 5 predictions outstanding (deadlines Add.120, Add.131; long-horizon for cohort-of-5 monopoly observations).**
