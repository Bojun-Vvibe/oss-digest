# W17 Synthesis #89 — Cross-repo author-handoff identical-content refile with preceding-open lead

**Window:** 2026-04-25 14:34:02Z → 14:44:01Z (9m59s).
**Cited PRs:** `BerriAI/litellm#26485`, `BerriAI/litellm#26504`, `Aider-AI/aider#5069`, `Aider-AI/aider#5070`.

## The shape, in one sentence

Two PRs by `@FuturMix` on two different repos (litellm `#26485` +8/-0 sha `3cd074622f1c`, aider `#5069` +77/-0 sha `822045c73fbc`) self-close within ~10 minutes of each other; in **both** repos a **second account `@Gzhao-redpoint` opens a replacement PR with the byte-identical title and the byte-identical line-count diff** (`#26504` +8/-0 sha `2fc6b30105a8`, `#5070` +77/-0 sha `3028be8b7a0c`); and in **both** repos **the replacement open precedes the original close by 12–13 seconds**, not the other way round.

## Why it doesn't fit any prior synth

| Prior synth | What it catalogues | Why this is different |
|---|---|---|
| #41 | Stacked-PR rejection on parent merge | No stack here; both pairs are vendor-onboarding singletons, no parent. |
| #50 | Same-author post-own-merge cascade | Authors are *different* across the close/open boundary in both repos. |
| #52 | Overlapping double-jump close-and-refile, single repo | This is **two repos in lock-step**, not one; refile precedes close, not follows. |
| #65 | Single-author micro-burst with self-merge inside | No merges. Only close/open. Two authors, two repos. |
| #70 / #71 | Vendor self-onboarding shape | The *first* PR in each pair is a vendor self-onboarding (FuturMix); but the *refile* by a non-vendor account on identical content is the new fact. |
| #74 / #75 / #76 | Tag/cohort waves | One account, not a cohort wave; two repos, not many. |
| #78 | Same-author backlog prune with fresh-open injection | Both close and open are by *different* authors; not single-author triage. |
| #79 | Cross-repo defensive payload-shape convergence | #79 is about *similar* payload shapes converging across repos; here the diffs are **byte-identical sized and identically-titled**, not "convergent." |
| #80 / #81 / #82 / #83 | Intra-author cadence shapes | This is *cross-author* by design (handoff is the point). |
| #84 | Same-second long-tail co-bump | #84 is mechanical bot-style same-second; this is human-paced ~12s lead. |
| #85 / #87 | Sub-10s same-author doublet | Same-author here would be the *trivial* version; the handoff is the load-bearing fact. |
| #86 | Single-author intra-day cadence dilation | Author-cadence framing doesn't apply across an author-handoff. |
| #88 | Aged-PR self-close pair book-ending fresh open-merge | No aged self-merges in the middle. The two closes happen 9m47s apart with the two refiles **between** them — a different topological order. |

Synth #89's **nearest neighbor is #52** (close-and-refile). The decisive differences:

1. **Two repos**, not one. The handoff replicates across `BerriAI/litellm` *and* `Aider-AI/aider` within the same 10-minute window.
2. **The refile *precedes* the close**, by 12–13 seconds in both repos. In #52 the refile follows the close (the natural order). Here the refile is **prepared and fired first**, then the original is retired — implying coordinated authorship even though account names differ.
3. **The diff sizes are byte-identical** (+8/-0 ↔ +8/-0 in litellm; +77/-0 ↔ +77/-0 in aider). Not "approximately the same"; the same. Combined with identical titles, this is content-preservation across the handoff, not refactor-during-refile.
4. **Account-pair is repeated across the two repos** (`@FuturMix` → `@Gzhao-redpoint` in both cases). One coincidence is one coincidence; two coincidences with the same actor pair is a mechanism.

## Load-bearing observations

- **Cross-repo lockstep timing.** First refile open `litellm#26504` at 14:34:02Z. First original close `litellm#26485` at 14:34:15Z (Δ = +13s). Second refile open `aider#5070` at 14:43:49Z. Second original close `aider#5069` at 14:44:01Z (Δ = +12s). The two open events are 9m47s apart; the two close events are 9m46s apart. **The cross-repo cadence is preserved to within 1 second across both legs.**
- **The 12–13s preceding-open lead is the smoking gun.** A reactive refile (close → open) would show negative or zero lead. A 12–13s **positive** lead means the second account had the replacement PR drafted and submission-ready before the first account fired the close. The two events are coordinated upstream of GitHub.
- **The first account (`@FuturMix`) is the vendor; the second account (`@Gzhao-redpoint`) is non-vendor-named.** The vendor's own onboarding PR is being routed through a second account — possibly because the vendor account hit a maintainer-side block (e.g., affiliation-disclosure requirement, CLA, contributor-policy enforcement against vendor self-PR), and the workaround is to refile the same content under a non-vendor identity.
- **No content drift across the handoff.** Identical title, identical +/-, no commits added between fork-time and refile. This is a *pure* identity-relabel, not a "fix the comments and try again."
- **The base-branch / target-repo mapping is preserved.** litellm's litellm refile targets litellm's default; aider's refile targets aider's default. The handoff does **not** redirect to a fork or PR-against-fork pattern.

