# W17 Synthesis #146 — Bolinfest stack rebase splits are recurrent with non-stack-ordered geometry, falsifying Add.49's "one-shot anomaly" reading and ruling out write-batching that respects stack order

**Status (Add.50):** Falsifies Add.49's claim that rebase#13's sub-2-second SHA-update split was a one-shot anomaly. Rebase#15 reproduces the split phenomenon at a different magnitude (4-second) with a *different* within-split boundary geometry, ruling out a single mechanistic explanation that respects stack-position contiguity. Updates the bolinfest-stack-cadence model into its **fifth** revision in the Add.42–50 range.

## Anchor evidence

The bolinfest stack on `openai/codex` consists of 5 PRs (`#19606` lead → `#19395` → `#19394` → `#19393` → `#19392` tail) which have rebased atomically (lockstep n=5) for **fifteen consecutive rebase events** in the tracked range.

Within-rebase `updatedAt` timestamps for the last three rebases:

| rebase# | addendum | updatedAt distribution | within-split geometry |
|---|---|---|---|
| #13 | Add.48 | 07:48:16Z (×3: #19606, #19395, #19394) / 07:48:17Z (×2: #19393, #19392) | **stack-position contiguous-prefix split** (top-3 vs bottom-2; 3-2 boundary) |
| #14 | Add.49 | 08:27:54Z (×5: all five PRs) | **atomic same-second** (5-0); declared by Add.49 as "atomicity restored, one-shot anomaly" |
| #15 | Add.50 | 08:59:48Z (×2: #19606, #19392) / 08:59:52Z (×3: #19395, #19394, #19393) | **endpoints-vs-interior split** (lead+tail at 08:59:48Z; middle-3 at 08:59:52Z; 4-second magnitude) |

Three back-to-back rebases with three different within-split geometries:
- Rebase#13: split at 1-second magnitude, contiguous-prefix boundary (top-3 / bottom-2)
- Rebase#14: no split (atomic, 0-second magnitude)
- Rebase#15: split at 4-second magnitude, endpoints-vs-interior boundary (#19606 + #19392 / #19395, #19394, #19393)

## Why this falsifies Add.49's "one-shot anomaly" reading

Add.49 read rebase#13's split as a one-shot anomaly because rebase#14 restored same-second atomicity. The "one-shot" framing predicts that splits should *not* recur — if they recur, then either (a) they are structural to the rebase tooling (and the same-second runs are the anomaly), or (b) the splits and the same-second runs are two stable modes of a bimodal process, or (c) splits are random within a process that mostly succeeds at atomic writes but occasionally doesn't.

Rebase#15 produces a split, ruling out (a)'s strong form: 2 out of 3 most-recent rebases are splits, but most rebases in the longer tracked range (#1–#12, all atomic) were same-second. So splits are **not** structural across all of `bolinfest`'s tooling history — they are a recent emergent property of the most-recent tooling state.

Splits-recurrent **but with different geometries** rules out (b) bimodal-with-stable-split-shape. If the process were bimodal with two clean modes, the split-mode would have a consistent within-split boundary. Rebase#13's contiguous-prefix split (top-3 / bottom-2) and rebase#15's endpoints-vs-interior split (#19606 + #19392 / interior-3) are **incompatible boundary geometries** — they cannot both arise from the same write-batching strategy that respects any reasonable ordering on the stack.

This leaves us with (c) **stochastic split**: the rebase tool issues writes that *can* land in different UTC seconds with no respect for stack order. The splits are just timing-window quantization artifacts of network/API-write latency, with the within-split membership effectively random.

## Why splits cannot be explained by stack-order-respecting write-batching

The hypothesis "the tool batches writes in stack order, and a batch can straddle a UTC second boundary" predicts splits should always be **contiguous-prefix or contiguous-suffix** with respect to stack position. Rebase#13's geometry (3-2 from top) is consistent with this. Rebase#15's geometry (#19606 + #19392 vs #19395 + #19394 + #19393) is **not** consistent: #19606 is the stack lead and #19392 is the stack tail; they are non-adjacent in stack order; their co-membership in a single timestamp class can only be explained if the tool is **not** writing in stack order — or if it is doing so, but the timestamp-bucketing is not driven by write order.

Possible mechanisms still consistent with rebase#15's geometry:

- **Independent per-PR writes that happen to be issued in roughly parallel**, with quantization to UTC second producing arbitrary co-membership sets. Under this model, the geometry is essentially random and the only invariant is n=5.
- **Two-pass write protocol** (e.g., "stamp leaf and root first, then interior in a second pass"). This would predict a stable {lead, tail} vs {interior} bipartition. Rebase#15 matches this exactly. Rebase#13 does not (it was 3-2 contiguous prefix, not 2-3 endpoints-vs-interior).
- **Ad-hoc parallel write with no protocol guarantees**, in which the rebase#13 and rebase#15 geometries are both compatible because *every* geometry is compatible with "no protocol."

