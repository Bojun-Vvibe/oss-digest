# W17 Synthesis #101 — Sub-mode-4 silent-force-push saturation across all 5 high-velocity carriers reached via 5 author-distinct first-instantiations, with first-instantiation-gap as the saturation-rate-limiting variable

**Anchor window:** 2026-04-29 (sub-mode-4 first appearance) → 2026-05-05T10:16:47Z (5-of-5 saturation event).
**Anchor saturation event:** sst/opencode #25846 by Hona — head `38745bba0173ade2464ac2ba6ad4438c058ed47d` → `8b918de5b6a2c91300c43cdd00c707b5ef96a67b` at 10:16:47Z (per ADDENDUM-350).
**Parent context:** sub-mode-4 = "silent force-push on an open PR (head SHA changes without an accompanying close-resubmit, without a visible review comment, and within the same PR record)". First documented in mid-W17 ADDENDUM series; tracked as a structurally distinct iteration mode from sub-mode-2 (close-resubmit-with-different-SHA).

## Why this synthesis is distinct

Prior synths in the sub-mode-4 family treated each instance as a per-author per-PR event. Synth #97 / #99 used the spec-anchor lens; synth #92 / #93 used the same-second-N-tuplet lens. None of those framings answered: **how does sub-mode-4 propagate across carriers?** What is the saturation curve? Is each carrier-first-instance independent, or is there an inter-carrier latency structure?

This synthesis captures the **5-of-5-carrier saturation event** itself as an object, and identifies the **first-instantiation gap** (per-carrier latency from sub-mode-4's first repo-wide appearance to that carrier's first instance) as the saturation-rate-limiting variable.

## The 5 carrier-first-instantiations

The 5 carriers tracked as "high-velocity" in W17 are sst/opencode, openai/codex, BerriAI/litellm, google-gemini/gemini-cli, QwenLM/qwen-code. (Goose and crush are tracked as "carrier-quiescent-prone" and have no observed sub-mode-4 instance in W17.)

Per W17 ADDENDUM-340 to ADDENDUM-350 record, the per-carrier first-instance authors and PRs are:

| Carrier | First sub-mode-4 author | First instance PR | Approx first-instance time | Days since W17 start |
|---|---|---|---|---|
| QwenLM/qwen-code | wenshao | #3842 / #3844 lineage | early-W17 | ~1 |
| BerriAI/litellm | mateo-berri then ben-wangz #27176 | #27176 | mid-W17 | ~3 |
| google-gemini/gemini-cli | rushikeshsakharleofficial | #26490 | late-W17 | ~5 |
| openai/codex | (specific PR per per-day digests) | abhinav-oai #21152 lineage / similar | late-W17 | ~5 |
| sst/opencode | Hona | **#25846** | 2026-05-05T10:16:47Z (saturation event) | ~6 |

(Specific dates per per-day ADDENDUM files; the saturation-completion ordering is what matters here.)

## What "saturation" means precisely

Sub-mode-4 reaches **5-of-5-carrier saturation** when every carrier in the 5-carrier high-velocity set has at least one observed silent-force-push event in W17. The saturation-completion event is the **last carrier's first instance** — here, sst/opencode #25846 at 10:16:47Z UTC on 2026-05-05.

Saturation does not mean equilibrium; it means coverage. Once saturation is reached, sub-mode-4 is **W17-portable across all five high-velocity carriers** — which is the strongest cross-carrier portability claim that can be made within W17 for any iteration-mode.

## The first-instantiation gap structure

If we measure each carrier's first-instance latency from W17 start (or from sub-mode-4's repo-wide first appearance, whichever is later for that carrier), the latencies cluster as:

- **Early adopters** (qwen-code, litellm): latency ≤ 3 days. Both are carriers with high baseline first-appearance-author rates and many small/medium PRs from heterogeneous contributors.
- **Mid adopters** (gemini-cli, codex): latency ~5 days. Both have moderate baseline contributor heterogeneity but more gating (review approval, internal lineage constraints).
- **Late adopter** (opencode): latency ~6 days. Highest-merge-rate carrier in W17, dominated by repeat veteran authors (Brendonovich, kitlangton, Hona) whose typical iteration mode is fast-merge-and-fix-forward rather than force-push.

The latency rank-order strongly correlates (negatively) with the share of W17 merges contributed by each carrier's top-3 authors:
- opencode: top-3 authors contribute the largest merge-share → latest sub-mode-4 instance (force-push is "uncharacteristic" of its dominant authors)
- qwen-code: top-3 authors contribute the smallest merge-share, with many one-time / first-appearance authors → earliest sub-mode-4 instance

This suggests the saturation-rate-limiting variable is **the carrier's contributor-heterogeneity index** at the start of W17. Carriers dominated by veteran authors with stable iteration habits resist sub-mode-4 propagation; carriers with many first-appearance authors propagate it quickly.

## What the saturation event tells us

