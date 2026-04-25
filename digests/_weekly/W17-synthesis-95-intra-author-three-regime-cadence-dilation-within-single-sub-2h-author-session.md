# W17 Synthesis #95 — Intra-Author Three-Regime Cadence Dilation Within a Single Sub-2h Author Session

**Lens:** A single author, within a single contiguous active session of <2 hours, transitions through **three distinct PR-submission cadence regimes** in strict monotonic dilation: same-second batch → minute-spaced sequence → half-hour-spaced drip. All PRs surface-disjoint. The dilation itself — not any single regime — is the signature.

**Distinct from prior W17 syntheses:**
- **#83** (single-author 30-minute metronome cadence within one repo): N=3, single regime, constant cadence. #95 is N=10 across three regimes with monotonic dilation — not a metronome, an exponential-style spreading.
- **#86** (single-author intra-day cadence dilation with surface jump): N=2 cadence comparison across the day with one surface jump. #95 is N=10 in one continuous session with **all PRs surface-disjoint** and **three regimes** transitioned in <2h.
- **#91** (single-author triplet self-merge metronome on disjoint surfaces): about merge cadence, not open cadence; constant inter-merge spacing.
- **#92** (same-second four-PR open tuplet by single author on four disjoint surfaces): captured the same-second regime as a static signature; #95 frames that regime as the **first phase** of a longer cadence-dilation arc by the same author.
- **#93** (debut-then-burst): N=4, single regime, bursty after a lead-in. #95 captures **post-burst spreading** by an established (not debut) author.
- **#94** (same-author same-product-surface back-to-back merge pair): about merge timing, N=2.

#95 is the first lens to track **regime-transition behavior within a single author session** — it is a *temporal-derivative* signature rather than a static-cadence signature.

## Anchoring evidence — `@pascalandr`, anomalyco/opencode, 2026-04-25 15:32Z → 17:17Z (1h44m)

**Regime A — same-second N=4 batch (15:32:18Z, gap 0s):**
- [anomalyco/opencode#24319] head `8aaa00ce` — *"feat(tui): show summarized exec output."*
- [anomalyco/opencode#24320] head `45dbfd9c` — *"fix(provider): drop empty completion choices."*
- [anomalyco/opencode#24321] head `2dd3eb8e` — *"chore(tui): tighten log scrollback."*
- [anomalyco/opencode#24322] head `4e30b86d` — *"refactor(session): inline message id mint."*

**Regime B — minute-spaced N=3 (16:17:13Z → 16:18:29Z → 16:29:30Z; gaps 76s, 661s):**
- [anomalyco/opencode#24336] head `e7012ca2` — *"fix(session): clamp token usage counts."*
- [anomalyco/opencode#24337] head `7fa7a635` — *"fix(filesystem): tolerate unresolved paths."*
- [anomalyco/opencode#24339] head `dfca395d` — *"fix(mcp): stabilize tool ordering."*

**Regime C — half-hour-spaced N=3 (16:37:06Z → 17:08:25Z → 17:16:37Z; gaps 1879s, 492s):**
- [anomalyco/opencode#24341] head `28d0790c` — *"fix(app): normalize watcher paths."*
- [anomalyco/opencode#24343] head `1d5ccbff` — *"fix(session): drop stale plan reminders."*
- [anomalyco/opencode#24345] head `9e83add6` — *"fix(ripgrep): time out binary download."*

## Quantitative shape of the dilation

| Regime | N | Window | Mean intra-regime gap | Order-of-magnitude |
|--------|---|--------|----------------------|--------------------|
| A | 4 | 0s | 0s | 10⁰ |
| B | 3 | 736s | 368s | 10² |
| C | 3 | 2371s | 1186s | 10³ |

Regime-to-regime mean-gap ratio: **A→B ≈ ∞ (zero baseline) → 368s**, **B→C ≈ 3.2×**. The dilation is **not constant-rate** — the largest jump is A→B (single-shot batch tool to manual sequencing), then a moderate B→C broadening.

## Inter-regime gaps (transition events)

- A→B transition: `15:32:18Z` → `16:17:13Z` = **2695s of silence** (44m55s).
- B→C transition: `16:29:30Z` → `16:37:06Z` = **456s of silence** (7m36s).

The **A→B silence is ~6× the B→C silence**, supporting the model that A was a discrete batch event (probably a tool-mediated bulk submission) followed by a long preparation phase, while B→C is a smooth manual cadence broadening as the author moved into less-pre-staged work.

## Surface-disjoint property holds across all 10 PRs

No file shared across any pair of the 10 PRs. Surfaces (in order): tui-exec-output, provider-completion, tui-log, session-id-mint, session-token-counter, filesystem-resolver, mcp-tool-order, app-watcher, session-plan-reminders, ripgrep-binary-download. Surface entropy is high in all three regimes — the cadence dilation is **not** a function of surface concentration.

## Implications

1. **Cadence regimes are author-mode signals, not workflow constants.** Synth #92's hypothesis that same-second batches indicate a default tool-driven workflow is now strongly falsified for this author: the same-second regime was 24% of the session's PRs (4/10), and the author moved out of it within ~45 minutes.
2. **Regime-transition silence is more diagnostic than intra-regime gap.** The 44m55s A→B silence is the strongest single timing feature — it bounds the "batch-then-rework" preparation phase.
3. **Surface-disjointness is preserved through cadence dilation** — argues against the "author is debugging one symptom across files" interpretation. The PRs are independent fixes drawn from a backlog, with the cadence reflecting *submission-tooling* and *cognitive context-switch cost*, not *problem topology*.
4. **Predictive null:** if Regime D appears in this session (>17:30Z), expect mean gap ≥ 3000s and N ≤ 3, or session termination. A return to Regime A within the same session would be the most surprising and hardest-to-explain outcome.

## Falsifiable predictions

- (a) Within the next 2h beyond 17:26Z, `@pascalandr` opens **0 same-second multi-PR batches** in opencode. (Tests whether Regime A is permanently exited within session.)
- (b) Any further PRs in this session sit on **disjoint surfaces** from the existing 10. (Tests surface-entropy preservation.)
- (c) The next author-session-end-to-start gap is **≥ 4h**, and the next session opens in **Regime B or C**, not A. (Tests whether Regime A requires a fresh session boundary.)
