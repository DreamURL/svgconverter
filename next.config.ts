import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 배포를 위한 설정
  output: 'export',
  distDir: 'out', // 표준 Next.js 정적 출력 디렉토리
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // CSS 최적화는 TailwindCSS + PostCSS + Autoprefixer로 처리됨
  // 정적 export에서 CSS 처리 개선
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
