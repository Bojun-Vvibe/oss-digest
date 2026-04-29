# W17 synthesis #346 — Add.155-157 post-zero-triplet recovery shape {0, 1, 1} with cross-repo active-repo-identity rotation (qwen-code wenshao Add.156 → gemini-cli adamfweidman+sripasg Add.157) introduces CROSS-REPO SILENCE-EXIT RELAY TOPOLOGY as a 3-tick post-deep-silence kinetic signature distinct from synth #294 (within-repo authorship inversion) and synth #74 (open-velocity leadership rotation) — falsifies the implicit single-repo silence-exit assumption underpinning synth #344 canonical low-amplitude shape and refines the synth #341/#344 sequence with a corpus-level cross-repo lag-1 successor mechanism

## Claim

The Add.155 → Add.156 → Add.157 active-repo-count sequence {0, 1, 1} with **cross-repo active-repo-identity rotation** (Add.155 zero, Add.156 qwen-code only [wenshao #3721 `cae0927` 14:34:56Z], Add.157 gemini-cli only [adamfweidman #26162 `7ab932c8` + sripasg #26143 `c2e5b28e` both at 15:35:38Z]) introduces the **CROSS-REPO SILENCE-EXIT RELAY TOPOLOGY** as a new W17 corpus-level kinetic signature: a 3-tick post-zero-active recovery shape in which the silence-exit emitter rotates across distinct repos at lag-1 with **zero overlap in active-repo identity**.

This relay topology is structurally distinct from prior W17 silence-exit and rotation patterns:

- **vs. synth #294 (post-sprint completion silence-break authorship inversion):** synth #294 addressed within-repo author rotation at silence-break (silence-breaker ≠ sprint author within the same repo); the Add.155-157 pattern is **cross-repo emitter rotation** (silence-breaker = different repo at lag-1), a strictly broader rotation axis.
- **vs. synth #74 (open-velocity leadership rotation across consecutive ticks):** synth #74 addressed open-PR velocity leadership rotation (ollama → opencode), not silence-exit emission rotation; the Add.155-157 pattern is rotation of merge-emission, not open-volume leadership.
- **vs. synth #344 (canonical low-amplitude single-merge silence-exit shape):** synth #344 implicitly assumed silence-exit is a single-tick event (Add.156 alone), with no successor-tick continuation by a different repo. The Add.157 gemini-cli silence-break **retroactively decomposes** the silence-exit into a multi-tick relay process: the "silence-exit" is not a single-tick event but a **cross-repo lag-1 hand-off chain** in which the first emitter (qwen-code at Add.156) initiates the exit, and a different repo (gemini-cli at Add.157) extends the active-repo-count from {0} → {1} → {1} via different identity. The implicit single-repo silence-exit assumption underpinning synth #344 is now **refined** to a **corpus-level multi-tick relay model**.

The silence-exit relay topology has the following structural definition (call it M-156.R for relay):

| Property | Add.155-157 instance | Required for M-156.R class membership |
|---|---|---|
| Predecessor tick active-repo-count | 0 (Add.155) | 0 (zero-active tick) |
| Lag-1 tick active-repo-count | 1 (Add.156, qwen-code) | ≥1 |
| Lag-2 tick active-repo-count | 1 (Add.157, gemini-cli) | ≥1 |
| Lag-1 vs lag-2 active-repo identity | qwen-code vs gemini-cli (disjoint) | **Disjoint** |
| Lag-1 emission shape | Single-merge low-amplitude (synth #344) | Either canonical low-amplitude OR multi-merge |
| Lag-2 emission shape | Same-second dual-author M-157.D (synth #345) | Either shape, but emitter-repo ≠ lag-1 emitter-repo |

## Evidence (cited specific ticks + SHAs)

- **Add.155** ADDENDUM sha-pending (commit 8e0a8d4 expected), window 13:36:34Z → 14:14:51Z (38m17s), zero in-window merges across all 6 repos. Active-repo-count = 0. The third tick of the Add.153-155 zero-active triplet (synth #341 M-155.T extended-run class founding member).
- **Add.156** ADDENDUM sha=`2bd78aa`, window 14:14:51Z → 15:12:03Z (57m12s), 1 in-window merge: qwen-code wenshao #3721 `cae0927` 14:34:56Z `fix(cli): bound SubAgent display by visual height to prevent flicker`. Active-repo-count = 1 (qwen-code only). Synth #344 canonical low-amplitude single-merge silence-exit shape.
- **Add.157** ADDENDUM sha=`dc5c0ff`, window 15:12:03Z → 15:50:37Z (38m34s), 2 in-window merges, both gemini-cli, both at 15:35:38Z: adamfweidman #26162 `7ab932c8` `test: fix failures due to antigravity environment leakage` + sripasg #26143 `c2e5b28e` `refactor(acp): modularize monolithic acpClient into specialized files`. Active-repo-count = 1 (gemini-cli only). Synth #345 M-157.D dual-author deep-dormancy silence-break shape. **Active-repo identity = gemini-cli, disjoint from Add.156 qwen-code.**
- **Cross-tick observation:** Across Add.155 → Add.156 → Add.157, the active-repo-set is {} → {qwen-code} → {gemini-cli} with **zero overlap** at every adjacent-tick pair. The corpus-level active-repo trajectory is a **cross-repo lag-1 hand-off chain**.

## Quantitative analysis: active-repo-set evolution Add.150-157

| Tick | Active-repo set | Active-repo-count | Cross-tick set delta vs prior tick |
|---|---|---|---|
| Add.150 | {codex, qwen-code, opencode} | 3 | (vs Add.149 baseline) |
| Add.151 | {codex} | 1 | −{qwen-code, opencode} |
| Add.152 | {gemini-cli, litellm} | 2 | −{codex} +{gemini-cli, litellm} |
| Add.153 | {} | 0 | −{gemini-cli, litellm} |
| Add.154 | {} | 0 | (no change, sustained zero) |
| Add.155 | {} | 0 | (no change, sustained zero — 3-tick triplet completion) |
| Add.156 | {qwen-code} | 1 | +{qwen-code} (synth #344 canonical low-amplitude exit) |
| Add.157 | {gemini-cli} | 1 | −{qwen-code} +{gemini-cli} (M-156.R relay continuation) |

The Add.156 → Add.157 transition is **fully disjoint** at the active-repo-set level: qwen-code drops out, gemini-cli enters, no overlap. This is the **first observed instance in W17** of a corpus-level fully-disjoint single-active-repo lag-1 transition during a silence-exit recovery phase. Prior single-active-repo to single-active-repo transitions (Add.150→151 was {codex, qwen-code, opencode} → {codex} — partial overlap retaining codex) did not exhibit full disjointness.

The Add.155-157 pattern can be described compactly as **{∅, {a}, {b}}** with `a ∩ b = ∅` and `|a| = |b| = 1`. This is the **minimal non-trivial cross-repo silence-exit relay** observed in W17.

## Comparison with prior recovery-shape candidates

The Add.155-157 {0, 1, 1} cross-repo relay shape can be contrasted with hypothetical alternative recovery shapes:

| Recovery shape candidate | Pattern | Structural interpretation |
|---|---|---|
| Within-repo continuation (rejected) | {0, {a}, {a}} | Single-repo silence-exit with 2-tick same-repo emission continuation; would be evidence for **silence-break-locked maintainer attention** to one repo |
| Multi-repo synchronous rebound (rejected) | {0, {a, b, ...}, ...} | Synchronous multi-repo silence-exit at lag-1; would be evidence for **corpus-wide regime change** (e.g., dispatcher re-arming) |
| Re-silence after single-merge break (rejected) | {0, {a}, {}} | Single-merge silence-exit followed by immediate re-silence at lag-1; would be evidence for **silence-exit fragility** (the canonical low-amplitude shape is not enough to escape silence regime) |
| **Cross-repo relay (observed)** | **{0, {a}, {b}}** with `a ∩ b = ∅` | Cross-repo silence-exit hand-off; evidence for **distributed silence-exit kinetics** at corpus level — the silence regime exits via a sequence of single-repo events at different repos, not via either re-concentration or re-silence |

The cross-repo relay shape is **structurally informative** because it rules out three alternative regimes (within-repo continuation, synchronous rebound, immediate re-silence) at the explicit observation. The relay shape is consistent with a **distributed maintainer-attention model** in which different repos have independent maintainer-attention cycles that activate at different times after a silence regime — silence regime exit is **not coordinated across repos** but is **statistically dispersed** at the lag-1 timescale.

## Predictions / falsifiers

- **P-346.A:** Add.158 active-repo-count ≥1 with sole emitter ≠ qwen-code AND ≠ gemini-cli (relay continuation at lag-2 with full cross-tick disjointness extending to a 3-tick chain {∅, {a}, {b}, {c}} with `a ∩ b = ∅`, `b ∩ c = ∅`, `a ∩ c = ∅` permitted but not required). Falsifier = Add.158 active-repo-count includes qwen-code OR gemini-cli (relay terminates with repo-recurrence, suggesting a return-to-single-repo-attention regime) OR Add.158 active-repo-count = 0 (relay terminates with re-silence, falsifying the distributed-maintainer-attention model in favor of a single-burst regime).
- **P-346.B:** Future post-zero-triplet recovery sequences in W17 (if any further M-155.T extended-run class members emerge per synth #341 P-341.D) follow the {0, {a}, {b}} cross-repo relay shape at >50% rate. Falsifier = next post-zero-triplet recovery occurs as {0, {a}, {a}} within-repo continuation OR {0, {a, b, ...}} synchronous rebound (which would isolate the Add.155-157 instance as a single-occurrence outlier rather than a structural pattern).
- **P-346.C:** The cross-repo relay topology is preferentially observed across **structurally-similar repos** (e.g., qwen-code → gemini-cli are both LLM-CLI/agent-tool repos with overlapping author pools and adjacent semantic surfaces). Falsifier = next observed M-156.R instance occurs across **structurally-dissimilar repos** (e.g., goose → litellm where the maintainer pool overlap is near-zero).
- **P-346.D:** The relay shape predicts that the synth #344 canonical low-amplitude single-merge silence-exit shape is a **lag-1 sub-component** of a multi-tick recovery sequence rather than a standalone silence-exit event. Future synth #344 instances should be revisited with lag-1 successor analysis to verify whether they are also the lag-1 of an M-156.R relay or are standalone single-tick events. Falsifier = re-analysis of Add.146 (the prior synth #344 canonical low-amplitude tick) shows lag-1 active-repo-count = 0 (immediate re-silence) AND lag-2 active-repo-count = 0 (sustained re-silence after the single-merge break) — which would establish a within-W17 dichotomy between the Add.146 standalone case and the Add.156-157 relay case.
- **P-346.E:** The synth #345 M-157.D dual-author deep-dormancy silence-break shape and the synth #346 M-156.R cross-repo silence-exit relay topology are **independent** classifications (the same tick can be M-157.D — referring to its own intra-tick shape — AND part of an M-156.R sequence — referring to its corpus-level relay role). Add.157 is simultaneously the M-157.D founding instance AND the lag-2 of the M-156.R Add.155-157 founding sequence. Falsifier = next observed M-157.D-shape silence-break does NOT participate in an M-156.R relay (e.g., is a standalone deep-dormancy silence-break with no preceding lag-1 cross-repo emission), which would establish that M-157.D and M-156.R are correlated at the Add.157 instance but not structurally coupled.

## Methodological correction to synth #344

Synth #344 implicitly framed the silence-exit as a single-tick event at Add.156. The Add.157 emergence of a different repo's silence-break at lag-1 reveals that this framing is **incomplete**: silence-exit kinetics are corpus-level and span multiple ticks. The synth #344 canonical low-amplitude shape (Add.146 + Add.156) should be re-classified as **the lag-1 sub-component of an M-156.R relay** rather than a standalone exit shape, pending lag-1 successor analysis of Add.146 (which is currently incomplete in the synth #344 record). This is a non-falsifying correction to synth #344 — the canonical low-amplitude shape characterization is preserved, but its scope is narrowed from "silence-exit shape" to "silence-exit lag-1 sub-component shape".

## Cross-references

- Predecessor ADDENDUMs: Add.135 (W17 zero-active singleton, no cross-repo relay observed), Add.137-138 (W17 zero-active pair, recovery shape after pair was Add.139 but not analyzed in cross-repo relay terms), Add.146 (synth #344 canonical low-amplitude tick — **subject to P-346.D re-analysis**), Add.153-155 (W17 zero-active triplet, M-155.T founding run), Add.156 sha=`2bd78aa` (relay lag-1, qwen-code wenshao #3721), Add.157 sha=`dc5c0ff` (relay lag-2, gemini-cli adamfweidman + sripasg same-second doublet).
- Predecessor synth notes: synth #294 (post-sprint silence-break authorship inversion — **distinguished from cross-repo relay by within-repo vs cross-repo axis**), synth #74 (open-velocity leadership rotation — **distinguished by open-volume vs merge-emission axis**), synth #341 (M-155.T extended-run class — **cross-repo relay applies to recovery from M-155.T runs**), synth #344 (canonical low-amplitude silence-exit shape — **methodologically refined by this synth to lag-1 sub-component status**), synth #345 (M-157.D dual-author deep-dormancy silence-break sub-class — **independent classification, can co-occur with M-156.R per P-346.E**).
- This synth **introduces** the M-156.R cross-repo silence-exit relay topology as a corpus-level kinetic signature, **distinguishes** it from synth #294 within-repo authorship inversion and synth #74 open-velocity leadership rotation, **methodologically refines** synth #344 from standalone-shape framing to lag-1 sub-component framing, and **establishes** the {∅, {a}, {b}} disjoint relay shape as the first observed W17 cross-repo silence-exit hand-off chain consistent with a distributed-maintainer-attention model rather than a coordinated-corpus-rebound model.
