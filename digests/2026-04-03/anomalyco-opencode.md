# anomalyco/opencode — 2026-04-03

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-04-02T23:59:59.000Z → 2026-04-03T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A busy day on the `dev` branch with no releases or merged-PR/issue activity surfaced via the API, but **27 commits** landed spanning core fixes, an Effect-based refactor sweep, and several UX polish items.

The headline is the ongoing **Effect refactor**: `kitlangton` rebuilt the todowrite tool from a Todo service ([#20789](https://github.com/anomalyco/opencode/pull/20789)), made built tools resolve through the registry ([#20787](https://github.com/anomalyco/opencode/pull/20787)), effectified share-next ([#20596](https://github.com/anomalyco/opencode/pull/20596)), and pruned unused facades ([#20748](https://github.com/anomalyco/opencode/pull/20748)). `kommander` also added v2 design notes ([#20941](https://github.com/anomalyco/opencode/commit/a5ec741)) — worth reading for direction.

Notable correctness fixes:
- `jpcarranza94` fixed `Tool.define()` wrapper accumulation on object-defined tools ([#16952](https://github.com/anomalyco/opencode/pull/16952)) — long-standing bug.
- `rekram1-node` removed the dynamic part from the bash tool description again to restore prompt-cache hits across projects ([#20771](https://github.com/anomalyco/opencode/pull/20771)).
- `natewill` fixed restoring earlier messages in a reverted chain ([#20780](https://github.com/anomalyco/opencode/pull/20780)).
- `ykswang` honored `model.limit.input` overrides ([#16306](https://github.com/anomalyco/opencode/pull/16306)).
- `Hona` fixed Windows opencode spawn/shutdown in the SDK ([#20772](https://github.com/anomalyco/opencode/pull/20772)) and stopped models.dev being called twice on start ([#20765](https://github.com/anomalyco/opencode/pull/20765)).

Feature/infra:
- `nexxeln` restored **git-backed review modes** ([#20845](https://github.com/anomalyco/opencode/pull/20845)) and redesigned the modified-files section in session turns ([#20348](https://github.com/anomalyco/opencode/pull/20348)).
- `kflansburg` introduced `x-session-affinity` and `x-parent-session-id` headers ([#20744](https://github.com/anomalyco/opencode/pull/20744)) — relevant for anyone routing sessions.
- `thdxr` added automatic heap snapshots for high-memory CLI processes ([#20788](https://github.com/anomalyco/opencode/pull/20788)).
- `Brendonovich` improved Electron menus ([#20878](https://github.com/anomalyco/opencode/pull/20878)).

UI/UX cleanup from `nexxeln` covers prompt focus restoration ([#20841](https://github.com/anomalyco/opencode/pull/20841)), hidden default session timestamps ([#20892](https://github.com/anomalyco/opencode/pull/20892)), disabled todo-dock auto-scroll ([#20840](https://github.com/anomalyco/opencode/pull/20840)), shell-mode model controls unmount ([#20886](https://github.com/anomalyco/opencode/pull/20886)), and a delayed jump-to-bottom button ([#20853](https://github.com/anomalyco/opencode/pull/20853)). `adamdotdevin` also temporarily removed queued follow-ups (`ae7e2eb`).

Start with the Effect refactors and the Tool.define / bash-tool cache fixes.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`650d0db`](https://github.com/anomalyco/opencode/commit/650d0dbe54a565684a7878a263c4521170d8365a) chore: generate — _@opencode-agent[bot]_
- [`a5ec741`](https://github.com/anomalyco/opencode/commit/a5ec741cff9879ef2ddd64ed37c112ea0dff6fcd) notes on v2 (#20941) — _@kommander_
- [`fff9863`](https://github.com/anomalyco/opencode/commit/fff98636f7d1f0dc75c5905e494e339a0d95f45e) chore: rm models snapshot (#20929) — _@rekram1-node_
- [`c72642d`](https://github.com/anomalyco/opencode/commit/c72642dd35299b9bbf910360191690212e977b56) test(ci): publish unit reports in actions (#20547) — _@kitlangton_
- [`f2d4ced`](https://github.com/anomalyco/opencode/commit/f2d4ced8ea527dd6518e87354b886204a2819cab) refactor(effect): build todowrite tool from Todo service (#20789) — _@kitlangton_
- [`ae7e2eb`](https://github.com/anomalyco/opencode/commit/ae7e2eb3fb32b12e0c45681950540df7379e021a) chore(app): remove queued follow-ups for now — _@adamdotdevin_
- [`a32ffab`](https://github.com/anomalyco/opencode/commit/a32ffaba35386f46487eb78705636174bbdbdee7) fix(app): show correct submit icon when typing follow up — _@adamdotdevin_
- [`a4e75a0`](https://github.com/anomalyco/opencode/commit/a4e75a07945b8760a93b256b798e9af38aa7f8b5) chore: generate — _@opencode-agent[bot]_
- [`35350b1`](https://github.com/anomalyco/opencode/commit/35350b1d25a56665cf065eba68929fc00617fdd2) feat: restore git-backed review modes (#20845) — _@nexxeln_
- [`263dcf7`](https://github.com/anomalyco/opencode/commit/263dcf75b548810a149f08ea5e32e0f6754128d5) fix: restore prompt focus after footer selection (#20841) — _@nexxeln_
- [`7994dce`](https://github.com/anomalyco/opencode/commit/7994dce0f20d0411689d4ef927be8f95f5cf508e) refactor(effect): resolve built tools through the registry (#20787) — _@kitlangton_
- [`fbfa148`](https://github.com/anomalyco/opencode/commit/fbfa148e4eb968751a3fa29b7b2dab52815e4ebc) fix(app): hide default session timestamps (#20892) — _@nexxeln_
- [`9d57f21`](https://github.com/anomalyco/opencode/commit/9d57f21f9fedddc753908d2727f0422408eaa878) feat(ui): redesign modified files section in session turn (#20348) — _@nexxeln_
- [`3deee3a`](https://github.com/anomalyco/opencode/commit/3deee3a02b26bc9fd73f9ed86f0f3d49cd168203) fix(session): disable todo dock auto-scroll (#20840) — _@nexxeln_
- [`2002f08`](https://github.com/anomalyco/opencode/commit/2002f08f2ed564f1d0148101bfd8f261a216e20c) fix(prompt): unmount model controls in shell mode (#20886) — _@nexxeln_
- [`c307505`](https://github.com/anomalyco/opencode/commit/c307505f8b3629a3ffda291fa8496f474c3e097d) fix(session): delay jump-to-bottom button (#20853) — _@nexxeln_
- [`6359d00`](https://github.com/anomalyco/opencode/commit/6359d00fb41cefefe3d418d0360473b9f1d52df2) fix(core): fix restoring earlier messages in a reverted chain (#20780) — _@natewill_
- [`b969066`](https://github.com/anomalyco/opencode/commit/b969066a205b702e16e4ea7d369e75f280c17825) electron: better menus (#20878) — _@Brendonovich_
- [`500dcfc`](https://github.com/anomalyco/opencode/commit/500dcfc586e3787a329b51a74fec6d776d9165c1) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`7b8dc80`](https://github.com/anomalyco/opencode/commit/7b8dc8065e63b3bfee9dd56dad5548f1706b5acc) fix(sdk): handle Windows opencode spawn and shutdown (#20772) — _@Hona_
- [`e89527c`](https://github.com/anomalyco/opencode/commit/e89527c9f0eba6c7aa866f3ba39ce9f6809023a7) feat: Send x-session-affinity and x-parent-session-id headers (#20744) — _@kflansburg_
- [`aa2239d`](https://github.com/anomalyco/opencode/commit/aa2239d5decac0002de2ddd3d8f8c7f6ccccd760) add automatic heap snapshots for high-memory cli processes (#20788) — _@thdxr_
- [`8daeacc`](https://github.com/anomalyco/opencode/commit/8daeacc98989c0cb1ce88c7fca94367e4249c9af) chore: generate — _@opencode-agent[bot]_
- [`81d3ac3`](https://github.com/anomalyco/opencode/commit/81d3ac3bf01455dec8c68d77ab5893c17d237a4e) fix: prevent Tool.define() wrapper accumulation on object-defined tools (#16952) — _@jpcarranza94_
- [`eb6f1da`](https://github.com/anomalyco/opencode/commit/eb6f1dada89c56b05751d9a7ab7eab340cb9d907) fix: call models.dev once instead of twice on start (#20765) — _@Hona_
- [`8e9e79d`](https://github.com/anomalyco/opencode/commit/8e9e79d2769f0f944fa9da9add032e46348eb850) refactor(share): effectify share next (#20596) — _@kitlangton_
- [`38014fe`](https://github.com/anomalyco/opencode/commit/38014fe4486715554a729ed00b3c540b6b4feb11) fix: rm dynamic part from bash tool description again to restore cache hits across projects (#20771) — _@rekram1-node_
- [`8942fc2`](https://github.com/anomalyco/opencode/commit/8942fc21aacfbd29239962d197fcaa9b8ed3b471) refactor(effect): prune unused facades (#20748) — _@kitlangton_
- [`7f45943`](https://github.com/anomalyco/opencode/commit/7f45943a9ee867a74ebf7d82b2cac36df24bc0e0) fix(opencode): honor model limit.input overrides (#16306) — _@ykswang_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
