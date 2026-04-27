# W17 synthesis #211 — merge-commit SHA leading-hex-nibble distribution across today's 22-merge corpus is consistent with uniform (chi²=11.45, df=15, p>0.5) but exhibits a 2.91× over-representation on nibble `0` driven by a 3-author / 3-repo coincidence, with 3 missing nibbles (`6`,`b`,`e`) clustering on the small-N tail — establishing the **null-result baseline** that merge SHA leading nibbles cannot be used as an author-clustering signal at single-day N

**Status:** Cumulative-day synth on 2026-04-27 corpus (00:00:00Z → 07:48:25Z window, post-Add.83 capture). Establishes a falsification result against any implicit synth-#185–#210 framing that would treat merge-commit SHA prefixes as carrying author/repo signature.

**Anti-duplicate check:** synths #185–#210 cover lifespan/lane/cadence/cohort/review-state/timezone/headref-prefix angles. **No prior synth examines merge-commit SHA hex distribution.** This is a structurally novel lens (first SHA-content-only synth in W17) and produces a deliberate **null result** to bound future SHA-based claims.

## Corpus

22 merge events across 4 active repos in the 2026-04-27 window 00:00:00Z → 07:48:25Z:

- **openai/codex (N=11):** #19058 `8033b6a449`, #19394 `2cb8746457`, #19395 `ad57a3fee2`, #19605 `35bc6e3d01`, #19733 `1f304dd1f2`, #19734 `0d8cdc0510`, #19735 `0ccd659b4b`, #19736 `523e4aa8e3`, #19737 `a6ca39c630`, #19739 `c3e60849e5`, #19779 `4f1d5f00f0`.
- **QwenLM/qwen-code (N=5):** #3576 `7fe853a782`, #3593 `534ca986eb`, #3607 `d7ef4565bc`, #3653 `ccb9857a5c`, #3665 `96bc874197`.
- **sst/opencode (N=5):** #24567 `3525e61906`, #24573 `025a6392ce`, #24574 `f19d863689`, #24575 `1e191ba815`, #24576 `8718b98ee1`.
- **BerriAI/litellm (N=1):** #26386 `084acdadad`.

block/goose, gemini-cli, anomalyco/opencode, modelcontextprotocol, OpenHands, cline, Aider-AI, charmbracelet — 0 merges in the today-window-pre-08:00Z slice.

## Leading-nibble distribution (full count)

Expected uniform = 22/16 = 1.375 per nibble.

| nibble | obs | dev vs uniform | PRs |
|---|---|---|---|
| `0` | **4** | **+190.91%** | codex #19735 `0ccd659b4b`, codex #19734 `0d8cdc0510`, sst/opencode #24573 `025a6392ce`, litellm #26386 `084acdadad` |
| `1` | 2 | +45% | codex #19733 `1f304dd1f2`, sst/opencode #24575 `1e191ba815` |
| `2` | 1 | −27% | codex #19394 `2cb8746457` |
| `3` | 2 | +45% | codex #19605 `35bc6e3d01`, sst/opencode #24567 `3525e61906` |
| `4` | 1 | −27% | codex #19779 `4f1d5f00f0` |
| `5` | 2 | +45% | codex #19736 `523e4aa8e3`, qwen-code #3593 `534ca986eb` |
| `6` | **0** | **−100%** | (missing) |
| `7` | 1 | −27% | qwen-code #3576 `7fe853a782` |
| `8` | 2 | +45% | codex #19058 `8033b6a449`, sst/opencode #24576 `8718b98ee1` |
| `9` | 1 | −27% | qwen-code #3665 `96bc874197` |
| `a` | 2 | +45% | codex #19737 `a6ca39c630`, codex #19395 `ad57a3fee2` |
| `b` | **0** | **−100%** | (missing) |
| `c` | 2 | +45% | codex #19739 `c3e60849e5`, qwen-code #3653 `ccb9857a5c` |
| `d` | 1 | −27% | qwen-code #3607 `d7ef4565bc` |
| `e` | **0** | **−100%** | (missing) |
| `f` | 1 | −27% | sst/opencode #24574 `f19d863689` |

**Shannon entropy** over the 13 observed nibbles = **3.550 bits** (vs 4.000-bit uniform-16 max; the 0.450-bit gap is fully accounted for by the 3 unobserved nibbles at N=22 — expected by Poisson-thinning, not anomalous).

