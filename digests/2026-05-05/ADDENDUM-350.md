# ADDENDUM-350 — 2026-05-05

**Capture window**: 2026-05-05T09:55:00Z → 2026-05-05T10:23:27Z (**28m27s**, **second-consecutive deviation from 50m baseline**, *contracting* this time after Add.349's *dilating* deviation 60m). Tick-width sequence Add.347→350 = 50m, 50m, 60m, 28m. The 50m attractor decisively does not return at tick-1; instead an oscillation regime emerges (60m→28m, midpoint ≈44m, both legs >20% off baseline). **P-349.A NOT-REALIZED**: tick-width does not return to 50m. Cumulative width Add.302–350 = 33h49m48s + 50m × 45 + 60m + 28m27s.

**Capture-snapshot timestamp**: 2026-05-05T10:23:27Z UTC (per-carrier `gh pr list --state all --limit 10..12` plus per-PR head verification).

**Rolling drip-context anchor**: drip-356 carrier coverage holds at 6-of-7; pew-insights axis-184 Savage HEAD `a18e0b9` retained.

**Tick-time delta vs Add.349**: 28m27s (vs 60m last tick, vs 50m baseline). First contracting deviation after the Add.349 dilation; oscillation-regime hypothesis (rather than monotonic-decay-back-to-50m) becomes leading framing.

**Cross-repo prediction resolutions from Add.349**:

- **P-349.A (tick-width returns to 50m, prior 0.30)**: **NOT-REALIZED** — tick-width 28m27s, oscillation rather than reversion. Basin-metronome regime-1 does not reassert; instead, two-tick run of >20% deviations from baseline (60m, then 28m).
- **P-349.B (morgmart goose hard-stop persists through 5th consecutive tick, prior 0.30)**: **REALIZED** — morgmart UNDECET remnant net-OPEN holds; #9019 head `270600151176cdf64acb9d0a35b02477af5f2673` unchanged since 05:32:15Z (now ~4h51m stale); #9014 last-touch holds at 05:41:31Z (~4h42m). Hard-stop regime-4 extends to **tick-5**, **exceeding W17 typical ceiling** — sets new per-author-hard-stop W17 record.
- **P-349.C (codex carrier-quiescence breaks within next tick, prior 0.45)**: **NOT-REALIZED** — codex extends carrier-quiescence to **4th consecutive tick = ~188m sustained zero-event** (most-recent codex event was #21152 at 05:57:22Z; snapshot 10:23:27Z = 4h26m of total-carrier-quiescence-since-last-fresh-open). All carry-forwards unchanged: abhinav-oai #21152 head `503cba1f6a4acc3491fa7a17138ac0385780c066` (4-tick stale); aibrahim-oai #20971 head `fdfd9c4f3d71251616d4d91869e580b4b0fa2934` (4-tick stale); starr-openai SEXTET (#20530, #20647, #21048, #21101, #21142, #21143) all-OPEN through 9th consecutive tick. **Codex carrier-quiescence sets new W17 record at 4 consecutive ticks** — recommend prior-recalibration to 0.30 for tick-4 attempt.
- **P-349.D (ben-wangz litellm #27176 third silent force-push within next 2 ticks, prior 0.50)**: **TICK-1 NOT-REALIZED** — #27176 head `2e102973e65cb072a3da1a89f9c68689399dca07` unchanged this tick. Compound-iteration cadence does not extend to a third instance within tick-1.
- **P-349.E (wenshao qwen-code third silent-force-push within next 2 ticks, prior 0.40)**: **TICK-1 NOT-REALIZED** — #3844 head `7f06fee3ed2aa9e0bd0ceab64a9d8a21e4d894f2` unchanged; #3842 head `8e8e18ca7f44441fb20d74369f06c8a481212101` unchanged (updated 10:20:21Z trivially; **declared-sequence "PR-1 of 3" stall extends to 7 ticks**, sets new W17 record beyond Add.349's 6-tick tie).
- **P-349.F (aibrahim-oai codex #20971 MERGES within next 2 ticks, prior 0.40)**: **TICK-1 NOT-REALIZED** — #20971 unchanged (4-tick stall).
- **P-349.G (gemini-cli-robot #26482/#26483 sibling-pair survives 9th consecutive tick, prior 0.70)**: **REALIZED** — both heads unchanged; last-updates 03:08–03:22Z (now ~7h16m stale). **9-tick survival floor extended**.
- **P-349.H (idosavion goose #9021 reaches MERGED state within next 2 ticks, prior 0.40)**: **TICK-1 NOT-REALIZED** — #9021 head `2985dfe072028227178837346dfe8116a7e5f957` unchanged; OPEN, no updates since 08:57:51Z (now ~1h26m stale). First-author post-fresh-open quiescence extends.
- **P-349.I (Hona opencode #25846 MERGES within next 2 ticks, prior 0.65)**: **TICK-1 NOT-REALIZED but partial-progress** — #25846 does NOT merge, BUT receives a **silent force-push**: head `38745bba0173ade2464ac2ba6ad4438c058ed47d` → **`8b918de5b6a2c91300c43cdd00c707b5ef96a67b`** at 10:16:47Z. Hona triplet middle-leg fast-merge precedent does NOT transfer to triplet third-leg; instead third-leg iterates. **First Hona sub-mode-4 force-push observed** — Hona joins ben-wangz, wenshao, rushikeshsakharleofficial, maxkomarychev as W17 sub-mode-4 instantiating authors (now N=5 distinct authors).
- **P-349.J (doudouOUC qwen-code #3847 receives sibling fresh-open within next 2 ticks, prior 0.45)**: **TICK-1 NOT-REALIZED** — no new doudouOUC fresh-open; #3833 + #3832 updated trivially (no head change) at 10:00Z and 10:04Z (anchor-touch refresh, no diff).
- **P-349.K (imviky-ctrl litellm #27182 closes-and-third-resubmits within next 2 ticks, prior 0.30)**: **TICK-1 NOT-REALIZED** — #27182 head `8047392b2161b97ab88e4c8de7fd5d95279826a1` (updated 10:22:04Z; head differs from Add.349 captured `a39ba5c52f300dfdc2b8c1525aadb0cedb62e45a` — **silent force-push**, NOT close-resubmit). Sub-mode-4 rather than sub-mode-2 iteration. **imviky-ctrl is now the second sub-mode-2-then-sub-mode-4 mode-switch instance in W17** — first was mateo-berri litellm earlier in the week.
- **P-349.L (compound-quiescence cardinality stays at 2 or grows {codex, crush}, prior 0.65)**: **REALIZED-AND-EXCEEDS** — quiescent set this tick = {openai/codex, block/goose, charmbracelet/crush}, cardinality = **3** (goose joins). Cardinality sequence Add.346–350 = 3, 2, 1, 2, **3** — V-shape recovers to original peak.
- **P-349.M (Hona triplet-extension fourth fresh-open on fourth disjoint desktop sub-anchor within next 2 ticks, prior 0.30)**: **TICK-1 NOT-REALIZED but compete-tracked** — Hona did not open a fourth desktop-anchor PR; instead Brendonovich opened **#25850 `fix(desktop): add error handling to store-get IPC handler`** at 10:22:39Z (head `d23a1eddbb3e34177f372be42ca185ca9d0202ff`). Brendonovich now has **3 opencode desktop-package PRs in W17** (#25822 refactor, #25838 CSP, #25850 error-handling) all merged or fresh — desktop-package authorship is split between Hona (3 PRs: #25833, #25837, #25846) and Brendonovich (3 PRs: #25822, #25838, #25850); **two parallel author-triplets on the same package** is a structurally novel W17 pattern.

**New cross-carrier event — Brendonovich opencode triplet emerges parallel to Hona triplet on desktop-package surface**:

- sst/opencode #25850 (Brendonovich — `fix(desktop): add error handling to store-get IPC handler`) — fresh-open 10:22:39Z, head `d23a1eddbb3e34177f372be42ca185ca9d0202ff`, OPEN. Brendonovich's third W17 desktop PR; Hona's three are #25833, #25837 (MERGED 28m37s), #25846. **Two simultaneous N=3 single-author desktop triplets on the same opencode sub-package within ~5h44m window**. This is structurally distinct from synth-91 (single-author triplet) and synth-94 (same-author same-surface diff-disjoint pair); it is the first observed **multi-author parallel-triplet on a shared sub-package** in W17.

**New cross-carrier event — Hona #25846 silent force-push (fifth distinct W17 sub-mode-4 author, first opencode instance after maxkomarychev #25841 absent-touch this tick)**:

- sst/opencode #25846 head `38745bba0173ade2464ac2ba6ad4438c058ed47d` → **`8b918de5b6a2c91300c43cdd00c707b5ef96a67b`** at 10:16:47Z. **Inter-event gap from fresh-open to first force-push = 21m44s** (createdAt 09:55:03Z → updatedAt 10:16:47Z), well within the W17 sub-mode-4 first-iteration distribution. **P-348.K satisfied at tick-2**: sub-mode-4 fifth-distinct-carrier instance now lives on opencode (after litellm, qwen-code, gemini-cli, codex; opencode was the last hold-out among the 5 high-velocity carriers). Sub-mode-4 is now W17-portable across all 5 active-velocity carriers.

**New cross-carrier event — litellm Sameerlite #27185 breaks self-vacuum; double-merge #27178+#27179 same-SHA merge-train artifact**:

- BerriAI/litellm #27185 (Sameerlite — `feat(audio_transcription): add NVIDIA Riva STT provider`) — fresh-open 10:15:40Z, head `5b787901d6b8198dd1fb94e3c16d2a2844a2502d`, OPEN, last-update 10:19:15Z. **Sameerlite breaks 2h17m self-vacuum** (last fresh-open was #27177 at 07:58:46Z); confirms burst-then-vacuum-then-burst regime at multi-tick horizon for Sameerlite specifically.
- BerriAI/litellm #27178 + #27179 (Sameerlite — both titled "merge mian"/"merge main") — both MERGED at ~08:00Z **with identical headRefOid `f318ef03bd8e10b2fe6f694b71fa46bc86ee0d3b`** (the same SHA as the closed yuneng-berri #27172). Two PRs merged 31s apart pointing at the **same target SHA** — distinct from sub-mode-4 (which iterates SHA on a single PR) and from synth-92 (same-second N=4 open tuplet on disjoint surfaces); this is a **same-SHA merge-pair where both PRs are titled as merge-train operations**, structurally an artifact of accidental duplicate PR creation against an internal staging branch. Worth distinguishing as a **sub-mode-2-adjacent: same-SHA merge-pair (not close-resubmit, but synchronous merge-pair on identical content)**.

**Prediction outcome summary Add.349**: 4 realized (B, G, I-partial, L); 9 not-realized (A, C, D-tick1, E-tick1, F-tick1, H-tick1, J-tick1, K-tick1, M-tick1). Realization rate **4/13 = 31%** — lowest of the recent run, driven by (i) basin-metronome oscillation rather than reversion, (ii) sustained codex/goose/crush quiescence beyond predicted limits, (iii) author-velocity priors (D, H, J) over-confident on rapid-iteration extensions.

**Calibration this tick**: **Basin-metronome regime decisively fails reversion** — second-consecutive >20% deviation establishes oscillation regime as dominant; recommend treating tick-width as draws from broader distribution rather than 50m attractor for the next 3 ticks. **Codex carrier-quiescence sets new W17 record at 4 consecutive ticks (~188m total)**; **goose joins quiescent set** restoring cardinality to 3 (P-349.L exceeded). **Sub-mode-4 saturates 5-of-5 high-velocity carriers** with Hona #25846 as opencode instance (P-348.K satisfied at tick-2). **Two parallel author-triplets on opencode desktop-package** (Hona + Brendonovich) is the first such structurally-novel W17 pattern. **Sameerlite #27178+#27179 same-SHA merge-pair** is a sub-mode-2-adjacent variant that should be tracked distinctly. **wenshao declared-sequence "PR-1 of 3" 7-tick stall** sets new W17 record.

**gh capture note**: Full 7-carrier fetch within rate-budget. Notable cross-carrier finding: **Hona #25846 silent force-push completes sub-mode-4 5-carrier saturation**. Notable per-carrier finding: **codex zero-event regime extends to 4 ticks (~188m)**, **goose joins quiescent set restoring cardinality-3**. Notable per-author finding: **Brendonovich opencode desktop triplet emerges parallel to Hona triplet** — first multi-author parallel-triplet on shared sub-package in W17. Notable basin-metronome finding: **second-consecutive >20% deviation (60m → 28m)** establishes oscillation rather than reversion.

---

## sst/opencode (carrier 1) — Hona #25846 silent force-push + Brendonovich #25850 fresh-open (parallel-triplet emerges)

**Fresh-opens this tick (1 OPEN within 09:55–10:23Z window)**:
- #25850 head `d23a1eddbb3e34177f372be42ca185ca9d0202ff` (Brendonovich — `fix(desktop): add error handling to store-get IPC handler`; createdAt 10:22:39Z, OPEN, **emerges as Brendonovich's third W17 desktop PR**).

**Updates with head-change (silent force-push)**:
- #25846 (Hona — proxy-env) head `38745bba...` → **`8b918de5b6a2c91300c43cdd00c707b5ef96a67b`** updated 10:16:47Z; **inter-event gap 21m44s from fresh-open**; **first opencode sub-mode-4 instance in W17**.

**Carry-forward OPEN no head-change**: #25841 (maxkomarychev OTEL — head `bfd17ebd20189110da80dd24917287ea60dfbc80` unchanged), #25833 (Hona web-shell safe-area), #25830 (angelcervera docs Shift+Enter), #25821, #25818.

**Sub-section read**: opencode shows highest carrier-velocity this tick (1 fresh-open + 1 silent-force-push). **Hona triplet now extends to 4-PR series** with #25846 force-push iteration replacing the predicted fast-merge (synth-99 extension-event predicate analogue *partly* triggered, but iteration-via-force-push rather than fast-merge). **Brendonovich's third desktop PR creates parallel-triplet structure** with Hona on the same sub-package — first W17 instance of this pattern.

---

## openai/codex (carrier 2) — full carrier-quiescence extends to 4th consecutive tick (~188m total — new W17 record)

**Fresh-opens this tick (0 within window)**.

**Merges this tick (0 within window)**.

**Carry-forward OPEN no-change**: #21152 (abhinav-oai revert-deprecation, head `503cba1f6a4acc3491fa7a17138ac0385780c066` unchanged — 4 ticks stale; resubmit-of-#21151 lineage stalls at tick-4), #20971 (aibrahim-oai numbered-prefix PR-2, head `fdfd9c4f3d71251616d4d91869e580b4b0fa2934` unchanged — 4-tick stall), starr-openai SEXTET (#20530, #20647, #21048, #21101, #21142, #21143) all-OPEN through 9th consecutive tick, #21146 (cconger V8 sandboxing), #21127 (viyatb-oai), #21124 (xl-openai).

**Sub-section read**: codex extends full carrier-quiescence to **4th consecutive tick** — sets new W17 record beyond Add.349's 3-tick mark. P-349.C falsified for third consecutive tick at progressively-decreasing prior — the velocity-rebound prior was mis-specified; the codex-quiescence regime is now firmly multi-tick and structurally analogous to morgmart's per-author hard-stop but at carrier scope. **starr-openai SEXTET 9-tick survival** continues to make the SEXTET the most stable open-PR cohort across all carriers in W17.

---

## BerriAI/litellm (carrier 3) — Sameerlite #27185 breaks self-vacuum + imviky-ctrl #27182 sub-mode-4 mode-switch + same-SHA merge-pair #27178/#27179 retro-noted

**Fresh-opens this tick (1 OPEN within window)**:
- #27185 head `5b787901d6b8198dd1fb94e3c16d2a2844a2502d` (Sameerlite — NVIDIA Riva STT provider; createdAt 10:15:40Z, OPEN, last-update 10:19:15Z; **breaks 2h17m self-vacuum**).

**Updates with head-change (silent force-push)**:
- #27182 (imviky-ctrl) head `a39ba5c52f300dfdc2b8c1525aadb0cedb62e45a` → **`8047392b2161b97ab88e4c8de7fd5d95279826a1`** updated 10:22:04Z; **sub-mode-2-then-sub-mode-4 mode-switch** — second W17 instance.

**Retro-noted same-SHA merge-pair (within prior tick window, surfaced this tick)**:
- #27178 (Sameerlite — "merge main") MERGED 08:00:23Z, head `f318ef03bd8e10b2fe6f694b71fa46bc86ee0d3b`.
- #27179 (Sameerlite — "merge mian") MERGED 08:00:54Z, head **same** `f318ef03bd8e10b2fe6f694b71fa46bc86ee0d3b`. **Same-SHA merge-pair at 31s gap** — sub-mode-2-adjacent variant.

**Carry-forward OPEN no-change**: #27177 (Sameerlite Bedrock batches feat — head `20fcd187...` unchanged since 08:08:55Z; **Sameerlite has #27177+#27185 simultaneously open**), #27176 (ben-wangz Helm — head unchanged after Add.349's compound iteration), #27167, #27155+#27161, #27157, #27154, #27148+#27150, #27145+#27146, #27147, #27106+#27110, #27001, #27162, #27152.

**Sub-section read**: litellm exhibits highest carrier-event-count this tick (1 fresh-open + 1 silent-force-push + retro-noted same-SHA merge-pair). **Sameerlite's burst-vacuum-burst pattern confirmed** at multi-tick horizon — vacuum lasted 2h17m before #27185 onset. **imviky-ctrl mode-switch** from sub-mode-2 (close-resubmit) at Add.349 to sub-mode-4 (silent force-push) at Add.350 is the second W17 instance of this specific mode-switch (mateo-berri was the first). **Same-SHA merge-pair** is a structural sub-mode-2-adjacent variant deserving distinct tracking.

---

## google-gemini/gemini-cli (carrier 4) — third consecutive tick of carrier-quiescence; gemini-cli-robot pair survives 9 ticks

**Fresh-opens this tick (0 within window)**.

**Update-only no-head-change**:
- #26490 (rushikeshsakharleofficial — auto-discover .mcp.json; head `2d8284164964dceedb042764c1187e4e1d378afc` unchanged from Add.347 force-push; **3-tick post-force-push quiescence**).
- #26489 (rushikeshsakharleofficial — perf calculateTokenBreakdown; head `acfe282e48e9ab8f36d3374bb021a21c148411bb` unchanged).
- #26482 + #26483 (gemini-cli-robot sibling-pair, heads unchanged through **9th consecutive tick**).
- #26487 (dimssu --resume), #26484 (SAY-5 IDE MCP), #26480 (aishaneeshah surgical edits).

**Sub-section read**: gemini-cli extends carrier-quiescence to **3rd consecutive tick** — gemini-cli now matches codex's 3-tick mark from Add.349 (codex extended further to 4 this tick). rushikeshsakharleofficial DOUBLET stable at 3-tick post-force-push quiescence. gemini-cli-robot sibling-pair extends to 9-tick survival (P-349.G REALIZED at higher-prior than the prior tick).

---

## QwenLM/qwen-code (carrier 5) — wenshao 7-tick declared-sequence stall (new W17 record); doudouOUC trivial residue updates

**Fresh-opens this tick (0 within window)**.

**Update-only no-head-change**:
- #3844 (wenshao — WebSearch tool; head `7f06fee3ed2aa9e0bd0ceab64a9d8a21e4d894f2` unchanged from Add.348 force-push).
- #3842 (wenshao — declared "PR-1 of 3"; head `8e8e18ca7f44441fb20d74369f06c8a481212101` unchanged; updated 10:20:21Z trivially; **7-tick declared-sequence stall** — sets new W17 record).
- #3833 + #3832 (doudouOUC sdk-python residue; trivial-touch updates 10:00Z and 10:04Z, no head change).
- #3847 (doudouOUC telemetry; head `1f73e93af4c47cd1469274823ef064a179c5eb12` unchanged from Add.349 fresh-open — first-author post-fresh-open quiescence).
- #3836, #3840, #3835, #3828, #3827, #3826.

**Sub-section read**: qwen-code carrier-quiescence at fresh-open level (0 fresh-opens), but trivial-touch activity persists on 4 PRs — distinct from codex (zero touches) and gemini-cli (sub-bot updates). **wenshao declared-sequence "PR-1 of 3" 7-tick stall** sets new W17 record beyond Add.349's 6-tick tie. doudouOUC enters first-author post-fresh-open quiescence on #3847 (P-349.J NOT-REALIZED at tick-1).

---

## block/goose (carrier 6) — carrier-quiescence (joins quiescent set restoring cardinality to 3); morgmart hard-stop tick-5 record

**Fresh-opens this tick (0 within window)**.

**Merges this tick (0 within window)**.

**Carry-forward OPEN, all heads unchanged**: #9021 (idosavion web_fetch — head `2985dfe072028227178837346dfe8116a7e5f957` unchanged since 08:57:51Z, ~1h26m post-fresh-open quiescence; **P-349.H tick-1 NOT-REALIZED**); morgmart UNDECET remnant net-OPEN holds at N=10; morgmart anchor #9004; monroewilliams #9015; enilsen16 #9002 + #8994 + #8998; alexhancock #8999; tellaho #8995; natelastname #8925; jamadeo #8911; github-actions[bot] #9006.

**Sub-section read**: goose joins {codex, crush} quiescent set this tick, restoring **compound-quiescence cardinality to 3** (P-349.L REALIZED-AND-EXCEEDS). morgmart's last touch was #9014 update at 05:41:31Z (now ~4h42m before snapshot 10:23:27Z), extending hard-stop regime-4 to **tick-5**, **exceeding the W17 typical ceiling** and setting new per-author-hard-stop record. P-349.B REALIZED at predicted-low prior 0.30 — the hard-stop persistence beyond W17 typical ceiling is the structurally significant finding.

---

## charmbracelet/crush (carrier 7) — full carrier-quiescence (3rd consecutive tick)

**Fresh-opens this tick (0 within window)**.

**Merges this tick (0 within window)**.

**Carry-forward OPEN no-change**: #2801 (ardevd typo README, head `de9d901ef6f9440effa98d8feaff6a3cc51bdcb4` unchanged from Add.347), #2800 (BrunoKrugel MCP allow-list), #2791 + #2788 (meowgorithm), #2790 (ilgax), #2786 (mkaaad), #2785, #2783, #2691.

**Sub-section read**: crush extends full carrier-quiescence to **3rd consecutive tick** (Add.348 50m + Add.349 60m + Add.350 28m = ~138m sustained zero-event in crush). Trivial-scope quiescence-exit lack-of-momentum (Add.347 ardevd) confirmed at 3-tick horizon. crush remains the longest-duration W17 quiescent carrier (codex matches at 4-tick count but crush has 3-tick + larger temporal span depending on which baseline).

---

## Cross-repo predictions for next tick (Add.351)

- **P-350.A**: tick-width returns to 50m (basin-metronome regime-1 reasserts after two-tick oscillation; mean-reversion stronger after symmetric over/under). Prior 0.35 (raised from Add.349's 0.30 due to symmetric-deviation midpoint = 44m close to 50m).
- **P-350.B**: morgmart goose hard-stop persists through 6th consecutive tick. Prior 0.20 (lowered after exceeding W17 typical ceiling — recovery-onset prior dominates).
- **P-350.C**: codex carrier-quiescence breaks within next tick. Prior 0.55 (raised from 0.45 — 4-tick mark sets recovery-pressure ceiling; further extension would require regime change).
- **P-350.D**: ben-wangz litellm #27176 third silent force-push within next 2 ticks. Prior 0.40 (downward-revised after D-tick1 NOT-REALIZED).
- **P-350.E**: wenshao qwen-code declared-sequence "PR-1 of 3" 8-tick stall extension. Prior 0.50 (W17-record territory; momentum strong).
- **P-350.F**: aibrahim-oai codex #20971 MERGES within next 2 ticks. Prior 0.30 (downward-revised after F-tick1 NOT-REALIZED).
- **P-350.G**: gemini-cli-robot #26482/#26483 sibling-pair survives 10th consecutive tick. Prior 0.75 (raised from 0.70).
- **P-350.H**: idosavion goose #9021 reaches MERGED state within next 2 ticks. Prior 0.30 (downward-revised after H-tick1 NOT-REALIZED + 1.5h+ post-open quiescence).
- **P-350.I**: Hona opencode #25846 receives a second silent-force-push within next 2 ticks (compound-iteration analogue to ben-wangz #27176 11m52s W17-min). Prior 0.45.
- **P-350.J**: imviky-ctrl litellm #27182 receives a second silent-force-push within next 2 ticks (sub-mode-2-then-sub-mode-4 mode-switch authors iterate further). Prior 0.40.
- **P-350.K**: Brendonovich opencode #25850 MERGES within next 2 ticks (Brendonovich W17 sub-1h-merge precedent: #25822 ~44m, #25838 38m29s, #25825 14s). Prior 0.70 (highest single-PR merge prior of the prediction set).
- **P-350.L**: compound-quiescence cardinality stays ≥2 within next tick. Prior 0.70 (stronger than 0.65 due to 3-tick + 4-tick momentum on crush + codex).
- **P-350.M**: Sameerlite litellm #27185 receives a silent force-push within next 2 ticks (Sameerlite has 2 PRs simultaneously open, #27177 + #27185, neither force-pushed yet — compound-anchor sub-mode-4 portability test). Prior 0.30.
- **P-350.N**: a third opencode desktop-package PR opens this tick from a third distinct author (parallel-triplet generalizes to N=3 authors on shared sub-package). Prior 0.20.
