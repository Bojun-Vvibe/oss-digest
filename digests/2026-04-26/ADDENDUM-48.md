# ADDENDUM-48 — 2026-04-26

**Window:** 07:13:31Z → 07:48:56Z (35m25s)

**Repos scanned:** openai/codex, BerriAI/litellm, sst/opencode, anomalyco/opencode, block/goose, QwenLM/qwen-code, cline/cline, All-Hands-AI/OpenHands, Aider-AI/aider

## Merges in window

**Total merges: 0.** Merge rate 0/35m25s = **0.00 merges/hr**.

This is the **second consecutive zero-merge window** across all nine tracked surfaces (Add.47 close 07:13:31Z → Add.48 close 07:48:56Z). The cross-repo drought-since-prior-merge clocks at Add.48 close:

- **openai/codex**: last merge `#19640` at **06:10:38Z**. Drought = **1h38m18s** (Add.47 close: 1h02m53s). codex re-formed drought continues to lengthen — now exceeds the prior re-formation peak of 1h02m53s by **35m25s**, exactly the Add.48 window length, i.e. **the drought grew by 100% of window time** with zero offsetting merge activity. See synth #141.
- **BerriAI/litellm**: last merge `#26441` at **06:13:40Z**. Drought = **1h35m16s** (Add.47 close: 59m51s). litellm crosses the 1h band for the first time post-`harish-berri` non-bot merge, and now sits within **3m02s of codex's drought** (deltas: codex 1h38m18s vs. litellm 1h35m16s). The two highest-throughput surfaces of the day are drought-locked at the same magnitude band for the **second window in a row** — Add.47 close also showed them within +9s of each other. See synth #141.
- **sst/opencode**: last merge `#24420` at **05:26:48Z**. Drought = **2h22m08s**. Crosses the 2h band.
- **anomalyco/opencode**: continues post-mass-close-sweep quiescence. No movement.
- **block/goose, cline/cline, All-Hands-AI/OpenHands, Aider-AI/aider**: zero merges in window.
- **QwenLM/qwen-code**: zero merges in window — but **two opens** (see below).

## Closes-without-merge in window

- **[sst/opencode#24384]** — `pascalandr`, base `dev`, +39/-1 across 2 files. Title `fix(provider): respect configured output limit`. Created **2026-04-25T20:16:56Z**, closed-without-merge **07:30:04Z**. Lifespan = **11h13m08s**. Surface: provider output-limit config respect — overlaps the same provider-config-application-ordering family as synth #76. PR closed without explanatory thread visible at list level; verify on push whether closure was author-driven or maintainer-driven (`pascalandr` is the author, suggesting self-close).

**Total closes-without-merge: 1.** First close-without-merge of the day on `sst/opencode` since the early-window batch.

## Opens in window

- **[openai/codex#19650]** — `efrazer-oai`, base `main`, head `bf9880e3...`. Title `feat: verify agent identity JWTs`. Created **07:43:15Z**, 5m41s before window close. **+862/-256 across 50 files** — the largest single-PR diff of the day's tracked sequence (Add.42–48). Surface: agent identity / JWT verification — net-new auth-surface introduction on codex. `efrazer-oai` author handle indicates OpenAI staff (oai suffix). This is a **debut author for the day's window** on codex.
- **[QwenLM/qwen-code#3636]** — `JahanzaibTayyab`, base `main`, head `b1bfb280...`. Title `feat(core): cap concurrent in-flight requests per provider (#3409)`. Created **07:40:02Z**, 8m54s before window close. **+783/-13 across 9 files**. Resurrects issue `#3409`. Surface: provider concurrency-cap — same `core/` directory as `#3635` (`--insecure` flag, opened Add.47 at 07:04:19Z).

**Total opens: 2.** Open rate 2/35m25s = **~3.39 opens/hr** (up from Add.47's 1.72/hr; matches Add.45's 2.88/hr band).

## Notable updates

- **[openai/codex bolinfest stack rebase#13]** — All five stack PRs **#19606 / #19395 / #19394 / #19393 / #19392** show new head SHAs at **updatedAt 07:48:16-17Z** (note: 1-second split between #19606/#19395/#19394 at 07:48:16Z and #19393/#19392 at 07:48:17Z — first sub-2s split observed in the rebase series, prior rebases were all same-second). New head SHAs:
  - #19606: `2b2be6ea...` (was `48fecb27...` from rebase#12 in Add.47)
  - #19395: `b0eff2a7...` (was `360ccded...`)
  - #19394: `6e1a967d...` (was `1711293f...`)
  - #19393: `6bc6270c...` (was `814ea114...`)
  - #19392: `b9ea14c7...` (was `8ad24848...`)
  - **Lockstep n=5 preserved** for the **third consecutive rebase** (rebase#11, #12, #13 all preserved n=5), continuing to falsify synth #136's "lockstep at risk at rebase 9+" hypothesis.
  - **Inter-rebase delta**: rebase#12 → rebase#13 = **36m42s**. Updated delta sequence (deltas 7→13 across rebases #7→#13): `1h08m / 1h08m / 25m54s / 1h01m26s / 38m51s / 34m15s / 36m42s`. Short cluster (≤40m) now n=4: 25m54s, 38m51s, 34m15s, 36m42s — mean **33m55s**. Long cluster (≥1h) still n=3: 1h08m, 1h08m, 1h01m26s — mean **1h05m51s**. The 3-3 balance from synth #140 collapses to **4-3 short-bias** on the very next rebase. See synth #142.
  - **Sub-2s SHA-update split** is mechanistic: the prior 12 rebases all stamped same-second updatedAt across the 5 PRs. Whatever bulk-rebase tool was previously atomic now exhibits a write-batch boundary between PR-3 and PR-4 (numerically), suggesting a tool change or load shift.

## Window summary

- 0 merges / 2 opens / 1 close-without-merge / 1 stack-rebase event (with sub-2s split anomaly)
- **Second consecutive zero-merge window** — first back-to-back zero-merge sequence in the Add.42–48 tracked range.
- Codex+litellm drought-lock at near-identical magnitudes for the **second window in a row** (Add.47: +9s delta; Add.48: +3m02s delta) — pattern hardens; see synth #141.
- bolinfest stack rebase short-cluster bias (4-3) breaks synth #140's 3-3 balanced bimodal model on the very next rebase, and a sub-2s SHA-update split appears for the first time in 13 rebases. See synth #142.
- Two large feature-add opens (codex #19650 +862/-256, qwen-code #3636 +783/-13) inject ~1.6kLOC of net-new surface in the final 9 minutes of an otherwise empty window — concentrated **opens-without-merges burst** as drought continues to deepen.