The most parsimonious model consistent with all three datapoints is: **stack rebases are atomic at the n=5 invariant, but the within-rebase timestamp distribution is a stochastic property of network/API latency at write time, with no protocol invariant beyond cardinality preservation**.

## Effect on synth #138 / #140 / #142 cadence model

Synth #138 declared rebase cadence "bimodal not bounded oscillating" with rebase#11 restoring n=5 lockstep. Synth #140 claimed "perfectly balanced 3-3 bimodal split after rebase#12." Synth #142 reported rebase#13's sub-2-second split as a within-rebase atomicity-break. Synth #143 was silent on rebase split-geometry (focused on cross-repo drought delta).

Synth #146 carries forward only the **inter-rebase cadence** part of these models (the short:long inter-rebase delta cluster — now 6:3 short-biased, with short-cluster mean 34m32s / σ 4m48s) and **discards the within-rebase atomicity claim** entirely. Within-rebase atomicity is not a property of the bolinfest rebase tooling on the most-recent 3-rebase window; it was a property of the older tooling state visible in rebases #1–#12.

## Falsifiable predictions

- **P-146.A**: The next bolinfest stack rebase (#16) will have **non-zero within-rebase timestamp spread** with probability ≥0.5 (treating rebase#14 as a sample from a Bernoulli with p=split). This is the weakest prediction — it just says splits are no longer rare. If rebase#16 is atomic same-second, the Bernoulli reading still holds; if rebase#16 *and* #17 are both atomic, the Bernoulli reading is weakened toward "splits are themselves anomalous events that cluster."

- **P-146.B**: Across rebases #16–#20 (the next five tracked rebases), the within-rebase boundary geometries will be **non-uniform** — i.e., we will not see five consecutive splits with the same boundary structure (e.g., five consecutive {lead, tail} vs {interior} bipartitions). Five-in-a-row of any specific geometry would falsify the stochastic-split reading and force a return to a protocol-bound model. Mixed geometries (some contiguous-prefix, some endpoints-vs-interior, some same-second-atomic, some other) confirm stochastic.

- **P-146.C**: Inter-rebase cadence is **independent** of within-rebase split-geometry. Specifically: across rebases #16–#20, the correlation between (delta-from-prior-rebase) and (within-rebase span in seconds) will be statistically indistinguishable from zero. If the inter-rebase delta is consistently shorter on splits (e.g., short-cluster rebases all split, long-cluster rebases all atomic), the two-process model (one process governs cadence, another governs split) is falsified and a single-process model is needed.

- **P-146.D**: The n=5 cardinality invariant holds for at least 5 more rebases (i.e., through rebase#20). This is the **base rate** prediction — the lockstep property is the most stable feature of the bolinfest stack and has held across 15 consecutive rebases. If the invariant breaks (a rebase pushes only 3 or 4 of the stack PRs), the entire bolinfest-stack cadence-modeling effort needs to be re-grounded.

## What this synth does *not* claim

- It does **not** claim the rebase tool itself is non-deterministic at the bolinfest end — the splits could be entirely a GitHub API write-side timestamp artifact with the local tool issuing simultaneous writes that get bucketed differently by the upstream API.
- It does **not** claim the within-rebase span is bounded by 4 seconds. We've now seen 0s, ~1s, and 4s spans; the upper bound is not characterized.
- It does **not** claim rebase#13's contiguous-prefix geometry is "wrong" or that rebase#15's endpoints-vs-interior geometry is "wrong" — both are observations, and the **combination** is what falsifies stack-order-respecting write-batching, not either one alone.
- It does **not** generalize beyond the `bolinfest` author's stack on `openai/codex/permissions:` surface. Other stacked-PR series (if any appear in the tracked range) need their own characterization.

## Provenance

- Add.48 rebase#13 evidence: `digests/2026-04-26/ADDENDUM-48.md`, stack section (sub-2-second split, 3-2 contiguous-prefix boundary at 07:48:16Z/07:48:17Z).
- Add.49 rebase#14 evidence: `digests/2026-04-26/ADDENDUM-49.md`, "bolinfest stack rebase #14" section (atomic 5-0 at 08:27:54Z, declared one-shot anomaly).
- Add.50 rebase#15 evidence: `digests/2026-04-26/ADDENDUM-50.md`, "bolinfest stack rebase #15" section (4-second split, endpoints-vs-interior boundary at 08:59:48Z/08:59:52Z).
- Cross-checked via `gh pr view {19606,19395,19394,19393,19392} -R openai/codex --json number,headRefOid,updatedAt,author` at 2026-04-26T09:25:13Z.
- Synth lineage: refines #138, #140, #142; supersedes Add.49's "one-shot anomaly" reading.