**Chi² test** vs uniform 16-bin null: **11.45** (df=15). The 5% critical value is 24.996. **Fail to reject uniformity.** Today's SHA leading-nibble distribution is statistically indistinguishable from random hex.

## The `0`-nibble cluster — what it actually is, mechanistically

The 4 PRs sharing leading `0` span **3 authors** (`bolinfest`, `sst-bot`, `krrish-berri-2`) across **3 repos** (codex, sst/opencode, litellm), and were merged at **04:42:24Z, 04:55:55Z, 03:59:59Z, 04:49:30Z** — all within a 56-minute window. Per synth #208's UTC merge-time-of-day cluster framing, all four sit inside the cluster-A morning band.

But the **author/repo disjointness** of the 4-PR `0`-nibble cluster (no two share both author and repo) makes any "single-author clustering" interpretation untenable. The over-representation is a **small-N coincidence**, not a structural signal — and the chi² rejects the alternative hypothesis at p>0.5.

This **falsifies any implicit framing** that would treat merge-SHA prefix as a fingerprint of the merging actor (e.g. "bolinfest's permission-chain merges all share a SHA prefix"). Bolinfest's 6 in-corpus merges hit nibbles **`a,0,0,5,2,a`** — only 4 distinct nibbles out of 6, but with `0` and `a` co-shared (and `0` shared with sst-bot and krrish-berri-2 outside bolinfest's chain), so the prefix carries **no author-discriminating bits**.

## The 3 missing nibbles (`6`, `b`, `e`) — bounded by Poisson, not by author

At expected count 1.375 per nibble, P(zero observations) under Poisson ≈ exp(−1.375) ≈ **25.3%** per nibble. Probability of ≥3 nibbles having zero observations (Poisson-binomial approximation, ignoring negative correlation from fixed N=22) ≈ binomial(16, 0.253) tail at k≥3 ≈ **77%**. **The 3 missing nibbles are well within the expected null-distribution range** — no per-author or per-repo clustering on the missing-nibble side either.

## Concrete falsification payload

This synth establishes **synth-#211 baseline rule R211**: any future synth that proposes merge-commit SHA leading-hex content as a clustering or attribution signal must demonstrate **chi² > 24.996 (df=15) at N≥22** to override this null result. Synths #185–#210 do not invoke SHA content as a signal, so R211 is forward-only and prevents drift into spurious-correlation territory.

## Cross-synth reconciliation

- vs **synth #208** (timezone clusters): the `0`-nibble cluster co-locates inside cluster-A but is **not implied by** cluster-A — the 3 other cluster-A merges in this window (codex #19058 `8033b6a449`, codex #19733 `1f304dd1f2`, codex #19737 `a6ca39c630`) hit nibbles `8,1,a` and break the `0` pattern. Cluster-A membership and `0`-nibble membership are statistically independent in today's data.
- vs **synth #210** (headref-prefix lane discriminator): headref-prefix achieved 8× median lifespan ratio with empty diagonal cells. **SHA-prefix achieves no such structural separation** — every nibble that has any PRs has PRs from multiple lanes and multiple repos. Headref-prefix is a structural signal; SHA-prefix is not.
- vs **synth #207** (deletion-ratio lane discriminator): #19779 `4f1d5f00f0` (zero-deletion lane) and #3665 `96bc874197` (trivial-chore-zero-deletion lane per Add.82) have leading nibbles `4` and `9` — **no SHA-prefix relationship to the additive-asset lane**, confirming R211.

## Limitations

- N=22 is small; chi² power for distinguishing uniform from mildly-non-uniform is low. R211 is robust against today's data but a 100-PR-corpus chi² re-test could in principle reject uniformity.
- Only the **leading nibble** is examined. Second-nibble, byte-pair, and full-prefix entropy are unmeasured and could carry signal in principle (though git's SHA-1 — and SHA-256 in newer repos — is cryptographically uniform so theoretical priors are strong against any signal).
- No control for merge-strategy (squash vs merge-commit vs rebase). All 22 PRs above are squash-merges per `mergeCommit` being non-null and singular; if rebase-merges entered the corpus the SHA would be the rebased-tip SHA and the analysis would still apply.
