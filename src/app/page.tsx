'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, Edit, Code } from 'lucide-react';
import { Header } from '@/components/Header';
import { UploadPanel } from '@/components/UploadPanel';
import { PreviewPanel } from '@/components/PreviewPanel';
import { ControlPanel } from '@/components/ControlPanel';
import { CodeModal } from '@/components/CodeModal';
import { ExportTestModal } from '@/components/ExportTestModal';

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
  const [config, setConfig] = useState<SVGConfig>({
    color: '#ffffff',
    fillColor: '#000000',
    strokeWidth: 1,
    size: 100,
    rotation: 0,
    opacity: 1,
    animation: 'none',
    hoverEffect: 'none',
  });
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [isExportTestModalOpen, setIsExportTestModalOpen] = useState(false);
  const [isConverting, setIsConverting] = useState(false);


  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Header 
        onExportCode={() => setIsCodeModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      
      <main className="pt-16">
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
            
            <UploadPanel
              onUpload={(content: string, name: string) => {
                setSvgContent(content);
                setFileName(name);
              }}
              isConverting={isConverting}
              setIsConverting={setIsConverting}
              isDarkMode={isDarkMode}
            />

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
          <div className="h-full flex">
            {/* Left Panel - Controls */}
            <div className={`w-80 border-r ${isDarkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50'} p-6 overflow-y-auto`}>            <ControlPanel
              config={config}
              onChange={(newConfig) => {
                console.log('Config changed:', newConfig); // 디버깅용
                setConfig(newConfig);
              }}
              fileName={fileName}
                onReset={() => {
                  setSvgContent('');
                  setFileName('');
                  setConfig({
                    color: '#ffffff',
                    fillColor: '#000000',
                    strokeWidth: 1,
                    size: 100,
                    rotation: 0,
                    opacity: 1,
                    animation: 'none',
                    hoverEffect: 'none',
                  });
                }}
                isDarkMode={isDarkMode}
              />
            </div>
            
            {/* Right Panel - Preview */}
            <div className="flex-1 p-6 overflow-y-auto">
              <PreviewPanel
                svgContent={svgContent}
                config={config}
                isDarkMode={isDarkMode}
              />
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
      />
      <ExportTestModal
        isOpen={isExportTestModalOpen}
        onClose={() => setIsExportTestModalOpen(false)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
}
