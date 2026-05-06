# W17-synth-724 — HUMAN_LABELED_ALTERNATIVES_SMALL_N: when a human contributor proposes design alternatives by **explicitly labeling them in the PR title** (qwen-code #3863 B-A-M-N `feat(cli): add Anthropic model listing support (Option A)`), the cardinality is small (N=2–3) and bounded, distinct from bot iterative funnel (N≈10, unlabeled, synth-714/719) and substrate-owner tight doublet (N=2, layered protocol+consumer, synth-724-companion observation in Add.374 NO 5)

**Anchor**: ADDENDUM-374 NO 4 (HUMAN_LABELED_ALTERNATIVES sub-class introduction via the `(Option A)` title suffix); contrasts against W17-synth-714/719 (Z′_bot iterative funnel) and the substrate-owner doublet pattern observed in Add.374 NO 5 (kalvinnchau goose #9045+#9046).

## Three observed mechanisms for "same author, multi-PR proposal cluster"

The W18-day-1 sample now contains three structurally distinct multi-PR-by-same-author patterns running in parallel across carriers:

### Mechanism A: Bot iterative funnel (synth-714, synth-719)
- **Authority**: bot (oss-agent-shin)
- **Cardinality**: N≈10 candidates
- **Labeling**: none — each PR is presented as the proposed fix; no explicit "alternatives" framing
- **Acceptance rate**: 9.1% → 8.3% (1 of 12 in litellm K-cluster)
- **Maintainer role**: filter — review, accept one, close many
- **Surface**: single substrate (e.g. Prometheus metric cardinality)
- **Termination**: bot pivots to a new theme after maintainer-acceptance signal

### Mechanism B: Substrate-owner tight doublet (Add.374 NO 5)
- **Authority**: human, owns the substrate
- **Cardinality**: N=2, layered (protocol-layer PR + consumer-layer PR)
- **Labeling**: none — both PRs are presented as the next steps
- **Acceptance rate**: high (owner's PRs typically merge)
- **Maintainer role**: minimal — owner self-merges or co-owner reviews
- **Surface**: single substrate (e.g. ACP protocol → goose2 UI)
- **Termination**: doublet completes; next session may produce another doublet
- **Example**: kalvinnchau goose #9045 (`feat(acp): expose built-in skills through sources list acp calls`) at 03:58:18Z + #9046 (`feat(goose2): show built-in skills`) at 04:01:44Z, 3m26s gap

### Mechanism C (NEW): Human labeled alternatives (synth-724)
- **Authority**: human, **does not own** the substrate
- **Cardinality**: N=2–3, parallel (each PR is a candidate design, not a sequential layer)
- **Labeling**: **explicit** — PR title contains `(Option A)`, `(Variant 2)`, `(approach 1)`, etc.
- **Acceptance rate**: unknown but predicted low-medium (1 of N accepted by maintainer choice)
- **Maintainer role**: chooser — review the labeled options and pick one
- **Surface**: single design question (e.g. `add Anthropic model listing support`)
- **Termination**: maintainer picks; the chosen option merges, others close
- **Example**: qwen-code #3863 B-A-M-N `feat(cli): add Anthropic model listing support (Option A)` at 04:32:30Z

## Why mechanism C is structurally distinct

The bot iterative funnel (A) presents each candidate as **the** fix, expecting the maintainer to filter. Cardinality is high because the bot has no contextual judgment about which approach is correct.

The substrate-owner doublet (B) presents PRs as **sequential dependencies** — the second PR consumes the first. Cardinality is small because each PR has a definite role.

The human labeled-alternatives mechanism (C) presents PRs as **disjoint alternatives** — only one will be merged, but the author wants the maintainer to see the trade-offs. Cardinality is small (N=2–3) because the cognitive load of "compare and choose" caps maintainer bandwidth, and the explicit labeling is the **author's signal that they understand this**.

The labeling itself is a **collaboration optimization**: a maintainer scanning titles immediately understands "this is one of several proposals, not a standalone change". This reduces review confusion and signals contributor sophistication.

## What follows from this distinction

If the W18-day-1 sample is representative, the three mechanisms partition the "multi-PR same-author" event space into:
- **High-volume, unlabeled, bot-driven** (mechanism A)
- **Low-volume, layered, owner-driven** (mechanism B)
- **Low-volume, labeled, non-owner-driven** (mechanism C)

These predict **different next-PR signatures** for a given author:

| If observed | Predict next |
|---|---|
| Bot opens 5+ PRs same-substrate, no labels | More candidates incoming; 1 of N acceptance |
| Owner opens layered protocol+consumer pair | Possibly a 3rd layer (UI, docs, test); high merge rate |
| Non-owner opens labeled `(Option A)` | `(Option B)` and possibly `(Option C)` within 1–3 ticks; only 1 merges |

## Cross-mechanism cross-carrier inventory in W18-day-1 window

**Mechanism A (bot funnel) instances**:
- litellm: oss-agent-shin K-cluster #27265, #27268, #27270, #27275 (and prior closed members) — 12 PRs total per Add.374

**Mechanism B (owner doublet/triplet) instances**:
- goose: kalvinnchau #9040 + #9045 + #9046 (triplet, ACP-stack)
- litellm: ishaan-berri #27271 (merged) + #27272 (open) + #27273 (open) — Prometheus cardinality cap series, owner-doublet-extending-to-triplet
- codex: pakrym-oai #21276/#21278/#21281/#21282/#21284/#21287/#21290 — owner-N-tuplet (N=7) **frozen**, not yet a clean mechanism-B example because freeze breaks the pattern

**Mechanism C (labeled alternatives) instances**:
- qwen-code: B-A-M-N #3863 `(Option A)` — first explicit instance in the recent sample; #3856 and #3861 are **non-labeled** sequential PRs by the same author (settings serializer + dir polish), so B-A-M-N is exhibiting **mixed mechanisms** (B/C hybrid) — they own the cli-polish surface (B) but propose alternatives on the vendor-listing surface (C)

## Structural implication: mechanism C presence as a **maturity signal**

Mechanism C requires the author to:
1. Recognize the design choice has multiple defensible options
2. Be willing to invest implementation effort in N options instead of debating in an issue
3. Trust the maintainer to choose rather than push their own pick

These traits correlate with **experienced contributors** and **carriers with strong design-discussion norms**. Carriers showing mechanism C are likely **more mature in their contributor culture** than carriers showing only mechanisms A and B.

The W18-day-1 sample shows mechanism C only in qwen-code so far. Predict: gemini-cli, opencode, and crush will show mechanism C within W18; codex and litellm will show it later (their substrate-owner cultures discourage non-owner alternative-proposing); goose may show it via kalvinnchau if they themselves use the `(Option X)` framing in a future PR.

## Specific PRs cited (≥10 required)

**Mechanism A (bot funnel)**: #27265, #27268, #27270, #27275 (4 PRs, litellm)

**Mechanism B (owner doublet/triplet)**:
- goose: #9040, #9045, #9046 (3 PRs, kalvinnchau)
- litellm: #27271, #27272, #27273 (3 PRs, ishaan-berri)
- codex (frozen, partial mechanism B): #21276, #21278, #21281, #21282, #21284, #21287, #21290 (7 PRs, pakrym-oai)

**Mechanism C (labeled alternatives)**: #3863 (B-A-M-N, qwen-code, with `(Option A)` title)

**Mechanism B/C hybrid (same author across both modes)**: #3856, #3861 (B-A-M-N non-labeled prior PRs)

**Total unique PRs cited: 19**

## Predict (carry forward)

- **T+1–2 ticks (Add.375–376)**: B-A-M-N opens `(Option B)` for `Anthropic model listing support` in qwen-code; cardinality stays at 2 unless the maintainer signals they want a 3rd; the first option to receive maintainer engagement (comment, label, request-changes) will be the merge candidate.
- **T+1 week**: gemini-cli or opencode shows the first non-qwen-code mechanism-C PR with explicit `(Option A)`/`(Variant 1)` labeling; carriers with no mechanism-C instance by W19 are flagged as "owner-dominant culture, low non-owner alternative-proposing".
- **General**: when a mechanism-C cluster is detected, expect the **non-merged options to close within 24–72h** of the chosen option's merge — a clean teardown signature that distinguishes mechanism C from mechanism A's longer abandoned-tail.
