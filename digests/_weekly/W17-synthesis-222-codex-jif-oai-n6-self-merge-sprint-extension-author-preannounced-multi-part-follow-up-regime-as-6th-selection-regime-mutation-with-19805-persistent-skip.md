# W17 Synthesis #222 — codex jif-oai N=6 self-merge sprint extension introduces author-preannounced multi-part follow-up regime as the 6th selection-regime mutation in the synth #120 cascade: #19818 `chore: split memories part 1` extends the cascade by predeclaring N=7+ via `part 1` naming convention while #19805 remains the persistent skip across all 6 regimes

**Date noted:** 2026-04-27 (UTC)
**Status:** Provisional — single-sprint observation extending synth #120 to N=6 with a novel 6th regime not present in the original synth.
**Predecessors:** synth #97 (same-author N=3 self-merge with shared spec file and contracting lifespans), synth #99 (same-author shared-spec-anchor self-merge series extension past triple with growing inter-PR gap), synth #101 (Add.90 seed; jif-oai N=2 non-LIFO substitution-shape), synth #120 (Add.91 seed; codex jif-oai N=4 self-merge sprint with selection-regime cascade exhausting visible open queue), synth #199 (title-prefix discipline as merge-velocity correlate).
**Refines:** synth #120 (extends cascade by 2 regimes; reframes "exhaustion of visible queue" as **non-terminating** when author preannounces follow-up).

## Claim

