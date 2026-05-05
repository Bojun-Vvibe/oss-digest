# W17-synthesis-679 — silent-force-push consolidation sub-mode-4 saturates to 4-carrier W17 class via simultaneous wenshao cross-anchor + ben-wangz first-appearance-author dual instantiation

**Tick anchor**: ADDENDUM-348 (2026-05-05T08:05Z–08:55Z capture window).

**Synthesis claim**: The silent-force-push consolidation sub-mode-4 (synth-677) reached 4-carrier W17-saturating coverage in this single 50m window through **two simultaneous instantiations on previously-unrepresented carriers under two structurally novel propagation variants**: (1) **wenshao on QwenLM/qwen-code #3844** force-pushes a *second* anchor disjoint from the prior #3842 instance (Add.346) — establishing **same-author cross-anchor propagation** within sub-mode-4; (2) **ben-wangz on BerriAI/litellm #27176** force-pushes within ~1h05m of fresh-open as a first-appearance W17 author — establishing **first-appearance-author rapid-onset propagation** within sub-mode-4. Sub-mode-4 now has W17 instances on opencode, qwen-code, gemini-cli, and litellm; only codex and crush (both currently quiescent) lack a W17 instance.

## Event reconstruction

Verified per `gh pr list --repo <r> --state all --limit 15..20 --json number,title,headRefOid,author,state,mergedAt,updatedAt,createdAt,closedAt,url` against snapshot 2026-05-05T09:02:04Z UTC.

### Instance #4 — qwen-code #3844 (wenshao, same-author cross-anchor)

- PR #3844, title `feat(tools): add WebSearch tool with prompt-injection defenses`.
- createdAt 2026-05-05T05:40:31Z (pre-Add.347 window).
- Add.347 head (snapshot @ 08:09:30Z): `6107615eded17a3863db2df7e1d835e17c2c3f78`.
- Add.348 head (snapshot @ 09:02:04Z): **`7f06fee3ed2aa9e0bd0ceab64a9d8a21e4d894f2`**.
- updatedAt 2026-05-05T08:48:23Z (within Add.348 capture window 08:05–08:55Z).
- mergedAt: null; state OPEN.
- **Same-author antecedent**: wenshao previously force-pushed #3842 (`feat(core): add signal.reason convention for ShellExecutionService (#3831 PR-1 of 3)`) during Add.346 capture window — that head changed to `8e8e18ca7f44441fb20d74369f06c8a481212101` and remains unchanged through Add.347–348.

### Instance #5 — litellm #27176 (ben-wangz, first-appearance-author rapid-onset)

