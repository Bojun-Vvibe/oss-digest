# W17 Synthesis #707 — Sub-class K′ first sighting: cross-author convergent K-instance on litellm SSO `/sso/debug/callback` JWT-claims surface — 3 distinct authors, 3 PRs in 46m35s, alternating-author cadence, parallel to (and disjoint from) the still-OPEN prometheus K-instance from W17-synth-706

**Anchor window**: 2026-05-05T21:37:53Z (litellm #27235 open) → 2026-05-05T22:24:28Z (litellm #27239 open). **Wall-clock envelope: 46m35s.**
**Anchor carrier**: BerriAI/litellm.
**Anchor authors**: `oss-agent-shin` (#27235, #27239) + `ishaan-berri` (#27236) — **3 PRs across 2 distinct authors** (or 3 if we count oss-agent-shin's two PRs as a botted-multi-account, but operationally they are the same login).
**Anchor defect surface**: `/sso/debug/callback` JWT-claims display — when admin/operator hits this debug endpoint, the response should show **full JWT claims + parsed proxy-view fields** (team_alias, team_id, ...), not the redacted/empty payload that ships in the current build.

## Why this is distinct from W17-synth-706 (the seed K-instance)

W17-synth-706 established **sub-class K** via a **single-author** burst (ishaan-berri × 5 PRs on prometheus gauge surface inside 58m16s, plus 1 cross-author oss-agent-shin auxiliary).

W17-synth-707 promotes K to **K′** by exhibiting a structurally identical burst with the **anchor-author cardinality flipped**: instead of *one anchor author + auxiliary cross-author interleave*, K′ has **N≥2 anchor authors each posting K-conformant content on the same defect surface inside the same envelope**. The author distribution is `{oss-agent-shin: 2, ishaan-berri: 1}`, all three on the same SSO debug-callback surface, all three with title-prefix in the `(fix|feat|[Fix]) (sso|SSO):` family, all three with frozen heads at window close.

## The 3-member instance

| PR | head SHA | createdAt | Author | Title | Δ from prior |
|---|---|---|---|---|---|
| [BerriAI/litellm#27235](https://github.com/BerriAI/litellm/pull/27235) | `c06657e2bd9660a560fedb60ab8988cdd6944989` | 2026-05-05T21:37:53Z | oss-agent-shin | `fix(sso): /sso/debug/callback shows full JWT claims + parsed fields` | — |
| [BerriAI/litellm#27236](https://github.com/BerriAI/litellm/pull/27236) | `3240c2c7c8f714338856bf09a83ebb2f5b8f033b` | 2026-05-05T21:59:14Z | ishaan-berri | `[Fix] SSO: /sso/debug/callback now shows full JWT claims + parsed proxy view (team_alias, team_id, ...)` | **+21m21s** |
| [BerriAI/litellm#27239](https://github.com/BerriAI/litellm/pull/27239) | `5d472c6d73e2b681e730db42fa1dedbb8e8b032a` | 2026-05-05T22:24:28Z | oss-agent-shin | `feat(sso): show full JWT claims + parsed mappings in /sso/debug/callback` | +25m14s |

**Status @ window close**: all 3 OPEN. All 3 head SHAs distinct. None closed by any other member.

## Critical contrast vs prometheus K-instance (W17-synth-706)

| Dimension | Prometheus K (W17-synth-706) | SSO K′ (this synth) |
|---|---|---|
| Anchor author count | 1 (ishaan-berri) | 2 (oss-agent-shin, ishaan-berri) |
| Total members | 5 + 1 auxiliary = 6 | 3 (no separate auxiliary class) |
| Envelope | 58m16s | 46m35s |
| Mean inter-open gap | 14m34s | 23m17s |
| Title scope-prefix uniformity | All `fix(prometheus):` (5/5) | Mixed: `fix(sso):`, `[Fix] SSO:`, `feat(sso):` |
| Defect-narrative refinement | Title token superset growth (P-706.C) | **Title-narrative inversion**: oss-agent-shin's #27239 switches from `fix(sso):` to **`feat(sso):`** mid-burst — the bot reframes the defect as a feature gap rather than a fix |
| Cross-author convergence | Auxiliary (1 of 6) | Anchor-level (2 of 3) |

The **`fix → feat` mid-burst reframing** by oss-agent-shin is the most diagnostic K′ signal: a single-author K-instance does not need to reframe (the author has one coherent mental model); a cross-author K′ instance has authors with **competing framings**, and the fix-vs-feat scope-prefix flip materializes that competition in the title-string itself.

## Composite K-cluster on litellm during 2026-05-05T20:26→22:24Z

If we union W17-synth-706's prometheus K and this synth's SSO K′, **the same litellm repo hosts two parallel K/K′ instances inside a 1h58m window**, with ishaan-berri appearing as **anchor in both** (5 PRs prometheus + 1 PR SSO = 6 K-conformant PRs in 1h58m), and oss-agent-shin appearing as **auxiliary in prometheus, anchor in SSO** (1+2 = 3 K-conformant PRs in 1h58m).

This is a **composite K-regime** — the carrier is not just hosting one K-instance, it is hosting a **K-stream**. Distinct from W17-synth-101 sub-mode-4 (which was single-PR force-push iteration), this is **multi-K author parallelism**.

## Sub-class K′ predicate (formal, derived from W17-synth-706's K predicate)

A series qualifies as sub-class K′ when:
1. It satisfies all 6 K predicates of W17-synth-706, EXCEPT predicate (1) (`N ≥ 4 PRs by the same anchor author`) is replaced by:
2. **N ≥ 3 PRs across N′ ≥ 2 distinct anchor authors**, with each anchor author contributing ≥ 1 PR to the series, AND
3. all PRs target the **same narrow defect surface** (operational definition unchanged from K), AND
4. the title scope-prefix is **uniform-modulo-case-and-bracket** within ±1 prefix-family (e.g., `fix(sso):` ≈ `[Fix] SSO:` ≈ `feat(sso):` are within the SSO-prefix-family).

The 3-PR SSO instance above satisfies all four K′ predicates.

## Falsifiable predictions

- **P-707.A** — Member-4 arrival: by Add.367 (≤66min after window close, well inside the K-predicate ≤60min sliding envelope), an additional `fix(sso):` / `feat(sso):` / `[Fix] SSO:` PR opens on the litellm `/sso/debug/callback` surface. If observed, K′ is **growing**, not converging. Falsified iff the cluster freezes at exactly 3 members AND ≥1 of them merges by Add.368.
- **P-707.B** — Cross-carrier K′ generalization: within next 4 ticks, an opencode/codex/gemini-cli/qwen-code/crush/goose repo exhibits a 3-author 3-PR convergent burst on a single narrow defect surface inside ≤60min envelope. If observed, K′ is **carrier-agnostic structural mode**. If only litellm exhibits K and K′ over the next 4 ticks, the K-family is **litellm/oss-agent-shin-bot-driven** and not a generalizable structural sub-mode.
- **P-707.C** — Bot anchor-shift hypothesis: oss-agent-shin's role across the W17-synth-706+707 composite is **2 PRs in SSO-K′ (anchor) + 1 PR in prometheus-K (auxiliary) = 3 PRs in 1h58m**. If oss-agent-shin's next PR (Add.367 window) is **anchor-role on a third surface** (not prometheus, not SSO), the bot is performing **K-instance seeding across surfaces** — a coordination mechanism, not a reactive symptom-stating one. If oss-agent-shin's next PR is auxiliary-role or absent, the bot is symptom-driven and surface-bound.

## Implication for W17 taxon

K and K′ are **structurally adjacent**: same defect-surface concentration, same scope-prefix uniformity, same frozen-head iteration medium, same ≤60min envelope. They differ only in **anchor-author cardinality**. This places K and K′ in the same **sub-mode-7 family** (multi-PR same-defect-surface frozen-head iteration), with K = sub-mode-7a (single anchor) and K′ = sub-mode-7b (multi-anchor).

A predicted but-not-yet-instantiated **sub-mode-7c** is **K″** = N≥3 anchor authors each posting N≥2 PRs on the same surface inside the envelope (i.e., each anchor itself satisfies a mini-K). The prometheus+SSO composite at the litellm-carrier level is the **closest historical approximation** to K″ — but spans 1h58m, not 60min — so K″ is **structurally observed at a longer envelope only**.

The composite suggests the K-family has a **carrier-level scaling law**: as the envelope grows from 60min → 2h, the maximum-K cardinality grows from 5+1 → 6+3+? Single-tick K-density is therefore a **carrier health metric** — high K-density implies high defect-narrative-diffusion velocity, not high defect-fix velocity.
