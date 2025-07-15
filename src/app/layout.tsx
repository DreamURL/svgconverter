import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SVG Studio - Convert Images to Interactive SVG Components | Professional Online Tool",
  description: "Transform your images into customizable SVG components with real-time editing, animations, and exportable React code. Professional online SVG converter and editor for developers and designers.",
  keywords: [
    // Primary Keywords
    "SVG converter", "image to SVG", "SVG editor", "React SVG components", "SVG animation", "SVG to code",
    
    // Professional Tools Keywords
    "online SVG converter", "web SVG editor", "vector converter", "image converter",
    "browser SVG tool", "SVG conversion", "SVG generator",
    
    // File Format Keywords
    "PNG to SVG", "JPG to SVG", "JPEG to SVG", "GIF to SVG", "bitmap to vector",
    "raster to vector", "image format converter", "vector graphics converter",
    
    // Developer Keywords
    "React SVG components", "TypeScript SVG", "Next.js SVG", "SVG component library",
    "JSX SVG components", "reusable SVG components", "SVG icon generator",
    
    // Web Development Keywords
    "web development tools", "frontend tools", "UI development", "responsive SVG",
    "scalable vector graphics", "SVG optimization", "web graphics", "CSS SVG",
    
    // Design Keywords
    "vector graphics editor", "SVG design tool", "icon creator", "logo converter",
    "illustration converter", "graphic design tool", "SVG customization",
    
    // Animation Keywords
    "SVG animation", "animated SVG", "interactive SVG", "SVG hover effects",
    "CSS SVG animation", "SVG transitions", "dynamic SVG",
    
    // Long-tail Keywords
    "convert image to scalable vector graphics", "online SVG editor with real-time preview",
    "generate React components from SVG", "responsive SVG for web development",
    "free online vector graphics converter", "SVG editor for web developers",
    "custom SVG components with animations", "professional SVG editing tool",
    
    // Technical Keywords
    "SVG code generator", "clean SVG markup", "optimized SVG files", "SVG path editor",
    "SVG viewport", "SVG viewBox", "inline SVG", "external SVG files",
    
    // Use Case Keywords
    "website icons", "mobile app icons", "web UI components", "dashboard icons",
    "navigation icons", "button icons", "social media icons", "brand logos",
    
    // Platform Keywords
    "browser-based SVG editor", "online vector editor", "cloud SVG tool",
    "cross-platform SVG editor", "mobile-friendly SVG converter"
  ],
  authors: [{ name: "SVG Studio Team" }],
  creator: "SVG Studio",
  publisher: "SVG Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://svg-studio.com",
    siteName: "SVG Studio",
    title: "SVG Studio - Convert Images to Interactive SVG Components",
    description: "Transform your images into customizable SVG components with real-time editing, animations, and exportable React code. Free online SVG converter and editor.",
    images: [
      {
        url: "https://svg-studio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SVG Studio - Online SVG Converter and Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SVG Studio - Convert Images to Interactive SVG Components",
    description: "Transform your images into customizable SVG components with real-time editing, animations, and exportable React code.",
    images: ["https://svg-studio.com/twitter-image.png"],
    creator: "@svgstudio",
  },
  alternates: {
    canonical: "https://svg-studio.com",
  },
  metadataBase: new URL("https://svg-studio.com"),
  category: "Web Development Tools",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd />
        <DefaultGoogleAnalytics />
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-9786013383976168" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9786013383976168"
          crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
