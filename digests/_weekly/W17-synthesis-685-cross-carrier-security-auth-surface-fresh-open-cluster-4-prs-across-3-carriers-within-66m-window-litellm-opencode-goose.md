# W17-synth-685 — cross-carrier security/auth-surface fresh-open cluster: 4 PRs across 3 carriers (litellm + opencode + goose) within 64m07s window targeting auth-mechanism, key-exposure, content-sanitization, and runtime-race surfaces — first W17 instance of multi-carrier security-flavored fresh-open coincidence

**Date**: 2026-05-05 (W17 tick post-Add.353)

**Carriers tied**: BerriAI/litellm (primary — 2 PRs), sst/opencode (1 PR), block/goose (1 PR). Cross-carrier cardinality N=3.

**Anchor observation**: ADDENDUM-353 captured **4 fresh-opens across 3 carriers within a 66m22s window** (12:12:24Z #27189 → 13:18:35Z #9023) where every PR targets a security-adjacent surface — proxy-server key exposure, MCP-route auth replacement, DOMPurify content-sanitization for math-rendering, and ACP runtime-race fix. This is **W17-first multi-carrier security-flavored fresh-open coincidence** — prior security-flavored PRs have appeared as isolated within-carrier instances (e.g., synth-79 cross-repo defensive-payload-shape convergence was structurally about payload shape, not about coordinated security-fix burst across carriers within a single tick).

**Specific anchor PRs**:

1. **BerriAI/litellm #27189** — orbisai0security — `fix: the proxy server exposes key management and mod... in...` — head `9a9323022f5096c467cabbe0343b8e0129688075` — fresh-open 12:12:24Z. Surface: proxy-server / key-management exposure. Author-name signal: "orbisai0security" suggests **security-research-team origin** (the `0security` suffix is conventional for security-team accounts). **Severity-class: high** (key-management exposure on proxy-server is a credential-disclosure class).
2. **sst/opencode #25866** — zharinov — `fix(ui): preserve SVG tags in DOMPurify config for KaTeX math rendering` — head `410fbad5b5c4259ccf5014ca0d264b40269a4ffc` — fresh-open 12:35:36Z (+23m12s after #27189). Surface: ui / DOMPurify content-sanitization for math-rendering. **Security-flavor**: DOMPurify config changes are dual-edge — preserving SVG tags relaxes sanitization (potentially enabling XSS via SVG-embedded scripts) to enable KaTeX rendering. **Severity-class: medium** (XSS-relaxation in service of correctness — typical security-trade-off PR).
3. **BerriAI/litellm #27190** — dennishenry — `fix: replace user api key auth with authorization or cookie for mcp server creation` — head `a1cda015b6b28e5745ed390a6487deaf88e336fd` — fresh-open 13:18:46Z (+66m22s after #27189). Surface: auth-mechanism / MCP-server-creation route. **Security-flavor**: replacing api-key-auth with authorization-or-cookie auth on a server-creation route is an **auth-primitive-swap** PR. **Severity-class: medium-high** (changes the trust-anchor for an MCP-server-creation endpoint).
4. **block/goose #9023** — jh-block — `fix(acp): synchronously reap ACP child to avoid SIGCHLD race` — head `302a3ab83ab43356ea0748e92edbf0780a4a3dec` — fresh-open 13:18:35Z (+11s before #27190 and +5m59s after #27190 by inter-window ordering — actual ordering: #27189 12:12:24Z → #25866 12:35:36Z → #9023 13:18:35Z → #27190 13:18:46Z). Surface: ACP runtime / SIGCHLD race. **Security-flavor**: synchronous child-reaping prevents zombie-process accumulation and SIGCHLD-race-condition exploits. **Severity-class: medium** (runtime-correctness with security implications — race-conditions in process-management can be elevated to local-DoS or privilege-class issues).

**Surface taxonomy**:

| PR | carrier | surface family | layer | security sub-class |
|---|---|---|---|---|
| #27189 | litellm | proxy-server / key-management | runtime/network | credential-disclosure |
| #27190 | litellm | auth-mechanism / MCP-server-creation | runtime/auth | auth-primitive-swap |
| #25866 | opencode | DOMPurify / content-sanitization | ui/security | XSS-relaxation-tradeoff |
| #9023 | goose | ACP / SIGCHLD-race | runtime/process | runtime-race-condition |

Four **disjoint sub-class families** (credential-disclosure, auth-primitive, XSS-tradeoff, runtime-race), **3 carriers**, **3 layers** (runtime-network, ui-security, runtime-process), **2 of 4 PRs by W17-debut authors** (orbisai0security + dennishenry); jh-block and zharinov are existing W17 contributors. **Mixed author-cardinality** (2 debuts + 2 established) is a structural marker: cross-carrier security-cluster is **not driven by a single security-team coordinated push** (which would manifest as same-vendor or same-author signature) but by **independent contributors arriving on security-adjacent surfaces within the same tick**.

**Inter-open gap distribution**: gaps are 23m12s, 42m59s, 11s. Mean 22m07s, range 42m48s. The 11-second gap between #9023 and #27190 is **near-coincident** but on different carriers with different authors — suggests independent arrivals rather than orchestration. The 42m59s middle gap is medium-variance — consistent with the broader Add.353 tick-cadence (mean inter-open ~10-15m for active carriers).

**Structural distinction from prior security-adjacent W17 syntheses**:

- **synth-79 (cross-repo defensive-payload-shape convergence)**: characterized cross-repo convergence on **payload-shape defensive-coding patterns** (input validation, type guards). synth-79 was about **defensive-coding archetype recurrence**, not about **security-fix-burst coincidence within single tick**. Synth-685 is structurally orthogonal — it captures **fix-side coincidence across carriers**, not **archetype recurrence**.
- **synth-260 (cross-repo author-debut clustering)**: characterized author-debut clustering at Add.111. Synth-685 partially overlaps (orbisai0security + dennishenry are W17 debuts) but is **surface-family-bounded** (security-only) rather than **author-status-bounded** (debut-only).
- **synth-98 (bot-driven sub-10s N=3 stale-PR mass-close sweep)**: characterized bot-driven security-housekeeping (CVE-mitigation via dependency-prune). Synth-685 is **human-driven** (4 of 4 authors are human) and **fix-creating** (not housekeeping). Structurally inverted from synth-98.

**Author-side analysis**:

- **orbisai0security** (litellm, debut): vendor-name suggests security-research-team. **First W17 PR**. If pattern persists, expect follow-up PRs on adjacent security surfaces (key-rotation, RBAC, audit-logging) within W17 remainder.
- **dennishenry** (litellm, debut): conventional-name; first W17 PR. Auth-primitive-swap PR is a high-severity surface for a debut author — suggests dennishenry is either (a) a returning-from-pre-W17 contributor with established context, or (b) a security-team member without the suffix-naming convention.
- **zharinov** (opencode, established): Sergei Zharinov, prior W17 PRs on UI surfaces. DOMPurify config change is a **first-time security-surface entry for zharinov** — suggests cross-domain expansion (UI → security-trade-off zone).
- **jh-block** (goose, established): @block-internal account (`-block` suffix). ACP race-fix is consistent with block-internal infrastructure ownership. **First-tick-rebound contributor** for goose carrier-quiescence break.

**Hypothesis layer**:

- **H1 (prior 0.45)**: Security-fix burst is **carrier-aggregate fix-pressure release**, not coordinated. Each PR is independent; the temporal coincidence is artifact of sustained burst-coupling regime (Add.351→353 high-aggregate ticks). Falsifier: if security-fix density drops to ≤1 PR per 4 carriers in next 3 ticks, security-cluster regresses to base-rate; coincidence resolves as random.
- **H2 (prior 0.25)**: Security-cluster is **disclosure-window-coordinated**. orbisai0security as security-research vendor may have triggered a private-disclosure window expiring near Add.353 capture; the other 3 PRs may be downstream (carrier-maintainer-side patches following private-disclosure receipt). Falsifier: if no public CVE / advisory references appear on any of the 4 PRs within 7 days post-Add.353, coordinated-disclosure hypothesis demoted.
- **H3 (prior 0.30)**: Security-cluster is **surface-family-coincidence on hot security-research-target surfaces**. Auth/sanitization/process-race are perennial security-research-target surfaces; high research activity at week-boundary may produce arrival-coincidence without coordination. Falsifier: if next 3 ticks show zero security-flavored fresh-opens on any carrier, surface-coincidence hypothesis weakened (would imply security-research activity is bursty rather than baseline).

**Cross-burst-class interaction with synth-683 (opencode dispersion-burst) and synth-684 (yiliang114 multi-PR-mode)**:

- Synth-683 captured **5-author dispersion-burst on opencode** at Add.352 — zharinov #25866 was one of the 5 dispersion-burst PRs. Synth-685 reclassifies #25866 as **security-flavored sub-class** within the dispersion-burst — **dispersion-burst PRs are heterogeneous in security-flavoring**. Of the 5 (Techie5879 docs-add, drkaangunduz session-backup-feat, zharinov DOMPurify-fix, stephanschielke git-Stream-fix, andres-cq README-fix), only zharinov #25866 is security-flavored. Security-flavor density within dispersion-burst = 20%.
- Synth-684 captured **yiliang114 multi-PR-mode TRIPLET** — none of yiliang114's 3 PRs are security-flavored (refactor/installer/ci). Multi-PR-mode is **orthogonal to security-cluster** — multi-PR-mode is single-author multi-leg phenomenon; security-cluster is multi-carrier multi-author single-tick coincidence on shared security-surface family.

**Predictions**:

- **P-685.A (prior 0.50)**: At least 2 of {#27189, #27190, #25866, #9023} receive review-comment OR force-push within next 2 ticks. Security-fixes attract faster review-attention than baseline; combined with the 4-PR cluster providing cross-PR-review-momentum, expected attention-rate is elevated. Falsified if ≤1 receives any activity by Add.355.
- **P-685.B (prior 0.30)**: At least 1 of the 4 PRs MERGES within next 3 ticks. jh-block #9023 has highest MERGE prior (block-internal author with ACP-runtime ownership; single-fix scope; high test-pass probability). Falsified if 0 merge by Add.356.
- **P-685.C (prior 0.35)**: A second wave of security-flavored fresh-opens emerges within next 4 ticks (≥2 PRs across ≥2 carriers on auth/sanitization/RBAC/key-management surfaces). Carrier-portability test for security-cluster regime. Falsified if next 4 ticks show ≤1 security-flavored fresh-open total across all carriers.
- **P-685.D (prior 0.20)**: orbisai0security publishes a **second litellm PR within W17 remainder** on adjacent security surface (RBAC, audit-logging, key-rotation, or rate-limit-bypass). Tests the security-research-vendor follow-up pattern. Falsified if orbisai0security holds at N=1 W17 PR through Add.360.
- **P-685.E (prior 0.25)**: dennishenry #27190 receives a force-push within next 2 ticks (auth-primitive-swap PRs typically attract review-feedback that triggers re-iteration; first-time debut author with high-severity surface is at higher iteration-prior). Falsified if #27190 head stable through Add.355.
- **P-685.F (prior 0.40)**: zharinov opencode #25866 (DOMPurify SVG-tag preservation) attracts a **security-tagged review-comment** (mention of XSS, sanitization, or SVG-embedded-script risk) within next 3 ticks. The SVG-tag preservation in DOMPurify is a known XSS-vector surface; reviewers familiar with DOMPurify-XSS literature will flag this. Falsified if #25866 receives only correctness-tagged comments (KaTeX rendering verification) without security-flag.
- **P-685.G (prior 0.55)**: At least 1 of the 4 PRs receives a **CVE/CWE reference** (in PR body, comment, or commit-message) within next 7 days post-Add.353. orbisai0security PR is the highest-prior CVE-reference candidate (security-research-vendor authors typically reference disclosure IDs). Falsified if no CVE/CWE references appear by Add.360.

**Falsifiers consolidated**:

- If P-685.A REALIZES (≥2 receive activity), security-cluster has elevated review-attention (validates H1 + H3 partially).
- If P-685.G REALIZES (CVE/CWE reference appears), coordinated-disclosure hypothesis (H2) is partially validated.
- If P-685.D REALIZES (orbisai0security second PR), security-research-vendor follow-up pattern is validated; orbisai0security warrants distinct author-class.
- If all of P-685.A through P-685.E fail simultaneously, security-cluster reduces to **single-tick coincidence** with no downstream signal — H1 (independent arrivals) becomes default explanation at posterior 0.65+.

**Carrier-portability of security-flavored fresh-open cluster regime**:

- Carriers with security-flavored fresh-opens this tick: BerriAI/litellm (N=2), sst/opencode (N=1), block/goose (N=1). N=3 carriers.
- Carriers without (Add.353 tick): openai/codex, google-gemini/gemini-cli, QwenLM/qwen-code, charmbracelet/crush. N=4 carriers.
- **Tick-portability rate**: 3 of 7 carriers (42.9%) host security-flavored fresh-opens within Add.353 tick. **Above expected base-rate** (~10-15% per W17 historical) — indicates regime-marker, not noise.

**Cross-references**: orthogonal to W17-synth-79 (defensive-coding archetype recurrence vs security-fix-burst coincidence); contrasts W17-synth-260 (author-debut clustering — partial overlap on debut authors but security-685 is surface-bounded); orthogonal to W17-synth-683 (opencode dispersion-burst — zharinov #25866 is shared anchor PR across both syntheses, but synth-683 axis is surface-cardinality dispersion vs synth-685 axis is surface-family-coherence on security); orthogonal to W17-synth-684 (yiliang114 multi-PR-mode — author-side phenomenon vs cross-author cross-carrier phenomenon).
