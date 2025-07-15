import type { Metadata } from "next";
import Link from "next/link";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Professional Online SVG Editor - Edit Colors, Animations & Export React Components | Free Tool",
  description: "Advanced online SVG editor with real-time preview, color customization, animations, and React component export. Professional vector graphics editor for web developers and designers. Free, browser-based, no installation required.",
  keywords: [
    "SVG Studio", "SVG edit", "PNG to SVG", "interactive SVG", "SVG animation", "SVG design",
    "online SVG editor", "vector graphics editor", "SVG color editor", "real-time SVG preview",
    "React component generator", "professional SVG editor", "web development tool", "graphic design editor",
    "browser-based SVG editor"
  ],
  openGraph: {
    title: "Online SVG Editor - Edit & Customize SVG Files",
    description: "Professional online SVG editor with real-time preview. Edit colors, animations, size, and export as React components.",
    url: "https://svg-studio.com/svg-editor-online",
  },
  alternates: {
    canonical: "https://svg-studio.com/svg-editor-online",
  },
};

export default function SVGEditorOnline() {
  return (
    <>
      <DefaultGoogleAnalytics />
      <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Professional Online SVG Editor</h1>
          <p className="text-xl text-gray-300 mb-8">
            Edit SVG files with our powerful online editor. Real-time preview, 
            color customization, animations, and code export for developers.
          </p>

          <div className="bg-gray-900 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">SVG Editor Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">🎨 Color Customization</h3>
                <p className="text-gray-400">Change fill colors, stroke colors, and opacity with an intuitive color picker interface.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">📐 Size & Transform</h3>
                <p className="text-gray-400">Resize, rotate, and scale your SVG graphics with precise controls.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">✨ Animation Effects</h3>
                <p className="text-gray-400">Add spin, pulse, scale, and bounce animations to make your SVG interactive.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">⚡ Real-time Preview</h3>
                <p className="text-gray-400">See changes instantly as you edit, with live preview of all modifications.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">💻 Code Export</h3>
                <p className="text-gray-400">Export as React components, CSS, or clean SVG code for your projects.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">🌐 Browser-Based</h3>
                <p className="text-gray-400">No software installation needed. Works in any modern web browser.</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Link 
              href="/"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Open SVG Editor →
            </Link>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}