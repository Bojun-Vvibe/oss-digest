# W17 Synthesis #446 — Cross-repo PR-number-collision attribution-error mechanism exposed at Add.207 (PR #26292 attributed to litellm but actually a gemini-cli merge by author akh64bit, mergeCommit b3e6c28933ea23ed015a1899879938f834a51df1) introduces enumeration-pipeline-fidelity sub-observable AND retroactively falsifies the synth #441 / M-207.A / M-207.C litellm-singleton framings, downgrading the {codex, litellm} backbone-pair survival horizon from 4 ticks to 3 ticks and reattributing the synth #434 fresh-author-as-singleton sub-mode at Add.207 from litellm to gemini-cli

## Pattern statement

At Add.208 a direct verification of Add.207's PR list against the canonical GitHub source (`gh pr view <num> --repo <repo>`) revealed that **PR #26292**, narrated in Add.207 as a litellm merge by author akh64bit producing the litellm singleton, is **actually a gemini-cli merge** at `https://github.com/google-gemini/gemini-cli/pull/26292`. The litellm PR with the same number #26292 is an **unmerged** `fix(responses_api): add aclose() to streaming iterator` PR by author `alighazi288` with `mergeCommit:null, mergedAt:null`.

The error mechanism is a **PR-number coincidence**: both `BerriAI/litellm` and `google-gemini/gemini-cli` happen to have a PR numbered #26292 in their respective PR-number namespaces. When an enumeration query was executed at Add.207-capture time without strict per-repo attribution validation, the row representing the gemini-cli merge was incorrectly bound to the litellm carrier-set. This is **structurally novel as a failure-mode for the visible W17 enumeration pipeline** — no prior synthesis in the visible W17 lookback documents a PR-number-collision attribution error.

## Specific evidence

Direct verification at Add.208-capture time (04:08:57Z):

| query | result |
|-------|--------|
| `gh pr view 26292 --repo google-gemini/gemini-cli` | author `akh64bit` (name "AK"), mergeCommit `b3e6c28933ea23ed015a1899879938f834a51df1`, mergedAt `2026-05-01T03:58:42Z`, title `test(evals): add behavioral eval for file creation and write_file tool selection`, **MERGED** |
| `gh pr view 26292 --repo BerriAI/litellm` | author `alighazi288` (name "Ali G"), mergeCommit `null`, mergedAt `null`, title `fix(responses_api): add aclose() to streaming iterator to prevent con…`, **UNMERGED** |

The mergeCommit SHA `b3e6c28933ea23ed015a1899879938f834a51df1` recorded in Add.207 matches exactly the gemini-cli PR, confirming the attribution-error binds the correct merge-commit to the wrong repo string. The author name `akh64bit` and the surface description (`evals` test-only) are also consistent with the gemini-cli PR, not the litellm PR.

## Retroactive consequences for prior W17 synthesis claims

The factual correction propagates to **at least 5 prior synth / addendum claims**, each requiring restatement:

### C1. Add.207 carrier-set restatement

