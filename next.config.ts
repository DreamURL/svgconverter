import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 배포를 위한 설정
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // sitemap과 RSS를 위한 설정
  experimental: {
    
  },
};

export default nextConfig;
