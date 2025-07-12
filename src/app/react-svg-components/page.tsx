import type { Metadata } from "next";
import Link from "next/link";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "React SVG Components Generator - Convert Images to React SVG Components",
  description: "Generate reusable React SVG components from images. TypeScript support, customizable props, and production-ready code. Perfect for React developers.",
  keywords: [
    "React SVG components",
    "SVG to React",
    "React component generator",
    "TypeScript SVG",
    "React development tools",
    "SVG components library"
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

            <h2>Perfect for React Developers</h2>
            <ul>
              <li><strong>Component Libraries:</strong> Build consistent icon libraries for your design system</li>
              <li><strong>Next.js Apps:</strong> Optimized SVG components for Next.js applications</li>
              <li><strong>TypeScript Projects:</strong> Full type safety with proper interfaces</li>
              <li><strong>Design Systems:</strong> Reusable components with consistent styling</li>
              <li><strong>Performance:</strong> Lightweight SVG components that don't affect bundle size</li>
            </ul>

            <h2>Advanced Component Features</h2>
            <ul>
              <li><strong>Dynamic Props:</strong> Color, size, and animation controlled via props</li>
              <li><strong>Accessibility:</strong> ARIA labels and semantic HTML structure</li>
              <li><strong>Tree Shaking:</strong> Components that work with modern bundlers</li>
              <li><strong>CSS-in-JS Ready:</strong> Compatible with styled-components and emotion</li>
              <li><strong>SSR Support:</strong> Server-side rendering compatible</li>
            </ul>

            <h2>Use Cases for React SVG Components</h2>
            <ul>
              <li>Icon libraries for web applications</li>
              <li>Custom illustrations and graphics</li>
              <li>Interactive UI elements</li>
              <li>Animated logos and branding</li>
              <li>Responsive design elements</li>
              <li>Data visualization components</li>
            </ul>

            <h2>Why Generate React Components?</h2>
            <p>Converting SVG to React components offers several advantages:</p>
            <ul>
              <li><strong>Reusability:</strong> Use the same component across your application</li>
              <li><strong>Maintainability:</strong> Update once, reflect everywhere</li>
              <li><strong>Type Safety:</strong> Catch errors at compile time with TypeScript</li>
              <li><strong>Performance:</strong> Better tree-shaking and bundle optimization</li>
              <li><strong>Developer Experience:</strong> IntelliSense and autocomplete support</li>
            </ul>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}