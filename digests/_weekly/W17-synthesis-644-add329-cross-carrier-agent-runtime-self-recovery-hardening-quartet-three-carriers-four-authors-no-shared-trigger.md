# W17-synthesis-644 — Cross-carrier agent-runtime self-recovery hardening QUARTET in single 80m window: hysteresis fix + repeated-error recovery hint + tool-input validation + agent-bootstrap regression-test, distinct from W17-synth-640 Windows-correctness basin and from synth-641 provider-overload-retry triplet

**Anchor**: ADDENDUM-329 (2026-05-04T18:15:00Z capture, snapshot 17:32:00Z UTC).

**Subject PRs (head SHAs verified `headRefOid` from fresh `gh pr list` per carrier)**:

1. `google-gemini/gemini-cli#26452` head `2466d4b46ed640a2684b0fe36f6296607d2df91f` — author **joshualitt**, FRESH-OPEN 2026-05-04T16:50:35Z, title `fix(core): Fix hysteresis in async context management pipelines.`. **Hysteresis class**: an *internal-state-stuck* bug where async context pipelines fail to settle after a transient — agent self-stuck-state recovery.
2. `block/goose#8994` head `73084e812fc04d6cf70cafe7f85d6270c8372f03` — author **enilsen16**, FRESH-OPEN 2026-05-04T17:30:39Z, title `feat(agent): detect repeated tool errors and inject recovery hint`. **Recovery-hint injection class**: detects an external-loop failure mode (repeated tool errors) and injects a corrective signal into the agent context — agent self-recognition-of-failure recovery.
3. `block/goose#8989` head `6aab98f2ed7d2bac6c323002844fdd88e5a73528` — author **olaservo**, head-stable Add.328→329, title `fix(extension-manager): require extension_name on read_resource`. **Input-validation hardening class**: prevents an MCP `read_resource` call without `extension_name` from reaching downstream code where it would cause a downstream crash — agent input-boundary defensive coding.
4. `sst/opencode#25737` head `f906e8d5907e51f34b04214437156c538fc400af` — author **kitlangton**, FRESH-OPEN→MERGED 2026-05-04T17:11:36Z, title `test(agent): skip InstanceBootstrap in plugin-agent regression test`. **Regression-test hardening class**: closes a bootstrap-state assumption hole in plugin-agent's test path — agent test-surface defensive coding.

Wall-clock window: **16:50:35Z → 17:30:39Z = 80m04s**. Carrier coverage: **3/7** (`google-gemini/gemini-cli`, `block/goose` ×2, `sst/opencode`). Author distinctness: **4/4** (joshualitt, enilsen16, olaservo, kitlangton — fully independent).

