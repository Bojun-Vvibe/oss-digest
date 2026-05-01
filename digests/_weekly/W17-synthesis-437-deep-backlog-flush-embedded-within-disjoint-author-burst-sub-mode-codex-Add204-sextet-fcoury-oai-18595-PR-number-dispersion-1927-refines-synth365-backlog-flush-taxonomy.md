# W17-Synthesis #437 — Deep-Backlog-Flush-Embedded-Within-Disjoint-Author-Burst Sub-Mode at codex Add.204 Sextet — fcoury-oai #18595 (PR-Number 1927 Below Burst Median) Co-Merges With 5 Fresh-Band PRs Spanning 1927 PR-Number Dispersion Establishing First W17 Instance of Multi-Author Disjoint Burst With Embedded Deep-Aged PR

**Class**: Multi-author intra-tick burst motif (synth #418 / #422 lineage) + backlog-flush motif (synth #365 lineage) + PR-number dispersion taxonomy.
**Anchor ticks**: Add.196 (codex stuxf-style 8-PR multi-author burst, tight PR-number dispersion), Add.202 (codex 8-PR multi-author with embedded iceweasel-oai 2-PR stack, dispersion ≈ 470), **Add.204 (codex 6-PR disjoint multi-author burst with embedded fcoury-oai #18595 deep-aged PR, dispersion 1927)** — 8-tick comparative span.
**Status**: Establishes the **deep-backlog-flush-embedded-within-disjoint-author-burst** as a novel sub-mode at codex (synth #437 sub-mode); refines synth #365 backlog-flush taxonomy into 3 axes; establishes PR-number dispersion as a measurable burst-shape discriminator.

## 1. The Codex Add.204 Sextet PR-Number Dispersion

Per ADDENDUM-204 (`ab62461`) M-204.B, the codex Add.204 sextet has the following PR-number profile in chronological merge order:

| Order | PR# | Author | Merge SHA | Surface |
|-------|------|--------|-----------|---------|
| 1 | #18595 | fcoury-oai | `b6f81257` | TUI / vim composer mode |
| 2 | #20267 | xli-oai | `acdf9082` | analytics / plugin install |
| 3 | #20499 | owenlin0 | `5affb7f9` | app-server thread/turns API |
| 4 | #20522 | abhinav-oai | `0d9a5d20` | feature-flag / hooks alias |
| 5 | #20336 | iceweasel-oai | `4f96001f` | execpolicy / Windows PowerShell |
| 6 | #20113 | dylan-hurd-oai | `af089fb2` | execpolicy / heredoc parser |

PR-number profile: {18595, 20113, 20267, 20336, 20499, 20522}. Statistics:
- min = 18595, max = 20522, dispersion = **1927**
- median = 20301.5, mean = 20055.3
- Without #18595: dispersion of {20113, 20267, 20336, 20499, 20522} = 409 (the "fresh-band" subset is internally tight)
- #18595 sits **1518 PR-numbers below** the next-lowest in the burst (#20113) — a **discontinuous gap** in the PR-number distribution

The PR-number distribution is therefore **bimodal**: one deep-aged singleton at #18595, plus one tight fresh-band cluster spanning [20113, 20522]. This is the **first observed instance** of such a bimodal PR-number distribution within a codex multi-author burst at the W17 visible window scale.

## 2. Comparison Against Prior codex Multi-PR Bursts

| Tick | Cardinality | PR# range | Dispersion | Distribution shape | Class |
|------|-------------|-----------|-------------|---------------------|-------|
| Add.196 | 8 (multi-author) | per Add.196 | ≈100s | unimodal-tight | synth #422 stuxf-style |
| Add.197 | 0 | — | — | — | post-burst rest |
| Add.198 | 0 | — | — | — | post-burst rest |
| Add.199 | 0 | — | — | — | post-burst rest |
| Add.200 | 0 | — | — | — | post-burst rest |
| Add.201 | 1 | per Add.201 | — | singleton | mono-carrier seed |
| Add.202 | 8 (multi-author + iceweasel-oai 2-PR stack) | per Add.202 | ≈470 | unimodal-wide | synth #422 with stack |
| Add.203 | 0 | — | — | — | post-burst rest |
| **Add.204** | **6 (multi-author disjoint + 1 deep-aged)** | **{18595, 20113-20522}** | **1927** | **bimodal-with-deep-tail** | **synth #437 sub-mode (NEW)** |

The dispersion sequence at codex bursts: 100s → 470 → **1927** — **monotonically increasing** across consecutive bursts, suggesting a **dispersion-amplification regime** at codex over the 8-tick window. The Add.204 dispersion at 1927 is **4.1x the Add.202 dispersion** — the largest single-burst-to-burst jump in the visible window.

## 3. Why fcoury-oai #18595 Is a Backlog-Flush Singleton, Not a Burst Member

The fcoury-oai #18595 PR ("feat(tui): add vim composer mode") differs from the rest of the Add.204 codex sextet on three axes:

1. **Author novelty**: fcoury-oai does not appear in any other Add.193-Add.203 codex burst per the visible Addenda lookback; the other 5 Add.204 codex authors {xli-oai, owenlin0, abhinav-oai, iceweasel-oai, dylan-hurd-oai} are **all recurrent at Add.196-Add.202** (per Add.196 quartet, Add.198 doublet, Add.202 quartet inclusions per the prior Addenda).
2. **PR-number age**: #18595 sits 1518 numbers below the burst median — at typical codex PR-creation cadence (~50-80 PRs/day per the visible window), this corresponds to **~3-5 weeks of latent age** before merge.
3. **Surface novelty**: TUI/vim composer mode is a **feature-additive** surface; the other 5 PRs are at fix/internal-API/execpolicy surfaces (4 fix-class + 1 feature-flag rename). The Add.204 sextet surface composition is therefore: 1 feature × 4 fix × 1 chore-rename. The feature surface is **carried solely by the deep-aged #18595**.

The fcoury-oai #18595 PR is therefore **structurally isolated** from the rest of the Add.204 burst on author / age / surface axes — it is a **backlog-flush singleton embedded within a multi-author disjoint burst**, distinct from the pure backlog-flush bursts at synth #365 (which had multiple aged PRs and a tighter author profile).

## 4. The Synth #437 Sub-Mode Definition

**Definition**: A **deep-backlog-flush-embedded-within-disjoint-author-burst** is an intra-tick multi-PR cohort that satisfies:

- (S437.1) cardinality ≥ 5 PRs within the tick capture window
- (S437.2) author-disjoint: no two PRs share author within the tick (modulo at most 1 stack)
- (S437.3) PR-number distribution is bimodal: one deep-aged singleton at PR# ≥ 1000 below the next-lowest, plus a tight fresh-band cluster
- (S437.4) the deep-aged singleton's author is non-recurrent at the previous N≥4 tick window
- (S437.5) the deep-aged singleton's surface is feature-additive while the fresh-band is fix-dominant (≥3 of 5 fix-class)

The Add.204 codex sextet satisfies all 5 sub-mode criteria. No prior Add.193-Add.203 codex burst satisfies all 5 (Add.196 fails S437.3; Add.202 fails S437.3; both Add.196 and Add.202 had author-stacks rather than strict disjoint).

## 5. Refinement of the Synth #365 Backlog-Flush Taxonomy

Synth #365 originally framed codex sextuple-recovery-burst as a **backlog-flush** following a shallow silence gap. The Add.204 instance refines synth #365 into a **3-axis taxonomy**:

| Axis | Synth #365 original | Synth #437 refinement |
|------|---------------------|------------------------|
| PR-number distribution | unimodal tight (recovery flush) | bimodal with deep-tail (embedded backlog) |
| Author profile | recurrent-cluster (carrier-author flush) | disjoint-recurrent + 1 non-recurrent deep-aged |
| Surface profile | fix-class dominant | fix-dominant + 1 feature-additive deep-aged |

The synth #437 sub-mode is therefore a **disjoint extension** of synth #365 — the backlog-flush axis remains, but the cohort composition has fragmented from a coherent author-cluster into a multi-author disjoint burst with one deep-aged contributor surfacing during the burst window.

## 6. Predictions

- **P-437.A** (>60%): codex does not chain at Add.205 — synth #353 m162a post-emission-peak n+1 silence regime applies; modal codex amplitude at Add.205 ∈ {0, 1}; falsifier = codex amplitude ≥ 3 at Add.205.
- **P-437.B** (>55%): The synth #437 sub-mode does not recur at Add.205-Add.210 — the bimodal PR-number distribution requires a deep-aged PR to land alongside fresh PRs, which is a low-frequency event; modal recurrence horizon ≥ 10 ticks based on first-instance status.
- **P-437.C** (>50%): codex PR-number dispersion at the next ≥4-PR burst (within Add.205-Add.215) is < 1000 — the Add.196 → Add.202 → Add.204 dispersion-amplification trajectory {100s, 470, 1927} reverts toward the historical mean (~300-500) at the next sample; falsifier = next codex burst dispersion ≥ 1500.
- **P-437.D** (>55%): fcoury-oai does not appear in another codex burst within Add.205-Add.215 — non-recurrent deep-aged authors historically have inter-emission gaps ≥ 5 ticks at the W17 visible window scale; falsifier = fcoury-oai PR within Add.205-Add.215.
- **P-437.E** (>50%): The synth #437 deep-backlog-flush sub-mode generalizes to non-codex repos within Add.205-Add.220 — modal candidate repos are litellm (which has dispersion of 120 at Add.204 already, and 127 at Add.203, both increasing) and opencode (which has shown wide PR-number variance at synth #419 5-author quintet); falsifier = no non-codex deep-backlog-flush instance within Add.205-Add.220.
- **P-437.F** (>45%): The post-Add.204 codex rest period is exactly 1 tick — synth #353 m162a singleton-rest-after-burst; codex resumes at Add.206 with amplitude 1-3; falsifier = codex rest period N_rest ∈ {0, ≥2}.

**Falsifiers**: see per-prediction. Cumulative dispersion-amplification trajectory should not extend to a 4th data point at codex without intervention.

## 7. Refutation/Confirmation of Prior Synths

- **Confirms synth #418 / #422** multi-author intra-tick batch motif at codex — Add.204 sextet instantiates the disjoint-author branch at n=6 cardinality (extends the cardinality regime to N=6 from prior N=8 at Add.196 / Add.202).
- **Refines synth #365** backlog-flush taxonomy into 3-axis composite (PR-number distribution × author profile × surface profile) — backlog-flush is no longer a single regime but a family with embedded sub-modes.
- **Establishes new measurement axis**: PR-number dispersion as a burst-shape discriminator at the W17 visible window scale. Cumulative codex dispersion-amplification trajectory {100s, 470, 1927} should be tracked at synth #438+ as a candidate non-stationary signal.
- **Cross-references ADDENDUM-204** (`ab62461`) M-204.B (sextet structure) and M-204.L (sub-mode first-instantiation framing). All PR-number references in this synth derive from the Add.204 capture window 2026-05-01T00:12:48Z → 2026-05-01T01:15:46Z.
- **Cross-references ADDENDUM-203** (`92294e6`) for prior-tick mono-carrier-degeneracy (litellm-only) and synth #436 (`48647ac`) work-batch cycle predictions for stuxf — the Add.204 sextet is the codex re-entry that completes the mode-11 → mode-3-candidate carrier-rebalancing transition (M-204.A / M-204.J).
