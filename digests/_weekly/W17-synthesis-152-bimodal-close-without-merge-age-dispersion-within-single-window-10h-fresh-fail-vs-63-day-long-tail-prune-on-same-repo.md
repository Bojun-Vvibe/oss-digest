# W17 / synth #152 — Bimodal close-without-merge age dispersion within single window: 10-hour fresh-fail vs 63-day long-tail prune on the same repo

## Pattern

In the Add.53 window (2026-04-26T10:37:24Z → 11:17:26Z, 40m02s), `sst/opencode` produced **two close-without-merge events** with extreme age dispersion bracketing a single 40-minute window:

1. **sst/opencode#24386** (`pascalandr`, `fix(provider): preserve Azure API version`, head `ee16f5ac3c33`):
   - Opened: 2026-04-25T20:46:39Z
   - Closed (no merge): 2026-04-26T07:05:40Z
   - **Age at close: 10h19m01s**
   - Surface: provider config (Azure API version preservation)
   - Post-close updatedAt 11:02:58Z indicates a comment/event after close — close itself fell outside the strict window but **the post-close event landed in window**.

2. **sst/opencode#14672** (`niushuai1991`, `chore: add repository guard to workflows`, head `763eac8baec3`):
   - Opened: 2026-02-22T13:52:13Z
   - Closed (no merge): 2026-04-26T10:50:23Z
   - **Age at close: 63d20h58m10s** — extreme long-tail prune
   - Surface: CI workflow guard (chore-class)

**Age ratio: 63d20h58m / 10h19m ≈ 148.6×.** Both close-without-merge events on the same repo, by distinct unrelated authors, on disjoint surface families (provider runtime config vs CI workflow definition).

## Discriminator vs prior synths

| Synth | Pattern                                      | Match? | Why not                                             |
|-------|----------------------------------------------|--------|-----------------------------------------------------|
| #59   | Sub-15-min self-close on flaky test surface | No     | Neither author is closing their own (#24386 closed ~10h post-open, #14672 closed by maintainer not original author) and surface is not flaky-test |
| #88   | Aged-PR self-close pair bookending fresh open | No     | No "fresh open" between the two closes; no same-author bracketing |
| #98   | Bot-driven sub-10s n3 stale-pr mass close sweep | No     | These are **not bot closes** (no GitHub Actions bot signature on #14672), spacing is ~3h45m apart, n=2 not n=3 |
| #20   | Patch PR graveyard                          | Partial| #14672 fits the long-tail-prune leg, #24386 fits the recent-fail leg, but synth #20 doesn't capture the **bimodal age dispersion within one window** |

Synth #152 is **distinct** by characterizing the **co-occurrence within one tracked window** of two close-without-merge events whose ages span **two orders of magnitude** (10h vs 63d), with the implication that `sst/opencode`'s close-without-merge funnel **simultaneously ingests fresh-fail and long-tail-prune work in a single drought-window without temporal sequencing** between the two age regimes.

## Falsifiable predictions (for next 4 windows)

- **P-152.A**: Within the next 4 windows, `sst/opencode` will produce **at least one more close-without-merge with age ≥30 days** (long-tail-prune leg). If zero ≥30d closes occur in 4 windows, #14672 was a **singleton long-tail prune**, not the leading edge of a backlog-clearance sweep, and synth #152 reduces to a one-shot age-dispersion curiosity.
- **P-152.B**: Within the next 4 windows, `sst/opencode` will also produce **at least one close-without-merge with age <24h** (fresh-fail leg). If zero <24h closes occur, #24386's leg is also a singleton.
- **P-152.C**: If both P-152.A and P-152.B fire in the **same window** (not just within the 4-window envelope), synth #152's bimodal-co-occurrence reading is **promoted to a recurring regime feature** of `sst/opencode` close-without-merge processing during merge droughts. If P-152.A and P-152.B fire but in **separate** windows, the reading collapses to **temporal independence** between the two age legs, falsifying the "single funnel ingests both ages within one window" hypothesis.
- **P-152.D**: Cross-repo extension test: within the next 4 windows, at least one of {openai/codex, BerriAI/litellm, QwenLM/qwen-code} will produce a close-without-merge with age ≥30d **during a zero-merge window**. If none, the pattern is **sst/opencode-specific maintenance behavior** rather than a generic drought-window backlog response.

## Refines / falsifies prior synths

- **Refines synth #20 (patch PR graveyard)** by adding a within-window co-occurrence dimension: graveyard intake is not just a slow accumulation, it can **fire on both age legs simultaneously**.
- **Refines synth #98** by isolating a **non-bot, non-mass, non-sub-10s** close pattern that nonetheless covers a wide age range. Synth #98's bot-sweep signature requires sub-10s spacing on similar-age PRs; synth #152 has ~3h45m spacing on radically dispersed-age PRs.
- **Tests an implicit assumption in synth #88** (aged self-close bookending fresh cycle) by demonstrating that close-without-merge bookending can occur **without same-author bracketing and without a fresh open between**.
- **Provides a counterpoint to synth #150's regime characterization**: while synth #150 reads `sst/opencode` activity primarily through the open/iterate lens (regimes A/B/C), synth #152 surfaces a parallel **close/prune lens** that is also drought-window-active and structurally bimodal.

## Anchor PRs

- sst/opencode#24386 (pascalandr, age-at-close 10h19m, surface: provider config)
- sst/opencode#14672 (niushuai1991, age-at-close 63d20h58m, surface: CI workflow guard)

## Source addendum

ADDENDUM-53 (window 10:37:24Z → 11:17:26Z, 40m02s).
