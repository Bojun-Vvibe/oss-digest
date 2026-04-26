# W17 Synthesis #145 — Cross-repo `preserve reasoning_content` theme convergence at sub-2h temporal proximity refines synth #132's multi-hour theme-convergence band

**Status (Add.50):** Refines synth #132 by tightening the temporal scale of cross-repo bug-class theme convergence. Synth #132 named "cross-repo instrumentation/observability theme convergence without shared trigger during merge drought" at multi-hour scales. Add.49+Add.50 produces a cleaner instance of the same shape at a **sub-2h** scale on a different surface (model-output content-preservation), which forces a refinement of #132's "without shared trigger" claim.

## Anchor evidence

| repo | pr | author | created (UTC) | files | +/− | title (truncated) |
|---|---|---|---|---|---|---|
| QwenLM/qwen-code | **#3637** | `wenshao` (Shaojin Wen) | 2026-04-26T07:57:03Z | 2 | +200/−2 | `fix(core): preserve reasoning_content when merging consecutive assistant messages (#3619)` |
| sst/opencode (= anomalyco/opencode) | **#24443** | `claudianus` (ryan.h.park) | 2026-04-26T06:19:03Z | 2 | +53/−9 | `fix(provider): preserve reasoning_content on second interleaved pass (#24146 follow-up)` |

- `qwen-code#3637` head `60d2b5dc9b40`; `sst/opencode#24443` head `fa478297f13d`.
- Both PRs **target the same bug class**: assistant-message `reasoning_content` field being lost when adjacent/interleaved assistant messages are merged or replayed.
- Both reference a prior internal issue (`#3619` and `#24146`) — they are **follow-up fixes**, not greenfield work, in *both* repos. This is mechanically important: the bug was already known on both surfaces.
- Authors are unrelated (no shared GitHub org membership visible at PR-list level; `wenshao` is a regular `QwenLM/qwen-code` contributor; `claudianus` first appears in the Add.42–50 tracked range on `sst/opencode/dev`).
- Both PRs are small (2 files each), surgical fixes — not architectural reworks.
- Temporal proximity at PR open: 06:19:03Z → 07:57:03Z = **1h38m00s**.
- Temporal proximity at first cross-repo observation in this digest series: Add.49 open + Add.50 metadata bump = surfaced together within Add.50 sample at 09:25:13Z.

## Why this refines synth #132

Synth #132 ("cross-repo instrumentation/observability theme convergence without shared trigger during merge drought") observed an instrumentation/telemetry/log-level theme appearing on multiple repos within **a multi-hour window during merge drought**, and called out *no shared upstream trigger* (no security advisory, no shared dep bump, no model-vendor announcement) as the diagnostic property. The reading was: themes propagate across the OSS-AI-CLI-tools cohort by **convection** (independent rediscovery accelerated by overlapping author attention), not by **conduction** (a shared external event).

The Add.49+Add.50 reasoning-content pair refines this on three axes:

1. **Tighter temporal proximity**. 1h38m at PR-open is *inside* synth #132's claim band rather than a falsifier of it, but it is at the **lower bound** of what synth #132 reported (which ranged 3–7h). Sub-2h convergence on a content-preservation surface is sharper than #132's instrumentation cluster.

2. **Both PRs are issue-follow-ups, not greenfield**. Synth #132's instances were largely fresh observations. Here, both `#3619` (qwen-code) and `#24146` (sst/opencode) **predate** the Add.49+Add.50 window — the issues sat unfixed for some period, and the *fix work* converged in time. This shifts the convection model: it is not theme-emergence that synchronized, it is **theme-resolution**. Two different authors picked up two different long-known issues on the same bug class within the same hour band.

3. **Surface specificity is sharper**. Synth #132's theme was the broad "instrumentation/observability" family, which tolerates many different surface implementations. The reasoning-content theme is **exactly one surface**: the content field that holds chain-of-thought tokens for reasoning-capable assistant models, lost during message-array post-processing. Both PRs touch this exact field semantics. This is **not** a loose theme — it is the same defect class, expressed slightly differently on each repo's data-model layer.

