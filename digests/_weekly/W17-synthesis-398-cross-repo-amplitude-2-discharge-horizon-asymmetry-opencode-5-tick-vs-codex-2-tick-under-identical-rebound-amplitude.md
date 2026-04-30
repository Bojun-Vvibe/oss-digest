# W17 Synthesis #398 — Cross-repo amplitude-2 discharge horizon asymmetry: opencode 5-tick vs codex 2-tick under identical rebound amplitude

**Anchor measurement window:** 2026-04-30T09:53:08Z → 11:00:00Z (Add.184 capture); inferences span Add.171-184 for opencode and Add.181-184 for codex.
**Anchor mechanism:** post-amplitude-2 silence horizon, measured per repo, conditional on identical rebound amplitude (=2 PRs).
**Parent synth lineage:** none direct; refines M-180.I (opencode) and M-182.C/M-183.C/M-184.E (codex) into a **single comparative synth**.

## The asymmetry

Both opencode and codex emitted **exactly 2 PRs** in their most recent rebound event:
- opencode rebound: Add.179 emitted 2 PRs (per Add.179-183 cross-references); silence then sustained Add.180/181/182/183/184 = **5 silence ticks**, M-180.I now at 5-of-5 (per Add.184 §opencode).
- codex rebound: Add.181 emitted 2 PRs (per Add.181-183 cross-references); silence then sustained Add.182/183 = **2 silence ticks**; emission resumed at Add.184 with PR #20361 sha `8a97f3cf` by aibrahim-oai → horizon **closes at exactly 2** per M-184.E.

Per-PR silence ratios:
- opencode: 5 silence ticks / 2 rebound PRs = **2.5 silence-ticks-per-rebound-PR**.
- codex: 2 silence ticks / 2 rebound PRs = **1.0 silence-ticks-per-rebound-PR**.

Cross-repo ratio at amplitude=2: **opencode : codex = 5 : 2 = 2.5×**.

This is the first synth-level claim that the per-PR silence ratio is **repo-conditional and roughly stable** rather than a single cohort-level constant. M-181.J.1.v2 had previously assumed a near-uniform silence ratio; the v2 refinement was already underway in Add.183 (codex revised upward to ≥1.0; opencode revised upward to ~2.0); Add.184 closes both refinements at the **closed values 1.0 (codex) and 2.5 (opencode)**.

## Why amplitude-2 is the right comparison amplitude

Amplitude-2 is the **most-replicated rebound amplitude** in the Add.158-184 record. Higher amplitudes are observable but rare:
- amplitude=2 events: codex Add.181 (2), opencode Add.179 (2). Two events.
- amplitude=3 events: codex Add.171 (3), litellm Add.169 (3). Two events but in two different repos.
- amplitude=5 events: qwen-code Add.180 (5). One event.
- amplitude=6 events: codex Add.171 (6), Add.166 (4); litellm Add.172 (7). Sparse and cross-repo.

Only amplitude=2 admits a **same-amplitude cross-repo comparison** with both data points inside the recent (Add.179-184) measurement window where horizon closure is observable in-tick. The horizon for amplitude-3+ events typically extends past the current observation window or has not yet been observed-to-close.

## The repo-conditional discharge horizon model

Define `H(repo, amplitude)` = the silence horizon (in ticks) following a rebound emission of `amplitude` PRs in `repo`, measured to first non-zero subsequent emission.

Empirical estimates from Add.158-184:
- `H(opencode, 2) = 5` (closed, n=1).
- `H(codex, 2) = 2` (closed, n=1).
- `H(qwen-code, 5) = 3` (closed, n=1, M-181.H promoted at Add.183).
- `H(litellm, 7) ≥ 9` (open, n=1, ongoing per Add.184 litellm n=9 silence).
- `H(gemini-cli, 2) ≥ 14` (open, n=1, but binary-non-admitting per M-181.G; the model may not apply).
- `H(goose, ?) ≥ 23` (open, n=1, no observed rebound to anchor amplitude).

The opencode-vs-codex 2.5× asymmetry at amplitude=2 is the first **closed-horizon comparison**. The qwen-code amplitude-5 horizon of 3 ticks corresponds to a per-PR ratio of **0.6** — the **lowest** in the cohort.

