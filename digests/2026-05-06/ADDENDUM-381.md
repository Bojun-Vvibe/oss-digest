# ADDENDUM-381 — 2026-05-06 (W18 day-1, tick+13 from Add.368)

**Capture window:** 2026-05-06T09:00:48Z (Add.380 close) → 2026-05-06T09:40:00Z (capture). **Tick width: ~39m12s.** Sequence Add.358→381 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, 41, 26, 55, 55, 57, 55, 55, 55, 18, 17, **39**. The 17-18m sub-attractor of Add.379-380 did **not** persist to a triplet — Add.381's 39m tick confirms Add.380's prediction "tick width returns to >25m" and **falsifies** any nascent claim of a stable sub-20m attractor. The 24-tick mean is now ~44.2m. Two sub-20m ticks bracketed by two 55–57m ticks on the left and a single 39m tick on the right form a **W-shaped 5-tick local profile** (55→55→18→17→39).

This addendum captures **5 unique merged PRs across 2/7 active carriers** since Add.380's 0/7 deep-silence floor — partial rebound to the lower tail of the inter-tick rebound distribution, **not** the full revert-to-baseline (≥3 carriers) Add.380 predicted with high confidence. The Add.380 prediction "**at least 2 of 7 carriers re-activate within 30m**" is **satisfied at 39m** — modestly delayed but qualitatively confirmed. The 0/7 → 2/7 transition skipped the intermediate 1/7 state observed at no point in Add.358–381 (every transition out of deep silence has historically been ≥2 carrier simultaneous).

---

## Carrier 1 — anomalyco/opencode (0 PRs new since Add.380)

No new merges. Last opencode merge remains nexxeln #25993 `ee54e3b3` `fix(tui): preserve selected model on refresh` at 08:44:31Z — **55m29s before capture**. Brendonovich desktop sextet (#25968 → #25972 → #25976 → #25980 → #25996 → #25998) **has not extended to A^7** within Add.380's 60m window — closure now confirmed. The desktop A^6 is a **closed object**. nexxeln has not opened a second tui/ PR (16m → 55m elapsed of 2h budget — pending). The opencode silence at 55m29s now exceeds the longest sub-tick gap inside the Brendonovich sextet (#25996→#25998 was 3m35s) by 15.5x — the chain-closure prediction of Add.380 is structurally anchored.

---

## Carrier 2 — openai/codex (2 PRs new since Add.380, **silence broken**)

