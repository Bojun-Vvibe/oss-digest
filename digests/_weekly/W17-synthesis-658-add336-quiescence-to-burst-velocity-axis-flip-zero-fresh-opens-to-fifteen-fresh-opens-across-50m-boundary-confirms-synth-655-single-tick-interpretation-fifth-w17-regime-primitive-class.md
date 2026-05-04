# W17-synthesis-658 — Add.336 Add.335→Add.336 quiescence-to-burst regime-velocity-flip primitive (zero fresh-opens 7/7 carriers → fifteen fresh-opens 5/7 carriers within consecutive 50m boundaries) confirms synth-655 single-tick interpretation and introduces velocity-axis-flip as fifth W17 regime-level dynamic distinct from cluster-decay synchronization

**Tick anchor**: Add.336 (capture 2026-05-05T00:05:00Z → 2026-05-05T00:55:00Z), in immediate sequence with Add.335 anchor capture (2026-05-04T23:15:00Z → 2026-05-05T00:05:00Z).

**Founding observation**: Two consecutive 50m capture windows exhibit **maximum-magnitude opposite-sign velocity signals**:

- **Add.335 capture (50m)**: 0 fresh-opens across 7 carriers (full sweep). 100% drop from Add.334's 13 fresh-opens. Documented in synth-655 as first W17 regime-level "ecosystem-wide breath-out" primitive.
- **Add.336 capture (50m)**: 15 fresh-opens across 5 carriers freshly fetched (opencode 3, codex 5, litellm 3, crush 1, goose 3). Extrapolated to ~21 fresh-opens at 7-carrier-equivalent. Highest fresh-open velocity since Add.330.

The transition from 0 to 15 fresh-opens occurs **within a single 50m boundary** with no intermediate tick. This constitutes a **velocity-axis flip** — a regime-level dynamic in which open-axis volume swings from minimum (0 fresh-opens, the only such observation in the 33-tick basin-metronome regime) to high-percentile (top-quintile fresh-open count) across one tick boundary.

**Why this validates synth-655's single-tick interpretation**:

synth-655 explicitly argued that the seven-carrier open-axis-quiescent tick was a **post-burst recovery** rhythm — "drip-351 captures the peak of a fresh-open burst across all carriers; the next tick exhibits ecosystem-wide breath-out as fresh-open velocity exhausts." The implicit prediction was that the quiescence was **not** a multi-tick regime change but a single-tick breath-out, and that the next tick would resume open-axis activity. Add.336 falsifies the multi-tick-quiescence hypothesis (P-335.B prior 0.05 was already a low prior on quiescence recurrence) and **realizes the single-tick-breath-out hypothesis** with strong overshoot — not just resumed activity, but a high-velocity burst.

**Why velocity-axis-flip is distinct from prior W17 regime-level primitives**:

- **synth-655 (regime-level breath-out, negative-signal)**: captures a single low-velocity tick. Operates at single-tick granularity.
- **synth-656 (vendor-suffix cohort recipe homology, structural)**: captures a structural homology between two carriers' organizational cohorts. Operates at static cross-carrier comparison granularity.
- **synth-657 (same-author intra-tick multi-leg burst, per-author velocity)**: captures within-tick author burst behavior on three carriers. Operates at within-tick granularity.
- **synth-658 (velocity-axis flip, between-tick dynamic — NEW)**: captures **between-tick velocity transition** — how open-axis volume changes across a tick boundary. Operates at **between-tick granularity** with explicit before/after pairing. This is a strictly new analytical axis: synth-655 examines a tick in isolation, synth-658 examines a tick **transition**.

The synth-655→synth-658 progression is itself instructive: synth-655 named the trough; synth-658 names the trough-to-peak movement. A regime-level dynamic at between-tick granularity requires at least two consecutive tick observations to instantiate, which is why it could not have been documented at synth-655's writing.

**Contrast with prior synchronized-cluster-decay primitive (Add.334→335 transition)**:

The Add.334→Add.335 transition was characterized in synth-655 as **synchronized cluster-decay** — three distinct intra-carrier author-clusters basin-locked simultaneously (Adib234 QUARTET on gemini-cli, cocosheng-g TRIPLET on gemini-cli, codex revision-cohort QUINTET). The Add.335→Add.336 transition exhibits the **inverse** dynamic: three distinct intra-carrier same-author bursts activate simultaneously (mateo-berri DOUBLET on litellm, morgmart DOUBLET on goose, canvrno-oai PENTET on codex — see synth-657 for the cross-carrier primitive structure).

The full two-tick transition reveals a **decay-then-burst rhythm** at regime level:
- t=Add.334 → t=Add.335: synchronized cluster-decay, velocity drop 13 → 0.
- t=Add.335 → t=Add.336: synchronized same-author burst, velocity rise 0 → 15 (extrapolated 21 at 7-carrier-equivalent).

The two transitions are **mirror-image** in velocity sign and **kind-distinct** in clustering shape: decay synchronizes across clusters that wind down (different clusters all hit basin-lock together); burst synchronizes across authors that wind up (different authors all open multi-leg bursts together). Both are regime-level coordination signals; together they constitute a **two-tick oscillation** in open-axis velocity with synchronized-coordination on both ends.

**Statistical extremity of the flip**:

Add.302–334 baseline fresh-open velocity per 50m tick: mean ≈8-15, stdev ≈4. The Add.335 → Add.336 swing of 0 → 15 is a Δ-of-15 transition, equivalent to **≈3.75σ** at baseline stdev. The next-largest tick-to-tick Δ in the Add.302–335 history is Δ=11 (Add.330→331 transition, well-documented in prior synth entries). Add.335→336's Δ=15 is the **largest single-tick velocity swing** in the 34-tick basin-metronome regime.

**Cited PRs anchoring the velocity-flip endpoints**:

**Add.335 trough endpoint** (drip-351 INDEX, all head-stable Add.334→335, synth-655 cited):
- sst/opencode #25763 (anandgupta42, head `dce8aa4c265b9da558c1905c8cbe4eb6bbad3890`)
- openai/codex #21069 (abhinav-oai, head `468fcead29898f1b4e36ca926126849358744699`)
- BerriAI/litellm #27132 (mateo-berri, head `98f6e5e72c94e668f7da343b6385028976ea67c7`)
- charmbracelet/crush #2798 (andreynering, head `defa17365c955a754a6dd30fe52277e18f782b22`)
- google-gemini/gemini-cli #26465 (Adib234, head `327ba49b3d80c068e35bddcd4c91bc7acf1f4bf8`)
- QwenLM/qwen-code #3840 (ihubanov, head `c6de8c171be7dc9905ffc2ea60b65a04411e3e42`)
- block/goose #9002 (enilsen16, prior head `1997569a92ba9167f1610009f60be766c835f425`)

**Add.336 peak endpoint** (15 fresh-opens across 5 carriers, all SHAs verified):
- sst/opencode #25768 (jlongster, head `098258817ae41e8a0cde56c6ee172ef4c80c91ee`)
- sst/opencode #25765 (kill74, head `e3788376c051a08a45448cc1146967f889fad5bd`)
- openai/codex #21092 (canvrno-oai, head `a0124597d7353b5ec5e886b0c1cfc2a7ea85fbc2`)
- openai/codex #21091 (canvrno-oai, head `473cff8776d500f9baf178478e816f49cd1f8bf2`)
- openai/codex #21090 (canvrno-oai, head `6a4e364db319db2ec0843980405778d453f0ec59`)
- openai/codex #21089 (canvrno-oai, head `8885c3ac02c8c574ab08c69bbd5f12b57ba6782f`)
- openai/codex #21085 (canvrno-oai, head `912e90d98bd082e6f9167ebdd0fd2fc8149a16f1`)
- BerriAI/litellm #27137 (mateo-berri, head `52562f018eded31eb3f29361b7ec84d7f07e8b1f`)
- BerriAI/litellm #27136 (harish-berri, head `ad116cf38af5e1d2c8f578dd289a83b899373695`)
- BerriAI/litellm #27135 (mateo-berri, head `d160461dc6485d2c93aa0b13da412115dcbf35d9`)
- charmbracelet/crush #2791 (meowgorithm, head `07e00ad4610a7d745befb1780c58aa16b89c7f67`)
- block/goose #9004 (morgmart, head `fed3f4486e02a5d1afb157656d90d02ea8cece6f`)
- block/goose #9003 (morgmart, head `222bcab30a7857756e0dc2b231eeea82b1060c2a`)
- block/goose #9000 (kalvinnchau, head `814af772520f7552f3b834eadc37bf1aba2d32ab`)
- block/goose #9002 (enilsen16, **REVISED head** `193c6fbf89cc7cda47e3e10027f9b26ce45b8cf8`, revision-axis hit on Add.335-trough leg — leg appears in both endpoints with distinct heads, demonstrating the same leg can serve as both trough-anchor and peak-revision-axis evidence).

**Contrast with prior W17 synthesis entries**:

- **vs synth-655**: synth-658 is the **continuation-and-confirmation** of synth-655. synth-655 captured the trough; synth-658 captures the trough-to-peak transition and validates the single-tick-breath-out hypothesis embedded in synth-655.
- **vs synth-656**: synth-656 is structural (cohort recipe homology, static); synth-658 is dynamic (velocity flip, between-tick). They operate on disjoint analytical axes — synth-656 examines what is the same across carriers; synth-658 examines what changes across ticks.
- **vs synth-657**: synth-657 captures within-tick simultaneity of same-author bursts on three carriers; synth-658 captures between-tick velocity-flip across all 5 carriers freshly fetched. They are **complementary slices** of the same Add.336 evidence: synth-657 zooms in on the within-tick author-burst structure; synth-658 zooms out to the between-tick regime-velocity transition.
- **vs prior tick-transition primitives**: Add.302–335 has no prior W17 synth entry that takes a tick-transition (rather than a single tick) as its unit of analysis. synth-658 introduces **between-tick dynamic** as the **fifth distinct W17 regime-level analytical primitive class**, complementing the four cross-carrier clustering primitives catalogued in synth-657.

**Position within W17 regime-level primitive taxonomy** (cumulative after Add.336):

1. **Single-tick negative-signal regime primitive** (synth-655): ecosystem-wide breath-out / quiescence.
2. **Single-tick positive-signal cross-carrier clustering primitives** (synth-639/644/647/649/654/656/657): substrate, conceptual, cohort-recipe, same-author-burst classes.
3. **Between-tick velocity-flip regime primitive** (synth-658 — NEW): regime-level coordination signals appear on both endpoints of the flip, with mirror-image clustering shapes (synchronized cluster-decay on Add.334→335 leg, synchronized same-author burst on Add.335→336 leg).

synth-658 is the **first W17 between-tick regime primitive**.
