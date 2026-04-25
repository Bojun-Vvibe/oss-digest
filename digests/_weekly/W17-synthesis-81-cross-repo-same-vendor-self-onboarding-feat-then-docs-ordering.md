# W17 Synthesis #81 — Cross-Repo Same-Vendor Self-Onboarding by a Single Vendor-Shaped Account, Multi-Day Cadence, Feat-Then-Docs Ordering

**Status:** new pattern observation. Refines synthesis #71 (vendor self-onboarding intra-repo sub-hourly self-iteration) into its cross-repo, multi-day dual.

## Pattern

A single GitHub account whose login is **the vendor's brand name** (rather than a personal handle) opens PRs in **multiple unrelated agent-tooling repos** to register that vendor as a first-class provider/integration. The cross-repo PRs:

1. Span **>12 hours, <72 hours** between first and second PR (long enough to not look bot-like, short enough to be a coordinated rollout).
2. Are ordered **feat first, docs second** — the integration PR ships in the higher-value repo first; the docs/setup guide PR follows in the second repo. This ordering reveals a vendor-side rollout playbook: prove the integration works (feat) before publishing setup instructions (docs).
3. Have **no cross-references** between the PRs (neither links to the other in title, body, or comments visible at observation time).
4. Touch **provider-registry / model-list / integration-guide** surfaces — never core agent logic, never tests, never deps.

The vendor-shaped account name is the structural tell: a personal contributor account would not synchronously file the same vendor's onboarding across two different agent stacks within 24 hours. The account name *is* the vendor's product name.

## Concrete instance — `FuturMix`, 2026-04-24 → 2026-04-25

| Repo | PR | Opened | Title | Type | Surface |
|---|---|---|---|---|---|
| OpenHands | #12220 | 2026-04-24T15:32:04Z | "feat: add FuturMix as a model provider" | feat | provider-registry |
| continuedev/continue | #10406 | 2026-04-25T11:54:45Z | "docs: Add FuturMix AI Gateway setup guide" | docs | setup-guide |

- **Cross-repo gap:** 21h22m41s.
- **Author display name:** empty in both (vendor-shaped login `FuturMix`, no person attached).
- **Surface ordering:** feat → docs, in line with the hypothesis.
- **First-iteration cadence on continue#10406:** open (11:54:45Z) → refresh (11:56:35Z) = 1m50s. Sub-hourly self-iteration *within* the docs PR — i.e., synthesis #71's intra-repo cadence is *also* present, nested inside the cross-repo pattern.

The OpenHands PR (#12220) was last refreshed on 2026-04-24T17:50:59Z, which is 18h04m before the continue PR opened — i.e., the vendor finished their first-repo iteration cycle, then moved to the second repo and started a fresh iteration cycle there. **Not parallel; sequential and disjoint.** This is operationally distinct from a coordinated multi-repo bot push.

## Why this is structurally distinct from #71

Synthesis #71 (vendor self-onboarding sub-hourly self-iteration) observed a vendor account iterating rapidly **within a single repo, single PR**, with zero maintainer interaction. The hypothesis there was that the vendor was running a polish/CI loop locally before maintainers woke up.

Synthesis #81 is the **cross-repo dual**: same vendor, **two repos**, sequential rollout with a multi-hour gap. The intra-repo iteration loop of #71 is *contained inside* each of the cross-repo PRs (e.g., #10406 has its own ~2-minute iteration), so #81 does not replace #71 — it **wraps** it.

The synthesis pair (#71 + #81) jointly characterizes vendor onboarding as a **two-level nested cadence**: outer cadence ~12-72h between repos, inner cadence ~minutes between iterations within each repo.

## Distinction from prior syntheses

- **vs #69 (multi-author single-day refresh convergence on provider-family surface)**: #69 is *multiple authors* converging on one surface; #81 is *one vendor account* spanning multiple repos. Opposite axis.
- **vs #70 / #80 (long-tail refresh waves)**: those are about *aged* PRs being refreshed; #81 is about *fresh* PRs being opened.
- **vs #74 (velocity-leadership rotation across consecutive ticks)**: #74 is repo-level rotation; #81 is *author* persisting across repos.
- **vs #79 (cross-repo defensive payload-shape convergence)**: #79 is multi-author convergence on a shared *defensive* surface; #81 is single-author convergence on a *promotional* surface (vendor visibility).

## Falsifiable hypothesis

If `FuturMix`'s pattern is generalizable to vendor-shaped accounts:

1. We should observe ≥1 third-repo PR by `FuturMix` within the next 7 days, on the same surface family (provider integration), in a target like `BerriAI/litellm`, `cline/cline`, or `Aider-AI/aider` — these are the obvious next targets in the agent-tooling ecosystem.
2. The third PR, if filed, should follow the same feat-first-then-docs ordering relative to the existing pair: if it lands in litellm (provider gateway), it should be a *feat* (since docs already exist); if it lands in `cline`, it should match cline's preferred onboarding shape (likely also a feat).
3. Other vendor-shaped accounts (`Abliteration AI` in continue#10403, `Atlarix` in ollama#15790, `Doubao/MackDing` in OpenHands#12219) should show the same cross-repo cadence within their own rollout windows. If we observe vendor-shaped accounts that file in only one repo and never expand, the cross-repo hypothesis is bounded — it characterizes *successful* vendor expansion, not vendor onboarding in general.
4. The feat→docs ordering should hold ≥75% of the time across the observed vendor-account cohort. If docs-first occurs more frequently than ~25%, the ordering hypothesis is wrong and the actual ordering is "whichever repo is easier to land in first."

## Operational implication

For maintainers of agent-tooling repos: **vendor-shaped accounts that file a single integration PR are likely to file a follow-up in an adjacent repo within 72h.** Cross-repo coordination of review (e.g., asking the vendor to land in litellm first since it's the gateway, or asking for joint test coverage across two repos) is feasible *only if* maintainers can detect the vendor-shaped account pattern and reach across repos quickly.

For ecosystem observers: **the population of vendor-shaped accounts is a leading indicator of which providers are seriously chasing the agent-tooling market.** A vendor that files in one repo and stops is signaling weaker commitment than one that files in two within 24h.

For the vendors themselves: the visible feat→docs ordering pattern, if generalized, suggests the cohort is following an implicit shared playbook — possibly distilled from a small number of well-publicized prior successful onboardings (e.g., Anthropic, Mistral). The first vendor to *publish* a "how to onboard your provider into the agent-tooling ecosystem" guide will likely calcify this playbook further.
