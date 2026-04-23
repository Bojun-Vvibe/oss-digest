# openai/codex — 2026-04-07

> OpenAI's terminal coding agent; a direct point of comparison for opencode.

**Window:** 2026-04-06T23:59:59.000Z → 2026-04-07T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/openai/codex](https://github.com/openai/codex)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

High-volume infrastructure day with 43 commits and no releases or merged PRs in the window — most activity centers on the **app-server / executor refactor** and remote-execution plumbing.

The headline change is the continued migration of `apply_patch` to run through the executor filesystem when a remote environment is present, rather than shelling out locally ([#17027](https://github.com/openai/codex/commit/e9702411ab26ff5a31b5a305b40d4bc7356f4a45), [#17048](https://github.com/openai/codex/commit/600c3e49e00f2effd4239964a01dd0ffbaa5727d)). Companion work makes `AGENTS.md` discovery FS-aware ([#15826](https://github.com/openai/codex/commit/4bb507d2c4fb978bd6ccc1ad65d467d532fc3b15)), makes `AbsolutePathBuf::join` infallible ([#16981](https://github.com/openai/codex/commit/f1a2b920f977b64c23ee24489c13aa3b1281ebf8)), and converts unified-exec integration tests to a remote-aware harness ([#16977](https://github.com/openai/codex/commit/365154d5da051cd689a0816041d3a157a193aa43)).

Several user-visible fixes worth flagging:

- **Windows sandbox regression fix** — elevated sandboxes have been broken since March 27 due to a firewall-rule address format; [#17053](https://github.com/openai/codex/commit/08797193aa875d17bb398e440de266be6b39138a) restores them.
- **Unified exec output format reverted** to pre-#13860 behavior ([#17031](https://github.com/openai/codex/commit/d45513ce5ad99d37638f355601f075d55860001e)) — anyone parsing exec output should retest.
- **Guardian no longer discards transcripts when over budget** ([#16956](https://github.com/openai/codex/commit/0b9e42f6f78ba7eb0166b57fa5b0a9d762efee58)).
- Resume-hint footer restored on zero-token exits ([#16987](https://github.com/openai/codex/commit/2b9bf5d3d43e39811d9f8db8d65b79bc2f7c12e9)), nested `codex exec` thread-ID restore fixed ([#16882](https://github.com/openai/codex/commit/feb4f0051a5952310f8e08207418a4ba26bd4b4e)), read-only `apply_patch` rejection messaging corrected ([#16885](https://github.com/openai/codex/commit/82506527f1e4f701064b8d9133a7e0fdd5e410c7)), and `codex exec` input validation regression fixed ([#16890](https://github.com/openai/codex/commit/ee12772e80d1f7c3b47f3deecf402d3ec9e0d57f)).

New capabilities: WebRTC transport added to the experimental `thread/realtime/start` (websocket remains default, [#16960](https://github.com/openai/codex/commit/fb3dcfde1d25a1f30d11eb78aa2a5ee7ee366363)); a stable installation ID is now sent on Responses API requests for analytics ([#16912](https://github.com/openai/codex/commit/5d1671ca70ca18e2c42f16cc6cd706b58a9b6ead)); a new `experimental_network.danger_full_access_denylist_only` mode for yolo sessions ([#16946](https://github.com/openai/codex/commit/9d13d29acdbed26f2aa181987c0cd1939ae171d8)); `/feedback` cascade ([#16442](https://github.com/openai/codex/commit/89f1a44afab5fa1f2cee9b12f7d9bec444e2d8b0)); MCP Apps groundwork lands in two parts ([#16082](https://github.com/openai/codex/commit/5fe9ef06ceb019aff776dd1d57910a3e8169d43d), [#16465](https://github.com/openai/codex/commit/252d79f5eb0bba6d7b5603055fb476c02470a55c)); and a generic typed `ServerResponse` union for app-server-protocol ([#17044](https://github.com/openai/codex/commit/f480b9898447f826a9783e77d82095a13704d795)). Notable refactor: config types extracted into their own crate to contain macro expansion ([#16962](https://github.com/openai/codex/commit/1f2411629f6c3296ce5210986fe3b1aae5c2517d)).

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `main`

- [`600c3e4`](https://github.com/openai/codex/commit/600c3e49e00f2effd4239964a01dd0ffbaa5727d) [codex] Apply patches through executor filesystem (#17048) — _@pakrym-oai_
- [`0879719`](https://github.com/openai/codex/commit/08797193aa875d17bb398e440de266be6b39138a) Fix remote address format to work with Windows Firewall rules. (#17053) — _@iceweasel-oai_
- [`fb3dcfd`](https://github.com/openai/codex/commit/fb3dcfde1d25a1f30d11eb78aa2a5ee7ee366363) Add WebRTC transport to realtime start (#16960) — _@aibrahim-oai_
- [`6c36e7d`](https://github.com/openai/codex/commit/6c36e7d6886a7b07dbfaa6c8432e6de517db5361) fix(app-server) revert null instructions changes (#17047) — _@dylan-hurd-oai_
- [`f480b98`](https://github.com/openai/codex/commit/f480b9898447f826a9783e77d82095a13704d795) [app-server-protocol] introduce generic ServerResponse for app-server-protocol (#17044) — _@rhan-oai_
- [`e970241`](https://github.com/openai/codex/commit/e9702411ab26ff5a31b5a305b40d4bc7356f4a45) [codex] Migrate apply_patch to executor filesystem (#17027) — _@pakrym-oai_
- [`d45513c`](https://github.com/openai/codex/commit/d45513ce5ad99d37638f355601f075d55860001e) fix(core) revert Command line in unified exec output (#17031) — _@dylan-hurd-oai_
- [`8614f92`](https://github.com/openai/codex/commit/8614f92fc433fff20b1bf745be8b23cfb01d3d98) [codex] Fix unified exec test build (#17032) — _@pakrym-oai_
- [`59af4a7`](https://github.com/openai/codex/commit/59af4a730cda33974053afecf62e6cae00c269a4) app-server: Allow enabling remote control in runtime (#16973) — _@euroelessar_
- [`470b359`](https://github.com/openai/codex/commit/470b3592e60519aaeacb435446a44f6b7e4a553b) Add full-ci branch trigger (#16980) — _@pakrym-oai_
- [`8a13f82`](https://github.com/openai/codex/commit/8a13f82204c2692794aab96a1d03f1158fe8cbfe) app-server: Move watch_id to request of fs/watch (#17026) — _@euroelessar_
- [`252d79f`](https://github.com/openai/codex/commit/252d79f5eb0bba6d7b5603055fb476c02470a55c) [mcp] Support MCP Apps part 2 - Add meta to mcp tool call result. (#16465) — _@mzeng-openai_
- [`365154d`](https://github.com/openai/codex/commit/365154d5da051cd689a0816041d3a157a193aa43) [codex] Make unified exec tests remote aware (#16977) — _@pakrym-oai_
- [`b525b5a`](https://github.com/openai/codex/commit/b525b5a3a7117c3ce0417b91d870e096c6d07995) Update README (#16348) — _@romainhuet_
- [`f1a2b92`](https://github.com/openai/codex/commit/f1a2b920f977b64c23ee24489c13aa3b1281ebf8) [codex] Make AbsolutePathBuf joins infallible (#16981) — _@pakrym-oai_
- [`0b9e42f`](https://github.com/openai/codex/commit/0b9e42f6f78ba7eb0166b57fa5b0a9d762efee58) fix(guardian): don't throw away transcript when over budget (#16956) — _@owenlin0_
- [`5d1671c`](https://github.com/openai/codex/commit/5d1671ca70ca18e2c42f16cc6cd706b58a9b6ead) feat(analytics): generate an installation_id and pass it in responsesapi client_metadata (#16912) — _@owenlin0_
- [`2b9bf5d`](https://github.com/openai/codex/commit/2b9bf5d3d43e39811d9f8db8d65b79bc2f7c12e9) Fix missing resume hint on zero-token exits (#16987) — _@etraut-openai_
- [`cd591dc`](https://github.com/openai/codex/commit/cd591dc4571d19259b9ddd9380583d0edfaac758) Preserve null developer instructions (#16976) — _@aibrahim-oai_
- [`feb4f00`](https://github.com/openai/codex/commit/feb4f0051a5952310f8e08207418a4ba26bd4b4e) Fix nested exec thread ID restore (#16882) — _@etraut-openai_
- [`8250652`](https://github.com/openai/codex/commit/82506527f1e4f701064b8d9133a7e0fdd5e410c7) Fix read-only apply_patch rejection message (#16885) — _@etraut-openai_
- [`3b32de4`](https://github.com/openai/codex/commit/3b32de4fabc4460b17506bc3126977768c24e33f) Stabilize flaky multi-agent followup interrupt test (#16739) — _@etraut-openai_
- [`4cc6818`](https://github.com/openai/codex/commit/4cc6818996bbe47b4f490f9ca3ce3cd8504bf6c3) chore: keep request_user_input tool to persist cache on multi-agents (#17009) — _@jif-oai_
- [`413c1e1`](https://github.com/openai/codex/commit/413c1e1fdf60d3fe418e101eb53d20fee33ae0e6) [codex] reduce module visibility (#16978) — _@pakrym-oai_
- [`89f1a44`](https://github.com/openai/codex/commit/89f1a44afab5fa1f2cee9b12f7d9bec444e2d8b0) feat: /feedback cascade (#16442) — _@jif-oai_
- [`99f167e`](https://github.com/openai/codex/commit/99f167e6bfa1fd34257a83b5db2ce19b56792ddb) chore: hide nickname for debug flag (#17007) — _@jif-oai_
- [`68e16ba`](https://github.com/openai/codex/commit/68e16baabe79a1f48c7d93c9a3d6e234a9b2c9b7) chore: send_message and followup_task do not return anything (#17008) — _@jif-oai_
- [`2a8c3a2`](https://github.com/openai/codex/commit/2a8c3a2a527d1b3cb51365a72552bfa3aff32040) feat: drop agent ID from v2 (#17005) — _@jif-oai_
- [`e2bb45b`](https://github.com/openai/codex/commit/e2bb45bb249994312b4fa9c2e4e4836c574a3d07) chore: debug flag to hide some parameters (#17002) — _@jif-oai_
- [`51f75e2`](https://github.com/openai/codex/commit/51f75e2f567e2e25e057533fd5efcef57694f819) feat: empty role ok (#16999) — _@jif-oai_
- [`741e2fd`](https://github.com/openai/codex/commit/741e2fdeb87e1d1ed2e70c73b33d70865d89a288) [codex] ez - rename env=>request in codex-rs/core/src/unified_exec/process_manager.rs (#16724) — _@starr-openai_
- [`90320fc`](https://github.com/openai/codex/commit/90320fc51a760841d84acd1566f12bab57ddd092) collapse dev message into one (#16988) — _@won-openai_
- [`24c598e`](https://github.com/openai/codex/commit/24c598e8a9efdd7b9de2dd8c935f7204c1c7c414) Honor null thread instructions (#16964) — _@aibrahim-oai_
- [`4bb507d`](https://github.com/openai/codex/commit/4bb507d2c4fb978bd6ccc1ad65d467d532fc3b15) Make AGENTS.md discovery FS-aware (#15826) — _@pakrym-oai_
- [`232db06`](https://github.com/openai/codex/commit/232db0613a70301e36981c42e859d670a17f68f3) app-server: Fix compilation of a test in mcp_resource (#16972) — _@euroelessar_
- [`9d13d29`](https://github.com/openai/codex/commit/9d13d29acdbed26f2aa181987c0cd1939ae171d8) [codex] Add danger-full-access denylist-only network mode (#16946) — _@viyatb-oai_
- [`806e5f7`](https://github.com/openai/codex/commit/806e5f7c698595b5683da5e96335f4ce104424c5) fix: warn when bwrap cannot create user namespaces (#15893) — _@viyatb-oai_
- [`5fe9ef0`](https://github.com/openai/codex/commit/5fe9ef06ceb019aff776dd1d57910a3e8169d43d) [mcp] Support MCP Apps part 1. (#16082) — _@mzeng-openai_
- [`ee12772`](https://github.com/openai/codex/commit/ee12772e80d1f7c3b47f3deecf402d3ec9e0d57f) Validate exec input before starting app-server (#16890) — _@etraut-openai_
- [`b34a3a6`](https://github.com/openai/codex/commit/b34a3a6e92e03d848f5b177b23c28c69b0820ce1) app-server: Unify config changes handling a bit (#16961) — _@euroelessar_
- [`0de7662`](https://github.com/openai/codex/commit/0de7662dab7fa76d876050f7b68abd7a26dd11dd) Add setTimeout support to code mode (#16153) — _@pakrym-oai_
- [`1f24116`](https://github.com/openai/codex/commit/1f2411629f6c3296ce5210986fe3b1aae5c2517d) Refactor config types into a separate crate (#16962) — _@pakrym-oai_
- [`d2df7c5`](https://github.com/openai/codex/commit/d2df7c54b29ae88282664e220340737e973afc16) Promote image_detail_original to experimental (#16957) — _@fjord-oai_
- [`a504d8f`](https://github.com/openai/codex/commit/a504d8f0fa70c88f38cbf6c5dae26a1e1223fd63) Disable env-bound tools when exec server is none (#16349) — _@starr-openai_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
