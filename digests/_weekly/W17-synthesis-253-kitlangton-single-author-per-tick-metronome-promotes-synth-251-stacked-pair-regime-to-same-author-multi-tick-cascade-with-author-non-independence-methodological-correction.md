# W17 Synthesis #253 — kitlangton single-author per-tick metronome promotes synth #251's cross-repo stacked-author-pair regime to a **same-author multi-tick stacked-pair cascade**: ADDENDUM-108's 5 PRs/30m kitlangton burst (#24706 merge + #24711 merge + #24712/#24716/#24717 opens) demonstrates the stacked-pair pattern recurs **per-tick from a single author**, refining synth #251's "cross-repo cross-author 80-minute replication" into a **per-author per-tick mode** with falsifiable throughput floor

**Status:** PROMOTED from ADDENDUM-108 Pred S 3rd instance (#24716/#24717 opened ≤2 minutes apart by kitlangton, within 7 minutes of #24706 merge), combined with the 5-PR/30m kitlangton throughput observation that exceeds synth #244's transient-burst baseline by >2x. Builds on synth #251 (cross-repo stacked-pair regime, Add.107) and synth #244 (sub-pattern catalog including (a) same-author near-simultaneous opens). Refines synth #245 (sub-pattern (d) same-author same-title with branch versioning) by establishing a **non-versioned same-author near-simultaneous open mode** as a co-equal sub-pattern.

## Empirical anchor

ADDENDUM-108 captured kitlangton producing 2 merges (#24706 02:33:24Z, #24711 02:24:06Z) and 3 opens (#24712 native-llm-core, #24716 sync-seq-validation, #24717 tui-bad-request-docs) in a single 30-minute window. This is **5 PRs in 30m by one author in one repo** — a per-minute throughput of 0.167 PR/min, against synth #244's transient-burst baseline of ≤0.05 PR/min and the synth #245-#250 catalog's prior peak of ~0.08 PR/min (kitlangton at Add.105). **#24716 and #24717 opened within ≤2 minutes of each other** at the capture-edge (02:39:36Z-02:41:00Z window), satisfying the synth #244 sub-pattern (a) "near-simultaneous same-author opens on disjoint surfaces" definition: titles `fix(httpapi): align sync seq validation` and `fix(httpapi): document tui bad request responses` share the httpapi prefix but differ in sub-surface (sync-seq-validation vs tui-bad-request-docs).

This is the **3rd instance of Pred S (cross-repo cross-author stacked-pair regime)** introduced at synth #251:
- **Instance 1 (Add.106):** bolinfest #19899/#19900 (codex), titles `app-server-protocol: mark permission profiles experimental` + `permissions: add built-in default profiles`, opened 1 second apart.
- **Instance 2 (Add.107):** kitlangton #24706/#24707 (opencode), titles `fix(httpapi): preserve mcp oauth error parity` + `Add Effect Drizzle SQLite adapter`, opened 19 seconds apart on disjoint surfaces.
- **Instance 3 (Add.108):** kitlangton #24716/#24717 (opencode), opened ≤2 minutes apart on disjoint httpapi sub-surfaces.

**Key new observation at Add.108:** instances 2 and 3 share an author (kitlangton) **across consecutive Add ticks**. Synth #251 framed Pred S as a **cross-repo cross-author** regime (1 codex-bolinfest + 1 opencode-kitlangton), but Add.108 reveals the regime is **also per-author per-tick** within a single repo. The cross-repo dimension was **incidental** to the cross-author dimension; the underlying mechanism is **per-author workflow signature**, expressing as same-second opens for bolinfest and same-≤2-minute opens for kitlangton.

## Falsification angle

Synth #251 Pred S had a 3-instance promotion threshold: at 3 instances the regime moves from "occurrence" to "regime" status. **Add.108's 3rd instance crosses that threshold** but **violates synth #251's framing** in 3 ways:

1. **Author non-independence:** instances 2 and 3 share author kitlangton; the framing assumed each instance contributed an independent author-instance. Counting kitlangton twice inflates the regime's apparent breadth.
2. **Repo non-independence:** instances 2 and 3 are in the same repo (opencode); the framing assumed cross-repo replication was the diagnostic feature. Same-repo same-author replication is a **distinct sub-regime** (single-author per-tick metronome) that synth #251 did not anticipate.
3. **Inter-instance gap collapsing:** instances 2 and 3 are 33 minutes apart (02:06:24Z → 02:39:36Z), much shorter than instance 1→2's 80-minute gap. The regime is **accelerating in inter-instance frequency**, suggesting a **mechanism that reinforces itself within a per-author session** rather than a randomly-distributed cross-population baseline rate.

Synth #253 reframes Pred S to address all three: the regime is **per-author per-session**, and cross-author cross-repo instances are a **sampling artifact** of the W17 capture window catching multiple high-cadence maintainers simultaneously rather than evidence of cross-organizational pattern transmission. PRs #24716 and #24717 (Add.108) and #24706 and #24707 (Add.107) are kitlangton's **same workflow expressed twice in two ticks** — not two independent regime instances.

**Falsifier for synth #253's reframing:** if Add.109-Add.112 produces ≥1 stacked-author-pair instance from a **non-bolinfest non-kitlangton author** within ≤2 minutes on ≥2 distinct surfaces, the cross-author cross-repo dimension is preserved and synth #253's "sampling artifact" claim retracts. If Add.109-Add.112 produces **only kitlangton or only bolinfest** instances, the per-author-per-session reframing holds and synth #251's cross-author claim is downgraded.

## Distinguishing from synth #244 sub-pattern (a) and synth #245 sub-pattern (d)

Synth #244 sub-pattern (a) defined "same-author near-simultaneous open on disjoint surfaces" as a transient-burst signature with no cadence prediction — it was an **observational tag**, not a regime. Synth #253 promotes (a) to a **regime** for a specific subset of authors who exhibit it **per-tick across multiple consecutive ticks** at >0.10 PR/min throughput. Sub-pattern (a) instances from low-throughput authors remain **observational tags** under synth #253; only sustained per-tick reproducers earn regime status.

Synth #245 sub-pattern (d) defined "same-author same-title with explicit numeric suffix branch versioning" (close-and-refile with versioned branch names) as a 4th axis under sub-pattern (b) close-and-refile. **Synth #253's per-author metronome is structurally orthogonal**: the kitlangton metronome at Add.107-Add.108 produces **distinct titles on distinct surfaces** (no same-title-with-suffix pattern), opens are **near-simultaneous not refiled-after-close**, and merges happen **within the same tick** not after extended retry loops. The two sub-regimes can co-occur (an author could refile-with-version-suffix while also running a metronome), but they describe different parts of the workflow.

## Operational predicate

**Pred 253-1:** by Add.112, kitlangton produces ≥3 same-author near-simultaneous open pairs (≤5 minutes apart) on disjoint surfaces, demonstrating the metronome regime is **sustained over ≥4 ticks**. Falsifier: any Add at Add.109-Add.112 with no kitlangton same-author near-simultaneous open pair within that tick.

**Pred 253-2:** by Add.115, ≥1 author other than kitlangton or bolinfest produces a same-author near-simultaneous open pair within a single tick (≤30m window). If true, the regime generalizes beyond the 2 known reproducers; if false, the regime is **idiosyncratic to kitlangton + bolinfest** and synth #251's cross-organizational framing is fully retracted.

**Pred 253-3:** kitlangton's per-minute PR throughput at Add.109 ≥0.10 PR/min (i.e., ≥4.5 PRs in a 45m tick or ≥3 PRs in a 30m tick). This is the floor for "sustained burst mode" classification. Refines Pred FF (Add.108) by binding the throughput floor to specific tick widths.

**Pred 253-4:** of kitlangton's 3 opens at Add.108 (#24712, #24716, #24717), ≥2 merge within 4 ticks (by Add.112). If true, the metronome is **end-to-end-effective** (opens convert to merges at high rate). If ≤1 merges, the metronome is **open-side-only** — kitlangton produces opens at burst rate but merge conversion lags, suggesting the open burst is **prep work** for a future merge cluster (analogous to synth #249's deferred-batch regime in litellm).

## Cross-repo cross-author co-test

A direct head-to-head with synth #251 at Add.108 close: synth #251 predicted Pred S would replicate cross-organizationally (i.e., across non-related maintainer cohorts) within 4 ticks (Add.108-Add.111). Synth #253 predicts the cross-organizational replication will **not** occur and that all subsequent Pred S instances within Add.108-Add.111 will come from kitlangton or bolinfest. **Direct outcome:**

- If Add.109-Add.111 produces a Pred S instance from a non-{kitlangton, bolinfest} author on a non-{opencode, codex} repo, synth #253 retracts and synth #251 is preserved as the canonical framing.
- If Add.109-Add.111 produces only kitlangton/bolinfest instances or zero instances, synth #253 is preserved and synth #251 retracts to "the 3-instance threshold was satisfied by author-internal repetition, not cross-organizational generalization."

This is a **clean experimental test** with a 3-tick deadline and unambiguous outcomes.

## Methodological consequence

Synth #253 surfaces a recurring pattern in the W17 synth corpus: **predicates promoted at low instance counts (n=2 → n=3) are vulnerable to author-non-independence inflation**. Synth #246 (cross-repo synchronous merge-pause), synth #247 (stratified resumption — retracted at synth #252), synth #251 (cross-repo stacked-pair), and now synth #253 all relied on small-n promotion thresholds where individual author/repo behaviors dominated the apparent regime. **The W17 corpus needs a methodological correction**: regime promotion should require **independent-author independent-repo replication**, not just replication count. Future synth posts should explicitly track **author-distinct count** and **repo-distinct count** alongside instance count when evaluating regime status.

This methodological note retroactively applies to synth #245, #246, #247, #251 promotions and refines the protocol for synth #254+.

## Capture close

Synth #253 is opened against the Add.108 capture (02:41:00Z 2026-04-28) and references W17 prior synth posts #244 (sub-pattern (a) origin), #245 (sub-pattern (d) versioning axis), #249 (deferred-batch regime as candidate analogue), #251 (cross-repo stacked-pair, partial retraction target), and #252 (fluid-stratification methodological precedent for regime retraction). Operational deadlines: Pred 253-1/253-3 evaluate at Add.112; Pred 253-2 evaluates at Add.115; Pred 253-4 evaluates at Add.112. Synth #254 (forthcoming this tick) addresses the orthogonal fluid-stratification crossing-rate sustained-evidence test against synth #252's predictions.
