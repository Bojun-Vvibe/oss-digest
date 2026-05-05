# W17-synthesis-678 — same-SHA cross-author triplet with double-instantiation on litellm staging-promotion establishes close-resubmit-recovery sub-mode-5

**Tick anchor**: ADDENDUM-347 (2026-05-05T07:15Z–08:05Z capture window).

**Synthesis claim**: A previously-unobserved close-resubmit-recovery topology has surfaced on BerriAI/litellm during ADDENDUM-347's capture window: **cross-author SHA inheritance with double-instantiation** — the exact same 40-character head SHA `f318ef03bd8e10b2fe6f694b71fa46bc86ee0d3b` appears across **three PRs spanning two authors**, with the recovery-author re-firing the inherited SHA twice in 32 seconds and both copies auto-merging within 8 seconds each. This event class is structurally distinct from existing close-resubmit-recovery sub-modes 1–4 and is registered as **sub-mode-5**.

## Event reconstruction

Verified per `gh api repos/BerriAI/litellm/pulls/<N> --jq '{n:.number,h:.head.sha,s:.state,m:.merged_at,closed:.closed_at,c:.created_at}'`:

- **#27172 (yuneng-berri)** — `[Infra] Promote Internal Staging to main`; head `f318ef03bd8e10b2fe6f694b71fa46bc86ee0d3b`; created 2026-05-05T05:16:58Z; **CLOSED 05:22:51Z** (lifespan **5m53s**, no merge).
- **#27178 (Sameerlite)** — `merge main`; head **`f318ef03bd8e10b2fe6f694b71fa46bc86ee0d3b`** *identical to #27172*; created 08:00:15Z; **MERGED 08:00:23Z** (lifespan **8 seconds**).
- **#27179 (Sameerlite)** — `merge mian` *[sic, typo in title]*; head **`f318ef03bd8e10b2fe6f694b71fa46bc86ee0d3b`** *identical to #27172/#27178*; created 08:00:47Z; **MERGED 08:00:54Z** (lifespan **7 seconds**).

Wall-clock spans:

- yuneng-berri close → Sameerlite first re-fire: **2h37m24s** gap (05:22:51Z → 08:00:15Z).
- Sameerlite #27178 → #27179 inter-submission gap: **32 seconds** (08:00:15Z → 08:00:47Z).
- Sameerlite #27179 lifespan → #27178 lifespan ratio: 7s / 8s = 0.875.
- Total Sameerlite event burst (incl. fresh-open #27177 at 07:58:46Z): **3 events / 164 seconds = 1 event per 54.7 seconds**.

## Why this is sub-mode-5 and not an existing sub-mode

The catalog of close-resubmit-recovery sub-modes through W17:

- **sub-mode-1**: same-author close-then-resubmit with **same SHA** (synth-667 ishaan-berri precedent — same author, same SHA, simultaneous origination).
- **sub-mode-2**: same-author close-then-resubmit with **different SHA** (synth-667 viyatb-oai precedent + synth-673 routine N=3 instance).
- **sub-mode-3**: scope-expansion-on-resubmit (Add.344 LifetimeVip precedent — same author, scope grows in resubmit).
- **sub-mode-4**: silent-force-push consolidation on existing OPEN PR (W17-portable per synth-677, 3-carrier instances).
- **sub-mode-5 (NEW)**: **cross-author SHA inheritance with double-instantiation** — author-A closes a PR without merging; author-B picks up the orphaned head SHA and files **two PRs in immediate succession with identical SHA**, both of which merge.

The cross-author boundary is the defining novel attribute. All prior sub-modes (1–4) preserve author-identity from close to resubmit. Sub-mode-5 introduces SHA-portability across the author boundary, with the additional twist of double-instantiation (likely as belt-and-braces against CI auto-merge race or as accidental typo-resubmit — ambiguous from observation alone).

## Plausible mechanism hypotheses (rank-ordered)

1. **Bot-assisted same-SHA double-fire** (prior 0.45): a CI bot or merge-helper fires both #27178 and #27179 against the same SHA after detecting yuneng-berri's earlier close, triggering as soon as the SHA becomes available; the double-fire is automation-side belt-and-braces. **Falsification**: check whether Sameerlite is the bot author or has bot-helper-app authoring rights on litellm; if Sameerlite is human-only, mechanism 1 weakens.
2. **Human typo-correction misfire** (prior 0.30): Sameerlite typed `merge mian` (typo) first, noticed, opened the corrected `merge main` immediately afterward, but both PRs auto-landed before either could be closed. The 32-second inter-submission gap and the typo direction (`mian` second per createdAt order — actually `merge main` is #27178 *earlier*, `merge mian` is #27179 *later*; if anything the typo emerged AFTER the corrected version, which inverts this hypothesis). **Order-check refines this hypothesis downward** since the typo is in the second-submitted PR not the first.
3. **Intentional double-firing for CI/branch-protection race-recovery** (prior 0.20): Sameerlite knows litellm's CI rules permit identical-SHA merges and uses the technique to recover branch state across two protected branches in one operation. Requires non-obvious knowledge of litellm's branch protection rules.
4. **Automation racing against rebase/merge-queue logic** (prior 0.05): both PRs are filed by an automation that races against the merge queue and accepts whichever lands first; the second-landing one is harmless dup since the SHA is already merged. Inconsistent with both PRs showing distinct merged_at timestamps separated by 31 seconds.

## Cross-author SHA inheritance — operational signature

For sub-mode-5 to instantiate, three preconditions must hold:

1. The orphaned SHA must be reachable on a branch ref accessible to author-B at filing time (typically a PR branch in author-A's fork or in the upstream repo, not deleted).
2. Author-B must have an explicit motivation to land that SHA (in this case, "Promote Internal Staging to main" suggests an internal-staging commit that yuneng-berri authored but did not push past their own close — Sameerlite's identical-SHA re-fire suggests endorsement and re-attempt rather than redirection).
3. Branch protection / required reviews / CI gates must accept the SHA on re-fire — implying the original close-without-merge by yuneng-berri was **not driven by CI failure or required-review veto** but by author-side decision (e.g. "let someone else land this," "I'm not the right person to merge this," or scheduling).

## Predictions descended from sub-mode-5

- **P-347.I (already issued in ADDENDUM-347)**: same-SHA cross-author triplet does NOT recur within next 2 ticks on any carrier; prior 0.85 reflects W17-novel pattern with single-instance baseline.
- **P-678.A**: within W17 remainder, probability of a second sub-mode-5 instance ≈ **0.20** (single-instance baseline arrival rate ~0.03 per tick across 7 carriers × ~10 remaining ticks).
- **P-678.B**: probability that the second instance (if it arises) is also on litellm ≈ **0.50** (BerriAI's multi-author internal-staging-to-main workflow appears structurally amenable; other carriers lack the visible same-org multi-author push pattern in W17 data).
- **P-678.C**: probability that mechanism-1 (bot-assisted) is the dominant explanation given full investigation ≈ **0.45** at this synthesis time; falsifiable by author-identity check on Sameerlite.

## Comparison to adjacent primitives

- Distinct from **synth-647 cross-carrier MCP-subsystem same-tick quintet** (which involves 5 carriers, no SHA-sharing, distinct authors).
- Distinct from **synth-665 codex burst-quiescence-recovery envelope** (which is intra-carrier author-cohort dynamics with no SHA-inheritance).
- **Sister to synth-668 bot-meta-lifecycle persistence** in the sense that both involve unusual SHA-state-management patterns, but sub-mode-5 is human-author-or-mixed (Sameerlite is the proximate cause) while synth-668 is fully bot-driven (gemini-cli-robot sibling-pair).

## Open questions for next-tick observation

1. Does Sameerlite re-appear on litellm in ADDENDUM-348? If yes, what is the SHA-pattern of the new event(s)?
2. Does yuneng-berri respond to Sameerlite's same-SHA re-fire (e.g. by opening a follow-up that addresses the staging-promotion issue from a different angle)?
3. Does litellm's CI history (visible on the merged commits) show that the SHA passed all checks both times, or did the second merge bypass checks because the first already landed?

These will sharpen mechanism-1 vs mechanism-2 vs mechanism-3 ranking in the synth-678 framework.
