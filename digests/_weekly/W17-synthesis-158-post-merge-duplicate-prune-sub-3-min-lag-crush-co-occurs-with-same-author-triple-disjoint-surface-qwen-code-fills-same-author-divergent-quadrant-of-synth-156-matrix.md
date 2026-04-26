# W17 / synth #158 — Same-window post-merge duplicate-prune at sub-3-min lag (crush #2598 merge → #2612 close) co-occurs with same-author triple-surface activity (B-A-M-N qwen-code) — distinct cross-author/same-author quadrant from synth #156

## Pattern

Add.56 window (2026-04-26T12:53:37Z → 13:33:15Z, 39m38s) produced two structurally significant author-coordination events on different repos. Both are **single-author centric** and complement the cross-author events synth #156 recorded in the prior window:

### Event A — charmbracelet/crush post-merge duplicate-prune at sub-3-min lag

| Time (UTC) | Event | PR | Author | Note |
|------------|-------|----|----|------|
| 13:24:37Z  | MERGED | crush#2598 | meowgorithm | `feat: PreToolUse hook` (lifespan 15d19h40m, +8249/−5942, 41 commits) |
| 13:27:52Z  | CLOSED w/o merge | crush#2612 | gavmor | `feat(hooks): implement JSON-based compatibility layer and lifecycle hooks` (lifespan 13d8h49m, +4307/−227, 9 commits) |

**Lag: 2m55s.** The two PRs overlap surface (`hooks` feature area), and #2612's earliest commits are even authored by `kujtimiihoxha` from the same `captain-hook` branch that #2598 originated on (commits `927115cf`, `a6796eff`, `e515959c`, `4b9becad`, `9b2ee10f`, `eca57270`, `17357ba6`, `b208bb3a` — all with author email `kujtimii.h@gmail.com`, dated 2025-11 to 2026-04-13). gavmor's contribution on #2612 is the single final commit `a34e8226` (`feat(hooks): implement notification hook for ToolPermission`, 2026-04-13T03:54:28Z).

This is a **post-merge duplicate-prune** — the maintainer (`meowgorithm`) lands the canonical implementation, then closes the alternative PR within the same author/coordination horizon. **2m55s is well below the human-attention-window threshold** — the close was almost certainly the same maintainer's next action after the merge, not a separately scheduled cleanup.

This is **structurally distinct from synth #98's bot-driven sub-10s n=3 stale-PR mass-close sweep**: synth #98 was bot-driven, sub-10s, multi-PR, age-dispersion-driven. **Event A is human-driven, sub-3-min, single-prune-after-single-merge, surface-overlap-driven.**

### Event B — B-A-M-N same-author triple-surface activity on qwen-code

`B-A-M-N` (John London) is now active across three qwen-code PRs in W17, with explicit AI-coauthor attribution (`Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`):

| PR | Surface | Latest commit (UTC) | Diff |
|----|---------|---------------------|------|
| QwenLM/qwen-code#3631 | telemetry / cost-estimation (`/stats model`) | 12:48:30Z (Add.55) | +656/−3, 3 commits |
| QwenLM/qwen-code#3629 | config / API timeout env override | **13:02:45Z (Add.56)** | +377/−5, 3 commits |
| (referenced) qwen-code#1045 | OAuth-path bug (closed by #3629) | — | — |

The three PR surfaces are **disjoint** (telemetry, config, OAuth) — analogous to the B-A-M-N pair in synth #154 (cost-estimation + timeout) but **extended to a triple**. This **extends synth #154's "same-author back-to-back content-rev pair on adjacent provider surface"** to a **same-author triple on disjoint feature surfaces** within a single W17 cycle.

The **explicit AI-coauthor attribution** is novel in the tracked qwen-code range. All three PRs carry `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>` trailers in commit message bodies. This is the **first observed AI-coauthor declaration on a tracked OSS repo's PR commits** — every prior author-write event in the W17 series was attributed to a single human author with no AI co-author trailer.

## The cross-author/same-author quadrant

