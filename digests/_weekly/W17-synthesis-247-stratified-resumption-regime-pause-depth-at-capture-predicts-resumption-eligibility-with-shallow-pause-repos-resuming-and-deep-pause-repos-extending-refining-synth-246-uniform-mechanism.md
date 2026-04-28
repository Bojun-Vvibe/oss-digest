# W17 Synthesis #247 — Stratified-resumption regime: at Add.105, the cross-repo merge-pause documented in synth #246 partially resolved with shallow-pause repos (sst/opencode 44m48s→merge in window, openai/codex 1h01m→merge in window) resuming while deep-pause repos (BerriAI/litellm 3h46m→4h43m, google-gemini/gemini-cli 1h42m→2h39m, qwen-code 10h32m→11h29m) all extended; pause-depth at observation time predicts resumption-eligibility within the next 57m

**Status:** PROMOTED from ADDENDUM-105 Pred K evaluation. **Refines synth #246** by replacing the implicit uniform-mechanism reading of "synchronous pause" with a stratified mechanism: pause-depth at capture instant Add.N predicts P(merge in [N, N+1]) monotonically.

## Falsification angle

Synth #246 framed the cross-repo merge-pause as a single-mechanism regime distinguishable into M1/M2/M3 by post-pause merge timing. **Synth #247 falsifies the single-mechanism reading**: the resumption pattern at Add.105 shows that (i) opencode and codex resumed independently within 57m (M2-style gradual resumption per #246's vocabulary), (ii) litellm/gemini-cli/qwen-code/goose all extended their silences in the same 57m window. The mechanisms producing M2-resumption in opencode/codex **cannot also explain non-resumption in the deep-paused trio**, because if a single mechanism (e.g. cross-repo coordinated freeze) were operating, all six would resume or extend together. **Therefore synth #246's M3 (coordinated freeze) is empirically excluded** for the cross-repo aggregate, and **M1 (maintainer review-availability bottleneck) is repo-local rather than cross-repo coupled**.

## Core empirical claim

Define "pause-depth at Add.N" as the merge-silence at Add.N's capture instant for each repo. Define "resumption-eligibility in [Add.N, Add.N+1]" as Bernoulli(1 if ≥1 merge occurs in the [Add.N capture, Add.N+1 capture] window, else 0). The Add.104→Add.105 evidence is:

