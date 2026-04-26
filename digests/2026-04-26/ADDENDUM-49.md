# ADDENDUM-49 — 2026-04-26

**Window:** 07:48:56Z → 08:45:37Z (56m41s)

**Repos scanned:** openai/codex, BerriAI/litellm, sst/opencode, anomalyco/opencode, block/goose, QwenLM/qwen-code, cline/cline, All-Hands-AI/OpenHands, Aider-AI/aider, anthropics/claude-code

## Merges in window

**Total merges: 0.** Merge rate 0/56m41s = **0.00 merges/hr**.

**Third consecutive zero-merge window** across all ten tracked surfaces (Add.47 close 07:13:31Z → Add.48 close 07:48:56Z → Add.49 close 08:45:37Z; cumulative dry span **1h32m06s**). First three-in-a-row zero-merge sequence in the Add.42–49 tracked range.

### Drought ledger correction (source-of-truth)

ADDENDUM-48's drought ledger cited litellm last-merge as `#26441` at **06:13:40Z** and codex last-merge as `#19640` at **06:10:38Z**. Re-querying `gh pr list -R BerriAI/litellm --state merged --limit 5` at Add.49 close returns:

| n | mergedAt | sha | title (truncated) |
|---|----------|-----|-------------------|
| 26545 | **2026-04-26T03:07:01Z** | `3d2b8fed3281` | [Infra] Promote Internal Staging to main |
| 26543 | 2026-04-26T02:44:38Z | `abb63e6007e7` | [Infra] Bump Versions |
| 26542 | 2026-04-26T02:12:57Z | `615565c38ebe` | [Infra] Rebuild UI |
| 26541 | 2026-04-26T02:03:44Z | `4ed3e712e0a8` | Litellm memory improvements v2 |
| 26536 | 2026-04-26T01:26:35Z | `740bb44796a5` | fix(memory): jsonify metadata before Prisma writes |

**The litellm last-merge of record is `#26545` at 03:07:01Z, not `#26441` at 06:13:40Z.** Add.48's `#26441` figure was stale by 5 merges (#26536, #26541, #26542, #26543, #26545 all merged in the **02:03:44Z–03:07:01Z** window — a five-merge `[Infra]` promotion train that happened *before* the Add.42 window opened, and which Add.48's drought computation missed). Codex `#19640` at 06:10:38Z is verified.

**Corrected droughts at Add.49 close (08:45:37Z):**

- **openai/codex**: last merge `#19640` at 06:10:38Z. Drought = **2h34m59s** (Add.48 close: 1h38m18s; +56m41s = full window length, consistent with zero-merge).
- **BerriAI/litellm**: last merge `#26545` at 03:07:01Z. Drought = **5h38m36s** (Add.48 close *corrected*: 4h41m55s; +56m41s = full window length).
- **sst/opencode**: last merge `#24435` at 05:05:16Z. Drought = **3h40m21s** (Add.48 cited `#24420` at 05:26:48Z; this was also stale — `#24435` is verified as the latest on `gh pr list -R sst/opencode --state merged`).

### Drought-lock thesis status (synth #141)

Synth #141 declared codex+litellm "drought-lock hardens to two-window magnitude tracking with sub-3-minute cross-repo gap delta." Under corrected ledger:

- Add.47 close (07:13:31Z): codex 1h02m53s, litellm **4h05m51s** (corrected) — delta **3h02m58s**, not the ~+9s claimed.
- Add.48 close (07:48:56Z): codex 1h38m18s, litellm **4h41m55s** (corrected) — delta **3h03m37s**, not the +3m02s claimed.
- Add.49 close (08:45:37Z): codex 2h34m59s, litellm 5h38m36s — delta **3h03m37s**.

**Synth #141 is falsified.** The droughts are *not* tracking at the same magnitude band. They are tracking with a **stable ~3h03m offset** (delta variation: 3h02m58s → 3h03m37s → 3h03m37s, total spread **39 seconds across 3 windows / 1h32m06s**). The corrected pattern is that **both droughts grow at exactly the inter-addendum window length** (zero-merge windows give +1·window-length to both droughts identically), so the *delta* is conserved at whatever it was when the drought sequence began — which traces back to litellm `#26545` 03:07:01Z and codex `#19640` 06:10:38Z, an offset of **3h03m37s baked in at the moment both repos entered drought**. See synth #143.

## Closes-without-merge in window

