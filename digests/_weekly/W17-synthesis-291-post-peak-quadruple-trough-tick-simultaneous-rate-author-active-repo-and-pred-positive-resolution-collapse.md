# W17 Synthesis #291 — Post-Peak Quadruple-Trough Tick: Simultaneous Rate, Author, Active-Repo, And Pred-Positive-Resolution Collapse In A Single Observation Window

## Pattern statement

When the corpus-level per-minute merge rate descends from a multi-tick local peak (Add.128 = 0.279 merges/min, the W17 peak observed across the codex+gemini-cli+litellm+opencode+goose+qwen-code 6-repo cluster), the descent does NOT decay smoothly along a single axis but instead concentrates into a **quadruple-trough tick** in which four orthogonal corpus-level metrics — (1) per-minute merge rate, (2) distinct-author count, (3) active-repo count, (4) pred-positive-resolution count — ALL bottom out within the same observation window. The quadruple-trough is observable as a discrete regime-change event distinct from gradual descent, and it temporally co-locates with semantic-weight collapse of the surviving merge (lowest-weight class: flake-stabilizer / test-reliability fix). This compounds the synth #100 (cross-repo merge-rate co-suppression) and synth #284 (release-bump recovery axis decoupling) lineages by demonstrating that co-suppression operates across MULTIPLE orthogonal axes synchronously, not merely on the rate axis.

## Anchoring evidence (ADDENDUM-130, 6-repo corpus, 2026-04-28T18:55Z–19:43Z)

**Per-minute merge rate trajectory (Add.123 → Add.130).** 0.225 → 0.182 → 0.279 (peak) → 0.120 → **0.020 (Add.130 trough)**. Add.130 is **−83% vs. Add.129**, **−93% vs. Add.128 peak**, and the lowest non-zero per-minute merge rate observed in the W17 ADDENDUM series.

**Distinct-author count this tick.** Add.130 in-window distinct-author count = **1** (dylan-hurd-oai only). Compare:
- Add.128: 5 distinct codex authors {evawong-oai, mchen-oai, maja-openai, fcoury-oai, canvrno-oai} + 2 gemini-cli authors + 1 litellm author = 8 distinct corpus-wide.
- Add.129: 5 distinct codex authors {stefanstokic-oai, viyatb-oai, bolinfest, canvrno-oai, charley-openai} + 2 gemini-cli authors {cocosheng-g, Adib234} = 7 distinct corpus-wide.
- Add.130: **1 distinct corpus-wide** (dylan-hurd-oai). 7→1 collapse in 1 tick.

**Active-repo count this tick.** Add.130 = **1** (codex only). Trajectory Add.128 → Add.130: 3 → 2 → 1 (monotonic contraction, deepest single-tick contraction observed). All five non-codex tracked repos (gemini-cli, litellm, opencode, goose, qwen-code) silent the entire 48m57s window.

