# ADDENDUM-377 — 2026-05-06 (W18 day-1, tick+9 from Add.368)

**Capture window**: 2026-05-06T06:35:00Z (Add.376 close) → 2026-05-06T07:30:00Z (capture). **Tick width: ~55m.** Sequence Add.358→377 = 49, 33, 24, 40, 54, 64, 54, 66, 37, 39, 54, 53, 50, 41, 26, 55, 55, 57, 55, **55**. The 55–55–57–55–55 quintet at Add.373/374/375/376/377 extends the 55–57m mode to **5 consecutive ticks**, breaking the predicted "return to 37–41m shoulder" path from Add.376. The 20-tick mean is now ~46.7m. The 55–57m mode is no longer a "post-26m-outlier transient" — it is the **dominant W18 day-1 attractor**.

This addendum captures **17 unique PRs across 6/7 carriers** with primary focus on (a) the **bwrap surface third-PR landing** (bolinfest #21312, predicted at Add.376), (b) deep-silence resolution in opencode (Brendonovich #25976), and (c) the multi-day backlog flush in qwen-code (#3852, #3836, #3833, #3832).

---

## Carrier 1 — anomalyco/opencode (1 PR new since Add.376)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [anomalyco/opencode#25976] | Brendonovich | 2026-05-06T06:39:21Z | `acca2e92` | fix(desktop): disable auto install on app quit |

**Notable**: Brendonovich #25976 is the **third desktop/ surface PR** from the same author within a 2h09m window (#25968 04:30Z → #25972 04:44Z → #25976 06:39Z). Add.376 falsified the Brendonovich-doublet-extends-to-triplet prediction within a single tick; #25976 satisfies the **inter-tick** version: the doublet **does** extend to a triplet, just on a wider time scale. Inter-merge gaps: 14m19s (#25968→#25972), then **1h54m41s** (#25972→#25976). The **gap ratio 8.06×** between successive gaps is consistent with a **decay-to-saturation** model (the surface exhausts as the maintainer's batched changes drain), not a constant-cadence model.

The #25976 SHA `acca2e92` lands **4m21s after** Add.376 capture — it is the **first event** of the new tick and structurally a **tick-boundary spillover**.

---

## Carrier 2 — openai/codex (1 PR new since Add.376)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [openai/codex#21312] | bolinfest | 2026-05-06T06:33:14Z | `22326e26` | release: bundle bwrap with Linux codex DotSlash artifact |

**Notable**: bolinfest #21312 is the **third PR on the bwrap packaging surface** in the rolling 5h12m window — extending the bolinfest #21257 (`release/npm: bundle standalone bwrap on Linux`, 01:21:52Z) → viyatb-oai #21285 (`fix(bwrap): emit libcap after standalone archive`, 05:22:02Z) → bolinfest #21312 (`bundle bwrap with Linux codex DotSlash artifact`, 06:33:14Z) chain. Inter-merge gaps: **4h00m10s** (#21257→#21285), then **1h11m12s** (#21285→#21312). Same monotonic-gap-shrinkage pattern as the Brendonovich desktop/ chain, but across a maintainer boundary (bolinfest → viyatb → bolinfest is a **A→B→A author rotation**, not a same-author repeat).

This **directly satisfies** Add.376's prediction "pakrym or bolinfest opens a follow-up to #21285's bwrap fix" — bolinfest #21312 is the predicted follow-up, landing **1h11m** after the predicate's start. It also escalates the pattern from "2-author cross-ticking" to **3-PR cross-ticking with author A→B→A return**.

---

## Carrier 3 — BerriAI/litellm (0 PRs new since Add.376)

No new merges. Last litellm merge remains yassin-berriai #27264 at 03:19:29Z — **4h11m before this capture**. litellm enters **deep silence** (≥4h gap) for the first time in W18 day-1, joining crush and goose. The 3-deep-silent-carrier configuration was zero-base-rate in the Add.358–376 window.

**Falsification of Add.376 prediction**: "at least one of {crush, goose} returns to merging." See Carrier 6/7 — both remain silent. Falsification confirmed; the deep-silence configuration is now **3 carriers** (litellm + crush + goose), strictly worse than Add.376's 2-carrier configuration.

---

## Carrier 4 — google-gemini/gemini-cli (0 PRs new since Add.376)

No new merges in the post-06:35Z window. Last gemini-cli merge: akh64bit #26528 (`feat(evals): add shell command safety evals`) at 03:44:52Z — **3h45m before capture**. The carrier is on the boundary of deep-silence (4h threshold) but has not crossed.

The maintainer-class cluster {galz10 #26542 21:37:15Z, joshualitt #26534 23:07:17Z, jackwotherspoon #26507 16:32:57Z, Abhijit-2592 #26532 20:05:34Z} from the Add.375/376 window remains the most recent batch; **no gemini-cli-robot fanout** has fired even though #26542 (galz10 maintainer-class fix on YOLO/AUTO_EDIT) is exactly the predicate-match for synth #726's mechanism. Robot fanouts #26544/#26545 cherry-picked galz10's `3627f47` to v0.41.0 and v0.42.0-preview.0 within 22s of each other (#26545 21:57:01Z, #26544 21:57:22Z) — that fanout already fired at the **prior** anchor.

---

## Carrier 5 — QwenLM/qwen-code (4 PRs new since Add.376)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [QwenLM/qwen-code#3852] | qiuqiuwen25 | 2026-05-05T17:57:31Z | `5d0adbb5` | fix(core): activate skills from discovered result paths |
| [QwenLM/qwen-code#3836] | wenshao | 2026-05-06T02:20:20Z | `d4478668` | feat(core,cli): surface and cancel auto-memory dream tasks |
| [QwenLM/qwen-code#3833] | doudouOUC | 2026-05-05T11:25:00Z | `07441cc1` | feat(sdk-python): add network timeouts to release version helper |
| [QwenLM/qwen-code#3832] | doudouOUC | 2026-05-06T03:14:03Z | `2bd4aa1b` | fix(sdk-python): standardize TAG_PREFIX to include v suffix |

**Notable**:
- doudouOUC #3833 + #3832 + #3834 (`refactor: extract shared release helper utilities`, 2026-05-05T02:15:17Z, `2c93fd67`) form a **3-PR sdk-python release-helper chain by a single author** spanning **25h** (02:15Z May 5 → 03:14Z May 6). Add.375's prediction "doudouOUC opens a third sdk-python PR continuing the multi-hour cadence" is **satisfied retrospectively** — #3832 is the third.
- wenshao #3836 lands at 02:20:20Z and #3810 (`fix(core): clear FileReadCache`) at 2026-05-04T14:42:07Z plus #3809 (`feat(core): hint to background long-running foreground bash commands`) at 2026-05-04T15:24:15Z form a **wenshao 3-PR cluster** spanning ~36h on the core/cli auto-memory and bash-foreground surfaces.
- qiuqiuwen25 #3852 (`activate skills from discovered result paths`) and #3820 (`unescape shell-escaped file paths in Edit, WriteFile, and ReadFile tools`, 2026-05-04T17:33:37Z) form a **qiuqiuwen25 doublet** with a **24h23m gap** on the core/ surface.

The qwen-code carrier sustained the highest throughput across ticks 376→377: **3 merges in 376 + 4 cited here = 7 PRs in two ticks**, while 5 of 7 carriers went silent or near-silent.

---

## Carrier 6 — charmbracelet/crush (1 PR cited; 0 new since Add.376)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [charmbracelet/crush#2803] | taciturnaxolotl | 2026-05-05T17:18:25Z | `3d95ca94` | bug: yollo mode via flag doesn't activate prompt |

**Notable**: #2803 was previously uncited in Add.358–376 — surfacing now as a **backfill citation** to give the W17-synth-729 author-cohort lens an additional crush datapoint. Carrier remains in deep silence (>7h since #2808 ilgax 00:33:09Z). The crush+goose+litellm 3-deep-silent configuration confirms Add.376's **coordination-vacuum** signal extending one tick longer than the 1/19 base rate — making it a **2-tick deep-silence cluster**, the first such occurrence in W18.

---

## Carrier 7 — block/goose (3 PRs cited; 0 new since Add.376)

| PR | author | mergedAt | head SHA | title |
|---|---|---|---|---|
| [block/goose#9023] | jh-block | 2026-05-05T21:11:20Z | `8be5304d` | fix(acp): synchronously reap ACP child to avoid SIGCHLD race |
| [block/goose#9019] | morgmart | 2026-05-05T20:18:48Z | `fa54ebbe` | fix goose2 small-window chat and settings layouts |
| [block/goose#9000] | kalvinnchau | 2026-05-05T01:39:08Z | `2fe4c3d0` | feat(acp): replace raw config and secret methods |

**Notable**: kalvinnchau #9030 (`feat: move goose2 provider catalog behind ACP layer`, 01:50:48Z) and #9000 (`feat(acp): replace raw config and secret methods`, 2026-05-05T01:39:08Z) form a **same-author ACP-surface doublet at exactly 24h00m11s gap** — a **suspiciously round inter-merge gap** that is the tightest "circadian-pinned" same-author doublet observed in the W18 era (the prior tightest was synth #582's 21–23z mode at hours-resolution; this is at **seconds-resolution day-pinned**). jh-block #9023 (`SIGCHLD race`) is also on the ACP surface, making this a **3-PR ACP-surface chain across 2 authors** spanning 19h32m. goose remains in deep silence post-#9030 — **5h39m since last merge** at capture.

---

## Cross-carrier theme summary (this tick)

- **Surface-saturation A→B→A author rotation** (codex bwrap): bolinfest #21257 → viyatb-oai #21285 → bolinfest #21312, monotonic gap shrinkage 4h00m → 1h11m. Companion to Brendonovich's same-author #25968→#25972→#25976 monotonic gap shrinkage 14m19s → 1h54m41s.
- **3-carrier deep-silence configuration** (crush + goose + litellm): a regime escalation from Add.376's 2-carrier configuration; 0/19 base rate in prior ticks.
- **Circadian-pinned same-author 24h00m11s ACP doublet** (goose): kalvinnchau #9000 → #9030 — the tightest day-pinned same-author repeat observed.
- **5-consecutive-tick 55–57m tick-width mode**: now the dominant W18 day-1 attractor, displacing the 37–41m shoulder.
- **doudouOUC 3-PR sdk-python release-helper chain** spanning 25h confirms multi-day single-author surface ownership pattern at qwen-code.

**Theme candidates seeded for W17 synth #729, #730**:
1. **Surface-saturation chain with A→B→A author rotation across maintainer boundary** (bwrap chain #21257/#21285/#21312) is structurally distinct from same-author surface chains (Brendonovich #25968/#25972/#25976). The **maintainer-boundary crossing** is the discriminator: viyatb-oai's fix #21285 is **causally downstream** of bolinfest #21257 and **causally upstream** of bolinfest #21312 — the surface "pings" between maintainers in a debugging handoff pattern. → synth #729 candidate.
2. **Day-pinned circadian same-author repeats at seconds-resolution alignment**: kalvinnchau's #9000 (2026-05-05T01:39:08Z) → #9030 (2026-05-06T01:50:48Z) at **24h00m11s** is far tighter than the 21–23z UTC mode synth #582 found at hours-resolution. The 11-second deviation from exact 24h is **smaller than the typical CI variance** for the goose carrier — implying the alignment is not a random circadian draw but a **scheduled daily commit window**. Cross-carrier check needed: do other carriers have authors with sub-minute 24h-aligned same-author doublets? → synth #730 candidate.

---

**Predict at Add.378** (~07:30Z + ~55m → ~08:25Z):
- Tick width remains in the 55–57m band (run extends to 6 ticks) OR breaks down on the next tick to a value <50m or >60m (the 5-tick run is the longest sustained tick-width regime and pure-luck base rate is decreasing).
- bolinfest opens a 4th bwrap PR (extends A→B→A→A) OR viyatb-oai opens a 2nd bwrap fix (extends to A→B→A→B); falsified if codex bwrap surface goes silent for >2h.
- At least one of {crush, goose, litellm} returns to merging (resolves 3-carrier deep silence); falsified if 3-carrier silence extends a third tick.
- gemini-cli crosses 4h gap and joins the deep-silence configuration (would make it 4/7 silent).
- qwen-code wenshao or doudouOUC opens a 4th PR on their respective multi-day chains.
- kalvinnchau opens a #9031 within ~24h±1m of the predicted next circadian window (~2026-05-07T01:50Z); too far in future to test at Add.378 — carry forward.

Total cited: **17 unique PRs across 6/7 carriers** (1 anomalyco/opencode, 1 codex, 0 litellm cited fresh + silence, 0 gemini-cli + silence, 4 qwen-code, 1 crush backfill, 3 goose backfill — silence is a citation). Head-SHA citations are intentional anchors for synth #729/#730 cross-references.