- **[anomalyco/opencode#24364]** — `pascalandr`, base `dev`, +52/-0 across 2 files. Title `fix(provider): reject unsupported image mime types`. Created 2026-04-25T18:34:09Z, closed-without-merge **07:50:03Z**. Lifespan = **13h15m54s**. Self-close (author = closer). Surface: provider input-validation / mime-type rejection. **Second pascalandr self-close in two consecutive windows** (Add.48 closed `#24384` `fix(provider): respect configured output limit` at 07:30:04Z, also a `pascalandr` self-close on `dev` against an `fix(provider):` title). Two self-closes by the same author on the same repo+base in 20m within back-to-back windows is a **provider-surface backlog prune signature** distinct from the synth #78 backlog-prune-with-fresh-injection: there is no fresh open from `pascalandr` in the same window. See synth #144.

- **[anthropics/claude-code#31945]** — `highgroundbkk`, base `main`, +315/-0 across 1 file. Title `docs: Add CLAUDE.md repository guide for AI assistants`. Created 2026-03-07T22:02:24Z, closed-without-merge **08:33:09Z**. Lifespan = **49d10h31m** (50-day-aged docs PR). State transition `OPEN → CLOSED` with no merge. Self-close (author=closer; `highgroundbkk` is the PR author). First close on `anthropics/claude-code` observed in any Add.42–49 window — the repo had been quiescent under tracking.

**Total closes-without-merge: 2.** Both are self-closes; both target docs-or-validation surfaces; ages diverge by 4 orders of magnitude (13h vs 50d) — no cohort signature, two independent author-driven prunes.

## Opens in window

- **[QwenLM/qwen-code#3637]** — `wenshao` (Shaojin Wen), base `main`, head `60d2b5dc...`. Title `fix(core): preserve reasoning_content when merging consecutive assistant messages (#3619)`. Created **07:57:03Z**, 8m07s after window open. **+200/-2 across 2 files**. Resurrects issue `#3619`. Surface: reasoning-content preservation across consecutive-assistant-message merges in `core/`. Same `core/` surface family as Add.48's `#3636` (`feat(core): cap concurrent in-flight requests per provider (#3409)`, +783/-13, 9 files, opened 07:40:02Z) and Add.47's `#3635` (`feat(core): --insecure flag and QWEN_TLS_INSECURE env var (#3535)`, opened 07:04:19Z). **Three consecutive `qwen-code core/` opens in three consecutive windows** by three distinct authors (`JahanzaibTayyab`, `JahanzaibTayyab`, `wenshao`) — author-distinct surface convergence on `qwen-code/core/`, all referencing prior issue numbers (#3535, #3409, #3619), all `feat(core):` or `fix(core):` prefix.

**Total opens: 1.**

## Notable updates

### bolinfest stack rebase #14

All five stack PRs **#19606 / #19395 / #19394 / #19393 / #19392** show new head SHAs at **updatedAt 08:27:54Z** — *all five same-second, atomic*. New head SHAs:

- #19606: `cbbe3b36...` (was `2b2be6ea...` from rebase#13 in Add.48)
- #19395: `48ba8c11...` (was `b0eff2a7...`)
- #19394: `353942eb...` (was `6e1a967d...`)
- #19393: `f2a6946a...` (was `6bc6270c...`)
- #19392: `3b051212...` (was `b9ea14c7...`)

**Lockstep n=5 preserved** for the **fourth consecutive rebase** (rebase#11, #12, #13, #14 all preserved n=5).

**Inter-rebase delta**: rebase#13 → rebase#14 = **39m38s** (07:48:16Z → 08:27:54Z, where rebase#13 timestamp uses the lead-of-split value from Add.48). Updated delta sequence (deltas 7→14 across rebases #7→#14): `1h08m / 1h08m / 25m54s / 1h01m26s / 38m51s / 34m15s / 36m42s / 39m38s`. Short cluster (≤40m) now n=**5** (25m54s, 38m51s, 34m15s, 36m42s, 39m38s; mean **35m04s**, σ **4m51s**). Long cluster (≥1h) stable at n=3 (1h08m, 1h08m, 1h01m26s; mean **1h05m51s**). Short:long ratio is **5:3**, and the short cluster centroid tightens (synth #142 reported short-cluster mean 33m55s/σ 5m23s; new datum **expands mean by +1m09s while contracting σ by 32 seconds** — short cluster is consolidating, not dispersing).

**Atomicity restored.** Add.48's sub-2-second SHA-update split (3-2 boundary at 07:48:16Z/07:48:17Z) was a **one-shot anomaly**. Rebase#14 stamps all 5 PRs at the **same UTC second** (08:27:54Z). Synth #142's prediction #2 ("if the next rebase event again shows a multi-second updatedAt span ... the tool change / write-batching is structural") is **falsified**: the split did not persist. Synth #142's prediction #1 ("the next rebase will land in the long cluster ≥1h") is also **falsified**: 39m38s lands squarely in the short cluster. **Both #142 predictions fall on a single datum.** See synth #143.

### Long-tail PR refresh activity (no SHA changes — `updatedAt`-only bumps)

- **anomalyco/opencode #13854** (`mocksoul`, head `399dd8af`) — updatedAt **07:56:17Z**. Same head SHA as Add.40+ tracking.
- **anomalyco/opencode #18767** (`noahbentusi`, head `2e2c3773`) — updatedAt **07:56:17Z**. Same head SHA.
- **#13854 + #18767 same-second co-bump at 07:56:17Z** — this is the **third confirmed same-second co-fire** of this exact pair (prior occurrences: 10:40:13Z and 12:42:17Z on 2026-04-25, documented in earlier addenda and the W17 synth #84 lineage). Inter-occurrence gap from prior recurrence: requires cross-day reconciliation with end-of-day 2026-04-25 logs; first 2026-04-26 occurrence on record.
- **anomalyco/opencode #23557** (`simonklee`, head `087a2f80`) — updatedAt 08:18:34Z. +18055/-330 across 51 files (largest open PR by additions on `anomalyco/opencode`). No SHA change.
- **anomalyco/opencode #24289** (`menardorama`, head `a9079c5f`) — updatedAt 08:22:33Z. No SHA change.
- **anomalyco/opencode #24374** (`pascalandr`, head `51d412e7`) — updatedAt **08:39:24Z**. +8/-2, 2 files, title `fix(sdk): load cross-spawn through require`. Same `pascalandr` who self-closed `#24364` at 07:50:03Z — author has at least one open PR remaining on `dev` after the self-close pair. See synth #144.
- **openai/codex #19058** (`won-openai`, head `6cdbc83b`) — updatedAt 08:42:02Z. No SHA change. Title `Add /auto-review-denials retry approval flow`.
- **BerriAI/litellm #24759** (`kalp9197`, head `49df9991`) — updatedAt 08:44:47Z. Long-tail (created 2026-03-29, 28 days aged).
- **BerriAI/litellm #22702** (`tombii`, head `ba8459fd`) — updatedAt 07:57:09Z. Long-tail (created 2026-03-03, 54 days aged).
- **QwenLM/qwen-code #3635** (`JahanzaibTayyab`) — updatedAt 08:01:10Z. Same head as Add.48 (`b1eb211a`, but head shows `b1eb211a` here vs `b1bfb280` in Add.48 — verify on next pass; potential SHA churn).
- **QwenLM/qwen-code #3631** (`B-A-M-N`) — updatedAt 08:27:59Z. Same head `8511b620`.

## Window summary

- **0 merges / 1 open / 2 closes-without-merge / 1 stack-rebase event (atomic same-second restored)**
- **Third consecutive zero-merge window** (Add.47 → Add.48 → Add.49). Cumulative dry span 1h32m06s.
- **Drought ledger corrected**: Add.48's litellm and sst/opencode last-merge cites were stale; corrected at Add.49 close to litellm `#26545` 03:07:01Z and sst/opencode `#24435` 05:05:16Z.
- **Synth #141 (codex+litellm magnitude-tracking) falsified** by ledger correction. Replaced model: **stable ~3h03m37s offset** between codex and litellm droughts, conserved by virtue of both droughts growing only by zero-merge window lengths. See synth #143.
- **Synth #142 predictions #1 and #2 falsified** on rebase#14: delta 39m38s lands in short cluster (not long), and atomic same-second restored (split did not persist).
- **Author-distinct `qwen-code/core/` opens in three consecutive windows** (#3635, #3636, #3637 by `JahanzaibTayyab`, `JahanzaibTayyab`, `wenshao`) — emerging cross-author cohort signature on a single subsystem.
- **`pascalandr` provider-surface self-close pair** on anomalyco/opencode `dev` across Add.48+Add.49 (close-only, no fresh open from same author in window) — distinct from synth #78 prune-with-injection. See synth #144.
- **Same-second co-fire of #13854 + #18767** continues into 2026-04-26 (07:56:17Z) — this pair's mechanical-co-fire signature crosses a UTC-day boundary.
