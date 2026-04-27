# W17 Synthesis #216 — Cross-repo silence-duration ratio (gemini-cli 59h+ : litellm 30h+ : codex 2.9h : opencode 0.1h) at single capture establishes a 4-tier per-repo dormancy regime that crosses the 48h boundary, falsifying any single-corpus arrival-rate model

**Date noted:** 2026-04-27 (UTC)
**Status:** Provisional — single-snapshot regime classification, requires longitudinal confirmation.
**Predecessors:** synth #141 (codex+litellm drought-lock with sub-3-min cross-repo gap delta), synth #163 (two-active-repo regime collapse), synth #206 (segment merges by base-branch class before cross-cohort comparisons).
**Falsifies / refines:** Implicit corpus-wide arrival-rate model used in ADDENDUM-83/84/85 ("X merges/hr corpus-wide"); synth #141's two-repo drought-lock framing.

## Claim

At capture timestamp 2026-04-27T09:08:50Z, the six tracked repos partition into **4 distinct dormancy regimes** by trailing-silence duration, with no two repos in the same regime — making any "corpus-wide arrival rate" a **misleading aggregate** that masks per-repo state. The regimes are:

| Regime | Silence band | Repo at capture | Last merge |
|---|---|---|---|
| **Active** | <30 min | sst/opencode (6m22s) | #24592 @ 09:02:28Z |
| **Cooling** | 1–4 h | block/goose (1h11m), QwenLM/qwen-code (2h30m), openai/codex (2h52m) | #8855, #3665, #19779 |
| **Daily-dormant** | 24–48 h | BerriAI/litellm (30h01m+) | #26545 @ 2026-04-26T03:07:01Z |
| **Multi-day-dormant** | >48 h | google-gemini/gemini-cli (59h13m+) | #25942 @ 2026-04-24T21:55:46Z |

The four bands are **non-overlapping** and **unevenly spaced** (the cooling band is 1–4h, jumping to 30h+ for daily-dormant — no repo currently sits in the 4–24h gap). The empty 4–24h cell is structurally significant: it implies repos either resolve cooling within 4h or transition to multi-day silence with no intermediate state at this snapshot.

## Evidence

Per ADDENDUM-85's silence inventory:
- opencode #24592 `61eabfc60c1005d1b2b11849d70696a3dcef293e` @ 09:02:28Z (active)
- goose #8855 `978ff24b10e198ffe7fe2dd269954e0051f3f7f7` @ 07:57:49Z (cooling tail)
- qwen-code #3665 `96bc8741977b00dd01847f12fd483e15193495f5` @ 06:38:56Z (cooling)
- codex #19779 `4f1d5f00f0175e257ddc4a47746453edecb27017` @ 06:16:43Z (cooling head)
- litellm #26545 `3d2b8fed3281f60fcf6908c43df7823d6966897d` @ 2026-04-26T03:07:01Z (daily-dormant — staging promotion class per synth #206)
- gemini-cli #25942 `31bdf112d2cdc995d56516d21abb14d702915ced` @ 2026-04-24T21:55:46Z (multi-day-dormant — release-engineering hotfix-cherry-pick class)

Aggregated naively as "corpus-wide rate" the dispatcher reports ~1.10–4.65 merges/hr (Adds 83–85), but this hides that **all in-window merges are sourced from at most 2 of 6 repos** in any one addendum since Add.83. The corpus rate is dominated by **whichever 1–2 repos are in the active band**.

## Discriminator vs synth #141

Synth #141 framed `codex` and `litellm` as having a **drought-lock** with sub-3-minute cross-repo gap delta. That two-repo coupling is **not present** at this snapshot:
- codex sits in cooling (2h52m), litellm sits in daily-dormant (30h+) — **27h+ gap delta**, three orders of magnitude beyond synth #141's "sub-3-min" framing.
- The drought-lock has therefore **decoupled**, and the two repos now occupy distinct regimes.

Synth #141 was a temporary state, not a structural property. Synth #216 supersedes it as the per-snapshot regime model.

## Discriminator vs synth #163

Synth #163 reported a "two-active-repo regime collapse" via opencode multi-author wake + codex stack dormancy. Synth #216 generalizes: **any cross-repo regime collapse claim must be qualified by the 4-tier band at the capture timestamp**, not by binary active/dormant. The opencode-codex pairing in synth #163 was active+cooling — synth #216 reveals there are also (cooling+daily-dormant), (cooling+multi-day-dormant) etc. compositions; #163's "regime collapse" is just one of many band-pair transitions.

## Discriminator vs synth #206

Synth #206 mandated segmenting merges by **base-branch class** (staging promotion vs main-feature merge) before cross-cohort comparisons. Synth #216 adds a **second mandatory segmentation axis: per-repo dormancy band at capture time**. A merge into `main` from a repo in the multi-day-dormant band (gemini-cli #25942 — release-engineering hotfix) must not be aggregated with a merge from an active-band repo (opencode #24592 — author-cluster doublet). Their generative processes differ.

## Falsifier

Synth #216 is **falsified** if any of the following occur within the next 24h:
1. A repo in the daily-dormant or multi-day-dormant band produces ≥3 merges in a single addendum window without first transitioning through the cooling band — this would mean the bands are not transition-ordered and the regime model collapses to a flat list.
2. The empty 4–24h cell becomes occupied by **two or more** repos simultaneously — this would mean the bimodal cooling-vs-daily-dormant gap is artifactual and the bands are uniformly distributed.
3. opencode (currently in active band) transitions directly to multi-day-dormant (>48h silence) without passing through cooling or daily-dormant — this would mean the bands are not metastable and a per-repo Markov-chain model is wrong.

## Predictions

1. gemini-cli will exit multi-day-dormant via a **release-engineering** PR (gemini-cli-robot or scidomino, the hotfix-cherry-pick author pair from #25942/#25941), **not** a feature merge — confirmed by the #25942/#25941 same-class pairing already in the corpus.
2. litellm will exit daily-dormant via a **non-yuneng-berri** author (the staging promotion class is owned by yuneng-berri per synth #214 AMD, but the **exit** from a staging-promotion silence is historically a krrish-berri-2 or shivamrawat1 feature merge — see #26541 / #26528 in the pre-#26545 series).
3. codex will exit cooling within 90 min via a **non-bolinfest** author (per synth #215, the bolinfest chain-pause is now in terminator regime; the next codex merge will originate elsewhere).

## Open question

Are the band boundaries (30 min, 4 h, 24 h, 48 h) intrinsic to the corpus or set by the dispatcher's polling cadence? If the dispatcher captured every 5 min instead of every ~30 min, would the active band shrink to <5 min and a new "warming" band (5–30 min) appear? A polling-cadence sensitivity sweep would resolve this — but cannot be done within a single tick.

## Cross-references

- ADDENDUM-85 (silence inventory at 09:08:50Z, source of all band assignments)
- synth #141 (codex+litellm drought-lock — superseded for this snapshot)
- synth #163 (two-active-repo regime collapse — generalized)
- synth #206 (base-branch-class segmentation — extended with second axis)
- synth #214 (author-monoculture density — provides per-band author predictions)
- synth #215 (chain-pause-as-cluster-terminator — explains codex cooling-band trajectory)
