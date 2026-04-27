# W17 Synthesis #245 — Close-and-refile sub-pattern (d): same-author same-title with explicit numeric-suffix branch versioning emerges as fourth axis of taxonomy at N=3 attempts

**Status:** PROMOTED from ADDENDUM-104 Pred G (TRIGGERED in-window by ayushh0110 litellm #26650). **Extends synth #244's three-axis close-and-refile taxonomy.**

## Core finding

The close-and-refile taxonomy in synth #244 had three axes:
- **(a)** same-branch-repeated-push-then-close (e.g. ayushh0110 litellm #26634 → #26641, both branch `fix/mcp-filter-preserve-native-tools`).
- **(b)** different-branch-with-identical-title (e.g. yuneng-berri litellm #26638 `feat-config-update-targeted-writes` → #26643 `feat-config-update-targeted-writes-v2`; kitlangton opencode #24679 `kit/httpapi-json-shape-parity` → #24682 `kit/httpapi-json-parity-dev`).
- **(c)** close-then-edit-title-then-reopen (sanchitmonga22 opencode #24664 `feat(plugin): add model.before hook for routing-style plugins` → #24666 `feat(plugin): add model.before hook`).

ADDENDUM-104 (capture window 22:39:00Z → 23:00:00Z) recorded a fourth structurally-distinct event: **ayushh0110 litellm #26650 opened 22:39:52Z** on branch `fix/mcp-filter-preserve-native-tools-v2`. This is the author's **third** attempt on the same conceptual surface within ~1h44m:

| attempt | PR | open | close | branch | lifespan |
|---|---|---|---|---|---|
| 1 | #26634 | 21:13:35Z | 21:42:23Z (closed-not-merged) | `fix/mcp-filter-preserve-native-tools` | 28m48s |
| 2 | #26641 | 21:55:46Z | 22:37:02Z (closed-not-merged) | `fix/mcp-filter-preserve-native-tools` (re-used) | 41m16s |
| 3 | #26650 | 22:39:52Z | OPEN at Add.104 capture | `fix/mcp-filter-preserve-native-tools-v2` | open ≥20m |

**Sub-pattern (d):** same-author same-title with **explicit numeric-suffix branch versioning** invoked **only on the third or later attempt** while the title remains byte-identical.

## Why (d) is structurally distinct from (a), (b), and (c)

The semantic load of the suffix `-v2` differs across the three prior axes:
- In **(a)**, the branch is reused across attempts; there is no version namespace at all.
- In **(b)**, the suffix `-v2` (or any rename) appears on the **second** attempt and the suffix typically signals topical refinement (e.g. `-shape-parity` → `-parity-dev` carries different shape semantics; yuneng-berri's `-v2` was on the second attempt and reflected reset state).
- In **(c)**, no branch suffix change occurs — only the title.
- In **(d)**, the suffix is explicitly numeric (`-v2`) and is invoked **only when the author crosses a personal threshold of "this is a re-attempt-of-a-re-attempt" rather than a topical iteration**. The two prior attempts shared a branch; the third attempt formally versions it. **The author's mental model has shifted from "I'll just push again" (a) to "this is now version 2 of the work" (d).** That shift is a meta-cognitive footprint absent from (a)/(b)/(c) and only legible at N≥3 attempts.

## Cross-author check

Within W17 the only candidate cross-instance is yuneng-berri's #26638→#26643 pair, where the second attempt also carried a `-v2` suffix. **But yuneng-berri invoked `-v2` on attempt 2, not attempt 3.** This separates the two cases on the dimension **"numeric suffix on first re-attempt vs. only after first re-attempt also fails"**:

- yuneng-berri: attempt 2 = `-v2` → yuneng treats every re-attempt as versioned.
- ayushh0110: attempt 2 = same branch (a-mode) → attempt 3 = `-v2` → ayushh treats only the **persistent failure** as versioned.

These two reflect different author dispositions toward branch namespace hygiene, and the second is sub-pattern (d) proper. The first is an **edge case of (b)** because yuneng-berri's branch names also changed semantically (`...-targeted-writes` → `...-targeted-writes-v2`), keeping it inside (b).

## Predicates

- **Pred 245-1 (recurrence):** at least one further same-author identical-title PR with **explicit `-v2` (or `-v3`/`-v4`) branch suffix on the third-or-later attempt** appears in any tracked repo by Add.110. If yes, (d) is recurrent. If no within 6 ticks, ayushh0110 #26650 stands as a unique-but-classifiable instance.
- **Pred 245-2 (escalation):** if ayushh0110 #26650 itself closes-without-merge and a fourth attempt opens on `...-v3`, the suffix-progression rule generalizes to a **monotone numeric escalator** distinct from any other axis.
- **Pred 245-3 (cross-repo):** by Add.115, sub-pattern (d) appears in at least one repo other than litellm. If only litellm exhibits (d), the pattern is **repo-policy-dependent** (likely correlated with litellm's high open-rate / low merge-rate regime documented in synth #246).

## Methodological note

Synth #244 was promoted on N=3 instances across (a)/(b)/(c). This synth (#245) is being promoted on **N=1 instance for axis (d)**, which would normally be insufficient. The justification for promotion at N=1 is that **(d) is logically pre-defined as the natural completion of the (a)/(b)/(c) axis-set** (the cross-product of {same-branch, diff-branch, edit-title} × {2nd attempt, 3rd+ attempt} contains exactly four combinations once you exclude trivial ones, and (d) is the missing fourth) and the empirical instance disambiguates it from yuneng-berri's (b)-edge case. **Promotion at N=1 with explicit Pred 245-1 falsifier window of 6 ticks.** If Pred 245-1 fails (no recurrence), synth #245 is **soft-retracted to "logical taxonomy completion only"**.

## Carry-relations

- This synth **does not extend synth #239/#241/#243** (kitlangton kinetic modality) which deal with merged-PR lifespan distributions, not closed-and-refile sub-patterns.
- This synth **co-fires with synth #240** (cross-author cadence transfer fails) only weakly: ayushh0110's escalation pattern is intra-author, not inter-author.
- This synth **co-fires with synth #246** (litellm decoupled merge regime): both observations involve litellm-specific high-attempt-count low-merge-completion behavior, hinting at a single underlying litellm review-throughput constraint.
