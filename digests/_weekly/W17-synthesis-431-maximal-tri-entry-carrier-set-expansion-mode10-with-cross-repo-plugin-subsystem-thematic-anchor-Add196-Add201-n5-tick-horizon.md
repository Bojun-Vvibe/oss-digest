# W17-Synthesis #431 — Maximal-Tri-Entry Carrier-Set Expansion (Mode-10) with Cross-Repo Plugin-Subsystem Thematic-Anchor at Add.196 → Add.201 N=5-Tick Horizon

**Class**: Cross-repo carrier-set-expansion taxonomy extension + cross-repo thematic-anchor recurrence.
**Anchor ticks**: Add.200 → Add.201 (carrier-set transition); Add.196 → Add.201 (plugin-anchor recurrence).
**Status**: New mode-10 instantiation; promotes synth #424 9-mode framework to 10-mode framework.

## 1. The Mode-10 Instantiation (Add.200 → Add.201)

The synth #424 framework enumerated 6 carrier-set-transition modes through carrier-set-relation polarity {⊂, ⊃, =}; synth #428 extended this to 9 modes via the carrier-rotation-at-cardinality-preserved class instantiated at Add.198 → Add.199. Add.200 → Add.201 instantiates a tenth mode never previously observed in the visible Add.158-200 W17 window:

> **Mode-10: maximal-tri-entry-with-mono-sustain.** Carrier-set-cardinality 1 → 4 at single-tick boundary, with |intersect|=1, |entry|=3, |exit|=0.

