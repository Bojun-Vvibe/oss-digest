# ADDENDUM-90 — 2026-04-27

**Capture window:** 12:00:11Z → 12:43:52Z (UTC). Window width: **43m41s**.
**Predecessor:** ADDENDUM-89 (closed at 12:00:11Z; corpus silence broken by codex #19792 at 11:31:57Z; predicted post-merge author session expansion for jif-oai).

## New merges since ADDENDUM-89 cutoff (12:00:11Z)

| Repo | PR | SHA (short) | Author | Merged (UTC) | Lines | Time-into-window |
|---|---|---|---|---|---|---|
| openai/codex | #18982 | `da83ab554a` | jif-oai | 12:32:45Z | +1074/-1053 | +32m34s |
| QwenLM/qwen-code | #3661 | `8349b8569e` | dreamWB | 12:28:17Z | +778/-46 | +28m06s |

**Two repos broke silence in-window.** Notably, **codex saw a SECOND merge inside 61 minutes from the same author** (jif-oai), and qwen-code's silence (5h21m at Add.89 capture, anchored on #3665 `96bc8741` 06:38:56Z) ended via dreamWB #3661 — a PR with a **multi-refile-escalation history** documented below.

## Per-repo trailing-silence at capture (12:43:52Z)

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Δ vs Add.89 |
|---|---|---|---|---|
| openai/codex | #18982 `da83ab554a` | 12:32:45Z | **11m07s** | RESET (was 28m14s) |
| QwenLM/qwen-code | #3661 `8349b8569e` | 12:28:17Z | **15m35s** | RESET (was 5h21m15s) |
| anomalyco/opencode | #24592 `61eabfc60c` | 09:02:28Z | 3h41m24s | +43m41s, **crossed 4h boundary at 13:02:28Z**? — no, 18m36s short of crossing |
| block/goose | #8856 `d8e4b55d16` | 10:31:41Z | 2h12m11s | +43m41s |
| BerriAI/litellm | #26545 `3d2b8fed32` | 2026-04-26T03:07:01Z | 33h36m51s | +43m41s |
| google-gemini/gemini-cli | #25942 `31bdf112d2` | 2026-04-24T21:55:46Z | **62h48m06s** | +43m41s, **new W17 silence high-water sustained** |

## Falsification check on ADDENDUM-89 predictions

1. **Pred #1** (highest-confidence: anomalyco/opencode crosses 4h silence boundary at 13:02:28Z): **STILL OPEN.** Capture at 12:43:52Z is 18m36s short of the 13:02:28Z deadline. Silence at capture is 3h41m24s — on track to cross. Triple-occupancy of 4–24h cell at capture: cell holds **{anomalyco/opencode: 3h41m (approaching), block/goose: 2h12m}** — codex and qwen-code both reset, both now in 0–4h cell. No triple-occupancy yet.
2. **Pred #2 (medium)** (jif-oai opens or merges ≥1 MORE PR in `jif/...` namespace by Add.90): **CONFIRMED, MERGE NOT JUST UPDATE.** jif-oai #18982 (`feat: use git-backed workspace diffs for memory consolidation`, +1074/-1053, 21 files, SHA `da83ab554a`) merged at 12:32:45Z — **60m48s after #19792 merge**. This is the second jif-oai self-merge in ≤61min, on a different but adjacent semantic surface (multi_agent_v2 → memory consolidation, both inside the `memories/` and `multi_agent` cluster). The synth #104-seeded "post-merge author session expansion" hypothesis from Add.89 is **confirmed at N=2 self-merges**, not just N=2 updates. **This is the headline event of the window.**
3. **Pred #3 (medium)** (bolinfest pr19772–19776 force-push signal or close by Add.90): **STILL OPEN, NO SIGNAL.** All five chain members remain OPEN at capture; latest `updatedAt` per spot-check unchanged from Add.89 era (07:22:36Z–07:22:44Z range). Chain is now **5h20m+ old**, has crossed the 5h-from-open marker at 12:14:28Z–12:22:27Z **without** any force-push or close — Add.89 prediction's discriminator window was the wrong frame; the chain is **stalled**, not iterating-toward-merge or rebuilding. Pred #3 evolves: by Add.91, expect either (a) batch close/abandonment as a unit, or (b) bolinfest opens a NEW chain superseding 19772–19776.
4. **Pred #4 (medium)** (block/goose ≥1 dependabot auto-merge inside Add.90 window, base=main, <2m lifespan): **NOT TRIGGERED.** No goose merges in window. Forecast still untested — auto-merge triggers on dependabot scan windows, which may not align with our 43m capture cadence. Re-arm pred for Add.91.
5. **Pred #5 (low)** (gemini-cli breaks silence by Add.90 OR persists past 64h at 13:55:46Z): **NEGATIVE-PREDICTION CONFIRMED IN-WINDOW; 64h MARKER STILL OPEN.** No gemini-cli merge in window. Silence at capture **62h48m06s**, 1h07m40s shy of the 64h mark.
6. **Pred #6 (speculative)** (litellm produces a `main`-base merge by Add.90, ending 32h+ mainline dormancy): **FALSIFIED ON MAIN-BASE; CONFIRMED ON STAGING.** litellm #26386 (`litellm oss branch`, krrish-berri-2, +4599/-298 over 28 files, SHA `77df5115`) merged at **04:55:55Z** — but base is **`litellm_internal_staging`**, not `main`. The mainline dormancy (anchored on #26545 `3d2b8fed32` 2026-04-26T03:07:01Z) **persists at 33h36m51s**. The internal-staging→main pump did NOT fire. The "fires twice-daily" speculation also tested negatively: 04:55:55Z is the only post-Add.88 staging activity, and it lands ON the staging branch, not pumped to main. **Synth-target reinforced.**

## The headline event — jif-oai N=2 same-author self-merge inside 61m

Add.89 seeded synth #104 ("post-merge author session expansion") on the basis of **3 jif-oai PRs visible in codex's open queue post-#19792-merge, with N≥2 follow-on activity within 30 minutes on adjacent semantic surfaces". The expansion was inferred from `updatedAt` activity on #18982 and #19805. This window upgrades the evidence from *update-activity* to **actual self-merge**: #18982 merged 60m48s after #19792.

Critical structural details:

- #19792 (`9afa1a44`, 11:31:57Z merge) touched `multi_agent_v2/feature config`, +152/-22, 5–8 files (small, focused).
- #18982 (`da83ab55`, 12:32:45Z merge) touches `memories/git-backed workspace diffs`, +1074/-1053, **21 files**, near-zero net change. **Substitution-shape diff** (Add.89 obs).
- #19805 (`jif/hint-ma-v2`, +289/-4) is **still open** at capture (`updatedAt 11:43:42Z`, ≥1h0m stale at capture; **no growth** in 1h0m). Note: this contradicts the naive expectation that a same-author session expansion would iterate the most-recently-touched PR.

The session signature is therefore:

- **11:31:57Z**: #19792 merge (small, focused, Grammar B `jif/clean-multi-agent-v2-config`).
- **+11m45s** (11:43:42Z): #19805 update — **NEW PR** opened post-merge, but does not iterate further in window.
- **+15m30s** (11:47:27Z): #18982 update — resumed older PR, large substitution diff.
- **+60m48s** (12:32:45Z): #18982 **merge** — the resumed-older-PR wins, not the newly-opened one.

This is a **non-LIFO author session expansion**: when a single author has a fresh self-merge and multiple in-flight PRs, the next self-merge can come from the **older resumed PR** rather than the **newly-opened one**. Add.89's #19805 ("opened post-merge as fresh") was the wrong predictor; #18982 ("resumed older with large substitution diff") was the correct one. **Predictive lesson:** during post-merge session expansion, **diff-shape (substitution > additive)** beats **freshness (newly-opened > resumed)** as a next-merge predictor.

## qwen-code dreamWB #3661 — same-content quadruple-refile-escalation with content amplification on the merging member

qwen-code #3661 (`feat(vscode): add tab dot indicator and notification system (#3106)`, dreamWB, +778/-46, 5 files, SHA `8349b8569e`, **MERGED 12:28:17Z**) has a **CLOSED-PR sibling history** that is structurally distinct from anything previously catalogued:

| PR | Created | Closed/Merged | headRefOid | Status | Note |
|---|---|---|---|---|---|
| #3657 | 03:56:29Z | closed 04:44:28Z | `09549c0d` | CLOSED | Same SHA as 3659/3660. Original. |
| #3659 | (≈04:44Z) | closed 04:47:16Z | `09549c0d` | CLOSED | **Same SHA as #3657** — re-filed, same content. |
| #3660 | 04:52:12Z | closed 04:53:05Z | `09549c0d` | CLOSED | **Same SHA as #3657/#3659**. Lifespan **53s**. |
| #3661 | 04:53:28Z | merged 12:28:17Z | `8349b856` | **MERGED** | **NEW SHA** (different content), +778/-46. |

Three PRs (#3657, #3659, #3660) carry the **identical headRefOid `09549c0d`** — i.e., literally the same commit was filed three times. All three were closed by author/CI. The fourth attempt, #3661, switched to a **new SHA** (`8349b8569e`) carrying a **substantially amplified diff** (+778/-46 over 5 files) and **lived 7h34m49s before merging at 12:28:17Z**.

This is **distinct from synth #89** (cross-repo author handoff identical content refile with preceding open lead): #89 is *cross-repo* and the lead PR is *open*, not closed. Here the refiles are *intra-repo* and three priors are *closed* before the fourth merges. It is also **distinct from synth #98** (bot-driven sub-10s N=3 stale PR mass close): synth #98 is bot-mediated and operates on *unrelated* PRs across surfaces; this is single-author and operates on *same-content* PRs.

Qualifying structural properties:
- **N=3 same-SHA closed siblings** preceding an N=4 different-SHA merging member.
- **Content amplification on the merging member**: the `09549c0d` SHA was insufficient (presumably failed CI or review) and the merging SHA `8349b856` adds **far more lines** (+778 vs whatever `09549c0d` carried — open question, but the multi-close pattern suggests it was minimal).
- **Lifespan disparity**: closed siblings averaged **<2m** each; merging member lived **7h34m49s**. The author's iteration cycle is min-scale on the closed siblings and hours-scale on the merging one.
- **Sibling-open cadence**: #3657 → #3659 → #3660 spans **57 minutes** of identical-content refiles. The author refiled the same SHA three times before pivoting.

This is the seed of **W17 synth #100**: same-author intra-repo same-SHA N=3 closed-refile prelude before a content-amplified single-merge resolution.

## codex post-merge session expansion confirmed — qualifies for synth #101

The N=2 self-merge inside 61m by jif-oai (codex #19792 → #18982) qualifies the post-merge author session expansion phenomenon (Add.89 obs, seeded as candidate synth #104) for **promotion** to a numbered synth. With the N=4 dreamWB pattern claiming synth #100, the jif-oai pattern advances to **W17 synth #101**. Defining property: same-author **second self-merge within 70 minutes** of a first self-merge, on **adjacent semantic surface**, **non-LIFO selection** (the resumed-older PR wins over the newly-opened post-merge PR), with the second member exhibiting **substitution-shape diff** (near-zero net change, large lines moved).

## Cross-repo open-PR firehose snapshot (top per repo at capture)

- **codex #19809** (jif-oai, "Allow Phase 2 memory claims after retry exhaustion", `01b82885`): NEW PR — jif-oai's THIRD PR in the post-merge session expansion. Synth #101 may be N=3 by Add.91 if this merges.
- **codex #19807** (vb-openai, "[codex] Promote Codex App on Windows in tooltips", `a37adea0`): unrelated, fresh open.
- **codex #19805** (jif-oai, `dfa03848`): still stale at capture, 1h0m+ unchanged; non-LIFO loss confirmed.
- **codex #19797** (aibrahim-oai, `f8e2beea`, +2494/-544): **deletion-rate collapse continues** — no growth observed in window. Deletion-shape stuck at -544, additions plateau near +2494. Add.89 falsification of pred #5 stands.
- **codex #19778** (abhinav-oai, "Add hook listing and config APIs", `d5539f43`): fresh open in window.
- **codex #19772–19776** (bolinfest chain): all 5 still OPEN, **5h20m+ stalled, no force-push signal**.
- **anomalyco/opencode #24595** (andocodes, `a82448915f`, "fix(opencode): don't override User-Agent set via provider options.headers"): top of fresh queue.
- **anomalyco/opencode #24612** (ricardofiorani, `36157b68d4`, "feat: added ability to load dynamically the model list from LM Studio"): fresh feature.
- **anomalyco/opencode #24589** (cgarrot, `a128590f63`, "feat: add multi-root workspaces"): fresh feature, larger surface.
- **qwen-code #3677** (shenyankm, `77c53e05a2`, "fix(openai): parse MiniMax thinking tags"): fresh top.
- **qwen-code #3673** (LaZzyMan, `73c54451d2`, "feat(memory): add autoSkill background project skill extraction"): fresh feature.
- **litellm #26598** (zyz23333, `45336b0179`, "fix(custom_httpx): preserve non-ascii response headers"): fresh top of staging.
- **litellm #26593** (weiguangli-io, `c1323e20d9`, "fix(aiohttp): sanitize non-ASCII response headers"): **content-overlap with #26598** — both fixing non-ASCII header handling on different HTTP clients (httpx vs aiohttp). **Convergent independent-author fix duo** worth tracking.
- **gemini-cli #26043** (Ultron09, `86ab6f3cf8`, "fix(cli): resolve global configuration serialization and reliability hardening"): same Ultron09 author who had #26041, #26042 in Add.88. **Three Ultron09 PRs all open, all stale** — gemini-cli's open queue freshness is concentrated on a single author with zero merges.

## Predictions for ADDENDUM-91

1. **Highest-confidence**: anomalyco/opencode crosses 4h silence at 13:02:28Z (18m36s post-capture). At Add.91, anomalyco/opencode joins 4–24h band unless it merges first. Cell may hold **{anomalyco/opencode, block/goose}** doublet — single-cell occupancy by two repos is the W17-modal cell-shape; not synth-novel.
2. **Medium-confidence**: jif-oai #19809 OR #19805 merges by Add.91, extending synth #101 to N=3 self-merges within ~120m. If #19809 merges, the "non-LIFO" property of synth #101 weakens (since #19809 IS the newest jif-oai PR). If #19805 merges, the property is reinforced. **Discriminator window.**
3. **Medium-confidence**: bolinfest pr19772–19776 reaches 6h-from-open marker (13:14:28Z–13:22:27Z) inside Add.91 window with **no force-push and no merge** — chain is stalled by review-block, not by author-iteration. Closure or supersession by Add.92 expected.
4. **Medium-confidence**: litellm #26598 + #26593 (the non-ASCII-header convergent fix duo) merge inside the same window, validating a **convergent-independent-author fix-duo** pattern (synth-candidate territory but not yet promoted).
5. **Low-confidence**: gemini-cli breaks silence by Add.91, ending the streak before 64h at 13:55:46Z. Negative-prediction default: silence persists, crosses 64h.
6. **Low-confidence**: dreamWB opens or files a follow-up to #3661 in qwen-code by Add.91 (post-merge session expansion test on a NEW author). If dreamWB opens nothing further, synth #101's per-author specificity strengthens.

## Cross-references

- **Synth #99** (same-author shared-spec-anchor self-merge series extension past original triple): kitlangton's anomalyco/opencode #24365 from 2026-04-25 was the prior canonical "extension event"; jif-oai's codex #19792 → #18982 is a **different topology** (no shared anchor file across the two — `multi_agent_v2/config` vs `memories/diffs` are disjoint). Synth #101 is therefore **not** a recurrence of #99 — they are sibling phenomena under "same-author rapid self-merge series" but differ on *anchor sharing*: #99 has a shared anchor file, #101 has a shared **author session and adjacent semantic cluster** but not file overlap.
- **Synth #89** (cross-repo author handoff identical content refile with preceding open lead): qwen-code dreamWB #3661 N=4 same-author intra-repo same-SHA refile is the **intra-repo, intra-author counterpart** to #89's cross-repo author-handoff form. The shared property is "identical content refile prelude"; the divergent property is single-author/single-repo.
- **Synth #100 seed** (this addendum): same-author intra-repo same-SHA N=3 closed-refile prelude before a content-amplified single-merge resolution (qwen-code dreamWB).
- **Synth #101 seed** (this addendum, promoted from Add.89's synth #104 candidate): same-author N=2 self-merge inside 70min on adjacent semantic surface with non-LIFO selection and substitution-shape second-member diff (codex jif-oai).
- **Synth #218** (Grammar inventory): jif-oai #18982 branch name is `jif/memories-on-file-system` — Grammar B (`<author>/<kebab>`). Two consecutive jif-oai self-merges in this addendum, both Grammar B. Per-author grammar consistency.
- **ADDENDUM-89 pred #6** (litellm main-base merge): formally **falsified** in this window. The internal_staging-only regime is now **34h sustained**. Synth-candidate territory: "two-base merge regime where the public/main base goes dark for 30h+ while the internal_staging base accumulates feature-scale merges (#26386 +4599/-298)" — track for future synth.
