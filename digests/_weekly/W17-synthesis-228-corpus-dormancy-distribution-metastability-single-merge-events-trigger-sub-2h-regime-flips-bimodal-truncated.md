# W17 Synthesis #228 — Corpus dormancy distribution metastability: single-merge events at the deep-silent cell trigger sub-2h regime flips between bimodal and right-skewed-truncated cell occupancy

**Anchor window:** 2026-04-27T15:13:39Z → 16:38:34Z (1h24m55s, spanning ADDENDUM-93 close → ADDENDUM-95 close).

## Phenomenon

Across three consecutive ~40-minute dispatch windows (Add.93 → Add.94 → Add.95), the corpus-wide trailing-silence distribution across the 6 watched repos underwent **two distinct regime flips** driven by **single-merge events** at the deep-silent (≥24h) cell. The dormancy distribution is therefore **metastable**: it appears stable across windows where the deep cell is unperturbed, but **collapses** the moment a deep-silent repo merges any PR.

## Three observed states

**State A — bimodal (deep + recent, empty middle)**: 4–24h cell EMPTY; corpus splits into "just merged" (0–4h) and "deeply silent" (≥24h). Observed at:
- ADDENDUM-93 close (15:13:39Z): 0–4h={opencode 28m46s, goose 3m02s, qwen-code 12m36s, codex 1h12m33s}; 4–24h={}; ≥24h={litellm 36h06m38s, gemini-cli 65h17m53s}
- ADDENDUM-94 close (15:57:06Z): 0–4h={litellm 5m39s, opencode 39m27s, goose 46m29s, qwen-code 56m03s, codex 1h56m00s}; 4–24h={}; ≥24h={gemini-cli 66h01m20s}

**State B — right-skewed-truncated (single mid-cell tail, empty deep)**: ≥24h cell EMPTY; one repo in 4–24h cell as right tail; rest cluster in 0–4h. Observed at:
- ADDENDUM-95 close (16:38:34Z): 0–4h={gemini-cli 10m26s, litellm 47m07s, opencode 1h20m55s, qwen-code 1h37m31s, codex 2h37m28s}; 4–24h={goose 6h06m53s}; ≥24h={}

## Trigger events

**Add.93 → Add.94 transition** (bimodal stays bimodal): litellm merged #26605 `0304fe0dc5` omriShukrun08 at 15:51:27Z, evacuating from ≥24h cell into 0–4h. **Net cell-shape change**: ≥24h cell shrinks from 2→1 (litellm exits, gemini-cli remains). 4–24h still empty. **Bimodality preserved** because gemini-cli stayed in deep cell.

**Add.94 → Add.95 transition** (bimodal → right-skewed-truncated): gemini-cli merged #26052 `1cdfeb6633` cocosheng-g at 16:28:08Z, evacuating from ≥24h cell. ≥24h cell becomes EMPTY. Concurrently, goose **aged into** 4–24h cell (it crossed 4h at 14:31:41Z). **Net cell-shape change**: bimodal collapses to right-skewed-truncated. The transition occurred in **41m28s** (Add.94 → Add.95 window width), and was driven by a **single merge** (cocosheng-g #26052) plus **passive aging** of one mid-velocity repo (goose).

## Mechanism hypothesis

The 4–24h cell tends to be **empty** when high-velocity repos (codex, opencode, litellm, qwen-code) merge frequently enough to reset their silence below 4h every cycle, AND when the surviving deep-silent repos (gemini-cli, sometimes litellm) have multi-day dormancy that holds them above the 24h threshold. The "missing middle" is therefore the natural shape of a **two-velocity-class corpus**.

The shape **flips** to right-skewed-truncated when:
1. A deep-silent repo merges (evacuates ≥24h);
2. A formerly-recent repo ages without merging across the 4h threshold (populates 4–24h).

These two conditions are **decoupled** — they don't have to fire together — but when they coincide within a single window the shape flip is **complete and abrupt**.

## Falsifiable predictions

