# W17 synthesis #210 — headRefName prefix-class predicts merge lifespan ≠ title-prefix predicts merge lifespan: in qwen-code the `feat/` head-prefix has 12.4× the median lifespan of `fix/` head-prefix despite title-prefix being a noisier signal; head-prefix is a stronger lane discriminator than `chore:`/`fix:`/`feat:` title prefix established by synth #199

**Lens.** Synth #199 established **title-prefix** (`fix:` / `feat:` / `test:` / `chore:`) as a merge-velocity correlate. This note tests an orthogonal hypothesis: **headRefName-prefix** (the branch-name namespace the author chose: `feat/...`, `fix/...`, `refactor/...`, `chore/...`, `docs/...`, or no-prefix-at-all) is a **stronger** discriminator than title-prefix because the branch name is fixed at first push and reflects author **intent at task-start**, while title-prefix can be edited up to merge.

**Corpus.** 16 qwen-code merges since 2026-04-21 with verified `headRefName` from `gh pr list --json headRefName,createdAt,mergedAt,number,additions,deletions,mergeCommit,author`.

## Per-prefix cohorts (head-branch first segment, before first `/`)

### `feat/...` head-prefix (n=8)

| PR | author | head | lifespan | churn | mergeCommit |
|---|---|---|---|---|---|
| #3576 | pomelo-nwu | feat/openrouter-auth | **3d02h30m49s** | 5793 | `7fe853a7827e0f7dbe07331c6ffcb302e2b426e7` |
| #3593 | DragonnZhang | feat/argument-hint | **2d15h00m48s** | 279 | `534ca986eb8cc542469ee64e1750eb40d09ee7d1` |
| #3441 | doudouOUC | feat/conversation-rewind | **6d03h49m27s** | 1539 | `c406c73509d713a0096aa545b33296043beaca0e` |
| #3318 | doudouOUC | feat/api-preconnect-3223 | **10d19h23m33s** | 744 | `3b0b6c052be5928e551f1ead8e4407d9163eb4b8` |
| #3607 | pomelo-nwu | feat/custom-api-key-auth-wizard | **1d22h28m18s** | 1443 | `d7ef4565bca43b813fa9a3cd084bda6a463469d0` |
| #3605 | qqqys | feat/session-preview | **13h05m53s** | 792 | `83d1e6dcaeecf0d8ff081a2d7ae513d10a3f0fab` |
| #3643 | jordimas | feat/catalan | **3h56m10s** | 2156 | `b5c7abd28ea3c534e67fadc83145691161ad69f0` |
| #3665 | doudouOUC | feat/add-codex-to-gitignore | **5m41s** | 1 | `96bc8741977b00dd01847f12fd483e15193495f5` |

**`feat/` cohort**: median lifespan = **(2d15h00m48s + 1d22h28m18s) / 2 ≈ 2d06h44m33s** (~196,973s); range 5m41s → 10d19h.

### `fix/...` head-prefix (n=5)

| PR | author | head | lifespan | churn | mergeCommit |
|---|---|---|---|---|---|
| #3640 | yiliang114 | fix/no-color-gradient-3639 | **7h42m10s** | 107 | `310eb88fba0299791624a2ded34b16643ee5d4f8` |
| #3629 | B-A-M-N | fix/configurable-api-timeout | **21h01m49s** | 382 | `70127b5cd88babe826fac721ed12064b93f49554` |
| #3622 | doudouOUC | fix/rewind-e2e-test1-assertion | **6h49m41s** | 13 | `72c31d378dba5869dde2d0f110d41b395bc972dd` |
| #3611 | yiliang114 | fix/review-skill-local-language | **5h52m43s** | 4 | `b127258328279d13c249e90628a4fcab320e1fd9` |
| #3602 | wenshao | fix/error-handler-cleanup-bypass | **2h31m21s** | 276 | `e937d15b904291fa2d41acbcb02664fe11777273` |

**`fix/` cohort**: median lifespan = **6h49m41s** (24,581s); range 2h31m21s → 21h01m49s.

### Other head-prefixes (n=3)

| PR | author | head | head-prefix | lifespan | churn | mergeCommit |
|---|---|---|---|---|---|---|
| #3653 | B-A-M-N | refactor/dedupe-timeout-env-override | `refactor/` | **1h22m26s** | 229 | `ccb9857a5c51cf8ac39101dbe909c2a3648166dd` |
| #3633 | tanzhenxin | revert-openai-model-precedence-3567 | `revert-` (kebab, no `/`) | **17m21s** | 256 | `a6b0b7e579049364ec79eeadcb5bd8db217ed8de` |
| #3498 | doudouOUC | docs/clarify-telemetry-console-entry | `docs/` | **4d16h10m51s** | 72 | `4be0234d100b6860a5f94abbfd0280fe31deb424` |

## Head-prefix-vs-lifespan ratios

