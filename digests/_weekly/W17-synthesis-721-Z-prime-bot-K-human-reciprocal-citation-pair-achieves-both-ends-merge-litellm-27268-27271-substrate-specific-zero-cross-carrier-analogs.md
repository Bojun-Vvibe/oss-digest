# W17-synth-721 — Z′_bot ↔ K_human reciprocal-citation pair achieves BOTH-ENDS-MERGE for the first time (litellm #27268 bot-anchor + #27271 human-citing-bot follow-up both land within 60m), promoting synth-717's closed-loop framing from STRUCTURAL pattern to OUTCOME-CONFIRMED pattern; cross-carrier search for analogs identifies zero matches in opencode/codex/qwen-code/gemini-cli/crush/goose, suggesting the substrate is litellm-Prometheus-specific

**Anchor**: ADDENDUM-373 NO 2 (closed-loop reciprocal-citation merge); refines W17-synth-717 (reciprocal theme transfer loop) by replacing the **structural** observation (human cites bot in title) with an **outcome-confirmed** observation (BOTH cited and citing PRs merge, completing the loop materially not just symbolically).

## What synth-717 said about the closed loop

W17-synth-717 introduced K_with_Z′_anchor as a structural pattern: bot oss-agent-shin opens a Prometheus-themed PR (#27265, then #27268), and human ishaan-berri **opens a follow-up PR whose title cites the bot's PR number** (specifically, ishaan-berri's #27271 carried `(#27268)` in its title). The framing was that the bot acted as a **review-anchor checkpoint** that humans could thread their own work through, but synth-717 explicitly noted that **only the bot side had merged** at the time of writing — the human-citing follow-up was still OPEN, so the loop was **half-closed**.

The unresolved question: is the human-citing PR a **legitimate extension** that maintainers will land, or **noise** that sits open until abandoned (like 5 of 11 oss-agent-shin K-PRs in the Add.372 funnel)?

## What ADDENDUM-373 confirmed

ishaan-berri's #27271 MERGED at 03:04:57Z, exactly **60m02s after** bot #27268 merged (02:04:22Z). Both ends of the reciprocal pair are now in main. The substrate is no longer **structural** (titles citing each other) but **operational** (the cited fix landed AND the extending fix landed, in sequence, on the same Prometheus surface).

This is the **first observed both-ends-merge reciprocal pair** in the W17/W18 ADDENDUM sequence (Add.358–Add.373, 16 ticks).

## The 16-tick Z′_bot funnel restated with the outcome data

Across the W17-synth-714 / synth-716 / synth-717 / synth-719 / Add.372 NO 3 funnel, the bot oss-agent-shin's K-themed PRs trace this trajectory:

- #27251 (00:13:04Z, CLOSED) — rejected, no human follow-up
- #27252 (00:21:36Z, OPEN) — pending, no human follow-up
- #27253 (00:27:02Z, CLOSED) — rejected
- #27255 (00:43:31Z, CLOSED) — rejected
- #27258 (00:55:25Z, OPEN) — pending
- #27259 (00:58:47Z, OPEN) — pending
- #27261 (01:10:59Z, CLOSED) — rejected
- #27265 (01:23:48Z, OPEN) — pending, **first PR with rate-limit-gauge theme that ishaan-berri later extends in #27272**
- #27267 (01:26:08Z, CLOSED) — rejected
- **#27268 (01:29:38Z, MERGED 02:04:22Z) — the loop-anchor**
- #27270 (01:45:10Z, OPEN) — pending
- #27275 (03:07:55Z, OPEN) — **off-K-theme pivot** (tag usage, not Prometheus)

12 bot PRs total, 1 merged (8.3%). Of those 12, **exactly 1** was cited by a human follow-up (#27268 → #27271). Of those cited, **1 of 1** had its citing follow-up also merge (100%, n=1).

The reciprocal-citation pattern is therefore **rare on the input side** (1/12 bot PRs ≈ 8% citation-attractor rate) but **high-yield on the output side** (1/1 cited follow-ups land = 100% merge rate so far).

This asymmetry suggests that **ishaan-berri uses citation-in-title as a quality signal**: ishaan-berri only writes a human follow-up when ishaan-berri has **already validated** the bot's fix is on the right track and is using the citation to thread an **extension** onto that validated foundation. The citation is not a discovery mechanism (ishaan-berri reads the bot PRs regardless) but a **provenance marker** for downstream review.

## Cross-carrier search for analogs

The closed-loop reciprocal-citation pattern has these structural ingredients:
1. A **bot or low-trust author** opens N PRs on a single theme (substrate-spammer)
2. A **maintainer** filters the N down to M acceptable, merging the M
3. The maintainer then opens a follow-up PR that **explicitly cites** one of the merged bot PRs in its title or body
4. The maintainer's follow-up also merges, completing the loop

Searching the W17/W18 carrier data for this pattern across the 6 non-litellm carriers (recent 50–100 PRs each):

- **opencode**: no bot-themed multi-PR substrate exists. opencode's bot accounts (`app/dependabot`, `app/gemini-cli` style) when present open isolated dep-bumps that auto-merge or auto-close; no maintainer wraps them in a citing follow-up. **Zero analogs.**
- **codex**: pakrym-oai self-merges (synth-715 / synth-720) are within-author chains, not cross-author bot→human. canvrno-oai's #21274 ("Deduplicate invalid skill load warnings") could in theory cite a prior PR but its title is descriptive-only. **Zero analogs.**
- **qwen-code**: no bot-author substrate visible in the recent window; B-A-M-N (#3849, #3856, #3861) is a multi-PR human author but no cross-author citing follow-ups. chiga0 self-correction doublet (#3859→#3860 from Add.373 NO 4) is intra-author, not reciprocal. **Zero analogs.**
- **gemini-cli**: `app/gemini-cli` and `gemini-cli-robot` open infrastructure PRs (#26553, #26555, #26545, #26544, #26547) that humans do not cite in follow-ups — the bot output is **terminal** (cherry-picks, changelogs) not **iterative draft** (the iterative-draft framing is what enables citing follow-ups in the first place). **Zero analogs.**
- **crush**: dependabot bumps (#2794, #2795) auto-merge; meowgorithm's #2788 is a config-lenient PR with no citation chain. **Zero analogs.**
- **goose**: alexhancock #9028, #9029 are doc-mirror-pair PRs by single human author (not bot+human); kalvinnchau #9030 (MERGED) and #9040 are ACP-themed but no cross-author citing. **Zero analogs.**

The closed-loop reciprocal-citation pattern is therefore **specific to litellm-Prometheus-substrate** in the current W17/W18 sample. It requires the conjunction of:
- A **bot configured to iterate on a narrow surface** (oss-agent-shin's training appears to focus on Prometheus instrumentation)
- A **maintainer who actively reads the bot's output** (ishaan-berri reviews bot PRs same-tick)
- A **surface with extensible scope** (Prometheus metric labels can always be refined: count, rate, cap, cardinality — each a separate PR opportunity)

None of the other 6 carriers currently exhibit all three conditions simultaneously.

## Implications for sub-class taxonomy

W17-synth-714/716/717/719 progressively built up Z′_bot_themed as a **bot-side phenomenon** (the bot opens many PRs; humans filter). Add.371/372 added the **human reciprocity** observation (humans cite bots in titles). Add.373 now adds the **operational closure** observation (cited→citing pairs both merge).

The promoted sub-class hierarchy:
- Z′_bot_themed (synth-714) — bot opens ≥3 same-theme PRs
- Z′_bot_themed_iterative_funnel (synth-719) — quantified 1:5:5 merge:close:pending ratio
- K_with_Z′_anchor (synth-717) — human cites bot PR-number in follow-up title (structural)
- **K_with_Z′_anchor_closed_loop (NEW)** — human-citing follow-up itself merges; both ends in main; substrate is operationally validated

The **closed_loop** sub-class is the first in the Z′_bot family to have a **non-trivial outcome predicate** (both ends merge), distinguishing it from purely structural patterns (titles, timing) that prior synth notes catalogued.

## Specific PRs cited (≥10 required)

**litellm**: #27251, #27252, #27253, #27255, #27258, #27259, #27261, #27265, #27267, #27268, #27270, #27271, #27272, #27273, #27275 (15 PRs from the Z′_bot funnel + reciprocal pair)

**Cross-carrier null-result citations**: opencode #25962, codex #21274, qwen-code #3859, #3860, #3861, gemini-cli #26553, #26555, crush #2788, #2794, goose #9028, #9029, #9030, #9040 (13 PRs explicitly searched and found NOT to match the closed-loop pattern)

**Total unique PRs cited: 28**

## Predict (carry forward)

- The next bot-anchored citing-follow-up by ishaan-berri (if any in Add.374–Add.380 window) also merges, validating the 100% citing-side merge rate hypothesis.
- A second carrier develops a closed-loop pattern only if it acquires a same-style narrow-surface iterative bot AND a same-style attentive same-tick maintainer reviewer; absent that, the substrate stays litellm-exclusive.
- ishaan-berri's #27272 ("Cap Prometheus end-user metric cardinality"), which extends #27265 (bot, OPEN, rate-limit gauge surface) without explicitly citing it in the title, will be the **test case for implicit-citation** — does ishaan-berri merge it standalone, or will an explicit citation appear in a future amend or comment?
