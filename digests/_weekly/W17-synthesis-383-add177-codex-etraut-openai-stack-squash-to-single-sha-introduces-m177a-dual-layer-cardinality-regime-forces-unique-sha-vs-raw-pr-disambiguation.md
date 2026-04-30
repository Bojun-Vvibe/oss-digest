# W17 synthesis #383 — Add.177 codex etraut-openai #20329-20333 stack-squash to single SHA `b957d938` introduces M-177.A dual-layer cardinality regime, forces unique-SHA-vs-raw-PR disambiguation across all M-176.A / M-176.C-class regimes

## Observation

ADDENDUM-177 records codex emission of **5 PRs** (#20329 / #20330 / #20331 / #20332 / #20333, etraut-openai, titles `Remove core protocol dependency [6/10]..[10/10]`) sharing a **single merge-commit SHA `b957d938`** at 05:23:21-22Z (≤1s temporal spread). This is a **stack-squash-merge event**: 5 stacked PRs closed simultaneously against one unified commit, conventional in PR-stack workflows where the merging tool collapses all stack tips into a single fast-forward or squash commit.

At the **raw-PR cardinality layer**, codex emits 5 PRs at Add.177 — a **5× violation** of the M-176.A bounded-low-emission band [0, 1] (synth #380, refined). At the **unique-merge-commit cardinality layer**, codex emits 1 SHA at Add.177 — perfectly inside the M-176.A [0, 1] band. The two layers diverge by a factor of 5.

This single-tick divergence forces the W17 synth corpus to confront a previously-implicit modeling assumption: every M-176.A / M-176.C / M-176.E / M-177.A-prefix regime statement made at Add.158-176 was made under the **implicit unique-SHA reading** (because no prior tick had a stack-squash event, the two readings coincided trivially). Add.177 is the **first tick where the two readings diverge**, forcing explicit disambiguation.

## Empirical PR-anchored evidence

- **codex stack-squash 5-tuple**: #20329 `b957d938` 05:23:21Z `[6/10]`, #20330 `b957d938` 05:23:22Z `[7/10]`, #20331 `b957d938` 05:23:21Z `[8/10]`, #20332 `b957d938` 05:23:21Z `[9/10]`, #20333 `b957d938` 05:23:22Z `[10/10]`. All 5 PRs share `b957d938`. Temporal spread ≤1s.
- **Stack-prefix absence**: PRs `[1/10]..[5/10]` of the same `Remove core protocol dependency` series are NOT in the Add.177 window (capture floor 05:01:36Z). The cousin stack `TUI: Remove core protocol dependency [1-3/7]` (#20172 / #20173 / #20174) merged at 2026-04-29T16:10-17:52Z under three distinct SHAs (`1c420a90` / `44562981` / `d0204c3d`) — the cousin stack used a per-PR merge strategy. The Add.177 stack used a stack-squash strategy, producing the 5-PR / 1-SHA divergence.
- **M-176.A unique-SHA reading at Add.177**: 1 ∈ [0, 1] ✓. M-176.A advances to 7-of-7 supporting ticks under the unique-SHA reading.
- **M-176.A raw-PR reading at Add.177**: 5 ∉ [0, 1] ✗. M-176.A breaks at 6-of-7 attempt under the raw-PR reading.
- **M-176.E carrier authorship**: etraut-openai is a third novel author to {bolinfest, abhinav-oai}. Single-SHA single-author event ⇒ M-176.E author-novelty reading is **layer-invariant** at Add.177 (both raw-PR and unique-SHA layers see the same 1 author).
- **M-176.E surface novelty**: `Remove core protocol dependency` core-protocol-decoupling refactor surface, distinct from {permissions/active-profile-metadata, hook-state-persistence}. Single-SHA single-surface event ⇒ M-176.E surface-novelty reading is **layer-invariant** at Add.177.

## New regime: M-177.A stack-squash-merge as raw-count amplifier with unique-SHA-singleton

When a tick T contains a stack-squash-merge event (≥2 PRs sharing a single merge-commit SHA within ≤K-second temporal spread, K ≤ 5), the tick's raw-PR cardinality and unique-SHA cardinality diverge by the stack depth, creating a **dual-layer cardinality reading**. The unique-SHA layer measures **decision events** (one merge per SHA = one decision), while the raw-PR layer measures **PR-closure events** (one closure per PR = N closures for N stacked PRs).

- **Definition**: a tick T is M-177.A-resident if (a) ≥2 PRs share a single merge-commit SHA, (b) the temporal spread of those PRs' `mergedAt` timestamps is ≤5 seconds, AND (c) all sharing PRs originate from the same author. Stack-depth = number of PRs sharing the SHA.
- **Add.177 instance**: 5 PRs (#20329-20333), 1 SHA (`b957d938`), spread = 1s, author = etraut-openai. Stack-depth = 5. M-177.A-resident ✓.
- **Cardinality divergence**: raw-PR = 5, unique-SHA = 1, divergence factor = 5.
- **Distinguishing feature vs M-176.A** (synth #380, codex bounded-low-emission band [0, 1]): M-176.A is a **per-tick cardinality regime**; M-177.A is a **per-tick measurement-layer regime**. M-176.A asks "what value does the cardinality take"; M-177.A asks "which cardinality counter are we using". They operate at orthogonal levels — M-176.A regime statements going forward must be qualified by which layer (unique-SHA or raw-PR) they apply to.
- **Distinguishing feature vs M-176.C** (synth #381, multi-stage litellm collapse cascade): M-176.C is a **trajectory regime over consecutive ticks**; M-177.A is a **per-tick layer-divergence regime**. M-176.C trajectory statements (`H → L → R → 0`) must also be qualified by layer when stack-squash events occur in the trajectory window.
- **Single-instance status**: M-177.A is a 1-of-1 instance — promotion to a multi-instance regime requires a future stack-squash event. The cousin TUI stack (#20172-20174 per-PR-merge) provides a **negative example**: stacks can merge per-PR rather than squash, so M-177.A is a property of the merge strategy, not of stacked PRs in general.

## Falsification of implicit-single-layer-cardinality hypothesis

Synth #376 (M-176.A introduction), synth #380 (M-176.A refinement to [0, 1] non-absorbing band), synth #381 (M-176.B / M-176.C window-level / trajectory regimes), and synth #382 (M-176.E novel-author-per-tick regime) all implicitly modeled cardinality as a **single layer** (the layer was undeclared because the two layers coincided at Add.158-176). The Add.177 stack-squash event falsifies the single-layer assumption:

- **M-176.A reading at Add.177**: under the implicit-single-layer reading (raw-PR), M-176.A breaks at 6-of-7 (5 ∉ [0, 1]). Under the unique-SHA reading, M-176.A holds at 7-of-7. The single-layer reading is **at least ambiguous and possibly wrong** — the W17 synth corpus must declare a layer to make M-176.A statements falsifiable.
- **M-176.C reading at Add.177**: litellm `7 → 1 → 2 → 0 → 0` is layer-invariant at Add.177 (litellm has no stack-squash event in the trajectory window). M-176.C is currently safe under both readings, but the regime-definition must be amended to **specify which cardinality layer** the trajectory shape is measured at.
- **M-176.B reading at Add.176**: window count = 1 (under both readings; Add.176 had no stack-squash). M-176.B is layer-invariant at the introduction tick but must be amended to declare its layer for forward predictions.

The single-layer-implicit-cardinality hypothesis is **falsified at Add.177** and is replaced by a **dual-layer cardinality framework** going forward.

## Cross-regime synthesis

- **M-176.A** (synth #376 / #380 refined, codex bounded-low-emission band [0, 1]): re-stated under the dual-layer framework. **Unique-SHA-layer M-176.A** advances to 7-of-7 supporting ticks at Add.177. **Raw-PR-layer M-176.A** breaks at 6-of-7 at Add.177. The W17 synth corpus going forward operates on **unique-SHA-layer M-176.A** as the canonical reading (decision-event cardinality is the structurally meaningful layer for emission regimes).
- **M-176.C** (synth #381, multi-stage litellm collapse cascade): re-stated as a unique-SHA-layer trajectory. The Add.173-177 litellm shape `7 → 1 → 2 → 0 → 0` is layer-invariant (no litellm stack-squash events). M-176.C extends to a 5-tick `H → L → R → 0 → 0` shape at Add.177 — refined further by synth #384 as M-177.B extended-terminal-zero-tail.
- **M-176.E** (synth #382, novel-author-per-tick driver): layer-invariant at Add.177 (single-SHA single-author event preserves author-novelty under both readings). M-176.E advances to 3-of-3 supporting ticks and is **promoted to confirmed regime** in synth #384.
- **M-176.B** (synth #381, max-width-min-count joint extreme): re-stated under unique-SHA-layer count. Add.176 unique-SHA count = 1, raw-PR count = 1 (no Add.176 stack-squash); M-176.B holds under both readings at the introduction tick. Forward M-176.B residency tests use the unique-SHA layer.
- **M-178.A** (synth #378, multi-tier-silence-stratification): orthogonal to M-177.A — silence regimes are layer-invariant by construction (zero-emission ticks have no PRs to disambiguate). M-178.A is unaffected by the dual-layer framework introduction.
- **M-168.A** (synth #368, cross-repo over-recovery template): re-stated under unique-SHA-layer count. The Add.168 codex sextuple is currently recorded as 6 PRs; if any of those 6 PRs shared a SHA, the unique-SHA cardinality is lower. **Diagnostic action**: synth #368 amplitude pole H must be re-validated under the unique-SHA reading at the next M-168.A invocation. Current M-168.A residency claims are provisional pending re-validation.

## Predictions

- **P-383.A**: codex Add.178 unique-SHA cardinality ∈ [0, 1] (M-176.A unique-SHA-layer regime advances to 8-of-8); >55% prob.
- **P-383.B**: codex Add.178 raw-PR cardinality ∈ [0, 5] (raw-PR layer is bounded above by the recent stack-squash example; no expansion expected); >55% prob (matches P-177.C).
- **P-383.C**: M-177.A stack-squash-merge does NOT recur at Add.178 (single-instance extreme; no cousin stack ready); >55% prob (matches P-177.O).
- **P-383.D**: When M-177.A recurs (any future tick in W17+), the stack-depth is ∈ [2, 10] (matches the Add.177 instance's depth = 5 within the stack-merge convention range); >50% prob.
- **P-383.E**: When M-177.A recurs in a non-codex repo, the unique-SHA-layer M-176.A-class regime for that repo holds even when raw-PR layer breaks (cross-repo generalization of the Add.177 codex-specific pattern); >40% prob (mid — single-repo support).
- **P-383.F**: M-177.A is a property of **PR-stack workflows with squash-merge**, not of stacked PRs in general — future per-PR-merge stacks (cousin TUI stack pattern) do NOT trigger M-177.A residency; >65% prob.
- **P-383.G**: All future synth notes referencing M-176.A / M-176.B / M-176.C / M-176.E explicitly declare which cardinality layer (unique-SHA or raw-PR) is being measured; meta-prediction (no falsification test).
- **P-383.H**: The W17 synth corpus's canonical layer for emission cardinality regimes is the **unique-SHA layer** (decision-event semantics); ratified by this synth and applied retroactively to M-176.A residency claims at Add.171-176; meta-prediction.

## Diagnostic test schedule

- **Add.178**: P-383.A / P-383.B / P-383.C (per-tick reversion tests).
- **Conditional on next M-177.A recurrence**: P-383.D / P-383.E / P-383.F.
- **W17 closeout**: P-383.G / P-383.H (meta-stability of the dual-layer framework).
- **M-168.A re-validation**: required at the next M-168.A invocation in any future synth.

## Cross-references

- ADDENDUM-177 (codex etraut-openai #20329-20333 stack-squash, single SHA `b957d938`; window 05:01:36Z..05:40:23Z; commit pending pre-merge of this synth — referenced as `3ea9380` post-merge).
- ADDENDUM-176 `9744292` (codex abhinav-oai #19840 `8f3c06cc` single-merge sub-floor tick; M-176.A unique-SHA reading 1 = raw-PR reading 1, layer coincidence).
- ADDENDUM-175 `a76817f` (codex bolinfest #20095 `ac4332c0` zero-floor exit; layer coincidence).
- ADDENDUM-174 `a7345a1` (codex zero-emission tick; layer coincidence trivially).
- ADDENDUM-173 `4d2e65f` (codex 3-of-3 sub-floor; layer coincidence).
- Synth #380 `91ec42a` (M-176.A bounded-low-emission band [0, 1] introduction — implicit single-layer; now re-cast to unique-SHA layer).
- Synth #381 `1d3a34d` (M-176.B max-width-min-count joint extreme + M-176.C multi-stage collapse cascade — implicit single-layer; now re-cast to unique-SHA layer).
- Synth #382 `8b8871b` (M-176.E novel-author-per-tick driver — layer-invariant; advances to 3-of-3 at Add.177 per synth #384).
- Synth #376 (M-176.A original introduction — implicit single-layer; now re-cast).
- Synth #377 (M-177.A asymmetric-collapse-after-amplification — embedded in M-176.C; re-cast to unique-SHA layer; note: synth #377's M-177.A label collides with this synth's M-177.A label — **disambiguation**: synth #377's M-177.A is the litellm trajectory prefix subsumed by M-176.C, while this synth's M-177.A is the stack-squash dual-layer regime. **Resolution**: this synth's M-177.A is the canonical M-177.A label going forward; synth #377's M-177.A is referenced only as the **M-176.C-prefix** in future synth notes).
- Anti-duplicate check: this synth introduces the dual-layer cardinality framework and the stack-squash-merge regime (this synth's M-177.A). It does not restate M-176.A / M-176.B / M-176.C / M-176.D / M-176.E / M-178.A / M-168.A — it **re-frames** them under the dual-layer reading without redefining their content.
