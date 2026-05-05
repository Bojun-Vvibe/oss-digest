# W17-synth-689 — sustained-iteration W17-class doublet (evawong-oai #21184 + yiliang114 #3854) reaches k_force=3-in-3-consecutive-ticks; first cross-carrier instance of the sub-sub-class

**Captured**: 2026-05-05T14:38:07Z (Add.355 tick).

**Pattern**: Single PR receives a silent force-push in **each of 3 consecutive dispatcher ticks** without title-stability break or MERGE — denote this **sustained-iteration W17-class** (k_force=3-in-3, k_iter_density = 1.0).

**Instances at Add.355 capture**:

1. **openai/codex #21184** (evawong-oai — `Use direct deny ACLs for Windows metadata sentinels`):
   - Add.353: title-rewrite force-push, head → `dc65955b92017254b5bd3875b844c21394de2844`
   - Add.354: head-only force-push, → `e42868f9af6115cf6ca39cdd27dc86e212940fe3`
   - Add.355: head-only force-push, → `95ef124d`
   - **k_force=3 across 3 consecutive ticks** (Add.353+Add.354+Add.355).

2. **QwenLM/qwen-code #3854** (yiliang114 — `ci: add Qwen Code issue follow-up bot workflow`):
   - Add.353: force-push, head → `53286381...`
   - Add.354: force-push, → `6bac8801...`
   - Add.355: force-push, → `8ab829e6`
   - **k_force=3 across 3 consecutive ticks** (Add.353+Add.354+Add.355).

**H1 — Cross-carrier portability of sustained-iteration class**: The class is *not* carrier-specific. Independent emergence on **codex (US-corporate-coredev author cohort)** and **qwen-code (Alibaba-cohort author yiliang114)** within the same tick-window (3 ticks) demonstrates **carrier-portability at multi-carrier instantiation density 2/7** (codex+qwen-code present; opencode/litellm/gemini-cli/goose/crush absent). Generalizes synth-686/687 H4 (multi-iterating-leg multi-PR-mode portability) one structural level deeper: not just *between-PR* iteration patterns port, but *within-single-PR* sustained-iteration density also ports.

**H2 — Author-archetype convergence**: Both sustained-iteration W17-class instantiators are **employed-by-carrier-vendor authors** (evawong-oai → OpenAI suffix `-oai`; yiliang114 → known qwen-code core-team contributor with multi-iterating-leg history). **Volunteer / first-time / drive-by authors are absent from the W17-class**: B-A-M-N (qwen-code first-time this W17), thiago-z0 (litellm first-time), cynthialong0-0 (gemini-cli first-time), jh-block (goose first instantiation), all sit at k_force ≤ 1. **Sustained-iteration density correlates with author tenure / role** — testable in synth-690+ via cross-checking author commit-history depth on the carrier.

**H3 — Stack-context independence**: evawong-oai #21184 sits in a **stable-cohort QUARTET** (#21173, #21174, #21175 stable + #21184 iterating — Add.351–354 captures); yiliang114 #3854 sits in a **multi-iterating-leg stack** (#3850 historical + #3854 +others — synth-686 reference). Different stack-contexts (stable-cohort-with-1-iterating vs all-iterating-stack) both produce W17-class behavior on a single leg — **sustained-iteration density is a per-PR property, not a per-stack property**. Falsifies any hypothesis that W17-class requires stack-wide iteration support.

**H4 — Sub-mode-4 instantiator pool growth-rate plateau**: Pool grew N=9 (Add.353) → N=11 (Add.354) → **N=12 (Add.355)** — **deceleration from +2 to +1**. The +1 is **B-A-M-N qwen-code stable-only-stack**, structurally distinct from all 11 prior instantiators (which had ≥1 iterating leg at instantiation). **Two coexisting growth modes**: (a) iterating-leg instantiation (canonical, all 11 prior + jh-block + cynthialong0-0); (b) stable-only-stack instantiation (B-A-M-N alone). H4 prediction: B-A-M-N transitions to canonical mode within 2 ticks (≥1 leg force-pushes), or remains stable-only and **defines a new sub-sub-class** ("dormant multi-PR-mode"). Resolves Add.357.

**H5 — Carrier-coverage of sustained-iteration W17-class**: Currently 2/7 carriers (codex+qwen-code). Predicts emergence on at least 1 of {litellm, gemini-cli, opencode} within remainder of W17 with prior 0.40 — these 3 carriers have active sub-mode-4 instantiators (Sameerlite, cynthialong0-0+euxaristia+rushikeshsakharleofficial, Hona) that could plausibly reach k_force=3 if they receive 2 more force-pushes in next 2 ticks. **goose+crush carrier-excluded** from W17-class hypothesis: jh-block #9023 paused at k_force=1 after Add.354 force-push (Add.355 NOT-REALIZED of P-354.J); crush full-quiescent tick-7.

**Falsification triggers (within 3 ticks)**:
- If neither evawong-oai #21184 nor yiliang114 #3854 receives 4th force-push in Add.356, sustained-iteration class becomes **bounded at k_force=3** (W17 ceiling).
- If a 3rd carrier hosts a k_force=3 instance within Add.356–358, H5 carrier-coverage prior 0.40 over-realizes.
- If B-A-M-N #3848/#3856 remain stable through Add.357, H4 "dormant multi-PR-mode" sub-sub-class is confirmed.

**Cross-link to W17-synth-686/687**: synth-686 established yiliang114 as **multi-iterating-leg multi-PR-mode first instantiator** (between-PR k_iter=3 across stack); synth-687 established jif-oai codex as **second instantiator** at carrier-portability tick-1. synth-689 now establishes a **deeper sub-sub-class** at *within-PR* sustained-iteration density k_force=3-in-3-consecutive-ticks, with the *same two carriers* (codex+qwen-code) hosting both the between-PR and within-PR sub-sub-classes. **Carrier-pair (codex, qwen-code) hosts both multi-iterating-leg and sustained-iteration W17-classes — a structural co-occurrence not yet observed on any other carrier-pair**. Conjecture: the carrier-pair shares an *iteration-tolerant code-review culture* that admits both topologies; testable by examining merge-velocity vs iteration-velocity ratios on these carriers vs the other 5.

**Closing note**: This synthesis treats Add.353+Add.354+Add.355 as a unit-window for the sustained-iteration class. The class is **3 ticks wide minimum** by definition; testing for k_force=4 (P-355.B+P-355.C) requires Add.356 capture. If both 4th force-pushes land, the class extends to **k_force=4-in-4** and we re-classify as "extreme sustained-iteration W17-class"; if neither lands, we record a hard k_force=3 ceiling for W17.
