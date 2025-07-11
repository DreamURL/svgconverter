import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: '.vercel/output/static',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
