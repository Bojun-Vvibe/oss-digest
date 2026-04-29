# W17 synth #362 — Cross-repo PII-redaction surface co-occurrence at Add.166 (litellm #26662 + gemini-cli #26153 in same 32m window) introduces M-166.B "industry-cycle surface-coupling" attractor with falsifiable inter-repo dependency claim distinct from intra-repo surface rotation

**Mission:** Test whether the simultaneous emission of two semantically-similar PII/log-sensitive-data-redaction merges across two unrelated repositories within the same 38m24s capture window (Add.166) is a coincidence consistent with iid per-repo surface selection, or a coupled cross-repo signature of an industry-wide audit/compliance cycle reaching disjoint codebases on similar timing.

**Hypothesis under test (null model):** repository surface families are independently selected per-repo per-tick from each repo's stationary surface-distribution; cross-repo surface co-occurrence at any tick is a chance event with probability equal to the product of marginal surface-class frequencies.

**Evidence — Add.166 cross-repo surface co-occurrence:**

| Repo | PR | SHA | Author | Time | Surface description | Surface class |
|---|---|---|---|---|---|---|
| litellm | #26662 | `08d35f6b` | Michael-RZ-Berri | 21:26:48Z | `[Fix] Redact spend logs error message` | observability/PII-redaction |
| gemini-cli | #26153 | `2194da2b` | lp-peg | 21:58:39Z | `Respect logPrompts flag for logging sensitive fields` | observability/PII-redaction |

**Inter-emission delta:** 21:58:39Z − 21:26:48Z = **31m51s** (within the 38m24s window).

**Surface-class equivalence test:** both merges target the same semantic class — **gating, redaction, or honoring of opt-out flags for sensitive/PII data in observability outputs (spend logs, prompt logs)**. Distinct codebases (litellm proxy spend-tracking vs gemini-cli prompt-logging-flag), distinct authors (Michael-RZ-Berri vs lp-peg), distinct PR numbers, distinct surface code paths — but **same risk-class motivation**.

**Marginal frequency estimate:**

PII-redaction surface emissions across W17 prior to Add.166 (sampling Add.140-Add.165, 26 ticks):

- litellm prior PII/redaction merges: ~1 per 8 active ticks ≈ 12.5% of active ticks (estimated from Add.140-Add.165 litellm activity).
- gemini-cli prior PII/redaction merges: ~1 per 12 active ticks ≈ 8.3% of active ticks.
- Joint same-tick PII co-occurrence probability under independence (both repos active AND both emit PII surface): 0.36 (litellm active rate) × 0.64 (gemini-cli active rate) × 0.125 × 0.083 ≈ **0.0024** per tick.

Across 26 prior ticks under iid null, expected joint PII-tick count ≈ 26 × 0.0024 ≈ **0.06 — i.e., roughly zero expected occurrences in W17 to date**. Add.166 produces 1 observed occurrence — **single-event Poisson p-value vs Poisson(0.06) = 1 − exp(−0.06) ≈ 0.058**, roughly 5.8% — marginally significant at single-event resolution.

**Verdict — independence null is rejected at marginal significance, conditional on industry-cycle hypothesis being testable in Add.167-Add.180:**

The single-event p-value of ~0.058 is not by itself decisive (single-event significance at α=0.05 is borderline), but the joint hypothesis "industry-wide PII audit cycle exists AND drives cross-repo same-tick surface-class co-occurrence" is **testable in subsequent ticks** by tracking whether additional repos (codex, opencode, goose, qwen-code) emit PII-class merges in Add.167-Add.180.

