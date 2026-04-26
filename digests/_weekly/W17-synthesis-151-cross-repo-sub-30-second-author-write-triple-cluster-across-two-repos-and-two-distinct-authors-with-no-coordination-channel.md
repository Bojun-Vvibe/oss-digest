# W17 / synth #151 — Cross-repo sub-30-second author-write triple cluster across two repos and two distinct authors with no coordination channel

## Pattern

At Add.53 close (2026-04-26T11:17:26Z), three independent author-side write events fired across two distinct repos by two distinct human authors within a **17-second envelope**, with no known coordination channel between them:

1. **openai/codex#19606** — last commit `d317ae2c54a6` at **10:55:26Z** by `bolinfest` (the rebase#17 commit on a 5-deep stack `#19606 / #19395 / #19394 / #19393 / #19392`).
2. **QwenLM/qwen-code#3642** — last commit `cd630c14717c` at **10:55:33Z** by `wenshao` (+7 seconds after codex commit; second commit on a 37-minute-old fresh open, +860/−406 content delta).
3. **openai/codex bolinfest stack updatedAt-propagation** — all five stack PRs updated at **10:55:43Z** (+17 seconds after codex commit, +10 seconds after qwen commit).

## Discriminator vs prior synths

This is a **mechanical-co-fire signature** in the spirit of synth #84 (recurring same-second long-tail PR pair co-bump), but synth #84 is **intra-repo same-author** and operates on the same-second granularity for metadata bumps. Synth #151 is structurally distinct on three axes:

| Axis              | Synth #84 (mechanical co-fire) | Synth #151 (cross-repo author triple) |
|-------------------|---------------------------------|-----------------------------------------|
| Repos             | 1 (intra-repo)                 | 2 (codex + qwen-code)                  |
| Authors           | 1 (same-author)                | 2 (bolinfest + wenshao)                |
| Window            | Same-second (sub-1s)           | 17-second envelope                     |
| Event type        | Metadata-only bumps            | 2× content commits + 1× rebase propagation |
| Coordination      | Mechanical (single tool/script)| **None known** between authors         |

This is **not** synth #115 (cross-repo simultaneous same-second long-tail co-bump) either, because synth #115 is **same-author across repos** with metadata-only bumps. Synth #151 is **distinct authors** doing distinct content work.

## Falsifiable predictions (for next 3 windows)

- **P-151.A**: Within the next 3 windows, **another sub-30-second cross-repo author-write triple** will occur on at least 2 of {codex, qwen-code, sst/opencode, litellm} with at least 2 distinct authors. If zero such clusters appear in 3 consecutive windows, the 17-second envelope here is a **single random alignment** rather than a regime feature.
- **P-151.B**: Of the four next bolinfest stack rebase events (rebase#18 → #21), **at least 2 will fall within ≤30 seconds of a wenshao commit on any open qwen-code PR** (#3637, #3642, or new). If 0 of 4, the codex↔qwen-code author-clock alignment is rejected and synth #151 reduces to a one-shot coincidence.
- **P-151.C**: If a fourth co-fire event lands within the same 17-second envelope on any third tracked repo (litellm, sst/opencode, etc.) within the next 2 windows, this **promotes synth #151 from a 2-repo coincidence to a 3-repo regime** and **falsifies synth #143's interpretation** (which assumes per-repo independent quiescence-arrival processes governed only by the conserved 3h03m37s offset).

## Refines / falsifies prior synths

- **Refines synth #84** by extending the same-second mechanical-co-fire concept to a **17-second cross-repo cross-author envelope** with content rather than metadata events.
- **Refines synth #115** by relaxing the same-author constraint to **distinct authors** and extending the bump-type to mixed (commit + rebase propagation).
- **Tests synth #143** at the **author-clock layer** rather than the merge-arrival layer: if synth #151 hardens, the codex↔litellm 3h03m37s arithmetic conservation may be a downstream effect of an unobserved upstream author-clock synchronization rather than independent per-repo merge processes.
- **Stakes a position against the null** that author write-times are independent across repos in this drought window: a 7-second + 10-second sequential alignment across 3 events on 2 repos with 2 unrelated authors has prior probability under independence of roughly (17 / 2400)² ≈ 5e-5 per window-pair, so observing it once in a 7-window drought is suggestive but not conclusive — hence the 3-window P-151.A test.

## Anchor PRs

- openai/codex#19606 (commit `d317ae2c54a6` @ 10:55:26Z)
- QwenLM/qwen-code#3642 (commit `cd630c14717c` @ 10:55:33Z)
- openai/codex#19395 / #19394 / #19393 / #19392 (stack updatedAt @ 10:55:43Z)

## Source addendum

ADDENDUM-53 (window 10:37:24Z → 11:17:26Z, 40m02s).
