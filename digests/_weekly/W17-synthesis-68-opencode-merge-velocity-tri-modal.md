# W17 Synthesis #68 — Opencode merge-velocity is tri-modal, not bi-modal: long-tail >6-week feature PRs are a third distinct mode

**Window**: 2026-02-20T16:33Z → 2026-04-25T07:45Z (opencode, ~64-day cross-tick span on long-tail PRs; same-day window for fast-mode exhibits)
**Anchor exhibits**:
- Sub-60s mode: anomalyco/opencode#24253 (rekram1-node, 12s self-merge); openai/codex#19514 (etraut-openai, 53s self-merge — different repo cross-precedent)
- Multi-hour-to-day mode: anomalyco/opencode#24215 (kitlangton, shell-cwd, 7h29m open-to-merge)
- Long-tail mode: anomalyco/opencode#14468 (balcsida, LiteLLM provider, 64 days open and refreshed in window); anomalyco/opencode#16525 (3x3cut0r, config.d fragments, 48 days open and refreshed in window)
**Cross-references**: extends #65 (single-author micro-burst with self-merge), refines #66 (self-close bimodality), challenges #60 (flaky-test bimodality scoping)

## Pattern

The opencode merge-velocity distribution, when traced across the W17 corpus + the long-tail PRs that surfaced in Addendum 11, is **not bimodal** (fast self-merge vs slow review-iterate). It is **tri-modal**, with three structurally distinct merge-time clusters separated by 2–3 orders of magnitude:

| Mode | Open-to-merge latency | PR shape | Author class | Surface | W17 examples |
|---|---|---|---|---|---|
| **Sub-minute self-merge** | 12s – 60s | trivial docs / CI / small-fix | author = merger | low-stakes (README, CI script) | opencode#24253 (rekram1-node, 12s); cross-repo: codex#19514 (etraut-openai, 53s) |
| **Hour-to-day single-author iteration** | 30m – ~24h | scoped feature/fix | typically author ≠ merger (or maintainer self-merge after CI) | medium-stakes (shell-cwd, provider tweak) | opencode#24215 (kitlangton, 7h29m); litellm#26492 (yuneng-berri, 9m48s — fast end of mode); litellm#26493 (yuneng-berri, 29m24s) |
| **Multi-week long-tail iteration** | >30 days | non-trivial feature with cross-cutting impact | community contributor (rarely maintainer) | high-stakes integration (provider, config-loader) | opencode#14468 (balcsida, 64 days as of 07:15Z refresh); opencode#16525 (3x3cut0r, 48 days as of 07:41Z refresh) |

The three modes are separated by **roughly 3 orders of magnitude each**: sub-60s vs ~7h is a ~400x gap; ~7h vs 64-day is a ~220x gap. There is no continuous distribution; there are three clusters with very thin tails between them.

## Why this falsifies prior framing

Synthesis #65 introduced the sub-60s self-merge as an outlier-becoming-pattern. Synthesis #66 documented self-close bimodality (short flaky-test self-close vs long feature/fix self-close). Both treated the merge side of the distribution as effectively single-mode (eventual merge after iteration). Addendum 11's data on #14468 and #16525 forces a reframe: there is a **separate merge-mode for >6-week-old feature PRs that are still actively iterating, not abandoned**.

Specifically:
- **#14468** (`balcsida`, LiteLLM provider with auto model discovery) — opened 2026-02-20, refreshed 2026-04-25 07:15:39Z. **64 days open, 15 comments, 8 reactions (5 thumbs-up, 2 rocket, 1 eyes), still active.** This PR is **not abandoned** (active refresh in window) and **not in the iteration mode of #24215** (7h vs 64 days is a 220x latency gap). It's a third thing.
- **#16525** (`3x3cut0r`, config.d fragments) — opened 2026-03-07, refreshed 2026-04-25 07:41:13Z. **48 days open, 3 comments, 7 reactions (3 hooray, 4 heart), still active.** Same shape: long-tail-but-active.

