# W17-synth-683 — opencode 5-fresh-open dispersion-burst with 100% top-5 turnover in 38m17s window: structurally distinct burst-class from prior single-author convergence (codex evawong-oai QUARTET) and multi-author shared-surface (qwen-code Add.351) burst-classes

**Date**: 2026-05-05 (W17 tick post-Add.352)

**Carriers tied**: sst/opencode (primary instantiator); contrast carriers: openai/codex (convergence-burst comparator), QwenLM/qwen-code (multi-author shared-surface comparator).

**Anchor observation**: ADDENDUM-352 captured **5 fresh-opens on sst/opencode within a 38m17s window** (12:18:52Z #25862 → 12:57:09Z #25869), executed by **5 distinct authors** on **5 disjoint surfaces** with no thematic linkage. The burst displaces 100% of Add.351's opencode top-5 (Hona #25846 + #25853, Brendonovich #25850, vimtor #25857, LifetimeVip #25856 / zclllyybb #25855 — all off-list at snapshot). This is a W17-novel signature: prior opencode top-5 turnover events maxed at 4-of-5 (80%) within a single tick.

**Specific anchor PRs (all sst/opencode)**:

1. **#25862** — Techie5879 — `docs(ecosystem): add opencode-smart-session-picker` — head `ffdc4fee746ebeb9f691484ef92d6176e76dce5a` — fresh-open 12:18:52Z. Surface: ecosystem-docs.
2. **#25863** — drkaangunduz — `feat(opencode): add session backup API` — head `773a3b7ed9e972d7d204cc23c03f3c037c43261f` — fresh-open 12:23:43Z (+4m51s). Surface: session-backup-API (runtime).
3. **#25866** — zharinov — `fix(ui): preserve SVG tags in DOMPurify config for KaTeX math rendering` — head `410fbad5b5c4259ccf5014ca0d264b40269a4ffc` — fresh-open 12:35:36Z (+11m53s). Surface: ui/DOMPurify (math-rendering).
4. **#25867** — stephanschielke — `fix(git): replace mutating Stream.runFold with Stream.runForEach` — head `1e1dca64f2ccd954fd943eff65f2f34e280fe18c` — fresh-open 12:37:00Z (+1m24s). Surface: git/Stream (functional-purity).
5. **#25869** — andres-cq — `docs: fix opencode README` — head `82caff4c9a2bbd241d1f43451b4b0496370ab3ca` — fresh-open 12:57:09Z (+20m09s). Surface: README (root-docs).

**Surface dispersion taxonomy**:

| PR | author | surface family | layer | doc/code |
|---|---|---|---|---|
| 25862 | Techie5879 | ecosystem-docs | docs/registry | doc |
| 25863 | drkaangunduz | session-backup | runtime/API | code-feat |
| 25866 | zharinov | ui-DOMPurify-KaTeX | ui/security | code-fix |
| 25867 | stephanschielke | git-Stream-fold | runtime/git | code-fix |
| 25869 | andres-cq | README | root-docs | doc |

Five **disjoint surface families**, **3 layers** (runtime, ui, docs), **mixed code/docs** (3 code, 2 docs). No surface family appears twice; no two authors collaborated; no PR title shares a token (other than common English/punctuation) with any other PR title in the set.

**Structural distinction from prior burst-classes**:

- **Convergence-burst (codex evawong-oai TRIPLET, Add.351; QUARTET, Add.352)**: single author, single surface family (Windows-sandbox-metadata), monotonic dependency-chain titles, sub-30s opening cadence with bimodal completion. **Signature**: low-author-cardinality, low-surface-cardinality, dependency-linked.
- **Multi-author shared-surface burst (qwen-code 4-fresh-open burst, Add.351)**: 4 authors on adjacent core/models surfaces (memory routing + ModelRegistry + retry-classification + skill-discovery), **2-of-4 surfaces overlap** (B-A-M-N doublet on memory + ModelRegistry; both core/models layer). **Signature**: medium-author-cardinality, medium-surface-cardinality, partial-surface-overlap, layer-coherent.
- **Dispersion-burst (this synth, opencode Add.352)**: 5 authors on 5 disjoint surfaces across 3 layers, mixed code/docs, **zero surface overlap**, **zero layer concentration** (no layer holds >2 PRs). **Signature**: maximum-author-cardinality, maximum-surface-cardinality, layer-dispersed, mixed-artifact-class.

The three burst-classes form a **cardinality-coherence trade-off lattice**: as author-cardinality grows from 1 (convergence) → 4 (multi-author shared-surface) → 5 (dispersion), surface-coherence drops from N=1 (all on Windows-sandbox-metadata) → N=2 (memory+ModelRegistry overlap) → N=0 (no overlap). **Hypothesis**: this trade-off is structural to carrier burst-mechanics — single-author bursts are dependency-driven (require coherence); multi-author bursts on coherent surfaces are issue-tracker-driven (focused on a hot-spot); multi-author dispersion-bursts are **time-window-coincidence-driven** (independent contributors happen to arrive within the same window with no shared cause).

**Inter-open gap distribution analysis**: gaps in the opencode burst sequence are **4m51s, 11m53s, 1m24s, 20m09s** (mean 9m34s, median 8m22s, range 18m45s). This is **dramatically different** from the codex evawong-oai TRIPLET sub-30s gaps (14s, 15s) and from the codex QUARTET completion gap (91m16s). The opencode burst has **medium-gap, medium-variance** distribution — consistent with independent arrivals rather than orchestrated stack. **Falsifier**: if any pair of opencode PRs in this burst share a thematic surface link (e.g., #25867 git-Stream and #25863 session-backup might both touch session-storage layer if backup writes via Stream API), then the dispersion characterization weakens. Manual title-inspection finds no such linkage.

**100% top-5 turnover criticality**: opencode top-5 turnover ≥80% has occurred multiple times in W17 prior ticks (per W17-synth-461, W17-synth-503), but **100% turnover within a single tick is W17-first**. The condition for 100% turnover requires: (a) ≥5 fresh-opens in window, AND (b) all carry-forward candidates fall below position-5 due to lower lastUpdated timestamps. Condition (b) is satisfied here because **none of Add.351's top-5 received force-pushes or commit-pushes** in the Add.352 window (Hona, Brendonovich, vimtor, LifetimeVip, zclllyybb all head-stable). Combined with 5 fresh-opens that timestamp-rank above all carry-forwards, 100% turnover is mechanically forced.

**Cross-burst-class distinction from W17-synth-679 (silent-force-push sub-mode-4 4-carrier saturation)**: synth-679 characterized cross-carrier saturation of an *iteration mode* (sub-mode-4 force-pushes spreading across BerriAI/litellm + sst/opencode + QwenLM/qwen-code + google-gemini/gemini-cli). synth-683 characterizes intra-carrier saturation of a *fresh-open mode* (5 disjoint authors firing within sst/opencode). The two saturations operate on **orthogonal mode-axes**: synth-679 is cross-carrier-iteration-mode saturation; synth-683 is intra-carrier-fresh-open-mode saturation. Both reach saturation at N=5 (synth-679 at 5 sub-mode-4 instantiating authors when wenshao cross-anchor is counted; synth-683 at 5 fresh-open authors).

**Predictions**:

- **P-683.A (prior 0.40)**: opencode top-5 turnover regresses to ≤80% in next 2 ticks (i.e., at least 1 of {#25862, #25863, #25866, #25867, #25869} carries forward to Add.353 top-5). Falsified if Add.353 sees ≥5 fresh-opens with all 5 above the youngest of this burst. Mean revertion to historical ≤80% turnover ceiling.
- **P-683.B (prior 0.25)**: A second 100% top-5 turnover tick on opencode occurs within W17 remainder (i.e., the dispersion-burst signature recurs). High prior 0.25 because Add.352 is the **first** instance and base-rate is unknown; if this is a true regime-marker, recurrence is plausible.
- **P-683.C (prior 0.30)**: Dispersion-burst class instantiates on a non-opencode carrier within W17 remainder (i.e., ≥5 fresh-opens, 5 distinct authors, 5 disjoint surfaces, ≥3 layers, mixed code/docs, on litellm OR codex OR gemini-cli OR qwen-code OR goose OR crush). Carrier-portability test for the dispersion-burst signature.
- **P-683.D (prior 0.55)**: Within next 2 ticks, at least one of #25862, #25863, #25866, #25867, #25869 receives a silent force-push (entering sub-mode-4) — feeding back into synth-682 author-set growth. The 5 dispersion-burst authors are all W17-fresh entrants and the per-tick prior of any given fresh-open author entering sub-mode-4 within 2 ticks is approximately 0.18 (per Add.347–351 base-rate); 1 - (1-0.18)^5 = 0.63 — round-down to 0.55 for adverse-selection (docs-PR authors have lower iteration-rate than feat-PR authors, and 2 of 5 are docs).
- **P-683.E (prior 0.20)**: andres-cq #25869 (`docs: fix opencode README`) MERGES within next 2 ticks. README docs-fixes have W17 median lifespan ~30m (per W17-synth-12); andres-cq's PR is already 0m old at snapshot, putting it at 30m expected merge ~13:27Z. Prior 0.20 because (a) docs-fixes have higher MERGE rate but (b) bot-bracketing of release pipelines often delays even trivial docs.
- **P-683.F (prior 0.35)**: zharinov #25866 (DOMPurify-KaTeX-SVG fix) attracts a code-review comment OR force-push within 1 tick. Security-tagged fixes (DOMPurify config) attract review attention faster than typical UI fixes. Falsified if no force-push or comment by Add.353.

**Falsifiers consolidated**:

- If P-683.A REALIZES (turnover drops <100%), dispersion-burst is bounded as a single-tick phenomenon, not a regime.
- If P-683.B REALIZES (second 100% turnover tick), dispersion-burst is a recurring W17 signature warranting its own sub-mode label.
- If P-683.C REALIZES, dispersion-burst is carrier-portable (cross-carrier signature, not opencode-specific).
- If P-683.D REALIZES, dispersion-burst feeds sub-mode-4 author-set growth on a known schedule.

**Cross-references**: extends W17-synth-461 (opencode top-5 turnover ceilings); contrasts W17-synth-92 (single-author N=4 same-second disjoint surfaces — sub-second variant of dispersion); contrasts W17-synth-99 (cross-carrier ACP/SACP quartet — deliberate cross-carrier dispersion vs. accidental intra-carrier dispersion); orthogonal to W17-synth-679 (sub-mode-4 cross-carrier saturation); orthogonal to W17-synth-682 (sub-mode-4 multi-PR-mode).
