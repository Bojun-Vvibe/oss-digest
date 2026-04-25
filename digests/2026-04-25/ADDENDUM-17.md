# 2026-04-25 — Addendum 17

**Window:** 10:39Z → 11:35Z (continuation from Addendum 16, which closed at 10:39Z).

## codex (openai/codex)

- **No PR activity in window.** Codex remains dormant for the second consecutive tick (Addendum 16 had only the long-tail #17393 refresh by `xli-oai`; this window has zero). The `mchen-oai` / `viyatb-oai` fresh-open cohort from Addendum 15 has not resumed. **Codex velocity baton continues to sit elsewhere** — third consecutive tick of codex below baseline.

## litellm (BerriAI/litellm)

- **[BerriAI/litellm#26500]** — OPENED 10:55:26Z, refreshed 11:05:06Z by `jayy-77` (`Jay Prajapati`), head SHA `f9f94d43ef7b`. *"[Fix] Wrap extra_body for JSON-configured OpenAI-compatible providers."* Open → first iteration **9m40s**. Surface family: provider-config payload-shape (extra_body wrapping for OpenAI-compatible adapters). **First litellm activity by `jayy-77` in the day's tracked window** — i.e., a *new* author entering the velocity surface.
- **`kiyeonjeon21` budget-enforcement triplet (#26498 / #25609 / #26499)** has gone fully quiet — no follow-up in window. The triplet that anchored synthesis #77 in Addendum 16 has reverted to baseline. Single-author dominance ended at exactly the 3-PR mark.
- **Surface rotation**: litellm in this window has rotated from *auth/budget-enforcement* (kiyeonjeon21 cluster) → *provider-payload-shape* (jayy-77 #26500). Single PR, distinct surface, distinct author.

## opencode (anomalyco/opencode)

**Two fresh opens + two closes + a deep long-tail wave — opencode continues its "most active repo of the day" streak for a third consecutive tick.**

- **[anomalyco/opencode#24290]** — OPENED 11:33:47Z, refreshed 11:34:38Z by `herjarsa` (`Hernan Javier Ardila Sanchez`), head SHA `25cdb8f9e06f`. *"fix(session): skip tool calls during summary instead of throwing."* Open → first iteration **51 seconds**. Surface family: session/summary tool-call defensive handling. **`herjarsa` is the same author behind mid-tail #23794** (refreshed 11:05:04Z by him in this same window) — i.e., **same-author refresh of a 3-day-old PR followed ~28 minutes later by a fresh open on an *adjacent* surface (session vs tool-execution)**. Mirror of synthesis #50 (post-own-merge same-author cascade), except here the trigger is a *refresh* not a merge — a same-author-cross-temporal pair.
- **[anomalyco/opencode#24289]** — OPENED 11:17:01Z, refreshed 11:17:54Z by `menardorama` (`Thomas Menard`), head SHA `af4461804e89`. *"Repair truncated JSON tool inputs in LLM session."* Open → first iteration **53 seconds**. Surface family: tool-input payload-shape defensive parsing. **Created within ~17 minutes of #24290** — *two distinct authors, two PRs, both on the same "tool-call defensive handling at the session boundary" surface*.
- **[anomalyco/opencode#24272]** — CLOSED 11:16:55Z by `kyuna0312`. *"docs: add Mongolian README documentation."* Created earlier today (08:54:17Z), short lifespan (~2h22m). Docs / i18n surface. Self-close pattern.
- **[anomalyco/opencode#24271]** — CLOSED 10:46:08Z by `wangzexi` (`Zexi`). *"Set active server before navigation and use replace navigation to avoid extra history entries."* Created 08:44:54Z, ~2h01m lifespan. Routing/navigation surface. Self-close pattern. **Both fresh-day-PR self-closes happen within ~31 minutes of each other** — sub-3h fast-abandon shape, structurally consistent with synthesis #59 / #60.
- **Deep long-tail refresh wave** — five aged opencode PRs all bumped within a ~38-minute window with no overlapping authors and no maintainer-triggered cause visible:
  - **[anomalyco/opencode#13854]** — refreshed 10:40:13Z by `mocksoul` (`Vadim Fint`), head SHA `399dd8afb170`. *"fix(tui): stop streaming markdown/code after message completes."* Created 2026-02-16, **~68 days old**.
  - **[anomalyco/opencode#18767]** — refreshed 10:40:13Z by `noahbentusi`, head SHA `2e2c3773f082`. *"feat(app): Mobile Touch Optimization."* Created 2026-03-23, **~33 days old**. **Same-second refresh as #13854** (10:40:13Z).
  - **[anomalyco/opencode#12822]** — refreshed 10:58:03Z by `jerome-benoit` (`Jérôme Benoit`), head SHA `41e084699ba2`. *"fix(env): proxy directly to process.env instead of snapshotting."* Created 2026-02-09, **~75 days old**.
  - **[anomalyco/opencode#15603]** — refreshed 11:08:18Z by `aklajnert` (`Andrzej Klajnert`), head SHA `a4e632be3f32`. *"fix(question): implement recovery for pending questions when app starts."* Created 2026-03-01, **~55 days old**.
  - **[anomalyco/opencode#14573]** — refreshed 11:18:15Z by `zer0Black` (`Li Xuetao`), head SHA `76612d63e222`. *"feat(cli): add --global flag to session list command."* Created 2026-02-21, **~63 days old**.
  - **Five distinct authors, five distinct surfaces (TUI streaming, mobile UX, env proxy, question recovery, CLI session-list), aged 33–75 days, refreshed in a 38-minute window without a visible maintainer trigger.** This is structurally a stronger version of synthesis #70 (cross-repo long-tail refresh wave) but *intra-repo* — the wave is contained inside opencode and stretches the depth axis (33d → 75d) rather than the breadth axis. **Anchor for synthesis #80.**

## ollama (ollama/ollama)

- **[ollama/ollama#15811]** — OPENED 10:41:05Z, refreshed 10:44:06Z by `LukeLamb` (`Luke Lamb`), head SHA `e7cb21fdb857`. *"docs: add RDNA4 / gfx1201 ROCm build instructions to development.md."* Open → first iteration **3m01s**. Surface family: docs / GPU-build-instructions. Single fresh open, single author. **First fresh ollama open in 3 ticks** — `mahendrarathore1742` cloud-streaming #15208 from Addendum 16 has not progressed; `famasoon` #15808 / `stationeros` #15809 still dormant. Ollama velocity remains low but produced exactly *one fresh open* in this window vs zero in Addendums 15–16.

## continuedev/continue

- **[continuedev/continue#10404]** — refreshed 10:42:57Z by `gerryqi` (`Gerry Qi`). *"feat(deepseek): deepseek-v4-pro supports reasoning effort control."* Created 2026-04-25T10:06:32Z (same-day, ~37min lifespan at refresh). Surface family: provider-config / reasoning-effort registry. (Note: PR not directly viewable via gh CLI in this session — metadata captured from list endpoint.)

## browser-use (browser-use/browser-use)

- **[browser-use/browser-use#4741]** — refreshed 11:24:08Z by `GopalGB` (`Gopal Bagaswar`). *"fix(anthropic-serializer): type tool_calls + raise on malformed data URL."* Surface family: provider-serializer payload-shape defensive typing. **Fourth tool-call/payload-shape defensive PR in this window across four repos** (alongside opencode #24289, #24290 and litellm #26500). **Anchor for synthesis #79.**

## OpenHands / cline / codex

- **No PR activity in window** for OpenHands, cline, or codex. Three repos go fully quiet simultaneously while opencode + litellm + ollama + browser-use + continue all produce activity — uncommon split-state.

## Cross-repo cohort — defensive-payload-shape convergence

Within this 56-minute window, **four distinct repos** produced PRs whose unifying theme is *"the model/provider/tool sent us a payload shape we didn't expect, and we need to either coerce, wrap, skip, or raise"*:

| Repo | PR | Author | Surface |
|---|---|---|---|
| opencode | #24289 | menardorama | repair truncated JSON tool inputs |
| opencode | #24290 | herjarsa | skip tool calls during summary |
| litellm | #26500 | jayy-77 | wrap extra_body for OpenAI-compat providers |
| browser-use | #4741 | GopalGB | type tool_calls + raise on malformed data URL |

Four authors, four repos, single window. Not a coordinated cohort — almost certainly independent — but the *frequency* of "defensive payload-shape repair" across the agent-tooling ecosystem in a single hour is itself the signal. Anchor for **synthesis #79**.

---

**Tick metrics:** 1 fresh codex (0), 1 fresh litellm (#26500), 2 fresh opencode (#24289, #24290), 2 closed opencode (#24271, #24272), 5 deep-long-tail opencode refreshes (#13854 / #18767 / #12822 / #15603 / #14573), 1 fresh ollama (#15811), 1 refresh continue (#10404), 1 refresh browser-use (#4741). Zero from cline / OpenHands.
