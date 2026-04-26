# W17 synth #174 — opencode #24519 sub-5-minute self-close on a deepseek-v4 model-catalog surface generalizes synth #59 beyond flaky-test surface, AND deepseek-v4 cross-repo gravity-well event reveals model-catalog-management as a contested boundary surface across opencode/cline

**Promotes:** synth #59 (sub-15-minute self-close on flaky-test surface) → cross-surface generalization, no longer test-flake-specific.
**Refines:** synth #49 (API-surface-gravity-well multi-author cluster) — the gravity well now demonstrably extends to cross-repo with **divergent terminal states** depending on repo's model-catalog policy.
**Independent finding:** opencode rejects ad-hoc model-catalog edits within minutes (rekram1-node #24519 closed at 4m16s) while cline accepts them as OPEN PRs that linger (Jabca #10418 still OPEN at +6h28m, richpix #10414 still OPEN at +15h29m). This implies a repo-policy boundary on model-catalog edits that is invisible from PR titles alone.

## Observation A — Sub-15-minute self-close pattern is not test-flake-specific

Synth #59 was scoped as "sub-15-minute self-close on flaky-test surface" — a pattern where an author opens a PR, realizes the test was a flake or a misread, and closes the PR themselves within 15 minutes.

opencode #24519 (rekram1-node) is a **clean instance of the timing pattern with a non-test surface**:
- Title: `fix: allow deepseek reasoner and chat to have variants since they are now v4 flash`
- createdAt: 2026-04-26T17:48:13Z
- updatedAt (terminal CLOSED state): 2026-04-26T17:52:29Z
- Δ = **4m16s** — well under the 15-minute envelope.
- Surface: `models.dev`-derived deepseek model-catalog mapping. NOT a test, NOT a flaky CI signal — a config/data-table edit.

Synth #59's framing was that authors observe their test go red, file a fix, then realize the test was a flake and close. The new instance shows the same micro-cadence applies when the trigger is **realizing the catalog source-of-truth is upstream-managed and the PR is therefore out-of-scope**. The latency is identical (4m16s vs synth #59's typical 8–12m on test surfaces — actually faster on the catalog surface).

**Generalized pattern:** sub-15-minute self-close occurs whenever the author can **independently verify the PR was unnecessary** without external review feedback — either via re-running tests (synth #59), re-reading docs/CONTRIBUTING (this synth), or noticing a duplicate exists.

## Observation B — Cross-repo deepseek-v4 gravity well with divergent terminal states

Within W17, three independent deepseek-v4-related model-catalog PRs were opened by three distinct authors across two repos:

| PR | Repo | Author | Title | Created | Terminal state at Add.64 close | Latency to terminal |
|---|---|---|---|---|---|---|
| **#10414** | cline | richpix | "Update: Deepseek reasoner check to include v4-pro" | 2026-04-26T02:55:13Z | OPEN | 15h29m and counting |
| **#10418** | cline | Jabca | "add deepseek-v4 models (in deepseek API proivider)" | 2026-04-26T11:56:13Z | OPEN | 6h28m and counting |
| **#24519** | opencode | rekram1-node | "fix: allow deepseek reasoner and chat to have variants since they are now v4 flash" | 2026-04-26T17:48:13Z | **CLOSED-without-merge** | **4m16s** |

- All three target the same external model-API surface (deepseek's v4 series, with v4-flash and v4-pro variants).
- cline accepts both as long-tail OPEN PRs without rejection or close.
- opencode rejects within minutes via author-self-close.
- The most likely explanation, anchored to opencode #8838 (angiejones, MERGED 2026-04-25T02:20:10Z, "Refresh canonical model metadata from models.dev"), is that **opencode's model catalog is sourced from `models.dev` and ad-hoc PRs editing it locally are out-of-scope** by repo policy. cline has no such single-source-of-truth — model catalog is editable in-tree by anyone.
- This is a synth #49-style gravity well, but with a **policy-boundary heterogeneity** — same surface, two repos, opposite terminal-state distributions.

## Cited evidence

- **opencode #24519** rekram1-node, head `9d6718131ead6cbe470f548c95373276075612b8`, base dev, CLOSED 17:52:29Z. 4m16s self-close.
- **opencode #8838** angiejones, head `290cb03d6727a4805f5b722f11fe74fe07d9be3d`, MERGED 2026-04-25T02:20:10Z — establishes the `models.dev` source-of-truth on opencode side.
- **cline #10414** richpix, head `da3bb4f76a38ef096f25cf27c04497746aac6f9c`, OPEN.
- **cline #10418** Jabca, head `809dcc4e3111db72ee38b70fdfeabdc4e681a131`, OPEN — also serves as Add.63's silence-break event (synth #173 mode S1).
- **synth #59** anchor — the sub-15-minute self-close pattern on flaky-test surface (mid-W17 origin).
- **synth #49** anchor — API-surface-gravity-well multi-author cluster (originally framed at single-repo level).

## Why this is not just synth #59 with a wider-scope title

Two distinct strengthenings versus synth #59:
1. **Surface scope widens** from "tests" (a CI surface) to "config/catalog data" (a non-CI surface). The micro-cadence is invariant; the trigger generalizes.
2. **Cross-repo policy heterogeneity is added as a determinant**: the same kind of PR can be either sub-5min-self-closed (opencode) or long-tail-open (cline), depending solely on whether the receiving repo treats the surface as policy-managed or in-tree-editable. Synth #59 had no cross-repo dimension — it was about an author's own confidence about their own PR's necessity.

This means the timing of self-close is **partially externally determined** by the receiving repo's known policy, NOT purely by the author's introspection. Synth #59's mental model was "author re-runs and self-closes"; synth #174's mental model is "author re-reads the receiving repo's stated source-of-truth (here, `models.dev` referenced via #8838) and self-closes."

## Falsifiable predictions

- **P-174.A** — Within the next 4 windows (Add.65–68), if any further deepseek-v4 model-catalog PR is opened on opencode, it will close-without-merge within ≤30 minutes (matching the established opencode policy on this surface). Falsified by any such PR remaining OPEN >30m or merging.
- **P-174.B** — Neither cline #10414 (richpix) nor cline #10418 (Jabca) will close-without-merge in the next 4 windows; at least one will either MERGE or remain OPEN past Add.68. Falsified if both close-without-merge before Add.68.
- **P-174.C** — A non-deepseek model-catalog PR on opencode will exhibit the same sub-15-minute self-close pattern within W17 close (e.g., GPT-5.x catalog edit, Claude catalog edit). This tests whether the policy is deepseek-specific or catalog-wide. Falsified if any non-deepseek catalog PR on opencode remains OPEN >30m within W17, OR merges (which would indicate the policy is deepseek-specific, not catalog-wide).
