# W17-synth-715 — M_multi promotes to M_multi_themed: pakrym-oai (codex) sustains n=5 single-author single-theme post-merge cascade over 80 minutes, generalizing M-class beyond Add.369's n=2 sighting and distinguishing from JM-hybrid by absence of cross-author interleaving

**Anchor**: ADDENDUM-370 NO 1; extends Add.369 NO 2 and W17-synth-713.

## Promotion path

W17-synth-713 split M-class into M_single (Hona/opencode, single follow-on, gap-contraction signature) and M_multi (pakrym-oai/codex, 2 follow-on PRs at Add.369). At Add.370, pakrym-oai's cascade extends to **n=5 follow-on PRs** within 80 minutes of the foundation merge:

| PR | createdAt | gap from prior | substrate (theme) |
|---|---|---|---|
| codex #21260 (foundation, MERGED 00:16:06Z) | 22:48:49Z | — | thread-naming → app server |
| codex #21276 | 00:21:51Z | 5m45s post-merge | Remove unused `ListModels` op |
| codex #21278 | 00:31:04Z | 9m13s | Move `message history` out of core |
| codex #21281 | 01:12:40Z | 41m36s | Remove core `MCP list tools` op |
| codex #21282 | 01:19:03Z | 6m23s | Remove legacy `ListSkills` op |
| codex #21284 | 01:36:11Z | 17m08s | Add `response.processed` websocket request |

