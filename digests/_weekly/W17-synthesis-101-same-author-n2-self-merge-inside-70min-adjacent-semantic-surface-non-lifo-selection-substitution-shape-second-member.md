# W17 Synthesis #101 — Same-author N=2 self-merge inside 70 minutes on adjacent semantic surface with non-LIFO selection and substitution-shape second-member diff

**Anchor window:** 2026-04-27T11:31:57Z → 12:32:45Z (60m48s).
**Anchor repo:** openai/codex.
**Anchor actor:** `jif-oai`.
**Trigger events:**
- openai/codex#19792 merged at 11:31:57Z (`9afa1a4400`, +152/-22, Grammar B branch `jif/clean-multi-agent-v2-config`).
- openai/codex#18982 merged at 12:32:45Z (`da83ab554a`, +1074/-1053 over 21 files, Grammar B branch `jif/memories-on-file-system`).
**Parent / sibling synths:** #99 (same-author shared-spec-anchor self-merge series extension), #97 (same-author N=3 self-merge series with shared spec co-touch and contracting lifespans), #91 (single-author triplet self-merge metronome on disjoint surfaces).

## Why this is distinct

Synth #99 anchors on a **shared anchor file** (`packages/opencode/specs/effect/http-api.md`) recurring across every member of a series. Synth #97 anchors on a **shared spec-file co-touch** with **monotonically contracting lifespans** in a **closed N=3 triple**. Synth #91 anchors on a **disjoint-surface triplet metronome** with sub-15-minute inter-merge cadence.

#101 captures a structurally different shape:

- **N=2** (not 3 or 4) self-merge series.
- **No shared anchor file** between the two members (`multi_agent_v2/feature config` ≠ `memories/git-backed workspace diffs` at file-path level).
- Members touch the **same author's adjacent semantic cluster** (multi-agent + memory subsystems within the codex agent runtime), but **diff-disjoint** at file-line level.
- Inter-merge gap is **60m48s** — outside synth #91's sub-15m metronome band, outside synth #97's 4m–25m contracting-lifespan band.
- The second member exhibits a **substitution-shape diff** (+1074/-1053, 21 files, near-zero net line change), which is **structurally different** from any prior synth's member (synth #99's #24365 was +270/-13, synth #97's members were all small additive).
- The **non-LIFO selection property** distinguishes #101 from every prior series-style synth: the author had **a newer post-merge-opened PR (#19805)** but the second self-merge came from a **resumed older PR (#18982)**.

## The two members and the non-merging context

| PR | Branch (Grammar) | Opened | Merged | Diff | Files |
|---|---|---|---|---|---|
| openai/codex#19792 | `jif/clean-multi-agent-v2-config` (B) | (pre-window) | 11:31:57Z (`9afa1a4400`) | +152/-22 | small, focused |
| openai/codex#19805 | `jif/hint-ma-v2` (B) | post-#19792-merge (≈11:43:42Z first updateAt) | (open at window close) | +289/-4 | additive |
| openai/codex#18982 | `jif/memories-on-file-system` (B) | (pre-#19792, resumed at 11:47:27Z) | 12:32:45Z (`da83ab554a`) | **+1074/-1053** | **21** |

Three observations bind:

