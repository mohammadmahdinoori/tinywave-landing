import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: "/tinywave-landing",
  assetPrefix: "/tinywave-landing"
};

export default nextConfig;
