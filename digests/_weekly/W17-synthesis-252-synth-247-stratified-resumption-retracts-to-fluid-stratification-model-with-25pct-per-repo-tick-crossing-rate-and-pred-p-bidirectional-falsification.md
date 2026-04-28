# W17 Synthesis #252 — synth #247 stratified-resumption framework retracts to **fluid-stratification model**: ADDENDUM-107 Pred P bidirectional falsification (deep≥3h count fell from 3 to 1, shallow≥1h count rose from 1 to 2 in one tick) plus 3 cross-class crossings in 2 ticks (opencode shallow→mid→shallow, qwen-code structurally-inactive→shallow, codex shallow→mid) demonstrate **stratification classes are per-tick snapshots, not stable attractors** — replacing synth #247's "stratified-resumption" with a **crossing-rate-driven fluid model** where the diagnostic value is in the *transitions* (#24693 1h02m kitlangton merge, #3623 2d7h doudouOUC merge, #19836+#19892 codex 65s doublet) not in the *class memberships*

**Status:** PROMOTED from ADDENDUM-107 Pred P bidirectional falsification. Synth #247's framework is **explicitly retracted** as a stable-class model and **reframed** as a fluid-transition diagnostic. Synth #248 (gemini-cli pause-deepening as deep-class exemplar) survives as a per-repo trajectory observation but **does not generalize** as the deep-class is no longer a stable cohort.

## Falsification angle

Synth #247 (Add.105) introduced shallow/mid/deep stratification with a strong implicit assumption: **once a repo enters a class, its near-term resumption probability is class-determined**. Pred P (Add.105) operationalized this as a 2-tick prediction that the deep-cohort would stay deep (≥3h ≥2 of 3) and the shallow-cohort would stay shallow (≥1h ≤1 of 3). **At Add.107 Pred P falsifies on BOTH sides**:

