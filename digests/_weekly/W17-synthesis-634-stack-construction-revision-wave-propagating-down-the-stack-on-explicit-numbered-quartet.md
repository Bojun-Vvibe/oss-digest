# W17-synthesis-634 — Stack-construction revision-wave-propagating-down-the-stack dynamic on explicit-numbered-quartet, refining anchor-stable mid-leg-volatile signature

**Pattern class**: Within a single explicit-numbered author-stack (W17-synth-631 cardinality regime), head-SHA revisions do not occur uniformly across legs. Instead, revision activity **propagates as a wave from anchor toward terminal leg over successive capture ticks**, with the anchor remaining head-stable while the wave crests at progressively later legs.

**Triggering instance** — aibrahim-oai numbered-QUARTET on openai/codex (#20969 / #20971 / #20974 / #20978), traced across Add.319 → Add.320 → Add.321 → Add.322:

| Leg | PR | First-observed head | Add.319 | Add.320 | Add.321 | Add.322 | Revisions |
|-----|----|--------------------|---------|---------|---------|---------|-----------|
| 1- (anchor) | #20969 | `b59bce8863401725d24ec054b2fb613dff6c8abe` | stable | stable | stable | stable | **0** |
| 2- (mid) | #20971 | (orig pre-Add.319) | (carry) | `91466575…` | `fdfd9c4f3d71251616d4d91869e580b4b0fa2934` | stable | **2** within Add.319→320, then frozen |
| 3- (sub-terminal) | #20974 | `fe8c6887fcd11f830ba42dc2499c363ae54fca92` | — | — | (carry) | `37e2e6f3fc0ed458aba13096c8a7f85c8054b650` | **1** in Add.321→322 |
| 4- (terminal) | #20978 | `d718127935b791981777f0f92e536424314669c6` | — | — | — | `3e34c38fa256b217634bc62ee274a4187b2848c5` | **1** in Add.321→322 |

**Wave characterization**:

1. **Anchor immutability** (#20969): four-tick head-stability across the entire observed quartet lifecycle. Anchor PR carries the foundational metadata (`Add model service tiers metadata`); its content is the dependency-floor for all later legs, so any change here would force-cascade revisions through the rest of the stack. Author behavior of leaving the anchor untouched while reworking later legs is consistent with **dependency-floor-stabilization** as a stack-management discipline.

2. **Mid-leg early-volatility, then freeze** (#20971): revised twice within Add.319→320 transition window (head went from pre-capture origin → `91466575…` → `fdfd9c4f…`), then went head-stable from Add.321 onward. Mid-leg is where the protocol-string-encoding lives (`Use string service tiers in session protocol`) — semantic-payload-shaping happens here, then locks once shape is settled.

3. **Sub-terminal + terminal co-revision in single tick** (#20974 + #20978): both heads moved between Add.321 capture (11:38:30Z) and Add.322 capture (12:30:15Z) — a 51m45s window. #20974 went `fe8c6887…` → `37e2e6f3…`, #20978 went `d718127…` → `3e34c38f…`. **Synchronized force-push of bottom-half of stack** while top-half (#20969 + #20971) remained frozen. This is the wave-cresting moment.

**Refining the W17-synth-631 signature**:

W17-synth-631 declared the signature **anchor-stable mid-leg-volatile** based on Add.319 → Add.320 evidence (only #20971 had been observed revising). With the additional two ticks of evidence:

- The signature generalizes to **anchor-stable revision-wave-propagating-down-the-stack**: revision activity moves from leg 2 → legs 3+4 over time, with each "wave-crest" tick affecting one or two adjacent legs simultaneously, while previously-volatile legs freeze and the anchor remains stable throughout.

- The wave-propagation-direction (anchor → terminal) is **opposite to dependency-flow-direction** (terminal depends on anchor). This means revisions chase code that depends on already-stabilized code, not the other way around — author is **adapting later legs to fit a frozen anchor**, not propagating anchor-changes downstream. This is the inverse of the more-common "rebase cascade" pattern where anchor moves and downstream legs follow.

**Cross-stack falsification check** — does this dynamic appear on other contemporaneous explicit-stacks?
- jchu-oai openai/codex bracket-prefix TRIPLET (#20937 head `53dbdbfa9d603270d405d5f8aac78d1844a1e8b0` / #20938 head `1d493d1a25c252b3de6df879ac0e22adf5b867c0` / #20939 head `9151fc21e2ee2e3ae681b2a5c4ec5927a84789e7`) — all three heads stable across Add.319→322 (4 ticks), **zero revision activity** on any leg. Bracket-prefix-TRIPLET (15s-burst implicit-time-locked stack) does not exhibit revision-wave; instead exhibits **uniform-stability**, suggesting the wave-propagation dynamic is keyed to the **multi-hour open-cadence** of the explicit-numbered-quartet, not to the explicit-stack property per se.
- B-A-M-N qwen-code TRIPLET (#3814 head `cdd76446c1176beba08b03005f7a0929f8a01288` / #3815 head `19519927e608ece5d492e5d61f4f82bf35cf1a02` / #3819 head `6ab6703a890b339abdabd4960dfe79ad6943ae2b`) — heads stable across Add.319→322, no revisions. Same uniform-stability profile as jchu-oai.
- wenshao qwen-code QUINTET (#3800 head `c7614e1e176ac504f6ba0f1d3f45f4146202af51` / #3808 head `5249601cc02cfed47d0a62321f57195b75ed1d3b` / #3809 head `d83644a7549615658e9b7e58333f505dc9f86b43` / #3810 head `40c4778c5aecdc9b81199ebf69a5395d13352a9f`) — all heads stable across Add.319→322. QUINTET does not exhibit revision-wave despite implicit-stack cardinality-5.

**Inferred precondition for revision-wave dynamic**: The pattern requires **(a) explicit numbered-prefix scaffolding** + **(b) inter-leg cadence ≥30m** + **(c) cardinality ≥4**. The combination forces author to commit to a multi-step narrative early (numbered-prefix), but allows enough between-leg drift time (≥30m gaps) for downstream-leg shape to be reworked while upstream legs collect review pressure and freeze. Implicit-stacks (Sameerlite QUARTET, wenshao QUINTET, meowgorithm TRIPLET) lack the narrative-commitment forcing function and instead exhibit uniform-stability from first observation.

**Falsifiable hypotheses for next 8h**:

- **H634.A**: aibrahim-oai numbered-quartet wave continues — terminal leg #20978 receives a second revision in Add.322→324 window (next-wave-crest at terminal). Predict P = **0.30**. If realized, would establish wave can re-crest at same leg rather than monotonically advancing.
- **H634.B**: aibrahim-oai numbered-quartet sub-terminal #20974 receives a second revision before terminal #20978 receives a second revision. Predict P = **0.20** (terminal is more likely to keep moving because it inherits all upstream changes).
- **H634.C**: Anchor #20969 finally moves within next 6 ticks. Predict P = **0.05** (anchor immutability is the strongest signal in the regime; movement here would likely correlate with quartet-merge or quartet-abandonment).
- **H634.D**: Mid-leg #20971 un-freezes (third revision after 3-tick stability). Predict P = **0.08** — once a wave-crest passes, re-crest at upstream leg is rare under the wave-propagation hypothesis.
- **H634.E**: A new explicit-numbered "5-" leg opens, extending quartet → quintet. Predict P = **0.08** (carrying P-322.E baseline; first-attempt extension already failed in Add.321→322).

**Cross-validation predictions**:
- **H634.F**: If a contemporaneous new explicit-numbered author-stack appears in W17 corpus before W17 close, it will exhibit the same anchor-stable + wave-propagating signature within 4 ticks of cardinality reaching 4. Predict P = **0.55** if any new explicit-numbered stack appears AND reaches cardinality-4.

**Hand-off**: W17-synth-633 owns the implicit-stack arm of the dyad and the explicit-vs-implicit comparison framing; this synthesis owns the explicit-stack revision-wave dynamic specifically. The two synthesis files together complete the dual-arm characterization of the **same-author cardinality-4 multi-PR-stack regime** in W17.
