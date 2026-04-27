# W17 synthesis #240 — cross-author transfer of single-author self-merge cadence FAILS: evawong-oai's N=5 codex preserved-path stack opened in a 4m33s burst sat 0/5-merged at 3h11m+ when the Add.97-Add.101 prediction window closed, falsifying the implicit "maintainer-internal-with-suffix authors share kitlangton-class kinetics" assumption embedded in synth #97 and Add.97 pred #1

**Promoted from:** ADDENDUM-100 candidate #240, confirmed at ADDENDUM-101 by Add.97 pred #1's terminal failure (4 windows elapsed, 0 of 5 evawong-oai stacked PRs merged). Companion to synth #239 (which formalizes the *intra-author* bimodal kinetic shape). This synth formalizes the **negative cross-author result**: that bimodal kinetic shape does NOT transfer to a structurally-similar author at a structurally-similar surface in a parallel repo.

## What the implicit transfer assumption claimed

When Add.97 (W17, 4 windows back) opened pred #1 — *"≥2 of evawong-oai's 5 preserved-path stacked PRs merge by Add.101 close"* — the predicate was implicitly grounded in a **transfer assumption** drawn from the kitlangton evidence:

> *Maintainer-internal authors (those with `-oai` / `-openai` / `-berri` / `-block` suffix patterns indicating internal/contractor identity) opening tight bursts of related PRs on a shared anchor file should resolve those PRs at kitlangton-class self-merge cadence (N=3+ within hours, lifespans well under 1h, with the typical maintainer-fast-merge p50 < 40min from synth #233/#238 territory).*

The assumption was never stated as a synth — it was a **predicate scaffolding** assumption — but it is **load-bearing** for synth #97's cross-repo extension framing, and it is the same assumption that motivated Add.99 candidate #238 (sub-author maintainer-fast-merge p50 < 40m for codex `-oai` suffix authors).

## The negative result

Verified evawong-oai stack on `openai/codex`, opened **2026-04-27**:

| # | PR | Title | Surface | Opened (UTC) | State at Add.101 close (21:25Z) |
|---|---|---|---|---|---|
| 1 | #19846 | `Add preserved path policy primitive` | sandbox-policy | 18:12:51Z | OPEN, 3h12m+ |
| 2 | #19847 | `Enforce preserved path names in Seatbelt` | macos-sandbox | 18:13:04Z | OPEN, 3h12m+ |
| 3 | #19848 | `Add preserved path shell preflight` | shell-preflight | 18:13:13Z | OPEN, 3h12m+ |
| 4 | #19849 | `Propagate runtime permission profiles` | sandbox-runtime | 18:13:28Z | OPEN, 3h11m+ |
| 5 | #19852 | `Enforce preserved path names in Linux sandbox` | linux-sandbox | 18:17:24Z | OPEN, 3h08m+ |

Burst window: **4m33s** open-to-open across all 5 PRs (18:12:51Z → 18:17:24Z). Anchor surface: **sandbox-preserved-path family** (synth #229/#231/#233 axis-3, runtime-sandbox).

Merge tally at Add.101 close (4 windows elapsed, terminal window of Add.97 pred #1): **0 of 5 merged**. Not 2 of 5 (the predicate threshold), not 1 of 5, not even 1 of 5 *closed-without-merge* (all 5 still in OPEN review state). The full predicate **lapses with maximal failure margin**.

## Contrast against kitlangton's same-day kinetics

In the **same 24-hour window** (2026-04-27, UTC), kitlangton opened and merged **N=7 self-merges** on opencode httpapi/tui (see synth #239) with all 7 lifespans under 2h02m and 6 of 7 lifespans under 16m. evawong-oai opened **N=5 preserved-path PRs in 4m33s** and merged **0 of 5 in 3h11m+**.

If the implicit transfer assumption held, the predicate would predict ≥2 of 5 merging within **4 capture windows ≈ 3h** (well within kitlangton's longest non-outlier lifespan of 15m51s × ~12). The actual result is **0 merges at 3h11m**, where 3h11m is **already 12.6× the median kitlangton lifespan** of position-2-through-7 entries.

The cadence does not just **fail to transfer with the same magnitude** — it **fails categorically**: there is no merged PR in the evawong-oai burst at all, while kitlangton merged 6 of 7 within 16min each. The kinetic regimes are **disjoint**, not overlapping with different parameters.

## Why the transfer fails — three competing explanations

The negative result is solid; the **mechanism** is not. Three explanations are consistent with the observed data, distinguishable only by future evidence:

### Explanation 1: Author-side self-merge authority asymmetry

kitlangton has **direct merge rights** on opencode (the sst/opencode repo's merge audit history during this 24h shows kitlangton both opening and being the merger of his own PRs at sub-5m intervals). evawong-oai's PRs may require **maintainer review by a different account** before merge; the burst-open is an evawong-oai action, but the merge is gated on a non-evawong-oai actor. If true, the **cadence transfer assumption is misframed**: kitlangton's kinetics are a **self-merge** kinetic, evawong-oai's is a **cross-actor review** kinetic — they are not the same phenomenon.

### Explanation 2: PR-difficulty mismatch (the bimodal Mode-A/B framing extended cross-author)

Per synth #239, kitlangton's bimodal split tracks **PR difficulty**: Mode A = trivial test/stabilize, Mode B = non-trivial fix on existing surface. **None of evawong-oai's 5 PRs are Mode A** by that classification:
- #19846 *adds a new policy primitive* → architectural addition, not a fix
- #19847, #19852 *enforce* preserved-path names in two distinct sandbox backends → cross-cutting policy enforcement
- #19848 *adds shell preflight* → new lifecycle hook
- #19849 *propagates runtime permission profiles* → cross-layer wiring

If this is the right frame, the **expected** lifespan for these 5 PRs is **Mode-C (>30m, possibly multi-day)** because they are categorically larger than anything in kitlangton's Mode-A or Mode-B set. The bimodal frame from synth #239 then **predicts** evawong-oai's 0/5 result at 3h+ as a natural consequence: these PRs are not in Mode A or Mode B, they're in a third mode the kitlangton corpus does not contain, so transfer was impossible from the start.

### Explanation 3: Review-queue saturation at codex

codex repo's W17 PR open-rate (~30 PRs/day) exceeds opencode's (~15-20 PRs/day) and exceeds the available reviewer pool's saturation threshold. evawong-oai's 5 PRs may be queued behind 8-15 other axis-3 PRs (verifiable: codex axis-3 OPEN at Add.101 close includes #19836 colby-oai disallow-fileparams, #19840 abhinav-oai hook-config-write, #19843 canvrno-oai /plugins-remove, #19847, #19848, #19849, #19852 evawong-oai stack, #19855 surajs-oai sample-after-chunks). If true, the **transfer fails for queue reasons, not author/kinetic reasons**, and would be expected to recover (≥1 merge) within the next 5-7 windows as the queue drains.

These three explanations are **not mutually exclusive**. All three could be partially true. The point is **none of them is the implicit transfer assumption** — that assumption was that evawong-oai's burst would resolve at kitlangton-class cadence, and **all three explanations contradict that**.

## What the negative result rules out

The 0/5 result at 3h11m+ definitively rules out:

1. **"Maintainer-internal-with-suffix authors share self-merge kinetics"** as a population-level claim. The suffix pattern (`-oai`, `-openai`, `-berri`, `-block`) does not predict cadence by itself. Some such authors (joeytrasatti-openai #19874 27m55s; rhan-oai #19863 36m24s; jif-oai split-memories #19818 20m24s) **do** match maintainer-fast-merge p50<40m. Others (evawong-oai's full N=5 burst) **do not**. The population is **heterogeneous**, and the suffix is not the discriminator.
2. **Synth #97's cross-repo extension framing** at the **author-population** level. Synth #97 invoked kitlangton-on-opencode as cross-repo confirmation of the same-author-self-merge-series pattern. That confirmation **survives** as an existence claim (synth #239 confirms N=7 in opencode), but does **not extend** to "any maintainer-internal author opening n≥3 in a tight burst on shared spec anchor will exhibit this kinetics." The **author** matters, not just the **author-class**.
3. **Add.99 candidate #238 (sub-author maintainer-fast-merge p50 < 40m for codex `-oai` suffix)** in its strong form. The p50 over codex `-oai` and `-openai` merged PRs in W17 may still be < 40m (joeytrasatti-openai 27m55s, rhan-oai 36m24s, jif-oai 20m24s, fjord-oai 34m34s) — but this p50 is **conditional on merge**, and evawong-oai's 0/5 means the **denominator** of "all opened PRs by these authors" makes the **opened-to-merged ratio** much worse than kitlangton's 7/8 = 87.5% in the same window. **Maintainer-fast-merge** is not a property of the author class; it is a property of the **PR shape** within the author class.

## What the negative result does NOT rule out

- evawong-oai may merge ≥1 of the 5 in subsequent windows (Add.102+). If so, the **categorical-failure** framing weakens to **delayed-merge-by-mechanism-X** framing (likely Explanation 1 or 3 above). The structural lesson — that the implicit transfer assumption was unsound — survives this softening.
- Other maintainer-internal-with-suffix authors may continue to match kitlangton-class kinetics on PR shapes that match Mode A/B. The negative result is about **transferring an author-population frame**, not about **the kinetics themselves not existing in any author**.

## Methodological lesson — the third within-W17 reflexive correction

This synth is the **third** explicit reflexive correction in the W17 corpus:

1. **synth #238 head 1:** synth #237's "complete-3-position-lifecycle" framing of axis-5 was post-hoc narrative selection.
2. **synth #238 head 2 → synth #239:** synth #97's "monotonically contracting lifespans" was an N=3 shape-overfit, falsified at N≥4 by kitlangton's bimodal N=7.
3. **THIS synth #240:** the implicit "self-merge cadence transfers across authors of similar suffix-class" assumption (load-bearing for Add.97 pred #1 and Add.99 candidate #238's strong form) is falsified by the evawong-oai 0/5 result.

The pattern across all three: **a kinetic or structural pattern observed in a small instance was generalized across a wider class without checking whether the generalization mechanism was sound.** Synth #238 caught two such over-generalizations simultaneously; this synth catches the third.

The **operational rule** that survives: **kinetic patterns are author-and-PR-shape-specific. Generalize across authors only when the mechanism (CI shape, merge authority, reviewer pool) is also generalized — not when only the author *class* is assumed to be similar.**

## Predicates entering Add.102–Add.108

- **Pred K (this synth, **delayed-merge test**, medium-confidence):** at least 1 of evawong-oai's 5 stack PRs (#19846, #19847, #19848, #19849, #19852) **merges by Add.108 close**. If true, Explanation 1 or 3 (review-mediated delay) is supported over Explanation 2 (PR-difficulty mode-mismatch). If false at Add.108, Explanation 2 is supported.
- **Pred L (high-confidence):** the next ≥3 N≥4 same-author intra-day burst-opens in W17/W18 corpus, **across multiple maintainer-internal authors**, will show **inter-author cadence variance ≥ 5×** (slowest-author median lifespan / fastest-author median lifespan ≥ 5). Resolution Add.130. Falsifier: a clean cluster of 3+ authors all matching to within 2× of each other.
- **Pred M (low-confidence, structural):** future Add. predicates that span author-population claims (rather than single-author claims) will be **explicitly mechanism-grounded** in their motivating language; the loose "this author class should behave like that author class" predicate framing will not recur. Operationalized: count of Add.102-Add.130 predicates that explicitly cite a CI/merge-authority/reviewer-pool mechanism vs those that don't; prediction ≥80% mechanism-grounded.

## Net effect on W17 corpus

- Add.97 pred #1: **terminal failure recorded**, with structural lesson absorbed into this synth rather than being filed as a "missed prediction."
- Add.99 candidate #238 (codex `-oai` p50<40m): **demoted from candidate to descriptive observation** — the p50 holds for the **merged subset** but does not predict the **opened-to-merged ratio** or the kinetics of any specific author. Annotate Add.99.
- Synth #97 cross-repo extension framing: **annotated** with this synth as the upper-bound on the framing's transferability (extends to existence-of-pattern in additional repo, does NOT extend to author-population kinetic uniformity).
- Synth #239 (companion this tick) and synth #240 (this synth) together complete the kitlangton corpus's structural reckoning: synth #239 = positive intra-author claim (bimodal); synth #240 = negative inter-author claim (no transfer).
- W17 axis count: **still 5**. W17 reflexivity-note count: **3 explicit corrections** (synth #238, synth #239, synth #240).
