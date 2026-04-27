# ADDENDUM-85 — 2026-04-27

**Capture window:** 08:14:13Z → 09:08:50Z (UTC). Window width: **54m37s**.
**Predecessor:** ADDENDUM-84 (closed at 08:14:13Z).

## New merges since ADDENDUM-84 cutoff (08:14:13Z)

| Repo | PR | Merged (UTC) | Merge SHA | Author | Lifespan | +/- churn |
|---|---|---|---|---|---|---|
| sst/opencode | #24592 | 2026-04-27T09:02:28Z | `61eabfc60c` | MrMushrooooom (Jack) | 19m12s | +20/-20 |

Single-merge window, single repo. All other tracked repos remain silent across the full 54m37s.

## Merge #1 — opencode #24592 (09:02:28Z, `61eabfc60c1005d1b2b11849d70696a3dcef293e`)

- **Branch:** `jack/deepseek-flash-go-limits` — author-prefix `jack/` (synth #210 lane), 3-segment depth (synth #212 fingerprint cell `(jack, 3)`).
- **Title:** `update Go DeepSeek flash limits for cache pricing drop`
- **Diff shape:** +20/-20 — **net-zero churn**, perfectly symmetric (refactor-class, not feature-class). Synth #210 would route this by branch-prefix to the "author-namespaced" lane, not a `feat`/`fix`/`chore` cell.
- **Lifespan:** 19m12s (open 08:43:16Z → merge 09:02:28Z).
- **Author cadence:** MrMushrooooom previously merged #24575 (`1e191ba815`) at 05:06:52Z (Go DeepSeek **request estimates** for cache pricing). #24592 is the **paired follow-up** on the same DeepSeek/Go/cache-pricing surface, **3h55m36s after** the predecessor. Both PRs share the same author, the same `jack/deepseek-go-*` branch-prefix family, and same conceptual subsystem (Go SDK pricing tables). This is a **same-author surface-cluster doublet** with mid-range gap (vs synth #85's sub-10s same-author doublet and synth #50's post-own-merge cascade).
- **Title-prefix divergence:** branch-prefix `jack/` (author-namespaced) vs no title prefix at all (`update ...`). Title prefix is **absent**, not just disagreeing — extends synth #213's branch/title dissociation case from a `chore` vs `feat` mismatch (qwen-code #3665) to a **null title-prefix** dissociation in a different repo. Synth #213's `n=1` becomes `n=2` and crosses repos.

## Inventory reconciliation against ADDENDUM-84

Add.84 enumerated only 2 merges in its 25m48s window (#8855, #3665) but cluster-B activity from earlier in the day (codex stack 03:31–05:11Z, opencode burst 03:47–05:39Z) was treated as **already covered** by Adds 78–82 and only summarized at the silence-inventory level. Cross-checking `gh pr list --state merged --limit 8` per repo at 09:08:50Z confirms **no missed merges** in either Add.84's own window or the trailing 30 min before it. The completeness invariant holds.

Specifically re-confirmed merges (not new, but revalidated by SHA against upstream):
- codex #19779 `4f1d5f00f0175e257ddc4a47746453edecb27017` @ 06:16:43Z (etraut-openai)
- codex #19737 `a6ca39c63077b89979d5ec93e92e41cda92f374e` @ 05:11:49Z (bolinfest, chain tail)
- codex #19736 `523e4aa8e31c8a29e3fe30edf411d6ab0207b2a8` @ 04:49:30Z (bolinfest)
- codex #19735 `0ccd659b4b33346fd2bdd096e5c2da06a4e5c668` @ 03:59:59Z (bolinfest)
- codex #19734 `0d8cdc0510c62a75b3d308b1e3ea3bb54eda0d52` @ 03:31:24Z (bolinfest)
- opencode #24576 `8718b98ee1e7c114fa2d2055295d39d01b70b6f4` @ 05:39:37Z (Hona)

The bolinfest 4-PR `pr19734→19737` chain landed in **1h40m25s wall-time** (03:31:24Z→05:11:49Z), inter-merge gaps **28m35s / 49m31s / 22m19s**. The **49m31s middle gap** (#19735→#19736) is **2.2× the trailing 22m19s gap** (#19736→#19737), confirming synth #205's chain-coupling-review-penalty-front-loaded-on-chain-base claim with one more data point: the **front-loaded penalty is on the chain link adjacent to the largest diff**, not on the link adjacent to the chain base. #19736 is +288/-201 (largest in the chain), and the gap **on either side of it** (49m31s before, 22m19s after) is asymmetric: penalty is **before** the heavy diff, not after. Synth #205 needs revision: the front-loaded review penalty attaches to **anticipation of the next link's diff**, not to retrospective work on the current link.

## Falsification check on ADDENDUM-84 predictions

1. **Add.84 pred #1**: "bolinfest's codex `pr19738` will merge within the next 1 addendum (~40min) given the 8.2× cadence dilation is unsustainable." → **FALSIFIED.** No `pr19738` merge in this 54m37s window. The cadence dilation is now **9.2×** (3h57m+ unmerged vs 22m19s prior chain cadence). The "unsustainable" framing was overconfident; chain pauses can extend to ≥10× cadence without breaking. The cluster-A→cluster-B handoff thesis from Add.83 strengthens to **chain-pause synchronized with cluster intermission** — flagged for synth #215.
2. **Add.84 pred #2**: "goose dependabot will likely **not** produce another merge in the next addendum — group-bump #8855 absorbs the queued single-crate tail; expected next-merge inter-arrival > 4h." → **CORRECT** (so far, 1h11m+ silence post-#8855, well within the >4h prediction).
3. **Add.84 pred #3**: "qwen-code's next merge will originate from a non-doudouOUC author." → **NOT YET TESTED** (qwen-code silent **2h29m54s** since #3665 at 06:38:56Z).

## Per-repo silence inventory at 09:08:50Z

- **openai/codex**: silent **2h52m07s** since #19779 at 06:16:43Z. bolinfest `pr19738` chain successor unmerged for **3h57m+** vs prior 22m19s chain cadence (**10.6× dilation**, up from Add.84's 8.2×).
- **sst/opencode**: silence reset to **6m22s** at window close (just-merged #24592).
- **QwenLM/qwen-code**: silent **2h29m54s** since #3665 at 06:38:56Z.
- **BerriAI/litellm**: silent **30h01m+** since #26545 at 2026-04-26T03:07:01Z (staging promotion).
- **block/goose**: silent **1h11m01s** since #8855 at 07:57:49Z.
- **google-gemini/gemini-cli**: silent **59h13m+** since #25942 at 2026-04-24T21:55:46Z. Now exceeds **48h × 1.23**, a regime-change candidate for synth #216.

## Aggregate in-window arrival rate

1 merge in 54m37s = **1.10 merges/hr** corpus-wide, vs Add.84's 4.65/hr and Add.83's 0/hr. The 3-window rolling rate (Add.83+84+85) is **3 merges / 121m05s = 1.49/hr** — substantially below the Add.78–82 baseline of ~3.0–4.5/hr. The single-window dip framing from Add.84 is now **2-of-3 below baseline**, weakening the "single dip" claim toward a **weekend-tail regime** hypothesis (today is 2026-04-27, Monday UTC but late-Sunday US Pacific at capture time).

## Predictions for ADDENDUM-86

1. The bolinfest `pr19738` chain successor will either (a) land in the next 60 min — confirming the chain-pause-as-end-of-cluster framing, with the pause being a **terminal pause**, not a mid-chain pause; or (b) extend past 4h since predecessor — establishing chain abandonment as a distinct mode (no prior bolinfest chain has been abandoned mid-stack in the corpus).
2. opencode will produce a second merge within 30 min (MrMushrooooom doublet sets a same-author cadence; Hona / rekram1-node / thdxr remain queued from cluster-B activity windows).
3. gemini-cli silence will break with a **release-engineering** PR (gemini-cli-robot or scidomino) rather than a feature merge, given the 59h+ silence pattern matches prior pre-release quiet periods.
