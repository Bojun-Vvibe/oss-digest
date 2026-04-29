# W17 synth #358 — Add.163-164 back-to-back transit-zone window-width pair (47m30s, 46m17s) falsifies synth #335 P-335.A bimodal-attractor at 85.0% conformance; introduces M-164.B trimodal-attractor regime

**Mission:** Evaluate synth #335 P-335.A (window-width medium-attractor bimodal-conformance sustains ≥90% across rolling Add.146-N) against new evidence: Add.163 (47m30s) and Add.164 (46m17s) form the **first back-to-back transit-zone pair** in the Add.146-164 rolling window.

**Hypothesis under test (carry from synth #335):** P-335.A — window widths cluster bimodally at 40m mode and 55m+ mode; transit-zone instances (40m–55m) are isolated under-sampled outliers; rolling bimodal-conformance sustains ≥90% indefinitely.

**Evidence at Add.164:** Width sequence Add.145-164 = `29m07s / 44m12s / 40m56s / 59m24s / 40m10s / 40m27s / 40m13s / 57m33s / 58m23s / 41m38s / 38m17s / 57m12s / 38m34s / 42m06s / 54m40s / 23m42s / 39m59s / 39m34s / 47m30s / 46m17s`. Bimodal tally Add.146-164: **10 mode-floor (40m) + 6 mode-ceiling (55m+) + 1 narrow-class outlier (Add.160 23m42s) + 2 transit-zone outliers (Add.163 47m30s, Add.164 46m17s) = 17-of-20 strict bimodal conformance = 85.0%**. Drops below the 90% synth #335 threshold by 5pp.

**Verdict:** **P-335.A FALSIFIED at Add.164.** The bimodal-attractor frame can no longer accommodate the observed width distribution. The transit-zone (40m–55m) is no longer "under-sampled isolated outliers" — Add.163-164 form a back-to-back pair, marking transit-zone as a **persisting third attractor band**.

**New class introduced — M-164.B: trimodal window-width attractor regime.** Window widths cluster around three attractor bands:
- **40m mode** (38–42m, 10-of-20 = 50% of Add.146-164)
- **transit zone** (42–55m, now 3-of-20 = 15% — Add.146 44m12s, Add.163 47m30s, Add.164 46m17s)
- **55m+ mode** (55–60m, 6-of-20 = 30%)
- **sub-30m narrow-class outlier** (Add.160 23m42s = 5%, possibly its own emergent fourth band on insufficient evidence)

The transit-zone band's recurrence interval Add.146 → Add.163 → Add.164 = **17-tick gap then 1-tick gap** — bimodal recurrence-interval (tight or wide), as predicted by Add.163's P-163.M (CONFIRMED at Add.164 on tight branch).

**Cross-cutting observation — temporal compression effect:** the back-to-back Add.163-164 transit-zone pair coincides with **codex 8-of-8 keystone extension** and **gemini-cli reaching 5-of-8 active-rate** (P-163.F falsified at Add.164). The medium-width window (~46-47m) appears **correlated with high active-set cardinality persistence** — Add.163 active-set = 3, Add.164 active-set = 2; both at-or-near cardinality medians of W17. Hypothesize: medium-width windows arise as a **dispatch-cadence selection effect** when both sustained-active repos (codex, gemini-cli) emit at sub-window-end timing — capture is triggered earlier than the 55m+ mode but later than the 40m mode.

**Specific PR-level evidence supporting trimodal regime:**
- Add.163 at 47m30s captured: codex iceweasel-oai #20089 `9d1e5df4`, viyatb-oai #19184 `07c8b8c7`, rhan-oai #17088 `0690ab08`; litellm Sameerlite #25500 `4cecfec9`, #26685 `295a36aa`; gemini-cli akh64bit #26147 `25f422d0`. **6 merges across 3 repos**.
- Add.164 at 46m17s captured: codex mzeng-openai #20091 `8ce48f99`; gemini-cli adamfweidman #26218 `88626f37`, Adib234 #26191 `99235fc5`, adamfweidman #26163 `3aedbbc0`. **4 merges across 2 repos**.

Both transit-zone ticks have **active-set cardinality ≥2 with codex+gemini-cli sustained presence** — supports the dispatch-cadence selection hypothesis.

**Predictions:**
- **P-358.A**: rolling Add.146-167 strict-bimodal conformance falls to ≤80% by Add.167 (continuing M-164.B regime emergence). Falsifier: Add.165-167 all return to mode (≥40m mode floor or 55m+ mode), restoring conformance ≥85%.
- **P-358.B**: transit-zone tick (40m–55m width) reappears within Add.165-Add.170 (5-tick window) at >40% probability under M-164.B regime — elevated from synth #335 baseline (~17%). Falsifier: zero transit-zone ticks in Add.165-170.
- **P-358.C**: when next transit-zone tick occurs, active-set cardinality ≥2 with codex AND gemini-cli BOTH active (dispatch-cadence selection effect). Falsifier: next transit-zone tick has codex OR gemini-cli silent, OR active-set cardinality 1.
- **P-358.D**: Add.146-164 trimodal-conformance (40m mode + 55m+ mode + 42-55m transit zone) is **19-of-20 = 95.0%** (only Add.160 23m42s narrow-class falls outside); this rate sustains ≥90% across Add.146-Add.180 rolling window. Falsifier: ≥3 narrow-class (≤30m) or wide-class (≥60m) outliers across Add.165-180.

**Cross-references:** synth #335 (P-335.A origin, falsified here), Add.146 (first transit-zone instance), Add.163 (transit-zone reappearance after 17-tick gap, P-163.M tight-branch confirmation), Add.164 (back-to-back pair, this synth's pivot evidence), Add.160 (narrow-class outlier 23m42s), synth #350 (active-set cardinality dynamics), synth #354 (gemini-cli activity context).
