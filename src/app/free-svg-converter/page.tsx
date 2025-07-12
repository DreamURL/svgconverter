import type { Metadata } from "next";
import Link from "next/link";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Free SVG Converter Online - Convert Images to SVG Files Instantly",
  description: "Convert any image to SVG format for free. Upload PNG, JPG, GIF files and get scalable vector graphics instantly. No registration required, 100% free online tool.",
  keywords: [
    "free SVG converter",
    "image to SVG free",
    "convert PNG to SVG",
    "convert JPG to SVG", 
    "free vector converter",
    "online SVG tool"
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

          <div className="prose prose-invert max-w-none">
            <h2>How to Convert Images to SVG for Free</h2>
            <ol>
              <li><strong>Upload Your Image:</strong> Drag and drop or click to upload PNG, JPG, or GIF files</li>
              <li><strong>Customize Settings:</strong> Adjust colors, size, rotation, and animation effects</li>
              <li><strong>Export Your SVG:</strong> Get clean SVG code, React components, or CSS</li>
            </ol>

            <h2>Benefits of SVG Format</h2>
            <ul>
              <li><strong>Scalable:</strong> SVG files look crisp at any size, perfect for responsive design</li>
              <li><strong>Lightweight:</strong> Vector graphics are often smaller than bitmap images</li>
              <li><strong>SEO-Friendly:</strong> Search engines can index SVG content and text</li>
              <li><strong>Interactive:</strong> Add animations and hover effects to SVG elements</li>
              <li><strong>Editable:</strong> Modify colors, shapes, and styles with CSS or code</li>
            </ul>

            <h2>Best Use Cases for Free SVG Conversion</h2>
            <ul>
              <li>Website icons and logos</li>
              <li>UI components for web applications</li>
              <li>Scalable graphics for mobile apps</li>
              <li>Print-ready vector illustrations</li>
              <li>Interactive web animations</li>
            </ul>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}