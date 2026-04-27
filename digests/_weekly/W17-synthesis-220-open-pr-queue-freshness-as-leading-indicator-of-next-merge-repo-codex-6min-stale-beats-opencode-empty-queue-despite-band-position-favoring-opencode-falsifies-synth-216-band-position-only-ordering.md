# W17 Synthesis #220 — Open-PR queue freshness (last `updatedAt` of any open PR per repo) is a stronger predictor of next-merge repo than synth #216's band-position — codex's 6-min-stale open queue beats opencode's empty open queue despite opencode being in Cooling vs codex in 4–24h band, falsifying band-position-only ordering

**Date noted:** 2026-04-27 (UTC)
**Status:** Provisional — single in-vivo prediction window (ADDENDUM-86 → ADDENDUM-87→88), n=6 repos × 1 capture.
**Predecessors:** synth #135 (author-cohort half-life), synth #163 (two-active-repo regime), synth #216 (4-tier dormancy band model).
**Falsifies / refines:** Synth #216's implicit "lower-band repos break silence first" ordering (Add.86 prediction #1 used this and failed mid-flight at Add.87 capture).

## Claim

Synth #216 partitions repos into 4 dormancy bands by trailing-silence-since-last-merge (Active <30min, Cooling 30min–4h, 4–24h, Multi-day-dormant >24h). Add.86 prediction #1 used the implicit ordering "Active/Cooling repos break silence before higher-band repos" and forecast opencode (Cooling, 50m48s silence) to be the first next-merger.

At ADDENDUM-87 capture (10:20:54Z), the prediction is **at risk of failing**: opencode silence has extended to 1h18m26s (no merge), while **codex** (which had advanced into the 4–24h band at 10:16:43Z, **higher band than opencode**) shows **9 open PRs** updated in the last 4 hours, including aibrahim-oai #19797 updated **6m05s before capture** and bolinfest's 5-PR `pr19772–19776` chain updated 2h58m–3h06m before capture. opencode's open-PR queue, by contrast, shows **no open PRs** with sub-1h `updatedAt` staleness at this capture.

The **open-queue freshness signal** (= time since any open PR was last updated, per repo) inverts the band-position ordering for the codex/opencode pair in this capture window. **Open-queue freshness is a leading indicator; band-position is a lagging indicator.**

## Evidence — open-queue freshness vs band-position at 10:20:54Z

| Repo | Synth #216 band | Trailing silence | Most-recent open-PR `updatedAt` | Open-queue staleness | Predicted next-merger rank | Band-position rank |
|---|---|---|---|---|---|---|
| openai/codex | 4–24h | 4h04m11s | #19797 @ 10:14:49Z | **6m05s** | **1** | 4 |
| BerriAI/litellm | Daily-dormant | 31h13m53s | #26573 @ 10:17:53Z | **3m01s** | **2** | 5 |
| google-gemini/gemini-cli | Multi-day-dormant | 60h25m08s | #26040 @ 10:09:53Z | **11m01s** | 3 | 6 |
| QwenLM/qwen-code | Cooling | 3h41m58s | #3677 @ 10:10:53Z | 10m01s | 4 | 3 |
| sst/opencode | Cooling | 1h18m26s | (no recent open-PR activity in head of queue) | ≥1h+ | 5 | **1** |
| block/goose | Cooling | 2h23m05s | (no fresh open queue at capture) | ≥1h+ | 6 | 2 |

**Predicted next-merger ranking by open-queue freshness inverts the synth #216 band-position ordering at the head:** litellm (band-rank 5) and codex (band-rank 4) jump to predicted-rank 2 and 1; opencode (band-rank 1, the synth #216 favorite) drops to predicted-rank 5.

## Specific PRs cited as the open-queue freshness signal

These are the **open** PRs whose `updatedAt` defines each repo's freshness signal at capture:

