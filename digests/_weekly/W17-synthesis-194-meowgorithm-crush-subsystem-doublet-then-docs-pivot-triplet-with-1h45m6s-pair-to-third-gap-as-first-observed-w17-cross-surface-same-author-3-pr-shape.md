# W17 synthesis #194 — same-author subsystem-doublet-then-docs-pivot triplet across an extended sub-2h window: meowgorithm crush #2724 (+12/−0 `internal/ui/model/ui.go`) → #2725 (+6/−4 `internal/ui/model/status.go`) → #2726 (+115/−43 `docs/hooks/{README,FUTURE}.md`) refines synth #190 by extending the same-subsystem flat-doublet axis with a categorically disjoint third PR

**Lens novelty vs synth #180–#193.** Synth #190 introduced the **same-author same-subsystem flat doublet** axis on meowgorithm crush #2715/#2718 notification work; synth #149 documented **same-author rapid-fire docs doublet on literal shared ecosystem list surface**; synth #181 documented **etraut openai author revisit within 21m21s** intra-burst recurrence; synth #154 documented **same-author back-to-back content-rev pair on adjacent (not identical) provider surface PRs**. None of these covers the case where a same-author doublet on one subsystem is **followed (after a non-trivial gap) by a third PR on a categorically disjoint surface (docs)** by the same author with **zero intervening merges from any actor**. This synth introduces that case as a discriminator on three axes: subsystem-coherence, time-coupling, and merge-coupling.

## The configuration

charmbracelet/crush, 2026-04-27 within Add.74's nominal 39m44s window plus the 1h45m6s pre-window same-author predecessor pair:

| PR | Title | createdAt | Subsystem | Diff | State @ window close | Lifespan @ window close |
|---|---|---|---|---|---|---|
| #2724 | `fix(ui): restore 'update available' notification` | 2026-04-27T00:16:55Z | `internal/ui/model/` | +12/−0 on `ui.go` | OPEN | 1h48m49s |
| #2725 | `fix(ui): notification width and text truncation` | 2026-04-27T00:20:38Z | `internal/ui/model/` | +6/−4 on `status.go` | OPEN | 1h45m6s |
| #2726 | `docs(hooks): improve hook documentation` | 2026-04-27T02:05:44Z | `docs/hooks/` | +115/−43 on `README.md` (+113/−42) and `FUTURE.md` (+2/−1) | OPEN | 0s (window-edge open) |

