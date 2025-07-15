import type { Metadata } from "next";
import Link from "next/link";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "SVG Converter Online - Convert PNG, JPG, GIF to SVG Files Instantly | Professional Tool",
  description: "Convert any image to SVG format completely free. Upload PNG, JPG, JPEG, GIF files and get high-quality scalable vector graphics instantly. No registration, no watermarks, unlimited conversions. Professional SVG converter for web developers and designers.",
  keywords: [
    "SVG Studio", "SVG edit", "PNG to SVG", "interactive SVG", "SVG animation", "SVG design",
    "free SVG converter", "online SVG converter", "image to SVG", "vector graphics converter",
    "no registration SVG tool", "instant SVG conversion", "scalable vector graphics", "web development tool",
    "graphic design converter"
  ],
  openGraph: {
    title: "Free SVG Converter - Convert Images to SVG Online",
    description: "Convert any image to SVG format for free. Upload PNG, JPG, GIF files and get scalable vector graphics instantly.",
    url: "https://svg-studio.com/free-svg-converter",
  },
  alternates: {
    canonical: "https://svg-studio.com/free-svg-converter",
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