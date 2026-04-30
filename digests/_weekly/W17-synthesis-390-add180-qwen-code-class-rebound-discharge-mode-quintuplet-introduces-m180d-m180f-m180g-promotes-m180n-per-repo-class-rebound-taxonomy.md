# W17 synthesis #390 — Add.180 introduces M-180.D sub-minute same-author triplet plus M-180.F maximal-surface-dispersion plus M-180.G release-cut signature as qwen-code-class post-extended-silence-rebound-discharge-mode quintuplet promotes M-180.N per-repo-class rebound-discharge-mode taxonomy

## Observation

ADDENDUM-180 records the qwen-code quintuplet rebound (5 PRs at 07:24:18Z..07:59:36Z) breaking n=5 silence and terminating the M-178.D post-period-3-cluster silence-extension regime. The quintuplet has **three structurally distinct sub-features** that operate at different levels of the rebound discharge mode:

1. **M-180.D sub-minute same-author triplet**: yiliang114 emits 3 PRs in **44 seconds** (07:24:18Z → 07:24:47Z → 07:25:02Z, +29s + 15s).
2. **M-180.F maximal-surface-dispersion**: 5 PRs cover 5 disjoint surfaces (lsp-doc-fix, vscode-companion-ux, ci-merge-back-PR-workflow, core-tool-token-tracking-removal, release-version-tag) — 1 PR per surface, no within-tick surface recurrence.
3. **M-180.G release-cut signature**: human-author triplet (yiliang114) → human-author singleton (tanzhenxin core change) → ci-bot release-tag PR (qwen-code-ci-bot v0.15.6), with the bot-tag emitted **24m34s** after the human triplet's last PR, suggesting a release-cut workflow triggered by the human burst.

