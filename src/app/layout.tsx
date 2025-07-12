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
  title: "SVG Studio - Convert Images to Interactive SVG Components | Free Online Tool",
  description: "Transform your images into customizable SVG components with real-time editing, animations, and exportable React code. Free online SVG converter and editor for developers and designers.",
  keywords: [
    "SVG converter",
    "image to SVG", 
    "SVG editor",
    "React components",
    "SVG animation",
    "web development tools",
    "online SVG tool",
    "vector graphics",
    "responsive SVG",
    "SVG customization",
    "free SVG converter",
    "SVG code generator"
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
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