- PR #27176, title `[Fix] Helm: honor external DB secret in standalone mode`.
- createdAt 2026-05-05T07:48:01Z (Add.347 capture window).
- Add.347 head (snapshot @ 08:09:30Z): `40623d956137a83fff08cf4068a0ff12b79be6fd`.
- Add.348 head (snapshot @ 09:02:04Z): **`d5a46747d6195426b788a170490097c80ab72fbb`**.
- updatedAt 2026-05-05T08:53:36Z (within Add.348 capture window).
- mergedAt: null; state OPEN.
- **Author lineage**: ben-wangz is a first-appearance W17 author on the litellm carrier (no prior carry-forward heads, no prior PR activity within W17 sub-cycle visible in `gh pr list --limit 20`).
- **Force-push lag**: 1h05m35s from fresh-open (07:48:01Z) to first head-change (08:53:36Z) — the **earliest sub-mode-4 instantiation lag observed in W17**; prior W17 sub-mode-4 lags ranged from ~2h (LifetimeVip #25823 Add.345) through ~6h+ (rushikeshsakharleofficial #26490 Add.347, ~9h+ on #25823 Add.345 force-pushes).

## Sub-mode-4 W17 saturation table

| Instance | Tick | Carrier | PR # | Author | Anchor SHA after force-push | Propagation variant |
|---:|---|---|---:|---|---|---|
| #1 | Add.345 | sst/opencode | #25823 | LifetimeVip | `b076296...` | original (single-anchor multi-tick) |
| #2 | Add.346 | QwenLM/qwen-code | #3842 | wenshao | `8e8e18c...` | cross-carrier (carrier-pair) |
| #3 | Add.347 | google-gemini/gemini-cli | #26490 | rushikeshsakharleofficial | `2d82841...` | cross-carrier (3-carrier W17-portable, synth-677) |
| #4 | Add.348 | QwenLM/qwen-code | #3844 | wenshao | **`7f06fee...`** | **same-author cross-anchor (NEW)** |
| #5 | Add.348 | BerriAI/litellm | #27176 | ben-wangz | **`d5a4674...`** | **first-appearance-author rapid-onset (NEW)** |

Carriers covered after instance #5: opencode, qwen-code, gemini-cli, litellm = **4 of 7 W17-carrier set**. Carriers without W17 sub-mode-4 instance: openai/codex (currently 100m carrier-quiescent), block/goose, charmbracelet/crush.

## Two structurally novel propagation variants in one window

### Variant A — same-author cross-anchor (wenshao)

- Prior sub-mode-4 instances #1–#3 each occurred on a **single anchor per author**: LifetimeVip's #25823 was the sole LifetimeVip sub-mode-4 anchor; rushikeshsakharleofficial's #26490 likewise (his second OPEN #26489 did **not** receive a force-push, per Add.347).
- wenshao's #3844 force-push **co-exists** with his still-extant #3842 force-push (Add.346) on a disjoint feature surface (WebSearch tool vs ShellExecutionService signal.reason convention). The two anchors share no file paths and serve unrelated functional axes.
- This establishes that sub-mode-4 is **author-portable across anchors within the same carrier**, not just carrier-portable across authors. Combined with the carrier-portability already established by synth-677, sub-mode-4 is now fully decoupled from both author-identity and carrier-identity.

### Variant B — first-appearance-author rapid-onset (ben-wangz)

- Prior sub-mode-4 instances #1–#4 all involved authors with **prior W17 footprint** at the time of force-push (LifetimeVip had a closed-then-reopened lineage; wenshao was deeply embedded in qwen-code with multiple anchors; rushikeshsakharleofficial had pre-existing #26345 multi-agent OPEN before #26489+#26490).
- ben-wangz has no prior W17 carry-forward visible in current `gh pr list --limit 20` output for litellm; #27176 is his first W17 PR.
- The ~1h05m lag from fresh-open to force-push is **shorter than any prior W17 sub-mode-4 instantiation lag** by a factor of ≥2×.
- This establishes that sub-mode-4 does **not require multi-tick anchor age or author-tenure** to instantiate. The minimum instantiation latency lower-bound is now ~1h.

## Hypotheses for sub-mode-4 saturation timing

1. **Cross-author propagation by mimicry / observation** (prior 0.20): authors observe each other's force-push behavior in dependency communities and adopt it. Falsification: ben-wangz works on Helm subsystem with no overlap to wenshao/rushikeshsakharleofficial communities; mimicry implausible.
2. **Independent-discovery convergence under shared W17 CI ergonomics** (prior 0.50): each carrier's CI ergonomics during W17 (likely a transient state of the global GitHub Actions / branch-protection landscape) make silent force-push the path-of-least-resistance for OPEN-PR iteration. Multiple authors independently arrive at the same recovery pattern. Supported by the variant-diversity (cross-anchor, first-appearance, original-anchor-iteration) — different sociological pressures converge on the same mechanic.
3. **Sampling artifact under high-velocity capture cadence** (prior 0.20): the 50m capture cadence catches force-push events that would otherwise be invisible at lower-frequency sampling; sub-mode-4 has always been frequent but only visible under W17 capture density. Partially testable by re-running W16 captures at 50m cadence — out of scope.
4. **Tooling-side change in W17** (prior 0.10): a `gh` CLI release or GitHub UI change in W17 introduces a default-silent-force-push path. Not verified; would require external corroboration.

Hypothesis 2 (independent-discovery convergence) is preferred given variant diversity within the same 50m window.

## Predictions descended from sub-mode-4 4-carrier saturation

- **P-679.A**: A 5th distinct W17 carrier instance lands within next 3 ticks (Add.349–351) — most likely on sst/opencode (Brendonovich, Hona, or maxkomarychev). Prior 0.55. Fifth-carrier-saturation marker.
- **P-679.B**: ben-wangz #27176 receives a second silent force-push within next 2 ticks (rapid-onset variant correlates with iteration-prone signature). Prior 0.40.
- **P-679.C**: wenshao force-pushes a third anchor (beyond #3842 and #3844) within next 2 ticks, OR re-force-pushes one of the existing two. Prior 0.50 (wenshao's same-author cross-anchor footprint suggests further iteration).
- **P-679.D**: At least one sub-mode-4 instance from #1–#5 transitions to MERGED state within next 3 ticks (Add.349–351). Prior 0.50 (so far #1 LifetimeVip #25823 closed without merge, the rest are still OPEN; probability of at least one merging on a 3-tick horizon is moderate).
- **P-679.E**: A sub-mode-4 instance lands on either openai/codex or charmbracelet/crush (the two currently sub-mode-4-empty carriers) within next 4 ticks (Add.349–352). Prior 0.30 (both carriers currently quiescent or low-velocity; rebound timing uncertain).
- **P-679.F**: No two sub-mode-4 instantiations land within the same 50m window again in next 3 ticks (Add.348's dual-instance density is rare). Prior 0.65.

## Operational implications

Sub-mode-4 is now a **W17-saturating primitive**. Future digest sections should record sub-mode-4 instances inline within carrier sub-sections rather than highlighting each as cross-carrier event of note — the pattern has crossed the carrier-portability threshold and individual instances are no longer surprising. **Cross-carrier event status should be reserved for novel sub-modes (e.g. sub-mode-5 or sub-mode-6 candidates)**, sub-mode-4 variant discoveries (e.g. cross-anchor, rapid-onset), or sub-mode-4 saturation milestones (e.g. first instance on codex/crush).
