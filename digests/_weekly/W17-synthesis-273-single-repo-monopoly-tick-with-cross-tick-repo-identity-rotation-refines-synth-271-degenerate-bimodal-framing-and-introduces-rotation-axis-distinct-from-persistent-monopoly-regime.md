# W17 Synth #273 — Single-Repo-Monopoly Tick With Cross-Tick Repo-Identity Rotation Refines Synth #271 Degenerate-Bimodal Framing And Introduces Rotation Axis Distinct From Persistent-Monopoly Regime

**Capture:** 2026-04-28T12:13Z (companion to ADDENDUM-120).

**Parents:** synth #265 (single-tick reservoir drain rebound bimodal 100/0), synth #267 (single-tick rebound non-persistence), synth #271 (single-repo merge monopoly tick — codex captures 100% 3-of-3 by jif-oai, framed as degenerate bimodal limit), synth #91 (single-author triplet self-merge metronome), synth #94 (same-author same-product surface-disjoint back-to-back merge pair), synth #258 (deep-cohort cardinality conservation).

## Observation

Two consecutive ticks (Add.119 close 11:33Z, Add.120 close 12:13Z) both registered single-repo-monopoly merge-share — a tick where exactly one tracked repo absorbs 100% of cross-repo merge volume — but the absorbing repo IDENTITY ROTATED across the two ticks:

- **Tick T0 (Add.119, 10:51Z–11:33Z, width 42m00s):** codex monopoly. Merges: jif-oai #19961 11:06:41Z `b7c0f269`, #19963 11:12:51Z `54d14011`, #19967 11:32:06Z `fa127be2`. **3/3 cross-repo merges = codex 100%.** Author: jif-oai single. Surfaces: `feat: fix hinting 2/3` + `Stabilize memory Phase 2 input ordering` (sibling spec-anchored series, synth #97 family).
- **Tick T1 (Add.120, 11:33Z–12:13Z, width 40m00s):** opencode monopoly. Merges: Brendonovich #24738 11:37:41Z `aa07f38b0708f306a25d55db8d2123498958f578`. **1/1 cross-repo merge = opencode 100%.** Author: Brendonovich single. Surface: `fix(app): preserve per-workspace icon override from localStorage` (UI-app surface, disjoint from jif-oai's codex agent-loop surface).

Cross-repo author overlap T0→T1: **zero** (jif-oai codex-only, Brendonovich opencode-only). Cross-repo surface overlap: **zero** (codex agent-loop memory vs opencode UI-app workspace icon). Tick-width near-identical (42m vs 40m, 0.95×). Inter-tick gap: 40m wall-clock, 0 inter-tick merges.

**Rotation property:** the absorbing-repo identity is NOT preserved across ticks. Synth #271 framing ("codex captures 100% 3of3 by single author jif-oai extends 265/267/91/97 into degenerate bimodal limit") is **falsified at the persistence axis** — degenerate bimodal limit at tick T0 does NOT propagate to tick T1; instead a different repo reaches the same degenerate limit.

## Why this is structural, not coincidence

1. **Volume asymmetry T0 vs T1:** codex 3 merges vs opencode 1 merge. If single-repo-monopoly were Poisson-coincidental, the expected share-distribution would track per-repo arrival rate (codex ≈ 4/hr W17 mean, opencode ≈ 6/hr W17 mean). Observed T0+T1 combined: codex 3, opencode 1, all others 0. Other-repo zero in T1 is consistent with the litellm 9-tick / gemini-cli 19-tick / goose 2h+ silence regimes — **the rotation is not random-drawn; it is gated by which silenced-repo breaks first** in the inter-tick interval.
2. **Author-singularity preserved:** both ticks have n=1 author for the merge-share. Synth #271's "single author captures repo monopoly" sub-property holds across rotation (jif-oai T0, Brendonovich T1) — the rotation occurs at REPO axis but **author-singularity is invariant** at this two-tick window.
3. **Inter-tick silence-break selection:** opencode entered T1 with 3h42m+ silence (mid+) at T0 close. Brendonovich #24738 was already 5h27m old at merge time (opened pre-T0 at 06:10:05Z). So the rotation winner is selected from **already-aged in-flight PRs** that mature across the tick boundary, not freshly-opened-and-merged PRs. This contrasts with T0's jif-oai series where #19961 (opened 10:38:08Z, merged 11:06:41Z = 28m33s) and #19963 (opened 10:45:05Z, merged 11:12:51Z = 27m46s) were **opened-and-merged within the same tick** (synth #91 metronome class).