- **Original Add.207 claim**: carrier-set = {codex, litellm}, cardinality 2.
- **Corrected**: carrier-set = {codex, gemini-cli}, cardinality 2 (cardinality preserved by coincidence, but membership differs).
- **Downstream impact**: any aggregate observable computed over the membership-set (rather than just cardinality) is affected. Cardinality-only observables (e.g., the synth #442/#443 cardinality trajectory 2→3→2→2→0 at Add.204-208) are **unaffected**. Membership-dependent observables are affected (see C2-C5).

### C2. M-207.A backbone-pair survival horizon downgrade

- **Original M-207.A claim**: Add.206 {codex, litellm} = Add.207 {codex, litellm} with |intersect|=2 — promotes codex-litellm-backbone-pair from synth #315 / #319 hypothesis toward W17 W-feature at a 4-tick survival horizon (Add.204-207).
- **Corrected**: Add.206 carrier-set was {codex, litellm}; Add.207 carrier-set was {codex, gemini-cli}; therefore |Add.206 ∩ Add.207| = {codex} only, cardinality 1, **NOT 2**. The {codex, litellm} backbone-pair survives only Add.204-206 (n=3), **NOT n=4**. The promotion of the {codex, litellm} pair toward established W17 W-feature is **downgraded from 4-tick survival to 3-tick survival**; W-feature promotion threshold (typically requiring n≥4 chain in W17 norms) is **not met**.
- **New mode classification for Add.206→207**: NOT mode-0 (null-flux sustain) as M-207.A originally claimed; instead **mode-7 (mono-exit-without-entry on litellm) + mode-2 (mono-entry-without-exit on gemini-cli) two-mode-axis simultaneous transition**. This two-mode-axis transition is itself a previously-unenumerated transition class within the synth #424/#428/#431 mode-progression framework, sitting between mode-1 (single-entry single-exit, cardinality-preserved) and mode-6/mode-7 boundary cases.

### C3. M-207.C litellm singleton restatement

- **Original M-207.C claim**: litellm amplitude contracts 2 → 1 with a non-content / test-eval surface PR by fresh author akh64bit at terminal-edge 03:58:42Z; Sameerlite chain probability historical-zero confirmed at n=1.
- **Corrected**: litellm amplitude contracts 2 → **0**, NOT 2 → 1. There is no litellm activity at Add.207. The Sameerlite chain probability claim **is preserved** (Sameerlite still produces 0 follow-ups at n=1; the corrected litellm silence at Add.207 is a stronger version of the same claim — actual amplitude 0 vs originally-claimed amplitude 1). Litellm's silence chain at Add.207 corrected baseline is **n=1** (not interrupted by the spurious singleton); at Add.208 it advances to **n=2**.

### C4. Synth #434 fresh-author-as-singleton sub-mode reattribution

- **Original synth #434 framing at Add.207**: fresh-author akh64bit emerges as a singleton at litellm — instantiates the synth #434 fresh-author-as-singleton sub-mode at n=2 across W17 (first instance Add.202).
- **Corrected**: fresh-author akh64bit emerges as a singleton at **gemini-cli** (not litellm) — the synth #434 fresh-author-as-singleton sub-mode at n=2 reattributes to gemini-cli; the W17 instances of this sub-mode are now **{Add.202 (litellm), Add.207 (gemini-cli)}**, a **cross-repo n=2 chain** rather than the same-repo (litellm) n=2 chain originally claimed. This is **structurally distinct**: cross-repo recurrence of a sub-mode is a **stronger generalization claim** than same-repo recurrence — synth #434's sub-mode is now demonstrated to operate independently of repo identity.

### C5. M-207.D bimodal temporal-density framing preservation

- **Original M-207.D claim**: bimodal temporal-density distribution with 2-PR opening codex cluster + 1-PR terminal litellm singleton, repo-disjoint, author-disjoint, surface-disjoint.
- **Corrected**: same bimodal structure, but the terminal singleton is **gemini-cli not litellm**. All disjointness claims are preserved (codex vs gemini-cli is still repo-disjoint; the author and surface disjointness claims hold unchanged).
- **Synth #444 EMR=1.0 framing fully preserved**: EMR is repo-agnostic; the corrected repo attribution does not affect the EMR computation. The synth #444 mechanism hypotheses (boundary-edge clustering vs stochastic coincidence vs window-artifact) are also repo-agnostic and remain falsifiable as originally posed.

## Introduction of the enumeration-pipeline-fidelity sub-observable

Synth #446 formally introduces **enumeration-pipeline-fidelity** as a meta-observable on the W17 narrative-construction process itself. Defined as:

```
EPF(addendum) = (count of correctly-attributed PRs in narrative) / (count of total PRs claimed in narrative)
```

For Add.207 with 3 claimed PRs and 2 correctly-attributed (#20298 codex correct, #20511 codex correct, #26292 incorrectly bound to litellm), **EPF(Add.207) = 2/3 = 0.667**. For all prior addenda in the visible W17 lookback (Add.193-206), EPF is presumed = 1.0 absent a similar verification scan. A retroactive EPF scan of Add.193-206 would test whether Add.207's EPF=0.667 is a singular event or a recurrent error-mode previously hidden.

EPF as a meta-observable enables a **second-order quality measure**: aggregate observables (rate, cardinality, mode-trajectory, EMR, silence-vector-advance velocity) are all conditional on EPF=1.0; when EPF<1.0, downstream observables propagate the attribution-error and require restatement (C1-C5 above).

## Mechanism analysis for PR-number-collision attribution errors

The Add.207 error suggests at least three candidate enumeration-pipeline failure-modes:

1. **Number-only matching against an aggregated PR-row stream**: if the enumeration tool queries multiple repos in parallel and merges results into a single stream keyed only by PR-number, two PRs with the same number from different repos collide. **Falsifiable**: rerun the Add.207 query with strict repo-namespacing should yield only the correct gemini-cli row at #26292.

2. **Search-query routing without repo-anchor validation**: a `gh pr list --search "merged:>..."` invocation without `--repo` (or with a wildcard) returns rows from multiple repos; if the downstream narrative-construction step assumes the row inherits the most-recently-queried repo context, attribution drifts. **Falsifiable**: trace the original Add.207 query log; if a non-repo-anchored search was used, this mechanism is supported.

3. **Merge-commit-SHA-to-repo lookup ambiguity**: merge-commit SHA `b3e6c28933ea23ed015a1899879938f834a51df1` is unique globally across GitHub; if the narrative was constructed by SHA-lookup but bound to a repo via a separate (and stale) carrier-set hypothesis, attribution drifts independently of the SHA. **Falsifiable**: re-attribute by SHA via `git ls-remote` against each watched repo; only one repo will return the SHA.

Mechanism 1 has the highest prior given the observed error pattern (PR-number coincidence between litellm and gemini-cli at #26292) and is the simplest fix (always anchor PR-rows to their source repo at enumeration time, never key by PR-number alone).

## Cross-reference to prior synth-fidelity discussions

The visible W17 synth lookback contains no prior synthesis explicitly addressing enumeration-pipeline-fidelity as a meta-observable. Synth #437 (deep-backlog dispersion) addresses PR-number space but not cross-repo PR-number collision. Synth #438 (multi-author multi-doublet intra-tick co-occurrence) addresses author-cardinality but not author-to-repo binding fidelity. Synth #446 is therefore the **first W17 synthesis on enumeration-pipeline-fidelity as a first-class meta-observable**, opening a new dimension of W17 narrative-construction quality measurement.

## Falsifiable predictions

- **P-446.A** (EPF retroactive scan of Add.193-206): predicted at least 1 prior addendum will exhibit a similar PR-number-collision attribution error under a retroactive verification scan, given the cross-repo PR-number space density (litellm at ~26000+, gemini-cli at ~26000+, codex at ~20000+; collisions in the 26000-26500 band are likely between litellm and gemini-cli). If zero prior errors are found, Add.207's EPF=0.667 is **singular** and the attribution-error mechanism is **newly emergent at Add.207**.
- **P-446.B** (Add.208 EPF): the Add.208 NULL window has 0 claimed PRs, so EPF is undefined (0/0). Synth #446 proposes EPF(null-window) ≡ 1.0 by convention (no claims to falsify ⇒ trivially perfect fidelity).
- **P-446.C** (mechanism-1 falsification test): if the Add.209 narrative is constructed using a strict per-repo-anchored enumeration (one `gh pr list --repo <repo>` invocation per watched repo, results never merged into a single stream), zero attribution errors are predicted at Add.209+ ticks — a 2-tick error-free chain post-fix would support mechanism-1 as the dominant cause.
- **P-446.D** (downstream-synth-fidelity propagation): synth #441 framed Sameerlite-doublet at litellm Add.206 and the non-chaining tail at Add.207; the synth #441 framing is **preserved** by C3 (Sameerlite still produces 0 follow-ups, just more strongly than originally claimed). Predicted Add.209+ Sameerlite chain probability remains historical-zero. Synth #439 (single-author sub-1-minute self-revert doublet at gemini-cli) is **unaffected** by C4 since the bdmorgan chain is at gemini-cli already and akh64bit is a distinct author.
- **P-446.E** (W-feature downgrade durability): the {codex, litellm} backbone-pair downgraded from n=4 to n=3 by C2 will require a fresh n=4+ chain in Add.209+ to re-promote toward W-feature status. Given codex and litellm are both currently silent at Add.208 (silence chain n=1 each), the earliest possible re-promotion path requires both to re-enter at Add.209 (initiating chain n=1 corrected) and sustain through Add.212. Predicted re-promotion probability ≈ 0.15 over the next 4 ticks.

## Promotion of enumeration-pipeline-fidelity to first-class W17 meta-observable

Synth #446 promotes **enumeration-pipeline-fidelity (EPF)** from an **implicit/unmeasured assumption** (EPF=1.0 for all addenda) to a **first-class W17 meta-observable** with explicit measurement, falsifiable claims, and propagation rules to downstream aggregate observables. All future addendum narratives are recommended to record verification provenance per PR (e.g., `gh pr view <num> --repo <repo>` confirmation timestamp) to enable per-PR EPF auditing. This expands the W17 narrative-construction quality envelope from observable-level claims to **observable-level + meta-observable-level dual quality measurement**, with EPF acting as a confidence-weight on all downstream aggregates.

**End of W17 synthesis #446.**
