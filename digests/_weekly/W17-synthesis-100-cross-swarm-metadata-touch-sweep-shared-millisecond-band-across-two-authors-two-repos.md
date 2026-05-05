# W17 Synthesis #100 — Cross-swarm metadata-touch sweep with shared millisecond-band timestamp clustering across two unrelated authors in two unrelated repos (sub-class I formalization)

**Anchor window:** 2026-05-05T18:44:55Z → 18:50:21Z (5m26s).
**Anchor repos:** block/goose AND BerriAI/litellm (cross-carrier).
**Anchor actors:** `morgmart` (goose) AND `Beandon13` (litellm).
**Parent context:** ADDENDUM-363 sub-class I observation; sub-class H from ADDENDUM-362 / synth-703.

## Why this is distinct from prior synths

Sub-class E (introduced earlier in W17) named **mass-touch on heterogeneous existing PRs within a single repo**. Sub-class G (synth-701) named **mass-CREATION typo swarm by a single author within a single repo**. Sub-class H (synth-703) named **in-place head-mutation of a sub-class G swarm without N-extension**. All three are **single-repo, single-author** events.

Synth #100 captures the **first observed cross-repo, cross-author** swarm-touch coincidence: two **independently-owned** swarms — morgmart's 9-member goose swarm and Beandon13's 10-member litellm swarm — receive metadata or head-mutation touches inside the **same 5m26s wall-clock band**. The unit of analysis is no longer "a swarm in a repo" but **"a wall-clock band across the carrier ecosystem"**.

## The sweep window members

| Repo | PR | Author | Head at sweep | UpdatedAt during sweep | Touch type |
|---|---|---|---|---|---|
| block/goose | #9011 | morgmart | `ad0c9f63a90e` | 18:44:55Z | metadata-only (head frozen) |
| block/goose | #9012 | morgmart | `936f5d9e07e5` | 18:44:56Z | metadata-only |
| block/goose | #9013 | morgmart | `c2f4ede3c7ee` | 18:44:57Z | metadata-only |
| block/goose | #9014 | morgmart | `ec224a170d81` | 18:45:05Z | metadata-only |
| block/goose | #9016 | morgmart | `169d521f34c8` | 18:45:06Z | metadata-only |
| block/goose | #9017 | morgmart | `b19db05c0ea8` | 18:45:07Z | metadata-only |
| block/goose | #9018 | morgmart | `fb429659db87` | 18:45:08Z | metadata-only |
| BerriAI/litellm | #27203 | Beandon13 | `a2370b6b04dc` | 18:46:15Z | **head-mutation** (sub-class H′) |
| BerriAI/litellm | #27209 | Beandon13 | `cbd1122cc2fe` | 18:46:27Z | **head-mutation** (sub-class H′) |
| BerriAI/litellm | #27206 | Beandon13 | `0f401398a345` | 18:50:21Z | **head-mutation** (sub-class H′) |
| block/goose | #9019 | morgmart | `f6d15bd91b7d` | 18:50:18Z | metadata-only (sweep tail) |

**11 touches across 2 repos and 2 authors in 5m26s.** First touch and last touch are 5m26s apart. The morgmart sweep brackets the Beandon13 mutation sequence.

## Internal sub-structure: the 1-second-step quartet on goose

Within the morgmart sweep, four PRs receive their second-touch updatedAt at **exactly 1-second-stepped wall-clock times**:
- #9014 → 18:45:05Z
- #9016 → 18:45:06Z
- #9017 → 18:45:07Z
- #9018 → 18:45:08Z

Note: PR-number step is +2, +1, +1 (not uniform), but **wall-clock step is exactly +1s repeated three times**. This signature is **incompatible with human authorship** — a human refreshing draft PRs would not produce 1-second-stepped second-touches in PR-number order with sub-second timing precision. The signature **is** compatible with a CI/bot iterating the active PR set in PR-number order with a `sleep 1` between API calls (the most common GitHub Actions / labeler-bot pattern).

The leading-edge triplet #9011/#9012/#9013 at 18:44:55Z/56Z/57Z extends the same 1-second-step pattern, with a **7-second pause** between #9013 and #9014 — consistent with a paginated bot fetching the next page of active PRs after rate-limit waiting.

The flank PR #9019 at 18:50:18Z arrives **5m21s after #9011** and breaks the quartet structure — this is **not** part of the same bot pass, but a **second pass** whose timing happens to coincide with the Beandon13 #27206 mutation at 18:50:21Z (Δ=3s).

## The cross-carrier coincidence

Two independent events at 18:50:18Z (goose, morgmart bot-pass-2) and 18:50:21Z (litellm, Beandon13 head-mutation) are separated by **3 seconds**. Under a uniform-arrival null model with 11 touches uniformly distributed across the [18:44:55Z, 18:50:21Z] window (T = 326s):

P(any pair within ≤3s | 11 touches in 326s) ≈ 1 − (1 − 6/326)^C(11,2) ≈ 1 − (0.982)⁵⁵ ≈ **63%**

So the 3-second coincidence at the **window endpoints** is **not statistically significant in isolation**. What **is** significant is the **ordered structure**: the morgmart bot-sweep tail and the Beandon13 manual-mutation tail align at the **same wall-clock instant**, suggesting either (a) both are responding to the same **carrier-side trigger** (e.g., a GitHub-wide event-bus glitch, a queued-webhook flush, a notification-batch fan-out), or (b) the two "manual" Beandon13 mutations are **also bot-driven** — possibly by Beandon13's local automation that polls the swarm and force-pushes refreshes on a similar schedule.

## Formal definition of sub-class I

