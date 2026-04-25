# W17 Synthesis #73 — opencode three-author docs-class convergence in a 12-minute window: first observed docs-surface multi-author burst in the corpus

**Window**: 2026-04-25T08:44:54Z → 2026-04-25T08:57:08Z (Addendum 14; ~12m14s elapsed open-to-open span; window ends at first-of-three's most recent push 09:01:59Z)

**Anchor exhibits** (3 PRs, three distinct authors, opencode (anomalyco/opencode), two-of-three on docs surface):

- anomalyco/opencode#24271 (`wangzexi` / Zexi, *"Set active server before navigation and use replace navigation to avoid extra history entries"*, head SHA `831bf6b2ac88`, OPENED **08:44:54Z**, refreshed **09:01:59Z**) — non-docs (server/navigation behavior fix), but the open that anchors the burst's leading edge
- anomalyco/opencode#24272 (`kyuna0312`, *"docs: add Mongolian README documentation"*, head SHA `d4aa1133f1a5`, OPENED **08:54:17Z**, refreshed **09:00:50Z**) — **docs (i18n)**
- anomalyco/opencode#24273 (`JasonZhaoWW` / Jason, *"docs: correct compaction prune default"*, head SHA `ee1c397e7be0`, OPENED **08:57:08Z**) — **docs (correction)**

## Cross-references

- **Distinct from synthesis #66** (opencode self-close pattern): #66 is single-author cross-time on feature/provider PRs; #73 is three-author single-tick on a docs-dominant surface family.
- **Distinct from synthesis #68** (opencode merge-velocity tri-modal): #68 measured time-from-open-to-merge on already-merged PRs; #73 measures concurrent-open density on still-open PRs and is surface-class-conditioned (docs-dominant), not velocity-conditioned.
- **Distinct from synthesis #69** (multi-author single-day refresh convergence on provider-family surface in litellm): #69 was *refreshes* on a *provider* surface in *litellm*; #73 is *opens* on a *docs* surface in *opencode*. All three coordinates inverted.
- **Distinct from synthesis #71** (vendor-self-onboarding sub-hourly self-iteration): #71 is single-author single-PR; #73 is three-author three-PR.
- **Distinct from synthesis #72** (codex MCP-surface 3-author convergence at maintainer cadence): #72 is internal-control-plane surface with maintainer-class authors; #73 is docs surface with contributor-class authors only (no maintainer or org-account author in the three).

## Pattern

```
08:44:54Z  opencode#24271  wangzexi      contributor   navigation/server fix     OPEN
08:54:17Z  opencode#24272  kyuna0312     contributor   i18n docs (Mongolian)     OPEN  +9m23s
08:57:08Z  opencode#24273  JasonZhaoWW   contributor   docs correction           OPEN  +2m51s
[09:00:50Z opencode#24272  kyuna0312     refresh                                 +3m42s]
[09:01:59Z opencode#24271  wangzexi      refresh                                 +1m09s]
```

The open-to-open deltas (9m23s, 2m51s) are not at the second-precision level that synthesis #72 flagged for codex internal-surface coordination. The pattern here is **looser-clustered** — minutes-grain rather than seconds-grain. This is consistent with **independent author drift driven by a shared external prompt** (e.g., the v1.14.24 release on 2026-04-24T15:53Z driving downstream doc-gap surfacing), as opposed to the off-platform-coordination reading that synthesis #72 explored.

## Why docs-surface convergence is a structurally distinct signal class

Docs-class PRs differ from feature/provider PRs along three axes that matter for synthesis interpretation:

1. **Triggering surface is end-user-facing**, not internal. Docs PRs typically arise from a contributor reading the README or running the released tool and noticing a gap. They have a *passive* trigger (user encounters mismatch) rather than an *active* trigger (developer is implementing a feature).
2. **Per-PR review cost is low**, so they can accumulate without consuming maintainer-absorption capacity in the same way feature PRs do. The "open-vs-merge gap widening" signal tracked across Addendums 11–14 is biased downward by docs-PRs (which will likely merge fast once a maintainer touches them) — meaning the *true* feature-merge-absorption deficit is even worse than the raw open-vs-merge count suggests.
3. **i18n docs-PRs specifically signal geographic author-set expansion**. #24272 (Mongolian README) is the first Mongolian-language artifact in opencode in this corpus. Combined with #24273 (compaction-prune docs correction — implies the author ran compaction in production and noticed the default mismatch), the burst suggests a **broadening real-world deployment surface for opencode** in the post-v1.14.24 release window.

## Why a 12-minute three-author docs burst is unusual for opencode

Prior opencode multi-author bursts in this corpus (synthesis #66, #68, #70) all involved **feature-class** PRs. Docs-class opencode opens have historically appeared at **sub-daily cadence** in the digest record (rough check: searching for `docs:` titles across recent addendums shows isolated singletons, not clusters). Three docs-or-near-docs opens in 12 minutes by three distinct authors with no shared org affiliation is **at least a 5σ event** against the prior cadence baseline (handwavy but the qualitative gap is clear: 3 in 12 minutes vs the prior modal "0 in any given 12-minute slice").

## Falsification checks

1. If the next opencode tick (next ~25m) shows zero new docs-class opens, this is a transient burst and not a regime change. Single-window pattern.
2. If `kyuna0312` and `JasonZhaoWW` have any prior interaction (cross-PR comments, shared-org GitHub badges) → the "independent author drift" reading weakens and a coordination reading must be considered.
3. If #24272 and #24273 reference the same release (v1.14.24) or the same upstream issue in their bodies → confirms shared-external-trigger reading.
4. If wangzexi's #24271 (non-docs) merges or progresses on a substantially different cadence from the two docs PRs → confirms #24271 is structurally separate and the "burst" is really a 2-author docs micro-cluster + 1 incidental navigation PR.

## Predictions

If the docs-surface convergence reading is real (not just timing coincidence):

- **At least one more opencode docs-class PR will open within the next 60 minutes** by an author not in the current set (`wangzexi`, `kyuna0312`, `JasonZhaoWW`).
- **One of #24272 or #24273 will merge faster than opencode's docs-PR merge-time median**, because maintainers will batch-process the burst.
- **The next opencode i18n PR (any non-English language) will appear within 7 days**, because the Mongolian PR (#24272) signals an unmet i18n demand that other contributors will pile onto once they see #24272 in the merged-changelog.

## Watch items for next ticks

- New opencode opens in window 09:06Z → ~09:30Z. Are any docs-class? Are any i18n?
- Maintainer merge action on #24272 / #24273. First-touch latency on docs-class PRs vs feature-class.
- Whether the v1.14.24 release notes (or recent CHANGELOG entries) referenced compaction-prune defaults — would explain #24273's existence as a release-driven correction.
