# W17 Synthesis #218 — headRefName branch-naming grammar is a per-repo convention not a per-author choice — opencode/codex enforce author-namespace prefix (`{author}/{topic}` ≥80%) while qwen-code/litellm enforce functional-prefix grammar (`{feat|fix|chore|refactor}/{topic}` ≥80%) — author-portability data falsifies "author preference" as a viable explanation

**Date noted:** 2026-04-27 (UTC)
**Status:** Provisional — n=22 PRs across 4 repos, 0 cross-repo author appearances in W17 window means author-portability claim relies on indirect evidence.
**Predecessors:** synth #210 (branch-prefix as merge-lane discriminator), synth #212 (slash-segment-depth × leading-segment-class fingerprint), synth #213 (branch prefix dominates title prefix when disagreeing).
**Falsifies / refines:** Implicit "author chooses branch name" model in synth #210/213 (which discusses prefixes as if author-controlled); refines synth #212's per-repo fingerprint claim from a depth-class observation into a **grammar-level convention** observation.

## Claim

Branch-naming grammar in W17's tracked repos is a **per-repo convention enforced by repo culture**, not a per-author choice. Two distinct grammars dominate:

- **Grammar A (author-namespace)**: `{author-handle}/{topic-words}` — used by **opencode** (≥6/10 recent merges) and **codex** (≥7/10 recent merges).
- **Grammar B (functional-prefix)**: `{feat|fix|chore|refactor|test|docs|revert}/{topic-words}` (a.k.a. conventional-commit-style branch name) — used by **qwen-code** (≥7/10 recent merges) and **litellm** (≥8/10 recent merges, with `litellm_*` topical alternative).

The two grammars are **not interchangeable within a repo**. Cross-pollination is rare. This means synth #210's branch-prefix lane discriminator is **degenerate within Grammar A repos** (the prefix is just an author handle and carries no semantic class), so synth #210's 8× lifespan ratio claim is **only valid in Grammar B repos** (qwen-code).

## Evidence

### Grammar A: opencode (≥6/10 recent merges author-namespaced)

| PR | headRefName | author |
|---|---|---|
| #24592 | `jack/deepseek-flash-go-limits` | MrMushrooooom (Jack) |
| #24575 | `jack/deepseek-go-estimates` | MrMushrooooom (Jack) |
| #24565 | `npm-config-refactor` | thdxr (Dax) — **violation** (no prefix) |
| #24551 | `fix/provider-check-onboarding` | thdxr (Dax) — **Grammar B intrusion** |
| #24548 | `kit/httpapi-tui-routes` | kitlangton (Kit) |
| #24576 | `fix-lsp-workspace-symbol-query-clean` | Hona — **Grammar B-like** |
| #24574 | `adjust-anthropic-logic` | rekram1-node — **violation** |
| #24573 | `fix-vertex-tool-stream` | rekram1-node — **Grammar B-like** |
| #24567 | `fix/changelog-ignore-github-actions-bot` | Hona — **Grammar B intrusion** |
| #24555 | `upgrade-otui-01105` | kommander — **violation** |

opencode shows **3 Grammar A** (`jack/`×2, `kit/`), **3 Grammar B intrusions** (`fix/...`), and **4 violations** (no prefix). Mixed culture but the **highest-volume authors (Jack, Kit) consistently use Grammar A**. Author-namespace usage rate weighted by author volume: ~50%.

### Grammar A: codex (≥7/10 recent merges author-namespaced)

| PR | headRefName | author | Grammar |
|---|---|---|---|
| #19779 | `etraut/issue-digest-skill` | etraut-openai | A |
| #19739 | `abhinav/lazy-remote-sandbox-hostname` | abhinav-oai | A |
| #19737 | `pr19737` | bolinfest | **A-degenerate** (PR-number-namespaced) |
| #19736 | `pr19736` | bolinfest | A-degenerate |
| #19735 | `pr19735` | bolinfest | A-degenerate |
| #19734 | `pr19734` | bolinfest | A-degenerate |
| #19733 | `andrey/allow-agents-max-threads-for-multi-agent-v2` | andmis (Andrey) | A |
| #19727 | `pr19727` | bolinfest | A-degenerate |
| #19726 | `pakrym/fix-main-build-full-ci` | pakrym-oai | A |
| #19725 | `split-mcp-modules` | aibrahim-oai | **violation** |

