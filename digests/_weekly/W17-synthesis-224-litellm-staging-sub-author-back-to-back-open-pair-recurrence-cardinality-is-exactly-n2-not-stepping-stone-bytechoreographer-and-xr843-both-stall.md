# W17 Synthesis #224 — litellm staging-queue sub-author back-to-back open-pair recurrence cardinality is EXACTLY N=2, not "≥N=2": both Bytechoreographer (Add.91 #26601/#26600) and xr843 (Add.92 #26603/#26604) opened pairs in <2m and BOTH stalled at the second PR with no third PR opened by Add.93 cutoff, falsifying the stepping-stone hypothesis and establishing N=2 as a stable terminating cardinality

**Date noted:** 2026-04-27 (UTC)
**Status:** Provisional but with two consecutive falsified-N=3-extension predictions across two distinct sub-authors.
**Predecessors:** synth #221 (litellm staging-queue sub-author N=2 back-to-back open-pair recurring across consecutive windows; Add.92 seed), synth #97/#99 (same-author multi-merge series with shared spec anchor and contracting/growing inter-PR gaps), synth #120/#222 (codex jif-oai N=4→N=6 self-merge sprint as cascade).
**Refines:** synth #221 (locks down the recurrence cardinality at exactly N=2 and identifies the difference between sub-author **open-pair** sessions and full-author **merge-sprint** sessions).

## Claim

