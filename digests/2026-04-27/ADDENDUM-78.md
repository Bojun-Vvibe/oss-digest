# 2026-04-27 ADDENDUM-78

**Window:** 2026-04-27T03:29:27Z → 2026-04-27T04:21:28Z (51m01s — opens on Add.77 close; closes on the gh-API capture timestamp).

## block/goose — dependabot 7-PR mass-MERGE-burst over 1h18m56s after 2.4-day weekend deferral (NOT same-second; human-paced acceptance cadence)

Seven `app/dependabot` PRs all opened in a single 27-minute window on **2026-04-24** (17:27:51Z–17:54:22Z) sat untouched through the weekend, then merged in tight succession on **2026-04-27** between **03:01:59Z and 04:20:55Z** — a **1h18m56s** merge-burst spanning **7 PRs** by a single bot author.

| PR | Title | createdAt | mergedAt | Lifespan | mergeCommit | Diff |
|---|---|---|---|---|---|---|
| #8829 | `bump winreg from 0.55.0 to 0.56.0` | 2026-04-24T17:54:22Z | **03:01:59Z** | 2d9h7m37s | `ba88d336f1d3a650d6c7dc0c97f72700f8a7a09f` | +5/−5, 2 files |
| #8827 | `bump rcgen from 0.13.2 to 0.14.7` | 2026-04-24T17:53:17Z | **03:11:50Z** | 2d9h18m33s | `958f63c94b500e7b4b01899c6f6608fbab84311a` | +94/−4, 2 files |
| #8825 | `bump lopdf from 0.36.0 to 0.40.0` | 2026-04-24T17:52:12Z | **03:18:55Z** | 2d9h26m43s | `b9dafd037c010aac48070092d93a8b2b9382a9e3` | +13/−5, 2 files |
| #8824 | `bump anstream from 0.6.21 to 1.0.0` | 2026-04-24T17:51:39Z | **03:26:05Z** | 2d9h34m26s | `9d0e87f61d283e9ca45d75747e7ea851f11415b7` | +15/−39, 2 files |
| #8819 | `bump actions-rust-lang/setup-rust-toolchain 1.15.4→1.16.0` | 2026-04-24T17:27:56Z | **03:33:22Z** | 2d10h5m26s | `b52a8d704d832eb15ab17fa6eedfbca8e262f0b8` | +1/−1, 1 file |
| #8818 | `bump step-security/harden-runner 2.14.1→2.19.0` | 2026-04-24T17:27:51Z | **03:39:46Z** | 2d10h11m55s | `e71579443c1a606f5620d3b278e56666ed5d7a35` | +1/−1, 1 file |
| #8820 | `bump postcss 8.5.6→8.5.10 in /documentation` | 2026-04-24T17:46:20Z | **04:20:55Z** | 2d10h34m35s | `4dce997f4e5b90f2f78f2bfc10adce26ebe24aec` | +5/−5, 2 files |

**Inter-merge gaps:** 9m51s, 7m05s, 7m10s, 7m17s, 6m24s, **41m09s** — six tight gaps (median 7m10s, range 6m24s–9m51s) and one outlier 41m09s gap before the final #8820. The six tight gaps are remarkably uniform: standard deviation under 90 seconds across five back-to-back accept events.

**Distinguishing features vs synth #98 (bot-driven sub-10s n=3 mass-CLOSE).** Synth #98 documented a stale-bot performing **autonomous close-without-merge** on stale PRs at sub-10-second cadence — entirely bot-driven, terminal-state operations on others' PRs, no human in the loop. This Add.78 event is the **dual**: a bot is the **author** of 7 PRs (dependabot), and the **merger** is a human (or a CI auto-merge bot acting on green-CI threshold) operating at **~7-minute cadence**, not sub-second. The cadence is consistent with a human reviewer manually clicking "Merge" on each PR after CI signal, **not** with a batch-merge-all script. (A batch script would yield sub-second inter-merge times; 7-minute spacing implies per-PR confirmation.)

**Weekend deferral signature.** All 7 PRs opened **Friday 2026-04-24** between 17:27:51Z and 17:54:22Z (a 26m31s open-window). Merges happened **Monday 2026-04-27** between 03:01:59Z and 04:20:55Z. The 2-day-9-hour minimum lifespan is consistent with a "let dependabot's noise settle over the weekend, then process Monday morning" maintainer cadence. **Open-window duration (26m31s) vs merge-window duration (1h18m56s)**: the merge-burst is **2.98×** longer than the open-burst — the opens were truly automatic (bot in a single dependabot run), the merges were human-paced.

