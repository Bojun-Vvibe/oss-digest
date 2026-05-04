# W17-synthesis-636 — bottom-half-volatile co-revision 3-tick streak on explicit-numbered-quartet AND cross-pattern bridge to implicit-stack SEXTET (B-A-M-N qwen-code six-PR session) as competing-vs-coexisting organizational principles

**Trigger**: Add.323 P-322.D double-realization @ 2026-05-04T13:20:30Z capture — aibrahim-oai #20978 (`cceb6cc824d6063b03778444d48132d9f81135d9`) AND #20974 (`f3828bd23c0232c0224fff3a415dd7698f7947dd`) co-revised THIRD consecutive tick (Add.321→322→323), while top-half pair (#20969 anchor `b59bce8863401725d24ec054b2fb613dff6c8abe` + #20971 mid `fdfd9c4f3d71251616d4d91869e580b4b0fa2934`) held head-stable across all 3 transitions. PLUS Add.323 cited B-A-M-N #3797/#3798/#3799 fresh-citations bringing carrier-scope session to SEXTET cardinality.

## Part A: bottom-half-volatile co-revision 3-tick streak (explicit-stack)

### Per-tick head SHA evolution of aibrahim-oai numbered-quartet

| leg | role | Add.319 head | Add.320 head | Add.321 head | Add.322 head | Add.323 head | revisions |
|-----|------|--------------|--------------|--------------|--------------|--------------|-----------|
| #20969 | 1- (anchor) | b59bce8863401725d24ec054b2fb613dff6c8abe | (same) | (same) | (same) | (same) | **0 / 5 ticks** |
| #20971 | 2- (mid) | (initial) | (revised once early) | fdfd9c4f3d71251616d4d91869e580b4b0fa2934 | (same) | (same) | 1 early, **0 / 3 recent ticks** |
| #20974 | 3- (sub-terminal) | (initial) | (initial) | fe8c6887fcd11f830ba42dc2499c363ae54fca92 | 37e2e6f3fc0ed458aba13096c8a7f85c8054b650 | f3828bd23c0232c0224fff3a415dd7698f7947dd | **2 / 3 recent ticks (consecutive)** |
| #20978 | 4- (terminal) | (initial) | (initial) | d718127935b791981777f0f92e536424314669c6 | 3e34c38fa256b217634bc62ee274a4187b2848c5 | cceb6cc824d6063b03778444d48132d9f81135d9 | **2 / 3 recent ticks (consecutive)** |

