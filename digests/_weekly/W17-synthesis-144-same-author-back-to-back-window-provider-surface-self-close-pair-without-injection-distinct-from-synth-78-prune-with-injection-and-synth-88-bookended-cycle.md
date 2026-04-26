# W17 Synthesis #144 — Same-author back-to-back-window provider-surface self-close pair without injection: a backlog-prune signature distinct from synth #78 and synth #88

**Status (Add.49):** New angle. Names a self-close cohort pattern not covered by prior W17 synths #78 (backlog-prune-with-fresh-injection), #88 (aged self-close pair bookending fresh surface open-merge cycle), or #66 (opencode self-close pattern surface-agnostic and time-bimodal).

## Anchor evidence

Two consecutive addenda on `anomalyco/opencode` (the `dev` base branch) record a self-close from the same author on the same surface family:

| addendum | pr | author | base | created | closed | lifespan | title | files | +/− |
|---|---|---|---|---|---|---|---|---|---|
| Add.48 | **#24384** | `pascalandr` | `dev` | 2026-04-25T20:16:56Z | **2026-04-26T07:30:04Z** | **11h13m08s** | `fix(provider): respect configured output limit` | 2 | +39/−1 |
| Add.49 | **#24364** | `pascalandr` | `dev` | 2026-04-25T18:34:09Z | **2026-04-26T07:50:03Z** | **13h15m54s** | `fix(provider): reject unsupported image mime types` | 2 | +52/−0 |

Inter-close gap: 07:30:04Z → 07:50:03Z = **19m59s**.

Both are:

