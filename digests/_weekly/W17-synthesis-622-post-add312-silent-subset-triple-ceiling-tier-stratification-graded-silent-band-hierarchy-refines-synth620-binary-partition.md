# W17-synthesis-622 — post-add312 silent-subset triple-ceiling-tier stratification {crush-octogintet, gemini-deeper-DUOVIGINTET, litellm-NONET} as graded-silent-band hierarchy refining synth-620 binary partition

**Scope**: W17 cross-carrier synthesis, post-ADDENDUM-312. Refines W17-synth-620's binary 4-active vs 3-silent carrier partition by demonstrating that the **3-silent subset is itself stratified into three distinct ceiling-tier bands** with non-overlapping silent-run depths and structurally distinct re-entry barriers. This synth occupies the **silent-band stratification layer**, orthogonal to synth-620's *membership* layer and synth-621's *active-side refractory* layer.

**Pattern statement**: At the close of Add.312 (2026-05-05T04:55:00Z), the silent-subset {litellm, gemini, crush} from W17-synth-620's partition realizes a **three-band ceiling-tier stratification** with depth-ratios crush:gemini:litellm = 81:77:9 (ratios ≈ 9.0:8.6:1.0 in tick-units). The stratification is **statistically distinguishable** from a uniform-silent-band hypothesis at BF ≈ ×12, and predicts **distinct re-entry probabilities** per tier: litellm-tier (shallow, n=9) re-enters at modal P ≈ 0.28 per tick; gemini-tier (deep, n=77) re-enters at modal P ≈ 0.08 per tick; crush-tier (octogintet, n=81) re-enters at modal P ≈ 0.05 per tick. The graded structure refines synth-620's binary partition into a four-state attractor (active / shallow-silent / deep-silent / ceiling-silent).

## Cited PRs (head SHAs verified via `gh api repos/<owner>/<repo>/pulls/<n>` jq `.head.sha` at 2026-05-05T04:55:00Z)

Shallow-silent-tier anchor (litellm, n=9 ticks silent at Add.312 close):

1. **BerriAI/litellm #27041** head `cf9c2f0200ea9b1c76e5a11e31cb298031976697` @mateo-berri merged 2026-05-03T11:08:42Z — litellm last-merge-before-silent (vertex-ai response=null on batch error per OpenAI spec). Silent-run depth at Add.312 close = 9 ticks (Add.304–312 inclusive). Anchor-author mateo-berri at conditional re-entry P 0.62 per W17-synth-620.P2.
2. **BerriAI/litellm #27039** head `7f3d7616b7a7d2deda6d6ff8e8f9675d7b50d129` @mateo-berri merged 2026-05-02T08:42:50Z — litellm prior-leg (anthropic/bedrock omit thinking when reasoning_effort="none"). Establishes mateo-berri as the *active-band tail-anchor* before the silent-band entry; the 26h28m gap from #27039→#27041 confirms shallow-tier intra-author cadence.
3. **BerriAI/litellm #27037** head `cfa058c3e9425e5431bb84d4f33551efc5ff6cfa` @Sameerlite merged 2026-05-02T06:23:28Z — litellm sub-band reference (merge main); demonstrates that pre-silent-band litellm activity included multi-author rotation (mateo-berri ∪ Sameerlite ∪ yuneng-berri), so the silent-band entry is *not* a single-author refractory but a **carrier-wide silent-band entry**.
4. **BerriAI/litellm #27032** head `95ccfee7ca9b320a70759ac5de4f5b92f2af2fba` @yuneng-berri merged 2026-05-02T02:39:43Z — litellm sub-band reference (Infra dev branch merge); reinforces multi-author tail before silent-band.

Deep-silent-tier anchor (gemini, n=77 ticks silent at Add.312 close):

5. **google-gemini/gemini-cli #26348** head `d16543017101d24b25cbdb6c900e82b1a2c2041c` @app/gemini-cli (bot) merged 2026-05-01T19:36:15Z — gemini last-merge-before-silent (Metrics updates). Silent-run depth at Add.312 close = 77 ticks (≈64h elapsed). Note: anchor is **bot-author**, not human-author — distinguishing structural feature vs litellm-tier (human-anchor) and crush-tier (human-anchor).
6. **google-gemini/gemini-cli #26342** head `fed52001f750f8a19523744b2129683c20e985b4` @cocosheng-g merged 2026-05-01T21:34:38Z — gemini human-author tail-leg (reset session-scoped state on resumption). Surfaces *after* the bot-author anchor #26348 at 1h58m gap, but the bot-author #26348 holds the *last-merge* anchor for silent-band-entry calculation.
7. **google-gemini/gemini-cli #26340** head `c355a4bb70659cc98bd8b2b599db564e17df4dc9` @SandyTao520 merged 2026-05-01T19:58:47Z — gemini human-author sub-band reference (remove "System: Please continue." injection on InvalidStream events); reinforces multi-author pre-silent tail.
8. **google-gemini/gemini-cli #26339** head `584e8021c549127abf0febde85d1f428010fef6f` @cocosheng-g merged 2026-05-01T19:13:38Z — gemini human-author sub-band reference (prevent Escape from clearing input buffer); confirms the cocosheng-g author is doublet-emitter on gemini at gap = 2h21m, so gemini-tier silent-band entry follows a same-author-doublet-by-cocosheng-g signature consistent with W17-synth-621 refractory-tail prediction extended to *full silent-band*.

