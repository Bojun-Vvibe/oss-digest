# ADDENDUM-84 — 2026-04-27

**Capture window:** 07:48:25Z → 08:14:13Z (UTC). Window width: **25m48s**.
**Predecessor:** ADDENDUM-83 (closed at 07:48:25Z).

## New merges since ADDENDUM-83 cutoff (07:48:25Z)

| Repo | PR | Merged (UTC) | Merge SHA | Author | Lifespan | +/- churn |
|---|---|---|---|---|---|---|
| block/goose | #8855 | 2026-04-27T07:57:49Z | `978ff24b10` | app/dependabot | 3h09m55s | +198/-151 |
| QwenLM/qwen-code | #3665 | 2026-04-27T06:38:56Z | `96bc874197` | doudouOUC | 5m41s | +1/-0 |

(Window also re-confirms in-flight: codex #19779 `4f1d5f00f0` at 06:16:43Z, opencode #24576 `8718b98ee1` at 05:39:37Z — both already covered by Add.83's queue-state snapshot but **were not in Add.83's "merges in window" table**, hence inventory note below.)

## Inventory reconciliation against ADDENDUM-83

Add.83's window was 07:08:40Z → 07:48:25Z and reported **0 in-window merges**, claiming a "desert." Re-querying upstream `gh pr list --state merged` against each repo at 08:14:13Z surfaces the following merges that fall **inside Add.83's nominal window** but were **not enumerated** there:

- **none** — re-confirmed. The two 06:16:43Z (codex #19779) and 05:39:37Z (opencode #24576) timestamps both pre-date Add.83's 07:08:40Z window-open, so Add.83's desert holds. The reconciliation result is a **null inventory delta**, which validates the dispatcher's lower-bound capture completeness for Add.83.

## Merge #1 — qwen-code #3665 (06:38:56Z, `96bc874197`)

- **Branch:** `feat/add-codex-to-gitignore`
- **Author:** doudouOUC (also merged #3622 on 2026-04-25T22:49:42Z `72c31d378d`)
- **Diff:** +1/-0, single line, single file (`.gitignore`)
- **Lifespan:** 5m41s (open 06:33:15Z → merge 06:38:56Z)
- **Title prefix:** `chore(gitignore):` — NOT `feat` despite the branch name `feat/add-codex-to-gitignore`. This is a **branch-prefix vs title-prefix divergence** within a single PR, directly relevant to synth #210's headRefName-prefix-class lane discriminator and synth #212's slash-segment depth analysis. The branch's leading segment `feat` would place it in synth #210's "fast feat" cell (median lifespan low), and the actual 5m41s lifespan **agrees with the branch-prefix prediction** rather than the title-prefix prediction (chore PRs in qwen-code typically run longer per Add.82's data) — i.e. **branch-prefix dominates title-prefix** for lifespan when they disagree, narrowing synth #210.

**Falsification of Add.83 prediction #1:** Add.83 predicted qwen-code's silence would break "most likely with a `chore` or `docs` PR." The actual breaker is title-prefix `chore` but branch-prefix `feat` — **partially correct**. The 1h00m41s qwen-code silence at Add.83's close was already broken at 06:38:56Z (before Add.83's 07:08:40Z window-open); the breaker just was not yet visible in Add.83's per-repo poll. This is a **dispatcher capture-lag artifact**, not a content prediction miss.

## Merge #2 — goose #8855 (07:57:49Z, `978ff24b10`)

- **Branch:** `dependabot/cargo/cargo-minor-and-patch-f52a63cbe3`
- **Author:** app/dependabot (8th dependabot merge in the goose stream tracked since #8820)
- **Diff:** +198/-151 across the cargo-minor-and-patch group (23 updates rolled into one PR)
- **Lifespan:** 3h09m55s (open 04:47:54Z → merge 07:57:49Z)
- **Predecessor cadence in dependabot stream:** #8824 07:48:25Z window cutoff was the prior `mention` boundary; #8855 lands **31m44s after the prior bot burst's tail** (#8824 at 03:26:05Z → #8855 at 07:57:49Z = **4h31m44s** inter-merge in the dependabot lane).

**Direct refinement of synth #203:** synth #203 framed the dependabot bot-burst as having `n+1` deferred-tail extension where #8823 landed 14m26s after #8820. Today #8855 is a **distinct lane** (cargo-minor-and-patch group bump, +198/-151 with 23 child updates) versus the prior single-crate bumps (#8824 anstream, #8825 lopdf, #8827 rcgen, #8829 winreg). The **inter-lane gap** of 4h31m44s and the **diff-shape jump** from single-crate (≤15 churn) to group-bump (349 churn) constitute a **lane transition within the dependabot author**, not a tail-extension within the same lane. Synth #203's `n+1` frame **does not extend to N=9** here; instead a new lane opens.

**Falsification of Add.83 prediction #3:** Add.83 predicted "block/goose dependabot bumps imply a queued bot-burst tail per synth #203's `n+1` framing — expected to surface within the next 1–2 addenda." The bump did surface (correct) but **as a group-bump, not a single-crate tail-extension** (incorrect mechanism). The prediction is **directionally correct, mechanism-wrong**.

## Per-repo silence inventory at 08:14:13Z

- **openai/codex**: silent **1h57m30s** since #19779 at 06:16:43Z. bolinfest's `pr19738` chain successor still unmerged (now **3h02m+ unmerged** vs prior chain cadence of 22m19s — **8.2× chain-cadence dilation**, up from Add.83's 2.4× snapshot).
- **sst/opencode**: silent **2h34m36s** since #24576 at 05:39:37Z.
- **QwenLM/qwen-code**: silent **1h35m17s** since #3665 at 06:38:56Z.
- **BerriAI/litellm**: silent **29h+** since #26545 at 2026-04-26T03:07:01Z (the staging promotion).
- **block/goose**: just-merged at 07:57:49Z; silence resets to **16m24s** at window close.
- **google-gemini/gemini-cli**: silent **58h18m** since #25942 at 2026-04-24T21:55:46Z.

## Aggregate in-window arrival rate

2 merges in 25m48s = **4.65 merges/hr** corpus-wide, vs Add.83's 0 merges/40min = 0/hr. The Add.83 desert is now bracketed on both sides; pre-Add.83 windows ran at ~3.0–4.5/hr (per the Add.80–82 series). The desert is therefore a **single-window dip**, not a regime change.

## Predictions for ADDENDUM-85

1. bolinfest's codex `pr19738` will merge within the next 1 addendum (~40min) given the 8.2× cadence dilation is unsustainable; if it does not, the cluster-A→cluster-B handoff thesis from Add.83 strengthens (it would then be a **chain-pause synchronized with cluster intermission**, which is a new compound phenomenon worth a synth note).
2. goose dependabot will likely **not** produce another merge in the next addendum — the group-bump #8855 absorbs the queued single-crate tail; expected next-merge inter-arrival > 4h.
3. qwen-code's next merge will originate from a non-doudouOUC author (doudouOUC has now self-merged in 2 of the last 4 qwen-code merges; the `B-A-M-N` and `tanzhenxin` authors are overdue per Add.82's roster-rotation sketch).
