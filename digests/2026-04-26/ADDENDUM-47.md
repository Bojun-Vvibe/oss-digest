# ADDENDUM-47 — 2026-04-26

**Window:** 06:38:40Z → 07:13:31Z (34m51s)

**Repos scanned:** openai/codex, BerriAI/litellm, sst/opencode, anomalyco/opencode, block/goose, QwenLM/qwen-code, cline/cline, All-Hands-AI/OpenHands, Aider-AI/aider

## Merges in window

**Total merges: 0.** Merge rate 0/34m51s = **0.00 merges/hr**.

This is a **double-window quiescence** for the two highest-throughput surfaces of the day:

- **openai/codex**: last merge `#19640` at **06:10:38Z** (Add.46). Drought-since-prior-merge at Add.47 close = **1h02m53s**. The codex 1h02m44s drought reported at Add.45 close was broken at the 13m04s mark of Add.46 by `#19640`; it has now **re-formed at almost identical magnitude** (Add.45 close drought 1h02m44s vs. Add.47 close drought 1h02m53s, delta **+9 seconds**). See synth #139.
- **BerriAI/litellm**: last merge `#26441` at **06:13:40Z** (Add.46). Drought-since-prior-merge at Add.47 close = **59m51s** — first sub-1h-band litellm gap since the n=5 staging-bot burst at 02:03–03:07Z. The Add.46 merge `#26441` (`harish-berri`, non-bot, 37h11m37s lifespan) **did not unstick the surface** — no follow-on litellm merge in the subsequent 59m51s, despite the staging promotion at 03:07Z having theoretically opened a fresh promotion cycle.
- **sst/opencode**: last merge `#24420` at **05:26:48Z**. Drought = **1h46m43s** — extends the same pattern from Add.45/46 of small-typo / openrouter-sdk-bump style merges drying up.
- **anomalyco/opencode**: last merge well before window. Continues post-`n=17 mass-close-sweep` quiescence.
- **block/goose, QwenLM/qwen-code, cline/cline, All-Hands-AI/OpenHands, Aider-AI/aider**: zero merges in window (consistent with prior windows for these slower-cadence surfaces).

## Closes-without-merge in window

**Total closes-without-merge: 0.** Discriminates against synth #138's stale-cleanup-bot continuation hypothesis — the 06:35:02–06:35:54Z `n=17` sweep was a one-shot, not the start of a periodic schedule.

## Opens in window

- **[QwenLM/qwen-code#3635]** — `JahanzaibTayyab`, base `main`, headRefOid `f6d4...` (verify on push). Title `feat(core): --insecure flag and QWEN_TLS_INSECURE env var (#3535)`. Created **07:04:19Z**, 9m12s before window close. Feature-add resurrecting issue `#3535`. Surface: TLS verification opt-out for self-signed-cert / corporate-MITM-proxy environments. **Notable**: this is the **only window event** beyond the bolinfest stack rebase. qwen-code goes from a `revert` merge (Add.46, `#3633` undoing `#3567`) to a fresh feature-add open (`#3635`) in 34m38s — same surface (`core`/CLI lookup) is being actively re-exercised after the rollback.

**Total opens: 1.** Open rate 1/34m51s = **~1.72 opens/hr** (up slightly from Add.46's 1.57/hr; below Add.45's 2.88/hr).

## Notable updates

- **[openai/codex bolinfest stack rebase#12]** — All five stack PRs **#19606 / #19395 / #19394 / #19393 / #19392** show **identical updatedAt = 07:11:34Z**. New head SHAs:
  - #19606: `48fecb27...` (was `400d4a82...` from rebase#11 in Add.46)
  - #19395: `360ccded...` (was `118e7c67...`)
  - #19394: `1711293f...` (was `49c5c54a...`)
  - #19393: `814ea114...` (was `bda0dbc5...`)
  - #19392: `8ad24848...` (was `5d12fcb4...`)
  - **Lockstep n=5 preserved** for the second consecutive rebase (rebase#11 also preserved n=5 lockstep in Add.46, falsifying synth #136's rebase-9 lockstep-at-risk hypothesis).
  - **Inter-rebase delta**: rebase#11 → rebase#12 = **34m15s**. Updated delta sequence (deltas 7→12): `1h08m / 1h08m / 25m54s / 1h01m26s / 38m51s / 34m15s`. The new delta **joins the short cluster** (~32m centroid: 25m54s, 38m51s, 34m15s mean = **32m20s**), strengthening the bimodal classification from synth #138 vs the long cluster (~1h05m centroid: 1h08m, 1h08m, 1h01m26s mean = **1h05m51s**). Cluster sizes: short n=3, long n=3 — perfectly balanced after 6 rebases. See synth #140.

## Window summary

- 0 merges / 1 open / 0 closes-without-merge / 1 stack-rebase event
- **Lowest-throughput window** of the day's tracked sequence (Add.42–47): merge counts went 8 → ? → ? → 1 → 3 → **0**.
- Double 1h+ drought re-formation on codex+litellm with delta **+9 seconds** between the two re-formations (Add.45 close vs Add.47 close) — coincidence-band tight enough to flag for synth #139.
- bolinfest cadence bimodality strengthens (3-3 split after rebase#12), but no new mechanistic discriminator yet.
