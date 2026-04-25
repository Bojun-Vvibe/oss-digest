# W17 Synthesis #71 — Vendor-self-onboarding PR sub-hourly self-iteration cadence with zero maintainer interaction

**Window**: 2026-04-25T07:25Z → 2026-04-25T08:42Z (Addendums 11+12+13 combined; ~77 minutes elapsed)
**Anchor exhibit** (single PR, three observed states by single vendor-self account):
- cline/cline#10403 (`abliteration-ai`, *"feat: add Abliteration.ai provider"*, head SHA `3f1c9fd0bbeb9d435bb0cba7f719ad47249c3c1d`)
  - **State 1** — OPENED 07:25:36Z (Addendum 11)
  - **State 2** — refreshed 07:47:37Z (Addendum 12) — 22m1s after open
  - **State 3** — refreshed 08:30:15Z (Addendum 13) — 42m38s after state 2
  - **Median inter-state delta**: ~32 minutes
  - **Maintainer interaction so far**: **zero** (no review request acknowledged, no comment, no label, no assignee)

**Cross-references**: distinct from synthesis #59 (sub-15-minute self-close on flaky-test surface — that was *withdrawal* cadence, this is *promotion* cadence); distinct from synthesis #61 (single-author multi-PR scope split — that was *spread across PRs*, this is *concentrated on one PR*); distinct from synthesis #67 (declared inter-PR ordering — that requires ≥2 PRs, this is single-PR self-iteration); orthogonal to synthesis #56 (lockstep refresh as bot-rebase signal — that was N PRs by one bot, this is N pushes to one PR by one human-named vendor account).

## Pattern

A **vendor-self account** (account name matches the vendor name being added: `abliteration-ai` adding `Abliteration.ai` provider) opens a self-promotional integration PR and then **iterates on it at sub-hourly cadence with zero maintainer engagement**. Three commits in 64m39s on a single PR, all by the same self-account, all on the integration code itself.

This is structurally different from the typical contributor cadence pattern in two ways:

1. **The author is also the beneficiary**: `abliteration-ai` is not a third-party contributor adding a feature they want to use — it is the vendor adding *itself* to the provider list. The PR is a marketing/distribution channel for the vendor.
2. **Self-iteration without external feedback signal**: in the canonical contributor pattern, push cadence on an open PR is driven by review feedback (push → review comment → push). Here there is no external signal — the vendor is iterating purely on internal QA / self-review. The 22m and 43m gaps suggest **batch local-test → push → notice issue → fix → push** cycles entirely internal to the vendor's own workstation.

## Why this is structurally distinct from the canonical contributor cadence

| Axis | Canonical contributor PR | Vendor-self-onboarding PR (#10403) |
|---|---|---|
| Author identity | Independent of integrated component | Identical to integrated component (`abliteration-ai` ↔ `Abliteration.ai`) |
| Push driver | External review signal | Internal QA, no external signal |
| Maintainer engagement window | Typically <24h to first triage | **65+ minutes elapsed, zero engagement** |
| PR-as-artifact role | Code change | Marketing/distribution channel |
| Inter-push median | Hours-to-days, signal-driven | **~32 minutes**, signal-free |

## Falsification checks

This is a single-PR exhibit. Three falsification routes:

1. **Maintainer engages** within the next ~2 hours → reduces this from "signal-free self-iteration" to "anticipatory polish before known review window". The pattern would still hold but would be weaker.
2. **`abliteration-ai` push cadence drops to >2h between iterations** → the "sub-hourly" framing fails; pattern becomes "any open PR by a vendor-self account", which is too generic to be useful.
3. **Other vendor-self accounts** in the corpus (search history: would need separate query) iterate at *normal* contributor cadence on their onboarding PRs → the sub-hourly cadence is a property of `abliteration-ai` specifically, not vendor-self-onboarding generally. Pattern collapses to a singleton observation.

## Predictions

If the pattern is real (multi-PR generalization holds):

- The next vendor-self-onboarding PR observed in the corpus (any tracked repo) will show **median inter-iteration cadence under 60 minutes** during the first 2 hours after open, with **zero maintainer interaction** in that window.
- Maintainer first-touch on vendor-self-onboarding PRs lags first-touch on canonical contributor PRs **by a factor of ≥2**, because maintainers implicitly deprioritize self-promotional integrations.
- Vendor-self-onboarding PRs have **higher pre-merge commit count** than canonical contributor PRs of comparable size, because the vendor over-iterates without external signal to constrain when "good enough" is reached.

## Watch items for next ticks

- Does cline/cline#10403 receive its first maintainer touch (review, comment, label) before 12:00Z? If not, the "zero maintainer interaction" stretches past 4.5 hours and the pattern hardens.
- Does `abliteration-ai` push a state 4 within the next ~32 minutes (continuing the median cadence) or does the cadence break?
- Are there other vendor-self-onboarding PRs in any tracked repo today that exhibit similar sub-hourly self-iteration?

## Sources

- Addendum 11 (07:11Z → 07:45Z): cline #10403 OPEN at 07:25:36Z by `abliteration-ai`
- Addendum 12 (07:45Z → 08:25Z): cline #10403 refreshed 07:47:37Z by `abliteration-ai`
- Addendum 13 (08:25Z → 08:42Z): cline #10403 refreshed 08:30:15Z by `abliteration-ai`, head SHA `3f1c9fd0bbeb9d435bb0cba7f719ad47249c3c1d`
