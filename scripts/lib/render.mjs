// scripts/lib/render.mjs
// Pure render functions. No I/O. No network.

const EXCERPT_LEN = 500;

export function excerpt(body, n = EXCERPT_LEN) {
  if (!body) return "";
  const cleaned = String(body).replace(/\r\n/g, "\n").trim();
  if (cleaned.length <= n) return cleaned;
  return cleaned.slice(0, n).trimEnd() + "…";
}

/**
 * Sanitise raw GitHub API objects down to only the fields we need.
 * Keeps the cache file small and stable across schema drift.
 */
export function sanitiseIssue(i) {
  return {
    number: i.number,
    title: i.title,
    user: i.user?.login ?? null,
    state: i.state,
    html_url: i.html_url,
    labels: (i.labels ?? []).map((l) => (typeof l === "string" ? l : l.name)).filter(Boolean),
    created_at: i.created_at,
    updated_at: i.updated_at,
    closed_at: i.closed_at ?? null,
    body: excerpt(i.body),
  };
}

export function sanitisePull(p) {
  return {
    number: p.number,
    title: p.title,
    user: p.user?.login ?? null,
    state: p.state,
    merged_at: p.merged_at ?? null,
    html_url: p.html_url,
    labels: (p.labels ?? []).map((l) => (typeof l === "string" ? l : l.name)).filter(Boolean),
    draft: !!p.draft,
    created_at: p.created_at,
    updated_at: p.updated_at,
    closed_at: p.closed_at ?? null,
    body: excerpt(p.body),
  };
}

export function sanitiseRelease(r) {
  return {
    tag_name: r.tag_name,
    name: r.name,
    user: r.author?.login ?? null,
    html_url: r.html_url,
    draft: !!r.draft,
    prerelease: !!r.prerelease,
    published_at: r.published_at,
    created_at: r.created_at,
    body: excerpt(r.body),
  };
}

export function sanitiseCommit(c) {
  return {
    sha: c.sha,
    short_sha: c.sha?.slice(0, 7) ?? null,
    user: c.author?.login ?? c.commit?.author?.name ?? null,
    html_url: c.html_url,
    message: excerpt(c.commit?.message, 200),
    date: c.commit?.author?.date ?? null,
  };
}

// ---------- repo digest template ----------

function fmtDateRange(sinceIso, untilIso) {
  return `${sinceIso} → ${untilIso}`;
}

function section(title, items, renderItem) {
  if (!items || items.length === 0) {
    return `## ${title}\n\n_None in window._\n`;
  }
  const body = items.map(renderItem).join("\n");
  return `## ${title}\n\n${body}\n`;
}

export function renderRepoDigest({
  repo,        // e.g. "anomalyco/opencode"
  date,        // YYYY-MM-DD
  sinceIso,
  untilIso,
  raw,         // { issues, pulls, releases, commits } (sanitised)
  why,         // string from targets.json
  defaultBranch,
  summary,     // optional LLM-generated markdown body (v0.2)
}) {
  const mergedPulls = raw.pulls.filter((p) => p.merged_at);
  const newOpenPulls = raw.pulls.filter((p) => !p.merged_at && p.state === "open");
  const otherClosedPulls = raw.pulls.filter((p) => !p.merged_at && p.state === "closed");

  const lines = [];
  lines.push(`# ${repo} — ${date}`);
  lines.push("");
  lines.push(`> ${why}`);
  lines.push("");
  lines.push(`**Window:** ${fmtDateRange(sinceIso, untilIso)}  `);
  lines.push(`**Default branch:** \`${defaultBranch}\`  `);
  lines.push(`**Source:** [github.com/${repo}](https://github.com/${repo})`);
  lines.push("");
  if (summary && summary.trim()) {
    lines.push("## Daily summary");
    lines.push("");
    lines.push("> _LLM-generated. May contain errors — click through before acting._");
    lines.push("");
    lines.push(summary.trim());
    lines.push("");
  } else {
    lines.push("> _Deterministic template only — no LLM summary for this run._");
    lines.push("");
  }

  // ---- Releases
  lines.push(
    section("Releases", raw.releases, (r) => {
      const tag = r.tag_name || r.name || "(untagged)";
      const flags = [r.draft && "draft", r.prerelease && "prerelease"].filter(Boolean).join(", ");
      const flagStr = flags ? ` _(${flags})_` : "";
      const head = `- **[${tag}](${r.html_url})**${flagStr} — ${r.name ?? ""} _by @${r.user ?? "unknown"} at ${r.published_at ?? r.created_at}_`;
      const body = r.body ? `\n  > ${r.body.replace(/\n/g, "\n  > ")}` : "";
      return head + body;
    })
  );
  lines.push("");

  // ---- Merged PRs
  lines.push(
    section("Merged PRs", mergedPulls, (p) =>
      `- [#${p.number}](${p.html_url}) **${p.title}** — _by @${p.user}, merged ${p.merged_at}_`
    )
  );
  lines.push("");

  // ---- Open PRs (new / updated in window)
  lines.push(
    section("Open PRs (new or updated)", newOpenPulls, (p) => {
      const draft = p.draft ? " _(draft)_" : "";
      return `- [#${p.number}](${p.html_url})${draft} **${p.title}** — _by @${p.user}, updated ${p.updated_at}_`;
    })
  );
  lines.push("");

  // ---- Closed-without-merge (only if any)
  if (otherClosedPulls.length > 0) {
    lines.push(
      section("Closed PRs (not merged)", otherClosedPulls, (p) =>
        `- [#${p.number}](${p.html_url}) **${p.title}** — _by @${p.user}, closed ${p.closed_at}_`
      )
    );
    lines.push("");
  }

  // ---- Notable Issues
  lines.push(
    section("Notable Issues", raw.issues, (i) => {
      const labelStr = i.labels.length ? ` _[${i.labels.join(", ")}]_` : "";
      const stateStr = i.state === "closed" ? ` _(closed ${i.closed_at})_` : "";
      return `- [#${i.number}](${i.html_url}) **${i.title}**${labelStr} — _by @${i.user}_${stateStr}`;
    })
  );
  lines.push("");

  // ---- Commits
  lines.push(
    section(`Commits on \`${defaultBranch}\``, raw.commits, (c) => {
      const firstLine = (c.message || "").split("\n")[0];
      return `- [\`${c.short_sha}\`](${c.html_url}) ${firstLine} — _@${c.user ?? "unknown"}_`;
    })
  );
  lines.push("");

  lines.push("---");
  const footer = summary && summary.trim()
    ? `_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (LLM summary + deterministic detail)._`
    : `_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.2 (deterministic template; no LLM for this run)._`;
  lines.push(footer);

  return lines.join("\n");
}

