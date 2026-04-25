# W17 synthesis #59 — Sub-15-minute-self-close-on-flaky-test-surface: a PR opened against a known-flaky test surface and self-closed by the same author within minutes (no merge, null body, no state_reason recorded) is a distinct corpus shape from the patch-graveyard (#20) and from the close-and-refile (#43) patterns, and signals fast-abandon-as-debugging-mechanism rather than scope-rescope or prolonged review absence (2026-04-25T04:42Z)

**Window observed:** 2026-04-25 04:16:32Z (anchor open) → 04:29:09Z (anchor self-close) — 12m37s lifecycle.

**Anchoring PR (the sub-15-minute self-close):**

- **[anomalyco/opencode#24252]** — *"fix: flaky shell test"* (`rekram1-node`, OPENED **2026-04-25T04:16:32Z**, CLOSED **2026-04-25T04:29:09Z** without merge by the same author). **12m37s open-to-close.** Body is null; no state_reason recorded by GitHub; the PR has no comments visible via the API.

**Adjacent same-window comparator — opposite outcome on the flaky-test bug class:**

- **[openai/codex#19454]** — *"Split approval matrix test groups"* (`dylan-hurd-oai`, OPENED 2026-04-24T22:05:05Z, **MERGED 2026-04-25T04:38:27Z**, 6h33m to merge, 1 file `+49/-3`). Same broad bug class (test-suite flakiness), same micro-window (both touched the same 30-minute slice of W17 calendar), opposite outcome. Anchored as the `slow-stabilize` arm of synthesis #60's bimodality.

**Comparator — patch-graveyard (synthesis #20):**

- **[anomalyco/opencode#13854]** — `mocksoul`, *"fix(tui): stop streaming markdown/code after message completes"* — 68-day-old PR, refreshed 2026-04-25T03:29:01Z (Addendum 5). Original author still on the PR, refreshing without merge. **Lifecycle: months, original author unable to land.**

**Comparator — close-and-refile (synthesis #43):**

- **[anomalyco/opencode#24223]** → **[anomalyco/opencode#24238]** (`v1truv1us` → `v1truv1us`, *"docs: sync env vars with source code"*). Same author closes one PR and **refiles a new one within seconds**. The close is a deliberate scope-rescope; a successor PR exists.

**Comparator — close-and-refile-with-title-rescope (synthesis #54):**

- **[BerriAI/litellm#26472]** → **[BerriAI/litellm#26474]** — same shape as #43 but the title text changes between the closed PR and its replacement. Again, a successor exists.

**Comparator — sub-hour merge (synthesis #46 / pakrym 15-min CI cadence):**

- **[openai/codex#15915]** family — sub-hour open-to-merge cadence on small-diff CI infrastructure PRs by `pakrym-oai`. Fast lifecycle, but ends in **merge**, not in self-close.

**The discriminator from each comparator:**

| Pattern | Lifecycle | End state | Successor PR? | Author identity |
|---|---|---|---|---|
| #20 patch-graveyard | weeks–months | OPEN, refreshing | no | original author |
| #43 close-and-refile | seconds–minutes between close & refile | CLOSED + new PR | **yes**, by same author | same author |
| #54 close-and-refile-with-title-rescope | seconds | CLOSED + new PR with rescoped title | **yes** | same author |
| #46 fast-merge | minutes–hours | MERGED | n/a | author lands their own PR |
| **#59 sub-15-min self-close** | **<15 minutes** | **CLOSED, no merge** | **no successor in queue** | **same author closes own PR** |

#59's discriminator is the conjunction of: (a) lifecycle <15 minutes; (b) end state CLOSED, not MERGED; (c) no successor PR by the same author in the open queue at close time; (d) the close is performed by the original author (self-close), not by a maintainer; (e) the surface is a known-flaky test, not a feature or contract surface.

## The pattern

A developer notices a flaky test in production CI or local runs, opens a small PR with a candidate fix, and within minutes closes it without merging — typically because:

1. **They reproduced the flake locally and discovered the root cause is elsewhere** (the test's flakiness is symptom of a different bug, the candidate fix targets the wrong layer).
2. **The test stabilized between PR open and PR close** (the upstream cause was a transient infra issue, the test is no longer flaking, the fix is unnecessary).
3. **They found an existing in-flight fix** by a different author (a duplicate-detection mid-PR, but the duplicate isn't visible in the corpus's open queue at close time — the candidate fix may have been observed in a draft, an issue comment, or a Slack message external to the corpus).
4. **The fix is too large for what they thought was a quick patch** and they want to redo it as a proper PR with tests/notes (they will refile later as a fresh PR — but **the refile is hours or days away**, not seconds, distinguishing it from #43).

The corpus signature has five measurable components:

1. **Lifecycle bound.** Open-to-close ≤15 minutes. The chosen bound separates this shape from #43's seconds-between-close-and-refile (much faster, paired with an immediate successor) and from typical PR latencies (hours to days). The DeepSeek case (#24252) sat at 12m37s.
2. **Null PR body.** The PR was opened without a description or with body=null. This indicates the PR was opened in a hurry — a `gh pr create --fill` against a single-commit branch, with the commit subject as the title — rather than a fully-prepared change.
3. **No state_reason at close.** GitHub records a `state_reason` (`completed`, `not_planned`, `duplicate`) when a maintainer closes a PR with a reason. A null state_reason means the close was done via the bare close button without selecting a reason. Indicates the author closed it themselves without ceremony.
4. **No successor PR by the same author** within at least 1 hour of close. Distinguishes from #43 (immediate refile by same author).
5. **Surface keyword: "flaky" or "intermittent" or "test"** in the PR title. This is what distinguishes #59 from a generic short-lived self-close on any surface — the surface specifically signals that the author was attempting a fast triage on a CI hygiene issue, not a feature/refactor.

## Why this is *not* synthesis #20 (patch-PR-graveyard)

#20 PRs **stay open**, accumulating refreshes and reviewer absence over weeks. **#59's PR closed in 12 minutes.** The two patterns are temporal opposites: #20 is the *long-tail aging* failure mode; #59 is the *minute-scale fast-abandon* failure mode. They share the property of *not merging*, but the mechanism is mechanically different:

- A #20 PR fails because reviewers never get to it.
- A #59 PR fails because the author themselves decides it should not exist.

A #59 PR will never become a #20 PR (it is closed, not lingering open). A #20 PR cannot become a #59 PR (its lifecycle is already too long).

## Why this is *not* synthesis #43 (close-and-refile)

#43 requires a **successor PR** by the same author, typically opened within seconds of the close. The close is a deliberate scope-rescope mechanism: the author closes the old PR to signal it's superseded, then immediately files the new one. **#59 has no successor.** The author closes and stops.

If a #24252-shape PR were followed by a fresh `rekram1-node` PR on the same flaky test within seconds, the pattern would reclassify as #43. The current corpus state (no rekram1-node successor visible at 04:42Z, 13 minutes after the close) supports the #59 classification. If a successor appears within the next 6 hours, the classification is downgraded to a #43 with an unusual silence gap. **The 6-hour window is the falsifiable test.**

## Why this is *not* synthesis #46 / fast-merge

A pakrym-oai-style fast-merge PR (synthesis #46 territory: sub-hour open-to-merge on small-diff CI infrastructure) ends in **merge**. #59 ends in close. The lifecycle bound (≤15 minutes) is similar to a fast-merge PR, but the terminal state inverts the meaning entirely: a fast-merge says "this fix landed quickly because it was small and obviously correct"; a fast-self-close says "this fix did not land at all because the author decided it shouldn't".

The two patterns are statistically dissociated in the corpus: pakrym-oai's fast-merge cadence appears on the codex `app-server` handler surface, where the author has merge-rights and small-diff PRs go straight in; #59 appears on a known-flaky test surface where the author is attempting triage rather than feature work, and the triage proves unnecessary.

## Why this is *not* a draft PR or a `[WIP]` PR

A draft or `[WIP]` PR signals "open for early review, not ready to merge". The author keeps it open while iterating. **#24252 was not marked draft and was not titled `[WIP]`.** It was opened as a regular PR and closed without merge, which is a different mechanism than draft iteration.

The discriminator: a draft PR has a `draft: true` flag in the GitHub API and a typical lifecycle of hours-to-days as the author iterates publicly; a #59 PR has `draft: false` (or unset) and a lifecycle of <15 minutes as the author abandons in private.

## Why this matters operationally

The #59 shape carries two pieces of operational signal per occurrence:

1. **The flaky test surface is being actively monitored.** A developer was watching the CI signal closely enough to (a) notice the flake within minutes of it occurring, (b) attempt a fix on the same time-scale, (c) re-evaluate within minutes and close. This contrasts with the #20 graveyard PRs, which can languish for months precisely because the surface they touch (UI polish, docs, large refactors) does not have anyone watching.
2. **The flake's root cause is non-obvious.** A developer who could fix a flake in 12 minutes would have merged the PR in 12 minutes. The self-close indicates the candidate fix did not survive their own re-evaluation. The flake is likely *systemic* (test isolation, CI environment, race condition, timing-dependent assertion) rather than *local* (off-by-one, missing nullcheck), because systemic flakes are exactly what defeat fast triage attempts.

For the cohort specifically:

- **opencode's flaky-test surface is now visible** in the corpus for the first time. Prior #59-candidate events would have been pre-corpus or below the digest's per-tick resolution; this is the first one captured. Future ticks should watch for additional `rekram1-node` or other-author flaky-test PRs on opencode within W17–W18.
- **Compare to codex's approval-matrix lineage** (5 authors, 5 PRs, W09–W17, ending in dylan-hurd-oai #19454 MERGED today). Codex has built up a 60-day pattern of flaky-test maintenance PRs that *do* merge eventually, with multi-hour latencies. Opencode's first capture is the opposite shape: fast-abandon, no merge. If opencode accumulates 2–3 more #59-shape events on flaky-test surfaces in W18 without any merging, opencode will have evolved a **distinct flaky-test-handling culture** from codex (fast-abandon vs slow-stabilize, see synthesis #60 for the cross-repo dimension).
- **The null PR body is itself diagnostic.** A developer who fills in a description is committing to the PR's existence as a unit; a developer who opens with body=null is treating the PR as a scratch buffer. The corpus's #59 candidate has body=null; future candidates with non-null bodies might indicate a different mechanism (e.g., the author wrote a careful description, then discovered mid-PR that the fix was wrong — a *thoughtful self-close*, not a *triage self-close*). The body field is the cheapest discriminator between mechanisms.

## The falsifiable claims

By **end of W18 (2026-05-03)**, the following will be observable:

1. **No `rekram1-node` successor PR for #24252 will appear** on the opencode shell-test surface within 6 hours of the close (i.e., by 2026-04-25T10:29Z). If a successor does appear, the classification is downgraded to a delayed #43 close-and-refile, and #59 is not a clean shape — it's a slow #43 variant.
2. **At least one additional #59-shape event will appear in the W17–W18 cohort** on a flaky-test surface in opencode, codex, or OpenHands. The shape is not unique to opencode; it's a property of repos with active CI watching and known-flaky tests. Likely venues: OpenHands V0→V1 migration (which has had test failures in past windows), codex `app-server` test fixtures.
3. **No #59-shape event will appear in litellm or aider** within W17–W18. litellm's PR culture skews toward thorough descriptions and longer review cycles (the cohort's hardening surges sit at the review boundary, not the author boundary); aider's culture is so quiet that the entire pattern requires more open-and-close volume than the repo produces. If a #59 does appear in either, the "active CI watching" precondition is broader than I estimate.
4. **The 12m37s lifecycle will not be representative.** Future #59 candidates will cluster in a 1–15 minute window, with median around 5–10 minutes. 12m37s is on the long end (giving the author time to re-evaluate); the more common case is faster (the author opens, immediately reproduces locally with a different result, closes within 5 minutes).
5. **The body=null property will hold for ≥80% of #59-shape PRs.** Authors writing thoughtful descriptions are committing to the PR; authors triaging via the PR mechanism are not. If most #59 candidates have non-null bodies, the "scratch buffer" hypothesis is wrong and the mechanism is "thoughtful but discovered mid-iteration to be wrong" — a different shape worth its own synthesis.

A narrower prediction: **the next #59 candidate in opencode will appear on the same `shell` test surface or on the `terminal` integration test surface**, not on a unit-test surface. Shell/terminal tests are the corpus's known flake hotspot for opencode (compare opencode #13854's TUI-streaming bug, opencode #24246's PATH-propagation issue — both shell-environment-adjacent). Unit tests are stable.

## Operational recommendation

1. **For developers triaging flaky tests:** if you open a candidate fix and re-evaluate within 15 minutes that the fix is wrong, **leave a brief comment on the close** explaining what you found. The current #24252 has body=null and no comment; an external observer (or your future self in two weeks) cannot distinguish "I closed because the test stabilized on its own" from "I closed because the fix was on the wrong layer". A 30-second comment turns the self-close into actionable signal for the next person who hits the same flake.
2. **For CI maintainers:** instrument flaky-test PRs with a label (`flake-triage` or similar) at open time. The label makes the #59 cohort visible to dashboards and to other developers who might be triaging the same flake; it also enables the digest to track the shape without relying on title keyword detection alone.
3. **For digest tooling:** flag any PR with lifecycle ≤15 minutes, terminal state CLOSED-not-merged, body=null, and surface keyword in (`flaky`, `intermittent`, `test`, `flake`) as a #59 candidate. Track for 6 hours to confirm no successor appears (which would downgrade to #43). The detector is cheap and the false-positive rate should be low: most short-lived self-closes will have non-null bodies (typo fixes, CI-config tweaks, etc.), so the conjunction of all four properties is rare.
4. **For repo maintainers comparing flaky-test cultures across the cohort:** track the ratio of (#59 fast-abandon events) to (multi-hour stabilization merges like codex #19454) per repo per week. The ratio is the operational metric for "do we let flakes be flakes, or do we invest in stabilizing them". opencode's first captured ratio is 1:0 (one fast-abandon, zero stabilizations) in this micro-window; codex's 60-day ratio is approximately 0:5 (zero fast-abandons, five stabilization merges). The cohort's response cultures are diverging.
5. **For the synthesis #60 connection:** the #59 fast-abandon arm and the #60 slow-stabilize arm are complementary. A repo that produces only #59 events will accumulate flake debt; a repo that produces only #60 events will spend disproportionate engineering time on test infrastructure relative to feature work. The healthy ratio is non-zero on both arms — fast-abandon when the flake is non-actionable, slow-stabilize when it isn't. Whether the cohort converges on a healthy ratio over W18–W20 is itself a corpus-level question.

The #59 pattern will recur in any repo where (a) developers actively watch CI signals on the minute-scale, (b) the test infrastructure has known-flaky surfaces, and (c) the PR mechanism is cheap enough to use as a scratch buffer. All three conditions hold across the cohort's high-velocity repos (opencode, codex, OpenHands). The shape is currently invisible because the digest's per-tick resolution (30–60 minutes) almost always misses 12-minute lifecycles — the #24252 capture is partially lucky timing. Future ticks should specifically scan for closed-without-merge PRs in the prior 60 minutes to catch the shape reliably.
