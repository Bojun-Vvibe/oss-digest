# W17-Synthesis #436 — stuxf as Cross-Window Dominant-Author Thematic-Anchor at litellm Security-Hardening Surface with Cumulative 7-PR Cohort Across 4 Ticks (Add.196-Add.198 + Add.203) and Bimodal Cohort-Composition Co-Occurrence Within a Single Tick at Add.203 (Synth #423 Same-Author-Thematic-Uniform + Synth #434 Fresh-Author-Disjoint Modes Collapsed Into One Tick)

**Class**: Cross-repo author overlap (negative — no cross-repo recurrence) + thematic anchor recurrence (positive — security-hardening as sustained intra-repo anchor) + bimodal cohort-composition co-occurrence (novel motif).
**Anchor ticks**: Add.196 (stuxf litellm quartet onset), Add.197 (stuxf litellm doublet sustain), Add.198 (stuxf litellm singleton tail-rest), Add.202 (litellm silence-break by AlanWYChen+Michael-RZ-Berri all-fresh triplet), **Add.203 (stuxf-triplet + AlanWYChen-singleton bimodal co-occurrence)** — 8-tick comparative span.
**Status**: Establishes the **bimodal cohort-composition co-occurrence within a single tick** as a novel motif class (synth #436); decisively falsifies synth #434 P-434.A author-pool-rotation hypothesis at n=1 horizon; refines synth #423 stuxf-class same-author-thematic-uniform sub-mode by demonstrating it can co-occur with synth #434 fresh-disjoint sub-mode in the same tick rather than alternating across ticks.

## 1. The stuxf Cross-Window Recurrence at litellm

stuxf is the **single dominant-author at litellm** within the visible Add.196-Add.203 window with the following emission profile:

| Tick | stuxf PRs at litellm | SHAs | Surfaces |
|------|----------------------|-------|----------|
| Add.196 | #26859, #26854, #26843, #26840 (quartet) | per Add.196 — security-hardening | proxy/UI/security-hardening 4-PR thematic-uniform series |
| Add.197 | #26862, #26851 (doublet, paired with yassin-berriai/Michael-RZ-Berri) | per Add.197 | continued security-hardening at proxy + LiteLLM-internal subsystems |
| Add.198 | #26849 (singleton tail) | per Add.198 | security-hardening tail-rest |
| Add.199-Add.201 | (silent, n=3) | — | — |
| Add.202 | (silent, n=4) | — | — |
| Add.203 | #26815, #26827, #26835 (triplet) | `15b73868`, `bdcc2385`, `71d50159` | passthrough-auth-gate / proxy-asset-endpoint / CLI-SSO-session — all security-hardening |

**Cumulative stuxf cohort at litellm across the visible window**: 4 + 2 + 1 + 0 + 0 + 0 + 0 + 3 = **10 PRs over 4 active ticks** spanning ~6h cross-tick window (Add.196 onset 18:40Z 2026-04-30 → Add.203 close 00:12:48Z 2026-05-01). Within this 10-PR cohort, the surface-overlap-coefficient at the security-hardening anchor is **1.000 across all visible PRs that are individually verifiable** (the Add.196 quartet is per-Addendum classified as security-hardening; the Add.203 triplet is verified per M-203.D as security-hardening; the Add.197/Add.198 stuxf PRs are partially classified per the addenda but consistent with the security-hardening anchor at proxy-UI/asset-endpoint sub-domains).

## 2. The Cross-Repo Author-Overlap Negative Result

Comparative analysis of authors across the 6 tracked repos at Add.196-Add.203 yields the following author-set per repo (where verifiable):

| Repo | Authors at Add.196-Add.203 (sample) |
|------|-------------------------------------|
| opencode | rekram1-node, kitlangton, Sewer56 (per Add.201, Add.202) |
| codex | pakrym-oai, khoi-oai, abhinav-oai, celia-oai, iceweasel-oai, owenlin0, mzeng-openai, alexsong-oai, xl-openai, wiltzius-openai, akshaynathan, xli-oai, maja-openai (per Add.196-Add.202) |
| litellm | stuxf, yassin-berriai, Michael-RZ-Berri, AlanWYChen (per Add.196-Add.203) |
| gemini-cli | cocosheng-g, jkcinouye, gemini-cli-robot, sahilkirad, devr0306, Jwhyee, gundermanc, Adib234, app/gemini-cli, martin-hsu-test (per Add.196-Add.202) |
| qwen-code | (silent across Add.191-Add.203, last seen yiliang114 #3771 at Add.190) |
| goose | jamadeo (Add.193), kalvinnchau (Add.201) |

Pairwise author-set intersection across repo-pairs at Add.196-Add.203 = **empty for all pairs** — no author has emitted in two distinct repos within the visible 8-tick window. This is the **cross-repo author-overlap negative result**: at the W17 visible window scale, contributors are strictly partitioned by repo (no cross-repo individuals).

This negative result **falsifies a candidate hypothesis** that may have been implicit in synth #427 (cross-window thematic-anchor re-emergence): the plugin-anchor cross-repo trajectory (Add.196 codex xl-openai → Add.201 opencode rekram1-node → Add.202 codex xli-oai) is **NOT** carried by the same individual; it is a **thematic-anchor without author-anchor** — different authors at different repos converge on the same subsystem topic independently. The cross-repo coupling is therefore at the **subsystem-topic axis only**, not at the author axis.

## 3. The Bimodal Cohort-Composition Co-Occurrence at Add.203 (Novel Motif)

Synth #423 (Add.196-Add.198) framed the stuxf-class same-author-thematic-uniform sub-mode at litellm. Synth #434 (Add.202) framed the **dual** all-fresh-author-disjoint-surface sub-mode at litellm. The two were initially modeled as **alternating sub-modes** of a bimodal regime — the stability-class-A bursty-CV at synth #428 was re-framed by synth #434 as a **bimodal cohort-composition oscillation** with the two sub-modes alternating across ticks at near-equal frequency.

**Add.203 falsifies the alternation framing**: the stuxf-triplet (#26815, #26827, #26835) and the AlanWYChen-singleton (#26942) **co-occur within a single tick** (Add.203 capture window 23:47:28Z 2026-04-30 → 00:12:48Z 2026-05-01). The Add.203 litellm cohort is therefore a **bimodal-collapsed-into-one-tick composite**:

- 3 stuxf PRs: same-author-thematic-uniform sub-mode at security-hardening (synth #423 motif recurs)
- 1 AlanWYChen PR: fresh-author-non-recurrent sub-mode at testing/integration (synth #434 motif sustains at n=1)

Surface-overlap-coefficient within the Add.203 litellm cohort = **0.75** (3 of 4 PRs in security-hardening surface; 1 PR in testing-integration surface). This is **distinct from both** the synth #423 surface-overlap=1.000 (uniform) and the synth #434 surface-overlap=0.000 (tri-disjoint). The Add.203 cohort instantiates a **third sub-mode**: bimodal-co-occurrence with **dominant-author surface-coherence + minority-fresh-author surface-disjoint**.

## 4. Comparison Across the Three sub-Modes

| Property | synth #423 (Add.196-Add.198 stuxf-uniform) | synth #434 (Add.202 fresh-disjoint) | **synth #436 (Add.203 bimodal-co-occurrence)** |
|----------|--------------------------------------------|---------------------------------------|-----------------------------------------------|
| Author composition | single-author (stuxf) | multi-author (AlanWYChen + Michael-RZ-Berri, both fresh) | **multi-author (stuxf-recurrent + AlanWYChen-fresh)** |
| Author-fresh status | recurrent | both fresh-debut | **mixed (3 recurrent + 1 fresh)** |
| Surface composition | single-theme (security-hardening) | tri-disjoint (testing/CI-meta/subprocess) | **bimodal (security-hardening 3-of-4 + testing 1-of-4)** |
| Tick span | 2 ticks (cross-tick stacked) | 1 tick (intra-tick) | **1 tick (intra-tick composite)** |
| Cohort cardinality | 6 PRs across 2 ticks | 3 PRs in 1 tick | **4 PRs in 1 tick** |
| Surface-overlap-coefficient | 1.000 | 0.000 | **0.75** |
| Position in W17 sequence | Add.196-Add.198 onset | Add.202 silence-break | **Add.203 post-silence-break sustain** |

The three sub-modes form a **continuous spectrum on the surface-overlap axis** [0.000, 1.000] with the bimodal-co-occurrence at the intermediate value 0.75. The synth #428 stability-class-A bursty-CV at litellm should be re-framed (third revision after synth #434 bimodal) as a **trimodal cohort-composition system** with attractors at surface-overlap ∈ {0.000, 0.75, 1.000} and free movement between them across ticks.

## 5. The stuxf Recurrence Trajectory and N_rest Profile

stuxf at litellm exhibits the following N_rest (rest-period in ticks) profile:

| Active tick | N_PRs | Following N_rest | Resumption tick |
|-------------|--------|-------------------|-----------------|
| Add.196 (quartet) | 4 | 0 | Add.197 (immediate continuation) |
| Add.197 (doublet) | 2 | 0 | Add.198 (immediate continuation) |
| Add.198 (singleton) | 1 | 4 | Add.203 (5-tick silence) |
| Add.203 (triplet) | 3 | ? | (pending) |

The stuxf N_rest profile is **bimodal**: short rests (N_rest=0, immediate continuation across consecutive active ticks Add.196-Add.198) followed by **a single long rest (N_rest=4)** followed by re-emergence with a 3-PR triplet. The pattern suggests stuxf has a **work-batch cycle** of ~3-tick active phase + ~4-tick rest phase + ~3-tick active phase = ~10-tick period. If the cycle is regular, the next stuxf rest period at Add.204+ should be N_rest≈4 with resumption at Add.207-Add.208.

## 6. Predictions

- **P-436.A** (>60%): stuxf does not chain at Add.204 — the work-batch cycle implies N_rest≥1 immediate after the Add.203 triplet; modal N_rest at Add.204-Add.207 ≈ 4 ticks based on the Add.198 → Add.203 prior cycle.
- **P-436.B** (>55%): The bimodal-co-occurrence sub-mode (synth #436) recurs within Add.204-Add.215 — given the work-batch cycle on stuxf returns at Add.207-Add.208, a fresh-author silence-break event during the stuxf rest phase followed by stuxf return on the immediate post-silence-break tick is a candidate recurrence pattern.
- **P-436.C** (>50%): The cross-repo author-overlap negative result sustains through Add.220 — no contributor emits in two distinct repos within the W17 visible window; the partition is structural (separate dev communities per repo).
- **P-436.D** (>50%): AlanWYChen at litellm chains at Add.204 OR exhibits N_rest=1-2 — the fresh-author-non-recurrent sub-mode at synth #434 predicted ≤0.40 chain-rate; the bimodal-co-occurrence at Add.203 already partially confirmed AlanWYChen-chain-at-n=1 (singleton at Add.203 after doublet at Add.202); next-tick chain probability ≤0.35.
- **P-436.E** (>55%): The security-hardening thematic anchor at stuxf does not extend to a non-stuxf author at litellm within Add.204-Add.215 — the anchor is **author-bound** (only stuxf has emitted security-hardening PRs at litellm in the visible window); other litellm authors (AlanWYChen, Michael-RZ-Berri, yassin-berriai) operate at testing/CI-meta/subprocess-internals surfaces, not security-hardening.
- **P-436.F** (>45%): A second instance of bimodal-co-occurrence (synth #436 sub-mode) at a non-litellm repo within Add.204-Add.220 — the trimodal cohort-composition framework should generalize beyond litellm if it is a regime-level property rather than a repo-specific property; modal candidate repos are codex (which has shown both same-author cohorts and fresh-author chains independently at synth #420 and #429) and opencode (which has shown same-author cohorts at kitlangton Add.202 quintet and fresh-author at rekram1-node Add.201 doublet).
- **P-436.G** (>50%): The cumulative stuxf-cohort PR-count at litellm crosses 12 within Add.204-Add.215 — the work-batch cycle predicts Add.207-Add.208 stuxf return at amplitude 2-4; cumulative would advance from 10 to 12-14 within the window.

**Falsifiers**: P-436.A falsified if stuxf emits at Add.204. P-436.B falsified if no bimodal-co-occurrence sub-mode within Add.204-Add.215. P-436.C falsified if any contributor emits in 2 distinct tracked repos within Add.204-Add.220. P-436.D falsified if AlanWYChen N_rest≥3 at Add.204+ (no Add.204-Add.206 emission). P-436.E falsified if a non-stuxf litellm author emits a security-hardening PR within Add.204-Add.215. P-436.F falsified if no non-litellm bimodal-co-occurrence within Add.204-Add.220. P-436.G falsified if cumulative stuxf litellm PR-count remains ≤11 at Add.215.

## 7. Refutation/Confirmation of Prior Synths

- **Decisively falsifies synth #434 P-434.A** at the author-pool-rotation hypothesis — stuxf returns at Add.203 n=1 post-silence-break with a 3-PR triplet; the recurrent-author lag of n≥1 tick is invalidated. The author-pool-rotation hypothesis is restricted: it does NOT apply to litellm at the post-silence-break tick.
- **Confirms synth #423** stuxf-class same-author-thematic-uniform sub-mode at security-hardening — the Add.203 stuxf-triplet recurs the motif at n=5 cross-tick gap (Add.198 → Add.203); cumulative stuxf security-hardening cohort = 7 PRs over 4 ticks (per M-203.D and this synth Section 1).
- **Refines synth #428** stability-class-A bursty-CV at litellm into a **trimodal cohort-composition system** (synth #423 uniform + synth #434 fresh-disjoint + synth #436 bimodal-co-occurrence) with attractors at surface-overlap ∈ {0.000, 0.75, 1.000} and free transitions between them across ticks.
- **Refines synth #434** bimodal alternation framing into **trimodal co-occurrence-permitting** framing — the alternation hypothesis is invalidated by Add.203; the two prior sub-modes can collapse into one tick rather than alternating across ticks.
- **Confirms synth #427** thematic-anchor cross-window-re-emergence motif at the **same-author intra-repo branch** — the security-hardening anchor at stuxf recurs at n=5 cross-tick gap (Add.198 → Add.203), distinct from the cross-repo plugin-anchor (Add.196 codex → Add.201 opencode → Add.202 codex) which operates at the subsystem-topic axis without author-anchor.
- **Establishes a new cross-repo author-overlap negative-result observation** that synth #437+ should formalize: the W17 visible window contains zero cross-repo-author overlaps; the developer communities at the 6 tracked repos are **structurally partitioned**. Cross-repo coupling, where it occurs (plugin-anchor at synth #427), is **author-blind** and operates at the subsystem/topic axis only.
