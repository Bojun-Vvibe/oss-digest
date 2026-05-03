# W17 SYNTHESIS #109 — post-Add.275 W-curve cardinality cardinality lifts to 5 distinct classes via triplet-class first-entry, extends synth #106 bimodal-residence-ceiling framing into multi-class cardinality-tier model with cross-tier residence-ceiling-at-≥4 hypothesis

**Date**: 2026-05-03
**Cascade tick**: Add.275
**Anchor synths**: #105 (cross-carrier decade-completion residence non-monotonic with third-decade-mode, qwen=1, codex=3, crush=2+, inverse-scaling-with-decade-tier residence sub-mode), #106 (cross-tier residence-ceiling-at-3 alignment via crush fourth-decade + litellm third-decade falsifies synth #105 strict third-decade-mode, reframes as bimodal residence-ceiling structure), #108 (this round; joint composite BF quadruplet)
**Anchor digests**: ADD-274, ADD-275

## Thesis

Synth #106 reframed cross-carrier residence-ceiling as **bimodal**: ceiling-at-1 at first-tier (qwen-code first-decade entry single-tick) and ceiling-at-3 at ≥third-tier (codex third-decade=3, litellm third-decade=3, crush fourth-decade=3). Add.275 instantiates **dual-carrier residence-ceiling-at-3 falsification**: litellm sustains to **third-decade-residence-of-4** (n=25) and crush sustains to **fourth-decade-residence-of-4** (n=43) within the same single tick. The synth #106 residence-ceiling-at-3 hypothesis is **hard-falsified at dual-carrier sub-instance** — the structural ceiling lifts to **≥4 across third-and-fourth tiers**. Combined with the **first cross-carrier same-tier decade-completion pair** (gemini n=40 + crush previously n=40 fourth-tier-completion), the decade-marker framework now requires a **multi-class cardinality-tier model**: residence-ceiling appears to be **tier-dependent and lifting monotonically with cumulative cross-carrier observation count**.

## W-curve cardinality cardinality update

Cascade-body 13-tick cardinality sequence Add.263-275 = **2 / 1 / 4 / 1 / 0 / 2 / 0 / 0 / 2 / 1 / 1 / 0 / 3**. Distinct classes occupied: **{0, 1, 2, 3, 4}** — cardinality-class cardinality **lifts from 4 to 5** at Add.275 (triplet-class first cascade-body entry). This is the **first 13-tick cascade body in W17 visible window** to achieve full {0,1,2,3,4} occupancy. Synth #105 inverse-scaling-with-decade-tier sub-mode (qwen=1, codex=3, crush=2+) is now structurally **inverted** at the W-curve cardinality axis: the rare classes (3, 4) appear at non-monotonic intervals while the common classes (0, 1, 2) saturate the sequence interior.

## Residence-ceiling ledger (refined)

| Carrier | Tier | Residence at Add.275 | Synth #106 ceiling claim | Add.275 status |
|---|---|---|---|---|
| qwen-code | first-decade (entry) | 1 (Add.274 n=1, Add.275 reset n=0) | ceiling-at-1 | **CONFIRMED** at single-tick |
| codex | bottom-decade | 4 (n=4 silent at Add.275) | ceiling-at-3 (third-decade); but bottom-decade not previously observed | **EXTENDS** to bottom-decade-residence-of-4 (new sub-locus, no prior ceiling claim) |
| litellm | third-decade | 4 (n=25) | ceiling-at-3 | **HARD-FALSIFIED** — residence-of-4 |
| crush | fourth-decade | 4 (n=43) | ceiling-at-3 | **HARD-FALSIFIED** — residence-of-4 |
| gemini-cli | fourth-decade | 1 post-completion (n=40) | not yet ceilinged | **NEW sub-instance** at fourth-tier post-completion |
| goose | seventh-decade | 1 (n=74 absolute ceiling) | not ceilinged | sustains lag-asymmetry |

## Multi-class cardinality-tier model (new framework, extends synth #106 bimodal)

**Hypothesis H-109-A**: Residence-ceiling is **monotonically lifting with cross-carrier cumulative observation count at each tier**. As more carriers contribute observations within a tier, the residence-ceiling at that tier increases by ≥1 per validating-carrier-instance. Predictions:
- Third-tier: 2 carriers (codex prior, litellm now) → ceiling lifted from 3 to 4. **OBSERVED**.
- Fourth-tier: 2 carriers (crush, gemini-completion) → ceiling expected to lift from 3 to 4. **OBSERVED at crush**.
- First-tier: 1 carrier (qwen-code) → ceiling at 1, no lift expected until second-carrier observation. **CONFIRMED stable**.
- Bottom-tier: 1+ carriers (codex now, opencode previously triplet) → ceiling at minimum 3, potentially 4 at codex.
- Seventh-tier: 1 carrier (goose) → ceiling at 1+ (goose continues to extend, but no second-carrier observation to test lift).

