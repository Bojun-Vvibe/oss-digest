# W17 synth #357 — adamfweidman returning-author n=2 doublet at gemini-cli falsifies M-162.C author-pool-fluidity attractor at 4-of-5 (80%); decouples surface-family rotation from author-pool fluidity

**Mission:** Add.164 evaluation of synth #354 M-162.C (gemini-cli author-pool-fluidity attractor at 4-of-4 = 100% novel-author rate) against new evidence: adamfweidman emits n=2 same-author doublet (#26218 `88626f37` 20:41:03Z `fix(cli): handle InvalidStream event gracefully`; #26163 `3aedbbc0` 20:37:09Z `fix(core): distinguish fallback chains and fix maxAttempts for auto vs explicit model selection`) at inter-merge delta 3m54s, after 5-tick absence (last appeared Add.159 silence-break tick).

**Hypothesis under test (carry from synth #354):** M-162.C — at gemini-cli, every active tick emits at least one author NOT seen in any prior gemini-cli active tick within the rolling W17 window; novel-author rate sustains at 100% indefinitely.

**Evidence at Add.164:** Gemini-cli emits 3 in-window merges from 2 distinct authors {adamfweidman, Adib234}. **Both are returning authors** (adamfweidman last at Add.159 = 5-tick absence; Adib234 last at Add.161 = 3-tick absence). **Zero novel authors at Add.164**. The Add.159-164 author set remains capped at 4 distinct authors {adamfweidman, Adib234, gundermanc, akh64bit}.

**Verdict:** **M-162.C FALSIFIED at Add.164** — novel-author rate regresses from 4-of-4 (100%) to **4-of-5 (80%)**. The author-pool-fluidity attractor is bounded; pool size in this regime caps at 4 distinct emitters before recurrence emerges.

**Co-observation — surface-family rotation continues despite author recurrence:** Add.164 surfaces are stream-error-handling (#26218), network-timeout-tuning (#26191 `99235fc5`), and model-routing/fallback-chain (#26163). All 3 are NEW surface families not in Add.161-163's {regression-test, bot-mention-feature, eval-test-docs}. **Cross-active-tick surface-family count grows from 3 to 6 across Add.161-164 = 4 active ticks; novel-surface-family rate is 4-of-4 = 100%** even as novel-author rate breaks at 4-of-5.

**New class introduced — M-164.A: surface-fluidity / author-fluidity decoupling.** At gemini-cli, the surface-family rotation regime is **independent of and outpaces** the author-pool-fluidity regime. Surface-families continue rotating monotonically (no repeats across 4 consecutive active ticks) while authors begin recurring at the 4-distinct-emitter threshold.

**Distinguishing this from synth #232-class returning-author doublets:** synth #232 returning-author doublets at codex were on **same-surface co-touch** (shared spec anchor pattern). adamfweidman's Add.164 doublet is on **disjoint surfaces** (CLI stream-error vs core model-routing). This is **synth #354 / synth #232 hybrid**: returning-author shape from #232, but disjoint-surface invariant from synth #354's surface-rotation regime — a **two-attractor superposition** at gemini-cli.

**Predictions:**
- **P-357.A** (carry of P-164.C): gemini-cli's next 3 active ticks Add.165-167 emit ≥1 returning author per tick from {adamfweidman, Adib234, gundermanc, akh64bit}; novel-author rate ≤50% across the 3-tick window. Falsifier: ≥3 of next 3 active ticks emit only novel authors (M-162.C re-asserts).
- **P-357.B**: surface-family rotation continues — Add.165-167 active ticks emit ≥3 NEW surface families not in current 6-family Add.161-164 union. Falsifier: any of Add.165-167 active ticks repeats a surface family from {regression-test, bot-mention-feature, eval-test-docs, stream-error-handling, network-timeout-tuning, model-routing/fallback-chain}.
- **P-357.C**: M-164.A decoupling holds across W17 — surface-fluidity rate exceeds author-fluidity rate by ≥20pp across Add.161-Add.180 rolling window at gemini-cli. Falsifier: surface-fluidity drops to within 10pp of author-fluidity at any 5-tick rolling window.
- **P-357.D** (carry of P-164.D): adamfweidman Add.164 doublet closes at strict n=2 (no n=3 extension at Add.165 within 30m of #26218 `88626f37` close). Falsifier: adamfweidman emits 3rd merge at Add.165 within 30m window (20:41:03Z → 21:11:03Z).

**Cross-references:** synth #354 (M-162.C origin), synth #232 (returning-author doublet shape), synth #228 (dormancy-metastability frame), synth #224 (strict-n=2 cardinality invariant), Add.159 (adamfweidman silence-break debut), Add.164 (this synth's evidence base).
