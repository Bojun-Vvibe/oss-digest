# W17 Synthesis #297 — Cross-Author Sub-Minute Shared-Title-Prefix Content Doublet on Shared CLI-Input Subsystem as Debut-Author + Vendor-Internal Maintainer Pair Signature, Distinct from Synth #295's Cross-Subsystem Batch-Flush Triplet Shape

## Pattern statement

When a repo emerges from a bot-dominant follow-through tick (Add.132 gemini-cli #26142 release-bump only) and the very next tick produces n=2 human-author content merges in sub-60-second spacing on a shared semantic surface (CLI input handling) with shared title-prefix (`fix(cli):`), the doublet exhibits a distinctive **debut-author + vendor-internal maintainer pair** topology that is structurally distinct from synth #295's sub-minute multi-author triplet on cross-subsystem disjoint surfaces (the codex 36-second euroelessar/jif-oai/bolinfest triplet at Add.132). The new shape is a **cross-author convergent-surface paired-fix** signature, not a batch-flush. Anchored at google-gemini/gemini-cli Add.133 by cocosheng-g #26130 + Gitanaskhan26 #26092, with n=3 cross-tick recurrence support from cocosheng-g's contracting-cadence multi-tick recurrence regime.

## Anchoring evidence — Instance 1: gemini-cli sub-minute cross-author CLI-input doublet (Add.133)

**Doublet members:**

- google-gemini/gemini-cli#26130 / `12a77da45cad` / 21:30:08Z / cocosheng-g / `fix(cli): pass node arguments via NODE_OPTIONS during relaunch to support SEA` / subsystem: cli / node-relaunch / NODE_OPTIONS / SEA-binary-support
- google-gemini/gemini-cli#26092 / `4edd7c745c96` / 21:30:56Z / Gitanaskhan26 / `fix(cli): handle DECKPAM keypad Enter sequences in terminal` / subsystem: cli / terminal-input / DECKPAM-keypad / Enter-key

**Doublet shape.** Sub-minute span: **48 seconds** between merge-times. Both `fix(cli):` title-prefix. Both target the gemini-cli command-line input layer: #26130 governs how the CLI is *relaunched* (process-level input via NODE_OPTIONS), #26092 governs how the relaunched CLI interprets *terminal-level* input (DECKPAM keypad escape sequences). The two surfaces are NOT identical but are **adjacent on a shared semantic surface** (CLI input plumbing, distinct from rendering or output).

**Author class asymmetry.**

| Author | Class | Prior W17 record | Recurrence cadence at gemini-cli |
|---|---|---|---|
| cocosheng-g | vendor-internal recurring | Add.127 #26066-class surge author; Add.131 #26125 silence-break author; Add.133 #26130 | Add.127 → Add.131 = 4-tick gap; Add.131 → Add.133 = 2-tick gap (contracting) |
| Gitanaskhan26 | debut external | No prior Add.130–Add.132 record | n=1 debut |

The pair is asymmetric on the author-recurrence axis: one half is a contracting-cadence vendor-internal recurrer, the other is a single-tick debut. The maintainer-merger is implicit (no review evidence captured at the addendum layer), but the merge-time co-occurrence at 48s spacing implies **sequential maintainer attention** to two queued PRs on the shared CLI-input surface.

## Discrimination from synth #295 (sub-minute 3-author 3-subsystem batch-flush triplet)

| Property | Synth #295 (codex Add.132) | Synth #297 (gemini-cli Add.133) |
|---|---|---|
| Cardinality | n=3 | n=2 |
| Inter-merge span | 36s total (4s + 32s gaps) | 48s |
| Author overlap | zero | zero |
| Subsystem overlap | zero (app-server / MultiAgentV2 / TUI) | adjacent-shared (cli / cli) |
| Title-prefix overlap | zero (`app-server:` / declarative / `tui:`) | full (`fix(cli):` / `fix(cli):`) |
| Author classes | vendor-internal × 3 | vendor-internal + debut-external |
| Reading | merge-queue batch-flush | maintainer-paired convergent-surface fix |

**Critical discriminator**: synth #295 has zero subsystem overlap and zero title-prefix overlap, suggesting a CI / merge-queue burst that just happens to flush 3 unrelated PRs at once. Synth #297 has near-shared subsystem AND shared title-prefix, suggesting **deliberate maintainer pairing** on the convergent-surface axis. The two patterns use sub-minute multi-author shape as a SIGNAL but encode **opposite mechanisms**: batch-flush vs deliberate-pairing.

## Refining synth #132 / #145 / #225 / #227 (cross-repo convergent-fix coupling) on the intra-repo axis

Synths #132, #145, #225, #227, #229, #231, #233, #237 establish cross-repo convergent-fix coupling at multi-hour temporal proximity (sub-2h, sub-1h, sub-10min depending on axis). Synth #297 carves out the **intra-repo sub-minute extreme** of the same convergent-fix family: when convergent-fix coupling collapses to a single repo and to sub-minute spacing, the signature is the debut-author + vendor-internal maintainer pair shape. This is the **temporal floor** of the convergent-fix taxonomy (sub-minute) and the **author-class floor** (n=2 minimum for a "pair" to exist).

## Falsification of Add.132's gemini-cli bot-dominant follow-through regime call

Add.132 called gemini-cli's post-#26066 follow-through trajectory a **bot-dominant regime** (only #26142 release-bump, no human content). Add.133 produces n=2 human content merges in 48s. The bot-dominant call is falsified at lag-1 (the very next tick). The falsification supports the broader claim that **gemini-cli follow-through is bimodal at sub-tick granularity** — bot-tick / human-tick alternation rather than regime persistence. This is parallel to synth #157 / #161 / #166 / #170 / #177's chain of bolinfest-stack falsifications: in both cases, the corpus produces tight regime-falsifications at lag-1 against single-tick reads.

## Predictions

- **P-297a**: cocosheng-g's contracting-cadence regime (4-tick → 2-tick → ?) predicts a third recurrence within ≤2 ticks (by Add.135) at gemini-cli, on a `fix(cli):` or adjacent-prefix surface. Falsified if cocosheng-g silent through Add.135.
- **P-297b**: Gitanaskhan26's debut tracks against synth #110 (debut author concurrent follow-up doublet on shared infra surface): predicts Gitanaskhan26 opens or merges a follow-up at gemini-cli within ≤4 ticks (by Add.137), on the cli / terminal-input surface. Falsified if Gitanaskhan26 silent through Add.137.
- **P-297c**: The shared-title-prefix-shared-subsystem cross-author pair shape predicts NO third gemini-cli `fix(cli):` merge in Add.134 (deliberate-pair shape is closed at n=2, not extending to n=3). Falsified if a third `fix(cli):` from a third author lands in Add.134.

## Cited PR references
- google-gemini/gemini-cli#26130 cocosheng-g 12a77da45cad
- google-gemini/gemini-cli#26092 Gitanaskhan26 4edd7c745c96
- google-gemini/gemini-cli#26142 gemini-cli-robot 8cfebb9e31f8 (Add.132 bot-dominant call, falsified)
- openai/codex#20047 euroelessar 1de7a9bf6935 (synth #295 anchor, contrast case)
- openai/codex#20052 jif-oai 34d71d43eb87 (synth #295 anchor, contrast case)
- openai/codex#20008 bolinfest 3b74a4d3b1af (synth #295 anchor, contrast case)
- google-gemini/gemini-cli#26066 cocosheng-g (Add.127 surge anchor, prior recurrence)
- google-gemini/gemini-cli#26125 cocosheng-g 4b8d5e76243b (Add.131 silence-break, prior recurrence)