Combined: T0 is a **fresh-cohort author metronome** monopoly; T1 is an **aged-tail single-merge** monopoly. Same statistical signature (100% repo-share single-author) emerges from **structurally distinct kinetics** — the rotation axis is necessary because the underlying mechanism rotates, not just the repo label.

## Refinement of synth #271

Synth #271 must be split into two sub-types under a single-repo-monopoly umbrella:

- **#271.M (Metronome monopoly):** single repo, single author, n≥3 fresh-cohort merges with sub-30m mean lifespan, all opened-and-merged within tick. T0 (codex/jif-oai) is the canonical instance. Synth #91 / #97 directly applicable.
- **#271.T (Tail-drain monopoly):** single repo, single author, n=1 aged-tail merge with multi-hour lifespan that crossed at least one prior tick boundary. T1 (opencode/Brendonovich #24738 5h27m36s) is the canonical instance. Note Brendonovich's PRIOR merge #24749 at 07:51:19Z (3h46m22s before #24738) means Brendonovich is also satisfying synth #94 same-author back-to-back surface-disjoint pair at the **multi-tick scale** — but only one of the two merges falls inside T1 strict-window, so T1 is degenerate-monopoly only at the strict-window grain.

## Predictions

- **Pred 273-A (rotation continuation):** Add.121 will register either (a) yet another single-repo-monopoly tick on a THIRD distinct repo (e.g., litellm-break, qwen-code, goose) extending the rotation to n=3 distinct-repo across 3 ticks, or (b) a multi-repo merge tick breaking the monopoly streak. Falsifier: Add.121 sustains opencode-monopoly (same-repo persistence), which would falsify the rotation hypothesis and re-validate synth #271 persistent-monopoly framing.
- **Pred 273-B (silence-break gating):** the next single-repo-monopoly absorber-repo (if Add.121 sustains the regime) will be a repo currently in DEEP+ silence (litellm 10h27m+ or gemini-cli 14h55m+) rather than a shallow-silence repo (codex 41m+ or opencode 35m+ at Add.120 close). Falsifier: Add.121 monopoly absorber is shallow-silence-class repo, breaking the silence-break-gating sub-property.
- **Pred 273-C (kinetics bifurcation):** if rotation continues (273-A.a), the kinetics subtype (#271.M vs #271.T) will alternate or scramble — at minimum NOT be all-#271.M nor all-#271.T across the next 4 ticks. Falsifier: 4 consecutive #271.M ticks (4 fresh-cohort metronome monopolies) OR 4 consecutive #271.T ticks (4 aged-tail single-merge monopolies) would indicate kinetic-mode lock.
- **Pred 273-D (author-singularity invariance):** across any sustained single-repo-monopoly streak ≥3 ticks, every tick will have n=1 author for the monopoly (no two-author monopoly tick). Falsifier: any monopoly tick within a streak of length ≥3 with n≥2 distinct authors merging in same repo same tick.

## Distinguishing axes from prior synths

- **Distinct from synth #265** (reservoir drain rebound): #265 covers single-tick reservoir-drain into per-repo-bimodal 100/0 conversion ratios across multiple repos in same tick; synth #273 covers ABSORBING-repo identity across ticks, not converting-repo distribution within tick.
- **Distinct from synth #258** (deep-cohort cardinality conservation): #258 holds active-set cardinality constant across membership rotation; synth #273 holds monopoly-property constant across absorbing-repo rotation. Different invariants, different scales.
- **Distinct from synth #270** (bot-driven release-train double-step): #270 is constructive-bot class single-repo recurrence; synth #273 is human-author cross-repo rotation.
- **Distinct from synth #246** (cross-repo synchronous merge-pause regime with litellm decoupling): #246 holds 0-merge regimes synchronously; #273 holds 100%-merge regimes serially-rotating.

## Methodological note

Two-tick rotation observation is **n=2** and barely above the minimum needed to claim a regime distinct from persistent-monopoly. Pred 273-A is the immediate falsifier — if Add.121 reverts to either zero monopoly or sustained opencode monopoly, synth #273 collapses back into either generic noise or synth #271 unmodified. The synth is registered now to FORCE the falsification structure and prevent retroactive narrative-fitting.