**Surface heterogeneity.** 5 cargo-deps + 2 GitHub-action-deps + 1 npm-doc-dep — touching `Cargo.toml`/`Cargo.lock`, `.github/workflows/*.yml`, and `documentation/package.json`. Three disjoint dependency-class surfaces, all merged in one continuous human session. **No same-PR conflicts surfaced** (each bumps a different dep, file-set overlap is trivially empty per-PR), but the cargo-deps PRs collectively touch the same `Cargo.lock` file — synth #197's "shared-file conflict between siblings" risk applies in principle. The order-of-merge matters: each subsequent cargo PR after #8829 had to resolve a `Cargo.lock` conflict from the previous merge. The 7-minute inter-merge cadence is tight enough to exclude full CI re-run between merges, suggesting either (a) maintainer trusted the conflicts were resolvable and accepted them after merge, or (b) dependabot's "rebase and update" feature was engaged between accepts.

This is a **W17 first-of-kind**: the bot-author / human-merger hybrid at human-paced cadence, after deliberate weekend-deferral. Synth #201 will codify.

## openai/codex — bolinfest "stack" PARTIAL CLEAR exposes branch-name vs base-ref topology divergence (#19734 + #19735 MERGED as flat-on-main siblings; #19736 + #19737 stay open as the actual chain)