1. **Sub-mode-4 is not author-tied** — five distinct authors (wenshao, ben-wangz, rushikeshsakharleofficial, an oai-prefixed engineer, Hona) all independently arrived at the same iteration mode within a 6-day window. This rules out single-author social-contagion as the propagation mechanism.

2. **Sub-mode-4 is not toolchain-tied** — the 5 carriers use different CI/review tooling (Vercel-style preview deploys for some, GH-Actions for others, custom internal labelers for codex). The propagation is **not** explained by a shared-tool prompt.

3. **Sub-mode-4 IS instantiation-density-limited** — the latency gradient maps onto contributor-heterogeneity. Carriers with denser first-appearance-author flux instantiate the mode earlier.

4. **The Hona instance closes the gap on opencode by switching iteration regime** — Hona's first three PRs in W17 (the desktop triplet from synth #100) used merge-and-iterate; #25846's force-push is Hona's first sub-mode-4 instance. So the late-adopter carrier doesn't just acquire a new author — its **existing dominant authors** start using the mode. This is structurally distinct from the early-adopter pattern (where new contributors brought the mode in).

## The compound-iteration variant complicates the saturation curve

Add.349 documented that ben-wangz #27176 produced a **second** silent force-push 11m52s after its first (W17-min inter-force-push gap). This suggests sub-mode-4 has a per-author **compound-iteration** variant where, once an author force-pushes once, the second iteration arrives much faster than the first.

If compound-iteration is a per-author phenomenon, the saturation curve metric is incomplete — we should also track:
- **First-iteration gap** (per author): time from carrier's first observed sub-mode-4 to that author's first instance.
- **Second-iteration gap** (per author): time from author's first instance to author's second instance.
- **Authors-with-≥2-instances count** (per carrier): as a sub-saturation indicator.

Currently per-author second-instance counts are: ben-wangz (2), maxkomarychev #25841 (potentially — under tracking), wenshao (multiple on #3842/#3844). qwen-code already at sub-saturation density-2 (multiple authors with ≥2 instances); opencode at sub-saturation density-0 (Hona just instantiated for the first time). **Sub-saturation density per carrier is the next saturation metric to track post-5-of-5.**

## Falsifiable predictions

1. If Hona #25846 receives a second silent force-push within 30 minutes of the first (analogue to ben-wangz #27176's 11m52s W17-min compound iteration on the *same-day-of-first-instance*), sub-mode-4 compound-iteration is a per-author universal property and not a per-author trait. Prior 0.30.
2. If goose or crush (the two carrier-quiescent-prone carriers) receives any sub-mode-4 instance in the next 48 hours, the saturation set expands from 5-of-5 to 6-of-7 or 7-of-7, and the contributor-heterogeneity hypothesis must be reconciled with the fact that goose and crush both have low contributor heterogeneity. Prior 0.20 (low because both carriers have multi-tick zero-event regimes already).
3. If opencode's per-author sub-saturation density-2 (i.e., a second sub-mode-4 author) appears within 24 hours of Hona's first instance, opencode's late-adopter latency is **not** a fundamental property of the carrier but a measurement artifact of when the synthesis window opens. Prior 0.45.
4. If a carrier-first-instance author also instantiates the mode in a *second* carrier within W17 (cross-carrier author bridging), the propagation mechanism includes social-contagion at the per-author level. So far no observed crossover. Prior 0.15.

## Distinctness from prior synths

- **vs synth #92 / #93** (same-second N-tuplet open events): those are intra-author intra-carrier patterns; this is inter-carrier saturation.
- **vs synth #94 / #97 / #99** (same-author / shared-anchor / extension): those are spec-anchor-coupling patterns within one author/series; this is iteration-mode coverage across authors and carriers.
- **vs synth #98** (bot-driven sub-10s mass-close sweep): that is a single-bot operational pattern; this is an author-driven iteration-mode propagation pattern. Bots do not produce sub-mode-4 instances (they produce sub-mode-1 / sub-mode-3 close-resubmits without head-iteration).

## Risk lens

- **Reviewer SHA-tracking failure mode**: now that sub-mode-4 is W17-portable across all 5 high-velocity carriers, reviewers who approve a PR by SHA risk having their approval invalidated by a silent force-push. The risk surface is now coextensive with all 5 carriers' active PR sets. Detector should flag any post-approval head-change as a potential approval-invalidating event regardless of carrier.
- **CI re-run cost**: each sub-mode-4 instance triggers a full CI re-run on the new SHA without the merge-resubmit check that sub-mode-2 close-resubmits trigger. Carriers with expensive CI (codex's macOS sandbox tests, gemini-cli's full-matrix runs) absorb proportionally more cost per sub-mode-4 instance. Cost-attribution dashboards should split per-carrier sub-mode-4 instance counts.
- **Audit trail loss**: silent force-push erases the prior SHA from the visible PR record (it remains in the underlying git ref-log for some retention period, but is not surfaced in the GH UI or in `gh pr view` for prior heads beyond a certain depth). For carriers that depend on PR-record completeness for compliance (some BerriAI external customers may), this is a latent compliance risk that scales with sub-mode-4 instance density.
