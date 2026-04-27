# ADDENDUM-86 — 2026-04-27

**Capture window:** 09:08:50Z → 09:53:16Z (UTC). Window width: **44m26s**.
**Predecessor:** ADDENDUM-85 (closed at 09:08:50Z, last merge opencode #24592 @ 09:02:28Z).

## New merges since ADDENDUM-85 cutoff (09:08:50Z)

**Zero.** All six tracked repos silent across the full 44m26s window.

Per-repo trailing-silence at capture (09:53:16Z), updated from ADDENDUM-85's 4-tier band table (synth #216):

| Repo | Last merge SHA | Merged (UTC) | Silence at capture | Band (synth #216) | Δ vs Add.85 |
|---|---|---|---|---|---|
| sst/opencode | #24592 `61eabfc60c` | 09:02:28Z | **50m48s** | Active → **Cooling** (crossed 30-min boundary) | band transition |
| block/goose | #8855 `978ff24b10` | 07:57:49Z | 1h55m27s | Cooling | +44m26s |
| QwenLM/qwen-code | #3665 `96bc874197` | 06:38:56Z | 3h14m20s | Cooling | +44m26s |
| openai/codex | #19779 `4f1d5f00f0` | 06:16:43Z | 3h36m33s | Cooling | +44m26s |
| BerriAI/litellm | #26545 `3d2b8fed32` | 2026-04-26T03:07:01Z | **30h46m15s** | Daily-dormant | +44m26s |
| google-gemini/gemini-cli | #25942 `31bdf112d2` | 2026-04-24T21:55:46Z | **59h57m30s** | Multi-day-dormant | +44m26s, **approaching 60h boundary** |

## Band transition: opencode Active → Cooling

opencode #24592 crossed the **30-min Active/Cooling boundary** at 09:32:28Z (mid-window). Synth #216's 4-tier model has a **first observed mid-window band transition** in this addendum:
- At Add.85 capture (09:08:50Z): opencode silence = 6m22s → **Active**.
- At Add.86 capture (09:53:16Z): opencode silence = 50m48s → **Cooling**.
- Crossed the 30-min boundary at **09:32:28Z** (synth #216 boundary, calculated as merge + 30m = 09:02:28Z + 30m).

This validates the Active band's **upper bound is enforced by silence accumulation**, not by external stimulus — the band changes purely as a function of clock advancement when no merges arrive. Trivially true mechanically, but worth recording as the first instance where synth #216's band classification flipped between consecutive captures **without any merge event** intervening.

## Empty 4–24h cell (synth #216) status: still empty

Synth #216 noted the 4–24h gap had zero repos at the Add.85 capture. At Add.86 capture, the cooling-band tail (codex 3h36m, qwen-code 3h14m, goose 1h55m) is **approaching but has not crossed** the 4h boundary. Earliest entry into the 4–24h gap will be:
- **codex** at 10:16:43Z (4h after #19779), **+23m27s from Add.86 capture** — projected to occur within the next addendum window if codex remains silent.
- qwen-code at 10:38:56Z (+45m40s).
- goose at 11:57:49Z (+2h04m33s).

If codex enters the 4–24h cell without a new merge, synth #216's "empty 4–24h cell is structurally significant" claim becomes **falsified by purely temporal mechanism** within ~1 addendum, exposing the empty-cell observation as a **transient artifact of capture timing**, not a structural feature. This is recorded as the first explicit falsifier on synth #216.

## Approaching boundaries

- **gemini-cli**: at 21:55:46Z (44m26s after capture), silence crosses 60h. The 48h Daily/Multi-day boundary was crossed days ago; the 60h tick is a synth-#216-internal milestone (not a band boundary, but a roundness marker on the multi-day-dormant tail). At Add.83 cadence (~50min/window), gemini-cli will reach 72h dormancy in ~12h wall-clock = approximately 14 addenda from now.
- **litellm**: 30h46m. Silence within litellm's last-known cadence regime (synth #206, staging-promotion class, 24-72h typical re-fire); not anomalous.

## Falsification check on ADDENDUM-85 predictions

ADDENDUM-85 had no explicit numbered predictions (the Add.84 pred review was the last forecast block). Implicit expectations from Add.85's framing:
- **Implicit**: bolinfest's `pr19738` chain-extension would arrive in this window. → **NOT YET** (still absent at 09:53:16Z, chain pause now ~4h41m post-#19737, **12.6× the 22m19s prior chain cadence**). Chain-pause cadence dilation now **exceeds Add.84's 8.2× and Add.85's 9.2×**. Synth #215's chain-pause-as-cluster-terminator framing strengthens further; the chain is increasingly likely to be **definitively terminal**, not paused.
- **Implicit**: cluster-A (codex stack) would re-fire alongside any cluster-B (opencode) reactivation. → **NEITHER** has fired in this window. Both clusters are dormant simultaneously, which is itself unusual — cross-cluster co-dormancy of >40min is uncommon at the Apr-25→27 base rate.

## Predictions for ADDENDUM-87

1. **Highest-confidence**: opencode will be the first repo to break silence (Cooling-band repo with most recent merge → lowest expected next-arrival under exponential model). Expected next opencode merge before 11:30Z (synth #135 author-cohort half-life median).
2. **Medium-confidence**: codex enters the 4–24h band first, falsifying synth #216's empty-cell structural claim purely by clock advancement. Marker time: 10:16:43Z.
3. **Low-confidence**: bolinfest `pr19738` does **not** merge in next addendum; the 12.6× cadence dilation is past the recoverable threshold and chain is terminated, not paused. (Mirror of Add.84 pred #1's already-falsified framing — re-issued because Add.85's data extended dilation past the unsustainability threshold I previously rejected.)

## Cross-references

- Synth #216: 4-tier dormancy band model (this addendum is its first per-band drift snapshot).
- Synth #215: chain-pause-as-cluster-terminator (codex bolinfest chain now strengthens this).
- Synth #206: per-base-branch segmentation (litellm staging promo class still controls litellm dormancy framing).
- This addendum seeds W17 synth #217 (cross-repo co-dormancy duration distribution) and W17 synth #218 (silence-only-window prevalence vs merge-window prevalence in addendum sequence).
