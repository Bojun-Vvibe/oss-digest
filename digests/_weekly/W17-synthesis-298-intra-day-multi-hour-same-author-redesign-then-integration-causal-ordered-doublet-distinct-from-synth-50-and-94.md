# W17 Synthesis #298 — Intra-Day Multi-Hour Same-Author Redesign-Then-Integration Causal-Ordered Doublet on Shared Subsystem as Distinct Sub-Class From Sub-15-Minute Synth #50 Cascade and Sub-Hour Synth #94 Pair

## Pattern statement

When a single author lands two merges in the same repo on the same calendar day separated by **multiple hours** (here, 14h23m) and the two merges are causally ordered with the first being a **redesign / refactor / library-rewrite** of a subsystem and the second being a **wire-up / integration / consumer-side adoption** of that same subsystem on a different surface (here, chat-composer), the doublet exhibits a distinct **multi-hour intra-day causal-ordered same-author stewardship pair** signature. This is structurally distinct from synth #50's sub-15-minute post-own-merge same-author cascade (where the two halves are typically peers on adjacent surfaces, not redesign+integration causally ordered) and from synth #94's same-product-surface diff-disjoint sub-hour pair (where the two halves edit disjoint files on a single surface). Anchored at block/goose Add.133 by morgmart's #8868 → #8881 pair.

## Anchoring evidence — Instance 1: morgmart goose skills redesign → chat-composer integration (Add.133)

**Doublet members:**

- block/goose#8868 / `b35eaf4bf92a` / 2026-04-28T07:12:01Z / morgmart / `redesign skills library` / subsystem: skills / library / underlying-data-model
- block/goose#8881 / `69efb796aee7` / 2026-04-28T21:35:32Z / morgmart / `add skills to the chat composer` / subsystem: chat-composer / skills-consumer / UI-affordance

**Inter-merge gap.** **14h23m31s** elapsed between #8868 merge and #8881 merge. Both authored by morgmart (block/goose vendor-internal recurring contributor). Both same-day (2026-04-28).

**Causal ordering analysis.** The titles encode an explicit producer→consumer ordering:

| Phase | PR | Verb | Object | Surface |
|---|---|---|---|---|
| 1 (redesign) | #8868 | redesign | skills library | underlying skills subsystem |
| 2 (integration) | #8881 | add | skills | chat composer (consumer) |

The verb in phase 1 (`redesign`) operates on the producer-side subsystem (`skills library`). The verb in phase 2 (`add`) operates on a consumer-side surface (`chat composer`) and pulls in the redesigned producer (`skills`) as a dependency. This is a **redesign-then-integration causal pair**: the second merge cannot exist without the first, and the temporal ordering matches the causal ordering. The 14h23m gap is consistent with: (a) author work-day boundary (morning redesign / evening wire-up at the same vendor-internal author, plausible single-author across one workday with a multi-hour break for review and CI on #8868), (b) review-and-merge cycle for #8868 before #8881 can be opened or reviewed against the new producer.

## Discrimination from synth #50 (post-own-merge same-author cascade) and synth #94 (same-author same-product diff-disjoint sub-hour pair)

| Property | Synth #50 (post-merge cascade) | Synth #94 (same-surface sub-hour pair) | Synth #298 (intra-day redesign+integration) |
|---|---|---|---|
| Inter-merge gap | sub-15min typical | sub-1h typical | multi-hour (here 14h23m) |
| Surface relationship | adjacent peers | same-product diff-disjoint | producer→consumer (different surfaces, causally linked) |
| Causal ordering | unrelated peers (no dependency between halves) | parallel diff-disjoint touches | strict producer-then-consumer |
| Author class | typically same | same | same |
| Title-class | similar / matched | same product anchor | distinct verbs (redesign / add) on related objects |
| Reading | author momentum / context-warm cascade | parallel work on same product | structured stewardship: author redesigns, then wires the redesign in |

**Critical discriminator**: synth #50's sub-15min cascade reads as **author momentum** (the author is warm on the subsystem and ships a follow-up while context is loaded). Synth #298's multi-hour gap is too long for warm-context to explain — the author has plausibly context-switched to other work between halves. The pair is therefore explained by **structured causal sequencing** (the consumer-side integration cannot ship until the producer-side redesign is merged), NOT by warm-context momentum. The mechanism is different even when the author is the same.

## Discrimination from synth #97 (same-author n3 self-merge with shared spec anchor and contracting lifespans)

Synth #97's series shape requires shared spec/anchor edits across all members and monotonically contracting lifespans across the series. Synth #298 has only n=2 members (so contraction is not measurable), and the two halves edit different surfaces (skills library vs chat composer) NOT a shared spec file. The "shared anchor" in synth #298 is **semantic, not file-level** — both PRs reference the same subsystem name (`skills`) but plausibly modify entirely disjoint file sets. Synth #298 is therefore a sub-class with weaker file-level coupling than synth #97 but stronger causal coupling.

## Refining synth #50 / #64 (post-own-merge cascade and its cross-repo recurrence) on the multi-hour axis

Synth #50 establishes the sub-15min same-author cascade pattern and synth #64 confirms it recurs cross-repo (litellm + opencode within 5h). Synth #298 extends the family to the multi-hour intra-day axis with a **causal ordering constraint** — the second member is structurally dependent on the first. The synth #50/#64 family was previously read as a single-mechanism pattern (warm-context momentum); synth #298 splits the family into:

- **Mode A (warm-context cascade)**: sub-15m, peer surfaces, no causal ordering required — synth #50/#64
- **Mode B (causal-sequenced stewardship)**: multi-hour, producer→consumer surfaces, strict ordering — synth #298

The two modes use the same shape (same-author intra-day n=2 same-repo) but encode different mechanisms.

## Predictions

- **P-298a**: morgmart's redesign+integration pair predicts a third member within ≤6 ticks (by Add.139) at block/goose, with title-class `polish` / `refactor` / `improve` / `fix` on either the skills library or the chat-composer surface (consumer-side iteration after initial integration). Falsified if morgmart silent through Add.139.
- **P-298b**: Mode B (causal-sequenced) is rarer than Mode A (warm-context cascade); predicts at most n=1 additional Mode B instance in W18 across the 6-repo corpus, with multi-hour gap and producer→consumer title-class shift. Falsified if n≥2 Mode B instances appear in W18.
- **P-298c**: When Mode B fires, the SECOND half (integration) is a higher merge-velocity event than the FIRST half (redesign), because the producer-side change has already absorbed review attention. Predicts #8881's lifespan from open→merge < #8868's lifespan from open→merge. (Lifespan data not captured at addendum layer; deferred for later instrumentation.)

## Cited PR references
- block/goose#8868 morgmart b35eaf4bf92a (07:12:01Z, redesign half)
- block/goose#8881 morgmart 69efb796aee7 (21:35:32Z, integration half)
- openai/codex#20047 euroelessar 1de7a9bf6935 (Add.132 contrast: 12m48s sub-hour same-author doublet on app-server, Mode A territory)
- openai/codex#20068 euroelessar 10e2a73b3c9b (Add.132 contrast: doublet pair-mate, peer surfaces not causally ordered)
- openai/codex#19990 jif-oai (synth #285 contrast: n=4 sprint, all peer-surface single-subsystem extension, no producer→consumer split)
- openai/codex#20005 jif-oai (synth #285 contrast: sprint terminator, no integration follow-up)