**Pred-positive-resolution count this tick.** Add.130 = **0**. Add.128 had 1 (CCC gemini-cli flood follow-through CONFIRMED), Add.129 had 1 (DDD bolinfest #19900 silence-break POSITIVE after n=12 ticks). Add.130 instead exhibits **2 NEGATIVE resolutions** (AAA-285 jif-oai numerical-suffix series at tick 4/4, EEE-287 kitlangton httpapi sprint at tick 3/3) plus **2 REFUTATIONS** (CCC continuation, FFF-287 codex 3-author cluster recurrence). The pred ledger this tick is purely shedding stale carries; no new positive confirmation events.

**Surviving merge semantic-weight class.** dylan-hurd-oai #19959 `7f7c7c2c07a1` 19:08:41Z `Fix log db batch flush flake` is a **flake-stabilizer / test-reliability fix on log-db batch-flush** — the lowest-weight semantic class in the codex taxonomy (below scoped fix(), refactor(), and feat()). Compare to Add.129's headline merge bolinfest #19900 `permissions: add built-in default profiles` which introduced a new permissions surface (highest-weight class: feature-addition with new-surface introduction). The semantic-weight axis collapses from new-surface-feature (Add.129) to flake-stabilizer (Add.130) in lock-step with the four metric troughs.

## Quadruple-trough mechanical decomposition

The four troughs are NOT mutually causally entailed:
- (1) per-minute merge rate could trough while (2) author count remains high (e.g., 1 merge across 1 author over a wide window vs. 1 merge across 1 author over a narrow window — the rate trough is window-width and merge-count dependent).
- (2) author count could trough while (3) active-repo count remains spread (e.g., 1 author landing 4 merges across 4 repos = 1 author / 4 active repos).
- (3) active-repo count could trough while (4) pred-positive-resolution remains positive (e.g., a single repo's silence-break event resolving a long-carry pred = 1 active repo / 1 positive resolution).

The Add.130 evidence shows ALL FOUR trough simultaneously, which is the structurally novel observation. The synth #100 cross-repo co-suppression framing predicted (1)+(3) co-trough as a corpus state. Add.130 extends this prediction empirically to (2)+(4) co-trough as well.

## Distinguishing from gradual descent

A gradual rate descent from peak would be observable as a smooth Add.128 → Add.130 trajectory: e.g., 0.279 → 0.200 → 0.150. The actual Add.128 → Add.130 trajectory is 0.279 → 0.120 → 0.020 = log-linear decay slope steeper than 0.5×/tick. Combined with the synchronous (2)+(3)+(4) collapse, the descent is structurally **discrete regime-change** rather than gradual.

Counter-pattern (would falsify): a tick exhibiting (1) rate-trough WITHOUT (2)/(3)/(4) trough — e.g., a wide-window tick with 1 merge but high author retention from prior window or active follow-through preds. Add.130 does NOT exhibit this counter-pattern: dylan-hurd-oai is a 0/5 author retention from Add.129's codex cluster (full author rotation), no follow-through preds resolve positive, and 5/6 repos are inactive.

## Cross-tick prior occurrence check

W17 ADDENDUM series prior search for quadruple-trough: Add.119 had a zero-merge tick (rate = 0.000) which is structurally a degenerate quadruple-trough (all four metrics trivially zero). Add.130 is the **first non-degenerate quadruple-trough tick** observed in W17 — non-degenerate because the surviving single merge provides a non-zero floor for (1) and a non-zero singleton for (2)+(3), allowing the trough to be measured against a peak rather than against absence.

n=1 evidence event so far. Pattern requires n≥2 quadruple-trough observations to elevate from synthesis-candidate to confirmed-corpus-invariant. Watch-list: next post-peak descent in the W17 corpus (likely Add.131–Add.135 range if pacing repeats) for a confirming or falsifying second instance.

## Linkage to prior synthesis lineage

- Synth #100 (cross-repo merge-rate co-suppression as corpus-level state distinct from per-repo dormancy bands): Add.130 confirms the corpus-level state framing AND extends it from rate-only to four-axis co-suppression.
- Synth #284 (release-bump recovery axis decoupling): Add.130's quadruple-trough explicitly DECOUPLES rate from semantic-weight (rate troughs while semantic-weight ALSO troughs, suggesting the two are not anti-correlated as #284 implied for release-bump-driven recovery ticks; instead they co-trough during post-peak collapse).
- Synth #289 (stacked single-author doublet pairs within sustained rebound windows): Add.130 has **zero single-author doublets** (Add.129 had 3), so the sustained-rebound-window framing cleanly terminates at the quadruple-trough boundary.
- Synth #290 (long-silence-axis termination with semantically-heaviest merge of the breaking-tick): Add.130 is the post-termination tick following Add.129's bolinfest #19900 break — pattern predicts the post-termination tick exhibits semantic-weight reversion, which Add.130 confirms (flake-stabilizer is the maximal reversion from new-surface-feature).
