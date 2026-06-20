import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "portfolio";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGithubPages
    ? {
        output: "export",
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
