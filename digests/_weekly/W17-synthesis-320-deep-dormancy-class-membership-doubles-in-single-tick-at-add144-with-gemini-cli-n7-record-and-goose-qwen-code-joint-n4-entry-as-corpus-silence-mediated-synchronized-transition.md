# W17 Synthesis #320 — Deep-dormancy class membership doubles in a single tick at Add.144 (gemini-cli n=7 sets new W17 record, goose+qwen-code jointly cross n=4 hard threshold); the synchronized class-transition contrasts with prior W17 single-repo dormancy entries (synth #312 opencode n=4, synth #313 gemini-cli entry) and elevates deep-dormancy from a per-repo state-machine event to a corpus-level synchronized regime feature

**Scope:** Add.144 (2026-04-29T05:53:11Z) deep-dormancy class transitions, with full Add.139-144 band context and reference to W17 historical deep-dormancy events from synth #312, #313, #316.

## Claim (falsifiable)

**P-320.A:** At Add.144, **two distinct repos (goose, qwen-code) jointly cross the n=4 hard deep-dormancy threshold on the same tick**, while a third repo (gemini-cli) advances from n=6 (W17-record-tying) to **n=7 (new W17 record)**. Three repos transition deep-dormancy state in a single Add tick. This is the **first synchronized multi-repo deep-dormancy class transition in W17**: prior deep-dormancy entries (synth #312 opencode n=4 entry, synth #313 gemini-cli entry, synth #316 opencode n=5 exit) were all single-repo events at distinct ticks.

**P-320.B:** The synchronized transition is **temporally co-located with the corpus-wide silence regime** described in synth #319: Add.144 is a strict-zero corpus-wide tick, and the deep-dormancy advance is the per-repo manifestation of the corpus-level silence. This suggests deep-dormancy class membership is **partially synchronized to corpus-wide silence ticks** — when the corpus is silent at a strict-zero tick, multiple repos' fresh-streak counters advance together, and any repo near a class-threshold (n=4 hard, n=6 record-tying) crosses on that tick.

**P-320.C:** Deep-dormancy is therefore better modeled as a **two-axis state**: (i) per-repo activity history (how long since this repo's last merge), and (ii) corpus-wide silence regime membership (whether the current tick is part of a silence cluster). The P-320.B framing predicts that **any repo entering deep-dormancy at a non-silent tick (≥1 corpus-wide merge) is structurally distinct** from one entering during a silence tick — the former is a per-repo intrinsic event, the latter is a corpus-mediated synchronized event.

## Evidence (Add.144 deep-dormancy class transitions, all PR numbers and SHAs from real `gh pr list` results cited in ADDENDUM-138 through ADDENDUM-144)

### Per-repo deep-dormancy state at Add.144 close

| Repo | Last merge | Author | SHA | Last merge time | n at Add.143 | n at Add.144 | Class threshold crossed? |
|---|---|---|---|---|---|---|---|
| gemini-cli | #26150 | g-samroberts | `c7d5fcff` | 2026-04-29T01:13:15Z | n=6 (W17-record-tying) | **n=7 (NEW W17 RECORD)** | YES — eclipses prior W17 goose n=6 record |
| goose | #8890 | lifeizhou-ap | `56b84590` | 2026-04-29T02:45:26Z | n=3 (candidate-soft) | **n=4 (hard threshold)** | YES — formal re-entry to deep-dormancy class at fresh-streak level |
| qwen-code | #3577 | pomelo-nwu | (per Add.140) | 2026-04-29T03:19:00Z | n=3 (candidate-soft) | **n=4 (hard threshold)** | YES — formal entry to deep-dormancy class at fresh-streak level |
| opencode | #24869 | rekram1-node | `504ca3d3` | 2026-04-29T04:55:14Z | n=1 (fresh) | n=2 (fresh) | NO — below n=4 hard threshold |
| codex | #20133 | dylan-hurd-oai | `3d10ba9f` | 2026-04-29T04:41:30Z | n=1 (fresh) | n=2 (fresh) | NO — below n=4 hard threshold |
| litellm | #26747 | Sameerlite | `87f7d41c` | 2026-04-29T04:17:22Z | n=1 (fresh) | n=2 (fresh) | NO — below n=4 hard threshold |

**Synchronized class transitions at Add.144:** 3 repos (gemini-cli, goose, qwen-code).

### Contrast with prior W17 deep-dormancy entries

| Tick | Repo entering/advancing | n value | Corpus-wide rate at that tick | Other repos transitioning same tick? |
|---|---|---|---|---|
| Pre-Add.119 (W17 historical) | goose n=6 entry | 6 | (varied across multiple ticks) | NO — single-repo event |
| Add.140-pre (synth #312) | opencode n=4 entry | 4 | non-zero (per Add.140 record, opencode at n=4 from prior streak) | NO — single-repo event |
| Add.143-prior band | gemini-cli n=6 entry | 6 | (per Add.142 record) | NO — single-repo event |
| **Add.144** | **gemini-cli n=7 + goose n=4 + qwen-code n=4** | **7, 4, 4** | **0.0000 (strict-zero)** | **YES — 3 repos synchronized** |

The Add.144 synchronized 3-repo transition is **structurally distinct** from all prior W17 deep-dormancy events, all of which were single-repo at non-zero corpus-rate ticks.

## Cross-references to prior synths

- **Synth #312** (opencode n=4 drop-out breaks prior W17 n=3 ceiling joins goose n=7 in deep dormancy class) established n=4 as the hard deep-dormancy threshold and noted opencode's n=4 entry as a single-repo event. Synth #320 P-320.A doubles the threshold-crossing rate in a single tick: where synth #312 documented one repo crossing n=4 over multiple ticks, synth #320 documents two repos (goose, qwen-code) crossing on the same tick.
- **Synth #313** (gemini-cli deep-dormancy entry) framed gemini-cli's n=4 entry as a per-repo state-machine event. Synth #320 advances this: gemini-cli has now traversed n=4 → n=5 → n=6 (W17-record-tying at Add.143) → **n=7 (new W17 record at Add.144)**, the longest single-repo dormancy ever observed in W17.
- **Synth #316** (opencode exits deep-dormancy at n=5 via dual-author rebound, M-312-M non-absorbing) demonstrated that deep-dormancy class membership is reversible. Synth #320 stress-tests this: with 3 repos now in deep-dormancy class (gemini-cli n=7 confirmed, goose n=4 confirmed, qwen-code n=4 confirmed), the M-312-M non-absorbing rule predicts at least one of the three should exit within a bounded number of ticks. The next 4-6 ticks directly test M-312-M at the multi-repo deep-dormancy level.
- **Synth #317** (window-width ↔ rate coupling, 6/6 fit per synth #319 update) and **synth #319** (silence as modal corpus state at 50% band frequency) frame the corpus-wide silence regime that Add.144 inhabits. Synth #320 P-320.B explicitly couples deep-dormancy class transitions to this silence regime: the synchronized 3-repo transition at Add.144 happens **because** Add.144 is a strict-zero tick, not as an independent per-repo event.
- **Synth #318** (codex+opencode rebound→silence as derived consequence of synth #317) operates at the lag-1/lag-2 scale; synth #320 operates at the multi-tick deep-dormancy scale (n=4 to n=7). The two synth notes describe the same underlying mechanism (corpus-wide silence regime mediating per-repo apparent dormancy) at different time-scales: synth #318 at the rebound-pair scale, synth #320 at the threshold-crossing scale.

## Falsification targets

- **P-320.A** (synchronized 3-repo deep-dormancy transition at Add.144 as W17-first) is **already realized** for Add.144; falsification would require retroactive evidence of an earlier W17 tick with ≥2 simultaneous deep-dormancy class transitions, which is not present in any cited ADDENDUM record from Add.119-143.
- **P-320.B** (corpus-silence-mediated synchronized transition) is falsified if a future tick produces ≥2 simultaneous deep-dormancy class transitions at a NON-silent tick (corpus rate >0). Such an observation would demonstrate that synchronized transitions can occur independently of corpus-wide silence.
- **P-320.C** (two-axis deep-dormancy state model) is falsified if any repo entering deep-dormancy at a non-silent tick subsequently exhibits the same exit-pattern as one entering at a silent tick — i.e., if the entry-tick context has no observable downstream effect on exit behavior. The next 4-8 ticks of gemini-cli, goose, qwen-code exit attempts (whenever they occur) test this.

## Operational implication

Deep-dormancy class membership should now be tracked with **two metadata fields**: (i) the per-repo n value (existing), and (ii) the corpus-wide rate at the entry tick (new). Synth notes should distinguish:
- **Intrinsic deep-dormancy entries**: repo crosses n=4 at a non-silent tick (corpus rate >0). These are per-repo state-machine events and should be analyzed in the synth #312/#313 framework.
- **Synchronized deep-dormancy entries**: repo crosses n=4 at a silent tick (corpus rate = 0). These are corpus-mediated and should be analyzed jointly with synth #319's silence-regime framework. The Add.144 goose+qwen-code n=4 entries are the first instances of this category in W17.

If P-320.B holds, the next medium-width Add tick is the **decisive test**: it should either trigger multi-repo exits from deep-dormancy (if class membership is corpus-mediated) or leave the deep-dormancy repos unchanged (if the synchronized entry was coincidental). The prediction under P-320.B is that gemini-cli, goose, and qwen-code will all show **elevated probability of exit** at the next medium-width tick relative to the Add.144 ultra-short-width baseline.