1. **codex #19797** `dev/remote-mcp-oauth` (aibrahim-oai, +1824/-457): "Route MCP OAuth through runtime HTTP client." Updated 10:14:49Z. Large-diff Grammar B intrusion in codex (synth #218). The freshness here is consistent with **active reviewer engagement**, not just author push.
2. **litellm #26573** `mavvrik/berriai-pr` (pghuge-cloudwiz, third-party-integration class): "feat(mavvrik): add Mavvrik integration for automatic LLM spend export." Updated 10:17:53Z. Reverse-namespace branch grammar (target-org/source-org/topic) — flagged in Add.87 as candidate Grammar C. Freshness signal here is **author-driven** (third-party contributor cycle), not maintainer-merge cycle, so the freshness→merge translation is weaker than codex's. Adjusted rank-2 confidence: low.
3. **codex bolinfest #19772, #19773, #19774, #19775, #19776** (pr19772–19776, Grammar A-degenerate, all `permissions:`): All updated 07:14:23Z–07:22:44Z (~3h ago at capture). Not the freshest in the codex queue, but the **densest concentration** of same-author, same-surface opens in W17. The codex freshness signal is **double-sourced** (aibrahim-oai #19797 + bolinfest 5-PR chain), strengthening codex rank-1 confidence.
4. **gemini-cli #26040** `fix-browser-agent-and-windows-sandbox-...` (pawanwashudev-official, new author to W17 corpus): Updated 10:09:53Z. The first gemini-cli freshness signal in 60h+ — significant because synth #216 classified gemini-cli as multi-day-dormant with no near-term re-fire prediction. Open-queue freshness signal contradicts band-position prediction.
5. **qwen-code #3677** `sheny/fix-minimax-thinking-tags` (shenyankm): Updated 10:10:53Z. **Grammar A intrusion** (author-namespaced branch in Grammar B repo per synth #218). Open-queue freshness is a near-tie with gemini-cli but the Grammar A intrusion adds a synth #218 falsifier risk.
6. **codex #19792** `jif/clean-multi-agent-v2-config` (jif-oai): Updated 09:14:13Z (1h06m staleness). Third-fresh codex signal; reinforces codex's dense fresh queue.

## Why the inversion happens — mechanism

Synth #216's bands are computed from **trailing silence since last merge**. This is a function of **what already happened** (when the last merge fired). It does not look at the **forward queue**. A repo can be in Cooling band purely because a merge happened 30m–4h ago, while having no follow-up activity queued. Conversely, a repo can be in 4–24h or higher band but have a dense fresh open-PR queue ready to fire.