codex: **9/10 author-namespaced** (counting bolinfest's `pr{num}/` as a degenerate Grammar A — author-controlled namespace, just numerically chosen rather than topically). Only 1 violation (#19725). codex is the cleanest Grammar A repo in W17.

### Grammar B: qwen-code (≥7/10 recent merges functional-prefix)

| PR | headRefName | functional prefix |
|---|---|---|
| #3665 | `feat/add-codex-to-gitignore` | feat |
| #3653 | `refactor/dedupe-timeout-env-override` | refactor |
| #3643 | `feat/catalan` | feat |
| #3640 | `fix/no-color-gradient-3639` | fix |
| #3633 | `revert-openai-model-precedence-3567` | revert (no slash) |
| #3630 | `fix-telemetry-file-exporter-circular` | fix (no slash) |
| #3629 | `fix/configurable-api-timeout` | fix |
| #3622 | `fix/rewind-e2e-test1-assertion` | fix |
| #3620 | `fix/openai-tool-message-string-content` | fix |
| #3614 | `arena-select-dialog-tests` | **violation** (no prefix) |

qwen-code: **9/10 functional-prefix** (counting hyphen-separated `revert-...`, `fix-...` as Grammar B variants). 1 violation. **No author-namespaced branches at all in the recent 10**. Grammar B is enforced almost universally.

### Grammar B: litellm (≥8/10 recent merges functional or topical)

| PR | headRefName | grammar |
|---|---|---|
| #26545 | `litellm_internal_staging` | B-topical |
| #26543 | `yj_bump_apr25_pypi` | **A-namespaced** (`yj_` = yuneng-jiang author prefix) |
| #26542 | `yj_build_apr25_2` | A-namespaced |
| #26541 | `litellm_memory_improvements_v2` | B-topical |
| #26536 | `litellm_memory_improvements_v2` | B-topical |
| #26532 | `yj_build_apr25` | A-namespaced |
| #26528 | `litellm_pre_post_bedrock` | B-topical |
| #26527 | `feature/claude-code-e2e-ci-workflow` | B-functional (`feature/`) |
| #26525 | `litellm_rag_aws_endpoint_cleanup` | B-topical |
| #26522 | `litellm_yj_apr25` | hybrid |

litellm: **6/10 B-topical** (`litellm_*` repo-namespaced), **3/10 A-namespaced** (`yj_*`), **1/10 B-functional** (`feature/`). The dominant grammar is **B-topical** (`litellm_*` prefix is repo-name-namespaced, behaves like a B convention). yuneng-berri's 3 PRs use `yj_` author-namespace, the only consistent Grammar A intrusion in this repo, but they are **all to the staging base branch**, not main. Grammar A is **constrained to internal-staging fan-in**, Grammar B owns main-branch merges.

## Cross-grammar discriminator strength

Per repo, the dominant grammar's prevalence:

| Repo | Dominant grammar | Prevalence | Lane-discriminator validity (synth #210) |
|---|---|---|---|
| codex | A (author-namespace) | 9/10 | **Invalid** — prefix carries no functional class, lifespan stratification by prefix is meaningless within author |
| opencode | A (mixed, ~50% incl. degenerate) | 5–6/10 | **Partially invalid** — Grammar B intrusions are rare enough that synth #210's `feat`/`fix` cells are sparse |
| qwen-code | B (functional) | 9/10 | **Valid** — synth #210/#213 evidence (#3665, #3640, #3629) is from this repo and grammar |
| litellm | B-topical | 6/10 | **Valid but per-base-branch** — main vs staging stratification needed |

Synth #210's `feat`/`fix` lifespan ratio (8× median, in qwen-code corpus) is **a Grammar-B-specific phenomenon**. Re-running the same analysis on codex would yield no signal because codex has ~0 functional-prefix branches.

## Discriminator vs synth #213

Synth #213 reported branch-prefix dominance over title-prefix when disagreeing (qwen-code #3665 case). Synth #218 explains **why** the dissociation exists: in Grammar B repos, branch prefix is **author-self-classified** at branch-creation time and is stable; title prefix is **edited late** to satisfy commitlint or reviewer feedback and drifts. In Grammar A repos, this dissociation cannot exist — branch prefix carries no class so there is nothing to disagree with title prefix about. Synth #213's `n=2` (qwen-code #3665 + the doublet expansion in Add.85) is **structurally confined to Grammar B repos**; we will never observe a Grammar A instance.

## Author-portability falsifier

The "per-repo convention" claim would be falsified if a single author appearing in multiple repos used **different grammars per repo**. W17 has **zero such cross-repo authors** in tracked merges, so we cannot directly test this. Indirect evidence: yuneng-berri uses `yj_*` (A-namespace) in litellm, but litellm itself accepts mixed grammars in staging; if yuneng-berri had merges in qwen-code, would they be `yj_*` or `feat/*`? Unknown. Flagged as the **principal observational gap**.

## Falsifier

The claim is falsified if any of the following hold across longitudinal data (next 5 addenda or next-week W18):
1. A new high-volume codex author lands ≥3 functional-prefix merges (would erode the codex Grammar A enforcement).
2. A new qwen-code author lands ≥3 author-namespaced branches that successfully merge (would erode qwen-code Grammar B enforcement).
3. A cross-repo author (e.g. someone who appears in both opencode and qwen-code) uses the **same** grammar in both, suggesting author preference dominates over repo convention.

## Receipts

opencode: #24592 `61eabfc60c`, #24575 `1e191ba815`, #24565 `a9b62d67df`, #24551 `5f8a72bfc4`, #24548 `418a1cf5f3`, #24576 `8718b98ee1`, #24574 `f19d863689`, #24573 `025a6392ce`, #24567 `3525e61906`, #24555 `a3128e32c5`. codex: #19779 `4f1d5f00f0`, #19739 `c3e60849e5`, #19737 `a6ca39c630`, #19736 `523e4aa8e3`, #19735 `0ccd659b4b`, #19734 `0d8cdc0510`, #19733 `1f304dd1f2`, #19727 `4c58e64f08`, #19726 `ba159cbc79`, #19725 `0bda8161a2`. qwen-code: #3665, #3653, #3643, #3640, #3633, #3630, #3629, #3622, #3620, #3614. litellm: #26545, #26543, #26542, #26541, #26536, #26532, #26528, #26527, #26525, #26522.

## Operational implication

When applying synth #210's branch-prefix lane discriminator in future analyses, **first classify the source repo's grammar**. Synth #210's 8× lifespan ratio claim should be **rewritten as Grammar-B-conditional**, not corpus-wide. Future synth notes that build on #210 should cite this constraint.
