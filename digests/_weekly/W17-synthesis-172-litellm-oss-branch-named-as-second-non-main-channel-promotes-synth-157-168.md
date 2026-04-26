# W17 synth #172 — `litellm_oss_branch` named as second concrete non-main integration channel on litellm, promoting synths #157 / #168 from cross-repo abstract pattern to litellm-specific topology with two distinct named channels

**Promotes:** synth #157 (non-main integration branch as content channel, codex-side `dev/efrazer/agent-identity-env-jwt`) + synth #168 (litellm silence break via non-main channel — at the time the channel was named only as "non-main integration branch") → litellm-specific topology with two named channels.
**Refines:** synths #106 / #108 (sync-PR-as-merge-promotion staging topology, originally framed as `main` ↔ `litellm_staging_*` style channels).
**Falsifies:** any reading of "non-main base" as a single-channel-per-repo pattern.

## Observation — two distinct non-main bases now named on litellm within W17

| PR | Author | Base branch | Status | Add. window |
|---|---|---|---|---|
| (referenced by synth #106 / #108 sync-PR sweep) | various | `litellm_staging_*` family | sync-promotion mode | W17 mid-week |
| **#26551** | someswar177 | **`litellm_oss_branch`** | open, head `ec73b7c7`, +64/−7 | Add.62 / Add.63 |

- Synth #106 / #108 covered the **staging-to-main promotion topology** — base branches matching `litellm_staging_*` opened as sync PRs against main with head SHA == prior merge SHA.
- Synth #168 documented a **silence-break via non-main integration branch content channel** but did not name the channel.
- Add.63 fetch resolves #26551 base authoritatively as **`litellm_oss_branch`** — this is **distinct from any `litellm_staging_*` branch in the synth #106/#108 sweep** (different naming root: `_oss_branch` vs `_staging_<env>`).
- **litellm now has at minimum two named non-main integration channels with different semantics**:
  1. **`litellm_staging_*`** (synth #106/#108) — staging-to-main promotion vehicle, sync-PR pattern.
  2. **`litellm_oss_branch`** (synth #172, this synth) — author-direct content channel for new fixes targeting an OSS-track integration branch, NOT a staging promotion.
- Cross-repo: **codex-side** `dev/efrazer/agent-identity-env-jwt` (synth #157) is a third channel under the same abstract umbrella but on a **different repo** with a **personal-author-namespaced** branch name (`dev/<author>/<feature>`), distinct in form from litellm's `litellm_<purpose>_branch` flat-namespace pattern.

## Cited evidence

- **litellm #26551** `fix(guardrails): re-emit chunks in tool_permission streaming hook when no tool_calls found` — someswar177, head `ec73b7c7707f689f9dddf67ce9aa2190fddd62a5`, **base `litellm_oss_branch`**, sole commit timestamped 16:48:52Z, +64/−7 across guardrails streaming-hook surface.
- **codex #19635** (synth #157 anchor) — shijie-oai, base `dev/efrazer/agent-identity-env-jwt`, non-main integration channel on codex-side.
- Synth #106 anchor PRs (head-SHA-equals-prior-merge-SHA staging-promotion sweep, mid-W17) — provide the `litellm_staging_*` channel evidence base.

## Walk-back of Add.62's "sub-25-minute author iteration" claim on #26551

Add.62 reported #26551 head advanced from `9da7cab3` to `df4b12e7` and described this as the fastest W17 author-iteration on litellm. Add.63 resolves the authoritative head as `ec73b7c7` with **only one commit timestamped 16:48:52Z** (1m08s pre-PR-create at 16:49:53Z — pre-existing branch tip carried into the PR). **No iteration occurred**; the SHA references in Add.62 were either fetch-cache artifacts or transient force-push state that did not persist. Synth #172 corrects this: the pattern on #26551 is **branch-tip-to-PR-open with zero post-open iteration**, NOT a fast-iteration cadence — and the channel of interest is the **base branch identity**, not the head SHA churn.

## Falsifiable predictions

- **P-172.A** — A third W17 PR will be observed on litellm with base `litellm_oss_branch` (or another `litellm_<purpose>_branch`-pattern flat-namespace branch) within the next 4 windows. Falsified if `litellm_staging_*` PRs reappear without any further `litellm_*_branch` non-staging variant.
- **P-172.B** — codex-side personal-author-namespaced channels (`dev/<author>/<feature>`) will NOT cross-pollinate to litellm; litellm will not adopt the `dev/<author>/<feature>` form. Falsified by any litellm PR opened against a `dev/...` base.
- **P-172.C** — The `litellm_oss_branch` channel is for OSS-track fixes that bypass staging — predicting that #26551 will eventually merge directly into `litellm_oss_branch` (not into main via sync-PR) within W17 close. Falsified if #26551 closes without merge or merges into a different base via base-branch swap.
