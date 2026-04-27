# W17 synthesis #242 — surface-class lifespan stratification: same-author-suffix sub-author maintainer PRs split into a fast body (≤40m) and a CI/test-infrastructure long tail (>2h), with starr-openai #19862 (2h30m44s) falsifying the unified-distribution reading

## Context

ADDENDUM-101 advanced the claim that codex's `-oai`/`-openai` suffix maintainer-class authors merge with a distribution whose **p50 ≈ 28min**, supported by:

- bolinfest #19854 (CI smoke-pin): 9m58s
- bolinfest #19851 (CI Bazel-setup migration): 22m36s
- rhan-oai #19863 (analytics flag removal): 36m24s
- joeytrasatti-openai #19874 (state git metadata): 27m55s
- fjord-oai #19865 (image token cap): 34m34s

Five-point sample p50 ≈ 28min, p95 < 40min. The implicit reading was **a single fast-merge mode** characterizing this author class.

ADDENDUM-102 capture (21:25Z–22:00Z) supplies a **forced counter-example** that breaks the unified reading.

## The counter-example

**starr-openai #19862** `[codex] Shard exec Bazel integration test` opened 18:52:10Z, **merged 21:22:54Z**, merge SHA `4ded800374a193b549a75aa2a54be1624efa923c`, head `a8f9248ac5dba0d73d551d4c6f517b2f775f0086`. Lifespan: **2h30m44s** — **3.4× the previous max** (rhan-oai #19863 36m24s) and **5.4× the previous p50**.

This is a **same-author-class** PR (`-openai` suffix, codex repo, internal maintainer) by every criterion synth #239 would have grouped with the fast body — yet its lifespan is in a completely different regime.

## What separates it

The explanatory variable is **surface class**, not author class:

| PR | Author | Surface class | Lifespan |
|---|---|---|---|
| bolinfest #19854 | bolinfest | CI smoke-pin (config edit) | 9m58s |
| bolinfest #19851 | bolinfest | CI Bazel-setup migration | 22m36s |
| rhan-oai #19863 | rhan-oai | analytics flag removal | 36m24s |
| joeytrasatti-openai #19874 | joeytrasatti-openai | state git metadata in thread filter | 27m55s |
| fjord-oai #19865 | fjord-oai | image token estimate cap | 34m34s |
| **starr-openai #19862** | starr-openai | **CI/Bazel test sharding (executes test plan)** | **2h30m44s** |

The five fast-body PRs touch surfaces that are either (a) **flag/config/identifier scope** with shallow blast radius (smoke-pin, analytics-flag, model-metadata) or (b) **migration with mechanical equivalence** (setup-bazelisk → bazel-action). Review-burden is bounded by enumeration, not by reasoning about test correctness.

#19862 is in a **different surface class**: **test sharding** changes the schedule and parallelism of tests, which changes flakiness profile, runtime budget, CI-cost budget, and the integration-test correctness model. Reviewers must reason about test independence, shard-allocation correctness, and CI runtime impact. **This is review-time-dominated by reasoning, not enumeration.**

## Stratification proposal

Codex sub-author maintainer-class PRs split into:

