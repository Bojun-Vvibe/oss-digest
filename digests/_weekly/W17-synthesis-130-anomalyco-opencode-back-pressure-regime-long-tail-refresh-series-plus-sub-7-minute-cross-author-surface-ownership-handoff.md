# W17 Synthesis #130 — Anomalyco/opencode enters a single-repo "back-pressure" regime: 2-window long-tail refresh series at extreme age combined with sub-7-minute closed-then-replaced surface ownership handoff

**Window of evidence:** 2026-04-26 ADDENDUM-41 → ADDENDUM-42 (anomalyco/opencode events: 1 long-tail refresh + 1 long-tail refresh + 1 close + 2 opens = 5 events across two windows in a single repo while all 4 other tracked repos contribute 1 trailing-edge event total)

**Source PRs cited:**
- **Long-tail refresh series** (consecutive windows):
  - Add.41: **#24154** (`alohaninja`, base `dev`, +87/-10, `feat: add unarchive/restore for archived sessions`, created 2026-04-24T11:43:33Z, refreshed 03:55:51Z, **lifespan-at-refresh 1d16h12m18s**, head SHA `fb3bf4f915…`).
  - Add.42: **#12730** (`ugoenyioha`, base `dev`, +3522/-4, `feat: add agent team core — Team namespace, messaging, recovery, and events`, created 2026-02-08T18:20:32Z, refreshed 04:08:19Z, **lifespan-at-refresh 76d9h47m47s** ≈77 days, no head SHA change reported).
- **Closed-then-replaced surface handoff** (within Add.42, gap 6m30s):
  - **#24367 closed** at **04:03:00Z** (`tiffanychum`, base `dev`, +82/-2, `fix(zen): stop double-counting reasoning_tokens in oa-compat usage`, lifespan-at-close 8h57m19s, **closed without merge**).
  - **#24434 opened** at **04:09:30Z** (`kunalkohli`, base `dev`, +12/-0, `feat(tui): show per-message input/output token counts`, head SHA `400db2a5ac…`). Different author, different angle (TUI display) on the **same broad token-accounting surface**.
- **Disjoint co-occurring open**: **#24435** (`rekram1-node`, base `dev`, +5/-3, `fix: bump openrouter sdk version to resolve deepseek reasoning issue`, opened 04:21:31Z, head SHA `a1fcb8918d…`) — surgical 8-line dependency-version fix, disjoint surface family from both the long-tail refreshes and the token-accounting handoff.
- **Cross-repo context**: per ADDENDUM-42 background section, anomalyco/opencode produced 5 of the 6 cross-repo PR events in the window; the other four repos jointly produced 1 trailing-edge event (codex#19610 04:00:06Z). Same window: codex bolinfest stack quiescent >1h12m, etraut cluster quiescent >1h08m, litellm post-promotion silence extending past 55m (synth #127 lineage).

## Pattern

Across two consecutive addendum windows, **anomalyco/opencode is the only repo with non-trivial activity**, and that activity is structured rather than random:

1. **Long-tail refresh cadence at escalating age**: 1d16h (Add.41) → 77d (Add.42). The age multiplier between consecutive windows is **~46×**, both refreshes hit `dev`, both involve substantial diffs (+87 and +3522), and neither is preceded or followed by a same-author cohort burst. This is the "maintenance keepalive" signature (synth #92 inverse) but observed *twice in a row* on the same repo by *different authors*. Two independent dormant-PR authors signaling presence within a 12m28s span (03:55:51Z → 04:08:19Z) is unlikely under the random-touch null.
2. **Same-surface ownership handoff under close-without-merge**: #24367 closes at 04:03:00Z (8h57m old, never merged), and within **6m30s** a different author opens a different-angle PR (#24434) on the same broad surface. The handoff is fast enough that the second author was almost certainly *already drafting* their PR — they did not wait to observe the close, they observed the surface and acted in parallel. This is the inverse of the synth #126 single-author cohort stewardship pattern: instead of one author owning n PRs on a surface, the surface ownership *transfers* across authors within a single window.
3. **Disjoint surgical-fix open in the same window**: #24435 (rekram1-node, +5/-3) is unrelated to the token-accounting surface and unrelated to the long-tail refreshes — yet it lands in the same 35m window. The repo is producing **structurally diverse activity** (long-tail keepalive + surface handoff + surgical surface-disjoint fix) while every other tracked repo is silent.

We name this configuration **back-pressure**: a single repo concentrates activity across multiple structurally-distinct event types while peer repos go silent. It is distinct from:

- a **burst** (synth #91/#92): one author, n events, tight time window, single surface family.
- a **cohort firing** (synth #84): multiple authors converging on one surface in a coordinated tuplet.
- a **drought** (synth #128/#129): no events.

Back-pressure is the inverse-symmetric configuration to drought: events accumulate on one repo precisely when other repos suppress them.

## Why this is non-trivial

The trivial reading is "anomalyco was just busy this hour." The non-trivial reading rests on three independent evidence lines all firing in the same window:

(i) The 77-day refresh is the **oldest long-tail touch in the digest day** — it eclipses Add.41's previous record by 46× and is itself the second consecutive long-tail event on the same repo. That is a series, not a singleton.

(ii) The token-accounting handoff requires the second author to have been **already drafting** the replacement PR before the first author closed theirs (6m30s is faster than typical "see-close, decide-to-open, draft, push" turnaround). That implies cross-author awareness of the surface state — a coordination signature.

(iii) The disjoint surgical fix (#24435) opening in the same window means the repo is not just absorbing one cohort's energy — it is absorbing *uncorrelated* contributors simultaneously. That distinguishes back-pressure from a cohort firing.

Combined with synth #129's quiescence-not-fanout finding for codex (and litellm's continuing post-promotion silence per synth #127), the cross-repo picture is: **activity is being squeezed out of {codex, litellm, sst/opencode, goose} into anomalyco/opencode**. The mechanism is unknown — could be reviewer attention re-routing, could be a coincident upstream event (e.g., an SDK release like the one #24435 references) attracting fixes — but the cross-repo asymmetry is the observable.

## Falsifiable prediction

In the next addendum window (~Add.43), the back-pressure regime predicts a specific bimodal outcome:

- **Discharge mode (regime breaks):** anomalyco/opencode produces ≥1 merge in Add.43, simultaneously with at least one of {codex, litellm} resuming activity (open OR merge OR rebase). The pent-up activity discharges symmetrically.
- **Deepening mode (regime persists):** anomalyco/opencode produces ≥2 more events (any combination of opens, refreshes, closes) in Add.43 while {codex, litellm, sst/opencode, goose} collectively produce ≤1. In this case, back-pressure is not a one-window artifact and we should track it as a third structural regime alongside burst and drought.

Secondary falsifiable point: **if any of the 5 anomalyco/opencode events from Add.41+42 produces a merge in Add.43** (#24154 alohaninja, #12730 ugoenyioha long-tail, #24428 claudianus from Add.40, #24434 kunalkohli, #24435 rekram1-node), the maintenance-keepalive→merge conversion hypothesis is supported. If zero of the 5 merge while ≥3 more events accumulate, back-pressure escalates and starts to resemble a stalled-cohort configuration on the repo level rather than the cohort level (extending synth #126's stewardship-without-merge logic from one author to one repo).

Tertiary: **if the next event on the token-accounting surface is yet another close-without-merge** (kunalkohli #24434 closing without merge, replaced again by a third author within minutes), then the surface itself is structurally unmergeable in current form and the pattern is closer to "ownership churn around a contested API design" than to "fast surface handoff under reviewer load."
