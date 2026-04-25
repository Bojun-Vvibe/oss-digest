# W17 synthesis #47 — Same-author rapid-fire PR doublet on adjacent surfaces (sub-minute spacing, no cross-link)

**Window observed:** 2026-04-25 00:11Z → 00:34Z.

**Anchoring PRs (≥4 across ≥2 repos):**

- **[openai/codex#19454]** — *"Split approval matrix test groups"* — refreshed 00:12:00Z by `dylan-hurd-oai`. Test-organization PR (re-grouping the approval-matrix test suite).
- **[openai/codex#19471]** — *"[codex] Use serial_test for Windows sandbox tests"* — OPENED 00:26:03Z by `dylan-hurd-oai`. Test-isolation PR (forces serial execution to suppress flake).
- **[anomalyco/opencode#24232]** — *"fix(session): honor noCacheTokens in usage accounting"* — OPENED 00:29:23Z by `willsarg`.
- **[anomalyco/opencode#24233]** — *"fix(provider): honor per-model reasoning token pricing"* — OPENED 00:29:31Z by `willsarg` (8 seconds after #24232).

**Pattern.** A single author opens (or refreshes) two PRs within minutes of each other on **adjacent but distinct surfaces**, with **no machine-readable link** between them (no "depends on", no "stacks on", no shared issue, no shared PR-body section). The two PRs can each ship independently and each pass CI on its own, but they share an implicit conceptual scope:

- `dylan-hurd-oai` shaped the test surface twice in 14 minutes (re-grouping + serial-isolation) — the same author is reshaping how the same test suite is organized **and** how it executes.
- `willsarg` opened two `fix:` PRs on the session/provider boundary 8 seconds apart — token-usage accounting on the session side and per-model token pricing on the provider side. Both touch how usage numbers are computed; neither references the other.

**Why this is distinct from synthesis #45.** #45 covers **scope-split duplicate-feature PRs** (two PRs trying to ship the *same* feature with different scopes, one obsoleting the other). This is the inverse: two PRs shipping **different** changes that **share an author and a conceptual neighborhood**, and the author has not declared the relationship. The maintainer cannot tell from PR metadata alone whether merging one breaks assumptions in the other.

**Why this matters.**

1. **Review ordering becomes path-dependent.** If #19454 (test re-grouping) merges first, #19471 (serial-isolation) needs to know which group its tests landed in. Reviewer must reconstruct that ordering manually.
2. **Sub-minute spacing is the tell.** The 8-second gap between opencode #24232 and #24233 means the author had both branches ready locally and dispatched them as a unit, then chose not to expose that unit anywhere a reviewer would see it.
3. **No tooling alarms.** CI treats the PRs as independent. Required-reviewer rules treat them as independent. Only a human reading the PR list back-to-back notices that the same author just opened two adjacent things.

**Counter-pattern (what good looks like).** Either (a) one PR with both changes, (b) a stacked-PR notation in the body (`Stacks on #24232`), or (c) an explicit issue tying the two together. The doublet pattern observed here uses none of those.

**Cross-repo confirmation.** This is observed simultaneously in codex (test surface) and opencode (session/provider surface) within the same 23-minute window. It is not a one-author quirk — it is a workflow shape.

**Lookback hooks.** Pairs with #44 (vertical-slice PR stack refreshed in lockstep — explicit stacking) as the **un-declared** counterpart, and with #39 (PR-body declared cross-PR dependency without machine-readable enforcement) as the case where the declaration exists but is not enforced. Synthesis #47 covers the case where **the declaration is missing entirely**.
