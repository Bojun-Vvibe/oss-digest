# W17 Synthesis #183 — Stack-collapse and stack-bootstrap pair within 73s wallclock by two distinct authors on the same repo: first cross-author stack-handoff coupling shape in W17

**Anchor window:** 2026-04-26T22:06:42Z → 22:07:55Z (73s).
**Anchor repo:** openai/codex.
**Anchor actors:** `bolinfest` (stack-collapse trigger fire), `aibrahim-oai` (stack-bootstrap third member open).
**Parent synths:** #180 (bolinfest stack mrm-triple completes rebase-as-merge precursor and arms child stack-collapse trigger), #182 (meowgorithm 24s precursor-open M+O coupling completes single-author coupling taxonomy).

## Why this is distinct from #180 and #182

Synth #180 was a **single-author intra-stack** event: bolinfest's mrm-triple completed inside one author's branch graph, and the synth's payload was the **arming** of a child-stack-collapse trigger on PRs #19395/#19394/#19393 — a future event with unbounded latency. Synth #182 closed the **single-author coupling taxonomy** with three shapes: M+R+M (bolinfest), solo self-merge (kommander), and M+O with 24s precursor-open (meowgorithm). All three were intra-author.

Synth #183 captures the **first cross-author stack-handoff coupling**: at 22:06:42Z bolinfest #19392 merges (firing the synth #180 collapse trigger after a 1h35m arming-to-firing latency, see Add.69 §1), and 73 seconds later at 22:07:55Z aibrahim-oai #19716 opens — the **third and tail member of a brand-new 3-PR stacked series** (#19713 base=main → #19714 base=split-mcp-connection-manager → #19716 base=split-mcp-rmcp-client) that aibrahim-oai began at 21:49:45Z. The two events are **independent at the branch level** (no shared head, no shared base, no shared touched files based on title/area inspection — bolinfest's PR is in `permissions/profiles`, aibrahim-oai's series is in `mcp/connection_manager`/`rmcp_client`/`elicitation`) but **coincident at the repo-level stack-graph level**: one author's stack collapses while another author's stack bootstraps, on the same repo, inside the same 73-second wallclock window.

## The handoff event

| Component | Author | PR | Branch / base | Time | Head SHA |
|---|---|---|---|---|---|
| Stack-collapse trigger fire | bolinfest | #19392 MERGED | base `main` | 22:06:42Z | `9018a11e503bbb255ce2e3d2063e3dbdcd7bd224` |
| Stack-bootstrap tail member open | aibrahim-oai | #19716 OPENED | base `split-mcp-rmcp-client` | 22:07:55Z | `e9f0d43288d9aa17f472ed3239139df1dad6656c` |

Bootstrap series prior members:
| PR | Time | Base | Head SHA |
|---|---|---|---|
| #19713 | 2026-04-26T21:49:45Z | `main` | `c21cc243d2da8f3f2b7c1ed18f73c220aa388b51` |
| #19714 | 2026-04-26T21:59:43Z | `split-mcp-connection-manager` | `b95c8b997ae38b2c41410a3b785d1f4060ac799e` |

## Why 73s is structurally significant rather than coincidence

Three priors:

1. **W17 codex strict-new-open base rate** through Add.68 was approximately **5.5 strict-new-opens per hour** during burst windows (Add.67 had 7 in 39m24s, Add.68 had 4 in 35m02s for codex specifically). Random opens in a 73s window therefore have probability ≈ **11.2%** of being a stacked-series event. But aibrahim-oai's #19716 is **specifically the tail member of a 3-PR stacked series**, not a generic open — and W17 codex prior-to-Add.69 had **zero** observed stacked series by any author other than bolinfest. P(non-bolinfest stacked tail open in 73s) is therefore not a base-rate question but a **first-of-class event** question.

2. **bolinfest stack-collapse trigger arming-to-firing latency** was 1h35m measured from #19606's merge end (~20:31Z) to #19392's merge (22:06:42Z). The trigger could have fired at any minute inside that 1h35m window. Ex ante, the probability that it fires within 73s of any specific aibrahim-oai PR open is **≈1.3%** (73s / 5700s).

3. **Combined ex ante probability** of both (a) the firing landing in a 73s window and (b) that 73s window containing a non-bolinfest stacked-series tail open, given that no such non-bolinfest stack existed prior, is below the **W17 W-significance threshold (5%)** that synths #92, #96, #98 used to flag same-second clusters. The 73s pair therefore qualifies as a **flagged coincidence**, not a chance alignment.

## What this generalizes

Synth #182 declared the single-author coupling taxonomy "complete" with three shapes (M+R+M, solo self-merge, M+O with precursor-open). Synth #183 **opens a second taxonomy** — the **cross-author stack-graph coupling shapes** — and registers its first member: **stack-collapse-fire ⊗ stack-bootstrap-tail within 73s on same repo by disjoint authors**. The taxonomy is not yet complete; further W17 windows must observe additional cross-author stack-handoff variants before classification stabilizes.

## Falsifiable predictions emitted

- **P183a:** aibrahim-oai's stack #19713/#19714/#19716 will see its first head-roll within 4h of #19716's open (i.e. by 2026-04-27T02:07:55Z). If no head-rolls, the stack is in **defer-and-collect-review** mode rather than **iterate-and-converge** mode, and the bootstrap shape is decoupled from the collapse shape.
- **P183b:** bolinfest's child stack (#19395/#19394/#19393) will rebase off main within 1h of #19392's merge (i.e. by 2026-04-26T23:06:42Z). If not, the synth #180 collapse-trigger model needs a **bounded-firing-with-unbounded-secondary-rebase** amendment, and Add.66's 28s M+R coupling baseline is **not generalizable** to multi-PR child stacks.
- **P183c:** within the next 6h of W17 codex activity, **at least one additional cross-author stack-graph event** will occur (bolinfest child rebase ⊗ aibrahim-oai head-roll, or aibrahim-oai merge ⊗ another author's open on a base derived from aibrahim-oai's series). If not, the 73s pair was **end-of-burst-week phenomenology** rather than a sustained pattern.

## Cross-references

- Add.66 §coupling-shape baseline (M+R same-second 28s) — the 73s figure is **2.6× the M+R baseline**, the smallest cross-author coupling latency observed in W17 codex.
- Add.67 §2 (initial bolinfest stack-collapse trigger flag) and Add.68 §2 (NOT FIRED extension) — the firing-latency ground-truth chain.
- Synth #178 (cross-author shared-branch 4-stage lifecycle) — the prior cross-author stack-graph synth, but on **shared branch** topology (one branch, two authors); synth #183 is **disjoint branches, shared repo, coincident timing**.
- Synth #181 (etraut-openai author-revisit-within-burst) — the prior intra-burst recurrence synth, single-author; synth #183 is the cross-author analogue at coarser granularity (stack-graph events rather than open events).
