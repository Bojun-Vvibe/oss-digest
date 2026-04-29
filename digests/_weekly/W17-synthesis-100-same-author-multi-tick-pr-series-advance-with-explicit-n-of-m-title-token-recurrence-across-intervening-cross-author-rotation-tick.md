# W17 Synthesis #100 — Same-author multi-tick PR-series-advance with explicit `[N/M]` title-token recurrence across an intervening cross-author rotation tick (codex etraut-openai TUI [1/7]→[2/7] over Add.158-160)

**Anchor window:** 2026-04-29T15:50:37Z (Add.158 open) → 17:51:05Z (Add.160 close). 3 consecutive ticks Add.158, Add.159, Add.160.
**Anchor repo:** openai/codex.
**Anchor actor:** `etraut-openai`.
**Parent synths:** #294 (sustained-emission shape across silence-break and trailing tick — codex post-silence-break cadence preservation), #99 (same-author shared-spec-anchor self-merge series extension past original triple), #91 (single-author triplet self-merge metronome on disjoint surfaces with sub-15-minute inter-merge cadence).

## Why this is distinct from #294, #99, #91

- **#294** captures **author-identity preservation OR rotation** at the silence-break-to-trailing-tick boundary, but treats each tick as a discrete emission event. It does NOT capture the case where the **same author rotates OUT and BACK IN across an intervening cross-author tick** — that is, a 3-tick author trajectory of the form `A → {B, C} → A` where A reappears at lag-2 with a structurally explicit continuation marker. #294's sustained-emission shape allows author-continuity OR rotation at a single boundary; it has no machinery for **rotation-out-and-back across an interleaved cross-author tick**.
- **#99** captures **same-author shared-spec-anchor self-merge series extension** within a single window or across consecutive windows, where the recurrence signal is **shared anchor file** (e.g., `specs/effect/http-api.md`). Synth #100's recurrence signal is **explicit numerical token in the PR title** (`[N/7]` ↔ `[N+1/7]`) — a stronger and more machine-readable signal than file-co-touch, applicable even when the diffs touch disjoint files. The series-membership predicate of #99 requires anchor-file overlap; #100's series-membership predicate requires only title-token overlap.
- **#91** captures **single-author triplet self-merge metronome** within a sub-15-minute inter-merge cadence — the inter-merge gap is sub-15min by definition. Synth #100's inter-emission gap is **sub-tick to multi-tick** (Add.158 #20172 `1c420a90` 16:10:22Z → Add.160 #20173 `44562981` 17:28:05Z = **1h17m43s elapsed** with one intervening 54m40s rotation-out tick). #91's metronome is a tight-cadence object; #100 is a **dilated-cadence series-advance** with explicit serial-numbering as the binding signal across the dilation.

## The three-tick observation

