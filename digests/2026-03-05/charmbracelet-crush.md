# charmbracelet/crush — 2026-03-05

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-04T23:59:59.000Z → 2026-03-05T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

Two patch releases shipped today, with `v0.47.2` ([release](https://github.com/charmbracelet/crush/releases/tag/v0.47.2)) being the headline: it adds support for OpenAI's freshly-launched **GPT-5.4** and **GPT-5.4 Pro** models (#2363). The release notes flag that the Pro variant is "considerably more expensive and slower" than other OpenAI models, so users should check pricing before flipping the switch. Earlier in the day, `v0.47.1` went out to fix a window-resize bug that affected several terminal emulators (notably Windows Terminal) by bumping Bubble Tea to v2.0.1 (#2360), plus a minor LSP fix for non-UTF8 encodings.

Beyond the releases, two small Windows/UX fixes landed: clipboard-empty noise on `ctrl+v` in Rio is now suppressed (#2361), and the Bubble Tea bump itself is the substance of the resize fix. No new issues were filed and the merged PRs are all from maintainer @andreynering.

On the open/in-flight side:
- #2353 (`feat: add support for alibaba coding plan`) is still open, tracking corresponding work in catwalk (#200/#201) — worth watching if you use Alibaba's coding-plan provider.
- #1979 (`ctrl+h to hide permission dialog`) saw activity again; it addresses a real UX pain point where the permissions modal occludes the model's reasoning for the request.

Two PRs were closed without merging: #2364 was opened and immediately retracted by the author with a wrong description (followup at #2365), and the long-running #1969 (adding a `context` field to the todo tool for persisting reasoning across summarization) was closed after sitting since January — likely worth a glance if you were following that design discussion.

Net read priority: skim the v0.47.2 release notes for GPT-5.4 wiring, then #2353 if Alibaba support matters to you.

## Releases

- **[v0.47.2](https://github.com/charmbracelet/crush/releases/tag/v0.47.2)** — v0.47.2 _by @github-actions[bot] at 2026-03-05T20:39:22Z_
  > # GPT 5.4
  > 
  > Second patch of the day to bring you some new goodies.
  > 
  > ## OpenAI [GPT-5.4](https://developers.openai.com/api/docs/models/gpt-5.4) and [GPT-5.4 Pro](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
  > 
  > Both these models were released today. We usually don't require updating Crush to use new models or providers, but these were an exception.
  > 
  > > [!NOTE]
  > > The Pro version is considerably more expensive and slower then other OpenAI models. Check its price before using.
  > 
  > ## New provi…
- **[v0.47.1](https://github.com/charmbracelet/crush/releases/tag/v0.47.1)** — v0.47.1 _by @github-actions[bot] at 2026-03-05T14:33:01Z_
  > # Window resize fix
  > 
  > This patch fixes an issue of Crush not adapting well to window resizes in some terminal emulators, like the Windows Terminal.
  > 
  > There is also a minor fix for LSP integration regarding handling non-UTF8 encodings.
  > 
  > See ya 👋 
  > Charm
  > 
  > ## Changelog
  > ### Other stuff
  > * ca1366121cc016a60a0bf62d75c639440417ba7d: chore: update bubble tea to v2.0.1 (#2360) (@andreynering)
  > * ae1bac33d20768c95327120fd7d11eaf4dd29f73: chore: update hyper (#2354) (@andreynering)
  > * fae0f2e82da57a0e0335d86b41…


## Merged PRs

- [#2363](https://github.com/charmbracelet/crush/pull/2363) **chore: add gpt 5.4 and gpt 5.4 pro** — _by @andreynering, merged 2026-03-05T20:27:00Z_
- [#2361](https://github.com/charmbracelet/crush/pull/2361) **fix: suppress message when clipboard is empty** — _by @andreynering, merged 2026-03-05T16:46:17Z_
- [#2360](https://github.com/charmbracelet/crush/pull/2360) **chore: update bubble tea to v2.0.1** — _by @andreynering, merged 2026-03-05T14:17:44Z_


## Open PRs (new or updated)

- [#2353](https://github.com/charmbracelet/crush/pull/2353) **feat: add support for alibaba coding plan** — _by @andreynering, updated 2026-03-05T21:18:14Z_
- [#1979](https://github.com/charmbracelet/crush/pull/1979) **feat(ui): add ctrl+h to hide permission dialog** — _by @jamestrew, updated 2026-03-05T11:35:25Z_


## Closed PRs (not merged)

- [#2364](https://github.com/charmbracelet/crush/pull/2364) **fix(2358): Change 'agent' tool model to be the small model** — _by @taoeffect, closed 2026-03-05T22:21:27Z_
- [#1969](https://github.com/charmbracelet/crush/pull/1969) **add todo context to tool** — _by @taigrr, closed 2026-03-05T07:12:02Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`a0a0040`](https://github.com/charmbracelet/crush/commit/a0a004064fd7721f28c48d5acc1e30abcb850d1a) v0.47.2 — _@andreynering_
- [`eb71faf`](https://github.com/charmbracelet/crush/commit/eb71faf2449032851a52df81e28b56c0e77c8c9e) chore: add gpt 5.4 and gpt 5.4 pro (#2363) — _@andreynering_
- [`ef0671c`](https://github.com/charmbracelet/crush/commit/ef0671ccf9af76c74dd3d97cc6e2968649024109) fix: suppress message when clipboard is empty (#2361) — _@andreynering_
- [`a512006`](https://github.com/charmbracelet/crush/commit/a512006f4c441b50153a848f79ad008335ebc9cd) v0.47.1 — _@andreynering_
- [`ca13661`](https://github.com/charmbracelet/crush/commit/ca1366121cc016a60a0bf62d75c639440417ba7d) chore: update bubble tea to v2.0.1 (#2360) — _@andreynering_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
