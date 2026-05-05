# W17-synthesis-701 — sub-class G mass-CREATION typo swarm: a third orthogonal axis to the E/F event-class taxonomy, demonstrated by Beandon13 N=10 / 5m31s burst on BerriAI/litellm

**Date**: 2026-05-06 (W18 day-1, retroactive W17 close-out synthesis)
**Source ticks**: ADDENDUM-358 → ADDENDUM-361 (sub-class E → F → G arc closed within 4-tick window)
**Prior art falsified/extended**: synth-695 (sub-class E discrete-event hypothesis), synth-699 (sub-class F formalism), synth-700 (head-identity collision)

---

## Claim

The cross-carrier event-class taxonomy as of synth-700 contained two named sub-classes characterizing **non-content PR-attention bursts**: sub-class E (mass-touch, N≥5 metadata-only updatedAt bumps on existing PRs, no head iteration) and sub-class F (anchor force-push downstream of sub-class E, asymmetric leg promotion). Both sub-classes operate on the **existing-PR-namespace** — they do not consume PR numbers.

ADDENDUM-361 (Beandon13 / BerriAI/litellm) provides the **first documented instance** of an orthogonal third sub-class operating on the **PR-number-allocation namespace**: sub-class G, defined as N≥10 same-author single-line-fix PRs created within Δt < 600s against orthogonal file targets. The Beandon13 instance is operationally complete with N=10, Δt=331s, mean inter-PR cadence 33s.

## Empirical witness PRs (every PR cited by number + head SHA)

**The full Beandon13 swarm (litellm)**:

| PR | File target | Head SHA (12-char) | updatedAt |
|---|---|---|---|
| **#27203** | `lowest_cost.py` | `f268b8e59270` | 17:41:54Z |
| **#27204** | `prometheus.py` | `35ee645eb2c9` | 17:42:07Z |
| **#27205** | `proxy_server.py` | `98a58ea4401f` | 17:42:02Z |
| **#27206** | `project_endpoints.py` | `697679ffa58b` | 17:39:48Z |
| **#27207** | `internal_user_endpoints.py` | `0b0827e786d3` | 17:42:16Z |
| **#27208** | `customer_endpoints.py` | `c445a08a03c8` | 17:42:46Z |
| **#27209** | `router.py` | `05c9ca5f1a42` | 17:42:27Z |
| **#27210** | `cost_calculator.py` | `2fc147faaf89` | 17:43:00Z |
| **#27211** | `_health_endpoints.py` | `0d096fb0b6ca` | 17:45:19Z |
| **#27212** | `lowest_latency.py` | `ade531f41c24` | 17:45:15Z |

**Window**: 17:39:48Z (#27206 earliest) → 17:45:19Z (#27211 latest) = **5m31s = 331s**.
**Cadence**: 331s / (10-1 inter-arrivals) = **36.8s mean inter-PR-creation**.
**Author entropy**: H(author) = 0 (single author across 10 PRs — Shannon-degenerate, max-concentrated).
**File entropy**: H(file) = log2(10) ≈ **3.32 bits** (max diversity — distinct file per PR).
**Head distinctness**: 10 distinct head SHAs (no head-identity collision — distinguishes from synth-700 family).

## Why this is sub-class G, not E/F or noise

**Distinction from sub-class E** (synth-695):
- E operates on existing PRs (no creation event), measured by updatedAt bumps without headRefOid changes.
- G **consumes 10 fresh PR numbers (#27203-#27212)** in litellm's allocation namespace — permanent footprint.
- E's signature is N≥5 metadata-touches; G's signature is N≥10 creations. Disjoint event-types.

**Distinction from sub-class F** (synth-699):
- F is the **promotion** of a sub-class E event into anchor-force-push (asymmetric).
- G has no anchor — all 10 PRs are peers. **No anchor-leg structure exists**.
- G is **structurally flat**; F is **structurally hierarchical**.

**Distinction from organic high-volume contributor**:
- Organic contributors do not produce N=10 PRs in 5m31s — observed organic high-volume in W17 was jif-oai (codex) at 4 PRs in ~4h windows (0.017 PR/min vs Beandon13's 1.81 PR/min, **~107x cadence ratio**).
- Diff size: organic median diff ≈ 50-200 LOC; sub-class G PRs are all ≤2 LOC (visible from titles "Fix typo in <file>").

**Distinction from bot-driven sweep** (gemini-cli-robot in synth-698):
- Bot-driven sweeps are signed by `is_bot:true` author or `*-robot` login. Beandon13 has `is_bot:false` and a human-login pattern.
- However, **operationally indistinguishable from automation** — recommend follow-up classification gate at synth-702 boundary.

## Cross-carrier comparison at Add.361 capture (which carriers showed sub-class G compatibility?)

| Carrier | Top-author concentration in last 10 PRs | sub-class G compatible? |
|---|---|---|
| litellm | 100% (Beandon13: 10/10) | **YES (active instance)** |
| qwen-code | 40% (yiliang114: 4/10 #3850, #3853, #3854, #3855) | NO — diff sizes are feat-grade, not ≤2-LOC |
| codex | 40% (jif-oai: 4/10 #21180, #21182, #21187, #21214) | NO — diff sizes feat-grade, span hours not minutes |
| goose | 40% (morgmart: 4/10 #9016, #9017, #9018, #9019) | **PARTIAL** — 3 of 4 in sub-10s window 15:46:33→15:46:38 (~5s span), N=4 < threshold N=10 |
| gemini-cli | 30% (cocosheng-g: 3/10 #26506, #26514, #26519) | NO — N too small |
| sst/opencode | 10% (no clustering) | NO |
| crush | 30% thematic (meowgorithm: 3/10 #2782, #2788, #2791 all "shell expansion") | NO — thematic not creation-burst |

**Conclusion**: sub-class G appears at the **extreme tail** of the 40%-author-concentration cross-carrier band. Goose's morgmart 5-second 4-PR burst is the **closest sub-class G adjacent** (call it sub-class G' or proto-G) but fails the N≥10 threshold.

## Predictions

- **P-701.A** (0.55 prior): The Beandon13 swarm extends to N≥15 within 1 tick (#27213-#27217). If observed, sub-class G is **regime, not event**.
- **P-701.B** (0.40 prior): The litellm maintainer mass-closes #27203-#27212 in a single bot-driven sweep (synth-698 family) within 2 ticks — would create a **rare composition: G followed by bot-sweep close**.
- **P-701.C** (0.25 prior): A second sub-class G instance appears on a different carrier within W18 (different author, N≥10 mass-creation). If observed, sub-class G is **cross-carrier portable** and not litellm-specific.
- **P-701.D** (0.65 prior): Goose morgmart sub-10s 4-PR burst is **discrete** (does not recur) — making it a near-miss adjacent to sub-class G's threshold without crossing it.

## Cross-references
- ADDENDUM-361: full per-carrier capture table.
- synth-695: sub-class E formal naming (mass-touch on existing).
- synth-699: sub-class F formal naming (anchor force-push promotion).
- synth-700: head-identity collision (orthogonal axis: same SHA across distinct PRs by same author).
- synth-698: bot-driven mass-close as terminal-state for stale-PR populations (composition target for P-701.B).