Both PRs share three characteristics that distinguish them from mode 2 (hour-to-day):
1. **Cross-cutting integration**: a new provider (#14468) or a new config-loading mechanism (#16525). Touches the public surface in a way the maintainers must approve at design level, not just at code-quality level.
2. **External-author**: both `balcsida` and `3x3cut0r` are non-maintainer community contributors (`author_association: NONE` in both cases). Mode 2 is dominated by maintainer-or-collaborator authors.
3. **Reaction-count > comment-count or comparable**: 8 reactions / 15 comments and 7 reactions / 3 comments — community signal of "we want this" without a corresponding maintainer-comment burst that would either close it or merge it.

## Why mode 3 exists structurally

The PR opencode#14468 description frames itself as **building on and superseding** prior community PRs (#13896, #14277, #14202). This is a **community contribution that is iterating against an absent maintainer-design**: the author has done the engineering, but no maintainer has either signed off on the design direction or rejected it. The PR sits in mode 3 because:
- **Mode 1 doesn't apply**: not trivial; can't be self-merged.
- **Mode 2 doesn't apply**: no maintainer is engaging on a 7h-cycle to iterate-and-merge.
- **Self-close (mode 0, per synthesis #66)**: the author hasn't given up; they're still refreshing.

The PR therefore enters a **fourth-state holding pattern**: alive, refreshed, accumulating community reactions, but not converging toward merge or close. Mode 3 is the **structural waiting room** for community contributions that need a maintainer-side design decision that hasn't happened.

## Cross-reference structure

- **#65** (single-author micro-burst with self-merge): mode 1 exhibit. #68 places #65 inside a larger 3-mode structure.
- **#66** (self-close surface-agnostic time-bimodal): treats the close side as bimodal. #68 notes the close side has 2 modes (fast-abandon, slow-self-retract) AND the merge side has 3 modes (sub-60s, hour-to-day, multi-week). The total opencode PR-outcome distribution is therefore at least 5-modal (3 merge modes + 2 close modes).
- **#60** (flaky-test PR bimodality: fast-abandon vs slow-stabilize): #60's "slow-stabilize" needs to be split between mode 2 (hour-to-day stabilization that does merge) and mode 3 (multi-week stabilization that doesn't yet merge). #60's bimodal framing was specific to flaky-test PRs; #68 generalizes the merge side to all opencode PRs and finds tri-modality.
- **#62** (CI doublet): mode 1 / mode 2 hybrid — the doublet pattern is explicitly fast (within minutes) and so lives entirely in mode 1 / fast-end-of-mode-2.

## Empirical test of the tri-modal claim

Looking at the data the W17 corpus has on opencode merge events specifically (not closes, not opens):
- 7h29m (#24215, kitlangton, shell-cwd): mode 2.
- 12s (#24253, rekram1-node, flaky shell test fix): mode 1.
- All other opencode merges in the corpus that were timed: in the hours-to-low-day range (mode 2).
- 0 multi-week merges observed in the corpus window so far.

**The tri-modal claim is currently asymmetric**: modes 1 and 2 have observed merges; mode 3 has observed *active iteration* but no observed *merge*. The claim is that mode 3 is a distinct holding state, not necessarily that it produces merges within the corpus window. The falsification path runs through "do mode-3 PRs ever merge?"

## Falsification criteria

#68 will be falsified if any of the following hold across the next 5 ticks (or the next month for mode-3 maturation):
1. opencode#14468 or opencode#16525 merges within 24 hours of an Addendum 11 refresh — would suggest mode 3 collapses into mode 2 with sufficient maintainer attention, not a separate mode.
2. opencode#14468 or opencode#16525 closes (any close type) within 7 days — would suggest mode 3 is just delayed mode-0 (eventual self-close), not a distinct holding pattern.
3. A new opencode PR opens, accumulates >5 reactions and >5 comments, sits open for >30 days, and exhibits the same "actively-refreshed-but-not-converging" shape — would corroborate mode 3 as a recurrent structural state, not a one-off.
4. Mode 2 produces a merge with open-to-merge latency >7 days — would shrink the latency gap between modes 2 and 3 and make the tri-modal claim a smooth distribution claim rather than a clustered one.

## Prediction

Within the next 5 ticks, neither #14468 nor #16525 will merge or close. At least one will receive another refresh (rebase, comment, or push) within 48 hours, sustaining the mode-3 active-but-stuck shape. If a maintainer engages on either PR with a design-level comment (not a nit-comment), the PR will exit mode 3 in one of two directions: into mode 2 (merge within 24h of design sign-off) or into mode 0 (close within 24h of design rejection). Mode-3 PRs decay into mode 2 or mode 0 only via maintainer-design-decision events; routine reviewer-comment activity does not move them.

## Connection to broader W17 pattern

The litellm side of the W17 corpus does **not exhibit mode 3** strongly — `yuneng-berri`'s cascade compresses entirely within mode 1/mode 2 (sub-60-minute open-to-merge for several PRs). litellm appears to have higher maintainer-design-decision throughput than opencode, so community PRs either merge or close quickly rather than entering a multi-week holding pattern. **Tri-modality may be opencode-specific**, with litellm exhibiting bi-modality (mode 1 + mode 2 only). The cross-repo comparison for mode 3 is the open question for synthesis #69+.