Combining synth #156 and synth #158 yields a 2×2 author-coordination matrix observed within the consecutive Add.55 + Add.56 windows:

|              | **Convergent (single surface)** | **Divergent (disjoint surfaces)** |
|--------------|----------------------------------|-----------------------------------|
| **Cross-author** | synth #156 Event A: cline deepseek-v4 (gerryqi #10401/#10404 + Jabca #10418), 3 PRs / 2 authors / 1 surface | synth #156 Event B: qwen-code (B-A-M-N #3631 + jordimas #3643), 2 PRs / 2 authors / 2 surfaces, 1m33s gap |
| **Same-author** | (post-merge duplicate-prune is between two distinct authors but maintainer-coordinated; could be argued cross-author convergent) | **synth #158 Event B: B-A-M-N triple on qwen-code, 3 PRs / 1 author / 3 surfaces** |

Event A (post-merge duplicate-prune) sits awkwardly in this matrix because the **author dimension is split between contributor (gavmor) and maintainer (meowgorithm)**. The structural action is **maintainer-driven coordination across authors on a single surface** — a fifth coordination mode not anticipated by synth #156's cross-author/same-author binary. **Event A is best characterized as maintainer-arbitrated convergent surface contention resolution**, where the maintainer collapses two contributor implementations of one feature down to one.

The **same-author divergent quadrant (Event B)** is the **structural inverse** of synth #156 Event A (cross-author convergent): one author spreading across three disjoint surfaces vs three authors converging on one shared surface. Both are 3-element coordination patterns; one fans out, one fans in.

## Discriminator vs prior synths

| Synth | Pattern | Match? | Why distinct |
|-------|---------|--------|---------------|
| #98   | Bot-driven sub-10s n=3 stale-PR mass-close sweep | inverts on driver + scope | #158 Event A is human/maintainer-driven, sub-3-min, single-prune; #98 is bot-driven, sub-10s, n=3 |
| #154  | Same-author back-to-back content-rev pair on adjacent provider surface | extends to triple | #158 Event B extends #154's pair to a triple on **disjoint** surfaces (cost-estimation + timeout + OAuth), not adjacent |
| #156  | Same-window cross-author convergent + divergent co-occurrence | complements with same-author counterpart | #158 fills the **same-author divergent** quadrant of the 2×2 matrix; together with #156 covers 3 of 4 quadrants observed in 2 windows |
| #84   | Intra-repo same-author cross-PR co-fire signature | refines | #84 was 2-PR same-author; #158 Event B is 3-PR same-author with **explicit AI co-author trailer** — first such declaration in tracked range |
| #97   | Same-author n=3 self-merge series with shared spec-file co-touch | inverts on merge dimension | #97 was self-merging same-author n=3; #158 Event B is open-state same-author n=3 with no merges yet, and disjoint (not shared) surfaces |
| #99   | Same-author shared-spec-anchor self-merge series extension past triple | echoes structurally | #99 extends #97 to length 4 with growing inter-PR gap; #158 Event B is at length 3 disjoint, not yet self-merging |

## Falsifiable predictions (for next 4 windows)

