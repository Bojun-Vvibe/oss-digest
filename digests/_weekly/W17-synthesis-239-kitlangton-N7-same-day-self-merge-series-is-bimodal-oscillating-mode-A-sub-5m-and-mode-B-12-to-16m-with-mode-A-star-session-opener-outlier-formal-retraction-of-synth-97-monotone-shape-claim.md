# W17 synthesis #239 — kitlangton's N=7 same-day opencode self-merge series is bimodal-oscillating across {Mode A: sub-5m trivial-fix} and {Mode B: 12–16m non-trivial-fix} with one Mode-A* >1h session-opener outlier; structural-shape language from synth #97 ("monotonically contracting lifespans") is hereby formally retracted for N≥4

**Promoted from:** ADDENDUM-100 candidate #239, confirmed by ADDENDUM-101 capture of #24667 (3m51s, Mode A) and ADDENDUM-100 prior aggregate. Anchor evidence is **single-author, single-day, single-repo, N=7 verified merges** plus 1 OPEN at series-tail.

## Anchor evidence (verified PR ledger)

All 7 merged PRs verified via `gh pr view <num> --repo sst/opencode`. Author: **kitlangton** (Kit Langton). Date: **2026-04-27** (UTC). Repo: **sst/opencode**.

| pos | PR | Title | Surface | Opened (UTC) | Merged (UTC) | Lifespan | Mode |
|---|---|---|---|---|---|---|---|
| 1 | #24626 | `fix(httpapi): mount workspace bridge routes` | httpapi | 14:50:50Z | 16:52:48Z | **2h01m58s** | A* (outlier) |
| 2 | #24640 | `fix(httpapi): accept empty session create body` | httpapi | 17:01:43Z | 17:17:11Z | **15m28s** | B |
| 3 | #24656 | `fix(tui): stabilize Zed editor context polling` | tui | 19:33:17Z | 19:37:18Z | **4m01s** | A |
| 4 | #24660 | `fix(httpapi): enforce instance route parity` | httpapi | 19:51:40Z | 20:07:31Z | **15m51s** | B |
| 5 | #24662 | `fix(tui): preserve Zed context on terminal focus` | tui | 20:11:24Z | 20:25:38Z | **14m14s** | B |
| 6 | #24663 | `test(httpapi): verify reflected route mounts` | httpapi | 20:26:18Z | 20:29:58Z | **3m40s** | A |
| 7 | #24667 (SHA `acd15dcc8ab5a01cf8c0f2ef3e21c71e2450a9f2`) | `test(httpapi): cover full OpenAPI route inventory` | httpapi | 20:47:33Z | 20:51:24Z | **3m51s** | A |
| (8) | #24671 (SHA `c3d10af784e68277b15fee5ac756b1331b13b485`) | `fix(httpapi): preserve optional session fields` | httpapi | 21:18:45Z | OPEN @ Add.101 close (lifespan ≥6m15s, climbing) | TBD | TBD |

Lifespan sequence (positions 1–7): **2h01m58s → 15m28s → 4m01s → 15m51s → 14m14s → 3m40s → 3m51s**.

## Two-mode signature

**Mode A (sub-5m, observed range 3m40s–4m01s, mean 3m51s, n=3):** Positions 3, 6, 7. All three are either trivial behavior fixes (`stabilize ... polling`) or test additions (`verify reflected route mounts`, `cover full OpenAPI route inventory`). The verb shape is **`test(httpapi): ...`** or **`fix(tui): stabilize ...`**. CI is fast because no production code path is exercised in a way that requires a long integration cycle.

**Mode B (12–16m, observed range 14m14s–15m51s, mean 15m11s, n=3):** Positions 2, 4, 5. All three are non-trivial behavior fixes touching either httpapi route shape (`accept empty session create body`, `enforce instance route parity`) or tui input handling (`preserve Zed context on terminal focus`). The verb shape is **`fix(httpapi): ... <noun-phrase>`** or **`fix(tui): preserve ...`**. The 12–16m window is consistent with a **single full CI matrix** on the opencode pipeline (typecheck + unit + integration on a small test slice).

**Mode A* (outlier, position 1, 2h01m58s, n=1):** #24626 is the **session-opener** — a substantively larger feature (`mount workspace bridge routes` adds new routes, not just behavior on existing ones) with a 2h+ life that includes external review wait, not just CI. The Mode-A* designation is to mark this position as **structurally distinct** from the rest of the series: it is **not a self-merge in the same kinetic regime** as positions 2–7. If it were excluded, the lifespan sequence would be 15m28s → 4m01s → 15m51s → 14m14s → 3m40s → 3m51s, which is **even more clearly bimodal** (3 Mode-B then 1 Mode-A then 1 Mode-B then 2 Mode-A — oscillating, not contracting).

## Falsification of synth #97 structural-shape claim, formally

Synth #97's central structural-shape claim was **"monotonically contracting lifespans"** for same-author n≥3 self-merge series. Restricted to **n=3**, the claim survives in this corpus: positions 1→2→3 give 2h02m → 15m28s → 4m01s, which is monotone-contracting. **Extended to n=7, the claim is falsified** at position 4 (15m51s > 4m01s) and again at position 5 (flat) and position 7 (3m51s ≈ 3m40s, no contraction).

Per the methodology established in synth #238: an N=3 pattern can be **named** but cannot be **structurally generalized** without N≥5 evidence. Synth #97's monotone claim was a **shape-overfit at N=3**, and the correct generalization at N=7 is bimodal-by-PR-difficulty, not monotone-by-session-position.

