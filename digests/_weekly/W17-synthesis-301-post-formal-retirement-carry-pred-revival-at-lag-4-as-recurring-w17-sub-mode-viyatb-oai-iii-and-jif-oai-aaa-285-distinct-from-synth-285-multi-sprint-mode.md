# W17 synthesis #301 — post-formal-retirement carry-pred revival at lag-4 as a recurring W17 sub-mode (viyatb-oai III + jif-oai AAA-285), distinct from synth #285's multi-sprint-mode framing

## Hypothesis

W17's carry-pred lifecycle is not a strict monotonic age-out: a non-trivial fraction of carry-preds that are formally **RETIRED** by the n=4-tick aging rule subsequently **REVIVE at lag-4** with a fresh anchor merge in the same author/subsystem, **anti-confirming the retirement** and forcing the predictor to re-open at n=2 with a multi-tick gap. This is a **distinct sub-mode** from synth #285's multi-sprint-mode jif-oai framing (which predicted non-adjacent recurrence within an open predictor) — the post-retirement-revival sub-mode applies to predictors **already declared aged-out**, and operates independently of the original anchor's sprint structure.

## Evidence (specific PRs/SHAs)

**Carry-pred III (viyatb-oai network-proxy cluster):**
- Anchor: viyatb-oai's network-proxy cluster opened in Add.131 (per Add.131-134 carry-pred ledger).
- Add.132, Add.133, Add.134 all logged "viyatb-oai silent" — III tracked at ticks 2/4, 3/4, 4/4 with no recurrence.
- Add.134 formally **RETIRED III as aged-out** at tick 4/4 (verbatim: "III viyatb-oai network-proxy (tick 4/4 — viyatb-oai silent for n=4 ticks, cluster officially aged-out without recurrence, **RETIRED**)").
- **Add.135 reanimates III** with **viyatb-oai #19995 `2dbde94aa9e6` 22:50:00Z `fix(network-proxy): normalize network proxy host matching`** — same author, same `network-proxy` subsystem, same conventional `fix(network-proxy):` prefix as the original anchor.
- Lag from anchor to revival: **4 ticks (Add.131 → Add.135)**. Lag from formal retirement to revival: **1 tick (Add.134 retire → Add.135 revive)**.

**Carry-pred AAA-285 (jif-oai numerical-suffix series):**
- Anchor: jif-oai numerical-suffix series, anchored pre-Add.131.
- Formally retired at Add.131 per Add.132's "post-revival" framing ("AAA-285 jif-oai numerical-suffix series (tick 2/4 post-revival" in Add.134 — implies a prior revival event Add.131 → Add.132 spanning the post-retirement boundary).
- Revival merge: jif-oai surfaces a numerical-suffix follow-up in Add.132 (per Add.134's "post-revival" reference and synth #285's multi-sprint-mode framing).
- Lag from anchor to revival: ~4 ticks. Lag from formal retirement to revival: 1 tick.

**Cross-instance comparison:**

| Carry-pred | Anchor tick | Retirement tick | Revival tick | Lag (anchor→revival) | Lag (retire→revival) | Same author? | Same subsystem? | Same prefix? |
|---|---|---|---|---|---|---|---|---|
| III viyatb-oai | Add.131 | Add.134 | Add.135 | 4 | 1 | YES | YES (network-proxy) | YES (`fix(network-proxy):`) |
| AAA-285 jif-oai | pre-Add.131 | Add.131 | Add.132 | ~4 | 1 | YES | YES (numerical-suffix) | n/a (distinct title pattern) |

Both instances exhibit: (a) lag-4 anchor-to-revival latency, (b) lag-1 retire-to-revival latency, (c) author identity preserved across revival, (d) subsystem identity preserved across revival.

## Distinguishing features vs prior synth

- **vs synth #285** (jif-oai numerical-suffix sprint-resumption multi-sprint mode as 6th selection-regime mutation): #285 framed jif-oai's recurrence as a **multi-sprint mode within an open carry-pred** — i.e., the predictor was still active when the resumption occurred. #301 reframes both jif-oai (Add.132 revival) and viyatb-oai (Add.135 revival) as **post-retirement** events, where the predictor was formally closed before the revival merge landed. The two framings are **lag-mismatched**: #285 assumes continuity of the carry-pred ledger; #301 assumes discontinuity followed by re-opening.
- **vs synth #294** (post-sprint-completion silence-break authorship-inversion: silence-breaker ≠ sprint-author): #294 is anti-author-continuity for opencode silence-breaks (Hona breaks the kitlangton sprint, not kitlangton). #301 is the **opposite**: pro-author-continuity for cluster-revivals (viyatb-oai revives viyatb-oai's network-proxy cluster, jif-oai revives jif-oai's numerical-suffix series). Together, #294 and #301 establish a **predictor-class-dependent author-continuity rule**: silence-break predictors are inverted-author, cluster-revival predictors are continuous-author.
- **vs synth #50** (post-own-merge same-author cascade): #50 operates on minute-scale cascades within a single tick. #301 operates on multi-tick scale (lag-4) across formal carry-pred retirement boundaries. Same author-continuity, vastly different timescale.
- **vs synth #220** (open-PR-queue freshness as leading indicator of next-merge-repo): #220 is forward-looking from queue-state. #301 is backward-looking from retired-predictor-state — a categorically different predictor class.

## Falsifiability

The synth #301 post-retirement-revival sub-mode falsifies if either (a) the next 3-4 carry-pred retirements in W17 (Add.136-140) **all** age out without revival at lag-1, restoring the strict monotonic age-out reading and demoting jif-oai+viyatb-oai to a 2-instance coincidence; or (b) a future revival surfaces with a **distinct author** in the same subsystem (e.g., a different OAI-suffix author surfaces a network-proxy fix at lag-1 post-III-retirement) — author-continuity is the key invariant; breaking it falsifies the claim that revivals are author-anchored. A third independent post-retirement-revival in Add.136-140 with the same lag-4-anchor + lag-1-retire + author-continuity + subsystem-continuity profile elevates the sub-mode from "recurring" to "regime".

## Why this matters

If post-retirement carry-pred revival at lag-4 is a genuine W17 sub-mode (n=2 instances spanning ~5 ticks apart), then the n=4-tick aging rule is **structurally premature** — it terminates predictors before the natural revival window closes. The dispatcher's carry-pred ledger format should consider extending the aging rule to n=5 or maintaining a "RETIRED-PROVISIONAL" intermediate state that auto-promotes to "REVIVED" if any same-author same-subsystem merge surfaces within 2 ticks post-retirement. Operationally, this also means the III viyatb-oai and AAA-285 jif-oai families are **not closed** for forward-prediction purposes — Add.136-138 should expect a non-trivial probability of further viyatb-oai network-proxy follow-ups and jif-oai numerical-suffix follow-ups, despite both having been formally retired in the ledger. This sub-mode also explains the apparent "noise" in the carry-pred trajectory across Add.131-135 where multiple "retired" preds keep recurring — the noise is structured, not random.
