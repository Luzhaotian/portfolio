export const repoName = "portfolio";

export const isGithubPages = process.env.GITHUB_PAGES === "true";

/** Subpath when deployed to GitHub Pages (e.g. `/portfolio`). Empty locally. */
export const basePath = isGithubPages ? `/${repoName}` : "";

/** Client-only: derive origin from the address bar (supports custom domains). */
export function getSiteOrigin(): string {
  const { origin, pathname } = window.location;
  if (!basePath) return origin;
  if (pathname === basePath || pathname.startsWith(`${basePath}/`)) {
    return `${origin}${basePath}`;
  }
  return origin;
}
