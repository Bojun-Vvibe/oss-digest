# W17 cross-repo synthesis #46 — infrastructure-or-repo-shape-change-shipped-as-a-train-of-small-prs-rather-than-a-single-migration: when build-artifact CI definitions, license declarations, docs locations, or other repo-shape primitives change as a sequence of one-line `chore(ci)` / `[Infra]` PRs across hours rather than a single coordinated migration PR, the cumulative diff is hidden from any single reviewer, the pre-train state is never reconstructible from any single commit, and the rollback path requires reverting an unbounded number of commits in the right order (2026-04-25T00:11Z)

> _LLM-generated cross-repo synthesis. May contain errors — click through every PR before acting._

## The pattern in one sentence

**A repo-shape change — the kind that historically would have been one migration PR with a written plan and a rollback section ("move docs to separate repo", "switch release artifacts from GNU to musl", "declare proprietary license", "split monorepo packages") — is instead shipped as a *train* of three or more small PRs over a span of one to three hours, each PR carrying a `chore(ci)` / `[Infra]` / `ci:` prefix and a one-line title; the train is composed of (a) a "stop-old" PR that disables the previous shape, (b) a "publish-new" PR that introduces the new shape, and (c) a "close-superseded" event where the original migration PR is closed unmerged because the train of small PRs has already done the work; the cumulative diff of the train is never assembled in any single review surface, the migration plan exists only in the head of the author who fired the train, and a reviewer arriving cold at any single PR sees a one-line change with no visible context.**

W17's anchor exhibits land in two repos in the same dispatcher window:

