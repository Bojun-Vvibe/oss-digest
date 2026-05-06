# W17 Synthesis #734 — Single-carrier multi-surface concurrent fanout during ecosystem-wide ≥4-of-7 deep-silence as a carrier-decoupling-from-ecosystem-rate signature distinct from synth #717–#732 intra-carrier or pairwise-carrier dynamics

**Anchor window:** 2026-05-06T07:56:39Z → 2026-05-06T08:44:31Z (47m52s, anomalyco/opencode 5 PRs across 4 distinct surfaces while 6/7 carriers exhibit ≥1h25m silence).
**Anchor carriers:** anomalyco/opencode (the active fanout carrier), with silence-context citations from openai/codex (1h25m gap), QwenLM/qwen-code (2h35m gap), google-gemini/gemini-cli (4h58m gap), BerriAI/litellm (5h24m gap), block/goose (6h53m gap), charmbracelet/crush (8h11m gap).
**Lens:** synth #717–#732 characterized **intra-carrier** patterns (author chains, surface dynamics, doublet/triplet structures) and **pairwise-carrier or cross-carrier** correlations (synth #725 cross-carrier same-author divergence, synth #720 multi-carrier coincidence). None of synth #717–#732 explicitly addresses the **carrier-decoupling-from-ecosystem-rate** regime, where one carrier's throughput **rises** precisely while ≥4 of 7 peer carriers are in deep silence (≥4h gaps) — a structural anti-correlation between target-carrier rate and ecosystem-wide rate. The Add.379 capture window provides a textbook anchor: opencode ships 5 PRs in 47m52s while the ecosystem-wide active-carrier count drops to **1/7** — a record low.

## The opencode fanout (anomalyco/opencode, 5 PRs / 4 surfaces / 3 authors / 47m52s)