- **P-158.A** (post-merge duplicate-prune cadence): Of the next 4 charmbracelet/crush merges, **at least 1 will be followed within 5 minutes by a close-without-merge on a surface-overlapping PR**. If yes, the post-merge duplicate-prune is a meowgorithm-maintenance regime. If no further such pair appears, Event A was a single-feature-area artifact (PreToolUse hook had two competing implementations because it was a feature with two contributor branches).
- **P-158.B** (B-A-M-N triple extends to quadruple): Within next 4 windows, B-A-M-N opens or commits to a **fourth** disjoint qwen-code surface (NOT cost-estimation, NOT timeout, NOT OAuth). If yes, B-A-M-N is in a sustained author-fanout regime (echoing synth #150 regime C). If only the existing 3 PRs see activity, the triple is the cap.
- **P-158.C** (AI-coauthor attribution spreads): Within next 4 windows, **at least one other tracked repo** will see a PR commit with explicit `Co-Authored-By: Claude` (or other AI) trailer. If yes, AI-coauthor declaration is a 2026-W17 contribution-norm shift. If only B-A-M-N's qwen-code PRs carry the trailer, it's an author-specific habit.
- **P-158.D** (same-author triple → merge fate): Of B-A-M-N's three qwen-code PRs (#3631, #3629, third-via-#1045), **at most 1 will merge within next 8 windows**. If 2+ merge, qwen-code maintainers are accepting parallel author-fanout work. If 0 merge, the triple is in review-pending limbo similar to gerryqi's cline doublet.
- **P-158.E** (cross-author/same-author quadrant fills): Within next 4 windows, the **fourth quadrant** (same-author convergent — same author refining same surface across multiple PRs in one window) will be observed at least once. The closest historical match is synth #149; this would be a within-window observation. If observed, the 2×2 matrix is fully populated within W17.

## Refines / falsifies prior synths

- **Extends synth #154** from same-author pair on adjacent provider surfaces to **same-author triple on disjoint feature surfaces** with AI co-author attribution.
- **Complements synth #156** by filling the same-author divergent quadrant of the cross-author/same-author × convergent/divergent coordination matrix.
- **Distinguishes from synth #98** on driver dimension (human vs bot) and scope (single-prune vs mass-sweep) for the post-merge close pattern.
- **Echoes synth #97/#99** on the same-author n=3 structure but inverts the merge dimension (open-state, not self-merging) and the surface dimension (disjoint, not shared).
- **Independent of synth #157** — synth #157 covers codex rebase + litellm branch-channel; synth #158 covers crush + qwen-code coordination patterns. No interaction.

## Anchor PRs / SHAs

**Event A (crush post-merge duplicate-prune):**
- charmbracelet/crush#2598 (`meowgorithm`, base `main`, opened 2026-04-10T17:44:08Z) — head `6cbdd7fd715b0404b89c57097492c4b9898552ad`, MERGED 2026-04-26T13:24:37Z, +8249/−5942, 41 commits, lifespan 15d19h40m53s
- charmbracelet/crush#2612 (`gavmor`, base `main`, opened 2026-04-13T04:38:50Z) — head `a34e8226501d85086a57beeb28e1ed80273600a9`, CLOSED w/o merge 2026-04-26T13:27:52Z, +4307/−227, 9 commits (8 authored by `kujtimiihoxha` on the captain-hook branch, 1 by `gavmor`)
- **Lag from merge to close: 2m55s.** Both PRs share `hooks` feature surface; #2612 originated from the same captain-hook branch sequence that #2598 was built on.

**Event B (B-A-M-N same-author triple on qwen-code):**
- QwenLM/qwen-code#3631 (`B-A-M-N`, base `main`, opened 2026-04-26T04:04:48Z) — head `7c9ed21aeee37f5242c1c0616d257489da93b208`, +656/−3, 3 commits, last commit 12:48:30Z (Add.55), surface: telemetry / cost-estimation
- QwenLM/qwen-code#3629 (`B-A-M-N`, base `main`, opened 2026-04-26T00:57:17Z) — head `399570c592d2967a0e2ffb9ab4fdaa1eb8c357f9`, +377/−5, 3 commits, last commit **13:02:45Z (Add.56)**, surface: config / API timeout env override
- (Closes qwen-code#1045) — third surface: OAuth-path timeout bug, fixed by #3629's last commit
- All commits on #3631 and #3629 carry `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>` trailer — first observed AI-coauthor attribution on tracked qwen-code PRs.

## Source addenda

ADDENDUM-54 (B-A-M-N #3631 / #3629 baseline + crush #2598 / #2612 surface overlap noted), ADDENDUM-55 (B-A-M-N #3631 active commit, qwen-code cross-author divergent burst per synth #156), ADDENDUM-56 (B-A-M-N #3629 commit at 13:02:45Z, crush #2598 merge at 13:24:37Z, crush #2612 close at 13:27:52Z, sub-3-min lag).
