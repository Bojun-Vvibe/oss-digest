# W17 Synthesis #727 — Sub-minute same-author doublet on shared-logical-surface-but-disjoint-files: pre-batched merge-button mechanism distinct from independent same-author intra-tick doublets

**Anchor window:** 2026-05-06T06:08:13Z → 2026-05-06T06:09:08Z (55 seconds, single same-author event in qwen-code) compared against 2026-05-06T04:30:21Z → 2026-05-06T04:44:40Z (Brendonovich, anomalyco/opencode, 14m19s) and 2026-05-05T19:20:35Z → 2026-05-05T19:31:00Z (alexhancock, block/goose, 10m25s).
**Anchor carriers:** QwenLM/qwen-code (sub-minute regime), anomalyco/opencode and block/goose (minute-regime baselines).
**Lens:** when a same-author doublet's inter-merge gap drops below the typical CI-completion variance (~30–60s), the doublet ceases to be two independent merge decisions and becomes **a single pre-batched maintainer action**. This synth isolates that regime and shows it is mechanism-distinct from the prior disjoint-surface-doublet pattern (synth #92, #94, #96).

## Why this is distinct from prior synth (W17 #720–#726)

- **#92, #94, #96** capture **disjoint-surface same-author doublets** at minute-to-tens-of-minutes scale, with each merge treated as an independent merge decision. The implicit model is "author hits merge, waits, hits merge again."
- **#725** captures **cross-carrier same-author doublet inter-merge-gap divergence** spanning four orders of magnitude — but treats the entire distribution as a single phenomenon parametrized by gap.
- **#726** captures **bot-fanout vs. bot↔human-near-coincidence** at the seconds-scale, but exclusively in the bot-endpoint case.
- This synth (#727) returns to the **human-only same-author doublet** and argues that the distribution synth #725 modeled as a single continuum is actually **bimodal**: a sub-minute mode (pre-batched single action) and a minute-to-hours mode (independent decisions). The two modes carry **different information** about maintainer intent.

## The three instances

### Instance A — qwen-code, sub-minute regime (mechanism: pre-batched)

| PR | author | mergedAt | head SHA | files-touched class |
|---|---|---|---|---|
| [QwenLM/qwen-code#3768] | tanzhenxin | 2026-05-06T06:08:13Z | `0a0c17f7` | `cli/` (subagent pill+dialog) |
| [QwenLM/qwen-code#3735] | tanzhenxin | 2026-05-06T06:09:08Z | `03ed878e` | `core/` (subagent auto-compact) |

**Properties:**
- Inter-merge gap: **55 seconds**.
- Both PRs touch the **subagent execution surface** logically but **disjoint file directories** (cli/ vs core/).
- Both PRs are CI-green and queued **before** the first merge — verifiable from the PR numbers (#3735 is older than #3768 yet merges 55s later, implying both were already in the merge queue and the maintainer cleared them in one sitting).
- Open-to-merge lifespan for both PRs is multi-day, ruling out a "just-opened-just-merged" reflex.

**Mechanism**: tanzhenxin opened a maintainer-review session, found two subagent-surface PRs both ready, and clicked "merge" twice in succession. The 55s gap is **GitHub's per-merge transaction latency plus a single human reaction time**, not the time between two independent merge decisions.

### Instance B — anomalyco/opencode, minute regime (mechanism: independent decisions, shared surface)

| PR | author | mergedAt | head SHA | files-touched class |
|---|---|---|---|---|
| [anomalyco/opencode#25968] | Brendonovich | 2026-05-06T04:30:21Z | `031a0cc8` | `desktop/` (test-onboarding env) |
| [anomalyco/opencode#25972] | Brendonovich | 2026-05-06T04:44:40Z | `e969d0af` | `desktop/` (Sentry suppression) |

**Properties:**
- Inter-merge gap: **14m19s**.
- Both PRs touch the `desktop/` surface but **disjoint files** within it.
- #25972 was **opened after** #25968 merged — verifiable from PR numbering and merge times. The fix PR is **causally subsequent** to the feature merge, not pre-batched alongside it.

**Mechanism**: Brendonovich merged the feature, observed (or anticipated) a Sentry-noise consequence, opened the fix PR, waited for CI, and merged it. Two independent decisions, not one batched action.

### Instance C — block/goose, minute regime (mechanism: independent decisions, shared logical surface)

| PR | author | mergedAt | head SHA | files-touched class |
|---|---|---|---|---|
| [block/goose#9029] | alexhancock | 2026-05-05T19:20:35Z | `655e7f42` | agents-doc (CLAUDE.mds add) |
| [block/goose#9028] | alexhancock | 2026-05-05T19:31:00Z | `3fa7bf94` | agents-doc (AGENTS.md improve) |

**Properties:**
- Inter-merge gap: **10m25s**.
- Both PRs touch the agents-doc surface; #9029 ADDS files mirroring AGENTS.mds, #9028 IMPROVES the AGENTS.md content.
- Inverted ordering (add-mirror first, then improve-original) noted in Add.375.
- Inter-merge gap is **dominated by the time the maintainer needed to review/edit the second PR's content** — not pure transaction latency.

**Mechanism**: same-sitting but **two real review actions**, with the second action including content review of the AGENTS.md improvement.

## Diagnostic that distinguishes the modes

The sub-minute mode (Instance A) and the minute-mode (Instances B, C) **cannot** be distinguished by gap alone if one only looks at gap < 1m vs gap > 5m. They **can** be distinguished by:

1. **PR ordering vs. merge ordering**: Instance A has older PR (#3735) merge **after** newer PR (#3768) — only possible if both were already CI-green and in the merge queue. Instance B has the second PR opened after the first merge.
2. **Open-to-merge lifespan**: Instance A's PRs have multi-day lifespans; Instance B's #25972 has a sub-tick lifespan.
3. **File touch class**: Instance A touches **two top-level directories** (cli, core); Instances B/C touch **one** surface with disjoint files. The pre-batched mode tolerates **wider file divergence** because the maintainer reviewed both PRs in advance.

## Why this matters for the cadence model

Synth #725 modeled the same-author doublet inter-merge gap as a 4-orders-of-magnitude continuum. With the sub-minute pre-batched mode separated out, the **independent-decision** distribution is more concentrated:

- **Pre-batched mode (Instance A class)**: gap distribution centered at ~30–90s, dominated by GitHub transaction latency. Count: 1 confirmed instance in W18 day-1.
- **Independent-decision mode (Instance B/C class)**: gap distribution 5m–60m (intra-tick) with a long tail to 15h+ (qwen-code doudouOUC, Add.375). Count: 5+ confirmed instances W17–W18.

The **mixing of the two modes in synth #725's continuum** hid the bimodality. The cadence model should **predict the mode first** (from the diagnostics above), **then** the gap; treating gap as a single random variable underweights the structural information.

## Predictions falsifiable at Add.377–380

- A second pre-batched doublet will appear within 4 ticks; predicate is one author, two PRs both already CI-green for >24h, merging within 2 minutes. **Falsified** if no such instance occurs in the next 4 ticks.
- The pre-batched mode will appear in **codex** before it appears in **crush** — codex's high-throughput maintainer cluster (pakrym, bolinfest, viyatb-oai) is the natural habitat. **Falsified** if a crush pre-batched doublet lands first.
- Pre-batched doublets will preferentially span **two top-level surfaces** (cli/core, app/desktop, src/test) rather than two files within one surface. **Falsified** if the next pre-batched doublet touches one directory.

## Cross-references

- Add.375 (Brendonovich Instance B citation, alexhancock Instance C citation, doudouOUC long-tail citation).
- Add.376 (tanzhenxin Instance A citation, falsification of Brendonovich-triplet prediction).
- Synth #725 (gap-distribution continuum that this synth bisects).
- Synth #92, #94, #96 (the disjoint-surface same-author-doublet pattern that this synth refines).
