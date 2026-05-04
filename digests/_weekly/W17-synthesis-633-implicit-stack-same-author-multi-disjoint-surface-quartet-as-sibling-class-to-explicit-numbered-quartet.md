# W17-synthesis-633 — Implicit-stack same-author multi-disjoint-surface QUARTET cardinality regime as sibling-class to explicit-stack numbered QUARTET

**Pattern class**: Single author opens four PRs across four functionally disjoint surfaces within a sub-6-hour author-session, **without** explicit numbered-prefix or stack-prefix scaffolding in PR titles, while the simultaneously running explicit-stack quartet (W17-synth-631) provides the contrastive control.

**Triggering instance** (Add.322 capture-snapshot 2026-05-04T12:30:15Z UTC):
- BerriAI/litellm **#27103** head `41ac026fc134b7de3296853ea8de1e4baf7b242f` (Sameerlite, opened 2026-05-04T06:23:04Z) — `fix(azure): omit model from deployment image gen and image edit bodies` — **azure-deployment-body shaping** surface.
- BerriAI/litellm **#27106** head `8a7dda5a6f2bf3ca94514664eb5335fee9c99c12` (Sameerlite, opened 2026-05-04T07:21:44Z) — `fix(mcp): remove auth gate from OAuth broker authorize and token endpoints` — **mcp-oauth-broker authz-policy** surface.
- BerriAI/litellm **#27110** head `60ef98dcad6a5542addb2328cf255820a7836f4e` (Sameerlite, opened 2026-05-04T09:07:51Z) — `feat(realtime): OpenAI Realtime GA support and beta compatibility` — **realtime-API-GA-track feature** surface.
- BerriAI/litellm **#27114** head `d99d7dd9ec132350545edd30efbe12f79fca7001` (Sameerlite, opened 2026-05-04T11:28:40Z) — `feat(utils): sanitize OpenAI tool names` — **utils-tool-name defensive-sanitization** surface.

Author-session span: 06:23:04Z → 11:28:40Z = **5h05m36s**, four PR opens at 58m41s + 1h46m07s + 2h20m56s inter-PR gaps (monotonically expanding gap sequence, distinct from explicit-stack metronomic cadence).

**Contrastive control — explicit-stack quartet** (W17-synth-631 instance, refreshed Add.322):
- openai/codex **#20969** head `b59bce8863401725d24ec054b2fb613dff6c8abe` (aibrahim-oai, opened 08:21:24Z) — `1- Add model service tiers metadata`.
- openai/codex **#20971** head `fdfd9c4f3d71251616d4d91869e580b4b0fa2934` (aibrahim-oai, opened 09:13:06Z) — `2- Use string service tiers in session protocol`.
- openai/codex **#20974** head `37e2e6f3fc0ed458aba13096c8a7f85c8054b650` (aibrahim-oai, opened 09:44:43Z) — `3- Add service tier id to config`.
- openai/codex **#20978** head `3e34c38fa256b217634bc62ee274a4187b2848c5` (aibrahim-oai, opened 10:15:29Z) — `4- Use model service tier slash commands`.

Explicit-stack span: 08:21:24Z → 10:15:29Z = **1h54m05s**, four opens at 51m42s + 31m37s + 30m46s gaps (monotonically contracting gap sequence — opposite of implicit-stack).

**Pattern characterization** — implicit vs explicit stack quartet structural axes:

1. **Title scaffolding**: explicit-stack carries `N-` numeric prefix on every leg (linear narrative dependency declared); implicit-stack carries no inter-leg textual marker (independence asserted, but author-identity + carrier-identity + same-day clustering preserve cohesion at the metadata layer).

2. **Surface disjointness**: explicit-stack quartet operates on a **single coherent feature thread** (model service tier metadata → session-protocol string-encoding → config field → slash-command UX) — four legs stitch into one feature; implicit-stack quartet operates on **four orthogonal codepaths** (azure-deployment-body / mcp-oauth-authz / realtime-API-GA / utils-defensive-sanitize) — no shared dependency graph between legs.

