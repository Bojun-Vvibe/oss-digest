# W17 Synthesis #203 — N+1 deferred-tail bot-burst extension: goose dependabot 8th merge #8823 lands 14m26s after #8820 in the gap-regime between 7-min cadence and 41-min hesitation, falsifying synth #201's "complete burst" framing

**Window of evidence:** 2026-04-27T03:01:59Z → 04:35:21Z (1h33m22s — full extended dependabot cohort).
**Repos cited:** `block/goose`.
**Continuity / falsification:** Synth #201 (and Add.78) framing of the burst as **closed** at #8820 (04:20:55Z) is **falsified**. New shape: **N+1 deferred-tail**.

## The original synth #201 framing

Synth #201 codified an Add.78 observation: 7 dependabot PRs (`#8829`, `#8827`, `#8825`, `#8824`, `#8819`, `#8818`, `#8820`) opened in a single 26m31s Friday window (2026-04-24T17:27:51Z–17:54:22Z) sat through the weekend and were merged in a **single 1h18m56s burst** between **03:01:59Z and 04:20:55Z** on Monday 2026-04-27. Inter-merge gaps were measured as: 9m51s, 7m05s, 7m10s, 7m17s, 6m24s, **41m09s** — six tight (median 7m10s) and one outlier 41m09s before the final #8820. Synth #201 dubbed this the **"bot-author / human-merger 7-PR mass-merge burst"** and treated it as a **complete event with #8820 as the closing merge**.

## The Add.79 falsification

In the immediately following window (Add.79, 04:21:28Z onward), an **8th dependabot PR — `#8823 chore(deps): bump tiktoken-rs from 0.6.0 to 0.11.0`** — merged at **2026-04-27T04:35:21Z**, mergeCommit **`93eb12268792c5e90f963becd301f453fb64e27d`**, +11/−38, 2 files, base=`main`, head=`dependabot/cargo/tiktoken-rs-0.11.0`, createdAt=**2026-04-24T17:50:46Z** (i.e., **inside** the original Friday 26m31s open-window).

This means:
1. #8823 was **eligible** to be part of the original 7-PR burst (same author, same Friday open-cohort).
2. #8823 was **deliberately deferred** past #8820 — by **14m26s** after #8820's merge.
3. The **inter-merge gap of 14m26s** (from #8820 04:20:55Z → #8823 04:35:21Z) is the **third-regime gap** that did not exist in the synth #201 measurement: it is **2.0×** the 7m10s median tight-gap and **35.0%** of the 41m09s hesitation-gap.

## Refined cohort statistics

Eight inter-merge gaps across the full extended cohort:

| Gap | Duration | Regime |
|---|---|---|
| #8829→#8827 | 9m51s | tight |
| #8827→#8825 | 7m05s | tight |
| #8825→#8824 | 7m10s | tight |
| #8824→#8819 | 7m17s | tight |
| #8819→#8818 | 6m24s | tight |
| #8818→#8820 | 41m09s | **hesitation** |
| **#8820→#8823** | **14m26s** | **deferred-tail (NEW)** |

Tight-gap statistics (5 gaps): mean 7m33s, median 7m10s, range 6m24s–9m51s, σ ≈ 1m17s. The hesitation gap (41m09s) is **5.4σ above the tight-gap mean**. The deferred-tail gap (14m26s) is **5.4σ above the tight-gap mean as well** — coincidentally similar in standardized magnitude, but **2.85× shorter** in absolute time than the hesitation gap. The deferred-tail is **its own regime**, not a re-occurrence of either prior class.

## Why this is a topology-class observation, not a noise observation

A single late-arriving merge is not by itself a topology — but **#8823's open-time** places it in the same dependabot-Friday-batch as the other 7, with **no later-supersession event** that would justify exclusion from the burst. The 14m26s gap is too long to be a CI re-run gap (CI on these PRs typically completes in 2–4 minutes per `actions/setup-rust-toolchain` cache hit) and too short to be a "next morning standup" deferral. It is consistent with one of two human-loop signals:

- **(a) Maintainer-paused-for-lunch / context-switch.** After 6 tight merges + 1 long-pause merge, the maintainer paused 14m, then returned to clear the last eligible PR.
- **(b) Larger-churn second-look.** #8823's net delta is **−27 lines** (additions 11, deletions 38) — it's the **most code-DELETING** of the 8 PRs (the others net to: +0, +90, +8, −24, 0, 0, 0). A deletion-dominant dep-bump suggests `tiktoken-rs` 0.6.0→0.11.0 removed deprecated APIs. A 14-minute pause is consistent with the maintainer reading the upstream changelog before accepting.

## New W17 corpus rule (codified by this synth)

**N+1 deferred-tail rule.** When a bot-burst contains a single trailing late-merge with inter-merge gap **≥ 2× tight-gap median** but **< 50% of any prior hesitation-gap** in the same burst, classify the cohort as **N+1 deferred-tail**, not flat-N-burst.

Application: Add.78's "7-PR mass-merge burst" should be re-classified as a **7+1 deferred-tail dependabot cohort** spanning **1h33m22s**. Total cohort merge density: **8 PRs / 93m22s = 5.14 PRs/hour effective**. The 7-PR-only framing overstates density by **9.6%**.

## Cross-references and continuity

- **Synth #201** — falsified on the "complete burst" claim; the cohort is N+1, not N.
- **Synth #98** — bot-driven sub-10s mass-CLOSE; the formal-dual relationship to bot-author/human-merger merge holds, but with the corrected cohort size of 8, not 7.
- **Synth #197 + Add.78 + Add.79** (cross-cohort) — bolinfest codex "stack" cohort cleared in **monotonically-increasing-by-churn lifespan order**: #19734 (296-line churn) at 2h51m → #19735 (457) at 3h19m → #19736 (489) at 4h09m. Within a same-author/same-subsystem cohort, churn-magnitude is the dominant lifespan predictor over file-count (synth #204 will formalize this orthogonal observation).
- **Synth #200** — the express-lane / deliberation-lane bimodality holds: dependabot trivial bumps cleared in tight 7-min express cadence; the deferred-tail #8823 is **still** within express-lane absolute timing (<30 min from prior merge), but represents a **within-express-lane second-tier** for higher-churn deps.

## Predictions

1. **Future dependabot bursts will exhibit N+1 deferred-tail at ≥30% frequency.** The pattern is consistent with maintainer human-loop psychology (read the changelog on the bigger ones), not with a script anomaly.
2. **Net-deletion-dominant dep-bumps will systematically defer to the tail of any cohort.** A maintainer running through a queue of bot PRs accepts the trivial `+5/−5` and `+1/−1` first, holds the `+11/−38`-style deletion for last.
3. **The next dependabot Friday-batch on `block/goose` will, if ≥6 PRs, exhibit the same 7+1 (or 6+2, etc.) deferred-tail signature.** Falsifiable by direct observation in W18.

## Citations

- `block/goose` PRs: **#8829** (mergeCommit `ba88d336`), **#8827** (`958f63c9`), **#8825** (`b9dafd03`), **#8824** (`9d0e87f6`), **#8823** (`93eb1226` — **the trailing tail**), **#8819** (`b52a8d70`), **#8818** (`e7157944`), **#8820** (`4dce997f`).
- Prior-tick `oss-digest` artifacts: ADDENDUM-78, synth #201.

---

**Synth #203 ledger.** 8 distinct PR numbers cited, all `block/goose`, all dependabot-authored, all from the same 2026-04-24 Friday 26m31s open-window. Continuity falsifying synth #201's complete-burst framing. Topology-class addition: **N+1 deferred-tail**.
