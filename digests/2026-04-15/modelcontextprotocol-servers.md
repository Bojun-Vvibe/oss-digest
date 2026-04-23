# modelcontextprotocol/servers — 2026-04-15

> Reference MCP server implementations; canonical examples for the protocol.

**Window:** 2026-04-14T23:59:59.000Z → 2026-04-15T23:59:59.000Z  
**Default branch:** `main`  
**Source:** [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## Daily summary

> _LLM-generated. May contain errors — click through before acting._

A janitorial sweep dominated the day: roughly 30 community-server submission PRs were closed without merge in a single batch around 01:06–01:07 UTC on 2026-04-15, with no releases shipped and only one merge commit on `main` ([5d146b3](https://github.com/modelcontextprotocol/servers/commit/5d146b379e0ae223d0eee9f9f4b3addb555297c9), a routine merge of `main` into the `docs-3132-sequentialthinking-usage` branch). No issues were filed or closed in the window.

The closure wave swept up the entire `junct-bot` family of DeFi/exchange connector listings — Aave (#3559), Compound (#3560), Lido (#3561), Chainlink (#3562), EigenLayer (#3563), ENS (#3564), Maker (#3565), Stargate (#3566), Blockscout (#3567), GMX (#3568), Synthetix (#3569), Uniswap (#3576), Etherscan (#3575), CoinMarketCap (#3578), Hyperliquid (#3579), Coinbase (#3626), Pendle (#3638), Binance (#3555), Jupiter (#3556), Curve (#3557), Beefy (#3558) — all auto-generated stateless HTTP endpoints under `*.mcp.junct.dev`. Several other community submissions were closed in the same pass: MCP-Dubai (#3927), pdf2md-ai (#3235), Lead411 (#3479), LetsFG flight search (#3609), DC Hub (#3444), Brain Protocol (#3366), and Synapse Layer's zero-knowledge memory reference (#3843). None show a `merged_at`, suggesting maintainers are pruning the directory backlog rather than accepting.

More substantive contributions also got closed unmerged and may be worth a second look if you care about infra/security tooling: a production-ready Helm chart for deploying MCP servers on Kubernetes (#3845, fixes #1122); an MCP Observatory CI workflow scoring reference servers across protocol compliance, schema, security, and reliability (#3670); an `mcp-safety-scanner` CI baseline (#3295); a `SECURITY_EVALUATION.md` guide covering eight server-security dimensions (#3926); and a security-middleware integration guide (#3828). Also closed: Fidensa third-party certification badges for six reference servers (#3754, scores ranging A to F-D).

Net signal: maintainers are clearly enforcing a stricter bar on directory listings and unsolicited governance/security additions — if you've been planning a similar PR, study the rejections before submitting.

## Releases

_None in window._


## Merged PRs

_None in window._


## Open PRs (new or updated)

_None in window._


## Closed PRs (not merged)

- [#3927](https://github.com/modelcontextprotocol/servers/pull/3927) **Add MCP-Dubai - Dubai/UAE government APIs and business knowledge** — _by @mahdi-salmanzade, closed 2026-04-14T15:13:37Z_
- [#3845](https://github.com/modelcontextprotocol/servers/pull/3845) **feat: add Helm chart for deploying MCP servers. Fixes #1122** — _by @yaswanthkumar1995, closed 2026-04-15T01:07:25Z_
- [#3295](https://github.com/modelcontextprotocol/servers/pull/3295) **Add mcp-safety-scanner CI (baseline)** — _by @TheodorNEngoy, closed 2026-04-15T01:07:23Z_
- [#3843](https://github.com/modelcontextprotocol/servers/pull/3843) **feat(examples): add zero-knowledge secure memory reference implementation (Synapse Layer)** — _by @SynapseLayer, closed 2026-04-15T01:07:21Z_
- [#3366](https://github.com/modelcontextprotocol/servers/pull/3366) **Add Brain Protocol — verifiable AI memory MCP server** — _by @seritalien, closed 2026-04-15T01:07:20Z_
- [#3828](https://github.com/modelcontextprotocol/servers/pull/3828) **docs: add security middleware guide for production MCP deployments** — _by @pshkv, closed 2026-04-15T01:07:18Z_
- [#3235](https://github.com/modelcontextprotocol/servers/pull/3235) **Add pdf2md-ai: AI-powered PDF to Markdown converter** — _by @MANUJ243, closed 2026-04-15T01:07:16Z_
- [#3479](https://github.com/modelcontextprotocol/servers/pull/3479) **Add Lead411 MCP connector** — _by @kunal-lead411, closed 2026-04-15T01:07:13Z_
- [#3670](https://github.com/modelcontextprotocol/servers/pull/3670) **ci: add MCP Observatory health scoring for reference servers** — _by @KryptosAI, closed 2026-04-15T01:07:12Z_
- [#3926](https://github.com/modelcontextprotocol/servers/pull/3926) **docs: add Security Evaluation Guide for MCP servers** — _by @karlmehta, closed 2026-04-15T01:07:10Z_
- [#3638](https://github.com/modelcontextprotocol/servers/pull/3638) **feat: add Pendle Api Mcp MCP** — _by @junct-bot, closed 2026-04-15T01:07:08Z_
- [#3626](https://github.com/modelcontextprotocol/servers/pull/3626) **feat: add Coinbase MCP** — _by @junct-bot, closed 2026-04-15T01:07:06Z_
- [#3579](https://github.com/modelcontextprotocol/servers/pull/3579) **feat: add Hyperliquid MCP** — _by @junct-bot, closed 2026-04-15T01:07:05Z_
- [#3578](https://github.com/modelcontextprotocol/servers/pull/3578) **feat: add Coinmarketcap MCP** — _by @junct-bot, closed 2026-04-15T01:07:03Z_
- [#3576](https://github.com/modelcontextprotocol/servers/pull/3576) **feat: add Uniswap MCP** — _by @junct-bot, closed 2026-04-15T01:07:01Z_
- [#3575](https://github.com/modelcontextprotocol/servers/pull/3575) **feat: add Etherscan Api MCP** — _by @junct-bot, closed 2026-04-15T01:07:00Z_
- [#3569](https://github.com/modelcontextprotocol/servers/pull/3569) **feat: add Synthetix MCP** — _by @junct-bot, closed 2026-04-15T01:06:58Z_
- [#3568](https://github.com/modelcontextprotocol/servers/pull/3568) **feat: add Gmx MCP** — _by @junct-bot, closed 2026-04-15T01:06:56Z_
- [#3567](https://github.com/modelcontextprotocol/servers/pull/3567) **feat: add Blockscout MCP** — _by @junct-bot, closed 2026-04-15T01:06:54Z_
- [#3566](https://github.com/modelcontextprotocol/servers/pull/3566) **feat: add Stargate MCP** — _by @junct-bot, closed 2026-04-15T01:06:52Z_
- [#3565](https://github.com/modelcontextprotocol/servers/pull/3565) **feat: add Maker MCP** — _by @junct-bot, closed 2026-04-15T01:06:50Z_
- [#3564](https://github.com/modelcontextprotocol/servers/pull/3564) **feat: add Ens MCP** — _by @junct-bot, closed 2026-04-15T01:06:48Z_
- [#3563](https://github.com/modelcontextprotocol/servers/pull/3563) **feat: add Eigenlayer MCP** — _by @junct-bot, closed 2026-04-15T01:06:47Z_
- [#3562](https://github.com/modelcontextprotocol/servers/pull/3562) **feat: add Chainlink MCP** — _by @junct-bot, closed 2026-04-15T01:06:45Z_
- [#3561](https://github.com/modelcontextprotocol/servers/pull/3561) **feat: add Lido MCP** — _by @junct-bot, closed 2026-04-15T01:06:43Z_
- [#3560](https://github.com/modelcontextprotocol/servers/pull/3560) **feat: add Compound MCP** — _by @junct-bot, closed 2026-04-15T01:06:41Z_
- [#3559](https://github.com/modelcontextprotocol/servers/pull/3559) **feat: add Aave MCP** — _by @junct-bot, closed 2026-04-15T01:06:39Z_
- [#3558](https://github.com/modelcontextprotocol/servers/pull/3558) **feat: add Beefy MCP** — _by @junct-bot, closed 2026-04-15T01:06:38Z_
- [#3557](https://github.com/modelcontextprotocol/servers/pull/3557) **feat: add Curve MCP** — _by @junct-bot, closed 2026-04-15T01:06:36Z_
- [#3556](https://github.com/modelcontextprotocol/servers/pull/3556) **feat: add Jupiter MCP** — _by @junct-bot, closed 2026-04-15T01:06:34Z_
- [#3555](https://github.com/modelcontextprotocol/servers/pull/3555) **feat: add Binance MCP** — _by @junct-bot, closed 2026-04-15T01:06:32Z_
- [#3519](https://github.com/modelcontextprotocol/servers/pull/3519) **add files** — _by @Jeverett3000, closed 2026-04-15T01:06:31Z_
- [#3754](https://github.com/modelcontextprotocol/servers/pull/3754) **Add Fidensa independent certification badges to reference servers** — _by @HuotChu, closed 2026-04-15T01:06:29Z_
- [#3609](https://github.com/modelcontextprotocol/servers/pull/3609) **Add LetsFG flight search MCP server** — _by @Efistoffeles, closed 2026-04-15T01:06:27Z_
- [#3444](https://github.com/modelcontextprotocol/servers/pull/3444) **Create DC Hub - Data Center Intelligence** — _by @azmartone67, closed 2026-04-15T01:06:25Z_


## Notable Issues

_None in window._


## Commits on `main`

- [`5d146b3`](https://github.com/modelcontextprotocol/servers/commit/5d146b379e0ae223d0eee9f9f4b3addb555297c9) Merge branch 'main' into docs-3132-sequentialthinking-usage — _@Chelebii_


---
_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._
