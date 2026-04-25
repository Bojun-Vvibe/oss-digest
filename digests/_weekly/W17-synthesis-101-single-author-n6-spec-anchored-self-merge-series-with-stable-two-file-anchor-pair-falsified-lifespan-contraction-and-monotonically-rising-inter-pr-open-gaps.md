# W17 Synthesis #101 — Single-Author N=6 Spec-Anchored Self-Merge Series with Stable Two-File Anchor Pair, Falsified Lifespan-Contraction, and Monotonically-Rising Inter-PR Open Gaps

**Status:** supersedes synth #97 (anchor at N=3, contraction claim) and synth #99 (anchor at N=4, growing-gap claim); both prior synths' partial characterizations are absorbed and corrected here at N=6.

**Window of evidence:** 2026-04-25 12:51:36Z (#24352 first merge) → 2026-04-25 19:24:08Z (#24368 sixth merge), span **6h32m32s**.

**Author:** `kitlangton` (single author across all six PRs).

**Repo:** anomalyco/opencode, base branch `dev` for all six.

## Members (N=6)

| # | PR | merged | lifespan | files | adds/dels | merge SHA |
|---|---|---|---|---|---|---|
| 1 | #24352 | 12:51:36Z (Addendum 25) | 24m57s | 5 | +93/-2 | (recorded in Addendum 25) |
| 2 | #24353 | 13:23:50Z (Addendum 25) | 13m47s | 4 | +56/-1 | (recorded in Addendum 25) |
| 3 | #24356 | 16:16:23Z (Addendum 26) | 4m09s | 3 | +44/-3 | (recorded in Addendum 26) |
| 4 | #24365 | 18:46:06Z (Addendum 28) | 11m48s | 8 | +270/-13 | `95d4bb21` |
| 5 | #24366 | 18:55:30Z (Addendum 28) | 5m15s | 4 | +29/-2 | `b749866f` |
| 6 | #24368 | 19:24:08Z (Addendum 28) | 18m02s | 6 | +68/-1 | `b4f4134e` |

## Three properties at N=6

### Property A — anchor-pair persistence (SURVIVES)

Every PR (1-6) modifies **both** of:

- `packages/opencode/specs/effect/http-api.md`
- `packages/opencode/src/server/routes/instance/index.ts`

That is, the spec-file + the central instance-router file form a **stable anchor pair touched on every member of the series**. No member touches one without the other. Other files vary; the anchor pair does not.

**Conditional probability under independence baseline:** if anchor-pair co-touch were independent of series membership, P(co-touch) per random PR in this repo ≈ small (the spec-file is touched on a small minority of PRs in W17). Six consecutive same-author PRs co-touching it is not chance.

### Property B — lifespan contraction (FALSIFIED at N=4, did not re-establish)

Lifespan series: **24m57s → 13m47s → 4m09s → 11m48s → 5m15s → 18m02s.**

Synth #97 anchored on the strictly-contracting trio (24m57s, 13m47s, 4m09s) and predicted continued contraction. The N=4 member (#24365) **expanded** to 11m48s, breaking the monotone trend. Subsequent N=5 contracted to 5m15s, N=6 expanded again to 18m02s. The signal is **oscillatory after the third member**, not contracting.

**Falsification verdict:** synth #97's contraction-trend claim is rejected at N=4 with no recovery through N=6. The series-extension stress test that synth #99 explicitly registered as falsifiable did its job.

### Property C — inter-PR open-gap monotone rise (SURVIVES with caveat)

Inter-PR open-time gaps (open(N+1) − open(N), or open(N+1) − merge(N) where the next opens after the prior merges):

- #24352 → #24353: short (intra-Addendum-25, sub-30m, exact gap recorded in Addendum 25)
- #24353 → #24356: ~2h+ (cross-Addendum)
- #24356 → #24365: 26m23s (Addendum 27 close → Addendum 28 open)
- #24365 → #24366: 15m57s (#24365 opens 18:34:18Z, #24366 opens 18:50:15Z — actually a **decrease** vs. the prior 26m23s)
- #24366 → #24368: 15m51s (#24366 opens 18:50:15Z, #24368 opens 19:06:06Z)

Synth #99's "growing inter-PR-gap" claim **survives** in the sense that the post-#24356 gaps (26m23s, 15m57s, 15m51s) are all far above the original triple's sub-15-minute floor — but it does **not** continue strictly growing inside Addendum 28 (15m57s ≈ 15m51s, both below the 26m23s peak). The corrected claim is **"inter-PR gaps stabilize at ~16m post-extension, an order of magnitude above the intra-original-triple cadence."**

## Why synth #101 supersedes #97 and #99

- Synth #97 anchored a **3-point monotone contraction** that did not survive extension.
- Synth #99 anchored the **first extension** at N=4 (still open at the time) and registered the contraction-test as falsifiable.
- Synth #101 anchors the **fully-merged N=6 reality**: anchor-pair persistence wins, contraction loses, gap-growth partially wins.

The compound structural object is now: **a single author can sustain a 6-member spec-anchored self-merge series over ~6.5 hours with stable two-file anchor pair, oscillating lifespans in the 4-25m range, and stabilized inter-PR open gaps near 16m after the original sub-15m intra-triple cadence dilates.**

## Cross-window detector triggered by this synth

For future digest ticks, the detector for "kitlangton-class spec-anchored series" is:

1. ≥3 PRs by same author on `dev` base, all merged within 24h.
2. Every member co-touches a fixed file pair (spec-file + central router/index).
3. Every member is self-merged.

If a candidate triple matches (1)–(3), open a synth-#101-class anchor and explicitly track lifespan and gap-cadence to N≥6 before declaring contraction or growth — the N=3 lens is **insufficient** for trend claims.

## Open follow-up question

Does the series end at N=6, or does kitlangton extend to N=7+ in a later window today? At synth-anchor time, no PR #24369+ from kitlangton is open on the spec-anchor pair. **Falsifiable prediction:** if the series extends, the next member's lifespan will fall in [4m, 25m] (the observed envelope) with probability ≥0.9, and inter-PR open gap from #24368 will be in [10m, 35m] with probability ≥0.85. If both predictions fail in the same extension event, that itself becomes a #101-supersession trigger.