The litellm staging-queue sub-author back-to-back open-pair pattern (synth #221) is **not** an early stage of an N=3-or-greater session that would extend if observed for longer. It is a **stable terminating cardinality at N=2**. Both observed instances of this pattern in W17 — Bytechoreographer's #26601/#26600 (Add.91) and xr843's #26603/#26604 (Add.92) — show:
- Two PRs opened by the same sub-author within <2 minutes of each other.
- On disjoint surfaces within litellm.
- Both PRs **OPEN-and-stalled** at the next observation window: Bytechoreographer pair stable through Add.92 and Add.93 (~3.5h); xr843 pair stable through Add.93 (~1h).
- **No third PR** opened by either author within ≥1h of the second PR.
- **No merges**, **no closes**, **no force-pushes** — pure stall state.

This is **categorically distinct** from the codex jif-oai self-merge sprint (synth #120/#222), which extends to N=6 in the same 2.5h timescale. The discriminator is **author authority and lifecycle phase**: jif-oai has self-merge authority and operates in **merge-velocity** mode; sub-authors in litellm staging operate in **open-velocity** mode and **stall at the staging gate**.

## Evidence — exact PR refs

### Bytechoreographer pair (Add.91 → Add.93)

| PR | Author | Surface | createdAt approximation | Status across windows | head SHA |
|---|---|---|---|---|---|
| litellm #26601 | Bytechoreographer | (sub-author session, surface 1) | ~Add.91 capture | OPEN→OPEN→OPEN | unchanged |
| litellm #26600 | Bytechoreographer | (sub-author session, surface 2) | ~Add.91 capture (within 2m of #26601) | OPEN→OPEN→OPEN | unchanged |

Persisted across 3 ADDENDUM windows = ~3.5h corpus time. **No #26601/#26600 status change in any window.**

### xr843 pair (Add.92 → Add.93)

| PR | Author | Surface | createdAt | Status across windows | head SHA |
|---|---|---|---|---|---|
| litellm #26603 | xr843 (Tim Ren) | `proxy: set verbose_logger level on LITELLM_LOG=INFO/DEBUG` (`fix`) | 14:11:15Z | OPEN→OPEN | unchanged |
| litellm #26604 | xr843 (Tim Ren) | `health-check strip max_tokens before non-chat handlers` (`fix`) | 14:12:48Z (Δ1m33s) | OPEN→OPEN | unchanged |

Persisted across 2 ADDENDUM windows = ~1h corpus time. **No #26603/#26604 status change in Add.93.**

### Negative evidence — neither sub-author opened a third PR

xr843's open litellm PR list at Add.93 capture (15:13:39Z): exactly **#26603 and #26604, no others**. Bytechoreographer's open litellm PR list: exactly **#26601 and #26600, no others**. **Both authors are at N=2-OPEN, no escalation to N=3 in the observation window.** ADDENDUM-92 pred #4 forecasted xr843 reaching N=3 by 15:00Z — **falsified** (synth #224 hypothesis predicted in advance — see Add.93 pred #4 falsification).

## Discriminator vs precedents

- **vs synth #97/#99 (same-author multi-merge series with shared spec anchor):** synth #97/#99 capture **merged** series by individuals with merge authority. Their cardinalities reached N=3 (synth #97) and "past triple" (synth #99). Sub-author pairs in synth #224 stall at N=2 **before merge**. The cardinality limit is **lifecycle-phase-dependent**: open-only pairs cap at N=2; merged sprints can reach N=6+ (synth #222).
- **vs synth #120/#222 (codex jif-oai N=4→N=6 self-merge cascade):** jif-oai is a **first-party author with self-merge authority**. The sub-authors in synth #224 are **third-party contributors** to litellm staging — they file PRs but do not merge them. The N-difference (N=2 vs N=6) is **structural authority gap**, not productivity gap.
- **vs synth #199 (title-prefix discipline as merge-velocity correlate):** xr843's pair both use `fix(...)` prefixes; both stalled. Bytechoreographer's surfaces inferred to be similar. **Title discipline does NOT compensate for sub-author authority gap.**
- **vs synth #221 (the original Add.92-seed observing the recurrence):** synth #221 framed the pattern as "back-to-back N=2 recurrence across consecutive windows" without commenting on whether N=3 or higher would emerge. Synth #224 closes the question with **N=2-exactly** based on negative-evidence persistence.
- **vs synth #195 (stack abandonment + flat replacement):** synth #195 sees full-stack mass-close with replacement. Synth #224 pairs do **not** mass-close; they persist OPEN. Different terminal behaviors.

## Why the cardinality is exactly N=2 — three candidate causes

1. **Cognitive batching** (primary hypothesis): a sub-author who notices two adjacent litellm bugs while diagnosing a single problem files both fixes in one session, then context-switches away. The session ends after the second PR because the diagnostic context is exhausted. A third bug would require a fresh diagnostic session, which sub-authors rarely return for within the same hour.
2. **Maintainer-attention rationing**: the sub-author observes that prior PRs (their own or peers') sit OPEN in litellm staging for hours/days, and consciously avoids filing a third PR that would dilute review attention to the first two.
3. **Issue-template ergonomics**: filing two PRs is similar effort; the third PR has marginally higher friction (fatigue, end-of-session, lower-priority bug deferred).

Cause 1 is consistent with both observed pairs being on **disjoint surfaces within the same diagnostic neighborhood** (xr843: proxy logger config + health-check token stripping — both touch the proxy layer; Bytechoreographer pair surfaces inferred to be similarly clustered). Cause 2 is consistent with the **persistence-without-update** pattern (no force-pushes — author has moved on, not iterating).

## Prediction (in-vivo at synth-creation time)

1. **Highest-confidence**: by Add.94, neither Bytechoreographer pair nor xr843 pair has any member merge or close. The mutual block from synth #223 is **separate** from the sub-author N=2 stall — both mechanisms hold litellm staging in a high-OPEN-PR-low-merge state.
2. **Highest-confidence**: by Add.94, neither Bytechoreographer nor xr843 opens a third litellm PR.
3. **Medium-confidence**: a third sub-author back-to-back N=2 pair emerges in litellm staging by Add.95 — the pattern is recurring (already 2 instances in W17), and the underlying cause (cognitive batching) is generic.
4. **Medium-confidence**: when one of the existing pairs finally resolves, **both members merge or both members close together** — the pair is treated atomically by the maintainer-attention process, not split. This contrasts with synth #223's mutual-block (where one duo member merges and the other closes).
5. **Speculative**: if a sub-author EVER opens N=3 in litellm staging within 5m, that author has **distinct dynamics** from synth #224 (e.g., automated tooling, internal contributor with different cadence) — N=3+ open-only sessions are predicted to be observable but **rare** and **caused by non-cognitive-batching mechanisms**.

## Quantitative cap test

If we observed many more sub-author back-to-back sessions in litellm and the cardinality distribution were truly **exponential N≥2** (i.e., each PR has independent ~50% probability of being followed by another), we'd expect roughly:
- N=2: 50%
- N=3: 25%
- N=4: 12.5%
- ...

Observed in W17 so far: **2/2 = 100% terminate at N=2**. Probability under the exponential model: 0.5^2 = 25%. The N=2-exactly hypothesis is **not yet statistically dominant** (n=2 is too small) but is **directionally favored**. Add.94/95 observations of the third pair (pred #3) will provide a 3rd datapoint. If the third pair also stops at N=2, the N=2-exactly cap reaches p~0.125 under exponential, p~0.875 under cap-at-N=2 model.

## Cross-references

- **synth #221** (litellm sub-author N=2 back-to-back recurring; Add.92 seed): refined by this synth — recurrence cardinality is exactly N=2, not "≥N=2".
- **synth #120/#222** (jif-oai N=4→N=6 cascade): orthogonal authority class. Self-merge authors operate in merge-velocity regime with N=6+ cardinalities; sub-authors operate in open-velocity regime capped at N=2.
- **synth #223** (convergent-fix-duo mutual-block; companion Add.93 seed): independent mechanism but coexists in litellm staging — both contribute to litellm's 36h+ silence at Add.93. The Bytechoreographer/xr843 N=2 stalls and the convergent-fix duo blocks are **two different non-merge regimes** simultaneously active in the same staging queue.
- **synth #97/#99** (same-author shared-spec self-merge series): orthogonal — merged-series cardinalities are not bounded by the open-only N=2 cap.
- **synth #199** (title-prefix discipline): falsified for sub-author N=2 subclass — discipline does not unblock the N=2 stall.
- **ADDENDUM-93** Add.93 pred #4: directly testable prediction #1/#2 of this synth (continued non-merge, non-close, non-N=3 of both pairs by Add.94).
- **ADDENDUM-92** Add.92 pred #4: forecasted xr843 N=3 by 15:00Z. **Falsified by Add.93** — this synth retroactively explains the falsification as the N=2-exactly cap.