A touch event qualifies as **sub-class I** when:

1. There exist two PR sets S₁ ⊂ R₁ (author A₁) and S₂ ⊂ R₂ (author A₂) where R₁ ≠ R₂ and A₁ ≠ A₂.
2. Each set S_i has |S_i| ≥ 5 PRs touched (any combination of head-mutation and metadata-only).
3. The union of all touch updatedAt timestamps fits inside a wall-clock window of length ≤ 6 minutes.
4. At least one PR-pair from (S₁ × S₂) has Δ(updatedAt) ≤ 10 seconds.

For the Add.363 instance: |S₁|=9 (morgmart goose), |S₂|=3 head-mutated (Beandon13 litellm; or 11 if all swarm members with any second-touch are counted), window = 5m26s ≤ 6m, closest cross-set pair Δ = 3s ≤ 10s → **all four predicates PASS**.

## Falsifiable predictions

1. **P-100.A** (recurrence): If a second sub-class I event is observed within the next 7 days under the same predicates, sub-class I is a **stable structural feature** of the W17/W18 carrier ecosystem and should be promoted to top-level taxon. ETA: 7 days from anchor.
2. **P-100.B** (bot-driven hypothesis): If the morgmart 1-second-step quartet recurs on the same PR set (#9014/#9016/#9017/#9018) within the next 6 hours with the same step magnitude, the signature is **certainly bot-driven** and the responsible bot can be identified by cross-referencing the carrier's webhook log. ETA: 6 hours.
3. **P-100.C** (Beandon13 bot-vs-human): If the next Beandon13 head-mutation lands at a wall-clock instant within ±5s of any morgmart sweep-tail touch, Beandon13's mutations are **co-triggered by the same carrier-event** as morgmart's sweep — falsifying the manual-iteration-on-feedback hypothesis. ETA: tick+1.
4. **P-100.D** (cross-carrier pair size): If sub-class I recurs with |S_i| ≥ 8 on **both** sides (currently 9 vs 3-or-11 depending on counting rule), the event scales superlinearly and the 6-minute window predicate may need to expand. ETA: open.

## Distinctness from prior synths

- **vs synth-701** (sub-class G mass-CREATION): G is single-repo creation; #100 is cross-repo touching of **already-existing** swarms. No new PR numbers are consumed in #100's anchor window — every touch is on a pre-existing PR.
- **vs synth-703** (sub-class H head-mutation of G swarm): H is the local follow-up of one swarm by one author; #100 is the cross-swarm cross-author **co-occurrence** of an H event with an unrelated mass-touch sweep. H is the ingredient; I is the assembly.
- **vs synth-704** (concentration-leader rotation): synth-704 measured **author-concentration trajectories** repo-by-repo; #100 measures the **wall-clock co-occurrence** of touch activity across repos. #704's lens is structural-share; #100's lens is temporal-coincidence. Both can be active simultaneously (and in this anchor window, they are: morgmart's 60% concentration on goose **co-occurs** with the Beandon13 H′ event on litellm, so synth-100 gives the temporal explanation for synth-704's structural observation).
- **vs synth-696/698** (wave-2 surface-scattering): wave-2 is a **two-tick** structural reorganization across many authors and surfaces. #100 is a **sub-tick** wall-clock-band coincidence between two narrow author-owned swarms. Different time-scales, different aggregation units.

## Risk lens

- **Carrier-event-bus opacity**: if sub-class I is being driven by a shared carrier-side event (P-100.B/C), the event itself is invisible to PR-API observers and can only be inferred from these wall-clock coincidences. A monitoring agent that only watches PR `updatedAt` timestamps will see correlated noise without being able to attribute it. Recommend instrumenting for **cross-repo updatedAt-band detection** as a first-class signal in the dispatcher.
- **False-positive review-attention attribution**: if sub-class I is bot-driven (P-100.B), a reviewer who treats the morgmart sweep or the Beandon13 H′ mutation as "active iteration that needs attention" will allocate review bandwidth to **non-events**. The dispatcher should down-weight metadata-only touches that fall inside detected sub-class I bands.
- **Author-bot identity confusion**: if Beandon13's mutations are also bot-driven (P-100.C), the per-author concentration metrics in synth-704 conflate human contribution with bot-orchestrated PR maintenance. A future refinement should split per-author touches into (human-create, human-iterate, bot-iterate) before computing concentration.

## What this synth does NOT claim

- Does **not** claim the morgmart sweep and the Beandon13 H′ mutation are **causally** linked. The claim is **temporal co-occurrence** inside a 6-minute wall-clock band with one ≤3-second cross-set pair, which is structurally distinguishable from prior single-repo events.
- Does **not** identify the bot responsible for the morgmart 1-second-step quartet. The bot signature is named; identification requires webhook-log access.
- Does **not** assert that all 8 frozen-head morgmart members are part of the **same** sweep as the Beandon13 mutations — the claim is that they fit inside the **same wall-clock window**, with a **second-pass tail event** on goose (#9019 at 18:50:18Z) aligning to 3s of the litellm tail (#27206 at 18:50:21Z).

## PR citations (all from the anchor window)

block/goose: #9011, #9012, #9013, #9014, #9016, #9017, #9018, #9019 (morgmart sweep, 8 explicitly cited; #9010 is sweep-flank straggler at 19:08:28Z, outside the 6-min window).

BerriAI/litellm: #27203, #27206, #27209 (Beandon13 H′ mutation triplet on arithmetic-progression PR-number indices, all inside the anchor window).

Total: 11 PRs explicitly cited from the anchor window across 2 carriers and 2 authors.
