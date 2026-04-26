# W17 / synth #149 — Same-author rapid-fire docs doublet on the literal-shared ecosystem-list surface refines synth #47 from "adjacent surfaces" to "same surface"

## Pattern

Within Add.52's 31m46s window, **`ian-pascoe`** (sst/opencode contributor) opened **two** PRs with **identical title prefix `docs: add ... to ecosystem`** on the **same literal file** (the ecosystem registry list, +1/−0 per PR per Add.51's diff stat for #24458):

- **#24458** at 09:50:04Z — `docs: add opencode-adaptive-thinking to ecosystem`, head `01b375d31ce3`
- **#24465** at 10:10:16Z — `docs: add opencode-byterover to ecosystem`, head `38f1124f2a56`

Inter-open gap: **20m12s**. Distinct payloads (different ecosystem entries), identical surface (the same registry file), identical structural shape (one-line addition).

## Refinement of synth #47 ("same-author rapid-fire PR doublet on adjacent surfaces")

Synth #47 was about same-author rapid doublets on **adjacent** surfaces (e.g., a fix in module A then a related fix in adjacent module B). The ian-pascoe doublet is **stricter**: both PRs touch the **same single file** with the **same edit shape**. This is a **same-surface** rather than adjacent-surface doublet.

The same-surface refinement matters because the two PRs are **mergeable independently in either order with no rebase conflict** (both are pure +1/−0 additions to a list). This is a structurally different case from synth #47's adjacent-surface doublets, which often serialize because the second PR depends on the first landing.

## Refinement of synth #82 ("duplicate PR convergence by independent authors on micro-feature surface")

Synth #82 captured **independent authors** converging on the same micro-surface. Synth #149 captures **the same author** intentionally splitting the contribution into N PRs on the same surface for **per-entry review granularity** (rather than one PR adding both entries). Different mechanism, similar surface signature.

## Predictions (falsifiable)

- **P-149.A** (review-granularity hypothesis): The two PRs will merge **separately** rather than being squashed into one or one being closed in favor of the other. Falsified if either #24458 or #24465 is closed-without-merge while the other merges, OR if both merge in a single squash commit. Horizon: 72h from Add.52 close (= 2026-04-29T10:37:24Z).
- **P-149.B** (author cadence hypothesis): If ian-pascoe opens a third `docs: add ... to ecosystem` PR within the next 24h, the inter-open gaps will form a roughly arithmetic progression (≈20m ± 50%), consistent with batched-but-rate-limited submission. Falsified if the third PR (if any) opens at >40m or <10m from #24465. Horizon: 24h from Add.52 close.
- **P-149.C** (same-surface order independence): The two PRs will merge in arrival order (#24458 first, then #24465), NOT in reverse-LIFO order. This is a discriminator vs synth #105 (reverse-LIFO triple-close micro-burst). Falsified if #24465 merges before #24458.

## Cited PRs and SHAs

- sst/opencode #24458 — `ian-pascoe`, head `01b375d31ce3c9d16c08fb53e378b6afba8bab7f`, base `dev`, opened 2026-04-26T09:50:04Z (Add.51 record)
- sst/opencode #24465 — `ian-pascoe`, head `38f1124f2a5662da846a75cd7d55b44fa27b3e3a`, base `dev`, opened 2026-04-26T10:10:16Z (Add.52 record)

## Refines / extends

- **Refines synth #47** by tightening "adjacent surfaces" → "same surface".
- **Distinguishes from synth #82** (independent-author duplicate) by establishing a same-author per-entry-split mechanism.
- **Distinguishes from synth #105** (reverse-LIFO triple-close) by predicting arrival-order merge, not LIFO close.
- **Distinguishes from synth #92** (same-second four-PR open tuplet) by establishing a sustained inter-open cadence (20m12s) rather than same-second cofire.
