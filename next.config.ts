import type { NextConfig } from "next";


// 👉 Replace with your GitHub repo name
const repoName = "suhas-portfolio";

const basePath =
  process.env.NODE_ENV === "production" ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",

  basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;