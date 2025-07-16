'use client';

import { useState, useReducer, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Edit, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { UploadPanel } from '@/components/UploadPanel';
import { PreviewPanel } from '@/components/PreviewPanel';
import { ControlPanel } from '@/components/ControlPanel';
import { CodeModal } from '@/components/CodeModal';
import { ExportTestModal } from '@/components/ExportTestModal';
import { HelpModal } from '@/components/HelpModal';
import { ParsedSVG } from '@/utils/svgParser';
import { 
  svgEditorReducer, 
  migrateToGlobalConfig, 
  convertToLegacyConfig,
  getPathRenderSettings 
} from '@/utils/svgStateManager';

export interface SVGConfig {
  // Color settings
  color: string; // stroke color
  fillColor: string; // fill color
  strokeWidth: number; // stroke width
  
  // Transform settings (independent)
  size: number;
  rotation: number;
  opacity: number;
  
  // Animation settings
  animation: 'none' | 'spin' | 'pulse' | 'scale' | 'bounce';
  
  // Hover effects
  hoverEffect: 'none' | 'scale' | 'rotate' | 'opacity';
}

export default function Home() {
  const [svgContent, setSvgContent] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isControlPanelCollapsed, setIsControlPanelCollapsed] = useState(false);
  
  // 새로운 통합 상태 관리
  const [svgEditorState, dispatchSVGEditor] = useReducer(svgEditorReducer, {
    globalConfig: {
      color: '#000000',
      fillColor: '#000000',
      strokeWidth: 1,
      size: 100,
      rotation: 0,
      opacity: 1,
      animation: 'none',
      hoverEffect: 'none',
    },
    parsedSVG: null,
    selectedPathId: null,
    editMode: 'individual',
    showPathList: false,
  });
  
  // 기존 시스템과의 호환성을 위한 legacy config
  const config = convertToLegacyConfig(svgEditorState.globalConfig);
  const setConfig = (newConfig: SVGConfig) => {
    dispatchSVGEditor({
      type: 'UPDATE_GLOBAL',
      changes: migrateToGlobalConfig(newConfig),
    });
  };
  
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [isExportTestModalOpen, setIsExportTestModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  
  // 디버깅을 위한 상태 모니터링
  useEffect(() => {
    console.log('SVG Editor State changed:', svgEditorState);
  }, [svgEditorState]);

  // AdSense 초기화
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || [];
        (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle = adsbygoogle;
        adsbygoogle.push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, []);

  // SVG 다운로드 함수
  const handleDownloadSVG = () => {
    if (!svgContent || !svgEditorState.parsedSVG) return;

    try {
      // SVG 생성 (애니메이션과 호버 효과 제외)
      const paths = svgEditorState.parsedSVG.paths
        .filter(path => path.visible)
        .map(path => {
          const renderSettings = getPathRenderSettings(path, svgEditorState.globalConfig);
          
          return `    <path
      d="${path.originalPath}"
      fill="${renderSettings.fill}"
      stroke="${renderSettings.stroke}"
      stroke-width="${renderSettings.strokeWidth}"
      stroke-linecap="${renderSettings.strokeLinecap}"
      stroke-linejoin="${renderSettings.strokeLinejoin}"
      opacity="${renderSettings.opacity}"
      ${path.transform ? `transform="${path.transform}"` : ''}
    />`;
        })
        .join('\n');

      const svgCode = `<svg ${svgEditorState.parsedSVG.metadata.width ? `width="${svgEditorState.parsedSVG.metadata.width}"` : ''} ${svgEditorState.parsedSVG.metadata.height ? `height="${svgEditorState.parsedSVG.metadata.height}"` : ''} ${svgEditorState.parsedSVG.metadata.viewBox ? `viewBox="${svgEditorState.parsedSVG.metadata.viewBox}"` : ''} xmlns="${svgEditorState.parsedSVG.metadata.xmlns || 'http://www.w3.org/2000/svg'}" style="transform: scale(${config.size / 100}) rotate(${config.rotation}deg);">
${paths}
</svg>`;

      // 파일 다운로드
      const blob = new Blob([svgCode], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName.replace(/\.[^/.]+$/, '')}_edited.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading SVG:', error);
      alert('Error downloading SVG. Please try again.');
    }
  };


  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Header 
        onExportCode={() => setIsCodeModalOpen(true)}
        onDownloadSVG={svgContent ? handleDownloadSVG : undefined}
        onShowHelp={() => setIsHelpModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      
      <main className="pt-20 md:pt-16">
        {!svgContent ? (
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${isDarkMode ? 'from-white to-gray-400' : 'from-black to-gray-600'} bg-clip-text text-transparent`}>
                Turn Images into
                <br />
                Interactive SVG
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
                Convert your images and GIFs to customizable SVG components with animations, hover effects, and exportable React code.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8 items-start">
              {/* Upload Section */}
              <div className="md:col-span-3 max-w-4xl">
                <UploadPanel
                  onUpload={(content: string, name: string, parsedSVG?: ParsedSVG) => {
                    setSvgContent(content);
                    setFileName(name);
                    dispatchSVGEditor({
                      type: 'SET_PARSED_SVG',
                      parsedSVG: parsedSVG || null,
                    });
                  }}
                  isConverting={isConverting}
                  setIsConverting={setIsConverting}
                  isDarkMode={isDarkMode}
                />
              </div>

              {/* Product Hunt Section */}
              <div className="md:col-span-2 text-center md:text-left">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      🚀 Love SVG Studio?
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Help us reach more developers by leaving a review and voting on Product Hunt. Your support helps us build better tools for the community!
                    </p>
                  </div>
                  <a href="https://www.producthunt.com/products/svg-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-svg&#0045;studio" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                    <Image
                      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=992197&theme=dark&t=1752569302300"
                      alt="SVG Studio - Edit SVG and export as react/inline/css code | Product Hunt"
                      width={250}
                      height={54}
                      style={{ width: 250, height: 54 }}
                    />
                  </a>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    ⭐ Takes less than 30 seconds
                  </p>
                </div>
              </div>
            </div>

            {/* Google AdSense Section - Prominent placement */}
            <div className="mt-16">
              <div className={`p-6 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2 text-center`}>
                  Advertisement
                </p>
                <ins className="adsbygoogle"
                     style={{display: 'block'}}
                     data-ad-client="ca-pub-9786013383976168"
                     data-ad-slot="9580679762"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
              </div>
            </div>

            {/* Clear Site Identity Section */}
            <div className="mt-16">
              <div className={`rounded-lg p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <h2 className={`text-3xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  About SVG Studio - Professional Vector Graphics Platform
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                  <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    SVG Studio is a comprehensive web-based platform specifically designed for converting, editing, and optimizing Scalable Vector Graphics (SVG) files. Our platform serves web developers, UI/UX designers, graphic artists, and digital marketing professionals who need high-quality vector graphics for modern web applications, mobile apps, and digital projects.
                  </p>
                  <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    As a specialized SVG processing tool, we focus on three core functionalities: image-to-SVG conversion using advanced vectorization algorithms, real-time SVG editing with precision controls, and automated code generation for popular web frameworks including React, Vue.js, and Angular. Our platform eliminates the need for expensive desktop software while providing professional-grade results.
                  </p>
                  <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Built for the modern web development ecosystem, SVG Studio integrates seamlessly with contemporary development workflows. We support TypeScript definitions, provide clean and optimized code output, and ensure all generated SVG files are web-performance optimized with proper accessibility standards. Our tool is particularly valuable for teams working on responsive web design, icon libraries, and scalable user interface components.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Specifications Section */}
            <div className="mt-16">
              <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Technical Specifications & Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    🔧 Input Format Support
                  </h3>
                  <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li><strong>Raster Images:</strong> PNG, JPG, JPEG, GIF (up to 10MB)</li>
                    <li><strong>Vector Files:</strong> SVG, existing vector graphics</li>
                    <li><strong>Processing:</strong> Advanced edge detection and vectorization</li>
                    <li><strong>Quality:</strong> Lossless conversion with detail preservation</li>
                    <li><strong>Optimization:</strong> Automatic path simplification and compression</li>
                  </ul>
                </div>
                <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    🎨 Editing Capabilities
                  </h3>
                  <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li><strong>Color Control:</strong> Individual path color customization</li>
                    <li><strong>Transformations:</strong> Scale, rotate, position adjustments</li>
                    <li><strong>Animations:</strong> CSS-based spin, pulse, scale, bounce effects</li>
                    <li><strong>Opacity:</strong> Transparency and layer blending controls</li>
                    <li><strong>Stroke:</strong> Width, color, and style modifications</li>
                  </ul>
                </div>
                <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    💻 Code Generation
                  </h3>
                  <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li><strong>React Components:</strong> JSX with TypeScript definitions</li>
                    <li><strong>CSS Output:</strong> Clean CSS with animation keyframes</li>
                    <li><strong>SVG Markup:</strong> Optimized, standards-compliant code</li>
                    <li><strong>Props Support:</strong> Customizable size, color, animation props</li>
                    <li><strong>Tree Shaking:</strong> Optimized for modern bundlers</li>
                  </ul>
                </div>
                <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    🚀 Performance & Compatibility
                  </h3>
                  <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li><strong>Browser Support:</strong> All modern browsers (Chrome, Firefox, Safari, Edge)</li>
                    <li><strong>Processing Speed:</strong> Real-time editing with instant preview</li>
                    <li><strong>File Size:</strong> Optimized output with minimal file size</li>
                    <li><strong>Accessibility:</strong> ARIA labels and semantic markup</li>
                    <li><strong>Responsive:</strong> Scalable graphics for all screen sizes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Use Cases and Target Audience */}
            <div className="mt-16">
              <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Professional Use Cases & Target Audience
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    👨‍💻 Web Developers
                  </h3>
                  <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Creating scalable icons for web applications</li>
                    <li>• Converting design assets to code-ready components</li>
                    <li>• Building responsive UI elements and graphics</li>
                    <li>• Optimizing graphics for web performance</li>
                    <li>• Integrating with React, Vue, Angular projects</li>
                  </ul>
                </div>
                <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    🎨 UI/UX Designers
                  </h3>
                  <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Converting mockups to implementable graphics</li>
                    <li>• Creating consistent icon libraries</li>
                    <li>• Designing scalable brand elements</li>
                    <li>• Prototyping interactive animations</li>
                    <li>• Ensuring design-to-development handoff</li>
                  </ul>
                </div>
                <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    📱 Digital Marketers
                  </h3>
                  <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Creating scalable social media graphics</li>
                    <li>• Converting logos for web and print use</li>
                    <li>• Building email template graphics</li>
                    <li>• Optimizing graphics for fast loading</li>
                    <li>• Maintaining brand consistency across platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Use SVG Studio - Detailed Guide */}
            <div className="mt-16">
              <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                How to Use SVG Studio - Complete Guide
              </h2>
              <div className={`rounded-lg p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      📤 Step 1: Upload Your Image
                    </h3>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Upload any image format (PNG, JPG, GIF, or existing SVG) by clicking the upload area or dragging and dropping your file. Our advanced image processing converts raster images to scalable vector graphics while preserving quality.
                    </p>
                    <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <li>Supports PNG, JPG, JPEG, GIF, and SVG formats</li>
                      <li>Maximum file size: 10MB</li>
                      <li>Automatic format detection and optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      🎨 Step 2: Customize Your SVG
                    </h3>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Use our intuitive editor to customize colors, size, rotation, and animations. Each path in your SVG can be individually controlled or edited globally for consistent styling across your entire graphic.
                    </p>
                    <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <li>Individual path color customization</li>
                      <li>Global size and rotation controls</li>
                      <li>Animation effects (spin, pulse, scale, bounce)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      💻 Step 3: Export Your Code
                    </h3>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Generate production-ready code in multiple formats. Export as React components with TypeScript support, inline CSS, or clean SVG markup. Perfect for modern web development workflows.
                    </p>
                    <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <li>React components with TypeScript</li>
                      <li>CSS code with animations</li>
                      <li>Clean SVG markup</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      🚀 Step 4: Download & Integrate
                    </h3>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Download your customized SVG file or copy the generated code directly into your project. Our code is optimized for performance and follows best practices for web accessibility.
                    </p>
                    <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <li>One-click download functionality</li>
                      <li>Copy code to clipboard</li>
                      <li>Optimized for web performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Features and Benefits Section */}
            <div className="mt-16">
              <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Why Choose SVG Studio?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Precision Control
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Edit individual SVG paths with pixel-perfect precision. Control colors, opacity, and animations for each element separately or apply changes globally.
                  </p>
                </div>
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Real-time Preview
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    See changes instantly as you edit. Our real-time preview ensures you get exactly the result you want before exporting your SVG.
                  </p>
                </div>
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Developer-Friendly
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Export clean, optimized code that integrates seamlessly with React, Vue, Angular, and vanilla JavaScript projects. TypeScript support included.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Frequently Asked Questions
              </h2>
              <div className={`rounded-lg p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      What image formats can I upload?
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      SVG Studio supports PNG, JPG, JPEG, GIF, and existing SVG files. We automatically convert raster images to vector format while maintaining quality and detail.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Is SVG Studio free to use?
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Yes! SVG Studio is completely free to use. You can convert unlimited images, customize SVG graphics, and export code without any restrictions or watermarks.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Can I use the generated code in commercial projects?
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Absolutely! All code generated by SVG Studio can be used in personal and commercial projects without any licensing restrictions.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Do you store my uploaded images?
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      No, we don&apos;t store your images. All processing happens in your browser, and your files remain completely private and secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            {/* SEO Links Section */}
            <div className="mt-16 text-center">
              <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Explore Our SVG Tools
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link 
                  href="/free-svg-converter"
                  className={`p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`}
                >
                  <div className={`w-12 h-12 rounded-lg ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} flex items-center justify-center mb-4`}>
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    Free SVG Converter
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Convert any image to SVG format instantly. No registration required, 100% free.
                  </p>
                </Link>

                <Link 
                  href="/svg-editor-online"
                  className={`p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`}
                >
                  <div className={`w-12 h-12 rounded-lg ${isDarkMode ? 'bg-purple-600' : 'bg-purple-500'} flex items-center justify-center mb-4`}>
                    <Edit className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    SVG Editor Online
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Professional SVG editor with colors, animations, and real-time preview.
                  </p>
                </Link>

                <Link 
                  href="/react-svg-components"
                  className={`p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`}
                >
                  <div className={`w-12 h-12 rounded-lg ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} flex items-center justify-center mb-4`}>
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    React SVG Components
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Generate TypeScript React components from your SVG files.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 top-16 flex">
            {/* Left Panel - Controls */}
            {!isControlPanelCollapsed && (
              <div className={`w-80 border-r ${isDarkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50'} overflow-y-auto z-40`}>
                <div className="p-6">
                  <ControlPanel
              config={config}
              onChange={(newConfig) => {
                console.log('Config changed:', newConfig); // 디버깅용
                setConfig(newConfig);
              }}
              fileName={fileName}
              onReset={() => {
                setSvgContent('');
                setFileName('');
                dispatchSVGEditor({
                  type: 'UPDATE_GLOBAL',
                  changes: {
                    color: '#ffffff',
                    fillColor: '#000000',
                    strokeWidth: 1,
                    size: 100,
                    rotation: 0,
                    opacity: 1,
                    animation: 'none',
                    hoverEffect: 'none',
                  },
                });
                dispatchSVGEditor({
                  type: 'SET_PARSED_SVG',
                  parsedSVG: null,
                });
              }}
              isDarkMode={isDarkMode}
              // 새로운 path 편집 관련 props
              svgEditorState={svgEditorState}
              onPathUpdate={(pathId, changes) => {
                dispatchSVGEditor({
                  type: 'UPDATE_PATH',
                  pathId,
                  changes,
                });
              }}
              onPathToggleIndividual={(pathId) => {
                dispatchSVGEditor({
                  type: 'TOGGLE_INDIVIDUAL',
                  pathId,
                });
              }}
              onPathReset={(pathId) => {
                dispatchSVGEditor({
                  type: 'RESET_PATH',
                  pathId,
                });
              }}
              onPathSelect={(pathId) => {
                dispatchSVGEditor({
                  type: 'SET_SELECTED_PATH',
                  pathId,
                });
              }}
              onEditModeChange={(mode) => {
                dispatchSVGEditor({
                  type: 'SET_EDIT_MODE',
                  mode,
                });
              }}
            />
                </div>
              </div>
            )}
            
            {/* Toggle Button */}
            <button
              onClick={() => setIsControlPanelCollapsed(!isControlPanelCollapsed)}
              className={`absolute top-16 ${isControlPanelCollapsed ? 'left-2' : 'left-80'} z-50 p-2 rounded-lg ${isDarkMode ? 'bg-blue-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-black'} shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`}
              title={isControlPanelCollapsed ? 'Show Controls' : 'Hide Controls'}
            >
              {isControlPanelCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
            
            {/* Right Panel - Preview */}
            <div className={`flex-1 overflow-auto ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
              <div className="p-6 h-full">
                <PreviewPanel
                  svgContent={svgContent}
                  config={config}
                  isDarkMode={isDarkMode}
                  // 새로운 path별 편집 정보 전달
                  svgEditorState={svgEditorState}
                  onPathSelect={(pathId: string) => {
                    dispatchSVGEditor({
                      type: 'SET_SELECTED_PATH',
                      pathId,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <CodeModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        svgContent={svgContent}
        config={config}
        fileName={fileName}
        // 새로운 path별 편집 정보 전달
        svgEditorState={svgEditorState}
      />
      <ExportTestModal
        isOpen={isExportTestModalOpen}
        onClose={() => setIsExportTestModalOpen(false)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
