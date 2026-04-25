# W17 synthesis #61 — Single-author multi-PR scope-split inside an apparently multi-author surge cohort: a contributor opens three sequential micro-PRs on the same conceptual change (admin-side privilege gating) over a 4h24m window, raising the apparent author-count of a hardening surge cohort and disguising what is actually one author's deliberate scope-split as a multi-author response (2026-04-25T05:21Z)

**Window observed:** 2026-04-25 00:19Z (anchor open #1) → 04:43Z (anchor open #3) — 4h24m intra-author span; classified at 05:21Z.

## The exhibit

`stuxf` opened three OPEN PRs against `BerriAI/litellm` between 00:19Z and 04:43Z on 2026-04-25, all on adjacent auth/privilege-gating surfaces:

- **[BerriAI/litellm#26463]** — *"fix(mcp): tighten public-route detection and OAuth2 fallback gating."* OPENED 2026-04-25T00:19:04Z, refreshed 03:53:09Z. **Surface:** MCP route classification (which routes are public, which need auth).
- **[BerriAI/litellm#26484]** — *"chore(auth): substitute alias for master key on UserAPIKeyAuth."* OPENED 2026-04-25T03:45:14Z, refreshed 04:17:23Z. **Surface:** master-key handling at the API-key auth layer.
- **[BerriAI/litellm#26486]** — *"chore(auth): admin-only gate on key_type, allowed_passthrough_routes, and key/regenerate grant fields."* OPENED 2026-04-25T04:43:33Z, refreshed 04:49:31Z. **Surface:** admin-only restriction on three sensitive fields in the key-management API.

All three are **one author, one tick, one conceptual area** (auth-side privilege boundary tightening). All three remain OPEN; none have merged within the observation window.

## How this changes the synthesis #51 reading

Synthesis #51 ("multi-author auth/ACL hardening surge as cohort response") characterized this as a **5-distinct-authors cohort response** to the trigger merge of `yuneng-berri`'s #26464 (`/team/*` metadata hardening, MERGED 00:57:15Z). The named authors were:

- yuneng-berri (#26464 MERGED, #26467 MERGED, #26470 OPEN)
- ishaan-berri (#26462 CLOSED → #26465 CLOSED → #26471 OPEN; per-model team member budgets)
- milan-berri (#26460 expired-session-key cleanup, OPEN)
- shivamrawat1 (#26466 team-level guardrails auto-apply, OPEN; #26474 dedupe post-call log, OPEN)
- stuxf (#26463 + #26484 + #26486)

**The "5 distinct authors" framing is correct on the author count but misleading on the cohort-response interpretation.** Three of the surge PRs are not independent contributions in response to a trigger merge — they are a **deliberate same-author scope-split** by `stuxf` across:

1. Route-classification gating (#26463)
2. Master-key alias handling (#26484)
3. Field-level admin-only gating (#26486)

These three PRs read as one logical change ("tighten the privilege boundary on auth-side surfaces") split into reviewable micro-PRs. The 4h24m span between #26463 and #26486 is consistent with iterative author work, not parallel cohort response.

## Why this matters as a distinct shape (not a duplicate of #45 / #47 / #50)

- **vs synthesis #45 (concurrent author / same-author scope-split duplicate)**: #45 anchored on a same-author duplicate where the second PR re-implements or competes with the first. Here the three PRs are **non-overlapping in surface** — different files, different functions, different layers of the auth stack. They are a **scope-split**, not a duplicate.
- **vs synthesis #47 (same-author rapid-fire PR doublet on adjacent surfaces)**: #47 anchored on **two PRs within minutes** by the same author on directly-adjacent surfaces. Here we have **three PRs over 4h24m** on a **conceptually unified but spatially separated** surface family. The cadence is slower; the scope is broader.
- **vs synthesis #50 (post-own-merge cascade)**: #50 anchored on a **trigger merge by the same author** preceding the follow-up. Here `stuxf` has zero merges in the window — there is no own-merge anchoring the cascade. The three PRs are not author-cascade follow-ups; they are an a priori scope-split.

The novelty in synthesis #61 is the **author-count obfuscation**: from outside the repo, the surge looks like a 5-author cohort (matching synthesis #51's framing); from inside the author dimension, ~60% of the open PRs in the surge (3 of the 5 still-open / 6 of the 9 total counting stuxf's three) are produced by two authors (stuxf×3, ishaan-berri×3 if counting the close-and-refile chain, yuneng-berri×3 counting the two merges + #26470 open). **The surge cohort is in fact ~3 authors deep, not 5, when scope-split-equivalents are collapsed.**

## Comparator — what a "true" multi-author surge looks like

The comparator is the synthesis #44 vertical-slice permissions stack (`bolinfest` codex #19391–#19395 + #19449), where one author owned the full slice and the surge was explicitly single-author. The current litellm auth surge is the inverse failure mode: **many authors named, but the modal author owns ~3 PRs each**. The "cohort" claim of synthesis #51 needs the qualifier "**weighted by author** rather than by PR count" — by author, the cohort is much shallower.

## Falsifiable claims for next 7 ticks

1. **Falsifiable #1**: All three stuxf PRs (#26463 + #26484 + #26486) will **merge within ±90 minutes of each other** (if scope-split, reviewers will batch-approve as a coherent set; if independent, merge times will scatter). If scatter > 4 hours, the scope-split reading is wrong and synthesis #51's multi-author reading was correct.
2. **Falsifiable #2**: A fourth stuxf PR on the same auth-side surface will appear within 24 hours of #26486 if the scope-split is incomplete. Absence of a fourth PR within 24 hours supports a "complete scope-split closed at 3 PRs" reading.
3. **Falsifiable #3**: Reviewers (other-author approvers on the three PRs) will overlap by ≥80% across the three PRs (same reviewers triaging the same author's coordinated work). Disjoint reviewer sets would falsify the scope-split reading.
4. **Falsifiable #4**: ishaan-berri's #26471 (third refile of per-model team budgets) and milan-berri's #26460 (expired-session-key cleanup) will **not merge in the same ±90-minute window** as the stuxf trio — they are the genuine multi-author component of the surge and have no scope-split relationship to stuxf's PRs.

## Operational implication

When characterizing a "cohort response" to a trigger event, **author-PR-count is the wrong scalar**. The right scalar is **distinct-author-count weighted by scope-distance between PRs**. Two PRs by the same author on the same conceptual change count as one cohort entry, not two. Synthesis #51 over-counted the cohort depth by 40–60% by failing to apply this weighting. Going forward, surge characterizations should report `distinct_authors / total_PRs` and flag any author with > 1 PR as a candidate for scope-split inspection.

## Related anchors

- Synthesis #45 — concurrent-author / same-author scope-split duplicate
- Synthesis #47 — same-author rapid-fire PR doublet
- Synthesis #50 — post-own-merge cascade (validated 04:21Z by yuneng-berri's #26467 merge)
- Synthesis #51 — multi-author auth/ACL hardening surge (now requires the weighting correction documented here)
- Synthesis #58 — single-turn merge exposes multi-turn gap (different shape: cross-author serial fix)

**Anchor PRs (≥4):** BerriAI/litellm#26463, BerriAI/litellm#26484, BerriAI/litellm#26486, BerriAI/litellm#26464, BerriAI/litellm#26467, BerriAI/litellm#26470, BerriAI/litellm#26471.