Per-PR silence ratio table (closed horizons only):
| Repo | Amplitude | Horizon | Per-PR ratio |
|---|---|---|---|
| opencode | 2 | 5 | 2.5 |
| codex | 2 | 2 | 1.0 |
| qwen-code | 5 | 3 | 0.6 |

The per-PR ratio appears to **decrease with amplitude** (qwen-code) and **increase with repo idiosyncrasy** (opencode > codex at the same amplitude). Two distinct dimensions.

## Why this is distinct from any prior synth

No prior W17 synth has framed the per-repo discharge horizon as a **comparative cross-repo measurement** with closed-horizon endpoints. M-180.I, M-182.C, M-183.C, M-184.E are all **per-repo statements**. M-181.J.1.v2 attempted a cohort-level uniform ratio but was implicitly per-repo. Synth #398 is the first to:
1. Tabulate per-repo per-amplitude horizons in a single object.
2. Identify the amplitude-conditional and repo-conditional axes as orthogonal.
3. Predict horizon values for unobserved (repo, amplitude) pairs by extrapolation.

## Falsifiable predictions

1. If opencode emits at Add.185 (silence horizon 6 ticks for amplitude=2), the closed `H(opencode, 2) = 5` value falsifies and revises upward to ≥6. The 2.5× cross-repo ratio at amplitude=2 then becomes **3.0× or larger**.
2. If codex emits at Add.185 with amplitude=2 and silence horizon then sustains for 2 ticks (Add.186/187 silent → Add.188 emit), `H(codex, 2) = 2` is **replicated to n=2** and the closed value strengthens.
3. If qwen-code emits a fresh quintuplet in the next 20 ticks and the post-emission horizon again closes at 3, `H(qwen-code, 5) = 3` is **replicated** and per-PR ratio 0.6 strengthens. If horizon differs (e.g., 4 or 5), the per-PR ratio is amplitude-conditional in a non-monotone way.
4. If a litellm or gemini-cli rebound occurs and the horizon closes within 5 ticks, the binary-non-admitting classification (M-181.G) is overstated and these repos enter the comparative table.
5. Long-horizon prediction: if the per-repo ratio at amplitude=2 is constant within ±20% across multiple replications, the **repo-idiosyncrasy axis** is structurally real and can be used to forecast horizon for unobserved (repo, amplitude) pairs by treating amplitude as the multiplier.
6. If `H(codex, 3)` (next codex amplitude-3 rebound) closes at exactly 3 ticks (1.0 per-PR ratio sustained), codex's per-PR ratio is **amplitude-invariant**. If it closes at 6 (2.0 per-PR), per-PR scales linearly with amplitude. The discriminator data point will appear at the next codex amplitude-3 emission.

## Anchor SHAs

- opencode rebound: per Add.179, the 2-PR emission sha lineage is referenced upstream; current Add.184 confirms 5-tick silence sustaining.
- codex rebound: Add.181 emission shas; Add.184 emission sha `8a97f3cf` (PR #20361, aibrahim-oai) closes the 2-tick horizon.
- qwen-code quintuplet: Add.180 references; Add.183 sha `6efcf2b8` (wenshao, PR #3717); Add.184 sha `0b7a569a` (cyphercodes, PR #3753).

## Risk lens

- **Forecast utility**: a repo-conditional horizon model lets us **estimate the next emission tick per repo** with sub-2-tick precision once the rebound amplitude is observed. For codex amplitude-2, the next emission is forecast at T+2 with closed-horizon confidence. This is a sharper forecast than the cohort-level `H` model.
- **Mechanism interpretation**: the 2.5× ratio between opencode and codex at identical amplitude suggests opencode's per-merge "gravitational mass" (in terms of subsequent-merge inhibition) is ~2.5× codex's. Possible structural drivers: opencode merges are larger by line-count, opencode's review queue clears more slowly, or opencode has fewer concurrent reviewers per repo. None of these are testable from merge metadata alone, but the ratio anchors a hypothesis.
- **Cross-amplitude extrapolation hazard**: with closed n=1 at each (repo, amplitude) cell, the per-PR ratios are **point estimates with infinite uncertainty**. The synth must not be used as a deterministic forecast generator; it should be used as a **structural prior** to be updated on each new closed-horizon observation. Per-PR ratio replications at n=2 are the next major data event.
