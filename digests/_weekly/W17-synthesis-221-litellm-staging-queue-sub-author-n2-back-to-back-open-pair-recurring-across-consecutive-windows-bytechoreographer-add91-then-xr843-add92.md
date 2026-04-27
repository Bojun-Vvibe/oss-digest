# W17 Synthesis #221 — litellm staging-queue sub-author N=2 back-to-back open-pair recurring across consecutive ADDENDUM windows: Bytechoreographer #26601/#26600 (Add.91) followed by xr843 #26604/#26603 (Add.92) establishes sub-author N=2 open-pair as a regular litellm-only mode distinct from synth #92's same-second disjoint burst and synth #194's open-then-merge subsystem doublet

**Date noted:** 2026-04-27 (UTC)
**Status:** Provisional — n=2 sub-author back-to-back open-pairs across 2 consecutive windows in 1 repo (litellm). Prediction-bearing.
**Predecessors:** synth #92 (same-second N=4 disjoint burst by single author), synth #190 (Crush same-subsystem flat doublet on notifications), synth #194 (Crush subsystem doublet then docs pivot triplet), synth #199 (title-prefix discipline as merge-velocity correlate).
**Distinguishes from:** synth #190/#194 (those are Crush-repo doublets that **merged**; the litellm pattern is **open-only and stalled**). synth #92 (same-second; the litellm pattern is **1m–2m gap, not same-second**).

## Claim

In ADDENDUM-91 (capture window 12:43:52Z → 13:24:30Z), litellm received two PRs from author Bytechoreographer:
- #26601 (`fix(ui): prevent infinite re-render loop in VirtualKeysTable`) opened 12:56:37Z
- #26600 (`Fix/credential list stale on add model`) opened 12:52:41Z (3m56s before #26601)

Both are UI-fix-shaped, both staging-base, both stalled at open with no merge by Add.91 or Add.92 captures.

In ADDENDUM-92 (capture window 13:24:30Z → 14:13:16Z), litellm received two PRs from author xr843 (Tim Ren):
- #26603 (`fix(proxy): set verbose_logger level in init_verbose_loggers when LITELLM_LOG=INFO/DEBUG`) opened 14:11:15Z
- #26604 (`fix(health-check): strip max_tokens before non-chat handlers (dall-e, gpt-image-1, embeddings, etc.)`) opened 14:12:48Z (1m33s after #26603)

Both are `fix:`-prefix shaped, both touch infra surfaces, both opened in a sub-2-minute back-to-back burst.

**The sub-author N=2 back-to-back open-pair is now a recurring litellm-staging mode** — observed in 2 consecutive ADDENDUM windows, by 2 distinct authors, with both pairs stalled at open at observation time. **No other repo in the 7-repo corpus shows this pattern in either window.**

## Evidence — exact PR refs and SHAs

| Window | Author | PR A | PR A SHA | PR A opened (UTC) | PR B | PR B SHA | PR B opened (UTC) | Inter-PR gap | Status at next capture |
|---|---|---|---|---|---|---|---|---|---|
| Add.91 | Bytechoreographer | litellm #26600 | `cde26af1` | 12:52:41Z | litellm #26601 | `2d02176c9f` | 12:56:37Z | **3m56s** | both OPEN, unchanged headRefOid through Add.92 |
| Add.92 | xr843 | litellm #26603 | (head SHA captured at PR list time) | 14:11:15Z | litellm #26604 | (head SHA captured) | 14:12:48Z | **1m33s** | both OPEN at Add.92 capture (just-opened) |

Cross-pair properties:
- **Surface heterogeneity within pair:** Bytechoreographer's pair = UI-render + UI-credential; xr843's pair = proxy-logger + health-check. Both pairs internally disjoint at the surface level — author is **not** doing a stack; they are filing **two independent fixes in one session**.
- **Title-prefix consistency within pair:** Bytechoreographer mixes `fix(ui)` + non-conventional title; xr843 uses `fix(proxy)` + `fix(health-check)` cleanly. xr843 conforms to synth #199's title-prefix discipline, Bytechoreographer does not.
- **Base branch:** both pairs target litellm staging (not main), consistent with Add.91 observation that litellm mainline is 35h+ dormant.

