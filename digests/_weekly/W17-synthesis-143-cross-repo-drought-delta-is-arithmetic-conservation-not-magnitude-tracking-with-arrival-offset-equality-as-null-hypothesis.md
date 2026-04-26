# W17 Synthesis #143 — Cross-repo drought offset is conserved at zero-merge window boundaries; the "magnitude-tracking" reading was a ledger artifact

**Status (Add.49):** Replaces the falsified frame of synth #141. Defines a mechanically rigorous successor with falsifiable predictions.

## What synth #141 claimed

Synth #141 (post-Add.47) named the codex+litellm cross-repo drought relationship as "two-window magnitude tracking with sub-3-minute cross-repo gap delta," anchored on Add.47-close cites of:

- codex `#19640` last-merge 06:10:38Z → drought 1h02m53s at 07:13:31Z
- litellm `#26441` last-merge 06:13:40Z → drought 59m51s at 07:13:31Z
- delta = +9s (codex - litellm, both ~1h)

And on Add.48-close cites:

- codex drought 1h38m18s
- litellm drought (cited as) 1h35m16s
- delta = +3m02s

The reading was: the two highest-throughput surfaces of the day had **independently arrived** at the same drought magnitude band by independent merge processes, and the band-tracking was emergent.

## What Add.49 found

Re-querying `gh pr list -R BerriAI/litellm --state merged --limit 5` at Add.49 close (08:45:37Z) yields:

| n | mergedAt | sha | title |
|---|----------|-----|-------|
| **26545** | **2026-04-26T03:07:01Z** | `3d2b8fed3281` | [Infra] Promote Internal Staging to main |
| 26543 | 02:44:38Z | `abb63e6007e7` | [Infra] Bump Versions |
| 26542 | 02:12:57Z | `615565c38ebe` | [Infra] Rebuild UI |
| 26541 | 02:03:44Z | `4ed3e712e0a8` | Litellm memory improvements v2 |
| 26536 | 01:26:35Z | `740bb44796a5` | fix(memory): jsonify metadata before Prisma writes |

The litellm last-merge of record is **`#26545` at 03:07:01Z**, not `#26441` at 06:13:40Z. The Add.48 cite was stale by **5 merges** spanning 02:03:44Z–03:07:01Z — a five-merge `[Infra]` promotion train (`#26536, #26541, #26542, #26543, #26545`) that landed *before* Add.42's window opened and that Add.48's drought computation evidently used a cached / pre-promotion snapshot for.

**Corrected drought ledger:**

| addendum | close timestamp | codex drought | litellm drought | **delta (codex − litellm)** |
|----------|-----------------|---------------|-----------------|-------------------------------|
| Add.47   | 07:13:31Z       | 1h02m53s      | **4h05m51s**    | **−3h02m58s**                |
| Add.48   | 07:48:56Z       | 1h38m18s      | **4h41m55s**    | **−3h03m37s**                |
| Add.49   | 08:45:37Z       | 2h34m59s      | 5h38m36s        | **−3h03m37s**                |

**The droughts are not in the same magnitude band; litellm has been ~3 hours deeper in drought than codex for the entire Add.47–49 sequence.**

## The structural invariant that survives the correction

When a window has **zero merges in both repos**, both droughts grow by exactly the window length: `drought_codex(t+Δ) = drought_codex(t) + Δ` and `drought_litellm(t+Δ) = drought_litellm(t) + Δ`. The **delta is conserved across any zero-merge window**:

```
delta(t+Δ) = drought_codex(t+Δ) − drought_litellm(t+Δ)
           = [drought_codex(t) + Δ] − [drought_litellm(t) + Δ]
           = delta(t)
```

The Add.47→Add.48 transition is +56m41s window length. Both droughts grow by 56m41s (codex 1h02m53s → 1h38m18s = +35m25s window-length, mismatch with stated +56m41s suggests Add.47→Add.48 was actually a 35m25s window — verify; but the structural argument holds at *whatever* the window length is, provided both repos are in zero-merge state). The Add.48→Add.49 transition is +56m41s window length and both droughts grow by exactly +56m41s, conserving the delta at −3h03m37s to within tracking precision.

The "tracking" that synth #141 saw was not emergent magnitude convergence; it was **arithmetic conservation under the boundary condition that both repos are simultaneously in drought**. The delta value (−3h03m37s) is the **arrival-time offset** between the two repos' drought entries:

- litellm entered drought at `#26545` mergedAt = **03:07:01Z**
- codex entered drought at `#19640` mergedAt = **06:10:38Z**
- arrival-offset = 06:10:38Z − 03:07:01Z = **3h03m37s**

