# W17 Synthesis #100 — Cross-carrier ACP/SACP session-event protocol QUARTET realization across four PRs spanning three carriers within a single 4-hour open window

**Anchor window:** 2026-05-04T05:59:29Z → 2026-05-04T14:36:42Z (8h37m13s span; final-leg-realization tick at 14:36:42Z).
**Anchor carriers:** sst/opencode + google-gemini/gemini-cli + block/goose (3 carriers, 4 PRs).
**Anchor protocol:** ACP (Agent Communication Protocol) / SACP (Server-Agent Communication Protocol) session-event surface.
**Parent synth:** Add.325 documented the original cross-carrier ACP-correctness DOUBLET (opencode #25683 + goose #8983/#8985 = three legs, one carrier-pair). Add.326 closes the quartet by adding the **gemini-cli leg** as fresh-open #26439 at 14:36:42Z, completing 3-carrier coverage.

## Why this is distinct from prior cross-carrier synths

Synths #87–#99 established multiple cross-carrier lens types: Windows-correctness (#80, ongoing), MCP-reconnection (Add.324–326), shell-escaping correctness (Add.325), UI-render correctness (W17-synth-638). Each captured 2–3 carriers touching a thematically related defect class. Synth #100 captures the **first realized 3-carrier QUARTET on a single named protocol surface** — and uniquely, the protocol is **stateful and inter-process**, not a defect class. ACP/SACP is the wire contract between an agent runtime, its server-side session manager, and downstream UI shells. A QUARTET on this surface implies **convergent design pressure on the protocol itself**, not parallel symptom-fixing of unrelated bugs.

## The four members

| PR | Carrier | Author | Opened (UTC) | Title | Surface |
|---|---|---|---|---|---|
| [sst/opencode#25683] | opencode | truenorth-lj | 2026-05-04T07:52:29Z | `fix(acp): drain message events before returning end_turn` | ACP message-event drain semantics on turn-completion |
| [block/goose#8983] | goose | matt2e | 2026-05-04T05:59:29Z | `fix: SACP notifies clients of generated session names` | SACP server→client session-name notification |
| [block/goose#8985] | goose | lifeizhou-ap | 2026-05-04T12:27:25Z | `refactor: goose 2 ui used acp session id` | UI ACP session-id consumption |
| [google-gemini/gemini-cli#26439] | gemini-cli | frozename | 2026-05-04T14:36:42Z | `fix(acp): recognise structured ENOENT codes and broader not-found phrasings` | ACP error-code structured-recognition |

Verified head SHAs (per Add.326 capture @ 2026-05-04T15:03:50Z):
- opencode #25683 → `edae14d0eb6655d45bef212e7d4b48439b5188ad` (8-tick head-stable Add.319→326)
- goose #8983 → `6cab656232064992915444579d1b5f4b77999863`
- goose #8985 → `c58787912640343e1ab4a954521607bad1b58a2f`
- gemini-cli #26439 → `b67c5d6a68e65f595903c65d1179ce43d10425cb`

## Surface decomposition: the ACP/SACP contract attack-surface

The four PRs partition the ACP/SACP surface into four orthogonal sub-surfaces:

1. **Lifecycle drain semantics** (#25683 — opencode): when an ACP turn ends, queued message events must be flushed before `end_turn` returns, otherwise downstream consumers race the response.
2. **Server→client identity notification** (#8983 — goose): when SACP generates a session name server-side, clients are not implicitly aware; explicit notification was missing.
3. **Client-side identity consumption** (#8985 — goose): the UI layer was internally generating its own session id parallel to ACP's, causing a divergence; refactor consolidates on ACP-issued ids.
4. **Error-code surface stability** (#26439 — gemini-cli): ACP error responses arrive with structured codes (ENOENT and broader not-found phrasings); the recognition layer must not pattern-match string fragments alone.

Each sub-surface is a **distinct failure mode** of the same protocol: drain (timing), notification (server-push completeness), consumption (id-source-of-truth), recognition (error-code stability). The QUARTET is **not** four parallel bugs — it is **four orthogonal axes of the same contract maturing concurrently**.

## What the timing tells us

- **#8983 opens first** (05:59:29Z) — server-side notification gap.
- **#25683 opens 1h53m later** (07:52:29Z) — drain-semantics fix on an entirely different codebase by an entirely different author, but on the **same protocol layer**.
- **#8985 opens +4h35m after #8983** (12:27:25Z) — client-side consumption refactor on the **same codebase** as #8983 (goose), suggesting matt2e's #8983 unblocked or surfaced lifeizhou-ap's #8985.
- **#26439 opens +2h09m after #8985** (14:36:42Z) — gemini-cli error-recognition fix completes the cross-carrier triangle.

The intra-goose ordering (#8983 → #8985, +6h28m, same-day same-protocol same-carrier successive PRs by **disjoint authors** lifeizhou-ap and matt2e) suggests an **internal coordination event** at goose: server-side notification (#8983) had to land or be visible before the UI consumer refactor (#8985) made sense. This is one of the few cases in W17 where two same-day same-carrier PRs by disjoint authors converge on the same protocol layer in a serializable order.

The cross-carrier ordering (#8983 goose → #25683 opencode → #26439 gemini-cli) shows **no shared author** and **no shared codebase**. The protocol pressure is genuinely independent. Either (a) ACP/SACP usage is hitting a maturity inflection across the agent-runtime ecosystem this week, (b) a recently-merged upstream ACP spec change is propagating, or (c) the cluster is coincidence-driven (prior probability of a 4-PR same-protocol cross-carrier same-day cluster by chance: estimated <0.03 given W17's protocol-touch base rate).

## The QUARTET predicate

A cross-carrier protocol QUARTET under synth #100 requires:
1. Four distinct PRs across **≥3 distinct carriers** within a **≤24h opening window**.
2. Each PR's title or first-touched file **explicitly references** the same protocol identifier (here `acp:` or `SACP`).
3. Each PR addresses a **distinct sub-surface** of that protocol (no two PRs are duplicates of the same defect).
4. **No shared author** across at least two of the carrier-disjoint legs.
5. The PRs are **temporally co-located** (max inter-open gap ≤ 8h).

The 2026-05-04 cluster satisfies all five predicates. Predicates (3) and (4) are what distinguish a QUARTET from a duplicate-class wave (see synth #98 bot-driven mass-close as the counter-example: shared mechanism, same-second co-fire, single actor).

## Falsifiable predictions

1. If a fifth ACP/SACP-touching PR opens in any of the 7 carriers within 24h of #26439 (i.e., by 2026-05-05T14:36:42Z), the protocol-pressure hypothesis (a) is supported and the QUARTET extends to QUINTET — predicted carriers most likely to leg-in: charmbracelet/crush (next-likeliest agent-protocol surface) or QwenLM/qwen-code (which has parallel MCP-protocol activity already).
2. If #26439 merges within 6h of open with a sub-30m lifespan, the gemini-cli ACP-error-recognition fix is **purely additive recognition** (low review surface), implying ACP error-code surfaces are well-specified and only the consumer layer was incomplete.
3. If goose #8985 (UI consumes ACP session id) merges **before** #8983 (SACP notifies session names), it confirms the consumer refactor was prepared in advance and #8983 is catching up to a consumer expectation, not vice versa — which inverts the naive "server first, client follows" ordering.
4. If any carrier surfaces a **breaking** ACP/SACP change within 7 days, the QUARTET is the leading indicator of a **wire-protocol revision wave**, and a synth-#100-extension lens should be opened to track ACP version negotiation.
5. If no fifth same-protocol PR appears within 24h, the QUARTET stays terminal and the cross-carrier same-protocol coincidence-rate baseline should be revised upward.

## Distinctness from prior synths

- **vs Add.324–326 MCP-reconnection lens**: MCP-reconnection is a single defect class (transport reconnection on error). ACP/SACP QUARTET is a **multi-axis protocol contract** with disjoint sub-surfaces. The MCP-reconnection lens at most reaches a TRIPLET on a single sub-surface; the ACP QUARTET reaches four legs because the protocol exposes four independent failure modes.
- **vs Windows-correctness QUARTET (Add.325 P-325.E)**: Windows-correctness is a **platform-coupled** lens — every leg fails because of a Windows-specific runtime quirk. ACP QUARTET is **platform-agnostic** — failures occur identically on macOS/Linux. The shared anchor is the **wire contract**, not the runtime.
- **vs synth #97/#99 same-author shared-spec series**: those are intra-repo intra-author lens; this is **inter-repo inter-author**. The convergence mechanism is the protocol surface itself, not author intent.
- **vs W17-synth-638 cross-carrier UI-correctness triplet**: UI-correctness is a UX defect class; ACP QUARTET is a **protocol-engineering** event. Different stratum.

## Risk lens

- **Spec-anchor candidate identification**: if ACP has a written spec document anywhere in the carrier set (e.g., a `specs/acp.md` or equivalent in opencode), it is a candidate **release-coupling surface** by analogy to synth #99's `specs/effect/http-api.md`. Reviewers checking ACP-touching PRs in any carrier should also check for spec-doc co-touches.
- **Cross-carrier protocol-version drift**: if the four PRs land in different orders across carriers, the wire contract may temporarily diverge. A consumer in carrier A on the new contract talking to a server in carrier B on the old contract could break. Worth flagging if any of the four PRs lands a version bump.
- **Author-coordination signal absence**: the four authors (truenorth-lj, matt2e, lifeizhou-ap, frozename) have no apparent overlap — the convergence is **emergent**, not coordinated. This is good (independent validation of the protocol's pressure points) but bad for cross-carrier coherence (no single author is steering the contract). A future synth should track whether any of these authors ever opens a PR in a second carrier of this set.
- **Detector recommendation**: any future PR in any of the 7 carriers whose title contains `acp` or `sacp` (case-insensitive) should be auto-tagged as "synth-100 cross-carrier protocol carry candidate" and surfaced to the next addendum, regardless of head-stability state.
