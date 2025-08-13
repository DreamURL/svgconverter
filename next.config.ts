import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 배포를 위한 설정
  output: 'export',
  distDir: 'out', // 표준 Next.js 정적 출력 디렉토리
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // sitemap과 RSS를 위한 설정
  experimental: {
    
  },
};

export default nextConfig;
