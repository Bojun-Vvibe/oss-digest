# charmbracelet/crush — 2026-03-25

> Charm's terminal AI coding agent; design-forward TUI patterns worth tracking.

**Window:** 2026-03-24T23:59:59.000Z → 2026-03-25T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/charmbracelet/crush](https://github.com/charmbracelet/crush)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

**v0.52.0 ships with project-local skills support** ([release](https://github.com/charmbracelet/crush/releases/tag/v0.52.0)), the headline change of the day. Crush now auto-loads skills from `.agents/skills`, `.crush/skills`, `.claude/skills`, and `.cursor/skills` in the project root, making it easy to commit team-shared skills alongside code (#2478, consolidating community PRs #2421 and #2462). On Windows, skills are now also discovered under `$HOME/.config/crush/skills` in addition to `$LOCAL_APP_DATA` (commit db043c3), and the generated `.crush/.gitignore` was updated so committed skills aren't accidentally ignored (commit 1a0b638). If you maintain a Crush-using repo, this is the change worth reading.

Two other user-visible changes landed:

- **Multilingual prompts**: the system prompt now instructs the model to reply in the user's spoken language, fixing English/Portuguese mixing (#2383). Session titles get the same treatment (commit 06cf63f), and VCR cassettes were re-recorded to match (commit ffff334).
- **Agent-detection env vars**: the Bash tool now exports `CRUSH=1`, `AGENT=crush`, and `AI_AGENT=crush` so child processes can detect they're running under Crush (#2484).

On the UX side, #2433 reworks file-completion ranking to favor filename-oriented matches (exact basename/stem first) while keeping the existing fuzzy filter as the candidate stage — useful if you've been frustrated by `@`-completion ordering. A small follow-up wires up the file picker dialog action that was previously stubbed with a TODO (commit 697fad9, PR #2483).

Dependency bumps for `fantasy` and `catwalk` arrived in #2485, and a fix ensures `HYPER_URL` can override the Hyper provider endpoint (commit d89120c). No new issues or open PRs of note in the window. Net: a meaningful release-day — read the v0.52.0 notes and #2478 first, then #2383 if you use Crush in a non-English language.

## Releases

- **[v0.52.0](https://github.com/charmbracelet/crush/releases/tag/v0.52.0)** — v0.52.0 _by @github-actions[bot] at 2026-03-25T20:18:38Z_
  > # Project skills + more
  > 
  > Hey! It's Wednesday already (time flies), and we're here bringing you a few good nice enhancements. Stay with us!
  > 
  > ## Project skills
  > 
  > We just added support for local skills. This means that you can easily share skills with your team mates or contributors inside the repository by just committing them.
  > 
  > Crush will look for the following projects paths:
  > 
  > * `.agents/skills`
  > * `.crush/skills`
  > * `.claude/skills`
  > * `.cursor/skills`
  > 
  > Another related enhancement is that Windows u…


## Merged PRs

- [#2383](https://github.com/charmbracelet/crush/pull/2383) **fix(system-prompt): tell the model to respond in the prompt spoken language** — _by @andreynering, merged 2026-03-25T19:10:27Z_
- [#2485](https://github.com/charmbracelet/crush/pull/2485) **chore(deps): update fantasy and catwalk** — _by @andreynering, merged 2026-03-25T18:14:29Z_
- [#2484](https://github.com/charmbracelet/crush/pull/2484) **feat(bash): set `CRUSH=1`, `AGENT=crush` and `AI_AGENT=crush`** — _by @andreynering, merged 2026-03-25T16:08:14Z_
- [#2433](https://github.com/charmbracelet/crush/pull/2433) **feat(ui): improve file completion ranking algorithm** — _by @huaiyuWangh, merged 2026-03-25T14:15:41Z_
- [#2478](https://github.com/charmbracelet/crush/pull/2478) **feat: load project skills automatically from `.crush/skills` and more** — _by @andreynering, merged 2026-03-25T13:17:36Z_


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#2462](https://github.com/charmbracelet/crush/pull/2462) **feat: Load project local skill files if exist** — _by @hongquan, closed 2026-03-25T13:17:39Z_
- [#2421](https://github.com/charmbracelet/crush/pull/2421) **feat(skills): load from project config folder** — _by @nghiant03, closed 2026-03-25T13:17:38Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`c233604`](https://github.com/charmbracelet/crush/commit/c233604b67b721a6952d4a30d20e47f1110524df) v0.52.0 — _@andreynering_
- [`06cf63f`](https://github.com/charmbracelet/crush/commit/06cf63fa9d929aac71eaa66f4612681c21ca4f9f) fix: session titles should keep the same spoken language — _@andreynering_
- [`ffff334`](https://github.com/charmbracelet/crush/commit/ffff334d10ebf70350cb89bddf27cf11c7b9f12b) test: re-record vcr cassettes after system prompt change — _@andreynering_
- [`2325de7`](https://github.com/charmbracelet/crush/commit/2325de7aca97f98dafdda5832db4637328788210) fix(system-prompt): tell the model to respond in the prompt spoken language — _@andreynering_
- [`d89120c`](https://github.com/charmbracelet/crush/commit/d89120c5309359561c267b76e36918fab0ff6b1f) fix(hyper): ensure it's possible to override with `HYPER_URL` — _@andreynering_
- [`18e1df4`](https://github.com/charmbracelet/crush/commit/18e1df4091798c17a04dde48070f5e4cc68eab00) chore(deps): update fantasy and catwalk (#2485) — _@andreynering_
- [`0f5df9b`](https://github.com/charmbracelet/crush/commit/0f5df9bec255742fa46046ce2993399cdc5ebe67) feat(bash): set `CRUSH=1`, `AGENT=crush` and `AI_AGENT=crush` (#2484) — _@andreynering_
- [`f67fa35`](https://github.com/charmbracelet/crush/commit/f67fa357932387ab20dada0ea1ac416da021143a) feat(ui): prioritize filename-based completion ranking — _@huaiyuWangh_
- [`09da90a`](https://github.com/charmbracelet/crush/commit/09da90a2a6b9c7b0a498304f1fb924a3012e750b) docs(ui): add comprehensive comments to completion ranking algorithm — _@huaiyuWangh_
- [`0fcf79b`](https://github.com/charmbracelet/crush/commit/0fcf79baf4aebd2b87cb49a8a287a18e6ad1dcac) feat(ui): improve file completion ranking algorithm — _@huaiyuWangh_
- [`697fad9`](https://github.com/charmbracelet/crush/commit/697fad9548abd5bf9f842896469de6119e7b401d) fix: complete file picker dialog action (#2483) — _@huaiyuWangh_
- [`0e3d472`](https://github.com/charmbracelet/crush/commit/0e3d47273fe9a8bc749a6e928b8e7d9f102c1956) docs(readme): update skill docs with updates and new paths — _@andreynering_
- [`1a0b638`](https://github.com/charmbracelet/crush/commit/1a0b6389f0624d5696235bb6343c7a7837ed8da3) chore: update generated `.crush/.gitignore` to not ignore skills — _@andreynering_
- [`cd5c937`](https://github.com/charmbracelet/crush/commit/cd5c937d2e265a1defbb45b953592286787f2346) feat: load project skills automatically from `.crush/skills` and more — _@andreynering_
- [`db043c3`](https://github.com/charmbracelet/crush/commit/db043c375866dcf9246e8bdb36677439168de482) fix: on windows, also load skills from `$HOME/.config/crush/skills` — _@andreynering_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
