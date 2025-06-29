import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required for static export
  },
  basePath: '/tinywave-landing', // only if deploying to a subpath (i.e., GitHub Pages)
  assetPrefix: '/tinywave-landing',
};

export default nextConfig;
