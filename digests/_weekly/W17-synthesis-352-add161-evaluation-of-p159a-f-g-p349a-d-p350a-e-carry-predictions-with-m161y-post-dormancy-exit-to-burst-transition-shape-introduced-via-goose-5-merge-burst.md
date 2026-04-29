# W17 Synthesis #352 — Add.161 evaluation of P-159.A/F/G, P-349.A-D, P-350.A-E carry-predictions; M-161.Y (post-dormancy-exit-to-burst transition shape) introduced via goose 5-merge burst

**Window of derivation:** ADDENDUM-161 (2026-04-29 18:31:04Z capture) systematic re-evaluation of all open carry-predictions from synths #340, #349, #350 and ADDENDUM-159's P-159.A/F/G.

## Carry-prediction resolutions

### From ADDENDUM-159 (resolved at Add.160 already, re-confirmed at Add.161)

- **P-159.A** (opencode sustains 11h crossing at Add.160 within 22m43s margin): **CONFIRMED at Add.160** (to within 0s). At Add.161, opencode exits via low-content channel (rekram1-node #24992 `6aa8e89` 18:15:44Z) — terminating the cascade at 11-12h sub-band per M-161.X (synth #351). Status: **RESOLVED, EXIT-PATH-FALSIFIED for further cascade extension**.
- **P-159.F** (goose crosses 9h at 18:04:15Z within Add.160 window): **FALSIFIED at Add.160** via blog-exit truncation (acekyd #8884 `819ca464` 17:48:27Z). Status: **RESOLVED, FALSIFIED**.
- **P-159.G** (Add.160 active-set retains {codex, litellm} core + single-element substitution third slot): **FALSIFIED at Add.160** (cardinality dropped to 2, litellm dropped). At Add.161, active-set rebounds to 4 ({codex, goose, opencode, gemini-cli}) but litellm STILL not in active-set (n=3 silence depth 1h20m05s post-yassinkortam #26730 `9b3cd5ca`). The "codex+litellm core" hypothesis remains **broken across 2 consecutive ticks** Add.160-161. Status: **DEFINITIVELY FALSIFIED — codex+litellm core is not a stable structural attractor**.

### From synth #349 (M-159.A and M-159.B subclasses, post-silence-break trailing-tick author-rotation heterogeneous)

- **P-349.A** (codex post-silence-break trailing-tick exhibits FULL author-rotation, not partial-recurrence): At Add.160 → Add.161, etraut-openai recurs (TUI [3/7] series #20174 `d0204c3`) — this is **partial-recurrence, NOT full-rotation** — but the etraut-openai recurrence is **series-driven** (advancing the N=7 series), and the OTHER 3 codex authors at Add.161 (joeytrasatti-openai, pakrym-oai, friel-openai) are all rotated-in (not in Add.160's emitter set {etraut-openai, ...}). Within the 4 codex emissions at Add.161, the rotation/recurrence ratio is 3:1 — strong rotation dominance with series-driven recurrence as the exception. Status: **CONFIRMED-WITH-REFINEMENT** — full-rotation holds for non-series-driven emissions; series-driven emissions are exempt as a distinct sub-mechanism.
- **P-349.B** (gemini-cli post-silence-break trailing-tick exhibits PARTIAL recurrence with adamfweidman as carrier): At Add.161, gemini-cli emits Adib234 #26194 `3bc56d0` 18:05:15Z — **NOT adamfweidman**, NOT in any prior recent-emitter set. Status: **FALSIFIED at second test** — the adamfweidman carrier-emergence at Add.159 was single-instance, no carry-forward. Gemini-cli post-silence emitter selection is **author-resampling** rather than carrier-stable.
- **P-349.C** (M-159.A vs M-159.B subclass discrimination via author-cardinality): codex 4-author broadening at Add.161 (etraut-openai + joeytrasatti-openai + pakrym-oai + friel-openai) is the broadest single-tick codex author cardinality in W17 since Add.130 — strongly confirms M-159.A as the high-cardinality regime. Status: **CONFIRMED-STRONG**.
- **P-349.D** (synth #294 sustained-emission extension via cross-tick author-broadening): codex Add.158-161 author union = {etraut-openai, iceweasel-oai, cassirer-openai, joeytrasatti-openai, pakrym-oai, friel-openai} = **6 distinct authors across 4 ticks**, broadest cross-tick author-union in W17 codex history. Status: **CONFIRMED**.

### From synth #350 (M-159.D dual-active hard-deep-dormancy cascade-synchronization, M-159.E rate-uplift termination, M-159.F set-stable-cardinality with substitution)

- **P-350.A** (M-159.D dual-active cascade-synchronization sustains across Add.160-161): **DEFINITIVELY FALSIFIED** — both cascades exit (goose at Add.160 via M-161.X, opencode at Add.161 via M-161.X). The synchronization shape at synth #350 was **synchronization in entry**, not synchronization in exit; the exits are 1-tick staggered (goose Add.160, opencode Add.161) — actually a **second form of synchronization** (lag-1 staggered exit). Status: **FALSIFIED in original framing, REPLACED by M-161.X 2-of-2 staggered-exit shape (synth #351)**.
- **P-350.B** (rate trajectory continues 0.0950→0.0732 contraction with magnitude ≥0.7×): **FALSIFIED at Add.161** — rate goes 0.0732 → 0.0844 → **0.2750**, a 3.26× single-tick amplification rather than continued contraction. The 4-tick rate-uplift termination shape (M-159.E) at Add.158-159 is **DECISIVELY REVERSED** at Add.161. Status: **FALSIFIED — termination was temporary, not persistent**.
- **P-350.C** (set-stable-cardinality with substitution — codex+litellm core with rotating third slot): **FALSIFIED across Add.160-161** — litellm drops at Add.160 and stays out at Add.161; cardinality drops to 2 then rebounds to 4. Status: **DEFINITIVELY FALSIFIED**.
- **P-350.D** (M-159.F substitution shape preserves intersect across consecutive ticks): At Add.160→Add.161, intersect = {codex, goose} (cardinality 2), at Add.159→Add.160 intersect = {codex} (cardinality 1). Intersect cardinality is non-monotonic — substitution shape is unstable. Status: **PARTIALLY FALSIFIED — intersect-stable property fails**.
- **P-350.E** (corpus-level state distinct from per-repo dormancy bands — synth #100 cross-repo merge-rate co-suppression): At Add.161, per-repo dormancy bands at goose and opencode both **EXIT** simultaneously (goose post-Add.160-exit burst, opencode dormancy-exit) co-occurring with corpus-rate surge — this **CONFIRMS** the cross-repo coupling at the exit phase, not just the entry phase. The co-suppression shape at synth #100 has its **dual: cross-repo co-rebound** at exit. Status: **CONFIRMED-DUAL — synth #100 should be extended to include the co-rebound phase**.

## New mechanism — M-161.Y: post-dormancy-exit-to-burst transition shape

**Statement:** When a repo exits the M-152.U class via M-161.X (low-content-surface exit) at Tick N, the immediate next tick (Tick N+1) exhibits a **multi-merge multi-author burst on focused functional surfaces** at the same repo, with merge count ≥3 and distinct-author count ≥3. The burst surface family is **substantive** (feat/fix/refactor) and typically **clusters on a focused surface** (single feature area touched by multiple merges).

**Evidence (Instance 1 — goose Add.160 → Add.161):**
- Tick N (Add.160): single low-content exit emission (acekyd #8884 `819ca464` `blog: goose with peekaboo`).
- Tick N+1 (Add.161): **5-merge burst**:
  - lifeizhou-ap #8903 `9c16290` 17:55:15Z `chore: Added goose 2 UI refactor review skill`
  - kalvinnchau #8913 `0a49318` 18:02:32Z `feat: support google model inventory refresh`
  - kalvinnchau #8914 `59c5693` 18:09:26Z `feat: update provider row after saving credentials`
  - matt2e #8900 `b4c0879` 18:21:10Z `fix: model picker stays usable during provider loading`
  - morgmart #8896 `5fcdf31` 18:28:07Z `polish sidebar navigation and project icons`
- Merge count 5 ≥ 3 ✓
- Distinct-author count 4 (lifeizhou-ap, kalvinnchau, matt2e, morgmart) ≥ 3 ✓
- Focused surface: 4-of-5 merges on **provider/model picker** family (#8913 google model inventory + #8914 provider row + #8900 model picker provider-loading + #8903 UI refactor skill which is meta-related); 1-of-5 on sidebar UI (#8896).
- Substantive surface: 3-of-5 are feat/fix (#8913 feat, #8914 feat, #8900 fix) ≥ 60% substantive.

**Status of M-161.Y:** Single instance n=1 — predictions are tentative pending second instance.

## Predictions (M-161.Y-derived)

- **P-352.A** (M-161.Y recurrence): when opencode's Add.161 exit (rekram1-node #24992 `6aa8e89` chore) is followed at Add.162 by ≥3 opencode merges with ≥3 distinct authors on substantive surfaces, M-161.Y is confirmed at n=2. Falsifier = opencode Add.162 has ≤2 merges OR ≤2 distinct authors OR <50% substantive surfaces.
- **P-352.B** (M-161.Y burst latency): the burst occurs at Tick N+1 (immediate), not Tick N+2 or later. Falsifier = opencode Add.162 quiet, opencode Add.163 burst (which would suggest Tick N+2 latency).
- **P-352.C** (M-161.Y focused-surface concentration): the burst's largest surface family contains ≥60% of merges. Falsifier = next 2 M-161.Y bursts have largest-surface-family <60%.
- **P-352.D** (kalvinnchau intra-tick doublet recurrence): kalvinnchau emits ≥1 more goose merge at Add.162 OR Add.163 (40% probability). Falsifier = kalvinnchau 0 merges at both Add.162 AND Add.163.
- **P-352.E** (codex 5-of-5 keystone extension): codex sustains ≥1 merge at Add.162 (extending to 6-of-6). Falsifier = codex 0 merges at Add.162.

## Summary of evaluations

| Pred ID | Source | Status |
|---|---|---|
| P-159.A | ADD.159 | CONFIRMED then exit-path-falsified |
| P-159.F | ADD.159 | FALSIFIED |
| P-159.G | ADD.159 | DEFINITIVELY FALSIFIED |
| P-349.A | Synth #349 | CONFIRMED-WITH-REFINEMENT |
| P-349.B | Synth #349 | FALSIFIED at second test |
| P-349.C | Synth #349 | CONFIRMED-STRONG |
| P-349.D | Synth #349 | CONFIRMED |
| P-350.A | Synth #350 | FALSIFIED, replaced by M-161.X |
| P-350.B | Synth #350 | FALSIFIED — rate reverses |
| P-350.C | Synth #350 | DEFINITIVELY FALSIFIED |
| P-350.D | Synth #350 | PARTIALLY FALSIFIED |
| P-350.E | Synth #350 | CONFIRMED-DUAL (co-rebound dual to co-suppression) |

## Status

OPEN — P-352.A through P-352.E carried forward to Add.162+. M-161.Y at n=1 awaiting second instance for confirmation.
