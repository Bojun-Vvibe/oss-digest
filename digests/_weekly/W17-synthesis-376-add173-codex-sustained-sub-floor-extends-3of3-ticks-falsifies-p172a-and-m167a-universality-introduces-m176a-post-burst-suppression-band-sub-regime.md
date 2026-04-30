# W17 synthesis #376 — Add.173 codex sustained-sub-floor extends to 3-of-3 ticks (Add.171 #20255 / Add.172 #20291 / Add.173 #20304 mzeng-openai) constituting first triple-sub-floor streak in Add.158-173 window — codex post-Add.168-sextuple emission profile is now 5/4/6/1/1/1 a six-tick monotonic-flat tail at sub-floor band — falsifies P-172.A two-tick recovery prediction and P-167.A shallow-gap-fast-recovery universality claim — introduces M-176.A post-burst-suppression-band sub-regime distinct from M-167.A and proposes codex as the W17 anchor instance with predicted Add.174 break or 4-tick sustained suppression as the diagnostic test

**Inputs**: synth #364 (M-167.A shallow-gap-fast-recovery universality claim, originally derived from cross-repo post-shallow-gap recovery patterns); synth #365 (M-168.A post-shallow-gap-over-recovery regime via backlog-flush, anchored on Add.168 codex sextuple #19229..#20271); ADDENDUM-171 / 172 / 173 (codex Add.171=1, Add.172=1, Add.173=1 — three consecutive sub-floor ticks); ADDENDUM-173 codex emission #20304 ebe602d0 02:45:52Z mzeng-openai `[plugins] Allow [redacted-vendor] curated plugins in tool_suggest`.

## Carry-prediction evaluation (M-167.A / codex sub-floor as of Add.173)

- **synth #364 M-167.A** (shallow-gap-fast-recovery as a cross-repo regime): **PARTIALLY FALSIFIED**. The regime survives at the population level (most repos do exhibit fast recovery from shallow gaps) but its **universality claim is falsified at the codex-specific instance**. codex post-Add.168 has NOT exhibited fast recovery — instead, it has exhibited a 6-tick monotonic-flat tail (5/4/6/1/1/1) at the sub-floor band.
- **P-171.A** (codex Add.172 emits 2-5 merges recovery): **FALSIFIED at Add.172**.
- **P-172.A** (codex Add.173 emits 2-5 merges recovery from sub-floor, 3-tick sub-floor highly anomalous): **FALSIFIED at Add.173**. The "highly anomalous" 3-tick sub-floor has now occurred — the prior was empirically observed.
- The two-tick deferred recovery-prediction streak (P-171.A + P-172.A both falsified) indicates the underlying shallow-gap-fast-recovery model is wrong for codex specifically.

## The codex post-burst trajectory (full table)

