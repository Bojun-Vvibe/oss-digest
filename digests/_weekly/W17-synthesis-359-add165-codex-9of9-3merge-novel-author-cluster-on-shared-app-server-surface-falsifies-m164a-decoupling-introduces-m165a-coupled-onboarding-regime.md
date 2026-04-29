# W17 synth #359 — Add.165 codex 9-of-9 keystone with 3-merge intra-tick burst falsifies M-164.A surface-author-fluidity decoupling at the codex slice; introduces M-165.A "novel-author-cluster-on-shared-surface" regime

**Mission:** Evaluate synth #357 M-164.A (surface-family rotation decouples from author-pool fluidity at gemini-cli — surface fluidity dominates while author-pool bounds at 4) against new evidence at the codex slice, where Add.165 shows the inverse signature: **two NOVEL authors on a SHARED surface family** in the same intra-tick burst.

**Hypothesis under test (carry from synth #357 generalized to all sustained-active repos):** M-164.A — surface-family rotation and author-pool fluidity are decoupled axes; for any sustained-active repo, surface-rotation dominates while author-pool bounds at a small set.

**Evidence at Add.165 — codex slice:**
- 3 in-window merges across 19m51s (20:47:21Z → 21:01:12Z):
  - sayan-oai #20258 `b15074d0a42e87465a39f78f033d8e3b74db6011` 20:47:21Z `app-server: fix outgoing sender test setup`
  - rhan-oai #20050 `973c5c823ed1b8ae76ab5a677c5864f624a2fafb` 20:50:48Z `[app-server] type client response payloads`
  - xli-oai #19966 `afbddabc8bee29e72f19e866c46db9b9f7a2f836` 21:01:12Z `Require remote plugin detail before uninstall`
- **Surface family decomposition:**
  - #20258 → `app-server` cluster (test infrastructure for outgoing sender)
  - #20050 → `app-server` cluster (client response type-narrowing) — **same surface family as #20258**
  - #19966 → plugin-lifecycle UX (separate surface)
  - **2-of-3 share `app-server` family**; intra-tick surface co-occurrence
- **Author novelty decomposition (vs Add.158-164 union of 11):**
  - sayan-oai → **NOVEL** (first appearance in W17 codex slice)
  - rhan-oai → returning (last seen Add.163)
  - xli-oai → **NOVEL** (first appearance in W17 codex slice)
  - **2-of-3 are novel authors**; novel-author burst rate = 66.7%
- **Cross-product: 2 of the same-surface (`app-server`) merges include 1 novel author (sayan-oai #20258) AND 1 returning author (rhan-oai #20050)** — novel + returning AUTHORS on SHARED surface within 3m27s inter-merge delta.

**Verdict:** **M-164.A FALSIFIED at the codex slice for Add.165.** The decoupling-axes frame predicts surface-rotation per emission with author-pool boundedness; codex Add.165 shows the **inverse**: surface family REPEATS (`app-server` 2x in 3m27s) while author pool BURSTS NOVEL (2 novel authors in 1 tick, growing union 11→13). At the codex slice, **author-pool fluidity dominates and surface-family clusters** — the opposite of the gemini-cli signature.

**New class introduced — M-165.A: novel-author-cluster-on-shared-surface regime.** A repo exhibits this regime when, in a single capture window:
1. ≥2 merges share a single surface family identifier (here `app-server`).
2. ≥2 of the same-window emissions come from NOVEL authors (NOT in the prior N-tick author union, for some N≥6).
3. The novel-author and shared-surface sets **intersect** by ≥1 (a novel author lands on the shared surface, not exclusively on a separate surface).

Codex Add.165 satisfies all three: `app-server` surface family (#20258, #20050) intersects sayan-oai (NOVEL, on #20258 `app-server: fix outgoing sender test setup`).

**Specific PR-level evidence supporting M-165.A as a distinct regime from M-164.A:**

| Repo | Tick | Surface family rotation | Author novelty | Coupling | Regime |
|---|---|---|---|---|---|
| gemini-cli | Add.161-164 | 6 distinct families across 4 ticks | Pool bounded at 4 (4-of-5 returning at Add.164) | Decoupled (surface rotates, authors recur) | **M-164.A** |
| codex | Add.165 | 2 surfaces, 2-of-3 share `app-server` | Pool bursts (2 novel of 3) | Coupled (novel author lands on shared surface) | **M-165.A** |

**Why this matters — onboarding-vs-rotation distinction:**

M-164.A (gemini-cli) reads as a **maintenance-rotation regime**: a small bounded maintainer pool (adamfweidman, Adib234, gundermanc, akh64bit) cycles across many small surface fixes, each maintainer claiming a different micro-surface per tick. The repo has a stable contributor structure and a surface diversity per contributor.

M-165.A (codex Add.165) reads as a **novel-contributor-onboarding regime concentrated on a single subsystem**: two novel authors (sayan-oai, xli-oai) appear in the same tick, and one of them (sayan-oai) lands on the same `app-server` surface as a returning maintainer (rhan-oai). The signature is consistent with **a coordinated team push on a single subsystem** where novel contributors are being onboarded into an active codebase area, rather than a long-tail of independent fixes.

**The cross-repo asymmetry:**
- gemini-cli: surface-fluid, author-bounded (decoupled axes; maintenance cycling).
- codex: author-fluid, surface-clustered (coupled axes; subsystem-onboarding push).

This asymmetry contradicts the implicit assumption in synth #357 that M-164.A would generalize across sustained-active repos. **At least two distinct regimes coexist among W17's two top-active repos**, suggesting the coupling-vs-decoupling axis is itself a per-repo classifier, not a property of the W17 dispatch system.

**Falsifiable predictions:**

- **P-359.A**: codex Add.166 emits ≥1 additional `app-server` surface merge (sustained intra-subsystem cluster), and ≥1 novel author beyond {sayan-oai, xli-oai} (sustained onboarding burst). Joint prob >40%. Falsifier: Add.166 has zero `app-server` merges OR zero novel authors beyond the Add.158-165 union of 13.
- **P-359.B**: gemini-cli Add.166 (if active) emits a NEW surface family with a RETURNING author from the bounded pool, sustaining M-164.A decoupling. Falsifier: gemini-cli Add.166 emits same surface family as Add.165 OR a novel author. Joint prob >55%.
- **P-359.C**: the M-165.A "novel-author-cluster-on-shared-surface" signature recurs at codex within Add.166-Add.172 (7-tick window). Prob >40% under the onboarding-regime hypothesis. Falsifier: zero codex ticks in Add.166-172 with both ≥2 novel authors AND ≥2 same-surface merges.
- **P-359.D**: the M-165.A regime does NOT recur at gemini-cli within Add.166-Add.172 (gemini-cli stays in M-164.A regime). Prob >70%. Falsifier: gemini-cli emits a tick with ≥2 novel authors AND ≥2 same-surface merges.
- **P-359.E**: across W17 Add.157-Add.180, codex's per-tick novel-author rate exceeds gemini-cli's by ≥2× (codex onboarding-dominant; gemini-cli rotation-dominant). Falsifier: ratio drops below 2× at Add.180.

**Distinctness from prior synths:**

- **vs synth #357 (M-164.A surface-author-fluidity decoupling at gemini-cli):** #357 establishes decoupling at gemini-cli; #359 demonstrates the OPPOSITE coupling at codex, falsifying the implicit generalization.
- **vs synth #354 (M-162.C author-pool-fluidity at gemini-cli):** #354 is gemini-cli-only and treats fluidity as a per-repo invariant; #359 generalizes the question to coupling-vs-decoupling and shows that fluidity has different STRUCTURES (clustered vs distributed) per repo.
- **vs synth #350 (active-set cardinality dynamics):** #350 is about which repos are active per tick; #359 is about HOW a repo is active when it is — the within-tick coupling structure between author-pool and surface-family axes.
- **vs synth #228 (dormancy-metastability frame):** orthogonal — #228 governs silent-tick dynamics; #359 governs active-tick internal structure.

**Cross-references:** synth #357 (M-164.A origin, falsified at codex slice here), synth #354 (M-162.C author-pool boundedness at gemini-cli, undisturbed), Add.165 (this synth's pivot evidence, codex 9-of-9 streak with 3-merge burst), Add.164 (gemini-cli M-164.A baseline), Add.158 (codex author-broadening regime origin).
