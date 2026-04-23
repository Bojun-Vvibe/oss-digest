# openai/codex — 2026-03-18

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-03-17T23:59:59.000Z → 2026-03-18T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy day of plumbing work on `openai/codex` with no releases, PRs, or issues surfaced — just 31 direct commits to `main`. Themes cluster around **code-mode tooling**, **realtime/TUI polish**, **plugins/security hardening**, and **sandbox/permissions**.

The most consequential change is likely **websockets becoming the default transport** when providers support them, with all flags and model settings removed (#13592). Pair this with `app-server` now **rejecting websocket requests carrying an `Origin` header** (#14995) for a meaningful security tightening. Also notable: a **revert of "harden plugin feature gating"** (#15102) backing out #15020, which was re-merged earlier the same day after the author admitted accidentally landing under-review changes — worth a careful read if you depend on plugin gating.

Code mode saw substantial cleanup from `pakrym-oai`: tool errors now propagate as exceptions to the dispatcher (#15075), `view_image` returns `{image_url, details?}` (#15072), a new FS/environment abstraction lands (#14960), `notify` is wired in for out-of-band notifications (#14842), and empty result scaffolding was added for `apply_patch` (#15100) and `update_plan` (#15103).

Realtime/TUI: realtime conversation end is now handled in the TUI with centralized cleanup (#14903), v2 realtime skips transcript injection (#15111), handoff output gets a final-message prefix (#15077), and the app-server TUI regains composer history (#14945). A startup deprecation warning now fires when custom prompts exist in `$CODEX_HOME/prompts` (#15076).

Plugins/config: product-aware plugin policies land (unenforced) with manifest cleanup (#14993), and a tool-suggest allowlist is configurable for plugins and connectors (#15022). On thread resume, persisted model and reasoning effort are now reused when not overridden (#14888).

Sandbox/permissions: `codex sandbox` honors active `[permissions]` profiles instead of forcing legacy mode (#14293); Windows elevated sandbox supports restricted `ReadOnlyAccess` (#14610); subagent approvals propagate to execpolicy by default (#13702). A new `userpromptsubmit` hook lets you block prompts before execution (#14626). CI: `setup-zig` is pinned to an immutable SHA (#14858) and the npm staging step is repaired (#15092).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`56d0c6b`](https://github.com/openai/codex/commit/56d0c6bf67e15ff94c4bbf9e4fbc369b978b0bf1) Add apply_patch code mode result (#15100) — _@pakrym-oai_
- [`3590e18`](https://github.com/openai/codex/commit/3590e181fa2736c88a559389ea70dd1fe68d228e) Add update_plan code mode result (#15103) — _@pakrym-oai_
- [`b306885`](https://github.com/openai/codex/commit/b306885bd8ea4cd6c7e742b93c20614b79e6ac5d) don't add transcript for v2 realtime (#15111) — _@aibrahim-oai_
- [`bb30432`](https://github.com/openai/codex/commit/bb304324216e1305e9b7b5aa59700907c6326bd7) Feat: reuse persisted model and reasoning effort on thread resume (#14888) — _@shijie-oai_
- [`ebbbc52`](https://github.com/openai/codex/commit/ebbbc52ce40324d6f47745fe6edf41f3a1cfbe48) Align SQLite feedback logs with feedback formatter (#13494) — _@charley-oai_
- [`7b37a03`](https://github.com/openai/codex/commit/7b37a0350f40c646e5cd36d55892da3fc4df4891) Add final message prefix to realtime handoff output (#15077) — _@aibrahim-oai_
- [`86982ca`](https://github.com/openai/codex/commit/86982ca1f93c2e18711dd192eb2989f91f6814a1) Revert "fix: harden plugin feature gating" (#15102) — _@xl-openai_
- [`e5de136`](https://github.com/openai/codex/commit/e5de13644d9459d3c2be0e60610009e619f50488) Add a startup deprecation warning for custom prompts (#15076) — _@etraut-openai_
- [`5cada46`](https://github.com/openai/codex/commit/5cada46ddf74701dbaf1a152df0514b918ead70c) Return image URL from view_image tool (#15072) — _@pakrym-oai_
- [`88e5382`](https://github.com/openai/codex/commit/88e5382fc4cc7d7694fe99e39996bf148ebe9bcd) Propagate tool errors to code mode (#15075) — _@pakrym-oai_
- [`392347d`](https://github.com/openai/codex/commit/392347d436cddac41c535e70dd0357ff74624559) fix: try to fix "Stage npm package" step in ci.yml (#15092) — _@bolinfest_
- [`334164a`](https://github.com/openai/codex/commit/334164a6f714c171bb9f6440c7d3cd04ec04d295) feat(tui): restore composer history in app-server tui (#14945) — _@fcoury_
- [`580f32a`](https://github.com/openai/codex/commit/580f32ad2ab642e3fe9661bce838d972f8989663) fix: harden plugin feature gating (#15020) — _@xl-openai_
- [`606d850`](https://github.com/openai/codex/commit/606d85055f61ca9e81f0b96a4e7f6effc33c82be) Add notify to code-mode (#14842) — _@pakrym-oai_
- [`7ae9957`](https://github.com/openai/codex/commit/7ae99576a615d524bb22bf0f68e2b2baf88c37ce) chore: disable memory read path for morpheus (#15059) — _@jif-oai_
- [`347c6b1`](https://github.com/openai/codex/commit/347c6b12ec63e8fe41e1dce6b00cca83dd2dba67) Removed remaining core events from tui_app_server (#14942) — _@etraut-openai_
- [`58ac2a8`](https://github.com/openai/codex/commit/58ac2a8773da0ac6eb21471e6d3da5744d9e9e0c) nit: disable live memory edition (#15058) — _@jif-oai_
- [`a265d60`](https://github.com/openai/codex/commit/a265d6043edc8b41e42ae508291f4cfb9ed46805) feat: add memory citation to agent message (#14821) — _@jif-oai_
- [`0f9484d`](https://github.com/openai/codex/commit/0f9484dc8a7ad0962a808892924bb160e9466ad9) feat: adapt artifacts to new packaging and 2.5.6 (#14947) — _@jif-oai_
- [`40a7d1d`](https://github.com/openai/codex/commit/40a7d1d15b446991094c5ecfbb1d0f21f2d9ad40) [plugins] Support configuration tool suggest allowlist. (#15022) — _@mzeng-openai_
- [`84f4e7b`](https://github.com/openai/codex/commit/84f4e7b39d17fea6d28c98bc748652ea4b279a14) fix(subagents) share execpolicy by default (#13702) — _@dylan-hurd-oai_
- [`a361303`](https://github.com/openai/codex/commit/a3613035f32a45146297a74e058a8c70b91c56c2) Pin setup-zig GitHub Action to immutable SHA (#14858) — _@viyatb-oai_
- [`6fef421`](https://github.com/openai/codex/commit/6fef4216546cc9b8880f1616e349e77277b50ba3) [hooks] userpromptsubmit - hook before user's prompt is executed (#14626) — _@eternal-openai_
- [`226241f`](https://github.com/openai/codex/commit/226241f035de7df4946ba3866fee9e22f83a9f99) Use workspace requirements for guardian prompt override (#14727) — _@charley-oai_
- [`3ce879c`](https://github.com/openai/codex/commit/3ce879c64610cae8e460d3e8c126e57acbeb437d) Handle realtime conversation end in the TUI (#14903) — _@aibrahim-oai_
- [`7706164`](https://github.com/openai/codex/commit/770616414a51fa179ce4cef10f7f8df838d3f46f) Prefer websockets when providers support them (#13592) — _@pakrym-oai_
- [`d950543`](https://github.com/openai/codex/commit/d950543e6559db52855a718c96f7577922411fcd) feat: support restricted ReadOnlyAccess in elevated Windows sandbox (#14610) — _@viyatb-oai_
- [`6fe8a05`](https://github.com/openai/codex/commit/6fe8a05dcbeb62df3d9cb0388f7dd9364488f5ca) fix: honor active permission profiles in sandbox debug (#14293) — _@viyatb-oai_
- [`83a60fd`](https://github.com/openai/codex/commit/83a60fdb94d5ee074a9ec33a48699d576a89c4a1) Add FS abstraction and use in view_image (#14960) — _@pakrym-oai_
- [`19b8871`](https://github.com/openai/codex/commit/19b887128e6b9ddc1aa134a7bdd481858473b663) app-server: reject websocket requests with Origin headers (#14995) — _@maxj-oai_
- [`a5d3114`](https://github.com/openai/codex/commit/a5d3114e97166cab28bf5806204314f9ade1dbdc) feat: Add product-aware plugin policies and clean up manifest naming (#14993) — _@xl-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
