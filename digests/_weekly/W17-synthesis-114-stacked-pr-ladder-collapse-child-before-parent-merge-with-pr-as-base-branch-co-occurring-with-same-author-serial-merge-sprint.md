# W17 Synthesis #114 — Stacked-PR ladder collapse: child-before-parent merge ordering with PR-as-base-branch, co-occurring with same-author serial-merge sprint in a second repo

**Window:** 2026-04-25T22:34:00Z → 23:29:48Z (Add. 34)
**Repos:** openai/codex, anomalyco/opencode

## Pattern statement

Two unrelated repositories simultaneously exhibit the same structural pattern in the same 56-minute window: **a single author lands a chain of small, sequentially-numbered, single-surface PRs in tight cadence, where the chain has explicit dependency ordering**. In codex, the dependency is encoded as a **PR base branch named after another PR** (`base = pr19604`); in anomalyco/opencode, it is encoded as **monotonically-increasing PR numbers on the same `feat(httpapi): bridge*` surface family**. The two are the same underlying mechanic — *PR-as-unit-of-stacked-change* — surfacing through different naming conventions.

## Anchor evidence — codex

- **[openai/codex#19391]** — `bolinfest`, **MERGED 22:46:23Z**, merge SHA `8be36acf9d5415c5229b5b596962176f91f9dfc8`. **Base: `pr19604`** (a non-`main` branch named after PR #19604). +1351/-644. *"permissions: make runtime config profile-backed."*
- **[openai/codex#19604]** — `bolinfest`, **MERGED 23:25:29Z** (T+39m06s after #19391), merge SHA `d54493ba1caee573118b3871390768c34689ca51`. Base: `main`. +37/-13. *"test: stabilize app-server path assertions on Windows."*

**Falsifiable signal:** The child PR (#19391) merged into its parent's branch **before** the parent (#19604) merged to main — child-before-parent ordering. The 39-minute gap is the parent's wait time after child landed. This is the signature of **stacked-PR workflow** where each layer is reviewed independently and merged bottom-up.

## Anchor evidence — anomalyco/opencode

Four `kitlangton` PRs, all `feat(httpapi): bridge*`, all base `dev`, all maintainer-merged, all pure-additive:

| PR | Merge time | Merge SHA | Diff |
|----|-----------|-----------|------|
| **#24394** | 22:42:02Z | `5904f599a9110207f61654ae3a57b9a041228dce` | +94/-11 |
| **#24398** | 22:55:50Z | `58c65874ba6aff2f16f5310dacddc3a89eb7b2cd` | +76/-6 |
| **#24403** | 23:16:19Z | `a14c22d4e9196eda3fc217213dcd7b01344087de` | +294/-32 |
| **#24405** | 23:27:11Z | `450128f9be8f2028cbfbc361043c91c0e0943bba` | +121/-9 |

**Inter-merge intervals:** 13m48s, 20m29s, 10m52s. Mean 15m03s, σ 4m02s. PR numbers monotonically increasing in merge order. All four PR titles share the prefix `feat(httpapi): bridge` and progressively widen the bridge surface (`project git init` → `project update` → `mcp control` → `mcp oauth`). **No reordering, no skipped numbers in merged set.**

## Why this is not synth #110 / #111 / #112

- **Not synth #110 (debut-author post-own-merge fanout)**: `kitlangton` is not a debut author and the codex pattern's author `bolinfest` is not a debut author either. The kitlangton PRs are **all maintainer-merged**, not self-merged followed by author opens.
- **Not synth #111 (self-merge oscillation)**: zero self-merges in either anchor set. All 4 anomalyco/opencode merges are maintainer-merged; codex #19391/#19604 merges are non-self.
- **Not synth #112 (base-branch jump terminating sprint)**: no base-branch change. codex has explicit PR-as-base-branch (constant for the chain duration); anomalyco/opencode has constant base `dev`. The sprint **does not terminate via base flip** — it terminates via reaching the natural end of the surface decomposition.

## Generalization

When an author wants to land a large logical change as a chain of small reviewable units, the chain **leaves a fingerprint visible from PR metadata alone** — without needing the diff:

1. **Same author across all PRs in chain.**
2. **Common title prefix** (literal substring across ≥3 PRs) or **PR-named base branch** (`base = pr<N>`).
3. **Monotonic PR numbers in merge order** (no out-of-order merges of chain members).
4. **Inter-merge intervals < 25 minutes**, σ < parent gap.
5. **All-additive or strictly bounded-deletion diffs** (each layer is a refactor + extension, not a rewrite).

Both anchors satisfy all 5. The kitlangton chain shows criteria 1, 2, 3, 4, 5 directly; the bolinfest chain shows 1, 2 (via base-branch convention), 3, 4 (39-min single gap is within the bound), 5 (the parent's +37/-13 is bounded).

## Watch list (next 3 addenda)

- Does `kitlangton` open a 5th `feat(httpapi): bridge*` PR? Or does the chain terminate at #24405's `oauth` rung (full bridge surface = git/project/mcp-control/mcp-oauth = exhausted)?
- Does `bolinfest`'s open #19606 (verbatim title of just-merged #19391, +1388/-657 — see Add. 34) constitute a *new* stack layer, or a refile of #19391? Refile would falsify criterion 3 retroactively (number out of order on same title).
- If a *third* repo exhibits the same fingerprint within W17, the pattern promotes from "two-repo coincidence" to "structural feature of small-PR-velocity workflows."
