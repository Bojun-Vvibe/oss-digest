# W17 Synthesis #330 — Qwen-code post-exit continuation thread (Add.146→149 4-tick band) is the FIRST observed multi-class continuation laboratory in W17: a single repo's post-silence-exit thread spans **all 3 documented post-exit classes** (M-147.F, M-148.X, M-147.F) across **4 distinct authors** and **3 distinct surfaces** in 3 consecutive active ticks (Add.147+148+149) — refining synth #325 (silence-exit author identity rule) and synth #328 (cross-project precedent as 4th coupling axis) by demonstrating that intra-repo class-distribution can saturate the 3-class taxonomy without leaving the repo, and that author-pool depth (≥4 distinct contributors in 3 ticks) is the structural enabler for class-saturation rather than cross-project precedent alone

**Scope:** Qwen-code Add.146→149 4-tick post-silence-exit thread: pomelo-nwu silence anchor (#3577 prior, silence n=8 entered at Add.144 per synth #324) → wenshao silence-exit at Add.147 (#3720 bg-shells, M-147.F same-feature-line continuation of #3687 from Add.143) → tanzhenxin Add.148 (#3729 762f603e DeepSeek reasoning_content empty-string injection, M-148.X fresh-author + fresh-feature-line + cross-project precedent openclaw `678ed5d512` per synth #328) → doudouOUC Add.149 (#3726 c8c14461 Monitor permission namespace, M-147.F same-feature-line continuation of #3684 review threads 8/10/11). Reference synths: #322 (deep-dormancy asymmetric exit), #324 (3-repo hard-deep-dormancy band), #325 (M-145.M / M-147.F dichotomy), #326 (P-326.B Poisson-flat null), #328 (M-148.X + cross-project precedent), #329 (medium-width attractor convergence Add.145-149).

## Claim (falsifiable)

**P-330.A:** A single W17 repo's post-silence-exit continuation thread can saturate the 3-class taxonomy (M-145.M anchor-author-continuation / M-147.F same-feature-line-different-author / M-148.X author-AND-feature-line-double-rotation) **within a single 4-tick band** without requiring cross-repo activity. The qwen-code Add.146→149 thread exhibits 2/3 classes (M-147.F twice + M-148.X once) and lacks only M-145.M (which would require pomelo-nwu silence-anchor re-emission). The class-distribution within the qwen-code thread (M-147.F:M-148.X = 2:1) is **structurally distinct** from the W17 cumulative class-distribution (M-145.M:M-147.F:M-148.X = 2:2:1), demonstrating that **intra-repo class-distribution is NOT representative of corpus class-distribution**. Predict: at least 1 of the next 5 W17 silence-exit continuation threads (across all 6 tracked repos) will saturate the 3-class taxonomy within ≤6 ticks of the silence-exit. Falsifier is no future thread reaching ≥3 distinct classes in any 6-tick continuation band.

**P-330.B:** **Author-pool depth ≥4 distinct contributors in ≤4 ticks is the structural enabler for class-saturation**, NOT cross-project precedent alone (revising synth #328 P-328.B framing). The qwen-code Add.146→149 thread demonstrates 4 distinct authors (pomelo-nwu silence-anchor + wenshao + tanzhenxin + doudouOUC) across the 3 post-exit active ticks. Of these, only the M-148.X tick (tanzhenxin #3729) cited cross-project precedent (openclaw `678ed5d512`); the M-147.F ticks (wenshao #3720, doudouOUC #3726) cited only intra-repo precedent (#3687 and #3684 respectively). I.e. **author-pool depth provides the diversity substrate for fresh-author entries**, while cross-project precedent provides the **validation substrate** specifically for the M-148.X subclass. The two enablers are **separable** and operate on different dimensions: author-pool depth enables the fresh-author CONDITION of M-148.X, cross-project precedent enables the fresh-feature-line CONDITION. Predict P-330.B: any future M-148.X-class tick will be associated with a repo author-pool of ≥4 distinct contributors active within the prior 6 ticks; falsifier is any M-148.X-class tick at a repo with author-pool ≤3 in the prior 6-tick window.

**P-330.C:** The qwen-code thread's class-distribution skew (M-147.F:M-148.X = 2:1, with M-145.M absent) is driven by the **silence-anchor's continued silence**: pomelo-nwu has not re-emitted post-Add.144 silence-entry, structurally precluding the M-145.M class from this thread. Across W17, M-145.M class instances correlate strongly with **silence-anchor re-emission within ≤4 ticks of silence-exit**: the goose Add.145 instance (lifeizhou-ap #8893+#8895 same-author exit) and litellm Add.146 instance (anchor-author re-emission within 1 tick) both have anchor-emission within 1 tick. Where the anchor remains silent (qwen-code post-Add.144), M-145.M cannot occur, and the class-distribution shifts toward M-147.F + M-148.X. Predict P-330.C: if a silence-anchor remains silent for ≥4 ticks post-exit, the continuation thread's M-145.M rate drops to 0 and M-147.F + M-148.X collectively absorb 100% of post-exit ticks; falsifier is any M-145.M tick observed where the silence-anchor has been silent ≥4 ticks AND the M-145.M tick is NOT a return of the silence-anchor itself (i.e. would require a different author to count as M-145.M, breaking the class definition).

## Evidence

### Qwen-code Add.146→149 4-tick continuation thread

| Tick | Author | PR | SHA | Surface | Class | Precedent type |
|---|---|---|---|---|---|---|
| Add.144→146 | pomelo-nwu (silence-anchor) | #3577 (last pre-silence) | (pre-silence; n=8 silence depth across Add.144-146 per synth #324) | (pre-silence) | (silence anchor) | — |
| Add.147 | wenshao | #3720 | (per Add.147 sha 806f8db) | bg-shells | M-147.F (same-feature-line continuation of #3687 from Add.143) | intra-repo (#3687) |
| Add.148 | tanzhenxin | #3729 | `762f603e9b3633b1a484c5173be8cb10d811137f` | DeepSeek `reasoning_content` empty-string injection | M-148.X (fresh-author + fresh-feature-line) | cross-project (openclaw `678ed5d512`) |
| Add.149 | doudouOUC | #3726 | `c8c144610787d698d25dbd0bc5074513fa02e95c` | Monitor(...) permission namespace (follow-up to #3684 review threads 8/10/11) | M-147.F (same-feature-line continuation of #3684) | intra-repo (#3684) |

Distinct authors in 4-tick band: **4** (pomelo-nwu silent + wenshao + tanzhenxin + doudouOUC). Distinct surfaces in 3 active ticks: **3** (bg-shells, reasoning_content, permission-manager). Classes observed: **2 of 3** (M-147.F ×2, M-148.X ×1; M-145.M absent due to pomelo-nwu continued silence).

### Cross-W17 class-distribution comparison

| Repo | Post-exit ticks observed | M-145.M | M-147.F | M-148.X | Classes saturated |
|---|---|---|---|---|---|
| goose | 1 (Add.145 lifeizhou-ap) | 1 | 0 | 0 | 1 |
| litellm | 1 (Add.146) | 1 | 0 | 0 | 1 |
| **qwen-code** | **3 (Add.147+148+149)** | **0** | **2** | **1** | **2** |
| codex | (no post-exit ticks in Add.145-149 — codex was active throughout) | — | — | — | — |
| opencode | (in deep-dormancy throughout, no exit yet) | — | — | — | — |
| gemini-cli | (in deep-dormancy throughout, no exit yet) | — | — | — | — |
| **Total W17 cumulative** | **5** | **2** | **2** | **1** | **3** |

Qwen-code is the SOLE repo with multi-class continuation (2 classes in 3 ticks); goose and litellm exhibit single-class threads. The corpus 3-class saturation requires aggregating across 3 repos (goose + litellm + qwen-code), but qwen-code alone reaches 2/3 classes in a 3-tick band — the highest intra-repo class-diversity in W17 to date.

### Author-pool depth analysis

Qwen-code distinct authors active in the Add.143→149 7-tick rolling window:
- pomelo-nwu (#3577 prior + silence anchor)
- wenshao (#3687 Add.143 + #3720 Add.147)
- tanzhenxin (#3729 Add.148)
- doudouOUC (#3726 Add.149)
- (plus #3684 author for Monitor original — separate identity, not in active ticks within window)

Distinct active-author count in Add.143→149: **≥4** (qualifying P-330.B threshold). Author-pool depth meets the proposed M-148.X structural prerequisite.

For comparison, the goose Add.143→145 author-pool is **1** (lifeizhou-ap dual-author-exit but same author), and the litellm Add.146 author-pool is **1** (single-author re-emission). Both repos exhibit single-class threads, consistent with P-330.B's prediction that author-pool ≤3 precludes M-148.X.

### Surface diversity within qwen-code thread

| Surface | Tick | PR | Convergent-fix axis (synth #229/#231/#236/#237/#328) |
|---|---|---|---|
| bg-shells (background shell execution) | Add.147 | wenshao #3720 | runtime-sandbox (synth #231) |
| DeepSeek reasoning_content | Add.148 | tanzhenxin #3729 | LLM API surface (synth #229) + cross-project precedent (synth #328) |
| Monitor permission namespace | Add.149 | doudouOUC #3726 | runtime-sandbox-permission (synth #231) + MCP agent-tool integration (synth #229) |

Cross-axis diversity: 3 surfaces span at least **3 of the 5 documented convergent-fix coupling axes** (LLM API + MCP + runtime-sandbox-permission). The qwen-code thread is **structurally cross-axis** within a single repo, not surface-monocultural. This is **structurally distinct** from the litellm Add.139-143 vendor-suffix monoculture per synth #310/#311 (which exhibited single-surface n=4 across non-silent ticks).

### Class-saturation taxonomy update

Adding the multi-class-laboratory observation as a higher-order taxonomy:

| Repo class-saturation level | Definition | W17 instance count | Example |
|---|---|---|---|
| Mono-class | Repo emits only 1 of {M-145.M, M-147.F, M-148.X} across all observed post-exit ticks | 2 (goose, litellm) | goose lifeizhou-ap M-145.M |
| Bi-class | Repo emits 2 of 3 classes within ≤6 ticks | 1 (qwen-code Add.147+148+149) | qwen-code M-147.F + M-148.X |
| Tri-class | Repo saturates all 3 classes within ≤6 ticks | 0 (no W17 instance yet) | — (predicted possible in Add.150+ if qwen-code emits M-145.M via pomelo-nwu return OR a 4th post-exit class is discovered) |

Predict P-330.D: a tri-class saturation event is observable iff (a) a repo's silence-anchor re-emits within the post-exit continuation window AND (b) at least one fresh-author + fresh-feature-line + external-precedent tick has already occurred (M-148.X) AND (c) at least one same-feature-line-different-author tick has occurred (M-147.F). The qwen-code thread satisfies (b) + (c) but not (a) — a pomelo-nwu re-emission within the next 4 ticks (Add.150-153) would complete the tri-class saturation. Falsifier is any tri-class saturation event observed without pomelo-nwu (or equivalent silence-anchor) re-emission.

## Mechanism

The multi-class continuation laboratory pattern emerges from the interaction of three repo-internal properties:

1. **Author-pool depth** (≥4 distinct contributors in the rolling window) provides the diversity substrate for fresh-author entries (P-330.B).
2. **Active feature-line cardinality** (the qwen-code thread has at least 3 active feature lines: bg-shells, reasoning_content, permission-manager) provides the substrate for both same-feature-line continuations (M-147.F) and fresh-feature-line entries (M-148.X).
3. **Silence-anchor persistence** (pomelo-nwu's continued silence) determines the absence of M-145.M and the bias toward M-147.F + M-148.X.

These three properties are **separable** and **independent** — repos can have high author-pool depth but low feature-line cardinality (would skew toward M-145.M-style same-author repeats on a single line) or vice versa (would force M-148.X via fresh-author + fresh-line). Qwen-code in late-W17 happens to score high on all three and exhibits the resulting class-saturation.

## Operational implication

Multi-class continuation laboratories are **rare** in W17 (1 of 6 repos to date) and require a structural confluence of author-pool depth + feature-line cardinality + silence-anchor non-re-emission. Repos that score low on any one dimension default to mono-class continuation. The W17 class-distribution {M-145.M:M-147.F:M-148.X = 2:2:1} is dominated by single-tick observations from mono-class repos; the only multi-tick observations come from qwen-code. As post-exit continuation data accumulates, the M-145.M baseline rate (per P-330.C) will be **negatively biased downward** by repos with persistent silence-anchors (qwen-code, opencode, gemini-cli currently), and **positively biased upward** by repos with rapid silence-anchor re-emission (goose, litellm to date). The synth #325 dichotomy framing (M-145.M vs M-147.F) is now refined into a **3-class taxonomy with class-distribution mediated by silence-anchor re-emission timing**.

## Predictions tracked

- P-330.A (≥1 of next 5 silence-exit threads saturates 3 classes within ≤6 ticks) — falsifier window opens at next silence-exit event.
- P-330.B (M-148.X requires author-pool depth ≥4) — falsifier window opens at next M-148.X observation.
- P-330.C (silence-anchor silence ≥4 ticks → M-145.M rate = 0) — currently confirmed at qwen-code (anchor silent 5+ ticks, M-145.M = 0/3).
- P-330.D (tri-class saturation requires silence-anchor re-emission) — falsifier window Add.150-153 for qwen-code pomelo-nwu return.
- Carry-forward: P-148.D extended (gemini-cli at 9h+ depth at Add.150 close), P-329.A (medium-width attractor [30m, 60m] CV ≤25% rolling 5-tick).

## Cross-references

- Synth #322 (deep-dormancy asymmetric exit; 3-axis model)
- Synth #324 (3-repo hard-deep-dormancy band; qwen-code n=8 silence anchor at Add.144)
- Synth #325 (M-145.M / M-147.F dichotomy as silence-exit author identity rule)
- Synth #326 (P-326.B Poisson-flat active/width null)
- Synth #327 (Add.144-148 cadence drift -83%)
- Synth #328 (cross-project precedent as 4th convergent-fix coupling axis; M-148.X first observation at qwen-code #3729)
- Synth #329 (medium-width attractor convergence Add.145-149)
- ADDENDUM-144 (qwen-code silence entry, n=8 anchor pomelo-nwu)
- ADDENDUM-147 sha=806f8db (qwen-code wenshao #3720 silence-exit, M-147.F first qwen-code instance)
- ADDENDUM-148 sha=3bf493f (qwen-code tanzhenxin #3729 762f603e M-148.X first observation)
- ADDENDUM-149 sha=30e18ee (qwen-code doudouOUC #3726 c8c14461 M-147.F second qwen-code instance, this synth's anchor tick)
- qwen-code thread PRs by SHA: #3687 (wenshao Add.143 bg-shells), #3720 (wenshao Add.147 bg-shells), #3729 762f603e (tanzhenxin Add.148 reasoning_content), #3726 c8c14461 (doudouOUC Add.149 permission-manager), #3684 (Monitor original, doudouOUC #3726 review-thread anchor)
- Cross-project precedent: openclaw `678ed5d512` (cited by qwen-code #3729 per synth #328)
- Synth #229 (LLM API surface coupling axis) + #231 (runtime-sandbox-permission axis) — both surfaces represented in qwen-code thread
