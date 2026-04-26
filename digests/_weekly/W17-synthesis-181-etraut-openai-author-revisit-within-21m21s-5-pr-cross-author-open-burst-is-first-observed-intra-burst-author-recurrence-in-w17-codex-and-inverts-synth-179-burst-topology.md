# W17 synthesis #181 — etraut-openai author-revisit within 21m21s 5-PR cross-author open burst is first observed intra-burst author-recurrence in W17 codex and inverts synth #179 burst topology

**Pattern.** Add.68 documents a 21m21s strict-new-open burst on `openai/codex` main:
1. **#19705** abhinav-oai @ 20:14:06Z (`dev/abhinav/plugin-hooks-discovery`)
2. **#19706** etraut-openai @ 20:19:52Z (`etraut/markdown-extra-line`)
3. **#19707** pash-openai @ 20:22:16Z (`pash/fix-remote-compact-deferred-dynamic-tools`)
4. **#19708** shijie-oai @ 20:34:58Z (`shijie/agent-identity-cloud-requirements`)
5. **#19709** etraut-openai @ 20:35:27Z (`etraut/fix-subagent-command-bubbling`)

5 strict-new-opens in 21m21s, 4 distinct authors. **etraut-openai appears at positions 2 and 5** — a 15m35s same-author re-entry within the same burst envelope.

**Why this falsifies / extends prior synths.**

- Synth #179 framed the 8m10s/3-author/3-surface cluster (#19705/#19706/#19707) as "strict new-open burst inverts synth #92's same-second/single-author topology into 8-minute-band/three-author." Synth #181 shows that framing was incomplete: the **burst envelope kept growing for another 13m11s** after synth #179's snapshot, picking up 2 more PRs and — critically — **re-entering an already-present author** (etraut-openai). The (N=3, distinct=3, span=8m10s) cluster generalizes to (N=5, distinct=4, span=21m21s) with **author-revisit ratio 5/4 = 1.25**.
- Synth #92 envelope: same-second / single-author / 4 PRs. Synth #179 envelope: 8m10s / 3-author / 3 PRs. Synth #181 envelope: 21m21s / 4-author / 5 PRs. The trajectory from synth #92 → #179 → #181 is **monotonic widening of (span, distinct-author-count)** with a **sudden tick of revisit-ratio above 1.0** at #181.
- **etraut-openai's per-author cadence** independently corroborates the revisit signal: #19706 → #19709 inter-open gap 15m35s vs etraut-openai's 7-PR / 23h author-mean gap **3h47m** = **14.6× compression**. The compression coincides exactly with the burst envelope, suggesting bursts can act as **author-attention attractors** (an author with several queued drafts publishes them faster when other authors are also publishing).

**Mechanism candidate.** A coding-agent burst envelope behaves more like a **rolling 20-minute window with sticky author membership** than a fixed-N cluster. Once an author publishes inside a window, the marginal cost of publishing a second PR in the same window is reduced (review queue context already loaded, CI agents already warm). This predicts that **future codex strict-new-open clusters with span ≥15m should exhibit revisit-ratio ≥1.2 with probability higher than baseline**.

**Test.** Next 3 codex bursts with span ≥15m: measure revisit-ratio. If ≥2/3 exceed 1.0, the attractor mechanism is confirmed and synth #92's "single-author" framing is fully subsumed by a continuous (span, revisit-ratio) parameterization rather than a discrete N-author taxonomy.

**Cited PRs:** #19705 (abhinav-oai, head `5aed78ae4b8d9e1babd521dd595a5681c1b76ed7`), #19706 (etraut-openai, head `a63f48f94325e024339ab29147587b89f8ad771b`), #19707 (pash-openai, head `437f3d131678efd452112e3d90692ecd382edac0`), #19708 (shijie-oai, head `4f7f8caafc889834999d86a5a1a94c1e51c184d3`), #19709 (etraut-openai, head `e5cedd71688e399a935a61162b78c0d00e039d02`). Cross-reference: synth #92, #179, Add.66 §2, Add.67 §2, Add.68 §2.