The mechanistic reading: **reasoning-capable assistant models recently went through a behavioral / API contract change** (likely upstream from the model provider — e.g., a new model release that emits richer `reasoning_content`, or a documentation clarification on how it should be preserved across message merges), and the OSS clients are *independently* converging on fixes within hours of each other. This is **conduction** masquerading as convection — there is a shared upstream trigger, but it is at the model-API-contract level rather than at the GitHub-event level, so synth #132's "without shared trigger" claim needs a qualifier.

## Refined claim

Synth #132's "without shared trigger" should be read as **"without shared GitHub-event trigger"**, not "without any shared trigger." When the OSS-AI-CLI-tools cohort converges on the same bug class within sub-2h, the most likely shared trigger is **model-provider-API-contract behavior change** invisible to the digest's GitHub-event scanner. Synth #132's pure-convection model is too strong.

## Falsifiable predictions

- **P-145.A**: At least one more `preserve reasoning_content` or semantically-equivalent PR (e.g., `keep reasoning content`, `propagate reasoning_content`, `preserve thinking content`) appears on a *third* tracked repo (not `qwen-code` or `sst/opencode`) within W17 (i.e., before 2026-04-27T23:59:59Z). Candidate repos: `block/goose`, `cline/cline`, `All-Hands-AI/OpenHands`, `Aider-AI/aider`, `BerriAI/litellm`. If true, the conduction-via-API-contract reading hardens. If no third-repo PR appears, the convection-via-author-attention reading stays viable.

- **P-145.B**: `qwen-code#3637` and `sst/opencode#24443` **both merge within 24h of Add.50 close** (i.e., before 2026-04-27T09:25:13Z). If both merge, the reasoning-content-fix urgency is real and shared; if one merges and the other lingers ≥48h, the theme convergence was author-attention-driven not user-impact-driven (asymmetric urgency falsifies the shared-trigger reading). If both linger ≥48h, the issue-follow-up pickup was opportunistic, not urgent.

- **P-145.C**: A *fourth* PR on the reasoning-content surface — **same bug class, different repo, opened by an author who has not previously appeared in the Add.42–50 range** — emerges within W17. This would push the pattern from a 2-author-2-repo doublet (current state) to an n=3+ cohort, and would be the diagnostic for a true cross-repo bug-class wave (vs a coincidental doublet within a long merge drought). If no n=3 case appears by end of W17, the doublet stays as a doublet and synth #145 remains a **refinement** of #132 rather than a **generalization**.

## What this synth does *not* claim

- It does **not** claim the model-provider-API-contract-change reading is verified. The conduction model is a hypothesis derived from PR shape (both follow-up to long-known issues, both surgical, both within sub-2h); verification would require evidence outside the GitHub-event surface (changelogs from Anthropic, OpenAI, Qwen, etc.).
- It does **not** claim synth #132 is *falsified*. The qualifier ("without shared GitHub-event trigger") preserves the synth's diagnostic value while narrowing its scope.
- It does **not** claim the two PRs are duplicate-of-each-other. They touch entirely different code (qwen-code's `core/` message-merging path vs sst/opencode's `provider/` interleaved-pass replay path) and the fixes are not portable between repos.

## Provenance

- Add.49 evidence for `qwen-code#3637`: `digests/2026-04-26/ADDENDUM-49.md`, "Opens in window" section.
- Add.50 evidence for `sst/opencode#24443`: `digests/2026-04-26/ADDENDUM-50.md`, "Cross-repo `preserve reasoning_content` surface convergence" section.
- PR-shape cross-check: `gh pr view 3637 -R QwenLM/qwen-code` and `gh pr view 24443 -R sst/opencode` at 2026-04-26T09:25:13Z.
- Synth #132 referenced for refinement: `digests/_weekly/W17-synthesis-132-cross-repo-instrumentation-observability-theme-convergence-without-shared-trigger-during-merge-drought.md`.
