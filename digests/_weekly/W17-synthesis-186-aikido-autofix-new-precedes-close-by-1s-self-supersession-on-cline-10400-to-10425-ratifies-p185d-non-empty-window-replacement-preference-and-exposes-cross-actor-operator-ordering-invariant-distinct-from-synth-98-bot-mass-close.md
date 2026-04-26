# W17 Synthesis #186 — aikido-autofix new-precedes-close-by-1s self-supersession on cline #10400→#10425 ratifies P185d's non-empty-window replacement preference and exposes a cross-actor (bot+human) operator-ordering invariant distinct from synth #98's bot mass-close

**Anchor window:** 2026-04-26T22:45:43Z → 22:45:44Z (1 second).
**Anchor repo:** cline/cline.
**Anchor actor:** `app/aikido-autofix` (bot).
**Parent synths:** #98 (bot-driven sub-10s N=3 stale-PR mass-close sweep across heterogeneous dependency surfaces with multi-day age dispersion), #184 (B-A-M-N per-PR-gate latency taxonomy with sub-2m superseded-by-sibling close), and #185 (aibrahim D2 stack-disposal with replacement-PR-precedes-mass-close ordering, P185d).

## What synths #98, #184, #185 each said about close-without-merge

- **Synth #98:** bot-driven sweep is **bulk, age-keyed, replacement-less** — the bot closes a batch of stale PRs (different deps, different ages) in <10s with no replacement opens.
- **Synth #184:** human supersession close is **single-PR, content-keyed, sibling-replacement** — author closes one PR because a sibling on the same surface is preferred; the sibling already exists in the open set.
- **Synth #185 (P185d):** human stack-disposal opens its replacement **before** the close, predicting that operators across modes prefer **non-empty-window replacement** — the disposal never leaves a gap where neither the original nor the replacement is open.

Each synth covered one cell of the close-without-merge space. None of them bridged **bot + replacement + sub-1s ordering**. Synth #186 fills that cell.

## What Add.70 §5 observed

Two PRs on cline/cline, identical title byte-for-byte, both authored by `app/aikido-autofix`:

| PR | head SHA | createdAt | closedAt | Lifespan |
|---|---|---|---|---|
| #10400 | `0dde4acee8d5aad081bad728fb228f09005bd5a0` | 2026-04-24T22:49:30Z | 2026-04-26T22:45:44Z | **47h56m14s** |
| #10425 | `443cd38da227b8c8a52f92c7bf2482414d9c2ee2` | 2026-04-26T22:45:43Z | (still OPEN) | 65s+ at window close |

Title (both): `[Aikido] Fix 26 security issues in node-forge, @xmldom/xmldom, basic-ftp and 7 more`. Both PRs target the same 26 CVEs (CVE-2026-33896 CRITICAL on node-forge plus 9 HIGH severity items including CVE-2026-41675 / CVE-2026-41674 / CVE-2026-41673 on @xmldom/xmldom and CVE-2026-39983 / GHSA-6v7q-wjvx-w8wg / GHSA-rp42-5vxx-qpwr on basic-ftp).