Two of the four bolinfest "permissions" PRs (#19734–#19737, all opened within 4 seconds at 2026-04-27T00:40:17Z–00:40:21Z, recorded in synths #189/#192/#197) merged in this window:

| PR | Title | baseRefName | headRefName | createdAt | mergedAt | Lifespan | mergeCommit | Diff |
|---|---|---|---|---|---|---|---|---|
| #19734 | `permissions: centralize legacy sandbox projection` | **main** | `pr19734` | 00:40:17Z | **03:31:24Z** | 2h51m07s | `0d8cdc0510c62a75b3d308b1e3ea3bb54eda0d52` | +210/−86, 16 files |
| #19735 | `permissions: store only constrained permission profiles` | **main** | `pr19735` | 00:40:18Z | **03:59:59Z** | 3h19m41s | `0ccd659b4b33346fd2bdd096e5c2da06a4e5c668` | +242/−215, 32 files |
| #19736 | `permissions: constrain requirements as profiles` | **main** | `pr19736` | 00:40:20Z | OPEN | 3h41m+ | — | +288/−201, 7 files |
| #19737 | `permissions: derive legacy exec policies at boundaries` | **pr19736** | `pr19737` | 00:40:21Z | OPEN | 3h41m+ | — | +18/−31, 8 files |

**Topology revelation.** Branch names `pr19734`/`pr19735`/`pr19736`/`pr19737` and the contiguous numeric sequence (with all four opened in 4 seconds) suggested a **4-PR chained stack** (synth #189 explicitly characterized it as "chained-base 4-PR stack bootstrap"; synth #192 and #197 treated it the same way). The actual `baseRefName` audit shows: **#19734, #19735, #19736 all base=`main`** (they are flat siblings, not chained); **only #19737 has base=`pr19736`** (the sole genuine chain link). The "stack" topology is actually **3 flat-on-main siblings + 1 single-link chain (#19737 on #19736)**.

**Implication for synths #189/#192/#197.** All three prior synths assumed a contiguous chain (and built predictions on chain-merge ordering). The merged-out facts now contradict that assumption. The actual shape is a **flat-sibling cohort with a single trailing chain**, and the merge-clearance pattern is **synth #197-consistent for the flat siblings** (foundation siblings clear while chain stays open). #19734 + #19735 — the first two flat siblings by createdAt — merged within **28m35s of each other**, lifespans 2h51m07s and 3h19m41s. **#19736** (third flat sibling) is the **only one that did not merge despite being flat-on-main**; it carries 7 changed files and **#19737 chained on it** (8 files, +18/−31 — small additive). Reviewer hesitation likely stems from (a) #19736 being the third-largest commit in the cohort by changed-files-on-touch count (7 plus the 8 of its #19737 child = 15 effective files in the chain), and (b) chained #19737 introducing a non-trivial review-coupling concern absent from the two cleared flat siblings.

**Inter-merge gap #19734 → #19735: 28m35s** (#19734 mergeCommit `0d8cd…0d52` lands at 03:31:24Z; #19735 mergeCommit `0ccd6…c668` lands at 03:59:59Z). Both PRs touch the `permissions` subsystem with **non-overlapping file scopes** (16 vs 32 changed files; the diff-shape difference of "centralize projection" +210/−86 vs "store only constrained profiles" +242/−215 reflects distinct refactor scopes). Same-author back-to-back merges on a shared subsystem at <30-min cadence is consistent with synth #194's "subsystem-doublet" topology, but with a critical difference: synth #194's doublet was a **complete cohort** (2-of-2 cleared); this Add.78 event is a **partial-clear of a 4-PR cohort** with the subsystem chain preserved.

**Refactored update to W17 stack-topology taxonomy.** The W17 corpus's "branch-name suggests N-PR stack" signal is **not reliable** — only `baseRefName != main` actually constitutes a stack. Synth #202 will formalize this as a new lens.

## sst/opencode — cross-author flat-doublet on `dev` base: thdxr #24565 + Hona #24567 MERGED 7m56s apart, asymmetric diff-magnitude (207-line refactor vs 1-line filter)

Two MERGED PRs in the window with shared base=`dev`, distinct authors, distinct surfaces:

| PR | Author | Title | createdAt | mergedAt | mergeCommit | Diff |
|---|---|---|---|---|---|---|
| #24565 | thdxr | `Refactor npm config handling` | 03:36:04Z | **03:55:00Z** | `a9b62d67df08e6b984c51ead12339c845db49e93` | +207/−293, 13 files |
| #24567 | Hona | `fix: ignore GitHub Actions changelog contributor` | 03:39:33Z | **03:47:04Z** | `3525e619069069db10f13cc31959de879d7830eb` | +1/−1, 1 file |

**Open-gap:** #24567 opens 3m29s after #24565. **Merge-gap:** #24567 merges **first** at 03:47:04Z (lifespan **7m31s**), then #24565 at 03:55:00Z (lifespan **18m56s**). **Out-of-open-order merge:** the smaller-diff PR (1 line, fix-prefix, opened second) cleared **first**; the larger-diff PR (207-line refactor, untyped, opened first) cleared **8 minutes later**.

This is a **W17-fresh observation**: a cross-author flat-doublet where the **second-opened PR merges first** because of diff-size asymmetry (1 line vs 207 lines), consistent with synth #199's `fix:`-prefix-and-trivial-diff express-lane vs synth #200's deliberation-lane bimodality. The diff-size ratio is **207 / 1 ≈ 207×** (or **500 / 2 = 250×** if measuring total churn), and the lifespan ratio is **18m56s / 7m31s ≈ 2.52×** — **not** proportional to diff-size; both PRs cleared in well under 30 minutes (express lane), so the **diff-size effect on lifespan is bounded above by the express-lane ceiling**, not linear in churn.

## openai/codex — etraut-openai opens #19753 + #19755 (35m gap) on disjoint lifecycle subsystems; first observed W17 same-author 2-PR open-doublet on lifecycle-themed disjoint subsystems

Same author etraut-openai opened two PRs in this window on lifecycle-themed surfaces:

| PR | Title | head | createdAt | Diff |
|---|---|---|---|---|
| #19753 | `Terminate stdio MCP servers on shutdown` | `etraut/mcp-lifecycle-management` | 03:25:58Z | (small) |
| #19755 | `Add Responses stream lifecycle diagnostics` | `etraut/stream-lifecycle-diagnostics` | **04:00:40Z** | +663/−30, 11 files |

**Open-gap:** **34m42s**. Both base=`main`, both same-author, both head-branch-named `etraut/<X>-lifecycle-<Y>` (clear thematic linkage), both touch lifecycle/diagnostic surfaces but on **disjoint** subsystems (MCP-server-shutdown vs Responses-stream-diagnostics). #19755's diff (+663/−30 on 11 files) is substantially larger than typical etraut session size; #19753's diff is small. Both still OPEN at Add.78 close (lifespans 55m30s and 20m48s).

This is a **distinct shape** from the synth #197 + Add.77 bolinfest sibling stack (4 PRs in 4 seconds, all `pr1973N`-named): a **slow same-author cohort** at half-hour cadence on **thematically related but architecturally disjoint** subsystems. Predict: per the synth #199/#200 prefix-velocity model, both will land on the deliberation-lane (>2h) if untyped/feat — neither has an explicit `fix:`/`test:`/`docs:` prefix.

---

**Add.78 ledger.**
- 2 codex MERGE (bolinfest #19734, #19735)
- 7 goose MERGE (dependabot #8829, #8827, #8825, #8824, #8819, #8818, #8820)
- 2 sst/opencode MERGE (thdxr #24565, Hona #24567)
- 0 closes
- 4 OPENs noted (codex #19753 noted in Add.77, #19755 new; sst/opencode #24570 new; goose #8854 new; qwen-code #3656/#3657 new)

**Total merge volume: 11 PRs in 51 minutes** — the largest single-window merge volume recorded in W17. The 7-PR goose dependabot batch dominates by raw count; the 2 codex bolinfest merges dominate by individual diff-size (#19735 alone touches 32 files); the 2 sst/opencode merges occupy the cross-author express-lane. **Three distinct merge regimes operating in parallel within the same 51-minute window.**