## Discriminator vs precedents

- **vs synth #92 (same-second N=4 disjoint burst):** synth #92 requires same-second timestamp (Δ < 1s). The litellm pattern has 1m33s and 3m56s gaps — **two orders of magnitude slower**. The mechanism is therefore not bot/script-driven simultaneous file but human-paced rapid-sequential file.
- **vs synth #190 (Crush subsystem doublet on notifications):** synth #190's PRs **merged**. Both litellm pairs are open-stalled. **Open-stalled vs merged is a fundamentally different lifecycle outcome** — the litellm pattern reveals queue saturation, not subsystem ownership.
- **vs synth #194 (Crush doublet→triplet pivot):** synth #194 is N=3 with a docs pivot. Both litellm pairs are flat N=2 on infra/UI surfaces, no docs pivot.
- **vs synth #97 (same-author N=3 self-merge with shared spec file):** synth #97 is intra-author **self-merge** series. The litellm pattern has zero merges — the author **cannot self-merge** (no maintainer permission), so the pattern is **author-bounded queueing** rather than author-bounded merging.

## Why litellm specifically

litellm has **34h+ mainline dormancy** as of Add.92 capture. Maintainer attention is concentrated on staging-base PRs (which form the pre-promotion queue). External contributors who land in the staging queue and have **two independent fixes ready at the same author session** file both back-to-back rather than waiting for one to merge. This explains why the pattern emerges in litellm and not in (e.g.) codex (where jif-oai-class authors **can self-merge** and therefore don't accumulate N=2 open-pairs — they file-and-merge serially, observed in synth #120/#222) or qwen-code (where the mainline is more responsive to external contributors).

## Prediction (in-vivo at synth-creation time)

1. **Highest-confidence:** xr843 will not file a third PR by Add.93 (sub-author N=2 mode is ceiling-bound for this author class — Bytechoreographer also stopped at N=2). If xr843 files an N=3 PR, the pattern degrades into a different shape (sub-author N≥3 burst).
2. **Highest-confidence:** at least one of {#26600, #26601} will be **stalled past the 24-hour open marker** (12:52:41Z + 24h = 2026-04-28T12:52:41Z) without merge. The Bytechoreographer pair has shown 1h17m+ stall by Add.92 capture.
3. **Medium-confidence:** Add.93 will introduce a **third sub-author N=2 back-to-back open-pair in litellm** by yet a different author. If confirmed across 3 consecutive windows, the pattern is no longer provisional and is upgraded to **stable litellm-staging contributor mode**.
4. **Medium-confidence:** when one of these pairs eventually merges, **both halves merge within a single window** (paired-merge property), mirroring the open-pair structure. If only one half merges, the pattern is asymmetric (mirror of synth #87's asymmetric half-merge of sub-10s doublet).
5. **Speculative:** the pattern is an artifact of litellm's `Internal Staging` → `main` promotion architecture (cf. litellm #26545 `[Infra] Promote Internal Staging to main` merged 2026-04-26T03:07:01Z by yuneng-berri). External contributors target staging directly; staging-to-main promotion happens infrequently in batches, so author sessions accumulate as N=2 open-pairs that wait for the next promotion sweep.

## Cross-references

- **synth #92** (same-second N=4 burst): same-author multi-PR but at 4-orders-of-magnitude faster pace. The litellm pattern is the human-paced cousin.
- **synth #97** (N=3 self-merge series with shared spec file): same-author multi-PR but with **merge authority**. The litellm pattern is the **no-merge-authority** cousin.
- **synth #120** (codex jif-oai N=6 self-merge sprint): same-author multi-PR with full self-merge authority — the **opposite-pole** of the litellm pattern.
- **synth #199** (title-prefix discipline as merge-velocity correlate): xr843's pair conforms to title-prefix discipline (`fix(proxy)` + `fix(health-check)`); Bytechoreographer's pair does not. Prediction: xr843's pair merges faster than Bytechoreographer's pair if both eventually merge — testable at next promotion sweep.
- **ADDENDUM-92 pred #4**: re-armed expectation that xr843 may reach N=3 by Add.93. If confirmed, this synth is partially falsified at the N=2-ceiling claim.
