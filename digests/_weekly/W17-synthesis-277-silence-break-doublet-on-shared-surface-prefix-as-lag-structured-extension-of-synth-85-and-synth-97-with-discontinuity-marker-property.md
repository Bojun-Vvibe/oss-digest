# W17 Synthesis #277 — Silence-Break-Doublet On Shared Surface-Prefix As Lag-Structured Extension Of Synth #85 Sub-10s Doublet And Synth #97 Lifespan-Monotone Series With Discontinuity-Marker Property

**Date:** 2026-04-28 (capture window through Add.122 close 13:55Z)
**Repos:** sst/opencode
**Refines:** synth #85 (sub-10-second same-author cross-PR doublet on adjacent surfaces), synth #97 (same-author n=3 self-merge series with shared spec-file co-touch and monotonically contracting lifespans), synth #98 (bot-driven sub-10s n=3 stale-PR mass-close sweep), synth #265/#267 (single-tick rebound non-persistence with bidirectional half-life).

## Pattern

A single author, after a multi-tick zero-merge silence, returns with a **same-author sub-90-second merge doublet whose PR titles share an identical surface prefix** (here: `fix(httpapi):`), creating a **discontinuity-marker** in the author's lifespan-time-series — the doublet's per-PR lifespan is short (post-resumption burst is high-velocity), but it follows a multi-hour silence that would, under the synth #97 framing, predict a longer-lifespan resume rather than a short one. The doublet acts simultaneously as:

1. **synth #85 family extension** (same-author cross-PR doublet on adjacent surfaces) — but at sub-90s rather than sub-10s, with **explicit surface-prefix lock** (string-equal title prefix) rather than the looser "adjacent surface" criterion of synth #85.
2. **synth #97 falsifier-class instance** — synth #97 predicts monotonically contracting lifespans within a self-merge series; synth #277's doublet sits **outside** the silenced author's prior series and breaks the monotone-lifespan time-series by injecting a discontinuity (the silence is the discontinuity-marker, the sub-90s doublet is the resumption).
3. **synth #265/#267 rebound test** — synth #265 predicts single-tick rebound with bimodal per-repo conversion; synth #277's resumption is a single-author rebound, partially aligning with synth #265's single-tick rebound but sharpened to author-axis rather than repo-axis.

## Concrete instance (Add.122, 13:08Z–13:55Z window)

- **opencode #24716 kitlangton MERGED 13:22:50Z `2a4f2bf57f...`** — `fix(httpapi): align sync seq validation`.
- **opencode #24717 kitlangton MERGED 13:23:55Z `e57d0c2fcc...`** — `fix(httpapi): document tui bad request responses`.
- **Inter-merge gap:** 1 minute 05 seconds.
- **Surface-prefix lock:** both titles start with `fix(httpapi):` (string-equal 13-character prefix). Adjacent doublet PRs in W17 history without this lock include #24711 `fix(tui):` 02:24:04Z `4d74849c` and #24706 `fix(httpapi): preserve mcp oauth error parity` 02:33:22Z `796b652d` — kitlangton's earlier doublet had **mixed prefix** (tui vs httpapi).
- **Preceding silence:** kitlangton's last prior merge before Add.122 was #24706 at 02:33:22Z. Silence duration to #24716 = `13:22:50Z - 02:33:22Z = 10h49m28s` spanning Add.109–Add.121 = **13 consecutive Add.* ticks of zero-merge silence on kitlangton author-axis**.
- **Post-doublet companion:** opencode #24792 iamdavidhill MERGED 13:24:47Z `3fa78a8bf6...` `docs: bump GitHub stars count to 150K` — 52s after #24717, completes the 1m57s opencode triplet but with **author-axis split** (kitlangton + kitlangton + iamdavidhill) and **prefix-axis split** (`fix(httpapi):` + `fix(httpapi):` + `docs:`), placing iamdavidhill's PR outside synth #277's scope (which is the kitlangton same-prefix doublet) and into synth #50's post-own-merge cascade scope.

## Why this is distinct from synth #85

Synth #85 (sub-10-second same-author cross-PR doublet on adjacent surfaces) requires:
- Inter-PR gap ≤ 10 seconds.
- Adjacent (not necessarily identical) surfaces.
- No required preceding silence.

Synth #277 requires:
- Inter-PR gap ≤ 90 seconds (6.5× wider band).
- **Identical surface-prefix string** (stronger than adjacent — the prefix is byte-equal).
- **Multi-tick preceding silence** (≥ 8 ticks observed; threshold to be calibrated).

