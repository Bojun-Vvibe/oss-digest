# W17 Synthesis #711 — Sub-class Z′ (accidental/malformed-title CLOSED-no-merge): cross-carrier same-tick replication via opencode #25936 (`Merge: `) + codex #21267 (`N/A`), both opened in a 75-second window and both CLOSED within 5 minutes — distinguishes accidental-PR fast-rejects from review-merit Z fast-rejects (vanities #27243, 4m47s, substantive arize bug fix rejected on review-grounds)

**Anchor window**: 2026-05-05T23:14:28Z (codex #21267 open) → 2026-05-05T23:20:31Z (opencode #25936 close). **Burst envelope: 6m03s end-to-end.** Inter-open gap: **90s** (#21267 open at 23:14:28Z → #25936 open at 23:15:58Z).

**Anchor signal**: Two PRs on two disjoint carriers (anomalyco/opencode and openai/codex) by two unrelated authors (`ddbd`, `canvrno-oai`) open within 90 wall-clock seconds, both with **non-substantive / malformed titles**, both CLOSED-no-merge within 5 minutes:

| PR | carrier | author | head SHA | createdAt | closedAt | lifespan | title |
|---|---|---|---|---|---|---|---|
| [#21267](https://github.com/openai/codex/pull/21267) | codex | canvrno-oai | `8bd1e7f6fbfe` | 2026-05-05T23:14:28Z | 2026-05-05T23:18:45Z | **4m17s** | `N/A` |
| [#25936](https://github.com/anomalyco/opencode/pull/25936) | opencode | ddbd | `595539806f3653b53e2bcec808c3b5f6e1ea7bb6` | 2026-05-05T23:15:58Z | 2026-05-05T23:20:31Z | **4m33s** | `Merge: ` (empty after colon) |

The **lifespan match is striking**: 4m17s vs 4m33s = **16-second delta** on close-no-merge. Both PRs were opened, observed, and closed by the **same author** in each case (no maintainer intervention — these are author-self-closes, inferred from the lifespan being shorter than typical maintainer-review-and-reject latency).

## Why Z′ is distinct from Z

The previously logged CLOSED-no-merge sub-class **Z** (anchor: vanities #27243 at Add.367, 4m47s lifespan, `fix(arize): stop O(L²) attribute emit`) is a **substantive bug fix CLOSED on review-grounds**. The PR had:
- a real conventional-commit title with a specific bug (`O(L²) attribute emit`)
- a defined fix surface (`arize` integration, `input_messages`)
- presumably a maintainer comment requesting changes (we don't have the comment text but the close signature is maintainer-driven)

In contrast, the Z′ instances have:
- **non-titles** (`N/A`, `Merge: `) that carry zero semantic content
- **no surface scope** (no module/path identifier in the title)
- **near-identical lifespans** (4m17s, 4m33s) — consistent with **author noticing immediately after open** and self-closing, not with a review cycle

These are mechanically distinct events. Z is a **review-rejection signature**; Z′ is an **author-error signature**.

## Sub-class taxonomy update

| sub-class | trigger | typical lifespan | author-vs-maintainer close | example |
|---|---|---|---|---|
| Z | review rejects substantive PR | 3–10 min | maintainer-driven | vanities #27243 (4m47s, arize O(L²)) |
| **Z′** | **author opens malformed/accidental PR, self-closes** | **3–6 min** | **author-driven** | **canvrno-oai #21267 (4m17s, `N/A`); ddbd #25936 (4m33s, `Merge: `)** |

The 16-second lifespan-delta on the Z′ pair, despite being on disjoint carriers and from disjoint authors with no plausible coordination channel, is **consistent with a common toolchain-induced mechanism**: both authors likely opened the PR via a **CLI/UI button-press** (e.g., `gh pr create` with no `--title`, or a stuck merge-PR draft) that produced a non-title, immediately noticed via the post-open redirect to the PR page, and closed it manually. The sub-5-minute close is the **median time to notice and act on a UI/CLI feedback loop**.

## Mechanism hypotheses

Two non-exclusive hypotheses explain the cross-carrier same-tick replication of Z′:

**H1 (toolchain-induced)**: Both authors used the GitHub CLI or web UI in a state where the title field was either auto-populated (e.g., `Merge: ` from an aborted merge-into-PR conversion) or unset (`N/A` as a placeholder). The 90-second open-gap between the two events, on disjoint carriers, with similar lifespans, suggests a **time-of-day / CLI-version coincidence** — both authors hit the same UI flow within the same minute due to GitHub serving the same CLI/UI version globally.

**H2 (statistical coincidence)**: Z′ events occur at base rate on every active GitHub repo. Two events in 90 seconds is **expected** if Z′ rate is on the order of 1 per 10,000 PRs and the global PR open rate during US-evening hours is ~30/sec. Cross-carrier Z′ same-tick is **null-result expected**, not a signal.

**Discriminator**: H1 predicts Z′ events should **cluster temporally** (same minute clustering due to UI/CLI version push). H2 predicts uniform Poisson distribution. Predict at Add.369: ≥1 Z′ event within 5 minutes of either tick boundary, OR Z′ count of 0 across all 7 carriers for the next 2 ticks. Bimodal: heavy clustering or extended drought.

## Why this is a synthesis-worthy pattern, not noise

Three independent reasons:

1. **Distinct lifespan distribution**: Z (review-rejection) has a heavier right tail (≥10 min plausible if the maintainer takes time). Z′ has a tight 3–6 min concentration because the author's notice-and-close cycle is bounded by their session attention window, not a review queue.

2. **Distinct author-merge-rights signature**: Z′ events are **always author-self-closes** (the author has close-rights on their own PR). Z events can be either, but most are maintainer-closes. Audit the close-actor on the next 5 Z/Z′ events to validate.

3. **Distinct title-content distribution**: Z′ titles are degenerate (empty, `N/A`, `WIP`, `test`, `Merge: `). Z titles are well-formed conventional-commit. A simple **title-length / title-entropy filter** (Shannon entropy < 2.0 bits per char, or length < 8 chars) would correctly classify Z′ vs Z without lifespan or close-actor signals.

## Cross-carrier convergent-failure context

This is the **3rd cross-carrier convergent-failure pattern of W17–W18**, after:
- W17-synth-705: ACP protocol-surface convergence (opencode #25901 + goose #9023/#9030/#9034) — convergent-feature, not convergent-failure
- W17-synth-708: H-burst regime (4 carriers / 11 force-push events / 37min) — convergent-toolchain
- **W17-synth-711 (this one)**: Z′ cross-carrier replication (2 carriers / 2 PRs / 90s open-gap / ≤5min lifespan) — convergent-author-error

The pattern frequency is climbing (W17-synth-705 was at week start, 711 is in W17 closing band). Predict at W17 close: ≥1 more cross-carrier convergent pattern (target: **carrier-pair force-push synchronization**, where 2 disjoint carriers exhibit force-push events on unrelated PRs within ≤10s of each other due to CI/release-bot coordinated triggers).

## Falsifiable predictions

- **P-711.A**: At Add.369, ≥1 Z′ event observed across 7 carriers (lifespan ≤6min, title-entropy <2 bits/char). If 0, Z′ was a 2-event statistical fluctuation.
- **P-711.B**: All 5 future Z events (sub-class Z, review-rejection) close-actors are maintainers, not authors. Discriminates Z′ (author-self-close) from Z structurally.
- **P-711.C**: Z′ lifespan distribution narrows to **3.5–5.5min** band (95% interval) over next 10 instances. If lifespans scatter beyond 0–15min, Z′ is not a tight class and absorbs back into Z.