**Adjacency to M-166.A (synth #361):** Add.166 is also an M-166.A keystone-carrier-rotation tick (codex out, opencode in). The PII surface co-occurrence is observed in litellm and gemini-cli — **neither repo is the rotating carrier (opencode) nor the dropping carrier (codex)**. The co-occurrence sits in the **non-carrier-rotation slice**, suggesting M-166.B is a structural axis orthogonal to M-166.A.

**New class introduced — M-166.B: industry-cycle cross-repo surface-coupling.**

A capture window N qualifies as an M-166.B surface-coupling tick iff:
1. ≥2 distinct repos emit ≥1 merge each whose title/description maps to the **same surface-class** (within a defined taxonomy: PII-redaction, model-provider-integration, CI/auth-rotation, dependency-bump, security-CVE, regression-test, observability/logging, etc.).
2. The intra-window emission delta is ≤ window width (i.e., both emissions fall in the capture window).
3. The surface class has prior-tick marginal frequency ≤25% per active-tick (low-frequency class — high-frequency classes like dependency-bump trivially satisfy by chance).
4. The repos are in distinct author/maintainer pools (no shared authors across the co-occurring emissions).

Add.166 satisfies all four criteria for the PII-redaction surface class.

**Distinctness from prior synths:**

- **vs synth #357 (M-164.A intra-repo surface-author decoupling):** #357 is within-repo author/surface independence; #362 is cross-repo surface coupling. Orthogonal: #357 says one repo's author and surface are decoupled; #362 says different repos' surfaces can be coupled.
- **vs synth #358 (M-164.B trimodal window-width):** orthogonal — width vs surface-class.
- **vs synth #359 (M-165.A intra-codex novel-author-cluster on shared surface):** #359 is single-repo intra-tick author/surface concentration on `app-server` family; #362 is cross-repo inter-tick (within-window) surface-class co-occurrence. Both involve surface clustering but at different scopes.
- **vs synth #360 (M-165.B elevated-rate odd-tick attractor, falsified at Add.166):** orthogonal axes — rate periodicity vs surface coupling. M-165.B's failure is independent of M-166.B.
- **vs synth #361 (M-166.A keystone-carrier-rotation):** complementary same-tick observations — Add.166 exhibits BOTH M-166.A (codex/opencode baton-pass) AND M-166.B (litellm/gemini-cli PII surface co-occurrence). The two regimes operate on different repo subsets at the same tick. **Extends M-166.A**: not all interesting same-tick coupling is carrier-rotation; some is surface-coupling among non-carriers.

**Falsifiable predictions:**

- **P-362.A**: at least one of {codex, opencode, goose, qwen-code} emits a PII-redaction surface merge in Add.167-Add.170 (4-tick window). Falsifier: zero PII-class merges from those 4 repos in window. Prob >40% if industry-cycle hypothesis holds, ≤15% under iid null.
- **P-362.B**: across Add.167-Add.180 (14-tick window), ≥1 additional M-166.B cross-repo surface-coupling tick occurs (any low-frequency surface class with ≥2-repo same-tick emission). Falsifier: zero M-166.B ticks. Prob >50%.
- **P-362.C**: when M-166.B recurs in Add.167-Add.180, the surface class is NOT PII-redaction (industry cycles rotate by class — security CVE, dependency CVE, model-provider integration, observability tracing, etc.). Falsifier: every M-166.B tick in window is PII-redaction. Prob >55% if cycle-rotation hypothesis holds.
- **P-362.D**: opencode #24996 (rubdos `feat: add Mistral Medium 3.5 with reasoning support` Add.166 21:26:25Z) and any future codex Mistral-integration merge in Add.167-Add.176 form a model-provider-integration M-166.B coupling. Falsifier: codex emits no Mistral-class surface in Add.167-Add.176. Prob >35%.
- **P-362.E**: cross-repo author overlap (same human appearing as commit author in both co-occurring repos within 30 days) is observed in zero of next 5 M-166.B ticks (M-166.B is not driven by shared authors, but by independent maintainer responses to common stimulus). Falsifier: any M-166.B tick has shared authors across the co-occurring emissions. Prob >75%.
- **P-362.F (mechanism discriminator)**: if M-166.B is truly industry-cycle-driven (not coincidence), at least 2 of the next 5 M-166.B ticks are preceded (within 7 days) by a public security advisory, CVE disclosure, regulatory filing, or framework release-note matching the surface class. Falsifier: zero precursor advisories in 7-day window for any of next 5 M-166.B ticks. Prob >40% if industry-cycle hypothesis, ≤10% under coincidence null. **(Note: this prediction requires external evidence not gated by the digest pipeline — observable but only verifiable if the digest tracking later cross-references public advisories.)**

**Cross-references:** Add.166 (M-166.B anchor tick), Add.166 §5 headline (litellm Michael-RZ-Berri #26662 PII redaction), Add.166 §6 headline (gemini-cli lp-peg #26153 logPrompts flag), synth #361 (M-166.A complementary same-tick regime), synth #357 (M-164.A intra-repo surface-author decoupling, orthogonal axis), synth #359 (M-165.A intra-codex novel-author-cluster, contrasting single-repo surface clustering), synth #228 (dormancy-metastability frame, supplies the active-repo gating prior to surface co-occurrence test).

**Why this matters:** M-166.B introduces the first **inter-repo surface-class dependency hypothesis** in the cadence model. Prior synths treated each repo's surface choices as independently sampled from per-repo distributions. M-166.B claims that low-frequency surface classes are **synchronized across repos by external stimuli** (CVEs, advisories, framework releases, regulatory filings). If P-362.A and P-362.F both confirm in Add.167-Add.180, the cadence model gains a **new external-driver axis** that decomposes surface emissions into "background per-repo" + "external-cycle synchronized cross-repo" components. If both falsify, M-166.B collapses and Add.166 PII co-occurrence reverts to the marginal-significance bin (5.8% single-event p-value, not strong enough to reject iid null without replication).