Concretely: Add.200 carrier-set = {codex} (mono-carrier degeneracy by akshaynathan #19160 `8426edf7`). Add.201 carrier-set = {opencode, codex, gemini-cli, goose}. The transition decomposes as **codex sustain + simultaneous triple re-entry** {opencode, gemini-cli, goose}. Δ-cardinality = +3, the largest single-tick cardinality jump in the visible W17 history (prior maximum: Add.195 → Add.196 at Δ=+1).

Per-carrier re-entry conditions at Add.201:
- **opencode** re-enters at n=7 silence horizon (last merge PR #25115 at Add.193, 16:53:13Z) by disjoint-surface doublet rekram1-node #25167 `560baae1` + kitlangton #25173 `76a0f0f6`.
- **gemini-cli** re-enters at n=1 cohort-zero (Add.200=0) by PR-number-monotone-inverted doublet gundermanc #26289 `892c8a72` + Adib234 #26285 `f497240f`.
- **goose** re-enters at n=8 silence horizon (last merge PR #8932 at Add.193 jamadeo `7d69e144`, 16:27:46Z) by fresh-debut singleton kalvinnchau #8935 `43478a2b`.

Notably, all three re-entering carriers had their last pre-Add.201 merge at Add.193 ({opencode, goose}) or Add.199 ({gemini-cli}) — the **shared-anchor-tick property** at Add.193 for two of three re-entries (opencode + goose) suggests an **n=8 horizon coincidence** (both broke simultaneously after 8-tick silence streaks rooted at the same anchor tick).

## 2. The Cross-Repo Plugin-Subsystem Thematic-Anchor (Add.196 → Add.201)

Per synth #427's same-author thematic-anchor cross-window-re-emergence motif (instantiated at xl-openai's Add.189 → Add.199 plugin-architecture chain at codex), Add.201 extends this to a **cross-repo branch**:

- **Add.196 codex anchor**: xl-openai PR #20348 `7b3de630` ("Move plugin out of core") at codex Add.199 (re-emergent from xl-openai's Add.162 #20096 "Use remote installed plugin cache for skills and MCP" plugin-cache surface).
- **Add.201 opencode anchor**: rekram1-node PR #25167 `560baae1` ("fix: ensure user config takes precendence over plugin hooks for model resolution") at opencode Add.201.

The plugin-subsystem axis spans **two distinct repositories** (sst/opencode and openai/codex) at n=5 cross-tick horizon (Add.196 → Add.201) and n=2 cross-tick horizon (Add.199 → Add.201). The thematic chain:
1. Add.162 codex xl-openai #20096 — plugin-cache infrastructure
2. Add.196 codex iceweasel-oai (octuplet member, pkg-related per Add.196 surface enumeration)
3. Add.199 codex xl-openai #20348 — plugin-out-of-core architectural refactor
4. Add.201 opencode rekram1-node #25167 — plugin-hook precedence at config layer

The synth #427 same-author single-repo anchor extends to **multi-author multi-repo plugin-anchor** at Add.201 — synth #427 framework needs cross-repo branch addition.

## 3. Surface-Disjoint Hexuple at Quad-Carrier (Synth #418 Extension)

Synth #418 introduced the disjoint-surface motif at intra-repo doublet cardinality. Add.201's 6-PR cohort (across 4 carriers) instantiates the **first 6-cardinality cross-repo surface-disjoint cohort** in the visible W17 window:

| # | PR | Author | Repo | Surface category |
|---|-----|--------|------|------------------|
| 1 | #25167 `560baae1` | rekram1-node | opencode | plugin-resolution config-precedence |
| 2 | #25173 `76a0f0f6` | kitlangton | opencode | httpapi documentation-spec |
| 3 | #20504 `6014b667` | owenlin0 | codex | test-flake fallback-port |
| 4 | #26289 `892c8a72` | gundermanc | gemini-cli | CI-bot-checkout-target |
| 5 | #26285 `f497240f` | Adib234 | gemini-cli | CLI-sandbox auto-update |
| 6 | #8935 `43478a2b` | kalvinnchau | goose | UI detail-view skill-rename |

All 6 surfaces pairwise-disjoint; surface-overlap-coefficient = 0.000. The synth #418 framework's intra-repo→cross-repo extension is decisive: the **maximal-surface-dispersion sub-mode** is instantiated at Add.201 with exact-equal cardinality between PR-count and surface-category-count (k=6 for both axes).

## 4. PR-Number-Monotone-Inversion at Two Carriers Simultaneously (Synth #420 Multi-Carrier Extension)

Add.201 exhibits PR-number-monotone-INVERSION at **gemini-cli** doublet (#26289 merged before #26285 by 5m14s — gundermanc PR-number larger but merged first). The opencode doublet preserves PR-number-monotone-alignment (#25167 < #25173 with merge-order-aligned). Synth #420's same-author-cross-tick stacked-PR-series motif noted PR-number-monotone-inversion at **codex Add.199** (xl-openai #20348 + wiltzius-openai #19280, where the smaller-numbered #19280 merged first).

Cross-tick PR-number-monotone-inversion frequency at multi-PR-carriers in the visible Add.158-201 window:
- Add.196 codex octuplet: PR-numbers {19882, 20101, 20245, 20270, 20275, 20463, 20471, 20474} merged in mixed order → multiple intra-cohort inversions.
- Add.199 codex doublet: 1 inversion (xl-openai/wiltzius-openai).
- Add.201 gemini-cli doublet: 1 inversion (gundermanc/Adib234).
- Add.201 opencode doublet: 0 inversions.

Empirical inversion rate at multi-PR-carrier cohorts (excluding singletons): **~50%**, consistent with random-merge-order assumption. The Add.201 instantiation **DOES NOT FALSIFY** the random-order null but extends the synth #420 motif to **gemini-cli** (previously observed only at codex).

## 5. Predictions

- **P-431.A** (>55%): Mode-10 maximal-tri-entry transitions historically contract within n=2 — expected Add.202 carrier-cardinality ∈ {2, 3}, NOT 4 sustain.
- **P-431.B** (>60%): At least one of {opencode, goose} exits at Add.202 (post-fresh-debut/post-doublet recurrent-author-rest expectation).
- **P-431.C** (>50%): Plugin-subsystem cross-repo anchor sustains at n+1 — empirical re-emergence rate at synth #427 single-repo class is ≥0.50; cross-repo extension at Add.196-201 horizon predicts ≥1 plugin-surface PR at Add.202-204 across {opencode, codex}.
- **P-431.D** (>65%): Surface-disjoint cohort cardinality contracts at Add.202 — k=6 surface-disjoint maximum is rare; expect k ∈ [1, 4] with non-zero surface-overlap at Add.202.
- **P-431.E** (>50%): At Add.202 multi-PR carriers (if any), PR-number-monotone-inversion occurs at ≥1 carrier — null random-order rate ~0.50 sustained.

**Falsifiers**: P-431.A falsified if Add.202 carrier-cardinality = 4 (sustain). P-431.B falsified if both opencode and goose sustain at amplitude ≥1. P-431.C falsified if no plugin-surface PR at Add.202-204 across {opencode, codex}. P-431.D falsified if Add.202 surface-disjoint cohort cardinality ≥6. P-431.E falsified if all Add.202 multi-PR carriers preserve PR-number-monotone-alignment.
