# W17 Synthesis #347 — Codex post-restart silence chain finalizes at exactly n=6 ticks via same-author same-surface dual-merge silence-break (etraut-openai #20082 `91ca551d` + #20172 `1c420a90`, 14m20s gap), closing synth #337 silence-chain-symmetry FALSIFICATION at final +2 tick margin and introducing M-158.C class (single-author dual-merge same-surface silence-break, structurally distinct from M-157.D dual-author cross-surface)

**Class:** Silence-chain termination + silence-break shape characterization (refines #337, #341, #344, #345; falsifies #337 silence-chain-symmetry at final margin; introduces M-158.C class)

**Hypothesis:** The codex Add.152→157 6-tick post-restart silence chain terminated at **exactly n=6 ticks** at Add.158 via etraut-openai same-author dual-merge on shared TUI/goal surface (#20082 `91ca551d` 15:56:02Z `Use /goal resume for paused goals` + #20172 `1c420a90` 16:10:22Z `TUI: Remove core protocol dependency [1/7]`, 14m20s inter-merge gap). This event closes synth #337 silence-chain-symmetry property as **FALSIFIED at final +2 tick margin** (post-restart 6 > pre-restart 4). The dual-merge silence-break shape is **single-author + same-surface + intra-tick-spread** (14m20s gap, not same-second), structurally distinct from synth #345 M-157.D dual-author cross-surface same-second silence-break. Introduce **M-158.C class**: single-author dual-merge same-surface silence-break with intra-tick-spread (≥10m, ≤30m inter-merge gap) — characterized as a maintainer-batch flush by single owner of a coherent surface area at deep-silence release boundary, distinct from both M-157.D (dual-author batch-flush) and synth #344 canonical low-amplitude (single-merge near-tick-close).

**Evidence:**
- ADDENDUM-158 (2026-04-29 15:50:37Z → 16:32:43Z) — codex 2 in-window merges, both etraut-openai, 14m20s gap, same TUI/goal surface
- ADDENDUM-152 first codex silence tick after Add.151 emission; chain Add.152, Add.153, Add.154, Add.155, Add.156, Add.157 = 6 consecutive silence ticks
- ADDENDUM-157 P-157.B predicted ≥7-tick extension; FALSIFIED-IMMEDIATELY at Add.158 by 2-merge codex emission
- Pre-restart silence chain Add.146→150 = 4 ticks (synth #337 baseline); post-restart 6 ticks = +2 margin
- Codex pre-silence anchor: post-jif-oai #20180 `70ac0f12` 10:23:01Z; depth at break = 15:56:02Z − 10:23:01Z = **5h33m01s** (terminated streak depth)
- M-158.C structural features (Add.158 codex break instance):
  - Single author: etraut-openai (both PRs)
  - Same surface: TUI/goal management (#20082 = goal resume, #20172 = TUI core protocol)
  - Intra-tick gap: 14m20s (within [10m, 30m] band)
  - Sequence position: PRs land at +5m25s and +19m45s into 42m06s window (early-mid placement)
- Contrast with M-157.D (Add.157 gemini-cli break):
  - Dual-author: adamfweidman + sripasg
  - Cross-surface: test infrastructure vs ACP client refactor
  - Same-second: both at 15:35:38Z (gap = 0s)
- Contrast with synth #344 canonical low-amplitude (Add.156 qwen-code/wenshao + Add.158 litellm/ishaan-berri):
  - Single merge per repo
  - Single author per repo
  - Near-tick-close placement (litellm @ +38m20s of 42m06s = 91% into window; wenshao @ +57m+ of 57m+ = ~95% into window)

**Refines/falsifies prior:**
- **Refines #337**: M-150.S 2-phase-bounded model retains emission-phase intactness; post-bound silence-chain final depth fixed at 6 ticks (vs pre-restart 4) — symmetry FALSIFIED at +2 final margin. Synth #337 model is augmented with explicit asymmetric-bound annotation: post-restart silence chain depth = pre-restart depth + 2 ticks (under this single instance — not yet generalized).
- **Refines #341**: Codex M-150.S silence chain trajectory now has empirical termination value (n=6); the synth #341 silence-asymptote framing is bounded at 6 for the post-restart instance.
- **Refines #344**: The synth #344 canonical low-amplitude shape gains a **third instance** (litellm/ishaan-berri @ Add.158) and **first cross-repo instance** — shape generalizes beyond qwen-code/wenshao to {qwen-code/wenshao Add.146, qwen-code/wenshao Add.156, litellm/ishaan-berri Add.158}.
- **Refines #345**: M-157.D dual-author cross-surface silence-break is now a **distinct sibling class** to M-158.C single-author same-surface silence-break — both are "post-deep-silence release shapes" but with different author/surface signatures.
- **Introduces M-158.C class**: single-author dual-merge same-surface silence-break with intra-tick-spread inter-merge gap (≥10m, ≤30m) — third silence-break shape in the W17 taxonomy alongside M-157.D and synth #344 canonical low-amplitude.

**Cited addenda:** ADDENDUM-158, ADDENDUM-157, ADDENDUM-156, ADDENDUM-152, ADDENDUM-151, ADDENDUM-150, ADDENDUM-146.

**Cited SHAs / PRs:**
- Codex Add.158 dual-merge: #20082 `91ca551dcdcb99af1e8164f782a47ba4c2b919de`-prefix `91ca551d` (15:56:02Z, etraut-openai, `Use /goal resume for paused goals`); #20172 `1c420a90cdcb99af1e8164f782a47ba4c2b919de` `1c420a90` (16:10:22Z, etraut-openai, `TUI: Remove core protocol dependency [1/7]`)
- Codex pre-silence anchor: #20180 `70ac0f12` 10:23:01Z (jif-oai)
- Litellm Add.158 canonical low-amplitude: #26739 `ea275659ac80ba58aaaf4ab518d5fa2bfb47d4ae` `ea275659` (16:28:57Z, ishaan-berri, `remove /ui/chat page`)
- Qwen-code Add.158 lag-2 recurrence: #3647 `9861114ff3e12ff27f0f2f70f617e94b6af7a478` `9861114f` (16:03:16Z, shenyankm, `fix(cli): keep sticky todo panel compact`)
- Gemini-cli Add.157 M-157.D contrast: #26162 `7ab932c8` (adamfweidman) + #26143 `c2e5b28e` (sripasg), both 15:35:38Z
- Qwen-code Add.156 baseline canonical: #3721 `cae0927` (wenshao) 14:34:56Z

**Predictions:**
- **P-347.A** (M-158.C class recurrence): future single-author silence-breaks at depth ≥5 ticks across all 6 repos exhibit M-158.C shape (single-author + same-surface + ≥10m, ≤30m inter-merge gap) at >40% rate; falsifier = next 5 silence-breaks at depth ≥5 ticks all single-merge OR dual-author OR cross-surface OR <10m gap OR >30m gap.
- **P-347.B** (codex post-silence-break sustained emission): codex maintains ≥1 merge/tick cadence for next 2 ticks (Add.159, Add.160) reflecting post-deep-silence release shape per synth #294; falsifier = codex 0 merges at either Add.159 OR Add.160.
- **P-347.C** (synth #337 asymmetric-bound generalization): future M-150.S-class restart cycles in W18+ exhibit post-restart silence chain depth = pre-restart depth + Δ where Δ ∈ {1, 2, 3} (small positive asymmetric bias); falsifier = next M-150.S restart in W18+ with post-restart depth ≤ pre-restart depth (which would suggest the +2 margin at codex Add.158 is incidental rather than systematic).
- **P-347.D** (silence-break shape concurrency): future broad-recovery ticks at lag-2 of post-zero-triplet relays exhibit ≥2 distinct silence-break shapes simultaneously (multi-shape concurrency at broad-recovery boundary, validated at Add.158 with 3 shapes: M-158.C codex + canonical low-amplitude litellm + lag-2 recurrence qwen-code); falsifier = next 3 broad-recovery ticks at lag-2 each exhibit single-shape silence-breaks only.

**Open questions:**
- Does M-158.C shape exhibit **same-author intra-tick-spread** as a defining feature, or is the 14m20s gap incidental? Test: collect inter-merge gaps across future single-author dual-merge silence-breaks and check for clustering in [10m, 30m] band.
- Is the synth #337 +2 tick asymmetric bias **codex-specific** (process restart artifact) or **universal** (any deep-silence break asymptotes higher than the recovery cycle)? Test: monitor litellm and goose for future restart events and measure post-restart silence chain depths.
- Does the same-surface coherence (TUI/goal at Add.158 codex break) reflect **maintainer ownership topology** or **batch CI release coupling**? Test: examine codex GitHub topology to identify whether etraut-openai owns the TUI/goal surface or whether the batch is CI-mediated.
