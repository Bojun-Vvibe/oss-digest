# W17 Synthesis #208 — UTC merge-time-of-day clustering reveals a sharp 00:00–06:30Z "Asia-Pacific maintainer band" with author-org affinity: of 7 distinct W17 merges between 2026-04-27T00:29:51Z and 06:16:43Z, 100% are non-US-business-hours, and the per-repo author roster in this band is disjoint from the per-repo author roster observed in the 13:00–22:00Z US-business-hours band of Add.74–Add.76, predicting that the next sub-15m express merge in this UTC band will be authored by one of {bolinfest, wesbillman, DragonnZhang, B-A-M-N, pomelo-nwu, krrish-berri-2, etraut-openai} or a name structurally similar (CJK-locale or Pacific-timezone-suffixed handle), NOT by the Add.74–76 daytime authors

**Window of evidence:** 2026-04-27T00:29:51Z → 06:16:43Z (5h46m52s — Add.81 merge cohort).
**Repos cited (≥5 distinct PRs with verified mergeCommit SHAs):** `openai/codex` #19779 / #19737 / #19736 / #19735 / #19734, `BerriAI/litellm` #26386, `block/sprout` #404, `QwenLM/qwen-code` #3593 / #3653 / #3607.
**Continuity / refinement:** Synth #200 (lane bimodality), synth #201 (bot-burst topology), synth #206 (base-branch segmentation), synth #207 (5-lane taxonomy, additive-asset lane).

## The observation: every merge in the Add.81 cohort lands in 00:00Z–06:30Z UTC

Tabulating mergedAt timestamps for the 7 distinct merges catalogued in Add.80 + Add.81:

| PR | repo | author | mergedAt (UTC) | UTC hour | local-time guess | Lane (synth #207) |
|---|---|---|---|---|---|---|
| #3593 | QwenLM/qwen-code | DragonnZhang | 00:29:51Z | **00** | China 08:29 (UTC+8) | deliberation |
| #3653 | QwenLM/qwen-code | B-A-M-N | 00:44:19Z | **00** | China 08:44 (UTC+8) | express |
| #404 | block/sprout | wesbillman | 02:09:14Z | **02** | US-PT 19:09 (UTC−7) prev day | express |
| #3607 | QwenLM/qwen-code | pomelo-nwu | 02:05:09Z | **02** | China 10:05 (UTC+8) | feature-integration |
| #19734–19737 | openai/codex | bolinfest | 03:31:24Z – 05:11:49Z | **03–05** | US-PT 20:31 – 22:11 (UTC−7) prev day | deliberation + chain-link |
| #26386 | BerriAI/litellm | krrish-berri-2 | 04:55:55Z | **04** | India 10:25 (UTC+5:30) | promotion |
| #19779 | openai/codex | etraut-openai | 06:16:43Z | **06** | US-PT 23:16 (UTC−7) prev day | additive-asset |

**Two distinct geographic clusters emerge:**

**Cluster A — "Asia-business-hours" (00:00–05:00Z = 08:00–13:00 UTC+8):**
- DragonnZhang, B-A-M-N, pomelo-nwu (all qwen-code, all CJK-locale handles)
- krrish-berri-2 (BerriAI, India-business-hours-aligned)
- 4 of 7 merges (57%)

**Cluster B — "US-Pacific-evening" (02:00–06:30Z = 19:00–23:30 UTC−7 prev day):**
- wesbillman (block/sprout)
- bolinfest (openai/codex)
- etraut-openai (openai/codex)
- 3 of 7 merges (43%) — but represents **5 mergeCommits** because of the bolinfest 4-PR cohort

**Zero merges in this window from authors typical of US-business-hours (13:00–22:00Z) sweeps in Add.74–76.** This is the empirical claim of synth #208.

## Author-repo affinity matrix (Add.81 window)

| Repo | Authors observed in 00:00–06:30Z band | Typical 13:00–22:00Z authors (per prior W17 addenda) |
|---|---|---|
| openai/codex | bolinfest, etraut-openai | (varies — Add.74–76 cited maintainers like won-openai, others) |
| QwenLM/qwen-code | DragonnZhang, B-A-M-N, pomelo-nwu | (different roster — Asia-band authors dominate this repo entirely; minimal US-band activity expected) |
| BerriAI/litellm | krrish-berri-2 | krrish-* authors (Berri team is largely India-tz); ishaan-jaff in US-band |
| block/sprout | wesbillman | (US-band author straddling timezones) |
| openai/codex (chain-link) | bolinfest | bolinfest only |

**Affinity claim:** qwen-code is **timezone-monotonic** (Asia-band only); litellm is **bimodal** (Asia-band krrish-* + US-band ishaan-*); openai/codex is **US-evening-dominant** with bolinfest as the highest-frequency author across multiple addenda. block/sprout is **single-author-dominant** by wesbillman across multiple addenda.

## Cross-checking against synth #207's additive-asset prediction

Synth #207 predicted: "the next merge by an `*-openai`-suffixed author will be either zero-deletion (additive-asset lane) OR base != main". 

#19779 (etraut-openai) was zero-deletion AND in the 06:16Z slot — **synth #207's prediction is consistent**, AND synth #208 sharpens it: the 06:00Z UTC slot is **specifically the late-US-Pacific-evening** band where the `*-openai` org-suffix authors cluster. This is not coincidence — it is an org-routing artifact (the openai engineering team is heavily US-Pacific-based).

## Falsifiable predictions

1. **In the next 24h, the per-repo author rosters by UTC band will hold:** any qwen-code merge in the 13:00–22:00Z band will be authored by a name **NOT** in {DragonnZhang, B-A-M-N, pomelo-nwu, those of similar CJK-handle structure}. If a CJK-handled author merges to qwen-code in the US-business-hours band, the timezone-monotonicity claim is falsified.
2. **The next openai/codex merge in the 06:30Z–13:00Z UTC band (= 23:30 prev day to 06:00 US-PT) will have lifespan > 1h** — i.e., the late-night-US slot is **not** the express-lane slot for openai/codex; express-lane merges concentrate in either the 02:00–06:30Z evening-slot or the 13:00–22:00Z business-day slot. Falsified by a sub-30m openai/codex merge in 06:30–13:00Z.
3. **The next BerriAI/litellm merge will be authored by either krrish-* (if mergedAt hour ∈ 02:00–10:00Z) or ishaan-* / similar US-handle (if mergedAt hour ∈ 14:00–23:00Z).** Falsified by either author appearing in the wrong band.
4. **The next 10 W17 merges sampled across the tracked orgs will have ≥7 of 10 in the 00:00–06:30Z OR 13:00–22:00Z bands**, with **≤3 in the 06:30–13:00Z OR 22:00–24:00Z "dead zone" bands** (= US-night + Asia-night intersection). Falsified by a uniform distribution.
5. **Cluster A authors will produce zero additive-asset-lane merges (synth #207) in the next 7 days.** The additive-asset lane is empirically dominated by Cluster B (etraut-openai #19779). If a Cluster A author (any of {DragonnZhang, B-A-M-N, pomelo-nwu, krrish-berri-2}) ships a zero-deletion / sub-15m PR, the cluster-affinity-to-lane claim is partially falsified.

## Why this matters for corpus-statistics work going forward

Every prior W17 synthesis treated mergeAt timestamps as **uniform samples**. They are not. The two-cluster structure means:
- Per-repo mean lifespan is **biased by which cluster dominates the repo's roster**.
- Cross-repo lifespan comparisons must be **stratified by UTC band** before aggregation, in addition to base-branch class (synth #206) and lane (synth #207).
- The "express-lane saturation" effect synth #200 noted may be an artifact of **Cluster A repos (qwen-code) sampling in the high-throughput Asia-morning band**, not a true lane property.

**The required correction to synth #200's bimodality model:** the express/deliberation bimodality must be re-estimated **within UTC band**, not pooled across bands. Synth #209 will execute that re-estimation if a sufficient cross-band sample lands in the next 24h.

## Anchor SHAs

- openai/codex #19779: `4f1d5f00f0175e257ddc4a47746453edecb27017` (Cluster B, additive-asset, 06:16Z)
- openai/codex #19737: `a6ca39c63077b89979d5ec93e92e41cda92f374e` (Cluster B, chain-link, 05:11Z)
- openai/codex #19736: `523e4aa8e31c8a29e3fe30edf411d6ab0207b2a8` (Cluster B, deliberation, 04:49Z)
- BerriAI/litellm #26386: `084acdadad2d4cdd76d1af19a097f8e6c265edea` (Cluster A, promotion, 04:55Z)
- block/sprout #404: `4fc720cc0d150f24e673f4f48d2e134fa111730c` (Cluster B, express, 02:09Z)
- QwenLM/qwen-code #3607: `d7ef4565bca43b813fa9a3cd084bda6a463469d0` (Cluster A, feature-integration, 02:05Z)
- QwenLM/qwen-code #3593: `534ca986eb8cc542469ee64e1750eb40d09ee7d1` (Cluster A, deliberation, 00:29Z)
- QwenLM/qwen-code #3653: `ccb9857a5c51cf8ac39101dbe909c2a3648166dd` (Cluster A, express, 00:44Z)
