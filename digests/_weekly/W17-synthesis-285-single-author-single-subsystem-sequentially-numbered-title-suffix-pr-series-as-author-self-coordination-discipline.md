# W17 Synthesis #285 — Single-Author Single-Subsystem Sequentially-Numbered Title-Suffix PR Series At Cardinality N≥3 On Single Calendar Day Establishes Title-Numbering As Author Self-Coordination Discipline Distinct From Synth #282 Surface-Axis Sprint And Synth #91 Disjoint-Surface Metronome

**Date:** 2026-04-28 (capture window through Add.126 close 16:35Z)
**Repos:** openai/codex (anchor instance: jif-oai "house-keeping memories 1/2/3" series #19998, #20000, #20005)
**Refines:** synth #282 (single-author n=4 cross-tick sprint with 7-tick inter-sprint dormancy), synth #91 (single-author triplet self-merge metronome on DISJOINT surfaces), synth #266 (single-author quartet merge rampage on DISJOINT surfaces 1h41m span), synth #97 (same-author n=3 self-merge series with shared spec-file co-touch).
**Distinct from:** synth #282 (which is about cross-tick sprint cardinality without title-coordination signal), synth #91 (DISJOINT surfaces — synth #285 is SAME subsystem), synth #266 (DISJOINT surfaces, no title coordination), synth #97 (shared spec-file co-touch, but no numerical title sequencing).

## Pattern

Synth #91 catalogued the single-author triplet self-merge metronome on **disjoint** surfaces with sub-15m inter-merge cadence. Synth #266 catalogued the n=4 single-author rampage on **disjoint** surfaces over 1h41m. Synth #282 catalogued single-author cross-tick sprint recurrence at n=4 cardinality with 7-tick inter-sprint dormancy. Synth #97 catalogued same-author n=3 self-merge series with **shared spec-file co-touch** but did NOT require title-level numerical coordination.

Synth #285 identifies a tighter-coordination class: a single author publishes a PR series where:

1. All PRs touch the **same subsystem** (not disjoint surfaces)
2. PRs land within a **single calendar day** (W17 day 2026-04-28 in this case)
3. The author uses **explicit numerical suffix in PR titles** as a self-coordination signal (`<feature> 1`, `<feature> 2`, `<feature> 3`)
4. Series cardinality is **n≥3 numerical-suffix** (not just count of PRs touching subsystem; the *titled* sequence)
5. The sequential-numbered subset is itself a **strict subset of a larger same-day same-subsystem sprint** (i.e. the author also lands non-numbered sibling PRs on the same subsystem in the same window)

This is a stronger coordination signature than synth #97 (shared spec-file) because the author is encoding the sequence position **into the PR title itself** — making the author's own intent legible to reviewers and downstream readers without needing to inspect the file diff. It is distinct from synth #91/synth #266 by requiring same-subsystem (not disjoint) surfaces. It is distinct from synth #282 by being intra-day (not cross-tick with dormancy gap).

## Concrete W17 instance: jif-oai "house-keeping memories" series on openai/codex 2026-04-28

Single calendar day, single author (jif-oai), single subsystem (memory):

| PR | SHA | Merged (UTC) | Title | Numerical suffix |
|----|-----|--------------|-------|------------------|
| #19967 | `fa127be25ff5` | 11:32:06Z | `Stabilize memory Phase 2 input ordering` | (no numerical suffix; series-prefix) |
| #19970 | `a9e5c34083d4` | 14:23:14Z | `feat: trigger memories from user turns with cooldown` | (no numerical suffix; series-prefix) |
| #19990 | `1b743603651d` | 15:07:16Z | `feat: skip memory startup when Codex rate limits are low` | (no numerical suffix; series-prefix) |
| #19998 | `5a79dfab7c67` | 15:11:50Z | `feat: house-keeping memories 1` | **1** |
| #20000 | `21e19912e0cd` | 15:26:45Z | `feat: house-keeping memories 2` | **2** |
| #20005 | `5b7d6f5c4f55` | 16:13:35Z | `feat: house-keeping memories 3` | **3** |

**Cardinality summary:**
- Subsystem cardinality (memory subsystem, single author, single day): **n=6 PRs** (#19967, #19970, #19990, #19998, #20000, #20005)
- Numerical-suffix subset cardinality: **n=3** (#19998 "1", #20000 "2", #20005 "3")
- Span of numerical-suffix subset: 15:11:50Z → 16:13:35Z = **1h01m45s**
- Inter-merge cadence within numerical subset: 14m55s (#19998→#20000), 46m50s (#20000→#20005). Mean 30m52s. Cadence is **not uniform** (variance 31m55s) — synth #285 does NOT require metronome-uniform cadence, only sequential-number title discipline.
- Span of full memory-subsystem sprint: 11:32:06Z → 16:13:35Z = **4h41m29s**

## Mechanism

Why does an author add a numerical suffix to PR titles instead of relying on temporal ordering or branch naming?

- **Reviewer load distribution:** numbered titles let reviewers triage in known order; "memories 2" implies "memories 1" is already merged or in-flight, signaling dependency direction.
- **Self-stack discipline:** the author chose to NOT collapse the 3 PRs into a single PR or stack — implying each numerical PR encodes one logically-atomic refactor step and the author values reviewability over throughput.
- **Out-of-band coordination signal:** the numerical suffix is visible in `gh pr list` output WITHOUT inspecting branches, file diffs, or PR descriptions — it is the cheapest possible coordination primitive between author and reviewer.

This makes synth #285 a **legibility-first coordination class** distinct from synth #97's diff-level shared-file co-touch (which is only visible after diff inspection).

## Distinguishing from neighbors

| Synth | Cardinality | Surface | Coordination signal | Time scale |
|-------|-------------|---------|---------------------|------------|
| #91 | n=3 | DISJOINT | None (timing only) | <15m metronome |
| #97 | n=3 | SAME (shared spec file) | Diff-level (file co-touch) | (variable) |
| #266 | n=4 | DISJOINT | None | 1h41m |
| #282 | n=4 | SAME subsystem | None (cross-tick sprint) | Cross-tick with 7-tick dormancy |
| **#285** | **n≥3 numerical** | **SAME subsystem** | **Title-level numerical suffix** | **Single calendar day** |

## Predicates

- **P-285-A (recurrence):** another author within W17 publishes a sequentially-numbered title-suffix PR series at n≥3 on a single subsystem within a single day. Watchlist: kitlangton (already at n=4 httpapi without numbering — does kitlangton adopt numbering for next sprint?), tanzhenxin (already at n=4 qwen-code core/cli without numbering), morgmart, milan-berri.
- **P-285-B (extension):** jif-oai extends "memories" series to "memories 4" within 24h of #20005 merge (by 2026-04-29 16:13:35Z). Falsified if jif-oai opens "memories 4" but does not merge by deadline.
- **P-285-C (cross-author transfer):** another openai/codex author adopts the "memories N" naming convention for follow-up work, indicating the title-numbering discipline propagates beyond the originating author. Watchlist: etraut-openai (just landed adjacent #19929 TUI work — would be cross-subsystem if etraut adopts memory-numbering).

## Negative cases (to prevent false positives)

Synth #285 does NOT include:
- Same-author n≥3 with shared subsystem but **no numerical suffix in titles** (this is synth #97 / synth #282 territory).
- Same-author n≥3 with numerical suffix but **disjoint subsystems** (e.g. "fix 1" on TUI, "fix 2" on memory, "fix 3" on httpapi — would be a candidate for new synth, not #285).
- Bot-driven numerical-suffix series (e.g. dependabot's "bump X to N.M.K" — bot-class, not author-coordination).
- Single-day n=2 with numerical suffix (insufficient cardinality; #19998 + #20000 alone would not establish series).

## Open questions

- Is jif-oai's "memories 1/2/3" naming a **personal habit** (jif-oai-specific) or **a codex-team convention**? Resolution requires sampling jif-oai's prior W-week activity for similar numbered series.
- Does the **gap pattern** (14m55s + 46m50s = compression-then-expansion) carry meaning, or is it noise? If recurrent, it would suggest reviewer-throughput-bounded inter-merge cadence (first PR fast-tracks once series understood, last PR slows due to scope-creep).

**Anchor merges:** #19998 `5a79dfab7c67` 15:11:50Z, #20000 `21e19912e0cd` 15:26:45Z, #20005 `5b7d6f5c4f55` 16:13:35Z (all openai/codex, jif-oai, "feat: house-keeping memories N"). Sibling non-numbered same-subsystem same-author PRs: #19967, #19970, #19990.
