# W17 Synthesis #101 — Single-author cross-surface triplet on a single carrier where the three legs span three orthogonal subsystem layers (core / security / schema-tooling) within a sub-3-hour author session

**Anchor window:** 2026-05-04T12:26:42Z → 2026-05-04T15:03:44Z (2h37m02s span).
**Anchor carrier:** openai/codex.
**Anchor author:** `jif-oai`.
**Parent synths:** #91 (single-author triplet metronome on disjoint surfaces) and #99 (same-author shared-spec-anchor self-merge series).

## Why this is distinct from #91 and #99

Synth #91 captured a triplet defined by **rapid metronome cadence** (sub-15-minute inter-merge gaps) on **disjoint surfaces** but did not require those surfaces to live on **architecturally distinct subsystem layers**. Synth #99 captured a series whose defining property was a **shared spec-anchor file** appearing on every leg.

Synth #101 captures the inverse-of-#99 and a refinement-of-#91: the three jif-oai PRs share **no anchor file** and touch **no overlapping path prefix**, yet the three layers they touch are **architecturally orthogonal** in a specific sense — one each in (a) core protocol-builder code, (b) backend security boundary, (c) schema/typegen tooling. This is not "disjoint surfaces" in the loose #91 sense (which would be satisfied by three TUI files); it is **disjoint subsystem-layers** where each layer has a different review audience, different test surface, and different release-risk profile.

## The three members