**Hypothesis H-109-B** (alternative): Residence-ceiling is **constant per tier** but synth #106 claim of ceiling-at-3 was an artifact of **insufficient observation tick count** at residence-of-4+ measurement opportunity. Under this null, the apparent lift at Add.275 is just **continued silence at ticks where residence-of-4 was structurally always possible**. Falsifiable via Add.276-280 observation: if residence keeps lifting (5, 6, ...) without bound, H-109-A holds; if ceiling settles in [4, 6] band consistently, H-109-B holds.

**Hypothesis H-109-C** (extension of synth #105 inverse-scaling): Residence-ceiling = f(tier) where f is non-monotonic with peak at intermediate tier. Under this extension, fourth-tier ceiling > third-tier ceiling > first-tier ceiling, and seventh-tier ceiling drops back. Currently consistent with observation but under-determined (need ≥2 carriers per tier to fit).

## Specific PR/release citations driving this synth

- **opencode #25507** (kitlangton, 01:44:07Z, mergeCommit `e98c2918`) and **#25512** (kitlangton, 01:59:36Z, mergeCommit `1409a071`): same-author intra-tick doublet on cli-effectCmd surface drives opencode reset n=3→n=0, terminating bottom-decade-triplet for opencode at exactly 3-tick — this provides the **opencode bottom-decade-residence-ceiling-at-3 confirming-instance**, contrasting with codex sustain to n=4 at the same tier.
- **qwen-code #3791** (wenshao, 02:05:19Z, mergeCommit `cdadbcdb`): cli Monitor surface, qwen-code reset n=1→n=0 at gap=2 from Add.273 prior fresh-author entry, **second consecutive fresh-author single-tick instance for qwen** validates **qwen-code first-tier ceiling-at-1** sub-mode.
- **opencode #25502** (Hona, 00:09:50Z) and earlier kitlangton #25501/#25503 (00:39-00:42Z): preceded the Add.275 window, established the bottom-decade context on opencode that the kitlangton intra-tick doublet then collapsed.

## Cross-tier residence-ceiling-at-≥4 prediction set

- **S109-P1** (litellm third-decade-residence sustains to 5 at Add.276, n=26 silent): P ≈ 0.65 (silence-momentum at litellm modal).
- **S109-P2** (crush fourth-decade-residence sustains to 5 at Add.276, n=44 silent): P ≈ 0.72.
- **S109-P3** (gemini-cli fourth-decade-residence-of-2 at Add.276, n=41 silent — would establish gemini post-completion residence track): P ≈ 0.78.
- **S109-P4** (codex bottom-decade-residence-of-5 at Add.276, n=5 silent — would falsify bottom-decade-ceiling-at-4 if any was inferred from opencode): P ≈ 0.55.
- **S109-P5** (cross-tier residence-ceiling lifts to ≥5 at any tier within next 3 ticks): P ≈ 0.50.
- **S109-P6** (some carrier rebounds to terminate residence at exactly 4-tick, validating ceiling-at-4 as the new structural ceiling): P ≈ 0.35.
- **S109-P7** (multi-class cardinality-tier model H-109-A confirmed by next two-carrier-tier observation point): P ≈ 0.40.
- **S109-P8** (cardinality-class cardinality at cascade body sustains at 5 for next 3 ticks, no new class-entry to {5, 6, ...} cardinality classes): P ≈ 0.78.

## Coupling to synth #108 thread

Synth #108 documented the joint composite BF floor-rebound at consecutive-up-leg quadruplet step, falsifying synth #107 amplitude-decay-to-floor. Synth #109 now documents the residence-ceiling lift at the residence-axis. **Cross-axis coupling hypothesis H-109-D**: when joint composite BF instantiates an amplitude-rebound at the up-leg cluster, the residence-ceiling at multi-tier carriers concurrently lifts. Add.275 provides a single co-occurrence instance — not yet a sub-mode, but an extension axis to track across Add.276-280. Falsifiable via independence: if residence-ceiling lifts again at Add.276 without joint BF amplitude-rebound, the coupling is rejected.

## Falsification ledger

- **Synth #105 P-1** (third-decade-mode strict reading): re-FALSIFIED via litellm residence-of-4.
- **Synth #106 P-1** (residence-ceiling-at-3 across ≥third-tier): HARD-FALSIFIED dual-carrier (litellm + crush).
- **Synth #106 P-2** (bimodal ceiling structure {1 at first-tier, 3 at ≥third-tier}): PARTIALLY FALSIFIED — first-tier ceiling-at-1 confirmed; ≥third-tier ceiling lifts to ≥4.
- **Synth #105 inverse-scaling-with-decade-tier**: PARTIALLY SUSTAINED — non-monotonic residence still observed, but the magnitude of the residence floor at intermediate tiers lifts.

## Net structural advance

Synth #109 transitions the residence-ceiling framework from **fixed-bimodal (synth #106)** to **lift-monotonic-with-observation-count (H-109-A primary)**. Two cascade-body ticks (Add.276, Add.277) of further observation will distinguish H-109-A (continued lift) from H-109-B (artifact-of-tick-count) from H-109-C (non-monotonic-peak).