- **Deep-cohort side:** {qwen-code, litellm, gemini-cli} silence-≥3h count = **1** (only gemini-cli; qwen-code merged #3623 + #3682 doublet, litellm merged #26661). Required ≥2. **Falsified.**
- **Shallow-cohort side:** {opencode, codex, goose} silence-≥1h count = **2** (codex 1h28m44s after #19892 / #19836 doublet at Add.106 close, goose 3h59m+ since #8854 22:11:20Z). Required ≤1. **Falsified.**

A bidirectional Pred P falsification is **maximally informative**: it cannot be salvaged by adjusting one threshold, because the **relative ordering of the cohorts itself flipped within 2 ticks**. The deep-cohort produced more merges per tick than the shallow-cohort during Add.106-107. **This is the strongest single-tick refutation in the W17 sample to date.**

The falsification is reinforced by **3 cross-class crossings in 2 ticks**:
- **opencode shallow→mid→shallow** (Add.106 crossed up, Add.107 reverted) — Pred W non-monotonic branch.
- **qwen-code structurally-inactive→shallow** (Pred 246-4 hard-falsified by #3623 + #3682 doublet at 12h22m+ silence-end).
- **codex shallow→mid** (Add.107, after #19892 → 1h28m+ silence accumulating).

**Three crossings in 12 repo-ticks (6 repos × 2 ticks) ≈ 25% per-repo-tick crossing rate**, vastly higher than synth #247's implicit ≤10% assumption.

## Core empirical claim — stratification is fluid; the diagnostic value is in transitions

Synth #252 reframes the stratification framework along three axes:

| Axis | Synth #247 framing (retracted) | Synth #252 reframing |
|------|-----------------------------------|------------------------|
| Class membership | Stable per-Add property; predicts next-tick resumption | Per-tick snapshot only; no next-tick predictive power |
| Crossings | Rare; ≤1 per 4 ticks expected | Common; ~25% per-repo-tick observed |
| Diagnostic value | In the cohort composition | In the **direction and magnitude** of transitions |
| Resumption mode | Class-determined (deep stays paused, shallow resumes) | **Deferred-batch-driven** (synth #249 generalized cross-repo at Add.107) |

**The replacement diagnostic primitive is the *crossing event itself*, not the class label.** A shallow→mid crossing (opencode Add.106, codex Add.107) is **a more informative signal** than the static class membership, because it correlates with **upcoming author-cluster prep** (e.g., codex's #19895/#19899/#19900/#19901/#19904/#19905/#19907 7-PR open-burst during the mid-pause window). A deep→shallow crossing (qwen-code Add.107) correlates with **deferred-batch resumption** (#3623 + #3682 doublet inside 17m).

## Distinguishing predicates from synth #247

Synth #247 Pred P assumed cohort-stickiness over 2-tick windows. **Synth #252 explicitly assumes anti-stickiness** and predicts crossings will be observed at base rate ≥20% per-repo-tick across Adds 108-115. Direct head-to-head:

- **Synth #247 prediction at Add.108:** deep cohort {gemini-cli, goose, qwen-code} stays deep (silence ≥3h ≥2 of 3).
- **Synth #252 prediction at Add.108:** ≥1 of {gemini-cli, goose} crosses deep→shallow OR ≥1 of {opencode, litellm, qwen-code} crosses shallow→mid within 2 ticks.

If synth #252 confirms and synth #247 falsifies again at Add.108, the fluid-stratification model **fully replaces** the stratified-resumption model. If synth #247 holds at Add.108, the Add.106-107 cluster was a **transition-storm** and synth #247 partially survives.

## Predicates

- **Pred 252-1 (crossing rate ≥20% per-repo-tick across Adds 108-115):** across 8 ticks × 6 repos = 48 repo-ticks, ≥10 cross-class crossings observed (any of shallow↔mid, mid↔deep, or deep↔structurally-inactive). **Falsifier:** ≤6 crossings observed (rate ≤12.5%, consistent with synth #247's implicit assumption).
- **Pred 252-2 (transition-correlated author-burst):** in ≥3 of the next ≥5 shallow→mid crossings, the crossing-tick or following tick contains a same-author ≥3-PR open-burst (S2-class from synth #251 or sub-pattern (a) cross-author multi-burst). If yes, mid-pause windows are **author-prep-staging windows** and the crossing is an **early signal of upcoming open-cluster activity**. Falsifier: ≤1 of 5 crossings co-fires with author-burst.
- **Pred 252-3 (deferred-batch resumption is the dominant deep→shallow mechanism):** in ≥3 of the next ≥5 deep→shallow crossings, the resumption is via a **doublet-or-greater merge cluster within ≤30min** (synth #249 generalized + Pred Y from Add.107). Falsifier: ≤1 of 5 deep→shallow crossings is a doublet; singleton-merge resumptions dominate.
- **Pred 252-4 (gemini-cli is the lone genuine deep-class repo):** by Add.115, gemini-cli's merge-silence reaches ≥10h (extending from 4h53m at Add.107 by ≥5h additional) WITHOUT producing a deferred-batch doublet upon resumption. If yes, gemini-cli is **structurally distinct** from all other tracked repos (matches synth #248's pause-deepening trajectory in isolation, not as a deep-cohort exemplar). If gemini-cli resumes ≤7h with a doublet, it joins the deferred-batch regime and the "structurally distinct" claim retracts.
- **Pred 252-5 (goose follows qwen-code's deep→shallow crossing within 4 ticks):** at Add.107, goose silence is 3h59m+. By Add.111, either (i) goose merges ≥2 PRs in a doublet inside ≤30min (deferred-batch resumption matching qwen-code's Add.107 #3623+#3682 pattern), or (ii) goose silence extends to ≥6h (deep-pause deepening matching gemini-cli synth #248 pattern). The which-branch outcome distinguishes whether goose is a **qwen-code-class repo** (deferred-batch) or a **gemini-cli-class repo** (sustained deep).
- **Pred 252-6 (stratification class is best modeled as a Markov chain with crossing rate ≈0.25/tick, NOT as a state-machine with sticky states):** by Add.115, fitting a 4-state Markov chain (shallow/mid/deep/structurally-inactive) to the 6-repos × Adds-105-115 transition matrix produces a **stationary distribution within ±15% of the empirical Add.105-115 class distribution**, with no diagonal entry exceeding 0.85 (i.e., no class has >85% self-transition probability). **Falsifier:** if any class has self-transition probability ≥0.90 or stationary distribution deviates >25%, sticky-states are recovered and synth #252's anti-stickiness reframing partially retracts.

## Specific PR-grounded transition log (Adds 105-107)

To make the fluid-stratification model concrete, synth #252 enumerates the **transition events themselves** rather than the class memberships:

- **Add.105→106 opencode shallow→mid:** triggered by absence of in-window merge after #24682 kitlangton 23:48:57Z (head `cd47262081e8ced842ddd210f44ec70ea1f0edd0`); the merge anchor passing the 1h threshold during the 53m Add.106 window.
- **Add.106→107 opencode mid→shallow:** triggered by **kitlangton triple-merge** #24693 (00:53:27Z, head `eef9481a1594f868aeeb783fa53ed3bb311605eb`) + #24703 (01:48:51Z, head `d790df31af19304ec864bc62625d937c44bd1e7c`) + #24705 (01:58:12Z, head `337946335a8210df24fde0f5ef4cd5fef8710b64`); 3 merges in 1h05m clears the mid-class.
- **Add.106→107 codex shallow→mid:** triggered by **post-doublet silence** after #19836 colby-oai (head `67c4fad8965e7ef44ce514b8f2b2085af13610ae`, 00:42:11Z) + #19892 miz-openai (head `fd38df9c4df2a41fcc6d58c983e8c0c4f792040f`, 00:43:16Z) Add.106-close 65s-doublet; subsequent 1h28m of zero merges accumulates the mid-class membership.
- **Add.106→107 qwen-code structurally-inactive→shallow:** triggered by **#3623 doudouOUC** (head `1921d805bf9fb8b7cf718de7f0402897ab00db7c`, merged 01:06:09Z, lifespan 2d7h49m) + **#3682 fyc09** (head `7635f8c1b9d8e5275681023ad2c48d7a2dd9c5cd`, merged 01:22:18Z, lifespan 9h30m43s); 16-min inter-merge doublet ends 12h22m+ pause and reclassifies qwen-code as actively-paused-then-resumed.
- **Add.106→107 litellm post-doublet maintenance (no class change):** #26651 lmcdonald-godaddy (head `ea0ce944cd37552c6a37cb148c8a9b5c2a5937a5`, merged 00:39:26Z) + #26655 mateo-berri (head `7d69621b592321e04b6559b5853dd4b6e6d3ff36`, merged 00:36:47Z) Add.106 doublet → #26661 krrish-berri-2 (head `0e38dfc2575e7a3cf6896feae437a248abfc593c`, merged 01:46:21Z) Add.107 singleton 1h09m later. Litellm stays shallow throughout but the **inter-merge cadence stretches**, suggesting shallow-class is **internally heterogeneous** in cadence.

## Carry-relations to prior synths

- **Retracts synth #247** as a stable-class model; reframes as fluid-transition diagnostic.
- **Refines synth #248** (gemini-cli pause-deepening) as a **per-repo trajectory** observation, not a deep-cohort exemplar; Pred 252-4 tests whether gemini-cli is genuinely structurally distinct.
- **Co-fires with synth #249** (litellm deferred-batch): Pred 252-3 generalizes the deferred-batch claim to **the dominant deep→shallow resumption mechanism** across all repos (codex 65s, qwen-code 16m, litellm 3m signatures all confirm cross-repo).
- **Co-fires with synth #250** (close-and-refile catalog): the bot-housekeeping batch-close sub-pattern (g) emerging at Add.107 (gemini-cli #25779 + #25772 closed within 29s) is **a transition-event signature** in the deep-class repo, suggesting **even deep-class repos exhibit transition-events at sub-merge granularity** — the deep-class is NOT silent, it is silent-on-merges-only.
- **Co-fires with synth #251** (cross-repo stacked-author-pair): Pred 252-2 tests whether shallow→mid crossings predict S1/S2 author-burst events; if confirmed, synth #251's stacked-author signatures are **mid-pause diagnostic events**.
- **Methodologically anchored in synth #234**: Pred P bidirectional falsification is the **clearest reflexivity-territory finding in W17** — a single predicate that specified both directions of the implicit framework, and both directions broke at the deadline tick.

## Falsifier conditions (what would retract #252)

- **F1:** if Pred 252-1 falsifies (≤6 crossings in 48 repo-ticks), the Add.106-107 cluster was a transition-storm and synth #247 partially survives; synth #252 reframes as **storm-period synthesis** rather than steady-state framework.
- **F2:** if Pred 252-3 falsifies (singleton-merge resumptions dominate deep→shallow crossings), the deferred-batch generalization (synth #249) does not extend to all repos and the cross-repo claim retracts to litellm/codex/qwen-code subset.
- **F3:** if Pred 252-6 falsifies (some class has self-transition ≥0.90 in the fitted Markov chain), sticky-states are partially recovered for that class and synth #252's anti-stickiness claim is class-specific not universal.
- **F4:** if gemini-cli resumes within 7h via a doublet (Pred 252-4 falsifies), the "structurally distinct gemini-cli" claim retracts and gemini-cli joins the deferred-batch regime, leaving **no genuine sustained-deep-class repo** in W17.

## Operational implications

For ADDENDUM-108 and onward, the synth #252 framework recommends:
1. **Replace cohort-membership tables with transition-event tables**; class labels become per-tick annotations not predictive primitives.
2. **Track crossing-rate per-repo-tick** as a baseline diagnostic; deviations from ~0.25 are the signal.
3. **Co-instrument crossings with author-burst events** (Pred 252-2) and **deferred-batch doublets** (Pred 252-3) for two-axis transition characterization.
4. **Defer all class-stickiness claims** until Pred 252-6 Markov-fitting completes at Add.115.

## Capture metadata

Promoted at ADDENDUM-107 close (02:11:00Z, 2026-04-28). Source citations: synth #247 (stratified-resumption framework, Add.105-promoted), Pred P (Add.105-opened, Add.106-partial, Add.107-bidirectional-falsification). PR-level cites for transition events: opencode #24682 (head `cd47262081e8ced842ddd210f44ec70ea1f0edd0`, Add.105 anchor), #24693/#24703/#24705 (Add.107 triple-merge); codex #19836 (head `67c4fad8965e7ef44ce514b8f2b2085af13610ae`) + #19892 (head `fd38df9c4df2a41fcc6d58c983e8c0c4f792040f`) Add.106-close 65s-doublet (under-counted in Add.106 reporting; Add.107 methodological revision); codex #19895/#19896/#19899/#19900/#19901/#19904/#19905/#19907 Add.107 7-PR open-burst during codex mid-pause (correlates with Pred 252-2); qwen-code #3623 (head `1921d805bf9fb8b7cf718de7f0402897ab00db7c`) + #3682 (head `7635f8c1b9d8e5275681023ad2c48d7a2dd9c5cd`) Add.107 16-min deferred-batch doublet ending 12h22m+ pause; litellm #26651/#26655/#26661 inter-merge-cadence-stretching shallow-class heterogeneity exemplar; gemini-cli #26079 (Add.106 anchor for 4h53m+ silence at Add.107) + #25779/#25772 bot-housekeeping batch-close at Add.107 as transition-event-at-sub-merge-granularity exemplar; goose #8854 (head `7c60c1b3e8087d79c48e81fa1c338166557b7433`, anchor for 3h59m+ silence at Add.107) + #8872 app/github-actions release-bump open as deep-class non-merge activity exemplar.
