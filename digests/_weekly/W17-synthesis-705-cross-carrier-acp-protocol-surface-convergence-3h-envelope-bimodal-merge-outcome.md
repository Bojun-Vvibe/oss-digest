# W17 Synthesis #705 — Cross-carrier ACP/SACP protocol-surface convergence: 4 PRs across 2 carriers in a single tick on a shared agent-control-protocol surface, with one merge anchor and one merge-failure case bookending three open candidates

**Anchor window**: 2026-05-05T17:58:36Z (anomalyco/opencode #25901 open) → 2026-05-05T21:11:20Z (block/goose #9023 merged). **Wall-clock envelope: 3h12m44s.**
**Carriers in convergence**: `anomalyco/opencode`, `block/goose`.
**Parent synth lineage**: extends W17-synth-101 (cross-carrier near-simultaneous infrastructure substrate merge cluster, 48s envelope) and W17-synth-100 (cross-carrier ACP-sACP session-event protocol quartet across three carriers). This synth is structurally distinct from both: the envelope here is **3h+, not seconds**, and the surface is **agent-control-protocol IO semantics**, not session events.

## Why this is distinct from #100 and #101

- **#100** captured a quartet across **3 carriers** (opencode, codex, goose) on session-event protocol (sub-surfaces: session resume, event ordering, cancel semantics) inside a sub-hour envelope.
- **#101** (cross-carrier 48s infrastructure substrate merge cluster) captured **simultaneity** as the discriminating axis — four carrier-distinct merges inside 48 wall-clock seconds.
- **#705** captures a **3h12m envelope** with a much narrower surface (specifically the ACP IO/lifecycle layer), where the merge-vs-iterate split is the discriminating axis: of 4 PRs, **1 merged**, **2 open-new**, **1 closed-no-merge**. The envelope is too wide to be coincidence-of-cron and too narrow to be week-scale aggregate; it is consistent with a **shared external trigger** (a recent ACP spec revision or a shared-dependency RFC).

## The 4-member convergence

| PR | Repo | Author | Open | Status @ window close | Surface |
|---|---|---|---|---|---|
| [anomalyco/opencode#25901](https://github.com/anomalyco/opencode/pull/25901) | anomalyco/opencode | truenorth-lj | 2026-05-05T17:58:36Z | **CLOSED 20:25:55Z** (no merge) | `fix(acp): return stopReason: cancelled (not end_turn) on user cancel` — return-value semantics on user-initiated cancel |
| [block/goose#9023](https://github.com/block/goose/pull/9023) | block/goose | jh-block | 2026-05-05T13:18:35Z (open before window) | **MERGED 21:11:20Z** | `fix(acp): synchronously reap ACP child to avoid SIGCHLD race` — child-process lifecycle / signal handling |
| [block/goose#9030](https://github.com/block/goose/pull/9030) | block/goose | kalvinnchau | 2026-05-05T18:55:02Z | **OPEN** (last update 20:38:59Z) | `feat: move goose2 provider catalog behind ACP layer` — ACP layer as a provider-catalog indirection boundary |
| [block/goose#9034](https://github.com/block/goose/pull/9034) | block/goose | alexhancock | 2026-05-05T20:02:28Z | **OPEN** (last update 20:16:07Z) | `feat: ACP streamable http spec compliance` — wire-protocol HTTP streaming compliance |

**SHA register at window close**:
- opencode #25901 → `f9502791b16dd77e7488c867352834a0579b3e09` (frozen at close)
- goose #9023 → `1d61323844d441792bad653c1a06c3f0589692ce` (frozen at merge)
- goose #9030 → `6c182759ab6cdc8e2b4b909606236f2d4343afc3`
- goose #9034 → `289ae524573e06e941b0e281e8ad8822557e7c5e`

## What the convergence tells us that #100 and #101 could not

**(a) The ACP surface fragments differently per carrier.** opencode treats ACP as an **IO-return-shape contract** (`stopReason` enum discipline). goose treats ACP as a **process-lifecycle + transport** layer (SIGCHLD races, HTTP streaming compliance, provider-catalog routing). The convergence is therefore not a copy-paste cross-pollination — each carrier has independent, **non-overlapping** subsystems that happen to share a protocol-name token. This rules out a shared-fix migration pattern (W17-synth-81 cross-carrier author handoff).

**(b) Merge outcome is bimodal across the 4 members.** The merged member is a **race-condition fix** (#9023, SIGCHLD sync reap); the closed-no-merge member is a **return-value semantics** PR (#25901). The two open members are both **feature-additions** (provider-catalog behind ACP, streamable HTTP compliance). This pattern — merge-now for narrow correctness, open-pending for wide-surface feature, close-no-merge for semantic-debate — recurs across the corpus (W17-synth-100 lifespan-bimodal merge inversion was a single-carrier instance; #705 generalizes it to **cross-carrier on shared protocol surface**).

**(c) Surface fragmentation predicts independent maintainer decisions.** opencode #25901 closed without merge inside 2h27m of open (truenorth-lj had no follow-up PR within the window — falsifies the iterative-respin path). goose's three ACP PRs proceeded **independently** (no joint review event observed): #9023 merged, #9030 and #9034 open at close. The cross-carrier alignment is therefore a **theme-level signal**, not a coordination signal.

**(d) Author identity does not cross carriers.** truenorth-lj (opencode), jh-block (goose), kalvinnchau (goose), alexhancock (goose) — 4 distinct authors, no overlap. The convergence is **content-anchored**, not author-anchored. Compare W17-synth-101 (`cross-repo same-day anchor-author dual monopoly`) where a single author drove the convergence: opposite shape.

## Convergence predicate (formal)

A cross-carrier protocol-surface convergence under #705 requires:
1. ≥2 distinct carriers,
2. ≥3 PRs total,
3. All PRs cite the same protocol token (here: literal substring `acp` or `ACP`) in title or body **at the surface-name level** (not as a tangential mention),
4. Wall-clock envelope **>1h and <12h** (filters out coincidence-of-cron at one end and week-scale aggregate at the other),
5. At least one merge AND at least one open-or-closed-no-merge — i.e. **non-degenerate outcome distribution**.

The 4-member set above satisfies all five.

## Falsifiable predictions

- **P-705.A** — Surface fragmentation persists: across the next 4 ticks (Add.366..369), no PR in either carrier merges code that touches BOTH the opencode `stopReason` enum AND the goose ACP child-reap path. Falsified iff a single PR (in either carrier) lands a change touching both surfaces.
- **P-705.B** — Open-feature members merge inside 7 days: goose #9030 and goose #9034 either merge or close-no-merge by Add.365+7d (i.e. ~2026-05-12). If both are still open at that horizon, the open-feature ACP work is **structurally stalled** and the convergence-as-coincidence interpretation strengthens.
- **P-705.C** — Trigger localization: if an ACP-spec RFC or upstream protocol revision is referenced in **at least one** of #9030, #9034, #25901's review comments within the next 2 ticks, P-705.C confirms an **external-trigger** explanation; absence of such reference across the next 4 ticks supports a **convergent-evolution** explanation (independent maintainers reaching the same protocol surface for unrelated reasons).

## Why this matters for the W17 taxonomy

#705 is the first **theme-anchored, cross-carrier, multi-hour envelope** synth promoted in W17 where the discriminating axis is **outcome-distribution non-degeneracy** rather than wall-clock simultaneity (#101) or session-event sub-surface (#100). It establishes a third axis for cross-carrier convergence: **protocol-surface-name coherence over multi-hour envelopes with bimodal merge outcomes**. Future ticks should test for ACP-surface convergence at Δ ≥ 1 day envelopes (W17-synth-103 jbccs precedent for promoted recurring taxon needs ≥3 sightings; #705 is sighting #1 at this envelope scale).