The two synths address different mechanism families: synth #85 captures intra-burst mechanical-coupling (same author flushing a queue in seconds), synth #277 captures resumption-after-silence with topical clustering (same author returning to a single subsystem and shipping multiple fixes for it back-to-back). The 6.5× band-widening is mechanistic, not statistical: a returning author has to context-load, file PRs sequentially, and pass CI; sub-10s is implausible after a 13-tick silence, sub-90s is plausible.

## Why this is a synth #97 falsifier-class instance (not falsifier-instance)

Synth #97 frames same-author n=3 self-merge series as having monotonically contracting lifespans within the series. The kitlangton doublet at Add.122 is n=2 not n=3, so it cannot directly falsify synth #97; however, if extended to n=3 by a third kitlangton merge in the next 1–2 ticks (deadline Add.124), the lifespan-comparison test becomes:

- #24716 lifespan ≈ 1h+ (PR was open from approximately 12:20Z–13:22:50Z based on adjacent-PR open-time signature, exact open-time pending verification).
- #24717 lifespan ≈ 1h+ (similar window).
- Hypothetical #24718 lifespan: synth #97 predicts further contraction (sub-1h); synth #277 predicts no contraction requirement (post-silence resumption decouples lifespan-contraction from series-position).

If a kitlangton n=3 emerges with non-monotone-contracting lifespans, **synth #97 is falsified for post-silence series**, and synth #277 is **promoted from candidate to regime**.

## Why this is a synth #265/#267 sharpening

Synth #265 (single-tick reservoir-drain rebound with uneven per-repo conversion bimodal-100-or-0) and synth #267 (single-tick rebound non-persistence with bidirectional half-life) operate at the repo-axis level. Synth #277 sharpens the rebound to the **author-axis level** (kitlangton-only) within a single-repo (opencode-only) tick — the rebound is per-author-per-repo, not per-repo-aggregate. This makes synth #277 a **finer-grained** member of the rebound family, with the prediction that author-level rebounds aggregate into repo-level rebounds (synth #265) only when the active author's repo-affinity is exclusive.

## Falsifiers and predictions

- **Falsifier P-277-A:** kitlangton next merge after #24717 occurs **>90 seconds** after #24717 AND on a different surface-prefix — would weaken the surface-prefix-lock claim. Currently #24792 iamdavidhill at 52s post-#24717 is by a different author so does not bear on P-277-A; the test fires on kitlangton's next merge.
- **Falsifier P-277-B:** another author exhibits a multi-tick silence (≥ 8 ticks) and resumes with a non-prefix-locked doublet — would isolate the prefix-lock to kitlangton-personal style rather than a generalizable W17 regime.
- **P-277-C (recurrence prediction):** ≥ 1 additional same-author silence-break-doublet on shared prefix within 10 ticks (deadline Add.132). Cited prior W17 candidates: bolinfest atomic streaks (synths #157/#159) — bolinfest at 6-tick silence at Add.122; if bolinfest resumes with prefix-locked doublet, P-277-C confirmed.
- **P-277-D (ceiling prediction):** the doublet does not extend to n=4+ on shared prefix within the same tick — the resumption-burst is bounded at n=3 (consistent with synth #91 single-author triplet metronome ceiling).

## Adjacent-instance corpus check

- **doudouOUC qwen-code #3705 12:26:42Z `ba8d452c` + #3708 yiliang114 13:04:53Z `8de1bcb2`** (Add.121) — wider gap (38m11s), different authors, only weak prefix lock (`fix(ci):` vs `chore(release):`) — **does NOT qualify** for synth #277 (cross-author + wide-gap + mixed-prefix).
- **jif-oai codex #19961 11:06:41Z `b7c0f269` + #19963 11:12:51Z `54d14011` + #19967 11:32:06Z `fa127be2`** (Add.119) — same-author n=3 series with `feat: fix hinting` shared prefix on first two, then unrelated `Stabilize memory Phase 2` on third. Inter-PR gaps: 6m10s and 19m15s — **does NOT qualify** for synth #277's sub-90s band, but does qualify as a synth #91 triplet metronome.
- **kitlangton's own #24711 `fix(tui):` 02:24:04Z + #24706 `fix(httpapi):` 02:33:22Z** — gap 9m18s, mixed prefix — does NOT qualify under synth #277.
- **kitlangton's #24716 + #24717 at Add.122 is the FIRST observed W17 instance of same-author sub-90s prefix-locked doublet following multi-tick silence.**

**Status:** Synth #277 is **single-instance candidate** at first observation. P-277-C deadline Add.132 will determine candidate→regime promotion.