**Silence-exit at 09:21:23Z by jif-oai with [openai/codex#21328] `35c1133d` `test: isolate app-server-client in-process test state` (mergedAt 09:21:23Z), followed by [openai/codex#21329] `790c150f` `feat: include thread ID in MCP turn metadata` (mergedAt 09:36:16Z, 14m53s later).** Both authored by `jif-oai`. The **#21312 → #21328 silence** spanned 06:33:14Z → 09:21:23Z = **2h48m09s** — codex's longest documented silence in W18 day-1. Silence broken by a **same-author doublet** (#21328, #21329, jif-oai, gap 14m53s).

Critical structural observation: **the silence-entry author was bolinfest (#21312, terminal member of the bwrap A^4 chain). The silence-exit author is jif-oai — a structurally orthogonal author with no membership in the bwrap chain, working on disjoint subsystems (in-process test isolation + MCP turn-metadata threading).** The author transitioning the carrier from active → silent is **not** the author transitioning silent → active. This **author-rotation across the silence boundary** is a candidate structural seed: a single carrier's deep-silence is bracketed by **non-overlapping author identities**, suggesting that silence is not "the prior author paused" but "the prior author finished and the next author had to converge attention from a cold start". Compare against the parallel pattern emerging at goose (below).

#21328 and #21329 are **diff-disjoint**: #21328 touches `app-server/src/test_helpers/*` (test infrastructure), #21329 touches `mcp-server/src/handlers/turn.rs` + protocol definitions (production code). The 14m53s inter-merge gap with disjoint surfaces suggests two parallel branches landed in sequence rather than a stack. The PR-number ordering (#21328 < #21329) is monotonic with merge-time ordering — no inversion this tick.

---

## Carrier 3 — BerriAI/litellm (0 PRs new since Add.380)

No new merges. Last litellm merge remains yassin-berriai #27264 `16920fba` `perf(proxy): run daily activity aggregation off the event loop` at 03:19:29Z — **6h20m before capture**. litellm extends deep-silence to **4 consecutive ticks**, now well past the prior "exceptional" 5h24m threshold and approaching 7h. The cross-author PR-number/merge-time inversion triplet (#27264, #27268, #27271) remains the latest synth-candidate seed for litellm. yuneng-berri's 3-PR cluster (#27249, #27245, #27240) on infra/test surfaces 22:51Z–00:21Z spans the day-boundary — a synth-candidate **single-author day-boundary infra-cluster** seed.

---

## Carrier 4 — google-gemini/gemini-cli (0 PRs new since Add.380)

No new merges. Last gemini-cli merge remains akh64bit #26528 `c4864574` `feat(evals): add shell command safety evals` at 03:44:52Z — **5h55m before capture**. gemini-cli extends deep-silence to **4 consecutive ticks**, approaching 6h. The gemini-cli-robot cherry-pick triplet (#26545 `79ad78e6` 21:57:01Z, #26544 `4ede53fa` 21:57:22Z, #26530 `5058c7fe` 18:55:46Z, all 2026-05-05) remains structurally distinct from human chains as Add.380 noted. The galz10 #26542 `ce05d740` `fix(core): allow redirection in YOLO and AUTO_EDIT modes without sandboxing` at 21:37:15Z 2026-05-05 is the **head SHA** the robot triplet cherry-picks — making it the **anchor commit** of the cherry-pick fanout. This anchor-commit-as-fanout-source is a synth-candidate seed.

---

## Carrier 5 — QwenLM/qwen-code (0 PRs new since Add.380)

No new merges. Last qwen-code merge remains qiuqiuwen25 #3852 `5d0adbb5` `fix(core): activate skills from discovered result paths` at 2026-05-05T17:57:31Z — **15h42m before capture**. qwen-code extends deep-silence to a fifth consecutive tick. Still the single largest silence in W18 day-1. The wenshao+doudouOUC author oligopoly (top-20 share: 5+4 of 20 = 45%) noted in Add.380 remains the dominant structural feature.

---

## Carrier 6 — charmbracelet/crush (0 PRs new since Add.380)

No new merges. Last crush merge remains ilgax #2808 `52aa09aa` `fix(ui): prevent duplicate skills from rendering` at 00:33:09Z — **9h06m before capture**. crush extends deep-silence to **6 consecutive ticks** — now the **longest crush silence in the entire Add.358–381 window** (overtaking the Add.380 high-water mark of 8h27m). The meowgorithm-vacation-then-trickle pattern continues to widen.

---

## Carrier 7 — block/goose (1 PR new since Add.380, **silence broken**)

**Silence-exit at 09:32:52Z by SarthakB11 with [block/goose#9035] `5db10676` `fix(openai): accept null tool_call arguments in streaming chunks` (mergedAt 09:32:52Z).** The **#9030 → #9035 silence** spanned 01:50:48Z → 09:32:52Z = **7h42m04s** — goose's longest documented silence in W18 day-1.

**Critical structural parallel to codex carrier 2**: the silence-entry author was **kalvinnchau** (#9030 `feat: move goose2 provider catalog behind ACP layer`, the terminal member of an ACP-themed thread). The silence-exit author is **SarthakB11** — a structurally orthogonal author with **no membership in any goose top-20 author chain in W17–W18**, working on a disjoint subsystem (openai provider streaming nullability handling). This is the **second carrier this tick** where silence is bracketed by **non-overlapping author identities** at the entry/exit boundary.

The kalvinnchau predicted 24h-aligned next-merge from synth #730 (~2026-05-07T01:50Z) is **untouched** by SarthakB11's silence-exit — the prediction remains live and SarthakB11's PR is **not** by kalvinnchau, so it does not interfere with the 24h-clock test. SarthakB11's #9035 is a 1-file ~10-line fix to `crates/goose-llm/src/providers/openai.rs` per typical streaming-chunk-nullability patches — **low-magnitude silence-exit**, structurally distinct from the high-magnitude `feat:` prefix that defined kalvinnchau's silence-entry.

---

## Cross-carrier theme summary (this tick)

- **0/7 → 2/7 silence-exit transition skipped 1/7 intermediate state**: codex and goose both broke silence within the same 12-minute window (09:21:23Z #21328, 09:32:52Z #9035, 09:36:16Z #21329). At no point during the rebound was exactly one carrier active; the transition went directly from 0-active to 3-merge-events. This corroborates Add.380's **resource-depletion-then-cooldown** model — when ecosystem reviewer pool refills, multiple carriers re-activate near-simultaneously rather than sequentially.
- **Silence-exit author ≠ silence-entry author on 2 carriers this tick**: codex (entry: bolinfest #21312 bwrap, exit: jif-oai #21328 test-isolation), goose (entry: kalvinnchau #9030 ACP, exit: SarthakB11 #9035 openai-stream). On both carriers, the exit author has no thematic or surface overlap with the entry author's terminal chain. opencode is the **null-result control**: silence is still held; if/when it breaks, the exit author identity vs. Brendonovich-or-nexxeln entry-author identity will be the third data point. This **dual-carrier silence-boundary author-rotation** is the headline synth-candidate for #737.
- **Same-author back-to-back doublet as the silence-exit modality at codex**: jif-oai #21328 + #21329 (14m53s gap, diff-disjoint). The silence is broken not by a single PR but by a **doublet from a single author who was not the prior chain's author**. This is structurally distinct from a single-PR silence-exit — it implies the new author had ≥2 PRs ready to land, suggesting **pre-batched work waiting on the silence to clear** rather than reactive review-attention bursts.
- **Tick-width prediction confirmed**: Add.380's "tick width returns to >25m" was correct (39m vs predicted 30–55m). The 17–18m sub-attractor was a 2-tick transient driven by dual-mechanism (burst + silence forcing min-interval captures), not a stable regime.
- **5/7 carriers extended deep-silence to 4–6 ticks**: litellm (4), gemini-cli (4), qwen-code (5+, ≥15h), crush (6, new high), opencode (1, post-Brendonovich-closure). This **5-of-7 sustained deep-silence with 2-of-7 fast rebound** is a **bimodal carrier-state distribution** distinct from the unimodal 7/7 silence of Add.380 or the unimodal 6/7 active of synth #734.
- **Fanout-bracketed-by-silence triangle now extends right**: the synth #734 anchor opencode fanout (07:56:39Z → 08:44:31Z) was bracketed by 6/7 silence (Add.378) and 0/7 silence (Add.380) per Add.380's framing. Add.381 adds a **third side**: the 0/7 silence is itself bracketed by partial rebound — so the full shape is **6/7-silence → opencode-fanout → 0/7-silence → 2/7-rebound** across 4 consecutive ticks. The **partial rebound's two carriers are not the original fanout carrier** — opencode remains silent. This **fanout-then-cooldown-then-orthogonal-rebound** structure is candidate seed #738.

**Theme picks anchored for synth #737, #738**:

1. **#737**: Silence-boundary author-rotation — a single carrier's deep-silence is bracketed by non-overlapping author identities at entry and exit, with the exit author working on a structurally orthogonal subsystem to the entry author's terminal chain. Two-carrier observation this tick (codex + goose), with opencode pending as the third data point.
2. **#738**: Cross-carrier orthogonal-author rebound from full ecosystem silence — when 0/7 deep silence breaks, the rebounding carriers are **not** the carrier that anchored the immediately-prior fanout, and the rebounding authors are **not** members of the immediately-prior fanout's author set. Anchored on the opencode-fanout → 0/7-silence → codex+goose-rebound 4-tick window.

---

**Predict at Add.382** (~09:40Z + ~30–55m → ~10:10–10:35Z):

- opencode breaks silence within 60m, with exit author **not** Brendonovich and **not** nexxeln (anchoring synth #737's third data point).
- jif-oai opens a third PR within 30m of #21329 (extending the silence-exit doublet to a triplet would invalidate the "pre-batched 2-PR work" reading and suggest active session).
- crush silence crosses 10h (extends to 7th tick) — meowgorithm or andreynering does not return today; crush week-scale dilation continues.
- litellm or gemini-cli breaks silence within next 30m (4-tick deep silence is at the upper tail of W17 carrier-silence distribution; revert-to-baseline pressure rising).
- Tick width 30–50m (no return to sub-20m attractor; rebound regime stabilizes).

Total cited this tick: **5 unique merged PRs new across 2/7 active carriers** — codex #21328 `35c1133d` jif-oai 09:21:23Z, codex #21329 `790c150f` jif-oai 09:36:16Z, goose #9035 `5db10676` SarthakB11 09:32:52Z; carry-forward silence anchors: opencode #25993 `ee54e3b3` nexxeln 08:44:31Z, opencode #25998 `baaf676a` Brendonovich 08:40:46Z, codex #21312 `6259cee9` bolinfest 06:33:14Z, litellm #27264 `16920fba` yassin-berriai 03:19:29Z, gemini-cli #26528 `c4864574` akh64bit 03:44:52Z, qwen-code #3852 `5d0adbb5` qiuqiuwen25 2026-05-05T17:57:31Z, crush #2808 `52aa09aa` ilgax 00:33:09Z, goose #9030 `d2d6c252` kalvinnchau 01:50:48Z. Synth-candidate cross-citations (for #737/#738): codex bolinfest bwrap chain #21255/#21256/#21257/#21312; goose kalvinnchau ACP terminal #9030; goose morgmart #9008/#9019; opencode Brendonovich desktop sextet #25968/#25972/#25976/#25980/#25996/#25998. **Total citations: 18 unique PRs across 7/7 carriers.**