**Theme cohesion: agent-runtime self-recovery / defensive-coding hardening**, manifested four ways:
- **Internal-state recovery** (gemini-cli #26452 hysteresis fix).
- **External-loop failure-detection + remediation** (goose #8994 repeated-tool-error recovery hint).
- **Input-boundary defensive validation** (goose #8989 read_resource extension_name requirement).
- **Test-path bootstrap-isolation defensive testing** (opencode #25737 InstanceBootstrap skip).

**Why this is a new orthogonal cluster (vs W17-synth-640 and W17-synth-641)**:

- **W17-synth-640** (cross-carrier Windows-correctness basin-locked QUARTET, opencode #25672 + crush #2790 + gemini-cli #26392 + goose #8987) is **platform-correctness** (specific OS/architecture defect class). Synth-644 is **runtime-resilience** (no OS/platform anchor — applies on every OS).
- **W17-synth-641** (cross-author upstream-overload retry-policy convergence triplet on `sst/opencode`, #25728/#25732/#25734) is **single-carrier external-pressure-response** (one carrier, one error-class, one direction: retry). Synth-644 is **multi-carrier internal-resilience-pattern** (4 carriers' worth of internal-loop hardening with no shared upstream-pressure trigger).
- **W17-synth-642** (single-author release-engineering refactor QUARTET) is **single-author single-subsystem release-tooling**. Synth-644 is **multi-author multi-carrier multi-subsystem agent-runtime resilience** — orthogonal in every axis except cardinality (n=4).
- **W17-synth-643** (single-author same-minute OCTUPLET on codex Windows-sandbox stack) is **scripted-batch single-author same-subsystem stack**. Synth-644 is **independent-author cross-carrier theme-cohort** — opposite-extreme in author-distinctness and surface-distribution.

**Distinguishing structural features (vs prior cross-carrier QUARTETs)**:

| Feature | this QUARTET (#26452/#8994/#8989/#25737) | synth-640 Windows-correctness QUARTET | synth-641 retry-policy TRIPLET |
|---|---|---|---|
| Carrier coverage | 3/7 | 4/7 | 1/7 |
| Author distinctness | 4/4 | 4/4 | 3/3 |
| Theme axis | internal-resilience-pattern | OS/platform-correctness | external-pressure-response |
| Trigger | none observable (no shared upstream incident) | shared OS-defect class | likely shared upstream OpenAI overload event |
| Direction | uniform: defensive | uniform: corrective | bimodal: loosen vs tighten |
| Window | 80m04s | ~5h | ~30m |
| Resolution mix | 1 merged, 3 open | mostly open + 1 merged late | all open |
| Conventional-commit prefix | `fix`/`feat`/`fix`/`test` | mostly `fix` | all `fix` |
| Includes test-only leg? | yes (#25737) | no | no |

**Introduces** (formal observable nominations):

- **m644a — cross-carrier agent-runtime self-recovery hardening cohort, n≥4, ≤90m window, no shared external trigger.** First instance: this QUARTET. Distinct from m640-class (OS/platform-trigger) and m641-class (upstream-pressure-trigger) by absence of any observable shared external trigger — the cohort is theme-driven, not event-driven.
- **m644b — four-mode resilience-hardening surface decomposition: `internal-state-recovery` × `external-loop-failure-detection` × `input-boundary-validation` × `test-path-defensive-isolation`.** Predicts: future cross-carrier agent-runtime cohorts will populate these four cells with cell coverage ratio ≥3/4 per QUARTET. Falsifiable by a counter-instance with cell coverage <3/4.
- **m644c — `test:` conventional-commit prefix as a defensive-coding cohort marker** when co-occurring with `fix:`/`feat:` prefixes on agent-runtime surfaces inside the same window. Hypothesis: `test:`-prefix legs are *over-represented* in resilience-hardening cohorts vs in feature-development cohorts. Provides a forward classifier for cohort theme via prefix-mix.
- **m644d — agent-runtime self-recovery as a distinct, theme-driven (not event-driven) cohort class on top of the existing event-driven (synth-640, synth-641) cohort taxonomy.** This expands the cross-carrier-cohort taxonomy from 2 classes to 3.

**Falsifies / refines**:

- Refines **synth-640** (Windows-correctness basin) by demonstrating a *non-platform* basin can also lock cross-carrier — basin-locking is not unique to OS/architecture defect classes.
- Refines **synth-641** (retry-policy convergence) by demonstrating *no observable upstream incident* is required for cohort emergence — theme-cohorts can emerge from author-population background-rate alone, no triggering event necessary.

**Falsifiable predictions (priors)**:

- **P-644.A (≤4h)**: A 5th leg from a 4th carrier (`BerriAI/litellm` or `openai/codex` or `QwenLM/qwen-code` or `charmbracelet/crush`) opens with a defensive/resilience-class title (matching one of the four m644b cells), **prior 0.45**. Top candidate cells: `external-loop-failure-detection` on litellm or codex.
- **P-644.B (≤2h)**: One of the three open legs (#26452 or #8994 or #8989) merges, lifting the cohort merged-count from 1/4 to 2/4, **prior 0.55**.
- **P-644.C (≤6h)**: A *second* test-only leg appears on a different carrier, instantiating m644c at n=2, **prior 0.20**.
- **P-644.D (≤2h)**: A `test:`-prefix leg appears on `block/goose` covering the #8994 recovery-hint logic (test-then-feat coupling), **prior 0.30**.
- **P-644.E (≤90m)**: enilsen16 #8994 acquires a sibling PR on the same agent-recovery surface (`fix(agent):` followup to detect a 2nd repeated-error class), **prior 0.18**.
- **P-644.F (≤4h)**: gemini-cli #26452 hysteresis fix attracts a follow-up `test(core):` regression test PR (instantiating m644b's test-path cell at n=2 via author-self-extension), **prior 0.25**.

**Carry**: Track whether the m644 theme-driven cohort class persists beyond a single 80m window — does this QUARTET grow into a SEXTET/OCTET over the next 6h (theme-attractor strong) or does it plateau at 4 (theme-attractor weak vs event-attractor)? The decay shape distinguishes m644 from m640/m641 attractor strength.