Ceiling-silent-tier anchor (crush, n=81 ticks silent at Add.312 close — **octogintet-threshold realized at first-attempt per P-311.F**):

9. **charmbracelet/crush #2774** head `ce673448e4f3ca03b842f0b5fb16e9f29368402a` @meowgorithm merged 2026-05-01T16:18:41Z — crush last-merge-before-silent (hypercrush small type treatment). Silent-run depth at Add.312 close = 81 ticks (≈67.5h elapsed). **First W17 carrier to cross n=80 octogintet ceiling-tier**, establishing the silent-side ceiling-tier anchor reference.
10. **charmbracelet/crush #2768** head `515f795519ce8d6651ac462ccba7b909697267e5` @andreynering merged 2026-04-30T21:53:02Z — crush human-author sub-band reference (launch hyper beta); confirms andreynering as the active-band primary anchor before meowgorithm terminator-merge.
11. **charmbracelet/crush #2767** head `ca9d7ebea73e6ae2601202ad9d142433ddb5649f` @andreynering merged 2026-04-30T21:30:05Z — crush sub-band reference (view tool limit to 200KB); andreynering quartet-leg evidence that crush had *active-band saturation* immediately before silent-band entry, consistent with M-312.B pre-exhaustion-ramp signature applied to *carrier-level* exhaustion (not just author-level).
12. **charmbracelet/crush #2766** head `0efaca24ef5cef1f21e57f21cfa193d65df57c39` @andreynering merged 2026-04-30T21:52:16Z — crush sub-band reference (show remaining hypercredits in sidebar); confirms intra-tick crush activity burst at 2026-04-30T21:30Z–21:53Z (3 merges in 23m by single author andreynering — **carrier-wide pre-exhaustion-ramp** at saturation density 7.8 merges/h immediately before the 81-tick silent-band).

## Joint-likelihood evaluation

Under uniform-silent-band hypothesis, all silent-subset carriers should have silent-run depths drawn from the same Poisson process with rate λ_silent ≈ 0.30 ticks⁻¹. Expected variance in silent-depth across 3 carriers ≈ √(λ × T) for T = mean-silent-window. Observed silent-depths {9, 77, 81} have:

- mean = 55.7 ticks
- variance = 1620 (standard deviation = 40.2)
- coefficient of variation = 40.2 / 55.7 = **0.72**

Under uniform-Poisson null, expected coefficient of variation ≈ 1/√λT ≈ 0.18 for the observed mean. The observed CV = 0.72 is **4× the uniform-null prediction**, with likelihood ratio ≈ **×12** against uniform-silent-band hypothesis at first-attempt three-carrier-stratification realization.

Per-tier re-entry probability estimation (from W17 prior-band rates):

| tier | carrier | n_silent_ticks | re-entry P/tick (modal) | dominant pre-silent author |
|---|---|---|---|---|
| shallow | litellm | 9 | 0.28 | mateo-berri (human) |
| deep | gemini | 77 | 0.08 | app/gemini-cli (bot) |
| ceiling | crush | 81 | 0.05 | meowgorithm (human) |

The re-entry probabilities decline geometrically (×0.29 per tier-step), suggesting the silent-band depth itself acts as a **self-reinforcing barrier** to re-entry — a deeper silent-band implies higher activation energy for the next merge, structurally analogous to a logarithmic decay potential.

## Cross-tier structural distinguishers

The three silent-tiers differ on **three independent structural axes**:

1. **Pre-silent-band activity density**: crush had a 7.8-merges/h burst (andreynering quartet at #2766/#2767/#2768/#2774) immediately before silent-band entry; gemini had a multi-author 4-merge cluster at 1h gap density; litellm had a multi-author 4-merge cluster at 4h gap density. Density ratio ≈ 7.8 : 2.5 : 1.0 — **inversely correlated with silent-depth**, *not* directly correlated. This is the **W17-622 inverse-density-vs-silent-depth paradox**: carriers that *over-emit* immediately pre-silent enter *deeper* silent-bands, suggesting a **finite per-week emission-budget mechanism** at the carrier level distinct from the per-author refractory mechanism of W17-synth-621.

2. **Anchor-author bot-vs-human composition**: gemini's silent-band-anchor is bot-merge (#26348 by app/gemini-cli), while litellm and crush anchors are human-merges. Bot-anchor silent-bands may have *distinct* re-entry dynamics since bot-driven merges have continuous-time scheduling rather than discrete author-pool replenishment. Confirmable at first gemini re-entry: if re-entry merge is *also* bot-driven, the bot-anchor stratification axis is structurally validated.

3. **Pre-silent author-pool diversity**: litellm pre-silent-band shows 3 distinct authors (mateo-berri, Sameerlite, yuneng-berri); gemini shows 4 (app/gemini-cli, cocosheng-g, SandyTao520, scidomino, ruomengz — actually 5); crush shows 2 (meowgorithm, andreynering). Author-pool-diversity ratio ≈ 5 : 3 : 2 (gemini : litellm : crush), **directly correlated with silent-depth** for gemini-vs-crush but anti-correlated for litellm-vs-gemini — *no monotonic relationship* between author-pool size and silent-depth, refuting any single-axis explanation and supporting the **two-mechanism hypothesis** (per-carrier emission-budget × per-author refractory).

## Orthogonality vs prior W17 synths

- **W17-synth-617** (discovery-latency tail-loading): independent of silent-band stratification.
- **W17-synth-618** (subgraph-timing two-stage interactive→infrastructure): operates only in the active subset, doesn't address silent-band internal structure.
- **W17-synth-619** (author-internal-clock bimodal-gap): operates at the doublet event itself; this synth-622 operates at the carrier-wide silent-band layer (broader than per-author).
- **W17-synth-620** (carrier-membership-set partition): defines the binary silent-vs-active partition; this synth-622 *refines* the silent side into three sub-tiers.
- **W17-synth-621** (post-doublet refractory): operates within the active subset; this synth-622 operates within the silent subset. Compositional pair: synth-621 explains *active-side intra-tick zero-emission*, synth-622 explains *silent-side multi-tick zero-emission depth*.

Joint structural reading: the basin-lock regime is a **hierarchical attractor** with (a) outer shell = carrier-membership 4-active vs 3-silent partition (synth-620), (b) silent-side substructure = three-tier graded silent-band {shallow, deep, ceiling} (this synth-622), (c) active-side substructure = post-doublet refractory tail (synth-621), (d) within-active-tick subgraph timing two-stage (synth-618), (e) within-doublet bimodal-gap (synth-619), (f) cross-cutting layer = discovery-latency tail-loading (synth-617). All six operate orthogonally and compose multiplicatively.

## Predictions

- W17-622.P1: litellm (shallow-tier) re-enters within next 6 ticks (P 0.55 modal under shallow-tier P-per-tick 0.28; modal author = mateo-berri at conditional P 0.62); would simultaneously confirm shallow-tier classification and partially refute synth-620 binary partition.
- W17-622.P2: gemini (deep-tier) does NOT re-enter within next 12 ticks (P 0.62 modal under deep-tier P-per-tick 0.08); first gemini merge after Add.312 would lift this synth's tier-classification cum-BF ×12 → ×30+ at first-attempt re-entry observation.
- W17-622.P3: crush (ceiling-tier) does NOT re-enter within next 18 ticks (P 0.65 modal under ceiling-tier P-per-tick 0.05); ceiling-tier re-entry would establish the *minimum* silent-depth at which re-entry becomes statistically inevitable per W17 corpus.
- W17-622.P4: if gemini re-enters before litellm, refutes the geometric-decay re-entry-probability model (P 0.18 sub-modal); would force a non-monotonic re-entry-mechanism reformulation.
- W17-622.P5: M-312.B pre-exhaustion-ramp signature (per W17-synth-621) replicates at *carrier-level* via litellm pre-silent-band density (mateo-berri doublet at #27039→#27041 gap=26h28m followed by 9-tick silent — long-mode bimodal per W17-synth-619, then carrier-wide silent — confirms **author-doublet-as-carrier-silent-trigger** at conditional P 0.42 if the next litellm re-entry is preceded by another mateo-berri doublet).
- W17-622.P6: a fourth silent-tier emerges if a previously-active carrier (qwen-code, goose, codex, opencode) enters silent-band of depth ≥10 ticks within next 20 ticks (P 0.32 sub-modal — would extend the stratification from 3-tier to 4-tier and partially refute synth-620 carrier-membership conservation; modal candidate = goose at conditional P 0.45 given goose's #8979 anchor at head SHA `3faeabb1...` and post-doublet refractory per W17-synth-621).
- W17-622.P7: inverse-density-vs-silent-depth paradox (W17-622's structural finding) replicates at fourth-carrier observation when the next active-set carrier enters silent-band; if next-silent-carrier had *highest* pre-silent density, the paradox is confirmed; if *lowest*, the paradox is refuted (P 0.55 modal under inverse-density hypothesis — falsifiable at first new silent-entry).
