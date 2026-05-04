# W17-synthesis-641 — Cross-carrier OpenAI/Codex stream-overload retry-policy convergence TRIPLET on a single carrier within 30m38s, three independent authors, distinct error-class flavors

**Anchor**: ADDENDUM-328 (2026-05-04T17:25:00Z capture).

**Subject PRs (head SHAs verified `headRefOid` from fresh `gh pr list` at 16:55:00Z UTC)**:

1. `sst/opencode#25728` head `ae3860b2110fa3ce37b8fc375a7bb25fe8de2d5d` — author **ItsWendell**, FRESH-OPEN 2026-05-04T16:09:16Z, title `fix(session): retry Codex server_is_overloaded stream errors`. **Vendor-specific flavor**: targets the literal upstream `server_is_overloaded` token from the codex-vendor stream channel.
2. `sst/opencode#25732` head `3887a915d7fb4a2b5b43c3c1733818d2b3be48c0` — author **marcusquinn**, FRESH-OPEN 2026-05-04T16:24:36Z (Δ +15m20s after #25728), title `fix: retry overloaded OpenAI stream errors`. **Generic-OpenAI flavor**: lifts the retry policy up one abstraction tier from the codex-vendor stream to the broader OpenAI streaming surface.
3. `sst/opencode#25734` head `e4cb90e2424b27fc67051cc8e28c427470f1efa9` — author **Fatty911**, FRESH-OPEN 2026-05-04T16:39:54Z (Δ +15m18s after #25732, +30m38s after #25728), title `fix(opencode): add max_retries config to cap session retry attempts`. **Configurable-bound flavor**: introduces an explicit ceiling so prior retries cannot spin without bound — a structural counter-pressure to the first two PRs' retry-loosening.

**Why this is a new orthogonal theme (vs prior 4 ticks)**:

- Recent synth subjects (synth-639 MCP-reconnection, synth-640 Windows-correctness QUARTET, synth-638 UI-correctness, synth-637 stacked MCP-memory triplet, synth-639 ACP/SACP, prior cross-subsystem jif-oai, MCP-discovery convergence doublet, single-author quintet-debut) sit on protocol/runtime/correctness/author-debut axes.
- This TRIPLET sits on a strictly-orthogonal axis: **upstream-error-class retry-policy**. None of the prior 4 ticks' subjects touched a vendor-overload error-class as the lens.
- Distinct from synth-79 (cross-repo defensive payload shape) because the convergence here is intra-carrier, three independent authors on one repo within 30m38s, not cross-repo.
- Distinct from synth-49 (api-surface gravity well multi-author multi-shape cluster) because all three PRs share the *same* error-class lens with three *different* policy responses (vendor-narrow / vendor-broad / cap-introducing) — a mechanism-stratified axis rather than a surface-stratified axis.

**Mechanism stratification (three orthogonal policy responses to one error class)**:

| PR | Author | Scope axis | Direction |
|---|---|---|---|
| #25728 | ItsWendell | vendor-narrow (`server_is_overloaded` token) | loosen retry (add to allow-list) |
| #25732 | marcusquinn | vendor-broad (all OpenAI stream errors) | loosen retry (broaden allow-list) |
| #25734 | Fatty911 | session-global cap | tighten retry (introduce upper bound) |

The presence of both **loosen** (#25728, #25732) and **tighten** (#25734) PRs in the same 30-minute window on the same carrier is itself a non-trivial signal: the user-population is reporting *both* "I'm being rate-limit-rejected too eagerly" AND "I'm spinning forever in retry" — a bimodal failure-mode coexistence under the current retry default.

**Introduces** (formal observable nominations):
- **m641a — single-carrier upstream-error retry-policy convergence TRIPLET inside one capture window.** First instance: this tick on `sst/opencode`. Distinct from synth-72 (single-surface multi-author convergence at maintainer cadence) because the convergence axis is a *retry policy*, not a *surface*.
- **m641b — bimodal loosen/tighten direction-split inside a convergence cluster** (2-loosen, 1-tighten ratio at first instance; predicts tightening side will attract 2nd leg if ratio normalizes toward 1:1 within next tick).
- **m641c — vendor-narrow → vendor-broad → cap-introducing temporal ordering** (15m20s, 15m18s near-identical inter-arrival, hinting at a shared external trigger; candidate explanation: a coordinated upstream incident or status-page event around 16:00–16:15 UTC).

**Falsifies / refines**:
- Refines **synth-92** (same-second n4 tuplet by single author): m641a is *multi-author* convergence on one *policy* lens, mirror to the synth-92 single-author *surface* lens.
- Partially falsifies **prior assumption that multi-author convergence requires a feature surface**: here the convergence is on an *error-class*, demonstrating non-surface convergence axes.

**Falsifiable predictions (priors)**:
- **P-641.A (≤2h)**: A 4th leg appears on `sst/opencode` from a 4th independent author also targeting upstream-stream-error retry, **prior 0.18**.
- **P-641.B (≤4h)**: Identical theme spreads to `BerriAI/litellm` (proxy-side) with a `feat(retry):` or `fix(router):` PR referencing `server_is_overloaded` or 503-class stream errors, **prior 0.25**.
- **P-641.C (≤6h)**: Maintainer collapses #25728 and #25732 into a single-merge resolution and closes one — typical convergence-doublet maintainer-cadence pattern, **prior 0.55**.
- **P-641.D (≤8h)**: #25734 (the cap PR) merges first and #25728/#25732 are reworked atop it — predicts the structural-bound takes precedence over the policy-loosening flavors, **prior 0.30**.

**Carry**: M-641 cross-carrier-symmetric instance lookup — does another carrier (litellm proxy, codex client, gemini-cli) show a parallel within-window convergence on its own native upstream-error class? If yes, m641a generalizes to `cross-carrier upstream-error convergence`; if no, m641a remains carrier-bound and gains a per-carrier-pressure-asymmetry sub-mode.
