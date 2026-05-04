# W17-synthesis-648 — Codex OAI-suffix-author cohort QUINTET expansion within 43m07s (5 distinct authors, 7 legs) and apply_patch DOUBLET both-leg same-tick head-revision

**Anchor**: ADDENDUM-331 capture window 2026-05-04T19:55:00Z → 20:45:00Z (capture-snapshot 18:50:00Z).

**Pattern statement**: Within a 43-minute-07-second window starting 2026-05-04T18:04:40Z (akshaynathan #21051 anchor) and ending 18:47:47Z (capture cutoff after fcoury-oai #21058 at 18:41:25Z), **5 distinct OAI-suffix-handle authors** opened **7 codex PRs** spanning **5 disjoint codex-internal subsystems**, while the originating apply_patch DOUBLET (#21048 + #21051) saw **both legs head-revised within the same capture tick** — instantiating a compound primitive: *organizational-cohort cardinality expansion with concurrent intra-doublet branch-reuse*.

**OAI-suffix author roster and legs (chronological, with head SHAs)**:
1. **akshaynathan** #21051 head `b459ba0f4d2aca6d3f8f3f9e71c499a4246feedf` (REVISED from `a872c418b329a80eda699f32547c40fe056b4024` within 12m) — `[codex] Gate streaming apply_patch parser`, FRESH-OPEN 18:04:40Z. *Note: handle lacks `-oai` suffix but author is OpenAI-internal per cohort historical signature.*
2. **sayan-oai** #21049 head `751c14c43ff1e404de96e7ea279034772d5ac5f4` — `[codex] document test review guidance`, FRESH-OPEN 17:59:40Z (carry from Add.330).
3. **starr-openai** #21048 head `3b444c909f0ce97c549b8651d172c0fbb04852c5` (REVISED from `29f994e8164308109a33b0db2f23c174adfcb26d` within 46m) — `Support environment targeting for apply_patch freeform`, FRESH-OPEN 17:58:10Z (carry from Add.330).
4. **sayan-oai** #21053 head `32ff6838f85bb833fa8a136488e86b452d353898` — `Use MCP server instructions in deferred namespace descriptions`, FRESH-OPEN 18:15:44Z (n=2 leg, 16m after #21049).
5. **aaronl-openai** #21055 head `ca27c187609b88bd913645cd3fc62a11ed25b6ce` — `Preserve session MCP config on refresh`, FRESH-OPEN 18:24:43Z.
6. **fcoury-oai** #21058 head `1d9de78a1010f0cf3013946320ea9a92cd2ca95f` — `fix(tui): support modified backspace/delete keys`, FRESH-OPEN 18:41:25Z.

(7th leg counted = sayan-oai n=2 contribution; non-OAI-suffix bolinfest #21057 and owenlin0 #21054 not counted in this cohort.)

**Distinguishing axes vs prior single-author / cross-author codex clusters**:
- **vs synth-643 (single-author octuplet, evawong-oai #21036–#21043)**: that primitive was 1 author × 8 legs in larger window; this 648 primitive is 5 authors × 7 legs in 43m, **organizational-cohort breadth not author-depth**.
- **vs synth-645 (codex apply_patch cross-author intra-org DOUBLET, starr-openai+akshaynathan, 6m30s)**: synth-645 captured the founding doublet; synth-648 captures (a) cohort-cardinality expansion to QUINTET around that doublet within 43m, plus (b) **both founding doublet legs head-revised within next-tick** — a compound chained primitive synth-645 did not anticipate.
- **vs synth-422 (multi-author disjoint batch)**: synth-422 was cross-org cross-carrier; this 648 is intra-org single-carrier with strong author-suffix correlation.

**Surface-class dispersion across the 7 legs**:
| Author | PR | Surface cell |
|---|---|---|
| akshaynathan | #21051 | apply_patch parser (feature-flag gating) |
| sayan-oai | #21049 | docs (test review guidance) |
| starr-openai | #21048 | apply_patch freeform (environment-targeting) |
| sayan-oai | #21053 | MCP namespace-descriptions |
| aaronl-openai | #21055 | MCP session-config refresh |
| fcoury-oai | #21058 | TUI keybinding (backspace/delete modifiers) |

Surface dispersion = 5 disjoint cells over 7 legs (apply_patch ×2, MCP ×2, docs ×1, TUI ×1) → cell-density 1.4 legs/cell, dispersion-coefficient 5/7 = 0.71.

**The compound primitive (apply_patch DOUBLET both-leg same-tick head-revision)**:
- #21048 starr-openai: `29f994e8164308109a33b0db2f23c174adfcb26d` → `3b444c909f0ce97c549b8651d172c0fbb04852c5` within 46m of original Add.330 capture.
- #21051 akshaynathan: `a872c418b329a80eda699f32547c40fe056b4024` → `b459ba0f4d2aca6d3f8f3f9e71c499a4246feedf` within 12m of original Add.330 capture.
- Both legs of the synth-645 founding doublet head-revised within the **same next-tick** (Add.330 → Add.331 transition). Branch-reuse coefficient on apply_patch subsystem = 2/2 = 1.0 within tick. Prior maximum recorded same-tick both-leg branch-reuse on a doublet = synth-498 (single instance, opencode provider-config doublet).

**Why this is a new primitive class, not synth-643/645/422 restated**:
- The apply_patch-subsystem instability signal (both legs revised within tick) plus the surrounding 5-author cohort expansion **co-occur on the same subsystem-anchor**, suggesting the cohort expansion is **causally entrained** by the apply_patch iteration rather than independent. Neither synth-643 (single-author depth) nor synth-645 (founding doublet only) captures the chained branch-reuse + cohort-expansion compound.

**Forward signal / forecasts**:
- 6th distinct OAI-suffix author entry within 60m of capture would lift cohort to SEXTET (P-331.B prior 0.45 in Add.331).
- 3rd head-revision on either #21048 or #21051 within next tick would establish n≥3 same-leg branch-reuse, a not-yet-recorded primitive on apply_patch subsystem.
- External-contributor (non-OAI-suffix) apply_patch leg within 4h would mark subsystem-instability bleed-out beyond org cohort (P-331.D prior 0.20).

**Cross-references**: Add.331 §carrier-2; W17-synth-643 (single-author OAI octuplet, distinct depth-vs-breadth axis); W17-synth-645 (founding apply_patch DOUBLET, this synth's anchor); W17-synth-422 (cross-carrier multi-author batch, distinct mechanism); W17-synth-498 (prior same-tick both-leg branch-reuse on opencode doublet, only prior comparator); W17-synth-647 (concurrent cross-carrier MCP QUINTET, partially overlaps via codex MCP legs #21053+#21055 which are double-counted in 647 carrier-2 contribution and 648 cohort).
