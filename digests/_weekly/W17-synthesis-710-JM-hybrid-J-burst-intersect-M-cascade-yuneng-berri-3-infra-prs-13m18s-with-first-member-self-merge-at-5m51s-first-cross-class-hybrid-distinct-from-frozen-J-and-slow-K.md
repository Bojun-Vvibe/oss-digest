# W17 Synthesis #710 — JM-hybrid (J-burst ∩ M-cascade): yuneng-berri opens 3 `[Infra]` PRs in 13m18s with the FIRST member self-merging at 5m51s — first observed cross-class hybrid where a same-author burst is co-instantiated with an in-burst self-merge cascade, distinct from frozen-stack J (rhan-oai/bolinfest) and slow-iteration K (ishaan-berri prometheus)

**Anchor window**: 2026-05-05T22:45:32Z (yuneng #27240 open) → 2026-05-05T22:58:50Z (yuneng #27245 open). **Burst envelope: 13m18s.** Embedded merge event: 22:51:23Z (#27240 MERGED at 5m51s after open).

**Anchor signal**: A single author (yuneng-berri, litellm internal infra) opens **3 PRs in 13m18s**, all tagged `[Infra]`, with **member 1/3 merging within the burst envelope** (#27240 MERGED 22:51:23Z, before #27245 was opened at 22:58:50Z). This produces a **cross-class hybrid** that does not fit either established W17–W18 burst taxonomy bucket:

- **Not pure J**: J-class bursts (rhan-oai/bolinfest) feature **frozen heads + no in-burst merges** for the entire burst envelope. Yuneng's burst has a merge inside the envelope.
- **Not pure M**: M-class cascades (post-merge author momentum, e.g., jh-block #9023→#9038 at Add.366, kalvinnchau ACP stack) feature a merge **followed by** a single new open. Yuneng has a multi-PR burst that **straddles** the merge.
- **Not pure K**: K-class slow-iteration (ishaan-berri prometheus, oss-agent-shin SSO) features **6+ PRs over 1–3h with no in-burst merges**. Yuneng is faster (13m vs 60–140m envelope) and has a merge.

**Provisional classification**: **JM-hybrid**, defined as a J-class burst (≥2 same-author PRs in ≤30m envelope, same surface family) **with at least one in-envelope merge** of a burst member. Yuneng is the **first observed instance**.

## The 3-member yuneng JM-hybrid

| PR | head SHA | createdAt | merged-at | state @ 23:09Z | title |
|---|---|---|---|---|---|
| [#27240](https://github.com/BerriAI/litellm/pull/27240) | `87bda4a6b13134a44fbc0fa81e60e048fd61a497` | 2026-05-05T22:45:32Z | **2026-05-05T22:51:23Z** | **MERGED** (5m51s) | `[Infra] Build UI` |
| [#27241](https://github.com/BerriAI/litellm/pull/27241) | `eff0f8c630b267f55ef1dbca15d05193422fbd2b` | 2026-05-05T22:46:19Z | — | OPEN | `[Infra] Packaging: Relax Core Runtime Pins To Ranges` |
| [#27245](https://github.com/BerriAI/litellm/pull/27245) | `e84282b7b39c4c5590c300140919e07f8a6b2e58` | 2026-05-05T22:58:50Z | — | OPEN | `[Infra] Promote internal staging to main` |

**Burst geometry**: gaps **47s** (open #27240→#27241) and **12m31s** (open #27241→#27245). Asymmetric gap distribution: the first 2 opens are tight (sub-1-minute, J-canonical), then a **12m31s pause** before #27245. The 12m31s pause **brackets the merge event of #27240** at 22:51:23Z (which is 4m04s after #27241 opened and 7m27s before #27245 opened) — the author paused to let CI / review complete on the first member, then opened the third after the merge.

## Why JM-hybrid is a distinct class

Three orthogonal axes distinguish JM-hybrid from existing classes:

| axis | J (rhan-oai/bolinfest) | K (ishaan-berri) | M (jh-block/kalvinnchau) | **JM-hybrid (yuneng)** |
|---|---|---|---|---|
| envelope width | ≤4s (sub-second J) or ≤40s (J′) | 1–3h | 21m (single new open after merge) | 13m18s |
| in-envelope merges | 0 | 0 | 1 (the trigger merge) | **1** (a burst member merges) |
| author merge-rights | typically NO (contributor) | typically NO (contributor) | YES (maintainer) | **YES** (yuneng-berri internal infra) |
| substrate convergence | disjoint surfaces, common verb-prefix | identical surface, iterative title | adjacent surfaces, post-merge | **same `[Infra]` tag, related substrates** |
| toolchain signal | sync force-push (J→H) | none observed | none observed | **none observed (yet)** |

JM-hybrid sits in the **(maintainer × multi-PR-burst × in-envelope-merge)** cell — a cell empty in W17–W18 prior to this tick. The yuneng instance is the **first observed populator**.

## Mechanism hypothesis

Hypothesis: **JM-hybrid is the maintainer-equivalent of J**. When a maintainer with merge-rights opens a stack, they don't need to wait for review on the foundation PR (e.g., `[Infra] Build UI` is presumably a small foundational change like a CI fix or a build script tweak); they can self-merge the foundation, then open the dependent PRs that build on it. The 47s open-gap on PRs 1→2 mirrors J-canonical pacing (author has the stack ready). The 12m31s gap before PR 3 is the **merge-induced pacing pause**: the author waits for CI (or just for the merge to settle) before opening the dependent PR.

If the hypothesis holds, JM-hybrid bursts should:
1. Always have **PR 1** as the merge target (foundational, cleanest diff, smallest)
2. Have **monotone-increasing inter-open gaps** (tight on the pre-merge subset, longer after the merge)
3. Have the merging PR's surface be a **build/CI/release infrastructure** PR (not a feature PR)

Yuneng's instance satisfies all 3 conditions (#27240 = `Build UI` is the foundational build PR; gaps 47s → 12m31s are monotone-increasing; the merged PR is on UI build infrastructure).

## Author cross-cohort context (yuneng-berri)

yuneng-berri's 3-hour activity window (20:41Z–22:58Z) shows **3 merges** prior to the JM-hybrid:
- #27227 `[Fix] UI: Clear Admin Session Cookies Before Establishing Invited User's Session` MERGED 20:57:07Z
- #27240 `[Infra] Build UI` MERGED 22:51:23Z (JM-hybrid member 1)
- (carried earlier merges from prior tick)

This is a **micro-merge-cascade** (3 merges in ~2h) **prefacing** the JM-hybrid. Sub-class M (post-merge author momentum) typically triggers **single new opens**; here the prior merges seem to have triggered a **multi-PR JM-hybrid**, suggesting that as merge-cascade depth increases (M_n for n merges), the next-burst cardinality also increases (cardinality 1 for M_1, cardinality 3 for M_3 in this instance). Predict a **monotone relationship** between merge-cascade depth and post-cascade burst cardinality, observable across yuneng-berri's W17–W18 history.

## Carrier and surface specificity

JM-hybrid is observable on litellm because litellm's internal staging→main promotion flow is structured around **multi-PR infra waves** (e.g., #27240 + #27241 + #27245 all touch the staging→main release plumbing). Predict JM-hybrid is **carrier-rare** (most observable on litellm and possibly opencode where there are clear maintainer roles); should be **carrier-absent** on qwen-code and crush (smaller maintainer cohorts, less infrastructure-heavy).

## Predictions

- **P-710.A**: yuneng-berri opens **#27246 or later** with `[Infra]` prefix within 1 tick. If yes, JM-hybrid grows to N=4 cardinality and the multi-author single-tag cluster confirms; if no, JM stays at N=3 and the 12m31s pause at the end was the burst terminator.
- **P-710.B**: #27241 (Packaging: Relax Core Runtime Pins) merges within 4 ticks (~2.5h). If yes, JM-hybrid is **fast-merge-class** and confirms maintainer-self-merge interpretation; if it stays OPEN >12 ticks, JM-hybrid is **slow-merge despite maintainer rights** — implying the burst opens speculative infra PRs that need cross-team review, and the in-envelope merge of #27240 was an exception not the rule.
- **P-710.C**: A **second JM-hybrid instance** appears on litellm within 24h, by ishaan-berri or stuxf (the other observed merge-right authors with active stacks). If yes, JM-hybrid is a **carrier-stable class on litellm**; if no, yuneng's instance is a one-off and the class needs n=2 before the formal classification stabilizes.
- **P-710.D**: A JM-hybrid instance appears on **opencode** by jlongster within 7 days. jlongster is opencode's most-active maintainer with multiple in-burst merges already observed. If yes, JM is **cross-carrier portable**; if no, JM is **litellm-internal-infra-bound** (which itself would be a finding about org operating mode differences).
- **P-710.E**: The 12m31s post-merge pause is the **JM-discriminator gap**. Subsequent JM-hybrid instances should show a similar 8–18m post-merge pause before the next burst-member opens; gaps outside that band falsify the **merge-induced-pacing-pause** mechanism.