- **author-self-closed** (`pascalandr` is the PR author and the closing actor in both cases — verified via `gh pr view --json author,closedAt`)
- **on the `dev` base branch** of `anomalyco/opencode`
- **`fix(provider):`-prefixed** — same conventional-commit subsystem prefix
- **+0 deletions** on the smaller of the two (#24364 has zero deletions; #24384 has one) — i.e., both are pure-addition fix PRs touching ≤2 files
- **aged 11–13 hours at close** — sub-day lifespan, neither is a long-tail prune
- **closed without any merge or rejection comment visible at PR-list level** (state transition `OPEN → CLOSED` with `mergedAt: null`)

## Negative co-occurrence

Within Add.48 and Add.49 windows (07:13:31Z → 08:45:37Z, 1h32m06s combined), `pascalandr` did **not** open any new PR on `anomalyco/opencode`. The author has one pre-existing open PR on the repo:

- **#24374** `fix(sdk): load cross-spawn through require` (created 2026-04-25T19:36:34Z, +8/−2, 2 files, head `51d412e7`) — bumped at 08:39:24Z within Add.49 window, **head SHA unchanged**, so this is a metadata-only `updatedAt` advance, not a content push.

So the author's activity profile across Add.48+Add.49 is:

- **2 self-closes** (`#24384`, `#24364`)
- **0 self-opens**
- **0 content pushes** (the one bump on `#24374` is metadata-only)
- **0 merges**

This is a **pure subtractive activity profile** over a 1h32m span on a single repo+base.

## Why this is distinct from prior W17 synths

### vs. synth #78 (single-author backlog prune with fresh open injection)

Synth #78 named the pattern: "single-author backlog prune with fresh-open injection" — author closes one or more aged PRs *and within the same window* opens a fresh PR on a new surface. The fresh open is the diagnostic signal that the author is *re-tasking*, not retreating.

The Add.48+Add.49 `pascalandr` pair has **no fresh open**. The author is closing without re-tasking — at least, not with a new PR. This could be (a) a private-branch retreat (work continues off-PR), (b) genuine abandonment, or (c) the author sees both PRs as superseded by `#24374` `fix(sdk):` (which lives in a different subsystem — `sdk`, not `provider` — so this is unlikely to be a direct supersession).

### vs. synth #88 (aged self-close pair bookending fresh surface open-merge cycle)

Synth #88 required an **enclosed open-merge cycle** between the two self-closes — the close-open-merge-close pattern. The Add.48+Add.49 pair has *only* the two closes. There is no merge between them (the entire 1h32m span is part of the third-consecutive zero-merge window — synth #143's evidence base). Synth #88's bookending diagnostic does not apply.

### vs. synth #66 (opencode self-close pattern surface-agnostic and time-bimodal)

Synth #66 declared the opencode self-close population to be **surface-agnostic** (closes happen across all surface families with no concentration) and **time-bimodal** (sub-15-minute fast-abandon mode and slow-stabilize mode separated by a gap). The Add.48+Add.49 pair is **surface-concentrated** — both PRs are `fix(provider):` on `dev`, and both touch the **provider-input/output validation** area (output-limit respect on #24384, mime-type rejection on #24364). Two of two is a small sample, but it is a 100% concentration on one surface family within one author's prune set.

The lifespans (11h13m and 13h15m) **do not fit either bimodal mode** of synth #66:

- Synth #59/#60 fast-abandon mode: ≤15 minutes
- Synth #66 slow-stabilize mode: typically multi-day to multi-week aged

11–13h is the **trough between modes** — too aged to be a flake-firewall close, too fresh to be a long-tail abandonment. This is a third lifespan band that synth #66's bimodality did not predict.

## Mechanistic reading

The signature is consistent with **author-side scope re-evaluation on a coherent feature-area**. `pascalandr` opened both PRs on 2026-04-25 in a 1h42m47s window (18:34:09Z and 20:16:56Z) — both during the same evening session — both targeting different aspects of provider input/output validation. ~12h later (during early-morning UTC, plausibly the author's next session), the author closes both **within 20 minutes of each other** without merging or re-opening. The 20-minute close-burst suggests a **deliberate review pass** of own-PRs, not a triggered close (e.g., not a CI failure cascade — both PRs are tiny, ≤2 files).

The hypothesis: **the author rejected their own approach to provider input/output validation as a feature class** between sessions. Both PRs have small surface area, both target validation/limit enforcement, both were opened in one session, both closed unmerged in the next. This is the **session-bracket self-rejection** pattern. The outstanding `#24374` (`fix(sdk):`, on a *different* subsystem) being preserved — and bumped in metadata mid-Add.49 — supports that the rejection is scoped to *provider-validation specifically*, not to all of the author's open work.

## Falsifiable predictions

1. **No `pascalandr` provider PR on `anomalyco/opencode/dev` for ≥48h.** If the author re-opens a `fix(provider):` or `feat(provider):` PR on `dev` within 48h of Add.49 close (08:45:37Z → 2026-04-28T08:45:37Z), the session-bracket-self-rejection reading is weakened toward "intermediate retry" rather than "rejection of approach." If no such PR appears, the rejection reading hardens.

2. **`#24374` is `pascalandr`'s next merge target on the repo.** If the next `pascalandr` merge or close on `anomalyco/opencode` is on a fourth, unrelated PR rather than `#24374`, the "outstanding work preserved while rejected work pruned" reading is falsified.

3. **The provider-validation surface gets reopened by a different author within W17.** If a different author (not `pascalandr`) opens a PR on `anomalyco/opencode/dev` titled `fix(provider): … output limit …` or `fix(provider): … image mime …` within W17 (i.e., before 2026-04-27 23:59:59Z), the surface itself is alive even though `pascalandr`'s approach was rejected — separating *surface-level* signal from *author-approach-level* signal. (Note: `mocksoul`'s long-tail #13854 is a `fix(tui):`, not a provider-validation PR, so it does not count toward this prediction.)

4. **The same author does not exhibit this pattern on other repos.** If `pascalandr` is observed performing a same-window-pair self-close on a *different* repo (e.g., `sst/opencode` or `BerriAI/litellm`) without injection within W17, the pattern generalizes from a per-author repo-specific tic to an author-portable behavior. As of Add.49, `pascalandr`'s tracked activity is concentrated on `anomalyco/opencode/dev`.

## What this synth does *not* claim

- It does **not** claim `pascalandr`'s self-closes are causally linked. They are temporally close (19m59s apart) and topically close (same surface family) but the closes could be independent decisions made in close succession during a review session.
- It does **not** claim the provider-validation surface is broken on `anomalyco/opencode`. The PRs may have been closed for personal reasons (rebase complexity, scope drift, redundancy with internal work) that have nothing to do with the surface's tractability.
- It does **not** generalize to a population claim about author behavior. It names the **two-PR signature** and tests for replication; replication on a third PR by the same author (the n=3 case) would be needed before any author-behavioral claim.

## Provenance

- Add.48 evidence: `digests/2026-04-26/ADDENDUM-48.md` "Closes-without-merge in window" section, `#24384` entry.
- Add.49 evidence: `digests/2026-04-26/ADDENDUM-49.md` "Closes-without-merge in window" section, `#24364` entry.
- Cross-checked via `gh pr view -R anomalyco/opencode {24384,24364} --json author,closedAt,state,baseRefName,additions,deletions,changedFiles,title,createdAt`.
- Author identity (`pascalandr` = Pascal André, GitHub user id 22114527) confirmed on both PRs.
