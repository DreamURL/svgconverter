import type { Metadata } from "next";
import Link from "next/link";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "SVG Converter Online - Convert PNG, JPG, GIF to SVG Files Instantly | Professional Tool",
  description: "Convert any image to SVG format completely free. Upload PNG, JPG, JPEG, GIF files and get high-quality scalable vector graphics instantly. No registration, no watermarks, unlimited conversions. Professional SVG converter for web developers and designers.",
  keywords: [
    // Primary Free Keywords
    "free SVG converter", "free online SVG converter", "free image to SVG", "free vector converter",
    "no cost SVG converter", "unlimited free SVG conversion", "free SVG generator",
    
    // File Format Conversion
    "PNG to SVG free", "JPG to SVG free", "JPEG to SVG converter", "GIF to SVG online",
    "bitmap to SVG converter", "raster to vector free", "photo to SVG converter",
    "image format converter free", "picture to SVG converter",
    
    // No Registration Keywords
    "no registration SVG converter", "no signup SVG tool", "instant SVG conversion",
    "anonymous SVG converter", "guest SVG converter", "no account needed",
    
    // Quality Keywords
    "high quality SVG conversion", "lossless SVG converter", "professional SVG output",
    "clean SVG files", "optimized SVG conversion", "best free SVG converter",
    
    // Use Case Keywords
    "convert logo to SVG free", "convert icon to SVG", "convert illustration to SVG",
    "website graphics to SVG", "print graphics to SVG", "scalable graphics converter",
    
    // Comparison Keywords
    "alternative to Adobe Illustrator", "free Illustrator alternative", "Photoshop to SVG",
    "Canva to SVG", "better than paid converters", "professional quality free tool",
    
    // Long-tail Keywords
    "how to convert image to SVG for free", "best free online SVG converter 2024",
    "convert multiple images to SVG free", "batch SVG conversion free",
    "free SVG converter for web developers", "free SVG converter for designers",
    
    // Technical Features
    "drag and drop SVG converter", "bulk SVG conversion", "batch image to SVG",
    "fast SVG conversion", "instant SVG generator", "real-time SVG preview",
    
    // Mobile Keywords
    "mobile SVG converter", "SVG converter for mobile", "responsive SVG converter",
    "tablet SVG converter", "cross-device SVG tool",
    
    // Business Keywords
    "commercial use SVG converter", "business SVG tool", "enterprise SVG converter",
    "royalty-free SVG conversion", "copyright-free SVG tool"
  ],
  openGraph: {
    title: "Free SVG Converter - Convert Images to SVG Online",
    description: "Convert any image to SVG format for free. Upload PNG, JPG, GIF files and get scalable vector graphics instantly.",
    url: "https://dreamurl.github.io/svgconverter/free-svg-converter",
  },
  alternates: {
    canonical: "https://dreamurl.github.io/svgconverter/free-svg-converter",
  },
};


export default function FreeSVGConverter() {
  return (
    <>
      <DefaultGoogleAnalytics />
      <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Free SVG Converter Online</h1>
          <p className="text-xl text-gray-300 mb-8">
            Convert your images to SVG format instantly with our free online tool. 
            Perfect for web developers and designers who need scalable vector graphics.
          </p>

          <div className="bg-gray-900 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Our Free SVG Converter?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">✨ 100% Free Forever</h3>
                <p className="text-gray-400">No hidden fees, no registration required. Convert unlimited images to SVG for free.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">⚡ Instant Conversion</h3>
                <p className="text-gray-400">Upload your image and get SVG results in seconds. Fast processing with high-quality output.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">🎨 Multiple Formats</h3>
                <p className="text-gray-400">Convert PNG, JPG, GIF, and other image formats to scalable SVG files.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">🔧 Developer-Friendly</h3>
                <p className="text-gray-400">Export as React components, CSS, or clean SVG code ready for your projects.</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Link 
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Start Converting Images to SVG →
            </Link>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}