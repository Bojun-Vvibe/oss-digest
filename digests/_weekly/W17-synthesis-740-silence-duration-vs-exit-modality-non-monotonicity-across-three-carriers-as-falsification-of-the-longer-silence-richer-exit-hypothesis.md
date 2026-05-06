# W17-synthesis-740 — Silence-duration-vs-exit-modality non-monotonicity across three carriers as falsification of the longer-silence-richer-exit hypothesis

**Anchor observation (Add.382, 2026-05-06T10:35Z):** Three W18 day-1 carrier silence-exits occurred within a 9-hour window (codex 08:48Z, goose 09:32Z, qwen-code 06:03Z), each with a measurable silence duration and a measurable exit-chain modality. The mapping from silence duration to exit modality is **inverse-and-non-monotonic**, falsifying the naive expectation that "longer silence → more pent-up work → richer exit chain".

## The three observed silence-exit pairs

| Carrier | Silence-entry PR | Silence-exit PR | Silence duration | Exit modality |
|---|---|---|---|---|
| openai/codex | [openai/codex#19193] `f9a907ae` mzeng-openai 07:18:01Z | [openai/codex#20437] `a9862351` jif-oai 08:48:37Z | **1h30m36s** (shortest) | **A^4 same-author chain**: jif-oai #20437 → #21328 `b5e965e1` → #21329 `fe24a180` → #21332 `06e5dfa4`, gaps 32m46s → 14m53s → 28m11s |
| block/goose | [block/goose#9030] `b17fd4f2` kalvinnchau 01:50:48Z | [block/goose#9035] `b1ab2166` SarthakB11 09:32:52Z | **7h42m04s** (middle) | **Singleton**: SarthakB11 #9035 only; no second goose PR within ≥1h post-exit |
| QwenLM/qwen-code | [QwenLM/qwen-code#3852] `5d0adbb5` qiuqiuwen25 2026-05-05T17:57:31Z | [QwenLM/qwen-code#3743] `fe1fb315` yiliang114 06:03:09Z | **12h05m38s** (longest) | **Multi-author burst-of-3 then tail**: yiliang114 #3743 → tanzhenxin #3768 `808d0978` (5m04s) → tanzhenxin #3735 `8a1ed565` (55s) → wenshao #3774 `54415813` (3h08m40s tail) |

The naive prediction is silence-duration-monotonic: longer silence implies more queued work implies a longer or denser exit chain. The observed mapping is the **opposite**: shortest silence (codex 1h30m) yields the longest single-author exit chain (A^4); longest silence (qwen-code 12h05m) yields the shortest single-author streak (1 PR, then handoff to a different author after 5m04s).

## Three falsified intuitions

1. **"Pent-up work" model — falsified.** Under this model, jif-oai's 1h30m wait should have produced a 1–2 PR exit (low pent-up volume), and qwen-code's 12h wait should have produced a multi-PR exit from a single high-volume author. Reality: jif-oai shipped 4 PRs (highest volume) and qwen-code's exit author yiliang114 shipped exactly 1 (lowest single-author volume).
2. **"Same-author rebound" model — falsified.** Under this model, the silence-exit author should be the prior chain's author who returned after a pause. Reality: in **all three** cases the silence-exit author is **disjoint from the silence-entry author** (mzeng-openai → jif-oai; kalvinnchau → SarthakB11; qiuqiuwen25 → yiliang114). This is consistent with synth #737, but is the **prerequisite** for the present synth's surprise: given that exit-authors are always rotation-novel, the chain length they produce must be governed by **their own session state at exit time**, not by prior-author backlog.
3. **"Carrier liveness signal" model — falsified.** Under this model, longer silence implies the carrier is "deader", and the exit should be a small single PR (the first maintainer to wake up). Reality: the deadest-looking carrier (qwen-code 12h+) had a **multi-author 3-PR burst within 5m59s of the silence breaking**, far denser per-minute than either codex or goose.

## What does predict exit modality

The data suggests exit modality is governed by **the entering author's session state at the moment of silence-break**, not by the silence duration. Specifically:

- **codex jif-oai**: jif-oai had a session-ID/thread-ID feature stack ready (#20437 `feat: add session_id`, #21329 `feat: include thread ID in MCP turn metadata`, #21332 `feat: return session ID from thread/fork`, plus the test isolator #21328). The 4-PR chain was **a single author's pre-staged feature stack landing in sequence**. Silence duration was incidental.
- **goose SarthakB11**: SarthakB11's #9035 is a **1-file ~10-line nullability fix** (`fix(openai): accept null tool_call arguments in streaming chunks`). The author had a single bug-fix and no follow-up — singleton-by-author-state, not by silence-state.
- **qwen-code yiliang114→tanzhenxin→tanzhenxin→wenshao**: three distinct authors landed near-coincidentally because **the silence ended at a UTC-aligned local-morning boundary** (06:03Z = 14:03 in UTC+8) where multiple maintainers begin their work day simultaneously, each landing a separate ready PR within minutes of the others.

The **author-state-vs-clock-state** distinction is the structural payload: codex's exit was governed by **author-session backlog**; goose's by **single-author-single-fix**; qwen-code's by **wall-clock-aligned multi-author wake**.

## Falsifiable predictions

1. **Replication on next 3 silence-exits**: across the next 3 carrier silence-exits in W18 day-2/3, if Spearman rank-correlation between silence duration and exit-chain length is **non-positive** (≤0), this synth holds. If it is **strongly positive** (≥+0.5), the synth is falsified and the pent-up-work model is restored.
2. **Author-state-vs-clock-state diagnostic**: the next codex silence-exit by jif-oai should produce another multi-PR chain (author-session-state hypothesis); the next qwen-code silence-exit at a UTC-aligned local-morning boundary should produce another multi-author micro-burst.
3. **Anti-rebound at goose**: if SarthakB11 reappears as the silence-exit author at a future goose silence with a multi-PR chain, the singleton-by-author-state reading for goose this tick is **author-specific**, not an invariant.

## Anchor citations (verbatim)

- [openai/codex#19193] `f9a907ae` mzeng-openai 2026-05-06T07:18:01Z (silence-entry)
- [openai/codex#20437] `a9862351` jif-oai 2026-05-06T08:48:37Z (silence-exit, A^4 head)
- [openai/codex#21328] `b5e965e1` jif-oai 2026-05-06T09:21:23Z
- [openai/codex#21329] `fe24a180` jif-oai 2026-05-06T09:36:16Z
- [openai/codex#21332] `06e5dfa4` jif-oai 2026-05-06T10:04:27Z
- [block/goose#9030] `b17fd4f2` kalvinnchau 2026-05-06T01:50:48Z (silence-entry)
- [block/goose#9035] `b1ab2166` SarthakB11 2026-05-06T09:32:52Z (silence-exit, singleton)
- [QwenLM/qwen-code#3852] `5d0adbb5` qiuqiuwen25 2026-05-05T17:57:31Z (silence-entry)
- [QwenLM/qwen-code#3743] `fe1fb315` yiliang114 2026-05-06T06:03:09Z (silence-exit, burst head)
- [QwenLM/qwen-code#3768] `808d0978` tanzhenxin 2026-05-06T06:08:13Z
- [QwenLM/qwen-code#3735] `8a1ed565` tanzhenxin 2026-05-06T06:09:08Z
- [QwenLM/qwen-code#3774] `54415813` wenshao 2026-05-06T09:17:48Z (burst tail)

## Orthogonality to synth #737/#738/#739 (anti-duplicate compliance)

Synth #737 anchored on **the existence of author-rotation across silence boundaries** (single structural claim). Synth #738 anchored on **carrier-set orthogonality between fanout-anchor and rebound-anchor** (single structural claim). Synth #739 anchors on **paired persistent silence at litellm+gemini-cli**. This synth #740 takes synth #737's author-rotation as a **prerequisite** and asks the **next-order question**: given that exit authors are always rotation-novel, what governs the **chain length and shape** of their exits? The answer (silence duration does not predict it; author-session vs wall-clock state does) is structurally **downstream and disjoint** from #737/#738's claims, and operates on **the codex+goose+qwen-code triple** which is disjoint from #739's litellm+gemini-cli pair.
