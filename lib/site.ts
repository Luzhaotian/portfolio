export const repoName = "portfolio";

export const isGithubPages = process.env.GITHUB_PAGES === "true";

/**
 * Prefer `NEXT_PUBLIC_BASE_PATH` (injected by next.config for the client bundle).
 * Fall back to `GITHUB_PAGES` for Node-side config / SSR.
 */
function resolveBasePath(): string {
  const fromPublic = process.env.NEXT_PUBLIC_BASE_PATH;
  if (typeof fromPublic === "string") return fromPublic;
  return isGithubPages ? `/${repoName}` : "";
}

/** Subpath when deployed to GitHub Pages (e.g. `/portfolio`). Empty locally. */
export const basePath = resolveBasePath();

/** Client-only: derive origin from the address bar (supports custom domains). */
export function getSiteOrigin(): string {
  const { origin, pathname } = window.location;
  if (!basePath) return origin;
  if (pathname === basePath || pathname.startsWith(`${basePath}/`)) {
    return `${origin}${basePath}`;
  }
  return origin;
}