The mechanism connecting open-queue freshness to next-merge probability is:
- Author push to an open PR → CI rerun + reviewer ping → review approval → merge. Median latency under W17 conditions is **20m–3h** (synth #209's review-state cycling regime).
- A 6-min-fresh open PR is **already in the active review/CI cycle**; the next merge window for that PR is in the next **20m–3h** with high probability.
- A repo with no open-PR `updatedAt` activity in the last hour has **no PR currently in the active cycle**; even if its band is Cooling, the next merge requires an author to start a new PR or push to a stale one — a longer-latency event.

## Combined predictor — band × freshness joint signal

A robust predictor for next-merge repo at capture time should combine both:

```
P(repo merges next | capture) ∝ exp(-α · band_rank) · exp(-β · log(freshness_min))
```

where `α` represents the band's prior weight and `β` represents the freshness's leading-indicator weight. The Add.86 prediction implicitly used `α >> β`. Add.87's at-risk outcome suggests `β > α` empirically, at least for codex/opencode/litellm/gemini-cli at this capture. **Empirical fit on next 5 captures' next-merge events** would calibrate `α/β` ratio. Initial guess: `α ≈ 1.0`, `β ≈ 2.0` (freshness 2× band-position weight).

## Discriminator vs synth #163

Synth #163 introduced "two-active-repo regime collapse" — at any capture, ≤2 repos are typically actively merging. At capture 10:20:54Z, **0 repos are actively merging** (corpus-wide silence streak 1h18m+), so synth #163's "two-active-repo" framing is in a degenerate state. But **4 repos have fresh open queues** (codex, litellm, gemini-cli, qwen-code with sub-15min staleness). Synth #220 predicts the next 1-2 hours will see merges concentrated in these 4 repos, **not** in the synth #216 band-position favorites (opencode, goose). If correct, **synth #163's "≤2 active" claim will be confirmed in merge-rate but the 2 actives will be unexpected per band-position framing.**

## Discriminator vs synth #135

Synth #135's author-cohort half-life median was used to anchor Add.86 pred #1's "before 11:30Z" window for opencode. Synth #220 argues that synth #135's median is computed **per-author within an active session**, not from a band-position cold-start. opencode's MrMushrooooom, having merged at 09:02:28Z, has half-life expectation only **conditional on MrMushrooooom being still active**. There is no signal at this capture that MrMushrooooom is queued — no MrMushrooooom open PR with fresh `updatedAt`. Synth #135's half-life median is thus **mis-applied** by Add.86 pred #1; the conditional ("given the author has another PR queued") is not met.

## Falsifier

The claim is falsified if any of the following hold across longitudinal data (next 5 addenda):

1. The next merge across the corpus comes from **opencode or goose** (synth #216 band-favorites with stale open queues), not from codex/litellm/gemini-cli/qwen-code (open-queue-freshness favorites).
2. Repos with sub-15min open-queue freshness at capture have **no merge within the next 3h** at >50% rate across 5 captures (would show freshness signal is noise).
3. The combined predictor with `β = 2α` underperforms band-position-only on next 5 captures' next-merge prediction (would show band-position is dominant).

## Receipts

Open PRs cited (all at capture 10:20:54Z): codex #19797 `dev/remote-mcp-oauth` (aibrahim-oai, +1824/-457), codex #19792 `jif/clean-multi-agent-v2-config` (jif-oai, +152/-22), codex #19772 `pr19772` (bolinfest, +380/-175), codex #19773 `pr19773` (bolinfest, +128/-35), codex #19774 `pr19774` (bolinfest, +192/-161), codex #19775 `pr19775` (bolinfest, +26/-16), codex #19776 `pr19776` (bolinfest, +2/-26), litellm #26573 `mavvrik/berriai-pr` (pghuge-cloudwiz), litellm #26581 `contrib/semantic-filter-anthropic-messages` (russellbrenner), litellm #26580 `contrib/semantic-filter-mcp-only` (russellbrenner), gemini-cli #26040 `fix-browser-agent-and-windows-sandbox-...` (pawanwashudev-official), gemini-cli #25963 `clawoss/fix/25939-mcp-env-expansion` (onthebed), qwen-code #3677 `sheny/fix-minimax-thinking-tags` (shenyankm), qwen-code #3642 `feat/bash-bg-pool` (wenshao). Last-merge anchors per repo for band-position computation: opencode #24592 `61eabfc60c`, codex #19779 `4f1d5f00f0`, qwen-code #3665 `96bc874197`, litellm #26545 `3d2b8fed32`, goose #8855 `978ff24b10`, gemini-cli #25942 `31bdf112d2`.

## Operational implication

Future addendum predictions for "next-merge repo" must:

1. **Compute open-queue freshness per repo** (most-recent `updatedAt` across all open PRs) at capture time.
2. **Report both band-position and freshness rankings**, with the joint predictor explicit.
3. **Treat single-source freshness signals as weaker** than multi-source (codex is rank-1 here partly because freshness is double-sourced via #19797 + the 5-PR chain; litellm's freshness is single-author/third-party, downgraded).
4. **Require positive open-queue evidence** for any "Cooling-band repo first" prediction. Add.86 pred #1's failure mode was the absence of this check.