- **codex release-artifact CI reshape (3 PRs, ~3h):**
  - [openai/codex#19445](https://github.com/openai/codex/pull/19445) (MERGED 21:29:45Z, *"ci: stop publishing GNU Linux release artifacts"*) — the **stop-old** event.
  - [openai/codex#19447](https://github.com/openai/codex/pull/19447) (MERGED 22:29:38Z, *"ci: publish codex-app-server release artifacts"*) — the **publish-new** event.
  - [openai/codex#19436](https://github.com/openai/codex/pull/19436) (CLOSED unmerged 00:00:02Z, *"chore(ci) Build a release of codex-app-server"*) — the **close-superseded** event. #19436 was the original migration PR; it was rendered redundant by #19445 + #19447 and closed without a merge or a "superseded by" comment in the close.

- **litellm repo-shape Infra train (2 PRs in 76 minutes, on a multi-PR week-long arc):**
  - [BerriAI/litellm#26454](https://github.com/BerriAI/litellm/pull/26454) (MERGED 21:54:35Z, *"[Infra] Remove docs/my-website, point contributors to litellm-docs repo"*) — splits docs out of the monorepo.
  - [BerriAI/litellm#26457](https://github.com/BerriAI/litellm/pull/26457) (MERGED 23:10:32Z, *"[Infra] Declare proprietary license in litellm-enterprise metadata"*) — declares enterprise-package license in package metadata.

The two litellm PRs are independent in subject (docs split vs license declaration) but share the `[Infra]` prefix, the one-line-title shape, and the absence of a connecting migration plan. The codex three-PR train is tightly causal (each step only makes sense as part of the trio). Both repos exhibit the same operational pattern: **repo-shape changes are now an emergent property of a sequence of small PRs, not a planned migration**.

## Why this is *not* synthesis #44 (vertical-slice-PR-stack-refreshed-in-lockstep)

#44 names a *coordinated* multi-PR slice where the PRs share a base-branch chain, refresh in lockstep, and are designed to be reviewed as a graph. **#46 names an *uncoordinated* multi-PR train where the PRs target main directly, do not share a base chain, do not refresh together, and are designed to land independently — each one is supposed to be reviewable on its own merits.**

The two are structural inverses on the question of "what does the maintainer review?":

- **#44**: the *graph* (the slice as a whole, with the dependency edges visible).
- **#46**: each *leaf* (each one-line PR independently, with the dependency edges hidden in the author's head).

#44's PRs *advertise* their cooperation via base-branch chains. #46's PRs *hide* their cooperation by all targeting main. A reviewer looking at #19447 sees `ci: publish codex-app-server release artifacts` — they cannot tell from that PR alone that #19445 (`ci: stop publishing GNU Linux release artifacts`) merged an hour earlier as part of the same migration, or that #19436 will be closed as superseded an hour later.

## Why this is *not* synthesis #37 (deletion-pr-injected-into-additive-train)

#37 names cases where a *deletion* PR is silently injected into a sequence of additive PRs, hiding the deletion from per-PR review. **#46 names cases where the migration *itself* is the train — there is no surrounding additive context to camouflage the deletion within. The train *is* the change.**

#37 is a deletion-hiding pattern within a feature-development train. #46 is a *whole-migration-as-train* pattern. They can compose: codex #19445 (`ci: stop publishing GNU Linux release artifacts`) is a #37-shaped deletion *inside* the #46-shaped migration train. The deletion is technically visible (one-line title says "stop publishing"), but the *consequence* — that the GNU build is now unsupported and downstream consumers must migrate — is not in any PR body.

## Why this is *not* synthesis #35 (replacement-PR-after-close-as-scope-narrowing-tactic)

#35 names cases where a closed PR is replaced by a narrower PR that explicitly references and narrows the closed one. **#46's close event (codex #19436 CLOSED) does *not* have a replacement-PR — it has a *retroactive* replacement, by two PRs (#19445 + #19447) that merged *before* #19436 was closed.**

The temporal order is reversed:

- **#35**: PR A closed → PR B opens with explicit narrower scope.
- **#46 close event**: PR A is *anticipatorily superseded* by PRs B and C that merge *first*, and PR A is then closed as redundant. Neither B nor C reference A in their body — the supersession is implicit.

The reviewer arriving at #19436's close has no signal in the close itself that the migration was completed elsewhere. Without the cross-PR context, the close looks like an abandonment.

## Why this is *not* a normal feature-train

A normal feature-train (e.g., synthesis #44's permissions slice) has these properties:

1. The PRs share a feature-branch base.
2. The PRs are tagged with `feat:` not `chore(ci):` / `[Infra]`.
3. The PRs together change *application behavior* (what the user can do).
4. The PRs are explicitly listed in a tracking issue or roadmap.

A #46 train has the inverse properties:

1. The PRs all target main directly.
2. The PRs are tagged with `chore(ci):` / `[Infra]:` / `ci:`.
3. The PRs together change *repo shape* (where things live, what the build produces, what license attaches).
4. The PRs are *not* listed anywhere as a coordinated migration — the migration exists only as the union of the merged PRs.

The third property is the load-bearing one for the cost analysis below.

## Anchor exhibits (W17, this tick)

### codex release-artifact CI reshape

- **[openai/codex#19445](https://github.com/openai/codex/pull/19445)** (MERGED 21:29:45Z, *"ci: stop publishing GNU Linux release artifacts"*) — removes the GNU Linux release-artifact build from CI. After this merge, the codex release pipeline no longer produces GNU Linux binaries. **Implication for downstream consumers** (anyone consuming the GNU artifact directly): broken silently. **Migration path documented in PR body**: none discoverable from the title alone.

- **[openai/codex#19447](https://github.com/openai/codex/pull/19447)** (MERGED 22:29:38Z, *"ci: publish codex-app-server release artifacts"*) — adds `codex-app-server` to the release-artifact build. After this merge, the codex release pipeline produces a new artifact (`codex-app-server`) that the python SDK PR ([openai/codex#19462](https://github.com/openai/codex/pull/19462), still OPEN, *"sdk/python: use standalone codex-app-server runtime"*) depends on. **The new SDK consumer is in flight at the same time as the artifact-publication PR**, and the consumer is OPEN while the producer is MERGED — a temporary state where the artifact exists but no documented consumer references it.

- **[openai/codex#19436](https://github.com/openai/codex/pull/19436)** (CLOSED unmerged 00:00:02Z, *"chore(ci) Build a release of codex-app-server"*) — the original "build a release of codex-app-server" migration PR, closed because #19447 had already done its work. The close happened ~90 minutes after #19447 merged. **No comment in #19436's close explains the supersession.** A reviewer auditing CI changes who finds #19436 first must reverse-engineer the supersession by looking at sibling PRs.

- **The migration's actual scope, reconstructed:** codex is *replacing* the GNU Linux release artifact with a `codex-app-server` artifact, and the python SDK will consume the new artifact instead of the old one. This three-step reshape (drop old artifact, add new artifact, deprecate old PR) was never assembled into a single migration document or a single PR. Anyone trying to understand the codex release-artifact contract from main as of 00:11Z must read all three PRs *and* the still-OPEN #19462 to see the full picture.

### litellm repo-shape Infra train

- **[BerriAI/litellm#26454](https://github.com/BerriAI/litellm/pull/26454)** (MERGED 21:54:35Z, *"[Infra] Remove docs/my-website, point contributors to litellm-docs repo"*) — splits the docs site out of the litellm monorepo into a separate `litellm-docs` repo. **Implication for contributors**: any open PR that edits `docs/my-website/` is now broken; any tooling that builds docs from the monorepo is now broken. The migration target (`litellm-docs` repo) is named in the PR title but no migration guide is linked.

- **[BerriAI/litellm#26457](https://github.com/BerriAI/litellm/pull/26457)** (MERGED 23:10:32Z, *"[Infra] Declare proprietary license in litellm-enterprise metadata"*) — adds proprietary-license declaration to the `litellm-enterprise` package metadata. **Implication for downstream tooling**: any package-license scanner (FOSSA, license-checker, REUSE) that previously saw litellm-enterprise as unlicensed will now see it as proprietary. **No CHANGELOG entry referenced from the PR body.**

- The two litellm Infra PRs in this 76-minute window are *not* a tightly-causal train (they could have been ordered either way). They are instead the W17 evidence that **the `[Infra]` prefix is the litellm equivalent of codex's `chore(ci)` / `ci:` prefix** — a tag that signals "this is repo-shape, ship it without a migration document". The cadence is what makes them visible as a pattern: two repo-shape changes in 76 minutes is not a planned-migration cadence, it is a continuous-Infra-stream cadence.

### Cross-repo signal

| Repo | Train shape | Tag prefix | Span | PR count | Migration document? |
|---|---|---|---|---|---|
| openai/codex | causal (stop-old → publish-new → close-superseded) | `ci:` / `chore(ci)` | ~3h | 3 (incl. close) | None |
| BerriAI/litellm | independent (docs split + license declare) | `[Infra]` | 76min | 2 | None |

The two repos converge on the same operational stance toward repo-shape changes: **the train is the document, and the document is never assembled**.

### Sibling structures from earlier in W17 to explicitly distinguish

- **codex permissions stack #19391-#19395 + #19449 (synthesis #44 anchor)** — a #44 case, *not* a #46 case. Discriminators: PRs are `feat:` / `permissions:` not `ci:` / `chore(ci)`; PRs share base-branch chain; PRs change application behavior, not repo shape; PRs refresh in lockstep.
- **codex test-infra cluster #19453 / #19452 / #19454 (synthesis #42 corollary)** — a #42 case, *not* a #46 case. The cluster is *flake-firewall* PRs, not *repo-shape* PRs. They touch test files only and do not change any released artifact, license, or docs location.
- **litellm CI rerun fix #26461 / #26452 (synthesis #43 sibling)** — a #43 case, *not* a #46 case. The CI fix is a single PR (resubmitted unchanged), not a sequence of small PRs that together reshape something.
- **opencode HttpApi migration #24211 + #24213 + #24216** — *candidate* #46 case from earlier in W17. #24211 (MERGED 21:36Z, *"Clarify HttpApi migration plan"*), #24213 (MERGED 21:42Z, *"refactor(ripgrep): migrate result schemas to effect"*), #24216 (MERGED 22:03Z, *"test(httpapi): cover hono bridge middleware"*). Three PRs in 27 minutes touching the HTTP API migration surface, with one of them (`Clarify HttpApi migration plan`) explicitly being *about* the migration plan but landing as a clarification PR rather than as the migration document itself. The opencode case is structurally a #46 — the migration is shipped as a train rather than as a coordinated set, and the migration plan exists as a PR title rather than as a tracked document.

## The structural cost

The cost of #46 is not the cumulative diff size — that's typically small (a few hundred lines across the train). The costs are:

1. **Loss of pre-train state reconstructibility.** To know what the codex release-artifact contract looked like before this evening, you must check out the repo at exactly 21:29:44Z (one second before #19445 merged). At any later commit, the GNU artifact is already gone. There is no PR-body description of what was lost.

2. **Hidden coupling between train members.** #19447 only makes sense if #19445 also merges (otherwise codex publishes both GNU and codex-app-server artifacts, which may not be the intent). The coupling is not enforced by GitHub primitives — #19445 could have been reverted independently of #19447, leaving an incoherent state.

3. **Rollback amplification.** To roll back the codex release-artifact migration, you must revert #19447 first, then #19445, then re-open #19436 (because the close was meant only as a redundancy cleanup). The rollback PR will need its own train. The rollback path is not documented anywhere.

4. **Reviewer-context starvation.** A reviewer arriving at any single train member sees a one-line change. The reviewer's per-PR mental model cannot reconstruct the migration. Bad train members are caught only by reviewers who happen to know the broader plan — typically only the author.

5. **Downstream consumer surprise.** Anyone consuming the codex GNU release artifact, or the litellm `docs/my-website/` directory, learned about the change by their tooling breaking, not by an announcement. The PRs landed silently; CHANGELOGs were not updated as part of the train.

## Operational signal

When auditing a fast-cadence repo, treat any merged PR matching all of:

1. **Title prefix is `chore(ci)` / `ci:` / `[Infra]` / `chore(release)` / `chore(repo)`**;
2. **Title is a single declarative one-liner** ("stop publishing X", "remove Y", "declare Z", "point to W repo");
3. **Body is empty or near-empty** (no migration plan, no rollback section, no link to a tracking issue);
4. **Merged within 6 hours of another PR matching the same criteria on the same surface**

…as part of a **#46 train**. Look at sibling PRs on the same surface in the surrounding 6-hour window to reconstruct the migration. Do *not* rely on any single PR's body to describe the change.

If you are operating downstream of one of these repos, set a daily diff-watch on:
- The CI workflow files (`.github/workflows/`, `.circleci/config.yml`, `bazel/` definitions).
- The `LICENSE`, `setup.py`, `pyproject.toml`, `package.json` license fields.
- The docs root directory location.

These are the surfaces that change via #46 trains rather than via announced migrations.

## Counter-cases

- A single PR titled `[Infra] Move docs to separate repo` that contains a checklist of all the steps in the body, links to the new repo, and updates the CHANGELOG is *not* a #46 case — it is the documented-migration shape that #46 is the inverse of.
- A `chore(ci)` PR that lands alone with no sibling PRs in the surrounding 6 hours is *not* a #46 train member — it is just CI maintenance.
- A `feat:` PR series sharing a base-branch chain (synthesis #44 shape) is *not* a #46 train — it advertises its cooperation explicitly.

## Predictions for next tick

1. **The codex python SDK consumer ([openai/codex#19462](https://github.com/openai/codex/pull/19462))** will land within the next 24h, completing the codex release-artifact migration as a four-PR arc (#19445 → #19447 → #19436 close → #19462). The arc will not be documented anywhere.
2. **A litellm `[Infra]` PR will land in the next dispatcher tick** updating either the docs cross-link from the main README to the new `litellm-docs` repo, or the `litellm-enterprise` PyPI metadata to match the license declaration. The train will continue.
3. **The opencode HttpApi train** ([anomalyco/opencode#24211](https://github.com/anomalyco/opencode/pull/24211) MERGED 21:36Z and siblings) will produce another `migrate-* to effect` PR in the next 24h, continuing the migration without a single coordinated tracking issue.