| Tick | Window | Codex emissions | etraut-openai? | TUI series PRs | Cross-author bridge? |
|---|---|---|---|---|---|
| Add.158 | 15:50:37Z → 16:32:43Z (42m06s) | 2 (etraut-openai #20082 + #20172 `1c420a90`) | YES (×2) | `[1/7]` (#20172) | n/a (silence-break tick) |
| Add.159 | 16:32:43Z → 17:27:23Z (54m40s) | 2 (iceweasel-oai #19211 `cecca5ae` + cassirer-openai #20123 `df966996`) | NO | none | YES (Windows process mgmt + rollout-tracer, both disjoint from TUI) |
| Add.160 | 17:27:23Z → 17:51:05Z (23m42s) | 1 (etraut-openai #20173 `44562981`) | YES (×1) | `[2/7]` (#20173) | n/a (rotation-back tick) |

The structural object is a **3-tick author trajectory** `etraut-openai → {iceweasel-oai, cassirer-openai} → etraut-openai` with an **explicit `[N/7]` series-advance signal** binding the lag-2 recurrence of etraut-openai (Add.158 `[1/7]` → Add.160 `[2/7]`). The intervening Add.159 cross-author tick is a **rotation-out interleave**: two distinct authors filed disjoint-surface PRs (Windows process management at #19211 `cecca5ae` and rollout-tracer encrypted-id matching at #20123 `df966996`) while etraut-openai was off-cycle. The series-advance is **lag-2 stitched across the rotation-out tick** with the title-token `[N/7]` as the binding signal.

## Why title-token recurrence is a stronger signal than file-co-touch

PR titles with explicit `[N/M]` numbering (e.g., `[1/7]`, `[2/7]`) are a **deliberate authorship convention**: the author is signaling that this PR is part of an N-of-M series intended to be reviewed and merged in order. The convention is:
1. **Self-declaring** — the author chose the format, communicating intent.
2. **Order-preserving** — `[1/7]` is intended to land before `[2/7]`; this is testable by merge-time ordering.
3. **Machine-parseable** — the regex `\[(\d+)/(\d+)\]` extracts both the position and the series cardinality without needing to inspect diff contents.
4. **Cardinality-bounded** — the second number (e.g., `7`) declares the planned series size, allowing predictive bounding of how many more members to expect.

By contrast, file-co-touch (synth #99's signal) requires:
1. Diff-level inspection of every PR.
2. Heuristic threshold for "co-touch" (how many shared files? what fraction?).
3. No author-declared series-membership (the analyst infers it).
4. No predictive cardinality (the analyst can only count members already observed).

For codex etraut-openai's TUI series, the title-token signal predicts **5 more members are planned** (`[3/7]`, `[4/7]`, `[5/7]`, `[6/7]`, `[7/7]`). The file-co-touch signal would require waiting to observe each member.

## The series-advance predicate

A 3-tick author trajectory qualifies as a **series-advance event** under #100 when:
1. Author A emits ≥1 PR at tick T whose title contains the token `[N/M]` for integer N≥1, M≥2.
2. Tick T+1 contains zero emissions by author A; emissions at T+1 (if any) are by authors disjoint from {A}.
3. Tick T+2 contains ≥1 emission by author A whose title contains `[N+1/M]` (same M, position incremented by 1).
4. The merge-time of the `[N+1/M]` PR strictly follows the merge-time of the `[N/M]` PR (order-preserving).

The codex etraut-openai TUI sequence Add.158 `[1/7]` `1c420a90` 16:10:22Z → Add.160 `[2/7]` `44562981` 17:28:05Z satisfies all four predicates exactly.

## Falsifiable predictions

1. **(P-100.A) Series-continuation at lag-1 from rotation-back tick.** Codex Add.161 (whenever it captures) emits etraut-openai with PR title containing `[3/7]` OR `[4/7]` advancing the same TUI series. Falsifier: Add.161 codex emissions contain zero `[N/7]` titles by etraut-openai for the next 3 consecutive ticks, indicating the series was abandoned at `[2/7]`.

2. **(P-100.B) Series-completion bound.** All 7 members of the etraut-openai TUI `[N/7]` series merge within W17 (i.e., before 2026-05-04T00:00:00Z), giving a series-velocity of ≥1 member per 1.4 days from the `[1/7]` merge at 2026-04-29T16:10:22Z. Falsifier: any of `[3/7]` through `[7/7]` remains unmerged at W17 close.

3. **(P-100.C) `[N/M]` series-advance across rotation-out interleaves is the dominant cross-tick author-recurrence shape.** For codex W17, ≥50% of cross-tick same-author PR-recurrence events at lag-2 across an intervening different-author tick involve PR titles with explicit `[N/M]` numbering. Falsifier: across all codex lag-2 same-author recurrences in W17, fewer than 50% have `[N/M]` titles on either the bridging or the recurring PR.

4. **(P-100.D) Rotation-out interleave authors are surface-disjoint from the series anchor.** When author A rotates out at tick T+1 and the bridging authors {B, C, ...} emit on the same tick, the bridging-tick emissions touch surfaces disjoint from the series anchor surface (here, TUI/core protocol). Falsifier: the next 3 instances of `A → {B, ...} → A` lag-2 author recurrence at codex have ≥1 bridging-tick PR touching the series anchor surface.

5. **(P-100.E) Cross-repo applicability.** The `[N/M]` series-advance shape is observed in at least 2 of the 6 tracked repos within W18, with at least one instance per repo crossing a rotation-out interleave (lag-2 recurrence). Falsifier: only codex exhibits the lag-2 `[N/M]` recurrence shape in W18, indicating the convention is codex-specific (likely tied to OpenAI internal contributor culture).

## Distinctness from prior synths (formal)

- **vs #294**: #294's sustained-emission shape is a **2-tick boundary object** (silence-break tick + trailing tick); #100 is a **3-tick lag-2 recurrence object** with an intervening cross-author rotation tick that #294 cannot represent. #294 says "the trailing tick may rotate authors"; #100 adds "the trailing+1 tick may un-rotate the author back, with explicit serial-numbering as the binding signal."
- **vs #99**: #99 binds series via shared anchor file; #100 binds series via PR-title token `[N/M]`. The two signals can co-occur but are independent: a series can have shared anchor file without `[N/M]` titles (e.g., kitlangton's HTTP API series in #99) or `[N/M]` titles without shared anchor files (the codex TUI series may touch disjoint files per member).
- **vs #91**: #91 is a **tight-cadence triplet metronome** (sub-15-minute inter-merge); #100 is a **dilated-cadence series with rotation-out interleaves**. The two are at opposite ends of the cadence-density spectrum for single-author multi-PR sequences.
- **vs #95** (intra-author three-regime cadence dilation within a sub-2h author session): #95 is **single-author within one continuous session**; #100 spans **multiple ticks with the author absent for one or more intervening ticks**. #95's regime-dilation is intra-session; #100's series-advance is inter-session with explicit recurrence signal.
- **vs #97** (same-author N=3 self-merge series with shared spec-file co-touch and monotonically contracting lifespans): #97 is a **closed-triple object** with shared-spec binding; #100 is an **open N-member series with title-token binding**. #97's series cardinality is observed (N=3); #100's series cardinality is **author-declared** (M=7 here).

## Risk and observability lens

- **Reviewer attention coupling**: a `[2/7]` PR signals to the reviewer that 6 more PRs are planned. Reviewer triage should treat the `[1/7]` review as setting precedent for the entire series, including review depth, performance benchmark setup, and rollback plan. Detector should flag any `[N/M]` series where review depth on `[1/M]` was substantially shallower than the size of the series warrants (e.g., `[1/7]` reviewed in <5 minutes for a 7-PR refactor).
- **Series rebase fragility under rotation-out interleaves**: when bridging authors land disjoint-surface PRs while the series author is off-cycle, the series author's next member may rebase against the bridging-tick merges. This is benign if surfaces are disjoint (as observed in Add.158-160 for codex: TUI ↔ Windows process mgmt + rollout-tracer are disjoint). It becomes risky if a bridging author's PR touches the series anchor surface — then the series author's rebase rewrites the bridge author's work or vice versa. Detector should flag bridging-tick PRs that touch the same surface as the rotated-out author's series.
- **Cardinality-bounded forecasting**: the `[N/M]` token gives a hard upper bound on remaining series members, enabling **forecast-able dormancy**: after `[M/M]` lands, expect a multi-tick dormancy in the series-anchor surface from this author. Detector should generate an "expected next-emission time" forecast for each in-progress `[N/M]` series and flag deviations (early completion = abandoned scope; late completion = rework or external blocker).
- **Author identity preservation across rotation-out**: the lag-2 recurrence shape requires author-identity to persist across the rotation-out tick. If the author's account is paused, deleted, or renamed during the interleave (as is operationally possible at large orgs), the series breaks even if intent is preserved. Detector should monitor author-account lifecycle events alongside `[N/M]` series progress.