**Pair geometry (#2724 ↔ #2725):**
- Same author (meowgorithm), same base (`main`), same subsystem (`internal/ui/model/`), file-disjoint (`ui.go` vs `status.go`), open-gap **3m43s**, both `fix(ui):` titled, both notification-themed.
- Matches synth #190's same-author same-subsystem flat doublet criteria exactly.

**Triplet geometry (#2724 → #2725 → #2726):**
- Pair-to-third gap: **1h45m6s** between #2725 open at 00:20:38Z and #2726 open at 02:05:44Z.
- Categorical disjointness: `internal/ui/model/` (Go runtime) vs `docs/hooks/` (markdown). No file path overlap. No subsystem overlap. No semantic overlap (notification UI vs hook documentation).
- Title prefix shift: `fix(ui):` → `fix(ui):` → `docs(hooks):`. The conventional-commits type changes from `fix` to `docs`, marking an explicit surface pivot.
- All three remain OPEN at window close. Zero merges from meowgorithm or any maintainer on these three PRs in the 1h48m+ window.

## Why this triplet shape is novel

Three observations on the W17 corpus discriminate this triplet from prior multi-PR same-author shapes:

**Discrimination from synth #190 (same-author same-subsystem flat doublet).** Synth #190 was a 2-PR shape; this is a 3-PR shape where the first 2 PRs match #190 exactly and the third is a categorical pivot. The third PR breaks the subsystem-coherence axis, so the triplet cannot be classified as a 3-tuple on the synth #190 axis.

**Discrimination from synth #149 (same-author rapid-fire docs doublet on literal shared ecosystem list surface).** Synth #149 was docs-on-docs across a shared file (ecosystem README). #2726 is docs but on a *new* docs surface (hooks/), and the preceding pair was code-on-code, not docs. The triplet is therefore **not a subset of synth #149**.

**Discrimination from synth #181 (etraut openai author revisit within 21m21s).** Synth #181 was an intra-burst author recurrence at sub-30m latency on the same repo. The pair-to-third gap here is **1h45m6s**, ~3× the synth #181 ceiling, and the third PR is on a categorically disjoint surface rather than a recurrence on the same surface. The triplet is therefore **not an extension of synth #181**.

**Discrimination from synth #63 (hot-author multi-surface fanout same author opens span unrelated surface families within minutes).** Synth #63 had **same-minute-class** fanout across unrelated surfaces. The 1h45m6s gap here is two orders of magnitude larger, putting this triplet outside synth #63's burst envelope.

This triplet is therefore the **first observed W17 case of "subsystem-coherent doublet → unrelated-surface third PR by same author with no intervening merge"**. It opens a new axis — call it **subsystem-then-pivot triplet** — orthogonal to the cardinality (synth #92, #93), latency (synth #181, #63), and content (synth #190) axes.

## What the triplet implies about meowgorithm's session

A natural hypothesis: meowgorithm's crush session at 2026-04-27T00:00–02:10Z was **two distinct work units stitched into one author-session** by the gh API timeline:
1. **00:16:55Z – 00:20:38Z (3m43s):** notification-fix work-unit on `internal/ui/model/`. Two PRs fired off together; this matches synth #190's signature.
2. **00:20:38Z – 02:05:44Z (1h45m6s):** silent gap. No author-side opens, no maintainer merges, no force-pushes observed on the three PRs in the gh API listing.
3. **02:05:44Z onward:** docs-improvement work-unit on `docs/hooks/`. A single PR, much larger (+115/−43 vs +12/+10/−0/−4), with no immediate sibling.

The 1h45m6s silent gap and the categorical pivot suggest these are **two cognitive work-units, not one**, and the triplet shape is an **artifact of the gh API timeline**, not a meaningful 3-tuple. If true, it explains why this shape wasn't observed earlier in W17: prior multi-PR same-author shapes were either tightly time-coupled (synth #92 same-second, synth #181 sub-30m) or explicitly chained (synth #189), and the W17 sampling cadence (sub-90m windows) is too coarse to *not* stitch two adjacent work-units into one apparent triplet when the gap is between 90m and 2h.

This puts the synth at risk of being a **sampling-cadence artifact** rather than a structural feature. Falsification target: if a 3rd-PR-after-1h-gap of this exact shape (subsystem-coherent pair + categorical-pivot third by same author with no merges in between) **does not** recur in W17 across the next 5 author-sessions ≥1h long with ≥2 PRs in the first 30m, the synth is artifact-only.

## Predictions

**Prediction P194a (probability ~0.55):** within 4h of 02:05:44Z, meowgorithm will open at least one more PR on `docs/hooks/` (matching the synth #149 docs-doublet pattern) — i.e., the third PR is the *start* of a new doublet, not the *tail* of a pivoted triplet. If correct, the triplet shape decomposes into doublet + (start of doublet) and the synth's structural reading is falsified.

**Prediction P194b (probability ~0.25):** the maintainer (meowgorithm self-merge or another crush maintainer) will merge #2724 + #2725 within 12h while #2726 stays OPEN ≥24h — the docs PR is structurally lower-priority for crush's maintainer queue. If correct, this matches synth #191's per-PR-content-gated maintainer attention.

**Prediction P194c (probability ~0.15):** all three PRs land in a single same-second-class merge burst by meowgorithm within 24h. If correct, this is a synth #182 M+M+M coupling on crush extended to a triplet, falsifying the categorical-disjointness reading of this synth.

**Prediction P194d (probability ~0.05):** #2726 closes without merge in <30m and is replaced by a smaller docs PR (synth #66 opencode-self-close-pattern transplanted onto crush docs). Lowest prior because crush has not yet exhibited the opencode self-close pattern in W17.

## Cross-references

- Builds on: synth #190 (same-author same-subsystem flat doublet), synth #149 (same-author rapid-fire docs doublet), synth #181 (etraut intra-burst recurrence), synth #182 (meowgorithm 24s precursor M+O coupling on crush).
- At-risk reading: the triplet may be a sampling-cadence artifact (90m–2h gap window). Falsifiable via P194a within 4h.
- Sets up: W18 redefinition of "author-session" boundary using ≥1h merge-free silent gap as the canonical session-break heuristic.
