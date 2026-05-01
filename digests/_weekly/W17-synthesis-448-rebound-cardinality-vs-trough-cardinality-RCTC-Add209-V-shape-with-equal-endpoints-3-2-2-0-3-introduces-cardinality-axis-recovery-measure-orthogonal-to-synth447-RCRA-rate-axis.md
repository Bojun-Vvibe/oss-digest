# W17 Synthesis #448 — Rebound-cardinality vs trough-cardinality (RCTC) sub-observable introduced at Add.209: the trough-proximal cardinality sequence Add.205-209 = 3 → 2 → 2 → 0 → 3 forms a V-shape with strictly equal endpoints, the first such cardinality-V-shape in the Add.193-209 lookback, and pairs with synth #447 RCRA on the orthogonal cardinality axis to give a 2D recovery-geometry framework

## Pattern statement

Synth #447 introduced RCRA as a rate-axis recovery measure across the Add.204-209 chain-trough-recovery arc. The cardinality-axis trajectory across the same arc is **3 → 2 → 2 → 0 → 3** (Add.205 → 206 → 207 → 208 → 209; using Add.205 as the trough-proximal pre-descent reference because Add.204's cardinality 3 is the chain-head and is the same as the Add.209 rebound by coincidence — see below). This forms a **V-shape with strictly equal endpoints at cardinality 3**, the **first cardinality-V-shape with equal endpoints** in the visible Add.193-209 W17 lookback.

The synth #443 rate-cardinality-decoupling claim is REFINED at the recovery edge: at the descent phase Add.204-208 the rate decreased monotonically (0.1747 → 0) but cardinality did NOT decrease monotonically (3 → 3 → 2 → 2 → 0 — note the chain-head was 3 not measured here; the synth #443 sequence was 2→3→2→2→0 starting from Add.204 cardinality 2, but per synth #446's reattribution, this needs cross-checking). At the recovery edge Add.208→209, BOTH rate and cardinality jump together (0.0000 → 0.1552 and 0 → 3), so the **decoupling regime ends at the recovery edge** — recovery is a **joint rate-cardinality event**, descent was **rate-led with cardinality lagging**.

## Definition: RCTC (Rebound-Cardinality vs Trough-Cardinality)

For any cardinality trajectory across a trough-recovery arc, define two forms:

**RCTC_ratio := |rebound carrier-set| / |trough carrier-set|**
**RCTC_diff := |rebound carrier-set| − |trough carrier-set|**

The ratio form is degenerate at zero-trough (division by zero) but well-defined at non-zero troughs. The diff form is always defined and is the recommended primary statistic. For Add.209: |rebound carrier-set| = 3, |trough carrier-set| = 0. **RCTC_ratio = 3/0 = +∞ (degenerate)**, **RCTC_diff = 3 − 0 = +3**.

For pairing with RCRA, define the **2D recovery-geometry vector**:

**Recovery-vector := (RCRA, RCTC_diff_normalised)** where RCTC_diff_normalised = RCTC_diff / (chain-head cardinality − trough cardinality) when the denominator is positive, else N/A.

