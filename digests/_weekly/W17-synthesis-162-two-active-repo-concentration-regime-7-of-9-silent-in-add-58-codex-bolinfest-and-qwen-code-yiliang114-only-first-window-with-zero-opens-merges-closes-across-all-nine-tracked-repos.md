# W17 Synthesis #162 — two-active-repo concentration regime: 7-of-9 tracked repos silent in Add.58 with all in-window write traffic on codex (bolinfest stack only) + qwen-code (yiliang114#3615 only) — first window in W17 with literally zero opens, zero merges, zero closes across all nine tracked repos

**Window of evidence:** Add.55–Add.58, with anchor on Add.58 (14:04:24Z → 14:31:28Z, 27m04s).

**Prior threads:**
- Synth #150 introduced wenshao oscillation (regime D) and the silent-window framing.
- Synth #152 P-152.A/B test on sst/opencode close-without-merge events: now at **window 5 of an originally-4-window horizon** with no further such events (Add.58 extends silence to 6 consecutive windows).
- Synth #157 confirmed branch-channel-pattern on litellm (non-`main` integration branches as silence-break vector).
- Synth #160 framed "two simultaneous same-author-divergent regimes on one repo" (B-A-M-N + yiliang114 on qwen-code).

**Observation that forces this synth.** Add.58 is the **first window in W17 with literally zero PR-state-change events across all nine tracked repos**: zero opens, zero merges, zero closes-without-merge, zero label/draft transitions, zero releases. The only in-window writes are:
- 1 stack-rebase event on **openai/codex** (bolinfest#22, 4-PR downstream block at 14:14:00Z, with #19606 skipped — see synth #161)
- 1 commit on **QwenLM/qwen-code#3615** (yiliang114, head `63bdf49b111c` at 14:17:56Z, +29 net)

Everything else is dormant. **Seven of nine tracked repos produced no observable write traffic**: sst/opencode (Add.53–58, six-window silence), BerriAI/litellm (first silent window since Add.55 — zyz23333#26550 dormant 1 window, hakusanb0#26549 dormant 2 windows), charmbracelet/crush (silent post-Add.56-merge-prune), cline/cline (silent Add.57–58), block/goose (silent Add.55–58, four windows), All-Hands-AI/OpenHands (silent Add.55–58, four windows), Aider-AI/aider (silent Add.55–58, four windows).

**The two-active-repo concentration regime.** Across Add.55–58 (four consecutive windows), the active-repo set has contracted monotonically: Add.55 = {codex, qwen-code, litellm, crush}; Add.56 = {codex, qwen-code, litellm, crush}; Add.57 = {codex, qwen-code, litellm}; Add.58 = **{codex, qwen-code}**. **The active-repo cardinality is monotonically decreasing for 3 consecutive transitions**, hitting **2 at Add.58** — the smallest since at least Add.50. This is the tightest activity concentration in the tracked Add.50–58 range and is the **first observed instance of a two-active-repo regime in W17**.

**Cross-repo cadence asymmetry.** Within the two-active-repo set, the cadence is structurally different:
- **codex** activity is **stack-coupled bursty** — bolinfest's rebase events fire at irregular but compressing intervals (synth #161: 19m54s new min at #22) and produce 4–5 SHA bumps per event.
- **qwen-code** activity is **author-coupled steady** — yiliang114's three within-window commits across Add.55→Add.57→Add.58 form a **regular per-window cadence on a single PR (#3615)**, with no stack-coupling.

These two cadence modes — bursty-stack vs steady-single-PR — are the **two atoms of in-window write traffic in the two-active-repo regime**. Neither resembles the other; the regime is held together by happenstance of two unrelated authors sustaining cadence past the silence point of the other seven repos.

**P-152.A/B horizon overshoot.** Synth #152's original test horizon was 4 windows for further sst/opencode close-without-merge events. Add.58 is **window 6** of that horizon with the null result holding. The horizon should be re-budgeted to "open-ended" — the null result is now durable enough to be treated as the canonical outcome at the W17 timescale, not a within-budget falsification. **P-162.A:** sst/opencode will not produce a close-without-merge event for the remainder of W17.

**P-162.B:** The two-active-repo regime is a **transient state**, not a steady state. Either litellm breaks silence (zyz23333 or hakusanb0 commit on the integration-branch channel — synth #157's mechanism still applies) or one of the four-window-silent repos (goose / OpenHands / aider) wakes — within the **next 3 windows**. Falsification mode: 3 consecutive additional windows with active-repo cardinality ≤ 2.

**P-162.C:** If the active-repo cardinality drops to **1** in the next window (i.e., either codex or qwen-code goes silent and the other does not), the regime crosses into a **single-active-repo state never observed in tracked W17**. Likelihood is non-trivial because (a) bolinfest's compressed cadence at #22 suggests the stack is approaching merge — at which point all five PRs land and codex goes silent; (b) yiliang114's within-window cadence on #3615 has no merge-signal yet, so qwen-code is the more likely sustained-active repo. **A single-active-repo qwen-code window is a plausible Add.59 outcome**, especially if the bolinfest stack lands.

**Cross-synth corroboration with #160.** The two-active-repo regime makes synth #160's "two simultaneous same-author-divergent regimes on qwen-code" framing **even sharper at Add.58**: with codex's only activity being bolinfest's stack rebase (a single-author event by definition), **all in-window write traffic across all nine tracked repos in Add.58 is generated by exactly two human authors: bolinfest and yiliang114**. The wenshao#3642 and B-A-M-N#3631 review-only updatedAt bumps are **non-write metadata** and do not count as authored traffic. **Add.58 is the first observed window in W17 where total in-window authored writes = 2 humans across 9 repos.**

**P-162.D:** Add.59's authored-writer cardinality will be ≤ 3 (return to compactness) rather than ≥ 5 (broad reactivation). Falsification mode: ≥ 5 distinct human authors produce commits across the nine tracked repos in Add.59.
