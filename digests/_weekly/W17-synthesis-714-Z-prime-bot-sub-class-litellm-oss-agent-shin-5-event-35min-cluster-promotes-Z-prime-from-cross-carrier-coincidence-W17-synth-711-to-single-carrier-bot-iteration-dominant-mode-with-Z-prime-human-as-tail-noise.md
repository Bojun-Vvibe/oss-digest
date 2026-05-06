# W17-synthesis-714 — Z′_bot sub-class promotes from cross-carrier coincidence (W17-synth-711) to single-carrier bot-author cluster (litellm oss-agent-shin, 5 events / 1 carrier / 35min) — dominant Z′ generator is bot iteration, not human accident

**Capture**: 2026-05-06 (W18 day-1, Add.369 capture window 00:02:16Z → 00:55:25Z).

## Claim

W17-synth-711 framed Z′ (accidental/malformed-title CLOSED-no-merge) as a **2-carrier human-accident cross-carrier replication** (opencode #25936 ddbd `Merge: ` + codex #21267 canvrno-oai `N/A`, both ~4-minute lifespan). Add.369 reveals that framing as the **lower-volume tail** of the Z′ phenomenon. The dominant generator is **bot-author trial-and-error PR creation with rapid self-close**, observed as a 5-event cluster on litellm from a single bot-author (`oss-agent-shin`) within 35 minutes:

| PR | title | open | close | lifespan | state @ Add.369 |
|---|---|---|---|---|---|
| #27251 | `Fix: make setup wizard config deterministic` | (≤00:20Z) | 00:20:03Z | < 1h | CLOSED-no-merge |
| #27252 | `Investigation: placeholder issue` | 00:21:36Z | — | 33m+ | OPEN (Z′_bot intermediate) |
| #27253 | `Add: main.py module description comment` | (≤00:51Z) | 00:51:27Z | < 1h | CLOSED-no-merge |
| #27255 | `Add utils module docstring` | (≤00:48Z) | 00:48:53Z | < 1h | CLOSED-no-merge |
| #27258 | `Add proxy server module docstring` | 00:55:25Z | — | new | OPEN (Z′_bot candidate) |

3 closed + 2 open speculative-title PRs on a single carrier from one bot-author. Title pattern is **placeholder/docstring/investigation framing** with `Add:` / `Fix:` / `Investigation:` prefixes — **not malformed** like W17-synth-711's `Merge: ` or `N/A`, but **substantively trivial** (one-line docstring additions) AND **rapidly self-aborted** by the bot's own close action.

## Sub-class division

- **Z′_human** — human accidental/malformed-title PR, lifespan 4–5 minutes, closed by AUTHOR (panic/correction) or maintainer (review-reject). Examples: opencode #25936 ddbd `Merge: ` (4m33s, author-closed); codex #21267 canvrno-oai `N/A` (4m17s, author-closed). Cross-carrier coincidence at Add.368, n=2.
- **Z′_bot** — bot-author speculative trial PR, lifespan minutes-to-hours, closed by BOT itself in mass-sweep when superseded by next iteration. Examples: litellm #27251, #27253, #27255 (oss-agent-shin Add.369). Within 35-minute window on single carrier, n=3 closed + 2 open.

The discriminator is **author identity (bot vs human)** and **close-volume cadence** (Z′_human is single-event, Z′_bot is mass-sweep within ≤1h).

## What is NEW vs W17-synth-711

W17-synth-711 hypothesis was that Z′ is a sampling-rare accidental-PR sub-class observed ~1× per several ticks per carrier. Observed Z′_bot rate at Add.369 is **5 events / 1 tick / 1 carrier** — two orders of magnitude denser than synth-711's projection. The "rare accident" framing applies only to Z′_human; Z′_bot is **systematic bot-iteration noise**.

The supersession mechanism: oss-agent-shin opens speculative refactor/docstring PRs, monitors review feedback or internal heuristics, and **self-closes superseded entries when newer attempts open**. #27250 (bot-housekeeping superseded by #27256 opened ~7m later) is a parallel example **not classified as Z′** because the title is well-formed (`[litellm-agent] Staging → litellm_internal_staging`) — it's regular bot housekeeping, not Z′_bot.

## Cross-carrier consistency check

Add.369 saw Z′_bot exclusively on litellm. Other carriers in the same tick:
- **codex**: 0 new closed-no-merge events (24 PRs cited, 5 merges, 0 closes)
- **opencode**: 0 new closed-no-merge events
- **gemini-cli**: 0 new closed-no-merge events; the bot account `gemini-cli-robot` does NOT exhibit Z′_bot pattern (its PRs are persistent changelog/release-bump entries that consistently merge).
- **goose, qwen-code, crush**: 0 events.

Z′_bot is therefore **carrier-locked to litellm** at this observation. Hypothesis: oss-agent-shin is a litellm-internal review-agent bot specific to the BerriAI repo's automation surface; comparable bots on other carriers (e.g., gemini-cli's robot) have higher merge-conversion rates and don't generate Z′_bot.

