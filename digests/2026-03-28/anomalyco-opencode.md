# anomalyco/opencode — 2026-03-28

> Terminal-native AI coding agent we use daily; high-velocity OSS.

**Window:** 2026-03-27T23:59:59.000Z → 2026-03-28T23:59:59.000Z  
**Default branch:** `dev`  
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

The day's headline is a UX overhaul around model variant selection and the prompt/session UI, paired with a quiet but significant Effect-based refactor of session internals.

The most user-visible change: model variant selection moves from a footer cycle into a dedicated dialog. `thdxr` landed the dialog itself (#19488), wired it up as the default action (#19534), removed the old footer cycle display (#19489), and followed up with a broader dialog variant menu and subagent improvements (#19537, with footer/style fixes in #19491). Session context was also moved into the prompt footer (#19486), top spacing tweaked (6c14ea1), and `kommander` added a prompt slot (#19563), themed the prompt placeholder (#19535), and ensured KV theme loads before the default fallback (#19523). If you only read one thing, start with #19534 and #19537 to understand the new variant UX.

Under the hood, `kitlangton` continued the Effect migration: `SessionCompaction` is now effectified (#19459), the session processor follows (#19485), and file access moves from raw `Filesystem` to `AppFileSystem` (#19458). Effect itself was bumped to 4.0.0-beta.42 (#19484). These are worth a look if you're tracking the architectural direction — the session layer is being progressively rewritten on Effect services.

Platform/tooling: `adamdotdevin` improved app startup efficiency (#19454); `Hona` switched Windows release signing to Azure Artifact Signing (#15201), which is notable for anyone consuming Windows builds. Nix support got two fixes from `gigamonster256` — embedded web-UI support (#19561) and respecting semver build identifiers (#11915) — plus routine `node_modules` hash updates from the bot. GitLab auth was bumped to 2.0.1 (#19552, vglafirov).

Smaller but worth noting: `rekram1-node` tweaked the bash tool description to improve prompt cache hit rates across projects (#19487) — a cheap win on token costs. `opentui` was upgraded to 0.1.91 (#19440).

No issues, PRs, or releases were recorded in the window — all activity landed as direct commits to `dev`.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Notable Issues

_None in window._


## Commits on `dev`

- [`ff37d7c`](https://github.com/anomalyco/opencode/commit/ff37d7c2df04573308a200ec6d02e947ff0c50b3) fix: nix embedded web-ui support (#19561) — _@gigamonster256_
- [`4f96eb2`](https://github.com/anomalyco/opencode/commit/4f96eb239ffa5615bdb87ffbdd64e20904f447a5) fix: respect semver build identifiers for nix (#11915) — _@gigamonster256_
- [`38af99d`](https://github.com/anomalyco/opencode/commit/38af99dcb47e92e4f25c7aa6344b5f8f9b766e1e) prompt slot (#19563) — _@kommander_
- [`772059a`](https://github.com/anomalyco/opencode/commit/772059acb5555f958ef616a3ff00a2fd89b36933) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`1f290fc`](https://github.com/anomalyco/opencode/commit/1f290fc1ba520e01b8dd450d738069ed1e6e8578) fix: update opencode-gitlab-auth to 2.0.1 (#19552) — _@vglafirov_
- [`77d4f99`](https://github.com/anomalyco/opencode/commit/77d4f994976d838a2649caba4e781046d3faccda) use theme color for prompt placeholder (#19535) — _@kommander_
- [`aa2d753`](https://github.com/anomalyco/opencode/commit/aa2d753e7edbf323baf635aec7972b673d2b64a3) feat: dialog variant menu and subagent improvements (#19537) — _@thdxr_
- [`860531c`](https://github.com/anomalyco/opencode/commit/860531c275cf845f80ccf26bba5bad745fe98398) refactor(session): effectify session processor (#19485) — _@kitlangton_
- [`2b86b36`](https://github.com/anomalyco/opencode/commit/2b86b36c8cd7d13a64d1e85296554cf5414d532b) feat: open dialog for model variant selection instead of cycling (#19534) — _@thdxr_
- [`8ac2fbb`](https://github.com/anomalyco/opencode/commit/8ac2fbbd1262a9de1362beb6e29debc446ceea0e) kv theme before default fallback (#19523) — _@kommander_
- [`26382c6`](https://github.com/anomalyco/opencode/commit/26382c6216797e65a1b43dea8646725332f62e07) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`0981b8e`](https://github.com/anomalyco/opencode/commit/0981b8eb7184348787ddaefb83663d1770ea228d) chore: generate — _@opencode-agent[bot]_
- [`aa9ed00`](https://github.com/anomalyco/opencode/commit/aa9ed001d364bb0ad65fecfa77e3ba9cc1ae6526) refactor(file): use AppFileSystem instead of raw Filesystem (#19458) — _@kitlangton_
- [`6086072`](https://github.com/anomalyco/opencode/commit/608607256716d953bdaaa3142efe6cc99da6baf0) upgrade opentui to 0.1.91 (#19440) — _@kommander_
- [`6c14ea1`](https://github.com/anomalyco/opencode/commit/6c14ea1d22f1f56b6d3c16bdd350d915ffbd7485) tweak(session): add top spacing and remove obsolete docs prompt — _@thdxr_
- [`c3a9ec4`](https://github.com/anomalyco/opencode/commit/c3a9ec4a99f2636ec032091dd4b18b13ff3e25f3) fix: restore subagent footer and fix style guide violations (#19491) — _@thdxr_
- [`41b0d03`](https://github.com/anomalyco/opencode/commit/41b0d03f6afabc30696e9ccbbdbb7c3df34fd404) feat: add model variant selection dialog (#19488) — _@thdxr_
- [`81eb6e6`](https://github.com/anomalyco/opencode/commit/81eb6e670be1baef2413ea18c0e60f92eedbe09e) refactor(prompt): remove variant cycle display from footer (#19489) — _@thdxr_
- [`8446719`](https://github.com/anomalyco/opencode/commit/8446719b13a1c9566bccd206cb522f7e524b1867) refactor(session): move context into prompt footer (#19486) — _@thdxr_
- [`15a8c22`](https://github.com/anomalyco/opencode/commit/15a8c22a263b072a23e2fc0b2e840b2e12c220aa) tweak: adjust bash tool description to increase cache hit rates between projects (#19487) — _@rekram1-node_
- [`48326e8`](https://github.com/anomalyco/opencode/commit/48326e8d9ca5648b6ab1ee15f0374434be56c4d4) chore: update nix node_modules hashes — _@opencode-agent[bot]_
- [`43bc555`](https://github.com/anomalyco/opencode/commit/43bc5551e8209b224720e4697dbfc4dc350c6a14) update effect to 4.0.0-beta.42 (#19484) — _@kitlangton_
- [`f736116`](https://github.com/anomalyco/opencode/commit/f736116967f5b57d89978e51961f2e78eedb443b) fix(app): more startup efficiency (#19454) — _@adamdotdevin_
- [`82fc493`](https://github.com/anomalyco/opencode/commit/82fc493520925cb71323964bff6939e768e6d83a) feat(ci): use Azure Artifact Signing for Windows releases (#15201) — _@Hona_
- [`2145d97`](https://github.com/anomalyco/opencode/commit/2145d97f1866001f107214be2f0dce3353e2e87d) refactor(session): effectify SessionCompaction service (#19459) — _@kitlangton_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
