import type { NextConfig } from "next";
import { basePath, isGithubPages } from "./lib/site";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Playwright loads the dev server from 127.0.0.1 while the HMR client may
  // report another origin; allow both so Next stops warning about cross-origin
  // dev requests.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Expose basePath to client components (GITHUB_PAGES alone is stripped from the browser bundle).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGithubPages
    ? {
        output: "export",
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
