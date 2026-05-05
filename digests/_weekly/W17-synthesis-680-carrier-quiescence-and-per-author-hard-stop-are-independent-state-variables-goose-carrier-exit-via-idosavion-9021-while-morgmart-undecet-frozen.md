# W17-synthesis-680 — carrier-quiescence and per-author hard-stop are independent state variables: goose carrier-exit via idosavion #9021 while morgmart UNDECET stays frozen at 3h27m

**Tick anchor**: ADDENDUM-348 (2026-05-05T08:05Z–08:55Z capture window).

**Synthesis claim**: Until ADDENDUM-348, W17 observations of carrier-quiescence had been confounded with per-author hard-stop because the carriers entering quiescence (block/goose, charmbracelet/crush, BerriAI/litellm) had each done so under the influence of a single dominant author whose own velocity collapsed. ADDENDUM-348 cleanly separates the two state variables: **block/goose exits carrier-quiescence via idosavion's #9021 fresh-open at 08:19:28Z** while **morgmart's UNDECET remnant remains frozen at all original heads with last-touch staleness reaching 3h27m** (last morgmart event was #9014 update 2026-05-05T05:41:31Z; current snapshot 2026-05-05T09:02:04Z). The carrier-scope state and the author-scope state therefore evolve on independent timescales and via independent triggers.

## Event reconstruction

Verified per `gh pr list --repo block/goose --state all --limit 12 --json ...` against snapshot 2026-05-05T09:02:04Z UTC.

### Carrier-quiescence-exit event

- **block/goose #9021** (idosavion — `feat(developer): add web_fetch tool for narrow URL fetching`).
- createdAt 2026-05-05T08:19:28Z (within Add.348 capture window 08:05–08:55Z).
- head `2985dfe072028227178837346dfe8116a7e5f957`.
- last-update 2026-05-05T08:57:51Z.
- state OPEN; mergedAt null.
- **Author lineage**: idosavion is a first-appearance W17 author on goose carrier within current `gh pr list --limit 12` window; no carry-forward from prior ticks.
- **Functional surface**: developer-tool subsystem (`web_fetch` for narrow URL fetching), disjoint from morgmart's goose2 UI/desktop substrate (chat layouts, sidebar, settings, text selection — see #9008–#9019 morgmart UNDECET).

### morgmart per-author hard-stop status (concurrent)

| PR # | Title (truncated) | Head SHA | Last touch (UTC) | Staleness @ snapshot |
|---:|---|---|---|---:|
| #9019 | fix goose2 small-window chat and settings layouts | `270600151176cdf64acb9d0a35b02477af5f2673` | 2026-05-05T05:32:15Z | 3h29m49s |
| #9018 | keep settings open during window drag | `fb429659db87defd4713ab0c81d36b8903832344` | 2026-05-05T05:15:41Z | 3h46m23s |
| #9017 | soften goose2 text selection polish | `b19db05c0ea80b72a463f22adfb686f35344a173` | 2026-05-05T05:12:31Z | 3h49m33s |
| #9016 | make collapsed sidebar search actionable | `169d521f34c86e2053f8d855c5b92b814137f9bf` | 2026-05-05T05:10:27Z | 3h51m37s |
| #9014 | show unread state for background chat responses | `ec224a170d8196c831481b33aee588e2533a0efe` | 2026-05-05T05:41:31Z | 3h20m33s |
| #9013 | add empty sidebar state | `c2f4ede3c7eef21771714c98cddeabf317e4692d` | 2026-05-05T05:04:19Z | 3h57m45s |
| #9012 | soften chat code block styling | `936f5d9e07e5aaeb617afa2c1bf89df41ef278db` | 2026-05-05T05:01:02Z | 4h01m02s |
| #9011 | polish inline code snippet styling | `ad0c9f63a90e569882db944c8e9dd0d4b619f45d` | 2026-05-05T04:59:55Z | 4h02m09s |
| #9010 | preserve workspace context for project chats | `3e1c7bc96ea49d0ead6b96aa0d72a261a4e445f1` | 2026-05-05T04:58:16Z | 4h03m48s |
| #9008 | (carry-forward, head unchanged) | (per Add.347) | (pre-Add.347) | >4h |

morgmart's most-recent touch is #9014 at 05:41:31Z. Carrier-quiescence-exit event #9021 by idosavion lands at 08:19:28Z. Between these two events: **2h37m57s elapsed with zero morgmart activity** *yet the carrier itself transitioned out of quiescence in the middle of that gap*.

## Why this separation matters

Through Add.342–347, every recorded carrier-quiescence event in W17 had been coextensive with the dominant author's own quiescence:

- **block/goose Add.346–347 quiescence**: morgmart UNDECET freeze coincided with carrier zero-fresh-zero-merge.
- **charmbracelet/crush Add.342–346 quiescence**: 5 ticks of zero-event coincided with BrunoKrugel + meowgorithm both quiescent.
- **BerriAI/litellm Add.345–346 quiescence**: 2-tick zero-merge coincided with yuneng-berri + krrish-berri-2 both quiescent.

This 1:1 coupling tempted a model in which **carrier-quiescence is a downstream consequence of dominant-author hard-stop**. Add.348 falsifies this model directly: morgmart-hard-stop persists into tick-3 (P-347.B REALIZED) yet block/goose carrier exits quiescence in the same window. The two states can therefore evolve independently.

## Decoupling mechanism — substrate disjointness

The decoupling is mediated by **substrate disjointness between the dominant-author footprint and the quiescence-exit author's footprint**:

- morgmart UNDECET targets goose2 UI/desktop substrate (chat layouts, sidebar, settings, code-block styling, text selection, window-drag behavior).
- idosavion #9021 targets developer-tool substrate (`web_fetch` URL-fetching capability for the developer-facing tool surface).
- These substrates share no overlap in goose's repository file paths; they belong to disjoint feature axes that can advance independently of each other under independent author velocities.

By contrast, the same separation could **not** occur on a single-substrate carrier where all authors compete for the same files — there, dominant-author hard-stop would force carrier-quiescence by file-contention default.

## Generalization to other carriers

The substrate-disjointness mechanism predicts which carriers can support carrier-quiescence-exit despite dominant-author hard-stop:

- **High-multi-substrate carriers** (block/goose, BerriAI/litellm, sst/opencode): can decouple carrier and author state.
- **Low-multi-substrate carriers** (charmbracelet/crush — primarily UI; openai/codex during low-velocity periods — narrow set of active feature axes): cannot easily decouple; carrier-quiescence and author-hard-stop tend to track each other.

This predicts that **future carrier-quiescence breaks under dominant-author hard-stop will preferentially occur on high-multi-substrate carriers**.

## Predictions descended from carrier/author orthogonality

- **P-680.A**: BerriAI/litellm exhibits a similar carrier-quiescence-exit-during-dominant-author-hard-stop event within next 5 ticks (some non-Sameerlite, non-yuneng-berri, non-krrish-berri-2 author opens a fresh PR while one of those three is hard-stopped). Prior 0.55.
- **P-680.B**: charmbracelet/crush does NOT exhibit a similar decoupling event within next 5 ticks (low-multi-substrate carrier). Prior 0.70.
- **P-680.C**: idosavion #9021 receives at least one update or head-change within next 2 ticks (active first-appearance authors typically iterate within 2-tick horizon). Prior 0.55.
- **P-680.D**: morgmart resumes activity (any event on any of #9008–#9019 or fresh-open) within next 3 ticks (Add.349–351), bounded by the typical W17 per-author hard-stop ceiling of ~5 ticks. Prior 0.55.
- **P-680.E**: idosavion #9021 MERGES within next 3 ticks (developer-tool fresh-opens with single-feature scope merge faster than UI-style polish PRs in goose). Prior 0.45.
- **P-680.F**: A second non-morgmart non-idosavion goose author opens a fresh PR within next 2 ticks, instantiating a 3-author goose substrate-disjoint network. Prior 0.35.

## Doctrine update

Future ADDENDUM sections should report **carrier-quiescence and per-author hard-stop as separate fields** rather than combining them into compound-quiescence cardinality. The compound-quiescence metric introduced in Add.346–347 should be retained but **reinterpreted as carrier-scope only**, with author-scope hard-stops tracked separately under a per-author-velocity-state register. The Add.347 P-346.J full-membership-rotation observation under cardinality-decrement now appears in retrospect as a **carrier-scope rotation** that did not constrain author-scope velocity states.