| PR | Opened (UTC) | Title | Subsystem layer | Estimated review audience |
|---|---|---|---|---|
| [openai/codex#20989] | 2026-05-04T12:26:42Z | `core: share responses request builder with compact requests` | (a) Core protocol-builder code path consolidation | Core runtime maintainers; touches request builder shared between primary and compact request paths |
| [openai/codex#21010] | 2026-05-04T14:15:36Z | `memories-mcp: reject symlink traversal in local backend` | (b) Backend security boundary hardening | Security reviewers; symlink-traversal mitigation in local memories backend |
| [openai/codex#21012] | 2026-05-04T15:03:44Z | `feat: rely on schemars to unify schema` | (c) Schema/typegen tooling consolidation | Schema/typegen maintainers; adoption of `schemars` for unified schema generation |

Verified head SHAs (per Add.326 capture @ 2026-05-04T15:03:50Z):
- #20989 → `5b6e918f6273667133f7f5eecf60bda5d7ea6d72`
- #21010 → `8b0f758a5e9afdd6cf25412de2b946305aef6c82`
- #21012 → `1353ca3a974ebe9a0bc2b4d54d35ac9d9b6ba8eb`

Inter-PR-open gaps:
- #20989 → #21010: **1h48m54s**
- #21010 → #21012: **48m08s**
- Cumulative session: **2h37m02s** for all three opens.

## Why "subsystem-layer orthogonality" is structurally meaningful

Three PRs on the same TUI directory (e.g., three `tui/cmd/*.go` PRs) would be the loose sense of "disjoint surfaces" satisfied by #91. They share **the same review audience**, **the same test harness**, and **the same release-risk profile** (TUI-only). A maintainer can review all three in one session, run one test suite, and risk-rank them as a unit.

The jif-oai triplet does the opposite. The three PRs require:

1. **#20989** — understanding of the request-builder abstraction and the compact-request code path (core runtime knowledge; risk = correctness regression in the hot request path).
2. **#21010** — understanding of filesystem-traversal attack surfaces and the local memories backend's path-resolution logic (security review; risk = privilege escalation if symlinks escape sandbox).
3. **#21012** — understanding of `schemars` macro-derive interactions with existing schema definitions (typegen tooling review; risk = silent schema breakage at consumer boundaries).

A single reviewer cannot competently approve all three without context-switching between three distinct mental models. This is the **anti-#91** pattern: where #91's metronome triplet is **easy to batch-review** (one author, one surface family, one mental model), the synth-#101 triplet **forces serialized multi-reviewer attention**.

## What this tells us about the author's working pattern

The jif-oai author has appeared in prior addenda (Add.323–325) on the codex MCP-stacked surface (jif-oai-stacked-MCP-triplet anchored on memories/MCP). Add.324 noted a halt in the stacked-MCP cluster. The 2026-05-04 12:26Z–15:03Z session is jif-oai's **first cross-surface session** in the addendum series — three PRs on three layers in 2h37m, with the **first leg being a non-MCP refactor**. This is a meaningful behavioral shift: from intra-cluster stacked-PR construction (the MCP triplet pattern) to **cross-layer breadth**.

Two interpretations:

- **(i) Backlog-flush**: jif-oai had three queued items across three layers and chose this 2h37m window to ship them all. The cross-layer disjointness is incidental — the author works on whatever is ready.
- **(ii) Coordinated-rollout**: the three PRs are causally linked (e.g., the schemars adoption in #21012 enables a future PR that depends on consolidating the request builder in #20989, and #21010 hardens the memories backend in advance of a memories-related schema change). The cross-layer disjointness is by design — the author is preparing infrastructure for a forthcoming feature.

Falsifiable predictions below distinguish these.

## The "cross-layer orthogonal triplet" predicate

A single-carrier single-author triplet qualifies under synth #101 when:

1. Three PRs by the **same author** open within a **≤4h window** on the **same carrier**.
2. The three PRs touch **disjoint top-level path prefixes** (no two share a top-level directory beyond the repo root).
3. The three PRs map onto **three architecturally orthogonal subsystem layers** drawn from at least three of: {core runtime, security boundary, schema/typegen tooling, UI/TUI, build/CI, docs, tests}.
4. **No shared file** appears across any two of the three legs (anti-#99).
5. The author has had ≥1 prior addendum-cited PR on the same carrier in a different cluster pattern (e.g., a stacked-PR series) — this filters out new-author debut triplets that happen to span layers by accident.

The 2026-05-04 jif-oai triplet satisfies all five predicates; predicate (5) is satisfied by jif-oai's prior MCP-stacked-triplet appearance in Add.323–324.

## Falsifiable predictions

1. **Backlog-flush vs coordinated-rollout test**: if a fourth jif-oai PR opens within 24h of #21012 (by 2026-05-05T15:03:44Z) and that fourth PR **depends on or references** any of #20989/#21010/#21012, the **coordinated-rollout** hypothesis (ii) is supported. If a fourth PR opens but on a fourth disjoint layer with no cross-reference, **backlog-flush** (i) is supported. If no fourth PR opens within 24h, the triplet stays terminal and either hypothesis remains plausible.
2. **Merge-order signal**: if the merge order is #20989 → #21010 → #21012 (open-order = merge-order, monotone serialization), that is consistent with coordinated-rollout. If merge order inverts (e.g., #21012 merges first), the schema work was independent and ready earliest; the triplet is closer to backlog-flush.
3. **Lifespan dispersion**: if the three lifespans differ by **<2× ratio** (longest:shortest), reviewer attention was uniform across layers — implausible given the orthogonality argument above. If lifespan dispersion is **≥3× ratio**, reviewer attention scaled with layer-specific risk (security review #21010 longest, or schema review #21012 longest), supporting the orthogonality framing.
4. **Cross-reference detection**: if either #21012's diff imports types defined in #20989's request-builder consolidation, or if #21010's tests reference schemars-derived schemas added in #21012, the triplet is **not** strictly disjoint at the dependency level — it is presentation-level disjoint but causally linked. A future synth should re-classify under a "presentation-disjoint causally-linked" lens.
5. **Author cross-carrier extension**: if jif-oai opens a PR in any non-codex carrier within 7 days, jif-oai joins the small set of cross-carrier authors and the synth-#101 lens should be extended to track per-author **cross-carrier breadth** as a separate dimension of the orthogonality predicate.

## Distinctness from prior synths

- **vs synth #91 (single-author triplet metronome on disjoint surfaces)**: #91 requires sub-15-minute inter-merge cadence and accepts loose "disjoint surfaces" (e.g., three TUI files). Synth #101 has inter-open gaps of 48m–1h49m (much slower than #91's metronome) and requires **architectural-layer disjointness**, not just file-path disjointness.
- **vs synth #99 (same-author shared-spec-anchor extension)**: #99's defining property is the **same anchor file** recurring on every leg. Synth #101's defining property is the **inverse**: zero shared files, zero shared top-level prefixes.
- **vs synth #92 (same-second 4-PR open tuplet on disjoint surfaces)**: #92 is co-fire mechanics (tooling-driven simultaneous opens). Synth #101 has 48m–1h49m gaps — manual-paced human-driven session, not bot-driven.
- **vs synth #95 (intra-author three-regime cadence dilation)**: #95 is about **cadence regimes** within an author's full activity window. Synth #101 is about **layer breadth** within a contiguous sub-window. An author can exhibit both simultaneously.
- **vs jif-oai's own prior MCP-stacked triplet (Add.323–324)**: the MCP-stacked triplet was **single-layer stacked construction** (all three PRs in `memories-mcp` subsystem, dependency-stacked). Synth #101's triplet is the **opposite mode** by the same author — three layers, no stack, no shared file.

## Risk lens

- **Reviewer-attention bottleneck**: a triplet of this shape **cannot** be reviewed by a single reviewer in a single session without context-switching costs. If all three reach a single reviewer's queue, expect reviewer to either (a) batch-approve with insufficient depth, or (b) serialize across days, slowing each leg. Detector should recommend **explicit reviewer routing** for cross-layer triplets — security PR to security reviewer, schema PR to typegen owner, core PR to runtime owner.
- **Release-risk concentration**: if the three PRs land in the same release window, a regression could surface in **any of three subsystems** with no common-cause hypothesis to chase. Bisection becomes harder: instead of "did this release's TUI changes break the TUI?", the question becomes "did the request-builder consolidation, the memories-mcp symlink check, or the schemars adoption break the unrelated symptom?". Worth flagging the three SHAs as a **bisection cohort** for any post-release issue.
- **Author-burnout signal**: shipping three orthogonal-layer PRs in 2h37m is a high-context-density activity. If jif-oai's pace decelerates sharply in the following 24h (no PRs), the triplet may have been a backlog-flush at session-end; if pace continues, it is sustained author capacity. Either has organizational implications for how many cross-layer triplets the codex carrier can absorb per week.
- **Detector recommendation**: any single-author triplet on a single carrier within 4h whose three PRs touch ≥3 distinct top-level directories AND whose titles map to ≥3 distinct subsystem layers should be auto-tagged as "synth-101 cross-layer-orthogonal triplet candidate" and surfaced for the next addendum's predictions block, with a specific reviewer-routing recommendation attached.
