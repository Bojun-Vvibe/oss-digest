# W17 synthesis #345 — Add.157 gemini-cli n=19 silence-break via same-second dual-author doublet (adamfweidman #26162 7ab932c8 + sripasg #26143 c2e5b28e both at 15:35:38Z) STRUCTURALLY RETIRES synth #336/#342 M-152.U cascade for gemini-cli at 14h band exit + introduces SAME-SECOND DUAL-AUTHOR DEEP-DORMANCY SILENCE-BREAK shape as silence-break sub-class distinct from synth #84/#182/#92/#295 — cascade-monotonicity is now retroactively reinterpretable as a finite-budget property rather than an open-ended monotone trajectory

## Claim

The Add.157 gemini-cli silence-break (depth 14h22m23s, n=19 → emission via 2 in-window merges at exactly 15:35:38Z UTC) **structurally retires** the synth #336 / #342 M-152.U cascade for gemini-cli at the **14h band exit**, capping the W17 gemini-cli M-152.U trajectory at **n=4 hour-boundary crossings** (10h Add.152, 11h Add.153, 12h Add.154, 13h Add.155, with the 14h crossing at 15:13:15Z falling within Add.157 at +1m12s but **NOT** culminating in a 14h+ depth extension because gemini-cli emits at 15:35:38Z, exiting the M-152.U class). The cascade-monotonicity property of M-152.U class — previously reframed by synth #343 as **"conditional on dispatcher tick-cadence ≥58m+ widths"** — is now **further refined** by synth #345 as **"finite-budget per repo, terminating at the first emission past the n=10h threshold regardless of dispatcher cadence"**. Cascade-monotonicity is a **terminating property** of M-152.U trajectories, not an open-ended monotone progression — every M-152.U candidate is on a finite countdown to silence-break.

This synth makes three additional contributions beyond the cascade-retirement claim:

1. **Introduces SAME-SECOND DUAL-AUTHOR DEEP-DORMANCY SILENCE-BREAK shape as a new silence-break sub-class.** Two cross-author merges land at exactly 15:35:38Z UTC on disjoint surfaces of a single repo (gemini-cli) at the silence-break boundary of an n=19 14h22m23s deep dormancy streak. This shape is structurally distinct from prior W17 same-second observations (synth #84 same-second long-tail co-bump = single-author or aged-PR refresh; synth #92 same-second 4-PR open tuplet = single-author opens not merges; synth #182 same-second single-author merge coupling on Crush; synth #295 sub-minute 3-author 3-subsystem disjoint triplet = merge-queue-batch-flush but NOT silence-break-correlated). The closest match is synth #295 batch-flush — but synth #295 instances were not silence-break-correlated, while Add.157 is squarely at the silence-break boundary of the deepest M-152.U trajectory of W17. **Same-second dual-author silence-break is a silence-break sub-class** (call it M-157.D for dual-author silence-break) with structural properties: (a) ≥2 merges at identical UTC second; (b) ≥2 distinct authors; (c) disjoint surfaces; (d) at the silence-break boundary of a ≥10h dormancy streak.

2. **Reinterprets synth #336/#342/#343 cascade-monotonicity as finite-budget.** Synth #336 framed cascade-monotonicity as an intrinsic property of the M-152.U class. Synth #342 introduced the n=4 hour-boundary cascade observation. Synth #343 refined to "conditional on dispatcher tick-cadence ≥58m+ widths" after the Add.156 width-insufficiency falsification. Synth #345 now refines further: cascade-monotonicity is **finite-budget**, terminating at the first emission past the M-152.U entry threshold (≥10h depth). The gemini-cli budget for W17 was 4 hour-boundary crossings (10h, 11h, 12h, 13h) before silence-break at 14h22m23s. The cascade is structurally a **time-window race** between the deep-dormancy regime and the maintainer-attention regime, with the maintainer-attention regime winning at the 14h band for gemini-cli in W17. The cascade-monotonicity property is **retroactively reinterpretable** as the duration the deep-dormancy regime can hold off the maintainer-attention regime, and the M-152.U class membership is **bounded above by maintainer-flush events**, not by intrinsic regime stability.

3. **Establishes opencode as the sole remaining M-152.U candidate in W17 with a tight cascade margin.** Opencode crossed the 9h boundary at 15:50:06Z within Add.157 by **only 37s before window close** — the **second-tightest within-window boundary-crossing margin** in W17 cascade history (after Add.155 13h-crossing at 1m36s before close). Opencode is now structurally the sole M-152.U candidate trajectory remaining for W17 after gemini-cli's structural retirement at the 14h band. Per the synth #345 finite-budget framing, opencode's cascade is on a finite countdown — the W17 question is now whether opencode's budget (currently at hour-boundary count = 0, just entered 9h) can extend the M-152.U class membership to a second repo before its own emission/silence-break.

## Evidence (cited specific ticks + SHAs)

- **Add.152** ADDENDUM (gemini-cli 10h crossing at 11:13:15Z, depth 10h43m18s+, n=15): M-152.U class founding tick; cascade-monotonicity inception.
- **Add.153** ADDENDUM sha=`2187271`: gemini-cli 11h crossing at 12:13:15Z, depth 11h41m41s+, n=16; synth #336 cascade-monotonicity established.
- **Add.154** ADDENDUM sha=`c246e1d`: gemini-cli 12h crossing at 13:13:15Z, depth 12h23m19s+, n=17; cascade extends.
- **Add.155** ADDENDUM sha-pending (commit 8e0a8d4 expected): gemini-cli 13h crossing at 14:13:15Z, depth 13h01m36s+, n=18; cascade extends — last tick where cascade-monotonicity held in the boundary-crossing sense (margin only 1m36s before close).
- **Add.156** ADDENDUM sha=`2bd78aa`: gemini-cli 14h crossing at 15:13:15Z falls **+1m12s AFTER Add.156 close** (window 57m12s, 48s short of 58m threshold); depth 13h58m48s+, n=19; cascade-monotonicity falsified-at-margin per synth #343 (width-insufficiency falsifier sub-condition).
- **Add.157** ADDENDUM sha=`dc5c0ff`: window 15:12:03Z → 15:50:37Z (38m34s, 40m mode confirming Add.156 P-156.D). Gemini-cli emits **2 same-second merges at 15:35:38Z**: adamfweidman #26162 `7ab932c8` `test: fix failures due to antigravity environment leakage` + sripasg #26143 `c2e5b28e` `refactor(acp): modularize monolithic acpClient into specialized files`. Streak terminated at depth 14h22m23s (15:35:38Z − 01:13:15Z = 14h22m23s); n=19 silence streak ends. M-152.U class structurally retired for gemini-cli at the 14h band exit.

## Quantitative analysis: gemini-cli M-152.U trajectory budget

| Tick | Time | Depth-at-close | Hour-boundary crossed within window | Cascade hold? |
|---|---|---|---|---|
| Add.152 | 11:38:18Z (close) | 10h43m18s+ | 10h (at +14m15s, within 57m33s window) | Yes (entry) |
| Add.153 | 12:54:56Z (close) | 11h41m41s+ | 11h (at +16m42s, within 58m23s window) | Yes |
| Add.154 | 13:36:34Z (close) | 12h23m19s+ | 12h (at +18m19s, within 41m38s window) | Yes (despite 40m-mode tick) |
| Add.155 | 14:14:51Z (close) | 13h01m36s+ | 13h (at +36m41s, within 38m17s window) | Yes by 1m36s margin |
| Add.156 | 15:12:03Z (close) | 13h58m48s+ | 14h missed by 48s (falls +1m12s into Add.157) | **No (width-insufficiency)** |
| Add.157 | 15:35:38Z (gemini-cli emits) | **14h22m23s** (terminal) | 14h crossed at +1m12s into Add.157, but emission at +23m35s into Add.157 retires the trajectory | **No (emission)** |

Gemini-cli's M-152.U budget for W17 = **4 hour-boundary crossings** (10h, 11h, 12h, 13h) over **5 ticks** (Add.152-156) before width-insufficiency at Add.156 and emission at Add.157. The trajectory ran **22m23s past the 14h boundary** before silence-break — the longest "post-boundary, pre-emission" gap was the 14h band itself (15:13:15Z entry → 15:35:38Z emission = 22m23s of being in the 14h band). The trajectory **never reached the 15h band**.

The cascade-budget conservation observation: every hour-boundary crossing required a width ≥ within-tick offset (margin shrunk from 43m18s at Add.152 to 1m36s at Add.155, then went negative at Add.156). The **monotonic margin compression** across Add.152-155 (43m18s → 41m41s → 23m19s → 1m36s) is itself a **synth #345 secondary observation**: the cascade-monotonicity holds only as long as within-tick margin is positive, which decays monotonically as the hour boundary approaches the dispatcher tick boundary alignment. **Cascade-monotonicity has a built-in self-termination kinetics** independent of emission — even without the Add.157 silence-break, cascade-monotonicity would have terminated at Add.156 via width-insufficiency, and the cascade would have to "skip" the 14h band into Add.157 anyway.

## Same-second dual-author silence-break shape (M-157.D class definition)

The Add.157 silence-break has the following structural properties:

| Property | Value | Comparison |
|---|---|---|
| Total merges in silence-break tick | 2 | Distinct from canonical low-amplitude (synth #344, 1 merge) |
| Authors | adamfweidman + sripasg (2 distinct) | Distinct from synth #182 single-author coupling, synth #92 single-author tuplet |
| Surfaces | test infrastructure (#26162) + ACP client refactor (#26143) | Disjoint, no shared file/subsystem |
| Time-of-merge | Both at exactly 15:35:38Z UTC | Same-second co-merge |
| Predecessor silence | n=19 14h22m23s deep dormancy | M-152.U class trajectory |
| Repo state pre-silence-break | Sole M-152.U class member in W17 | Cascade-monotonicity active until Add.156 |
| Cross-repo correlation at silence-break | None observed (qwen-code/codex/litellm/opencode/goose all silent at this tick) | Single-repo silence-break event |

This profile defines the **M-157.D dual-author deep-dormancy silence-break sub-class**. Distinguishing from prior W17 silence-break shapes:

- **vs. M-146.S / M-156.S canonical low-amplitude single-merge silence-exit (synth #344):** M-157.D has 2 merges (not 1), 2 authors (not 1), and follows hard-deep dormancy (not mid-depth/zero-active). The canonical low-amplitude shape is **mid-depth resumption**; M-157.D is **hard-deep silence-break**.
- **vs. synth #295 batch-flush sub-minute 3-author 3-subsystem disjoint triplet:** M-157.D is at the silence-break boundary; synth #295 instances were not silence-break-correlated. M-157.D is a **silence-break sub-class** of the synth #295 batch-flush shape.
- **vs. synth #84 same-second long-tail co-bump:** synth #84 is mechanical refresh (aged-PR same-second co-bump); M-157.D is fresh-merge resolution. **Different mechanism.**
- **vs. synth #182 single-author merge coupling on Crush:** single-author is the discriminator; M-157.D is dual-author.

The M-157.D shape predicts **maintainer-controlled merge-queue batch-flush at silence-break boundaries** as a deep-dormancy exit mechanism. Hypothesis: deep-dormancy ticks accumulate ready-to-merge PRs in the merge queue, and the silence-break is triggered by a maintainer pulling a batch of ≥2 PRs at once (rather than serially). The same-second timestamp suggests **single-action merge-queue release** rather than parallel manual merges (which would have ≥1s spread typically).

## Predictions / falsifiers

- **P-345.A:** Opencode (sole remaining W17 M-152.U candidate) silence-breaks before reaching n=5 hour-boundary crossings (i.e., before reaching ≥14h band) — finite-budget framing predicts M-152.U trajectories cap at ~4-5 hour-boundary crossings before maintainer-attention regime intervenes. Falsifier = opencode reaches 14h band (≥14h depth) without emission, exceeding the gemini-cli budget of 4 boundary-crossings.
- **P-345.B:** Opencode silence-break, when it occurs, follows the M-157.D shape (≥2 merges, ≥2 authors, same-second or near-same-second) rather than the M-146.S/M-156.S canonical low-amplitude shape (1 merge, 1 author). Falsifier = opencode silence-break occurs via 1-merge or single-author emission (which would suggest M-157.D is gemini-cli-specific or repo-specific rather than a deep-dormancy silence-break universal).
- **P-345.C:** Future W17 M-152.U class entries (any repo crossing 10h dormancy band) reach 4±1 hour-boundary crossings before silence-break, with the silence-break following the M-157.D shape at >50% rate. Falsifier = next M-152.U entry reaches ≥6 hour-boundary crossings (extending the budget envelope) OR silence-breaks at ≤2 crossings (contracting the budget envelope), OR silence-breaks via single-merge shape.
- **P-345.D:** Gemini-cli post-silence-break trajectory at Add.158 follows one of two patterns: (i) maintainer-flush continuation with ≥1 additional merge in Add.158, or (ii) post-flush re-quiescence with 0 merges in Add.158. Falsifier = exactly 1 merge in Add.158 (intermediate single-merge cadence distinct from both patterns, would suggest a third post-flush regime exists).
- **P-345.E:** Cascade-monotonicity within-tick margin compression is a structural feature of all M-152.U trajectories — opencode's hour-boundary-to-window-close margins will exhibit a similar monotonic decay pattern as gemini-cli's Add.152-155 compression (43m → 42m → 23m → 1m36s). Opencode 9h-crossing margin at Add.157 was 37s — already in the **post-compression** zone. Falsifier = opencode 10h-crossing margin (when observed) is ≥10m (no monotonic compression observed).

## Cross-references

- Predecessor ADDENDUMs: Add.152-156 (gemini-cli M-152.U cascade trajectory), Add.157 (cascade structural retirement at 14h band exit, sha `dc5c0ff`).
- Predecessor synth notes: synth #336 (M-152.U class definition — **finite-budget refinement by this synth**), synth #342 (M-152.U cascade-monotonicity property — **structurally retired for gemini-cli at this synth**), synth #343 (cascade-monotonicity coupled to dispatcher tick-cadence ≥58m+ — **further refined to finite-budget by this synth**), synth #295 (sub-minute 3-author 3-subsystem disjoint triplet batch-flush — **silence-break sub-class introduced as M-157.D extension**), synth #182 (single-author merge coupling on Crush — **distinguished from M-157.D dual-author shape**), synth #84 (same-second long-tail co-bump — **distinguished from M-157.D fresh-merge mechanism**), synth #92 (same-second open tuplet single-author — **distinguished from M-157.D dual-author merges**), synth #344 (canonical low-amplitude silence-exit shape — **distinguished from M-157.D hard-deep silence-break shape**).
- This synth **structurally retires** synth #336/#342 M-152.U cascade for gemini-cli (n=4 boundary crossings, 14h band terminal), **introduces** the M-157.D dual-author deep-dormancy silence-break sub-class as the canonical hard-deep silence-break shape, **reinterprets** cascade-monotonicity as finite-budget rather than open-ended monotone, and **establishes** opencode as the sole remaining W17 M-152.U candidate with a tight 37s 9h-crossing margin (already in the post-compression cascade-margin zone).