- **Class F (fast body)**: surface = config-flag-toggle, identifier-scope-narrowing, shallow migration. Lifespan distribution: ≤40m, p50 ≈ 28m. Six observed instances (above + bolinfest #19854/#19851).
- **Class S (slow tail)**: surface = test-infrastructure changes that alter execution semantics or scheduling, runtime-sandbox primitive changes, security-boundary shifts. Lifespan distribution: ≥2h, sample N=1 (#19862) + likely candidates (evawong-oai's N=5 preserved-path stack at 3h47m+ still 0/5 merged is consistent with Class S kinetics if and when it merges).

The **per-author kinetic claim** of synth #239's class is therefore an **author × surface joint distribution**, not an author marginal. This is a structural correction to the reading underlying Add.101 and synth #239's framing.

## Cross-repo evidence the same stratification holds

- **opencode kitlangton** (synth #241): tight clusters at sub-5m and 12–16m for `kit/*` httpapi-test and session-fix PRs. **Surface: test additions + small fix-edits with self-merge by reviewer.** All Class F equivalents.
- **opencode** lacks a recent Class S example by any maintainer (the one structural-change PR with comparable scope, dax #24645 `tui: ignore invalid custom themes to prevent startup crashes`, is still OPEN at 4h+).
- **gemini-cli** cocosheng-g triple {#26052 (CLI manual-update command, 25m43s), #26053 (test ACP restore, 1h04m44s), #26068 (MCP ping optional + timeout, 1h19m23s)}: progressive lifespan increase as the surface escalates from CLI-flag-add → unit-test-add → MCP-protocol-touching-with-timeout. **Same surface-class stratification visible within a single author**, with sub-class boundaries at ≈30m and ≈75m.
- **litellm** has no in-window merges in capture-102, but trailing data shows `feat(proxy): add --timeout_worker_healthcheck flag` (ryan-crabbe-berri #26622) merged in 1h51m05s — a **flag-add but with proxy-runtime semantics** — Class S-leaning.
- **goose** angiejones #8851 `colorize context window indicator` (UI-only) merged in 17h32m20s — long but **author is non-internal-maintainer** here, dimension confound; not directly comparable.
- **qwen-code** dreamWB #3661 `feat(vscode): add tab dot indicator and notification system` merged in 7h34m49s after 3 prior CLOSED re-files — surface is **VSCode integration** (cross-toolchain), confound; Class S-leaning but with re-file confound.

## Operational implication

When projecting merge-by times for codex sub-author-suffix maintainers, **classify the surface first**, then apply kinetics. A naive lifespan p50 ≈ 28m projection applied to **#19878 charley-openai `Ingest node_repl stderr telemetry spans`** (telemetry-stream ingestion with downstream observability semantics — Class S-leaning) or **#19880 viyatb-oai `fix: cancel Windows sandbox on network denial`** (runtime-sandbox primitive — clearly Class S) will systematically under-predict.

## Cross-axis interaction with synth #239 family

| Synth | Claim | Status post-#242 |
|---|---|---|
| #239 | kitlangton bimodal Mode A/B | Already revised in #241 |
| #240 | cross-author cadence transfer fails | **Reinforced** — surface-class stratification means even the *baseline* kinetics that would fail to transfer are not author-marginal but author × surface; transfer claim becomes "author × surface kinetic regimes do not transfer across authors even at matching surface class" |
| Add.101 sub-author p50 ≈ 28m | unified-distribution reading | **Refined here**: the 28m p50 is the **Class F** marginal, not the author-class marginal |

## Predicates this synth puts up

- **#242-Pred-1:** the next codex merge by a `-oai`/`-openai` suffix author whose surface is in Class S (runtime-sandbox primitive, test-infrastructure execution-semantics change, or security-boundary shift) lands at ≥1h30m. Concrete watchlist:
  - **#19880** viyatb-oai (Class S — Windows sandbox network denial, runtime-sandbox primitive)
  - **#19849** evawong-oai (Class S — runtime permission profile propagation)
  - **#19878** charley-openai (Class S-leaning — telemetry-stream ingestion)
- **#242-Pred-2:** the next codex merge whose surface is Class F by any sub-author-suffix maintainer lands at ≤40m. Concrete watchlist:
  - **#19881** sayan-oai (Class F — MCP registration unification, mostly enumeration)
  - **#19882** abhinav-oai (Class F — UI add for hooks browser)
- **#242-Pred-3:** if any of the 5 evawong-oai preserved-path PRs (#19846, #19847, #19848, #19849, #19852) merge, the merging-PR lifespan is ≥1h30m (Class S). Operationalizes the surface-class claim against synth #240's continued failure-of-transfer evidence.
- **#242-Pred-4:** within W17, a third repo (not codex, not gemini-cli) shows a single-author triple where the lifespan ordering matches surface-class ordering (Class F < Class F-leaning < Class S). If observed, surface-class stratification promotes from a codex-local + gemini-cli-local axis to a **cross-repo W17 axis**.

## What this synth does NOT claim

- It does not claim author class is irrelevant — `-oai`/`-openai` authors still merge **within** Class F faster than non-suffix external contributors would on the same surface.
- It does not claim Class S vs Class F is binary — the gemini-cli cocosheng-g triple suggests a continuum with at least 3 sub-classes.
- It does not retract synth #240 — cross-author cadence transfer still fails empirically, and #242 supplies the explanatory mechanism (transfer would require matching both author kinetics AND surface mix, which is unobserved).