| Repo | Pause-depth at Add.104 | Resumed in [104,105]? | Pause-depth at Add.105 |
|------|-------------------------|------------------------|--------------------------|
| sst/opencode | 44m48s | **YES** (#24682 by kitlangton 23:48:57Z, head `cd47262081e8ced842ddd210f44ec70ea1f0edd0`) | 8m03s |
| openai/codex | 1h01m31s | **YES** (#19884 by mzeng-openai 23:28:50Z, head `111edb60cda0a18bfa3f8792234a10cecc8a9832`) | 28m11s |
| BerriAI/litellm | 3h46m46s | NO | 4h43m46s |
| google-gemini/gemini-cli | 1h42m28s | NO | 2h39m28s |
| block/goose | (Add.104 used #8854 22:11:20Z = 48m40s; corrected to last actual merge #8856 lifeizhou-ap 10:31:41Z = ~12h29m at Add.104) | NO | ~13h26m |
| QwenLM/qwen-code | 10h32m | NO | 11h29m |

Sorting by Add.104 pause-depth (correctly attributed): opencode 44m48s < codex 1h01m31s < gemini-cli 1h42m28s < litellm 3h46m46s < qwen-code 10h32m < goose ~12h29m. The two shortest-pause repos resumed; the four deepest-pause repos extended. **The threshold appears to lie between 1h01m31s (codex, resumed) and 1h42m28s (gemini-cli, extended).**

## Three candidate causal mechanisms (refining #246's M1/M2/M3 to the stratified regime)

1. **R1 (repo-local capacity threshold):** each repo has an independent merge-throughput regime characterized by a per-repo characteristic time τᵢ; resumption probability rises sharply as silence approaches τᵢ from below and saturates above it. opencode τ ≈ 30-45min (so 44m48s is at threshold, resumes); codex τ ≈ 45-75min (so 1h01m is at threshold, resumes); litellm/gemini-cli have larger τ that current silence has not yet reached. **Predicts resumption thresholds are stationary across days.**
2. **R2 (maintainer-attention exhaustion model):** each repo's pause is driven by maintainer-team attention having moved elsewhere; deeper pauses indicate longer attention-elsewhere durations that have larger expected residual durations (memorylessness violation: deep pauses are evidence of slower process generating them, not just unlucky draws from a fixed distribution). **Predicts deep-paused repos remain paused longer in expectation than shallow-paused.**
3. **R3 (PR-quality / review-readiness selection):** repos with deep pauses have OPEN backlogs whose top of stack is *less ready to merge* (more contentious, more incomplete, more debated) — the pause is endogenous to the backlog composition, not the maintainer schedule. litellm's backlog at Add.105 (yuneng-berri ×4, skgandikota ×3, ayushh0110 v3+v4, etc.) contains many close-and-refile sub-pattern instances which are by construction not-ready-to-merge. **Predicts that as the backlog composition shifts toward higher-quality PRs, merge resumption is rapid even from deep pauses.**

R1 and R2 are mutually exclusive on the *independence-of-pauses* axis: R1 says pause-depth distribution is stationary per-repo; R2 says deep pauses indicate slower underlying process. R3 is orthogonal and may co-occur with either.

## Predicates

- **Pred 247-1 (threshold stationarity, R1 test):** in the next 7 days, observe a fresh occurrence of opencode silence reaching ≥45min. If it resumes within ≤30min of crossing 45min ≥80% of the time, R1 supported. If resumption distribution is uniform across [45min, 4h], R2 supported.
- **Pred 247-2 (deep-pause memorylessness violation, R2 test):** at Add.106, conditional on litellm having silence ≥4h at Add.105 capture, the median additional silence to next merge is **≥** the median silence-to-merge for litellm conditional on silence ≥1h. If empirical conditional median grows monotonically with current silence depth, memorylessness violates and R2 supported.
- **Pred 247-3 (backlog-composition predictor, R3 test):** at Add.106, if litellm's top-of-stack OPEN PR (by recency or by maintainer review-priority signal) is a clean, non-close-and-refile PR from a maintainer-affiliated author (e.g. a `-berri` suffix author with a non-controversial surface), and that PR merges within ≤2h regardless of overall litellm silence depth, R3 supported.
- **Pred 247-4 (qwen-code is excluded outlier):** qwen-code's 11h29m silence is consistent with its baseline distribution (multi-hour gaps are normal for qwen-code per Add.79-100 baseline). If qwen-code's next merge occurs within its baseline IQR (e.g. inter-merge gap median ≈ 4-8h for active periods, with much larger gaps off-hours), then qwen-code does **not** falsify R1/R2/R3 — it is operating in its own regime independent of the cross-repo phenomenon.
- **Pred 247-5 (codex M2-confirmation extends to one more cycle):** by Add.107, codex will show a second singleton merge (not a burst) following ≤90min after #19884, consistent with M2-style steady cadence. If instead codex shows a burst (≥3 merges in ≤30min) or extended silence (≥3h), the M2-classification of codex from Add.105 is premature.

## Falsifier conditions (what would retract #247)

- **F1:** if at Add.106, ≥1 of {litellm, gemini-cli, qwen-code} has resumed AND ≥1 of {opencode, codex} has paused (silence-since-Add.105 ≥1h), the stratified-resumption signature is **not stable across one tick** and #247 reduces to a one-window observation.
- **F2:** if the threshold between resumed-shallow and extended-deep at Add.105 turns out to be artifact of the specific PR-availability composition rather than pause-depth — e.g. opencode happened to have kitlangton-priority PR #24682 ready to merge irrespective of pause depth — then **R3 dominates and pause-depth is not the predictor**, the synth needs to be rewritten with backlog-composition as the primary axis.
- **F3:** if the goose-row data correction (Add.104 used #8854 instead of #8856) reveals that goose was actually deep-paused at Add.104 too and remains deep-paused at Add.105, the stratified-resumption signature is **partially an artifact of mis-measurement** in the original synth #246; this would require updating both #246 and #247 with corrected silence baselines.

## Carry-relations to prior synths

- **Refines #246** by replacing uniform-mechanism with stratified-mechanism reading. #246 is **not retracted** but is **bounded in scope** to "synchronous-pause-onset" claims; the resumption-pattern claims of #246 (M1/M2/M3 disambiguation) are **superseded by #247 R1/R2/R3**.
- **Co-fires with #244, #245** on close-and-refile sub-patterns, since R3's backlog-composition mechanism specifically references close-and-refile PRs as low-readiness contributors to backlog. The four sub-patterns (a)-(d) plus the new candidate sub-pattern (e) (LCubero #24689/#24690/#24691, Add.105) are all **mass on the not-ready-to-merge side of R3's bimodal backlog distribution**. Specifically: ayushh0110 #26641 (closed), #26650 (v2-suffix OPEN), #26652 (4th attempt new surface) — three of yuneng-berri's four OPEN PRs (#26635, #26643, #26648, #26654) — these are all R3-low-readiness. **R3 predicts these will be the LAST to clear when litellm resumes**, while a fresh maintainer-clean PR would clear FIRST.
- **Co-fires with #240** (cross-author kinetic transfer failure): jeevan6996 burst (Pred B falsified at Add.105: 0/3 merged across 2h) is a **4th instance of cross-author transfer failure** in W17, fitting R2's "deeper pause = slower underlying process" frame at the per-author level.
- **Methodologically continues #234, #238**: the goose-row mis-measurement at Add.104 (using #8854 22:11:20Z which was not actually the most-recent merge — the most-recent was #8856 at 10:31:41Z) is the **second corpus-measurement-artifact instance flagged within W17**, and it directly affected synth #246's joint-Poisson tail-probability calculation. Re-running with corrected goose silence (~12h29m at Add.104) **strengthens #246's tail probability** rather than weakening it (more deep pauses, joint probability further into the tail).

## Capture metadata

Promoted at ADDENDUM-105 close (23:57:00Z, 2026-04-27 / docket date 2026-04-28). Source ADDENDUM citations: #104 (predecessor pause inventory and Pred K formulation), #105 (Pred K evaluation, stratified-resumption observation, goose-row correction). PRs cited by number across this synth: opencode #24682 (kitlangton merged 23:48:57Z, head `cd47262081e8ced842ddd210f44ec70ea1f0edd0`), codex #19884 (mzeng-openai merged 23:28:50Z, head `111edb60cda0a18bfa3f8792234a10cecc8a9832`), litellm #26622 #26635 #26641 #26643 #26648 #26650 #26652 #26654, gemini-cli #26079, goose #8854 #8856, qwen-code #3661, plus opencode close-and-refile triple #24689 #24690 #24691 (LCubero sub-pattern (e) candidate), opencode jeevan6996 burst #24674 #24678 #24680.
