import type { Metadata } from "next";
import Link from "next/link";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "React SVG Components Generator - Convert Images to TypeScript React Components | Free Tool",
  description: "Generate production-ready React SVG components from images with TypeScript support, customizable props, and clean code output. Perfect for React developers, Next.js projects, and component libraries. Free online tool with instant code generation.",
  keywords: [
    // Primary React Keywords
    "React SVG components", "React SVG generator", "SVG to React converter",
    "React component generator", "JSX SVG components", "React icon generator",
    
    // TypeScript Keywords
    "TypeScript SVG components", "TypeScript React SVG", "typed SVG components",
    "React SVG with TypeScript", "type-safe SVG components",
    
    // Framework Keywords
    "Next.js SVG components", "React 18 SVG components", "React Native SVG",
    "Gatsby SVG components", "Create React App SVG", "Vite React SVG",
    
    // Development Keywords
    "React development tools", "component library generator", "reusable React components",
    "React UI components", "React icon library", "React graphics components",
    
    // Code Quality Keywords
    "production-ready React components", "clean React code", "optimized React SVG",
    "tree-shakeable SVG components", "performant React components",
    
    // Props and Customization
    "customizable React components", "configurable SVG props", "dynamic React SVG",
    "responsive React components", "themed React components",
    
    // Design System Keywords
    "React design system", "component design system", "SVG design tokens",
    "React component library", "UI component generator", "design system tools",
    
    // Developer Experience
    "React developer tools", "SVG automation", "code generation tools",
    "React workflow tools", "developer productivity", "rapid prototyping React",
    
    // Bundle and Performance
    "lightweight React components", "small bundle React SVG", "optimized React icons",
    "tree-shaking React components", "performance React SVG",
    
    // Accessibility Keywords
    "accessible React SVG", "ARIA React components", "semantic React SVG",
    "screen reader friendly SVG", "inclusive React components",
    
    // Styling Keywords
    "styled-components SVG", "emotion React SVG", "CSS-in-JS SVG",
    "Tailwind CSS React SVG", "styled React components",
    
    // Use Cases
    "React icon components", "React logo components", "React illustration components",
    "React navigation icons", "React button icons", "React dashboard icons",
    
    // Technical Keywords
    "React SVG props", "React component props", "SVG React hooks",
    "React SVG rendering", "client-side React SVG", "server-side React SVG",
    
    // Alternative Keywords
    "React-icons alternative", "custom React icons", "bespoke React components",
    "unique React SVG", "branded React components",
    
    // Long-tail Keywords
    "how to create React SVG components", "best React SVG component generator",
    "convert SVG to React component online", "React SVG component best practices",
    "generate TypeScript React components from SVG",
    
    // Enterprise Keywords
    "enterprise React components", "scalable React architecture", "maintainable React code",
    "React component standards", "professional React development"
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