# W17 Synthesis #100 — Single-author N=3 stacked-merge series with monotonically contracting INTER-MERGE gaps and shared title-prefix anchor (gap-contraction signature inverse to lifespan-contraction signature of synth #97)

**Anchor window:** 2026-04-28T05:06:47Z → 05:49:59Z (43m12s).
**Anchor repo:** openai/codex.
**Anchor actor:** `bolinfest`.
**Parent synths:** #97 (same-author N=3 self-merge series with shared spec-file co-touch and monotonically contracting LIFESPANS), #99 (extension event past closed triple).

## Why this is distinct from #97 and #99

Synth #97 captured a **lifespan-contraction** signature: PRs were open for monotonically shorter durations (24m57s → 13m47s → 4m09s), interpreted as the author **accelerating per-PR** while the inter-PR-open gap was small (43s, 22m02s). The contraction lived on the **per-PR-axis**.

Synth #100 captures the **dual** signature: at openai/codex on 2026-04-28, `bolinfest` produced a 3-PR series where the **inter-MERGE gaps contracted** (24m00s → 19m12s) but the **per-PR lifespans were comparable across members** (all ~2d12h aged; lifespans not yet inspected at line-precision but bounded above by parent open times). The contraction lives on the **inter-PR-axis**, not the per-PR-axis. This is the **inverse signature** of #97.

Synth #99 framed extension events as continuations of closed triples with anchor-file recurrence and gap dilation. Synth #100 frames a **fresh closed triple** in which the anchor is the **title-prefix** (`permissions:`) rather than a co-touched spec file, and the gap behavior is **contraction**, not dilation.

## The three members

