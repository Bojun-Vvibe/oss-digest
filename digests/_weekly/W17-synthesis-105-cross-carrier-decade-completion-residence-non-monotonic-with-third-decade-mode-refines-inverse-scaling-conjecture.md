# W17 synthesis #105 — Cross-carrier decade-completion adjacent-triplet remains residence-of-1 at gap=2 while post-completion residence diverges by decade-tier (qwen first=1, codex third=3, crush fourth=2-and-counting), refining inverse-scaling-with-decade-tier conjecture to non-monotonic with third-decade-mode

## Statement

The Add.270-272 cross-carrier decade-completion adjacent-triplet — litellm n=20 (Add.270, second-decade), qwen-code n=10 (Add.271, first-decade, qwen-code #3780), crush n=40 (Add.272, fourth-decade) — remains at **residence-of-1** at gap=2 from terminal member. P-272.S (decade-completion adjacent-quadruplet at Add.273 at prior 0.10) is **FALSIFIED at minimum residence** because no carrier crossed a decade boundary at Add.273 (nearest candidate: gemini-cli n=38 → n=39, still 1 tick short of n=40 fourth-decade-second-completion; far-tier candidates litellm n=23 needing n=30 and goose n=72 needing n=80 are 7-8 ticks away).

The decade-marker framework (synth #100 decade-completion-adjacent-doublet, synth #102 adjacent-triplet) is now extended with a **post-completion residence sub-axis** measuring how long each completing carrier sustains its post-boundary tier residence before re-activation. Three instances have been observed:

- **qwen-code first-decade**: residence = 1 tick (Add.271 n=10 → Add.272 n=0 reset under B-A-M-N merge), terminated by qwen-code #3780. **Followed by zero-tier-doublet** (Add.272 n=0 → Add.273 n=0 reset under umut-polat merge #3749) — the post-completion zero-tier residence then extends, bringing the joint first-decade-then-zero-tier residence to 2 ticks.
- **codex third-decade**: residence = 3 ticks (Add.268 n=20 entry → Add.269 n=21 → Add.270 n=22 → Add.271 reset under aibrahim-oai merge), the original third-decade-residence-of-3 observation that anchored the inverse-scaling conjecture as a candidate.
- **crush fourth-decade**: residence = 2-and-counting (Add.272 n=40 entry → Add.273 n=41 sustain, no reset yet), validates non-completion-residence-≥2 at fourth-decade.

## Refinement of inverse-scaling-with-decade-tier conjecture

The strict form of the inverse-scaling-with-decade-tier conjecture (synth #102, restated in ADD-272 M-272.F) predicted decade-residence shrinks monotonically with decade-tier (first=1, second=1, third=3, fourth=should-be-≥3 if monotonic-extension reading; or fourth=should-be-1 if upper-tail-mode-tail reading). Observation:

- first-decade: 1 tick (qwen)
- second-decade: 1-tick-then-active for codex Add.267→Add.268 (different framing — codex never completed second-decade as a silence-trajectory) OR ≥2-tick for litellm Add.270-272 (which then re-active at Add.272 — wait, litellm at Add.273 is n=23, still silent; litellm second-decade-completion residence is now 3-tick at Add.273 if we count Add.270 entry through Add.272; but litellm crossed second-decade BOUNDARY at n=20 entering Add.270, so Add.270 is the completion-tick and Add.270-273 = 4 ticks residence).
- third-decade: 3 ticks (codex), but litellm at n=23 has been in third-decade for 2 ticks (Add.272-273) and counting.
- fourth-decade: 2-and-counting (crush Add.272-273), gemini at n=38 has been in fourth-decade since Add.247 (26 ticks past entry, no reset).

**Refined non-monotonic conjecture**: decade-residence is **non-monotonic with peak at third-decade for reset-prone carriers** and **monotonically-extending for non-reset carriers** (gemini fourth-decade 26-tick is a non-reset reference, goose seventh-decade 54-tick is even more extreme). The reset-prone subset (qwen, codex, crush, litellm) shows residence shape (1, 4-and-counting, 3, 2-and-counting) which is **third-decade-mode** rather than monotonic.

## Concrete instantiations

- **Add.270 litellm second-decade-completion**: n=19 → n=20 silence-increment crosses second-decade boundary. mergeCommit context: aibrahim-oai litellm merges in cascade. Residence at Add.273: 4 ticks ongoing.
- **Add.271 qwen-code first-decade-completion**: n=9 → n=10 silence-increment crosses first-decade boundary. Residence: 1 tick (terminated by qwen-code #3780 from B-A-M-N at Add.272 23:31:08Z).
- **Add.272 crush fourth-decade-completion**: n=39 → n=40 silence-increment crosses fourth-decade boundary. Residence at Add.273: 2 ticks ongoing (n=41 at Add.273).
- **Composite cum BF(decade-marker : decade-attractor-null)**: ×9.07 (Add.272) → ×9.43 (Add.273, ×1.04 amplifier under crush n=41 silence sustain at fourth-decade interior, validates non-completion-residence sub-mode).

## Cross-carrier joint composite update

Combining the joint composite tetrad-axis BF (synth #104 framing) with the decade-marker framework: cum BF on the **joint H_decade-marker-AND-non-monotonic-residence : H_random-decade-crossings** = ×9.43 × ×1.18 (non-monotonic-residence amplifier at gap=1 from third-decade-mode validation) = **×11.13** at Add.273. P-272.T (decade-marker hypothesis cum BF crosses past ×15 at prior 0.20) **FALSIFIED at minimum residence** (cum stops at ×11.13).

## Predictions

- **P-105.1**: Add.274 produces a fourth decade-completion event at gemini n=38 → n=40 (would require n=39 increment then n=40, 2 ticks away — near-term but not Add.274) OR at litellm n=24 → n=30 (7 ticks away, infeasible) — P(decade-completion at Add.274) ≈ 0.06.
- **P-105.2**: Crush fourth-decade-residence-of-3 at Add.274 (n=42 silent) — would tie codex third-decade residence-of-3 record at fourth-decade — P ≈ 0.78.
- **P-105.3**: Litellm third-decade-residence-of-3 at Add.274 (n=24 silent) — would form **first cross-carrier third-decade-residence-≥3 observation** validating third-decade-mode — P ≈ 0.70.
- **P-105.4**: Qwen-code zero-tier-triplet at Add.274 (n=0 reset-sustain under N≥1 merge) — P ≈ 0.08 (would require third consecutive qwen-code merge, structurally implausible per synth #104 P-104.6).
- **P-105.5**: Lockstep-PJL-collision-sustain residence-of-3 at Add.274 (opencode + codex both at n=3 silent) — P ≈ 0.35 (would refine the "post-decade-completion residence" sub-axis to apply to bottom-decade lockstep pairs as well).
- **P-105.6**: Cum BF(synth #105 non-monotonic : synth #102 strict-inverse-scaling) at issuance crosses past ×3 across next 3 ticks — P ≈ 0.45.
- **P-105.7**: New decade-completion event at Add.275 or later (within next 3 ticks) — gemini n=40 candidate at Add.275 (2 ticks from Add.273) — P ≈ 0.55 conditional on gemini silence-momentum.
- **P-105.8**: Fifth distinct decade-tier joins occupied set at Add.274 (e.g., second-decade re-entry via opencode/codex if they cross n=20 — far-future, infeasible) — P ≈ 0.02.

## Status — ACTIVE-NEW

Synth #105 refines synth #102 (adjacent-triplet) and ADD-272 M-272.F (inverse-scaling conjecture) by introducing the **non-monotonic-third-decade-mode** sub-axis. Cum BF(#105 : #102 strict form) at issuance = ×1.18.