1. **Highest-confidence**: the right-skewed-truncated state observed at Add.95 will **flip back to bimodal within 4 windows** (~3h). Mechanism: codex 2h37m+ silence will cross 4h (entering 4–24h, joining goose), or codex breaks silence (resetting to 0–4h while goose remains in 4–24h). **Falsifier**: 4 windows pass with the corpus stable in right-skewed-truncated and no repo in ≥24h — would suggest the corpus has a **third stable regime** not captured by the bimodal↔truncated dichotomy.
2. **High-confidence**: gemini-cli does NOT re-enter the ≥24h cell within 24h. The cocosheng-g #26052 merge plus its sibling cocosheng-g #26053 (test for restore ACP, OPEN at capture) suggest a 2-PR cluster is in motion; second merge expected within 4–8h, keeping gemini-cli in 0–4h. **Falsifier**: 24h passes with gemini-cli silent again, suggesting #26052 was a **one-off triage merge** not a workspace re-activation.
3. **Medium-confidence**: the next bimodal state will have **codex** in the deep cell (≥24h) rather than gemini-cli or litellm. The codex 2h37m+ silence with saturated queue (≥10 OPEN PRs, 5-PR bolinfest stack at ~10h49m, jif-oai #19805 at 4h58m, vb-openai #19807 at 4h31m) suggests selection-side freeze of unusual depth — if it persists 24h+, codex enters deep cell. **Falsifier**: codex breaks silence within 4h, returning to high-velocity class. Specific candidate predictions: bolinfest stack #19772 / jif-oai #19805 / aibrahim-oai #19797 break the silence.
4. **Medium-confidence**: the empty-middle phenomenon (4–24h cell empty) will recur within 2 windows. The natural-shape hypothesis predicts the corpus **wants** to be bimodal; right-skewed-truncated is a transient driven by goose's specific aging timing. **Falsifier**: 2 windows pass with the 4–24h cell continuously occupied by ≥1 repo — would falsify the natural-shape hypothesis and suggest a sustained corpus regime change.
5. **Speculative**: the metastability is **observable only at sub-1h dispatch cadence**. At slower observation (e.g., daily snapshots), the regime flips would be invisible because the deep-silent cell would be re-populated by a different repo in the meantime. **Falsifier**: a daily aggregation across W17 shows persistent ≥24h cell occupancy — would suggest the metastability is real but hidden at coarser cadence.

## Specific PR/SHA evidence

The two regime-flip-trigger merges are:
- **litellm #26605 `0304fe0dc5` omriShukrun08 15:51:27Z** (Add.94 trigger; bimodal preserved — partial flip, 2→1 deep cell occupancy)
- **gemini-cli #26052 `1cdfeb6633` cocosheng-g 16:28:08Z** (Add.95 trigger; bimodal → truncated complete flip)

Co-evolution evidence (passive aging without merge):
- **goose #8856 `d8e4b55d16` lifeizhou-ap 10:31:41Z** (last merge; aged across 4h threshold at 14:31:41Z, populating 4–24h cell at Add.95)
- **codex #19818 `bb83eec825` jif-oai 14:01:06Z** (last merge; on track to cross 4h at 18:01:06Z, ~1h22m post-Add.95-capture)

Anchor non-events (PRs that did NOT merge despite queue saturation):
- codex bolinfest stack #19772–#19776 (5 PRs, all at SHAs `c70c0f5c`, `c543c8d6`, `cac068aa`, `6c92cc40`, `1db629a8`, all unchanged ~10h49m)
- codex #19805 jif-oai (`dfa03848`, 6 windows unchanged)
- codex #19807 vb-openai (`a37adea0`, 6 windows unchanged)

## Distinguishing from prior synths

- **Distinct from synth #220** (open PR queue freshness as leading indicator): #220 examined per-repo predictive ordering. #228 examines **corpus-wide cell-shape topology**, a higher-order property.
- **Distinct from synth #216** (band position only ordering): #216 uses bands as static descriptors. #228 treats bands as a **dynamic 3-state distribution** with metastability.
- **Distinct from synth #221/#224** (litellm sub-author N=2 cap): the N=2 cap is intra-repo author-level. #228 is **inter-repo cell-occupancy level**, orthogonal.

## Operational notes

- **Watch goose** for next-merge timing as a regime-flip indicator. If goose merges before codex crosses 4h, the cell shape becomes "5 in 0–4h, 1 in 4–24h, 0 in ≥24h" → "6 in 0–4h, 0 elsewhere" — a **third regime state** (compact-recent) not yet observed but predictable from this synth.
- **Watch codex** for crossing the 4h threshold at 18:01:06Z. If it crosses without merging AND goose merges, the corpus enters compact-recent. If both stay put, the corpus stays in right-skewed-truncated.
- **Cell-shape state machine candidate** (testable): {bimodal, right-skewed-truncated, compact-recent, deep-only} as 4 corpus states, with merge events and aging events as transitions. Each prior synth dispatch in this addendum-set has been a state-snapshot; a state-machine view would let us predict transition probabilities.

**Word count check**: ≥400 words; ≥5 PRs cited with SHAs (#26605 `0304fe0dc5`, #26052 `1cdfeb6633`, #8856 `d8e4b55d16`, #19818 `bb83eec825`, plus codex stack #19772/#19773/#19774 SHA prefixes); falsifiable predictions with explicit falsifier conditions stated.
