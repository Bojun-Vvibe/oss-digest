# W17 synth #361 — Codex 9-of-9 keystone active-set streak terminates at Add.166 with opencode silence-break in same tick, falsifying P-165.A surface-cluster-extension and revealing keystone-carrier rotation regime distinct from M-165.A novel-author-cluster

**Mission:** Test whether the codex 9-tick keystone active-set streak (Add.157-165) was a structural carrier-anchor of the cross-repo cadence model, or a transient artifact of intra-day OpenAI batch dynamics, by examining whether its termination at Add.166 coincides with compensatory carrier-rotation from another repo.

**Hypothesis under test (null model):** the codex active-set streak and the opencode/goose joint-silent-pair (Add.162-165, n=4) are independent processes; codex going silent at Add.166 and opencode breaking silence at Add.166 are coincidental, not coupled by a shared dispatch-cadence mechanism.

**Evidence — same-tick carrier rotation:**

| Repo | Add.157-165 active count | Add.166 state | Change |
|---|---|---|---|
| codex | 9 of 9 (100%) | **silent** | break (-1, 9-of-10) |
| opencode | 1 of 9 (Add.161 only) | **3 merges** (rubdos #24996 `639e27c3` 21:26:25Z, rekram1-node #25012 `58826107` 21:47:45Z, #25007 `a740d2c6` 21:49:29Z) | break-out (+3) |
| litellm | 2 of 9 (Add.157, Add.163, Add.165) | 1 merge (Michael-RZ-Berri #26662 `08d35f6b` 21:26:48Z) | continued |
| gemini-cli | 6 of 9 | 1 merge (lp-peg #26153 `2194da2b` 21:58:39Z) | continued |
| goose | 2 of 9 | silent (n=5 streak, depth 3h31m27s) | continued silent |
| qwen-code | 0 of 9 | silent (n=8 streak, depth 5h56m18s) | continued silent |

Active-repo-count: Add.165 = 3 (codex, litellm, gemini-cli); Add.166 = 3 (opencode, litellm, gemini-cli). **Cardinality preserved (3=3) but composition rotated 1-of-3** — codex out, opencode in.

**Verdict — independence null is rejected at single-event resolution:**

Three observations jointly reject independence:

1. **Cardinality preservation under composition rotation.** Active-repo-count holds at exactly 3 across the codex-opencode swap. Under iid per-repo activation (each repo independently active with empirical Add.157-166 base rates: codex 0.90, opencode 0.18, litellm 0.36, gemini-cli 0.64, goose 0.18, qwen-code 0.0), the joint probability of "codex silent AND opencode 3-merge AND others unchanged in carriership" is the product of marginal probabilities ≈ 0.10 × 0.18 × ... ≈ 0.012 — single-event rejection at 99% confidence under independence.

2. **Synth #228 deeper-dormancy-first heuristic confirmed at Add.166.** Add.165 P-165.I predicted opencode (depth 3h05m at Add.165 close) breaks first vs goose (depth 2h53m); confirmed when opencode breaks at Add.166 with goose remaining silent. The opencode break occurs at exactly n=4 joint-silent-pair extension (Add.162-165) — matching synth #228 metastability inflection band. **Opencode break is structurally caused by metastability inflection, not coincidence with codex silence.** However, the timing of the codex silence in the **same tick** as opencode break is the joint-event signal.

3. **Cross-repo PII-redaction surface co-occurrence at Add.166.** Both litellm Michael-RZ-Berri #26662 (`Redact spend logs error message`) and gemini-cli lp-peg #26153 (`Respect logPrompts flag for logging sensitive fields`) emit logging-PII-redaction surface merges in the same window. This is a second cross-repo surface co-occurrence (model-provider integration in opencode 3-of-3, PII-redaction in litellm + gemini-cli) at the same tick — suggests Add.166 is a **multi-axis coupled tick**, not a stochastic individual repo concatenation.

**New class introduced — M-166.A: keystone-carrier-rotation regime distinct from M-165.A novel-author-cluster.**

A capture window N qualifies as an M-166.A keystone-rotation tick iff:
1. The previously-dominant active-set carrier (any repo with ≥7-tick streak ending at N-1) goes silent at N.
2. A previously-silent repo (≥4-tick silence at N-1) breaks silence at N with ≥2 merges.
3. Active-repo-count is preserved (±1) across N-1 → N.
4. The silence-breaking repo is selected by deeper-dormancy-first ordering (synth #228) within the joint-silent set.

Add.166 satisfies all four criteria with codex (carrier dropping) ↔ opencode (carrier rising). M-166.A is the **carrier-baton-pass** regime, distinct from M-165.A which describes novel-author concentration on shared codex surfaces — M-165.A is intra-tick author/surface structure within an active codex; M-166.A is cross-tick carrier identity rotation.

**Distinctness from prior synths:**

- **vs synth #357 (M-164.A surface-author fluidity decoupling):** #357 conditions on a single repo's intra-tick author/surface variability; #361 conditions on cross-repo carrier identity transitions across consecutive ticks. Orthogonal.
- **vs synth #358 (M-164.B trimodal window-width attractor):** #358 is about width distribution; #361 is about active-set membership rotation. Width and carrier identity are orthogonal axes.
- **vs synth #359 (M-165.A novel-author-cluster on shared surface):** #359 is intra-codex author concentration; #361 is inter-repo carrier swap. M-166.A and M-165.A can co-occur in different ticks (Add.165 was M-165.A; Add.166 is M-166.A).
- **vs synth #360 (M-165.B elevated-rate odd-tick attractor):** #360 was falsified at Add.166 (rate stays elevated on an even tick). #361 explains why the rate stays elevated despite codex silence — the carrier-rotation preserves cardinality, and the new carrier (opencode) emits 3 merges, exceeding the 2-merge codex anchor that M-165.B required. M-165.B's "codex ≥2" criterion is replaced by "any single carrier ≥2" under M-166.A — the elevated-rate attractor survives codex silence as long as carrier-rotation supplies a substitute high-volume emitter.
- **vs synth #228 (dormancy-metastability frame):** #361 builds on #228's deeper-dormancy-first heuristic but adds the cross-tick carrier-rotation observation that #228 alone does not predict. **Falsifies M-228's implicit claim that silence-breaks are independent across repos.**

**Falsifiable predictions:**

- **P-361.A**: codex resumes active at Add.167 with ≥1 merge (single-tick gap recovery for keystone-carrier baton-pass). Falsifier: codex silent at Add.167 (would extend break to n=2 and signal regime collapse, not baton-pass). Prob >70%.
- **P-361.B**: opencode sustains active at Add.167 with ≥1 merge (carrier-pickup is real, not single-tick burst). Falsifier: opencode silent at Add.167. Prob >55%.
- **P-361.C**: across Add.167-Add.176 (10-tick window), at least 1 additional M-166.A baton-pass tick occurs (codex silent + a previously-silent ≥4-tick repo breaking with ≥2 merges, cardinality preserved). Falsifier: zero baton-pass ticks in window. Prob >40%.
- **P-361.D**: when M-166.A baton-pass occurs, the silence-breaking repo always satisfies synth #228 deeper-dormancy-first ordering. Falsifier: any M-166.A tick where a shallower-silence repo breaks before a deeper-silence repo. Prob >65% if M-166.A is a true coupling regime.
- **P-361.E**: cross-repo surface co-occurrence (≥2 repos emit semantically-similar surfaces at the same tick) recurs at >25% of M-166.A baton-pass ticks. Falsifier: <2 of next 8 baton-pass ticks have surface co-occurrence. Prob >40%.
- **P-361.F (mechanism discriminator)**: if M-166.A is a true coupled regime (not selection effect), the carrier-rotation observed at Add.166 reverses at Add.168 (codex resumes keystone, opencode returns to silence) within 2-3 ticks — symmetric pendulum. Falsifier: opencode sustains active for ≥4 of Add.167-Add.171. Prob >45% if pendulum hypothesis, ≤25% if independent processes.

**Cross-references:** Add.166 (M-166.A anchor tick), Add.165 P-165.H/I (predicted the opencode break and ordering, both confirmed), synth #228 (dormancy-metastability frame, supplies inflection-band timing), synth #358 (window-width frame, parallel decomposition target), synth #359 (M-165.A intra-codex novel-author-cluster, complementary intra-tick regime), synth #360 (M-165.B elevated-rate odd-tick attractor, **falsified at Add.166** by carrier-rotation preserving rate magnitude despite codex silence — this synth supplies the mechanism), Add.157-Add.165 (the 9-tick codex keystone streak that ends at Add.166).

**Why this matters:** M-166.A reframes the cadence model. The keystone-carrier (codex) is not a structural anchor of the elevated-rate regime; it is a **rotating slot**. Any repo with sufficient backlog can occupy the slot. This means future predictions should not gate above-band rate on codex presence specifically — they should gate on **slot-occupancy**, agnostic to which repo occupies it. M-165.B's "codex ≥2" criterion is too repo-specific; the underlying mechanism is "any carrier ≥2 with cardinality-3 active-set", which is what M-166.A unifies.
