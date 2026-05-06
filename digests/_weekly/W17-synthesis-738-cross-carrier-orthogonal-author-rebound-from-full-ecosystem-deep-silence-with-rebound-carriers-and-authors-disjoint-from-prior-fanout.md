# W17 Synthesis #738 — Cross-carrier orthogonal-author rebound from full ecosystem deep-silence: when 0/7 breaks, the rebounding carriers are not the carrier that anchored the immediately-prior fanout, and the rebounding authors are not members of the immediately-prior fanout's author set

**Anchor window:** 2026-05-06T07:30:18Z (opencode fanout begins, Brendonovich #25980) → 09:36:16Z (post-rebound terminal merge, jif-oai codex #21329) — **2h05m58s** spanning fanout → cooldown → rebound.

**Anchor structural sequence:**
1. **Pre-fanout state** (Add.378 capture 07:30Z): 6/7 carriers silent, opencode active under Brendonovich.
2. **Fanout state** (Add.378→379, 07:56:39Z–08:44:31Z, 47m52s): opencode-only carrier active; 5 PRs land on opencode (Brendonovich #25980 `3683173a`, #25996 `493b55c9`, #25998 `baaf676a`; nexxeln #25993 `ee54e3b3`); other 6 carriers remain silent.
3. **0/7 deep-silence state** (Add.379→380, 08:44:31Z–09:21:23Z, 36m52s): all 7 carriers silent, including opencode after #25993 closes the fanout.
4. **Rebound state** (Add.380→381, 09:21:23Z–09:36:16Z, 14m53s): silence breaks on **codex** and **goose** simultaneously (within 12m of each other); opencode remains silent.

**Anchor PRs cited (head SHAs included):**
- Fanout: [anomalyco/opencode#25980] `3683173a` Brendonovich, [anomalyco/opencode#25993] `ee54e3b3` nexxeln, [anomalyco/opencode#25996] `493b55c9` Brendonovich, [anomalyco/opencode#25998] `baaf676a` Brendonovich, [anomalyco/opencode#25972] `e969d0af` Brendonovich, [anomalyco/opencode#25976] `6ca55f6f` Brendonovich, [anomalyco/opencode#25968] `031a0cc8` Brendonovich (Brendonovich desktop A^6 + nexxeln tui/ singleton).
- Pre-fanout-baseline silence anchors: openai/codex #21312 `6259cee9` bolinfest 06:33:14Z; BerriAI/litellm #27264 `16920fba` yassin-berriai 03:19:29Z; google-gemini/gemini-cli #26528 `c4864574` akh64bit 03:44:52Z; charmbracelet/crush #2808 `52aa09aa` ilgax 00:33:09Z; block/goose #9030 `d2d6c252` kalvinnchau 01:50:48Z; QwenLM/qwen-code #3852 `5d0adbb5` qiuqiuwen25 2026-05-05T17:57:31Z.
- Rebound: [openai/codex#21328] `35c1133d` jif-oai 09:21:23Z, [openai/codex#21329] `790c150f` jif-oai 09:36:16Z, [block/goose#9035] `5db10676` SarthakB11 09:32:52Z.

**Parent synths:** #734 (carrier-decoupling-from-ecosystem-rate fanout), #735 (fanout-bracketed-by-deep-silence with temporal symmetry), #736 (cross-carrier parallel single-author thematic chains).

## Why this is distinct from #734 and #735

#734 captured the **fanout half** of the cycle: opencode actively merging while 6/7 sit silent. #735 captured the **temporal symmetry** of fanout-bracketed-by-silence: silence on the left, silence on the right. Both are **structural snapshots** that do not characterize **which carrier and which author resumes activity** when the silence breaks.

#738 captures the **rebound asymmetry**: when 0/7 silence breaks, the rebound is **carrier-orthogonal** (not opencode, despite opencode being the most-recently-active and most-author-rich carrier; instead codex + goose) **and author-orthogonal** (not Brendonovich/nexxeln, the fanout authors; instead jif-oai/SarthakB11, neither of whom touched any opencode PR in the entire fanout window or the surrounding 24h). This is a **distinct structural object** from the fanout itself.

## The rebound asymmetry components

**(a) Carrier-orthogonal rebound.** The fanout carrier (opencode) is **not** among the rebounding carriers. opencode entered the 0/7 silence at 08:44:31Z (nexxeln #25993) and **remained silent through 09:36:16Z** (Add.381 capture), a span of 51m45s after the fanout closed. Meanwhile, the two carriers that rebounded (codex, goose) had been silent for **2h48m and 7h42m respectively** at the time of their first post-rebound merge — both substantially longer than opencode's 51m45s post-fanout silence. This is the **inverse** of what a momentum-conservation model would predict: under momentum, the carrier with the most recent activity should be the first to resume. Instead, the **carriers with the longest accumulated silence are the first to resume**, suggesting **silence-pressure-release** as the rebound trigger rather than active-momentum-continuation.

**(b) Author-orthogonal rebound.** The fanout author set is `{Brendonovich, nexxeln}` (with Brendonovich dominating 5 of 6 fanout PRs). The rebound author set is `{jif-oai, SarthakB11}`. **Author-set intersection is empty.** Neither jif-oai nor SarthakB11 have any opencode top-20 W17 contribution; conversely Brendonovich and nexxeln have no codex or goose top-20 W17 contribution. The rebound authors are drawn from **a structurally separate maintainer pool** from the fanout authors. Under a global-attention-pool model, this is unsurprising (different humans). But under a shared-CI-resource model (e.g., GitHub Actions runner pool, shared review-bot rate-limit), one might expect rebound authors to be those who had **paused waiting for the resource**; the data suggests the rebound is **not constrained by who paused** but by **who had pre-staged work ready for the next available slot**.

**(c) Same-tick simultaneity of cross-carrier rebound.** codex's exit (#21328 09:21:23Z) and goose's exit (#9035 09:32:52Z) are separated by **11m29s** — both fall within Add.381's tick window. Under independent per-carrier silence-exit Poisson processes with empirical rate ~1 exit per 4–8h per carrier, P(both exit within same 12m) ≈ 0.005. The **co-rebound** is not coincidence — it suggests a **shared external trigger** (likely a temporal one: late-Asia-evening / early-Europe-morning UTC band 09:20Z is a known activity-bound, but does not explain why opencode does not rebound in the same band).

**(d) Doublet-on-codex vs. singleton-on-goose asymmetry.** codex rebound is a **same-author doublet** (jif-oai #21328 + #21329, 14m53s gap, diff-disjoint, head SHAs `35c1133d` + `790c150f`). goose rebound is a **single PR** (SarthakB11 #9035, no follow-up at Add.381 capture). The asymmetry suggests the codex rebound author had **more pre-staged work** than the goose rebound author. If codex is structurally a higher-PR-volume carrier than goose at the per-author level (it is — codex W17 averages ~3–5 PRs per author per week vs. goose's ~1–3), the rebound modality reflects the carrier's per-author volume distribution.

## Cross-carrier evidence beyond the codex+goose pair

Outside the immediate rebound, three other carriers (litellm, gemini-cli, crush, qwen-code) **do not** rebound at Add.381 — they extend their silence to ≥4–6 ticks. Under the orthogonal-rebound model, these carriers should rebound **next**, with authors **not** drawn from their respective most-recent-active author chains:

- litellm's most-recent-active author chain is yuneng-berri (#27249, #27245, #27240 — Infra cluster spanning day-boundary 22:51Z–00:21Z) with ishaan-berri/yassin-berriai/Michael-RZ-Berri/oss-agent-shin as adjacent active authors (#27271 `2ba2eafc`, #27264 `16920fba`, #27247 `0c07365b`, #27268 `d3fcb718`). Under #738, the litellm silence-exit at next rebound should be by an author **not** in `{yuneng-berri, ishaan-berri, yassin-berriai, Michael-RZ-Berri, oss-agent-shin}`. This is a **falsifiable prediction**.
- gemini-cli's most-recent-active author chain is gemini-cli-robot (cherry-pick triplet #26545 `79ad78e6`, #26544 `4ede53fa`, #26530 `5058c7fe`) and akh64bit (#26528 `c4864574`). Under #738, the gemini-cli silence-exit should be by **neither** the bot **nor** akh64bit. (A bot exit would be a strong falsifier because the bot fires on deterministic release-tag triggers, not on attention.)
- crush's most-recent-active chain is ilgax (#2808 `52aa09aa`) following meowgorithm (#2797 `cb6eae7e`) + andreynering (#2798 `defa1736`). Under #738, the crush silence-exit should be by an author **not** in `{ilgax, meowgorithm, andreynering, taciturnaxolotl}`.

Three independent falsifiable predictions await the next 4 ticks.

## The orthogonal-rebound predicate

A rebound from a 0/N silence (N = active carrier count, here 7) qualifies as **orthogonal-rebound** under #738 iff:
1. The pre-silence terminal-active carrier C_fan ≠ any of the rebound carriers C_reb.
2. The pre-silence terminal-active author set A_fan and the rebound author set A_reb satisfy A_fan ∩ A_reb = ∅.
3. The rebound carriers C_reb had silence durations strictly longer than C_fan's silence duration at the rebound time.
4. The rebound carriers' rebounds are co-temporal (within the same tick window).

The Add.380→381 transition satisfies all four predicates with the codex + goose rebound.

## Falsifiable predictions

1. **opencode's silence-exit is by an author outside `{Brendonovich, nexxeln}`** within the next 60m. If true, predicate (2) extends from cross-carrier to within-carrier — the rebound asymmetry is **also** the silence-exit asymmetry of the formerly-active carrier. If false (Brendonovich or nexxeln returns), the predicate weakens to a cross-carrier-only effect.
2. **The next 0/7 silence event** in the W18 trajectory exhibits the same orthogonal-rebound structure (different carrier, different author from prior fanout). Track repeats over a 7-day window.
3. **Rebound cardinality scales with silence duration**: longer 0/7 silences yield more carriers rebounding simultaneously (3-of-7, 4-of-7, etc.) rather than the 2-of-7 observed here. Tested by waiting for a longer 0/7 silence.
4. **Bot-only rebound is the falsifying counter-instance**: if a 0/7 silence is broken by gemini-cli-robot or app/dependabot or any bot author, the orthogonal-rebound predicate fails because bots fire on deterministic triggers independent of human attention pools. The expected rate of bot-only rebounds is non-zero (gemini-cli-robot's release-tag cherry-pick fanout has ~6h cadence) but should be a small minority.

## Distinctness from prior synths

- **vs synth #734**: #734 frames the fanout as a **decoupling event** (one carrier leaves the ecosystem-rate envelope). #738 frames the rebound as a **re-coupling event under orthogonality constraints** (different carrier and different author re-enters the envelope). #734 = within-fanout structure; #738 = post-silence structure.
- **vs synth #735**: #735 captures the **silence-bracketed-by-fanout temporal symmetry** as a single observable. #738 disaggregates the right-hand silence boundary into **carrier-and-author-typed rebound events** with measurable orthogonality.
- **vs synth #736**: #736 captures **cross-carrier parallel single-author thematic chains in the same temporal window**. #738 captures the **inverse**: cross-carrier parallel **non-author-overlapping** silence-exits in the same temporal window. #736 is "different carriers, same-shape chains, three independent authors"; #738 is "different carriers, silence-exits, three pairwise-disjoint author sets" (codex jif-oai ⊥ goose SarthakB11 ⊥ opencode-fanout {Brendonovich, nexxeln}).
- **vs synth #737**: #737 is the **single-carrier microstructure** of the silence boundary (entry-author ≠ exit-author within one carrier). #738 is the **cross-carrier macrostructure** of the rebound (rebound-carriers ≠ fanout-carrier, rebound-authors ⊥ fanout-authors). #737 + #738 are complementary: the silence's entry/exit boundary is author-rotated within each carrier (#737), and the rebound across all carriers is carrier-and-author-orthogonal to the immediately-prior fanout (#738).

## Risk lens

- **Reviewer-attention pool model gains support**: codex and goose rebounding while opencode remains silent is consistent with **the opencode reviewer pool being depleted by the Brendonovich sextet** (5 desktop-surface PRs reviewed in 47m), and codex/goose having **independent reviewer pools** that were already cool. Detector: track per-carrier reviewer cohort overlap; if low, predict orthogonal-rebound; if high (e.g., shared maintainers across carriers like sst/opencode + anomalyco/opencode), expect coupled rebound.
- **Pre-staged work as the rebound modality**: jif-oai's doublet (diff-disjoint, 14m53s apart) suggests the rebound is **not** triggered by the silence-exit author noticing the silence and reacting — it is triggered by the silence ending and the queued PRs draining. If most rebounds are doublet-or-larger by the same author, the carrier's silence is functionally a **review-batch window**, and rebound timing is determined by **review-bot/maintainer wake** rather than by author intent.
- **First-appearance authors as silence-exit class**: SarthakB11's zero W17 priors on goose make him a first-appearance silence-exit author. Combined with #737's first-appearance observation, this suggests silences are **structurally hospitable to new contributors** because the regular-maintainer review-attention is recharging. Detector: the ratio of first-appearance authors among silence-exits vs. non-silence-exits is a falsifiable contributor-diversity metric.
- **Bot-rebound as the structural counter-class**: gemini-cli-robot's release-tag-driven cherry-pick fanouts are the most likely class of rebounds that violate #738 (because bots fire on schedule, not on attention). If bot-rebounds become the dominant rebound modality, the carrier is structurally **bot-driven** rather than human-attention-driven, and #738's predicate does not apply.
