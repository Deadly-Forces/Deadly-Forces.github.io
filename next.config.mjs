/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";
const isRootPages = repo.toLowerCase().endsWith(".github.io");
const basePath = process.env.GITHUB_ACTIONS && !isRootPages && repo ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
