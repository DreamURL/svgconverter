import type { Metadata } from "next";
import Link from "next/link";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Professional Online SVG Editor - Edit Colors, Animations & Export React Components | Free Tool",
  description: "Advanced online SVG editor with real-time preview, color customization, animations, and React component export. Professional vector graphics editor for web developers and designers. Free, browser-based, no installation required.",
  keywords: [
    // Primary Editor Keywords
    "SVG editor online", "online SVG editor", "web-based SVG editor", "browser SVG editor",
    "professional SVG editor", "advanced SVG editor", "SVG editor free",
    
    // Feature Keywords
    "SVG color editor", "SVG animation editor", "SVG size editor", "SVG rotation editor",
    "real-time SVG editor", "live SVG preview", "interactive SVG editor",
    
    // Vector Graphics Keywords
    "vector graphics editor", "vector editor online", "scalable graphics editor",
    "vector art editor", "vector design tool", "graphic design editor",
    
    // Editing Features
    "edit SVG colors", "change SVG colors", "SVG stroke editor", "SVG fill editor",
    "SVG opacity editor", "SVG transform editor", "SVG properties editor",
    
    // Animation Keywords
    "SVG animation creator", "animated SVG editor", "SVG hover effects editor",
    "CSS SVG animations", "interactive SVG creator", "dynamic SVG editor",
    
    // Export Keywords
    "SVG to React converter", "export SVG as React", "React component generator",
    "SVG code generator", "clean SVG export", "optimized SVG output",
    
    // Alternative Keywords
    "free Adobe Illustrator alternative", "Illustrator online alternative",
    "Inkscape online alternative", "vector editor alternative",
    
    // Professional Keywords
    "professional vector editor", "commercial SVG editor", "enterprise SVG tool",
    "production-ready SVG editor", "developer SVG editor",
    
    // Use Case Keywords
    "icon editor online", "logo editor SVG", "illustration editor",
    "UI design SVG editor", "web design vector editor",
    
    // Technical Keywords
    "SVG path editor", "SVG viewBox editor", "SVG DOM editor",
    "XML SVG editor", "SVG markup editor", "SVG element editor",
    
    // Workflow Keywords
    "design to code SVG", "SVG prototyping tool", "rapid SVG development",
    "SVG workflow tool", "collaborative SVG editor",
    
    // Platform Keywords
    "cross-platform SVG editor", "mobile SVG editor", "tablet SVG editor",
    "responsive SVG editor", "multi-device SVG tool",
    
    // Long-tail Keywords
    "how to edit SVG files online", "best online SVG editor 2024",
    "free professional SVG editor", "SVG editor for web developers",
    "online vector graphics editor with animations"
  ],
  openGraph: {
    title: "Online SVG Editor - Edit & Customize SVG Files",
    description: "Professional online SVG editor with real-time preview. Edit colors, animations, size, and export as React components.",
    url: "https://dreamurl.github.io/svgconverter/svg-editor-online",
  },
  alternates: {
    canonical: "https://dreamurl.github.io/svgconverter/svg-editor-online",
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