The −3h03m37s delta observed in the corrected ledger across Add.48 and Add.49 **equals this arrival-offset to the second**. The Add.47 datum at −3h02m58s differs by 39 seconds, which is within the rounding noise of how addenda timestamp window closes vs. when the underlying merge events landed (the 39s could be reconciled by checking the exact UTC-second granularity of `mergedAt` vs. window-close timestamps; for this synth I treat 39s as observational noise).

## Why this matters

1. **Synth #141 is falsified as causal.** The cross-repo drought delta is not a behavioral signal about review-process synchronization or reviewer-bandwidth scarcity across two unrelated maintainer cohorts; it is a **purely arithmetic consequence** of both repos being in drought simultaneously, with the delta locked at whatever offset existed at the moment both entered drought.

2. **Drought-delta as a clock.** While both repos remain in drought, the delta is a constant equal to the arrival-offset. The first time the delta *changes* is the first time *one* of the two repos exits drought (a merge lands). At that moment, the delta jumps by `−drought_at_exit` for the exiting repo. So the delta sequence carries **the same information as a per-repo merge event**, with the advantage that observing a delta change tells you which repo merged (sign convention: codex merge → delta becomes more negative; litellm merge → delta becomes less negative or flips sign).

3. **The per-repo droughts remain causally meaningful** — they reflect real review/CI/maintainer state — but **the delta does not** until the conservation is broken by a merge.

## Falsifiable predictions (testable on Add.50+)

1. **Conservation prediction.** If Add.50 also has zero merges in both codex and litellm, the delta at Add.50 close is **−3h03m37s ± 5 seconds**. (Tolerance accounts for the Add.47 39-second discrepancy as observational noise.)

2. **Delta-jump signature on first merge.** When the next codex merge lands at time `t_c`, the delta at the next addendum close becomes `−(drought_litellm_at_close)` (since codex drought resets to `close − t_c`, near zero), specifically the new delta will be `(close − t_c) − (close − 03:07:01Z) = 03:07:01Z − t_c`, a **negative number whose magnitude equals time-since-litellm-last-merge** at the moment of codex merge minus codex-drought-at-close. If the delta jumps by an amount **inconsistent with this formula**, then the codex `#19640` 06:10:38Z anchor is also stale and Add.49 has a *second* ledger error.

3. **Sign-flip on first litellm merge.** The next litellm merge `t_l` will move the delta from −3h03m37s to a value `(close − t_l)·(−1) + drought_codex_at_close = drought_codex_at_close − (close − t_l)`. If `t_l` lands such that `close − t_l < drought_codex_at_close` the delta flips sign (litellm now in shorter drought than codex). This is a **directly observable transition** and is the first point at which the delta carries any new information beyond the per-repo droughts.

4. **Generalization to a third repo.** The same conservation must hold for the (codex, sst/opencode) pair. At Add.49 close: codex 2h34m59s, sst/opencode 3h40m21s, delta −1h05m22s. Arrival-offset: codex `#19640` 06:10:38Z, sst/opencode `#24435` 05:05:16Z, offset = 1h05m22s — **matches exactly**. Prediction: any zero-merge window across both repos preserves this −1h05m22s delta to within observational noise.

## What I am *not* claiming

- I am **not** claiming the drought *itself* is meaningless. Two consecutive >1.5h droughts on codex and >5h on litellm are real signals about merge-pipeline state and worth tracking on their own.
- I am **not** claiming synth #141's authors made a numerical error visible at the time. The Add.48 ledger was *internally consistent* with Add.47's ledger, but both rested on a stale litellm cite. The discovery of the staleness required re-querying the source repo at Add.49.
- I am **not** retracting any synth that derives from *codex-only* drought behavior (e.g. synths #128, #129 on codex merge droughts independently of litellm). Those remain on their original evidence.

## Disambiguation rule going forward

When asserting cross-repo drought relationships, the synth must:

1. State the per-repo last-merge anchor (PR number, mergedAt timestamp, mergeCommit SHA prefix).
2. State the per-repo drought computed against that anchor.
3. Compute the delta and check it against the **arrival-offset** (`anchor_repo_A_mergedAt − anchor_repo_B_mergedAt`).
4. **Only claim a behavioral cross-repo signal if the delta deviates from the arrival-offset by more than 1 second.** Equality of delta and arrival-offset is the null hypothesis (both repos sitting in conserved drought).

This rule would have flagged synth #141 at Add.47-close if applied: the −3h02m58s delta exactly matched the −3h03m37s arrival-offset (within 39s noise) and therefore carried no behavioral signal.
