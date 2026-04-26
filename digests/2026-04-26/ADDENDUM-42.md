# ADDENDUM-42 — 2026-04-26

**Window:** 03:59:53Z → 04:35:00Z (35m07s)

**Repos scanned:** BerriAI/litellm, openai/codex, sst/opencode, anomalyco/opencode, block/goose

## Merges in window

- **None.** Zero merges across all five repos for the **second consecutive addendum window**. The 4 → 2 → 0 → 0 throughput trajectory (Add.39 → 40 → 41 → 42) extends the strict monotonic decline into a flat-zero floor at n=2 windows. Cumulative merge-dry duration across all five repos: **~55m43s** (Add.41 + Add.42).

## Opens in window

- **[anomalyco/opencode#24434]** — `kunalkohli`, base `dev`, +12/-0. Title `feat(tui): show per-message input/output token counts`. Created **04:09:30Z**, head SHA `400db2a5ac…`. First-appearance author for the digest day (no prior addendum citation). Surface: TUI per-message instrumentation — disjoint from the recent claudianus/alohaninja archived-session surfaces (Add.40/41) and disjoint from the rekram1-node openrouter-sdk surface below.
- **[anomalyco/opencode#24435]** — `rekram1-node`, base `dev`, +5/-3. Title `fix: bump openrouter sdk version to resolve deepseek reasoning issue (bug was in sdk pkg)`. Created **04:21:31Z**, updated 04:21:40Z (9-second open-then-touch gap), head SHA `a1fcb8918d…`. Surgical 8-line fix on dependency-version surface. Disjoint surface family from #24434.

## Notable updates

- **[anomalyco/opencode#12730]** — `ugoenyioha`, base `dev`, +3522/-4. Title `feat: add agent team core — Team namespace, messaging, recovery, and events`. Created **2026-02-08T18:20:32Z**, updated **04:08:19Z**. **Lifespan at update: 76d9h47m47s** (≈77 days). This is the **oldest long-tail PR refresh observed in any addendum** of the digest day — eclipses #24154's 1d16h refresh in Add.41 by a factor of ~46×. Diff size (3522 added) is also an order of magnitude beyond any other live PR currently tracked. No surrounding cohort activity from `ugoenyioha`.
- **[openai/codex#19610]** — `andmis`, +44/-7. Trailing update at **04:00:06Z** (13s past window open) — already noted as the just-past-window touch in Add.41. No further updates in the remaining 35m of this window. Lifespan now **5h15m49s**, still OPEN, no merge.

## Notable closures

- **[anomalyco/opencode#24367]** — `tiffanychum`, base `dev`, +82/-2. Title `fix(zen): stop double-counting reasoning_tokens in oa-compat usage`. Created 2026-04-25T19:05:41Z, **CLOSED at 04:03:00Z** (lifespan 8h57m19s, **closed without merge**). Author has no prior digest-day citation; PR addressed the same broad token-accounting surface that #24434 (kunalkohli, opened 6m30s after this close at 04:09:30Z) now revisits from a different angle (per-message display vs. SDK-side double-count fix). Possible dependency: tiffanychum's close may free the per-message token surface for #24434's instrumentation work — a **closed-then-replaced surface ownership transfer** pattern.

## Bolinfest stack & etraut cluster status

- **bolinfest n=5 stack** (#19606 / #19392–95): **no updates this window**. Last touch remains 03:22:26Z (Add.40). Quiescent for **>1h12m** at window close. Head SHA on #19606 unchanged at `8eff69b41c…` — confirms no rebase#7. **Synth #125 prediction (delta7 in [3.4h, 5.0h]) is still pending verification** — at >1h12m elapsed since rebase#6, the lower bound (3.4h) requires another ~2h12m of quiescence; if rebase#7 occurs before 06:42:26Z, the prediction holds.
- **etraut-openai n=5 stewardship** (#19618 / #19620 / #19625 / #19630 / #19631): **no updates this window**. Cluster quiescent for **>1h08m** at window close. None merged. Per Add.41's classification trigger ("if remains 5-with-zero-merges through next ~3h, crosses into stalled cohort"), the cluster has now been quiescent for >1h08m of that 3h budget; at current pace it crosses the threshold at ~06:26:03Z if no merge or new push lands.

## Background activity

- `gh pr list --search "updated:>2026-04-26T03:59:53Z"` across all 5 repos returned **6 hits** (codex#19610 trailing-edge + anomalyco#24367 close + anomalyco#24434 open + anomalyco#24435 open + anomalyco#12730 long-tail refresh + #19610 only one codex hit). Activity concentrates **entirely in anomalyco/opencode** (5 of 6 hits) — the other four repos (codex, litellm, sst/opencode, goose) collectively show 1 hit (and that hit is the trailing-edge of an event that began in Add.41).
- **litellm post-promotion silence extends** — no activity for **>55m** since #26545 promotion (Add.40, ~03:39Z merge of staging→main). This **confirms the synth #127 quiescence prediction over a longer time horizon than the synth originally hypothesized**.

## Patterns

- **Single-repo activity concentration:** anomalyco/opencode accounts for 5/6 of the window's PR events. The other four repos jointly produce only the trailing-edge of an Add.41 event. This is the **most repo-skewed activity distribution observed** in the digest day. Compare Add.39 (litellm-heavy with 2 merges) and Add.40 (4 repos active). The skew is large enough to flag as anomalous at this sampling depth.
- **Codex 5-window merge drought confirmed; surface fanout DID NOT extend to n=4.** Synth #128's secondary falsifiable point ("if a 4th disjoint surface family opens in the next window without any merge, the repo-level merge gate hypothesis strengthens to near-certainty") is **falsified-as-stated** for this window: no new codex PR was opened by any author. The drought instead deepens via *quiescence* (no opens, no merges, no rebases) rather than *fanout* (more opens, no merges). This distinguishes the (a) review-capacity model (which would predict continuing opens) from (b) CI-instability model and (c) release-discipline model (both compatible with full quiescence). See synth #129.
- **Long-tail PR refresh at extreme age (#12730, 77d):** the maintenance-keepalive signature observed at 1d16h in Add.41 (#24154) recurs at 77d in this window. Two long-tail refreshes in two consecutive windows on the same repo (anomalyco/opencode) suggests the repo is in a "back-pressure" state where authors of dormant PRs are signaling presence concurrently with new opens — possibly anticipating a maintainer review pass. See synth #130.
- **Closed-without-merge → replacement-open within 6m30s** on adjacent token-accounting surfaces (#24367 close at 04:03:00Z → #24434 open at 04:09:30Z) is a **fast surface-ownership handoff**: the closing PR did not produce a merge, but the surface immediately got picked up by a different author from a different angle. This is the inverse of the cohort stewardship pattern (synth #126).

## Window merge-rate

| Repo | Add. 38 | Add. 39 | Add. 40 | Add. 41 | Add. 42 |
|------|---------|---------|---------|---------|---------|
| codex | 0 | 0 | 0 | 0 | 0 |
| litellm | 1 | 2 | 2 | 0 | 0 |
| anomalyco/opencode | 0 | 2 | 0 | 0 | 0 |
| sst/opencode | 0 | 0 | 0 | 0 | 0 |
| goose | 0 | 0 | 0 | 0 | 0 |
| **Total** | **1** | **4** | **2** | **0** | **0** |

**Two consecutive zero-merge windows.** Cross-repo throughput floor confirmed at zero across a ~55m43s combined sample. Codex extends to **5-window merge drought** (Add.38–42). Activity has not died — anomalyco/opencode opened 2 new PRs and refreshed a 77-day-old PR — but **none of it converts to merges**. The next addendum window will determine whether (i) the drought breaks via burst-merge in anomalyco (most active repo) or (ii) the drought generalizes (codex pattern propagates to other repos via continued open-without-merge).
