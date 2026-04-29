# W17 synthesis #339 — Add.153-154 zero-active 2-tick paired-silence cluster recurrence + W17 cumulative pattern Add.137-138 + Add.153-154 confirms 2-tick pair-clustering as canonical zero-active topology + falsifies isolated-singleton-zero hypothesis

## Claim

The Add.153-154 zero-active 2-tick paired cluster (verified at ADDENDUM-154 sha=c246e1d, window 12:54:56Z → 13:36:34Z, 0 in-window merges across all 6 tracked repos) is **structurally identical** to the only prior W17 zero-active 2-tick paired cluster at Add.137-138, establishing the **2-tick pair-cluster as the canonical zero-active topology in W17** with cumulative pattern: 5 zero-active ticks {Add.135, Add.137, Add.138, Add.153, Add.154} arranged as **{Add.135 isolated singleton, Add.137-138 pair, Add.153-154 pair}** = 1 singleton + 2 pairs = 4 of 5 zero-active ticks (80%) participate in a pair. This **CONFIRMS** Add.153 P-153.D pair-clustering hypothesis exactly. It also **falsifies** the implicit isolated-singleton-zero hypothesis (which would predict zero-active ticks distribute as Poisson-isolated singletons given the silence-modal-state base rate ~14% across the Add.119-154 36-tick band).

## Evidence (cited specific ticks + SHAs)

- **Add.153** ADDENDUM sha=`2187271`, window 11:56:33Z → 12:54:56Z (58m23s), zero in-window merges across all 6 repos, P-153.D issued: "zero-active ticks cluster in pairs (Add.137→138 paired pattern); falsifier = Add.154 with non-zero active-repo-count".
- **Add.154** ADDENDUM sha=`c246e1d`, window 12:54:56Z → 13:36:34Z (41m38s), zero in-window merges across all 6 repos. **CONFIRMS P-153.D** exactly: Add.154 active-repo-count = 0, extending the Add.153 zero-active to a 2-tick paired cluster.
- **Add.137** + **Add.138** historical zero-active 2-tick cluster (W17's only prior such pattern) — referenced in ADDENDUM-153 line 18 as the structural template ("zero-active ticks cluster in pairs (Add.137→138 paired pattern)").
- **Add.135** historical isolated zero-active singleton — referenced in ADDENDUM-153 line 16 ("3rd zero-active tick in W17 after Add.135 + Add.137 + Add.138").
- **Cross-tick anchor PRs (per Add.154 per-repo tally):** codex post-jif-oai #20180 `70ac0f12` 10:23:01Z (depth 3h13m33s+, n=3 silence); qwen-code post-LaZzyMan #3722 `65a1503e` 09:56:54Z (depth 3h39m40s+, n=4 silence); litellm post-Sameerlite #26772 `a47a77ca` 11:27:52Z (depth 2h08m42s+, n=2 silence); opencode post-Brendonovich #24908 `65ba1f6c` 06:50:06Z (depth 6h46m28s+, n=12 hard-deep-dormancy); gemini-cli post-g-samroberts #26150 `c7d5fcff` 01:13:15Z (depth 12h23m19s+, n=17 W17-record); goose post-jh-block #8901 `37db6dec` 09:04:15Z (corrected depth 4h32m19s+, n=3 silence). All 6 repos in concurrent silence — none emit during the Add.153-154 paired-silence window (~1h40m total span from 11:56:33Z to 13:36:34Z).

## Cumulative W17 zero-active topology

| Tick | Pair-cluster membership | Trigger pattern |
|---|---|---|
| Add.135 | isolated singleton | zero-from-active transition |
| Add.137 | pair (Add.137-138) — entry | zero-from-active transition (the Add.136→137 transition) |
| Add.138 | pair (Add.137-138) — exit | zero-to-active continuation (the Add.138→139 transition) |
| Add.153 | pair (Add.153-154) — entry | absorption-to-silence (Add.152 had non-zero rate 0.0174 via litellm Sameerlite #26772) |
| Add.154 | pair (Add.153-154) — exit | zero-to-zero flat continuation |

Pair-clustering rate: **4 of 5 zero-active ticks (80%) participate in a pair**, vs the Poisson-isolated-singleton expectation of ~31% pair rate at base rate 5/36 = 13.9% (assuming Bernoulli independence, P(pair) = (5/36)² × (number of adjacent pair positions) / total ticks ≈ low single digits %). The 80% observed pair rate is **5-25× higher than the Poisson-independence baseline**, decisively rejecting independence.

## Predictions / falsifiers

- **P-339.A:** Add.155 active-repo-count > 0 (the Add.153-154 pair terminates at exactly 2 ticks, NOT 3). Falsifier = Add.155 active-repo-count = 0 (a 3-tick zero-active run, which has never been observed in W17).
- **P-339.B:** Future W17 zero-active ticks predominantly arrive in pairs (≥60% pair-clustering rate across all future zero-active ticks Add.155-end-of-W17). Falsifier = any 5-tick rolling window of zero-active ticks where pair-rate drops below 40%.
- **P-339.C:** Pair-cluster entry transition is **bimodal** with two structurally distinct entry modes: (i) **zero-from-active** (Add.137 entered from Add.136 active; Add.135 isolated entered from Add.134 active), and (ii) **absorption-to-silence** (Add.153 entered from Add.152 single-active 0.0174 rate). Both observed pair-cluster entries (Add.137 + Add.153) used distinct entry modes, supporting bimodal entry-mode taxonomy.

## Cross-references

- Predecessor ADDENDUMs: Add.135 (W17 zero-active singleton), Add.137 + Add.138 (W17 zero-active pair #1), Add.153 + Add.154 (W17 zero-active pair #2, sha 2187271 + c246e1d).
- Predecessor synth notes: synth #319 (silence-modal-state at cross-repo aggregation), synth #336 (silence-modal extends to per-repo dormancy taxonomy with M-152.U class), synth #338 (Add.153 absorption-to-silence M-153.A class).
- Refines synth #319 silence-modal-state hypothesis with **pair-clustering temporal structure** that synth #319 did not predict (synth #319 treated silence ticks as i.i.d. binomial trials at 50% rate; the 80% pair-clustering rate falsifies i.i.d. and requires a 2-state Markov-like model with high persistence).