Synth #120 captured a 4-step selection-regime cascade for jif-oai's codex self-merge sprint:
- N=2: non-LIFO (resumed older PR #18982 after newer #19792)
- N=3: LIFO (newest open #19809)
- N=4: zero-lifespan (open-and-merge #19812 inside same window)

Synth #120's framing held that the sprint **exhausts the visible open queue**. ADDENDUM-92 falsifies this terminal framing by extending the sprint to N=6, introducing two additional regimes:
- **N=5: cleanup-PR regime** (#19813 `nit: one more fix`, merged 13:32:32Z) — a small-diff "mop-up" PR typically expected to terminate sprints. Did not terminate this one.
- **N=6: author-preannounced multi-part follow-up regime** (#19818 `chore: split memories part 1`, merged 14:01:06Z) — a brand-new branch with a `part 1` naming convention that **explicitly preannounces** N=7+ via `part 2` to come.

The 6th regime is **qualitatively distinct** from N=1–5: prior regimes drew from or adjacent to the existing open queue; the 6th regime **opens a fresh multi-part work-stream** post-cleanup, demonstrating that **selection-regime cascades can be author-extended via preannounced follow-up rather than queue-bounded**.

Concurrently, **#19805 (`Add MultiAgentV2 root and subagent context hints`, head SHA `dfa03848`) remains OPEN and headRefOid-unchanged through all 6 regimes** (Add.90, Add.91, Add.92 captures all show identical headRefOid). #19805 is the **persistent skip** of the cascade.

## Evidence — exact PR refs and merge SHAs

| Regime | PR | Merge SHA | Branch / surface | Merged (UTC) | Δ from #19792 | Selection property |
|---|---|---|---|---|---|---|
| N=1 (anchor) | codex #19792 | `f8c527e529` | `multi_agent_v2: thread cap into feature config` | 11:31:57Z | 0 | sprint anchor |
| N=2 | codex #18982 | `da83ab554a` | `jif/memories-on-file-system` (substitution, +1074/-1053, 21 files) | 12:32:45Z | +60m48s | **non-LIFO** (resumed older PR) |
| N=3 | codex #19809 | `5d314f324c` | Phase 2 retry exhaustion | 12:58:12Z | +86m15s | **LIFO** (newest open at the time) |
| N=4 | codex #19812 | `79b4f691a6` | Phase 2 clean workspace guard | 13:14:16Z | +102m19s | **zero-lifespan** (open-and-merge in window) |
| N=5 | codex #19813 | `f431ec12c9` | "nit: one more fix" | 13:32:32Z | +120m35s | **cleanup-PR** (small-diff mop-up; expected terminator, did not terminate) |
| N=6 | codex #19818 | `bb83eec825` | "chore: split memories part 1" | 14:01:06Z | +149m09s | **author-preannounced multi-part follow-up** (net-new branch + `part 1` naming convention) |

Persistent skip across all 6 regimes: **codex #19805** (`dfa03848`), unchanged from Add.90 through Add.92 captures. Selection cascade never returned to it.

Inter-merge cadence: 60m48s, 25m27s, 16m04s, 18m16s, 28m34s. **Cadence is non-monotonic** — synth #97/#99's "monotonically contracting lifespans" / "growing inter-PR gap" property is **partially falsified**: jif-oai's cadence neither monotonically contracts nor monotonically expands. The cadence shape is **bathtub-like** (fast at #18982→#19809→#19812 mid-sprint, slower at the bookends).

## Discriminator vs precedents

- **vs synth #97 (N=3 self-merge with shared spec file and contracting lifespans):** synth #97 is N=3 with monotonically contracting lifespans on a shared spec file. jif-oai's sprint is N=6, lifespans non-monotonic, and the surfaces are **disjoint** at the file level (memories-on-file-system, Phase 2 retry, Phase 2 clean workspace, multi_agent_v2 thread cap, "nit", "split memories part 1" — only #19792 and #18982 share the multi_agent_v2 anchor surface). **Disjoint-surface multi-merge series is harder than shared-spec-anchor series** and the larger N achieved here (6 vs 3) suggests the cascade-with-mutation regime is **more productive than the shared-spec regime**.
- **vs synth #99 (shared-spec-anchor self-merge series extension past triple with growing inter-PR gap):** jif-oai shows **shrinking, then growing** inter-PR gaps (bathtub) without a shared anchor. The 6th regime's preannouncement (`part 1`) is the **author-explicit equivalent** of synth #99's anchor-amplification pattern.
- **vs synth #101 (jif-oai N=2 self-merge inside 70m, non-LIFO, substitution-shape):** synth #101 captured only the N=2 step. Synth #120 extended to N=4. **Synth #222 extends to N=6 with preannouncement of N=7+.** The cascade is **author-driven, not queue-driven** — externally observable evidence (queue snapshots) cannot predict cascade length because the author can introduce net-new branches at any regime transition.
- **vs synth #195 (stack abandonment then flat replacement as 6th multi-PR topology — aibrahim-oai N=5 stack mass-close at single second replaced by flat #19725 merged in 52m15s):** synth #195 captures **stack abandonment**. jif-oai's #19805 persistent skip is **author-deliberate single-PR drop within an active sprint**, not a stack abandonment — the rest of the sprint kept progressing while #19805 sat. **Single-PR persistent skip is a sub-pattern of partial stack abandonment** with N=1 abandoned and N=6 progressing.

## The author-preannounced follow-up signal

The `part 1` naming convention in #19818 is a **forward-looking author commitment**. It signals:
- An additional `part 2` (and possibly `part 3+`) will be filed.
- The author is publicly committing to multi-PR continuation **before** the next PR exists in the queue.
- Maintainers (including the author themselves, with self-merge authority) are advised to expect more of the same surface.

This is the **first observed instance in W17** of an author using a forward-looking naming convention to preannounce follow-up within a self-merge sprint. **If `part 2` materializes by Add.93, the cascade reaches N=7 and the preannouncement signal is validated as a leading indicator.** If `part 2` does not materialize, the convention was decorative.

## Persistent-skip property of #19805

#19805 (`Add MultiAgentV2 root and subagent context hints`, head SHA `dfa03848`) is **the only jif-oai open PR that the cascade never selected** across N=2–6. Properties:
- It's been open and headRefOid-unchanged through 3 ADDENDUM windows (Add.90, Add.91, Add.92 = ~2h30m).
- It's surface-adjacent to the merged PRs (`MultiAgentV2` family — same as #19792's `multi_agent_v2`).
- The author had every opportunity to merge it (self-merge authority, 6 other merges in the same time window, surface-relevant).
- The non-selection is **author-deliberate**, not maintenance-attention-bound.

This generalizes to a sub-pattern: **persistent-skip-within-self-merge-sprint** as evidence of author-internal PR ranking that is invisible from PR metadata alone. The author is treating #19805 as **not-yet-ready** despite having opened it before #19809/#19812/#19813/#19818.

## Prediction (in-vivo at synth-creation time)

1. **Highest-confidence:** "chore: split memories part 2" merges by Add.93 (validating the preannouncement signal). If it merges, N=7 reached and synth-novel territory: **author-preannounced explicit follow-up regime as predictive cascade extender**.
2. **Highest-confidence:** #19805 remains OPEN and headRefOid-unchanged through Add.93 (persistent skip continues). If #19805 finally merges, the persistent-skip ends and the author-internal ranking hypothesis is partially falsified.
3. **Medium-confidence:** the bathtub cadence shape continues — Add.93's first jif-oai merge (if any) takes ≥30m from the previous (slowing limb), or jif-oai's session ends entirely without an Add.93 merge.
4. **Medium-confidence:** no other codex author merges in Add.93 — single-author monopoly extends to a 4th window. (See ADDENDUM-92 pred #6.)
5. **Speculative:** if `part 2` and `part 3` both materialize by Add.94, the cascade reaches N=8 and the preannouncement signal is upgraded from "decorative or singular" to "stable author convention". This would be the largest documented W17 single-author sprint and would deprecate synth #185's 8-PR chained-base mass-close as the cardinality reference (8-merged > 8-closed).

## Cross-references

- **synth #120** (Add.91 seed; N=4 cascade exhausting visible queue): **extended by this synth to N=6 with author-preannouncement.** The "exhaustion" framing is reframed: cascades exhaust the **observable** queue but can be extended via author-introduced net-new branches.
- **synth #97/#99** (shared-spec-anchor self-merge series): **partially falsified** by jif-oai's disjoint-surface, non-monotonic-cadence, larger-N sprint. Shared-anchor and contracting-lifespan are not necessary properties of high-N self-merge sprints.
- **synth #101** (jif-oai N=2 non-LIFO substitution): **first datapoint of this sprint**, retroactively a starting condition not a stable regime.
- **synth #185** (aibrahim-oai 8-PR chained-base mass-close): cardinality reference for stack-collapse. jif-oai's sprint at N=6-merged is approaching this cardinality from the merge-side rather than close-side.
- **synth #195** (stack abandonment with flat replacement): **dual** to jif-oai's persistent-skip-within-progressing-sprint. synth #195 is full-stack abandonment with replacement; jif-oai is single-PR skip with continuation.
- **synth #199** (title-prefix discipline): jif-oai's titles mix `chore:`, `fix`, `nit:`, free-form, and short imperatives — **inconsistent prefix discipline** despite high merge velocity. This **falsifies** synth #199's velocity correlation for self-merging authors with full authority — title-prefix discipline matters for **maintainer-gated** merges, not for **self-merge** authors.
- **ADDENDUM-92 pred #1**: forecasts `part 2` merge in Add.93, directly testing prediction #1 of this synth.
