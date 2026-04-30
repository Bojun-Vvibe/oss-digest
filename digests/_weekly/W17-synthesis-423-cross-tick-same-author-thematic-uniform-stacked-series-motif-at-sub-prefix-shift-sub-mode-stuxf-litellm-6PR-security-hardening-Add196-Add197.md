# W17 synth #423 — Cross-tick same-author thematic-uniform stacked-series motif at sub-prefix-shift sub-mode

**Triggered by**: ADDENDUM-197 M-197.B litellm stuxf 6-PR security-hardening series across Add.196 (4-PR `chore(team/auth/mcp)` mixed-sub-prefix quartet) + Add.197 (2-PR `chore(proxy)` uniform-sub-prefix doublet) within 1h28m26s wall-clock window.

## Predecessor frame

Synth #421 (Add.196 trigger) formalized the **single-author security-hardening intra-tick chore-prefix-uniformity batch motif** at canonical instantiation as a distinct sub-class of the synth #416 single-author batch family along the **content-sub-theme axis** (security-hardening vs feature-development) and the **temporal-CV axis** (CV ≥ 1.0 vs CV < 0.5). The synth #421 instantiation was strictly **intra-tick** at n=1 instantiation: 4 PRs by stuxf, all `chore(...)` prefix with three distinct sub-prefixes (`chore(team)` ×2, `chore(auth)` ×1, `chore(mcp)` ×1), 12m31s span, CV=1.009, 19-PR-number dispersion.

Synth #420 (Add.195 trigger) formalized the **cross-tick stacked-PR-series-continuation motif** at codex etraut-openai [1/2]→[2/2] split-PR series at 42m15s cross-tick gap. Synth #420 captured cross-tick continuation of an *explicitly-marked* 2-PR series (the [1/2]/[2/2] PR title markers), where the second PR was a pre-committed continuation of the first.

The Add.197 stuxf observation does NOT instantiate either frame cleanly. Specifically:

1. It is NOT pure intra-tick (synth #421 frame requires single-tick batch). The stuxf series spans Add.196 (4 PRs) AND Add.197 (2 PRs) — n=2 ticks, 1h28m26s wall-clock from #26859 (18:46:32Z) to #26851 (20:11:33Z).
2. It is NOT a synth #420-style explicitly-marked continuation series (no `[1/N]`/`[2/N]` title markers; no PR-body cross-references between Add.196 PRs and Add.197 PRs detected at title-prefix grep).
3. The Add.197 stuxf doublet exhibits a **uniform sub-prefix shift** (`chore(proxy)` ×2) distinct from the Add.196 quartet's mixed sub-prefixes — i.e., the cross-tick series is content-thematically continuous (security-hardening, single-author, `chore(...)` prefix) but **sub-prefix-axis discontinuous** between ticks.

This combination — **cross-tick (n=2 ticks), single-author, thematic-uniform (security-hardening), prefix-uniform (`chore(...)`), sub-prefix-axis-shift across ticks** — is unobserved in W17 prior to Add.197 and structurally distinct from both predecessor frames.

## Falsifiable claim

**Synth #423**: Cross-tick same-author thematic-uniform stacked-series motifs that exhibit **sub-prefix-shift across tick boundaries** (i.e., the merge stream changes its content-sub-theme grouping while preserving the umbrella theme and author identity) will exhibit one of two structural sub-modes:

- **Sub-mode A — coverage-completion driver**: the cross-tick continuation completes a previously-started enumeration of sub-themes within the umbrella theme. In Add.196+Add.197 stuxf example: Add.196 covers {team, auth, mcp} authz-touchpoints; Add.197 covers {proxy} authz-touchpoints; together they enumerate the major surface families of the litellm proxy authz layer (team-callback, team-availability, invite-onboarding, mcp-OAuth, proxy-control-fields, key-metadata-callback-refs).
- **Sub-mode B — review-cycle-batching driver**: the cross-tick split is artifactual — review/CI delays caused PRs to merge in two waves rather than reflecting any structural sub-theme grouping intent.

**Synth #423 prediction**: At the next instantiation of this motif (any single-author thematic-uniform cross-tick series with sub-prefix-axis-shift across ticks), **Sub-mode A coverage-completion driver will predominate at >60% probability** if the umbrella theme is operational/security-hardening (audit, authz, OAuth, secrets, validation), and **Sub-mode B review-cycle-batching will predominate at >55% probability** if the umbrella theme is feature-development (UI, new endpoints, refactor).

## Mechanism hypothesis

The stuxf Add.196+Add.197 series is consistent with a single contributor working through a **threat-model-driven security-audit checklist**: (i) audit log gaps, (ii) authz bypass holes, (iii) onboarding token exposure, (iv) MCP OAuth resolution, (v) request control field hardening, (vi) callback ref injection in key metadata. Items (i)-(iv) merged in Add.196; items (v)-(vi) merged in Add.197 after — plausibly — additional review or CI cycles on the proxy-server-touching PRs (which carry higher blast radius and may attract more review attention).

If this hypothesis is correct, then the **author's PR-opening cadence** (rather than the merge cadence) should be approximately uniform across the umbrella-theme work span. Concretely: the 6 PRs should have been opened within a tighter window than 1h28m, with the merge-time bimodality reflecting reviewer-side gating rather than author-side cadence variation. This is testable against `gh pr view --json createdAt` at the next mission tick, which is intentionally NOT part of the current synth payload (synth notes ship without API re-traversal); a follow-up synth would confirm or falsify the open-cadence-uniformity sub-claim.

## Distinguishing axes from predecessors

| Axis | Synth #416 (single-author intra-tick batch) | Synth #420 (cross-tick stacked-PR-series-continuation) | Synth #421 (single-author security-hardening intra-tick chore-prefix-uniformity batch) | Synth #423 (cross-tick same-author thematic-uniform stacked-series at sub-prefix-shift) |
|---|---|---|---|---|
| Tick scope | intra-tick (n=1) | cross-tick (n=2 explicit) | intra-tick (n=1) | cross-tick (n≥2 implicit) |
| Author count | 1 | 1 | 1 | 1 |
| Title prefix uniformity | not enforced | not enforced (continuation markers vary) | uniform `chore(...)` | uniform `chore(...)` |
| Sub-prefix uniformity | n/a | n/a | mixed across PRs (`chore(team)` + `chore(auth)` + `chore(mcp)` in Add.196) | **mixed within first tick, uniform within second tick — sub-prefix-shift across tick boundary** |
| Continuation marker | absent | present ([1/N]/[2/N]) | absent | absent |
| Content theme | feature-development | thematic continuation | security-hardening | security-hardening (umbrella) |

The synth #423 frame is the **first W17 motif to admit a sub-prefix-axis discontinuity at tick boundary** as a structural feature rather than as noise. Synth #421 implicitly treated mixed-sub-prefixes as compatible with a uniform-prefix umbrella; synth #423 elevates the sub-prefix-axis to a first-class structural axis with the additional dimension of **temporal alignment** (does sub-prefix grouping align with tick boundary?).

## Prior calibration anchors

- W17 synth #418 multi-author intra-tick batch CV = 1.01 at codex Add.194 (3-author, mixed-prefix).
- W17 synth #421 stuxf Add.196 quartet CV = 1.009; mean inter-merge gap 4m10s; PR-number dispersion 19.
- W17 Add.197 stuxf doublet: single inter-merge gap 35s; PR-number dispersion 11 (26862−26851).
- Cross-tick stuxf series total: 6 PRs, inter-merge gaps {48s, 9m07s, 2m36s, 1h11m55s, 35s}; mean 17m02s; CV across all 5 gaps = stddev/mean = 1812.6/1022.4 = **1.773** — substantially higher than within-tick CVs, consistent with the cross-tick gap (1h11m55s) being an order of magnitude larger than within-tick gaps.

## Falsifiability conditions

Synth #423 is decisively falsified at the next instantiation of (single-author, thematic-uniform, cross-tick, sub-prefix-shift) if:

1. The umbrella theme is operational/security-hardening AND Sub-mode B review-cycle-batching is observed dominantly (no detectable coverage-completion enumeration of sub-themes).
2. OR the umbrella theme is feature-development AND Sub-mode A coverage-completion driver is observed dominantly.
3. OR the cross-tick gap exceeds the longest within-tick gap by less than 2x (the synth #423 mechanism predicts the cross-tick gap should be substantially larger than within-tick gaps, reflecting the reviewer-side gating discontinuity).

Currently the Add.196+Add.197 stuxf series satisfies condition 3's negation: cross-tick gap 1h11m55s = 4316s vs longest within-tick gap 9m07s = 547s; ratio = 7.89x (well above the 2x threshold), supporting the synth #423 mechanism.

## Cross-references

- Predecessor synth #416 (single-author intra-tick batch canonical): Add.193 kitlangton 4-PR intra-tick batch.
- Predecessor synth #420 (cross-tick stacked-PR-series-continuation): Add.194→195 codex etraut-openai [1/2]→[2/2] split-series.
- Predecessor synth #421 (single-author security-hardening intra-tick chore-prefix-uniformity): Add.196 stuxf 4-PR quartet.
- Predecessor synth #422 (multi-author intra-tick batch with embedded same-author intra-tick stacked-series): Add.196 codex 8-PR octuplet with iceweasel-oai 2-PR Windows-sandbox stack.
- Sibling synth #418 (multi-author within-tick batch motif as distinct sub-class): Add.194 codex 3-author 1:1 PR-to-author mapping batch.
- Sibling synth #417 (bot-driven release-engineering batch motif): Add.194 gemini-cli-robot 3-PR cherry-pick batch.

## Summary

Synth #423 formalizes the **cross-tick same-author thematic-uniform stacked-series motif at sub-prefix-shift sub-mode** as a distinct W17 motif extending synth #421 (intra-tick instantiation) along the cross-tick continuation axis (n=1 vs n≥2 ticks) AND extending synth #420 (explicit-continuation-marker cross-tick series) along the implicit-continuation axis (no [N/M] markers). The Add.196+Add.197 stuxf 6-PR security-hardening series provides canonical instantiation at 1h28m26s total span, 7.89x cross-tick-to-within-tick gap ratio, and sub-prefix-shift from {team, auth, mcp} mixed in Add.196 to {proxy} uniform in Add.197 — consistent with Sub-mode A coverage-completion driver hypothesis at >60% probability under the synth #423 prediction frame.