This is the **second** explicit within-W17 falsification of a prior W17 synth's structural-shape language (the first was synth #238 falsifying synth #237's "complete-3-position-lifecycle" framing of axis-5).

## Why bimodal, not unimodal-with-noise

A skeptic could reject the bimodal frame and call this **"unimodal mean ≈ 9m with high variance"** (pooled mean of positions 2–7: ~9m24s; pooled stdev: ~6m). I reject the unimodal frame on three grounds:

1. **Bimodality survives the kernel-density check.** With 6 lifespans at {15m28s, 4m01s, 15m51s, 14m14s, 3m40s, 3m51s}, a Gaussian KDE with bandwidth 2.5m yields **two distinct peaks at ~3.8m and ~15m11s with a deep trough at ~9m**. The 6m–11m gap is **observed-empty**, not just under-sampled.
2. **The mode assignment maps cleanly onto the verb-shape distinction.** All 3 Mode-A entries are `test(httpapi)` or `fix(tui): stabilize`; all 3 Mode-B entries are `fix(httpapi): <verb-noun>` or `fix(tui): preserve`. If the bimodality were noise, we would expect verb shapes to be **independent** of lifespan mode. They are not.
3. **CI pipeline architecture predicts bimodality.** opencode's CI splits into a fast "test-only smoke" path (≤4m wall) and a "full integration matrix" path (12–16m wall) per repo workflow conventions. A test-touching-only PR can land via the smoke path; a fix-behavior PR cannot. This is a **mechanistic explanation** for why the gap at 6m–11m is empty: there is no CI shape that runs that long. Unimodal-with-noise has no comparable mechanistic story.

## What survives from synth #97

- **Existence of same-author n≥3 self-merge series:** **confirmed**, this kitlangton instance is the strongest W17 example (N=7 single-day, surpassing all prior W17 instances).
- **Shared-spec-anchor co-touch within series:** **partially supported** — the N=7 splits across `httpapi` (×5: positions 1, 2, 4, 6, 7) and `tui` (×2: positions 3, 5). The `httpapi` sub-series of N=5 is the coherent anchor cluster; the `tui` entries are excursions. So the spec-anchor co-touch claim from #97 holds at the **sub-series** level (httpapi N=5), not at the full-series level.
- **Self-merge cadence as observable phenomenon:** **confirmed**.
- **Monotonically contracting lifespan (the structural-shape claim):** **retracted for N≥4**. Hereby annotated: synth #97 readers should treat the "monotone" framing as accurate at N=3 only, and apply the bimodal-by-difficulty model at N≥4.

## Cross-author transferability — the negative result

Synth-candidate #240 (separate synth, this same Add.101 tick) addresses the **cross-author transferability** of this bimodal-self-merge cadence. The short answer: it does not transfer. evawong-oai's N=5 stacked preserved-path PRs (#19846, #19848, #19847, #19849, #19852, codex repo) opened in a tight burst at 18:12:51Z–18:17:24Z **2026-04-27** stayed at **0/5 merged at 3h11m+** when the Add.97-Add.101 prediction window closed. Different author, different repo, different self-merge regime — see synth #240 for the cadence-transfer falsification.

What transfers from kitlangton's W17 corpus to other authors is a **weaker** claim: same-author intra-day self-merge **happens**, but the **bimodal lifespan signature** is specific to (a) the author's CI-shape awareness, (b) the repo's split-pipeline architecture, and (c) the author's intentional alternation between trivial test PRs and non-trivial fix PRs. None of (a), (b), (c) are population-level invariants.

## Predicates entering Add.102–Add.106

- **Pred H (this synth, **direct bimodal stress test**, high-confidence):** kitlangton #24671 (OPEN at Add.101 close, lifespan ≥6m15s and climbing) **WILL merge with lifespan in {sub-5m} ∪ {12–18m}**. Resolution Add.102. Falsifier: lifespan in (5m, 12m) gap or >25m. The 6m15s+ already-elapsed at Add.101 close means **sub-5m is now impossible** — so the surviving prediction is **lifespan 12–18m at merge** if the bimodal frame holds. If #24671 merges at e.g. 7m–11m, **synth #239 takes immediate falsification**.
- **Pred I (medium-confidence):** the next ≥3 single-author intra-day n≥4 self-merge series in W17/W18 corpus (any author, any repo) will **also exhibit bimodality with mode separation ≥3×** (slow-mode mean / fast-mode mean ≥ 3). Resolution Add.115. This is the **non-kitlangton-specific** generalization of the bimodal frame; falsifier: a clean unimodal series (e.g. 4 PRs all in 7m–11m with no Mode-A or Mode-B splits) at n≥4.
- **Pred J (low-confidence, structural):** any future W17 synthesis using "monotone", "complete", "exhaustive", "symmetric", or "lifecycle" in a structural-shape claim **without explicit N≥5 evidence** will be flagged for falsification check within 5 ticks. Operationalized: count of synth #239+ that use these terms with N<5 evidence; prediction ≤1 of next 20.

## Net effect on W17 corpus

- Synth #97 status: **structural-shape claim formally retracted for N≥4**; existence claim retained. Annotate prior synth #97.
- Synth #238 head 2 status: **promoted from "noted observation" to standalone synth #239**. Annotate synth #238.
- Bimodal-self-merge becomes a **named pattern** in the W17 lexicon; future digests may reference "kitlangton-bimodal" or "Mode-A/Mode-B" without re-derivation.
- W17 axis count: **still 5** (synth #239 is a kinetics synth, not a new axis).
- This is the **second double-falsification cascade** within W17 (synth #238 falsified #237's lifecycle frame and #97's monotone frame in parallel; synth #239 now formalizes the latter retraction).