// ---------- index template ----------

export function renderIndex({ date, sinceIso, untilIso, entries, errorCount }) {
  // entries: [{ repo, repoFlat, stats: { releases, mergedPulls, openPulls, issues, commits }, ok }]
  const lines = [];
  lines.push(`# Daily digest — ${date}`);
  lines.push("");
  lines.push(`**Window:** ${sinceIso} → ${untilIso}`);
  lines.push("");
  lines.push(`Tracking ${entries.length} repos.${errorCount ? ` ${errorCount} failed — see [_errors.md](./_errors.md).` : ""}`);
  lines.push("");
  lines.push("| Repo | Releases | Merged PRs | New open PRs | Issues | Commits |");
  lines.push("| ---- | -------- | ---------- | ------------ | ------ | ------- |");

  for (const e of entries) {
    if (!e.ok) {
      lines.push(`| ${e.repo} | _error — see [_errors.md](./_errors.md)_ | | | | |`);
      continue;
    }
    const s = e.stats;
    lines.push(`| [${e.repo}](./${e.repoFlat}.md) | ${s.releases} | ${s.mergedPulls} | ${s.openPulls} | ${s.issues} | ${s.commits} |`);
  }

  lines.push("");
  lines.push("## One-line summary per repo");
  lines.push("");
  for (const e of entries) {
    if (!e.ok) {
      lines.push(`- **${e.repo}** — _failed to fetch (see \`_errors.md\`)._`);
      continue;
    }
    const s = e.stats;
    const parts = [];
    parts.push(`${s.mergedPulls} PR${s.mergedPulls === 1 ? "" : "s"} merged`);
    if (s.releases > 0) parts.push(`${s.releases} release${s.releases === 1 ? "" : "s"}${e.latestReleaseTag ? ` (${e.latestReleaseTag})` : ""}`);
    if (s.openPulls > 0) parts.push(`${s.openPulls} new open PR${s.openPulls === 1 ? "" : "s"}`);
    if (s.issues > 0) parts.push(`${s.issues} issue${s.issues === 1 ? "" : "s"} touched`);
    if (s.commits > 0) parts.push(`${s.commits} commit${s.commits === 1 ? "" : "s"}`);
    const summary = parts.length === 0 || (s.mergedPulls === 0 && s.releases === 0 && s.openPulls === 0 && s.issues === 0 && s.commits === 0)
      ? "_quiet day_"
      : parts.join(", ");
    lines.push(`- [**${e.repo}**](./${e.repoFlat}.md) — ${summary}.`);
  }
  lines.push("");
  lines.push("---");
  lines.push(`_Generated by [oss-digest](https://github.com/Bojun-Vvibe/oss-digest) · v0.1._`);
  return lines.join("\n");
}

export function renderErrorsFile({ date, errors }) {
  const lines = [];
  lines.push(`# Errors — ${date}`);
  lines.push("");
  lines.push(`${errors.length} target${errors.length === 1 ? "" : "s"} failed during this run.`);
  lines.push("");
  for (const e of errors) {
    lines.push(`## ${e.repo}`);
    lines.push("");
    lines.push("```");
    lines.push(e.message);
    lines.push("```");
    lines.push("");
  }
  return lines.join("\n");
}

export function repoFlat(fullName) {
  return fullName.replace("/", "-");
}