| Tick | codex n | Surface family | Author | Notes |
|------|---------|----------------|--------|-------|
| Add.168 | 6 | multi (sextuple #19229..#20271) | multi | Founding M-168.A instance |
| Add.169 | 5 | multi | multi | Post-burst sustained-emission |
| Add.170 | 4 | multi | multi | Gradual decline |
| Add.171 | 1 | codex-analytics | (Add.171 author) | First sub-floor tick |
| Add.172 | 1 | app-server / bespoke-events api-version-cleanup | pakrym-oai (established) | Second sub-floor (P-171.A falsified) |
| Add.173 | 1 | plugins / tool_suggest curated-vendor allow-list | mzeng-openai (NOVEL — extends author union 22→23) | **Third sub-floor (P-172.A falsified)** |

The trajectory exhibits two phases:
- **Phase A (Add.168-170)**: post-sextuple sustained-emission with gradual decline `6 → 5 → 4`. Mean emission 5.0/tick.
- **Phase B (Add.171-173)**: sub-floor monotonic-flat tail `1 → 1 → 1`. Mean emission 1.0/tick.

The phase transition is sharp (4 → 1, Δ = −3) at Add.170→171 boundary. Phase B has held flat for 3 consecutive ticks WITHOUT showing recovery — this contradicts the M-167.A model that would predict recovery within 1-2 ticks.

## Surface-family disjointness during sub-floor

The 3-tick sub-floor exhibits **3-of-3 disjoint surface families**:
- Add.171: codex-analytics
- Add.172: app-server / bespoke-events api-version cleanup
- Add.173: plugins / tool_suggest allow-list

No two consecutive sub-floor ticks share a surface family. This is structurally distinct from a "single-surface stalled-PR drip" pattern — it suggests codex is NOT bottlenecked on a single surface but rather is exhibiting **broad-band emission suppression**: the merge throughput is throttled across all surfaces simultaneously, not concentrated on one.

Author analysis during sub-floor: 3 distinct authors (Add.171 unspecified, Add.172 pakrym-oai established, Add.173 mzeng-openai novel) — author union expands by 1 over the 3-tick streak. The Add.173 novel-author extension is anomalous for a sub-floor regime (novel authors typically appear during expansion, not suppression), suggesting the sub-floor is NOT due to author-pool exhaustion.

## M-176.A definition (introduced)

**Post-burst-suppression-band sub-regime**: following a Tier-1 broad over-recovery instance (M-168.A founding-instance class, magnitude ≥6 across multi-author multi-surface), the originating repo enters a multi-tick (≥3) sub-floor emission band where:
- Per-tick emission is at the sub-floor (≤1 merge/tick).
- Emission persists across disjoint surface families (no single-surface bottleneck).
- Author diversity does NOT collapse (author-union may even expand).
- Phase transition into the band is sharp (≥3 magnitude drop in single tick).

codex Add.171-173 is the W17 anchor instance: post-Add.168-sextuple, 3-tick sub-floor, 3 disjoint surfaces, author-union +1 expansion, sharp 4→1 transition at Add.170→171.

The regime is FALSIFIED if:
- codex Add.174 emits ≥3 merges (would suggest 3-tick sub-floor was a transient depression, not a sustained band).
- codex Add.174-175 average emission is ≥2 merges/tick (would suggest gradual recovery not sustained suppression).
- Within Add.174-180 horizon, NO other repo exhibits a post-Tier-1-over-recovery sustained sub-floor band (single observation in W17, fails cross-repo universality).

The regime is CONFIRMED if:
- codex Add.174-175 sustains sub-floor emission (≤1/tick), extending the streak to 4-5 ticks.
- A second repo enters M-176.A after a Tier-1 over-recovery instance within Add.174-180.

## Relationship to M-175.A (synth #375) — divergent post-over-recovery trajectories

synth #375 introduced M-175.A (direct-amplifying back-to-back over-recovery) anchored on litellm Add.172→173 (`4 → 7`). synth #376 introduces M-176.A (post-burst sustained sub-floor band) anchored on codex Add.171-173 (`1, 1, 1` post `6, 5, 4`). These two regimes describe **opposite post-over-recovery trajectories**:

| Regime | Post-over-recovery shape | Anchor | Magnitude direction |
|--------|--------------------------|--------|---------------------|
| M-175.A | direct-amplifying back-to-back | litellm Add.172→173 (4→7) | INCREASING |
| M-176.A | sustained sub-floor band | codex Add.168→171-173 (6→...→1,1,1) | DECREASING / FLAT |
| M-173.A | recurrence with silence-separator | litellm Add.170-172 (3,0,4) | OSCILLATING |

The W17 over-recovery family now has **three distinct post-instance trajectories**, each with a single anchor instance. The next 3-tick horizon (Add.174-176) will provide diagnostic tests for all three regimes simultaneously.

## Falsifiable predictions

- **P-376.A**: codex Add.174 emits 0-2 merges (sub-floor sustained, M-176.A confirmation path); >50% prob (downgraded from prior recovery-predictions given two-tick falsification streak).
- **P-376.B**: codex Add.174-175 cumulative emission is ≤4 merges (suppression-band sustained); >55% prob.
- **P-376.C**: If codex Add.174 emits ≥3 merges, the surface family is NOVEL vs Add.171-173 surfaces (analytics / app-server / plugins), supporting broad-band-recovery rather than single-surface-bottleneck-resolution; >55% prob conditional.
- **P-376.D**: codex Add.174 author is NOT mzeng-openai (single-tick author-anchor non-recurrence, parallels stuxf Add.172→173 = 3→0 and kitlangton Add.171→172 = 3→0); >65% prob.
- **P-376.E**: Within Add.174-180 horizon, NO other repo enters a 3-tick sub-floor band immediately following a Tier-1 over-recovery instance — codex remains the W17 anchor instance for M-176.A; >50% prob (single-observation hypothesis).
- **P-376.F**: codex author-union at Add.174 close is 23 or 24 (Add.173 hit 23 with mzeng-openai; novel-author-during-suppression continues at low rate); >55% prob.
- **P-376.G**: When codex eventually breaks the sub-floor band (Add.174 OR later), the break magnitude is ≤4 merges (post-suppression breaks are NOT M-168.A re-instances per "burst-then-suppress" anti-pattern hypothesis); >55% prob.
- **P-376.H**: The codex Add.171-173 sub-floor regime DOES NOT extend to 5-of-5 ticks (Add.171-175 sustained sub-floor would be unprecedented in the Add.158-173 window); >60% prob.
- **P-376.I**: M-167.A shallow-gap-fast-recovery regime score at Add.176 horizon is ≤4-of-6 (universality claim continues weakening with codex counter-instance); >55% prob.
- **P-376.J**: Within Add.174-176, the simultaneous diagnostic resolution of M-175.A (litellm crash predicted in P-375.A) and M-176.A (codex break predicted in P-376.A) yields at least one regime confirmation and at most one regime falsification; >55% prob (joint probability of mixed outcome given individual probabilities).
