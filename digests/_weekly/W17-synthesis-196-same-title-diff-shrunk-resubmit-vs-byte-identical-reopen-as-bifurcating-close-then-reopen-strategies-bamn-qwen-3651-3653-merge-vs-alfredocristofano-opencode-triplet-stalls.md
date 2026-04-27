# W17 synthesis #196 — same-title diff-shrunk resubmit-after-close as a distinct close-and-reopen strategy: B-A-M-N qwen-code #3651 (CLOSED, +542/−5 on 2 files) → #3653 (MERGED in 1h22m26s, mergeCommit `ccb9857a5c51cf8ac39101dbe909c2a3648166dd`, +197/−32 on 2 files) with byte-identical title and 63.7% additions-axis shrinkage, contrasted against alfredocristofano sst/opencode byte-identical-diff close-and-reopen triplet (#24522/#24523/#24524 → #24543/#24544/#24541) — bifurcating the W17 close-then-reopen taxonomy

**Lens novelty vs synth #180–#194 + #195.** No prior W17 synth covers the close-then-reopen pattern at all. The W17 corpus includes:
- **stale-bot mass-close** (synth #98)
- **stack-abandonment-then-flat-replacement** (synth #195, today)
- **maintainer-attention-as-per-PR-content-gated** (synth #191)
- **chain-onto vs detach-from** (synth #192's terminology)

But none of these covers the case where a **single same-author non-bot PR closes and the same author then reopens an equivalent PR with the same title**. This synth introduces the close-then-reopen pattern and immediately bifurcates it into two distinct strategies based on diff-preservation behavior, citing **two simultaneous instances** (qwen-code shrink-rewrite, opencode reopen-identical) observed inside Add.75's lookback window.

## The two configurations

### Configuration A — diff-shrunk resubmit (B-A-M-N, qwen-code)

Same author (B-A-M-N), byte-identical title, substantial diff shrinkage:

| PR | Title | createdAt | terminalAt | State | Diff | Files |
|---|---|---|---|---|---|---|
| #3651 | `refactor(config): dedupe QWEN_CODE_API_TIMEOUT_MS env override logic` | 2026-04-26T21:36:20Z | (closedAt, no merge) | CLOSED | +542/−5 (547 churn) | 2 |
| #3653 | `refactor(config): dedupe QWEN_CODE_API_TIMEOUT_MS env override logic` | 2026-04-26T23:21:53Z | mergedAt 2026-04-27T00:44:19Z, mergeCommit `ccb9857a5c51cf8ac39101dbe909c2a3648166dd` | MERGED | +197/−32 (229 churn) | 2 |

**Title:** byte-identical across the close-and-reopen.
**File count:** constant (2).
**Additions axis shrinkage:** 542 → 197 = **63.7% reduction**.
**Deletions axis growth:** 5 → 32 = **6.4× growth** (deletions go up while additions go down — the rewrite is replacing rather than purely adding).
**Total churn shrinkage:** 547 → 229 = **58.1% reduction**.
**End-to-end lifespan (first-open to second-merge):** 21:36:20Z → 00:44:19Z = **3h7m59s**.
**Inter-PR open-gap:** #3653 opened 23:21:53Z, so re-opening occurs **1h45m33s after the original opens** (closedAt of #3651 not surfaced in the gh-list view, but bounded by #3653 open).
**Trailing same-author PR:** **#3654** `refactor: unify tool execution logic across Interactive, Non-Interactive, and ACP modes` opens 2026-04-27T00:09:56Z, +1/−0 on 1 file, OPEN — created **34m23s before** #3653's merge, suggesting the author is already pipelining the next refactor while the resubmit clears.

### Configuration B — diff-identical close-and-reopen triplet (alfredocristofano, sst/opencode)

Same author, byte-identical titles AND byte-identical diffs across three close-and-reopen pairs:

| Closed PR | Reopened PR | Title (identical across pair) | Diff (identical across pair) |
|---|---|---|---|
| #24522 (createdAt 2026-04-26T18:50:24Z, CLOSED) | #24543 (createdAt 2026-04-26T22:56:19Z, OPEN) | `fix: guard workspace mutation against stale session effect` | +22/−8 on 3 files |
| #24523 (createdAt 2026-04-26T18:51:34Z, CLOSED) | #24544 (createdAt 2026-04-26T22:56:27Z, OPEN) | `fix(session): compare message positions instead of IDs in SessionPrompt.run` | +19/−6 on 1 file |
| #24524 (createdAt 2026-04-26T18:53:12Z, CLOSED) | #24541 (createdAt 2026-04-26T22:53:31Z, OPEN) | `fix(tui): handle background sync rejection in sync.tsx` | +13/−5 on 1 file |

**Open-gap of close-and-reopen:** ~4h2m–4h5m on each pair (consistent across triplet — single resubmit session).
**Diff:** byte-identical across all three pairs (+22/−8, +19/−6, +13/−5).
**Resubmit ordering scrambling:** original open order #24522 → #24523 → #24524 (3rd-opened was #24524 at 18:53:12Z); resubmit open order #24541 → #24543 → #24544 (i.e., the original #24524 reopens first as #24541, then the original #24522 reopens as #24543, then the original #24523 reopens as #24544 — original [1,2,3] becomes resubmit [3,1,2]). The 7-second open span on the resubmit triplet (#24541 22:53:31Z → #24544 22:56:27Z = 2m56s span, with #24541 alone 4m48s before the doublet) preserves the original triplet shape but inverts which PR is "first".
**Merge state at Add.75 close (02:34:00Z):** all three resubmits remain OPEN. Lifespans **3h40m29s / 3h37m41s / 3h37m33s** respectively. **The diff-identical reopen has produced 0 merges in ~3h40m**; the diff-shrunk reopen (Config A) merged in 1h22m26s post-reopen.

## Bifurcation: shrink-rewrite vs reopen-identical

Same close-and-reopen surface, two strategies, observed in the same sub-3h window:

| Axis | qwen-code (Config A) | opencode (Config B) |
|---|---|---|
| Author | B-A-M-N | alfredocristofano |
| Cardinality | 1 PR (#3651→#3653) | 3 PRs (#24522/#24523/#24524 → #24543/#24544/#24541) |
| Title preservation | byte-identical | byte-identical (per pair) |
| Diff preservation | **shrunk 58.1% total churn** | **byte-identical** |
| Reopen lifespan to merge | **1h22m26s, MERGED** | OPEN at 3h37m+, **0 merges** |
| Original→resubmit ordering | trivially 1→1 | scrambled [1,2,3]→[3,1,2] |
| Open-gap (close→reopen) | bounded ≤ 1h45m33s | ~4h2m–4h5m |
| Trailing same-author PR | yes (#3654, OPEN) | no immediate trailing |

**The diff-strategy axis appears to predict merge eligibility** at this single-window observation: the shrunk resubmit merged, the identical resubmits did not (yet). The plausible mechanism is that close-then-reopen-without-substantive-change reads to maintainers as "I disagree with the close decision" (negative signal) while close-then-reopen-with-substantive-shrink reads as "I addressed the feedback" (positive signal). With n=2 (one of each strategy in W17 thus far), this is a hypothesis, not an established pattern.

## Discrimination from prior W17 synths

**Discrimination from synth #195 (stack-abandonment-then-flat-replacement).** Synth #195 also involves close-and-reopen behavior, but the closed objects are tiers of a chained stack and the replacement is a **categorically different shape** (flat). Synth #196's two instances both have **same-shape resubmits** (1 PR → 1 PR, or 3 PRs → 3 PRs). Synth #195 collapses cardinality 5→1; synth #196 preserves cardinality.

**Discrimination from synth #98 (bot mass-close).** Synth #98 is single-direction mass-close by a bot with no reopen. Synth #196 is bidirectional close-then-reopen by the same human author.

**Discrimination from synth #191 (per-PR-content-gated maintainer attention).** Synth #191 explains why some same-author PRs merge and others stall in terms of **content type**. Synth #196 explains why some close-and-reopen attempts merge and others stall in terms of **diff-preservation strategy** — an orthogonal axis that operates **even when content type is held constant** (all of alfredocristofano's three resubmits are `fix:` class, same content type as B-A-M-N's `refactor:` class within its own pair).

## Predictions tied to synth #196

- **P196a (probability ~0.50):** at least one of alfredocristofano #24541/#24543/#24544 will close again (without merging) within +12h of Add.75 close 02:34:00Z, while at least one of the other two will merge. The split outcome is the W17-best fit if maintainers are gating on individual diff content within the byte-identical-resubmit triplet. Falsified if all three merge intact, or all three close again, within +12h.
- **P196b (probability ~0.30):** B-A-M-N's trailing PR #3654 will merge within +12h of Add.75 close. The "shrink-rewrite resubmit succeeded so author is on a roll" hypothesis. Falsified if #3654 closes or remains open at +12h.
- **P196c (probability ~0.55):** at least one further close-then-reopen event will be observed in W17 across the 7 tracked repos. With two distinct authors already exercising the pattern in adjacent windows on different repos, the base rate is high enough to expect a third instance before W17 closes.

## What this synth changes for downstream tracking

- Track **closedAt** explicitly on close-and-reopen pairs to compute the close→reopen gap precisely (not just a bound).
- When the same author opens a PR with the same title as a recently-closed PR, classify the resubmit as **shrink-rewrite** vs **reopen-identical** by comparing total churn — this becomes a per-event tag in addenda from Add.76 onward.
- The diff-preservation strategy axis is independent of content type, multi-PR cardinality, and stack topology — it composes orthogonally with the synth #195 multi-PR-topology taxonomy and synth #191 content-gating axis.
- Resubmit-ordering-scrambling on diff-identical multi-PR triplets (Config B) is a candidate signal that the author is **re-prioritizing** at resubmit time even while preserving substance — a fine-grained intent signal worth recording when n>1 PRs are reopened together.
