# W17-synthesis-713 — M-class promotes from single-PR Hona pattern (Add.368) to multi-PR pakrym variant (Add.369): two distinct M sub-classes confirmed within 1 tick

**Capture**: 2026-05-06 (W18 day-1, Add.368→Add.369 transition).

## Claim

The M-class (post-merge author-momentum cascade) is a **stable cross-carrier pattern at n=2 sightings**, BUT splits into two empirically distinct sub-classes within a single tick:

- **M_single** — author merges 1 PR, opens 1 follow-up after a moderate gap (10–25m). Originator: opencode/Hona at Add.368 (#25937 merge → #25939 open at +15m04s). Add.369 confirmed: #25939 merge at 00:09:32Z → #25941 open at +3m51s (gap-contraction). Hona's M-trigger gap sequence: 15m04s → 3m51s.
- **M_multi** — author merges 1 PR, opens **2+** follow-ups in rapid succession (<15m apart). Originator: codex/pakrym at Add.369 (#21260 merge at 00:16:06Z → #21276 open at +5m45s → #21278 open at +14m58s).

## Cited PR evidence

| sub-class | merge anchor | trigger PR(s) | gap to first trigger | gap to 2nd trigger |
|---|---|---|---|---|
| M_single (Hona Add.368) | opencode #25937 (23:32:51Z) | #25939 (23:47:55Z) | 15m04s | — |
| M_single ext. (Hona Add.369) | opencode #25939 (00:09:32Z) | #25941 (00:13:23Z) | 3m51s | — |
| M_multi (pakrym Add.369) | codex #21260 (00:16:06Z) | #21276 (00:21:51Z), #21278 (00:31:04Z) | 5m45s | 14m58s |

## What is NEW vs prior synthesis

W17-synth-710 introduced **JM-hybrid** (J-burst ∩ M-cascade) as 3 same-author PRs in <15m envelope with first-member self-merge inside the envelope (yuneng-berri litellm #27240+#27241+#27245). That hybrid was characterized by **simultaneous burst-then-merge**. M-class without J (M_single, M_multi) is the **inverse**: merge happens first, OPENs follow. The temporal direction of the merge anchor inside the burst is the discriminator:

- **JM**: open(burst) → merge(internal anchor) → tail-iterate
- **M_single / M_multi**: merge(anchor) → open(s) post-merge

Add.369 is the first tick where JM-hybrid (yuneng's #27249 self-merge extends JM₂ → JMMM) and M_multi (pakrym new) coexist without sharing authors or carriers — the two patterns are **independent generators**, not aliases.

## Falsification this tick

W17-synth-712's "carrier-rotating H-burst meta-regime" predicted continued H-density rotation. Add.369 saw H-count drop to 4 (from 14 at Add.368), with kalvinnchau ACP-stack and qwen-code B-A-M-N cluster BOTH freezing — this is **regime collapse**, not rotation. The H-burst regime W17-synth-708→712 is now closed; M-class merge-cascade replaces it as the dominant cross-carrier meta-pattern of W18 day-1 close.

## Cross-carrier consistency check

3 sightings on 2 carriers (opencode Hona, codex pakrym, litellm yuneng-as-JM-extension). Critically, the 3 sightings are **3 distinct authors on 3 distinct vendor-aligned author identities** — sub-class is not author-locked. M-class is **toolchain/CI-pace-locked** (post-merge confidence triggers same-author follow-up, gap shaped by review/CI cycle time on each repo).

## Falsifiable predictions

- **P-S713.A**: At Add.370 either (a) pakrym opens 0 new PRs after #21276/#21278 merge → M_multi is one-off, or (b) opens ≥1 within 30m of the next pakrym merge → M_multi promotes to confirmed sub-class at n=2.
- **P-S713.B**: Hona M-trigger gap sequence (15m04s → 3m51s) continues contraction → predicted next gap <2m if #25941 merges in next tick. If gap re-expands or stalls (#25941 OPEN past 2h), M_single's "accelerating" property is bounded by review complexity, not author velocity.
- **P-S713.C**: A 3rd carrier produces M_single OR M_multi by Add.371 (litellm yuneng JMMM is JM-hybrid, NOT pure M; needs a separate confirmation). If 0 new sightings, M-class has saturated at 2 carriers within W18.

## Citations summary

PRs cited by number: opencode #25937, #25939, #25941, #25934 (control); codex #21260, #21276, #21277, #21278, #21261 (control); litellm #27240, #27241, #27245, #27249 (JM₂→JMMM control). 12 unique PRs across 3 carriers, all confirmed via `gh pr list` snapshots at Add.368 and Add.369 capture boundaries.
