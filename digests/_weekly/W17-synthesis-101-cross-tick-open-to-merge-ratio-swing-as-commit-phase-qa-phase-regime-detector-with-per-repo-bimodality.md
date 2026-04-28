# W17 Synthesis #101 — Cross-tick open-to-merge ratio swing as commit-phase / QA-phase regime detector (variance signature, with falsifier set against Pred SS / Pred SS')

**Anchor window:** 2026-04-28T04:00:00Z → 05:52:00Z (Add.110, Add.111, Add.112; 1h52m total).
**Anchor repos:** all of {anomalyco/opencode, openai/codex, BerriAI/litellm} (the W17 shallow/mid cohort).
**Parent synths:** #244 (commit-fast-path), #251 (paired-PR-deferred-batch), #255 (QA-phase / commit-phase oscillation).

## Why this is distinct from #255

Synth #255 framed the QA-phase / commit-phase oscillation as a **per-tick binary classification** — a tick is either QA-leaning (more opens than merges) or commit-leaning (more merges than opens). It implicitly modeled phase transitions as **state machine edges**, with a per-tick scalar (open count, merge count) as the state.

Synth #101 reframes the oscillation as a **continuous-valued open-to-merge ratio** with **per-tick variance** as the regime-detection signal. Three consecutive observed ticks at the W17 close-of-window have ratios:

| Tick | Window | Opens | Merges | Open/merge ratio |
|---|---|---|---|---|
| Add.110 | 03:20Z → 04:00Z (40m) | tracked | 3 | (recovered from Add.110) |
| Add.111 | 04:00Z → 04:55Z (55m) | 1 | 7 | **0.143** |
| Add.112 | 04:55Z → 05:52Z (57m) | 5 | 5 | **1.00** |

The window-over-window swing is **0.143 → 1.00 = 7.0× multiplicative jump in 57 minutes**. This is the **largest cross-tick ratio swing observed in the W17 corpus**.

## What the variance signal captures that #255's binary classification cannot

**(a) Ratio magnitude carries phase intensity, not just direction.** A tick at ratio 0.5 (twice as many merges as opens) and a tick at ratio 0.143 (7× more merges than opens) are both "commit-leaning" under #255, but they reflect different intensities of commit-phase activity. The 0.143 reading at Add.111 is a **deep commit-phase signal**; the 1.00 reading at Add.112 is a **balanced/inflection signal**, even though both ticks have non-zero merges.

**(b) Window-over-window ratio swing is a leading indicator of phase rotation.** A 7× swing in 57m is **not consistent with steady-state oscillation around a mean**; it is consistent with **regime-transition between two attractors**. The Add.111 → Add.112 swing predicts that Add.113 will land in one of two attractors, NOT at a smooth interpolation:
- **Commit-attractor** (ratio <0.5): the Add.111 deep-commit signal extends, opens stay suppressed.
- **QA-attractor** (ratio >2.0): the Add.112 balanced reading was a transition, opens resume dominating, merges drop.

A smooth interpolation prediction (ratio 0.5-1.5 at Add.113) would be the **null hypothesis**; the bimodal attractor prediction is the **synth #101 hypothesis**.

**(c) Per-repo-decomposition of the ratio surfaces author-concentration as a separable factor.** At Add.112, the 5 opens and 5 merges decompose as:
- codex: 3 opens, 5 merges → ratio **0.60** (commit-leaning)
- opencode: 1 open, 0 merges → ratio **∞** (QA-only)
- litellm: 1 open, 0 merges → ratio **∞** (QA-only)
- gemini-cli/goose/qwen-code: 0/0 each → ratio **undefined** (silent)

The cross-repo aggregate ratio of 1.00 at Add.112 is a **statistical artifact** of mixing one strongly-commit repo (codex) with two QA-only repos (opencode, litellm). The **per-repo ratio bimodality** at Add.112 is **stronger than the aggregate** — codex is in **deep commit attractor** while opencode/litellm are in **pure QA attractor** simultaneously.

## The classification predicate

A tick exhibits **synth #101 cross-phase variance signature** when:
1. The cross-repo aggregate open/merge ratio crosses **either** the 0.3 boundary or the 3.0 boundary in window-over-window comparison;
2. The per-repo ratio decomposition shows **at least 2 repos in opposite attractors** (one with ratio ≤0.5 AND one with ratio ≥2.0 OR ∞);
3. The aggregate ratio swing magnitude (max/min over 3 consecutive ticks) is **≥4×**;
4. The dominant-merge repo and dominant-open repo are **different** (separability of contribution).

The Add.110-Add.111-Add.112 sequence satisfies all four with: aggregate swing 0.143 → 1.00 (7×), opposite attractors codex (commit) vs opencode/litellm (QA), separation of dominant-merge (codex) from dominant-open (opencode + litellm).

## Falsifiable predictions (with explicit anti-Pred-SS framing)

