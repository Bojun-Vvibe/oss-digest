# W17 Synthesis #100 — Cross-carrier multi-tick zero-event carrier-quiescence as its own regime: openai/codex 160m and charmbracelet/crush 110m co-existing in the same window

**Anchor window:** 2026-05-05T08:05:00Z → 2026-05-05T09:55:00Z (110m total, spanning Add.348 50m + Add.349 60m).
**Anchor repos:** openai/codex (3-tick carrier-quiescence), charmbracelet/crush (2-tick carrier-quiescence).
**Parent synth:** none direct; orthogonal to the per-author hard-stop family represented by morgmart goose (synth-680 lineage).

## Why this is distinct from per-author hard-stop synths

Prior W17 synths in the "sustained-zero-event" family have all been **per-author** (synth-680: morgmart goose UNDECET frozen across multiple ticks). This synth captures the **carrier-scope analogue**: an entire carrier (all authors, all bots, including dependabot/gh-actions) producing zero fresh-opens, zero merges, and zero head-changes across multiple consecutive 50–60m ticks.

The two regimes (per-author hard-stop, per-carrier quiescence) are **structurally independent** as demonstrated in ADDENDUM-348 by goose's idosavion #9021 carrier-quiescence-exit while morgmart hard-stop persisted. Synth #100 explicitly catalogs the carrier-scope manifestation as its own primitive class.

## The two co-existing instances in this window

### openai/codex — 3-tick = 160m sustained zero-event (W17 record)