This synth promotes all three to candidate status and proposes a **per-repo-class rebound-discharge-mode taxonomy** that refines M-179.G (synth #388 carrier-author-determined disjoint-surface doublet for opencode) by introducing a parallel **per-repo-class rebound-discharge-mode for qwen-code**: the qwen-code rebound mode is a **multi-carrier 5-PR maximal-dispersion quintuplet with sub-minute same-author triplet sub-feature and release-cut signature**, structurally distinct from the opencode rebound mode (carrier-author-determined disjoint-surface doublet, M-179.G) and from the codex rebound mode (stack-squash 5-PR-coalesced single SHA, M-179.D).

## Empirical PR-anchored evidence

### M-180.D sub-minute same-author triplet (yiliang114)

Inter-merge gaps within yiliang114 triplet:
- #3615 `49e462c0` 07:24:18Z → #3618 `23e76ff2` 07:24:47Z: **+29 seconds**
- #3618 `23e76ff2` 07:24:47Z → #3764 `bc322985` 07:25:02Z: **+15 seconds**
- Triplet span 07:24:18Z → 07:25:02Z: **44 seconds** total

The 44-second triplet is among the **tightest same-author triplets** observed in any qwen-code window in the Add.158-180 corpus. The 15-second sub-gap (#3618 → #3764) is a sub-30-second self-merge consecutive-rank emission. Comparison to known same-author tight-cluster events:

- Add.179 etraut-openai #20326 → #20327: **2 seconds** (same-stack `[3/5]` → `[4/5]`, doublet not triplet, shared stack-series anchor)
- Add.179 Brendonovich #25074 → #25077: **4m22s** (disjoint-surface doublet, M-179.G)
- Add.180 yiliang114 #3615 → #3618 → #3764: **44 seconds** triplet, disjoint-surface (lsp / vscode-companion / ci-merge-back-PR)

The yiliang114 triplet is the **first sub-minute same-author triplet on disjoint surfaces** in the Add.158-180 corpus. The etraut-openai 2-second doublet was on a shared stack-series anchor; the yiliang114 triplet is on **3 disjoint surfaces** at sub-minute cadence — a structurally distinct emission pattern.

NEW M-180.D: **sub-minute same-author triplet on disjoint surfaces is a qwen-code-class post-extended-silence rebound emission sub-feature** — distinct from same-stack-series tight-cluster (etraut-openai class) and from disjoint-surface-doublet (M-179.G Brendonovich class). The discriminator is **PR-cardinality (3 vs 2) AND surface-class structure (disjoint without stack anchor)** at sub-minute vs single-digit-minute cadence. Single-instance candidate; promote on next qwen-code post-extended-silence rebound.

### M-180.F maximal-surface-dispersion (5-of-5 disjoint surfaces)

Surface-class enumeration for the qwen-code Add.180 quintuplet:
1. #3615 lsp-document-and-isPathSafe-restriction-fix (language-server-protocol class)
2. #3618 vscode-companion-slash-command-input-flow-fix (vscode-extension UX class)
3. #3764 ci-merge-back-PR-stable-release-workflow (CI infra class)
4. #3727 tool-token-usage-tracking-removal (core-instrumentation class)
5. #3766 release-version-tag-v0.15.6 (release-automation class)

5 PRs, 5 surface classes, **0 within-tick surface recurrences**. The dispersion ratio is 5/5 = 1.0 (maximal). Comparison to multi-PR ticks in Add.158-180:

- Add.179 codex 3 PRs: workspace-plugin-sharing-APIs (xl-openai) + core-protocol-decoupling (etraut-openai #20326) + core-protocol-decoupling (etraut-openai #20327). Dispersion 2/3 ≈ 0.67 (within-tick recurrence on core-protocol-decoupling). Not maximal.
- Add.179 opencode 2 PRs: httpapi-CORS-middleware + server-status-indicator-getter-inversion. Dispersion 2/2 = 1.0 (maximal — but only at n=2).
- Add.177 codex 5 PRs: stack-squash on single core-protocol-decoupling surface. Dispersion 1/5 = 0.20 (minimal).
- Add.176-178 various 1 PR: trivially 1/1 = 1.0.

The qwen-code Add.180 quintuplet is the **first n≥5 maximal-surface-dispersion tick** in the Add.158-180 corpus. NEW M-180.F: **post-extended-silence rebound exhibits maximal-surface-dispersion at qwen-code-class** — the discharge mode is structurally **dispersive, not concentrated** (opposite of stack-squash concentration M-179.D codex-class). Single-instance candidate; promote on next qwen-code post-extended-silence rebound or on cross-repo replication.

### M-180.G release-cut signature

Time-ordered emission within Add.180 qwen-code:
- 07:24:18Z yiliang114 #3615 lsp-doc-fix
- 07:24:47Z yiliang114 #3618 vscode-companion-ux-fix
- 07:25:02Z yiliang114 #3764 ci-merge-back-PR-stable-release-workflow ← **CI infra change for release workflow**
- 07:35:02Z tanzhenxin #3727 tool-token-usage-tracking-removal (10m gap from prior, core change by different author)
- 07:59:36Z qwen-code-ci-bot #3766 chore(release): v0.15.6 ← **automated release tag**, **24m34s** after #3727

The pattern is consistent with a **release-cut workflow**:
1. Human author (yiliang114) lands fixes (lsp-doc + vscode-companion + ci-merge-back-PR-workflow)
2. Different human author (tanzhenxin) lands core change
3. CI bot triggers automated release-tag commit (v0.15.6) within the same window

The **#3764 ci-merge-back-PR-stable-release-workflow** PR is the structurally diagnostic PR — it modifies the release workflow itself, suggesting the release-cut process is being actively maintained at the same tick as the release is being cut. NEW M-180.G: **release-cut signature** = (human-author burst on heterogeneous surfaces including ≥1 release-workflow-related surface) → (different-author core change within ≤15m) → (ci-bot release-tag PR within ≤30m of the core change). The signature is structurally distinguishable from non-release-cut bursts via the **ci-bot release-tag trailing PR** (no other tick in Add.158-180 contains a ci-bot release-tag PR in any tracked repo). Single-instance candidate.

### Per-repo-class rebound-discharge-mode taxonomy

Refining M-179.G (synth #388) into a per-repo-class taxonomy of post-silence rebound discharge modes:

| Repo class | Rebound discharge mode | Cardinality | Carrier structure | Surface structure | Cadence | Reference |
|---|---|---|---|---|---|---|
| opencode | carrier-author-determined disjoint-surface doublet | 2 | single-author | 2 disjoint surfaces | minutes (4m22s) | M-179.G Brendonovich Add.179 |
| codex | stack-squash 5-PR-coalesced single SHA | 5 raw / 1 unique | single-author single-stack | 1 surface 5 PRs | seconds (within-stack) | M-179.D etraut-openai Add.177 |
| codex (alt) | stacked-series sub-3-second consecutive-rank doublet | 2 | single-author single-stack | 1 surface 2 PRs | seconds (2s) | M-179.E etraut-openai Add.179 |
| qwen-code | multi-carrier maximal-dispersion quintuplet with sub-minute same-author triplet sub-feature + release-cut signature | 5 | 3 carriers (1 triplet + 1 singleton + 1 bot) | 5 disjoint surfaces | mixed (44s + 10m + 24m) | M-180.D + M-180.F + M-180.G yiliang114/tanzhenxin/qwen-code-ci-bot Add.180 |

The taxonomy admits **at least 4 distinct rebound discharge modes** across the 3 active repos, with carrier-cardinality, surface-cardinality, surface-disjointness, and cadence as discriminators. NEW M-180.N candidate (this synth): **per-repo-class rebound-discharge-mode taxonomy** — each tracked repo admits at least 1 distinct rebound discharge mode characterized by (carrier-cardinality, surface-cardinality, surface-disjointness, cadence). The discharge mode is structurally tied to the repo's contribution culture (opencode = single maintainer disjoint fixes; codex = stacked refactor or single bursts; qwen-code = multi-contributor maximal-dispersion with release-cut signature). Single-instance per-repo-class taxonomy; promote on next post-silence rebound in any repo to validate the taxonomy.

### Cross-synth interaction

This synth refines synth #388 (M-179.F + M-179.G) and synth #387 (M-179.D + M-179.E). The per-repo-class rebound-discharge-mode taxonomy (M-180.N) **subsumes M-179.G as the opencode-class entry** and **M-179.D / M-179.E as the codex-class entries**. The qwen-code-class entry (M-180.D + M-180.F + M-180.G) is the **first non-opencode non-codex rebound-discharge-mode** entry in the corpus. The taxonomy is consistent with the M-180.K per-repo-tier-threshold-keyed tier-crossing-rebound model (ADDENDUM-180 anomaly #5) — both the rebound-trigger (tier-crossing thresholds) AND the rebound-discharge-mode are **per-repo-class properties**, not universal.

## Predictions (P-390.X)

- **P-390.A**: Add.181 qwen-code emission ∈ [0, 2] at >75% (post-rebound-discharge silence pattern; M-180.I-analog applied to qwen-code; M-180.D triplet has fully discharged the n=5 silence pressure).
- **P-390.B**: M-180.D sub-minute same-author triplet recurrence in any repo at Add.181 at <15% (extreme tight-cluster events are rare; single-instance candidate).
- **P-390.C**: M-180.F maximal-surface-dispersion (n≥5 PRs with surface-dispersion ratio = 1.0) recurrence in any repo at Add.181 at <10% (requires n≥5 multi-PR tick AND maximal dispersion; both conditions independently rare).
- **P-390.D**: M-180.G release-cut signature recurrence in any repo at Add.181 at <15% (release-cut events are weekly/bi-weekly cadence per repo; v0.15.6 release at Add.180 implies next qwen-code release-cut ≥7 days out).
- **P-390.E**: M-180.N per-repo-class rebound-discharge-mode taxonomy entry expansion to litellm-class at Add.181 at >35% conditional on litellm rebound at Add.181 (P-180.E predicts litellm rebound at >55%; the discharge mode of the rebound will populate the litellm-class entry of the taxonomy).
- **P-390.F**: M-180.N per-repo-class rebound-discharge-mode taxonomy entry expansion to gemini-cli-class at Add.181 at >25% conditional on gemini-cli rebound at Add.181 (P-180.F predicts at >35%; if gemini-cli rebounds, its discharge mode populates the taxonomy).
- **P-390.G**: yiliang114 carrier-recurrence in qwen-code at Add.181 at <30% (post-burst silence pattern for the bursting author; the M-180.D triplet exhausts the per-author emission pressure).
- **P-390.H**: cross-repo replication of M-180.D sub-minute triplet at qwen-code-class only at Add.181-185 window at <30% (the sub-minute triplet may be a qwen-code-specific contribution culture artifact, not a universal rebound sub-feature).