For Add.209: chain-head cardinality (Add.204) = 3 (per synth #443 annotation, post-#446 reattribution caveats notwithstanding the chain-head cardinality is preserved as 3); RCTC_diff_normalised = 3 / (3 − 0) = **1.000** (full cardinality-recovery to chain-head). Recovery-vector at Add.209 = **(0.888, 1.000)** — near-full recovery on both axes, with cardinality recovering to exactly the chain-head value and rate recovering to 88.8% of the chain-head value.

## Specific evidence

Carrier-set membership across the arc (post-#446 corrections applied where known):

| tick | cardinality | carrier-set | new entries vs prior tick | exits vs prior tick |
|------|-------------|-------------|---------------------------|---------------------|
| Add.204 (chain-head) | 3 | {opencode, codex, litellm} | — | — |
| Add.205 | 3 | (per synth #443 trajectory) | — | — |
| Add.206 | 2 | (per synth #441/#443) | — | — |
| Add.207 | 2 | {codex, gemini-cli} (corrected per #446) | gemini-cli | litellm |
| Add.208 (trough) | 0 | ∅ | — | codex, gemini-cli |
| Add.209 (rebound) | 3 | {codex, gemini-cli, qwen-code} | codex, gemini-cli, qwen-code | — (trivially, ∅ has no exits) |

The **rebound carrier-set {codex, gemini-cli, qwen-code} is disjoint from the chain-head carrier-set {opencode, codex, litellm}** EXCEPT for codex. The **set-symmetric-difference** between rebound and chain-head is {opencode, litellm, gemini-cli, qwen-code} (cardinality 4); the **set-intersection** is {codex} (cardinality 1). **Membership-overlap-ratio MOR = |intersection| / |union| = 1 / 5 = 0.200** — low overlap despite identical cardinality. This means the V-shape with equal endpoints at the cardinality scalar **HIDES a near-complete membership turnover** at the carrier-set level. Cardinality-only observables would miss this; membership-aware observables (proposed: MOR) capture it.

## RCTC variants and edge-cases

- **RCTC_ratio degeneracy at zero-trough**: when the trough has cardinality 0, RCTC_ratio is undefined (+∞). The Add.209 case sits exactly at this degeneracy. Recommended convention: RCTC_ratio(zero-trough) ≡ N/A, distinct from RCTC_ratio = 0.0 (which would denote a trivial sustain at zero rebound).
- **RCTC_diff sign**: RCTC_diff > 0 is a positive rebound (carrier-set grows from trough); RCTC_diff = 0 is a sustain (chain extends at zero or the trough has the same cardinality as the rebound, which is trivially possible only if both are equal); RCTC_diff < 0 would be a continued contraction (would not technically be a "rebound" but the formalism handles it).
- **RCTC_diff_normalised range**: ∈ [0, 1] under normal conditions when the denominator (chain-head − trough cardinality) is the maximum drawdown; values > 1 indicate over-rebound (rebound cardinality exceeds chain-head cardinality), which is a W17 W-feature candidate when observed.

## 2D recovery-geometry classification

Combining synth #447 RCRA with synth #448 RCTC_diff_normalised gives a **2D recovery-geometry plane** with axes (rate-axis recovery, cardinality-axis recovery) ∈ [0, ∞) × [0, ∞). Recovery events can be classified as:

| classification | RCRA range | RCTC_diff_normalised range | Add.209 |
|----------------|------------|----------------------------|---------|
| weak-recovery | [0, 0.5) | [0, 0.5) | no |
| rate-led-recovery | [0.5, ∞) | [0, 0.5) | no |
| cardinality-led-recovery | [0, 0.5) | [0.5, ∞) | no |
| **balanced-strong-recovery** | **[0.5, 1.2]** | **[0.5, 1.2]** | **YES (0.888, 1.000)** |
| over-recovery | (1.2, ∞) | (1.2, ∞) | no |

Add.209 lands in the **balanced-strong-recovery** quadrant, where both rate and cardinality recover near-fully. This is the **W17 reference observation** for this classification cell.

## Falsifications and confirmations

- **FALSIFIES the synth #443 rate-cardinality-decoupling claim AT the recovery edge**: the recovery edge Add.208→209 jumps both rate (0 → 0.1552) and cardinality (0 → 3) jointly, with no decoupling. Decoupling was a descent-phase phenomenon, not a recovery-phase phenomenon.
- **CONFIRMS the synth #440 cross-tick-amplitude-cardinality-anticorrelation framing IS BROKEN at the recovery edge**: amplitude and cardinality jump TOGETHER at Add.209 (positive correlation, not anticorrelation). The synth #440 anticorrelation framing applies to descent-phase ticks only; recovery-phase ticks exhibit positive correlation.
- **CONFIRMS P-208.A SECONDARY-PLUS-ONE** (predicted modal cardinality 2, observed 3 — within the predicted range).
- **PROPOSES MOR (membership-overlap-ratio)** as a complementary sub-observable that captures carrier-set turnover hidden by cardinality-only observables. Add.209 MOR vs Add.204 = 0.200, demonstrating the V-shape's membership-turnover masking.

## Predictions

- **P-448.A**: the next observed cardinality-V-shape with equal endpoints will exhibit MOR ≤ 0.5 with probability ≥ 0.6 (membership-turnover at cardinality-V-shapes is structural, not coincidental).
- **P-448.B**: the next observed trough-recovery arc (across any future descent chain of length ≥3) will produce a recovery-vector in the balanced-strong-recovery quadrant with probability ~0.40, in rate-led-recovery with probability ~0.30, in cardinality-led-recovery with probability ~0.15, and in weak/over-recovery with combined probability ~0.15.
- **P-448.C**: at Add.210, the carrier-set membership will exhibit ≥1 entry from the silent set {opencode, litellm, goose} with probability ~0.6 (mean-reversion of silent-chain-bound repos toward re-entry).
- **P-448.D**: the codex repo will retain its W17 carrier-spanning-repo status across the next observed descent-recovery arc with probability ≥ 0.6 (per synth #447 P-447.D); if codex re-enters at Add.210 as well, the codex-carrier-frequency observable becomes a W17 W-feature candidate.

## Relationship to prior synth notes

- **Pairs with synth #447 (RCRA)** to give the 2D recovery-geometry framework. RCRA is rate-axis; RCTC is cardinality-axis. Together they classify recovery events on a 2D plane.
- **Refines synth #443 / synth #440** by demonstrating the rate-cardinality decoupling and the amplitude-cardinality anticorrelation are descent-phase phenomena that BREAK at recovery edges.
- **Introduces MOR (membership-overlap-ratio)** as a third independent observable on the carrier-set membership axis, complementary to cardinality-only observables.
- **Extends synth #444 EMR** in spirit (both are intra-tick or trans-tick structural observables that go beyond simple counts), but RCTC operates on the inter-tick cardinality axis where EMR operates on the intra-window temporal-density axis.
- **Independent of synth #446 (EPF)**: RCTC_diff is robust to per-PR attribution errors as long as cardinality counts are correct; RCTC at Add.209 (3 − 0 = 3) is unaffected by any potential attribution errors among the 3 Add.209 merges.

**End of W17 Synthesis #448.**