3. **Inter-PR cadence**: explicit-stack contracts (51m → 31m → 30m), suggesting acceleration as author chain-builds with reduced setup cost per leg; implicit-stack expands (58m → 1h46m → 2h20m), suggesting independent unit-of-work cycles where each PR is composed in isolation.

4. **Head-revision dynamics post-quartet-formation**: explicit-stack exhibits the **anchor-stable revision-wave-propagating-down-the-stack** signature (#20969 anchor head-stable 4 ticks, #20971 mid-leg revised across Add.319→320→321 then went stable, #20974+#20978 co-revised in Add.321→322 transition — see W17-synth-634); implicit-stack quartet has not yet exhibited any head-revisions across legs at first capture-snapshot (all four heads stable at first observation).

5. **Domain-coherence-by-pricing-and-defense-cohort interaction**: implicit-stack quartet's #27114 utils-tool-sanitize leg crosses into the broader Anai-Guo #27098 (head `54dfe057532def6b1825e713ffbd08a0abc0c9eb`) YAML-1.1 string-cost coercion + UI `.toFixed` defensive cohort — so even though the four legs are intra-author-disjoint, the **terminal leg is cross-author cohort-joining**; explicit-stack quartet remains intra-cohort-isolated (no cross-author convergence on `service tier` semantics within W17 capture window).

**Cross-carrier echoes of implicit-stack quartet pattern** (verified Add.322 snapshot):
- QwenLM/qwen-code wenshao QUINTET (#3800/#3808/#3809/#3810 + earlier #3801) — implicit-stack at cardinality-5, expanded variant of same regime; meowgorithm crush TRIPLET (#2782/#2788/#2791) — implicit-stack at cardinality-3, contracted variant.
- jchu-oai openai/codex TRIPLET (#20937/#20938/#20939) opened 03:48:21Z → 03:48:36Z (15-second burst) — explicit-stack-style cadence (extreme-contracted) but with bracket-prefix `[codex]` rather than numeric-prefix; **third structural class** (bracket-prefix burst-implicit-stack triplet) sitting between explicit-stack and implicit-stack.

**Falsifiable hypotheses for next 12h**:
- **H633.A**: Implicit-stack QUARTETs have a **lower extension-to-QUINTET probability** than explicit-stack QUARTETs, because the absence of numbered-prefix scaffolding signals the author has no pre-planned "Nth installment" mental model. Predict P(Sameerlite #27114 → 5th disjoint-surface within 8h) = **0.10**, vs P(aibrahim-oai numbered-quartet → "5-" within 8h) = **0.08** — both low, but implicit-stack baseline marginally higher because cap is structural-rarity rather than narrative-exhaustion.
- **H633.B**: Implicit-stack QUARTETs have a **higher cross-author cohort-joining rate at the terminal leg** than explicit-stack QUARTETs. Sameerlite #27114 already crossed into Anai-Guo defensive cohort; predict P(aibrahim-oai #20978 attracts a cross-author -oai service-tier PR within 12h) = **0.10**, vs P(any future implicit-stack leg crosses into a contemporaneous cohort within 12h) = **0.40** baseline.
- **H633.C**: Inter-PR gap monotonicity inverts head-revision-rate: contracting-gap (explicit) stacks revise heads more aggressively post-formation; expanding-gap (implicit) stacks revise heads less aggressively post-formation. Predict head-revision-count delta over next 4 ticks: explicit-stack ≥3 revisions, implicit-stack ≤1 revision.

**Anchor signal for W17 corpus**: This is the **first dual-quartet co-occurrence within a single 50m capture window** (Add.322) where one quartet is explicit-stack and the other implicit-stack, on different carriers, by different authors, completing within 1.25 hours of each other (#20978 closed-out the explicit-stack at 10:15:29Z, #27114 closed-out the implicit-stack at 11:28:40Z — 1h13m11s apart). Cross-carrier author-stack co-formation suggests a W17-wide author-velocity ceiling expansion rather than a per-carrier idiosyncratic burst.

**Hand-off**: W17-synth-634 will treat the explicit-stack arm of this dyad in detail (revision-wave dynamics); this synthesis owns the implicit-stack arm and the dyad-comparison framing.