| PR | author | mergedAt | head SHA | surface | type |
|---|---|---|---|---|---|
| [anomalyco/opencode#25749] | kill74 | 2026-05-06T07:56:39Z | `e87ecc72` | docs/ | docs: |
| [anomalyco/opencode#25866] | zharinov | 2026-05-06T08:06:37Z | `410fbad5` | ui/ (KaTeX SVG) | fix: |
| [anomalyco/opencode#25996] | Brendonovich | 2026-05-06T08:37:11Z | `493b55c9` | desktop/ | chore: |
| [anomalyco/opencode#25998] | Brendonovich | 2026-05-06T08:40:46Z | `baaf676a` | desktop/ | feat: |
| [anomalyco/opencode#25993] | nexxeln | 2026-05-06T08:44:31Z | `ee54e3b3` | tui/ | fix: |

**Properties:**
- 4 distinct surfaces touched (docs/, ui/, desktop/, tui/) with **zero surface overlap** between non-Brendonovich PRs.
- 3 distinct authors (kill74, zharinov, Brendonovich, nexxeln — Brendonovich double-counted on desktop/), one of whom (nexxeln) is a **first-appearance author in W18 era**.
- All 5 PRs merge within a 47m52s window — average inter-merge gap = 11m58s, ~4× tighter than the 49–66m tick width band of Add.358–377.

## The ecosystem-silence context (6/7 carriers silent during the fanout)

| carrier | last merge prior to fanout | author | gap-at-fanout-end (08:44Z) |
|---|---|---|---|
| openai/codex | #19193 at 07:18:01Z | mzeng-openai | **1h26m** |
| QwenLM/qwen-code | #3735 at 06:09:08Z | tanzhenxin | **2h35m** |
| google-gemini/gemini-cli | #26528 at 03:44:52Z | akh64bit | **4h59m** (deep silence) |
| BerriAI/litellm | #27264 at 03:19:29Z | yassin-berriai | **5h25m** (deep silence) |
| block/goose | #9030 at 01:50:48Z | kalvinnchau | **6h54m** (deep silence) |
| charmbracelet/crush | #2808 at 00:33:09Z | ilgax | **8h11m** (deep silence) |

The 4-of-7 carriers in deep silence (≥4h) is **unprecedented in the Add.358–378 window** (zero base rate over 21 prior ticks, per Add.378). The 6-of-7 in ≥1h25m silence is **carrier-decoupling at peak intensity**.

## Why this is distinct from prior synth (W17 #717–#732)

- **#720** (multi-carrier coincidence): synth #720 characterized **simultaneous activity** across multiple carriers; this synth is the **anti-pattern** — simultaneous silence across multiple carriers with one carrier active.
- **#725** (cross-carrier same-author doublet inter-merge-gap divergence): cross-carrier focus on a **single author's** behavior across two carriers; synth #734 focuses on **one carrier's** multi-author fanout against a backdrop of cross-carrier silence.
- **#727** (sub-minute pre-batched merge-button): intra-tick same-surface doublet; synth #734's anchor is multi-surface.
- **#729** (A→B→A author rotation): single-carrier author rotation; synth #734 includes author rotation but the **structural signature is the silence backdrop**, not the rotation itself.
- **#730** (24h-aligned scheduled): macro-cadence single-author single-surface; synth #734 is sub-1h multi-author multi-surface.
- **#731 / #733** (non-monotonic gap recovery / terminal compression): chain-internal gap analysis; synth #734 is **chain-external context** for synth #733's Brendonovich sextet.
- **#732** (cross-surface inverted doublet): single-author cross-surface; synth #734 is multi-author cross-surface with silence context.
- This synth (#734) is the **first** to argue that **carrier-rate / ecosystem-rate anti-correlation at sub-1h scale** is a recurring signature requiring its own model — distinct from any prior synth's focus on intra-carrier or pairwise-carrier dynamics.

## Formal argument: anti-correlation cannot arise from independent Poisson carriers

Under the null hypothesis of 7 independent Poisson carrier-merge processes with rates λ_i, the joint distribution of "≥4 carriers silent for ≥4h AND 1 carrier ships ≥5 PRs in 48m" factorizes. Using empirical W17 mean rates λ_i ≈ 0.5–1.5 merges/h per carrier:

- P(carrier i silent for ≥4h) ≈ exp(-4λ_i) ≈ 0.0025–0.135 (for λ in 0.5–1.5/h).
- P(≥4 of 7 carriers silent for ≥4h) ≈ binomial tail with p̄ ≈ 0.05 → ≈ 0.0007.
- P(opencode ships ≥5 PRs in 48m | empirical rate ≈ 1.5/h) = P(Poisson(1.2) ≥ 5) ≈ 0.0029.
- Joint (independence assumption): 0.0007 × 0.0029 ≈ **2 × 10⁻⁶**.

The observed event has near-zero probability under independence — the carrier-rates are **not independent**. The non-independence direction observed (one carrier up while ≥4 are down) is **anti-correlation**, not the more commonly-modeled positive correlation (e.g., shared upstream dependency burst affecting multiple carriers simultaneously).

**Generative hypothesis (carrier-decoupling):** When the global ecosystem (cross-carrier shared resources: CI runner pools, shared reviewer attention, time-of-day maintainer availability) is in a low-activity regime, individual carriers with **isolated maintainer cohorts** (opencode's Brendonovich + nexxeln + zharinov + kill74 do not appear as authors on the other 6 carriers in the W17 anchor window) can **fanout independently** because their throughput is decoupled from the shared resources. The structural prediction is that **carriers with the most insulated maintainer cohorts will exhibit the highest fanout-during-silence indices**.

## Cross-carrier validation citations (≥10 PRs across multiple carriers)

To establish that the 6-of-7 silence is a context, not a sampling artifact, the following PRs anchor each silent carrier's last-merge baseline:

- **openai/codex (silent):** #19193 `64d39b6d` (mzeng-openai), #21312 `6259cee9` (bolinfest) — most-recent codex merges, both prior to fanout window.
- **QwenLM/qwen-code (silent):** #3735 `03ed878e` (tanzhenxin), #3768 `0a0c17f7` (tanzhenxin), #3743 `9a279acf` (yiliang114) — the synth-732 micro-burst window, all prior to fanout.
- **anomalyco/opencode (active, primary anchor):** #25749 `e87ecc72`, #25866 `410fbad5`, #25996 `493b55c9`, #25998 `baaf676a`, #25993 `ee54e3b3` — the 5-PR fanout itself.
- **anomalyco/opencode (chain context):** #25968 `031a0cc8`, #25972 `e969d0af`, #25976 `6ca55f6f`, #25980 `3683173a` — the Brendonovich sextet's first 4 elements (synth #731/#733 chain), establishing that opencode was already in elevated-rate mode entering the fanout window.

**14 PRs cited across 3/7 carriers as primary citations** (anomalyco/opencode 9 active anchors, openai/codex 2 silent anchors, QwenLM/qwen-code 3 silent anchors), with **4 additional carriers cited as silence anchors via author + last-merge timestamp** (gemini-cli akh64bit #26528, litellm yassin-berriai #27264, goose kalvinnchau #9030, crush ilgax #2808). Total: **18 PRs across 7/7 carriers**.

## Predictions / falsifiability

- If at least 3 of the 6 silent carriers re-activate within 30 minutes after Add.379 capture (i.e., by 09:13Z), the silence is **transient** and the fanout-during-silence event is a brief out-of-phase coincidence rather than structural carrier-decoupling. Predicted: at least one re-activates (litellm or codex most likely given prior rates).
- If at least 1 of the 6 silent carriers extends silence beyond 9h, the carrier-decoupling hypothesis is **reinforced** for that carrier (its rate is genuinely decoupled, not just shifted by 1h).
- If opencode's elevated rate continues into the next tick (5+ more merges in 48m), the carrier-decoupling regime persists; if opencode rate collapses to ≤1 merge in 48m while peers re-activate, the fanout was a single-tick burst not a regime.
- Falsified across the W18 day-2+ window if no length-≥3 episode of "1 carrier active ≥5 PRs / 48m AND ≥4 carriers silent ≥4h" recurs — would suggest Add.379's anchor was a single-tick coincidence rather than a recurring pattern.
- Cross-carrier validation: identify the W17–W18 carrier with the most-insulated maintainer cohort (per author-set Jaccard distance from other carriers' author sets); predicted that carrier exhibits the highest **fanout-during-silence index** = (own merges in window W) × (count of peer carriers silent ≥4h in window W), measured across all 18m–60m windows in W18 day-1+2.

## Connection to synth #733 and the Brendonovich sextet

The opencode fanout's largest contributor (Brendonovich, 2 of 5 PRs) is the same author whose desktop/ chain anchors synth #733. The interpretation is that the **regime-switch** identified in synth #733 (synth-731 slow-gap → synth-727 fast-gap on the terminal pair) **co-occurs** with the carrier-decoupling regime identified here. A combined model: **terminal compression in long author chains is itself enabled by carrier-decoupling** — a maintainer in a low-distraction regime (peer carriers silent → fewer cross-carrier review requests / context-switches) completes pre-batched terminal merges faster. Synth #733 and synth #734 are **mechanistically linked** — synth #733 is the chain-internal projection, synth #734 is the chain-external context.
