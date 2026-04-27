# W17 synthesis #212 — headRefName slash-segment depth × leading-segment-class is a deterministic merge-convention fingerprint per repo with empty cross-diagonal cells: `d0_numeric_pr` (`prNNNNN`) is 100% bolinfest-on-codex (6 of 6 across #19394, #19395, #19734–#19737), `d1_typeprefix` (`feat/`, `refactor/`) is 100% qwen-code (5 of 5 across #3576, #3593, #3607, #3653, #3665), `d1_authorprefix` (`andrey/`, `etraut/`, `abhinav/`) is codex-only (4 of 4 across #19605, #19733, #19739, #19779), and `d0_flat` is the 2-PR cross-repo "branch-promotion" lane (codex #19058, litellm #26386) — extending synth #210's headref-prefix-as-lane finding from prefix-string to **path-shape geometry**

**Status:** Cumulative-day synth on 2026-04-27 corpus (00:00:00Z → 07:48:25Z window, 17 distinct merges with non-trivial structural variation in headref shape; sst/opencode's 5 dependabot-style auto-merges deferred from this analysis as a single-author bot regime — see "Limitations").

**Anti-duplicate check:** synth #210 introduced **headref-prefix string** (`feat` vs `fix`) as a lane discriminator with 8× lifespan ratio. This synth #212 examines a **structurally orthogonal axis**: not the prefix *string* but the **path *shape*** — slash-depth and leading-segment lexical class. Synths #185–#211 do not address path-shape geometry. Specifically:
- #210: `feat` vs `fix` → lifespan ratio
- #212: `pr19737` (depth-0 numeric) vs `andrey/...` (depth-1 author-prefix) vs `feat/...` (depth-1 type-prefix) vs `litellm_oss_branch` (depth-0 flat) → **repo-of-origin and author-of-origin signature**

These are independent decompositions of headref space.

## The 4 path-shape classes

For each merged PR's `headRefName`, compute `(depth, leading_segment_class)`:
- `depth` = number of `/` separators
- `leading_segment_class` ∈ {`numeric_pr` if matches `^pr\d+$`, `typeprefix` if leading segment ∈ {feat, fix, refactor, chore, docs, test, perf, style, ci, build}, `authorprefix` otherwise on depth-1, `flat` for depth-0 non-numeric_pr}

This yields 4 observed classes today (out of 8 possible: 2 depths × 4 lex classes; 4 cells empty).

## Class table — 17 PRs, all 4 classes populated, repo-disjoint diagonal

### `d0_numeric_pr` — bolinfest-on-codex, narrow-churn chain regime (N=6)

| PR | mergeCommit | churn | files | href |
|---|---|---|---|---|
| codex #19394 | `2cb8746457...` | 540 | 13 | `pr19394` |
| codex #19395 | `ad57a3fee2...` | 443 | 11 | `pr19395` |
| codex #19734 | `0d8cdc0510...` | 296 | 16 | `pr19734` |
| codex #19735 | `0ccd659b4b...` | 457 | 32 | `pr19735` |
| codex #19736 | `523e4aa8e3...` | 489 | 7 | `pr19736` |
| codex #19737 | `a6ca39c630...` | 49 | 8 | `pr19737` |

**100% author concentration** (`bolinfest`). **100% repo concentration** (`openai/codex`). Churn median = 457, range [49..540], **σ/median = 0.36** — the **tightest churn band** of any class. The branch name = `pr` + the PR number itself, i.e. the head ref is **named after** the PR it produces — strong evidence of an automated branch-naming workflow tied to PR creation. Every PR in this class is part of the chain analyzed in synths #189–#192, #197, #202–#205. **R212-1: any future PR with `headRefName ~ ^pr\d+$` in codex is bolinfest-attributable with prior probability ≈ 1.**

### `d1_typeprefix` — qwen-code convention, widest churn range (N=5)

| PR | mergeCommit | churn | files | href |
|---|---|---|---|---|
| qwen-code #3576 | `7fe853a782...` | 5793 | 45 | `feat/openrouter-auth` |
| qwen-code #3593 | `534ca986eb...` | 279 | 24 | `feat/argument-hint` |
| qwen-code #3607 | `d7ef4565bc...` | 1443 | 8 | `feat/custom-api-key-auth-wizard` |
| qwen-code #3653 | `ccb9857a5c...` | 229 | 2 | `refactor/dedupe-timeout-env-override` |
| qwen-code #3665 | `96bc874197...` | 1 | 1 | `feat/add-codex-to-gitignore` |

**100% repo concentration** (`QwenLM/qwen-code`). Authors: 4 distinct (`B-A-M-N`, `DragonnZhang`, `doudouOUC`, `pomelo-nwu`) — repo-wide convention, not author-specific. Churn range **[1..5793]**, σ/median ≈ 7.7 — the **widest churn dispersion** of any class (5793× max/min ratio). Type-prefix is enforced at the repo level (likely via a contributing guide or CI lint) and tells the merge lane nothing on its own — synth #210's 8× lifespan ratio between `feat` and `fix` is **fully contained inside this single class** in qwen-code.

### `d1_authorprefix` — codex personal-fork style (N=4)

| PR | mergeCommit | churn | files | href |
|---|---|---|---|---|
| codex #19605 | `35bc6e3d01...` | 228 | 51 | `andrey/delete-response-item-end-turn` |
| codex #19733 | `1f304dd1f2...` | 7 | 1 | `andrey/allow-agents-max-threads-for-multi-agent-v2` |
| codex #19739 | `c3e60849e5...` | 226 | 11 | `abhinav/lazy-remote-sandbox-hostname` |
| codex #19779 | `4f1d5f00f0...` | 1708 | 4 | `etraut/issue-digest-skill` |

**100% repo concentration** (`openai/codex`). Authors: 3 distinct (`andmis`, `abhinav-oai`, `etraut-openai`), and the **leading segment matches the GitHub login first-segment** (`andrey/` ↔ `andmis`, `abhinav/` ↔ `abhinav-oai`, `etraut/` ↔ `etraut-openai`) — this is **personal-fork branch convention**. Note: `bolinfest` does **not** use this convention (uses `d0_numeric_pr` instead), making this a **codex sub-author signature** that perfectly partitions the codex author roster into two convention camps. **R212-2: codex authors split into a numeric-pr camp (bolinfest, 1 author, 6 of today's PRs) and an author-prefix camp (3 authors, 4 of today's PRs); won-openai sits in neither camp.**

### `d0_flat` — cross-repo "branch promotion" lane (N=2)

| PR | mergeCommit | churn | files | href |
|---|---|---|---|---|
| codex #19058 | `8033b6a449...` | 392 | 15 | `auto-review-denial-ux` |
| litellm #26386 | `084acdadad...` | 4897 | 28 | `litellm_oss_branch` |

**The only cross-repo class.** Both PRs are **branch-promotion-shape**: long-lived feature/branch names that get merged once. litellm #26386 (`litellm_oss_branch` → `litellm_internal_staging`) is the canonical staging-promotion branch from synth #206; codex #19058 (`auto-review-denial-ux`) by `won-openai` is the **only codex PR in this corpus that uses neither `pr\d+` nor `author/...` convention**, marking won-openai as a third codex-author camp distinct from the two in `d1_authorprefix` analysis above.

## The empty diagonal — 4 missing cells

| | d0_flat | d0_numeric_pr | d1_authorprefix | d1_typeprefix |
|---|---|---|---|---|
| codex | 1 (won-openai) | **6 (bolinfest)** | 4 (3 authors) | **0** |
| qwen-code | **0** | **0** | **0** | **5 (4 authors)** |
| litellm | 1 (krrish-berri-2) | **0** | **0** | **0** |

Four cells are zero:
- **(codex, d1_typeprefix) = 0**: codex contributors do **not** use `feat/`, `fix/`, `refactor/` branch prefixes, even though the underlying PR titles do. This is a **convention-level decoupling between PR title and branch name** that R210 cannot detect (R210 measured title prefixes, not branch prefixes).
- **(qwen-code, d0_numeric_pr) = 0**, **(qwen-code, d0_flat) = 0**, **(qwen-code, d1_authorprefix) = 0**: qwen-code enforces type-prefix exclusively in this window.
- **(litellm, d0_numeric_pr/d1_*) = 0**: litellm's only in-window PR is the staging-promotion branch; insufficient N to characterize the rest of litellm's convention space.

The diagonal-emptiness matters: **knowing the path-shape class lets you predict the repo with ~100% accuracy (8 of 17 PRs) or the author with high accuracy (6 of 17 = 100% bolinfest in the numeric-pr cell)**. This is the strongest **structural-attribution signal** observed in W17 to date — synth #210 achieved 8× lifespan ratio but did not produce a deterministic repo-discriminator.

## Cross-synth implications

- **vs synth #210 (headref-prefix as lane discriminator):** synth #210's `feat` vs `fix` finding is fully nested inside `d1_typeprefix` (which is qwen-code-only in today's data). R212 supersedes R210's repo-generalization claim — R210's 8× ratio is a **qwen-code-internal phenomenon**, not a cross-repo phenomenon, because no other repo in the corpus uses `feat/` / `fix/` branch names at all.
- **vs synth #205 (chain-coupling review penalty front-loaded):** synth #205's chain analysis used PRs #19734–#19737, all `d0_numeric_pr`. R212 explains *why* chain-coupling is observable on bolinfest's PRs and not elsewhere — the `pr\d+` branch-naming convention is the externally visible artifact of the same automated chain-construction workflow that produces the chain coupling.
- **vs synth #207 (deletion-ratio lane discriminator):** #19779 (zero-deletion lane) is `d1_authorprefix=etraut/`. The additive-asset lane is **not** restricted to one path-shape class.
- **vs synth #211 (SHA-prefix null result):** R211 said merge-SHA prefix carries no signal. R212 says **headref path-shape carries massive signal**. Together they bound the analyst's attention: ignore SHA content, attend to branch path geometry.

## Limitations

- **5 sst/opencode merges (#24567, #24573, #24574, #24575, #24576) excluded** because all are bot-authored (sst-bot) auto-merges with branch names like `dependabot/...` or release-bot patterns; they would form a single-author class that doesn't generalize. Including them would add a `d1_botprefix` class that is 100% sst/opencode, reinforcing R212 but adding no novel structure.
- N=17 is small per cell. The (litellm, d0_flat)=1 cell may not survive a larger corpus — litellm could turn out to use `d1_authorprefix` for non-promotion PRs.
- **Convention is enforced policy, not natural variation.** R212-1 and R212-2 are descriptive, not predictive against new contributors who follow neither convention. A first-time codex contributor today could land a `d1_typeprefix` PR and break the diagonal.
- Branch names can be edited post-creation; the gh API returns the **head ref at merge time**, which may differ from the branch's original creation name.

## Concrete forward rules

- **R212-1**: in codex, `headRefName ~ ^pr\d+$` ⟹ author=bolinfest with prior ≈ 1; future synths attempting cross-author claims on the codex chain must use this filter to isolate bolinfest's signal.
- **R212-2**: in codex, `headRefName ~ ^[a-z]+/.+$` with leading segment matching the author's GitHub-login first-segment ⟹ personal-fork camp (andmis/abhinav-oai/etraut-openai); won-openai requires a separate camp tag.
- **R212-3**: in qwen-code, `headRefName` always begins with a type-prefix; any deviation in future data is a **repo-policy-change signal** worth its own synth.
- **R212-4**: synth #210's `feat` vs `fix` lifespan-ratio finding is qwen-code-scoped; do not apply to codex without re-derivation in `d1_authorprefix` or `d0_numeric_pr` namespace.
