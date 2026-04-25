# W17 Synthesis #74 — Open-velocity-leadership rotation across consecutive ticks: ollama → ollama → opencode in three windows, with zero-merge-absorption baseline

**Window**: 2026-04-25T08:16Z → 2026-04-25T09:06Z (Addendums 12 → 13 → 14; three consecutive ~20–25m ticks, ~50 minutes total)

**Anchor exhibits** (5 PRs across 2 repos, by 5 distinct authors, defining the open-velocity baton across three consecutive ticks):

- ollama/ollama#15808 (`famasoon` / Ryota Sakai, *"fix: improve error handling for model loading in Scheduler"*, head SHA `6f9c1e0a9f47`, OPENED **08:16:22Z**, Addendum 12) — Scheduler error-handling
- ollama/ollama#15809 (`stationeros` / Rohit Kumar, *"create: prune imported blobs and startup invalid leftovers"*, head SHA `e8de8d9e290e`, OPENED **08:40:02Z**, refreshed **08:42:56Z**, Addendum 13→14 boundary) — create/blob-prune
- anomalyco/opencode#24271 (`wangzexi` / Zexi, *"Set active server before navigation and use replace navigation to avoid extra history entries"*, head SHA `831bf6b2ac88`, OPENED **08:44:54Z**, refreshed **09:01:59Z**, Addendum 14) — server/navigation fix
- anomalyco/opencode#24272 (`kyuna0312`, *"docs: add Mongolian README documentation"*, head SHA `d4aa1133f1a5`, OPENED **08:54:17Z**, refreshed **09:00:50Z**, Addendum 14) — i18n docs
- anomalyco/opencode#24273 (`JasonZhaoWW` / Jason, *"docs: correct compaction prune default"*, head SHA `ee1c397e7be0`, OPENED **08:57:08Z**, Addendum 14) — docs correction

## Cross-references

- **Builds on synthesis #73** (opencode three-author docs-class convergence): #73 anchors *why* opencode is the open-velocity leader in tick 14; #74 anchors *that the open-velocity leadership rotated to opencode* and looks at the cross-tick rotation pattern itself.
- **Distinct from synthesis #51** (single-day surge cohorts): #51 was a within-repo intensity reading; #74 is a cross-repo *which-repo-is-leading* reading at sub-hourly tick granularity.
- **Distinct from synthesis #63** (hot-author multi-surface fanout): #63 is a single-author cross-repo signal; #74 is a multi-author single-tick-per-repo signal that aggregates by *repo* not by *author*.
- **Distinct from synthesis #70** (cross-repo long-tail PR refresh wave): #70 is a *refresh* phenomenon coupling unrelated repos by timing; #74 is an *open* phenomenon where leadership *rotates* between repos rather than coupling them.

## Pattern

Counting NEW OPENS (not refreshes) per tick across the 9 tracked repos:

```
Tick (Addendum)   Window                Open-velocity leader   Open count breakdown
12                07:45Z → 08:25Z       ollama (1) tied        codex 0, litellm 0, opencode 0, ollama 1 (#15808), cline 0, others 0
13                08:25Z → 08:42Z       ollama (1) tied        codex 1 (#19537), litellm 0, opencode 0, ollama 1 (#15809), cline 0, others 0
14                08:42Z → 09:06Z       opencode (3)           codex 0, litellm 0, opencode 3 (#24271/#24272/#24273), ollama 0, cline 0, others 0
```

Caveat: tick 13 is technically a tie between ollama and codex at 1 open each — but ollama #15809 was a fresh open *plus* a self-iteration push (08:40:02Z + 08:42:56Z within the tick boundary), giving ollama the higher *activity* score even at equal *open* count. So the leadership trace is **ollama (12) → ollama (13) → opencode (14)**.

## Why a leadership rotation is structurally interesting (vs sustained leadership)

In the prior 11 addendums of today's digest, no repo held velocity-leadership for more than ~2 consecutive ticks. The rotation cadence is **sub-hourly** (each tick ~20–25m, leadership changes at most every 2 ticks). This is consistent with three structural properties of the AI-coding-agent OSS ecosystem:

1. **No single repo has continuous global-author attention** — author cohorts are partitioned by repo affiliation, and waves of attention per cohort are bursty rather than sustained.
2. **Per-repo open velocity is highly correlated with the repo's release recency**: opencode shipped v1.14.24 on 2026-04-24T15:53Z (~17h before window 14) and is now seeing the post-release downstream surfacing (anchored by synthesis #73). ollama shipped v0.21.3-rc0 on 2026-04-24T12:15Z (~20h before window 12) and was the velocity leader in 12+13.
3. **codex has been velocity-quiet today** despite shipping rust-v0.125.0 on 2026-04-24T18:00Z and rust-v0.126.0-alpha.1 at 23:14Z (within ~10–15h of the windows in question). codex's release cadence is *not* generating downstream open-velocity in the same proportion as opencode/ollama. Possible reasons: (a) codex's release artifacts are CLI-installed and downstream user-discovered issues take longer to surface; (b) the codex contributor cohort skews toward maintainers (per synthesis #72) who don't open external-style fix PRs.

## The zero-merge-absorption baseline

Across all three ticks (50 minutes total), **the merge count across all 9 tracked repos is zero**. Open count across the same window is **5** (4 if codex #19537 is excluded as ambiguous on tick boundary). The instantaneous open-vs-merge gap during velocity-rotation is **5:0**. If this gap-widening sustains for another ~3 ticks, the digest's tracked repos will have accumulated >10 unmerged opens against zero merges in a sub-2h window — a regime that historically (per the synthesis #1–#10 era) was followed by a reviewer-side "absorption catch-up" tick where 3+ merges land within a single 20m slice. **Watch for this catch-up signal in ticks 15–17.**

## Why the rotation is not a coincidence

If the open-velocity counts were Poisson-distributed independently per repo per tick, the probability of three consecutive ticks with the leader being a *different* repo from the prior tick's leader would not be small (it's actually the modal outcome). The interesting fact is not the *rotation itself* but rather:

1. The **handoff is to a repo with a recent release** in both transitions tracked (ollama velocity tied to v0.21.3-rc0; opencode velocity tied to v1.14.24). Release-recency is the predictor.
2. The **handoff coincides with a structural surface-class shift**: ticks 12–13 were dominated by **Scheduler-class infrastructure surfaces** in ollama; tick 14 is dominated by **docs-class user-facing surfaces** in opencode. The rotation is not just *which repo* — it is *which surface class*.

## Falsification checks

1. If tick 15 (window ~09:06Z → ~09:30Z) shows opencode losing leadership to a repo with **no recent release**, the release-recency-predicts-leadership reading falsifies.
2. If tick 15 shows opencode *retaining* leadership for a 4th consecutive opencode-led tick (unusual against the sub-hourly rotation cadence), the "rotation" framing falsifies and a "sustained leadership during post-release window" framing replaces it.
3. If a merge wave (3+ merges in a single tick) lands in ticks 15–17, the zero-merge-absorption baseline closes and the open-vs-merge gap widening was a temporary artifact, not a regime.

## Predictions

If the rotation pattern is real and release-recency-driven:

- **Tick 15 leadership goes to a repo other than opencode**, most likely litellm (released v1.83.13-nightly on 2026-04-24T05:47Z — currently the *least*-recent release among the velocity-active repos, but `yuneng-berri` cascade dormancy ending would put litellm back in play) or back to ollama (#15808 sitting dormant for ~50m may receive a refresh).
- **A merge-absorption catch-up tick occurs by tick 17** (~within next ~50 minutes), with at least 3 merges landing in a single ~25m window, restoring rough open/merge parity.
- **Future opencode releases will be followed by a 2–3-tick post-release docs/i18n burst** (the synthesis #73 burst becomes a recurring template, observable at every minor version bump).

## Watch items for next ticks

- Tick 15 open count by repo. Is opencode still leading? Is ollama back? Has litellm woken up?
- First merge across all 9 tracked repos. Which repo, which PR, which author class (maintainer self-merge vs maintainer external-merge)?
- Whether `yuneng-berri` returns from >2h25m dormancy in tick 15 — if yes, the cascade was paused not terminated, and synthesis #63/#64 needs revision.
