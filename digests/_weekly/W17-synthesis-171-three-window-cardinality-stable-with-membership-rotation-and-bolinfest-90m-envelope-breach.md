# W17 synth #171 — three-consecutive-window active-repo cardinality stable at 3 with full membership rotation, AND bolinfest stack synth #166 90m33s envelope breached at +47% confirms synth #170 unbounded reading via direct measurement

**Promotes:** synth #170 (bolinfest fourth-falsification, post-rebase#23 dormancy approaching envelope) → fifth-falsification via direct envelope breach.
**Refines:** synth #167 (cross-repo cardinality halving) — cardinality is not the only invariant; membership rotation under stable cardinality is now a separate observable.
**Falsifies:** any reading of synth #166's 90m33s as a soft upper bound on bolinfest inter-rebase gap.

## Observation A — cardinality-stable, identity-rotating active-repo set across Add.61 → Add.62 → Add.63

| Window | Cardinality | Member set |
|---|---|---|
| Add.61 (16:13–16:50Z, 37m) | 3 | {codex, qwen-code, litellm} |
| Add.62 (16:50–17:18Z, 28m) | 3 | {codex, qwen-code, litellm} |
| Add.63 (17:18–17:48Z, 30m) | 3 | {qwen-code, litellm, cline} |

- **Cardinality holds exactly at 3 for three consecutive windows** spanning **1h35m total wall-clock**.
- **Membership rotates between Add.62 and Add.63**: codex drops out (zero touches), cline enters (Jabca #10418 first observed touch at 17:36:39Z after 5h32m pre-window-create — debut-author single-file additive PR breaks 3-window cline silence).
- The {qwen-code, litellm} pair is the **persistent core** across all three windows. The third slot is a **rotating socket** — codex (Add.61/62) → cline (Add.63).
- This is structurally distinct from synth #167's cardinality-halving event (which was a one-time collapse from {sst, codex, qwen, litellm} to {qwen, litellm}). Synth #167 framed cardinality as the carrier; synth #171 carves out **identity rotation under stable cardinality** as a second-axis observable.

## Observation B — bolinfest stack synth #166 envelope breach

- bolinfest codex-stack rebase#23 at 2026-04-26T15:34:33Z (per Add.60 footer).
- Synth #166 declared the inter-rebase envelope **90m33s** (the rebase#22→#23 gap).
- Add.62 measured dormancy **≥73m27s at 17:08Z window-close** — within envelope at 81%.
- Add.63 window-close 17:48:00Z, no rebase#24 fired, dormancy now **≥133m27s** — **+47.4% over the 90m33s envelope**.
- **The fifth consecutive falsification** of a bolinfest cadence model in the synth #131 → #138 → #161 → #166 → #170 chain. The cadence is now best modeled as **unbounded** in the post-rebase tail, with no upper-percentile envelope holding past one inter-rebase observation horizon. Synth #170's framing graduates from prediction to confirmed measurement.

## Cited evidence

- **codex stack silence**: openai/codex bolinfest stack PRs untouched 15:34:33Z → 17:48:00Z (Add.62 #19635 touch was on a non-stack PR by shijie-oai, base `dev/efrazer/agent-identity-env-jwt` — does not advance stack rebase#24).
- **cline #10418** (Jabca, deepseek-v4 model add, +25/−2, base main, head `809dcc4e`): break of 3-window cline silence.
- **qwen-code persistence**: #3640 merge (Add.62) → #3648 commit `b6060b39` at 17:28:08Z (Add.63) by B-A-M-N — qwen-code is in the persistent core.
- **litellm persistence**: #26551 (someswar177, head `ec73b7c7`, base `litellm_oss_branch`) touched in both Add.62 and Add.63 — litellm is in the persistent core.

## Falsifiable predictions

- **P-171.A** — If the {qwen-code, litellm} persistent-core pair survives one more window (Add.64) at any cardinality ≥2, the persistent-core finding consolidates to ≥4 windows. Falsified if either drops out next window.
- **P-171.B** — bolinfest rebase#24 will not fire within the next single-window horizon (synth #170 unbounded reading). Falsified by any rebase#24 firing in Add.64.
- **P-171.C** — The third-slot rotation will continue: Add.64's third member will be neither codex (just dropped) nor cline (just entered) — i.e., a third distinct repo. Strong test of whether rotation is genuine cycling or noise.
