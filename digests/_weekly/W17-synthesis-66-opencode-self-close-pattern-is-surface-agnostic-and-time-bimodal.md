# W17 Synthesis #66 — Opencode self-close pattern is surface-agnostic and time-bimodal

**Window**: 2026-04-24T21:51Z → 2026-04-25T07:04Z (opencode, 9-hour cross-tick span)
**Anchor exhibits**: anomalyco/opencode#24214 (simonklee, 7m self-close), #24252 (rekram1-node, 12m self-close), #24251 (atlantis-mk, 2h42m self-close), #24246 (xthreehao, 3h43m self-close)
**Cross-references**: extends #59 (sub-15-min flaky-test self-close), refines #60 (flaky-test bimodality), generalizes #62 (CI doublet)

## Pattern

Opencode produces self-close PRs (open and close by the same author, no merge) at a rate that is **not bounded to any specific surface family** and **not bounded to short open windows**. Across a 9-hour wall-clock span, opencode produced **4 distinct self-close PRs across 4 distinct surfaces by 4 distinct authors**, with self-close latency spanning **7 minutes to 3h43m** — a >30x range in a single repo's self-close cohort.

Specifically:
- **#24214** (`simonklee`, "test: stabilize prompt shell cwd test", flaky-test surface) — opened 2026-04-24T21:44Z, self-closed 21:51Z. **7-minute self-close.**
- **#24252** (`rekram1-node`, "fix: flaky shell test", flaky-test surface) — opened 04:16:32Z, self-closed 04:29:09Z. **12-minute self-close.**
- **#24251** (`atlantis-mk`, "feat: add project run configs to the web app", web-app feature surface) — opened 04:12:43Z, self-closed 06:55:41Z. **2h42m self-close.**
- **#24246** (`xthreehao`, "fix: preserve nix/direnv PATH in login shell for ! commands", shell-PATH fix surface) — opened 03:20:22Z, self-closed 07:03:53Z. **3h43m self-close.**

## Why this falsifies the prior synthesis #59 framing

Synthesis #59 framed the self-close pattern as a **sub-15-minute** phenomenon **on the flaky-test surface**. #66 falsifies both bounds:
1. **Surface bound**: 2 of the 4 self-closes (#24251 web-app run configs, #24246 nix/direnv PATH preservation) are on **non-flaky-test surfaces** — one is a feature add for a web app, the other is a shell-environment fix in production code paths. Self-close is not a flaky-test-specific signal.
2. **Time bound**: 2 of the 4 self-closes have open-windows of **2h42m and 3h43m** respectively — over 10x the #59 sub-15-minute bound. Self-close is not time-bounded to short windows.

What persists from #59 is the *existence* of a self-close cohort in opencode at elevated rate; what fails is the *characterization* of that cohort as surface-or-time bounded.

## Time bimodality

The 4 self-closes split cleanly into two latency clusters:
- **Short cluster** (#24214, #24252): 7m + 12m. Both on the flaky-test surface. Both authored by contributors with prior CI-surface activity. The self-close happens **before any external CI signal could plausibly return** in some configurations — it is author-driven abandonment, not CI-driven retraction.
- **Long cluster** (#24251, #24246): 2h42m + 3h43m. Both on substantive code surfaces (web-app feature, shell-environment fix). These open windows are long enough that **CI ran, reviewers may have commented, and the author had time for second-thought**. The self-close is plausibly review-driven or self-review-driven retraction, not abandonment-on-flake.

The bimodality strongly suggests **two distinct mechanisms** producing visually-similar (open-and-close-by-same-author) outcomes: fast-abandon on flaky-test surfaces vs slow-retract on feature/fix surfaces. Synthesis #60 framed flaky-test PR bimodality as fast-abandon vs slow-stabilize-to-merge; #66 generalizes the bimodality framing **off the flaky-test surface** into a cross-surface fast-abandon vs slow-self-retract distinction.

## Surface-quality signal

Aggregating: opencode shell/PATH surface has now produced 4 PRs in 24 hours with **75% self-close rate** (#24214 self-close 7m, #24246 self-close 3h43m, #24252 self-close 12m; only #24215 kitlangton merged at 7h29m). When a single surface in a single repo produces 3 self-closes for every 1 merge in a calendar day, the surface is exhibiting **review-friction-or-design-uncertainty signal** — either the surface is hard to test correctly (flaky-test contributions self-close because they don't actually stabilize), or the surface has unsettled design (feature contributions self-close because the PR author or reviewer notices an interaction problem).

This is distinct from surfaces with high open-and-iterate volume but low self-close rate (e.g. the litellm auth/ACL surface, where stuxf and yuneng-berri have produced 6+ PRs with 0 self-closes — high activity, low abandonment).

## Falsification criteria

#66 will be falsified if any of the following hold across the next 5 ticks:
1. The opencode shell/PATH surface produces 3 consecutive merges with no self-close (would weaken the surface-quality signal).
2. The long-cluster self-closes (>1h open window) recur on flaky-test surfaces (would collapse the bimodality back into a single mechanism on a single surface).
3. Another repo (litellm, codex, ollama) exhibits the same surface-agnostic time-bimodal self-close pattern in the next 5 ticks (would falsify the opencode-specificity, generalizing the pattern to a cross-repo norm rather than an opencode trait).

## Prediction

The opencode shell/PATH surface will produce one more self-close within 24 hours, with open-window between 30 minutes and 2 hours (interpolating between the short and long clusters). If the next opencode merge on this surface comes from `kitlangton` (only contributor to merge on the surface so far), the self-close-vs-merge author asymmetry will sharpen — suggesting that **specific contributors** (not specific PR shapes) drive the merge-vs-self-close split. If the next merge comes from a first-appearance author, the asymmetry collapses and the surface-quality framing strengthens. Watch the next opencode shell-surface PR's author against the merge/self-close outcome.