1. The **post-merge-opened** PR (#19805) is the **freshness winner** in any naïve LIFO ordering of jif-oai's open queue. It did **not** merge.
2. The **resumed-older** PR (#18982) is the **diff-magnitude winner** AND the **substitution-shape winner**. It **did** merge.
3. The **branch-grammar** is consistent (Grammar B `<author>/<kebab>`) across all three jif-oai PRs in the session.

## Defining structural properties

1. **N=2 self-merge inside 70 minutes** by a single author within a single repo.
2. **Adjacent semantic cluster, not shared anchor file**: members touch related-but-disjoint subsystems (multi_agent_v2 ↔ memory). Anchor-file overlap is **zero** at the path level (the diffs do not co-touch any single file across both members).
3. **Substitution-shape second member**: the second self-merge has near-zero net line change (`+1074/-1053`, ratio 1.02:1) over a moderate-to-large file count (21). This is the **refactor / rewrite** shape, not the **feature-add** shape.
4. **Non-LIFO selection**: the author has a fresh post-merge-opened PR; the next merge does **not** come from it. The next merge comes from a **resumed older PR** that was already open when the first member merged.
5. **Branch-grammar consistency**: all in-flight PRs from this author in this session use Grammar B.
6. **Inter-merge gap in the 60–70m band**: outside synth #91's sub-15m metronome and outside synth #99's 21m–48m series-extension gap. This is a third distinct cadence band for same-author rapid self-merge events.

## Why "post-merge author session expansion" is the right lens

ADDENDUM-89 observed that immediately following #19792's merge at 11:31:57Z, jif-oai's queue showed:

- **+11m45s post-merge**: #19805 first `updatedAt` — a NEW PR opened/refreshed.
- **+15m30s post-merge**: #18982 first `updatedAt` — an OLDER PR resumed.

ADDENDUM-89 seeded this as a "synth #104 candidate" called *post-merge author session expansion*. ADDENDUM-90 confirmed the candidate at the **merge level** (not just update level) when #18982 merged 60m48s post-#19792. The phenomenon is therefore:

> When an author lands a self-merge, they **expand** their session by **opening a new PR** AND **resuming an older PR** within ~20 minutes; the next self-merge comes from one of these two within ~70 minutes; the **resumed-older PR with substitution-shape diff** is the more likely next-merger than the **newly-opened PR with additive diff**.

## Falsifiable predictions

1. If a third jif-oai self-merge lands within 70 minutes of #18982 (i.e., before 13:42:45Z), the synth extends to N=3 within ~140 minutes from the session origin. Default expectation: extension to N=3 is **less likely than termination at N=2** because the substitution-shape second member typically consumes the author's review attention for the rest of the session.
2. If #19805 (the newly-opened post-merge PR) merges next instead of stalling-and-being-superseded, the **non-LIFO selection** property is **falsified at N=1** for this author.
3. If a different author exhibits the same structural signature (N=2 self-merge ≤70m, adjacent semantic cluster, substitution-shape second member, non-LIFO selection) in any tracked repo by W18, the synth generalizes beyond jif-oai's specific session.
4. If jif-oai opens a fourth PR before #18982 merged (counterfactual: the author opens N=3 in-flights before any second-member-merge), the **two-track expansion** (one new + one resumed) is **specific** rather than the general pattern, and the synth needs a "branching factor at expansion" sub-property.

## Distinctness from prior synths

- **vs #99** (same-author shared-spec-anchor self-merge series extension past original triple): #99 requires a **shared anchor file** across members (`specs/effect/http-api.md` recurs on every PR). #101 has **zero shared anchor files** between its two members; the binding is **author-session adjacency**, not **file-path recurrence**.
- **vs #97** (same-author N=3 self-merge series with shared spec co-touch and monotonically contracting lifespans): #97 is N=3 with **monotonically contracting lifespans** (24m57s → 13m47s → 4m09s). #101 is N=2 and lacks the lifespan-contraction signature (the second member's lifespan is unmeasured because it was already open pre-window; what is measured is the **inter-merge gap**, a different metric).
- **vs #91** (single-author triplet self-merge metronome on disjoint surfaces with sub-15m cadence): #91's defining property is **sub-15m cadence**. #101's inter-merge gap is **60m48s** — outside the metronome band by 4×.
- **vs #93** (author debut as four-PR introduction with three-PR rapid burst): #93 is **author debut**; #101 is jif-oai (a non-debut, established codex contributor — already merged #19792 in this same window). The session is not introductory; it is **expansion-after-success**.
- **vs #95** (intra-author three-regime cadence dilation within single sub-2h author session): #95 is about cadence regimes **within an author session across all PRs**; #101 is a tighter focus on the **post-merge expansion mechanism** specifically — the second-member merge as the synthesizing event, not the cadence as such.

## Risk lens

- **Reviewer attention cap during expansion**: when an author triple-stacks (one newly-opened, one resumed-older, one merged), reviewers split attention. The substitution-shape second member (+1074/-1053 over 21 files) is **objectively harder to review** than the small first member (+152/-22). If the author benefits from post-merge approval momentum, the second-member review may be **shallower** than baseline. Detector recommendation: when a same-author PR merges immediately after another same-author merge (≤70m gap), require the second review to surface explicit diff-shape (substitution vs additive) and reviewer attention budget, not just CI-green.
- **Substitution-shape under-test risk**: a 1074/1053 ratio of 1.02:1 means the merging diff is a **near-total rewrite** of the touched surface. Tests that exercise the *prior* code path may not exercise the *new* code path even if line-coverage holds — substitution-shape diffs frequently carry **silent behavior changes**. The merge of #18982 should trigger a behavior-equivalence audit, not just a regression run.
- **Non-LIFO surprise for tooling**: bots and dashboards that prioritize "freshest PR" for review (LIFO) will **systematically miss** the resumed-older PR that wins the next-merge slot. Reviewer-recommendation systems should track "PR with growing diff in the last hour" as a signal independent of "PR opened in the last hour."
- **Author-session burnout marker**: jif-oai's #19809 (`Allow Phase 2 memory claims after retry exhaustion`) opened during ADDENDUM-90 — a third same-author PR. If the session continues past N=2 self-merges, the author is **operating in sustained-output mode** and review-quality risk compounds. Observation cue for ADDENDUM-91: does jif-oai's third merge land, and if so, does its diff-shape match the substitution pattern (refactor) or pivot to additive (feature)?
