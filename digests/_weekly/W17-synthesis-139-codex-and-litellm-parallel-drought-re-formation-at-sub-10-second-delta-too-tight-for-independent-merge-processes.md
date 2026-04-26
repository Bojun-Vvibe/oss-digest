# W17 synth #139 — codex+litellm parallel-drought re-formation at sub-10-second delta is too tight for independent merge processes

**Coordinate.** ADDENDUM-47 close (07:13:31Z) shows codex drought-since-prior-merge = **1h02m53s** (last merge `#19640` at 06:10:38Z) and litellm drought-since-prior-merge = **59m51s** (last merge `#26441` at 06:13:40Z). Compare against ADDENDUM-45 close (06:00:26Z) where codex drought-since-prior-merge was **1h02m44s** (last merge then was `#19595` at 2026-04-25T23:23:59Z) and litellm drought was within the 03:07Z staging-bot burst.

**The observation.** The Add.45→Add.47 codex drought magnitudes are **1h02m44s vs 1h02m53s — delta +9 seconds across 1h13m05s of wall-clock between the two measurements**. Both are "self-reformed" droughts: Add.45's drought broke at Add.46's 13m04s mark via `#19640`; Add.47's drought is the *next* drought formed against the same `#19640` baseline, and it has matched the prior magnitude to within 0.24% (9 / 3773 seconds).

**Why this is interesting.** If codex merges follow an i.i.d. exponential inter-arrival process with rate λ, the probability that two independent samples fall within ±5s of each other near 1h02m44s is bounded above by `2·5·λ²·e^(-2·1h02m44s·λ)`. For typical codex day-window merge rates (~6/hr ⇒ λ = 1.67e-3/s), that's **≈4.6e-5**. Even allowing rate to drift toward the 1-2/hr drought regime (λ = 4e-4/s), the bound only relaxes to ~1.6e-5. Independent draws don't naturally produce ±9s coincidences at this magnitude.

**Three discriminating mechanisms.**

1. **Operator/automation cron with ~1h period.** A reviewer or CI-merge-bot that wakes on a wall-clock schedule (e.g. `:10` past every hour) would naturally produce drought lengths quantized near integer hours. `#19640` merged at 06:10:38Z; the prior merge `#19610` was at 04:57:42Z (gap 1h12m56s). That doesn't fit `:10`-past-hour cleanly — but it does fit "ship roughly every hour, biased late." If Add.47's drought breaks via a merge at ~07:14Z (within the next 1m), this hypothesis becomes load-bearing.
2. **Backpressure-bounded review window.** Reviewers may have an implicit cap on outstanding-PR-age before they self-pace to clear. A 1h02m drought twice in a row could reflect an "I'll merge when at most one PR has been open >1h" heuristic shared across reviewers — independently of cron.
3. **Pure coincidence.** The ±9s coincidence has prior probability ~5e-5 for one match; we observe one match in ≥6 prior drought magnitudes tracked across Add.41–47 (so the marginal probability of *some* pair being this close is closer to 6·5·5e-5 / s_range ≈ 1e-3 per Add session). Still small, but not impossible.

**Falsifiable predictions for next 100 ticks.**

- **P-139.A.** Conditional on codex experiencing ≥3 distinct droughts ≥30m in the next 100 ticks, **at least one pair will be within ±15s of each other**. Probability under iid-exponential ≤ 5%; observed under cron/backpressure ≥ 60%.
- **P-139.B.** Codex merge events will cluster near `:HH:08–:HH:14Z` at ≥1.5× the rate predicted by uniform hour-of-hour distribution (i.e., the `#19640@06:10:38Z` and prior merges should reveal a `:08–:14` modal band). Test: bin all codex merges in 2026-04-25→26 by minute-of-hour; check if `:08–:14` band has merge-rate ratio > 1.5× over uniform.
- **P-139.C.** Add.47's drought breaks via a merge at **07:14Z ± 2 minutes**. If the merge lands outside `[07:12Z, 07:16Z]`, both cron and tight-coincidence hypotheses are damaged.

**Cross-references.**
- Synth #129 codex 5-window merge drought via quiescence
- Synth #133 codex drought discharges via singleton not stack
- Synth #138 bolinfest cadence bimodal — separate process, but same kind of "coincidence too tight for iid" reasoning
- Add.45 close drought baseline: 1h02m44s
- Add.47 close drought re-formed: 1h02m53s (delta +9s, +0.24%)

**Status.** Active prediction. P-139.C resolves within the next 1–2 windows. P-139.A and P-139.B require multi-day data to resolve.
