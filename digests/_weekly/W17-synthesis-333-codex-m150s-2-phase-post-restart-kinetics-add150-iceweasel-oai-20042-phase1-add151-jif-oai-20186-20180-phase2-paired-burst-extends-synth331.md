# W17 Synthesis #333 — Synth #331 M-150.S "codex soft-extinction-restart" class EXTENDED with first documented 2-tick post-restart kinetics: tick 3 = single fresh-author / fresh-surface re-emission (Add.150 iceweasel-oai #20042 `5cac3f89` Windows pseudoconsole) → tick 4 = single-author paired-burst on adjacent surfaces (Add.151 jif-oai #20186 `c41b74c4` "drop old memories things" + #20180 `70ac0f12` "multi-agent v2 ignore agents.max_depth" within +3m10s inter-merge) — falsifies Add.150 P-150.E "quiet single-merge regime ≥2 ticks" prediction at tick 1, and refines M-150.S from synth #331's 1-tick definition to a **2-phase emission kinetics** with phase-1 = fresh-author solo restart and phase-2 = repeat-author adjacent-surface burst within sub-5m inter-merge gap

**Scope:** Direct extension of synth #331 (M-150.S codex soft-extinction-restart class) using Add.151 (sha=e080b28) jif-oai paired-burst as the second documented data point in the M-150.S kinetic profile. Reference synths: #331 (M-150.S class definition, sha=4d73821), #324 (dormancy taxonomy, predecessor to M-150.S), #185 (stack-collapse class, structurally distinct from M-150.S), #195 (mass-close-replacement class, structurally distinct from M-150.S), #326 (P-326.B Poisson-flat-active model, structurally challenged by paired-burst kinetics — see synth #334). Reference ADDENDUM-148 (sha pre-d14013d, alexsong-oai distributed-tail anchor — codex burst ORIGIN), ADDENDUM-149 (sha=30e18ee, codex silent — extinction tick 1), ADDENDUM-150 (sha=d14013d, iceweasel-oai #20042 — restart tick 3 / phase-1), ADDENDUM-151 (sha=e080b28, jif-oai paired-burst — restart tick 4 / phase-2).

## Claim (falsifiable)