## Mechanism hypothesis

A vendor (FuturMix) attempted to self-onboard their named provider into two adjacent OSS LLM-tooling repos within ~7 hours (litellm at 04:24:10Z, aider at 11:53:45Z). Maintainer-side feedback or policy reading made them conclude the vendor-self-PR would not land. Rather than waiting for explicit rejection, they **prepared two replacement PRs under a different account, fired both opens, then retired both originals 12–13 seconds later** — minimizing the visible "duplicate open PRs by different accounts" window to under 15 seconds in each repo.

The 9m47s spacing between the litellm leg and the aider leg suggests a **single human operator** doing the handoff serially: open litellm refile → close litellm original → ~10min context-switch → open aider refile → close aider original. A bot would either fire both legs simultaneously or with consistent sub-second gaps. The 9m47s human-pace gap distinguishes this from automation.

## Falsification cases — what would invalidate this lens

1. **If `@Gzhao-redpoint` and `@FuturMix` are publicly disclosed as the same person / same org with no concealment intent**, the handoff is innocuous co-authorship and the "evading vendor-PR policy" framing is wrong. The *shape* of the lockstep timing remains real, but its mechanism is mundane.
2. **If maintainers merge `#26504` and `#5070` without challenging the identity-handoff**, the policy-evasion hypothesis is moot — the handoff worked, the OSS repos do not enforce against it, and the pattern is just a mildly-wasteful refile.
3. **If `@Gzhao-redpoint` refiles content for *other* vendors' closed PRs in the next ~7 days**, this is a generic "refile broker" account, not a FuturMix-specific handoff, and synth #89 is the first instance of a much larger pattern (rebrand the synth then).
4. **If the litellm and aider refiles get closed-by-maintainer with a "we don't accept refiles of self-closed vendor PRs" comment**, the maintainer side is wise to it and the handoff fails — confirming the policy-evasion mechanism but also marking the shape as a failure mode, not a successful tactic.
5. **If a future case shows the refile *following* the close by negative-lead instead of preceding it**, the "coordinated upstream" claim weakens; refiles may be reactive after all and the 12–13s preceding lead this time was coincidence.

## Predictive value

If the lens holds:

1. **Either `#26504` or `#5070` (or both) merge within ~5 days**, vindicating the handoff as an effective tactic. If both get closed by maintainers, the tactic fails and we expect *fewer* such handoffs in W18.
2. **`@Gzhao-redpoint` shows up on a third repo within W17–W18 refiling someone else's closed vendor PR**, indicating the account is a general broker not specific to FuturMix.
3. **A future cross-repo lockstep handoff in W17–W18 reproduces the 10-minute-spaced two-leg structure** — i.e., serial human-paced handoffs on two repos rather than parallel bot-paced ones. If we instead see parallel sub-second multi-repo handoffs, the operator switched to automation.
4. **Litellm or aider maintainers update CONTRIBUTING / vendor-PR policy within W17–W18** in response, especially with language about "do not refile self-closed vendor PRs under a different account." If that happens, the policy-evasion mechanism is publicly named.

## Cited PRs

- `BerriAI/litellm#26485` — sha `3cd074622f1c` — opened 04:24:10Z by `@FuturMix`, self-closed unmerged 14:34:15Z, +8/-0, *"feat: add FuturMix as named OpenAI-compatible provider"*
- `BerriAI/litellm#26504` — sha `2fc6b30105a8` — opened 14:34:02Z by `@Gzhao-redpoint`, +8/-0, *"feat: add FuturMix as named OpenAI-compatible provider"* (identical title)
- `Aider-AI/aider#5069` — sha `822045c73fbc` — opened 11:53:45Z by `@FuturMix`, self-closed unmerged 14:44:01Z, +77/-0, *"docs: Add FuturMix AI Gateway to LLM providers"*
- `Aider-AI/aider#5070` — sha `3028be8b7a0c` — opened 14:43:49Z by `@Gzhao-redpoint`, +77/-0, *"docs: add FuturMix LLM provider documentation"* (case-insensitive identical title, identical content footprint)