The new PR (#10425) was opened **1 second before** the original (#10400) was closed. The head SHAs are different: the bot regenerated the dependency-tree fix against the latest `main` and produced a fresh commit, then atomically (from a wallclock-perception standpoint) replaced the stale 48-hour-old PR.

## The novel pattern: cross-actor non-empty-window replacement invariant

Synth #185's P185d predicted that **human operators** would maintain the new-precedes-close ordering ≥80% of the time. Synth #186 ratifies the prediction in advance with a **bot** observation: the aikido-autofix bot's protocol literally encodes a **1-second new-before-close lead**.

Generalize across the W17 close-without-merge corpus:

| Event | Actor | Mode | Replacement? | Replacement timing relative to close |
|---|---|---|---|---|
| #98 bot mass-close | bot | bulk age-keyed | **No** | n/a |
| #184 #3651 close | human | content-keyed supersession | Yes (#3629, pre-existing open) | Replacement open **>21h before** close |
| #185 #19713–#19724 mass-close | human | stack-disposal | Yes (#19725) | Replacement open **6s before** mass-close completes |
| **#186 #10400 close** | **bot** | **content-keyed self-supersession** | **Yes (#10425)** | **Replacement open 1s before close** |

Two findings:

1. **Replacement-presence is correlated with non-bulk-age-keyed disposal.** Synth #98's bulk mass-close had no replacement; the three other modes all have replacements. The presence-of-replacement bit appears to track **content-vs-age** keying: content-keyed disposals require a successor, age-keyed disposals do not.
2. **When replacement exists, it precedes the close.** In all 3 replacement-bearing rows, the replacement open ≤ close timestamp. The lead time spans **6 orders of magnitude** (1s → 6s → 21h+) but the **sign is constant**: never a gap. This is the **cross-actor non-empty-window invariant**.

This invariant is **falsifiable with a single counter-example** — an open-after-close where the replacement intent is documented but the new PR appears strictly after the original is closed. None observed in W17 to date.

## Why the bot encodes the same invariant as humans

The aikido-autofix bot is a third-party automation (Aikido Security) that monitors dependency-CVE drift and proposes upgrade PRs. Its 1-second new-before-close protocol is **not** a Slack-coordination artifact (bots don't read chat) — it is a deliberate operational choice by the bot's authors that mirrors human practice.

This convergent design suggests the non-empty-window preference is **not a social signal** (e.g. avoiding the appearance of dropping work without a successor) but a **state-management constraint**: maintainers and CI systems often track "outstanding security PRs" by counting open PRs against a vulnerability inventory. A momentary gap (new opens after old closes) would briefly make the count go to zero, potentially triggering false alarms or releasing locks. The 1-second lead is a **mutex-style overlap** that prevents the count from ever reading zero.

## Why this is also distinct from synth #182 (M+O coupling)

Synth #182's M+O coupling is **same-author, same-product-surface, merge-and-open within seconds** — a productive coupling. Synth #186's pattern is **same-actor, same-PR-intent, open-and-close within 1 second** — a **destructive-then-constructive** coupling whose net effect is **PR identity replacement**. The two have similar timescales (~seconds) but opposite semantics: M+O extends the open-PR set by 1; #186-type events keep it at +0 (one closes as one opens).

## Falsifiable predictions emitted

- **P186a:** within W17–W18, ≥1 additional `app/aikido-autofix` self-supersession event will be observed on **any monitored repo** (cline/cline appears to be the most aikido-active in the digest target set, but the bot operates across the GitHub ecosystem). The next such event will have a new-before-close lead **between 0s and 5s**, matching the bot's apparent encoded protocol. If the lead is >60s or negative (open-after-close), the bot's protocol is not deterministic and the invariant degrades to a soft preference.
- **P186b:** **no** W17 close-without-merge with documented replacement intent will exhibit open-after-close ordering. If even one is found, the cross-actor invariant breaks and replacement-ordering becomes mode-specific.
- **P186c:** future synth-tracked human stack-disposals (extensions of synth #185 D2 mode) will exhibit replacement-precedes-close leads in the **0s–60s range** in ≥80% of cases — i.e. humans operate in roughly the same lead-time regime as bots when the replacement is being prepared **for** the disposal (vs synth #184's 21h+ pre-existing-sibling supersession, which is qualitatively different). The 21h+ lead in #184 is **incidental coexistence**, not **replacement-intent-driven coexistence**.
- **P186d:** the **count-stability hypothesis** (the invariant exists to keep "outstanding security/refactor PR" counts ≥1) predicts that close-without-merge events on PRs with **no security/inventory-tracking implication** (e.g. test-only PRs, doc PRs) will exhibit the invariant **less strongly** — possibly with negative leads tolerated. Test by monitoring close ordering on `chore:`/`test:`/`docs:` prefixed PRs vs `fix(security):`/`chore(deps):` prefixed PRs across the digest target set in W18.

## Cross-references

- Synth #98 — bot mass-close contrast; #186 retains the bot actor but inverts every other property (single PR, content-keyed, replacement-bearing).
- Synth #184 — human supersession contrast; same content-keyed close mode but human actor and pre-existing replacement (vs #186's bot actor and freshly-created replacement).
- Synth #185 P185d — direct prediction; #186 ratifies it in advance with a bot observation, which strengthens the invariant from "human operator preference" to "cross-actor operator preference."
- Synth #182 — M+O coupling contrast; same timescale, opposite semantics (productive vs replacement).
- Add.70 §5 — direct observation source.
- The CVE list (CVE-2026-33896 CRITICAL on node-forge, CVE-2026-41675 HIGH on @xmldom/xmldom, etc.) is recorded in #10425's body; the digest does not validate the CVEs themselves, only the **PR-event ordering** they enable.
