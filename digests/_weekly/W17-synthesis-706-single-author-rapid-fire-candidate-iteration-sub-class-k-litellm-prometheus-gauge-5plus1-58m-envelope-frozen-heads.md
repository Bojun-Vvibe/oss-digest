# W17 Synthesis #706 — Single-author rapid-fire candidate-iteration sub-mode (sub-class K): N≥4 PRs in <60 min on one defect surface, with prior heads frozen and successive PR titles refining the defect narrative — first sighting on litellm prometheus gauge surface, with cross-author bot interleave

**Anchor window**: 2026-05-05T20:26:04Z (litellm #27226 open) → 2026-05-05T21:24:20Z (litellm #27233 open). **Wall-clock envelope: 58m16s.**
**Anchor carrier**: BerriAI/litellm.
**Anchor author**: `ishaan-berri` (5 PRs); cross-author interleave: `oss-agent-shin` (1 PR).
**Anchor defect surface**: a single Prometheus metric family — `litellm_remaining_api_key_{requests,tokens}_for_model` returning `9e18` (`sys.maxsize`) instead of real values, when the **v3 rate limiter** is in use (Grafana / DataDog dashboards observe the bogus sentinel).

## Why this is distinct from prior synths

- **W17-synth-83 / W17-synth-91 / W17-synth-92** (single-author multi-PR bursts) capture **disjoint sub-surfaces** — each PR in the burst targets a different file/feature. **#706 is the opposite**: every PR targets the **same metric family**, the same gauge update path, the same `additional_headers`/`hidden_params` lookup site.
- **W17-synth-100** (`single-author intra-repo same-SHA N=3 closed refile prelude before content-amplified single merge resolution`) captured **same-SHA refiles** with closes in between. **#706 has no closes inside the burst** — all 5 author-anchor PRs remain OPEN at window close, and prior heads are **frozen**, not re-pushed. Iteration is by **opening new PRs**, not by force-pushing or closing-and-refiling.
- **W17-synth-101** (sub-mode-4 compound iteration: ben-wangz on litellm #27176 with 12m inter-force-push gap) captured **single-PR iteration via force-push**. **#706 inverts**: same author, **multiple parallel PRs**, no force-push activity.
- **W17-synth-102** (single-author verb-routing stack, codex specific, sub-second arithmetic open burst): structurally similar (single author, multi-PR), but #102 is **stack-shaped** (each PR depends on the prior) and uses **2-second wall-clock arithmetic**. **#706 is candidate-shaped** (each PR is an alternative approach to the same defect) and uses **2–10 minute irregular** intervals.

The combination of (i) same defect surface, (ii) parallel-not-stacked, (iii) frozen prior heads, (iv) sub-1h envelope, (v) explicit defect-narrative refinement in each PR title is a **new sub-mode** — call it **sub-class K**.

## The 5+1 member instance

| PR | head SHA | createdAt | Author | Title fragment | Δ from prior |
|---|---|---|---|---|---|
| [BerriAI/litellm#27226](https://github.com/BerriAI/litellm/pull/27226) | `9de49c7b044db424584f0a24475c8e8bae2cdca1` | 2026-05-05T20:26:04Z | ishaan-berri | `fix(prometheus): read per-key remaining tokens/requests from additional_headers (Grafana/DataDog 9e18 fix)` | — |
| [BerriAI/litellm#27229](https://github.com/BerriAI/litellm/pull/27229) | `17656d9aad8ffeefa8bec8d32c804286402b7be9` | 2026-05-05T21:05:22Z | ishaan-berri | `fix(prometheus): read litellm_remaining_api_key_{requests,tokens}_for_model from hidden_params.additional_headers (v3 limiter)` | **+39m18s** |
| [BerriAI/litellm#27230](https://github.com/BerriAI/litellm/pull/27230) | `21ac955a60c238557ef124942ef2ca1332bd7b0c` | 2026-05-05T21:12:31Z | ishaan-berri | `fix(prometheus): fall back to v3 limiter additional_headers for per-key remaining gauges` | +7m09s |
| [BerriAI/litellm#27231](https://github.com/BerriAI/litellm/pull/27231) | `f624132babc39470ef215c853eda261032969dd6` | 2026-05-05T21:14:31Z | ishaan-berri | `fix(prometheus): fall back to additional_headers for remaining tokens/requests gauges` | +2m00s |
| [BerriAI/litellm#27232](https://github.com/BerriAI/litellm/pull/27232) | `bec93c80c8c35a8579d3a12c68a7b67a7ec0e82e` | 2026-05-05T21:19:59Z | **oss-agent-shin** | `fix(prometheus): per-key per-model remaining tokens/requests gauges always 9e18 (sys.maxsize)` | +5m28s (cross-author interleave) |
| [BerriAI/litellm#27233](https://github.com/BerriAI/litellm/pull/27233) | `052f02fa473bee5e32ff1aaa2e629208f140c9a8` | 2026-05-05T21:24:20Z | ishaan-berri | `fix(prometheus): emit real litellm_remaining_api_key_*_for_model values when v3 rate limiter is in use` | +4m21s |

**Status @ window close**: all 6 OPEN. All 6 head SHAs are distinct. None of the 6 has been closed by any other member.

## What sub-class K tells us about iteration cost

**(a) Title narrative refinement is the iteration medium.** Read the title sequence:
1. "read per-key remaining tokens/requests from additional_headers" (action: read)
2. "read … from hidden_params.additional_headers (v3 limiter)" (refinement: explicit nested path, explicit limiter version)
3. "fall back to v3 limiter additional_headers" (action: fallback, not direct read)
4. "fall back to additional_headers" (refinement: drop the `v3 limiter` qualifier — broader fallback)
5. (oss-agent-shin) "gauges always 9e18 (sys.maxsize)" (re-frames the problem as a symptom statement, not a fix description)
6. "emit real values when v3 rate limiter is in use" (refinement: outcome-oriented title — "emit real values")

The author is not converging on a single fix; they are **converging on the right framing** of the fix. The cost they are paying is review-mental-overhead (six titles for one defect) in exchange for **flexibility on which framing the maintainer picks**.

**(b) Cross-author bot interleave is consistent with the candidate-elimination interpretation.** oss-agent-shin's #27232 is **not** another approach — it is a **symptom-statement** PR (title: "gauges always 9e18 (sys.maxsize)"). This is consistent with an automated agent observing the gauge value `9e18` in production telemetry and opening a PR to record the symptom; the human author (ishaan-berri) is independently iterating on fixes. The interleave at +5m28s into the burst is a **convergence event**, not a coordination event.

**(c) Frozen prior heads = no force-push cost.** ishaan-berri does not force-push #27226 to apply the #27229 approach, then re-force-push to apply the #27230 approach. Each candidate is materialized as a fresh PR. This trades **PR review queue cost** (5 PRs to triage instead of 1) for **branch history cleanliness** (each candidate has a clean linear history). The author has implicitly chosen optimization-for-maintainer-decision over optimization-for-PR-count.

## Sub-class K predicate (formal)

A series qualifies as sub-class K when:
1. **N ≥ 4 PRs** by the same anchor author,
2. opened within a **single contiguous wall-clock envelope ≤ 60 min**,
3. all PRs target the **same defect surface** (operational definition: shared metric family / shared error message / shared symptom string in title or body),
4. each PR's title contains the **same scope-prefix** (here: `fix(prometheus):`),
5. **no PR in the series force-pushes its head SHA** during the envelope (heads are frozen at PR creation),
6. no PR in the series is closed by any other member during the envelope.

Cross-author interleaves are **permitted** as auxiliary members but do not count toward the N ≥ 4 anchor-author threshold.

The litellm 5+1 instance above satisfies all six predicates.

## Falsifiable predictions

- **P-706.A** — Candidate elimination resolution: by Add.366+3 ticks (~3.5h after window close), at least 3 of {#27226, #27229, #27230, #27231, #27233} are CLOSED-no-merge in favor of one or two surviving merge candidates. Falsified iff ≥3 survive AND each merges independently (would imply parallel-merge resolution rather than candidate-elimination).
- **P-706.B** — Cross-carrier generalization: within next 4 ticks, an opencode, codex, gemini-cli, qwen-code, crush, or goose author opens ≥4 PRs in <60min on the same narrow defect surface (no scope-prefix repetition counterexamples). If observed, K generalizes off litellm prometheus. If not observed across 4 ticks, K is **litellm-prometheus-specific** at this iteration cadence.
- **P-706.C** — Title-narrative refinement metric: across the 5 ishaan-berri titles, the **mean unique-token count per title** (after dropping `fix(prometheus):` prefix and stop-words) **strictly exceeds** the cross-author-interleave PR's title token count, AND each successive ishaan-berri title introduces **≥1 net-new domain token** (e.g. `additional_headers`, `hidden_params`, `v3 limiter`, `fallback`, `emit`, `real values`). Falsified iff any successive ishaan-berri title is a strict subset of a prior title's domain tokens.

## Relationship to existing W17 taxa

- **Parents**: W17-synth-83 (single-author multi-PR cadence within one repo); W17-synth-91 (single-author triplet self-merge metronome).
- **Siblings**: W17-synth-101 sub-mode-4 (compound iteration via force-push); W17-synth-102 verb-routing stack (codex-specific, stack-shaped, sub-second arithmetic).
- **Children candidates**: a sub-class K′ for cross-author convergent K (where ≥2 distinct authors each post K-conformant series on the same defect surface inside the same 60min envelope) is observable but not instantiated this tick.

#706 establishes sub-class K at sighting #1; promotion to recurring taxon requires sighting #2 on a different defect surface (P-706.A's elimination outcome would also speak to whether K is structurally stable or self-pruning).