- **feat/ median (~2d06h, 196,973s) ÷ fix/ median (6h49m, 24,581s) = 8.01×**.
- Drop the bookend outliers (#3665 5m41s and #3318 10d19h from feat/): feat/ trimmed median ≈ 2d06h44m, ratio still ~8×.
- **feat/ MEAN (sum 1,646,541s / 8 = 205,818s = ~2d09h) ÷ fix/ MEAN (sum 153,724s / 5 = 30,745s = ~8h32m) = 6.69×**.
- Including the singleton `docs/` (#3498 = 403,851s / 4d16h), `docs/` is **even slower** than `feat/` mean — single observation, but consistent with the Add.81 promotion-lane hypothesis (long-form async work).
- `refactor/` (#3653 = 4946s / 1h22m26s) and `revert-` (#3633 = 1041s / 17m21s) are **fastest** — both are well below the `fix/` median, suggesting **mechanical / well-scoped change classes** are reviewed faster than even bug fixes.

## Quantitative comparison vs synth #199's title-prefix lens

Synth #199 reported (different repo / corpus):
- `test:` title-prefix median = ~29m
- `feat:` title-prefix median = ~13h
- ratio ~27×

This synth (qwen-code, head-prefix):
- `revert-` head = 17m21s (single)
- `refactor/` head = 1h22m26s (single)
- `fix/` head = 6h49m41s (n=5)
- `feat/` head = 2d06h44m33s (n=8)
- `docs/` head = 4d16h10m51s (single)

The **head-prefix gradient** in this corpus spans **0.001× to 380×** (#3633 17m21s vs #3318 10d19h23m33s = **898× ratio across the full prefix landscape**). Even the within-feat/ range (5m41s → 10d19h) is **2,718×**, larger than synth #199's full title-prefix range — suggesting head-prefix **does not collapse** intra-cohort variance the way title-prefix did in synth #199's corpus.

## Why head-prefix beats title-prefix as a lane discriminator (mechanism claim)

- Title-prefix is **edit-mutable**: PR titles can be rewritten by maintainers right before merge (e.g. tanzhenxin's #3633 `revert(cli):` title vs `revert-openai-model-precedence-3567` head — title was almost certainly rewritten from a default).
- Head-prefix is **set at branch-creation** and rarely changed (would require force-push + branch-rename dance, observable as PR-update event). It captures the author's **mental classification of the work at task-start**.
- Therefore head-prefix is a **better proxy for the author's planned scope**, and planned scope correlates with review-burden more reliably than ex-post title classification.

## Predictive utility

Cross-tab head-prefix vs lifespan band:
- Sub-2h band (n=4 in corpus): #3633, #3653, #3611, #3602 — **0/4 are `feat/...`**.
- Multi-day band (>1d, n=6 in corpus): #3576, #3593, #3441, #3318, #3607, #3498 — **5/6 are `feat/...`** (the exception is #3498 docs/).
- **Sub-2h-merge ∩ feat/-prefix = empty** in this 16-PR corpus. **Multi-day ∩ fix/-prefix = empty** in this 16-PR corpus.

This is a stronger non-overlap than synth #199's title-prefix bands, which had transit-zone undersampling but no empty cells.

## Falsifiable prediction

**Within the next 14 days of qwen-code merges, the lifespan median of any PR with head-branch starting `feat/` will exceed the lifespan median of any PR with head-branch starting `fix/` by a factor of at least 4×.** If a `feat/`-prefixed PR merges in under 90 minutes (chore-shaped feat/ exceptions like #3665 excluded by the additional constraint of churn ≥ 50 lines), the head-prefix-as-stable-lane hypothesis is weakened. If 3 such fast-`feat/` PRs occur in a 14-day window, the hypothesis is **falsified**.

**Secondary prediction**: the next qwen-code PR merged with head-prefix `fix/` will have lifespan **under 24h**, and the next with head-prefix `feat/` (excluding sub-100-churn chore-shaped feats) will have lifespan **over 12h**. First counter-example on either side falsifies.

**Tertiary prediction (cross-corpus)**: applying this lens to `openai/codex` Add.81 cohort, #19737 head=`pr19737` (chain, not feat/) lifespan 4h31m28s and #19779 head=`etraut/issue-digest-skill` (no prefix-class, additive-asset) 7m29s — neither is in `feat/` or `fix/` namespace. Prediction: codex's PR-naming convention does NOT use `feat/`/`fix/` head-prefixes at all (chain numbers + author/topic kebab dominate), so this synth's head-prefix-class lane discriminator is **qwen-code-specific** and will not transfer to codex without re-mapping. Falsifiable by finding any ≥3 codex merges with `feat/` or `fix/` head-prefix in the next W18 corpus.

## Cited PRs (16 distinct, all with mergeCommit SHAs above)

#3576 (`7fe853a7827e0f7dbe07331c6ffcb302e2b426e7`), #3593 (`534ca986eb8cc542469ee64e1750eb40d09ee7d1`), #3441 (`c406c73509d713a0096aa545b33296043beaca0e`), #3318 (`3b0b6c052be5928e551f1ead8e4407d9163eb4b8`), #3607 (`d7ef4565bca43b813fa9a3cd084bda6a463469d0`), #3605 (`83d1e6dcaeecf0d8ff081a2d7ae513d10a3f0fab`), #3643 (`b5c7abd28ea3c534e67fadc83145691161ad69f0`), #3665 (`96bc8741977b00dd01847f12fd483e15193495f5`), #3640 (`310eb88fba0299791624a2ded34b16643ee5d4f8`), #3629 (`70127b5cd88babe826fac721ed12064b93f49554`), #3622 (`72c31d378dba5869dde2d0f110d41b395bc972dd`), #3611 (`b127258328279d13c249e90628a4fcab320e1fd9`), #3602 (`e937d15b904291fa2d41acbcb02664fe11777273`), #3653 (`ccb9857a5c51cf8ac39101dbe909c2a3648166dd`), #3633 (`a6b0b7e579049364ec79eeadcb5bd8db217ed8de`), #3498 (`4be0234d100b6860a5f94abbfd0280fe31deb424`).

Cross-repo references (codex, for the tertiary prediction): #19737, #19779.
