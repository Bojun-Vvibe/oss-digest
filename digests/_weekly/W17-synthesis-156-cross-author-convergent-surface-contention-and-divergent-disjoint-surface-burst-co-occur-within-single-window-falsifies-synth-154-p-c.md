# W17 / synth #156 — Same-window cross-author convergent surface-contention (cline deepseek-v4) co-occurs with cross-author divergent disjoint-surface sub-2-min burst (qwen-code) — falsifies P-154.C and extends the cross-author rapid-fire family

## Pattern

In the Add.55 window (2026-04-26T11:54:09Z → 12:53:37Z, 59m28s) **two structurally opposite cross-author rapid-fire events** fired on different repos:

### Event A — cline/cline deepseek-v4 surface: convergent third-author entry

`Jabca` (debut author this W17 cycle on cline/cline) opened **[cline/cline#10418]** at **2026-04-26T11:56:13Z**, title `added deepseek-v4 models`, base `main`, head `87dca6c9a9ed`, +25/−2, 1 commit (last commit 11:44:25Z, 12m before open).

This is the **same surface** that `gerryqi` opened **[cline/cline#10401]** (`feat(deepseek): Add deepseek-v4-flash、deepseek-v4-pro support`) and **[cline/cline#10404]** (`feat(deepseek): deepseek-v4-pro supports reasoning effort control`) against in Add.54, with last commits 11:45:00Z and 11:48:47Z respectively. Jabca's #10418 was opened **at most 11m13s after gerryqi's last surface commit (#10404)** — and Jabca's commit timestamp 11:44:25Z is actually **35s BEFORE gerryqi's #10401 last commit at 11:45:00Z**, meaning Jabca was working in parallel without observable coordination.

**Synth #154's P-154.C** ("if any other cline/cline contributor opens a deepseek-v4-themed PR within the next 4 windows, the surface is multi-author hot") **fires in window 1 of 4** — the fastest possible falsification of the "single-author claimed" reading. The cline deepseek-v4 surface is now **multi-author hot**, with three PRs from two distinct authors active simultaneously on the same provider surface.

### Event B — qwen-code disjoint-surface cross-author sub-2-min burst

Two distinct authors shipped commits to two distinct disjoint-surface qwen-code PRs in a sub-2-min envelope:

| PR | Author | Surface | Commit (UTC) | Diff |
|----|--------|---------|--------------|------|
| QwenLM/qwen-code#3631 | `B-A-M-N` | telemetry / cost-estimation | **12:48:30Z** | +656/−3 (3 commits) |
| QwenLM/qwen-code#3643 | `jordimas` | i18n / locale add (Catalan) | **12:50:03Z** | +2154/−2 (7 commits) |

**Inter-commit gap: 1m33s.** Two distinct authors (`B-A-M-N`, `jordimas`), two **fully disjoint surfaces** (telemetry vs i18n locale), same repo, same window. Neither author has a previously-tracked relationship; this is **non-coordinating cross-author rapid-fire on a single repo**.

## Discriminator vs prior synths

| Synth | Pattern | Match? | Why distinct |
|-------|---------|--------|---------------|
| #145  | Cross-repo theme convergence (preserve-reasoning-content) | extends to within-repo | Event A is the **within-repo** specialization of synth #145's cross-repo theme convergence — same conditional fired (multi-author surface claim), but at a single-repo scale |
| #149  | Same-author rapid-fire docs doublet on literal shared ecosystem-list surface | inverts | Event A is the **cross-author** inverse of synth #149's same-author shared-surface doublet |
| #151  | Cross-repo sub-30s author-write triple cluster across two repos and two authors | partial echo | Event B is the **same-repo, two-author, sub-2-min** analog; #151 is cross-repo sub-30s. Both share "no coordination channel" structure |
| #154  | Same-author back-to-back content-rev pair on adjacent (not identical) provider surface | falsified extension | Event A's Jabca entry **falsifies #154's P-154.C** by introducing a third author; gerryqi's pair is no longer single-author claimed |
| #84   | Intra-repo same-author cross-PR co-fire signature | inverts on author dimension | Event B is the **cross-author** inverse — #84 is single-author across PRs, #156 is multi-author across PRs |
| #150  | Three distinct quiescence regimes during shared merge drought | falsified for litellm regime A | Independently in Add.55, hakusanb0#26549 broke litellm silence at length 4 — note: not part of synth #156's claim, see ADDENDUM-55 directly |

Synth #156 is **distinct** by characterizing **co-occurrence within a single ≤60-min window of two structurally opposite cross-author rapid-fire patterns**:

1. **Convergent topology** (Event A): multiple authors → single surface (deepseek-v4) → contention/redundancy risk
2. **Divergent topology** (Event B): multiple authors → multiple disjoint surfaces (cost-estimation / i18n) → independent parallel work

Both are **cross-author**, both are **rapid-fire** (sub-12-min and sub-2-min respectively), both occur **without observable coordination**. The co-occurrence in a single window is the novel observation — prior synths treat convergent (#145, #154) and divergent (#151, #84-inverse) cross-author patterns as independent regimes; #156 records them firing **simultaneously**.

## Falsifiable predictions (for next 4 windows)

- **P-156.A** (convergent extension): A **fourth** author will open a deepseek-v4-themed cline/cline PR within next 4 windows. If yes, the surface is **broadly hot** (4+ authors); if only Jabca + gerryqi remain, the surface is **two-author contested** rather than broadly hot.
- **P-156.B** (convergent merge race): Of cline/cline #10401, #10404, #10418, **at most one** will merge within next 4 windows; the others will be either closed-without-merge (duplicate-prune) or held in review. If two merge, the maintainers are accepting overlapping deepseek-v4 work in parallel — falsifying contention.
- **P-156.C** (divergent extension): Within next 4 windows, **a third disjoint-surface qwen-code commit** by a third distinct author will land within 5 minutes of either B-A-M-N or jordimas's next commit. If yes, qwen-code is in a **multi-author divergent burst regime** (analogous to synth #151 cross-repo, but within-repo). If only B-A-M-N + jordimas remain active, the burst is a **two-author coincidence**, not a regime.
- **P-156.D** (co-occurrence regime test): The next 4 windows will produce **at least one more window with both convergent AND divergent cross-author events firing**. If at least one such window appears, co-occurrence is a regime; if none, the Add.55 co-occurrence is a single-window coincidence and synth #156 reduces to two independent observations.
- **P-156.E** (gerryqi response test): `gerryqi` will respond to Jabca#10418 within next 4 windows by **either** (a) commenting on or closing one of #10401/#10404 to defer to Jabca, OR (b) shipping a third deepseek-v4 PR (per synth #154 P-154.A). If neither, gerryqi has gone quiescent on the contested surface — a **surface-cession** signal.

## Refines / falsifies prior synths

- **Falsifies synth #154 P-154.C** in window 1 of 4 — Jabca's entry promotes the cline deepseek-v4 surface to multi-author hot.
- **Promotes synth #145** by extending cross-repo theme convergence to **within-repo surface convergence** (Event A).
- **Echoes synth #151** at sub-2-min same-repo two-author scale (Event B) — synth #151 was cross-repo sub-30s, synth #156 Event B is same-repo sub-2-min.
- **Inverts synths #84 and #149** on the author dimension — those are same-author rapid-fire patterns; #156 records the cross-author counterparts.
- **Couples to synth #150** via the broader "merge drought + author-write activity decoupled" regime — Add.55 produced 0 merges but 4 cross-author rapid-fire events, reinforcing that author-side activity and merge-side activity are running on independent clocks during the current 5h40m drought.

## Anchor PRs / SHAs

**Event A (convergent):**
- cline/cline#10401 (`gerryqi`, head `763da6d6ca43`, last commit 11:45:00Z, +23/−1, 5 commits, base `main`) — unchanged in Add.55 window
- cline/cline#10404 (`gerryqi`, head `78084ec3e05b`, last commit 11:48:47Z, +55/−2, 9 commits, base `main`) — unchanged in Add.55 window
- cline/cline#10418 (`Jabca`, head `87dca6c9a9ed`, opened 11:56:13Z, last commit 11:44:25Z, +25/−2, 1 commit, base `main`) — **NEW open in Add.55 window**

**Event B (divergent):**
- QwenLM/qwen-code#3631 (`B-A-M-N`, head `7c9ed21aeee3`, last commit 12:48:30Z, +656/−3, 3 commits, base `main`)
- QwenLM/qwen-code#3643 (`jordimas`, head `499f4c4133bc`, last commit 12:50:03Z, +2154/−2, 7 commits, base `main`)

**Event B inter-commit gap: 1m33s.** **Event A "third author entry" lag from gerryqi's last surface commit: 7m26s** (Jabca's open at 11:56:13Z minus gerryqi's #10404 commit at 11:48:47Z), or more sharply, Jabca's commit timestamp (11:44:25Z) **predates** gerryqi's #10401 commit (11:45:00Z) by 35s — the two authors were working in parallel without observable coordination.

## Source addenda

ADDENDUM-54 (gerryqi #10401 + #10404 baseline), ADDENDUM-55 (Jabca #10418 + qwen-code Event B).
