import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 배포를 위한 설정
  output: 'export',
  distDir: '.vercel/output/static', // Cloudflare Pages 설정에 맞춤 (임시)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // sitemap과 RSS를 위한 설정
  experimental: {
    
  },
};

export default nextConfig;
