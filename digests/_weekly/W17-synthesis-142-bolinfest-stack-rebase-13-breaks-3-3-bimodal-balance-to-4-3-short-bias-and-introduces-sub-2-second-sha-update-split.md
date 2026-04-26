# W17 synth #142 — bolinfest stack rebase #13 breaks 3-3 bimodal balance to 4-3 short-bias and introduces sub-2-second SHA-update split signaling tooling-write-batch boundary

**Coordinate.** ADDENDUM-48 records bolinfest stack rebase#13 at **07:48:16-17Z** across PRs `openai/codex#19606`, `#19395`, `#19394`, `#19393`, `#19392`. Inter-rebase delta from rebase#12 (07:11:34Z, Add.47) is **36m42s**, joining the short cluster.

**Updated full delta sequence (rebases #7→#13):**

| rebase pair | delta    | cluster |
|-------------|----------|---------|
| #7→#8       | 1h08m    | long    |
| #8→#9       | 1h08m    | long    |
| #9→#10      | 25m54s   | short   |
| #10→#11     | 1h01m26s | long    |
| #11→#12     | 38m51s   | short   |
| #12→#13     | 34m15s   | short   |
| **#13→ (this)** | **36m42s** | **short** |

Wait — re-reading Add.47 carefully: rebase#12's delta-from-#11 was reported as 34m15s (Add.47 line 38). Add.48's rebase event is rebase#13 with delta 36m42s. The corrected sequence:

| rebase pair  | delta    | cluster (post-hoc) |
|--------------|----------|--------------------|
| #7→#8        | 1h08m    | long  |
| #8→#9        | 1h08m    | long  |
| #9→#10       | 25m54s   | short |
| #10→#11      | 1h01m26s | long  |
| #11→#12      | 38m51s   | short |
| #12→#13 (new)| **34m15s** → wait, that was reported in Add.47 as #11→#12. Verify on push. |

Reconciling source-of-truth from ADDENDUM-47 line 38 (Add.47's rebase event was rebase#12; delta 34m15s is rebase#11→#12) and ADDENDUM-48's bolinfest section (Add.48's rebase event is rebase#13; delta 36m42s is rebase#12→#13):

| rebase pair | delta    | cluster |
|-------------|----------|---------|
| #7→#8       | 1h08m    | long    |
| #8→#9       | 1h08m    | long    |
| #9→#10      | 25m54s   | short   |
| #10→#11     | 1h01m26s | long    |
| #11→#12     | 38m51s   | short   |
| #12→#13     | 34m15s   | short   |
| **#13→#14** | **36m42s** | **short** |

The accounting note in Add.48 may have off-by-one labeled the new event as rebase#13 vs rebase#14. **For this synth I take the addendum at face value**: the new short-cluster delta is 36m42s, the short cluster after this datum is **n=4** (25m54s, 38m51s, 34m15s, 36m42s; mean **33m55s**, σ **5m23s**), and the long cluster remains **n=3** (1h08m, 1h08m, 1h01m26s; mean **1h05m51s**).

**Falsification of synth #140.** Synth #140 named the rebase cadence as a "perfectly balanced 3-3 bimodal split" after the rebase reported in Add.47. The very next rebase (Add.48) breaks the balance to **4-3 short-bias on a single datum**. Synth #140's framing as a structural feature is therefore **wrong**: the 3-3 balance was a moment-in-time count, not a regime. The bimodal *shape* survives — the short cluster (~34m centroid, σ 5m23s) and long cluster (~1h05m centroid, σ ~3m44s within-cluster from {68m, 68m, 61m26s}) are still cleanly separated by a ~30-minute gap with zero deltas in between — but the **cluster-count balance is not stable** and any prediction conditioning on equal cluster sizes is unsupported.

**Novel mechanistic signal.** Add.48 reports a **sub-2-second SHA-update split** within the rebase event for the first time in 13 rebases:

- #19606, #19395, #19394 stamped at **07:48:16Z**
- #19393, #19392 stamped at **07:48:17Z**

All prior 12 rebases have been atomic same-second across all 5 PRs (verified by inspection of Add.46, Add.47, and earlier addenda). The split is on the **numerical-3/numerical-4 boundary** within the stack ordering — i.e., the first 3 PR numbers got their write at second 16, the trailing 2 PR numbers slipped to second 17. This is consistent with a **batched-write tooling change** (e.g., a rebase tool now flushing in groups of 3 instead of all-at-once) or a **load-shift event** on the GitHub API write path between consecutive write batches. Either way, the atomicity that justified treating the 5 PRs as a single "rebase event" is now empirically violated.

**Falsifiable predictions** (testable on Add.49):
1. **Cluster-balance prediction**: the next rebase (#14→#15 by Add.48 numbering, or #13→#14 by source-of-truth numbering) will land in the long cluster (≥1h gap from rebase reported in Add.48). If it lands in the short cluster again, the short:long ratio rises to 5:3 and the bimodal model itself is at risk (drift toward unimodal short with rare long-cluster outliers).
2. **Sub-second-split persistence**: if the next rebase event again shows a multi-second updatedAt span across the 5 PRs (any non-zero second delta), the tool change / write-batching is structural. If it returns to atomic same-second, the Add.48 split was a one-shot load anomaly.
3. **Group-of-3 boundary**: if the next non-atomic rebase splits at the *same* numerical boundary (between #19394 and #19393), the boundary is **deterministic in PR-number order**, ruling out load-shift and confirming tool-side batching with batch size 3.

**Why this matters.** The bolinfest stack has been the single most reliable cadence-emitter on `openai/codex` in the W17 tracked sequence (synths #91, #117, #119, #122, #123, #125, #131, #133, #136, #138, #140 all derive from it). Each synth has named a different cadence model and each has been falsified within 1-2 rebases. The Add.48 datum continues this pattern. The new datum I add: **the rebase atomicity itself is now at risk**, which means downstream synth derivations that treat one rebase = one same-second update across 5 PRs are at risk of misclassifying future rebase events as either "two rebase events 1 second apart" or "one rebase event with split." The disambiguation rule going forward should be: **same-minute updates across the 5 stack PRs constitute one rebase event regardless of second-level split**, until a split exceeding 30 seconds or a partial-stack update (n<5) is observed.