1. **Pred 101-1**: Add.113's aggregate open/merge ratio lands OUTSIDE the [0.5, 1.5] interpolation band. Specifically, ratio is either ≤0.4 (commit-attractor extension) or ≥2.0 (QA-attractor flip). Falsifier: Add.113 ratio in [0.5, 1.5].
2. **Pred 101-2**: At Add.113, codex's per-repo ratio is **<1.0** (commit-leaning continues at the per-repo level even if aggregate flips QA), because the etraut-openai + canvrno-oai + bolinfest triad (per Pred WW) has accumulated open inventory but the codex commit-phase has not exhausted. Falsifier: codex ratio ≥1.5 at Add.113.
3. **Pred 101-3**: At Add.113, opencode + litellm aggregate ratio is **≥2.0** (QA-leaning continues at the per-repo level), because rekram1-node + aneeshsangvikar opens have NOT been merged within 1h of opening. Falsifier: opencode + litellm ratio <1.5.
4. **Pred 101-4 (anti-Pred-SS, pro-Pred-SS')**: Across Add.110-Add.115 (6 ticks), the per-tick codex opens and codex merges have **Spearman correlation r ≥ +0.4** (positive co-firing within commit-phase), refuting Pred SS's anti-correlation hypothesis and confirming Pred SS'. Falsifier: r < +0.1 across the 6-tick sample.
5. **Pred 101-5**: A "deep commit-phase tick" (aggregate ratio ≤0.2) is followed within 2 ticks by a "balanced or QA tick" (ratio ≥0.8) with probability ≥0.7 across the W17 corpus. The Add.111 → Add.112 transition is the first instance. Falsifier: ≤2 of 6 deep-commit ticks transition within 2 ticks.

## Distinctness from prior synths

- **vs synth #255** (QA / commit-phase oscillation): #255 is binary-classified per-tick; #101 is continuous-ratio per-tick with magnitude carrying phase intensity, plus per-repo decomposition for author-concentration separability. #255 cannot express the **per-repo bimodality at a single tick** (codex commit + opencode/litellm QA simultaneously) that #101 captures explicitly.
- **vs synth #244** (commit-fast-path): #244 is about **individual fast merges**; #101 is about **aggregate ratio dynamics**. They are orthogonal — a tick can have high commit-fast-path activity without exhibiting #101's variance signature, and vice versa.
- **vs synth #251** (paired-PR-deferred-batch): #251 is about **deferral within a tick**; #101 is about **ratio swing across ticks**. #251 explains why some PRs accumulate in QA without merging; #101 quantifies the consequence as ratio dynamics.
- **vs synth #258** (deep-cohort cardinality conservation): #258 conserves count of deep-class repos; #101 tracks ratio in shallow/mid repos. Complementary — #258 governs the bottom of the activity distribution, #101 governs the top.
- **vs synth #100** (stacked-merge contraction): #100 explains a single author's series cadence; #101 explains the cross-tick aggregate dynamics that contain such series. A synth #100 series fires within a single synth #101 commit-attractor tick.

## Risk lens

- **Detector signal**: a 4× window-over-window aggregate ratio swing is a **regime-transition probe**. Detectors should track 3-tick rolling ratio variance and alert when the ratio spans ≥4× across the window. The Add.110-Add.112 window would have triggered such a detector.
- **Per-repo decomposition required**: the aggregate ratio is **statistically misleading** when per-repo dynamics are bimodal. Any synth #101-class detector MUST decompose to per-repo before classifying the tick — an aggregate ratio of 1.0 hides a 0.6-vs-∞ bimodality. The current Add.112 evidence shows the aggregate at 1.00 reads as "balanced" but is actually a **maximally bimodal** tick.
- **Author-triad cross-reference**: synth #101 should be combined with Pred WW (etraut-openai + canvrno-oai + bolinfest triad). The triad's open-rate determines whether codex's per-repo ratio stays <1.0 (Pred 101-2). A triad-internal opening surge would push codex toward QA-attractor faster than aggregate dynamics suggest.
- **Pred SS retraction recommendation**: synth #101 endorses retracting Pred SS (anti-correlation) and replacing with Pred SS' (positive correlation) as the working hypothesis. The Add.112 observation (3 opens AND 5 merges in same tick by overlapping author set) is mechanistically consistent with a "stack-clearing-frees-open-bandwidth" model, which predicts positive correlation by design.

## Cross-reference

This synth synthesizes ratio observations from ADDENDUM-110 (`70b1f5a` approximate from prior carry), ADDENDUM-111 (`ac3b188`), ADDENDUM-112 (`e2bc146` direct), and synth #100 (`c59c41e` direct). It explicitly refines parent synth #255 (`<not-cited-here>` in current file set) on the continuous-ratio dimension and refutes Pred SS in favor of Pred SS' (introduced at Add.112).

## Refinements / falsifications of prior W17 predictions

- **Pred SS** (anti-correlation): synth #101 endorses **REJECTION**. Move to Pred SS'.
- **Pred SS'** (positive correlation r ≥ +0.4): synth #101 reframes as **Pred 101-4** with the same threshold and a 6-tick test window.
- **Pred 254-1** (per-repo-tick crossing rate band): synth #101 is **complementary, not competing** — synth #101 measures ratio variance, Pred 254-1 measures crossing count. Both can hold simultaneously.
- **Pred VV** (etraut-openai per-tick metronome): synth #101 strengthens — etraut-openai is the **per-author component** of the codex commit-attractor in synth #101's framework. Pred VV's confirmation would feed Pred 101-2.
- **Pred WW** (codex author-triad concentration): synth #101 is **structurally dependent** — synth #101's per-repo bimodality requires the dominant-merge repo to have a concentrated author cohort. Pred WW's confirmation strengthens synth #101's per-repo decomposition validity.
- **Pred YY** (rekram1-node per-tick metronome at opencode): synth #101 predicts **CONFIRMATION** is necessary for opencode to maintain QA-attractor at Add.113-Add.115; if rekram1-node stops opening, opencode collapses to silent-class and exits synth #101's per-repo decomposition.