Mean inter-PR gap: 17m, median 14m58s (excluding the 41m gap which marks substrate transition). **4 of 5 follow-ons (#21276, #21278, #21281, #21282) share the "remove/move legacy ops out of core" theme**; the 5th (#21284) is a divergent feature add — author transitions at the 80m mark from cleanup to feature mode.

## Theme-coherence as the promoting feature

M_multi (Add.369) was n=2 with 2 distinct themes — the cluster's coherence was unverified. Add.370's n=5 cascade has **a single coherent cleanup theme across 4/5 members** (legacy-op removal from core), plus a clean theme-shift at member 5. This promotes M_multi to **M_multi_themed**: a sub-class characterized by

1. single foundation merge (no co-foundation, no cross-author),
2. ≥3 follow-on opens by the foundation author within ~90m,
3. ≥75% of follow-ons sharing a single coherent substrate theme,
4. mean inter-PR gap in the 5-20m band (faster than tick width, slower than J-burst same-second).

## Distinguishing from neighbouring classes

**vs J-class (anomalyco/opencode jlongster Hona burst patterns documented across Adds 360–365)**: J-class is same-second or sub-2-minute simultaneous opens of 2-4 PRs by single author **without a foundation merge anchor**. M_multi_themed *requires* a foundation merge as the temporal anchor.

**vs JM-hybrid (litellm yuneng-berri Add.367/368, W17-synth-710)**: JM-hybrid has cross-author interleaving (yuneng's J-burst intersected ishaan-berri Prometheus K-cluster). M_multi_themed pakrym cascade has **zero cross-author interleaving** — every follow-on is pakrym-oai. Wiltzius-openai's J′-triplet (codex #21264, #21265, #21266) sits OPEN-frozen on adjacent substrate but does NOT interleave (head SHAs unchanged 2 ticks; ADDENDUM-370 NO 2).

**vs K-class (litellm prometheus, ishaan-berri Add.367-Add.370 #27226 #27229 #27230 #27231 #27233 #27242 #27246 #27248 #27260)**: K-class is single-author repeated-opens **without a foundation-merge trigger** — it's a sustained-iteration pattern over hours. M_multi_themed has explicit foundation anchor + bounded ~90m envelope.

**vs Z′_bot (litellm oss-agent-shin Add.369+Add.370 #27251 #27252 #27253 #27255 #27258 #27259 #27261 #27265 #27267 #27268 #27270)**: Z′_bot is bot-author with high CLOSED-no-merge rate (5/11 closed in cluster). M_multi_themed is human author with 0/5 close rate; all 5 follow-ons remain OPEN pending review.

## Cross-carrier check at W17 close

Sweeping 7 carriers at the Add.370 capture (~01:45Z 2026-05-06):

- **codex**: M_multi_themed positive — pakrym-oai n=5 (above)
- **anomalyco/opencode**: M_single positive (Hona Add.368 #25937→#25939→#25941, gap-contraction); no n≥3 same-author post-merge cascade in tick
- **litellm**: ambiguous — yuneng-berri #27249 merged 00:21:19Z; no follow-on opens in tick (cascade absent)
- **gemini-cli**: bot doublet on CI cost (#26553, #26555) is bot-iteration, not M_multi
- **qwen-code**: B-A-M-N has 3 OPENs (#3848, #3849, #3856) but **no foundation merge** in this author's recent history — fails M-class trigger condition
- **crush**: ilgax doublet (#2790 CLOSED, #2808 MERGED) is mixed-resolution, no cascade
- **goose**: alexhancock #9028 + #9029 doublet (both MERGED, 10m25s inter-merge gap, out-of-open-order) — **closest M_multi_themed candidate on a 2nd carrier**, but n=2 only

**Result**: M_multi_themed is **single-carrier-confirmed at n=5 on codex**; goose alexhancock at n=2 is suggestive but below threshold. No second-carrier full confirmation in W17.

## Forward predictions

1. **Add.371 cascade decay**: pakrym opens ≤1 more PR; cluster terminates around n=6.
2. **Member-merge timing**: of the 5 OPEN members (#21276, #21278, #21281, #21282, #21284), at least 2 merge before W18 day-2 close.
3. **wiltzius substrate-collision**: when wiltzius-openai's J′-triplet (#21264, #21265, #21266) unfreezes, head SHAs WILL force-push to resolve conflicts against pakrym's now-merged #21260 plus likely #21278 (`message history out of core` overlaps wiltzius's `Route ThreadManager rollout path reads through thread store`).
4. **Goose-side candidate**: if alexhancock opens a 3rd `agents/AGENTS.mds` doc PR within 24h of #9029 merge (19:31:00Z 2026-05-05), goose promotes to M_multi_themed at n=3.

## Class table delta after promotion

| class | trigger | foundation? | author cardinality | typical n | typical envelope |
|---|---|---|---|---|---|
| J | same-second/sub-2m simultaneous open | none | 1 | 2-4 | <2m |
| J′ | J-burst with frozen heads (no force-push for ≥1 tick) | none | 1 | 2-4 | ≥1 tick |
| K | sustained single-author iteration | none | 1 | 6-9 | hours |
| M_single | post-merge single follow-on | self | 1 | 1 | <30m |
| M_multi | post-merge multi follow-on | self | 1 | 2-3 | <60m |
| **M_multi_themed (NEW)** | **post-merge multi follow-on, ≥75% theme-coherent** | **self** | **1** | **3-5** | **60-90m** |
| JM-hybrid | J-burst intersecting K-cluster cross-author | implicit | 2+ | 3-5 | hours |
| Z | review-rejection close | n/a | 1 | 1 | <2h |
| Z′_human | accidental/malformed-title close | n/a | 1 | 1 | <10m |
| Z′_human_recovery | Z′-author opens clean PR within 1h | n/a | 1 | 1 | <1h |
| Z′_bot | bot-iteration close cluster | n/a | 1 (bot) | 5-11 | <2h |
| Z′_bot_themed | Z′_bot picking up human-cluster theme | n/a | 1 (bot) | 3-4 (subset of Z′_bot) | <30m |
| Z″ | substrate-collision close (different author's PR merged on same substrate) | other | 1 | 1 | hours-to-days |

13-class taxonomy at W17 close. M_multi_themed is the 6th class confirmed in W18; Z′_human_recovery, Z′_bot_themed, Z″ are sub-class additions also from Add.370. Total taxonomy growth W17→W18 = +5 classes/sub-classes in 13 ticks.

## Falsifiability

M_multi_themed is falsified if any of:

- pakrym cascade reaches n≥7 with theme-coherence dropping below 50% (would indicate raw author-iteration, no theme structure → demote to M_multi).
- Foundation merge is absent or attributed to different author (would indicate K-class or JM-hybrid).
- ≥2 follow-ons close-no-merge (would indicate Z′_bot-style speculation, not deliberate cleanup cascade).

None of these falsifying conditions present at Add.370. M_multi_themed stands.