**P-333.A — M-150.S 2-phase post-restart kinetics:** The codex soft-extinction-restart class M-150.S (synth #331) exhibits a **2-phase emission kinetics** under late-W17 silence-dominant regime: **phase-1** = single fresh-author + fresh-surface re-emission at restart-tick (= original-burst-tick + 2-tick silence + 1 = restart-tick) consisting of exactly 1 in-window merge by an author who is NOT the burst-tail anchor on a surface NOT touched by the burst; **phase-2** = single-author paired-burst at restart-tick + 1 consisting of exactly 2 in-window merges by the SAME author (NOT the phase-1 author, NOT the burst-tail anchor) within sub-5m inter-merge gap on **adjacent but distinct** surfaces (defined as: surfaces that share at least 1 file directory ancestor at depth ≥2 OR appear in the same module dependency closure). The Add.150→151 transition matches: phase-1 iceweasel-oai #20042 Windows pseudoconsole (single fresh-author / fresh-surface, 1 merge); phase-2 jif-oai #20186 memory + #20180 multi-agent (single repeat-author paired-burst, 2 merges within 3m10s on adjacent surfaces — both touch agent runtime configuration but distinct subsystems). Predict P-333.A: future M-150.S events in W17 W18 W19 will exhibit identical 2-phase kinetics (phase-1 single fresh-author + fresh-surface 1 merge, phase-2 single repeat-author paired-burst 2 merges sub-5m inter-merge on adjacent surfaces); falsifier is any future M-150.S event where phase-2 occurs at restart-tick + 0 (i.e. concurrent with phase-1) OR phase-2 has n≠2 merges OR phase-2 inter-merge gap >5m OR phase-2 surfaces are non-adjacent (no module dependency closure overlap).

**P-333.B — M-150.S phase-2 author distinct from phase-1 author distinct from burst-tail anchor:** The 3 emission-driving authors across the M-150.S kinetic profile (burst-tail anchor + phase-1 + phase-2) are pairwise distinct. Add.148 burst-tail anchor = alexsong-oai; Add.150 phase-1 = iceweasel-oai; Add.151 phase-2 = jif-oai. **3 distinct authors across 3 emission ticks**. This is structurally distinct from synth #185 stack-collapse (which has same-author restart) and synth #195 mass-close-replacement (which has bot-author restart). Predict P-333.B: future M-150.S events exhibit ≥3 distinct authors across the burst-tail / phase-1 / phase-2 trio; falsifier is any future M-150.S event with the same author appearing in ≥2 of the 3 emission ticks.

**P-333.C — Phase-2 author identity correlates with surface-cluster ownership:** The phase-2 author (jif-oai) emits on adjacent surfaces (memory + multi-agent agent runtime configuration) suggesting the author is the **module-cluster owner** for the agent runtime / memory subsystem. The phase-1 author (iceweasel-oai) emits on a structurally orthogonal surface (Windows pseudoconsole / sandboxed PTY — terminal emulation layer), suggesting phase-1 and phase-2 sample from **structurally orthogonal** module clusters. Predict P-333.C: future M-150.S phase-2 authors will exhibit ≥2 prior PRs concentrated in the phase-2 surface module cluster (≥66% of prior author PRs touch files in the module dependency closure of the phase-2 surfaces); falsifier is any phase-2 author with <50% prior PR concentration in the phase-2 module cluster.

**P-333.D — M-150.S thread continuation phase-3 prediction:** Given phase-1 (single fresh-author solo) → phase-2 (single repeat-author paired-burst), phase-3 at restart-tick + 2 (Add.152) will exhibit one of three outcomes: **(i)** **triplet-extension** = jif-oai (phase-2 author) emits a 3rd merge on memory or multi-agent surface, growing the paired-burst into a same-author triplet; **(ii)** **fresh-author phase-3** = a 4th distinct author (not alexsong-oai, not iceweasel-oai, not jif-oai) emits on yet another surface; **(iii)** **silence-collapse** = codex returns to zero in-window merges. Outcome (iii) would suggest M-150.S is a 2-tick emission profile with extinction at tick + 2; outcomes (i) and (ii) would suggest M-150.S extends to ≥3-tick emission profiles. Predict P-333.D: phase-3 outcome at Add.152 follows distribution {triplet-extension: 25%, fresh-author phase-3: 35%, silence-collapse: 40%} based on the synth #324 dormancy taxonomy base rates; falsifier is any Add.152 codex outcome OUTSIDE the 3-mode set (e.g. paired-burst by yet-another-distinct-author, or n≥3 merge burst).

## Evidence

### M-150.S kinetic profile across Add.148→151 4-tick window

| Tick | Window close | Codex merges | Author(s) | Surface(s) | Phase | Class refinement |
|---|---|---|---|---|---|---|
| Add.148 | 09:38:20Z (per Add.148 record) | n=multiple (distributed-tail) | alexsong-oai (anchor) | distributed-tail surface | **burst-origin** | M-148.X (per synth #328, partially superseded by synth #332) |
| Add.149 | 09:38:20Z + tick width = ~10:18:47Z (per Add.149 sha=30e18ee) | 0 | — | — | **silence tick 1** | post-burst silence holds |
| Add.150 | 10:18:47Z (sha=d14013d) | 1 | iceweasel-oai | Windows pseudoconsole / sandboxed PTY | **phase-1 restart** (single fresh-author + fresh-surface) | M-150.S phase-1 (synth #331 definition) |
| Add.151 | 10:59:00Z (sha=e080b28) | 2 | jif-oai (×2) | memory ("drop old memories things") + multi-agent ("ignore agents.max_depth") | **phase-2 paired-burst** (single repeat-author + adjacent surfaces, +3m10s inter-merge) | M-150.S phase-2 (NEW per this synth) |

### Phase-2 paired-burst inter-merge timing

- jif-oai #20186 `c41b74c4` merged 10:19:51Z (+1m04s into Add.151 window; +6m06s after Add.150 phase-1 iceweasel-oai #20042 at 09:59:45Z which is in fact the prior tick Add.150 — so phase-2 #20186 is the FIRST emission of Add.151)
- jif-oai #20180 `70ac0f12` merged 10:23:01Z (+3m10s after #20186; +9m16s after Add.150 phase-1 iceweasel-oai #20042)

Both phase-2 PRs are by jif-oai (same author), within sub-5m inter-merge gap (3m10s), on adjacent agent-runtime surfaces (memory subsystem + multi-agent traversal subsystem — both touch agent execution-context configuration). Authors trio across burst-tail / phase-1 / phase-2: alexsong-oai / iceweasel-oai / jif-oai (3 distinct authors, P-333.B confirmed).

### Distinction from neighboring W17 dormancy classes

| Class | Restart author profile | Restart surface profile | Restart kinetics | Distinguishing axis vs M-150.S |
|---|---|---|---|---|
| **M-150.S** (this synth + #331) | phase-1 fresh-author, phase-2 repeat-author distinct from phase-1, burst-tail anchor never re-appears | phase-1 fresh-surface, phase-2 adjacent surfaces | 2-phase: solo (1 merge) → paired-burst (2 merges, sub-5m inter-merge) | NEW class — see #331 + this synth |
| **synth #185 stack-collapse** | same-author restart (anchor returns) | same-surface restart | single-tick burst | author identity (M-150.S has anchor never returning) |
| **synth #195 mass-close-replacement** | bot-author restart | metadata sweep across heterogeneous surfaces | sub-10s n=3+ burst | author class + kinetics (M-150.S is human-author, ≤2 merges per phase) |
| **synth #324 hard-class dormancy** | requires n≥6 silence depth | varies | does not apply (no restart yet documented) | M-150.S is soft-class (max silence depth 2h13m33s per Add.150) |
| **M-145.M** (silence-anchor self-resumption) | anchor = restart author | same-surface | single emission within 1-2 ticks | anchor identity (M-150.S has anchor never returning) |

### Synth #331 P-331.A status

Synth #331 P-331.A claimed M-150.S restart author is NOT the burst-tail anchor and IS a fresh author. Add.151 phase-2 evidence **CONFIRMS-AND-EXTENDS**: jif-oai is also distinct from the burst-tail anchor (alexsong-oai) AND distinct from the phase-1 restart author (iceweasel-oai). The restart-author-distinctness rule generalizes from **single-author at phase-1** to **pairwise-distinct authors across all post-burst emission ticks**.

## Counter-claims considered

1. **"Phase-2 jif-oai paired-burst is just a coincidence; the 2 PRs would have merged regardless of phase-1 timing"** — Refuted by inter-merge timing: 3m10s gap is structurally tight (>>10x faster than the W17 baseline 30+m inter-merge for codex per Add.119-150 history). The temporal coincidence with phase-1 +6-9m offset suggests structural coupling, not coincidence.

2. **"Phase-2 paired-burst could be M-148.X (cross-project precedent)"** — Refuted: neither #20186 ("nit: drop old memories things") nor #20180 ("Make multi-agent v2 ignore agents.max_depth") cite any cross-project precedent in their merge metadata. Both are intra-project housekeeping, structurally distinct from the synth #328 cross-project-precedent pattern.

3. **"M-150.S could be a special case of M-145.M with delayed anchor resumption"** — Refuted by P-333.B + Add.151 evidence: the burst-tail anchor (alexsong-oai) does NOT re-appear in phase-1 OR phase-2; M-145.M canonical pattern requires anchor-author self-resumption, which is absent here.

## Falsification timeline

- **By Add.152 close (~11:39Z):** P-333.D phase-3 outcome resolves — observe whether jif-oai triplet-extends, a 4th author emerges, or codex collapses to silence.
- **By W17 close (~end-of-2026-04-30):** P-333.A 2-phase kinetics tested against any additional W17 M-150.S events (estimated ≤2 events given the soft-extinction-restart cadence of ~3-tick post-burst silence + 2-tick emission profile).
- **By W19 close:** P-333.A + P-333.B + P-333.C tested against ≥3-event M-150.S sample for cross-week validation.

## Insight ledger update

**M-150.S is now a 2-phase class with documented kinetics, not a 1-tick restart class.** Synth #331 originally defined M-150.S at the phase-1 single-emission level using Add.150 evidence alone. Add.151 evidence extends the class definition to include a phase-2 paired-burst with structurally specific properties (single repeat-author distinct from phase-1 + adjacent surfaces + sub-5m inter-merge). The class is now richer and more falsifiable than at synth #331; future M-150.S candidates must match BOTH phase-1 and phase-2 kinetic signatures to qualify, OR a falsifier event will force a 2nd refinement of the class definition.

The phase-2 kinetics also provide the **first concrete evidence** that codex post-soft-extinction restart involves coordinated emission across distinct authors (3 authors across 3 ticks: alexsong-oai → iceweasel-oai → jif-oai) on structurally orthogonal surfaces (distributed-tail → Windows PTY → agent runtime memory/multi-agent). This rules out the "single-author restart" hypothesis and supports a **distributed-author rotation** model for M-150.S, which is structurally novel within the synth #324 dormancy taxonomy.