| Tick | Window | Events | Notable carry-forwards |
|---|---|---|---|
| Add.347 | 07:15–08:05Z (50m) | 0 fresh-open, 0 merge | starr-openai SEXTET (#20530, #20647, #21048, #21101, #21142, #21143) all-OPEN |
| Add.348 | 08:05–08:55Z (50m) | 0 fresh-open, 0 merge | abhinav-oai #21152 head `503cba1f...` unchanged since 06:11:54Z |
| Add.349 | 08:55–09:55Z (60m) | 0 fresh-open, 0 merge | aibrahim-oai #20971 head `fdfd9c4f...` unchanged (3-tick stall); cconger #21146 head `947d2929...` unchanged |

Last codex event prior to the regime: ADDENDUM-347 starr-openai surface activity ending ~05:28Z; first event entering this regime was the silence at 06:11:54Z on #21152. Total wall-clock zero-event duration as of snapshot 2026-05-05T09:59:27Z: **~3h47m on the freshest stalled head, ~160m on the strict carrier-window basis**.

### charmbracelet/crush — 2-tick = 110m sustained zero-event

| Tick | Window | Events | Notable carry-forwards |
|---|---|---|---|
| Add.348 | 08:05–08:55Z (50m) | 0 fresh-open, 0 merge | #2801 ardevd typo README head `de9d901e...` unchanged from Add.347 |
| Add.349 | 08:55–09:55Z (60m) | 0 fresh-open, 0 merge | #2800 BrunoKrugel MCP allow-list head `3394b9fb...` unchanged; #2791 meowgorithm thinking-blocks head `07e00ad4...` unchanged |

Last crush event prior to the regime: ADDENDUM-347 ardevd #2801 typo single-leg quiescence-exit. The single-leg quiescence-exit did not catalyze any follow-on author activity; crush re-entered carrier-quiescence within one tick.

## Why this matters as its own regime, not as a noise of per-author quiet

A naive composition view would say: a carrier is quiescent iff every author in its active set is independently quiet. Under that view, carrier-quiescence is fully explained by per-author independent quiet states, and the carrier-scope regime carries no information beyond the per-author distribution.

This window's data falsifies that composition view in two ways:

**(1) Codex's quiescence is broader than its active-author set's per-author hard-stops.** During the codex 160m regime, no codex author exhibits the per-author hard-stop signature (no author has multi-PR frozen-head clusters in the morgmart UNDECET sense). The codex SEXTET (starr-openai) is six PRs by one author, but starr-openai has not exhibited per-author hard-stop in any prior W17 tick. Yet the carrier produces zero events. This means the carrier-scope quiescence is operating at a level **above** any per-author hard-stop — possibly a shared external factor (CI capacity, review-queue saturation, organizational schedule) acting at the carrier-scope.

**(2) Crush's two-tick quiescence sits adjacent to a single-leg ardevd touch that produced no momentum.** The Add.347 ardevd #2801 fresh-open was a trivial-scope typo doc edit. Per the synth #91/#94/#97 family, single-leg author activity often catalyzes multi-leg follow-ups within the same author or by reviewer-driven sibling activity. Crush exhibits **zero such catalysis** — confirming that the carrier-scope quiescence regime is robust to within-window single-leg perturbations of trivial scope. Carrier-quiescence here behaves more like a low-energy attractor than a sum of per-author independent quiets.

## The carrier-quiescence predicate

A carrier exhibits the **multi-tick zero-event carrier-quiescence regime** iff:

1. Across ≥2 consecutive 50–60m ticks, all of the following equal zero: fresh-opens (any author including bots), merges, head-changes on any open PR within the carrier active-set.
2. Trivial bot updates (e.g., dependabot label-only, github-actions[bot] timestamp touches) without head-change are permitted (they do not break the regime).
3. The regime is **not** explained by a single dominant author's per-author hard-stop on a multi-PR cohort (i.e., the regime persists when no per-author hard-stop is concurrently active in that carrier).

Codex 160m and crush 110m both satisfy all three predicates this window.

## Falsifiable predictions

1. **(P-100.A)** If codex breaks carrier-quiescence within Add.350 (≥1 fresh-open from any author), the regime caps at 3 ticks and we never observe a 4-tick carrier-quiescence in W17. Prior 0.55.
2. **(P-100.B)** If crush extends to a 3rd consecutive tick of carrier-quiescence, the trivial-scope-single-leg-no-momentum hypothesis is reinforced; we should treat ardevd #2801 as a non-event for cross-tick prediction purposes. Prior 0.50.
3. **(P-100.C)** If a third carrier joins this regime (gemini-cli is the most likely candidate given its 1-tick partial quiescence in Add.349), the cardinality of compound carrier-quiescence reaches 3 — which would re-introduce the synth #680 V-shape behavior at higher cardinality. Prior 0.30.
4. **(P-100.D)** If the codex break-event is a fresh-open from a first-appearance-author rather than a velocity-rebound from the existing active-set (abhinav-oai, aibrahim-oai, starr-openai SEXTET, cconger), the regime-exit-pathway is **first-appearance-author injection** rather than **active-set velocity-rebound**, which mirrors the goose carrier-quiescence-exit via idosavion in ADDENDUM-348. Prior 0.45.

## Distinctness from prior synths

- **vs synth #680 (morgmart goose per-author hard-stop)** — synth-680 is **author-scope** (a single author's multi-PR cohort frozen). Synth #100 is **carrier-scope** (the whole carrier inactive regardless of author distribution). The two are demonstrated independent in ADDENDUM-348 (goose carrier-exit via idosavion while morgmart hard-stop continues).
- **vs synth #98 (bot-driven sub-10s n3 stale-pr mass close sweep)** — synth-98 captures **high-velocity** carrier activity (mass-close sweeps). Synth #100 captures the **inverse**: zero-velocity sustained.
- **vs synth #91 (single-author triplet self-merge metronome on disjoint surfaces)** — synth-91 is **per-author rhythm** at high velocity. Synth #100 is **per-carrier silence** at zero velocity.
- **vs the basin-metronome 50m exact-replication regime (Add.302–348)** — basin-metronome is about **inter-tick width consistency**, which is a meta-property of the dispatcher's snapshot cadence; synth #100 is about **intra-tick event count** at the carrier-scope, which is a property of upstream contributor behavior. The two regimes both broke in Add.349 (basin-metronome to 60m, codex carrier-quiescence extended; the coincidence is correlative not causal — codex was already 100m quiescent under the basin-metronome 50m baseline).

## Risk lens

- **Detector blindspot for carrier-scope regimes**: per-PR detectors (looking for sub-mode-1/2/3/4/5 signatures) inherently focus on event-presence patterns. A multi-tick zero-event regime is invisible to event-presence detectors and requires explicit zero-detection logic. Recommend adding a `carrier_zero_event_streak_ticks` counter to the digest schema.
- **Misinterpreting carrier-quiescence as health**: a quiet carrier is not a healthy carrier. Codex's 160m regime co-exists with multiple stalled OPENs (abhinav-oai #21152 3-tick stall, aibrahim-oai #20971 3-tick declared-sequence-dependent stall, starr-openai SEXTET 8-tick survival). Reviewers waiting for activity may interpret silence as deferred review attention rather than as a carrier-scope behavioral regime; recommend explicit operator dashboards for carrier-quiescence-streak.
- **Composition fallacy in cross-tick prediction**: predictions like P-348.C (codex velocity-rebound) priced the carrier-quiescence as a sum of per-author independents, leading to over-confident velocity-rebound priors that falsified twice in a row. Recalibration should treat carrier-quiescence as a self-sustaining attractor with its own escape-rate, not as a high-energy fluctuation in an independent per-author distribution.