## Falsification this tick

W17-synth-711 predicted Z′ sub-class would recur cross-carrier at low rate. Observed: Z′_human did NOT recur (zero Z′_human events on any carrier in Add.369 — 0 codex, 0 opencode, 0 gemini-cli, 0 qwen-code, 0 goose, 0 crush, 0 litellm Z′_human). The cross-carrier coincidence at Add.368 was **single-tick noise**, not a stable cross-carrier signal. W17-synth-711's hypothesis is therefore **partly falsified**: Z′_human is a coincidence; Z′_bot is the real recurring pattern, and it is single-carrier.

## Falsifiable predictions

- **P-S714.A**: At Add.370 the litellm carrier shows ≥3 new oss-agent-shin closes (Z′_bot continues at observed cadence) OR oss-agent-shin produces 0 new entries (bot has been throttled/disabled by maintainers — record a regulatory event with timestamp and any commit referencing `oss-agent-shin` in CI configs).
- **P-S714.B**: Z′_human (human accidental-title) does NOT recur at Add.370 across any of 7 carriers. If observed, the cross-carrier coincidence-vs-pattern question reopens; if 0 events as predicted, Z′_human is firmly noise.
- **P-S714.C**: #27252 (`Investigation: placeholder issue`, currently OPEN) closes-no-merge by Add.370 → confirms Z′_bot intermediate-OPEN-state is transient. If MERGED instead, the placeholder-title was loaded with real content and Z′_bot's title-substance correlation breaks.
- **P-S714.D**: A second carrier exhibits Z′_bot from a different bot-author by Add.372 (3-tick budget). Likely candidates: codex's various `*-oai` accounts (canvrno-oai, mifan-oai already showed one-off Z′_human) or gemini-cli's `gemini-cli-robot` if it ever begins self-closing supersedes. If 0 cross-carrier Z′_bot in 3 ticks, Z′_bot is a litellm-specific automation signature.

## Citations summary

PRs cited by number (Z′ family across W17–W18): opencode #25936 (Z′_human, Add.368); codex #21267 (Z′_human, Add.368); litellm #27251, #27252, #27253, #27255, #27258 (Z′_bot cluster, Add.369); litellm #27250 (control: bot housekeeping non-Z′); litellm #27244, #27221 (control: carried-closed Z-class review-rejected, distinct from Z′). 10 unique PRs across 3 carriers; the 5-event Z′_bot cluster on litellm is the new central exhibit.

## Coupling note to W17-synth-713

W17-synth-713 (M-class M_single/M_multi split) and this synth-714 (Z′_human/Z′_bot split) BOTH document **single-tick sub-class promotions** at Add.369. The pattern: Add.368 establishes a hypothesis at n=1 or n=2; Add.369 either confirms via expanded sample (M-class → 3 sightings) or reframes via dominant-mode reveal (Z′ → bot-driven). W18 day-1 is producing **rapid sub-class fission**, suggesting the underlying classification space is finer-grained than W17 synthesis surface had captured.