**3-tick co-revision streak**: bottom-half pair (#20974+#20978) revised same-tick across Add.321→322 AND Add.322→323 transitions. Top-half pair head-stable across same span. Probability under independence assumption (per-leg per-tick revision prob ≈ 0.20): P(both bottom legs revised both ticks) = 0.20⁴ = 0.0016. Observed → **strong evidence against independence**, supports **basin-localized revision dynamic** confined to bottom-half.

### Refinement of W17-synth-634 dynamic

W17-synth-634 framed the Add.321→322 transition as a "stack-construction revision-mode shift" — a one-tick wave propagating from mid-leg #20971 (revised in Add.319→321 window) down to bottom-half #20974+#20978. Under the one-tick-wave hypothesis, Add.322→323 should have shown either:
- **Wave continuation downward** (but no leg below #20978 to propagate to), OR
- **Wave dissipation** (bottom-half stabilizes, possibly with new mid-leg flutter), OR
- **Wave-reversal** (top-half acquires revisions).

Observed: **persistent basin** at bottom-half across two consecutive transitions, with top-half remaining head-stable. This **falsifies the one-tick-wave hypothesis** (M-634-A) and replaces it with **bottom-half-localized persistent revision basin** (M-636-A): bottom-half legs share a revision attractor that does not dissipate within 50m windows.

### Generative explanation candidates

1. **Review-feedback localization**: Reviewers leaving comments primarily on #20974+#20978 (terminal/sub-terminal scope). Author iterates on those legs only.
2. **Type/dependency cascade**: Bottom-half legs depend on each other's signatures; revising one triggers compatibility revision on the other.
3. **Author work-pattern**: Author works "depth-first from terminal", iterating bottom-half until stable, then will move up.
4. **Test-failure localization**: CI fails only on bottom-half; author force-pushes fixes.

Per gh-API surface alone, options 1–4 are not yet distinguishable. Forward instrumentation: check PR comment timestamps + CI status for #20974/#20978 vs #20969/#20971.

## Part B: cross-pattern bridge — implicit-stack SEXTET (B-A-M-N qwen-code six-PR session)

### B-A-M-N six-PR session composition (carrier-scope, full open set)

| # | PR | head SHA | opened | surface |
|---|----|----------|--------|---------|
| 1 | qwen-code #3797 | `ab93d73b35adcaff2295a5642462a22e2fd4d0f0` | 2026-05-02T21:25:18Z | cli /model list subcommand |
| 2 | qwen-code #3798 | `170156917e0cc75960e9d89c169899373628be37` | 2026-05-02T22:13:03Z | core retry-classification |
| 3 | qwen-code #3799 | `1d9987309f74c29214b24420f9d4f1d4aefd155a` | 2026-05-02T22:44:13Z | cli model-list response parsing |
| 4 | qwen-code #3814 | `cdd76446c1176beba08b03005f7a0929f8a01288` | 2026-05-03T17:09:57Z | core auto-memory recall non-blocking |
| 5 | qwen-code #3815 | `19519927e608ece5d492e5d61f4f82bf35cf1a02` | 2026-05-03T18:29:55Z | core per-model fast-side-query settings |
| 6 | qwen-code #3819 | `6ab6703a890b339abdabd4960dfe79ad6943ae2b` | 2026-05-04T04:35:09Z | core MCP-discovery dedup |

Six legs on disjoint functional surfaces (cli-model-list / retry-class / cli-model-parse / auto-memory / per-model-settings / mcp-discovery). Span first→last: **31h09m51s** — much wider than Sameerlite QUINTET (5h20m). **Sextet via long-running session**, not burst.

### Implicit-stack SEXTET vs explicit-stack QUARTET: competing-vs-coexisting

| attribute | explicit-stack QUARTET (aibrahim) | implicit-stack QUINTET (Sameerlite) | implicit-stack SEXTET (B-A-M-N) |
|-----------|-----------------------------------|-------------------------------------|-------------------------------|
| numbered-prefix scaffolding | YES ("1-/2-/3-/4-") | NO | NO |
| inter-leg dependency | LINEAR (each builds on prior) | INDEPENDENT (disjoint surfaces) | INDEPENDENT (disjoint surfaces) |
| formation span | ~2h | 5h20m | 31h10m |
| revision dynamic | bottom-half basin | concurrent-leg-revision-while-extending | (under observation) |
| inter-leg gap signature | tight 30-50m | expanding-then-collapsing | bursty (long pauses) |
| cardinality | 4 | 5 | 6 |

**Coexistence test**: do these patterns appear on the same author or are they author-disjoint within W17? Pre-W17-synth-636 hypothesis (M-636-B): **author-disjoint** — an author either organizes via explicit numbered scaffolding OR via implicit disjoint-surface extension, but not both within the same 7-day window. Empirical check across W17 corpus: aibrahim-oai shows ONLY numbered scaffolding (current quartet); Sameerlite shows ONLY implicit (current quintet); B-A-M-N shows ONLY implicit (current sextet); meowgorithm shows ONLY implicit (current triplet). **No author observed using both organizational principles simultaneously** within W17 → preliminary support for M-636-B author-disjoint hypothesis at confidence ≈ 0.70 (small N).

### Cardinality-ladder revision (post Add.323)

| cardinality | label | exemplars (W17 cumulative) | extension prior P_n→n+1 |
|-------------|-------|----------------------------|-------------------------|
| 2 | doublet | manavmax #26428/#26431, jatingomnet+VuKrampHub disjoint near-doublet | 0.40 |
| 3 | triplet | meowgorithm crush triplet, jchu-oai codex triplet, friel-openai codex triplet | 0.20 |
| 4 | quartet | aibrahim-oai explicit, prior Sameerlite (now extended) | 0.18 |
| 5 | quintet | Sameerlite litellm (current, W17-synth-635) | 0.12 |
| 6 | sextet | B-A-M-N qwen-code (this synth, Part B) | 0.06 (estimated, first-observed) |

Ladder no longer caps at QUARTET as W17-synth-633 hypothesized. **Ladder now empirically observed up to n=6 within W17**.

## Cross-pattern unification

Both **explicit-stack bottom-half-revision basin** (Part A) and **implicit-stack high-cardinality session** (Part B) are manifestations of **same-author intensive multi-PR engagement within tight time-window**. The two organizational principles differ in:
- **Coupling structure**: linear-dependency (explicit) vs disjoint-independence (implicit)
- **Revision exposure**: bottom-half-localized (explicit) vs all-leg-distributed (implicit, see Sameerlite #27114+#27106 co-revision)

But share:
- **Author-localized revision activity** (only original author touches heads — no cross-author force-push)
- **Sub-50m revision-tick rhythm** (revisions happen within single 50m capture windows)
- **No premature merge** (all legs remain open during construction phase)

This suggests both patterns are surface manifestations of an underlying **author-intensive-construction mode**, with the explicit/implicit choice being orthogonal to the high-engagement signature.

## Forward predictions

- **F-636.A**: aibrahim-oai bottom-half co-revision streak extends to 4-tick across Add.323→324 transition (P-323.D), prior 0.18.
- **F-636.B**: B-A-M-N session extends to SEPTET (n=7) within next 4h via fresh #382x-range PR, prior 0.10.
- **F-636.C**: A new author within W17 exhibits both organizational principles within same 7-day window (falsifies M-636-B author-disjoint hypothesis), prior 0.20 — would weaken the orthogonality hypothesis.
- **F-636.D**: Sameerlite QUINTET acquires sixth leg (jumps to SEXTET cardinality), making implicit-SEXTET observed on TWO authors within W17, prior 0.07.
- **F-636.E**: aibrahim-oai #20969 anchor finally acquires head revision (basin spreads upward), falsifying M-636-A bottom-half-localization, prior 0.10.

## Hand-off

If F-636.A fires (4-tick basin), W17-synth-637 should formalize **persistent-revision-basin lifetime distribution** across W17 explicit-stacks. If F-636.B fires (SEPTET), W17-synth-637 should re-extend the cardinality ladder to n=7 and revisit M-636-B author-disjoint hypothesis with B-A-M-N as primary test case.