| PR | Title | Merged | Inter-merge gap from prior |
|---|---|---|---|
| [openai/codex#19774] | `permissions: make SessionConfigured profile-only` | 05:06:47Z | — (anchor) |
| [openai/codex#19775] | `permissions: derive snapshot sandbox projections` | 05:30:47Z | **24m00s** (precise to the second) |
| [openai/codex#19776] | `permissions: store thread sessions as profiles` | 05:49:59Z | **19m12s** |

## Structural properties that #97 / #99 cannot express

**(a) Inter-merge gap contraction with second-precision regularity.** The 24m00s gap between #19774 and #19775 is **exactly 1440 seconds** — a round-number cadence consistent with a CI-bounded merge serialization (typical codex CI pipeline per-merge-cycle is in the 15-30m range). The 19m12s gap between #19775 and #19776 is **1152 seconds**, **80% of the prior gap**. This 80% contraction ratio is **higher than synth #97's lifespan contraction ratios** (24m57s → 13m47s = 55%, 13m47s → 4m09s = 30%) — i.e., **inter-merge contraction is shallower than per-PR-lifespan contraction**, suggesting the rate-limit is CI-throughput, not author-throughput.

**(b) Title-prefix as anchor object replaces spec-file as anchor object.** In synth #97/#99, the anchor was a co-touched file (`packages/opencode/specs/effect/http-api.md`) — a **content anchor**. In synth #100, the anchor is the title prefix `permissions:` — a **conceptual / module anchor**. The two anchor types are **dual**: a content anchor binds via the file system; a title anchor binds via the PR convention layer. **A series can be #97-conformant without being #100-conformant** (if it shares spec-files but has heterogeneous titles) **and vice versa** (if it shares title-prefix but touches disjoint files). Synth #100 declares the title-prefix as a **first-class anchor object** for series classification, not merely a UI affordance.

**(c) Aged-class series, not burst-class series.** All three members were opened ~2d12h before merge (opens around 04-25, merges at 04-28 05:06-05:50Z). This contrasts with synth #97/#99 where the members were typically burst-class (sub-2h lifespans). **Synth #100 demonstrates that the stacked-merge pattern is NOT burst-exclusive** — it operates at aged-class lifespans during commit-phase resumption (the bolinfest series merged during the same Add.112 tick where 5 of 5 cross-repo merges were codex; see ADDENDUM-112).

**(d) Co-located with non-series solo merges by other authors in the same window.** During the 43m12s window of the bolinfest series, etraut-openai merged 2 PRs (#19630 at 05:02:09Z, #19920 at 05:44:10Z) — interleaving the bolinfest cadence. **The bolinfest series is NOT a tick-monopolizing object**; it shares the codex commit-phase tick with parallel author activity. Synth #97/#99 series tended to be tick-monopolizing (the kitlangton triple at Add.~97-window had no parallel high-cadence author).

## The classification predicate

A merge series qualifies as **synth #100** when:
1. **N≥3** PRs by the same author merge within a single ≤60m window;
2. **All N PRs share a common title prefix** (the prefix is at least one colon-terminated token, e.g., `permissions:`, `fix(scope):`);
3. The **inter-merge gaps are monotonically contracting** (gap_{k+1} < gap_k for all k);
4. **Each PR's lifespan is aged-class** (≥24h between open and merge);
5. The **window contains parallel non-series merges by other authors** (≥1 other-author merge in the same ≤60m window).

The bolinfest 3-PR `permissions:` series at Add.112 satisfies all five.

## Falsifiable predictions

1. **Pred 100-1**: Across the next 8 codex aged-class series (≥3 PRs, same author, within 60m), ≥3 will exhibit monotonically contracting inter-merge gaps. Falsifier: ≤1 of 8 exhibit the contraction signature.
2. **Pred 100-2**: When the inter-merge gap contraction ratio exceeds 0.7 (as here: 19m12s / 24m00s = 0.80), the series is **CI-bounded** (the gap reflects pipeline throughput, not author intent). Test: examine the codex CI pipeline median run-time on the affected branches. If median CI run is in [18m, 25m] for both gaps, Pred 100-2 PASSES; if median CI is <12m, Pred 100-2 FALSIFIED.
3. **Pred 100-3**: The 4th member of a synth #100-conformant series, if it appears, will have inter-merge gap **non-monotonic** (either dilating or with high variance) because the CI-throughput floor will be hit. Specifically, the 4th member's gap will be in [15m, 30m] regardless of prior contraction trajectory. Falsifier: 4th member with gap <15m.
4. **Pred 100-4**: Synth #100 series do NOT exhibit synth #97-style per-PR lifespan contraction within the series. Specifically, the 3 lifespans in a synth #100 series will have variance ratio max/min ≤ 1.5 (i.e., comparable lifespans). Falsifier: variance ratio >2.5.
5. **Pred 100-5**: A synth #100 series's title-prefix will appear as a **module path component** in ≥80% of the touched files (e.g., `permissions:` series touches ≥80% of files under `permissions/` or with `permission` in the path). Falsifier: <40%.

## Distinctness from prior synths

- **vs synth #97** (lifespan-contraction triple): #97 contracts on the per-PR-lifespan axis with burst-class PRs and a shared spec-file content anchor; #100 contracts on the inter-merge-gap axis with aged-class PRs and a shared title-prefix conceptual anchor. The two are **dual** and can co-exist (a series could exhibit both contractions) but neither implies the other.
- **vs synth #99** (extension past closed triple): #99 requires a prior closed triple and a temporal gap before extension; #100 is a single closed triple with no extension required for classification.
- **vs synth #91** (single-author triplet metronome on disjoint surfaces): #91's surfaces are **disjoint**; #100's surfaces share a **module-prefix anchor**. #91's gaps are roughly equal (metronome); #100's gaps are **monotonically contracting**.
- **vs synth #92** (same-second N=4 open tuplet): #92 is on the OPEN axis with same-second clustering; #100 is on the MERGE axis with multi-minute monotonic contraction. Distinct axes (open vs merge), distinct cadence regimes (clustered vs contracting).
- **vs synth #98** (bot-driven sub-10s mass-close sweep): #98 is bot-author, sub-10s, on the close axis; #100 is human-author, multi-minute, on the merge axis.

## Risk lens

- **CI-throughput as series-determining constraint**: if Pred 100-2 confirms, then synth #100 series shape is **infrastructural**, not behavioral — the author wanted to merge faster but was rate-limited by CI. This shifts the analytical frame from "author cadence" to "pipeline cadence", and predicts that any author with a stack of N≥3 ready-to-merge same-prefix PRs will produce a synth #100-conformant series.
- **Contraction ratio as a regime probe**: a contraction ratio in [0.6, 0.85] suggests CI-floor approach; a ratio <0.5 suggests author intent (reviewer responsiveness, queue starvation); a ratio >1.0 (dilation) suggests serialization friction (reviewer bandwidth limits). The bolinfest series at 0.80 sits in the CI-floor band.
- **Prefix-anchor over content-anchor as detector signal**: a detector watching for synth #100 should index PR titles by colon-terminated prefix per author per 60-minute window. This is **cheaper than diff-anchor detection** (#97/#99) since it doesn't require diff inspection, and it surfaces aged-class series that diff-anchor detection would miss (because aged PRs may have many touched files with no clear single-file anchor).

## Cross-reference

This synth originates from observations cited in ADDENDUM-112 (commit `e2bc146` direct, capture 2026-04-28T05:52Z), which records the bolinfest 3-PR `permissions:` series as item (3) in headline events. Parent synths #97 (`c9ebfa1`) and #99 (`fcd90f0`) are inverted on the contraction-axis dimension by this synth.

## Refinements of prior W17 predictions

- **Pred 254-1 (per-repo-tick crossing rate band [20%, 40%])**: SUSTAINS at 35.5% rolling. Synth #100 contributes to the band-staying behavior because synth #100 series concentrate codex activity into shallow-class, suppressing crossings.
- **Pred 255-1' (codex commit-phase gradual)**: RESOLVED-CONFIRMED at Add.112 with 3rd consecutive burst-merge. Synth #100 demonstrates that "gradual" includes interleaving stacked-merge series with solo aged merges within a single tick, not just across ticks.
- **Pred 255-1'' (codex aged ≥2:1 over burst)**: STRESSED-FALSIFIED-DIRECTION at Add.112 ratio 1:1. Synth #100 explains the falsification: aged-class series fire in bursts (3 aged PRs per tick from a single stacked series) rather than uniformly per tick, so the aged/burst ratio is high-variance across ticks and unlikely to converge to a stable ≥2:1.
- **Pred SS (codex opens/merges anti-correlated)**: STRESSED-FALSIFIED at Add.112. Synth #100 explains: a stacked-merge series clears the queue, freeing author bandwidth to open new PRs in the same tick — opens and merges co-fire by mechanism, not coincidence. Pred SS' (positive correlation) is the correct hypothesis.
