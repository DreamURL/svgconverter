import type { Metadata } from "next";
import Link from "next/link";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "React SVG Components Generator - Convert Images to TypeScript React Components | Free Tool",
  description: "Generate production-ready React SVG components from images with TypeScript support, customizable props, and clean code output. Perfect for React developers, Next.js projects, and component libraries. Free online tool with instant code generation.",
  keywords: [
    "SVG Studio", "SVG edit", "PNG to SVG", "interactive SVG", "SVG animation", "SVG design",
    "React SVG components", "React component generator", "TypeScript SVG components", "JSX SVG components",
    "React development tools", "component library generator", "production-ready React components", "React UI components",
    "web development tool"
  ],
  openGraph: {
    title: "React SVG Components Generator - Convert Images to React",
    description: "Generate reusable React SVG components from images. TypeScript support, customizable props, and production-ready code.",
    url: "https://svg-studio.com/react-svg-components",
  },
  alternates: {
    canonical: "https://svg-studio.com/react-svg-components",
  },
};

export default function ReactSVGComponents() {
  return (
    <>
      <DefaultGoogleAnalytics />
      <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">React SVG Components Generator</h1>
          <p className="text-xl text-gray-300 mb-8">
            Convert images into reusable React SVG components with TypeScript support, 
            customizable props, and production-ready code.
          </p>

          <div className="bg-gray-900 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">React Component Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">⚛️ React 18+ Compatible</h3>
                <p className="text-gray-400">Generate components compatible with latest React versions and best practices.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">🔷 TypeScript Support</h3>
                <p className="text-gray-400">Full TypeScript definitions with proper prop types and interfaces.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">🎛️ Customizable Props</h3>
                <p className="text-gray-400">Size, color, animation, and style props for maximum flexibility.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">🚀 Production Ready</h3>
                <p className="text-gray-400">Optimized, clean code ready for production applications.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">📱 Responsive Design</h3>
                <p className="text-gray-400">Components that adapt to different screen sizes automatically.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">🎨 Style Integration</h3>
                <p className="text-gray-400">Works with CSS modules, styled-components, and Tailwind CSS.</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Link 
              href="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Create React SVG Components →
            </Link>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>Generate React SVG Components in 3 Steps</h2>
            <ol>
              <li><strong>Upload Image:</strong> Convert PNG, JPG, or existing SVG to React component</li>
              <li><strong>Customize Component:</strong> Set default props, colors, animations, and styling</li>
              <li><strong>Export Code:</strong> Get complete React component with TypeScript definitions</li>
            </ol>

            <h2>Example Generated Component</h2>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code>{`interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animate?: 'spin' | 'pulse' | 'none';
}

export function MyIcon({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  animate = 'none'
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={\`icon \${animate} \${className}\`}
    >
      <path
        fill={color}
        d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
      />
    </svg>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}